(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/vgl":function(e,t,n){"use strict";function r(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}n.d(t,"a",(function(){return r}))},0:function(e,t,n){e.exports=n("zUnb")},"0iRq":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("SrNW"),o=n("A8kH"),i=n("iqFP"),s=n("Ti3e");function a(e,t){return arguments.length>=2?function(n){return Object(s.a)(Object(r.a)(e,t),Object(o.a)(1),Object(i.a)(t))(n)}:function(t){return Object(s.a)(Object(r.a)((t,n,r)=>e(t,n,r+1)),Object(o.a)(1))(t)}}},"0pus":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n("ZTXN"),o=n("IdLP"),i=(n("5uGe"),n("bwdy")),s=n("i7Dj");class a extends o.a{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new i.a,e.add(this.source.subscribe(new l(this.getSubject(),this))),e.closed&&(this._connection=null,e=i.a.EMPTY)),e}refCount(){return Object(s.a)()(this)}}const c=(()=>{const e=a.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class l extends r.c{constructor(e,t){super(e),this.connectable=t}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}},"1MAX":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("dUuy"),o=n("i9P/"),i=n("sWLk"),s=n("qEfY"),a=n("eY+9"),c=n("/vgl"),l=n("X0qr");const u=e=>{if(e&&"function"==typeof e[s.a])return u=e,e=>{const t=u[s.a]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(Object(a.a)(e))return Object(r.a)(e);if(Object(c.a)(e))return n=e,e=>(n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,o.a),e);if(e&&"function"==typeof e[i.a])return t=e,e=>{const n=t[i.a]();for(;;){const t=n.next();if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e};{const t=Object(l.a)(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected.`+" You can provide an Observable, Promise, Array, or Iterable.")}var t,n,u}},"1X/a":function(e,t){!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=43)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return G})),n.d(t,"e",(function(){return Z})),n.d(t,"d",(function(){return L})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne}));const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${s}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,u=0;const{strings:f,values:{length:p}}=e;for(;u<p;){const e=o.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)l(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=h.exec(f[u])[2],n=t.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const o=r.split(a);this.parts.push({type:"attribute",index:c,name:t,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const r=e.parentNode,o=t.split(a),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=d();else{const e=h.exec(i);null!==e&&l(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===o[i]?(r.insertBefore(d(),e),n.push(e)):e.data=o[i],u+=i}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&c!==s||(c++,t.insertBefore(d(),e)),s=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=r.pop()}for(const i of n)i.parentNode.removeChild(i)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,d=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let i=g(r),s=r[i],a=-1,c=0;const l=[];let u=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-c,i=g(r,i),s=r[i]}l.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},g=(e,t=-1)=>{for(let n=t+1;n<e.length;n++)if(u(e[n]))return n;return-1},m=new WeakMap,b=e=>"function"==typeof e&&m.has(e),y={},v={};class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const n of this.__parts)void 0!==n&&n.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,c=o.nextNode();for(;s<n.length;)if(i=n[s],u(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=` ${i} `;class x{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=h.exec(e);t+=null===a?e+(n?w:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const C=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let r=0;r<n.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(C(e)||!E(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||C(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class O{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new O(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class D{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class j extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new I(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class I extends k{}let A=!1;(()=>{try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class P{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function N(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const R=new Map,F=new WeakMap,M=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new j(e,t.slice(1),n).parts:"@"===o?[new P(e,t.slice(1),r.eventContext)]:"?"===o?[new D(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new O(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const L=(e,...t)=>new x(e,t,"html",M),$=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const B=e=>t=>{const n=$(t.type,e);let r=R.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},R.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(i);if(o=r.keyString.get(s),void 0===o){const n=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(n,e),o=new c(t,n),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},H=["html","svg"],U=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:q};class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=q){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.converter||z,r="function"==typeof n?n:n.fromAttribute;return r?r(e,t.type):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.converter;return(n&&n.toAttribute||z.toAttribute)(e,t.type)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;const G=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),K=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Z(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):K(e,t)}const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class X{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new X(n,J)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const te={};class ne extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=F.has(t),s=V&&11===t.nodeType&&!!t.host,a=s&&!U.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=F.get(t);void 0===r&&(o(t,t.firstChild),F.set(t,r=new O(Object.assign({templateFactory:N},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:B(r)},n)),a){const e=F.get(c);F.delete(c),((e,t,n)=>{U.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let l=0;l<i;l++){const e=o[l];e.parentNode.removeChild(e),s.textContent+=e.textContent}(e=>{H.forEach(t=>{const n=R.get($(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let s=g(o),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=p(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=g(o,s);return}s=g(o,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),f(n,e)}})(r,c,e.value instanceof _?e.value.template:void 0),o(t,t.firstChild),t.appendChild(c),F.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=n(0).b`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host(:not([expanded])) kor-card {
          cursor: pointer;
        }
        kor-card {
          padding: 8px 16px;
        }
        slot:not([name]) {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          transition: var(--transition-1);
        }
        /* expanded */
        :host(:not([expanded])) slot:not([name]) {
          margin-top: 0;
          max-height: 0px;
          opacity: 0;
          overflow: hidden;
        }
        .header {
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex: 1;
        }
        .icon {
          margin-right: 8px;
        }
        slot[name='header'] p {
          margin-right: 8px;
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
          flex: 1;
        }
        :host([expanded]) .expand {
          transform: rotate(180deg);
        }
        /* disabled */
        :host([disabled]) .header {
          opacity: 0.2;
        }
        :host([disabled]) kor-card {
          pointer-events: none;
        }
      `]}render(){return r.d`
      <kor-card
        @click="${()=>this.expanded?"":this.expanded=!0}"
      >
        <slot
          name="header"
          slot="header"
          @click="${e=>this.handleCollapse(e)}"
        >
          <div class="header">
            ${this.icon?r.d` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
            <p>${this.label}</p>
            <kor-icon
              button
              class="expand"
              icon="keyboard_arrow_down"
            ></kor-icon>
          </div>
        </slot>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
        ${this.expanded?r.d`
              <slot
                name="footer"
                slot="${this.emptyFooter?void 0:"footer"}"
                @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.shadowRoot.querySelector("kor-card").shadowRoot.querySelector(".top").style.padding="0"},0)}handleCollapse(e){this.expanded&&(this.expanded=!1,e.stopPropagation())}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"expanded",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyBody",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-accordion")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          z-index: 3;
          height: 56px;
          padding: 0 16px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: rgb(var(--base-0));
          box-shadow: var(--shadow-1);
          transition: var(--transition-1);
        }
        .logo {
          height: 24px;
          margin-right: 32px;
        }
        .label {
          font: var(--header-1);
          color: var(--text-1);
          max-width: 320px;
          margin-right: 32px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host([mobile]) .label {
          flex: 1;
          max-width: unset;
          margin: 0 16px;
          text-align: center;
        }
        /* slots */
        slot {
          display: flex;
          align-items: center;
        }
        slot:not([name]) {
          flex: 1;
        }
        slot[name='functions']::slotted(*) {
          margin-left: 12px;
        }
        ::slotted(kor-tabs) {
          border-bottom: unset;
        }
        slot[name='right'],
        slot[name='left'] {
          min-width: 24px;
        }
        slot[name='right'] {
          margin-left: auto;
        }
      `]}render(){return r.d`
      ${this.mobile?r.d`
            <slot name="left"></slot>
            ${this.label?r.d` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:r.d`
            ${this.logo?r.d`
                  <img
                    class="logo"
                    src="${this.logo}"
                    @click="${()=>this.handleLogoClick()}"
                  />
                `:""}
            ${this.label?r.d` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}handleLogoClick(){this.dispatchEvent(new Event("logo-clicked"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"logo",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"mobile",void 0),s=i([Object(r.c)("kor-app-bar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host,
        .image {
          display: flex;
          align-items: center;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          margin-left: 8px;
          overflow: hidden;
        }
        .label,
        .info {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .label {
          font-weight: bold;
        }
        .image {
          overflow: hidden;
          justify-content: center;
          font: var(--header-2);
          color: var(--text-1);
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.1);
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        :host-context(kor-app-bar) {
          max-width: 288px;
        }
        /* condensed */
        :host([condensed]) .image {
          height: 24px;
          width: 24px;
        }
      `]}render(){return r.d`
      <!-- image -->
      <div class="image">
        ${this.image?r.d` <img src="${this.image}" /> `:r.d`
              ${this.label?r.d` ${this.getInitials(this.label)} `:r.d` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?r.d`
            <div class="text">
              ${this.label?r.d`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?r.d`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}getInitials(e){var t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"info",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"image",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),s=i([Object(r.c)("kor-avatar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          width: max-content;
          min-width: 16px;
          padding: 0 4px;
          border-radius: 8px;
          background: rgb(var(--functional-blue));
        }
        :host(:not([label])) {
          padding: 4px;
          min-width: unset;
        }
        kor-text {
          color: white;
          font-weight: bold;
        }
        /* status */
        :host([status]) {
          background: transparent;
          padding: 0px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return r.d`
      ${this.status?r.d`
            <!-- status -->
            ${this.status?r.d`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:r.d`
            ${this.label?r.d`
                  <kor-text size="body-2">
                    ${this.label>999?r.d` 999+ `:r.d` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}};i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"status",void 0),s=i([Object(r.c)("kor-badge")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(1);let i=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
      `]}render(){return r.d` <slot></slot> `}};i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(r.c)("kor-breadcrumbs")],i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.label="Label",this.active=!1}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          align-items: center;
        }
        kor-icon {
          pointer-events: none;
          margin: 0 4px;
        }
        kor-text {
          color: var(--text-2);
          cursor: pointer;
          font-weight: bold;
        }
        :host([active]) kor-text {
          color: var(--text-1);
        }
        /* hover inputs */
        @media (hover: hover) {
          kor-text:hover:not(:active) {
            color: var(--text-1);
          }
        }
      `]}render(){return r.d`
      ${this.firstItem()?"":r.d`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}firstItem(){let e,t;return t=Array.prototype.slice.call(this.parentElement.children),e=0==t.indexOf(this),e}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),s=i([Object(r.c)("kor-breadcrumb-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.label="Label",this.color="primary"}static get styles(){return[o.a,r.b`
        :host {
          font: var(--header-2);
          color: var(--text-1);
          display: flex;
          height: max-content;
          width: max-content;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-1);
          justify-content: center;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host(:not([icon])) {
          min-width: 56px;
          max-width: 160px;
          padding: 4px 12px;
        }
        :host([color='tertiary']:not([icon])) {
          padding: 3px 11px;
        }
        :host([icon]) {
          padding: 4px;
        }
        :host([color='tertiary'][icon]) {
          padding: 3px;
        }
        /* idle */
        :host([color='primary']) {
          background-color: rgb(var(--accent-1));
        }
        :host([color='secondary']) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([color='tertiary']) {
          border-width: 1px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.25);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* text and icon colors */
        kor-icon {
          color: unset;
        }

        :host([color='primary']) {
          color: rgba(255, 255, 255, 0.9);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([color='primary']:not(:active):hover) {
            background-color: rgb(var(--accent-1b));
          }
          :host([color='secondary']:not(:active):hover) {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([color='tertiary']:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return r.d`
      ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:r.d` ${this.label} `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"color",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-button")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.flat=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: 4px;
          box-sizing: border-box;
          overflow: hidden;
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: 16px;
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: 16px;
        }
        slot[name='footer']:not(.empty) {
          padding-top: 16px;
        }
        .label {
          flex: 1;
          display: flex;
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0;
        }
        .label kor-icon {
          margin-right: 8px;
        }
        slot[name='footer']::slotted(*:not(:first-child)),
        slot[name='functions']::slotted(*) {
          margin-left: 12px;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          padding: 0 16px;
          margin-right: -16px;
          margin-left: -16px;
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        :host([flex-direction='column'])
          slot:not([name])::slotted(*:not(:last-child)) {
          margin-bottom: 12px;
        }
        :host([flex-direction='row'])
          slot:not([name])::slotted(*:not(:last-child)) {
          margin-right: 12px;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: -16px -16px 16px -16px;
        }
      `]}render(){return r.d`
      ${this.image?r.d` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?r.d`
                <div class="label">
                  ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":r.d` <div style="margin-top: 16px"></div> `}
              `:""}
          <slot
            name="header"
            @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"image",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-card")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 2px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .box {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not(:active)) .box {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return r.d`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        value="${this.label}"
        name="${this.label}"
      />
      <div class="box">
        ${this.active?r.d` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?r.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-checkbox")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[o.a,r.b`
        :host([orientation='horizontal']) {
          width: 100%;
        }
        :host([orientation='vertical']) {
          height: 100%;
        }
        .line {
          background: rgba(var(--neutral-1), 0.25);
        }
        :host([orientation='horizontal']) .line {
          height: 1px;
          width: 100%;
        }
        :host([orientation='vertical']) .line {
          width: 1px;
          height: 100%;
        }
        /* spacing */
        :host([spacing='s'][orientation='horizontal']) {
          padding: 8px 0;
        }
        :host([spacing='m'][orientation='horizontal']) {
          padding: 16px 0;
        }
        :host([spacing='l'][orientation='horizontal']) {
          padding: 32px 0;
        }
        :host([spacing='s'][orientation='vertical']) {
          padding: 0 8px;
        }
        :host([spacing='m'][orientation='vertical']) {
          padding: 0 16px;
        }
        :host([spacing='l'][orientation='vertical']) {
          padding: 0 32px;
        }
      `]}render(){return r.d` <div class="line"></div> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"spacing",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(r.c)("kor-divider")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        kor-card {
          position: absolute;
          border-radius: 0px;
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-in-out, 0s top, 0s left;
        }
        /* position */
        :host([position='left']) kor-card {
          left: 0;
        }
        :host([position='right']) kor-card {
          right: 0;
        }
        :host([position='top']) kor-card {
          top: 0;
        }
        :host([position='bottom']) kor-card {
          bottom: 0;
        }
        /* animations */
        :host([position='left']:not([visible])) kor-card {
          margin-left: -40px;
        }
        :host([position='right']:not([visible])) kor-card {
          margin-right: -40px;
        }
        :host([position='top']:not([visible])) kor-card {
          margin-top: -40px;
        }
        :host([position='bottom']:not([visible])) kor-card {
          margin-bottom: -40px;
        }
      `]}render(){return r.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        style="height: ${this.getCardSize().height}; width: ${this.getCardSize().width}; max-height: ${this.getCardSize().height}; max-width: ${this.getCardSize().width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":r.d`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let e={height:void 0,width:void 0};switch(this.position){case"left":case"right":e.height="100%",e.width=this.width;break;case"top":case"bottom":e.height=this.height,e.width="100%"}return e}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"height",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"width",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-drawer")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        slot[name='footer'] {
          display: flex;
          margin-top: 16px;
        }
        slot[name='footer']::slotted(*) {
          margin: 0 8px;
        }
        kor-icon + kor-text {
          margin-top: 8px;
        }
        kor-text {
          text-align: center;
        }
      `]}render(){return r.d`
      ${this.icon?r.d`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?r.d` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),s=i([Object(r.c)("kor-empty-state")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[o.a,r.b`
        :host {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
        }
        :host(:not([fit-content])) {
          height: 100%;
          width: 100%;
        }
        ::slotted(*) {
          width: auto;
          min-width: 0;
          min-height: 0;
        }
        /* spacing */
        :host([spacing='s']) {
          grid-gap: 8px;
        }
        :host([spacing='m']) {
          grid-gap: 12px;
        }
        :host([spacing='l']) {
          grid-gap: 16px;
        }
        /* columns and rows */
        ::slotted(*[grid-cols='0']) {
          display: none;
        }
        ::slotted(*:not([grid-cols])),
        ::slotted(*[grid-cols='1']) {
          grid-column: span 1;
        }
        ::slotted(*[grid-cols='2']) {
          grid-column: span 2;
        }
        ::slotted(*[grid-cols='3']) {
          grid-column: span 3;
        }
        ::slotted(*[grid-cols='4']) {
          grid-column: span 4;
        }
        ::slotted(*[grid-cols='5']) {
          grid-column: span 5;
        }
        ::slotted(*[grid-cols='6']) {
          grid-column: span 6;
        }
        ::slotted(*[grid-cols='7']) {
          grid-column: span 7;
        }
        ::slotted(*[grid-cols='8']) {
          grid-column: span 8;
        }
        ::slotted(*[grid-cols='9']) {
          grid-column: span 9;
        }
        ::slotted(*[grid-cols='10']) {
          grid-column: span 10;
        }
        ::slotted(*[grid-cols='11']) {
          grid-column: span 11;
        }
        ::slotted(*[grid-cols='12']) {
          grid-column: span 12;
        }
        ::slotted(*:not([grid-rows])),
        ::slotted(*[grid-rows='1']) {
          grid-row: span 1;
        }
        ::slotted(*[grid-rows='2']) {
          grid-row: span 2;
        }
        ::slotted(*[grid-rows='3']) {
          grid-row: span 3;
        }
        ::slotted(*[grid-rows='4']) {
          grid-row: span 4;
        }
        ::slotted(*[grid-rows='5']) {
          grid-row: span 5;
        }
        ::slotted(*[grid-rows='6']) {
          grid-row: span 6;
        }
        ::slotted(*[grid-rows='7']) {
          grid-row: span 7;
        }
        ::slotted(*[grid-rows='8']) {
          grid-row: span 8;
        }
        ::slotted(*[grid-rows='9']) {
          grid-row: span 9;
        }
        ::slotted(*[grid-rows='10']) {
          grid-row: span 10;
        }
        ::slotted(*[grid-rows='11']) {
          grid-row: span 11;
        }
        ::slotted(*[grid-rows='12']) {
          grid-row: span 12;
        }
        /* tablet */
        @media only screen and (max-width: 1025px) {
          ::slotted(*[grid-cols-m='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-m='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-m='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-m='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-m='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-m='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-m='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-m='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-m='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-m='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-m='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-m='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-m='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-m='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-m='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-m='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-m='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-m='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-m='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-m='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-m='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-m='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-m='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-m='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-m='12']) {
            grid-row: span 12;
          }
        }
        /* tablet */
        @media only screen and (max-width: 767px) {
          ::slotted(*[grid-cols-s='0']) {
            display: none;
          }
          ::slotted(*[grid-cols-s='1']) {
            grid-column: span 1;
          }
          ::slotted(*[grid-cols-s='2']) {
            grid-column: span 2;
          }
          ::slotted(*[grid-cols-s='3']) {
            grid-column: span 3;
          }
          ::slotted(*[grid-cols-s='4']) {
            grid-column: span 4;
          }
          ::slotted(*[grid-cols-s='5']) {
            grid-column: span 5;
          }
          ::slotted(*[grid-cols-s='6']) {
            grid-column: span 6;
          }
          ::slotted(*[grid-cols-s='7']) {
            grid-column: span 7;
          }
          ::slotted(*[grid-cols-s='8']) {
            grid-column: span 8;
          }
          ::slotted(*[grid-cols-s='9']) {
            grid-column: span 9;
          }
          ::slotted(*[grid-cols-s='10']) {
            grid-column: span 10;
          }
          ::slotted(*[grid-cols-s='11']) {
            grid-column: span 11;
          }
          ::slotted(*[grid-cols-s='12']) {
            grid-column: span 12;
          }
          ::slotted(*[grid-rows-s='1']) {
            grid-row: span 1;
          }
          ::slotted(*[grid-rows-s='2']) {
            grid-row: span 2;
          }
          ::slotted(*[grid-rows-s='3']) {
            grid-row: span 3;
          }
          ::slotted(*[grid-rows-s='4']) {
            grid-row: span 4;
          }
          ::slotted(*[grid-rows-s='5']) {
            grid-row: span 5;
          }
          ::slotted(*[grid-rows-s='6']) {
            grid-row: span 6;
          }
          ::slotted(*[grid-rows-s='7']) {
            grid-row: span 7;
          }
          ::slotted(*[grid-rows-s='8']) {
            grid-row: span 8;
          }
          ::slotted(*[grid-rows-s='9']) {
            grid-row: span 9;
          }
          ::slotted(*[grid-rows-s='10']) {
            grid-row: span 10;
          }
          ::slotted(*[grid-rows-s='11']) {
            grid-row: span 11;
          }
          ::slotted(*[grid-rows-s='12']) {
            grid-row: span 12;
          }
        }
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"columns"===e?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===e&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}};i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"columns",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"rows",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"spacing",void 0),s=i([Object(r.c)("kor-grid")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,r.b`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
        :host([icon='3d_rotation']):before {
          content: '\\e84d';
        }
        :host([icon='ac_unit']):before {
          content: '\\eb3b';
        }
        :host([icon='access_alarm']):before {
          content: '\\e190';
        }
        :host([icon='access_alarms']):before {
          content: '\\e191';
        }
        :host([icon='access_time']):before {
          content: '\\e192';
        }
        :host([icon='accessibility']):before {
          content: '\\e84e';
        }
        :host([icon='accessible']):before {
          content: '\\e914';
        }
        :host([icon='account_balance']):before {
          content: '\\e84f';
        }
        :host([icon='account_balance_wallet']):before {
          content: '\\e850';
        }
        :host([icon='account_box']):before {
          content: '\\e851';
        }
        :host([icon='account_circle']):before {
          content: '\\e853';
        }
        :host([icon='adb']):before {
          content: '\\e60e';
        }
        :host([icon='add']):before {
          content: '\\e145';
        }
        :host([icon='add_a_photo']):before {
          content: '\\e439';
        }
        :host([icon='add_alarm']):before {
          content: '\\e193';
        }
        :host([icon='add_alert']):before {
          content: '\\e003';
        }
        :host([icon='add_box']):before {
          content: '\\e146';
        }
        :host([icon='add_circle']):before {
          content: '\\e147';
        }
        :host([icon='add_circle_outline']):before {
          content: '\\e148';
        }
        :host([icon='add_location']):before {
          content: '\\e567';
        }
        :host([icon='add_shopping_cart']):before {
          content: '\\e854';
        }
        :host([icon='add_to_photos']):before {
          content: '\\e39d';
        }
        :host([icon='add_to_queue']):before {
          content: '\\e05c';
        }
        :host([icon='adjust']):before {
          content: '\\e39e';
        }
        :host([icon='airline_seat_flat']):before {
          content: '\\e630';
        }
        :host([icon='airline_seat_flat_angled']):before {
          content: '\\e631';
        }
        :host([icon='airline_seat_individual_suite']):before {
          content: '\\e632';
        }
        :host([icon='airline_seat_legroom_extra']):before {
          content: '\\e633';
        }
        :host([icon='airline_seat_legroom_normal']):before {
          content: '\\e634';
        }
        :host([icon='airline_seat_legroom_reduced']):before {
          content: '\\e635';
        }
        :host([icon='airline_seat_recline_extra']):before {
          content: '\\e636';
        }
        :host([icon='airline_seat_recline_normal']):before {
          content: '\\e637';
        }
        :host([icon='airplanemode_active']):before {
          content: '\\e195';
        }
        :host([icon='airplanemode_inactive']):before {
          content: '\\e194';
        }
        :host([icon='airplay']):before {
          content: '\\e055';
        }
        :host([icon='airport_shuttle']):before {
          content: '\\eb3c';
        }
        :host([icon='alarm']):before {
          content: '\\e855';
        }
        :host([icon='alarm_add']):before {
          content: '\\e856';
        }
        :host([icon='alarm_off']):before {
          content: '\\e857';
        }
        :host([icon='alarm_on']):before {
          content: '\\e858';
        }
        :host([icon='album']):before {
          content: '\\e019';
        }
        :host([icon='all_inclusive']):before {
          content: '\\eb3d';
        }
        :host([icon='all_out']):before {
          content: '\\e90b';
        }
        :host([icon='android']):before {
          content: '\\e859';
        }
        :host([icon='announcement']):before {
          content: '\\e85a';
        }
        :host([icon='apps']):before {
          content: '\\e5c3';
        }
        :host([icon='archive']):before {
          content: '\\e149';
        }
        :host([icon='arrow_back']):before {
          content: '\\e5c4';
        }
        :host([icon='arrow_downward']):before {
          content: '\\e5db';
        }
        :host([icon='arrow_drop_down']):before {
          content: '\\e5c5';
        }
        :host([icon='arrow_drop_down_circle']):before {
          content: '\\e5c6';
        }
        :host([icon='arrow_drop_up']):before {
          content: '\\e5c7';
        }
        :host([icon='arrow_forward']):before {
          content: '\\e5c8';
        }
        :host([icon='arrow_upward']):before {
          content: '\\e5d8';
        }
        :host([icon='art_track']):before {
          content: '\\e060';
        }
        :host([icon='aspect_ratio']):before {
          content: '\\e85b';
        }
        :host([icon='assessment']):before {
          content: '\\e85c';
        }
        :host([icon='assignment']):before {
          content: '\\e85d';
        }
        :host([icon='assignment_ind']):before {
          content: '\\e85e';
        }
        :host([icon='assignment_late']):before {
          content: '\\e85f';
        }
        :host([icon='assignment_return']):before {
          content: '\\e860';
        }
        :host([icon='assignment_returned']):before {
          content: '\\e861';
        }
        :host([icon='assignment_turned_in']):before {
          content: '\\e862';
        }
        :host([icon='assistant']):before {
          content: '\\e39f';
        }
        :host([icon='assistant_photo']):before {
          content: '\\e3a0';
        }
        :host([icon='attach_file']):before {
          content: '\\e226';
        }
        :host([icon='attach_money']):before {
          content: '\\e227';
        }
        :host([icon='attachment']):before {
          content: '\\e2bc';
        }
        :host([icon='audiotrack']):before {
          content: '\\e3a1';
        }
        :host([icon='autorenew']):before {
          content: '\\e863';
        }
        :host([icon='av_timer']):before {
          content: '\\e01b';
        }
        :host([icon='backspace']):before {
          content: '\\e14a';
        }
        :host([icon='backup']):before {
          content: '\\e864';
        }
        :host([icon='battery_alert']):before {
          content: '\\e19c';
        }
        :host([icon='battery_charging_full']):before {
          content: '\\e1a3';
        }
        :host([icon='battery_full']):before {
          content: '\\e1a4';
        }
        :host([icon='battery_std']):before {
          content: '\\e1a5';
        }
        :host([icon='battery_unknown']):before {
          content: '\\e1a6';
        }
        :host([icon='beach_access']):before {
          content: '\\eb3e';
        }
        :host([icon='beenhere']):before {
          content: '\\e52d';
        }
        :host([icon='block']):before {
          content: '\\e14b';
        }
        :host([icon='bluetooth']):before {
          content: '\\e1a7';
        }
        :host([icon='bluetooth_audio']):before {
          content: '\\e60f';
        }
        :host([icon='bluetooth_connected']):before {
          content: '\\e1a8';
        }
        :host([icon='bluetooth_disabled']):before {
          content: '\\e1a9';
        }
        :host([icon='bluetooth_searching']):before {
          content: '\\e1aa';
        }
        :host([icon='blur_circular']):before {
          content: '\\e3a2';
        }
        :host([icon='blur_linear']):before {
          content: '\\e3a3';
        }
        :host([icon='blur_off']):before {
          content: '\\e3a4';
        }
        :host([icon='blur_on']):before {
          content: '\\e3a5';
        }
        :host([icon='book']):before {
          content: '\\e865';
        }
        :host([icon='bookmark']):before {
          content: '\\e866';
        }
        :host([icon='bookmark_border']):before {
          content: '\\e867';
        }
        :host([icon='border_all']):before {
          content: '\\e228';
        }
        :host([icon='border_bottom']):before {
          content: '\\e229';
        }
        :host([icon='border_clear']):before {
          content: '\\e22a';
        }
        :host([icon='border_color']):before {
          content: '\\e22b';
        }
        :host([icon='border_horizontal']):before {
          content: '\\e22c';
        }
        :host([icon='border_inner']):before {
          content: '\\e22d';
        }
        :host([icon='border_left']):before {
          content: '\\e22e';
        }
        :host([icon='border_outer']):before {
          content: '\\e22f';
        }
        :host([icon='border_right']):before {
          content: '\\e230';
        }
        :host([icon='border_style']):before {
          content: '\\e231';
        }
        :host([icon='border_top']):before {
          content: '\\e232';
        }
        :host([icon='border_vertical']):before {
          content: '\\e233';
        }
        :host([icon='branding_watermark']):before {
          content: '\\e06b';
        }
        :host([icon='brightness_1']):before {
          content: '\\e3a6';
        }
        :host([icon='brightness_2']):before {
          content: '\\e3a7';
        }
        :host([icon='brightness_3']):before {
          content: '\\e3a8';
        }
        :host([icon='brightness_4']):before {
          content: '\\e3a9';
        }
        :host([icon='brightness_5']):before {
          content: '\\e3aa';
        }
        :host([icon='brightness_6']):before {
          content: '\\e3ab';
        }
        :host([icon='brightness_7']):before {
          content: '\\e3ac';
        }
        :host([icon='brightness_auto']):before {
          content: '\\e1ab';
        }
        :host([icon='brightness_high']):before {
          content: '\\e1ac';
        }
        :host([icon='brightness_low']):before {
          content: '\\e1ad';
        }
        :host([icon='brightness_medium']):before {
          content: '\\e1ae';
        }
        :host([icon='broken_image']):before {
          content: '\\e3ad';
        }
        :host([icon='brush']):before {
          content: '\\e3ae';
        }
        :host([icon='bubble_chart']):before {
          content: '\\e6dd';
        }
        :host([icon='bug_report']):before {
          content: '\\e868';
        }
        :host([icon='build']):before {
          content: '\\e869';
        }
        :host([icon='burst_mode']):before {
          content: '\\e43c';
        }
        :host([icon='business']):before {
          content: '\\e0af';
        }
        :host([icon='business_center']):before {
          content: '\\eb3f';
        }
        :host([icon='cached']):before {
          content: '\\e86a';
        }
        :host([icon='cake']):before {
          content: '\\e7e9';
        }
        :host([icon='call']):before {
          content: '\\e0b0';
        }
        :host([icon='call_end']):before {
          content: '\\e0b1';
        }
        :host([icon='call_made']):before {
          content: '\\e0b2';
        }
        :host([icon='call_merge']):before {
          content: '\\e0b3';
        }
        :host([icon='call_missed']):before {
          content: '\\e0b4';
        }
        :host([icon='call_missed_outgoing']):before {
          content: '\\e0e4';
        }
        :host([icon='call_received']):before {
          content: '\\e0b5';
        }
        :host([icon='call_split']):before {
          content: '\\e0b6';
        }
        :host([icon='call_to_action']):before {
          content: '\\e06c';
        }
        :host([icon='camera']):before {
          content: '\\e3af';
        }
        :host([icon='camera_alt']):before {
          content: '\\e3b0';
        }
        :host([icon='camera_enhance']):before {
          content: '\\e8fc';
        }
        :host([icon='camera_front']):before {
          content: '\\e3b1';
        }
        :host([icon='camera_rear']):before {
          content: '\\e3b2';
        }
        :host([icon='camera_roll']):before {
          content: '\\e3b3';
        }
        :host([icon='cancel']):before {
          content: '\\e5c9';
        }
        :host([icon='card_giftcard']):before {
          content: '\\e8f6';
        }
        :host([icon='card_membership']):before {
          content: '\\e8f7';
        }
        :host([icon='card_travel']):before {
          content: '\\e8f8';
        }
        :host([icon='casino']):before {
          content: '\\eb40';
        }
        :host([icon='cast']):before {
          content: '\\e307';
        }
        :host([icon='cast_connected']):before {
          content: '\\e308';
        }
        :host([icon='center_focus_strong']):before {
          content: '\\e3b4';
        }
        :host([icon='center_focus_weak']):before {
          content: '\\e3b5';
        }
        :host([icon='change_history']):before {
          content: '\\e86b';
        }
        :host([icon='chat']):before {
          content: '\\e0b7';
        }
        :host([icon='chat_bubble']):before {
          content: '\\e0ca';
        }
        :host([icon='chat_bubble_outline']):before {
          content: '\\e0cb';
        }
        :host([icon='check']):before {
          content: '\\e5ca';
        }
        :host([icon='check_box']):before {
          content: '\\e834';
        }
        :host([icon='check_box_outline_blank']):before {
          content: '\\e835';
        }
        :host([icon='check_circle']):before {
          content: '\\e86c';
        }
        :host([icon='chevron_left']):before {
          content: '\\e5cb';
        }
        :host([icon='chevron_right']):before {
          content: '\\e5cc';
        }
        :host([icon='child_care']):before {
          content: '\\eb41';
        }
        :host([icon='child_friendly']):before {
          content: '\\eb42';
        }
        :host([icon='chrome_reader_mode']):before {
          content: '\\e86d';
        }
        :host([icon='class']):before {
          content: '\\e86e';
        }
        :host([icon='clear']):before {
          content: '\\e14c';
        }
        :host([icon='clear_all']):before {
          content: '\\e0b8';
        }
        :host([icon='close']):before {
          content: '\\e5cd';
        }
        :host([icon='closed_caption']):before {
          content: '\\e01c';
        }
        :host([icon='cloud']):before {
          content: '\\e2bd';
        }
        :host([icon='cloud_circle']):before {
          content: '\\e2be';
        }
        :host([icon='cloud_done']):before {
          content: '\\e2bf';
        }
        :host([icon='cloud_download']):before {
          content: '\\e2c0';
        }
        :host([icon='cloud_off']):before {
          content: '\\e2c1';
        }
        :host([icon='cloud_queue']):before {
          content: '\\e2c2';
        }
        :host([icon='cloud_upload']):before {
          content: '\\e2c3';
        }
        :host([icon='code']):before {
          content: '\\e86f';
        }
        :host([icon='collections']):before {
          content: '\\e3b6';
        }
        :host([icon='collections_bookmark']):before {
          content: '\\e431';
        }
        :host([icon='color_lens']):before {
          content: '\\e3b7';
        }
        :host([icon='colorize']):before {
          content: '\\e3b8';
        }
        :host([icon='comment']):before {
          content: '\\e0b9';
        }
        :host([icon='compare']):before {
          content: '\\e3b9';
        }
        :host([icon='compare_arrows']):before {
          content: '\\e915';
        }
        :host([icon='computer']):before {
          content: '\\e30a';
        }
        :host([icon='confirmation_number']):before {
          content: '\\e638';
        }
        :host([icon='contact_mail']):before {
          content: '\\e0d0';
        }
        :host([icon='contact_phone']):before {
          content: '\\e0cf';
        }
        :host([icon='contacts']):before {
          content: '\\e0ba';
        }
        :host([icon='content_copy']):before {
          content: '\\e14d';
        }
        :host([icon='content_cut']):before {
          content: '\\e14e';
        }
        :host([icon='content_paste']):before {
          content: '\\e14f';
        }
        :host([icon='control_point']):before {
          content: '\\e3ba';
        }
        :host([icon='control_point_duplicate']):before {
          content: '\\e3bb';
        }
        :host([icon='copyright']):before {
          content: '\\e90c';
        }
        :host([icon='create']):before {
          content: '\\e150';
        }
        :host([icon='create_new_folder']):before {
          content: '\\e2cc';
        }
        :host([icon='credit_card']):before {
          content: '\\e870';
        }
        :host([icon='crop']):before {
          content: '\\e3be';
        }
        :host([icon='crop_16_9']):before {
          content: '\\e3bc';
        }
        :host([icon='crop_3_2']):before {
          content: '\\e3bd';
        }
        :host([icon='crop_5_4']):before {
          content: '\\e3bf';
        }
        :host([icon='crop_7_5']):before {
          content: '\\e3c0';
        }
        :host([icon='crop_din']):before {
          content: '\\e3c1';
        }
        :host([icon='crop_free']):before {
          content: '\\e3c2';
        }
        :host([icon='crop_landscape']):before {
          content: '\\e3c3';
        }
        :host([icon='crop_original']):before {
          content: '\\e3c4';
        }
        :host([icon='crop_portrait']):before {
          content: '\\e3c5';
        }
        :host([icon='crop_rotate']):before {
          content: '\\e437';
        }
        :host([icon='crop_square']):before {
          content: '\\e3c6';
        }
        :host([icon='dashboard']):before {
          content: '\\e871';
        }
        :host([icon='data_usage']):before {
          content: '\\e1af';
        }
        :host([icon='date_range']):before {
          content: '\\e916';
        }
        :host([icon='dehaze']):before {
          content: '\\e3c7';
        }
        :host([icon='delete']):before {
          content: '\\e872';
        }
        :host([icon='delete_forever']):before {
          content: '\\e92b';
        }
        :host([icon='delete_sweep']):before {
          content: '\\e16c';
        }
        :host([icon='description']):before {
          content: '\\e873';
        }
        :host([icon='desktop_mac']):before {
          content: '\\e30b';
        }
        :host([icon='desktop_windows']):before {
          content: '\\e30c';
        }
        :host([icon='details']):before {
          content: '\\e3c8';
        }
        :host([icon='developer_board']):before {
          content: '\\e30d';
        }
        :host([icon='developer_mode']):before {
          content: '\\e1b0';
        }
        :host([icon='device_hub']):before {
          content: '\\e335';
        }
        :host([icon='devices']):before {
          content: '\\e1b1';
        }
        :host([icon='devices_other']):before {
          content: '\\e337';
        }
        :host([icon='dialer_sip']):before {
          content: '\\e0bb';
        }
        :host([icon='dialpad']):before {
          content: '\\e0bc';
        }
        :host([icon='directions']):before {
          content: '\\e52e';
        }
        :host([icon='directions_bike']):before {
          content: '\\e52f';
        }
        :host([icon='directions_boat']):before {
          content: '\\e532';
        }
        :host([icon='directions_bus']):before {
          content: '\\e530';
        }
        :host([icon='directions_car']):before {
          content: '\\e531';
        }
        :host([icon='directions_railway']):before {
          content: '\\e534';
        }
        :host([icon='directions_run']):before {
          content: '\\e566';
        }
        :host([icon='directions_subway']):before {
          content: '\\e533';
        }
        :host([icon='directions_transit']):before {
          content: '\\e535';
        }
        :host([icon='directions_walk']):before {
          content: '\\e536';
        }
        :host([icon='disc_full']):before {
          content: '\\e610';
        }
        :host([icon='dns']):before {
          content: '\\e875';
        }
        :host([icon='do_not_disturb']):before {
          content: '\\e612';
        }
        :host([icon='do_not_disturb_alt']):before {
          content: '\\e611';
        }
        :host([icon='do_not_disturb_off']):before {
          content: '\\e643';
        }
        :host([icon='do_not_disturb_on']):before {
          content: '\\e644';
        }
        :host([icon='dock']):before {
          content: '\\e30e';
        }
        :host([icon='domain']):before {
          content: '\\e7ee';
        }
        :host([icon='done']):before {
          content: '\\e876';
        }
        :host([icon='done_all']):before {
          content: '\\e877';
        }
        :host([icon='donut_large']):before {
          content: '\\e917';
        }
        :host([icon='donut_small']):before {
          content: '\\e918';
        }
        :host([icon='drafts']):before {
          content: '\\e151';
        }
        :host([icon='drag_handle']):before {
          content: '\\e25d';
        }
        :host([icon='drive_eta']):before {
          content: '\\e613';
        }
        :host([icon='dvr']):before {
          content: '\\e1b2';
        }
        :host([icon='edit']):before {
          content: '\\e3c9';
        }
        :host([icon='edit_location']):before {
          content: '\\e568';
        }
        :host([icon='eject']):before {
          content: '\\e8fb';
        }
        :host([icon='email']):before {
          content: '\\e0be';
        }
        :host([icon='enhanced_encryption']):before {
          content: '\\e63f';
        }
        :host([icon='equalizer']):before {
          content: '\\e01d';
        }
        :host([icon='error']):before {
          content: '\\e000';
        }
        :host([icon='error_outline']):before {
          content: '\\e001';
        }
        :host([icon='euro_symbol']):before {
          content: '\\e926';
        }
        :host([icon='ev_station']):before {
          content: '\\e56d';
        }
        :host([icon='event']):before {
          content: '\\e878';
        }
        :host([icon='event_available']):before {
          content: '\\e614';
        }
        :host([icon='event_busy']):before {
          content: '\\e615';
        }
        :host([icon='event_note']):before {
          content: '\\e616';
        }
        :host([icon='event_seat']):before {
          content: '\\e903';
        }
        :host([icon='exit_to_app']):before {
          content: '\\e879';
        }
        :host([icon='expand_less']):before {
          content: '\\e5ce';
        }
        :host([icon='expand_more']):before {
          content: '\\e5cf';
        }
        :host([icon='explicit']):before {
          content: '\\e01e';
        }
        :host([icon='explore']):before {
          content: '\\e87a';
        }
        :host([icon='exposure']):before {
          content: '\\e3ca';
        }
        :host([icon='exposure_neg_1']):before {
          content: '\\e3cb';
        }
        :host([icon='exposure_neg_2']):before {
          content: '\\e3cc';
        }
        :host([icon='exposure_plus_1']):before {
          content: '\\e3cd';
        }
        :host([icon='exposure_plus_2']):before {
          content: '\\e3ce';
        }
        :host([icon='exposure_zero']):before {
          content: '\\e3cf';
        }
        :host([icon='extension']):before {
          content: '\\e87b';
        }
        :host([icon='face']):before {
          content: '\\e87c';
        }
        :host([icon='fast_forward']):before {
          content: '\\e01f';
        }
        :host([icon='fast_rewind']):before {
          content: '\\e020';
        }
        :host([icon='favorite']):before {
          content: '\\e87d';
        }
        :host([icon='favorite_border']):before {
          content: '\\e87e';
        }
        :host([icon='featured_play_list']):before {
          content: '\\e06d';
        }
        :host([icon='featured_video']):before {
          content: '\\e06e';
        }
        :host([icon='feedback']):before {
          content: '\\e87f';
        }
        :host([icon='fiber_dvr']):before {
          content: '\\e05d';
        }
        :host([icon='fiber_manual_record']):before {
          content: '\\e061';
        }
        :host([icon='fiber_new']):before {
          content: '\\e05e';
        }
        :host([icon='fiber_pin']):before {
          content: '\\e06a';
        }
        :host([icon='fiber_smart_record']):before {
          content: '\\e062';
        }
        :host([icon='file_download']):before {
          content: '\\e2c4';
        }
        :host([icon='file_upload']):before {
          content: '\\e2c6';
        }
        :host([icon='filter']):before {
          content: '\\e3d3';
        }
        :host([icon='filter_1']):before {
          content: '\\e3d0';
        }
        :host([icon='filter_2']):before {
          content: '\\e3d1';
        }
        :host([icon='filter_3']):before {
          content: '\\e3d2';
        }
        :host([icon='filter_4']):before {
          content: '\\e3d4';
        }
        :host([icon='filter_5']):before {
          content: '\\e3d5';
        }
        :host([icon='filter_6']):before {
          content: '\\e3d6';
        }
        :host([icon='filter_7']):before {
          content: '\\e3d7';
        }
        :host([icon='filter_8']):before {
          content: '\\e3d8';
        }
        :host([icon='filter_9']):before {
          content: '\\e3d9';
        }
        :host([icon='filter_9_plus']):before {
          content: '\\e3da';
        }
        :host([icon='filter_b_and_w']):before {
          content: '\\e3db';
        }
        :host([icon='filter_center_focus']):before {
          content: '\\e3dc';
        }
        :host([icon='filter_drama']):before {
          content: '\\e3dd';
        }
        :host([icon='filter_frames']):before {
          content: '\\e3de';
        }
        :host([icon='filter_hdr']):before {
          content: '\\e3df';
        }
        :host([icon='filter_list']):before {
          content: '\\e152';
        }
        :host([icon='filter_none']):before {
          content: '\\e3e0';
        }
        :host([icon='filter_tilt_shift']):before {
          content: '\\e3e2';
        }
        :host([icon='filter_vintage']):before {
          content: '\\e3e3';
        }
        :host([icon='find_in_page']):before {
          content: '\\e880';
        }
        :host([icon='find_replace']):before {
          content: '\\e881';
        }
        :host([icon='fingerprint']):before {
          content: '\\e90d';
        }
        :host([icon='first_page']):before {
          content: '\\e5dc';
        }
        :host([icon='fitness_center']):before {
          content: '\\eb43';
        }
        :host([icon='flag']):before {
          content: '\\e153';
        }
        :host([icon='flare']):before {
          content: '\\e3e4';
        }
        :host([icon='flash_auto']):before {
          content: '\\e3e5';
        }
        :host([icon='flash_off']):before {
          content: '\\e3e6';
        }
        :host([icon='flash_on']):before {
          content: '\\e3e7';
        }
        :host([icon='flight']):before {
          content: '\\e539';
        }
        :host([icon='flight_land']):before {
          content: '\\e904';
        }
        :host([icon='flight_takeoff']):before {
          content: '\\e905';
        }
        :host([icon='flip']):before {
          content: '\\e3e8';
        }
        :host([icon='flip_to_back']):before {
          content: '\\e882';
        }
        :host([icon='flip_to_front']):before {
          content: '\\e883';
        }
        :host([icon='folder']):before {
          content: '\\e2c7';
        }
        :host([icon='folder_open']):before {
          content: '\\e2c8';
        }
        :host([icon='folder_shared']):before {
          content: '\\e2c9';
        }
        :host([icon='folder_special']):before {
          content: '\\e617';
        }
        :host([icon='font_download']):before {
          content: '\\e167';
        }
        :host([icon='format_align_center']):before {
          content: '\\e234';
        }
        :host([icon='format_align_justify']):before {
          content: '\\e235';
        }
        :host([icon='format_align_left']):before {
          content: '\\e236';
        }
        :host([icon='format_align_right']):before {
          content: '\\e237';
        }
        :host([icon='format_bold']):before {
          content: '\\e238';
        }
        :host([icon='format_clear']):before {
          content: '\\e239';
        }
        :host([icon='format_color_fill']):before {
          content: '\\e23a';
        }
        :host([icon='format_color_reset']):before {
          content: '\\e23b';
        }
        :host([icon='format_color_text']):before {
          content: '\\e23c';
        }
        :host([icon='format_indent_decrease']):before {
          content: '\\e23d';
        }
        :host([icon='format_indent_increase']):before {
          content: '\\e23e';
        }
        :host([icon='format_italic']):before {
          content: '\\e23f';
        }
        :host([icon='format_line_spacing']):before {
          content: '\\e240';
        }
        :host([icon='format_list_bulleted']):before {
          content: '\\e241';
        }
        :host([icon='format_list_numbered']):before {
          content: '\\e242';
        }
        :host([icon='format_paint']):before {
          content: '\\e243';
        }
        :host([icon='format_quote']):before {
          content: '\\e244';
        }
        :host([icon='format_shapes']):before {
          content: '\\e25e';
        }
        :host([icon='format_size']):before {
          content: '\\e245';
        }
        :host([icon='format_strikethrough']):before {
          content: '\\e246';
        }
        :host([icon='format_textdirection_l_to_r']):before {
          content: '\\e247';
        }
        :host([icon='format_textdirection_r_to_l']):before {
          content: '\\e248';
        }
        :host([icon='format_underlined']):before {
          content: '\\e249';
        }
        :host([icon='forum']):before {
          content: '\\e0bf';
        }
        :host([icon='forward']):before {
          content: '\\e154';
        }
        :host([icon='forward_10']):before {
          content: '\\e056';
        }
        :host([icon='forward_30']):before {
          content: '\\e057';
        }
        :host([icon='forward_5']):before {
          content: '\\e058';
        }
        :host([icon='free_breakfast']):before {
          content: '\\eb44';
        }
        :host([icon='fullscreen']):before {
          content: '\\e5d0';
        }
        :host([icon='fullscreen_exit']):before {
          content: '\\e5d1';
        }
        :host([icon='functions']):before {
          content: '\\e24a';
        }
        :host([icon='g_translate']):before {
          content: '\\e927';
        }
        :host([icon='gamepad']):before {
          content: '\\e30f';
        }
        :host([icon='games']):before {
          content: '\\e021';
        }
        :host([icon='gavel']):before {
          content: '\\e90e';
        }
        :host([icon='gesture']):before {
          content: '\\e155';
        }
        :host([icon='get_app']):before {
          content: '\\e884';
        }
        :host([icon='gif']):before {
          content: '\\e908';
        }
        :host([icon='golf_course']):before {
          content: '\\eb45';
        }
        :host([icon='gps_fixed']):before {
          content: '\\e1b3';
        }
        :host([icon='gps_not_fixed']):before {
          content: '\\e1b4';
        }
        :host([icon='gps_off']):before {
          content: '\\e1b5';
        }
        :host([icon='grade']):before {
          content: '\\e885';
        }
        :host([icon='gradient']):before {
          content: '\\e3e9';
        }
        :host([icon='grain']):before {
          content: '\\e3ea';
        }
        :host([icon='graphic_eq']):before {
          content: '\\e1b8';
        }
        :host([icon='grid_off']):before {
          content: '\\e3eb';
        }
        :host([icon='grid_on']):before {
          content: '\\e3ec';
        }
        :host([icon='group']):before {
          content: '\\e7ef';
        }
        :host([icon='group_add']):before {
          content: '\\e7f0';
        }
        :host([icon='group_work']):before {
          content: '\\e886';
        }
        :host([icon='hd']):before {
          content: '\\e052';
        }
        :host([icon='hdr_off']):before {
          content: '\\e3ed';
        }
        :host([icon='hdr_on']):before {
          content: '\\e3ee';
        }
        :host([icon='hdr_strong']):before {
          content: '\\e3f1';
        }
        :host([icon='hdr_weak']):before {
          content: '\\e3f2';
        }
        :host([icon='headset']):before {
          content: '\\e310';
        }
        :host([icon='headset_mic']):before {
          content: '\\e311';
        }
        :host([icon='healing']):before {
          content: '\\e3f3';
        }
        :host([icon='hearing']):before {
          content: '\\e023';
        }
        :host([icon='help']):before {
          content: '\\e887';
        }
        :host([icon='help_outline']):before {
          content: '\\e8fd';
        }
        :host([icon='high_quality']):before {
          content: '\\e024';
        }
        :host([icon='highlight']):before {
          content: '\\e25f';
        }
        :host([icon='highlight_off']):before {
          content: '\\e888';
        }
        :host([icon='history']):before {
          content: '\\e889';
        }
        :host([icon='home']):before {
          content: '\\e88a';
        }
        :host([icon='hot_tub']):before {
          content: '\\eb46';
        }
        :host([icon='hotel']):before {
          content: '\\e53a';
        }
        :host([icon='hourglass_empty']):before {
          content: '\\e88b';
        }
        :host([icon='hourglass_full']):before {
          content: '\\e88c';
        }
        :host([icon='http']):before {
          content: '\\e902';
        }
        :host([icon='https']):before {
          content: '\\e88d';
        }
        :host([icon='image']):before {
          content: '\\e3f4';
        }
        :host([icon='image_aspect_ratio']):before {
          content: '\\e3f5';
        }
        :host([icon='import_contacts']):before {
          content: '\\e0e0';
        }
        :host([icon='import_export']):before {
          content: '\\e0c3';
        }
        :host([icon='important_devices']):before {
          content: '\\e912';
        }
        :host([icon='inbox']):before {
          content: '\\e156';
        }
        :host([icon='indeterminate_check_box']):before {
          content: '\\e909';
        }
        :host([icon='info']):before {
          content: '\\e88e';
        }
        :host([icon='info_outline']):before {
          content: '\\e88f';
        }
        :host([icon='input']):before {
          content: '\\e890';
        }
        :host([icon='insert_chart']):before {
          content: '\\e24b';
        }
        :host([icon='insert_comment']):before {
          content: '\\e24c';
        }
        :host([icon='insert_drive_file']):before {
          content: '\\e24d';
        }
        :host([icon='insert_emoticon']):before {
          content: '\\e24e';
        }
        :host([icon='insert_invitation']):before {
          content: '\\e24f';
        }
        :host([icon='insert_link']):before {
          content: '\\e250';
        }
        :host([icon='insert_photo']):before {
          content: '\\e251';
        }
        :host([icon='invert_colors']):before {
          content: '\\e891';
        }
        :host([icon='invert_colors_off']):before {
          content: '\\e0c4';
        }
        :host([icon='iso']):before {
          content: '\\e3f6';
        }
        :host([icon='keyboard']):before {
          content: '\\e312';
        }
        :host([icon='keyboard_arrow_down']):before {
          content: '\\e313';
        }
        :host([icon='keyboard_arrow_left']):before {
          content: '\\e314';
        }
        :host([icon='keyboard_arrow_right']):before {
          content: '\\e315';
        }
        :host([icon='keyboard_arrow_up']):before {
          content: '\\e316';
        }
        :host([icon='keyboard_backspace']):before {
          content: '\\e317';
        }
        :host([icon='keyboard_capslock']):before {
          content: '\\e318';
        }
        :host([icon='keyboard_hide']):before {
          content: '\\e31a';
        }
        :host([icon='keyboard_return']):before {
          content: '\\e31b';
        }
        :host([icon='keyboard_tab']):before {
          content: '\\e31c';
        }
        :host([icon='keyboard_voice']):before {
          content: '\\e31d';
        }
        :host([icon='kitchen']):before {
          content: '\\eb47';
        }
        :host([icon='label']):before {
          content: '\\e892';
        }
        :host([icon='label_outline']):before {
          content: '\\e893';
        }
        :host([icon='landscape']):before {
          content: '\\e3f7';
        }
        :host([icon='language']):before {
          content: '\\e894';
        }
        :host([icon='laptop']):before {
          content: '\\e31e';
        }
        :host([icon='laptop_chromebook']):before {
          content: '\\e31f';
        }
        :host([icon='laptop_mac']):before {
          content: '\\e320';
        }
        :host([icon='laptop_windows']):before {
          content: '\\e321';
        }
        :host([icon='last_page']):before {
          content: '\\e5dd';
        }
        :host([icon='launch']):before {
          content: '\\e895';
        }
        :host([icon='layers']):before {
          content: '\\e53b';
        }
        :host([icon='layers_clear']):before {
          content: '\\e53c';
        }
        :host([icon='leak_add']):before {
          content: '\\e3f8';
        }
        :host([icon='leak_remove']):before {
          content: '\\e3f9';
        }
        :host([icon='lens']):before {
          content: '\\e3fa';
        }
        :host([icon='library_add']):before {
          content: '\\e02e';
        }
        :host([icon='library_books']):before {
          content: '\\e02f';
        }
        :host([icon='library_music']):before {
          content: '\\e030';
        }
        :host([icon='lightbulb_outline']):before {
          content: '\\e90f';
        }
        :host([icon='line_style']):before {
          content: '\\e919';
        }
        :host([icon='line_weight']):before {
          content: '\\e91a';
        }
        :host([icon='linear_scale']):before {
          content: '\\e260';
        }
        :host([icon='link']):before {
          content: '\\e157';
        }
        :host([icon='linked_camera']):before {
          content: '\\e438';
        }
        :host([icon='list']):before {
          content: '\\e896';
        }
        :host([icon='live_help']):before {
          content: '\\e0c6';
        }
        :host([icon='live_tv']):before {
          content: '\\e639';
        }
        :host([icon='local_activity']):before {
          content: '\\e53f';
        }
        :host([icon='local_airport']):before {
          content: '\\e53d';
        }
        :host([icon='local_atm']):before {
          content: '\\e53e';
        }
        :host([icon='local_bar']):before {
          content: '\\e540';
        }
        :host([icon='local_cafe']):before {
          content: '\\e541';
        }
        :host([icon='local_car_wash']):before {
          content: '\\e542';
        }
        :host([icon='local_convenience_store']):before {
          content: '\\e543';
        }
        :host([icon='local_dining']):before {
          content: '\\e556';
        }
        :host([icon='local_drink']):before {
          content: '\\e544';
        }
        :host([icon='local_florist']):before {
          content: '\\e545';
        }
        :host([icon='local_gas_station']):before {
          content: '\\e546';
        }
        :host([icon='local_grocery_store']):before {
          content: '\\e547';
        }
        :host([icon='local_hospital']):before {
          content: '\\e548';
        }
        :host([icon='local_hotel']):before {
          content: '\\e549';
        }
        :host([icon='local_laundry_service']):before {
          content: '\\e54a';
        }
        :host([icon='local_library']):before {
          content: '\\e54b';
        }
        :host([icon='local_mall']):before {
          content: '\\e54c';
        }
        :host([icon='local_movies']):before {
          content: '\\e54d';
        }
        :host([icon='local_offer']):before {
          content: '\\e54e';
        }
        :host([icon='local_parking']):before {
          content: '\\e54f';
        }
        :host([icon='local_pharmacy']):before {
          content: '\\e550';
        }
        :host([icon='local_phone']):before {
          content: '\\e551';
        }
        :host([icon='local_pizza']):before {
          content: '\\e552';
        }
        :host([icon='local_play']):before {
          content: '\\e553';
        }
        :host([icon='local_post_office']):before {
          content: '\\e554';
        }
        :host([icon='local_printshop']):before {
          content: '\\e555';
        }
        :host([icon='local_see']):before {
          content: '\\e557';
        }
        :host([icon='local_shipping']):before {
          content: '\\e558';
        }
        :host([icon='local_taxi']):before {
          content: '\\e559';
        }
        :host([icon='location_city']):before {
          content: '\\e7f1';
        }
        :host([icon='location_disabled']):before {
          content: '\\e1b6';
        }
        :host([icon='location_off']):before {
          content: '\\e0c7';
        }
        :host([icon='location_on']):before {
          content: '\\e0c8';
        }
        :host([icon='location_searching']):before {
          content: '\\e1b7';
        }
        :host([icon='lock']):before {
          content: '\\e897';
        }
        :host([icon='lock_open']):before {
          content: '\\e898';
        }
        :host([icon='lock_outline']):before {
          content: '\\e899';
        }
        :host([icon='looks']):before {
          content: '\\e3fc';
        }
        :host([icon='looks_3']):before {
          content: '\\e3fb';
        }
        :host([icon='looks_4']):before {
          content: '\\e3fd';
        }
        :host([icon='looks_5']):before {
          content: '\\e3fe';
        }
        :host([icon='looks_6']):before {
          content: '\\e3ff';
        }
        :host([icon='looks_one']):before {
          content: '\\e400';
        }
        :host([icon='looks_two']):before {
          content: '\\e401';
        }
        :host([icon='loop']):before {
          content: '\\e028';
        }
        :host([icon='loupe']):before {
          content: '\\e402';
        }
        :host([icon='low_priority']):before {
          content: '\\e16d';
        }
        :host([icon='loyalty']):before {
          content: '\\e89a';
        }
        :host([icon='mail']):before {
          content: '\\e158';
        }
        :host([icon='mail_outline']):before {
          content: '\\e0e1';
        }
        :host([icon='map']):before {
          content: '\\e55b';
        }
        :host([icon='markunread']):before {
          content: '\\e159';
        }
        :host([icon='markunread_mailbox']):before {
          content: '\\e89b';
        }
        :host([icon='memory']):before {
          content: '\\e322';
        }
        :host([icon='menu']):before {
          content: '\\e5d2';
        }
        :host([icon='merge_type']):before {
          content: '\\e252';
        }
        :host([icon='message']):before {
          content: '\\e0c9';
        }
        :host([icon='mic']):before {
          content: '\\e029';
        }
        :host([icon='mic_none']):before {
          content: '\\e02a';
        }
        :host([icon='mic_off']):before {
          content: '\\e02b';
        }
        :host([icon='mms']):before {
          content: '\\e618';
        }
        :host([icon='mode_comment']):before {
          content: '\\e253';
        }
        :host([icon='mode_edit']):before {
          content: '\\e254';
        }
        :host([icon='monetization_on']):before {
          content: '\\e263';
        }
        :host([icon='money_off']):before {
          content: '\\e25c';
        }
        :host([icon='monochrome_photos']):before {
          content: '\\e403';
        }
        :host([icon='mood']):before {
          content: '\\e7f2';
        }
        :host([icon='mood_bad']):before {
          content: '\\e7f3';
        }
        :host([icon='more']):before {
          content: '\\e619';
        }
        :host([icon='more_horiz']):before {
          content: '\\e5d3';
        }
        :host([icon='more_vert']):before {
          content: '\\e5d4';
        }
        :host([icon='motorcycle']):before {
          content: '\\e91b';
        }
        :host([icon='mouse']):before {
          content: '\\e323';
        }
        :host([icon='move_to_inbox']):before {
          content: '\\e168';
        }
        :host([icon='movie']):before {
          content: '\\e02c';
        }
        :host([icon='movie_creation']):before {
          content: '\\e404';
        }
        :host([icon='movie_filter']):before {
          content: '\\e43a';
        }
        :host([icon='multiline_chart']):before {
          content: '\\e6df';
        }
        :host([icon='music_note']):before {
          content: '\\e405';
        }
        :host([icon='music_video']):before {
          content: '\\e063';
        }
        :host([icon='my_location']):before {
          content: '\\e55c';
        }
        :host([icon='nature']):before {
          content: '\\e406';
        }
        :host([icon='nature_people']):before {
          content: '\\e407';
        }
        :host([icon='navigate_before']):before {
          content: '\\e408';
        }
        :host([icon='navigate_next']):before {
          content: '\\e409';
        }
        :host([icon='navigation']):before {
          content: '\\e55d';
        }
        :host([icon='near_me']):before {
          content: '\\e569';
        }
        :host([icon='network_cell']):before {
          content: '\\e1b9';
        }
        :host([icon='network_check']):before {
          content: '\\e640';
        }
        :host([icon='network_locked']):before {
          content: '\\e61a';
        }
        :host([icon='network_wifi']):before {
          content: '\\e1ba';
        }
        :host([icon='new_releases']):before {
          content: '\\e031';
        }
        :host([icon='next_week']):before {
          content: '\\e16a';
        }
        :host([icon='nfc']):before {
          content: '\\e1bb';
        }
        :host([icon='no_encryption']):before {
          content: '\\e641';
        }
        :host([icon='no_sim']):before {
          content: '\\e0cc';
        }
        :host([icon='not_interested']):before {
          content: '\\e033';
        }
        :host([icon='note']):before {
          content: '\\e06f';
        }
        :host([icon='note_add']):before {
          content: '\\e89c';
        }
        :host([icon='notifications']):before {
          content: '\\e7f4';
        }
        :host([icon='notifications_active']):before {
          content: '\\e7f7';
        }
        :host([icon='notifications_none']):before {
          content: '\\e7f5';
        }
        :host([icon='notifications_off']):before {
          content: '\\e7f6';
        }
        :host([icon='notifications_paused']):before {
          content: '\\e7f8';
        }
        :host([icon='offline_pin']):before {
          content: '\\e90a';
        }
        :host([icon='ondemand_video']):before {
          content: '\\e63a';
        }
        :host([icon='opacity']):before {
          content: '\\e91c';
        }
        :host([icon='open_in_browser']):before {
          content: '\\e89d';
        }
        :host([icon='open_in_new']):before {
          content: '\\e89e';
        }
        :host([icon='open_with']):before {
          content: '\\e89f';
        }
        :host([icon='pages']):before {
          content: '\\e7f9';
        }
        :host([icon='pageview']):before {
          content: '\\e8a0';
        }
        :host([icon='palette']):before {
          content: '\\e40a';
        }
        :host([icon='pan_tool']):before {
          content: '\\e925';
        }
        :host([icon='panorama']):before {
          content: '\\e40b';
        }
        :host([icon='panorama_fish_eye']):before {
          content: '\\e40c';
        }
        :host([icon='panorama_horizontal']):before {
          content: '\\e40d';
        }
        :host([icon='panorama_vertical']):before {
          content: '\\e40e';
        }
        :host([icon='panorama_wide_angle']):before {
          content: '\\e40f';
        }
        :host([icon='party_mode']):before {
          content: '\\e7fa';
        }
        :host([icon='pause']):before {
          content: '\\e034';
        }
        :host([icon='pause_circle_filled']):before {
          content: '\\e035';
        }
        :host([icon='pause_circle_outline']):before {
          content: '\\e036';
        }
        :host([icon='payment']):before {
          content: '\\e8a1';
        }
        :host([icon='people']):before {
          content: '\\e7fb';
        }
        :host([icon='people_outline']):before {
          content: '\\e7fc';
        }
        :host([icon='perm_camera_mic']):before {
          content: '\\e8a2';
        }
        :host([icon='perm_contact_calendar']):before {
          content: '\\e8a3';
        }
        :host([icon='perm_data_setting']):before {
          content: '\\e8a4';
        }
        :host([icon='perm_device_information']):before {
          content: '\\e8a5';
        }
        :host([icon='perm_identity']):before {
          content: '\\e8a6';
        }
        :host([icon='perm_media']):before {
          content: '\\e8a7';
        }
        :host([icon='perm_phone_msg']):before {
          content: '\\e8a8';
        }
        :host([icon='perm_scan_wifi']):before {
          content: '\\e8a9';
        }
        :host([icon='person']):before {
          content: '\\e7fd';
        }
        :host([icon='person_add']):before {
          content: '\\e7fe';
        }
        :host([icon='person_outline']):before {
          content: '\\e7ff';
        }
        :host([icon='person_pin']):before {
          content: '\\e55a';
        }
        :host([icon='person_pin_circle']):before {
          content: '\\e56a';
        }
        :host([icon='personal_video']):before {
          content: '\\e63b';
        }
        :host([icon='pets']):before {
          content: '\\e91d';
        }
        :host([icon='phone']):before {
          content: '\\e0cd';
        }
        :host([icon='phone_android']):before {
          content: '\\e324';
        }
        :host([icon='phone_bluetooth_speaker']):before {
          content: '\\e61b';
        }
        :host([icon='phone_forwarded']):before {
          content: '\\e61c';
        }
        :host([icon='phone_in_talk']):before {
          content: '\\e61d';
        }
        :host([icon='phone_iphone']):before {
          content: '\\e325';
        }
        :host([icon='phone_locked']):before {
          content: '\\e61e';
        }
        :host([icon='phone_missed']):before {
          content: '\\e61f';
        }
        :host([icon='phone_paused']):before {
          content: '\\e620';
        }
        :host([icon='phonelink']):before {
          content: '\\e326';
        }
        :host([icon='phonelink_erase']):before {
          content: '\\e0db';
        }
        :host([icon='phonelink_lock']):before {
          content: '\\e0dc';
        }
        :host([icon='phonelink_off']):before {
          content: '\\e327';
        }
        :host([icon='phonelink_ring']):before {
          content: '\\e0dd';
        }
        :host([icon='phonelink_setup']):before {
          content: '\\e0de';
        }
        :host([icon='photo']):before {
          content: '\\e410';
        }
        :host([icon='photo_album']):before {
          content: '\\e411';
        }
        :host([icon='photo_camera']):before {
          content: '\\e412';
        }
        :host([icon='photo_filter']):before {
          content: '\\e43b';
        }
        :host([icon='photo_library']):before {
          content: '\\e413';
        }
        :host([icon='photo_size_select_actual']):before {
          content: '\\e432';
        }
        :host([icon='photo_size_select_large']):before {
          content: '\\e433';
        }
        :host([icon='photo_size_select_small']):before {
          content: '\\e434';
        }
        :host([icon='picture_as_pdf']):before {
          content: '\\e415';
        }
        :host([icon='picture_in_picture']):before {
          content: '\\e8aa';
        }
        :host([icon='picture_in_picture_alt']):before {
          content: '\\e911';
        }
        :host([icon='pie_chart']):before {
          content: '\\e6c4';
        }
        :host([icon='pie_chart_outlined']):before {
          content: '\\e6c5';
        }
        :host([icon='pin_drop']):before {
          content: '\\e55e';
        }
        :host([icon='place']):before {
          content: '\\e55f';
        }
        :host([icon='play_arrow']):before {
          content: '\\e037';
        }
        :host([icon='play_circle_filled']):before {
          content: '\\e038';
        }
        :host([icon='play_circle_outline']):before {
          content: '\\e039';
        }
        :host([icon='play_for_work']):before {
          content: '\\e906';
        }
        :host([icon='playlist_add']):before {
          content: '\\e03b';
        }
        :host([icon='playlist_add_check']):before {
          content: '\\e065';
        }
        :host([icon='playlist_play']):before {
          content: '\\e05f';
        }
        :host([icon='plus_one']):before {
          content: '\\e800';
        }
        :host([icon='poll']):before {
          content: '\\e801';
        }
        :host([icon='polymer']):before {
          content: '\\e8ab';
        }
        :host([icon='pool']):before {
          content: '\\eb48';
        }
        :host([icon='portable_wifi_off']):before {
          content: '\\e0ce';
        }
        :host([icon='portrait']):before {
          content: '\\e416';
        }
        :host([icon='power']):before {
          content: '\\e63c';
        }
        :host([icon='power_input']):before {
          content: '\\e336';
        }
        :host([icon='power_settings_new']):before {
          content: '\\e8ac';
        }
        :host([icon='pregnant_woman']):before {
          content: '\\e91e';
        }
        :host([icon='present_to_all']):before {
          content: '\\e0df';
        }
        :host([icon='print']):before {
          content: '\\e8ad';
        }
        :host([icon='priority_high']):before {
          content: '\\e645';
        }
        :host([icon='public']):before {
          content: '\\e80b';
        }
        :host([icon='publish']):before {
          content: '\\e255';
        }
        :host([icon='query_builder']):before {
          content: '\\e8ae';
        }
        :host([icon='question_answer']):before {
          content: '\\e8af';
        }
        :host([icon='queue']):before {
          content: '\\e03c';
        }
        :host([icon='queue_music']):before {
          content: '\\e03d';
        }
        :host([icon='queue_play_next']):before {
          content: '\\e066';
        }
        :host([icon='radio']):before {
          content: '\\e03e';
        }
        :host([icon='radio_button_checked']):before {
          content: '\\e837';
        }
        :host([icon='radio_button_unchecked']):before {
          content: '\\e836';
        }
        :host([icon='rate_review']):before {
          content: '\\e560';
        }
        :host([icon='receipt']):before {
          content: '\\e8b0';
        }
        :host([icon='recent_actors']):before {
          content: '\\e03f';
        }
        :host([icon='record_voice_over']):before {
          content: '\\e91f';
        }
        :host([icon='redeem']):before {
          content: '\\e8b1';
        }
        :host([icon='redo']):before {
          content: '\\e15a';
        }
        :host([icon='refresh']):before {
          content: '\\e5d5';
        }
        :host([icon='remove']):before {
          content: '\\e15b';
        }
        :host([icon='remove_circle']):before {
          content: '\\e15c';
        }
        :host([icon='remove_circle_outline']):before {
          content: '\\e15d';
        }
        :host([icon='remove_from_queue']):before {
          content: '\\e067';
        }
        :host([icon='remove_red_eye']):before {
          content: '\\e417';
        }
        :host([icon='remove_shopping_cart']):before {
          content: '\\e928';
        }
        :host([icon='reorder']):before {
          content: '\\e8fe';
        }
        :host([icon='repeat']):before {
          content: '\\e040';
        }
        :host([icon='repeat_one']):before {
          content: '\\e041';
        }
        :host([icon='replay']):before {
          content: '\\e042';
        }
        :host([icon='replay_10']):before {
          content: '\\e059';
        }
        :host([icon='replay_30']):before {
          content: '\\e05a';
        }
        :host([icon='replay_5']):before {
          content: '\\e05b';
        }
        :host([icon='reply']):before {
          content: '\\e15e';
        }
        :host([icon='reply_all']):before {
          content: '\\e15f';
        }
        :host([icon='report']):before {
          content: '\\e160';
        }
        :host([icon='report_problem']):before {
          content: '\\e8b2';
        }
        :host([icon='restaurant']):before {
          content: '\\e56c';
        }
        :host([icon='restaurant_menu']):before {
          content: '\\e561';
        }
        :host([icon='restore']):before {
          content: '\\e8b3';
        }
        :host([icon='restore_page']):before {
          content: '\\e929';
        }
        :host([icon='ring_volume']):before {
          content: '\\e0d1';
        }
        :host([icon='room']):before {
          content: '\\e8b4';
        }
        :host([icon='room_service']):before {
          content: '\\eb49';
        }
        :host([icon='rotate_90_degrees_ccw']):before {
          content: '\\e418';
        }
        :host([icon='rotate_left']):before {
          content: '\\e419';
        }
        :host([icon='rotate_right']):before {
          content: '\\e41a';
        }
        :host([icon='rounded_corner']):before {
          content: '\\e920';
        }
        :host([icon='router']):before {
          content: '\\e328';
        }
        :host([icon='rowing']):before {
          content: '\\e921';
        }
        :host([icon='rss_feed']):before {
          content: '\\e0e5';
        }
        :host([icon='rv_hookup']):before {
          content: '\\e642';
        }
        :host([icon='satellite']):before {
          content: '\\e562';
        }
        :host([icon='save']):before {
          content: '\\e161';
        }
        :host([icon='scanner']):before {
          content: '\\e329';
        }
        :host([icon='schedule']):before {
          content: '\\e8b5';
        }
        :host([icon='school']):before {
          content: '\\e80c';
        }
        :host([icon='screen_lock_landscape']):before {
          content: '\\e1be';
        }
        :host([icon='screen_lock_portrait']):before {
          content: '\\e1bf';
        }
        :host([icon='screen_lock_rotation']):before {
          content: '\\e1c0';
        }
        :host([icon='screen_rotation']):before {
          content: '\\e1c1';
        }
        :host([icon='screen_share']):before {
          content: '\\e0e2';
        }
        :host([icon='sd_card']):before {
          content: '\\e623';
        }
        :host([icon='sd_storage']):before {
          content: '\\e1c2';
        }
        :host([icon='search']):before {
          content: '\\e8b6';
        }
        :host([icon='security']):before {
          content: '\\e32a';
        }
        :host([icon='select_all']):before {
          content: '\\e162';
        }
        :host([icon='send']):before {
          content: '\\e163';
        }
        :host([icon='sentiment_dissatisfied']):before {
          content: '\\e811';
        }
        :host([icon='sentiment_neutral']):before {
          content: '\\e812';
        }
        :host([icon='sentiment_satisfied']):before {
          content: '\\e813';
        }
        :host([icon='sentiment_very_dissatisfied']):before {
          content: '\\e814';
        }
        :host([icon='sentiment_very_satisfied']):before {
          content: '\\e815';
        }
        :host([icon='settings']):before {
          content: '\\e8b8';
        }
        :host([icon='settings_applications']):before {
          content: '\\e8b9';
        }
        :host([icon='settings_backup_restore']):before {
          content: '\\e8ba';
        }
        :host([icon='settings_bluetooth']):before {
          content: '\\e8bb';
        }
        :host([icon='settings_brightness']):before {
          content: '\\e8bd';
        }
        :host([icon='settings_cell']):before {
          content: '\\e8bc';
        }
        :host([icon='settings_ethernet']):before {
          content: '\\e8be';
        }
        :host([icon='settings_input_antenna']):before {
          content: '\\e8bf';
        }
        :host([icon='settings_input_component']):before {
          content: '\\e8c0';
        }
        :host([icon='settings_input_composite']):before {
          content: '\\e8c1';
        }
        :host([icon='settings_input_hdmi']):before {
          content: '\\e8c2';
        }
        :host([icon='settings_input_svideo']):before {
          content: '\\e8c3';
        }
        :host([icon='settings_overscan']):before {
          content: '\\e8c4';
        }
        :host([icon='settings_phone']):before {
          content: '\\e8c5';
        }
        :host([icon='settings_power']):before {
          content: '\\e8c6';
        }
        :host([icon='settings_remote']):before {
          content: '\\e8c7';
        }
        :host([icon='settings_system_daydream']):before {
          content: '\\e1c3';
        }
        :host([icon='settings_voice']):before {
          content: '\\e8c8';
        }
        :host([icon='share']):before {
          content: '\\e80d';
        }
        :host([icon='shop']):before {
          content: '\\e8c9';
        }
        :host([icon='shop_two']):before {
          content: '\\e8ca';
        }
        :host([icon='shopping_basket']):before {
          content: '\\e8cb';
        }
        :host([icon='shopping_cart']):before {
          content: '\\e8cc';
        }
        :host([icon='short_text']):before {
          content: '\\e261';
        }
        :host([icon='show_chart']):before {
          content: '\\e6e1';
        }
        :host([icon='shuffle']):before {
          content: '\\e043';
        }
        :host([icon='signal_cellular_4_bar']):before {
          content: '\\e1c8';
        }
        :host([icon='signal_cellular_connected_no_internet_4_bar']):before {
          content: '\\e1cd';
        }
        :host([icon='signal_cellular_no_sim']):before {
          content: '\\e1ce';
        }
        :host([icon='signal_cellular_null']):before {
          content: '\\e1cf';
        }
        :host([icon='signal_cellular_off']):before {
          content: '\\e1d0';
        }
        :host([icon='signal_wifi_4_bar']):before {
          content: '\\e1d8';
        }
        :host([icon='signal_wifi_4_bar_lock']):before {
          content: '\\e1d9';
        }
        :host([icon='signal_wifi_off']):before {
          content: '\\e1da';
        }
        :host([icon='sim_card']):before {
          content: '\\e32b';
        }
        :host([icon='sim_card_alert']):before {
          content: '\\e624';
        }
        :host([icon='skip_next']):before {
          content: '\\e044';
        }
        :host([icon='skip_previous']):before {
          content: '\\e045';
        }
        :host([icon='slideshow']):before {
          content: '\\e41b';
        }
        :host([icon='slow_motion_video']):before {
          content: '\\e068';
        }
        :host([icon='smartphone']):before {
          content: '\\e32c';
        }
        :host([icon='smoke_free']):before {
          content: '\\eb4a';
        }
        :host([icon='smoking_rooms']):before {
          content: '\\eb4b';
        }
        :host([icon='sms']):before {
          content: '\\e625';
        }
        :host([icon='sms_failed']):before {
          content: '\\e626';
        }
        :host([icon='snooze']):before {
          content: '\\e046';
        }
        :host([icon='sort']):before {
          content: '\\e164';
        }
        :host([icon='sort_by_alpha']):before {
          content: '\\e053';
        }
        :host([icon='spa']):before {
          content: '\\eb4c';
        }
        :host([icon='space_bar']):before {
          content: '\\e256';
        }
        :host([icon='speaker']):before {
          content: '\\e32d';
        }
        :host([icon='speaker_group']):before {
          content: '\\e32e';
        }
        :host([icon='speaker_notes']):before {
          content: '\\e8cd';
        }
        :host([icon='speaker_notes_off']):before {
          content: '\\e92a';
        }
        :host([icon='speaker_phone']):before {
          content: '\\e0d2';
        }
        :host([icon='spellcheck']):before {
          content: '\\e8ce';
        }
        :host([icon='star']):before {
          content: '\\e838';
        }
        :host([icon='star_border']):before {
          content: '\\e83a';
        }
        :host([icon='star_half']):before {
          content: '\\e839';
        }
        :host([icon='stars']):before {
          content: '\\e8d0';
        }
        :host([icon='stay_current_landscape']):before {
          content: '\\e0d3';
        }
        :host([icon='stay_current_portrait']):before {
          content: '\\e0d4';
        }
        :host([icon='stay_primary_landscape']):before {
          content: '\\e0d5';
        }
        :host([icon='stay_primary_portrait']):before {
          content: '\\e0d6';
        }
        :host([icon='stop']):before {
          content: '\\e047';
        }
        :host([icon='stop_screen_share']):before {
          content: '\\e0e3';
        }
        :host([icon='storage']):before {
          content: '\\e1db';
        }
        :host([icon='store']):before {
          content: '\\e8d1';
        }
        :host([icon='store_mall_directory']):before {
          content: '\\e563';
        }
        :host([icon='straighten']):before {
          content: '\\e41c';
        }
        :host([icon='streetview']):before {
          content: '\\e56e';
        }
        :host([icon='strikethrough_s']):before {
          content: '\\e257';
        }
        :host([icon='style']):before {
          content: '\\e41d';
        }
        :host([icon='subdirectory_arrow_left']):before {
          content: '\\e5d9';
        }
        :host([icon='subdirectory_arrow_right']):before {
          content: '\\e5da';
        }
        :host([icon='subject']):before {
          content: '\\e8d2';
        }
        :host([icon='subscriptions']):before {
          content: '\\e064';
        }
        :host([icon='subtitles']):before {
          content: '\\e048';
        }
        :host([icon='subway']):before {
          content: '\\e56f';
        }
        :host([icon='supervisor_account']):before {
          content: '\\e8d3';
        }
        :host([icon='surround_sound']):before {
          content: '\\e049';
        }
        :host([icon='swap_calls']):before {
          content: '\\e0d7';
        }
        :host([icon='swap_horiz']):before {
          content: '\\e8d4';
        }
        :host([icon='swap_vert']):before {
          content: '\\e8d5';
        }
        :host([icon='swap_vertical_circle']):before {
          content: '\\e8d6';
        }
        :host([icon='switch_camera']):before {
          content: '\\e41e';
        }
        :host([icon='switch_video']):before {
          content: '\\e41f';
        }
        :host([icon='sync']):before {
          content: '\\e627';
        }
        :host([icon='sync_disabled']):before {
          content: '\\e628';
        }
        :host([icon='sync_problem']):before {
          content: '\\e629';
        }
        :host([icon='system_update']):before {
          content: '\\e62a';
        }
        :host([icon='system_update_alt']):before {
          content: '\\e8d7';
        }
        :host([icon='tab']):before {
          content: '\\e8d8';
        }
        :host([icon='tab_unselected']):before {
          content: '\\e8d9';
        }
        :host([icon='tablet']):before {
          content: '\\e32f';
        }
        :host([icon='tablet_android']):before {
          content: '\\e330';
        }
        :host([icon='tablet_mac']):before {
          content: '\\e331';
        }
        :host([icon='tag_faces']):before {
          content: '\\e420';
        }
        :host([icon='tap_and_play']):before {
          content: '\\e62b';
        }
        :host([icon='terrain']):before {
          content: '\\e564';
        }
        :host([icon='text_fields']):before {
          content: '\\e262';
        }
        :host([icon='text_format']):before {
          content: '\\e165';
        }
        :host([icon='textsms']):before {
          content: '\\e0d8';
        }
        :host([icon='texture']):before {
          content: '\\e421';
        }
        :host([icon='theaters']):before {
          content: '\\e8da';
        }
        :host([icon='thumb_down']):before {
          content: '\\e8db';
        }
        :host([icon='thumb_up']):before {
          content: '\\e8dc';
        }
        :host([icon='thumbs_up_down']):before {
          content: '\\e8dd';
        }
        :host([icon='time_to_leave']):before {
          content: '\\e62c';
        }
        :host([icon='timelapse']):before {
          content: '\\e422';
        }
        :host([icon='timeline']):before {
          content: '\\e922';
        }
        :host([icon='timer']):before {
          content: '\\e425';
        }
        :host([icon='timer_10']):before {
          content: '\\e423';
        }
        :host([icon='timer_3']):before {
          content: '\\e424';
        }
        :host([icon='timer_off']):before {
          content: '\\e426';
        }
        :host([icon='title']):before {
          content: '\\e264';
        }
        :host([icon='toc']):before {
          content: '\\e8de';
        }
        :host([icon='today']):before {
          content: '\\e8df';
        }
        :host([icon='toll']):before {
          content: '\\e8e0';
        }
        :host([icon='tonality']):before {
          content: '\\e427';
        }
        :host([icon='touch_app']):before {
          content: '\\e913';
        }
        :host([icon='toys']):before {
          content: '\\e332';
        }
        :host([icon='track_changes']):before {
          content: '\\e8e1';
        }
        :host([icon='traffic']):before {
          content: '\\e565';
        }
        :host([icon='train']):before {
          content: '\\e570';
        }
        :host([icon='tram']):before {
          content: '\\e571';
        }
        :host([icon='transfer_within_a_station']):before {
          content: '\\e572';
        }
        :host([icon='transform']):before {
          content: '\\e428';
        }
        :host([icon='translate']):before {
          content: '\\e8e2';
        }
        :host([icon='trending_down']):before {
          content: '\\e8e3';
        }
        :host([icon='trending_flat']):before {
          content: '\\e8e4';
        }
        :host([icon='trending_up']):before {
          content: '\\e8e5';
        }
        :host([icon='tune']):before {
          content: '\\e429';
        }
        :host([icon='turned_in']):before {
          content: '\\e8e6';
        }
        :host([icon='turned_in_not']):before {
          content: '\\e8e7';
        }
        :host([icon='tv']):before {
          content: '\\e333';
        }
        :host([icon='unarchive']):before {
          content: '\\e169';
        }
        :host([icon='undo']):before {
          content: '\\e166';
        }
        :host([icon='unfold_less']):before {
          content: '\\e5d6';
        }
        :host([icon='unfold_more']):before {
          content: '\\e5d7';
        }
        :host([icon='update']):before {
          content: '\\e923';
        }
        :host([icon='usb']):before {
          content: '\\e1e0';
        }
        :host([icon='verified_user']):before {
          content: '\\e8e8';
        }
        :host([icon='vertical_align_bottom']):before {
          content: '\\e258';
        }
        :host([icon='vertical_align_center']):before {
          content: '\\e259';
        }
        :host([icon='vertical_align_top']):before {
          content: '\\e25a';
        }
        :host([icon='vibration']):before {
          content: '\\e62d';
        }
        :host([icon='video_call']):before {
          content: '\\e070';
        }
        :host([icon='video_label']):before {
          content: '\\e071';
        }
        :host([icon='video_library']):before {
          content: '\\e04a';
        }
        :host([icon='videocam']):before {
          content: '\\e04b';
        }
        :host([icon='videocam_off']):before {
          content: '\\e04c';
        }
        :host([icon='videogame_asset']):before {
          content: '\\e338';
        }
        :host([icon='view_agenda']):before {
          content: '\\e8e9';
        }
        :host([icon='view_array']):before {
          content: '\\e8ea';
        }
        :host([icon='view_carousel']):before {
          content: '\\e8eb';
        }
        :host([icon='view_column']):before {
          content: '\\e8ec';
        }
        :host([icon='view_comfy']):before {
          content: '\\e42a';
        }
        :host([icon='view_compact']):before {
          content: '\\e42b';
        }
        :host([icon='view_day']):before {
          content: '\\e8ed';
        }
        :host([icon='view_headline']):before {
          content: '\\e8ee';
        }
        :host([icon='view_list']):before {
          content: '\\e8ef';
        }
        :host([icon='view_module']):before {
          content: '\\e8f0';
        }
        :host([icon='view_quilt']):before {
          content: '\\e8f1';
        }
        :host([icon='view_stream']):before {
          content: '\\e8f2';
        }
        :host([icon='view_week']):before {
          content: '\\e8f3';
        }
        :host([icon='vignette']):before {
          content: '\\e435';
        }
        :host([icon='visibility']):before {
          content: '\\e8f4';
        }
        :host([icon='visibility_off']):before {
          content: '\\e8f5';
        }
        :host([icon='voice_chat']):before {
          content: '\\e62e';
        }
        :host([icon='voicemail']):before {
          content: '\\e0d9';
        }
        :host([icon='volume_down']):before {
          content: '\\e04d';
        }
        :host([icon='volume_mute']):before {
          content: '\\e04e';
        }
        :host([icon='volume_off']):before {
          content: '\\e04f';
        }
        :host([icon='volume_up']):before {
          content: '\\e050';
        }
        :host([icon='vpn_key']):before {
          content: '\\e0da';
        }
        :host([icon='vpn_lock']):before {
          content: '\\e62f';
        }
        :host([icon='wallpaper']):before {
          content: '\\e1bc';
        }
        :host([icon='warning']):before {
          content: '\\e002';
        }
        :host([icon='watch']):before {
          content: '\\e334';
        }
        :host([icon='watch_later']):before {
          content: '\\e924';
        }
        :host([icon='wb_auto']):before {
          content: '\\e42c';
        }
        :host([icon='wb_cloudy']):before {
          content: '\\e42d';
        }
        :host([icon='wb_incandescent']):before {
          content: '\\e42e';
        }
        :host([icon='wb_iridescent']):before {
          content: '\\e436';
        }
        :host([icon='wb_sunny']):before {
          content: '\\e430';
        }
        :host([icon='wc']):before {
          content: '\\e63d';
        }
        :host([icon='web']):before {
          content: '\\e051';
        }
        :host([icon='web_asset']):before {
          content: '\\e069';
        }
        :host([icon='weekend']):before {
          content: '\\e16b';
        }
        :host([icon='whatshot']):before {
          content: '\\e80e';
        }
        :host([icon='widgets']):before {
          content: '\\e1bd';
        }
        :host([icon='wifi']):before {
          content: '\\e63e';
        }
        :host([icon='wifi_lock']):before {
          content: '\\e1e1';
        }
        :host([icon='wifi_tethering']):before {
          content: '\\e1e2';
        }
        :host([icon='work']):before {
          content: '\\e8f9';
        }
        :host([icon='wrap_text']):before {
          content: '\\e25b';
        }
        :host([icon='youtube_searched_for']):before {
          content: '\\e8fa';
        }
        :host([icon='zoom_in']):before {
          content: '\\e8ff';
        }
        :host([icon='zoom_out']):before {
          content: '\\e900';
        }
        :host([icon='zoom_out_map']):before {
          content: '\\e56b';
        }
      `]}render(){return r.d``}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"color"==e?this.style.color=this.color:"icon"==e&&n.indexOf("url")>-1&&this.handleIcon(n)}handleIcon(e){this.style.backgroundImage=e}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"color",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-icon")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(),this.type="text",this.step=1,this.addEventListener("click",()=>{this.active=!0,this.shadowRoot.querySelector("input").focus()})}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: 8px;
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-in-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-in-out 0.1s,
            0.1s margin ease-in-out 0.1s;
          font-size: 0px;
          width: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: 8px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select */
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: 0px 16px;
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 -8px;
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return r.d`
      ${this.icon?r.d` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?r.d` <label class="label">${this.label}</label> `:""}
        <input
          id="input"
          .type="${this.type}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          pattern="${this.pattern}"
          .value="${void 0!==this.value?this.value:""}"
          @input="${e=>e.target.value?"number"!==this.type?this.value=e.target.value:"":this.removeAttribute("value")}"
          @focus="${()=>this.active=!0}"
          @blur="${e=>this.handleBlur(e)}"
        />
      </div>
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":r.d`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${()=>this.handleClear()}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?r.d`
            <kor-icon
              class="status-icon"
              icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${"number"!==this.type||this.readonly?"":r.d`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${()=>this.handleIncrement("left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${()=>this.handleIncrement("right")}"
            ></kor-icon>
          `}
      <!-- functions slot -->
      <slot name="functions"></slot>
      <!-- select -->
      ${"select"===this.type?r.d`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?r.d`
                  <kor-card
                    @wheel="${e=>e.stopPropagation()}"
                    class="select-menu"
                    .style="top: ${this.getMenuStyles().top}; left: ${this.getMenuStyles().left}; width: ${this.getMenuStyles().width};"
                  >
                    <slot @slotchange="${e=>this.handleItems(e)}"></slot>
                  </kor-card>
                `:""}
          `:""}
    `}handleClear(){this.value=void 0,this.removeAttribute("value")}handleBlur(e){"number"===this.type&&this.validateMinMax(e.target.value),"select"!==this.type&&(this.active=!1)}handleIncrement(e){"left"===e?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)-this.step):"right"===e&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)+this.step)}handleItems(e){const t=e.target.assignedNodes();t.forEach(e=>{"KOR-MENU-ITEM"===e.tagName&&e.addEventListener("active-changed",n=>{n.target.active&&(t.forEach(e=>{e.active=!1}),n.target.active=!0,this.value=e.label,this.active=!1)})})}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"active"==e&&this.active&&"select"==this.type&&this.handleMenu()}handleMenu(){const e=this,t=function(n){("click"===n.type&&n.target!==e||"wheel"===n.type)&&(e.active=!1,document.removeEventListener("click",t),document.removeEventListener("wheel",t))};document.addEventListener("click",t),document.addEventListener("wheel",t)}validateMinMax(e){e&&(this.value=this.min&&e<this.min?this.min:e>this.max?this.max:e)}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.clientHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.clientWidth+"px"}}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"value",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"type",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"status",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),i([Object(r.e)({type:Boolean,reflect:!0,attribute:"no-clear"})],s.prototype,"noClear",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"pattern",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"min",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"max",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"step",void 0),s=i([Object(r.c)("kor-input")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[o.a,r.b`
        :host {
          padding: 8px 0;
          border-radius: 4px;
          display: flex;
          cursor: pointer;
          transition: var(--transition-1);
          overflow: visible;
        }
        kor-icon {
          margin-right: 8px;
        }
        .label {
          flex: 1;
        }
        /* label */
        kor-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        slot[name='functions']::slotted(*) {
          margin-left: 8px;
        }
        :host([active]) {
          padding: 8px;
          margin-left: -8px;
          margin-right: -8px;
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
          pointer-events: none;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            padding: 8px;
            margin-left: -8px;
            margin-right: -8px;
            background: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return r.d`
      ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?r.d` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-menu-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host(:not([visible])) kor-card {
          margin-bottom: -40px;
        }
        kor-card {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-in-out, 0s top, 0s left;
        }
      `]}render(){return r.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":r.d`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"height",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"width",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-modal")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(1);let i=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return r.d`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}};i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(r.c)("kor-nav-bar")],i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[o.a,r.b`
        :host {
          position: fixed;
          display: flex;
          flex-direction: column;
          max-height: 100%;
          box-sizing: border-box;
          padding: 16px;
          margin: 0;
          width: 320px;
          z-index: 6;
          pointer-events: none;
        }
        ::slotted(*) {
          pointer-events: all;
        }
        :host([position^='top']) {
          top: 0px;
        }
        :host([position^='bottom']) {
          flex-flow: column-reverse;
          bottom: 0px;
        }
        :host([position$='left']) {
          left: 0px;
        }
        :host([position$='right']) {
          right: 0px;
        }
        :host([position^='top']) ::slotted(kor-notification-item[visible]) {
          margin-bottom: 12px;
        }
        :host([position^='bottom']) ::slotted(kor-notification-item[visible]) {
          margin-top: 12px;
        }
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"position",void 0),s=i([Object(r.c)("kor-notifications")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host {
          transition: var(--transition-1);
          opacity: 1;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
          max-height: 0px;
          overflow: hidden;
          margin-top: 0;
          margin-bottom: 0;
        }
        kor-card {
          background: rgb(var(--base-4));
        }
        :host(:not([visible]):host-context([position$='right'])) {
          margin-left: 8px;
          margin-right: -8px;
        }
        :host(:not([visible]):host-context([position$='left'])) {
          margin-left: -8px;
          margin-right: 8px;
        }
      `]}render(){return r.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":r.d`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-notification-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="row",this.flat=!1}static get styles(){return[o.a,r.b`
        :host {
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background-color: rgb(var(--base-1));
        }
        :host([flat]) {
          background-color: rgb(var(--base-3));
        }
        .center-wrapper,
        slot {
          display: flex;
        }
        .center-wrapper,
        slot:not([name]) {
          flex: 1;
          overflow: hidden;
        }
        slot:not([name]) {
          padding: 16px;
        }
        slot[name='top'],
        slot[name='bottom'],
        :host([flex-direction='column']) slot:not([name]) {
          flex-direction: column;
        }
      `]}render(){return r.d`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"theme",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),s=i([Object(r.c)("kor-page")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host {
          background-color: rgb(var(--base-2));
          display: flex;
          box-shadow: var(--shadow-1);
          transition: 0.1s width ease-in-out;
        }
        :host([size='l']) {
          width: 320px;
        }
        :host([size='m']) {
          width: 120px;
        }
        :host([size='s']) {
          width: 80px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
        }
      `]}render(){return r.d`
      <kor-card
        label="${this.label?this.label:""}"
        icon="${this.icon?this.icon:""}"
        flex-direction="${this.flexDirection}"
      >
        <slot></slot>
        <slot
          name="header"
          slot="${this.emptyHeader?"":"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?"":"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"":"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-pane")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host {
          background-color: rgb(var(--base-4));
          border-radius: 4px;
          display: flex;
          box-shadow: var(--shadow-1);
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 4;
          width: 240px;
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host([position^='bottom']:not([visible])) {
          margin-top: -8px;
        }
        :host([position^='top']:not([visible])) {
          margin-top: 8px;
        }
        :host([position^='right']:not([visible])) {
          margin-left: -8px;
        }
        :host([position^='left']:not([visible])) {
          margin-left: 8px;
        }
        kor-card {
          background-color: transparent;
          box-shadow: none;
        }
      `]}render(){return r.d`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        @wheel="${e=>e.stopPropagation()}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?void 0:"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"target"===e&&this.target?this.targetObserver():"visible"===e&&this.visible&&this.visibleObserver()}targetObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&e.addEventListener("click",()=>this.handlePosition(e))}visibleObserver(){const e="string"==typeof this.target?document.querySelector(this.target):this.target;e&&this.handlePosition(e),!this.sticky&&this.target&&this.addDocListener(e)}handlePosition(e){if(!e)return;let t=this,n=e.getBoundingClientRect();t.visible=!0,t.style.top=t.position.startsWith("bottom")?n.top+n.height+8+"px":t.position.startsWith("top")?n.top-t.clientHeight-8+"px":n.top+n.height/2-t.clientHeight/2+"px",t.style.left=t.position.startsWith("right")?n.left+n.width+8+"px":t.position.startsWith("left")?n.left-t.clientWidth-8+"px":n.left+n.width/2-t.clientWidth/2+"px"}addDocListener(e){let t=this,n=function(r){(r.target!==e&&"click"===r.type||"wheel"===r.type)&&(t.visible=!1,document.removeEventListener("click",n),document.removeEventListener("wheel",n))};document.addEventListener("click",n),document.addEventListener("wheel",n)}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"target",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-popover")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="m",this.radial=!1,this.showProgress=!1}static get styles(){return[o.a,r.b`
        :host {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header,
        .footer {
          display: flex;
          align-items: center;
        }
        .label,
        .info {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          margin-bottom: 8px;
        }
        .footer {
          margin-top: 8px;
        }
        /* radial */
        :host([radial]) {
          align-items: center;
          justify-content: center;
        }
        .radial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .radial-wrapper kor-text {
          position: absolute;
          width: 100%;
          text-align: center;
        }
        .radial {
          transform: rotate(-90deg);
        }
        circle {
          fill: transparent;
          stroke-width: 8px;
        }
        /* status */
        .status-icon {
          margin-right: 8px;
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return r.d`
      <!-- header -->
      ${this.label||this.showProgress?r.d`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?r.d` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?r.d`
            <div class="radial-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="radial"
                width="${this.getSize()}"
                viewBox="0 0 ${this.getSize()} ${this.getSize()}"
              >
                <circle
                  stroke="rgba(var(--neutral-1), .1)"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
                <circle
                  stroke="${this.color?this.color:"rgb(var(--accent-1))"}"
                  stroke-dasharray="${2*Math.PI*(this.getSize()/2-4)}"
                  stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-this.value/100)}"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
              </svg>
              ${this.showProgress?r.d` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:r.d`
            <!-- linear progress bar -->
            <svg width="100%" height="8">
              <defs>
                <clipPath id="clip-path">
                  <rect width="100%" height="8px" rx="4px" />
                </clipPath>
              </defs>
              <rect fill="rgba(var(--neutral-1), .1)" width="100%" rx="4px" />
              <rect
                fill="${this.color?this.color:"rgb(var(--accent-1))"}"
                width="${this.value}%"
                clip-path="url(#clip-path)"
              />
            </svg>
          `}
      ${this.info||this.status?r.d`
            <div class="footer">
              <!-- status -->
              ${this.status?r.d`
                    <kor-icon
                      class="status-icon"
                      icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?r.d`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getSize(){let e;switch(this.size){case"s":e=48;break;case"m":e=64;break;case"l":e=80}return e}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"info",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"status",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"color",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"value",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"radial",void 0),i([Object(r.e)({type:Boolean,reflect:!0,attribute:"show-progress"})],s.prototype,"showProgress",void 0),s=i([Object(r.c)("kor-progress-bar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* box */
        .circle {
          transition: var(--transition-1);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 16px;
          height: 16px;
          margin: 4px;
          border-radius: 50%;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
        }
        :host([active]) .circle {
          border-color: transparent;
          border: 5px solid rgb(var(--accent-1));
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .circle {
            border-color: rgba(var(--neutral-1), 0.3);
          }
        }
      `]}render(){return r.d`
      <input
        type="radio"
        ?checked="${this.active}"
        value="${this.label}"
        name="${this.label}"
      />
      <div class="circle"></div>
      ${this.label?r.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-radio-button")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1}static get styles(){return[o.a,r.b`
        .track {
          width: 100%;
          height: 2px;
          margin: 16px 0;
          background-color: rgba(var(--neutral-1), 0.2);
          position: relative;
        }
        .thumb {
          padding: 10px;
          position: absolute;
          top: -15px;
          margin-left: -16px;
          cursor: pointer;
        }
        .thumb > div {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: rgb(var(--accent-1));
          transition: 0.1s all ease-in-out;
        }
        .thumb:hover > div {
          background-color: rgb(var(--accent-1b));
        }
        /* input */
        input {
          background: none;
          border: none;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          background-color: rgba(var(--neutral-1), 0.05);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 4px;
          width: 40px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        .label {
          display: flex;
        }
        .label kor-text {
          flex: 1;
        }
        .label > * + * {
          margin-left: 8px;
        }
      `]}render(){return r.d`
      ${this.label?r.d`
            <div class="label">
              <kor-text>${this.label}</kor-text>
              ${this.input?r.d`
                    <input
                      type="number"
                      .value="${this.value}"
                      @blur="${e=>this.handleInput(parseFloat(e.target.value))}"
                      @keypress="${e=>"Enter"===e.key?this.handleInput(parseFloat(e.target.value)):""}"
                    />
                  `:""}
            </div>
          `:""}
      <div class="track">
        <div
          class="thumb"
          @mousedown="${e=>this.handleThumbDrag(e)}"
          @touchstart="${e=>this.handleThumbDrag(e)}"
        >
          <div></div>
        </div>
      </div>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"value"!==e&&"min"!==e&&"max"!==e||this.handleThumbPosition()}firstUpdated(){this.handleThumbPosition()}handleInput(e){e>=this.min&&e<=this.max?this.value=e:e<this.min?this.value=this.min:e>this.max&&(this.value=this.max)}handleThumbPosition(){const e=this.shadowRoot.querySelector(".thumb"),t=(this.value-this.min)/(this.max-this.min)*100;e&&t>=0&&t<=100&&(e.style.left=t+"%")}handleThumbDrag(e){const t=this.shadowRoot.querySelector(".track").clientWidth/(this.max-this.min)*this.step;let n="mousedown"===e.type?e.clientX:e.touches[0].clientX;const r=e=>{e.preventDefault();const r="mousemove"===e.type?e.clientX:e.touches[0].clientX,o=r-n;if(o>t||-1*o>t){const e=Math.floor(o<0?-1*o:o),i=Math.round(e/t),s=o>0?this.value+this.step*i:this.value-this.step*i;s<=this.max&&s>=this.min&&(this.value=s,n=r)}},o=()=>{window.removeEventListener("mousemove",r),window.removeEventListener("touchmove",r),window.removeEventListener("mouseup",o),window.removeEventListener("touchend",o)};window.addEventListener("mousemove",r),window.addEventListener("touchmove",r),window.addEventListener("mouseup",o),window.addEventListener("touchend",o)}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"value",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"min",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"max",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"step",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"input",void 0),s=i([Object(r.c)("kor-slider")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,r.b`
        :host {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        svg {
          animation: 1s linear infinite svg-animation;
        }
        @keyframes svg-animation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        circle {
          fill: transparent;
          stroke: rgb(var(--accent-1));
          stroke-linecap: round;
          stroke-width: 4px;
        }
        /* label */
        kor-text {
          margin-top: 8px;
          text-align: center;
          max-width: 240px;
        }
      `]}render(){return r.d`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}"
      >
        <circle
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize()/2-4}"
          cx="${this.getSize()/2}"
          cy="${this.getSize()/2}"
        />
      </svg>
      ${this.label?r.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}getSize(){let e;switch(this.size){case"s":e=24;break;case"m":e=32;break;case"l":e=40}return e}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),s=i([Object(r.c)("kor-spinner")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
          overflow: auto;
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return r.d`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}handleItems(){let e,t;e=Array.prototype.slice.call(this.children),t=this.children.length,e.forEach(e=>{e.first=1==e.index,e.last=e.index==t})}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(r.c)("kor-stepper")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,r.b`
        :host {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
        }
        .circle {
          height: 40px;
          width: 40px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          border-radius: 50%;
          background-color: rgba(var(--neutral-1), 0.1);
          transition: var(--transition-1);
        }
        .text {
          display: flex;
          flex-direction: column;
        }
        .label {
          font-weight: bold;
        }
        .info {
          color: var(--text-2);
        }
        .label,
        .info {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        .number,
        kor-icon {
          color: var(--text-2);
        }
        /* line */
        .line {
          background-color: rgba(var(--neutral-1), 0.1);
          position: absolute;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          justify-content: center;
          flex-direction: column;
          padding: 0 16px;
        }
        :host([orientation='horizontal']) .label,
        :host([orientation='horizontal']) .info {
          text-align: center;
        }
        :host([orientation='horizontal']) .circle + .text {
          margin-top: 4px;
        }
        :host([orientation='horizontal']) .line {
          height: 2px;
          width: calc(50% - 28px);
          top: 19px;
        }
        :host([orientation='horizontal']) .line.before {
          left: 0px;
        }
        :host([orientation='horizontal']) .line.after {
          right: 0px;
        }
        /* vertical */
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          height: max-content;
          padding: 16px 0;
        }
        :host([orientation='vertical']) .label,
        :host([orientation='vertical']) .info {
          text-align: left;
        }
        :host([orientation='vertical']) .circle + .text {
          margin-left: 8px;
        }
        :host([orientation='vertical']) .line {
          width: 2px;
          height: calc(50% - 28px);
          left: 19px;
        }
        :host([orientation='vertical']) .line.before {
          top: 0px;
        }
        :host([orientation='vertical']) .line.after {
          bottom: 0px;
        }
        /* active */
        :host([active]) .circle {
          background-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: var(--text-1);
        }
        :host([active]) .number,
        :host([active]) kor-icon {
          color: rgba(255, 255, 255, 0.9);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
        }
        :host([disabled]) .circle,
        :host([disabled]) .text {
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .label,
          :host(:hover:not([active])) .number,
          :host(:hover:not([active])) kor-icon {
            color: var(--text-1);
          }
          :host(:not([active]):not(:active):hover) .circle {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([active]:not(:active):hover) .circle {
            background-color: rgb(var(--accent-1b));
          }
        }
      `]}render(){return r.d`
      <!-- circle -->
      <div class="circle">
        ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:r.d`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?r.d` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?r.d` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":r.d` <div class="line before"></div> `}
      ${this.last?"":r.d` <div class="line after"></div> `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0})}getIndex(){let e;e=Array.prototype.slice.call(this.parentElement.children),this.index=e.indexOf(this)+1}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"info",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"index",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"first",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"last",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(r.c)("kor-stepper-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(1);let i=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: max-content;
          height: max-content;
          border-radius: 4px;
        }
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(r.c)("kor-switch")],i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          width: max-content;
          min-width: 40px;
          max-width: 120px;
          padding: 4px 12px;
          border-radius: 4px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: var(--transition-1);
        }
        .label {
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: var(--text-2);
        }
        /* active */
        :host([active]) .label,
        :host([active]) kor-icon {
          color: var(--text-1);
        }
        :host([active]) {
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            background: rgba(var(--neutral-1), 0.05);
          }
          :host([active]:hover) {
            background: rgba(var(--neutral-1), 0.15);
          }
        }
      `]}render(){return r.d`
      ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?r.d` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-switch-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-color: transparent;
          border-style: solid;
          color: var(--text-2);
        }
        .label {
          line-height: 24px;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label,
        kor-icon {
          color: unset;
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          flex-direction: column;
          justify-content: center;
          width: max-content;
          min-width: 72px;
          max-width: 240px;
          height: 56px;
          padding: 0px 16px;
          border-width: 0px 0px 2px 0px;
        }
        :host([orientation='horizontal']) .label {
          text-align: center;
        }
        /* vertical */
        :host([orientation='vertical']) .label {
          text-align: left;
        }
        :host([orientation='vertical']) {
          justify-content: flex-start;
          flex-direction: row;
          width: 100%;
          min-width: unset;
          max-width: 100%;
          height: max-content;
          padding: 8px 8px 8px 14px;
          border-width: 0px 0px 0px 2px;
        }
        :host([orientation='vertical']) kor-icon + .label {
          margin-left: 8px;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) {
          color: var(--text-1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover) .label {
            color: var(--text-1);
          }
        }
      `]}render(){return r.d`
      ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?r.d` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(r.c)("kor-tab-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          flex-direction: column;
          max-height: 100%;
          margin: 0 !important;
        }
        slot {
          display: block;
        }
        slot:not([name]) {
          flex: 1;
          overflow: auto;
        }
      `]}render(){return r.d`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"columns",void 0),s=i([Object(r.c)("kor-table")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          width: 100%;
          height: max-content;
        }
        :host([slot='header']) {
          margin-top: -16px;
        }
        :host(:not([orientation='vertical'])) {
          border-bottom: 1px solid rgba(var(--neutral-1), 0.1);
        }
        /* vertical */
        :host([orientation='vertical']) {
          flex-direction: column;
        }
      `]}render(){return r.d`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(r.c)("kor-tabs")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[o.a,r.b`
        :host {
          padding: 4px;
          display: flex;
          height: max-content;
          width: max-content;
          max-width: 160px;
          border-radius: 4px;
          border: 1px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        .label {
          margin: 0 4px;
        }
        /* button */
        :host([button]) {
          cursor: pointer;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return r.d`
      <!-- icon -->
      ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?r.d` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?r.d`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}handleRemove(){this.dispatchEvent(new Event("remove"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"removable",void 0),s=i([Object(r.c)("kor-tag")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[o.a,r.b`
        :host {
          color: var(--text-1);
          transition: var(--transition-1);
        }
        :host([size='body-1']) {
          font: var(--body-1);
        }
        :host([size='body-2']) {
          font: var(--body-2);
        }
        :host([size='header-1']) {
          font: var(--header-1);
        }
        :host([size='header-2']) {
          font: var(--header-2);
        }
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"color"==e&&(this.style.color=this.color)}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"color",void 0),s=i([Object(r.c)("kor-text")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          cursor: pointer;
        }
        input {
          display: none;
        }
        /* toggle */
        .bg {
          width: 32px;
          height: 20px;
          margin: 2px;
          padding: 2px;
          border-radius: 12px;
          box-sizing: border-box;
          border: 2px solid rgba(var(--neutral-1), 0.25);
          transition: var(--transition-1);
        }
        :host([active]) .bg {
          border-color: transparent;
          background: rgb(var(--accent-1));
        }
        .dot {
          display: flex;
          transition: var(--transition-1);
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: rgba(var(--neutral-1), 0.6);
        }
        :host([active]) .dot {
          transform: translateX(12px);
          background: white;
        }
        /* label */
        kor-text {
          flex: 1;
          margin-left: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not(:active):not([active])) .bg {
            border-color: rgba(var(--neutral-1), 0.3);
          }
          :host(:hover:not(:active):not([active])) .dot {
            background: rgba(var(--neutral-1), 0.9);
          }
        }
      `]}render(){return r.d`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        value="${this.label}"
        name="${this.label}"
      />
      <div class="bg">
        <div class="dot"></div>
      </div>
      ${this.label?r.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-toggle")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="m",this.disabled=!1}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: max-content;
          padding: 4px;
          box-sizing: border-box;
          transition: var(--transition-1);
          cursor: pointer;
          border-radius: 4px;
        }
        .label {
          display: -webkit-box;
          width: 100%;
          line-height: 12px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        /* size */
        :host([size='m']) {
          height: 56px;
          width: 56px;
        }
        :host([size='s']) {
          height: 32px;
          width: 32px;
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not(:active):not([active]):hover) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return r.d`
      ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":r.d` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-tool")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
        :host {
          position: fixed;
          z-index: 4;
        }
      `]}render(){return r.d`
      <kor-popover
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
        .target="${this.target}"
        .position="${this.position}"
        ?visible="${this.visible}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?void 0:"header"}"
          @slotchange="${e=>this.emptyHeader=0===e.target.assignedNodes().length}"
        ></slot>
        <slot
          name="functions"
          slot="${this.emptyFunctions?void 0:"functions"}"
          @slotchange="${e=>this.emptyFunctions=0===e.target.assignedNodes().length}"
        ></slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?void 0:"footer"}"
          @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
        ></slot>
      </kor-popover>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"target"===e&&this.target&&this.targetObserver()}targetObserver(){let e;const t="string"==typeof this.target?document.querySelector(this.target):this.target;t&&(t.addEventListener("mouseover",()=>{e=setTimeout(()=>this.visible=!0,500)}),t.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(e)}))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"target",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-tooltip")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: grid;
          border-bottom: 1px solid rgba(var(--neutral-1), 0.15);
          transition: var(--transition-1);
        }
        /* header */
        :host([slot='header']) {
          border-color: rgba(var(--neutral-1), 0.4);
        }
        /* active */
        :host([active]) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not([slot='header'])) {
            background-color: rgba(var(--neutral-1), 0.05);
          }
          :host(:hover:not([active])):host-context(kor-table[readonly]) {
            background-color: transparent;
          }
        }
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.handleColumns()}handleActive(){let e,t;e=this.closest("kor-table"),e.readonly||"header"==this.slot||(t=this.parentElement.childNodes,t.forEach(e=>{e.active=!1}),this.active=!0)}handleColumns(){const e=this.closest("kor-table");this.style.gridTemplateColumns=e.columns,e.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=e.columns})}};i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),s=i([Object(r.c)("kor-table-row")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          align-items: center;
          padding: 12px 8px;
          font: var(--body-1);
          overflow: hidden;
          cursor: default;
        }
        kor-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* condensed */
        :host:host-context(kor-table[condensed]) {
          padding: 8px 8px;
        }
        /* head */
        :host([head]) kor-text {
          font-weight: bold;
        }
        /* align */
        :host([alignment='center']) {
          justify-content: center;
        }
        :host([alignment='right']) {
          justify-content: flex-end;
        }
        /* sortable */
        :host([sortable]) {
          cursor: pointer;
        }
        :host([sort-direction='desc']) .sort {
          transform: rotate(180deg);
        }
        .sort {
          margin: 4px 0px 4px 4px;
          color: var(--text-2);
        }
      `]}render(){return r.d`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?r.d`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"grid-cols"==e&&(this.style.gridColumn="span "+this.gridCols),"sortable"==e&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){this.sorted?this.sortDirection="asc"==this.sortDirection?"desc":"asc":(this.parentElement.childNodes.forEach(e=>{e.sorted=!1}),this.sorted=!0,this.sortDirection="asc")}};i([Object(r.e)({type:Number,reflect:!0,attribute:"grid-cols"})],s.prototype,"gridCols",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"alignment",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"head",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sorted",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sortable",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"sort-direction"})],s.prototype,"sortDirection",void 0),s=i([Object(r.c)("kor-table-cell")],s)},function(e,t,n){"use strict";n.r(t);var r=n(2);n.d(t,"korAccordion",(function(){return r.a}));var o=n(3);n.d(t,"korAppBar",(function(){return o.a}));var i=n(4);n.d(t,"korAvatar",(function(){return i.a}));var s=n(5);n.d(t,"korBadge",(function(){return s.a}));var a=n(6);n.d(t,"korBreadcrumbs",(function(){return a.a}));var c=n(7);n.d(t,"korBreadcrumbItem",(function(){return c.a}));var l=n(8);n.d(t,"korButton",(function(){return l.a}));var u=n(9);n.d(t,"korCard",(function(){return u.a}));var d=n(10);n.d(t,"korCheckbox",(function(){return d.a}));var h=n(11);n.d(t,"korDivider",(function(){return h.a}));var f=n(12);n.d(t,"korDrawer",(function(){return f.a}));var p=n(13);n.d(t,"korEmptyState",(function(){return p.a}));var g=n(14);n.d(t,"korGrid",(function(){return g.a}));var m=n(15);n.d(t,"korIcon",(function(){return m.a}));var b=n(16);n.d(t,"korInput",(function(){return b.a}));var y=n(17);n.d(t,"korMenuItem",(function(){return y.a}));var v=n(18);n.d(t,"korModal",(function(){return v.a}));var _=n(19);n.d(t,"korNavbar",(function(){return _.a}));var w=n(20);n.d(t,"korNotifications",(function(){return w.a}));var x=n(21);n.d(t,"korNotificationItem",(function(){return x.a}));var C=n(22);n.d(t,"korPage",(function(){return C.a}));var E=n(23);n.d(t,"korPane",(function(){return E.a}));var S=n(24);n.d(t,"korPopover",(function(){return S.a}));var k=n(25);n.d(t,"korProgressBar",(function(){return k.a}));var O=n(26);n.d(t,"korRadioButton",(function(){return O.a}));var D=n(27);n.d(t,"korSlider",(function(){return D.a}));var j=n(28);n.d(t,"korSpinner",(function(){return j.a}));var I=n(29);n.d(t,"korStepper",(function(){return I.a}));var A=n(30);n.d(t,"korStepperItem",(function(){return A.a}));var P=n(31);n.d(t,"korSwitch",(function(){return P.a}));var T=n(32);n.d(t,"korSwitchItem",(function(){return T.a}));var N=n(33);n.d(t,"korTabItem",(function(){return N.a}));var R=n(34);n.d(t,"korTable",(function(){return R.a}));var F=n(41);n.d(t,"korTableRow",(function(){return F.a}));var M=n(42);n.d(t,"korTableCell",(function(){return M.a}));var L=n(35);n.d(t,"korTabs",(function(){return L.a}));var $=n(36);n.d(t,"korTag",(function(){return $.a}));var V=n(37);n.d(t,"korText",(function(){return V.a}));var B=n(38);n.d(t,"korToggle",(function(){return B.a}));var H=n(39);n.d(t,"korTool",(function(){return H.a}));var U=n(40);n.d(t,"korTooltip",(function(){return U.a}))}])},"25CY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())()},"2OXO":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e,t){return n=>n.lift(new i(e,t,n))}class i{constructor(e,t,n){this.predicate=e,this.thisArg=t,this.source=n}call(e,t){return t.subscribe(new s(e,this.predicate,this.thisArg,this.source))}}class s extends r.a{constructor(e,t,n,r){super(e),this.predicate=t,this.thisArg=n,this.source=r,this.index=0,this.thisArg=n||this}notifyComplete(e){this.destination.next(e),this.destination.complete()}_next(e){let t=!1;try{t=this.predicate.call(this.thisArg,e,this.index++,this.source)}catch(n){return void this.destination.error(n)}t||this.notifyComplete(!1)}_complete(){this.notifyComplete(!0)}}},"2kYt":function(e,t,n){"use strict";n.r(t),n.d(t,"APP_BASE_HREF",(function(){return _})),n.d(t,"AsyncPipe",(function(){return et})),n.d(t,"CommonModule",(function(){return vt})),n.d(t,"CurrencyPipe",(function(){return pt})),n.d(t,"DOCUMENT",(function(){return c})),n.d(t,"DatePipe",(function(){return it})),n.d(t,"DecimalPipe",(function(){return ht})),n.d(t,"FormStyle",(function(){return j})),n.d(t,"FormatWidth",(function(){return A})),n.d(t,"HashLocationStrategy",(function(){return x})),n.d(t,"I18nPluralPipe",(function(){return at})),n.d(t,"I18nSelectPipe",(function(){return ct})),n.d(t,"JsonPipe",(function(){return lt})),n.d(t,"KeyValuePipe",(function(){return ut})),n.d(t,"LOCATION_INITIALIZED",(function(){return d})),n.d(t,"Location",(function(){return C})),n.d(t,"LocationStrategy",(function(){return y})),n.d(t,"LowerCasePipe",(function(){return tt})),n.d(t,"NgClass",(function(){return Pe})),n.d(t,"NgComponentOutlet",(function(){return Te})),n.d(t,"NgForOf",(function(){return Re})),n.d(t,"NgForOfContext",(function(){return Ne})),n.d(t,"NgIf",(function(){return Me})),n.d(t,"NgIfContext",(function(){return Le})),n.d(t,"NgLocaleLocalization",(function(){return je})),n.d(t,"NgLocalization",(function(){return Oe})),n.d(t,"NgPlural",(function(){return ze})),n.d(t,"NgPluralCase",(function(){return qe})),n.d(t,"NgStyle",(function(){return We})),n.d(t,"NgSwitch",(function(){return Be})),n.d(t,"NgSwitchCase",(function(){return He})),n.d(t,"NgSwitchDefault",(function(){return Ue})),n.d(t,"NgTemplateOutlet",(function(){return Qe})),n.d(t,"NumberFormatStyle",(function(){return O})),n.d(t,"NumberSymbol",(function(){return P})),n.d(t,"PathLocationStrategy",(function(){return w})),n.d(t,"PercentPipe",(function(){return ft})),n.d(t,"PlatformLocation",(function(){return l})),n.d(t,"Plural",(function(){return D})),n.d(t,"SlicePipe",(function(){return bt})),n.d(t,"TitleCasePipe",(function(){return rt})),n.d(t,"TranslationWidth",(function(){return I})),n.d(t,"UpperCasePipe",(function(){return ot})),n.d(t,"VERSION",(function(){return Dt})),n.d(t,"ViewportScroller",(function(){return jt})),n.d(t,"WeekDay",(function(){return T})),n.d(t,"formatCurrency",(function(){return xe})),n.d(t,"formatDate",(function(){return ue})),n.d(t,"formatNumber",(function(){return Ee})),n.d(t,"formatPercent",(function(){return Ce})),n.d(t,"getCurrencySymbol",(function(){return ne})),n.d(t,"getLocaleCurrencyCode",(function(){return G})),n.d(t,"getLocaleCurrencyName",(function(){return Q})),n.d(t,"getLocaleCurrencySymbol",(function(){return W})),n.d(t,"getLocaleDateFormat",(function(){return B})),n.d(t,"getLocaleDateTimeFormat",(function(){return U})),n.d(t,"getLocaleDayNames",(function(){return F})),n.d(t,"getLocaleDayPeriods",(function(){return R})),n.d(t,"getLocaleDirection",(function(){return X})),n.d(t,"getLocaleEraNames",(function(){return L})),n.d(t,"getLocaleExtraDayPeriodRules",(function(){return Y})),n.d(t,"getLocaleExtraDayPeriods",(function(){return J})),n.d(t,"getLocaleFirstDayOfWeek",(function(){return $})),n.d(t,"getLocaleId",(function(){return N})),n.d(t,"getLocaleMonthNames",(function(){return M})),n.d(t,"getLocaleNumberFormat",(function(){return q})),n.d(t,"getLocaleNumberSymbol",(function(){return z})),n.d(t,"getLocalePluralCase",(function(){return K})),n.d(t,"getLocaleTimeFormat",(function(){return H})),n.d(t,"getLocaleWeekEndRange",(function(){return V})),n.d(t,"getNumberOfCurrencyDigits",(function(){return re})),n.d(t,"isPlatformBrowser",(function(){return Et})),n.d(t,"isPlatformServer",(function(){return St})),n.d(t,"isPlatformWorkerApp",(function(){return kt})),n.d(t,"isPlatformWorkerUi",(function(){return Ot})),n.d(t,"registerLocaleData",(function(){return Ie})),n.d(t,"\u0275BrowserPlatformLocation",(function(){return h})),n.d(t,"\u0275DomAdapter",(function(){return a})),n.d(t,"\u0275NullViewportScroller",(function(){return At})),n.d(t,"\u0275PLATFORM_BROWSER_ID",(function(){return _t})),n.d(t,"\u0275PLATFORM_SERVER_ID",(function(){return wt})),n.d(t,"\u0275PLATFORM_WORKER_APP_ID",(function(){return xt})),n.d(t,"\u0275PLATFORM_WORKER_UI_ID",(function(){return Ct})),n.d(t,"\u0275angular_packages_common_common_a",(function(){return u})),n.d(t,"\u0275angular_packages_common_common_b",(function(){return p})),n.d(t,"\u0275angular_packages_common_common_c",(function(){return E})),n.d(t,"\u0275angular_packages_common_common_d",(function(){return v})),n.d(t,"\u0275angular_packages_common_common_e",(function(){return Ge})),n.d(t,"\u0275angular_packages_common_common_f",(function(){return yt})),n.d(t,"\u0275getDOM",(function(){return i})),n.d(t,"\u0275parseCookieValue",(function(){return Ae})),n.d(t,"\u0275setRootDomAdapter",(function(){return s}));var r=n("EM62");let o=null;function i(){return o}function s(e){o||(o=e)}class a{}const c=new r.InjectionToken("DocumentToken");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:u,token:e,providedIn:"platform"}),e})();function u(){return Object(r["\u0275\u0275inject"])(h)}const d=new r.InjectionToken("Location Initialized");let h=(()=>{class e extends l{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=i().getLocation(),this._history=i().getHistory()}getBaseHrefFromDOM(){return i().getBaseHref(this._doc)}onPopState(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)}onHashChange(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,t,n){f()?this._history.pushState(e,t,n):this.location.hash=n}replaceState(e,t,n){f()?this._history.replaceState(e,t,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](c))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:p,token:e,providedIn:"platform"}),e})();function f(){return!!window.history.pushState}function p(){return new h(Object(r["\u0275\u0275inject"])(c))}function g(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function m(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function b(e){return e&&"?"!==e[0]?"?"+e:e}let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:v,token:e,providedIn:"root"}),e})();function v(e){const t=Object(r["\u0275\u0275inject"])(c).location;return new w(Object(r["\u0275\u0275inject"])(l),t&&t.origin||"")}const _=new r.InjectionToken("appBaseHref");let w=(()=>{class e extends y{constructor(e,t){if(super(),this._platformLocation=e,null==t&&(t=this._platformLocation.getBaseHrefFromDOM()),null==t)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=t}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return g(this._baseHref,e)}path(e=!1){const t=this._platformLocation.pathname+b(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${t}${n}`:t}pushState(e,t,n,r){const o=this.prepareExternalUrl(n+b(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){const o=this.prepareExternalUrl(n+b(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](l),r["\u0275\u0275inject"](_,8))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e extends y{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",null!=t&&(this._baseHref=t)}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t}prepareExternalUrl(e){const t=g(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,n,r){let o=this.prepareExternalUrl(n+b(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){let o=this.prepareExternalUrl(n+b(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](l),r["\u0275\u0275inject"](_,8))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),C=(()=>{class e{constructor(e,t){this._subject=new r.EventEmitter,this._urlChangeListeners=[],this._platformStrategy=e;const n=this._platformStrategy.getBaseHref();this._platformLocation=t,this._baseHref=m(S(n)),this._platformStrategy.onPopState(e=>{this._subject.emit({url:this.path(!0),pop:!0,state:e.state,type:e.type})})}path(e=!1){return this.normalize(this._platformStrategy.path(e))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+b(t))}normalize(t){return e.stripTrailingSlash(function(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,S(t)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}go(e,t="",n=null){this._platformStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+b(t)),n)}replaceState(e,t="",n=null){this._platformStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+b(t)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(e){this._urlChangeListeners.push(e),this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)})}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(n=>n(e,t))}subscribe(e,t,n){return this._subject.subscribe({next:e,error:t,complete:n})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](y),r["\u0275\u0275inject"](l))},e.normalizeQueryParams=b,e.joinWithSlash=g,e.stripTrailingSlash=m,e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:E,token:e,providedIn:"root"}),e})();function E(){return new C(Object(r["\u0275\u0275inject"])(y),Object(r["\u0275\u0275inject"])(l))}function S(e){return e.replace(/\/index.html$/,"")}const k={ADP:[void 0,void 0,0],AFN:[void 0,void 0,0],ALL:[void 0,void 0,0],AMD:[void 0,void 0,2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09f3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,"\u0440.",2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xa5","\xa5"],COP:[void 0,"$",2],CRC:[void 0,"\u20a1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010d",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xa3"],ESP:[void 0,"\u20a7",0],EUR:["\u20ac"],FJD:[void 0,"$"],FKP:[void 0,"\xa3"],GBP:["\xa3"],GEL:[void 0,"\u20be"],GIP:[void 0,"\xa3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20aa"],INR:["\u20b9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xa5",void 0,0],KHR:[void 0,"\u17db"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20a9",0],KRW:["\u20a9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20b8"],LAK:[void 0,"\u20ad",0],LBP:[void 0,"L\xa3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20ae",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20a6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:[void 0,"\u20b1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20b2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20bd"],RUR:[void 0,"\u0440."],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xa3"],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xa3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xa3",0],THB:[void 0,"\u0e3f"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20ba"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20b4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20ab",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["CFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xa4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},O=function(){var e={Decimal:0,Percent:1,Currency:2,Scientific:3};return e[e.Decimal]="Decimal",e[e.Percent]="Percent",e[e.Currency]="Currency",e[e.Scientific]="Scientific",e}(),D=function(){var e={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};return e[e.Zero]="Zero",e[e.One]="One",e[e.Two]="Two",e[e.Few]="Few",e[e.Many]="Many",e[e.Other]="Other",e}(),j=function(){var e={Format:0,Standalone:1};return e[e.Format]="Format",e[e.Standalone]="Standalone",e}(),I=function(){var e={Narrow:0,Abbreviated:1,Wide:2,Short:3};return e[e.Narrow]="Narrow",e[e.Abbreviated]="Abbreviated",e[e.Wide]="Wide",e[e.Short]="Short",e}(),A=function(){var e={Short:0,Medium:1,Long:2,Full:3};return e[e.Short]="Short",e[e.Medium]="Medium",e[e.Long]="Long",e[e.Full]="Full",e}(),P=function(){var e={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};return e[e.Decimal]="Decimal",e[e.Group]="Group",e[e.List]="List",e[e.PercentSign]="PercentSign",e[e.PlusSign]="PlusSign",e[e.MinusSign]="MinusSign",e[e.Exponential]="Exponential",e[e.SuperscriptingExponent]="SuperscriptingExponent",e[e.PerMille]="PerMille",e[e.Infinity]="Infinity",e[e.NaN]="NaN",e[e.TimeSeparator]="TimeSeparator",e[e.CurrencyDecimal]="CurrencyDecimal",e[e.CurrencyGroup]="CurrencyGroup",e}(),T=function(){var e={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6};return e[e.Sunday]="Sunday",e[e.Monday]="Monday",e[e.Tuesday]="Tuesday",e[e.Wednesday]="Wednesday",e[e.Thursday]="Thursday",e[e.Friday]="Friday",e[e.Saturday]="Saturday",e}();function N(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].LocaleId]}function R(e,t,n){const o=Object(r["\u0275findLocaleData"])(e),i=ee([o[r["\u0275LocaleDataIndex"].DayPeriodsFormat],o[r["\u0275LocaleDataIndex"].DayPeriodsStandalone]],t);return ee(i,n)}function F(e,t,n){const o=Object(r["\u0275findLocaleData"])(e),i=ee([o[r["\u0275LocaleDataIndex"].DaysFormat],o[r["\u0275LocaleDataIndex"].DaysStandalone]],t);return ee(i,n)}function M(e,t,n){const o=Object(r["\u0275findLocaleData"])(e),i=ee([o[r["\u0275LocaleDataIndex"].MonthsFormat],o[r["\u0275LocaleDataIndex"].MonthsStandalone]],t);return ee(i,n)}function L(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].Eras],t)}function $(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].FirstDayOfWeek]}function V(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].WeekendRange]}function B(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].DateFormat],t)}function H(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].TimeFormat],t)}function U(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].DateTimeFormat],t)}function z(e,t){const n=Object(r["\u0275findLocaleData"])(e),o=n[r["\u0275LocaleDataIndex"].NumberSymbols][t];if(void 0===o){if(t===P.CurrencyDecimal)return n[r["\u0275LocaleDataIndex"].NumberSymbols][P.Decimal];if(t===P.CurrencyGroup)return n[r["\u0275LocaleDataIndex"].NumberSymbols][P.Group]}return o}function q(e,t){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].NumberFormats][t]}function W(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].CurrencySymbol]||null}function Q(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].CurrencyName]||null}function G(e){return Object(r["\u0275getLocaleCurrencyCode"])(e)}const K=r["\u0275getLocalePluralCase"];function Z(e){if(!e[r["\u0275LocaleDataIndex"].ExtraData])throw new Error(`Missing extra locale data for the locale "${e[r["\u0275LocaleDataIndex"].LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Y(e){const t=Object(r["\u0275findLocaleData"])(e);return Z(t),(t[r["\u0275LocaleDataIndex"].ExtraData][2]||[]).map(e=>"string"==typeof e?te(e):[te(e[0]),te(e[1])])}function J(e,t,n){const o=Object(r["\u0275findLocaleData"])(e);Z(o);const i=ee([o[r["\u0275LocaleDataIndex"].ExtraData][0],o[r["\u0275LocaleDataIndex"].ExtraData][1]],t)||[];return ee(i,n)||[]}function X(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].Directionality]}function ee(e,t){for(let n=t;n>-1;n--)if(void 0!==e[n])return e[n];throw new Error("Locale data API: locale data undefined")}function te(e){const[t,n]=e.split(":");return{hours:+t,minutes:+n}}function ne(e,t,n="en"){const o=function(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].Currencies]}(n)[e]||k[e]||[],i=o[1];return"narrow"===t&&"string"==typeof i?i:o[0]||e}function re(e){let t;const n=k[e];return n&&(t=n[2]),"number"==typeof t?t:2}const oe=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ie={},se=/((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,ae=function(){var e={Short:0,ShortGMT:1,Long:2,Extended:3};return e[e.Short]="Short",e[e.ShortGMT]="ShortGMT",e[e.Long]="Long",e[e.Extended]="Extended",e}(),ce=function(){var e={FullYear:0,Month:1,Date:2,Hours:3,Minutes:4,Seconds:5,FractionalSeconds:6,Day:7};return e[e.FullYear]="FullYear",e[e.Month]="Month",e[e.Date]="Date",e[e.Hours]="Hours",e[e.Minutes]="Minutes",e[e.Seconds]="Seconds",e[e.FractionalSeconds]="FractionalSeconds",e[e.Day]="Day",e}(),le=function(){var e={DayPeriods:0,Days:1,Months:2,Eras:3};return e[e.DayPeriods]="DayPeriods",e[e.Days]="Days",e[e.Months]="Months",e[e.Eras]="Eras",e}();function ue(e,t,n,r){let o=function(e){if(ve(e))return e;if("number"==typeof e&&!isNaN(e))return new Date(e);if("string"==typeof e){e=e.trim();const t=parseFloat(e);if(!isNaN(e-t))return new Date(t);if(/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)){const[t,n,r]=e.split("-").map(e=>+e);return new Date(t,n-1,r)}let n;if(n=e.match(oe))return function(e){const t=new Date(0);let n=0,r=0;const o=e[8]?t.setUTCFullYear:t.setFullYear,i=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=Number(e[9]+e[10]),r=Number(e[9]+e[11])),o.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));const s=Number(e[4]||0)-n,a=Number(e[5]||0)-r,c=Number(e[6]||0),l=Math.round(1e3*parseFloat("0."+(e[7]||0)));return i.call(t,s,a,c,l),t}(n)}const t=new Date(e);if(!ve(t))throw new Error(`Unable to convert "${e}" into a date`);return t}(e);t=function e(t,n){const r=N(t);if(ie[r]=ie[r]||{},ie[r][n])return ie[r][n];let o="";switch(n){case"shortDate":o=B(t,A.Short);break;case"mediumDate":o=B(t,A.Medium);break;case"longDate":o=B(t,A.Long);break;case"fullDate":o=B(t,A.Full);break;case"shortTime":o=H(t,A.Short);break;case"mediumTime":o=H(t,A.Medium);break;case"longTime":o=H(t,A.Long);break;case"fullTime":o=H(t,A.Full);break;case"short":const n=e(t,"shortTime"),r=e(t,"shortDate");o=de(U(t,A.Short),[n,r]);break;case"medium":const i=e(t,"mediumTime"),s=e(t,"mediumDate");o=de(U(t,A.Medium),[i,s]);break;case"long":const a=e(t,"longTime"),c=e(t,"longDate");o=de(U(t,A.Long),[a,c]);break;case"full":const l=e(t,"fullTime"),u=e(t,"fullDate");o=de(U(t,A.Full),[l,u])}return o&&(ie[r][n]=o),o}(n,t)||t;let i,s=[];for(;t;){if(i=se.exec(t),!i){s.push(t);break}{s=s.concat(i.slice(1));const e=s.pop();if(!e)break;t=e}}let a=o.getTimezoneOffset();r&&(a=ye(r,a),o=function(e,t,n){const r=e.getTimezoneOffset();return function(e,t){return(e=new Date(e.getTime())).setMinutes(e.getMinutes()+t),e}(e,-1*(ye(t,r)-r))}(o,r));let c="";return s.forEach(e=>{const t=function(e){if(be[e])return be[e];let t;switch(e){case"G":case"GG":case"GGG":t=pe(le.Eras,I.Abbreviated);break;case"GGGG":t=pe(le.Eras,I.Wide);break;case"GGGGG":t=pe(le.Eras,I.Narrow);break;case"y":t=fe(ce.FullYear,1,0,!1,!0);break;case"yy":t=fe(ce.FullYear,2,0,!0,!0);break;case"yyy":t=fe(ce.FullYear,3,0,!1,!0);break;case"yyyy":t=fe(ce.FullYear,4,0,!1,!0);break;case"M":case"L":t=fe(ce.Month,1,1);break;case"MM":case"LL":t=fe(ce.Month,2,1);break;case"MMM":t=pe(le.Months,I.Abbreviated);break;case"MMMM":t=pe(le.Months,I.Wide);break;case"MMMMM":t=pe(le.Months,I.Narrow);break;case"LLL":t=pe(le.Months,I.Abbreviated,j.Standalone);break;case"LLLL":t=pe(le.Months,I.Wide,j.Standalone);break;case"LLLLL":t=pe(le.Months,I.Narrow,j.Standalone);break;case"w":t=me(1);break;case"ww":t=me(2);break;case"W":t=me(1,!0);break;case"d":t=fe(ce.Date,1);break;case"dd":t=fe(ce.Date,2);break;case"E":case"EE":case"EEE":t=pe(le.Days,I.Abbreviated);break;case"EEEE":t=pe(le.Days,I.Wide);break;case"EEEEE":t=pe(le.Days,I.Narrow);break;case"EEEEEE":t=pe(le.Days,I.Short);break;case"a":case"aa":case"aaa":t=pe(le.DayPeriods,I.Abbreviated);break;case"aaaa":t=pe(le.DayPeriods,I.Wide);break;case"aaaaa":t=pe(le.DayPeriods,I.Narrow);break;case"b":case"bb":case"bbb":t=pe(le.DayPeriods,I.Abbreviated,j.Standalone,!0);break;case"bbbb":t=pe(le.DayPeriods,I.Wide,j.Standalone,!0);break;case"bbbbb":t=pe(le.DayPeriods,I.Narrow,j.Standalone,!0);break;case"B":case"BB":case"BBB":t=pe(le.DayPeriods,I.Abbreviated,j.Format,!0);break;case"BBBB":t=pe(le.DayPeriods,I.Wide,j.Format,!0);break;case"BBBBB":t=pe(le.DayPeriods,I.Narrow,j.Format,!0);break;case"h":t=fe(ce.Hours,1,-12);break;case"hh":t=fe(ce.Hours,2,-12);break;case"H":t=fe(ce.Hours,1);break;case"HH":t=fe(ce.Hours,2);break;case"m":t=fe(ce.Minutes,1);break;case"mm":t=fe(ce.Minutes,2);break;case"s":t=fe(ce.Seconds,1);break;case"ss":t=fe(ce.Seconds,2);break;case"S":t=fe(ce.FractionalSeconds,1);break;case"SS":t=fe(ce.FractionalSeconds,2);break;case"SSS":t=fe(ce.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=ge(ae.Short);break;case"ZZZZZ":t=ge(ae.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=ge(ae.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=ge(ae.Long);break;default:return null}return be[e]=t,t}(e);c+=t?t(o,n,a):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function de(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,(function(e,n){return null!=t&&n in t?t[n]:e}))),e}function he(e,t,n="-",r,o){let i="";(e<0||o&&e<=0)&&(o?e=1-e:(e=-e,i=n));let s=String(e);for(;s.length<t;)s="0"+s;return r&&(s=s.substr(s.length-t)),i+s}function fe(e,t,n=0,r=!1,o=!1){return function(i,s){let a=function(e,t){switch(e){case ce.FullYear:return t.getFullYear();case ce.Month:return t.getMonth();case ce.Date:return t.getDate();case ce.Hours:return t.getHours();case ce.Minutes:return t.getMinutes();case ce.Seconds:return t.getSeconds();case ce.FractionalSeconds:return t.getMilliseconds();case ce.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}(e,i);if((n>0||a>-n)&&(a+=n),e===ce.Hours)0===a&&-12===n&&(a=12);else if(e===ce.FractionalSeconds)return c=t,he(a,3).substr(0,c);var c;const l=z(s,P.MinusSign);return he(a,t,l,r,o)}}function pe(e,t,n=j.Format,r=!1){return function(o,i){return function(e,t,n,r,o,i){switch(n){case le.Months:return M(t,o,r)[e.getMonth()];case le.Days:return F(t,o,r)[e.getDay()];case le.DayPeriods:const s=e.getHours(),a=e.getMinutes();if(i){const e=Y(t),n=J(t,o,r);let i;if(e.forEach((e,t)=>{if(Array.isArray(e)){const{hours:r,minutes:o}=e[0],{hours:c,minutes:l}=e[1];s>=r&&a>=o&&(s<c||s===c&&a<l)&&(i=n[t])}else{const{hours:r,minutes:o}=e;r===s&&o===a&&(i=n[t])}}),i)return i}return R(t,o,r)[s<12?0:1];case le.Eras:return L(t,r)[e.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(o,i,e,t,n,r)}}function ge(e){return function(t,n,r){const o=-1*r,i=z(n,P.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case ae.Short:return(o>=0?"+":"")+he(s,2,i)+he(Math.abs(o%60),2,i);case ae.ShortGMT:return"GMT"+(o>=0?"+":"")+he(s,1,i);case ae.Long:return"GMT"+(o>=0?"+":"")+he(s,2,i)+":"+he(Math.abs(o%60),2,i);case ae.Extended:return 0===r?"Z":(o>=0?"+":"")+he(s,2,i)+":"+he(Math.abs(o%60),2,i);default:throw new Error(`Unknown zone width "${e}"`)}}}function me(e,t=!1){return function(n,r){let o;if(t){const e=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,t=n.getDate();o=1+Math.floor((t+e)/7)}else{const e=function(e){const t=new Date(e,0,1).getDay();return new Date(e,0,1+(t<=4?4:11)-t)}(n.getFullYear()),t=(i=n,new Date(i.getFullYear(),i.getMonth(),i.getDate()+(4-i.getDay()))).getTime()-e.getTime();o=1+Math.round(t/6048e5)}var i;return he(o,e,z(r,P.MinusSign))}}const be={};function ye(e,t){e=e.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}function ve(e){return e instanceof Date&&!isNaN(e.valueOf())}const _e=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function we(e,t,n,r,o,i,s=!1){let a="",c=!1;if(isFinite(e)){let l=function(e){let t,n,r,o,i,s=Math.abs(e)+"",a=0;for((n=s.indexOf("."))>-1&&(s=s.replace(".","")),(r=s.search(/e/i))>0?(n<0&&(n=r),n+=+s.slice(r+1),s=s.substring(0,r)):n<0&&(n=s.length),r=0;"0"===s.charAt(r);r++);if(r===(i=s.length))t=[0],n=1;else{for(i--;"0"===s.charAt(i);)i--;for(n-=r,t=[],o=0;r<=i;r++,o++)t[o]=Number(s.charAt(r))}return n>22&&(t=t.splice(0,21),a=n-1,n=1),{digits:t,exponent:a,integerLen:n}}(e);s&&(l=function(e){if(0===e.digits[0])return e;const t=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(0===t?e.digits.push(0,0):1===t&&e.digits.push(0),e.integerLen+=2),e}(l));let u=t.minInt,d=t.minFrac,h=t.maxFrac;if(i){const e=i.match(_e);if(null===e)throw new Error(`${i} is not a valid digit info`);const t=e[1],n=e[3],r=e[5];null!=t&&(u=ke(t)),null!=n&&(d=ke(n)),null!=r?h=ke(r):null!=n&&d>h&&(h=d)}!function(e,t,n){if(t>n)throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`);let r=e.digits,o=r.length-e.integerLen;const i=Math.min(Math.max(t,o),n);let s=i+e.integerLen,a=r[s];if(s>0){r.splice(Math.max(e.integerLen,s));for(let e=s;e<r.length;e++)r[e]=0}else{o=Math.max(0,o),e.integerLen=1,r.length=Math.max(1,s=i+1),r[0]=0;for(let e=1;e<s;e++)r[e]=0}if(a>=5)if(s-1<0){for(let t=0;t>s;t--)r.unshift(0),e.integerLen++;r.unshift(1),e.integerLen++}else r[s-1]++;for(;o<Math.max(0,i);o++)r.push(0);let c=0!==i;const l=t+e.integerLen,u=r.reduceRight((function(e,t,n,r){return r[n]=(t+=e)<10?t:t-10,c&&(0===r[n]&&n>=l?r.pop():c=!1),t>=10?1:0}),0);u&&(r.unshift(u),e.integerLen++)}(l,d,h);let f=l.digits,p=l.integerLen;const g=l.exponent;let m=[];for(c=f.every(e=>!e);p<u;p++)f.unshift(0);for(;p<0;p++)f.unshift(0);p>0?m=f.splice(p,f.length):(m=f,f=[0]);const b=[];for(f.length>=t.lgSize&&b.unshift(f.splice(-t.lgSize,f.length).join(""));f.length>t.gSize;)b.unshift(f.splice(-t.gSize,f.length).join(""));f.length&&b.unshift(f.join("")),a=b.join(z(n,r)),m.length&&(a+=z(n,o)+m.join("")),g&&(a+=z(n,P.Exponential)+"+"+g)}else a=z(n,P.Infinity);return a=e<0&&!c?t.negPre+a+t.negSuf:t.posPre+a+t.posSuf,a}function xe(e,t,n,r,o){const i=Se(q(t,O.Currency),z(t,P.MinusSign));return i.minFrac=re(r),i.maxFrac=i.minFrac,we(e,i,t,P.CurrencyGroup,P.CurrencyDecimal,o).replace("\xa4",n).replace("\xa4","").trim()}function Ce(e,t,n){return we(e,Se(q(t,O.Percent),z(t,P.MinusSign)),t,P.Group,P.Decimal,n,!0).replace(new RegExp("%","g"),z(t,P.PercentSign))}function Ee(e,t,n){return we(e,Se(q(t,O.Decimal),z(t,P.MinusSign)),t,P.Group,P.Decimal,n)}function Se(e,t="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=e.split(";"),o=r[0],i=r[1],s=-1!==o.indexOf(".")?o.split("."):[o.substring(0,o.lastIndexOf("0")+1),o.substring(o.lastIndexOf("0")+1)],a=s[0],c=s[1]||"";n.posPre=a.substr(0,a.indexOf("#"));for(let u=0;u<c.length;u++){const e=c.charAt(u);"0"===e?n.minFrac=n.maxFrac=u+1:"#"===e?n.maxFrac=u+1:n.posSuf+=e}const l=a.split(",");if(n.gSize=l[1]?l[1].length:0,n.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,i){const e=o.length-n.posPre.length-n.posSuf.length,t=i.indexOf("#");n.negPre=i.substr(0,t).replace(/'/g,""),n.negSuf=i.substr(t+e).replace(/'/g,"")}else n.negPre=t+n.posPre,n.negSuf=n.posSuf;return n}function ke(e){const t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}class Oe{}function De(e,t,n,r){let o=`=${e}`;if(t.indexOf(o)>-1)return o;if(o=n.getPluralCategory(e,r),t.indexOf(o)>-1)return o;if(t.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${e}"`)}let je=(()=>{class e extends Oe{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(K(t||this.locale)(e)){case D.Zero:return"zero";case D.One:return"one";case D.Two:return"two";case D.Few:return"few";case D.Many:return"many";default:return"other"}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.LOCALE_ID))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function Ie(e,t,n){return Object(r["\u0275registerLocaleData"])(e,t,n)}function Ae(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const e=n.indexOf("="),[r,o]=-1==e?[n,""]:[n.slice(0,e),n.slice(e+1)];if(r.trim()===t)return decodeURIComponent(o)}return null}let Pe=(()=>{class e{constructor(e,t,n,r){this._iterableDiffers=e,this._keyValueDiffers=t,this._ngEl=n,this._renderer=r,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Object(r["\u0275isListLikeIterable"])(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachChangedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachRemovedItem(e=>{e.previousValue&&this._toggleClass(e.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(e=>{if("string"!=typeof e.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${Object(r["\u0275stringify"])(e.item)}`);this._toggleClass(e.item,!0)}),e.forEachRemovedItem(e=>this._toggleClass(e.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!0)):Object.keys(e).forEach(t=>this._toggleClass(t,!!e[t])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!1)):Object.keys(e).forEach(e=>this._toggleClass(e,!1)))}_toggleClass(e,t){(e=e.trim())&&e.split(/\s+/g).forEach(e=>{t?this._renderer.addClass(this._ngEl.nativeElement,e):this._renderer.removeClass(this._ngEl.nativeElement,e)})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.IterableDiffers),r["\u0275\u0275directiveInject"](r.KeyValueDiffers),r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](r.Renderer2))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),e})(),Te=(()=>{class e{constructor(e){this._viewContainerRef=e,this._componentRef=null,this._moduleRef=null}ngOnChanges(e){if(this._viewContainerRef.clear(),this._componentRef=null,this.ngComponentOutlet){const t=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;if(e.ngComponentOutletNgModuleFactory)if(this._moduleRef&&this._moduleRef.destroy(),this.ngComponentOutletNgModuleFactory){const e=t.get(r.NgModuleRef);this._moduleRef=this.ngComponentOutletNgModuleFactory.create(e.injector)}else this._moduleRef=null;const n=(this._moduleRef?this._moduleRef.componentFactoryResolver:t.get(r.ComponentFactoryResolver)).resolveComponentFactory(this.ngComponentOutlet);this._componentRef=this._viewContainerRef.createComponent(n,this._viewContainerRef.length,t,this.ngComponentOutletContent)}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},features:[r["\u0275\u0275NgOnChangesFeature"]]}),e})();class Ne{constructor(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Re=(()=>{class e{constructor(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){Object(r.isDevMode)()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. `+"See https://angular.io/api/common/NgForOf#change-propagation for more information."),this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(t){throw new Error(`Cannot find a differ supporting object '${n}' of type '${e=n,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)}}var e;if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=[];e.forEachOperation((e,n,r)=>{if(null==e.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new Ne(null,this._ngForOf,-1,-1),null===r?void 0:r),o=new Fe(e,n);t.push(o)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const o=this._viewContainer.get(n);this._viewContainer.move(o,r);const i=new Fe(e,o);t.push(i)}});for(let n=0;n<t.length;n++)this._perViewChange(t[n].view,t[n].record);for(let n=0,r=this._viewContainer.length;n<r;n++){const e=this._viewContainer.get(n);e.context.index=n,e.context.count=r,e.context.ngForOf=this._ngForOf}e.forEachIdentityChange(e=>{this._viewContainer.get(e.currentIndex).context.$implicit=e.item})}_perViewChange(e,t){e.context.$implicit=t.item}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](r.IterableDiffers))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),e})();class Fe{constructor(e,t){this.record=e,this.view=t}}let Me=(()=>{class e{constructor(e,t){this._viewContainer=e,this._context=new Le,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){$e("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){$e("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),e})();class Le{constructor(){this.$implicit=null,this.ngIf=null}}function $e(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${Object(r["\u0275stringify"])(t)}'.`)}class Ve{constructor(e,t){this._viewContainerRef=e,this._templateRef=t,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}}let Be=(()=>{class e{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const t=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||t,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),t}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let t=0;t<this._defaultViews.length;t++)this._defaultViews[t].enforceState(e)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),e})(),He=(()=>{class e{constructor(e,t,n){this.ngSwitch=n,n._addCase(),this._view=new Ve(e,t)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](Be,1))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),e})(),Ue=(()=>{class e{constructor(e,t,n){n._addDefault(new Ve(e,t))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](Be,1))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngSwitchDefault",""]]}),e})(),ze=(()=>{class e{constructor(e){this._localization=e,this._caseViews={}}set ngPlural(e){this._switchValue=e,this._updateView()}addCase(e,t){this._caseViews[e]=t}_updateView(){this._clearViews();const e=Object.keys(this._caseViews),t=De(this._switchValue,e,this._localization);this._activateView(this._caseViews[t])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Oe))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"}}),e})(),qe=(()=>{class e{constructor(e,t,n,r){this.value=e;const o=!isNaN(Number(e));r.addCase(o?`=${e}`:e,new Ve(n,t))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275injectAttribute"]("ngPluralCase"),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](ze,1))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngPluralCase",""]]}),e})(),We=(()=>{class e{constructor(e,t,n){this._ngEl=e,this._differs=t,this._renderer=n,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){const[n,r]=e.split(".");null!=(t=null!=t&&r?`${t}${r}`:t)?this._renderer.setStyle(this._ngEl.nativeElement,n,t):this._renderer.removeStyle(this._ngEl.nativeElement,n)}_applyChanges(e){e.forEachRemovedItem(e=>this._setStyle(e.key,null)),e.forEachAddedItem(e=>this._setStyle(e.key,e.currentValue)),e.forEachChangedItem(e=>this._setStyle(e.key,e.currentValue))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](r.KeyValueDiffers),r["\u0275\u0275directiveInject"](r.Renderer2))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),e})(),Qe=(()=>{class e{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null}ngOnChanges(e){if(this._shouldRecreateView(e)){const e=this._viewContainerRef;this._viewRef&&e.remove(e.indexOf(this._viewRef)),this._viewRef=this.ngTemplateOutlet?e.createEmbeddedView(this.ngTemplateOutlet,this.ngTemplateOutletContext):null}else this._viewRef&&this.ngTemplateOutletContext&&this._updateExistingContext(this.ngTemplateOutletContext)}_shouldRecreateView(e){const t=e.ngTemplateOutletContext;return!!e.ngTemplateOutlet||t&&this._hasContextShapeChanged(t)}_hasContextShapeChanged(e){const t=Object.keys(e.previousValue||{}),n=Object.keys(e.currentValue||{});if(t.length===n.length){for(let e of n)if(-1===t.indexOf(e))return!0;return!1}return!0}_updateExistingContext(e){for(let t of Object.keys(e))this._viewRef.context[t]=this.ngTemplateOutletContext[t]}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet"},features:[r["\u0275\u0275NgOnChangesFeature"]]}),e})();const Ge=[Pe,Te,Re,Me,Qe,We,Be,He,Ue,ze,qe];function Ke(e,t){return Error(`InvalidPipeArgument: '${t}' for pipe '${Object(r["\u0275stringify"])(e)}'`)}class Ze{createSubscription(e,t){return e.subscribe({next:t,error:e=>{throw e}})}dispose(e){e.unsubscribe()}onDestroy(e){e.unsubscribe()}}class Ye{createSubscription(e,t){return e.then(t,e=>{throw e})}dispose(e){}onDestroy(e){}}const Je=new Ye,Xe=new Ze;let et=(()=>{class e{constructor(e){this._ref=e,this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):Object(r["\u0275looseIdentical"])(this._latestValue,this._latestReturnedValue)?this._latestReturnedValue:(this._latestReturnedValue=this._latestValue,r.WrappedValue.wrap(this._latestValue)):(e&&this._subscribe(e),this._latestReturnedValue=this._latestValue,this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(t){if(Object(r["\u0275isPromise"])(t))return Je;if(Object(r["\u0275isObservable"])(t))return Xe;throw Ke(e,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275injectPipeChangeDetectorRef"]())},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"async",type:e,pure:!1}),e})(),tt=(()=>{class e{transform(t){if(!t)return t;if("string"!=typeof t)throw Ke(e,t);return t.toLowerCase()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"lowercase",type:e,pure:!0}),e})();const nt=/(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;let rt=(()=>{class e{transform(t){if(!t)return t;if("string"!=typeof t)throw Ke(e,t);return t.replace(nt,e=>e[0].toUpperCase()+e.substr(1).toLowerCase())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"titlecase",type:e,pure:!0}),e})(),ot=(()=>{class e{transform(t){if(!t)return t;if("string"!=typeof t)throw Ke(e,t);return t.toUpperCase()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"uppercase",type:e,pure:!0}),e})(),it=(()=>{class e{constructor(e){this.locale=e}transform(t,n="mediumDate",r,o){if(null==t||""===t||t!=t)return null;try{return ue(t,n,o||this.locale,r)}catch(i){throw Ke(e,i.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"date",type:e,pure:!0}),e})();const st=/#/g;let at=(()=>{class e{constructor(e){this._localization=e}transform(t,n,r){if(null==t)return"";if("object"!=typeof n||null===n)throw Ke(e,n);return n[De(t,Object.keys(n),this._localization,r)].replace(st,t.toString())}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Oe))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"i18nPlural",type:e,pure:!0}),e})(),ct=(()=>{class e{transform(t,n){if(null==t)return"";if("object"!=typeof n||"string"!=typeof t)throw Ke(e,n);return n.hasOwnProperty(t)?n[t]:n.hasOwnProperty("other")?n.other:""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"i18nSelect",type:e,pure:!0}),e})(),lt=(()=>{class e{transform(e){return JSON.stringify(e,null,2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"json",type:e,pure:!1}),e})(),ut=(()=>{class e{constructor(e){this.differs=e,this.keyValues=[]}transform(e,t=dt){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const n=this.differ.diff(e);return n&&(this.keyValues=[],n.forEachItem(e=>{this.keyValues.push({key:e.key,value:e.currentValue})}),this.keyValues.sort(t)),this.keyValues}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.KeyValueDiffers))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"keyvalue",type:e,pure:!1}),e})();function dt(e,t){const n=e.key,r=t.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),i=String(r);return o==i?0:o<i?-1:1}let ht=(()=>{class e{constructor(e){this._locale=e}transform(t,n,r){if(gt(t))return null;r=r||this._locale;try{return Ee(mt(t),r,n)}catch(o){throw Ke(e,o.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"number",type:e,pure:!0}),e})(),ft=(()=>{class e{constructor(e){this._locale=e}transform(t,n,r){if(gt(t))return null;r=r||this._locale;try{return Ce(mt(t),r,n)}catch(o){throw Ke(e,o.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"percent",type:e,pure:!0}),e})(),pt=(()=>{class e{constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(t,n,r="symbol",o,i){if(gt(t))return null;i=i||this._locale,"boolean"==typeof r&&(console&&console.warn&&console.warn('Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'),r=r?"symbol":"code");let s=n||this._defaultCurrencyCode;"code"!==r&&(s="symbol"===r||"symbol-narrow"===r?ne(s,"symbol"===r?"wide":"narrow",i):r);try{return xe(mt(t),i,s,n,o)}catch(a){throw Ke(e,a.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID),r["\u0275\u0275directiveInject"](r.DEFAULT_CURRENCY_CODE))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"currency",type:e,pure:!0}),e})();function gt(e){return null==e||""===e||e!=e}function mt(e){if("string"==typeof e&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if("number"!=typeof e)throw new Error(`${e} is not a number`);return e}let bt=(()=>{class e{transform(t,n,r){if(null==t)return t;if(!this.supports(t))throw Ke(e,t);return t.slice(n,r)}supports(e){return"string"==typeof e||Array.isArray(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"slice",type:e,pure:!1}),e})();const yt=[et,ot,tt,lt,bt,ht,ft,rt,pt,it,at,ct,ut];let vt=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[{provide:Oe,useClass:je}]}),e})();const _t="browser",wt="server",xt="browserWorkerApp",Ct="browserWorkerUi";function Et(e){return e===_t}function St(e){return e===wt}function kt(e){return e===xt}function Ot(e){return e===Ct}const Dt=new r.Version("9.1.1");let jt=(()=>{class e{}return e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({token:e,providedIn:"root",factory:()=>new It(Object(r["\u0275\u0275inject"])(c),window,Object(r["\u0275\u0275inject"])(r.ErrorHandler))}),e})();class It{constructor(e,t,n){this.document=e,this.window=t,this.errorHandler=n,this.offset=()=>[0,0]}setOffset(e){this.offset=Array.isArray(e)?()=>e:e}getScrollPosition(){return this.supportScrollRestoration()?[this.window.scrollX,this.window.scrollY]:[0,0]}scrollToPosition(e){this.supportScrollRestoration()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(this.supportScrollRestoration()){e=this.window.CSS&&this.window.CSS.escape?this.window.CSS.escape(e):e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g,"\\$1");try{const t=this.document.querySelector(`#${e}`);if(t)return void this.scrollToElement(t);const n=this.document.querySelector(`[name='${e}']`);if(n)return void this.scrollToElement(n)}catch(t){this.errorHandler.handleError(t)}}}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}scrollToElement(e){const t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}supportScrollRestoration(){try{return!!this.window&&!!this.window.scrollTo}catch(e){return!1}}}class At{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}}},"3/dt":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{}t.DontCodeModel=r,r.ROOT="creation",r.APP_NAME_NODE="name",r.APP_TYPE_NODE="type",r.APP_TYPE=r.ROOT+"/"+r.APP_TYPE_NODE,r.APP_NAME=r.ROOT+"/"+r.APP_NAME_NODE,r.APP_ENTITIES_NODE="entities",r.APP_ENTITIES=r.ROOT+"/"+r.APP_ENTITIES_NODE,r.APP_ENTITIES_NAME_NODE="name",r.APP_ENTITIES_NAME=r.APP_ENTITIES+"/"+r.APP_ENTITIES_NAME_NODE,r.APP_FIELDS_NODE="fields",r.APP_FIELDS=r.APP_ENTITIES+"/"+r.APP_FIELDS_NODE,r.APP_FIELDS_NAME_NODE="name",r.APP_FIELDS_NAME=r.APP_FIELDS+"/"+r.APP_FIELDS_NAME_NODE,r.APP_FIELDS_TYPE_NODE="type",r.APP_FIELDS_TYPE=r.APP_FIELDS+"/"+r.APP_FIELDS_TYPE_NODE,r.APP_SCREENS_NODE="screens",r.APP_SCREENS=r.ROOT+"/"+r.APP_SCREENS_NODE,r.APP_SCREENS_NAME_NODE="name",r.APP_SCREENS_NAME=r.APP_SCREENS+"/"+r.APP_SCREENS_NAME_NODE,r.APP_SCREENS_LAYOUT_NODE="layout",r.APP_SCREENS_LAYOUT=r.APP_SCREENS+"/"+r.APP_SCREENS_LAYOUT_NODE,r.APP_COMPONENTS_NODE="components",r.APP_COMPONENTS=r.APP_SCREENS+"/"+r.APP_COMPONENTS_NODE,r.APP_COMPONENTS_TYPE_NODE="type",r.APP_COMPONENTS_TYPE=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_TYPE_NODE,r.APP_COMPONENTS_ENTITY_NODE="entity",r.APP_COMPONENTS_ENTITY=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_ENTITY_NODE},"3lSR":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cJ9h"),o=n("5E2i");function i(e=Number.POSITIVE_INFINITY){return Object(r.a)(o.a,e)}},"42at":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePreviewManager=class{constructor(){this.handlersPerLocations=new Map}registerHandlers(e){e["preview-handlers"]&&e["preview-handlers"].forEach(e=>{this.handlersPerLocations.has(e.location.parent)?this.handlersPerLocations.get(e.location.parent).push(e):this.handlersPerLocations.set(e.location.parent,[e])})}retrieveHandlerConfig(e,t){const n=this.handlersPerLocations.get(e);let r=null;return n&&n.forEach(e=>{if(t){if(e.location.values){const n=t[e.location.id];e.location.values.forEach(t=>{t!==n||(r=e)})}}else if(!e.location.values)return void(r=e)}),r}}},"47ST":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("IdLP");function o(e,t){return new r.a(t?n=>t.schedule(i,0,{error:e,subscriber:n}):t=>t.error(e))}function i({error:e,subscriber:t}){t.error(e)}},"4e/d":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("pBDD"),o=n("r9RI"),i=n("mW0F");function s(e){return function(t){const n=new a(e),r=t.lift(n);return n.caught=r}}class a{constructor(e){this.selector=e}call(e,t){return t.subscribe(new c(e,this.selector,this.caught))}}class c extends r.a{constructor(e,t,n){super(e),this.selector=t,this.caught=n}error(e){if(!this.isStopped){let n;try{n=this.selector(e,this.caught)}catch(t){return void super.error(t)}this._unsubscribeAndRecycle();const r=new o.a(this,void 0,void 0);this.add(r);const s=Object(i.a)(this,n,void 0,void 0,r);s!==r&&this.add(s)}}}},"5E2i":function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},"5uDM":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("cJ9h");function o(e,t){return Object(r.a)(e,t,1)}},"5uGe":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("IJgj"),o=n("rWo0"),i=n("bwdy"),s=n("25CY"),a=n("HgnN"),c=n("i9P/");class l extends i.a{constructor(e,t,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=o.a;break;case 1:if(!e){this.destination=o.a;break}if("object"==typeof e){e instanceof l?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new u(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new u(this,e,t,n)}}[s.a](){return this}static create(e,t,n){const r=new l(e,t,n);return r.syncErrorThrowable=!1,r}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class u extends l{constructor(e,t,n,i){let s;super(),this._parentSubscriber=e;let a=this;Object(r.a)(t)?s=t:t&&(s=t.next,n=t.error,i=t.complete,t!==o.a&&(a=Object.create(t),Object(r.a)(a.unsubscribe)&&this.add(a.unsubscribe.bind(a)),a.unsubscribe=this.unsubscribe.bind(this))),this._context=a,this._next=s,this._error=n,this._complete=i}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;a.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:n}=a.a;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):Object(c.a)(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;Object(c.a)(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);a.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),a.a.useDeprecatedSynchronousErrorHandling)throw n;Object(c.a)(n)}}__tryOrSetError(e,t,n){if(!a.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(r){return a.a.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=r,e.syncErrorThrown=!0,!0):(Object(c.a)(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}},"6Oco":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("IdLP");const o=new r.a(e=>e.complete());function i(e){return e?function(e){return new r.a(t=>e.schedule(()=>t.complete()))}(e):o}},"7Alh":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));let r=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})()},"7ntQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("JHA6"),o=n("i7Dj"),i=n("ZTXN");function s(){return new i.b}function a(){return e=>Object(o.a)()(Object(r.a)(s)(e))}},"8j5Y":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("5uGe"),o=n("kgbq"),i=n("IJgj");function s(e,t,n){return function(r){return r.lift(new a(e,t,n))}}class a{constructor(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}call(e,t){return t.subscribe(new c(e,this.nextOrObserver,this.error,this.complete))}}class c extends r.a{constructor(e,t,n,r){super(e),this._tapNext=o.a,this._tapError=o.a,this._tapComplete=o.a,this._tapError=n||o.a,this._tapComplete=r||o.a,Object(i.a)(t)?(this._context=this,this._tapNext=t):t&&(this._context=t,this._tapNext=t.next||o.a,this._tapError=t.error||o.a,this._tapComplete=t.complete||o.a)}_next(e){try{this._tapNext.call(this._context,e)}catch(t){return void this.destination.error(t)}this.destination.next(e)}_error(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)}_complete(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()}}},A2S1:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n("5uGe"),o=n("ryP2");function i(e,t=0){return function(n){return n.lift(new s(e,t))}}class s{constructor(e,t=0){this.scheduler=e,this.delay=t}call(e,t){return t.subscribe(new a(e,this.scheduler,this.delay))}}class a extends r.a{constructor(e,t,n=0){super(e),this.scheduler=t,this.delay=n}static dispatch(e){const{notification:t,destination:n}=e;t.observe(n),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(a.dispatch,this.delay,new c(e,this.destination)))}_next(e){this.scheduleMessage(o.a.createNext(e))}_error(e){this.scheduleMessage(o.a.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(o.a.createComplete()),this.unsubscribe()}}class c{constructor(e,t){this.notification=e,this.destination=t}}},A8kH:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("5uGe"),o=n("PNff"),i=n("6Oco");function s(e){return function(t){return 0===e?Object(i.b)():t.lift(new a(e))}}class a{constructor(e){if(this.total=e,this.total<0)throw new o.a}call(e,t){return t.subscribe(new c(e,this.total))}}class c extends r.a{constructor(e,t){super(e),this.total=t,this.ring=new Array,this.count=0}_next(e){const t=this.ring,n=this.total,r=this.count++;t.length<n?t.push(e):t[r%n]=e}_complete(){const e=this.destination;let t=this.count;if(t>0){const n=this.count>=this.total?this.total:this.count,r=this.ring;for(let o=0;o<n;o++){const o=t++%n;e.next(r[o])}}e.complete()}}},AEcS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("D57K");r.__exportStar(n("YIYF"),t),r.__exportStar(n("o8N5"),t),r.__exportStar(n("3/dt"),t),r.__exportStar(n("umRR"),t),r.__exportStar(n("uq2N"),t),r.__exportStar(n("ZtqZ"),t),r.__exportStar(n("fY+t"),t),r.__exportStar(n("a/xz"),t)},C05f:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ZTXN"),o=n("MiDb");class i extends r.b{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return t&&!t.closed&&e.next(this._value),t}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new o.a;return this._value}next(e){super.next(this._value=e)}}},D57K:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return s})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return u})),n.d(t,"__generator",(function(){return d})),n.d(t,"__exportStar",(function(){return h})),n.d(t,"__values",(function(){return f})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return g})),n.d(t,"__spreadArrays",(function(){return m})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return v})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return x})),n.d(t,"__importDefault",(function(){return C})),n.d(t,"__classPrivateFieldGet",(function(){return E})),n.d(t,"__classPrivateFieldSet",(function(){return S}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function h(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,l):u(i[0][2],n)}catch(r){u(i[0][3],r)}var n}function c(e){a("next",e)}function l(e){a("throw",e)}function u(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function v(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function C(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},"DG/E":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("7Alh");class o extends r.a{constructor(e,t=r.a.now){super(e,()=>o.delegate&&o.delegate!==this?o.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return o.delegate&&o.delegate!==this?o.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}},ECRl:function(e,t,n){var r={"./plugin-screen/__ivy_ngcc__/fesm2015/dontcode-plugin-screen.js":["ODPb",9],"./plugin-screen/bundles/dontcode-plugin-screen.umd.js":["ZFEP",7,2,7],"./plugin-screen/bundles/dontcode-plugin-screen.umd.min.js":["Hn0q",7,2,8],"./plugin-screen/esm2015/dontcode-plugin-screen.js":["I/aV",9,0,9],"./plugin-screen/esm2015/index.js":["3pHC",9,0],"./plugin-screen/esm2015/lib/declaration/screen-plugin.js":["yk3/",9,0],"./plugin-screen/esm2015/lib/preview/screen/screen.component.js":["6nzg",9,0],"./plugin-screen/esm2015/lib/screen.module.js":["cNW7",9,0],"./plugin-screen/esm5/dontcode-plugin-screen.js":["n6ss",9,0,10],"./plugin-screen/esm5/index.js":["b+qt",9,0],"./plugin-screen/esm5/lib/declaration/screen-plugin.js":["bGaX",9,0],"./plugin-screen/esm5/lib/preview/screen/screen.component.js":["m5lf",9,0],"./plugin-screen/esm5/lib/screen.module.js":["fnoQ",9,0],"./plugin-screen/fesm2015/dontcode-plugin-screen.js":["HfCs",9,11],"./plugin-screen/fesm5/dontcode-plugin-screen.js":["C34R",9,12]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(r)},o.id="ECRl",e.exports=o},EM62:function(e,t,n){"use strict";n.r(t),n.d(t,"ANALYZE_FOR_ENTRY_COMPONENTS",(function(){return Ca})),n.d(t,"APP_BOOTSTRAP_LISTENER",(function(){return Xm})),n.d(t,"APP_ID",(function(){return Qm})),n.d(t,"APP_INITIALIZER",(function(){return qm})),n.d(t,"ApplicationInitStatus",(function(){return Wm})),n.d(t,"ApplicationModule",(function(){return Fy})),n.d(t,"ApplicationRef",(function(){return Zb})),n.d(t,"Attribute",(function(){return w})),n.d(t,"COMPILER_OPTIONS",(function(){return vb})),n.d(t,"CUSTOM_ELEMENTS_SCHEMA",(function(){return Jn})),n.d(t,"ChangeDetectionStrategy",(function(){return Ie})),n.d(t,"ChangeDetectorRef",(function(){return gs})),n.d(t,"Compiler",(function(){return yb})),n.d(t,"CompilerFactory",(function(){return _b})),n.d(t,"Component",(function(){return Im})),n.d(t,"ComponentFactory",(function(){return ud})),n.d(t,"ComponentFactoryResolver",(function(){return pd})),n.d(t,"ComponentRef",(function(){return ld})),n.d(t,"ContentChild",(function(){return ka})),n.d(t,"ContentChildren",(function(){return Sa})),n.d(t,"DEFAULT_CURRENCY_CODE",(function(){return rb})),n.d(t,"DebugElement",(function(){return Dy})),n.d(t,"DebugEventListener",(function(){return ly})),n.d(t,"DebugNode",(function(){return Oy})),n.d(t,"DefaultIterableDiffer",(function(){return Id})),n.d(t,"Directive",(function(){return jm})),n.d(t,"ElementRef",(function(){return bd})),n.d(t,"EmbeddedViewRef",(function(){return cy})),n.d(t,"ErrorHandler",(function(){return Yn})),n.d(t,"EventEmitter",(function(){return Eg})),n.d(t,"Host",(function(){return _})),n.d(t,"HostBinding",(function(){return Nm})),n.d(t,"HostListener",(function(){return Rm})),n.d(t,"INJECTOR",(function(){return re})),n.d(t,"Inject",(function(){return m})),n.d(t,"InjectFlags",(function(){return x})),n.d(t,"Injectable",(function(){return Rs})),n.d(t,"InjectionToken",(function(){return ne})),n.d(t,"Injector",(function(){return ea})),n.d(t,"Input",(function(){return Pm})),n.d(t,"IterableDiffers",(function(){return Ld})),n.d(t,"KeyValueDiffers",(function(){return $d})),n.d(t,"LOCALE_ID",(function(){return nb})),n.d(t,"MissingTranslationStrategy",(function(){return sb})),n.d(t,"ModuleWithComponentFactories",(function(){return lb})),n.d(t,"NO_ERRORS_SCHEMA",(function(){return Xn})),n.d(t,"NgModule",(function(){return Hm})),n.d(t,"NgModuleFactory",(function(){return _e})),n.d(t,"NgModuleFactoryLoader",(function(){return Jb})),n.d(t,"NgModuleRef",(function(){return ve})),n.d(t,"NgProbeToken",(function(){return Hb})),n.d(t,"NgZone",(function(){return Cb})),n.d(t,"Optional",(function(){return b})),n.d(t,"Output",(function(){return Tm})),n.d(t,"PACKAGE_ROOT_URL",(function(){return eb})),n.d(t,"PLATFORM_ID",(function(){return Jm})),n.d(t,"PLATFORM_INITIALIZER",(function(){return Ym})),n.d(t,"Pipe",(function(){return Am})),n.d(t,"PlatformRef",(function(){return Gb})),n.d(t,"Query",(function(){return Ea})),n.d(t,"QueryList",(function(){return kg})),n.d(t,"ReflectiveInjector",(function(){return wa})),n.d(t,"ReflectiveKey",(function(){return ia})),n.d(t,"Renderer2",(function(){return xd})),n.d(t,"RendererFactory2",(function(){return _d})),n.d(t,"RendererStyleFlags2",(function(){return wd})),n.d(t,"ResolvedReflectiveFactory",(function(){return fa})),n.d(t,"Sanitizer",(function(){return Sd})),n.d(t,"SecurityContext",(function(){return Br})),n.d(t,"Self",(function(){return y})),n.d(t,"SimpleChange",(function(){return Yu})),n.d(t,"SkipSelf",(function(){return v})),n.d(t,"SystemJsNgModuleLoader",(function(){return iy})),n.d(t,"SystemJsNgModuleLoaderConfig",(function(){return ry})),n.d(t,"TRANSLATIONS",(function(){return ob})),n.d(t,"TRANSLATIONS_FORMAT",(function(){return ib})),n.d(t,"TemplateRef",(function(){return Ud})),n.d(t,"Testability",(function(){return Ab})),n.d(t,"TestabilityRegistry",(function(){return Pb})),n.d(t,"Type",(function(){return ys})),n.d(t,"VERSION",(function(){return Od})),n.d(t,"Version",(function(){return kd})),n.d(t,"ViewChild",(function(){return Da})),n.d(t,"ViewChildren",(function(){return Oa})),n.d(t,"ViewContainerRef",(function(){return Wd})),n.d(t,"ViewEncapsulation",(function(){return Te})),n.d(t,"ViewRef",(function(){return ay})),n.d(t,"WrappedValue",(function(){return Va})),n.d(t,"asNativeElements",(function(){return hy})),n.d(t,"assertPlatform",(function(){return qb})),n.d(t,"createPlatform",(function(){return Ub})),n.d(t,"createPlatformFactory",(function(){return zb})),n.d(t,"defineInjectable",(function(){return k})),n.d(t,"destroyPlatform",(function(){return Wb})),n.d(t,"enableProdMode",(function(){return br})),n.d(t,"forwardRef",(function(){return $})),n.d(t,"getDebugNode",(function(){return Cy})),n.d(t,"getModuleFactory",(function(){return ty})),n.d(t,"getPlatform",(function(){return Qb})),n.d(t,"inject",(function(){return pe})),n.d(t,"isDevMode",(function(){return mr})),n.d(t,"platformCore",(function(){return jy})),n.d(t,"resolveForwardRef",(function(){return V})),n.d(t,"setTestabilityGetter",(function(){return Nb})),n.d(t,"\u0275ALLOW_MULTIPLE_PLATFORMS",(function(){return Bb})),n.d(t,"\u0275APP_ID_RANDOM_PROVIDER",(function(){return Km})),n.d(t,"\u0275ChangeDetectorStatus",(function(){return Ae})),n.d(t,"\u0275CodegenComponentFactoryResolver",(function(){return gd})),n.d(t,"\u0275Compiler_compileModuleAndAllComponentsAsync__POST_R3__",(function(){return mb})),n.d(t,"\u0275Compiler_compileModuleAndAllComponentsSync__POST_R3__",(function(){return pb})),n.d(t,"\u0275Compiler_compileModuleAsync__POST_R3__",(function(){return hb})),n.d(t,"\u0275Compiler_compileModuleSync__POST_R3__",(function(){return ub})),n.d(t,"\u0275ComponentFactory",(function(){return ud})),n.d(t,"\u0275Console",(function(){return tb})),n.d(t,"\u0275DEFAULT_LOCALE_ID",(function(){return np})),n.d(t,"\u0275EMPTY_ARRAY",(function(){return Bh})),n.d(t,"\u0275EMPTY_MAP",(function(){return Hh})),n.d(t,"\u0275INJECTOR_IMPL__POST_R3__",(function(){return Js})),n.d(t,"\u0275INJECTOR_SCOPE",(function(){return Ls})),n.d(t,"\u0275LifecycleHooksFeature",(function(){return Vu})),n.d(t,"\u0275LocaleDataIndex",(function(){return tp})),n.d(t,"\u0275NG_COMP_DEF",(function(){return K})),n.d(t,"\u0275NG_DIR_DEF",(function(){return Z})),n.d(t,"\u0275NG_ELEMENT_ID",(function(){return te})),n.d(t,"\u0275NG_INJ_DEF",(function(){return P})),n.d(t,"\u0275NG_MOD_DEF",(function(){return J})),n.d(t,"\u0275NG_PIPE_DEF",(function(){return Y})),n.d(t,"\u0275NG_PROV_DEF",(function(){return A})),n.d(t,"\u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR",(function(){return Nf})),n.d(t,"\u0275NO_CHANGE",(function(){return Eo})),n.d(t,"\u0275NgModuleFactory",(function(){return Jp})),n.d(t,"\u0275NoopNgZone",(function(){return Ib})),n.d(t,"\u0275ReflectionCapabilities",(function(){return Es})),n.d(t,"\u0275Render3ComponentFactory",(function(){return zf})),n.d(t,"\u0275Render3ComponentRef",(function(){return qf})),n.d(t,"\u0275Render3NgModuleRef",(function(){return Yp})),n.d(t,"\u0275SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__",(function(){return ms})),n.d(t,"\u0275SWITCH_COMPILE_COMPONENT__POST_R3__",(function(){return Fm})),n.d(t,"\u0275SWITCH_COMPILE_DIRECTIVE__POST_R3__",(function(){return Mm})),n.d(t,"\u0275SWITCH_COMPILE_INJECTABLE__POST_R3__",(function(){return Fs})),n.d(t,"\u0275SWITCH_COMPILE_NGMODULE__POST_R3__",(function(){return Um})),n.d(t,"\u0275SWITCH_COMPILE_PIPE__POST_R3__",(function(){return Lm})),n.d(t,"\u0275SWITCH_ELEMENT_REF_FACTORY__POST_R3__",(function(){return yd})),n.d(t,"\u0275SWITCH_IVY_ENABLED__POST_R3__",(function(){return ab})),n.d(t,"\u0275SWITCH_RENDERER2_FACTORY__POST_R3__",(function(){return Cd})),n.d(t,"\u0275SWITCH_TEMPLATE_REF_FACTORY__POST_R3__",(function(){return zd})),n.d(t,"\u0275SWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__",(function(){return Qd})),n.d(t,"\u0275_sanitizeHtml",(function(){return $r})),n.d(t,"\u0275_sanitizeStyle",(function(){return zr})),n.d(t,"\u0275_sanitizeUrl",(function(){return wr})),n.d(t,"\u0275allowSanitizationBypassAndThrow",(function(){return ar})),n.d(t,"\u0275and",(function(){return My})),n.d(t,"\u0275angular_packages_core_core_a",(function(){return B})),n.d(t,"\u0275angular_packages_core_core_b",(function(){return de})),n.d(t,"\u0275angular_packages_core_core_ba",(function(){return Dt})),n.d(t,"\u0275angular_packages_core_core_bb",(function(){return At})),n.d(t,"\u0275angular_packages_core_core_bc",(function(){return Mt})),n.d(t,"\u0275angular_packages_core_core_bd",(function(){return Jt})),n.d(t,"\u0275angular_packages_core_core_bf",(function(){return dg})),n.d(t,"\u0275angular_packages_core_core_bg",(function(){return hg})),n.d(t,"\u0275angular_packages_core_core_bh",(function(){return fg})),n.d(t,"\u0275angular_packages_core_core_bi",(function(){return pg})),n.d(t,"\u0275angular_packages_core_core_bj",(function(){return gg})),n.d(t,"\u0275angular_packages_core_core_bk",(function(){return Zr})),n.d(t,"\u0275angular_packages_core_core_bl",(function(){return p})),n.d(t,"\u0275angular_packages_core_core_bm",(function(){return g})),n.d(t,"\u0275angular_packages_core_core_bn",(function(){return C})),n.d(t,"\u0275angular_packages_core_core_bo",(function(){return c})),n.d(t,"\u0275angular_packages_core_core_bq",(function(){return ko})),n.d(t,"\u0275angular_packages_core_core_c",(function(){return be})),n.d(t,"\u0275angular_packages_core_core_d",(function(){return xa})),n.d(t,"\u0275angular_packages_core_core_e",(function(){return ua})),n.d(t,"\u0275angular_packages_core_core_f",(function(){return ma})),n.d(t,"\u0275angular_packages_core_core_g",(function(){return Gm})),n.d(t,"\u0275angular_packages_core_core_h",(function(){return ds})),n.d(t,"\u0275angular_packages_core_core_i",(function(){return hs})),n.d(t,"\u0275angular_packages_core_core_j",(function(){return Xb})),n.d(t,"\u0275angular_packages_core_core_k",(function(){return uy})),n.d(t,"\u0275angular_packages_core_core_l",(function(){return dy})),n.d(t,"\u0275angular_packages_core_core_m",(function(){return Ey})),n.d(t,"\u0275angular_packages_core_core_n",(function(){return Dd})),n.d(t,"\u0275angular_packages_core_core_o",(function(){return Rd})),n.d(t,"\u0275angular_packages_core_core_p",(function(){return Iy})),n.d(t,"\u0275angular_packages_core_core_q",(function(){return Ay})),n.d(t,"\u0275angular_packages_core_core_r",(function(){return Py})),n.d(t,"\u0275angular_packages_core_core_s",(function(){return Ny})),n.d(t,"\u0275angular_packages_core_core_t",(function(){return Ry})),n.d(t,"\u0275angular_packages_core_core_u",(function(){return rp})),n.d(t,"\u0275angular_packages_core_core_v",(function(){return Of})),n.d(t,"\u0275angular_packages_core_core_w",(function(){return ih})),n.d(t,"\u0275angular_packages_core_core_x",(function(){return Uf})),n.d(t,"\u0275angular_packages_core_core_y",(function(){return Mn})),n.d(t,"\u0275angular_packages_core_core_z",(function(){return Et})),n.d(t,"\u0275bypassSanitizationTrustHtml",(function(){return lr})),n.d(t,"\u0275bypassSanitizationTrustResourceUrl",(function(){return fr})),n.d(t,"\u0275bypassSanitizationTrustScript",(function(){return dr})),n.d(t,"\u0275bypassSanitizationTrustStyle",(function(){return ur})),n.d(t,"\u0275bypassSanitizationTrustUrl",(function(){return hr})),n.d(t,"\u0275ccf",(function(){return tf})),n.d(t,"\u0275clearOverrides",(function(){return d_})),n.d(t,"\u0275clearResolutionOfComponentResourcesQueue",(function(){return Ta})),n.d(t,"\u0275cmf",(function(){return h_})),n.d(t,"\u0275compileComponent",(function(){return hm})),n.d(t,"\u0275compileDirective",(function(){return fm})),n.d(t,"\u0275compileNgModule",(function(){return nm})),n.d(t,"\u0275compileNgModuleDefs",(function(){return rm})),n.d(t,"\u0275compileNgModuleFactory__POST_R3__",(function(){return Lb})),n.d(t,"\u0275compilePipe",(function(){return Om})),n.d(t,"\u0275createInjector",(function(){return zs})),n.d(t,"\u0275crt",(function(){return dh})),n.d(t,"\u0275defaultIterableDiffers",(function(){return Bd})),n.d(t,"\u0275defaultKeyValueDiffers",(function(){return Hd})),n.d(t,"\u0275detectChanges",(function(){return pc})),n.d(t,"\u0275devModeEqual",(function(){return $a})),n.d(t,"\u0275did",(function(){return Ef})),n.d(t,"\u0275eld",(function(){return Ly})),n.d(t,"\u0275findLocaleData",(function(){return Zf})),n.d(t,"\u0275flushModuleScopingQueueAsMuchAsPossible",(function(){return em})),n.d(t,"\u0275getComponentViewDefinitionFactory",(function(){return nf})),n.d(t,"\u0275getDebugNodeR2",(function(){return Sy})),n.d(t,"\u0275getDebugNode__POST_R3__",(function(){return xy})),n.d(t,"\u0275getDirectives",(function(){return ku})),n.d(t,"\u0275getHostElement",(function(){return Du})),n.d(t,"\u0275getInjectableDef",(function(){return D})),n.d(t,"\u0275getLContext",(function(){return ro})),n.d(t,"\u0275getLocaleCurrencyCode",(function(){return Yf})),n.d(t,"\u0275getLocalePluralCase",(function(){return Jf})),n.d(t,"\u0275getModuleFactory__POST_R3__",(function(){return ey})),n.d(t,"\u0275getSanitizationBypassType",(function(){return cr})),n.d(t,"\u0275global",(function(){return W})),n.d(t,"\u0275initServicesIfNeeded",(function(){return kv})),n.d(t,"\u0275inlineInterpolate",(function(){return $h})),n.d(t,"\u0275interpolate",(function(){return Lh})),n.d(t,"\u0275isBoundToModule__POST_R3__",(function(){return Vb})),n.d(t,"\u0275isDefaultChangeDetectionStrategy",(function(){return Pe})),n.d(t,"\u0275isListLikeIterable",(function(){return Ba})),n.d(t,"\u0275isObservable",(function(){return Mc})),n.d(t,"\u0275isPromise",(function(){return Fc})),n.d(t,"\u0275ivyEnabled",(function(){return cb})),n.d(t,"\u0275looseIdentical",(function(){return La})),n.d(t,"\u0275makeDecorator",(function(){return h})),n.d(t,"\u0275markDirty",(function(){return gc})),n.d(t,"\u0275mod",(function(){return Gh})),n.d(t,"\u0275mpd",(function(){return Qh})),n.d(t,"\u0275ncd",(function(){return Gy})),n.d(t,"\u0275nov",(function(){return pf})),n.d(t,"\u0275overrideComponentView",(function(){return u_})),n.d(t,"\u0275overrideProvider",(function(){return l_})),n.d(t,"\u0275pad",(function(){return Yy})),n.d(t,"\u0275patchComponentDefWithScope",(function(){return cm})),n.d(t,"\u0275pid",(function(){return Sf})),n.d(t,"\u0275pod",(function(){return Jy})),n.d(t,"\u0275ppd",(function(){return Zy})),n.d(t,"\u0275prd",(function(){return kf})),n.d(t,"\u0275publishDefaultGlobalUtils",(function(){return Nu})),n.d(t,"\u0275publishGlobalUtil",(function(){return Ru})),n.d(t,"\u0275qud",(function(){return Uy})),n.d(t,"\u0275registerLocaleData",(function(){return Kf})),n.d(t,"\u0275registerModuleFactory",(function(){return Qp})),n.d(t,"\u0275registerNgModuleType",(function(){return Kp})),n.d(t,"\u0275renderComponent",(function(){return Fu})),n.d(t,"\u0275resetCompiledComponents",(function(){return sm})),n.d(t,"\u0275resetJitOptions",(function(){return Zg})),n.d(t,"\u0275resolveComponentResources",(function(){return ja})),n.d(t,"\u0275setClassMetadata",(function(){return Xp})),n.d(t,"\u0275setCurrentInjector",(function(){return le})),n.d(t,"\u0275setDocument",(function(){return st})),n.d(t,"\u0275setLocaleId",(function(){return qp})),n.d(t,"\u0275store",(function(){return _c})),n.d(t,"\u0275stringify",(function(){return F})),n.d(t,"\u0275ted",(function(){return ev})),n.d(t,"\u0275transitiveScopesFor",(function(){return lm})),n.d(t,"\u0275unregisterLocaleData",(function(){return ep})),n.d(t,"\u0275unv",(function(){return uh})),n.d(t,"\u0275unwrapSafeValue",(function(){return sr})),n.d(t,"\u0275vid",(function(){return rv})),n.d(t,"\u0275whenRendered",(function(){return Bu})),n.d(t,"\u0275\u0275CopyDefinitionFeature",(function(){return Zu})),n.d(t,"\u0275\u0275InheritDefinitionFeature",(function(){return Uu})),n.d(t,"\u0275\u0275NgOnChangesFeature",(function(){return Ju})),n.d(t,"\u0275\u0275ProvidersFeature",(function(){return cd})),n.d(t,"\u0275\u0275advance",(function(){return Oo})),n.d(t,"\u0275\u0275attribute",(function(){return Ka})),n.d(t,"\u0275\u0275attributeInterpolate1",(function(){return ic})),n.d(t,"\u0275\u0275attributeInterpolate2",(function(){return sc})),n.d(t,"\u0275\u0275attributeInterpolate3",(function(){return ac})),n.d(t,"\u0275\u0275attributeInterpolate4",(function(){return cc})),n.d(t,"\u0275\u0275attributeInterpolate5",(function(){return lc})),n.d(t,"\u0275\u0275attributeInterpolate6",(function(){return uc})),n.d(t,"\u0275\u0275attributeInterpolate7",(function(){return dc})),n.d(t,"\u0275\u0275attributeInterpolate8",(function(){return hc})),n.d(t,"\u0275\u0275attributeInterpolateV",(function(){return fc})),n.d(t,"\u0275\u0275classMap",(function(){return xl})),n.d(t,"\u0275\u0275classMapInterpolate1",(function(){return Wl})),n.d(t,"\u0275\u0275classMapInterpolate2",(function(){return Ql})),n.d(t,"\u0275\u0275classMapInterpolate3",(function(){return Gl})),n.d(t,"\u0275\u0275classMapInterpolate4",(function(){return Kl})),n.d(t,"\u0275\u0275classMapInterpolate5",(function(){return Zl})),n.d(t,"\u0275\u0275classMapInterpolate6",(function(){return Yl})),n.d(t,"\u0275\u0275classMapInterpolate7",(function(){return Jl})),n.d(t,"\u0275\u0275classMapInterpolate8",(function(){return Xl})),n.d(t,"\u0275\u0275classMapInterpolateV",(function(){return eu})),n.d(t,"\u0275\u0275classProp",(function(){return vl})),n.d(t,"\u0275\u0275componentHostSyntheticListener",(function(){return $c})),n.d(t,"\u0275\u0275container",(function(){return mc})),n.d(t,"\u0275\u0275containerRefreshEnd",(function(){return vc})),n.d(t,"\u0275\u0275containerRefreshStart",(function(){return yc})),n.d(t,"\u0275\u0275contentQuery",(function(){return $g})),n.d(t,"\u0275\u0275defaultStyleSanitizer",(function(){return Jr})),n.d(t,"\u0275\u0275defineComponent",(function(){return Me})),n.d(t,"\u0275\u0275defineDirective",(function(){return qe})),n.d(t,"\u0275\u0275defineInjectable",(function(){return S})),n.d(t,"\u0275\u0275defineInjector",(function(){return O})),n.d(t,"\u0275\u0275defineNgModule",(function(){return He})),n.d(t,"\u0275\u0275definePipe",(function(){return We})),n.d(t,"\u0275\u0275directiveInject",(function(){return xc})),n.d(t,"\u0275\u0275disableBindings",(function(){return Ot})),n.d(t,"\u0275\u0275element",(function(){return jc})),n.d(t,"\u0275\u0275elementContainer",(function(){return Pc})),n.d(t,"\u0275\u0275elementContainerEnd",(function(){return Ac})),n.d(t,"\u0275\u0275elementContainerStart",(function(){return Ic})),n.d(t,"\u0275\u0275elementEnd",(function(){return Dc})),n.d(t,"\u0275\u0275elementStart",(function(){return Oc})),n.d(t,"\u0275\u0275embeddedViewEnd",(function(){return Nc})),n.d(t,"\u0275\u0275embeddedViewStart",(function(){return Tc})),n.d(t,"\u0275\u0275enableBindings",(function(){return kt})),n.d(t,"\u0275\u0275getCurrentView",(function(){return Rc})),n.d(t,"\u0275\u0275getFactoryOf",(function(){return Wn})),n.d(t,"\u0275\u0275getInheritedFactory",(function(){return Qn})),n.d(t,"\u0275\u0275hostProperty",(function(){return vu})),n.d(t,"\u0275\u0275i18n",(function(){return Tp})),n.d(t,"\u0275\u0275i18nApply",(function(){return Lp})),n.d(t,"\u0275\u0275i18nAttributes",(function(){return Np})),n.d(t,"\u0275\u0275i18nEnd",(function(){return jp})),n.d(t,"\u0275\u0275i18nExp",(function(){return Mp})),n.d(t,"\u0275\u0275i18nPostprocess",(function(){return Dp})),n.d(t,"\u0275\u0275i18nStart",(function(){return Sp})),n.d(t,"\u0275\u0275inject",(function(){return he})),n.d(t,"\u0275\u0275injectAttribute",(function(){return Cc})),n.d(t,"\u0275\u0275injectPipeChangeDetectorRef",(function(){return Qg})),n.d(t,"\u0275\u0275invalidFactory",(function(){return Ec})),n.d(t,"\u0275\u0275invalidFactoryDep",(function(){return fe})),n.d(t,"\u0275\u0275listener",(function(){return Lc})),n.d(t,"\u0275\u0275loadQuery",(function(){return Hg})),n.d(t,"\u0275\u0275namespaceHTML",(function(){return on})),n.d(t,"\u0275\u0275namespaceMathML",(function(){return rn})),n.d(t,"\u0275\u0275namespaceSVG",(function(){return nn})),n.d(t,"\u0275\u0275nextContext",(function(){return Uc})),n.d(t,"\u0275\u0275pipe",(function(){return mg})),n.d(t,"\u0275\u0275pipeBind1",(function(){return bg})),n.d(t,"\u0275\u0275pipeBind2",(function(){return yg})),n.d(t,"\u0275\u0275pipeBind3",(function(){return vg})),n.d(t,"\u0275\u0275pipeBind4",(function(){return _g})),n.d(t,"\u0275\u0275pipeBindV",(function(){return wg})),n.d(t,"\u0275\u0275projection",(function(){return Gc})),n.d(t,"\u0275\u0275projectionDef",(function(){return qc})),n.d(t,"\u0275\u0275property",(function(){return Sc})),n.d(t,"\u0275\u0275propertyInterpolate",(function(){return Kc})),n.d(t,"\u0275\u0275propertyInterpolate1",(function(){return Zc})),n.d(t,"\u0275\u0275propertyInterpolate2",(function(){return Yc})),n.d(t,"\u0275\u0275propertyInterpolate3",(function(){return Jc})),n.d(t,"\u0275\u0275propertyInterpolate4",(function(){return Xc})),n.d(t,"\u0275\u0275propertyInterpolate5",(function(){return el})),n.d(t,"\u0275\u0275propertyInterpolate6",(function(){return tl})),n.d(t,"\u0275\u0275propertyInterpolate7",(function(){return nl})),n.d(t,"\u0275\u0275propertyInterpolate8",(function(){return rl})),n.d(t,"\u0275\u0275propertyInterpolateV",(function(){return ol})),n.d(t,"\u0275\u0275pureFunction0",(function(){return eg})),n.d(t,"\u0275\u0275pureFunction1",(function(){return tg})),n.d(t,"\u0275\u0275pureFunction2",(function(){return ng})),n.d(t,"\u0275\u0275pureFunction3",(function(){return rg})),n.d(t,"\u0275\u0275pureFunction4",(function(){return og})),n.d(t,"\u0275\u0275pureFunction5",(function(){return ig})),n.d(t,"\u0275\u0275pureFunction6",(function(){return sg})),n.d(t,"\u0275\u0275pureFunction7",(function(){return ag})),n.d(t,"\u0275\u0275pureFunction8",(function(){return cg})),n.d(t,"\u0275\u0275pureFunctionV",(function(){return lg})),n.d(t,"\u0275\u0275queryRefresh",(function(){return Rg})),n.d(t,"\u0275\u0275reference",(function(){return wc})),n.d(t,"\u0275\u0275resolveBody",(function(){return On})),n.d(t,"\u0275\u0275resolveDocument",(function(){return kn})),n.d(t,"\u0275\u0275resolveWindow",(function(){return Sn})),n.d(t,"\u0275\u0275restoreView",(function(){return It})),n.d(t,"\u0275\u0275sanitizeHtml",(function(){return qr})),n.d(t,"\u0275\u0275sanitizeResourceUrl",(function(){return Gr})),n.d(t,"\u0275\u0275sanitizeScript",(function(){return Kr})),n.d(t,"\u0275\u0275sanitizeStyle",(function(){return Wr})),n.d(t,"\u0275\u0275sanitizeUrl",(function(){return Qr})),n.d(t,"\u0275\u0275sanitizeUrlOrResourceUrl",(function(){return Yr})),n.d(t,"\u0275\u0275select",(function(){return Do})),n.d(t,"\u0275\u0275setComponentScope",(function(){return Le})),n.d(t,"\u0275\u0275setNgModuleScope",(function(){return Ue})),n.d(t,"\u0275\u0275staticContentQuery",(function(){return Vg})),n.d(t,"\u0275\u0275staticViewQuery",(function(){return Fg})),n.d(t,"\u0275\u0275styleMap",(function(){return _l})),n.d(t,"\u0275\u0275styleMapInterpolate1",(function(){return tu})),n.d(t,"\u0275\u0275styleMapInterpolate2",(function(){return nu})),n.d(t,"\u0275\u0275styleMapInterpolate3",(function(){return ru})),n.d(t,"\u0275\u0275styleMapInterpolate4",(function(){return ou})),n.d(t,"\u0275\u0275styleMapInterpolate5",(function(){return iu})),n.d(t,"\u0275\u0275styleMapInterpolate6",(function(){return su})),n.d(t,"\u0275\u0275styleMapInterpolate7",(function(){return au})),n.d(t,"\u0275\u0275styleMapInterpolate8",(function(){return cu})),n.d(t,"\u0275\u0275styleMapInterpolateV",(function(){return lu})),n.d(t,"\u0275\u0275styleProp",(function(){return yl})),n.d(t,"\u0275\u0275stylePropInterpolate1",(function(){return uu})),n.d(t,"\u0275\u0275stylePropInterpolate2",(function(){return du})),n.d(t,"\u0275\u0275stylePropInterpolate3",(function(){return hu})),n.d(t,"\u0275\u0275stylePropInterpolate4",(function(){return fu})),n.d(t,"\u0275\u0275stylePropInterpolate5",(function(){return pu})),n.d(t,"\u0275\u0275stylePropInterpolate6",(function(){return gu})),n.d(t,"\u0275\u0275stylePropInterpolate7",(function(){return mu})),n.d(t,"\u0275\u0275stylePropInterpolate8",(function(){return bu})),n.d(t,"\u0275\u0275stylePropInterpolateV",(function(){return yu})),n.d(t,"\u0275\u0275styleSanitizer",(function(){return bl})),n.d(t,"\u0275\u0275template",(function(){return bc})),n.d(t,"\u0275\u0275templateRefExtractor",(function(){return Wg})),n.d(t,"\u0275\u0275text",(function(){return Rl})),n.d(t,"\u0275\u0275textInterpolate",(function(){return Fl})),n.d(t,"\u0275\u0275textInterpolate1",(function(){return Ml})),n.d(t,"\u0275\u0275textInterpolate2",(function(){return Ll})),n.d(t,"\u0275\u0275textInterpolate3",(function(){return $l})),n.d(t,"\u0275\u0275textInterpolate4",(function(){return Vl})),n.d(t,"\u0275\u0275textInterpolate5",(function(){return Bl})),n.d(t,"\u0275\u0275textInterpolate6",(function(){return Hl})),n.d(t,"\u0275\u0275textInterpolate7",(function(){return Ul})),n.d(t,"\u0275\u0275textInterpolate8",(function(){return zl})),n.d(t,"\u0275\u0275textInterpolateV",(function(){return ql})),n.d(t,"\u0275\u0275updateSyntheticHostBinding",(function(){return _u})),n.d(t,"\u0275\u0275viewQuery",(function(){return Mg}));var r=n("ZTXN"),o=n("bwdy"),i=n("IdLP"),s=n("g6G6"),a=n("7ntQ");function c(e){return{toString:e}.toString()}const l="__annotations__",u="__parameters__",d="__prop__metadata__";function h(e,t,n,r,o){return c(()=>{const i=f(t);function s(...e){if(this instanceof s)return i.call(this,...e),this;const t=new s(...e);return function(n){return o&&o(n,...e),(n.hasOwnProperty(l)?n[l]:Object.defineProperty(n,l,{value:[]})[l]).push(t),r&&r(n),n}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=e,s.annotationCls=s,s})}function f(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}function p(e,t,n){return c(()=>{const r=f(t);function o(...e){if(this instanceof o)return r.apply(this,e),this;const t=new o(...e);return n.annotation=t,n;function n(e,n,r){const o=e.hasOwnProperty(u)?e[u]:Object.defineProperty(e,u,{value:[]})[u];for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(t),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}function g(e,t,n,r){return c(()=>{const o=f(t);function i(...e){if(this instanceof i)return o.apply(this,e),this;const t=new i(...e);return function(n,o){const i=n.constructor,s=i.hasOwnProperty(d)?i[d]:Object.defineProperty(i,d,{value:{}})[d];s[o]=s.hasOwnProperty(o)&&s[o]||[],s[o].unshift(t),r&&r(n,o,...e)}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i})}const m=p("Inject",e=>({token:e})),b=p("Optional"),y=p("Self"),v=p("SkipSelf"),_=p("Host"),w=p("Attribute",e=>({attributeName:e}));var x=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}({});function C(e){for(let t in e)if(e[t]===C)return t;throw Error("Could not find renamed property on target object.")}function E(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function S(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}const k=S;function O(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function D(e){return j(e,e[A])||j(e,e[N])}function j(e,t){return t&&t.token===e?t:null}function I(e){return e&&(e.hasOwnProperty(P)||e.hasOwnProperty(R))?e[P]:null}const A=C({"\u0275prov":C}),P=C({"\u0275inj":C}),T=C({"\u0275provFallback":C}),N=C({ngInjectableDef:C}),R=C({ngInjectorDef:C});function F(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(F).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function M(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}const L=C({__forward_ref__:C});function $(e){return e.__forward_ref__=$,e.toString=function(){return F(this())},e}function V(e){return B(e)?e():e}function B(e){return"function"==typeof e&&e.hasOwnProperty(L)&&e.__forward_ref__===$}const H="undefined"!=typeof globalThis&&globalThis,U="undefined"!=typeof window&&window,z="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,q="undefined"!=typeof global&&global,W=H||q||U||z;var Q=function(e){return e[e.Token=0]="Token",e[e.Attribute=1]="Attribute",e[e.ChangeDetectorRef=2]="ChangeDetectorRef",e[e.Invalid=3]="Invalid",e}({});function G(){const e=W.ng;if(!e||!e.\u0275compilerFacade)throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");return e.\u0275compilerFacade}const K=C({"\u0275cmp":C}),Z=C({"\u0275dir":C}),Y=C({"\u0275pipe":C}),J=C({"\u0275mod":C}),X=C({"\u0275loc":C}),ee=C({"\u0275fac":C}),te=C({__NG_ELEMENT_ID__:C});class ne{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=S({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return`InjectionToken ${this._desc}`}}const re=new ne("INJECTOR",-1),oe={},ie=/\n/gm,se=C({provide:String,useValue:C});let ae,ce=void 0;function le(e){const t=ce;return ce=e,t}function ue(e){const t=ae;return ae=e,t}function de(e,t=x.Default){if(void 0===ce)throw new Error("inject() must be called from an injection context");return null===ce?ge(e,void 0,t):ce.get(e,t&x.Optional?null:void 0,t)}function he(e,t=x.Default){return(ae||de)(V(e),t)}function fe(e){throw new Error("invalid")}const pe=he;function ge(e,t,n){const r=D(e);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&x.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${F(e)}]`)}function me(e){const t=[];for(let n=0;n<e.length;n++){const r=V(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=x.Default;for(let t=0;t<r.length;t++){const o=r[t];o instanceof b||"Optional"===o.ngMetadataName||o===b?n|=x.Optional:o instanceof v||"SkipSelf"===o.ngMetadataName||o===v?n|=x.SkipSelf:o instanceof y||"Self"===o.ngMetadataName||o===y?n|=x.Self:e=o instanceof m||o===m?o.token:o}t.push(he(e,n))}else t.push(he(r))}return t}class be{get(e,t=oe){if(t===oe){const t=new Error(`NullInjectorError: No provider for ${F(e)}!`);throw t.name="NullInjectorError",t}return t}}const ye={"\u0275\u0275defineInjectable":S,"\u0275\u0275defineInjector":O,"\u0275\u0275inject":he,"\u0275\u0275getFactoryOf":function e(t){const n=t;if(B(t))return()=>{const t=e(V(n));return t?t():null};const r=D(n)||I(n);return r&&void 0!==r.factory?r.factory:null},"\u0275\u0275invalidFactoryDep":fe};class ve{}class _e{}function we(e,t){for(let n=0;n<e.length;n++)t.push(e[n])}function xe(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),xe(r,t)):t!==e&&t.push(r)}return t}function Ce(e,t){e.forEach(e=>Array.isArray(e)?Ce(e,t):t(e))}function Ee(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Se(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function ke(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}function Oe(e,t,n){let r=je(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function De(e,t){const n=je(e,t);if(n>=0)return e[1|n]}function je(e,t){return function(e,t,n){let r=0,o=e.length>>1;for(;o!==r;){const n=r+(o-r>>1),i=e[n<<1];if(t===i)return n<<1;i>t?o=n:r=n+1}return~(o<<1)}(e,t)}const Ie=function(){var e={OnPush:0,Default:1};return e[e.OnPush]="OnPush",e[e.Default]="Default",e}(),Ae=function(){var e={CheckOnce:0,Checked:1,CheckAlways:2,Detached:3,Errored:4,Destroyed:5};return e[e.CheckOnce]="CheckOnce",e[e.Checked]="Checked",e[e.CheckAlways]="CheckAlways",e[e.Detached]="Detached",e[e.Errored]="Errored",e[e.Destroyed]="Destroyed",e}();function Pe(e){return null==e||e===Ie.Default}const Te=function(){var e={Emulated:0,Native:1,None:2,ShadowDom:3};return e[e.Emulated]="Emulated",e[e.Native]="Native",e[e.None]="None",e[e.ShadowDom]="ShadowDom",e}(),Ne={},Re=[];let Fe=0;function Me(e){return c(()=>{const t=e.type,n=t.prototype,r={},o={type:t,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onChanges:null,onInit:n.ngOnInit||null,doCheck:n.ngDoCheck||null,afterContentInit:n.ngAfterContentInit||null,afterContentChecked:n.ngAfterContentChecked||null,afterViewInit:n.ngAfterViewInit||null,afterViewChecked:n.ngAfterViewChecked||null,onDestroy:n.ngOnDestroy||null,onPush:e.changeDetection===Ie.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||Re,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Te.Emulated,id:"c",styles:e.styles||Re,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.directives,s=e.features,a=e.pipes;return o.id+=Fe++,o.inputs=ze(e.inputs,r),o.outputs=ze(e.outputs),s&&s.forEach(e=>e(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map($e):null,o.pipeDefs=a?()=>("function"==typeof a?a():a).map(Ve):null,o})}function Le(e,t,n){const r=e.\u0275cmp;r.directiveDefs=()=>t.map($e),r.pipeDefs=()=>n.map(Ve)}function $e(e){return Qe(e)||Ge(e)}function Ve(e){return Ke(e)}const Be={};function He(e){const t={type:e.type,bootstrap:e.bootstrap||Re,declarations:e.declarations||Re,imports:e.imports||Re,exports:e.exports||Re,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&c(()=>{Be[e.id]=e.type}),t}function Ue(e,t){return c(()=>{const n=Ye(e,!0);n.declarations=t.declarations||Re,n.imports=t.imports||Re,n.exports=t.exports||Re})}function ze(e,t){if(null==e)return Ne;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const qe=Me;function We(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function Qe(e){return e[K]||null}function Ge(e){return e[Z]||null}function Ke(e){return e[Y]||null}function Ze(e,t){return e.hasOwnProperty(ee)?e[ee]:null}function Ye(e,t){const n=e[J]||null;if(!n&&!0===t)throw new Error(`Type ${F(e)} does not have '\u0275mod' property.`);return n}function Je(e){return Array.isArray(e)&&"object"==typeof e[1]}function Xe(e){return Array.isArray(e)&&!0===e[1]}function et(e){return 0!=(8&e.flags)}function tt(e){return 2==(2&e.flags)}function nt(e){return 1==(1&e.flags)}function rt(e){return null!==e.template}function ot(e){return 0!=(512&e[2])}let it=void 0;function st(e){it=e}function at(){return void 0!==it?it:"undefined"!=typeof document?document:void 0}function ct(e){return!!e.listen}const lt={createRenderer:(e,t)=>at()};function ut(e){for(;Array.isArray(e);)e=e[0];return e}function dt(e,t){return ut(t[e+19])}function ht(e,t){return ut(t[e.index])}function ft(e,t){const n=e.index;return-1!==n?ut(t[n]):null}function pt(e,t){return e.data[t+19]}function gt(e,t){return e[t+19]}function mt(e,t){const n=t[e];return Je(n)?n:n[0]}function bt(e){return e.__ngContext__||null}function yt(e){const t=bt(e);return t?Array.isArray(t)?t:t.lView:null}function vt(e){return 4==(4&e[2])}function _t(e){return 128==(128&e[2])}function wt(e,t){return null===e||null==t?null:e[t]}function xt(e){e[18]=0}function Ct(e){return e[2]>>1}const Et={lFrame:Gt(null),bindingsEnabled:!0,checkNoChangesMode:!1};function St(){return Et.bindingsEnabled}function kt(){Et.bindingsEnabled=!0}function Ot(){Et.bindingsEnabled=!1}function Dt(){return Et.lFrame.lView}function jt(){return Et.lFrame.tView}function It(e){Et.lFrame.contextLView=e}function At(){return Et.lFrame.previousOrParentTNode}function Pt(e,t){Et.lFrame.previousOrParentTNode=e,Et.lFrame.isParent=t}function Tt(){return Et.lFrame.isParent}function Nt(){Et.lFrame.isParent=!1}function Rt(){return Et.checkNoChangesMode}function Ft(e){Et.checkNoChangesMode=e}function Mt(){const e=Et.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function Lt(){return Et.lFrame.bindingIndex}function $t(e){return Et.lFrame.bindingIndex=e}function Vt(){return Et.lFrame.bindingIndex++}function Bt(e){const t=Et.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Ht(e,t){const n=Et.lFrame;n.bindingIndex=n.bindingRootIndex=e,n.currentDirectiveIndex=t}function Ut(){return Et.lFrame.currentQueryIndex}function zt(e){Et.lFrame.currentQueryIndex=e}function qt(e,t){const n=Qt();Et.lFrame=n,n.previousOrParentTNode=t,n.lView=e}function Wt(e,t){const n=Qt(),r=e[1];Et.lFrame=n,n.previousOrParentTNode=t,n.lView=e,n.tView=r,n.contextLView=e,n.bindingIndex=r.bindingStartIndex}function Qt(){const e=Et.lFrame,t=null===e?null:e.child;return null===t?Gt(e):t}function Gt(e){const t={previousOrParentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentSanitizer:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return null!==e&&(e.child=t),t}function Kt(){const e=Et.lFrame;return Et.lFrame=e.parent,e.previousOrParentTNode=null,e.lView=null,e}const Zt=Kt;function Yt(){const e=Kt();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.currentSanitizer=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function Jt(e){return(Et.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Et.lFrame.contextLView))[8]}function Xt(){return Et.lFrame.selectedIndex}function en(e){Et.lFrame.selectedIndex=e}function tn(){const e=Et.lFrame;return pt(e.tView,e.selectedIndex)}function nn(){Et.lFrame.currentNamespace="http://www.w3.org/2000/svg"}function rn(){Et.lFrame.currentNamespace="http://www.w3.org/1998/MathML/"}function on(){Et.lFrame.currentNamespace=null}function sn(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n];t.afterContentInit&&(e.contentHooks||(e.contentHooks=[])).push(-n,t.afterContentInit),t.afterContentChecked&&((e.contentHooks||(e.contentHooks=[])).push(n,t.afterContentChecked),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,t.afterContentChecked)),t.afterViewInit&&(e.viewHooks||(e.viewHooks=[])).push(-n,t.afterViewInit),t.afterViewChecked&&((e.viewHooks||(e.viewHooks=[])).push(n,t.afterViewChecked),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,t.afterViewChecked)),null!=t.onDestroy&&(e.destroyHooks||(e.destroyHooks=[])).push(n,t.onDestroy)}}function an(e,t,n){un(e,t,3,n)}function cn(e,t,n,r){(3&e[2])===n&&un(e,t,n,r)}function ln(e,t){let n=e[2];(3&n)===t&&(n&=1023,n+=1,e[2]=n)}function un(e,t,n,r){const o=null!=r?r:-1;let i=0;for(let s=void 0!==r?65535&e[18]:0;s<t.length;s++)if("number"==typeof t[s+1]){if(i=t[s],null!=r&&i>=r)break}else t[s]<0&&(e[18]+=65536),(i<o||-1==o)&&(dn(e,n,t,s),e[18]=(4294901760&e[18])+s+2),s++}function dn(e,t,n,r){const o=n[r]<0,i=n[r+1],s=e[o?-n[r]:n[r]];o?e[2]>>10<e[18]>>16&&(3&e[2])===t&&(e[2]+=1024,i.call(s)):i.call(s)}class hn{constructor(e,t,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=n}}function fn(e,t,n){const r=ct(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],c=n[o++];r?e.setAttribute(t,a,c,s):t.setAttributeNS(s,a,c)}else{const s=i,a=n[++o];gn(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function pn(e){return 3===e||4===e||6===e}function gn(e){return 64===e.charCodeAt(0)}function mn(e,t){if(null===t||0===t.length);else if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||bn(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function bn(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const n=e[i++];if("number"==typeof n){if(n===t){s=-1;break}if(n>t){s=i-1;break}}}for(;i<e.length;){const t=e[i];if("number"==typeof t)break;if(t===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}function yn(e){return-1!==e}function vn(e){return 32767&e}function _n(e){return e>>16}function wn(e,t){let n=_n(e),r=t;for(;n>0;)r=r[15],n--;return r}function xn(e){return"string"==typeof e?e:null==e?"":""+e}function Cn(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():xn(e)}const En=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(W))();function Sn(e){return{name:"window",target:e.ownerDocument.defaultView}}function kn(e){return{name:"document",target:e.ownerDocument}}function On(e){return{name:"body",target:e.ownerDocument.body}}function Dn(e){return e instanceof Function?e():e}let jn=!0;function In(e){const t=jn;return jn=e,t}let An=0;function Pn(e,t){const n=Nn(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Tn(r.data,e),Tn(t,null),Tn(r.blueprint,null));const o=Rn(e,t),i=e.injectorIndex;if(yn(o)){const e=vn(o),n=wn(o,t),r=n[1].data;for(let o=0;o<8;o++)t[i+o]=n[e+o]|r[e+o]}return t[i+8]=o,i}function Tn(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Nn(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null==t[e.injectorIndex+8]?-1:e.injectorIndex}function Rn(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=t[6],r=1;for(;n&&-1===n.injectorIndex;)n=(t=t[15])?t[6]:null,r++;return n?n.injectorIndex|r<<16:-1}function Fn(e,t,n){!function(e,t,n){let r="string"!=typeof n?n[te]:n.charCodeAt(0)||0;null==r&&(r=n[te]=An++);const o=255&r,i=1<<o,s=64&o,a=32&o,c=t.data;128&o?s?a?c[e+7]|=i:c[e+6]|=i:a?c[e+5]|=i:c[e+4]|=i:s?a?c[e+3]|=i:c[e+2]|=i:a?c[e+1]|=i:c[e]|=i}(e,t,n)}function Mn(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const e=n.length;let r=0;for(;r<e;){const o=n[r];if(pn(o))break;if(0===o)r+=2;else if("number"==typeof o)for(r++;r<e&&"string"==typeof n[r];)r++;else{if(o===t)return n[r+1];r+=2}}}return null}function Ln(e,t,n,r=x.Default,o){if(null!==e){const o=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e[te];return"number"==typeof t&&t>0?255&t:t}(n);if("function"==typeof o){qt(t,e);try{const e=o();if(null!=e||r&x.Optional)return e;throw new Error(`No provider for ${Cn(n)}!`)}finally{Zt()}}else if("number"==typeof o){if(-1===o)return new qn(e,t);let i=null,s=Nn(e,t),a=-1,c=r&x.Host?t[16][6]:null;for((-1===s||r&x.SkipSelf)&&(a=-1===s?Rn(e,t):t[s+8],zn(r,!1)?(i=t[1],s=vn(a),t=wn(a,t)):s=-1);-1!==s;){a=t[s+8];const e=t[1];if(Un(o,s,e.data)){const e=Vn(s,t,n,i,r,c);if(e!==$n)return e}zn(r,t[1].data[s+8]===c)&&Un(o,s,t)?(i=e,s=vn(a),t=wn(a,t)):s=-1}}}if(r&x.Optional&&void 0===o&&(o=null),0==(r&(x.Self|x.Host))){const e=t[9],i=ue(void 0);try{return e?e.get(n,o,r&x.Optional):ge(n,o,r&x.Optional)}finally{ue(i)}}if(r&x.Optional)return o;throw new Error(`NodeInjector: NOT_FOUND [${Cn(n)}]`)}const $n={};function Vn(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=Bn(a,s,n,null==r?tt(a)&&jn:r!=s&&3===a.type,o&x.Host&&i===a);return null!==c?Hn(t,s,c,a):$n}function Bn(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=65535&i,c=e.directiveStart,l=i>>16,u=o?a+l:e.directiveEnd;for(let d=r?a:a+l;d<u;d++){const e=s[d];if(d<c&&n===e||d>=c&&e.type===n)return d}if(o){const e=s[c];if(e&&rt(e)&&e.type===n)return c}return null}function Hn(e,t,n,r){let o=e[n];const i=t.data;if(o instanceof hn){const s=o;if(s.resolving)throw new Error(`Circular dep for ${Cn(i[n])}`);const a=In(s.canSeeViewProviders);let c;s.resolving=!0,s.injectImpl&&(c=ue(s.injectImpl)),qt(e,r);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&function(e,t,n){const{onChanges:r,onInit:o,doCheck:i}=t;r&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)),o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{s.injectImpl&&ue(c),In(a),s.resolving=!1,Zt()}}return o}function Un(e,t,n){const r=64&e,o=32&e;let i;return i=128&e?r?o?n[t+7]:n[t+6]:o?n[t+5]:n[t+4]:r?o?n[t+3]:n[t+2]:o?n[t+1]:n[t],!!(i&1<<e)}function zn(e,t){return!(e&x.Self||e&x.Host&&t)}class qn{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return Ln(this._tNode,this._lView,e,void 0,t)}}function Wn(e){const t=e;if(B(e))return()=>{const e=Wn(V(t));return e?e():null};let n=Ze(t);if(null===n){const e=I(t);n=e&&e.factory}return n||null}function Qn(e){return c(()=>{const t=Object.getPrototypeOf(e.prototype).constructor,n=t[ee]||Wn(t);return null!==n?n:e=>new e})}function Gn(e){return e.ngDebugContext}function Kn(e){return e.ngOriginalError}function Zn(e,...t){e.error(...t)}class Yn{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||Zn}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?Gn(e)?Gn(e):this._findContext(Kn(e)):null}_findOriginalError(e){let t=Kn(e);for(;t&&Kn(t);)t=Kn(t);return t}}const Jn={name:"custom-elements"},Xn={name:"no-errors-schema"};class er{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`+" (see http://g.co/ng/security#xss)"}}class tr extends er{getTypeName(){return"HTML"}}class nr extends er{getTypeName(){return"Style"}}class rr extends er{getTypeName(){return"Script"}}class or extends er{getTypeName(){return"URL"}}class ir extends er{getTypeName(){return"ResourceURL"}}function sr(e){return e instanceof er?e.changingThisBreaksApplicationSecurity:e}function ar(e,t){const n=cr(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see http://g.co/ng/security#xss)`)}return n===t}function cr(e){return e instanceof er&&e.getTypeName()||null}function lr(e){return new tr(e)}function ur(e){return new nr(e)}function dr(e){return new rr(e)}function hr(e){return new or(e)}function fr(e){return new ir(e)}let pr=!0,gr=!1;function mr(){return gr=!0,pr}function br(){if(gr)throw new Error("Cannot enable prod mode after platform setup.");pr=!1}class yr{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");let t=this.inertDocument.body;if(null==t){const e=this.inertDocument.createElement("html");this.inertDocument.appendChild(e),t=this.inertDocument.createElement("body"),e.appendChild(t)}t.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',!t.querySelector||t.querySelector("svg")?(t.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',this.getInertBodyElement=t.querySelector&&t.querySelector("svg img")&&function(){try{return!!window.DOMParser}catch(e){return!1}}()?this.getInertBodyElement_DOMParser:this.getInertBodyElement_InertDocument):this.getInertBodyElement=this.getInertBodyElement_XHR}getInertBodyElement_XHR(e){e="<body><remove></remove>"+e+"</body>";try{e=encodeURI(e)}catch(r){return null}const t=new XMLHttpRequest;t.responseType="document",t.open("GET","data:text/html;charset=utf-8,"+e,!1),t.send(void 0);const n=t.response.body;return n.removeChild(n.firstChild),n}getInertBodyElement_DOMParser(e){e="<body><remove></remove>"+e+"</body>";try{const t=(new window.DOMParser).parseFromString(e,"text/html").body;return t.removeChild(t.firstChild),t}catch(t){return null}}getInertBodyElement_InertDocument(e){const t=this.inertDocument.createElement("template");if("content"in t)return t.innerHTML=e,t;const n=this.inertDocument.createElement("body");return n.innerHTML=e,this.defaultDoc.documentMode&&this.stripCustomNsAttrs(n),n}stripCustomNsAttrs(e){const t=e.attributes;for(let r=t.length-1;0<r;r--){const n=t.item(r).name;"xmlns:ns1"!==n&&0!==n.indexOf("ns1:")||e.removeAttribute(n)}let n=e.firstChild;for(;n;)n.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(n),n=n.nextSibling}}const vr=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,_r=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function wr(e){return(e=String(e)).match(vr)||e.match(_r)?e:(mr()&&console.warn(`WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`),"unsafe:"+e)}function xr(e){return(e=String(e)).split(",").map(e=>wr(e.trim())).join(", ")}function Cr(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function Er(...e){const t={};for(const n of e)for(const e in n)n.hasOwnProperty(e)&&(t[e]=!0);return t}const Sr=Cr("area,br,col,hr,img,wbr"),kr=Cr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Or=Cr("rp,rt"),Dr=Er(Or,kr),jr=Er(Sr,Er(kr,Cr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Er(Or,Cr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Dr),Ir=Cr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Ar=Cr("srcset"),Pr=Er(Ir,Ar,Cr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Cr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),Tr=Cr("script,style,template");class Nr{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let t=e.firstChild,n=!0;for(;t;)if(t.nodeType===Node.ELEMENT_NODE?n=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,n&&t.firstChild)t=t.firstChild;else for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let e=this.checkClobberedElement(t,t.nextSibling);if(e){t=e;break}t=this.checkClobberedElement(t,t.parentNode)}return this.buf.join("")}startElement(e){const t=e.nodeName.toLowerCase();if(!jr.hasOwnProperty(t))return this.sanitizedSomething=!0,!Tr.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);const n=e.attributes;for(let r=0;r<n.length;r++){const e=n.item(r),t=e.name,o=t.toLowerCase();if(!Pr.hasOwnProperty(o)){this.sanitizedSomething=!0;continue}let i=e.value;Ir[o]&&(i=wr(i)),Ar[o]&&(i=xr(i)),this.buf.push(" ",t,'="',Mr(i),'"')}return this.buf.push(">"),!0}endElement(e){const t=e.nodeName.toLowerCase();jr.hasOwnProperty(t)&&!Sr.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(Mr(e))}checkClobberedElement(e,t){if(t&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return t}}const Rr=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Fr=/([^\#-~ |!])/g;function Mr(e){return e.replace(/&/g,"&amp;").replace(Rr,(function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"})).replace(Fr,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let Lr;function $r(e,t){let n=null;try{Lr=Lr||new yr(e);let r=t?String(t):"";n=Lr.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=Lr.getInertBodyElement(r)}while(r!==i);const s=new Nr,a=s.sanitizeChildren(Vr(n)||n);return mr()&&s.sanitizedSomething&&console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"),a}finally{if(n){const e=Vr(n)||n;for(;e.firstChild;)e.removeChild(e.firstChild)}}}function Vr(e){return"content"in e&&function(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}(e)?e.content:null}const Br=function(){var e={NONE:0,HTML:1,STYLE:2,SCRIPT:3,URL:4,RESOURCE_URL:5};return e[e.NONE]="NONE",e[e.HTML]="HTML",e[e.STYLE]="STYLE",e[e.SCRIPT]="SCRIPT",e[e.URL]="URL",e[e.RESOURCE_URL]="RESOURCE_URL",e}(),Hr=new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$","g"),Ur=/^url\(([^)]+)\)$/;function zr(e){if(!(e=String(e).trim()))return"";const t=e.match(Ur);return t&&wr(t[1])===t[1]||e.match(Hr)&&function(e){let t=!0,n=!0;for(let r=0;r<e.length;r++){const o=e.charAt(r);"'"===o&&n?t=!t:'"'===o&&t&&(n=!n)}return t&&n}(e)?e:(mr()&&console.warn(`WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`),"unsafe")}function qr(e){const t=eo();return t?t.sanitize(Br.HTML,e)||"":ar(e,"HTML")?sr(e):$r(at(),xn(e))}function Wr(e){const t=eo();return t?t.sanitize(Br.STYLE,e)||"":ar(e,"Style")?sr(e):zr(xn(e))}function Qr(e){const t=eo();return t?t.sanitize(Br.URL,e)||"":ar(e,"URL")?sr(e):wr(xn(e))}function Gr(e){const t=eo();if(t)return t.sanitize(Br.RESOURCE_URL,e)||"";if(ar(e,"ResourceURL"))return sr(e);throw new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)")}function Kr(e){const t=eo();if(t)return t.sanitize(Br.SCRIPT,e)||"";if(ar(e,"Script"))return sr(e);throw new Error("unsafe value used in a script context")}function Zr(e,t){return"src"===t&&("embed"===e||"frame"===e||"iframe"===e||"media"===e||"script"===e)||"href"===t&&("base"===e||"link"===e)?Gr:Qr}function Yr(e,t,n){return Zr(t,n)(e)}const Jr=function(e,t,n){if(void 0===t&&void 0===n)return Wr(e);let r=!0;return 1&(n=n||3)&&(r=Xr(e)),2&n?r?Wr(t):sr(t):r};function Xr(e){return"background-image"===e||"backgroundImage"===e||"background"===e||"border-image"===e||"borderImage"===e||"border-image-source"===e||"borderImageSource"===e||"filter"===e||"list-style"===e||"listStyle"===e||"list-style-image"===e||"listStyleImage"===e||"clip-path"===e||"clipPath"===e}function eo(){const e=Dt();return e&&e[12]}const to=/([A-Z])/g;function no(e){try{return null!=e?e.toString().slice(0,30):e}catch(t){return"[ERROR] Exception while trying to serialize the value"}}function ro(e){let t=bt(e);if(t){if(Array.isArray(t)){const r=t;let o,i=void 0,s=void 0;if((n=e)&&n.constructor&&n.constructor.\u0275cmp){if(o=lo(r,e),-1==o)throw new Error("The provided component was not found in the application");i=e}else if(function(e){return e&&e.constructor&&e.constructor.\u0275dir}(e)){if(o=function(e,t){let n=e[1].firstChild;for(;n;){const r=n.directiveEnd;for(let o=n.directiveStart;o<r;o++)if(e[o]===t)return n.index;n=co(n)}return-1}(r,e),-1==o)throw new Error("The provided directive was not found in the application");s=uo(o,r,!1)}else if(o=ao(r,e),-1==o)return null;const a=ut(r[o]),c=bt(a),l=c&&!Array.isArray(c)?c:oo(r,o,a);if(i&&void 0===l.component&&(l.component=i,so(l.component,l)),s&&void 0===l.directives){l.directives=s;for(let e=0;e<s.length;e++)so(s[e],l)}so(l.native,l),t=l}}else{const n=e;let r=n;for(;r=r.parentNode;){const e=bt(r);if(e){let r;if(r=Array.isArray(e)?e:e.lView,!r)return null;const o=ao(r,n);if(o>=0){const e=ut(r[o]),n=oo(r,o,e);so(e,n),t=n;break}}}}var n;return t||null}function oo(e,t,n){return{lView:e,nodeIndex:t,native:n,component:void 0,directives:void 0,localRefs:void 0}}function io(e){let t,n=bt(e);if(Array.isArray(n)){const r=lo(n,e);t=mt(r,n);const o=oo(n,r,t[0]);o.component=e,so(e,o),so(o.native,o)}else t=mt(n.nodeIndex,n.lView);return t}function so(e,t){e.__ngContext__=t}function ao(e,t){let n=e[1].firstChild;for(;n;){if(ft(n,e)===t)return n.index;n=co(n)}return-1}function co(e){if(e.child)return e.child;if(e.next)return e.next;for(;e.parent&&!e.parent.next;)e=e.parent;return e.parent&&e.parent.next}function lo(e,t){const n=e[1].components;if(n)for(let r=0;r<n.length;r++){const o=n[r];if(mt(o,e)[8]===t)return o}else if(mt(19,e)[8]===t)return 19;return-1}function uo(e,t,n){const r=t[1].data[e];let o=r.directiveStart;return 0==o?Re:(!n&&2&r.flags&&o++,t.slice(o,r.directiveEnd))}function ho(e){throw new Error(`Multiple components match node with tagname ${e.tagName}`)}function fo(){throw new Error("Cannot mix multi providers and regular providers")}function po(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const n=t.length;if(o+n===r||e.charCodeAt(o+n)<=32)return o}n=o+1}}function go(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==po(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function mo(e,t,n){return t===(0!==e.type||n?e.tagName:"ng-template")}function bo(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(pn(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const c=t[a];if("number"!=typeof c){if(!s)if(4&r){if(r=2|1&r,""!==c&&!mo(e,c,n)||""===c&&1===t.length){if(yo(r))return!1;s=!0}}else{const l=8&r?c:t[++a];if(8&r&&null!==e.attrs){if(!go(e.attrs,l,n)){if(yo(r))return!1;s=!0}continue}const u=vo(8&r?"class":c,o,0==e.type&&"ng-template"!==e.tagName,n);if(-1===u){if(yo(r))return!1;s=!0;continue}if(""!==l){let e;e=u>i?"":o[u+1].toLowerCase();const t=8&r?e:null;if(t&&-1!==po(t,l,0)||2&r&&l!==e){if(yo(r))return!1;s=!0}}}}else{if(!s&&!yo(r)&&!yo(c))return!1;if(s&&yo(c))continue;s=!1,r=c|1&r}}return yo(r)||s}function yo(e){return 0==(1&e)}function vo(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let n=!1;for(;o<t.length;){const r=t[o];if(r===e)return o;if(3===r||6===r)n=!0;else{if(1===r||2===r){let e=t[++o];for(;"string"==typeof e;)e=t[++o];continue}if(4===r)break;if(0===r){o+=4;continue}}o+=n?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){if(e[n]===t)return n;n++}return-1}(t,e)}function _o(e,t,n=!1){for(let r=0;r<t.length;r++)if(bo(e,t[r],n))return!0;return!1}function wo(e,t){e:for(let n=0;n<t.length;n++){const r=t[n];if(e.length===r.length){for(let t=0;t<e.length;t++)if(e[t]!==r[t])continue e;return!0}}return!1}function xo(e,t){return e?":not("+t.trim()+")":t}function Co(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const t=e[++n];o+="["+s+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||yo(s)||(t+=xo(i,o),o=""),r=s,i=i||!yo(r);n++}return""!==o&&(t+=xo(i,o)),t}const Eo={};function So(e){const t=e[3];return Xe(t)?t[3]:t}function ko(e){return function(e){let t=Je(e)?e:yt(e);for(;t&&!(512&t[2]);)t=So(t);return t}(e)[8]}function Oo(e){jo(jt(),Dt(),Xt()+e,Rt())}function Do(e){jo(jt(),Dt(),e,Rt())}function jo(e,t,n,r){if(!r)if(3==(3&t[2])){const r=e.preOrderCheckHooks;null!==r&&an(t,r,n)}else{const r=e.preOrderHooks;null!==r&&cn(t,r,0,n)}en(n)}const Io={marker:"element"},Ao={marker:"comment"};function Po(e,t){return e<<17|t<<2}function To(e){return e>>17&32767}function No(e){return 2|e}function Ro(e){return(131068&e)>>2}function Fo(e,t){return-131069&e|t<<2}function Mo(e){return 1|e}const Lo=(()=>Promise.resolve(null))();function $o(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=e.data[i];zt(o),n.contentQueries(2,t[i],i)}}}function Vo(e,t,n){return ct(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Bo(e,t,n,r,o,i,s,a,c,l){const u=t.blueprint.slice();return u[0]=o,u[2]=140|r,xt(u),u[3]=u[15]=e,u[8]=n,u[10]=s||e&&e[10],u[11]=a||e&&e[11],u[12]=c||e&&e[12]||null,u[9]=l||e&&e[9]||null,u[6]=i,u[16]=2==t.type?e[16]:u,u}function Ho(e,t,n,r,o,i){const s=n+19,a=e.data[s]||function(e,t,n,r,o,i){const s=At(),a=Tt(),c=a?s:s&&s.parent,l=e.data[n]=ei(0,c&&c!==t?c:null,r,n,o,i);return null===e.firstChild&&(e.firstChild=l),s&&(!a||null!=s.child||null===l.parent&&2!==s.type?a||(s.next=l):s.child=l),l}(e,t,s,r,o,i);return Pt(a,!0),a}function Uo(e,t,n,r){let o=e.node;return null==o&&(e.node=o=ei(0,t,2,n,null,null)),r[6]=o}function zo(e,t,n){Wt(t,t[6]);try{const r=e.viewQuery;null!==r&&Si(1,r,n);const o=e.template;null!==o&&Qo(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&$o(e,t),e.staticViewQueries&&Si(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)vi(e,t[n])}(t,i)}finally{t[2]&=-5,Yt()}}function qo(e,t,n,r){const o=t[2];if(256==(256&o))return;Wt(t,t[6]);const i=Rt();try{xt(t),$t(e.bindingStartIndex),null!==n&&Qo(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const n=e.preOrderCheckHooks;null!==n&&an(t,n,null)}else{const n=e.preOrderHooks;null!==n&&cn(t,n,0,null),ln(t,0)}if(function(e){let t=e[13];for(;null!==t;){let n;if(Xe(t)&&(n=t[2])>>1==-1){for(let e=9;e<t.length;e++){const n=t[e],r=n[1];_t(n)&&qo(r,n,r.template,n[8])}0!=(1&n)&&bi(t,e[16])}t=t[4]}}(t),null!==e.contentQueries&&$o(e,t),!i)if(s){const n=e.contentCheckHooks;null!==n&&an(t,n)}else{const n=e.contentHooks;null!==n&&cn(t,n,1),ln(t,1)}!function(e,t){try{const n=e.expandoInstructions;if(null!==n){let r=e.expandoStartIndex,o=-1,i=-1;for(let e=0;e<n.length;e++){const s=n[e];"number"==typeof s?s<=0?(i=0-s,en(i),r+=9+n[++e],o=r):r+=s:(null!==s&&(Ht(r,o),s(2,t[o])),o++)}}}finally{en(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)yi(e,t[n])}(t,a);const c=e.viewQuery;if(null!==c&&Si(2,c,r),!i)if(s){const n=e.viewCheckHooks;null!==n&&an(t,n)}else{const n=e.viewHooks;null!==n&&cn(t,n,2),ln(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73)}finally{Yt()}}function Wo(e,t,n,r){const o=t[10],i=!Rt(),s=vt(t);try{i&&!s&&o.begin&&o.begin(),s&&zo(e,t,r),qo(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Qo(e,t,n,r,o){const i=Xt();try{en(-1),2&r&&t.length>19&&jo(e,t,0,Rt()),n(r,o)}finally{en(i)}}function Go(e,t,n){if(et(t)){const r=t.directiveEnd;for(let o=t.directiveStart;o<r;o++){const t=e.data[o];t.contentQueries&&t.contentQueries(1,n[o],o)}}}function Ko(e,t,n){St()&&(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Pn(n,t),so(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const r=e.data[a],i=rt(r);i&&hi(t,n,r);const c=Hn(t,e,a,n);so(c,t),null!==s&&pi(0,a-o,c,r,0,s),i&&(mt(n.index,t)[8]=c)}}(e,t,n,ht(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=e.expandoInstructions,s=e.firstCreatePass,a=n.index-19;try{en(a);for(let n=r;n<o;n++){const r=e.data[n],o=t[n];null!==r.hostBindings||0!==r.hostVars||null!==r.hostAttrs?si(r,o):s&&i.push(null)}}finally{en(-1)}}(e,t,n))}function Zo(e,t,n=ht){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Yo(e){return e.tView||(e.tView=Jo(1,-1,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts))}function Jo(e,t,n,r,o,i,s,a,c,l){const u=19+r,d=u+o,h=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Eo);return n}(u,d);return h[1]={type:e,id:t,blueprint:h,template:n,queries:null,viewQuery:a,node:null,data:h.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:d,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:c,consts:l}}function Xo(e,t,n){if(ct(e))return e.selectRootElement(t,n===Te.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}function ei(e,t,n,r,o,i){return{type:n,index:r,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,residualStyles:void 0,classes:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function ti(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function ni(e,t,n,r,o,i,s,a){const c=ht(t,n);let l,u=t.inputs;var d;!a&&null!=u&&(l=u[r])?(Ai(e,n,l,r,o),tt(t)&&function(e,t){const n=mt(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3===t.type&&(r="class"===(d=r)?"className":"for"===d?"htmlFor":"formaction"===d?"formAction":"innerHtml"===d?"innerHTML":"readonly"===d?"readOnly":"tabindex"===d?"tabIndex":d,o=null!=s?s(o,t.tagName||"",r):o,ct(i)?i.setProperty(c,r,o):gn(r)||(c.setProperty?c.setProperty(r,o):c[r]=o))}function ri(e,t,n,r){let o=!1;if(St()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];_o(n,s.selectors,!1)&&(o||(o=[]),Fn(Pn(n,t),e,s.type),rt(s)?(2&n.flags&&ho(n),ci(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){let r=0;o=!0,ui(n,e.data.length,i.length);for(let e=0;e<i.length;e++){const t=i[e];t.providersResolver&&t.providersResolver(t)}ai(e,n,i.length);let a=!1,c=!1;for(let o=0;o<i.length;o++){const l=i[o];n.mergedAttrs=mn(n.mergedAttrs,l.hostAttrs),di(e,t,l),li(e.data.length-1,l,s),null!==l.contentQueries&&(n.flags|=8),null===l.hostBindings&&null===l.hostAttrs&&0===l.hostVars||(n.flags|=128),!a&&(l.onChanges||l.onInit||l.doCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index-19),a=!0),c||!l.onChanges&&!l.doCheck||((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index-19),c=!0),oi(e,l),r+=l.hostVars}!function(e,t){const n=t.directiveEnd,r=e.data,o=t.attrs,i=[];let s=null,a=null;for(let c=t.directiveStart;c<n;c++){const e=r[c],t=e.inputs;i.push(null!==o?gi(t,o):null),s=ti(t,c,s),a=ti(e.outputs,c,a)}null!==s&&(s.hasOwnProperty("class")&&(t.flags|=16),s.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=i,t.inputs=s,t.outputs=a}(e,n),ii(e,t,r)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let e=0;e<t.length;e+=2){const o=n[t[e+1]];if(null==o)throw new Error(`Export of name '${t[e+1]}' not found!`);r.push(t[e],o)}}}(n,r,s)}return n.mergedAttrs=mn(n.mergedAttrs,n.attrs),o}function oi(e,t){const n=e.expandoInstructions;n.push(t.hostBindings),0!==t.hostVars&&n.push(t.hostVars)}function ii(e,t,n){for(let r=0;r<n;r++)t.push(Eo),e.blueprint.push(Eo),e.data.push(null)}function si(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function ai(e,t,n){const r=19-t.index,o=e.data.length-(65535&t.providerIndexes);(e.expandoInstructions||(e.expandoInstructions=[])).push(r,o,n)}function ci(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function li(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;rt(t)&&(n[""]=e)}}function ui(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function di(e,t,n){e.data.push(n);const r=n.factory||(n.factory=Ze(n.type)),o=new hn(r,rt(n),null);e.blueprint.push(o),t.push(o)}function hi(e,t,n){const r=ht(t,e),o=Yo(n),i=e[10],s=_i(e,Bo(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n)));e[t.index]=s}function fi(e,t,n,r,o,i){const s=ht(e,t),a=t[11];if(null==r)ct(a)?a.removeAttribute(s,n,i):s.removeAttribute(n);else{const t=null==o?xn(r):o(r,e.tagName||"",n);ct(a)?a.setAttribute(s,n,t,i):i?s.setAttributeNS(i,n,t):s.setAttribute(n,t)}}function pi(e,t,n,r,o,i){const s=i[t];if(null!==s){const e=r.setInput;for(let t=0;t<s.length;){const o=s[t++],i=s[t++],a=s[t++];null!==e?r.setInput(n,a,o,i):n[i]=a}}}function gi(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function mi(e,t,n,r){return new Array(e,!0,-2,t,null,null,r,n,null)}function bi(e,t){const n=e[5];for(let r=0;r<n.length;r++){const e=n[r],o=e[3][3][16];if(o!==t&&0==(16&o[2])){const t=e[1];qo(t,e,t.template,e[8])}}}function yi(e,t){const n=mt(t,e);if(_t(n)&&80&n[2]){const e=n[1];qo(e,n,e.template,n[8])}}function vi(e,t){const n=mt(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),zo(r,n,n[8])}function _i(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function wi(e){for(;e;){e[2]|=64;const t=So(e);if(ot(e)&&!t)return e;e=t}return null}function xi(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=yt(n),o=r[1];Wo(o,r,o.template,n)}}function Ci(e,t,n){const r=t[10];r.begin&&r.begin();try{qo(e,t,e.template,n)}catch(o){throw Ii(t,o),o}finally{r.end&&r.end()}}function Ei(e){xi(e[8])}function Si(e,t,n){zt(0),t(e,n)}const ki=Lo;function Oi(e){return e[7]||(e[7]=[])}function Di(e){return e.cleanup||(e.cleanup=[])}function ji(e,t){return function(e){for(;Array.isArray(e);){if("object"==typeof e[1])return e;e=e[0]}return null}(t[e.index])[11]}function Ii(e,t){const n=e[9],r=n?n.get(Yn,null):null;r&&r.handleError(t)}function Ai(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],c=t[s],l=e.data[s];null!==l.setInput?l.setInput(c,o,r,a):c[a]=o}}function Pi(e,t,n){const r=dt(t,e),o=e[11];ct(o)?o.setValue(r,n):r.textContent=n}function Ti(e,t){const n=t[3];return-1===e.index?Xe(n)?n:null:n}function Ni(e,t){const n=Ti(e,t);return n?Ki(t[11],n[7]):null}function Ri(e,t,n,r,o){if(null!=r){let i,s=!1;Xe(r)?i=r:Je(r)&&(s=!0,r=r[0]);const a=ut(r);0===e&&null!==n?null==o?Qi(t,n,a):Wi(t,n,a,o||null):1===e&&null!==n?Wi(t,n,a,o||null):2===e?Xi(t,a,s):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,r,o){const i=n[7];i!==ut(n)&&Ri(t,e,r,i,o);for(let s=9;s<n.length;s++){const o=n[s];ts(o[1],o,e,t,r,i)}}(t,e,i,n,o)}}function Fi(e,t){return ct(t)?t.createText(e):t.createTextNode(e)}function Mi(e,t,n,r){const o=Ni(e.node,t);o&&ts(e,t,t[11],n?1:2,o,r)}function Li(e,t,n,r){const o=9+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-9?(t[4]=n[o],Ee(n,9+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[5],r=t[3][3][16];16!=(16&r[2])&&t[16]!==r&&(e[2]|=1),null===n?e[5]=[t]:n.push(t)}(s,t);const a=t[5];null!==a&&a.insertView(e),t[2]|=128}function $i(e,t){const n=e[5],r=n.indexOf(t);n.splice(r,1)}function Vi(e,t){if(e.length<=9)return;const n=9+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&$i(o,r),t>0&&(e[n-1][4]=r[4]);const i=Se(e,9+t);Mi(r[1],r,!1,null);const s=i[5];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Bi(e,t){const n=Vi(e,t);n&&Hi(n[1],n)}function Hi(e,t){if(!(256&t[2])){const n=t[11];ct(n)&&n.destroyNode&&ts(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return zi(e[1],e);for(;t;){let n=null;if(Je(t))n=t[13];else{const e=t[9];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)Je(t)&&zi(t[1],t),t=Ui(t,e);null===t&&(t=e),Je(t)&&zi(t[1],t),n=t&&t[4]}t=n}}(t)}}function Ui(e,t){let n;return Je(e)&&(n=e[6])&&2===n.type?Ti(n,e):e[3]===t?null:e[3]}function zi(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const e=t[n[r]];if(!(e instanceof hn)){const t=n[r+1];if(Array.isArray(t))for(let n=0;n<t.length;n+=2)t[n+1].call(e[t[n]]);else t.call(e)}}}(e,t),function(e,t){const n=e.cleanup;if(null!==n){const e=t[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const o=n[r+1],i="function"==typeof o?o(t):ut(t[o]),s=e[n[r+2]],a=n[r+3];"boolean"==typeof a?i.removeEventListener(n[r],s,a):a>=0?e[a]():e[-a].unsubscribe(),r+=2}else n[r].call(e[n[r+1]]);t[7]=null}}(e,t);const n=t[6];n&&3===n.type&&ct(t[11])&&t[11].destroy();const r=t[17];if(null!==r&&Xe(t[3])){r!==t[3]&&$i(r,t);const n=t[5];null!==n&&n.detachView(e)}}}function qi(e,t,n){let r=t.parent;for(;null!=r&&(4===r.type||5===r.type);)r=(t=r).parent;if(null==r){const e=n[6];return 2===e.type?Ni(e,n):n[0]}if(t&&5===t.type&&4&t.flags)return ht(t,n).parentNode;if(2&r.flags){const t=e.data,n=t[t[r.index].directiveStart].encapsulation;if(n!==Te.ShadowDom&&n!==Te.Native)return null}return ht(r,n)}function Wi(e,t,n,r){ct(e)?e.insertBefore(t,n,r):t.insertBefore(n,r,!0)}function Qi(e,t,n){ct(e)?e.appendChild(t,n):t.appendChild(n)}function Gi(e,t,n,r){null!==r?Wi(e,t,n,r):Qi(e,t,n)}function Ki(e,t){return ct(e)?e.parentNode(t):t.parentNode}function Zi(e,t){if(2===e.type){const n=Ti(e,t);return null===n?null:Ji(n.indexOf(t,9)-9,n)}return 4===e.type||5===e.type?ht(e,t):null}function Yi(e,t,n,r){const o=qi(e,r,t);if(null!=o){const e=t[11],i=Zi(r.parent||t[6],t);if(Array.isArray(n))for(let t=0;t<n.length;t++)Gi(e,o,n[t],i);else Gi(e,o,n,i)}}function Ji(e,t){const n=9+e+1;if(n<t.length){const e=t[n],r=e[1].firstChild;if(null!==r)return function e(t,n){if(null!==n){const r=n.type;if(3===r)return ht(n,t);if(0===r)return Ji(-1,t[n.index]);if(4===r||5===r){const r=n.child;if(null!==r)return e(t,r);{const e=t[n.index];return Xe(e)?Ji(-1,e):ut(e)}}{const r=t[16],o=r[6],i=So(r),s=o.projection[n.projection];return null!=s?e(i,s):e(t,n.next)}}return null}(e,r)}return t[7]}function Xi(e,t,n){const r=Ki(e,t);r&&function(e,t,n,r){ct(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}function es(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],c=n.type;s&&0===t&&(a&&so(ut(a),r),n.flags|=4),64!=(64&n.flags)&&(4===c||5===c?(es(e,t,n.child,r,o,i,!1),Ri(t,e,o,a,i)):1===c?rs(e,t,r,n,o,i):Ri(t,e,o,a,i)),n=s?n.projectionNext:n.next}}function ts(e,t,n,r,o,i){es(n,r,e.node.child,t,o,i,!1)}function ns(e,t,n){rs(t[11],0,t,n,qi(e,n,t),Zi(n.parent||t[6],t))}function rs(e,t,n,r,o,i){const s=n[16],a=s[6].projection[r.projection];if(Array.isArray(a))for(let c=0;c<a.length;c++)Ri(t,e,o,a[c],i);else es(e,t,a,s[3],o,i,!0)}function os(e,t,n){ct(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function is(e,t,n){ct(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}class ss{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._viewContainerRef=null,this._tViewNode=null}get rootNodes(){const e=this._lView;return null==e[0]?function e(t,n,r,o,i=!1){for(;null!==r;){const s=n[r.index];if(null!==s&&o.push(ut(s)),Xe(s))for(let t=9;t<s.length;t++){const n=s[t],r=n[1].firstChild;null!==r&&e(n[1],n,r,o)}const a=r.type;if(4===a||5===a)e(t,n,r.child,o);else if(1===a){const t=n[16],i=t[6],s=So(t);let a=i.projection[r.projection];null!==a&&null!==s&&e(s[1],s,a,o,!0)}r=i?r.projectionNext:r.next}return o}(e[1],e,e[6].child,[]):[]}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}Hi(this._lView[1],this._lView)}onDestroy(e){var t,n,r;t=this._lView[1],r=e,Oi(n=this._lView).push(r),t.firstCreatePass&&Di(t).push(n[7].length-1,null)}markForCheck(){wi(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Ci(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){Ft(!0);try{Ci(e,t,n)}finally{Ft(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e;this._appRef=null,ts(this._lView[1],e=this._lView,e[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class as extends ss{constructor(e){super(e),this._view=e}detectChanges(){Ei(this._view)}checkNoChanges(){!function(e){Ft(!0);try{Ei(e)}finally{Ft(!1)}}(this._view)}get context(){return null}}let cs,ls,us;function ds(e,t,n){return cs||(cs=class extends e{}),new cs(ht(t,n))}function hs(e,t,n,r){return ls||(ls=class extends e{constructor(e,t,n){super(),this._declarationView=e,this._declarationTContainer=t,this.elementRef=n}createEmbeddedView(e){const t=this._declarationTContainer.tViews,n=Bo(this._declarationView,t,e,16,null,t.node);n[17]=this._declarationView[this._declarationTContainer.index];const r=this._declarationView[5];null!==r&&(n[5]=r.createEmbeddedView(t)),zo(t,n,e);const o=new ss(n);return o._tViewNode=n[6],o}}),0===n.type?new ls(r,n,ds(t,n,r)):null}function fs(e,t,n,r){let o;us||(us=class extends e{constructor(e,t,n){super(),this._lContainer=e,this._hostTNode=t,this._hostView=n}get element(){return ds(t,this._hostTNode,this._hostView)}get injector(){return new qn(this._hostTNode,this._hostView)}get parentInjector(){const e=Rn(this._hostTNode,this._hostView),t=wn(e,this._hostView),n=function(e,t,n){if(n.parent&&-1!==n.parent.injectorIndex){const e=n.parent.injectorIndex;let t=n.parent;for(;null!=t.parent&&e==t.parent.injectorIndex;)t=t.parent;return t}let r=_n(e),o=t,i=t[6];for(;r>1;)o=o[15],i=o[6],r--;return i}(e,this._hostView,this._hostTNode);return yn(e)&&null!=n?new qn(n,t):new qn(null,this._hostView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){return null!==this._lContainer[8]&&this._lContainer[8][e]||null}get length(){return this._lContainer.length-9}createEmbeddedView(e,t,n){const r=e.createEmbeddedView(t||{});return this.insert(r,n),r}createComponent(e,t,n,r,o){const i=n||this.parentInjector;if(!o&&null==e.ngModule&&i){const e=i.get(ve,null);e&&(o=e)}const s=e.create(i,r,void 0,o);return this.insert(s.hostView,t),s}insert(e,t){const n=e._lView,r=n[1];if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");if(this.allocateContainerIfNeeded(),Xe(n[3])){const t=this.indexOf(e);if(-1!==t)this.detach(t);else{const t=n[3],r=new us(t,t[6],t[3]);r.detach(r.indexOf(e))}}const o=this._adjustIndex(t);return Li(r,n,this._lContainer,o),Mi(r,n,!0,Ji(o,this._lContainer)),e.attachToViewContainerRef(this),Ee(this._lContainer[8],o,e),e}move(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");return this.insert(e,t)}indexOf(e){const t=this._lContainer[8];return null!==t?t.indexOf(e):-1}remove(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1);Bi(this._lContainer,t),Se(this._lContainer[8],t)}detach(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1),n=Vi(this._lContainer,t);return n&&null!=Se(this._lContainer[8],t)?new ss(n):null}_adjustIndex(e,t=0){return null==e?this.length+t:e}allocateContainerIfNeeded(){null===this._lContainer[8]&&(this._lContainer[8]=[])}});const i=r[n.index];if(Xe(i))o=i,function(e,t){e[2]=-2}(o);else{let e;if(4===n.type)e=ut(i);else if(e=r[11].createComment(""),ot(r)){const t=r[11],o=ht(n,r);Wi(t,Ki(t,o),e,function(e,t){return ct(e)?e.nextSibling(t):t.nextSibling}(t,o))}else Yi(r[1],r,e,n);r[n.index]=o=mi(i,r,e,n),_i(r,o)}return new us(o,n,r)}function ps(e=!1){return function(e,t,n){if(!n&&tt(e)){const n=mt(e.index,t);return new ss(n,n)}return 3===e.type||0===e.type||4===e.type||5===e.type?new ss(t[16],t):null}(At(),Dt(),e)}let gs=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>bs(),e})();const ms=ps,bs=ms,ys=Function;function vs(e){return"function"==typeof e}const _s=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,ws=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,xs=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,Cs=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s+super\(\.\.\.arguments\)/;class Es{constructor(e){this._reflect=e||W.Reflect}isReflectionEnabled(){return!0}factory(e){return(...t)=>new e(...t)}_zipTypesAndAnnotations(e,t){let n;n=ke(void 0===e?t.length:e.length);for(let r=0;r<n.length;r++)n[r]=void 0===e?[]:e[r]&&e[r]!=Object?[e[r]]:[],t&&null!=t[r]&&(n[r]=n[r].concat(t[r]));return n}_ownParameters(e,t){if(n=e.toString(),_s.test(n)||Cs.test(n)||ws.test(n)&&!xs.test(n))return null;var n;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;const r=e.ctorParameters;if(r&&r!==t.ctorParameters){const e="function"==typeof r?r():r,t=e.map(e=>e&&e.type),n=e.map(e=>e&&Ss(e.decorators));return this._zipTypesAndAnnotations(t,n)}const o=e.hasOwnProperty(u)&&e[u],i=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return i||o?this._zipTypesAndAnnotations(i,o):ke(e.length)}parameters(e){if(!vs(e))return[];const t=ks(e);let n=this._ownParameters(e,t);return n||t===Object||(n=this.parameters(t)),n||[]}_ownAnnotations(e,t){if(e.annotations&&e.annotations!==t.annotations){let t=e.annotations;return"function"==typeof t&&t.annotations&&(t=t.annotations),t}return e.decorators&&e.decorators!==t.decorators?Ss(e.decorators):e.hasOwnProperty(l)?e[l]:null}annotations(e){if(!vs(e))return[];const t=ks(e),n=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(n)}_ownPropMetadata(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){let t=e.propMetadata;return"function"==typeof t&&t.propMetadata&&(t=t.propMetadata),t}if(e.propDecorators&&e.propDecorators!==t.propDecorators){const t=e.propDecorators,n={};return Object.keys(t).forEach(e=>{n[e]=Ss(t[e])}),n}return e.hasOwnProperty(d)?e[d]:null}propMetadata(e){if(!vs(e))return{};const t=ks(e),n={};if(t!==Object){const e=this.propMetadata(t);Object.keys(e).forEach(t=>{n[t]=e[t]})}const r=this._ownPropMetadata(e,t);return r&&Object.keys(r).forEach(e=>{const t=[];n.hasOwnProperty(e)&&t.push(...n[e]),t.push(...r[e]),n[e]=t}),n}ownPropMetadata(e){return vs(e)&&this._ownPropMetadata(e,ks(e))||{}}hasLifecycleHook(e,t){return e instanceof ys&&t in e.prototype}guards(e){return{}}getter(e){return new Function("o","return o."+e+";")}setter(e){return new Function("o","v","return o."+e+" = v;")}method(e){return new Function("o","args",`if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`)}importUri(e){return"object"==typeof e&&e.filePath?e.filePath:`./${F(e)}`}resourceUri(e){return`./${F(e)}`}resolveIdentifier(e,t,n,r){return r}resolveEnum(e,t){return e[t]}}function Ss(e){return e?e.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function ks(e){const t=e.prototype?Object.getPrototypeOf(e.prototype):null;return(t?t.constructor:null)||Object}let Os=null;function Ds(){return Os=Os||new Es}function js(e){return Is(Ds().parameters(e))}function Is(e){const t=G();return e.map(e=>function(e,t){const n={token:null,host:!1,optional:!1,resolved:e.R3ResolvedDependencyType.Token,self:!1,skipSelf:!1};function r(t){n.resolved=e.R3ResolvedDependencyType.Token,n.token=t}if(Array.isArray(t)&&t.length>0)for(let o=0;o<t.length;o++){const i=t[o];if(void 0===i)continue;const s=Object.getPrototypeOf(i);if(i instanceof b||"Optional"===s.ngMetadataName)n.optional=!0;else if(i instanceof v||"SkipSelf"===s.ngMetadataName)n.skipSelf=!0;else if(i instanceof y||"Self"===s.ngMetadataName)n.self=!0;else if(i instanceof _||"Host"===s.ngMetadataName)n.host=!0;else if(i instanceof m)n.token=i.token;else if(i instanceof w){if(void 0===i.attributeName)throw new Error("Attribute name must be defined.");n.token=i.attributeName,n.resolved=e.R3ResolvedDependencyType.Attribute}else i===gs?(n.token=i,n.resolved=e.R3ResolvedDependencyType.ChangeDetectorRef):r(i)}else void 0===t||Array.isArray(t)&&0===t.length?(n.token=void 0,n.resolved=Q.Invalid):r(t);return n}(t,e))}const As=C({provide:String,useValue:C});function Ps(e){return void 0!==e.useClass}function Ts(e){return void 0!==e.useFactory}function Ns(e,t){const n=t||{providedIn:null},r={name:e.name,type:e,typeArgumentCount:0,providedIn:n.providedIn,userDeps:void 0};return(Ps(n)||Ts(n))&&void 0!==n.deps&&(r.userDeps=Is(n.deps)),Ps(n)?r.useClass=V(n.useClass):function(e){return As in e}(n)?r.useValue=V(n.useValue):Ts(n)?r.useFactory=n.useFactory:function(e){return void 0!==e.useExisting}(n)&&(r.useExisting=V(n.useExisting)),r}const Rs=h("Injectable",void 0,void 0,void 0,(e,t)=>Ms(e,t)),Fs=function(e,t){let n=null,r=null;e.hasOwnProperty(A)||(Object.defineProperty(e,A,{get:()=>(null===n&&(n=G().compileInjectable(ye,`ng:///${e.name}/\u0275prov.js`,Ns(e,t))),n)}),e.hasOwnProperty(T)||(e[T]=()=>e[A])),e.hasOwnProperty(ee)||Object.defineProperty(e,ee,{get:()=>{if(null===r){const n=Ns(e,t),o=G();r=o.compileFactory(ye,`ng:///${e.name}/\u0275fac.js`,{name:n.name,type:n.type,typeArgumentCount:n.typeArgumentCount,deps:js(e),injectFn:"inject",target:o.R3FactoryTarget.Injectable})}return r},configurable:!0})},Ms=Fs,Ls=new ne("Set Injector scope."),$s={},Vs={},Bs=[];let Hs=void 0;function Us(){return void 0===Hs&&(Hs=new be),Hs}function zs(e,t=null,n=null,r){const o=qs(e,t,n,r);return o._resolveInjectorDefTypes(),o}function qs(e,t=null,n=null,r){return new Ws(e,n,t||Us(),r)}class Ws{constructor(e,t,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const o=[];t&&Ce(t,n=>this.processProvider(n,e,t)),Ce([e],e=>this.processInjectorType(e,[],o)),this.records.set(re,Ks(void 0,this));const i=this.records.get(Ls);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof e?null:F(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,t=oe,n=x.Default){this.assertNotDestroyed();const r=le(this);try{if(!(n&x.SkipSelf)){let t=this.records.get(e);if(void 0===t){const n=("function"==typeof(o=e)||"object"==typeof o&&o instanceof ne)&&D(e);t=n&&this.injectableDefInScope(n)?Ks(Qs(e),$s):null,this.records.set(e,t)}if(null!=t)return this.hydrate(e,t)}return(n&x.Self?Us():this.parent).get(e,t=n&x.Optional&&t===oe?null:t)}catch(i){if("NullInjectorError"===i.name){if((i.ngTempTokenPath=i.ngTempTokenPath||[]).unshift(F(e)),r)throw i;return function(e,t,n,r){const o=e.ngTempTokenPath;throw t.__source&&o.unshift(t.__source),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=F(t);if(Array.isArray(t))o=t.map(F).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):F(r)))}o=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(ie,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e.ngTempTokenPath=null,e}(i,e,"R3InjectorError",this.source)}throw i}finally{le(r)}var o}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((t,n)=>e.push(F(n))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,t,n){if(!(e=V(e)))return!1;let r=I(e);const o=null==r&&e.ngModule||void 0,i=void 0===o?e:o,s=-1!==n.indexOf(i);if(void 0!==o&&(r=I(o)),null==r)return!1;if(null!=r.imports&&!s){let e;n.push(i);try{Ce(r.imports,r=>{this.processInjectorType(r,t,n)&&(void 0===e&&(e=[]),e.push(r))})}finally{}if(void 0!==e)for(let t=0;t<e.length;t++){const{ngModule:n,providers:r}=e[t];Ce(r,e=>this.processProvider(e,n,r||Bs))}}this.injectorDefTypes.add(i),this.records.set(i,Ks(r.factory,$s));const a=r.providers;if(null!=a&&!s){const t=e;Ce(a,e=>this.processProvider(e,t,a))}return void 0!==o&&void 0!==e.providers}processProvider(e,t,n){let r=Ys(e=V(e))?e:V(e&&e.provide);const o=function(e,t,n){return Zs(e)?Ks(void 0,e.useValue):Ks(Gs(e,t,n),$s)}(e,t,n);if(Ys(e)||!0!==e.multi){const e=this.records.get(r);e&&void 0!==e.multi&&fo()}else{let t=this.records.get(r);t?void 0===t.multi&&fo():(t=Ks(void 0,$s,!0),t.factory=()=>me(t.multi),this.records.set(r,t)),r=e,t.multi.push(e)}this.records.set(r,o)}hydrate(e,t){var n;return t.value===Vs?function(e){throw new Error(`Cannot instantiate cyclic dependency! ${e}`)}(F(e)):t.value===$s&&(t.value=Vs,t.value=t.factory()),"object"==typeof t.value&&t.value&&null!==(n=t.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(t.value),t.value}injectableDefInScope(e){return!!e.providedIn&&("string"==typeof e.providedIn?"any"===e.providedIn||e.providedIn===this.scope:this.injectorDefTypes.has(e.providedIn))}}function Qs(e){const t=D(e),n=null!==t?t.factory:Ze(e);if(null!==n)return n;const r=I(e);if(null!==r)return r.factory;if(e instanceof ne)throw new Error(`Token ${F(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const n=ke(t,"?");throw new Error(`Can't resolve all parameters for ${F(e)}: (${n.join(", ")}).`)}const n=function(e){const t=e&&(e[A]||e[N]||e[T]&&e[T]());if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n`+`This will become an error in v10. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function Gs(e,t,n){let r=void 0;if(Ys(e)){const t=V(e);return Ze(t)||Qs(t)}if(Zs(e))r=()=>V(e.useValue);else if((o=e)&&o.useFactory)r=()=>e.useFactory(...me(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>he(V(e.useExisting));else{const o=V(e&&(e.useClass||e.provide));if(o||function(e,t,n){let r="";throw e&&t&&(r=` - only instances of Provider and Type are allowed, got: [${t.map(e=>e==n?"?"+n+"?":"...").join(", ")}]`),new Error(`Invalid provider for the NgModule '${F(e)}'`+r)}(t,n,e),!function(e){return!!e.deps}(e))return Ze(o)||Qs(o);r=()=>new o(...me(e.deps))}var o;return r}function Ks(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Zs(e){return null!==e&&"object"==typeof e&&se in e}function Ys(e){return"function"==typeof e}function Js(e,t,n){return zs({name:n},t,e,n)}const Xs=Js;let ea=(()=>{class e{static create(e,t){return Array.isArray(e)?Xs(e,t,""):Xs(e.providers,e.parent,e.name||"")}}return e.THROW_IF_NOT_FOUND=oe,e.NULL=new be,e.\u0275prov=S({token:e,providedIn:"any",factory:()=>he(re)}),e.__NG_ELEMENT_ID__=-1,e})();function ta(e){return e.length>1?" ("+function(e){const t=[];for(let n=0;n<e.length;++n){if(t.indexOf(e[n])>-1)return t.push(e[n]),t;t.push(e[n])}return t}(e.slice().reverse()).map(e=>F(e.token)).join(" -> ")+")":""}function na(e,t,n,r){const o=[t],i=n(o),s=r?function(e,t){const n=`${e} caused by: ${t instanceof Error?t.message:t}`,r=Error(n);return r.ngOriginalError=t,r}(i,r):Error(i);return s.addKey=ra,s.keys=o,s.injectors=[e],s.constructResolvingMessage=n,s.ngOriginalError=r,s}function ra(e,t){this.injectors.push(e),this.keys.push(t),this.message=this.constructResolvingMessage(this.keys)}function oa(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const e=t[r];n.push(e&&0!=e.length?e.map(F).join(" "):"?")}return Error("Cannot resolve all parameters for '"+F(e)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+F(e)+"' is decorated with Injectable.")}class ia{constructor(e,t){if(this.token=e,this.id=t,!e)throw new Error("Token must be defined!");this.displayName=F(this.token)}static get(e){return aa.get(V(e))}static get numberOfKeys(){return aa.numberOfKeys}}class sa{constructor(){this._allKeys=new Map}get(e){if(e instanceof ia)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const t=new ia(e,ia.numberOfKeys);return this._allKeys.set(e,t),t}get numberOfKeys(){return this._allKeys.size}}const aa=new sa;class ca{constructor(e){this.reflectionCapabilities=e}updateCapabilities(e){this.reflectionCapabilities=e}factory(e){return this.reflectionCapabilities.factory(e)}parameters(e){return this.reflectionCapabilities.parameters(e)}annotations(e){return this.reflectionCapabilities.annotations(e)}propMetadata(e){return this.reflectionCapabilities.propMetadata(e)}hasLifecycleHook(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)}getter(e){return this.reflectionCapabilities.getter(e)}setter(e){return this.reflectionCapabilities.setter(e)}method(e){return this.reflectionCapabilities.method(e)}importUri(e){return this.reflectionCapabilities.importUri(e)}resourceUri(e){return this.reflectionCapabilities.resourceUri(e)}resolveIdentifier(e,t,n,r){return this.reflectionCapabilities.resolveIdentifier(e,t,n,r)}resolveEnum(e,t){return this.reflectionCapabilities.resolveEnum(e,t)}}const la=new ca(new Es);class ua{constructor(e,t,n){this.key=e,this.optional=t,this.visibility=n}static fromKey(e){return new ua(e,!1,null)}}const da=[];class ha{constructor(e,t,n){this.key=e,this.resolvedFactories=t,this.multiProvider=n,this.resolvedFactory=this.resolvedFactories[0]}}class fa{constructor(e,t){this.factory=e,this.dependencies=t}}function pa(e){let t,n;if(e.useClass){const r=V(e.useClass);t=la.factory(r),n=ba(r)}else e.useExisting?(t=e=>e,n=[ua.fromKey(ia.get(e.useExisting))]):e.useFactory?(t=e.useFactory,n=function(e,t){if(t){const n=t.map(e=>[e]);return t.map(t=>ya(e,t,n))}return ba(e)}(e.useFactory,e.deps)):(t=()=>e.useValue,n=da);return new fa(t,n)}function ga(e){return new ha(ia.get(e.provide),[pa(e)],e.multi||!1)}function ma(e){const t=function(e,t){for(let n=0;n<e.length;n++){const r=e[n],o=t.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw Error(`Cannot mix multi providers and regular providers, got: ${o} ${r}`);if(r.multiProvider)for(let e=0;e<r.resolvedFactories.length;e++)o.resolvedFactories.push(r.resolvedFactories[e]);else t.set(r.key.id,r)}else{let e;e=r.multiProvider?new ha(r.key,r.resolvedFactories.slice(),r.multiProvider):r,t.set(r.key.id,e)}}return t}(function e(t,n){return t.forEach(t=>{if(t instanceof ys)n.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)n.push(t);else{if(!Array.isArray(t))throw Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${t}`);e(t,n)}}),n}(e,[]).map(ga),new Map);return Array.from(t.values())}function ba(e){const t=la.parameters(e);if(!t)return[];if(t.some(e=>null==e))throw oa(e,t);return t.map(n=>ya(e,n,t))}function ya(e,t,n){let r=null,o=!1;if(!Array.isArray(t))return va(t instanceof m?t.token:t,o,null);let i=null;for(let s=0;s<t.length;++s){const e=t[s];e instanceof ys?r=e:e instanceof m?r=e.token:e instanceof b?o=!0:e instanceof y||e instanceof v?i=e:e instanceof ne&&(r=e)}if(r=V(r),null!=r)return va(r,o,i);throw oa(e,n)}function va(e,t,n){return new ua(ia.get(e),t,n)}const _a={};class wa{static resolve(e){return ma(e)}static resolveAndCreate(e,t){const n=wa.resolve(e);return wa.fromResolvedProviders(n,t)}static fromResolvedProviders(e,t){return new xa(e,t)}}let xa=(()=>{class e{constructor(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;const n=e.length;this.keyIds=[],this.objs=[];for(let r=0;r<n;r++)this.keyIds[r]=e[r].key.id,this.objs[r]=_a}get(e,t=oe){return this._getByKey(ia.get(e),null,t)}resolveAndCreateChild(e){const t=wa.resolve(e);return this.createChildFromResolved(t)}createChildFromResolved(t){const n=new e(t);return n.parent=this,n}resolveAndInstantiate(e){return this.instantiateResolved(wa.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function(e){return Error(`Index ${e} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw na(this,e.key,(function(e){return`Cannot instantiate cyclic dependency!${ta(e)}`}));return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const t=[];for(let n=0;n<e.resolvedFactories.length;++n)t[n]=this._instantiate(e,e.resolvedFactories[n]);return t}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,t){const n=t.factory;let r,o;try{r=t.dependencies.map(e=>this._getByReflectiveDependency(e))}catch(s){throw s.addKey&&s.addKey(this,e.key),s}try{o=n(...r)}catch(s){throw na(this,e.key,(function(e){const t=F(e[0].token);return`${i.message}: Error during instantiation of ${t}!${ta(e)}.`}),i=s)}var i;return o}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:oe)}_getByKey(t,n,r){return t===e.INJECTOR_KEY?this:n instanceof y?this._getByKeySelf(t,r):this._getByKeyDefault(t,r,n)}_getObjByKeyId(e){for(let t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===_a&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return _a}_throwOrNull(e,t){if(t!==oe)return t;throw function(e,t){return na(e,t,(function(e){return`No provider for ${F(e[0].token)}!${ta(e)}`}))}(this,e)}_getByKeySelf(e,t){const n=this._getObjByKeyId(e.id);return n!==_a?n:this._throwOrNull(e,t)}_getByKeyDefault(t,n,r){let o;for(o=r instanceof v?this.parent:this;o instanceof e;){const e=o,n=e._getObjByKeyId(t.id);if(n!==_a)return n;o=e.parent}return null!==o?o.get(t.token,n):this._throwOrNull(t,n)}get displayName(){return`ReflectiveInjector(providers: [${function(e,t){const n=[];for(let r=0;r<e._providers.length;++r)n[r]=' "'+e.getProviderAtIndex(r).key.displayName+'" ';return n}(this).join(", ")}])`}toString(){return this.displayName}}return e.INJECTOR_KEY=ia.get(ea),e})();const Ca=new ne("AnalyzeForEntryComponents");class Ea{}const Sa=g("ContentChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!1,descendants:!1},t),Ea),ka=g("ContentChild",(e,t={})=>Object.assign({selector:e,first:!0,isViewQuery:!1,descendants:!0},t),Ea),Oa=g("ViewChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!0,descendants:!0},t),Ea),Da=g("ViewChild",(e,t)=>Object.assign({selector:e,first:!0,isViewQuery:!0,descendants:!0},t),Ea);function ja(e){const t=[],n=new Map;function r(t){let r=n.get(t);if(!r){const o=e(t);n.set(t,r=o.then(Na))}return r}return Ia.forEach((e,n)=>{const o=[];e.templateUrl&&o.push(r(e.templateUrl).then(t=>{e.template=t}));const i=e.styleUrls,s=e.styles||(e.styles=[]),a=e.styles.length;i&&i.forEach((t,n)=>{s.push(""),o.push(r(t).then(r=>{s[a+n]=r,i.splice(i.indexOf(t),1),0==i.length&&(e.styleUrls=void 0)}))});const c=Promise.all(o).then(()=>function(e){Aa.delete(e)}(n));t.push(c)}),Ta(),Promise.all(t).then(()=>{})}let Ia=new Map;const Aa=new Set;function Pa(e){return!!(e.templateUrl&&!e.hasOwnProperty("template")||e.styleUrls&&e.styleUrls.length)}function Ta(){const e=Ia;return Ia=new Map,e}function Na(e){return"string"==typeof e?e:e.text()}function Ra(e,t){let n=e.styles,r=e.classes,o=0;for(let i=0;i<t.length;i++){const e=t[i];"number"==typeof e?o=e:1==o?r=M(r,e):2==o&&(n=M(n,e+": "+t[++i]+";"))}null!==n&&(e.styles=n),null!==r&&(e.classes=r)}let Fa=null;function Ma(){if(!Fa){const e=W.Symbol;if(e&&e.iterator)Fa=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Fa=n)}}}return Fa}function La(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}function $a(e,t){const n=Ba(e),r=Ba(t);if(n&&r)return function(e,t,n){const r=e[Ma()](),o=t[Ma()]();for(;;){const e=r.next(),t=o.next();if(e.done&&t.done)return!0;if(e.done||t.done)return!1;if(!n(e.value,t.value))return!1}}(e,t,$a);{const o=e&&("object"==typeof e||"function"==typeof e),i=t&&("object"==typeof t||"function"==typeof t);return!(n||!o||r||!i)||La(e,t)}}class Va{constructor(e){this.wrapped=e}static wrap(e){return new Va(e)}static unwrap(e){return Va.isWrapped(e)?e.wrapped:e}static isWrapped(e){return e instanceof Va}}function Ba(e){return!!Ha(e)&&(Array.isArray(e)||!(e instanceof Map)&&Ma()in e)}function Ha(e){return null!==e&&("function"==typeof e||"object"==typeof e)}function Ua(e,t,n){return e[t]=n}function za(e,t){return e[t]}function qa(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Wa(e,t,n,r){const o=qa(e,t,n);return qa(e,t+1,r)||o}function Qa(e,t,n,r,o){const i=Wa(e,t,n,r);return qa(e,t+2,o)||i}function Ga(e,t,n,r,o,i){const s=Wa(e,t,n,r);return Wa(e,t+2,o,i)||s}function Ka(e,t,n,r){const o=Dt();return qa(o,Vt(),t)&&(jt(),fi(tn(),o,e,t,n,r)),Ka}function Za(e,t){let n=!1,r=Lt();for(let i=1;i<t.length;i+=2)n=qa(e,r++,t[i])||n;if($t(r),!n)return Eo;let o=t[0];for(let i=1;i<t.length;i+=2)o+=xn(t[i])+t[i+1];return o}function Ya(e,t,n,r){return qa(e,Vt(),n)?t+xn(n)+r:Eo}function Ja(e,t,n,r,o,i){const s=Wa(e,Lt(),n,o);return Bt(2),s?t+xn(n)+r+xn(o)+i:Eo}function Xa(e,t,n,r,o,i,s,a){const c=Qa(e,Lt(),n,o,s);return Bt(3),c?t+xn(n)+r+xn(o)+i+xn(s)+a:Eo}function ec(e,t,n,r,o,i,s,a,c,l){const u=Ga(e,Lt(),n,o,s,c);return Bt(4),u?t+xn(n)+r+xn(o)+i+xn(s)+a+xn(c)+l:Eo}function tc(e,t,n,r,o,i,s,a,c,l,u,d){const h=Lt();let f=Ga(e,h,n,o,s,c);return f=qa(e,h+4,u)||f,Bt(5),f?t+xn(n)+r+xn(o)+i+xn(s)+a+xn(c)+l+xn(u)+d:Eo}function nc(e,t,n,r,o,i,s,a,c,l,u,d,h,f){const p=Lt();let g=Ga(e,p,n,o,s,c);return g=Wa(e,p+4,u,h)||g,Bt(6),g?t+xn(n)+r+xn(o)+i+xn(s)+a+xn(c)+l+xn(u)+d+xn(h)+f:Eo}function rc(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g){const m=Lt();let b=Ga(e,m,n,o,s,c);return b=Qa(e,m+4,u,h,p)||b,Bt(7),b?t+xn(n)+r+xn(o)+i+xn(s)+a+xn(c)+l+xn(u)+d+xn(h)+f+xn(p)+g:Eo}function oc(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b){const y=Lt();let v=Ga(e,y,n,o,s,c);return v=Ga(e,y+4,u,h,p,m)||v,Bt(8),v?t+xn(n)+r+xn(o)+i+xn(s)+a+xn(c)+l+xn(u)+d+xn(h)+f+xn(p)+g+xn(m)+b:Eo}function ic(e,t,n,r,o,i){const s=Dt(),a=Ya(s,t,n,r);return a!==Eo&&fi(tn(),s,e,a,o,i),ic}function sc(e,t,n,r,o,i,s,a){const c=Dt(),l=Ja(c,t,n,r,o,i);return l!==Eo&&fi(tn(),c,e,l,s,a),sc}function ac(e,t,n,r,o,i,s,a,c,l){const u=Dt(),d=Xa(u,t,n,r,o,i,s,a);return d!==Eo&&fi(tn(),u,e,d,c,l),ac}function cc(e,t,n,r,o,i,s,a,c,l,u,d){const h=Dt(),f=ec(h,t,n,r,o,i,s,a,c,l);return f!==Eo&&fi(tn(),h,e,f,u,d),cc}function lc(e,t,n,r,o,i,s,a,c,l,u,d,h,f){const p=Dt(),g=tc(p,t,n,r,o,i,s,a,c,l,u,d);return g!==Eo&&fi(tn(),p,e,g,h,f),lc}function uc(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g){const m=Dt(),b=nc(m,t,n,r,o,i,s,a,c,l,u,d,h,f);return b!==Eo&&fi(tn(),m,e,b,p,g),uc}function dc(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b){const y=Dt(),v=rc(y,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g);return v!==Eo&&fi(tn(),y,e,v,m,b),dc}function hc(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b,y,v){const _=Dt(),w=oc(_,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b);return w!==Eo&&fi(tn(),_,e,w,y,v),hc}function fc(e,t,n,r){const o=Dt(),i=Za(o,t);return i!==Eo&&fi(tn(),o,e,i,n,r),fc}function pc(e){const t=io(e);Ci(t[1],t,e)}function gc(e){!function(e,t){const n=0===e.flags;if(e.flags|=1,n&&e.clean==Lo){let t;e.clean=new Promise(e=>t=e),e.scheduler(()=>{if(1&e.flags&&(e.flags&=-2,xi(e)),2&e.flags){e.flags&=-3;const t=e.playerHandler;t&&t.flushPlayers()}e.clean=Lo,t(null)})}}(wi(io(e))[8])}function mc(e){const t=Dt(),n=jt(),r=function(e,t,n,r,o){const i=n+19,s=t[i]=t[11].createComment(""),a=Ho(e,t[6],n,0,null,null),c=t[i]=mi(s,t,s,a);return Yi(e,t,s,a),so(s,t),_i(t,c),a}(n,t,e);n.firstCreatePass&&(r.tViews=[]),Nt()}function bc(e,t,n,r,o,i,s,a){const c=Dt(),l=jt(),u=e+19,d=l.firstCreatePass?function(e,t,n,r,o,i,s,a,c){const l=t.consts,u=Ho(t,n[6],e,0,s||null,wt(l,a));ri(t,n,u,wt(l,c)),sn(t,u);const d=u.tViews=Jo(2,-1,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l),h=ei(0,null,2,-1,null,null);return h.injectorIndex=u.injectorIndex,d.node=h,null!==t.queries&&(t.queries.template(t,u),d.queries=t.queries.embeddedTView(u)),u}(e,l,c,t,n,r,o,i,s):l.data[u];Pt(d,!1);const h=c[11].createComment("");Yi(l,c,h,d),so(h,c),_i(c,c[u]=mi(h,c,h,d)),nt(d)&&Ko(l,c,d),null!=s&&Zo(c,d,a)}function yc(e){const t=Dt(),n=jt();if(Pt(gt(n.data,e),!0),t[e+19][2]=0,!Rt())if(3==(3&t[2])){const e=n.preOrderCheckHooks;null!==e&&an(t,e,null)}else{const e=n.preOrderHooks;null!==e&&cn(t,e,0,null),ln(t,0)}}function vc(){let e=At();Tt()?Nt():(e=e.parent,Pt(e,!1));const t=Dt()[e.index],n=Ct(t);for(;n<t.length-9;)Bi(t,n)}function _c(e,t,n,r){const o=n+19;o>=e.data.length&&(e.data[o]=null,e.blueprint[o]=null),t[o]=r}function wc(e){return gt(Et.lFrame.contextLView,e)}function xc(e,t=x.Default){const n=Dt();return null==n?he(e,t):Ln(At(),n,V(e),t)}function Cc(e){return Mn(At(),e)}function Ec(){throw new Error("invalid")}function Sc(e,t,n){const r=Dt();return qa(r,Vt(),t)&&ni(jt(),tn(),r,e,t,r[11],n,!1),Sc}function kc(e,t,n,r,o){const i=o?"class":"style";Ai(e,n,t.inputs[i],i,r)}function Oc(e,t,n,r){const o=Dt(),i=jt(),s=19+e,a=o[11],c=o[s]=Vo(t,a,Et.lFrame.currentNamespace),l=i.firstCreatePass?function(e,t,n,r,o,i,s){const a=t.consts,c=wt(a,i),l=Ho(t,n[6],e,3,o,c);return ri(t,n,l,wt(a,s)),null!==l.mergedAttrs&&Ra(l,l.mergedAttrs),null!==t.queries&&t.queries.elementStart(t,l),l}(e,i,o,0,t,n,r):i.data[s];Pt(l,!0);const u=l.mergedAttrs;null!==u&&fn(a,c,u);const d=l.classes;null!==d&&is(a,c,d);const h=l.styles;null!==h&&os(a,c,h),Yi(i,o,c,l),0===Et.lFrame.elementDepthCount&&so(c,o),Et.lFrame.elementDepthCount++,nt(l)&&(Ko(i,o,l),Go(i,l,o)),null!==r&&Zo(o,l)}function Dc(){let e=At();Tt()?Nt():(e=e.parent,Pt(e,!1));const t=e;Et.lFrame.elementDepthCount--;const n=jt();n.firstCreatePass&&(sn(n,e),et(e)&&n.queries.elementEnd(e)),null!==t.classes&&function(e){return 0!=(16&e.flags)}(t)&&kc(n,t,Dt(),t.classes,!0),null!==t.styles&&function(e){return 0!=(32&e.flags)}(t)&&kc(n,t,Dt(),t.styles,!1)}function jc(e,t,n,r){Oc(e,t,n,r),Dc()}function Ic(e,t,n){const r=Dt(),o=jt(),i=e+19,s=o.firstCreatePass?function(e,t,n,r,o){const i=t.consts,s=wt(i,r),a=Ho(t,n[6],e,4,"ng-container",s);return null!==s&&Ra(a,s),ri(t,n,a,wt(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(e,o,r,t,n):o.data[i];Pt(s,!0);const a=r[i]=r[11].createComment("");Yi(o,r,a,s),so(a,r),nt(s)&&(Ko(o,r,s),Go(o,s,r)),null!=n&&Zo(r,s)}function Ac(){let e=At();const t=jt();Tt()?Nt():(e=e.parent,Pt(e,!1)),t.firstCreatePass&&(sn(t,e),et(e)&&t.queries.elementEnd(e))}function Pc(e,t,n){Ic(e,t,n),Ac()}function Tc(e,t,n){const r=Dt(),o=At(),i=2===o.type?o.parent:o,s=r[i.index];let a=function(e,t,n){for(let r=t+9;r<e.length;r++){const t=e[r][1].id;if(t===n)return e[r];if(!(t<n))break;Bi(e,r-9)}return null}(s,Ct(s),e);if(a)Et.lFrame.isParent=!0,Wt(a,a[1].node);else{a=Bo(r,function(e,t,n,r){const o=Dt()[1],i=r.tViews;return(e>=i.length||null==i[e])&&(i[e]=Jo(2,e,null,t,n,o.directiveRegistry,o.pipeRegistry,null,null,o.consts)),i[e]}(e,t,n,i),null,16,null,null);const s=Tt()?o:o&&o.parent;Uo(a[1],s,e,a),Wt(a,a[1].node)}return s&&(vt(a)&&Li(a[1],a,s,Ct(s)),s[2]+=2),vt(a)?3:2}function Nc(){const e=Dt(),t=jt(),n=e[6],r=e[8];vt(e)&&zo(t,e,r),qo(t,e,t.template,r),Yt(),Pt(n,!1)}function Rc(){return Dt()}function Fc(e){return!!e&&"function"==typeof e.then}function Mc(e){return!!e&&"function"==typeof e.subscribe}function Lc(e,t,n=!1,r){const o=Dt(),i=jt(),s=At();return Vc(i,o,o[11],s,e,t,n,r),Lc}function $c(e,t,n=!1,r){const o=At(),i=Dt(),s=ji(o,i);return Vc(jt(),i,s,o,e,t,n,r),$c}function Vc(e,t,n,r,o,i,s=!1,a){const c=nt(r),l=e.firstCreatePass&&(e.cleanup||(e.cleanup=[])),u=Oi(t);let d=!0;if(3===r.type){const h=ht(r,t),f=a?a(h):Ne,p=f.target||h,g=u.length,m=a?e=>a(ut(e[r.index])).target:r.index;if(ct(n)){let s=null;if(!a&&c&&(s=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const e=o[i];if(e===n&&o[i+1]===r){const e=t[7],n=o[i+2];return e.length>n?e[n]:null}"string"==typeof e&&(i+=2)}return null}(e,t,o,r.index)),null!==s)(s.__ngLastListenerFn__||s).__ngNextListenerFn__=i,s.__ngLastListenerFn__=i,d=!1;else{i=Hc(r,t,i,!1);const e=n.listen(f.name||p,o,i);u.push(i,e),l&&l.push(o,m,g,g+1)}}else i=Hc(r,t,i,!0),p.addEventListener(o,i,s),u.push(i),l&&l.push(o,m,g,s)}const h=r.outputs;let f;if(d&&null!==h&&(f=h[o])){const e=f.length;if(e)for(let n=0;n<e;n+=2){const e=t[f[n]][f[n+1]].subscribe(i),s=u.length;u.push(i,e),l&&l.push(o,r.index,s,-(s+1))}}}function Bc(e,t,n){try{return!1!==t(n)}catch(r){return Ii(e,r),!1}}function Hc(e,t,n,r){return function o(i){if(i===Function)return n;const s=2&e.flags?mt(e.index,t):t;0==(32&t[2])&&wi(s);let a=Bc(t,n,i),c=o.__ngNextListenerFn__;for(;c;)a=Bc(t,c,i)&&a,c=c.__ngNextListenerFn__;return r&&!1===a&&(i.preventDefault(),i.returnValue=!1),a}}function Uc(e=1){return Jt(e)}function zc(e,t){let n=null;const r=function(e){const t=e.attrs;if(null!=t){const e=t.indexOf(5);if(0==(1&e))return t[e+1]}return null}(e);for(let o=0;o<t.length;o++){const i=t[o];if("*"!==i){if(null===r?_o(e,i,!0):wo(r,i))return o}else n=o}return n}function qc(e){const t=Dt()[16][6];if(!t.projection){const n=t.projection=ke(e?e.length:1,null),r=n.slice();let o=t.child;for(;null!==o;){const t=e?zc(o,e):0;null!==t&&(r[t]?r[t].projectionNext=o:n[t]=o,r[t]=o),o=o.next}}}let Wc=!1;function Qc(e){Wc=e}function Gc(e,t=0,n){const r=Dt(),o=jt(),i=Ho(o,r[6],e,1,null,n||null);null===i.projection&&(i.projection=t),Nt(),Wc||ns(o,r,i)}function Kc(e,t,n){return Zc(e,"",t,"",n),Kc}function Zc(e,t,n,r,o){const i=Dt(),s=Ya(i,t,n,r);return s!==Eo&&ni(jt(),tn(),i,e,s,i[11],o,!1),Zc}function Yc(e,t,n,r,o,i,s){const a=Dt(),c=Ja(a,t,n,r,o,i);return c!==Eo&&ni(jt(),tn(),a,e,c,a[11],s,!1),Yc}function Jc(e,t,n,r,o,i,s,a,c){const l=Dt(),u=Xa(l,t,n,r,o,i,s,a);return u!==Eo&&ni(jt(),tn(),l,e,u,l[11],c,!1),Jc}function Xc(e,t,n,r,o,i,s,a,c,l,u){const d=Dt(),h=ec(d,t,n,r,o,i,s,a,c,l);return h!==Eo&&ni(jt(),tn(),d,e,h,d[11],u,!1),Xc}function el(e,t,n,r,o,i,s,a,c,l,u,d,h){const f=Dt(),p=tc(f,t,n,r,o,i,s,a,c,l,u,d);return p!==Eo&&ni(jt(),tn(),f,e,p,f[11],h,!1),el}function tl(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p){const g=Dt(),m=nc(g,t,n,r,o,i,s,a,c,l,u,d,h,f);return m!==Eo&&ni(jt(),tn(),g,e,m,g[11],p,!1),tl}function nl(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m){const b=Dt(),y=rc(b,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g);return y!==Eo&&ni(jt(),tn(),b,e,y,b[11],m,!1),nl}function rl(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b,y){const v=Dt(),_=oc(v,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b);return _!==Eo&&ni(jt(),tn(),v,e,_,v[11],y,!1),rl}function ol(e,t,n){const r=Dt(),o=Za(r,t);return o!==Eo&&ni(jt(),tn(),r,e,o,r[11],n,!1),ol}const il=[];function sl(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?To(i):Ro(i),c=!1;for(;0!==a&&(!1===c||s);){const n=e[a+1];al(e[a],t)&&(c=!0,e[a+1]=r?Mo(n):No(n)),a=r?To(n):Ro(n)}c&&(e[n+1]=r?No(i):Mo(i))}function al(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&je(e,t)>=0}const cl={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function ll(e){return e.substring(cl.key,cl.keyEnd)}function ul(e){return e.substring(cl.value,cl.valueEnd)}function dl(e,t){const n=cl.textEnd;return n===t?-1:(t=cl.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,cl.key=t,n),pl(e,t,n))}function hl(e,t){const n=cl.textEnd;let r=cl.key=pl(e,t,n);return n===r?-1:(r=cl.keyEnd=function(e,t,n){let r;for(;t<n&&(45===(r=e.charCodeAt(t))||95===r||(-33&r)>=65&&(-33&r)<=90);)t++;return t}(e,r,n),r=gl(e,r,n),r=cl.value=pl(e,r,n),r=cl.valueEnd=function(e,t,n){let r=-1,o=-1,i=-1,s=t,a=s;for(;s<n;){const c=e.charCodeAt(s++);if(59===c)return a;34===c||39===c?a=s=ml(e,c,s,n):t===s-4&&85===i&&82===o&&76===r&&40===c?a=s=ml(e,41,s,n):c>32&&(a=s),i=o,o=r,r=-33&c}return a}(e,r,n),gl(e,r,n))}function fl(e){cl.key=0,cl.keyEnd=0,cl.value=0,cl.valueEnd=0,cl.textEnd=e.length}function pl(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function gl(e,t,n,r){return(t=pl(e,t,n))<n&&t++,t}function ml(e,t,n,r){let o=-1,i=n;for(;i<r;){const n=e.charCodeAt(i++);if(n==t&&92!==o)return i;o=92==n&&92===o?0:n}throw new Error}function bl(e){!function(e){Et.lFrame.currentSanitizer=e}(e)}function yl(e,t,n){return El(e,t,n,!1),yl}function vl(e,t){return El(e,t,null,!0),vl}function _l(e){Sl(Il,wl,e,!1)}function wl(e,t){for(let n=function(e){return fl(e),hl(e,pl(e,0,cl.textEnd))}(t);n>=0;n=hl(t,n))Il(e,ll(t),ul(t))}function xl(e){Sl(Oe,Cl,e,!0)}function Cl(e,t){for(let n=function(e){return fl(e),dl(e,pl(e,0,cl.textEnd))}(t);n>=0;n=dl(t,n))Oe(e,ll(t),!0)}function El(e,t,n,r){const o=Dt(),i=jt(),s=Bt(2);if(i.firstUpdatePass&&Ol(i,e,s,r),t!==Eo&&qa(o,s,t)){let a;null==n&&(a=function(){const e=Et.lFrame;return null===e?null:e.currentSanitizer}())&&(n=a),Al(i,i.data[Xt()+19],o,o[11],e,o[s+1]=function(e,t){return null==e||("function"==typeof t?e=t(e):"string"==typeof t?e+=t:"object"==typeof e&&(e=F(sr(e)))),e}(t,n),r,s)}}function Sl(e,t,n,r){const o=jt(),i=Bt(2);o.firstUpdatePass&&Ol(o,null,i,r);const s=Dt();if(n!==Eo&&qa(s,i,n)){const a=o.data[Xt()+19];if(Nl(a,r)&&!kl(o,i)){let e=r?a.classes:a.styles;null!==e&&(n=M(e,n||"")),kc(o,a,s,n,r)}else!function(e,t,n,r,o,i,s,a){o===Eo&&(o=il);let c=0,l=0,u=0<o.length?o[0]:null,d=0<i.length?i[0]:null;for(;null!==u||null!==d;){const h=c<o.length?o[c+1]:void 0,f=l<i.length?i[l+1]:void 0;let p=null,g=void 0;u===d?(c+=2,l+=2,h!==f&&(p=d,g=f)):null===d||null!==u&&u<d?(c+=2,p=u):(l+=2,p=d,g=f),null!==p&&Al(e,t,n,r,p,g,s,a),u=c<o.length?o[c]:null,d=l<i.length?i[l]:null}}(o,a,s,s[11],s[i+1],s[i+1]=function(e,t,n){if(null==n||""===n)return il;const r=[],o=sr(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&e(r,i,o[i]);else"string"==typeof o&&t(r,o);return r}(e,t,n),r,i)}}function kl(e,t){return t>=e.expandoStartIndex}function Ol(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[Xt()+19],s=kl(e,n);Nl(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=Et.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=jl(n=Dl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=Dl(o,e,t,n,r),null===i){let n=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Ro(r))return e[To(r)]}(e,t,r);void 0!==n&&Array.isArray(n)&&(n=Dl(null,e,t,n[1],r),n=jl(n,t.attrs,r),function(e,t,n,r){e[To(n?t.classBindings:t.styleBindings)]=r}(e,t,r,n))}else i=function(e,t,n){let r=void 0;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=jl(r,e[i].hostAttrs,n);return jl(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=To(s),c=Ro(s);e[r]=n;let l,u=!1;if(Array.isArray(n)){const e=n;l=e[1],(null===l||je(e,l)>0)&&(u=!0)}else l=n;if(o)if(0!==c){const t=To(e[a+1]);e[r+1]=Po(t,a),0!==t&&(e[t+1]=Fo(e[t+1],r)),e[a+1]=131071&e[a+1]|r<<17}else e[r+1]=Po(a,0),0!==a&&(e[a+1]=Fo(e[a+1],r)),a=r;else e[r+1]=Po(c,0),0===a?a=r:e[c+1]=Fo(e[c+1],r),c=r;u&&(e[r+1]=No(e[r+1])),sl(e,l,r,!0),sl(e,l,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&je(i,t)>=0&&(n[r+1]=Mo(n[r+1]))}(t,l,e,r,i),s=Po(a,c),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}function Dl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=jl(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function jl(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),Oe(e,s,!!n||t[++i]))}return void 0===e?null:e}function Il(e,t,n){Xr(t)&&(n=Wr(n)),Oe(e,t,n)}function Al(e,t,n,r,o,i,s,a){if(3!==t.type)return;const c=e.data,l=c[a+1];Tl(1==(1&l)?Pl(c,t,n,o,Ro(l),s):void 0)||(Tl(i)||function(e){return 2==(2&e)}(l)&&(i=Pl(c,null,n,o,a,s)),function(e,t,n,r,o){const i=ct(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{const t=-1==r.indexOf("-")?void 0:2;null==o?i?e.removeStyle(n,r,t):n.style.removeProperty(r):i?e.setStyle(n,r,o,t):n.style.setProperty(r,o)}}(r,s,dt(Xt(),n),o,i))}function Pl(e,t,n,r,o,i){const s=null===t;let a=void 0;for(;o>0;){const t=e[o],i=Array.isArray(t),c=i?t[1]:t,l=null===c;let u=n[o+1];u===Eo&&(u=l?il:void 0);let d=l?De(u,r):c===r?u:void 0;if(i&&!Tl(d)&&(d=De(t,r)),Tl(d)&&(a=d,s))return a;const h=e[o+1];o=s?To(h):Ro(h)}if(null!==t){let e=i?t.residualClasses:t.residualStyles;null!=e&&(a=De(e,r))}return a}function Tl(e){return void 0!==e}function Nl(e,t){return 0!=(e.flags&(t?16:32))}function Rl(e,t=""){const n=Dt(),r=jt(),o=e+19,i=r.firstCreatePass?Ho(r,n[6],e,3,null,null):r.data[o],s=n[o]=Fi(t,n[11]);Yi(r,n,s,i),Pt(i,!1)}function Fl(e){return Ml("",e,""),Fl}function Ml(e,t,n){const r=Dt(),o=Ya(r,e,t,n);return o!==Eo&&Pi(r,Xt(),o),Ml}function Ll(e,t,n,r,o){const i=Dt(),s=Ja(i,e,t,n,r,o);return s!==Eo&&Pi(i,Xt(),s),Ll}function $l(e,t,n,r,o,i,s){const a=Dt(),c=Xa(a,e,t,n,r,o,i,s);return c!==Eo&&Pi(a,Xt(),c),$l}function Vl(e,t,n,r,o,i,s,a,c){const l=Dt(),u=ec(l,e,t,n,r,o,i,s,a,c);return u!==Eo&&Pi(l,Xt(),u),Vl}function Bl(e,t,n,r,o,i,s,a,c,l,u){const d=Dt(),h=tc(d,e,t,n,r,o,i,s,a,c,l,u);return h!==Eo&&Pi(d,Xt(),h),Bl}function Hl(e,t,n,r,o,i,s,a,c,l,u,d,h){const f=Dt(),p=nc(f,e,t,n,r,o,i,s,a,c,l,u,d,h);return p!==Eo&&Pi(f,Xt(),p),Hl}function Ul(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p){const g=Dt(),m=rc(g,e,t,n,r,o,i,s,a,c,l,u,d,h,f,p);return m!==Eo&&Pi(g,Xt(),m),Ul}function zl(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m){const b=Dt(),y=oc(b,e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m);return y!==Eo&&Pi(b,Xt(),y),zl}function ql(e){const t=Dt(),n=Za(t,e);return n!==Eo&&Pi(t,Xt(),n),ql}function Wl(e,t,n){Sl(Oe,Cl,Ya(Dt(),e,t,n),!0)}function Ql(e,t,n,r,o){Sl(Oe,Cl,Ja(Dt(),e,t,n,r,o),!0)}function Gl(e,t,n,r,o,i,s){Sl(Oe,Cl,Xa(Dt(),e,t,n,r,o,i,s),!0)}function Kl(e,t,n,r,o,i,s,a,c){Sl(Oe,Cl,ec(Dt(),e,t,n,r,o,i,s,a,c),!0)}function Zl(e,t,n,r,o,i,s,a,c,l,u){Sl(Oe,Cl,tc(Dt(),e,t,n,r,o,i,s,a,c,l,u),!0)}function Yl(e,t,n,r,o,i,s,a,c,l,u,d,h){Sl(Oe,Cl,nc(Dt(),e,t,n,r,o,i,s,a,c,l,u,d,h),!0)}function Jl(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p){Sl(Oe,Cl,rc(Dt(),e,t,n,r,o,i,s,a,c,l,u,d,h,f,p),!0)}function Xl(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m){Sl(Oe,Cl,oc(Dt(),e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m),!0)}function eu(e){Sl(Oe,Cl,Za(Dt(),e),!0)}function tu(e,t,n){_l(Ya(Dt(),e,t,n))}function nu(e,t,n,r,o){_l(Ja(Dt(),e,t,n,r,o))}function ru(e,t,n,r,o,i,s){_l(Xa(Dt(),e,t,n,r,o,i,s))}function ou(e,t,n,r,o,i,s,a,c){_l(ec(Dt(),e,t,n,r,o,i,s,a,c))}function iu(e,t,n,r,o,i,s,a,c,l,u){_l(tc(Dt(),e,t,n,r,o,i,s,a,c,l,u))}function su(e,t,n,r,o,i,s,a,c,l,u,d,h){_l(nc(Dt(),e,t,n,r,o,i,s,a,c,l,u,d,h))}function au(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p){_l(rc(Dt(),e,t,n,r,o,i,s,a,c,l,u,d,h,f,p))}function cu(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m){_l(oc(Dt(),e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m))}function lu(e){_l(Za(Dt(),e))}function uu(e,t,n,r,o){return El(e,Ya(Dt(),t,n,r),o,!1),uu}function du(e,t,n,r,o,i,s){return El(e,Ja(Dt(),t,n,r,o,i),s,!1),du}function hu(e,t,n,r,o,i,s,a,c){return El(e,Xa(Dt(),t,n,r,o,i,s,a),c,!1),hu}function fu(e,t,n,r,o,i,s,a,c,l,u){return El(e,ec(Dt(),t,n,r,o,i,s,a,c,l),u,!1),fu}function pu(e,t,n,r,o,i,s,a,c,l,u,d,h){return El(e,tc(Dt(),t,n,r,o,i,s,a,c,l,u,d),h,!1),pu}function gu(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p){return El(e,nc(Dt(),t,n,r,o,i,s,a,c,l,u,d,h,f),p,!1),gu}function mu(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m){return El(e,rc(Dt(),t,n,r,o,i,s,a,c,l,u,d,h,f,p,g),m,!1),mu}function bu(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b,y){return El(e,oc(Dt(),t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b),y,!1),bu}function yu(e,t,n){return El(e,Za(Dt(),t),n,!1),yu}function vu(e,t,n){const r=Dt();return qa(r,Vt(),t)&&ni(jt(),tn(),r,e,t,r[11],n,!0),vu}function _u(e,t,n){const r=Dt();if(qa(r,Vt(),t)){const o=jt(),i=tn();ni(o,i,r,e,t,ji(i,r),n,!0)}return _u}function wu(e){Au(e);const t=Ou(e,!1);return null===t?null:(void 0===t.component&&(t.component=function(e,t){const n=t[1].data[e];return 2&n.flags?t[n.directiveStart]:null}(t.nodeIndex,t.lView)),t.component)}function xu(e){Au(e);const t=Ou(e,!1);return null===t?null:t.lView[8]}function Cu(e){const t=Ou(e,!1);if(null===t)return null;let n,r=t.lView;for(;null===r[0]&&(n=So(r));)r=n;return 512&r[2]?null:r[8]}function Eu(e){return[...ko(e).components]}function Su(e){const t=Ou(e,!1);return null===t?ea.NULL:new qn(t.lView[1].data[t.nodeIndex],t.lView)}function ku(e){const t=Ou(e);return void 0===t.directives&&(t.directives=uo(t.nodeIndex,t.lView,!1)),null===t.directives?[]:[...t.directives]}function Ou(e,t=!0){const n=ro(e);if(!n&&t)throw new Error("Invalid ng target");return n}function Du(e){return ro(e).native}function ju(e){Au(e);const t=Ou(e,!1);if(null===t)return[];const n=t.lView,r=n[7],o=n[1].cleanup,i=[];if(o&&r)for(let s=0;s<o.length;){const t=o[s++],a=o[s++];if("string"==typeof t){const c=t,l=ut(n[a]),u=r[o[s++]],d=o[s++],h="boolean"==typeof d||d>=0?"dom":"output",f="boolean"==typeof d&&d;e==l&&i.push({element:e,name:c,callback:u,useCapture:f,type:h})}}return i.sort(Iu),i}function Iu(e,t){return e.name==t.name?0:e.name<t.name?-1:1}function Au(e){if("undefined"!=typeof Element&&!(e instanceof Element))throw new Error("Expecting instance of DOM Element")}function Pu(e){gc(e),Eu(e).forEach(e=>pc(e))}let Tu=!1;function Nu(){Tu||(Tu=!0,Ru("getComponent",wu),Ru("getContext",xu),Ru("getListeners",ju),Ru("getOwningComponent",Cu),Ru("getHostElement",Du),Ru("getInjector",Su),Ru("getRootComponents",Eu),Ru("getDirectives",ku),Ru("applyChanges",Pu))}function Ru(e,t){if("undefined"==typeof COMPILED||!COMPILED){const n=W;if(n){let r=n.ng;r||(r=n.ng={}),r[e]=t}}}function Fu(e,t={}){const n=t.rendererFactory||lt,r=t.sanitizer||null,o=Qe(e);o.type!=e&&(o.type=e);const i=o.selectors[0][0],s=Xo(n.createRenderer(null,null),t.host||i,o.encapsulation),a=o.onPush?576:528,c=$u(t.scheduler,t.playerHandler),l=n.createRenderer(s,o),u=Jo(0,-1,null,1,0,null,null,null,null,null),d=Bo(null,u,c,a,null,null,n,l,void 0,t.injector||null);let h;Wt(d,null);try{n.begin&&n.begin(),h=Lu(Mu(s,o,d,n,l,r),o,d,c,t.hostFeatures||null),zo(u,d,null),qo(u,d,null,null)}finally{Yt(),n.end&&n.end()}return h}function Mu(e,t,n,r,o,i){const s=n[1];n[19]=e;const a=Ho(s,null,0,3,null,null),c=a.mergedAttrs=t.hostAttrs;null!==c&&(Ra(a,c),null!==e&&(fn(o,e,c),null!==a.classes&&is(o,e,a.classes),null!==a.styles&&os(o,e,a.styles)));const l=r.createRenderer(e,t),u=Bo(n,Yo(t),null,t.onPush?64:16,n[19],a,r,l,i);return s.firstCreatePass&&(Fn(Pn(a,n),s,t.type),ci(s,a),ui(a,n.length,1)),_i(n,u),n[19]=u}function Lu(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=At();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),ai(e,r,1),di(e,t,n));const o=Hn(t,e,t.length-1,r);so(o,t);const i=ht(r,t);return i&&so(i,t),o}(i,n,t);r.components.push(s),e[8]=s,o&&o.forEach(e=>e(s,t)),t.contentQueries&&t.contentQueries(1,s,n.length-1);const a=At();if(i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){en(a.index-19);const e=n[1];oi(e,t),ii(e,n,t.hostVars),si(t,s)}return s}function $u(e,t){return{components:[],scheduler:e||En,clean:ki,playerHandler:t||null,flags:0}}function Vu(e,t){const n=yt(e)[1],r=n.data.length-1;sn(n,{directiveStart:r,directiveEnd:r+1})}function Bu(e){return ko(e).clean}function Hu(e){return Object.getPrototypeOf(e.prototype).constructor}function Uu(e){let t=Hu(e.type),n=!0;const r=[e];for(;t;){let o=void 0;if(rt(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new Error("Directives cannot inherit Components");o=t.\u0275dir}if(o){if(n){r.push(o);const t=e;t.inputs=zu(e.inputs),t.declaredInputs=zu(e.declaredInputs),t.outputs=zu(e.outputs);const n=o.hostBindings;n&&Qu(e,n);const i=o.viewQuery,s=o.contentQueries;if(i&&qu(e,i),s&&Wu(e,s),E(e.inputs,o.inputs),E(e.declaredInputs,o.declaredInputs),E(e.outputs,o.outputs),rt(o)&&o.data.animation){const t=e.data;t.animation=(t.animation||[]).concat(o.data.animation)}t.afterContentChecked=t.afterContentChecked||o.afterContentChecked,t.afterContentInit=e.afterContentInit||o.afterContentInit,t.afterViewChecked=e.afterViewChecked||o.afterViewChecked,t.afterViewInit=e.afterViewInit||o.afterViewInit,t.doCheck=e.doCheck||o.doCheck,t.onDestroy=e.onDestroy||o.onDestroy,t.onInit=e.onInit||o.onInit}const t=o.features;if(t)for(let r=0;r<t.length;r++){const o=t[r];o&&o.ngInherit&&o(e),o===Uu&&(n=!1)}}t=Object.getPrototypeOf(t)}!function(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=mn(o.hostAttrs,n=mn(n,o.hostAttrs))}}(r)}function zu(e){return e===Ne?{}:e===Re?[]:e}function qu(e,t){const n=e.viewQuery;e.viewQuery=n?(e,r)=>{t(e,r),n(e,r)}:t}function Wu(e,t){const n=e.contentQueries;e.contentQueries=n?(e,r,o)=>{t(e,r,o),n(e,r,o)}:t}function Qu(e,t){const n=e.hostBindings;e.hostBindings=n?(e,r)=>{t(e,r),n(e,r)}:t}const Gu=["providersResolver"],Ku=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function Zu(e){let t=Hu(e.type),n=void 0;n=rt(e)?t.\u0275cmp:t.\u0275dir;const r=e;for(const o of Gu)r[o]=n[o];if(rt(n))for(const o of Ku)r[o]=n[o]}class Yu{constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}}function Ju(e){e.type.prototype.ngOnChanges&&(e.setInput=Xu,e.onChanges=function(){const e=ed(this),t=e&&e.current;if(t){const n=e.previous;if(n===Ne)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}})}function Xu(e,t,n,r){const o=ed(e)||function(e,t){return e.__ngSimpleChanges__=t}(e,{previous:Ne,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],c=s[a];i[a]=new Yu(c&&c.currentValue,t,s===Ne),e[r]=t}function ed(e){return e.__ngSimpleChanges__||null}function td(e,t,n,r,o){if(e=V(e),Array.isArray(e))for(let i=0;i<e.length;i++)td(e[i],t,n,r,o);else{const i=jt(),s=Dt();let a=Ys(e)?e:V(e.provide),c=Gs(e);const l=At(),u=65535&l.providerIndexes,d=l.directiveStart,h=l.providerIndexes>>16;if(Ys(e)||!e.multi){const r=new hn(c,o,xc),f=od(a,t,o?u:u+h,d);-1===f?(Fn(Pn(l,s),i,a),nd(i,e,t.length),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=65536),n.push(r),s.push(r)):(n[f]=r,s[f]=r)}else{const f=od(a,t,u+h,d),p=od(a,t,u,u+h),g=f>=0&&n[f],m=p>=0&&n[p];if(o&&!m||!o&&!g){Fn(Pn(l,s),i,a);const u=function(e,t,n,r,o){const i=new hn(e,n,xc);return i.multi=[],i.index=t,i.componentProviders=0,rd(i,o,r&&!n),i}(o?sd:id,n.length,o,r,c);!o&&m&&(n[p].providerFactory=u),nd(i,e,t.length,0),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=65536),n.push(u),s.push(u)}else nd(i,e,f>-1?f:p,rd(n[o?p:f],c,!o&&r));!o&&r&&m&&n[p].componentProviders++}}}function nd(e,t,n,r){const o=Ys(t);if(o||t.useClass){const i=(t.useClass||t).prototype.ngOnDestroy;if(i){const s=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const e=s.indexOf(n);-1===e?s.push(n,[r,i]):s[e+1].push(r,i)}else s.push(n,i)}}}function rd(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function od(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function id(e,t,n,r){return ad(this.multi,[])}function sd(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const e=this.providerFactory.componentProviders,t=Hn(n,n[1],this.providerFactory.index,r);i=t.slice(0,e),ad(o,i);for(let n=e;n<t.length;n++)i.push(t[n])}else i=[],ad(o,i);return i}function ad(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function cd(e,t=[]){return n=>{n.providersResolver=(n,r)=>function(e,t,n){const r=jt();if(r.firstCreatePass){const o=rt(e);td(n,r.data,r.blueprint,o,!0),td(t,r.data,r.blueprint,o,!1)}}(n,r?r(e):e,t)}}Ju.ngInherit=!0;class ld{}class ud{}function dd(e){const t=Error(`No component factory found for ${F(e)}. Did you add it to @NgModule.entryComponents?`);return t[hd]=e,t}const hd="ngComponent";class fd{resolveComponentFactory(e){throw dd(e)}}let pd=(()=>{class e{}return e.NULL=new fd,e})();class gd{constructor(e,t,n){this._parent=t,this._ngModule=n,this._factories=new Map;for(let r=0;r<e.length;r++){const t=e[r];this._factories.set(t.componentType,t)}}resolveComponentFactory(e){let t=this._factories.get(e);if(!t&&this._parent&&(t=this._parent.resolveComponentFactory(e)),!t)throw dd(e);return new md(t,this._ngModule)}}class md extends ud{constructor(e,t){super(),this.factory=e,this.ngModule=t,this.selector=e.selector,this.componentType=e.componentType,this.ngContentSelectors=e.ngContentSelectors,this.inputs=e.inputs,this.outputs=e.outputs}create(e,t,n,r){return this.factory.create(e,t,n,r||this.ngModule)}}let bd=(()=>{class e{constructor(e){this.nativeElement=e}}return e.__NG_ELEMENT_ID__=()=>vd(e),e})();const yd=function(e){return ds(e,At(),Dt())},vd=yd;class _d{}const wd=function(){var e={Important:1,DashCase:2};return e[e.Important]="Important",e[e.DashCase]="DashCase",e}();let xd=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Ed(),e})();const Cd=function(){const e=Dt(),t=mt(At().index,e);return function(e){const t=e[11];if(ct(t))return t;throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")}(Je(t)?t:e)},Ed=Cd;let Sd=(()=>{class e{}return e.\u0275prov=S({token:e,providedIn:"root",factory:()=>null}),e})();class kd{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Od=new kd("9.1.1");class Dd{constructor(){}supports(e){return Ba(e)}create(e){return new Id(e)}}const jd=(e,t)=>t;class Id{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||jd}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,o=null;for(;t||n;){const i=!n||t&&t.currentIndex<Nd(n,r,o)?t:n,s=Nd(i,r,o),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)r++;else{o||(o=[]);const e=s-r,t=a-r;if(e!=t){for(let n=0;n<e;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;t<=i&&i<e&&(o[n]=r+1)}o[i.previousIndex]=t-e}}s!==a&&e(i,s,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!Ba(e))throw new Error(`Error trying to diff '${F(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,o=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==o&&La(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,t)),La(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,t),i=!0),o=o._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Ma()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==o&&La(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,e,r,t)),La(o.item,e)||this._addIdentityChange(o,e)):(o=this._mismatch(o,e,r,t),i=!0),o=o._next,t++}),this.length=t;return this._truncate(o),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e,t;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=t)e.previousIndex=e.currentIndex,t=e._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(La(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(La(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):e=this._addAfter(new Ad(t,n),o,r),e}_verifyReinsertion(e,t,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new Td),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Td),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class Ad{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Pd{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&La(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class Td{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new Pd,this.map.set(t,n)),n.add(e)}get(e,t){const n=this.map.get(e);return n?n.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Nd(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}class Rd{constructor(){}supports(e){return e instanceof Map||Ha(e)}create(){return new Fd}}class Fd{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||Ha(e)))throw new Error(`Error trying to diff '${F(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new Md(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){La(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class Md{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let Ld=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(null!=n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new v,new b]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n}}return e.\u0275prov=S({token:e,providedIn:"root",factory:()=>new e([new Dd])}),e})(),$d=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new v,new b]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}return e.\u0275prov=S({token:e,providedIn:"root",factory:()=>new e([new Rd])}),e})();const Vd=[new Rd],Bd=new Ld([new Dd]),Hd=new $d(Vd);let Ud=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>qd(e,bd),e})();const zd=function(e,t){return hs(e,t,At(),Dt())},qd=zd;let Wd=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Gd(e,bd),e})();const Qd=function(e,t){return fs(e,t,At(),Dt())},Gd=Qd;function Kd(e,t,n,r){let o=`ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;return r&&(o+=" It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),function(e,t){const n=new Error(e);return Zd(n,t),n}(o,e)}function Zd(e,t){e.ngDebugContext=t,e.ngErrorLogger=t.logError.bind(t)}function Yd(e){return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${e}`)}function Jd(e,t,n){const r=e.state,o=1792&r;return o===t?(e.state=-1793&r|n,e.initIndex=-1,!0):o===n}function Xd(e,t,n){return(1792&e.state)===t&&e.initIndex<=n&&(e.initIndex=n+1,!0)}function eh(e,t){return e.nodes[t]}function th(e,t){return e.nodes[t]}function nh(e,t){return e.nodes[t]}function rh(e,t){return e.nodes[t]}function oh(e,t){return e.nodes[t]}class ih{}const sh={setCurrentNode:void 0,createRootView:void 0,createEmbeddedView:void 0,createComponentView:void 0,createNgModuleRef:void 0,overrideProvider:void 0,overrideComponentView:void 0,clearOverrides:void 0,checkAndUpdateView:void 0,checkNoChangesView:void 0,destroyView:void 0,resolveDep:void 0,createDebugContext:void 0,handleEvent:void 0,updateDirectives:void 0,updateRenderer:void 0,dirtyParentQueries:void 0},ah=()=>{},ch=new Map;function lh(e){let t=ch.get(e);return t||(t=F(e)+"_"+ch.size,ch.set(e,t)),t}function uh(e,t,n,r){if(Va.isWrapped(r)){r=Va.unwrap(r);const o=e.def.nodes[t].bindingIndex+n,i=Va.unwrap(e.oldValues[o]);e.oldValues[o]=new Va(i)}return r}function dh(e){return{id:"$$undefined",styles:e.styles,encapsulation:e.encapsulation,data:e.data}}let hh=0;function fh(e,t,n,r){return!(!(2&e.state)&&La(e.oldValues[t.bindingIndex+n],r))}function ph(e,t,n,r){return!!fh(e,t,n,r)&&(e.oldValues[t.bindingIndex+n]=r,!0)}function gh(e,t,n,r){const o=e.oldValues[t.bindingIndex+n];if(1&e.state||!$a(o,r)){const i=t.bindings[n].name;throw Kd(sh.createDebugContext(e,t.nodeIndex),`${i}: ${o}`,`${i}: ${r}`,0!=(1&e.state))}}function mh(e){let t=e;for(;t;)2&t.def.flags&&(t.state|=8),t=t.viewContainerParent||t.parent}function bh(e,t){let n=e;for(;n&&n!==t;)n.state|=64,n=n.viewContainerParent||n.parent}function yh(e,t,n,r){try{return mh(33554432&e.def.nodes[t].flags?th(e,t).componentView:e),sh.handleEvent(e,t,n,r)}catch(o){e.root.errorHandler.handleError(o)}}function vh(e){return e.parent?th(e.parent,e.parentNodeDef.nodeIndex):null}function _h(e){return e.parent?e.parentNodeDef.parent:null}function wh(e,t){switch(201347067&t.flags){case 1:return th(e,t.nodeIndex).renderElement;case 2:return eh(e,t.nodeIndex).renderText}}function xh(e){return!!e.parent&&!!(32768&e.parentNodeDef.flags)}function Ch(e){return!(!e.parent||32768&e.parentNodeDef.flags)}function Eh(e){return 1<<e%32}function Sh(e){const t={};let n=0;const r={};return e&&e.forEach(([e,o])=>{"number"==typeof e?(t[e]=o,n|=Eh(e)):r[e]=o}),{matchedQueries:t,references:r,matchedQueryIds:n}}function kh(e,t){return e.map(e=>{let n,r;return Array.isArray(e)?[r,n]=e:(r=0,n=e),n&&("function"==typeof n||"object"==typeof n)&&t&&Object.defineProperty(n,"__source",{value:t,configurable:!0}),{flags:r,token:n,tokenKey:lh(n)}})}function Oh(e,t,n){let r=n.renderParent;return r?0==(1&r.flags)||0==(33554432&r.flags)||r.element.componentRendererType&&r.element.componentRendererType.encapsulation===Te.Native?th(e,n.renderParent.nodeIndex).renderElement:void 0:t}const Dh=new WeakMap;function jh(e){let t=Dh.get(e);return t||(t=e(()=>ah),t.factory=e,Dh.set(e,t)),t}function Ih(e,t,n,r,o){3===t&&(n=e.renderer.parentNode(wh(e,e.def.lastRenderRootNode))),Ah(e,t,0,e.def.nodes.length-1,n,r,o)}function Ah(e,t,n,r,o,i,s){for(let a=n;a<=r;a++){const n=e.def.nodes[a];11&n.flags&&Th(e,n,t,o,i,s),a+=n.childCount}}function Ph(e,t,n,r,o,i){let s=e;for(;s&&!xh(s);)s=s.parent;const a=s.parent,c=_h(s),l=c.nodeIndex+c.childCount;for(let u=c.nodeIndex+1;u<=l;u++){const e=a.def.nodes[u];e.ngContentIndex===t&&Th(a,e,n,r,o,i),u+=e.childCount}if(!a.parent){const s=e.root.projectableNodes[t];if(s)for(let t=0;t<s.length;t++)Nh(e,s[t],n,r,o,i)}}function Th(e,t,n,r,o,i){if(8&t.flags)Ph(e,t.ngContent.index,n,r,o,i);else{const s=wh(e,t);if(3===n&&33554432&t.flags&&48&t.bindingFlags?(16&t.bindingFlags&&Nh(e,s,n,r,o,i),32&t.bindingFlags&&Nh(th(e,t.nodeIndex).componentView,s,n,r,o,i)):Nh(e,s,n,r,o,i),16777216&t.flags){const s=th(e,t.nodeIndex).viewContainer._embeddedViews;for(let e=0;e<s.length;e++)Ih(s[e],n,r,o,i)}1&t.flags&&!t.element.name&&Ah(e,n,t.nodeIndex+1,t.nodeIndex+t.childCount,r,o,i)}}function Nh(e,t,n,r,o,i){const s=e.renderer;switch(n){case 1:s.appendChild(r,t);break;case 2:s.insertBefore(r,t,o);break;case 3:s.removeChild(r,t);break;case 0:i.push(t)}}const Rh=/^:([^:]+):(.+)$/;function Fh(e){if(":"===e[0]){const t=e.match(Rh);return[t[1],t[2]]}return["",e]}function Mh(e){let t=0;for(let n=0;n<e.length;n++)t|=e[n].flags;return t}function Lh(e,t){let n="";for(let r=0;r<2*e;r+=2)n=n+t[r]+Vh(t[r+1]);return n+t[2*e]}function $h(e,t,n,r,o,i,s,a,c,l,u,d,h,f,p,g,m,b,y,v){switch(e){case 1:return t+Vh(n)+r;case 2:return t+Vh(n)+r+Vh(o)+i;case 3:return t+Vh(n)+r+Vh(o)+i+Vh(s)+a;case 4:return t+Vh(n)+r+Vh(o)+i+Vh(s)+a+Vh(c)+l;case 5:return t+Vh(n)+r+Vh(o)+i+Vh(s)+a+Vh(c)+l+Vh(u)+d;case 6:return t+Vh(n)+r+Vh(o)+i+Vh(s)+a+Vh(c)+l+Vh(u)+d+Vh(h)+f;case 7:return t+Vh(n)+r+Vh(o)+i+Vh(s)+a+Vh(c)+l+Vh(u)+d+Vh(h)+f+Vh(p)+g;case 8:return t+Vh(n)+r+Vh(o)+i+Vh(s)+a+Vh(c)+l+Vh(u)+d+Vh(h)+f+Vh(p)+g+Vh(m)+b;case 9:return t+Vh(n)+r+Vh(o)+i+Vh(s)+a+Vh(c)+l+Vh(u)+d+Vh(h)+f+Vh(p)+g+Vh(m)+b+Vh(y)+v;default:throw new Error("Does not support more than 9 expressions")}}function Vh(e){return null!=e?e.toString():""}const Bh=[],Hh={},Uh={},zh=lh(ea),qh=lh(re),Wh=lh(ve);function Qh(e,t,n,r){return n=V(n),{index:-1,deps:kh(r,F(t)),flags:e,token:t,value:n}}function Gh(e){const t={},n=[];let r=null;for(let o=0;o<e.length;o++){const i=e[o];i.token===Ls&&(r=i.value),1073741824&i.flags&&n.push(i.token),i.index=o,t[lh(i.token)]=i}return{factory:null,providersByKey:t,providers:e,modules:n,scope:r}}function Kh(e,t,n=ea.THROW_IF_NOT_FOUND){const r=le(e);try{if(8&t.flags)return t.token;if(2&t.flags&&(n=null),1&t.flags)return e._parent.get(t.token,n);const o=t.tokenKey;switch(o){case zh:case qh:case Wh:return e}const i=e._def.providersByKey[o];let s;if(i){let t=e._providers[i.index];return void 0===t&&(t=e._providers[i.index]=Zh(e,i)),t===Uh?void 0:t}if((s=D(t.token))&&function(e,t){const n=t.providedIn;return null!=n&&("any"===n||n===e._def.scope||function(e,t){return e._def.modules.indexOf(t)>-1}(e,n))}(e,s)){const n=e._providers.length;return e._def.providers[n]=e._def.providersByKey[t.tokenKey]={flags:5120,value:s.factory,deps:[],index:n,token:t.token},e._providers[n]=Uh,e._providers[n]=Zh(e,e._def.providersByKey[t.tokenKey])}return 4&t.flags?n:e._parent.get(t.token,n)}finally{le(r)}}function Zh(e,t){let n;switch(201347067&t.flags){case 512:n=function(e,t,n){const r=n.length;switch(r){case 0:return new t;case 1:return new t(Kh(e,n[0]));case 2:return new t(Kh(e,n[0]),Kh(e,n[1]));case 3:return new t(Kh(e,n[0]),Kh(e,n[1]),Kh(e,n[2]));default:const o=[];for(let t=0;t<r;t++)o[t]=Kh(e,n[t]);return new t(...o)}}(e,t.value,t.deps);break;case 1024:n=function(e,t,n){const r=n.length;switch(r){case 0:return t();case 1:return t(Kh(e,n[0]));case 2:return t(Kh(e,n[0]),Kh(e,n[1]));case 3:return t(Kh(e,n[0]),Kh(e,n[1]),Kh(e,n[2]));default:const o=[];for(let t=0;t<r;t++)o[t]=Kh(e,n[t]);return t(...o)}}(e,t.value,t.deps);break;case 2048:n=Kh(e,t.deps[0]);break;case 256:n=t.value}return n===Uh||null===n||"object"!=typeof n||131072&t.flags||"function"!=typeof n.ngOnDestroy||(t.flags|=131072),void 0===n?Uh:n}function Yh(e,t){const n=e.viewContainer._embeddedViews;if((null==t||t>=n.length)&&(t=n.length-1),t<0)return null;const r=n[t];return r.viewContainerParent=null,Se(n,t),sh.dirtyParentQueries(r),Xh(r),r}function Jh(e,t,n){const r=t?wh(t,t.def.lastRenderRootNode):e.renderElement,o=n.renderer.parentNode(r),i=n.renderer.nextSibling(r);Ih(n,2,o,i,void 0)}function Xh(e){Ih(e,3,null,null,void 0)}const ef={};function tf(e,t,n,r,o,i){return new rf(e,t,n,r,o,i)}function nf(e){return e.viewDefFactory}class rf extends ud{constructor(e,t,n,r,o,i){super(),this.selector=e,this.componentType=t,this._inputs=r,this._outputs=o,this.ngContentSelectors=i,this.viewDefFactory=n}get inputs(){const e=[],t=this._inputs;for(let n in t)e.push({propName:n,templateName:t[n]});return e}get outputs(){const e=[];for(let t in this._outputs)e.push({propName:t,templateName:this._outputs[t]});return e}create(e,t,n,r){if(!r)throw new Error("ngModule should be provided");const o=jh(this.viewDefFactory),i=o.nodes[0].element.componentProvider.nodeIndex,s=sh.createRootView(e,t||[],n,o,r,ef),a=nh(s,i).instance;return n&&s.renderer.setAttribute(th(s,0).renderElement,"ng-version",Od.full),new of(s,new lf(s),a)}}class of extends ld{constructor(e,t,n){super(),this._view=e,this._viewRef=t,this._component=n,this._elDef=this._view.def.nodes[0],this.hostView=t,this.changeDetectorRef=t,this.instance=n}get location(){return new bd(th(this._view,this._elDef.nodeIndex).renderElement)}get injector(){return new ff(this._view,this._elDef)}get componentType(){return this._component.constructor}destroy(){this._viewRef.destroy()}onDestroy(e){this._viewRef.onDestroy(e)}}function sf(e,t,n){return new af(e,t,n)}class af{constructor(e,t,n){this._view=e,this._elDef=t,this._data=n,this._embeddedViews=[]}get element(){return new bd(this._data.renderElement)}get injector(){return new ff(this._view,this._elDef)}get parentInjector(){let e=this._view,t=this._elDef.parent;for(;!t&&e;)t=_h(e),e=e.parent;return e?new ff(e,t):new ff(this._view,null)}clear(){for(let e=this._embeddedViews.length-1;e>=0;e--){const t=Yh(this._data,e);sh.destroyView(t)}}get(e){const t=this._embeddedViews[e];if(t){const e=new lf(t);return e.attachToViewContainerRef(this),e}return null}get length(){return this._embeddedViews.length}createEmbeddedView(e,t,n){const r=e.createEmbeddedView(t||{});return this.insert(r,n),r}createComponent(e,t,n,r,o){const i=n||this.parentInjector;o||e instanceof md||(o=i.get(ve));const s=e.create(i,r,void 0,o);return this.insert(s.hostView,t),s}insert(e,t){if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");const n=e;return function(e,t,n,r){let o=t.viewContainer._embeddedViews;null==n&&(n=o.length),r.viewContainerParent=e,Ee(o,n,r),function(e,t){const n=vh(t);if(!n||n===e||16&t.state)return;t.state|=16;let r=n.template._projectedViews;r||(r=n.template._projectedViews=[]),r.push(t),function(e,t){if(4&t.flags)return;e.nodeFlags|=4,t.flags|=4;let n=t.parent;for(;n;)n.childFlags|=4,n=n.parent}(t.parent.def,t.parentNodeDef)}(t,r),sh.dirtyParentQueries(r),Jh(t,n>0?o[n-1]:null,r)}(this._view,this._data,t,n._view),n.attachToViewContainerRef(this),e}move(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");const n=this._embeddedViews.indexOf(e._view);return function(e,t,n){const r=e.viewContainer._embeddedViews,o=r[t];Se(r,t),null==n&&(n=r.length),Ee(r,n,o),sh.dirtyParentQueries(o),Xh(o),Jh(e,n>0?r[n-1]:null,o)}(this._data,n,t),e}indexOf(e){return this._embeddedViews.indexOf(e._view)}remove(e){const t=Yh(this._data,e);t&&sh.destroyView(t)}detach(e){const t=Yh(this._data,e);return t?new lf(t):null}}function cf(e){return new lf(e)}class lf{constructor(e){this._view=e,this._viewContainerRef=null,this._appRef=null}get rootNodes(){return function(e){const t=[];return Ih(e,0,void 0,void 0,t),t}(this._view)}get context(){return this._view.context}get destroyed(){return 0!=(128&this._view.state)}markForCheck(){mh(this._view)}detach(){this._view.state&=-5}detectChanges(){const e=this._view.root.rendererFactory;e.begin&&e.begin();try{sh.checkAndUpdateView(this._view)}finally{e.end&&e.end()}}checkNoChanges(){sh.checkNoChangesView(this._view)}reattach(){this._view.state|=4}onDestroy(e){this._view.disposables||(this._view.disposables=[]),this._view.disposables.push(e)}destroy(){this._appRef?this._appRef.detachView(this):this._viewContainerRef&&this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),sh.destroyView(this._view)}detachFromAppRef(){this._appRef=null,Xh(this._view),sh.dirtyParentQueries(this._view)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}}function uf(e,t){return new df(e,t)}class df extends Ud{constructor(e,t){super(),this._parentView=e,this._def=t}createEmbeddedView(e){return new lf(sh.createEmbeddedView(this._parentView,this._def,this._def.element.template,e))}get elementRef(){return new bd(th(this._parentView,this._def.nodeIndex).renderElement)}}function hf(e,t){return new ff(e,t)}class ff{constructor(e,t){this.view=e,this.elDef=t}get(e,t=ea.THROW_IF_NOT_FOUND){return sh.resolveDep(this.view,this.elDef,!!this.elDef&&0!=(33554432&this.elDef.flags),{flags:0,token:e,tokenKey:lh(e)},t)}}function pf(e,t){const n=e.def.nodes[t];if(1&n.flags){const t=th(e,n.nodeIndex);return n.element.template?t.template:t.renderElement}if(2&n.flags)return eh(e,n.nodeIndex).renderText;if(20240&n.flags)return nh(e,n.nodeIndex).instance;throw new Error(`Illegal state: read nodeValue for node index ${t}`)}function gf(e,t,n,r){return new mf(e,t,n,r)}class mf{constructor(e,t,n,r){this._moduleType=e,this._parent=t,this._bootstrapComponents=n,this._def=r,this._destroyListeners=[],this._destroyed=!1,this.injector=this,function(e){const t=e._def,n=e._providers=ke(t.providers.length);for(let r=0;r<t.providers.length;r++){const o=t.providers[r];4096&o.flags||void 0===n[r]&&(n[r]=Zh(e,o))}}(this)}get(e,t=ea.THROW_IF_NOT_FOUND,n=x.Default){let r=0;return n&x.SkipSelf?r|=1:n&x.Self&&(r|=4),Kh(this,{token:e,tokenKey:lh(e),flags:r},t)}get instance(){return this.get(this._moduleType)}get componentFactoryResolver(){return this.get(pd)}destroy(){if(this._destroyed)throw new Error(`The ng module ${F(this.instance.constructor)} has already been destroyed.`);this._destroyed=!0,function(e,t){const n=e._def,r=new Set;for(let o=0;o<n.providers.length;o++)if(131072&n.providers[o].flags){const t=e._providers[o];if(t&&t!==Uh){const e=t.ngOnDestroy;"function"!=typeof e||r.has(t)||(e.apply(t),r.add(t))}}}(this),this._destroyListeners.forEach(e=>e())}onDestroy(e){this._destroyListeners.push(e)}}const bf=lh(xd),yf=lh(bd),vf=lh(Wd),_f=lh(Ud),wf=lh(gs),xf=lh(ea),Cf=lh(re);function Ef(e,t,n,r,o,i,s,a){const c=[];if(s)for(let u in s){const[e,t]=s[u];c[e]={flags:8,name:u,nonMinifiedName:t,ns:null,securityContext:null,suffix:null}}const l=[];if(a)for(let u in a)l.push({type:1,propName:u,target:null,eventName:a[u]});return Of(e,t|=16384,n,r,o,o,i,c,l)}function Sf(e,t,n){return Of(-1,e|=16,null,0,t,t,n)}function kf(e,t,n,r,o){return Of(-1,e,t,0,n,r,o)}function Of(e,t,n,r,o,i,s,a,c){const{matchedQueries:l,references:u,matchedQueryIds:d}=Sh(n);c||(c=[]),a||(a=[]),i=V(i);const h=kh(s,F(o));return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:l,matchedQueryIds:d,references:u,ngContentIndex:-1,childCount:r,bindings:a,bindingFlags:Mh(a),outputs:c,element:null,provider:{token:o,value:i,deps:h},text:null,query:null,ngContent:null}}function Df(e,t){return Pf(e,t)}function jf(e,t){let n=e;for(;n.parent&&!xh(n);)n=n.parent;return Tf(n.parent,_h(n),!0,t.provider.value,t.provider.deps)}function If(e,t){const n=Tf(e,t.parent,(32768&t.flags)>0,t.provider.value,t.provider.deps);if(t.outputs.length)for(let r=0;r<t.outputs.length;r++){const o=t.outputs[r],i=n[o.propName];if(!Mc(i))throw new Error(`@Output ${o.propName} not initialized in '${n.constructor.name}'.`);{const n=i.subscribe(Af(e,t.parent.nodeIndex,o.eventName));e.disposables[t.outputIndex+r]=n.unsubscribe.bind(n)}}return n}function Af(e,t,n){return r=>yh(e,t,n,r)}function Pf(e,t){const n=(8192&t.flags)>0,r=t.provider;switch(201347067&t.flags){case 512:return Tf(e,t.parent,n,r.value,r.deps);case 1024:return function(e,t,n,r,o){const i=o.length;switch(i){case 0:return r();case 1:return r(Rf(e,t,n,o[0]));case 2:return r(Rf(e,t,n,o[0]),Rf(e,t,n,o[1]));case 3:return r(Rf(e,t,n,o[0]),Rf(e,t,n,o[1]),Rf(e,t,n,o[2]));default:const s=[];for(let r=0;r<i;r++)s.push(Rf(e,t,n,o[r]));return r(...s)}}(e,t.parent,n,r.value,r.deps);case 2048:return Rf(e,t.parent,n,r.deps[0]);case 256:return r.value}}function Tf(e,t,n,r,o){const i=o.length;switch(i){case 0:return new r;case 1:return new r(Rf(e,t,n,o[0]));case 2:return new r(Rf(e,t,n,o[0]),Rf(e,t,n,o[1]));case 3:return new r(Rf(e,t,n,o[0]),Rf(e,t,n,o[1]),Rf(e,t,n,o[2]));default:const s=[];for(let r=0;r<i;r++)s.push(Rf(e,t,n,o[r]));return new r(...s)}}const Nf={};function Rf(e,t,n,r,o=ea.THROW_IF_NOT_FOUND){if(8&r.flags)return r.token;const i=e;2&r.flags&&(o=null);const s=r.tokenKey;s===wf&&(n=!(!t||!t.element.componentView)),t&&1&r.flags&&(n=!1,t=t.parent);let a=e;for(;a;){if(t)switch(s){case bf:return Ff(a,t,n).renderer;case yf:return new bd(th(a,t.nodeIndex).renderElement);case vf:return th(a,t.nodeIndex).viewContainer;case _f:if(t.element.template)return th(a,t.nodeIndex).template;break;case wf:return cf(Ff(a,t,n));case xf:case Cf:return hf(a,t);default:const e=(n?t.element.allProviders:t.element.publicProviders)[s];if(e){let t=nh(a,e.nodeIndex);return t||(t={instance:Pf(a,e)},a.nodes[e.nodeIndex]=t),t.instance}}n=xh(a),t=_h(a),a=a.parent,4&r.flags&&(a=null)}const c=i.root.injector.get(r.token,Nf);return c!==Nf||o===Nf?c:i.root.ngModule.injector.get(r.token,o)}function Ff(e,t,n){let r;if(n)r=th(e,t.nodeIndex).componentView;else for(r=e;r.parent&&!xh(r);)r=r.parent;return r}function Mf(e,t,n,r,o,i){if(32768&n.flags){const t=th(e,n.parent.nodeIndex).componentView;2&t.def.flags&&(t.state|=8)}if(t.instance[n.bindings[r].name]=o,524288&n.flags){i=i||{};const t=Va.unwrap(e.oldValues[n.bindingIndex+r]);i[n.bindings[r].nonMinifiedName]=new Yu(t,o,0!=(2&e.state))}return e.oldValues[n.bindingIndex+r]=o,i}function Lf(e,t){if(!(e.def.nodeFlags&t))return;const n=e.def.nodes;let r=0;for(let o=0;o<n.length;o++){const i=n[o];let s=i.parent;for(!s&&i.flags&t&&Vf(e,o,i.flags&t,r++),0==(i.childFlags&t)&&(o+=i.childCount);s&&1&s.flags&&o===s.nodeIndex+s.childCount;)s.directChildFlags&t&&(r=$f(e,s,t,r)),s=s.parent}}function $f(e,t,n,r){for(let o=t.nodeIndex+1;o<=t.nodeIndex+t.childCount;o++){const t=e.def.nodes[o];t.flags&n&&Vf(e,o,t.flags&n,r++),o+=t.childCount}return r}function Vf(e,t,n,r){const o=nh(e,t);if(!o)return;const i=o.instance;i&&(sh.setCurrentNode(e,t),1048576&n&&Xd(e,512,r)&&i.ngAfterContentInit(),2097152&n&&i.ngAfterContentChecked(),4194304&n&&Xd(e,768,r)&&i.ngAfterViewInit(),8388608&n&&i.ngAfterViewChecked(),131072&n&&i.ngOnDestroy())}class Bf extends pd{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=Qe(e);return new zf(t,this.ngModule)}}function Hf(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const Uf=new ne("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>En});class zf extends ud{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(Co).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return Hf(this.componentDef.inputs)}get outputs(){return Hf(this.componentDef.outputs)}create(e,t,n,r){const o=(r=r||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Nf,o);return i!==Nf||r===Nf?i:t.get(n,r,o)}}}(e,r.injector):e,i=o.get(_d,lt),s=o.get(Sd,null),a=i.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",l=n?Xo(a,n,this.componentDef.encapsulation):Vo(c,i.createRenderer(null,this.componentDef),function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(c)),u=this.componentDef.onPush?576:528,d="string"==typeof n&&/^#root-ng-internal-isolated-\d+/.test(n),h=$u(),f=Jo(0,-1,null,1,0,null,null,null,null,null),p=Bo(null,f,h,u,null,null,i,a,s,o);let g,m;Wt(p,null);try{const e=Mu(l,this.componentDef,p,i,a);if(l)if(n)fn(a,l,["ng-version",Od.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!yo(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&fn(a,l,e),t&&t.length>0&&is(a,l,t.join(" "))}m=pt(p[1],0),t&&(m.projection=t.map(e=>Array.from(e))),g=Lu(e,this.componentDef,p,h,[Vu]),zo(f,p,null)}finally{Yt()}const b=new qf(this.componentType,g,ds(bd,m,p),p,m);return n&&!d||(b.hostView._tViewNode.child=m),b}}class qf extends ld{constructor(e,t,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.destroyCbs=[],this.instance=t,this.hostView=this.changeDetectorRef=new as(r),this.hostView._tViewNode=Uo(r[1],null,-1,r),this.componentType=e}get injector(){return new qn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(e=>e()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(e){this.destroyCbs&&this.destroyCbs.push(e)}}const Wf=void 0;var Qf=["en",[["a","p"],["AM","PM"],Wf],[["AM","PM"],Wf,Wf],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Wf,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Wf,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Wf,"{1} 'at' {0}",Wf],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];let Gf={};function Kf(e,t,n){"string"!=typeof t&&(n=t,t=e[tp.LocaleId]),t=t.toLowerCase().replace(/_/g,"-"),Gf[t]=e,n&&(Gf[t][tp.ExtraData]=n)}function Zf(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}(e);let n=Xf(t);if(n)return n;const r=t.split("-")[0];if(n=Xf(r),n)return n;if("en"===r)return Qf;throw new Error(`Missing locale data for the locale "${e}".`)}function Yf(e){return Zf(e)[tp.CurrencyCode]||null}function Jf(e){return Zf(e)[tp.PluralCase]}function Xf(e){return e in Gf||(Gf[e]=W.ng&&W.ng.common&&W.ng.common.locales&&W.ng.common.locales[e]),Gf[e]}function ep(){Gf={}}const tp=function(){var e={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};return e[e.LocaleId]="LocaleId",e[e.DayPeriodsFormat]="DayPeriodsFormat",e[e.DayPeriodsStandalone]="DayPeriodsStandalone",e[e.DaysFormat]="DaysFormat",e[e.DaysStandalone]="DaysStandalone",e[e.MonthsFormat]="MonthsFormat",e[e.MonthsStandalone]="MonthsStandalone",e[e.Eras]="Eras",e[e.FirstDayOfWeek]="FirstDayOfWeek",e[e.WeekendRange]="WeekendRange",e[e.DateFormat]="DateFormat",e[e.TimeFormat]="TimeFormat",e[e.DateTimeFormat]="DateTimeFormat",e[e.NumberSymbols]="NumberSymbols",e[e.NumberFormats]="NumberFormats",e[e.CurrencyCode]="CurrencyCode",e[e.CurrencySymbol]="CurrencySymbol",e[e.CurrencyName]="CurrencyName",e[e.Currencies]="Currencies",e[e.Directionality]="Directionality",e[e.PluralCase]="PluralCase",e[e.ExtraData]="ExtraData",e}(),np="en-US",rp="USD",op=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,ip=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,sp=/\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,ap=/\ufffd(\d+):?\d*\ufffd/gi,cp=/({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,lp=/\[(\ufffd.+?\ufffd?)\]/,up=/\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g,dp=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,hp=/{([A-Z0-9_]+)}/g,fp=/\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g,pp=/\/\*/,gp=/\d+\:(\d+)/;function mp(e){if(!e)return[];let t=0;const n=[],r=[],o=/[{}]/g;let i;for(o.lastIndex=0;i=o.exec(e);){const o=i.index;if("}"==i[0]){if(n.pop(),0==n.length){const n=e.substring(t,o);op.test(n)?r.push(bp(n)):r.push(n),t=o+1}}else{if(0==n.length){const n=e.substring(t,o);r.push(n),t=o+1}n.push("{")}}const s=e.substring(t);return r.push(s),r}function bp(e){const t=[],n=[];let r=1,o=0;const i=mp(e=e.replace(op,(function(e,t,n){return r="select"===n?0:1,o=parseInt(t.substr(1),10),""})));for(let s=0;s<i.length;){let e=i[s++].trim();1===r&&(e=e.replace(/\s*(?:=)?(\w+)\s*/,"$1")),e.length&&t.push(e);const o=mp(i[s++]);t.length>n.length&&n.push(o)}return{type:r,mainBinding:o,cases:t,values:n}}function yp(e){let t,n,r="",o=0,i=!1;for(;null!==(t=ip.exec(e));)i?t[0]===`\ufffd/*${n}\ufffd`&&(o=t.index,i=!1):(r+=e.substring(o,t.index+t[0].length),n=t[1],i=!0);return r+=e.substr(o),r}function vp(e,t,n,r=null){const o=[null,null],i=e.split(ap);let s=0;for(let a=0;a<i.length;a++){const e=i[a];if(1&a){const t=parseInt(e,10);o.push(-1-t),s|=Cp(t)}else""!==e&&o.push(e)}return o.push(t<<2|(n?1:0)),n&&o.push(n,r),o[0]=s,o[1]=o.length-2,o}function _p(e,t=0){let n;t|=Cp(e.mainBinding);for(let r=0;r<e.values.length;r++){const o=e.values[r];for(let e=0;e<o.length;e++){const r=o[e];if("string"==typeof r)for(;n=ap.exec(r);)t|=Cp(parseInt(n[1],10));else t=_p(r,t)}}return t}const wp=[];let xp=-1;function Cp(e){return 1<<Math.min(e,31)}const Ep=[];function Sp(e,t,n){const r=jt();wp[++xp]=e,Qc(!0),r.firstCreatePass&&null===r.data[e+19]&&function(e,t,n,r,o){const i=t.blueprint.length-19;kp=0;const s=At(),a=Tt()?s:s&&s.parent;let c=a&&a!==e[6]?a.index-19:n,l=0;Ep[l]=c;const u=[];if(n>0&&s!==a){let e=s.index-19;Tt()||(e=~e),u.push(e<<3|0)}const d=[],h=[],f=function(e,t){if("number"!=typeof t)return yp(e);{const n=e.indexOf(`:${t}\ufffd`)+2+t.toString().length,r=e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));return yp(e.substring(n,r))}}(r,o),p=(g=f,g.replace(Up," ")).split(sp);var g;for(let m=0;m<p.length;m++){let e=p[m];if(1&m)if("/"===e.charAt(0)){if("#"===e.charAt(1)){const t=parseInt(e.substr(2),10);c=Ep[--l],u.push(t<<3|5)}}else{const t=parseInt(e.substr(1),10),n="#"===e.charAt(0);u.push((n?t:~t)<<3|0,c<<17|1),n&&(Ep[++l]=c=t)}else{const t=mp(e);for(let e=0;e<t.length;e++)if(1&e){const n=t[e];if("object"!=typeof n)throw new Error(`Unable to parse ICU expression in "${f}" message.`);const r=i+kp++;u.push(Ao,"",r,c<<17|1);const o=_p(n);Vp(h,n,r,r);const s=h.length-1;d.push(Cp(n.mainBinding),3,-1-n.mainBinding,r<<2|2,s,o,2,r<<2|3,s)}else if(""!==t[e]){const n=t[e],r=n.match(ap),o=i+kp++;u.push(r?"":n,o,c<<17|1),r&&we(vp(n,o),d)}}}kp>0&&function(e,t,n){if(n>0&&e.firstCreatePass){for(let r=0;r<n;r++)e.blueprint.push(null),e.data.push(null),t.push(null);e.expandoInstructions?e.expandoInstructions.push(n):e.expandoStartIndex+=n}}(t,e,kp),t.data[n+19]={vars:kp,create:u,update:d,icus:h.length?h:null}}(Dt(),r,e,t,n)}let kp;function Op(e,t,n,r,o){const i=t.next;r||(r=n),r===n&&t!==n.child?(t.next=n.child,n.child=t):r!==n&&t!==r.next?(t.next=r.next,r.next=t):t.next=null,n!==o[6]&&(t.parent=n);let s=t.next;for(;s;)s.next===t&&(s.next=i),s=s.next;if(1===t.type)return ns(e,o,t),t;Yi(e,o,ht(t,o),t);const a=o[t.index];return 0!==t.type&&Xe(a)&&Yi(e,o,a[7],t),t}function Dp(e,t={}){let n=e;if(lp.test(e)){const e={},t=[0];n=n.replace(up,(n,r,o)=>{const i=r||o,s=e[i]||[];if(s.length||(i.split("|").forEach(e=>{const t=e.match(gp),n=t?parseInt(t[1],10):0,r=pp.test(e);s.push([n,r,e])}),e[i]=s),!s.length)throw new Error(`i18n postprocess: unmatched placeholder - ${i}`);const a=t[t.length-1];let c=0;for(let e=0;e<s.length;e++)if(s[e][0]===a){c=e;break}const[l,u,d]=s[c];return u?t.pop():a!==l&&t.push(l),s.splice(c,1),d})}return Object.keys(t).length?(n=n.replace(dp,(e,n,r,o,i,s)=>t.hasOwnProperty(r)?`${n}${t[r]}${s}`:e),n=n.replace(hp,(e,n)=>t.hasOwnProperty(n)?t[n]:e),n=n.replace(fp,(e,n)=>{if(t.hasOwnProperty(n)){const r=t[n];if(!r.length)throw new Error(`i18n postprocess: unmatched ICU - ${e} with key: ${n}`);return r.shift()}return e}),n):n}function jp(){const e=Dt();!function(e,t){const n=wp[xp--],r=e.data[n+19],o=At(),i=Ap(n,r.create,e,t);let s=n+1;for(;s<=o.index-19;){-1===i.indexOf(s)&&Pp(e,t,s,!0);const n=pt(e,s);!n||0!==n.type&&3!==n.type&&4!==n.type||null===n.localNames||(s+=n.localNames.length>>1),s++}}(jt(),e),Qc(!1)}function Ip(e,t,n,r,o,i){const s=At();t[n+19]=o;const a=Ho(e,t[6],n,r,i,null);return s&&s.next===a&&(s.next=null),a}function Ap(e,t,n,r){const o=r[11];let i=null,s=null;const a=[];for(let c=0;c<t.length;c++){const l=t[c];if("string"==typeof l){const e=Fi(l,o),u=t[++c];s=i,i=Ip(n,r,u,3,e,null),a.push(u),Nt()}else if("number"==typeof l)switch(7&l){case 1:const o=l>>>17;let u;u=o===e?r[6]:pt(n,o),s=Op(n,i,u,s,r);break;case 0:const d=l>=0,h=(d?l:~l)>>>3;a.push(h),s=i,i=pt(n,h),i&&Pt(i,d);break;case 5:s=i=pt(n,l>>>3),Pt(i,!1);break;case 4:const f=t[++c],p=t[++c];fi(pt(n,l>>>3),r,f,p,null,null);break;default:throw new Error(`Unable to determine the type of mutate operation for "${l}"`)}else switch(l){case Ao:const e=t[++c],u=t[++c],d=o.createComment(e);s=i,i=Ip(n,r,u,5,d,null),a.push(u),so(d,r),i.activeCaseIndex=null,Nt();break;case Io:const h=t[++c],f=t[++c];s=i,i=Ip(n,r,f,3,o.createElement(h),h),a.push(f);break;default:throw new Error(`Unable to determine the type of mutate operation for "${l}"`)}}return Nt(),a}function Pp(e,t,n,r){const o=pt(e,n),i=dt(n,t);i&&Xi(t[11],i);const s=gt(t,n);if(Xe(s)){const e=s;0!==o.type&&Xi(t[11],e[7])}r&&(o.flags|=64)}function Tp(e,t,n){Sp(e,t,n),jp()}function Np(e,t){!function(e,t,n,r){const o=At().index-19,i=[];for(let s=0;s<r.length;s+=2){const a=r[s],c=r[s+1].split(cp);for(let r=0;r<c.length;r++){const s=c[r];if(1&r)throw new Error("ICU expressions are not yet supported in attributes");if(""!==s)if(s.match(ap))t.firstCreatePass&&null===t.data[n+19]&&we(vp(s,o,a),i);else{const n=pt(t,o);3===n.type&&fi(n,e,a,s,null,null);const r=null!==n.inputs&&n.inputs[a];r&&Ai(t,e,r,a,s)}}}t.firstCreatePass&&null===t.data[n+19]&&(t.data[n+19]=i)}(Dt(),jt(),e,t)}let Rp=0,Fp=0;function Mp(e){return qa(Dt(),Vt(),e)&&(Rp|=1<<Fp),Fp++,Mp}function Lp(e){if(Fp){const t=jt(),n=t.data[e+19];let r,o=null;Array.isArray(n)?r=n:(r=n.update,o=n.icus);const i=Lt()-Fp-1,s=Dt();!function e(t,n,r,o,i,s,a=!1){let c=!1;for(let l=0;l<t.length;l++){const u=t[l],d=t[++l];if(a||u&o){let a="";for(let u=l+1;u<=l+d;u++){const l=t[u];if("string"==typeof l)a+=l;else if("number"==typeof l)if(l<0)a+=xn(s[r-l]);else{const d=l>>>2;let h,f,p;switch(3&l){case 1:const l=t[++u],g=t[++u];ni(i,pt(i,d),s,l,a,s[11],g,!1);break;case 0:Pi(s,d,a);break;case 2:if(h=t[++u],f=n[h],p=pt(i,d),null!==p.activeCaseIndex){const e=f.remove[p.activeCaseIndex];for(let t=0;t<e.length;t++){const r=e[t];switch(7&r){case 3:Pp(i,s,r>>>3,!1);break;case 6:const o=pt(i,e[t+1]>>>3).activeCaseIndex;null!==o&&we(n[r>>>3].remove[o],e)}}}const m=$p(f,a);p.activeCaseIndex=-1!==m?m:null,m>-1&&(Ap(-1,f.create[m],i,s),c=!0);break;case 3:h=t[++u],f=n[h],p=pt(i,d),null!==p.activeCaseIndex&&e(f.update[p.activeCaseIndex],n,r,o,i,s,c)}}}}l+=d}}(r,o,i,Rp,t,s),Rp=0,Fp=0}}function $p(e,t){let n=e.cases.indexOf(t);if(-1===n)switch(e.type){case 1:{const r=function(e,t){switch(Jf(t)(e)){case 0:return"zero";case 1:return"one";case 2:return"two";case 3:return"few";case 4:return"many";default:return"other"}}(t,zp);n=e.cases.indexOf(r),-1===n&&"other"!==r&&(n=e.cases.indexOf("other"));break}case 0:n=e.cases.indexOf("other")}return n}function Vp(e,t,n,r){const o=[],i=[],s=[],a=[],c=[];for(let l=0;l<t.values.length;l++){const u=t.values[l],d=[];for(let e=0;e<u.length;e++){const t=u[e];if("string"!=typeof t){const n=d.push(t)-1;u[e]=`\x3c!--\ufffd${n}\ufffd--\x3e`}}const h=Bp(u.join(""),n,d,e,r);o.push(h.create),i.push(h.remove),s.push(h.update),a.push(h.vars),c.push(h.childIcus)}e.push({type:t.type,vars:a,childIcus:c,cases:t.cases,create:o,remove:i,update:s}),kp+=Math.max(...a)}function Bp(e,t,n,r,o){const i=new yr(at()).getInertBodyElement(e);if(!i)throw new Error("Unable to generate inert body element");const s={vars:0,childIcus:[],create:[],remove:[],update:[]};return function e(t,n,r,o,i,s){if(t){const a=[];for(;t;){const c=t.nextSibling,l=s+ ++n.vars;switch(t.nodeType){case Node.ELEMENT_NODE:const c=t,u=c.tagName.toLowerCase();if(jr.hasOwnProperty(u)){n.create.push(Io,u,l,r<<17|1);const a=c.attributes;for(let e=0;e<a.length;e++){const t=a.item(e),r=t.name.toLowerCase();t.value.match(ap)?Pr.hasOwnProperty(r)&&we(Ir[r]?vp(t.value,l,t.name,wr):Ar[r]?vp(t.value,l,t.name,xr):vp(t.value,l,t.name),n.update):n.create.push(l<<3|4,t.name,t.value)}e(t.firstChild,n,l,o,i,s),n.remove.push(l<<3|3)}else n.vars--;break;case Node.TEXT_NODE:const d=t.textContent||"",h=d.match(ap);n.create.push(h?"":d,l,r<<17|1),n.remove.push(l<<3|3),h&&we(vp(d,l),n.update);break;case Node.COMMENT_NODE:const f=Hp.exec(t.textContent||"");if(f){const e=parseInt(f[1],10);n.create.push(Ao,"",l,r<<17|1),a.push([o[e],l])}else n.vars--;break;default:n.vars--}t=c}for(let e=0;e<a.length;e++){const t=a[e][0],r=a[e][1];Vp(i,t,r,s+n.vars);const o=i.length-1;n.vars+=Math.max(...i[o].vars),n.childIcus.push(o);const c=_p(t);n.update.push(Cp(t.mainBinding),3,-1-t.mainBinding,r<<2|2,o,c,2,r<<2|3,o),n.remove.push(o<<3|6,r<<3|3)}}}((Vr(i)||i).firstChild,s,t,n,r,o),s}const Hp=/\ufffd(\d+)\ufffd/,Up=/\uE500/g;let zp=np;function qp(e){var t,n;n="Expected localeId to be defined",null==(t=e)&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+` [Expected=> null != ${t} <=Actual]`)}(n,t),"string"==typeof e&&(zp=e.toLowerCase().replace(/_/g,"-"))}const Wp=new Map;function Qp(e,t){const n=Wp.get(e);Gp(e,n&&n.moduleType,t.moduleType),Wp.set(e,t)}function Gp(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${F(t)} vs ${F(t.name)}`)}function Kp(e){if(null!==e.\u0275mod.id){const t=e.\u0275mod.id;Gp(t,Wp.get(t),e),Wp.set(t,e)}let t=e.\u0275mod.imports;t instanceof Function&&(t=t()),t&&t.forEach(e=>Kp(e))}function Zp(e){return Wp.get(e)||Be[e]}class Yp extends ve{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Bf(this);const n=Ye(e),r=e[X]||null;r&&qp(r),this._bootstrapComponents=Dn(n.bootstrap),this._r3Injector=qs(e,t,[{provide:ve,useValue:this},{provide:pd,useValue:this.componentFactoryResolver}],F(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,t=ea.THROW_IF_NOT_FOUND,n=x.Default){return e===ea||e===ve||e===re?this:this._r3Injector.get(e,t,n)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class Jp extends _e{constructor(e){super(),this.moduleType=e,null!==Ye(e)&&Kp(e)}create(e){return new Yp(this.moduleType,e)}}function Xp(e,t,n,r){return c(()=>{const o=e,i=o.prototype?Object.getPrototypeOf(o.prototype):null,s=i&&i.constructor;null!==t&&(void 0===o.decorators||s&&s.decorators===o.decorators?o.decorators=t:o.decorators.push(...t)),null!==n&&(o.ctorParameters=n),null!==r&&(o.propDecorators=void 0===o.propDecorators||s&&s.propDecorators===o.propDecorators?r:Object.assign(Object.assign({},o.propDecorators),r))})}function eg(e,t,n){const r=Mt()+e,o=Dt();return o[r]===Eo?Ua(o,r,n?t.call(n):t()):za(o,r)}function tg(e,t,n,r){return dg(Dt(),Mt(),e,t,n,r)}function ng(e,t,n,r,o){return hg(Dt(),Mt(),e,t,n,r,o)}function rg(e,t,n,r,o,i){return fg(Dt(),Mt(),e,t,n,r,o,i)}function og(e,t,n,r,o,i,s){return pg(Dt(),Mt(),e,t,n,r,o,i,s)}function ig(e,t,n,r,o,i,s,a){const c=Mt()+e,l=Dt(),u=Ga(l,c,n,r,o,i);return qa(l,c+4,s)||u?Ua(l,c+5,a?t.call(a,n,r,o,i,s):t(n,r,o,i,s)):za(l,c+5)}function sg(e,t,n,r,o,i,s,a,c){const l=Mt()+e,u=Dt(),d=Ga(u,l,n,r,o,i);return Wa(u,l+4,s,a)||d?Ua(u,l+6,c?t.call(c,n,r,o,i,s,a):t(n,r,o,i,s,a)):za(u,l+6)}function ag(e,t,n,r,o,i,s,a,c,l){const u=Mt()+e,d=Dt();let h=Ga(d,u,n,r,o,i);return Qa(d,u+4,s,a,c)||h?Ua(d,u+7,l?t.call(l,n,r,o,i,s,a,c):t(n,r,o,i,s,a,c)):za(d,u+7)}function cg(e,t,n,r,o,i,s,a,c,l,u){const d=Mt()+e,h=Dt(),f=Ga(h,d,n,r,o,i);return Ga(h,d+4,s,a,c,l)||f?Ua(h,d+8,u?t.call(u,n,r,o,i,s,a,c,l):t(n,r,o,i,s,a,c,l)):za(h,d+8)}function lg(e,t,n,r){return gg(Dt(),Mt(),e,t,n,r)}function ug(e,t){const n=e[t];return n===Eo?void 0:n}function dg(e,t,n,r,o,i){const s=t+n;return qa(e,s,o)?Ua(e,s+1,i?r.call(i,o):r(o)):ug(e,s+1)}function hg(e,t,n,r,o,i,s){const a=t+n;return Wa(e,a,o,i)?Ua(e,a+2,s?r.call(s,o,i):r(o,i)):ug(e,a+2)}function fg(e,t,n,r,o,i,s,a){const c=t+n;return Qa(e,c,o,i,s)?Ua(e,c+3,a?r.call(a,o,i,s):r(o,i,s)):ug(e,c+3)}function pg(e,t,n,r,o,i,s,a,c){const l=t+n;return Ga(e,l,o,i,s,a)?Ua(e,l+4,c?r.call(c,o,i,s,a):r(o,i,s,a)):ug(e,l+4)}function gg(e,t,n,r,o,i){let s=t+n,a=!1;for(let c=0;c<o.length;c++)qa(e,s++,o[c])&&(a=!0);return a?Ua(e,s,r.apply(i,o)):ug(e,s)}function mg(e,t){const n=jt();let r;const o=e+19;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}throw new Error(`The pipe '${e}' could not be found!`)}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=Ze(r.type)),s=ue(xc),a=i();return ue(s),_c(n,Dt(),e,a),a}function bg(e,t,n){const r=Dt(),o=gt(r,e);return Cg(r,xg(r,e)?dg(r,Mt(),t,o.transform,n,o):o.transform(n))}function yg(e,t,n,r){const o=Dt(),i=gt(o,e);return Cg(o,xg(o,e)?hg(o,Mt(),t,i.transform,n,r,i):i.transform(n,r))}function vg(e,t,n,r,o){const i=Dt(),s=gt(i,e);return Cg(i,xg(i,e)?fg(i,Mt(),t,s.transform,n,r,o,s):s.transform(n,r,o))}function _g(e,t,n,r,o,i){const s=Dt(),a=gt(s,e);return Cg(s,xg(s,e)?pg(s,Mt(),t,a.transform,n,r,o,i,a):a.transform(n,r,o,i))}function wg(e,t,n){const r=Dt(),o=gt(r,e);return Cg(r,xg(r,e)?gg(r,Mt(),t,o.transform,n,o):o.transform.apply(o,n))}function xg(e,t){return e[1].data[t+19].pure}function Cg(e,t){return Va.isWrapped(t)&&(t=Va.unwrap(t),e[Lt()]=Eo),t}class Eg extends r.b{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let r,i=e=>null,s=()=>null;e&&"object"==typeof e?(r=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(i=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(s=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(r=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(i=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(s=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const a=super.subscribe(r,i,s);return e instanceof o.a&&e.add(a),a}}function Sg(){return this._results[Ma()]()}class kg{constructor(){this.dirty=!0,this._results=[],this.changes=new Eg,this.length=0;const e=Ma(),t=kg.prototype;t[e]||(t[e]=Sg)}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e){this._results=xe(e),this.dirty=!1,this.length=this._results.length,this.last=this._results[this.length-1],this.first=this._results[0]}notifyOnChanges(){this.changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}class Og{constructor(e){this.queryList=e,this.matches=null}clone(){return new Og(this.queryList)}setDirty(){this.queryList.setDirty()}}class Dg{constructor(e=[]){this.queries=e}createEmbeddedView(e){const t=e.queries;if(null!==t){const n=null!==e.contentQueries?e.contentQueries[0]:t.length,r=[];for(let e=0;e<n;e++){const n=t.getByIndex(e);r.push(this.queries[n.indexInDeclarationView].clone())}return new Dg(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)null!==qg(e,t).matches&&this.queries[t].setDirty()}}class jg{constructor(e,t,n,r=null){this.predicate=e,this.descendants=t,this.isStatic=n,this.read=r}}class Ig{constructor(e=[]){this.queries=e}elementStart(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let n=0;n<this.length;n++){const r=null!==t?t.length:0,o=this.getByIndex(n).embeddedTView(e,r);o&&(o.indexInDeclarationView=n,null!==t?t.push(o):t=[o])}return null!==t?new Ig(t):null}template(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Ag{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new Ag(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&!1===this.metadata.descendants){const t=this._declarationNodeIndex;let n=e.parent;for(;null!==n&&4===n.type&&n.index!==t;)n=n.parent;return t===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(e,t){if(Array.isArray(this.metadata.predicate)){const n=this.metadata.predicate;for(let r=0;r<n.length;r++)this.matchTNodeWithReadOption(e,t,Pg(t,n[r]))}else{const n=this.metadata.predicate;n===Ud?0===t.type&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Bn(t,e,n,!1,!1))}}matchTNodeWithReadOption(e,t,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===bd||r===Wd||r===Ud&&0===t.type)this.addMatch(t.index,-2);else{const n=Bn(t,e,r,!1,!1);null!==n&&this.addMatch(t.index,n)}else this.addMatch(t.index,n)}}addMatch(e,t){null===this.matches?this.matches=[e,t]:this.matches.push(e,t)}}function Pg(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function Tg(e,t,n,r){return-1===n?function(e,t){return 3===e.type||4===e.type?ds(bd,e,t):0===e.type?hs(Ud,bd,e,t):null}(t,e):-2===n?function(e,t,n){return n===bd?ds(bd,t,e):n===Ud?hs(Ud,bd,t,e):n===Wd?fs(Wd,bd,t,e):void 0}(e,t,r):Hn(e,e[1],n,t)}function Ng(e,t,n,r){const o=t[5].queries[r];if(null===o.matches){const r=e.data,i=n.matches,s=[];for(let e=0;e<i.length;e+=2){const o=i[e];s.push(o<0?null:Tg(t,r[o],i[e+1],n.metadata.read))}o.matches=s}return o.matches}function Rg(e){const t=Dt(),n=jt(),r=Ut();zt(r+1);const o=qg(n,r);if(e.dirty&&vt(t)===o.metadata.isStatic){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?function e(t,n,r,o){const i=t.queries.getByIndex(r),s=i.matches;if(null!==s){const a=Ng(t,n,i,r);for(let t=0;t<s.length;t+=2){const r=s[t];if(r>0)o.push(a[t/2]);else{const i=s[t+1],a=n[-r];for(let t=9;t<a.length;t++){const n=a[t];n[17]===n[3]&&e(n[1],n,i,o)}if(null!==a[5]){const t=a[5];for(let n=0;n<t.length;n++){const r=t[n];e(r[1],r,i,o)}}}}}return o}(n,t,r,[]):Ng(n,t,o,r);e.reset(i),e.notifyOnChanges()}return!0}return!1}function Fg(e,t,n){Lg(jt(),Dt(),e,t,n,!0)}function Mg(e,t,n){Lg(jt(),Dt(),e,t,n,!1)}function Lg(e,t,n,r,o,i){e.firstCreatePass&&(zg(e,new jg(n,r,i,o),-1),i&&(e.staticViewQueries=!0)),Ug(e,t)}function $g(e,t,n,r){Bg(jt(),Dt(),t,n,r,!1,At(),e)}function Vg(e,t,n,r){Bg(jt(),Dt(),t,n,r,!0,At(),e)}function Bg(e,t,n,r,o,i,s,a){e.firstCreatePass&&(zg(e,new jg(n,r,i,o),s.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(e.contentQueries.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(e,a),i&&(e.staticContentQueries=!0)),Ug(e,t)}function Hg(){return e=Dt(),t=Ut(),e[5].queries[t].queryList;var e,t}function Ug(e,t){const n=new kg;!function(e,t,n,r){const o=Oi(t);o.push(n),e.firstCreatePass&&Di(e).push(r,o.length-1)}(e,t,n,n.destroy),null===t[5]&&(t[5]=new Dg),t[5].queries.push(new Og(n))}function zg(e,t,n){null===e.queries&&(e.queries=new Ig),e.queries.track(new Ag(t,n))}function qg(e,t){return e.queries.getByIndex(t)}function Wg(e,t){return hs(Ud,bd,e,t)}function Qg(e=x.Default){const t=ps(!0);if(null!=t||e&x.Optional)return t;throw new Error("No provider for ChangeDetectorRef!")}const Gg=(()=>({"\u0275\u0275attribute":Ka,"\u0275\u0275attributeInterpolate1":ic,"\u0275\u0275attributeInterpolate2":sc,"\u0275\u0275attributeInterpolate3":ac,"\u0275\u0275attributeInterpolate4":cc,"\u0275\u0275attributeInterpolate5":lc,"\u0275\u0275attributeInterpolate6":uc,"\u0275\u0275attributeInterpolate7":dc,"\u0275\u0275attributeInterpolate8":hc,"\u0275\u0275attributeInterpolateV":fc,"\u0275\u0275defineComponent":Me,"\u0275\u0275defineDirective":qe,"\u0275\u0275defineInjectable":S,"\u0275\u0275defineInjector":O,"\u0275\u0275defineNgModule":He,"\u0275\u0275definePipe":We,"\u0275\u0275directiveInject":xc,"\u0275\u0275getFactoryOf":Wn,"\u0275\u0275getInheritedFactory":Qn,"\u0275\u0275inject":he,"\u0275\u0275injectAttribute":Cc,"\u0275\u0275invalidFactory":Ec,"\u0275\u0275invalidFactoryDep":fe,"\u0275\u0275injectPipeChangeDetectorRef":Qg,"\u0275\u0275templateRefExtractor":Wg,"\u0275\u0275NgOnChangesFeature":Ju,"\u0275\u0275ProvidersFeature":cd,"\u0275\u0275CopyDefinitionFeature":Zu,"\u0275\u0275InheritDefinitionFeature":Uu,"\u0275\u0275container":mc,"\u0275\u0275nextContext":Uc,"\u0275\u0275containerRefreshStart":yc,"\u0275\u0275containerRefreshEnd":vc,"\u0275\u0275namespaceHTML":on,"\u0275\u0275namespaceMathML":rn,"\u0275\u0275namespaceSVG":nn,"\u0275\u0275enableBindings":kt,"\u0275\u0275disableBindings":Ot,"\u0275\u0275elementStart":Oc,"\u0275\u0275elementEnd":Dc,"\u0275\u0275element":jc,"\u0275\u0275elementContainerStart":Ic,"\u0275\u0275elementContainerEnd":Ac,"\u0275\u0275elementContainer":Pc,"\u0275\u0275pureFunction0":eg,"\u0275\u0275pureFunction1":tg,"\u0275\u0275pureFunction2":ng,"\u0275\u0275pureFunction3":rg,"\u0275\u0275pureFunction4":og,"\u0275\u0275pureFunction5":ig,"\u0275\u0275pureFunction6":sg,"\u0275\u0275pureFunction7":ag,"\u0275\u0275pureFunction8":cg,"\u0275\u0275pureFunctionV":lg,"\u0275\u0275getCurrentView":Rc,"\u0275\u0275restoreView":It,"\u0275\u0275listener":Lc,"\u0275\u0275projection":Gc,"\u0275\u0275updateSyntheticHostBinding":_u,"\u0275\u0275componentHostSyntheticListener":$c,"\u0275\u0275pipeBind1":bg,"\u0275\u0275pipeBind2":yg,"\u0275\u0275pipeBind3":vg,"\u0275\u0275pipeBind4":_g,"\u0275\u0275pipeBindV":wg,"\u0275\u0275projectionDef":qc,"\u0275\u0275hostProperty":vu,"\u0275\u0275property":Sc,"\u0275\u0275propertyInterpolate":Kc,"\u0275\u0275propertyInterpolate1":Zc,"\u0275\u0275propertyInterpolate2":Yc,"\u0275\u0275propertyInterpolate3":Jc,"\u0275\u0275propertyInterpolate4":Xc,"\u0275\u0275propertyInterpolate5":el,"\u0275\u0275propertyInterpolate6":tl,"\u0275\u0275propertyInterpolate7":nl,"\u0275\u0275propertyInterpolate8":rl,"\u0275\u0275propertyInterpolateV":ol,"\u0275\u0275pipe":mg,"\u0275\u0275queryRefresh":Rg,"\u0275\u0275viewQuery":Mg,"\u0275\u0275staticViewQuery":Fg,"\u0275\u0275staticContentQuery":Vg,"\u0275\u0275loadQuery":Hg,"\u0275\u0275contentQuery":$g,"\u0275\u0275reference":wc,"\u0275\u0275classMap":xl,"\u0275\u0275classMapInterpolate1":Wl,"\u0275\u0275classMapInterpolate2":Ql,"\u0275\u0275classMapInterpolate3":Gl,"\u0275\u0275classMapInterpolate4":Kl,"\u0275\u0275classMapInterpolate5":Zl,"\u0275\u0275classMapInterpolate6":Yl,"\u0275\u0275classMapInterpolate7":Jl,"\u0275\u0275classMapInterpolate8":Xl,"\u0275\u0275classMapInterpolateV":eu,"\u0275\u0275styleMap":_l,"\u0275\u0275styleMapInterpolate1":tu,"\u0275\u0275styleMapInterpolate2":nu,"\u0275\u0275styleMapInterpolate3":ru,"\u0275\u0275styleMapInterpolate4":ou,"\u0275\u0275styleMapInterpolate5":iu,"\u0275\u0275styleMapInterpolate6":su,"\u0275\u0275styleMapInterpolate7":au,"\u0275\u0275styleMapInterpolate8":cu,"\u0275\u0275styleMapInterpolateV":lu,"\u0275\u0275styleProp":yl,"\u0275\u0275stylePropInterpolate1":uu,"\u0275\u0275stylePropInterpolate2":du,"\u0275\u0275stylePropInterpolate3":hu,"\u0275\u0275stylePropInterpolate4":fu,"\u0275\u0275stylePropInterpolate5":pu,"\u0275\u0275stylePropInterpolate6":gu,"\u0275\u0275stylePropInterpolate7":mu,"\u0275\u0275stylePropInterpolate8":bu,"\u0275\u0275stylePropInterpolateV":yu,"\u0275\u0275styleSanitizer":bl,"\u0275\u0275classProp":vl,"\u0275\u0275select":Do,"\u0275\u0275advance":Oo,"\u0275\u0275template":bc,"\u0275\u0275text":Rl,"\u0275\u0275textInterpolate":Fl,"\u0275\u0275textInterpolate1":Ml,"\u0275\u0275textInterpolate2":Ll,"\u0275\u0275textInterpolate3":$l,"\u0275\u0275textInterpolate4":Vl,"\u0275\u0275textInterpolate5":Bl,"\u0275\u0275textInterpolate6":Hl,"\u0275\u0275textInterpolate7":Ul,"\u0275\u0275textInterpolate8":zl,"\u0275\u0275textInterpolateV":ql,"\u0275\u0275embeddedViewStart":Tc,"\u0275\u0275embeddedViewEnd":Nc,"\u0275\u0275i18n":Tp,"\u0275\u0275i18nAttributes":Np,"\u0275\u0275i18nExp":Mp,"\u0275\u0275i18nStart":Sp,"\u0275\u0275i18nEnd":jp,"\u0275\u0275i18nApply":Lp,"\u0275\u0275i18nPostprocess":Dp,"\u0275\u0275resolveWindow":Sn,"\u0275\u0275resolveDocument":kn,"\u0275\u0275resolveBody":On,"\u0275\u0275setComponentScope":Le,"\u0275\u0275setNgModuleScope":Ue,"\u0275\u0275sanitizeHtml":qr,"\u0275\u0275sanitizeStyle":Wr,"\u0275\u0275defaultStyleSanitizer":Jr,"\u0275\u0275sanitizeResourceUrl":Gr,"\u0275\u0275sanitizeScript":Kr,"\u0275\u0275sanitizeUrl":Qr,"\u0275\u0275sanitizeUrlOrResourceUrl":Yr}))();let Kg=null;function Zg(){Kg=null}const Yg=[],Jg=[];let Xg=!1;function em(){if(!Xg){Xg=!0;try{for(let e=Jg.length-1;e>=0;e--){const{moduleType:t,ngModule:n}=Jg[e];n.declarations&&n.declarations.every(tm)&&(Jg.splice(e,1),am(t,n))}}finally{Xg=!1}}}function tm(e){return Array.isArray(e)?e.every(tm):!!V(e)}function nm(e,t={}){rm(e,t),function(e,t){Jg.push({moduleType:e,ngModule:t})}(e,t)}function rm(e,t,n=!1){const r=xe(t.declarations||Yg);let o=null;Object.defineProperty(e,J,{configurable:!0,get:()=>(null===o&&(o=G().compileNgModule(Gg,`ng:///${e.name}/\u0275mod.js`,{type:e,bootstrap:xe(t.bootstrap||Yg).map(V),declarations:r.map(V),imports:xe(t.imports||Yg).map(V).map(um),exports:xe(t.exports||Yg).map(V).map(um),schemas:t.schemas?xe(t.schemas):null,id:t.id||null}),o.schemas||(o.schemas=[])),o)});let i=null;Object.defineProperty(e,P,{get:()=>{if(null===i){const n={name:e.name,type:e,deps:js(e),providers:t.providers||Yg,imports:[(t.imports||Yg).map(V),(t.exports||Yg).map(V)]};i=G().compileInjector(Gg,`ng:///${e.name}/\u0275inj.js`,n)}return i},configurable:!1})}let om=new Map,im=new Map;function sm(){om=new Map,im=new Map,Jg.length=0}function am(e,t){const n=xe(t.declarations||Yg),r=lm(e);n.forEach(t=>{t.hasOwnProperty(K)?cm(Qe(t),r):t.hasOwnProperty(Z)||t.hasOwnProperty(Y)||(t.ngSelectorScope=e)})}function cm(e,t){e.directiveDefs=()=>Array.from(t.compilation.directives).map(e=>e.hasOwnProperty(K)?Qe(e):Ge(e)).filter(e=>!!e),e.pipeDefs=()=>Array.from(t.compilation.pipes).map(e=>Ke(e)),e.schemas=t.schemas,e.tView=null}function lm(e){if(!dm(e))throw new Error(`${e.name} does not have a module def (\u0275mod property)`);const t=Ye(e);if(null!==t.transitiveCompileScopes)return t.transitiveCompileScopes;const n={schemas:t.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return Dn(t.imports).forEach(e=>{const t=e;if(!dm(t))throw new Error(`Importing ${t.name} which does not have a \u0275mod property`);const r=lm(t);r.exported.directives.forEach(e=>n.compilation.directives.add(e)),r.exported.pipes.forEach(e=>n.compilation.pipes.add(e))}),Dn(t.declarations).forEach(e=>{Ke(e)?n.compilation.pipes.add(e):n.compilation.directives.add(e)}),Dn(t.exports).forEach(e=>{const t=e;if(dm(t)){const e=lm(t);e.exported.directives.forEach(e=>{n.compilation.directives.add(e),n.exported.directives.add(e)}),e.exported.pipes.forEach(e=>{n.compilation.pipes.add(e),n.exported.pipes.add(e)})}else Ke(t)?n.exported.pipes.add(t):n.exported.directives.add(t)}),t.transitiveCompileScopes=n,n}function um(e){return function(e){return void 0!==e.ngModule}(e)?e.ngModule:e}function dm(e){return!!Ye(e)}function hm(e,t){let n=null;!function(e,t){Pa(t)&&(Ia.set(e,t),Aa.add(e))}(e,t),gm(e,t),Object.defineProperty(e,K,{get:()=>{if(null===n){const r=G();if(Pa(t)){const n=[`Component '${e.name}' is not resolved:`];throw t.templateUrl&&n.push(` - templateUrl: ${t.templateUrl}`),t.styleUrls&&t.styleUrls.length&&n.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`),n.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(n.join("\n"))}const o=Kg;let i=t.preserveWhitespaces;void 0===i&&(i=null!==o&&void 0!==o.preserveWhitespaces&&o.preserveWhitespaces);let s=t.encapsulation;void 0===s&&(s=null!==o&&void 0!==o.defaultEncapsulation?o.defaultEncapsulation:Te.Emulated);const a=t.templateUrl||`ng:///${e.name}/template.html`,c=Object.assign(Object.assign({},bm(e,t)),{typeSourceSpan:r.createParseSourceSpan("Component",e.name,a),template:t.template||"",preserveWhitespaces:i,styles:t.styles||Re,animations:t.animations,directives:[],changeDetection:t.changeDetection,pipes:new Map,encapsulation:s,interpolation:t.interpolation,viewProviders:t.viewProviders||null});if(c.usesInheritance&&ym(e),n=r.compileComponent(Gg,a,c),em(),void 0!==e.ngSelectorScope){const t=lm(e.ngSelectorScope);cm(n,t)}}return n},configurable:!1})}function fm(e,t){let n=null;gm(e,t||{}),Object.defineProperty(e,Z,{get:()=>{if(null===n){const r=pm(e,t||{});n=G().compileDirective(Gg,r.sourceMapUrl,r.metadata)}return n},configurable:!1})}function pm(e,t){const n=e&&e.name,r=`ng:///${n}/\u0275dir.js`,o=G(),i=bm(e,t);return i.typeSourceSpan=o.createParseSourceSpan("Directive",n,r),i.usesInheritance&&ym(e),{metadata:i,sourceMapUrl:r}}function gm(e,t){let n=null;Object.defineProperty(e,ee,{get:()=>{if(null===n){const r=pm(e,t),o=G();n=o.compileFactory(Gg,`ng:///${e.name}/\u0275fac.js`,Object.assign(Object.assign({},r.metadata),{injectFn:"directiveInject",target:o.R3FactoryTarget.Directive}))}return n},configurable:!1})}function mm(e){return Object.getPrototypeOf(e.prototype)===Object.prototype}function bm(e,t){const n=Ds(),r=n.ownPropMetadata(e);return{name:e.name,type:e,typeArgumentCount:0,selector:void 0!==t.selector?t.selector:null,deps:js(e),host:t.host||Ne,propMetadata:r,inputs:t.inputs||Re,outputs:t.outputs||Re,queries:_m(e,r,wm),lifecycle:{usesOnChanges:n.hasLifecycleHook(e,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!mm(e),exportAs:(o=t.exportAs,void 0===o?null:Em(o)),providers:t.providers||null,viewQueries:_m(e,r,xm)};var o}function ym(e){const t=Object.prototype;let n=Object.getPrototypeOf(e.prototype).constructor;for(;n&&n!==t;)Ge(n)||Qe(n)||!km(n)||fm(n,null),n=Object.getPrototypeOf(n)}function vm(e,t){return{propertyName:e,predicate:(n=t.selector,"string"==typeof n?Em(n):V(n)),descendants:t.descendants,first:t.first,read:t.read?t.read:null,static:!!t.static};var n}function _m(e,t,n){const r=[];for(const o in t)if(t.hasOwnProperty(o)){const i=t[o];i.forEach(t=>{if(n(t)){if(!t.selector)throw new Error(`Can't construct a query for the property "${o}" of `+`"${Cn(e)}" since the query selector wasn't defined.`);if(i.some(Cm))throw new Error("Cannot combine @Input decorators with query decorators");r.push(vm(o,t))}})}return r}function wm(e){const t=e.ngMetadataName;return"ContentChild"===t||"ContentChildren"===t}function xm(e){const t=e.ngMetadataName;return"ViewChild"===t||"ViewChildren"===t}function Cm(e){return"Input"===e.ngMetadataName}function Em(e){return e.split(",").map(e=>e.trim())}const Sm=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function km(e){const t=Ds();if(Sm.some(n=>t.hasLifecycleHook(e,n)))return!0;const n=t.propMetadata(e);for(const r in n){const e=n[r];for(let t=0;t<e.length;t++){const n=e[t],r=n.ngMetadataName;if(Cm(n)||wm(n)||xm(n)||"Output"===r||"HostBinding"===r||"HostListener"===r)return!0}}return!1}function Om(e,t){let n=null,r=null;Object.defineProperty(e,ee,{get:()=>{if(null===r){const n=Dm(e,t),o=G();r=o.compileFactory(Gg,`ng:///${n.name}/\u0275fac.js`,Object.assign(Object.assign({},n),{injectFn:"directiveInject",target:o.R3FactoryTarget.Pipe}))}return r},configurable:!1}),Object.defineProperty(e,Y,{get:()=>{if(null===n){const r=Dm(e,t);n=G().compilePipe(Gg,`ng:///${r.name}/\u0275pipe.js`,r)}return n},configurable:!1})}function Dm(e,t){return{type:e,typeArgumentCount:0,name:e.name,deps:js(e),pipeName:t.name,pure:void 0===t.pure||t.pure}}const jm=h("Directive",(e={})=>e,void 0,void 0,(e,t)=>Vm(e,t)),Im=h("Component",(e={})=>Object.assign({changeDetection:Ie.Default},e),jm,void 0,(e,t)=>$m(e,t)),Am=h("Pipe",e=>Object.assign({pure:!0},e),void 0,void 0,(e,t)=>Bm(e,t)),Pm=g("Input",e=>({bindingPropertyName:e})),Tm=g("Output",e=>({bindingPropertyName:e})),Nm=g("HostBinding",e=>({hostPropertyName:e})),Rm=g("HostListener",(e,t)=>({eventName:e,args:t})),Fm=hm,Mm=fm,Lm=Om,$m=Fm,Vm=Mm,Bm=Lm,Hm=h("NgModule",e=>e,void 0,void 0,(e,t)=>zm(e,t)),Um=nm,zm=Um,qm=new ne("Application Initializer");let Wm=(()=>{class e{constructor(e){this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const t=this.appInits[n]();Fc(t)&&e.push(t)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}return e.\u0275fac=function(t){return new(t||e)(he(qm,8))},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})();const Qm=new ne("AppId");function Gm(){return`${Zm()}${Zm()}${Zm()}`}const Km={provide:Qm,useFactory:Gm,deps:[]};function Zm(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Ym=new ne("Platform Initializer"),Jm=new ne("Platform ID"),Xm=new ne("appBootstrapListener"),eb=new ne("Application Packages Root URL");let tb=(()=>{class e{log(e){console.log(e)}warn(e){console.warn(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})();const nb=new ne("LocaleId"),rb=new ne("DefaultCurrencyCode"),ob=new ne("Translations"),ib=new ne("TranslationsFormat"),sb=function(){var e={Error:0,Warning:1,Ignore:2};return e[e.Error]="Error",e[e.Warning]="Warning",e[e.Ignore]="Ignore",e}(),ab=!0,cb=ab;class lb{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}const ub=function(e){return new Jp(e)},db=ub,hb=function(e){return Promise.resolve(ub(e))},fb=hb,pb=function(e){const t=ub(e),n=Dn(Ye(e).declarations).reduce((e,t)=>{const n=Qe(t);return n&&e.push(new zf(n)),e},[]);return new lb(t,n)},gb=pb,mb=function(e){return Promise.resolve(pb(e))},bb=mb;let yb=(()=>{class e{constructor(){this.compileModuleSync=db,this.compileModuleAsync=fb,this.compileModuleAndAllComponentsSync=gb,this.compileModuleAndAllComponentsAsync=bb}clearCache(){}clearCacheFor(e){}getModuleId(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})();const vb=new ne("compilerOptions");class _b{}const wb=(()=>Promise.resolve(0))();function xb(e){"undefined"==typeof Zone?wb.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}class Cb{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Eg(!1),this.onMicrotaskEmpty=new Eg(!1),this.onStable=new Eg(!1),this.onError=new Eg(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=t,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let e=W.requestAnimationFrame,t=W.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){-1===e.lastRequestAnimationFrameId&&(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(W,()=>{e.lastRequestAnimationFrameId=-1,Ob(e),kb(e)}),Ob(e))}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,r,o,i,s,a)=>{try{return Db(e),n.invokeTask(o,i,s,a)}finally{t&&"eventTask"===i.type&&t(),jb(e)}},onInvoke:(t,n,r,o,i,s,a)=>{try{return Db(e),t.invoke(r,o,i,s,a)}finally{jb(e)}},onHasTask:(t,n,r,o)=>{t.hasTask(r,o),n===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,Ob(e),kb(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,n,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Cb.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Cb.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,e,Sb,Eb,Eb);try{return o.runTask(i,t,n)}finally{o.cancelTask(i)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}function Eb(){}const Sb={};function kb(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ob(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId)}function Db(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function jb(e){e._nesting--,kb(e)}class Ib{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Eg,this.onMicrotaskEmpty=new Eg,this.onStable=new Eg,this.onError=new Eg}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}let Ab=(()=>{class e{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Cb.assertNotInAngularZone(),xb(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())xb(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}return e.\u0275fac=function(t){return new(t||e)(he(Cb))},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})(),Pb=(()=>{class e{constructor(){this._applications=new Map,Fb.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return Fb.findTestabilityInTree(this,e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})();class Tb{addToWindow(e){}findTestabilityInTree(e,t,n){return null}}function Nb(e){Fb=e}let Rb,Fb=new Tb,Mb=Lb;function Lb(e,t,n){const r=e.get(vb,[]).concat(t),o=new Jp(n);if(0===Ia.size)return Promise.resolve(o);const i=function(e){const t=[];return e.forEach(e=>e&&t.push(...e)),t}(r.map(e=>e.providers));if(0===i.length)return Promise.resolve(o);const s=G(),a=ea.create({providers:i}).get(s.ResourceLoader);return ja(e=>Promise.resolve(a.get(e))).then(()=>o)}let $b=Vb;function Vb(e){return e.isBoundToModule}const Bb=new ne("AllowMultipleToken");class Hb{constructor(e,t){this.name=e,this.token=t}}function Ub(e){if(Rb&&!Rb.destroyed&&!Rb.injector.get(Bb,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Rb=e.get(Gb);const t=e.get(Ym,null);return t&&t.forEach(e=>e()),Rb}function zb(e,t,n=[]){const r=`Platform: ${t}`,o=new ne(r);return(t=[])=>{let i=Qb();if(!i||i.injector.get(Bb,!1))if(e)e(n.concat(t).concat({provide:o,useValue:!0}));else{const e=n.concat(t).concat({provide:o,useValue:!0},{provide:Ls,useValue:"platform"});Ub(ea.create({providers:e,name:r}))}return qb(o)}}function qb(e){const t=Qb();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}function Wb(){Rb&&!Rb.destroyed&&Rb.destroy()}function Qb(){return Rb&&!Rb.destroyed?Rb:null}let Gb=(()=>{class e{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;return n="noop"===e?new Ib:("zone.js"===e?void 0:e)||new Cb({enableLongStackTrace:mr(),shouldCoalesceEventChangeDetection:t}),n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),r=[{provide:Cb,useValue:n}];return n.run(()=>{const t=ea.create({providers:r,parent:this.injector,name:e.moduleType.name}),o=e.create(t),i=o.injector.get(Yn,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return o.onDestroy(()=>Yb(this._modules,o)),n.runOutsideAngular(()=>n.onError.subscribe({next:e=>{i.handleError(e)}})),function(e,t,n){try{const r=n();return Fc(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(i,n,()=>{const e=o.injector.get(Wm);return e.runInitializers(),e.donePromise.then(()=>(cb&&qp(o.injector.get(nb,np)||np),this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const n=Kb({},t);return Mb(this.injector,n,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(Zb);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${F(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. `+"Please define one of these.");e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(t){return new(t||e)(he(ea))},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})();function Kb(e,t){return Array.isArray(t)?t.reduce(Kb,e):Object.assign(Object.assign({},e),t)}let Zb=(()=>{class e{constructor(e,t,n,r,o,c){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=o,this._initStatus=c,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=mr(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new i.a(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),u=new i.a(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{Cb.assertNotInAngularZone(),xb(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{Cb.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(s.a)(l,u.pipe(Object(a.a)()))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof ud?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=$b(n)?void 0:this._injector.get(ve),o=n.create(ea.NULL,[],t||n.selector,r);o.onDestroy(()=>{this._unloadComponent(o)});const i=o.injector.get(Ab,null);return i&&o.injector.get(Pb).registerApplication(o.location.nativeElement,i),this._loadComponent(o),mr()&&this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."),o}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(this._enforceNoNewChanges)for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;Yb(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(Xm,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}_unloadComponent(e){this.detachView(e.hostView),Yb(this.components,e)}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy())}get viewCount(){return this._views.length}}return e.\u0275fac=function(t){return new(t||e)(he(Cb),he(tb),he(ea),he(Yn),he(pd),he(Wm))},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})();function Yb(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Jb{}function Xb(e){const t=Zp(e);if(!t)throw ny(e);return t}function ey(e){const t=Zp(e);if(!t)throw ny(e);return new Jp(t)}const ty=ey;function ny(e){return new Error(`No module with ID ${e} loaded`)}class ry{}const oy={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let iy=(()=>{class e{constructor(e,t){this._compiler=e,this._config=t||oy}load(e){return!cb&&this._compiler instanceof yb?this.loadFactory(e):this.loadAndCompile(e)}loadAndCompile(e){let[t,r]=e.split("#");return void 0===r&&(r="default"),n("zn8P")(t).then(e=>e[r]).then(e=>sy(e,t,r)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,r]=e.split("#"),o="NgFactory";return void 0===r&&(r="default",o=""),n("zn8P")(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[r+o]).then(e=>sy(e,t,r))}}return e.\u0275fac=function(t){return new(t||e)(he(yb),he(ry,8))},e.\u0275prov=S({token:e,factory:e.\u0275fac}),e})();function sy(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}class ay extends gs{}class cy extends ay{}class ly{constructor(e,t){this.name=e,this.callback=t}}class uy{constructor(e,t,n){this.listeners=[],this.parent=null,this._debugContext=n,this.nativeNode=e,t&&t instanceof dy&&t.addChild(this)}get injector(){return this._debugContext.injector}get componentInstance(){return this._debugContext.component}get context(){return this._debugContext.context}get references(){return this._debugContext.references}get providerTokens(){return this._debugContext.providerTokens}}class dy extends uy{constructor(e,t,n){super(e,t,n),this.properties={},this.attributes={},this.classes={},this.styles={},this.childNodes=[],this.nativeElement=e}addChild(e){e&&(this.childNodes.push(e),e.parent=this)}removeChild(e){const t=this.childNodes.indexOf(e);-1!==t&&(e.parent=null,this.childNodes.splice(t,1))}insertChildrenAfter(e,t){const n=this.childNodes.indexOf(e);-1!==n&&(this.childNodes.splice(n+1,0,...t),t.forEach(t=>{t.parent&&t.parent.removeChild(t),e.parent=this}))}insertBefore(e,t){const n=this.childNodes.indexOf(e);-1===n?this.addChild(t):(t.parent&&t.parent.removeChild(t),t.parent=this,this.childNodes.splice(n,0,t))}query(e){return this.queryAll(e)[0]||null}queryAll(e){const t=[];return function e(t,n,r){t.childNodes.forEach(t=>{t instanceof dy&&(n(t)&&r.push(t),e(t,n,r))})}(this,e,t),t}queryAllNodes(e){const t=[];return function e(t,n,r){t instanceof dy&&t.childNodes.forEach(t=>{n(t)&&r.push(t),t instanceof dy&&e(t,n,r)})}(this,e,t),t}get children(){return this.childNodes.filter(e=>e instanceof dy)}triggerEventHandler(e,t){this.listeners.forEach(n=>{n.name==e&&n.callback(t)})}}function hy(e){return e.map(e=>e.nativeElement)}class fy{constructor(e){this.nativeNode=e}get parent(){const e=this.nativeNode.parentNode;return e?new py(e):null}get injector(){return Su(this.nativeNode)}get componentInstance(){const e=this.nativeNode;return e&&(wu(e)||Cu(e))}get context(){return wu(this.nativeNode)||xu(this.nativeNode)}get listeners(){return ju(this.nativeNode).filter(e=>"dom"===e.type)}get references(){return function(e){const t=Ou(e,!1);return null===t?{}:(void 0===t.localRefs&&(t.localRefs=function(e,t){const n=e[1].data[t];if(n&&n.localNames){const t={};let r=n.index+1;for(let o=0;o<n.localNames.length;o+=2)t[n.localNames[o]]=e[r],r++;return t}return null}(t.lView,t.nodeIndex)),t.localRefs||{})}(this.nativeNode)}get providerTokens(){return function(e){const t=Ou(e,!1);if(null===t)return[];const n=t.lView[1],r=n.data[t.nodeIndex],o=[],i=r.directiveEnd;for(let a=65535&r.providerIndexes;a<i;a++){let e=n.data[a];void 0!==(s=e).type&&void 0!==s.template&&void 0!==s.declaredInputs&&(e=e.type),o.push(e)}var s;return o}(this.nativeNode)}}class py extends fy{constructor(e){super(e)}get nativeElement(){return this.nativeNode.nodeType==Node.ELEMENT_NODE?this.nativeNode:null}get name(){try{const e=Ou(this.nativeNode);return e.lView[1].data[e.nodeIndex].tagName}catch(e){return this.nativeNode.nodeName}}get properties(){const e=Ou(this.nativeNode,!1);if(null==e)return{};const t=e.lView,n=t[1].data,r=n[e.nodeIndex],o={};return function(e,t){if(e){let n=Object.getPrototypeOf(e);const r=Node.prototype;for(;null!==n&&n!==r;){const r=Object.getOwnPropertyDescriptors(n);for(let n in r)if(!n.startsWith("__")&&!n.startsWith("on")){const r=e[n];gy(r)&&(t[n]=r)}n=Object.getPrototypeOf(n)}}}(this.nativeElement,o),function(e,t,n,r){let o=t.propertyBindings;if(null!==o)for(let i=0;i<o.length;i++){const t=o[i],s=r[t].split("\ufffd"),a=s[0];if(s.length>1){let r=s[1];for(let e=1;e<s.length-1;e++)r+=xn(n[t+e-1])+s[e+1];e[a]=r}else e[a]=n[t]}}(o,r,t,n),o}get attributes(){const e={},t=this.nativeElement;if(!t)return e;const n=Ou(t,!1);if(null==n)return{};const r=n.lView[1].data[n.nodeIndex].attrs,o=[];if(r){let t=0;for(;t<r.length;){const n=r[t];if("string"!=typeof n)break;e[n]=r[t+1],o.push(n.toLowerCase()),t+=2}}const i=t.attributes;for(let s=0;s<i.length;s++){const t=i[s],n=t.name.toLowerCase();-1===o.indexOf(n)&&(e[n]=t.value)}return e}get styles(){return this.nativeElement&&this.nativeElement.style?this.nativeElement.style:{}}get classes(){const e={},t=this.nativeElement.className;return(t&&"string"!=typeof t?t.baseVal.split(" "):t.split(" ")).forEach(t=>e[t]=!0),e}get childNodes(){const e=this.nativeNode.childNodes,t=[];for(let n=0;n<e.length;n++)t.push(xy(e[n]));return t}get children(){const e=this.nativeElement;if(!e)return[];const t=e.children,n=[];for(let r=0;r<t.length;r++)n.push(xy(t[r]));return n}query(e){return this.queryAll(e)[0]||null}queryAll(e){const t=[];return my(this,e,t,!0),t}queryAllNodes(e){const t=[];return my(this,e,t,!1),t}triggerEventHandler(e,t){const n=this.nativeNode,r=[];this.listeners.forEach(o=>{if(o.name===e){const e=o.callback;e.call(n,t),r.push(e)}}),"function"==typeof n.eventListeners&&n.eventListeners(e).forEach(e=>{if(-1!==e.toString().indexOf("__ngUnwrap__")){const o=e("__ngUnwrap__");return-1===r.indexOf(o)&&o.call(n,t)}})}}function gy(e){return"string"==typeof e||"boolean"==typeof e||"number"==typeof e||null===e}function my(e,t,n,r){const o=Ou(e.nativeNode,!1);null!==o?by(o.lView[1].data[o.nodeIndex],o.lView,t,n,r,e.nativeNode):_y(e.nativeNode,t,n,r)}function by(e,t,n,r,o,i){const s=ft(e,t);if(3===e.type||4===e.type){if(vy(s,n,r,o,i),tt(e)){const s=mt(e.index,t);s&&s[1].firstChild&&by(s[1].firstChild,s,n,r,o,i)}else e.child&&by(e.child,t,n,r,o,i),s&&_y(s,n,r,o);const a=t[e.index];Xe(a)&&yy(a,n,r,o,i)}else if(0===e.type){const s=t[e.index];vy(s[7],n,r,o,i),yy(s,n,r,o,i)}else if(1===e.type){const s=t[16],a=s[6].projection[e.projection];if(Array.isArray(a))for(let e of a)vy(e,n,r,o,i);else if(a){const e=s[3];by(e[1].data[a.index],e,n,r,o,i)}}else e.child&&by(e.child,t,n,r,o,i);if(i!==s){const s=4&e.flags?e.projectionNext:e.next;s&&by(s,t,n,r,o,i)}}function yy(e,t,n,r,o){for(let i=9;i<e.length;i++){const s=e[i];by(s[1].node,s,t,n,r,o)}}function vy(e,t,n,r,o){if(o!==e){const o=Cy(e);if(!o)return;(r&&o instanceof py&&t(o)&&-1===n.indexOf(o)||!r&&t(o)&&-1===n.indexOf(o))&&n.push(o)}}function _y(e,t,n,r){const o=e.childNodes,i=o.length;for(let s=0;s<i;s++){const e=o[s],i=Cy(e);i&&((r&&i instanceof py&&t(i)&&-1===n.indexOf(i)||!r&&t(i)&&-1===n.indexOf(i))&&n.push(i),_y(e,t,n,r))}}const wy=new Map;function xy(e){return e instanceof Node?(e.hasOwnProperty("__ng_debug__")||(e.__ng_debug__=e.nodeType==Node.ELEMENT_NODE?new py(e):new fy(e)),e.__ng_debug__):null}const Cy=xy;function Ey(e){return function(e){return wy.get(e)||null}(e)}const Sy=function(e){return null};function ky(e){wy.set(e.nativeNode,e)}const Oy=fy,Dy=py,jy=zb(null,"core",[{provide:Jm,useValue:"unknown"},{provide:Gb,deps:[ea]},{provide:Pb,deps:[]},{provide:tb,deps:[]}]);function Iy(){return Bd}function Ay(){return Hd}function Py(e){return e=e||cb&&"undefined"!=typeof $localize&&$localize.locale||np,cb&&qp(e),e}const Ty=rp,Ny=[{provide:Zb,useClass:Zb,deps:[Cb,tb,ea,Yn,pd,Wm]},{provide:Uf,deps:[Cb],useFactory:Ry},{provide:Wm,useClass:Wm,deps:[[new b,qm]]},{provide:yb,useClass:yb,deps:[]},Km,{provide:Ld,useFactory:Iy,deps:[]},{provide:$d,useFactory:Ay,deps:[]},{provide:nb,useFactory:Py,deps:[[new m(nb),new b,new v]]},{provide:rb,useValue:Ty}];function Ry(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}let Fy=(()=>{class e{constructor(e){}}return e.\u0275mod=He({type:e}),e.\u0275inj=O({factory:function(t){return new(t||e)(he(Zb))},providers:Ny}),e})();function My(e,t,n,r,o,i){e|=1;const{matchedQueries:s,references:a,matchedQueryIds:c}=Sh(t);return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,flags:e,checkIndex:-1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:s,matchedQueryIds:c,references:a,ngContentIndex:n,childCount:r,bindings:[],bindingFlags:0,outputs:[],element:{ns:null,name:null,attrs:null,template:i?jh(i):null,componentProvider:null,componentView:null,componentRendererType:null,publicProviders:null,allProviders:null,handleEvent:o||ah},provider:null,text:null,query:null,ngContent:null}}function Ly(e,t,n,r,o,i,s=[],a,c,l,u,d){l||(l=ah);const{matchedQueries:h,references:f,matchedQueryIds:p}=Sh(n);let g=null,m=null;i&&([g,m]=Fh(i)),a=a||[];const b=[];for(let _=0;_<a.length;_++){const[e,t,n]=a[_],[r,o]=Fh(t);let i=void 0,s=void 0;switch(15&e){case 4:s=n;break;case 1:case 8:i=n}b[_]={flags:e,ns:r,name:o,nonMinifiedName:o,securityContext:i,suffix:s}}c=c||[];const y=[];for(let _=0;_<c.length;_++){const[e,t]=c[_];y[_]={type:0,target:e,eventName:t,propName:null}}const v=(s=s||[]).map(([e,t])=>{const[n,r]=Fh(e);return[n,r,t]});return d=function(e){if(e&&"$$undefined"===e.id){const t=null!=e.encapsulation&&e.encapsulation!==Te.None||e.styles.length||Object.keys(e.data).length;e.id=t?`c${hh++}`:"$$empty"}return e&&"$$empty"===e.id&&(e=null),e||null}(d),u&&(t|=33554432),{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t|=1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:h,matchedQueryIds:p,references:f,ngContentIndex:r,childCount:o,bindings:b,bindingFlags:Mh(b),outputs:y,element:{ns:g,name:m,attrs:v,template:null,componentProvider:null,componentView:u||null,componentRendererType:d,publicProviders:null,allProviders:null,handleEvent:l||ah},provider:null,text:null,query:null,ngContent:null}}function $y(e,t,n){const r=n.element,o=e.root.selectorOrNode,i=e.renderer;let s;if(e.parent||!o){s=r.name?i.createElement(r.name,r.ns):i.createComment("");const o=Oh(e,t,n);o&&i.appendChild(o,s)}else s=i.selectRootElement(o,!!r.componentRendererType&&r.componentRendererType.encapsulation===Te.ShadowDom);if(r.attrs)for(let a=0;a<r.attrs.length;a++){const[e,t,n]=r.attrs[a];i.setAttribute(s,t,n,e)}return s}function Vy(e,t,n,r){for(let s=0;s<n.outputs.length;s++){const a=n.outputs[s],c=By(e,n.nodeIndex,(i=a.eventName,(o=a.target)?`${o}:${i}`:i));let l=a.target,u=e;"component"===a.target&&(l=null,u=t);const d=u.renderer.listen(l||r,a.eventName,c);e.disposables[n.outputIndex+s]=d}var o,i}function By(e,t,n){return r=>yh(e,t,n,r)}function Hy(e,t,n,r){if(!ph(e,t,n,r))return!1;const o=t.bindings[n],i=th(e,t.nodeIndex),s=i.renderElement,a=o.name;switch(15&o.flags){case 1:!function(e,t,n,r,o,i){const s=t.securityContext;let a=s?e.root.sanitizer.sanitize(s,i):i;a=null!=a?a.toString():null;const c=e.renderer;null!=i?c.setAttribute(n,o,a,r):c.removeAttribute(n,o,r)}(e,o,s,o.ns,a,r);break;case 2:!function(e,t,n,r){const o=e.renderer;r?o.addClass(t,n):o.removeClass(t,n)}(e,s,a,r);break;case 4:!function(e,t,n,r,o){let i=e.root.sanitizer.sanitize(Br.STYLE,o);if(null!=i){i=i.toString();const e=t.suffix;null!=e&&(i+=e)}else i=null;const s=e.renderer;null!=i?s.setStyle(n,r,i):s.removeStyle(n,r)}(e,o,s,a,r);break;case 8:!function(e,t,n,r,o){const i=t.securityContext;let s=i?e.root.sanitizer.sanitize(i,o):o;e.renderer.setProperty(n,r,s)}(33554432&t.flags&&32&o.flags?i.componentView:e,o,s,a,r)}return!0}function Uy(e,t,n){let r=[];for(let o in n)r.push({propName:o,bindingType:n[o]});return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:-1,flags:e,childFlags:0,directChildFlags:0,childMatchedQueries:0,ngContentIndex:-1,matchedQueries:{},matchedQueryIds:0,references:{},childCount:0,bindings:[],bindingFlags:0,outputs:[],element:null,provider:null,text:null,query:{id:t,filterId:Eh(t),bindings:r},ngContent:null}}function zy(e){const t=e.def.nodeMatchedQueries;for(;e.parent&&Ch(e);){let n=e.parentNodeDef;e=e.parent;const r=n.nodeIndex+n.childCount;for(let o=0;o<=r;o++){const r=e.def.nodes[o];67108864&r.flags&&536870912&r.flags&&(r.query.filterId&t)===r.query.filterId&&oh(e,o).setDirty(),!(1&r.flags&&o+r.childCount<n.nodeIndex)&&67108864&r.childFlags&&536870912&r.childFlags||(o+=r.childCount)}}if(134217728&e.def.nodeFlags)for(let n=0;n<e.def.nodes.length;n++){const t=e.def.nodes[n];134217728&t.flags&&536870912&t.flags&&oh(e,n).setDirty(),n+=t.childCount}}function qy(e,t){const n=oh(e,t.nodeIndex);if(!n.dirty)return;let r,o=void 0;if(67108864&t.flags){const n=t.parent.parent;o=Wy(e,n.nodeIndex,n.nodeIndex+n.childCount,t.query,[]),r=nh(e,t.parent.nodeIndex).instance}else 134217728&t.flags&&(o=Wy(e,0,e.def.nodes.length-1,t.query,[]),r=e.component);n.reset(o);const i=t.query.bindings;let s=!1;for(let a=0;a<i.length;a++){const e=i[a];let t;switch(e.bindingType){case 0:t=n.first;break;case 1:t=n,s=!0}r[e.propName]=t}s&&n.notifyOnChanges()}function Wy(e,t,n,r,o){for(let i=t;i<=n;i++){const t=e.def.nodes[i],n=t.matchedQueries[r.id];if(null!=n&&o.push(Qy(e,t,n)),1&t.flags&&t.element.template&&(t.element.template.nodeMatchedQueries&r.filterId)===r.filterId){const n=th(e,i);if((t.childMatchedQueries&r.filterId)===r.filterId&&(Wy(e,i+1,i+t.childCount,r,o),i+=t.childCount),16777216&t.flags){const e=n.viewContainer._embeddedViews;for(let t=0;t<e.length;t++){const i=e[t],s=vh(i);s&&s===n&&Wy(i,0,i.def.nodes.length-1,r,o)}}const s=n.template._projectedViews;if(s)for(let e=0;e<s.length;e++){const t=s[e];Wy(t,0,t.def.nodes.length-1,r,o)}}(t.childMatchedQueries&r.filterId)!==r.filterId&&(i+=t.childCount)}return o}function Qy(e,t,n){if(null!=n)switch(n){case 1:return th(e,t.nodeIndex).renderElement;case 0:return new bd(th(e,t.nodeIndex).renderElement);case 2:return th(e,t.nodeIndex).template;case 3:return th(e,t.nodeIndex).viewContainer;case 4:return nh(e,t.nodeIndex).instance}}function Gy(e,t){return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:-1,flags:8,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:e,childCount:0,bindings:[],bindingFlags:0,outputs:[],element:null,provider:null,text:null,query:null,ngContent:{index:t}}}function Ky(e,t,n){const r=Oh(e,t,n);r&&Ph(e,n.ngContent.index,1,r,null,void 0)}function Zy(e,t){return Xy(128,e,ke(t+1))}function Yy(e,t){return Xy(32,e,ke(t))}function Jy(e,t){const n=Object.keys(t),r=n.length,o=[];for(let i=0;i<r;i++)o.push(n[i]);return Xy(64,e,o)}function Xy(e,t,n){const r=[];for(let o=0;o<n.length;o++){const e=n[o];r.push({flags:8,name:e,ns:null,nonMinifiedName:e,securityContext:null,suffix:null})}return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:t,flags:e,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:-1,childCount:0,bindings:r,bindingFlags:Mh(r),outputs:[],element:null,provider:null,text:null,query:null,ngContent:null}}function ev(e,t,n){const r=[];for(let o=1;o<n.length;o++)r[o-1]={flags:8,name:null,ns:null,nonMinifiedName:null,securityContext:null,suffix:n[o]};return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:2,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:t,childCount:0,bindings:r,bindingFlags:8,outputs:[],element:null,provider:null,text:{prefix:n[0]},query:null,ngContent:null}}function tv(e,t,n){let r;const o=e.renderer;r=o.createText(n.text.prefix);const i=Oh(e,t,n);return i&&o.appendChild(i,r),{renderText:r}}function nv(e,t){return(null!=e?e.toString():"")+t.suffix}function rv(e,t,n,r){let o=0,i=0,s=0,a=0,c=0,l=null,u=null,d=!1,h=!1,f=null;for(let p=0;p<t.length;p++){const e=t[p];if(e.nodeIndex=p,e.parent=l,e.bindingIndex=o,e.outputIndex=i,e.renderParent=u,s|=e.flags,c|=e.matchedQueryIds,e.element){const t=e.element;t.publicProviders=l?l.element.publicProviders:Object.create(null),t.allProviders=t.publicProviders,d=!1,h=!1,e.element.template&&(c|=e.element.template.nodeMatchedQueries)}if(iv(l,e,t.length),o+=e.bindings.length,i+=e.outputs.length,!u&&3&e.flags&&(f=e),20224&e.flags){d||(d=!0,l.element.publicProviders=Object.create(l.element.publicProviders),l.element.allProviders=l.element.publicProviders);const t=0!=(32768&e.flags);0==(8192&e.flags)||t?l.element.publicProviders[lh(e.provider.token)]=e:(h||(h=!0,l.element.allProviders=Object.create(l.element.publicProviders)),l.element.allProviders[lh(e.provider.token)]=e),t&&(l.element.componentProvider=e)}if(l?(l.childFlags|=e.flags,l.directChildFlags|=e.flags,l.childMatchedQueries|=e.matchedQueryIds,e.element&&e.element.template&&(l.childMatchedQueries|=e.element.template.nodeMatchedQueries)):a|=e.flags,e.childCount>0)l=e,ov(e)||(u=e);else for(;l&&p===l.nodeIndex+l.childCount;){const e=l.parent;e&&(e.childFlags|=l.childFlags,e.childMatchedQueries|=l.childMatchedQueries),l=e,u=l&&ov(l)?l.renderParent:l}}return{factory:null,nodeFlags:s,rootNodeFlags:a,nodeMatchedQueries:c,flags:e,nodes:t,updateDirectives:n||ah,updateRenderer:r||ah,handleEvent:(e,n,r,o)=>t[n].element.handleEvent(e,r,o),bindingCount:o,outputCount:i,lastRenderRootNode:f}}function ov(e){return 0!=(1&e.flags)&&null===e.element.name}function iv(e,t,n){const r=t.element&&t.element.template;if(r){if(!r.lastRenderRootNode)throw new Error("Illegal State: Embedded templates without nodes are not allowed!");if(r.lastRenderRootNode&&16777216&r.lastRenderRootNode.flags)throw new Error(`Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`)}if(20224&t.flags&&0==(1&(e?e.flags:0)))throw new Error(`Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`);if(t.query){if(67108864&t.flags&&(!e||0==(16384&e.flags)))throw new Error(`Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`);if(134217728&t.flags&&e)throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`)}if(t.childCount){const r=e?e.nodeIndex+e.childCount:n-1;if(t.nodeIndex<=r&&t.nodeIndex+t.childCount>r)throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`)}}function sv(e,t,n,r){const o=lv(e.root,e.renderer,e,t,n);return uv(o,e.component,r),dv(o),o}function av(e,t,n){const r=lv(e,e.renderer,null,null,t);return uv(r,n,n),dv(r),r}function cv(e,t,n,r){const o=t.element.componentRendererType;let i;return i=o?e.root.rendererFactory.createRenderer(r,o):e.root.renderer,lv(e.root,i,e,t.element.componentProvider,n)}function lv(e,t,n,r,o){const i=new Array(o.nodes.length),s=o.outputCount?new Array(o.outputCount):null;return{def:o,parent:n,viewContainerParent:null,parentNodeDef:r,context:null,component:null,nodes:i,state:13,root:e,renderer:t,oldValues:new Array(o.bindingCount),disposables:s,initIndex:-1}}function uv(e,t,n){e.component=t,e.context=n}function dv(e){let t;xh(e)&&(t=th(e.parent,e.parentNodeDef.parent.nodeIndex).renderElement);const n=e.def,r=e.nodes;for(let o=0;o<n.nodes.length;o++){const i=n.nodes[o];let s;switch(sh.setCurrentNode(e,o),201347067&i.flags){case 1:const n=$y(e,t,i);let a=void 0;if(33554432&i.flags){const t=jh(i.element.componentView);a=sh.createComponentView(e,i,t,n)}Vy(e,a,i,n),s={renderElement:n,componentView:a,viewContainer:null,template:i.element.template?uf(e,i):void 0},16777216&i.flags&&(s.viewContainer=sf(e,i,s));break;case 2:s=tv(e,t,i);break;case 512:case 1024:case 2048:case 256:s=r[o],s||4096&i.flags||(s={instance:Df(e,i)});break;case 16:s={instance:jf(e,i)};break;case 16384:s=r[o],s||(s={instance:If(e,i)}),32768&i.flags&&uv(th(e,i.parent.nodeIndex).componentView,s.instance,s.instance);break;case 32:case 64:case 128:s={value:void 0};break;case 67108864:case 134217728:s=new kg;break;case 8:Ky(e,t,i),s=void 0}r[o]=s}_v(e,vv.CreateViewNodes),Ev(e,201326592,268435456,0)}function hv(e){gv(e),sh.updateDirectives(e,1),wv(e,vv.CheckNoChanges),sh.updateRenderer(e,1),_v(e,vv.CheckNoChanges),e.state&=-97}function fv(e){1&e.state?(e.state&=-2,e.state|=2):e.state&=-3,Jd(e,0,256),gv(e),sh.updateDirectives(e,0),wv(e,vv.CheckAndUpdate),Ev(e,67108864,536870912,0);let t=Jd(e,256,512);Lf(e,2097152|(t?1048576:0)),sh.updateRenderer(e,0),_v(e,vv.CheckAndUpdate),Ev(e,134217728,536870912,0),t=Jd(e,512,768),Lf(e,8388608|(t?4194304:0)),2&e.def.flags&&(e.state&=-9),e.state&=-97,Jd(e,768,1024)}function pv(e,t,n,r,o,i,s,a,c,l,u,d,h){return 0===n?function(e,t,n,r,o,i,s,a,c,l,u,d){switch(201347067&t.flags){case 1:return function(e,t,n,r,o,i,s,a,c,l,u,d){const h=t.bindings.length;let f=!1;return h>0&&Hy(e,t,0,n)&&(f=!0),h>1&&Hy(e,t,1,r)&&(f=!0),h>2&&Hy(e,t,2,o)&&(f=!0),h>3&&Hy(e,t,3,i)&&(f=!0),h>4&&Hy(e,t,4,s)&&(f=!0),h>5&&Hy(e,t,5,a)&&(f=!0),h>6&&Hy(e,t,6,c)&&(f=!0),h>7&&Hy(e,t,7,l)&&(f=!0),h>8&&Hy(e,t,8,u)&&(f=!0),h>9&&Hy(e,t,9,d)&&(f=!0),f}(e,t,n,r,o,i,s,a,c,l,u,d);case 2:return function(e,t,n,r,o,i,s,a,c,l,u,d){let h=!1;const f=t.bindings,p=f.length;if(p>0&&ph(e,t,0,n)&&(h=!0),p>1&&ph(e,t,1,r)&&(h=!0),p>2&&ph(e,t,2,o)&&(h=!0),p>3&&ph(e,t,3,i)&&(h=!0),p>4&&ph(e,t,4,s)&&(h=!0),p>5&&ph(e,t,5,a)&&(h=!0),p>6&&ph(e,t,6,c)&&(h=!0),p>7&&ph(e,t,7,l)&&(h=!0),p>8&&ph(e,t,8,u)&&(h=!0),p>9&&ph(e,t,9,d)&&(h=!0),h){let h=t.text.prefix;p>0&&(h+=nv(n,f[0])),p>1&&(h+=nv(r,f[1])),p>2&&(h+=nv(o,f[2])),p>3&&(h+=nv(i,f[3])),p>4&&(h+=nv(s,f[4])),p>5&&(h+=nv(a,f[5])),p>6&&(h+=nv(c,f[6])),p>7&&(h+=nv(l,f[7])),p>8&&(h+=nv(u,f[8])),p>9&&(h+=nv(d,f[9]));const g=eh(e,t.nodeIndex).renderText;e.renderer.setValue(g,h)}return h}(e,t,n,r,o,i,s,a,c,l,u,d);case 16384:return function(e,t,n,r,o,i,s,a,c,l,u,d){const h=nh(e,t.nodeIndex),f=h.instance;let p=!1,g=void 0;const m=t.bindings.length;return m>0&&fh(e,t,0,n)&&(p=!0,g=Mf(e,h,t,0,n,g)),m>1&&fh(e,t,1,r)&&(p=!0,g=Mf(e,h,t,1,r,g)),m>2&&fh(e,t,2,o)&&(p=!0,g=Mf(e,h,t,2,o,g)),m>3&&fh(e,t,3,i)&&(p=!0,g=Mf(e,h,t,3,i,g)),m>4&&fh(e,t,4,s)&&(p=!0,g=Mf(e,h,t,4,s,g)),m>5&&fh(e,t,5,a)&&(p=!0,g=Mf(e,h,t,5,a,g)),m>6&&fh(e,t,6,c)&&(p=!0,g=Mf(e,h,t,6,c,g)),m>7&&fh(e,t,7,l)&&(p=!0,g=Mf(e,h,t,7,l,g)),m>8&&fh(e,t,8,u)&&(p=!0,g=Mf(e,h,t,8,u,g)),m>9&&fh(e,t,9,d)&&(p=!0,g=Mf(e,h,t,9,d,g)),g&&f.ngOnChanges(g),65536&t.flags&&Xd(e,256,t.nodeIndex)&&f.ngOnInit(),262144&t.flags&&f.ngDoCheck(),p}(e,t,n,r,o,i,s,a,c,l,u,d);case 32:case 64:case 128:return function(e,t,n,r,o,i,s,a,c,l,u,d){const h=t.bindings;let f=!1;const p=h.length;if(p>0&&ph(e,t,0,n)&&(f=!0),p>1&&ph(e,t,1,r)&&(f=!0),p>2&&ph(e,t,2,o)&&(f=!0),p>3&&ph(e,t,3,i)&&(f=!0),p>4&&ph(e,t,4,s)&&(f=!0),p>5&&ph(e,t,5,a)&&(f=!0),p>6&&ph(e,t,6,c)&&(f=!0),p>7&&ph(e,t,7,l)&&(f=!0),p>8&&ph(e,t,8,u)&&(f=!0),p>9&&ph(e,t,9,d)&&(f=!0),f){const f=rh(e,t.nodeIndex);let g;switch(201347067&t.flags){case 32:g=[],p>0&&g.push(n),p>1&&g.push(r),p>2&&g.push(o),p>3&&g.push(i),p>4&&g.push(s),p>5&&g.push(a),p>6&&g.push(c),p>7&&g.push(l),p>8&&g.push(u),p>9&&g.push(d);break;case 64:g={},p>0&&(g[h[0].name]=n),p>1&&(g[h[1].name]=r),p>2&&(g[h[2].name]=o),p>3&&(g[h[3].name]=i),p>4&&(g[h[4].name]=s),p>5&&(g[h[5].name]=a),p>6&&(g[h[6].name]=c),p>7&&(g[h[7].name]=l),p>8&&(g[h[8].name]=u),p>9&&(g[h[9].name]=d);break;case 128:const e=n;switch(p){case 1:g=e.transform(n);break;case 2:g=e.transform(r);break;case 3:g=e.transform(r,o);break;case 4:g=e.transform(r,o,i);break;case 5:g=e.transform(r,o,i,s);break;case 6:g=e.transform(r,o,i,s,a);break;case 7:g=e.transform(r,o,i,s,a,c);break;case 8:g=e.transform(r,o,i,s,a,c,l);break;case 9:g=e.transform(r,o,i,s,a,c,l,u);break;case 10:g=e.transform(r,o,i,s,a,c,l,u,d)}}f.value=g}return f}(e,t,n,r,o,i,s,a,c,l,u,d);default:throw"unreachable"}}(e,t,r,o,i,s,a,c,l,u,d,h):function(e,t,n){switch(201347067&t.flags){case 1:return function(e,t,n){let r=!1;for(let o=0;o<n.length;o++)Hy(e,t,o,n[o])&&(r=!0);return r}(e,t,n);case 2:return function(e,t,n){const r=t.bindings;let o=!1;for(let i=0;i<n.length;i++)ph(e,t,i,n[i])&&(o=!0);if(o){let o="";for(let e=0;e<n.length;e++)o+=nv(n[e],r[e]);o=t.text.prefix+o;const i=eh(e,t.nodeIndex).renderText;e.renderer.setValue(i,o)}return o}(e,t,n);case 16384:return function(e,t,n){const r=nh(e,t.nodeIndex),o=r.instance;let i=!1,s=void 0;for(let a=0;a<n.length;a++)fh(e,t,a,n[a])&&(i=!0,s=Mf(e,r,t,a,n[a],s));return s&&o.ngOnChanges(s),65536&t.flags&&Xd(e,256,t.nodeIndex)&&o.ngOnInit(),262144&t.flags&&o.ngDoCheck(),i}(e,t,n);case 32:case 64:case 128:return function(e,t,n){const r=t.bindings;let o=!1;for(let i=0;i<n.length;i++)ph(e,t,i,n[i])&&(o=!0);if(o){const o=rh(e,t.nodeIndex);let i;switch(201347067&t.flags){case 32:i=n;break;case 64:i={};for(let o=0;o<n.length;o++)i[r[o].name]=n[o];break;case 128:const e=n[0],t=n.slice(1);i=e.transform(...t)}o.value=i}return o}(e,t,n);default:throw"unreachable"}}(e,t,r)}function gv(e){const t=e.def;if(4&t.nodeFlags)for(let n=0;n<t.nodes.length;n++){const r=t.nodes[n];if(4&r.flags){const t=th(e,n).template._projectedViews;if(t)for(let n=0;n<t.length;n++){const r=t[n];r.state|=32,bh(r,e)}}else 0==(4&r.childFlags)&&(n+=r.childCount)}}function mv(e,t,n,r,o,i,s,a,c,l,u,d,h){return 0===n?function(e,t,n,r,o,i,s,a,c,l,u,d){const h=t.bindings.length;h>0&&gh(e,t,0,n),h>1&&gh(e,t,1,r),h>2&&gh(e,t,2,o),h>3&&gh(e,t,3,i),h>4&&gh(e,t,4,s),h>5&&gh(e,t,5,a),h>6&&gh(e,t,6,c),h>7&&gh(e,t,7,l),h>8&&gh(e,t,8,u),h>9&&gh(e,t,9,d)}(e,t,r,o,i,s,a,c,l,u,d,h):function(e,t,n){for(let r=0;r<n.length;r++)gh(e,t,r,n[r])}(e,t,r),!1}function bv(e,t){if(oh(e,t.nodeIndex).dirty)throw Kd(sh.createDebugContext(e,t.nodeIndex),`Query ${t.query.id} not dirty`,`Query ${t.query.id} dirty`,0!=(1&e.state))}function yv(e){if(!(128&e.state)){if(wv(e,vv.Destroy),_v(e,vv.Destroy),Lf(e,131072),e.disposables)for(let t=0;t<e.disposables.length;t++)e.disposables[t]();!function(e){if(!(16&e.state))return;const t=vh(e);if(t){const n=t.template._projectedViews;n&&(Se(n,n.indexOf(e)),sh.dirtyParentQueries(e))}}(e),e.renderer.destroyNode&&function(e){const t=e.def.nodes.length;for(let n=0;n<t;n++){const t=e.def.nodes[n];1&t.flags?e.renderer.destroyNode(th(e,n).renderElement):2&t.flags?e.renderer.destroyNode(eh(e,n).renderText):(67108864&t.flags||134217728&t.flags)&&oh(e,n).destroy()}}(e),xh(e)&&e.renderer.destroy(),e.state|=128}}const vv=function(){var e={CreateViewNodes:0,CheckNoChanges:1,CheckNoChangesProjectedViews:2,CheckAndUpdate:3,CheckAndUpdateProjectedViews:4,Destroy:5};return e[e.CreateViewNodes]="CreateViewNodes",e[e.CheckNoChanges]="CheckNoChanges",e[e.CheckNoChangesProjectedViews]="CheckNoChangesProjectedViews",e[e.CheckAndUpdate]="CheckAndUpdate",e[e.CheckAndUpdateProjectedViews]="CheckAndUpdateProjectedViews",e[e.Destroy]="Destroy",e}();function _v(e,t){const n=e.def;if(33554432&n.nodeFlags)for(let r=0;r<n.nodes.length;r++){const o=n.nodes[r];33554432&o.flags?xv(th(e,r).componentView,t):0==(33554432&o.childFlags)&&(r+=o.childCount)}}function wv(e,t){const n=e.def;if(16777216&n.nodeFlags)for(let r=0;r<n.nodes.length;r++){const o=n.nodes[r];if(16777216&o.flags){const n=th(e,r).viewContainer._embeddedViews;for(let e=0;e<n.length;e++)xv(n[e],t)}else 0==(16777216&o.childFlags)&&(r+=o.childCount)}}function xv(e,t){const n=e.state;switch(t){case vv.CheckNoChanges:0==(128&n)&&(12==(12&n)?hv(e):64&n&&Cv(e,vv.CheckNoChangesProjectedViews));break;case vv.CheckNoChangesProjectedViews:0==(128&n)&&(32&n?hv(e):64&n&&Cv(e,t));break;case vv.CheckAndUpdate:0==(128&n)&&(12==(12&n)?fv(e):64&n&&Cv(e,vv.CheckAndUpdateProjectedViews));break;case vv.CheckAndUpdateProjectedViews:0==(128&n)&&(32&n?fv(e):64&n&&Cv(e,t));break;case vv.Destroy:yv(e);break;case vv.CreateViewNodes:dv(e)}}function Cv(e,t){wv(e,t),_v(e,t)}function Ev(e,t,n,r){if(!(e.def.nodeFlags&t&&e.def.nodeFlags&n))return;const o=e.def.nodes.length;for(let i=0;i<o;i++){const o=e.def.nodes[i];if(o.flags&t&&o.flags&n)switch(sh.setCurrentNode(e,o.nodeIndex),r){case 0:qy(e,o);break;case 1:bv(e,o)}o.childFlags&t&&o.childFlags&n||(i+=o.childCount)}}let Sv=!1;function kv(){if(Sv)return;Sv=!0;const e=mr()?{setCurrentNode:Kv,createRootView:Dv,createEmbeddedView:Iv,createComponentView:Av,createNgModuleRef:Pv,overrideProvider:Fv,overrideComponentView:Mv,clearOverrides:Lv,checkAndUpdateView:Hv,checkNoChangesView:Uv,destroyView:zv,createDebugContext:(e,t)=>new r_(e,t),handleEvent:Zv,updateDirectives:Yv,updateRenderer:Jv}:{setCurrentNode:()=>{},createRootView:Ov,createEmbeddedView:sv,createComponentView:cv,createNgModuleRef:gf,overrideProvider:ah,overrideComponentView:ah,clearOverrides:ah,checkAndUpdateView:fv,checkNoChangesView:hv,destroyView:yv,createDebugContext:(e,t)=>new r_(e,t),handleEvent:(e,t,n,r)=>e.def.handleEvent(e,t,n,r),updateDirectives:(e,t)=>e.def.updateDirectives(0===t?Vv:Bv,e),updateRenderer:(e,t)=>e.def.updateRenderer(0===t?Vv:Bv,e)};sh.setCurrentNode=e.setCurrentNode,sh.createRootView=e.createRootView,sh.createEmbeddedView=e.createEmbeddedView,sh.createComponentView=e.createComponentView,sh.createNgModuleRef=e.createNgModuleRef,sh.overrideProvider=e.overrideProvider,sh.overrideComponentView=e.overrideComponentView,sh.clearOverrides=e.clearOverrides,sh.checkAndUpdateView=e.checkAndUpdateView,sh.checkNoChangesView=e.checkNoChangesView,sh.destroyView=e.destroyView,sh.resolveDep=Rf,sh.createDebugContext=e.createDebugContext,sh.handleEvent=e.handleEvent,sh.updateDirectives=e.updateDirectives,sh.updateRenderer=e.updateRenderer,sh.dirtyParentQueries=zy}function Ov(e,t,n,r,o,i){const s=o.injector.get(_d);return av(jv(e,o,s,t,n),r,i)}function Dv(e,t,n,r,o,i){const s=o.injector.get(_d),a=jv(e,o,new a_(s),t,n),c=$v(r);return i_(qv.create,av,null,[a,c,i])}function jv(e,t,n,r,o){const i=t.injector.get(Sd),s=t.injector.get(Yn),a=n.createRenderer(null,null);return{ngModule:t,injector:e,projectableNodes:r,selectorOrNode:o,sanitizer:i,rendererFactory:n,renderer:a,errorHandler:s}}function Iv(e,t,n,r){const o=$v(n);return i_(qv.create,sv,null,[e,t,o,r])}function Av(e,t,n,r){return n=Rv.get(t.element.componentProvider.provider.token)||$v(n),i_(qv.create,cv,null,[e,t,n,r])}function Pv(e,t,n,r){return gf(e,t,n,function(e){const{hasOverrides:t,hasDeprecatedOverrides:n}=function(e){let t=!1,n=!1;return 0===Tv.size||(e.providers.forEach(e=>{const r=Tv.get(e.token);3840&e.flags&&r&&(t=!0,n=n||r.deprecatedBehavior)}),e.modules.forEach(e=>{Nv.forEach((r,o)=>{D(o).providedIn===e&&(t=!0,n=n||r.deprecatedBehavior)})})),{hasOverrides:t,hasDeprecatedOverrides:n}}(e);return t?(function(e){for(let t=0;t<e.providers.length;t++){const r=e.providers[t];n&&(r.flags|=4096);const o=Tv.get(r.token);o&&(r.flags=-3841&r.flags|o.flags,r.deps=kh(o.deps),r.value=o.value)}if(Nv.size>0){let t=new Set(e.modules);Nv.forEach((r,o)=>{if(t.has(D(o).providedIn)){let t={token:o,flags:r.flags|(n?4096:0),deps:kh(r.deps),value:r.value,index:e.providers.length};e.providers.push(t),e.providersByKey[lh(o)]=t}})}}(e=e.factory(()=>ah)),e):e}(r))}const Tv=new Map,Nv=new Map,Rv=new Map;function Fv(e){let t;Tv.set(e.token,e),"function"==typeof e.token&&(t=D(e.token))&&"function"==typeof t.providedIn&&Nv.set(e.token,e)}function Mv(e,t){const n=jh(nf(t)),r=jh(n.nodes[0].element.componentView);Rv.set(e,r)}function Lv(){Tv.clear(),Nv.clear(),Rv.clear()}function $v(e){if(0===Tv.size)return e;const t=function(e){const t=[];let n=null;for(let r=0;r<e.nodes.length;r++){const o=e.nodes[r];1&o.flags&&(n=o),n&&3840&o.flags&&Tv.has(o.provider.token)&&(t.push(n.nodeIndex),n=null)}return t}(e);if(0===t.length)return e;e=e.factory(()=>ah);for(let r=0;r<t.length;r++)n(e,t[r]);return e;function n(e,t){for(let n=t+1;n<e.nodes.length;n++){const t=e.nodes[n];if(1&t.flags)return;if(3840&t.flags){const e=t.provider,n=Tv.get(e.token);n&&(t.flags=-3841&t.flags|n.flags,e.deps=kh(n.deps),e.value=n.value)}}}}function Vv(e,t,n,r,o,i,s,a,c,l,u,d,h){const f=e.def.nodes[t];return pv(e,f,n,r,o,i,s,a,c,l,u,d,h),224&f.flags?rh(e,t).value:void 0}function Bv(e,t,n,r,o,i,s,a,c,l,u,d,h){const f=e.def.nodes[t];return mv(e,f,n,r,o,i,s,a,c,l,u,d,h),224&f.flags?rh(e,t).value:void 0}function Hv(e){return i_(qv.detectChanges,fv,null,[e])}function Uv(e){return i_(qv.checkNoChanges,hv,null,[e])}function zv(e){return i_(qv.destroy,yv,null,[e])}const qv=function(){var e={create:0,detectChanges:1,checkNoChanges:2,destroy:3,handleEvent:4};return e[e.create]="create",e[e.detectChanges]="detectChanges",e[e.checkNoChanges]="checkNoChanges",e[e.destroy]="destroy",e[e.handleEvent]="handleEvent",e}();let Wv,Qv,Gv;function Kv(e,t){Qv=e,Gv=t}function Zv(e,t,n,r){return Kv(e,t),i_(qv.handleEvent,e.def.handleEvent,null,[e,t,n,r])}function Yv(e,t){if(128&e.state)throw Yd(qv[Wv]);return Kv(e,t_(e,0)),e.def.updateDirectives((function(e,n,r,...o){const i=e.def.nodes[n];return 0===t?Xv(e,i,r,o):e_(e,i,r,o),16384&i.flags&&Kv(e,t_(e,n)),224&i.flags?rh(e,i.nodeIndex).value:void 0}),e)}function Jv(e,t){if(128&e.state)throw Yd(qv[Wv]);return Kv(e,n_(e,0)),e.def.updateRenderer((function(e,n,r,...o){const i=e.def.nodes[n];return 0===t?Xv(e,i,r,o):e_(e,i,r,o),3&i.flags&&Kv(e,n_(e,n)),224&i.flags?rh(e,i.nodeIndex).value:void 0}),e)}function Xv(e,t,n,r){if(pv(e,t,n,...r)){const s=1===n?r[0]:r;if(16384&t.flags){const n={};for(let e=0;e<t.bindings.length;e++){const r=t.bindings[e],a=s[e];8&r.flags&&(n[(o=r.nonMinifiedName,i=void 0,i=o.replace(/[$@]/g,"_"),`ng-reflect-${o=i.replace(to,(...e)=>"-"+e[1].toLowerCase())}`)]=no(a))}const r=t.parent,a=th(e,r.nodeIndex).renderElement;if(r.element.name)for(let t in n){const r=n[t];null!=r?e.renderer.setAttribute(a,t,r):e.renderer.removeAttribute(a,t)}else e.renderer.setValue(a,`bindings=${JSON.stringify(n,null,2)}`)}}var o,i}function e_(e,t,n,r){mv(e,t,n,...r)}function t_(e,t){for(let n=t;n<e.def.nodes.length;n++){const t=e.def.nodes[n];if(16384&t.flags&&t.bindings&&t.bindings.length)return n}return null}function n_(e,t){for(let n=t;n<e.def.nodes.length;n++){const t=e.def.nodes[n];if(3&t.flags&&t.bindings&&t.bindings.length)return n}return null}class r_{constructor(e,t){this.view=e,this.nodeIndex=t,null==t&&(this.nodeIndex=t=0),this.nodeDef=e.def.nodes[t];let n=this.nodeDef,r=e;for(;n&&0==(1&n.flags);)n=n.parent;if(!n)for(;!n&&r;)n=_h(r),r=r.parent;this.elDef=n,this.elView=r}get elOrCompView(){return th(this.elView,this.elDef.nodeIndex).componentView||this.view}get injector(){return hf(this.elView,this.elDef)}get component(){return this.elOrCompView.component}get context(){return this.elOrCompView.context}get providerTokens(){const e=[];if(this.elDef)for(let t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){const n=this.elView.def.nodes[t];20224&n.flags&&e.push(n.provider.token),t+=n.childCount}return e}get references(){const e={};if(this.elDef){o_(this.elView,this.elDef,e);for(let t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){const n=this.elView.def.nodes[t];20224&n.flags&&o_(this.elView,n,e),t+=n.childCount}}return e}get componentRenderElement(){const e=function(e){for(;e&&!xh(e);)e=e.parent;return e.parent?th(e.parent,_h(e).nodeIndex):null}(this.elOrCompView);return e?e.renderElement:void 0}get renderNode(){return 2&this.nodeDef.flags?wh(this.view,this.nodeDef):wh(this.elView,this.elDef)}logError(e,...t){let n,r;2&this.nodeDef.flags?(n=this.view.def,r=this.nodeDef.nodeIndex):(n=this.elView.def,r=this.elDef.nodeIndex);const o=function(e,t){let n=-1;for(let r=0;r<=t;r++)3&e.nodes[r].flags&&n++;return n}(n,r);let i=-1;n.factory(()=>(i++,i===o?e.error.bind(e,...t):ah)),i<o&&(e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"),e.error(...t))}}function o_(e,t,n){for(let r in t.references)n[r]=Qy(e,t,t.references[r])}function i_(e,t,n,r){const o=Wv,i=Qv,s=Gv;try{Wv=e;const a=t.apply(n,r);return Qv=i,Gv=s,Wv=o,a}catch(a){if(Gn(a)||!Qv)throw a;throw function(e,t){return e instanceof Error||(e=new Error(e.toString())),Zd(e,t),e}(a,s_())}}function s_(){return Qv?new r_(Qv,Gv):null}class a_{constructor(e){this.delegate=e}createRenderer(e,t){return new c_(this.delegate.createRenderer(e,t))}begin(){this.delegate.begin&&this.delegate.begin()}end(){this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.delegate.whenRenderingDone?this.delegate.whenRenderingDone():Promise.resolve(null)}}class c_{constructor(e){this.delegate=e,this.debugContextFactory=s_,this.data=this.delegate.data}createDebugContext(e){return this.debugContextFactory(e)}destroyNode(e){const t=Cy(e);!function(e){wy.delete(e.nativeNode)}(t),t instanceof uy&&(t.listeners.length=0),this.delegate.destroyNode&&this.delegate.destroyNode(e)}destroy(){this.delegate.destroy()}createElement(e,t){const n=this.delegate.createElement(e,t),r=this.createDebugContext(n);if(r){const t=new dy(n,null,r);t.name=e,ky(t)}return n}createComment(e){const t=this.delegate.createComment(e),n=this.createDebugContext(t);return n&&ky(new uy(t,null,n)),t}createText(e){const t=this.delegate.createText(e),n=this.createDebugContext(t);return n&&ky(new uy(t,null,n)),t}appendChild(e,t){const n=Cy(e),r=Cy(t);n&&r&&n instanceof dy&&n.addChild(r),this.delegate.appendChild(e,t)}insertBefore(e,t,n){const r=Cy(e),o=Cy(t),i=Cy(n);r&&o&&r instanceof dy&&r.insertBefore(i,o),this.delegate.insertBefore(e,t,n)}removeChild(e,t){const n=Cy(e),r=Cy(t);n&&r&&n instanceof dy&&n.removeChild(r),this.delegate.removeChild(e,t)}selectRootElement(e,t){const n=this.delegate.selectRootElement(e,t),r=s_();return r&&ky(new dy(n,null,r)),n}setAttribute(e,t,n,r){const o=Cy(e);o&&o instanceof dy&&(o.attributes[r?r+":"+t:t]=n),this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){const r=Cy(e);r&&r instanceof dy&&(r.attributes[n?n+":"+t:t]=null),this.delegate.removeAttribute(e,t,n)}addClass(e,t){const n=Cy(e);n&&n instanceof dy&&(n.classes[t]=!0),this.delegate.addClass(e,t)}removeClass(e,t){const n=Cy(e);n&&n instanceof dy&&(n.classes[t]=!1),this.delegate.removeClass(e,t)}setStyle(e,t,n,r){const o=Cy(e);o&&o instanceof dy&&(o.styles[t]=n),this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){const r=Cy(e);r&&r instanceof dy&&(r.styles[t]=null),this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){const r=Cy(e);r&&r instanceof dy&&(r.properties[t]=n),this.delegate.setProperty(e,t,n)}listen(e,t,n){if("string"!=typeof e){const r=Cy(e);r&&r.listeners.push(new ly(t,n))}return this.delegate.listen(e,t,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setValue(e,t){return this.delegate.setValue(e,t)}}function l_(e){return kv(),sh.overrideProvider(e)}function u_(e,t){return kv(),sh.overrideComponentView(e,t)}function d_(){return kv(),sh.clearOverrides()}function h_(e,t,n){return new f_(e,t,n)}class f_ extends _e{constructor(e,t,n){super(),this.moduleType=e,this._bootstrapComponents=t,this._ngModuleDefFactory=n}create(e){kv();const t=function(e){const t=Array.from(e.providers),n=Array.from(e.modules),r={};for(const o in e.providersByKey)r[o]=e.providersByKey[o];return{factory:e.factory,scope:e.scope,providers:t,modules:n,providersByKey:r}}(jh(this._ngModuleDefFactory));return sh.createNgModuleRef(this.moduleType,e||ea.NULL,this._bootstrapComponents,t)}}},EWqr:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("bwdy");class o extends r.a{constructor(e,t){super()}schedule(e,t=0){return this}}class i extends o{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,r=void 0;try{this.work(e)}catch(o){n=!0,r=!!o&&o||new Error(o)}if(n)return this.unsubscribe(),r}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}},Efrr:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("EWqr");const o=new(n("DG/E").a)(r.a)},FU6l:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))()},GoAz:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IdLP"),o=n("1MAX"),i=n("gMuT");function s(e,t){return t?Object(i.a)(e,t):e instanceof r.a?e:new r.a(Object(o.a)(e))}},HM3f:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var r=n("gBlb"),o=n("FU6l"),i=n("pBDD"),s=n("mW0F"),a=n("ckkg");const c={};function l(...e){let t=null,n=null;return Object(r.a)(e[e.length-1])&&(n=e.pop()),"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&Object(o.a)(e[0])&&(e=e[0]),Object(a.a)(e,n).lift(new u(t))}class u{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new d(e,this.resultSelector))}}class d extends i.a{constructor(e,t){super(e),this.resultSelector=t,this.active=0,this.values=[],this.observables=[]}_next(e){this.values.push(c),this.observables.push(e)}_complete(){const e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(let n=0;n<t;n++){const t=e[n];this.add(Object(s.a)(this,t,t,n))}}}notifyComplete(e){0==(this.active-=1)&&this.destination.complete()}notifyNext(e,t,n,r,o){const i=this.values,s=this.toRespond?i[n]===c?--this.toRespond:this.toRespond:0;i[n]=t,0===s&&(this.resultSelector?this._tryResultSelector(i):this.destination.next(i.slice()))}_tryResultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}},HgnN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));let r=!1;const o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},IJgj:function(e,t,n){"use strict";function r(e){return"function"==typeof e}n.d(t,"a",(function(){return r}))},IdLP:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("IoLb"),o=n("5uGe"),i=n("25CY"),s=n("rWo0"),a=n("qEfY"),c=n("Ti3e"),l=n("HgnN");let u=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const n=new e;return n.source=this,n.operator=t,n}subscribe(e,t,n){const{operator:r}=this,a=function(e,t,n){if(e){if(e instanceof o.a)return e;if(e[i.a])return e[i.a]()}return e||t||n?new o.a(e,t,n):new o.a(s.a)}(e,t,n);if(a.add(r?r.call(a,this.source):this.source||l.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),l.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a}_trySubscribe(e){try{return this._subscribe(e)}catch(t){l.a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),Object(r.a)(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=d(t))((t,n)=>{let r;r=this.subscribe(t=>{try{e(t)}catch(o){n(o),r&&r.unsubscribe()}},n,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[a.a](){return this}pipe(...e){return 0===e.length?this:Object(c.b)(e)(this)}toPromise(e){return new(e=d(e))((e,t)=>{let n;this.subscribe(e=>n=e,e=>t(e),()=>e(n))})}}return e.create=t=>new e(t),e})();function d(e){if(e||(e=l.a.Promise||Promise),!e)throw new Error("no Promise impl found");return e}},IoLb:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e){for(;e;){const{closed:t,destination:n,isStopped:o}=e;if(t||o)return!1;e=n&&n instanceof r.a?n:null}return!0}},"J+dc":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("5uGe"),o=n("PNff"),i=n("6Oco");function s(e){return t=>0===e?Object(i.b)():t.lift(new a(e))}class a{constructor(e){if(this.total=e,this.total<0)throw new o.a}call(e,t){return t.subscribe(new c(e,this.total))}}class c extends r.a{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){const t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))}}},JHA6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("0pus");function o(e,t){return function(n){let o;if(o="function"==typeof e?e:function(){return e},"function"==typeof t)return n.lift(new i(o,t));const s=Object.create(n,r.b);return s.source=n,s.subjectFactory=o,s}}class i{constructor(e,t){this.subjectFactory=e,this.selector=t}call(e,t){const{selector:n}=this,r=this.subjectFactory(),o=n(r).subscribe(e);return o.add(t.subscribe(r)),o}}},KTx3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("IdLP"),o=n("FU6l"),i=n("IJgj"),s=n("YtkY");function a(e,t,n,c){return Object(i.a)(n)&&(c=n,n=void 0),c?a(e,t,n).pipe(Object(s.a)(e=>Object(o.a)(e)?c(...e):c(e))):new r.a(r=>{!function e(t,n,r,o,i){let s;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(t)){const e=t;t.addEventListener(n,r,i),s=()=>e.removeEventListener(n,r,i)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(t)){const e=t;t.on(n,r),s=()=>e.off(n,r)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(t)){const e=t;t.addListener(n,r),s=()=>e.removeListener(n,r)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let s=0,a=t.length;s<a;s++)e(t[s],n,r,o,i)}o.add(s)}(e,t,(function(e){r.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),r,n)})}},MiDb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})()},ODPb:function(e,t,n){"use strict";n.r(t),n.d(t,"ScreenComponent",(function(){return l})),n.d(t,"ScreenModule",(function(){return d}));var r=n("2kYt"),o=n("AEcS"),i=n("ZTXN"),s=n("kuMc"),a=n("EM62");class c{getConfiguration(){return{plugin:{id:"ScreenPlugin","display-name":"Dont code test Plugin adding screen types",version:"1.0.0"},"schema-updates":[{id:"screen-list",description:"A screen displaying a list of items",changes:[{location:{parent:"#/definitions/screen",id:"type",after:"name"},add:{enum:["list"]},props:{entity:{type:"string",format:"#/creation/entities"}},replace:!0},{location:{parent:"/definitions/screen",id:"type",after:"name"},add:{enum:["freeform"]},props:{},replace:!1}]}],"preview-handlers":[{location:{parent:o.DontCodeModel.APP_SCREENS,id:"type",values:["list"]},class:{name:"ScreenComponent",source:"screen"}}]}}}let l=(()=>{let e=class{constructor(){this.unsubscriber=new i.b}ngOnInit(){}initCommandFlow(e,t,n){e.receiveCommands(t).pipe(Object(s.a)(this.unsubscriber)).subscribe(e=>{console.log("Getting updates from ",t," with value ",e.value)})}ngOnDestroy(){this.forceUnsubscribe()}forceUnsubscribe(){this.unsubscriber.next(),this.unsubscriber.complete(),this.unsubscriber=new i.b}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["plugins-screen"]],decls:2,vars:0,template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"p"),a["\u0275\u0275text"](1,"screen from the plugin Works!"),a["\u0275\u0275elementEnd"]())},styles:[""]}),e})();var u=o.DontCode.dtcde;let d=(()=>{let e=class{constructor(){console.log("Hey I'm there"),u.registerPlugin(new c)}};return e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule]]}),e})()},PNff:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>{function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e})()},QQZH:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ZTXN"),o=n("kSHZ"),i=n("bwdy"),s=n("A2S1"),a=n("MiDb"),c=n("yTkW");class l extends r.b{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new u(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,n=t?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,o=n.length;let l;if(this.closed)throw new a.a;if(this.isStopped||this.hasError?l=i.a.EMPTY:(this.observers.push(e),l=new c.a(this,e)),r&&e.add(e=new s.a(e,r)),t)for(let i=0;i<o&&!e.closed;i++)e.next(n[i]);else for(let i=0;i<o&&!e.closed;i++)e.next(n[i].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),l}_getNow(){return(this.scheduler||o.a).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,n=this._windowTime,r=this._events,o=r.length;let i=0;for(;i<o&&!(e-r[i].time<n);)i++;return o>t&&(i=Math.max(i,o-t)),i>0&&r.splice(0,i),r}}class u{constructor(e,t){this.time=e,this.value=t}}},ROBh:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("gBlb"),o=n("ckkg"),i=n("czMQ");function s(...e){let t=e[e.length-1];return Object(r.a)(t)?(e.pop(),Object(i.a)(e,t)):Object(o.a)(e)}},SrNW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e,t){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new i(e,t,n))}}class i{constructor(e,t,n=!1){this.accumulator=e,this.seed=t,this.hasSeed=n}call(e,t){return t.subscribe(new s(e,this.accumulator,this.seed,this.hasSeed))}}class s extends r.a{constructor(e,t,n,r){super(e),this.accumulator=t,this._seed=n,this.hasSeed=r,this.index=0}get seed(){return this._seed}set seed(e){this.hasSeed=!0,this._seed=e}_next(e){if(this.hasSeed)return this._tryNext(e);this.seed=e,this.destination.next(e)}_tryNext(e){const t=this.index++;let n;try{n=this.accumulator(this.seed,e,t)}catch(r){this.destination.error(r)}this.seed=n,this.destination.next(n)}}},TLy2:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("pBDD"),o=n("r9RI"),i=n("mW0F"),s=n("YtkY"),a=n("GoAz");function c(e,t){return"function"==typeof t?n=>n.pipe(c((n,r)=>Object(a.a)(e(n,r)).pipe(Object(s.a)((e,o)=>t(n,e,r,o))))):t=>t.lift(new l(e))}class l{constructor(e){this.project=e}call(e,t){return t.subscribe(new u(e,this.project))}}class u extends r.a{constructor(e,t){super(e),this.project=t,this.index=0}_next(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this._innerSub(t,e,n)}_innerSub(e,t,n){const r=this.innerSubscription;r&&r.unsubscribe();const s=new o.a(this,t,n),a=this.destination;a.add(s),this.innerSubscription=Object(i.a)(this,e,void 0,void 0,s),this.innerSubscription!==s&&a.add(this.innerSubscription)}_complete(){const{innerSubscription:e}=this;e&&!e.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=null}notifyComplete(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&super._complete()}notifyNext(e,t,n,r,o){this.destination.next(t)}}},TaSY:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("VxHp"),o=n("xVbo"),i=n("A8kH"),s=n("fbWu"),a=n("iqFP"),c=n("5E2i");function l(e,t){const n=arguments.length>=2;return l=>l.pipe(e?Object(o.a)((t,n)=>e(t,n,l)):c.a,Object(i.a)(1),n?Object(a.a)(t):Object(s.a)(()=>new r.a))}},Ti3e:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("kgbq");function o(...e){return i(e)}function i(e){return e?1===e.length?e[0]:function(t){return e.reduce((e,t)=>t(e),t)}:r.a}},VxHp:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>{function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e})()},X0qr:function(e,t,n){"use strict";function r(e){return null!==e&&"object"==typeof e}n.d(t,"a",(function(){return r}))},YIYF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("ZtqZ"),o=n("fY+t"),i=n("42at");t.DontCodeCore=class{constructor(){this.schemaManager=new r.DontCodeSchemaManager,this.pluginManager=new o.DontCodePluginManager,this.previewManager=new i.DontCodePreviewManager}registerPlugin(e){this.pluginManager.registerPlugin(e,this.schemaManager,this.previewManager)}getSchemaUri(){return"schemas/v1/dont-code-schema.json"}getSchemaManager(){return this.schemaManager}getPreviewManager(){return this.previewManager}}},YtkY:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new i(e,t))}}class i{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new s(e,this.project,this.thisArg))}}class s extends r.a{constructor(e,t,n){super(e),this.project=t,this.count=0,this.thisArg=n||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}},ZTXN:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d}));var r=n("IdLP"),o=n("5uGe"),i=n("bwdy"),s=n("MiDb"),a=n("yTkW"),c=n("25CY");class l extends o.a{constructor(e){super(e),this.destination=e}}let u=(()=>{class e extends r.a{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[c.a](){return new l(this)}lift(e){const t=new d(this,this);return t.operator=e,t}next(e){if(this.closed)throw new s.a;if(!this.isStopped){const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].next(e)}}error(e){if(this.closed)throw new s.a;this.hasError=!0,this.thrownError=e,this.isStopped=!0;const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].error(e);this.observers.length=0}complete(){if(this.closed)throw new s.a;this.isStopped=!0;const{observers:e}=this,t=e.length,n=e.slice();for(let r=0;r<t;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new s.a;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new s.a;return this.hasError?(e.error(this.thrownError),i.a.EMPTY):this.isStopped?(e.complete(),i.a.EMPTY):(this.observers.push(e),new a.a(this,e))}asObservable(){const e=new r.a;return e.source=this,e}}return e.create=(e,t)=>new d(e,t),e})();class d extends u{constructor(e,t){super(),this.destination=e,this.source=t}next(e){const{destination:t}=this;t&&t.next&&t.next(e)}error(e){const{destination:t}=this;t&&t.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:t}=this;return t?this.source.subscribe(e):i.a.EMPTY}}},ZtqZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("uq2N"),o=n("umRR");t.DontCodeSchemaManager=class{constructor(){this.readSchema=o.DontCodeSchema.defaultv1,this.currentSchema=this.convertSchemaToMap(this.readSchema)}getSchema(){return this.currentSchema}convertSchemaToMap(e){return new r.DontCodeSchemaRoot(e)}registerChanges(e){e["schema-updates"]&&e["schema-updates"].forEach(e=>{e.changes.forEach(e=>{const t=this.locateItem(e.location.parent);if(!t)throw"Cannot find parent element: "+e.location.parent;t.upsertWith(e)})})}locateItem(e){const t=e.split("/");var n=this.currentSchema;return t.forEach(t=>{if(!n)return console.error("Could not find subItem "+t+" of "+e),n;t&&t.length>0&&"#"!==t&&(n=n.getChild(t))}),n}}},"a/xz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("YIYF");(t.DontCode||(t.DontCode={})).dtcde=new r.DontCodeCore},bwdy:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("FU6l"),o=n("X0qr"),i=n("IJgj"),s=n("uTrF");let a=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_unsubscribe:a,_subscriptions:l}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(let e=0;e<n.length;++e)n[e].remove(this);if(Object(i.a)(a))try{a.call(this)}catch(u){t=u instanceof s.a?c(u.errors):[u]}if(Object(r.a)(l)){let e=-1,n=l.length;for(;++e<n;){const n=l[e];if(Object(o.a)(n))try{n.unsubscribe()}catch(u){t=t||[],u instanceof s.a?t=t.concat(c(u.errors)):t.push(u)}}}if(t)throw new s.a(t)}add(t){let n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){const t=n;n=new e,n._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof e){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n}remove(e){const t=this._subscriptions;if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}var t;return e.EMPTY=((t=new e).closed=!0,t),e})();function c(e){return e.reduce((e,t)=>e.concat(t instanceof s.a?t.errors:t),[])}},cJ9h:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("mW0F"),o=n("pBDD"),i=n("r9RI"),s=n("YtkY"),a=n("GoAz");function c(e,t,n=Number.POSITIVE_INFINITY){return"function"==typeof t?r=>r.pipe(c((n,r)=>Object(a.a)(e(n,r)).pipe(Object(s.a)((e,o)=>t(n,e,r,o))),n)):("number"==typeof t&&(n=t),t=>t.lift(new l(e,n)))}class l{constructor(e,t=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=t}call(e,t){return t.subscribe(new u(e,this.project,this.concurrent))}}class u extends o.a{constructor(e,t,n=Number.POSITIVE_INFINITY){super(e),this.project=t,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(t,e,n)}_innerSub(e,t,n){const o=new i.a(this,t,n),s=this.destination;s.add(o);const a=Object(r.a)(this,e,void 0,void 0,o);a!==o&&s.add(a)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e,t,n,r,o){this.destination.next(t)}notifyComplete(e){const t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}},ckkg:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IdLP"),o=n("dUuy"),i=n("czMQ");function s(e,t){return t?Object(i.a)(e,t):new r.a(Object(o.a)(e))}},czMQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("IdLP"),o=n("bwdy");function i(e,t){return new r.a(n=>{const r=new o.a;let i=0;return r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r})}},dUuy:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>t=>{for(let n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}},"eY+9":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>e&&"number"==typeof e.length&&"function"!=typeof e},"fY+t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePluginManager=class{constructor(){this.plugins=new Map}registerPlugin(e,t,n){const r=e.getConfiguration();this.plugins.set(r.plugin.id+"-v"+r.plugin.version,e),t.registerChanges(r),n.registerHandlers(r)}}},fbWu:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("VxHp"),o=n("5uGe");function i(e=c){return t=>t.lift(new s(e))}class s{constructor(e){this.errorFactory=e}call(e,t){return t.subscribe(new a(e,this.errorFactory))}}class a extends o.a{constructor(e,t){super(e),this.errorFactory=t,this.hasValue=!1}_next(e){this.hasValue=!0,this.destination.next(e)}_complete(){if(this.hasValue)return this.destination.complete();{let t;try{t=this.errorFactory()}catch(e){t=e}this.destination.error(t)}}}function c(){return new r.a}},g6G6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("IdLP"),o=n("gBlb"),i=n("3lSR"),s=n("ckkg");function a(...e){let t=Number.POSITIVE_INFINITY,n=null,a=e[e.length-1];return Object(o.a)(a)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof a&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof r.a?e[0]:Object(i.a)(t)(Object(s.a)(e,n))}},gBlb:function(e,t,n){"use strict";function r(e){return e&&"function"==typeof e.schedule}n.d(t,"a",(function(){return r}))},gMuT:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("IdLP"),o=n("bwdy"),i=n("qEfY"),s=n("czMQ"),a=n("sWLk"),c=n("/vgl"),l=n("eY+9");function u(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[i.a]}(e))return function(e,t){return new r.a(n=>{const r=new o.a;return r.add(t.schedule(()=>{const o=e[i.a]();r.add(o.subscribe({next(e){r.add(t.schedule(()=>n.next(e)))},error(e){r.add(t.schedule(()=>n.error(e)))},complete(){r.add(t.schedule(()=>n.complete()))}}))})),r})}(e,t);if(Object(c.a)(e))return function(e,t){return new r.a(n=>{const r=new o.a;return r.add(t.schedule(()=>e.then(e=>{r.add(t.schedule(()=>{n.next(e),r.add(t.schedule(()=>n.complete()))}))},e=>{r.add(t.schedule(()=>n.error(e)))}))),r})}(e,t);if(Object(l.a)(e))return Object(s.a)(e,t);if(function(e){return e&&"function"==typeof e[a.a]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new r.a(n=>{const r=new o.a;let i;return r.add(()=>{i&&"function"==typeof i.return&&i.return()}),r.add(t.schedule(()=>{i=e[a.a](),r.add(t.schedule((function(){if(n.closed)return;let e,t;try{const n=i.next();e=n.value,t=n.done}catch(r){return void n.error(r)}t?n.complete():(n.next(e),this.schedule())})))})),r})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}},i7Dj:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(){return function(e){return e.lift(new i(e))}}class i{constructor(e){this.connectable=e}call(e,t){const{connectable:n}=this;n._refCount++;const r=new s(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o}}class s extends r.a{constructor(e,t){super(e),this.connectable=t}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const t=e._refCount;if(t<=0)return void(this.connection=null);if(e._refCount=t-1,t>1)return void(this.connection=null);const{connection:n}=this,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}},"i9P/":function(e,t,n){"use strict";function r(e){setTimeout(()=>{throw e},0)}n.d(t,"a",(function(){return r}))},i9xl:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IdLP"),o=n("GoAz"),i=n("6Oco");function s(e){return new r.a(t=>{let n;try{n=e()}catch(r){return void t.error(r)}return(n?Object(o.a)(n):Object(i.b)()).subscribe(t)})}},iqFP:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e=null){return t=>t.lift(new i(e))}class i{constructor(e){this.defaultValue=e}call(e,t){return t.subscribe(new s(e,this.defaultValue))}}class s extends r.a{constructor(e,t){super(e),this.defaultValue=t,this.isEmpty=!0}_next(e){this.isEmpty=!1,this.destination.next(e)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}},jIqt:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("qZtG"),o=n("gBlb");function i(...e){const t=e[e.length-1];return Object(o.a)(t)?(e.pop(),n=>Object(r.a)(e,n,t)):t=>Object(r.a)(e,t)}},jOdJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("VxHp"),o=n("xVbo"),i=n("J+dc"),s=n("iqFP"),a=n("fbWu"),c=n("5E2i");function l(e,t){const n=arguments.length>=2;return l=>l.pipe(e?Object(o.a)((t,n)=>e(t,n,l)):c.a,Object(i.a)(1),n?Object(s.a)(t):Object(a.a)(()=>new r.a))}},kSHZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("EWqr");class o extends r.a{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(e,t,n):e.flush(this)}}var i=n("DG/E");class s extends i.a{}const a=new s(o)},kgbq:function(e,t,n){"use strict";function r(){}n.d(t,"a",(function(){return r}))},kuMc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("pBDD"),o=n("mW0F");function i(e){return t=>t.lift(new s(e))}class s{constructor(e){this.notifier=e}call(e,t){const n=new a(e),r=Object(o.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n}}class a extends r.a{constructor(e){super(e),this.seenValue=!1}notifyNext(e,t,n,r,o){this.seenValue=!0,this.complete()}notifyComplete(){}}},"m7+3":function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="m7+3"},mW0F:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("r9RI"),o=n("1MAX"),i=n("IdLP");function s(e,t,n,s,a=new r.a(e,n,s)){if(!a.closed)return t instanceof i.a?t.subscribe(a):Object(o.a)(t)(a)}},mWib:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("5uGe"),o=n("Efrr");function i(e,t=o.a){return n=>n.lift(new s(e,t))}class s{constructor(e,t){this.dueTime=e,this.scheduler=t}call(e,t){return t.subscribe(new a(e,this.dueTime,this.scheduler))}}class a extends r.a{constructor(e,t,n){super(e),this.dueTime=t,this.scheduler=n,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(c,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:e}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}}clearDebounce(){const e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)}}function c(e){e.debouncedNext()}},mawV:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("3lSR");function o(){return Object(r.a)(1)}},o8N5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Change=class{constructor(e,t,n){this.type=e,this.position=t,this.value=n}},t.ChangeType=function(e){return e.ADD="ADD",e.UPDATE="UPDATE",e.DELETE="DELETE",e.RESET="RESET",e}(t.ChangeType||{})},pBDD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");class o extends r.a{notifyNext(e,t,n,r,o){this.destination.next(t)}notifyError(e,t){this.destination.error(e)}notifyComplete(e){this.destination.complete()}}},qEfY:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")()},qZtG:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ROBh"),o=n("mawV");function i(...e){return Object(o.a)()(Object(r.a)(...e))}},r9RI:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");class o extends r.a{constructor(e,t,n){super(),this.parent=e,this.outerValue=t,this.outerIndex=n,this.index=0}_next(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}_error(e){this.parent.notifyError(e,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}},rWo0:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("HgnN"),o=n("i9P/");const i={closed:!0,next(e){},error(e){if(r.a.useDeprecatedSynchronousErrorHandling)throw e;Object(o.a)(e)},complete(){}}},ruxD:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("5uGe"),o=n("bwdy");function i(e){return t=>t.lift(new s(e))}class s{constructor(e){this.callback=e}call(e,t){return t.subscribe(new a(e,this.callback))}}class a extends r.a{constructor(e,t){super(e),this.add(new o.a(t))}}},ryP2:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a}));var r=n("6Oco"),o=n("ROBh"),i=n("47ST"),s=function(e){return e.NEXT="N",e.ERROR="E",e.COMPLETE="C",e}({});let a=(()=>{class e{constructor(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}accept(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}toObservable(){switch(this.kind){case"N":return Object(o.a)(this.value);case"E":return Object(i.a)(this.error);case"C":return Object(r.b)()}throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})()},sWLk:function(e,t,n){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(t,"a",(function(){return o}));const o=r()},uTrF:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})()},umRR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("3/dt");class o{}t.DontCodeSchema=o,o.ROOT="/properties/"+r.DontCodeModel.ROOT,o.defaultv1={$id:"http://dont-code.net/dont-code-schema/v1",$schema:"http://json-schema.org/draft-07/schema#",description:"JSON Schema v1 for dont-code",type:"object",required:["creation"],properties:{creation:{type:"object",properties:{type:{enum:["application"]},name:{type:"string"},entities:{type:"array",items:{$ref:"#/definitions/entity"}},screens:{type:"array",items:{$ref:"#/definitions/screen"}}},additionalProperties:!1}},definitions:{entity:{type:"object",properties:{name:{type:"string"},fields:{type:"array",items:{$ref:"#/definitions/field"}}},additionalProperties:!1},field:{type:"object",properties:{name:{type:"string"},type:{enum:["string","number","boolean"]}},additionalProperties:!1},screen:{type:"object",properties:{name:{type:"string"},layout:{enum:["flow","grid"]},components:{type:"array",items:{$ref:"#/definitions/component"}}},additionalProperties:!1},component:{type:"object",properties:{type:{enum:["list","edit","view"]},entity:{type:"string",format:"#/creation/entities"}},additionalProperties:!1}}}},uq2N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e,t){this.array=!1,this.parent=e,this.relativeId=t}isArray(){return this.array}setArray(e){this.array=e}isEnum(){return!1}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}static generateItem(e,t,n){let r,c=Array.isArray(e);if(c)return console.error("arrays are not supported",e),e;if(c=!1,e.type)switch(e.type){case"object":r=new o(e,t,n);break;case"array":r=this.generateItem(e.items,t,n),c=!0;break;default:r=new s(e,t,n)}else if(e.enum)r=new i(e,t,n);else{if(!e.$ref)return e;r=new a(e,t,n)}return r.setArray(c),r}static isObject(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}static goto(e,t){let n=e;return t.split("/").forEach(r=>{"#"!==r&&""!=r&&(n=n.getChild(r)),n||console.error("Cannot find "+r+" of "+t+" in the following item ",e)}),n}upsertWith(e){return!1}getParent(){return this.parent}getChild(e){}getChildren(){return(new Map).entries()}updateWith(e){}getProperties(e){}hasProperties(e){return!1}getRelativeId(){return this.relativeId}setRelativeId(e){this.relativeId=e}}t.AbstractSchemaItem=r;class o extends r{constructor(e,t,n){super(n,t),this.children=new Map,e&&this.readJson(e)}readJson(e){const t=e.properties;if(t)for(var n in t)this.children.set(n,r.generateItem(t[n],n,this));const o=e.definitions;if(o){const e=r.generateItem(o,"definitions",this);this.children.set("definitions",e)}}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!1}upsertWith(e){let t=this.getChild(e.location.id);if(!t)if(t=r.generateItem(e.add,e.location.id,this),e.location.after){let n=new Map;this.children.forEach((r,o)=>{n.set(o,r),o===e.location.after&&n.set(e.location.id,t)}),this.children=n}else this.children.set(e.location.id,t);return t.updateWith(e),!0}updateWith(e){super.updateWith(e)}getChild(e){return e?this.children.get(e):void 0}getChildren(){return this.children.entries()}}t.DontCodeSchemaObject=o,t.DontCodeSchemaRoot=class extends o{constructor(e){super(e,null)}readJson(e){super.readJson(e);const t=e.definitions;t&&this.children.set("definitions",new o({properties:t},"definitions",this))}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!0}};class i extends r{constructor(e,t,n){super(n,t),this.values=new Array,this.properties=new Map,this.values.push(...e.enum)}isEnum(){return!0}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}getValues(){return this.values}updateWith(e){super.updateWith(e),e.add.enum.forEach(t=>{if(-1==this.values.indexOf(t)&&this.values.push(t),e.props){const n=new c(e,this.relativeId+"="+t,this);n.isEmpty()||this.properties.set(t,n)}})}getProperties(e){return this.properties.get(e)}hasProperties(e){return this.properties.has(e)}}t.DontCodeSchemaEnum=i;class s extends r{constructor(e,t,n){super(n,t),this.type=e.type}isValue(){return!0}getType(){return this.type}}t.DontCodeSchemaValue=s;class a extends r{constructor(e,t,n){super(n,t),this.resolvedRef=new Map,this.ref=e.$ref}isReference(){return!0}getReference(){return this.ref}resolveReference(e){this.resolvedRef.set("",e)}getChildren(){return this.resolvedRef.entries()}}t.DontCodeSchemaRef=a;class c extends o{constructor(e,t,n){super({type:"object",properties:e.props},t,n),this.replace=e.replace,this.posAfter=e.location.after}isEmpty(){return 0==this.children.size}isReplace(){return this.replace}getPosAfter(){return this.posAfter}}t.DontCodeSchemaProperty=c},vT4p:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));let r=1;const o=(()=>Promise.resolve())(),i={};function s(e){return e in i&&(delete i[e],!0)}const a={setImmediate(e){const t=r++;return i[t]=!0,o.then(()=>s(t)&&e()),t},clearImmediate(e){s(e)}};var c=n("EWqr");class l extends c.a{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}requestAsyncId(e,t,n=0){return null!==n&&n>0?super.requestAsyncId(e,t,n):(e.actions.push(this),e.scheduled||(e.scheduled=a.setImmediate(e.flush.bind(e,null))))}recycleAsyncId(e,t,n=0){if(null!==n&&n>0||null===n&&this.delay>0)return super.recycleAsyncId(e,t,n);0===e.actions.length&&(a.clearImmediate(t),e.scheduled=void 0)}}var u=n("DG/E");class d extends u.a{flush(e){this.active=!0,this.scheduled=void 0;const{actions:t}=this;let n,r=-1,o=t.length;e=e||t.shift();do{if(n=e.execute(e.state,e.delay))break}while(++r<o&&(e=t.shift()));if(this.active=!1,n){for(;++r<o&&(e=t.shift());)e.unsubscribe();throw n}}}const h=new d(l)},xVbo:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e,t){return function(n){return n.lift(new i(e,t))}}class i{constructor(e,t){this.predicate=e,this.thisArg=t}call(e,t){return t.subscribe(new s(e,this.predicate,this.thisArg))}}class s extends r.a{constructor(e,t,n){super(e),this.predicate=t,this.thisArg=n,this.count=0}_next(e){let t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}t&&this.destination.next(e)}}},yTkW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("bwdy");class o extends r.a{constructor(e,t){super(),this.subject=e,this.subscriber=t,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,t=e.observers;if(this.subject=null,!t||0===t.length||e.isStopped||e.closed)return;const n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("EM62");"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;var o=n("2kYt");class i extends o["\u0275DomAdapter"]{constructor(){super()}supportsDOMEvents(){return!0}}class s extends i{static makeCurrent(){Object(o["\u0275setRootDomAdapter"])(new s)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=c||(c=document.querySelector("base"),c)?c.getAttribute("href"):null;return null==t?null:(n=t,a||(a=document.createElement("a")),a.setAttribute("href",n),"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname);var n}resetBaseElement(){c=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){return Object(o["\u0275parseCookieValue"])(document.cookie,e)}}let a,c=null;const l=new r.InjectionToken("TRANSITION_ID"),u=[{provide:r.APP_INITIALIZER,useFactory:function(e,t,n){return()=>{n.get(r.ApplicationInitStatus).donePromise.then(()=>{const n=Object(o["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[l,o.DOCUMENT,r.Injector],multi:!0}];class d{static init(){Object(r.setTestabilityGetter)(new d)}addToWindow(e){r["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},r["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),r["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),r["\u0275global"].frameworkStabilizers||(r["\u0275global"].frameworkStabilizers=[]),r["\u0275global"].frameworkStabilizers.push(e=>{const t=r["\u0275global"].getAllAngularTestabilities();let n=t.length,o=!1;const i=function(t){o=o||t,n--,0==n&&e(o)};t.forEach((function(e){e.whenStable(i)}))})}findTestabilityInTree(e,t,n){if(null==t)return null;const r=e.getTestability(t);return null!=r?r:n?Object(o["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}const h=new r.InjectionToken("EventManagerPlugins");let f=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](h),r["\u0275\u0275inject"](r.NgZone))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class p{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const r=Object(o["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,n)}}let g=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),m=(()=>{class e extends g{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>Object(o["\u0275getDOM"])().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const b={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},y=/%COMP%/g;function v(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?v(e,o,n):(o=o.replace(y,e),n.push(o))}return n}function _(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let w=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new x(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case r.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new C(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case r.ViewEncapsulation.Native:case r.ViewEncapsulation.ShadowDom:return new E(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=v(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](f),r["\u0275\u0275inject"](m),r["\u0275\u0275inject"](r.APP_ID))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class x{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(b[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=b[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=b[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,o){o&r.RendererStyleFlags2.DashCase?e.style.setProperty(t,n,o&r.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&r.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,_(n)):this.eventManager.addEventListener(e,t,_(n))}}class C extends x{constructor(e,t,n,r){super(e),this.component=n;const o=v(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr="_ngcontent-%COMP%".replace(y,r+"-"+n.id),this.hostAttr=function(e){return"_nghost-%COMP%".replace(y,e)}(r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class E extends x{constructor(e,t,n,o){super(e),this.sharedStylesHost=t,this.hostEl=n,this.component=o,this.shadowRoot=o.encapsulation===r.ViewEncapsulation.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const i=v(o.id,o.styles,[]);for(let r=0;r<i.length;r++){const e=document.createElement("style");e.textContent=i[r],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let S=(()=>{class e extends p{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const k=["alt","control","meta","shift"],O={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},D={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},j={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let I=(()=>{class e extends p{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,r){const i=e.parseEventName(n),s=e.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Object(o["\u0275getDOM"])().onAndCancel(t,i.domEventName,s))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let i="";if(k.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),i+=e+".")}),i+=o,0!=n.length||0===o.length)return null;const s={};return s.domEventName=r,s.fullKey=i,s}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&D.hasOwnProperty(t)&&(t=D[t]))}return O[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),k.forEach(r=>{r!=n&&(0,j[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const A=[{provide:r.PLATFORM_ID,useValue:o["\u0275PLATFORM_BROWSER_ID"]},{provide:r.PLATFORM_INITIALIZER,useValue:function(){s.makeCurrent(),d.init()},multi:!0},{provide:o.DOCUMENT,useFactory:function(){return Object(r["\u0275setDocument"])(document),document},deps:[]}],P=Object(r.createPlatformFactory)(r.platformCore,"browser",A),T=[[],{provide:r["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:r.ErrorHandler,useFactory:function(){return new r.ErrorHandler},deps:[]},{provide:h,useClass:S,multi:!0,deps:[o.DOCUMENT,r.NgZone,r.PLATFORM_ID]},{provide:h,useClass:I,multi:!0,deps:[o.DOCUMENT]},[],{provide:w,useClass:w,deps:[f,m,r.APP_ID]},{provide:r.RendererFactory2,useExisting:w},{provide:g,useExisting:m},{provide:m,useClass:m,deps:[o.DOCUMENT]},{provide:r.Testability,useClass:r.Testability,deps:[r.NgZone]},{provide:f,useClass:f,deps:[h,r.NgZone]},[]];let N=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:r.APP_ID,useValue:t.appId},{provide:l,useExisting:r.APP_ID},u]}}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](e,12))},providers:T,imports:[o.CommonModule,r.ApplicationModule]}),e})();"undefined"!=typeof window&&window;var R=n("ZTXN"),F=n("HM3f"),M=n("kuMc"),L=n("YtkY"),$=n("AEcS");let V=(()=>{class e{constructor(){}getContent(){return this.content}resetContent(e){this.content=e}receiveUpdatesFrom(e){e.subscribe(e=>{const t=e.position.substring(0,e.position.lastIndexOf("/")),n=e.position.substring(e.position.lastIndexOf("/")+1);this.findAtPosition(t,!0)[n]=e.value})}findAtPosition(e,t){const n=e.split("/");if(null==this.content){if(!t)return null;this.content={creation:{type:"application",name:"unknown"}}}let r=this.content;return n.forEach(e=>{if(!r[e]){if(!t)return null;r[e]={}}r=r[e]}),r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var B=n("xVbo"),H=n("QQZH"),U=n("5uGe"),z=n("IdLP"),q=n("bwdy");const W={url:"",deserializer:e=>JSON.parse(e.data),serializer:e=>JSON.stringify(e)};class Q extends R.a{constructor(e,t){if(super(),e instanceof z.a)this.destination=t,this.source=e;else{const t=this._config=Object.assign({},W);if(this._output=new R.b,"string"==typeof e)t.url=e;else for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(!t.WebSocketCtor&&WebSocket)t.WebSocketCtor=WebSocket;else if(!t.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new H.a}}lift(e){const t=new Q(this._config,this.destination);return t.operator=e,t.source=this,t}_resetState(){this._socket=null,this.source||(this.destination=new H.a),this._output=new R.b}multiplex(e,t,n){const r=this;return new z.a(o=>{try{r.next(e())}catch(s){o.error(s)}const i=r.subscribe(e=>{try{n(e)&&o.next(e)}catch(s){o.error(s)}},e=>o.error(e),()=>o.complete());return()=>{try{r.next(t())}catch(s){o.error(s)}i.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:e,protocol:t,url:n,binaryType:r}=this._config,o=this._output;let i=null;try{i=t?new e(n,t):new e(n),this._socket=i,r&&(this._socket.binaryType=r)}catch(a){return void o.error(a)}const s=new q.a(()=>{this._socket=null,i&&1===i.readyState&&i.close()});i.onopen=e=>{const{_socket:t}=this;if(!t)return i.close(),void this._resetState();const{openObserver:n}=this._config;n&&n.next(e);const r=this.destination;this.destination=U.a.create(t=>{if(1===i.readyState)try{const{serializer:e}=this._config;i.send(e(t))}catch(e){this.destination.error(e)}},e=>{const{closingObserver:t}=this._config;t&&t.next(void 0),e&&e.code?i.close(e.code,e.reason):o.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:e}=this._config;e&&e.next(void 0),i.close(),this._resetState()}),r&&r instanceof H.a&&s.add(r.subscribe(this.destination))},i.onerror=e=>{this._resetState(),o.error(e)},i.onclose=e=>{this._resetState();const{closeObserver:t}=this._config;t&&t.next(e),e.wasClean?o.complete():o.error(e)},i.onmessage=e=>{try{const{deserializer:t}=this._config;o.next(t(e))}catch(t){o.error(t)}}}_subscribe(e){const{source:t}=this;return t?t.subscribe(e):(this._socket||this._connectSocket(),this._output.subscribe(e),e.add(()=>{const{_socket:e}=this;0===this._output.observers.length&&(e&&1===e.readyState&&e.close(),this._resetState())}),e)}unsubscribe(){const{_socket:e}=this;e&&1===e.readyState&&e.close(),this._resetState(),super.unsubscribe()}}let G=(()=>{class e{constructor(){this.listOfChanges=[],this.changeEmitter=new R.b,this.connectionStatus=new H.a(1),this.previewServiceWebSocket=new Q("wss://preview-services-demo.apps.us-west-1.starter.openshift-online.com/preview"),this.connectionStatus.next("connected"),this.previewServiceWebSocket.subscribe(e=>{this.listOfChanges.push(e),this.changeEmitter.next(e)},e=>{this.connectionStatus.next("ERROR:"+e)},()=>{this.connectionStatus.next("closed")})}getListOfChanges(){return this.listOfChanges}getChangeEvents(){return this.changeEmitter}getConnectionStatus(){return this.connectionStatus}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),K=(()=>{class e{constructor(e,t){this.changeListener=e,this.valueService=t,this.receivedCommands=new R.b,t.receiveUpdatesFrom(this.receivedCommands),e.getChangeEvents().subscribe(e=>{console.log("Received Change ",e),this.receivedCommands.next(new $.Change($.ChangeType.UPDATE,e.position,e.value))})}getJsonAt(e){return this.valueService.findAtPosition(e,!1)}pushCommand(e){this.receivedCommands.next(e)}receiveCommands(e,t){return e?this.receivedCommands.pipe(Object(B.a)(n=>{if(n.position.startsWith(e)){if(t){const r=n.position.indexOf("/",e.length+1);return!(-1==r||!n.position.startsWith(t,r+1))}return!0}return!1})):this.receivedCommands}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](G),r["\u0275\u0275inject"](V))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=n("C05f"),Y=n("g6G6"),J=(n("vT4p"),n("ROBh")),X=(n("KTx3"),n("mWib"),n("TLy2")),ee=n("J+dc"),te=n("8j5Y");const ne={provide:r.APP_BOOTSTRAP_LISTENER,useFactory:function(e,t){return()=>{if(Object(o.isPlatformBrowser)(t)){const t=Array.from(e.querySelectorAll(`[class*=${re}]`)),n=/\bflex-layout-.+?\b/g;t.forEach(e=>{e.classList.contains(`${re}ssr`)&&e.parentNode?e.parentNode.removeChild(e):e.className.replace(n,"")})}}},deps:[o.DOCUMENT,r.PLATFORM_ID],multi:!0},re="flex-layout-";let oe=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[ne]}),e})();class ie{constructor(e=!1,t="all",n="",r="",o=0){this.matches=e,this.mediaQuery=t,this.mqAlias=n,this.suffix=r,this.priority=o,this.property=""}clone(){return new ie(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let se=(()=>{class e{constructor(){this.stylesheet=new Map}addStyleToElement(e,t,n){const r=this.stylesheet.get(e);r?r.set(t,n):this.stylesheet.set(e,new Map([[t,n]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(e,t){const n=this.stylesheet.get(e);let r="";if(n){const e=n.get(t);"number"!=typeof e&&"string"!=typeof e||(r=e+"")}return r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e},token:e,providedIn:"root"}),e})();const ae={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},ce=new r.InjectionToken("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>ae}),le=new r.InjectionToken("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),ue=new r.InjectionToken("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function de(e,t){return e=e?e.clone():new ie,t&&(e.mqAlias=t.alias,e.mediaQuery=t.mediaQuery,e.suffix=t.suffix,e.priority=t.priority),e}const he=["row","column","row-reverse","column-reverse"];function fe(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}let pe=(()=>{class e{constructor(e,t,n,r){this.elementRef=e,this.styleBuilder=t,this.styler=n,this.marshal=r,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new R.b,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,this.marshal.activatedAlias)}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const n=t.split(".").slice(1).join(".");this.setValue(e[t].currentValue,n)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(e=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),e)}addStyles(e,t){const n=this.styleBuilder,r=n.shouldCache;let o=this.styleCache.get(e);o&&r||(o=n.buildStyles(e,t),r&&this.styleCache.set(e,o)),this.mru=Object.assign({},o),this.applyStyleToElement(o),n.sideEffect(e,o,t)}clearStyles(){Object.keys(this.mru).forEach(e=>{this.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(e,t=!1){if(e){const[n,r]=this.styler.getFlowDirection(e);if(!r&&t){const t=function(e){let[t,n,r]=function(e){e=e?e.toLowerCase():"";let[t,n,r]=e.split(" ");return he.find(e=>e===t)||(t=he[0]),"inline"===n&&(n="inline"!==r?r:"",r="inline"),[t,fe(n),!!r]}(e);return function(e,t=null,n=!1){return{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}(t,n,r)}(n);this.styler.applyStyleToElements(t,[e])}return n.trim()}return"row"}hasWrap(e){return this.styler.hasWrap(e)}applyStyleToElement(e,t,n=this.nativeElement){this.styler.applyStyleToElement(n,e,t)}setValue(e,t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,t)}updateWithValue(e){this.currentValue!==e&&(this.addStyles(e),this.currentValue=e)}}return e.\u0275fac=function(e){r["\u0275\u0275invalidFactory"]()},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,features:[r["\u0275\u0275NgOnChangesFeature"]]}),e})();const ge=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.9px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.9px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.9px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.9px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.9px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.9px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.9px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.9px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.9px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],me="(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)",be="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)",ye="(orientation: portrait) and (min-width: 840px)",ve="(orientation: landscape) and (min-width: 1280px)",_e={HANDSET:"(orientation: portrait) and (max-width: 599.9px), (orientation: landscape) and (max-width: 959.9px)",TABLET:`${me} , ${be}`,WEB:`${ye}, ${ve} `,HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599.9px)",TABLET_PORTRAIT:`${me} `,WEB_PORTRAIT:`${ye}`,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.9px)",TABLET_LANDSCAPE:`${be}`,WEB_LANDSCAPE:`${ve}`},we=[{alias:"handset",priority:2e3,mediaQuery:_e.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:_e.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:_e.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:_e.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:_e.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:_e.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:_e.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:_e.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:_e.WEB_PORTRAIT,overlapping:!0}],xe=/(\.|-|_)/g;function Ce(e){let t=e.length>0?e.charAt(0):"",n=e.length>1?e.slice(1):"";return t.toUpperCase()+n}const Ee=new r.InjectionToken("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const e=Object(r.inject)(ue),t=Object(r.inject)(ce),n=[].concat.apply([],(e||[]).map(e=>Array.isArray(e)?e:[e]));return function(e,t=[]){const n={};return e.forEach(e=>{n[e.alias]=e}),t.forEach(e=>{n[e.alias]?function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(let n of t)if(null!=n)for(let t in n)n.hasOwnProperty(t)&&(e[t]=n[t])}(n[e.alias],e):n[e.alias]=e}),(r=Object.keys(n).map(e=>n[e])).forEach(e=>{e.suffix||(e.suffix=e.alias.replace(xe,"|").split("|").map(Ce).join(""),e.overlapping=!!e.overlapping)}),r;var r}((t.disableDefaultBps?[]:ge).concat(t.addOrientationBps?we:[]),n)}});function Se(e,t){return(t&&t.priority||0)-(e&&e.priority||0)}function ke(e,t){return(e.priority||0)-(t.priority||0)}let Oe=(()=>{class e{constructor(e){this.findByMap=new Map,this.items=[...e].sort(ke)}findByAlias(e){return e?this.findWithPredicate(e,t=>t.alias==e):null}findByQuery(e){return this.findWithPredicate(e,t=>t.mediaQuery==e)}get overlappings(){return this.items.filter(e=>1==e.overlapping)}get aliases(){return this.items.map(e=>e.alias)}get suffixes(){return this.items.map(e=>e.suffix?e.suffix:"")}findWithPredicate(e,t){let n=this.findByMap.get(e);return n||(n=this.items.find(t)||null,this.findByMap.set(e,n)),n||null}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](Ee))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(Ee))},token:e,providedIn:"root"}),e})(),De=(()=>{class e{constructor(e,t,n){this._zone=e,this._platformId=t,this._document=n,this.source=new Z.a(new ie(!0)),this.registry=new Map,this.pendingRemoveListenerFns=[],this._observable$=this.source.asObservable()}get activations(){const e=[];return this.registry.forEach((t,n)=>{t.matches&&e.push(n)}),e}isActive(e){const t=this.registry.get(e);return t?t.matches:this.registerQuery(e).some(e=>e.matches)}observe(e,t=!1){if(e&&e.length){const n=this._observable$.pipe(Object(B.a)(n=>!t||e.indexOf(n.mediaQuery)>-1)),r=new z.a(t=>{const n=this.registerQuery(e);if(n.length){const e=n.pop();n.forEach(e=>{t.next(e)}),this.source.next(e)}t.complete()});return Object(Y.a)(r,n)}return this._observable$}registerQuery(e){const t=Array.isArray(e)?e:[e],n=[];return function(e,t){const n=e.filter(e=>!je[e]);if(n.length>0){const e=n.join(", ");try{const r=t.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(t.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${e} {.fx-query-test{ }}\n`)),t.head.appendChild(r),n.forEach(e=>je[e]=r)}catch(r){console.error(r)}}}(t,this._document),t.forEach(e=>{const t=t=>{this._zone.run(()=>this.source.next(new ie(t.matches,e)))};let r=this.registry.get(e);r||(r=this.buildMQL(e),r.addListener(t),this.pendingRemoveListenerFns.push(()=>r.removeListener(t)),this.registry.set(e,r)),r.matches&&n.push(new ie(!0,e))}),n}ngOnDestroy(){let e;for(;e=this.pendingRemoveListenerFns.pop();)e()}buildMQL(e){return function(e,t){return t&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{},onchange:null,addEventListener(){},removeEventListener(){},dispatchEvent:()=>!1}}(e,Object(o.isPlatformBrowser)(this._platformId))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.NgZone),r["\u0275\u0275inject"](r.PLATFORM_ID),r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(r.NgZone),Object(r["\u0275\u0275inject"])(r.PLATFORM_ID),Object(r["\u0275\u0275inject"])(o.DOCUMENT))},token:e,providedIn:"root"}),e})();const je={},Ie={alias:"print",mediaQuery:"print",priority:1e3};let Ae=(()=>{class e{constructor(e,t,n){this.breakpoints=e,this.layoutConfig=t,this._document=n,this.registeredBeforeAfterPrintHooks=!1,this.isPrintingBeforeAfterEvent=!1,this.beforePrintEventListeners=[],this.afterPrintEventListeners=[],this.isPrinting=!1,this.queue=new Pe,this.deactivations=[]}withPrintQuery(e){return[...e,"print"]}isPrintEvent(e){return e.mediaQuery.startsWith("print")}get printAlias(){return this.layoutConfig.printWithBreakpoints||[]}get printBreakPoints(){return this.printAlias.map(e=>this.breakpoints.findByAlias(e)).filter(e=>null!==e)}getEventBreakpoints({mediaQuery:e}){const t=this.breakpoints.findByQuery(e);return(t?[...this.printBreakPoints,t]:this.printBreakPoints).sort(Se)}updateEvent(e){let t=this.breakpoints.findByQuery(e.mediaQuery);return this.isPrintEvent(e)&&(t=this.getEventBreakpoints(e)[0],e.mediaQuery=t?t.mediaQuery:""),de(e,t)}registerBeforeAfterPrintHooks(e){if(!this._document.defaultView||this.registeredBeforeAfterPrintHooks)return;this.registeredBeforeAfterPrintHooks=!0;const t=()=>{this.isPrinting||(this.isPrintingBeforeAfterEvent=!0,this.startPrinting(e,this.getEventBreakpoints(new ie(!0,"print"))),e.updateStyles())},n=()=>{this.isPrintingBeforeAfterEvent=!1,this.isPrinting&&(this.stopPrinting(e),e.updateStyles())};this._document.defaultView.addEventListener("beforeprint",t),this._document.defaultView.addEventListener("afterprint",n),this.beforePrintEventListeners.push(t),this.afterPrintEventListeners.push(n)}interceptEvents(e){return this.registerBeforeAfterPrintHooks(e),t=>{this.isPrintEvent(t)?t.matches&&!this.isPrinting?(this.startPrinting(e,this.getEventBreakpoints(t)),e.updateStyles()):t.matches||!this.isPrinting||this.isPrintingBeforeAfterEvent||(this.stopPrinting(e),e.updateStyles()):this.collectActivations(t)}}blockPropagation(){return e=>!(this.isPrinting||this.isPrintEvent(e))}startPrinting(e,t){this.isPrinting=!0,e.activatedBreakpoints=this.queue.addPrintBreakpoints(t)}stopPrinting(e){e.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}collectActivations(e){if(!this.isPrinting||this.isPrintingBeforeAfterEvent)if(e.matches)this.isPrintingBeforeAfterEvent||(this.deactivations=[]);else{const t=this.breakpoints.findByQuery(e.mediaQuery);t&&(this.deactivations.push(t),this.deactivations.sort(Se))}}ngOnDestroy(){this.beforePrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("beforeprint",e)),this.afterPrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("afterprint",e))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](Oe),r["\u0275\u0275inject"](ce),r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(Oe),Object(r["\u0275\u0275inject"])(ce),Object(r["\u0275\u0275inject"])(o.DOCUMENT))},token:e,providedIn:"root"}),e})();class Pe{constructor(){this.printBreakpoints=[]}addPrintBreakpoints(e){return e.push(Ie),e.sort(Se),e.forEach(e=>this.addBreakpoint(e)),this.printBreakpoints}addBreakpoint(e){e&&void 0===this.printBreakpoints.find(t=>t.mediaQuery===e.mediaQuery)&&(this.printBreakpoints=function(e){return!!e&&e.mediaQuery.startsWith("print")}(e)?[e,...this.printBreakpoints]:[...this.printBreakpoints,e])}clear(){this.printBreakpoints=[]}}function Te(e){for(let t in e){let n=e[t]||"";switch(t){case"display":e.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+t]=n;break;case"flex-direction":n=n||"row",e["-webkit-flex-direction"]=n,e["flex-direction"]=n;break;case"order":e.order=e["-webkit-"+t]=isNaN(+n)?"0":n}}return e}let Ne=(()=>{class e{constructor(e,t,n,r){this._serverStylesheet=e,this._serverModuleLoaded=t,this._platformId=n,this.layoutConfig=r}applyStyleToElement(e,t,n=null){let r={};"string"==typeof t&&(r[t]=n,t=r),r=this.layoutConfig.disableVendorPrefixes?t:Te(t),this._applyMultiValueStyleToElement(r,e)}applyStyleToElements(e,t=[]){const n=this.layoutConfig.disableVendorPrefixes?e:Te(e);t.forEach(e=>{this._applyMultiValueStyleToElement(n,e)})}getFlowDirection(e){let t=this.lookupStyle(e,"flex-direction");return[t||"row",this.lookupInlineStyle(e,"flex-direction")||Object(o.isPlatformServer)(this._platformId)&&this._serverModuleLoaded?t:""]}hasWrap(e){return"wrap"===this.lookupStyle(e,"flex-wrap")}lookupAttributeValue(e,t){return e.getAttribute(t)||""}lookupInlineStyle(e,t){return Object(o.isPlatformBrowser)(this._platformId)?e.style.getPropertyValue(t):this._getServerStyle(e,t)}lookupStyle(e,t,n=!1){let r="";return e&&((r=this.lookupInlineStyle(e,t))||(Object(o.isPlatformBrowser)(this._platformId)?n||(r=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(r=this._serverStylesheet.getStyleForElement(e,t)))),r?r.trim():""}_applyMultiValueStyleToElement(e,t){Object.keys(e).sort().forEach(n=>{const r=e[n],i=Array.isArray(r)?r:[r];i.sort();for(let e of i)e=e?e+"":"",Object(o.isPlatformBrowser)(this._platformId)||!this._serverModuleLoaded?Object(o.isPlatformBrowser)(this._platformId)?t.style.setProperty(n,e):this._setServerStyle(t,n,e):this._serverStylesheet.addStyleToElement(t,n,e)})}_setServerStyle(e,t,n){t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const r=this._readStyleAttribute(e);r[t]=n||"",this._writeStyleAttribute(e,r)}_getServerStyle(e,t){return this._readStyleAttribute(e)[t]||""}_readStyleAttribute(e){const t={},n=e.getAttribute("style");if(n){const e=n.split(/;+/g);for(let n=0;n<e.length;n++){const r=e[n].trim();if(r.length>0){const e=r.indexOf(":");if(-1===e)throw new Error(`Invalid CSS style: ${r}`);t[r.substr(0,e).trim()]=r.substr(e+1).trim()}}}return t}_writeStyleAttribute(e,t){let n="";for(const r in t)t[r]&&(n+=r+":"+t[r]+";");e.setAttribute("style",n)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](se),r["\u0275\u0275inject"](le),r["\u0275\u0275inject"](r.PLATFORM_ID),r["\u0275\u0275inject"](ce))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(se),Object(r["\u0275\u0275inject"])(le),Object(r["\u0275\u0275inject"])(r.PLATFORM_ID),Object(r["\u0275\u0275inject"])(ce))},token:e,providedIn:"root"}),e})(),Re=(()=>{class e{constructor(e,t,n){this.matchMedia=e,this.breakpoints=t,this.hook=n,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new R.b,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}onMediaChange(e){const t=this.findByQuery(e.mediaQuery);t&&((e=de(e,t)).matches&&-1===this.activatedBreakpoints.indexOf(t)?(this.activatedBreakpoints.push(t),this.activatedBreakpoints.sort(Se),this.updateStyles()):e.matches||-1===this.activatedBreakpoints.indexOf(t)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(t),1),this.activatedBreakpoints.sort(Se),this.updateStyles()))}init(e,t,n,r,o=[]){Fe(this.updateMap,e,t,n),Fe(this.clearMap,e,t,r),this.buildElementKeyMap(e,t),this.watchExtraTriggers(e,t,o)}getValue(e,t,n){const r=this.elementMap.get(e);if(r){const e=void 0!==n?r.get(n):this.getActivatedValues(r,t);if(e)return e.get(t)}}hasValue(e,t){const n=this.elementMap.get(e);if(n){const e=this.getActivatedValues(n,t);if(e)return void 0!==e.get(t)||!1}return!1}setValue(e,t,n,r){let o=this.elementMap.get(e);if(o){const i=(o.get(r)||new Map).set(t,n);o.set(r,i),this.elementMap.set(e,o)}else o=(new Map).set(r,(new Map).set(t,n)),this.elementMap.set(e,o);const i=this.getValue(e,t);void 0!==i&&this.updateElement(e,t,i)}trackValue(e,t){return this.subject.asObservable().pipe(Object(B.a)(n=>n.element===e&&n.key===t))}updateStyles(){this.elementMap.forEach((e,t)=>{const n=new Set(this.elementKeyMap.get(t));let r=this.getActivatedValues(e);r&&r.forEach((e,r)=>{this.updateElement(t,r,e),n.delete(r)}),n.forEach(n=>{if(r=this.getActivatedValues(e,n),r){const e=r.get(n);this.updateElement(t,n,e)}else this.clearElement(t,n)})})}clearElement(e,t){const n=this.clearMap.get(e);if(n){const r=n.get(t);r&&(r(),this.subject.next({element:e,key:t,value:""}))}}updateElement(e,t,n){const r=this.updateMap.get(e);if(r){const o=r.get(t);o&&(o(n),this.subject.next({element:e,key:t,value:n}))}}releaseElement(e){const t=this.watcherMap.get(e);t&&(t.forEach(e=>e.unsubscribe()),this.watcherMap.delete(e));const n=this.elementMap.get(e);n&&(n.forEach((e,t)=>n.delete(t)),this.elementMap.delete(e))}triggerUpdate(e,t){const n=this.elementMap.get(e);if(n){const r=this.getActivatedValues(n,t);r&&(t?this.updateElement(e,t,r.get(t)):r.forEach((t,n)=>this.updateElement(e,n,t)))}}buildElementKeyMap(e,t){let n=this.elementKeyMap.get(e);n||(n=new Set,this.elementKeyMap.set(e,n)),n.add(t)}watchExtraTriggers(e,t,n){if(n&&n.length){let r=this.watcherMap.get(e);if(r||(r=new Map,this.watcherMap.set(e,r)),!r.get(t)){const o=Object(Y.a)(...n).subscribe(()=>{const n=this.getValue(e,t);this.updateElement(e,t,n)});r.set(t,o)}}}findByQuery(e){return this.breakpoints.findByQuery(e)}getActivatedValues(e,t){for(let r=0;r<this.activatedBreakpoints.length;r++){const n=e.get(this.activatedBreakpoints[r].alias);if(n&&(void 0===t||n.has(t)&&null!=n.get(t)))return n}const n=e.get("");return void 0===t||n&&n.has(t)?n:void 0}observeActivations(){const e=this.breakpoints.items.map(e=>e.mediaQuery);this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe(Object(te.a)(this.hook.interceptEvents(this)),Object(B.a)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](De),r["\u0275\u0275inject"](Oe),r["\u0275\u0275inject"](Ae))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(De),Object(r["\u0275\u0275inject"])(Oe),Object(r["\u0275\u0275inject"])(Ae))},token:e,providedIn:"root"}),e})();function Fe(e,t,n,r){if(void 0!==r){let o=e.get(t);o||(o=new Map,e.set(t,o)),o.set(n,r)}}let Me=(()=>{class e extends class{constructor(){this.shouldCache=!0}sideEffect(e,t,n){}}{buildStyles(e,t){return{display:"true"===e?t.display||(t.isServer?"initial":""):"none"}}}return e.\u0275fac=function(t){return Le(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e},token:e,providedIn:"root"}),e})();const Le=r["\u0275\u0275getInheritedFactory"](Me);let $e=(()=>{class e extends pe{constructor(e,t,n,r,o,i,s){super(e,t,n,r),this.layoutConfig=o,this.platformId=i,this.serverModuleLoaded=s,this.DIRECTIVE_KEY="show-hide",this.display="",this.hasLayout=!1,this.hasFlexChild=!1}ngAfterViewInit(){this.trackExtraTriggers();const e=Array.from(this.nativeElement.children);for(let n=0;n<e.length;n++)if(this.marshal.hasValue(e[n],"flex")){this.hasFlexChild=!0;break}Ve.has(this.nativeElement)?this.display=Ve.get(this.nativeElement):(this.display=this.getDisplayStyle(),Ve.set(this.nativeElement,this.display)),this.init();const t=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY,"");void 0===t||""===t?this.setValue(!0,""):this.triggerUpdate()}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const r=t.split("."),o=r.slice(1).join("."),i=e[t].currentValue;let s=""===i||0!==i&&null!=(n=i)&&"false"!==`${n}`;"fxHide"===r[0]&&(s=!s),this.setValue(s,o)}var n})}trackExtraTriggers(){this.hasLayout=this.marshal.hasValue(this.nativeElement,"layout"),["layout","layout-align"].forEach(e=>{this.marshal.trackValue(this.nativeElement,e).pipe(Object(M.a)(this.destroySubject)).subscribe(this.triggerUpdate.bind(this))})}getDisplayStyle(){return this.hasLayout||this.hasFlexChild&&this.layoutConfig.addFlexToParent?"flex":this.styler.lookupStyle(this.nativeElement,"display",!0)}updateWithValue(e=!0){if(""===e)return;const t=Object(o.isPlatformServer)(this.platformId);this.addStyles(e?"true":"false",{display:this.display,isServer:t}),t&&this.serverModuleLoaded&&this.nativeElement.style.setProperty("display",""),this.marshal.triggerUpdate(this.parentElement,"layout-gap")}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](Me),r["\u0275\u0275directiveInject"](Ne),r["\u0275\u0275directiveInject"](Re),r["\u0275\u0275directiveInject"](ce),r["\u0275\u0275directiveInject"](r.PLATFORM_ID),r["\u0275\u0275directiveInject"](le))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,features:[r["\u0275\u0275InheritDefinitionFeature"],r["\u0275\u0275NgOnChangesFeature"]]}),e})();const Ve=new WeakMap,Be=["fxShow","fxShow.print","fxShow.xs","fxShow.sm","fxShow.md","fxShow.lg","fxShow.xl","fxShow.lt-sm","fxShow.lt-md","fxShow.lt-lg","fxShow.lt-xl","fxShow.gt-xs","fxShow.gt-sm","fxShow.gt-md","fxShow.gt-lg","fxHide","fxHide.print","fxHide.xs","fxHide.sm","fxHide.md","fxHide.lg","fxHide.xl","fxHide.lt-sm","fxHide.lt-md","fxHide.lt-lg","fxHide.lt-xl","fxHide.gt-xs","fxHide.gt-sm","fxHide.gt-md","fxHide.gt-lg"];let He=(()=>{class e extends $e{constructor(){super(...arguments),this.inputs=Be}}return e.\u0275fac=function(t){return Ue(t||e)},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","fxShow",""],["","fxShow.print",""],["","fxShow.xs",""],["","fxShow.sm",""],["","fxShow.md",""],["","fxShow.lg",""],["","fxShow.xl",""],["","fxShow.lt-sm",""],["","fxShow.lt-md",""],["","fxShow.lt-lg",""],["","fxShow.lt-xl",""],["","fxShow.gt-xs",""],["","fxShow.gt-sm",""],["","fxShow.gt-md",""],["","fxShow.gt-lg",""],["","fxHide",""],["","fxHide.print",""],["","fxHide.xs",""],["","fxHide.sm",""],["","fxHide.md",""],["","fxHide.lg",""],["","fxHide.xl",""],["","fxHide.lt-sm",""],["","fxHide.lt-md",""],["","fxHide.lt-lg",""],["","fxHide.lt-xl",""],["","fxHide.gt-xs",""],["","fxHide.gt-sm",""],["","fxHide.gt-md",""],["","fxHide.gt-lg",""]],inputs:{fxShow:"fxShow","fxShow.print":"fxShow.print","fxShow.xs":"fxShow.xs","fxShow.sm":"fxShow.sm","fxShow.md":"fxShow.md","fxShow.lg":"fxShow.lg","fxShow.xl":"fxShow.xl","fxShow.lt-sm":"fxShow.lt-sm","fxShow.lt-md":"fxShow.lt-md","fxShow.lt-lg":"fxShow.lt-lg","fxShow.lt-xl":"fxShow.lt-xl","fxShow.gt-xs":"fxShow.gt-xs","fxShow.gt-sm":"fxShow.gt-sm","fxShow.gt-md":"fxShow.gt-md","fxShow.gt-lg":"fxShow.gt-lg",fxHide:"fxHide","fxHide.print":"fxHide.print","fxHide.xs":"fxHide.xs","fxHide.sm":"fxHide.sm","fxHide.md":"fxHide.md","fxHide.lg":"fxHide.lg","fxHide.xl":"fxHide.xl","fxHide.lt-sm":"fxHide.lt-sm","fxHide.lt-md":"fxHide.lt-md","fxHide.lt-lg":"fxHide.lt-lg","fxHide.lt-xl":"fxHide.lt-xl","fxHide.gt-xs":"fxHide.gt-xs","fxHide.gt-sm":"fxHide.gt-sm","fxHide.gt-md":"fxHide.gt-md","fxHide.gt-lg":"fxHide.gt-lg"},features:[r["\u0275\u0275InheritDefinitionFeature"]]}),e})();const Ue=r["\u0275\u0275getInheritedFactory"](He);let ze=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[oe]]}),e})();var qe=n("GoAz"),We=n("VxHp"),Qe=n("i9xl"),Ge=n("6Oco"),Ke=n("mawV"),Ze=n("TaSY"),Ye=n("4e/d"),Je=n("jOdJ"),Xe=n("cJ9h"),et=n("2OXO"),tt=n("jIqt"),nt=n("SrNW"),rt=n("5uDM"),ot=n("0iRq"),it=n("ruxD"),st=n("3lSR");class at{constructor(e,t){this.id=e,this.url=t}}class ct extends at{constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class lt extends at{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class ut extends at{constructor(e,t,n){super(e,t),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class dt extends at{constructor(e,t,n){super(e,t),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class ht extends at{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ft extends at{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class pt extends at{constructor(e,t,n,r,o){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class gt extends at{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class mt extends at{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class bt{constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class yt{constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class vt{constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class _t{constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class wt{constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class xt{constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ct{constructor(e,t,n){this.routerEvent=e,this.position=t,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}let Et=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&r["\u0275\u0275element"](0,"router-outlet")},directives:function(){return[kr]},encapsulation:2}),e})();class St{constructor(e){this.params=e||{}}has(e){return this.params.hasOwnProperty(e)}get(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function kt(e){return new St(e)}function Ot(e){const t=Error("NavigationCancelingError: "+e);return t.ngNavigationCancelingError=!0,t}function Dt(e,t,n){const r=n.path.split("/");if(r.length>e.length)return null;if("full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const t=r[i],n=e[i];if(t.startsWith(":"))o[t.substring(1)]=n;else if(t!==n.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}class jt{constructor(e,t){this.routes=e,this.module=t}}function It(e,t=""){for(let n=0;n<e.length;n++){const r=e[n];At(r,Pt(t,r))}}function At(e,t){if(!e)throw new Error(`\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(e))throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);if(!e.component&&!e.children&&!e.loadChildren&&e.outlet&&"primary"!==e.outlet)throw new Error(`Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`);if(e.redirectTo&&e.children)throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);if(e.redirectTo&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);if(e.children&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);if(e.redirectTo&&e.component)throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);if(e.path&&e.matcher)throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);if(void 0===e.redirectTo&&!e.component&&!e.children&&!e.loadChildren)throw new Error(`Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===e.path&&void 0===e.matcher)throw new Error(`Invalid configuration of route '${t}': routes must have either a path or a matcher specified`);if("string"==typeof e.path&&"/"===e.path.charAt(0))throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);if(""===e.path&&void 0!==e.redirectTo&&void 0===e.pathMatch)throw new Error(`Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==e.pathMatch&&"full"!==e.pathMatch&&"prefix"!==e.pathMatch)throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);e.children&&It(e.children,t)}function Pt(e,t){return t?e||t.path?e&&!t.path?`${e}/`:!e&&t.path?t.path:`${e}/${t.path}`:"":e}function Tt(e){const t=e.children&&e.children.map(Tt),n=t?Object.assign(Object.assign({},e),{children:t}):Object.assign({},e);return!n.component&&(t||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=Et),n}function Nt(e,t){const n=Object.keys(e),r=Object.keys(t);if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!Rt(e[o],t[o]))return!1;return!0}function Rt(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length==t.length&&e.every(e=>t.indexOf(e)>-1):e===t}function Ft(e){return Array.prototype.concat.apply([],e)}function Mt(e){return e.length>0?e[e.length-1]:null}function Lt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function $t(e){return Object(r["\u0275isObservable"])(e)?e:Object(r["\u0275isPromise"])(e)?Object(qe.a)(Promise.resolve(e)):Object(J.a)(e)}function Vt(e,t,n){return n?function(e,t){return Nt(e,t)}(e.queryParams,t.queryParams)&&function e(t,n){if(!zt(t.segments,n.segments))return!1;if(t.numberOfChildren!==n.numberOfChildren)return!1;for(const r in n.children){if(!t.children[r])return!1;if(!e(t.children[r],n.children[r]))return!1}return!0}(e.root,t.root):function(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>Rt(e[n],t[n]))}(e.queryParams,t.queryParams)&&function e(t,n){return function t(n,r,o){if(n.segments.length>o.length)return!!zt(n.segments.slice(0,o.length),o)&&!r.hasChildren();if(n.segments.length===o.length){if(!zt(n.segments,o))return!1;for(const t in r.children){if(!n.children[t])return!1;if(!e(n.children[t],r.children[t]))return!1}return!0}{const e=o.slice(0,n.segments.length),i=o.slice(n.segments.length);return!!zt(n.segments,e)&&!!n.children.primary&&t(n.children.primary,r,i)}}(t,n,n.segments)}(e.root,t.root)}class Bt{constructor(e,t,n){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=kt(this.queryParams)),this._queryParamMap}toString(){return Gt.serialize(this)}}class Ht{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Lt(t,(e,t)=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Kt(this)}}class Ut{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=kt(this.parameters)),this._parameterMap}toString(){return tn(this)}}function zt(e,t){return e.length===t.length&&e.every((e,n)=>e.path===t[n].path)}function qt(e,t){let n=[];return Lt(e.children,(e,r)=>{"primary"===r&&(n=n.concat(t(e,r)))}),Lt(e.children,(e,r)=>{"primary"!==r&&(n=n.concat(t(e,r)))}),n}class Wt{}class Qt{parse(e){const t=new an(e);return new Bt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){var t;return`${`/${function e(t,n){if(!t.hasChildren())return Kt(t);if(n){const n=t.children.primary?e(t.children.primary,!1):"",r=[];return Lt(t.children,(t,n)=>{"primary"!==n&&r.push(`${n}:${e(t,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=qt(t,(n,r)=>"primary"===r?[e(t.children.primary,!1)]:[`${r}:${e(n,!1)}`]);return`${Kt(t)}/(${n.join("//")})`}}(e.root,!0)}`}${function(e){const t=Object.keys(e).map(t=>{const n=e[t];return Array.isArray(n)?n.map(e=>`${Yt(t)}=${Yt(e)}`).join("&"):`${Yt(t)}=${Yt(n)}`});return t.length?`?${t.join("&")}`:""}(e.queryParams)}${"string"==typeof e.fragment?`#${t=e.fragment,encodeURI(t)}`:""}`}}const Gt=new Qt;function Kt(e){return e.segments.map(e=>tn(e)).join("/")}function Zt(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Yt(e){return Zt(e).replace(/%3B/gi,";")}function Jt(e){return Zt(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Xt(e){return decodeURIComponent(e)}function en(e){return Xt(e.replace(/\+/g,"%20"))}function tn(e){return`${Jt(e.path)}${t=e.parameters,Object.keys(t).map(e=>`;${Jt(e)}=${Jt(t[e])}`).join("")}`;var t}const nn=/^[^\/()?;=#]+/;function rn(e){const t=e.match(nn);return t?t[0]:""}const on=/^[^=?&#]+/,sn=/^[^?&#]+/;class an{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ht([],{}):new Ht([],this.parseChildren())}parseQueryParams(){const e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n.primary=new Ht(e,t)),n}parseSegment(){const e=rn(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(e),new Ut(Xt(e),this.parseMatrixParams())}parseMatrixParams(){const e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){const t=rn(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=rn(this.remaining);e&&(n=e,this.capture(n))}e[Xt(t)]=Xt(n)}parseQueryParam(e){const t=function(e){const t=e.match(on);return t?t[0]:""}(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=function(e){const t=e.match(sn);return t?t[0]:""}(this.remaining);e&&(n=e,this.capture(n))}const r=en(t),o=en(n);if(e.hasOwnProperty(r)){let t=e[r];Array.isArray(t)||(t=[t],e[r]=t),t.push(o)}else e[r]=o}parseParens(e){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=rn(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let o=void 0;n.indexOf(":")>-1?(o=n.substr(0,n.indexOf(":")),this.capture(o),this.capture(":")):e&&(o="primary");const i=this.parseChildren();t[o]=1===Object.keys(i).length?i.primary:new Ht([],i),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}capture(e){if(!this.consumeOptional(e))throw new Error(`Expected "${e}".`)}}class cn{constructor(e){this._root=e}get root(){return this._root.value}parent(e){const t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){const t=ln(e,this._root);return t?t.children.map(e=>e.value):[]}firstChild(e){const t=ln(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){const t=un(e,this._root);return t.length<2?[]:t[t.length-2].children.map(e=>e.value).filter(t=>t!==e)}pathFromRoot(e){return un(e,this._root).map(e=>e.value)}}function ln(e,t){if(e===t.value)return t;for(const n of t.children){const t=ln(e,n);if(t)return t}return null}function un(e,t){if(e===t.value)return[t];for(const n of t.children){const r=un(e,n);if(r.length)return r.unshift(t),r}return[]}class dn{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}}function hn(e){const t={};return e&&e.children.forEach(e=>t[e.value.outlet]=e),t}class fn extends cn{constructor(e,t){super(e),this.snapshot=t,vn(this,e)}toString(){return this.snapshot.toString()}}function pn(e,t){const n=function(e,t){const n=new bn([],{},{},"",{},"primary",t,null,e.root,-1,{});return new yn("",new dn(n,[]))}(e,t),r=new Z.a([new Ut("",{})]),o=new Z.a({}),i=new Z.a({}),s=new Z.a({}),a=new Z.a(""),c=new gn(r,o,s,a,i,"primary",t,n.root);return c.snapshot=n.root,new fn(new dn(c,[]),n)}class gn{constructor(e,t,n,r,o,i,s,a){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Object(L.a)(e=>kt(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Object(L.a)(e=>kt(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function mn(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const e=n[r],t=n[r-1];if(e.routeConfig&&""===e.routeConfig.path)r--;else{if(t.component)break;r--}}return function(e){return e.reduce((e,t)=>({params:Object.assign(Object.assign({},e.params),t.params),data:Object.assign(Object.assign({},e.data),t.data),resolve:Object.assign(Object.assign({},e.resolve),t._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class bn{constructor(e,t,n,r,o,i,s,a,c,l,u){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this.routeConfig=a,this._urlSegment=c,this._lastPathIndex=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=kt(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=kt(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class yn extends cn{constructor(e,t){super(t),this.url=e,vn(this,t)}toString(){return _n(this._root)}}function vn(e,t){t.value._routerState=e,t.children.forEach(t=>vn(e,t))}function _n(e){const t=e.children.length>0?` { ${e.children.map(_n).join(", ")} } `:"";return`${e.value}${t}`}function wn(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Nt(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),Nt(t.params,n.params)||e.params.next(n.params),function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Nt(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),Nt(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function xn(e,t){var n,r;return Nt(e.params,t.params)&&zt(n=e.url,r=t.url)&&n.every((e,t)=>Nt(e.parameters,r[t].parameters))&&!(!e.parent!=!t.parent)&&(!e.parent||xn(e.parent,t.parent))}function Cn(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function En(e,t,n,r,o){let i={};return r&&Lt(r,(e,t)=>{i[t]=Array.isArray(e)?e.map(e=>`${e}`):`${e}`}),new Bt(n.root===e?t:function e(t,n,r){const o={};return Lt(t.children,(t,i)=>{o[i]=t===n?r:e(t,n,r)}),new Ht(t.segments,o)}(n.root,e,t),i,o)}class Sn{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&Cn(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(e=>"object"==typeof e&&null!=e&&e.outlets);if(r&&r!==Mt(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class kn{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}}function On(e){return"object"==typeof e&&null!=e&&e.outlets?e.outlets.primary:`${e}`}function Dn(e,t,n){if(e||(e=new Ht([],{})),0===e.segments.length&&e.hasChildren())return jn(e,t,n);const r=function(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const t=e.segments[o],s=On(n[r]),a=r<n.length-1?n[r+1]:null;if(o>0&&void 0===s)break;if(s&&a&&"object"==typeof a&&void 0===a.outlets){if(!Tn(s,a,t))return i;r+=2}else{if(!Tn(s,{},t))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const t=new Ht(e.segments.slice(0,r.pathIndex),{});return t.children.primary=new Ht(e.segments.slice(r.pathIndex),e.children),jn(t,0,o)}return r.match&&0===o.length?new Ht(e.segments,{}):r.match&&!e.hasChildren()?In(e,t,n):r.match?jn(e,0,o):In(e,t,n)}function jn(e,t,n){if(0===n.length)return new Ht(e.segments,{});{const r=function(e){return"object"!=typeof e[0]||void 0===e[0].outlets?{primary:e}:e[0].outlets}(n),o={};return Lt(r,(n,r)=>{null!==n&&(o[r]=Dn(e.children[r],t,n))}),Lt(e.children,(e,t)=>{void 0===r[t]&&(o[t]=e)}),new Ht(e.segments,o)}}function In(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){if("object"==typeof n[o]&&void 0!==n[o].outlets){const e=An(n[o].outlets);return new Ht(r,e)}if(0===o&&Cn(n[0])){r.push(new Ut(e.segments[t].path,n[0])),o++;continue}const i=On(n[o]),s=o<n.length-1?n[o+1]:null;i&&s&&Cn(s)?(r.push(new Ut(i,Pn(s))),o+=2):(r.push(new Ut(i,{})),o++)}return new Ht(r,{})}function An(e){const t={};return Lt(e,(e,n)=>{null!==e&&(t[n]=In(new Ht([],{}),0,e))}),t}function Pn(e){const t={};return Lt(e,(e,n)=>t[n]=`${e}`),t}function Tn(e,t,n){return e==n.path&&Nt(t,n.parameters)}class Nn{constructor(e,t,n,r){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r}activate(e){const t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),wn(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){const r=hn(t);e.children.forEach(e=>{const t=e.value.outlet;this.deactivateRoutes(e,r[t],n),delete r[t]}),Lt(r,(e,t)=>{this.deactivateRouteAndItsChildren(e,n)})}deactivateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(r===o)if(r.component){const o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else o&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){const n=t.getContext(e.value.outlet);if(n&&n.outlet){const t=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:t,route:e,contexts:r})}}deactivateRouteAndOutlet(e,t){const n=t.getContext(e.value.outlet);if(n){const r=hn(e),o=e.value.component?n.children:t;Lt(r,(e,t)=>this.deactivateRouteAndItsChildren(e,o)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(e,t,n){const r=hn(t);e.children.forEach(e=>{this.activateRoutes(e,r[e.value.outlet],n),this.forwardEvent(new xt(e.value.snapshot))}),e.children.length&&this.forwardEvent(new _t(e.value.snapshot))}activateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(wn(r),r===o)if(r.component){const o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){const t=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const e=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),t.children.onOutletReAttached(e.contexts),t.attachRef=e.componentRef,t.route=e.route.value,t.outlet&&t.outlet.attach(e.componentRef,e.route.value),Rn(e.route)}else{const n=function(e){for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig;if(e&&e.component)return null}return null}(r.snapshot),o=n?n.module.componentFactoryResolver:null;t.attachRef=null,t.route=r,t.resolver=o,t.outlet&&t.outlet.activateWith(r,o),this.activateChildRoutes(e,null,t.children)}}else this.activateChildRoutes(e,null,n)}}function Rn(e){wn(e.value),e.children.forEach(Rn)}function Fn(e){return"function"==typeof e}function Mn(e){return e instanceof Bt}class Ln{constructor(e){this.segmentGroup=e||null}}class $n{constructor(e){this.urlTree=e}}function Vn(e){return new z.a(t=>t.error(new Ln(e)))}function Bn(e){return new z.a(t=>t.error(new $n(e)))}function Hn(e){return new z.a(t=>t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))}class Un{constructor(e,t,n,o,i){this.configLoader=t,this.urlSerializer=n,this.urlTree=o,this.config=i,this.allowRedirects=!0,this.ngModule=e.get(r.NgModuleRef)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(Object(L.a)(e=>this.createUrlTree(e,this.urlTree.queryParams,this.urlTree.fragment))).pipe(Object(Ye.a)(e=>{if(e instanceof $n)return this.allowRedirects=!1,this.match(e.urlTree);if(e instanceof Ln)throw this.noMatchError(e);throw e}))}match(e){return this.expandSegmentGroup(this.ngModule,this.config,e.root,"primary").pipe(Object(L.a)(t=>this.createUrlTree(t,e.queryParams,e.fragment))).pipe(Object(Ye.a)(e=>{if(e instanceof Ln)throw this.noMatchError(e);throw e}))}noMatchError(e){return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`)}createUrlTree(e,t,n){const r=e.segments.length>0?new Ht([],{primary:e}):e;return new Bt(r,t,n)}expandSegmentGroup(e,t,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(e,t,n).pipe(Object(L.a)(e=>new Ht([],e))):this.expandSegment(e,n,t,n.segments,r,!0)}expandChildren(e,t,n){return function(e,t){if(0===Object.keys(e).length)return Object(J.a)({});const n=[],r=[],o={};return Lt(e,(e,i)=>{const s=t(i,e).pipe(Object(L.a)(e=>o[i]=e));"primary"===i?n.push(s):r.push(s)}),J.a.apply(null,n.concat(r)).pipe(Object(Ke.a)(),Object(Ze.a)(),Object(L.a)(()=>o))}(n.children,(n,r)=>this.expandSegmentGroup(e,t,r,n))}expandSegment(e,t,n,r,o,i){return Object(J.a)(...n).pipe(Object(L.a)(s=>this.expandSegmentAgainstRoute(e,t,n,s,r,o,i).pipe(Object(Ye.a)(e=>{if(e instanceof Ln)return Object(J.a)(null);throw e}))),Object(Ke.a)(),Object(Je.a)(e=>!!e),Object(Ye.a)((e,n)=>{if(e instanceof We.a||"EmptyError"===e.name){if(this.noLeftoversInUrl(t,r,o))return Object(J.a)(new Ht([],{}));throw new Ln(t)}throw e}))}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}expandSegmentAgainstRoute(e,t,n,r,o,i,s){return Qn(r)!==i?Vn(t):void 0===r.redirectTo?this.matchSegmentAgainstRoute(e,t,r,o):s&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i):Vn(t)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,n,r,i):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,n,r){const o=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?Bn(o):this.lineralizeSegments(n,o).pipe(Object(Xe.a)(n=>{const o=new Ht(n,{});return this.expandSegment(e,o,t,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){const{matched:s,consumedSegments:a,lastChild:c,positionalParamSegments:l}=zn(t,r,o);if(!s)return Vn(t);const u=this.applyRedirectCommands(a,r.redirectTo,l);return r.redirectTo.startsWith("/")?Bn(u):this.lineralizeSegments(r,u).pipe(Object(Xe.a)(r=>this.expandSegment(e,t,n,r.concat(o.slice(c)),i,!1)))}matchSegmentAgainstRoute(e,t,n,r){if("**"===n.path)return n.loadChildren?this.configLoader.load(e.injector,n).pipe(Object(L.a)(e=>(n._loadedConfig=e,new Ht(r,{})))):Object(J.a)(new Ht(r,{}));const{matched:o,consumedSegments:i,lastChild:s}=zn(t,n,r);if(!o)return Vn(t);const a=r.slice(s);return this.getChildConfig(e,n,r).pipe(Object(Xe.a)(e=>{const n=e.module,r=e.routes,{segmentGroup:o,slicedSegments:s}=function(e,t,n,r){return n.length>0&&function(e,t,n){return n.some(n=>Wn(e,t,n)&&"primary"!==Qn(n))}(e,n,r)?{segmentGroup:qn(new Ht(t,function(e,t){const n={};n.primary=t;for(const r of e)""===r.path&&"primary"!==Qn(r)&&(n[Qn(r)]=new Ht([],{}));return n}(r,new Ht(n,e.children)))),slicedSegments:[]}:0===n.length&&function(e,t,n){return n.some(n=>Wn(e,t,n))}(e,n,r)?{segmentGroup:qn(new Ht(e.segments,function(e,t,n,r){const o={};for(const i of n)Wn(e,t,i)&&!r[Qn(i)]&&(o[Qn(i)]=new Ht([],{}));return Object.assign(Object.assign({},r),o)}(e,n,r,e.children))),slicedSegments:n}:{segmentGroup:e,slicedSegments:n}}(t,i,a,r);return 0===s.length&&o.hasChildren()?this.expandChildren(n,r,o).pipe(Object(L.a)(e=>new Ht(i,e))):0===r.length&&0===s.length?Object(J.a)(new Ht(i,{})):this.expandSegment(n,o,r,s,"primary",!0).pipe(Object(L.a)(e=>new Ht(i.concat(e.segments),e.children)))}))}getChildConfig(e,t,n){return t.children?Object(J.a)(new jt(t.children,e)):t.loadChildren?void 0!==t._loadedConfig?Object(J.a)(t._loadedConfig):function(e,t,n){const r=t.canLoad;return r&&0!==r.length?Object(qe.a)(r).pipe(Object(L.a)(r=>{const o=e.get(r);let i;if(function(e){return e&&Fn(e.canLoad)}(o))i=o.canLoad(t,n);else{if(!Fn(o))throw new Error("Invalid CanLoad guard");i=o(t,n)}return $t(i)})).pipe(Object(Ke.a)(),Object(et.a)(e=>!0===e)):Object(J.a)(!0)}(e.injector,t,n).pipe(Object(Xe.a)(n=>n?this.configLoader.load(e.injector,t).pipe(Object(L.a)(e=>(t._loadedConfig=e,e))):function(e){return new z.a(t=>t.error(Ot(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)))}(t))):Object(J.a)(new jt([],e))}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return Object(J.a)(n);if(r.numberOfChildren>1||!r.children.primary)return Hn(e.redirectTo);r=r.children.primary}}applyRedirectCommands(e,t,n){return this.applyRedirectCreatreUrlTree(t,this.urlSerializer.parse(t),e,n)}applyRedirectCreatreUrlTree(e,t,n,r){const o=this.createSegmentGroup(e,t.root,n,r);return new Bt(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){const n={};return Lt(e,(e,r)=>{if("string"==typeof e&&e.startsWith(":")){const o=e.substring(1);n[r]=t[o]}else n[r]=e}),n}createSegmentGroup(e,t,n,r){const o=this.createSegments(e,t.segments,n,r);let i={};return Lt(t.children,(t,o)=>{i[o]=this.createSegmentGroup(e,t,n,r)}),new Ht(o,i)}createSegments(e,t,n,r){return t.map(t=>t.path.startsWith(":")?this.findPosParam(e,t,r):this.findOrReturn(t,n))}findPosParam(e,t,n){const r=n[t.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);return r}findOrReturn(e,t){let n=0;for(const r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}}function zn(e,t,n){if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const r=(t.matcher||Dt)(n,e,t);return r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function qn(e){if(1===e.numberOfChildren&&e.children.primary){const t=e.children.primary;return new Ht(e.segments.concat(t.segments),t.children)}return e}function Wn(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function Qn(e){return e.outlet||"primary"}class Gn{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}}class Kn{constructor(e,t){this.component=e,this.route=t}}function Zn(e,t,n){const r=e._root;return function e(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=hn(n);return t.children.forEach(t=>{!function(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=t.value,a=n?n.value:null,c=r?r.getContext(t.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){const l=function(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!zt(e.url,t.url);case"pathParamsOrQueryParamsChange":return!zt(e.url,t.url)||!Nt(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!xn(e,t)||!Nt(e.queryParams,t.queryParams);case"paramsChange":default:return!xn(e,t)}}(a,s,s.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Gn(o)):(s.data=a.data,s._resolvedData=a._resolvedData),e(t,n,s.component?c?c.children:null:r,o,i),l&&i.canDeactivateChecks.push(new Kn(c&&c.outlet&&c.outlet.component||null,a))}else a&&Jn(n,c,i),i.canActivateChecks.push(new Gn(o)),e(t,null,s.component?c?c.children:null:r,o,i)}(t,s[t.value.outlet],r,o.concat([t.value]),i),delete s[t.value.outlet]}),Lt(s,(e,t)=>Jn(e,r.getContext(t),i)),i}(r,t?t._root:null,n,[r.value])}function Yn(e,t,n){const r=function(e){if(!e)return null;for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig}return null}(t);return(r?r.module.injector:n).get(e)}function Jn(e,t,n){const r=hn(e),o=e.value;Lt(r,(e,r)=>{Jn(e,o.component?t?t.children.getContext(r):null:t,n)}),n.canDeactivateChecks.push(new Kn(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}const Xn=Symbol("INITIAL_VALUE");function er(){return Object(X.a)(e=>Object(F.b)(...e.map(e=>e.pipe(Object(ee.a)(1),Object(tt.a)(Xn)))).pipe(Object(nt.a)((e,t)=>{let n=!1;return t.reduce((e,r,o)=>{if(e!==Xn)return e;if(r===Xn&&(n=!0),!n){if(!1===r)return r;if(o===t.length-1||Mn(r))return r}return e},e)},Xn),Object(B.a)(e=>e!==Xn),Object(L.a)(e=>Mn(e)?e:!0===e),Object(ee.a)(1)))}function tr(e,t){return null!==e&&t&&t(new wt(e)),Object(J.a)(!0)}function nr(e,t){return null!==e&&t&&t(new vt(e)),Object(J.a)(!0)}function rr(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;if(!r||0===r.length)return Object(J.a)(!0);const o=r.map(r=>Object(Qe.a)(()=>{const o=Yn(r,t,n);let i;if(function(e){return e&&Fn(e.canActivate)}(o))i=$t(o.canActivate(t,e));else{if(!Fn(o))throw new Error("Invalid CanActivate guard");i=$t(o(t,e))}return i.pipe(Object(Je.a)())}));return Object(J.a)(o).pipe(er())}function or(e,t,n){const r=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(e=>function(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(e)).filter(e=>null!==e).map(t=>Object(Qe.a)(()=>{const o=t.guards.map(o=>{const i=Yn(o,t.node,n);let s;if(function(e){return e&&Fn(e.canActivateChild)}(i))s=$t(i.canActivateChild(r,e));else{if(!Fn(i))throw new Error("Invalid CanActivateChild guard");s=$t(i(r,e))}return s.pipe(Object(Je.a)())});return Object(J.a)(o).pipe(er())}));return Object(J.a)(o).pipe(er())}class ir{}class sr{constructor(e,t,n,r,o,i){this.rootComponentType=e,this.config=t,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=o,this.relativeLinkResolution=i}recognize(){try{const e=lr(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,t=this.processSegmentGroup(this.config,e,"primary"),n=new bn([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),r=new dn(n,t),o=new yn(this.url,r);return this.inheritParamsAndData(o._root),Object(J.a)(o)}catch(e){return new z.a(t=>t.error(e))}}inheritParamsAndData(e){const t=e.value,n=mn(t,this.paramsInheritanceStrategy);t.params=Object.freeze(n.params),t.data=Object.freeze(n.data),e.children.forEach(e=>this.inheritParamsAndData(e))}processSegmentGroup(e,t,n){return 0===t.segments.length&&t.hasChildren()?this.processChildren(e,t):this.processSegment(e,t,t.segments,n)}processChildren(e,t){const n=qt(t,(t,n)=>this.processSegmentGroup(e,t,n));return function(e){const t={};e.forEach(e=>{const n=t[e.value.outlet];if(n){const t=n.url.map(e=>e.toString()).join("/"),r=e.value.url.map(e=>e.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${r}'.`)}t[e.value.outlet]=e.value})}(n),n.sort((e,t)=>"primary"===e.value.outlet?-1:"primary"===t.value.outlet?1:e.value.outlet.localeCompare(t.value.outlet)),n}processSegment(e,t,n,r){for(const i of e)try{return this.processSegmentAgainstRoute(i,t,n,r)}catch(o){if(!(o instanceof ir))throw o}if(this.noLeftoversInUrl(t,n,r))return[];throw new ir}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}processSegmentAgainstRoute(e,t,n,r){if(e.redirectTo)throw new ir;if((e.outlet||"primary")!==r)throw new ir;let o,i=[],s=[];if("**"===e.path){const i=n.length>0?Mt(n).parameters:{};o=new bn(n,i,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,hr(e),r,e.component,e,ar(t),cr(t)+n.length,fr(e))}else{const a=function(e,t,n){if(""===t.path){if("full"===t.pathMatch&&(e.hasChildren()||n.length>0))throw new ir;return{consumedSegments:[],lastChild:0,parameters:{}}}const r=(t.matcher||Dt)(n,e,t);if(!r)throw new ir;const o={};Lt(r.posParams,(e,t)=>{o[t]=e.path});const i=r.consumed.length>0?Object.assign(Object.assign({},o),r.consumed[r.consumed.length-1].parameters):o;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:i}}(t,e,n);i=a.consumedSegments,s=n.slice(a.lastChild),o=new bn(i,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,hr(e),r,e.component,e,ar(t),cr(t)+i.length,fr(e))}const a=function(e){return e.children?e.children:e.loadChildren?e._loadedConfig.routes:[]}(e),{segmentGroup:c,slicedSegments:l}=lr(t,i,s,a,this.relativeLinkResolution);if(0===l.length&&c.hasChildren()){const e=this.processChildren(a,c);return[new dn(o,e)]}if(0===a.length&&0===l.length)return[new dn(o,[])];const u=this.processSegment(a,c,l,"primary");return[new dn(o,u)]}}function ar(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function cr(e){let t=e,n=t._segmentIndexShift?t._segmentIndexShift:0;for(;t._sourceSegment;)t=t._sourceSegment,n+=t._segmentIndexShift?t._segmentIndexShift:0;return n-1}function lr(e,t,n,r,o){if(n.length>0&&function(e,t,n){return n.some(n=>ur(e,t,n)&&"primary"!==dr(n))}(e,n,r)){const o=new Ht(t,function(e,t,n,r){const o={};o.primary=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&"primary"!==dr(i)){const n=new Ht([],{});n._sourceSegment=e,n._segmentIndexShift=t.length,o[dr(i)]=n}return o}(e,t,r,new Ht(n,e.children)));return o._sourceSegment=e,o._segmentIndexShift=t.length,{segmentGroup:o,slicedSegments:[]}}if(0===n.length&&function(e,t,n){return n.some(n=>ur(e,t,n))}(e,n,r)){const i=new Ht(e.segments,function(e,t,n,r,o,i){const s={};for(const a of r)if(ur(e,n,a)&&!o[dr(a)]){const n=new Ht([],{});n._sourceSegment=e,n._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[dr(a)]=n}return Object.assign(Object.assign({},o),s)}(e,t,n,r,e.children,o));return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}const i=new Ht(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function ur(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function dr(e){return e.outlet||"primary"}function hr(e){return e.data||{}}function fr(e){return e.resolve||{}}function pr(e,t,n,r){const o=Yn(e,t,r);return $t(o.resolve?o.resolve(t,n):o(t,n))}function gr(e){return function(t){return t.pipe(Object(X.a)(t=>{const n=e(t);return n?Object(qe.a)(n).pipe(Object(L.a)(()=>t)):Object(qe.a)([t])}))}}class mr{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}}const br=new r.InjectionToken("ROUTES");class yr{constructor(e,t,n,r){this.loader=e,this.compiler=t,this.onLoadStartListener=n,this.onLoadEndListener=r}load(e,t){return this.onLoadStartListener&&this.onLoadStartListener(t),this.loadModuleFactory(t.loadChildren).pipe(Object(L.a)(n=>{this.onLoadEndListener&&this.onLoadEndListener(t);const r=n.create(e);return new jt(Ft(r.injector.get(br)).map(Tt),r)}))}loadModuleFactory(e){return"string"==typeof e?Object(qe.a)(this.loader.load(e)):$t(e()).pipe(Object(Xe.a)(e=>e instanceof r.NgModuleFactory?Object(J.a)(e):Object(qe.a)(this.compiler.compileModuleAsync(e))))}}class vr{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}}function _r(e){throw e}function wr(e,t,n){return t.parse("/")}function xr(e,t){return Object(J.a)(null)}let Cr=(()=>{class e{constructor(e,t,n,o,i,s,a,c){this.rootComponentType=e,this.urlSerializer=t,this.rootContexts=n,this.location=o,this.config=c,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new R.b,this.errorHandler=_r,this.malformedUriErrorHandler=wr,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:xr,afterPreactivation:xr},this.urlHandlingStrategy=new vr,this.routeReuseStrategy=new mr,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=i.get(r.NgModuleRef),this.console=i.get(r["\u0275Console"]);const l=i.get(r.NgZone);this.isNgZoneEnabled=l instanceof r.NgZone,this.resetConfig(c),this.currentUrlTree=new Bt(new Ht([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new yr(s,a,e=>this.triggerEvent(new bt(e)),e=>this.triggerEvent(new yt(e))),this.routerState=pn(this.currentUrlTree,this.rootComponentType),this.transitions=new Z.a({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(e){const t=this.events;return e.pipe(Object(B.a)(e=>0!==e.id),Object(L.a)(e=>Object.assign(Object.assign({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl)})),Object(X.a)(e=>{let n=!1,r=!1;return Object(J.a)(e).pipe(Object(te.a)(e=>{this.currentNavigation={id:e.id,initialUrl:e.currentRawUrl,extractedUrl:e.extractedUrl,trigger:e.source,extras:e.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Object(X.a)(e=>{const n=!this.navigated||e.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl))return Object(J.a)(e).pipe(Object(X.a)(e=>{const n=this.transitions.getValue();return t.next(new ct(e.id,this.serializeUrl(e.extractedUrl),e.source,e.restoredState)),n!==this.transitions.getValue()?Ge.a:[e]}),Object(X.a)(e=>Promise.resolve(e)),(r=this.ngModule.injector,o=this.configLoader,i=this.urlSerializer,s=this.config,function(e){return e.pipe(Object(X.a)(e=>function(e,t,n,r,o){return new Un(e,t,n,r,o).apply()}(r,o,i,e.extractedUrl,s).pipe(Object(L.a)(t=>Object.assign(Object.assign({},e),{urlAfterRedirects:t})))))}),Object(te.a)(e=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:e.urlAfterRedirects})}),function(e,t,n,r,o){return function(i){return i.pipe(Object(Xe.a)(i=>function(e,t,n,r,o="emptyOnly",i="legacy"){return new sr(e,t,n,r,o,i).recognize()}(e,t,i.urlAfterRedirects,n(i.urlAfterRedirects),r,o).pipe(Object(L.a)(e=>Object.assign(Object.assign({},i),{targetSnapshot:e})))))}}(this.rootComponentType,this.config,e=>this.serializeUrl(e),this.paramsInheritanceStrategy,this.relativeLinkResolution),Object(te.a)(e=>{"eager"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(e.urlAfterRedirects,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),Object(te.a)(e=>{const n=new ht(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.next(n)}));var r,o,i,s;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:o,restoredState:i,extras:s}=e,a=new ct(n,this.serializeUrl(r),o,i);t.next(a);const c=pn(r,this.rootComponentType).snapshot;return Object(J.a)(Object.assign(Object.assign({},e),{targetSnapshot:c,urlAfterRedirects:r,extras:Object.assign(Object.assign({},s),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=e.rawUrl,this.browserUrlTree=e.urlAfterRedirects,e.resolve(null),Ge.a}),gr(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.beforePreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),Object(te.a)(e=>{const t=new ft(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),Object(L.a)(e=>Object.assign(Object.assign({},e),{guards:Zn(e.targetSnapshot,e.currentSnapshot,this.rootContexts)})),function(e,t){return function(n){return n.pipe(Object(Xe.a)(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?Object(J.a)(Object.assign(Object.assign({},n),{guardsResult:!0})):function(e,t,n,r){return Object(qe.a)(e).pipe(Object(Xe.a)(e=>function(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!i||0===i.length)return Object(J.a)(!0);const s=i.map(i=>{const s=Yn(i,t,o);let a;if(function(e){return e&&Fn(e.canDeactivate)}(s))a=$t(s.canDeactivate(e,t,n,r));else{if(!Fn(s))throw new Error("Invalid CanDeactivate guard");a=$t(s(e,t,n,r))}return a.pipe(Object(Je.a)())});return Object(J.a)(s).pipe(er())}(e.component,e.route,n,t,r)),Object(Je.a)(e=>!0!==e,!0))}(s,r,o,e).pipe(Object(Xe.a)(n=>n&&"boolean"==typeof n?function(e,t,n,r){return Object(qe.a)(t).pipe(Object(rt.a)(t=>Object(qe.a)([nr(t.route.parent,r),tr(t.route,r),or(e,t.path,n),rr(e,t.route,n)]).pipe(Object(Ke.a)(),Object(Je.a)(e=>!0!==e,!0))),Object(Je.a)(e=>!0!==e,!0))}(r,i,e,t):Object(J.a)(n)),Object(L.a)(e=>Object.assign(Object.assign({},n),{guardsResult:e})))}))}}(this.ngModule.injector,e=>this.triggerEvent(e)),Object(te.a)(e=>{if(Mn(e.guardsResult)){const t=Ot(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);throw t.url=e.guardsResult,t}}),Object(te.a)(e=>{const t=new pt(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot,!!e.guardsResult);this.triggerEvent(t)}),Object(B.a)(e=>{if(!e.guardsResult){this.resetUrlToCurrentUrlTree();const n=new ut(e.id,this.serializeUrl(e.extractedUrl),"");return t.next(n),e.resolve(!1),!1}return!0}),gr(e=>{if(e.guards.canActivateChecks.length)return Object(J.a)(e).pipe(Object(te.a)(e=>{const t=new gt(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),(t=this.paramsInheritanceStrategy,n=this.ngModule.injector,function(e){return e.pipe(Object(Xe.a)(e=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=e;return o.length?Object(qe.a)(o).pipe(Object(rt.a)(e=>function(e,t,n,r){return function(e,t,n,r){const o=Object.keys(e);if(0===o.length)return Object(J.a)({});if(1===o.length){const i=o[0];return pr(e[i],t,n,r).pipe(Object(L.a)(e=>({[i]:e})))}const i={};return Object(qe.a)(o).pipe(Object(Xe.a)(o=>pr(e[o],t,n,r).pipe(Object(L.a)(e=>(i[o]=e,e))))).pipe(Object(Ze.a)(),Object(L.a)(()=>i))}(e._resolve,e,t,r).pipe(Object(L.a)(t=>(e._resolvedData=t,e.data=Object.assign(Object.assign({},e.data),mn(e,n).resolve),null)))}(e.route,r,t,n)),Object(ot.a)((e,t)=>e),Object(L.a)(t=>e)):Object(J.a)(e)}))}),Object(te.a)(e=>{const t=new mt(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}));var t,n}),gr(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.afterPreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),Object(L.a)(e=>{const t=function(e,t,n){const r=function e(t,n,r){if(r&&t.shouldReuseRoute(n.value,r.value.snapshot)){const o=r.value;o._futureSnapshot=n.value;const i=function(t,n,r){return n.children.map(n=>{for(const o of r.children)if(t.shouldReuseRoute(o.value.snapshot,n.value))return e(t,n,o);return e(t,n)})}(t,n,r);return new dn(o,i)}{const r=t.retrieve(n.value);if(r){const e=r.route;return function e(t,n){if(t.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=t.value;for(let r=0;r<t.children.length;++r)e(t.children[r],n.children[r])}(n,e),e}{const r=new gn(new Z.a((o=n.value).url),new Z.a(o.params),new Z.a(o.queryParams),new Z.a(o.fragment),new Z.a(o.data),o.outlet,o.component,o),i=n.children.map(n=>e(t,n));return new dn(r,i)}}var o}(e,t._root,n?n._root:void 0);return new fn(r,t)}(this.routeReuseStrategy,e.targetSnapshot,e.currentRouterState);return Object.assign(Object.assign({},e),{targetRouterState:t})}),Object(te.a)(e=>{this.currentUrlTree=e.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl),this.routerState=e.targetRouterState,"deferred"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),(o=this.rootContexts,i=this.routeReuseStrategy,s=e=>this.triggerEvent(e),Object(L.a)(e=>(new Nn(i,e.targetRouterState,e.currentRouterState,s).activate(o),e))),Object(te.a)({next(){n=!0},complete(){n=!0}}),Object(it.a)(()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new ut(e.id,this.serializeUrl(e.extractedUrl),`Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`);t.next(n),e.resolve(!1)}this.currentNavigation=null}),Object(Ye.a)(n=>{if(r=!0,(o=n)&&o.ngNavigationCancelingError){const r=Mn(n.url);r||(this.navigated=!0,this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl));const o=new ut(e.id,this.serializeUrl(e.extractedUrl),n.message);t.next(o),r?setTimeout(()=>{const t=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(t,"imperative",null,{skipLocationChange:e.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:e.resolve,reject:e.reject,promise:e.promise})},0):e.resolve(!1)}else{this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl);const r=new dt(e.id,this.serializeUrl(e.extractedUrl),n);t.next(r);try{e.resolve(this.errorHandler(n))}catch(i){e.reject(i)}}var o;return Ge.a}));var o,i,s}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}getTransition(){const e=this.transitions.value;return e.urlAfterRedirects=this.browserUrlTree,e}setTransition(e){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),e))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{let t=this.parseUrl(e.url);const n="popstate"===e.type?"popstate":"hashchange",r=e.state&&e.state.navigationId?e.state:null;setTimeout(()=>{this.scheduleNavigation(t,n,r,{replaceUrl:!0})},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){It(e),this.config=e.map(Tt),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}createUrlTree(e,t={}){const{relativeTo:n,queryParams:o,fragment:i,preserveQueryParams:s,queryParamsHandling:a,preserveFragment:c}=t;Object(r.isDevMode)()&&s&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const l=n||this.routerState.root,u=c?this.currentUrlTree.fragment:i;let d=null;if(a)switch(a){case"merge":d=Object.assign(Object.assign({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}else d=s?this.currentUrlTree.queryParams:o||null;return null!==d&&(d=this.removeEmptyProps(d)),function(e,t,n,r,o){if(0===n.length)return En(t.root,t.root,t,r,o);const i=function(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new Sn(!0,0,e);let t=0,n=!1;const r=e.reduce((e,r,o)=>{if("object"==typeof r&&null!=r){if(r.outlets){const t={};return Lt(r.outlets,(e,n)=>{t[n]="string"==typeof e?e.split("/"):e}),[...e,{outlets:t}]}if(r.segmentPath)return[...e,r.segmentPath]}return"string"!=typeof r?[...e,r]:0===o?(r.split("/").forEach((r,o)=>{0==o&&"."===r||(0==o&&""===r?n=!0:".."===r?t++:""!=r&&e.push(r))}),e):[...e,r]},[]);return new Sn(n,t,r)}(n);if(i.toRoot())return En(t.root,new Ht([],{}),t,r,o);const s=function(e,t,n){if(e.isAbsolute)return new kn(t.root,!0,0);if(-1===n.snapshot._lastPathIndex)return new kn(n.snapshot._urlSegment,!0,0);const r=Cn(e.commands[0])?0:1;return function(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new Error("Invalid number of '../'");o=r.segments.length}return new kn(r,!1,o-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,e.numberOfDoubleDots)}(i,t,e),a=s.processChildren?jn(s.segmentGroup,s.index,i.commands):Dn(s.segmentGroup,s.index,i.commands);return En(s.segmentGroup,a,t,r,o)}(l,this.currentUrlTree,e,d,u)}navigateByUrl(e,t={skipLocationChange:!1}){Object(r.isDevMode)()&&this.isNgZoneEnabled&&!r.NgZone.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=Mn(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(o,"imperative",null,t)}navigate(e,t={skipLocationChange:!1}){return function(e){for(let t=0;t<e.length;t++){const n=e[t];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${t}`)}}(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let t;try{t=this.urlSerializer.parse(e)}catch(n){t=this.malformedUriErrorHandler(n,this.urlSerializer,e)}return t}isActive(e,t){if(Mn(e))return Vt(this.currentUrlTree,e,t);const n=this.parseUrl(e);return Vt(this.currentUrlTree,n,t)}removeEmptyProps(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return null!=r&&(t[n]=r),t},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.events.next(new lt(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,e.resolve(!0)},e=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(e,t,n,r,o){const i=this.getTransition();if(i&&"imperative"!==t&&"imperative"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"hashchange"==t&&"popstate"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"popstate"==t&&"hashchange"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);let s,a,c;o?(s=o.resolve,a=o.reject,c=o.promise):c=new Promise((e,t)=>{s=e,a=t});const l=++this.navigationId;return this.setTransition({id:l,source:t,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:r,resolve:s,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(e=>Promise.reject(e))}setBrowserUrl(e,t,n,r){const o=this.urlSerializer.serialize(e);r=r||{},this.location.isCurrentPathEqualTo(o)||t?this.location.replaceState(o,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(o,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(e,t,n){this.routerState=e,this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return e.\u0275fac=function(e){r["\u0275\u0275invalidFactory"]()},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e}),e})();class Er{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new Sr,this.attachRef=null}}class Sr{constructor(){this.contexts=new Map}onChildOutletCreated(e,t){const n=this.getOrCreateContext(e);n.outlet=t,this.contexts.set(e,n)}onChildOutletDestroyed(e){const t=this.getContext(e);t&&(t.outlet=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Er,this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}}let kr=(()=>{class e{constructor(e,t,n,o,i){this.parentContexts=e,this.location=t,this.resolver=n,this.changeDetector=i,this.activated=null,this._activatedRoute=null,this.activateEvents=new r.EventEmitter,this.deactivateEvents=new r.EventEmitter,this.name=o||"primary",e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=e;const n=(t=t||this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,o=new Or(e,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,o),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Sr),r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.ComponentFactoryResolver),r["\u0275\u0275injectAttribute"]("name"),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),e})();class Or{constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===gn?this.route:e===Sr?this.childContexts:this.parent.get(e,t)}}class Dr{}class jr{preload(e,t){return Object(J.a)(null)}}let Ir=(()=>{class e{constructor(e,t,n,r,o){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=new yr(t,n,t=>e.triggerEvent(new bt(t)),t=>e.triggerEvent(new yt(t)))}setUpPreloading(){this.subscription=this.router.events.pipe(Object(B.a)(e=>e instanceof lt),Object(rt.a)(()=>this.preload())).subscribe(()=>{})}preload(){const e=this.injector.get(r.NgModuleRef);return this.processRoutes(e,this.router.config)}ngOnDestroy(){this.subscription.unsubscribe()}processRoutes(e,t){const n=[];for(const r of t)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const e=r._loadedConfig;n.push(this.processRoutes(e.module,e.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(e,r)):r.children&&n.push(this.processRoutes(e,r.children));return Object(qe.a)(n).pipe(Object(st.a)(),Object(L.a)(e=>{}))}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>this.loader.load(e.injector,t).pipe(Object(Xe.a)(e=>(t._loadedConfig=e,this.processRoutes(e.module,e.routes)))))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](Cr),r["\u0275\u0275inject"](r.NgModuleFactoryLoader),r["\u0275\u0275inject"](r.Compiler),r["\u0275\u0275inject"](r.Injector),r["\u0275\u0275inject"](Dr))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),Ar=(()=>{class e{constructor(e,t,n={}){this.router=e,this.viewportScroller=t,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof ct?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof lt&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof Ct&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,t){this.router.triggerEvent(new Ct(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,t))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(e){r["\u0275\u0275invalidFactory"]()},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e}),e})();const Pr=new r.InjectionToken("ROUTER_CONFIGURATION"),Tr=new r.InjectionToken("ROUTER_FORROOT_GUARD"),Nr=[o.Location,{provide:Wt,useClass:Qt},{provide:Cr,useFactory:function(e,t,n,r,i,s,a,c={},l,u){const d=new Cr(null,e,t,n,r,i,s,Ft(a));if(l&&(d.urlHandlingStrategy=l),u&&(d.routeReuseStrategy=u),c.errorHandler&&(d.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(d.malformedUriErrorHandler=c.malformedUriErrorHandler),c.enableTracing){const e=Object(o["\u0275getDOM"])();d.events.subscribe(t=>{e.logGroup(`Router Event: ${t.constructor.name}`),e.log(t.toString()),e.log(t),e.logGroupEnd()})}return c.onSameUrlNavigation&&(d.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(d.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.urlUpdateStrategy&&(d.urlUpdateStrategy=c.urlUpdateStrategy),c.relativeLinkResolution&&(d.relativeLinkResolution=c.relativeLinkResolution),d},deps:[Wt,Sr,o.Location,r.Injector,r.NgModuleFactoryLoader,r.Compiler,br,Pr,[class{},new r.Optional],[class{},new r.Optional]]},Sr,{provide:gn,useFactory:function(e){return e.routerState.root},deps:[Cr]},{provide:r.NgModuleFactoryLoader,useClass:r.SystemJsNgModuleLoader},Ir,jr,class{preload(e,t){return t().pipe(Object(Ye.a)(()=>Object(J.a)(null)))}},{provide:Pr,useValue:{enableTracing:!1}}];function Rr(){return new r.NgProbeToken("Router",Cr)}let Fr=(()=>{class e{constructor(e,t){}static forRoot(t,n){return{ngModule:e,providers:[Nr,Vr(t),{provide:Tr,useFactory:$r,deps:[[Cr,new r.Optional,new r.SkipSelf]]},{provide:Pr,useValue:n||{}},{provide:o.LocationStrategy,useFactory:Lr,deps:[o.PlatformLocation,[new r.Inject(o.APP_BASE_HREF),new r.Optional],Pr]},{provide:Ar,useFactory:Mr,deps:[Cr,o.ViewportScroller,Pr]},{provide:Dr,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:jr},{provide:r.NgProbeToken,multi:!0,useFactory:Rr},[Br,{provide:r.APP_INITIALIZER,multi:!0,useFactory:Hr,deps:[Br]},{provide:zr,useFactory:Ur,deps:[Br]},{provide:r.APP_BOOTSTRAP_LISTENER,multi:!0,useExisting:zr}]]}}static forChild(t){return{ngModule:e,providers:[Vr(t)]}}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](Tr,8),r["\u0275\u0275inject"](Cr,8))}}),e})();function Mr(e,t,n){return n.scrollOffset&&t.setOffset(n.scrollOffset),new Ar(e,t,n)}function Lr(e,t,n={}){return n.useHash?new o.HashLocationStrategy(e,t):new o.PathLocationStrategy(e,t)}function $r(e){if(e)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function Vr(e){return[{provide:r.ANALYZE_FOR_ENTRY_COMPONENTS,multi:!0,useValue:e},{provide:br,multi:!0,useValue:e}]}let Br=(()=>{class e{constructor(e){this.injector=e,this.initNavigation=!1,this.resultOfPreactivationDone=new R.b}appInitializer(){return this.injector.get(o.LOCATION_INITIALIZED,Promise.resolve(null)).then(()=>{let e=null;const t=new Promise(t=>e=t),n=this.injector.get(Cr),r=this.injector.get(Pr);if(this.isLegacyDisabled(r)||this.isLegacyEnabled(r))e(!0);else if("disabled"===r.initialNavigation)n.setUpLocationChangeListener(),e(!0);else{if("enabled"!==r.initialNavigation)throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?Object(J.a)(null):(this.initNavigation=!0,e(!0),this.resultOfPreactivationDone),n.initialNavigation()}return t})}bootstrapListener(e){const t=this.injector.get(Pr),n=this.injector.get(Ir),o=this.injector.get(Ar),i=this.injector.get(Cr),s=this.injector.get(r.ApplicationRef);e===s.components[0]&&(this.isLegacyEnabled(t)?i.initialNavigation():this.isLegacyDisabled(t)&&i.setUpLocationChangeListener(),n.setUpPreloading(),o.init(),i.resetRootComponentType(s.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(e){return"legacy_enabled"===e.initialNavigation||!0===e.initialNavigation||void 0===e.initialNavigation}isLegacyDisabled(e){return"legacy_disabled"===e.initialNavigation||!1===e.initialNavigation}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.Injector))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function Hr(e){return e.appInitializer.bind(e)}function Ur(e){return e.bootstrapListener.bind(e)}const zr=new r.InjectionToken("Router Initializer");function qr(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"kor-menu-item",3),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"]().gotoItem(n)})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;r["\u0275\u0275property"]("id","menu_"+e.key)("label",e.label)("icon",e.icon)}}let Wr=(()=>{class e{constructor(e,t,n){this.provider=e,this.ref=t,this.router=n,this.menus=new Map,this.unsubscriber=new R.b}ngOnInit(){this.provider.receiveCommands($.DontCodeModel.APP_ENTITIES,$.DontCodeModel.APP_ENTITIES_NAME_NODE).pipe(Object(M.a)(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new Qr(e.position,e.value,"create")),this.ref.detectChanges()}),this.provider.receiveCommands($.DontCodeModel.APP_SCREENS,$.DontCodeModel.APP_SCREENS_NAME_NODE).pipe(Object(M.a)(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new Qr(e.position,e.value,"filter")),this.ref.detectChanges()})}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}gotoPage(e){this.router.navigate([e])}isActive(e){return this.router.isActive(e,!0)}gotoItem(e){this.router.navigate([e.position])}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](K),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](Cr))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-menu"]],decls:4,vars:5,consts:[["label","Home","icon","home",3,"active","toggle","click"],["label","Dev","icon","memory",3,"active","toggle","click"],["toggle","false",3,"id","label","icon","click",4,"ngFor","ngForOf"],["toggle","false",3,"id","label","icon","click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"kor-menu-item",0),r["\u0275\u0275listener"]("click",(function(){return t.gotoPage("/")})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](1,"kor-menu-item",1),r["\u0275\u0275listener"]("click",(function(){return t.gotoPage("dev")})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](2,"kor-divider"),r["\u0275\u0275template"](3,qr,1,3,"kor-menu-item",2)),2&e&&(r["\u0275\u0275property"]("active",t.isActive("/"))("toggle",!1),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("active",t.isActive("dev"))("toggle",!1),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",t.menus.values()))},directives:[o.NgForOf],styles:[""],changeDetection:0}),e})();class Qr{constructor(e,t,n){e=this.cleanPosition(e),this.position=e,this.key=e.split("/").join("-"),this.label=t.name?t.name:t,this.icon=n||"text_snippet"}cleanPosition(e){return e.startsWith($.DontCodeModel.ROOT)&&(e=e.substr($.DontCodeModel.ROOT.length+1)),e.endsWith($.DontCodeModel.APP_SCREENS_NAME_NODE)&&(e=e.substring(0,e.length-$.DontCodeModel.APP_SCREENS_NAME_NODE.length-1)),e}}function Gr(e,t){1&e&&r["\u0275\u0275element"](0,"kor-icon",10)}function Kr(e,t){1&e&&r["\u0275\u0275element"](0,"kor-icon",11)}function Zr(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"kor-page"),r["\u0275\u0275elementStart"](2,"kor-app-bar",1),r["\u0275\u0275elementStart"](3,"kor-icon",2),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().logoClicked()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",3),r["\u0275\u0275template"](5,Gr,1,0,"kor-icon",4),r["\u0275\u0275template"](6,Kr,1,0,"kor-icon",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",6),r["\u0275\u0275elementStart"](8,"kor-drawer",7),r["\u0275\u0275listener"]("visible-changed",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().sidePanelVisibleChanged(t)})),r["\u0275\u0275element"](9,"preview-ui-menu"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",8),r["\u0275\u0275elementStart"](11,"kor-pane",9),r["\u0275\u0275element"](12,"preview-ui-menu"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](13,"router-outlet"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.ngIf,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("label","Preview "+n.appName),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf","connected"===e.status),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","connected"!==e.status),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("visible",n.sidePanelVisible)}}let Yr=(()=>{class e{constructor(e,t){this.provider=e,this.listenerService=t,this.unsubscriber=new R.b,this.appName="No Name"}ngOnInit(){this.sidePanelVisible=!0,this.provider.receiveCommands($.DontCodeModel.APP_NAME).pipe(Object(M.a)(this.unsubscriber)).subscribe(e=>{this.appName=e.value}),this.context$=Object(F.b)([this.listenerService.getConnectionStatus()]).pipe(Object(L.a)(e=>({status:e[0]})))}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}logoClicked(){this.sidePanelVisible=!0}sidePanelVisibleChanged(e){this.sidePanelVisible=e.target.visible}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](K),r["\u0275\u0275directiveInject"](G))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-main"]],decls:2,vars:3,consts:[[4,"ngIf"],["id","mainToolbar","slot","top","mobile","",3,"label"],["button","","icon","url('./assets/images/logo.png')","slot","left","size","xl",3,"click"],["slot","right"],["icon","sync",4,"ngIf"],["color","rgb(var(--functional-red))","icon","sync_problem",4,"ngIf"],["fxHide","true","fxShow.lt-md","true"],["id","mainSidePanel","label","Menu",3,"visible","visible-changed"],["slot","left","fxShow","true","fxHide.lt-md","true"],["label","Menu","size","l"],["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,Zr,14,4,"div",0),r["\u0275\u0275pipe"](1,"async")),2&e&&r["\u0275\u0275property"]("ngIf",r["\u0275\u0275pipeBind1"](1,1,t.context$))},directives:[o.NgIf,He,Wr,kr],pipes:[o.AsyncPipe],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1}"]}),e})(),Jr=(()=>{class e{constructor(){this.title="preview-ui"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-root"]],decls:1,vars:0,template:function(e,t){1&e&&r["\u0275\u0275element"](0,"preview-ui-main")},directives:[Yr],styles:[""]}),e})();class Xr{}function eo(e,t=null){return{type:2,steps:e,options:t}}function to(e){return{type:6,styles:e,offset:null}}function no(e){Promise.resolve(null).then(e)}class ro{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){no(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){}setPosition(e){}getPosition(){return 0}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class oo{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,n=0,r=0;const o=this.players.length;0==o?no(()=>this._onFinish()):this.players.forEach(e=>{e.onDone(()=>{++t==o&&this._onFinish()}),e.onDestroy(()=>{++n==o&&this._onDestroy()}),e.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((e,t)=>Math.max(e,t.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const t=e*this.totalTime;this.players.forEach(e=>{const n=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(n)})}getPosition(){let e=0;return this.players.forEach(t=>{const n=t.getPosition();e=Math.min(n,e)}),e}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}function io(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function so(e){switch(e.length){case 0:return new ro;case 1:return e[0];default:return new oo(e)}}function ao(e,t,n,r,o={},i={}){const s=[],a=[];let c=-1,l=null;if(r.forEach(e=>{const n=e.offset,r=n==c,u=r&&l||{};Object.keys(e).forEach(n=>{let r=n,a=e[n];if("offset"!==n)switch(r=t.normalizePropertyName(r,s),a){case"!":a=o[n];break;case"*":a=i[n];break;default:a=t.normalizeStyleValue(n,r,a,s)}u[r]=a}),r||a.push(u),l=u,c=n}),s.length){const e="\n - ";throw new Error(`Unable to animate due to the following errors:${e}${s.join(e)}`)}return a}function co(e,t,n,r){switch(t){case"start":e.onStart(()=>r(n&&lo(n,"start",e)));break;case"done":e.onDone(()=>r(n&&lo(n,"done",e)));break;case"destroy":e.onDestroy(()=>r(n&&lo(n,"destroy",e)))}}function lo(e,t,n){const r=n.totalTime,o=uo(e.element,e.triggerName,e.fromState,e.toState,t||e.phaseName,null==r?e.totalTime:r,!!n.disabled),i=e._data;return null!=i&&(o._data=i),o}function uo(e,t,n,r,o="",i=0,s){return{element:e,triggerName:t,fromState:n,toState:r,phaseName:o,totalTime:i,disabled:!!s}}function ho(e,t,n){let r;return e instanceof Map?(r=e.get(t),r||e.set(t,r=n)):(r=e[t],r||(r=e[t]=n)),r}function fo(e){const t=e.indexOf(":");return[e.substring(1,t),e.substr(t+1)]}let po=(e,t)=>!1,go=(e,t)=>!1,mo=(e,t,n)=>[];const bo=io();(bo||"undefined"!=typeof Element)&&(po=(e,t)=>e.contains(t),go=(()=>{if(bo||Element.prototype.matches)return(e,t)=>e.matches(t);{const e=Element.prototype,t=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return t?(e,n)=>t.apply(e,[n]):go}})(),mo=(e,t,n)=>{let r=[];if(n)r.push(...e.querySelectorAll(t));else{const n=e.querySelector(t);n&&r.push(n)}return r});let yo=null,vo=!1;function _o(e){yo||(yo=("undefined"!=typeof document?document.body:null)||{},vo=!!yo.style&&"WebkitAppearance"in yo.style);let t=!0;return yo.style&&!function(e){return"ebkit"==e.substring(1,6)}(e)&&(t=e in yo.style,!t&&vo)&&(t="Webkit"+e.charAt(0).toUpperCase()+e.substr(1)in yo.style),t}const wo=go,xo=po,Co=mo;function Eo(e){const t={};return Object.keys(e).forEach(n=>{const r=n.replace(/([a-z])([A-Z])/g,"$1-$2");t[r]=e[n]}),t}let So=(()=>{class e{validateStyleProperty(e){return _o(e)}matchesElement(e,t){return wo(e,t)}containsElement(e,t){return xo(e,t)}query(e,t,n){return Co(e,t,n)}computeStyle(e,t,n){return n||""}animate(e,t,n,r,o,i=[],s){return new ro(n,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),ko=(()=>{class e{}return e.NOOP=new So,e})();function Oo(e){if("number"==typeof e)return e;const t=e.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:Do(parseFloat(t[1]),t[2])}function Do(e,t){switch(t){case"s":return 1e3*e;default:return e}}function jo(e,t,n){return e.hasOwnProperty("duration")?e:function(e,t,n){let r,o=0,i="";if("string"==typeof e){const n=e.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===n)return t.push(`The provided timing value "${e}" is invalid.`),{duration:0,delay:0,easing:""};r=Do(parseFloat(n[1]),n[2]);const s=n[3];null!=s&&(o=Do(parseFloat(s),n[4]));const a=n[5];a&&(i=a)}else r=e;if(!n){let n=!1,i=t.length;r<0&&(t.push("Duration values below 0 are not allowed for this animation step."),n=!0),o<0&&(t.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&t.splice(i,0,`The provided timing value "${e}" is invalid.`)}return{duration:r,delay:o,easing:i}}(e,t,n)}function Io(e,t={}){return Object.keys(e).forEach(n=>{t[n]=e[n]}),t}function Ao(e,t,n={}){if(t)for(let r in e)n[r]=e[r];else Io(e,n);return n}function Po(e,t,n){return n?t+":"+n+";":""}function To(e){let t="";for(let n=0;n<e.style.length;n++){const r=e.style.item(n);t+=Po(0,r,e.style.getPropertyValue(r))}for(const n in e.style)e.style.hasOwnProperty(n)&&!n.startsWith("_")&&(t+=Po(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e.style[n]));e.setAttribute("style",t)}function No(e,t,n){e.style&&(Object.keys(t).forEach(r=>{const o=Ho(r);n&&!n.hasOwnProperty(r)&&(n[r]=e.style[o]),e.style[o]=t[r]}),io()&&To(e))}function Ro(e,t){e.style&&(Object.keys(t).forEach(t=>{const n=Ho(t);e.style[n]=""}),io()&&To(e))}function Fo(e){return Array.isArray(e)?1==e.length?e[0]:eo(e):e}const Mo=new RegExp("{{\\s*(.+?)\\s*}}","g");function Lo(e){let t=[];if("string"==typeof e){let n;for(;n=Mo.exec(e);)t.push(n[1]);Mo.lastIndex=0}return t}function $o(e,t,n){const r=e.toString(),o=r.replace(Mo,(e,r)=>{let o=t[r];return t.hasOwnProperty(r)||(n.push(`Please provide a value for the animation param ${r}`),o=""),o.toString()});return o==r?e:o}function Vo(e){const t=[];let n=e.next();for(;!n.done;)t.push(n.value),n=e.next();return t}const Bo=/-+([a-z0-9])/g;function Ho(e){return e.replace(Bo,(...e)=>e[1].toUpperCase())}function Uo(e,t){return 0===e||0===t}function zo(e,t,n){const r=Object.keys(n);if(r.length&&t.length){let i=t[0],s=[];if(r.forEach(e=>{i.hasOwnProperty(e)||s.push(e),i[e]=n[e]}),s.length)for(var o=1;o<t.length;o++){let n=t[o];s.forEach((function(t){n[t]=Wo(e,t)}))}}return t}function qo(e,t,n){switch(t.type){case 7:return e.visitTrigger(t,n);case 0:return e.visitState(t,n);case 1:return e.visitTransition(t,n);case 2:return e.visitSequence(t,n);case 3:return e.visitGroup(t,n);case 4:return e.visitAnimate(t,n);case 5:return e.visitKeyframes(t,n);case 6:return e.visitStyle(t,n);case 8:return e.visitReference(t,n);case 9:return e.visitAnimateChild(t,n);case 10:return e.visitAnimateRef(t,n);case 11:return e.visitQuery(t,n);case 12:return e.visitStagger(t,n);default:throw new Error(`Unable to resolve animation metadata node #${t.type}`)}}function Wo(e,t){return window.getComputedStyle(e)[t]}function Qo(e,t){const n=[];return"string"==typeof e?e.split(/\s*,\s*/).forEach(e=>function(e,t,n){if(":"==e[0]){const r=function(e,t){switch(e){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return t.push(`The transition alias value "${e}" is not supported`),"* => *"}}(e,n);if("function"==typeof r)return void t.push(r);e=r}const r=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return n.push(`The provided transition expression "${e}" is not supported`),t;const o=r[1],i=r[2],s=r[3];t.push(Zo(o,s)),"<"!=i[0]||"*"==o&&"*"==s||t.push(Zo(s,o))}(e,n,t)):n.push(e),n}const Go=new Set(["true","1"]),Ko=new Set(["false","0"]);function Zo(e,t){const n=Go.has(e)||Ko.has(e),r=Go.has(t)||Ko.has(t);return(o,i)=>{let s="*"==e||e==o,a="*"==t||t==i;return!s&&n&&"boolean"==typeof o&&(s=o?Go.has(e):Ko.has(e)),!a&&r&&"boolean"==typeof i&&(a=i?Go.has(t):Ko.has(t)),s&&a}}const Yo=new RegExp("s*:selfs*,?","g");function Jo(e,t,n){return new Xo(e).build(t,n)}class Xo{constructor(e){this._driver=e}build(e,t){const n=new ei(t);return this._resetContextStyleTimingState(n),qo(this,Fo(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles={},e.collectedStyles[""]={},e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,r=t.depCount=0;const o=[],i=[];return"@"==e.name.charAt(0)&&t.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),e.definitions.forEach(e=>{if(this._resetContextStyleTimingState(t),0==e.type){const n=e,r=n.name;r.toString().split(/\s*,\s*/).forEach(e=>{n.name=e,o.push(this.visitState(n,t))}),n.name=r}else if(1==e.type){const o=this.visitTransition(e,t);n+=o.queryCount,r+=o.depCount,i.push(o)}else t.errors.push("only state() and transition() definitions can sit inside of a trigger()")}),{type:7,name:e.name,states:o,transitions:i,queryCount:n,depCount:r,options:null}}visitState(e,t){const n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){const o=new Set,i=r||{};if(n.styles.forEach(e=>{if(ti(e)){const t=e;Object.keys(t).forEach(e=>{Lo(t[e]).forEach(e=>{i.hasOwnProperty(e)||o.add(e)})})}}),o.size){const n=Vo(o.values());t.errors.push(`state("${e.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)}}return{type:0,name:e.name,style:n,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;const n=qo(this,Fo(e.animation),t);return{type:1,matchers:Qo(e.expr,t.errors),animation:n,queryCount:t.queryCount,depCount:t.depCount,options:ni(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(e=>qo(this,e,t)),options:ni(e.options)}}visitGroup(e,t){const n=t.currentTime;let r=0;const o=e.steps.map(e=>{t.currentTime=n;const o=qo(this,e,t);return r=Math.max(r,t.currentTime),o});return t.currentTime=r,{type:3,steps:o,options:ni(e.options)}}visitAnimate(e,t){const n=function(e,t){let n=null;if(e.hasOwnProperty("duration"))n=e;else if("number"==typeof e)return ri(jo(e,t).duration,0,"");const r=e;if(r.split(/\s+/).some(e=>"{"==e.charAt(0)&&"{"==e.charAt(1))){const e=ri(0,0,"");return e.dynamic=!0,e.strValue=r,e}return n=n||jo(r,t),ri(n.duration,n.delay,n.easing)}(e.timings,t.errors);let r;t.currentAnimateTimings=n;let o=e.styles?e.styles:to({});if(5==o.type)r=this.visitKeyframes(o,t);else{let o=e.styles,i=!1;if(!o){i=!0;const e={};n.easing&&(e.easing=n.easing),o=to(e)}t.currentTime+=n.duration+n.delay;const s=this.visitStyle(o,t);s.isEmptyStep=i,r=s}return t.currentAnimateTimings=null,{type:4,timings:n,style:r,options:null}}visitStyle(e,t){const n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){const n=[];Array.isArray(e.styles)?e.styles.forEach(e=>{"string"==typeof e?"*"==e?n.push(e):t.errors.push(`The provided style string value ${e} is not allowed.`):n.push(e)}):n.push(e.styles);let r=!1,o=null;return n.forEach(e=>{if(ti(e)){const t=e,n=t.easing;if(n&&(o=n,delete t.easing),!r)for(let e in t)if(t[e].toString().indexOf("{{")>=0){r=!0;break}}}),{type:6,styles:n,easing:o,offset:e.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(e,t){const n=t.currentAnimateTimings;let r=t.currentTime,o=t.currentTime;n&&o>0&&(o-=n.duration+n.delay),e.styles.forEach(e=>{"string"!=typeof e&&Object.keys(e).forEach(n=>{if(!this._driver.validateStyleProperty(n))return void t.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);const i=t.collectedStyles[t.currentQuerySelector],s=i[n];let a=!0;s&&(o!=r&&o>=s.startTime&&r<=s.endTime&&(t.errors.push(`The CSS property "${n}" that exists between the times of "${s.startTime}ms" and "${s.endTime}ms" is also being animated in a parallel animation between the times of "${o}ms" and "${r}ms"`),a=!1),o=s.startTime),a&&(i[n]={startTime:o,endTime:r}),t.options&&function(e,t,n){const r=t.params||{},o=Lo(e);o.length&&o.forEach(e=>{r.hasOwnProperty(e)||n.push(`Unable to resolve the local animation param ${e} in the given list of values`)})}(e[n],t.options,t.errors)})})}visitKeyframes(e,t){const n={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push("keyframes() must be placed inside of a call to animate()"),n;let r=0;const o=[];let i=!1,s=!1,a=0;const c=e.steps.map(e=>{const n=this._makeStyleAst(e,t);let c=null!=n.offset?n.offset:function(e){if("string"==typeof e)return null;let t=null;if(Array.isArray(e))e.forEach(e=>{if(ti(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}});else if(ti(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}return t}(n.styles),l=0;return null!=c&&(r++,l=n.offset=c),s=s||l<0||l>1,i=i||l<a,a=l,o.push(l),n});s&&t.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),i&&t.errors.push("Please ensure that all keyframe offsets are in order");const l=e.steps.length;let u=0;r>0&&r<l?t.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==r&&(u=1/(l-1));const d=l-1,h=t.currentTime,f=t.currentAnimateTimings,p=f.duration;return c.forEach((e,r)=>{const i=u>0?r==d?1:u*r:o[r],s=i*p;t.currentTime=h+f.delay+s,f.duration=s,this._validateStyleAst(e,t),e.offset=i,n.styles.push(e)}),n}visitReference(e,t){return{type:8,animation:qo(this,Fo(e.animation),t),options:ni(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:ni(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:ni(e.options)}}visitQuery(e,t){const n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;const[o,i]=function(e){const t=!!e.split(/\s*,\s*/).find(e=>":self"==e);return t&&(e=e.replace(Yo,"")),[e=e.replace(/@\*/g,".ng-trigger").replace(/@\w+/g,e=>".ng-trigger-"+e.substr(1)).replace(/:animating/g,".ng-animating"),t]}(e.selector);t.currentQuerySelector=n.length?n+" "+o:o,ho(t.collectedStyles,t.currentQuerySelector,{});const s=qo(this,Fo(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:11,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:i,animation:s,originalSelector:e.selector,options:ni(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push("stagger() can only be used inside of query()");const n="full"===e.timings?{duration:0,delay:0,easing:"full"}:jo(e.timings,t.errors,!0);return{type:12,animation:qo(this,Fo(e.animation),t),timings:n,options:null}}}class ei{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null}}function ti(e){return!Array.isArray(e)&&"object"==typeof e}function ni(e){var t;return e?(e=Io(e)).params&&(e.params=(t=e.params)?Io(t):null):e={},e}function ri(e,t,n){return{duration:e,delay:t,easing:n}}function oi(e,t,n,r,o,i,s=null,a=!1){return{type:1,element:e,keyframes:t,preStyleProps:n,postStyleProps:r,duration:o,delay:i,totalTime:o+i,easing:s,subTimeline:a}}class ii{constructor(){this._map=new Map}consume(e){let t=this._map.get(e);return t?this._map.delete(e):t=[],t}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}}const si=new RegExp(":enter","g"),ai=new RegExp(":leave","g");function ci(e,t,n,r,o,i={},s={},a,c,l=[]){return(new li).buildKeyframes(e,t,n,r,o,i,s,a,c,l)}class li{buildKeyframes(e,t,n,r,o,i,s,a,c,l=[]){c=c||new ii;const u=new di(e,t,c,r,o,l,[]);u.options=a,u.currentTimeline.setStyles([i],null,u.errors,a),qo(this,n,u);const d=u.timelines.filter(e=>e.containsAnimation());if(d.length&&Object.keys(s).length){const e=d[d.length-1];e.allowOnlyTimelineStyles()||e.setStyles([s],null,u.errors,a)}return d.length?d.map(e=>e.buildKeyframes()):[oi(t,[],[],[],0,0,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){const n=t.subInstructions.consume(t.element);if(n){const r=t.createSubContext(e.options),o=t.currentTimeline.currentTime,i=this._visitSubInstructions(n,r,r.options);o!=i&&t.transformIntoNewTimeline(i)}t.previousNode=e}visitAnimateRef(e,t){const n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_visitSubInstructions(e,t,n){let r=t.currentTimeline.currentTime;const o=null!=n.duration?Oo(n.duration):null,i=null!=n.delay?Oo(n.delay):null;return 0!==o&&e.forEach(e=>{const n=t.appendInstructionToTimeline(e,o,i);r=Math.max(r,n.duration+n.delay)}),r}visitReference(e,t){t.updateOptions(e.options,!0),qo(this,e.animation,t),t.previousNode=e}visitSequence(e,t){const n=t.subContextCount;let r=t;const o=e.options;if(o&&(o.params||o.delay)&&(r=t.createSubContext(o),r.transformIntoNewTimeline(),null!=o.delay)){6==r.previousNode.type&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=ui);const e=Oo(o.delay);r.delayNextStep(e)}e.steps.length&&(e.steps.forEach(e=>qo(this,e,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){const n=[];let r=t.currentTimeline.currentTime;const o=e.options&&e.options.delay?Oo(e.options.delay):0;e.steps.forEach(i=>{const s=t.createSubContext(e.options);o&&s.delayNextStep(o),qo(this,i,s),r=Math.max(r,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(e=>t.currentTimeline.mergeTimelineCollectedStyles(e)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){const n=e.strValue;return jo(t.params?$o(n,t.params,t.errors):n,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){const n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());const o=e.style;5==o.type?this.visitKeyframes(o,t):(t.incrementTime(n.duration),this.visitStyle(o,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){const n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.getCurrentStyleProperties().length&&n.forwardFrame();const o=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(o):n.setStyles(e.styles,o,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){const n=t.currentAnimateTimings,r=t.currentTimeline.duration,o=n.duration,i=t.createSubContext().currentTimeline;i.easing=n.easing,e.styles.forEach(e=>{i.forwardTime((e.offset||0)*o),i.setStyles(e.styles,e.easing,t.errors,t.options),i.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(i),t.transformIntoNewTimeline(r+o),t.previousNode=e}visitQuery(e,t){const n=t.currentTimeline.currentTime,r=e.options||{},o=r.delay?Oo(r.delay):0;o&&(6===t.previousNode.type||0==n&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=ui);let i=n;const s=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=s.length;let a=null;s.forEach((n,r)=>{t.currentQueryIndex=r;const s=t.createSubContext(e.options,n);o&&s.delayNextStep(o),n===t.element&&(a=s.currentTimeline),qo(this,e.animation,s),s.currentTimeline.applyStylesToKeyframe(),i=Math.max(i,s.currentTimeline.currentTime)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(i),a&&(t.currentTimeline.mergeTimelineCollectedStyles(a),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){const n=t.parentContext,r=t.currentTimeline,o=e.timings,i=Math.abs(o.duration),s=i*(t.currentQueryTotal-1);let a=i*t.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":a=s-a;break;case"full":a=n.currentStaggerTime}const c=t.currentTimeline;a&&c.delayNextStep(a);const l=c.currentTime;qo(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-l+(r.startTime-n.currentTimeline.startTime)}}const ui={};class di{constructor(e,t,n,r,o,i,s,a){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=o,this.errors=i,this.timelines=s,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=ui,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=a||new hi(this._driver,t,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;const n=e;let r=this.options;null!=n.duration&&(r.duration=Oo(n.duration)),null!=n.delay&&(r.delay=Oo(n.delay));const o=n.params;if(o){let e=r.params;e||(e=this.options.params={}),Object.keys(o).forEach(n=>{t&&e.hasOwnProperty(n)||(e[n]=$o(o[n],e,this.errors))})}}_copyOptions(){const e={};if(this.options){const t=this.options.params;if(t){const n=e.params={};Object.keys(t).forEach(e=>{n[e]=t[e]})}}return e}createSubContext(e=null,t,n){const r=t||this.element,o=new di(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(e),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(e){return this.previousNode=ui,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){const r={duration:null!=t?t:e.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+e.delay,easing:""},o=new fi(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,r,o,i){let s=[];if(r&&s.push(this.element),e.length>0){e=(e=e.replace(si,"."+this._enterClassName)).replace(ai,"."+this._leaveClassName);let t=this._driver.query(this.element,e,1!=n);0!==n&&(t=n<0?t.slice(t.length+n,t.length):t.slice(0,n)),s.push(...t)}return o||0!=s.length||i.push(`\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`),s}}class hi{constructor(e,t,n,r){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const t=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new hi(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&(this._previousKeyframe.easing=e),Object.keys(this._globalTimelineStyles).forEach(e=>{this._backFill[e]=this._globalTimelineStyles[e]||"*",this._currentKeyframe[e]="*"}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,r){t&&(this._previousKeyframe.easing=t);const o=r&&r.params||{},i=function(e,t){const n={};let r;return e.forEach(e=>{"*"===e?(r=r||Object.keys(t),r.forEach(e=>{n[e]="*"})):Ao(e,!1,n)}),n}(e,this._globalTimelineStyles);Object.keys(i).forEach(e=>{const t=$o(i[e],o,n);this._pendingStyles[e]=t,this._localTimelineStyles.hasOwnProperty(e)||(this._backFill[e]=this._globalTimelineStyles.hasOwnProperty(e)?this._globalTimelineStyles[e]:"*"),this._updateStyle(e,t)})}applyStylesToKeyframe(){const e=this._pendingStyles,t=Object.keys(e);0!=t.length&&(this._pendingStyles={},t.forEach(t=>{this._currentKeyframe[t]=e[t]}),Object.keys(this._localTimelineStyles).forEach(e=>{this._currentKeyframe.hasOwnProperty(e)||(this._currentKeyframe[e]=this._localTimelineStyles[e])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(e=>{const t=this._localTimelineStyles[e];this._pendingStyles[e]=t,this._updateStyle(e,t)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){Object.keys(e._styleSummary).forEach(t=>{const n=this._styleSummary[t],r=e._styleSummary[t];(!n||r.time>n.time)&&this._updateStyle(t,r.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,t=new Set,n=1===this._keyframes.size&&0===this.duration;let r=[];this._keyframes.forEach((o,i)=>{const s=Ao(o,!0);Object.keys(s).forEach(n=>{const r=s[n];"!"==r?e.add(n):"*"==r&&t.add(n)}),n||(s.offset=i/this.duration),r.push(s)});const o=e.size?Vo(e.values()):[],i=t.size?Vo(t.values()):[];if(n){const e=r[0],t=Io(e);e.offset=0,t.offset=1,r=[e,t]}return oi(this.element,r,o,i,this.duration,this.startTime,this.easing,!1)}}class fi extends hi{constructor(e,t,n,r,o,i,s=!1){super(e,t,i.delay),this.element=t,this.keyframes=n,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=s,this.timings={duration:i.duration,delay:i.delay,easing:i.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){const o=[],i=n+t,s=t/i,a=Ao(e[0],!1);a.offset=0,o.push(a);const c=Ao(e[0],!1);c.offset=pi(s),o.push(c);const l=e.length-1;for(let r=1;r<=l;r++){let s=Ao(e[r],!1);s.offset=pi((t+s.offset*n)/i),o.push(s)}n=i,t=0,r="",e=o}return oi(this.element,e,this.preStyleProps,this.postStyleProps,n,t,r,!0)}}function pi(e,t=3){const n=Math.pow(10,t-1);return Math.round(e*n)/n}class gi{}class mi extends gi{normalizePropertyName(e,t){return Ho(e)}normalizeStyleValue(e,t,n,r){let o="";const i=n.toString().trim();if(bi[t]&&0!==n&&"0"!==n)if("number"==typeof n)o="px";else{const t=n.match(/^[+-]?[\d\.]+([a-z]*)$/);t&&0==t[1].length&&r.push(`Please provide a CSS unit value for ${e}:${n}`)}return i+o}}const bi=(()=>function(e){const t={};return e.forEach(e=>t[e]=!0),t}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function yi(e,t,n,r,o,i,s,a,c,l,u,d,h){return{type:0,element:e,triggerName:t,isRemovalTransition:o,fromState:n,fromStyles:i,toState:r,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:u,totalTime:d,errors:h}}const vi={};class _i{constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,r){return function(e,t,n,r,o){return e.some(e=>e(t,n,r,o))}(this.ast.matchers,e,t,n,r)}buildStyles(e,t,n){const r=this._stateStyles["*"],o=this._stateStyles[e],i=r?r.buildStyles(t,n):{};return o?o.buildStyles(t,n):i}build(e,t,n,r,o,i,s,a,c,l){const u=[],d=this.ast.options&&this.ast.options.params||vi,h=this.buildStyles(n,s&&s.params||vi,u),f=a&&a.params||vi,p=this.buildStyles(r,f,u),g=new Set,m=new Map,b=new Map,y="void"===r,v={params:Object.assign(Object.assign({},d),f)},_=l?[]:ci(e,t,this.ast.animation,o,i,h,p,v,c,u);let w=0;if(_.forEach(e=>{w=Math.max(e.duration+e.delay,w)}),u.length)return yi(t,this._triggerName,n,r,y,h,p,[],[],m,b,w,u);_.forEach(e=>{const n=e.element,r=ho(m,n,{});e.preStyleProps.forEach(e=>r[e]=!0);const o=ho(b,n,{});e.postStyleProps.forEach(e=>o[e]=!0),n!==t&&g.add(n)});const x=Vo(g.values());return yi(t,this._triggerName,n,r,y,h,p,_,x,m,b,w)}}class wi{constructor(e,t){this.styles=e,this.defaultParams=t}buildStyles(e,t){const n={},r=Io(this.defaultParams);return Object.keys(e).forEach(t=>{const n=e[t];null!=n&&(r[t]=n)}),this.styles.styles.forEach(e=>{if("string"!=typeof e){const o=e;Object.keys(o).forEach(e=>{let i=o[e];i.length>1&&(i=$o(i,r,t)),n[e]=i})}}),n}}class xi{constructor(e,t){this.name=e,this.ast=t,this.transitionFactories=[],this.states={},t.states.forEach(e=>{this.states[e.name]=new wi(e.style,e.options&&e.options.params||{})}),Ci(this.states,"true","1"),Ci(this.states,"false","0"),t.transitions.forEach(t=>{this.transitionFactories.push(new _i(e,t,this.states))}),this.fallbackTransition=new _i(e,{type:1,animation:{type:2,steps:[],options:null},matchers:[(e,t)=>!0],options:null,queryCount:0,depCount:0},this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,r){return this.transitionFactories.find(o=>o.match(e,t,n,r))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}}function Ci(e,t,n){e.hasOwnProperty(t)?e.hasOwnProperty(n)||(e[n]=e[t]):e.hasOwnProperty(n)&&(e[t]=e[n])}const Ei=new ii;class Si{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n,this._animations={},this._playersById={},this.players=[]}register(e,t){const n=[],r=Jo(this._driver,t,n);if(n.length)throw new Error(`Unable to build the animation due to the following errors: ${n.join("\n")}`);this._animations[e]=r}_buildPlayer(e,t,n){const r=e.element,o=ao(0,this._normalizer,0,e.keyframes,t,n);return this._driver.animate(r,o,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){const r=[],o=this._animations[e];let i;const s=new Map;if(o?(i=ci(this._driver,t,o,"ng-enter","ng-leave",{},{},n,Ei,r),i.forEach(e=>{const t=ho(s,e.element,{});e.postStyleProps.forEach(e=>t[e]=null)})):(r.push("The requested animation doesn't exist or has already been destroyed"),i=[]),r.length)throw new Error(`Unable to create the animation due to the following errors: ${r.join("\n")}`);s.forEach((e,t)=>{Object.keys(e).forEach(n=>{e[n]=this._driver.computeStyle(t,n,"*")})});const a=so(i.map(e=>{const t=s.get(e.element);return this._buildPlayer(e,{},t)}));return this._playersById[e]=a,a.onDestroy(()=>this.destroy(e)),this.players.push(a),a}destroy(e){const t=this._getPlayer(e);t.destroy(),delete this._playersById[e];const n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){const t=this._playersById[e];if(!t)throw new Error(`Unable to find the timeline player referenced by ${e}`);return t}listen(e,t,n,r){const o=uo(t,"","","");return co(this._getPlayer(e),n,o,r),()=>{}}command(e,t,n,r){if("register"==n)return void this.register(e,r[0]);if("create"==n)return void this.create(e,t,r[0]||{});const o=this._getPlayer(e);switch(n){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e)}}}const ki=[],Oi={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Di={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class ji{constructor(e,t=""){this.namespaceId=t;const n=e&&e.hasOwnProperty("value");if(this.value=null!=(r=n?e.value:e)?r:null,n){const t=Io(e);delete t.value,this.options=t}else this.options={};var r;this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const t=e.params;if(t){const e=this.options.params;Object.keys(t).forEach(n=>{null==e[n]&&(e[n]=t[n])})}}}const Ii=new ji("void");class Ai{constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,Li(t,this._hostClassName)}listen(e,t,n,r){if(!this._triggers.hasOwnProperty(t))throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`);if(null==n||0==n.length)throw new Error(`Unable to listen on the animation trigger "${t}" because the provided event is undefined!`);if("start"!=(o=n)&&"done"!=o)throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`);var o;const i=ho(this._elementListeners,e,[]),s={name:t,phase:n,callback:r};i.push(s);const a=ho(this._engine.statesByElement,e,{});return a.hasOwnProperty(t)||(Li(e,"ng-trigger"),Li(e,"ng-trigger-"+t),a[t]=Ii),()=>{this._engine.afterFlush(()=>{const e=i.indexOf(s);e>=0&&i.splice(e,1),this._triggers[t]||delete a[t]})}}register(e,t){return!this._triggers[e]&&(this._triggers[e]=t,!0)}_getTrigger(e){const t=this._triggers[e];if(!t)throw new Error(`The provided animation trigger "${e}" has not been registered!`);return t}trigger(e,t,n,r=!0){const o=this._getTrigger(t),i=new Ti(this.id,t,e);let s=this._engine.statesByElement.get(e);s||(Li(e,"ng-trigger"),Li(e,"ng-trigger-"+t),this._engine.statesByElement.set(e,s={}));let a=s[t];const c=new ji(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&a&&c.absorbOptions(a.options),s[t]=c,a||(a=Ii),"void"!==c.value&&a.value===c.value){if(!function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!=r.length)return!1;for(let o=0;o<n.length;o++){const r=n[o];if(!t.hasOwnProperty(r)||e[r]!==t[r])return!1}return!0}(a.params,c.params)){const t=[],n=o.matchStyles(a.value,a.params,t),r=o.matchStyles(c.value,c.params,t);t.length?this._engine.reportError(t):this._engine.afterFlush(()=>{Ro(e,n),No(e,r)})}return}const l=ho(this._engine.playersByElement,e,[]);l.forEach(e=>{e.namespaceId==this.id&&e.triggerName==t&&e.queued&&e.destroy()});let u=o.matchTransition(a.value,c.value,e,c.params),d=!1;if(!u){if(!r)return;u=o.fallbackTransition,d=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:u,fromState:a,toState:c,player:i,isFallbackTransition:d}),d||(Li(e,"ng-animate-queued"),i.onStart(()=>{$i(e,"ng-animate-queued")})),i.onDone(()=>{let t=this.players.indexOf(i);t>=0&&this.players.splice(t,1);const n=this._engine.playersByElement.get(e);if(n){let e=n.indexOf(i);e>=0&&n.splice(e,1)}}),this.players.push(i),l.push(i),i}deregister(e){delete this._triggers[e],this._engine.statesByElement.forEach((t,n)=>{delete t[e]}),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(t=>t.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const t=this._engine.playersByElement.get(e);t&&(t.forEach(e=>e.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){const n=this._engine.driver.query(e,".ng-trigger",!0);n.forEach(e=>{if(e.__ng_removed)return;const n=this._engine.fetchNamespacesByElement(e);n.size?n.forEach(n=>n.triggerLeaveAnimation(e,t,!1,!0)):this.clearElementCache(e)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(e=>this.clearElementCache(e)))}triggerLeaveAnimation(e,t,n,r){const o=this._engine.statesByElement.get(e);if(o){const i=[];if(Object.keys(o).forEach(t=>{if(this._triggers[t]){const n=this.trigger(e,t,"void",r);n&&i.push(n)}}),i.length)return this._engine.markElementAsRemoved(this.id,e,!0,t),n&&so(i).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const t=this._elementListeners.get(e);if(t){const n=new Set;t.forEach(t=>{const r=t.name;if(n.has(r))return;n.add(r);const o=this._triggers[r].fallbackTransition,i=this._engine.statesByElement.get(e)[r]||Ii,s=new ji("void"),a=new Ti(this.id,r,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:r,transition:o,fromState:i,toState:s,player:a,isFallbackTransition:!0})})}}removeNode(e,t){const n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(n.totalAnimations){const t=n.players.length?n.playersByQueriedElement.get(e):[];if(t&&t.length)r=!0;else{let t=e;for(;t=t.parentNode;)if(n.statesByElement.get(t)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)n.markElementAsRemoved(this.id,e,!1,t);else{const r=e.__ng_removed;r&&r!==Oi||(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){Li(e,this._hostClassName)}drainQueuedTransitions(e){const t=[];return this._queue.forEach(n=>{const r=n.player;if(r.destroyed)return;const o=n.element,i=this._elementListeners.get(o);i&&i.forEach(t=>{if(t.name==n.triggerName){const r=uo(o,n.triggerName,n.fromState.value,n.toState.value);r._data=e,co(n.player,t.phase,r,t.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(n)}),this._queue=[],t.sort((e,t)=>{const n=e.transition.ast.depCount,r=t.transition.ast.depCount;return 0==n||0==r?n-r:this._engine.driver.containsElement(e.element,t.element)?1:-1})}destroy(e){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let t=!1;return this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find(t=>t.element===e)||t,t}}class Pi{constructor(e,t,n){this.bodyNode=e,this.driver=t,this._normalizer=n,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(e,t)=>{}}_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(t=>{t.players.forEach(t=>{t.queued&&e.push(t)})}),e}createNamespace(e,t){const n=new Ai(e,t,this);return t.parentNode?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){const n=this._namespaceList.length-1;if(n>=0){let r=!1;for(let o=n;o>=0;o--)if(this.driver.containsElement(this._namespaceList[o].hostElement,t)){this._namespaceList.splice(o+1,0,e),r=!0;break}r||this._namespaceList.splice(0,0,e)}else this._namespaceList.push(e);return this.namespacesByHostElement.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}destroy(e,t){if(!e)return;const n=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(n.hostElement),delete this._namespaceLookup[e];const t=this._namespaceList.indexOf(n);t>=0&&this._namespaceList.splice(t,1)}),this.afterFlushAnimationsDone(()=>n.destroy(t))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const t=new Set,n=this.statesByElement.get(e);if(n){const e=Object.keys(n);for(let r=0;r<e.length;r++){const o=n[e[r]].namespaceId;if(o){const e=this._fetchNamespace(o);e&&t.add(e)}}}return t}trigger(e,t,n,r){if(Ni(t)){const o=this._fetchNamespace(e);if(o)return o.trigger(t,n,r),!0}return!1}insertNode(e,t,n,r){if(!Ni(t))return;const o=t.__ng_removed;if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;const e=this.collectedLeaveElements.indexOf(t);e>=0&&this.collectedLeaveElements.splice(e,1)}if(e){const r=this._fetchNamespace(e);r&&r.insertNode(t,n)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Li(e,"ng-animate-disabled")):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),$i(e,"ng-animate-disabled"))}removeNode(e,t,n,r){if(Ni(t)){const o=e?this._fetchNamespace(e):null;if(o?o.removeNode(t,r):this.markElementAsRemoved(e,t,!1,r),n){const n=this.namespacesByHostElement.get(t);n&&n.id!==e&&n.removeNode(t,r)}}else this._onRemovalComplete(t,r)}markElementAsRemoved(e,t,n,r){this.collectedLeaveElements.push(t),t.__ng_removed={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1}}listen(e,t,n,r,o){return Ni(t)?this._fetchNamespace(e).listen(t,n,r,o):()=>{}}_buildInstruction(e,t,n,r,o){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,o)}destroyInnerAnimations(e){let t=this.driver.query(e,".ng-trigger",!0);t.forEach(e=>this.destroyActiveAnimationsForElement(e)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(e,".ng-animating",!0),t.forEach(e=>this.finishActiveQueriedAnimationOnElement(e)))}destroyActiveAnimationsForElement(e){const t=this.playersByElement.get(e);t&&t.forEach(e=>{e.queued?e.markedForDestroy=!0:e.destroy()})}finishActiveQueriedAnimationOnElement(e){const t=this.playersByQueriedElement.get(e);t&&t.forEach(e=>e.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return so(this.players).onDone(()=>e());e()})}processLeaveNode(e){const t=e.__ng_removed;if(t&&t.setForRemoval){if(e.__ng_removed=Oi,t.namespaceId){this.destroyInnerAnimations(e);const n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}this.driver.matchesElement(e,".ng-animate-disabled")&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(e=>{this.markElementAsDisabled(e,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((e,t)=>this._balanceNamespaceList(e,t)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++)Li(this.collectedEnterElements[n],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const n=[];try{t=this._flushAnimations(n,e)}finally{for(let e=0;e<n.length;e++)n[e]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++)this.processLeaveNode(this.collectedLeaveElements[n]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(e=>e()),this._flushFns=[],this._whenQuietFns.length){const e=this._whenQuietFns;this._whenQuietFns=[],t.length?so(t).onDone(()=>{e.forEach(e=>e())}):e.forEach(e=>e())}}reportError(e){throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${e.join("\n")}`)}_flushAnimations(e,t){const n=new ii,r=[],o=new Map,i=[],s=new Map,a=new Map,c=new Map,l=new Set;this.disabledNodes.forEach(e=>{l.add(e);const t=this.driver.query(e,".ng-animate-queued",!0);for(let n=0;n<t.length;n++)l.add(t[n])});const u=this.bodyNode,d=Array.from(this.statesByElement.keys()),h=Mi(d,this.collectedEnterElements),f=new Map;let p=0;h.forEach((e,t)=>{const n="ng-enter"+p++;f.set(t,n),e.forEach(e=>Li(e,n))});const g=[],m=new Set,b=new Set;for(let I=0;I<this.collectedLeaveElements.length;I++){const e=this.collectedLeaveElements[I],t=e.__ng_removed;t&&t.setForRemoval&&(g.push(e),m.add(e),t.hasAnimation?this.driver.query(e,".ng-star-inserted",!0).forEach(e=>m.add(e)):b.add(e))}const y=new Map,v=Mi(d,Array.from(m));v.forEach((e,t)=>{const n="ng-leave"+p++;y.set(t,n),e.forEach(e=>Li(e,n))}),e.push(()=>{h.forEach((e,t)=>{const n=f.get(t);e.forEach(e=>$i(e,n))}),v.forEach((e,t)=>{const n=y.get(t);e.forEach(e=>$i(e,n))}),g.forEach(e=>{this.processLeaveNode(e)})});const _=[],w=[];for(let I=this._namespaceList.length-1;I>=0;I--)this._namespaceList[I].drainQueuedTransitions(t).forEach(e=>{const t=e.player,o=e.element;if(_.push(t),this.collectedEnterElements.length){const e=o.__ng_removed;if(e&&e.setForMove)return void t.destroy()}const l=!u||!this.driver.containsElement(u,o),d=y.get(o),h=f.get(o),p=this._buildInstruction(e,n,h,d,l);if(!p.errors||!p.errors.length)return l||e.isFallbackTransition?(t.onStart(()=>Ro(o,p.fromStyles)),t.onDestroy(()=>No(o,p.toStyles)),void r.push(t)):(p.timelines.forEach(e=>e.stretchStartingKeyframe=!0),n.append(o,p.timelines),i.push({instruction:p,player:t,element:o}),p.queriedElements.forEach(e=>ho(s,e,[]).push(t)),p.preStyleProps.forEach((e,t)=>{const n=Object.keys(e);if(n.length){let e=a.get(t);e||a.set(t,e=new Set),n.forEach(t=>e.add(t))}}),void p.postStyleProps.forEach((e,t)=>{const n=Object.keys(e);let r=c.get(t);r||c.set(t,r=new Set),n.forEach(e=>r.add(e))}));w.push(p)});if(w.length){const e=[];w.forEach(t=>{e.push(`@${t.triggerName} has failed due to:\n`),t.errors.forEach(t=>e.push(`- ${t}\n`))}),_.forEach(e=>e.destroy()),this.reportError(e)}const x=new Map,C=new Map;i.forEach(e=>{const t=e.element;n.has(t)&&(C.set(t,t),this._beforeAnimationBuild(e.player.namespaceId,e.instruction,x))}),r.forEach(e=>{const t=e.element;this._getPreviousPlayers(t,!1,e.namespaceId,e.triggerName,null).forEach(e=>{ho(x,t,[]).push(e),e.destroy()})});const E=g.filter(e=>Bi(e,a,c)),S=new Map;Fi(S,this.driver,b,c,"*").forEach(e=>{Bi(e,a,c)&&E.push(e)});const k=new Map;h.forEach((e,t)=>{Fi(k,this.driver,new Set(e),a,"!")}),E.forEach(e=>{const t=S.get(e),n=k.get(e);S.set(e,Object.assign(Object.assign({},t),n))});const O=[],D=[],j={};i.forEach(e=>{const{element:t,player:i,instruction:s}=e;if(n.has(t)){if(l.has(t))return i.onDestroy(()=>No(t,s.toStyles)),i.disabled=!0,i.overrideTotalTime(s.totalTime),void r.push(i);let e=j;if(C.size>1){let n=t;const r=[];for(;n=n.parentNode;){const t=C.get(n);if(t){e=t;break}r.push(n)}r.forEach(t=>C.set(t,e))}const n=this._buildAnimation(i.namespaceId,s,x,o,k,S);if(i.setRealPlayer(n),e===j)O.push(i);else{const t=this.playersByElement.get(e);t&&t.length&&(i.parentPlayer=so(t)),r.push(i)}}else Ro(t,s.fromStyles),i.onDestroy(()=>No(t,s.toStyles)),D.push(i),l.has(t)&&r.push(i)}),D.forEach(e=>{const t=o.get(e.element);if(t&&t.length){const n=so(t);e.setRealPlayer(n)}}),r.forEach(e=>{e.parentPlayer?e.syncPlayerEvents(e.parentPlayer):e.destroy()});for(let I=0;I<g.length;I++){const e=g[I],t=e.__ng_removed;if($i(e,"ng-leave"),t&&t.hasAnimation)continue;let n=[];if(s.size){let t=s.get(e);t&&t.length&&n.push(...t);let r=this.driver.query(e,".ng-animating",!0);for(let e=0;e<r.length;e++){let t=s.get(r[e]);t&&t.length&&n.push(...t)}}const r=n.filter(e=>!e.destroyed);r.length?Vi(this,e,r):this.processLeaveNode(e)}return g.length=0,O.forEach(e=>{this.players.push(e),e.onDone(()=>{e.destroy();const t=this.players.indexOf(e);this.players.splice(t,1)}),e.play()}),O}elementContainsData(e,t){let n=!1;const r=t.__ng_removed;return r&&r.setForRemoval&&(n=!0),this.playersByElement.has(t)&&(n=!0),this.playersByQueriedElement.has(t)&&(n=!0),this.statesByElement.has(t)&&(n=!0),this._fetchNamespace(e).elementContainsData(t)||n}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,r,o){let i=[];if(t){const t=this.playersByQueriedElement.get(e);t&&(i=t)}else{const t=this.playersByElement.get(e);if(t){const e=!o||"void"==o;t.forEach(t=>{t.queued||(e||t.triggerName==r)&&i.push(t)})}}return(n||r)&&(i=i.filter(e=>!(n&&n!=e.namespaceId||r&&r!=e.triggerName))),i}_beforeAnimationBuild(e,t,n){const r=t.element,o=t.isRemovalTransition?void 0:e,i=t.isRemovalTransition?void 0:t.triggerName;for(const s of t.timelines){const e=s.element,a=e!==r,c=ho(n,e,[]);this._getPreviousPlayers(e,a,o,i,t.toState).forEach(e=>{const t=e.getRealPlayer();t.beforeDestroy&&t.beforeDestroy(),e.destroy(),c.push(e)})}Ro(r,t.fromStyles)}_buildAnimation(e,t,n,r,o,i){const s=t.triggerName,a=t.element,c=[],l=new Set,u=new Set,d=t.timelines.map(t=>{const d=t.element;l.add(d);const h=d.__ng_removed;if(h&&h.removedBeforeQueried)return new ro(t.duration,t.delay);const f=d!==a,p=function(e){const t=[];return function e(t,n){for(let r=0;r<t.length;r++){const o=t[r];o instanceof oo?e(o.players,n):n.push(o)}}(e,t),t}((n.get(d)||ki).map(e=>e.getRealPlayer())).filter(e=>!!e.element&&e.element===d),g=o.get(d),m=i.get(d),b=ao(0,this._normalizer,0,t.keyframes,g,m),y=this._buildPlayer(t,b,p);if(t.subTimeline&&r&&u.add(d),f){const t=new Ti(e,s,d);t.setRealPlayer(y),c.push(t)}return y});c.forEach(e=>{ho(this.playersByQueriedElement,e.element,[]).push(e),e.onDone(()=>function(e,t,n){let r;if(e instanceof Map){if(r=e.get(t),r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&e.delete(t)}}else if(r=e[t],r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&delete e[t]}return r}(this.playersByQueriedElement,e.element,e))}),l.forEach(e=>Li(e,"ng-animating"));const h=so(d);return h.onDestroy(()=>{l.forEach(e=>$i(e,"ng-animating")),No(a,t.toStyles)}),u.forEach(e=>{ho(r,e,[]).push(h)}),h}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new ro(e.duration,e.delay)}}class Ti{constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n,this._player=new ro,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,Object.keys(this._queuedCallbacks).forEach(t=>{this._queuedCallbacks[t].forEach(n=>co(e,t,void 0,n))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){ho(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const t=this._player;t.triggerCallback&&t.triggerCallback(e)}}function Ni(e){return e&&1===e.nodeType}function Ri(e,t){const n=e.style.display;return e.style.display=null!=t?t:"none",n}function Fi(e,t,n,r,o){const i=[];n.forEach(e=>i.push(Ri(e)));const s=[];r.forEach((n,r)=>{const i={};n.forEach(e=>{const n=i[e]=t.computeStyle(r,e,o);n&&0!=n.length||(r.__ng_removed=Di,s.push(r))}),e.set(r,i)});let a=0;return n.forEach(e=>Ri(e,i[a++])),s}function Mi(e,t){const n=new Map;if(e.forEach(e=>n.set(e,[])),0==t.length)return n;const r=new Set(t),o=new Map;return t.forEach(e=>{const t=function e(t){if(!t)return 1;let i=o.get(t);if(i)return i;const s=t.parentNode;return i=n.has(s)?s:r.has(s)?1:e(s),o.set(t,i),i}(e);1!==t&&n.get(t).push(e)}),n}function Li(e,t){if(e.classList)e.classList.add(t);else{let n=e.$$classes;n||(n=e.$$classes={}),n[t]=!0}}function $i(e,t){if(e.classList)e.classList.remove(t);else{let n=e.$$classes;n&&delete n[t]}}function Vi(e,t,n){so(n).onDone(()=>e.processLeaveNode(t))}function Bi(e,t,n){const r=n.get(e);if(!r)return!1;let o=t.get(e);return o?r.forEach(e=>o.add(e)):t.set(e,r),n.delete(e),!0}class Hi{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._triggerCache={},this.onRemovalComplete=(e,t)=>{},this._transitionEngine=new Pi(e,t,n),this._timelineEngine=new Si(e,t,n),this._transitionEngine.onRemovalComplete=(e,t)=>this.onRemovalComplete(e,t)}registerTrigger(e,t,n,r,o){const i=e+"-"+r;let s=this._triggerCache[i];if(!s){const e=[],t=Jo(this._driver,o,e);if(e.length)throw new Error(`The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join("\n - ")}`);s=function(e,t){return new xi(e,t)}(r,t),this._triggerCache[i]=s}this._transitionEngine.registerTrigger(t,r,s)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}onRemove(e,t,n,r){this._transitionEngine.removeNode(e,t,r||!1,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,r){if("@"==n.charAt(0)){const[e,o]=fo(n);this._timelineEngine.command(e,t,o,r)}else this._transitionEngine.trigger(e,t,n,r)}listen(e,t,n,r,o){if("@"==n.charAt(0)){const[e,r]=fo(n);return this._timelineEngine.listen(e,t,r,o)}return this._transitionEngine.listen(e,t,n,r,o)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}function Ui(e,t){let n=null,r=null;return Array.isArray(t)&&t.length?(n=qi(t[0]),t.length>1&&(r=qi(t[t.length-1]))):t&&(n=qi(t)),n||r?new zi(e,n,r):null}let zi=(()=>{class e{constructor(t,n,r){this._element=t,this._startStyles=n,this._endStyles=r,this._state=0;let o=e.initialStylesByElement.get(t);o||e.initialStylesByElement.set(t,o={}),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&No(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(No(this._element,this._initialStyles),this._endStyles&&(No(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(Ro(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Ro(this._element,this._endStyles),this._endStyles=null),No(this._element,this._initialStyles),this._state=3)}}return e.initialStylesByElement=new WeakMap,e})();function qi(e){let t=null;const n=Object.keys(e);for(let r=0;r<n.length;r++){const o=n[r];Wi(o)&&(t=t||{},t[o]=e[o])}return t}function Wi(e){return"display"===e||"position"===e}class Qi{constructor(e,t,n,r,o,i,s){this._element=e,this._name=t,this._duration=n,this._delay=r,this._easing=o,this._fillMode=i,this._onDoneFn=s,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=e=>this._handleCallback(e)}apply(){!function(e,t){const n=Xi(e,"").trim();n.length&&(function(e,t){let n=0;for(let r=0;r<e.length;r++)","===e.charAt(r)&&n++}(n),t=`${n}, ${t}`),Ji(e,"",t)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),Yi(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){Gi(this._element,this._name,"paused")}resume(){Gi(this._element,this._name,"running")}setPosition(e){const t=Ki(this._element,this._name);this._position=e*this._duration,Ji(this._element,"Delay",`-${this._position}ms`,t)}getPosition(){return this._position}_handleCallback(e){const t=e._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(e.elapsedTime.toFixed(3));e.animationName==this._name&&Math.max(t-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}finish(){this._finished||(this._finished=!0,this._onDoneFn(),Yi(this._element,this._eventFn,!0))}destroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(e,t){const n=Xi(e,"").split(","),r=Zi(n,t);r>=0&&(n.splice(r,1),Ji(e,"",n.join(",")))}(this._element,this._name))}}function Gi(e,t,n){Ji(e,"PlayState",n,Ki(e,t))}function Ki(e,t){const n=Xi(e,"");return n.indexOf(",")>0?Zi(n.split(","),t):Zi([n],t)}function Zi(e,t){for(let n=0;n<e.length;n++)if(e[n].indexOf(t)>=0)return n;return-1}function Yi(e,t,n){n?e.removeEventListener("animationend",t):e.addEventListener("animationend",t)}function Ji(e,t,n,r){const o="animation"+t;if(null!=r){const t=e.style[o];if(t.length){const e=t.split(",");e[r]=n,n=e.join(",")}}e.style[o]=n}function Xi(e,t){return e.style["animation"+t]}class es{constructor(e,t,n,r,o,i,s,a){this.element=e,this.keyframes=t,this.animationName=n,this._duration=r,this._delay=o,this._finalStyles=s,this._specialStyles=a,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=i||"linear",this.totalTime=r+o,this._buildStyler()}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}destroy(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}_flushDoneFns(){this._onDoneFns.forEach(e=>e()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}finish(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}setPosition(e){this._styler.setPosition(e)}getPosition(){return this._styler.getPosition()}hasStarted(){return this._state>=2}init(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}play(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}pause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}reset(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}_buildStyler(){this._styler=new Qi(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}beforeDestroy(){this.init();const e={};if(this.hasStarted()){const t=this._state>=3;Object.keys(this._finalStyles).forEach(n=>{"offset"!=n&&(e[n]=t?this._finalStyles[n]:Wo(this.element,n))})}this.currentSnapshot=e}}class ts extends ro{constructor(e,t){super(),this.element=e,this._startingStyles={},this.__initialized=!1,this._styles=Eo(t)}init(){!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach(e=>{this._startingStyles[e]=this.element.style[e]}),super.init())}play(){this._startingStyles&&(this.init(),Object.keys(this._styles).forEach(e=>this.element.style.setProperty(e,this._styles[e])),super.play())}destroy(){this._startingStyles&&(Object.keys(this._startingStyles).forEach(e=>{const t=this._startingStyles[e];t?this.element.style.setProperty(e,t):this.element.style.removeProperty(e)}),this._startingStyles=null,super.destroy())}}class ns{constructor(){this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}validateStyleProperty(e){return _o(e)}matchesElement(e,t){return wo(e,t)}containsElement(e,t){return xo(e,t)}query(e,t,n){return Co(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}buildKeyframeElement(e,t,n){n=n.map(e=>Eo(e));let r=`@keyframes ${t} {\n`,o="";n.forEach(e=>{o=" ";const t=parseFloat(e.offset);r+=`${o}${100*t}% {\n`,o+=" ",Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"offset":return;case"easing":return void(n&&(r+=`${o}animation-timing-function: ${n};\n`));default:return void(r+=`${o}${t}: ${n};\n`)}}),r+=`${o}}\n`}),r+="}\n";const i=document.createElement("style");return i.innerHTML=r,i}animate(e,t,n,r,o,i=[],s){s&&this._notifyFaultyScrubber();const a=i.filter(e=>e instanceof es),c={};Uo(n,r)&&a.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const l=function(e){let t={};return e&&(Array.isArray(e)?e:[e]).forEach(e=>{Object.keys(e).forEach(n=>{"offset"!=n&&"easing"!=n&&(t[n]=e[n])})}),t}(t=zo(e,t,c));if(0==n)return new ts(e,l);const u=`gen_css_kf_${this._count++}`,d=this.buildKeyframeElement(e,u,t);document.querySelector("head").appendChild(d);const h=Ui(e,t),f=new es(e,t,u,n,r,o,l,h);return f.onDestroy(()=>{var e;(e=d).parentNode.removeChild(e)}),f}_notifyFaultyScrubber(){this._warningIssued||(console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n","  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."),this._warningIssued=!0)}}class rs{constructor(e,t,n,r){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(e,t,n){return e.animate(t,n)}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(t=>{"offset"!=t&&(e[t]=this._finished?this._finalKeyframe[t]:Wo(this.element,t))}),this.currentSnapshot=e}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class os{constructor(){this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test(is().toString()),this._cssKeyframesDriver=new ns}validateStyleProperty(e){return _o(e)}matchesElement(e,t){return wo(e,t)}containsElement(e,t){return xo(e,t)}query(e,t,n){return Co(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}overrideWebAnimationsSupport(e){this._isNativeImpl=e}animate(e,t,n,r,o,i=[],s){if(!s&&!this._isNativeImpl)return this._cssKeyframesDriver.animate(e,t,n,r,o,i);const a={duration:n,delay:r,fill:0==r?"both":"forwards"};o&&(a.easing=o);const c={},l=i.filter(e=>e instanceof rs);Uo(n,r)&&l.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const u=Ui(e,t=zo(e,t=t.map(e=>Ao(e,!1)),c));return new rs(e,t,a,u)}}function is(){return"undefined"!=typeof window&&void 0!==window.document&&Element.prototype.animate||{}}let ss=(()=>{class e extends Xr{constructor(e,t){super(),this._nextAnimationId=0,this._renderer=e.createRenderer(t.body,{id:"0",encapsulation:r.ViewEncapsulation.None,styles:[],data:{animation:[]}})}build(e){const t=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(e)?eo(e):e;return ls(this._renderer,null,t,"register",[n]),new as(t,this._renderer)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.RendererFactory2),r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class as extends class{}{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new cs(this._id,e,t||{},this._renderer)}}class cs{constructor(e,t,n,r){this.id=e,this.element=t,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return ls(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset")}setPosition(e){this._command("setPosition",e)}getPosition(){return 0}}function ls(e,t,n,r,o){return e.setProperty(t,`@@${n}:${r}`,o)}let us=(()=>{class e{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),t.onRemovalComplete=(e,t)=>{t&&t.parentNode(e)&&t.removeChild(e.parentNode,e)}}createRenderer(e,t){const n=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation)){let e=this._rendererCache.get(n);return e||(e=new ds("",n,this.engine),this._rendererCache.set(n,e)),e}const r=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);const i=t=>{Array.isArray(t)?t.forEach(i):this.engine.registerTrigger(r,o,e,t.name,t)};return t.data.animation.forEach(i),new hs(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){e>=0&&e<this._microtaskId?this._zone.run(()=>t(n)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(e=>{const[t,n]=e;t(n)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([t,n]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.RendererFactory2),r["\u0275\u0275inject"](Hi),r["\u0275\u0275inject"](r.NgZone))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class ds{constructor(e,t,n){this.namespaceId=e,this.delegate=t,this.engine=n,this.destroyNode=this.delegate.destroyNode?e=>t.destroyNode(e):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,!0)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){"@"==t.charAt(0)&&"@.disabled"==t?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class hs extends ds{constructor(e,t,n,r){super(t,n,r),this.factory=e,this.namespaceId=t}setProperty(e,t,n){"@"==t.charAt(0)?"."==t.charAt(1)&&"@.disabled"==t?this.disableAnimations(e,n=void 0===n||!!n):this.engine.process(this.namespaceId,e,t.substr(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if("@"==t.charAt(0)){const r=function(e){switch(e){case"body":return document.body;case"document":return document;case"window":return window;default:return e}}(e);let o=t.substr(1),i="";return"@"!=o.charAt(0)&&([o,i]=function(e){const t=e.indexOf(".");return[e.substring(0,t),e.substr(t+1)]}(o)),this.engine.listen(this.namespaceId,r,o,i,e=>{this.factory.scheduleListenerCallback(e._data||-1,n,e)})}return this.delegate.listen(e,t,n)}}let fs=(()=>{class e extends Hi{constructor(e,t,n){super(e.body,t,n)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT),r["\u0275\u0275inject"](ko),r["\u0275\u0275inject"](gi))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const ps=[{provide:ko,useFactory:function(){return"function"==typeof is()?new os:new ns}},{provide:new r.InjectionToken("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:Xr,useClass:ss},{provide:gi,useFactory:function(){return new mi}},{provide:Hi,useClass:fs},{provide:r.RendererFactory2,useFactory:function(e,t,n){return new us(e,t,n)},deps:[w,Hi,r.NgZone]}];let gs=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:ps,imports:[N]}),e})(),ms=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})(),bs=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[oe,ms]]}),e})(),ys=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[oe]]}),e})(),vs=(()=>{class e{constructor(e,t){Object(o.isPlatformServer)(t)&&!e&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(t,n=[]){return{ngModule:e,providers:t.serverLoaded?[{provide:ce,useValue:Object.assign(Object.assign({},ae),t)},{provide:ue,useValue:n,multi:!0},{provide:le,useValue:!0}]:[{provide:ce,useValue:Object.assign(Object.assign({},ae),t)},{provide:ue,useValue:n,multi:!0}]}}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](le),r["\u0275\u0275inject"](r.PLATFORM_ID))},imports:[[bs,ze,ys],bs,ze,ys]}),e})(),_s=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,Fr,vs]]}),e})(),ws=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule]]}),e})(),xs=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule]]}),e})(),Cs=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,ws,xs]]}),e})(),Es=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,Cs]]}),e})();function Ss(e){return(Ss="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ks(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Os(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ks(e,t,n[t])}))}return e}function Ds(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var js={},Is={};try{"undefined"!=typeof window&&(js=window),"undefined"!=typeof document&&(Is=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(Ia){}var As=(js.navigator||{}).userAgent,Ps=void 0===As?"":As,Ts=js,Ns=Is,Rs=!!Ns.documentElement&&!!Ns.head&&"function"==typeof Ns.addEventListener&&"function"==typeof Ns.createElement,Fs=(~Ps.indexOf("MSIE")||Ps.indexOf("Trident/"),[1,2,3,4,5,6,7,8,9,10]),Ms=Fs.concat([11,12,13,14,15,16,17,18,19,20]),Ls={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$s=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",Ls.GROUP,Ls.SWAP_OPACITY,Ls.PRIMARY,Ls.SECONDARY].concat(Fs.map((function(e){return"".concat(e,"x")}))).concat(Ms.map((function(e){return"w-".concat(e)}))),Ts.FontAwesomeConfig||{});Ns&&"function"==typeof Ns.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=Ds(e,2),n=t[1],r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Ns.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=r&&($s[n]=r)}));var Vs=Os({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},$s);Vs.autoReplaceSvg||(Vs.observeMutations=!1);var Bs=Os({},Vs);Ts.FontAwesomeConfig=Bs;var Hs=Ts||{};Hs.___FONT_AWESOME___||(Hs.___FONT_AWESOME___={}),Hs.___FONT_AWESOME___.styles||(Hs.___FONT_AWESOME___.styles={}),Hs.___FONT_AWESOME___.hooks||(Hs.___FONT_AWESOME___.hooks={}),Hs.___FONT_AWESOME___.shims||(Hs.___FONT_AWESOME___.shims=[]);var Us=Hs.___FONT_AWESOME___,zs=[];Rs&&((Ns.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ns.readyState)||Ns.addEventListener("DOMContentLoaded",(function e(){Ns.removeEventListener("DOMContentLoaded",e),zs.map((function(e){return e()}))})));var qs,Ws=function(){},Qs="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,Gs="undefined"==typeof setImmediate?setTimeout:setImmediate,Ks=[];function Zs(){for(var e=0;e<Ks.length;e++)Ks[e][0](Ks[e][1]);Ks=[],qs=!1}function Ys(e,t){Ks.push([e,t]),qs||(qs=!0,Gs(Zs,0))}function Js(e){var t=e.owner,n=t._state,r=t._data,o=e[n],i=e.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(Ia){na(i,Ia)}}Xs(i,r)||("fulfilled"===n&&ea(i,r),"rejected"===n&&na(i,r))}function Xs(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===Ss(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){n||(n=!0,t===r?ta(e,r):ea(e,r))}),(function(t){n||(n=!0,na(e,t))})),!0}}catch(Ia){return n||na(e,Ia),!0}return!1}function ea(e,t){e!==t&&Xs(e,t)||ta(e,t)}function ta(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Ys(oa,e))}function na(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Ys(ia,e))}function ra(e){e._then=e._then.forEach(Js)}function oa(e){e._state="fulfilled",ra(e)}function ia(e){e._state="rejected",ra(e),!e._handled&&Qs&&global.process.emit("unhandledRejection",e._data,e)}function sa(e){global.process.emit("rejectionHandled",e)}function aa(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof aa==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){na(t,e)}try{e((function(e){ea(t,e)}),n)}catch(Ia){n(Ia)}}(e,this)}aa.prototype={constructor:aa,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(Ws),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&Qs&&Ys(sa,this)),"fulfilled"===this._state||"rejected"===this._state?Ys(Js,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},aa.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new aa((function(t,n){var r=[],o=0;function i(e){return o++,function(n){r[e]=n,--o||t(r)}}for(var s,a=0;a<e.length;a++)(s=e[a])&&"function"==typeof s.then?s.then(i(a),n):r[a]=s;o||t(r)}))},aa.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new aa((function(t,n){for(var r,o=0;o<e.length;o++)(r=e[o])&&"function"==typeof r.then?r.then(t,n):t(r)}))},aa.resolve=function(e){return e&&"object"===Ss(e)&&e.constructor===aa?e:new aa((function(t){t(e)}))},aa.reject=function(e){return new aa((function(t,n){n(e)}))};var ca=function(e,t,n,r){var o,i,s,a=Object.keys(e),c=a.length,l=void 0!==r?function(e,t){return function(n,r,o,i){return e.call(t,n,r,o,i)}}(t,r):t;for(void 0===n?(o=1,s=e[a[0]]):(o=0,s=n);o<c;o++)s=l(s,e[i=a[o]],i,e);return s};function la(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,o=void 0!==r&&r,i=Object.keys(t).reduce((function(e,n){var r=t[n];return r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof Us.hooks.addPack||o?Us.styles[e]=Os({},Us.styles[e]||{},i):Us.hooks.addPack(e,i),"fas"===e&&la("fa",t)}var ua=Us.styles,da=Us.shims,ha=function(){var e=function(e){return ca(ua,(function(t,n,r){return t[r]=ca(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in ua;ca(da,(function(e,n){var r=n[1];return"far"!==r||t||(r="fas"),e[n[0]]={prefix:r,iconName:n[2]},e}),{})};function fa(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}ha(),(fa.prototype=Object.create(Error.prototype)).constructor=fa;var pa={fill:"currentColor"},ga={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},ma=(Os({},pa,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),Os({},ga,{attributeName:"opacity"}));Os({},pa,{cx:"256",cy:"364",r:"28"}),Os({},ga,{attributeName:"r",values:"28;14;28;28;14;28;"}),Os({},ma,{values:"1;0;1;1;0;1;"}),Os({},pa,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Os({},ma,{values:"1;0;0;0;0;1;"}),Os({},pa,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Os({},ma,{values:"0;0;1;1;0;0;"}),new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=Os({},e.definitions[t]||{},o[t]),la(t,o[t]),ha()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],o=r.prefix,i=r.iconName,s=r.icon;e[o]||(e[o]={}),e[o][i]=s})),e}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}());let ba=(()=>{let e=class{};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();n("1X/a");let ya=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-home"]],decls:24,vars:0,consts:[["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"h1"),r["\u0275\u0275text"](1,"Welcome to DontCode !"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"h2"),r["\u0275\u0275text"](3,"What am I seeing ?"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"p"),r["\u0275\u0275text"](5,"You have opened the Preview App. The Preview App connects to Online services to receive Application changes from the Application Builder in realtime."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"p"),r["\u0275\u0275elementStart"](7,"b"),r["\u0275\u0275text"](8,"Check you are connected"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](9," to the online service by looking at the "),r["\u0275\u0275element"](10,"kor-icon",0),r["\u0275\u0275text"](11," icon in the header panel."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"p"),r["\u0275\u0275element"](13,"kor-icon",0),r["\u0275\u0275text"](14," means you are ok, "),r["\u0275\u0275element"](15,"kor-icon",1),r["\u0275\u0275text"](16," you have connection issue to the online service. Please check the browser log in this case"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"p"),r["\u0275\u0275text"](18,"If "),r["\u0275\u0275element"](19,"kor-icon",0),r["\u0275\u0275text"](20,", then "),r["\u0275\u0275elementStart"](21,"b"),r["\u0275\u0275text"](22,"go back to the Application Builder"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](23," and enter some values in the Editor"),r["\u0275\u0275elementEnd"]())},styles:[""]}),e})(),va=(()=>{class e{constructor(e){this.commandService=e,this.position="creation/name",this.value="New Test"}ngOnInit(){}addCommand(e){this.commandService.pushCommand(new $.Change($.ChangeType.ADD,this.position,this.value))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](K))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-insert-command"]],decls:9,vars:2,consts:[["label","Add Command","expanded",""],["label","position","type","select",3,"value","value-changed"],["label","creation/name"],["label","creation/entities/a/name"],["label","creation/screens/a/name"],["label","creation/entities/b/name"],["label","creation/screens/b/name"],["label","value",3,"value","value-changed"],["slot","footer","label","Add",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"kor-accordion",0),r["\u0275\u0275elementStart"](1,"kor-input",1),r["\u0275\u0275listener"]("value-changed",(function(e){return t.position=e.target.value})),r["\u0275\u0275element"](2,"kor-menu-item",2),r["\u0275\u0275element"](3,"kor-menu-item",3),r["\u0275\u0275element"](4,"kor-menu-item",4),r["\u0275\u0275element"](5,"kor-menu-item",5),r["\u0275\u0275element"](6,"kor-menu-item",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"kor-input",7),r["\u0275\u0275listener"]("value-changed",(function(e){return t.value=e.target.value})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"kor-button",8),r["\u0275\u0275listener"]("click",(function(e){return t.addCommand(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("value",t.position),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("value",t.value))},styles:[""]}),e})();function _a(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275pipe"](2,"json"),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate3"]("",e.type,", ",e.position,", ",r["\u0275\u0275pipeBind1"](2,3,e.value),"")}}function wa(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"p"),r["\u0275\u0275text"](2,"We list below the commands received from the Application Builder:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,_a,3,5,"p",1),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",e.commands)}}let xa=(()=>{class e{constructor(e){this.providerService=e,this.commands=[],this.forgetIt=!0}ngOnInit(){this.context$=Object(F.b)([this.providerService.receiveCommands()]).pipe(Object(L.a)(e=>(this.forgetIt?this.forgetIt=!1:this.commands.push(e[0]),{command:e[0]})))}noCommands(){return 0==this.commands.length}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](K))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-list-commands"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,wa,4,1,"ng-container",0),r["\u0275\u0275pipe"](1,"async")),2&e&&r["\u0275\u0275property"]("ngIf",r["\u0275\u0275pipeBind1"](1,1,t.context$))},directives:[o.NgIf,o.NgForOf],pipes:[o.AsyncPipe,o.JsonPipe],styles:[""]}),e})(),Ca=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-debug-page"]],decls:3,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"preview-ui-insert-command"),r["\u0275\u0275element"](1,"kor-divider"),r["\u0275\u0275element"](2,"preview-ui-list-commands"))},directives:[va,xa],styles:[""]}),e})(),Ea=(()=>{class e{constructor(e){this.viewContainerRef=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","previewUiDynamicInsert",""]]}),e})();function Sa(e,t){}let ka=(()=>{class e{constructor(e,t,n){this.route=e,this.componentFactoryResolver=t,this.provider=n}ngOnInit(){this.screenName$=this.route.paramMap.pipe(Object(L.a)(e=>e.get("id"))),this.screenName$.pipe(Object(Xe.a)(e=>{console.log("Searching for component for route ",this.route.snapshot.url);const t=$.DontCodeModel.ROOT+"/"+this.route.snapshot.url[0];return this.loadComponent(t,e).pipe(Object(L.a)(n=>({valueId:e,position:t,component:n})))}),Object(L.a)(e=>{e.component.initCommandFlow(this.provider,e.position+"/"+e.valueId,e.position)})).subscribe(()=>{})}loadComponent(e,t){const r=$.DontCode.dtcde.getPreviewManager(),o=this.provider.getJsonAt(e+"/"+t),i=r.retrieveHandlerConfig(e+"/"+t,o);if(i)return console.log("Importing from ",i.class.source),console.log("production import using __ivy_ngcc__"),Object(qe.a)(n("ECRl")("./plugin-"+i.class.source+"/__ivy_ngcc__/fesm2015/dontcode-plugin-"+i.class.source+".js").then(e=>this.applyComponent(e,i)))}applyComponent(e,t){const n=this.componentFactoryResolver.resolveComponentFactory(e[t.class.name]),r=this.host.viewContainerRef;return r.clear(),r.createComponent(n).instance}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](gn),r["\u0275\u0275directiveInject"](r.ComponentFactoryResolver),r["\u0275\u0275directiveInject"](K))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-screen"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275staticViewQuery"](Ea,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.host=n.first)},decls:4,vars:3,consts:[["previewUiDynamicInsert",""]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,Sa,0,0,"ng-template",0)),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("screen ",r["\u0275\u0275pipeBind1"](2,1,t.screenName$)," works!"))},directives:[Ea],pipes:[o.AsyncPipe],styles:[""]}),e})();var Oa=n("ODPb");const Da=[{path:"",component:ya},{path:"dev",component:Ca},{path:"screens/:id",component:ka}];let ja=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e,bootstrap:[Jr]}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[N,gs,_s,Cs,Es,Fr.forRoot(Da,{enableTracing:!1}),ba,vs,Oa.ScreenModule]]}),e})();Object(r.enableProdMode)(),P().bootstrapModule(ja).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,1]]]);