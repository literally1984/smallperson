(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir'.");
    }
    root['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] = factory(typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined' ? {} : this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.tc;
  var isObject = kotlin_kotlin.$_$.z9;
  var Unit_getInstance = kotlin_kotlin.$_$.a5;
  var plus = kotlin_kotlin.$_$.q8;
  var get = kotlin_kotlin.$_$.m8;
  var fold = kotlin_kotlin.$_$.l8;
  var minusKey = kotlin_kotlin.$_$.n8;
  var Continuation = kotlin_kotlin.$_$.k8;
  var classMeta = kotlin_kotlin.$_$.f9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.j4;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.d8;
  var CoroutineImpl = kotlin_kotlin.$_$.r8;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var interfaceMeta = kotlin_kotlin.$_$.o9;
  var isInterface = kotlin_kotlin.$_$.x9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var toString = kotlin_kotlin.$_$.ud;
  var toString_0 = kotlin_kotlin.$_$.ka;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.ga;
  var hashCode = kotlin_kotlin.$_$.n9;
  var equals = kotlin_kotlin.$_$.h9;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.v2;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.x2;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.g8;
  var Key_getInstance = kotlin_kotlin.$_$.i4;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.f8;
  var get_0 = kotlin_kotlin.$_$.h8;
  var minusKey_0 = kotlin_kotlin.$_$.i8;
  var ContinuationInterceptor = kotlin_kotlin.$_$.j8;
  var Key = kotlin_kotlin.$_$.p8;
  var Element = kotlin_kotlin.$_$.o8;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.h2;
  var getStringHashCode = kotlin_kotlin.$_$.m9;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var Enum = kotlin_kotlin.$_$.jc;
  var startCoroutine = kotlin_kotlin.$_$.u8;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.rd;
  var Long = kotlin_kotlin.$_$.oc;
  var intercepted = kotlin_kotlin.$_$.e8;
  var Companion_getInstance = kotlin_kotlin.$_$.u4;
  var RuntimeException = kotlin_kotlin.$_$.sc;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.g2;
  var captureStack = kotlin_kotlin.$_$.z8;
  var Error_0 = kotlin_kotlin.$_$.kc;
  var Error_init_$Init$ = kotlin_kotlin.$_$.q1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.o1;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.td;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var CancellationException = kotlin_kotlin.$_$.b8;
  var ArrayList = kotlin_kotlin.$_$.b5;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var anyToString = kotlin_kotlin.$_$.w8;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.v4;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.u2;
  var createFailure = kotlin_kotlin.$_$.jd;
  var UnsupportedOperationException = kotlin_kotlin.$_$.fd;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var fillArrayVal = kotlin_kotlin.$_$.j9;
  var fill = kotlin_kotlin.$_$.m6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var fill$default = kotlin_kotlin.$_$.h;
  var ensureNotNull = kotlin_kotlin.$_$.kd;
  var NoSuchElementException = kotlin_kotlin.$_$.pc;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.f2;
  var IllegalStateException = kotlin_kotlin.$_$.nc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var arrayCopy = kotlin_kotlin.$_$.t5;
  var toLong = kotlin_kotlin.$_$.ia;
  var toLongOrNull = kotlin_kotlin.$_$.tb;
  var getKClassFromExpression = kotlin_kotlin.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.l1;
  var coerceIn = kotlin_kotlin.$_$.pa;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.j1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.b1;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.j2;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.j1e(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  function invokeOnCompletion$default(onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.f1e(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  }
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  $awaitCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$0.prototype.constructor = $awaitCOROUTINE$0;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  function tryResume$default(value, idempotent, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      idempotent = null;
    return $handler == null ? this.y1f(value, idempotent) : $handler(value, idempotent);
  }
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  $awaitCOROUTINE$1.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$1.prototype.constructor = $awaitCOROUTINE$1;
  CompletableDeferredImpl.prototype = Object.create(JobSupport.prototype);
  CompletableDeferredImpl.prototype.constructor = CompletableDeferredImpl;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_0.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_0.prototype.constructor = Key_0;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  _no_name_provided__qut3iv.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  _no_name_provided__qut3iv.prototype.constructor = _no_name_provided__qut3iv;
  CoroutineName.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineName.prototype.constructor = CoroutineName;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  AwaitContinuation.prototype.constructor = AwaitContinuation;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  SupervisorJobImpl.prototype = Object.create(JobImpl.prototype);
  SupervisorJobImpl.prototype.constructor = SupervisorJobImpl;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  RemoveReceiveOnCancel.prototype = Object.create(BeforeResumeCancelHandler.prototype);
  RemoveReceiveOnCancel.prototype.constructor = RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  ReceiveHasNext.prototype = Object.create(Receive.prototype);
  ReceiveHasNext.prototype.constructor = ReceiveHasNext;
  function close$default(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return $handler == null ? this.j1q(cause) : $handler(cause);
  }
  function cancel$default_0(cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    var tmp;
    if ($handler == null) {
      this.j1e(cause);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(cause);
    }
    return tmp;
  }
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  Send.prototype = Object.create(LinkedListNode.prototype);
  Send.prototype.constructor = Send;
  SendBuffered.prototype = Object.create(Send.prototype);
  SendBuffered.prototype.constructor = SendBuffered;
  Closed.prototype = Object.create(Send.prototype);
  Closed.prototype.constructor = Closed;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BufferOverflow.prototype = Object.create(Enum.prototype);
  BufferOverflow.prototype.constructor = BufferOverflow;
  Closed_0.prototype = Object.create(Failed.prototype);
  Closed_0.prototype.constructor = Closed_0;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ClosedSendChannelException.prototype = Object.create(IllegalStateException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  $collectCOROUTINE$5.prototype = Object.create(CoroutineImpl.prototype);
  $collectCOROUTINE$5.prototype.constructor = $collectCOROUTINE$5;
  $emitCOROUTINE$11.prototype = Object.create(CoroutineImpl.prototype);
  $emitCOROUTINE$11.prototype.constructor = $emitCOROUTINE$11;
  $firstOrNullCOROUTINE$10.prototype = Object.create(CoroutineImpl.prototype);
  $firstOrNullCOROUTINE$10.prototype.constructor = $firstOrNullCOROUTINE$10;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  UndeliveredElementException.prototype = Object.create(RuntimeException.prototype);
  UndeliveredElementException.prototype.constructor = UndeliveredElementException;
  CloseableCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  CloseableCoroutineDispatcher.prototype.constructor = CloseableCoroutineDispatcher;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  SetTimeoutBasedDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  SetTimeoutBasedDispatcher.prototype.constructor = SetTimeoutBasedDispatcher;
  NodeDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  SetTimeoutDispatcher.prototype = Object.create(SetTimeoutBasedDispatcher.prototype);
  SetTimeoutDispatcher.prototype.constructor = SetTimeoutDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  ScheduledMessageQueue.prototype = Object.create(MessageQueue.prototype);
  ScheduledMessageQueue.prototype.constructor = ScheduledMessageQueue;
  ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  ClearTimeout.prototype.constructor = ClearTimeout;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  WindowMessageQueue.prototype = Object.create(MessageQueue.prototype);
  WindowMessageQueue.prototype.constructor = WindowMessageQueue;
  AbortFlowException.prototype = Object.create(CancellationException.prototype);
  AbortFlowException.prototype.constructor = AbortFlowException;
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.z1c(parentContext.y3(Key_getInstance_3()));
    }
    this.c1d_1 = parentContext.f4(this);
  }
  AbstractCoroutine.prototype.u3 = function () {
    return this.c1d_1;
  };
  AbstractCoroutine.prototype.d1d = function () {
    return this.c1d_1;
  };
  AbstractCoroutine.prototype.e1d = function () {
    return JobSupport.prototype.e1d.call(this);
  };
  AbstractCoroutine.prototype.f1d = function (value) {
  };
  AbstractCoroutine.prototype.g1d = function (cause, handled) {
  };
  AbstractCoroutine.prototype.h1d = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  AbstractCoroutine.prototype.i1d = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.g1d(state.j1d_1, state.l1d());
    } else {
      this.f1d((state == null ? true : isObject(state)) ? state : THROW_CCE());
    }
  };
  AbstractCoroutine.prototype.v3 = function (result) {
    var state = this.m1d(toState$default(result, null, 1, null));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_getInstance();
    this.n1d(state);
  };
  AbstractCoroutine.prototype.n1d = function (state) {
    return this.o1d(state);
  };
  AbstractCoroutine.prototype.p1d = function (exception) {
    handleCoroutineException(this.c1d_1, exception);
  };
  AbstractCoroutine.prototype.q1d = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.c1d_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return JobSupport.prototype.q1d.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + JobSupport.prototype.q1d.call(this);
  };
  AbstractCoroutine.prototype.r1d = function (start, receiver, block) {
    start.u1d(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = classMeta('AbstractCoroutine', [Job, Continuation, CoroutineScope], undefined, undefined, undefined, JobSupport.prototype);
  function launch(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.x1e() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.r1d(start, coroutine, block);
    return coroutine;
  }
  function launch$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return launch(_this__u8e3s4, context, start, block);
  }
  function async(_this__u8e3s4, context, start, block) {
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.x1e() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.r1d(start, coroutine, block);
    return coroutine;
  }
  function async$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return async(_this__u8e3s4, context, start, block);
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  StandaloneCoroutine.prototype.v1e = function (exception) {
    handleCoroutineException(this.c1d_1, exception);
    return true;
  };
  StandaloneCoroutine.$metadata$ = classMeta('StandaloneCoroutine', undefined, undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.e1f_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyStandaloneCoroutine.prototype.a1e = function () {
    startCoroutineCancellable_0(this.e1f_1, this);
  };
  LazyStandaloneCoroutine.$metadata$ = classMeta('LazyStandaloneCoroutine', undefined, undefined, undefined, undefined, StandaloneCoroutine.prototype);
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1f_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.n1f_1.o1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$0.$metadata$ = classMeta('$awaitCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  DeferredCoroutine.prototype.s1f = function ($cont) {
    var tmp = new $awaitCOROUTINE$0(this, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  DeferredCoroutine.$metadata$ = classMeta('DeferredCoroutine', [Deferred, SelectClause1], undefined, undefined, undefined, AbstractCoroutine.prototype);
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.w1f_1 = createCoroutineUnintercepted(block, this, this);
  }
  LazyDeferredCoroutine.prototype.a1e = function () {
    startCoroutineCancellable_0(this.w1f_1, this);
  };
  LazyDeferredCoroutine.$metadata$ = classMeta('LazyDeferredCoroutine', undefined, undefined, undefined, undefined, DeferredCoroutine.prototype);
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = interfaceMeta('CancellableContinuation', [Continuation]);
  function disposeOnCancellation(_this__u8e3s4, handle) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new DisposeOnCancel(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return _this__u8e3s4.d1g(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.g1g_1 = handle;
  }
  DisposeOnCancel.prototype.h1g = function (cause) {
    return this.g1g_1.i1g();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.g1g_1 + ']';
  };
  DisposeOnCancel.$metadata$ = classMeta('DisposeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE());
    }
    var tmp0_safe_receiver = delegate.p1g();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.getOrCreateCancellableContinuation.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.w1g();
      if (tmp$ret$0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp$ret$1 = tmp_0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, get_MODE_CANCELLABLE_REUSABLE());
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    init_properties_CancellableContinuationImpl_kt_jcze1b();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.x1d();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.y1g_1)) {
      var tmp_0 = $this.r1g_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).x1g();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.r1g_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.z1g(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      invokeIt(handler, cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException($this.u3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.t1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.trySuspend.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.n1c_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.t1g_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already suspended');
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.t1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResume.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.n1c_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      switch (tmp0_subject) {
        case 0:
          if ($this.t1g_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          throw IllegalStateException_init_$Create$('Already resumed');
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.u3().y3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildContinuation($this);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var handle = parent.g1e(true, false, tmp$ret$1, 2, null);
    $this.v1g_1 = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this.r1g_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a1h($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.b1h();
    $this.c1h(cancellationCause);
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var tmp0_error = "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      tmp = new InvokeOnCancel(handler);
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            tmp_2 = false;
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.u1g_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.resumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, resumeMode, onCancellation, null);
          if (!$this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          dispatchResume($this, resumeMode);
          return Unit_getInstance();
        } else {
          if (tmp0_subject instanceof CancelledContinuation) {
            if (tmp1__anonymous__uwfjfc.h1h()) {
              var tmp1_safe_receiver = onCancellation;
              if (tmp1_safe_receiver == null)
                null;
              else {
                var tmp$ret$1;
                // Inline function 'kotlin.let' call
                // Inline function 'kotlin.contracts.contract' call
                $this.d1h(tmp1_safe_receiver, tmp1__anonymous__uwfjfc.j1d_1);
                tmp$ret$1 = Unit_getInstance();
              }
              return Unit_getInstance();
            }
          }
        }
        alreadyResumedError($this, proposedUpdate);
      }
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = $this.u1g_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.tryResumeImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
        var tmp0_subject = tmp1__anonymous__uwfjfc;
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
          var update = resumedState($this, tmp1__anonymous__uwfjfc, proposedUpdate, $this.y1g_1, onCancellation, idempotent);
          if (!$this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }
          detachChildIfNonResuable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0_subject instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) ? tmp1__anonymous__uwfjfc.l1h_1 === idempotent : false) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var tmp0_error = 'Already resumed, but proposed with update ' + toString(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this)) {
      $this.b1h();
    }
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.r1g_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.s1g_1 = this.r1g_1.u3();
    this.t1g_1 = atomic$int$1(0);
    this.u1g_1 = atomic$ref$1(Active_getInstance());
    this.v1g_1 = null;
  }
  CancellableContinuationImpl.prototype.n1h = function () {
    return this.r1g_1;
  };
  CancellableContinuationImpl.prototype.u3 = function () {
    return this.s1g_1;
  };
  CancellableContinuationImpl.prototype.x1d = function () {
    return this.u1g_1.m1c_1;
  };
  CancellableContinuationImpl.prototype.y1d = function () {
    var tmp = this.x1d();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.x1f = function () {
    var tmp = this.x1d();
    return tmp instanceof CancelledContinuation;
  };
  CancellableContinuationImpl.prototype.o1h = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.y1d()) {
      handle.i1g();
      this.v1g_1 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.w1g = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.u1g_1.m1c_1;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.l1h_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.b1h();
      return false;
    }
    this.t1g_1.n1c_1 = 0;
    this.u1g_1.m1c_1 = Active_getInstance();
    return true;
  };
  CancellableContinuationImpl.prototype.p1h = function () {
    return this.x1d();
  };
  CancellableContinuationImpl.prototype.q1h = function (takenState, cause) {
    var tmp0_loop = this.u1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        throw IllegalStateException_init_$Create$('Not completed');
      } else {
        if (tmp0_subject instanceof CompletedExceptionally)
          return Unit_getInstance();
        else {
          if (tmp0_subject instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            var tmp0_check = !tmp1__anonymous__uwfjfc.r1h();
            // Inline function 'kotlin.contracts.contract' call
            if (!tmp0_check) {
              var tmp$ret$0;
              // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancelCompletedResult.<anonymous>.<anonymous>' call
              tmp$ret$0 = 'Must be called at most once';
              var message = tmp$ret$0;
              throw IllegalStateException_init_$Create$(toString_0(message));
            }
            var update = tmp1__anonymous__uwfjfc.s1h(null, null, null, null, cause, 15, null);
            if (this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
              tmp1__anonymous__uwfjfc.t1h(this, cause);
              return Unit_getInstance();
            }
          } else {
            if (this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, null, null, null, cause, 14, null))) {
              return Unit_getInstance();
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.c1h = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.u1g_1;
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.cancel.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
        if (!(!(tmp1__anonymous__uwfjfc == null) ? isInterface(tmp1__anonymous__uwfjfc, NotCompleted) : false))
          return false;
        var update = new CancelledContinuation(this, cause, tmp1__anonymous__uwfjfc instanceof CancelHandler);
        if (!this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update)) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        }
        var tmp0_safe_receiver = tmp1__anonymous__uwfjfc instanceof CancelHandler ? tmp1__anonymous__uwfjfc : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp$ret$1;
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          this.u1h(tmp0_safe_receiver, cause);
          tmp$ret$1 = Unit_getInstance();
        }
        detachChildIfNonResuable(this);
        dispatchResume(this, this.y1g_1);
        return true;
      }
    }
  };
  CancellableContinuationImpl.prototype.v1h = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.c1h(cause);
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.u1h = function (handler, cause) {
    var tmp;
    try {
      handler.invoke(cause);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        handleCoroutineException(this.u3(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this, $p));
        tmp_0 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.d1h = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this.u3(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this, $p));
      } else {
        throw $p;
      }
    }
  };
  CancellableContinuationImpl.prototype.w1h = function (parent) {
    return parent.b1e();
  };
  CancellableContinuationImpl.prototype.x1h = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this.v1g_1 == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }
    var state = this.x1d();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.j1d_1, this);
    if (get_isCancellableMode(this.y1g_1)) {
      var job = this.u3().y3(Key_getInstance_3());
      if (!(job == null) ? !job.e1d() : false) {
        var cause = job.b1e();
        this.q1h(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.y1h(state);
  };
  CancellableContinuationImpl.prototype.v3 = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this.y1g_1;
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.f1g = function (value, onCancellation) {
    return resumeImpl(this, value, this.y1g_1, onCancellation);
  };
  CancellableContinuationImpl.prototype.d1g = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.u1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.invokeOnCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (tmp0_subject instanceof Active) {
        if (this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, cancelHandler))
          return Unit_getInstance();
      } else {
        if (tmp0_subject instanceof CancelHandler) {
          multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
        } else {
          if (tmp0_subject instanceof CompletedExceptionally) {
            if (!tmp1__anonymous__uwfjfc.z1h()) {
              multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
            }
            if (tmp1__anonymous__uwfjfc instanceof CancelledContinuation) {
              var tmp1_safe_receiver = tmp1__anonymous__uwfjfc instanceof CompletedExceptionally ? tmp1__anonymous__uwfjfc : null;
              callCancelHandler(this, handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j1d_1);
            }
            return Unit_getInstance();
          } else {
            if (tmp0_subject instanceof CompletedContinuation) {
              if (!(tmp1__anonymous__uwfjfc.j1h_1 == null)) {
                multipleHandlersError(this, handler, tmp1__anonymous__uwfjfc);
              }
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              if (tmp1__anonymous__uwfjfc.r1h()) {
                callCancelHandler(this, handler, tmp1__anonymous__uwfjfc.m1h_1);
                return Unit_getInstance();
              }
              var update = tmp1__anonymous__uwfjfc.s1h(null, cancelHandler, null, null, null, 29, null);
              if (this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update))
                return Unit_getInstance();
            } else {
              if (cancelHandler instanceof BeforeResumeCancelHandler)
                return Unit_getInstance();
              var update_0 = CompletedContinuation_init_$Create$(tmp1__anonymous__uwfjfc, cancelHandler, null, null, null, 28, null);
              if (this.u1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, update_0))
                return Unit_getInstance();
            }
          }
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.b1h = function () {
    var tmp0_elvis_lhs = this.v1g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.i1g();
    this.v1g_1 = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.y1f = function (value, idempotent) {
    return tryResumeImpl(this, value, idempotent, null);
  };
  CancellableContinuationImpl.prototype.a1g = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  CancellableContinuationImpl.prototype.b1g = function (exception) {
    return tryResumeImpl(this, CompletedExceptionally_init_$Create$(exception, false, 2, null), null, null);
  };
  CancellableContinuationImpl.prototype.c1g = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.y1g_1);
  };
  CancellableContinuationImpl.prototype.e1g = function (_this__u8e3s4, value) {
    var tmp = this.r1g_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    var tmp0_safe_receiver = dc;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k1g_1) === _this__u8e3s4) {
      tmp_0 = get_MODE_UNDISPATCHED();
    } else {
      tmp_0 = this.y1g_1;
    }
    var tmp_1 = tmp_0;
    resumeImpl$default(this, value, tmp_1, null, 8, null);
  };
  CancellableContinuationImpl.prototype.y1h = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation) {
      var tmp_0 = state.i1h_1;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.a1i = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.a1i.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.getExceptionalResult.<anonymous>' call
      tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this.r1g_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.q1d() + '(' + toDebugString(this.r1g_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.q1d = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = classMeta('CancellableContinuationImpl', [CancellableContinuation, CoroutineStackFrame], undefined, undefined, undefined, DispatchedTask.prototype);
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = classMeta('CancelHandler', [NotCompleted], undefined, undefined, undefined, CancelHandlerBase.prototype);
  function get_UNDECIDED() {
    return UNDECIDED;
  }
  var UNDECIDED;
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = objectMeta('Active', [NotCompleted]);
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = interfaceMeta('NotCompleted');
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation.prototype));
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this.i1h_1 = result;
    this.j1h_1 = cancelHandler;
    this.k1h_1 = onCancellation;
    this.l1h_1 = idempotentResume;
    this.m1h_1 = cancelCause;
  }
  CompletedContinuation.prototype.e1i = function () {
    return this.j1h_1;
  };
  CompletedContinuation.prototype.f1i = function () {
    return this.l1h_1;
  };
  CompletedContinuation.prototype.g1i = function () {
    return this.m1h_1;
  };
  CompletedContinuation.prototype.r1h = function () {
    return !(this.m1h_1 == null);
  };
  CompletedContinuation.prototype.t1h = function (cont, cause) {
    var tmp0_safe_receiver = this.j1h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.u1h(tmp0_safe_receiver, cause);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = this.k1h_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      cont.d1h(tmp1_safe_receiver, cause);
      tmp$ret$1 = Unit_getInstance();
    }
  };
  CompletedContinuation.prototype.h1i = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.s1h = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this.i1h_1;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this.j1h_1;
    if (!(($mask0 & 4) === 0))
      onCancellation = this.k1h_1;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this.l1h_1;
    if (!(($mask0 & 16) === 0))
      cancelCause = this.m1h_1;
    return this.h1i(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'CompletedContinuation(result=' + toString(this.i1h_1) + ', cancelHandler=' + this.j1h_1 + ', onCancellation=' + this.k1h_1 + ', idempotentResume=' + toString(this.l1h_1) + ', cancelCause=' + this.m1h_1 + ')';
  };
  CompletedContinuation.prototype.hashCode = function () {
    var result = this.i1h_1 == null ? 0 : hashCode(this.i1h_1);
    result = imul(result, 31) + (this.j1h_1 == null ? 0 : hashCode(this.j1h_1)) | 0;
    result = imul(result, 31) + (this.k1h_1 == null ? 0 : hashCode(this.k1h_1)) | 0;
    result = imul(result, 31) + (this.l1h_1 == null ? 0 : hashCode(this.l1h_1)) | 0;
    result = imul(result, 31) + (this.m1h_1 == null ? 0 : hashCode(this.m1h_1)) | 0;
    return result;
  };
  CompletedContinuation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedContinuation ? other : THROW_CCE();
    if (!equals(this.i1h_1, tmp0_other_with_cast.i1h_1))
      return false;
    if (!equals(this.j1h_1, tmp0_other_with_cast.j1h_1))
      return false;
    if (!equals(this.k1h_1, tmp0_other_with_cast.k1h_1))
      return false;
    if (!equals(this.l1h_1, tmp0_other_with_cast.l1h_1))
      return false;
    if (!equals(this.m1h_1, tmp0_other_with_cast.m1h_1))
      return false;
    return true;
  };
  CompletedContinuation.$metadata$ = classMeta('CompletedContinuation');
  function get_SUSPENDED() {
    return SUSPENDED;
  }
  var SUSPENDED;
  function get_RESUMED() {
    return RESUMED;
  }
  var RESUMED;
  function BeforeResumeCancelHandler() {
    CancelHandler.call(this);
  }
  BeforeResumeCancelHandler.$metadata$ = classMeta('BeforeResumeCancelHandler', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.i1i_1 = handler;
  }
  InvokeOnCancel.prototype.h1g = function (cause) {
    this.i1i_1(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.i1i_1) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = classMeta('InvokeOnCancel', undefined, undefined, undefined, undefined, CancelHandler.prototype);
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function init_properties_CancellableContinuationImpl_kt_jcze1b() {
    if (properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
    } else {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred() {
  }
  CompletableDeferred.$metadata$ = interfaceMeta('CompletableDeferred', [Deferred]);
  function CompletableDeferred_0(parent) {
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferred$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return CompletableDeferred_0(parent);
  }
  function $awaitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t1i_1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$1.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.t1i_1.o1f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return (suspendResult == null ? true : isObject(suspendResult)) ? suspendResult : THROW_CCE();
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
  $awaitCOROUTINE$1.$metadata$ = classMeta('$awaitCOROUTINE$1', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.z1c(parent);
  }
  CompletableDeferredImpl.prototype.i1e = function () {
    return true;
  };
  CompletableDeferredImpl.prototype.s1f = function ($cont) {
    var tmp = new $awaitCOROUTINE$1(this, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  CompletableDeferredImpl.prototype.j1i = function (value) {
    return this.w1i(value);
  };
  CompletableDeferredImpl.prototype.k1i = function (exception) {
    return this.w1i(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  CompletableDeferredImpl.$metadata$ = classMeta('CompletableDeferredImpl', [CompletableDeferred, SelectClause1], undefined, undefined, undefined, JobSupport.prototype);
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = interfaceMeta('CompletableJob', [Job]);
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this.j1d_1 = cause;
    this.k1d_1 = atomic$boolean$1(handled);
  }
  CompletedExceptionally.prototype.k1 = function () {
    return this.j1d_1;
  };
  CompletedExceptionally.prototype.l1d = function () {
    return this.k1d_1.q1c_1;
  };
  CompletedExceptionally.prototype.z1h = function () {
    return this.k1d_1.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.j1d_1 + ']';
  };
  CompletedExceptionally.$metadata$ = classMeta('CompletedExceptionally');
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.g1h_1 = atomic$boolean$1(false);
  }
  CancelledContinuation.prototype.h1h = function () {
    return this.g1h_1.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = classMeta('CancelledContinuation', undefined, undefined, undefined, undefined, CompletedExceptionally.prototype);
  function toState(_this__u8e3s4, caller) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_1 = recoverStackTrace(exception, caller);
      tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState_0(_this__u8e3s4, onCancellation) {
    var tmp$ret$2;
    // Inline function 'kotlin.fold' call
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      var tmp_0 = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
      var tmp0__anonymous__q1qw7t = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__q1qw7t, onCancellation) : tmp0__anonymous__q1qw7t;
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.toState.<anonymous>' call
      tmp$ret$1 = CompletedExceptionally_init_$Create$(exception, false, 2, null);
      tmp = tmp$ret$1;
    }
    tmp$ret$2 = tmp;
    return tmp$ret$2;
  }
  function toState$default(_this__u8e3s4, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this__u8e3s4, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this.z1i_1 = result;
    this.a1j_1 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return 'CompletedWithCancellation(result=' + toString(this.z1i_1) + ', onCancellation=' + this.a1j_1 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this.z1i_1 == null ? 0 : hashCode(this.z1i_1);
    result = imul(result, 31) + hashCode(this.a1j_1) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals(this.z1i_1, tmp0_other_with_cast.z1i_1))
      return false;
    if (!equals(this.a1j_1, tmp0_other_with_cast.a1j_1))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = classMeta('CompletedWithCancellation');
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key_0() {
    Key_instance = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  Key_0.$metadata$ = objectMeta('Key', undefined, undefined, undefined, undefined, AbstractCoroutineContextKey.prototype);
  var Key_instance;
  function Key_getInstance_0() {
    if (Key_instance == null)
      new Key_0();
    return Key_instance;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.c1j = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.w3 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.x3 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.t12();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = classMeta('CoroutineDispatcher', [ContinuationInterceptor], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.y3(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        tmp0_safe_receiver.e1j(context, exception);
        return Unit_getInstance();
      }
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        throw $p;
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_1() {
    Key_instance_0 = this;
  }
  Key_1.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_0;
  function Key_getInstance_1() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineExceptionHandler() {
  }
  CoroutineExceptionHandler.$metadata$ = interfaceMeta('CoroutineExceptionHandler', [Element]);
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.handlerException.<anonymous>' call
    // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    tmp$ret$0 = tmp0_apply;
    return tmp$ret$0;
  }
  function CoroutineExceptionHandler_0(handler) {
    return new _no_name_provided__qut3iv(handler);
  }
  function _no_name_provided__qut3iv($handler) {
    this.g1j_1 = $handler;
    AbstractCoroutineContextElement.call(this, Key_getInstance_1());
  }
  _no_name_provided__qut3iv.prototype.e1j = function (context, exception) {
    return this.g1j_1(context, exception);
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [CoroutineExceptionHandler], undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_1;
  function Key_getInstance_2() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function CoroutineName(name) {
    Key_getInstance_2();
    AbstractCoroutineContextElement.call(this, Key_getInstance_2());
    this.i1j_1 = name;
  }
  CoroutineName.prototype.toString = function () {
    return 'CoroutineName(' + this.i1j_1 + ')';
  };
  CoroutineName.prototype.hashCode = function () {
    return getStringHashCode(this.i1j_1);
  };
  CoroutineName.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CoroutineName))
      return false;
    var tmp0_other_with_cast = other instanceof CoroutineName ? other : THROW_CCE();
    if (!(this.i1j_1 === tmp0_other_with_cast.i1j_1))
      return false;
    return true;
  };
  CoroutineName.$metadata$ = classMeta('CoroutineName', undefined, undefined, undefined, undefined, AbstractCoroutineContextElement.prototype);
  function cancel(_this__u8e3s4, cause) {
    var tmp0_elvis_lhs = _this__u8e3s4.d1d().y3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = 'Scope cannot be cancelled because it does not have a job: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.j1e(cause);
  }
  function cancel$default_1(_this__u8e3s4, cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = null;
    return cancel(_this__u8e3s4, cause);
  }
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = interfaceMeta('CoroutineScope');
  function cancel_0(_this__u8e3s4, message, cause) {
    return cancel(_this__u8e3s4, CancellationException_init_$Create$_0(message, cause));
  }
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  GlobalScope.prototype.d1d = function () {
    return EmptyCoroutineContext_getInstance();
  };
  GlobalScope.$metadata$ = objectMeta('GlobalScope', [CoroutineScope]);
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance == null)
      new GlobalScope();
    return GlobalScope_instance;
  }
  function MainScope() {
    return new ContextScope(SupervisorJob$default(null, 1, null).f4(Dispatchers_getInstance().n1j()));
  }
  function CoroutineScope_0(context) {
    var tmp;
    if (!(context.y3(Key_getInstance_3()) == null)) {
      tmp = context;
    } else {
      tmp = context.f4(Job$default(null, 1, null));
    }
    return new ContextScope(tmp);
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_getInstance();
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineStart.prototype.u1d = function (block, receiver, completion) {
    var tmp0_subject = this;
    var tmp0 = tmp0_subject.l4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        startCoroutineCancellable$default(block, receiver, completion, null, 4, null);
        tmp = Unit_getInstance();
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_getInstance();
        break;
      case 1:
        tmp = Unit_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  CoroutineStart.prototype.x1e = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  CoroutineStart.$metadata$ = classMeta('CoroutineStart', undefined, undefined, undefined, undefined, Enum.prototype);
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = interfaceMeta('CopyableThrowable');
  function Deferred() {
  }
  Deferred.$metadata$ = interfaceMeta('Deferred', [Job]);
  function Delay() {
  }
  Delay.$metadata$ = interfaceMeta('Delay');
  function delay(timeMillis, $cont) {
    if (timeMillis.f1(new Long(0, 0)) <= 0)
      return Unit_getInstance();
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.o1h();
    // Inline function 'kotlinx.coroutines.delay.<anonymous>' call
    Companion_getInstance();
    if (timeMillis.f1(new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.u3()).o1j(timeMillis, cancellable);
    }
    tmp$ret$0 = cancellable.x1h();
    return tmp$ret$0;
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.y3(Key_getInstance());
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.q1j_1 = new Long(0, 0);
    this.r1j_1 = false;
    this.s1j_1 = null;
  }
  EventLoop.prototype.t1j = function () {
    var tmp0_elvis_lhs = this.s1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.x1j();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.c1i();
    return true;
  };
  EventLoop.prototype.y1j = function (task) {
    var tmp0_elvis_lhs = this.s1j_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = new ArrayQueue();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.EventLoop.dispatchUnconfined.<anonymous>' call
      this.s1j_1 = tmp0_also;
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.z1j(task);
  };
  EventLoop.prototype.a1k = function () {
    return this.q1j_1.f1(delta(this, true)) >= 0;
  };
  EventLoop.prototype.b1k = function () {
    var tmp0_safe_receiver = this.s1j_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c1k();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.d1k = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.q1j_1 = tmp0_this.q1j_1.a6(delta(this, unconfined));
    if (!unconfined)
      this.r1j_1 = true;
  };
  EventLoop.prototype.e1k = function (unconfined) {
    var tmp0_this = this;
    tmp0_this.q1j_1 = tmp0_this.q1j_1.b6(delta(this, unconfined));
    if (this.q1j_1.f1(new Long(0, 0)) > 0)
      return Unit_getInstance();
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.r1j_1) {
      this.f1k();
    }
  };
  EventLoop.prototype.f1k = function () {
  };
  EventLoop.$metadata$ = classMeta('EventLoop', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.g1k_1 = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype.h1k = function () {
    var tmp0_elvis_lhs = this.g1k_1.j1k();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = createEventLoop();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.ThreadLocalEventLoop.<get-eventLoop>.<anonymous>' call
      ThreadLocalEventLoop_getInstance().g1k_1.k1k(tmp0_also);
      tmp$ret$0 = tmp0_also;
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = objectMeta('ThreadLocalEventLoop');
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = classMeta('CompletionHandlerException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = classMeta('CoroutinesInternalError', undefined, undefined, undefined, undefined, Error_0.prototype);
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = interfaceMeta('DisposableHandle');
  function Key_3() {
    Key_instance_2 = this;
  }
  Key_3.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_2;
  function Key_getInstance_3() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  Job.$metadata$ = interfaceMeta('Job', [Element]);
  function ChildJob() {
  }
  ChildJob.$metadata$ = interfaceMeta('ChildJob', [Job]);
  function ParentJob() {
  }
  ParentJob.$metadata$ = interfaceMeta('ParentJob', [Job]);
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = interfaceMeta('ChildHandle', [DisposableHandle]);
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.i1g = function () {
  };
  NonDisposableHandle.prototype.n1e = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = objectMeta('NonDisposableHandle', [DisposableHandle, ChildHandle]);
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.e1d())
      throw _this__u8e3s4.b1e();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  function cancel_1(_this__u8e3s4, message, cause) {
    return _this__u8e3s4.j1e(CancellationException_init_$Create$_0(message, cause));
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.y3(Key_getInstance_3());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = "Current context doesn't contain Job in it: " + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_2(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = _this__u8e3s4.y3(Key_getInstance_3());
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.j1e(cause);
    }
  }
  function get_COMPLETING_ALREADY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    init_properties_JobSupport_kt_iaxwag();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    init_properties_JobSupport_kt_iaxwag();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    init_properties_JobSupport_kt_iaxwag();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    init_properties_JobSupport_kt_iaxwag();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.l1k_1 = isActive;
  }
  Empty.prototype.e1d = function () {
    return this.l1k_1;
  };
  Empty.prototype.m1k = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.l1k_1 ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = classMeta('Empty', [Incomplete]);
  function Incomplete() {
  }
  Incomplete.$metadata$ = interfaceMeta('Incomplete');
  function NodeList() {
    LinkedListHead.call(this);
  }
  NodeList.prototype.e1d = function () {
    return true;
  };
  NodeList.prototype.m1k = function () {
    return this;
  };
  NodeList.prototype.q1k = function (state) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>' call
    tmp0_apply.x6('List{');
    tmp0_apply.x6(state);
    tmp0_apply.x6('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = this.r1k_1;
    while (!equals(cur, this)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.NodeList.getString.<anonymous>.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        if (first)
          first = false;
        else {
          tmp0_apply.x6(', ');
        }
        tmp0_apply.w6(tmp0__anonymous__q1qw7t);
      }
      cur = cur.r1k_1;
    }
    tmp0_apply.x6(']');
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  };
  NodeList.prototype.toString = function () {
    return get_DEBUG() ? this.q1k('Active') : LinkedListHead.prototype.toString.call(this);
  };
  NodeList.$metadata$ = classMeta('NodeList', [Incomplete], undefined, undefined, undefined, LinkedListHead.prototype);
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype.m1l = function () {
    var tmp = this.l1l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype.e1d = function () {
    return true;
  };
  JobNode.prototype.m1k = function () {
    return null;
  };
  JobNode.prototype.i1g = function () {
    return this.m1l().h1e(this);
  };
  JobNode.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.m1l()) + ']';
  };
  JobNode.$metadata$ = classMeta('JobNode', [DisposableHandle, Incomplete], undefined, undefined, undefined, CompletionHandlerBase.prototype);
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.r1l_1.m1c_1 = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.r1l_1.m1c_1;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1d_1;
    var wasCancelling = false;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.JobSupport.finalizeFinishingState.<anonymous>' call
    wasCancelling = state.s1l();
    var exceptions = state.t1l(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    tmp$ret$0 = finalCause;
    tmp$ret$1 = tmp$ret$0;
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.v1e(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).z1h();
      }
    }
    if (!wasCancelling) {
      $this.s1e(finalException);
    }
    $this.i1d(finalState);
    var casSuccess = $this.x1c_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.m()) {
      if (state.s1l()) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.h1d() : tmp0_elvis_lhs, null, $this);
        return tmp$ret$0;
      }
      return null;
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = exceptions.d();
      while (tmp0_iterator.e()) {
        var element = tmp0_iterator.f();
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
        tmp$ret$1 = !(element instanceof CancellationException);
        if (tmp$ret$1) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.h(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = exceptions.d();
        while (tmp0_iterator_0.e()) {
          var element_0 = tmp0_iterator_0.f();
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.getFinalRootCause.<anonymous>' call
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          tmp$ret$3 = tmp;
          if (tmp$ret$3) {
            tmp$ret$4 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$4 = null;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.g() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions.g());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.d();
    while (tmp0_iterator.e()) {
      var exception = tmp0_iterator.f();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.a(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.x1c_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.s1e(null);
    $this.i1d(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.w1d();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp0_safe_receiver.i1g();
      $this.v1d(NonDisposableHandle_getInstance());
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j1d_1;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.p1d(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.m1k();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion(tmp2_safe_receiver, $this, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.s1e(cause);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = list.r1k_1;
    while (!equals(cur, list)) {
      if (cur instanceof JobCancellingNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.r1k_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.p1d(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.t1e())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.w1d();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }
    return parent.n1e(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this__u8e3s4, $this, cause) {
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var cur = _this__u8e3s4.r1k_1;
    while (!equals(cur, _this__u8e3s4)) {
      if (cur instanceof JobNode) {
        // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>' call
        var tmp0__anonymous__q1qw7t = cur;
        try {
          tmp0__anonymous__q1qw7t.invoke(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var tmp0_safe_receiver = exception;
            var tmp;
            if (tmp0_safe_receiver == null) {
              tmp = null;
            } else {
              var tmp$ret$0;
              // Inline function 'kotlin.apply' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers.<anonymous>.<anonymous>' call
              // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
              tmp$ret$0 = tmp0_safe_receiver;
              tmp = tmp$ret$0;
            }
            var tmp1_elvis_lhs = tmp;
            if (tmp1_elvis_lhs == null) {
              var tmp$ret$1;
              // Inline function 'kotlin.run' call
              // Inline function 'kotlin.contracts.contract' call
              exception = new CompletionHandlerException('Exception in completion handler ' + tmp0__anonymous__q1qw7t + ' for ' + $this, $p);
              tmp$ret$1 = Unit_getInstance();
            } else
              tmp1_elvis_lhs;
          } else {
            throw $p;
          }
        }
      }
      cur = cur.r1k_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      $this.p1d(tmp0_safe_receiver_0);
      tmp$ret$2 = Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state.l1k_1)
        return 0;
      if (!$this.x1c_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.a1e();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.x1c_1.atomicfu$compareAndSet(state, state.u1l_1))
          return -1;
        $this.a1e();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.JobSupport.makeNode.<anonymous>' call
        // Inline function 'kotlinx.coroutines.assert' call
        tmp$ret$0 = tmp1_safe_receiver;
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node.l1l_1 = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIf' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.addLastAtomic.<anonymous>' call
      tmp$ret$0 = $this.x1d() === expect;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      list.c1l(node);
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.l1k_1 ? list : new InactiveNodeList(list);
    $this.x1c_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.n1l(new NodeList());
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    tmp$ret$0 = state.r1k_1;
    var list = tmp$ret$0;
    $this.x1c_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.joinInternal.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.x1d();
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false))
        return false;
      if (startInternal($this, tmp0__anonymous__q1qw7t) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutine.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
    cancellable.o1h();
    // Inline function 'kotlinx.coroutines.JobSupport.joinSuspend.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeOnCompletion(cancellable);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cancellable, $this.e1e(tmp$ret$1));
    tmp$ret$2 = cancellable.x1h();
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.cancelMakeCompleting.<anonymous>' call
      var tmp0__anonymous__q1qw7t = $this.x1d();
      var tmp;
      if (!(!(tmp0__anonymous__q1qw7t == null) ? isInterface(tmp0__anonymous__q1qw7t, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (tmp0__anonymous__q1qw7t instanceof Finishing) {
          tmp_0 = tmp0__anonymous__q1qw7t.v1l();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var tmp_1 = createCauseException($this, cause);
      var proposedUpdate = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
      var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        var tmp0_elvis_lhs = null;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs == null ? $this.h1d() : tmp0_elvis_lhs, null, $this);
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).q1e();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>' call
        var tmp0__anonymous__q1qw7t = $this.x1d();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Finishing) {
          var tmp$ret$4;
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          var tmp$ret$3;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
          if (tmp0__anonymous__q1qw7t.w1l())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0__anonymous__q1qw7t.s1l();
          if (!(cause == null) ? true : !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'kotlin.also' call
              var tmp0_also = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also;
              tmp$ret$0 = tmp0_also;
              tmp = tmp$ret$0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0__anonymous__q1qw7t.x1l(causeException);
          }
          var tmp$ret$2;
          // Inline function 'kotlin.takeIf' call
          var tmp1_takeIf = tmp0__anonymous__q1qw7t.y1l();
          // Inline function 'kotlin.contracts.contract' call
          var tmp_0;
          var tmp$ret$1;
          // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$1 = !wasCancelling;
          if (tmp$ret$1) {
            tmp_0 = tmp1_takeIf;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
          tmp$ret$3 = tmp$ret$2;
          tmp$ret$4 = tmp$ret$3;
          var notifyRootCause = tmp$ret$4;
          var tmp1_safe_receiver = notifyRootCause;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            notifyCancelling($this, tmp0__anonymous__q1qw7t.o1l_1, tmp1_safe_receiver);
            tmp$ret$5 = Unit_getInstance();
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$6;
              // Inline function 'kotlin.also' call
              var tmp0_also_0 = createCauseException($this, cause);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'kotlinx.coroutines.JobSupport.makeCancelling.<anonymous>.<anonymous>' call
              causeExceptionCache = tmp0_also_0;
              tmp$ret$6 = tmp0_also_0;
              tmp_1 = tmp$ret$6;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0__anonymous__q1qw7t.e1d()) {
              if (tryMakeCancelling($this, tmp0__anonymous__q1qw7t, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0__anonymous__q1qw7t, CompletedExceptionally_init_$Create$(causeException_0, false, 2, null));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var tmp1_error = 'Cannot happen in ' + toString(tmp0__anonymous__q1qw7t);
                throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
              } else if (finalState === get_COMPLETING_RETRY()) {
                tmp$ret$7 = Unit_getInstance();
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state.m1k();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          var tmp0_error = 'State should have list: ' + state;
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.x1c_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    if (finishing.v1l())
      return get_COMPLETING_ALREADY();
    finishing.z1l(true);
    if (!(finishing === state)) {
      if (!$this.x1c_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.s1l();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      finishing.x1l(tmp0_safe_receiver.j1d_1);
      tmp$ret$0 = Unit_getInstance();
    }
    var tmp$ret$2;
    // Inline function 'kotlin.takeIf' call
    var tmp0_takeIf = finishing.y1l();
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.JobSupport.tryMakeCompletingSlowPath.<anonymous>.<anonymous>' call
    tmp$ret$1 = !wasCancelling;
    if (tmp$ret$1) {
      tmp_0 = tmp0_takeIf;
    } else {
      tmp_0 = null;
    }
    tmp$ret$2 = tmp_0;
    notifyRootCause = tmp$ret$2;
    tmp$ret$3 = Unit_getInstance();
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      notifyCancelling($this, list, tmp2_safe_receiver);
      tmp$ret$4 = Unit_getInstance();
    }
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js(_this__u8e3s4, $this) {
    var tmp0_safe_receiver = _this__u8e3s4 instanceof CompletedExceptionally ? _this__u8e3s4 : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1d_1;
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state.m1k();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var tmp = child_0.e1m_1;
        var tmp$ret$1;
        // Inline function 'kotlinx.coroutines.asHandler' call
        var tmp0__get_asHandler__gq3rkj = new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0);
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
        tmp$ret$1 = tmp$ret$0;
        var handle = tmp.g1e(false, false, tmp$ret$1, 1, null);
        if (!(handle === NonDisposableHandle_getInstance()))
          return true;
        var tmp0_elvis_lhs = nextChild(child_0, $this_0);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp_0;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp2 = nextChild_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = tmp2;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.o1d(finalState);
  }
  function nextChild(_this__u8e3s4, $this) {
    var cur = _this__u8e3s4;
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp0__get_isRemoved__hsfvgr = cur;
      tmp$ret$0 = tmp0__get_isRemoved__hsfvgr.t1k_1;
      if (!tmp$ret$0) {
        break $l$loop;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp1__get_prevNode__b1i0ed = cur;
      tmp$ret$1 = tmp1__get_prevNode__b1i0ed.s1k_1;
      cur = tmp$ret$1;
    }
    $l$loop_0: while (true) {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
      var tmp2__get_nextNode__ek7k4a = cur;
      tmp$ret$2 = tmp2__get_nextNode__ek7k4a.r1k_1;
      cur = tmp$ret$2;
      var tmp$ret$3;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.isRemoved' call
      var tmp3__get_isRemoved__lodk3s = cur;
      tmp$ret$3 = tmp3__get_isRemoved__lodk3s.t1k_1;
      if (tmp$ret$3)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.s1l() ? 'Cancelling' : state.v1l() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state.e1d() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this.o1l_1 = list;
    this.p1l_1 = atomic$boolean$1(isCompleting);
    this.q1l_1 = atomic$ref$1(rootCause);
    this.r1l_1 = atomic$ref$1(null);
  }
  Finishing.prototype.m1k = function () {
    return this.o1l_1;
  };
  Finishing.prototype.z1l = function (value) {
    this.p1l_1.q1c_1 = value;
  };
  Finishing.prototype.v1l = function () {
    return this.p1l_1.q1c_1;
  };
  Finishing.prototype.f1m = function (value) {
    this.q1l_1.m1c_1 = value;
  };
  Finishing.prototype.y1l = function () {
    return this.q1l_1.m1c_1;
  };
  Finishing.prototype.w1l = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  Finishing.prototype.s1l = function () {
    return !(this.y1l() == null);
  };
  Finishing.prototype.e1d = function () {
    return this.y1l() == null;
  };
  Finishing.prototype.t1l = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        var tmp0_also = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.sealLocked.<anonymous>' call
        tmp0_also.a(eh);
        tmp$ret$0 = tmp0_also;
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
    var list = tmp;
    var rootCause = this.y1l();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      list.kb(0, tmp0_safe_receiver);
      tmp$ret$1 = Unit_getInstance();
    }
    if (!(proposedException == null) ? !equals(proposedException, rootCause) : false) {
      list.a(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  Finishing.prototype.x1l = function (exception) {
    var rootCause = this.y1l();
    if (rootCause == null) {
      this.f1m(exception);
      return Unit_getInstance();
    }
    if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        // Inline function 'kotlin.apply' call
        var tmp0_apply = allocateList(this);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlinx.coroutines.Finishing.addExceptionLocked.<anonymous>' call
        tmp0_apply.a(eh);
        tmp0_apply.a(exception);
        tmp$ret$0 = tmp0_apply;
        _set_exceptionsHolder__tqm22h(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).a(exception);
        } else {
          var tmp1_error = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.s1l() + ', completing=' + this.v1l() + ', rootCause=' + this.y1l() + ', exceptions=' + toString(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.o1l_1 + ']';
  };
  Finishing.$metadata$ = classMeta('Finishing', [Incomplete]);
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.k1m_1 = parent;
    this.l1m_1 = state;
    this.m1m_1 = child;
    this.n1m_1 = proposedUpdate;
  }
  ChildCompletion.prototype.h1g = function (cause) {
    continueCompleting(this.k1m_1, this.l1m_1, this.m1m_1, this.n1m_1);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  ChildCompletion.$metadata$ = classMeta('ChildCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, get_MODE_CANCELLABLE());
    this.u1m_1 = job;
  }
  AwaitContinuation.prototype.w1h = function (parent) {
    var state = this.u1m_1.x1d();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.y1l();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.j1d_1;
    return parent.b1e();
  };
  AwaitContinuation.prototype.q1d = function () {
    return 'AwaitContinuation';
  };
  AwaitContinuation.$metadata$ = classMeta('AwaitContinuation', undefined, undefined, undefined, undefined, CancellableContinuationImpl.prototype);
  function awaitSuspend($this, $cont) {
    var tmp$ret$2;
    // Inline function 'kotlinx.coroutines.JobSupport.awaitSuspend.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cont = new AwaitContinuation(intercepted(tmp0__anonymous__q1qw7t), $this);
    cont.o1h();
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ResumeAwaitOnCompletion(cont);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    disposeOnCancellation(cont, $this.e1e(tmp$ret$1));
    tmp$ret$2 = cont.x1h();
    return tmp$ret$2;
  }
  function JobSupport(active) {
    this.x1c_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.y1c_1 = atomic$ref$1(null);
  }
  JobSupport.prototype.s = function () {
    return Key_getInstance_3();
  };
  JobSupport.prototype.v1d = function (value) {
    this.y1c_1.m1c_1 = value;
  };
  JobSupport.prototype.w1d = function () {
    return this.y1c_1.m1c_1;
  };
  JobSupport.prototype.z1c = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.v1d(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }
    parent.z1d();
    var handle = parent.r1e(this);
    this.v1d(handle);
    if (this.y1d()) {
      handle.i1g();
      this.v1d(NonDisposableHandle_getInstance());
    }
  };
  JobSupport.prototype.x1d = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.x1c_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.<get-state>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
      if (!(tmp1__anonymous__uwfjfc instanceof OpDescriptor))
        return tmp1__anonymous__uwfjfc;
      tmp1__anonymous__uwfjfc.v1m(this);
    }
  };
  JobSupport.prototype.e1d = function () {
    var state = this.x1d();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.e1d();
    } else {
      tmp = false;
    }
    return tmp;
  };
  JobSupport.prototype.y1d = function () {
    var tmp = this.x1d();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.z1d = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.start.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.x1d();
      var tmp0_subject = startInternal(this, tmp0__anonymous__q1qw7t);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  JobSupport.prototype.a1e = function () {
  };
  JobSupport.prototype.b1e = function () {
    var state = this.x1d();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.y1l();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.c1e(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error = 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.d1e(state.j1d_1, null, 1, null);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.c1e = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = message;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.h1d() : tmp0_elvis_lhs_0, _this__u8e3s4, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.d1e = function (_this__u8e3s4, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.c1e(_this__u8e3s4, message);
  };
  JobSupport.prototype.e1e = function (handler) {
    return this.f1e(false, true, handler);
  };
  JobSupport.prototype.f1e = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.invokeOnCompletion.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.x1d();
        var tmp0_subject = tmp0__anonymous__q1qw7t;
        if (tmp0_subject instanceof Empty) {
          if (tmp0__anonymous__q1qw7t.l1k_1) {
            if (this.x1c_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, node))
              return node;
          } else {
            promoteEmptyToNodeList(this, tmp0__anonymous__q1qw7t);
          }
        } else {
          if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
            var list = tmp0__anonymous__q1qw7t.m1k();
            if (list == null) {
              promoteSingleToNodeList(this, tmp0__anonymous__q1qw7t instanceof JobNode ? tmp0__anonymous__q1qw7t : THROW_CCE());
            } else {
              var rootCause = null;
              var handle = NonDisposableHandle_getInstance();
              var tmp;
              if (onCancelling) {
                tmp = tmp0__anonymous__q1qw7t instanceof Finishing;
              } else {
                tmp = false;
              }
              if (tmp) {
                var tmp$ret$2;
                // Inline function 'kotlinx.coroutines.internal.synchronized' call
                rootCause = tmp0__anonymous__q1qw7t.y1l();
                var tmp_0;
                var tmp_1;
                if (rootCause == null) {
                  tmp_1 = true;
                } else {
                  var tmp_2;
                  var tmp$ret$0;
                  // Inline function 'kotlinx.coroutines.isHandlerOf' call
                  tmp$ret$0 = handler instanceof ChildHandleNode;
                  if (tmp$ret$0) {
                    tmp_2 = !tmp0__anonymous__q1qw7t.v1l();
                  } else {
                    tmp_2 = false;
                  }
                  tmp_1 = tmp_2;
                }
                if (tmp_1) {
                  if (!addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node)) {
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block;
                  }
                  if (rootCause == null)
                    return node;
                  handle = node;
                  tmp_0 = Unit_getInstance();
                }
                tmp$ret$2 = tmp_0;
              }
              if (!(rootCause == null)) {
                if (invokeImmediately) {
                  invokeIt(handler, rootCause);
                }
                return handle;
              } else {
                if (addLastAtomic(this, tmp0__anonymous__q1qw7t, list, node))
                  return node;
              }
            }
          } else {
            if (invokeImmediately) {
              var tmp1_safe_receiver = tmp0__anonymous__q1qw7t instanceof CompletedExceptionally ? tmp0__anonymous__q1qw7t : null;
              invokeIt(handler, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.j1d_1);
            }
            return NonDisposableHandle_getInstance();
          }
        }
      }
    }
  };
  JobSupport.prototype.y1i = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.getCoroutineContext' call
      tmp$ret$0 = $cont.u3();
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }
    return joinSuspend(this, $cont);
  };
  JobSupport.prototype.h1e = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      // Inline function 'kotlinx.coroutines.JobSupport.removeNode.<anonymous>' call
      var tmp0__anonymous__q1qw7t = this.x1d();
      var tmp0_subject = tmp0__anonymous__q1qw7t;
      if (tmp0_subject instanceof JobNode) {
        if (!(tmp0__anonymous__q1qw7t === node))
          return Unit_getInstance();
        if (this.x1c_1.atomicfu$compareAndSet(tmp0__anonymous__q1qw7t, get_EMPTY_ACTIVE()))
          return Unit_getInstance();
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          if (!(tmp0__anonymous__q1qw7t.m1k() == null)) {
            node.x1k();
          }
          return Unit_getInstance();
        } else {
          return Unit_getInstance();
        }
      }
    }
  };
  JobSupport.prototype.i1e = function () {
    return false;
  };
  JobSupport.prototype.j1e = function (cause) {
    var tmp0_elvis_lhs = cause;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      var tmp0_elvis_lhs_0 = null;
      tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_0 == null ? this.h1d() : tmp0_elvis_lhs_0, null, this);
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    this.l1e(tmp);
  };
  JobSupport.prototype.h1d = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.l1e = function (cause) {
    this.o1e(cause);
  };
  JobSupport.prototype.m1e = function (parentJob) {
    this.o1e(parentJob);
  };
  JobSupport.prototype.n1e = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.o1e(cause) ? this.u1e() : false;
  };
  JobSupport.prototype.o1e = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.i1e()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.o1d(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.p1e = function (message, cause) {
    var tmp0_elvis_lhs = message;
    return new JobCancellationException(tmp0_elvis_lhs == null ? this.h1d() : tmp0_elvis_lhs, cause, this);
  };
  JobSupport.prototype.q1e = function () {
    var state = this.x1d();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state.y1l();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state.j1d_1;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.w1i = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompleting.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.x1d();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          this.o1d(finalState);
          return true;
        }
      }
    }
  };
  JobSupport.prototype.m1d = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.JobSupport.makeCompletingOnce.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.x1d();
        var finalState = tryMakeCompleting(this, tmp0__anonymous__q1qw7t, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), _get_exceptionOrNull__b3j7js(proposedUpdate, this));
        else if (finalState === get_COMPLETING_RETRY()) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  JobSupport.prototype.r1e = function (child) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ChildHandleNode(child);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    var tmp = this.g1e(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.p1d = function (exception) {
    throw exception;
  };
  JobSupport.prototype.s1e = function (cause) {
  };
  JobSupport.prototype.t1e = function () {
    return false;
  };
  JobSupport.prototype.u1e = function () {
    return true;
  };
  JobSupport.prototype.v1e = function (exception) {
    return false;
  };
  JobSupport.prototype.i1d = function (state) {
  };
  JobSupport.prototype.o1d = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return this.w1e() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.w1e = function () {
    return this.q1d() + '{' + stateString(this, this.x1d()) + '}';
  };
  JobSupport.prototype.q1d = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.o1f = function ($cont) {
    $l$loop: while (true) {
      var state = this.x1d();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          var tmp0_recoverAndThrow = state.j1d_1;
          throw tmp0_recoverAndThrow;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $cont);
  };
  JobSupport.$metadata$ = classMeta('JobSupport', [Job, ChildJob, ParentJob, SelectClause0]);
  function boxIncomplete(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = classMeta('JobCancellingNode', undefined, undefined, undefined, undefined, JobNode.prototype);
  function get_FALSE() {
    return FALSE;
  }
  var FALSE;
  function get_TRUE() {
    return TRUE;
  }
  var TRUE;
  function InactiveNodeList(list) {
    this.u1l_1 = list;
  }
  InactiveNodeList.prototype.m1k = function () {
    return this.u1l_1;
  };
  InactiveNodeList.prototype.e1d = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return get_DEBUG() ? this.u1l_1.q1k('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = classMeta('InactiveNodeList', [Incomplete]);
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this.e1m_1 = childJob;
  }
  ChildHandleNode.prototype.h1g = function (cause) {
    return this.e1m_1.m1e(this.m1l());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  ChildHandleNode.prototype.n1e = function (cause) {
    return this.m1l().n1e(cause);
  };
  ChildHandleNode.$metadata$ = classMeta('ChildHandleNode', [ChildHandle], undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this.a1n_1 = handler;
    this.b1n_1 = atomic$int$1(0);
  }
  InvokeOnCancelling.prototype.h1g = function (cause) {
    if (this.b1n_1.atomicfu$compareAndSet(0, 1))
      this.a1n_1(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  InvokeOnCancelling.$metadata$ = classMeta('InvokeOnCancelling', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.g1n_1 = handler;
  }
  InvokeOnCompletion.prototype.h1g = function (cause) {
    return this.g1n_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  InvokeOnCompletion.$metadata$ = classMeta('InvokeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.l1n_1 = continuation;
  }
  ResumeOnCompletion.prototype.h1g = function (cause) {
    var tmp$ret$1;
    // Inline function 'kotlin.coroutines.resume' call
    var tmp0_resume = this.l1n_1;
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.success' call
    var tmp0_success = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
    tmp0_resume.v3(tmp$ret$0);
    tmp$ret$1 = Unit_getInstance();
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  ResumeOnCompletion.$metadata$ = classMeta('ResumeOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function unboxState(_this__u8e3s4) {
    init_properties_JobSupport_kt_iaxwag();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1n_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.r1n_1 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.h1g = function (cause) {
    var state = this.m1l().x1d();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp0_resumeWithException = this.r1n_1;
      var tmp1_resumeWithException = state.j1d_1;
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
      tmp0_resumeWithException.v3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp2_resume = this.r1n_1;
      var tmp = unboxState(state);
      var tmp3_resume = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$2 = _Result___init__impl__xyqfz8(tmp3_resume);
      tmp2_resume.v3(tmp$ret$2);
      tmp$ret$3 = Unit_getInstance();
    }
  };
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  ResumeAwaitOnCompletion.$metadata$ = classMeta('ResumeAwaitOnCompletion', undefined, undefined, undefined, undefined, JobNode.prototype);
  function IncompleteStateBox(state) {
    this.m1n_1 = state;
  }
  IncompleteStateBox.$metadata$ = classMeta('IncompleteStateBox');
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this.w1n_1 = child;
  }
  ChildContinuation.prototype.h1g = function (cause) {
    this.w1n_1.v1h(this.w1n_1.w1h(this.m1l()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  ChildContinuation.$metadata$ = classMeta('ChildContinuation', undefined, undefined, undefined, undefined, JobCancellingNode.prototype);
  function handlesException($this) {
    var tmp = $this.w1d();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1l();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.u1e())
        return true;
      var tmp_1 = parentJob.w1d();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.m1l();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.z1c(parent);
    this.z1n_1 = handlesException(this);
  }
  JobImpl.prototype.i1e = function () {
    return true;
  };
  JobImpl.prototype.u1e = function () {
    return this.z1n_1;
  };
  JobImpl.prototype.x1i = function () {
    return this.w1i(Unit_getInstance());
  };
  JobImpl.prototype.k1i = function (exception) {
    return this.w1i(CompletedExceptionally_init_$Create$(exception, false, 2, null));
  };
  JobImpl.$metadata$ = classMeta('JobImpl', [CompletableJob], undefined, undefined, undefined, JobSupport.prototype);
  var properties_initialized_JobSupport_kt_5iq8a4;
  function init_properties_JobSupport_kt_iaxwag() {
    if (properties_initialized_JobSupport_kt_5iq8a4) {
    } else {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.c1o();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  MainCoroutineDispatcher.prototype.c1o = function () {
    var main = Dispatchers_getInstance().n1j();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.b1o();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  MainCoroutineDispatcher.$metadata$ = classMeta('MainCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function SupervisorJob(parent) {
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJob$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return SupervisorJob(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  SupervisorJobImpl.prototype.n1e = function (cause) {
    return false;
  };
  SupervisorJobImpl.$metadata$ = classMeta('SupervisorJobImpl', undefined, undefined, undefined, undefined, JobImpl.prototype);
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = classMeta('TimeoutCancellationException', [CopyableThrowable], undefined, undefined, undefined, CancellationException.prototype);
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.c1j = function (context) {
    return false;
  };
  Unconfined.prototype.d1j = function (context, block) {
    var yieldContext = context.y3(Key_getInstance_4());
    if (!(yieldContext == null)) {
      yieldContext.i1o_1 = true;
      return Unit_getInstance();
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  Unconfined.prototype.toString = function () {
    return 'Dispatchers.Unconfined';
  };
  Unconfined.$metadata$ = objectMeta('Unconfined', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Key_4() {
    Key_instance_3 = this;
  }
  Key_4.$metadata$ = objectMeta('Key', [Key]);
  var Key_instance_3;
  function Key_getInstance_4() {
    if (Key_instance_3 == null)
      new Key_4();
    return Key_instance_3;
  }
  function get_EMPTY() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return EMPTY;
  }
  var EMPTY;
  function get_OFFER_SUCCESS() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_SUCCESS;
  }
  var OFFER_SUCCESS;
  function get_OFFER_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return OFFER_FAILED;
  }
  var OFFER_FAILED;
  function get_POLL_FAILED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return POLL_FAILED;
  }
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  function get_HANDLER_INVOKED() {
    init_properties_AbstractChannel_kt_mjk5bh();
    return HANDLER_INVOKED;
  }
  var HANDLER_INVOKED;
  function hasNextResult($this, result) {
    if (result instanceof Closed) {
      if (!(result.m1o_1 == null))
        throw recoverStackTrace_0(result.n1o());
      return false;
    }
    return true;
  }
  function hasNextSuspend($this, $cont) {
    var tmp$ret$5;
    // Inline function 'kotlinx.coroutines.suspendCancellableCoroutineReusable.<anonymous>' call
    var tmp0__anonymous__q1qw7t = $cont;
    var cancellable = getOrCreateCancellableContinuation(intercepted(tmp0__anonymous__q1qw7t));
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.channels.Itr.hasNextSuspend.<anonymous>' call
      var receive = new ReceiveHasNext($this, cancellable);
      while (true) {
        if (enqueueReceive($this.o1o_1, receive)) {
          removeReceiveOnCancel($this.o1o_1, cancellable, receive);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        var result = $this.o1o_1.t1o();
        $this.p1o_1 = result;
        if (result instanceof Closed) {
          if (result.m1o_1 == null) {
            var tmp$ret$2;
            // Inline function 'kotlin.coroutines.resume' call
            var tmp$ret$1;
            // Inline function 'kotlin.Companion.success' call
            var tmp0_success = Companion_getInstance_0();
            tmp$ret$1 = _Result___init__impl__xyqfz8(false);
            cancellable.v3(tmp$ret$1);
            tmp$ret$2 = Unit_getInstance();
          } else {
            var tmp$ret$4;
            // Inline function 'kotlin.coroutines.resumeWithException' call
            var tmp0_resumeWithException = result.n1o();
            var tmp$ret$3;
            // Inline function 'kotlin.Companion.failure' call
            var tmp0_failure = Companion_getInstance_0();
            tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(tmp0_resumeWithException));
            cancellable.v3(tmp$ret$3);
            tmp$ret$4 = Unit_getInstance();
          }
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
        if (!(result === get_POLL_FAILED())) {
          var tmp0_safe_receiver = $this.o1o_1.u1o_1;
          var tmp;
          if (tmp0_safe_receiver == null) {
            tmp = null;
          } else {
            tmp = bindCancellationFun(tmp0_safe_receiver, (result == null ? true : isObject(result)) ? result : THROW_CCE(), cancellable.u3());
          }
          cancellable.f1g(true, tmp);
          tmp$ret$0 = Unit_getInstance();
          break $l$block_1;
        }
      }
    }
    tmp$ret$5 = cancellable.x1h();
    return tmp$ret$5;
  }
  function enqueueReceive($this, receive) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.x1o(receive);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceive.<anonymous>' call
    if (tmp0_also) {
      $this.y1o();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  }
  function removeReceiveOnCancel($this, cont, receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new RemoveReceiveOnCancel($this, receive);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    return cont.d1g(tmp$ret$1);
  }
  function RemoveReceiveOnCancel($outer, receive) {
    this.a1p_1 = $outer;
    BeforeResumeCancelHandler.call(this);
    this.z1o_1 = receive;
  }
  RemoveReceiveOnCancel.prototype.h1g = function (cause) {
    if (this.z1o_1.x1k()) {
      this.a1p_1.b1p();
    }
  };
  RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.z1o_1 + ']';
  };
  RemoveReceiveOnCancel.$metadata$ = classMeta('RemoveReceiveOnCancel', undefined, undefined, undefined, undefined, BeforeResumeCancelHandler.prototype);
  function Itr(channel) {
    this.o1o_1 = channel;
    this.p1o_1 = get_POLL_FAILED();
  }
  Itr.prototype.c1p = function () {
    return this.o1o_1;
  };
  Itr.prototype.d1p = function (_set____db54di) {
    this.p1o_1 = _set____db54di;
  };
  Itr.prototype.e1p = function ($cont) {
    if (!(this.p1o_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.p1o_1);
    this.p1o_1 = this.o1o_1.t1o();
    if (!(this.p1o_1 === get_POLL_FAILED()))
      return hasNextResult(this, this.p1o_1);
    return hasNextSuspend(this, $cont);
  };
  Itr.prototype.f = function () {
    var result = this.p1o_1;
    if (result instanceof Closed)
      throw recoverStackTrace_0(result.n1o());
    if (!(result === get_POLL_FAILED())) {
      this.p1o_1 = get_POLL_FAILED();
      return (result == null ? true : isObject(result)) ? result : THROW_CCE();
    }
    throw IllegalStateException_init_$Create$("'hasNext' should be called prior to 'next' invocation");
  };
  Itr.$metadata$ = classMeta('Itr', [ChannelIterator]);
  function ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.i1p_1 = iterator;
    this.j1p_1 = cont;
  }
  ReceiveHasNext.prototype.k1p = function (value, otherOp) {
    var tmp0_safe_receiver = otherOp;
    var tmp1_elvis_lhs = this.j1p_1.a1g(true, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m1p_1, this.o1p(value));
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var token = tmp;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp2_safe_receiver = otherOp;
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.p1p();
    }
    return get_RESUME_TOKEN();
  };
  ReceiveHasNext.prototype.q1p = function (value) {
    this.i1p_1.p1o_1 = value;
    this.j1p_1.c1g(get_RESUME_TOKEN());
  };
  ReceiveHasNext.prototype.r1p = function (closed) {
    var tmp;
    if (closed.m1o_1 == null) {
      tmp = this.j1p_1.z1f(false, null, 2, null);
    } else {
      tmp = this.j1p_1.b1g(closed.n1o());
    }
    var token = tmp;
    if (!(token == null)) {
      this.i1p_1.p1o_1 = closed;
      this.j1p_1.c1g(token);
    }
  };
  ReceiveHasNext.prototype.o1p = function (value) {
    var tmp0_safe_receiver = this.i1p_1.o1o_1.u1o_1;
    return tmp0_safe_receiver == null ? null : bindCancellationFun(tmp0_safe_receiver, value, this.j1p_1.u3());
  };
  ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext@' + get_hexAddress(this);
  };
  ReceiveHasNext.$metadata$ = classMeta('ReceiveHasNext', undefined, undefined, undefined, undefined, Receive.prototype);
  function AbstractChannel(onUndeliveredElement) {
    AbstractSendChannel.call(this, onUndeliveredElement);
  }
  AbstractChannel.prototype.t1o = function () {
    while (true) {
      var tmp0_elvis_lhs = this.y1p();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_POLL_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var send = tmp;
      var token = send.c1q(null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        send.d1q();
        return send.e1q();
      }
      send.f1q();
    }
  };
  AbstractChannel.prototype.g1q = function () {
    return !(this.h1q() == null) ? this.x1p() : false;
  };
  AbstractChannel.prototype.x1o = function (receive) {
    var tmp;
    if (this.w1p()) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
        var tmp0_addLastIfPrev = this.v1o_1;
        var tmp$ret$0;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.s1k_1;
        tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Send);
        if (!tmp$ret$0) {
          tmp$ret$1 = false;
          break $l$block;
        }
        tmp0_addLastIfPrev.c1l(receive);
        tmp$ret$1 = true;
      }
      tmp = tmp$ret$1;
    } else {
      var tmp$ret$3;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf' call
        var tmp2_addLastIfPrevAndIf = this.v1o_1;
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        var tmp3__anonymous__ufb84q = tmp2_addLastIfPrevAndIf.s1k_1;
        tmp$ret$2 = !(tmp3__anonymous__ufb84q instanceof Send);
        if (!tmp$ret$2) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.channels.AbstractChannel.enqueueReceiveInternal.<anonymous>' call
        tmp$ret$4 = this.x1p();
        if (!tmp$ret$4) {
          tmp$ret$3 = false;
          break $l$block_1;
        }
        tmp2_addLastIfPrevAndIf.c1l(receive);
        tmp$ret$3 = true;
      }
      tmp = tmp$ret$3;
    }
    return tmp;
  };
  AbstractChannel.prototype.j1e = function (cause) {
    if (this.g1q())
      return Unit_getInstance();
    var tmp0_elvis_lhs = cause;
    this.i1q(tmp0_elvis_lhs == null ? CancellationException_init_$Create$(get_classSimpleName(this) + ' was cancelled') : tmp0_elvis_lhs);
  };
  AbstractChannel.prototype.i1q = function (cause) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.j1q(cause);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.cancelInternal.<anonymous>' call
    this.k1q(tmp0_also);
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.k1q = function (wasClosed) {
    var tmp0_elvis_lhs = this.l1q();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Cannot happen');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var closed = tmp;
    var list = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.s1k_1;
      var previous = tmp$ret$0;
      if (previous instanceof LinkedListHead) {
        break $l$loop_0;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      if (!previous.x1k()) {
        previous.h1l();
        continue $l$loop_0;
      }
      var tmp_0 = list;
      list = InlineList__plus_impl_nuetvo(tmp_0, previous instanceof Send ? previous : THROW_CCE());
    }
    this.m1q(list, closed);
  };
  AbstractChannel.prototype.m1q = function (list, closed) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          tmp0__anonymous__q1qw7t.n1q(closed);
        } else {
          var tmp_0 = _get_holder__f6h5pd(list);
          var list_0 = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable = list_0.g() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.h(i);
              tmp1__anonymous__uwfjfc.n1q(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
  };
  AbstractChannel.prototype.d = function () {
    return new Itr(this);
  };
  AbstractChannel.prototype.o1q = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = AbstractSendChannel.prototype.o1q.call(this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.AbstractChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
    var tmp;
    if (!(tmp0_also == null)) {
      tmp = !(tmp0_also instanceof Closed);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.b1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  AbstractChannel.prototype.y1o = function () {
  };
  AbstractChannel.prototype.b1p = function () {
  };
  AbstractChannel.$metadata$ = classMeta('AbstractChannel', [Channel], undefined, undefined, undefined, AbstractSendChannel.prototype);
  function helpCloseAndGetSendException($this, closed) {
    helpClose($this, closed);
    return closed.v1q();
  }
  function invokeOnCloseHandler($this, cause) {
    var handler = $this.w1o_1.m1c_1;
    if ((!(handler === null) ? !(handler === get_HANDLER_INVOKED()) : false) ? $this.w1o_1.atomicfu$compareAndSet(handler, get_HANDLER_INVOKED()) : false) {
      ((!(handler == null) ? typeof handler === 'function' : false) ? handler : THROW_CCE())(cause);
    }
  }
  function helpClose($this, closed) {
    var closedList = _InlineList___init__impl__z8n56_0(null, 1, null);
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      tmp$ret$0 = closed.s1k_1;
      var tmp = tmp$ret$0;
      var tmp0_elvis_lhs = tmp instanceof Receive ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        break $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var previous = tmp_0;
      if (!previous.x1k()) {
        previous.h1l();
        continue $l$loop_0;
      }
      closedList = InlineList__plus_impl_nuetvo(closedList, previous);
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_forEachReversed = closedList;
      var tmp0_subject = _get_holder__f6h5pd(tmp0_forEachReversed);
      if (tmp0_subject == null) {
        tmp$ret$1 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
          var tmp_1 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var tmp1__anonymous__uwfjfc = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
          tmp1__anonymous__uwfjfc.r1p(closed);
        } else {
          var tmp_2 = _get_holder__f6h5pd(tmp0_forEachReversed);
          var list = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list.g() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.helpClose.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = list.h(i);
              tmp2__anonymous__z9zvc9.r1p(closed);
            }
             while (0 <= inductionVariable);
        }
      }
    }
    $this.t1q(closed);
  }
  function _get_queueDebugStateString__k7jj75($this) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = $this.v1o_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.r1k_1;
    var head = tmp$ret$0;
    if (head === $this.v1o_1)
      return 'EmptyQueue';
    var tmp0_subject = head;
    var tmp;
    if (tmp0_subject instanceof Closed) {
      tmp = toString_0(head);
    } else {
      if (tmp0_subject instanceof Receive) {
        tmp = 'ReceiveQueued';
      } else {
        if (tmp0_subject instanceof Send) {
          tmp = 'SendQueued';
        } else {
          tmp = 'UNEXPECTED:' + head;
        }
      }
    }
    var result = tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp1__get_prevNode__b1i0ed = $this.v1o_1;
    tmp$ret$1 = tmp1__get_prevNode__b1i0ed.s1k_1;
    var tail = tmp$ret$1;
    if (!(tail === head)) {
      result = result + (',queueSize=' + countQueueSize($this));
      if (tail instanceof Closed)
        result = result + (',closedForSend=' + tail);
    }
    return result;
  }
  function countQueueSize($this) {
    var size = 0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListHead.forEach' call
    var tmp0_forEach = $this.v1o_1;
    var cur = tmp0_forEach.r1k_1;
    while (!equals(cur, tmp0_forEach)) {
      if (cur instanceof LinkedListNode) {
        // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.countQueueSize.<anonymous>' call
        var tmp1__anonymous__uwfjfc = cur;
        var tmp0 = size;
        size = tmp0 + 1 | 0;
      }
      cur = cur.r1k_1;
    }
    return size;
  }
  function SendBuffered(element) {
    Send.call(this);
    this.z1q_1 = element;
  }
  SendBuffered.prototype.a1r = function () {
    return this.z1q_1;
  };
  SendBuffered.prototype.e1q = function () {
    return this.z1q_1;
  };
  SendBuffered.prototype.c1q = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.SendBuffered.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  SendBuffered.prototype.d1q = function () {
  };
  SendBuffered.prototype.n1q = function (closed) {
    // Inline function 'kotlinx.coroutines.assert' call
  };
  SendBuffered.prototype.toString = function () {
    return 'SendBuffered@' + get_hexAddress(this) + '(' + this.z1q_1 + ')';
  };
  SendBuffered.$metadata$ = classMeta('SendBuffered', undefined, undefined, undefined, undefined, Send.prototype);
  function AbstractSendChannel(onUndeliveredElement) {
    this.u1o_1 = onUndeliveredElement;
    this.v1o_1 = new LinkedListHead();
    this.w1o_1 = atomic$ref$1(null);
  }
  AbstractSendChannel.prototype.p1q = function () {
    return this.u1o_1;
  };
  AbstractSendChannel.prototype.q1q = function (element) {
    while (true) {
      var tmp0_elvis_lhs = this.o1q();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return get_OFFER_FAILED();
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var receive = tmp;
      var token = receive.k1p(element, null);
      if (!(token == null)) {
        // Inline function 'kotlinx.coroutines.assert' call
        receive.q1p(element);
        return receive.v1p();
      }
    }
  };
  AbstractSendChannel.prototype.l1q = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
    var tmp0__get_prevNode__2ljhpg = this.v1o_1;
    tmp$ret$0 = tmp0__get_prevNode__2ljhpg.s1k_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForSend>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.h1q = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.LinkedListNode.nextNode' call
    var tmp0__get_nextNode__vg4li4 = this.v1o_1;
    tmp$ret$0 = tmp0__get_nextNode__vg4li4.r1k_1;
    var tmp = tmp$ret$0;
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.<get-closedForReceive>.<anonymous>' call
      helpClose(this, tmp0_safe_receiver);
      tmp$ret$1 = tmp0_safe_receiver;
      tmp_0 = tmp$ret$1;
    }
    return tmp_0;
  };
  AbstractSendChannel.prototype.y1p = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.v1o_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.r1k_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!(next instanceof Send)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstSendOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.d1l();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.b1r = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.v1o_1;
      var tmp1_addLastIfPrev = new SendBuffered(element);
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.sendBuffered.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = tmp0_addLastIfPrev.s1k_1;
      if (isInterface(tmp2__anonymous__z9zvc9, ReceiveOrClosed))
        return tmp2__anonymous__z9zvc9;
      tmp$ret$0 = true;
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.c1l(tmp1_addLastIfPrev);
      tmp$ret$1 = true;
    }
    return null;
  };
  AbstractSendChannel.prototype.r1q = function (element) {
    var result = this.q1q(element);
    var tmp;
    if (result === get_OFFER_SUCCESS()) {
      tmp = Companion_getInstance_1().f1r(Unit_getInstance());
    } else {
      if (result === get_OFFER_FAILED()) {
        var tmp0_elvis_lhs = this.l1q();
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return Companion_getInstance_1().e1r();
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var closedForSend = tmp_0;
        tmp = Companion_getInstance_1().d1r(helpCloseAndGetSendException(this, closedForSend));
      } else {
        if (result instanceof Closed) {
          tmp = Companion_getInstance_1().d1r(helpCloseAndGetSendException(this, result));
        } else {
          var tmp0_error = 'trySend returned ' + toString_0(result);
          throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
        }
      }
    }
    return tmp;
  };
  AbstractSendChannel.prototype.j1q = function (cause) {
    var closed = new Closed(cause);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev' call
      var tmp0_addLastIfPrev = this.v1o_1;
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.close.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_addLastIfPrev.s1k_1;
      tmp$ret$0 = !(tmp1__anonymous__uwfjfc instanceof Closed);
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block;
      }
      tmp0_addLastIfPrev.c1l(closed);
      tmp$ret$1 = true;
    }
    var closeAdded = tmp$ret$1;
    var tmp;
    if (closeAdded) {
      tmp = closed;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.prevNode' call
      var tmp2__get_prevNode__jhgj3a = this.v1o_1;
      tmp$ret$2 = tmp2__get_prevNode__jhgj3a.s1k_1;
      var tmp_0 = tmp$ret$2;
      tmp = tmp_0 instanceof Closed ? tmp_0 : THROW_CCE();
    }
    var actuallyClosed = tmp;
    helpClose(this, actuallyClosed);
    if (closeAdded) {
      invokeOnCloseHandler(this, cause);
    }
    return closeAdded;
  };
  AbstractSendChannel.prototype.t1q = function (closed) {
  };
  AbstractSendChannel.prototype.o1q = function () {
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf' call
      var tmp1_removeFirstIfIsInstanceOfOrPeekIf = this.v1o_1;
      var next = tmp1_removeFirstIfIsInstanceOfOrPeekIf.r1k_1;
      if (next === tmp1_removeFirstIfIsInstanceOfOrPeekIf) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      if (!isInterface(next, ReceiveOrClosed)) {
        tmp$ret$0 = null;
        break $l$block_1;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.coroutines.channels.AbstractSendChannel.takeFirstReceiveOrPeekClosed.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = next;
      tmp$ret$1 = tmp2__anonymous__z9zvc9 instanceof Closed;
      if (tmp$ret$1) {
        tmp$ret$0 = next;
        break $l$block_1;
      }
      // Inline function 'kotlin.check' call
      var tmp0_check = next.d1l();
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$2;
        // Inline function 'kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf.<anonymous>' call
        tmp$ret$2 = 'Should remove';
        var message = tmp$ret$2;
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
      tmp$ret$0 = next;
    }
    return tmp$ret$0;
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + _get_queueDebugStateString__k7jj75(this) + '}' + this.u1q();
  };
  AbstractSendChannel.prototype.u1q = function () {
    return '';
  };
  AbstractSendChannel.$metadata$ = classMeta('AbstractSendChannel', [SendChannel]);
  function Send() {
    LinkedListNode.call(this);
  }
  Send.prototype.f1q = function () {
  };
  Send.$metadata$ = classMeta('Send', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = interfaceMeta('ReceiveOrClosed');
  function Closed(closeCause) {
    Send.call(this);
    this.m1o_1 = closeCause;
  }
  Closed.prototype.g1r = function () {
    return this.m1o_1;
  };
  Closed.prototype.v1q = function () {
    var tmp0_elvis_lhs = this.m1o_1;
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.n1o = function () {
    var tmp0_elvis_lhs = this.m1o_1;
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException(get_DEFAULT_CLOSE_MESSAGE()) : tmp0_elvis_lhs;
  };
  Closed.prototype.v1p = function () {
    return this;
  };
  Closed.prototype.e1q = function () {
    return this;
  };
  Closed.prototype.c1q = function (otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeSend.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.d1q = function () {
  };
  Closed.prototype.k1p = function (value, otherOp) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = get_RESUME_TOKEN();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.Closed.tryResumeReceive.<anonymous>' call
    var tmp0_safe_receiver = otherOp;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.p1p();
    }
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  Closed.prototype.q1p = function (value) {
  };
  Closed.prototype.n1q = function (closed) {
    return Unit_getInstance();
  };
  Closed.prototype.toString = function () {
    return 'Closed@' + get_hexAddress(this) + '[' + this.m1o_1 + ']';
  };
  Closed.$metadata$ = classMeta('Closed', [ReceiveOrClosed], undefined, undefined, undefined, Send.prototype);
  function Receive() {
    LinkedListNode.call(this);
  }
  Receive.prototype.v1p = function () {
    return get_OFFER_SUCCESS();
  };
  Receive.$metadata$ = classMeta('Receive', [ReceiveOrClosed], undefined, undefined, undefined, LinkedListNode.prototype);
  var properties_initialized_AbstractChannel_kt_uwqnpt;
  function init_properties_AbstractChannel_kt_mjk5bh() {
    if (properties_initialized_AbstractChannel_kt_uwqnpt) {
    } else {
      properties_initialized_AbstractChannel_kt_uwqnpt = true;
      EMPTY = new Symbol('EMPTY');
      OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
      OFFER_FAILED = new Symbol('OFFER_FAILED');
      POLL_FAILED = new Symbol('POLL_FAILED');
      ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
      HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
    }
  }
  function updateBufferSize($this, currentSize) {
    if (currentSize < $this.k1r_1) {
      $this.p1r_1.n1c_1 = currentSize + 1 | 0;
      return null;
    }
    var tmp0_subject = $this.l1r_1;
    var tmp0 = tmp0_subject.l4_1;
    var tmp;
    switch (tmp0) {
      case 0:
        tmp = get_OFFER_FAILED();
        break;
      case 2:
        tmp = get_OFFER_SUCCESS();
        break;
      case 1:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function enqueueElement($this, currentSize, element) {
    if (currentSize < $this.k1r_1) {
      ensureCapacity($this, currentSize);
      $this.n1r_1[($this.o1r_1 + currentSize | 0) % $this.n1r_1.length | 0] = element;
    } else {
      // Inline function 'kotlinx.coroutines.assert' call
      $this.n1r_1[$this.o1r_1 % $this.n1r_1.length | 0] = null;
      $this.n1r_1[($this.o1r_1 + currentSize | 0) % $this.n1r_1.length | 0] = element;
      $this.o1r_1 = ($this.o1r_1 + 1 | 0) % $this.n1r_1.length | 0;
    }
  }
  function ensureCapacity($this, currentSize) {
    if (currentSize >= $this.n1r_1.length) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.min' call
      var tmp0_min = imul($this.n1r_1.length, 2);
      var tmp1_min = $this.k1r_1;
      tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
      var newSize = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$1 = fillArrayVal(Array(newSize), null);
      var newBuffer = tmp$ret$1;
      var inductionVariable = 0;
      if (inductionVariable < currentSize)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          newBuffer[i] = $this.n1r_1[($this.o1r_1 + i | 0) % $this.n1r_1.length | 0];
        }
         while (inductionVariable < currentSize);
      fill(newBuffer, get_EMPTY(), currentSize, newSize);
      $this.n1r_1 = newBuffer;
      $this.o1r_1 = 0;
    }
  }
  function ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.k1r_1 = capacity;
    this.l1r_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    var tmp0_require = this.k1r_1 >= 1;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<anonymous>' call
      tmp$ret$0 = 'ArrayChannel capacity must be at least 1, but ' + this.k1r_1 + ' was specified';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    this.m1r_1 = new NoOpLock();
    var tmp = this;
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$1;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = this.k1r_1;
    tmp$ret$1 = Math.min(tmp0_min, 8);
    var tmp1_arrayOfNulls = tmp$ret$1;
    tmp$ret$2 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
    var tmp2_apply = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.buffer.<anonymous>' call
    var tmp_0 = get_EMPTY();
    fill$default(tmp2_apply, tmp_0, 0, 0, 6, null);
    tmp$ret$3 = tmp2_apply;
    tmp.n1r_1 = tmp$ret$3;
    this.o1r_1 = 0;
    this.p1r_1 = atomic$int$1(0);
  }
  ArrayChannel.prototype.w1p = function () {
    return false;
  };
  ArrayChannel.prototype.x1p = function () {
    return this.p1r_1.n1c_1 === 0;
  };
  ArrayChannel.prototype.g1q = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.m1r_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.<get-isClosedForReceive>.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.g1q.call(this);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.q1q = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.m1r_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ArrayChannel.offerInternal.<anonymous>' call
      var size = this.p1r_1.n1c_1;
      var tmp0_safe_receiver = this.l1q();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      var tmp1_safe_receiver = updateBufferSize(this, size);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$1;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
      if (size === 0) {
        loop: while (true) {
          var tmp2_elvis_lhs = this.o1q();
          var tmp;
          if (tmp2_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp2_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            this.p1r_1.n1c_1 = size;
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).k1p(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            this.p1r_1.n1c_1 = size;
            tmp$ret$2 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      enqueueElement(this, size, element);
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$2;
    ensureNotNull(receive).q1p(element);
    return ensureNotNull(receive).v1p();
  };
  ArrayChannel.prototype.t1o = function () {
    var send = null;
    var resumed = false;
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.m1r_1;
    var size = this.p1r_1.n1c_1;
    if (size === 0) {
      var tmp0_elvis_lhs = this.l1q();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.n1r_1[this.o1r_1];
    this.n1r_1[this.o1r_1] = null;
    this.p1r_1.n1c_1 = size - 1 | 0;
    var replacement = get_POLL_FAILED();
    if (size === this.k1r_1) {
      loop: while (true) {
        var tmp1_elvis_lhs = this.y1p();
        var tmp;
        if (tmp1_elvis_lhs == null) {
          break loop;
        } else {
          tmp = tmp1_elvis_lhs;
        }
        send = tmp;
        var token = ensureNotNull(send).c1q(null);
        if (!(token == null)) {
          // Inline function 'kotlinx.coroutines.assert' call
          resumed = true;
          replacement = ensureNotNull(send).e1q();
          break loop;
        }
        ensureNotNull(send).f1q();
      }
    }
    var tmp_0;
    if (!(replacement === get_POLL_FAILED())) {
      tmp_0 = !(replacement instanceof Closed);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.p1r_1.n1c_1 = size;
      this.n1r_1[(this.o1r_1 + size | 0) % this.n1r_1.length | 0] = replacement;
    }
    this.o1r_1 = (this.o1r_1 + 1 | 0) % this.n1r_1.length | 0;
    tmp$ret$0 = Unit_getInstance();
    if (resumed) {
      ensureNotNull(send).d1q();
    }
    return result;
  };
  ArrayChannel.prototype.x1o = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.m1r_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ArrayChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.x1o.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ArrayChannel.prototype.k1q = function (wasClosed) {
    var onUndeliveredElement = this.u1o_1;
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.m1r_1;
    // Inline function 'kotlin.repeat' call
    var tmp0_repeat = this.p1r_1.n1c_1;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlinx.coroutines.channels.ArrayChannel.onCancelIdempotent.<anonymous>.<anonymous>' call
        var value = this.n1r_1[this.o1r_1];
        if (!(onUndeliveredElement == null) ? !(value === get_EMPTY()) : false) {
          undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, (value == null ? true : isObject(value)) ? value : THROW_CCE(), undeliveredElementException);
        }
        this.n1r_1[this.o1r_1] = get_EMPTY();
        this.o1r_1 = (this.o1r_1 + 1 | 0) % this.n1r_1.length | 0;
      }
       while (inductionVariable < tmp0_repeat);
    this.p1r_1.n1c_1 = 0;
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.k1q.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ArrayChannel.prototype.u1q = function () {
    return '(buffer:capacity=' + this.k1r_1 + ',size=' + this.p1r_1.n1c_1 + ')';
  };
  ArrayChannel.$metadata$ = classMeta('ArrayChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_getInstance();
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  BufferOverflow.$metadata$ = classMeta('BufferOverflow', undefined, undefined, undefined, undefined, Enum.prototype);
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function Factory() {
    Factory_instance = this;
    this.q1r_1 = 2147483647;
    this.r1r_1 = 0;
    this.s1r_1 = -1;
    this.t1r_1 = -2;
    this.u1r_1 = -3;
    this.v1r_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.w1r_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  Factory.$metadata$ = objectMeta('Factory');
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel() {
  }
  Channel.$metadata$ = interfaceMeta('Channel', [SendChannel, ReceiveChannel]);
  function Channel_0(capacity, onBufferOverflow, onUndeliveredElement) {
    var tmp0_subject = capacity;
    var tmp;
    Factory_getInstance();
    if (tmp0_subject === 0) {
      tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new RendezvousChannel(onUndeliveredElement) : new ArrayChannel(1, onBufferOverflow, onUndeliveredElement);
    } else {
      Factory_getInstance();
      if (tmp0_subject === -1) {
        // Inline function 'kotlin.require' call
        var tmp0_require = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance());
        // Inline function 'kotlin.contracts.contract' call
        if (!tmp0_require) {
          var tmp$ret$0;
          // Inline function 'kotlinx.coroutines.channels.Channel.<anonymous>' call
          tmp$ret$0 = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          var message = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
        tmp = new ConflatedChannel(onUndeliveredElement);
      } else {
        Factory_getInstance();
        if (tmp0_subject === 2147483647) {
          tmp = new LinkedListChannel(onUndeliveredElement);
        } else {
          Factory_getInstance();
          if (tmp0_subject === -2) {
            tmp = new ArrayChannel(onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? Factory_getInstance().w1r_1 : 1, onBufferOverflow, onUndeliveredElement);
          } else {
            tmp = (capacity === 1 ? onBufferOverflow.equals(BufferOverflow_DROP_OLDEST_getInstance()) : false) ? new ConflatedChannel(onUndeliveredElement) : new ArrayChannel(capacity, onBufferOverflow, onUndeliveredElement);
          }
        }
      }
    }
    return tmp;
  }
  function Channel$default(capacity, onBufferOverflow, onUndeliveredElement, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      Factory_getInstance();
      capacity = 0;
    }
    if (!(($mask0 & 2) === 0))
      onBufferOverflow = BufferOverflow_SUSPEND_getInstance();
    if (!(($mask0 & 4) === 0))
      onUndeliveredElement = null;
    return Channel_0(capacity, onBufferOverflow, onUndeliveredElement);
  }
  function ReceiveChannel() {
  }
  ReceiveChannel.$metadata$ = interfaceMeta('ReceiveChannel');
  function SendChannel() {
  }
  SendChannel.$metadata$ = interfaceMeta('SendChannel');
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function Failed() {
  }
  Failed.prototype.toString = function () {
    return 'Failed';
  };
  Failed.$metadata$ = classMeta('Failed');
  function Closed_0(cause) {
    Failed.call(this);
    this.x1r_1 = cause;
  }
  Closed_0.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Closed_0) {
      tmp = equals(this.x1r_1, other.x1r_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Closed_0.prototype.hashCode = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.hashCode' call
    var tmp0_hashCode = this.x1r_1;
    var tmp0_safe_receiver = tmp0_hashCode;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return tmp$ret$0;
  };
  Closed_0.prototype.toString = function () {
    return 'Closed(' + this.x1r_1 + ')';
  };
  Closed_0.$metadata$ = classMeta('Closed', undefined, undefined, undefined, undefined, Failed.prototype);
  function Companion() {
    Companion_instance = this;
    this.c1r_1 = new Failed();
  }
  Companion.prototype.f1r = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  Companion.prototype.e1r = function () {
    return _ChannelResult___init__impl__siwsuf(this.c1r_1);
  };
  Companion.prototype.d1r = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed_0(cause));
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ChannelIterator() {
  }
  ChannelIterator.$metadata$ = interfaceMeta('ChannelIterator');
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  ClosedReceiveChannelException.$metadata$ = classMeta('ClosedReceiveChannelException', undefined, undefined, undefined, undefined, NoSuchElementException.prototype);
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  ClosedSendChannelException.$metadata$ = classMeta('ClosedSendChannelException', undefined, undefined, undefined, undefined, IllegalStateException.prototype);
  function get_DEFAULT_CLOSE_MESSAGE() {
    return DEFAULT_CLOSE_MESSAGE;
  }
  var DEFAULT_CLOSE_MESSAGE;
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp0_safe_receiver = cause;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.channels.cancelConsumed.<anonymous>' call
      var tmp0_elvis_lhs = tmp0_safe_receiver instanceof CancellationException ? tmp0_safe_receiver : null;
      tmp$ret$0 = tmp0_elvis_lhs == null ? CancellationException_init_$Create$_0('Channel was consumed, consumer had failed', tmp0_safe_receiver) : tmp0_elvis_lhs;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    _this__u8e3s4.j1e(tmp);
  }
  function updateValueLocked($this, element) {
    var old = $this.c1s_1;
    var tmp;
    if (old === get_EMPTY()) {
      tmp = null;
    } else {
      var tmp0_safe_receiver = $this.u1o_1;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp_1 = (old == null ? true : isObject(old)) ? old : THROW_CCE();
        tmp_0 = callUndeliveredElementCatchingException$default(tmp0_safe_receiver, tmp_1, null, 2, null);
      }
      tmp = tmp_0;
    }
    var undeliveredElementException = tmp;
    $this.c1s_1 = element;
    return undeliveredElementException;
  }
  function ConflatedChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
    this.b1s_1 = new NoOpLock();
    this.c1s_1 = get_EMPTY();
  }
  ConflatedChannel.prototype.w1p = function () {
    return false;
  };
  ConflatedChannel.prototype.x1p = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.b1s_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-isBufferEmpty>.<anonymous>' call
    tmp$ret$0 = this.c1s_1 === get_EMPTY();
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.q1q = function (element) {
    var receive = null;
    var tmp$ret$3;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.b1s_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.offerInternal.<anonymous>' call
      var tmp0_safe_receiver = this.l1q();
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp0_safe_receiver;
      }
      if (this.c1s_1 === get_EMPTY()) {
        loop: while (true) {
          var tmp1_elvis_lhs = this.o1q();
          var tmp;
          if (tmp1_elvis_lhs == null) {
            break loop;
          } else {
            tmp = tmp1_elvis_lhs;
          }
          receive = tmp;
          if (receive instanceof Closed) {
            return ensureNotNull(receive);
          }
          var token = ensureNotNull(receive).k1p(element, null);
          if (!(token == null)) {
            // Inline function 'kotlinx.coroutines.assert' call
            tmp$ret$1 = Unit_getInstance();
            break $l$block;
          }
        }
      }
      var tmp2_safe_receiver = updateValueLocked(this, element);
      if (tmp2_safe_receiver == null)
        null;
      else {
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw tmp2_safe_receiver;
      }
      return get_OFFER_SUCCESS();
    }
    tmp$ret$3 = tmp$ret$1;
    ensureNotNull(receive).q1p(element);
    return ensureNotNull(receive).v1p();
  };
  ConflatedChannel.prototype.t1o = function () {
    var result = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.b1s_1;
    if (this.c1s_1 === get_EMPTY()) {
      var tmp0_elvis_lhs = this.l1q();
      return tmp0_elvis_lhs == null ? get_POLL_FAILED() : tmp0_elvis_lhs;
    }
    result = this.c1s_1;
    this.c1s_1 = get_EMPTY();
    tmp$ret$0 = Unit_getInstance();
    return result;
  };
  ConflatedChannel.prototype.k1q = function (wasClosed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.b1s_1;
    undeliveredElementException = updateValueLocked(this, get_EMPTY());
    tmp$ret$0 = Unit_getInstance();
    AbstractChannel.prototype.k1q.call(this, wasClosed);
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  ConflatedChannel.prototype.x1o = function (receive) {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.b1s_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.enqueueReceiveInternal.<anonymous>' call
    tmp$ret$0 = AbstractChannel.prototype.x1o.call(this, receive);
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.prototype.u1q = function () {
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.internal.withLock' call
    var tmp0_withLock = this.b1s_1;
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.channels.ConflatedChannel.<get-bufferDebugString>.<anonymous>' call
    tmp$ret$0 = '(value=' + toString(this.c1s_1) + ')';
    tmp$ret$1 = tmp$ret$0;
    return tmp$ret$1;
  };
  ConflatedChannel.$metadata$ = classMeta('ConflatedChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function LinkedListChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  LinkedListChannel.prototype.w1p = function () {
    return true;
  };
  LinkedListChannel.prototype.x1p = function () {
    return true;
  };
  LinkedListChannel.prototype.q1q = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.q1q.call(this, element);
      if (result === get_OFFER_SUCCESS())
        return get_OFFER_SUCCESS();
      else {
        if (result === get_OFFER_FAILED()) {
          var sendResult = this.b1r(element);
          if (sendResult == null)
            return get_OFFER_SUCCESS();
          else {
            if (sendResult instanceof Closed)
              return sendResult;
          }
        } else {
          if (result instanceof Closed)
            return result;
          else {
            var tmp0_error = 'Invalid offerInternal result ' + toString_0(result);
            throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
          }
        }
      }
    }
  };
  LinkedListChannel.prototype.m1q = function (list, closed) {
    var undeliveredElementException = null;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = _get_holder__f6h5pd(list);
      if (tmp0_subject == null) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
          var tmp = _get_holder__f6h5pd(list);
          var tmp0__anonymous__q1qw7t = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
          var tmp0_subject_0 = tmp0__anonymous__q1qw7t;
          if (tmp0_subject_0 instanceof SendBuffered) {
            var tmp1_safe_receiver = this.u1o_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp_1 = tmp0__anonymous__q1qw7t.z1q_1;
              tmp_0 = callUndeliveredElementCatchingException(tmp1_safe_receiver, (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE(), undeliveredElementException);
            }
            undeliveredElementException = tmp_0;
          } else {
            tmp0__anonymous__q1qw7t.n1q(closed);
          }
        } else {
          var tmp_2 = _get_holder__f6h5pd(list);
          var list_0 = tmp_2 instanceof ArrayList ? tmp_2 : THROW_CCE();
          var inductionVariable = list_0.g() - 1 | 0;
          if (0 <= inductionVariable)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'kotlinx.coroutines.channels.LinkedListChannel.onCancelIdempotentList.<anonymous>' call
              var tmp1__anonymous__uwfjfc = list_0.h(i);
              var tmp0_subject_1 = tmp1__anonymous__uwfjfc;
              if (tmp0_subject_1 instanceof SendBuffered) {
                var tmp1_safe_receiver_0 = this.u1o_1;
                var tmp_3;
                if (tmp1_safe_receiver_0 == null) {
                  tmp_3 = null;
                } else {
                  var tmp_4 = tmp1__anonymous__uwfjfc.z1q_1;
                  tmp_3 = callUndeliveredElementCatchingException(tmp1_safe_receiver_0, (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE(), undeliveredElementException);
                }
                undeliveredElementException = tmp_3;
              } else {
                tmp1__anonymous__uwfjfc.n1q(closed);
              }
            }
             while (0 <= inductionVariable);
        }
      }
    }
    var tmp0_safe_receiver = undeliveredElementException;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      throw tmp0_safe_receiver;
    }
  };
  LinkedListChannel.$metadata$ = classMeta('LinkedListChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function RendezvousChannel(onUndeliveredElement) {
    AbstractChannel.call(this, onUndeliveredElement);
  }
  RendezvousChannel.prototype.w1p = function () {
    return true;
  };
  RendezvousChannel.prototype.x1p = function () {
    return true;
  };
  RendezvousChannel.$metadata$ = classMeta('RendezvousChannel', undefined, undefined, undefined, undefined, AbstractChannel.prototype);
  function asFlow(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    return tmp$ret$0;
  }
  function $collectCOROUTINE$5(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1s_1 = _this__u8e3s4;
    this.s1s_1 = collector;
  }
  $collectCOROUTINE$5.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.t1s_1 = this.r1s_1.v1s_1.d();
            this.hi_1 = 1;
            continue $sm;
          case 1:
            if (!this.t1s_1.e()) {
              this.hi_1 = 3;
              continue $sm;
            }

            this.u1s_1 = this.t1s_1.f();
            this.hi_1 = 2;
            suspendResult = this.s1s_1.w1s(this.u1s_1, this);
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
  $collectCOROUTINE$5.$metadata$ = classMeta('$collectCOROUTINE$5', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_0($this_asFlow) {
    this.v1s_1 = $this_asFlow;
  }
  _no_name_provided__qut3iv_0.prototype.x1s = function (collector, $cont) {
    var tmp = new $collectCOROUTINE$5(this, collector, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Flow]);
  function Flow() {
  }
  Flow.$metadata$ = interfaceMeta('Flow');
  function FlowCollector() {
  }
  FlowCollector.$metadata$ = interfaceMeta('FlowCollector');
  function checkOwnership(_this__u8e3s4, owner) {
    if (!(_this__u8e3s4.y1s_1 === owner))
      throw _this__u8e3s4;
  }
  function unsafeFlow(block) {
    return new _no_name_provided__qut3iv_1(block);
  }
  function _no_name_provided__qut3iv_1($block) {
    this.z1s_1 = $block;
  }
  _no_name_provided__qut3iv_1.prototype.x1s = function (collector, $cont) {
    return this.z1s_1(collector, $cont);
  };
  _no_name_provided__qut3iv_1.$metadata$ = classMeta(undefined, [Flow]);
  function firstOrNull(_this__u8e3s4, predicate, $cont) {
    var tmp = new $firstOrNullCOROUTINE$10(_this__u8e3s4, predicate, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  }
  function $emitCOROUTINE$11(_this__u8e3s4, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1t_1 = _this__u8e3s4;
    this.v1t_1 = value;
  }
  $emitCOROUTINE$11.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.hi_1 = 1;
            suspendResult = this.u1t_1.x1t_1(this.v1t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              this.u1t_1.y1t_1._v = this.v1t_1;
              tmp_0.w1t_1 = false;
              this.hi_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.w1t_1 = true;
              this.hi_1 = 2;
              continue $sm;
            }

            break;
          case 2:
            var ARGUMENT = this.w1t_1;
            if (!ARGUMENT) {
              throw new AbortFlowException(this.u1t_1);
            } else {
              this.hi_1 = 3;
              continue $sm;
            }

            ;
            break;
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
  $emitCOROUTINE$11.$metadata$ = classMeta('$emitCOROUTINE$11', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function _no_name_provided__qut3iv_2($predicate, $result) {
    this.x1t_1 = $predicate;
    this.y1t_1 = $result;
  }
  _no_name_provided__qut3iv_2.prototype.w1s = function (value, $cont) {
    var tmp = new $emitCOROUTINE$11(this, value, $cont);
    tmp.ji_1 = Unit_getInstance();
    tmp.ki_1 = null;
    return tmp.qi();
  };
  _no_name_provided__qut3iv_2.$metadata$ = classMeta(undefined, [FlowCollector]);
  function $firstOrNullCOROUTINE$10(_this__u8e3s4, predicate, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1t_1 = _this__u8e3s4;
    this.j1t_1 = predicate;
  }
  $firstOrNullCOROUTINE$10.prototype.qi = function () {
    var suspendResult = this.ji_1;
    $sm: do
      try {
        var tmp = this.hi_1;
        switch (tmp) {
          case 0:
            this.ii_1 = 4;
            this.k1t_1 = {_v: null};
            var tmp_0 = this;
            tmp_0.l1t_1 = new _no_name_provided__qut3iv_2(this.j1t_1, this.k1t_1);
            this.ii_1 = 2;
            this.hi_1 = 1;
            suspendResult = this.i1t_1.x1s(this.l1t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ii_1 = 4;
            this.hi_1 = 3;
            continue $sm;
          case 2:
            this.ii_1 = 4;
            var tmp_1 = this.ki_1;
            if (tmp_1 instanceof AbortFlowException) {
              var e = this.ki_1;
              checkOwnership(e, this.l1t_1);
              this.hi_1 = 3;
              continue $sm;
            } else {
              throw this.ki_1;
            }

            break;
          case 3:
            this.ii_1 = 4;
            return this.k1t_1._v;
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
  $firstOrNullCOROUTINE$10.$metadata$ = classMeta('$firstOrNullCOROUTINE$10', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  function ensureCapacity_0($this) {
    var currentSize = $this.u1j_1.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp0_copyInto = $this.u1j_1;
    var tmp1_copyInto = $this.v1j_1;
    var tmp2_copyInto = tmp0_copyInto.length;
    arrayCopy(tmp0_copyInto, newElements, 0, tmp1_copyInto, tmp2_copyInto);
    tmp$ret$1 = newElements;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.copyInto' call
    var tmp3_copyInto = $this.u1j_1;
    var tmp4_copyInto = $this.u1j_1.length - $this.v1j_1 | 0;
    var tmp5_copyInto = $this.v1j_1;
    arrayCopy(tmp3_copyInto, newElements, tmp4_copyInto, 0, tmp5_copyInto);
    tmp$ret$2 = newElements;
    $this.u1j_1 = newElements;
    $this.v1j_1 = 0;
    $this.w1j_1 = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(16), null);
    tmp.u1j_1 = tmp$ret$0;
    this.v1j_1 = 0;
    this.w1j_1 = 0;
  }
  ArrayQueue.prototype.c1k = function () {
    return this.v1j_1 === this.w1j_1;
  };
  ArrayQueue.prototype.z1j = function (element) {
    this.u1j_1[this.w1j_1] = element;
    this.w1j_1 = (this.w1j_1 + 1 | 0) & (this.u1j_1.length - 1 | 0);
    if (this.w1j_1 === this.v1j_1) {
      ensureCapacity_0(this);
    }
  };
  ArrayQueue.prototype.x1j = function () {
    if (this.v1j_1 === this.w1j_1)
      return null;
    var element = this.u1j_1[this.v1j_1];
    this.u1j_1[this.v1j_1] = null;
    this.v1j_1 = (this.v1j_1 + 1 | 0) & (this.u1j_1.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = classMeta('ArrayQueue');
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = classMeta('OpDescriptor');
  function get_UNDEFINED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWith(_this__u8e3s4, result, onCancellation) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject instanceof DispatchedContinuation) {
      var tmp1_resumeCancellableWith = _this__u8e3s4;
      var state = toState_0(result, onCancellation);
      var tmp_0;
      if (tmp1_resumeCancellableWith.k1g_1.c1j(tmp1_resumeCancellableWith.u3())) {
        tmp1_resumeCancellableWith.m1g_1 = state;
        tmp1_resumeCancellableWith.y1g_1 = get_MODE_CANCELLABLE();
        tmp1_resumeCancellableWith.k1g_1.d1j(tmp1_resumeCancellableWith.u3(), tmp1_resumeCancellableWith);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          var tmp0_executeUnconfined = get_MODE_CANCELLABLE();
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().h1k();
          if (false ? eventLoop.b1k() : false) {
            tmp$ret$0 = false;
            break $l$block;
          }
          var tmp_1;
          if (eventLoop.a1k()) {
            tmp1_resumeCancellableWith.m1g_1 = state;
            tmp1_resumeCancellableWith.y1g_1 = tmp0_executeUnconfined;
            eventLoop.y1j(tmp1_resumeCancellableWith);
            tmp_1 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.d1k(true);
            try {
              // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith.<anonymous>' call
              var tmp$ret$3;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = tmp1_resumeCancellableWith.u3().y3(Key_getInstance_3());
                if (!(job == null) ? !job.e1d() : false) {
                  var cause = job.b1e();
                  tmp1_resumeCancellableWith.q1h(state, cause);
                  var tmp$ret$2;
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  var tmp$ret$1;
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp0_failure = Companion_getInstance_0();
                  tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(cause));
                  tmp1_resumeCancellableWith.v3(tmp$ret$1);
                  tmp$ret$2 = Unit_getInstance();
                  tmp$ret$3 = true;
                  break $l$block_0;
                }
                tmp$ret$3 = false;
              }
              if (!tmp$ret$3) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                var tmp$ret$4;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                var tmp0_withContinuationContext = tmp1_resumeCancellableWith.l1g_1;
                var tmp1_withContinuationContext = tmp1_resumeCancellableWith.n1g_1;
                tmp1_resumeCancellableWith.l1g_1.v3(result);
                tmp$ret$4 = Unit_getInstance();
              }
              $l$loop: while (true) {
                if (!eventLoop.t1j())
                  break $l$loop;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                tmp1_resumeCancellableWith.d1i($p, null);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.e1k(true);
            }
            tmp_1 = false;
          }
          tmp$ret$0 = tmp_1;
        }
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    } else {
      _this__u8e3s4.v3(result);
      tmp = Unit_getInstance();
    }
    return tmp;
  }
  function resumeCancellableWith$default(_this__u8e3s4, result, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onCancellation = null;
    return resumeCancellableWith(_this__u8e3s4, result, onCancellation);
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.o1g_1.m1c_1;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, get_MODE_UNINITIALIZED());
    this.k1g_1 = dispatcher;
    this.l1g_1 = continuation;
    this.m1g_1 = get_UNDEFINED();
    this.n1g_1 = threadContextElements(this.u3());
    this.o1g_1 = atomic$ref$1(null);
  }
  DispatchedContinuation.prototype.z1t = function () {
    return this.l1g_1;
  };
  DispatchedContinuation.prototype.u3 = function () {
    return this.l1g_1.u3();
  };
  DispatchedContinuation.prototype.a1u = function () {
    return this.n1g_1;
  };
  DispatchedContinuation.prototype.x1g = function () {
    return !(this.o1g_1.m1c_1 == null);
  };
  DispatchedContinuation.prototype.b1u = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.awaitReusability.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
      if (!(tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()))
        return Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.t12 = function () {
    this.b1u();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.b1h();
    }
  };
  DispatchedContinuation.prototype.p1g = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.claimReusableCancellableContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
      if (tmp1__anonymous__uwfjfc === null) {
        this.o1g_1.m1c_1 = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl) {
          if (this.o1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, get_REUSABLE_CLAIMED())) {
            return tmp1__anonymous__uwfjfc instanceof CancellableContinuationImpl ? tmp1__anonymous__uwfjfc : THROW_CCE();
          }
        } else {
          if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
          } else {
            if (tmp1__anonymous__uwfjfc instanceof Error) {
            } else {
              var tmp0_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
              throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
            }
          }
        }
      }
    }
  };
  DispatchedContinuation.prototype.a1h = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.tryReleaseClaimedContinuation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
      if (tmp1__anonymous__uwfjfc === get_REUSABLE_CLAIMED()) {
        if (this.o1g_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (tmp1__anonymous__uwfjfc instanceof Error) {
          // Inline function 'kotlin.require' call
          var tmp0_require = this.o1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.contracts.contract' call
          if (!tmp0_require) {
            var tmp$ret$0;
            // Inline function 'kotlin.require.<anonymous>' call
            tmp$ret$0 = 'Failed requirement.';
            var message = tmp$ret$0;
            throw IllegalArgumentException_init_$Create$(toString_0(message));
          }
          return tmp1__anonymous__uwfjfc;
        } else {
          var tmp1_error = 'Inconsistent state ' + toString(tmp1__anonymous__uwfjfc);
          throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
        }
      }
    }
  };
  DispatchedContinuation.prototype.z1g = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var tmp0_loop = this.o1g_1;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.postponeCancellation.<anonymous>' call
      var tmp1__anonymous__uwfjfc = tmp0_loop.m1c_1;
      var tmp0_subject = tmp1__anonymous__uwfjfc;
      if (equals(tmp0_subject, get_REUSABLE_CLAIMED())) {
        if (this.o1g_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (tmp0_subject instanceof Error)
          return true;
        else {
          if (this.o1g_1.atomicfu$compareAndSet(tmp1__anonymous__uwfjfc, null))
            return false;
        }
      }
    }
  };
  DispatchedContinuation.prototype.p1h = function () {
    var state = this.m1g_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.m1g_1 = get_UNDEFINED();
    return state;
  };
  DispatchedContinuation.prototype.n1h = function () {
    return this;
  };
  DispatchedContinuation.prototype.v3 = function (result) {
    var context = this.l1g_1.u3();
    var state = toState$default(result, null, 1, null);
    if (this.k1g_1.c1j(context)) {
      this.m1g_1 = state;
      this.y1g_1 = get_MODE_ATOMIC();
      this.k1g_1.d1j(context, this);
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        var tmp0_executeUnconfined = get_MODE_ATOMIC();
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().h1k();
        if (false ? eventLoop.b1k() : false) {
          tmp$ret$0 = false;
          break $l$block;
        }
        var tmp;
        if (eventLoop.a1k()) {
          this.m1g_1 = state;
          this.y1g_1 = tmp0_executeUnconfined;
          eventLoop.y1j(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.d1k(true);
          try {
            // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeWith.<anonymous>' call
            var tmp$ret$1;
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            var tmp0_withCoroutineContext = this.u3();
            var tmp1_withCoroutineContext = this.n1g_1;
            this.l1g_1.v3(result);
            tmp$ret$1 = Unit_getInstance();
            $l$loop: while (true) {
              if (!eventLoop.t1j())
                break $l$loop;
            }
          } catch ($p) {
            if ($p instanceof Error) {
              this.d1i($p, null);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.e1k(true);
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
      }
    }
  };
  DispatchedContinuation.prototype.q1h = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState.a1j_1(cause);
    }
  };
  DispatchedContinuation.prototype.c1u = function (state) {
    var job = this.u3().y3(Key_getInstance_3());
    if (!(job == null) ? !job.e1d() : false) {
      var cause = job.b1e();
      this.q1h(state, cause);
      var tmp$ret$1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(cause));
      this.v3(tmp$ret$0);
      tmp$ret$1 = Unit_getInstance();
      return true;
    }
    return false;
  };
  DispatchedContinuation.prototype.d1u = function (result) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.withContinuationContext' call
    var tmp0_withContinuationContext = this.l1g_1;
    var tmp1_withContinuationContext = this.n1g_1;
    this.l1g_1.v3(result);
    tmp$ret$0 = Unit_getInstance();
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.k1g_1 + ', ' + toDebugString(this.l1g_1) + ']';
  };
  DispatchedContinuation.$metadata$ = classMeta('DispatchedContinuation', [CoroutineStackFrame, Continuation], undefined, undefined, undefined, DispatchedTask.prototype);
  function executeUnconfined(_this__u8e3s4, contState, mode, doYield, block) {
    init_properties_DispatchedContinuation_kt_s7rtw6();
    // Inline function 'kotlinx.coroutines.assert' call
    var eventLoop = ThreadLocalEventLoop_getInstance().h1k();
    if (doYield ? eventLoop.b1k() : false)
      return false;
    var tmp;
    if (eventLoop.a1k()) {
      _this__u8e3s4.m1g_1 = contState;
      _this__u8e3s4.y1g_1 = mode;
      eventLoop.y1j(_this__u8e3s4);
      tmp = true;
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.d1k(true);
      try {
        block();
        $l$loop: while (true) {
          if (!eventLoop.t1j())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.d1i($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.e1k(true);
      }
      tmp = false;
    }
    return tmp;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function init_properties_DispatchedContinuation_kt_s7rtw6() {
    if (properties_initialized_DispatchedContinuation_kt_2siadq) {
    } else {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function get_MODE_CANCELLABLE() {
    return MODE_CANCELLABLE;
  }
  var MODE_CANCELLABLE;
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.y1g_1 = resumeMode;
  }
  DispatchedTask.prototype.b1i = function () {
    return this.y1g_1;
  };
  DispatchedTask.prototype.q1h = function (takenState, cause) {
  };
  DispatchedTask.prototype.y1h = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.a1i = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j1d_1;
  };
  DispatchedTask.prototype.c1i = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    get_taskContext(this);
    var taskContext = Unit_getInstance();
    var fatalException = null;
    try {
      var tmp = this.n1h();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.l1g_1;
      var tmp$ret$5;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = delegate.n1g_1;
      var context = continuation.u3();
      var state = this.p1h();
      var exception = this.a1i(state);
      var job = (exception == null ? get_isCancellableMode(this.y1g_1) : false) ? context.y3(Key_getInstance_3()) : null;
      var tmp_0;
      if (!(job == null) ? !job.e1d() : false) {
        var cause = job.b1e();
        this.q1h(state, cause);
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_0();
        var tmp1_failure = recoverStackTrace(cause, continuation);
        tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(tmp1_failure));
        continuation.v3(tmp$ret$0);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp_1;
        if (!(exception == null)) {
          var tmp$ret$2;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure_0 = Companion_getInstance_0();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.v3(tmp$ret$1);
          tmp$ret$2 = Unit_getInstance();
          tmp_1 = tmp$ret$2;
        } else {
          var tmp$ret$4;
          // Inline function 'kotlin.coroutines.resume' call
          var tmp2_resume = this.y1h(state);
          var tmp$ret$3;
          // Inline function 'kotlin.Companion.success' call
          var tmp0_success = Companion_getInstance_0();
          tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_resume);
          continuation.v3(tmp$ret$3);
          tmp$ret$4 = Unit_getInstance();
          tmp_1 = tmp$ret$4;
        }
        tmp_0 = tmp_1;
      }
      tmp$ret$5 = tmp_0;
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        throw $p;
      }
    }
    finally {
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_2;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success_0 = Companion_getInstance_0();
        var tmp1_success = Unit_getInstance();
        tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp_2 = tmp$ret$6;
      } catch ($p) {
        var tmp_3;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_0();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_3 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      tmp$ret$8 = tmp_2;
      var result = tmp$ret$8;
      this.d1i(fatalException, Result__exceptionOrNull_impl_p6xea9(result));
    }
  };
  DispatchedTask.prototype.d1i = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
    }
    var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this.n1h().u3(), reason);
  };
  DispatchedTask.$metadata$ = classMeta('DispatchedTask', undefined, undefined, undefined, undefined, SchedulerTask.prototype);
  function get_MODE_UNINITIALIZED() {
    return MODE_UNINITIALIZED;
  }
  var MODE_UNINITIALIZED;
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_MODE_CANCELLABLE_REUSABLE() {
    return MODE_CANCELLABLE_REUSABLE;
  }
  var MODE_CANCELLABLE_REUSABLE;
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 ? true : _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.n1h();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.y1g_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.k1g_1;
      var context = delegate.u3();
      if (dispatcher.c1j(context)) {
        dispatcher.d1j(context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function get_MODE_UNDISPATCHED() {
    return MODE_UNDISPATCHED;
  }
  var MODE_UNDISPATCHED;
  function get_MODE_ATOMIC() {
    return MODE_ATOMIC;
  }
  var MODE_ATOMIC;
  function runUnconfinedEventLoop(_this__u8e3s4, eventLoop, block) {
    eventLoop.d1k(true);
    try {
      block();
      $l$loop: while (true) {
        if (!eventLoop.t1j())
          break $l$loop;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        _this__u8e3s4.d1i($p, null);
      } else {
        throw $p;
      }
    }
    finally {
      eventLoop.e1k(true);
    }
  }
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().h1k();
    if (eventLoop.a1k()) {
      eventLoop.y1j(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.d1k(true);
      try {
        // Inline function 'kotlinx.coroutines.resumeUnconfined.<anonymous>' call
        resume(_this__u8e3s4, _this__u8e3s4.n1h(), true);
        $l$loop: while (true) {
          if (!eventLoop.t1j())
            break $l$loop;
        }
      } catch ($p) {
        if ($p instanceof Error) {
          _this__u8e3s4.d1i($p, null);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.e1k(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.p1h();
    var exception = _this__u8e3s4.a1i(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.failure' call
      var tmp0_failure = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp1_success = Companion_getInstance_0();
      var tmp2_success = _this__u8e3s4.y1h(state);
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp2_success);
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var tmp3_resumeUndispatchedWith = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      var tmp0_withContinuationContext = tmp3_resumeUndispatchedWith.l1g_1;
      var tmp1_withContinuationContext = tmp3_resumeUndispatchedWith.n1g_1;
      tmp3_resumeUndispatchedWith.l1g_1.v3(result);
      tmp$ret$2 = Unit_getInstance();
    } else {
      delegate.v3(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    return holder;
  }
  function _InlineList___init__impl__z8n56_0(holder, $mask0, $marker) {
    if (!(($mask0 & 1) === 0))
      holder = null;
    var tmp = _InlineList___init__impl__z8n56(holder);
    return tmp;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).a(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        var tmp_1 = _get_holder__f6h5pd($this);
        list.a((tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE());
        list.a(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function InlineList__forEachReversed_impl_jituug($this, action) {
    var tmp0_subject = _get_holder__f6h5pd($this);
    if (tmp0_subject == null)
      return Unit_getInstance();
    else {
      if (!(tmp0_subject instanceof ArrayList)) {
        var tmp = _get_holder__f6h5pd($this);
        action((tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE());
      } else {
        var tmp_0 = _get_holder__f6h5pd($this);
        var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
        var inductionVariable = list.g() - 1 | 0;
        if (0 <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            action(list.h(i));
          }
           while (0 <= inductionVariable);
      }
    }
  }
  function InlineList__toString_impl_1aej86($this) {
    return 'InlineList(holder=' + toString($this) + ')';
  }
  function InlineList__hashCode_impl_n1kg11($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function InlineList__equals_impl_wwe0i1($this, other) {
    if (!(other instanceof InlineList))
      return false;
    var tmp0_other_with_cast = other instanceof InlineList ? other.e1u_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineList(holder) {
    this.e1u_1 = holder;
  }
  InlineList.prototype.toString = function () {
    return InlineList__toString_impl_1aej86(this.e1u_1);
  };
  InlineList.prototype.hashCode = function () {
    return InlineList__hashCode_impl_n1kg11(this.e1u_1);
  };
  InlineList.prototype.equals = function (other) {
    return InlineList__equals_impl_wwe0i1(this.e1u_1, other);
  };
  InlineList.$metadata$ = classMeta('InlineList');
  function bindCancellationFun(_this__u8e3s4, element, context) {
    return bindCancellationFun$lambda(_this__u8e3s4, element, context);
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  UndeliveredElementException.$metadata$ = classMeta('UndeliveredElementException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        if (!(undeliveredElementException == null) ? !(undeliveredElementException.cause === $p) : false) {
          // Inline function 'kotlinx.coroutines.addSuppressedThrowable' call
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + element, $p);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function callUndeliveredElementCatchingException$default(_this__u8e3s4, element, undeliveredElementException, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      undeliveredElementException = null;
    return callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      handleCoroutineException(context, tmp0_safe_receiver);
      tmp$ret$0 = Unit_getInstance();
    }
  }
  function bindCancellationFun$lambda($this_bindCancellationFun, $element, $context) {
    return function (_anonymous_parameter_0__qggqh8) {
      callUndeliveredElement($this_bindCancellationFun, $element, $context);
      return Unit_getInstance();
    };
  }
  function ContextScope(context) {
    this.f1u_1 = context;
  }
  ContextScope.prototype.d1d = function () {
    return this.f1u_1;
  };
  ContextScope.prototype.toString = function () {
    return 'CoroutineScope(coroutineContext=' + this.f1u_1 + ')';
  };
  ContextScope.$metadata$ = classMeta('ContextScope', [CoroutineScope]);
  function Symbol(symbol) {
    this.g1u_1 = symbol;
  }
  Symbol.prototype.toString = function () {
    return '<' + this.g1u_1 + '>';
  };
  Symbol.$metadata$ = classMeta('Symbol');
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    return systemProp_0(propertyName, toLong(defaultValue), toLong(minValue), toLong(maxValue)).o6();
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp0_error = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp0_error));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(minValue.f1(parsed) <= 0 ? parsed.f1(maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var tmp1_error = "System property '" + propertyName + "' should be in range " + toString_0(minValue) + '..' + toString_0(maxValue) + ", but is '" + toString_0(parsed) + "'";
      throw IllegalStateException_init_$Create$(toString_0(tmp1_error));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation) {
    var tmp;
    try {
      var tmp_0 = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      resumeCancellableWith(tmp_0, tmp$ret$0, onCancellation);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(completion, $p);
        tmp_1 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function startCoroutineCancellable$default(_this__u8e3s4, receiver, completion, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    return startCoroutineCancellable(_this__u8e3s4, receiver, completion, onCancellation);
  }
  function dispatcherFailure(completion, e) {
    var tmp$ret$0;
    // Inline function 'kotlin.Companion.failure' call
    var tmp0_failure = Companion_getInstance_0();
    tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(e));
    completion.v3(tmp$ret$0);
    throw e;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    var tmp;
    try {
      var tmp_0 = intercepted(_this__u8e3s4);
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      var tmp_1 = tmp$ret$0;
      resumeCancellableWith$default(tmp_0, tmp_1, null, 2, null);
      tmp = Unit_getInstance();
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        dispatcherFailure$accessor$paksz7(fatalCompletion, $p);
        tmp_2 = Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function dispatcherFailure$accessor$paksz7(completion, e) {
    return dispatcherFailure(completion, e);
  }
  function startDirect(completion, block) {
    var tmp$ret$0;
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    tmp$ret$0 = completion;
    var actualCompletion = tmp$ret$0;
    var tmp;
    try {
      tmp = block(actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp0_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        actualCompletion.v3(tmp$ret$1);
        tmp$ret$2 = Unit_getInstance();
        return Unit_getInstance();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      var tmp$ret$4;
      // Inline function 'kotlin.coroutines.resume' call
      var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
      var tmp$ret$3;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      tmp$ret$3 = _Result___init__impl__xyqfz8(tmp0_resume);
      actualCompletion.v3(tmp$ret$3);
      tmp$ret$4 = Unit_getInstance();
    }
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlinx.coroutines.intrinsics.startDirect' call
      var tmp$ret$0;
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
      tmp$ret$0 = completion;
      var actualCompletion = tmp$ret$0;
      var tmp;
      try {
        var tmp$ret$5;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        var tmp0_withCoroutineContext = completion.u3();
        var tmp$ret$3;
        // Inline function 'kotlinx.coroutines.intrinsics.startCoroutineUndispatched.<anonymous>.<anonymous>' call
        var tmp$ret$2;
        // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = _this__u8e3s4;
        var a = tmp$ret$1;
        tmp$ret$2 = typeof a === 'function' ? a(receiver, actualCompletion) : _this__u8e3s4.ri(receiver, actualCompletion);
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        tmp = tmp$ret$5;
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.coroutines.resumeWithException' call
          var tmp$ret$6;
          // Inline function 'kotlin.Companion.failure' call
          var tmp0_failure = Companion_getInstance_0();
          tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
          actualCompletion.v3(tmp$ret$6);
          tmp$ret$7 = Unit_getInstance();
          tmp$ret$8 = Unit_getInstance();
          break $l$block;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      var value = tmp;
      if (!(value === get_COROUTINE_SUSPENDED())) {
        var tmp$ret$10;
        // Inline function 'kotlin.coroutines.resume' call
        var tmp0_resume = (value == null ? true : isObject(value)) ? value : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        tmp$ret$9 = _Result___init__impl__xyqfz8(tmp0_resume);
        actualCompletion.v3(tmp$ret$9);
        tmp$ret$10 = Unit_getInstance();
      }
    }
  }
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = interfaceMeta('SelectClause0');
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = interfaceMeta('SelectClause1');
  function CloseableCoroutineDispatcher() {
  }
  CloseableCoroutineDispatcher.$metadata$ = classMeta('CloseableCoroutineDispatcher', undefined, undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = classMeta('CompletionHandlerBase', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function invokeIt(_this__u8e3s4, cause) {
    var tmp0_subject = typeof _this__u8e3s4;
    if (tmp0_subject === 'function')
      _this__u8e3s4(cause);
    else {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = _this__u8e3s4;
      tmp$ret$0.invoke(cause);
    }
  }
  function get_asHandler(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function get_asHandler_0(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    return tmp$ret$0;
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = classMeta('CancelHandlerBase');
  function toDebugString(_this__u8e3s4) {
    return toString_0(_this__u8e3s4);
  }
  function withCoroutineContext(context, countOrElement, block) {
    return block();
  }
  function withContinuationContext(continuation, countOrElement, block) {
    return block();
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().j1j_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        var tmp$ret$0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp0_asDynamic = window;
        tmp$ret$0 = tmp0_asDynamic;
        tmp_1 = tmp$ret$0 != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp1_asDynamic = window;
        tmp$ret$1 = tmp1_asDynamic;
        tmp_0 = !(typeof tmp$ret$1.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' ? true : typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return ((((!(typeof navigator === 'undefined') ? navigator != null : false) ? navigator.userAgent != null : false) ? !(typeof navigator.userAgent === 'undefined') : false) ? !(typeof navigator.userAgent.match === 'undefined') : false) ? navigator.userAgent.match('\\bjsdom\\b') : false;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.d1d().f4(context);
    return (!(combined === Dispatchers_getInstance().j1j_1) ? combined.y3(Key_getInstance()) == null : false) ? combined.f4(Dispatchers_getInstance().j1j_1) : combined;
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).ie();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function get_hexAddress(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function assert(value) {
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.j1j_1 = createDefaultDispatcher();
    this.k1j_1 = Unconfined_getInstance();
    this.l1j_1 = new JsMainDispatcher(this.j1j_1, false);
    this.m1j_1 = null;
  }
  Dispatchers.prototype.n1j = function () {
    var tmp0_elvis_lhs = this.m1j_1;
    return tmp0_elvis_lhs == null ? this.l1j_1 : tmp0_elvis_lhs;
  };
  Dispatchers.$metadata$ = objectMeta('Dispatchers');
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.k1u_1 = delegate;
    this.l1u_1 = invokeImmediately;
    this.m1u_1 = this.l1u_1 ? this : new JsMainDispatcher(this.k1u_1, true);
  }
  JsMainDispatcher.prototype.b1o = function () {
    return this.m1u_1;
  };
  JsMainDispatcher.prototype.c1j = function (context) {
    return !this.l1u_1;
  };
  JsMainDispatcher.prototype.d1j = function (context, block) {
    return this.k1u_1.d1j(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    var tmp0_elvis_lhs = this.c1o();
    return tmp0_elvis_lhs == null ? this.k1u_1.toString() : tmp0_elvis_lhs;
  };
  JsMainDispatcher.$metadata$ = classMeta('JsMainDispatcher', undefined, undefined, undefined, undefined, MainCoroutineDispatcher.prototype);
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.d1j = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = classMeta('UnconfinedEventLoop', undefined, undefined, undefined, undefined, EventLoop.prototype);
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$(message, cause, this);
    this.r1u_1 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.r1u_1;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.r1u_1, this.r1u_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.r1u_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = classMeta('JobCancellationException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function addSuppressedThrowable(_this__u8e3s4, other) {
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  NodeDispatcher.prototype.u1u = function () {
    process.nextTick(this.d1v_1.a1v_1);
  };
  NodeDispatcher.$metadata$ = objectMeta('NodeDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  SetTimeoutDispatcher.prototype.u1u = function () {
    setTimeout(this.d1v_1.a1v_1, 0);
  };
  SetTimeoutDispatcher.$metadata$ = objectMeta('SetTimeoutDispatcher', undefined, undefined, undefined, undefined, SetTimeoutBasedDispatcher.prototype);
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.l1v();
      return Unit_getInstance();
    };
  }
  function ScheduledMessageQueue($outer) {
    this.b1v_1 = $outer;
    MessageQueue.call(this);
    var tmp = this;
    tmp.a1v_1 = SetTimeoutBasedDispatcher$ScheduledMessageQueue$processQueue$lambda(this);
  }
  ScheduledMessageQueue.prototype.m1v = function () {
    this.b1v_1.u1u();
  };
  ScheduledMessageQueue.prototype.n1v = function () {
    setTimeout(this.a1v_1, 0);
  };
  ScheduledMessageQueue.$metadata$ = classMeta('ScheduledMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.e1g(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.d1v_1 = new ScheduledMessageQueue(this);
  }
  SetTimeoutBasedDispatcher.prototype.d1j = function (context, block) {
    this.d1v_1.o1v(block);
  };
  SetTimeoutBasedDispatcher.prototype.o1j = function (timeMillis, continuation) {
    var handle = setTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    var tmp$ret$1;
    // Inline function 'kotlinx.coroutines.asHandler' call
    var tmp0__get_asHandler__gq3rkj = new ClearTimeout(handle);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0__get_asHandler__gq3rkj;
    tmp$ret$1 = tmp$ret$0;
    continuation.d1g(tmp$ret$1);
  };
  SetTimeoutBasedDispatcher.$metadata$ = classMeta('SetTimeoutBasedDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function MessageQueue() {
    ArrayQueue.call(this);
    this.j1v_1 = 16;
    this.k1v_1 = false;
  }
  MessageQueue.prototype.o1v = function (element) {
    this.z1j(element);
    if (!this.k1v_1) {
      this.k1v_1 = true;
      this.m1v();
    }
  };
  MessageQueue.prototype.l1v = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var tmp0_repeat = this.j1v_1;
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < tmp0_repeat)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.MessageQueue.process.<anonymous>' call
          var tmp0_elvis_lhs = this.x1j();
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_getInstance();
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.c1i();
        }
         while (inductionVariable < tmp0_repeat);
    }finally {
      if (this.c1k()) {
        this.k1v_1 = false;
      } else {
        this.n1v();
      }
    }
  };
  MessageQueue.$metadata$ = classMeta('MessageQueue', undefined, undefined, undefined, undefined, ArrayQueue.prototype);
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)).o6();
  }
  function ClearTimeout(handle) {
    CancelHandler.call(this);
    this.p1v_1 = handle;
  }
  ClearTimeout.prototype.i1g = function () {
    clearTimeout(this.p1v_1);
  };
  ClearTimeout.prototype.h1g = function (cause) {
    this.i1g();
  };
  ClearTimeout.prototype.invoke = function (cause) {
    return this.h1g(cause);
  };
  ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.p1v_1 + ']';
  };
  ClearTimeout.$metadata$ = classMeta('ClearTimeout', [DisposableHandle], undefined, undefined, undefined, CancelHandler.prototype);
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      var tmp$ret$0;
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      $continuation.e1g(this$0, Unit_getInstance());
      tmp$ret$0 = Unit_getInstance();
      return Unit_getInstance();
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.r1v_1 = window_0;
    this.s1v_1 = new WindowMessageQueue(this.r1v_1);
  }
  WindowDispatcher.prototype.d1j = function (context, block) {
    return this.s1v_1.o1v(block);
  };
  WindowDispatcher.prototype.o1j = function (timeMillis, continuation) {
    this.r1v_1.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  WindowDispatcher.$metadata$ = classMeta('WindowDispatcher', [Delay], undefined, undefined, undefined, CoroutineDispatcher.prototype);
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.y1v_1 ? event.data == this$0.z1v_1 : false) {
        event.stopPropagation();
        this$0.l1v();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.l1v();
      return Unit_getInstance();
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.y1v_1 = window_0;
    this.z1v_1 = 'dispatchCoroutine';
    this.y1v_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  WindowMessageQueue.prototype.m1v = function () {
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  WindowMessageQueue.prototype.n1v = function () {
    this.y1v_1.postMessage(this.z1v_1, '*');
  };
  WindowMessageQueue.$metadata$ = classMeta('WindowMessageQueue', undefined, undefined, undefined, undefined, MessageQueue.prototype);
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = classMeta('SchedulerTask', [Runnable]);
  function get_taskContext(_this__u8e3s4) {
    return Unit_getInstance();
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs = tmp$ret$0.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.also' call
      var tmp0_also = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.coroutines.asCoroutineDispatcher.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$1 = _this__u8e3s4;
      tmp$ret$1.coroutineDispatcher = tmp0_also;
      tmp$ret$2 = tmp0_also;
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function AbortFlowException(owner) {
    CancellationException_init_$Init$_0('Flow was aborted, no more elements needed', this);
    this.y1s_1 = owner;
    captureStack(this, AbortFlowException);
  }
  AbortFlowException.$metadata$ = classMeta('AbortFlowException', undefined, undefined, undefined, undefined, CancellationException.prototype);
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function NoOpLock() {
  }
  NoOpLock.$metadata$ = classMeta('NoOpLock');
  function withLock(_this__u8e3s4, action) {
    return action();
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.prototype.x1k = function () {
    throw UnsupportedOperationException_init_$Create$_0();
  };
  LinkedListHead.$metadata$ = classMeta('LinkedListHead', undefined, undefined, undefined, undefined, LinkedListNode.prototype);
  function LinkedListNode() {
    this.r1k_1 = this;
    this.s1k_1 = this;
    this.t1k_1 = false;
  }
  LinkedListNode.prototype.y1k = function () {
    return this.r1k_1;
  };
  LinkedListNode.prototype.z1k = function () {
    return this.r1k_1;
  };
  LinkedListNode.prototype.a1l = function () {
    return this.s1k_1;
  };
  LinkedListNode.prototype.b1l = function () {
    return this.t1k_1;
  };
  LinkedListNode.prototype.c1l = function (node) {
    var prev = this.s1k_1;
    node.r1k_1 = this;
    node.s1k_1 = prev;
    prev.r1k_1 = node;
    this.s1k_1 = node;
  };
  LinkedListNode.prototype.x1k = function () {
    return this.d1l();
  };
  LinkedListNode.prototype.d1l = function () {
    if (this.t1k_1)
      return false;
    var prev = this.s1k_1;
    var next = this.r1k_1;
    prev.r1k_1 = next;
    next.s1k_1 = prev;
    this.t1k_1 = true;
    return true;
  };
  LinkedListNode.prototype.n1l = function (node) {
    if (!(this.r1k_1 === this))
      return false;
    this.c1l(node);
    return true;
  };
  LinkedListNode.prototype.e1l = function (node, condition) {
    if (!condition())
      return false;
    this.c1l(node);
    return true;
  };
  LinkedListNode.prototype.f1l = function (node, predicate) {
    if (!predicate(this.s1k_1))
      return false;
    this.c1l(node);
    return true;
  };
  LinkedListNode.prototype.g1l = function (node, predicate, condition) {
    if (!predicate(this.s1k_1))
      return false;
    if (!condition())
      return false;
    this.c1l(node);
    return true;
  };
  LinkedListNode.prototype.h1l = function () {
  };
  LinkedListNode.$metadata$ = classMeta('LinkedListNode');
  function probeCoroutineCreated(completion) {
    return completion;
  }
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = interfaceMeta('CoroutineStackFrame');
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function synchronized(lock, block) {
    return block();
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.i1k_1 = null;
  }
  CommonThreadLocal.prototype.j1k = function () {
    var tmp = this.i1k_1;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.k1k = function (value) {
    this.i1k_1 = value;
  };
  CommonThreadLocal.$metadata$ = classMeta('CommonThreadLocal');
  //region block: post-declaration
  JobSupport.prototype.g1e = invokeOnCompletion$default;
  JobSupport.prototype.k1e = cancel$default;
  JobSupport.prototype.f4 = plus;
  JobSupport.prototype.y3 = get;
  JobSupport.prototype.e4 = fold;
  JobSupport.prototype.d4 = minusKey;
  AbstractCoroutine.prototype.g1e = invokeOnCompletion$default;
  AbstractCoroutine.prototype.k1e = cancel$default;
  AbstractCoroutine.prototype.f4 = plus;
  AbstractCoroutine.prototype.y3 = get;
  AbstractCoroutine.prototype.e4 = fold;
  AbstractCoroutine.prototype.d4 = minusKey;
  StandaloneCoroutine.prototype.g1e = invokeOnCompletion$default;
  StandaloneCoroutine.prototype.k1e = cancel$default;
  StandaloneCoroutine.prototype.f4 = plus;
  StandaloneCoroutine.prototype.y3 = get;
  StandaloneCoroutine.prototype.e4 = fold;
  StandaloneCoroutine.prototype.d4 = minusKey;
  LazyStandaloneCoroutine.prototype.g1e = invokeOnCompletion$default;
  LazyStandaloneCoroutine.prototype.k1e = cancel$default;
  LazyStandaloneCoroutine.prototype.f4 = plus;
  LazyStandaloneCoroutine.prototype.y3 = get;
  LazyStandaloneCoroutine.prototype.e4 = fold;
  LazyStandaloneCoroutine.prototype.d4 = minusKey;
  DeferredCoroutine.prototype.g1e = invokeOnCompletion$default;
  DeferredCoroutine.prototype.k1e = cancel$default;
  DeferredCoroutine.prototype.f4 = plus;
  DeferredCoroutine.prototype.y3 = get;
  DeferredCoroutine.prototype.e4 = fold;
  DeferredCoroutine.prototype.d4 = minusKey;
  LazyDeferredCoroutine.prototype.g1e = invokeOnCompletion$default;
  LazyDeferredCoroutine.prototype.k1e = cancel$default;
  LazyDeferredCoroutine.prototype.f4 = plus;
  LazyDeferredCoroutine.prototype.y3 = get;
  LazyDeferredCoroutine.prototype.e4 = fold;
  LazyDeferredCoroutine.prototype.d4 = minusKey;
  CancellableContinuationImpl.prototype.z1f = tryResume$default;
  CompletableDeferredImpl.prototype.g1e = invokeOnCompletion$default;
  CompletableDeferredImpl.prototype.k1e = cancel$default;
  CompletableDeferredImpl.prototype.f4 = plus;
  CompletableDeferredImpl.prototype.y3 = get;
  CompletableDeferredImpl.prototype.e4 = fold;
  CompletableDeferredImpl.prototype.d4 = minusKey;
  CoroutineDispatcher.prototype.y3 = get_0;
  CoroutineDispatcher.prototype.e4 = fold;
  CoroutineDispatcher.prototype.d4 = minusKey_0;
  CoroutineDispatcher.prototype.f4 = plus;
  _no_name_provided__qut3iv.prototype.y3 = get;
  _no_name_provided__qut3iv.prototype.e4 = fold;
  _no_name_provided__qut3iv.prototype.d4 = minusKey;
  _no_name_provided__qut3iv.prototype.f4 = plus;
  CoroutineName.prototype.y3 = get;
  CoroutineName.prototype.e4 = fold;
  CoroutineName.prototype.d4 = minusKey;
  CoroutineName.prototype.f4 = plus;
  EventLoop.prototype.f4 = plus;
  EventLoop.prototype.y3 = get_0;
  EventLoop.prototype.e4 = fold;
  EventLoop.prototype.d4 = minusKey_0;
  AwaitContinuation.prototype.z1f = tryResume$default;
  JobImpl.prototype.g1e = invokeOnCompletion$default;
  JobImpl.prototype.k1e = cancel$default;
  JobImpl.prototype.f4 = plus;
  JobImpl.prototype.y3 = get;
  JobImpl.prototype.e4 = fold;
  JobImpl.prototype.d4 = minusKey;
  MainCoroutineDispatcher.prototype.f4 = plus;
  MainCoroutineDispatcher.prototype.y3 = get_0;
  MainCoroutineDispatcher.prototype.e4 = fold;
  MainCoroutineDispatcher.prototype.d4 = minusKey_0;
  SupervisorJobImpl.prototype.g1e = invokeOnCompletion$default;
  SupervisorJobImpl.prototype.k1e = cancel$default;
  SupervisorJobImpl.prototype.f4 = plus;
  SupervisorJobImpl.prototype.y3 = get;
  SupervisorJobImpl.prototype.e4 = fold;
  SupervisorJobImpl.prototype.d4 = minusKey;
  Unconfined.prototype.f4 = plus;
  Unconfined.prototype.y3 = get_0;
  Unconfined.prototype.e4 = fold;
  Unconfined.prototype.d4 = minusKey_0;
  AbstractSendChannel.prototype.s1q = close$default;
  AbstractChannel.prototype.k1e = cancel$default_0;
  AbstractChannel.prototype.s1q = close$default;
  ArrayChannel.prototype.k1e = cancel$default_0;
  ArrayChannel.prototype.s1q = close$default;
  ConflatedChannel.prototype.k1e = cancel$default_0;
  ConflatedChannel.prototype.s1q = close$default;
  LinkedListChannel.prototype.k1e = cancel$default_0;
  LinkedListChannel.prototype.s1q = close$default;
  RendezvousChannel.prototype.k1e = cancel$default_0;
  RendezvousChannel.prototype.s1q = close$default;
  JsMainDispatcher.prototype.f4 = plus;
  JsMainDispatcher.prototype.y3 = get_0;
  JsMainDispatcher.prototype.e4 = fold;
  JsMainDispatcher.prototype.d4 = minusKey_0;
  UnconfinedEventLoop.prototype.f4 = plus;
  UnconfinedEventLoop.prototype.y3 = get_0;
  UnconfinedEventLoop.prototype.e4 = fold;
  UnconfinedEventLoop.prototype.d4 = minusKey_0;
  SetTimeoutBasedDispatcher.prototype.f4 = plus;
  SetTimeoutBasedDispatcher.prototype.y3 = get_0;
  SetTimeoutBasedDispatcher.prototype.e4 = fold;
  SetTimeoutBasedDispatcher.prototype.d4 = minusKey_0;
  NodeDispatcher.prototype.f4 = plus;
  NodeDispatcher.prototype.y3 = get_0;
  NodeDispatcher.prototype.e4 = fold;
  NodeDispatcher.prototype.d4 = minusKey_0;
  SetTimeoutDispatcher.prototype.f4 = plus;
  SetTimeoutDispatcher.prototype.y3 = get_0;
  SetTimeoutDispatcher.prototype.e4 = fold;
  SetTimeoutDispatcher.prototype.d4 = minusKey_0;
  WindowDispatcher.prototype.f4 = plus;
  WindowDispatcher.prototype.y3 = get_0;
  WindowDispatcher.prototype.e4 = fold;
  WindowDispatcher.prototype.d4 = minusKey_0;
  //endregion
  //region block: init
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  FALSE = 0;
  TRUE = 1;
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  MODE_CANCELLABLE = 1;
  MODE_UNINITIALIZED = -1;
  MODE_CANCELLABLE_REUSABLE = 2;
  MODE_UNDISPATCHED = 4;
  MODE_ATOMIC = 0;
  counter = 0;
  DEBUG = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = firstOrNull;
  _.$_$.b = delay;
  _.$_$.c = Channel$default;
  _.$_$.d = CompletableDeferred$default;
  _.$_$.e = cancel$default;
  _.$_$.f = invokeOnCompletion$default;
  _.$_$.g = Job$default;
  _.$_$.h = SupervisorJob$default;
  _.$_$.i = async$default;
  _.$_$.j = cancel$default_1;
  _.$_$.k = launch$default;
  _.$_$.l = _ChannelResult___get_isSuccess__impl__odq1z9;
  _.$_$.m = Factory_getInstance;
  _.$_$.n = Key_getInstance_0;
  _.$_$.o = Key_getInstance_1;
  _.$_$.p = Dispatchers_getInstance;
  _.$_$.q = GlobalScope_getInstance;
  _.$_$.r = Key_getInstance_3;
  _.$_$.s = cancelConsumed;
  _.$_$.t = FlowCollector;
  _.$_$.u = Flow;
  _.$_$.v = asFlow;
  _.$_$.w = LinkedListNode;
  _.$_$.x = recoverStackTrace;
  _.$_$.y = CancellableContinuationImpl;
  _.$_$.z = CloseableCoroutineDispatcher;
  _.$_$.a1 = CompletableJob;
  _.$_$.b1 = CoroutineExceptionHandler;
  _.$_$.c1 = CoroutineName;
  _.$_$.d1 = CoroutineScope_0;
  _.$_$.e1 = CoroutineScope;
  _.$_$.f1 = DisposableHandle;
  _.$_$.g1 = Job_0;
  _.$_$.h1 = Job;
  _.$_$.i1 = get_MODE_CANCELLABLE;
  _.$_$.j1 = MainScope;
  _.$_$.k1 = SupervisorJob;
  _.$_$.l1 = cancel;
  _.$_$.m1 = cancel_2;
  _.$_$.n1 = cancel_0;
  _.$_$.o1 = cancel_1;
  _.$_$.p1 = get_job;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js.map
