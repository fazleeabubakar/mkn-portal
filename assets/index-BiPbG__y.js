(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var $o={exports:{}},na={},Ho={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),cc=Symbol.for("react.provider"),dc=Symbol.for("react.context"),fc=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),Ll=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Ll&&e[Ll]||e["@@iterator"],typeof e=="function"?e:null)}var Wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qo=Object.assign,Yo={};function on(e,t,n){this.props=e,this.context=t,this.refs=Yo,this.updater=n||Wo}on.prototype.isReactComponent={};on.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};on.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Go(){}Go.prototype=on.prototype;function Oi(e,t,n){this.props=e,this.context=t,this.refs=Yo,this.updater=n||Wo}var Fi=Oi.prototype=new Go;Fi.constructor=Oi;Qo(Fi,on.prototype);Fi.isPureReactComponent=!0;var Al=Array.isArray,Xo=Object.prototype.hasOwnProperty,Vi={current:null},Zo={key:!0,ref:!0,__self:!0,__source:!0};function Jo(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Xo.call(t,r)&&!Zo.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Xn,type:e,key:i,ref:l,props:a,_owner:Vi.current}}function vc(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function yc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rl=/\/+/g;function wa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?yc(""+e.key):t.toString(36)}function kr(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xn:case lc:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+wa(l,0):r,Al(a)?(n="",e!=null&&(n=e.replace(Rl,"$&/")+"/"),kr(a,t,n,"",function(d){return d})):a!=null&&(Ui(a)&&(a=vc(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Rl,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Al(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+wa(i,s);l+=kr(i,t,n,u,a)}else if(u=hc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+wa(i,s++),l+=kr(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function rr(e,t,n){if(e==null)return e;var r=[],a=0;return kr(e,r,"","",function(i){return t.call(n,i,a++)}),r}function xc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},kc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Vi};function qo(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:rr,forEach:function(e,t,n){rr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return rr(e,function(){t++}),t},toArray:function(e){return rr(e,function(t){return t})||[]},only:function(e){if(!Ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=on;P.Fragment=oc;P.Profiler=uc;P.PureComponent=Oi;P.StrictMode=sc;P.Suspense=pc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;P.act=qo;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qo({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Vi.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Xo.call(t,u)&&!Zo.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Xn,type:e.type,key:a,ref:i,props:r,_owner:l}};P.createContext=function(e){return e={$$typeof:dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cc,_context:e},e.Consumer=e};P.createElement=Jo;P.createFactory=function(e){var t=Jo.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:fc,render:e}};P.isValidElement=Ui;P.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:xc}};P.memo=function(e,t){return{$$typeof:mc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};P.unstable_act=qo;P.useCallback=function(e,t){return ue.current.useCallback(e,t)};P.useContext=function(e){return ue.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};P.useEffect=function(e,t){return ue.current.useEffect(e,t)};P.useId=function(){return ue.current.useId()};P.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ue.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};P.useRef=function(e){return ue.current.useRef(e)};P.useState=function(e){return ue.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ue.current.useTransition()};P.version="18.3.1";Ho.exports=P;var R=Ho.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wc=R,Nc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),jc=Object.prototype.hasOwnProperty,Cc=wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,n){var r,a={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)jc.call(t,r)&&!Mc.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Nc,type:e,key:i,ref:l,props:a,_owner:Cc.current}}na.Fragment=Sc;na.jsx=es;na.jsxs=es;$o.exports=na;var o=$o.exports,ts={exports:{}},ke={},ns={exports:{}},rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,b){var E=C.length;C.push(b);e:for(;0<E;){var W=E-1>>>1,Z=C[W];if(0<a(Z,b))C[W]=b,C[E]=Z,E=W;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var b=C[0],E=C.pop();if(E!==b){C[0]=E;e:for(var W=0,Z=C.length,tr=Z>>>1;W<tr;){var yt=2*(W+1)-1,ka=C[yt],xt=yt+1,nr=C[xt];if(0>a(ka,E))xt<Z&&0>a(nr,ka)?(C[W]=nr,C[xt]=E,W=xt):(C[W]=ka,C[yt]=E,W=yt);else if(xt<Z&&0>a(nr,E))C[W]=nr,C[xt]=E,W=xt;else break e}}return b}function a(C,b){var E=C.sortIndex-b.sortIndex;return E!==0?E:C.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],h=1,g=null,m=3,w=!1,v=!1,k=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var b=n(d);b!==null;){if(b.callback===null)r(d);else if(b.startTime<=C)r(d),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(d)}}function y(C){if(k=!1,p(C),!v)if(n(u)!==null)v=!0,ya(N);else{var b=n(d);b!==null&&xa(y,b.startTime-C)}}function N(C,b){v=!1,k&&(k=!1,f(z),z=-1),w=!0;var E=m;try{for(p(b),g=n(u);g!==null&&(!(g.expirationTime>b)||C&&!be());){var W=g.callback;if(typeof W=="function"){g.callback=null,m=g.priorityLevel;var Z=W(g.expirationTime<=b);b=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(u)&&r(u),p(b)}else r(u);g=n(u)}if(g!==null)var tr=!0;else{var yt=n(d);yt!==null&&xa(y,yt.startTime-b),tr=!1}return tr}finally{g=null,m=E,w=!1}}var j=!1,M=null,z=-1,H=5,D=-1;function be(){return!(e.unstable_now()-D<H)}function cn(){if(M!==null){var C=e.unstable_now();D=C;var b=!0;try{b=M(!0,C)}finally{b?dn():(j=!1,M=null)}}else j=!1}var dn;if(typeof c=="function")dn=function(){c(cn)};else if(typeof MessageChannel<"u"){var _l=new MessageChannel,ic=_l.port2;_l.port1.onmessage=cn,dn=function(){ic.postMessage(null)}}else dn=function(){L(cn,0)};function ya(C){M=C,j||(j=!0,dn())}function xa(C,b){z=L(function(){C(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,ya(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var E=m;m=b;try{return C()}finally{m=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,b){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var E=m;m=C;try{return b()}finally{m=E}},e.unstable_scheduleCallback=function(C,b,E){var W=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?W+E:W):E=W,C){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=E+Z,C={id:h++,callback:b,priorityLevel:C,startTime:E,expirationTime:Z,sortIndex:-1},E>W?(C.sortIndex=E,t(d,C),n(u)===null&&C===n(d)&&(k?(f(z),z=-1):k=!0,xa(y,E-W))):(C.sortIndex=Z,t(u,C),v||w||(v=!0,ya(N))),C},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(C){var b=m;return function(){var E=m;m=b;try{return C.apply(this,arguments)}finally{m=E}}}})(rs);ns.exports=rs;var zc=ns.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bc=R,xe=zc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var as=new Set,_n={};function Tt(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(_n[e]=t,e=0;e<t.length;e++)as.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=Object.prototype.hasOwnProperty,Ec=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Il={},Kl={};function Pc(e){return Qa.call(Kl,e)?!0:Qa.call(Il,e)?!1:Ec.test(e)?Kl[e]=!0:(Il[e]=!0,!1)}function Dc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tc(e,t,n,r){if(t===null||typeof t>"u"||Dc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bi=/[\-:]([a-z])/g;function $i(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bi,$i);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bi,$i);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bi,$i);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,t,n,r){var a=ne.hasOwnProperty(t)?ne[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tc(t,n,a,r)&&(n=null),r||a===null?Pc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=bc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),At=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),Ya=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),ls=Symbol.for("react.context"),Qi=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),Ol=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Ol&&e[Ol]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Na;function kn(e){if(Na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Na=t&&t[1]||""}return`
`+Na+e}var Sa=!1;function ja(e,t){if(!e||Sa)return"";Sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Sa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function _c(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case At:return"Portal";case Ya:return"Profiler";case Wi:return"StrictMode";case Ga:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ls:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function Lc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ac(e){var t=ss(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Ac(e))}function us(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ss(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Fl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cs(e,t){t=t.checked,t!=null&&Hi(e,"checked",t,!1)}function qa(e,t){cs(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&ei(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ei(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ti(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ul(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(wn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function ds(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ln(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Rc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function ms(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function gs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=ms(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Ic=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,t){if(t){if(Ic[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function ai(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Yt=null,Gt=null;function $l(e){if(e=qn(e)){if(typeof li!="function")throw Error(x(280));var t=e.stateNode;t&&(t=oa(t),li(e.stateNode,e.type,t))}}function hs(e){Yt?Gt?Gt.push(e):Gt=[e]:Yt=e}function vs(){if(Yt){var e=Yt,t=Gt;if(Gt=Yt=null,$l(e),t)for(e=0;e<t.length;e++)$l(t[e])}}function ys(e,t){return e(t)}function xs(){}var Ca=!1;function ks(e,t,n){if(Ca)return e(t,n);Ca=!0;try{return ys(e,t,n)}finally{Ca=!1,(Yt!==null||Gt!==null)&&(xs(),vs())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var oi=!1;if(Qe)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){oi=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{oi=!1}function Kc(e,t,n,r,a,i,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var Cn=!1,_r=null,Lr=!1,si=null,Oc={onError:function(e){Cn=!0,_r=e}};function Fc(e,t,n,r,a,i,l,s,u){Cn=!1,_r=null,Kc.apply(Oc,arguments)}function Vc(e,t,n,r,a,i,l,s,u){if(Fc.apply(this,arguments),Cn){if(Cn){var d=_r;Cn=!1,_r=null}else throw Error(x(198));Lr||(Lr=!0,si=d)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ws(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hl(e){if(_t(e)!==e)throw Error(x(188))}function Uc(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Hl(a),e;if(i===r)return Hl(a),t;i=i.sibling}throw Error(x(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Ns(e){return e=Uc(e),e!==null?Ss(e):null}function Ss(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ss(e);if(t!==null)return t;e=e.sibling}return null}var js=xe.unstable_scheduleCallback,Wl=xe.unstable_cancelCallback,Bc=xe.unstable_shouldYield,$c=xe.unstable_requestPaint,Q=xe.unstable_now,Hc=xe.unstable_getCurrentPriorityLevel,Xi=xe.unstable_ImmediatePriority,Cs=xe.unstable_UserBlockingPriority,Ar=xe.unstable_NormalPriority,Wc=xe.unstable_LowPriority,Ms=xe.unstable_IdlePriority,ra=null,Oe=null;function Qc(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var _e=Math.clz32?Math.clz32:Xc,Yc=Math.log,Gc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Yc(e)/Gc|0)|0}var or=64,sr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~a;s!==0?r=Nn(s):(i&=l,i!==0&&(r=Nn(i)))}else l=n&~a,l!==0?r=Nn(l):i!==0&&(r=Nn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-_e(t),a=1<<n,r|=e[n],t&=~a;return r}function Zc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-_e(i),s=1<<l,u=a[l];u===-1?(!(s&n)||s&r)&&(a[l]=Zc(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zs(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Ma(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-_e(t),e[t]=n}function qc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-_e(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Zi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-_e(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var A=0;function bs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Es,Ji,Ps,Ds,Ts,ci=!1,ur=[],it=null,lt=null,ot=null,Rn=new Map,In=new Map,tt=[],ed="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function mn(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=qn(t),t!==null&&Ji(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function td(e,t,n,r,a){switch(t){case"focusin":return it=mn(it,e,t,n,r,a),!0;case"dragenter":return lt=mn(lt,e,t,n,r,a),!0;case"mouseover":return ot=mn(ot,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Rn.set(i,mn(Rn.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,In.set(i,mn(In.get(i)||null,e,t,n,r,a)),!0}return!1}function _s(e){var t=Nt(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=ws(n),t!==null){e.blockedOn=t,Ts(e.priority,function(){Ps(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ii=r,n.target.dispatchEvent(r),ii=null}else return t=qn(n),t!==null&&Ji(t),e.blockedOn=n,!1;t.shift()}return!0}function Yl(e,t,n){Nr(e)&&n.delete(t)}function nd(){ci=!1,it!==null&&Nr(it)&&(it=null),lt!==null&&Nr(lt)&&(lt=null),ot!==null&&Nr(ot)&&(ot=null),Rn.forEach(Yl),In.forEach(Yl)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,ci||(ci=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,nd)))}function Kn(e){function t(a){return gn(a,e)}if(0<ur.length){gn(ur[0],e);for(var n=1;n<ur.length;n++){var r=ur[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&gn(it,e),lt!==null&&gn(lt,e),ot!==null&&gn(ot,e),Rn.forEach(t),In.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)_s(n),n.blockedOn===null&&tt.shift()}var Xt=Ze.ReactCurrentBatchConfig,Ir=!0;function rd(e,t,n,r){var a=A,i=Xt.transition;Xt.transition=null;try{A=1,qi(e,t,n,r)}finally{A=a,Xt.transition=i}}function ad(e,t,n,r){var a=A,i=Xt.transition;Xt.transition=null;try{A=4,qi(e,t,n,r)}finally{A=a,Xt.transition=i}}function qi(e,t,n,r){if(Ir){var a=di(e,t,n,r);if(a===null)Ra(e,t,r,Kr,n),Ql(e,r);else if(td(a,e,t,n,r))r.stopPropagation();else if(Ql(e,r),t&4&&-1<ed.indexOf(e)){for(;a!==null;){var i=qn(a);if(i!==null&&Es(i),i=di(e,t,n,r),i===null&&Ra(e,t,r,Kr,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ra(e,t,r,null,n)}}var Kr=null;function di(e,t,n,r){if(Kr=null,e=Gi(r),e=Nt(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ws(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kr=e,null}function Ls(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case Xi:return 1;case Cs:return 4;case Ar:case Wc:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var rt=null,el=null,Sr=null;function As(){if(Sr)return Sr;var e,t=el,n=t.length,r,a="value"in rt?rt.value:rt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Sr=a.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Gl(){return!1}function we(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:Gl,this.isPropagationStopped=Gl,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=we(sn),Jn=B({},sn,{view:0,detail:0}),id=we(Jn),za,ba,hn,aa=B({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(za=e.screenX-hn.screenX,ba=e.screenY-hn.screenY):ba=za=0,hn=e),za)},movementY:function(e){return"movementY"in e?e.movementY:ba}}),Xl=we(aa),ld=B({},aa,{dataTransfer:0}),od=we(ld),sd=B({},Jn,{relatedTarget:0}),Ea=we(sd),ud=B({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),cd=we(ud),dd=B({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fd=we(dd),pd=B({},sn,{data:0}),Zl=we(pd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function nl(){return vd}var yd=B({},Jn,{key:function(e){if(e.key){var t=md[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nl,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xd=we(yd),kd=B({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=we(kd),wd=B({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nl}),Nd=we(wd),Sd=B({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jd=we(Sd),Cd=B({},aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=we(Cd),zd=[9,13,27,32],rl=Qe&&"CompositionEvent"in window,Mn=null;Qe&&"documentMode"in document&&(Mn=document.documentMode);var bd=Qe&&"TextEvent"in window&&!Mn,Rs=Qe&&(!rl||Mn&&8<Mn&&11>=Mn),ql=" ",eo=!1;function Is(e,t){switch(e){case"keyup":return zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var It=!1;function Ed(e,t){switch(e){case"compositionend":return Ks(t);case"keypress":return t.which!==32?null:(eo=!0,ql);case"textInput":return e=t.data,e===ql&&eo?null:e;default:return null}}function Pd(e,t){if(It)return e==="compositionend"||!rl&&Is(e,t)?(e=As(),Sr=el=rt=null,It=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rs&&t.locale!=="ko"?null:t.data;default:return null}}var Dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Dd[e.type]:t==="textarea"}function Os(e,t,n,r){hs(r),t=Or(t,"onChange"),0<t.length&&(n=new tl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,On=null;function Td(e){Xs(e,0)}function ia(e){var t=Ft(e);if(us(t))return e}function _d(e,t){if(e==="change")return t}var Fs=!1;if(Qe){var Pa;if(Qe){var Da="oninput"in document;if(!Da){var no=document.createElement("div");no.setAttribute("oninput","return;"),Da=typeof no.oninput=="function"}Pa=Da}else Pa=!1;Fs=Pa&&(!document.documentMode||9<document.documentMode)}function ro(){zn&&(zn.detachEvent("onpropertychange",Vs),On=zn=null)}function Vs(e){if(e.propertyName==="value"&&ia(On)){var t=[];Os(t,On,e,Gi(e)),ks(Td,t)}}function Ld(e,t,n){e==="focusin"?(ro(),zn=t,On=n,zn.attachEvent("onpropertychange",Vs)):e==="focusout"&&ro()}function Ad(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(On)}function Rd(e,t){if(e==="click")return ia(t)}function Id(e,t){if(e==="input"||e==="change")return ia(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:Kd;function Fn(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Qa.call(t,a)||!Ae(e[a],t[a]))return!1}return!0}function ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function io(e,t){var n=ao(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ao(n)}}function Us(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Us(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bs(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=Bs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Us(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=io(n,i);var l=io(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fd=Qe&&"documentMode"in document&&11>=document.documentMode,Kt=null,fi=null,bn=null,pi=!1;function lo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pi||Kt==null||Kt!==Tr(r)||(r=Kt,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Fn(bn,r)||(bn=r,r=Or(fi,"onSelect"),0<r.length&&(t=new tl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ot={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},Ta={},$s={};Qe&&($s=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function la(e){if(Ta[e])return Ta[e];if(!Ot[e])return e;var t=Ot[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $s)return Ta[e]=t[n];return e}var Hs=la("animationend"),Ws=la("animationiteration"),Qs=la("animationstart"),Ys=la("transitionend"),Gs=new Map,oo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){Gs.set(e,t),Tt(t,[e])}for(var _a=0;_a<oo.length;_a++){var La=oo[_a],Vd=La.toLowerCase(),Ud=La[0].toUpperCase()+La.slice(1);gt(Vd,"on"+Ud)}gt(Hs,"onAnimationEnd");gt(Ws,"onAnimationIteration");gt(Qs,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(Ys,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);Tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function so(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vc(r,t,void 0,e),e.currentTarget=null}function Xs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;so(a,s,d),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;so(a,s,d),i=u}}}if(Lr)throw e=si,Lr=!1,si=null,e}function K(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(Zs(t,e,2,!1),n.add(r))}function Aa(e,t,n){var r=0;t&&(r|=4),Zs(n,e,r,t)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[fr]){e[fr]=!0,as.forEach(function(n){n!=="selectionchange"&&(Bd.has(n)||Aa(n,!1,e),Aa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fr]||(t[fr]=!0,Aa("selectionchange",!1,t))}}function Zs(e,t,n,r){switch(Ls(t)){case 1:var a=rd;break;case 4:a=ad;break;default:a=qi}n=a.bind(null,t,n,e),a=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ra(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;s!==null;){if(l=Nt(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}ks(function(){var d=i,h=Gi(n),g=[];e:{var m=Gs.get(e);if(m!==void 0){var w=tl,v=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":w=xd;break;case"focusin":v="focus",w=Ea;break;case"focusout":v="blur",w=Ea;break;case"beforeblur":case"afterblur":w=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Nd;break;case Hs:case Ws:case Qs:w=cd;break;case Ys:w=jd;break;case"scroll":w=id;break;case"wheel":w=Md;break;case"copy":case"cut":case"paste":w=fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Jl}var k=(t&4)!==0,L=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=An(c,f),y!=null&&k.push(Un(c,y,p)))),L)break;c=c.return}0<k.length&&(m=new w(m,v,null,n,h),g.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==ii&&(v=n.relatedTarget||n.fromElement)&&(Nt(v)||v[Ye]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=d,v=v?Nt(v):null,v!==null&&(L=_t(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=d),w!==v)){if(k=Xl,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=Jl,y="onPointerLeave",f="onPointerEnter",c="pointer"),L=w==null?m:Ft(w),p=v==null?m:Ft(v),m=new k(y,c+"leave",w,n,h),m.target=L,m.relatedTarget=p,y=null,Nt(h)===d&&(k=new k(f,c+"enter",v,n,h),k.target=p,k.relatedTarget=L,y=k),L=y,w&&v)t:{for(k=w,f=v,c=0,p=k;p;p=Lt(p))c++;for(p=0,y=f;y;y=Lt(y))p++;for(;0<c-p;)k=Lt(k),c--;for(;0<p-c;)f=Lt(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=Lt(k),f=Lt(f)}k=null}else k=null;w!==null&&uo(g,m,w,k,!1),v!==null&&L!==null&&uo(g,L,v,k,!0)}}e:{if(m=d?Ft(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var N=_d;else if(to(m))if(Fs)N=Id;else{N=Ad;var j=Ld}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Rd);if(N&&(N=N(e,d))){Os(g,N,n,h);break e}j&&j(e,m,d),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&ei(m,"number",m.value)}switch(j=d?Ft(d):window,e){case"focusin":(to(j)||j.contentEditable==="true")&&(Kt=j,fi=d,bn=null);break;case"focusout":bn=fi=Kt=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,lo(g,n,h);break;case"selectionchange":if(Fd)break;case"keydown":case"keyup":lo(g,n,h)}var M;if(rl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else It?Is(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Rs&&n.locale!=="ko"&&(It||z!=="onCompositionStart"?z==="onCompositionEnd"&&It&&(M=As()):(rt=h,el="value"in rt?rt.value:rt.textContent,It=!0)),j=Or(d,z),0<j.length&&(z=new Zl(z,e,null,n,h),g.push({event:z,listeners:j}),M?z.data=M:(M=Ks(n),M!==null&&(z.data=M)))),(M=bd?Ed(e,n):Pd(e,n))&&(d=Or(d,"onBeforeInput"),0<d.length&&(h=new Zl("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=M))}Xs(g,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Or(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=An(e,n),i!=null&&r.unshift(Un(e,i,a)),i=An(e,t),i!=null&&r.push(Un(e,i,a))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uo(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,a?(u=An(n,i),u!=null&&l.unshift(Un(n,u,s))):a||(u=An(n,i),u!=null&&l.push(Un(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var $d=/\r\n?/g,Hd=/\u0000|\uFFFD/g;function co(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Hd,"")}function pr(e,t,n){if(t=co(t),co(e)!==t&&n)throw Error(x(425))}function Fr(){}var mi=null,gi=null;function hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Wd=typeof clearTimeout=="function"?clearTimeout:void 0,fo=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof fo<"u"?function(e){return fo.resolve(null).then(e).catch(Yd)}:vi;function Yd(e){setTimeout(function(){throw e})}function Ia(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Kn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function po(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Ke="__reactFiber$"+un,Bn="__reactProps$"+un,Ye="__reactContainer$"+un,yi="__reactEvents$"+un,Gd="__reactListeners$"+un,Xd="__reactHandles$"+un;function Nt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=po(e);e!==null;){if(n=e[Ke])return n;e=po(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[Ke]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function oa(e){return e[Bn]||null}var xi=[],Vt=-1;function ht(e){return{current:e}}function O(e){0>Vt||(e.current=xi[Vt],xi[Vt]=null,Vt--)}function I(e,t){Vt++,xi[Vt]=e.current,e.current=t}var mt={},le=ht(mt),pe=ht(!1),zt=mt;function en(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function me(e){return e=e.childContextTypes,e!=null}function Vr(){O(pe),O(le)}function mo(e,t,n){if(le.current!==mt)throw Error(x(168));I(le,t),I(pe,n)}function Js(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(x(108,Lc(e)||"Unknown",a));return B({},n,r)}function Ur(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,zt=le.current,I(le,e),I(pe,pe.current),!0}function go(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=Js(e,t,zt),r.__reactInternalMemoizedMergedChildContext=e,O(pe),O(le),I(le,e)):O(pe),I(pe,n)}var Be=null,sa=!1,Ka=!1;function qs(e){Be===null?Be=[e]:Be.push(e)}function Zd(e){sa=!0,qs(e)}function vt(){if(!Ka&&Be!==null){Ka=!0;var e=0,t=A;try{var n=Be;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,sa=!1}catch(a){throw Be!==null&&(Be=Be.slice(e+1)),js(Xi,vt),a}finally{A=t,Ka=!1}}return null}var Ut=[],Bt=0,Br=null,$r=0,Ne=[],Se=0,bt=null,$e=1,He="";function kt(e,t){Ut[Bt++]=$r,Ut[Bt++]=Br,Br=e,$r=t}function eu(e,t,n){Ne[Se++]=$e,Ne[Se++]=He,Ne[Se++]=bt,bt=e;var r=$e;e=He;var a=32-_e(r)-1;r&=~(1<<a),n+=1;var i=32-_e(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,$e=1<<32-_e(t)+a|n<<a|r,He=i+e}else $e=1<<i|n<<a|r,He=e}function il(e){e.return!==null&&(kt(e,1),eu(e,1,0))}function ll(e){for(;e===Br;)Br=Ut[--Bt],Ut[Bt]=null,$r=Ut[--Bt],Ut[Bt]=null;for(;e===bt;)bt=Ne[--Se],Ne[Se]=null,He=Ne[--Se],Ne[Se]=null,$e=Ne[--Se],Ne[Se]=null}var ye=null,ve=null,F=!1,Te=null;function tu(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ho(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bt!==null?{id:$e,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(F){var t=ve;if(t){var n=t;if(!ho(e,t)){if(ki(e))throw Error(x(418));t=st(n.nextSibling);var r=ye;t&&ho(e,t)?tu(r,n):(e.flags=e.flags&-4097|2,F=!1,ye=e)}}else{if(ki(e))throw Error(x(418));e.flags=e.flags&-4097|2,F=!1,ye=e}}}function vo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function mr(e){if(e!==ye)return!1;if(!F)return vo(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hi(e.type,e.memoizedProps)),t&&(t=ve)){if(ki(e))throw nu(),Error(x(418));for(;t;)tu(e,t),t=st(t.nextSibling)}if(vo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?st(e.stateNode.nextSibling):null;return!0}function nu(){for(var e=ve;e;)e=st(e.nextSibling)}function tn(){ve=ye=null,F=!1}function ol(e){Te===null?Te=[e]:Te.push(e)}var Jd=Ze.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function gr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){var t=e._init;return t(e._payload)}function ru(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function a(f,c){return f=ft(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,y){return c===null||c.tag!==6?(c=Ha(p,f.mode,y),c.return=f,c):(c=a(c,p),c.return=f,c)}function u(f,c,p,y){var N=p.type;return N===Rt?h(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&yo(N)===c.type)?(y=a(c,p.props),y.ref=vn(f,c,p),y.return=f,y):(y=Dr(p.type,p.key,p.props,null,f.mode,y),y.ref=vn(f,c,p),y.return=f,y)}function d(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Wa(p,f.mode,y),c.return=f,c):(c=a(c,p.children||[]),c.return=f,c)}function h(f,c,p,y,N){return c===null||c.tag!==7?(c=Mt(p,f.mode,y,N),c.return=f,c):(c=a(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ha(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ar:return p=Dr(c.type,c.key,c.props,null,f.mode,p),p.ref=vn(f,null,c),p.return=f,p;case At:return c=Wa(c,f.mode,p),c.return=f,c;case qe:var y=c._init;return g(f,y(c._payload),p)}if(wn(c)||fn(c))return c=Mt(c,f.mode,p,null),c.return=f,c;gr(f,c)}return null}function m(f,c,p,y){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:return p.key===N?u(f,c,p,y):null;case At:return p.key===N?d(f,c,p,y):null;case qe:return N=p._init,m(f,c,N(p._payload),y)}if(wn(p)||fn(p))return N!==null?null:h(f,c,p,y,null);gr(f,p)}return null}function w(f,c,p,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,s(c,f,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ar:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,N);case At:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,N);case qe:var j=y._init;return w(f,c,p,j(y._payload),N)}if(wn(y)||fn(y))return f=f.get(p)||null,h(c,f,y,N,null);gr(c,y)}return null}function v(f,c,p,y){for(var N=null,j=null,M=c,z=c=0,H=null;M!==null&&z<p.length;z++){M.index>z?(H=M,M=null):H=M.sibling;var D=m(f,M,p[z],y);if(D===null){M===null&&(M=H);break}e&&M&&D.alternate===null&&t(f,M),c=i(D,c,z),j===null?N=D:j.sibling=D,j=D,M=H}if(z===p.length)return n(f,M),F&&kt(f,z),N;if(M===null){for(;z<p.length;z++)M=g(f,p[z],y),M!==null&&(c=i(M,c,z),j===null?N=M:j.sibling=M,j=M);return F&&kt(f,z),N}for(M=r(f,M);z<p.length;z++)H=w(M,f,z,p[z],y),H!==null&&(e&&H.alternate!==null&&M.delete(H.key===null?z:H.key),c=i(H,c,z),j===null?N=H:j.sibling=H,j=H);return e&&M.forEach(function(be){return t(f,be)}),F&&kt(f,z),N}function k(f,c,p,y){var N=fn(p);if(typeof N!="function")throw Error(x(150));if(p=N.call(p),p==null)throw Error(x(151));for(var j=N=null,M=c,z=c=0,H=null,D=p.next();M!==null&&!D.done;z++,D=p.next()){M.index>z?(H=M,M=null):H=M.sibling;var be=m(f,M,D.value,y);if(be===null){M===null&&(M=H);break}e&&M&&be.alternate===null&&t(f,M),c=i(be,c,z),j===null?N=be:j.sibling=be,j=be,M=H}if(D.done)return n(f,M),F&&kt(f,z),N;if(M===null){for(;!D.done;z++,D=p.next())D=g(f,D.value,y),D!==null&&(c=i(D,c,z),j===null?N=D:j.sibling=D,j=D);return F&&kt(f,z),N}for(M=r(f,M);!D.done;z++,D=p.next())D=w(M,f,z,D.value,y),D!==null&&(e&&D.alternate!==null&&M.delete(D.key===null?z:D.key),c=i(D,c,z),j===null?N=D:j.sibling=D,j=D);return e&&M.forEach(function(cn){return t(f,cn)}),F&&kt(f,z),N}function L(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Rt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:e:{for(var N=p.key,j=c;j!==null;){if(j.key===N){if(N=p.type,N===Rt){if(j.tag===7){n(f,j.sibling),c=a(j,p.props.children),c.return=f,f=c;break e}}else if(j.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&yo(N)===j.type){n(f,j.sibling),c=a(j,p.props),c.ref=vn(f,j,p),c.return=f,f=c;break e}n(f,j);break}else t(f,j);j=j.sibling}p.type===Rt?(c=Mt(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Dr(p.type,p.key,p.props,null,f.mode,y),y.ref=vn(f,c,p),y.return=f,f=y)}return l(f);case At:e:{for(j=p.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=a(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Wa(p,f.mode,y),c.return=f,f=c}return l(f);case qe:return j=p._init,L(f,c,j(p._payload),y)}if(wn(p))return v(f,c,p,y);if(fn(p))return k(f,c,p,y);gr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=a(c,p),c.return=f,f=c):(n(f,c),c=Ha(p,f.mode,y),c.return=f,f=c),l(f)):n(f,c)}return L}var nn=ru(!0),au=ru(!1),Hr=ht(null),Wr=null,$t=null,sl=null;function ul(){sl=$t=Wr=null}function cl(e){var t=Hr.current;O(Hr),e._currentValue=t}function Ni(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zt(e,t){Wr=e,sl=$t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:t,next:null},$t===null){if(Wr===null)throw Error(x(308));$t=e,Wr.dependencies={lanes:0,firstContext:e}}else $t=$t.next=e;return t}var St=null;function dl(e){St===null?St=[e]:St.push(e)}function iu(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,dl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,_&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ge(e,n)}return a=r.interleaved,a===null?(t.next=t,dl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ge(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}function xo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qr(e,t,n,r){var a=e.updateQueue;et=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?i=d:l.next=d,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(i!==null){var g=a.baseState;l=0,h=d=u=null,s=i;do{var m=s.lane,w=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(m=t,w=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){g=v.call(w,g,m);break e}g=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,m=typeof v=="function"?v.call(w,g,m):v,m==null)break e;g=B({},g,m);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[s]:m.push(s))}else w={eventTime:w,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=w,u=g):h=h.next=w,l|=m;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(h===null&&(u=g),a.baseState=u,a.firstBaseUpdate=d,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Pt|=l,e.lanes=l,e.memoizedState=g}}function ko(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(x(191,a));a.call(r)}}}var er={},Fe=ht(er),$n=ht(er),Hn=ht(er);function jt(e){if(e===er)throw Error(x(174));return e}function pl(e,t){switch(I(Hn,t),I($n,e),I(Fe,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ni(t,e)}O(Fe),I(Fe,t)}function rn(){O(Fe),O($n),O(Hn)}function ou(e){jt(Hn.current);var t=jt(Fe.current),n=ni(t,e.type);t!==n&&(I($n,e),I(Fe,n))}function ml(e){$n.current===e&&(O(Fe),O($n))}var V=ht(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oa=[];function gl(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var Mr=Ze.ReactCurrentDispatcher,Fa=Ze.ReactCurrentBatchConfig,Et=0,U=null,G=null,J=null,Gr=!1,En=!1,Wn=0,qd=0;function re(){throw Error(x(321))}function hl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function vl(e,t,n,r,a,i){if(Et=i,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?rf:af,e=n(r,a),En){i=0;do{if(En=!1,Wn=0,25<=i)throw Error(x(301));i+=1,J=G=null,t.updateQueue=null,Mr.current=lf,e=n(r,a)}while(En)}if(Mr.current=Xr,t=G!==null&&G.next!==null,Et=0,J=G=U=null,Gr=!1,t)throw Error(x(300));return e}function yl(){var e=Wn!==0;return Wn=0,e}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?U.memoizedState=J=e:J=J.next=e,J}function ze(){if(G===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?U.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(x(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?U.memoizedState=J=e:J=J.next=e}return J}function Qn(e,t){return typeof t=="function"?t(e):t}function Va(e){var t=ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=G,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,u=null,d=i;do{var h=d.lane;if((Et&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,U.lanes|=h,Pt|=h}d=d.next}while(d!==null&&d!==i);u===null?l=r:u.next=s,Ae(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,U.lanes|=i,Pt|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ua(e){var t=ze(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);Ae(i,t.memoizedState)||(fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function su(){}function uu(e,t){var n=U,r=ze(),a=t(),i=!Ae(r.memoizedState,a);if(i&&(r.memoizedState=a,fe=!0),r=r.queue,xl(fu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Yn(9,du.bind(null,n,r,a,t),void 0,null),q===null)throw Error(x(349));Et&30||cu(n,t,a)}return a}function cu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function du(e,t,n,r){t.value=n,t.getSnapshot=r,pu(t)&&mu(e)}function fu(e,t,n){return n(function(){pu(t)&&mu(e)})}function pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function mu(e){var t=Ge(e,1);t!==null&&Le(t,e,1,-1)}function wo(e){var t=Ie();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=nf.bind(null,U,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gu(){return ze().memoizedState}function zr(e,t,n,r){var a=Ie();U.flags|=e,a.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function ua(e,t,n,r){var a=ze();r=r===void 0?null:r;var i=void 0;if(G!==null){var l=G.memoizedState;if(i=l.destroy,r!==null&&hl(r,l.deps)){a.memoizedState=Yn(t,n,i,r);return}}U.flags|=e,a.memoizedState=Yn(1|t,n,i,r)}function No(e,t){return zr(8390656,8,e,t)}function xl(e,t){return ua(2048,8,e,t)}function hu(e,t){return ua(4,2,e,t)}function vu(e,t){return ua(4,4,e,t)}function yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xu(e,t,n){return n=n!=null?n.concat([e]):null,ua(4,4,yu.bind(null,t,e),n)}function kl(){}function ku(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wu(e,t){var n=ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Nu(e,t,n){return Et&21?(Ae(n,t)||(n=zs(),U.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function ef(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Fa.transition;Fa.transition={};try{e(!1),t()}finally{A=n,Fa.transition=r}}function Su(){return ze().memoizedState}function tf(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ju(e))Cu(t,n);else if(n=iu(e,t,n,r),n!==null){var a=se();Le(n,e,r,a),Mu(n,t,r)}}function nf(e,t,n){var r=dt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ju(e))Cu(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.hasEagerState=!0,a.eagerState=s,Ae(s,l)){var u=t.interleaved;u===null?(a.next=a,dl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}finally{}n=iu(e,t,a,r),n!==null&&(a=se(),Le(n,e,r,a),Mu(n,t,r))}}function ju(e){var t=e.alternate;return e===U||t!==null&&t===U}function Cu(e,t){En=Gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zi(e,n)}}var Xr={readContext:Me,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},rf={readContext:Me,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:No,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Ie();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ie();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=tf.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:wo,useDebugValue:kl,useDeferredValue:function(e){return Ie().memoizedState=e},useTransition:function(){var e=wo(!1),t=e[0];return e=ef.bind(null,e[1]),Ie().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=U,a=Ie();if(F){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),q===null)throw Error(x(349));Et&30||cu(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,No(fu.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,du.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ie(),t=q.identifierPrefix;if(F){var n=He,r=$e;n=(r&~(1<<32-_e(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},af={readContext:Me,useCallback:ku,useContext:Me,useEffect:xl,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Va,useRef:gu,useState:function(){return Va(Qn)},useDebugValue:kl,useDeferredValue:function(e){var t=ze();return Nu(t,G.memoizedState,e)},useTransition:function(){var e=Va(Qn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:uu,useId:Su,unstable_isNewReconciler:!1},lf={readContext:Me,useCallback:ku,useContext:Me,useEffect:xl,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Ua,useRef:gu,useState:function(){return Ua(Qn)},useDebugValue:kl,useDeferredValue:function(e){var t=ze();return G===null?t.memoizedState=e:Nu(t,G.memoizedState,e)},useTransition:function(){var e=Ua(Qn)[0],t=ze().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:uu,useId:Su,unstable_isNewReconciler:!1};function Pe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ca={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),a=dt(e),i=We(r,a);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,a),t!==null&&(Le(t,e,a,r),Cr(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),a=dt(e),i=We(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,a),t!==null&&(Le(t,e,a,r),Cr(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=dt(e),a=We(n,r);a.tag=2,t!=null&&(a.callback=t),t=ut(e,a,r),t!==null&&(Le(t,e,r,n),Cr(t,e,r))}};function So(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Fn(n,r)||!Fn(a,i):!0}function zu(e,t,n){var r=!1,a=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Me(i):(a=me(t)?zt:le.current,r=t.contextTypes,i=(r=r!=null)?en(e,a):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ca,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function jo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ca.enqueueReplaceState(t,t.state,null)}function ji(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},fl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=Me(i):(i=me(t)?zt:le.current,a.context=en(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Si(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ca.enqueueReplaceState(a,a.state,null),Qr(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",r=t;do n+=_c(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ba(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ci(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var of=typeof WeakMap=="function"?WeakMap:Map;function bu(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jr||(Jr=!0,Ai=r),Ci(e,t)},n}function Eu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ci(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ci(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Co(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new of;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=wf.bind(null,e,t,n),t.then(e,e))}function Mo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function zo(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var sf=Ze.ReactCurrentOwner,fe=!1;function oe(e,t,n,r){t.child=e===null?au(t,null,n,r):nn(t,e.child,n,r)}function bo(e,t,n,r,a){n=n.render;var i=t.ref;return Zt(t,a),r=vl(e,t,n,r,i,a),n=yl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xe(e,t,a)):(F&&n&&il(t),t.flags|=1,oe(e,t,r,a),t.child)}function Eo(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!bl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Pu(e,t,i,r,a)):(e=Dr(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fn,n(l,r)&&e.ref===t.ref)return Xe(e,t,a)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Pu(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Fn(i,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,a)}return Mi(e,t,n,r,a)}function Du(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Wt,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Wt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(Wt,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(Wt,he),he|=r;return oe(e,t,a,n),t.child}function Tu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mi(e,t,n,r,a){var i=me(n)?zt:le.current;return i=en(t,i),Zt(t,a),n=vl(e,t,n,r,i,a),r=yl(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Xe(e,t,a)):(F&&r&&il(t),t.flags|=1,oe(e,t,n,a),t.child)}function Po(e,t,n,r,a){if(me(n)){var i=!0;Ur(t)}else i=!1;if(Zt(t,a),t.stateNode===null)br(e,t),zu(t,n,r),ji(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=me(n)?zt:le.current,d=en(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&jo(t,l,r,d),et=!1;var m=t.memoizedState;l.state=m,Qr(t,r,l,a),u=t.memoizedState,s!==r||m!==u||pe.current||et?(typeof h=="function"&&(Si(t,n,h,r),u=t.memoizedState),(s=et||So(t,n,s,r,m,u,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,lu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Pe(t.type,s),l.props=d,g=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=me(n)?zt:le.current,u=en(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==u)&&jo(t,l,r,u),et=!1,m=t.memoizedState,l.state=m,Qr(t,r,l,a);var v=t.memoizedState;s!==g||m!==v||pe.current||et?(typeof w=="function"&&(Si(t,n,w,r),v=t.memoizedState),(d=et||So(t,n,d,r,m,v,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return zi(e,t,n,r,i,a)}function zi(e,t,n,r,a,i){Tu(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&go(t,n,!1),Xe(e,t,i);r=t.stateNode,sf.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=nn(t,e.child,null,i),t.child=nn(t,null,s,i)):oe(e,t,s,i),t.memoizedState=r.state,a&&go(t,n,!0),t.child}function _u(e){var t=e.stateNode;t.pendingContext?mo(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mo(e,t.context,!1),pl(e,t.containerInfo)}function Do(e,t,n,r,a){return tn(),ol(a),t.flags|=256,oe(e,t,n,r),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function Ei(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var r=t.pendingProps,a=V.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),I(V,a&1),e===null)return wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=pa(l,r,0,null),e=Mt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ei(n),t.memoizedState=bi,e):wl(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return uf(e,t,l,r,s,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=ft(s,i):(i=Mt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ei(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=bi,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wl(e,t){return t=pa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&ol(r),nn(t,e.child,null,n),e=wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ba(Error(x(422))),hr(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=pa({mode:"visible",children:r.children},a,0,null),i=Mt(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&nn(t,e.child,null,l),t.child.memoizedState=Ei(l),t.memoizedState=bi,i);if(!(t.mode&1))return hr(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(x(419)),r=Ba(i,r,void 0),hr(e,t,l,r)}if(s=(l&e.childLanes)!==0,fe||s){if(r=q,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ge(e,a),Le(r,e,a,-1))}return zl(),r=Ba(Error(x(421))),hr(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Nf.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ve=st(a.nextSibling),ye=t,F=!0,Te=null,e!==null&&(Ne[Se++]=$e,Ne[Se++]=He,Ne[Se++]=bt,$e=e.id,He=e.overflow,bt=t),t=wl(t,r.children),t.flags|=4096,t)}function To(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ni(e.return,t,n)}function $a(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Au(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&To(e,n,t);else if(e.tag===19)To(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(V,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),$a(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Yr(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}$a(t,!0,n,null,i);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cf(e,t,n){switch(t.tag){case 3:_u(t),tn();break;case 5:ou(t);break;case 1:me(t.type)&&Ur(t);break;case 4:pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;I(Hr,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Lu(e,t,n):(I(V,V.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);I(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Au(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),I(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Du(e,t,n)}return Xe(e,t,n)}var Ru,Pi,Iu,Ku;Ru=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pi=function(){};Iu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,jt(Fe.current);var i=null;switch(n){case"input":a=Ja(e,a),r=Ja(e,r),i=[];break;case"select":a=B({},a,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":a=ti(e,a),r=ti(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}ri(n,r);var l;n=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(_n.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(_n.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&K("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function df(e,t,n){var r=t.pendingProps;switch(ll(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(t),null;case 1:return me(t.type)&&Vr(),ae(t),null;case 3:return r=t.stateNode,rn(),O(pe),O(le),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Ki(Te),Te=null))),Pi(e,t),ae(t),null;case 5:ml(t);var a=jt(Hn.current);if(n=t.type,e!==null&&t.stateNode!=null)Iu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ae(t),null}if(e=jt(Fe.current),mr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ke]=t,r[Bn]=i,e=(t.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(a=0;a<Sn.length;a++)K(Sn[a],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Fl(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":Ul(r,i),K("invalid",r)}ri(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),a=["children",""+s]):_n.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&K("scroll",r)}switch(n){case"input":ir(r),Vl(r,i,!0);break;case"textarea":ir(r),Bl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fr)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ke]=t,e[Bn]=r,Ru(e,t,!1,!1),t.stateNode=e;e:{switch(l=ai(n,r),n){case"dialog":K("cancel",e),K("close",e),a=r;break;case"iframe":case"object":case"embed":K("load",e),a=r;break;case"video":case"audio":for(a=0;a<Sn.length;a++)K(Sn[a],e);a=r;break;case"source":K("error",e),a=r;break;case"img":case"image":case"link":K("error",e),K("load",e),a=r;break;case"details":K("toggle",e),a=r;break;case"input":Fl(e,r),a=Ja(e,r),K("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=B({},r,{value:void 0}),K("invalid",e);break;case"textarea":Ul(e,r),a=ti(e,r),K("invalid",e);break;default:a=r}ri(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?gs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ps(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ln(e,u):typeof u=="number"&&Ln(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_n.hasOwnProperty(i)?u!=null&&i==="onScroll"&&K("scroll",e):u!=null&&Hi(e,i,u,l))}switch(n){case"input":ir(e),Vl(e,r,!1);break;case"textarea":ir(e),Bl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Fr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ae(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=jt(Hn.current),jt(Fe.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(i=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return ae(t),null;case 13:if(O(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&ve!==null&&t.mode&1&&!(t.flags&128))nu(),tn(),t.flags|=98560,i=!1;else if(i=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(x(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[Ke]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ae(t),i=!1}else Te!==null&&(Ki(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):zl())),t.updateQueue!==null&&(t.flags|=4),ae(t),null);case 4:return rn(),Pi(e,t),e===null&&Vn(t.stateNode.containerInfo),ae(t),null;case 10:return cl(t.type._context),ae(t),null;case 17:return me(t.type)&&Vr(),ae(t),null;case 19:if(O(V),i=t.memoizedState,i===null)return ae(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yn(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yr(e),l!==null){for(t.flags|=128,yn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(V,V.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>ln&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Yr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!F)return ae(t),null}else 2*Q()-i.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,r=!0,yn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=V.current,I(V,r?n&1|2:n&1),t):(ae(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(ae(t),t.subtreeFlags&6&&(t.flags|=8192)):ae(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function ff(e,t){switch(ll(t),t.tag){case 1:return me(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),O(pe),O(le),gl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ml(t),null;case 13:if(O(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(V),null;case 4:return rn(),null;case 10:return cl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var vr=!1,ie=!1,pf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Ht(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Di(e,t,n){try{n()}catch(r){$(e,t,r)}}var _o=!1;function mf(e,t){if(mi=Ir,e=Bs(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var w;g!==n||a!==0&&g.nodeType!==3||(s=l+a),g!==i||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(w=g.firstChild)!==null;)m=g,g=w;for(;;){if(g===e)break t;if(m===n&&++d===a&&(s=l),m===i&&++h===r&&(u=l),(w=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Ir=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,L=v.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Pe(t.type,k),L);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){$(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=_o,_o=!1,v}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Di(t,n,i)}a=a.next}while(a!==r)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ti(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ou(e){var t=e.alternate;t!==null&&(e.alternate=null,Ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[Bn],delete t[yi],delete t[Gd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _i(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(_i(e,t,n),e=e.sibling;e!==null;)_i(e,t,n),e=e.sibling}function Li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}var ee=null,De=!1;function Je(e,t,n){for(n=n.child;n!==null;)Vu(e,t,n),n=n.sibling}function Vu(e,t,n){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ra,n)}catch{}switch(n.tag){case 5:ie||Ht(n,t);case 6:var r=ee,a=De;ee=null,Je(e,t,n),ee=r,De=a,ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?Ia(e.parentNode,n):e.nodeType===1&&Ia(e,n),Kn(e)):Ia(ee,n.stateNode));break;case 4:r=ee,a=De,ee=n.stateNode.containerInfo,De=!0,Je(e,t,n),ee=r,De=a;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Di(n,t,l),a=a.next}while(a!==r)}Je(e,t,n);break;case 1:if(!ie&&(Ht(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){$(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function Ao(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pf),t.forEach(function(r){var a=Sf.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function Ee(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ee=s.stateNode,De=!1;break e;case 3:ee=s.stateNode.containerInfo,De=!0;break e;case 4:ee=s.stateNode.containerInfo,De=!0;break e}s=s.return}if(ee===null)throw Error(x(160));Vu(i,l,a),ee=null,De=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(d){$(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uu(t,e),t=t.sibling}function Uu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ee(t,e),Re(e),r&4){try{Pn(3,e,e.return),da(3,e)}catch(k){$(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){$(e,e.return,k)}}break;case 1:Ee(t,e),Re(e),r&512&&n!==null&&Ht(n,n.return);break;case 5:if(Ee(t,e),Re(e),r&512&&n!==null&&Ht(n,n.return),e.flags&32){var a=e.stateNode;try{Ln(a,"")}catch(k){$(e,e.return,k)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&cs(a,i),ai(s,l);var d=ai(s,i);for(l=0;l<u.length;l+=2){var h=u[l],g=u[l+1];h==="style"?gs(a,g):h==="dangerouslySetInnerHTML"?ps(a,g):h==="children"?Ln(a,g):Hi(a,h,g,d)}switch(s){case"input":qa(a,i);break;case"textarea":ds(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Qt(a,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Qt(a,!!i.multiple,i.defaultValue,!0):Qt(a,!!i.multiple,i.multiple?[]:"",!1))}a[Bn]=i}catch(k){$(e,e.return,k)}}break;case 6:if(Ee(t,e),Re(e),r&4){if(e.stateNode===null)throw Error(x(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(k){$(e,e.return,k)}}break;case 3:if(Ee(t,e),Re(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(k){$(e,e.return,k)}break;case 4:Ee(t,e),Re(e);break;case 13:Ee(t,e),Re(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(jl=Q())),r&4&&Ao(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||h,Ee(t,e),ie=d):Ee(t,e),Re(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(g=S=h;S!==null;){switch(m=S,w=m.child,m.tag){case 0:case 11:case 14:case 15:Pn(4,m,m.return);break;case 1:Ht(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){$(r,n,k)}}break;case 5:Ht(m,m.return);break;case 22:if(m.memoizedState!==null){Io(g);continue}}w!==null?(w.return=m,S=w):Io(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{a=g.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ms("display",l))}catch(k){$(e,e.return,k)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(k){$(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ee(t,e),Re(e),r&4&&Ao(e);break;case 21:break;default:Ee(t,e),Re(e)}}function Re(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ln(a,""),r.flags&=-33);var i=Lo(e);Li(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Lo(e);_i(e,s,l);break;default:throw Error(x(161))}}catch(u){$(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gf(e,t,n){S=e,Bu(e)}function Bu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var a=S,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||vr;if(!l){var s=a.alternate,u=s!==null&&s.memoizedState!==null||ie;s=vr;var d=ie;if(vr=l,(ie=u)&&!d)for(S=a;S!==null;)l=S,u=l.child,l.tag===22&&l.memoizedState!==null?Ko(a):u!==null?(u.return=l,S=u):Ko(a);for(;i!==null;)S=i,Bu(i),i=i.sibling;S=a,vr=s,ie=d}Ro(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,S=i):Ro(e)}}function Ro(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Pe(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ko(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ko(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Kn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}ie||t.flags&512&&Ti(t)}catch(m){$(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Io(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ko(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(u){$(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){$(t,a,u)}}var i=t.return;try{Ti(t)}catch(u){$(t,i,u)}break;case 5:var l=t.return;try{Ti(t)}catch(u){$(t,l,u)}}}catch(u){$(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var hf=Math.ceil,Zr=Ze.ReactCurrentDispatcher,Nl=Ze.ReactCurrentOwner,Ce=Ze.ReactCurrentBatchConfig,_=0,q=null,Y=null,te=0,he=0,Wt=ht(0),X=0,Gn=null,Pt=0,fa=0,Sl=0,Dn=null,de=null,jl=0,ln=1/0,Ue=null,Jr=!1,Ai=null,ct=null,yr=!1,at=null,qr=0,Tn=0,Ri=null,Er=-1,Pr=0;function se(){return _&6?Q():Er!==-1?Er:Er=Q()}function dt(e){return e.mode&1?_&2&&te!==0?te&-te:Jd.transition!==null?(Pr===0&&(Pr=zs()),Pr):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ls(e.type)),e):1}function Le(e,t,n,r){if(50<Tn)throw Tn=0,Ri=null,Error(x(185));Zn(e,n,r),(!(_&2)||e!==q)&&(e===q&&(!(_&2)&&(fa|=n),X===4&&nt(e,te)),ge(e,r),n===1&&_===0&&!(t.mode&1)&&(ln=Q()+500,sa&&vt()))}function ge(e,t){var n=e.callbackNode;Jc(e,t);var r=Rr(e,e===q?te:0);if(r===0)n!==null&&Wl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wl(n),t===1)e.tag===0?Zd(Oo.bind(null,e)):qs(Oo.bind(null,e)),Qd(function(){!(_&6)&&vt()}),n=null;else{switch(bs(r)){case 1:n=Xi;break;case 4:n=Cs;break;case 16:n=Ar;break;case 536870912:n=Ms;break;default:n=Ar}n=Zu(n,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $u(e,t){if(Er=-1,Pr=0,_&6)throw Error(x(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var r=Rr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ea(e,r);else{t=r;var a=_;_|=2;var i=Wu();(q!==e||te!==t)&&(Ue=null,ln=Q()+500,Ct(e,t));do try{xf();break}catch(s){Hu(e,s)}while(!0);ul(),Zr.current=i,_=a,Y!==null?t=0:(q=null,te=0,t=X)}if(t!==0){if(t===2&&(a=ui(e),a!==0&&(r=a,t=Ii(e,a))),t===1)throw n=Gn,Ct(e,0),nt(e,r),ge(e,Q()),n;if(t===6)nt(e,r);else{if(a=e.current.alternate,!(r&30)&&!vf(a)&&(t=ea(e,r),t===2&&(i=ui(e),i!==0&&(r=i,t=Ii(e,i))),t===1))throw n=Gn,Ct(e,0),nt(e,r),ge(e,Q()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:wt(e,de,Ue);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=jl+500-Q(),10<t)){if(Rr(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=vi(wt.bind(null,e,de,Ue),t);break}wt(e,de,Ue);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-_e(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=vi(wt.bind(null,e,de,Ue),r);break}wt(e,de,Ue);break;case 5:wt(e,de,Ue);break;default:throw Error(x(329))}}}return ge(e,Q()),e.callbackNode===n?$u.bind(null,e):null}function Ii(e,t){var n=Dn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=ea(e,t),e!==2&&(t=de,de=n,t!==null&&Ki(t)),e}function Ki(e){de===null?de=e:de.push.apply(de,e)}function vf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Ae(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Sl,t&=~fa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-_e(t),r=1<<n;e[n]=-1,t&=~r}}function Oo(e){if(_&6)throw Error(x(327));Jt();var t=Rr(e,0);if(!(t&1))return ge(e,Q()),null;var n=ea(e,t);if(e.tag!==0&&n===2){var r=ui(e);r!==0&&(t=r,n=Ii(e,r))}if(n===1)throw n=Gn,Ct(e,0),nt(e,t),ge(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,de,Ue),ge(e,Q()),null}function Cl(e,t){var n=_;_|=1;try{return e(t)}finally{_=n,_===0&&(ln=Q()+500,sa&&vt())}}function Dt(e){at!==null&&at.tag===0&&!(_&6)&&Jt();var t=_;_|=1;var n=Ce.transition,r=A;try{if(Ce.transition=null,A=1,e)return e()}finally{A=r,Ce.transition=n,_=t,!(_&6)&&vt()}}function Ml(){he=Wt.current,O(Wt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:rn(),O(pe),O(le),gl();break;case 5:ml(r);break;case 4:rn();break;case 13:O(V);break;case 19:O(V);break;case 10:cl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(q=e,Y=e=ft(e.current,null),te=he=t,X=0,Gn=null,Sl=fa=Pt=0,de=Dn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}St=null}return e}function Hu(e,t){do{var n=Y;try{if(ul(),Mr.current=Xr,Gr){for(var r=U.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Gr=!1}if(Et=0,J=G=U=null,En=!1,Wn=0,Nl.current=null,n===null||n.return===null){X=1,Gn=t,Y=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=te,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Mo(l);if(w!==null){w.flags&=-257,zo(w,l,s,i,t),w.mode&1&&Co(i,d,t),t=w,u=d;var v=t.updateQueue;if(v===null){var k=new Set;k.add(u),t.updateQueue=k}else v.add(u);break e}else{if(!(t&1)){Co(i,d,t),zl();break e}u=Error(x(426))}}else if(F&&s.mode&1){var L=Mo(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),zo(L,l,s,i,t),ol(an(u,s));break e}}i=u=an(u,s),X!==4&&(X=2),Dn===null?Dn=[i]:Dn.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=bu(i,u,t);xo(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Eu(i,s,t);xo(i,y);break e}}i=i.return}while(i!==null)}Yu(n)}catch(N){t=N,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Wu(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function zl(){(X===0||X===3||X===2)&&(X=4),q===null||!(Pt&268435455)&&!(fa&268435455)||nt(q,te)}function ea(e,t){var n=_;_|=2;var r=Wu();(q!==e||te!==t)&&(Ue=null,Ct(e,t));do try{yf();break}catch(a){Hu(e,a)}while(!0);if(ul(),_=n,Zr.current=r,Y!==null)throw Error(x(261));return q=null,te=0,X}function yf(){for(;Y!==null;)Qu(Y)}function xf(){for(;Y!==null&&!Bc();)Qu(Y)}function Qu(e){var t=Xu(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?Yu(e):Y=t,Nl.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ff(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=df(n,t,he),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function wt(e,t,n){var r=A,a=Ce.transition;try{Ce.transition=null,A=1,kf(e,t,n,r)}finally{Ce.transition=a,A=r}return null}function kf(e,t,n,r){do Jt();while(at!==null);if(_&6)throw Error(x(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(qc(e,i),e===q&&(Y=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yr||(yr=!0,Zu(Ar,function(){return Jt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var l=A;A=1;var s=_;_|=4,Nl.current=null,mf(e,n),Uu(n,e),Od(gi),Ir=!!mi,gi=mi=null,e.current=n,gf(n),$c(),_=s,A=l,Ce.transition=i}else e.current=n;if(yr&&(yr=!1,at=e,qr=a),i=e.pendingLanes,i===0&&(ct=null),Qc(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Jr)throw Jr=!1,e=Ai,Ai=null,e;return qr&1&&e.tag!==0&&Jt(),i=e.pendingLanes,i&1?e===Ri?Tn++:(Tn=0,Ri=e):Tn=0,vt(),null}function Jt(){if(at!==null){var e=bs(qr),t=Ce.transition,n=A;try{if(Ce.transition=null,A=16>e?16:e,at===null)var r=!1;else{if(e=at,at=null,qr=0,_&6)throw Error(x(331));var a=_;for(_|=4,S=e.current;S!==null;){var i=S,l=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:Pn(8,h,i)}var g=h.child;if(g!==null)g.return=h,S=g;else for(;S!==null;){h=S;var m=h.sibling,w=h.return;if(Ou(h),h===d){S=null;break}if(m!==null){m.return=w,S=m;break}S=w}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var L=k.sibling;k.sibling=null,k=L}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,S=l;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){l=S;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,S=p;else e:for(l=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:da(9,s)}}catch(N){$(s,s.return,N)}if(s===l){S=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,S=y;break e}S=s.return}}if(_=a,vt(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{A=n,Ce.transition=t}}return!1}function Fo(e,t,n){t=an(n,t),t=bu(e,t,1),e=ut(e,t,1),t=se(),e!==null&&(Zn(e,1,t),ge(e,t))}function $(e,t,n){if(e.tag===3)Fo(e,e,n);else for(;t!==null;){if(t.tag===3){Fo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=an(n,e),e=Eu(t,e,1),t=ut(t,e,1),e=se(),t!==null&&(Zn(t,1,e),ge(t,e));break}}t=t.return}}function wf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-jl?Ct(e,0):Sl|=n),ge(e,t)}function Gu(e,t){t===0&&(e.mode&1?(t=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):t=1);var n=se();e=Ge(e,t),e!==null&&(Zn(e,t,n),ge(e,n))}function Nf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gu(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),Gu(e,n)}var Xu;Xu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,cf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,F&&t.flags&1048576&&eu(t,$r,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var a=en(t,le.current);Zt(t,n),a=vl(null,t,r,e,a,n);var i=yl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(i=!0,Ur(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,fl(t),a.updater=ca,t.stateNode=a,a._reactInternals=t,ji(t,r,e,n),t=zi(null,t,r,!0,i,n)):(t.tag=0,F&&i&&il(t),oe(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Cf(r),e=Pe(r,e),a){case 0:t=Mi(null,t,r,e,n);break e;case 1:t=Po(null,t,r,e,n);break e;case 11:t=bo(null,t,r,e,n);break e;case 14:t=Eo(null,t,r,Pe(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Mi(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),Po(e,t,r,a,n);case 3:e:{if(_u(t),e===null)throw Error(x(387));r=t.pendingProps,i=t.memoizedState,a=i.element,lu(e,t),Qr(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=an(Error(x(423)),t),t=Do(e,t,r,n,a);break e}else if(r!==a){a=an(Error(x(424)),t),t=Do(e,t,r,n,a);break e}else for(ve=st(t.stateNode.containerInfo.firstChild),ye=t,F=!0,Te=null,n=au(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===a){t=Xe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return ou(t),e===null&&wi(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,hi(r,a)?l=null:i!==null&&hi(r,i)&&(t.flags|=32),Tu(e,t),oe(e,t,l,n),t.child;case 6:return e===null&&wi(t),null;case 13:return Lu(e,t,n);case 4:return pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),bo(e,t,r,a,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,I(Hr,r._currentValue),r._currentValue=l,i!==null)if(Ae(i.value,l)){if(i.children===a.children&&!pe.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ni(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(x(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ni(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}oe(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Zt(t,n),a=Me(a),r=r(a),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,a=Pe(r,t.pendingProps),a=Pe(r.type,a),Eo(e,t,r,a,n);case 15:return Pu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Pe(r,a),br(e,t),t.tag=1,me(r)?(e=!0,Ur(t)):e=!1,Zt(t,n),zu(t,r,a),ji(t,r,a,n),zi(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return Du(e,t,n)}throw Error(x(156,t.tag))};function Zu(e,t){return js(e,t)}function jf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new jf(e,t,n,r)}function bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cf(e){if(typeof e=="function")return bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qi)return 11;if(e===Yi)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")bl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Rt:return Mt(n.children,a,i,t);case Wi:l=8,a|=8;break;case Ya:return e=je(12,n,t,a|2),e.elementType=Ya,e.lanes=i,e;case Ga:return e=je(13,n,t,a),e.elementType=Ga,e.lanes=i,e;case Xa:return e=je(19,n,t,a),e.elementType=Xa,e.lanes=i,e;case os:return pa(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:l=10;break e;case ls:l=9;break e;case Qi:l=11;break e;case Yi:l=14;break e;case qe:l=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=je(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Mt(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function pa(e,t,n,r){return e=je(22,e,r,t),e.elementType=os,e.lanes=n,e.stateNode={isHidden:!1},e}function Ha(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Wa(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ma(0),this.expirationTimes=Ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ma(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function El(e,t,n,r,a,i,l,s,u){return e=new Mf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=je(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(i),e}function zf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ju(e){if(!e)return mt;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(me(n))return Js(e,n,t)}return t}function qu(e,t,n,r,a,i,l,s,u){return e=El(n,r,!0,e,a,i,l,s,u),e.context=Ju(null),n=e.current,r=se(),a=dt(n),i=We(r,a),i.callback=t??null,ut(n,i,a),e.current.lanes=a,Zn(e,a,r),ge(e,r),e}function ma(e,t,n,r){var a=t.current,i=se(),l=dt(a);return n=Ju(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(a,t,l),e!==null&&(Le(e,a,l,i),Cr(e,a,l)),l}function ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pl(e,t){Vo(e,t),(e=e.alternate)&&Vo(e,t)}function bf(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dl(e){this._internalRoot=e}ga.prototype.render=Dl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));ma(e,t,null,null)};ga.prototype.unmount=Dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){ma(null,e,null,null)}),t[Ye]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ds();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&_s(e)}};function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uo(){}function Ef(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var d=ta(l);i.call(d)}}var l=qu(t,r,e,0,null,!1,!1,"",Uo);return e._reactRootContainer=l,e[Ye]=l.current,Vn(e.nodeType===8?e.parentNode:e),Dt(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var d=ta(u);s.call(d)}}var u=El(e,0,!1,null,null,!1,!1,"",Uo);return e._reactRootContainer=u,e[Ye]=u.current,Vn(e.nodeType===8?e.parentNode:e),Dt(function(){ma(t,u,n,r)}),u}function va(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var u=ta(l);s.call(u)}}ma(t,l,e,a)}else l=Ef(n,t,e,a,r);return ta(l)}Es=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(Zi(t,n|1),ge(t,Q()),!(_&6)&&(ln=Q()+500,vt()))}break;case 13:Dt(function(){var r=Ge(e,1);if(r!==null){var a=se();Le(r,e,1,a)}}),Pl(e,1)}};Ji=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=se();Le(t,e,134217728,n)}Pl(e,134217728)}};Ps=function(e){if(e.tag===13){var t=dt(e),n=Ge(e,t);if(n!==null){var r=se();Le(n,e,t,r)}Pl(e,t)}};Ds=function(){return A};Ts=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};li=function(e,t,n){switch(t){case"input":if(qa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=oa(r);if(!a)throw Error(x(90));us(r),qa(r,a)}}}break;case"textarea":ds(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};ys=Cl;xs=Dt;var Pf={usingClientEntryPoint:!1,Events:[qn,Ft,oa,hs,vs,Cl]},xn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Df={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||bf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{ra=xr.inject(Df),Oe=xr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tl(t))throw Error(x(200));return zf(e,t,null,n)};ke.createRoot=function(e,t){if(!Tl(e))throw Error(x(299));var n=!1,r="",a=ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=El(e,1,!1,null,null,n,!1,r,a),e[Ye]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Dl(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ns(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Dt(e)};ke.hydrate=function(e,t,n){if(!ha(t))throw Error(x(200));return va(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Tl(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=ec;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=qu(t,null,e,1,n??null,a,!1,i,l),e[Ye]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ga(t)};ke.render=function(e,t,n){if(!ha(t))throw Error(x(200));return va(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!ha(e))throw Error(x(40));return e._reactRootContainer?(Dt(function(){va(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};ke.unstable_batchedUpdates=Cl;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ha(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return va(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ts.exports=ke;var Tf=ts.exports,nc,Bo=Tf;nc=Bo.createRoot,Bo.hydrateRoot;const _f={ui:{officialPortal:"An official portal of the Malaysian Government",accessibility:"Accessibility",sitemap:"Sitemap",faq:"FAQ",contactUs:"Contact Us",logoSubtitle:"National Security Council · Malaysia",emergencyContact:"Emergency Contact",scrollExplore:"Scroll to explore",corporateInfo:"Corporate Information",corporateInfoSubtitle:"Learn about the Majlis Keselamatan Negara — our mandate, history, and commitment to safeguarding Malaysia's national security.",keyFacts:"Key Facts",ourVision:"Our Vision",ourMission:"Our Mission",coreValues:"Core Values",keyLeadership:"Key Leadership",leadershipSubtitle:"The distinguished leadership guiding Malaysia's national security agenda.",tier:"Tier",involvement:"MKN Involvement",involvementSubtitle:"From disaster management to cybersecurity — discover how MKN safeguards Malaysia across six critical domains of national security.",keyAchievements:"Key Achievements",impactInNumbers:"Impact in Numbers",statisticsSubtitle:"Measuring our commitment to national security through tangible results and outcomes.",newsAnnouncements:"News & Announcements",newsSubtitle:"Stay updated with the latest developments, operations, and initiatives from the National Security Council.",readFullArticle:"Read Full Article",readMore:"Read more",viewAllAnnouncements:"View All Announcements",servicesTitle:"Quick Access & Services",servicesSubtitle:"Access essential MKN services, report emergencies, and find resources for disaster preparedness and national security.",crimeDataTitle:"Crime Statistics by District",crimeDataSubtitle:"Statistical data on reported crime cases across Malaysian districts, compiled for public awareness and security planning.",crimeDataLoading:"Loading crime data...",crimeDataError:"Failed to load crime data. Please try again later.",crimeDataEmpty:"No crime data available at this time.",crimeDataDistricts:"Districts",crimeDataTotalCases:"Total Cases",crimeDataResolvedCases:"Resolved Cases",crimeDataResolutionRate:"Resolution Rate",crimeDataCases:"cases",crimeDataType:"Crime Type",crimeDataTotal:"Total",crimeDataResolved:"Resolved",crimeDataPending:"Pending",crimeDataRate:"Rate",emergencyContacts:"Emergency Contacts",emergencyContactsSubtitle:"24/7 national security & disaster response hotlines",aboutMKN:"About MKN",ourServices:"Our Services",resources:"Resources",government:"Government",followUs:"Follow us:",subscribeToUpdates:"Subscribe to MKN updates",enterEmail:"Enter your email address",subscribe:"Subscribe",copyright:"© 2026 Majlis Keselamatan Negara. All Rights Reserved.",privacyPolicy:"Privacy Policy",termsOfUse:"Terms of Use",disclaimer:"Disclaimer",cookiePolicy:"Cookie Policy",lastUpdated:"Last Updated: 19 June 2026"},navItems:[{label:"Home",href:"#home"},{label:"Corporate Info",href:"#corporate"},{label:"MKN Involvement",href:"#involvement"},{label:"News & Announcements",href:"#news"},{label:"Crime Data",href:"#crime-data"},{label:"Statistics",href:"#statistics"},{label:"Services",href:"#services"},{label:"Contact",href:"#contact"}],heroContent:{badge:"Portal Rasmi · Official Portal",title:"Majlis Keselamatan Negara",subtitle:"National Security Council of Malaysia",description:"Safeguarding the nation through strategic security policies, disaster management coordination, and crisis response — ensuring a resilient and secure Malaysia for all.",primaryAction:"Explore Corporate Info",secondaryAction:"View MKN Involvement",stats:[{value:"1971",label:"Established"},{value:"14",label:"States Coordinated"},{value:"500+",label:"Crisis Operations"},{value:"24/7",label:"Operations Centre"}]},aboutInfo:{heading:"About MKN",intro:"The Majlis Keselamatan Negara (National Security Council) is a premier government agency under the Prime Minister's Department, entrusted with formulating policies and strategies related to national security. Established in 1971, MKN serves as the central coordinating body for all matters concerning the sovereignty, territorial integrity, and public safety of Malaysia.",body:["MKN operates as the principal advisory body to the Government of Malaysia on national security matters. The Council is chaired by the Prime Minister and comprises key Cabinet ministers, the Chief Secretary to the Government, and the heads of the Armed Forces and Royal Malaysia Police.","The Council's mandate spans across disaster management, border security, counter-terrorism, cybersecurity, food security, and public order. MKN also oversees the National Disaster Management Agency (NADMA) and coordinates the National Security Council Directive No. 20 — the cornerstone policy for disaster management in Malaysia.","Through its 24/7 National Security Council Operations Centre (PKTN), MKN provides round-the-clock situational awareness, early warning, and crisis coordination across all 14 states and federal territories."],keyFacts:[{label:"Established",value:"1971"},{label:"Ministry",value:"Prime Minister's Department"},{label:"Chairman",value:"The Prime Minister of Malaysia"},{label:"Headquarters",value:"Putrajaya, Malaysia"},{label:"Director General",value:"YM Raja Dato' Nushirwan bin Zainal Abidin"},{label:"Core Directive",value:"MKN Directive No. 20"}]},visionMission:{vision:"To be the leading national security agency that ensures a sovereign, resilient, and prosperous Malaysia through strategic foresight, effective coordination, and unwavering commitment to public safety.",mission:"To formulate, coordinate, and implement national security policies and strategies that safeguard Malaysia's sovereignty, territorial integrity, and public well-being through whole-of-government and whole-of-society approaches.",values:[{title:"Integrity",description:"Upholding the highest standards of honesty, transparency, and accountability in all security operations.",icon:"shield"},{title:"Excellence",description:"Delivering world-class security governance through professionalism, innovation, and continuous improvement.",icon:"star"},{title:"Resilience",description:"Building national capacity to withstand and recover from all forms of threats and disasters.",icon:"fortress"},{title:"Collaboration",description:"Fostering partnerships across government, industry, and society for comprehensive national security.",icon:"people"}]},orgStructure:{heading:"Organisation Structure",description:"MKN operates under a structured hierarchy led by the National Security Council, ensuring effective governance and coordination across all national security functions.",levels:[{tier:"Council",title:"National Security Council",desc:"Chaired by the Prime Minister, comprising Cabinet ministers, Chief Secretary, and heads of security agencies.",members:["Prime Minister (Chairman)","Deputy Prime Minister","Minister of Defence","Minister of Home Affairs","Minister of Foreign Affairs","Chief Secretary to the Government","Chief of Defence Force","Inspector-General of Police"]},{tier:"Executive",title:"Director General Office",desc:"Leads the operational arm of MKN, implementing Council decisions and overseeing daily operations.",members:["Director General of MKN","Deputy Director General (Policy)","Deputy Director General (Operations)"]},{tier:"Divisions",title:"Operational Divisions",desc:"Specialised divisions managing distinct domains of national security and disaster management.",members:["Policy & Strategic Planning Division","Operations & Crisis Management Division","Disaster Management Division (NADMA)","Border Security & Immigration Division","Counter-Terrorism & Extremism Division","Cybersecurity & Digital Threat Division","Strategic Communications Division","Administration & Finance Division"]}]},leadership:[{name:"YAB Dato' Seri Anwar bin Ibrahim",position:"Chairman, National Security Council",role:"Prime Minister of Malaysia",initials:"AI",color:"#0d2240"},{name:"YAB Dato' Seri Dr. Ahmad Zahid bin Hamidi",position:"Deputy Chairman",role:"Deputy Prime Minister",initials:"ZH",color:"#142d4c"},{name:"Tan Sri Shamsul Azri bin Abu Bakar",position:"Council Member",role:"Chief Secretary to the Government",initials:"SA",color:"#1a3a5c"},{name:"YM Raja Dato' Nushirwan bin Zainal Abidin",position:"Director General of MKN",role:"Chief Executive Officer",initials:"RN",color:"#c5a253"}],involvementAreas:[{id:"disaster",title:"Disaster Management",icon:"disaster",image:"inv-disaster.png",summary:"Coordinating Malaysia's response to natural disasters through MKN Directive No. 20 — from floods and landslides to earthquakes and haze.",highlights:["Activated 361 flood relief operations during the 2024-2025 monsoon season","Deployed 12,000+ personnel across affected states via integrated command","Managed evacuations for 150,000+ citizens at peak flood emergency","Coordinated post-disaster recovery and infrastructure rebuilding"],tag:"NADMA",color:"#1d4ed8"},{id:"security",title:"National Security Policy",icon:"shield",image:"inv-security.png",summary:"Formulating comprehensive national security strategies encompassing defence, border integrity, sovereignty, and strategic deterrence.",highlights:["Developed the National Security Policy (DAKN) 2021-2025 framework","Coordinated border security across 4,800+ km of land and maritime borders","Strengthened sovereignty in Sabah, Sarawak, and ESSZone operations","Advanced Malaysia's position in ASEAN regional security cooperation"],tag:"DAKN",color:"#0d2240"},{id:"counter-terrorism",title:"Counter-Terrorism",icon:"target",image:"inv-counter-terrorism.png",summary:"Leading whole-of-government efforts to prevent, detect, and respond to terrorism and violent extremism threats.",highlights:["Implemented the National Action Plan for Preventing & Countering Violent Extremism (PCVE)","Conducted 200+ deradicalisation programmes reaching 15,000+ at-risk individuals","Maintained zero successful major terrorist attack on Malaysian soil since 2018","Strengthened intelligence sharing through 47 bilateral partnerships"],tag:"PCVE",color:"#b91c1c"},{id:"cybersecurity",title:"Cybersecurity",icon:"cyber",image:"inv-cybersecurity.png",summary:"Safeguarding Malaysia's digital infrastructure and critical national information infrastructure (CNII) from evolving cyber threats.",highlights:["Protected 412 Critical National Information Infrastructure entities","Responded to 8,500+ cybersecurity incidents via MyCERT coordination","Launched the National Cyber Security Strategy 2025-2030","Facilitated cross-sector cyber drill exercises involving 80+ agencies"],tag:"CNII",color:"#6d28d9"},{id:"crisis",title:"Crisis & Emergency Response",icon:"alert",image:"inv-crisis.png",summary:"Operating a 24/7 National Security Council Operations Centre (PKTN) for real-time situational awareness and crisis coordination.",highlights:["Maintained round-the-clock operations through PKTN since 2003","Coordinated COVID-19 pandemic response across 18 months of MCO phases","Managed 50+ major crisis events including airline incidents and civil unrest","Established integrated early warning systems with 14 state-level operations centres"],tag:"PKTN",color:"#c2410c"},{id:"public-safety",title:"Public Safety & Awareness",icon:"community",image:"inv-public-safety.png",summary:"Empowering communities through public safety education, national resilience programmes, and citizen preparedness initiatives.",highlights:["Reached 2.3 million citizens through the National Resilience Programme","Conducted 1,200+ community preparedness workshops nationwide",'Launched the "Selamatkan Negara" public safety awareness campaign',"Trained 8,500+ community first responders in disaster preparedness"],tag:"Program Resilience",color:"#15803d"}],newsItems:[{category:"Disaster Management",date:"15 June 2026",title:"MKN Activates Level II Operations for Southwest Monsoon Preparedness",excerpt:"The National Security Council has activated Level II disaster operations across 8 flood-prone states ahead of the Southwest Monsoon season, deploying advance teams and pre-positioning relief supplies.",tag:"Active",tagColor:"#dc2626"},{category:"Cybersecurity",date:"10 June 2026",title:"Malaysia Launches National Cyber Security Strategy 2025-2030",excerpt:"MKN unveiled a comprehensive five-year cyber security strategy aimed at protecting Critical National Information Infrastructure and building national cyber resilience capabilities.",tag:"New",tagColor:"#6d28d9"},{category:"Counter-Terrorism",date:"5 June 2026",title:"Regional PCVE Workshop Strengthens ASEAN Cooperation",excerpt:"MKN hosted representatives from 10 ASEAN member states for a three-day workshop on preventing and countering violent extremism, sharing best practices and intelligence frameworks.",tag:"Update",tagColor:"#1d4ed8"},{category:"Public Safety",date:"1 June 2026",title:"National Resilience Programme Reaches 2.3 Million Citizens",excerpt:"The flagship community empowerment initiative has now reached over 2.3 million Malaysians, strengthening grassroots preparedness and disaster awareness across all states.",tag:"Milestone",tagColor:"#15803d"},{category:"Border Security",date:"28 May 2026",title:"Enhanced Maritime Patrol Operations in ESSZone",excerpt:"MKN coordinated a joint multi-agency maritime security operation in the Eastern Sabah Security Zone, deploying naval and air assets to safeguard sovereign waters.",tag:"Operation",tagColor:"#c2410c"},{category:"Policy",date:"20 May 2026",title:"MKN Council Approves Updated National Security Policy Framework",excerpt:"The National Security Council, chaired by the Prime Minister, approved the updated DAKN framework incorporating emerging threats including climate security and AI governance.",tag:"Approved",tagColor:"#0d2240"}],statistics:[{value:1971,label:"Year Established",suffix:"",icon:"calendar"},{value:361,label:"Disaster Operations (2024-2025)",suffix:"+",icon:"disaster"},{value:150,label:"Citizens Evacuated (Peak)",suffix:"K+",icon:"people"},{value:412,label:"CNII Entities Protected",suffix:"",icon:"cyber"},{value:8500,label:"Cyber Incidents Responded",suffix:"+",icon:"alert"},{value:2.3,label:"Citizens Reached (Resilience)",suffix:"M",icon:"community"},{value:47,label:"Bilateral Partnerships",suffix:"",icon:"globe"},{value:1200,label:"Community Workshops",suffix:"+",icon:"community"}],services:[{title:"Disaster Reporting",description:"Report disasters and emergencies through the integrated national reporting system.",icon:"alert",action:"File a Report"},{title:"MKN Directive No. 20",description:"Access the official guidelines for disaster management and relief operations.",icon:"document",action:"View Directive"},{title:"Public Safety Resources",description:"Download preparedness guides, emergency contacts, and safety handbooks.",icon:"document",action:"Browse Resources"},{title:"National Resilience Programme",description:"Register your community for disaster preparedness training and workshops.",icon:"community",action:"Register Now"},{title:"Cyber Security Portal",description:"Report cyber incidents and access cybersecurity advisories and alerts.",icon:"cyber",action:"Access Portal"},{title:"Tender & Procurement",description:"View current MKN tender notices, procurement opportunities, and vendor registration.",icon:"document",action:"View Tenders"}],footerLinks:{about:["About MKN","Vision & Mission","Organisation Structure","Leadership","History"],services:["Disaster Management","National Security Policy","Counter-Terrorism","Cybersecurity","Crisis Response"],resources:["MKN Directive No. 20","Publications & Reports","Media Centre","FAQ","Tender & Procurement"],government:["Prime Minister's Department","Government of Malaysia","Public Service Portal","eKL Portal","Malaysia.gov.my"]},emergencyContacts:[{name:"MKN Operations Centre (PKTN)",phone:"03-8888 4000",hours:"24/7"},{name:"NADMA Disaster Hotline",phone:"03-8064 2400",hours:"24/7"},{name:"General Emergency",phone:"999",hours:"24/7"},{name:"Cyber Security (MyCERT)",phone:"1-300-88-2999",hours:"24/7"}]},Lf={ui:{officialPortal:"Portal rasmi Kerajaan Malaysia",accessibility:"Kebolehcapaian",sitemap:"Peta Laman",faq:"FAQ",contactUs:"Hubungi Kami",logoSubtitle:"Majlis Keselamatan Negara · Malaysia",emergencyContact:"Hubungan Kecemasan",scrollExplore:"Tatal untuk terokai",corporateInfo:"Maklumat Korporat",corporateInfoSubtitle:"Ketahui tentang Majlis Keselamatan Negara — mandat, sejarah, dan komitmen kami dalam menjaga keselamatan negara Malaysia.",keyFacts:"Fakta Utama",ourVision:"Wawasan Kami",ourMission:"Misi Kami",coreValues:"Nilai Teras",keyLeadership:"Kepimpinan Utama",leadershipSubtitle:"Kepimpinan terbilang yang memandu agenda keselamatan negara Malaysia.",tier:"Tahap",involvement:"Penglibatan MKN",involvementSubtitle:"Daripada pengurusan bencana hingga keselamatan siber — ketahui bagaimana MKN menjaga Malaysia merentangi enam domain kritikal keselamatan negara.",keyAchievements:"Pencapaian Utama",impactInNumbers:"Impak dalam Angka",statisticsSubtitle:"Mengukur komitmen kami terhadap keselamatan negara melalui keputusan dan hasil yang ketara.",newsAnnouncements:"Berita & Pengumuman",newsSubtitle:"Kekal dikemaskini dengan perkembangan terkini, operasi, dan inisiatif daripada Majlis Keselamatan Negara.",readFullArticle:"Baca Artikel Penuh",readMore:"Baca lagi",viewAllAnnouncements:"Lihat Semua Pengumuman",servicesTitle:"Akses Pantas & Perkhidmatan",servicesSubtitle:"Akses perkhidmatan MKN yang penting, laporkan kecemasan, dan dapatkan sumber untuk kesediaan bencana dan keselamatan negara.",crimeDataTitle:"Statistik Jenayah Mengikut Daerah",crimeDataSubtitle:"Data statistik kes jenayah yang dilaporkan merentas daerah di Malaysia, disusun untuk kesedaran awam dan perancangan keselamatan.",crimeDataLoading:"Memuatkan data jenayah...",crimeDataError:"Gagal memuatkan data jenayah. Sila cuba lagi kemudian.",crimeDataEmpty:"Tiada data jenayah tersedia pada masa ini.",crimeDataDistricts:"Daerah",crimeDataTotalCases:"Jumlah Kes",crimeDataResolvedCases:"Kes Selesai",crimeDataResolutionRate:"Kadar Penyelesaian",crimeDataCases:"kes",crimeDataType:"Jenis Jenayah",crimeDataTotal:"Jumlah",crimeDataResolved:"Selesai",crimeDataPending:"Belum Selesai",crimeDataRate:"Kadar",emergencyContacts:"Hubungan Kecemasan",emergencyContactsSubtitle:"Talian hotline keselamatan negara & respons bencana 24/7",aboutMKN:"Tentang MKN",ourServices:"Perkhidmatan Kami",resources:"Sumber",government:"Kerajaan",followUs:"Ikuti kami:",subscribeToUpdates:"Langgan kemas kini MKN",enterEmail:"Masukkan alamat e-mel anda",subscribe:"Langgan",copyright:"© 2026 Majlis Keselamatan Negara. Hak Cipta Terpelihara.",privacyPolicy:"Dasar Privasi",termsOfUse:"Terma Penggunaan",disclaimer:"Penafian",cookiePolicy:"Dasar Kuki",lastUpdated:"Kemas Kini Terakhir: 19 Jun 2026"},navItems:[{label:"Utama",href:"#home"},{label:"Maklumat Korporat",href:"#corporate"},{label:"Penglibatan MKN",href:"#involvement"},{label:"Berita & Pengumuman",href:"#news"},{label:"Data Jenayah",href:"#crime-data"},{label:"Statistik",href:"#statistics"},{label:"Perkhidmatan",href:"#services"},{label:"Hubungi",href:"#contact"}],heroContent:{badge:"Portal Rasmi · Official Portal",title:"Majlis Keselamatan Negara",subtitle:"Majlis Keselamatan Negara Malaysia",description:"Melindungi negara melalui dasar keselamatan strategik, penyelarasan pengurusan bencana, dan respons krisis — memastikan Malaysia yang teguh dan selamat untuk semua.",primaryAction:"Terokai Maklumat Korporat",secondaryAction:"Lihat Penglibatan MKN",stats:[{value:"1971",label:"Ditubuhkan"},{value:"14",label:"Negeri Diselaraskan"},{value:"500+",label:"Operasi Krisis"},{value:"24/7",label:"Pusat Operasi"}]},aboutInfo:{heading:"Tentang MKN",intro:"Majlis Keselamatan Negara ialah agensi kerajaan utama di bawah Jabatan Perdana Menteri yang dipertanggungjawabkan untuk merangka dasar dan strategi berkaitan keselamatan negara. Ditubuhkan pada 1971, MKN berfungsi sebagai badan penyelarasan pusat untuk semua perkara berkaitan kedaulatan, integriti wilayah, dan keselamatan awam Malaysia.",body:["MKN beroperasi sebagai badan penasihat utama kepada Kerajaan Malaysia dalam hal ehwal keselamatan negara. Majlis ini dipengerusikan oleh Perdana Menteri dan terdiri daripada menteri Kabinet utama, Ketua Setiausaha Negara, serta ketua-ketua Angkatan Tentera dan Polis Diraja Malaysia.","Mandat Majlis merangkumi pengurusan bencana, keselamatan sempadan, antipengganas, keselamatan siber, keselamatan makanan, dan ketenteraman awam. MKN juga mengawasi Agensi Pengurusan Bencana Negara (NADMA) dan menyelaraskan Arahan Majlis Keselamatan Negara No. 20 — dasar asas pengurusan bencana di Malaysia.","Melalui Pusat Operasi Majlis Keselamatan Negara (PKTN) yang beroperasi 24/7, MKN menyediakan kesedaran situasi sepanjang masa, amaran awal, dan penyelarasan krisis merentangi kesemua 14 negeri dan wilayah persekutuan."],keyFacts:[{label:"Ditubuhkan",value:"1971"},{label:"Kementerian",value:"Jabatan Perdana Menteri"},{label:"Pengerusi",value:"Perdana Menteri Malaysia"},{label:"Ibu Pejabat",value:"Putrajaya, Malaysia"},{label:"Ketua Pengarah",value:"YM Raja Dato' Nushirwan bin Zainal Abidin"},{label:"Arahan Teras",value:"Arahan MKN No. 20"}]},visionMission:{vision:"Menjadi agensi keselamatan negara terkemuka yang memastikan Malaysia yang berdaulat, teguh, dan makmur melalui pandangan strategik, penyelarasan berkesan, dan komitmen teguh terhadap keselamatan awam.",mission:"Merangka, menyelaraskan, dan melaksanakan dasar serta strategi keselamatan negara yang menjaga kedaulatan, integriti wilayah, dan kesejahteraan awam Malaysia melalui pendekatan seluruh kerajaan dan seluruh masyarakat.",values:[{title:"Integriti",description:"Menjunjung standard tertinggi kejujuran, ketelusan, dan akauntabiliti dalam semua operasi keselamatan.",icon:"shield"},{title:"Kecemerlangan",description:"Menyampaikan tadbir urus keselamatan bertaraf dunia melalui profesionalisme, inovasi, dan penambahbaikan berterusan.",icon:"star"},{title:"Ketahanan",description:"Membina kapasiti negara untuk menahan dan pulih daripada semua bentuk ancaman dan bencana.",icon:"fortress"},{title:"Kerjasama",description:"Membina perkongsian merentasi kerajaan, industri, dan masyarakat untuk keselamatan negara yang menyeluruh.",icon:"people"}]},orgStructure:{heading:"Struktur Organisasi",description:"MKN beroperasi di bawah hierarki berstruktur yang dipimpin oleh Majlis Keselamatan Negara, memastikan tadbir urus dan penyelarasan berkesan merentangi semua fungsi keselamatan negara.",levels:[{tier:"Majlis",title:"Majlis Keselamatan Negara",desc:"Dipengerusikan oleh Perdana Menteri, terdiri daripada menteri Kabinet, Ketua Setiausaha, dan ketua agensi keselamatan.",members:["Perdana Menteri (Pengerusi)","Timbalan Perdana Menteri","Menteri Pertahanan","Menteri Dalam Negeri","Menteri Luar Negeri","Ketua Setiausaha Negara","Panglima Angkatan Tentera","Ketua Polis Negara"]},{tier:"Eksekutif",title:"Pejabat Ketua Pengarah",desc:"Memimpin lengan operasi MKN, melaksanakan keputusan Majlis dan menyelia operasi harian.",members:["Ketua Pengarah MKN","Timbalan Ketua Pengarah (Dasar)","Timbalan Ketua Pengarah (Operasi)"]},{tier:"Bahagian",title:"Bahagian Operasi",desc:"Bahagian khusus yang menguruskan domain berbeza keselamatan negara dan pengurusan bencana.",members:["Bahagian Dasar & Perancangan Strategik","Bahagian Operasi & Pengurusan Krisis","Bahagian Pengurusan Bencana (NADMA)","Bahagian Keselamatan Sempadan & Imigresen","Bahagian Antipengganas & Ekstremisme","Bahagian Keselamatan Siber & Ancaman Digital","Bahagian Komunikasi Strategik","Bahagian Pentadbiran & Kewangan"]}]},leadership:[{name:"YAB Dato' Seri Anwar bin Ibrahim",position:"Pengerusi, Majlis Keselamatan Negara",role:"Perdana Menteri Malaysia",initials:"AI",color:"#0d2240"},{name:"YAB Dato' Seri Dr. Ahmad Zahid bin Hamidi",position:"Timbalan Pengerusi",role:"Timbalan Perdana Menteri",initials:"ZH",color:"#142d4c"},{name:"Tan Sri Shamsul Azri bin Abu Bakar",position:"Ahli Majlis",role:"Ketua Setiausaha Negara",initials:"SA",color:"#1a3a5c"},{name:"YM Raja Dato' Nushirwan bin Zainal Abidin",position:"Ketua Pengarah MKN",role:"Ketua Pegawai Eksekutif",initials:"RN",color:"#c5a253"}],involvementAreas:[{id:"disaster",title:"Pengurusan Bencana",icon:"disaster",image:"inv-disaster.png",summary:"Menyelaraskan respons Malaysia terhadap bencana alam melalui Arahan MKN No. 20 — daripada banjir dan tanah runtuh hingga gempa bumi dan jerebu.",highlights:["Mengaktifkan 361 operasi bantuan banjir semasa musim monsun 2024-2025","Melancarkan 12,000+ personel merentangi negeri terjejas melalui arahan bersepadu","Menguruskan pemindahan 150,000+ warga semasa kemuncak kecemasan banjir","Menyelaraskan pemulihan selepas bencana dan pembinaan semula infrastruktur"],tag:"NADMA",color:"#1d4ed8"},{id:"security",title:"Dasar Keselamatan Negara",icon:"shield",image:"inv-security.png",summary:"Merangka strategi keselamatan negara yang menyeluruh merangkumi pertahanan, integriti sempadan, kedaulatan, dan pemencilan strategik.",highlights:["Membangunkan rangka Dasar Keselamatan Negara (DAKN) 2021-2025","Menyelaraskan keselamatan sempadan sepanjang 4,800+ km sempadan darat dan maritim","Menguatkan kedaulatan di Sabah, Sarawak, dan operasi ESSZone","Memajukan kedudukan Malaysia dalam kerjasama keselamatan serantau ASEAN"],tag:"DAKN",color:"#0d2240"},{id:"counter-terrorism",title:"Antipengganas",icon:"target",image:"inv-counter-terrorism.png",summary:"Memimpin usaha seluruh kerajaan untuk mencegah, mengesan, dan memberi respons terhadap keganasan serta ancaman ekstremisme ganas.",highlights:["Melaksanakan Pelan Tindakan Kebangsaan untuk Mencegah & Menentang Ekstremisme Ganas (PCVE)","Menjalankan 200+ program deradikalisasi mencapai 15,000+ individu berisiko","Mengekalkan sifar serangan pengganas besar yang berjaya di tanahair sejak 2018","Menguatkan perkongsian perisikan melalui 47 perkongsian dua hala"],tag:"PCVE",color:"#b91c1c"},{id:"cybersecurity",title:"Keselamatan Siber",icon:"cyber",image:"inv-cybersecurity.png",summary:"Melindungi infrastruktur digital Malaysia dan infrastruktur maklumat kebangsaan kritikal (CNII) daripada ancaman siber yang sentiasa berkembang.",highlights:["Melindungi 412 entiti Infrastruktur Maklumat Kebangsaan Kritikal","Memberi respons kepada 8,500+ insiden keselamatan siber melalui penyelarasan MyCERT","Melancarkan Strategi Keselamatan Siber Kebangsaan 2025-2030","Memudahkan latihan siber merentas sektor melibatkan 80+ agensi"],tag:"CNII",color:"#6d28d9"},{id:"crisis",title:"Respons Krisis & Kecemasan",icon:"alert",image:"inv-crisis.png",summary:"Mengoperasikan Pusat Operasi Majlis Keselamatan Negara (PKTN) 24/7 untuk kesedaran situasi masa nyata dan penyelarasan krisis.",highlights:["Mengekalkan operasi sepanjang masa melalui PKTN sejak 2003","Menyelaraskan respons pandemik COVID-19 sepanjang 18 bulan fasa PKP","Menguruskan 50+ peristiwa krisis utama termasuk insiden penerbangan dan kerusuhan awam","Menubuhkan sistem amaran awal bersepadu dengan 14 pusat operasi peringkat negeri"],tag:"PKTN",color:"#c2410c"},{id:"public-safety",title:"Keselamatan Awam & Kesedaran",icon:"community",image:"inv-public-safety.png",summary:"Memperkasakan komuniti melalui pendidikan keselamatan awam, program ketahanan negara, dan inisiatif kesediaan warganegara.",highlights:["Mencapai 2.3 juta warga melalui Program Ketahanan Negara","Menjalankan 1,200+ bengkel kesediaan komuniti di seluruh negara",'Melancarkan kempen kesedaran keselamatan awam "Selamatkan Negara"',"Melatih 8,500+ respons pertama komuniti dalam kesediaan bencana"],tag:"Program Resilience",color:"#15803d"}],newsItems:[{category:"Pengurusan Bencana",date:"15 Jun 2026",title:"MKN Aktifkan Operasi Tahap II untuk Kesediaan Monsun Barat Daya",excerpt:"Majlis Keselamatan Negara telah mengaktifkan operasi bencana Tahap II merentangi 8 negeri prone banjir menjelang musim Monsun Barat Daya, melancarkan pasukan awal dan meletakkan bekalan bantuan.",tag:"Aktif",tagColor:"#dc2626"},{category:"Keselamatan Siber",date:"10 Jun 2026",title:"Malaysia Lancarkan Strategi Keselamatan Siber Kebangsaan 2025-2030",excerpt:"MKN memperkenalkan strategi keselamatan siber lima tahun yang menyeluruh bertujuan melindungi Infrastruktur Maklumat Kebangsaan Kritikal dan membina kapasiti ketahanan siber negara.",tag:"Baharu",tagColor:"#6d28d9"},{category:"Antipengganas",date:"5 Jun 2026",title:"Bengkel PCVE Serantau Menguatkan Kerjasama ASEAN",excerpt:"MKN mengehoskan wakil daripada 10 negara anggota ASEAN untuk bengkel tiga hari mengenai pencegahan dan penentangan ekstremisme ganas, berkongsi amalan terbaik dan rangka kerja perisikan.",tag:"Kemas kini",tagColor:"#1d4ed8"},{category:"Keselamatan Awam",date:"1 Jun 2026",title:"Program Ketahanan Negara Capai 2.3 Juta Warga",excerpt:"Inisiatif pemberdayaan komuniti unggulan kini telah mencapai lebih 2.3 juta rakyat Malaysia, menguatkan kesediaan akar umbi dan kesedaran bencana di semua negeri.",tag:"Pencapaian",tagColor:"#15803d"},{category:"Keselamatan Sempadan",date:"28 Mei 2026",title:"Operasi Rondaan Maritim Dipertingkat di ESSZone",excerpt:"MKN menyelaraskan operasi keselamatan maritim berbilang agensi di Zon Keselamatan Sabah Timur, melancarkan aset tentera laut dan udara untuk menjaga perairan berdaulat.",tag:"Operasi",tagColor:"#c2410c"},{category:"Dasar",date:"20 Mei 2026",title:"Majlis MKN Luluskan Rangka Kerja Dasar Keselamatan Negara Dikemaskini",excerpt:"Majlis Keselamatan Negara yang dipengerusikan oleh Perdana Menteri telah meluluskan rangka kerja DAKN dikemaskini yang merangkumi ancaman baharu termasuk keselamatan iklim dan tadbir urus AI.",tag:"Diluluskan",tagColor:"#0d2240"}],statistics:[{value:1971,label:"Tahun Ditubuhkan",suffix:"",icon:"calendar"},{value:361,label:"Operasi Bencana (2024-2025)",suffix:"+",icon:"disaster"},{value:150,label:"Warga Dipindahkan (Puncak)",suffix:"K+",icon:"people"},{value:412,label:"Entiti CNII Dilindungi",suffix:"",icon:"cyber"},{value:8500,label:"Insiden Siber DirRespons",suffix:"+",icon:"alert"},{value:2.3,label:"Warga Dicapai (Ketahanan)",suffix:"M",icon:"community"},{value:47,label:"Perkongsian Dua Hala",suffix:"",icon:"globe"},{value:1200,label:"Bengkel Komuniti",suffix:"+",icon:"community"}],services:[{title:"Laporan Bencana",description:"Laporkan bencana dan kecemasan melalui sistem pelaporan kebangsaan bersepadu.",icon:"alert",action:"Buat Laporan"},{title:"Arahan MKN No. 20",description:"Akses garis panduan rasmi untuk pengurusan bencana dan operasi bantuan.",icon:"document",action:"Lihat Arahan"},{title:"Sumber Keselamatan Awam",description:"Muat turun panduan kesediaan, hubungan kecemasan, dan buku panduan keselamatan.",icon:"document",action:"Lihat Sumber"},{title:"Program Ketahanan Negara",description:"Daftarkan komuniti anda untuk latihan kesediaan bencana dan bengkel.",icon:"community",action:"Daftar Sekarang"},{title:"Portal Keselamatan Siber",description:"Laporkan insiden siber dan akses nasihat serta amaran keselamatan siber.",icon:"cyber",action:"Akses Portal"},{title:"Sebutharga & Perolehan",description:"Lihat notis sebutharga MKN semasa, peluang perolehan, dan pendaftaran vendor.",icon:"document",action:"Lihat Sebutharga"}],footerLinks:{about:["Tentang MKN","Wawasan & Misi","Struktur Organisasi","Kepimpinan","Sejarah"],services:["Pengurusan Bencana","Dasar Keselamatan Negara","Antipengganas","Keselamatan Siber","Respons Krisis"],resources:["Arahan MKN No. 20","Penerbitan & Laporan","Pusat Media","FAQ","Sebutharga & Perolehan"],government:["Jabatan Perdana Menteri","Kerajaan Malaysia","Portal Perkhidmatan Awam","Portal eKL","Malaysia.gov.my"]},emergencyContacts:[{name:"Pusat Operasi MKN (PKTN)",phone:"03-8888 4000",hours:"24/7"},{name:"Talian Hotline Bencana NADMA",phone:"03-8064 2400",hours:"24/7"},{name:"Kecemasan Am",phone:"999",hours:"24/7"},{name:"Keselamatan Siber (MyCERT)",phone:"1-300-88-2999",hours:"24/7"}]};function Af(e){return e==="bm"?Lf:_f}const rc=R.createContext(null);function Rf({children:e}){const[t,n]=R.useState(()=>{try{const i=localStorage.getItem("mkn-lang");if(i==="en"||i==="bm")return i}catch{}return"bm"}),r=R.useCallback(i=>{n(i);try{localStorage.setItem("mkn-lang",i)}catch{}},[]),a={lang:t,setLang:r,t:Af(t)};return o.jsx(rc.Provider,{value:a,children:e})}function Ve(){const e=R.useContext(rc);if(!e)throw new Error("useLanguage must be used within LanguageProvider");return e}const ac=R.createContext(null);function If({children:e}){const[t,n]=R.useState(()=>{try{const a=localStorage.getItem("mkn-theme");if(a==="light"||a==="dark")return a}catch{}return"light"});R.useEffect(()=>{document.documentElement.setAttribute("data-theme",t)},[t]);const r=R.useCallback(()=>{n(a=>{const i=a==="light"?"dark":"light";try{localStorage.setItem("mkn-theme",i)}catch{}return i})},[]);return o.jsx(ac.Provider,{value:{theme:t,toggleTheme:r},children:e})}function Kf(){const e=R.useContext(ac);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e}function T({name:e,size:t=24,color:n="currentColor"}){const r={shield:o.jsx("path",{d:"M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-2.11V12.99z"}),star:o.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),fortress:o.jsx("path",{d:"M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"}),people:o.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),disaster:o.jsx("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"}),target:o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),cyber:o.jsx("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"}),alert:o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),community:o.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),calendar:o.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM7 12h5v5H7z"}),globe:o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),document:o.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),phone:o.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),chevron:o.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),arrow:o.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),menu:o.jsx("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),close:o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),external:o.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),email:o.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),location:o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),clock:o.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),facebook:o.jsx("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"}),twitter:o.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),instagram:o.jsx("path",{d:"M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"}),youtube:o.jsx("path",{d:"M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.45 12 20.45 12 20.45s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"}),moon:o.jsx("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}),sun:o.jsx("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"})};return o.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",style:{fill:n},xmlns:"http://www.w3.org/2000/svg",children:r[e]||r.shield})}function Of(){const{lang:e,setLang:t,t:n}=Ve(),{theme:r,toggleTheme:a}=Kf();return o.jsxs("div",{className:"topbar",children:[o.jsxs("div",{className:"container topbar-inner",children:[o.jsx("div",{className:"topbar-left",children:o.jsxs("span",{className:"topbar-gov-label",children:[o.jsx(T,{name:"shield",size:14,color:"#c5a253"}),n.ui.officialPortal]})}),o.jsxs("div",{className:"topbar-right",children:[o.jsxs("div",{className:"topbar-lang",children:[o.jsx("button",{className:e==="en"?"lang-active":"lang-btn",onClick:()=>t("en"),children:"EN"}),o.jsx("span",{className:"lang-sep",children:"|"}),o.jsx("button",{className:e==="bm"?"lang-active":"lang-btn",onClick:()=>t("bm"),children:"BM"})]}),o.jsx("button",{className:"theme-toggle",onClick:a,"aria-label":"Toggle dark mode",title:r==="dark"?"Light Mode":"Dark Mode",children:o.jsx(T,{name:r==="dark"?"sun":"moon",size:16,color:"#c5a253"})}),o.jsxs("div",{className:"topbar-links",children:[o.jsx("a",{href:"#accessibility",className:"topbar-link",children:n.ui.accessibility}),o.jsx("a",{href:"#sitemap",className:"topbar-link",children:n.ui.sitemap}),o.jsx("a",{href:"#faq",className:"topbar-link",children:n.ui.faq}),o.jsx("a",{href:"#contact",className:"topbar-link",children:n.ui.contactUs})]})]})]}),o.jsx("style",{children:`
        .topbar {
          background: var(--mkn-navy);
          border-bottom: 1px solid rgba(197, 162, 83, 0.3);
          height: var(--topbar-height);
          display: flex;
          align-items: center;
          font-size: 0.78rem;
        }
        .topbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .topbar-gov-label {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.3px;
        }
        .topbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .topbar-lang {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.5);
        }
        .topbar-lang button {
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          padding: 0;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.2s;
        }
        .lang-active {
          color: var(--mkn-gold);
          font-weight: 700;
        }
        .lang-btn:hover {
          color: var(--mkn-gold);
        }
        .lang-sep {
          color: rgba(255, 255, 255, 0.3);
        }
        .topbar-links {
          display: flex;
          gap: 16px;
        }
        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(197, 162, 83, 0.12);
          border: 1px solid rgba(197, 162, 83, 0.3);
          cursor: pointer;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .theme-toggle:hover {
          background: rgba(197, 162, 83, 0.25);
          transform: scale(1.1);
        }
        .topbar-link {
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.2s;
        }
        .topbar-link:hover {
          color: var(--mkn-gold);
        }
        @media (max-width: 768px) {
          .topbar-links { display: none; }
          .topbar-gov-label { font-size: 0.7rem; }
          .theme-toggle { width: 24px; height: 24px; }
        }
      `})]})}function Ff(){const[e,t]=R.useState(!1),[n,r]=R.useState(!1),{t:a}=Ve();return R.useEffect(()=>{const i=()=>t(window.scrollY>100);return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),o.jsxs("header",{className:`header ${e?"header-scrolled":""}`,children:[o.jsxs("div",{className:"container header-inner",children:[o.jsxs("a",{href:"#home",className:"header-logo",onClick:()=>r(!1),children:[o.jsx("img",{src:"/mkn-portal/mkn-emblem.png",alt:"Majlis Keselamatan Negara",className:"logo-img"}),o.jsxs("div",{className:"logo-text",children:[o.jsx("span",{className:"logo-title",children:"MAJLIS KESELAMATAN NEGARA"}),o.jsx("span",{className:"logo-subtitle",children:a.ui.logoSubtitle})]})]}),o.jsxs("nav",{className:`header-nav ${n?"nav-open":""}`,children:[a.navItems.map(i=>o.jsx("a",{href:i.href,className:"nav-link",onClick:()=>r(!1),children:i.label},i.href)),o.jsx("a",{href:"#contact",className:"btn btn-primary nav-cta",onClick:()=>r(!1),children:a.ui.emergencyContact})]}),o.jsx("button",{className:"mobile-toggle",onClick:()=>r(!n),"aria-label":"Toggle menu",children:o.jsx(T,{name:n?"close":"menu",size:26,color:"var(--icon-default)"})})]}),o.jsx("style",{children:`
        .header {
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 3px solid var(--mkn-gold);
        }
        .header-scrolled {
          box-shadow: var(--shadow-lg);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
          gap: 24px;
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }
        .logo-img {
          width: 56px;
          height: 56px;
          object-fit: contain;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .logo-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-heading);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .logo-subtitle {
          font-size: 0.72rem;
          color: var(--text-gray);
          letter-spacing: 0.5px;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          padding: 10px 14px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: var(--text-heading);
          border-radius: 6px;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--mkn-gold);
          transition: all 0.25s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover {
          color: var(--mkn-gold-dark);
          background: rgba(197, 162, 83, 0.08);
        }
        .nav-link:hover::after {
          width: 60%;
        }
        .nav-cta {
          margin-left: 8px;
          padding: 10px 20px;
          font-size: 0.82rem;
        }
        .mobile-toggle {
          display: none;
          padding: 8px;
          border-radius: 6px;
          transition: background 0.2s;
        }
        .mobile-toggle:hover {
          background: rgba(197, 162, 83, 0.1);
        }

        @media (max-width: 1024px) {
          .header-nav {
            position: fixed;
            top: var(--header-height);
            left: 0;
            right: 0;
            background: var(--bg-card);
            flex-direction: column;
            padding: 16px;
            gap: 4px;
            box-shadow: var(--shadow-xl);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            border-bottom: 3px solid var(--mkn-gold);
          }
          .nav-open {
            transform: translateY(0);
          }
          .nav-link {
            width: 100%;
            padding: 14px;
          }
          .nav-cta {
            margin-left: 0;
            margin-top: 8px;
            width: 100%;
            justify-content: center;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 600px) {
          .logo-subtitle { display: none; }
          .logo-title { font-size: 0.8rem; }
          .logo-img { width: 44px; height: 44px; }
        }
      `})]})}function Vf(){const{t:e}=Ve(),t=e.heroContent;return o.jsxs("section",{id:"home",className:"hero",children:[o.jsx("div",{className:"hero-bg-pattern"}),o.jsx("div",{className:"hero-overlay"}),o.jsxs("div",{className:"container hero-content",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx("span",{className:"hero-badge-dot"}),t.badge]}),o.jsxs("h1",{className:"hero-title",children:[t.title,o.jsx("span",{className:"hero-title-accent",children:t.subtitle})]}),o.jsx("p",{className:"hero-description",children:t.description}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("a",{href:"#corporate",className:"btn btn-primary",children:[t.primaryAction,o.jsx(T,{name:"arrow",size:18,color:"#0d2240"})]}),o.jsx("a",{href:"#involvement",className:"btn btn-outline",children:t.secondaryAction})]}),o.jsx("div",{className:"hero-stats",children:t.stats.map((n,r)=>o.jsxs("div",{className:"hero-stat",style:{animationDelay:`${.3+r*.1}s`},children:[o.jsx("div",{className:"hero-stat-value",children:n.value}),o.jsx("div",{className:"hero-stat-label",children:n.label})]},r))})]}),o.jsxs("div",{className:"hero-scroll-indicator",children:[o.jsx("span",{children:e.ui.scrollExplore}),o.jsx(T,{name:"chevron",size:20,color:"rgba(255,255,255,0.6)"})]}),o.jsx("style",{children:`
        .hero {
          position: relative;
          min-height: calc(100vh - var(--header-height) - var(--topbar-height));
          background: linear-gradient(135deg, #0d2240 0%, #142d4c 40%, #1a3a5c 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 0 60px;
        }
        .hero-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(197, 162, 83, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(26, 58, 92, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 60% 80%, rgba(197, 162, 83, 0.06) 0%, transparent 50%);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            linear-gradient(180deg, transparent 0%, rgba(13, 34, 64, 0.4) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          animation: fadeInUp 0.8s ease;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          background: rgba(197, 162, 83, 0.15);
          border: 1px solid rgba(197, 162, 83, 0.4);
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--mkn-gold-light);
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 28px;
        }
        .hero-badge-dot {
          width: 8px;
          height: 8px;
          background: var(--mkn-gold);
          border-radius: 50%;
          animation: pulse 2s ease infinite;
        }
        .hero-title {
          font-size: 3.8rem;
          color: var(--mkn-white);
          margin-bottom: 20px;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .hero-title-accent {
          display: block;
          font-size: 1.4rem;
          font-weight: 300;
          color: var(--mkn-gold);
          letter-spacing: 4px;
          margin-top: 8px;
          text-transform: uppercase;
        }
        .hero-description {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        .hero-stat {
          text-align: center;
          opacity: 0;
          animation: fadeInUp 0.6s ease forwards;
        }
        .hero-stat-value {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-label {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .hero-scroll-indicator {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
          animation: fadeIn 1.5s ease 1s forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-title-accent {
            font-size: 1.1rem;
          }
          .hero-description {
            font-size: 1rem;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .hero-stat-value {
            font-size: 1.8rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          .hero-actions .btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `})]})}function Uf(){const{t:e}=Ve(),{aboutInfo:t,visionMission:n,orgStructure:r,leadership:a}=e;return o.jsxs("section",{id:"corporate",className:"section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:e.ui.corporateInfo}),o.jsx("p",{className:"subtitle",children:e.ui.corporateInfoSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsxs("div",{className:"about-grid",children:[o.jsxs("div",{className:"about-text",children:[o.jsx("h3",{className:"about-heading",children:t.heading}),o.jsx("p",{className:"about-intro",children:t.intro}),t.body.map((i,l)=>o.jsx("p",{className:"about-body-text",children:i},l))]}),o.jsx("div",{className:"about-facts",children:o.jsxs("div",{className:"facts-card",children:[o.jsxs("div",{className:"facts-header",children:[o.jsx(T,{name:"document",size:20,color:"#c5a253"}),o.jsx("span",{children:e.ui.keyFacts})]}),o.jsx("div",{className:"facts-list",children:t.keyFacts.map((i,l)=>o.jsxs("div",{className:"fact-item",children:[o.jsx("span",{className:"fact-label",children:i.label}),o.jsx("span",{className:"fact-value",children:i.value})]},l))})]})})]}),o.jsxs("div",{className:"vm-section",children:[o.jsxs("div",{className:"vm-card vm-vision",children:[o.jsx("div",{className:"vm-icon-wrap",children:o.jsx(T,{name:"star",size:28,color:"#c5a253"})}),o.jsx("h3",{children:e.ui.ourVision}),o.jsx("p",{children:n.vision})]}),o.jsxs("div",{className:"vm-card vm-mission",children:[o.jsx("div",{className:"vm-icon-wrap",children:o.jsx(T,{name:"target",size:28,color:"#c5a253"})}),o.jsx("h3",{children:e.ui.ourMission}),o.jsx("p",{children:n.mission})]})]}),o.jsxs("div",{className:"values-section",children:[o.jsx("h3",{className:"values-heading",children:e.ui.coreValues}),o.jsx("div",{className:"values-grid",children:n.values.map((i,l)=>o.jsxs("div",{className:"value-card",children:[o.jsx("div",{className:"value-icon",children:o.jsx(T,{name:i.icon,size:24,color:"#c5a253"})}),o.jsx("h4",{children:i.title}),o.jsx("p",{children:i.description})]},l))})]}),o.jsxs("div",{className:"org-section",children:[o.jsxs("div",{className:"section-header",style:{marginBottom:"40px"},children:[o.jsx("h3",{style:{fontSize:"1.6rem"},children:r.heading}),o.jsx("p",{className:"subtitle",children:r.description})]}),o.jsx("div",{className:"org-tiers",children:r.levels.map((i,l)=>o.jsxs("div",{className:"org-tier",children:[o.jsxs("div",{className:"org-tier-badge",style:{background:l===0?"var(--mkn-navy)":l===1?"var(--mkn-navy-light)":"var(--mkn-navy-lighter)"},children:[e.ui.tier," ",l+1]}),o.jsxs("div",{className:"org-tier-content",children:[o.jsx("h4",{className:"org-tier-title",children:i.title}),o.jsx("p",{className:"org-tier-desc",children:i.desc}),o.jsx("div",{className:"org-members",children:i.members.map((s,u)=>o.jsx("span",{className:"org-member-tag",children:s},u))})]}),l<r.levels.length-1&&o.jsx("div",{className:"org-connector",children:o.jsx(T,{name:"chevron",size:20,color:"#c5a253"})})]},l))})]}),o.jsxs("div",{className:"leadership-section",children:[o.jsxs("div",{className:"section-header",style:{marginBottom:"40px"},children:[o.jsx("h3",{style:{fontSize:"1.6rem"},children:e.ui.keyLeadership}),o.jsx("p",{className:"subtitle",children:e.ui.leadershipSubtitle})]}),o.jsx("div",{className:"leadership-grid",children:a.map((i,l)=>o.jsxs("div",{className:"leader-card",children:[o.jsx("div",{className:"leader-avatar",style:{background:i.color},children:i.initials}),o.jsxs("div",{className:"leader-info",children:[o.jsx("h4",{className:"leader-name",children:i.name}),o.jsx("p",{className:"leader-position",children:i.position}),o.jsx("span",{className:"leader-role",children:i.role})]})]},l))})]})]}),o.jsx("style",{children:`
        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 48px;
          margin-bottom: 64px;
        }
        .about-heading {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--text-heading);
          position: relative;
          padding-left: 16px;
        }
        .about-heading::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 6px;
          width: 4px;
          background: var(--mkn-gold);
          border-radius: 2px;
        }
        .about-intro {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          font-weight: 500;
          line-height: 1.8;
        }
        .about-body-text {
          color: var(--text-muted);
          margin-bottom: 14px;
          line-height: 1.8;
        }

        /* Facts Card */
        .facts-card {
          background: var(--mkn-navy);
          border-radius: 12px;
          padding: 28px;
          position: sticky;
          top: 100px;
          box-shadow: var(--shadow-lg);
        }
        .facts-header {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--mkn-gold);
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(197, 162, 83, 0.2);
        }
        .facts-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .fact-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .fact-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .fact-value {
          font-size: 0.98rem;
          color: var(--mkn-white);
          font-weight: 600;
        }

        /* Vision & Mission */
        .vm-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 64px;
        }
        .vm-card {
          background: var(--bg-section);
          border-radius: 12px;
          padding: 36px;
          border: 1px solid var(--border-default);
          border-top: 4px solid var(--mkn-gold);
          transition: all 0.3s ease;
        }
        .vm-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .vm-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: var(--mkn-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .vm-card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
        }
        .vm-card p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.98rem;
        }

        /* Values */
        .values-section {
          margin-bottom: 64px;
        }
        .values-heading {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 32px;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .value-card {
          text-align: center;
          padding: 28px 20px;
          border-radius: 12px;
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          transition: all 0.3s ease;
        }
        .value-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-md);
        }
        .value-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          border-radius: 50%;
          background: rgba(197, 162, 83, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .value-card h4 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .value-card p {
          font-size: 0.85rem;
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* Org Structure */
        .org-section {
          background: var(--bg-section);
          padding: 56px;
          border-radius: 16px;
          margin-bottom: 64px;
        }
        .org-tiers {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .org-tier {
          display: flex;
          gap: 24px;
          position: relative;
          padding-bottom: 32px;
        }
        .org-tier-badge {
          flex-shrink: 0;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mkn-gold);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          border: 3px solid var(--mkn-gold);
          z-index: 2;
        }
        .org-tier-content {
          flex: 1;
          background: var(--bg-card);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--border-default);
          box-shadow: var(--shadow-sm);
        }
        .org-tier-title {
          font-size: 1.15rem;
          margin-bottom: 8px;
        }
        .org-tier-desc {
          font-size: 0.88rem;
          color: var(--text-gray);
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .org-members {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .org-member-tag {
          font-size: 0.78rem;
          padding: 5px 12px;
          background: var(--tag-bg);
          color: var(--text-heading);
          border-radius: 100px;
          font-weight: 500;
        }
        .org-connector {
          position: absolute;
          left: 31px;
          top: 64px;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Leadership */
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .leader-card {
          background: var(--bg-card);
          border-radius: 12px;
          padding: 28px;
          text-align: center;
          border: 1px solid var(--border-default);
          transition: all 0.3s ease;
        }
        .leader-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .leader-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--mkn-white);
          border: 3px solid var(--mkn-gold);
        }
        .leader-name {
          font-size: 0.95rem;
          margin-bottom: 6px;
          line-height: 1.4;
        }
        .leader-position {
          font-size: 0.85rem;
          color: var(--mkn-gold-dark);
          font-weight: 600;
          margin-bottom: 4px;
        }
        .leader-role {
          font-size: 0.78rem;
          color: var(--text-gray);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .facts-card {
            position: static;
          }
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .leadership-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .vm-section {
            grid-template-columns: 1fr;
          }
          .org-section {
            padding: 28px;
          }
          .org-tier {
            flex-direction: column;
            gap: 12px;
          }
          .org-connector {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .values-grid {
            grid-template-columns: 1fr;
          }
          .leadership-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Bf(){const[e,t]=R.useState(0),{t:n}=Ve(),r=n.involvementAreas;return o.jsxs("section",{id:"involvement",className:"section involvement-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:n.ui.involvement}),o.jsx("p",{className:"subtitle",children:n.ui.involvementSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsx("div",{className:"involvement-tabs",children:r.map((a,i)=>o.jsxs("button",{className:`inv-tab ${e===i?"inv-tab-active":""}`,onClick:()=>t(i),style:e===i?{borderBottomColor:a.color}:{},children:[o.jsx("span",{className:"inv-tab-icon",style:{background:e===i?a.color:"transparent",color:e===i?"#fff":a.color},children:o.jsx(T,{name:a.icon,size:18,color:e===i?"#fff":a.color})}),o.jsx("span",{className:"inv-tab-label",children:a.title})]},a.id))}),o.jsx("div",{className:"involvement-content",children:r.map((a,i)=>e===i&&o.jsxs("div",{className:"inv-detail fade-in-up",style:{animationDuration:"0.4s"},children:[o.jsx("div",{className:"inv-detail-header",style:{backgroundImage:`linear-gradient(135deg, ${a.color}ee, ${a.color}bb), url(/mkn-portal/${a.image})`},children:o.jsxs("div",{className:"inv-detail-header-content",children:[o.jsx("div",{className:"inv-detail-icon-wrap",children:o.jsx(T,{name:a.icon,size:32,color:"#fff"})}),o.jsxs("div",{className:"inv-detail-titles",children:[o.jsx("span",{className:"inv-detail-tag",children:a.tag}),o.jsx("h3",{children:a.title})]})]})}),o.jsxs("div",{className:"inv-detail-body",children:[o.jsx("p",{className:"inv-detail-summary",children:a.summary}),o.jsxs("div",{className:"inv-highlights",children:[o.jsxs("h4",{className:"inv-highlights-title",children:[o.jsx(T,{name:"star",size:16,color:"#c5a253"}),n.ui.keyAchievements]}),o.jsx("div",{className:"inv-highlights-grid",children:a.highlights.map((l,s)=>o.jsxs("div",{className:"inv-highlight-item",children:[o.jsx("span",{className:"inv-check",style:{color:a.color},children:o.jsx(T,{name:"star",size:14,color:a.color})}),o.jsx("span",{children:l})]},s))})]})]})]},a.id))}),o.jsx("div",{className:"inv-overview-grid",children:r.map((a,i)=>o.jsxs("div",{className:"inv-overview-card",onClick:()=>{var l;t(i),(l=document.getElementById("involvement"))==null||l.scrollIntoView({behavior:"smooth"})},children:[o.jsxs("div",{className:"inv-overview-img-wrap",children:[o.jsx("img",{src:`/mkn-portal/${a.image}`,alt:a.title,className:"inv-overview-img"}),o.jsx("span",{className:"inv-overview-tag",style:{background:`${a.color}15`,color:a.color},children:a.tag})]}),o.jsxs("div",{className:"inv-overview-card-body",children:[o.jsx("div",{className:"inv-overview-icon",style:{background:`${a.color}15`,color:a.color},children:o.jsx(T,{name:a.icon,size:22,color:a.color})}),o.jsx("h4",{children:a.title}),o.jsxs("p",{children:[a.summary.slice(0,100),"..."]})]})]},a.id))})]}),o.jsx("style",{children:`
        .involvement-section {
          background: var(--bg-section);
        }

        /* Tabs */
        .involvement-tabs {
          display: flex;
          gap: 4px;
          margin-bottom: 32px;
          overflow-x: auto;
          padding-bottom: 4px;
          border-bottom: 2px solid var(--border-default);
          scrollbar-width: thin;
        }
        .inv-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 20px;
          border-radius: 10px 10px 0 0;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-gray);
          white-space: nowrap;
          transition: all 0.25s ease;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
        }
        .inv-tab:hover {
          color: var(--text-heading);
          background: rgba(13, 34, 64, 0.04);
        }
        .inv-tab-active {
          color: var(--text-heading);
          background: var(--bg-card);
          box-shadow: var(--shadow-sm);
        }
        .inv-tab-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          border: 1px solid currentColor;
        }
        .inv-tab-label {
          line-height: 1.2;
        }

        /* Detail */
        .involvement-content {
          margin-bottom: 56px;
        }
        .inv-detail {
          background: var(--bg-card);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }
        .inv-detail-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 32px;
          color: var(--mkn-white);
          background-size: cover;
          background-position: center;
          min-height: 200px;
        }
        .inv-detail-header-content {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .inv-detail-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .inv-detail-titles {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .inv-detail-tag {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.2);
          padding: 3px 10px;
          border-radius: 100px;
          align-self: flex-start;
        }
        .inv-detail-titles h3 {
          color: var(--mkn-white);
          font-size: 1.5rem;
        }
        .inv-detail-body {
          padding: 32px;
        }
        .inv-detail-summary {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .inv-highlights-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          margin-bottom: 16px;
          color: var(--text-heading);
        }
        .inv-highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .inv-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          padding: 12px 16px;
          background: var(--bg-section);
          border-radius: 8px;
          border-left: 3px solid var(--mkn-gold);
        }
        .inv-check {
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Overview Cards */
        .inv-overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .inv-overview-card {
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border-default);
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .inv-overview-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .inv-overview-img-wrap {
          position: relative;
          height: 160px;
          overflow: hidden;
        }
        .inv-overview-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .inv-overview-card:hover .inv-overview-img {
          transform: scale(1.05);
        }
        .inv-overview-img-wrap .inv-overview-tag {
          position: absolute;
          bottom: 8px;
          right: 8px;
          backdrop-filter: blur(4px);
        }
        .inv-overview-card-body {
          padding: 24px;
        }
        .inv-overview-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .inv-overview-card-body h4 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .inv-overview-card-body p {
          font-size: 0.85rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin: 0;
        }
        .inv-overview-tag {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 100px;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .inv-tab-label {
            display: none;
          }
          .inv-tab {
            padding: 12px;
          }
          .inv-detail-header {
            padding: 24px;
          }
          .inv-detail-titles h3 {
            font-size: 1.2rem;
          }
          .inv-detail-body {
            padding: 20px;
          }
          .inv-highlights-grid {
            grid-template-columns: 1fr;
          }
          .inv-overview-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function $f(){const{t:e}=Ve(),t=e.newsItems;return o.jsxs("section",{id:"news",className:"section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:e.ui.newsAnnouncements}),o.jsx("p",{className:"subtitle",children:e.ui.newsSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsxs("div",{className:"news-grid",children:[o.jsxs("div",{className:"news-featured",children:[o.jsxs("div",{className:"news-featured-banner",children:[o.jsx("div",{className:"news-featured-pattern"}),o.jsx("span",{className:"news-tag",style:{background:t[0].tagColor},children:t[0].tag}),o.jsx(T,{name:"alert",size:48,color:"rgba(255,255,255,0.2)"})]}),o.jsxs("div",{className:"news-featured-body",children:[o.jsxs("div",{className:"news-meta",children:[o.jsx("span",{className:"news-category",children:t[0].category}),o.jsx("span",{className:"news-dot",children:"•"}),o.jsx("span",{className:"news-date",children:t[0].date})]}),o.jsx("h3",{className:"news-featured-title",children:t[0].title}),o.jsx("p",{className:"news-featured-excerpt",children:t[0].excerpt}),o.jsxs("a",{href:"#news",className:"news-read-more",children:[e.ui.readFullArticle,o.jsx(T,{name:"arrow",size:16,color:"#c5a253"})]})]})]}),o.jsx("div",{className:"news-list",children:t.slice(1).map((n,r)=>o.jsx("div",{className:"news-card",children:o.jsxs("div",{className:"news-card-body",children:[o.jsxs("div",{className:"news-meta",children:[o.jsx("span",{className:"news-category",children:n.category}),o.jsx("span",{className:"news-dot",children:"•"}),o.jsx("span",{className:"news-date",children:n.date})]}),o.jsx("h4",{className:"news-card-title",children:n.title}),o.jsx("p",{className:"news-card-excerpt",children:n.excerpt}),o.jsxs("div",{className:"news-card-footer",children:[o.jsx("span",{className:"news-tag-sm",style:{background:`${n.tagColor}15`,color:n.tagColor},children:n.tag}),o.jsxs("a",{href:"#news",className:"news-card-link",children:[e.ui.readMore,o.jsx(T,{name:"arrow",size:14,color:"var(--icon-default)"})]})]})]})},r))})]}),o.jsx("div",{className:"news-cta",children:o.jsxs("a",{href:"#news",className:"btn btn-navy",children:[e.ui.viewAllAnnouncements,o.jsx(T,{name:"arrow",size:18,color:"#fff"})]})})]}),o.jsx("style",{children:`
        .news-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        /* Featured */
        .news-featured {
          background: var(--bg-card);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-default);
          display: flex;
          flex-direction: column;
        }
        .news-featured-banner {
          position: relative;
          background: linear-gradient(135deg, #0d2240, #1a3a5c);
          padding: 48px;
          min-height: 180px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }
        .news-featured-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 80% 20%, rgba(197, 162, 83, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(26, 58, 92, 0.3) 0%, transparent 50%);
        }
        .news-featured-banner .news-tag {
          position: relative;
          z-index: 2;
          padding: 5px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--mkn-white);
          letter-spacing: 0.5px;
        }
        .news-featured-banner svg {
          position: relative;
          z-index: 2;
          opacity: 0.3;
        }
        .news-featured-body {
          padding: 28px;
          flex: 1;
        }
        .news-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          font-size: 0.78rem;
        }
        .news-category {
          color: var(--mkn-gold-dark);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .news-dot {
          color: var(--mkn-gray-light);
        }
        .news-date {
          color: var(--mkn-gray);
        }
        .news-featured-title {
          font-size: 1.3rem;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .news-featured-excerpt {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
        .news-read-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--mkn-gold-dark);
          font-weight: 600;
          font-size: 0.88rem;
          transition: gap 0.2s ease;
        }
        .news-read-more:hover {
          gap: 10px;
        }

        /* News List */
        .news-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .news-card {
          background: var(--bg-card);
          border-radius: 12px;
          border: 1px solid var(--border-default);
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .news-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-md);
          transform: translateX(4px);
        }
        .news-card-body {
          padding: 20px 24px;
        }
        .news-card-title {
          font-size: 1rem;
          margin-bottom: 8px;
          line-height: 1.4;
          color: var(--text-heading);
        }
        .news-card-excerpt {
          font-size: 0.82rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 14px;
        }
        .news-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .news-tag-sm {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 100px;
        }
        .news-card-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-heading);
          transition: gap 0.2s ease;
        }
        .news-card-link:hover {
          gap: 8px;
        }

        .news-cta {
          text-align: center;
        }

        @media (max-width: 1024px) {
          .news-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .news-featured-banner {
            padding: 32px 24px;
            min-height: 120px;
          }
          .news-featured-body {
            padding: 20px;
          }
          .news-featured-title {
            font-size: 1.1rem;
          }
        }
      `})]})}function Hf(){const{t:e}=Ve(),[t,n]=R.useState([]),[r,a]=R.useState(!0),[i,l]=R.useState(null),[s,u]=R.useState(null);R.useEffect(()=>{fetch("/mkn-portal/data_jenayah.json").then(v=>{if(!v.ok)throw new Error("Failed to load data");return v.json()}).then(v=>{n(v),v.length>0&&u(v[0].daerah),a(!1)}).catch(v=>{l(v.message),a(!1)})},[]);const d=v=>v.reduce((k,L)=>k+L.kes,0),h=v=>v.reduce((k,L)=>k+L.selesai,0),g=(v,k)=>k>0?Math.round(v/k*100):0,m=t.reduce((v,k)=>v+d(k.jenayah),0),w=t.reduce((v,k)=>v+h(k.jenayah),0);return o.jsxs("section",{id:"crime-data",className:"section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:e.ui.crimeDataTitle}),o.jsx("p",{className:"subtitle",children:e.ui.crimeDataSubtitle}),o.jsx("div",{className:"section-divider"})]}),r&&o.jsxs("div",{className:"crime-loading",children:[o.jsx(T,{name:"document",size:32,color:"var(--icon-default)"}),o.jsx("p",{children:e.ui.crimeDataLoading})]}),i&&o.jsxs("div",{className:"crime-error",children:[o.jsx(T,{name:"alert",size:32,color:"#dc2626"}),o.jsx("p",{children:e.ui.crimeDataError})]}),!r&&!i&&t.length===0&&o.jsxs("div",{className:"crime-empty",children:[o.jsx(T,{name:"document",size:32,color:"var(--icon-default)"}),o.jsx("p",{children:e.ui.crimeDataEmpty})]}),!r&&!i&&t.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"crime-summary-grid",children:[o.jsxs("div",{className:"crime-summary-card",children:[o.jsx("span",{className:"crime-summary-value",children:t.length}),o.jsx("span",{className:"crime-summary-label",children:e.ui.crimeDataDistricts})]}),o.jsxs("div",{className:"crime-summary-card",children:[o.jsx("span",{className:"crime-summary-value",children:m.toLocaleString()}),o.jsx("span",{className:"crime-summary-label",children:e.ui.crimeDataTotalCases})]}),o.jsxs("div",{className:"crime-summary-card",children:[o.jsx("span",{className:"crime-summary-value",children:w.toLocaleString()}),o.jsx("span",{className:"crime-summary-label",children:e.ui.crimeDataResolvedCases})]}),o.jsxs("div",{className:"crime-summary-card",children:[o.jsxs("span",{className:"crime-summary-value",children:[g(w,m),"%"]}),o.jsx("span",{className:"crime-summary-label",children:e.ui.crimeDataResolutionRate})]})]}),o.jsx("div",{className:"crime-districts",children:t.map(v=>{const k=d(v.jenayah),L=h(v.jenayah),f=g(L,k),c=s===v.daerah;return o.jsxs("div",{className:"crime-district-card",children:[o.jsxs("button",{className:"crime-district-header",onClick:()=>u(c?null:v.daerah),children:[o.jsxs("div",{className:"crime-district-info",children:[o.jsx("span",{className:"crime-district-name",children:v.daerah}),o.jsxs("span",{className:"crime-district-state",children:[v.negeri," · ",v.bulan]})]}),o.jsxs("div",{className:"crime-district-stats",children:[o.jsxs("span",{className:"crime-district-badge",children:[k," ",e.ui.crimeDataCases]}),o.jsxs("span",{className:"crime-district-rate",style:{color:f>=75?"var(--color-success)":f>=50?"var(--color-warning)":"var(--color-danger)"},children:[f,"%"]}),o.jsx(T,{name:"chevron",size:20,color:"var(--icon-default)"})]})]}),c&&o.jsx("div",{className:"crime-table-wrap fade-in",children:o.jsxs("table",{className:"crime-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:e.ui.crimeDataType}),o.jsx("th",{className:"crime-num",children:e.ui.crimeDataTotal}),o.jsx("th",{className:"crime-num",children:e.ui.crimeDataResolved}),o.jsx("th",{className:"crime-num",children:e.ui.crimeDataPending}),o.jsx("th",{className:"crime-num",children:e.ui.crimeDataRate})]})}),o.jsx("tbody",{children:v.jenayah.map((p,y)=>{const N=p.kes-p.selesai,j=g(p.selesai,p.kes);return o.jsxs("tr",{children:[o.jsxs("td",{className:"crime-type-cell",children:[o.jsx("span",{className:"crime-type-dot",style:{background:j>=75?"var(--color-success)":j>=50?"var(--color-warning)":"var(--color-danger)"}}),p.jenis]}),o.jsx("td",{className:"crime-num",children:p.kes}),o.jsx("td",{className:"crime-num",children:p.selesai}),o.jsx("td",{className:"crime-num",children:N}),o.jsx("td",{className:"crime-num",children:o.jsxs("span",{className:"crime-rate-pill",style:{background:j>=75?"rgba(21, 128, 61, 0.12)":j>=50?"rgba(180, 83, 9, 0.12)":"rgba(220, 38, 38, 0.12)",color:j>=75?"var(--color-success)":j>=50?"var(--color-warning)":"var(--color-danger)"},children:[j,"%"]})})]},y)})}),o.jsx("tfoot",{children:o.jsxs("tr",{children:[o.jsx("td",{className:"crime-total-cell",children:e.ui.crimeDataTotal}),o.jsx("td",{className:"crime-num crime-total-cell",children:k}),o.jsx("td",{className:"crime-num crime-total-cell",children:L}),o.jsx("td",{className:"crime-num crime-total-cell",children:k-L}),o.jsxs("td",{className:"crime-num crime-total-cell",children:[f,"%"]})]})})]})})]},v.daerah)})})]})]}),o.jsx("style",{children:`
        .crime-loading,
        .crime-error,
        .crime-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 48px;
          text-align: center;
        }
        .crime-loading p,
        .crime-empty p {
          color: var(--text-gray);
          font-size: 0.95rem;
        }
        .crime-error p {
          color: var(--color-danger);
          font-size: 0.95rem;
        }

        /* Summary Cards */
        .crime-summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .crime-summary-card {
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          border-radius: 12px;
          padding: 24px 20px;
          text-align: center;
          border-top: 4px solid var(--mkn-gold);
          transition: all 0.3s ease;
        }
        .crime-summary-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-3px);
        }
        .crime-summary-value {
          display: block;
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 6px;
        }
        .crime-summary-label {
          font-size: 0.78rem;
          color: var(--text-gray);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* District Cards */
        .crime-districts {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .crime-district-card {
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .crime-district-card:hover {
          border-color: var(--mkn-gold);
        }
        .crime-district-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.2s ease;
        }
        .crime-district-header:hover {
          background: var(--tag-bg);
        }
        .crime-district-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .crime-district-name {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-heading);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .crime-district-state {
          font-size: 0.78rem;
          color: var(--text-gray);
        }
        .crime-district-stats {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .crime-district-badge {
          font-size: 0.82rem;
          font-weight: 700;
          padding: 4px 12px;
          background: var(--tag-bg);
          color: var(--text-heading);
          border-radius: 100px;
        }
        .crime-district-rate {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 700;
        }
        .crime-district-header svg {
          transition: transform 0.3s ease;
        }

        /* Table */
        .crime-table-wrap {
          overflow-x: auto;
          border-top: 1px solid var(--border-default);
        }
        .crime-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }
        .crime-table thead {
          background: var(--bg-section);
        }
        .crime-table th {
          padding: 14px 20px;
          text-align: left;
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-heading);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border-bottom: 2px solid var(--border-default);
          white-space: nowrap;
        }
        .crime-table td {
          padding: 12px 20px;
          border-bottom: 1px solid var(--border-default);
          color: var(--text-body);
        }
        .crime-table tbody tr:hover {
          background: var(--tag-bg);
        }
        .crime-num {
          text-align: center;
          font-variant-numeric: tabular-nums;
          font-weight: 500;
        }
        .crime-type-cell {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }
        .crime-type-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .crime-rate-pill {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 700;
        }
        .crime-table tfoot {
          background: var(--bg-section);
        }
        .crime-total-cell {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--text-heading);
          border-top: 2px solid var(--mkn-gold);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .crime-summary-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .crime-summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .crime-summary-value {
            font-size: 1.6rem;
          }
          .crime-district-header {
            padding: 16px;
          }
          .crime-district-stats {
            gap: 8px;
          }
          .crime-district-badge {
            display: none;
          }
          .crime-table th,
          .crime-table td {
            padding: 10px 12px;
            font-size: 0.82rem;
          }
        }
        @media (max-width: 600px) {
          .crime-summary-grid {
            grid-template-columns: 1fr;
          }
          .crime-district-rate {
            font-size: 1.1rem;
          }
        }
      `})]})}function Wf(e,t,n){const[r,a]=R.useState(0);return R.useEffect(()=>{if(!n)return;let i=null,l;const s=u=>{i===null&&(i=u);const d=Math.min((u-i)/t,1),h=1-Math.pow(1-d,3);a(e*h),d<1?l=requestAnimationFrame(s):a(e)};return l=requestAnimationFrame(s),()=>cancelAnimationFrame(l)},[e,t,n]),r}function Qf({stat:e,start:t}){const n=Wf(e.value,1800,t),r=a=>e.value>=1e3?Math.round(a).toLocaleString():e.value<10?a.toFixed(1):Math.round(a).toString();return o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:o.jsx(T,{name:e.icon,size:24,color:"#c5a253"})}),o.jsxs("div",{className:"stat-value",children:[r(n),o.jsx("span",{className:"stat-suffix",children:e.suffix})]}),o.jsx("div",{className:"stat-label",children:e.label})]})}function Yf(){const e=R.useRef(null),[t,n]=R.useState(!1),{t:r}=Ve(),a=r.statistics;return R.useEffect(()=>{const i=new IntersectionObserver(([l])=>{l.isIntersecting&&(n(!0),i.disconnect())},{threshold:.2});return e.current&&i.observe(e.current),()=>i.disconnect()},[]),o.jsxs("section",{id:"statistics",className:"section stats-section",ref:e,children:[o.jsx("div",{className:"stats-bg"}),o.jsxs("div",{className:"container",style:{position:"relative",zIndex:2},children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{style:{color:"var(--mkn-white)"},children:r.ui.impactInNumbers}),o.jsx("p",{className:"subtitle",style:{color:"rgba(255,255,255,0.7)"},children:r.ui.statisticsSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsx("div",{className:"stats-grid",children:a.map((i,l)=>o.jsx(Qf,{stat:i,start:t},l))})]}),o.jsx("style",{children:`
        .stats-section {
          background: linear-gradient(135deg, #0d2240 0%, #142d4c 50%, #0d2240 100%);
          position: relative;
          overflow: hidden;
        }
        .stats-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 15% 20%, rgba(197, 162, 83, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 85% 70%, rgba(26, 58, 92, 0.5) 0%, transparent 40%);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(197, 162, 83, 0.2);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          background: rgba(197, 162, 83, 0.08);
          border-color: rgba(197, 162, 83, 0.5);
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }
        .stat-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 16px;
          border-radius: 12px;
          background: rgba(197, 162, 83, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-suffix {
          font-size: 1.2rem;
          margin-left: 2px;
        }
        .stat-label {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
          letter-spacing: 0.3px;
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .stat-value {
            font-size: 1.8rem;
          }
        }
      `})]})}function Gf(){const{t:e}=Ve(),t=e.services;return o.jsxs("section",{id:"services",className:"section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:e.ui.servicesTitle}),o.jsx("p",{className:"subtitle",children:e.ui.servicesSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsx("div",{className:"services-grid",children:t.map((n,r)=>o.jsxs("div",{className:"service-card",children:[o.jsx("div",{className:"service-icon-wrap",children:o.jsx(T,{name:n.icon,size:26,color:"var(--icon-default)"})}),o.jsx("h3",{className:"service-title",children:n.title}),o.jsx("p",{className:"service-desc",children:n.description}),o.jsxs("a",{href:"#services",className:"service-action",children:[n.action,o.jsx(T,{name:"arrow",size:15,color:"#c5a253"})]})]},r))})]}),o.jsx("style",{children:`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: var(--bg-card);
          border: 1px solid var(--border-default);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--mkn-gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-6px);
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .service-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: var(--tag-bg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }
        .service-card:hover .service-icon-wrap {
          background: var(--mkn-navy);
        }
        .service-card:hover .service-icon-wrap svg {
          fill: var(--mkn-gold) !important;
        }
        .service-title {
          font-size: 1.15rem;
          margin-bottom: 10px;
        }
        .service-desc {
          font-size: 0.88rem;
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .service-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--mkn-gold-dark);
          transition: gap 0.2s ease;
        }
        .service-action:hover {
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Xf(){const{t:e}=Ve(),{footerLinks:t,emergencyContacts:n}=e;return o.jsxs("footer",{id:"contact",children:[o.jsx("div",{className:"emergency-banner",children:o.jsxs("div",{className:"container emergency-inner",children:[o.jsxs("div",{className:"emergency-title",children:[o.jsx(T,{name:"alert",size:28,color:"#dc2626"}),o.jsxs("div",{children:[o.jsx("h3",{children:e.ui.emergencyContacts}),o.jsx("p",{children:e.ui.emergencyContactsSubtitle})]})]}),o.jsx("div",{className:"emergency-contacts",children:n.map((r,a)=>o.jsxs("div",{className:"emergency-contact-item",children:[o.jsx("div",{className:"emergency-contact-icon",children:o.jsx(T,{name:"phone",size:16,color:"#fff"})}),o.jsxs("div",{className:"emergency-contact-info",children:[o.jsx("span",{className:"emergency-contact-name",children:r.name}),o.jsx("span",{className:"emergency-contact-phone",children:r.phone}),o.jsxs("span",{className:"emergency-contact-hours",children:[o.jsx(T,{name:"clock",size:10,color:"#15803d"}),r.hours]})]})]},a))})]})}),o.jsxs("div",{className:"footer-main",children:[o.jsxs("div",{className:"container footer-grid",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsxs("div",{className:"footer-logo",children:[o.jsx("img",{src:"/mkn-portal/mkn-emblem.png",alt:"Majlis Keselamatan Negara",className:"footer-logo-img"}),o.jsxs("div",{children:[o.jsx("div",{className:"footer-logo-title",children:"MAJLIS KESELAMATAN NEGARA"}),o.jsx("div",{className:"footer-logo-sub",children:e.ui.logoSubtitle})]})]}),o.jsx("p",{className:"footer-desc",children:"Safeguarding Malaysia's sovereignty, territorial integrity, and public safety through strategic security policies, disaster management, and crisis coordination."}),o.jsxs("div",{className:"footer-address",children:[o.jsx(T,{name:"location",size:16,color:"#c5a253"}),o.jsx("span",{children:"Aras 5-9, Blok D4, Kompleks D, Pusat Pentadbiran Kerajaan Persekutuan, 62502 Putrajaya, Malaysia"})]}),o.jsxs("div",{className:"footer-contact-info",children:[o.jsxs("div",{className:"footer-contact-item",children:[o.jsx(T,{name:"phone",size:15,color:"#c5a253"}),o.jsx("span",{children:"+603-8888 4000"})]}),o.jsxs("div",{className:"footer-contact-item",children:[o.jsx(T,{name:"email",size:15,color:"#c5a253"}),o.jsx("span",{children:"pro@mkn.gov.my"})]})]})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.aboutMKN}),o.jsx("ul",{children:t.about.map((r,a)=>o.jsx("li",{children:o.jsx("a",{href:"#corporate",children:r})},a))})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.ourServices}),o.jsx("ul",{children:t.services.map((r,a)=>o.jsx("li",{children:o.jsx("a",{href:"#involvement",children:r})},a))})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.resources}),o.jsx("ul",{children:t.resources.map((r,a)=>o.jsx("li",{children:o.jsx("a",{href:"#services",children:r})},a))})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.government}),o.jsx("ul",{children:t.government.map((r,a)=>o.jsx("li",{children:o.jsxs("a",{href:"#footer",className:"footer-ext-link",children:[r,o.jsx(T,{name:"external",size:12,color:"#6b7280"})]})},a))})]})]}),o.jsxs("div",{className:"container footer-social",children:[o.jsxs("div",{className:"footer-social-left",children:[o.jsx("span",{className:"footer-social-label",children:e.ui.followUs}),o.jsx("div",{className:"footer-social-icons",children:["facebook","twitter","instagram","youtube"].map(r=>o.jsx("a",{href:"#footer",className:"footer-social-icon",children:o.jsx(T,{name:r,size:18,color:"#c5a253"})},r))})]}),o.jsxs("div",{className:"footer-newsletter",children:[o.jsx("span",{className:"footer-newsletter-label",children:e.ui.subscribeToUpdates}),o.jsxs("div",{className:"footer-newsletter-input",children:[o.jsx("input",{type:"email",placeholder:e.ui.enterEmail}),o.jsx("button",{className:"btn btn-primary footer-subscribe-btn",children:e.ui.subscribe})]})]})]})]}),o.jsx("div",{className:"footer-copyright",children:o.jsxs("div",{className:"container copyright-inner",children:[o.jsx("div",{className:"copyright-left",children:o.jsx("span",{children:e.ui.copyright})}),o.jsxs("div",{className:"copyright-links",children:[o.jsx("a",{href:"#privacy",children:e.ui.privacyPolicy}),o.jsx("a",{href:"#terms",children:e.ui.termsOfUse}),o.jsx("a",{href:"#disclaimer",children:e.ui.disclaimer}),o.jsx("a",{href:"#cookies",children:e.ui.cookiePolicy})]}),o.jsx("div",{className:"copyright-last",children:o.jsx("span",{children:e.ui.lastUpdated})})]})}),o.jsx("style",{children:`
        /* Emergency Banner */
        .emergency-banner {
          background: linear-gradient(135deg, #fef2f2, #fff7ed);
          border-top: 3px solid #dc2626;
          padding: 32px 0;
        }
        .emergency-inner {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          flex-wrap: wrap;
        }
        .emergency-title {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .emergency-title h3 {
          font-size: 1.1rem;
          color: #991b1b;
        }
        .emergency-title p {
          font-size: 0.82rem;
          color: var(--mkn-gray);
        }
        .emergency-contacts {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          flex: 1;
        }
        .emergency-contact-item {
          display: flex;
          gap: 10px;
          background: var(--mkn-white);
          padding: 14px;
          border-radius: 10px;
          border: 1px solid #fecaca;
          transition: all 0.2s ease;
        }
        .emergency-contact-item:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        .emergency-contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #dc2626;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .emergency-contact-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .emergency-contact-name {
          font-size: 0.72rem;
          color: var(--mkn-gray);
          font-weight: 600;
          line-height: 1.3;
        }
        .emergency-contact-phone {
          font-size: 1rem;
          font-weight: 800;
          color: var(--text-heading);
        }
        .emergency-contact-hours {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 0.68rem;
          color: #15803d;
          font-weight: 600;
        }

        /* Main Footer */
        .footer-main {
          background: var(--mkn-navy);
          padding: 56px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 32px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(197, 162, 83, 0.15);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .footer-logo-img {
          width: 56px;
          height: 56px;
          object-fit: contain;
        }
        .footer-logo-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--mkn-white);
          letter-spacing: 0.3px;
        }
        .footer-logo-sub {
          font-size: 0.72rem;
          color: var(--mkn-gold);
        }
        .footer-desc {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .footer-address {
          display: flex;
          gap: 8px;
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 12px;
          line-height: 1.6;
        }
        .footer-contact-info {
          display: flex;
          gap: 20px;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-col h4 {
          color: var(--mkn-gold);
          font-size: 0.92rem;
          margin-bottom: 16px;
          font-weight: 700;
        }
        .footer-col ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col a {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.55);
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .footer-col a:hover {
          color: var(--mkn-gold);
          padding-left: 4px;
        }
        .footer-ext-link svg {
          opacity: 0.5;
        }

        /* Social & Newsletter */
        .footer-social {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-social-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-social-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-social-icons {
          display: flex;
          gap: 8px;
        }
        .footer-social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(197, 162, 83, 0.1);
          border: 1px solid rgba(197, 162, 83, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .footer-social-icon:hover {
          background: var(--mkn-gold);
          transform: translateY(-2px);
        }
        .footer-social-icon:hover svg {
          fill: var(--mkn-navy) !important;
        }
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-newsletter-label {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
        }
        .footer-newsletter-input {
          display: flex;
          gap: 8px;
        }
        .footer-newsletter-input input {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid rgba(197, 162, 83, 0.3);
          background: rgba(255, 255, 255, 0.08);
          color: var(--mkn-white);
          font-size: 0.85rem;
          min-width: 260px;
          outline: none;
          transition: border-color 0.2s;
        }
        .footer-newsletter-input input::placeholder {
          color: rgba(255, 255, 255, 0.35);
        }
        .footer-newsletter-input input:focus {
          border-color: var(--mkn-gold);
        }
        .footer-subscribe-btn {
          padding: 10px 20px;
          font-size: 0.82rem;
        }

        /* Copyright */
        .footer-copyright {
          background: #061a33;
          padding: 16px 0;
          border-top: 1px solid rgba(197, 162, 83, 0.1);
        }
        .copyright-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .copyright-left span {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.4);
        }
        .copyright-links {
          display: flex;
          gap: 16px;
        }
        .copyright-links a {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          transition: color 0.2s;
        }
        .copyright-links a:hover {
          color: var(--mkn-gold);
        }
        .copyright-last span {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .emergency-contacts {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .emergency-inner {
            flex-direction: column;
          }
          .footer-social {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-newsletter-input input {
            min-width: 180px;
          }
          .copyright-inner {
            flex-direction: column;
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .emergency-contacts {
            grid-template-columns: 1fr;
          }
        }

        /* Dark Mode Emergency Banner */
        [data-theme="dark"] .emergency-banner {
          background: linear-gradient(135deg, #1a0a0a, #1a1010);
          border-top: 3px solid #dc2626;
        }
        [data-theme="dark"] .emergency-contact-item {
          background: var(--bg-card);
          border: 1px solid #4a2020;
        }
        [data-theme="dark"] .emergency-title h3 {
          color: #f87171;
        }
        [data-theme="dark"] .emergency-title p {
          color: var(--text-gray);
        }
      `})]})}function Zf(){return o.jsx(If,{children:o.jsxs(Rf,{children:[o.jsx(Of,{}),o.jsx(Ff,{}),o.jsxs("main",{children:[o.jsx(Vf,{}),o.jsx(Uf,{}),o.jsx(Bf,{}),o.jsx($f,{}),o.jsx(Hf,{}),o.jsx(Yf,{}),o.jsx(Gf,{})]}),o.jsx(Xf,{})]})})}nc(document.getElementById("root")).render(o.jsx(R.StrictMode,{children:o.jsx(Zf,{})}));
