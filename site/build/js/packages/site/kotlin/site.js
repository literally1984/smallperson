(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', 'react', '@emotion/css', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js', './ktor-ktor-client-content-negotiation-js-ir.js', './ktor-ktor-serialization-kotlinx-json-js-ir.js', './ktor-ktor-client-core-js-ir.js', './ktor-ktor-http-js-ir.js', './ktor-ktor-utils-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('react'), require('@emotion/css'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./ktor-ktor-client-content-negotiation-js-ir.js'), require('./ktor-ktor-serialization-kotlinx-json-js-ir.js'), require('./ktor-ktor-client-core-js-ir.js'), require('./ktor-ktor-http-js-ir.js'), require('./ktor-ktor-utils-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'));
  else {
    if (typeof this['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'site'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'site'.");
    }
    if (typeof this['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'site'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['ktor-ktor-client-content-negotiation-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'ktor-ktor-client-content-negotiation-js-ir' was not found. Please, check whether 'ktor-ktor-client-content-negotiation-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['ktor-ktor-serialization-kotlinx-json-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'ktor-ktor-serialization-kotlinx-json-js-ir' was not found. Please, check whether 'ktor-ktor-serialization-kotlinx-json-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['ktor-ktor-client-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'ktor-ktor-client-core-js-ir' was not found. Please, check whether 'ktor-ktor-client-core-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['ktor-ktor-http-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'ktor-ktor-http-js-ir' was not found. Please, check whether 'ktor-ktor-http-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['ktor-ktor-utils-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'ktor-ktor-utils-js-ir' was not found. Please, check whether 'ktor-ktor-utils-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'site'.");
    }
    if (typeof this['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'site'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'site'.");
    }
    root.site = factory(typeof site === 'undefined' ? {} : site, this['react-dom/client'], react, this['@emotion/css'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['ktor-ktor-client-content-negotiation-js-ir'], this['ktor-ktor-serialization-kotlinx-json-js-ir'], this['ktor-ktor-client-core-js-ir'], this['ktor-ktor-http-js-ir'], this['ktor-ktor-utils-js-ir'], this['kotlin-wrappers-kotlin-react-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-wrappers-kotlin-react-dom-js-ir']);
  }
}(this, function (_, $module$react_dom_client_y5z5eu, $module$react, $module$_emotion_css_2enn37, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var useState = $module$react.useState;
  var css = $module$_emotion_css_2enn37.css;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.m9;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var classMeta = kotlin_kotlin.$_$.f9;
  var Plugin_getInstance = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json$default = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.e;
  var url = kotlin_io_ktor_ktor_client_core.$_$.g;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.j;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.i;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var JsType_getInstance = kotlin_io_ktor_ktor_utils.$_$.d;
  var List = kotlin_kotlin.$_$.j5;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.hd;
  var createKType = kotlin_kotlin.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.a;
  var typeInfoImpl = kotlin_io_ktor_ktor_utils.$_$.k;
  var isInterface = kotlin_kotlin.$_$.x9;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.j;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var println = kotlin_kotlin.$_$.v8;
  var emptyList = kotlin_kotlin.$_$.j6;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.va;
  var THROW_ISE = kotlin_kotlin.$_$.uc;
  var getLocalDelegateReference = kotlin_kotlin.$_$.k9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j1;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var SuspendFunction1 = kotlin_kotlin.$_$.s8;
  //endregion
  //region block: pre-declaration
  $getPersonCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $getPersonCOROUTINE$0.prototype.constructor = $getPersonCOROUTINE$0;
  Welcome$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$slambda.prototype.constructor = Welcome$lambda$slambda;
  Welcome$lambda$lambda$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  Welcome$lambda$lambda$lambda$slambda.prototype.constructor = Welcome$lambda$lambda$lambda$slambda;
  //endregion
  function Companion() {
    Companion_instance = this;
    this.j40_1 = '/test';
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('Person', this, 3);
    tmp0_serialDesc.tt('name', false);
    tmp0_serialDesc.tt('age', false);
    tmp0_serialDesc.tt('id', true);
    this.k40_1 = tmp0_serialDesc;
  }
  $serializer.prototype.vj = function () {
    return this.k40_1;
  };
  $serializer.prototype.vt = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), IntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.xj = function (decoder) {
    var tmp0_desc = this.k40_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.um(tmp0_desc);
    if (tmp7_input.jn()) {
      tmp4_local0 = tmp7_input.en(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.in(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.zm(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.kn(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.en(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.in(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.zm(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.vm(tmp0_desc);
    return Person_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  $serializer.prototype.l40 = function (encoder, value) {
    var tmp0_desc = this.k40_1;
    var tmp1_output = encoder.um(tmp0_desc);
    tmp1_output.ho(tmp0_desc, 0, value.m40_1);
    tmp1_output.lo(tmp0_desc, 1, IntSerializer_getInstance(), value.n40_1);
    if (tmp1_output.po(tmp0_desc, 2) ? true : !(value.o40_1 === getStringHashCode(value.m40_1))) {
      tmp1_output.co(tmp0_desc, 2, value.o40_1);
    }
    tmp1_output.vm(tmp0_desc);
  };
  $serializer.prototype.wj = function (encoder, value) {
    return this.l40(encoder, value instanceof Person ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Person_init_$Init$(seen1, name, age, id, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance().k40_1);
    }
    $this.m40_1 = name;
    $this.n40_1 = age;
    if (0 === (seen1 & 4))
      $this.o40_1 = getStringHashCode($this.m40_1);
    else
      $this.o40_1 = id;
    return $this;
  }
  function Person_init_$Create$(seen1, name, age, id, serializationConstructorMarker) {
    return Person_init_$Init$(seen1, name, age, id, serializationConstructorMarker, Object.create(Person.prototype));
  }
  function Person(name, age) {
    Companion_getInstance_0();
    this.m40_1 = name;
    this.n40_1 = age;
    this.o40_1 = getStringHashCode(this.m40_1);
  }
  Person.prototype.toString = function () {
    return 'Person(name=' + this.m40_1 + ', age=' + this.n40_1 + ')';
  };
  Person.prototype.hashCode = function () {
    var result = getStringHashCode(this.m40_1);
    result = imul(result, 31) + (this.n40_1 == null ? 0 : this.n40_1) | 0;
    return result;
  };
  Person.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Person))
      return false;
    var tmp0_other_with_cast = other instanceof Person ? other : THROW_CCE();
    if (!(this.m40_1 === tmp0_other_with_cast.m40_1))
      return false;
    if (!(this.n40_1 == tmp0_other_with_cast.n40_1))
      return false;
    return true;
  };
  Person.$metadata$ = classMeta('Person', undefined, undefined, {0: $serializer_getInstance});
  function get_jsonClient() {
    init_properties_Api_kt_kz2996();
    return jsonClient;
  }
  var jsonClient;
  function getPerson(name, $cont) {
    var tmp = new $getPersonCOROUTINE$0(name, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function jsonClient$lambda($this$HttpClient) {
    init_properties_Api_kt_kz2996();
    var tmp = Plugin_getInstance();
    $this$HttpClient.q33(tmp, jsonClient$lambda$lambda);
    return Unit_getInstance();
  }
  function jsonClient$lambda$lambda($this$install) {
    init_properties_Api_kt_kz2996();
    json$default($this$install, null, null, 3, null);
    return Unit_getInstance();
  }
  function $getPersonCOROUTINE$0(name, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x40_1 = name;
  }
  $getPersonCOROUTINE$0.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            var tmp_0 = this;
            tmp_0.y40_1 = get_jsonClient();
            var tmp_1 = this;
            tmp_1.z40_1 = 'http://localhost:6969/test/' + this.x40_1;
            var tmp_2 = this;
            var tmp0_apply = new HttpRequestBuilder();
            url(tmp0_apply, this.z40_1);
            ;
            tmp_2.a41_1 = tmp0_apply;
            this.a41_1.k32_1 = Companion_getInstance().q2o_1;
            this.hi_1 = 1;
            suspendResult = (new HttpStatement(this.a41_1, this.y40_1)).p3s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b41_1 = suspendResult;
            this.hi_1 = 2;
            var tmp_3 = this.b41_1.r35();
            var tmp_4 = JsType_getInstance();
            var tmp_5 = getKClass(List);
            var tmp_6;
            try {
              tmp_6 = createKType(getKClass(List), arrayOf([createInvariantKTypeProjection(createKType(getKClass(Person), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_7;
              if ($p instanceof Error) {
                tmp_7 = null;
              } else {
                throw $p;
              }
              tmp_6 = tmp_7;
            }

            suspendResult = tmp_3.u34(typeInfoImpl(tmp_4, tmp_5, tmp_6), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var response = (!(suspendResult == null) ? isInterface(suspendResult, List) : false) ? suspendResult : THROW_CCE();
            return response;
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
  $getPersonCOROUTINE$0.$metadata$ = classMeta('$getPersonCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  var properties_initialized_Api_kt_kagxpy;
  function init_properties_Api_kt_kz2996() {
    if (properties_initialized_Api_kt_kagxpy) {
    } else {
      properties_initialized_Api_kt_kagxpy = true;
      jsonClient = HttpClient(jsonClient$lambda);
    }
  }
  function main() {
    var container = document.createElement('div');
    ensureNotNull(document.body).appendChild(container);
    var tmp = get_Welcome();
    var welcome = create(tmp, main$lambda);
    createRoot(container).render(welcome);
  }
  function main$lambda($this$create) {
    $this$create.name = 'Steve';
    return Unit_getInstance();
  }
  function get_scope() {
    init_properties_Welcome_kt_w2afe6();
    return scope;
  }
  var scope;
  function set_currentJob(_set____db54di) {
    init_properties_Welcome_kt_w2afe6();
    currentJob = _set____db54di;
  }
  function get_currentJob() {
    init_properties_Welcome_kt_w2afe6();
    return currentJob;
  }
  var currentJob;
  function get_Welcome() {
    init_properties_Welcome_kt_w2afe6();
    return Welcome;
  }
  var Welcome;
  function Welcome$lambda($this$FC, props) {
    init_properties_Welcome_kt_w2afe6();
    println('welcome created');
    var name$delegate = useState(props.name);
    var output = {_v: 'Searching database...'};
    var tmp$ret$0;
    // Inline function 'kotlin.collections.listOf' call
    tmp$ret$0 = emptyList();
    var data$delegate = useState(tmp$ret$0);
    var tmp0_safe_receiver = get_currentJob();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1e(null, 1, null);
    }
    var tmp = get_scope();
    set_currentJob(launch$default(tmp, null, null, Welcome$lambda$slambda_0(name$delegate, data$delegate, null), 3, null));
    output._v = invoke$lambda_1(data$delegate).m() ? 'User not Found' : 'Welcome back, ' + invoke$lambda_1(data$delegate).h(0).m40_1 + ', Age: ' + invoke$lambda_1(data$delegate).h(0).n40_1;
    var tmp$ret$3;
    // Inline function 'react.dom.html.ReactHTML.div' call
    var tmp0__get_div__2k2o9m = ReactHTML_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = 'div';
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    var tmp_0 = tmp$ret$3;
    $this$FC.sj(tmp_0, Welcome$lambda$lambda(output));
    var tmp$ret$6;
    // Inline function 'react.dom.html.ReactHTML.input' call
    var tmp1__get_input__umcb5q = ReactHTML_getInstance();
    var tmp$ret$5;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$4;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$4 = 'input';
    tmp$ret$5 = tmp$ret$4;
    tmp$ret$6 = tmp$ret$5;
    var tmp_1 = tmp$ret$6;
    $this$FC.sj(tmp_1, Welcome$lambda$lambda_0(name$delegate, output, data$delegate));
    return Unit_getInstance();
  }
  function invoke$lambda($name$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $name$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_0($name$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('name', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $name$delegate;
    return tmp$ret$0[1](value);
  }
  function invoke$lambda_1($data$delegate) {
    init_properties_Welcome_kt_w2afe6();
    var tmp$ret$1;
    // Inline function 'react.StateInstance.getValue' call
    var tmp0_getValue = getLocalDelegateReference('data', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $data$delegate;
    tmp$ret$1 = tmp$ret$0[0];
    return tmp$ret$1;
  }
  function invoke$lambda_2($data$delegate, value) {
    init_properties_Welcome_kt_w2afe6();
    var tmp0_setValue = getLocalDelegateReference('data', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = $data$delegate;
    return tmp$ret$0[1](value);
  }
  function Welcome$lambda$slambda($name$delegate, $data$delegate, resultContinuation) {
    this.k41_1 = $name$delegate;
    this.l41_1 = $data$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$slambda.prototype.m24 = function ($this$launch, $cont) {
    var tmp = this.n24($this$launch, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  Welcome$lambda$slambda.prototype.ri = function (p1, $cont) {
    return this.m24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = getPerson(invoke$lambda(this.k41_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_2(this.l41_1, ARGUMENT);
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
  Welcome$lambda$slambda.prototype.n24 = function ($this$launch, completion) {
    var i = new Welcome$lambda$slambda(this.k41_1, this.l41_1, completion);
    i.m41_1 = $this$launch;
    return i;
  };
  Welcome$lambda$slambda.$metadata$ = classMeta('Welcome$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$slambda_0($name$delegate, $data$delegate, resultContinuation) {
    var i = new Welcome$lambda$slambda($name$delegate, $data$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.m24($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda($output) {
    return function ($this$invoke) {
      var tmp0_css = $this$invoke;
      var tmp$ret$12;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$11;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$10;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Welcome.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '5px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.padding = tmp$ret$3;
      var tmp$ret$6;
      // Inline function 'csstype.rgb' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = 'rgb(8,97,22)';
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp0_unsafeCast_0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp0_apply.backgroundColor = tmp$ret$6;
      var tmp$ret$9;
      // Inline function 'csstype.rgb' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_1 = 'rgb(56,246,137)';
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = tmp0_unsafeCast_1;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp0_apply.color = tmp$ret$9;
      tmp$ret$10 = tmp0_apply;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = css(tmp$ret$11);
      tmp0_css.className = tmp$ret$12;
      $this$invoke.rj($output._v);
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda$lambda$slambda($name$delegate, $data$delegate, resultContinuation) {
    this.v41_1 = $name$delegate;
    this.w41_1 = $data$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  Welcome$lambda$lambda$lambda$slambda.prototype.m24 = function ($this$launch, $cont) {
    var tmp = this.n24($this$launch, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  Welcome$lambda$lambda$lambda$slambda.prototype.ri = function (p1, $cont) {
    return this.m24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  Welcome$lambda$lambda$lambda$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = getPerson(invoke$lambda(this.v41_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            invoke$lambda_2(this.w41_1, ARGUMENT);
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
  Welcome$lambda$lambda$lambda$slambda.prototype.n24 = function ($this$launch, completion) {
    var i = new Welcome$lambda$lambda$lambda$slambda(this.v41_1, this.w41_1, completion);
    i.x41_1 = $this$launch;
    return i;
  };
  Welcome$lambda$lambda$lambda$slambda.$metadata$ = classMeta('Welcome$lambda$lambda$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function Welcome$lambda$lambda$lambda$slambda_0($name$delegate, $data$delegate, resultContinuation) {
    var i = new Welcome$lambda$lambda$lambda$slambda($name$delegate, $data$delegate, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.m24($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function Welcome$lambda$lambda$lambda($output, $name$delegate, $data$delegate) {
    return function (event) {
      invoke$lambda_0($name$delegate, event.target.value);
      var tmp0_safe_receiver = get_currentJob();
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.k1e(null, 1, null);
      }
      $output._v = 'Searching database...';
      var tmp = get_scope();
      set_currentJob(launch$default(tmp, null, null, Welcome$lambda$lambda$lambda$slambda_0($name$delegate, $data$delegate, null), 3, null));
      $output._v = invoke$lambda_1($data$delegate).m() ? 'User not Found' : 'Welcome back, ' + invoke$lambda_1($data$delegate).h(0).m40_1 + ', Age: ' + invoke$lambda_1($data$delegate).h(0).n40_1;
      return Unit_getInstance();
    };
  }
  function Welcome$lambda$lambda_0($name$delegate, $output, $data$delegate) {
    return function ($this$invoke) {
      var tmp0_css = $this$invoke;
      var tmp$ret$12;
      // Inline function 'emotion.css.ClassName' call
      var tmp$ret$11;
      // Inline function 'kotlinx.js.jso' call
      var tmp$ret$10;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlinx.js.jso' call
      tmp$ret$0 = {};
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'Welcome.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'csstype.px' call
      var tmp$ret$2;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = '5px';
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = tmp0_unsafeCast;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      tmp0_apply.marginTop = tmp$ret$3;
      var tmp$ret$6;
      // Inline function 'csstype.px' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_0 = '5px';
      var tmp$ret$4;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$4 = tmp0_unsafeCast_0;
      tmp$ret$5 = tmp$ret$4;
      tmp$ret$6 = tmp$ret$5;
      tmp0_apply.marginBottom = tmp$ret$6;
      var tmp$ret$9;
      // Inline function 'csstype.px' call
      var tmp$ret$8;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast_1 = '14px';
      var tmp$ret$7;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$7 = tmp0_unsafeCast_1;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp0_apply.fontSize = tmp$ret$9;
      tmp$ret$10 = tmp0_apply;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = css(tmp$ret$11);
      tmp0_css.className = tmp$ret$12;
      $this$invoke.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
      $this$invoke.value = invoke$lambda($name$delegate);
      $this$invoke.onChange = Welcome$lambda$lambda$lambda($output, $name$delegate, $data$delegate);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Welcome_kt_8zgob6;
  function init_properties_Welcome_kt_w2afe6() {
    if (properties_initialized_Welcome_kt_8zgob6) {
    } else {
      properties_initialized_Welcome_kt_8zgob6 = true;
      scope = MainScope();
      currentJob = null;
      Welcome = FC(Welcome$lambda);
    }
  }
  //region block: post-declaration
  $serializer.prototype.wt = typeParametersSerializers;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=site.js.map
