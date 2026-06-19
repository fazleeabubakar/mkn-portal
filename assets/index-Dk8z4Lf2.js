(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var $o={exports:{}},ta={},Ho={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),ic=Symbol.for("react.portal"),lc=Symbol.for("react.fragment"),oc=Symbol.for("react.strict_mode"),sc=Symbol.for("react.profiler"),uc=Symbol.for("react.provider"),cc=Symbol.for("react.context"),dc=Symbol.for("react.forward_ref"),fc=Symbol.for("react.suspense"),pc=Symbol.for("react.memo"),mc=Symbol.for("react.lazy"),Dl=Symbol.iterator;function gc(e){return e===null||typeof e!="object"?null:(e=Dl&&e[Dl]||e["@@iterator"],typeof e=="function"?e:null)}var Wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qo=Object.assign,Yo={};function ot(e,n,t){this.props=e,this.context=n,this.refs=Yo,this.updater=t||Wo}ot.prototype.isReactComponent={};ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Go(){}Go.prototype=ot.prototype;function Oi(e,n,t){this.props=e,this.context=n,this.refs=Yo,this.updater=t||Wo}var Fi=Oi.prototype=new Go;Fi.constructor=Oi;Qo(Fi,ot.prototype);Fi.isPureReactComponent=!0;var Al=Array.isArray,Xo=Object.prototype.hasOwnProperty,Ui={current:null},Zo={key:!0,ref:!0,__self:!0,__source:!0};function Jo(e,n,t){var r,a={},i=null,l=null;if(n!=null)for(r in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Xo.call(n,r)&&!Zo.hasOwnProperty(r)&&(a[r]=n[r]);var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Xt,type:e,key:i,ref:l,props:a,_owner:Ui.current}}function hc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Vi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function vc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Il=/\/+/g;function wa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):n.toString(36)}function kr(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xt:case ic:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+wa(l,0):r,Al(a)?(t="",e!=null&&(t=e.replace(Il,"$&/")+"/"),kr(a,n,t,"",function(d){return d})):a!=null&&(Vi(a)&&(a=hc(a,t+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Il,"$&/")+"/")+e)),n.push(a)),1;if(l=0,r=r===""?".":r+":",Al(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+wa(i,s);l+=kr(i,n,t,u,a)}else if(u=gc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+wa(i,s++),l+=kr(i,n,t,u,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function rr(e,n,t){if(e==null)return e;var r=[],a=0;return kr(e,r,"","",function(i){return n.call(t,i,a++)}),r}function yc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},xc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Ui};function qo(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:rr,forEach:function(e,n,t){rr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return rr(e,function(){n++}),n},toArray:function(e){return rr(e,function(n){return n})||[]},only:function(e){if(!Vi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=ot;b.Fragment=lc;b.Profiler=sc;b.PureComponent=Oi;b.StrictMode=oc;b.Suspense=fc;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;b.act=qo;b.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qo({},e.props),a=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Ui.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in n)Xo.call(n,u)&&!Zo.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&s!==void 0?s[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Xt,type:e.type,key:a,ref:i,props:r,_owner:l}};b.createContext=function(e){return e={$$typeof:cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:uc,_context:e},e.Consumer=e};b.createElement=Jo;b.createFactory=function(e){var n=Jo.bind(null,e);return n.type=e,n};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:dc,render:e}};b.isValidElement=Vi;b.lazy=function(e){return{$$typeof:mc,_payload:{_status:-1,_result:e},_init:yc}};b.memo=function(e,n){return{$$typeof:pc,type:e,compare:n===void 0?null:n}};b.startTransition=function(e){var n=wr.transition;wr.transition={};try{e()}finally{wr.transition=n}};b.unstable_act=qo;b.useCallback=function(e,n){return ue.current.useCallback(e,n)};b.useContext=function(e){return ue.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};b.useEffect=function(e,n){return ue.current.useEffect(e,n)};b.useId=function(){return ue.current.useId()};b.useImperativeHandle=function(e,n,t){return ue.current.useImperativeHandle(e,n,t)};b.useInsertionEffect=function(e,n){return ue.current.useInsertionEffect(e,n)};b.useLayoutEffect=function(e,n){return ue.current.useLayoutEffect(e,n)};b.useMemo=function(e,n){return ue.current.useMemo(e,n)};b.useReducer=function(e,n,t){return ue.current.useReducer(e,n,t)};b.useRef=function(e){return ue.current.useRef(e)};b.useState=function(e){return ue.current.useState(e)};b.useSyncExternalStore=function(e,n,t){return ue.current.useSyncExternalStore(e,n,t)};b.useTransition=function(){return ue.current.useTransition()};b.version="18.3.1";Ho.exports=b;var ie=Ho.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=ie,wc=Symbol.for("react.element"),Sc=Symbol.for("react.fragment"),Nc=Object.prototype.hasOwnProperty,jc=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cc={key:!0,ref:!0,__self:!0,__source:!0};function es(e,n,t){var r,a={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(r in n)Nc.call(n,r)&&!Cc.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:wc,type:e,key:i,ref:l,props:a,_owner:jc.current}}ta.Fragment=Sc;ta.jsx=es;ta.jsxs=es;$o.exports=ta;var o=$o.exports,ns={exports:{}},ke={},ts={exports:{}},rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(j,z){var P=j.length;j.push(z);e:for(;0<P;){var H=P-1>>>1,X=j[H];if(0<a(X,z))j[H]=z,j[P]=X,P=H;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var z=j[0],P=j.pop();if(P!==z){j[0]=P;e:for(var H=0,X=j.length,nr=X>>>1;H<nr;){var xn=2*(H+1)-1,ka=j[xn],kn=xn+1,tr=j[kn];if(0>a(ka,P))kn<X&&0>a(tr,ka)?(j[H]=tr,j[kn]=P,H=kn):(j[H]=ka,j[xn]=P,H=xn);else if(kn<X&&0>a(tr,P))j[H]=tr,j[kn]=P,H=kn;else break e}}return z}function a(j,z){var P=j.sortIndex-z.sortIndex;return P!==0?P:j.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],h=1,g=null,m=3,x=!1,k=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var z=t(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=j)r(d),z.sortIndex=z.expirationTime,n(u,z);else break;z=t(d)}}function v(j){if(w=!1,p(j),!k)if(t(u)!==null)k=!0,ya(N);else{var z=t(d);z!==null&&xa(v,z.startTime-j)}}function N(j,z){k=!1,w&&(w=!1,f(E),E=-1),x=!0;var P=m;try{for(p(z),g=t(u);g!==null&&(!(g.expirationTime>z)||j&&!ze());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var X=H(g.expirationTime<=z);z=e.unstable_now(),typeof X=="function"?g.callback=X:g===t(u)&&r(u),p(z)}else r(u);g=t(u)}if(g!==null)var nr=!0;else{var xn=t(d);xn!==null&&xa(v,xn.startTime-z),nr=!1}return nr}finally{g=null,m=P,x=!1}}var C=!1,M=null,E=-1,$=5,_=-1;function ze(){return!(e.unstable_now()-_<$)}function ct(){if(M!==null){var j=e.unstable_now();_=j;var z=!0;try{z=M(!0,j)}finally{z?dt():(C=!1,M=null)}}else C=!1}var dt;if(typeof c=="function")dt=function(){c(ct)};else if(typeof MessageChannel<"u"){var Tl=new MessageChannel,ac=Tl.port2;Tl.port1.onmessage=ct,dt=function(){ac.postMessage(null)}}else dt=function(){R(ct,0)};function ya(j){M=j,C||(C=!0,dt())}function xa(j,z){E=R(function(){j(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,ya(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return j()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var P=m;m=j;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(j,z,P){var H=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?H+P:H):P=H,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=P+X,j={id:h++,callback:z,priorityLevel:j,startTime:P,expirationTime:X,sortIndex:-1},P>H?(j.sortIndex=P,n(d,j),t(u)===null&&j===t(d)&&(w?(f(E),E=-1):w=!0,xa(v,P-H))):(j.sortIndex=X,n(u,j),k||x||(k=!0,ya(N))),j},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(j){var z=m;return function(){var P=m;m=z;try{return j.apply(this,arguments)}finally{m=P}}}})(rs);ts.exports=rs;var Mc=ts.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=ie,xe=Mc;function y(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var as=new Set,Tt={};function Tn(e,n){et(e,n),et(e+"Capture",n)}function et(e,n){for(Tt[e]=n,e=0;e<n.length;e++)as.add(n[e])}var We=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qa=Object.prototype.hasOwnProperty,zc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kl={},Rl={};function Pc(e){return Qa.call(Rl,e)?!0:Qa.call(Kl,e)?!1:zc.test(e)?Rl[e]=!0:(Kl[e]=!0,!1)}function bc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,n,t,r){if(n===null||typeof n>"u"||bc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,r,a,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ne[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bi=/[\-:]([a-z])/g;function $i(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Bi,$i);ne[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Bi,$i);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Bi,$i);ne[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hi(e,n,t,r){var a=ne.hasOwnProperty(n)?ne[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_c(n,t,a,r)&&(t=null),r||a===null?Pc(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ar=Symbol.for("react.element"),In=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),Ya=Symbol.for("react.profiler"),is=Symbol.for("react.provider"),ls=Symbol.for("react.context"),Qi=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),os=Symbol.for("react.offscreen"),Ol=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=Ol&&e[Ol]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Sa;function kt(e){if(Sa===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sa=n&&n[1]||""}return`
`+Sa+e}var Na=!1;function ja(e,n){if(!e||Na)return"";Na=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Na=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?kt(e):""}function Lc(e){switch(e.tag){case 5:return kt(e.type);case 16:return kt("Lazy");case 13:return kt("Suspense");case 19:return kt("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case In:return"Portal";case Ya:return"Profiler";case Wi:return"StrictMode";case Ga:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ls:return(e.displayName||"Context")+".Consumer";case is:return(e._context.displayName||"Context")+".Provider";case Qi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return n=e.displayName||null,n!==null?n:Za(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return Za(e(n))}catch{}}return null}function Tc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(n);case 8:return n===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ss(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Dc(e){var n=ss(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ir(e){e._valueTracker||(e._valueTracker=Dc(e))}function us(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=ss(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Lr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,n){var t=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Fl(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=mn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function cs(e,n){n=n.checked,n!=null&&Hi(e,"checked",n,!1)}function qa(e,n){cs(e,n);var t=mn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ei(e,n.type,t):n.hasOwnProperty("defaultValue")&&ei(e,n.type,mn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ul(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ei(e,n,t){(n!=="number"||Lr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var wt=Array.isArray;function Yn(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+mn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function ni(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(y(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vl(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(y(92));if(wt(t)){if(1<t.length)throw Error(y(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mn(t)}}function ds(e,n){var t=mn(n.value),r=mn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Bl(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Dt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var jt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ac=["Webkit","ms","Moz","O"];Object.keys(jt).forEach(function(e){Ac.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),jt[n]=jt[e]})});function ms(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||jt.hasOwnProperty(e)&&jt[e]?(""+n).trim():n+"px"}function gs(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=ms(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var Ic=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,n){if(n){if(Ic[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(y(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(y(61))}if(n.style!=null&&typeof n.style!="object")throw Error(y(62))}}function ai(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function Gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var li=null,Gn=null,Xn=null;function $l(e){if(e=qt(e)){if(typeof li!="function")throw Error(y(280));var n=e.stateNode;n&&(n=oa(n),li(e.stateNode,e.type,n))}}function hs(e){Gn?Xn?Xn.push(e):Xn=[e]:Gn=e}function vs(){if(Gn){var e=Gn,n=Xn;if(Xn=Gn=null,$l(e),n)for(e=0;e<n.length;e++)$l(n[e])}}function ys(e,n){return e(n)}function xs(){}var Ca=!1;function ks(e,n,t){if(Ca)return e(n,t);Ca=!0;try{return ys(e,n,t)}finally{Ca=!1,(Gn!==null||Xn!==null)&&(xs(),vs())}}function At(e,n){var t=e.stateNode;if(t===null)return null;var r=oa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(y(231,n,typeof t));return t}var oi=!1;if(We)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){oi=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{oi=!1}function Kc(e,n,t,r,a,i,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(h){this.onError(h)}}var Ct=!1,Tr=null,Dr=!1,si=null,Rc={onError:function(e){Ct=!0,Tr=e}};function Oc(e,n,t,r,a,i,l,s,u){Ct=!1,Tr=null,Kc.apply(Rc,arguments)}function Fc(e,n,t,r,a,i,l,s,u){if(Oc.apply(this,arguments),Ct){if(Ct){var d=Tr;Ct=!1,Tr=null}else throw Error(y(198));Dr||(Dr=!0,si=d)}}function Dn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ws(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Hl(e){if(Dn(e)!==e)throw Error(y(188))}function Uc(e){var n=e.alternate;if(!n){if(n=Dn(e),n===null)throw Error(y(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return Hl(a),e;if(i===r)return Hl(a),n;i=i.sibling}throw Error(y(188))}if(t.return!==r.return)t=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===t){l=!0,t=a,r=i;break}if(s===r){l=!0,r=a,t=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===t){l=!0,t=i,r=a;break}if(s===r){l=!0,r=i,t=a;break}s=s.sibling}if(!l)throw Error(y(189))}}if(t.alternate!==r)throw Error(y(190))}if(t.tag!==3)throw Error(y(188));return t.stateNode.current===t?e:n}function Ss(e){return e=Uc(e),e!==null?Ns(e):null}function Ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ns(e);if(n!==null)return n;e=e.sibling}return null}var js=xe.unstable_scheduleCallback,Wl=xe.unstable_cancelCallback,Vc=xe.unstable_shouldYield,Bc=xe.unstable_requestPaint,W=xe.unstable_now,$c=xe.unstable_getCurrentPriorityLevel,Xi=xe.unstable_ImmediatePriority,Cs=xe.unstable_UserBlockingPriority,Ar=xe.unstable_NormalPriority,Hc=xe.unstable_LowPriority,Ms=xe.unstable_IdlePriority,ra=null,Oe=null;function Wc(e){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Gc,Qc=Math.log,Yc=Math.LN2;function Gc(e){return e>>>=0,e===0?32:31-(Qc(e)/Yc|0)|0}var or=64,sr=4194304;function St(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ir(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var s=l&~a;s!==0?r=St(s):(i&=l,i!==0&&(r=St(i)))}else l=t&~a,l!==0?r=St(l):i!==0&&(r=St(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Te(n),a=1<<t,r|=e[t],n&=~a;return r}function Xc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Te(i),s=1<<l,u=a[l];u===-1?(!(s&t)||s&r)&&(a[l]=Xc(s,n)):u<=n&&(e.expiredLanes|=s),i&=~s}}function ui(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Es(){var e=or;return or<<=1,!(or&4194240)&&(or=64),e}function Ma(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Zt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function Jc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Te(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function Zi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Te(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var D=0;function zs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ps,Ji,bs,_s,Ls,ci=!1,ur=[],ln=null,on=null,sn=null,It=new Map,Kt=new Map,nn=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(e,n){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":It.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kt.delete(n.pointerId)}}function mt(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=qt(n),n!==null&&Ji(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function ed(e,n,t,r,a){switch(n){case"focusin":return ln=mt(ln,e,n,t,r,a),!0;case"dragenter":return on=mt(on,e,n,t,r,a),!0;case"mouseover":return sn=mt(sn,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return It.set(i,mt(It.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Kt.set(i,mt(Kt.get(i)||null,e,n,t,r,a)),!0}return!1}function Ts(e){var n=Nn(e.target);if(n!==null){var t=Dn(n);if(t!==null){if(n=t.tag,n===13){if(n=ws(t),n!==null){e.blockedOn=n,Ls(e.priority,function(){bs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=di(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ii=r,t.target.dispatchEvent(r),ii=null}else return n=qt(t),n!==null&&Ji(n),e.blockedOn=t,!1;n.shift()}return!0}function Yl(e,n,t){Sr(e)&&t.delete(n)}function nd(){ci=!1,ln!==null&&Sr(ln)&&(ln=null),on!==null&&Sr(on)&&(on=null),sn!==null&&Sr(sn)&&(sn=null),It.forEach(Yl),Kt.forEach(Yl)}function gt(e,n){e.blockedOn===n&&(e.blockedOn=null,ci||(ci=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,nd)))}function Rt(e){function n(a){return gt(a,e)}if(0<ur.length){gt(ur[0],e);for(var t=1;t<ur.length;t++){var r=ur[t];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&gt(ln,e),on!==null&&gt(on,e),sn!==null&&gt(sn,e),It.forEach(n),Kt.forEach(n),t=0;t<nn.length;t++)r=nn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)Ts(t),t.blockedOn===null&&nn.shift()}var Zn=Xe.ReactCurrentBatchConfig,Kr=!0;function td(e,n,t,r){var a=D,i=Zn.transition;Zn.transition=null;try{D=1,qi(e,n,t,r)}finally{D=a,Zn.transition=i}}function rd(e,n,t,r){var a=D,i=Zn.transition;Zn.transition=null;try{D=4,qi(e,n,t,r)}finally{D=a,Zn.transition=i}}function qi(e,n,t,r){if(Kr){var a=di(e,n,t,r);if(a===null)Ia(e,n,r,Rr,t),Ql(e,r);else if(ed(a,e,n,t,r))r.stopPropagation();else if(Ql(e,r),n&4&&-1<qc.indexOf(e)){for(;a!==null;){var i=qt(a);if(i!==null&&Ps(i),i=di(e,n,t,r),i===null&&Ia(e,n,r,Rr,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ia(e,n,r,null,t)}}var Rr=null;function di(e,n,t,r){if(Rr=null,e=Gi(r),e=Nn(e),e!==null)if(n=Dn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ws(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Rr=e,null}function Ds(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($c()){case Xi:return 1;case Cs:return 4;case Ar:case Hc:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var rn=null,el=null,Nr=null;function As(){if(Nr)return Nr;var e,n=el,t=n.length,r,a="value"in rn?rn.value:rn.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===a[i-r];r++);return Nr=a.slice(e,1<r?1-r:void 0)}function jr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cr(){return!0}function Gl(){return!1}function we(e){function n(t,r,a,i,l){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cr:Gl,this.isPropagationStopped=Gl,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=cr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=cr)},persist:function(){},isPersistent:cr}),n}var st={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=we(st),Jt=V({},st,{view:0,detail:0}),ad=we(Jt),Ea,za,ht,aa=V({},Jt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ht&&(ht&&e.type==="mousemove"?(Ea=e.screenX-ht.screenX,za=e.screenY-ht.screenY):za=Ea=0,ht=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:za}}),Xl=we(aa),id=V({},aa,{dataTransfer:0}),ld=we(id),od=V({},Jt,{relatedTarget:0}),Pa=we(od),sd=V({},st,{animationName:0,elapsedTime:0,pseudoElement:0}),ud=we(sd),cd=V({},st,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dd=we(cd),fd=V({},st,{data:0}),Zl=we(fd),pd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},md={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gd[e])?!!n[e]:!1}function tl(){return hd}var vd=V({},Jt,{key:function(e){if(e.key){var n=pd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?md[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=we(vd),xd=V({},aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=we(xd),kd=V({},Jt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),wd=we(kd),Sd=V({},st,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=we(Sd),jd=V({},aa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=we(jd),Md=[9,13,27,32],rl=We&&"CompositionEvent"in window,Mt=null;We&&"documentMode"in document&&(Mt=document.documentMode);var Ed=We&&"TextEvent"in window&&!Mt,Is=We&&(!rl||Mt&&8<Mt&&11>=Mt),ql=" ",eo=!1;function Ks(e,n){switch(e){case"keyup":return Md.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function zd(e,n){switch(e){case"compositionend":return Rs(n);case"keypress":return n.which!==32?null:(eo=!0,ql);case"textInput":return e=n.data,e===ql&&eo?null:e;default:return null}}function Pd(e,n){if(Rn)return e==="compositionend"||!rl&&Ks(e,n)?(e=As(),Nr=el=rn=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Is&&n.locale!=="ko"?null:n.data;default:return null}}var bd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function no(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bd[e.type]:n==="textarea"}function Os(e,n,t,r){hs(r),n=Or(n,"onChange"),0<n.length&&(t=new nl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Et=null,Ot=null;function _d(e){Xs(e,0)}function ia(e){var n=Un(e);if(us(n))return e}function Ld(e,n){if(e==="change")return n}var Fs=!1;if(We){var ba;if(We){var _a="oninput"in document;if(!_a){var to=document.createElement("div");to.setAttribute("oninput","return;"),_a=typeof to.oninput=="function"}ba=_a}else ba=!1;Fs=ba&&(!document.documentMode||9<document.documentMode)}function ro(){Et&&(Et.detachEvent("onpropertychange",Us),Ot=Et=null)}function Us(e){if(e.propertyName==="value"&&ia(Ot)){var n=[];Os(n,Ot,e,Gi(e)),ks(_d,n)}}function Td(e,n,t){e==="focusin"?(ro(),Et=n,Ot=t,Et.attachEvent("onpropertychange",Us)):e==="focusout"&&ro()}function Dd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(Ot)}function Ad(e,n){if(e==="click")return ia(n)}function Id(e,n){if(e==="input"||e==="change")return ia(n)}function Kd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ae=typeof Object.is=="function"?Object.is:Kd;function Ft(e,n){if(Ae(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Qa.call(n,a)||!Ae(e[a],n[a]))return!1}return!0}function ao(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function io(e,n){var t=ao(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ao(t)}}function Vs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bs(){for(var e=window,n=Lr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Lr(e.document)}return n}function al(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Rd(e){var n=Bs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vs(t.ownerDocument.documentElement,t)){if(r!==null&&al(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=io(t,i);var l=io(t,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Od=We&&"documentMode"in document&&11>=document.documentMode,On=null,fi=null,zt=null,pi=!1;function lo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pi||On==null||On!==Lr(r)||(r=On,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zt&&Ft(zt,r)||(zt=r,r=Or(fi,"onSelect"),0<r.length&&(n=new nl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=On)))}function dr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Fn={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionend:dr("Transition","TransitionEnd")},La={},$s={};We&&($s=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function la(e){if(La[e])return La[e];if(!Fn[e])return e;var n=Fn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in $s)return La[e]=n[t];return e}var Hs=la("animationend"),Ws=la("animationiteration"),Qs=la("animationstart"),Ys=la("transitionend"),Gs=new Map,oo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,n){Gs.set(e,n),Tn(n,[e])}for(var Ta=0;Ta<oo.length;Ta++){var Da=oo[Ta],Fd=Da.toLowerCase(),Ud=Da[0].toUpperCase()+Da.slice(1);hn(Fd,"on"+Ud)}hn(Hs,"onAnimationEnd");hn(Ws,"onAnimationIteration");hn(Qs,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Ys,"onTransitionEnd");et("onMouseEnter",["mouseout","mouseover"]);et("onMouseLeave",["mouseout","mouseover"]);et("onPointerEnter",["pointerout","pointerover"]);et("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nt));function so(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Fc(r,n,void 0,e),e.currentTarget=null}function Xs(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;so(a,s,d),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;so(a,s,d),i=u}}}if(Dr)throw e=si,Dr=!1,si=null,e}function I(e,n){var t=n[yi];t===void 0&&(t=n[yi]=new Set);var r=e+"__bubble";t.has(r)||(Zs(n,e,2,!1),t.add(r))}function Aa(e,n,t){var r=0;n&&(r|=4),Zs(t,e,r,n)}var fr="_reactListening"+Math.random().toString(36).slice(2);function Ut(e){if(!e[fr]){e[fr]=!0,as.forEach(function(t){t!=="selectionchange"&&(Vd.has(t)||Aa(t,!1,e),Aa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fr]||(n[fr]=!0,Aa("selectionchange",!1,n))}}function Zs(e,n,t,r){switch(Ds(n)){case 1:var a=td;break;case 4:a=rd;break;default:a=qi}t=a.bind(null,n,t,e),a=void 0,!oi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ia(e,n,t,r,a){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;s!==null;){if(l=Nn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}ks(function(){var d=i,h=Gi(t),g=[];e:{var m=Gs.get(e);if(m!==void 0){var x=nl,k=e;switch(e){case"keypress":if(jr(t)===0)break e;case"keydown":case"keyup":x=yd;break;case"focusin":k="focus",x=Pa;break;case"focusout":k="blur",x=Pa;break;case"beforeblur":case"afterblur":x=Pa;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Xl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ld;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=wd;break;case Hs:case Ws:case Qs:x=ud;break;case Ys:x=Nd;break;case"scroll":x=ad;break;case"wheel":x=Cd;break;case"copy":case"cut":case"paste":x=dd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Jl}var w=(n&4)!==0,R=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=At(c,f),v!=null&&w.push(Vt(c,v,p)))),R)break;c=c.return}0<w.length&&(m=new x(m,k,null,t,h),g.push({event:m,listeners:w}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&t!==ii&&(k=t.relatedTarget||t.fromElement)&&(Nn(k)||k[Qe]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=t.relatedTarget||t.toElement,x=d,k=k?Nn(k):null,k!==null&&(R=Dn(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=d),x!==k)){if(w=Xl,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Jl,v="onPointerLeave",f="onPointerEnter",c="pointer"),R=x==null?m:Un(x),p=k==null?m:Un(k),m=new w(v,c+"leave",x,t,h),m.target=R,m.relatedTarget=p,v=null,Nn(h)===d&&(w=new w(f,c+"enter",k,t,h),w.target=p,w.relatedTarget=R,v=w),R=v,x&&k)n:{for(w=x,f=k,c=0,p=w;p;p=An(p))c++;for(p=0,v=f;v;v=An(v))p++;for(;0<c-p;)w=An(w),c--;for(;0<p-c;)f=An(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break n;w=An(w),f=An(f)}w=null}else w=null;x!==null&&uo(g,m,x,w,!1),k!==null&&R!==null&&uo(g,R,k,w,!0)}}e:{if(m=d?Un(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=Ld;else if(no(m))if(Fs)N=Id;else{N=Dd;var C=Td}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Ad);if(N&&(N=N(e,d))){Os(g,N,t,h);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ei(m,"number",m.value)}switch(C=d?Un(d):window,e){case"focusin":(no(C)||C.contentEditable==="true")&&(On=C,fi=d,zt=null);break;case"focusout":zt=fi=On=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,lo(g,t,h);break;case"selectionchange":if(Od)break;case"keydown":case"keyup":lo(g,t,h)}var M;if(rl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Rn?Ks(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(Is&&t.locale!=="ko"&&(Rn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Rn&&(M=As()):(rn=h,el="value"in rn?rn.value:rn.textContent,Rn=!0)),C=Or(d,E),0<C.length&&(E=new Zl(E,e,null,t,h),g.push({event:E,listeners:C}),M?E.data=M:(M=Rs(t),M!==null&&(E.data=M)))),(M=Ed?zd(e,t):Pd(e,t))&&(d=Or(d,"onBeforeInput"),0<d.length&&(h=new Zl("onBeforeInput","beforeinput",null,t,h),g.push({event:h,listeners:d}),h.data=M))}Xs(g,n)})}function Vt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Or(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=At(e,t),i!=null&&r.unshift(Vt(e,i,a)),i=At(e,n),i!=null&&r.push(Vt(e,i,a))),e=e.return}return r}function An(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uo(e,n,t,r,a){for(var i=n._reactName,l=[];t!==null&&t!==r;){var s=t,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,a?(u=At(t,i),u!=null&&l.unshift(Vt(t,u,s))):a||(u=At(t,i),u!=null&&l.push(Vt(t,u,s)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Bd=/\r\n?/g,$d=/\u0000|\uFFFD/g;function co(e){return(typeof e=="string"?e:""+e).replace(Bd,`
`).replace($d,"")}function pr(e,n,t){if(n=co(n),co(e)!==n&&t)throw Error(y(425))}function Fr(){}var mi=null,gi=null;function hi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,fo=typeof Promise=="function"?Promise:void 0,Wd=typeof queueMicrotask=="function"?queueMicrotask:typeof fo<"u"?function(e){return fo.resolve(null).then(e).catch(Qd)}:vi;function Qd(e){setTimeout(function(){throw e})}function Ka(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),Rt(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);Rt(n)}function un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function po(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ut=Math.random().toString(36).slice(2),Re="__reactFiber$"+ut,Bt="__reactProps$"+ut,Qe="__reactContainer$"+ut,yi="__reactEvents$"+ut,Yd="__reactListeners$"+ut,Gd="__reactHandles$"+ut;function Nn(e){var n=e[Re];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[Re]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=po(e);e!==null;){if(t=e[Re])return t;e=po(e)}return n}e=t,t=e.parentNode}return null}function qt(e){return e=e[Re]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function oa(e){return e[Bt]||null}var xi=[],Vn=-1;function vn(e){return{current:e}}function K(e){0>Vn||(e.current=xi[Vn],xi[Vn]=null,Vn--)}function A(e,n){Vn++,xi[Vn]=e.current,e.current=n}var gn={},le=vn(gn),pe=vn(!1),zn=gn;function nt(e,n){var t=e.type.contextTypes;if(!t)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function me(e){return e=e.childContextTypes,e!=null}function Ur(){K(pe),K(le)}function mo(e,n,t){if(le.current!==gn)throw Error(y(168));A(le,n),A(pe,t)}function Js(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(y(108,Tc(e)||"Unknown",a));return V({},t,r)}function Vr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,zn=le.current,A(le,e),A(pe,pe.current),!0}function go(e,n,t){var r=e.stateNode;if(!r)throw Error(y(169));t?(e=Js(e,n,zn),r.__reactInternalMemoizedMergedChildContext=e,K(pe),K(le),A(le,e)):K(pe),A(pe,t)}var Ve=null,sa=!1,Ra=!1;function qs(e){Ve===null?Ve=[e]:Ve.push(e)}function Xd(e){sa=!0,qs(e)}function yn(){if(!Ra&&Ve!==null){Ra=!0;var e=0,n=D;try{var t=Ve;for(D=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ve=null,sa=!1}catch(a){throw Ve!==null&&(Ve=Ve.slice(e+1)),js(Xi,yn),a}finally{D=n,Ra=!1}}return null}var Bn=[],$n=0,Br=null,$r=0,Se=[],Ne=0,Pn=null,Be=1,$e="";function wn(e,n){Bn[$n++]=$r,Bn[$n++]=Br,Br=e,$r=n}function eu(e,n,t){Se[Ne++]=Be,Se[Ne++]=$e,Se[Ne++]=Pn,Pn=e;var r=Be;e=$e;var a=32-Te(r)-1;r&=~(1<<a),t+=1;var i=32-Te(n)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Be=1<<32-Te(n)+a|t<<a|r,$e=i+e}else Be=1<<i|t<<a|r,$e=e}function il(e){e.return!==null&&(wn(e,1),eu(e,1,0))}function ll(e){for(;e===Br;)Br=Bn[--$n],Bn[$n]=null,$r=Bn[--$n],Bn[$n]=null;for(;e===Pn;)Pn=Se[--Ne],Se[Ne]=null,$e=Se[--Ne],Se[Ne]=null,Be=Se[--Ne],Se[Ne]=null}var ye=null,ve=null,O=!1,Le=null;function nu(e,n){var t=je(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ho(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ye=e,ve=un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ye=e,ve=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Pn!==null?{id:Be,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=je(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ye=e,ve=null,!0):!1;default:return!1}}function ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wi(e){if(O){var n=ve;if(n){var t=n;if(!ho(e,n)){if(ki(e))throw Error(y(418));n=un(t.nextSibling);var r=ye;n&&ho(e,n)?nu(r,t):(e.flags=e.flags&-4097|2,O=!1,ye=e)}}else{if(ki(e))throw Error(y(418));e.flags=e.flags&-4097|2,O=!1,ye=e}}}function vo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function mr(e){if(e!==ye)return!1;if(!O)return vo(e),O=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!hi(e.type,e.memoizedProps)),n&&(n=ve)){if(ki(e))throw tu(),Error(y(418));for(;n;)nu(e,n),n=un(n.nextSibling)}if(vo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ve=un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ve=null}}else ve=ye?un(e.stateNode.nextSibling):null;return!0}function tu(){for(var e=ve;e;)e=un(e.nextSibling)}function tt(){ve=ye=null,O=!1}function ol(e){Le===null?Le=[e]:Le.push(e)}var Zd=Xe.ReactCurrentBatchConfig;function vt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(y(309));var r=t.stateNode}if(!r)throw Error(y(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(y(284));if(!t._owner)throw Error(y(290,e))}return e}function gr(e,n){throw e=Object.prototype.toString.call(n),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function yo(e){var n=e._init;return n(e._payload)}function ru(e){function n(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function t(f,c){if(!e)return null;for(;c!==null;)n(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function a(f,c){return f=pn(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=Ha(p,f.mode,v),c.return=f,c):(c=a(c,p),c.return=f,c)}function u(f,c,p,v){var N=p.type;return N===Kn?h(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&yo(N)===c.type)?(v=a(c,p.props),v.ref=vt(f,c,p),v.return=f,v):(v=_r(p.type,p.key,p.props,null,f.mode,v),v.ref=vt(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Wa(p,f.mode,v),c.return=f,c):(c=a(c,p.children||[]),c.return=f,c)}function h(f,c,p,v,N){return c===null||c.tag!==7?(c=En(p,f.mode,v,N),c.return=f,c):(c=a(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ha(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ar:return p=_r(c.type,c.key,c.props,null,f.mode,p),p.ref=vt(f,null,c),p.return=f,p;case In:return c=Wa(c,f.mode,p),c.return=f,c;case qe:var v=c._init;return g(f,v(c._payload),p)}if(wt(c)||ft(c))return c=En(c,f.mode,p,null),c.return=f,c;gr(f,c)}return null}function m(f,c,p,v){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:return p.key===N?u(f,c,p,v):null;case In:return p.key===N?d(f,c,p,v):null;case qe:return N=p._init,m(f,c,N(p._payload),v)}if(wt(p)||ft(p))return N!==null?null:h(f,c,p,v,null);gr(f,p)}return null}function x(f,c,p,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ar:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,N);case In:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,N);case qe:var C=v._init;return x(f,c,p,C(v._payload),N)}if(wt(v)||ft(v))return f=f.get(p)||null,h(c,f,v,N,null);gr(c,v)}return null}function k(f,c,p,v){for(var N=null,C=null,M=c,E=c=0,$=null;M!==null&&E<p.length;E++){M.index>E?($=M,M=null):$=M.sibling;var _=m(f,M,p[E],v);if(_===null){M===null&&(M=$);break}e&&M&&_.alternate===null&&n(f,M),c=i(_,c,E),C===null?N=_:C.sibling=_,C=_,M=$}if(E===p.length)return t(f,M),O&&wn(f,E),N;if(M===null){for(;E<p.length;E++)M=g(f,p[E],v),M!==null&&(c=i(M,c,E),C===null?N=M:C.sibling=M,C=M);return O&&wn(f,E),N}for(M=r(f,M);E<p.length;E++)$=x(M,f,E,p[E],v),$!==null&&(e&&$.alternate!==null&&M.delete($.key===null?E:$.key),c=i($,c,E),C===null?N=$:C.sibling=$,C=$);return e&&M.forEach(function(ze){return n(f,ze)}),O&&wn(f,E),N}function w(f,c,p,v){var N=ft(p);if(typeof N!="function")throw Error(y(150));if(p=N.call(p),p==null)throw Error(y(151));for(var C=N=null,M=c,E=c=0,$=null,_=p.next();M!==null&&!_.done;E++,_=p.next()){M.index>E?($=M,M=null):$=M.sibling;var ze=m(f,M,_.value,v);if(ze===null){M===null&&(M=$);break}e&&M&&ze.alternate===null&&n(f,M),c=i(ze,c,E),C===null?N=ze:C.sibling=ze,C=ze,M=$}if(_.done)return t(f,M),O&&wn(f,E),N;if(M===null){for(;!_.done;E++,_=p.next())_=g(f,_.value,v),_!==null&&(c=i(_,c,E),C===null?N=_:C.sibling=_,C=_);return O&&wn(f,E),N}for(M=r(f,M);!_.done;E++,_=p.next())_=x(M,f,E,_.value,v),_!==null&&(e&&_.alternate!==null&&M.delete(_.key===null?E:_.key),c=i(_,c,E),C===null?N=_:C.sibling=_,C=_);return e&&M.forEach(function(ct){return n(f,ct)}),O&&wn(f,E),N}function R(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Kn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ar:e:{for(var N=p.key,C=c;C!==null;){if(C.key===N){if(N=p.type,N===Kn){if(C.tag===7){t(f,C.sibling),c=a(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qe&&yo(N)===C.type){t(f,C.sibling),c=a(C,p.props),c.ref=vt(f,C,p),c.return=f,f=c;break e}t(f,C);break}else n(f,C);C=C.sibling}p.type===Kn?(c=En(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=_r(p.type,p.key,p.props,null,f.mode,v),v.ref=vt(f,c,p),v.return=f,f=v)}return l(f);case In:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){t(f,c.sibling),c=a(c,p.children||[]),c.return=f,f=c;break e}else{t(f,c);break}else n(f,c);c=c.sibling}c=Wa(p,f.mode,v),c.return=f,f=c}return l(f);case qe:return C=p._init,R(f,c,C(p._payload),v)}if(wt(p))return k(f,c,p,v);if(ft(p))return w(f,c,p,v);gr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(t(f,c.sibling),c=a(c,p),c.return=f,f=c):(t(f,c),c=Ha(p,f.mode,v),c.return=f,f=c),l(f)):t(f,c)}return R}var rt=ru(!0),au=ru(!1),Hr=vn(null),Wr=null,Hn=null,sl=null;function ul(){sl=Hn=Wr=null}function cl(e){var n=Hr.current;K(Hr),e._currentValue=n}function Si(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Jn(e,n){Wr=e,sl=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Me(e){var n=e._currentValue;if(sl!==e)if(e={context:e,memoizedValue:n,next:null},Hn===null){if(Wr===null)throw Error(y(308));Hn=e,Wr.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return n}var jn=null;function dl(e){jn===null?jn=[e]:jn.push(e)}function iu(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,dl(n)):(t.next=a.next,a.next=t),n.interleaved=t,Ye(e,r)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function cn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Ye(e,t)}return a=r.interleaved,a===null?(n.next=n,dl(r)):(n.next=a.next,a.next=n),r.interleaved=n,Ye(e,t)}function Cr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zi(e,t)}}function xo(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Qr(e,n,t,r){var a=e.updateQueue;en=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?i=d:l.next=d,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(i!==null){var g=a.baseState;l=0,h=d=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,w=s;switch(m=n,x=t,w.tag){case 1:if(k=w.payload,typeof k=="function"){g=k.call(x,g,m);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(x,g,m):k,m==null)break e;g=V({},g,m);break e;case 2:en=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=x,u=g):h=h.next=x,l|=m;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;m=s,s=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(h===null&&(u=g),a.baseState=u,a.firstBaseUpdate=d,a.lastBaseUpdate=h,n=a.shared.interleaved,n!==null){a=n;do l|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);_n|=l,e.lanes=l,e.memoizedState=g}}function ko(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(y(191,a));a.call(r)}}}var er={},Fe=vn(er),$t=vn(er),Ht=vn(er);function Cn(e){if(e===er)throw Error(y(174));return e}function pl(e,n){switch(A(Ht,n),A($t,e),A(Fe,er),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ti(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ti(n,e)}K(Fe),A(Fe,n)}function at(){K(Fe),K($t),K(Ht)}function ou(e){Cn(Ht.current);var n=Cn(Fe.current),t=ti(n,e.type);n!==t&&(A($t,e),A(Fe,t))}function ml(e){$t.current===e&&(K(Fe),K($t))}var F=vn(0);function Yr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=[];function gl(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var Mr=Xe.ReactCurrentDispatcher,Fa=Xe.ReactCurrentBatchConfig,bn=0,U=null,Y=null,Z=null,Gr=!1,Pt=!1,Wt=0,Jd=0;function te(){throw Error(y(321))}function hl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ae(e[t],n[t]))return!1;return!0}function vl(e,n,t,r,a,i){if(bn=i,U=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mr.current=e===null||e.memoizedState===null?tf:rf,e=t(r,a),Pt){i=0;do{if(Pt=!1,Wt=0,25<=i)throw Error(y(301));i+=1,Z=Y=null,n.updateQueue=null,Mr.current=af,e=t(r,a)}while(Pt)}if(Mr.current=Xr,n=Y!==null&&Y.next!==null,bn=0,Z=Y=U=null,Gr=!1,n)throw Error(y(300));return e}function yl(){var e=Wt!==0;return Wt=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?U.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var n=Z===null?U.memoizedState:Z.next;if(n!==null)Z=n,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?U.memoizedState=Z=e:Z=Z.next=e}return Z}function Qt(e,n){return typeof n=="function"?n(e):n}function Ua(e){var n=Ee(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=Y,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,u=null,d=i;do{var h=d.lane;if((bn&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,U.lanes|=h,_n|=h}d=d.next}while(d!==null&&d!==i);u===null?l=r:u.next=s,Ae(r,n.memoizedState)||(fe=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,U.lanes|=i,_n|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Va(e){var n=Ee(),t=n.queue;if(t===null)throw Error(y(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);Ae(i,n.memoizedState)||(fe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function su(){}function uu(e,n){var t=U,r=Ee(),a=n(),i=!Ae(r.memoizedState,a);if(i&&(r.memoizedState=a,fe=!0),r=r.queue,xl(fu.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,Yt(9,du.bind(null,t,r,a,n),void 0,null),J===null)throw Error(y(349));bn&30||cu(t,n,a)}return a}function cu(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function du(e,n,t,r){n.value=t,n.getSnapshot=r,pu(n)&&mu(e)}function fu(e,n,t){return t(function(){pu(n)&&mu(e)})}function pu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ae(e,t)}catch{return!0}}function mu(e){var n=Ye(e,1);n!==null&&De(n,e,1,-1)}function wo(e){var n=Ke();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},n.queue=e,e=e.dispatch=nf.bind(null,U,e),[n.memoizedState,e]}function Yt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=U.updateQueue,n===null?(n={lastEffect:null,stores:null},U.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function gu(){return Ee().memoizedState}function Er(e,n,t,r){var a=Ke();U.flags|=e,a.memoizedState=Yt(1|n,t,void 0,r===void 0?null:r)}function ua(e,n,t,r){var a=Ee();r=r===void 0?null:r;var i=void 0;if(Y!==null){var l=Y.memoizedState;if(i=l.destroy,r!==null&&hl(r,l.deps)){a.memoizedState=Yt(n,t,i,r);return}}U.flags|=e,a.memoizedState=Yt(1|n,t,i,r)}function So(e,n){return Er(8390656,8,e,n)}function xl(e,n){return ua(2048,8,e,n)}function hu(e,n){return ua(4,2,e,n)}function vu(e,n){return ua(4,4,e,n)}function yu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xu(e,n,t){return t=t!=null?t.concat([e]):null,ua(4,4,yu.bind(null,n,e),t)}function kl(){}function ku(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function wu(e,n){var t=Ee();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&hl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Su(e,n,t){return bn&21?(Ae(t,n)||(t=Es(),U.lanes|=t,_n|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=t)}function qd(e,n){var t=D;D=t!==0&&4>t?t:4,e(!0);var r=Fa.transition;Fa.transition={};try{e(!1),n()}finally{D=t,Fa.transition=r}}function Nu(){return Ee().memoizedState}function ef(e,n,t){var r=fn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},ju(e))Cu(n,t);else if(t=iu(e,n,t,r),t!==null){var a=se();De(t,e,r,a),Mu(t,n,r)}}function nf(e,n,t){var r=fn(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(ju(e))Cu(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,s=i(l,t);if(a.hasEagerState=!0,a.eagerState=s,Ae(s,l)){var u=n.interleaved;u===null?(a.next=a,dl(n)):(a.next=u.next,u.next=a),n.interleaved=a;return}}catch{}finally{}t=iu(e,n,a,r),t!==null&&(a=se(),De(t,e,r,a),Mu(t,n,r))}}function ju(e){var n=e.alternate;return e===U||n!==null&&n===U}function Cu(e,n){Pt=Gr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Mu(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Zi(e,t)}}var Xr={readContext:Me,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},tf={readContext:Me,useCallback:function(e,n){return Ke().memoizedState=[e,n===void 0?null:n],e},useContext:Me,useEffect:So,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Er(4194308,4,yu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Er(4194308,4,e,n)},useInsertionEffect:function(e,n){return Er(4,2,e,n)},useMemo:function(e,n){var t=Ke();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ke();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=ef.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var n=Ke();return e={current:e},n.memoizedState=e},useState:wo,useDebugValue:kl,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=wo(!1),n=e[0];return e=qd.bind(null,e[1]),Ke().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=U,a=Ke();if(O){if(t===void 0)throw Error(y(407));t=t()}else{if(t=n(),J===null)throw Error(y(349));bn&30||cu(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,So(fu.bind(null,r,i,e),[e]),r.flags|=2048,Yt(9,du.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ke(),n=J.identifierPrefix;if(O){var t=$e,r=Be;t=(r&~(1<<32-Te(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Wt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},rf={readContext:Me,useCallback:ku,useContext:Me,useEffect:xl,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Ua,useRef:gu,useState:function(){return Ua(Qt)},useDebugValue:kl,useDeferredValue:function(e){var n=Ee();return Su(n,Y.memoizedState,e)},useTransition:function(){var e=Ua(Qt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:uu,useId:Nu,unstable_isNewReconciler:!1},af={readContext:Me,useCallback:ku,useContext:Me,useEffect:xl,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:vu,useMemo:wu,useReducer:Va,useRef:gu,useState:function(){return Va(Qt)},useDebugValue:kl,useDeferredValue:function(e){var n=Ee();return Y===null?n.memoizedState=e:Su(n,Y.memoizedState,e)},useTransition:function(){var e=Va(Qt)[0],n=Ee().memoizedState;return[e,n]},useMutableSource:su,useSyncExternalStore:uu,useId:Nu,unstable_isNewReconciler:!1};function be(e,n){if(e&&e.defaultProps){n=V({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ni(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:V({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ca={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=se(),a=fn(e),i=He(r,a);i.payload=n,t!=null&&(i.callback=t),n=cn(e,i,a),n!==null&&(De(n,e,a,r),Cr(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=se(),a=fn(e),i=He(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=cn(e,i,a),n!==null&&(De(n,e,a,r),Cr(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=se(),r=fn(e),a=He(t,r);a.tag=2,n!=null&&(a.callback=n),n=cn(e,a,r),n!==null&&(De(n,e,r,t),Cr(n,e,r))}};function No(e,n,t,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):n.prototype&&n.prototype.isPureReactComponent?!Ft(t,r)||!Ft(a,i):!0}function Eu(e,n,t){var r=!1,a=gn,i=n.contextType;return typeof i=="object"&&i!==null?i=Me(i):(a=me(n)?zn:le.current,r=n.contextTypes,i=(r=r!=null)?nt(e,a):gn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ca,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function jo(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ca.enqueueReplaceState(n,n.state,null)}function ji(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},fl(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=Me(i):(i=me(n)?zn:le.current,a.context=nt(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ni(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ca.enqueueReplaceState(a,a.state,null),Qr(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function it(e,n){try{var t="",r=n;do t+=Lc(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Ba(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ci(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function zu(e,n,t){t=He(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Jr||(Jr=!0,Ai=r),Ci(e,n)},t}function Pu(e,n,t){t=He(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Ci(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ci(e,n),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Co(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=kf.bind(null,e,n,t),n.then(e,e))}function Mo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Eo(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=He(-1,1),n.tag=2,cn(t,n,1))),t.lanes|=1),e)}var of=Xe.ReactCurrentOwner,fe=!1;function oe(e,n,t,r){n.child=e===null?au(n,null,t,r):rt(n,e.child,t,r)}function zo(e,n,t,r,a){t=t.render;var i=n.ref;return Jn(n,a),r=vl(e,n,t,r,i,a),t=yl(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ge(e,n,a)):(O&&t&&il(n),n.flags|=1,oe(e,n,r,a),n.child)}function Po(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!zl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,bu(e,n,i,r,a)):(e=_r(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Ft,t(l,r)&&e.ref===n.ref)return Ge(e,n,a)}return n.flags|=1,e=pn(i,r),e.ref=n.ref,e.return=n,n.child=e}function bu(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(Ft(i,r)&&e.ref===n.ref)if(fe=!1,n.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Ge(e,n,a)}return Mi(e,n,t,r,a)}function _u(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Qn,he),he|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,A(Qn,he),he|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,A(Qn,he),he|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,A(Qn,he),he|=r;return oe(e,n,a,t),n.child}function Lu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Mi(e,n,t,r,a){var i=me(t)?zn:le.current;return i=nt(n,i),Jn(n,a),t=vl(e,n,t,r,i,a),r=yl(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Ge(e,n,a)):(O&&r&&il(n),n.flags|=1,oe(e,n,t,a),n.child)}function bo(e,n,t,r,a){if(me(t)){var i=!0;Vr(n)}else i=!1;if(Jn(n,a),n.stateNode===null)zr(e,n),Eu(n,t,r),ji(n,t,r,a),r=!0;else if(e===null){var l=n.stateNode,s=n.memoizedProps;l.props=s;var u=l.context,d=t.contextType;typeof d=="object"&&d!==null?d=Me(d):(d=me(t)?zn:le.current,d=nt(n,d));var h=t.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&jo(n,l,r,d),en=!1;var m=n.memoizedState;l.state=m,Qr(n,r,l,a),u=n.memoizedState,s!==r||m!==u||pe.current||en?(typeof h=="function"&&(Ni(n,t,h,r),u=n.memoizedState),(s=en||No(n,t,s,r,m,u,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,lu(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:be(n.type,s),l.props=d,g=n.pendingProps,m=l.context,u=t.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=me(t)?zn:le.current,u=nt(n,u));var x=t.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==u)&&jo(n,l,r,u),en=!1,m=n.memoizedState,l.state=m,Qr(n,r,l,a);var k=n.memoizedState;s!==g||m!==k||pe.current||en?(typeof x=="function"&&(Ni(n,t,x,r),k=n.memoizedState),(d=en||No(n,t,d,r,m,k,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),l.props=r,l.state=k,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),r=!1)}return Ei(e,n,t,r,i,a)}function Ei(e,n,t,r,a,i){Lu(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return a&&go(n,t,!1),Ge(e,n,i);r=n.stateNode,of.current=n;var s=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=rt(n,e.child,null,i),n.child=rt(n,null,s,i)):oe(e,n,s,i),n.memoizedState=r.state,a&&go(n,t,!0),n.child}function Tu(e){var n=e.stateNode;n.pendingContext?mo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&mo(e,n.context,!1),pl(e,n.containerInfo)}function _o(e,n,t,r,a){return tt(),ol(a),n.flags|=256,oe(e,n,t,r),n.child}var zi={dehydrated:null,treeContext:null,retryLane:0};function Pi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Du(e,n,t){var r=n.pendingProps,a=F.current,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),A(F,a&1),e===null)return wi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=r.children,e=r.fallback,i?(r=n.mode,i=n.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=pa(l,r,0,null),e=En(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Pi(t),n.memoizedState=zi,e):wl(n,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return sf(e,n,l,r,s,a,t);if(i){i=r.fallback,l=n.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=pn(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=pn(s,i):(i=En(i,l,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,l=e.child.memoizedState,l=l===null?Pi(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=zi,r}return i=e.child,e=i.sibling,r=pn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function wl(e,n){return n=pa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function hr(e,n,t,r){return r!==null&&ol(r),rt(n,e.child,null,t),e=wl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sf(e,n,t,r,a,i,l){if(t)return n.flags&256?(n.flags&=-257,r=Ba(Error(y(422))),hr(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=pa({mode:"visible",children:r.children},a,0,null),i=En(i,a,l,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&rt(n,e.child,null,l),n.child.memoizedState=Pi(l),n.memoizedState=zi,i);if(!(n.mode&1))return hr(e,n,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=Ba(i,r,void 0),hr(e,n,l,r)}if(s=(l&e.childLanes)!==0,fe||s){if(r=J,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|l)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ye(e,a),De(r,e,a,-1))}return El(),r=Ba(Error(y(421))),hr(e,n,l,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=wf.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,ve=un(a.nextSibling),ye=n,O=!0,Le=null,e!==null&&(Se[Ne++]=Be,Se[Ne++]=$e,Se[Ne++]=Pn,Be=e.id,$e=e.overflow,Pn=n),n=wl(n,r.children),n.flags|=4096,n)}function Lo(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Si(e.return,n,t)}function $a(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function Au(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(oe(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lo(e,t,n);else if(e.tag===19)Lo(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(F,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Yr(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),$a(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Yr(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}$a(n,!0,t,null,i);break;case"together":$a(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zr(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_n|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(y(153));if(n.child!==null){for(e=n.child,t=pn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=pn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function uf(e,n,t){switch(n.tag){case 3:Tu(n),tt();break;case 5:ou(n);break;case 1:me(n.type)&&Vr(n);break;case 4:pl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;A(Hr,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(A(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?Du(e,n,t):(A(F,F.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);A(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Au(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),A(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,_u(e,n,t)}return Ge(e,n,t)}var Iu,bi,Ku,Ru;Iu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};bi=function(){};Ku=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,Cn(Fe.current);var i=null;switch(t){case"input":a=Ja(e,a),r=Ja(e,r),i=[];break;case"select":a=V({},a,{value:void 0}),r=V({},r,{value:void 0}),i=[];break;case"textarea":a=ni(e,a),r=ni(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Fr)}ri(t,r);var l;t=null;for(d in a)if(!r.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var s=a[d];for(l in s)s.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tt.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=a!=null?a[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(t||(t={}),t[l]=u[l])}else t||(i||(i=[]),i.push(d,t)),t=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tt.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&I("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}t&&(i=i||[]).push("style",t);var d=i;(n.updateQueue=d)&&(n.flags|=4)}};Ru=function(e,n,t,r){t!==r&&(n.flags|=4)};function yt(e,n){if(!O)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function cf(e,n,t){var r=n.pendingProps;switch(ll(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return me(n.type)&&Ur(),re(n),null;case 3:return r=n.stateNode,at(),K(pe),K(le),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(Ri(Le),Le=null))),bi(e,n),re(n),null;case 5:ml(n);var a=Cn(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)Ku(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(y(166));return re(n),null}if(e=Cn(Fe.current),mr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Re]=n,r[Bt]=i,e=(n.mode&1)!==0,t){case"dialog":I("cancel",r),I("close",r);break;case"iframe":case"object":case"embed":I("load",r);break;case"video":case"audio":for(a=0;a<Nt.length;a++)I(Nt[a],r);break;case"source":I("error",r);break;case"img":case"image":case"link":I("error",r),I("load",r);break;case"details":I("toggle",r);break;case"input":Fl(r,i),I("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},I("invalid",r);break;case"textarea":Vl(r,i),I("invalid",r)}ri(t,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&pr(r.textContent,s,e),a=["children",""+s]):Tt.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&I("scroll",r)}switch(t){case"input":ir(r),Ul(r,i,!0);break;case"textarea":ir(r),Bl(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Fr)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[Re]=n,e[Bt]=r,Iu(e,n,!1,!1),n.stateNode=e;e:{switch(l=ai(t,r),t){case"dialog":I("cancel",e),I("close",e),a=r;break;case"iframe":case"object":case"embed":I("load",e),a=r;break;case"video":case"audio":for(a=0;a<Nt.length;a++)I(Nt[a],e);a=r;break;case"source":I("error",e),a=r;break;case"img":case"image":case"link":I("error",e),I("load",e),a=r;break;case"details":I("toggle",e),a=r;break;case"input":Fl(e,r),a=Ja(e,r),I("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=V({},r,{value:void 0}),I("invalid",e);break;case"textarea":Vl(e,r),a=ni(e,r),I("invalid",e);break;default:a=r}ri(t,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?gs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ps(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&Dt(e,u):typeof u=="number"&&Dt(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Tt.hasOwnProperty(i)?u!=null&&i==="onScroll"&&I("scroll",e):u!=null&&Hi(e,i,u,l))}switch(t){case"input":ir(e),Ul(e,r,!1);break;case"textarea":ir(e),Bl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Fr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)Ru(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(y(166));if(t=Cn(Ht.current),Cn(Fe.current),mr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Re]=n,(i=r.nodeValue!==t)&&(e=ye,e!==null))switch(e.tag){case 3:pr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Re]=n,n.stateNode=r}return re(n),null;case 13:if(K(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(O&&ve!==null&&n.mode&1&&!(n.flags&128))tu(),tt(),n.flags|=98560,i=!1;else if(i=mr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Re]=n}else tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),i=!1}else Le!==null&&(Ri(Le),Le=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?G===0&&(G=3):El())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return at(),bi(e,n),e===null&&Ut(n.stateNode.containerInfo),re(n),null;case 10:return cl(n.type._context),re(n),null;case 17:return me(n.type)&&Ur(),re(n),null;case 19:if(K(F),i=n.memoizedState,i===null)return re(n),null;if(r=(n.flags&128)!==0,l=i.rendering,l===null)if(r)yt(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Yr(e),l!==null){for(n.flags|=128,yt(i,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return A(F,F.current&1|2),n.child}e=e.sibling}i.tail!==null&&W()>lt&&(n.flags|=128,r=!0,yt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Yr(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),yt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!O)return re(n),null}else 2*W()-i.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,yt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=W(),n.sibling=null,t=F.current,A(F,r?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Ml(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?he&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(y(156,n.tag))}function df(e,n){switch(ll(n),n.tag){case 1:return me(n.type)&&Ur(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return at(),K(pe),K(le),gl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ml(n),null;case 13:if(K(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(y(340));tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(F),null;case 4:return at(),null;case 10:return cl(n.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var vr=!1,ae=!1,ff=typeof WeakSet=="function"?WeakSet:Set,S=null;function Wn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){B(e,n,r)}else t.current=null}function _i(e,n,t){try{t()}catch(r){B(e,n,r)}}var To=!1;function pf(e,n){if(mi=Kr,e=Bs(),al(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,s=-1,u=-1,d=0,h=0,g=e,m=null;n:for(;;){for(var x;g!==t||a!==0&&g.nodeType!==3||(s=l+a),g!==i||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===e)break n;if(m===t&&++d===a&&(s=l),m===i&&++h===r&&(u=l),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}t=s===-1||u===-1?null:{start:s,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(gi={focusedElem:e,selectionRange:t},Kr=!1,S=n;S!==null;)if(n=S,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,S=e;else for(;S!==null;){n=S;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,R=k.memoizedState,f=n.stateNode,c=f.getSnapshotBeforeUpdate(n.elementType===n.type?w:be(n.type,w),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=n.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){B(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,S=e;break}S=n.return}return k=To,To=!1,k}function bt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&_i(n,t,i)}a=a.next}while(a!==r)}}function da(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Li(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Ou(e){var n=e.alternate;n!==null&&(e.alternate=null,Ou(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Re],delete n[Bt],delete n[yi],delete n[Yd],delete n[Gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Do(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fr));else if(r!==4&&(e=e.child,e!==null))for(Ti(e,n,t),e=e.sibling;e!==null;)Ti(e,n,t),e=e.sibling}function Di(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,n,t),e=e.sibling;e!==null;)Di(e,n,t),e=e.sibling}var q=null,_e=!1;function Je(e,n,t){for(t=t.child;t!==null;)Uu(e,n,t),t=t.sibling}function Uu(e,n,t){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(ra,t)}catch{}switch(t.tag){case 5:ae||Wn(t,n);case 6:var r=q,a=_e;q=null,Je(e,n,t),q=r,_e=a,q!==null&&(_e?(e=q,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):q.removeChild(t.stateNode));break;case 18:q!==null&&(_e?(e=q,t=t.stateNode,e.nodeType===8?Ka(e.parentNode,t):e.nodeType===1&&Ka(e,t),Rt(e)):Ka(q,t.stateNode));break;case 4:r=q,a=_e,q=t.stateNode.containerInfo,_e=!0,Je(e,n,t),q=r,_e=a;break;case 0:case 11:case 14:case 15:if(!ae&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&_i(t,n,l),a=a.next}while(a!==r)}Je(e,n,t);break;case 1:if(!ae&&(Wn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){B(t,n,s)}Je(e,n,t);break;case 21:Je(e,n,t);break;case 22:t.mode&1?(ae=(r=ae)||t.memoizedState!==null,Je(e,n,t),ae=r):Je(e,n,t);break;default:Je(e,n,t)}}function Ao(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ff),n.forEach(function(r){var a=Sf.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function Pe(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,l=n,s=l;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,_e=!1;break e;case 3:q=s.stateNode.containerInfo,_e=!0;break e;case 4:q=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(q===null)throw Error(y(160));Uu(i,l,a),q=null,_e=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(d){B(a,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vu(n,e),n=n.sibling}function Vu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(n,e),Ie(e),r&4){try{bt(3,e,e.return),da(3,e)}catch(w){B(e,e.return,w)}try{bt(5,e,e.return)}catch(w){B(e,e.return,w)}}break;case 1:Pe(n,e),Ie(e),r&512&&t!==null&&Wn(t,t.return);break;case 5:if(Pe(n,e),Ie(e),r&512&&t!==null&&Wn(t,t.return),e.flags&32){var a=e.stateNode;try{Dt(a,"")}catch(w){B(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&cs(a,i),ai(s,l);var d=ai(s,i);for(l=0;l<u.length;l+=2){var h=u[l],g=u[l+1];h==="style"?gs(a,g):h==="dangerouslySetInnerHTML"?ps(a,g):h==="children"?Dt(a,g):Hi(a,h,g,d)}switch(s){case"input":qa(a,i);break;case"textarea":ds(a,i);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Yn(a,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Yn(a,!!i.multiple,i.defaultValue,!0):Yn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Bt]=i}catch(w){B(e,e.return,w)}}break;case 6:if(Pe(n,e),Ie(e),r&4){if(e.stateNode===null)throw Error(y(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(w){B(e,e.return,w)}}break;case 3:if(Pe(n,e),Ie(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Rt(n.containerInfo)}catch(w){B(e,e.return,w)}break;case 4:Pe(n,e),Ie(e);break;case 13:Pe(n,e),Ie(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(jl=W())),r&4&&Ao(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(ae=(d=ae)||h,Pe(n,e),ae=d):Pe(n,e),Ie(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(S=e,h=e.child;h!==null;){for(g=S=h;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:bt(4,m,m.return);break;case 1:Wn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,t=m.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(w){B(r,t,w)}}break;case 5:Wn(m,m.return);break;case 22:if(m.memoizedState!==null){Ko(g);continue}}x!==null?(x.return=m,S=x):Ko(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{a=g.stateNode,d?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ms("display",l))}catch(w){B(e,e.return,w)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(w){B(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Pe(n,e),Ie(e),r&4&&Ao(e);break;case 21:break;default:Pe(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fu(t)){var r=t;break e}t=t.return}throw Error(y(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Dt(a,""),r.flags&=-33);var i=Do(e);Di(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Do(e);Ti(e,s,l);break;default:throw Error(y(161))}}catch(u){B(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mf(e,n,t){S=e,Bu(e)}function Bu(e,n,t){for(var r=(e.mode&1)!==0;S!==null;){var a=S,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||vr;if(!l){var s=a.alternate,u=s!==null&&s.memoizedState!==null||ae;s=vr;var d=ae;if(vr=l,(ae=u)&&!d)for(S=a;S!==null;)l=S,u=l.child,l.tag===22&&l.memoizedState!==null?Ro(a):u!==null?(u.return=l,S=u):Ro(a);for(;i!==null;)S=i,Bu(i),i=i.sibling;S=a,vr=s,ae=d}Io(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,S=i):Io(e)}}function Io(e){for(;S!==null;){var n=S;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ae||da(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ae)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:be(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ko(n,i,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ko(n,l,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Rt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ae||n.flags&512&&Li(n)}catch(m){B(n,n.return,m)}}if(n===e){S=null;break}if(t=n.sibling,t!==null){t.return=n.return,S=t;break}S=n.return}}function Ko(e){for(;S!==null;){var n=S;if(n===e){S=null;break}var t=n.sibling;if(t!==null){t.return=n.return,S=t;break}S=n.return}}function Ro(e){for(;S!==null;){var n=S;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{da(4,n)}catch(u){B(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(u){B(n,a,u)}}var i=n.return;try{Li(n)}catch(u){B(n,i,u)}break;case 5:var l=n.return;try{Li(n)}catch(u){B(n,l,u)}}}catch(u){B(n,n.return,u)}if(n===e){S=null;break}var s=n.sibling;if(s!==null){s.return=n.return,S=s;break}S=n.return}}var gf=Math.ceil,Zr=Xe.ReactCurrentDispatcher,Sl=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,L=0,J=null,Q=null,ee=0,he=0,Qn=vn(0),G=0,Gt=null,_n=0,fa=0,Nl=0,_t=null,de=null,jl=0,lt=1/0,Ue=null,Jr=!1,Ai=null,dn=null,yr=!1,an=null,qr=0,Lt=0,Ii=null,Pr=-1,br=0;function se(){return L&6?W():Pr!==-1?Pr:Pr=W()}function fn(e){return e.mode&1?L&2&&ee!==0?ee&-ee:Zd.transition!==null?(br===0&&(br=Es()),br):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ds(e.type)),e):1}function De(e,n,t,r){if(50<Lt)throw Lt=0,Ii=null,Error(y(185));Zt(e,t,r),(!(L&2)||e!==J)&&(e===J&&(!(L&2)&&(fa|=t),G===4&&tn(e,ee)),ge(e,r),t===1&&L===0&&!(n.mode&1)&&(lt=W()+500,sa&&yn()))}function ge(e,n){var t=e.callbackNode;Zc(e,n);var r=Ir(e,e===J?ee:0);if(r===0)t!==null&&Wl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Wl(t),n===1)e.tag===0?Xd(Oo.bind(null,e)):qs(Oo.bind(null,e)),Wd(function(){!(L&6)&&yn()}),t=null;else{switch(zs(r)){case 1:t=Xi;break;case 4:t=Cs;break;case 16:t=Ar;break;case 536870912:t=Ms;break;default:t=Ar}t=Zu(t,$u.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function $u(e,n){if(Pr=-1,br=0,L&6)throw Error(y(327));var t=e.callbackNode;if(qn()&&e.callbackNode!==t)return null;var r=Ir(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ea(e,r);else{n=r;var a=L;L|=2;var i=Wu();(J!==e||ee!==n)&&(Ue=null,lt=W()+500,Mn(e,n));do try{yf();break}catch(s){Hu(e,s)}while(!0);ul(),Zr.current=i,L=a,Q!==null?n=0:(J=null,ee=0,n=G)}if(n!==0){if(n===2&&(a=ui(e),a!==0&&(r=a,n=Ki(e,a))),n===1)throw t=Gt,Mn(e,0),tn(e,r),ge(e,W()),t;if(n===6)tn(e,r);else{if(a=e.current.alternate,!(r&30)&&!hf(a)&&(n=ea(e,r),n===2&&(i=ui(e),i!==0&&(r=i,n=Ki(e,i))),n===1))throw t=Gt,Mn(e,0),tn(e,r),ge(e,W()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(y(345));case 2:Sn(e,de,Ue);break;case 3:if(tn(e,r),(r&130023424)===r&&(n=jl+500-W(),10<n)){if(Ir(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=vi(Sn.bind(null,e,de,Ue),n);break}Sn(e,de,Ue);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var l=31-Te(r);i=1<<l,l=n[l],l>a&&(a=l),r&=~i}if(r=a,r=W()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gf(r/1960))-r,10<r){e.timeoutHandle=vi(Sn.bind(null,e,de,Ue),r);break}Sn(e,de,Ue);break;case 5:Sn(e,de,Ue);break;default:throw Error(y(329))}}}return ge(e,W()),e.callbackNode===t?$u.bind(null,e):null}function Ki(e,n){var t=_t;return e.current.memoizedState.isDehydrated&&(Mn(e,n).flags|=256),e=ea(e,n),e!==2&&(n=de,de=t,n!==null&&Ri(n)),e}function Ri(e){de===null?de=e:de.push.apply(de,e)}function hf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!Ae(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~Nl,n&=~fa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),r=1<<t;e[t]=-1,n&=~r}}function Oo(e){if(L&6)throw Error(y(327));qn();var n=Ir(e,0);if(!(n&1))return ge(e,W()),null;var t=ea(e,n);if(e.tag!==0&&t===2){var r=ui(e);r!==0&&(n=r,t=Ki(e,r))}if(t===1)throw t=Gt,Mn(e,0),tn(e,n),ge(e,W()),t;if(t===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Sn(e,de,Ue),ge(e,W()),null}function Cl(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(lt=W()+500,sa&&yn())}}function Ln(e){an!==null&&an.tag===0&&!(L&6)&&qn();var n=L;L|=1;var t=Ce.transition,r=D;try{if(Ce.transition=null,D=1,e)return e()}finally{D=r,Ce.transition=t,L=n,!(L&6)&&yn()}}function Ml(){he=Qn.current,K(Qn)}function Mn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Hd(t)),Q!==null)for(t=Q.return;t!==null;){var r=t;switch(ll(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ur();break;case 3:at(),K(pe),K(le),gl();break;case 5:ml(r);break;case 4:at();break;case 13:K(F);break;case 19:K(F);break;case 10:cl(r.type._context);break;case 22:case 23:Ml()}t=t.return}if(J=e,Q=e=pn(e.current,null),ee=he=n,G=0,Gt=null,Nl=fa=_n=0,de=_t=null,jn!==null){for(n=0;n<jn.length;n++)if(t=jn[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}t.pending=r}jn=null}return e}function Hu(e,n){do{var t=Q;try{if(ul(),Mr.current=Xr,Gr){for(var r=U.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Gr=!1}if(bn=0,Z=Y=U=null,Pt=!1,Wt=0,Sl.current=null,t===null||t.return===null){G=1,Gt=n,Q=null;break}e:{var i=e,l=t.return,s=t,u=n;if(n=ee,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Mo(l);if(x!==null){x.flags&=-257,Eo(x,l,s,i,n),x.mode&1&&Co(i,d,n),n=x,u=d;var k=n.updateQueue;if(k===null){var w=new Set;w.add(u),n.updateQueue=w}else k.add(u);break e}else{if(!(n&1)){Co(i,d,n),El();break e}u=Error(y(426))}}else if(O&&s.mode&1){var R=Mo(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Eo(R,l,s,i,n),ol(it(u,s));break e}}i=u=it(u,s),G!==4&&(G=2),_t===null?_t=[i]:_t.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=zu(i,u,n);xo(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dn===null||!dn.has(p)))){i.flags|=65536,n&=-n,i.lanes|=n;var v=Pu(i,s,n);xo(i,v);break e}}i=i.return}while(i!==null)}Yu(t)}catch(N){n=N,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Wu(){var e=Zr.current;return Zr.current=Xr,e===null?Xr:e}function El(){(G===0||G===3||G===2)&&(G=4),J===null||!(_n&268435455)&&!(fa&268435455)||tn(J,ee)}function ea(e,n){var t=L;L|=2;var r=Wu();(J!==e||ee!==n)&&(Ue=null,Mn(e,n));do try{vf();break}catch(a){Hu(e,a)}while(!0);if(ul(),L=t,Zr.current=r,Q!==null)throw Error(y(261));return J=null,ee=0,G}function vf(){for(;Q!==null;)Qu(Q)}function yf(){for(;Q!==null&&!Vc();)Qu(Q)}function Qu(e){var n=Xu(e.alternate,e,he);e.memoizedProps=e.pendingProps,n===null?Yu(e):Q=n,Sl.current=null}function Yu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=df(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(t=cf(t,n,he),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);G===0&&(G=5)}function Sn(e,n,t){var r=D,a=Ce.transition;try{Ce.transition=null,D=1,xf(e,n,t,r)}finally{Ce.transition=a,D=r}return null}function xf(e,n,t,r){do qn();while(an!==null);if(L&6)throw Error(y(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Jc(e,i),e===J&&(Q=J=null,ee=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||yr||(yr=!0,Zu(Ar,function(){return qn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var l=D;D=1;var s=L;L|=4,Sl.current=null,pf(e,t),Vu(t,e),Rd(gi),Kr=!!mi,gi=mi=null,e.current=t,mf(t),Bc(),L=s,D=l,Ce.transition=i}else e.current=t;if(yr&&(yr=!1,an=e,qr=a),i=e.pendingLanes,i===0&&(dn=null),Wc(t.stateNode),ge(e,W()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Jr)throw Jr=!1,e=Ai,Ai=null,e;return qr&1&&e.tag!==0&&qn(),i=e.pendingLanes,i&1?e===Ii?Lt++:(Lt=0,Ii=e):Lt=0,yn(),null}function qn(){if(an!==null){var e=zs(qr),n=Ce.transition,t=D;try{if(Ce.transition=null,D=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,qr=0,L&6)throw Error(y(331));var a=L;for(L|=4,S=e.current;S!==null;){var i=S,l=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var h=S;switch(h.tag){case 0:case 11:case 15:bt(8,h,i)}var g=h.child;if(g!==null)g.return=h,S=g;else for(;S!==null;){h=S;var m=h.sibling,x=h.return;if(Ou(h),h===d){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var k=i.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}S=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,S=l;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:bt(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){l=S;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,S=p;else e:for(l=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:da(9,s)}}catch(N){B(s,s.return,N)}if(s===l){S=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,S=v;break e}S=s.return}}if(L=a,yn(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{D=t,Ce.transition=n}}return!1}function Fo(e,n,t){n=it(t,n),n=zu(e,n,1),e=cn(e,n,1),n=se(),e!==null&&(Zt(e,1,n),ge(e,n))}function B(e,n,t){if(e.tag===3)Fo(e,e,t);else for(;n!==null;){if(n.tag===3){Fo(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=it(t,e),e=Pu(n,e,1),n=cn(n,e,1),e=se(),n!==null&&(Zt(n,1,e),ge(n,e));break}}n=n.return}}function kf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=se(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(ee&t)===t&&(G===4||G===3&&(ee&130023424)===ee&&500>W()-jl?Mn(e,0):Nl|=t),ge(e,n)}function Gu(e,n){n===0&&(e.mode&1?(n=sr,sr<<=1,!(sr&130023424)&&(sr=4194304)):n=1);var t=se();e=Ye(e,n),e!==null&&(Zt(e,n,t),ge(e,t))}function wf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gu(e,t)}function Sf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(n),Gu(e,t)}var Xu;Xu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return fe=!1,uf(e,n,t);fe=!!(e.flags&131072)}else fe=!1,O&&n.flags&1048576&&eu(n,$r,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;zr(e,n),e=n.pendingProps;var a=nt(n,le.current);Jn(n,t),a=vl(null,n,r,e,a,t);var i=yl();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,me(r)?(i=!0,Vr(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,fl(n),a.updater=ca,n.stateNode=a,a._reactInternals=n,ji(n,r,e,t),n=Ei(null,n,r,!0,i,t)):(n.tag=0,O&&i&&il(n),oe(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(zr(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=jf(r),e=be(r,e),a){case 0:n=Mi(null,n,r,e,t);break e;case 1:n=bo(null,n,r,e,t);break e;case 11:n=zo(null,n,r,e,t);break e;case 14:n=Po(null,n,r,be(r.type,e),t);break e}throw Error(y(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:be(r,a),Mi(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:be(r,a),bo(e,n,r,a,t);case 3:e:{if(Tu(n),e===null)throw Error(y(387));r=n.pendingProps,i=n.memoizedState,a=i.element,lu(e,n),Qr(n,r,null,t);var l=n.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=it(Error(y(423)),n),n=_o(e,n,r,t,a);break e}else if(r!==a){a=it(Error(y(424)),n),n=_o(e,n,r,t,a);break e}else for(ve=un(n.stateNode.containerInfo.firstChild),ye=n,O=!0,Le=null,t=au(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tt(),r===a){n=Ge(e,n,t);break e}oe(e,n,r,t)}n=n.child}return n;case 5:return ou(n),e===null&&wi(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,hi(r,a)?l=null:i!==null&&hi(r,i)&&(n.flags|=32),Lu(e,n),oe(e,n,l,t),n.child;case 6:return e===null&&wi(n),null;case 13:return Du(e,n,t);case 4:return pl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=rt(n,null,r,t):oe(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:be(r,a),zo(e,n,r,a,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,l=a.value,A(Hr,r._currentValue),r._currentValue=l,i!==null)if(Ae(i.value,l)){if(i.children===a.children&&!pe.current){n=Ge(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=He(-1,t&-t),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Si(i.return,t,n),s.lanes|=t;break}u=u.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(y(341));l.lanes|=t,s=l.alternate,s!==null&&(s.lanes|=t),Si(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}oe(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,Jn(n,t),a=Me(a),r=r(a),n.flags|=1,oe(e,n,r,t),n.child;case 14:return r=n.type,a=be(r,n.pendingProps),a=be(r.type,a),Po(e,n,r,a,t);case 15:return bu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:be(r,a),zr(e,n),n.tag=1,me(r)?(e=!0,Vr(n)):e=!1,Jn(n,t),Eu(n,r,a),ji(n,r,a,t),Ei(null,n,r,!0,e,t);case 19:return Au(e,n,t);case 22:return _u(e,n,t)}throw Error(y(156,n.tag))};function Zu(e,n){return js(e,n)}function Nf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,n,t,r){return new Nf(e,n,t,r)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jf(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qi)return 11;if(e===Yi)return 14}return 2}function pn(e,n){var t=e.alternate;return t===null?(t=je(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _r(e,n,t,r,a,i){var l=2;if(r=e,typeof e=="function")zl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Kn:return En(t.children,a,i,n);case Wi:l=8,a|=8;break;case Ya:return e=je(12,t,n,a|2),e.elementType=Ya,e.lanes=i,e;case Ga:return e=je(13,t,n,a),e.elementType=Ga,e.lanes=i,e;case Xa:return e=je(19,t,n,a),e.elementType=Xa,e.lanes=i,e;case os:return pa(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case is:l=10;break e;case ls:l=9;break e;case Qi:l=11;break e;case Yi:l=14;break e;case qe:l=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return n=je(l,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function En(e,n,t,r){return e=je(7,e,r,n),e.lanes=t,e}function pa(e,n,t,r){return e=je(22,e,r,n),e.elementType=os,e.lanes=t,e.stateNode={isHidden:!1},e}function Ha(e,n,t){return e=je(6,e,null,n),e.lanes=t,e}function Wa(e,n,t){return n=je(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Cf(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ma(0),this.expirationTimes=Ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ma(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Pl(e,n,t,r,a,i,l,s,u){return e=new Cf(e,n,t,s,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=je(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(i),e}function Mf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Ju(e){if(!e)return gn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(y(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(me(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(y(171))}if(e.tag===1){var t=e.type;if(me(t))return Js(e,t,n)}return n}function qu(e,n,t,r,a,i,l,s,u){return e=Pl(t,r,!0,e,a,i,l,s,u),e.context=Ju(null),t=e.current,r=se(),a=fn(t),i=He(r,a),i.callback=n??null,cn(t,i,a),e.current.lanes=a,Zt(e,a,r),ge(e,r),e}function ma(e,n,t,r){var a=n.current,i=se(),l=fn(a);return t=Ju(t),n.context===null?n.context=t:n.pendingContext=t,n=He(i,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=cn(a,n,l),e!==null&&(De(e,a,l,i),Cr(e,a,l)),l}function na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Uo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function bl(e,n){Uo(e,n),(e=e.alternate)&&Uo(e,n)}function Ef(){return null}var ec=typeof reportError=="function"?reportError:function(e){console.error(e)};function _l(e){this._internalRoot=e}ga.prototype.render=_l.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(y(409));ma(e,n,null,null)};ga.prototype.unmount=_l.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ln(function(){ma(null,e,null,null)}),n[Qe]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var n=_s();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&Ts(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vo(){}function zf(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var d=na(l);i.call(d)}}var l=qu(n,r,e,0,null,!1,!1,"",Vo);return e._reactRootContainer=l,e[Qe]=l.current,Ut(e.nodeType===8?e.parentNode:e),Ln(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var d=na(u);s.call(d)}}var u=Pl(e,0,!1,null,null,!1,!1,"",Vo);return e._reactRootContainer=u,e[Qe]=u.current,Ut(e.nodeType===8?e.parentNode:e),Ln(function(){ma(n,u,t,r)}),u}function va(e,n,t,r,a){var i=t._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var u=na(l);s.call(u)}}ma(n,l,e,a)}else l=zf(t,n,e,a,r);return na(l)}Ps=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=St(n.pendingLanes);t!==0&&(Zi(n,t|1),ge(n,W()),!(L&6)&&(lt=W()+500,yn()))}break;case 13:Ln(function(){var r=Ye(e,1);if(r!==null){var a=se();De(r,e,1,a)}}),bl(e,1)}};Ji=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=se();De(n,e,134217728,t)}bl(e,134217728)}};bs=function(e){if(e.tag===13){var n=fn(e),t=Ye(e,n);if(t!==null){var r=se();De(t,e,n,r)}bl(e,n)}};_s=function(){return D};Ls=function(e,n){var t=D;try{return D=e,n()}finally{D=t}};li=function(e,n,t){switch(n){case"input":if(qa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=oa(r);if(!a)throw Error(y(90));us(r),qa(r,a)}}}break;case"textarea":ds(e,t);break;case"select":n=t.value,n!=null&&Yn(e,!!t.multiple,n,!1)}};ys=Cl;xs=Ln;var Pf={usingClientEntryPoint:!1,Events:[qt,Un,oa,hs,vs,Cl]},xt={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bf={bundleType:xt.bundleType,version:xt.version,rendererPackageName:xt.rendererPackageName,rendererConfig:xt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ss(e),e===null?null:e.stateNode},findFiberByHostInstance:xt.findFiberByHostInstance||Ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{ra=xr.inject(bf),Oe=xr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(n))throw Error(y(200));return Mf(e,n,null,t)};ke.createRoot=function(e,n){if(!Ll(e))throw Error(y(299));var t=!1,r="",a=ec;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Pl(e,1,!1,null,null,t,!1,r,a),e[Qe]=n.current,Ut(e.nodeType===8?e.parentNode:e),new _l(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ss(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Ln(e)};ke.hydrate=function(e,n,t){if(!ha(n))throw Error(y(200));return va(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!Ll(e))throw Error(y(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",l=ec;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=qu(n,null,e,1,t??null,a,!1,i,l),e[Qe]=n.current,Ut(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new ga(n)};ke.render=function(e,n,t){if(!ha(n))throw Error(y(200));return va(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!ha(e))throw Error(y(40));return e._reactRootContainer?(Ln(function(){va(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ke.unstable_batchedUpdates=Cl;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ha(t))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return va(e,n,t,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),ns.exports=ke;var _f=ns.exports,tc,Bo=_f;tc=Bo.createRoot,Bo.hydrateRoot;const Lf={ui:{officialPortal:"An official portal of the Malaysian Government",accessibility:"Accessibility",sitemap:"Sitemap",faq:"FAQ",contactUs:"Contact Us",logoSubtitle:"National Security Council · Malaysia",emergencyContact:"Emergency Contact",scrollExplore:"Scroll to explore",corporateInfo:"Corporate Information",corporateInfoSubtitle:"Learn about the Majlis Keselamatan Negara — our mandate, history, and commitment to safeguarding Malaysia's national security.",keyFacts:"Key Facts",ourVision:"Our Vision",ourMission:"Our Mission",coreValues:"Core Values",keyLeadership:"Key Leadership",leadershipSubtitle:"The distinguished leadership guiding Malaysia's national security agenda.",tier:"Tier",involvement:"MKN Involvement",involvementSubtitle:"From disaster management to cybersecurity — discover how MKN safeguards Malaysia across six critical domains of national security.",keyAchievements:"Key Achievements",impactInNumbers:"Impact in Numbers",statisticsSubtitle:"Measuring our commitment to national security through tangible results and outcomes.",newsAnnouncements:"News & Announcements",newsSubtitle:"Stay updated with the latest developments, operations, and initiatives from the National Security Council.",readFullArticle:"Read Full Article",readMore:"Read more",viewAllAnnouncements:"View All Announcements",servicesTitle:"Quick Access & Services",servicesSubtitle:"Access essential MKN services, report emergencies, and find resources for disaster preparedness and national security.",emergencyContacts:"Emergency Contacts",emergencyContactsSubtitle:"24/7 national security & disaster response hotlines",aboutMKN:"About MKN",ourServices:"Our Services",resources:"Resources",government:"Government",followUs:"Follow us:",subscribeToUpdates:"Subscribe to MKN updates",enterEmail:"Enter your email address",subscribe:"Subscribe",copyright:"© 2026 Majlis Keselamatan Negara. All Rights Reserved.",privacyPolicy:"Privacy Policy",termsOfUse:"Terms of Use",disclaimer:"Disclaimer",cookiePolicy:"Cookie Policy",lastUpdated:"Last Updated: 19 June 2026"},navItems:[{label:"Home",href:"#home"},{label:"Corporate Info",href:"#corporate"},{label:"MKN Involvement",href:"#involvement"},{label:"News & Announcements",href:"#news"},{label:"Statistics",href:"#statistics"},{label:"Services",href:"#services"},{label:"Contact",href:"#contact"}],heroContent:{badge:"Portal Rasmi · Official Portal",title:"Majlis Keselamatan Negara",subtitle:"National Security Council of Malaysia",description:"Safeguarding the nation through strategic security policies, disaster management coordination, and crisis response — ensuring a resilient and secure Malaysia for all.",primaryAction:"Explore Corporate Info",secondaryAction:"View MKN Involvement",stats:[{value:"1971",label:"Established"},{value:"14",label:"States Coordinated"},{value:"500+",label:"Crisis Operations"},{value:"24/7",label:"Operations Centre"}]},aboutInfo:{heading:"About MKN",intro:"The Majlis Keselamatan Negara (National Security Council) is a premier government agency under the Prime Minister's Department, entrusted with formulating policies and strategies related to national security. Established in 1971, MKN serves as the central coordinating body for all matters concerning the sovereignty, territorial integrity, and public safety of Malaysia.",body:["MKN operates as the principal advisory body to the Government of Malaysia on national security matters. The Council is chaired by the Prime Minister and comprises key Cabinet ministers, the Chief Secretary to the Government, and the heads of the Armed Forces and Royal Malaysia Police.","The Council's mandate spans across disaster management, border security, counter-terrorism, cybersecurity, food security, and public order. MKN also oversees the National Disaster Management Agency (NADMA) and coordinates the National Security Council Directive No. 20 — the cornerstone policy for disaster management in Malaysia.","Through its 24/7 National Security Council Operations Centre (PKTN), MKN provides round-the-clock situational awareness, early warning, and crisis coordination across all 14 states and federal territories."],keyFacts:[{label:"Established",value:"1971"},{label:"Ministry",value:"Prime Minister's Department"},{label:"Chairman",value:"The Prime Minister of Malaysia"},{label:"Headquarters",value:"Putrajaya, Malaysia"},{label:"Director General",value:"Datuk Ramlan bin Eibai"},{label:"Core Directive",value:"MKN Directive No. 20"}]},visionMission:{vision:"To be the leading national security agency that ensures a sovereign, resilient, and prosperous Malaysia through strategic foresight, effective coordination, and unwavering commitment to public safety.",mission:"To formulate, coordinate, and implement national security policies and strategies that safeguard Malaysia's sovereignty, territorial integrity, and public well-being through whole-of-government and whole-of-society approaches.",values:[{title:"Integrity",description:"Upholding the highest standards of honesty, transparency, and accountability in all security operations.",icon:"shield"},{title:"Excellence",description:"Delivering world-class security governance through professionalism, innovation, and continuous improvement.",icon:"star"},{title:"Resilience",description:"Building national capacity to withstand and recover from all forms of threats and disasters.",icon:"fortress"},{title:"Collaboration",description:"Fostering partnerships across government, industry, and society for comprehensive national security.",icon:"people"}]},orgStructure:{heading:"Organisation Structure",description:"MKN operates under a structured hierarchy led by the National Security Council, ensuring effective governance and coordination across all national security functions.",levels:[{tier:"Council",title:"National Security Council",desc:"Chaired by the Prime Minister, comprising Cabinet ministers, Chief Secretary, and heads of security agencies.",members:["Prime Minister (Chairman)","Deputy Prime Minister","Minister of Defence","Minister of Home Affairs","Minister of Foreign Affairs","Chief Secretary to the Government","Chief of Defence Force","Inspector-General of Police"]},{tier:"Executive",title:"Director General Office",desc:"Leads the operational arm of MKN, implementing Council decisions and overseeing daily operations.",members:["Director General of MKN","Deputy Director General (Policy)","Deputy Director General (Operations)"]},{tier:"Divisions",title:"Operational Divisions",desc:"Specialised divisions managing distinct domains of national security and disaster management.",members:["Policy & Strategic Planning Division","Operations & Crisis Management Division","Disaster Management Division (NADMA)","Border Security & Immigration Division","Counter-Terrorism & Extremism Division","Cybersecurity & Digital Threat Division","Strategic Communications Division","Administration & Finance Division"]}]},leadership:[{name:"YAB Dato' Seri Anwar bin Ibrahim",position:"Chairman, National Security Council",role:"Prime Minister of Malaysia",initials:"AI",color:"#0d2240"},{name:"YAB Dato' Seri Dr. Ahmad Zahid bin Hamidi",position:"Deputy Chairman",role:"Deputy Prime Minister",initials:"ZH",color:"#142d4c"},{name:"Tan Sri Shamsul Azri bin Abu Bakar",position:"Council Member",role:"Chief Secretary to the Government",initials:"SA",color:"#1a3a5c"},{name:"Datuk Ramlan bin Eibai",position:"Director General of MKN",role:"Chief Executive Officer",initials:"RL",color:"#c5a253"}],involvementAreas:[{id:"disaster",title:"Disaster Management",icon:"disaster",image:"inv-disaster.png",summary:"Coordinating Malaysia's response to natural disasters through MKN Directive No. 20 — from floods and landslides to earthquakes and haze.",highlights:["Activated 361 flood relief operations during the 2024-2025 monsoon season","Deployed 12,000+ personnel across affected states via integrated command","Managed evacuations for 150,000+ citizens at peak flood emergency","Coordinated post-disaster recovery and infrastructure rebuilding"],tag:"NADMA",color:"#1d4ed8"},{id:"security",title:"National Security Policy",icon:"shield",image:"inv-security.png",summary:"Formulating comprehensive national security strategies encompassing defence, border integrity, sovereignty, and strategic deterrence.",highlights:["Developed the National Security Policy (DAKN) 2021-2025 framework","Coordinated border security across 4,800+ km of land and maritime borders","Strengthened sovereignty in Sabah, Sarawak, and ESSZone operations","Advanced Malaysia's position in ASEAN regional security cooperation"],tag:"DAKN",color:"#0d2240"},{id:"counter-terrorism",title:"Counter-Terrorism",icon:"target",image:"inv-counter-terrorism.png",summary:"Leading whole-of-government efforts to prevent, detect, and respond to terrorism and violent extremism threats.",highlights:["Implemented the National Action Plan for Preventing & Countering Violent Extremism (PCVE)","Conducted 200+ deradicalisation programmes reaching 15,000+ at-risk individuals","Maintained zero successful major terrorist attack on Malaysian soil since 2018","Strengthened intelligence sharing through 47 bilateral partnerships"],tag:"PCVE",color:"#b91c1c"},{id:"cybersecurity",title:"Cybersecurity",icon:"cyber",image:"inv-cybersecurity.png",summary:"Safeguarding Malaysia's digital infrastructure and critical national information infrastructure (CNII) from evolving cyber threats.",highlights:["Protected 412 Critical National Information Infrastructure entities","Responded to 8,500+ cybersecurity incidents via MyCERT coordination","Launched the National Cyber Security Strategy 2025-2030","Facilitated cross-sector cyber drill exercises involving 80+ agencies"],tag:"CNII",color:"#6d28d9"},{id:"crisis",title:"Crisis & Emergency Response",icon:"alert",image:"inv-crisis.png",summary:"Operating a 24/7 National Security Council Operations Centre (PKTN) for real-time situational awareness and crisis coordination.",highlights:["Maintained round-the-clock operations through PKTN since 2003","Coordinated COVID-19 pandemic response across 18 months of MCO phases","Managed 50+ major crisis events including airline incidents and civil unrest","Established integrated early warning systems with 14 state-level operations centres"],tag:"PKTN",color:"#c2410c"},{id:"public-safety",title:"Public Safety & Awareness",icon:"community",image:"inv-public-safety.png",summary:"Empowering communities through public safety education, national resilience programmes, and citizen preparedness initiatives.",highlights:["Reached 2.3 million citizens through the National Resilience Programme","Conducted 1,200+ community preparedness workshops nationwide",'Launched the "Selamatkan Negara" public safety awareness campaign',"Trained 8,500+ community first responders in disaster preparedness"],tag:"Program Resilience",color:"#15803d"}],newsItems:[{category:"Disaster Management",date:"15 June 2026",title:"MKN Activates Level II Operations for Southwest Monsoon Preparedness",excerpt:"The National Security Council has activated Level II disaster operations across 8 flood-prone states ahead of the Southwest Monsoon season, deploying advance teams and pre-positioning relief supplies.",tag:"Active",tagColor:"#dc2626"},{category:"Cybersecurity",date:"10 June 2026",title:"Malaysia Launches National Cyber Security Strategy 2025-2030",excerpt:"MKN unveiled a comprehensive five-year cyber security strategy aimed at protecting Critical National Information Infrastructure and building national cyber resilience capabilities.",tag:"New",tagColor:"#6d28d9"},{category:"Counter-Terrorism",date:"5 June 2026",title:"Regional PCVE Workshop Strengthens ASEAN Cooperation",excerpt:"MKN hosted representatives from 10 ASEAN member states for a three-day workshop on preventing and countering violent extremism, sharing best practices and intelligence frameworks.",tag:"Update",tagColor:"#1d4ed8"},{category:"Public Safety",date:"1 June 2026",title:"National Resilience Programme Reaches 2.3 Million Citizens",excerpt:"The flagship community empowerment initiative has now reached over 2.3 million Malaysians, strengthening grassroots preparedness and disaster awareness across all states.",tag:"Milestone",tagColor:"#15803d"},{category:"Border Security",date:"28 May 2026",title:"Enhanced Maritime Patrol Operations in ESSZone",excerpt:"MKN coordinated a joint multi-agency maritime security operation in the Eastern Sabah Security Zone, deploying naval and air assets to safeguard sovereign waters.",tag:"Operation",tagColor:"#c2410c"},{category:"Policy",date:"20 May 2026",title:"MKN Council Approves Updated National Security Policy Framework",excerpt:"The National Security Council, chaired by the Prime Minister, approved the updated DAKN framework incorporating emerging threats including climate security and AI governance.",tag:"Approved",tagColor:"#0d2240"}],statistics:[{value:1971,label:"Year Established",suffix:"",icon:"calendar"},{value:361,label:"Disaster Operations (2024-2025)",suffix:"+",icon:"disaster"},{value:150,label:"Citizens Evacuated (Peak)",suffix:"K+",icon:"people"},{value:412,label:"CNII Entities Protected",suffix:"",icon:"cyber"},{value:8500,label:"Cyber Incidents Responded",suffix:"+",icon:"alert"},{value:2.3,label:"Citizens Reached (Resilience)",suffix:"M",icon:"community"},{value:47,label:"Bilateral Partnerships",suffix:"",icon:"globe"},{value:1200,label:"Community Workshops",suffix:"+",icon:"community"}],services:[{title:"Disaster Reporting",description:"Report disasters and emergencies through the integrated national reporting system.",icon:"alert",action:"File a Report"},{title:"MKN Directive No. 20",description:"Access the official guidelines for disaster management and relief operations.",icon:"document",action:"View Directive"},{title:"Public Safety Resources",description:"Download preparedness guides, emergency contacts, and safety handbooks.",icon:"document",action:"Browse Resources"},{title:"National Resilience Programme",description:"Register your community for disaster preparedness training and workshops.",icon:"community",action:"Register Now"},{title:"Cyber Security Portal",description:"Report cyber incidents and access cybersecurity advisories and alerts.",icon:"cyber",action:"Access Portal"},{title:"Tender & Procurement",description:"View current MKN tender notices, procurement opportunities, and vendor registration.",icon:"document",action:"View Tenders"}],footerLinks:{about:["About MKN","Vision & Mission","Organisation Structure","Leadership","History"],services:["Disaster Management","National Security Policy","Counter-Terrorism","Cybersecurity","Crisis Response"],resources:["MKN Directive No. 20","Publications & Reports","Media Centre","FAQ","Tender & Procurement"],government:["Prime Minister's Department","Government of Malaysia","Public Service Portal","eKL Portal","Malaysia.gov.my"]},emergencyContacts:[{name:"MKN Operations Centre (PKTN)",phone:"03-8888 4000",hours:"24/7"},{name:"NADMA Disaster Hotline",phone:"03-8064 2400",hours:"24/7"},{name:"General Emergency",phone:"999",hours:"24/7"},{name:"Cyber Security (MyCERT)",phone:"1-300-88-2999",hours:"24/7"}]},Tf={ui:{officialPortal:"Portal rasmi Kerajaan Malaysia",accessibility:"Kebolehcapaian",sitemap:"Peta Laman",faq:"FAQ",contactUs:"Hubungi Kami",logoSubtitle:"Majlis Keselamatan Negara · Malaysia",emergencyContact:"Hubungan Kecemasan",scrollExplore:"Tatal untuk terokai",corporateInfo:"Maklumat Korporat",corporateInfoSubtitle:"Ketahui tentang Majlis Keselamatan Negara — mandat, sejarah, dan komitmen kami dalam menjaga keselamatan negara Malaysia.",keyFacts:"Fakta Utama",ourVision:"Wawasan Kami",ourMission:"Misi Kami",coreValues:"Nilai Teras",keyLeadership:"Kepimpinan Utama",leadershipSubtitle:"Kepimpinan terbilang yang memandu agenda keselamatan negara Malaysia.",tier:"Tahap",involvement:"Penglibatan MKN",involvementSubtitle:"Daripada pengurusan bencana hingga keselamatan siber — ketahui bagaimana MKN menjaga Malaysia merentangi enam domain kritikal keselamatan negara.",keyAchievements:"Pencapaian Utama",impactInNumbers:"Impak dalam Angka",statisticsSubtitle:"Mengukur komitmen kami terhadap keselamatan negara melalui keputusan dan hasil yang ketara.",newsAnnouncements:"Berita & Pengumuman",newsSubtitle:"Kekal dikemaskini dengan perkembangan terkini, operasi, dan inisiatif daripada Majlis Keselamatan Negara.",readFullArticle:"Baca Artikel Penuh",readMore:"Baca lagi",viewAllAnnouncements:"Lihat Semua Pengumuman",servicesTitle:"Akses Pantas & Perkhidmatan",servicesSubtitle:"Akses perkhidmatan MKN yang penting, laporkan kecemasan, dan dapatkan sumber untuk kesediaan bencana dan keselamatan negara.",emergencyContacts:"Hubungan Kecemasan",emergencyContactsSubtitle:"Talian hotline keselamatan negara & respons bencana 24/7",aboutMKN:"Tentang MKN",ourServices:"Perkhidmatan Kami",resources:"Sumber",government:"Kerajaan",followUs:"Ikuti kami:",subscribeToUpdates:"Langgan kemas kini MKN",enterEmail:"Masukkan alamat e-mel anda",subscribe:"Langgan",copyright:"© 2026 Majlis Keselamatan Negara. Hak Cipta Terpelihara.",privacyPolicy:"Dasar Privasi",termsOfUse:"Terma Penggunaan",disclaimer:"Penafian",cookiePolicy:"Dasar Kuki",lastUpdated:"Kemas Kini Terakhir: 19 Jun 2026"},navItems:[{label:"Utama",href:"#home"},{label:"Maklumat Korporat",href:"#corporate"},{label:"Penglibatan MKN",href:"#involvement"},{label:"Berita & Pengumuman",href:"#news"},{label:"Statistik",href:"#statistics"},{label:"Perkhidmatan",href:"#services"},{label:"Hubungi",href:"#contact"}],heroContent:{badge:"Portal Rasmi · Official Portal",title:"Majlis Keselamatan Negara",subtitle:"Majlis Keselamatan Negara Malaysia",description:"Melindungi negara melalui dasar keselamatan strategik, penyelarasan pengurusan bencana, dan respons krisis — memastikan Malaysia yang teguh dan selamat untuk semua.",primaryAction:"Terokai Maklumat Korporat",secondaryAction:"Lihat Penglibatan MKN",stats:[{value:"1971",label:"Ditubuhkan"},{value:"14",label:"Negeri Diselaraskan"},{value:"500+",label:"Operasi Krisis"},{value:"24/7",label:"Pusat Operasi"}]},aboutInfo:{heading:"Tentang MKN",intro:"Majlis Keselamatan Negara ialah agensi kerajaan utama di bawah Jabatan Perdana Menteri yang dipertanggungjawabkan untuk merangka dasar dan strategi berkaitan keselamatan negara. Ditubuhkan pada 1971, MKN berfungsi sebagai badan penyelarasan pusat untuk semua perkara berkaitan kedaulatan, integriti wilayah, dan keselamatan awam Malaysia.",body:["MKN beroperasi sebagai badan penasihat utama kepada Kerajaan Malaysia dalam hal ehwal keselamatan negara. Majlis ini dipengerusikan oleh Perdana Menteri dan terdiri daripada menteri Kabinet utama, Ketua Setiausaha Negara, serta ketua-ketua Angkatan Tentera dan Polis Diraja Malaysia.","Mandat Majlis merangkumi pengurusan bencana, keselamatan sempadan, antipengganas, keselamatan siber, keselamatan makanan, dan ketenteraman awam. MKN juga mengawasi Agensi Pengurusan Bencana Negara (NADMA) dan menyelaraskan Arahan Majlis Keselamatan Negara No. 20 — dasar asas pengurusan bencana di Malaysia.","Melalui Pusat Operasi Majlis Keselamatan Negara (PKTN) yang beroperasi 24/7, MKN menyediakan kesedaran situasi sepanjang masa, amaran awal, dan penyelarasan krisis merentangi kesemua 14 negeri dan wilayah persekutuan."],keyFacts:[{label:"Ditubuhkan",value:"1971"},{label:"Kementerian",value:"Jabatan Perdana Menteri"},{label:"Pengerusi",value:"Perdana Menteri Malaysia"},{label:"Ibu Pejabat",value:"Putrajaya, Malaysia"},{label:"Ketua Pengarah",value:"Datuk Ramlan bin Eibai"},{label:"Arahan Teras",value:"Arahan MKN No. 20"}]},visionMission:{vision:"Menjadi agensi keselamatan negara terkemuka yang memastikan Malaysia yang berdaulat, teguh, dan makmur melalui pandangan strategik, penyelarasan berkesan, dan komitmen teguh terhadap keselamatan awam.",mission:"Merangka, menyelaraskan, dan melaksanakan dasar serta strategi keselamatan negara yang menjaga kedaulatan, integriti wilayah, dan kesejahteraan awam Malaysia melalui pendekatan seluruh kerajaan dan seluruh masyarakat.",values:[{title:"Integriti",description:"Menjunjung standard tertinggi kejujuran, ketelusan, dan akauntabiliti dalam semua operasi keselamatan.",icon:"shield"},{title:"Kecemerlangan",description:"Menyampaikan tadbir urus keselamatan bertaraf dunia melalui profesionalisme, inovasi, dan penambahbaikan berterusan.",icon:"star"},{title:"Ketahanan",description:"Membina kapasiti negara untuk menahan dan pulih daripada semua bentuk ancaman dan bencana.",icon:"fortress"},{title:"Kerjasama",description:"Membina perkongsian merentasi kerajaan, industri, dan masyarakat untuk keselamatan negara yang menyeluruh.",icon:"people"}]},orgStructure:{heading:"Struktur Organisasi",description:"MKN beroperasi di bawah hierarki berstruktur yang dipimpin oleh Majlis Keselamatan Negara, memastikan tadbir urus dan penyelarasan berkesan merentangi semua fungsi keselamatan negara.",levels:[{tier:"Majlis",title:"Majlis Keselamatan Negara",desc:"Dipengerusikan oleh Perdana Menteri, terdiri daripada menteri Kabinet, Ketua Setiausaha, dan ketua agensi keselamatan.",members:["Perdana Menteri (Pengerusi)","Timbalan Perdana Menteri","Menteri Pertahanan","Menteri Dalam Negeri","Menteri Luar Negeri","Ketua Setiausaha Negara","Panglima Angkatan Tentera","Ketua Polis Negara"]},{tier:"Eksekutif",title:"Pejabat Ketua Pengarah",desc:"Memimpin lengan operasi MKN, melaksanakan keputusan Majlis dan menyelia operasi harian.",members:["Ketua Pengarah MKN","Timbalan Ketua Pengarah (Dasar)","Timbalan Ketua Pengarah (Operasi)"]},{tier:"Bahagian",title:"Bahagian Operasi",desc:"Bahagian khusus yang menguruskan domain berbeza keselamatan negara dan pengurusan bencana.",members:["Bahagian Dasar & Perancangan Strategik","Bahagian Operasi & Pengurusan Krisis","Bahagian Pengurusan Bencana (NADMA)","Bahagian Keselamatan Sempadan & Imigresen","Bahagian Antipengganas & Ekstremisme","Bahagian Keselamatan Siber & Ancaman Digital","Bahagian Komunikasi Strategik","Bahagian Pentadbiran & Kewangan"]}]},leadership:[{name:"YAB Dato' Seri Anwar bin Ibrahim",position:"Pengerusi, Majlis Keselamatan Negara",role:"Perdana Menteri Malaysia",initials:"AI",color:"#0d2240"},{name:"YAB Dato' Seri Dr. Ahmad Zahid bin Hamidi",position:"Timbalan Pengerusi",role:"Timbalan Perdana Menteri",initials:"ZH",color:"#142d4c"},{name:"Tan Sri Shamsul Azri bin Abu Bakar",position:"Ahli Majlis",role:"Ketua Setiausaha Negara",initials:"SA",color:"#1a3a5c"},{name:"Datuk Ramlan bin Eibai",position:"Ketua Pengarah MKN",role:"Ketua Pegawai Eksekutif",initials:"RL",color:"#c5a253"}],involvementAreas:[{id:"disaster",title:"Pengurusan Bencana",icon:"disaster",image:"inv-disaster.png",summary:"Menyelaraskan respons Malaysia terhadap bencana alam melalui Arahan MKN No. 20 — daripada banjir dan tanah runtuh hingga gempa bumi dan jerebu.",highlights:["Mengaktifkan 361 operasi bantuan banjir semasa musim monsun 2024-2025","Melancarkan 12,000+ personel merentangi negeri terjejas melalui arahan bersepadu","Menguruskan pemindahan 150,000+ warga semasa kemuncak kecemasan banjir","Menyelaraskan pemulihan selepas bencana dan pembinaan semula infrastruktur"],tag:"NADMA",color:"#1d4ed8"},{id:"security",title:"Dasar Keselamatan Negara",icon:"shield",image:"inv-security.png",summary:"Merangka strategi keselamatan negara yang menyeluruh merangkumi pertahanan, integriti sempadan, kedaulatan, dan pemencilan strategik.",highlights:["Membangunkan rangka Dasar Keselamatan Negara (DAKN) 2021-2025","Menyelaraskan keselamatan sempadan sepanjang 4,800+ km sempadan darat dan maritim","Menguatkan kedaulatan di Sabah, Sarawak, dan operasi ESSZone","Memajukan kedudukan Malaysia dalam kerjasama keselamatan serantau ASEAN"],tag:"DAKN",color:"#0d2240"},{id:"counter-terrorism",title:"Antipengganas",icon:"target",image:"inv-counter-terrorism.png",summary:"Memimpin usaha seluruh kerajaan untuk mencegah, mengesan, dan memberi respons terhadap keganasan serta ancaman ekstremisme ganas.",highlights:["Melaksanakan Pelan Tindakan Kebangsaan untuk Mencegah & Menentang Ekstremisme Ganas (PCVE)","Menjalankan 200+ program deradikalisasi mencapai 15,000+ individu berisiko","Mengekalkan sifar serangan pengganas besar yang berjaya di tanahair sejak 2018","Menguatkan perkongsian perisikan melalui 47 perkongsian dua hala"],tag:"PCVE",color:"#b91c1c"},{id:"cybersecurity",title:"Keselamatan Siber",icon:"cyber",image:"inv-cybersecurity.png",summary:"Melindungi infrastruktur digital Malaysia dan infrastruktur maklumat kebangsaan kritikal (CNII) daripada ancaman siber yang sentiasa berkembang.",highlights:["Melindungi 412 entiti Infrastruktur Maklumat Kebangsaan Kritikal","Memberi respons kepada 8,500+ insiden keselamatan siber melalui penyelarasan MyCERT","Melancarkan Strategi Keselamatan Siber Kebangsaan 2025-2030","Memudahkan latihan siber merentas sektor melibatkan 80+ agensi"],tag:"CNII",color:"#6d28d9"},{id:"crisis",title:"Respons Krisis & Kecemasan",icon:"alert",image:"inv-crisis.png",summary:"Mengoperasikan Pusat Operasi Majlis Keselamatan Negara (PKTN) 24/7 untuk kesedaran situasi masa nyata dan penyelarasan krisis.",highlights:["Mengekalkan operasi sepanjang masa melalui PKTN sejak 2003","Menyelaraskan respons pandemik COVID-19 sepanjang 18 bulan fasa PKP","Menguruskan 50+ peristiwa krisis utama termasuk insiden penerbangan dan kerusuhan awam","Menubuhkan sistem amaran awal bersepadu dengan 14 pusat operasi peringkat negeri"],tag:"PKTN",color:"#c2410c"},{id:"public-safety",title:"Keselamatan Awam & Kesedaran",icon:"community",image:"inv-public-safety.png",summary:"Memperkasakan komuniti melalui pendidikan keselamatan awam, program ketahanan negara, dan inisiatif kesediaan warganegara.",highlights:["Mencapai 2.3 juta warga melalui Program Ketahanan Negara","Menjalankan 1,200+ bengkel kesediaan komuniti di seluruh negara",'Melancarkan kempen kesedaran keselamatan awam "Selamatkan Negara"',"Melatih 8,500+ respons pertama komuniti dalam kesediaan bencana"],tag:"Program Resilience",color:"#15803d"}],newsItems:[{category:"Pengurusan Bencana",date:"15 Jun 2026",title:"MKN Aktifkan Operasi Tahap II untuk Kesediaan Monsun Barat Daya",excerpt:"Majlis Keselamatan Negara telah mengaktifkan operasi bencana Tahap II merentangi 8 negeri prone banjir menjelang musim Monsun Barat Daya, melancarkan pasukan awal dan meletakkan bekalan bantuan.",tag:"Aktif",tagColor:"#dc2626"},{category:"Keselamatan Siber",date:"10 Jun 2026",title:"Malaysia Lancarkan Strategi Keselamatan Siber Kebangsaan 2025-2030",excerpt:"MKN memperkenalkan strategi keselamatan siber lima tahun yang menyeluruh bertujuan melindungi Infrastruktur Maklumat Kebangsaan Kritikal dan membina kapasiti ketahanan siber negara.",tag:"Baharu",tagColor:"#6d28d9"},{category:"Antipengganas",date:"5 Jun 2026",title:"Bengkel PCVE Serantau Menguatkan Kerjasama ASEAN",excerpt:"MKN mengehoskan wakil daripada 10 negara anggota ASEAN untuk bengkel tiga hari mengenai pencegahan dan penentangan ekstremisme ganas, berkongsi amalan terbaik dan rangka kerja perisikan.",tag:"Kemas kini",tagColor:"#1d4ed8"},{category:"Keselamatan Awam",date:"1 Jun 2026",title:"Program Ketahanan Negara Capai 2.3 Juta Warga",excerpt:"Inisiatif pemberdayaan komuniti unggulan kini telah mencapai lebih 2.3 juta rakyat Malaysia, menguatkan kesediaan akar umbi dan kesedaran bencana di semua negeri.",tag:"Pencapaian",tagColor:"#15803d"},{category:"Keselamatan Sempadan",date:"28 Mei 2026",title:"Operasi Rondaan Maritim Dipertingkat di ESSZone",excerpt:"MKN menyelaraskan operasi keselamatan maritim berbilang agensi di Zon Keselamatan Sabah Timur, melancarkan aset tentera laut dan udara untuk menjaga perairan berdaulat.",tag:"Operasi",tagColor:"#c2410c"},{category:"Dasar",date:"20 Mei 2026",title:"Majlis MKN Luluskan Rangka Kerja Dasar Keselamatan Negara Dikemaskini",excerpt:"Majlis Keselamatan Negara yang dipengerusikan oleh Perdana Menteri telah meluluskan rangka kerja DAKN dikemaskini yang merangkumi ancaman baharu termasuk keselamatan iklim dan tadbir urus AI.",tag:"Diluluskan",tagColor:"#0d2240"}],statistics:[{value:1971,label:"Tahun Ditubuhkan",suffix:"",icon:"calendar"},{value:361,label:"Operasi Bencana (2024-2025)",suffix:"+",icon:"disaster"},{value:150,label:"Warga Dipindahkan (Puncak)",suffix:"K+",icon:"people"},{value:412,label:"Entiti CNII Dilindungi",suffix:"",icon:"cyber"},{value:8500,label:"Insiden Siber DirRespons",suffix:"+",icon:"alert"},{value:2.3,label:"Warga Dicapai (Ketahanan)",suffix:"M",icon:"community"},{value:47,label:"Perkongsian Dua Hala",suffix:"",icon:"globe"},{value:1200,label:"Bengkel Komuniti",suffix:"+",icon:"community"}],services:[{title:"Laporan Bencana",description:"Laporkan bencana dan kecemasan melalui sistem pelaporan kebangsaan bersepadu.",icon:"alert",action:"Buat Laporan"},{title:"Arahan MKN No. 20",description:"Akses garis panduan rasmi untuk pengurusan bencana dan operasi bantuan.",icon:"document",action:"Lihat Arahan"},{title:"Sumber Keselamatan Awam",description:"Muat turun panduan kesediaan, hubungan kecemasan, dan buku panduan keselamatan.",icon:"document",action:"Lihat Sumber"},{title:"Program Ketahanan Negara",description:"Daftarkan komuniti anda untuk latihan kesediaan bencana dan bengkel.",icon:"community",action:"Daftar Sekarang"},{title:"Portal Keselamatan Siber",description:"Laporkan insiden siber dan akses nasihat serta amaran keselamatan siber.",icon:"cyber",action:"Akses Portal"},{title:"Sebutharga & Perolehan",description:"Lihat notis sebutharga MKN semasa, peluang perolehan, dan pendaftaran vendor.",icon:"document",action:"Lihat Sebutharga"}],footerLinks:{about:["Tentang MKN","Wawasan & Misi","Struktur Organisasi","Kepimpinan","Sejarah"],services:["Pengurusan Bencana","Dasar Keselamatan Negara","Antipengganas","Keselamatan Siber","Respons Krisis"],resources:["Arahan MKN No. 20","Penerbitan & Laporan","Pusat Media","FAQ","Sebutharga & Perolehan"],government:["Jabatan Perdana Menteri","Kerajaan Malaysia","Portal Perkhidmatan Awam","Portal eKL","Malaysia.gov.my"]},emergencyContacts:[{name:"Pusat Operasi MKN (PKTN)",phone:"03-8888 4000",hours:"24/7"},{name:"Talian Hotline Bencana NADMA",phone:"03-8064 2400",hours:"24/7"},{name:"Kecemasan Am",phone:"999",hours:"24/7"},{name:"Keselamatan Siber (MyCERT)",phone:"1-300-88-2999",hours:"24/7"}]};function Df(e){return e==="bm"?Tf:Lf}const rc=ie.createContext(null);function Af({children:e}){const[n,t]=ie.useState(()=>{try{const i=localStorage.getItem("mkn-lang");if(i==="en"||i==="bm")return i}catch{}return"bm"}),r=ie.useCallback(i=>{t(i);try{localStorage.setItem("mkn-lang",i)}catch{}},[]),a={lang:n,setLang:r,t:Df(n)};return o.jsx(rc.Provider,{value:a,children:e})}function Ze(){const e=ie.useContext(rc);if(!e)throw new Error("useLanguage must be used within LanguageProvider");return e}function T({name:e,size:n=24,color:t="currentColor"}){const r={shield:o.jsx("path",{d:"M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-2.11V12.99z"}),star:o.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),fortress:o.jsx("path",{d:"M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"}),people:o.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),disaster:o.jsx("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"}),target:o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),cyber:o.jsx("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"}),alert:o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),community:o.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),calendar:o.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM7 12h5v5H7z"}),globe:o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),document:o.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),phone:o.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),chevron:o.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),arrow:o.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),menu:o.jsx("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),close:o.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),external:o.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),email:o.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),location:o.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),clock:o.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),facebook:o.jsx("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"}),twitter:o.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),instagram:o.jsx("path",{d:"M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"}),youtube:o.jsx("path",{d:"M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.45 12 20.45 12 20.45s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"})};return o.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:t,xmlns:"http://www.w3.org/2000/svg",children:r[e]||r.shield})}function If(){const{lang:e,setLang:n,t}=Ze();return o.jsxs("div",{className:"topbar",children:[o.jsxs("div",{className:"container topbar-inner",children:[o.jsx("div",{className:"topbar-left",children:o.jsxs("span",{className:"topbar-gov-label",children:[o.jsx(T,{name:"shield",size:14,color:"#c5a253"}),t.ui.officialPortal]})}),o.jsxs("div",{className:"topbar-right",children:[o.jsxs("div",{className:"topbar-lang",children:[o.jsx("button",{className:e==="en"?"lang-active":"lang-btn",onClick:()=>n("en"),children:"EN"}),o.jsx("span",{className:"lang-sep",children:"|"}),o.jsx("button",{className:e==="bm"?"lang-active":"lang-btn",onClick:()=>n("bm"),children:"BM"})]}),o.jsxs("div",{className:"topbar-links",children:[o.jsx("a",{href:"#accessibility",className:"topbar-link",children:t.ui.accessibility}),o.jsx("a",{href:"#sitemap",className:"topbar-link",children:t.ui.sitemap}),o.jsx("a",{href:"#faq",className:"topbar-link",children:t.ui.faq}),o.jsx("a",{href:"#contact",className:"topbar-link",children:t.ui.contactUs})]})]})]}),o.jsx("style",{children:`
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
        }
      `})]})}function Kf(){const[e,n]=ie.useState(!1),[t,r]=ie.useState(!1),{t:a}=Ze();return ie.useEffect(()=>{const i=()=>n(window.scrollY>100);return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),o.jsxs("header",{className:`header ${e?"header-scrolled":""}`,children:[o.jsxs("div",{className:"container header-inner",children:[o.jsxs("a",{href:"#home",className:"header-logo",onClick:()=>r(!1),children:[o.jsx("img",{src:"/mkn-portal/mkn-emblem.png",alt:"Majlis Keselamatan Negara",className:"logo-img"}),o.jsxs("div",{className:"logo-text",children:[o.jsx("span",{className:"logo-title",children:"MAJLIS KESELAMATAN NEGARA"}),o.jsx("span",{className:"logo-subtitle",children:a.ui.logoSubtitle})]})]}),o.jsxs("nav",{className:`header-nav ${t?"nav-open":""}`,children:[a.navItems.map(i=>o.jsx("a",{href:i.href,className:"nav-link",onClick:()=>r(!1),children:i.label},i.href)),o.jsx("a",{href:"#contact",className:"btn btn-primary nav-cta",onClick:()=>r(!1),children:a.ui.emergencyContact})]}),o.jsx("button",{className:"mobile-toggle",onClick:()=>r(!t),"aria-label":"Toggle menu",children:o.jsx(T,{name:t?"close":"menu",size:26,color:"#0d2240"})})]}),o.jsx("style",{children:`
        .header {
          background: var(--mkn-white);
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
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--mkn-navy);
          letter-spacing: 0.5px;
        }
        .logo-subtitle {
          font-size: 0.72rem;
          color: var(--mkn-gray);
          letter-spacing: 0.3px;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          padding: 10px 14px;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--mkn-navy);
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
            background: var(--mkn-white);
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
      `})]})}function Rf(){const{t:e}=Ze(),n=e.heroContent;return o.jsxs("section",{id:"home",className:"hero",children:[o.jsx("div",{className:"hero-bg-pattern"}),o.jsx("div",{className:"hero-overlay"}),o.jsxs("div",{className:"container hero-content",children:[o.jsxs("div",{className:"hero-badge",children:[o.jsx("span",{className:"hero-badge-dot"}),n.badge]}),o.jsxs("h1",{className:"hero-title",children:[n.title,o.jsx("span",{className:"hero-title-accent",children:n.subtitle})]}),o.jsx("p",{className:"hero-description",children:n.description}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("a",{href:"#corporate",className:"btn btn-primary",children:[n.primaryAction,o.jsx(T,{name:"arrow",size:18,color:"#0d2240"})]}),o.jsx("a",{href:"#involvement",className:"btn btn-outline",children:n.secondaryAction})]}),o.jsx("div",{className:"hero-stats",children:n.stats.map((t,r)=>o.jsxs("div",{className:"hero-stat",style:{animationDelay:`${.3+r*.1}s`},children:[o.jsx("div",{className:"hero-stat-value",children:t.value}),o.jsx("div",{className:"hero-stat-label",children:t.label})]},r))})]}),o.jsxs("div",{className:"hero-scroll-indicator",children:[o.jsx("span",{children:e.ui.scrollExplore}),o.jsx(T,{name:"chevron",size:20,color:"rgba(255,255,255,0.6)"})]}),o.jsx("style",{children:`
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
          font-size: 3.5rem;
          color: var(--mkn-white);
          margin-bottom: 20px;
          line-height: 1.15;
          font-weight: 800;
        }
        .hero-title-accent {
          display: block;
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--mkn-gold);
          letter-spacing: 2px;
          margin-top: 8px;
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
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--mkn-gold);
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-label {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.5px;
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
      `})]})}function Of(){const{t:e}=Ze(),{aboutInfo:n,visionMission:t,orgStructure:r,leadership:a}=e;return o.jsxs("section",{id:"corporate",className:"section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:e.ui.corporateInfo}),o.jsx("p",{className:"subtitle",children:e.ui.corporateInfoSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsxs("div",{className:"about-grid",children:[o.jsxs("div",{className:"about-text",children:[o.jsx("h3",{className:"about-heading",children:n.heading}),o.jsx("p",{className:"about-intro",children:n.intro}),n.body.map((i,l)=>o.jsx("p",{className:"about-body-text",children:i},l))]}),o.jsx("div",{className:"about-facts",children:o.jsxs("div",{className:"facts-card",children:[o.jsxs("div",{className:"facts-header",children:[o.jsx(T,{name:"document",size:20,color:"#c5a253"}),o.jsx("span",{children:e.ui.keyFacts})]}),o.jsx("div",{className:"facts-list",children:n.keyFacts.map((i,l)=>o.jsxs("div",{className:"fact-item",children:[o.jsx("span",{className:"fact-label",children:i.label}),o.jsx("span",{className:"fact-value",children:i.value})]},l))})]})})]}),o.jsxs("div",{className:"vm-section",children:[o.jsxs("div",{className:"vm-card vm-vision",children:[o.jsx("div",{className:"vm-icon-wrap",children:o.jsx(T,{name:"star",size:28,color:"#c5a253"})}),o.jsx("h3",{children:e.ui.ourVision}),o.jsx("p",{children:t.vision})]}),o.jsxs("div",{className:"vm-card vm-mission",children:[o.jsx("div",{className:"vm-icon-wrap",children:o.jsx(T,{name:"target",size:28,color:"#c5a253"})}),o.jsx("h3",{children:e.ui.ourMission}),o.jsx("p",{children:t.mission})]})]}),o.jsxs("div",{className:"values-section",children:[o.jsx("h3",{className:"values-heading",children:e.ui.coreValues}),o.jsx("div",{className:"values-grid",children:t.values.map((i,l)=>o.jsxs("div",{className:"value-card",children:[o.jsx("div",{className:"value-icon",children:o.jsx(T,{name:i.icon,size:24,color:"#c5a253"})}),o.jsx("h4",{children:i.title}),o.jsx("p",{children:i.description})]},l))})]}),o.jsxs("div",{className:"org-section",children:[o.jsxs("div",{className:"section-header",style:{marginBottom:"40px"},children:[o.jsx("h3",{style:{fontSize:"1.6rem"},children:r.heading}),o.jsx("p",{className:"subtitle",children:r.description})]}),o.jsx("div",{className:"org-tiers",children:r.levels.map((i,l)=>o.jsxs("div",{className:"org-tier",children:[o.jsxs("div",{className:"org-tier-badge",style:{background:l===0?"var(--mkn-navy)":l===1?"var(--mkn-navy-light)":"var(--mkn-navy-lighter)"},children:[e.ui.tier," ",l+1]}),o.jsxs("div",{className:"org-tier-content",children:[o.jsx("h4",{className:"org-tier-title",children:i.title}),o.jsx("p",{className:"org-tier-desc",children:i.desc}),o.jsx("div",{className:"org-members",children:i.members.map((s,u)=>o.jsx("span",{className:"org-member-tag",children:s},u))})]}),l<r.levels.length-1&&o.jsx("div",{className:"org-connector",children:o.jsx(T,{name:"chevron",size:20,color:"#c5a253"})})]},l))})]}),o.jsxs("div",{className:"leadership-section",children:[o.jsxs("div",{className:"section-header",style:{marginBottom:"40px"},children:[o.jsx("h3",{style:{fontSize:"1.6rem"},children:e.ui.keyLeadership}),o.jsx("p",{className:"subtitle",children:e.ui.leadershipSubtitle})]}),o.jsx("div",{className:"leadership-grid",children:a.map((i,l)=>o.jsxs("div",{className:"leader-card",children:[o.jsx("div",{className:"leader-avatar",style:{background:i.color},children:i.initials}),o.jsxs("div",{className:"leader-info",children:[o.jsx("h4",{className:"leader-name",children:i.name}),o.jsx("p",{className:"leader-position",children:i.position}),o.jsx("span",{className:"leader-role",children:i.role})]})]},l))})]})]}),o.jsx("style",{children:`
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
          color: var(--mkn-navy);
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
          color: #374151;
          margin-bottom: 16px;
          font-weight: 500;
          line-height: 1.8;
        }
        .about-body-text {
          color: #4b5563;
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
          background: var(--mkn-cream);
          border-radius: 12px;
          padding: 36px;
          border: 1px solid var(--mkn-gray-light);
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
          color: #4b5563;
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
          background: var(--mkn-white);
          border: 1px solid var(--mkn-gray-light);
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
          color: var(--mkn-gray);
          line-height: 1.6;
        }

        /* Org Structure */
        .org-section {
          background: var(--mkn-cream);
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
          background: var(--mkn-white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--mkn-gray-light);
          box-shadow: var(--shadow-sm);
        }
        .org-tier-title {
          font-size: 1.15rem;
          margin-bottom: 8px;
        }
        .org-tier-desc {
          font-size: 0.88rem;
          color: var(--mkn-gray);
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
          background: rgba(13, 34, 64, 0.06);
          color: var(--mkn-navy);
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
          background: var(--mkn-white);
          border-radius: 12px;
          padding: 28px;
          text-align: center;
          border: 1px solid var(--mkn-gray-light);
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
          color: var(--mkn-gray);
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
      `})]})}function Ff(){const[e,n]=ie.useState(0),{t}=Ze(),r=t.involvementAreas;return o.jsxs("section",{id:"involvement",className:"section involvement-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:t.ui.involvement}),o.jsx("p",{className:"subtitle",children:t.ui.involvementSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsx("div",{className:"involvement-tabs",children:r.map((a,i)=>o.jsxs("button",{className:`inv-tab ${e===i?"inv-tab-active":""}`,onClick:()=>n(i),style:e===i?{borderBottomColor:a.color}:{},children:[o.jsx("span",{className:"inv-tab-icon",style:{background:e===i?a.color:"transparent",color:e===i?"#fff":a.color},children:o.jsx(T,{name:a.icon,size:18,color:e===i?"#fff":a.color})}),o.jsx("span",{className:"inv-tab-label",children:a.title})]},a.id))}),o.jsx("div",{className:"involvement-content",children:r.map((a,i)=>e===i&&o.jsxs("div",{className:"inv-detail fade-in-up",style:{animationDuration:"0.4s"},children:[o.jsx("div",{className:"inv-detail-header",style:{backgroundImage:`linear-gradient(135deg, ${a.color}ee, ${a.color}bb), url(/mkn-portal/${a.image})`},children:o.jsxs("div",{className:"inv-detail-header-content",children:[o.jsx("div",{className:"inv-detail-icon-wrap",children:o.jsx(T,{name:a.icon,size:32,color:"#fff"})}),o.jsxs("div",{className:"inv-detail-titles",children:[o.jsx("span",{className:"inv-detail-tag",children:a.tag}),o.jsx("h3",{children:a.title})]})]})}),o.jsxs("div",{className:"inv-detail-body",children:[o.jsx("p",{className:"inv-detail-summary",children:a.summary}),o.jsxs("div",{className:"inv-highlights",children:[o.jsxs("h4",{className:"inv-highlights-title",children:[o.jsx(T,{name:"star",size:16,color:"#c5a253"}),t.ui.keyAchievements]}),o.jsx("div",{className:"inv-highlights-grid",children:a.highlights.map((l,s)=>o.jsxs("div",{className:"inv-highlight-item",children:[o.jsx("span",{className:"inv-check",style:{color:a.color},children:o.jsx(T,{name:"star",size:14,color:a.color})}),o.jsx("span",{children:l})]},s))})]})]})]},a.id))}),o.jsx("div",{className:"inv-overview-grid",children:r.map((a,i)=>o.jsxs("div",{className:"inv-overview-card",onClick:()=>{var l;n(i),(l=document.getElementById("involvement"))==null||l.scrollIntoView({behavior:"smooth"})},children:[o.jsxs("div",{className:"inv-overview-img-wrap",children:[o.jsx("img",{src:`/mkn-portal/${a.image}`,alt:a.title,className:"inv-overview-img"}),o.jsx("span",{className:"inv-overview-tag",style:{background:`${a.color}15`,color:a.color},children:a.tag})]}),o.jsxs("div",{className:"inv-overview-card-body",children:[o.jsx("div",{className:"inv-overview-icon",style:{background:`${a.color}15`,color:a.color},children:o.jsx(T,{name:a.icon,size:22,color:a.color})}),o.jsx("h4",{children:a.title}),o.jsxs("p",{children:[a.summary.slice(0,100),"..."]})]})]},a.id))})]}),o.jsx("style",{children:`
        .involvement-section {
          background: var(--mkn-cream);
        }

        /* Tabs */
        .involvement-tabs {
          display: flex;
          gap: 4px;
          margin-bottom: 32px;
          overflow-x: auto;
          padding-bottom: 4px;
          border-bottom: 2px solid var(--mkn-gray-light);
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
          color: var(--mkn-gray);
          white-space: nowrap;
          transition: all 0.25s ease;
          border-bottom: 3px solid transparent;
          margin-bottom: -2px;
        }
        .inv-tab:hover {
          color: var(--mkn-navy);
          background: rgba(13, 34, 64, 0.04);
        }
        .inv-tab-active {
          color: var(--mkn-navy);
          background: var(--mkn-white);
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
          background: var(--mkn-white);
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
          color: #374151;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .inv-highlights-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          margin-bottom: 16px;
          color: var(--mkn-navy);
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
          color: #4b5563;
          line-height: 1.6;
          padding: 12px 16px;
          background: var(--mkn-cream);
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
          background: var(--mkn-white);
          border-radius: 12px;
          border: 1px solid var(--mkn-gray-light);
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
          color: var(--mkn-gray);
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
      `})]})}function Uf(){const{t:e}=Ze(),n=e.newsItems;return o.jsxs("section",{id:"news",className:"section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:e.ui.newsAnnouncements}),o.jsx("p",{className:"subtitle",children:e.ui.newsSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsxs("div",{className:"news-grid",children:[o.jsxs("div",{className:"news-featured",children:[o.jsxs("div",{className:"news-featured-banner",children:[o.jsx("div",{className:"news-featured-pattern"}),o.jsx("span",{className:"news-tag",style:{background:n[0].tagColor},children:n[0].tag}),o.jsx(T,{name:"alert",size:48,color:"rgba(255,255,255,0.2)"})]}),o.jsxs("div",{className:"news-featured-body",children:[o.jsxs("div",{className:"news-meta",children:[o.jsx("span",{className:"news-category",children:n[0].category}),o.jsx("span",{className:"news-dot",children:"•"}),o.jsx("span",{className:"news-date",children:n[0].date})]}),o.jsx("h3",{className:"news-featured-title",children:n[0].title}),o.jsx("p",{className:"news-featured-excerpt",children:n[0].excerpt}),o.jsxs("a",{href:"#news",className:"news-read-more",children:[e.ui.readFullArticle,o.jsx(T,{name:"arrow",size:16,color:"#c5a253"})]})]})]}),o.jsx("div",{className:"news-list",children:n.slice(1).map((t,r)=>o.jsx("div",{className:"news-card",children:o.jsxs("div",{className:"news-card-body",children:[o.jsxs("div",{className:"news-meta",children:[o.jsx("span",{className:"news-category",children:t.category}),o.jsx("span",{className:"news-dot",children:"•"}),o.jsx("span",{className:"news-date",children:t.date})]}),o.jsx("h4",{className:"news-card-title",children:t.title}),o.jsx("p",{className:"news-card-excerpt",children:t.excerpt}),o.jsxs("div",{className:"news-card-footer",children:[o.jsx("span",{className:"news-tag-sm",style:{background:`${t.tagColor}15`,color:t.tagColor},children:t.tag}),o.jsxs("a",{href:"#news",className:"news-card-link",children:[e.ui.readMore,o.jsx(T,{name:"arrow",size:14,color:"#0d2240"})]})]})]})},r))})]}),o.jsx("div",{className:"news-cta",children:o.jsxs("a",{href:"#news",className:"btn btn-navy",children:[e.ui.viewAllAnnouncements,o.jsx(T,{name:"arrow",size:18,color:"#fff"})]})})]}),o.jsx("style",{children:`
        .news-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        /* Featured */
        .news-featured {
          background: var(--mkn-white);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--mkn-gray-light);
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
          color: #4b5563;
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
          background: var(--mkn-white);
          border-radius: 12px;
          border: 1px solid var(--mkn-gray-light);
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
          color: var(--mkn-navy);
        }
        .news-card-excerpt {
          font-size: 0.82rem;
          color: var(--mkn-gray);
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
          color: var(--mkn-navy);
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
      `})]})}function Vf(e,n,t){const[r,a]=ie.useState(0);return ie.useEffect(()=>{if(!t)return;let i=null,l;const s=u=>{i===null&&(i=u);const d=Math.min((u-i)/n,1),h=1-Math.pow(1-d,3);a(e*h),d<1?l=requestAnimationFrame(s):a(e)};return l=requestAnimationFrame(s),()=>cancelAnimationFrame(l)},[e,n,t]),r}function Bf({stat:e,start:n}){const t=Vf(e.value,1800,n),r=a=>e.value>=1e3?Math.round(a).toLocaleString():e.value<10?a.toFixed(1):Math.round(a).toString();return o.jsxs("div",{className:"stat-card",children:[o.jsx("div",{className:"stat-icon",children:o.jsx(T,{name:e.icon,size:24,color:"#c5a253"})}),o.jsxs("div",{className:"stat-value",children:[r(t),o.jsx("span",{className:"stat-suffix",children:e.suffix})]}),o.jsx("div",{className:"stat-label",children:e.label})]})}function $f(){const e=ie.useRef(null),[n,t]=ie.useState(!1),{t:r}=Ze(),a=r.statistics;return ie.useEffect(()=>{const i=new IntersectionObserver(([l])=>{l.isIntersecting&&(t(!0),i.disconnect())},{threshold:.2});return e.current&&i.observe(e.current),()=>i.disconnect()},[]),o.jsxs("section",{id:"statistics",className:"section stats-section",ref:e,children:[o.jsx("div",{className:"stats-bg"}),o.jsxs("div",{className:"container",style:{position:"relative",zIndex:2},children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{style:{color:"var(--mkn-white)"},children:r.ui.impactInNumbers}),o.jsx("p",{className:"subtitle",style:{color:"rgba(255,255,255,0.7)"},children:r.ui.statisticsSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsx("div",{className:"stats-grid",children:a.map((i,l)=>o.jsx(Bf,{stat:i,start:n},l))})]}),o.jsx("style",{children:`
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
          font-size: 2.2rem;
          font-weight: 800;
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
      `})]})}function Hf(){const{t:e}=Ze(),n=e.services;return o.jsxs("section",{id:"services",className:"section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("h2",{children:e.ui.servicesTitle}),o.jsx("p",{className:"subtitle",children:e.ui.servicesSubtitle}),o.jsx("div",{className:"section-divider"})]}),o.jsx("div",{className:"services-grid",children:n.map((t,r)=>o.jsxs("div",{className:"service-card",children:[o.jsx("div",{className:"service-icon-wrap",children:o.jsx(T,{name:t.icon,size:26,color:"#0d2240"})}),o.jsx("h3",{className:"service-title",children:t.title}),o.jsx("p",{className:"service-desc",children:t.description}),o.jsxs("a",{href:"#services",className:"service-action",children:[t.action,o.jsx(T,{name:"arrow",size:15,color:"#c5a253"})]})]},r))})]}),o.jsx("style",{children:`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: var(--mkn-white);
          border: 1px solid var(--mkn-gray-light);
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
          background: rgba(13, 34, 64, 0.06);
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
          color: var(--mkn-gray);
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
      `})]})}function Wf(){const{t:e}=Ze(),{footerLinks:n,emergencyContacts:t}=e;return o.jsxs("footer",{id:"contact",children:[o.jsx("div",{className:"emergency-banner",children:o.jsxs("div",{className:"container emergency-inner",children:[o.jsxs("div",{className:"emergency-title",children:[o.jsx(T,{name:"alert",size:28,color:"#dc2626"}),o.jsxs("div",{children:[o.jsx("h3",{children:e.ui.emergencyContacts}),o.jsx("p",{children:e.ui.emergencyContactsSubtitle})]})]}),o.jsx("div",{className:"emergency-contacts",children:t.map((r,a)=>o.jsxs("div",{className:"emergency-contact-item",children:[o.jsx("div",{className:"emergency-contact-icon",children:o.jsx(T,{name:"phone",size:16,color:"#fff"})}),o.jsxs("div",{className:"emergency-contact-info",children:[o.jsx("span",{className:"emergency-contact-name",children:r.name}),o.jsx("span",{className:"emergency-contact-phone",children:r.phone}),o.jsxs("span",{className:"emergency-contact-hours",children:[o.jsx(T,{name:"clock",size:10,color:"#15803d"}),r.hours]})]})]},a))})]})}),o.jsxs("div",{className:"footer-main",children:[o.jsxs("div",{className:"container footer-grid",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsxs("div",{className:"footer-logo",children:[o.jsx("img",{src:"/mkn-portal/mkn-emblem.png",alt:"Majlis Keselamatan Negara",className:"footer-logo-img"}),o.jsxs("div",{children:[o.jsx("div",{className:"footer-logo-title",children:"MAJLIS KESELAMATAN NEGARA"}),o.jsx("div",{className:"footer-logo-sub",children:e.ui.logoSubtitle})]})]}),o.jsx("p",{className:"footer-desc",children:"Safeguarding Malaysia's sovereignty, territorial integrity, and public safety through strategic security policies, disaster management, and crisis coordination."}),o.jsxs("div",{className:"footer-address",children:[o.jsx(T,{name:"location",size:16,color:"#c5a253"}),o.jsx("span",{children:"Aras 5-9, Blok D4, Kompleks D, Pusat Pentadbiran Kerajaan Persekutuan, 62502 Putrajaya, Malaysia"})]}),o.jsxs("div",{className:"footer-contact-info",children:[o.jsxs("div",{className:"footer-contact-item",children:[o.jsx(T,{name:"phone",size:15,color:"#c5a253"}),o.jsx("span",{children:"+603-8888 4000"})]}),o.jsxs("div",{className:"footer-contact-item",children:[o.jsx(T,{name:"email",size:15,color:"#c5a253"}),o.jsx("span",{children:"pro@mkn.gov.my"})]})]})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.aboutMKN}),o.jsx("ul",{children:n.about.map((r,a)=>o.jsx("li",{children:o.jsx("a",{href:"#corporate",children:r})},a))})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.ourServices}),o.jsx("ul",{children:n.services.map((r,a)=>o.jsx("li",{children:o.jsx("a",{href:"#involvement",children:r})},a))})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.resources}),o.jsx("ul",{children:n.resources.map((r,a)=>o.jsx("li",{children:o.jsx("a",{href:"#services",children:r})},a))})]}),o.jsxs("div",{className:"footer-col",children:[o.jsx("h4",{children:e.ui.government}),o.jsx("ul",{children:n.government.map((r,a)=>o.jsx("li",{children:o.jsxs("a",{href:"#footer",className:"footer-ext-link",children:[r,o.jsx(T,{name:"external",size:12,color:"#6b7280"})]})},a))})]})]}),o.jsxs("div",{className:"container footer-social",children:[o.jsxs("div",{className:"footer-social-left",children:[o.jsx("span",{className:"footer-social-label",children:e.ui.followUs}),o.jsx("div",{className:"footer-social-icons",children:["facebook","twitter","instagram","youtube"].map(r=>o.jsx("a",{href:"#footer",className:"footer-social-icon",children:o.jsx(T,{name:r,size:18,color:"#c5a253"})},r))})]}),o.jsxs("div",{className:"footer-newsletter",children:[o.jsx("span",{className:"footer-newsletter-label",children:e.ui.subscribeToUpdates}),o.jsxs("div",{className:"footer-newsletter-input",children:[o.jsx("input",{type:"email",placeholder:e.ui.enterEmail}),o.jsx("button",{className:"btn btn-primary footer-subscribe-btn",children:e.ui.subscribe})]})]})]})]}),o.jsx("div",{className:"footer-copyright",children:o.jsxs("div",{className:"container copyright-inner",children:[o.jsx("div",{className:"copyright-left",children:o.jsx("span",{children:e.ui.copyright})}),o.jsxs("div",{className:"copyright-links",children:[o.jsx("a",{href:"#privacy",children:e.ui.privacyPolicy}),o.jsx("a",{href:"#terms",children:e.ui.termsOfUse}),o.jsx("a",{href:"#disclaimer",children:e.ui.disclaimer}),o.jsx("a",{href:"#cookies",children:e.ui.cookiePolicy})]}),o.jsx("div",{className:"copyright-last",children:o.jsx("span",{children:e.ui.lastUpdated})})]})}),o.jsx("style",{children:`
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
          color: var(--mkn-navy);
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
      `})]})}function Qf(){return o.jsxs(Af,{children:[o.jsx(If,{}),o.jsx(Kf,{}),o.jsxs("main",{children:[o.jsx(Rf,{}),o.jsx(Of,{}),o.jsx(Ff,{}),o.jsx($f,{}),o.jsx(Uf,{}),o.jsx(Hf,{})]}),o.jsx(Wf,{})]})}tc(document.getElementById("root")).render(o.jsx(ie.StrictMode,{children:o.jsx(Qf,{})}));
