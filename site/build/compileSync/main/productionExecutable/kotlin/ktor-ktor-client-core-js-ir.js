(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js', './ktor-ktor-utils-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './ktor-ktor-events-js-ir.js', './ktor-ktor-io-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-websockets-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./ktor-ktor-events-js-ir.js'), require('./ktor-ktor-io-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-websockets-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-events-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-events-js-ir' was not found. Please, check whether 'ktor-ktor-events-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-io-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-io-js-ir' was not found. Please, check whether 'ktor-ktor-io-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    if (typeof this['ktor-ktor-websockets-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-core-js-ir'. Its dependency 'ktor-ktor-websockets-js-ir' was not found. Please, check whether 'ktor-ktor-websockets-js-ir' is loaded prior to 'ktor-ktor-client-core-js-ir'.");
    }
    root['ktor-ktor-client-core-js-ir'] = factory(typeof this['ktor-ktor-client-core-js-ir'] === 'undefined' ? {} : this['ktor-ktor-client-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['ktor-ktor-utils-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['ktor-ktor-events-js-ir'], this['ktor-ktor-io-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-websockets-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_kotlin, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_events, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_websockets) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var isObject = kotlin_kotlin.$_$.z9;
  var toString = kotlin_kotlin.$_$.ka;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var classMeta = kotlin_kotlin.$_$.f9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Attributes = kotlin_io_ktor_ktor_utils.$_$.m;
  var Events = kotlin_io_ktor_ktor_events.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Closeable = kotlin_io_ktor_ktor_io.$_$.y;
  var isInterface = kotlin_kotlin.$_$.x9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var SuspendFunction2 = kotlin_kotlin.$_$.t8;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var PlatformUtils_getInstance = kotlin_io_ktor_ktor_utils.$_$.e;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var instanceOf = kotlin_io_ktor_ktor_utils.$_$.j;
  var NullBody_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var equals = kotlin_kotlin.$_$.h9;
  var cancel = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.td;
  var IllegalStateException = kotlin_kotlin.$_$.nc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.z8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.fd;
  var UnsupportedOperationException_init_$Init$ = kotlin_kotlin.$_$.i2;
  var flattenEntries = kotlin_io_ktor_ktor_utils.$_$.u;
  var joinToString$default = kotlin_kotlin.$_$.i;
  var trimMargin$default = kotlin_kotlin.$_$.u;
  var ByteReadChannel_0 = kotlin_io_ktor_ktor_io.$_$.g1;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Long = kotlin_kotlin.$_$.oc;
  var readBytes$default = kotlin_io_ktor_ktor_io.$_$.g;
  var IllegalStateException_init_$Init$_0 = kotlin_kotlin.$_$.z1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.i1;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.p;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rd;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var writer = kotlin_io_ktor_ktor_io.$_$.k1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.q;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.p;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.n;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.o;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.m;
  var SuspendFunction1 = kotlin_kotlin.$_$.s8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.r4;
  var arrayOf = kotlin_kotlin.$_$.hd;
  var createKType = kotlin_kotlin.$_$.b;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.r;
  var get_job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var async$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var emptySet = kotlin_kotlin.$_$.l6;
  var interfaceMeta = kotlin_kotlin.$_$.o9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.i;
  var UnsafeHeaderException = kotlin_io_ktor_ktor_http.$_$.w;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var CoroutineName = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var SilentSupervisor$default = kotlin_io_ktor_ktor_utils.$_$.c;
  var lazy = kotlin_kotlin.$_$.qd;
  var CompletableJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var CloseableCoroutineDispatcher = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l9;
  var setOf = kotlin_kotlin.$_$.k7;
  var Key = kotlin_kotlin.$_$.p8;
  var get = kotlin_kotlin.$_$.m8;
  var fold = kotlin_kotlin.$_$.l8;
  var minusKey = kotlin_kotlin.$_$.n8;
  var plus = kotlin_kotlin.$_$.q8;
  var Element = kotlin_kotlin.$_$.o8;
  var setOf_0 = kotlin_kotlin.$_$.l7;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.h;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.b1;
  var MalformedInputException = kotlin_io_ktor_ktor_io.$_$.q;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.f;
  var toLong = kotlin_kotlin.$_$.ia;
  var toLong_0 = kotlin_kotlin.$_$.ub;
  var contentType = kotlin_io_ktor_ktor_http.$_$.c1;
  var isByteArray = kotlin_kotlin.$_$.r9;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var TextContent_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.b;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u4;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var cancel_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var CancellationException = kotlin_kotlin.$_$.b8;
  var cancel_1 = kotlin_io_ktor_ktor_io.$_$.j1;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.v;
  var getKClass = kotlin_kotlin.$_$.e;
  var writer$default = kotlin_io_ktor_ktor_io.$_$.k;
  var toByteArray = kotlin_io_ktor_ktor_utils.$_$.a;
  var Input = kotlin_io_ktor_ktor_io.$_$.z;
  var ByteReadPacket = kotlin_io_ktor_ktor_io.$_$.x;
  var Unit = kotlin_kotlin.$_$.ed;
  var toString_0 = kotlin_kotlin.$_$.ud;
  var toInt = kotlin_kotlin.$_$.sb;
  var reversed = kotlin_kotlin.$_$.j7;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var charset = kotlin_io_ktor_ktor_http.$_$.a1;
  var withCharset = kotlin_io_ktor_ktor_http.$_$.k1;
  var Comparator = kotlin_kotlin.$_$.gc;
  var compareValues = kotlin_kotlin.$_$.a8;
  var get_name = kotlin_io_ktor_ktor_io.$_$.t;
  var toList = kotlin_kotlin.$_$.r7;
  var sortedWith = kotlin_kotlin.$_$.o7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var charSequenceLength = kotlin_kotlin.$_$.d9;
  var roundToInt = kotlin_kotlin.$_$.la;
  var firstOrNull = kotlin_kotlin.$_$.o6;
  var charset_0 = kotlin_io_ktor_ktor_http.$_$.z;
  var readText$default = kotlin_io_ktor_ktor_io.$_$.h;
  var get_authority = kotlin_io_ktor_ktor_http.$_$.y;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.i1;
  var isSecure = kotlin_io_ktor_ktor_http.$_$.e1;
  var get_authority_0 = kotlin_io_ktor_ktor_http.$_$.x;
  var EventDefinition = kotlin_io_ktor_ktor_events.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.l;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.j;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var cancel_2 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var get_lastIndex = kotlin_kotlin.$_$.v6;
  var downTo = kotlin_kotlin.$_$.qa;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isWebsocket = kotlin_io_ktor_ktor_http.$_$.f1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var IOException = kotlin_io_ktor_ktor_io.$_$.e1;
  var IOException_init_$Init$ = kotlin_io_ktor_ktor_io.$_$.m;
  var HttpMessage = kotlin_io_ktor_ktor_http.$_$.u;
  var URLBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.d;
  var HeadersBuilder_init_$Create$ = kotlin_io_ktor_ktor_http.$_$.c;
  var SupervisorJob$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var takeFrom_0 = kotlin_io_ktor_ktor_http.$_$.h1;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.t;
  var putAll = kotlin_io_ktor_ktor_utils.$_$.w;
  var HttpMessageBuilder = kotlin_io_ktor_ktor_http.$_$.t;
  var GMTDate$default = kotlin_io_ktor_ktor_utils.$_$.b;
  var Pipeline = kotlin_io_ktor_ktor_utils.$_$.i;
  var decode$default = kotlin_io_ktor_ktor_io.$_$.d;
  var hashCode = kotlin_kotlin.$_$.n9;
  var get_ByteArrayPool = kotlin_io_ktor_ktor_io.$_$.f1;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.b;
  var Companion_getInstance_3 = kotlin_io_ktor_ktor_http.$_$.k;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var cancel_3 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m1;
  var Companion_getInstance_4 = kotlin_io_ktor_ktor_http.$_$.h;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var intercepted = kotlin_kotlin.$_$.e8;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var extendThrowable = kotlin_kotlin.$_$.i9;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.v4;
  var createFailure = kotlin_kotlin.$_$.jd;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var toTypedArray = kotlin_kotlin.$_$.y7;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.c;
  var Error_init_$Create$ = kotlin_kotlin.$_$.p1;
  var Error_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var _ChannelResult___get_isSuccess__impl__odq1z9 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var Channel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var Companion_getInstance_6 = kotlin_io_ktor_ktor_websockets.$_$.f;
  var Codes_CLOSED_ABNORMALLY_getInstance = kotlin_io_ktor_ktor_websockets.$_$.a;
  var Text_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.e;
  var Binary_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.c;
  var CloseReason = kotlin_io_ktor_ktor_websockets.$_$.g;
  var Close_init_$Create$ = kotlin_io_ktor_ktor_websockets.$_$.d;
  var String$default = kotlin_io_ktor_ktor_io.$_$.f;
  var BytePacketBuilder_init_$Create$ = kotlin_io_ktor_ktor_io.$_$.l;
  var writeFully$default = kotlin_io_ktor_ktor_io.$_$.i;
  var readShort = kotlin_io_ktor_ktor_io.$_$.c1;
  var cancelConsumed = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var Codes_INTERNAL_ERROR_getInstance = kotlin_io_ktor_ktor_websockets.$_$.b;
  var CompletableDeferred$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var Factory_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var DefaultWebSocketSession = kotlin_io_ktor_ktor_websockets.$_$.h;
  //endregion
  //region block: pre-declaration
  HttpClient$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda.prototype.constructor = HttpClient$slambda;
  HttpClient$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpClient$slambda_1.prototype.constructor = HttpClient$slambda_1;
  $executeCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$0.prototype.constructor = $executeCOROUTINE$0;
  $bodyNullableCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $bodyNullableCOROUTINE$1.prototype.constructor = $bodyNullableCOROUTINE$1;
  DoubleReceiveException.prototype = Object.create(IllegalStateException.prototype);
  DoubleReceiveException.prototype.constructor = DoubleReceiveException;
  NoTransformationFoundException.prototype = Object.create(UnsupportedOperationException.prototype);
  NoTransformationFoundException.prototype.constructor = NoTransformationFoundException;
  SavedHttpCall.prototype = Object.create(HttpClientCall.prototype);
  SavedHttpCall.prototype.constructor = SavedHttpCall;
  function get_coroutineContext() {
    return this.r35().d1d();
  }
  SavedHttpResponse.prototype = Object.create(HttpResponse.prototype);
  SavedHttpResponse.prototype.constructor = SavedHttpResponse;
  $saveCOROUTINE$3.prototype = Object.create(CoroutineImpl.prototype);
  $saveCOROUTINE$3.prototype.constructor = $saveCOROUTINE$3;
  UnsupportedContentTypeException.prototype = Object.create(IllegalStateException.prototype);
  UnsupportedContentTypeException.prototype.constructor = UnsupportedContentTypeException;
  ObservableContent$content$slambda.prototype = Object.create(CoroutineImpl.prototype);
  ObservableContent$content$slambda.prototype.constructor = ObservableContent$content$slambda;
  ObservableContent.prototype = Object.create(ReadChannelContent.prototype);
  ObservableContent.prototype.constructor = ObservableContent;
  HttpClientEngine$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$install$slambda.prototype.constructor = HttpClientEngine$install$slambda;
  HttpClientEngine$executeWithinCallContext$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpClientEngine$executeWithinCallContext$slambda.prototype.constructor = HttpClientEngine$executeWithinCallContext$slambda;
  $executeWithinCallContextCOROUTINE$4.prototype = Object.create(CoroutineImpl.prototype);
  $executeWithinCallContextCOROUTINE$4.prototype.constructor = $executeWithinCallContextCOROUTINE$4;
  function get_supportedCapabilities() {
    return emptySet();
  }
  function install(client) {
    var tmp = Phases_getInstance_0().c33_1;
    client.l30_1.i2h(tmp, HttpClientEngine$install$slambda_0(client, this, null));
  }
  ClientEngineClosedException.prototype = Object.create(IllegalStateException.prototype);
  ClientEngineClosedException.prototype.constructor = ClientEngineClosedException;
  BodyProgress$handle$slambda.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda.prototype.constructor = BodyProgress$handle$slambda;
  BodyProgress$handle$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  BodyProgress$handle$slambda_1.prototype.constructor = BodyProgress$handle$slambda_1;
  ResponseException.prototype = Object.create(IllegalStateException.prototype);
  ResponseException.prototype.constructor = ResponseException;
  RedirectResponseException.prototype = Object.create(ResponseException.prototype);
  RedirectResponseException.prototype.constructor = RedirectResponseException;
  ClientRequestException.prototype = Object.create(ResponseException.prototype);
  ClientRequestException.prototype.constructor = ClientRequestException;
  ServerResponseException.prototype = Object.create(ResponseException.prototype);
  ServerResponseException.prototype.constructor = ServerResponseException;
  addDefaultResponseValidation$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  addDefaultResponseValidation$lambda$slambda.prototype.constructor = addDefaultResponseValidation$lambda$slambda;
  defaultTransformers$1$content$1.prototype = Object.create(ByteArrayContent.prototype);
  defaultTransformers$1$content$1.prototype.constructor = defaultTransformers$1$content$1;
  defaultTransformers$1$content$2.prototype = Object.create(ReadChannelContent.prototype);
  defaultTransformers$1$content$2.prototype.constructor = defaultTransformers$1$content$2;
  defaultTransformers$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda.prototype.constructor = defaultTransformers$slambda;
  defaultTransformers$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda$slambda.prototype.constructor = defaultTransformers$slambda$slambda;
  defaultTransformers$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  defaultTransformers$slambda_1.prototype.constructor = defaultTransformers$slambda_1;
  HttpCallValidator$Companion$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda.prototype.constructor = HttpCallValidator$Companion$install$slambda;
  HttpCallValidator$Companion$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_1.prototype.constructor = HttpCallValidator$Companion$install$slambda_1;
  HttpCallValidator$Companion$install$slambda_3.prototype = Object.create(CoroutineImpl.prototype);
  HttpCallValidator$Companion$install$slambda_3.prototype.constructor = HttpCallValidator$Companion$install$slambda_3;
  $validateResponseCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $validateResponseCOROUTINE$5.prototype.constructor = $validateResponseCOROUTINE$5;
  $processExceptionCOROUTINE$6.prototype = Object.create(CoroutineImpl.prototype);
  $processExceptionCOROUTINE$6.prototype.constructor = $processExceptionCOROUTINE$6;
  HttpPlainText$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda.prototype.constructor = HttpPlainText$Plugin$install$slambda;
  HttpPlainText$Plugin$install$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  HttpPlainText$Plugin$install$slambda_1.prototype.constructor = HttpPlainText$Plugin$install$slambda_1;
  HttpRedirect$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRedirect$Plugin$install$slambda.prototype.constructor = HttpRedirect$Plugin$install$slambda;
  $handleCallCOROUTINE$7.prototype = Object.create(CoroutineImpl.prototype);
  $handleCallCOROUTINE$7.prototype.constructor = $handleCallCOROUTINE$7;
  HttpRequestLifecycle$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpRequestLifecycle$Plugin$install$slambda.prototype.constructor = HttpRequestLifecycle$Plugin$install$slambda;
  HttpSend$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpSend$Plugin$install$slambda.prototype.constructor = HttpSend$Plugin$install$slambda;
  $executeCOROUTINE$8.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$8.prototype.constructor = $executeCOROUTINE$8;
  SendCountExceedException.prototype = Object.create(IllegalStateException.prototype);
  SendCountExceedException.prototype.constructor = SendCountExceedException;
  HttpTimeout$Plugin$install$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda$slambda;
  HttpTimeout$Plugin$install$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpTimeout$Plugin$install$slambda.prototype.constructor = HttpTimeout$Plugin$install$slambda;
  HttpRequestTimeoutException.prototype = Object.create(IOException.prototype);
  HttpRequestTimeoutException.prototype.constructor = HttpRequestTimeoutException;
  DelegatedResponse.prototype = Object.create(HttpResponse.prototype);
  DelegatedResponse.prototype.constructor = DelegatedResponse;
  WebSocketException.prototype = Object.create(IllegalStateException.prototype);
  WebSocketException.prototype.constructor = WebSocketException;
  ClientUpgradeContent.prototype = Object.create(NoContent.prototype);
  ClientUpgradeContent.prototype.constructor = ClientUpgradeContent;
  HttpRequestPipeline.prototype = Object.create(Pipeline.prototype);
  HttpRequestPipeline.prototype.constructor = HttpRequestPipeline;
  HttpSendPipeline.prototype = Object.create(Pipeline.prototype);
  HttpSendPipeline.prototype.constructor = HttpSendPipeline;
  DefaultHttpResponse.prototype = Object.create(HttpResponse.prototype);
  DefaultHttpResponse.prototype.constructor = DefaultHttpResponse;
  $bodyAsTextCOROUTINE$12.prototype = Object.create(CoroutineImpl.prototype);
  $bodyAsTextCOROUTINE$12.prototype.constructor = $bodyAsTextCOROUTINE$12;
  HttpResponsePipeline.prototype = Object.create(Pipeline.prototype);
  HttpResponsePipeline.prototype.constructor = HttpResponsePipeline;
  HttpReceivePipeline.prototype = Object.create(Pipeline.prototype);
  HttpReceivePipeline.prototype.constructor = HttpReceivePipeline;
  HttpStatement$execute$slambda.prototype = Object.create(CoroutineImpl.prototype);
  HttpStatement$execute$slambda.prototype.constructor = HttpStatement$execute$slambda;
  $executeCOROUTINE$13.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$13.prototype.constructor = $executeCOROUTINE$13;
  $executeUnsafeCOROUTINE$14.prototype = Object.create(CoroutineImpl.prototype);
  $executeUnsafeCOROUTINE$14.prototype.constructor = $executeUnsafeCOROUTINE$14;
  $cleanupCOROUTINE$15.prototype = Object.create(CoroutineImpl.prototype);
  $cleanupCOROUTINE$15.prototype.constructor = $cleanupCOROUTINE$15;
  observable$slambda.prototype = Object.create(CoroutineImpl.prototype);
  observable$slambda.prototype.constructor = observable$slambda;
  EmptyContent.prototype = Object.create(NoContent.prototype);
  EmptyContent.prototype.constructor = EmptyContent;
  $executeCOROUTINE$16.prototype = Object.create(CoroutineImpl.prototype);
  $executeCOROUTINE$16.prototype.constructor = $executeCOROUTINE$16;
  $executeWebSocketRequestCOROUTINE$17.prototype = Object.create(CoroutineImpl.prototype);
  $executeWebSocketRequestCOROUTINE$17.prototype.constructor = $executeWebSocketRequestCOROUTINE$17;
  JsClientEngine.prototype = Object.create(HttpClientEngineBase.prototype);
  JsClientEngine.prototype.constructor = JsClientEngine;
  JsError.prototype = Object.create(Error.prototype);
  JsError.prototype.constructor = JsError;
  toRaw$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toRaw$slambda.prototype.constructor = toRaw$slambda;
  $toRawCOROUTINE$18.prototype = Object.create(CoroutineImpl.prototype);
  $toRawCOROUTINE$18.prototype.constructor = $toRawCOROUTINE$18;
  channelFromStream$slambda.prototype = Object.create(CoroutineImpl.prototype);
  channelFromStream$slambda.prototype.constructor = channelFromStream$slambda;
  readBodyNode$slambda.prototype = Object.create(CoroutineImpl.prototype);
  readBodyNode$slambda.prototype.constructor = readBodyNode$slambda;
  JsWebSocketSession$slambda.prototype = Object.create(CoroutineImpl.prototype);
  JsWebSocketSession$slambda.prototype.constructor = JsWebSocketSession$slambda;
  //endregion
  function HttpClient_init_$Init$(engine, userConfig, manageEngine, $this) {
    HttpClient.call($this, engine, userConfig);
    $this.f30_1 = manageEngine;
    return $this;
  }
  function HttpClient_init_$Create$(engine, userConfig, manageEngine) {
    return HttpClient_init_$Init$(engine, userConfig, manageEngine, Object.create(HttpClient.prototype));
  }
  function HttpClient$lambda(this$0) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        cancel$default(this$0.d30_1, null, 1, null);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function HttpClient$slambda(this$0, resultContinuation) {
    this.z30_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda.prototype.d31 = function ($this$intercept, call, $cont) {
    var tmp = this.e31($this$intercept, call, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpClient$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            var tmp_0 = this.b31_1;
            if (!(tmp_0 instanceof HttpClientCall)) {
              var message = 'Error: HttpClientCall expected, but found ' + toString(this.b31_1) + '(' + getKClassFromExpression(this.b31_1) + ').';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            this.hi_1 = 1;
            suspendResult = this.z30_1.m30_1.d2h(Unit_getInstance(), this.b31_1.k31(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c31_1 = suspendResult;
            this.b31_1.l31(this.c31_1);
            this.hi_1 = 2;
            suspendResult = this.a31_1.i2g(this.b31_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpClient$slambda.prototype.e31 = function ($this$intercept, call, completion) {
    var i = new HttpClient$slambda(this.z30_1, completion);
    i.a31_1 = $this$intercept;
    i.b31_1 = call;
    return i;
  };
  HttpClient$slambda.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_0(this$0, resultContinuation) {
    var i = new HttpClient$slambda(this$0, resultContinuation);
    var l = function ($this$intercept, call, $cont) {
      return i.d31($this$intercept, call, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClient$lambda_0($this$install) {
    defaultTransformers($this$install);
    return Unit_getInstance();
  }
  function HttpClient$slambda_1(this$0, resultContinuation) {
    this.u31_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClient$slambda_1.prototype.x31 = function ($this$intercept, it, $cont) {
    var tmp = this.y31($this$intercept, it, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpClient$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x31(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpClient$slambda_1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.v31_1.j2g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ii_1 = 3;
            this.hi_1 = 4;
            continue $sm;
          case 2:
            this.ii_1 = 3;
            var tmp_0 = this.ki_1;
            if (tmp_0 instanceof Error) {
              var cause = this.ki_1;
              this.u31_1.p30_1.c30(get_HttpResponseReceiveFailed(), new HttpResponseReceiveFail(this.v31_1.e2h_1.k31(), cause));
              throw cause;
            } else {
              throw this.ki_1;
            }

            break;
          case 3:
            throw this.ki_1;
          case 4:
            this.ii_1 = 3;
            return Unit_getInstance();
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
  HttpClient$slambda_1.prototype.y31 = function ($this$intercept, it, completion) {
    var i = new HttpClient$slambda_1(this.u31_1, completion);
    i.v31_1 = $this$intercept;
    i.w31_1 = it;
    return i;
  };
  HttpClient$slambda_1.$metadata$ = classMeta('HttpClient$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClient$slambda_2(this$0, resultContinuation) {
    var i = new HttpClient$slambda_1(this$0, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.x31($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$0(_this__u8e3s4, builder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h32_1 = _this__u8e3s4;
    this.i32_1 = builder;
  }
  $executeCOROUTINE$0.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.h32_1.p30_1.c30(get_HttpRequestCreated(), this.i32_1);
            this.hi_1 = 1;
            suspendResult = this.h32_1.j30_1.d2h(this.i32_1, this.i32_1.m32_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult instanceof HttpClientCall ? suspendResult : THROW_CCE();
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
  $executeCOROUTINE$0.$metadata$ = classMeta('$executeCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClient(engine, userConfig) {
    this.d30_1 = engine;
    this.e30_1 = userConfig;
    this.f30_1 = false;
    this.g30_1 = atomic$boolean$1(false);
    this.h30_1 = Job(this.d30_1.d1d().y3(Key_getInstance()));
    this.i30_1 = this.d30_1.d1d().f4(this.h30_1);
    this.j30_1 = new HttpRequestPipeline(this.e30_1.w32_1);
    this.k30_1 = new HttpResponsePipeline(this.e30_1.w32_1);
    this.l30_1 = new HttpSendPipeline(this.e30_1.w32_1);
    this.m30_1 = new HttpReceivePipeline(this.e30_1.w32_1);
    this.n30_1 = Attributes(true);
    this.o30_1 = this.d30_1.x32();
    this.p30_1 = new Events();
    this.q30_1 = new HttpClientConfig();
    if (this.f30_1) {
      this.h30_1.e1e(HttpClient$lambda(this));
    }
    this.d30_1.y32(this);
    var tmp = Phases_getInstance_0().d33_1;
    this.l30_1.i2h(tmp, HttpClient$slambda_0(this, null));
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = this.e30_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = Plugin_getInstance_2();
    this.q30_1.e33(tmp_0, null, 2, null);
    var tmp_1 = Plugin_getInstance();
    this.q30_1.e33(tmp_1, null, 2, null);
    if (tmp0_with.u32_1) {
      this.q30_1.f33('DefaultTransformers', HttpClient$lambda_0);
    }
    var tmp_2 = Plugin_getInstance_3();
    this.q30_1.e33(tmp_2, null, 2, null);
    var tmp_3 = Companion_getInstance_9();
    this.q30_1.e33(tmp_3, null, 2, null);
    if (tmp0_with.t32_1) {
      var tmp_4 = Plugin_getInstance_1();
      this.q30_1.e33(tmp_4, null, 2, null);
    }
    var tmp0_this = this;
    tmp0_this.q30_1.g33(tmp0_with);
    if (tmp0_with.u32_1) {
      var tmp_5 = Plugin_getInstance_0();
      this.q30_1.e33(tmp_5, null, 2, null);
    }
    addDefaultResponseValidation(this.q30_1);
    this.q30_1.y32(this);
    tmp$ret$0 = Unit_getInstance();
    var tmp_6 = Phases_getInstance_1().h33_1;
    this.k30_1.i2h(tmp_6, HttpClient$slambda_2(this, null));
  }
  HttpClient.prototype.d1d = function () {
    return this.i30_1;
  };
  HttpClient.prototype.m33 = function (builder, $cont) {
    var tmp = new $executeCOROUTINE$0(this, builder, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpClient.prototype.i1u = function () {
    var success = this.g30_1.atomicfu$compareAndSet(false, true);
    if (!success)
      return Unit_getInstance();
    var installedFeatures = this.n30_1.u2c(get_PLUGIN_INSTALLED_LIST());
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = installedFeatures.a2d();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.HttpClient.close.<anonymous>' call
      var plugin = installedFeatures.u2c(element instanceof AttributeKey ? element : THROW_CCE());
      if (isInterface(plugin, Closeable)) {
        plugin.i1u();
      }
    }
    this.h30_1.x1i();
    if (this.f30_1) {
      this.d30_1.i1u();
    }
  };
  HttpClient.prototype.toString = function () {
    return 'HttpClient[' + this.d30_1 + ']';
  };
  HttpClient.$metadata$ = classMeta('HttpClient', [CoroutineScope, Closeable]);
  function HttpClient_0(engineFactory, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var engine = engineFactory.n33(config.s32_1);
    var client = HttpClient_init_$Create$(engine, config, true);
    var tmp = ensureNotNull(client.i30_1.y3(Key_getInstance()));
    tmp.e1e(HttpClient$lambda_1(engine));
    return client;
  }
  function HttpClient$lambda_1($engine) {
    return function (it) {
      $engine.i1u();
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$engineConfig$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda($this$null) {
    return Unit_getInstance();
  }
  function HttpClientConfig$install$lambda_0($previousConfigBlock, $configure) {
    return function ($this$null) {
      var tmp0_safe_receiver = $previousConfigBlock;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver($this$null);
      $configure(isObject($this$null) ? $this$null : THROW_CCE());
      return Unit_getInstance();
    };
  }
  function HttpClientConfig$install$lambda$lambda() {
    return Attributes(true);
  }
  function HttpClientConfig$install$lambda_1($plugin) {
    return function (scope) {
      var tmp = get_PLUGIN_INSTALLED_LIST();
      var attributes = scope.n30_1.z2c(tmp, HttpClientConfig$install$lambda$lambda);
      var config = ensureNotNull(scope.q30_1.q32_1.i2($plugin.s()));
      var pluginData = $plugin.o33(config);
      $plugin.p33(pluginData, scope);
      attributes.x2c($plugin.s(), pluginData);
      return Unit_getInstance();
    };
  }
  function HttpClientConfig() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.p32_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.q32_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$2 = LinkedHashMap_init_$Create$();
    tmp_1.r32_1 = tmp$ret$2;
    var tmp_2 = this;
    tmp_2.s32_1 = HttpClientConfig$engineConfig$lambda;
    this.t32_1 = true;
    this.u32_1 = true;
    this.v32_1 = false;
    this.w32_1 = PlatformUtils_getInstance().d2i_1;
  }
  HttpClientConfig.prototype.q33 = function (plugin, configure) {
    var previousConfigBlock = this.q32_1.i2(plugin.s());
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.q32_1;
    var tmp1_set = plugin.s();
    tmp0_set.b(tmp1_set, HttpClientConfig$install$lambda_0(previousConfigBlock, configure));
    if (this.p32_1.c2(plugin.s()))
      return Unit_getInstance();
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = this.p32_1;
    var tmp3_set = plugin.s();
    tmp2_set.b(tmp3_set, HttpClientConfig$install$lambda_1(plugin));
  };
  HttpClientConfig.prototype.e33 = function (plugin, configure, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      configure = HttpClientConfig$install$lambda;
    }
    return this.q33(plugin, configure);
  };
  HttpClientConfig.prototype.f33 = function (key, block) {
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.r32_1;
    tmp0_set.b(key, block);
  };
  HttpClientConfig.prototype.y32 = function (client) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.p32_1.k2();
    var tmp0_iterator = tmp0_forEach.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element(client);
      tmp$ret$0 = client;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.r32_1.k2();
    var tmp0_iterator_0 = tmp1_forEach.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'io.ktor.client.HttpClientConfig.install.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.contracts.contract' call
      element_0(client);
      tmp$ret$1 = client;
    }
  };
  HttpClientConfig.prototype.g33 = function (other) {
    this.t32_1 = other.t32_1;
    this.u32_1 = other.u32_1;
    this.v32_1 = other.v32_1;
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.p32_1;
    var tmp1_plusAssign = other.p32_1;
    tmp0_plusAssign.b3(tmp1_plusAssign);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.q32_1;
    var tmp3_plusAssign = other.q32_1;
    tmp2_plusAssign.b3(tmp3_plusAssign);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp2_this.r32_1;
    var tmp5_plusAssign = other.r32_1;
    tmp4_plusAssign.b3(tmp5_plusAssign);
  };
  HttpClientConfig.$metadata$ = classMeta('HttpClientConfig');
  function HttpClientCall_init_$Init$(client, requestData, responseData, $this) {
    HttpClientCall.call($this, client);
    $this.h31_1 = new DefaultHttpRequest($this, requestData);
    $this.i31_1 = new DefaultHttpResponse($this, responseData);
    var tmp = responseData.v33_1;
    if (!isInterface(tmp, ByteReadChannel)) {
      $this.y33().x2c(Companion_getInstance_7().z33_1, responseData.v33_1);
    }
    return $this;
  }
  function HttpClientCall_init_$Create$(client, requestData, responseData) {
    return HttpClientCall_init_$Init$(client, requestData, responseData, Object.create(HttpClientCall.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.z33_1 = new AttributeKey('CustomResponse');
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_7() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $bodyNullableCOROUTINE$1(_this__u8e3s4, info, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i34_1 = _this__u8e3s4;
    this.j34_1 = info;
  }
  $bodyNullableCOROUTINE$1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 10;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.hi_1 = 2;
            continue $sm;
          case 2:
            this.ii_1 = 9;
            this.ii_1 = 8;
            if (instanceOf(this.i34_1.k31(), this.j34_1.v2h_1)) {
              this.k34_1 = this.i34_1.k31();
              this.ii_1 = 10;
              this.hi_1 = 7;
              continue $sm;
            } else {
              this.hi_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            if (!this.i34_1.p34() ? !this.i34_1.g31_1.atomicfu$compareAndSet(false, true) : false) {
              throw new DoubleReceiveException(this.i34_1);
            }

            this.l34_1 = this.i34_1.y33().v2c(Companion_getInstance_7().z33_1);
            if (this.l34_1 == null) {
              this.hi_1 = 4;
              suspendResult = this.i34_1.q34(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m34_1 = this.l34_1;
              this.hi_1 = 5;
              continue $sm;
            }

            break;
          case 4:
            this.m34_1 = suspendResult;
            this.hi_1 = 5;
            continue $sm;
          case 5:
            this.n34_1 = this.m34_1;
            this.o34_1 = new HttpResponseContainer(this.j34_1, this.n34_1);
            this.hi_1 = 6;
            suspendResult = this.i34_1.f31_1.k30_1.d2h(this.i34_1, this.o34_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var tmp0_takeIf = ARGUMENT.s34_1;
            var tmp_0;
            if (!equals(tmp0_takeIf, NullBody_getInstance())) {
              tmp_0 = tmp0_takeIf;
            } else {
              tmp_0 = null;
            }

            var result = tmp_0;
            if (!(result == null) ? !instanceOf(result, this.j34_1.v2h_1) : false) {
              var from = getKClassFromExpression(result);
              var to = this.j34_1.v2h_1;
              throw new NoTransformationFoundException(this.i34_1.k31(), from, to);
            }

            this.k34_1 = result;
            this.ii_1 = 10;
            this.hi_1 = 7;
            var tmp_1 = this;
            continue $sm;
          case 7:
            var tmp_2 = this.k34_1;
            complete(this.i34_1.k31());
            ;
            return tmp_2;
          case 8:
            this.ii_1 = 9;
            var tmp_3 = this.ki_1;
            if (tmp_3 instanceof Error) {
              var cause = this.ki_1;
              var tmp_4 = this;
              cancel(this.i34_1.k31(), 'Receive failed', cause);
              throw cause;
            } else {
              throw this.ki_1;
            }

            break;
          case 9:
            this.ii_1 = 10;
            var t = this.ki_1;
            complete(this.i34_1.k31());
            ;
            throw t;
          case 10:
            throw this.ki_1;
          case 11:
            complete(this.i34_1.k31());
            ;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ii_1 === 10) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $bodyNullableCOROUTINE$1.$metadata$ = classMeta('$bodyNullableCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientCall(client) {
    Companion_getInstance_7();
    this.f31_1 = client;
    this.g31_1 = atomic$boolean$1(false);
    this.j31_1 = false;
  }
  HttpClientCall.prototype.d1d = function () {
    return this.k31().d1d();
  };
  HttpClientCall.prototype.y33 = function () {
    return this.t34().y33();
  };
  HttpClientCall.prototype.t34 = function () {
    var tmp = this.h31_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('request');
    }
  };
  HttpClientCall.prototype.k31 = function () {
    var tmp = this.i31_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('response');
    }
  };
  HttpClientCall.prototype.p34 = function () {
    return this.j31_1;
  };
  HttpClientCall.prototype.q34 = function ($cont) {
    return this.k31().q14();
  };
  HttpClientCall.prototype.u34 = function (info, $cont) {
    var tmp = new $bodyNullableCOROUTINE$1(this, info, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpClientCall.prototype.toString = function () {
    return 'HttpClientCall[' + this.t34().v34() + ', ' + this.k31().w34() + ']';
  };
  HttpClientCall.prototype.l31 = function (response) {
    this.i31_1 = response;
  };
  HttpClientCall.$metadata$ = classMeta('HttpClientCall', [CoroutineScope]);
  function DoubleReceiveException(call) {
    IllegalStateException_init_$Init$(this);
    this.x34_1 = 'Response already received: ' + call;
    captureStack(this, DoubleReceiveException);
  }
  DoubleReceiveException.prototype.j1 = function () {
    return this.x34_1;
  };
  DoubleReceiveException.$metadata$ = classMeta('DoubleReceiveException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(DoubleReceiveException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function NoTransformationFoundException$message$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var key = _name_for_destructuring_parameter_0__wldtmu.h3();
    var value = _name_for_destructuring_parameter_0__wldtmu.i3();
    return key + ': ' + value + '\n';
  }
  function NoTransformationFoundException(response, from, to) {
    UnsupportedOperationException_init_$Init$(this);
    var tmp = this;
    var tmp_0 = get_request(response).v34();
    var tmp_1 = response.w34();
    var tmp_2 = flattenEntries(response.p2o());
    var tmp_3 = 'No transformation found: ' + from + ' -> ' + to + '\n        |with response from ' + tmp_0 + ':\n        |status: ' + tmp_1 + '\n        |response headers: \n        |' + joinToString$default(tmp_2, null, null, null, 0, null, NoTransformationFoundException$message$lambda, 31, null) + '\n    ';
    tmp.y34_1 = trimMargin$default(tmp_3, null, 1, null);
    captureStack(this, NoTransformationFoundException);
  }
  NoTransformationFoundException.prototype.j1 = function () {
    return this.y34_1;
  };
  NoTransformationFoundException.$metadata$ = classMeta('NoTransformationFoundException', undefined, undefined, undefined, undefined, UnsupportedOperationException.prototype);
  Object.defineProperty(NoTransformationFoundException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function save(_this__u8e3s4, $cont) {
    var tmp = new $saveCOROUTINE$3(_this__u8e3s4, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function SavedHttpCall(client, request, response, responseBody) {
    HttpClientCall.call(this, client);
    this.n35_1 = responseBody;
    this.h31_1 = new SavedHttpRequest(this, request);
    this.i31_1 = new SavedHttpResponse(this, this.n35_1, response);
    this.o35_1 = true;
  }
  SavedHttpCall.prototype.q34 = function ($cont) {
    return ByteReadChannel_0(this.n35_1);
  };
  SavedHttpCall.prototype.p34 = function () {
    return this.o35_1;
  };
  SavedHttpCall.$metadata$ = classMeta('SavedHttpCall', undefined, undefined, undefined, undefined, HttpClientCall.prototype);
  function SavedHttpRequest(call, origin) {
    this.p35_1 = call;
    this.q35_1 = origin;
  }
  SavedHttpRequest.prototype.r35 = function () {
    return this.p35_1;
  };
  SavedHttpRequest.prototype.y33 = function () {
    return this.q35_1.y33();
  };
  SavedHttpRequest.prototype.d1d = function () {
    return this.q35_1.d1d();
  };
  SavedHttpRequest.prototype.p2o = function () {
    return this.q35_1.p2o();
  };
  SavedHttpRequest.prototype.s35 = function () {
    return this.q35_1.s35();
  };
  SavedHttpRequest.prototype.v34 = function () {
    return this.q35_1.v34();
  };
  SavedHttpRequest.$metadata$ = classMeta('SavedHttpRequest', [HttpRequest_0]);
  function SavedHttpResponse(call, body, origin) {
    HttpResponse.call(this);
    this.t35_1 = call;
    var tmp = this;
    tmp.u35_1 = Job$default(null, 1, null);
    this.v35_1 = origin.w34();
    this.w35_1 = origin.c36();
    this.x35_1 = origin.d36();
    this.y35_1 = origin.e36();
    this.z35_1 = origin.p2o();
    this.a36_1 = origin.d1d().f4(this.u35_1);
    this.b36_1 = ByteReadChannel_0(body);
  }
  SavedHttpResponse.prototype.r35 = function () {
    return this.t35_1;
  };
  SavedHttpResponse.prototype.w34 = function () {
    return this.v35_1;
  };
  SavedHttpResponse.prototype.c36 = function () {
    return this.w35_1;
  };
  SavedHttpResponse.prototype.d36 = function () {
    return this.x35_1;
  };
  SavedHttpResponse.prototype.e36 = function () {
    return this.y35_1;
  };
  SavedHttpResponse.prototype.p2o = function () {
    return this.z35_1;
  };
  SavedHttpResponse.prototype.d1d = function () {
    return this.a36_1;
  };
  SavedHttpResponse.prototype.q14 = function () {
    return this.b36_1;
  };
  SavedHttpResponse.$metadata$ = classMeta('SavedHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function $saveCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h35_1 = _this__u8e3s4;
  }
  $saveCOROUTINE$3.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            var tmp_0 = this.h35_1.k31().q14();
            suspendResult = tmp_0.m23(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var responseBody = readBytes$default(ARGUMENT, 0, 1, null);
            return new SavedHttpCall(this.h35_1.f31_1, this.h35_1.t34(), this.h35_1.k31(), responseBody);
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
  $saveCOROUTINE$3.$metadata$ = classMeta('$saveCOROUTINE$3', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function UnsupportedContentTypeException(content) {
    IllegalStateException_init_$Init$_0('Failed to write body: ' + getKClassFromExpression(content), this);
    captureStack(this, UnsupportedContentTypeException);
  }
  UnsupportedContentTypeException.$metadata$ = classMeta('UnsupportedContentTypeException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ObservableContent$content$slambda($delegate, resultContinuation) {
    this.n36_1 = $delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  ObservableContent$content$slambda.prototype.p36 = function ($this$writer, $cont) {
    var tmp = this.q36($this$writer, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ObservableContent$content$slambda.prototype.ri = function (p1, $cont) {
    return this.p36((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  ObservableContent$content$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.n36_1.c2u(this.o36_1.c1p(), this);
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
  ObservableContent$content$slambda.prototype.q36 = function ($this$writer, completion) {
    var i = new ObservableContent$content$slambda(this.n36_1, completion);
    i.o36_1 = $this$writer;
    return i;
  };
  ObservableContent$content$slambda.$metadata$ = classMeta('ObservableContent$content$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function ObservableContent$content$slambda_0($delegate, resultContinuation) {
    var i = new ObservableContent$content$slambda($delegate, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p36($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function ObservableContent(delegate, callContext, listener) {
    ReadChannelContent.call(this);
    this.s36_1 = callContext;
    this.t36_1 = listener;
    var tmp = this;
    var tmp0_subject = delegate;
    var tmp_0;
    if (tmp0_subject instanceof ByteArrayContent) {
      tmp_0 = ByteReadChannel_0(delegate.x2t());
    } else {
      if (tmp0_subject instanceof ProtocolUpgrade) {
        throw new UnsupportedContentTypeException(delegate);
      } else {
        if (tmp0_subject instanceof NoContent) {
          tmp_0 = Companion_getInstance().j25();
        } else {
          if (tmp0_subject instanceof ReadChannelContent) {
            tmp_0 = delegate.a2u();
          } else {
            if (tmp0_subject instanceof WriteChannelContent) {
              var tmp_1 = GlobalScope_getInstance();
              tmp_0 = writer(tmp_1, this.s36_1, true, ObservableContent$content$slambda_0(delegate, null)).c1p();
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
      }
    }
    tmp.u36_1 = tmp_0;
    this.v36_1 = delegate;
  }
  ObservableContent.prototype.v2t = function () {
    return this.v36_1.v2t();
  };
  ObservableContent.prototype.w2t = function () {
    return this.v36_1.w2t();
  };
  ObservableContent.prototype.p2o = function () {
    return this.v36_1.p2o();
  };
  ObservableContent.prototype.a2u = function () {
    return observable(this.u36_1, this.s36_1, this.w2t(), this.t36_1);
  };
  ObservableContent.$metadata$ = classMeta('ObservableContent', undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function get_CALL_COROUTINE() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CALL_COROUTINE;
  }
  var CALL_COROUTINE;
  function get_CLIENT_CONFIG() {
    init_properties_HttpClientEngine_kt_umcrvf();
    return CLIENT_CONFIG;
  }
  var CLIENT_CONFIG;
  function HttpClientEngine$install$slambda$lambda($client, $response) {
    return function (it) {
      var tmp;
      if (!(it == null)) {
        $client.p30_1.c30(get_HttpResponseCancelled(), $response);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function _get_closed__iwkfs1($this) {
    var tmp0_safe_receiver = $this.d1d().y3(Key_getInstance());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.e1d();
    return !(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs);
  }
  function executeWithinCallContext($this, requestData, $cont) {
    var tmp = new $executeWithinCallContextCOROUTINE$4($this, requestData, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function checkExtensions($this, requestData) {
    var tmp0_iterator = requestData.o37_1.d();
    while (tmp0_iterator.e()) {
      var requestedExtension = tmp0_iterator.f();
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.p37().l1(requestedExtension);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'io.ktor.client.engine.HttpClientEngine.checkExtensions.<anonymous>' call
        tmp$ret$0 = "Engine doesn't support " + requestedExtension;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  function HttpClientEngine$install$slambda($client, this$0, resultContinuation) {
    this.y37_1 = $client;
    this.z37_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$install$slambda.prototype.d31 = function ($this$intercept, content, $cont) {
    var tmp = this.e31($this$intercept, content, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpClientEngine$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpClientEngine$install$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.c38_1 = new HttpRequestBuilder();
            this.c38_1.j38(this.a38_1.e2h_1);
            ;
            var tmp0_subject = this.b38_1;
            if (tmp0_subject == null) {
              this.c38_1.m32_1 = NullBody_getInstance();
              var tmp_2 = JsType_getInstance();
              var tmp_3 = PrimitiveClasses_getInstance().rf();
              var tmp_4;
              try {
                tmp_4 = createKType(PrimitiveClasses_getInstance().rf(), arrayOf([]), false);
              } catch ($p) {
                var tmp_5;
                if ($p instanceof Error) {
                  tmp_5 = null;
                } else {
                  throw $p;
                }
                tmp_4 = tmp_5;
              }
              this.c38_1.k38(typeInfoImpl(tmp_2, tmp_3, tmp_4));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.c38_1.m32_1 = this.b38_1;
                this.c38_1.k38(null);
              } else {
                this.c38_1.m32_1 = this.b38_1;
                var tmp_6 = JsType_getInstance();
                var tmp_7 = PrimitiveClasses_getInstance().rf();
                var tmp_8;
                try {
                  tmp_8 = createKType(PrimitiveClasses_getInstance().rf(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_9;
                  if ($p instanceof Error) {
                    tmp_9 = null;
                  } else {
                    throw $p;
                  }
                  tmp_8 = tmp_9;
                }
                this.c38_1.k38(typeInfoImpl(tmp_6, tmp_7, tmp_8));
              }
            }

            tmp_0.d38_1 = this.c38_1;
            this.y37_1.p30_1.c30(get_HttpRequestIsReadyForSending(), this.d38_1);
            var tmp_10 = this;
            var tmp_11 = this;
            tmp_11.e38_1 = this.d38_1.gs();
            this.e38_1.n37_1.x2c(get_CLIENT_CONFIG(), this.y37_1.q30_1);
            ;
            tmp_10.f38_1 = this.e38_1;
            validateHeaders(this.f38_1);
            checkExtensions(this.z37_1, this.f38_1);
            this.hi_1 = 1;
            suspendResult = executeWithinCallContext(this.z37_1, this.f38_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g38_1 = suspendResult;
            this.h38_1 = HttpClientCall_init_$Create$(this.y37_1, this.f38_1, this.g38_1);
            this.i38_1 = this.h38_1.k31();
            this.y37_1.p30_1.c30(get_HttpResponseReceived(), this.i38_1);
            var tmp_12 = get_job(this.i38_1.d1d());
            tmp_12.e1e(HttpClientEngine$install$slambda$lambda(this.y37_1, this.i38_1));
            ;
            this.hi_1 = 2;
            suspendResult = this.a38_1.i2g(this.h38_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpClientEngine$install$slambda.prototype.e31 = function ($this$intercept, content, completion) {
    var i = new HttpClientEngine$install$slambda(this.y37_1, this.z37_1, completion);
    i.a38_1 = $this$intercept;
    i.b38_1 = content;
    return i;
  };
  HttpClientEngine$install$slambda.$metadata$ = classMeta('HttpClientEngine$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpClientEngine$install$slambda_0($client, this$0, resultContinuation) {
    var i = new HttpClientEngine$install$slambda($client, this$0, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.d31($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation) {
    this.t38_1 = this$0;
    this.u38_1 = $requestData;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpClientEngine$executeWithinCallContext$slambda.prototype.w38 = function ($this$async, $cont) {
    var tmp = this.n24($this$async, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.ri = function (p1, $cont) {
    return this.w38((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpClientEngine$executeWithinCallContext$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            if (_get_closed__iwkfs1(this.t38_1)) {
              throw ClientEngineClosedException_init_$Create$(null, 1, null);
            }

            this.hi_1 = 1;
            suspendResult = this.t38_1.x38(this.u38_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  HttpClientEngine$executeWithinCallContext$slambda.prototype.n24 = function ($this$async, completion) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this.t38_1, this.u38_1, completion);
    i.v38_1 = $this$async;
    return i;
  };
  HttpClientEngine$executeWithinCallContext$slambda.$metadata$ = classMeta('HttpClientEngine$executeWithinCallContext$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpClientEngine$executeWithinCallContext$slambda_0(this$0, $requestData, resultContinuation) {
    var i = new HttpClientEngine$executeWithinCallContext$slambda(this$0, $requestData, resultContinuation);
    var l = function ($this$async, $cont) {
      return i.w38($this$async, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeWithinCallContextCOROUTINE$4(_this__u8e3s4, requestData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e37_1 = _this__u8e3s4;
    this.f37_1 = requestData;
  }
  $executeWithinCallContextCOROUTINE$4.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.hi_1 = 1;
            suspendResult = createCallContext(this.e37_1, this.f37_1.m37_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g37_1 = suspendResult;
            this.h37_1 = this.g37_1.f4(new KtorCallContextElement(this.g37_1));
            this.hi_1 = 2;
            suspendResult = async$default(this.e37_1, this.h37_1, null, HttpClientEngine$executeWithinCallContext$slambda_0(this.e37_1, this.f37_1, null), 2, null).s1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  $executeWithinCallContextCOROUTINE$4.$metadata$ = classMeta('$executeWithinCallContextCOROUTINE$4', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpClientEngine() {
  }
  HttpClientEngine.$metadata$ = interfaceMeta('HttpClientEngine', [CoroutineScope, Closeable]);
  function validateHeaders(request) {
    init_properties_HttpClientEngine_kt_umcrvf();
    var requestHeaders = request.k37_1;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = requestHeaders.i2e();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = tmp0_filter.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.validateHeaders.<anonymous>' call
      tmp$ret$0 = HttpHeaders_getInstance().f2o_1.l1(element);
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var unsafeRequestHeaders = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$3 = !unsafeRequestHeaders.m();
    if (tmp$ret$3) {
      throw new UnsafeHeaderException(toString(unsafeRequestHeaders));
    }
  }
  function createCallContext(_this__u8e3s4, parentJob, $cont) {
    var callJob = Job(parentJob);
    var callContext = _this__u8e3s4.d1d().f4(callJob).f4(get_CALL_COROUTINE());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.client.engine.attachToUserJob' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.u3();
      var tmp0_elvis_lhs = tmp$ret$0.y3(Key_getInstance());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var userJob = tmp;
      var cleanupHandler = userJob.g1e(true, false, createCallContext$lambda(callJob), 2, null);
      callJob.e1e(createCallContext$lambda_0(cleanupHandler));
    }
    return callContext;
  }
  function HttpClientEngineFactory() {
  }
  HttpClientEngineFactory.$metadata$ = interfaceMeta('HttpClientEngineFactory');
  function createCallContext$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.j1e(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function createCallContext$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.i1g();
      return Unit_getInstance();
    };
  }
  var properties_initialized_HttpClientEngine_kt_5uiebb;
  function init_properties_HttpClientEngine_kt_umcrvf() {
    if (properties_initialized_HttpClientEngine_kt_5uiebb) {
    } else {
      properties_initialized_HttpClientEngine_kt_5uiebb = true;
      CALL_COROUTINE = new CoroutineName('call-context');
      CLIENT_CONFIG = new AttributeKey('client-config');
    }
  }
  function ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    ClientEngineClosedException.call($this, cause);
    return $this;
  }
  function ClientEngineClosedException_init_$Create$(cause, $mask0, $marker) {
    var tmp = ClientEngineClosedException_init_$Init$(cause, $mask0, $marker, Object.create(ClientEngineClosedException.prototype));
    captureStack(tmp, ClientEngineClosedException_init_$Create$);
    return tmp;
  }
  function ClientEngineClosedException(cause) {
    IllegalStateException_init_$Init$_0('Client already closed', this);
    this.y38_1 = cause;
    captureStack(this, ClientEngineClosedException);
  }
  ClientEngineClosedException.prototype.k1 = function () {
    return this.y38_1;
  };
  ClientEngineClosedException.$metadata$ = classMeta('ClientEngineClosedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  Object.defineProperty(ClientEngineClosedException.prototype, 'cause', {
    configurable: true,
    get: function () {
      return this.k1();
    }
  });
  function HttpClientEngineBase$coroutineContext$delegate$lambda(this$0) {
    return function () {
      return SilentSupervisor$default(null, 1, null).f4(this$0.z38()).f4(new CoroutineName(this$0.a39_1 + '-context'));
    };
  }
  function HttpClientEngineBase$close$lambda(this$0) {
    return function (it) {
      close(this$0.z38());
      return Unit_getInstance();
    };
  }
  function HttpClientEngineBase(engineName) {
    this.a39_1 = engineName;
    this.b39_1 = atomic$boolean$1(false);
    var tmp = this;
    tmp.c39_1 = lazy(HttpClientEngineBase$coroutineContext$delegate$lambda(this));
  }
  HttpClientEngineBase.prototype.d1d = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = coroutineContext$factory();
    tmp$ret$0 = this.c39_1.t();
    return tmp$ret$0;
  };
  HttpClientEngineBase.prototype.i1u = function () {
    if (!this.b39_1.atomicfu$compareAndSet(false, true))
      return Unit_getInstance();
    var tmp = this.d1d().y3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, CompletableJob) : false) ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var requestJob = tmp_0;
    requestJob.x1i();
    requestJob.e1e(HttpClientEngineBase$close$lambda(this));
  };
  HttpClientEngineBase.$metadata$ = classMeta('HttpClientEngineBase', [HttpClientEngine]);
  function close(_this__u8e3s4) {
    try {
      var tmp0_subject = _this__u8e3s4;
      if (tmp0_subject instanceof CloseableCoroutineDispatcher) {
        _this__u8e3s4.i1u();
      } else {
        if (isInterface(tmp0_subject, Closeable)) {
          _this__u8e3s4.i1u();
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
      } else {
        throw $p;
      }
    }
  }
  function coroutineContext$factory() {
    return getPropertyCallableRef('coroutineContext', 1, KProperty1, function (receiver) {
      return receiver.d1d();
    }, null);
  }
  function get_ENGINE_CAPABILITIES_KEY() {
    init_properties_HttpClientEngineCapability_kt_68uqzx();
    return ENGINE_CAPABILITIES_KEY;
  }
  var ENGINE_CAPABILITIES_KEY;
  var DEFAULT_CAPABILITIES;
  function HttpClientEngineCapability() {
  }
  HttpClientEngineCapability.$metadata$ = interfaceMeta('HttpClientEngineCapability');
  var properties_initialized_HttpClientEngineCapability_kt_qarzcf;
  function init_properties_HttpClientEngineCapability_kt_68uqzx() {
    if (properties_initialized_HttpClientEngineCapability_kt_qarzcf) {
    } else {
      properties_initialized_HttpClientEngineCapability_kt_qarzcf = true;
      ENGINE_CAPABILITIES_KEY = new AttributeKey('EngineCapabilities');
      DEFAULT_CAPABILITIES = setOf(Plugin_getInstance_4());
    }
  }
  function HttpClientEngineConfig() {
    this.d39_1 = 4;
    this.e39_1 = false;
    this.f39_1 = null;
  }
  HttpClientEngineConfig.$metadata$ = classMeta('HttpClientEngineConfig');
  function get_KTOR_DEFAULT_USER_AGENT() {
    init_properties_Utils_kt_jyhfj1();
    return KTOR_DEFAULT_USER_AGENT;
  }
  var KTOR_DEFAULT_USER_AGENT;
  function get_DATE_HEADERS() {
    init_properties_Utils_kt_jyhfj1();
    return DATE_HEADERS;
  }
  var DATE_HEADERS;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.$metadata$ = objectMeta('Companion', [Key]);
  var Companion_instance_0;
  function Companion_getInstance_8() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function KtorCallContextElement(callContext) {
    Companion_getInstance_8();
    this.g39_1 = callContext;
  }
  KtorCallContextElement.prototype.s = function () {
    return Companion_getInstance_8();
  };
  KtorCallContextElement.$metadata$ = classMeta('KtorCallContextElement', [Element]);
  function callContext($cont) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.getCoroutineContext' call
    tmp$ret$0 = $cont.u3();
    return ensureNotNull(tmp$ret$0.y3(Companion_getInstance_8())).g39_1;
  }
  function mergeHeaders(requestHeaders, content, block) {
    init_properties_Utils_kt_jyhfj1();
    var tmp = buildHeaders(mergeHeaders$lambda(requestHeaders, content));
    tmp.k2e(mergeHeaders$lambda_0(block));
    var missingAgent = requestHeaders.p14(HttpHeaders_getInstance().i2n_1) == null ? content.p2o().p14(HttpHeaders_getInstance().i2n_1) == null : false;
    if (missingAgent ? needUserAgent() : false) {
      block(HttpHeaders_getInstance().i2n_1, get_KTOR_DEFAULT_USER_AGENT());
    }
    var tmp0_safe_receiver = content.v2t();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? content.p2o().p14(HttpHeaders_getInstance().c2l_1) : tmp1_elvis_lhs;
    var type = tmp2_elvis_lhs == null ? requestHeaders.p14(HttpHeaders_getInstance().c2l_1) : tmp2_elvis_lhs;
    var tmp3_safe_receiver = content.w2t();
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString();
    var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? content.p2o().p14(HttpHeaders_getInstance().z2k_1) : tmp4_elvis_lhs;
    var length = tmp5_elvis_lhs == null ? requestHeaders.p14(HttpHeaders_getInstance().z2k_1) : tmp5_elvis_lhs;
    var tmp6_safe_receiver = type;
    if (tmp6_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$0 = block(HttpHeaders_getInstance().c2l_1, tmp6_safe_receiver);
    }
    var tmp7_safe_receiver = length;
    if (tmp7_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp$ret$1 = block(HttpHeaders_getInstance().z2k_1, tmp7_safe_receiver);
    }
  }
  function needUserAgent() {
    init_properties_Utils_kt_jyhfj1();
    return !PlatformUtils_getInstance().z2h_1;
  }
  function attachToUserJob$lambda($callJob) {
    return function (cause) {
      var tmp0_elvis_lhs = cause;
      if (tmp0_elvis_lhs == null)
        return Unit_getInstance();
      else
        tmp0_elvis_lhs;
      $callJob.j1e(CancellationException_init_$Create$(cause.message));
      return Unit_getInstance();
    };
  }
  function attachToUserJob$lambda_0($cleanupHandler) {
    return function (it) {
      $cleanupHandler.i1g();
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda($requestHeaders, $content) {
    return function ($this$buildHeaders) {
      $this$buildHeaders.s2e($requestHeaders);
      $this$buildHeaders.s2e($content.p2o());
      return Unit_getInstance();
    };
  }
  function mergeHeaders$lambda_0($block) {
    return function (key, values) {
      var tmp;
      if (HttpHeaders_getInstance().z2k_1 === key) {
        return Unit_getInstance();
      }
      var tmp_0;
      if (HttpHeaders_getInstance().c2l_1 === key) {
        return Unit_getInstance();
      }
      var tmp_1;
      if (get_DATE_HEADERS().l1(key)) {
        var tmp0_iterator = values.d();
        while (tmp0_iterator.e()) {
          var element = tmp0_iterator.f();
          // Inline function 'io.ktor.client.engine.mergeHeaders.<anonymous>.<anonymous>' call
          $block(key, element);
        }
        tmp_1 = Unit_getInstance();
      } else {
        tmp_1 = $block(key, joinToString$default(values, ',', null, null, 0, null, null, 62, null));
      }
      return Unit_getInstance();
    };
  }
  var properties_initialized_Utils_kt_xvi83j;
  function init_properties_Utils_kt_jyhfj1() {
    if (properties_initialized_Utils_kt_xvi83j) {
    } else {
      properties_initialized_Utils_kt_xvi83j = true;
      KTOR_DEFAULT_USER_AGENT = 'Ktor client';
      DATE_HEADERS = setOf_0([HttpHeaders_getInstance().f2l_1, HttpHeaders_getInstance().l2l_1, HttpHeaders_getInstance().x2l_1, HttpHeaders_getInstance().s2l_1, HttpHeaders_getInstance().w2l_1]);
    }
  }
  function get_UploadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return UploadProgressListenerAttributeKey;
  }
  var UploadProgressListenerAttributeKey;
  function get_DownloadProgressListenerAttributeKey() {
    init_properties_BodyProgress_kt_2jnetn();
    return DownloadProgressListenerAttributeKey;
  }
  var DownloadProgressListenerAttributeKey;
  function handle($this, scope) {
    var observableContentPhase = new PipelinePhase('ObservableContent');
    scope.j30_1.f2h(Phases_getInstance().k39_1, observableContentPhase);
    scope.j30_1.i2h(observableContentPhase, BodyProgress$handle$slambda_0(null));
    var tmp = Phases_getInstance_2().o39_1;
    scope.m30_1.i2h(tmp, BodyProgress$handle$slambda_2(null));
  }
  function Plugin() {
    Plugin_instance = this;
    this.p39_1 = new AttributeKey('BodyProgress');
  }
  Plugin.prototype.s = function () {
    return this.p39_1;
  };
  Plugin.prototype.q39 = function (block) {
    return new BodyProgress();
  };
  Plugin.prototype.o33 = function (block) {
    return this.q39(block);
  };
  Plugin.prototype.r39 = function (plugin, scope) {
    handle(plugin, scope);
  };
  Plugin.prototype.p33 = function (plugin, scope) {
    return this.r39(plugin instanceof BodyProgress ? plugin : THROW_CCE(), scope);
  };
  Plugin.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance;
  function Plugin_getInstance() {
    if (Plugin_instance == null)
      new Plugin();
    return Plugin_instance;
  }
  function BodyProgress$handle$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda.prototype.d31 = function ($this$intercept, content, $cont) {
    var tmp = this.e31($this$intercept, content, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  BodyProgress$handle$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.a3a_1.e2h_1.o32_1.v2c(get_UploadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.c3a_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = this.b3a_1;
            tmp_2.d3a_1 = new ObservableContent(tmp_3 instanceof OutgoingContent ? tmp_3 : THROW_CCE(), this.a3a_1.e2h_1.n32_1, this.c3a_1);
            this.hi_1 = 1;
            suspendResult = this.a3a_1.i2g(this.d3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  BodyProgress$handle$slambda.prototype.e31 = function ($this$intercept, content, completion) {
    var i = new BodyProgress$handle$slambda(completion);
    i.a3a_1 = $this$intercept;
    i.b3a_1 = content;
    return i;
  };
  BodyProgress$handle$slambda.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_0(resultContinuation) {
    var i = new BodyProgress$handle$slambda(resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.d31($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress$handle$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  BodyProgress$handle$slambda_1.prototype.q3a = function ($this$intercept, response, $cont) {
    var tmp = this.r3a($this$intercept, response, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  BodyProgress$handle$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.q3a(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $cont);
  };
  BodyProgress$handle$slambda_1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.n3a_1.r35().t34().y33().v2c(get_DownloadProgressListenerAttributeKey());
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return Unit_getInstance();
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.o3a_1 = tmp_1;
            this.p3a_1 = withObservableDownload(this.n3a_1, this.o3a_1);
            this.hi_1 = 1;
            suspendResult = this.m3a_1.i2g(this.p3a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  BodyProgress$handle$slambda_1.prototype.r3a = function ($this$intercept, response, completion) {
    var i = new BodyProgress$handle$slambda_1(completion);
    i.m3a_1 = $this$intercept;
    i.n3a_1 = response;
    return i;
  };
  BodyProgress$handle$slambda_1.$metadata$ = classMeta('BodyProgress$handle$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function BodyProgress$handle$slambda_2(resultContinuation) {
    var i = new BodyProgress$handle$slambda_1(resultContinuation);
    var l = function ($this$intercept, response, $cont) {
      return i.q3a($this$intercept, response, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function BodyProgress() {
    Plugin_getInstance();
  }
  BodyProgress.$metadata$ = classMeta('BodyProgress');
  function withObservableDownload(_this__u8e3s4, listener) {
    init_properties_BodyProgress_kt_2jnetn();
    var observableByteChannel = observable(_this__u8e3s4.q14(), _this__u8e3s4.d1d(), contentLength(_this__u8e3s4), listener);
    return wrapWithContent(_this__u8e3s4, observableByteChannel);
  }
  var properties_initialized_BodyProgress_kt_pmfrhr;
  function init_properties_BodyProgress_kt_2jnetn() {
    if (properties_initialized_BodyProgress_kt_pmfrhr) {
    } else {
      properties_initialized_BodyProgress_kt_pmfrhr = true;
      UploadProgressListenerAttributeKey = new AttributeKey('UploadProgressListenerAttributeKey');
      DownloadProgressListenerAttributeKey = new AttributeKey('DownloadProgressListenerAttributeKey');
    }
  }
  function get_ValidateMark() {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    return ValidateMark;
  }
  var ValidateMark;
  function addDefaultResponseValidation(_this__u8e3s4) {
    init_properties_DefaultResponseValidation_kt_dx65ax();
    HttpResponseValidator(_this__u8e3s4, addDefaultResponseValidation$lambda(_this__u8e3s4));
  }
  function RedirectResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.t3a_1 = 'Unhandled redirect: ' + response.r35().t34().s35().y2o_1 + ' ' + response.r35().t34().v34() + '. ' + ('Status: ' + response.w34() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, RedirectResponseException);
  }
  RedirectResponseException.prototype.j1 = function () {
    return this.t3a_1;
  };
  RedirectResponseException.$metadata$ = classMeta('RedirectResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(RedirectResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ClientRequestException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.v3a_1 = 'Client request(' + response.r35().t34().s35().y2o_1 + ' ' + response.r35().t34().v34() + ') ' + ('invalid: ' + response.w34() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ClientRequestException);
  }
  ClientRequestException.prototype.j1 = function () {
    return this.v3a_1;
  };
  ClientRequestException.$metadata$ = classMeta('ClientRequestException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ClientRequestException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ServerResponseException(response, cachedResponseText) {
    ResponseException.call(this, response, cachedResponseText);
    this.x3a_1 = 'Server error(' + response.r35().t34().s35().y2o_1 + ' ' + response.r35().t34().v34() + ': ' + ('' + response.w34() + '. Text: "' + cachedResponseText + '"');
    captureStack(this, ServerResponseException);
  }
  ServerResponseException.prototype.j1 = function () {
    return this.x3a_1;
  };
  ServerResponseException.$metadata$ = classMeta('ServerResponseException', undefined, undefined, undefined, undefined, ResponseException.prototype);
  Object.defineProperty(ServerResponseException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.j1();
    }
  });
  function ResponseException(response, cachedResponseText) {
    IllegalStateException_init_$Init$_0('Bad response: ' + response + '. Text: "' + cachedResponseText + '"', this);
    this.y3a_1 = response;
    captureStack(this, ResponseException);
  }
  ResponseException.$metadata$ = classMeta('ResponseException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function addDefaultResponseValidation$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  addDefaultResponseValidation$lambda$slambda.prototype.p3b = function (response, $cont) {
    var tmp = this.q3b(response, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  addDefaultResponseValidation$lambda$slambda.prototype.ri = function (p1, $cont) {
    return this.p3b(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  addDefaultResponseValidation$lambda$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 5;
            this.i3b_1 = this.h3b_1.r35().y33().u2c(get_ExpectSuccessAttributeKey());
            if (!this.i3b_1) {
              return Unit_getInstance();
            }

            this.j3b_1 = this.h3b_1.w34().j2r_1;
            this.k3b_1 = this.h3b_1.r35();
            if (this.j3b_1 < 300 ? true : this.k3b_1.y33().w2c(get_ValidateMark())) {
              return Unit_getInstance();
            }

            this.hi_1 = 1;
            suspendResult = save(this.k3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l3b_1 = suspendResult;
            this.l3b_1.y33().x2c(get_ValidateMark(), Unit_getInstance());
            ;
            this.m3b_1 = this.l3b_1;
            this.n3b_1 = this.m3b_1.k31();
            this.ii_1 = 3;
            this.hi_1 = 2;
            suspendResult = bodyAsText$default(this.n3b_1, null, this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o3b_1 = suspendResult;
            this.ii_1 = 5;
            this.hi_1 = 4;
            continue $sm;
          case 3:
            this.ii_1 = 5;
            var tmp_0 = this.ki_1;
            if (tmp_0 instanceof MalformedInputException) {
              var _ = this.ki_1;
              var tmp_1 = this;
              tmp_1.o3b_1 = '<body failed decoding>';
              this.hi_1 = 4;
              continue $sm;
            } else {
              throw this.ki_1;
            }

            break;
          case 4:
            this.ii_1 = 5;
            var exceptionResponseText = this.o3b_1;
            var tmp0_subject = this.j3b_1;
            if (300 <= tmp0_subject ? tmp0_subject <= 399 : false)
              throw new RedirectResponseException(this.n3b_1, exceptionResponseText);
            else if (400 <= tmp0_subject ? tmp0_subject <= 499 : false)
              throw new ClientRequestException(this.n3b_1, exceptionResponseText);
            else if (500 <= tmp0_subject ? tmp0_subject <= 599 : false)
              throw new ServerResponseException(this.n3b_1, exceptionResponseText);
            else
              throw new ResponseException(this.n3b_1, exceptionResponseText);
            return Unit_getInstance();
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
  addDefaultResponseValidation$lambda$slambda.prototype.q3b = function (response, completion) {
    var i = new addDefaultResponseValidation$lambda$slambda(completion);
    i.h3b_1 = response;
    return i;
  };
  addDefaultResponseValidation$lambda$slambda.$metadata$ = classMeta('addDefaultResponseValidation$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function addDefaultResponseValidation$lambda$slambda_0(resultContinuation) {
    var i = new addDefaultResponseValidation$lambda$slambda(resultContinuation);
    var l = function (response, $cont) {
      return i.p3b(response, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function addDefaultResponseValidation$lambda($this_addDefaultResponseValidation) {
    return function ($this$HttpResponseValidator) {
      $this$HttpResponseValidator.t3b_1 = $this_addDefaultResponseValidation.v32_1;
      $this$HttpResponseValidator.u3b(addDefaultResponseValidation$lambda$slambda_0(null));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DefaultResponseValidation_kt_akvzqt;
  function init_properties_DefaultResponseValidation_kt_dx65ax() {
    if (properties_initialized_DefaultResponseValidation_kt_akvzqt) {
    } else {
      properties_initialized_DefaultResponseValidation_kt_akvzqt = true;
      ValidateMark = new AttributeKey('ValidateMark');
    }
  }
  function defaultTransformers(_this__u8e3s4) {
    var tmp = Phases_getInstance().k39_1;
    _this__u8e3s4.j30_1.i2h(tmp, defaultTransformers$slambda_0(null));
    var tmp_0 = Phases_getInstance_1().i33_1;
    _this__u8e3s4.k30_1.i2h(tmp_0, defaultTransformers$slambda_2(null));
    platformResponseDefaultTransformers(_this__u8e3s4);
  }
  function defaultTransformers$1$content$1($contentType, $body) {
    this.y3b_1 = $body;
    ByteArrayContent.call(this);
    var tmp = this;
    var tmp0_elvis_lhs = $contentType;
    tmp.w3b_1 = tmp0_elvis_lhs == null ? Application_getInstance().y2i_1 : tmp0_elvis_lhs;
    this.x3b_1 = toLong($body.length);
  }
  defaultTransformers$1$content$1.prototype.v2t = function () {
    return this.w3b_1;
  };
  defaultTransformers$1$content$1.prototype.w2t = function () {
    return this.x3b_1;
  };
  defaultTransformers$1$content$1.prototype.x2t = function () {
    return this.y3b_1;
  };
  defaultTransformers$1$content$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ByteArrayContent.prototype);
  function defaultTransformers$1$content$2($this_intercept, $contentType, $body) {
    this.c3c_1 = $body;
    ReadChannelContent.call(this);
    var tmp = this;
    var tmp0_safe_receiver = $this_intercept.e2h_1.l32_1.p14(HttpHeaders_getInstance().z2k_1);
    tmp.a3c_1 = tmp0_safe_receiver == null ? null : toLong_0(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_elvis_lhs = $contentType;
    tmp_0.b3c_1 = tmp0_elvis_lhs == null ? Application_getInstance().y2i_1 : tmp0_elvis_lhs;
  }
  defaultTransformers$1$content$2.prototype.w2t = function () {
    return this.a3c_1;
  };
  defaultTransformers$1$content$2.prototype.v2t = function () {
    return this.b3c_1;
  };
  defaultTransformers$1$content$2.prototype.a2u = function () {
    return this.c3c_1;
  };
  defaultTransformers$1$content$2.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, ReadChannelContent.prototype);
  function defaultTransformers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda.prototype.d31 = function ($this$intercept, body, $cont) {
    var tmp = this.e31($this$intercept, body, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  defaultTransformers$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            if (this.l3c_1.e2h_1.l32_1.p14(HttpHeaders_getInstance().k2k_1) == null) {
              this.l3c_1.e2h_1.l32_1.r2e(HttpHeaders_getInstance().k2k_1, '*/*');
            }

            this.n3c_1 = contentType(this.l3c_1.e2h_1);
            var tmp_0 = this;
            var tmp0_subject = this.m3c_1;
            var tmp_1;
            if (typeof tmp0_subject === 'string') {
              var tmp1_elvis_lhs = this.n3c_1;
              var tmp_2 = tmp1_elvis_lhs == null ? Text_getInstance().p2j_1 : tmp1_elvis_lhs;
              tmp_1 = TextContent_init_$Create$(this.m3c_1, tmp_2, null, 4, null);
            } else {
              if (isByteArray(tmp0_subject)) {
                tmp_1 = new defaultTransformers$1$content$1(this.n3c_1, this.m3c_1);
              } else {
                if (isInterface(tmp0_subject, ByteReadChannel)) {
                  tmp_1 = new defaultTransformers$1$content$2(this.l3c_1, this.n3c_1, this.m3c_1);
                } else {
                  if (tmp0_subject instanceof OutgoingContent) {
                    tmp_1 = this.m3c_1;
                  } else {
                    tmp_1 = platformRequestDefaultTransform(this.n3c_1, this.l3c_1.e2h_1, this.m3c_1);
                  }
                }
              }
            }

            tmp_0.o3c_1 = tmp_1;
            var tmp2_safe_receiver = this.o3c_1;
            if (!((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v2t()) == null)) {
              this.l3c_1.e2h_1.l32_1.t2e(HttpHeaders_getInstance().c2l_1);
              this.hi_1 = 1;
              suspendResult = this.l3c_1.i2g(this.o3c_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hi_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            ;
            this.hi_1 = 2;
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
  defaultTransformers$slambda.prototype.e31 = function ($this$intercept, body, completion) {
    var i = new defaultTransformers$slambda(completion);
    i.l3c_1 = $this$intercept;
    i.m3c_1 = body;
    return i;
  };
  defaultTransformers$slambda.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_0(resultContinuation) {
    var i = new defaultTransformers$slambda(resultContinuation);
    var l = function ($this$intercept, body, $cont) {
      return i.d31($this$intercept, body, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function defaultTransformers$slambda$slambda($body, $response, resultContinuation) {
    this.x3c_1 = $body;
    this.y3c_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda$slambda.prototype.p36 = function ($this$writer, $cont) {
    var tmp = this.q36($this$writer, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  defaultTransformers$slambda$slambda.prototype.ri = function (p1, $cont) {
    return this.p36((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 5;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.ii_1 = 4;
            this.ii_1 = 3;
            this.hi_1 = 2;
            var tmp_0 = this.z3c_1.c1p();
            Companion_getInstance_0();
            suspendResult = copyTo(this.x3c_1, tmp_0, new Long(-1, 2147483647), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_1 = this;
            tmp_1.a3d_1 = Unit_getInstance();
            this.ii_1 = 5;
            this.hi_1 = 6;
            continue $sm;
          case 3:
            this.ii_1 = 4;
            var tmp_2 = this.ki_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.ki_1;
              var tmp_3 = this;
              cancel_0(this.y3c_1, cause);
              throw cause;
            } else {
              var tmp_4 = this.ki_1;
              if (tmp_4 instanceof Error) {
                var cause_0 = this.ki_1;
                var tmp_5 = this;
                cancel(this.y3c_1, 'Receive failed', cause_0);
                throw cause_0;
              } else {
                throw this.ki_1;
              }
            }

            break;
          case 4:
            this.ii_1 = 5;
            var t = this.ki_1;
            complete(this.y3c_1);
            ;
            throw t;
          case 5:
            throw this.ki_1;
          case 6:
            complete(this.y3c_1);
            ;
            return Unit_getInstance();
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
  defaultTransformers$slambda$slambda.prototype.q36 = function ($this$writer, completion) {
    var i = new defaultTransformers$slambda$slambda(this.x3c_1, this.y3c_1, completion);
    i.z3c_1 = $this$writer;
    return i;
  };
  defaultTransformers$slambda$slambda.$metadata$ = classMeta('defaultTransformers$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function defaultTransformers$slambda$slambda_0($body, $response, resultContinuation) {
    var i = new defaultTransformers$slambda$slambda($body, $response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p36($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function defaultTransformers$slambda$lambda($responseJobHolder) {
    return function (it) {
      $responseJobHolder.x1i();
      return Unit_getInstance();
    };
  }
  function defaultTransformers$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  defaultTransformers$slambda_1.prototype.x31 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.y31($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  defaultTransformers$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x31(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  defaultTransformers$slambda_1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 11;
            this.l3d_1 = this.k3d_1.h3();
            this.m3d_1 = this.k3d_1.i3();
            var tmp_0 = this.m3d_1;
            if (!isInterface(tmp_0, ByteReadChannel))
              return Unit_getInstance();
            this.n3d_1 = this.j3d_1.e2h_1.k31();
            this.o3d_1 = this.l3d_1.v2h_1;
            if (this.o3d_1.equals(getKClass(Unit))) {
              cancel_1(this.m3d_1);
              this.hi_1 = 9;
              suspendResult = this.j3d_1.i2g(new HttpResponseContainer(this.l3d_1, Unit_getInstance()), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.o3d_1.equals(PrimitiveClasses_getInstance().xf())) {
                this.hi_1 = 7;
                suspendResult = this.m3d_1.m23(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (this.o3d_1.equals(getKClass(ByteReadPacket)) ? true : this.o3d_1.equals(getKClass(Input))) {
                  this.hi_1 = 5;
                  suspendResult = this.m3d_1.m23(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.o3d_1.equals(PrimitiveClasses_getInstance().fg())) {
                    this.hi_1 = 3;
                    suspendResult = toByteArray(this.m3d_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (this.o3d_1.equals(getKClass(ByteReadChannel))) {
                      this.p3d_1 = Job(this.n3d_1.d1d().y3(Key_getInstance()));
                      var tmp_1 = this;
                      var tmp_2 = this;
                      var tmp_3 = this.n3d_1.d1d();
                      tmp_2.q3d_1 = writer$default(this.j3d_1, tmp_3, false, defaultTransformers$slambda$slambda_0(this.m3d_1, this.n3d_1, null), 2, null);
                      this.q3d_1.e1e(defaultTransformers$slambda$lambda(this.p3d_1));
                      tmp_1.r3d_1 = this.q3d_1.c1p();
                      this.hi_1 = 2;
                      suspendResult = this.j3d_1.i2g(new HttpResponseContainer(this.l3d_1, this.r3d_1), this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      if (this.o3d_1.equals(getKClass(HttpStatusCode))) {
                        cancel_1(this.m3d_1);
                        this.hi_1 = 1;
                        suspendResult = this.j3d_1.i2g(new HttpResponseContainer(this.l3d_1, this.n3d_1.w34()), this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.hi_1 = 10;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            ;
            this.hi_1 = 10;
            continue $sm;
          case 2:
            ;
            this.hi_1 = 10;
            continue $sm;
          case 3:
            this.s3d_1 = suspendResult;
            this.t3d_1 = contentLength(this.n3d_1);
            this.u3d_1 = this.n3d_1.p2o().p14(HttpHeaders_getInstance().x2k_1);
            if ((this.u3d_1 == null ? !(this.t3d_1 == null) : false) ? this.t3d_1.f1(new Long(0, 0)) > 0 : false) {
              var tmp0_check = this.s3d_1.length === this.t3d_1.o6();
              if (!tmp0_check) {
                var message = 'Expected ' + toString_0(this.t3d_1) + ', actual ' + this.s3d_1.length;
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            this.hi_1 = 4;
            suspendResult = this.j3d_1.i2g(new HttpResponseContainer(this.l3d_1, this.s3d_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            ;
            this.hi_1 = 10;
            continue $sm;
          case 5:
            this.v3d_1 = suspendResult;
            this.w3d_1 = new HttpResponseContainer(this.l3d_1, this.v3d_1);
            this.hi_1 = 6;
            suspendResult = this.j3d_1.i2g(this.w3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            ;
            this.hi_1 = 10;
            continue $sm;
          case 7:
            this.x3d_1 = suspendResult;
            var tmp_4 = this;
            tmp_4.y3d_1 = this.x3d_1.i28(0, 0, 3, null);
            this.z3d_1 = toInt(this.y3d_1);
            this.a3e_1 = new HttpResponseContainer(this.l3d_1, this.z3d_1);
            this.hi_1 = 8;
            suspendResult = this.j3d_1.i2g(this.a3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            ;
            this.hi_1 = 10;
            continue $sm;
          case 9:
            ;
            this.hi_1 = 10;
            continue $sm;
          case 10:
            return Unit_getInstance();
          case 11:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 11) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  defaultTransformers$slambda_1.prototype.y31 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new defaultTransformers$slambda_1(completion);
    i.j3d_1 = $this$intercept;
    i.k3d_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  defaultTransformers$slambda_1.$metadata$ = classMeta('defaultTransformers$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function defaultTransformers$slambda_2(resultContinuation) {
    var i = new defaultTransformers$slambda_1(resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.x31($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function get_ExpectSuccessAttributeKey() {
    init_properties_HttpCallValidator_kt_nw40ag();
    return ExpectSuccessAttributeKey;
  }
  var ExpectSuccessAttributeKey;
  function HttpCallValidator$Companion$install$slambda$lambda($plugin) {
    return function () {
      return $plugin.d3e_1;
    };
  }
  function HttpCallValidator$Companion$install$slambda($plugin, resultContinuation) {
    this.m3e_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda.prototype.d31 = function ($this$intercept, it, $cont) {
    var tmp = this.e31($this$intercept, it, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpCallValidator$Companion$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 5;
            this.ii_1 = 3;
            var tmp_0 = get_ExpectSuccessAttributeKey();
            this.n3e_1.e2h_1.o32_1.z2c(tmp_0, HttpCallValidator$Companion$install$slambda$lambda(this.m3e_1));
            ;
            this.hi_1 = 1;
            suspendResult = this.n3e_1.i2g(this.o3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ii_1 = 5;
            this.hi_1 = 2;
            continue $sm;
          case 2:
            this.ii_1 = 5;
            return Unit_getInstance();
          case 3:
            this.ii_1 = 5;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof Error) {
              this.p3e_1 = this.ki_1;
              this.q3e_1 = unwrapCancellationException(this.p3e_1);
              this.hi_1 = 4;
              suspendResult = processException(this.m3e_1, this.q3e_1, HttpRequest(this.n3e_1.e2h_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.ki_1;
            }

            break;
          case 4:
            throw this.q3e_1;
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
  HttpCallValidator$Companion$install$slambda.prototype.e31 = function ($this$intercept, it, completion) {
    var i = new HttpCallValidator$Companion$install$slambda(this.m3e_1, completion);
    i.n3e_1 = $this$intercept;
    i.o3e_1 = it;
    return i;
  };
  HttpCallValidator$Companion$install$slambda.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.d31($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation) {
    this.z3e_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_1.prototype.x31 = function ($this$intercept, container, $cont) {
    var tmp = this.y31($this$intercept, container, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x31(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 5;
            this.ii_1 = 3;
            this.hi_1 = 1;
            suspendResult = this.a3f_1.i2g(this.b3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ii_1 = 5;
            this.hi_1 = 2;
            continue $sm;
          case 2:
            this.ii_1 = 5;
            return Unit_getInstance();
          case 3:
            this.ii_1 = 5;
            var tmp_0 = this.ki_1;
            if (tmp_0 instanceof Error) {
              this.c3f_1 = this.ki_1;
              this.d3f_1 = unwrapCancellationException(this.c3f_1);
              this.hi_1 = 4;
              suspendResult = processException(this.z3e_1, this.d3f_1, this.a3f_1.e2h_1.t34(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.ki_1;
            }

            break;
          case 4:
            throw this.d3f_1;
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
  HttpCallValidator$Companion$install$slambda_1.prototype.y31 = function ($this$intercept, container, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_1(this.z3e_1, completion);
    i.a3f_1 = $this$intercept;
    i.b3f_1 = container;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_1.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, container, $cont) {
      return i.x31($this$intercept, container, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation) {
    this.m3f_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpCallValidator$Companion$install$slambda_3.prototype.q3f = function ($this$intercept, request, $cont) {
    var tmp = this.r3f($this$intercept, request, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.l7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.q3f(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpCallValidator$Companion$install$slambda_3.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.hi_1 = 1;
            suspendResult = this.n3f_1.m33(this.o3f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p3f_1 = suspendResult;
            this.hi_1 = 2;
            suspendResult = validateResponse(this.m3f_1, this.p3f_1.k31(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.p3f_1;
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
  HttpCallValidator$Companion$install$slambda_3.prototype.r3f = function ($this$intercept, request, completion) {
    var i = new HttpCallValidator$Companion$install$slambda_3(this.m3f_1, completion);
    i.n3f_1 = $this$intercept;
    i.o3f_1 = request;
    return i;
  };
  HttpCallValidator$Companion$install$slambda_3.$metadata$ = classMeta('HttpCallValidator$Companion$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpCallValidator$Companion$install$slambda_4($plugin, resultContinuation) {
    var i = new HttpCallValidator$Companion$install$slambda_3($plugin, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.q3f($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function validateResponse($this, response, $cont) {
    var tmp = new $validateResponseCOROUTINE$5($this, response, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function processException($this, cause, request, $cont) {
    var tmp = new $processExceptionCOROUTINE$6($this, cause, request, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function Config() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.r3b_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$1 = ArrayList_init_$Create$();
    tmp_0.s3b_1 = tmp$ret$1;
    this.t3b_1 = true;
  }
  Config.prototype.u3b = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.r3b_1;
    tmp0_plusAssign.a(block);
  };
  Config.$metadata$ = classMeta('Config');
  function Companion_1() {
    Companion_instance_1 = this;
    this.u3g_1 = new AttributeKey('HttpResponseValidator');
  }
  Companion_1.prototype.s = function () {
    return this.u3g_1;
  };
  Companion_1.prototype.v3g = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpCallValidator(reversed(config.r3b_1), reversed(config.s3b_1), config.t3b_1);
  };
  Companion_1.prototype.o33 = function (block) {
    return this.v3g(block);
  };
  Companion_1.prototype.w3g = function (plugin_0, scope) {
    var tmp = Phases_getInstance().h39_1;
    scope.j30_1.i2h(tmp, HttpCallValidator$Companion$install$slambda_0(plugin_0, null));
    var BeforeReceive = new PipelinePhase('BeforeReceive');
    scope.k30_1.h2h(Phases_getInstance_1().h33_1, BeforeReceive);
    scope.k30_1.i2h(BeforeReceive, HttpCallValidator$Companion$install$slambda_2(plugin_0, null));
    var tmp_0 = plugin(scope, Plugin_getInstance_3());
    tmp_0.z3g(HttpCallValidator$Companion$install$slambda_4(plugin_0, null));
  };
  Companion_1.prototype.p33 = function (plugin, scope) {
    return this.w3g(plugin instanceof HttpCallValidator ? plugin : THROW_CCE(), scope);
  };
  Companion_1.$metadata$ = objectMeta('Companion', [HttpClientPlugin]);
  var Companion_instance_1;
  function Companion_getInstance_9() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $validateResponseCOROUTINE$5(_this__u8e3s4, response, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a3g_1 = _this__u8e3s4;
    this.b3g_1 = response;
  }
  $validateResponseCOROUTINE$5.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            var tmp_0 = this;
            tmp_0.c3g_1 = this.a3g_1.b3e_1;
            this.d3g_1 = this.c3g_1.d();
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (!this.d3g_1.e()) {
              this.hi_1 = 3;
              continue $sm;
            }

            this.e3g_1 = this.d3g_1.f();
            this.hi_1 = 2;
            suspendResult = this.e3g_1(this.b3g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.hi_1 = 1;
            continue $sm;
          case 3:
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
  $validateResponseCOROUTINE$5.$metadata$ = classMeta('$validateResponseCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $processExceptionCOROUTINE$6(_this__u8e3s4, cause, request, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n3g_1 = _this__u8e3s4;
    this.o3g_1 = cause;
    this.p3g_1 = request;
  }
  $processExceptionCOROUTINE$6.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 6;
            var tmp_0 = this;
            tmp_0.q3g_1 = this.n3g_1.c3e_1;
            this.r3g_1 = this.q3g_1.d();
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (!this.r3g_1.e()) {
              this.hi_1 = 5;
              continue $sm;
            }

            this.s3g_1 = this.r3g_1.f();
            this.t3g_1 = this.s3g_1;
            var tmp_1 = this.t3g_1;
            if (tmp_1 instanceof ExceptionHandlerWrapper) {
              this.hi_1 = 3;
              suspendResult = this.s3g_1.b3h_1(this.o3g_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this.t3g_1;
              if (tmp_2 instanceof RequestExceptionHandlerWrapper) {
                this.hi_1 = 2;
                suspendResult = this.s3g_1.a3h_1(this.o3g_1, this.p3g_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.hi_1 = 4;
                continue $sm;
              }
            }

            break;
          case 2:
            this.hi_1 = 4;
            continue $sm;
          case 3:
            this.hi_1 = 4;
            continue $sm;
          case 4:
            this.hi_1 = 1;
            continue $sm;
          case 5:
            return Unit_getInstance();
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
  $processExceptionCOROUTINE$6.$metadata$ = classMeta('$processExceptionCOROUTINE$6', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpCallValidator(responseValidators, callExceptionHandlers, expectSuccess) {
    Companion_getInstance_9();
    this.b3e_1 = responseValidators;
    this.c3e_1 = callExceptionHandlers;
    this.d3e_1 = expectSuccess;
  }
  HttpCallValidator.$metadata$ = classMeta('HttpCallValidator');
  function HandlerWrapper() {
  }
  HandlerWrapper.$metadata$ = interfaceMeta('HandlerWrapper');
  function ExceptionHandlerWrapper() {
  }
  ExceptionHandlerWrapper.$metadata$ = classMeta('ExceptionHandlerWrapper', [HandlerWrapper]);
  function RequestExceptionHandlerWrapper() {
  }
  RequestExceptionHandlerWrapper.$metadata$ = classMeta('RequestExceptionHandlerWrapper', [HandlerWrapper]);
  function HttpRequest(builder) {
    init_properties_HttpCallValidator_kt_nw40ag();
    return new HttpRequest$1(builder);
  }
  function HttpResponseValidator(_this__u8e3s4, block) {
    init_properties_HttpCallValidator_kt_nw40ag();
    _this__u8e3s4.q33(Companion_getInstance_9(), block);
  }
  function HttpRequest$1($builder) {
    this.g3h_1 = $builder;
    this.c3h_1 = $builder.k32_1;
    this.d3h_1 = $builder.j32_1.gs();
    this.e3h_1 = $builder.o32_1;
    this.f3h_1 = $builder.l32_1.gs();
  }
  HttpRequest$1.prototype.r35 = function () {
    throw IllegalStateException_init_$Create$('Call is not initialized');
  };
  HttpRequest$1.prototype.s35 = function () {
    return this.c3h_1;
  };
  HttpRequest$1.prototype.v34 = function () {
    return this.d3h_1;
  };
  HttpRequest$1.prototype.y33 = function () {
    return this.e3h_1;
  };
  HttpRequest$1.prototype.p2o = function () {
    return this.f3h_1;
  };
  HttpRequest$1.$metadata$ = classMeta(undefined, [HttpRequest_0]);
  var properties_initialized_HttpCallValidator_kt_xrx49w;
  function init_properties_HttpCallValidator_kt_nw40ag() {
    if (properties_initialized_HttpCallValidator_kt_xrx49w) {
    } else {
      properties_initialized_HttpCallValidator_kt_xrx49w = true;
      ExpectSuccessAttributeKey = new AttributeKey('ExpectSuccessAttributeKey');
    }
  }
  function get_PLUGIN_INSTALLED_LIST() {
    init_properties_HttpClientPlugin_kt_hdphw();
    return PLUGIN_INSTALLED_LIST;
  }
  var PLUGIN_INSTALLED_LIST;
  function plugin(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_elvis_lhs = pluginOrNull(_this__u8e3s4, plugin);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Plugin ' + plugin + ' is not installed. Consider using `install(' + plugin.s() + ')` in client config first.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function HttpClientPlugin() {
  }
  HttpClientPlugin.$metadata$ = interfaceMeta('HttpClientPlugin');
  function pluginOrNull(_this__u8e3s4, plugin) {
    init_properties_HttpClientPlugin_kt_hdphw();
    var tmp0_safe_receiver = _this__u8e3s4.n30_1.v2c(get_PLUGIN_INSTALLED_LIST());
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v2c(plugin.s());
  }
  var properties_initialized_HttpClientPlugin_kt_p98320;
  function init_properties_HttpClientPlugin_kt_hdphw() {
    if (properties_initialized_HttpClientPlugin_kt_p98320) {
    } else {
      properties_initialized_HttpClientPlugin_kt_p98320 = true;
      PLUGIN_INSTALLED_LIST = new AttributeKey('ApplicationPluginRegistry');
    }
  }
  function HttpPlainText$Plugin$install$slambda($plugin, resultContinuation) {
    this.p3h_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda.prototype.d31 = function ($this$intercept, content, $cont) {
    var tmp = this.e31($this$intercept, content, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpPlainText$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.p3h_1.w3h(this.q3h_1.e2h_1);
            var tmp_0 = this.r3h_1;
            if (!(typeof tmp_0 === 'string'))
              return Unit_getInstance();
            this.s3h_1 = contentType(this.q3h_1.e2h_1);
            if (!(this.s3h_1 == null) ? !(this.s3h_1.z2j_1 === Text_getInstance().p2j_1.z2j_1) : false) {
              return Unit_getInstance();
            }

            this.hi_1 = 1;
            suspendResult = this.q3h_1.i2g(wrapContent(this.p3h_1, this.r3h_1, this.s3h_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
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
  HttpPlainText$Plugin$install$slambda.prototype.e31 = function ($this$intercept, content, completion) {
    var i = new HttpPlainText$Plugin$install$slambda(this.p3h_1, completion);
    i.q3h_1 = $this$intercept;
    i.r3h_1 = content;
    return i;
  };
  HttpPlainText$Plugin$install$slambda.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_0($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda($plugin, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.d31($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation) {
    this.f3i_1 = $plugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpPlainText$Plugin$install$slambda_1.prototype.x31 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
    var tmp = this.y31($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.x31(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $cont);
  };
  HttpPlainText$Plugin$install$slambda_1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.i3i_1 = this.h3i_1.h3();
            this.j3i_1 = this.h3i_1.i3();
            var tmp_0;
            if (!this.i3i_1.v2h_1.equals(PrimitiveClasses_getInstance().bg())) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.j3i_1;
              tmp_0 = !isInterface(tmp_1, ByteReadChannel);
            }

            if (tmp_0)
              return Unit_getInstance();
            this.hi_1 = 1;
            suspendResult = this.j3i_1.m23(new Long(0, 0), this, 1, null);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k3i_1 = suspendResult;
            this.l3i_1 = this.f3i_1.m3i(this.g3i_1.e2h_1, this.k3i_1);
            this.hi_1 = 2;
            suspendResult = this.g3i_1.i2g(new HttpResponseContainer(this.i3i_1, this.l3i_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpPlainText$Plugin$install$slambda_1.prototype.y31 = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, completion) {
    var i = new HttpPlainText$Plugin$install$slambda_1(this.f3i_1, completion);
    i.g3i_1 = $this$intercept;
    i.h3i_1 = _name_for_destructuring_parameter_0__wldtmu;
    return i;
  };
  HttpPlainText$Plugin$install$slambda_1.$metadata$ = classMeta('HttpPlainText$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpPlainText$Plugin$install$slambda_2($plugin, resultContinuation) {
    var i = new HttpPlainText$Plugin$install$slambda_1($plugin, resultContinuation);
    var l = function ($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont) {
      return i.x31($this$intercept, _name_for_destructuring_parameter_0__wldtmu, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Config_0() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp$ret$0 = LinkedHashSet_init_$Create$();
    tmp.n3i_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$1 = LinkedHashMap_init_$Create$();
    tmp_0.o3i_1 = tmp$ret$1;
    this.p3i_1 = null;
    this.q3i_1 = Charsets_getInstance().r28_1;
  }
  Config_0.$metadata$ = classMeta('Config');
  function Plugin_0() {
    Plugin_instance_0 = this;
    this.r3i_1 = new AttributeKey('HttpPlainText');
  }
  Plugin_0.prototype.s = function () {
    return this.r3i_1;
  };
  Plugin_0.prototype.v3g = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_0();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    return new HttpPlainText(config.n3i_1, config.o3i_1, config.p3i_1, config.q3i_1);
  };
  Plugin_0.prototype.o33 = function (block) {
    return this.v3g(block);
  };
  Plugin_0.prototype.s3i = function (plugin, scope) {
    var tmp = Phases_getInstance().k39_1;
    scope.j30_1.i2h(tmp, HttpPlainText$Plugin$install$slambda_0(plugin, null));
    var tmp_0 = Phases_getInstance_1().j33_1;
    scope.k30_1.i2h(tmp_0, HttpPlainText$Plugin$install$slambda_2(plugin, null));
  };
  Plugin_0.prototype.p33 = function (plugin, scope) {
    return this.s3i(plugin instanceof HttpPlainText ? plugin : THROW_CCE(), scope);
  };
  Plugin_0.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_0;
  function Plugin_getInstance_0() {
    if (Plugin_instance_0 == null)
      new Plugin_0();
    return Plugin_instance_0;
  }
  function wrapContent($this, content, requestContentType) {
    var tmp0_elvis_lhs = requestContentType;
    var contentType = tmp0_elvis_lhs == null ? Text_getInstance().p2j_1 : tmp0_elvis_lhs;
    var tmp1_safe_receiver = requestContentType;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : charset(tmp1_safe_receiver);
    var charset_0 = tmp2_elvis_lhs == null ? $this.u3h_1 : tmp2_elvis_lhs;
    var tmp = withCharset(contentType, charset_0);
    return TextContent_init_$Create$(content, tmp, null, 4, null);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.t3i_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.p = function (a, b) {
    return this.t3i_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.p(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function HttpPlainText$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = b.g3_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = a.g3_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText$lambda_0(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$0 = get_name(a);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    tmp$ret$1 = get_name(b);
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function HttpPlainText(charsets, charsetQuality, sendCharset, responseCharsetFallback) {
    Plugin_getInstance_0();
    this.t3h_1 = responseCharsetFallback;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.sortedByDescending' call
    var tmp0_sortedByDescending = toList(charsetQuality);
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.compareByDescending' call
    var tmp = HttpPlainText$lambda;
    tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    tmp$ret$1 = sortedWith(tmp0_sortedByDescending, tmp$ret$0);
    var withQuality = tmp$ret$1;
    var tmp$ret$6;
    // Inline function 'kotlin.collections.sortedBy' call
    var tmp$ret$4;
    // Inline function 'kotlin.collections.filter' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$();
    var tmp0_iterator = charsets.d();
    while (tmp0_iterator.e()) {
      var element = tmp0_iterator.f();
      var tmp$ret$2;
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
      tmp$ret$2 = !charsetQuality.c2(element);
      if (tmp$ret$2) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$3 = tmp0_filterTo;
    tmp$ret$4 = tmp$ret$3;
    var tmp1_sortedBy = tmp$ret$4;
    var tmp$ret$5;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = HttpPlainText$lambda_0;
    tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_0);
    tmp$ret$6 = sortedWith(tmp1_sortedBy, tmp$ret$5);
    var withoutQuality = tmp$ret$6;
    var tmp_1 = this;
    var tmp$ret$13;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$12;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = withoutQuality.d();
    while (tmp0_iterator_0.e()) {
      var element_0 = tmp0_iterator_0.f();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var tmp$ret$7;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$7 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$7) {
        tmp0_apply.x6(',');
      }
      tmp0_apply.x6(get_name(element_0));
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = withQuality.d();
    while (tmp0_iterator_1.e()) {
      var element_1 = tmp0_iterator_1.f();
      // Inline function 'io.ktor.client.plugins.HttpPlainText.<anonymous>.<anonymous>' call
      var charset = element_1.h3();
      var quality = element_1.i3();
      var tmp$ret$8;
      // Inline function 'kotlin.text.isNotEmpty' call
      tmp$ret$8 = charSequenceLength(tmp0_apply) > 0;
      if (tmp$ret$8) {
        tmp0_apply.x6(',');
      }
      // Inline function 'kotlin.check' call
      var containsArg = quality;
      var tmp0_check = 0.0 <= containsArg ? containsArg <= 1.0 : false;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$9;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$9 = 'Check failed.';
        var message = tmp$ret$9;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp$ret$10;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = 100 * quality;
      tmp$ret$10 = roundToInt(tmp1_roundToInt);
      var truncatedQuality = tmp$ret$10 / 100.0;
      tmp0_apply.x6(get_name(charset) + ';q=' + truncatedQuality);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$11 = charSequenceLength(tmp0_apply) === 0;
    if (tmp$ret$11) {
      tmp0_apply.x6(get_name(this.t3h_1));
    }
    tmp$ret$12 = tmp0_apply;
    tmp$ret$13 = tmp$ret$12.toString();
    tmp_1.v3h_1 = tmp$ret$13;
    var tmp_2 = this;
    var tmp0_elvis_lhs = sendCharset;
    var tmp2_elvis_lhs = tmp0_elvis_lhs == null ? firstOrNull(withoutQuality) : tmp0_elvis_lhs;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      var tmp1_safe_receiver = firstOrNull(withQuality);
      tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f3_1;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_3;
    tmp_2.u3h_1 = tmp3_elvis_lhs == null ? Charsets_getInstance().r28_1 : tmp3_elvis_lhs;
  }
  HttpPlainText.prototype.m3i = function (call, body) {
    var tmp0_elvis_lhs = charset_0(call.k31());
    var actualCharset = tmp0_elvis_lhs == null ? this.t3h_1 : tmp0_elvis_lhs;
    return readText$default(body, actualCharset, 0, 2, null);
  };
  HttpPlainText.prototype.w3h = function (context) {
    if (!(context.l32_1.p14(HttpHeaders_getInstance().l2k_1) == null))
      return Unit_getInstance();
    context.l32_1.p2e(HttpHeaders_getInstance().l2k_1, this.v3h_1);
  };
  HttpPlainText.$metadata$ = classMeta('HttpPlainText');
  function get_ALLOWED_FOR_REDIRECT() {
    init_properties_HttpRedirect_kt_rcsi6u();
    return ALLOWED_FOR_REDIRECT;
  }
  var ALLOWED_FOR_REDIRECT;
  function handleCall(_this__u8e3s4, $this, context, origin, allowHttpsDowngrade, client, $cont) {
    var tmp = new $handleCallCOROUTINE$7($this, _this__u8e3s4, context, origin, allowHttpsDowngrade, client, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.w3j_1 = $plugin;
    this.x3j_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRedirect$Plugin$install$slambda.prototype.q3f = function ($this$intercept, context, $cont) {
    var tmp = this.r3f($this$intercept, context, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpRedirect$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.q3f(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpRedirect$Plugin$install$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.hi_1 = 1;
            suspendResult = this.y3j_1.m33(this.z3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a3k_1 = suspendResult;
            if (this.w3j_1.b3k_1 ? !get_ALLOWED_FOR_REDIRECT().l1(this.a3k_1.t34().s35()) : false) {
              return this.a3k_1;
            }

            this.hi_1 = 2;
            suspendResult = handleCall(this.y3j_1, Plugin_getInstance_1(), this.z3j_1, this.a3k_1, this.w3j_1.c3k_1, this.x3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  HttpRedirect$Plugin$install$slambda.prototype.r3f = function ($this$intercept, context, completion) {
    var i = new HttpRedirect$Plugin$install$slambda(this.w3j_1, this.x3j_1, completion);
    i.y3j_1 = $this$intercept;
    i.z3j_1 = context;
    return i;
  };
  HttpRedirect$Plugin$install$slambda.$metadata$ = classMeta('HttpRedirect$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRedirect$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpRedirect$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, context, $cont) {
      return i.q3f($this$intercept, context, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $handleCallCOROUTINE$7(_this__u8e3s4, _this__u8e3s4_0, context, origin, allowHttpsDowngrade, client, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c3j_1 = _this__u8e3s4;
    this.d3j_1 = _this__u8e3s4_0;
    this.e3j_1 = context;
    this.f3j_1 = origin;
    this.g3j_1 = allowHttpsDowngrade;
    this.h3j_1 = client;
  }
  $handleCallCOROUTINE$7.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            if (!isRedirect(this.f3j_1.k31().w34()))
              return this.f3j_1;
            this.i3j_1 = this.f3j_1;
            this.j3j_1 = this.e3j_1;
            this.k3j_1 = this.f3j_1.t34().v34().h2s_1;
            this.l3j_1 = get_authority(this.f3j_1.t34().v34());
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.hi_1 = 4;
              continue $sm;
            }

            this.h3j_1.p30_1.c30(this.c3j_1.e3k_1, this.i3j_1.k31());
            this.m3j_1 = this.i3j_1.k31().p2o().p14(HttpHeaders_getInstance().y2l_1);
            var tmp_0 = this;
            var tmp_1 = this;
            tmp_1.n3j_1 = new HttpRequestBuilder();
            this.n3j_1.j38(this.j3j_1);
            ;
            this.n3j_1.j32_1.e2s_1.bb();
            var tmp0_safe_receiver = this.m3j_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              takeFrom(this.n3j_1.j32_1, tmp0_safe_receiver);
            }

            ;
            if ((!this.g3j_1 ? isSecure(this.k3j_1) : false) ? !isSecure(this.n3j_1.j32_1.v2r_1) : false) {
              return this.i3j_1;
            }

            if (!(this.l3j_1 === get_authority_0(this.n3j_1.j32_1))) {
              this.n3j_1.l32_1.t2e(HttpHeaders_getInstance().t2k_1);
            }

            tmp_0.j3j_1 = this.n3j_1;
            this.hi_1 = 2;
            suspendResult = this.d3j_1.m33(this.j3j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i3j_1 = suspendResult;
            if (!isRedirect(this.i3j_1.k31().w34()))
              return this.i3j_1;
            this.hi_1 = 1;
            continue $sm;
          case 3:
            throw this.ki_1;
          case 4:
            return Unit_getInstance();
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
  $handleCallCOROUTINE$7.$metadata$ = classMeta('$handleCallCOROUTINE$7', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_1() {
    this.f3k_1 = true;
    this.g3k_1 = false;
  }
  Config_1.$metadata$ = classMeta('Config');
  function Plugin_1() {
    Plugin_instance_1 = this;
    this.d3k_1 = new AttributeKey('HttpRedirect');
    this.e3k_1 = new EventDefinition();
  }
  Plugin_1.prototype.s = function () {
    return this.d3k_1;
  };
  Plugin_1.prototype.v3g = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_1();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpRedirect(config.f3k_1, config.g3k_1);
  };
  Plugin_1.prototype.o33 = function (block) {
    return this.v3g(block);
  };
  Plugin_1.prototype.h3k = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.z3g(HttpRedirect$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_1.prototype.p33 = function (plugin, scope) {
    return this.h3k(plugin instanceof HttpRedirect ? plugin : THROW_CCE(), scope);
  };
  Plugin_1.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_1;
  function Plugin_getInstance_1() {
    if (Plugin_instance_1 == null)
      new Plugin_1();
    return Plugin_instance_1;
  }
  function HttpRedirect(checkHttpMethod, allowHttpsDowngrade) {
    Plugin_getInstance_1();
    this.b3k_1 = checkHttpMethod;
    this.c3k_1 = allowHttpsDowngrade;
  }
  HttpRedirect.$metadata$ = classMeta('HttpRedirect');
  function isRedirect(_this__u8e3s4) {
    init_properties_HttpRedirect_kt_rcsi6u();
    var tmp0_subject = _this__u8e3s4.j2r_1;
    return ((((tmp0_subject === Companion_getInstance_1().t2p_1.j2r_1 ? true : tmp0_subject === Companion_getInstance_1().u2p_1.j2r_1) ? true : tmp0_subject === Companion_getInstance_1().z2p_1.j2r_1) ? true : tmp0_subject === Companion_getInstance_1().a2q_1.j2r_1) ? true : tmp0_subject === Companion_getInstance_1().v2p_1.j2r_1) ? true : false;
  }
  var properties_initialized_HttpRedirect_kt_klj746;
  function init_properties_HttpRedirect_kt_rcsi6u() {
    if (properties_initialized_HttpRedirect_kt_klj746) {
    } else {
      properties_initialized_HttpRedirect_kt_klj746 = true;
      ALLOWED_FOR_REDIRECT = setOf_0([Companion_getInstance_2().q2o_1, Companion_getInstance_2().v2o_1]);
    }
  }
  function HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation) {
    this.q3k_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpRequestLifecycle$Plugin$install$slambda.prototype.d31 = function ($this$intercept, it, $cont) {
    var tmp = this.e31($this$intercept, it, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpRequestLifecycle$Plugin$install$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 6;
            this.t3k_1 = SupervisorJob(this.r3k_1.e2h_1.n32_1);
            attachToClientEngineJob(this.t3k_1, ensureNotNull(this.q3k_1.i30_1.y3(Key_getInstance())));
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.ii_1 = 4;
            this.ii_1 = 3;
            this.r3k_1.e2h_1.n32_1 = this.t3k_1;
            this.hi_1 = 2;
            suspendResult = this.r3k_1.j2g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_0 = this;
            tmp_0.u3k_1 = Unit_getInstance();
            this.ii_1 = 6;
            this.hi_1 = 5;
            continue $sm;
          case 3:
            this.ii_1 = 4;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof Error) {
              var cause = this.ki_1;
              var tmp_2 = this;
              this.t3k_1.k1i(cause);
              throw cause;
            } else {
              throw this.ki_1;
            }

            break;
          case 4:
            this.ii_1 = 6;
            var t = this.ki_1;
            this.t3k_1.x1i();
            ;
            throw t;
          case 5:
            this.t3k_1.x1i();
            ;
            return Unit_getInstance();
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
  HttpRequestLifecycle$Plugin$install$slambda.prototype.e31 = function ($this$intercept, it, completion) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda(this.q3k_1, completion);
    i.r3k_1 = $this$intercept;
    i.s3k_1 = it;
    return i;
  };
  HttpRequestLifecycle$Plugin$install$slambda.$metadata$ = classMeta('HttpRequestLifecycle$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpRequestLifecycle$Plugin$install$slambda_0($scope, resultContinuation) {
    var i = new HttpRequestLifecycle$Plugin$install$slambda($scope, resultContinuation);
    var l = function ($this$intercept, it, $cont) {
      return i.d31($this$intercept, it, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function Plugin_2() {
    Plugin_instance_2 = this;
    this.v3k_1 = new AttributeKey('RequestLifecycle');
  }
  Plugin_2.prototype.s = function () {
    return this.v3k_1;
  };
  Plugin_2.prototype.q39 = function (block) {
    return new HttpRequestLifecycle();
  };
  Plugin_2.prototype.o33 = function (block) {
    return this.q39(block);
  };
  Plugin_2.prototype.w3k = function (plugin, scope) {
    var tmp = Phases_getInstance().h39_1;
    scope.j30_1.i2h(tmp, HttpRequestLifecycle$Plugin$install$slambda_0(scope, null));
  };
  Plugin_2.prototype.p33 = function (plugin, scope) {
    return this.w3k(plugin instanceof HttpRequestLifecycle ? plugin : THROW_CCE(), scope);
  };
  Plugin_2.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_2;
  function Plugin_getInstance_2() {
    if (Plugin_instance_2 == null)
      new Plugin_2();
    return Plugin_instance_2;
  }
  function HttpRequestLifecycle() {
    Plugin_getInstance_2();
  }
  HttpRequestLifecycle.$metadata$ = classMeta('HttpRequestLifecycle');
  function attachToClientEngineJob(requestJob, clientEngineJob) {
    var handler = clientEngineJob.e1e(attachToClientEngineJob$lambda(requestJob));
    requestJob.e1e(attachToClientEngineJob$lambda_0(handler));
  }
  function attachToClientEngineJob$lambda($requestJob) {
    return function (cause) {
      var tmp;
      if (!(cause == null)) {
        cancel_2($requestJob, 'Engine failed', cause);
        tmp = Unit_getInstance();
      } else {
        $requestJob.x1i();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function attachToClientEngineJob$lambda_0($handler) {
    return function (it) {
      $handler.i1g();
      return Unit_getInstance();
    };
  }
  function HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.f3l_1 = $plugin;
    this.g3l_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpSend$Plugin$install$slambda.prototype.d31 = function ($this$intercept, content, $cont) {
    var tmp = this.e31($this$intercept, content, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpSend$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d31(tmp, isObject(p2) ? p2 : THROW_CCE(), $cont);
  };
  HttpSend$Plugin$install$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            var tmp_0 = this.i3l_1;
            if (!(tmp_0 instanceof OutgoingContent)) {
              var tmp_1 = '\n|Fail to prepare request body for sending. \n|The body type is: ' + getKClassFromExpression(this.i3l_1) + ', with Content-Type: ' + contentType(this.h3l_1.e2h_1) + '.\n|\n|If you expect serialized body, please check that you have installed the corresponding plugin(like `ContentNegotiation`) and set `Content-Type` header.';
              var message = trimMargin$default(tmp_1, null, 1, null);
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var tmp_2 = this;
            tmp_2.j3l_1 = this.h3l_1.e2h_1;
            var tmp_3 = this;
            tmp_3.k3l_1 = this.i3l_1;
            var tmp0_subject = this.k3l_1;
            if (tmp0_subject == null) {
              this.j3l_1.m32_1 = NullBody_getInstance();
              var tmp_4 = JsType_getInstance();
              var tmp_5 = getKClass(OutgoingContent);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
              } catch ($p) {
                var tmp_7;
                if ($p instanceof Error) {
                  tmp_7 = null;
                } else {
                  throw $p;
                }
                tmp_6 = tmp_7;
              }
              this.j3l_1.k38(typeInfoImpl(tmp_4, tmp_5, tmp_6));
            } else {
              if (tmp0_subject instanceof OutgoingContent) {
                this.j3l_1.m32_1 = this.k3l_1;
                this.j3l_1.k38(null);
              } else {
                this.j3l_1.m32_1 = this.k3l_1;
                var tmp_8 = JsType_getInstance();
                var tmp_9 = getKClass(OutgoingContent);
                var tmp_10;
                try {
                  tmp_10 = createKType(getKClass(OutgoingContent), arrayOf([]), false);
                } catch ($p) {
                  var tmp_11;
                  if ($p instanceof Error) {
                    tmp_11 = null;
                  } else {
                    throw $p;
                  }
                  tmp_10 = tmp_11;
                }
                this.j3l_1.k38(typeInfoImpl(tmp_8, tmp_9, tmp_10));
              }
            }

            this.l3l_1 = new DefaultSender(this.f3l_1.x3g_1, this.g3l_1);
            this.m3l_1 = this.l3l_1;
            var tmp_12 = this;
            tmp_12.n3l_1 = downTo(get_lastIndex(this.f3l_1.y3g_1), 0);
            var progression = this.n3l_1;
            var inductionVariable = progression.z_1;
            var last = progression.a1_1;
            var step = progression.b1_1;
            if ((step > 0 ? inductionVariable <= last : false) ? true : step < 0 ? last <= inductionVariable : false)
              do {
                var element = inductionVariable;
                inductionVariable = inductionVariable + step | 0;
                var interceptor = this.f3l_1.y3g_1.h(element);
                this.m3l_1 = new InterceptedSender(interceptor, this.m3l_1);
              }
               while (!(element === last));
            this.hi_1 = 1;
            suspendResult = this.m3l_1.m33(this.h3l_1.e2h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o3l_1 = suspendResult;
            this.hi_1 = 2;
            suspendResult = this.h3l_1.i2g(this.o3l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            ;
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
  HttpSend$Plugin$install$slambda.prototype.e31 = function ($this$intercept, content, completion) {
    var i = new HttpSend$Plugin$install$slambda(this.f3l_1, this.g3l_1, completion);
    i.h3l_1 = $this$intercept;
    i.i3l_1 = content;
    return i;
  };
  HttpSend$Plugin$install$slambda.$metadata$ = classMeta('HttpSend$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpSend$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpSend$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, content, $cont) {
      return i.d31($this$intercept, content, $cont);
    };
    l.$arity = 2;
    return l;
  }
  function $executeCOROUTINE$8(_this__u8e3s4, requestBuilder, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x3l_1 = _this__u8e3s4;
    this.y3l_1 = requestBuilder;
  }
  $executeCOROUTINE$8.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            var tmp0_safe_receiver = this.x3l_1.c3m_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              cancel$default(tmp0_safe_receiver, null, 1, null);
            }

            ;
            if (this.x3l_1.b3m_1 >= this.x3l_1.z3l_1) {
              throw new SendCountExceedException('Max send count ' + this.x3l_1.z3l_1 + ' exceeded. Consider increasing the property ' + 'maxSendCount if more is required.');
            }

            var tmp1_this = this.x3l_1;
            var tmp2 = tmp1_this.b3m_1;
            tmp1_this.b3m_1 = tmp2 + 1 | 0;
            ;
            this.hi_1 = 1;
            suspendResult = this.x3l_1.a3m_1.l30_1.d2h(this.y3l_1, this.y3l_1.m32_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var sendResult = suspendResult;
            var tmp3_elvis_lhs = sendResult instanceof HttpClientCall ? sendResult : null;
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              var tmp0_error = 'Failed to execute send pipeline. Expected [HttpClientCall], but received ' + toString(sendResult);
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var call = tmp_0;
            this.x3l_1.c3m_1 = call;
            return call;
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
  $executeCOROUTINE$8.$metadata$ = classMeta('$executeCOROUTINE$8', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Config_2() {
    this.d3m_1 = 20;
  }
  Config_2.$metadata$ = classMeta('Config');
  function Plugin_3() {
    Plugin_instance_3 = this;
    this.e3m_1 = new AttributeKey('HttpSend');
  }
  Plugin_3.prototype.s = function () {
    return this.e3m_1;
  };
  Plugin_3.prototype.v3g = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Config_2();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    var config = tmp$ret$0;
    return new HttpSend(config.d3m_1);
  };
  Plugin_3.prototype.o33 = function (block) {
    return this.v3g(block);
  };
  Plugin_3.prototype.f3m = function (plugin, scope) {
    var tmp = Phases_getInstance().l39_1;
    scope.j30_1.i2h(tmp, HttpSend$Plugin$install$slambda_0(plugin, scope, null));
  };
  Plugin_3.prototype.p33 = function (plugin, scope) {
    return this.f3m(plugin instanceof HttpSend ? plugin : THROW_CCE(), scope);
  };
  Plugin_3.$metadata$ = objectMeta('Plugin', [HttpClientPlugin]);
  var Plugin_instance_3;
  function Plugin_getInstance_3() {
    if (Plugin_instance_3 == null)
      new Plugin_3();
    return Plugin_instance_3;
  }
  function InterceptedSender(interceptor, nextSender) {
    this.g3m_1 = interceptor;
    this.h3m_1 = nextSender;
  }
  InterceptedSender.prototype.m33 = function (requestBuilder, $cont) {
    return this.g3m_1(this.h3m_1, requestBuilder, $cont);
  };
  InterceptedSender.$metadata$ = classMeta('InterceptedSender', [Sender]);
  function DefaultSender(maxSendCount, client) {
    this.z3l_1 = maxSendCount;
    this.a3m_1 = client;
    this.b3m_1 = 0;
    this.c3m_1 = null;
  }
  DefaultSender.prototype.m33 = function (requestBuilder, $cont) {
    var tmp = new $executeCOROUTINE$8(this, requestBuilder, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  DefaultSender.$metadata$ = classMeta('DefaultSender', [Sender]);
  function HttpSend(maxSendCount) {
    Plugin_getInstance_3();
    this.x3g_1 = maxSendCount;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.y3g_1 = tmp$ret$0;
  }
  HttpSend.prototype.z3g = function (block) {
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = tmp0_this.y3g_1;
    tmp0_plusAssign.a(block);
  };
  HttpSend.$metadata$ = classMeta('HttpSend');
  function Sender() {
  }
  Sender.$metadata$ = interfaceMeta('Sender');
  function SendCountExceedException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, SendCountExceedException);
  }
  SendCountExceedException.$metadata$ = classMeta('SendCountExceedException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this) {
    HttpTimeoutCapabilityConfiguration.call($this);
    $this.l3m(requestTimeoutMillis);
    $this.m3m(connectTimeoutMillis);
    $this.n3m(socketTimeoutMillis);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      requestTimeoutMillis = null;
    if (!(($mask0 & 2) === 0))
      connectTimeoutMillis = null;
    if (!(($mask0 & 4) === 0))
      socketTimeoutMillis = null;
    HttpTimeoutCapabilityConfiguration_init_$Init$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $this);
    return $this;
  }
  function HttpTimeoutCapabilityConfiguration_init_$Create$(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker) {
    return HttpTimeoutCapabilityConfiguration_init_$Init$_0(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis, $mask0, $marker, Object.create(HttpTimeoutCapabilityConfiguration.prototype));
  }
  function checkTimeoutValue($this, value) {
    // Inline function 'kotlin.require' call
    var tmp0_require = value == null ? true : value.f1(new Long(0, 0)) > 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.plugins.HttpTimeoutCapabilityConfiguration.checkTimeoutValue.<anonymous>' call
      tmp$ret$0 = 'Only positive timeout values are allowed, for infinite timeout use HttpTimeout.INFINITE_TIMEOUT_MS';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return value;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.o3m_1 = new AttributeKey('TimeoutConfiguration');
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_10() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation) {
    this.x3m_1 = $requestTimeout;
    this.y3m_1 = $request;
    this.z3m_1 = $executionContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda$slambda.prototype.m24 = function ($this$launch, $cont) {
    var tmp = this.n24($this$launch, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.ri = function (p1, $cont) {
    return this.m24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = delay(this.x3m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var cause = HttpRequestTimeoutException_init_$Create$(this.y3m_1);
            cancel_2(this.z3m_1, ensureNotNull(cause.message), cause);
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
  HttpTimeout$Plugin$install$slambda$slambda.prototype.n24 = function ($this$launch, completion) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda(this.x3m_1, this.y3m_1, this.z3m_1, completion);
    i.a3n_1 = $this$launch;
    return i;
  };
  HttpTimeout$Plugin$install$slambda$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda$slambda_0($requestTimeout, $request, $executionContext, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda$slambda($requestTimeout, $request, $executionContext, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.m24($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function HttpTimeout$Plugin$install$slambda$lambda($killer) {
    return function (it) {
      $killer.k1e(null, 1, null);
      return Unit_getInstance();
    };
  }
  function HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation) {
    this.j3n_1 = $plugin;
    this.k3n_1 = $scope;
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpTimeout$Plugin$install$slambda.prototype.q3f = function ($this$intercept, request, $cont) {
    var tmp = this.r3f($this$intercept, request, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpTimeout$Plugin$install$slambda.prototype.l7 = function (p1, p2, $cont) {
    var tmp = (!(p1 == null) ? isInterface(p1, Sender) : false) ? p1 : THROW_CCE();
    return this.q3f(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $cont);
  };
  HttpTimeout$Plugin$install$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.n3n_1 = isWebsocket(this.m3n_1.j32_1.v2r_1);
            var tmp_0;
            if (this.n3n_1) {
              tmp_0 = true;
            } else {
              var tmp_1 = this.m3n_1.m32_1;
              tmp_0 = tmp_1 instanceof ClientUpgradeContent;
            }

            if (tmp_0) {
              this.hi_1 = 3;
              suspendResult = this.l3n_1.m33(this.m3n_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hi_1 = 1;
              continue $sm;
            }

            break;
          case 1:
            this.o3n_1 = this.m3n_1.p3n(Plugin_getInstance_4());
            if (this.o3n_1 == null ? hasNotNullTimeouts(this.j3n_1) : false) {
              var tmp_2 = this;
              tmp_2.o3n_1 = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
              this.m3n_1.q3n(Plugin_getInstance_4(), this.o3n_1);
            }

            var tmp0_safe_receiver = this.o3n_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_elvis_lhs = tmp0_safe_receiver.r3n();
                tmp0_safe_receiver.m3m(tmp0_elvis_lhs == null ? this.j3n_1.t3n_1 : tmp0_elvis_lhs);
                var tmp1_elvis_lhs = tmp0_safe_receiver.v3n();
                tmp0_safe_receiver.n3m(tmp1_elvis_lhs == null ? this.j3n_1.u3n_1 : tmp1_elvis_lhs);
                var tmp2_elvis_lhs = tmp0_safe_receiver.w3n();
                tmp0_safe_receiver.l3m(tmp2_elvis_lhs == null ? this.j3n_1.s3n_1 : tmp2_elvis_lhs);
                var tmp3_elvis_lhs = tmp0_safe_receiver.w3n();
                var requestTimeout = tmp3_elvis_lhs == null ? this.j3n_1.s3n_1 : tmp3_elvis_lhs;
                var tmp_3;
                if (requestTimeout == null) {
                  tmp_3 = true;
                } else {
                  Plugin_getInstance_4();
                  tmp_3 = equals(requestTimeout, new Long(-1, 2147483647));
                }
                if (tmp_3) {
                  tmp$ret$0 = Unit_getInstance();
                  break l$ret$1;
                }
                var executionContext = this.m3n_1.n32_1;
                var killer = launch$default(this.k3n_1, null, null, HttpTimeout$Plugin$install$slambda$slambda_0(requestTimeout, this.m3n_1, executionContext, null), 3, null);
                var tmp_4 = this.m3n_1.n32_1;
                tmp_4.e1e(HttpTimeout$Plugin$install$slambda$lambda(killer));
              }
               while (false);
            }

            ;
            this.hi_1 = 2;
            suspendResult = this.l3n_1.m33(this.m3n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            return suspendResult;
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
  HttpTimeout$Plugin$install$slambda.prototype.r3f = function ($this$intercept, request, completion) {
    var i = new HttpTimeout$Plugin$install$slambda(this.j3n_1, this.k3n_1, completion);
    i.l3n_1 = $this$intercept;
    i.m3n_1 = request;
    return i;
  };
  HttpTimeout$Plugin$install$slambda.$metadata$ = classMeta('HttpTimeout$Plugin$install$slambda', undefined, undefined, undefined, [2], CoroutineImpl.prototype);
  function HttpTimeout$Plugin$install$slambda_0($plugin, $scope, resultContinuation) {
    var i = new HttpTimeout$Plugin$install$slambda($plugin, $scope, resultContinuation);
    var l = function ($this$intercept, request, $cont) {
      return i.q3f($this$intercept, request, $cont);
    };
    l.$arity = 2;
    return l;
  }
  HttpTimeoutCapabilityConfiguration.prototype.l3m = function (value) {
    this.i3m_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.w3n = function () {
    return this.i3m_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.m3m = function (value) {
    this.j3m_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.r3n = function () {
    return this.j3m_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.n3m = function (value) {
    this.k3m_1 = checkTimeoutValue(this, value);
  };
  HttpTimeoutCapabilityConfiguration.prototype.v3n = function () {
    return this.k3m_1;
  };
  HttpTimeoutCapabilityConfiguration.prototype.gs = function () {
    return new HttpTimeout(this.w3n(), this.r3n(), this.v3n());
  };
  HttpTimeoutCapabilityConfiguration.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof HttpTimeoutCapabilityConfiguration)
      other;
    else
      THROW_CCE();
    if (!equals(this.i3m_1, other.i3m_1))
      return false;
    if (!equals(this.j3m_1, other.j3m_1))
      return false;
    if (!equals(this.k3m_1, other.k3m_1))
      return false;
    return true;
  };
  HttpTimeoutCapabilityConfiguration.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.i3m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.j3m_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.k3m_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    return result;
  };
  function HttpTimeoutCapabilityConfiguration() {
    Companion_getInstance_10();
    this.i3m_1 = new Long(0, 0);
    this.j3m_1 = new Long(0, 0);
    this.k3m_1 = new Long(0, 0);
  }
  HttpTimeoutCapabilityConfiguration.$metadata$ = classMeta('HttpTimeoutCapabilityConfiguration');
  function hasNotNullTimeouts($this) {
    return (!($this.s3n_1 == null) ? true : !($this.t3n_1 == null)) ? true : !($this.u3n_1 == null);
  }
  function Plugin_4() {
    Plugin_instance_4 = this;
    this.x3n_1 = new AttributeKey('TimeoutPlugin');
    this.y3n_1 = new Long(-1, 2147483647);
  }
  Plugin_4.prototype.s = function () {
    return this.x3n_1;
  };
  Plugin_4.prototype.z3n = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HttpTimeoutCapabilityConfiguration_init_$Create$(null, null, null, 7, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.gs();
  };
  Plugin_4.prototype.o33 = function (block) {
    return this.z3n(block);
  };
  Plugin_4.prototype.a3o = function (plugin_0, scope) {
    var tmp = plugin(scope, Plugin_getInstance_3());
    tmp.z3g(HttpTimeout$Plugin$install$slambda_0(plugin_0, scope, null));
  };
  Plugin_4.prototype.p33 = function (plugin, scope) {
    return this.a3o(plugin instanceof HttpTimeout ? plugin : THROW_CCE(), scope);
  };
  Plugin_4.$metadata$ = objectMeta('Plugin', [HttpClientPlugin, HttpClientEngineCapability]);
  var Plugin_instance_4;
  function Plugin_getInstance_4() {
    if (Plugin_instance_4 == null)
      new Plugin_4();
    return Plugin_instance_4;
  }
  function HttpTimeout(requestTimeoutMillis, connectTimeoutMillis, socketTimeoutMillis) {
    Plugin_getInstance_4();
    this.s3n_1 = requestTimeoutMillis;
    this.t3n_1 = connectTimeoutMillis;
    this.u3n_1 = socketTimeoutMillis;
  }
  HttpTimeout.$metadata$ = classMeta('HttpTimeout');
  function HttpRequestTimeoutException_init_$Init$(request, $this) {
    var tmp = request.j32_1.k2t();
    var tmp0_safe_receiver = request.p3n(Plugin_getInstance_4());
    HttpRequestTimeoutException.call($this, tmp, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w3n());
    return $this;
  }
  function HttpRequestTimeoutException_init_$Create$(request) {
    var tmp = HttpRequestTimeoutException_init_$Init$(request, Object.create(HttpRequestTimeoutException.prototype));
    captureStack(tmp, HttpRequestTimeoutException_init_$Create$);
    return tmp;
  }
  function HttpRequestTimeoutException(url, timeoutMillis) {
    var tmp0_elvis_lhs = timeoutMillis;
    IOException_init_$Init$('Request timeout has expired [url=' + url + ', request_timeout=' + toString(tmp0_elvis_lhs == null ? 'unknown' : tmp0_elvis_lhs) + ' ms]', this);
    captureStack(this, HttpRequestTimeoutException);
  }
  HttpRequestTimeoutException.$metadata$ = classMeta('HttpRequestTimeoutException', undefined, undefined, undefined, undefined, IOException.prototype);
  function wrapWithContent(_this__u8e3s4, content) {
    return new DelegatedResponse(_this__u8e3s4.r35(), content, _this__u8e3s4);
  }
  function DelegatedResponse(call, content, origin) {
    HttpResponse.call(this);
    this.b3o_1 = call;
    this.c3o_1 = content;
    this.d3o_1 = origin;
    this.e3o_1 = this.d3o_1.d1d();
  }
  DelegatedResponse.prototype.r35 = function () {
    return this.b3o_1;
  };
  DelegatedResponse.prototype.q14 = function () {
    return this.c3o_1;
  };
  DelegatedResponse.prototype.d1d = function () {
    return this.e3o_1;
  };
  DelegatedResponse.prototype.w34 = function () {
    return this.d3o_1.w34();
  };
  DelegatedResponse.prototype.c36 = function () {
    return this.d3o_1.c36();
  };
  DelegatedResponse.prototype.d36 = function () {
    return this.d3o_1.d36();
  };
  DelegatedResponse.prototype.e36 = function () {
    return this.d3o_1.e36();
  };
  DelegatedResponse.prototype.p2o = function () {
    return this.d3o_1.p2o();
  };
  DelegatedResponse.$metadata$ = classMeta('DelegatedResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function WebSocketCapability() {
    WebSocketCapability_instance = this;
  }
  WebSocketCapability.prototype.toString = function () {
    return 'WebSocketCapability';
  };
  WebSocketCapability.$metadata$ = objectMeta('WebSocketCapability', [HttpClientEngineCapability]);
  var WebSocketCapability_instance;
  function WebSocketCapability_getInstance() {
    if (WebSocketCapability_instance == null)
      new WebSocketCapability();
    return WebSocketCapability_instance;
  }
  function WebSocketException(message) {
    IllegalStateException_init_$Init$_0(message, this);
    captureStack(this, WebSocketException);
  }
  WebSocketException.$metadata$ = classMeta('WebSocketException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function ClientUpgradeContent() {
  }
  ClientUpgradeContent.$metadata$ = classMeta('ClientUpgradeContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  function DefaultHttpRequest(call, data) {
    this.f3o_1 = call;
    this.g3o_1 = data.j37_1;
    this.h3o_1 = data.i37_1;
    this.i3o_1 = data.l37_1;
    this.j3o_1 = data.k37_1;
    this.k3o_1 = data.n37_1;
  }
  DefaultHttpRequest.prototype.r35 = function () {
    return this.f3o_1;
  };
  DefaultHttpRequest.prototype.d1d = function () {
    return this.r35().d1d();
  };
  DefaultHttpRequest.prototype.s35 = function () {
    return this.g3o_1;
  };
  DefaultHttpRequest.prototype.v34 = function () {
    return this.h3o_1;
  };
  DefaultHttpRequest.prototype.p2o = function () {
    return this.j3o_1;
  };
  DefaultHttpRequest.prototype.y33 = function () {
    return this.k3o_1;
  };
  DefaultHttpRequest.$metadata$ = classMeta('DefaultHttpRequest', [HttpRequest_0]);
  function HttpRequest_0() {
  }
  HttpRequest_0.$metadata$ = interfaceMeta('HttpRequest', [HttpMessage, CoroutineScope]);
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_11() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function HttpRequestBuilder$setCapability$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    return tmp$ret$0;
  }
  function HttpRequestBuilder() {
    Companion_getInstance_11();
    var tmp = this;
    tmp.j32_1 = URLBuilder_init_$Create$(null, null, 0, null, null, null, null, null, false, 511, null);
    this.k32_1 = Companion_getInstance_2().q2o_1;
    var tmp_0 = this;
    tmp_0.l32_1 = HeadersBuilder_init_$Create$(0, 1, null);
    this.m32_1 = EmptyContent_getInstance();
    var tmp_1 = this;
    tmp_1.n32_1 = SupervisorJob$default(null, 1, null);
    this.o32_1 = Attributes(true);
  }
  HttpRequestBuilder.prototype.p2o = function () {
    return this.l32_1;
  };
  HttpRequestBuilder.prototype.k38 = function (value) {
    if (!(value == null)) {
      this.o32_1.x2c(get_BodyTypeAttributeKey(), value);
    } else {
      this.o32_1.y2c(get_BodyTypeAttributeKey());
    }
  };
  HttpRequestBuilder.prototype.l3o = function () {
    return this.o32_1.v2c(get_BodyTypeAttributeKey());
  };
  HttpRequestBuilder.prototype.gs = function () {
    var tmp = this.j32_1.gs();
    var tmp_0 = this.k32_1;
    var tmp_1 = this.l32_1.gs();
    var tmp_2 = this.m32_1;
    var tmp0_elvis_lhs = tmp_2 instanceof OutgoingContent ? tmp_2 : null;
    var tmp_3;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'No request transformation found: ' + toString(this.m32_1);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp_3 = tmp0_elvis_lhs;
    }
    return new HttpRequestData(tmp, tmp_0, tmp_1, tmp_3, this.n32_1, this.o32_1);
  };
  HttpRequestBuilder.prototype.j38 = function (builder) {
    this.n32_1 = builder.n32_1;
    return this.m3o(builder);
  };
  HttpRequestBuilder.prototype.m3o = function (builder) {
    this.k32_1 = builder.k32_1;
    this.m32_1 = builder.m32_1;
    this.k38(builder.l3o());
    takeFrom_0(this.j32_1, builder.j32_1);
    this.j32_1.c2s_1 = this.j32_1.c2s_1;
    appendAll(this.l32_1, builder.l32_1);
    putAll(this.o32_1, builder.o32_1);
    return this;
  };
  HttpRequestBuilder.prototype.q3n = function (key, capability) {
    var tmp = get_ENGINE_CAPABILITIES_KEY();
    var capabilities = this.o32_1.z2c(tmp, HttpRequestBuilder$setCapability$lambda);
    // Inline function 'kotlin.collections.set' call
    capabilities.b(key, capability);
  };
  HttpRequestBuilder.prototype.p3n = function (key) {
    var tmp0_safe_receiver = this.o32_1.v2c(get_ENGINE_CAPABILITIES_KEY());
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i2(key);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  HttpRequestBuilder.$metadata$ = classMeta('HttpRequestBuilder', [HttpMessageBuilder]);
  function HttpRequestData(url, method, headers, body, executionContext, attributes) {
    this.i37_1 = url;
    this.j37_1 = method;
    this.k37_1 = headers;
    this.l37_1 = body;
    this.m37_1 = executionContext;
    this.n37_1 = attributes;
    var tmp = this;
    var tmp0_safe_receiver = this.n37_1.v2c(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    tmp.o37_1 = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
  }
  HttpRequestData.prototype.toString = function () {
    return 'HttpRequestData(url=' + this.i37_1 + ', method=' + this.j37_1 + ')';
  };
  HttpRequestData.$metadata$ = classMeta('HttpRequestData');
  function HttpResponseData(statusCode, requestTime, headers, version, body, callContext) {
    this.r33_1 = statusCode;
    this.s33_1 = requestTime;
    this.t33_1 = headers;
    this.u33_1 = version;
    this.v33_1 = body;
    this.w33_1 = callContext;
    var tmp = this;
    tmp.x33_1 = GMTDate$default(null, 1, null);
  }
  HttpResponseData.prototype.toString = function () {
    return 'HttpResponseData=(statusCode=' + this.r33_1 + ')';
  };
  HttpResponseData.$metadata$ = classMeta('HttpResponseData');
  function url(_this__u8e3s4, urlString) {
    takeFrom(_this__u8e3s4.j32_1, urlString);
  }
  function isUpgradeRequest(_this__u8e3s4) {
    var tmp = _this__u8e3s4.l37_1;
    return tmp instanceof ClientUpgradeContent;
  }
  function Phases() {
    Phases_instance = this;
    this.h39_1 = new PipelinePhase('Before');
    this.i39_1 = new PipelinePhase('State');
    this.j39_1 = new PipelinePhase('Transform');
    this.k39_1 = new PipelinePhase('Render');
    this.l39_1 = new PipelinePhase('Send');
  }
  Phases.$metadata$ = objectMeta('Phases');
  var Phases_instance;
  function Phases_getInstance() {
    if (Phases_instance == null)
      new Phases();
    return Phases_instance;
  }
  function HttpRequestPipeline(developmentMode) {
    Phases_getInstance();
    Pipeline.call(this, [Phases_getInstance().h39_1, Phases_getInstance().i39_1, Phases_getInstance().j39_1, Phases_getInstance().k39_1, Phases_getInstance().l39_1]);
    this.u3o_1 = developmentMode;
  }
  HttpRequestPipeline.prototype.c2h = function () {
    return this.u3o_1;
  };
  HttpRequestPipeline.$metadata$ = classMeta('HttpRequestPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_0() {
    Phases_instance_0 = this;
    this.z32_1 = new PipelinePhase('Before');
    this.a33_1 = new PipelinePhase('State');
    this.b33_1 = new PipelinePhase('Monitoring');
    this.c33_1 = new PipelinePhase('Engine');
    this.d33_1 = new PipelinePhase('Receive');
  }
  Phases_0.$metadata$ = objectMeta('Phases');
  var Phases_instance_0;
  function Phases_getInstance_0() {
    if (Phases_instance_0 == null)
      new Phases_0();
    return Phases_instance_0;
  }
  function HttpSendPipeline(developmentMode) {
    Phases_getInstance_0();
    Pipeline.call(this, [Phases_getInstance_0().z32_1, Phases_getInstance_0().a33_1, Phases_getInstance_0().b33_1, Phases_getInstance_0().c33_1, Phases_getInstance_0().d33_1]);
    this.c3p_1 = developmentMode;
  }
  HttpSendPipeline.prototype.c2h = function () {
    return this.c3p_1;
  };
  HttpSendPipeline.$metadata$ = classMeta('HttpSendPipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function get_BodyTypeAttributeKey() {
    init_properties_RequestBody_kt_hroiwt();
    return BodyTypeAttributeKey;
  }
  var BodyTypeAttributeKey;
  var properties_initialized_RequestBody_kt_agyv1b;
  function init_properties_RequestBody_kt_hroiwt() {
    if (properties_initialized_RequestBody_kt_agyv1b) {
    } else {
      properties_initialized_RequestBody_kt_agyv1b = true;
      BodyTypeAttributeKey = new AttributeKey('BodyTypeAttributeKey');
    }
  }
  function accept(_this__u8e3s4, contentType) {
    return _this__u8e3s4.p2o().r2e(HttpHeaders_getInstance().k2k_1, contentType.toString());
  }
  function DefaultHttpResponse(call, responseData) {
    HttpResponse.call(this);
    this.d3p_1 = call;
    this.e3p_1 = responseData.w33_1;
    this.f3p_1 = responseData.r33_1;
    this.g3p_1 = responseData.u33_1;
    this.h3p_1 = responseData.s33_1;
    this.i3p_1 = responseData.x33_1;
    var tmp = this;
    var tmp_0 = responseData.v33_1;
    var tmp0_elvis_lhs = isInterface(tmp_0, ByteReadChannel) ? tmp_0 : null;
    tmp.j3p_1 = tmp0_elvis_lhs == null ? Companion_getInstance().j25() : tmp0_elvis_lhs;
    this.k3p_1 = responseData.t33_1;
  }
  DefaultHttpResponse.prototype.r35 = function () {
    return this.d3p_1;
  };
  DefaultHttpResponse.prototype.d1d = function () {
    return this.e3p_1;
  };
  DefaultHttpResponse.prototype.w34 = function () {
    return this.f3p_1;
  };
  DefaultHttpResponse.prototype.c36 = function () {
    return this.g3p_1;
  };
  DefaultHttpResponse.prototype.d36 = function () {
    return this.h3p_1;
  };
  DefaultHttpResponse.prototype.e36 = function () {
    return this.i3p_1;
  };
  DefaultHttpResponse.prototype.q14 = function () {
    return this.j3p_1;
  };
  DefaultHttpResponse.prototype.p2o = function () {
    return this.k3p_1;
  };
  DefaultHttpResponse.$metadata$ = classMeta('DefaultHttpResponse', undefined, undefined, undefined, undefined, HttpResponse.prototype);
  function HttpResponse() {
  }
  HttpResponse.prototype.toString = function () {
    return 'HttpResponse[' + get_request(this).v34() + ', ' + this.w34() + ']';
  };
  HttpResponse.$metadata$ = classMeta('HttpResponse', [HttpMessage, CoroutineScope]);
  function get_request(_this__u8e3s4) {
    return _this__u8e3s4.r35().t34();
  }
  function complete(_this__u8e3s4) {
    var tmp = ensureNotNull(_this__u8e3s4.d1d().y3(Key_getInstance()));
    var job = isInterface(tmp, CompletableJob) ? tmp : THROW_CCE();
    job.x1i();
  }
  function bodyAsText(_this__u8e3s4, fallbackCharset, $cont) {
    var tmp = new $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function bodyAsText$default(_this__u8e3s4, fallbackCharset, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fallbackCharset = Charsets_getInstance().r28_1;
    return bodyAsText(_this__u8e3s4, fallbackCharset, $cont);
  }
  function $bodyAsTextCOROUTINE$12(_this__u8e3s4, fallbackCharset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t3p_1 = _this__u8e3s4;
    this.u3p_1 = fallbackCharset;
  }
  $bodyAsTextCOROUTINE$12.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = charset_0(this.t3p_1);
            tmp_0.v3p_1 = tmp0_elvis_lhs == null ? this.u3p_1 : tmp0_elvis_lhs;
            this.w3p_1 = this.v3p_1.v28();
            this.hi_1 = 1;
            var tmp_1 = this.t3p_1.r35();
            var tmp_2 = JsType_getInstance();
            var tmp_3 = getKClass(Input);
            var tmp_4;
            try {
              tmp_4 = createKType(getKClass(Input), arrayOf([]), false);
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                tmp_5 = null;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }

            suspendResult = tmp_1.u34(typeInfoImpl(tmp_2, tmp_3, tmp_4), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var input = suspendResult instanceof Input ? suspendResult : THROW_CCE();
            return decode$default(this.w3p_1, input, 0, 2, null);
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
  $bodyAsTextCOROUTINE$12.$metadata$ = classMeta('$bodyAsTextCOROUTINE$12', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function Phases_1() {
    Phases_instance_1 = this;
    this.h33_1 = new PipelinePhase('Receive');
    this.i33_1 = new PipelinePhase('Parse');
    this.j33_1 = new PipelinePhase('Transform');
    this.k33_1 = new PipelinePhase('State');
    this.l33_1 = new PipelinePhase('After');
  }
  Phases_1.$metadata$ = objectMeta('Phases');
  var Phases_instance_1;
  function Phases_getInstance_1() {
    if (Phases_instance_1 == null)
      new Phases_1();
    return Phases_instance_1;
  }
  function HttpResponsePipeline(developmentMode) {
    Phases_getInstance_1();
    Pipeline.call(this, [Phases_getInstance_1().h33_1, Phases_getInstance_1().i33_1, Phases_getInstance_1().j33_1, Phases_getInstance_1().k33_1, Phases_getInstance_1().l33_1]);
    this.e3q_1 = developmentMode;
  }
  HttpResponsePipeline.prototype.c2h = function () {
    return this.e3q_1;
  };
  HttpResponsePipeline.$metadata$ = classMeta('HttpResponsePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function Phases_2() {
    Phases_instance_2 = this;
    this.m39_1 = new PipelinePhase('Before');
    this.n39_1 = new PipelinePhase('State');
    this.o39_1 = new PipelinePhase('After');
  }
  Phases_2.$metadata$ = objectMeta('Phases');
  var Phases_instance_2;
  function Phases_getInstance_2() {
    if (Phases_instance_2 == null)
      new Phases_2();
    return Phases_instance_2;
  }
  function HttpReceivePipeline(developmentMode) {
    Phases_getInstance_2();
    Pipeline.call(this, [Phases_getInstance_2().m39_1, Phases_getInstance_2().n39_1, Phases_getInstance_2().o39_1]);
    this.m3q_1 = developmentMode;
  }
  HttpReceivePipeline.prototype.c2h = function () {
    return this.m3q_1;
  };
  HttpReceivePipeline.$metadata$ = classMeta('HttpReceivePipeline', undefined, undefined, undefined, undefined, Pipeline.prototype);
  function HttpResponseContainer(expectedType, response) {
    this.r34_1 = expectedType;
    this.s34_1 = response;
  }
  HttpResponseContainer.prototype.h3 = function () {
    return this.r34_1;
  };
  HttpResponseContainer.prototype.i3 = function () {
    return this.s34_1;
  };
  HttpResponseContainer.prototype.toString = function () {
    return 'HttpResponseContainer(expectedType=' + this.r34_1 + ', response=' + toString(this.s34_1) + ')';
  };
  HttpResponseContainer.prototype.hashCode = function () {
    var result = this.r34_1.hashCode();
    result = imul(result, 31) + hashCode(this.s34_1) | 0;
    return result;
  };
  HttpResponseContainer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof HttpResponseContainer))
      return false;
    var tmp0_other_with_cast = other instanceof HttpResponseContainer ? other : THROW_CCE();
    if (!this.r34_1.equals(tmp0_other_with_cast.r34_1))
      return false;
    if (!equals(this.s34_1, tmp0_other_with_cast.s34_1))
      return false;
    return true;
  };
  HttpResponseContainer.$metadata$ = classMeta('HttpResponseContainer');
  function checkCapabilities($this) {
    var tmp0_safe_receiver = $this.n3q_1.o32_1.v2c(get_ENGINE_CAPABILITIES_KEY());
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j2();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.filterIsInstance' call
      var tmp$ret$0;
      // Inline function 'kotlin.collections.filterIsInstanceTo' call
      var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
      var tmp0_iterator = tmp1_safe_receiver.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        if (!(element == null) ? isInterface(element, HttpClientPlugin) : false) {
          tmp0_filterIsInstanceTo.a(element);
        }
      }
      tmp$ret$0 = tmp0_filterIsInstanceTo;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp2_safe_receiver = tmp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = tmp2_safe_receiver.d();
      while (tmp0_iterator_0.e()) {
        var element_0 = tmp0_iterator_0.f();
        // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>' call
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp0_requireNotNull = pluginOrNull($this.o3q_1, element_0);
          // Inline function 'kotlin.contracts.contract' call
          if (tmp0_requireNotNull == null) {
            var tmp$ret$2;
            // Inline function 'io.ktor.client.statement.HttpStatement.checkCapabilities.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'Consider installing ' + element_0 + ' plugin because the request requires it to be installed';
            var message = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            tmp$ret$3 = tmp0_requireNotNull;
            break $l$block;
          }
        }
      }
    }
  }
  function HttpStatement$execute$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  HttpStatement$execute$slambda.prototype.y3q = function (it, $cont) {
    var tmp = this.q3b(it, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpStatement$execute$slambda.prototype.ri = function (p1, $cont) {
    return this.y3q(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $cont);
  };
  HttpStatement$execute$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = save(this.x3q_1.r35(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var savedCall = suspendResult;
            return savedCall.k31();
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
  HttpStatement$execute$slambda.prototype.q3b = function (it, completion) {
    var i = new HttpStatement$execute$slambda(completion);
    i.x3q_1 = it;
    return i;
  };
  HttpStatement$execute$slambda.$metadata$ = classMeta('HttpStatement$execute$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function HttpStatement$execute$slambda_0(resultContinuation) {
    var i = new HttpStatement$execute$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.y3q(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function $executeCOROUTINE$13(_this__u8e3s4, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h3r_1 = _this__u8e3s4;
    this.i3r_1 = block;
  }
  $executeCOROUTINE$13.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 13;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.ii_1 = 12;
            this.hi_1 = 2;
            suspendResult = this.h3r_1.o3r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k3r_1 = suspendResult;
            this.hi_1 = 3;
            continue $sm;
          case 3:
            this.hi_1 = 4;
            continue $sm;
          case 4:
            this.ii_1 = 10;
            this.hi_1 = 5;
            suspendResult = this.i3r_1(this.k3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.l3r_1 = suspendResult;
            this.hi_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            this.m3r_1 = this.l3r_1;
            this.hi_1 = 7;
            suspendResult = this.h3r_1.p3r(this.k3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            return this.m3r_1;
          case 8:
            this.hi_1 = 9;
            suspendResult = this.h3r_1.p3r(this.k3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            var tmp_1 = this;
            tmp_1.j3r_1 = Unit_getInstance();
            this.ii_1 = 13;
            this.hi_1 = 15;
            continue $sm;
          case 10:
            this.ii_1 = 12;
            this.n3r_1 = this.ki_1;
            this.hi_1 = 11;
            suspendResult = this.h3r_1.p3r(this.k3r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            throw this.n3r_1;
          case 12:
            this.ii_1 = 13;
            var tmp_2 = this.ki_1;
            if (tmp_2 instanceof CancellationException) {
              var cause = this.ki_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.ki_1;
            }

            break;
          case 13:
            throw this.ki_1;
          case 14:
            this.ii_1 = 13;
            if (false) {
              this.hi_1 = 1;
              continue $sm;
            }

            this.hi_1 = 15;
            continue $sm;
          case 15:
            return this.j3r_1;
        }
      } catch ($p) {
        if (this.ii_1 === 13) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $executeCOROUTINE$13.$metadata$ = classMeta('$executeCOROUTINE$13', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeUnsafeCOROUTINE$14(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3r_1 = _this__u8e3s4;
  }
  $executeUnsafeCOROUTINE$14.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.ii_1 = 3;
            this.a3s_1 = (new HttpRequestBuilder()).j38(this.y3r_1.n3q_1);
            this.hi_1 = 2;
            suspendResult = this.y3r_1.o3q_1.m33(this.a3s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = suspendResult;
            var tmp_0 = this;
            return call.k31();
          case 3:
            this.ii_1 = 4;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof CancellationException) {
              var cause = this.ki_1;
              throw unwrapCancellationException(cause);
            } else {
              throw this.ki_1;
            }

            break;
          case 4:
            throw this.ki_1;
          case 5:
            this.ii_1 = 4;
            if (false) {
              this.hi_1 = 1;
              continue $sm;
            }

            this.hi_1 = 6;
            continue $sm;
          case 6:
            return this.z3r_1;
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
  $executeUnsafeCOROUTINE$14.$metadata$ = classMeta('$executeUnsafeCOROUTINE$14', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $cleanupCOROUTINE$15(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j3s_1 = _this__u8e3s4;
    this.k3s_1 = _this__u8e3s4_0;
  }
  $cleanupCOROUTINE$15.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            var tmp_0 = this;
            var tmp_1 = ensureNotNull(this.k3s_1.d1d().y3(Key_getInstance()));
            tmp_0.l3s_1 = isInterface(tmp_1, CompletableJob) ? tmp_1 : THROW_CCE();
            this.l3s_1.x1i();
            ;
            this.ii_1 = 1;
            cancel_1(this.k3s_1.q14());
            ;
            this.ii_1 = 4;
            this.hi_1 = 2;
            continue $sm;
          case 1:
            this.ii_1 = 4;
            var tmp_2 = this.ki_1;
            if (tmp_2 instanceof Error) {
              this.m3s_1 = this.ki_1;
              this.hi_1 = 2;
              continue $sm;
            } else {
              throw this.ki_1;
            }

            break;
          case 2:
            this.ii_1 = 4;
            this.hi_1 = 3;
            suspendResult = this.l3s_1.y1i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
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
  $cleanupCOROUTINE$15.$metadata$ = classMeta('$cleanupCOROUTINE$15', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function HttpStatement(builder, client) {
    this.n3q_1 = builder;
    this.o3q_1 = client;
    checkCapabilities(this);
  }
  HttpStatement.prototype.n3s = function () {
    return this.o3q_1;
  };
  HttpStatement.prototype.o3s = function (block, $cont) {
    var tmp = new $executeCOROUTINE$13(this, block, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpStatement.prototype.p3s = function ($cont) {
    return this.o3s(HttpStatement$execute$slambda_0(null), $cont);
  };
  HttpStatement.prototype.o3r = function ($cont) {
    var tmp = new $executeUnsafeCOROUTINE$14(this, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpStatement.prototype.p3r = function (_this__u8e3s4, $cont) {
    var tmp = new $cleanupCOROUTINE$15(this, _this__u8e3s4, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  HttpStatement.prototype.toString = function () {
    return 'HttpStatement[' + this.n3q_1.j32_1.k2t() + ']';
  };
  HttpStatement.$metadata$ = classMeta('HttpStatement');
  function observable(_this__u8e3s4, context, contentLength, listener) {
    var tmp = GlobalScope_getInstance();
    return writer(tmp, context, true, observable$slambda_0(contentLength, _this__u8e3s4, listener, null)).c1p();
  }
  function observable$slambda($contentLength, $this_observable, $listener, resultContinuation) {
    this.y3s_1 = $contentLength;
    this.z3s_1 = $this_observable;
    this.a3t_1 = $listener;
    CoroutineImpl.call(this, resultContinuation);
  }
  observable$slambda.prototype.p36 = function ($this$writer, $cont) {
    var tmp = this.q36($this$writer, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  observable$slambda.prototype.ri = function (p1, $cont) {
    return this.p36((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  observable$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 15;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.d3t_1 = get_ByteArrayPool();
            this.e3t_1 = this.d3t_1.s24();
            this.hi_1 = 2;
            continue $sm;
          case 2:
            this.hi_1 = 3;
            continue $sm;
          case 3:
            this.ii_1 = 14;
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.y3s_1;
            tmp_1.g3t_1 = tmp0_elvis_lhs == null ? new Long(-1, -1) : tmp0_elvis_lhs;
            this.h3t_1 = new Long(0, 0);
            this.hi_1 = 4;
            continue $sm;
          case 4:
            if (!!this.z3s_1.h1y()) {
              this.hi_1 = 8;
              continue $sm;
            }

            this.hi_1 = 5;
            suspendResult = readAvailable(this.z3s_1, this.e3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.i3t_1 = suspendResult;
            this.hi_1 = 6;
            suspendResult = this.b3t_1.c1p().k23(this.e3t_1, 0, this.i3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var tmp_2 = this;
            var tmp_3 = this;
            tmp_3.j3t_1 = this.h3t_1;
            tmp_2.h3t_1 = this.j3t_1.a6(toLong(this.i3t_1));
            this.hi_1 = 7;
            suspendResult = this.a3t_1(this.h3t_1, this.g3t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.hi_1 = 4;
            continue $sm;
          case 8:
            this.k3t_1 = this.z3s_1.p1x();
            this.b3t_1.c1p().j1q(this.k3t_1);
            ;
            if (this.k3t_1 == null ? this.h3t_1.equals(new Long(0, 0)) : false) {
              this.hi_1 = 9;
              suspendResult = this.a3t_1(this.h3t_1, this.g3t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hi_1 = 10;
              continue $sm;
            }

            break;
          case 9:
            this.hi_1 = 10;
            continue $sm;
          case 10:
            this.f3t_1 = Unit_getInstance();
            this.ii_1 = 15;
            this.hi_1 = 11;
            var tmp_4 = this;
            continue $sm;
          case 11:
            var tmp_5 = this;
            this.d3t_1.c27(this.e3t_1);
            tmp_5.c3t_1 = Unit_getInstance();
            this.hi_1 = 13;
            continue $sm;
          case 12:
            this.d3t_1.c27(this.e3t_1);
            ;
            if (false) {
              this.hi_1 = 1;
              continue $sm;
            }

            this.hi_1 = 13;
            continue $sm;
          case 13:
            return Unit_getInstance();
          case 14:
            this.ii_1 = 15;
            var t = this.ki_1;
            this.d3t_1.c27(this.e3t_1);
            ;
            throw t;
          case 15:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 15) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  observable$slambda.prototype.q36 = function ($this$writer, completion) {
    var i = new observable$slambda(this.y3s_1, this.z3s_1, this.a3t_1, completion);
    i.b3t_1 = $this$writer;
    return i;
  };
  observable$slambda.$metadata$ = classMeta('observable$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function observable$slambda_0($contentLength, $this_observable, $listener, resultContinuation) {
    var i = new observable$slambda($contentLength, $this_observable, $listener, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p36($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function get_HttpRequestCreated() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestCreated;
  }
  var HttpRequestCreated;
  function get_HttpRequestIsReadyForSending() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpRequestIsReadyForSending;
  }
  var HttpRequestIsReadyForSending;
  function get_HttpResponseReceived() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceived;
  }
  var HttpResponseReceived;
  function get_HttpResponseReceiveFailed() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseReceiveFailed;
  }
  var HttpResponseReceiveFailed;
  function get_HttpResponseCancelled() {
    init_properties_ClientEvents_kt_kkxb6e();
    return HttpResponseCancelled;
  }
  var HttpResponseCancelled;
  function HttpResponseReceiveFail(response, cause) {
    this.l3t_1 = response;
    this.m3t_1 = cause;
  }
  HttpResponseReceiveFail.$metadata$ = classMeta('HttpResponseReceiveFail');
  var properties_initialized_ClientEvents_kt_rdee4m;
  function init_properties_ClientEvents_kt_kkxb6e() {
    if (properties_initialized_ClientEvents_kt_rdee4m) {
    } else {
      properties_initialized_ClientEvents_kt_rdee4m = true;
      HttpRequestCreated = new EventDefinition();
      HttpRequestIsReadyForSending = new EventDefinition();
      HttpResponseReceived = new EventDefinition();
      HttpResponseReceiveFailed = new EventDefinition();
      HttpResponseCancelled = new EventDefinition();
    }
  }
  function EmptyContent() {
    EmptyContent_instance = this;
    NoContent.call(this);
    this.o3t_1 = new Long(0, 0);
  }
  EmptyContent.prototype.w2t = function () {
    return this.o3t_1;
  };
  EmptyContent.prototype.toString = function () {
    return 'EmptyContent';
  };
  EmptyContent.$metadata$ = objectMeta('EmptyContent', undefined, undefined, undefined, undefined, NoContent.prototype);
  var EmptyContent_instance;
  function EmptyContent_getInstance() {
    if (EmptyContent_instance == null)
      new EmptyContent();
    return EmptyContent_instance;
  }
  function buildHeaders(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = HeadersBuilder_init_$Create$(0, 1, null);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0.gs();
  }
  function HttpClient_1(block) {
    return HttpClient_0(JsClient(), block);
  }
  function JsClient() {
    return Js_getInstance();
  }
  function Js() {
    Js_instance = this;
  }
  Js.prototype.p3t = function (block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new HttpClientEngineConfig();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new JsClientEngine(tmp$ret$0);
  };
  Js.prototype.n33 = function (block) {
    return this.p3t(block);
  };
  Js.$metadata$ = objectMeta('Js', [HttpClientEngineFactory]);
  var Js_instance;
  function Js_getInstance() {
    if (Js_instance == null)
      new Js();
    return Js_instance;
  }
  function createWebSocket($this, urlString_capturingHack, headers) {
    var tmp;
    if (PlatformUtils_getInstance().a2i_1) {
      var ws_capturingHack = eval('require')('ws');
      var headers_capturingHack = new JsClientEngine$createWebSocket$headers_capturingHack$1();
      headers.k2e(JsClientEngine$createWebSocket$lambda(headers_capturingHack));
      tmp = new ws_capturingHack(urlString_capturingHack, {headers: headers_capturingHack});
    } else {
      tmp = new WebSocket(urlString_capturingHack);
    }
    return tmp;
  }
  function executeWebSocketRequest($this, request, callContext, $cont) {
    var tmp = new $executeWebSocketRequestCOROUTINE$17($this, request, callContext, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function JsClientEngine$createWebSocket$headers_capturingHack$1() {
  }
  JsClientEngine$createWebSocket$headers_capturingHack$1.$metadata$ = classMeta();
  function JsClientEngine$createWebSocket$lambda($headers_capturingHack) {
    return function (name, values) {
      $headers_capturingHack[name] = joinToString$default(values, ',', null, null, 0, null, null, 62, null);
      return Unit_getInstance();
    };
  }
  function $executeCOROUTINE$16(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m3u_1 = _this__u8e3s4;
    this.n3u_1 = data;
  }
  $executeCOROUTINE$16.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 6;
            this.hi_1 = 1;
            suspendResult = callContext(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o3u_1 = suspendResult;
            this.p3u_1 = this.n3u_1.n37_1.u2c(get_CLIENT_CONFIG());
            if (isUpgradeRequest(this.n3u_1)) {
              this.hi_1 = 5;
              suspendResult = executeWebSocketRequest(this.m3u_1, this.n3u_1, this.o3u_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hi_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var tmp_0 = this;
            tmp_0.q3u_1 = GMTDate$default(null, 1, null);
            this.hi_1 = 3;
            suspendResult = toRaw(this.n3u_1, this.p3u_1, this.o3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r3u_1 = suspendResult;
            this.hi_1 = 4;
            suspendResult = commonFetch(this.n3u_1.i37_1.toString(), this.r3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var rawResponse = suspendResult;
            var status = new HttpStatusCode(rawResponse.status, rawResponse.statusText);
            var headers = mapToKtor(rawResponse.headers);
            var version = Companion_getInstance_3().a2p_1;
            var body = readBody(CoroutineScope_0(this.o3u_1), rawResponse);
            return new HttpResponseData(status, this.q3u_1, headers, version, body, this.o3u_1);
          case 5:
            return suspendResult;
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
  $executeCOROUTINE$16.$metadata$ = classMeta('$executeCOROUTINE$16', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $executeWebSocketRequestCOROUTINE$17(_this__u8e3s4, request, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y3t_1 = _this__u8e3s4;
    this.z3t_1 = request;
    this.a3u_1 = callContext;
  }
  $executeWebSocketRequestCOROUTINE$17.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            var tmp_0 = this;
            tmp_0.b3u_1 = GMTDate$default(null, 1, null);
            this.c3u_1 = this.z3t_1.i37_1.toString();
            this.d3u_1 = createWebSocket(this.y3t_1, this.c3u_1, this.z3t_1.k37_1);
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = awaitConnection(this.d3u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            ;
            this.ii_1 = 4;
            this.hi_1 = 3;
            continue $sm;
          case 2:
            this.ii_1 = 4;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof Error) {
              var cause = this.ki_1;
              cancel_3(this.a3u_1, CancellationException_init_$Create$_0('Failed to connect to ' + this.c3u_1, cause));
              throw cause;
            } else {
              throw this.ki_1;
            }

            break;
          case 3:
            this.ii_1 = 4;
            var session = new JsWebSocketSession(this.a3u_1, this.d3u_1);
            return new HttpResponseData(Companion_getInstance_1().k2p_1, this.b3u_1, Companion_getInstance_4().h2k_1, Companion_getInstance_3().a2p_1, session, this.a3u_1);
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
  $executeWebSocketRequestCOROUTINE$17.$metadata$ = classMeta('$executeWebSocketRequestCOROUTINE$17', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function JsClientEngine(config) {
    HttpClientEngineBase.call(this, 'ktor-js');
    this.v3u_1 = config;
    this.w3u_1 = Dispatchers_getInstance().j1j_1;
    this.x3u_1 = setOf_0([Plugin_getInstance_4(), WebSocketCapability_getInstance()]);
    // Inline function 'kotlin.check' call
    var tmp0_check = this.v3u_1.f39_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.client.engine.js.JsClientEngine.<anonymous>' call
      tmp$ret$0 = 'Proxy unsupported in Js engine.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  JsClientEngine.prototype.x32 = function () {
    return this.v3u_1;
  };
  JsClientEngine.prototype.z38 = function () {
    return this.w3u_1;
  };
  JsClientEngine.prototype.p37 = function () {
    return this.x3u_1;
  };
  JsClientEngine.prototype.x38 = function (data, $cont) {
    var tmp = new $executeCOROUTINE$16(this, data, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  JsClientEngine.$metadata$ = classMeta('JsClientEngine', undefined, undefined, undefined, undefined, HttpClientEngineBase.prototype);
  function mapToKtor(_this__u8e3s4) {
    return buildHeaders(mapToKtor$lambda(_this__u8e3s4));
  }
  function awaitConnection(_this__u8e3s4, $cont) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.o1h();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.client.engine.js.awaitConnection.<anonymous>' call
      if (cancellable.x1f()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var eventListener = awaitConnection$lambda(cancellable, _this__u8e3s4);
      _this__u8e3s4.addEventListener('open', eventListener);
      _this__u8e3s4.addEventListener('error', eventListener);
      cancellable.d1g(awaitConnection$lambda_0(_this__u8e3s4, eventListener));
    }
    tmp$ret$1 = cancellable.x1h();
    return tmp$ret$1;
  }
  function asString(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.client.engine.js.asString.<anonymous>' call
    var tmp = JSON;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['message', 'target', 'type', 'isTrusted'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp0_apply.x6(tmp.stringify(_this__u8e3s4, tmp$ret$2));
    tmp$ret$3 = tmp0_apply;
    tmp$ret$4 = tmp$ret$3.toString();
    return tmp$ret$4;
  }
  function JsError(origin) {
    extendThrowable(this, 'Error from javascript[' + origin + '].', void 1);
    this.y3u_1 = origin;
    captureStack(this, JsError);
  }
  JsError.$metadata$ = classMeta('JsError', undefined, undefined, undefined, undefined, Error.prototype);
  function mapToKtor$lambda$lambda($this_buildHeaders) {
    return function (value, key) {
      $this_buildHeaders.r2e(key, value);
      return Unit_getInstance();
    };
  }
  function mapToKtor$lambda($this_mapToKtor) {
    return function ($this$buildHeaders) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = $this_mapToKtor;
      tmp$ret$0.forEach(mapToKtor$lambda$lambda($this$buildHeaders));
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda($cancellable, $this_awaitConnection) {
    return function (event) {
      var tmp0_subject = event.type;
      var tmp;
      if (tmp0_subject === 'open') {
        var tmp$ret$1;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_5();
        tmp$ret$0 = _Result___init__impl__xyqfz8($this_awaitConnection);
        $cancellable.v3(tmp$ret$0);
        tmp$ret$1 = Unit_getInstance();
        tmp = tmp$ret$1;
      } else if (tmp0_subject === 'error') {
        var tmp$ret$3;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp0_resumeWithException = new WebSocketException(asString(event));
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_5();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
        $cancellable.v3(tmp$ret$2);
        tmp$ret$3 = Unit_getInstance();
        tmp = tmp$ret$3;
      }
      return Unit_getInstance();
    };
  }
  function awaitConnection$lambda_0($this_awaitConnection, $eventListener) {
    return function (it) {
      $this_awaitConnection.removeEventListener('open', $eventListener);
      $this_awaitConnection.removeEventListener('error', $eventListener);
      var tmp;
      if (!(it == null)) {
        $this_awaitConnection.close();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function toRaw(_this__u8e3s4, clientConfig, callContext, $cont) {
    var tmp = new $toRawCOROUTINE$18(_this__u8e3s4, clientConfig, callContext, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function buildObject(block) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp = {};
    var tmp0_apply = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function toRaw$lambda($jsHeaders) {
    return function (key, value) {
      $jsHeaders[key] = value;
      return Unit_getInstance();
    };
  }
  function toRaw$slambda($content, resultContinuation) {
    this.v3v_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  toRaw$slambda.prototype.p36 = function ($this$writer, $cont) {
    var tmp = this.q36($this$writer, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  toRaw$slambda.prototype.ri = function (p1, $cont) {
    return this.p36((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toRaw$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.v3v_1.c2u(this.w3v_1.c1p(), this);
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
  toRaw$slambda.prototype.q36 = function ($this$writer, completion) {
    var i = new toRaw$slambda(this.v3v_1, completion);
    i.w3v_1 = $this$writer;
    return i;
  };
  toRaw$slambda.$metadata$ = classMeta('toRaw$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toRaw$slambda_0($content, resultContinuation) {
    var i = new toRaw$slambda($content, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p36($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toRaw$lambda_0($this_toRaw, $jsHeaders, $clientConfig, $bodyBytes) {
    return function ($this$buildObject) {
      $this$buildObject.method = $this_toRaw.j37_1.y2o_1;
      $this$buildObject.headers = $jsHeaders;
      var tmp;
      if ($clientConfig.t32_1) {
        var tmp$ret$2;
        // Inline function 'org.w3c.fetch.FOLLOW' call
        var tmp0__get_FOLLOW__lsxog0 = null;
        var tmp$ret$1;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = 'follow';
        var tmp0_unsafeCast = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        var tmp$ret$5;
        // Inline function 'org.w3c.fetch.MANUAL' call
        var tmp1__get_MANUAL__wgvzkm = null;
        var tmp$ret$4;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$3 = 'manual';
        var tmp0_unsafeCast_0 = tmp$ret$3;
        tmp$ret$4 = tmp0_unsafeCast_0;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      }
      $this$buildObject.redirect = tmp;
      var tmp0_safe_receiver = $bodyBytes;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this$buildObject.body = new Uint8Array(toTypedArray(tmp0_safe_receiver));
        tmp$ret$6 = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function $toRawCOROUTINE$18(_this__u8e3s4, clientConfig, callContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h3v_1 = _this__u8e3s4;
    this.i3v_1 = clientConfig;
    this.j3v_1 = callContext;
  }
  $toRawCOROUTINE$18.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.k3v_1 = {};
            mergeHeaders(this.h3v_1.k37_1, this.h3v_1.l37_1, toRaw$lambda(this.k3v_1));
            this.l3v_1 = this.h3v_1.l37_1;
            var tmp_0 = this.l3v_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.m3v_1 = this.l3v_1.x2t();
              this.hi_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this.l3v_1;
              if (tmp_1 instanceof ReadChannelContent) {
                this.hi_1 = 2;
                var tmp_2 = this.l3v_1.a2u();
                suspendResult = tmp_2.m23(new Long(0, 0), this, 1, null);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_3 = this.l3v_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  this.hi_1 = 1;
                  var tmp_4 = GlobalScope_getInstance();
                  var tmp_5 = writer$default(tmp_4, this.j3v_1, false, toRaw$slambda_0(this.l3v_1, null), 2, null).c1p();
                  suspendResult = tmp_5.m23(new Long(0, 0), this, 1, null);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.m3v_1 = null;
                  this.hi_1 = 3;
                  continue $sm;
                }
              }
            }

            break;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp_6 = this;
            tmp_6.m3v_1 = readBytes$default(ARGUMENT, 0, 1, null);
            this.hi_1 = 3;
            continue $sm;
          case 2:
            var ARGUMENT_0 = suspendResult;
            var tmp_7 = this;
            tmp_7.m3v_1 = readBytes$default(ARGUMENT_0, 0, 1, null);
            this.hi_1 = 3;
            continue $sm;
          case 3:
            var bodyBytes = this.m3v_1;
            return buildObject(toRaw$lambda_0(this.h3v_1, this.k3v_1, this.i3v_1, bodyBytes));
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
  $toRawCOROUTINE$18.$metadata$ = classMeta('$toRawCOROUTINE$18', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function asByteArray(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = new Int8Array(_this__u8e3s4.buffer, _this__u8e3s4.byteOffset, _this__u8e3s4.length);
    tmp$ret$0 = tmp0_asDynamic;
    return tmp$ret$0;
  }
  function readBodyBrowser(_this__u8e3s4, response) {
    var tmp0_elvis_lhs = response.body;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance().j25();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stream = tmp;
    return channelFromStream(_this__u8e3s4, stream);
  }
  function channelFromStream(_this__u8e3s4, stream) {
    return writer$default(_this__u8e3s4, null, false, channelFromStream$slambda_0(stream, null), 3, null).c1p();
  }
  function readChunk(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.o1h();
    // Inline function 'io.ktor.client.engine.js.browser.readChunk.<anonymous>' call
    var tmp = _this__u8e3s4.read();
    var tmp_0 = tmp.then(readChunk$lambda(cancellable));
    tmp_0.catch(readChunk$lambda_0(cancellable));
    tmp$ret$0 = cancellable.x1h();
    return tmp$ret$0;
  }
  function channelFromStream$slambda($stream, resultContinuation) {
    this.f3w_1 = $stream;
    CoroutineImpl.call(this, resultContinuation);
  }
  channelFromStream$slambda.prototype.p36 = function ($this$writer, $cont) {
    var tmp = this.q36($this$writer, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  channelFromStream$slambda.prototype.ri = function (p1, $cont) {
    return this.p36((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  channelFromStream$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 6;
            this.h3w_1 = this.f3w_1.getReader();
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.hi_1 = 8;
              continue $sm;
            }

            this.ii_1 = 5;
            this.hi_1 = 2;
            suspendResult = readChunk(this.h3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i3w_1 = suspendResult;
            if (this.i3w_1 == null) {
              this.ii_1 = 6;
              this.hi_1 = 8;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.j3w_1 = this.i3w_1;
              this.hi_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.k3w_1 = this.j3w_1;
            this.hi_1 = 4;
            suspendResult = writeFully(this.g3w_1.c1p(), asByteArray(this.k3w_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.ii_1 = 6;
            this.hi_1 = 7;
            continue $sm;
          case 5:
            this.ii_1 = 6;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof Error) {
              var cause = this.ki_1;
              this.h3w_1.cancel(cause);
              throw cause;
            } else {
              throw this.ki_1;
            }

            break;
          case 6:
            throw this.ki_1;
          case 7:
            this.ii_1 = 6;
            this.hi_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
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
  channelFromStream$slambda.prototype.q36 = function ($this$writer, completion) {
    var i = new channelFromStream$slambda(this.f3w_1, completion);
    i.g3w_1 = $this$writer;
    return i;
  };
  channelFromStream$slambda.$metadata$ = classMeta('channelFromStream$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function channelFromStream$slambda_0($stream, resultContinuation) {
    var i = new channelFromStream$slambda($stream, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p36($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function readChunk$lambda($cancellable) {
    return function (it) {
      var chunk = it.value;
      var result = (it.done ? true : chunk == null) ? null : chunk;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(result);
      $cancellable.v3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readChunk$lambda_0($cancellable) {
    return function (cause) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      $cancellable.v3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function commonFetch(input, init, $cont) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.o1h();
    // Inline function 'io.ktor.client.engine.js.compatibility.commonFetch.<anonymous>' call
    var controller = AbortController_0();
    init.signal = controller.signal;
    cancellable.d1g(commonFetch$lambda(controller));
    var tmp;
    if (PlatformUtils_getInstance().z2h_1) {
      tmp = fetch(input, init);
    } else {
      tmp = jsRequireNodeFetch()(input, init);
    }
    var promise = tmp;
    var tmp_0 = commonFetch$lambda_0(cancellable);
    promise.then(tmp_0, commonFetch$lambda_1(cancellable));
    tmp$ret$0 = cancellable.x1h();
    return tmp$ret$0;
  }
  function readBody(_this__u8e3s4, response) {
    var tmp;
    if (PlatformUtils_getInstance().z2h_1) {
      tmp = readBodyBrowser(_this__u8e3s4, response);
    } else {
      tmp = readBodyNode(_this__u8e3s4, response);
    }
    return tmp;
  }
  function AbortController_0() {
    var tmp;
    if (PlatformUtils_getInstance().z2h_1) {
      tmp = new AbortController();
    } else {
      var controller = eval('require')('abort-controller');
      tmp = new controller();
    }
    return tmp;
  }
  function jsRequireNodeFetch() {
    var tmp;
    try {
      tmp = eval('require')('node-fetch');
    } catch ($p) {
      var tmp_0;
      {
        throw Error_init_$Create$("Error loading module 'node-fetch': " + $p);
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function commonFetch$lambda($controller) {
    return function (it) {
      $controller.abort();
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_5();
      tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      $cancellable.v3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function commonFetch$lambda_1($cancellable) {
    return function (it) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_5();
      var tmp1_failure = Error_init_$Create$_0('Fail to fetch', it);
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
      $cancellable.v3(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function readBodyNode(_this__u8e3s4, response) {
    return writer$default(_this__u8e3s4, null, false, readBodyNode$slambda_0(response, null), 3, null).c1p();
  }
  function readBodyNode$slambda$lambda($responseData, $body) {
    return function (chunk) {
      _ChannelResult___get_isSuccess__impl__odq1z9($responseData.r1q(asByteArray(new Uint8Array(chunk))));
      return $body.pause();
    };
  }
  function readBodyNode$slambda$lambda_0($responseData, $this_writer) {
    return function (error) {
      var cause = new JsError(error);
      $responseData.j1q(cause);
      return $this_writer.c1p().j1q(cause);
    };
  }
  function readBodyNode$slambda$lambda_1($responseData) {
    return function () {
      return $responseData.s1q(null, 1, null);
    };
  }
  function readBodyNode$slambda($response, resultContinuation) {
    this.t3w_1 = $response;
    CoroutineImpl.call(this, resultContinuation);
  }
  readBodyNode$slambda.prototype.p36 = function ($this$writer, $cont) {
    var tmp = this.q36($this$writer, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  readBodyNode$slambda.prototype.ri = function (p1, $cont) {
    return this.p36((!(p1 == null) ? isInterface(p1, WriterScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  readBodyNode$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 6;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.t3w_1.body;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Fail to get body');
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.v3w_1 = tmp_1;
            var tmp_2 = this;
            tmp_2.w3w_1 = Channel$default(1, null, null, 6, null);
            this.v3w_1.on('data', readBodyNode$slambda$lambda(this.w3w_1, this.v3w_1));
            this.v3w_1.on('error', readBodyNode$slambda$lambda_0(this.w3w_1, this.u3w_1));
            this.v3w_1.on('end', readBodyNode$slambda$lambda_1(this.w3w_1));
            this.ii_1 = 5;
            this.x3w_1 = this.w3w_1.d();
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.hi_1 = 2;
            suspendResult = this.x3w_1.e1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (!suspendResult) {
              this.hi_1 = 4;
              continue $sm;
            }

            this.y3w_1 = this.x3w_1.f();
            this.hi_1 = 3;
            suspendResult = writeFully(this.u3w_1.c1p(), this.y3w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.v3w_1.resume();
            this.hi_1 = 1;
            continue $sm;
          case 4:
            this.ii_1 = 6;
            this.hi_1 = 7;
            continue $sm;
          case 5:
            this.ii_1 = 6;
            var tmp_3 = this.ki_1;
            if (tmp_3 instanceof Error) {
              var cause = this.ki_1;
              this.v3w_1.destroy(cause);
              throw cause;
            } else {
              throw this.ki_1;
            }

            break;
          case 6:
            throw this.ki_1;
          case 7:
            this.ii_1 = 6;
            ;
            return Unit_getInstance();
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
  readBodyNode$slambda.prototype.q36 = function ($this$writer, completion) {
    var i = new readBodyNode$slambda(this.t3w_1, completion);
    i.u3w_1 = $this$writer;
    return i;
  };
  readBodyNode$slambda.$metadata$ = classMeta('readBodyNode$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function readBodyNode$slambda_0($response, resultContinuation) {
    var i = new readBodyNode$slambda($response, resultContinuation);
    var l = function ($this$writer, $cont) {
      return i.p36($this$writer, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function platformRequestDefaultTransform(contentType, context, body) {
    return null;
  }
  function platformResponseDefaultTransformers(_this__u8e3s4) {
  }
  function isReservedStatusCode(_this__u8e3s4, $this) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_6().o2u(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.client.plugins.websocket.JsWebSocketSession.isReservedStatusCode.<anonymous>' call
    tmp$ret$0 = tmp0_let == null ? true : equals(tmp0_let, Codes_CLOSED_ABNORMALLY_getInstance());
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  }
  function JsWebSocketSession$lambda(this$0) {
    return function (it) {
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = it;
      tmp$ret$1 = tmp$ret$0;
      var event = tmp$ret$1;
      var data = event.data;
      var tmp;
      if (data instanceof ArrayBuffer) {
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = new Int8Array(data);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp = Binary_init_$Create$(false, tmp$ret$3);
      } else {
        if (!(data == null) ? typeof data === 'string' : false) {
          tmp = Text_init_$Create$(data);
        } else {
          var error = IllegalStateException_init_$Create$('Unknown frame type: ' + event.type);
          this$0.b3x_1.k1i(error);
          throw error;
        }
      }
      var frame = tmp;
      this$0.c3x_1.r1q(frame);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_0(this$0) {
    return function (it) {
      var cause = new WebSocketException('' + it);
      this$0.b3x_1.k1i(cause);
      this$0.c3x_1.j1q(cause);
      this$0.d3x_1.k1e(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$lambda_1(this$0) {
    return function (event) {
      var tmp = event.code;
      var tmp_0 = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
      var tmp_1 = event.reason;
      var reason = new CloseReason(tmp_0, (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      this$0.b3x_1.j1i(reason);
      this$0.c3x_1.r1q(Close_init_$Create$(reason));
      this$0.c3x_1.s1q(null, 1, null);
      this$0.d3x_1.k1e(null, 1, null);
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession$slambda(this$0, resultContinuation) {
    this.p3x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  JsWebSocketSession$slambda.prototype.m24 = function ($this$launch, $cont) {
    var tmp = this.n24($this$launch, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  JsWebSocketSession$slambda.prototype.ri = function (p1, $cont) {
    return this.m24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  JsWebSocketSession$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 10;
            var tmp_0 = this;
            tmp_0.r3x_1 = this.p3x_1.d3x_1;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.t3x_1 = null;
            this.hi_1 = 2;
            continue $sm;
          case 2:
            this.hi_1 = 3;
            continue $sm;
          case 3:
            this.ii_1 = 9;
            this.ii_1 = 8;
            this.v3x_1 = this.r3x_1.d();
            this.hi_1 = 4;
            continue $sm;
          case 4:
            this.hi_1 = 5;
            suspendResult = this.v3x_1.e1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            if (!suspendResult) {
              this.hi_1 = 6;
              continue $sm;
            }

            var e = this.v3x_1.f();
            var tmp0_subject = e.c2v_1;
            var tmp0 = tmp0_subject.l4_1;
            switch (tmp0) {
              case 0:
                var text = e.d2v_1;
                this.p3x_1.a3x_1.send(String$default(text, 0, 0, null, 14, null));
                ;
                break;
              case 1:
                var tmp_1 = e.d2v_1;
                var source = tmp_1 instanceof Int8Array ? tmp_1 : THROW_CCE();
                var frameData = source.buffer.slice(source.byteOffset, source.byteOffset + source.byteLength | 0);
                this.p3x_1.a3x_1.send(frameData);
                ;
                break;
              case 2:
                var tmp$ret$0;
                l$ret$1: do {
                  var builder = BytePacketBuilder_init_$Create$(null, 1, null);
                  try {
                    writeFully$default(builder, e.d2v_1, 0, 0, 6, null);
                    tmp$ret$0 = builder.gs();
                    break l$ret$1;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      builder.t12();
                      throw $p;
                    } else {
                      throw $p;
                    }
                  }
                }
                 while (false);
                var data = tmp$ret$0;
                var code = readShort(data);
                var reason = data.i28(0, 0, 3, null);
                this.p3x_1.b3x_1.j1i(new CloseReason(code, reason));
                ;
                if (isReservedStatusCode(code, this.p3x_1)) {
                  this.p3x_1.a3x_1.close();
                } else {
                  this.p3x_1.a3x_1.close(code, reason);
                }

                break;
              case 3:
              case 4:
                break;
            }

            this.hi_1 = 4;
            continue $sm;
          case 6:
            this.u3x_1 = Unit_getInstance();
            this.ii_1 = 10;
            this.hi_1 = 7;
            var tmp_2 = this;
            continue $sm;
          case 7:
            var tmp_3 = this;
            cancelConsumed(this.r3x_1, this.t3x_1);
            tmp_3.s3x_1 = Unit_getInstance();
            this.hi_1 = 12;
            continue $sm;
          case 8:
            this.ii_1 = 9;
            var tmp_4 = this.ki_1;
            if (tmp_4 instanceof Error) {
              var e_0 = this.ki_1;
              var tmp_5 = this;
              this.t3x_1 = e_0;
              throw e_0;
            } else {
              throw this.ki_1;
            }

            break;
          case 9:
            this.ii_1 = 10;
            var t = this.ki_1;
            cancelConsumed(this.r3x_1, this.t3x_1);
            ;
            throw t;
          case 10:
            throw this.ki_1;
          case 11:
            cancelConsumed(this.r3x_1, this.t3x_1);
            ;
            if (false) {
              this.hi_1 = 1;
              continue $sm;
            }

            this.hi_1 = 12;
            continue $sm;
          case 12:
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.ii_1 === 10) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  JsWebSocketSession$slambda.prototype.n24 = function ($this$launch, completion) {
    var i = new JsWebSocketSession$slambda(this.p3x_1, completion);
    i.q3x_1 = $this$launch;
    return i;
  };
  JsWebSocketSession$slambda.$metadata$ = classMeta('JsWebSocketSession$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function JsWebSocketSession$slambda_0(this$0, resultContinuation) {
    var i = new JsWebSocketSession$slambda(this$0, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.m24($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function JsWebSocketSession$lambda_2(this$0) {
    return function (cause) {
      var tmp;
      if (cause == null) {
        this$0.a3x_1.close();
        tmp = Unit_getInstance();
      } else {
        this$0.a3x_1.close(Codes_INTERNAL_ERROR_getInstance().l2u_1, 'Client failed');
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function JsWebSocketSession(coroutineContext, websocket) {
    this.z3w_1 = coroutineContext;
    this.a3x_1 = websocket;
    var tmp = this;
    tmp.b3x_1 = CompletableDeferred$default(null, 1, null);
    var tmp_0 = this;
    Factory_getInstance();
    tmp_0.c3x_1 = Channel$default(2147483647, null, null, 6, null);
    var tmp_1 = this;
    Factory_getInstance();
    tmp_1.d3x_1 = Channel$default(2147483647, null, null, 6, null);
    this.e3x_1 = this.c3x_1;
    this.f3x_1 = this.d3x_1;
    this.g3x_1 = this.b3x_1;
    var tmp$ret$2;
    // Inline function 'org.w3c.dom.ARRAYBUFFER' call
    var tmp0__get_ARRAYBUFFER__ua4cvm = null;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = 'arraybuffer';
    var tmp0_unsafeCast = tmp$ret$0;
    tmp$ret$1 = tmp0_unsafeCast;
    tmp$ret$2 = tmp$ret$1;
    this.a3x_1.binaryType = tmp$ret$2;
    this.a3x_1.addEventListener('message', JsWebSocketSession$lambda(this));
    this.a3x_1.addEventListener('error', JsWebSocketSession$lambda_0(this));
    this.a3x_1.addEventListener('close', JsWebSocketSession$lambda_1(this));
    launch$default(this, null, null, JsWebSocketSession$slambda_0(this, null), 3, null);
    var tmp0_safe_receiver = this.z3w_1.y3(Key_getInstance());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.e1e(JsWebSocketSession$lambda_2(this));
    }
  }
  JsWebSocketSession.prototype.d1d = function () {
    return this.z3w_1;
  };
  JsWebSocketSession.$metadata$ = classMeta('JsWebSocketSession', [DefaultWebSocketSession]);
  function unwrapCancellationException(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  //region block: post-declaration
  HttpClientEngineBase.prototype.p37 = get_supportedCapabilities;
  HttpClientEngineBase.prototype.y32 = install;
  KtorCallContextElement.prototype.y3 = get;
  KtorCallContextElement.prototype.e4 = fold;
  KtorCallContextElement.prototype.d4 = minusKey;
  KtorCallContextElement.prototype.f4 = plus;
  HttpRequest$1.prototype.d1d = get_coroutineContext;
  JsClientEngine.prototype.y32 = install;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Phases_getInstance;
  _.$_$.b = Phases_getInstance_1;
  _.$_$.c = EmptyContent_getInstance;
  _.$_$.d = HttpClientPlugin;
  _.$_$.e = HttpRequestBuilder;
  _.$_$.f = accept;
  _.$_$.g = url;
  _.$_$.h = HttpResponseContainer;
  _.$_$.i = HttpStatement;
  _.$_$.j = HttpClient_1;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-core-js-ir.js.map
