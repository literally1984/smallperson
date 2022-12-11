(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-io-js-ir'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ktor-ktor-io-js-ir'.");
    }
    root['ktor-ktor-io-js-ir'] = factory(typeof this['ktor-ktor-io-js-ir'] === 'undefined' ? {} : this['ktor-ktor-io-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.o9;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var toString = kotlin_kotlin.$_$.ka;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var toLong = kotlin_kotlin.$_$.ia;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var classMeta = kotlin_kotlin.$_$.f9;
  var Long = kotlin_kotlin.$_$.oc;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var CancellationException = kotlin_kotlin.$_$.b8;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.j1;
  var captureStack = kotlin_kotlin.$_$.z8;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var cancel$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var invokeOnCompletion$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Key_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var isInterface = kotlin_kotlin.$_$.x9;
  var Key_getInstance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var equals = kotlin_kotlin.$_$.h9;
  var SuspendFunction1 = kotlin_kotlin.$_$.s8;
  var toByte = kotlin_kotlin.$_$.ha;
  var toShort = kotlin_kotlin.$_$.ja;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var charSequenceLength = kotlin_kotlin.$_$.d9;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var Exception = kotlin_kotlin.$_$.lc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var numberToChar = kotlin_kotlin.$_$.ea;
  var coerceAtLeast = kotlin_kotlin.$_$.ma;
  var coerceAtMost = kotlin_kotlin.$_$.oa;
  var Companion_getInstance = kotlin_kotlin.$_$.u4;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.s2;
  var Appendable = kotlin_kotlin.$_$.ya;
  var encodeToByteArray = kotlin_kotlin.$_$.bb;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.a4;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.z3;
  var Char = kotlin_kotlin.$_$.ec;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.z4;
  var charSequenceGet = kotlin_kotlin.$_$.c9;
  var isLowSurrogate = kotlin_kotlin.$_$.gb;
  var isHighSurrogate = kotlin_kotlin.$_$.fb;
  var Job$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var coerceAtMost_0 = kotlin_kotlin.$_$.na;
  var hashCode = kotlin_kotlin.$_$.n9;
  var lazy = kotlin_kotlin.$_$.qd;
  var KProperty1 = kotlin_kotlin.$_$.wa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.e2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m2;
  var replace$default = kotlin_kotlin.$_$.q;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var get_js = kotlin_kotlin.$_$.ca;
  var getStringHashCode = kotlin_kotlin.$_$.m9;
  var extendThrowable = kotlin_kotlin.$_$.i9;
  var charSequenceSubSequence = kotlin_kotlin.$_$.e9;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var Exception_init_$Init$_0 = kotlin_kotlin.$_$.t1;
  var isCharSequence = kotlin_kotlin.$_$.t9;
  var trim = kotlin_kotlin.$_$.bc;
  var decodeToString = kotlin_kotlin.$_$.ab;
  var setOf = kotlin_kotlin.$_$.l7;
  var fillArrayVal = kotlin_kotlin.$_$.j9;
  var isObject = kotlin_kotlin.$_$.z9;
  //endregion
  //region block: pre-declaration
  function readRemaining$default(limit, $cont, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Companion_getInstance();
      limit = new Long(-1, 2147483647);
    }
    return $handler == null ? this.l23(limit, $cont) : $handler(limit, $cont);
  }
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.constructor = $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0;
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.constructor = $awaitAtLeastNBytesAvailableForReadCOROUTINE$1;
  $writeFullyCOROUTINE$9.prototype = Object.create(CoroutineImpl.prototype);
  $writeFullyCOROUTINE$9.prototype.constructor = $writeFullyCOROUTINE$9;
  $writeFullyCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $writeFullyCOROUTINE$10.prototype.constructor = $writeFullyCOROUTINE$10;
  $readRemainingCOROUTINE$26.prototype = Object.create(CoroutineImpl.prototype);
  $readRemainingCOROUTINE$26.prototype.constructor = $readRemainingCOROUTINE$26;
  $readRemainingSuspendCOROUTINE$27.prototype = Object.create(CoroutineImpl.prototype);
  $readRemainingSuspendCOROUTINE$27.prototype.constructor = $readRemainingSuspendCOROUTINE$27;
  $readAvailableCOROUTINE$30.prototype = Object.create(CoroutineImpl.prototype);
  $readAvailableCOROUTINE$30.prototype.constructor = $readAvailableCOROUTINE$30;
  $readAvailableCOROUTINE$33.prototype = Object.create(CoroutineImpl.prototype);
  $readAvailableCOROUTINE$33.prototype.constructor = $readAvailableCOROUTINE$33;
  $awaitInternalAtLeast1COROUTINE$38.prototype = Object.create(CoroutineImpl.prototype);
  $awaitInternalAtLeast1COROUTINE$38.prototype.constructor = $awaitInternalAtLeast1COROUTINE$38;
  $awaitSuspendCOROUTINE$39.prototype = Object.create(CoroutineImpl.prototype);
  $awaitSuspendCOROUTINE$39.prototype.constructor = $awaitSuspendCOROUTINE$39;
  ClosedWriteChannelException.prototype = Object.create(CancellationException.prototype);
  ClosedWriteChannelException.prototype.constructor = ClosedWriteChannelException;
  launchChannel$slambda.prototype = Object.create(CoroutineImpl.prototype);
  launchChannel$slambda.prototype.constructor = launchChannel$slambda;
  InsufficientSpaceException.prototype = Object.create(Exception.prototype);
  InsufficientSpaceException.prototype.constructor = InsufficientSpaceException;
  function close() {
    this.i1g();
  }
  DefaultBufferPool.prototype = Object.create(DefaultPool.prototype);
  DefaultBufferPool.prototype.constructor = DefaultBufferPool;
  BytePacketBuilder.prototype = Object.create(Output.prototype);
  BytePacketBuilder.prototype.constructor = BytePacketBuilder;
  ByteReadPacket.prototype = Object.create(Input.prototype);
  ByteReadPacket.prototype.constructor = ByteReadPacket;
  ChunkBuffer$Companion$NoPool$1.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPool$1.prototype.constructor = ChunkBuffer$Companion$NoPool$1;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype = Object.create(NoPoolImpl.prototype);
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.constructor = ChunkBuffer$Companion$NoPoolManuallyManaged$1;
  ChunkBuffer.prototype = Object.create(Buffer.prototype);
  ChunkBuffer.prototype.constructor = ChunkBuffer;
  MalformedUTF8InputException.prototype = Object.create(Exception.prototype);
  MalformedUTF8InputException.prototype.constructor = MalformedUTF8InputException;
  $sleepCOROUTINE$52.prototype = Object.create(CoroutineImpl.prototype);
  $sleepCOROUTINE$52.prototype.constructor = $sleepCOROUTINE$52;
  $trySuspendCOROUTINE$53.prototype = Object.create(CoroutineImpl.prototype);
  $trySuspendCOROUTINE$53.prototype.constructor = $trySuspendCOROUTINE$53;
  $copyToSequentialImplCOROUTINE$54.prototype = Object.create(CoroutineImpl.prototype);
  $copyToSequentialImplCOROUTINE$54.prototype.constructor = $copyToSequentialImplCOROUTINE$54;
  $copyToTailCOROUTINE$55.prototype = Object.create(CoroutineImpl.prototype);
  $copyToTailCOROUTINE$55.prototype.constructor = $copyToTailCOROUTINE$55;
  ByteArrayPool$1.prototype = Object.create(DefaultPool.prototype);
  ByteArrayPool$1.prototype.constructor = ByteArrayPool$1;
  ByteChannelJS.prototype = Object.create(ByteChannelSequentialBase.prototype);
  ByteChannelJS.prototype.constructor = ByteChannelJS;
  MalformedInputException.prototype = Object.create(Error.prototype);
  MalformedInputException.prototype.constructor = MalformedInputException;
  CharsetImpl.prototype = Object.create(Charset.prototype);
  CharsetImpl.prototype.constructor = CharsetImpl;
  CharsetEncoderImpl.prototype = Object.create(CharsetEncoder.prototype);
  CharsetEncoderImpl.prototype.constructor = CharsetEncoderImpl;
  CharsetDecoderImpl.prototype = Object.create(CharsetDecoder.prototype);
  CharsetDecoderImpl.prototype.constructor = CharsetDecoderImpl;
  IOException.prototype = Object.create(Exception.prototype);
  IOException.prototype.constructor = IOException;
  EOFException.prototype = Object.create(IOException.prototype);
  EOFException.prototype.constructor = EOFException;
  //endregion
  function ByteChannel() {
  }
  ByteChannel.$metadata$ = interfaceMeta('ByteChannel', [ByteReadChannel_1, ByteWriteChannel]);
  function ByteReadChannel(content) {
    return ByteReadChannel_0(content, 0, content.length);
  }
  function ByteChannelSequentialBase_init_$Init$(initial, autoFlush, pool, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      pool = Companion_getInstance_4().b1w_1;
    ByteChannelSequentialBase.call($this, initial, autoFlush, pool);
    return $this;
  }
  function _get_isCancelled__nhbn6y($this) {
    var tmp0_safe_receiver = $this.m1w_1.m1c_1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1w_1) == null);
  }
  function flushImpl($this) {
    if ($this.n1w_1.c1k()) {
      $this.r1w_1.w1w();
      return false;
    }
    flushWrittenBytes($this);
    $this.r1w_1.w1w();
    return true;
  }
  function flushWrittenBytes($this) {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = $this.s1w_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.flushWrittenBytes.<anonymous>' call
    var size = $this.n1w_1.g();
    var buffer = ensureNotNull($this.n1w_1.n1x());
    $this.t1w_1.o1x(buffer);
    tmp$ret$0 = $this.k1w_1.atomicfu$addAndGet(size);
    tmp$ret$1 = tmp$ret$0;
  }
  function ensureNotClosed($this) {
    if ($this.q1x()) {
      var tmp0_elvis_lhs = $this.p1x();
      throw tmp0_elvis_lhs == null ? new ClosedWriteChannelException('Channel ' + $this + ' is already closed') : tmp0_elvis_lhs;
    }
  }
  function ensureNotFailed($this) {
    var tmp0_safe_receiver = $this.p1x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  }
  function ensureNotFailed_0($this, closeable) {
    var tmp0_safe_receiver = $this.p1x();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      closeable.t12();
      throw tmp0_safe_receiver;
    }
  }
  function readRemainingSuspend($this, builder, limit, $cont) {
    var tmp = new $readRemainingSuspendCOROUTINE$27($this, builder, limit, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function addBytesRead($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$0 = "Can't read negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp1_minusAssign = $this.l1w_1;
    tmp1_minusAssign.atomicfu$getAndAdd(-count | 0);
    $this.i1w_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlinx.atomicfu.AtomicInt.minusAssign' call
    var tmp2_minusAssign = $this.k1w_1;
    tmp2_minusAssign.atomicfu$getAndAdd(-count | 0);
    // Inline function 'kotlin.check' call
    var tmp3_check = $this.l1w_1.n1c_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.f1y() + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = $this.f1y() >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesRead.<anonymous>' call
      tmp$ret$2 = 'Readable bytes count is negative: ' + $this.f1y() + ', ' + count + ' in ' + $this;
      var message_1 = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function addBytesWritten($this, count) {
    // Inline function 'kotlin.require' call
    var tmp0_require = count >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$0 = "Can't write negative amount of bytes: " + count;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.atomicfu.AtomicInt.plusAssign' call
    var tmp1_plusAssign = $this.l1w_1;
    tmp1_plusAssign.atomicfu$getAndAdd(count);
    $this.j1w_1.atomicfu$addAndGet$long(toLong(count));
    // Inline function 'kotlin.check' call
    var tmp2_check = $this.l1w_1.n1c_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.addBytesWritten.<anonymous>' call
      tmp$ret$1 = 'Readable bytes count is negative: ' + $this.l1w_1.n1c_1 + ', ' + count + ' in ' + $this;
      var message_0 = tmp$ret$1;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this$0, $count) {
    return function () {
      return this$0.g1y() < $count ? !this$0.q1x() : false;
    };
  }
  function ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this$0, $count) {
    return function () {
      return this$0.f1y() < $count ? !this$0.h1y() : false;
    };
  }
  function $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1y_1 = _this__u8e3s4;
    this.r1y_1 = count;
  }
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.prototype.qi = function () {
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
            if (!(this.q1y_1.g1y() < this.r1y_1 ? !this.q1y_1.q1x() : false)) {
              this.hi_1 = 5;
              continue $sm;
            }

            if (!flushImpl(this.q1y_1)) {
              this.hi_1 = 2;
              suspendResult = this.q1y_1.r1w_1.s1y(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForWrite$lambda(this.q1y_1, this.r1y_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hi_1 = 3;
              continue $sm;
            }

            break;
          case 2:
            this.hi_1 = 3;
            continue $sm;
          case 3:
            this.hi_1 = 1;
            continue $sm;
          case 4:
            throw this.ki_1;
          case 5:
            return Unit_getInstance();
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
  $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0.$metadata$ = classMeta('$awaitAtLeastNBytesAvailableForWriteCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(_this__u8e3s4, count, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1z_1 = _this__u8e3s4;
    this.c1z_1 = count;
  }
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (!(this.b1z_1.f1y() < this.c1z_1 ? !this.b1z_1.h1y() : false)) {
              this.hi_1 = 4;
              continue $sm;
            }

            this.hi_1 = 2;
            suspendResult = this.b1z_1.r1w_1.s1y(ByteChannelSequentialBase$awaitAtLeastNBytesAvailableForRead$lambda(this.b1z_1, this.c1z_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
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
  $awaitAtLeastNBytesAvailableForReadCOROUTINE$1.$metadata$ = classMeta('$awaitAtLeastNBytesAvailableForReadCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writeFullyCOROUTINE$9(_this__u8e3s4, src, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l1z_1 = _this__u8e3s4;
    this.m1z_1 = src;
  }
  $writeFullyCOROUTINE$9.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.l1z_1.n1z(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var count = this.m1z_1.q1z_1 - this.m1z_1.p1z_1 | 0;
            writeFully$default(this.l1z_1.n1w_1, this.m1z_1, 0, 2, null);
            this.l1z_1.u1z(count);
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
  $writeFullyCOROUTINE$9.$metadata$ = classMeta('$writeFullyCOROUTINE$9', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $writeFullyCOROUTINE$10(_this__u8e3s4, src, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d20_1 = _this__u8e3s4;
    this.e20_1 = src;
    this.f20_1 = offset;
    this.g20_1 = length;
  }
  $writeFullyCOROUTINE$10.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.h20_1 = this.f20_1;
            this.i20_1 = this.f20_1 + this.g20_1 | 0;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (!(this.h20_1 < this.i20_1)) {
              this.hi_1 = 3;
              continue $sm;
            }

            this.hi_1 = 2;
            suspendResult = this.d20_1.n1z(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_min = this.d20_1.g1y();
            var tmp1_min = this.i20_1 - this.h20_1 | 0;
            var bytesCount = Math.min(tmp0_min, tmp1_min);
            writeFully_3(this.d20_1.n1w_1, this.e20_1, this.h20_1, bytesCount);
            this.h20_1 = this.h20_1 + bytesCount | 0;
            this.d20_1.u1z(bytesCount);
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
  $writeFullyCOROUTINE$10.$metadata$ = classMeta('$writeFullyCOROUTINE$10', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readRemainingCOROUTINE$26(_this__u8e3s4, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r20_1 = _this__u8e3s4;
    this.s20_1 = limit;
  }
  $readRemainingCOROUTINE$26.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            ensureNotFailed(this.r20_1);
            var tmp_0 = this;
            tmp_0.t20_1 = BytePacketBuilder_init_$Create$(null, 1, null);
            var tmp_1 = this;
            var tmp_2 = this;
            tmp_2.u20_1 = this.r20_1.o1w_1.g21();
            tmp_1.v20_1 = this.s20_1.f1(this.u20_1) <= 0 ? this.s20_1 : this.u20_1;
            this.t20_1.h21(this.r20_1.o1w_1, this.v20_1);
            this.r20_1.i21(this.v20_1.o6());
            var tmp_3 = this;
            var tmp_4 = this;
            tmp_4.w20_1 = this.t20_1.g();
            tmp_3.x20_1 = this.s20_1.b6(toLong(this.w20_1));
            if (this.x20_1.equals(new Long(0, 0)) ? true : this.r20_1.h1y()) {
              var tmp_5 = this;
              ensureNotFailed_0(this.r20_1, this.t20_1);
              tmp_5.y20_1 = this.t20_1.gs();
              this.hi_1 = 2;
              continue $sm;
            } else {
              this.hi_1 = 1;
              suspendResult = readRemainingSuspend(this.r20_1, this.t20_1, this.s20_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.y20_1 = suspendResult;
            this.hi_1 = 2;
            continue $sm;
          case 2:
            return this.y20_1;
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
  $readRemainingCOROUTINE$26.$metadata$ = classMeta('$readRemainingCOROUTINE$26', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readRemainingSuspendCOROUTINE$27(_this__u8e3s4, builder, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z1x_1 = _this__u8e3s4;
    this.a1y_1 = builder;
    this.b1y_1 = limit;
  }
  $readRemainingSuspendCOROUTINE$27.prototype.qi = function () {
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
            if (!(toLong(this.a1y_1.g()).f1(this.b1y_1) < 0)) {
              this.hi_1 = 4;
              continue $sm;
            }

            var tmp_0 = this;
            var tmp_1 = this;
            var tmp0_minus = this.a1y_1.g();
            tmp_1.c1y_1 = this.b1y_1.b6(toLong(tmp0_minus));
            var tmp_2 = this;
            tmp_2.d1y_1 = this.z1x_1.o1w_1.g21();
            tmp_0.e1y_1 = this.c1y_1.f1(this.d1y_1) <= 0 ? this.c1y_1 : this.d1y_1;
            this.a1y_1.h21(this.z1x_1.o1w_1, this.e1y_1);
            this.z1x_1.i21(this.e1y_1.o6());
            ensureNotFailed_0(this.z1x_1, this.a1y_1);
            if (this.z1x_1.h1y() ? true : this.a1y_1.g() === this.b1y_1.o6()) {
              this.hi_1 = 4;
              continue $sm;
            } else {
              this.hi_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.hi_1 = 3;
            suspendResult = this.z1x_1.j21(1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            ;
            this.hi_1 = 1;
            continue $sm;
          case 4:
            ensureNotFailed_0(this.z1x_1, this.a1y_1);
            return this.a1y_1.gs();
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
  $readRemainingSuspendCOROUTINE$27.$metadata$ = classMeta('$readRemainingSuspendCOROUTINE$27', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readAvailableCOROUTINE$30(_this__u8e3s4, dst, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s21_1 = _this__u8e3s4;
    this.t21_1 = dst;
  }
  $readAvailableCOROUTINE$30.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            var tmp0_safe_receiver = this.s21_1.p1x();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.s21_1.q1x() ? this.s21_1.f1y() === 0 : false)
              return -1;
            if ((this.t21_1.s1z_1 - this.t21_1.q1z_1 | 0) === 0)
              return 0;
            if (this.s21_1.f1y() === 0) {
              this.hi_1 = 1;
              suspendResult = this.s21_1.j21(1, this);
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
            if (!this.s21_1.o1w_1.v21()) {
              this.s21_1.u21();
            }

            var tmp0_minOf = toLong(this.t21_1.s1z_1 - this.t21_1.q1z_1 | 0);
            var tmp1_minOf = this.s21_1.o1w_1.g21();
            var size = (tmp0_minOf.f1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).o6();
            readFully_3(this.s21_1.o1w_1, this.t21_1, size);
            this.s21_1.i21(size);
            return size;
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
  $readAvailableCOROUTINE$30.$metadata$ = classMeta('$readAvailableCOROUTINE$30', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $readAvailableCOROUTINE$33(_this__u8e3s4, dst, offset, length, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e22_1 = _this__u8e3s4;
    this.f22_1 = dst;
    this.g22_1 = offset;
    this.h22_1 = length;
  }
  $readAvailableCOROUTINE$33.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            var tmp0_safe_receiver = this.e22_1.p1x();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            if (this.e22_1.q1x() ? this.e22_1.f1y() === 0 : false)
              return -1;
            if (this.h22_1 === 0)
              return 0;
            if (this.e22_1.f1y() === 0) {
              this.hi_1 = 1;
              suspendResult = this.e22_1.j21(1, this);
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
            if (!this.e22_1.o1w_1.v21()) {
              this.e22_1.u21();
            }

            var tmp0_minOf = toLong(this.h22_1);
            var tmp1_minOf = this.e22_1.o1w_1.g21();
            var size = (tmp0_minOf.f1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf).o6();
            readFully_2(this.e22_1.o1w_1, this.f22_1, this.g22_1, size);
            this.e22_1.i21(size);
            return size;
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
  $readAvailableCOROUTINE$33.$metadata$ = classMeta('$readAvailableCOROUTINE$33', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitInternalAtLeast1COROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q22_1 = _this__u8e3s4;
  }
  $awaitInternalAtLeast1COROUTINE$38.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            var tmp_0 = this;
            tmp_0.s22_1 = this.q22_1.o1w_1;
            if (!this.s22_1.t22()) {
              var tmp_1 = this;
              tmp_1.r22_1 = true;
              this.hi_1 = 3;
              continue $sm;
            } else {
              this.hi_1 = 1;
              suspendResult = this.q22_1.j21(1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

            break;
          case 1:
            this.r22_1 = suspendResult;
            this.hi_1 = 3;
            continue $sm;
          case 2:
            throw this.ki_1;
          case 3:
            return this.r22_1;
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
  $awaitInternalAtLeast1COROUTINE$38.$metadata$ = classMeta('$awaitInternalAtLeast1COROUTINE$38', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $awaitSuspendCOROUTINE$39(_this__u8e3s4, atLeast, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c23_1 = _this__u8e3s4;
    this.d23_1 = atLeast;
  }
  $awaitSuspendCOROUTINE$39.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            var tmp_0 = this;
            tmp_0.e23_1 = this.d23_1 >= 0;
            if (!this.e23_1) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            this.hi_1 = 1;
            suspendResult = this.c23_1.f23(this.d23_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c23_1.u21();
            var tmp0_safe_receiver = this.c23_1.p1x();
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw tmp0_safe_receiver;
            }

            ;
            return !this.c23_1.h1y() ? this.c23_1.f1y() >= this.d23_1 : false;
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
  $awaitSuspendCOROUTINE$39.$metadata$ = classMeta('$awaitSuspendCOROUTINE$39', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ByteChannelSequentialBase(initial, autoFlush, pool) {
    this.g1w_1 = autoFlush;
    this.h1w_1 = atomic$ref$1(Companion_getInstance_4().d1w_1);
    this.i1w_1 = atomic$long$1(new Long(0, 0));
    this.j1w_1 = atomic$long$1(new Long(0, 0));
    this.k1w_1 = atomic$int$1(0);
    this.l1w_1 = atomic$int$1(0);
    this.m1w_1 = atomic$ref$1(null);
    this.n1w_1 = new BytePacketBuilder(pool);
    this.o1w_1 = ByteReadPacket_init_$Create$(initial, pool);
    this.p1w_1 = atomic$int$1(0);
    this.q1w_1 = atomic$ref$1(Companion_getInstance_4().d1w_1);
    this.r1w_1 = new AwaitingSlot();
    this.s1w_1 = new Object();
    var tmp = this;
    tmp.t1w_1 = BytePacketBuilder_init_$Create$(null, 1, null);
    var count = remainingAll(initial).o6();
    this.u1z(count);
    this.k1w_1.atomicfu$addAndGet(count);
  }
  ByteChannelSequentialBase.prototype.g23 = function () {
    return this.g1w_1;
  };
  ByteChannelSequentialBase.prototype.q1x = function () {
    return !(this.m1w_1.m1c_1 == null);
  };
  ByteChannelSequentialBase.prototype.h23 = function () {
    return this.n1w_1;
  };
  ByteChannelSequentialBase.prototype.i23 = function () {
    return this.o1w_1;
  };
  ByteChannelSequentialBase.prototype.f1y = function () {
    return this.k1w_1.n1c_1;
  };
  ByteChannelSequentialBase.prototype.g1y = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.maxOf' call
    var tmp0_maxOf = 4088 - this.l1w_1.n1c_1 | 0;
    tmp$ret$0 = Math.max(0, tmp0_maxOf);
    return tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.h1y = function () {
    return _get_isCancelled__nhbn6y(this) ? true : this.q1x() ? this.l1w_1.n1c_1 === 0 : false;
  };
  ByteChannelSequentialBase.prototype.p1x = function () {
    var tmp0_safe_receiver = this.m1w_1.m1c_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u1w_1;
  };
  ByteChannelSequentialBase.prototype.n1z = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForWriteCOROUTINE$0(this, count, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.f23 = function (count, $cont) {
    var tmp = new $awaitAtLeastNBytesAvailableForReadCOROUTINE$1(this, count, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.ee = function () {
    flushImpl(this);
  };
  ByteChannelSequentialBase.prototype.u21 = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    var tmp0_synchronized = this.s1w_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.ByteChannelSequentialBase.prepareFlushedBytes.<anonymous>' call
    tmp$ret$0 = unsafeAppend(this.o1w_1, this.t1w_1);
    tmp$ret$1 = tmp$ret$0;
  };
  ByteChannelSequentialBase.prototype.j23 = function (src, $cont) {
    var tmp = new $writeFullyCOROUTINE$9(this, src, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.k23 = function (src, offset, length, $cont) {
    var tmp = new $writeFullyCOROUTINE$10(this, src, offset, length, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.i21 = function (count) {
    addBytesRead(this, count);
    this.r1w_1.w1w();
  };
  ByteChannelSequentialBase.prototype.l23 = function (limit, $cont) {
    var tmp = new $readRemainingCOROUTINE$26(this, limit, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.n23 = function (dst, $cont) {
    return this.o23(dst instanceof Buffer ? dst : THROW_CCE(), $cont);
  };
  ByteChannelSequentialBase.prototype.o23 = function (dst, $cont) {
    var tmp = new $readAvailableCOROUTINE$30(this, dst, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.p23 = function (dst, offset, length, $cont) {
    var tmp = new $readAvailableCOROUTINE$33(this, dst, offset, length, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.q23 = function ($cont) {
    var tmp = new $awaitInternalAtLeast1COROUTINE$38(this, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.j21 = function (atLeast, $cont) {
    var tmp = new $awaitSuspendCOROUTINE$39(this, atLeast, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  ByteChannelSequentialBase.prototype.c1h = function (cause) {
    if (!(this.p1x() == null) ? true : this.q1x()) {
      return false;
    }
    var tmp0_elvis_lhs = cause;
    return this.j1q(tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Channel cancelled') : tmp0_elvis_lhs);
  };
  ByteChannelSequentialBase.prototype.j1q = function (cause) {
    var closeElement = cause == null ? get_CLOSED_SUCCESS() : new CloseElement(cause);
    if (!this.m1w_1.atomicfu$compareAndSet(null, closeElement))
      return false;
    if (!(cause == null)) {
      this.o1w_1.t12();
      this.n1w_1.t12();
      this.t1w_1.t12();
    } else {
      this.ee();
    }
    this.r1w_1.r23(cause);
    return true;
  };
  ByteChannelSequentialBase.prototype.s23 = function (dst, limit) {
    var size = this.o1w_1.g21();
    var tmp;
    if (size.f1(limit) <= 0) {
      dst.n1w_1.t23(this.o1w_1);
      dst.u1z(size.o6());
      this.i21(size.o6());
      tmp = size;
    } else {
      tmp = new Long(0, 0);
    }
    return tmp;
  };
  ByteChannelSequentialBase.prototype.u1z = function (count) {
    addBytesWritten(this, count);
    if (this.q1x()) {
      this.n1w_1.t12();
      ensureNotClosed(this);
    }
    if (this.g23() ? true : this.g1y() === 0) {
      this.ee();
    }
  };
  ByteChannelSequentialBase.$metadata$ = classMeta('ByteChannelSequentialBase', [ByteChannel, ByteReadChannel_1, ByteWriteChannel, SuspendableReadSession, HasReadSession, HasWriteSession]);
  function cancel(_this__u8e3s4) {
    return _this__u8e3s4.c1h(null);
  }
  function readAvailable(_this__u8e3s4, dst, $cont) {
    return _this__u8e3s4.p23(dst, 0, dst.length, $cont);
  }
  function close_0(_this__u8e3s4) {
    return _this__u8e3s4.j1q(null);
  }
  function ClosedWriteChannelException(message) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, ClosedWriteChannelException);
  }
  ClosedWriteChannelException.$metadata$ = classMeta('ClosedWriteChannelException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function writeFully(_this__u8e3s4, src, $cont) {
    return _this__u8e3s4.k23(src, 0, src.length, $cont);
  }
  function get_CLOSED_SUCCESS() {
    init_properties_CloseElement_kt_zcr6ie();
    return CLOSED_SUCCESS;
  }
  var CLOSED_SUCCESS;
  function CloseElement(cause) {
    this.u1w_1 = cause;
  }
  CloseElement.$metadata$ = classMeta('CloseElement');
  var properties_initialized_CloseElement_kt_clkism;
  function init_properties_CloseElement_kt_zcr6ie() {
    if (properties_initialized_CloseElement_kt_clkism) {
    } else {
      properties_initialized_CloseElement_kt_clkism = true;
      CLOSED_SUCCESS = new CloseElement(null);
    }
  }
  function WriterJob() {
  }
  WriterJob.$metadata$ = interfaceMeta('WriterJob', [Job]);
  function writer(_this__u8e3s4, coroutineContext, autoFlush, block) {
    return launchChannel(_this__u8e3s4, coroutineContext, ByteChannel_0(autoFlush), true, block);
  }
  function writer$default(_this__u8e3s4, coroutineContext, autoFlush, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      coroutineContext = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      autoFlush = false;
    return writer(_this__u8e3s4, coroutineContext, autoFlush, block);
  }
  function WriterScope() {
  }
  WriterScope.$metadata$ = interfaceMeta('WriterScope', [CoroutineScope]);
  function ChannelJob(delegate, channel) {
    this.u23_1 = delegate;
    this.v23_1 = channel;
  }
  ChannelJob.prototype.c1p = function () {
    return this.v23_1;
  };
  ChannelJob.prototype.e1d = function () {
    return this.u23_1.e1d();
  };
  ChannelJob.prototype.s = function () {
    return this.u23_1.s();
  };
  ChannelJob.prototype.r1e = function (child) {
    return this.u23_1.r1e(child);
  };
  ChannelJob.prototype.j1e = function (cause) {
    this.u23_1.j1e(cause);
  };
  ChannelJob.prototype.e4 = function (initial, operation) {
    return this.u23_1.e4(initial, operation);
  };
  ChannelJob.prototype.y3 = function (key) {
    return this.u23_1.y3(key);
  };
  ChannelJob.prototype.b1e = function () {
    return this.u23_1.b1e();
  };
  ChannelJob.prototype.f1e = function (onCancelling, invokeImmediately, handler) {
    return this.u23_1.f1e(onCancelling, invokeImmediately, handler);
  };
  ChannelJob.prototype.e1e = function (handler) {
    return this.u23_1.e1e(handler);
  };
  ChannelJob.prototype.d4 = function (key) {
    return this.u23_1.d4(key);
  };
  ChannelJob.prototype.f4 = function (context) {
    return this.u23_1.f4(context);
  };
  ChannelJob.prototype.z1d = function () {
    return this.u23_1.z1d();
  };
  ChannelJob.prototype.toString = function () {
    return 'ChannelJob[' + this.u23_1 + ']';
  };
  ChannelJob.$metadata$ = classMeta('ChannelJob', [ReaderJob, WriterJob, Job]);
  function launchChannel(_this__u8e3s4, context, channel, attachJob, block) {
    var dispatcher = _this__u8e3s4.d1d().y3(Key_getInstance());
    var job = launch$default(_this__u8e3s4, context, null, launchChannel$slambda_0(attachJob, channel, block, dispatcher, null), 2, null);
    job.e1e(launchChannel$lambda(channel));
    return new ChannelJob(job, channel);
  }
  function ReaderJob() {
  }
  ReaderJob.$metadata$ = interfaceMeta('ReaderJob', [Job]);
  function ChannelScope(delegate, channel) {
    this.w23_1 = channel;
    this.x23_1 = delegate;
  }
  ChannelScope.prototype.c1p = function () {
    return this.w23_1;
  };
  ChannelScope.prototype.d1d = function () {
    return this.x23_1.d1d();
  };
  ChannelScope.$metadata$ = classMeta('ChannelScope', [ReaderScope, WriterScope, CoroutineScope]);
  function ReaderScope() {
  }
  ReaderScope.$metadata$ = interfaceMeta('ReaderScope', [CoroutineScope]);
  function launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    this.g24_1 = $attachJob;
    this.h24_1 = $channel;
    this.i24_1 = $block;
    this.j24_1 = $dispatcher;
    CoroutineImpl.call(this, resultContinuation);
  }
  launchChannel$slambda.prototype.m24 = function ($this$launch, $cont) {
    var tmp = this.n24($this$launch, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  launchChannel$slambda.prototype.ri = function (p1, $cont) {
    return this.m24((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  launchChannel$slambda.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            if (this.g24_1) {
              this.h24_1.a1w(ensureNotNull(this.k24_1.d1d().y3(Key_getInstance_0())));
            }

            var tmp_0 = this;
            var tmp_1 = new ChannelScope(this.k24_1, this.h24_1);
            tmp_0.l24_1 = isInterface(tmp_1, CoroutineScope) ? tmp_1 : THROW_CCE();
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.i24_1(this.l24_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ii_1 = 3;
            this.hi_1 = 4;
            continue $sm;
          case 2:
            this.ii_1 = 3;
            var tmp_2 = this.ki_1;
            if (tmp_2 instanceof Error) {
              var cause = this.ki_1;
              if (!equals(this.j24_1, Dispatchers_getInstance().k1j_1) ? !(this.j24_1 == null) : false) {
                throw cause;
              }
              this.h24_1.c1h(cause);
              this.hi_1 = 4;
              continue $sm;
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
  launchChannel$slambda.prototype.n24 = function ($this$launch, completion) {
    var i = new launchChannel$slambda(this.g24_1, this.h24_1, this.i24_1, this.j24_1, completion);
    i.k24_1 = $this$launch;
    return i;
  };
  launchChannel$slambda.$metadata$ = classMeta('launchChannel$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function launchChannel$slambda_0($attachJob, $channel, $block, $dispatcher, resultContinuation) {
    var i = new launchChannel$slambda($attachJob, $channel, $block, $dispatcher, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.m24($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function launchChannel$lambda($channel) {
    return function (cause) {
      $channel.j1q(cause);
      return Unit_getInstance();
    };
  }
  function unwrapCancellationException(_this__u8e3s4) {
    var exception = _this__u8e3s4;
    $l$loop: while (true) {
      if (!(exception instanceof CancellationException)) {
        break $l$loop;
      }
      if (equals(exception, exception.cause)) {
        return _this__u8e3s4;
      }
      var tmp0_elvis_lhs = exception.cause;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return exception;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      exception = tmp;
    }
    return exception;
  }
  function ReadSession() {
  }
  ReadSession.$metadata$ = interfaceMeta('ReadSession');
  function SuspendableReadSession() {
  }
  SuspendableReadSession.$metadata$ = interfaceMeta('SuspendableReadSession', [ReadSession]);
  function HasReadSession() {
  }
  HasReadSession.$metadata$ = interfaceMeta('HasReadSession');
  function HasWriteSession() {
  }
  HasWriteSession.$metadata$ = interfaceMeta('HasWriteSession');
  function get_highByte(_this__u8e3s4) {
    return toByte(_this__u8e3s4 >>> 8 | 0);
  }
  function get_lowByte(_this__u8e3s4) {
    return toByte(_this__u8e3s4 & 255);
  }
  function get_highShort(_this__u8e3s4) {
    return toShort(_this__u8e3s4 >>> 16 | 0);
  }
  function get_lowShort(_this__u8e3s4) {
    return toShort(_this__u8e3s4 & 65535);
  }
  function get(_this__u8e3s4, index) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    tmp$ret$0 = _this__u8e3s4.o24_1.getInt8(index);
    return tmp$ret$0;
  }
  function set(_this__u8e3s4, index, value) {
    return _this__u8e3s4.o24_1.setInt8(index, value);
  }
  function Allocator() {
  }
  Allocator.$metadata$ = interfaceMeta('Allocator');
  function storeByteArray(_this__u8e3s4, offset, source, sourceOffset, count) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), source, sourceOffset, count);
    // Inline function 'kotlin.contracts.contract' call
    tmp0_let.r24(_this__u8e3s4, 0, count, offset);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
  }
  function decode(_this__u8e3s4, input, max) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.buildString' call
    var tmp$ret$0;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp0_minOf = toLong(max);
    var tmp1_minOf = sizeEstimate(input);
    tmp$ret$0 = tmp0_minOf.f1(tmp1_minOf) <= 0 ? tmp0_minOf : tmp1_minOf;
    var tmp2_buildString = tmp$ret$0.o6();
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp2_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
    decode_0(_this__u8e3s4, input, tmp0_apply, max);
    tmp$ret$1 = tmp0_apply;
    tmp$ret$2 = tmp$ret$1.toString();
    return tmp$ret$2;
  }
  function decode$default(_this__u8e3s4, input, max, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return decode(_this__u8e3s4, input, max);
  }
  function encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return get_EmptyByteArray();
    var single = Companion_getInstance_4().b1w_1.s24();
    try {
      var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, single);
      start = start + rc | 0;
      if (start === toIndex) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = single.q1z_1 - single.p1z_1 | 0;
        var result = new Int8Array(tmp$ret$0);
        // Inline function 'io.ktor.utils.io.core.readFully' call
        var tmp0_readFully = result.length - 0 | 0;
        readFully_0(single instanceof Buffer ? single : THROW_CCE(), result, 0, tmp0_readFully);
        return result;
      }
      var tmp$ret$1;
      $l$block: {
        // Inline function 'io.ktor.utils.io.core.buildPacket' call
        // Inline function 'kotlin.contracts.contract' call
        var builder = BytePacketBuilder_init_$Create$(null, 1, null);
        try {
          // Inline function 'io.ktor.utils.io.charsets.encodeToByteArrayImpl1.<anonymous>' call
          builder.e25(single.d25());
          encodeToImpl(_this__u8e3s4, builder, input, start, toIndex);
          tmp$ret$1 = builder.gs();
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            builder.t12();
            throw $p;
          } else {
            throw $p;
          }
        }
      }
      var tmp = tmp$ret$1;
      return readBytes$default(tmp, 0, 1, null);
    }finally {
      single.f25(Companion_getInstance_4().b1w_1);
    }
  }
  function sizeEstimate(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof ByteReadPacket) {
      tmp = _this__u8e3s4.g21();
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.maxOf' call
      var tmp0_maxOf = _this__u8e3s4.g21();
      tmp$ret$0 = tmp0_maxOf.f1(new Long(16, 0)) >= 0 ? tmp0_maxOf : new Long(16, 0);
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function encodeToImpl(_this__u8e3s4, destination, input, fromIndex, toIndex) {
    var start = fromIndex;
    if (start >= toIndex)
      return 0;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(destination, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.charsets.encodeToImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.s1z_1 - tmp0__anonymous__q1qw7t.q1z_1 | 0;
        var before = tmp$ret$0;
        var rc = encodeImpl(_this__u8e3s4, input, start, toIndex, tmp0__anonymous__q1qw7t);
        // Inline function 'kotlin.check' call
        var tmp0_check = rc >= 0;
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.check' call
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$1;
          // Inline function 'kotlin.check.<anonymous>' call
          tmp$ret$1 = 'Check failed.';
          var message = tmp$ret$1;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        start = start + rc | 0;
        var tmp = bytesWritten;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$2 = tmp0__anonymous__q1qw7t.s1z_1 - tmp0__anonymous__q1qw7t.q1z_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$2 | 0) | 0;
        tmp$ret$3 = start >= toIndex ? 0 : rc === 0 ? 8 : 1;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(destination, size, tail);
      }
    }finally {
      destination.g25();
    }
    bytesWritten = bytesWritten + encodeCompleteImpl(_this__u8e3s4, destination) | 0;
    return bytesWritten;
  }
  function encodeCompleteImpl(_this__u8e3s4, dst) {
    var size = 1;
    var bytesWritten = 0;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(dst, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.encodeCompleteImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.s1z_1 - tmp0__anonymous__q1qw7t.q1z_1 | 0;
        var before = tmp$ret$0;
        if (encodeComplete(_this__u8e3s4, tmp0__anonymous__q1qw7t)) {
          size = 0;
        } else {
          var tmp0 = size;
          size = tmp0 + 1 | 0;
        }
        var tmp = bytesWritten;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.s1z_1 - tmp0__anonymous__q1qw7t.q1z_1 | 0;
        bytesWritten = tmp + (before - tmp$ret$1 | 0) | 0;
        tmp$ret$2 = size > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(dst, 1, tail);
      }
    }finally {
      dst.g25();
    }
    return bytesWritten;
  }
  function encode(_this__u8e3s4, input, fromIndex, toIndex) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.charsets.encode.<anonymous>' call
        encodeToImpl(_this__u8e3s4, builder, input, fromIndex, toIndex);
        tmp$ret$0 = builder.gs();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.t12();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  }
  function encode$default(_this__u8e3s4, input, fromIndex, toIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(input);
    return encode(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function Companion() {
    Companion_instance = this;
    this.h25_1 = 8;
  }
  Companion.prototype.i25 = function () {
    return this.h25_1;
  };
  Companion.prototype.j25 = function () {
    return Companion_getInstance_4().d1w_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Buffer(memory) {
    Companion_getInstance_1();
    this.o1z_1 = memory;
    this.p1z_1 = 0;
    this.q1z_1 = 0;
    this.r1z_1 = 0;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb = this.o1z_1;
    tmp$ret$0 = tmp0__get_size32__ezg0pb.o24_1.byteLength;
    tmp.s1z_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.Memory.size32' call
    var tmp0__get_size32__ezg0pb_0 = this.o1z_1;
    tmp$ret$1 = tmp0__get_size32__ezg0pb_0.o24_1.byteLength;
    tmp_0.t1z_1 = tmp$ret$1;
  }
  Buffer.prototype.k25 = function () {
    return this.o1z_1;
  };
  Buffer.prototype.l25 = function () {
    return this.p1z_1;
  };
  Buffer.prototype.m25 = function () {
    return this.q1z_1;
  };
  Buffer.prototype.n25 = function () {
    return this.s1z_1;
  };
  Buffer.prototype.o25 = function () {
    return this.t1z_1 - this.s1z_1 | 0;
  };
  Buffer.prototype.p25 = function () {
    return this.t1z_1;
  };
  Buffer.prototype.q25 = function () {
    return this.q1z_1 - this.p1z_1 | 0;
  };
  Buffer.prototype.r25 = function () {
    return this.s1z_1 - this.q1z_1 | 0;
  };
  Buffer.prototype.s25 = function (count) {
    if (count === 0)
      return Unit_getInstance();
    var newReadPosition = this.p1z_1 + count | 0;
    if (count < 0 ? true : newReadPosition > this.q1z_1) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$1 = this.q1z_1 - this.p1z_1 | 0;
      discardFailed(count, tmp$ret$1);
    }
    this.p1z_1 = newReadPosition;
  };
  Buffer.prototype.t25 = function (count) {
    var newWritePosition = this.q1z_1 + count | 0;
    if (count < 0 ? true : newWritePosition > this.s1z_1) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.s1z_1 - this.q1z_1 | 0;
      commitWrittenFailed(count, tmp$ret$0);
    }
    this.q1z_1 = newWritePosition;
  };
  Buffer.prototype.u25 = function (position) {
    var limit = this.s1z_1;
    if (position < this.q1z_1) {
      var tmp = position - this.q1z_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = this.s1z_1 - this.q1z_1 | 0;
      commitWrittenFailed(tmp, tmp$ret$0);
    }
    if (position >= limit) {
      if (position === limit) {
        this.q1z_1 = position;
        return false;
      }
      var tmp_0 = position - this.q1z_1 | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = this.s1z_1 - this.q1z_1 | 0;
      commitWrittenFailed(tmp_0, tmp$ret$1);
    }
    this.q1z_1 = position;
    return true;
  };
  Buffer.prototype.v25 = function (position) {
    if (position < 0 ? true : position > this.q1z_1) {
      var tmp = position - this.p1z_1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = this.q1z_1 - this.p1z_1 | 0;
      discardFailed(tmp, tmp$ret$0);
    }
    if (!(this.p1z_1 === position)) {
      this.p1z_1 = position;
    }
  };
  Buffer.prototype.w25 = function (count) {
    var newReadPosition = this.p1z_1 - count | 0;
    if (newReadPosition < this.r1z_1) {
      rewindFailed(count, this.p1z_1 - this.r1z_1 | 0);
    }
    this.p1z_1 = newReadPosition;
  };
  Buffer.prototype.x25 = function (startGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = startGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveStartGap.<anonymous>' call
      tmp$ret$0 = "startGap shouldn't be negative: " + startGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (this.p1z_1 >= startGap) {
      this.r1z_1 = startGap;
      return Unit_getInstance();
    }
    if (this.p1z_1 === this.q1z_1) {
      if (startGap > this.s1z_1) {
        startGapReservationFailedDueToLimit(this, startGap);
      }
      this.q1z_1 = startGap;
      this.p1z_1 = startGap;
      this.r1z_1 = startGap;
      return Unit_getInstance();
    }
    startGapReservationFailed(this, startGap);
  };
  Buffer.prototype.y25 = function (endGap) {
    // Inline function 'kotlin.require' call
    var tmp0_require = endGap >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.reserveEndGap.<anonymous>' call
      tmp$ret$0 = "endGap shouldn't be negative: " + endGap;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var newLimit = this.t1z_1 - endGap | 0;
    if (newLimit >= this.q1z_1) {
      this.s1z_1 = newLimit;
      return Unit_getInstance();
    }
    if (newLimit < 0) {
      endGapReservationFailedDueToCapacity(this, endGap);
    }
    if (newLimit < this.r1z_1) {
      endGapReservationFailedDueToStartGap(this, endGap);
    }
    if (this.p1z_1 === this.q1z_1) {
      this.s1z_1 = newLimit;
      this.p1z_1 = newLimit;
      this.q1z_1 = newLimit;
      return Unit_getInstance();
    }
    endGapReservationFailedDueToContent(this, endGap);
  };
  Buffer.prototype.z25 = function () {
    this.r1z_1 = 0;
    this.p1z_1 = 0;
    var capacity = this.t1z_1;
    this.q1z_1 = capacity;
  };
  Buffer.prototype.a26 = function () {
    this.b26(this.t1z_1 - this.r1z_1 | 0);
  };
  Buffer.prototype.b26 = function (limit) {
    var startGap = this.r1z_1;
    this.p1z_1 = startGap;
    this.q1z_1 = startGap;
    this.s1z_1 = limit;
  };
  Buffer.prototype.c26 = function () {
    this.d26(0);
    this.e26();
  };
  Buffer.prototype.e26 = function () {
    this.s1z_1 = this.t1z_1;
  };
  Buffer.prototype.d26 = function (newReadPosition) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newReadPosition >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$0 = "newReadPosition shouldn't be negative: " + newReadPosition;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = newReadPosition <= this.p1z_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.releaseStartGap.<anonymous>' call
      tmp$ret$1 = "newReadPosition shouldn't be ahead of the read position: " + newReadPosition + ' > ' + this.p1z_1;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.p1z_1 = newReadPosition;
    if (this.r1z_1 > newReadPosition) {
      this.r1z_1 = newReadPosition;
    }
  };
  Buffer.prototype.f26 = function (copy) {
    copy.s1z_1 = this.s1z_1;
    copy.r1z_1 = this.r1z_1;
    copy.p1z_1 = this.p1z_1;
    copy.q1z_1 = this.q1z_1;
  };
  Buffer.prototype.g26 = function () {
    var readPosition = this.p1z_1;
    if (readPosition === this.q1z_1) {
      throw new EOFException('No readable bytes available.');
    }
    this.p1z_1 = readPosition + 1 | 0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.get' call
    var tmp0_get = this.o1z_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
    tmp$ret$0 = tmp0_get.o24_1.getInt8(readPosition);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  Buffer.prototype.h26 = function (value) {
    var writePosition = this.q1z_1;
    if (writePosition === this.s1z_1) {
      throw new InsufficientSpaceException('No free space in the buffer to write a byte');
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.set' call
    var tmp0_set = this.o1z_1;
    tmp0_set.o24_1.setInt8(writePosition, value);
    tmp$ret$0 = Unit_getInstance();
    this.q1z_1 = writePosition + 1 | 0;
  };
  Buffer.prototype.i26 = function () {
    this.c26();
    this.a26();
  };
  Buffer.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = this.q1z_1 - this.p1z_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$1 = this.s1z_1 - this.q1z_1 | 0;
    var tmp_0 = tmp$ret$1;
    var tmp_1 = this.r1z_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$2 = this.t1z_1 - this.s1z_1 | 0;
    return 'Buffer(' + tmp + ' used, ' + tmp_0 + ' free, ' + (tmp_1 + tmp$ret$2 | 0) + ' reserved of ' + this.t1z_1 + ')';
  };
  Buffer.$metadata$ = classMeta('Buffer');
  function discardFailed(count, readRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + readRemaining + ' available for reading');
  }
  function commitWrittenFailed(count, writeRemaining) {
    throw new EOFException('Unable to discard ' + count + ' bytes: only ' + writeRemaining + ' available for writing');
  }
  function rewindFailed(count, rewindRemaining) {
    throw IllegalArgumentException_init_$Create$('Unable to rewind ' + count + ' bytes: only ' + rewindRemaining + ' could be rewinded');
  }
  function startGapReservationFailedDueToLimit(_this__u8e3s4, startGap) {
    if (startGap > _this__u8e3s4.t1z_1) {
      throw IllegalArgumentException_init_$Create$('Start gap ' + startGap + ' is bigger than the capacity ' + _this__u8e3s4.t1z_1);
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$0 = _this__u8e3s4.t1z_1 - _this__u8e3s4.s1z_1 | 0;
    throw IllegalStateException_init_$Create$('Unable to reserve ' + startGap + ' start gap: there are already ' + tmp$ret$0 + ' bytes reserved in the end');
  }
  function startGapReservationFailed(_this__u8e3s4, startGap) {
    var tmp = 'Unable to reserve ' + startGap + ' start gap: ';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.q1z_1 - _this__u8e3s4.p1z_1 | 0;
    throw IllegalStateException_init_$Create$(tmp + ('there are already ' + tmp$ret$0 + ' content bytes starting at offset ' + _this__u8e3s4.p1z_1));
  }
  function endGapReservationFailedDueToCapacity(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: capacity is ' + _this__u8e3s4.t1z_1);
  }
  function endGapReservationFailedDueToStartGap(_this__u8e3s4, endGap) {
    throw IllegalArgumentException_init_$Create$('End gap ' + endGap + ' is too big: there are already ' + _this__u8e3s4.r1z_1 + ' bytes reserved in the beginning');
  }
  function endGapReservationFailedDueToContent(_this__u8e3s4, endGap) {
    var tmp = 'Unable to reserve end gap ' + endGap + ':';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = _this__u8e3s4.q1z_1 - _this__u8e3s4.p1z_1 | 0;
    throw IllegalArgumentException_init_$Create$(tmp + (' there are already ' + tmp$ret$0 + ' content bytes at offset ' + _this__u8e3s4.p1z_1));
  }
  function InsufficientSpaceException_init_$Init$(name, size, availableSpace, $this) {
    InsufficientSpaceException.call($this, 'Not enough free space to write ' + name + ' of ' + size + ' bytes, available ' + availableSpace + ' bytes.');
    return $this;
  }
  function InsufficientSpaceException_init_$Create$(name, size, availableSpace) {
    var tmp = InsufficientSpaceException_init_$Init$(name, size, availableSpace, Object.create(InsufficientSpaceException.prototype));
    captureStack(tmp, InsufficientSpaceException_init_$Create$);
    return tmp;
  }
  function InsufficientSpaceException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, InsufficientSpaceException);
  }
  InsufficientSpaceException.$metadata$ = classMeta('InsufficientSpaceException', undefined, undefined, undefined, undefined, Exception.prototype);
  function restoreStartGap(_this__u8e3s4, size) {
    _this__u8e3s4.d26(_this__u8e3s4.p1z_1 - size | 0);
  }
  function canRead(_this__u8e3s4) {
    return _this__u8e3s4.q1z_1 > _this__u8e3s4.p1z_1;
  }
  function write(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var rc = block(_this__u8e3s4.o1z_1, _this__u8e3s4.q1z_1, _this__u8e3s4.s1z_1);
    _this__u8e3s4.t25(rc);
    return rc;
  }
  function read(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var rc = block(_this__u8e3s4.o1z_1, _this__u8e3s4.p1z_1, _this__u8e3s4.q1z_1);
    _this__u8e3s4.s25(rc);
    return rc;
  }
  function writeBufferAppend(_this__u8e3s4, other, maxSize) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.q1z_1 - other.p1z_1 | 0;
    var tmp0_minOf = tmp$ret$0;
    tmp$ret$1 = Math.min(tmp0_minOf, maxSize);
    var size = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = _this__u8e3s4.s1z_1 - _this__u8e3s4.q1z_1 | 0;
    if (tmp$ret$2 <= size) {
      writeBufferAppendUnreserve(_this__u8e3s4, size);
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>' call
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.o1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    var tmp3__anonymous__ufb84q = _this__u8e3s4.s1z_1;
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeBufferAppend.<anonymous>.<anonymous>' call
    var tmp0__anonymous__q1qw7t = other.o1z_1;
    var tmp1__anonymous__uwfjfc_0 = other.p1z_1;
    var tmp2__anonymous__z9zvc9_0 = other.q1z_1;
    tmp0__anonymous__q1qw7t.r24(tmp1__anonymous__uwfjfc, tmp1__anonymous__uwfjfc_0, size, tmp2__anonymous__z9zvc9);
    tmp$ret$3 = size;
    var rc = tmp$ret$3;
    other.s25(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    var rc_0 = tmp$ret$5;
    _this__u8e3s4.t25(rc_0);
    tmp$ret$6 = rc_0;
    return tmp$ret$6;
  }
  function writeBufferAppendUnreserve(_this__u8e3s4, writeSize) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$0 = _this__u8e3s4.s1z_1 - _this__u8e3s4.q1z_1 | 0;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = _this__u8e3s4.t1z_1 - _this__u8e3s4.s1z_1 | 0;
    if ((tmp + tmp$ret$1 | 0) < writeSize) {
      throw IllegalArgumentException_init_$Create$("Can't append buffer: not enough free space at the end");
    }
    var newWritePosition = _this__u8e3s4.q1z_1 + writeSize | 0;
    var overrunSize = newWritePosition - _this__u8e3s4.s1z_1 | 0;
    if (overrunSize > 0) {
      _this__u8e3s4.e26();
    }
  }
  function writeBufferPrepend(_this__u8e3s4, other) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = other.q1z_1 - other.p1z_1 | 0;
    var size = tmp$ret$0;
    var readPosition = _this__u8e3s4.p1z_1;
    if (readPosition < size) {
      throw IllegalArgumentException_init_$Create$('Not enough space in the beginning to prepend bytes');
    }
    var newReadPosition = readPosition - size | 0;
    other.o1z_1.r24(_this__u8e3s4.o1z_1, other.p1z_1, size, newReadPosition);
    other.s25(size);
    _this__u8e3s4.d26(newReadPosition);
    return size;
  }
  function get_DefaultChunkedBufferPool() {
    init_properties_BufferFactory_kt_l6j3be();
    return DefaultChunkedBufferPool;
  }
  var DefaultChunkedBufferPool;
  function DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      bufferSize = 4096;
    if (!(($mask0 & 2) === 0))
      capacity = 1000;
    if (!(($mask0 & 4) === 0))
      allocator = DefaultAllocator_getInstance();
    DefaultBufferPool.call($this, bufferSize, capacity, allocator);
    return $this;
  }
  function DefaultBufferPool_init_$Create$(bufferSize, capacity, allocator, $mask0, $marker) {
    return DefaultBufferPool_init_$Init$(bufferSize, capacity, allocator, $mask0, $marker, Object.create(DefaultBufferPool.prototype));
  }
  function DefaultBufferPool(bufferSize, capacity, allocator) {
    DefaultPool.call(this, capacity);
    this.m26_1 = bufferSize;
    this.n26_1 = allocator;
  }
  DefaultBufferPool.prototype.o26 = function () {
    return new ChunkBuffer(this.n26_1.p24(this.m26_1), null, this);
  };
  DefaultBufferPool.prototype.p26 = function (instance) {
    this.n26_1.q24(instance.o1z_1);
    DefaultPool.prototype.t26.call(this, instance);
    instance.u26();
  };
  DefaultBufferPool.prototype.t26 = function (instance) {
    return this.p26(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.v26 = function (instance) {
    DefaultPool.prototype.w26.call(this, instance);
    // Inline function 'kotlin.check' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    var tmp0__get_size__8hfv5c = instance.o1z_1;
    tmp$ret$0 = toLong(tmp0__get_size__8hfv5c.o24_1.byteLength);
    var tmp1_check = tmp$ret$0.equals(toLong(this.m26_1));
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      var tmp0__get_size__8hfv5c_0 = instance.o1z_1;
      tmp$ret$1 = toLong(tmp0__get_size__8hfv5c_0.o24_1.byteLength);
      tmp$ret$2 = 'Buffer size mismatch. Expected: ' + this.m26_1 + ', actual: ' + toString(tmp$ret$1);
      var message = tmp$ret$2;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    var tmp2_check = !(instance === Companion_getInstance_4().d1w_1);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$3 = "ChunkBuffer.Empty couldn't be recycled";
      var message_0 = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.check' call
    var tmp3_check = !(instance === Companion_getInstance_1().j25());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_check) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$4 = "Empty instance couldn't be recycled";
      var message_1 = tmp$ret$4;
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.check' call
    var tmp4_check = instance.x26() === 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_check) {
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$5 = 'Unable to clear buffer: it is still in use.';
      var message_2 = tmp$ret$5;
      throw IllegalStateException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.check' call
    var tmp5_check = instance.y26() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_check) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$6 = "Recycled instance shouldn't be a part of a chain.";
      var message_3 = tmp$ret$6;
      throw IllegalStateException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.check' call
    var tmp6_check = instance.c25_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp6_check) {
      var tmp$ret$7;
      // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.validateInstance.<anonymous>' call
      tmp$ret$7 = "Recycled instance shouldn't be a view or another buffer.";
      var message_4 = tmp$ret$7;
      throw IllegalStateException_init_$Create$(toString(message_4));
    }
  };
  DefaultBufferPool.prototype.w26 = function (instance) {
    return this.v26(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.prototype.z26 = function (instance) {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = DefaultPool.prototype.a27.call(this, instance);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.DefaultBufferPool.clearInstance.<anonymous>' call
    tmp0_apply.b27();
    tmp0_apply.i26();
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  };
  DefaultBufferPool.prototype.a27 = function (instance) {
    return this.z26(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  DefaultBufferPool.$metadata$ = classMeta('DefaultBufferPool', undefined, undefined, undefined, undefined, DefaultPool.prototype);
  function get_DEFAULT_BUFFER_SIZE() {
    return DEFAULT_BUFFER_SIZE;
  }
  var DEFAULT_BUFFER_SIZE;
  var properties_initialized_BufferFactory_kt_q9tgbq;
  function init_properties_BufferFactory_kt_l6j3be() {
    if (properties_initialized_BufferFactory_kt_q9tgbq) {
    } else {
      properties_initialized_BufferFactory_kt_q9tgbq = true;
      DefaultChunkedBufferPool = DefaultBufferPool_init_$Create$(0, 0, null, 7, null);
    }
  }
  function writeFully_0(_this__u8e3s4, source, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.q1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.s1z_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('byte array', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeByteArray' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.bits.useMemory' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), source, offset, length);
    // Inline function 'kotlin.contracts.contract' call
    tmp0_let.r24(tmp0__anonymous__q1qw7t, 0, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = Unit_getInstance();
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = length;
    var rc = tmp$ret$2;
    _this__u8e3s4.t25(rc);
    tmp$ret$3 = rc;
  }
  function writeFully_1(_this__u8e3s4, src, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      tmp$ret$0 = "length shouldn't be negative: " + length;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = src.q1z_1 - src.p1z_1 | 0;
    var tmp1_require = length <= tmp$ret$1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$2 = src.q1z_1 - src.p1z_1 | 0;
      tmp$ret$3 = "length shouldn't be greater than the source read remaining: " + length + ' > ' + tmp$ret$2;
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$4 = _this__u8e3s4.s1z_1 - _this__u8e3s4.q1z_1 | 0;
    var tmp2_require = length <= tmp$ret$4;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$5 = _this__u8e3s4.s1z_1 - _this__u8e3s4.q1z_1 | 0;
      tmp$ret$6 = "length shouldn't be greater than the destination write remaining space: " + length + ' > ' + tmp$ret$5;
      var message_1 = tmp$ret$6;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'io.ktor.utils.io.core.writeExact' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$8;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$7;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp3__anonymous__ufb84q = _this__u8e3s4.o1z_1;
    var tmp4__anonymous__pkmkx7 = _this__u8e3s4.q1z_1;
    var tmp5__anonymous__kpxxpo = _this__u8e3s4.s1z_1;
    var writeRemaining = tmp5__anonymous__kpxxpo - tmp4__anonymous__pkmkx7 | 0;
    if (writeRemaining < length) {
      throw InsufficientSpaceException_init_$Create$('buffer readable content', length, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    src.o1z_1.r24(tmp3__anonymous__ufb84q, src.p1z_1, length, tmp4__anonymous__pkmkx7);
    src.s25(length);
    tmp$ret$7 = length;
    var rc = tmp$ret$7;
    _this__u8e3s4.t25(rc);
    tmp$ret$8 = rc;
  }
  function readFully(_this__u8e3s4, destination, offset, length) {
    readFully_0(_this__u8e3s4 instanceof Buffer ? _this__u8e3s4 : THROW_CCE(), destination, offset, length);
  }
  function writeExact(_this__u8e3s4, size, name, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.q1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.s1z_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < size) {
      throw InsufficientSpaceException_init_$Create$(name, size, writeRemaining);
    }
    block(tmp0__anonymous__q1qw7t, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = size;
    var rc = tmp$ret$0;
    _this__u8e3s4.t25(rc);
    tmp$ret$1 = rc;
  }
  function readFully_0(_this__u8e3s4, destination, offset, length) {
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.p1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a byte array of size ' + length + '.');
    }
    copyTo_0(tmp0__anonymous__q1qw7t, destination, tmp1__anonymous__uwfjfc, length, offset);
    value = Unit_getInstance();
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.s25(rc);
    tmp$ret$1 = rc;
    tmp$ret$2 = value;
  }
  function readExact(_this__u8e3s4, size, name, block) {
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.p1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < size) {
      throw new EOFException('Not enough bytes to read a ' + name + ' of size ' + size + '.');
    }
    value = block(tmp0__anonymous__q1qw7t, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = size;
    var rc = tmp$ret$0;
    _this__u8e3s4.s25(rc);
    tmp$ret$1 = rc;
    return value;
  }
  function readFully_1(_this__u8e3s4, dst, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.s1z_1 - dst.q1z_1 | 0;
    var tmp1_require = length <= tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_0 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$6;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.p1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new EOFException('Not enough bytes to read a buffer content of size ' + length + '.');
    }
    tmp0__anonymous__q1qw7t.r24(dst.o1z_1, tmp1__anonymous__uwfjfc, length, dst.q1z_1);
    dst.t25(length);
    value = Unit_getInstance();
    tmp$ret$4 = length;
    var rc = tmp$ret$4;
    _this__u8e3s4.s25(rc);
    tmp$ret$5 = rc;
    tmp$ret$6 = value;
    return length;
  }
  function writeShort(_this__u8e3s4, value) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.q1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.s1z_1;
    var writeRemaining = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    if (writeRemaining < 2) {
      throw InsufficientSpaceException_init_$Create$('short integer', 2, writeRemaining);
    }
    // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
    // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
    tmp0__anonymous__q1qw7t.o24_1.setInt16(tmp1__anonymous__uwfjfc, value, false);
    tmp$ret$0 = 2;
    var rc = tmp$ret$0;
    _this__u8e3s4.t25(rc);
    tmp$ret$1 = rc;
    return Unit_getInstance();
  }
  function readShort(_this__u8e3s4) {
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readExact' call
    // Inline function 'kotlin.contracts.contract' call
    var value;
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.readExact.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.p1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < 2) {
      throw new EOFException('Not enough bytes to read a short integer of size 2.');
    }
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
    tmp$ret$0 = tmp0__anonymous__q1qw7t.o24_1.getInt16(tmp1__anonymous__uwfjfc, false);
    tmp$ret$1 = tmp$ret$0;
    value = tmp$ret$1;
    tmp$ret$2 = 2;
    var rc = tmp$ret$2;
    _this__u8e3s4.s25(rc);
    tmp$ret$3 = rc;
    tmp$ret$4 = value;
    return tmp$ret$4;
  }
  function coerceAtMostMaxIntOrFail(_this__u8e3s4, message) {
    if (_this__u8e3s4.f1(toLong(IntCompanionObject_getInstance().w_1)) > 0)
      throw IllegalArgumentException_init_$Create$(message);
    return _this__u8e3s4.o6();
  }
  function remainingAll(_this__u8e3s4) {
    return remainingAll_0(_this__u8e3s4, new Long(0, 0));
  }
  function findTail(_this__u8e3s4) {
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp0_elvis_lhs = $this.y26();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        $this = tmp0;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function releaseAll(_this__u8e3s4, pool) {
    var current = _this__u8e3s4;
    while (!(current == null)) {
      var next = current.d27();
      current.f25(pool);
      current = next;
    }
  }
  function remainingAll_0(_this__u8e3s4, n) {
    var $this = _this__u8e3s4;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = $this.q1z_1 - $this.p1z_1 | 0;
        var rem = toLong(tmp$ret$0).a6(n_0);
        var tmp0_elvis_lhs = $this.y26();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return rem;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var next = tmp;
        var tmp0 = next;
        var tmp1 = rem;
        $this = tmp0;
        n_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function forEachChunk(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var current = _this__u8e3s4;
    $l$loop: do {
      block(current);
      var tmp0_elvis_lhs = current.y26();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      current = tmp;
    }
     while (true);
  }
  function buildPacket(block) {
    // Inline function 'kotlin.contracts.contract' call
    var builder = BytePacketBuilder_init_$Create$(null, 1, null);
    try {
      block(builder);
      return builder.gs();
    } catch ($p) {
      if ($p instanceof Error) {
        builder.t12();
        throw $p;
      } else {
        throw $p;
      }
    }
  }
  function BytePacketBuilder_init_$Init$(pool, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      pool = Companion_getInstance_4().b1w_1;
    BytePacketBuilder.call($this, pool);
    return $this;
  }
  function BytePacketBuilder_init_$Create$(pool, $mask0, $marker) {
    return BytePacketBuilder_init_$Init$(pool, $mask0, $marker, Object.create(BytePacketBuilder.prototype));
  }
  function BytePacketBuilder(pool) {
    Output.call(this, pool);
  }
  BytePacketBuilder.prototype.g = function () {
    return this.e27();
  };
  BytePacketBuilder.prototype.c1k = function () {
    return this.e27() === 0;
  };
  BytePacketBuilder.prototype.f27 = function () {
  };
  BytePacketBuilder.prototype.g27 = function (source, offset, length) {
  };
  BytePacketBuilder.prototype.w5 = function (value) {
    var tmp = Output.prototype.w5.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.c = function (value) {
    var tmp = Output.prototype.c.call(this, value);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.lg = function (value, startIndex, endIndex) {
    var tmp = Output.prototype.lg.call(this, value, startIndex, endIndex);
    return tmp instanceof BytePacketBuilder ? tmp : THROW_CCE();
  };
  BytePacketBuilder.prototype.gs = function () {
    var size = this.g();
    var head = this.n1x();
    return head == null ? Companion_getInstance_2().h27_1 : new ByteReadPacket(head, toLong(size), this.f1x_1);
  };
  BytePacketBuilder.prototype.toString = function () {
    return 'BytePacketBuilder(' + this.g() + ' bytes written)';
  };
  BytePacketBuilder.$metadata$ = classMeta('BytePacketBuilder', undefined, undefined, undefined, undefined, Output.prototype);
  function ByteReadPacket_init_$Init$(head, pool, $this) {
    ByteReadPacket.call($this, head, remainingAll(head), pool);
    return $this;
  }
  function ByteReadPacket_init_$Create$(head, pool) {
    return ByteReadPacket_init_$Init$(head, pool, Object.create(ByteReadPacket.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.h27_1 = new ByteReadPacket(Companion_getInstance_4().d1w_1, new Long(0, 0), Companion_getInstance_4().c1w_1);
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_2() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ByteReadPacket(head, remaining, pool) {
    Companion_getInstance_2();
    Input.call(this, head, remaining, pool);
    this.o27();
  }
  ByteReadPacket.prototype.w27 = function () {
    return null;
  };
  ByteReadPacket.prototype.x27 = function (destination, offset, length) {
    return 0;
  };
  ByteReadPacket.prototype.y27 = function () {
  };
  ByteReadPacket.prototype.toString = function () {
    return 'ByteReadPacket(' + toString(this.g21()) + ' bytes remaining)';
  };
  ByteReadPacket.$metadata$ = classMeta('ByteReadPacket', undefined, undefined, undefined, undefined, Input.prototype);
  function _set__head__b4pap2($this, newHead) {
    $this.a21_1 = newHead;
    $this.b21_1 = newHead.o1z_1;
    $this.c21_1 = newHead.p1z_1;
    $this.d21_1 = newHead.q1z_1;
  }
  function readASCII($this, out, min, max) {
    if (max === 0 ? min === 0 : false)
      return 0;
    else if ($this.t22())
      if (min === 0)
        return 0;
      else {
        atLeastMinCharactersRequire($this, min);
      }
     else if (max < min) {
      minShouldBeLess($this, min, max);
    }
    var copied = 0;
    var utf8 = false;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$4;
          $l$block_0: {
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII' call
            var tmp$ret$6;
            // Inline function 'io.ktor.utils.io.core.read' call
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$5;
            // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
            var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.o1z_1;
            var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.p1z_1;
            var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.q1z_1;
            var inductionVariable = tmp1__anonymous__uwfjfc;
            if (inductionVariable < tmp2__anonymous__z9zvc9)
              do {
                var index = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.bits.get' call
                var tmp$ret$1;
                // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                tmp$ret$1 = tmp0__anonymous__q1qw7t_0.o24_1.getInt8(index);
                tmp$ret$2 = tmp$ret$1;
                var codepoint = tmp$ret$2 & 255;
                var tmp_0;
                if ((codepoint & 128) === 128) {
                  tmp_0 = true;
                } else {
                  var tmp$ret$3;
                  // Inline function 'io.ktor.utils.io.core.Input.readASCII.<anonymous>.<anonymous>' call
                  var tmp3__anonymous__ufb84q = numberToChar(codepoint);
                  var tmp_1;
                  if (copied === max) {
                    tmp_1 = false;
                  } else {
                    out.w5(tmp3__anonymous__ufb84q);
                    var tmp0 = copied;
                    copied = tmp0 + 1 | 0;
                    tmp_1 = true;
                  }
                  tmp$ret$3 = tmp_1;
                  tmp_0 = !tmp$ret$3;
                }
                if (tmp_0) {
                  tmp0__anonymous__q1qw7t.s25(index - tmp1__anonymous__uwfjfc | 0);
                  tmp$ret$4 = false;
                  break $l$block_0;
                }
              }
               while (inductionVariable < tmp2__anonymous__z9zvc9);
            tmp$ret$5 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
            var rc = tmp$ret$5;
            tmp0__anonymous__q1qw7t.s25(rc);
            tmp$ret$6 = rc;
            tmp$ret$4 = true;
          }
          var rc_0 = tmp$ret$4;
          var tmp_2;
          if (rc_0) {
            tmp_2 = true;
          } else if (copied === max) {
            tmp_2 = false;
          } else {
            utf8 = true;
            tmp_2 = false;
          }
          tmp$ret$7 = tmp_2;
          if (!tmp$ret$7) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead($this, current);
          var tmp_3;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_3 = tmp1_elvis_lhs;
          }
          var next = tmp_3;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (utf8) {
      return copied + readUtf8($this, out, min - copied | 0, max - copied | 0) | 0;
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function atLeastMinCharactersRequire($this, min) {
    throw new EOFException('at least ' + min + ' characters required but no bytes available');
  }
  function minShouldBeLess($this, min, max) {
    throw IllegalArgumentException_init_$Create$('min should be less or equal to max but min = ' + min + ', max = ' + max);
  }
  function prematureEndOfStreamChars($this, min, copied) {
    throw new MalformedUTF8InputException('Premature end of stream: expected at least ' + min + ' chars but had only ' + copied);
  }
  function readUtf8($this, out, min, max) {
    var copied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead($this, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop_0: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.q1z_1 - tmp0__get_readRemaining__u3cy9h.p1z_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$11;
              // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>' call
              var tmp3__anonymous__ufb84q = current;
              var tmp$ret$5;
              $l$block_3: {
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8' call
                var byteCount = 0;
                var value = 0;
                var lastByteCount = 0;
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
                var tmp0__anonymous__q1qw7t = tmp3__anonymous__ufb84q.o1z_1;
                var tmp1__anonymous__uwfjfc = tmp3__anonymous__ufb84q.p1z_1;
                var tmp2__anonymous__z9zvc9 = tmp3__anonymous__ufb84q.q1z_1;
                var inductionVariable = tmp1__anonymous__uwfjfc;
                if (inductionVariable < tmp2__anonymous__z9zvc9)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var tmp$ret$3;
                    // Inline function 'io.ktor.utils.io.bits.get' call
                    var tmp$ret$2;
                    // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
                    tmp$ret$2 = tmp0__anonymous__q1qw7t.o24_1.getInt8(index);
                    tmp$ret$3 = tmp$ret$2;
                    var v = tmp$ret$3 & 255;
                    if ((v & 128) === 0) {
                      if (!(byteCount === 0)) {
                        malformedByteCount(byteCount);
                      }
                      var tmp$ret$4;
                      // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                      var tmp3__anonymous__ufb84q_0 = numberToChar(v);
                      var tmp_0;
                      if (copied === max) {
                        tmp_0 = false;
                      } else {
                        out.w5(tmp3__anonymous__ufb84q_0);
                        var tmp0 = copied;
                        copied = tmp0 + 1 | 0;
                        tmp_0 = true;
                      }
                      tmp$ret$4 = tmp_0;
                      if (!tmp$ret$4) {
                        tmp3__anonymous__ufb84q.s25(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = -1;
                        break $l$block_3;
                      }
                    } else if (byteCount === 0) {
                      var mask = 128;
                      value = v;
                      var inductionVariable_0 = 1;
                      if (inductionVariable_0 <= 6)
                        $l$loop: do {
                          var i = inductionVariable_0;
                          inductionVariable_0 = inductionVariable_0 + 1 | 0;
                          if (!((value & mask) === 0)) {
                            value = value & ~mask;
                            mask = mask >> 1;
                            var tmp2 = byteCount;
                            byteCount = tmp2 + 1 | 0;
                          } else {
                            break $l$loop;
                          }
                        }
                         while (inductionVariable_0 <= 6);
                      lastByteCount = byteCount;
                      var tmp3 = byteCount;
                      byteCount = tmp3 - 1 | 0;
                      if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
                        tmp3__anonymous__ufb84q.s25(index - tmp1__anonymous__uwfjfc | 0);
                        tmp$ret$5 = lastByteCount;
                        break $l$block_3;
                      }
                    } else {
                      value = value << 6 | v & 127;
                      var tmp4 = byteCount;
                      byteCount = tmp4 - 1 | 0;
                      if (byteCount === 0) {
                        if (isBmpCodePoint(value)) {
                          var tmp$ret$6;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp4__anonymous__pkmkx7 = numberToChar(value);
                          var tmp_1;
                          if (copied === max) {
                            tmp_1 = false;
                          } else {
                            out.w5(tmp4__anonymous__pkmkx7);
                            var tmp0_0 = copied;
                            copied = tmp0_0 + 1 | 0;
                            tmp_1 = true;
                          }
                          tmp$ret$6 = tmp_1;
                          if (!tmp$ret$6) {
                            tmp3__anonymous__ufb84q.s25(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        } else if (!isValidCodePoint(value)) {
                          malformedCodePoint(value);
                        } else {
                          var tmp_2;
                          var tmp$ret$7;
                          // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                          var tmp5__anonymous__kpxxpo = numberToChar(highSurrogate(value));
                          var tmp_3;
                          if (copied === max) {
                            tmp_3 = false;
                          } else {
                            out.w5(tmp5__anonymous__kpxxpo);
                            var tmp0_1 = copied;
                            copied = tmp0_1 + 1 | 0;
                            tmp_3 = true;
                          }
                          tmp$ret$7 = tmp_3;
                          if (!tmp$ret$7) {
                            tmp_2 = true;
                          } else {
                            var tmp$ret$8;
                            // Inline function 'io.ktor.utils.io.core.Input.readUtf8.<anonymous>.<anonymous>' call
                            var tmp6__anonymous__fv9ai5 = numberToChar(lowSurrogate(value));
                            var tmp_4;
                            if (copied === max) {
                              tmp_4 = false;
                            } else {
                              out.w5(tmp6__anonymous__fv9ai5);
                              var tmp0_2 = copied;
                              copied = tmp0_2 + 1 | 0;
                              tmp_4 = true;
                            }
                            tmp$ret$8 = tmp_4;
                            tmp_2 = !tmp$ret$8;
                          }
                          if (tmp_2) {
                            tmp3__anonymous__ufb84q.s25(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                            tmp$ret$5 = -1;
                            break $l$block_3;
                          }
                        }
                        value = 0;
                      }
                    }
                  }
                   while (inductionVariable < tmp2__anonymous__z9zvc9);
                tmp$ret$9 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
                var rc = tmp$ret$9;
                tmp3__anonymous__ufb84q.s25(rc);
                tmp$ret$10 = rc;
                tmp$ret$5 = 0;
              }
              var size_0 = tmp$ret$5;
              tmp$ret$11 = size_0 === 0 ? 1 : size_0 > 0 ? size_0 : 0;
              size = tmp$ret$11;
            }finally {
              var tmp$ret$12;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$12 = tmp1__get_readRemaining__qliyus.q1z_1 - tmp1__get_readRemaining__qliyus.p1z_1 | 0;
              after = tmp$ret$12;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_5;
          if (after === 0) {
            tmp_5 = prepareReadNextHead($this, current);
          } else {
            var tmp_6;
            if (after < size) {
              tmp_6 = true;
            } else {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$13 = tmp2__get_endGap__m31424.t1z_1 - tmp2__get_endGap__m31424.s1z_1 | 0;
              var tmp_7 = tmp$ret$13;
              Companion_getInstance_1();
              tmp_6 = tmp_7 < 8;
            }
            if (tmp_6) {
              completeReadHead($this, current);
              tmp_5 = prepareReadFirstHead($this, size);
            } else {
              tmp_5 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_5;
          var tmp_8;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_8 = tmp1_elvis_lhs;
          }
          var next = tmp_8;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead($this, current);
        }
      }
    }
    if (copied < min) {
      prematureEndOfStreamChars($this, min, copied);
    }
    return copied;
  }
  function discardAsMuchAsPossible($this, n, skipped) {
    var $this_0 = $this;
    var n_0 = n;
    var skipped_0 = skipped;
    $l$1: do {
      $l$0: do {
        if (n_0.equals(new Long(0, 0)))
          return skipped_0;
        var tmp0_elvis_lhs = $this_0.n28(1);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return skipped_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var current = tmp;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = current.q1z_1 - current.p1z_1 | 0;
        var tmp0_minOf = toLong(tmp$ret$0);
        tmp$ret$1 = tmp0_minOf.f1(n_0) <= 0 ? tmp0_minOf : n_0;
        var size = tmp$ret$1.o6();
        current.s25(size);
        var tmp1_this = $this_0;
        tmp1_this.c21_1 = tmp1_this.c21_1 + size | 0;
        afterRead($this_0, current);
        var tmp0 = $this_0;
        var tmp$ret$2;
        // Inline function 'kotlin.Long.minus' call
        tmp$ret$2 = n_0.b6(toLong(size));
        var tmp1 = tmp$ret$2;
        var tmp$ret$3;
        // Inline function 'kotlin.Long.plus' call
        tmp$ret$3 = skipped_0.a6(toLong(size));
        var tmp2 = tmp$ret$3;
        $this_0 = tmp0;
        n_0 = tmp1;
        skipped_0 = tmp2;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function discardAsMuchAsPossible_0($this, n, skipped) {
    var currentCount = n;
    var currentSkipped = skipped;
    while (true) {
      if (currentCount === 0) {
        return currentSkipped;
      }
      var tmp0_elvis_lhs = $this.n28(1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return currentSkipped;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var tmp$ret$1;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = current.q1z_1 - current.p1z_1 | 0;
      var tmp0_minOf = tmp$ret$0;
      var tmp1_minOf = currentCount;
      tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
      var size = tmp$ret$1;
      current.s25(size);
      var tmp1_this = $this;
      tmp1_this.c21_1 = tmp1_this.c21_1 + size | 0;
      afterRead($this, current);
      currentCount = currentCount - size | 0;
      currentSkipped = currentSkipped + size | 0;
    }
  }
  function fixGapAfterReadFallback($this, current) {
    if ($this.f21_1 ? current.y26() == null : false) {
      $this.c21_1 = current.p1z_1;
      $this.d21_1 = current.q1z_1;
      $this.a28(new Long(0, 0));
      return Unit_getInstance();
    }
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.q1z_1 - current.p1z_1 | 0;
    var size = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.t1z_1 - current.s1z_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(size, tmp0_minOf);
    var overrun = tmp$ret$2;
    if (size > overrun) {
      fixGapAfterReadFallbackUnreserved($this, current, size, overrun);
    } else {
      var new_0 = $this.z20_1.s24();
      Companion_getInstance_1();
      new_0.y25(8);
      new_0.p28(current.d27());
      writeBufferAppend(new_0, current, size);
      _set__head__b4pap2($this, new_0);
    }
    current.f25($this.z20_1);
  }
  function fixGapAfterReadFallbackUnreserved($this, current, size, overrun) {
    var chunk1 = $this.z20_1.s24();
    var chunk2 = $this.z20_1.s24();
    Companion_getInstance_1();
    chunk1.y25(8);
    Companion_getInstance_1();
    chunk2.y25(8);
    chunk1.p28(chunk2);
    chunk2.p28(current.d27());
    writeBufferAppend(chunk1, current, size - overrun | 0);
    writeBufferAppend(chunk2, current, overrun);
    _set__head__b4pap2($this, chunk1);
    $this.a28(remainingAll(chunk2));
  }
  function ensureNext($this, current, empty) {
    var $this_0 = $this;
    var current_0 = current;
    var empty_0 = empty;
    $l$1: do {
      $l$0: do {
        if (current_0 === empty_0) {
          return doFill($this_0);
        }
        var next = current_0.d27();
        current_0.f25($this_0.z20_1);
        var tmp;
        if (next == null) {
          _set__head__b4pap2($this_0, empty_0);
          $this_0.a28(new Long(0, 0));
          var tmp0 = $this_0;
          var tmp1 = empty_0;
          var tmp2 = empty_0;
          $this_0 = tmp0;
          current_0 = tmp1;
          empty_0 = tmp2;
          continue $l$0;
        } else {
          var tmp$ret$0;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$0 = next.q1z_1 > next.p1z_1;
          if (tmp$ret$0) {
            _set__head__b4pap2($this_0, next);
            var tmp0_this = $this_0;
            var tmp$ret$2;
            // Inline function 'kotlin.Long.minus' call
            var tmp0_minus = tmp0_this.e21_1;
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            tmp$ret$1 = next.q1z_1 - next.p1z_1 | 0;
            var tmp1_minus = tmp$ret$1;
            tmp$ret$2 = tmp0_minus.b6(toLong(tmp1_minus));
            tmp0_this.a28(tmp$ret$2);
            tmp = next;
          } else {
            var tmp3 = $this_0;
            var tmp4 = next;
            var tmp5 = empty_0;
            $this_0 = tmp3;
            current_0 = tmp4;
            empty_0 = tmp5;
            continue $l$0;
          }
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function doFill($this) {
    if ($this.f21_1)
      return null;
    var chunk = $this.w27();
    if (chunk == null) {
      $this.f21_1 = true;
      return null;
    }
    appendView($this, chunk);
    return chunk;
  }
  function appendView($this, chunk) {
    var tail = findTail($this.a21_1);
    if (tail === Companion_getInstance_4().d1w_1) {
      _set__head__b4pap2($this, chunk);
      // Inline function 'kotlin.require' call
      var tmp0_require = $this.e21_1.equals(new Long(0, 0));
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        throw IllegalStateException_init_$Create$('It should be no tail remaining bytes if current tail is EmptyBuffer');
      }
      var tmp0_safe_receiver = chunk.y26();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : remainingAll(tmp0_safe_receiver);
      $this.a28(tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs);
    } else {
      tail.p28(chunk);
      var tmp2_this = $this;
      tmp2_this.a28(tmp2_this.e21_1.a6(remainingAll(chunk)));
    }
  }
  function prepareReadLoop($this, minSize, head) {
    var $this_0 = $this;
    var minSize_0 = minSize;
    var head_0 = head;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
        tmp$ret$0 = $this_0.d21_1 - $this_0.c21_1 | 0;
        var headSize = tmp$ret$0;
        if (headSize >= minSize_0)
          return head_0;
        var tmp0_elvis_lhs = head_0.y26();
        var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? doFill($this_0) : tmp0_elvis_lhs;
        var tmp;
        if (tmp1_elvis_lhs == null) {
          return null;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        var next = tmp;
        if (headSize === 0) {
          if (!(head_0 === Companion_getInstance_4().d1w_1)) {
            $this_0.o28(head_0);
          }
          var tmp0 = $this_0;
          var tmp1 = minSize_0;
          var tmp2 = next;
          $this_0 = tmp0;
          minSize_0 = tmp1;
          head_0 = tmp2;
          continue $l$0;
        } else {
          var desiredExtraBytes = minSize_0 - headSize | 0;
          var copied = writeBufferAppend(head_0, next, desiredExtraBytes);
          $this_0.d21_1 = head_0.q1z_1;
          var tmp2_this = $this_0;
          var tmp$ret$1;
          // Inline function 'kotlin.Long.minus' call
          var tmp0_minus = tmp2_this.e21_1;
          tmp$ret$1 = tmp0_minus.b6(toLong(copied));
          tmp2_this.a28(tmp$ret$1);
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.canRead' call
          tmp$ret$2 = next.q1z_1 > next.p1z_1;
          if (!tmp$ret$2) {
            head_0.p28(null);
            head_0.p28(next.d27());
            next.f25($this_0.z20_1);
          } else {
            next.x25(copied);
          }
        }
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$3 = head_0.q1z_1 - head_0.p1z_1 | 0;
        if (tmp$ret$3 >= minSize_0)
          return head_0;
        var tmp_0 = minSize_0;
        Companion_getInstance_1();
        if (tmp_0 > 8) {
          minSizeIsTooBig($this_0, minSize_0);
        }
        var tmp3 = $this_0;
        var tmp4 = minSize_0;
        var tmp5 = head_0;
        $this_0 = tmp3;
        minSize_0 = tmp4;
        head_0 = tmp5;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function minSizeIsTooBig($this, minSize) {
    Companion_getInstance_1();
    throw IllegalStateException_init_$Create$('minSize of ' + minSize + ' is too big (should be less than ' + 8 + ')');
  }
  function afterRead($this, head) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = head.q1z_1 - head.p1z_1 | 0;
    if (tmp$ret$0 === 0) {
      $this.o28(head);
    }
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_3() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Input(head, remaining, pool) {
    Companion_getInstance_3();
    this.z20_1 = pool;
    this.a21_1 = head;
    this.b21_1 = head.o1z_1;
    this.c21_1 = head.p1z_1;
    this.d21_1 = head.q1z_1;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = this.d21_1 - this.c21_1 | 0;
    tmp$ret$0 = remaining.b6(toLong(tmp0_minus));
    tmp.e21_1 = tmp$ret$0;
    this.f21_1 = false;
  }
  Input.prototype.t22 = function () {
    var tmp;
    var tmp_0;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.d21_1 - this.c21_1 | 0;
    if (tmp$ret$0 === 0) {
      tmp_0 = this.e21_1.equals(new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.f21_1 ? true : doFill(this) == null;
    } else {
      tmp = false;
    }
    return tmp;
  };
  Input.prototype.i27 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.a21_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.<get-head>.<anonymous>' call
    tmp0_also.v25(this.c21_1);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Input.prototype.z27 = function () {
    return this.c21_1;
  };
  Input.prototype.a28 = function (newValue) {
    // Inline function 'kotlin.require' call
    var tmp0_require = newValue.f1(new Long(0, 0)) >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.<set-tailRemaining>.<anonymous>' call
      tmp$ret$0 = "tailRemaining shouldn't be negative: " + toString(newValue);
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.e21_1 = newValue;
  };
  Input.prototype.b28 = function () {
    return this.d21_1 - this.c21_1 | 0;
  };
  Input.prototype.g21 = function () {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = this.d21_1 - this.c21_1 | 0;
    return toLong(tmp$ret$0).a6(this.e21_1);
  };
  Input.prototype.v21 = function () {
    return !(this.c21_1 === this.d21_1) ? true : !this.e21_1.equals(new Long(0, 0));
  };
  Input.prototype.t12 = function () {
    var head = this.i27();
    var empty = Companion_getInstance_4().d1w_1;
    if (!(head === empty)) {
      _set__head__b4pap2(this, empty);
      this.a28(new Long(0, 0));
      releaseAll(head, this.z20_1);
    }
  };
  Input.prototype.i1u = function () {
    this.t12();
    if (!this.f21_1) {
      this.f21_1 = true;
    }
    this.y27();
  };
  Input.prototype.n1x = function () {
    var head = this.i27();
    var empty = Companion_getInstance_4().d1w_1;
    if (head === empty)
      return null;
    _set__head__b4pap2(this, empty);
    this.a28(new Long(0, 0));
    return head;
  };
  Input.prototype.c28 = function () {
    var head = this.i27();
    var next = head.y26();
    var empty = Companion_getInstance_4().d1w_1;
    if (head === empty)
      return null;
    if (next == null) {
      _set__head__b4pap2(this, empty);
      this.a28(new Long(0, 0));
    } else {
      _set__head__b4pap2(this, next);
      var tmp0_this = this;
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp0_minus = tmp0_this.e21_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = next.q1z_1 - next.p1z_1 | 0;
      var tmp1_minus = tmp$ret$0;
      tmp$ret$1 = tmp0_minus.b6(toLong(tmp1_minus));
      tmp0_this.a28(tmp$ret$1);
    }
    head.p28(null);
    return head;
  };
  Input.prototype.d28 = function (chain) {
    if (chain === Companion_getInstance_4().d1w_1)
      return Unit_getInstance();
    var size = remainingAll(chain);
    if (this.a21_1 === Companion_getInstance_4().d1w_1) {
      _set__head__b4pap2(this, chain);
      var tmp$ret$1;
      // Inline function 'kotlin.Long.minus' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = this.d21_1 - this.c21_1 | 0;
      var tmp0_minus = tmp$ret$0;
      tmp$ret$1 = size.b6(toLong(tmp0_minus));
      this.a28(tmp$ret$1);
    } else {
      findTail(this.a21_1).p28(chain);
      var tmp0_this = this;
      tmp0_this.a28(tmp0_this.e21_1.a6(size));
    }
  };
  Input.prototype.e28 = function (chain) {
    var tail = findTail(this.i27());
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = chain.q1z_1 - chain.p1z_1 | 0;
    var size = tmp$ret$0;
    var tmp;
    if (size === 0) {
      tmp = true;
    } else {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$1 = tail.s1z_1 - tail.q1z_1 | 0;
      tmp = tmp$ret$1 < size;
    }
    if (tmp)
      return false;
    writeBufferAppend(tail, chain, size);
    if (this.i27() === tail) {
      this.d21_1 = tail.q1z_1;
    } else {
      var tmp0_this = this;
      var tmp$ret$2;
      // Inline function 'kotlin.Long.plus' call
      var tmp0_plus = tmp0_this.e21_1;
      tmp$ret$2 = tmp0_plus.a6(toLong(size));
      tmp0_this.a28(tmp$ret$2);
    }
    return true;
  };
  Input.prototype.f28 = function (n) {
    // Inline function 'kotlin.require' call
    var tmp0_require = n >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.discard.<anonymous>' call
      tmp$ret$0 = 'Negative discard is not allowed: ' + n;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return discardAsMuchAsPossible_0(this, n, 0);
  };
  Input.prototype.s25 = function (n) {
    if (!(this.f28(n) === n))
      throw new EOFException('Unable to discard ' + n + ' bytes due to end of packet');
  };
  Input.prototype.g28 = function (n) {
    if (n.f1(new Long(0, 0)) <= 0)
      return new Long(0, 0);
    return discardAsMuchAsPossible(this, n, new Long(0, 0));
  };
  Input.prototype.h28 = function (min, max) {
    if (min === 0 ? max === 0 ? true : this.t22() : false)
      return '';
    var remaining = this.g21();
    if (remaining.f1(new Long(0, 0)) > 0 ? toLong(max).f1(remaining) >= 0 : false) {
      var tmp = remaining.o6();
      return readTextExactBytes$default(this, tmp, null, 2, null);
    }
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp0_buildString = coerceAtMost(coerceAtLeast(min, 16), max);
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.Input.readText.<anonymous>' call
    readASCII(this, tmp0_apply, min, max);
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  Input.prototype.i28 = function (min, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      min = 0;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return this.h28(min, max);
  };
  Input.prototype.j28 = function (minSize) {
    return prepareReadLoop(this, minSize, this.i27());
  };
  Input.prototype.k28 = function (current) {
    return this.l28(current);
  };
  Input.prototype.l28 = function (current) {
    return ensureNext(this, current, Companion_getInstance_4().d1w_1);
  };
  Input.prototype.m28 = function (current) {
    var tmp0_elvis_lhs = current.y26();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return fixGapAfterReadFallback(this, current);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = current.q1z_1 - current.p1z_1 | 0;
    var remaining = tmp$ret$0;
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.minOf' call
    Companion_getInstance_1();
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
    tmp$ret$1 = current.t1z_1 - current.s1z_1 | 0;
    var tmp0_minOf = 8 - tmp$ret$1 | 0;
    tmp$ret$2 = Math.min(remaining, tmp0_minOf);
    var overrunSize = tmp$ret$2;
    if (next.r1z_1 < overrunSize) {
      return fixGapAfterReadFallback(this, current);
    }
    restoreStartGap(next, overrunSize);
    if (remaining > overrunSize) {
      current.e26();
      this.d21_1 = current.q1z_1;
      var tmp1_this = this;
      var tmp$ret$3;
      // Inline function 'kotlin.Long.plus' call
      var tmp1_plus = tmp1_this.e21_1;
      tmp$ret$3 = tmp1_plus.a6(toLong(overrunSize));
      tmp1_this.a28(tmp$ret$3);
    } else {
      _set__head__b4pap2(this, next);
      var tmp2_this = this;
      var tmp$ret$5;
      // Inline function 'kotlin.Long.minus' call
      var tmp2_minus = tmp2_this.e21_1;
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$4 = next.q1z_1 - next.p1z_1 | 0;
      var tmp3_minus = tmp$ret$4 - overrunSize | 0;
      tmp$ret$5 = tmp2_minus.b6(toLong(tmp3_minus));
      tmp2_this.a28(tmp$ret$5);
      current.d27();
      current.f25(this.z20_1);
    }
  };
  Input.prototype.w27 = function () {
    var buffer = this.z20_1.s24();
    try {
      Companion_getInstance_1();
      buffer.y25(8);
      var tmp = buffer.q1z_1;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$0 = buffer.s1z_1 - buffer.q1z_1 | 0;
      var copied = this.x27(buffer.o1z_1, tmp, tmp$ret$0);
      if (copied === 0) {
        this.f21_1 = true;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.canRead' call
        tmp$ret$1 = buffer.q1z_1 > buffer.p1z_1;
        if (!tmp$ret$1) {
          buffer.f25(this.z20_1);
          return null;
        }
      }
      buffer.t25(copied);
      return buffer;
    } catch ($p) {
      if ($p instanceof Error) {
        buffer.f25(this.z20_1);
        throw $p;
      } else {
        throw $p;
      }
    }
  };
  Input.prototype.o27 = function () {
    if (!this.f21_1) {
      this.f21_1 = true;
    }
  };
  Input.prototype.n28 = function (minSize) {
    var head = this.i27();
    if ((this.d21_1 - this.c21_1 | 0) >= minSize)
      return head;
    return prepareReadLoop(this, minSize, head);
  };
  Input.prototype.o28 = function (head) {
    var tmp0_elvis_lhs = head.d27();
    var next = tmp0_elvis_lhs == null ? Companion_getInstance_4().d1w_1 : tmp0_elvis_lhs;
    _set__head__b4pap2(this, next);
    var tmp1_this = this;
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = tmp1_this.e21_1;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = next.q1z_1 - next.p1z_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.b6(toLong(tmp1_minus));
    tmp1_this.a28(tmp$ret$1);
    head.f25(this.z20_1);
    return next;
  };
  Input.$metadata$ = classMeta('Input', [Closeable]);
  function takeWhile(_this__u8e3s4, block) {
    var release = true;
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    try {
      $l$loop_0: do {
        if (!block(current)) {
          break $l$loop_0;
        }
        release = false;
        var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var next = tmp_0;
        current = next;
        release = true;
      }
       while (true);
    }finally {
      if (release) {
        completeReadHead(_this__u8e3s4, current);
      }
    }
  }
  function takeWhileSize(_this__u8e3s4, initialSize, block) {
    var release = true;
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, initialSize);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var current = tmp;
    var size = initialSize;
    try {
      $l$loop: do {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        var tmp0__get_readRemaining__u3cy9h = current;
        tmp$ret$0 = tmp0__get_readRemaining__u3cy9h.q1z_1 - tmp0__get_readRemaining__u3cy9h.p1z_1 | 0;
        var before = tmp$ret$0;
        var after;
        if (before >= size) {
          try {
            size = block(current);
          }finally {
            var tmp$ret$1;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp1__get_readRemaining__qliyus = current;
            tmp$ret$1 = tmp1__get_readRemaining__qliyus.q1z_1 - tmp1__get_readRemaining__qliyus.p1z_1 | 0;
            after = tmp$ret$1;
          }
        } else {
          after = before;
        }
        release = false;
        var tmp_0;
        if (after === 0) {
          tmp_0 = prepareReadNextHead(_this__u8e3s4, current);
        } else {
          var tmp_1;
          if (after < size) {
            tmp_1 = true;
          } else {
            var tmp$ret$2;
            // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
            var tmp2__get_endGap__m31424 = current;
            tmp$ret$2 = tmp2__get_endGap__m31424.t1z_1 - tmp2__get_endGap__m31424.s1z_1 | 0;
            var tmp_2 = tmp$ret$2;
            Companion_getInstance_1();
            tmp_1 = tmp_2 < 8;
          }
          if (tmp_1) {
            completeReadHead(_this__u8e3s4, current);
            tmp_0 = prepareReadFirstHead(_this__u8e3s4, size);
          } else {
            tmp_0 = current;
          }
        }
        var tmp1_elvis_lhs = tmp_0;
        var tmp_3;
        if (tmp1_elvis_lhs == null) {
          break $l$loop;
        } else {
          tmp_3 = tmp1_elvis_lhs;
        }
        var next = tmp_3;
        current = next;
        release = true;
      }
       while (size > 0);
    }finally {
      if (release) {
        completeReadHead(_this__u8e3s4, current);
      }
    }
  }
  function discard(_this__u8e3s4) {
    Companion_getInstance();
    return _this__u8e3s4.g28(new Long(-1, 2147483647));
  }
  function readFully_2(_this__u8e3s4, dst, offset, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = offset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.q1z_1 - tmp0__anonymous__q1qw7t.p1z_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully_0(tmp0__anonymous__q1qw7t, dst, tmp1__anonymous__uwfjfc, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$4 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$4;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function readFully_3(_this__u8e3s4, dst, length) {
    // Inline function 'io.ktor.utils.io.core.requireNoRemaining' call
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate' call
    var remaining = length;
    var dstOffset = 0;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$3;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$2 = tmp0__anonymous__q1qw7t.q1z_1 - tmp0__anonymous__q1qw7t.p1z_1 | 0;
          var tmp1_minOf = tmp$ret$2;
          tmp$ret$3 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFully.<anonymous>' call
          var tmp1__anonymous__uwfjfc = dstOffset;
          readFully_1(tmp0__anonymous__q1qw7t, dst, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$4 = remaining > 0;
          if (!tmp$ret$4) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    tmp$ret$5 = remaining;
    var tmp2_requireNoRemaining = tmp$ret$5;
    if (tmp2_requireNoRemaining > 0) {
      prematureEndOfStream(tmp2_requireNoRemaining);
    }
  }
  function requireNoRemaining(_this__u8e3s4) {
    if (_this__u8e3s4 > 0) {
      prematureEndOfStream(_this__u8e3s4);
    }
  }
  function readFullyBytesTemplate(_this__u8e3s4, initialDstOffset, length, readBlock) {
    var remaining = length;
    var dstOffset = initialDstOffset;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhile' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      try {
        $l$loop_0: do {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.core.readFullyBytesTemplate.<anonymous>' call
          var tmp0__anonymous__q1qw7t = current;
          var tmp$ret$2;
          // Inline function 'kotlin.comparisons.minOf' call
          var tmp0_minOf = remaining;
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          tmp$ret$1 = tmp0__anonymous__q1qw7t.q1z_1 - tmp0__anonymous__q1qw7t.p1z_1 | 0;
          var tmp1_minOf = tmp$ret$1;
          tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
          var count = tmp$ret$2;
          readBlock(tmp0__anonymous__q1qw7t, dstOffset, count);
          remaining = remaining - count | 0;
          dstOffset = dstOffset + count | 0;
          tmp$ret$3 = remaining > 0;
          if (!tmp$ret$3) {
            break $l$loop_0;
          }
          release = false;
          var tmp1_elvis_lhs = prepareReadNextHead(_this__u8e3s4, current);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            break $l$loop_0;
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var next = tmp_0;
          current = next;
          release = true;
        }
         while (true);
      }finally {
        if (release) {
          completeReadHead(_this__u8e3s4, current);
        }
      }
    }
    return remaining;
  }
  function readShort_0(_this__u8e3s4) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.readPrimitive' call
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = _this__u8e3s4.d21_1 - _this__u8e3s4.c21_1 | 0;
      if (tmp$ret$0 > 2) {
        var index = _this__u8e3s4.c21_1;
        _this__u8e3s4.c21_1 = index + 2 | 0;
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.b21_1;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.loadShortAt' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.o24_1.getInt16(index, false);
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.readShort.<anonymous>' call
      tmp$ret$4 = readShortFallback(_this__u8e3s4);
      tmp$ret$3 = tmp$ret$4;
    }
    return tmp$ret$3;
  }
  function readPrimitive(_this__u8e3s4, size, main, fallback) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = _this__u8e3s4.d21_1 - _this__u8e3s4.c21_1 | 0;
    if (tmp$ret$0 > size) {
      var index = _this__u8e3s4.c21_1;
      _this__u8e3s4.c21_1 = index + size | 0;
      return main(_this__u8e3s4.b21_1, index);
    }
    return fallback();
  }
  function readShortFallback(_this__u8e3s4) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.readPrimitiveFallback' call
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, 2);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readShortFallback.<anonymous>' call
    tmp$ret$0 = readShort(head);
    var value = tmp$ret$0;
    completeReadHead(_this__u8e3s4, head);
    tmp$ret$1 = value;
    return tmp$ret$1;
  }
  function readPrimitiveFallback(_this__u8e3s4, size, read) {
    var tmp0_elvis_lhs = prepareReadFirstHead(_this__u8e3s4, size);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(size);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var value = read(head);
    completeReadHead(_this__u8e3s4, head);
    return value;
  }
  function flushChain($this) {
    var tmp0_elvis_lhs = $this.n1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var oldTail = tmp;
    try {
      // Inline function 'io.ktor.utils.io.core.forEachChunk' call
      // Inline function 'kotlin.contracts.contract' call
      var current = oldTail;
      $l$loop: do {
        // Inline function 'io.ktor.utils.io.core.Output.flushChain.<anonymous>' call
        var tmp0__anonymous__q1qw7t = current;
        var tmp_0 = tmp0__anonymous__q1qw7t.p1z_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.q1z_1 - tmp0__anonymous__q1qw7t.p1z_1 | 0;
        $this.g27(tmp0__anonymous__q1qw7t.o1z_1, tmp_0, tmp$ret$0);
        var tmp0_elvis_lhs_0 = current.y26();
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          break $l$loop;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }
        current = tmp_1;
      }
       while (true);
    }finally {
      releaseAll(oldTail, $this.f1x_1);
    }
  }
  function appendNewChunk($this) {
    var new_0 = $this.f1x_1.s24();
    Companion_getInstance_1();
    new_0.y25(8);
    $this.e25(new_0);
    return new_0;
  }
  function appendChainImpl($this, head, newTail, chainedSizeDelta) {
    var _tail = $this.h1x_1;
    if (_tail == null) {
      $this.g1x_1 = head;
      $this.m1x_1 = 0;
    } else {
      _tail.p28(head);
      var tailPosition = $this.j1x_1;
      _tail.u25(tailPosition);
      var tmp0_this = $this;
      tmp0_this.m1x_1 = tmp0_this.m1x_1 + (tailPosition - $this.l1x_1 | 0) | 0;
    }
    $this.h1x_1 = newTail;
    var tmp1_this = $this;
    tmp1_this.m1x_1 = tmp1_this.m1x_1 + chainedSizeDelta | 0;
    $this.i1x_1 = newTail.o1z_1;
    $this.j1x_1 = newTail.q1z_1;
    $this.l1x_1 = newTail.p1z_1;
    $this.k1x_1 = newTail.s1z_1;
  }
  function writeByteFallback($this, v) {
    appendNewChunk($this).h26(v);
    var tmp0_this = $this;
    var tmp1 = tmp0_this.j1x_1;
    tmp0_this.j1x_1 = tmp1 + 1 | 0;
  }
  function appendCharFallback($this, c) {
    var tmp$ret$13;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.Output.write' call
      var buffer = $this.l27(3);
      try {
        var tmp$ret$11;
        // Inline function 'io.ktor.utils.io.core.Output.appendCharFallback.<anonymous>' call
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
        var tmp16_putUtf8Char = buffer.o1z_1;
        var tmp17_putUtf8Char = buffer.q1z_1;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(c);
        var tmp18_putUtf8Char = tmp$ret$0;
        var tmp0_subject = tmp18_putUtf8Char;
        var tmp;
        if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
          // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
          var tmp0_storeAt = toByte(tmp18_putUtf8Char);
          tmp16_putUtf8Char.o24_1.setInt8(tmp17_putUtf8Char, tmp0_storeAt);
          tmp = 1;
        } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp1_set = toByte(192 | tmp18_putUtf8Char >> 6 & 31);
          tmp16_putUtf8Char.o24_1.setInt8(tmp17_putUtf8Char, tmp1_set);
          tmp$ret$1 = Unit_getInstance();
          var tmp$ret$2;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp2_set = tmp17_putUtf8Char + 1 | 0;
          var tmp3_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.o24_1.setInt8(tmp2_set, tmp3_set);
          tmp$ret$2 = Unit_getInstance();
          tmp = 2;
        } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
          var tmp$ret$3;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp4_set = toByte(224 | tmp18_putUtf8Char >> 12 & 15);
          tmp16_putUtf8Char.o24_1.setInt8(tmp17_putUtf8Char, tmp4_set);
          tmp$ret$3 = Unit_getInstance();
          var tmp$ret$4;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp5_set = tmp17_putUtf8Char + 1 | 0;
          var tmp6_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.o24_1.setInt8(tmp5_set, tmp6_set);
          tmp$ret$4 = Unit_getInstance();
          var tmp$ret$5;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp7_set = tmp17_putUtf8Char + 2 | 0;
          var tmp8_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.o24_1.setInt8(tmp7_set, tmp8_set);
          tmp$ret$5 = Unit_getInstance();
          tmp = 3;
        } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
          var tmp$ret$6;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp9_set = toByte(240 | tmp18_putUtf8Char >> 18 & 7);
          tmp16_putUtf8Char.o24_1.setInt8(tmp17_putUtf8Char, tmp9_set);
          tmp$ret$6 = Unit_getInstance();
          var tmp$ret$7;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp10_set = tmp17_putUtf8Char + 1 | 0;
          var tmp11_set = toByte(128 | tmp18_putUtf8Char >> 12 & 63);
          tmp16_putUtf8Char.o24_1.setInt8(tmp10_set, tmp11_set);
          tmp$ret$7 = Unit_getInstance();
          var tmp$ret$8;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp12_set = tmp17_putUtf8Char + 2 | 0;
          var tmp13_set = toByte(128 | tmp18_putUtf8Char >> 6 & 63);
          tmp16_putUtf8Char.o24_1.setInt8(tmp12_set, tmp13_set);
          tmp$ret$8 = Unit_getInstance();
          var tmp$ret$9;
          // Inline function 'io.ktor.utils.io.bits.set' call
          var tmp14_set = tmp17_putUtf8Char + 3 | 0;
          var tmp15_set = toByte(128 | tmp18_putUtf8Char & 63);
          tmp16_putUtf8Char.o24_1.setInt8(tmp14_set, tmp15_set);
          tmp$ret$9 = Unit_getInstance();
          tmp = 4;
        } else {
          malformedCodePoint(tmp18_putUtf8Char);
        }
        tmp$ret$10 = tmp;
        var size = tmp$ret$10;
        buffer.t25(size);
        tmp$ret$11 = size;
        var result = tmp$ret$11;
        // Inline function 'kotlin.check' call
        var tmp0_check = result >= 0;
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_check) {
          var tmp$ret$12;
          // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
          tmp$ret$12 = "The returned value shouldn't be negative";
          var message = tmp$ret$12;
          throw IllegalStateException_init_$Create$(toString(message));
        }
        tmp$ret$13 = result;
        break $l$block;
      }finally {
        $this.g25();
      }
    }
  }
  function writePacketMerging($this, tail, foreignStolen, pool) {
    tail.u25($this.j1x_1);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.q1z_1 - tail.p1z_1 | 0;
    var lastSize = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$1 = foreignStolen.q1z_1 - foreignStolen.p1z_1 | 0;
    var nextSize = tmp$ret$1;
    var maxCopySize = get_PACKET_MAX_COPY_SIZE();
    var tmp;
    var tmp_0;
    if (nextSize < maxCopySize) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$2 = tail.t1z_1 - tail.s1z_1 | 0;
      var tmp_1 = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$3 = tail.s1z_1 - tail.q1z_1 | 0;
      tmp_0 = nextSize <= (tmp_1 + tmp$ret$3 | 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = nextSize;
    } else {
      tmp = -1;
    }
    var appendSize = tmp;
    var tmp_2;
    if ((lastSize < maxCopySize ? lastSize <= foreignStolen.r1z_1 : false) ? isExclusivelyOwned(foreignStolen) : false) {
      tmp_2 = lastSize;
    } else {
      tmp_2 = -1;
    }
    var prependSize = tmp_2;
    if (appendSize === -1 ? prependSize === -1 : false) {
      $this.k27(foreignStolen);
    } else if (prependSize === -1 ? true : appendSize <= prependSize) {
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      tmp$ret$4 = tail.s1z_1 - tail.q1z_1 | 0;
      var tmp_3 = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
      tmp$ret$5 = tail.t1z_1 - tail.s1z_1 | 0;
      writeBufferAppend(tail, foreignStolen, tmp_3 + tmp$ret$5 | 0);
      $this.g25();
      var tmp0_safe_receiver = foreignStolen.d27();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$6;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        $this.k27(tmp0_safe_receiver);
        tmp$ret$6 = Unit_getInstance();
      }
      foreignStolen.f25(pool);
    } else if (appendSize === -1 ? true : prependSize < appendSize) {
      writePacketSlowPrepend($this, foreignStolen, tail);
    } else {
      throw IllegalStateException_init_$Create$('prep = ' + prependSize + ', app = ' + appendSize);
    }
  }
  function writePacketSlowPrepend($this, foreignStolen, tail) {
    writeBufferPrepend(foreignStolen, tail);
    var tmp0_elvis_lhs = $this.g1x_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$("head should't be null since it is already handled in the fast-path");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _head = tmp;
    if (_head === tail) {
      $this.g1x_1 = foreignStolen;
    } else {
      var pre = _head;
      $l$loop: while (true) {
        var next = ensureNotNull(pre.y26());
        if (next === tail)
          break $l$loop;
        pre = next;
      }
      pre.p28(foreignStolen);
    }
    tail.f25($this.f1x_1);
    $this.h1x_1 = findTail(foreignStolen);
  }
  function Output(pool) {
    this.f1x_1 = pool;
    this.g1x_1 = null;
    this.h1x_1 = null;
    this.i1x_1 = Companion_getInstance_6().q28_1;
    this.j1x_1 = 0;
    this.k1x_1 = 0;
    this.l1x_1 = 0;
    this.m1x_1 = 0;
  }
  Output.prototype.e27 = function () {
    return this.m1x_1 + (this.j1x_1 - this.l1x_1 | 0) | 0;
  };
  Output.prototype.i27 = function () {
    var tmp0_elvis_lhs = this.g1x_1;
    return tmp0_elvis_lhs == null ? Companion_getInstance_4().d1w_1 : tmp0_elvis_lhs;
  };
  Output.prototype.j27 = function () {
    return this.k1x_1 - this.j1x_1 | 0;
  };
  Output.prototype.ee = function () {
    flushChain(this);
  };
  Output.prototype.n1x = function () {
    var tmp0_elvis_lhs = this.g1x_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1_safe_receiver = this.h1x_1;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.u25(this.j1x_1);
    this.g1x_1 = null;
    this.h1x_1 = null;
    this.j1x_1 = 0;
    this.k1x_1 = 0;
    this.l1x_1 = 0;
    this.m1x_1 = 0;
    this.i1x_1 = Companion_getInstance_6().q28_1;
    return head;
  };
  Output.prototype.e25 = function (buffer) {
    // Inline function 'kotlin.check' call
    var tmp0_check = buffer.y26() == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Output.appendSingleChunk.<anonymous>' call
      tmp$ret$0 = 'It should be a single buffer chunk.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    appendChainImpl(this, buffer, buffer, 0);
  };
  Output.prototype.k27 = function (head) {
    var tail = findTail(head);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.toIntOrFail' call
    var tmp$ret$1;
    // Inline function 'kotlin.Long.minus' call
    var tmp0_minus = remainingAll(head);
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
    tmp$ret$0 = tail.q1z_1 - tail.p1z_1 | 0;
    var tmp1_minus = tmp$ret$0;
    tmp$ret$1 = tmp0_minus.b6(toLong(tmp1_minus));
    var tmp2_toIntOrFail = tmp$ret$1;
    if (tmp2_toIntOrFail.f1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(tmp2_toIntOrFail, 'total size increase');
    }
    tmp$ret$2 = tmp2_toIntOrFail.o6();
    var chainedSizeDelta = tmp$ret$2;
    appendChainImpl(this, head, tail, chainedSizeDelta);
  };
  Output.prototype.h26 = function (v) {
    var index = this.j1x_1;
    if (index < this.k1x_1) {
      this.j1x_1 = index + 1 | 0;
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp0_set = this.i1x_1;
      tmp0_set.o24_1.setInt8(index, v);
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    }
    return writeByteFallback(this, v);
  };
  Output.prototype.i1u = function () {
    try {
      this.ee();
    }finally {
      this.f27();
    }
  };
  Output.prototype.w5 = function (value) {
    var tailPosition = this.j1x_1;
    if ((this.k1x_1 - tailPosition | 0) >= 3) {
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp16_putUtf8Char = this.i1x_1;
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(value);
      var tmp17_putUtf8Char = tmp$ret$0;
      var tmp0_subject = tmp17_putUtf8Char;
      var tmp;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(tmp17_putUtf8Char);
        tmp16_putUtf8Char.o24_1.setInt8(tailPosition, tmp0_storeAt);
        tmp = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | tmp17_putUtf8Char >> 6 & 31);
        tmp16_putUtf8Char.o24_1.setInt8(tailPosition, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tailPosition + 1 | 0;
        var tmp3_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.o24_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | tmp17_putUtf8Char >> 12 & 15);
        tmp16_putUtf8Char.o24_1.setInt8(tailPosition, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tailPosition + 1 | 0;
        var tmp6_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.o24_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tailPosition + 2 | 0;
        var tmp8_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.o24_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | tmp17_putUtf8Char >> 18 & 7);
        tmp16_putUtf8Char.o24_1.setInt8(tailPosition, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tailPosition + 1 | 0;
        var tmp11_set = toByte(128 | tmp17_putUtf8Char >> 12 & 63);
        tmp16_putUtf8Char.o24_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tailPosition + 2 | 0;
        var tmp13_set = toByte(128 | tmp17_putUtf8Char >> 6 & 63);
        tmp16_putUtf8Char.o24_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tailPosition + 3 | 0;
        var tmp15_set = toByte(128 | tmp17_putUtf8Char & 63);
        tmp16_putUtf8Char.o24_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp = 4;
      } else {
        malformedCodePoint(tmp17_putUtf8Char);
      }
      tmp$ret$10 = tmp;
      var size = tmp$ret$10;
      this.j1x_1 = tailPosition + size | 0;
      return this;
    }
    appendCharFallback(this, value);
    return this;
  };
  Output.prototype.c = function (value) {
    if (value == null) {
      this.lg('null', 0, 4);
    } else {
      this.lg(value, 0, charSequenceLength(value));
    }
    return this;
  };
  Output.prototype.lg = function (value, startIndex, endIndex) {
    if (value == null) {
      return this.lg('null', startIndex, endIndex);
    }
    writeText(this, value, startIndex, endIndex, Charsets_getInstance().r28_1);
    return this;
  };
  Output.prototype.t23 = function (packet) {
    var foreignStolen = packet.n1x();
    if (foreignStolen == null) {
      packet.t12();
      return Unit_getInstance();
    }
    var tail = this.h1x_1;
    if (tail == null) {
      this.k27(foreignStolen);
      return Unit_getInstance();
    }
    writePacketMerging(this, tail, foreignStolen, packet.z20_1);
  };
  Output.prototype.o1x = function (chunkBuffer) {
    var _tail = this.h1x_1;
    if (_tail == null) {
      this.k27(chunkBuffer);
      return Unit_getInstance();
    }
    writePacketMerging(this, _tail, chunkBuffer, this.f1x_1);
  };
  Output.prototype.h21 = function (p, n) {
    var remaining = n;
    $l$loop: while (remaining.f1(new Long(0, 0)) > 0) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
      tmp$ret$0 = p.d21_1 - p.c21_1 | 0;
      var headRemaining = toLong(tmp$ret$0);
      if (headRemaining.f1(remaining) <= 0) {
        remaining = remaining.b6(headRemaining);
        var tmp0_elvis_lhs = p.c28();
        var tmp;
        if (tmp0_elvis_lhs == null) {
          throw new EOFException('Unexpected end of packet');
        } else {
          tmp = tmp0_elvis_lhs;
        }
        this.e25(tmp);
      } else {
        // Inline function 'io.ktor.utils.io.core.read' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp0_elvis_lhs_0 = p.n28(1);
        var tmp_0;
        if (tmp0_elvis_lhs_0 == null) {
          prematureEndOfStream(1);
        } else {
          tmp_0 = tmp0_elvis_lhs_0;
        }
        var buffer = tmp_0;
        var positionBefore = buffer.p1z_1;
        try {
          // Inline function 'io.ktor.utils.io.core.Output.writePacket.<anonymous>' call
          writeFully_2(this, buffer, remaining.o6());
        }finally {
          var positionAfter = buffer.p1z_1;
          if (positionAfter < positionBefore) {
            throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
          }
          if (positionAfter === buffer.q1z_1) {
            p.l28(buffer);
          } else {
            p.c21_1 = positionAfter;
          }
        }
        break $l$loop;
      }
    }
  };
  Output.prototype.t12 = function () {
    this.i1u();
  };
  Output.prototype.l27 = function (n) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Output.tailRemaining' call
    tmp$ret$0 = this.k1x_1 - this.j1x_1 | 0;
    if (tmp$ret$0 >= n) {
      var tmp0_safe_receiver = this.h1x_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.u25(this.j1x_1);
        return tmp0_safe_receiver;
      }
    }
    return appendNewChunk(this);
  };
  Output.prototype.g25 = function () {
    var tmp0_safe_receiver = this.h1x_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.j1x_1 = tmp0_safe_receiver.q1z_1;
      tmp$ret$0 = Unit_getInstance();
    }
  };
  Output.prototype.m27 = function (size, block) {
    var buffer = this.l27(size);
    try {
      var result = block(buffer);
      // Inline function 'kotlin.check' call
      var tmp0_check = result >= 0;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Output.write.<anonymous>' call
        tmp$ret$0 = "The returned value shouldn't be negative";
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return result;
    }finally {
      this.g25();
    }
  };
  Output.prototype.n27 = function () {
    var head = this.i27();
    if (!(head === Companion_getInstance_4().d1w_1)) {
      // Inline function 'kotlin.check' call
      var tmp0_check = head.y26() == null;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$0 = 'Check failed.';
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      head.a26();
      Companion_getInstance_1();
      head.y25(8);
      this.j1x_1 = head.q1z_1;
      this.l1x_1 = this.j1x_1;
      this.k1x_1 = head.s1z_1;
    }
  };
  Output.$metadata$ = classMeta('Output', [Appendable, Closeable]);
  function writeWhileSize(_this__u8e3s4, initialSize, block) {
    var tail = prepareWriteHead(_this__u8e3s4, initialSize, null);
    try {
      var size;
      $l$loop: while (true) {
        size = block(tail);
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.g25();
    }
  }
  function writeWhile(_this__u8e3s4, block) {
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        if (!block(tail))
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.g25();
    }
  }
  function writeFully_2(_this__u8e3s4, src, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = 0;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$2;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$1 = tmp0__anonymous__q1qw7t.s1z_1 - tmp0__anonymous__q1qw7t.q1z_1 | 0;
        var tmp1_minOf = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_1(tmp0__anonymous__q1qw7t, src, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$3 = remaining > 0;
        if (!tmp$ret$3)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.g25();
    }
  }
  function writeFully$default(_this__u8e3s4, src, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
      tmp$ret$0 = src.q1z_1 - src.p1z_1 | 0;
      tmp$ret$0_0 = Unit_getInstance();
      length = tmp$ret$0;
    }
    return writeFully_2(_this__u8e3s4, src, length);
  }
  function writeFully_3(_this__u8e3s4, src, offset, length) {
    // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate' call
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.s1z_1 - tmp0__anonymous__q1qw7t.q1z_1 | 0;
        var tmp1_minOf = tmp$ret$0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
        var tmp1__anonymous__uwfjfc = currentOffset;
        writeFully_0(tmp0__anonymous__q1qw7t, src, tmp1__anonymous__uwfjfc, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$2 = remaining > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.g25();
    }
  }
  function writeFully$default_0(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.length - offset | 0;
    return writeFully_3(_this__u8e3s4, src, offset, length);
  }
  function writeFullyBytesTemplate(_this__u8e3s4, offset, length, block) {
    var currentOffset = offset;
    var remaining = length;
    // Inline function 'io.ktor.utils.io.core.writeWhile' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      $l$loop: while (true) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.core.writeFullyBytesTemplate.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var tmp$ret$1;
        // Inline function 'kotlin.comparisons.minOf' call
        var tmp0_minOf = remaining;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.s1z_1 - tmp0__anonymous__q1qw7t.q1z_1 | 0;
        var tmp1_minOf = tmp$ret$0;
        tmp$ret$1 = Math.min(tmp0_minOf, tmp1_minOf);
        var size = tmp$ret$1;
        block(tmp0__anonymous__q1qw7t, currentOffset, size);
        currentOffset = currentOffset + size | 0;
        remaining = remaining - size | 0;
        tmp$ret$2 = remaining > 0;
        if (!tmp$ret$2)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, 1, tail);
      }
    }finally {
      _this__u8e3s4.g25();
    }
  }
  function writeShort_0(_this__u8e3s4, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.writePrimitiveTemplate' call
      var index = _this__u8e3s4.j1x_1;
      if ((_this__u8e3s4.k1x_1 - index | 0) > 2) {
        _this__u8e3s4.j1x_1 = index + 2 | 0;
        // Inline function 'io.ktor.utils.io.core.writeShort.<anonymous>' call
        var tmp0__anonymous__q1qw7t = _this__u8e3s4.i1x_1;
        // Inline function 'io.ktor.utils.io.bits.storeShortAt' call
        tmp0__anonymous__q1qw7t.o24_1.setInt16(index, value, false);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    if (!tmp$ret$0) {
      writeShortFallback(_this__u8e3s4, value);
    }
  }
  function writePrimitiveTemplate(_this__u8e3s4, componentSize, block) {
    var index = _this__u8e3s4.j1x_1;
    if ((_this__u8e3s4.k1x_1 - index | 0) > componentSize) {
      _this__u8e3s4.j1x_1 = index + componentSize | 0;
      block(_this__u8e3s4.i1x_1, index);
      return true;
    }
    return false;
  }
  function writeShortFallback(_this__u8e3s4, value) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writePrimitiveFallbackTemplate' call
    var tail = _this__u8e3s4.l27(2);
    // Inline function 'io.ktor.utils.io.core.writeShortFallback.<anonymous>' call
    writeShort(tail, value);
    _this__u8e3s4.g25();
    tmp$ret$0 = true;
    if (!tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.highByte' call
      tmp$ret$1 = toByte(value >>> 8 | 0);
      _this__u8e3s4.h26(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.lowByte' call
      tmp$ret$2 = toByte(value & 255);
      _this__u8e3s4.h26(tmp$ret$2);
    }
  }
  function writePrimitiveFallbackTemplate(_this__u8e3s4, componentSize, writeOperation) {
    var tail = _this__u8e3s4.l27(componentSize);
    writeOperation(tail);
    _this__u8e3s4.g25();
    return true;
  }
  function read_0(_this__u8e3s4, n, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp0_elvis_lhs = _this__u8e3s4.n28(n);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      prematureEndOfStream(n);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var buffer = tmp;
    var positionBefore = buffer.p1z_1;
    try {
      block(buffer);
    }finally {
      var positionAfter = buffer.p1z_1;
      if (positionAfter < positionBefore) {
        throw IllegalStateException_init_$Create$("Buffer's position shouldn't be rewinded");
      }
      if (positionAfter === buffer.q1z_1) {
        _this__u8e3s4.l28(buffer);
      } else {
        _this__u8e3s4.c21_1 = positionAfter;
      }
    }
  }
  function toByteArray(_this__u8e3s4, charset) {
    if (charset.equals(Charsets_getInstance().r28_1))
      return encodeToByteArray(_this__u8e3s4);
    return encodeToByteArray_0(charset.u28(), _this__u8e3s4, 0, _this__u8e3s4.length);
  }
  function readText(_this__u8e3s4, charset, max) {
    return decode(charset.v28(), _this__u8e3s4, max);
  }
  function readText$default(_this__u8e3s4, charset, max, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      charset = Charsets_getInstance().r28_1;
    if (!(($mask0 & 2) === 0))
      max = IntCompanionObject_getInstance().w_1;
    return readText(_this__u8e3s4, charset, max);
  }
  function readBytes(_this__u8e3s4, n) {
    var tmp;
    if (!(n === 0)) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = new Int8Array(n);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'io.ktor.utils.io.core.readBytes.<anonymous>' call
      readFully_2(_this__u8e3s4, tmp0_also, 0, n);
      tmp$ret$1 = tmp0_also;
      tmp = tmp$ret$1;
    } else {
      tmp = get_EmptyByteArray();
    }
    return tmp;
  }
  function readBytes$default(_this__u8e3s4, n, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'io.ktor.utils.io.core.coerceAtMostMaxIntOrFail' call
      var tmp0_coerceAtMostMaxIntOrFail = _this__u8e3s4.g21();
      if (tmp0_coerceAtMostMaxIntOrFail.f1(toLong(IntCompanionObject_getInstance().w_1)) > 0)
        throw IllegalArgumentException_init_$Create$('Unable to convert to a ByteArray: packet is too big');
      tmp$ret$0 = tmp0_coerceAtMostMaxIntOrFail.o6();
      tmp$ret$0_0 = Unit_getInstance();
      n = tmp$ret$0;
    }
    return readBytes(_this__u8e3s4, n);
  }
  function prematureEndOfStream(size) {
    throw new EOFException('Premature end of stream: expected ' + size + ' bytes');
  }
  function readTextExactBytes(_this__u8e3s4, bytesCount, charset) {
    return decodeExactBytes(charset.v28(), _this__u8e3s4, bytesCount);
  }
  function readTextExactBytes$default(_this__u8e3s4, bytesCount, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      charset = Charsets_getInstance().r28_1;
    return readTextExactBytes(_this__u8e3s4, bytesCount, charset);
  }
  function writeText(_this__u8e3s4, text, fromIndex, toIndex, charset) {
    if (charset === Charsets_getInstance().r28_1) {
      return writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex);
    }
    encodeToImpl(charset.u28(), _this__u8e3s4, text, fromIndex, toIndex);
  }
  function writeText$default(_this__u8e3s4, text, fromIndex, toIndex, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      fromIndex = 0;
    if (!(($mask0 & 4) === 0))
      toIndex = charSequenceLength(text);
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().r28_1;
    return writeText(_this__u8e3s4, text, fromIndex, toIndex, charset);
  }
  function writeTextUtf8(_this__u8e3s4, text, fromIndex, toIndex) {
    var index = fromIndex;
    // Inline function 'io.ktor.utils.io.core.writeWhileSize' call
    var tail = prepareWriteHead(_this__u8e3s4, 1, null);
    try {
      var size;
      $l$loop: while (true) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.core.writeTextUtf8.<anonymous>' call
        var tmp0__anonymous__q1qw7t = tail;
        var memory = tmp0__anonymous__q1qw7t.o1z_1;
        var dstOffset = tmp0__anonymous__q1qw7t.q1z_1;
        var dstLimit = tmp0__anonymous__q1qw7t.s1z_1;
        var tmp0_container = encodeUTF8(memory, text, index, toIndex, dstOffset, dstLimit);
        var characters = EncodeResult__component1_impl_36tlhi(tmp0_container);
        var bytes = EncodeResult__component2_impl_3nv7vp(tmp0_container);
        var tmp = index;
        var tmp$ret$0;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
        index = tmp + tmp$ret$0 | 0;
        var tmp$ret$1;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
        tmp0__anonymous__q1qw7t.t25(tmp$ret$1);
        var tmp_0;
        var tmp_1;
        var tmp$ret$2;
        // Inline function 'kotlin.UShort.toInt' call
        tmp$ret$2 = _UShort___get_data__impl__g0245(characters) & 65535;
        if (tmp$ret$2 === 0) {
          tmp_1 = index < toIndex;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = 8;
        } else {
          if (index < toIndex) {
            tmp_0 = 1;
          } else {
            tmp_0 = 0;
          }
        }
        tmp$ret$3 = tmp_0;
        size = tmp$ret$3;
        if (size <= 0)
          break $l$loop;
        tail = prepareWriteHead(_this__u8e3s4, size, tail);
      }
    }finally {
      _this__u8e3s4.g25();
    }
  }
  function ChunkBuffer$Companion$Pool$1() {
  }
  ChunkBuffer$Companion$Pool$1.prototype.s24 = function () {
    return get_DefaultChunkedBufferPool().s24();
  };
  ChunkBuffer$Companion$Pool$1.prototype.w28 = function (instance) {
    get_DefaultChunkedBufferPool().c27(instance);
  };
  ChunkBuffer$Companion$Pool$1.prototype.c27 = function (instance) {
    return this.w28(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$Pool$1.prototype.i1g = function () {
    get_DefaultChunkedBufferPool().i1g();
  };
  ChunkBuffer$Companion$Pool$1.$metadata$ = classMeta(undefined, [ObjectPool]);
  function ChunkBuffer$Companion$EmptyPool$1() {
  }
  ChunkBuffer$Companion$EmptyPool$1.prototype.s24 = function () {
    return Companion_getInstance_4().d1w_1;
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.w28 = function (instance) {
    // Inline function 'kotlin.require' call
    var tmp0_require = instance === Companion_getInstance_4().d1w_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.<no name provided>.recycle.<anonymous>' call
      tmp$ret$0 = 'Only ChunkBuffer.Empty instance could be recycled.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.c27 = function (instance) {
    return this.w28(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$EmptyPool$1.prototype.i1g = function () {
  };
  ChunkBuffer$Companion$EmptyPool$1.$metadata$ = classMeta(undefined, [ObjectPool]);
  function ChunkBuffer$Companion$NoPool$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPool$1.prototype.s24 = function () {
    return new ChunkBuffer(DefaultAllocator_getInstance().p24(get_DEFAULT_BUFFER_SIZE()), null, this);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.w28 = function (instance) {
    DefaultAllocator_getInstance().q24(instance.o1z_1);
  };
  ChunkBuffer$Companion$NoPool$1.prototype.c27 = function (instance) {
    return this.w28(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$NoPool$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, NoPoolImpl.prototype);
  function ChunkBuffer$Companion$NoPoolManuallyManaged$1() {
    NoPoolImpl.call(this);
  }
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.s24 = function () {
    throw UnsupportedOperationException_init_$Create$("This pool doesn't support borrow");
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.w28 = function (instance) {
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.c27 = function (instance) {
    return this.w28(instance instanceof ChunkBuffer ? instance : THROW_CCE());
  };
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, NoPoolImpl.prototype);
  function appendNext($this, chunk) {
    if (!$this.a25_1.atomicfu$compareAndSet(null, chunk)) {
      throw IllegalStateException_init_$Create$('This chunk has already a next chunk.');
    }
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.b1w_1 = new ChunkBuffer$Companion$Pool$1();
    var tmp_0 = this;
    tmp_0.c1w_1 = new ChunkBuffer$Companion$EmptyPool$1();
    this.d1w_1 = new ChunkBuffer(Companion_getInstance_6().q28_1, null, this.c1w_1);
    var tmp_1 = this;
    tmp_1.e1w_1 = new ChunkBuffer$Companion$NoPool$1();
    var tmp_2 = this;
    tmp_2.f1w_1 = new ChunkBuffer$Companion$NoPoolManuallyManaged$1();
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_4() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ChunkBuffer(memory, origin, parentPool) {
    Companion_getInstance_4();
    Buffer.call(this, memory);
    this.z24_1 = parentPool;
    // Inline function 'kotlin.require' call
    var tmp0_require = !(origin === this);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.<anonymous>' call
      tmp$ret$0 = "A chunk couldn't be a view of itself.";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.a25_1 = atomic$ref$1(null);
    this.b25_1 = atomic$int$1(1);
    this.c25_1 = origin;
  }
  ChunkBuffer.prototype.x28 = function () {
    return this.z24_1;
  };
  ChunkBuffer.prototype.p28 = function (newValue) {
    if (newValue == null) {
      this.d27();
    } else {
      appendNext(this, newValue);
    }
  };
  ChunkBuffer.prototype.y26 = function () {
    return this.a25_1.m1c_1;
  };
  ChunkBuffer.prototype.x26 = function () {
    return this.b25_1.n1c_1;
  };
  ChunkBuffer.prototype.d27 = function () {
    return this.a25_1.atomicfu$getAndSet(null);
  };
  ChunkBuffer.prototype.d25 = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp0_elvis_lhs = this.c25_1;
    var tmp0_let = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>' call
    tmp0_let.y28();
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = new ChunkBuffer(this.o1z_1, tmp0_let, this.z24_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.duplicate.<anonymous>.<anonymous>' call
    this.f26(tmp0_also);
    tmp$ret$0 = tmp0_also;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  ChunkBuffer.prototype.f25 = function (pool) {
    if (this.z28()) {
      var origin = this.c25_1;
      if (!(origin == null)) {
        this.u26();
        origin.f25(pool);
      } else {
        var tmp0_elvis_lhs = this.z24_1;
        var poolToUse = tmp0_elvis_lhs == null ? pool : tmp0_elvis_lhs;
        poolToUse.c27(this);
      }
    }
  };
  ChunkBuffer.prototype.u26 = function () {
    if (!this.b25_1.atomicfu$compareAndSet(0, -1)) {
      throw IllegalStateException_init_$Create$('Unable to unlink: buffer is in use.');
    }
    this.d27();
    this.c25_1 = null;
  };
  ChunkBuffer.prototype.y28 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.b25_1;
      while (true) {
        var cur = tmp0_update.n1c_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.acquire.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to acquire chunk: it is already released.');
        tmp$ret$0 = cur + 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.b27 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      var tmp0_update = this.b25_1;
      while (true) {
        var cur = tmp0_update.n1c_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.unpark.<anonymous>' call
        if (cur < 0) {
          throw IllegalStateException_init_$Create$("This instance is already disposed and couldn't be borrowed.");
        }
        if (cur > 0) {
          throw IllegalStateException_init_$Create$('This instance is already in use but somehow appeared in the pool.');
        }
        tmp$ret$0 = 1;
        var upd = tmp$ret$0;
        if (tmp0_update.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = Unit_getInstance();
          break $l$block;
        }
      }
    }
  };
  ChunkBuffer.prototype.z28 = function () {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.updateAndGet' call
      var tmp0_updateAndGet = this.b25_1;
      while (true) {
        var cur = tmp0_updateAndGet.n1c_1;
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.release.<anonymous>' call
        if (cur <= 0)
          throw IllegalStateException_init_$Create$('Unable to release: it is already released.');
        tmp$ret$0 = cur - 1 | 0;
        var upd = tmp$ret$0;
        if (tmp0_updateAndGet.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$1 = upd;
          break $l$block;
        }
      }
    }
    return tmp$ret$1 === 0;
  };
  ChunkBuffer.prototype.i26 = function () {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.c25_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.internal.ChunkBuffer.reset.<anonymous>' call
      tmp$ret$0 = 'Unable to reset buffer with origin';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Buffer.prototype.i26.call(this);
    this.a25_1.m1c_1 = null;
  };
  ChunkBuffer.$metadata$ = classMeta('ChunkBuffer', undefined, undefined, undefined, undefined, Buffer.prototype);
  function isExclusivelyOwned(_this__u8e3s4) {
    return _this__u8e3s4.x26() === 1;
  }
  function _EncodeResult___init__impl__vkc0cy(value) {
    return value;
  }
  function _EncodeResult___get_value__impl__h0r466($this) {
    return $this;
  }
  function _EncodeResult___init__impl__vkc0cy_0(characters, bytes) {
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$0 = _UShort___get_data__impl__g0245(characters) & 65535;
    var tmp = tmp$ret$0 << 16;
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toInt' call
    tmp$ret$1 = _UShort___get_data__impl__g0245(bytes) & 65535;
    var tmp_0 = _EncodeResult___init__impl__vkc0cy(tmp | tmp$ret$1);
    return tmp_0;
  }
  function _EncodeResult___get_characters__impl__rrxzcv($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.highShort' call
    var tmp0__get_highShort__24misv = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_highShort__24misv >>> 16 | 0);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function _EncodeResult___get_bytes__impl__bt0kq0($this) {
    var tmp$ret$1;
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.bits.lowShort' call
    var tmp0__get_lowShort__5ljr93 = _EncodeResult___get_value__impl__h0r466($this);
    tmp$ret$0 = toShort(tmp0__get_lowShort__5ljr93 & 65535);
    var tmp1_toUShort = tmp$ret$0;
    tmp$ret$1 = _UShort___init__impl__jigrne(tmp1_toUShort);
    return tmp$ret$1;
  }
  function EncodeResult__component1_impl_36tlhi($this) {
    return _EncodeResult___get_characters__impl__rrxzcv($this);
  }
  function EncodeResult__component2_impl_3nv7vp($this) {
    return _EncodeResult___get_bytes__impl__bt0kq0($this);
  }
  function toIntOrFail(_this__u8e3s4, name) {
    if (_this__u8e3s4.f1(toLong(IntCompanionObject_getInstance().w_1)) >= 0) {
      failLongToIntConversion(_this__u8e3s4, name);
    }
    return _this__u8e3s4.o6();
  }
  function failLongToIntConversion(value, name) {
    throw IllegalArgumentException_init_$Create$('Long value ' + toString(value) + ' of ' + name + " doesn't fit into 32-bit integer");
  }
  function decodeASCII(_this__u8e3s4, consumer) {
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.decodeASCII.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.p1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    var inductionVariable = tmp1__anonymous__uwfjfc;
    if (inductionVariable < tmp2__anonymous__z9zvc9)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.get' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.o24_1.getInt8(index);
        tmp$ret$1 = tmp$ret$0;
        var codepoint = tmp$ret$1 & 255;
        if ((codepoint & 128) === 128 ? true : !consumer(new Char(numberToChar(codepoint)))) {
          _this__u8e3s4.s25(index - tmp1__anonymous__uwfjfc | 0);
          return false;
        }
      }
       while (inductionVariable < tmp2__anonymous__z9zvc9);
    tmp$ret$2 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    var rc = tmp$ret$2;
    _this__u8e3s4.s25(rc);
    tmp$ret$3 = rc;
    return true;
  }
  function MalformedUTF8InputException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, MalformedUTF8InputException);
  }
  MalformedUTF8InputException.$metadata$ = classMeta('MalformedUTF8InputException', undefined, undefined, undefined, undefined, Exception.prototype);
  function decodeUTF8(_this__u8e3s4, consumer) {
    var byteCount = 0;
    var value = 0;
    var lastByteCount = 0;
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.internal.decodeUTF8.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.p1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    var inductionVariable = tmp1__anonymous__uwfjfc;
    if (inductionVariable < tmp2__anonymous__z9zvc9)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.get' call
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.bits.Memory.loadAt' call
        tmp$ret$0 = tmp0__anonymous__q1qw7t.o24_1.getInt8(index);
        tmp$ret$1 = tmp$ret$0;
        var v = tmp$ret$1 & 255;
        if ((v & 128) === 0) {
          if (!(byteCount === 0)) {
            malformedByteCount(byteCount);
          }
          if (!consumer(new Char(numberToChar(v)))) {
            _this__u8e3s4.s25(index - tmp1__anonymous__uwfjfc | 0);
            return -1;
          }
        } else if (byteCount === 0) {
          var mask = 128;
          value = v;
          var inductionVariable_0 = 1;
          if (inductionVariable_0 <= 6)
            $l$loop: do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (!((value & mask) === 0)) {
                value = value & ~mask;
                mask = mask >> 1;
                var tmp2 = byteCount;
                byteCount = tmp2 + 1 | 0;
              } else {
                break $l$loop;
              }
            }
             while (inductionVariable_0 <= 6);
          lastByteCount = byteCount;
          var tmp3 = byteCount;
          byteCount = tmp3 - 1 | 0;
          if (lastByteCount > (tmp2__anonymous__z9zvc9 - index | 0)) {
            _this__u8e3s4.s25(index - tmp1__anonymous__uwfjfc | 0);
            return lastByteCount;
          }
        } else {
          value = value << 6 | v & 127;
          var tmp4 = byteCount;
          byteCount = tmp4 - 1 | 0;
          if (byteCount === 0) {
            if (isBmpCodePoint(value)) {
              if (!consumer(new Char(numberToChar(value)))) {
                _this__u8e3s4.s25(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                return -1;
              }
            } else if (!isValidCodePoint(value)) {
              malformedCodePoint(value);
            } else {
              if (!consumer(new Char(numberToChar(highSurrogate(value)))) ? true : !consumer(new Char(numberToChar(lowSurrogate(value))))) {
                _this__u8e3s4.s25(((index - tmp1__anonymous__uwfjfc | 0) - lastByteCount | 0) + 1 | 0);
                return -1;
              }
            }
            value = 0;
          }
        }
      }
       while (inductionVariable < tmp2__anonymous__z9zvc9);
    tmp$ret$2 = tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0;
    var rc = tmp$ret$2;
    _this__u8e3s4.s25(rc);
    tmp$ret$3 = rc;
    return 0;
  }
  function malformedByteCount(byteCount) {
    throw new MalformedUTF8InputException('Expected ' + byteCount + ' more character bytes');
  }
  function isBmpCodePoint(cp) {
    return (cp >>> 16 | 0) === 0;
  }
  function isValidCodePoint(codePoint) {
    return codePoint <= 1114111;
  }
  function malformedCodePoint(value) {
    throw IllegalArgumentException_init_$Create$('Malformed code-point ' + value + ' found');
  }
  function highSurrogate(cp) {
    return (cp >>> 10 | 0) + 55232 | 0;
  }
  function lowSurrogate(cp) {
    return (cp & 1023) + 56320 | 0;
  }
  function putUtf8Char(_this__u8e3s4, offset, v) {
    var tmp0_subject = v;
    var tmp;
    if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
      // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
      var tmp0_storeAt = toByte(v);
      _this__u8e3s4.o24_1.setInt8(offset, tmp0_storeAt);
      tmp = 1;
    } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp1_set = toByte(192 | v >> 6 & 31);
      _this__u8e3s4.o24_1.setInt8(offset, tmp1_set);
      tmp$ret$0 = Unit_getInstance();
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp2_set = offset + 1 | 0;
      var tmp3_set = toByte(128 | v & 63);
      _this__u8e3s4.o24_1.setInt8(tmp2_set, tmp3_set);
      tmp$ret$1 = Unit_getInstance();
      tmp = 2;
    } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
      var tmp$ret$2;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp4_set = toByte(224 | v >> 12 & 15);
      _this__u8e3s4.o24_1.setInt8(offset, tmp4_set);
      tmp$ret$2 = Unit_getInstance();
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp5_set = offset + 1 | 0;
      var tmp6_set = toByte(128 | v >> 6 & 63);
      _this__u8e3s4.o24_1.setInt8(tmp5_set, tmp6_set);
      tmp$ret$3 = Unit_getInstance();
      var tmp$ret$4;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp7_set = offset + 2 | 0;
      var tmp8_set = toByte(128 | v & 63);
      _this__u8e3s4.o24_1.setInt8(tmp7_set, tmp8_set);
      tmp$ret$4 = Unit_getInstance();
      tmp = 3;
    } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
      var tmp$ret$5;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp9_set = toByte(240 | v >> 18 & 7);
      _this__u8e3s4.o24_1.setInt8(offset, tmp9_set);
      tmp$ret$5 = Unit_getInstance();
      var tmp$ret$6;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp10_set = offset + 1 | 0;
      var tmp11_set = toByte(128 | v >> 12 & 63);
      _this__u8e3s4.o24_1.setInt8(tmp10_set, tmp11_set);
      tmp$ret$6 = Unit_getInstance();
      var tmp$ret$7;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp12_set = offset + 2 | 0;
      var tmp13_set = toByte(128 | v >> 6 & 63);
      _this__u8e3s4.o24_1.setInt8(tmp12_set, tmp13_set);
      tmp$ret$7 = Unit_getInstance();
      var tmp$ret$8;
      // Inline function 'io.ktor.utils.io.bits.set' call
      var tmp14_set = offset + 3 | 0;
      var tmp15_set = toByte(128 | v & 63);
      _this__u8e3s4.o24_1.setInt8(tmp14_set, tmp15_set);
      tmp$ret$8 = Unit_getInstance();
      tmp = 4;
    } else {
      malformedCodePoint(v);
    }
    return tmp;
  }
  function encodeUTF8(_this__u8e3s4, text, from, to, dstOffset, dstLimit) {
    var tmp$ret$1;
    // Inline function 'kotlin.comparisons.minOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp0_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$0 = _UShort___get_data__impl__g0245(tmp0_toInt) & 65535;
    var tmp1_minOf = from + tmp$ret$0 | 0;
    tmp$ret$1 = Math.min(to, tmp1_minOf);
    var lastCharIndex = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.UShort.toInt' call
    Companion_getInstance_0();
    var tmp2_toInt = _UShort___init__impl__jigrne(-1);
    tmp$ret$2 = _UShort___get_data__impl__g0245(tmp2_toInt) & 65535;
    var resultLimit = coerceAtMost(dstLimit, tmp$ret$2);
    var resultPosition = dstOffset;
    var index = from;
    $l$loop: do {
      if (resultPosition >= resultLimit ? true : index >= lastCharIndex) {
        var tmp$ret$3;
        // Inline function 'kotlin.toUShort' call
        var tmp3_toUShort = index - from | 0;
        tmp$ret$3 = _UShort___init__impl__jigrne(toShort(tmp3_toUShort));
        var tmp = tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.toUShort' call
        var tmp4_toUShort = resultPosition - dstOffset | 0;
        tmp$ret$4 = _UShort___init__impl__jigrne(toShort(tmp4_toUShort));
        return _EncodeResult___init__impl__vkc0cy_0(tmp, tmp$ret$4);
      }
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp5__get_code__iwzzkv = charSequenceGet(text, tmp0);
      tmp$ret$5 = Char__toInt_impl_vasixd(tmp5__get_code__iwzzkv);
      var character = tmp$ret$5 & 65535;
      if ((character & 65408) === 0) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp1 = resultPosition;
        resultPosition = tmp1 + 1 | 0;
        var tmp6_storeAt = tmp1;
        var tmp7_storeAt = toByte(character);
        _this__u8e3s4.o24_1.setInt8(tmp6_storeAt, tmp7_storeAt);
      } else {
        break $l$loop;
      }
    }
     while (true);
    var tmp2 = index;
    index = tmp2 - 1 | 0;
    return encodeUTF8Stage1(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
  }
  function encodeUTF8Stage1(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    var stage1Limit = resultLimit - 3 | 0;
    $l$loop: do {
      var freeSpace = stage1Limit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (isHighSurrogate(character)) {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      }
      var codepoint = tmp;
      var tmp$ret$10;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject = codepoint;
      var tmp_1;
      if (0 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$1 = Unit_getInstance();
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.o24_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$2 = Unit_getInstance();
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$3 = Unit_getInstance();
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.o24_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.o24_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$5 = Unit_getInstance();
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$6 = Unit_getInstance();
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.o24_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.o24_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.o24_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$9 = Unit_getInstance();
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$10 = tmp_1;
      var size = tmp$ret$10;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    if (resultPosition === stage1Limit) {
      return encodeUTF8Stage2(_this__u8e3s4, text, index, lastCharIndex, from, resultPosition, resultLimit, dstOffset);
    }
    var tmp$ret$11;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$11 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_2 = tmp$ret$11;
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_2, tmp$ret$12);
  }
  function codePoint(high, low) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(high);
    var highValue = tmp$ret$0 - 55232 | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.code' call
    tmp$ret$1 = Char__toInt_impl_vasixd(low);
    var lowValue = tmp$ret$1 - 56320 | 0;
    return highValue << 10 | lowValue;
  }
  function encodeUTF8Stage2(_this__u8e3s4, text, index1, lastCharIndex, from, resultPosition1, resultLimit, dstOffset) {
    var index = index1;
    var resultPosition = resultPosition1;
    $l$loop_0: do {
      var freeSpace = resultLimit - resultPosition | 0;
      if (freeSpace <= 0 ? true : index >= lastCharIndex) {
        break $l$loop_0;
      }
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var character = charSequenceGet(text, tmp0);
      var tmp;
      if (!isHighSurrogate(character)) {
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        tmp$ret$0 = Char__toInt_impl_vasixd(character);
        tmp = tmp$ret$0;
      } else {
        var tmp_0;
        if (index === lastCharIndex ? true : !isLowSurrogate(charSequenceGet(text, index))) {
          tmp_0 = 63;
        } else {
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          tmp_0 = codePoint(character, charSequenceGet(text, tmp1));
        }
        tmp = tmp_0;
      }
      var codepoint = tmp;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.internal.charactersSize' call
      var tmp0_subject = codepoint;
      var tmp_1;
      if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
        tmp_1 = 1;
      } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
        tmp_1 = 2;
      } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
        tmp_1 = 3;
      } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
        tmp_1 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$1 = tmp_1;
      if (tmp$ret$1 > freeSpace) {
        var tmp2 = index;
        index = tmp2 - 1 | 0;
        break $l$loop_0;
      }
      var tmp$ret$11;
      // Inline function 'io.ktor.utils.io.core.internal.putUtf8Char' call
      var tmp0_putUtf8Char = resultPosition;
      var tmp0_subject_0 = codepoint;
      var tmp_2;
      if (0 <= tmp0_subject_0 ? tmp0_subject_0 <= 127 : false) {
        // Inline function 'io.ktor.utils.io.bits.Memory.storeAt' call
        var tmp0_storeAt = toByte(codepoint);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp0_storeAt);
        tmp_2 = 1;
      } else if (128 <= tmp0_subject_0 ? tmp0_subject_0 <= 2047 : false) {
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp1_set = toByte(192 | codepoint >> 6 & 31);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp1_set);
        tmp$ret$2 = Unit_getInstance();
        var tmp$ret$3;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp2_set = tmp0_putUtf8Char + 1 | 0;
        var tmp3_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.o24_1.setInt8(tmp2_set, tmp3_set);
        tmp$ret$3 = Unit_getInstance();
        tmp_2 = 2;
      } else if (2048 <= tmp0_subject_0 ? tmp0_subject_0 <= 65535 : false) {
        var tmp$ret$4;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp4_set = toByte(224 | codepoint >> 12 & 15);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp4_set);
        tmp$ret$4 = Unit_getInstance();
        var tmp$ret$5;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp5_set = tmp0_putUtf8Char + 1 | 0;
        var tmp6_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.o24_1.setInt8(tmp5_set, tmp6_set);
        tmp$ret$5 = Unit_getInstance();
        var tmp$ret$6;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp7_set = tmp0_putUtf8Char + 2 | 0;
        var tmp8_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.o24_1.setInt8(tmp7_set, tmp8_set);
        tmp$ret$6 = Unit_getInstance();
        tmp_2 = 3;
      } else if (65536 <= tmp0_subject_0 ? tmp0_subject_0 <= 1114111 : false) {
        var tmp$ret$7;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp9_set = toByte(240 | codepoint >> 18 & 7);
        _this__u8e3s4.o24_1.setInt8(tmp0_putUtf8Char, tmp9_set);
        tmp$ret$7 = Unit_getInstance();
        var tmp$ret$8;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp10_set = tmp0_putUtf8Char + 1 | 0;
        var tmp11_set = toByte(128 | codepoint >> 12 & 63);
        _this__u8e3s4.o24_1.setInt8(tmp10_set, tmp11_set);
        tmp$ret$8 = Unit_getInstance();
        var tmp$ret$9;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp12_set = tmp0_putUtf8Char + 2 | 0;
        var tmp13_set = toByte(128 | codepoint >> 6 & 63);
        _this__u8e3s4.o24_1.setInt8(tmp12_set, tmp13_set);
        tmp$ret$9 = Unit_getInstance();
        var tmp$ret$10;
        // Inline function 'io.ktor.utils.io.bits.set' call
        var tmp14_set = tmp0_putUtf8Char + 3 | 0;
        var tmp15_set = toByte(128 | codepoint & 63);
        _this__u8e3s4.o24_1.setInt8(tmp14_set, tmp15_set);
        tmp$ret$10 = Unit_getInstance();
        tmp_2 = 4;
      } else {
        malformedCodePoint(codepoint);
      }
      tmp$ret$11 = tmp_2;
      var size = tmp$ret$11;
      resultPosition = resultPosition + size | 0;
    }
     while (true);
    var tmp$ret$12;
    // Inline function 'kotlin.toUShort' call
    var tmp1_toUShort = index - from | 0;
    tmp$ret$12 = _UShort___init__impl__jigrne(toShort(tmp1_toUShort));
    var tmp_3 = tmp$ret$12;
    var tmp$ret$13;
    // Inline function 'kotlin.toUShort' call
    var tmp2_toUShort = resultPosition - dstOffset | 0;
    tmp$ret$13 = _UShort___init__impl__jigrne(toShort(tmp2_toUShort));
    return _EncodeResult___init__impl__vkc0cy_0(tmp_3, tmp$ret$13);
  }
  function charactersSize(v) {
    var tmp0_subject = v;
    var tmp;
    if (1 <= tmp0_subject ? tmp0_subject <= 127 : false) {
      tmp = 1;
    } else if (128 <= tmp0_subject ? tmp0_subject <= 2047 : false) {
      tmp = 2;
    } else if (2048 <= tmp0_subject ? tmp0_subject <= 65535 : false) {
      tmp = 3;
    } else if (65536 <= tmp0_subject ? tmp0_subject <= 1114111 : false) {
      tmp = 4;
    } else {
      malformedCodePoint(v);
    }
    return tmp;
  }
  function get_EmptyByteArray() {
    init_properties_Unsafe_kt_ayh6vg();
    return EmptyByteArray;
  }
  var EmptyByteArray;
  function completeReadHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4)
      return Unit_getInstance();
    else {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.core.canRead' call
      tmp$ret$0 = current.q1z_1 > current.p1z_1;
      if (!tmp$ret$0) {
        _this__u8e3s4.l28(current);
      } else {
        var tmp$ret$1;
        // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
        tmp$ret$1 = current.t1z_1 - current.s1z_1 | 0;
        var tmp = tmp$ret$1;
        Companion_getInstance_1();
        if (tmp < 8) {
          _this__u8e3s4.m28(current);
        } else {
          _this__u8e3s4.c21_1 = current.p1z_1;
        }
      }
    }
  }
  function prepareReadFirstHead(_this__u8e3s4, minSize) {
    init_properties_Unsafe_kt_ayh6vg();
    return _this__u8e3s4.j28(minSize);
  }
  function prepareReadNextHead(_this__u8e3s4, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (current === _this__u8e3s4) {
      return _this__u8e3s4.v21() ? _this__u8e3s4 : null;
    }
    return _this__u8e3s4.k28(current);
  }
  function unsafeAppend(_this__u8e3s4, builder) {
    init_properties_Unsafe_kt_ayh6vg();
    var builderSize = builder.g();
    var tmp0_elvis_lhs = builder.n1x();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var builderHead = tmp;
    if ((builderSize <= get_PACKET_MAX_COPY_SIZE() ? builderHead.y26() == null : false) ? _this__u8e3s4.e28(builderHead) : false) {
      builder.n27();
      return builderSize;
    }
    _this__u8e3s4.d28(builderHead);
    return builderSize;
  }
  function prepareWriteHead(_this__u8e3s4, capacity, current) {
    init_properties_Unsafe_kt_ayh6vg();
    if (!(current == null)) {
      _this__u8e3s4.g25();
    }
    return _this__u8e3s4.l27(capacity);
  }
  var properties_initialized_Unsafe_kt_o5mw48;
  function init_properties_Unsafe_kt_ayh6vg() {
    if (properties_initialized_Unsafe_kt_o5mw48) {
    } else {
      properties_initialized_Unsafe_kt_o5mw48 = true;
      EmptyByteArray = new Int8Array(0);
    }
  }
  function trySuspend($this, sleepCondition, $cont) {
    var tmp = new $trySuspendCOROUTINE$53($this, sleepCondition, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function $sleepCOROUTINE$52(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u29_1 = _this__u8e3s4;
    this.v29_1 = sleepCondition;
  }
  $sleepCOROUTINE$52.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.hi_1 = 1;
            suspendResult = trySuspend(this.u29_1, this.v29_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              return Unit_getInstance();
            } else {
              this.hi_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            this.u29_1.w1w();
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
  $sleepCOROUTINE$52.$metadata$ = classMeta('$sleepCOROUTINE$52', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $trySuspendCOROUTINE$53(_this__u8e3s4, sleepCondition, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i29_1 = _this__u8e3s4;
    this.j29_1 = sleepCondition;
  }
  $trySuspendCOROUTINE$53.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 3;
            this.k29_1 = false;
            var tmp_0 = this;
            tmp_0.l29_1 = Job$default(null, 1, null);
            if (this.i29_1.v1w_1.atomicfu$compareAndSet(null, this.l29_1) ? this.j29_1() : false) {
              this.k29_1 = true;
              this.hi_1 = 1;
              suspendResult = this.l29_1.y1i(this);
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
            this.hi_1 = 2;
            continue $sm;
          case 2:
            return this.k29_1;
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
  $trySuspendCOROUTINE$53.$metadata$ = classMeta('$trySuspendCOROUTINE$53', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function AwaitingSlot() {
    this.v1w_1 = atomic$ref$1(null);
  }
  AwaitingSlot.prototype.s1y = function (sleepCondition, $cont) {
    var tmp = new $sleepCOROUTINE$52(this, sleepCondition, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  AwaitingSlot.prototype.w1w = function () {
    var tmp0_safe_receiver = this.v1w_1.atomicfu$getAndSet(null);
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.x1i();
  };
  AwaitingSlot.prototype.r23 = function (cause) {
    var tmp0_elvis_lhs = this.v1w_1.atomicfu$getAndSet(null);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var continuation = tmp;
    if (!(cause == null)) {
      continuation.k1i(cause);
    } else {
      continuation.x1i();
    }
  };
  AwaitingSlot.$metadata$ = classMeta('AwaitingSlot');
  function copyToSequentialImpl(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function copyToTail(_this__u8e3s4, dst, limit, $cont) {
    var tmp = new $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function $copyToSequentialImplCOROUTINE$54(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e2a_1 = _this__u8e3s4;
    this.f2a_1 = dst;
    this.g2a_1 = limit;
  }
  $copyToSequentialImplCOROUTINE$54.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 10;
            var tmp_0 = this;
            tmp_0.h2a_1 = !(this.e2a_1 === this.f2a_1);
            if (!this.h2a_1) {
              var message = 'Failed requirement.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            if (!(this.e2a_1.p1x() == null)) {
              this.f2a_1.j1q(this.e2a_1.p1x());
              return new Long(0, 0);
            }

            this.i2a_1 = this.g2a_1;
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (!(this.i2a_1.f1(new Long(0, 0)) > 0)) {
              this.hi_1 = 9;
              continue $sm;
            }

            this.hi_1 = 2;
            suspendResult = this.e2a_1.q23(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j2a_1 = suspendResult;
            if (!this.j2a_1) {
              this.hi_1 = 9;
              continue $sm;
            } else {
              this.hi_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            this.k2a_1 = this.e2a_1.s23(this.f2a_1, this.i2a_1);
            if (this.k2a_1.equals(new Long(0, 0))) {
              this.hi_1 = 6;
              suspendResult = copyToTail(this.e2a_1, this.f2a_1, this.i2a_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.f2a_1.g1y() === 0) {
                this.hi_1 = 4;
                suspendResult = this.f2a_1.n1z(1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.hi_1 = 5;
                continue $sm;
              }
            }

            break;
          case 4:
            this.hi_1 = 5;
            continue $sm;
          case 5:
            this.l2a_1 = this.k2a_1;
            this.hi_1 = 8;
            continue $sm;
          case 6:
            var tail = suspendResult;
            if (tail.equals(new Long(0, 0))) {
              this.hi_1 = 9;
              continue $sm;
            } else {
              this.hi_1 = 7;
              continue $sm;
            }

            break;
          case 7:
            this.l2a_1 = tail;
            this.hi_1 = 8;
            continue $sm;
          case 8:
            var copied = this.l2a_1;
            this.i2a_1 = this.i2a_1.b6(copied);
            if (copied.f1(new Long(0, 0)) > 0) {
              this.f2a_1.ee();
            }

            this.hi_1 = 1;
            continue $sm;
          case 9:
            return this.g2a_1.b6(this.i2a_1);
          case 10:
            throw this.ki_1;
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
  $copyToSequentialImplCOROUTINE$54.$metadata$ = classMeta('$copyToSequentialImplCOROUTINE$54', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function $copyToTailCOROUTINE$55(_this__u8e3s4, dst, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u2a_1 = _this__u8e3s4;
    this.v2a_1 = dst;
    this.w2a_1 = limit;
  }
  $copyToTailCOROUTINE$55.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 9;
            this.x2a_1 = Companion_getInstance_4().b1w_1.s24();
            this.hi_1 = 1;
            continue $sm;
          case 1:
            this.hi_1 = 2;
            continue $sm;
          case 2:
            this.ii_1 = 8;
            this.x2a_1.b26(coerceAtMost_0(this.w2a_1, toLong(this.x2a_1.t1z_1)).o6());
            this.hi_1 = 3;
            suspendResult = this.u2a_1.n23(this.x2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.z2a_1 = suspendResult;
            if (this.z2a_1 === -1) {
              this.x2a_1.f25(Companion_getInstance_4().b1w_1);
              this.y2a_1 = new Long(0, 0);
              this.ii_1 = 9;
              this.hi_1 = 6;
              continue $sm;
            } else {
              this.hi_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.hi_1 = 5;
            suspendResult = this.v2a_1.j23(this.x2a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.y2a_1 = toLong(this.z2a_1);
            this.ii_1 = 9;
            this.hi_1 = 6;
            var tmp_0 = this;
            continue $sm;
          case 6:
            var tmp_1 = this.y2a_1;
            this.x2a_1.f25(Companion_getInstance_4().b1w_1);
            ;
            return tmp_1;
          case 7:
            this.x2a_1.f25(Companion_getInstance_4().b1w_1);
            ;
            return Unit_getInstance();
          case 8:
            this.ii_1 = 9;
            var t = this.ki_1;
            this.x2a_1.f25(Companion_getInstance_4().b1w_1);
            ;
            throw t;
          case 9:
            throw this.ki_1;
        }
      } catch ($p) {
        if (this.ii_1 === 9) {
          throw $p;
        } else {
          this.hi_1 = this.ii_1;
          this.ki_1 = $p;
        }
      }
     while (true);
  };
  $copyToTailCOROUTINE$55.$metadata$ = classMeta('$copyToTailCOROUTINE$55', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function get_ByteArrayPool() {
    init_properties_ByteArrayPool_kt_ygh2ft();
    return ByteArrayPool;
  }
  var ByteArrayPool;
  function ByteArrayPool$1() {
    DefaultPool.call(this, 128);
  }
  ByteArrayPool$1.prototype.o26 = function () {
    return new Int8Array(4096);
  };
  ByteArrayPool$1.$metadata$ = classMeta(undefined, undefined, undefined, undefined, undefined, DefaultPool.prototype);
  var properties_initialized_ByteArrayPool_kt_td6pfh;
  function init_properties_ByteArrayPool_kt_ygh2ft() {
    if (properties_initialized_ByteArrayPool_kt_td6pfh) {
    } else {
      properties_initialized_ByteArrayPool_kt_td6pfh = true;
      ByteArrayPool = new ByteArrayPool$1();
    }
  }
  function ObjectPool() {
  }
  ObjectPool.$metadata$ = interfaceMeta('ObjectPool', [Closeable]);
  function NoPoolImpl() {
  }
  NoPoolImpl.prototype.c27 = function (instance) {
  };
  NoPoolImpl.prototype.i1g = function () {
  };
  NoPoolImpl.$metadata$ = classMeta('NoPoolImpl', [ObjectPool]);
  function ByteChannel_0(autoFlush) {
    return new ByteChannelJS(Companion_getInstance_4().d1w_1, autoFlush);
  }
  function copyTo(_this__u8e3s4, dst, limit, $cont) {
    var tmp = _this__u8e3s4 instanceof ByteChannelSequentialBase ? _this__u8e3s4 : THROW_CCE();
    return copyToSequentialImpl(tmp, dst instanceof ByteChannelSequentialBase ? dst : THROW_CCE(), limit, $cont);
  }
  function ByteReadChannel_0(content, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    tmp$ret$0 = content.length === 0;
    if (tmp$ret$0)
      return Companion_getInstance_5().j25();
    var head = Companion_getInstance_4().b1w_1.s24();
    var tail = head;
    var start = offset;
    var end = start + length | 0;
    $l$loop: while (true) {
      tail.y25(8);
      var tmp$ret$2;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp1_minOf = end - start | 0;
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
      var tmp0__get_writeRemaining__z8qq3e = tail;
      tmp$ret$1 = tmp0__get_writeRemaining__z8qq3e.s1z_1 - tmp0__get_writeRemaining__z8qq3e.q1z_1 | 0;
      var tmp2_minOf = tmp$ret$1;
      tmp$ret$2 = Math.min(tmp1_minOf, tmp2_minOf);
      var size = tmp$ret$2;
      writeFully_0(tail instanceof Buffer ? tail : THROW_CCE(), content, start, size);
      start = start + size | 0;
      if (start === end)
        break $l$loop;
      var current = tail;
      tail = Companion_getInstance_4().b1w_1.s24();
      current.p28(tail);
    }
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp3_apply = new ByteChannelJS(head, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.ByteReadChannel.<anonymous>' call
    close_0(tmp3_apply);
    tmp$ret$3 = tmp3_apply;
    return tmp$ret$3;
  }
  function ByteChannelJS$attachJob$lambda(this$0) {
    return function (cause) {
      this$0.s2b_1 = null;
      var tmp;
      if (!(cause == null)) {
        this$0.c1h(unwrapCancellationException(cause));
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ByteChannelJS(initial, autoFlush) {
    ByteChannelSequentialBase_init_$Init$(initial, autoFlush, null, 4, null, this);
    this.s2b_1 = null;
  }
  ByteChannelJS.prototype.a1w = function (job) {
    var tmp0_safe_receiver = this.s2b_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.k1e(null, 1, null);
    }
    this.s2b_1 = job;
    job.g1e(true, false, ByteChannelJS$attachJob$lambda(this), 2, null);
  };
  ByteChannelJS.prototype.toString = function () {
    return 'ByteChannel[' + this.s2b_1 + ', ' + hashCode(this) + ']';
  };
  ByteChannelJS.$metadata$ = classMeta('ByteChannelJS', undefined, undefined, undefined, undefined, ByteChannelSequentialBase.prototype);
  function ByteReadChannel$Companion$Empty$delegate$lambda() {
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new ByteChannelJS(Companion_getInstance_4().d1w_1, false);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.Companion.Empty$delegate.<anonymous>.<anonymous>' call
    tmp0_apply.j1q(null);
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    tmp.d2b_1 = lazy(ByteReadChannel$Companion$Empty$delegate$lambda);
  }
  Companion_3.prototype.j25 = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = Empty$factory();
    tmp$ret$0 = this.d2b_1.t();
    return tmp$ret$0;
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_5() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function ByteReadChannel_1() {
    Companion_getInstance_5();
  }
  ByteReadChannel_1.$metadata$ = interfaceMeta('ByteReadChannel');
  function Empty$factory() {
    return getPropertyCallableRef('Empty', 1, KProperty1, function (receiver) {
      return receiver.j25();
    }, null);
  }
  function ByteWriteChannel() {
  }
  ByteWriteChannel.$metadata$ = interfaceMeta('ByteWriteChannel');
  function DefaultAllocator() {
    DefaultAllocator_instance = this;
  }
  DefaultAllocator.prototype.p24 = function (size) {
    return new Memory(new DataView(new ArrayBuffer(size)));
  };
  DefaultAllocator.prototype.q24 = function (instance) {
  };
  DefaultAllocator.$metadata$ = objectMeta('DefaultAllocator', [Allocator]);
  var DefaultAllocator_instance;
  function DefaultAllocator_getInstance() {
    if (DefaultAllocator_instance == null)
      new DefaultAllocator();
    return DefaultAllocator_instance;
  }
  function useMemory(_this__u8e3s4, offset, length, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = of(Companion_getInstance_6(), _this__u8e3s4, offset, length);
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = block(tmp0_let);
    return tmp$ret$0;
  }
  function of(_this__u8e3s4, array, offset, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = array;
    var typedArray = tmp$ret$0;
    return of_0(Companion_getInstance_6(), typedArray, offset, length);
  }
  function of_0(_this__u8e3s4, view, offset, length) {
    return of_1(Companion_getInstance_6(), view.buffer, view.byteOffset + offset | 0, length);
  }
  function of_1(_this__u8e3s4, buffer, offset, length) {
    return new Memory(new DataView(buffer, offset, length));
  }
  function of$default(_this__u8e3s4, buffer, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = buffer.byteLength - offset | 0;
    return of_1(_this__u8e3s4, buffer, offset, length);
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.q28_1 = new Memory(new DataView(new ArrayBuffer(0)));
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_6() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Memory(view) {
    Companion_getInstance_6();
    this.o24_1 = view;
  }
  Memory.prototype.t2b = function () {
    return this.o24_1;
  };
  Memory.prototype.g = function () {
    return toLong(this.o24_1.byteLength);
  };
  Memory.prototype.u2b = function () {
    return this.o24_1.byteLength;
  };
  Memory.prototype.v2b = function (index) {
    return this.o24_1.getInt8(index);
  };
  Memory.prototype.w2b = function (index, value) {
    this.o24_1.setInt8(index, value);
  };
  Memory.prototype.x2b = function (offset, length) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$0 = "offset shouldn't be negative: " + offset;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.bits.Memory.slice.<anonymous>' call
      tmp$ret$1 = "length shouldn't be negative: " + length;
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp = toLong(offset + length | 0);
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.bits.Memory.size' call
    tmp$ret$2 = toLong(this.o24_1.byteLength);
    if (tmp.f1(tmp$ret$2) > 0) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.bits.Memory.size' call
      tmp$ret$3 = toLong(this.o24_1.byteLength);
      throw IndexOutOfBoundsException_init_$Create$('offset + length > size: ' + offset + ' + ' + length + ' > ' + toString(tmp$ret$3));
    }
    return new Memory(new DataView(this.o24_1.buffer, this.o24_1.byteOffset + offset | 0, length));
  };
  Memory.prototype.r24 = function (destination, offset, length, destinationOffset) {
    var src = new Int8Array(this.o24_1.buffer, this.o24_1.byteOffset + offset | 0, length);
    var dst = new Int8Array(destination.o24_1.buffer, destination.o24_1.byteOffset + destinationOffset | 0, length);
    dst.set(src);
  };
  Memory.$metadata$ = classMeta('Memory');
  function copyTo_0(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = destination;
    var to = tmp$ret$0;
    var from = new Int8Array(_this__u8e3s4.o24_1.buffer, _this__u8e3s4.o24_1.byteOffset + offset | 0, length);
    to.set(from, destinationOffset);
  }
  function copyTo_1(_this__u8e3s4, destination, offset, length, destinationOffset) {
    copyTo_2(_this__u8e3s4.buffer, destination, offset + _this__u8e3s4.byteOffset | 0, length, destinationOffset);
  }
  function copyTo_2(_this__u8e3s4, destination, offset, length, destinationOffset) {
    var from = new Int8Array(_this__u8e3s4, offset, length);
    var to = new Int8Array(destination.o24_1.buffer, destination.o24_1.byteOffset + destinationOffset | 0, length);
    to.set(from, 0);
  }
  function storeShortAt(_this__u8e3s4, offset, value) {
    _this__u8e3s4.o24_1.setInt16(offset, value, false);
  }
  function loadShortAt(_this__u8e3s4, offset) {
    return _this__u8e3s4.o24_1.getInt16(offset, false);
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.y2b = function (name) {
    switch (name) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        return Charsets_getInstance().r28_1;
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    switch (name) {
      case 'ISO-8859-1':
      case 'iso-8859-1':
        tmp_1 = true;
        break;
      default:
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        var tmp_2 = _Char___init__impl__6a9atx(95);
        var tmp_3 = _Char___init__impl__6a9atx(45);
        var tmp0_let = replace$default(name, tmp_2, tmp_3, false, 4, null);
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$2;
        // Inline function 'io.ktor.utils.io.charsets.Companion.forName.<anonymous>' call
        var tmp_4;
        if (tmp0_let === 'iso-8859-1') {
          tmp_4 = true;
        } else {
          var tmp$ret$1;
          // Inline function 'kotlin.text.lowercase' call
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_let;
          tmp$ret$1 = tmp$ret$0.toLowerCase();
          tmp_4 = tmp$ret$1 === 'iso-8859-1';
        }
        tmp$ret$2 = tmp_4;
        tmp$ret$3 = tmp$ret$2;

        tmp_1 = tmp$ret$3;
        break;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = name === 'latin1';
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = name === 'Latin1';
    }
    if (tmp) {
      return Charsets_getInstance().s28_1;
    }
    throw IllegalArgumentException_init_$Create$('Charset ' + name + ' is not supported');
  };
  Companion_5.prototype.z2b = function (charset) {
    var tmp;
    switch (charset) {
      case 'UTF-8':
      case 'utf-8':
      case 'UTF8':
      case 'utf8':
        tmp = true;
        break;
      default:
        var tmp_0;
        var tmp_1;
        switch (charset) {
          case 'ISO-8859-1':
          case 'iso-8859-1':
            tmp_1 = true;
            break;
          default:
            var tmp$ret$3;
            // Inline function 'kotlin.let' call
            var tmp_2 = _Char___init__impl__6a9atx(95);
            var tmp_3 = _Char___init__impl__6a9atx(45);
            var tmp0_let = replace$default(charset, tmp_2, tmp_3, false, 4, null);
            // Inline function 'kotlin.contracts.contract' call
            var tmp$ret$2;
            // Inline function 'io.ktor.utils.io.charsets.Companion.isSupported.<anonymous>' call
            var tmp_4;
            if (tmp0_let === 'iso-8859-1') {
              tmp_4 = true;
            } else {
              var tmp$ret$1;
              // Inline function 'kotlin.text.lowercase' call
              var tmp$ret$0;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$0 = tmp0_let;
              tmp$ret$1 = tmp$ret$0.toLowerCase();
              tmp_4 = tmp$ret$1 === 'iso-8859-1';
            }
            tmp$ret$2 = tmp_4;
            tmp$ret$3 = tmp$ret$2;

            tmp_1 = tmp$ret$3;
            break;
        }

        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = charset === 'latin1';
        }

        if (tmp_0) {
          tmp = true;
        } else {
          tmp = false;
        }

        break;
    }
    return tmp;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_7() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Charset(_name) {
    Companion_getInstance_7();
    this.t28_1 = _name;
  }
  Charset.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals(get_js(getKClassFromExpression(this)), get_js(getKClassFromExpression(other))))
      return false;
    if (other instanceof Charset)
      other;
    else
      THROW_CCE();
    if (!(this.t28_1 === other.t28_1))
      return false;
    return true;
  };
  Charset.prototype.hashCode = function () {
    return getStringHashCode(this.t28_1);
  };
  Charset.prototype.toString = function () {
    return this.t28_1;
  };
  Charset.$metadata$ = classMeta('Charset');
  function get_name(_this__u8e3s4) {
    return _this__u8e3s4.t28_1;
  }
  function Charsets() {
    Charsets_instance = this;
    this.r28_1 = new CharsetImpl('UTF-8');
    this.s28_1 = new CharsetImpl('ISO-8859-1');
  }
  Charsets.prototype.a2c = function () {
    return this.r28_1;
  };
  Charsets.$metadata$ = objectMeta('Charsets');
  var Charsets_instance;
  function Charsets_getInstance() {
    if (Charsets_instance == null)
      new Charsets();
    return Charsets_instance;
  }
  function MalformedInputException(message) {
    extendThrowable(this, message, void 1);
    captureStack(this, MalformedInputException);
  }
  MalformedInputException.$metadata$ = classMeta('MalformedInputException', undefined, undefined, undefined, undefined, Error.prototype);
  function CharsetDecoder(_charset) {
    this.b2c_1 = _charset;
  }
  CharsetDecoder.$metadata$ = classMeta('CharsetDecoder');
  function encodeToByteArray_0(_this__u8e3s4, input, fromIndex, toIndex) {
    return encodeToByteArrayImpl1(_this__u8e3s4, input, fromIndex, toIndex);
  }
  function CharsetEncoder(_charset) {
    this.c2c_1 = _charset;
  }
  CharsetEncoder.$metadata$ = classMeta('CharsetEncoder');
  function CharsetImpl(name) {
    Charset.call(this, name);
    this.e2c_1 = name;
  }
  CharsetImpl.prototype.u28 = function () {
    return new CharsetEncoderImpl(this);
  };
  CharsetImpl.prototype.v28 = function () {
    return new CharsetDecoderImpl(this);
  };
  CharsetImpl.prototype.toString = function () {
    return 'CharsetImpl(name=' + this.e2c_1 + ')';
  };
  CharsetImpl.prototype.hashCode = function () {
    return getStringHashCode(this.e2c_1);
  };
  CharsetImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetImpl ? other : THROW_CCE();
    if (!(this.e2c_1 === tmp0_other_with_cast.e2c_1))
      return false;
    return true;
  };
  CharsetImpl.$metadata$ = classMeta('CharsetImpl', undefined, undefined, undefined, undefined, Charset.prototype);
  function CharsetEncoderImpl(charset) {
    CharsetEncoder.call(this, charset);
    this.g2c_1 = charset;
  }
  CharsetEncoderImpl.prototype.toString = function () {
    return 'CharsetEncoderImpl(charset=' + this.g2c_1 + ')';
  };
  CharsetEncoderImpl.prototype.hashCode = function () {
    return this.g2c_1.hashCode();
  };
  CharsetEncoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetEncoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetEncoderImpl ? other : THROW_CCE();
    if (!this.g2c_1.equals(tmp0_other_with_cast.g2c_1))
      return false;
    return true;
  };
  CharsetEncoderImpl.$metadata$ = classMeta('CharsetEncoderImpl', undefined, undefined, undefined, undefined, CharsetEncoder.prototype);
  function CharsetDecoderImpl(charset) {
    CharsetDecoder.call(this, charset);
    this.i2c_1 = charset;
  }
  CharsetDecoderImpl.prototype.toString = function () {
    return 'CharsetDecoderImpl(charset=' + this.i2c_1 + ')';
  };
  CharsetDecoderImpl.prototype.hashCode = function () {
    return this.i2c_1.hashCode();
  };
  CharsetDecoderImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CharsetDecoderImpl))
      return false;
    var tmp0_other_with_cast = other instanceof CharsetDecoderImpl ? other : THROW_CCE();
    if (!this.i2c_1.equals(tmp0_other_with_cast.i2c_1))
      return false;
    return true;
  };
  CharsetDecoderImpl.$metadata$ = classMeta('CharsetDecoderImpl', undefined, undefined, undefined, undefined, CharsetDecoder.prototype);
  function decode_0(_this__u8e3s4, input, dst, max) {
    var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
    var charactersCopied = 0;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
      var release = true;
      var tmp0_elvis_lhs = prepareReadFirstHead(input, 1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var current = tmp;
      var size = 1;
      try {
        $l$loop: do {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
          var tmp0__get_readRemaining__u3cy9h = current;
          tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.q1z_1 - tmp0__get_readRemaining__u3cy9h.p1z_1 | 0;
          var before = tmp$ret$1;
          var after;
          if (before >= size) {
            try {
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp0__anonymous__q1qw7t = current;
                var rem = max - charactersCopied | 0;
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$2 = tmp0__anonymous__q1qw7t.q1z_1 - tmp0__anonymous__q1qw7t.p1z_1 | 0;
                var bufferSize = tmp$ret$2;
                if (rem < bufferSize) {
                  tmp$ret$3 = 0;
                  break $l$block_0;
                }
                var tmp$ret$11;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$10;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$9;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_0 = tmp0__anonymous__q1qw7t.o1z_1;
                var tmp1__anonymous__uwfjfc = tmp0__anonymous__q1qw7t.p1z_1;
                var tmp2__anonymous__z9zvc9 = tmp0__anonymous__q1qw7t.q1z_1;
                var tmp$ret$8;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q = new Int8Array(tmp0__anonymous__q1qw7t_0.o24_1.buffer, tmp0__anonymous__q1qw7t_0.o24_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0);
                var tmp$ret$7;
                $l$block_2: {
                  // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                  try {
                    var tmp$ret$6;
                    // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>.<anonymous>' call
                    var tmp$ret$4;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.j2c(tmp3__anonymous__ufb84q, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp$ret$6 = tmp$ret$4;
                    tmp$ret$7 = tmp$ret$6;
                    break $l$block_2;
                  } catch ($p) {
                    if ($p instanceof Error) {
                      var tmp0_elvis_lhs_1 = $p.message;
                      throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                    } else {
                      throw $p;
                    }
                  }
                }
                var decodedText = tmp$ret$7;
                dst.c(decodedText);
                charactersCopied = charactersCopied + decodedText.length | 0;
                tmp$ret$8 = tmp3__anonymous__ufb84q.byteLength;
                tmp$ret$9 = tmp$ret$8;
                var rc = tmp$ret$9;
                tmp0__anonymous__q1qw7t.s25(rc);
                tmp$ret$10 = rc;
                tmp$ret$11 = tmp$ret$10;
                var tmp_0;
                if (charactersCopied === max) {
                  var tmp_1;
                  try {
                    tmp_1 = decoder.k2c();
                  } catch ($p) {
                    var tmp_2;
                    {
                      tmp_2 = '';
                    }
                    tmp_1 = tmp_2;
                  }
                  var tail = tmp_1;
                  var tmp$ret$12;
                  // Inline function 'kotlin.text.isNotEmpty' call
                  tmp$ret$12 = charSequenceLength(tail) > 0;
                  if (tmp$ret$12) {
                    tmp0__anonymous__q1qw7t.w25(bufferSize);
                  }
                  tmp_0 = 0;
                } else if (charactersCopied < max) {
                  tmp_0 = get_MAX_CHARACTERS_SIZE_IN_BYTES();
                } else {
                  tmp_0 = 0;
                }
                tmp$ret$3 = tmp_0;
              }
              size = tmp$ret$3;
            }finally {
              var tmp$ret$13;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp1__get_readRemaining__qliyus = current;
              tmp$ret$13 = tmp1__get_readRemaining__qliyus.q1z_1 - tmp1__get_readRemaining__qliyus.p1z_1 | 0;
              after = tmp$ret$13;
            }
          } else {
            after = before;
          }
          release = false;
          var tmp_3;
          if (after === 0) {
            tmp_3 = prepareReadNextHead(input, current);
          } else {
            var tmp_4;
            if (after < size) {
              tmp_4 = true;
            } else {
              var tmp$ret$14;
              // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
              var tmp2__get_endGap__m31424 = current;
              tmp$ret$14 = tmp2__get_endGap__m31424.t1z_1 - tmp2__get_endGap__m31424.s1z_1 | 0;
              var tmp_5 = tmp$ret$14;
              Companion_getInstance_1();
              tmp_4 = tmp_5 < 8;
            }
            if (tmp_4) {
              completeReadHead(input, current);
              tmp_3 = prepareReadFirstHead(input, size);
            } else {
              tmp_3 = current;
            }
          }
          var tmp1_elvis_lhs = tmp_3;
          var tmp_6;
          if (tmp1_elvis_lhs == null) {
            break $l$loop;
          } else {
            tmp_6 = tmp1_elvis_lhs;
          }
          var next = tmp_6;
          current = next;
          release = true;
        }
         while (size > 0);
      }finally {
        if (release) {
          completeReadHead(input, current);
        }
      }
    }
    if (charactersCopied < max) {
      var size_0 = 1;
      var tmp$ret$15;
      $l$block_3: {
        // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
        var release_0 = true;
        var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
        var tmp_7;
        if (tmp0_elvis_lhs_2 == null) {
          tmp$ret$15 = Unit_getInstance();
          break $l$block_3;
        } else {
          tmp_7 = tmp0_elvis_lhs_2;
        }
        var current_0 = tmp_7;
        var size_1 = 1;
        try {
          $l$loop_0: do {
            var tmp$ret$16;
            // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
            var tmp0__get_readRemaining__u3cy9h_0 = current_0;
            tmp$ret$16 = tmp0__get_readRemaining__u3cy9h_0.q1z_1 - tmp0__get_readRemaining__u3cy9h_0.p1z_1 | 0;
            var before_0 = tmp$ret$16;
            var after_0;
            if (before_0 >= size_1) {
              try {
                var tmp$ret$21;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>' call
                var tmp1__anonymous__uwfjfc_0 = current_0;
                var tmp$ret$20;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$19;
                // Inline function 'io.ktor.utils.io.core.read' call
                // Inline function 'kotlin.contracts.contract' call
                var tmp$ret$18;
                // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
                var tmp0__anonymous__q1qw7t_1 = tmp1__anonymous__uwfjfc_0.o1z_1;
                var tmp1__anonymous__uwfjfc_1 = tmp1__anonymous__uwfjfc_0.p1z_1;
                var tmp2__anonymous__z9zvc9_0 = tmp1__anonymous__uwfjfc_0.q1z_1;
                var tmp$ret$17;
                // Inline function 'io.ktor.utils.io.charsets.decode.<anonymous>.<anonymous>' call
                var tmp3__anonymous__ufb84q_0 = new Int8Array(tmp0__anonymous__q1qw7t_1.o24_1.buffer, tmp0__anonymous__q1qw7t_1.o24_1.byteOffset + tmp1__anonymous__uwfjfc_1 | 0, tmp2__anonymous__z9zvc9_0 - tmp1__anonymous__uwfjfc_1 | 0);
                var result = decodeBufferImpl(tmp3__anonymous__ufb84q_0, decoder, max - charactersCopied | 0);
                dst.c(result.l2c_1);
                charactersCopied = charactersCopied + result.l2c_1.length | 0;
                tmp$ret$17 = result.m2c_1;
                tmp$ret$18 = tmp$ret$17;
                var rc_0 = tmp$ret$18;
                tmp1__anonymous__uwfjfc_0.s25(rc_0);
                tmp$ret$19 = rc_0;
                tmp$ret$20 = tmp$ret$19;
                var rc_1 = tmp$ret$20;
                if (rc_1 > 0)
                  size_0 = 1;
                else if (size_0 === get_MAX_CHARACTERS_SIZE_IN_BYTES())
                  size_0 = 0;
                else {
                  var tmp0 = size_0;
                  size_0 = tmp0 + 1 | 0;
                }
                tmp$ret$21 = size_0;
                size_1 = tmp$ret$21;
              }finally {
                var tmp$ret$22;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                var tmp1__get_readRemaining__qliyus_0 = current_0;
                tmp$ret$22 = tmp1__get_readRemaining__qliyus_0.q1z_1 - tmp1__get_readRemaining__qliyus_0.p1z_1 | 0;
                after_0 = tmp$ret$22;
              }
            } else {
              after_0 = before_0;
            }
            release_0 = false;
            var tmp_8;
            if (after_0 === 0) {
              tmp_8 = prepareReadNextHead(input, current_0);
            } else {
              var tmp_9;
              if (after_0 < size_1) {
                tmp_9 = true;
              } else {
                var tmp$ret$23;
                // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                var tmp2__get_endGap__m31424_0 = current_0;
                tmp$ret$23 = tmp2__get_endGap__m31424_0.t1z_1 - tmp2__get_endGap__m31424_0.s1z_1 | 0;
                var tmp_10 = tmp$ret$23;
                Companion_getInstance_1();
                tmp_9 = tmp_10 < 8;
              }
              if (tmp_9) {
                completeReadHead(input, current_0);
                tmp_8 = prepareReadFirstHead(input, size_1);
              } else {
                tmp_8 = current_0;
              }
            }
            var tmp1_elvis_lhs_0 = tmp_8;
            var tmp_11;
            if (tmp1_elvis_lhs_0 == null) {
              break $l$loop_0;
            } else {
              tmp_11 = tmp1_elvis_lhs_0;
            }
            var next_0 = tmp_11;
            current_0 = next_0;
            release_0 = true;
          }
           while (size_1 > 0);
        }finally {
          if (release_0) {
            completeReadHead(input, current_0);
          }
        }
      }
    }
    return charactersCopied;
  }
  function encodeImpl(_this__u8e3s4, input, fromIndex, toIndex, dst) {
    // Inline function 'kotlin.require' call
    var tmp0_require = fromIndex <= toIndex;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (get_charset_0(_this__u8e3s4).equals(Charsets_getInstance().s28_1)) {
      return encodeISO88591(input, fromIndex, toIndex, dst);
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = get_charset_0(_this__u8e3s4) === Charsets_getInstance().r28_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'io.ktor.utils.io.charsets.encodeImpl.<anonymous>' call
      tmp$ret$1 = 'Only UTF-8 encoding is supported in JS';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var encoder = new TextEncoder();
    var start = fromIndex;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.core.Buffer.writeRemaining' call
    tmp$ret$2 = dst.s1z_1 - dst.q1z_1 | 0;
    var dstRemaining = tmp$ret$2;
    $l$loop: while (start < toIndex ? dstRemaining > 0 : false) {
      var tmp$ret$3;
      // Inline function 'kotlin.comparisons.minOf' call
      var tmp2_minOf = toIndex - start | 0;
      var tmp3_minOf = dstRemaining / 6 | 0;
      tmp$ret$3 = Math.min(tmp2_minOf, tmp3_minOf);
      var numChars = coerceAtLeast(tmp$ret$3, 1);
      var dropLastChar = isHighSurrogate(charSequenceGet(input, (start + numChars | 0) - 1 | 0));
      var endIndexExclusive = (dropLastChar ? numChars === 1 : false) ? start + 2 | 0 : dropLastChar ? (start + numChars | 0) - 1 | 0 : start + numChars | 0;
      var tmp$ret$4;
      // Inline function 'kotlin.text.substring' call
      var tmp4_substring = start;
      tmp$ret$4 = toString(charSequenceSubSequence(input, tmp4_substring, endIndexExclusive));
      var array1 = encoder.encode(tmp$ret$4);
      if (array1.length > dstRemaining)
        break $l$loop;
      writeFully$default_1(dst, array1, 0, 0, 6, null);
      start = endIndexExclusive;
      dstRemaining = dstRemaining - array1.length | 0;
    }
    return start - fromIndex | 0;
  }
  function encodeComplete(_this__u8e3s4, dst) {
    return true;
  }
  function decodeExactBytes(_this__u8e3s4, input, inputLength) {
    if (inputLength === 0)
      return '';
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.Input.headRemaining' call
    tmp$ret$0 = input.d21_1 - input.c21_1 | 0;
    if (tmp$ret$0 >= inputLength) {
      var decoder = Decoder_0(get_charset(_this__u8e3s4).t28_1, true);
      var head = input.i27();
      var view = input.b21_1.o24_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'io.ktor.utils.io.js.decodeWrap' call
        try {
          var tmp$ret$1;
          // Inline function 'io.ktor.utils.io.charsets.decodeExactBytes.<anonymous>' call
          var subView = (head.p1z_1 === 0 ? inputLength === view.byteLength : false) ? view : new DataView(view.buffer, view.byteOffset + head.p1z_1 | 0, inputLength);
          tmp$ret$1 = decoder.n2c(subView);
          tmp$ret$2 = tmp$ret$1;
          break $l$block;
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_elvis_lhs = $p.message;
            throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
          } else {
            throw $p;
          }
        }
      }
      var text = tmp$ret$2;
      input.s25(inputLength);
      return text;
    }
    return decodeExactBytesSlow(_this__u8e3s4, input, inputLength);
  }
  function get_charset(_this__u8e3s4) {
    return _this__u8e3s4.b2c_1;
  }
  function get_charset_0(_this__u8e3s4) {
    return _this__u8e3s4.c2c_1;
  }
  function decodeExactBytesSlow(_this__u8e3s4, input, inputLength) {
    var decoder = Decoder_0(get_name(get_charset(_this__u8e3s4)), true);
    var inputRemaining = inputLength;
    var sb = StringBuilder_init_$Create$(inputLength);
    var tmp$ret$18;
    $l$block_4: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$17;
        // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>' call
        var tmp$ret$0;
        $l$block: {
          // Inline function 'io.ktor.utils.io.core.takeWhileSize' call
          var release = true;
          var tmp0_elvis_lhs = prepareReadFirstHead(input, 6);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var current = tmp;
          var size = 6;
          try {
            $l$loop: do {
              var tmp$ret$1;
              // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
              var tmp0__get_readRemaining__u3cy9h = current;
              tmp$ret$1 = tmp0__get_readRemaining__u3cy9h.q1z_1 - tmp0__get_readRemaining__u3cy9h.p1z_1 | 0;
              var before = tmp$ret$1;
              var after;
              if (before >= size) {
                try {
                  var tmp$ret$8;
                  // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                  var tmp0__anonymous__q1qw7t = current;
                  var tmp$ret$2;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  tmp$ret$2 = tmp0__anonymous__q1qw7t.q1z_1 - tmp0__anonymous__q1qw7t.p1z_1 | 0;
                  var chunkSize = tmp$ret$2;
                  var tmp$ret$3;
                  // Inline function 'kotlin.comparisons.minOf' call
                  var tmp0_minOf = inputRemaining;
                  tmp$ret$3 = Math.min(chunkSize, tmp0_minOf);
                  var size_0 = tmp$ret$3;
                  var tmp_0;
                  if (tmp0__anonymous__q1qw7t.p1z_1 === 0 ? tmp0__anonymous__q1qw7t.o1z_1.o24_1.byteLength === size_0 : false) {
                    var tmp$ret$4;
                    $l$block_0: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp1_decodeStream = tmp0__anonymous__q1qw7t.o1z_1.o24_1;
                      var tmp$ret$5;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$4 = decoder.j2c(tmp1_decodeStream, decodeOptions(true));
                        break $l$block_0;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_0 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_0 == null ? 'no cause provided' : tmp0_elvis_lhs_0));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$4;
                  } else {
                    var tmp$ret$6;
                    $l$block_1: {
                      // Inline function 'io.ktor.utils.io.js.decodeStream' call
                      var tmp2_decodeStream = new Int8Array(tmp0__anonymous__q1qw7t.o1z_1.o24_1.buffer, tmp0__anonymous__q1qw7t.o1z_1.o24_1.byteOffset + tmp0__anonymous__q1qw7t.p1z_1 | 0, size_0);
                      var tmp$ret$7;
                      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                      try {
                        tmp$ret$6 = decoder.j2c(tmp2_decodeStream, decodeOptions(true));
                        break $l$block_1;
                      } catch ($p) {
                        if ($p instanceof Error) {
                          var tmp0_elvis_lhs_1 = $p.message;
                          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_1 == null ? 'no cause provided' : tmp0_elvis_lhs_1));
                        } else {
                          throw $p;
                        }
                      }
                    }
                    tmp_0 = tmp$ret$6;
                  }
                  var text = tmp_0;
                  sb.x6(text);
                  tmp0__anonymous__q1qw7t.s25(size_0);
                  inputRemaining = inputRemaining - size_0 | 0;
                  tmp$ret$8 = inputRemaining > 0 ? 6 : 0;
                  size = tmp$ret$8;
                }finally {
                  var tmp$ret$9;
                  // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                  var tmp1__get_readRemaining__qliyus = current;
                  tmp$ret$9 = tmp1__get_readRemaining__qliyus.q1z_1 - tmp1__get_readRemaining__qliyus.p1z_1 | 0;
                  after = tmp$ret$9;
                }
              } else {
                after = before;
              }
              release = false;
              var tmp_1;
              if (after === 0) {
                tmp_1 = prepareReadNextHead(input, current);
              } else {
                var tmp_2;
                if (after < size) {
                  tmp_2 = true;
                } else {
                  var tmp$ret$10;
                  // Inline function 'io.ktor.utils.io.core.Buffer.endGap' call
                  var tmp2__get_endGap__m31424 = current;
                  tmp$ret$10 = tmp2__get_endGap__m31424.t1z_1 - tmp2__get_endGap__m31424.s1z_1 | 0;
                  var tmp_3 = tmp$ret$10;
                  Companion_getInstance_1();
                  tmp_2 = tmp_3 < 8;
                }
                if (tmp_2) {
                  completeReadHead(input, current);
                  tmp_1 = prepareReadFirstHead(input, size);
                } else {
                  tmp_1 = current;
                }
              }
              var tmp1_elvis_lhs = tmp_1;
              var tmp_4;
              if (tmp1_elvis_lhs == null) {
                break $l$loop;
              } else {
                tmp_4 = tmp1_elvis_lhs;
              }
              var next = tmp_4;
              current = next;
              release = true;
            }
             while (size > 0);
          }finally {
            if (release) {
              completeReadHead(input, current);
            }
          }
        }
        if (inputRemaining > 0) {
          var tmp$ret$11;
          $l$block_2: {
            // Inline function 'io.ktor.utils.io.core.takeWhile' call
            var release_0 = true;
            var tmp0_elvis_lhs_2 = prepareReadFirstHead(input, 1);
            var tmp_5;
            if (tmp0_elvis_lhs_2 == null) {
              tmp$ret$11 = Unit_getInstance();
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs_2;
            }
            var current_0 = tmp_5;
            try {
              $l$loop_1: do {
                var tmp$ret$16;
                // Inline function 'io.ktor.utils.io.charsets.decodeExactBytesSlow.<anonymous>.<anonymous>' call
                var tmp1__anonymous__uwfjfc = current_0;
                var tmp$ret$12;
                // Inline function 'io.ktor.utils.io.core.Buffer.readRemaining' call
                tmp$ret$12 = tmp1__anonymous__uwfjfc.q1z_1 - tmp1__anonymous__uwfjfc.p1z_1 | 0;
                var chunkSize_0 = tmp$ret$12;
                var tmp$ret$13;
                // Inline function 'kotlin.comparisons.minOf' call
                var tmp0_minOf_0 = inputRemaining;
                tmp$ret$13 = Math.min(chunkSize_0, tmp0_minOf_0);
                var size_1 = tmp$ret$13;
                var tmp_6;
                if (tmp1__anonymous__uwfjfc.p1z_1 === 0 ? tmp1__anonymous__uwfjfc.o1z_1.o24_1.byteLength === size_1 : false) {
                  tmp_6 = decoder.n2c(tmp1__anonymous__uwfjfc.o1z_1.o24_1);
                } else {
                  var tmp$ret$14;
                  $l$block_3: {
                    // Inline function 'io.ktor.utils.io.js.decodeStream' call
                    var tmp1_decodeStream_0 = new Int8Array(tmp1__anonymous__uwfjfc.o1z_1.o24_1.buffer, tmp1__anonymous__uwfjfc.o1z_1.o24_1.byteOffset + tmp1__anonymous__uwfjfc.p1z_1 | 0, size_1);
                    var tmp$ret$15;
                    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
                    try {
                      tmp$ret$14 = decoder.j2c(tmp1_decodeStream_0, decodeOptions(true));
                      break $l$block_3;
                    } catch ($p) {
                      if ($p instanceof Error) {
                        var tmp0_elvis_lhs_3 = $p.message;
                        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_3 == null ? 'no cause provided' : tmp0_elvis_lhs_3));
                      } else {
                        throw $p;
                      }
                    }
                  }
                  tmp_6 = tmp$ret$14;
                }
                var text_0 = tmp_6;
                sb.x6(text_0);
                tmp1__anonymous__uwfjfc.s25(size_1);
                inputRemaining = inputRemaining - size_1 | 0;
                tmp$ret$16 = true;
                if (!tmp$ret$16) {
                  break $l$loop_1;
                }
                release_0 = false;
                var tmp1_elvis_lhs_0 = prepareReadNextHead(input, current_0);
                var tmp_7;
                if (tmp1_elvis_lhs_0 == null) {
                  break $l$loop_1;
                } else {
                  tmp_7 = tmp1_elvis_lhs_0;
                }
                var next_0 = tmp_7;
                current_0 = next_0;
                release_0 = true;
              }
               while (true);
            }finally {
              if (release_0) {
                completeReadHead(input, current_0);
              }
            }
          }
        }
        tmp$ret$17 = sb.x6(decoder.k2c());
        tmp$ret$18 = tmp$ret$17;
        break $l$block_4;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs_4 = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs_4 == null ? 'no cause provided' : tmp0_elvis_lhs_4));
        } else {
          throw $p;
        }
      }
    }
    if (inputRemaining > 0) {
      throw new EOFException('Not enough bytes available: had only ' + (inputLength - inputRemaining | 0) + ' instead of ' + inputLength);
    }
    return sb.toString();
  }
  function get_MAX_CHARACTERS_SIZE_IN_BYTES() {
    return MAX_CHARACTERS_SIZE_IN_BYTES;
  }
  var MAX_CHARACTERS_SIZE_IN_BYTES;
  function DecodeBufferResult(charactersDecoded, bytesConsumed) {
    this.l2c_1 = charactersDecoded;
    this.m2c_1 = bytesConsumed;
  }
  DecodeBufferResult.prototype.o2c = function () {
    return this.l2c_1;
  };
  DecodeBufferResult.prototype.p2c = function () {
    return this.m2c_1;
  };
  DecodeBufferResult.prototype.toString = function () {
    return 'DecodeBufferResult(charactersDecoded=' + this.l2c_1 + ', bytesConsumed=' + this.m2c_1 + ')';
  };
  DecodeBufferResult.prototype.hashCode = function () {
    var result = getStringHashCode(this.l2c_1);
    result = imul(result, 31) + this.m2c_1 | 0;
    return result;
  };
  DecodeBufferResult.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecodeBufferResult))
      return false;
    var tmp0_other_with_cast = other instanceof DecodeBufferResult ? other : THROW_CCE();
    if (!(this.l2c_1 === tmp0_other_with_cast.l2c_1))
      return false;
    if (!(this.m2c_1 === tmp0_other_with_cast.m2c_1))
      return false;
    return true;
  };
  DecodeBufferResult.$metadata$ = classMeta('DecodeBufferResult');
  function decodeBufferImpl(_this__u8e3s4, nativeDecoder, maxCharacters) {
    if (maxCharacters === 0) {
      return new DecodeBufferResult('', 0);
    }
    try {
      var sizeInBytes = coerceAtMost(maxCharacters, _this__u8e3s4.byteLength);
      var text = nativeDecoder.n2c(_this__u8e3s4.subarray(0, sizeInBytes));
      if (text.length <= maxCharacters) {
        return new DecodeBufferResult(text, sizeInBytes);
      }
    } catch ($p) {
    }
    return decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters);
  }
  function decodeBufferImplSlow(_this__u8e3s4, nativeDecoder, maxCharacters) {
    var maxBytes = coerceAtMost(maxCharacters >= 268435455 ? IntCompanionObject_getInstance().w_1 : imul(maxCharacters, 8), _this__u8e3s4.byteLength);
    var sizeInBytes = maxBytes;
    while (sizeInBytes > 8) {
      try {
        var text = nativeDecoder.n2c(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text.length <= maxCharacters) {
          return new DecodeBufferResult(text, sizeInBytes);
        }
      } catch ($p) {
      }
      sizeInBytes = sizeInBytes / 2 | 0;
    }
    sizeInBytes = 8;
    while (sizeInBytes > 0) {
      try {
        var text_0 = nativeDecoder.n2c(_this__u8e3s4.subarray(0, sizeInBytes));
        if (text_0.length <= maxCharacters) {
          return new DecodeBufferResult(text_0, sizeInBytes);
        }
      } catch ($p) {
      }
      var tmp0 = sizeInBytes;
      sizeInBytes = tmp0 - 1 | 0;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'io.ktor.utils.io.js.decodeWrap' call
      try {
        var tmp$ret$0;
        // Inline function 'io.ktor.utils.io.charsets.decodeBufferImplSlow.<anonymous>' call
        tmp$ret$0 = nativeDecoder.n2c(_this__u8e3s4);
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          var tmp0_elvis_lhs = $p.message;
          throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
        } else {
          throw $p;
        }
      }
    }
    throw new MalformedInputException('Unable to decode buffer');
  }
  function encodeISO88591(input, fromIndex, toIndex, dst) {
    if (fromIndex >= toIndex)
      return 0;
    var tmp$ret$5;
    // Inline function 'io.ktor.utils.io.core.writeDirect' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$4;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$3;
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = dst.o1z_1;
    var tmp1__anonymous__uwfjfc = dst.q1z_1;
    var tmp2__anonymous__z9zvc9 = dst.s1z_1;
    var tmp$ret$2;
    // Inline function 'io.ktor.utils.io.charsets.encodeISO88591.<anonymous>' call
    var tmp3__anonymous__ufb84q = tmp0__anonymous__q1qw7t.x2b(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).o24_1;
    var i8 = new Int8Array(tmp3__anonymous__ufb84q.buffer, tmp3__anonymous__ufb84q.byteOffset, tmp3__anonymous__ufb84q.byteLength);
    var writeIndex = 0;
    var inductionVariable = fromIndex;
    if (inductionVariable < toIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g = charSequenceGet(input, index);
        tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
        var character = tmp$ret$0;
        if (character > 255) {
          failedToMapError(character);
        }
        // Inline function 'org.khronos.webgl.set' call
        var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        var tmp1_set = tmp1;
        var tmp2_set = toByte(character);
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = i8;
        tmp$ret$1[tmp1_set] = tmp2_set;
      }
       while (inductionVariable < toIndex);
    tmp$ret$2 = writeIndex;
    tmp$ret$3 = tmp$ret$2;
    var rc = tmp$ret$3;
    dst.t25(rc);
    tmp$ret$4 = rc;
    tmp$ret$5 = tmp$ret$4;
    return toIndex - fromIndex | 0;
  }
  function failedToMapError(ch) {
    throw new MalformedInputException('The character with unicode point ' + ch + " couldn't be mapped to ISO-8859-1 character");
  }
  function readDirectInt8Array(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.read' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.readDirectInt8Array.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.p1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.q1z_1;
    tmp$ret$0 = block(new Int8Array(tmp0__anonymous__q1qw7t.o24_1.buffer, tmp0__anonymous__q1qw7t.o24_1.byteOffset + tmp1__anonymous__uwfjfc | 0, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0));
    var rc = tmp$ret$0;
    _this__u8e3s4.s25(rc);
    tmp$ret$1 = rc;
    return tmp$ret$1;
  }
  function writeFully_4(_this__u8e3s4, src, offset, length) {
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeFully.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.q1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.s1z_1;
    if ((tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0) < length) {
      throw new InsufficientSpaceException('Not enough free space to write ' + length + ' bytes');
    }
    copyTo_1(src, tmp0__anonymous__q1qw7t, offset, length, tmp1__anonymous__uwfjfc);
    tmp$ret$0 = length;
    var rc = tmp$ret$0;
    _this__u8e3s4.t25(rc);
    tmp$ret$1 = rc;
  }
  function writeFully$default_1(_this__u8e3s4, src, offset, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = src.byteLength - offset | 0;
    return writeFully_4(_this__u8e3s4, src, offset, length);
  }
  function writeDirect(_this__u8e3s4, block) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'io.ktor.utils.io.core.write' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.core.writeDirect.<anonymous>' call
    var tmp0__anonymous__q1qw7t = _this__u8e3s4.o1z_1;
    var tmp1__anonymous__uwfjfc = _this__u8e3s4.q1z_1;
    var tmp2__anonymous__z9zvc9 = _this__u8e3s4.s1z_1;
    tmp$ret$0 = block(tmp0__anonymous__q1qw7t.x2b(tmp1__anonymous__uwfjfc, tmp2__anonymous__z9zvc9 - tmp1__anonymous__uwfjfc | 0).o24_1);
    var rc = tmp$ret$0;
    _this__u8e3s4.t25(rc);
    tmp$ret$1 = rc;
    return tmp$ret$1;
  }
  function Closeable() {
  }
  Closeable.$metadata$ = interfaceMeta('Closeable');
  function get_PACKET_MAX_COPY_SIZE() {
    return PACKET_MAX_COPY_SIZE;
  }
  var PACKET_MAX_COPY_SIZE;
  function String_0(bytes, offset, length, charset) {
    if ((offset < 0 ? true : length < 0) ? true : (offset + length | 0) > bytes.length) {
      checkIndices(offset, length, bytes);
    }
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = bytes;
    var i8 = tmp$ret$0;
    var bufferOffset = i8.byteOffset + offset | 0;
    var buffer = i8.buffer.slice(bufferOffset, bufferOffset + length | 0);
    var tmp = Companion_getInstance_6();
    var view = new ChunkBuffer(of$default(tmp, buffer, 0, 0, 6, null), null, Companion_getInstance_4().e1w_1);
    view.z25();
    var packet = ByteReadPacket_init_$Create$(view, Companion_getInstance_4().f1w_1);
    return decode(charset.v28(), packet, IntCompanionObject_getInstance().w_1);
  }
  function String$default(bytes, offset, length, charset, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      offset = 0;
    if (!(($mask0 & 4) === 0))
      length = bytes.length;
    if (!(($mask0 & 8) === 0))
      charset = Charsets_getInstance().r28_1;
    return String_0(bytes, offset, length, charset);
  }
  function checkIndices(offset, length, bytes) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = length >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      throw IndexOutOfBoundsException_init_$Create$('length (' + length + ") shouldn't be negative");
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = (offset + length | 0) <= bytes.length;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      throw IndexOutOfBoundsException_init_$Create$('offset (' + offset + ') + length (' + length + ') > bytes.size (' + bytes.length + ')');
    }
    throw IndexOutOfBoundsException_init_$Create$_0();
  }
  function EOFException(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, EOFException);
  }
  EOFException.$metadata$ = classMeta('EOFException', undefined, undefined, undefined, undefined, IOException.prototype);
  function IOException_init_$Init$(message, $this) {
    IOException.call($this, message, null);
    return $this;
  }
  function IOException(message, cause) {
    Exception_init_$Init$_0(message, cause, this);
    captureStack(this, IOException);
  }
  IOException.$metadata$ = classMeta('IOException', undefined, undefined, undefined, undefined, Exception.prototype);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Decoder_0(encoding, fatal) {
    var tmp;
    try {
      tmp = toKtor(new TextDecoder(encoding, textDecoderOptions(fatal)));
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = new TextDecoderFallback(encoding, fatal);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function decodeStream(_this__u8e3s4, buffer, stream) {
    var tmp$ret$0;
    // Inline function 'io.ktor.utils.io.js.decodeWrap' call
    try {
      return _this__u8e3s4.j2c(buffer, decodeOptions(stream));
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_elvis_lhs = $p.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
  }
  function decodeOptions(stream) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.decodeOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.stream = stream;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor(_this__u8e3s4) {
    return new toKtor$1(_this__u8e3s4);
  }
  function textDecoderOptions(fatal) {
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Object();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'io.ktor.utils.io.js.textDecoderOptions.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.with' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_apply;
    var tmp0_with = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = tmp0_with.fatal = fatal;
    tmp$ret$2 = tmp0_apply;
    return tmp$ret$2;
  }
  function toKtor$1($this_toKtor) {
    this.q2c_1 = $this_toKtor;
  }
  toKtor$1.prototype.k2c = function () {
    return this.q2c_1.decode();
  };
  toKtor$1.prototype.n2c = function (buffer) {
    return this.q2c_1.decode(buffer);
  };
  toKtor$1.prototype.j2c = function (buffer, options) {
    return this.q2c_1.decode(buffer, options);
  };
  toKtor$1.$metadata$ = classMeta(undefined, [Decoder]);
  function get_ENCODING_ALIASES() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return ENCODING_ALIASES;
  }
  var ENCODING_ALIASES;
  function get_REPLACEMENT() {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return REPLACEMENT;
  }
  var REPLACEMENT;
  function TextDecoderFallback(encoding, fatal) {
    this.r2c_1 = fatal;
    var tmp$ret$2;
    // Inline function 'kotlin.text.lowercase' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.trim' call
    tmp$ret$0 = toString(trim(isCharSequence(encoding) ? encoding : THROW_CCE()));
    var tmp0_lowercase = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp0_lowercase;
    tmp$ret$2 = tmp$ret$1.toLowerCase();
    var requestedEncoding = tmp$ret$2;
    // Inline function 'kotlin.check' call
    var tmp1_check = get_ENCODING_ALIASES().l1(requestedEncoding);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_check) {
      var tmp$ret$3;
      // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.<anonymous>' call
      tmp$ret$3 = encoding + ' is not supported.';
      var message = tmp$ret$3;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  TextDecoderFallback.prototype.s2c = function () {
    return this.r2c_1;
  };
  TextDecoderFallback.prototype.k2c = function () {
    return '';
  };
  TextDecoderFallback.prototype.n2c = function (buffer) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'io.ktor.utils.io.core.buildPacket' call
      // Inline function 'kotlin.contracts.contract' call
      var builder = BytePacketBuilder_init_$Create$(null, 1, null);
      try {
        // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>' call
        var bytes = buffer instanceof Int8Array ? buffer : THROW_CCE();
        var inductionVariable = 0;
        var last = bytes.length;
        if (inductionVariable < last)
          $l$loop: do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp$ret$1;
            // Inline function 'org.khronos.webgl.get' call
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = bytes;
            tmp$ret$1 = tmp$ret$0[index];
            var byte = tmp$ret$1;
            var point = toCodePoint(byte);
            if (point < 0) {
              // Inline function 'kotlin.check' call
              var tmp0_check = !this.r2c_1;
              // Inline function 'kotlin.contracts.contract' call
              if (!tmp0_check) {
                var tmp$ret$2;
                // Inline function 'io.ktor.utils.io.js.TextDecoderFallback.decode.<anonymous>.<anonymous>' call
                tmp$ret$2 = 'Invalid character: ' + point;
                var message = tmp$ret$2;
                throw IllegalStateException_init_$Create$(toString(message));
              }
              var tmp = get_REPLACEMENT();
              writeFully$default_0(builder, tmp, 0, 0, 6, null);
              continue $l$loop;
            }
            if (point > 255) {
              builder.h26(toByte(point >> 8));
            }
            builder.h26(toByte(point & 255));
          }
           while (inductionVariable < last);
        tmp$ret$3 = builder.gs();
        break $l$block;
      } catch ($p) {
        if ($p instanceof Error) {
          builder.t12();
          throw $p;
        } else {
          throw $p;
        }
      }
    }
    var tmp_0 = tmp$ret$3;
    return decodeToString(readBytes$default(tmp_0, 0, 1, null));
  };
  TextDecoderFallback.prototype.j2c = function (buffer, options) {
    return this.n2c(buffer);
  };
  TextDecoderFallback.$metadata$ = classMeta('TextDecoderFallback', [Decoder]);
  function toCodePoint(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    var value = _this__u8e3s4 & 255;
    if (isASCII(value)) {
      return value;
    }
    return get_WIN1252_TABLE()[value - 128 | 0];
  }
  function isASCII(_this__u8e3s4) {
    init_properties_TextDecoderFallback_kt_mch4cl();
    return 0 <= _this__u8e3s4 ? _this__u8e3s4 <= 127 : false;
  }
  var properties_initialized_TextDecoderFallback_kt_7y92ax;
  function init_properties_TextDecoderFallback_kt_mch4cl() {
    if (properties_initialized_TextDecoderFallback_kt_7y92ax) {
    } else {
      properties_initialized_TextDecoderFallback_kt_7y92ax = true;
      ENCODING_ALIASES = setOf(['ansi_x3.4-1968', 'ascii', 'cp1252', 'cp819', 'csisolatin1', 'ibm819', 'iso-8859-1', 'iso-ir-100', 'iso8859-1', 'iso88591', 'iso_8859-1', 'iso_8859-1:1987', 'l1', 'latin1', 'us-ascii', 'windows-1252', 'x-cp1252']);
      var tmp$ret$0;
      // Inline function 'kotlin.byteArrayOf' call
      var tmp0_byteArrayOf = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf;
      REPLACEMENT = tmp$ret$0;
    }
  }
  function decodeWrap(block) {
    try {
      return block();
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_elvis_lhs = $p.message;
        throw new MalformedInputException('Failed to decode bytes: ' + (tmp0_elvis_lhs == null ? 'no cause provided' : tmp0_elvis_lhs));
      } else {
        throw $p;
      }
    }
  }
  function get_WIN1252_TABLE() {
    init_properties_Win1252Table_kt_2hu70m();
    return WIN1252_TABLE;
  }
  var WIN1252_TABLE;
  var properties_initialized_Win1252Table_kt_pkmjoq;
  function init_properties_Win1252Table_kt_2hu70m() {
    if (properties_initialized_Win1252Table_kt_pkmjoq) {
    } else {
      properties_initialized_Win1252Table_kt_pkmjoq = true;
      var tmp$ret$0;
      // Inline function 'kotlin.intArrayOf' call
      tmp$ret$0 = new Int32Array([8364, -1, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352, 8249, 338, -1, 381, -1, -1, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732, 8482, 353, 8250, 339, -1, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255]);
      WIN1252_TABLE = tmp$ret$0;
    }
  }
  function DefaultPool(capacity) {
    this.q26_1 = capacity;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.q26_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.r26_1 = tmp$ret$0;
    this.s26_1 = 0;
  }
  DefaultPool.prototype.t26 = function (instance) {
  };
  DefaultPool.prototype.a27 = function (instance) {
    return instance;
  };
  DefaultPool.prototype.w26 = function (instance) {
  };
  DefaultPool.prototype.s24 = function () {
    if (this.s26_1 === 0)
      return this.o26();
    var tmp0_this = this;
    tmp0_this.s26_1 = tmp0_this.s26_1 - 1 | 0;
    var idx = tmp0_this.s26_1;
    var tmp = this.r26_1[idx];
    var instance = isObject(tmp) ? tmp : THROW_CCE();
    this.r26_1[idx] = null;
    return this.a27(instance);
  };
  DefaultPool.prototype.c27 = function (instance) {
    this.w26(instance);
    if (this.s26_1 === this.q26_1) {
      this.t26(instance);
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.s26_1;
      tmp0_this.s26_1 = tmp1 + 1 | 0;
      this.r26_1[tmp1] = instance;
    }
  };
  DefaultPool.prototype.i1g = function () {
    var inductionVariable = 0;
    var last = this.s26_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.r26_1[i];
        var instance = isObject(tmp) ? tmp : THROW_CCE();
        this.r26_1[i] = null;
        this.t26(instance);
      }
       while (inductionVariable < last);
    this.s26_1 = 0;
  };
  DefaultPool.$metadata$ = classMeta('DefaultPool', [ObjectPool]);
  //region block: post-declaration
  ByteChannelSequentialBase.prototype.m23 = readRemaining$default;
  ChannelJob.prototype.k1e = cancel$default;
  ChannelJob.prototype.g1e = invokeOnCompletion$default;
  DefaultPool.prototype.i1u = close;
  DefaultBufferPool.prototype.i1u = close;
  ChunkBuffer$Companion$Pool$1.prototype.i1u = close;
  ChunkBuffer$Companion$EmptyPool$1.prototype.i1u = close;
  NoPoolImpl.prototype.i1u = close;
  ChunkBuffer$Companion$NoPool$1.prototype.i1u = close;
  ChunkBuffer$Companion$NoPoolManuallyManaged$1.prototype.i1u = close;
  ByteArrayPool$1.prototype.i1u = close;
  ByteChannelJS.prototype.m23 = readRemaining$default;
  //endregion
  //region block: init
  DEFAULT_BUFFER_SIZE = 4096;
  MAX_CHARACTERS_SIZE_IN_BYTES = 8;
  PACKET_MAX_COPY_SIZE = 200;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = copyTo;
  _.$_$.b = readAvailable;
  _.$_$.c = writeFully;
  _.$_$.d = decode$default;
  _.$_$.e = encode$default;
  _.$_$.f = String$default;
  _.$_$.g = readBytes$default;
  _.$_$.h = readText$default;
  _.$_$.i = writeFully$default_0;
  _.$_$.j = writeText$default;
  _.$_$.k = writer$default;
  _.$_$.l = BytePacketBuilder_init_$Create$;
  _.$_$.m = IOException_init_$Init$;
  _.$_$.n = Companion_getInstance_7;
  _.$_$.o = Charsets_getInstance;
  _.$_$.p = Companion_getInstance_5;
  _.$_$.q = MalformedInputException;
  _.$_$.r = encodeToByteArray_0;
  _.$_$.s = encode;
  _.$_$.t = get_name;
  _.$_$.u = completeReadHead;
  _.$_$.v = prepareReadFirstHead;
  _.$_$.w = prepareReadNextHead;
  _.$_$.x = ByteReadPacket;
  _.$_$.y = Closeable;
  _.$_$.z = Input;
  _.$_$.a1 = String_0;
  _.$_$.b1 = discard;
  _.$_$.c1 = readShort_0;
  _.$_$.d1 = writeShort_0;
  _.$_$.e1 = IOException;
  _.$_$.f1 = get_ByteArrayPool;
  _.$_$.g1 = ByteReadChannel;
  _.$_$.h1 = ByteReadChannel_1;
  _.$_$.i1 = WriterScope;
  _.$_$.j1 = cancel;
  _.$_$.k1 = writer;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-io-js-ir.js.map
