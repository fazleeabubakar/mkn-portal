(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();var Xa={exports:{}},ol={},Za={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),cc=Symbol.for("react.portal"),dc=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),pc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),hc=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),vc=Symbol.for("react.suspense"),yc=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),$o=Symbol.iterator;function wc(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var Ja={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qa=Object.assign,es={};function sn(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Ja}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ts(){}ts.prototype=sn.prototype;function Wi(e,t,n){this.props=e,this.context=t,this.refs=es,this.updater=n||Ja}var Qi=Wi.prototype=new ts;Qi.constructor=Wi;qa(Qi,sn.prototype);Qi.isPureReactComponent=!0;var Ho=Array.isArray,ns=Object.prototype.hasOwnProperty,bi={current:null},rs={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)ns.call(t,r)&&!rs.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Zn,type:e,key:i,ref:o,props:l,_owner:bi.current}}function kc(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function Sc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bo=/\/+/g;function Cl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sc(""+e.key):t.toString(36)}function jr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Zn:case cc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Cl(o,0):r,Ho(l)?(n="",e!=null&&(n=e.replace(Bo,"$&/")+"/"),jr(l,t,n,"",function(d){return d})):l!=null&&(Yi(l)&&(l=kc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Bo,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Ho(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Cl(i,s);o+=jr(i,t,n,u,l)}else if(u=wc(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Cl(i,s++),o+=jr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function lr(e,t,n){if(e==null)return e;var r=[],l=0;return jr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Nc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Cr={transition:null},jc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Cr,ReactCurrentOwner:bi};function is(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!Yi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=sn;M.Fragment=dc;M.Profiler=pc;M.PureComponent=Wi;M.StrictMode=fc;M.Suspense=vc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jc;M.act=is;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qa({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=bi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ns.call(t,u)&&!rs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Zn,type:e.type,key:l,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:hc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};M.createElement=ls;M.createFactory=function(e){var t=ls.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:gc,render:e}};M.isValidElement=Yi;M.lazy=function(e){return{$$typeof:xc,_payload:{_status:-1,_result:e},_init:Nc}};M.memo=function(e,t){return{$$typeof:yc,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Cr.transition;Cr.transition={};try{e()}finally{Cr.transition=t}};M.unstable_act=is;M.useCallback=function(e,t){return se.current.useCallback(e,t)};M.useContext=function(e){return se.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return se.current.useDeferredValue(e)};M.useEffect=function(e,t){return se.current.useEffect(e,t)};M.useId=function(){return se.current.useId()};M.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return se.current.useMemo(e,t)};M.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};M.useRef=function(e){return se.current.useRef(e)};M.useState=function(e){return se.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return se.current.useTransition()};M.version="18.3.1";Za.exports=M;var je=Za.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cc=je,zc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),Pc=Object.prototype.hasOwnProperty,_c=Cc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mc={key:!0,ref:!0,__self:!0,__source:!0};function os(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Pc.call(t,r)&&!Mc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:zc,type:e,key:i,ref:o,props:l,_owner:_c.current}}ol.Fragment=Ec;ol.jsx=os;ol.jsxs=os;Xa.exports=ol;var a=Xa.exports,as={exports:{}},xe={},ss={exports:{}},us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,P){var _=j.length;j.push(P);e:for(;0<_;){var W=_-1>>>1,X=j[W];if(0<l(X,P))j[W]=P,j[_]=X,_=W;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var P=j[0],_=j.pop();if(_!==P){j[0]=_;e:for(var W=0,X=j.length,nr=X>>>1;W<nr;){var vt=2*(W+1)-1,jl=j[vt],yt=vt+1,rr=j[yt];if(0>l(jl,_))yt<X&&0>l(rr,jl)?(j[W]=rr,j[yt]=_,W=yt):(j[W]=jl,j[vt]=_,W=vt);else if(yt<X&&0>l(rr,_))j[W]=rr,j[yt]=_,W=yt;else break e}}return P}function l(j,P){var _=j.sortIndex-P.sortIndex;return _!==0?_:j.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var u=[],d=[],g=1,h=null,m=3,x=!1,w=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var P=n(d);P!==null;){if(P.callback===null)r(d);else if(P.startTime<=j)r(d),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(d)}}function v(j){if(k=!1,p(j),!w)if(n(u)!==null)w=!0,Sl(N);else{var P=n(d);P!==null&&Nl(v,P.startTime-j)}}function N(j,P){w=!1,k&&(k=!1,f(E),E=-1),x=!0;var _=m;try{for(p(P),h=n(u);h!==null&&(!(h.expirationTime>P)||j&&!Pe());){var W=h.callback;if(typeof W=="function"){h.callback=null,m=h.priorityLevel;var X=W(h.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(u)&&r(u),p(P)}else r(u);h=n(u)}if(h!==null)var nr=!0;else{var vt=n(d);vt!==null&&Nl(v,vt.startTime-P),nr=!1}return nr}finally{h=null,m=_,x=!1}}var C=!1,z=null,E=-1,K=5,L=-1;function Pe(){return!(e.unstable_now()-L<K)}function dn(){if(z!==null){var j=e.unstable_now();L=j;var P=!0;try{P=z(!0,j)}finally{P?fn():(C=!1,z=null)}}else C=!1}var fn;if(typeof c=="function")fn=function(){c(dn)};else if(typeof MessageChannel<"u"){var Uo=new MessageChannel,uc=Uo.port2;Uo.port1.onmessage=dn,fn=function(){uc.postMessage(null)}}else fn=function(){A(dn,0)};function Sl(j){z=j,C||(C=!0,fn())}function Nl(j,P){E=A(function(){j(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Sl(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var _=m;m=P;try{return j()}finally{m=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,P){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var _=m;m=j;try{return P()}finally{m=_}},e.unstable_scheduleCallback=function(j,P,_){var W=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?W+_:W):_=W,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=_+X,j={id:g++,callback:P,priorityLevel:j,startTime:_,expirationTime:X,sortIndex:-1},_>W?(j.sortIndex=_,t(d,j),n(u)===null&&j===n(d)&&(k?(f(E),E=-1):k=!0,Nl(v,_-W))):(j.sortIndex=X,t(u,j),w||x||(w=!0,Sl(N))),j},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(j){var P=m;return function(){var _=m;m=P;try{return j.apply(this,arguments)}finally{m=_}}}})(us);ss.exports=us;var Lc=ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=je,ye=Lc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cs=new Set,Rn={};function Dt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Rn[e]=t,e=0;e<t.length;e++)cs.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ql=Object.prototype.hasOwnProperty,Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ko={},Wo={};function Rc(e){return ql.call(Wo,e)?!0:ql.call(Ko,e)?!1:Dc.test(e)?Wo[e]=!0:(Ko[e]=!0,!1)}function Ic(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,t,n,r){if(t===null||typeof t>"u"||Ic(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gi=/[\-:]([a-z])/g;function Xi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gi,Xi);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gi,Xi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gi,Xi);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zi(e,t,n,r){var l=te.hasOwnProperty(t)?te[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Oc(t,n,l,r)&&(n=null),r||l===null?Rc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),Ot=Symbol.for("react.portal"),Ft=Symbol.for("react.fragment"),Ji=Symbol.for("react.strict_mode"),ei=Symbol.for("react.profiler"),ds=Symbol.for("react.provider"),fs=Symbol.for("react.context"),qi=Symbol.for("react.forward_ref"),ti=Symbol.for("react.suspense"),ni=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),ps=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,zl;function kn(e){if(zl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zl=t&&t[1]||""}return`
`+zl+e}var El=!1;function Pl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=s);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Fc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function ri(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ft:return"Fragment";case Ot:return"Portal";case ei:return"Profiler";case Ji:return"StrictMode";case ti:return"Suspense";case ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fs:return(e.displayName||"Context")+".Consumer";case ds:return(e._context.displayName||"Context")+".Provider";case qi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case eo:return t=e.displayName||null,t!==null?t:ri(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return ri(e(t))}catch{}}return null}function Ac(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ri(t);case 8:return t===Ji?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ms(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vc(e){var t=ms(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=Vc(e))}function hs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ms(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function li(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gs(e,t){t=t.checked,t!=null&&Zi(e,"checked",t,!1)}function ii(e,t){gs(e,t);var n=ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oi(e,t.type,n):t.hasOwnProperty("defaultValue")&&oi(e,t.type,ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oi(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ft(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Go(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Sn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ft(n)}}function vs(e,t){var n=ft(t.value),r=ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ys(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ys(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,xs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Uc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function ws(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function ks(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ws(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var $c=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if($c[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,Gt=null,Xt=null;function Zo(e){if(e=er(e)){if(typeof fi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=dl(t),fi(e.stateNode,e.type,t))}}function Ss(e){Gt?Xt?Xt.push(e):Xt=[e]:Gt=e}function Ns(){if(Gt){var e=Gt,t=Xt;if(Xt=Gt=null,Zo(e),t)for(e=0;e<t.length;e++)Zo(t[e])}}function js(e,t){return e(t)}function Cs(){}var _l=!1;function zs(e,t,n){if(_l)return e(t,n);_l=!0;try{return js(e,t,n)}finally{_l=!1,(Gt!==null||Xt!==null)&&(Cs(),Ns())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var pi=!1;if(Qe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){pi=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{pi=!1}function Hc(e,t,n,r,l,i,o,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var zn=!1,Fr=null,Ar=!1,mi=null,Bc={onError:function(e){zn=!0,Fr=e}};function Kc(e,t,n,r,l,i,o,s,u){zn=!1,Fr=null,Hc.apply(Bc,arguments)}function Wc(e,t,n,r,l,i,o,s,u){if(Kc.apply(this,arguments),zn){if(zn){var d=Fr;zn=!1,Fr=null}else throw Error(y(198));Ar||(Ar=!0,mi=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Es(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jo(e){if(Rt(e)!==e)throw Error(y(188))}function Qc(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Jo(l),e;if(i===r)return Jo(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ps(e){return e=Qc(e),e!==null?_s(e):null}function _s(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_s(e);if(t!==null)return t;e=e.sibling}return null}var Ms=ye.unstable_scheduleCallback,qo=ye.unstable_cancelCallback,bc=ye.unstable_shouldYield,Yc=ye.unstable_requestPaint,Q=ye.unstable_now,Gc=ye.unstable_getCurrentPriorityLevel,no=ye.unstable_ImmediatePriority,Ls=ye.unstable_UserBlockingPriority,Vr=ye.unstable_NormalPriority,Xc=ye.unstable_LowPriority,Ts=ye.unstable_IdlePriority,al=null,Ve=null;function Zc(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:ed,Jc=Math.log,qc=Math.LN2;function ed(e){return e>>>=0,e===0?32:31-(Jc(e)/qc|0)|0}var sr=64,ur=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Nn(s):(i&=o,i!==0&&(r=Nn(i)))}else o=n&~l,o!==0?r=Nn(o):i!==0&&(r=Nn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-De(i),s=1<<o,u=l[o];u===-1?(!(s&n)||s&r)&&(l[o]=td(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ds(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function rd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ro(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var R=0;function Rs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Is,lo,Os,Fs,As,gi=!1,cr=[],lt=null,it=null,ot=null,Fn=new Map,An=new Map,et=[],ld="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ea(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=er(t),t!==null&&lo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function id(e,t,n,r,l){switch(t){case"focusin":return lt=hn(lt,e,t,n,r,l),!0;case"dragenter":return it=hn(it,e,t,n,r,l),!0;case"mouseover":return ot=hn(ot,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Fn.set(i,hn(Fn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,An.set(i,hn(An.get(i)||null,e,t,n,r,l)),!0}return!1}function Vs(e){var t=Nt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Es(n),t!==null){e.blockedOn=t,As(e.priority,function(){Os(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);di=r,n.target.dispatchEvent(r),di=null}else return t=er(n),t!==null&&lo(t),e.blockedOn=n,!1;t.shift()}return!0}function ta(e,t,n){zr(e)&&n.delete(t)}function od(){gi=!1,lt!==null&&zr(lt)&&(lt=null),it!==null&&zr(it)&&(it=null),ot!==null&&zr(ot)&&(ot=null),Fn.forEach(ta),An.forEach(ta)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,od)))}function Vn(e){function t(l){return gn(l,e)}if(0<cr.length){gn(cr[0],e);for(var n=1;n<cr.length;n++){var r=cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&gn(lt,e),it!==null&&gn(it,e),ot!==null&&gn(ot,e),Fn.forEach(t),An.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Vs(n),n.blockedOn===null&&et.shift()}var Zt=Xe.ReactCurrentBatchConfig,$r=!0;function ad(e,t,n,r){var l=R,i=Zt.transition;Zt.transition=null;try{R=1,io(e,t,n,r)}finally{R=l,Zt.transition=i}}function sd(e,t,n,r){var l=R,i=Zt.transition;Zt.transition=null;try{R=4,io(e,t,n,r)}finally{R=l,Zt.transition=i}}function io(e,t,n,r){if($r){var l=vi(e,t,n,r);if(l===null)Ul(e,t,r,Hr,n),ea(e,r);else if(id(l,e,t,n,r))r.stopPropagation();else if(ea(e,r),t&4&&-1<ld.indexOf(e)){for(;l!==null;){var i=er(l);if(i!==null&&Is(i),i=vi(e,t,n,r),i===null&&Ul(e,t,r,Hr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var Hr=null;function vi(e,t,n,r){if(Hr=null,e=to(r),e=Nt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Es(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case no:return 1;case Ls:return 4;case Vr:case Xc:return 16;case Ts:return 536870912;default:return 16}default:return 16}}var nt=null,oo=null,Er=null;function $s(){if(Er)return Er;var e,t=oo,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function na(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dr:na,this.isPropagationStopped=na,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ao=we(un),qn=H({},un,{view:0,detail:0}),ud=we(qn),Ll,Tl,vn,sl=H({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:so,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Ll=e.screenX-vn.screenX,Tl=e.screenY-vn.screenY):Tl=Ll=0,vn=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),ra=we(sl),cd=H({},sl,{dataTransfer:0}),dd=we(cd),fd=H({},qn,{relatedTarget:0}),Dl=we(fd),pd=H({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),md=we(pd),hd=H({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gd=we(hd),vd=H({},un,{data:0}),la=we(vd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wd[e])?!!t[e]:!1}function so(){return kd}var Sd=H({},qn,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:so,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=we(Sd),jd=H({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ia=we(jd),Cd=H({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:so}),zd=we(Cd),Ed=H({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pd=we(Ed),_d=H({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Md=we(_d),Ld=[9,13,27,32],uo=Qe&&"CompositionEvent"in window,En=null;Qe&&"documentMode"in document&&(En=document.documentMode);var Td=Qe&&"TextEvent"in window&&!En,Hs=Qe&&(!uo||En&&8<En&&11>=En),oa=" ",aa=!1;function Bs(e,t){switch(e){case"keyup":return Ld.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Dd(e,t){switch(e){case"compositionend":return Ks(t);case"keypress":return t.which!==32?null:(aa=!0,oa);case"textInput":return e=t.data,e===oa&&aa?null:e;default:return null}}function Rd(e,t){if(At)return e==="compositionend"||!uo&&Bs(e,t)?(e=$s(),Er=oo=nt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hs&&t.locale!=="ko"?null:t.data;default:return null}}var Id={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Id[e.type]:t==="textarea"}function Ws(e,t,n,r){Ss(r),t=Br(t,"onChange"),0<t.length&&(n=new ao("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,Un=null;function Od(e){nu(e,0)}function ul(e){var t=$t(e);if(hs(t))return e}function Fd(e,t){if(e==="change")return t}var Qs=!1;if(Qe){var Rl;if(Qe){var Il="oninput"in document;if(!Il){var ua=document.createElement("div");ua.setAttribute("oninput","return;"),Il=typeof ua.oninput=="function"}Rl=Il}else Rl=!1;Qs=Rl&&(!document.documentMode||9<document.documentMode)}function ca(){Pn&&(Pn.detachEvent("onpropertychange",bs),Un=Pn=null)}function bs(e){if(e.propertyName==="value"&&ul(Un)){var t=[];Ws(t,Un,e,to(e)),zs(Od,t)}}function Ad(e,t,n){e==="focusin"?(ca(),Pn=t,Un=n,Pn.attachEvent("onpropertychange",bs)):e==="focusout"&&ca()}function Vd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Un)}function Ud(e,t){if(e==="click")return ul(t)}function $d(e,t){if(e==="input"||e==="change")return ul(t)}function Hd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Hd;function $n(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ql.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fa(e,t){var n=da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=da(n)}}function Ys(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ys(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gs(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function co(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Bd(e){var t=Gs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ys(n.ownerDocument.documentElement,n)){if(r!==null&&co(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=fa(n,i);var o=fa(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Kd=Qe&&"documentMode"in document&&11>=document.documentMode,Vt=null,yi=null,_n=null,xi=!1;function pa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xi||Vt==null||Vt!==Or(r)||(r=Vt,"selectionStart"in r&&co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&$n(_n,r)||(_n=r,r=Br(yi,"onSelect"),0<r.length&&(t=new ao("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vt)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Ol={},Xs={};Qe&&(Xs=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function cl(e){if(Ol[e])return Ol[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xs)return Ol[e]=t[n];return e}var Zs=cl("animationend"),Js=cl("animationiteration"),qs=cl("animationstart"),eu=cl("transitionend"),tu=new Map,ma="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){tu.set(e,t),Dt(t,[e])}for(var Fl=0;Fl<ma.length;Fl++){var Al=ma[Fl],Wd=Al.toLowerCase(),Qd=Al[0].toUpperCase()+Al.slice(1);mt(Wd,"on"+Qd)}mt(Zs,"onAnimationEnd");mt(Js,"onAnimationIteration");mt(qs,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(eu,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bd=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wc(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;ha(l,s,d),i=u}else for(o=0;o<r.length;o++){if(s=r[o],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;ha(l,s,d),i=u}}}if(Ar)throw e=mi,Ar=!1,mi=null,e}function O(e,t){var n=t[ji];n===void 0&&(n=t[ji]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[pr]){e[pr]=!0,cs.forEach(function(n){n!=="selectionchange"&&(bd.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,Vl("selectionchange",!1,t))}}function ru(e,t,n,r){switch(Us(t)){case 1:var l=ad;break;case 4:l=sd;break;default:l=io}n=l.bind(null,t,n,e),l=void 0,!pi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Nt(s),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}s=s.parentNode}}r=r.return}zs(function(){var d=i,g=to(n),h=[];e:{var m=tu.get(e);if(m!==void 0){var x=ao,w=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":x=Nd;break;case"focusin":w="focus",x=Dl;break;case"focusout":w="blur",x=Dl;break;case"beforeblur":case"afterblur":x=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=zd;break;case Zs:case Js:case qs:x=md;break;case eu:x=Pd;break;case"scroll":x=ud;break;case"wheel":x=Md;break;case"copy":case"cut":case"paste":x=gd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ia}var k=(t&4)!==0,A=!k&&e==="scroll",f=k?m!==null?m+"Capture":null:m;k=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=On(c,f),v!=null&&k.push(Bn(c,v,p)))),A)break;c=c.return}0<k.length&&(m=new x(m,w,null,n,g),h.push({event:m,listeners:k}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==di&&(w=n.relatedTarget||n.fromElement)&&(Nt(w)||w[be]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?Nt(w):null,w!==null&&(A=Rt(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(k=ra,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=ia,v="onPointerLeave",f="onPointerEnter",c="pointer"),A=x==null?m:$t(x),p=w==null?m:$t(w),m=new k(v,c+"leave",x,n,g),m.target=A,m.relatedTarget=p,v=null,Nt(g)===d&&(k=new k(f,c+"enter",w,n,g),k.target=p,k.relatedTarget=A,v=k),A=v,x&&w)t:{for(k=x,f=w,c=0,p=k;p;p=It(p))c++;for(p=0,v=f;v;v=It(v))p++;for(;0<c-p;)k=It(k),c--;for(;0<p-c;)f=It(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;x!==null&&ga(h,m,x,k,!1),w!==null&&A!==null&&ga(h,A,w,k,!0)}}e:{if(m=d?$t(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=Fd;else if(sa(m))if(Qs)N=$d;else{N=Vd;var C=Ad}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=Ud);if(N&&(N=N(e,d))){Ws(h,N,n,g);break e}C&&C(e,m,d),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&oi(m,"number",m.value)}switch(C=d?$t(d):window,e){case"focusin":(sa(C)||C.contentEditable==="true")&&(Vt=C,yi=d,_n=null);break;case"focusout":_n=yi=Vt=null;break;case"mousedown":xi=!0;break;case"contextmenu":case"mouseup":case"dragend":xi=!1,pa(h,n,g);break;case"selectionchange":if(Kd)break;case"keydown":case"keyup":pa(h,n,g)}var z;if(uo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else At?Bs(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Hs&&n.locale!=="ko"&&(At||E!=="onCompositionStart"?E==="onCompositionEnd"&&At&&(z=$s()):(nt=g,oo="value"in nt?nt.value:nt.textContent,At=!0)),C=Br(d,E),0<C.length&&(E=new la(E,e,null,n,g),h.push({event:E,listeners:C}),z?E.data=z:(z=Ks(n),z!==null&&(E.data=z)))),(z=Td?Dd(e,n):Rd(e,n))&&(d=Br(d,"onBeforeInput"),0<d.length&&(g=new la("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:d}),g.data=z))}nu(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=On(e,n),i!=null&&r.unshift(Bn(e,i,l)),i=On(e,t),i!=null&&r.push(Bn(e,i,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ga(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=On(n,i),u!=null&&o.unshift(Bn(n,u,s))):l||(u=On(n,i),u!=null&&o.push(Bn(n,u,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Yd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function va(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Gd,"")}function mr(e,t,n){if(t=va(t),va(e)!==t&&n)throw Error(y(425))}function Kr(){}var wi=null,ki=null;function Si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0,ya=typeof Promise=="function"?Promise:void 0,Zd=typeof queueMicrotask=="function"?queueMicrotask:typeof ya<"u"?function(e){return ya.resolve(null).then(e).catch(Jd)}:Ni;function Jd(e){setTimeout(function(){throw e})}function $l(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Vn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function xa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+cn,Kn="__reactProps$"+cn,be="__reactContainer$"+cn,ji="__reactEvents$"+cn,qd="__reactListeners$"+cn,ef="__reactHandles$"+cn;function Nt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[be]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xa(e);e!==null;){if(n=e[Ae])return n;e=xa(e)}return t}e=n,n=e.parentNode}return null}function er(e){return e=e[Ae]||e[be],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function dl(e){return e[Kn]||null}var Ci=[],Ht=-1;function ht(e){return{current:e}}function F(e){0>Ht||(e.current=Ci[Ht],Ci[Ht]=null,Ht--)}function I(e,t){Ht++,Ci[Ht]=e.current,e.current=t}var pt={},ie=ht(pt),fe=ht(!1),Pt=pt;function tn(e,t){var n=e.type.contextTypes;if(!n)return pt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function pe(e){return e=e.childContextTypes,e!=null}function Wr(){F(fe),F(ie)}function wa(e,t,n){if(ie.current!==pt)throw Error(y(168));I(ie,t),I(fe,n)}function lu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Ac(e)||"Unknown",l));return H({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Pt=ie.current,I(ie,e),I(fe,fe.current),!0}function ka(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=lu(e,t,Pt),r.__reactInternalMemoizedMergedChildContext=e,F(fe),F(ie),I(ie,e)):F(fe),I(fe,n)}var He=null,fl=!1,Hl=!1;function iu(e){He===null?He=[e]:He.push(e)}function tf(e){fl=!0,iu(e)}function gt(){if(!Hl&&He!==null){Hl=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,fl=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),Ms(no,gt),l}finally{R=t,Hl=!1}}return null}var Bt=[],Kt=0,br=null,Yr=0,ke=[],Se=0,_t=null,Be=1,Ke="";function kt(e,t){Bt[Kt++]=Yr,Bt[Kt++]=br,br=e,Yr=t}function ou(e,t,n){ke[Se++]=Be,ke[Se++]=Ke,ke[Se++]=_t,_t=e;var r=Be;e=Ke;var l=32-De(r)-1;r&=~(1<<l),n+=1;var i=32-De(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-De(t)+l|n<<l|r,Ke=i+e}else Be=1<<i|n<<l|r,Ke=e}function fo(e){e.return!==null&&(kt(e,1),ou(e,1,0))}function po(e){for(;e===br;)br=Bt[--Kt],Bt[Kt]=null,Yr=Bt[--Kt],Bt[Kt]=null;for(;e===_t;)_t=ke[--Se],ke[Se]=null,Ke=ke[--Se],ke[Se]=null,Be=ke[--Se],ke[Se]=null}var ve=null,ge=null,V=!1,Te=null;function au(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Sa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,ge=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:Be,overflow:Ke}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,ge=null,!0):!1;default:return!1}}function zi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ei(e){if(V){var t=ge;if(t){var n=t;if(!Sa(e,t)){if(zi(e))throw Error(y(418));t=at(n.nextSibling);var r=ve;t&&Sa(e,t)?au(r,n):(e.flags=e.flags&-4097|2,V=!1,ve=e)}}else{if(zi(e))throw Error(y(418));e.flags=e.flags&-4097|2,V=!1,ve=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function hr(e){if(e!==ve)return!1;if(!V)return Na(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Si(e.type,e.memoizedProps)),t&&(t=ge)){if(zi(e))throw su(),Error(y(418));for(;t;)au(e,t),t=at(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=ve?at(e.stateNode.nextSibling):null;return!0}function su(){for(var e=ge;e;)e=at(e.nextSibling)}function nn(){ge=ve=null,V=!1}function mo(e){Te===null?Te=[e]:Te.push(e)}var nf=Xe.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function gr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ja(e){var t=e._init;return t(e._payload)}function uu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=dt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=Gl(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,v){var N=p.type;return N===Ft?g(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&ja(N)===c.type)?(v=l(c,p.props),v.ref=yn(f,c,p),v.return=f,v):(v=Ir(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Xl(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function g(f,c,p,v,N){return c===null||c.tag!==7?(c=Et(p,f.mode,v,N),c.return=f,c):(c=l(c,p),c.return=f,c)}function h(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Gl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ir:return p=Ir(c.type,c.key,c.props,null,f.mode,p),p.ref=yn(f,null,c),p.return=f,p;case Ot:return c=Xl(c,f.mode,p),c.return=f,c;case Je:var v=c._init;return h(f,v(c._payload),p)}if(Sn(c)||pn(c))return c=Et(c,f.mode,p,null),c.return=f,c;gr(f,c)}return null}function m(f,c,p,v){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:return p.key===N?u(f,c,p,v):null;case Ot:return p.key===N?d(f,c,p,v):null;case Je:return N=p._init,m(f,c,N(p._payload),v)}if(Sn(p)||pn(p))return N!==null?null:g(f,c,p,v,null);gr(f,p)}return null}function x(f,c,p,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ir:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,N);case Ot:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,N);case Je:var C=v._init;return x(f,c,p,C(v._payload),N)}if(Sn(v)||pn(v))return f=f.get(p)||null,g(c,f,v,N,null);gr(c,v)}return null}function w(f,c,p,v){for(var N=null,C=null,z=c,E=c=0,K=null;z!==null&&E<p.length;E++){z.index>E?(K=z,z=null):K=z.sibling;var L=m(f,z,p[E],v);if(L===null){z===null&&(z=K);break}e&&z&&L.alternate===null&&t(f,z),c=i(L,c,E),C===null?N=L:C.sibling=L,C=L,z=K}if(E===p.length)return n(f,z),V&&kt(f,E),N;if(z===null){for(;E<p.length;E++)z=h(f,p[E],v),z!==null&&(c=i(z,c,E),C===null?N=z:C.sibling=z,C=z);return V&&kt(f,E),N}for(z=r(f,z);E<p.length;E++)K=x(z,f,E,p[E],v),K!==null&&(e&&K.alternate!==null&&z.delete(K.key===null?E:K.key),c=i(K,c,E),C===null?N=K:C.sibling=K,C=K);return e&&z.forEach(function(Pe){return t(f,Pe)}),V&&kt(f,E),N}function k(f,c,p,v){var N=pn(p);if(typeof N!="function")throw Error(y(150));if(p=N.call(p),p==null)throw Error(y(151));for(var C=N=null,z=c,E=c=0,K=null,L=p.next();z!==null&&!L.done;E++,L=p.next()){z.index>E?(K=z,z=null):K=z.sibling;var Pe=m(f,z,L.value,v);if(Pe===null){z===null&&(z=K);break}e&&z&&Pe.alternate===null&&t(f,z),c=i(Pe,c,E),C===null?N=Pe:C.sibling=Pe,C=Pe,z=K}if(L.done)return n(f,z),V&&kt(f,E),N;if(z===null){for(;!L.done;E++,L=p.next())L=h(f,L.value,v),L!==null&&(c=i(L,c,E),C===null?N=L:C.sibling=L,C=L);return V&&kt(f,E),N}for(z=r(f,z);!L.done;E++,L=p.next())L=x(z,f,E,L.value,v),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?E:L.key),c=i(L,c,E),C===null?N=L:C.sibling=L,C=L);return e&&z.forEach(function(dn){return t(f,dn)}),V&&kt(f,E),N}function A(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Ft&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:e:{for(var N=p.key,C=c;C!==null;){if(C.key===N){if(N=p.type,N===Ft){if(C.tag===7){n(f,C.sibling),c=l(C,p.props.children),c.return=f,f=c;break e}}else if(C.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&ja(N)===C.type){n(f,C.sibling),c=l(C,p.props),c.ref=yn(f,C,p),c.return=f,f=c;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Ft?(c=Et(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Ir(p.type,p.key,p.props,null,f.mode,v),v.ref=yn(f,c,p),v.return=f,f=v)}return o(f);case Ot:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Xl(p,f.mode,v),c.return=f,f=c}return o(f);case Je:return C=p._init,A(f,c,C(p._payload),v)}if(Sn(p))return w(f,c,p,v);if(pn(p))return k(f,c,p,v);gr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Gl(p,f.mode,v),c.return=f,f=c),o(f)):n(f,c)}return A}var rn=uu(!0),cu=uu(!1),Gr=ht(null),Xr=null,Wt=null,ho=null;function go(){ho=Wt=Xr=null}function vo(e){var t=Gr.current;F(Gr),e._currentValue=t}function Pi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Xr=e,ho=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(ho!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Xr===null)throw Error(y(308));Wt=e,Xr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var jt=null;function yo(e){jt===null?jt=[e]:jt.push(e)}function du(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,yo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,T&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,yo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}function Ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zr(e,t,n,r){var l=e.updateQueue;qe=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=d:s.next=d,g.lastBaseUpdate=u))}if(i!==null){var h=l.baseState;o=0,g=d=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,k=s;switch(m=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){h=w.call(x,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,m=typeof w=="function"?w.call(x,h,m):w,m==null)break e;h=H({},h,m);break e;case 2:qe=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(d=g=x,u=h):g=g.next=x,o|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(g===null&&(u=h),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=g,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Lt|=o,e.lanes=o,e.memoizedState=h}}function za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var tr={},Ue=ht(tr),Wn=ht(tr),Qn=ht(tr);function Ct(e){if(e===tr)throw Error(y(174));return e}function wo(e,t){switch(I(Qn,t),I(Wn,e),I(Ue,tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:si(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=si(t,e)}F(Ue),I(Ue,t)}function ln(){F(Ue),F(Wn),F(Qn)}function pu(e){Ct(Qn.current);var t=Ct(Ue.current),n=si(t,e.type);t!==n&&(I(Wn,e),I(Ue,n))}function ko(e){Wn.current===e&&(F(Ue),F(Wn))}var U=ht(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bl=[];function So(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var Mr=Xe.ReactCurrentDispatcher,Kl=Xe.ReactCurrentBatchConfig,Mt=0,$=null,Y=null,Z=null,qr=!1,Mn=!1,bn=0,rf=0;function ne(){throw Error(y(321))}function No(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function jo(e,t,n,r,l,i){if(Mt=i,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?sf:uf,e=n(r,l),Mn){i=0;do{if(Mn=!1,bn=0,25<=i)throw Error(y(301));i+=1,Z=Y=null,t.updateQueue=null,Mr.current=cf,e=n(r,l)}while(Mn)}if(Mr.current=el,t=Y!==null&&Y.next!==null,Mt=0,Z=Y=$=null,qr=!1,t)throw Error(y(300));return e}function Co(){var e=bn!==0;return bn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?$.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(Y===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?$.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?$.memoizedState=Z=e:Z=Z.next=e}return Z}function Yn(e,t){return typeof t=="function"?t(e):t}function Wl(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,u=null,d=i;do{var g=d.lane;if((Mt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,o=r):u=u.next=h,$.lanes|=g,Lt|=g}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=s,Ie(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,$.lanes|=i,Lt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ie(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mu(){}function hu(e,t){var n=$,r=Ee(),l=t(),i=!Ie(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,zo(yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Gn(9,vu.bind(null,n,r,l,t),void 0,null),J===null)throw Error(y(349));Mt&30||gu(n,t,l)}return l}function gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,xu(t)&&wu(e)}function yu(e,t,n){return n(function(){xu(t)&&wu(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function wu(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function Ea(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=af.bind(null,$,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return Ee().memoizedState}function Lr(e,t,n,r){var l=Fe();$.flags|=e,l.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var l=Ee();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&No(r,o.deps)){l.memoizedState=Gn(t,n,i,r);return}}$.flags|=e,l.memoizedState=Gn(1|t,n,i,r)}function Pa(e,t){return Lr(8390656,8,e,t)}function zo(e,t){return pl(2048,8,e,t)}function Su(e,t){return pl(4,2,e,t)}function Nu(e,t){return pl(4,4,e,t)}function ju(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,ju.bind(null,t,e),n)}function Eo(){}function zu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Eu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&No(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return Mt&21?(Ie(n,t)||(n=Ds(),$.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function lf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Kl.transition;Kl.transition={};try{e(!1),t()}finally{R=n,Kl.transition=r}}function _u(){return Ee().memoizedState}function of(e,t,n){var r=ct(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e))Lu(t,n);else if(n=du(e,t,n,r),n!==null){var l=ae();Re(n,e,r,l),Tu(n,t,r)}}function af(e,t,n){var r=ct(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Lu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ie(s,o)){var u=t.interleaved;u===null?(l.next=l,yo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=du(e,t,l,r),n!==null&&(l=ae(),Re(n,e,r,l),Tu(n,t,r))}}function Mu(e){var t=e.alternate;return e===$||t!==null&&t===$}function Lu(e,t){Mn=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ro(e,n)}}var el={readContext:ze,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},sf={readContext:ze,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Pa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lr(4194308,4,ju.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=of.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ea,useDebugValue:Eo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ea(!1),t=e[0];return e=lf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=Fe();if(V){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),J===null)throw Error(y(349));Mt&30||gu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Pa(yu.bind(null,r,i,e),[e]),r.flags|=2048,Gn(9,vu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=J.identifierPrefix;if(V){var n=Ke,r=Be;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uf={readContext:ze,useCallback:zu,useContext:ze,useEffect:zo,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:Nu,useMemo:Eu,useReducer:Wl,useRef:ku,useState:function(){return Wl(Yn)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ee();return Pu(t,Y.memoizedState,e)},useTransition:function(){var e=Wl(Yn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:_u,unstable_isNewReconciler:!1},cf={readContext:ze,useCallback:zu,useContext:ze,useEffect:zo,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:Nu,useMemo:Eu,useReducer:Ql,useRef:ku,useState:function(){return Ql(Yn)},useDebugValue:Eo,useDeferredValue:function(e){var t=Ee();return Y===null?t.memoizedState=e:Pu(t,Y.memoizedState,e)},useTransition:function(){var e=Ql(Yn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:mu,useSyncExternalStore:hu,useId:_u,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _i(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=We(r,l);i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Re(t,e,l,r),_r(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ct(e),i=We(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Re(t,e,l,r),_r(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ct(e),l=We(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Re(t,e,r,n),_r(t,e,r))}};function _a(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,i):!0}function Du(e,t,n){var r=!1,l=pt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=pe(t)?Pt:ie.current,r=t.contextTypes,i=(r=r!=null)?tn(e,l):pt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ma(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function Mi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},xo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=pe(t)?Pt:ie.current,l.context=tn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_i(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ml.enqueueReplaceState(l,l.state,null),Zr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=Fc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Li(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var df=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,$i=r),Li(e,t)},n}function Iu(e,t,n){n=We(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Li(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Li(e,t),typeof r!="function"&&(ut===null?ut=new Set([this]):ut.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function La(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new df;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Cf.bind(null,e,t,n),t.then(e,e))}function Ta(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Da(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var ff=Xe.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?cu(t,null,n,r):rn(t,e.child,n,r)}function Ra(e,t,n,r,l){n=n.render;var i=t.ref;return Jt(t,l),r=jo(e,t,n,r,i,l),n=Co(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(V&&n&&fo(t),t.flags|=1,oe(e,t,r,l),t.child)}function Ia(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Io(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ou(e,t,i,r,l)):(e=Ir(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if($n(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Ti(e,t,n,r,l)}function Fu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(bt,he),he|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(bt,he),he|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,I(bt,he),he|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,I(bt,he),he|=r;return oe(e,t,l,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ti(e,t,n,r,l){var i=pe(n)?Pt:ie.current;return i=tn(t,i),Jt(t,l),n=jo(e,t,n,r,i,l),r=Co(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(V&&r&&fo(t),t.flags|=1,oe(e,t,n,l),t.child)}function Oa(e,t,n,r,l){if(pe(n)){var i=!0;Qr(t)}else i=!1;if(Jt(t,l),t.stateNode===null)Tr(e,t),Du(t,n,r),Mi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=ze(d):(d=pe(n)?Pt:ie.current,d=tn(t,d));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ma(t,o,r,d),qe=!1;var m=t.memoizedState;o.state=m,Zr(t,r,o,l),u=t.memoizedState,s!==r||m!==u||fe.current||qe?(typeof g=="function"&&(_i(t,n,g,r),u=t.memoizedState),(s=qe||_a(t,n,s,r,m,u,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Me(t.type,s),o.props=d,h=t.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=ze(u):(u=pe(n)?Pt:ie.current,u=tn(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==u)&&Ma(t,o,r,u),qe=!1,m=t.memoizedState,o.state=m,Zr(t,r,o,l);var w=t.memoizedState;s!==h||m!==w||fe.current||qe?(typeof x=="function"&&(_i(t,n,x,r),w=t.memoizedState),(d=qe||_a(t,n,d,r,m,w,u)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Di(e,t,n,r,i,l)}function Di(e,t,n,r,l,i){Au(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ka(t,n,!1),Ge(e,t,i);r=t.stateNode,ff.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=rn(t,e.child,null,i),t.child=rn(t,null,s,i)):oe(e,t,s,i),t.memoizedState=r.state,l&&ka(t,n,!0),t.child}function Vu(e){var t=e.stateNode;t.pendingContext?wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wa(e,t.context,!1),wo(e,t.containerInfo)}function Fa(e,t,n,r,l){return nn(),mo(l),t.flags|=256,oe(e,t,n,r),t.child}var Ri={dehydrated:null,treeContext:null,retryLane:0};function Ii(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,n){var r=t.pendingProps,l=U.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),I(U,l&1),e===null)return Ei(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=vl(o,r,0,null),e=Et(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ii(n),t.memoizedState=Ri,e):Po(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return pf(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=dt(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=dt(s,i):(i=Et(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ii(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ri,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Po(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vr(e,t,n,r){return r!==null&&mo(r),rn(t,e.child,null,n),e=Po(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pf(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=bl(Error(y(422))),vr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=vl({mode:"visible",children:r.children},l,0,null),i=Et(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rn(t,e.child,null,o),t.child.memoizedState=Ii(o),t.memoizedState=Ri,i);if(!(t.mode&1))return vr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=bl(i,r,void 0),vr(e,t,o,r)}if(s=(o&e.childLanes)!==0,de||s){if(r=J,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Re(r,e,l,-1))}return Ro(),r=bl(Error(y(421))),vr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=zf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ge=at(l.nextSibling),ve=t,V=!0,Te=null,e!==null&&(ke[Se++]=Be,ke[Se++]=Ke,ke[Se++]=_t,Be=e.id,Ke=e.overflow,_t=t),t=Po(t,r.children),t.flags|=4096,t)}function Aa(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pi(e.return,t,n)}function Yl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function $u(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Aa(e,n,t);else if(e.tag===19)Aa(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Jr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mf(e,t,n){switch(t.tag){case 3:Vu(t),nn();break;case 5:pu(t);break;case 1:pe(t.type)&&Qr(t);break;case 4:wo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;I(Gr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Uu(e,t,n):(I(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $u(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Fu(e,t,n)}return Ge(e,t,n)}var Hu,Oi,Bu,Ku;Hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oi=function(){};Bu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Ct(Ue.current);var i=null;switch(n){case"input":l=li(e,l),r=li(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=ai(e,l),r=ai(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}ui(n,r);var o;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Rn.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hf(e,t,n){var r=t.pendingProps;switch(po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Wr(),re(t),null;case 3:return r=t.stateNode,ln(),F(fe),F(ie),So(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Ki(Te),Te=null))),Oi(e,t),re(t),null;case 5:ko(t);var l=Ct(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Bu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return re(t),null}if(e=Ct(Ue.current),hr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ae]=t,r[Kn]=i,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(l=0;l<jn.length;l++)O(jn[l],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":bo(r,i),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},O("invalid",r);break;case"textarea":Go(r,i),O("invalid",r)}ui(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),l=["children",""+s]):Rn.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":or(r),Yo(r,i,!0);break;case"textarea":or(r),Xo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ys(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[Kn]=r,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(o=ci(n,r),n){case"dialog":O("cancel",e),O("close",e),l=r;break;case"iframe":case"object":case"embed":O("load",e),l=r;break;case"video":case"audio":for(l=0;l<jn.length;l++)O(jn[l],e);l=r;break;case"source":O("error",e),l=r;break;case"img":case"image":case"link":O("error",e),O("load",e),l=r;break;case"details":O("toggle",e),l=r;break;case"input":bo(e,r),l=li(e,r),O("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),O("invalid",e);break;case"textarea":Go(e,r),l=ai(e,r),O("invalid",e);break;default:l=r}ui(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?ks(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xs(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&O("scroll",e):u!=null&&Zi(e,i,u,o))}switch(n){case"input":or(e),Yo(e,r,!1);break;case"textarea":or(e),Xo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Ct(Qn.current),Ct(Ue.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return re(t),null;case 13:if(F(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&ge!==null&&t.mode&1&&!(t.flags&128))su(),nn(),t.flags|=98560,i=!1;else if(i=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Ae]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),i=!1}else Te!==null&&(Ki(Te),Te=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?G===0&&(G=3):Ro())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return ln(),Oi(e,t),e===null&&Hn(t.stateNode.containerInfo),re(t),null;case 10:return vo(t.type._context),re(t),null;case 17:return pe(t.type)&&Wr(),re(t),null;case 19:if(F(U),i=t.memoizedState,i===null)return re(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)xn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Jr(e),o!==null){for(t.flags|=128,xn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>an&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!V)return re(t),null}else 2*Q()-i.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Do(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?he&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function gf(e,t){switch(po(t),t.tag){case 1:return pe(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),F(fe),F(ie),So(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ko(t),null;case 13:if(F(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(U),null;case 4:return ln(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Do(),null;case 24:return null;default:return null}}var yr=!1,le=!1,vf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){B(e,t,r)}}var Va=!1;function yf(e,t){if(wi=$r,e=Gs(),co(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,u=-1,d=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||l!==0&&h.nodeType!==3||(s=o+l),h!==i||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++d===l&&(s=o),m===i&&++g===r&&(u=o),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},$r=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,A=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Me(t.type,k),A);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){B(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return w=Va,Va=!1,w}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Fi(t,n,i)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wu(e){var t=e.alternate;t!==null&&(e.alternate=null,Wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Kn],delete t[ji],delete t[qd],delete t[ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Ua(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}var q=null,Le=!1;function Ze(e,t,n){for(n=n.child;n!==null;)bu(e,t,n),n=n.sibling}function bu(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:le||Qt(n,t);case 6:var r=q,l=Le;q=null,Ze(e,t,n),q=r,Le=l,q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Le?(e=q,n=n.stateNode,e.nodeType===8?$l(e.parentNode,n):e.nodeType===1&&$l(e,n),Vn(e)):$l(q,n.stateNode));break;case 4:r=q,l=Le,q=n.stateNode.containerInfo,Le=!0,Ze(e,t,n),q=r,Le=l;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Fi(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!le&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){B(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Ze(e,t,n),le=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function $a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vf),t.forEach(function(r){var l=Ef.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function _e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Le=!1;break e;case 3:q=s.stateNode.containerInfo,Le=!0;break e;case 4:q=s.stateNode.containerInfo,Le=!0;break e}s=s.return}if(q===null)throw Error(y(160));bu(i,o,l),q=null,Le=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){B(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yu(t,e),t=t.sibling}function Yu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(t,e),Oe(e),r&4){try{Ln(3,e,e.return),hl(3,e)}catch(k){B(e,e.return,k)}try{Ln(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:_e(t,e),Oe(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(_e(t,e),Oe(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(k){B(e,e.return,k)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&gs(l,i),ci(s,o);var d=ci(s,i);for(o=0;o<u.length;o+=2){var g=u[o],h=u[o+1];g==="style"?ks(l,h):g==="dangerouslySetInnerHTML"?xs(l,h):g==="children"?In(l,h):Zi(l,g,h,d)}switch(s){case"input":ii(l,i);break;case"textarea":vs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Yt(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Yt(l,!!i.multiple,i.defaultValue,!0):Yt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Kn]=i}catch(k){B(e,e.return,k)}}break;case 6:if(_e(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(k){B(e,e.return,k)}}break;case 3:if(_e(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:_e(t,e),Oe(e);break;case 13:_e(t,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Lo=Q())),r&4&&$a(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||g,_e(t,e),le=d):_e(t,e),Oe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(h=S=g;S!==null;){switch(m=S,x=m.child,m.tag){case 0:case 11:case 14:case 15:Ln(4,m,m.return);break;case 1:Qt(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){B(r,n,k)}}break;case 5:Qt(m,m.return);break;case 22:if(m.memoizedState!==null){Ba(h);continue}}x!==null?(x.return=m,S=x):Ba(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{l=h.stateNode,d?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ws("display",o))}catch(k){B(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){B(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_e(t,e),Oe(e),r&4&&$a(e);break;case 21:break;default:_e(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Ua(e);Ui(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Ua(e);Vi(e,s,o);break;default:throw Error(y(161))}}catch(u){B(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e,t,n){S=e,Gu(e)}function Gu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||yr;if(!o){var s=l.alternate,u=s!==null&&s.memoizedState!==null||le;s=yr;var d=le;if(yr=o,(le=u)&&!d)for(S=l;S!==null;)o=S,u=o.child,o.tag===22&&o.memoizedState!==null?Ka(l):u!==null?(u.return=o,S=u):Ka(l);for(;i!==null;)S=i,Gu(i),i=i.sibling;S=l,yr=s,le=d}Ha(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):Ha(e)}}function Ha(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&za(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}za(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Vn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}le||t.flags&512&&Ai(t)}catch(m){B(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Ba(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Ka(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(u){B(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){B(t,l,u)}}var i=t.return;try{Ai(t)}catch(u){B(t,i,u)}break;case 5:var o=t.return;try{Ai(t)}catch(u){B(t,o,u)}}}catch(u){B(t,t.return,u)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var wf=Math.ceil,tl=Xe.ReactCurrentDispatcher,_o=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,T=0,J=null,b=null,ee=0,he=0,bt=ht(0),G=0,Xn=null,Lt=0,gl=0,Mo=0,Tn=null,ce=null,Lo=0,an=1/0,$e=null,nl=!1,$i=null,ut=null,xr=!1,rt=null,rl=0,Dn=0,Hi=null,Dr=-1,Rr=0;function ae(){return T&6?Q():Dr!==-1?Dr:Dr=Q()}function ct(e){return e.mode&1?T&2&&ee!==0?ee&-ee:nf.transition!==null?(Rr===0&&(Rr=Ds()),Rr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e):1}function Re(e,t,n,r){if(50<Dn)throw Dn=0,Hi=null,Error(y(185));Jn(e,n,r),(!(T&2)||e!==J)&&(e===J&&(!(T&2)&&(gl|=n),G===4&&tt(e,ee)),me(e,r),n===1&&T===0&&!(t.mode&1)&&(an=Q()+500,fl&&gt()))}function me(e,t){var n=e.callbackNode;nd(e,t);var r=Ur(e,e===J?ee:0);if(r===0)n!==null&&qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qo(n),t===1)e.tag===0?tf(Wa.bind(null,e)):iu(Wa.bind(null,e)),Zd(function(){!(T&6)&&gt()}),n=null;else{switch(Rs(r)){case 1:n=no;break;case 4:n=Ls;break;case 16:n=Vr;break;case 536870912:n=Ts;break;default:n=Vr}n=rc(n,Xu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xu(e,t){if(Dr=-1,Rr=0,T&6)throw Error(y(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Ur(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var l=T;T|=2;var i=Ju();(J!==e||ee!==t)&&($e=null,an=Q()+500,zt(e,t));do try{Nf();break}catch(s){Zu(e,s)}while(!0);go(),tl.current=i,T=l,b!==null?t=0:(J=null,ee=0,t=G)}if(t!==0){if(t===2&&(l=hi(e),l!==0&&(r=l,t=Bi(e,l))),t===1)throw n=Xn,zt(e,0),tt(e,r),me(e,Q()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!kf(l)&&(t=ll(e,r),t===2&&(i=hi(e),i!==0&&(r=i,t=Bi(e,i))),t===1))throw n=Xn,zt(e,0),tt(e,r),me(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:St(e,ce,$e);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Lo+500-Q(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ni(St.bind(null,e,ce,$e),t);break}St(e,ce,$e);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-De(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wf(r/1960))-r,10<r){e.timeoutHandle=Ni(St.bind(null,e,ce,$e),r);break}St(e,ce,$e);break;case 5:St(e,ce,$e);break;default:throw Error(y(329))}}}return me(e,Q()),e.callbackNode===n?Xu.bind(null,e):null}function Bi(e,t){var n=Tn;return e.current.memoizedState.isDehydrated&&(zt(e,t).flags|=256),e=ll(e,t),e!==2&&(t=ce,ce=n,t!==null&&Ki(t)),e}function Ki(e){ce===null?ce=e:ce.push.apply(ce,e)}function kf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ie(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Mo,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Wa(e){if(T&6)throw Error(y(327));qt();var t=Ur(e,0);if(!(t&1))return me(e,Q()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=hi(e);r!==0&&(t=r,n=Bi(e,r))}if(n===1)throw n=Xn,zt(e,0),tt(e,t),me(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,ce,$e),me(e,Q()),null}function To(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(an=Q()+500,fl&&gt())}}function Tt(e){rt!==null&&rt.tag===0&&!(T&6)&&qt();var t=T;T|=1;var n=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=n,T=t,!(T&6)&&gt()}}function Do(){he=bt.current,F(bt)}function zt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xd(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(po(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:ln(),F(fe),F(ie),So();break;case 5:ko(r);break;case 4:ln();break;case 13:F(U);break;case 19:F(U);break;case 10:vo(r.type._context);break;case 22:case 23:Do()}n=n.return}if(J=e,b=e=dt(e.current,null),ee=he=t,G=0,Xn=null,Mo=gl=Lt=0,ce=Tn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}jt=null}return e}function Zu(e,t){do{var n=b;try{if(go(),Mr.current=el,qr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qr=!1}if(Mt=0,Z=Y=$=null,Mn=!1,bn=0,_o.current=null,n===null||n.return===null){G=1,Xn=t,b=null;break}e:{var i=e,o=n.return,s=n,u=t;if(t=ee,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=s,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Ta(o);if(x!==null){x.flags&=-257,Da(x,o,s,i,t),x.mode&1&&La(i,d,t),t=x,u=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){La(i,d,t),Ro();break e}u=Error(y(426))}}else if(V&&s.mode&1){var A=Ta(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Da(A,o,s,i,t),mo(on(u,s));break e}}i=u=on(u,s),G!==4&&(G=2),Tn===null?Tn=[i]:Tn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Ru(i,u,t);Ca(i,f);break e;case 1:s=u;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ut===null||!ut.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Iu(i,s,t);Ca(i,v);break e}}i=i.return}while(i!==null)}ec(n)}catch(N){t=N,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function Ju(){var e=tl.current;return tl.current=el,e===null?el:e}function Ro(){(G===0||G===3||G===2)&&(G=4),J===null||!(Lt&268435455)&&!(gl&268435455)||tt(J,ee)}function ll(e,t){var n=T;T|=2;var r=Ju();(J!==e||ee!==t)&&($e=null,zt(e,t));do try{Sf();break}catch(l){Zu(e,l)}while(!0);if(go(),T=n,tl.current=r,b!==null)throw Error(y(261));return J=null,ee=0,G}function Sf(){for(;b!==null;)qu(b)}function Nf(){for(;b!==null&&!bc();)qu(b)}function qu(e){var t=nc(e.alternate,e,he);e.memoizedProps=e.pendingProps,t===null?ec(e):b=t,_o.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gf(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,b=null;return}}else if(n=hf(n,t,he),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);G===0&&(G=5)}function St(e,t,n){var r=R,l=Ce.transition;try{Ce.transition=null,R=1,jf(e,t,n,r)}finally{Ce.transition=l,R=r}return null}function jf(e,t,n,r){do qt();while(rt!==null);if(T&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rd(e,i),e===J&&(b=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,rc(Vr,function(){return qt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var o=R;R=1;var s=T;T|=4,_o.current=null,yf(e,n),Yu(n,e),Bd(ki),$r=!!wi,ki=wi=null,e.current=n,xf(n),Yc(),T=s,R=o,Ce.transition=i}else e.current=n;if(xr&&(xr=!1,rt=e,rl=l),i=e.pendingLanes,i===0&&(ut=null),Zc(n.stateNode),me(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(nl)throw nl=!1,e=$i,$i=null,e;return rl&1&&e.tag!==0&&qt(),i=e.pendingLanes,i&1?e===Hi?Dn++:(Dn=0,Hi=e):Dn=0,gt(),null}function qt(){if(rt!==null){var e=Rs(rl),t=Ce.transition,n=R;try{if(Ce.transition=null,R=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,rl=0,T&6)throw Error(y(331));var l=T;for(T|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Ln(8,g,i)}var h=g.child;if(h!==null)h.return=g,S=h;else for(;S!==null;){g=S;var m=g.sibling,x=g.return;if(Wu(g),g===d){S=null;break}if(m!==null){m.return=x,S=m;break}S=x}}}var w=i.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ln(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var c=e.current;for(S=c;S!==null;){o=S;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,S=p;else e:for(o=c;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(N){B(s,s.return,N)}if(s===o){S=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,S=v;break e}S=s.return}}if(T=l,gt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{R=n,Ce.transition=t}}return!1}function Qa(e,t,n){t=on(n,t),t=Ru(e,t,1),e=st(e,t,1),t=ae(),e!==null&&(Jn(e,1,t),me(e,t))}function B(e,t,n){if(e.tag===3)Qa(e,e,n);else for(;t!==null;){if(t.tag===3){Qa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ut===null||!ut.has(r))){e=on(n,e),e=Iu(t,e,1),t=st(t,e,1),e=ae(),t!==null&&(Jn(t,1,e),me(t,e));break}}t=t.return}}function Cf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(G===4||G===3&&(ee&130023424)===ee&&500>Q()-Lo?zt(e,0):Mo|=n),me(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(Jn(e,t,n),me(e,n))}function zf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Ef(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,mf(e,t,n);de=!!(e.flags&131072)}else de=!1,V&&t.flags&1048576&&ou(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Tr(e,t),e=t.pendingProps;var l=tn(t,ie.current);Jt(t,n),l=jo(null,t,r,e,l,n);var i=Co();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(i=!0,Qr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,xo(t),l.updater=ml,t.stateNode=l,l._reactInternals=t,Mi(t,r,e,n),t=Di(null,t,r,!0,i,n)):(t.tag=0,V&&i&&fo(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=_f(r),e=Me(r,e),l){case 0:t=Ti(null,t,r,e,n);break e;case 1:t=Oa(null,t,r,e,n);break e;case 11:t=Ra(null,t,r,e,n);break e;case 14:t=Ia(null,t,r,Me(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Ti(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Oa(e,t,r,l,n);case 3:e:{if(Vu(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,fu(e,t),Zr(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=on(Error(y(423)),t),t=Fa(e,t,r,n,l);break e}else if(r!==l){l=on(Error(y(424)),t),t=Fa(e,t,r,n,l);break e}else for(ge=at(t.stateNode.containerInfo.firstChild),ve=t,V=!0,Te=null,n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===l){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&Ei(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Si(r,l)?o=null:i!==null&&Si(r,i)&&(t.flags|=32),Au(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Ei(t),null;case 13:return Uu(e,t,n);case 4:return wo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Ra(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,I(Gr,r._currentValue),r._currentValue=o,i!==null)if(Ie(i.value,o)){if(i.children===l.children&&!fe.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Pi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Pi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Jt(t,n),l=ze(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=Me(r,t.pendingProps),l=Me(r.type,l),Ia(e,t,r,l,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Me(r,l),Tr(e,t),t.tag=1,pe(r)?(e=!0,Qr(t)):e=!1,Jt(t,n),Du(t,r,l),Mi(t,r,l,n),Di(null,t,r,!0,e,n);case 19:return $u(e,t,n);case 22:return Fu(e,t,n)}throw Error(y(156,t.tag))};function rc(e,t){return Ms(e,t)}function Pf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Pf(e,t,n,r)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _f(e){if(typeof e=="function")return Io(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qi)return 11;if(e===eo)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ir(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Io(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ft:return Et(n.children,l,i,t);case Ji:o=8,l|=8;break;case ei:return e=Ne(12,n,t,l|2),e.elementType=ei,e.lanes=i,e;case ti:return e=Ne(13,n,t,l),e.elementType=ti,e.lanes=i,e;case ni:return e=Ne(19,n,t,l),e.elementType=ni,e.lanes=i,e;case ps:return vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ds:o=10;break e;case fs:o=9;break e;case qi:o=11;break e;case eo:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Et(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ps,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Oo(e,t,n,r,l,i,o,s,u){return e=new Mf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xo(i),e}function Lf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ot,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lc(e){if(!e)return pt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(pe(n))return lu(e,n,t)}return t}function ic(e,t,n,r,l,i,o,s,u){return e=Oo(n,r,!0,e,l,i,o,s,u),e.context=lc(null),n=e.current,r=ae(),l=ct(n),i=We(r,l),i.callback=t??null,st(n,i,l),e.current.lanes=l,Jn(e,l,r),me(e,r),e}function yl(e,t,n,r){var l=t.current,i=ae(),o=ct(l);return n=lc(n),t.context===null?t.context=n:t.pendingContext=n,t=We(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,o),e!==null&&(Re(e,l,o,i),_r(e,l,o)),o}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ba(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fo(e,t){ba(e,t),(e=e.alternate)&&ba(e,t)}function Tf(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ao(e){this._internalRoot=e}xl.prototype.render=Ao.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));yl(e,t,null,null)};xl.prototype.unmount=Ao.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){yl(null,e,null,null)}),t[be]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Vs(e)}};function Vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ya(){}function Df(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var d=il(o);i.call(d)}}var o=ic(t,r,e,0,null,!1,!1,"",Ya);return e._reactRootContainer=o,e[be]=o.current,Hn(e.nodeType===8?e.parentNode:e),Tt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=il(u);s.call(d)}}var u=Oo(e,0,!1,null,null,!1,!1,"",Ya);return e._reactRootContainer=u,e[be]=u.current,Hn(e.nodeType===8?e.parentNode:e),Tt(function(){yl(t,u,n,r)}),u}function kl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var u=il(o);s.call(u)}}yl(t,o,e,l)}else o=Df(n,t,e,l,r);return il(o)}Is=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ro(t,n|1),me(t,Q()),!(T&6)&&(an=Q()+500,gt()))}break;case 13:Tt(function(){var r=Ye(e,1);if(r!==null){var l=ae();Re(r,e,1,l)}}),Fo(e,1)}};lo=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}Fo(e,134217728)}};Os=function(e){if(e.tag===13){var t=ct(e),n=Ye(e,t);if(n!==null){var r=ae();Re(n,e,t,r)}Fo(e,t)}};Fs=function(){return R};As=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};fi=function(e,t,n){switch(t){case"input":if(ii(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(y(90));hs(r),ii(r,l)}}}break;case"textarea":vs(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};js=To;Cs=Tt;var Rf={usingClientEntryPoint:!1,Events:[er,$t,dl,Ss,Ns,To]},wn={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},If={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ps(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wr.isDisabled&&wr.supportsFiber)try{al=wr.inject(If),Ve=wr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rf;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vo(t))throw Error(y(200));return Lf(e,t,null,n)};xe.createRoot=function(e,t){if(!Vo(e))throw Error(y(299));var n=!1,r="",l=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Oo(e,1,!1,null,null,n,!1,r,l),e[be]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Ao(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ps(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Tt(e)};xe.hydrate=function(e,t,n){if(!wl(t))throw Error(y(200));return kl(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Vo(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ic(t,null,e,1,n??null,l,!1,i,o),e[be]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};xe.render=function(e,t,n){if(!wl(t))throw Error(y(200));return kl(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!wl(e))throw Error(y(40));return e._reactRootContainer?(Tt(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[be]=null})}),!0):!1};xe.unstable_batchedUpdates=To;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return kl(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function ac(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)}catch(e){console.error(e)}}ac(),as.exports=xe;var Of=as.exports,sc,Ga=Of;sc=Ga.createRoot,Ga.hydrateRoot;function D({name:e,size:t=24,color:n="currentColor"}){const r={shield:a.jsx("path",{d:"M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-2.11V12.99z"}),star:a.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),fortress:a.jsx("path",{d:"M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"}),people:a.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),disaster:a.jsx("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"}),target:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"}),cyber:a.jsx("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"}),alert:a.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),community:a.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"}),calendar:a.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM7 12h5v5H7z"}),globe:a.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"}),document:a.jsx("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),phone:a.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),chevron:a.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),arrow:a.jsx("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),menu:a.jsx("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),close:a.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),external:a.jsx("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),email:a.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),location:a.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),clock:a.jsx("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),facebook:a.jsx("path",{d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"}),twitter:a.jsx("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),instagram:a.jsx("path",{d:"M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"}),youtube:a.jsx("path",{d:"M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.45 12 20.45 12 20.45s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6z"})};return a.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:n,xmlns:"http://www.w3.org/2000/svg",children:r[e]||r.shield})}function Ff(){return a.jsxs("div",{className:"topbar",children:[a.jsxs("div",{className:"container topbar-inner",children:[a.jsx("div",{className:"topbar-left",children:a.jsxs("span",{className:"topbar-gov-label",children:[a.jsx(D,{name:"shield",size:14,color:"#c5a253"}),"An official portal of the Malaysian Government"]})}),a.jsxs("div",{className:"topbar-right",children:[a.jsxs("div",{className:"topbar-lang",children:[a.jsx("span",{className:"lang-active",children:"EN"}),a.jsx("span",{className:"lang-sep",children:"|"}),a.jsx("span",{className:"lang-btn",children:"BM"})]}),a.jsxs("div",{className:"topbar-links",children:[a.jsx("a",{href:"#accessibility",className:"topbar-link",children:"Accessibility"}),a.jsx("a",{href:"#sitemap",className:"topbar-link",children:"Sitemap"}),a.jsx("a",{href:"#faq",className:"topbar-link",children:"FAQ"}),a.jsx("a",{href:"#contact",className:"topbar-link",children:"Contact Us"})]})]})]}),a.jsx("style",{children:`
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
        .lang-active {
          color: var(--mkn-gold);
          font-weight: 700;
        }
        .lang-btn {
          cursor: pointer;
          transition: color 0.2s;
        }
        .lang-btn:hover {
          color: var(--mkn-gold);
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
      `})]})}const Af=[{label:"Home",href:"#home"},{label:"Corporate Info",href:"#corporate"},{label:"MKN Involvement",href:"#involvement"},{label:"News & Announcements",href:"#news"},{label:"Statistics",href:"#statistics"},{label:"Services",href:"#services"},{label:"Contact",href:"#contact"}],xt={badge:"Portal Rasmi · Official Portal",title:"Majlis Keselamatan Negara",subtitle:"National Security Council of Malaysia",description:"Safeguarding the nation through strategic security policies, disaster management coordination, and crisis response — ensuring a resilient and secure Malaysia for all.",primaryAction:"Explore Corporate Info",secondaryAction:"View MKN Involvement",stats:[{value:"1971",label:"Established"},{value:"14",label:"States Coordinated"},{value:"500+",label:"Crisis Operations"},{value:"24/7",label:"Operations Centre"}]},kr={heading:"About MKN",intro:"The Majlis Keselamatan Negara (National Security Council) is a premier government agency under the Prime Minister's Department, entrusted with formulating policies and strategies related to national security. Established in 1971, MKN serves as the central coordinating body for all matters concerning the sovereignty, territorial integrity, and public safety of Malaysia.",body:["MKN operates as the principal advisory body to the Government of Malaysia on national security matters. The Council is chaired by the Prime Minister and comprises key Cabinet ministers, the Chief Secretary to the Government, and the heads of the Armed Forces and Royal Malaysia Police.","The Council's mandate spans across disaster management, border security, counter-terrorism, cybersecurity, food security, and public order. MKN also oversees the National Disaster Management Agency (NADMA) and coordinates the National Security Council Directive No. 20 — the cornerstone policy for disaster management in Malaysia.","Through its 24/7 National Security Council Operations Centre (PKTN), MKN provides round-the-clock situational awareness, early warning, and crisis coordination across all 14 states and federal territories."],keyFacts:[{label:"Established",value:"1971"},{label:"Ministry",value:"Prime Minister's Department"},{label:"Chairman",value:"The Prime Minister of Malaysia"},{label:"Headquarters",value:"Putrajaya, Malaysia"},{label:"Director General",value:"Datuk Ramlan bin Eibai"},{label:"Core Directive",value:"MKN Directive No. 20"}]},Zl={vision:"To be the leading national security agency that ensures a sovereign, resilient, and prosperous Malaysia through strategic foresight, effective coordination, and unwavering commitment to public safety.",mission:"To formulate, coordinate, and implement national security policies and strategies that safeguard Malaysia's sovereignty, territorial integrity, and public well-being through whole-of-government and whole-of-society approaches.",values:[{title:"Integrity",description:"Upholding the highest standards of honesty, transparency, and accountability in all security operations.",icon:"shield"},{title:"Excellence",description:"Delivering world-class security governance through professionalism, innovation, and continuous improvement.",icon:"star"},{title:"Resilience",description:"Building national capacity to withstand and recover from all forms of threats and disasters.",icon:"fortress"},{title:"Collaboration",description:"Fostering partnerships across government, industry, and society for comprehensive national security.",icon:"people"}]},Sr={heading:"Organisation Structure",description:"MKN operates under a structured hierarchy led by the National Security Council, ensuring effective governance and coordination across all national security functions.",levels:[{tier:"Council",title:"National Security Council",desc:"Chaired by the Prime Minister, comprising Cabinet ministers, Chief Secretary, and heads of security agencies.",members:["Prime Minister (Chairman)","Deputy Prime Minister","Minister of Defence","Minister of Home Affairs","Minister of Foreign Affairs","Chief Secretary to the Government","Chief of Defence Force","Inspector-General of Police"]},{tier:"Executive",title:"Director General Office",desc:"Leads the operational arm of MKN, implementing Council decisions and overseeing daily operations.",members:["Director General of MKN","Deputy Director General (Policy)","Deputy Director General (Operations)"]},{tier:"Divisions",title:"Operational Divisions",desc:"Specialised divisions managing distinct domains of national security and disaster management.",members:["Policy & Strategic Planning Division","Operations & Crisis Management Division","Disaster Management Division (NADMA)","Border Security & Immigration Division","Counter-Terrorism & Extremism Division","Cybersecurity & Digital Threat Division","Strategic Communications Division","Administration & Finance Division"]}]},Vf=[{name:"YAB Dato' Seri Anwar bin Ibrahim",position:"Chairman, National Security Council",role:"Prime Minister of Malaysia",initials:"AI",color:"#0d2240"},{name:"YAB Dato' Seri Dr. Ahmad Zahid bin Hamidi",position:"Deputy Chairman",role:"Deputy Prime Minister",initials:"ZH",color:"#142d4c"},{name:"Tan Sri Shamsul Azri bin Abu Bakar",position:"Council Member",role:"Chief Secretary to the Government",initials:"SA",color:"#1a3a5c"},{name:"Datuk Ramlan bin Eibai",position:"Director General of MKN",role:"Chief Executive Officer",initials:"RL",color:"#c5a253"}],Jl=[{id:"disaster",title:"Disaster Management",icon:"disaster",summary:"Coordinating Malaysia's response to natural disasters through MKN Directive No. 20 — from floods and landslides to earthquakes and haze.",highlights:["Activated 361 flood relief operations during the 2024-2025 monsoon season","Deployed 12,000+ personnel across affected states via integrated command","Managed evacuations for 150,000+ citizens at peak flood emergency","Coordinated post-disaster recovery and infrastructure rebuilding"],tag:"NADMA",color:"#1d4ed8"},{id:"security",title:"National Security Policy",icon:"shield",summary:"Formulating comprehensive national security strategies encompassing defence, border integrity, sovereignty, and strategic deterrence.",highlights:["Developed the National Security Policy (DAKN) 2021-2025 framework","Coordinated border security across 4,800+ km of land and maritime borders","Strengthened sovereignty in Sabah, Sarawak, and ESSZone operations","Advanced Malaysia's position in ASEAN regional security cooperation"],tag:"DAKN",color:"#0d2240"},{id:"counter-terrorism",title:"Counter-Terrorism",icon:"target",summary:"Leading whole-of-government efforts to prevent, detect, and respond to terrorism and violent extremism threats.",highlights:["Implemented the National Action Plan for Preventing & Countering Violent Extremism (PCVE)","Conducted 200+ deradicalisation programmes reaching 15,000+ at-risk individuals","Maintained zero successful major terrorist attack on Malaysian soil since 2018","Strengthened intelligence sharing through 47 bilateral partnerships"],tag:"PCVE",color:"#b91c1c"},{id:"cybersecurity",title:"Cybersecurity",icon:"cyber",summary:"Safeguarding Malaysia's digital infrastructure and critical national information infrastructure (CNII) from evolving cyber threats.",highlights:["Protected 412 Critical National Information Infrastructure entities","Responded to 8,500+ cybersecurity incidents via MyCERT coordination","Launched the National Cyber Security Strategy 2025-2030","Facilitated cross-sector cyber drill exercises involving 80+ agencies"],tag:"CNII",color:"#6d28d9"},{id:"crisis",title:"Crisis & Emergency Response",icon:"alert",summary:"Operating a 24/7 National Security Council Operations Centre (PKTN) for real-time situational awareness and crisis coordination.",highlights:["Maintained round-the-clock operations through PKTN since 2003","Coordinated COVID-19 pandemic response across 18 months of MCO phases","Managed 50+ major crisis events including airline incidents and civil unrest","Established integrated early warning systems with 14 state-level operations centres"],tag:"PKTN",color:"#c2410c"},{id:"public-safety",title:"Public Safety & Awareness",icon:"community",summary:"Empowering communities through public safety education, national resilience programmes, and citizen preparedness initiatives.",highlights:["Reached 2.3 million citizens through the National Resilience Programme","Conducted 1,200+ community preparedness workshops nationwide",'Launched the "Selamatkan Negara" public safety awareness campaign',"Trained 8,500+ community first responders in disaster preparedness"],tag:"Program Resilience",color:"#15803d"}],wt=[{category:"Disaster Management",date:"15 June 2026",title:"MKN Activates Level II Operations for Southwest Monsoon Preparedness",excerpt:"The National Security Council has activated Level II disaster operations across 8 flood-prone states ahead of the Southwest Monsoon season, deploying advance teams and pre-positioning relief supplies.",tag:"Active",tagColor:"#dc2626"},{category:"Cybersecurity",date:"10 June 2026",title:"Malaysia Launches National Cyber Security Strategy 2025-2030",excerpt:"MKN unveiled a comprehensive five-year cyber security strategy aimed at protecting Critical National Information Infrastructure and building national cyber resilience capabilities.",tag:"New",tagColor:"#6d28d9"},{category:"Counter-Terrorism",date:"5 June 2026",title:"Regional PCVE Workshop Strengthens ASEAN Cooperation",excerpt:"MKN hosted representatives from 10 ASEAN member states for a three-day workshop on preventing and countering violent extremism, sharing best practices and intelligence frameworks.",tag:"Update",tagColor:"#1d4ed8"},{category:"Public Safety",date:"1 June 2026",title:"National Resilience Programme Reaches 2.3 Million Citizens",excerpt:"The flagship community empowerment initiative has now reached over 2.3 million Malaysians, strengthening grassroots preparedness and disaster awareness across all states.",tag:"Milestone",tagColor:"#15803d"},{category:"Border Security",date:"28 May 2026",title:"Enhanced Maritime Patrol Operations in ESSZone",excerpt:"MKN coordinated a joint multi-agency maritime security operation in the Eastern Sabah Security Zone, deploying naval and air assets to safeguard sovereign waters.",tag:"Operation",tagColor:"#c2410c"},{category:"Policy",date:"20 May 2026",title:"MKN Council Approves Updated National Security Policy Framework",excerpt:"The National Security Council, chaired by the Prime Minister, approved the updated DAKN framework incorporating emerging threats including climate security and AI governance.",tag:"Approved",tagColor:"#0d2240"}],Uf=[{value:1971,label:"Year Established",suffix:"",icon:"calendar"},{value:361,label:"Disaster Operations (2024-2025)",suffix:"+",icon:"disaster"},{value:150,label:"Citizens Evacuated (Peak)",suffix:"K+",icon:"people"},{value:412,label:"CNII Entities Protected",suffix:"",icon:"cyber"},{value:8500,label:"Cyber Incidents Responded",suffix:"+",icon:"alert"},{value:2.3,label:"Citizens Reached (Resilience)",suffix:"M",icon:"community"},{value:47,label:"Bilateral Partnerships",suffix:"",icon:"globe"},{value:1200,label:"Community Workshops",suffix:"+",icon:"community"}],$f=[{title:"Disaster Reporting",description:"Report disasters and emergencies through the integrated national reporting system.",icon:"alert",action:"File a Report"},{title:"MKN Directive No. 20",description:"Access the official guidelines for disaster management and relief operations.",icon:"document",action:"View Directive"},{title:"Public Safety Resources",description:"Download preparedness guides, emergency contacts, and safety handbooks.",icon:"document",action:"Browse Resources"},{title:"National Resilience Programme",description:"Register your community for disaster preparedness training and workshops.",icon:"community",action:"Register Now"},{title:"Cyber Security Portal",description:"Report cyber incidents and access cybersecurity advisories and alerts.",icon:"cyber",action:"Access Portal"},{title:"Tender & Procurement",description:"View current MKN tender notices, procurement opportunities, and vendor registration.",icon:"document",action:"View Tenders"}],Nr={about:["About MKN","Vision & Mission","Organisation Structure","Leadership","History"],services:["Disaster Management","National Security Policy","Counter-Terrorism","Cybersecurity","Crisis Response"],resources:["MKN Directive No. 20","Publications & Reports","Media Centre","FAQ","Tender & Procurement"],government:["Prime Minister's Department","Government of Malaysia","Public Service Portal","eKL Portal","Malaysia.gov.my"]},Hf=[{name:"MKN Operations Centre (PKTN)",phone:"03-8888 4000",hours:"24/7"},{name:"NADMA Disaster Hotline",phone:"03-8064 2400",hours:"24/7"},{name:"General Emergency",phone:"999",hours:"24/7"},{name:"Cyber Security (MyCERT)",phone:"1-300-88-2999",hours:"24/7"}];function Bf(){const[e,t]=je.useState(!1),[n,r]=je.useState(!1);return je.useEffect(()=>{const l=()=>t(window.scrollY>100);return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),a.jsxs("header",{className:`header ${e?"header-scrolled":""}`,children:[a.jsxs("div",{className:"container header-inner",children:[a.jsxs("a",{href:"#home",className:"header-logo",onClick:()=>r(!1),children:[a.jsx("img",{src:"/mkn-logo.svg",alt:"MKN Logo",className:"logo-img"}),a.jsxs("div",{className:"logo-text",children:[a.jsx("span",{className:"logo-title",children:"MAJLIS KESELAMATAN NEGARA"}),a.jsx("span",{className:"logo-subtitle",children:"National Security Council · Malaysia"})]})]}),a.jsxs("nav",{className:`header-nav ${n?"nav-open":""}`,children:[Af.map(l=>a.jsx("a",{href:l.href,className:"nav-link",onClick:()=>r(!1),children:l.label},l.href)),a.jsx("a",{href:"#contact",className:"btn btn-primary nav-cta",onClick:()=>r(!1),children:"Emergency Contact"})]}),a.jsx("button",{className:"mobile-toggle",onClick:()=>r(!n),"aria-label":"Toggle menu",children:a.jsx(D,{name:n?"close":"menu",size:26,color:"#0d2240"})})]}),a.jsx("style",{children:`
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
      `})]})}function Kf(){return a.jsxs("section",{id:"home",className:"hero",children:[a.jsx("div",{className:"hero-bg-pattern"}),a.jsx("div",{className:"hero-overlay"}),a.jsxs("div",{className:"container hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("span",{className:"hero-badge-dot"}),xt.badge]}),a.jsxs("h1",{className:"hero-title",children:[xt.title,a.jsx("span",{className:"hero-title-accent",children:xt.subtitle})]}),a.jsx("p",{className:"hero-description",children:xt.description}),a.jsxs("div",{className:"hero-actions",children:[a.jsxs("a",{href:"#corporate",className:"btn btn-primary",children:[xt.primaryAction,a.jsx(D,{name:"arrow",size:18,color:"#0d2240"})]}),a.jsx("a",{href:"#involvement",className:"btn btn-outline",children:xt.secondaryAction})]}),a.jsx("div",{className:"hero-stats",children:xt.stats.map((e,t)=>a.jsxs("div",{className:"hero-stat",style:{animationDelay:`${.3+t*.1}s`},children:[a.jsx("div",{className:"hero-stat-value",children:e.value}),a.jsx("div",{className:"hero-stat-label",children:e.label})]},t))})]}),a.jsxs("div",{className:"hero-scroll-indicator",children:[a.jsx("span",{children:"Scroll to explore"}),a.jsx(D,{name:"chevron",size:20,color:"rgba(255,255,255,0.6)"})]}),a.jsx("style",{children:`
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
      `})]})}function Wf(){return a.jsxs("section",{id:"corporate",className:"section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{children:"Corporate Information"}),a.jsx("p",{className:"subtitle",children:"Learn about the Majlis Keselamatan Negara — our mandate, history, and commitment to safeguarding Malaysia's national security."}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"about-grid",children:[a.jsxs("div",{className:"about-text",children:[a.jsx("h3",{className:"about-heading",children:kr.heading}),a.jsx("p",{className:"about-intro",children:kr.intro}),kr.body.map((e,t)=>a.jsx("p",{className:"about-body-text",children:e},t))]}),a.jsx("div",{className:"about-facts",children:a.jsxs("div",{className:"facts-card",children:[a.jsxs("div",{className:"facts-header",children:[a.jsx(D,{name:"document",size:20,color:"#c5a253"}),a.jsx("span",{children:"Key Facts"})]}),a.jsx("div",{className:"facts-list",children:kr.keyFacts.map((e,t)=>a.jsxs("div",{className:"fact-item",children:[a.jsx("span",{className:"fact-label",children:e.label}),a.jsx("span",{className:"fact-value",children:e.value})]},t))})]})})]}),a.jsxs("div",{className:"vm-section",children:[a.jsxs("div",{className:"vm-card vm-vision",children:[a.jsx("div",{className:"vm-icon-wrap",children:a.jsx(D,{name:"star",size:28,color:"#c5a253"})}),a.jsx("h3",{children:"Our Vision"}),a.jsx("p",{children:Zl.vision})]}),a.jsxs("div",{className:"vm-card vm-mission",children:[a.jsx("div",{className:"vm-icon-wrap",children:a.jsx(D,{name:"target",size:28,color:"#c5a253"})}),a.jsx("h3",{children:"Our Mission"}),a.jsx("p",{children:Zl.mission})]})]}),a.jsxs("div",{className:"values-section",children:[a.jsx("h3",{className:"values-heading",children:"Core Values"}),a.jsx("div",{className:"values-grid",children:Zl.values.map((e,t)=>a.jsxs("div",{className:"value-card",children:[a.jsx("div",{className:"value-icon",children:a.jsx(D,{name:e.icon,size:24,color:"#c5a253"})}),a.jsx("h4",{children:e.title}),a.jsx("p",{children:e.description})]},t))})]}),a.jsxs("div",{className:"org-section",children:[a.jsxs("div",{className:"section-header",style:{marginBottom:"40px"},children:[a.jsx("h3",{style:{fontSize:"1.6rem"},children:Sr.heading}),a.jsx("p",{className:"subtitle",children:Sr.description})]}),a.jsx("div",{className:"org-tiers",children:Sr.levels.map((e,t)=>a.jsxs("div",{className:"org-tier",children:[a.jsxs("div",{className:"org-tier-badge",style:{background:t===0?"var(--mkn-navy)":t===1?"var(--mkn-navy-light)":"var(--mkn-navy-lighter)"},children:["Tier ",t+1]}),a.jsxs("div",{className:"org-tier-content",children:[a.jsx("h4",{className:"org-tier-title",children:e.title}),a.jsx("p",{className:"org-tier-desc",children:e.desc}),a.jsx("div",{className:"org-members",children:e.members.map((n,r)=>a.jsx("span",{className:"org-member-tag",children:n},r))})]}),t<Sr.levels.length-1&&a.jsx("div",{className:"org-connector",children:a.jsx(D,{name:"chevron",size:20,color:"#c5a253"})})]},t))})]}),a.jsxs("div",{className:"leadership-section",children:[a.jsxs("div",{className:"section-header",style:{marginBottom:"40px"},children:[a.jsx("h3",{style:{fontSize:"1.6rem"},children:"Key Leadership"}),a.jsx("p",{className:"subtitle",children:"The distinguished leadership guiding Malaysia's national security agenda."})]}),a.jsx("div",{className:"leadership-grid",children:Vf.map((e,t)=>a.jsxs("div",{className:"leader-card",children:[a.jsx("div",{className:"leader-avatar",style:{background:e.color},children:e.initials}),a.jsxs("div",{className:"leader-info",children:[a.jsx("h4",{className:"leader-name",children:e.name}),a.jsx("p",{className:"leader-position",children:e.position}),a.jsx("span",{className:"leader-role",children:e.role})]})]},t))})]})]}),a.jsx("style",{children:`
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
      `})]})}function Qf(){const[e,t]=je.useState(0);return a.jsxs("section",{id:"involvement",className:"section involvement-section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{children:"MKN Involvement"}),a.jsx("p",{className:"subtitle",children:"From disaster management to cybersecurity — discover how MKN safeguards Malaysia across six critical domains of national security."}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"involvement-tabs",children:Jl.map((n,r)=>a.jsxs("button",{className:`inv-tab ${e===r?"inv-tab-active":""}`,onClick:()=>t(r),style:e===r?{borderBottomColor:n.color}:{},children:[a.jsx("span",{className:"inv-tab-icon",style:{background:e===r?n.color:"transparent",color:e===r?"#fff":n.color},children:a.jsx(D,{name:n.icon,size:18,color:e===r?"#fff":n.color})}),a.jsx("span",{className:"inv-tab-label",children:n.title})]},n.id))}),a.jsx("div",{className:"involvement-content",children:Jl.map((n,r)=>e===r&&a.jsxs("div",{className:"inv-detail fade-in-up",style:{animationDuration:"0.4s"},children:[a.jsxs("div",{className:"inv-detail-header",style:{background:`linear-gradient(135deg, ${n.color}, ${n.color}dd)`},children:[a.jsx("div",{className:"inv-detail-icon-wrap",children:a.jsx(D,{name:n.icon,size:32,color:"#fff"})}),a.jsxs("div",{className:"inv-detail-titles",children:[a.jsx("span",{className:"inv-detail-tag",children:n.tag}),a.jsx("h3",{children:n.title})]})]}),a.jsxs("div",{className:"inv-detail-body",children:[a.jsx("p",{className:"inv-detail-summary",children:n.summary}),a.jsxs("div",{className:"inv-highlights",children:[a.jsxs("h4",{className:"inv-highlights-title",children:[a.jsx(D,{name:"star",size:16,color:"#c5a253"}),"Key Achievements"]}),a.jsx("div",{className:"inv-highlights-grid",children:n.highlights.map((l,i)=>a.jsxs("div",{className:"inv-highlight-item",children:[a.jsx("span",{className:"inv-check",style:{color:n.color},children:a.jsx(D,{name:"star",size:14,color:n.color})}),a.jsx("span",{children:l})]},i))})]})]})]},n.id))}),a.jsx("div",{className:"inv-overview-grid",children:Jl.map((n,r)=>a.jsxs("div",{className:"inv-overview-card",onClick:()=>{var l;t(r),(l=document.getElementById("involvement"))==null||l.scrollIntoView({behavior:"smooth"})},children:[a.jsx("div",{className:"inv-overview-icon",style:{background:`${n.color}15`,color:n.color},children:a.jsx(D,{name:n.icon,size:22,color:n.color})}),a.jsx("h4",{children:n.title}),a.jsxs("p",{children:[n.summary.slice(0,100),"..."]}),a.jsx("span",{className:"inv-overview-tag",style:{background:`${n.color}15`,color:n.color},children:n.tag})]},n.id))})]}),a.jsx("style",{children:`
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
          padding: 28px;
          border: 1px solid var(--mkn-gray-light);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .inv-overview-card:hover {
          border-color: var(--mkn-gold);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .inv-overview-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .inv-overview-card h4 {
          font-size: 1.05rem;
          margin-bottom: 8px;
        }
        .inv-overview-card p {
          font-size: 0.85rem;
          color: var(--mkn-gray);
          line-height: 1.6;
          margin-bottom: 12px;
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
      `})]})}function bf(){return a.jsxs("section",{id:"news",className:"section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{children:"News & Announcements"}),a.jsx("p",{className:"subtitle",children:"Stay updated with the latest developments, operations, and initiatives from the National Security Council."}),a.jsx("div",{className:"section-divider"})]}),a.jsxs("div",{className:"news-grid",children:[a.jsxs("div",{className:"news-featured",children:[a.jsxs("div",{className:"news-featured-banner",children:[a.jsx("div",{className:"news-featured-pattern"}),a.jsx("span",{className:"news-tag",style:{background:wt[0].tagColor},children:wt[0].tag}),a.jsx(D,{name:"alert",size:48,color:"rgba(255,255,255,0.2)"})]}),a.jsxs("div",{className:"news-featured-body",children:[a.jsxs("div",{className:"news-meta",children:[a.jsx("span",{className:"news-category",children:wt[0].category}),a.jsx("span",{className:"news-dot",children:"•"}),a.jsx("span",{className:"news-date",children:wt[0].date})]}),a.jsx("h3",{className:"news-featured-title",children:wt[0].title}),a.jsx("p",{className:"news-featured-excerpt",children:wt[0].excerpt}),a.jsxs("a",{href:"#news",className:"news-read-more",children:["Read Full Article",a.jsx(D,{name:"arrow",size:16,color:"#c5a253"})]})]})]}),a.jsx("div",{className:"news-list",children:wt.slice(1).map((e,t)=>a.jsx("div",{className:"news-card",children:a.jsxs("div",{className:"news-card-body",children:[a.jsxs("div",{className:"news-meta",children:[a.jsx("span",{className:"news-category",children:e.category}),a.jsx("span",{className:"news-dot",children:"•"}),a.jsx("span",{className:"news-date",children:e.date})]}),a.jsx("h4",{className:"news-card-title",children:e.title}),a.jsx("p",{className:"news-card-excerpt",children:e.excerpt}),a.jsxs("div",{className:"news-card-footer",children:[a.jsx("span",{className:"news-tag-sm",style:{background:`${e.tagColor}15`,color:e.tagColor},children:e.tag}),a.jsxs("a",{href:"#news",className:"news-card-link",children:["Read more",a.jsx(D,{name:"arrow",size:14,color:"#0d2240"})]})]})]})},t))})]}),a.jsx("div",{className:"news-cta",children:a.jsxs("a",{href:"#news",className:"btn btn-navy",children:["View All Announcements",a.jsx(D,{name:"arrow",size:18,color:"#fff"})]})})]}),a.jsx("style",{children:`
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
      `})]})}function Yf(e,t,n){const[r,l]=je.useState(0);return je.useEffect(()=>{if(!n)return;let i=null,o;const s=u=>{i===null&&(i=u);const d=Math.min((u-i)/t,1),g=1-Math.pow(1-d,3);l(e*g),d<1?o=requestAnimationFrame(s):l(e)};return o=requestAnimationFrame(s),()=>cancelAnimationFrame(o)},[e,t,n]),r}function Gf({stat:e,start:t}){const n=Yf(e.value,1800,t),r=l=>e.value>=1e3?Math.round(l).toLocaleString():e.value<10?l.toFixed(1):Math.round(l).toString();return a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon",children:a.jsx(D,{name:e.icon,size:24,color:"#c5a253"})}),a.jsxs("div",{className:"stat-value",children:[r(n),a.jsx("span",{className:"stat-suffix",children:e.suffix})]}),a.jsx("div",{className:"stat-label",children:e.label})]})}function Xf(){const e=je.useRef(null),[t,n]=je.useState(!1);return je.useEffect(()=>{const r=new IntersectionObserver(([l])=>{l.isIntersecting&&(n(!0),r.disconnect())},{threshold:.2});return e.current&&r.observe(e.current),()=>r.disconnect()},[]),a.jsxs("section",{id:"statistics",className:"section stats-section",ref:e,children:[a.jsx("div",{className:"stats-bg"}),a.jsxs("div",{className:"container",style:{position:"relative",zIndex:2},children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{style:{color:"var(--mkn-white)"},children:"Impact in Numbers"}),a.jsx("p",{className:"subtitle",style:{color:"rgba(255,255,255,0.7)"},children:"Measuring our commitment to national security through tangible results and outcomes."}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"stats-grid",children:Uf.map((r,l)=>a.jsx(Gf,{stat:r,start:t},l))})]}),a.jsx("style",{children:`
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
      `})]})}function Zf(){return a.jsxs("section",{id:"services",className:"section",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header",children:[a.jsx("h2",{children:"Quick Access & Services"}),a.jsx("p",{className:"subtitle",children:"Access essential MKN services, report emergencies, and find resources for disaster preparedness and national security."}),a.jsx("div",{className:"section-divider"})]}),a.jsx("div",{className:"services-grid",children:$f.map((e,t)=>a.jsxs("div",{className:"service-card",children:[a.jsx("div",{className:"service-icon-wrap",children:a.jsx(D,{name:e.icon,size:26,color:"#0d2240"})}),a.jsx("h3",{className:"service-title",children:e.title}),a.jsx("p",{className:"service-desc",children:e.description}),a.jsxs("a",{href:"#services",className:"service-action",children:[e.action,a.jsx(D,{name:"arrow",size:15,color:"#c5a253"})]})]},t))})]}),a.jsx("style",{children:`
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
      `})]})}function Jf(){return a.jsxs("footer",{id:"contact",children:[a.jsx("div",{className:"emergency-banner",children:a.jsxs("div",{className:"container emergency-inner",children:[a.jsxs("div",{className:"emergency-title",children:[a.jsx(D,{name:"alert",size:28,color:"#dc2626"}),a.jsxs("div",{children:[a.jsx("h3",{children:"Emergency Contacts"}),a.jsx("p",{children:"24/7 national security & disaster response hotlines"})]})]}),a.jsx("div",{className:"emergency-contacts",children:Hf.map((e,t)=>a.jsxs("div",{className:"emergency-contact-item",children:[a.jsx("div",{className:"emergency-contact-icon",children:a.jsx(D,{name:"phone",size:16,color:"#fff"})}),a.jsxs("div",{className:"emergency-contact-info",children:[a.jsx("span",{className:"emergency-contact-name",children:e.name}),a.jsx("span",{className:"emergency-contact-phone",children:e.phone}),a.jsxs("span",{className:"emergency-contact-hours",children:[a.jsx(D,{name:"clock",size:10,color:"#15803d"}),e.hours]})]})]},t))})]})}),a.jsxs("div",{className:"footer-main",children:[a.jsxs("div",{className:"container footer-grid",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsxs("div",{className:"footer-logo",children:[a.jsx("img",{src:"/mkn-logo.svg",alt:"MKN Logo",className:"footer-logo-img"}),a.jsxs("div",{children:[a.jsx("div",{className:"footer-logo-title",children:"MAJLIS KESELAMATAN NEGARA"}),a.jsx("div",{className:"footer-logo-sub",children:"National Security Council"})]})]}),a.jsx("p",{className:"footer-desc",children:"Safeguarding Malaysia's sovereignty, territorial integrity, and public safety through strategic security policies, disaster management, and crisis coordination."}),a.jsxs("div",{className:"footer-address",children:[a.jsx(D,{name:"location",size:16,color:"#c5a253"}),a.jsx("span",{children:"Aras 5-9, Blok D4, Kompleks D, Pusat Pentadbiran Kerajaan Persekutuan, 62502 Putrajaya, Malaysia"})]}),a.jsxs("div",{className:"footer-contact-info",children:[a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(D,{name:"phone",size:15,color:"#c5a253"}),a.jsx("span",{children:"+603-8888 4000"})]}),a.jsxs("div",{className:"footer-contact-item",children:[a.jsx(D,{name:"email",size:15,color:"#c5a253"}),a.jsx("span",{children:"pro@mkn.gov.my"})]})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:"About MKN"}),a.jsx("ul",{children:Nr.about.map((e,t)=>a.jsx("li",{children:a.jsx("a",{href:"#corporate",children:e})},t))})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:"Our Services"}),a.jsx("ul",{children:Nr.services.map((e,t)=>a.jsx("li",{children:a.jsx("a",{href:"#involvement",children:e})},t))})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:"Resources"}),a.jsx("ul",{children:Nr.resources.map((e,t)=>a.jsx("li",{children:a.jsx("a",{href:"#services",children:e})},t))})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:"Government"}),a.jsx("ul",{children:Nr.government.map((e,t)=>a.jsx("li",{children:a.jsxs("a",{href:"#footer",className:"footer-ext-link",children:[e,a.jsx(D,{name:"external",size:12,color:"#6b7280"})]})},t))})]})]}),a.jsxs("div",{className:"container footer-social",children:[a.jsxs("div",{className:"footer-social-left",children:[a.jsx("span",{className:"footer-social-label",children:"Follow us:"}),a.jsx("div",{className:"footer-social-icons",children:["facebook","twitter","instagram","youtube"].map(e=>a.jsx("a",{href:"#footer",className:"footer-social-icon",children:a.jsx(D,{name:e,size:18,color:"#c5a253"})},e))})]}),a.jsxs("div",{className:"footer-newsletter",children:[a.jsx("span",{className:"footer-newsletter-label",children:"Subscribe to MKN updates"}),a.jsxs("div",{className:"footer-newsletter-input",children:[a.jsx("input",{type:"email",placeholder:"Enter your email address"}),a.jsx("button",{className:"btn btn-primary footer-subscribe-btn",children:"Subscribe"})]})]})]})]}),a.jsx("div",{className:"footer-copyright",children:a.jsxs("div",{className:"container copyright-inner",children:[a.jsx("div",{className:"copyright-left",children:a.jsx("span",{children:"© 2026 Majlis Keselamatan Negara. All Rights Reserved."})}),a.jsxs("div",{className:"copyright-links",children:[a.jsx("a",{href:"#privacy",children:"Privacy Policy"}),a.jsx("a",{href:"#terms",children:"Terms of Use"}),a.jsx("a",{href:"#disclaimer",children:"Disclaimer"}),a.jsx("a",{href:"#cookies",children:"Cookie Policy"})]}),a.jsx("div",{className:"copyright-last",children:a.jsx("span",{children:"Last Updated: 19 June 2026"})})]})}),a.jsx("style",{children:`
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
          width: 52px;
          height: 52px;
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
      `})]})}function qf(){return a.jsxs(a.Fragment,{children:[a.jsx(Ff,{}),a.jsx(Bf,{}),a.jsxs("main",{children:[a.jsx(Kf,{}),a.jsx(Wf,{}),a.jsx(Qf,{}),a.jsx(Xf,{}),a.jsx(bf,{}),a.jsx(Zf,{})]}),a.jsx(Jf,{})]})}sc(document.getElementById("root")).render(a.jsx(je.StrictMode,{children:a.jsx(qf,{})}));
