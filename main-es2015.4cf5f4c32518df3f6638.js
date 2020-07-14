(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/vgl":function(e,t,n){"use strict";function r(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}n.d(t,"a",(function(){return r}))},0:function(e,t,n){e.exports=n("zUnb")},"1MAX":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("dUuy"),o=n("i9P/"),i=n("sWLk"),s=n("qEfY"),a=n("eY+9"),c=n("/vgl"),l=n("X0qr");const u=e=>{if(e&&"function"==typeof e[s.a])return u=e,e=>{const t=u[s.a]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(Object(a.a)(e))return Object(r.a)(e);if(Object(c.a)(e))return n=e,e=>(n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,o.a),e);if(e&&"function"==typeof e[i.a])return t=e,e=>{const n=t[i.a]();for(;;){const t=n.next();if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e};{const t=Object(l.a)(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected.`+" You can provide an Observable, Promise, Array, or Iterable.")}var t,n,u}},"1X/a":function(e,t){!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=42)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return K})),n.d(t,"e",(function(){return Z})),n.d(t,"d",(function(){return L})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne}));const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${s}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,u=0;const{strings:f,values:{length:p}}=e;for(;u<p;){const e=o.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)l(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=d.exec(f[u])[2],n=t.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const o=r.split(a);this.parts.push({type:"attribute",index:c,name:t,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const r=e.parentNode,o=t.split(a),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=h();else{const e=d.exec(i);null!==e&&l(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===o[i]?(r.insertBefore(h(),e),n.push(e)):e.data=o[i],u+=i}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&c!==s||(c++,t.insertBefore(h(),e)),s=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=r.pop()}for(const i of n)i.parentNode.removeChild(i)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let i=g(r),s=r[i],a=-1,c=0;const l=[];let u=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-c,i=g(r,i),s=r[i]}l.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},g=(e,t=-1)=>{for(let n=t+1;n<e.length;n++)if(u(e[n]))return n;return-1},m=new WeakMap,y=e=>"function"==typeof e&&m.has(e),b={},v={};class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const n of this.__parts)void 0!==n&&n.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,c=o.nextNode();for(;s<n.length;)if(i=n[s],u(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=` ${i} `;class x{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=d.exec(e);t+=null===a?e+(n?w:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const C=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let r=0;r<n.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(C(e)||!E(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===b||C(e)&&e===this.value||(this.value=e,y(e)||(this.committer.dirty=!0))}commit(){for(;y(this.value);){const e=this.value;this.value=b,e(this)}this.value!==b&&this.committer.commit()}}class D{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(h()),this.endNode=e.appendChild(h())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=h()),e.__insert(this.endNode=h())}insertAfterPart(e){e.__insert(this.startNode=h()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}const e=this.__pendingValue;e!==b&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new D(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class O{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=b}}class I extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends k{}let P=!1;(()=>{try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class j{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;y(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=b,e(this)}if(this.__pendingValue===b)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=T(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=b}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function N(e){let t=R.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},R.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const R=new Map,F=new WeakMap,M=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new I(e,t.slice(1),n).parts:"@"===o?[new j(e,t.slice(1),r.eventContext)]:"?"===o?[new O(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new D(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const L=(e,...t)=>new x(e,t,"html",M),$=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const B=e=>t=>{const n=$(t.type,e);let r=R.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},R.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(i);if(o=r.keyString.get(s),void 0===o){const n=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(n,e),o=new c(t,n),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},U=["html","svg"],H=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:q};class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=q){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.converter||z,r="function"==typeof n?n:n.fromAttribute;return r?r(e,t.type):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.converter;return(n&&n.toAttribute||z.toAttribute)(e,t.type)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;const K=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Z(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):G(e,t)}const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class X{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new X(n,J)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const te={};class ne extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=F.has(t),s=V&&11===t.nodeType&&!!t.host,a=s&&!H.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=F.get(t);void 0===r&&(o(t,t.firstChild),F.set(t,r=new D(Object.assign({templateFactory:N},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:B(r)},n)),a){const e=F.get(c);F.delete(c),((e,t,n)=>{H.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let l=0;l<i;l++){const e=o[l];e.parentNode.removeChild(e),s.textContent+=e.textContent}(e=>{U.forEach(t=>{const n=R.get($(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let s=g(o),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=p(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=g(o,s);return}s=g(o,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),f(n,e)}})(r,c,e.value instanceof _?e.value.template:void 0),o(t,t.firstChild),t.appendChild(c),F.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=n(0).b`
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
          pointer-events: none;
        }
      `]}render(){return r.d`
      <kor-card>
        <slot
          name="header"
          slot="header"
          @click="${()=>this.expanded=!this.expanded}"
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.shadowRoot.querySelector("kor-card").shadowRoot.querySelector(".top").style.padding="0"},0)}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"expanded",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyBody",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-accordion")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
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
            ${this.logo?r.d` <img class="logo" src="${this.logo}" /> `:""}
            ${this.label?r.d` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"logo",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"mobile",void 0),s=i([Object(r.c)("kor-app-bar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}getInitials(e){var t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"info",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"image",void 0),s=i([Object(r.c)("kor-avatar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          width: fit-content;
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
          height: fit-content;
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
          display: flex;
          height: fit-content;
          width: fit-content;
          border-radius: 4px;
          cursor: pointer;
          transition: var(--transition-1);
          justify-content: center;
        }
        .label {
          font-weight: bold;
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
        :host([color='primary']) .label,
        :host([color='primary'][icon]) kor-icon {
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
      ${this.icon?r.d` <kor-icon icon="${this.icon}"></kor-icon> `:r.d` <kor-text class="label">${this.label}</kor-text> `}
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
          height: fit-content;
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
          height: fit-content;
          width: fit-content;
          min-height: fit-content;
          min-width: fit-content;
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
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          -webkit-appearance: none;
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
        :host([label]:not([value]):not([active])) .label {
          margin-bottom: -16px;
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
          type="${this.type}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          pattern="${this.pattern}"
          .value="${void 0!==this.value?this.value:""}"
          @input=${e=>e.target.value?"number"!==this.type?this.value=e.target.value:"":this.removeAttribute("value")}
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
                    class="select-menu"
                    .style="top: ${this.getMenuStyles().top}; left: ${this.getMenuStyles().left}; width: ${this.getMenuStyles().width};"
                  >
                    <slot @slotchange="${e=>this.handleItems(e)}"></slot>
                  </kor-card>
                `:""}
          `:""}
    `}handleClear(){this.value=void 0,this.removeAttribute("value")}handleBlur(e){"number"===this.type&&this.validateMinMax(e.target.value),"select"!==this.type&&(this.active=!1)}handleIncrement(e){"left"===e?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)-this.step):"right"===e&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)+this.step)}handleItems(e){const t=e.target.assignedNodes();t.forEach(e=>{"KOR-MENU-ITEM"===e.tagName&&e.addEventListener("active-changed",n=>{n.target.active&&(t.forEach(e=>{e.active=!1}),n.target.active=!0,this.value=e.label,this.active=!1)})})}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"active"==e&&this.active&&"select"==this.type&&this.handleMenu()}handleMenu(){const e=this,t=(this.shadowRoot.querySelector(".select-menu"),function(n){n.target!==e&&(e.active=!1,document.removeEventListener("click",t))});document.addEventListener("click",t)}validateMinMax(e){e&&(this.value=this.min&&e<this.min?this.min:e>this.max?this.max:e)}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getMenuStyles(){return{top:this.getBoundingClientRect().top+this.scrollHeight+1+"px",left:this.getBoundingClientRect().left+"px",width:this.scrollWidth+"px"}}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"value",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"type",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"status",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),i([Object(r.e)({type:Boolean,reflect:!0,attribute:"no-clear"})],s.prototype,"noClear",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"pattern",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"min",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"max",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"step",void 0),s=i([Object(r.c)("kor-input")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[o.a,r.b`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"target"===e&&this.target?this.targetObserver():"visible"===e&&this.visible&&this.visibleObserver()}targetObserver(){let e=document.querySelector(this.target);e&&e.addEventListener("click",()=>this.handlePosition(e))}visibleObserver(){let e=document.querySelector(this.target);e&&this.handlePosition(e),!this.sticky&&this.target&&this.addDocListener(e)}handlePosition(e){if(!e)return;let t=this,n=e.getBoundingClientRect();t.visible=!0,t.style.top=t.position.startsWith("bottom")?n.top+n.height+8+"px":t.position.startsWith("top")?n.top-t.clientHeight-8+"px":n.top+n.height/2-t.clientHeight/2+"px",t.style.left=t.position.startsWith("right")?n.left+n.width+8+"px":t.position.startsWith("left")?n.left-t.clientWidth-8+"px":n.left+n.width/2-t.clientWidth/2+"px"}addDocListener(e){let t=this,n=function(r){r.target!==e&&(t.visible=!1,document.removeEventListener("click",n))};document.addEventListener("click",n)}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"target",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-popover")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="m",this.radial=!1,this.showProgress=!1}static get styles(){return[o.a,r.b`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(r.c)("kor-radio-button")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,r.b`
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
          height: fit-content;
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
          height: fit-content;
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
          width: fit-content;
          height: fit-content;
          border-radius: 4px;
        }
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(r.c)("kor-switch")],i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
        :host {
          display: flex;
          width: fit-content;
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
          color: var(--text-2);
        }
        /* horizontal */
        :host([orientation='horizontal']) {
          flex-direction: column;
          justify-content: center;
          width: fit-content;
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
          height: fit-content;
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
        :host([active]) .label,
        :host([active]) kor-icon {
          color: var(--text-1);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) .label,
          :host(:hover:not([active])) kor-icon {
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
          height: fit-content;
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
          height: fit-content;
          width: fit-content;
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
          width: fit-content;
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"target"===e&&this.target&&this.targetObserver()}targetObserver(){let e,t=document.querySelector(this.target);t&&(t.addEventListener("mouseover",()=>{e=setTimeout(()=>this.visible=!0,500)}),t.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(e)}))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"target",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-tooltip")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{static get styles(){return[o.a,r.b`
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
          background: rgba(var(--neutral-1), 0.1);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active]):not([slot='header'])) {
            background: rgba(var(--neutral-1), 0.05);
          }
          :host(:hover:not([active])):host-context(kor-table[readonly]) {
            background: transparent;
          }
        }
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.handleColumns()}handleActive(){let e,t;e=this.closest("kor-table"),e.readonly||"header"==this.slot||(t=this.parentElement.childNodes,t.forEach(e=>{e.active=!1}),this.active=!0)}handleColumns(){let e=this.closest("kor-table");this.style.gridTemplateColumns=e.columns,e.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=e.columns})}};i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),s=i([Object(r.c)("kor-table-row")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[o.a,r.b`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"grid-cols"==e&&(this.style.gridColumn="span "+this.gridCols),"sortable"==e&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){this.sorted?this.sortDirection="asc"==this.sortDirection?"desc":"asc":(this.parentElement.childNodes.forEach(e=>{e.sorted=!1}),this.sorted=!0,this.sortDirection="asc")}};i([Object(r.e)({type:Number,reflect:!0,attribute:"grid-cols"})],s.prototype,"gridCols",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"alignment",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"head",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sorted",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sortable",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"sort-direction"})],s.prototype,"sortDirection",void 0),s=i([Object(r.c)("kor-table-cell")],s)},function(e,t,n){"use strict";n.r(t);var r=n(2);n.d(t,"korAccordion",(function(){return r.a}));var o=n(3);n.d(t,"korAppBar",(function(){return o.a}));var i=n(4);n.d(t,"korAvatar",(function(){return i.a}));var s=n(5);n.d(t,"korBadge",(function(){return s.a}));var a=n(6);n.d(t,"korBreadcrumbs",(function(){return a.a}));var c=n(7);n.d(t,"korBreadcrumbItem",(function(){return c.a}));var l=n(8);n.d(t,"korButton",(function(){return l.a}));var u=n(9);n.d(t,"korCard",(function(){return u.a}));var h=n(10);n.d(t,"korCheckbox",(function(){return h.a}));var d=n(11);n.d(t,"korDivider",(function(){return d.a}));var f=n(12);n.d(t,"korDrawer",(function(){return f.a}));var p=n(13);n.d(t,"korEmptyState",(function(){return p.a}));var g=n(14);n.d(t,"korGrid",(function(){return g.a}));var m=n(15);n.d(t,"korIcon",(function(){return m.a}));var y=n(16);n.d(t,"korInput",(function(){return y.a}));var b=n(17);n.d(t,"korMenuItem",(function(){return b.a}));var v=n(18);n.d(t,"korModal",(function(){return v.a}));var _=n(19);n.d(t,"korNavbar",(function(){return _.a}));var w=n(20);n.d(t,"korNotifications",(function(){return w.a}));var x=n(21);n.d(t,"korNotificationItem",(function(){return x.a}));var C=n(22);n.d(t,"korPage",(function(){return C.a}));var E=n(23);n.d(t,"korPane",(function(){return E.a}));var S=n(24);n.d(t,"korPopover",(function(){return S.a}));var k=n(25);n.d(t,"korProgressBar",(function(){return k.a}));var D=n(26);n.d(t,"korRadioButton",(function(){return D.a}));var O=n(27);n.d(t,"korSpinner",(function(){return O.a}));var I=n(28);n.d(t,"korStepper",(function(){return I.a}));var A=n(29);n.d(t,"korStepperItem",(function(){return A.a}));var P=n(30);n.d(t,"korSwitch",(function(){return P.a}));var j=n(31);n.d(t,"korSwitchItem",(function(){return j.a}));var T=n(32);n.d(t,"korTabItem",(function(){return T.a}));var N=n(33);n.d(t,"korTable",(function(){return N.a}));var R=n(40);n.d(t,"korTableRow",(function(){return R.a}));var F=n(41);n.d(t,"korTableCell",(function(){return F.a}));var M=n(34);n.d(t,"korTabs",(function(){return M.a}));var L=n(35);n.d(t,"korTag",(function(){return L.a}));var $=n(36);n.d(t,"korText",(function(){return $.a}));var V=n(37);n.d(t,"korToggle",(function(){return V.a}));var B=n(38);n.d(t,"korTool",(function(){return B.a}));var U=n(39);n.d(t,"korTooltip",(function(){return U.a}))}])},"25CY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())()},"2kYt":function(e,t,n){"use strict";n.r(t),n.d(t,"APP_BASE_HREF",(function(){return _})),n.d(t,"AsyncPipe",(function(){return et})),n.d(t,"CommonModule",(function(){return vt})),n.d(t,"CurrencyPipe",(function(){return pt})),n.d(t,"DOCUMENT",(function(){return c})),n.d(t,"DatePipe",(function(){return it})),n.d(t,"DecimalPipe",(function(){return dt})),n.d(t,"FormStyle",(function(){return I})),n.d(t,"FormatWidth",(function(){return P})),n.d(t,"HashLocationStrategy",(function(){return x})),n.d(t,"I18nPluralPipe",(function(){return at})),n.d(t,"I18nSelectPipe",(function(){return ct})),n.d(t,"JsonPipe",(function(){return lt})),n.d(t,"KeyValuePipe",(function(){return ut})),n.d(t,"LOCATION_INITIALIZED",(function(){return h})),n.d(t,"Location",(function(){return C})),n.d(t,"LocationStrategy",(function(){return b})),n.d(t,"LowerCasePipe",(function(){return tt})),n.d(t,"NgClass",(function(){return je})),n.d(t,"NgComponentOutlet",(function(){return Te})),n.d(t,"NgForOf",(function(){return Re})),n.d(t,"NgForOfContext",(function(){return Ne})),n.d(t,"NgIf",(function(){return Me})),n.d(t,"NgIfContext",(function(){return Le})),n.d(t,"NgLocaleLocalization",(function(){return Ie})),n.d(t,"NgLocalization",(function(){return De})),n.d(t,"NgPlural",(function(){return ze})),n.d(t,"NgPluralCase",(function(){return qe})),n.d(t,"NgStyle",(function(){return We})),n.d(t,"NgSwitch",(function(){return Be})),n.d(t,"NgSwitchCase",(function(){return Ue})),n.d(t,"NgSwitchDefault",(function(){return He})),n.d(t,"NgTemplateOutlet",(function(){return Qe})),n.d(t,"NumberFormatStyle",(function(){return D})),n.d(t,"NumberSymbol",(function(){return j})),n.d(t,"PathLocationStrategy",(function(){return w})),n.d(t,"PercentPipe",(function(){return ft})),n.d(t,"PlatformLocation",(function(){return l})),n.d(t,"Plural",(function(){return O})),n.d(t,"SlicePipe",(function(){return yt})),n.d(t,"TitleCasePipe",(function(){return rt})),n.d(t,"TranslationWidth",(function(){return A})),n.d(t,"UpperCasePipe",(function(){return ot})),n.d(t,"VERSION",(function(){return Ot})),n.d(t,"ViewportScroller",(function(){return It})),n.d(t,"WeekDay",(function(){return T})),n.d(t,"formatCurrency",(function(){return xe})),n.d(t,"formatDate",(function(){return ue})),n.d(t,"formatNumber",(function(){return Ee})),n.d(t,"formatPercent",(function(){return Ce})),n.d(t,"getCurrencySymbol",(function(){return ne})),n.d(t,"getLocaleCurrencyCode",(function(){return K})),n.d(t,"getLocaleCurrencyName",(function(){return Q})),n.d(t,"getLocaleCurrencySymbol",(function(){return W})),n.d(t,"getLocaleDateFormat",(function(){return B})),n.d(t,"getLocaleDateTimeFormat",(function(){return H})),n.d(t,"getLocaleDayNames",(function(){return F})),n.d(t,"getLocaleDayPeriods",(function(){return R})),n.d(t,"getLocaleDirection",(function(){return X})),n.d(t,"getLocaleEraNames",(function(){return L})),n.d(t,"getLocaleExtraDayPeriodRules",(function(){return Y})),n.d(t,"getLocaleExtraDayPeriods",(function(){return J})),n.d(t,"getLocaleFirstDayOfWeek",(function(){return $})),n.d(t,"getLocaleId",(function(){return N})),n.d(t,"getLocaleMonthNames",(function(){return M})),n.d(t,"getLocaleNumberFormat",(function(){return q})),n.d(t,"getLocaleNumberSymbol",(function(){return z})),n.d(t,"getLocalePluralCase",(function(){return G})),n.d(t,"getLocaleTimeFormat",(function(){return U})),n.d(t,"getLocaleWeekEndRange",(function(){return V})),n.d(t,"getNumberOfCurrencyDigits",(function(){return re})),n.d(t,"isPlatformBrowser",(function(){return Et})),n.d(t,"isPlatformServer",(function(){return St})),n.d(t,"isPlatformWorkerApp",(function(){return kt})),n.d(t,"isPlatformWorkerUi",(function(){return Dt})),n.d(t,"registerLocaleData",(function(){return Ae})),n.d(t,"\u0275BrowserPlatformLocation",(function(){return d})),n.d(t,"\u0275DomAdapter",(function(){return a})),n.d(t,"\u0275NullViewportScroller",(function(){return Pt})),n.d(t,"\u0275PLATFORM_BROWSER_ID",(function(){return _t})),n.d(t,"\u0275PLATFORM_SERVER_ID",(function(){return wt})),n.d(t,"\u0275PLATFORM_WORKER_APP_ID",(function(){return xt})),n.d(t,"\u0275PLATFORM_WORKER_UI_ID",(function(){return Ct})),n.d(t,"\u0275angular_packages_common_common_a",(function(){return u})),n.d(t,"\u0275angular_packages_common_common_b",(function(){return p})),n.d(t,"\u0275angular_packages_common_common_c",(function(){return E})),n.d(t,"\u0275angular_packages_common_common_d",(function(){return v})),n.d(t,"\u0275angular_packages_common_common_e",(function(){return Ke})),n.d(t,"\u0275angular_packages_common_common_f",(function(){return bt})),n.d(t,"\u0275getDOM",(function(){return i})),n.d(t,"\u0275parseCookieValue",(function(){return Pe})),n.d(t,"\u0275setRootDomAdapter",(function(){return s}));var r=n("EM62");let o=null;function i(){return o}function s(e){o||(o=e)}class a{}const c=new r.InjectionToken("DocumentToken");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:u,token:e,providedIn:"platform"}),e})();function u(){return Object(r["\u0275\u0275inject"])(d)}const h=new r.InjectionToken("Location Initialized");let d=(()=>{class e extends l{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=i().getLocation(),this._history=i().getHistory()}getBaseHrefFromDOM(){return i().getBaseHref(this._doc)}onPopState(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)}onHashChange(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,t,n){f()?this._history.pushState(e,t,n):this.location.hash=n}replaceState(e,t,n){f()?this._history.replaceState(e,t,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](c))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:p,token:e,providedIn:"platform"}),e})();function f(){return!!window.history.pushState}function p(){return new d(Object(r["\u0275\u0275inject"])(c))}function g(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function m(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function y(e){return e&&"?"!==e[0]?"?"+e:e}let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:v,token:e,providedIn:"root"}),e})();function v(e){const t=Object(r["\u0275\u0275inject"])(c).location;return new w(Object(r["\u0275\u0275inject"])(l),t&&t.origin||"")}const _=new r.InjectionToken("appBaseHref");let w=(()=>{class e extends b{constructor(e,t){if(super(),this._platformLocation=e,null==t&&(t=this._platformLocation.getBaseHrefFromDOM()),null==t)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=t}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return g(this._baseHref,e)}path(e=!1){const t=this._platformLocation.pathname+y(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${t}${n}`:t}pushState(e,t,n,r){const o=this.prepareExternalUrl(n+y(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){const o=this.prepareExternalUrl(n+y(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](l),r["\u0275\u0275inject"](_,8))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e extends b{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",null!=t&&(this._baseHref=t)}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t}prepareExternalUrl(e){const t=g(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,n,r){let o=this.prepareExternalUrl(n+y(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){let o=this.prepareExternalUrl(n+y(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](l),r["\u0275\u0275inject"](_,8))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),C=(()=>{class e{constructor(e,t){this._subject=new r.EventEmitter,this._urlChangeListeners=[],this._platformStrategy=e;const n=this._platformStrategy.getBaseHref();this._platformLocation=t,this._baseHref=m(S(n)),this._platformStrategy.onPopState(e=>{this._subject.emit({url:this.path(!0),pop:!0,state:e.state,type:e.type})})}path(e=!1){return this.normalize(this._platformStrategy.path(e))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+y(t))}normalize(t){return e.stripTrailingSlash(function(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,S(t)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}go(e,t="",n=null){this._platformStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+y(t)),n)}replaceState(e,t="",n=null){this._platformStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+y(t)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(e){this._urlChangeListeners.push(e),this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)})}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(n=>n(e,t))}subscribe(e,t,n){return this._subject.subscribe({next:e,error:t,complete:n})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](b),r["\u0275\u0275inject"](l))},e.normalizeQueryParams=y,e.joinWithSlash=g,e.stripTrailingSlash=m,e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:E,token:e,providedIn:"root"}),e})();function E(){return new C(Object(r["\u0275\u0275inject"])(b),Object(r["\u0275\u0275inject"])(l))}function S(e){return e.replace(/\/index.html$/,"")}const k={ADP:[void 0,void 0,0],AFN:[void 0,void 0,0],ALL:[void 0,void 0,0],AMD:[void 0,void 0,2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09f3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,"\u0440.",2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xa5","\xa5"],COP:[void 0,"$",2],CRC:[void 0,"\u20a1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010d",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xa3"],ESP:[void 0,"\u20a7",0],EUR:["\u20ac"],FJD:[void 0,"$"],FKP:[void 0,"\xa3"],GBP:["\xa3"],GEL:[void 0,"\u20be"],GIP:[void 0,"\xa3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20aa"],INR:["\u20b9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xa5",void 0,0],KHR:[void 0,"\u17db"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20a9",0],KRW:["\u20a9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20b8"],LAK:[void 0,"\u20ad",0],LBP:[void 0,"L\xa3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20ae",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20a6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:[void 0,"\u20b1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20b2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20bd"],RUR:[void 0,"\u0440."],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xa3"],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xa3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xa3",0],THB:[void 0,"\u0e3f"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20ba"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20b4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20ab",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["CFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xa4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},D=function(){var e={Decimal:0,Percent:1,Currency:2,Scientific:3};return e[e.Decimal]="Decimal",e[e.Percent]="Percent",e[e.Currency]="Currency",e[e.Scientific]="Scientific",e}(),O=function(){var e={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};return e[e.Zero]="Zero",e[e.One]="One",e[e.Two]="Two",e[e.Few]="Few",e[e.Many]="Many",e[e.Other]="Other",e}(),I=function(){var e={Format:0,Standalone:1};return e[e.Format]="Format",e[e.Standalone]="Standalone",e}(),A=function(){var e={Narrow:0,Abbreviated:1,Wide:2,Short:3};return e[e.Narrow]="Narrow",e[e.Abbreviated]="Abbreviated",e[e.Wide]="Wide",e[e.Short]="Short",e}(),P=function(){var e={Short:0,Medium:1,Long:2,Full:3};return e[e.Short]="Short",e[e.Medium]="Medium",e[e.Long]="Long",e[e.Full]="Full",e}(),j=function(){var e={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};return e[e.Decimal]="Decimal",e[e.Group]="Group",e[e.List]="List",e[e.PercentSign]="PercentSign",e[e.PlusSign]="PlusSign",e[e.MinusSign]="MinusSign",e[e.Exponential]="Exponential",e[e.SuperscriptingExponent]="SuperscriptingExponent",e[e.PerMille]="PerMille",e[e.Infinity]="Infinity",e[e.NaN]="NaN",e[e.TimeSeparator]="TimeSeparator",e[e.CurrencyDecimal]="CurrencyDecimal",e[e.CurrencyGroup]="CurrencyGroup",e}(),T=function(){var e={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6};return e[e.Sunday]="Sunday",e[e.Monday]="Monday",e[e.Tuesday]="Tuesday",e[e.Wednesday]="Wednesday",e[e.Thursday]="Thursday",e[e.Friday]="Friday",e[e.Saturday]="Saturday",e}();function N(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].LocaleId]}function R(e,t,n){const o=Object(r["\u0275findLocaleData"])(e),i=ee([o[r["\u0275LocaleDataIndex"].DayPeriodsFormat],o[r["\u0275LocaleDataIndex"].DayPeriodsStandalone]],t);return ee(i,n)}function F(e,t,n){const o=Object(r["\u0275findLocaleData"])(e),i=ee([o[r["\u0275LocaleDataIndex"].DaysFormat],o[r["\u0275LocaleDataIndex"].DaysStandalone]],t);return ee(i,n)}function M(e,t,n){const o=Object(r["\u0275findLocaleData"])(e),i=ee([o[r["\u0275LocaleDataIndex"].MonthsFormat],o[r["\u0275LocaleDataIndex"].MonthsStandalone]],t);return ee(i,n)}function L(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].Eras],t)}function $(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].FirstDayOfWeek]}function V(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].WeekendRange]}function B(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].DateFormat],t)}function U(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].TimeFormat],t)}function H(e,t){return ee(Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].DateTimeFormat],t)}function z(e,t){const n=Object(r["\u0275findLocaleData"])(e),o=n[r["\u0275LocaleDataIndex"].NumberSymbols][t];if(void 0===o){if(t===j.CurrencyDecimal)return n[r["\u0275LocaleDataIndex"].NumberSymbols][j.Decimal];if(t===j.CurrencyGroup)return n[r["\u0275LocaleDataIndex"].NumberSymbols][j.Group]}return o}function q(e,t){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].NumberFormats][t]}function W(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].CurrencySymbol]||null}function Q(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].CurrencyName]||null}function K(e){return Object(r["\u0275getLocaleCurrencyCode"])(e)}const G=r["\u0275getLocalePluralCase"];function Z(e){if(!e[r["\u0275LocaleDataIndex"].ExtraData])throw new Error(`Missing extra locale data for the locale "${e[r["\u0275LocaleDataIndex"].LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function Y(e){const t=Object(r["\u0275findLocaleData"])(e);return Z(t),(t[r["\u0275LocaleDataIndex"].ExtraData][2]||[]).map(e=>"string"==typeof e?te(e):[te(e[0]),te(e[1])])}function J(e,t,n){const o=Object(r["\u0275findLocaleData"])(e);Z(o);const i=ee([o[r["\u0275LocaleDataIndex"].ExtraData][0],o[r["\u0275LocaleDataIndex"].ExtraData][1]],t)||[];return ee(i,n)||[]}function X(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].Directionality]}function ee(e,t){for(let n=t;n>-1;n--)if(void 0!==e[n])return e[n];throw new Error("Locale data API: locale data undefined")}function te(e){const[t,n]=e.split(":");return{hours:+t,minutes:+n}}function ne(e,t,n="en"){const o=function(e){return Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].Currencies]}(n)[e]||k[e]||[],i=o[1];return"narrow"===t&&"string"==typeof i?i:o[0]||e}function re(e){let t;const n=k[e];return n&&(t=n[2]),"number"==typeof t?t:2}const oe=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,ie={},se=/((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,ae=function(){var e={Short:0,ShortGMT:1,Long:2,Extended:3};return e[e.Short]="Short",e[e.ShortGMT]="ShortGMT",e[e.Long]="Long",e[e.Extended]="Extended",e}(),ce=function(){var e={FullYear:0,Month:1,Date:2,Hours:3,Minutes:4,Seconds:5,FractionalSeconds:6,Day:7};return e[e.FullYear]="FullYear",e[e.Month]="Month",e[e.Date]="Date",e[e.Hours]="Hours",e[e.Minutes]="Minutes",e[e.Seconds]="Seconds",e[e.FractionalSeconds]="FractionalSeconds",e[e.Day]="Day",e}(),le=function(){var e={DayPeriods:0,Days:1,Months:2,Eras:3};return e[e.DayPeriods]="DayPeriods",e[e.Days]="Days",e[e.Months]="Months",e[e.Eras]="Eras",e}();function ue(e,t,n,r){let o=function(e){if(ve(e))return e;if("number"==typeof e&&!isNaN(e))return new Date(e);if("string"==typeof e){e=e.trim();const t=parseFloat(e);if(!isNaN(e-t))return new Date(t);if(/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)){const[t,n,r]=e.split("-").map(e=>+e);return new Date(t,n-1,r)}let n;if(n=e.match(oe))return function(e){const t=new Date(0);let n=0,r=0;const o=e[8]?t.setUTCFullYear:t.setFullYear,i=e[8]?t.setUTCHours:t.setHours;e[9]&&(n=Number(e[9]+e[10]),r=Number(e[9]+e[11])),o.call(t,Number(e[1]),Number(e[2])-1,Number(e[3]));const s=Number(e[4]||0)-n,a=Number(e[5]||0)-r,c=Number(e[6]||0),l=Math.round(1e3*parseFloat("0."+(e[7]||0)));return i.call(t,s,a,c,l),t}(n)}const t=new Date(e);if(!ve(t))throw new Error(`Unable to convert "${e}" into a date`);return t}(e);t=function e(t,n){const r=N(t);if(ie[r]=ie[r]||{},ie[r][n])return ie[r][n];let o="";switch(n){case"shortDate":o=B(t,P.Short);break;case"mediumDate":o=B(t,P.Medium);break;case"longDate":o=B(t,P.Long);break;case"fullDate":o=B(t,P.Full);break;case"shortTime":o=U(t,P.Short);break;case"mediumTime":o=U(t,P.Medium);break;case"longTime":o=U(t,P.Long);break;case"fullTime":o=U(t,P.Full);break;case"short":const n=e(t,"shortTime"),r=e(t,"shortDate");o=he(H(t,P.Short),[n,r]);break;case"medium":const i=e(t,"mediumTime"),s=e(t,"mediumDate");o=he(H(t,P.Medium),[i,s]);break;case"long":const a=e(t,"longTime"),c=e(t,"longDate");o=he(H(t,P.Long),[a,c]);break;case"full":const l=e(t,"fullTime"),u=e(t,"fullDate");o=he(H(t,P.Full),[l,u])}return o&&(ie[r][n]=o),o}(n,t)||t;let i,s=[];for(;t;){if(i=se.exec(t),!i){s.push(t);break}{s=s.concat(i.slice(1));const e=s.pop();if(!e)break;t=e}}let a=o.getTimezoneOffset();r&&(a=be(r,a),o=function(e,t,n){const r=e.getTimezoneOffset();return function(e,t){return(e=new Date(e.getTime())).setMinutes(e.getMinutes()+t),e}(e,-1*(be(t,r)-r))}(o,r));let c="";return s.forEach(e=>{const t=function(e){if(ye[e])return ye[e];let t;switch(e){case"G":case"GG":case"GGG":t=pe(le.Eras,A.Abbreviated);break;case"GGGG":t=pe(le.Eras,A.Wide);break;case"GGGGG":t=pe(le.Eras,A.Narrow);break;case"y":t=fe(ce.FullYear,1,0,!1,!0);break;case"yy":t=fe(ce.FullYear,2,0,!0,!0);break;case"yyy":t=fe(ce.FullYear,3,0,!1,!0);break;case"yyyy":t=fe(ce.FullYear,4,0,!1,!0);break;case"M":case"L":t=fe(ce.Month,1,1);break;case"MM":case"LL":t=fe(ce.Month,2,1);break;case"MMM":t=pe(le.Months,A.Abbreviated);break;case"MMMM":t=pe(le.Months,A.Wide);break;case"MMMMM":t=pe(le.Months,A.Narrow);break;case"LLL":t=pe(le.Months,A.Abbreviated,I.Standalone);break;case"LLLL":t=pe(le.Months,A.Wide,I.Standalone);break;case"LLLLL":t=pe(le.Months,A.Narrow,I.Standalone);break;case"w":t=me(1);break;case"ww":t=me(2);break;case"W":t=me(1,!0);break;case"d":t=fe(ce.Date,1);break;case"dd":t=fe(ce.Date,2);break;case"E":case"EE":case"EEE":t=pe(le.Days,A.Abbreviated);break;case"EEEE":t=pe(le.Days,A.Wide);break;case"EEEEE":t=pe(le.Days,A.Narrow);break;case"EEEEEE":t=pe(le.Days,A.Short);break;case"a":case"aa":case"aaa":t=pe(le.DayPeriods,A.Abbreviated);break;case"aaaa":t=pe(le.DayPeriods,A.Wide);break;case"aaaaa":t=pe(le.DayPeriods,A.Narrow);break;case"b":case"bb":case"bbb":t=pe(le.DayPeriods,A.Abbreviated,I.Standalone,!0);break;case"bbbb":t=pe(le.DayPeriods,A.Wide,I.Standalone,!0);break;case"bbbbb":t=pe(le.DayPeriods,A.Narrow,I.Standalone,!0);break;case"B":case"BB":case"BBB":t=pe(le.DayPeriods,A.Abbreviated,I.Format,!0);break;case"BBBB":t=pe(le.DayPeriods,A.Wide,I.Format,!0);break;case"BBBBB":t=pe(le.DayPeriods,A.Narrow,I.Format,!0);break;case"h":t=fe(ce.Hours,1,-12);break;case"hh":t=fe(ce.Hours,2,-12);break;case"H":t=fe(ce.Hours,1);break;case"HH":t=fe(ce.Hours,2);break;case"m":t=fe(ce.Minutes,1);break;case"mm":t=fe(ce.Minutes,2);break;case"s":t=fe(ce.Seconds,1);break;case"ss":t=fe(ce.Seconds,2);break;case"S":t=fe(ce.FractionalSeconds,1);break;case"SS":t=fe(ce.FractionalSeconds,2);break;case"SSS":t=fe(ce.FractionalSeconds,3);break;case"Z":case"ZZ":case"ZZZ":t=ge(ae.Short);break;case"ZZZZZ":t=ge(ae.Extended);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":t=ge(ae.ShortGMT);break;case"OOOO":case"ZZZZ":case"zzzz":t=ge(ae.Long);break;default:return null}return ye[e]=t,t}(e);c+=t?t(o,n,a):"''"===e?"'":e.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function he(e,t){return t&&(e=e.replace(/\{([^}]+)}/g,(function(e,n){return null!=t&&n in t?t[n]:e}))),e}function de(e,t,n="-",r,o){let i="";(e<0||o&&e<=0)&&(o?e=1-e:(e=-e,i=n));let s=String(e);for(;s.length<t;)s="0"+s;return r&&(s=s.substr(s.length-t)),i+s}function fe(e,t,n=0,r=!1,o=!1){return function(i,s){let a=function(e,t){switch(e){case ce.FullYear:return t.getFullYear();case ce.Month:return t.getMonth();case ce.Date:return t.getDate();case ce.Hours:return t.getHours();case ce.Minutes:return t.getMinutes();case ce.Seconds:return t.getSeconds();case ce.FractionalSeconds:return t.getMilliseconds();case ce.Day:return t.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}(e,i);if((n>0||a>-n)&&(a+=n),e===ce.Hours)0===a&&-12===n&&(a=12);else if(e===ce.FractionalSeconds)return c=t,de(a,3).substr(0,c);var c;const l=z(s,j.MinusSign);return de(a,t,l,r,o)}}function pe(e,t,n=I.Format,r=!1){return function(o,i){return function(e,t,n,r,o,i){switch(n){case le.Months:return M(t,o,r)[e.getMonth()];case le.Days:return F(t,o,r)[e.getDay()];case le.DayPeriods:const s=e.getHours(),a=e.getMinutes();if(i){const e=Y(t),n=J(t,o,r);let i;if(e.forEach((e,t)=>{if(Array.isArray(e)){const{hours:r,minutes:o}=e[0],{hours:c,minutes:l}=e[1];s>=r&&a>=o&&(s<c||s===c&&a<l)&&(i=n[t])}else{const{hours:r,minutes:o}=e;r===s&&o===a&&(i=n[t])}}),i)return i}return R(t,o,r)[s<12?0:1];case le.Eras:return L(t,r)[e.getFullYear()<=0?0:1];default:throw new Error(`unexpected translation type ${n}`)}}(o,i,e,t,n,r)}}function ge(e){return function(t,n,r){const o=-1*r,i=z(n,j.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(e){case ae.Short:return(o>=0?"+":"")+de(s,2,i)+de(Math.abs(o%60),2,i);case ae.ShortGMT:return"GMT"+(o>=0?"+":"")+de(s,1,i);case ae.Long:return"GMT"+(o>=0?"+":"")+de(s,2,i)+":"+de(Math.abs(o%60),2,i);case ae.Extended:return 0===r?"Z":(o>=0?"+":"")+de(s,2,i)+":"+de(Math.abs(o%60),2,i);default:throw new Error(`Unknown zone width "${e}"`)}}}function me(e,t=!1){return function(n,r){let o;if(t){const e=new Date(n.getFullYear(),n.getMonth(),1).getDay()-1,t=n.getDate();o=1+Math.floor((t+e)/7)}else{const e=function(e){const t=new Date(e,0,1).getDay();return new Date(e,0,1+(t<=4?4:11)-t)}(n.getFullYear()),t=(i=n,new Date(i.getFullYear(),i.getMonth(),i.getDate()+(4-i.getDay()))).getTime()-e.getTime();o=1+Math.round(t/6048e5)}var i;return de(o,e,z(r,j.MinusSign))}}const ye={};function be(e,t){e=e.replace(/:/g,"");const n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(n)?t:n}function ve(e){return e instanceof Date&&!isNaN(e.valueOf())}const _e=/^(\d+)?\.((\d+)(-(\d+))?)?$/;function we(e,t,n,r,o,i,s=!1){let a="",c=!1;if(isFinite(e)){let l=function(e){let t,n,r,o,i,s=Math.abs(e)+"",a=0;for((n=s.indexOf("."))>-1&&(s=s.replace(".","")),(r=s.search(/e/i))>0?(n<0&&(n=r),n+=+s.slice(r+1),s=s.substring(0,r)):n<0&&(n=s.length),r=0;"0"===s.charAt(r);r++);if(r===(i=s.length))t=[0],n=1;else{for(i--;"0"===s.charAt(i);)i--;for(n-=r,t=[],o=0;r<=i;r++,o++)t[o]=Number(s.charAt(r))}return n>22&&(t=t.splice(0,21),a=n-1,n=1),{digits:t,exponent:a,integerLen:n}}(e);s&&(l=function(e){if(0===e.digits[0])return e;const t=e.digits.length-e.integerLen;return e.exponent?e.exponent+=2:(0===t?e.digits.push(0,0):1===t&&e.digits.push(0),e.integerLen+=2),e}(l));let u=t.minInt,h=t.minFrac,d=t.maxFrac;if(i){const e=i.match(_e);if(null===e)throw new Error(`${i} is not a valid digit info`);const t=e[1],n=e[3],r=e[5];null!=t&&(u=ke(t)),null!=n&&(h=ke(n)),null!=r?d=ke(r):null!=n&&h>d&&(d=h)}!function(e,t,n){if(t>n)throw new Error(`The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`);let r=e.digits,o=r.length-e.integerLen;const i=Math.min(Math.max(t,o),n);let s=i+e.integerLen,a=r[s];if(s>0){r.splice(Math.max(e.integerLen,s));for(let e=s;e<r.length;e++)r[e]=0}else{o=Math.max(0,o),e.integerLen=1,r.length=Math.max(1,s=i+1),r[0]=0;for(let e=1;e<s;e++)r[e]=0}if(a>=5)if(s-1<0){for(let t=0;t>s;t--)r.unshift(0),e.integerLen++;r.unshift(1),e.integerLen++}else r[s-1]++;for(;o<Math.max(0,i);o++)r.push(0);let c=0!==i;const l=t+e.integerLen,u=r.reduceRight((function(e,t,n,r){return r[n]=(t+=e)<10?t:t-10,c&&(0===r[n]&&n>=l?r.pop():c=!1),t>=10?1:0}),0);u&&(r.unshift(u),e.integerLen++)}(l,h,d);let f=l.digits,p=l.integerLen;const g=l.exponent;let m=[];for(c=f.every(e=>!e);p<u;p++)f.unshift(0);for(;p<0;p++)f.unshift(0);p>0?m=f.splice(p,f.length):(m=f,f=[0]);const y=[];for(f.length>=t.lgSize&&y.unshift(f.splice(-t.lgSize,f.length).join(""));f.length>t.gSize;)y.unshift(f.splice(-t.gSize,f.length).join(""));f.length&&y.unshift(f.join("")),a=y.join(z(n,r)),m.length&&(a+=z(n,o)+m.join("")),g&&(a+=z(n,j.Exponential)+"+"+g)}else a=z(n,j.Infinity);return a=e<0&&!c?t.negPre+a+t.negSuf:t.posPre+a+t.posSuf,a}function xe(e,t,n,r,o){const i=Se(q(t,D.Currency),z(t,j.MinusSign));return i.minFrac=re(r),i.maxFrac=i.minFrac,we(e,i,t,j.CurrencyGroup,j.CurrencyDecimal,o).replace("\xa4",n).replace("\xa4","").trim()}function Ce(e,t,n){return we(e,Se(q(t,D.Percent),z(t,j.MinusSign)),t,j.Group,j.Decimal,n,!0).replace(new RegExp("%","g"),z(t,j.PercentSign))}function Ee(e,t,n){return we(e,Se(q(t,D.Decimal),z(t,j.MinusSign)),t,j.Group,j.Decimal,n)}function Se(e,t="-"){const n={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},r=e.split(";"),o=r[0],i=r[1],s=-1!==o.indexOf(".")?o.split("."):[o.substring(0,o.lastIndexOf("0")+1),o.substring(o.lastIndexOf("0")+1)],a=s[0],c=s[1]||"";n.posPre=a.substr(0,a.indexOf("#"));for(let u=0;u<c.length;u++){const e=c.charAt(u);"0"===e?n.minFrac=n.maxFrac=u+1:"#"===e?n.maxFrac=u+1:n.posSuf+=e}const l=a.split(",");if(n.gSize=l[1]?l[1].length:0,n.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,i){const e=o.length-n.posPre.length-n.posSuf.length,t=i.indexOf("#");n.negPre=i.substr(0,t).replace(/'/g,""),n.negSuf=i.substr(t+e).replace(/'/g,"")}else n.negPre=t+n.posPre,n.negSuf=n.posSuf;return n}function ke(e){const t=parseInt(e);if(isNaN(t))throw new Error("Invalid integer literal when parsing "+e);return t}class De{}function Oe(e,t,n,r){let o=`=${e}`;if(t.indexOf(o)>-1)return o;if(o=n.getPluralCategory(e,r),t.indexOf(o)>-1)return o;if(t.indexOf("other")>-1)return"other";throw new Error(`No plural message found for value "${e}"`)}let Ie=(()=>{class e extends De{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(G(t||this.locale)(e)){case O.Zero:return"zero";case O.One:return"one";case O.Two:return"two";case O.Few:return"few";case O.Many:return"many";default:return"other"}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.LOCALE_ID))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function Ae(e,t,n){return Object(r["\u0275registerLocaleData"])(e,t,n)}function Pe(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const e=n.indexOf("="),[r,o]=-1==e?[n,""]:[n.slice(0,e),n.slice(e+1)];if(r.trim()===t)return decodeURIComponent(o)}return null}let je=(()=>{class e{constructor(e,t,n,r){this._iterableDiffers=e,this._keyValueDiffers=t,this._ngEl=n,this._renderer=r,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Object(r["\u0275isListLikeIterable"])(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachChangedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachRemovedItem(e=>{e.previousValue&&this._toggleClass(e.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(e=>{if("string"!=typeof e.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${Object(r["\u0275stringify"])(e.item)}`);this._toggleClass(e.item,!0)}),e.forEachRemovedItem(e=>this._toggleClass(e.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!0)):Object.keys(e).forEach(t=>this._toggleClass(t,!!e[t])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!1)):Object.keys(e).forEach(e=>this._toggleClass(e,!1)))}_toggleClass(e,t){(e=e.trim())&&e.split(/\s+/g).forEach(e=>{t?this._renderer.addClass(this._ngEl.nativeElement,e):this._renderer.removeClass(this._ngEl.nativeElement,e)})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.IterableDiffers),r["\u0275\u0275directiveInject"](r.KeyValueDiffers),r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](r.Renderer2))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),e})(),Te=(()=>{class e{constructor(e){this._viewContainerRef=e,this._componentRef=null,this._moduleRef=null}ngOnChanges(e){if(this._viewContainerRef.clear(),this._componentRef=null,this.ngComponentOutlet){const t=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;if(e.ngComponentOutletNgModuleFactory)if(this._moduleRef&&this._moduleRef.destroy(),this.ngComponentOutletNgModuleFactory){const e=t.get(r.NgModuleRef);this._moduleRef=this.ngComponentOutletNgModuleFactory.create(e.injector)}else this._moduleRef=null;const n=(this._moduleRef?this._moduleRef.componentFactoryResolver:t.get(r.ComponentFactoryResolver)).resolveComponentFactory(this.ngComponentOutlet);this._componentRef=this._viewContainerRef.createComponent(n,this._viewContainerRef.length,t,this.ngComponentOutletContent)}}ngOnDestroy(){this._moduleRef&&this._moduleRef.destroy()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},features:[r["\u0275\u0275NgOnChangesFeature"]]}),e})();class Ne{constructor(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Re=(()=>{class e{constructor(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){Object(r.isDevMode)()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. `+"See https://angular.io/api/common/NgForOf#change-propagation for more information."),this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(t){throw new Error(`Cannot find a differ supporting object '${n}' of type '${e=n,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)}}var e;if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=[];e.forEachOperation((e,n,r)=>{if(null==e.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new Ne(null,this._ngForOf,-1,-1),null===r?void 0:r),o=new Fe(e,n);t.push(o)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const o=this._viewContainer.get(n);this._viewContainer.move(o,r);const i=new Fe(e,o);t.push(i)}});for(let n=0;n<t.length;n++)this._perViewChange(t[n].view,t[n].record);for(let n=0,r=this._viewContainer.length;n<r;n++){const e=this._viewContainer.get(n);e.context.index=n,e.context.count=r,e.context.ngForOf=this._ngForOf}e.forEachIdentityChange(e=>{this._viewContainer.get(e.currentIndex).context.$implicit=e.item})}_perViewChange(e,t){e.context.$implicit=t.item}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](r.IterableDiffers))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),e})();class Fe{constructor(e,t){this.record=e,this.view=t}}let Me=(()=>{class e{constructor(e,t){this._viewContainer=e,this._context=new Le,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){$e("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){$e("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),e})();class Le{constructor(){this.$implicit=null,this.ngIf=null}}function $e(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${Object(r["\u0275stringify"])(t)}'.`)}class Ve{constructor(e,t){this._viewContainerRef=e,this._templateRef=t,this._created=!1}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(e){e&&!this._created?this.create():!e&&this._created&&this.destroy()}}let Be=(()=>{class e{constructor(){this._defaultUsed=!1,this._caseCount=0,this._lastCaseCheckIndex=0,this._lastCasesMatched=!1}set ngSwitch(e){this._ngSwitch=e,0===this._caseCount&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews||(this._defaultViews=[]),this._defaultViews.push(e)}_matchCase(e){const t=e==this._ngSwitch;return this._lastCasesMatched=this._lastCasesMatched||t,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),t}_updateDefaultCases(e){if(this._defaultViews&&e!==this._defaultUsed){this._defaultUsed=e;for(let t=0;t<this._defaultViews.length;t++)this._defaultViews[t].enforceState(e)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}}),e})(),Ue=(()=>{class e{constructor(e,t,n){this.ngSwitch=n,n._addCase(),this._view=new Ve(e,t)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](Be,1))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}}),e})(),He=(()=>{class e{constructor(e,t,n){n._addDefault(new Ve(e,t))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](Be,1))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngSwitchDefault",""]]}),e})(),ze=(()=>{class e{constructor(e){this._localization=e,this._caseViews={}}set ngPlural(e){this._switchValue=e,this._updateView()}addCase(e,t){this._caseViews[e]=t}_updateView(){this._clearViews();const e=Object.keys(this._caseViews),t=Oe(this._switchValue,e,this._localization);this._activateView(this._caseViews[t])}_clearViews(){this._activeView&&this._activeView.destroy()}_activateView(e){e&&(this._activeView=e,this._activeView.create())}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](De))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngPlural",""]],inputs:{ngPlural:"ngPlural"}}),e})(),qe=(()=>{class e{constructor(e,t,n,r){this.value=e;const o=!isNaN(Number(e));r.addCase(o?`=${e}`:e,new Ve(n,t))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275injectAttribute"]("ngPluralCase"),r["\u0275\u0275directiveInject"](r.TemplateRef),r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](ze,1))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngPluralCase",""]]}),e})(),We=(()=>{class e{constructor(e,t,n){this._ngEl=e,this._differs=t,this._renderer=n,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){const[n,r]=e.split(".");null!=(t=null!=t&&r?`${t}${r}`:t)?this._renderer.setStyle(this._ngEl.nativeElement,n,t):this._renderer.removeStyle(this._ngEl.nativeElement,n)}_applyChanges(e){e.forEachRemovedItem(e=>this._setStyle(e.key,null)),e.forEachAddedItem(e=>this._setStyle(e.key,e.currentValue)),e.forEachChangedItem(e=>this._setStyle(e.key,e.currentValue))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](r.KeyValueDiffers),r["\u0275\u0275directiveInject"](r.Renderer2))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),e})(),Qe=(()=>{class e{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null}ngOnChanges(e){if(this._shouldRecreateView(e)){const e=this._viewContainerRef;this._viewRef&&e.remove(e.indexOf(this._viewRef)),this._viewRef=this.ngTemplateOutlet?e.createEmbeddedView(this.ngTemplateOutlet,this.ngTemplateOutletContext):null}else this._viewRef&&this.ngTemplateOutletContext&&this._updateExistingContext(this.ngTemplateOutletContext)}_shouldRecreateView(e){const t=e.ngTemplateOutletContext;return!!e.ngTemplateOutlet||t&&this._hasContextShapeChanged(t)}_hasContextShapeChanged(e){const t=Object.keys(e.previousValue||{}),n=Object.keys(e.currentValue||{});if(t.length===n.length){for(let e of n)if(-1===t.indexOf(e))return!0;return!1}return!0}_updateExistingContext(e){for(let t of Object.keys(e))this._viewRef.context[t]=this.ngTemplateOutletContext[t]}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet"},features:[r["\u0275\u0275NgOnChangesFeature"]]}),e})();const Ke=[je,Te,Re,Me,Qe,We,Be,Ue,He,ze,qe];function Ge(e,t){return Error(`InvalidPipeArgument: '${t}' for pipe '${Object(r["\u0275stringify"])(e)}'`)}class Ze{createSubscription(e,t){return e.subscribe({next:t,error:e=>{throw e}})}dispose(e){e.unsubscribe()}onDestroy(e){e.unsubscribe()}}class Ye{createSubscription(e,t){return e.then(t,e=>{throw e})}dispose(e){}onDestroy(e){}}const Je=new Ye,Xe=new Ze;let et=(()=>{class e{constructor(e){this._ref=e,this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):Object(r["\u0275looseIdentical"])(this._latestValue,this._latestReturnedValue)?this._latestReturnedValue:(this._latestReturnedValue=this._latestValue,r.WrappedValue.wrap(this._latestValue)):(e&&this._subscribe(e),this._latestReturnedValue=this._latestValue,this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(t){if(Object(r["\u0275isPromise"])(t))return Je;if(Object(r["\u0275isObservable"])(t))return Xe;throw Ge(e,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275injectPipeChangeDetectorRef"]())},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"async",type:e,pure:!1}),e})(),tt=(()=>{class e{transform(t){if(!t)return t;if("string"!=typeof t)throw Ge(e,t);return t.toLowerCase()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"lowercase",type:e,pure:!0}),e})();const nt=/(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;let rt=(()=>{class e{transform(t){if(!t)return t;if("string"!=typeof t)throw Ge(e,t);return t.replace(nt,e=>e[0].toUpperCase()+e.substr(1).toLowerCase())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"titlecase",type:e,pure:!0}),e})(),ot=(()=>{class e{transform(t){if(!t)return t;if("string"!=typeof t)throw Ge(e,t);return t.toUpperCase()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"uppercase",type:e,pure:!0}),e})(),it=(()=>{class e{constructor(e){this.locale=e}transform(t,n="mediumDate",r,o){if(null==t||""===t||t!=t)return null;try{return ue(t,n,o||this.locale,r)}catch(i){throw Ge(e,i.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"date",type:e,pure:!0}),e})();const st=/#/g;let at=(()=>{class e{constructor(e){this._localization=e}transform(t,n,r){if(null==t)return"";if("object"!=typeof n||null===n)throw Ge(e,n);return n[Oe(t,Object.keys(n),this._localization,r)].replace(st,t.toString())}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](De))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"i18nPlural",type:e,pure:!0}),e})(),ct=(()=>{class e{transform(t,n){if(null==t)return"";if("object"!=typeof n||"string"!=typeof t)throw Ge(e,n);return n.hasOwnProperty(t)?n[t]:n.hasOwnProperty("other")?n.other:""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"i18nSelect",type:e,pure:!0}),e})(),lt=(()=>{class e{transform(e){return JSON.stringify(e,null,2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"json",type:e,pure:!1}),e})(),ut=(()=>{class e{constructor(e){this.differs=e,this.keyValues=[]}transform(e,t=ht){if(!e||!(e instanceof Map)&&"object"!=typeof e)return null;this.differ||(this.differ=this.differs.find(e).create());const n=this.differ.diff(e);return n&&(this.keyValues=[],n.forEachItem(e=>{this.keyValues.push({key:e.key,value:e.currentValue})}),this.keyValues.sort(t)),this.keyValues}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.KeyValueDiffers))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"keyvalue",type:e,pure:!1}),e})();function ht(e,t){const n=e.key,r=t.key;if(n===r)return 0;if(void 0===n)return 1;if(void 0===r)return-1;if(null===n)return 1;if(null===r)return-1;if("string"==typeof n&&"string"==typeof r)return n<r?-1:1;if("number"==typeof n&&"number"==typeof r)return n-r;if("boolean"==typeof n&&"boolean"==typeof r)return n<r?-1:1;const o=String(n),i=String(r);return o==i?0:o<i?-1:1}let dt=(()=>{class e{constructor(e){this._locale=e}transform(t,n,r){if(gt(t))return null;r=r||this._locale;try{return Ee(mt(t),r,n)}catch(o){throw Ge(e,o.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"number",type:e,pure:!0}),e})(),ft=(()=>{class e{constructor(e){this._locale=e}transform(t,n,r){if(gt(t))return null;r=r||this._locale;try{return Ce(mt(t),r,n)}catch(o){throw Ge(e,o.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"percent",type:e,pure:!0}),e})(),pt=(()=>{class e{constructor(e,t="USD"){this._locale=e,this._defaultCurrencyCode=t}transform(t,n,r="symbol",o,i){if(gt(t))return null;i=i||this._locale,"boolean"==typeof r&&(console&&console.warn&&console.warn('Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'),r=r?"symbol":"code");let s=n||this._defaultCurrencyCode;"code"!==r&&(s="symbol"===r||"symbol-narrow"===r?ne(s,"symbol"===r?"wide":"narrow",i):r);try{return xe(mt(t),i,s,n,o)}catch(a){throw Ge(e,a.message)}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID),r["\u0275\u0275directiveInject"](r.DEFAULT_CURRENCY_CODE))},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"currency",type:e,pure:!0}),e})();function gt(e){return null==e||""===e||e!=e}function mt(e){if("string"==typeof e&&!isNaN(Number(e)-parseFloat(e)))return Number(e);if("number"!=typeof e)throw new Error(`${e} is not a number`);return e}let yt=(()=>{class e{transform(t,n,r){if(null==t)return t;if(!this.supports(t))throw Ge(e,t);return t.slice(n,r)}supports(e){return"string"==typeof e||Array.isArray(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"slice",type:e,pure:!1}),e})();const bt=[et,ot,tt,lt,yt,dt,ft,rt,pt,it,at,ct,ut];let vt=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[{provide:De,useClass:Ie}]}),e})();const _t="browser",wt="server",xt="browserWorkerApp",Ct="browserWorkerUi";function Et(e){return e===_t}function St(e){return e===wt}function kt(e){return e===xt}function Dt(e){return e===Ct}const Ot=new r.Version("9.1.1");let It=(()=>{class e{}return e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({token:e,providedIn:"root",factory:()=>new At(Object(r["\u0275\u0275inject"])(c),window,Object(r["\u0275\u0275inject"])(r.ErrorHandler))}),e})();class At{constructor(e,t,n){this.document=e,this.window=t,this.errorHandler=n,this.offset=()=>[0,0]}setOffset(e){this.offset=Array.isArray(e)?()=>e:e}getScrollPosition(){return this.supportScrollRestoration()?[this.window.scrollX,this.window.scrollY]:[0,0]}scrollToPosition(e){this.supportScrollRestoration()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(this.supportScrollRestoration()){e=this.window.CSS&&this.window.CSS.escape?this.window.CSS.escape(e):e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g,"\\$1");try{const t=this.document.querySelector(`#${e}`);if(t)return void this.scrollToElement(t);const n=this.document.querySelector(`[name='${e}']`);if(n)return void this.scrollToElement(n)}catch(t){this.errorHandler.handleError(t)}}}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}scrollToElement(e){const t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}supportScrollRestoration(){try{return!!this.window&&!!this.window.scrollTo}catch(e){return!1}}}class Pt{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}}},"3/dt":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{}t.DontCodeModel=r,r.ROOT="creation",r.APP_NAME_NODE="name",r.APP_TYPE_NODE="type",r.APP_TYPE=r.ROOT+"/"+r.APP_TYPE_NODE,r.APP_NAME=r.ROOT+"/"+r.APP_NAME_NODE,r.APP_ENTITIES_NODE="entities",r.APP_ENTITIES=r.ROOT+"/"+r.APP_ENTITIES_NODE,r.APP_ENTITIES_NAME_NODE="name",r.APP_ENTITIES_NAME=r.APP_ENTITIES+"/"+r.APP_ENTITIES_NAME_NODE,r.APP_FIELDS_NODE="fields",r.APP_FIELDS=r.APP_ENTITIES+"/"+r.APP_FIELDS_NODE,r.APP_FIELDS_NAME_NODE="name",r.APP_FIELDS_NAME=r.APP_FIELDS+"/"+r.APP_FIELDS_NAME_NODE,r.APP_FIELDS_TYPE_NODE="type",r.APP_FIELDS_TYPE=r.APP_FIELDS+"/"+r.APP_FIELDS_TYPE_NODE,r.APP_SCREENS_NODE="screens",r.APP_SCREENS=r.ROOT+"/"+r.APP_SCREENS_NODE,r.APP_SCREENS_NAME_NODE="name",r.APP_SCREENS_NAME=r.APP_SCREENS+"/"+r.APP_SCREENS_NAME_NODE,r.APP_SCREENS_LAYOUT_NODE="layout",r.APP_SCREENS_LAYOUT=r.APP_SCREENS+"/"+r.APP_SCREENS_LAYOUT_NODE,r.APP_COMPONENTS_NODE="components",r.APP_COMPONENTS=r.APP_SCREENS+"/"+r.APP_COMPONENTS_NODE,r.APP_COMPONENTS_TYPE_NODE="type",r.APP_COMPONENTS_TYPE=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_TYPE_NODE,r.APP_COMPONENTS_ENTITY_NODE="entity",r.APP_COMPONENTS_ENTITY=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_ENTITY_NODE},"3lSR":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cJ9h"),o=n("5E2i");function i(e=Number.POSITIVE_INFINITY){return Object(r.a)(o.a,e)}},"42at":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePreviewManager=class{constructor(){this.handlersPerLocations=new Map}registerHandlers(e){e["preview-handlers"]&&e["preview-handlers"].forEach(e=>{this.handlersPerLocations.set(e.location.parent,e)})}retrieveHandlerConfig(e){return this.handlersPerLocations.get(e)}}},"5E2i":function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},"5uGe":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("IJgj"),o=n("rWo0"),i=n("bwdy"),s=n("25CY"),a=n("HgnN"),c=n("i9P/");class l extends i.a{constructor(e,t,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=o.a;break;case 1:if(!e){this.destination=o.a;break}if("object"==typeof e){e instanceof l?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new u(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new u(this,e,t,n)}}[s.a](){return this}static create(e,t,n){const r=new l(e,t,n);return r.syncErrorThrowable=!1,r}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class u extends l{constructor(e,t,n,i){let s;super(),this._parentSubscriber=e;let a=this;Object(r.a)(t)?s=t:t&&(s=t.next,n=t.error,i=t.complete,t!==o.a&&(a=Object.create(t),Object(r.a)(a.unsubscribe)&&this.add(a.unsubscribe.bind(a)),a.unsubscribe=this.unsubscribe.bind(this))),this._context=a,this._next=s,this._error=n,this._complete=i}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;a.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:n}=a.a;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):Object(c.a)(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;Object(c.a)(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);a.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),a.a.useDeprecatedSynchronousErrorHandling)throw n;Object(c.a)(n)}}__tryOrSetError(e,t,n){if(!a.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(r){return a.a.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=r,e.syncErrorThrown=!0,!0):(Object(c.a)(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}},AEcS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("D57K");r.__exportStar(n("YIYF"),t),r.__exportStar(n("o8N5"),t),r.__exportStar(n("3/dt"),t),r.__exportStar(n("umRR"),t),r.__exportStar(n("uq2N"),t),r.__exportStar(n("ZtqZ"),t),r.__exportStar(n("fY+t"),t),r.__exportStar(n("a/xz"),t)},D57K:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return s})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return u})),n.d(t,"__generator",(function(){return h})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return f})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return g})),n.d(t,"__spreadArrays",(function(){return m})),n.d(t,"__await",(function(){return y})),n.d(t,"__asyncGenerator",(function(){return b})),n.d(t,"__asyncDelegator",(function(){return v})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return x})),n.d(t,"__importDefault",(function(){return C})),n.d(t,"__classPrivateFieldGet",(function(){return E})),n.d(t,"__classPrivateFieldSet",(function(){return S}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function b(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(c,l):u(i[0][2],n)}catch(r){u(i[0][3],r)}var n}function c(e){a("next",e)}function l(e){a("throw",e)}function u(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function v(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function C(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function S(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},ECRl:function(e,t,n){var r={"./plugin-screen/__ivy_ngcc__/fesm2015/dontcode-plugin-screen.js":["ODPb",9],"./plugin-screen/bundles/dontcode-plugin-screen.umd.js":["ZFEP",7,6],"./plugin-screen/bundles/dontcode-plugin-screen.umd.min.js":["Hn0q",7,7],"./plugin-screen/esm2015/dontcode-plugin-screen.js":["I/aV",9,0,8],"./plugin-screen/esm2015/index.js":["3pHC",9,0],"./plugin-screen/esm2015/lib/declaration/screen-plugin.js":["yk3/",9,0],"./plugin-screen/esm2015/lib/preview/screen/screen.component.js":["6nzg",9,0],"./plugin-screen/esm2015/lib/screen.module.js":["cNW7",9,0],"./plugin-screen/esm5/dontcode-plugin-screen.js":["n6ss",9,0,9],"./plugin-screen/esm5/index.js":["b+qt",9,0],"./plugin-screen/esm5/lib/declaration/screen-plugin.js":["bGaX",9,0],"./plugin-screen/esm5/lib/preview/screen/screen.component.js":["m5lf",9,0],"./plugin-screen/esm5/lib/screen.module.js":["fnoQ",9,0],"./plugin-screen/fesm2015/dontcode-plugin-screen.js":["HfCs",9,10],"./plugin-screen/fesm5/dontcode-plugin-screen.js":["C34R",9,11]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(r)},o.id="ECRl",e.exports=o},EM62:function(e,t,n){"use strict";n.r(t),n.d(t,"ANALYZE_FOR_ENTRY_COMPONENTS",(function(){return Aa})),n.d(t,"APP_BOOTSTRAP_LISTENER",(function(){return sy})),n.d(t,"APP_ID",(function(){return ey})),n.d(t,"APP_INITIALIZER",(function(){return Jm})),n.d(t,"ApplicationInitStatus",(function(){return Xm})),n.d(t,"ApplicationModule",(function(){return Hb})),n.d(t,"ApplicationRef",(function(){return rb})),n.d(t,"Attribute",(function(){return O})),n.d(t,"COMPILER_OPTIONS",(function(){return ky})),n.d(t,"CUSTOM_ELEMENTS_SCHEMA",(function(){return ir})),n.d(t,"ChangeDetectionStrategy",(function(){return Me})),n.d(t,"ChangeDetectorRef",(function(){return xs})),n.d(t,"Compiler",(function(){return Sy})),n.d(t,"CompilerFactory",(function(){return Dy})),n.d(t,"Component",(function(){return Mm})),n.d(t,"ComponentFactory",(function(){return yh})),n.d(t,"ComponentFactoryResolver",(function(){return wh})),n.d(t,"ComponentRef",(function(){return mh})),n.d(t,"ContentChild",(function(){return Ta})),n.d(t,"ContentChildren",(function(){return ja})),n.d(t,"DEFAULT_CURRENCY_CODE",(function(){return uy})),n.d(t,"DebugElement",(function(){return Rb})),n.d(t,"DebugEventListener",(function(){return mb})),n.d(t,"DebugNode",(function(){return Nb})),n.d(t,"DefaultIterableDiffer",(function(){return Mh})),n.d(t,"Directive",(function(){return Fm})),n.d(t,"ElementRef",(function(){return Eh})),n.d(t,"EmbeddedViewRef",(function(){return gb})),n.d(t,"ErrorHandler",(function(){return or})),n.d(t,"EventEmitter",(function(){return Pg})),n.d(t,"Host",(function(){return D})),n.d(t,"HostBinding",(function(){return Bm})),n.d(t,"HostListener",(function(){return Um})),n.d(t,"INJECTOR",(function(){return ue})),n.d(t,"Inject",(function(){return C})),n.d(t,"InjectFlags",(function(){return I})),n.d(t,"Injectable",(function(){return Us})),n.d(t,"InjectionToken",(function(){return le})),n.d(t,"Injector",(function(){return aa})),n.d(t,"Input",(function(){return $m})),n.d(t,"IterableDiffers",(function(){return qh})),n.d(t,"KeyValueDiffers",(function(){return Wh})),n.d(t,"LOCALE_ID",(function(){return ly})),n.d(t,"MissingTranslationStrategy",(function(){return fy})),n.d(t,"ModuleWithComponentFactories",(function(){return my})),n.d(t,"NO_ERRORS_SCHEMA",(function(){return sr})),n.d(t,"NgModule",(function(){return Gm})),n.d(t,"NgModuleFactory",(function(){return De})),n.d(t,"NgModuleFactoryLoader",(function(){return ib})),n.d(t,"NgModuleRef",(function(){return ke})),n.d(t,"NgProbeToken",(function(){return Gy})),n.d(t,"NgZone",(function(){return Ay})),n.d(t,"Optional",(function(){return E})),n.d(t,"Output",(function(){return Vm})),n.d(t,"PACKAGE_ROOT_URL",(function(){return ay})),n.d(t,"PLATFORM_ID",(function(){return iy})),n.d(t,"PLATFORM_INITIALIZER",(function(){return oy})),n.d(t,"Pipe",(function(){return Lm})),n.d(t,"PlatformRef",(function(){return tb})),n.d(t,"Query",(function(){return Pa})),n.d(t,"QueryList",(function(){return Tg})),n.d(t,"ReflectiveInjector",(function(){return Oa})),n.d(t,"ReflectiveKey",(function(){return da})),n.d(t,"Renderer2",(function(){return Ih})),n.d(t,"RendererFactory2",(function(){return Dh})),n.d(t,"RendererStyleFlags2",(function(){return Oh})),n.d(t,"ResolvedReflectiveFactory",(function(){return _a})),n.d(t,"Sanitizer",(function(){return jh})),n.d(t,"SecurityContext",(function(){return Kr})),n.d(t,"Self",(function(){return S})),n.d(t,"SimpleChange",(function(){return oh})),n.d(t,"SkipSelf",(function(){return k})),n.d(t,"SystemJsNgModuleLoader",(function(){return db})),n.d(t,"SystemJsNgModuleLoaderConfig",(function(){return ub})),n.d(t,"TRANSLATIONS",(function(){return hy})),n.d(t,"TRANSLATIONS_FORMAT",(function(){return dy})),n.d(t,"TemplateRef",(function(){return Zh})),n.d(t,"Testability",(function(){return Ly})),n.d(t,"TestabilityRegistry",(function(){return $y})),n.d(t,"Type",(function(){return Ss})),n.d(t,"VERSION",(function(){return Nh})),n.d(t,"Version",(function(){return Th})),n.d(t,"ViewChild",(function(){return Ra})),n.d(t,"ViewChildren",(function(){return Na})),n.d(t,"ViewContainerRef",(function(){return Xh})),n.d(t,"ViewEncapsulation",(function(){return Ve})),n.d(t,"ViewRef",(function(){return pb})),n.d(t,"WrappedValue",(function(){return Qa})),n.d(t,"asNativeElements",(function(){return vb})),n.d(t,"assertPlatform",(function(){return Jy})),n.d(t,"createPlatform",(function(){return Zy})),n.d(t,"createPlatformFactory",(function(){return Yy})),n.d(t,"defineInjectable",(function(){return T})),n.d(t,"destroyPlatform",(function(){return Xy})),n.d(t,"enableProdMode",(function(){return Er})),n.d(t,"forwardRef",(function(){return W})),n.d(t,"getDebugNode",(function(){return Ab})),n.d(t,"getModuleFactory",(function(){return cb})),n.d(t,"getPlatform",(function(){return eb})),n.d(t,"inject",(function(){return we})),n.d(t,"isDevMode",(function(){return Cr})),n.d(t,"platformCore",(function(){return Fb})),n.d(t,"resolveForwardRef",(function(){return Q})),n.d(t,"setTestabilityGetter",(function(){return By})),n.d(t,"\u0275ALLOW_MULTIPLE_PLATFORMS",(function(){return Ky})),n.d(t,"\u0275APP_ID_RANDOM_PROVIDER",(function(){return ny})),n.d(t,"\u0275ChangeDetectorStatus",(function(){return Le})),n.d(t,"\u0275CodegenComponentFactoryResolver",(function(){return xh})),n.d(t,"\u0275Compiler_compileModuleAndAllComponentsAsync__POST_R3__",(function(){return Cy})),n.d(t,"\u0275Compiler_compileModuleAndAllComponentsSync__POST_R3__",(function(){return wy})),n.d(t,"\u0275Compiler_compileModuleAsync__POST_R3__",(function(){return vy})),n.d(t,"\u0275Compiler_compileModuleSync__POST_R3__",(function(){return yy})),n.d(t,"\u0275ComponentFactory",(function(){return yh})),n.d(t,"\u0275Console",(function(){return cy})),n.d(t,"\u0275DEFAULT_LOCALE_ID",(function(){return lp})),n.d(t,"\u0275EMPTY_ARRAY",(function(){return Kd})),n.d(t,"\u0275EMPTY_MAP",(function(){return Gd})),n.d(t,"\u0275INJECTOR_IMPL__POST_R3__",(function(){return ia})),n.d(t,"\u0275INJECTOR_SCOPE",(function(){return qs})),n.d(t,"\u0275LifecycleHooksFeature",(function(){return Qu})),n.d(t,"\u0275LocaleDataIndex",(function(){return cp})),n.d(t,"\u0275NG_COMP_DEF",(function(){return ne})),n.d(t,"\u0275NG_DIR_DEF",(function(){return re})),n.d(t,"\u0275NG_ELEMENT_ID",(function(){return ce})),n.d(t,"\u0275NG_INJ_DEF",(function(){return $})),n.d(t,"\u0275NG_MOD_DEF",(function(){return ie})),n.d(t,"\u0275NG_PIPE_DEF",(function(){return oe})),n.d(t,"\u0275NG_PROV_DEF",(function(){return L})),n.d(t,"\u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR",(function(){return Bf})),n.d(t,"\u0275NO_CHANGE",(function(){return Po})),n.d(t,"\u0275NgModuleFactory",(function(){return ig})),n.d(t,"\u0275NoopNgZone",(function(){return My})),n.d(t,"\u0275ReflectionCapabilities",(function(){return Ps})),n.d(t,"\u0275Render3ComponentFactory",(function(){return Yf})),n.d(t,"\u0275Render3ComponentRef",(function(){return Jf})),n.d(t,"\u0275Render3NgModuleRef",(function(){return og})),n.d(t,"\u0275SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__",(function(){return Cs})),n.d(t,"\u0275SWITCH_COMPILE_COMPONENT__POST_R3__",(function(){return Hm})),n.d(t,"\u0275SWITCH_COMPILE_DIRECTIVE__POST_R3__",(function(){return zm})),n.d(t,"\u0275SWITCH_COMPILE_INJECTABLE__POST_R3__",(function(){return Hs})),n.d(t,"\u0275SWITCH_COMPILE_NGMODULE__POST_R3__",(function(){return Zm})),n.d(t,"\u0275SWITCH_COMPILE_PIPE__POST_R3__",(function(){return qm})),n.d(t,"\u0275SWITCH_ELEMENT_REF_FACTORY__POST_R3__",(function(){return Sh})),n.d(t,"\u0275SWITCH_IVY_ENABLED__POST_R3__",(function(){return py})),n.d(t,"\u0275SWITCH_RENDERER2_FACTORY__POST_R3__",(function(){return Ah})),n.d(t,"\u0275SWITCH_TEMPLATE_REF_FACTORY__POST_R3__",(function(){return Yh})),n.d(t,"\u0275SWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__",(function(){return ed})),n.d(t,"\u0275_sanitizeHtml",(function(){return Wr})),n.d(t,"\u0275_sanitizeStyle",(function(){return Yr})),n.d(t,"\u0275_sanitizeUrl",(function(){return Or})),n.d(t,"\u0275allowSanitizationBypassAndThrow",(function(){return pr})),n.d(t,"\u0275and",(function(){return zb})),n.d(t,"\u0275angular_packages_core_core_a",(function(){return K})),n.d(t,"\u0275angular_packages_core_core_b",(function(){return be})),n.d(t,"\u0275angular_packages_core_core_ba",(function(){return Rt})),n.d(t,"\u0275angular_packages_core_core_bb",(function(){return Lt})),n.d(t,"\u0275angular_packages_core_core_bc",(function(){return zt})),n.d(t,"\u0275angular_packages_core_core_bd",(function(){return sn})),n.d(t,"\u0275angular_packages_core_core_bf",(function(){return bg})),n.d(t,"\u0275angular_packages_core_core_bg",(function(){return vg})),n.d(t,"\u0275angular_packages_core_core_bh",(function(){return _g})),n.d(t,"\u0275angular_packages_core_core_bi",(function(){return wg})),n.d(t,"\u0275angular_packages_core_core_bj",(function(){return xg})),n.d(t,"\u0275angular_packages_core_core_bk",(function(){return ro})),n.d(t,"\u0275angular_packages_core_core_bl",(function(){return w})),n.d(t,"\u0275angular_packages_core_core_bm",(function(){return x})),n.d(t,"\u0275angular_packages_core_core_bn",(function(){return A})),n.d(t,"\u0275angular_packages_core_core_bo",(function(){return g})),n.d(t,"\u0275angular_packages_core_core_bq",(function(){return To})),n.d(t,"\u0275angular_packages_core_core_c",(function(){return Ee})),n.d(t,"\u0275angular_packages_core_core_d",(function(){return Ia})),n.d(t,"\u0275angular_packages_core_core_e",(function(){return ya})),n.d(t,"\u0275angular_packages_core_core_f",(function(){return Ca})),n.d(t,"\u0275angular_packages_core_core_g",(function(){return ty})),n.d(t,"\u0275angular_packages_core_core_h",(function(){return bs})),n.d(t,"\u0275angular_packages_core_core_i",(function(){return vs})),n.d(t,"\u0275angular_packages_core_core_j",(function(){return sb})),n.d(t,"\u0275angular_packages_core_core_k",(function(){return yb})),n.d(t,"\u0275angular_packages_core_core_l",(function(){return bb})),n.d(t,"\u0275angular_packages_core_core_m",(function(){return Pb})),n.d(t,"\u0275angular_packages_core_core_n",(function(){return Rh})),n.d(t,"\u0275angular_packages_core_core_o",(function(){return Uh})),n.d(t,"\u0275angular_packages_core_core_p",(function(){return Mb})),n.d(t,"\u0275angular_packages_core_core_q",(function(){return Lb})),n.d(t,"\u0275angular_packages_core_core_r",(function(){return $b})),n.d(t,"\u0275angular_packages_core_core_s",(function(){return Bb})),n.d(t,"\u0275angular_packages_core_core_t",(function(){return Ub})),n.d(t,"\u0275angular_packages_core_core_u",(function(){return up})),n.d(t,"\u0275angular_packages_core_core_v",(function(){return Nf})),n.d(t,"\u0275angular_packages_core_core_w",(function(){return dd})),n.d(t,"\u0275angular_packages_core_core_x",(function(){return Zf})),n.d(t,"\u0275angular_packages_core_core_y",(function(){return zn})),n.d(t,"\u0275angular_packages_core_core_z",(function(){return Pt})),n.d(t,"\u0275bypassSanitizationTrustHtml",(function(){return mr})),n.d(t,"\u0275bypassSanitizationTrustResourceUrl",(function(){return _r})),n.d(t,"\u0275bypassSanitizationTrustScript",(function(){return br})),n.d(t,"\u0275bypassSanitizationTrustStyle",(function(){return yr})),n.d(t,"\u0275bypassSanitizationTrustUrl",(function(){return vr})),n.d(t,"\u0275ccf",(function(){return lf})),n.d(t,"\u0275clearOverrides",(function(){return b_})),n.d(t,"\u0275clearResolutionOfComponentResourcesQueue",(function(){return Va})),n.d(t,"\u0275cmf",(function(){return v_})),n.d(t,"\u0275compileComponent",(function(){return vm})),n.d(t,"\u0275compileDirective",(function(){return _m})),n.d(t,"\u0275compileNgModule",(function(){return lm})),n.d(t,"\u0275compileNgModuleDefs",(function(){return um})),n.d(t,"\u0275compileNgModuleFactory__POST_R3__",(function(){return qy})),n.d(t,"\u0275compilePipe",(function(){return Nm})),n.d(t,"\u0275createInjector",(function(){return Ys})),n.d(t,"\u0275crt",(function(){return bd})),n.d(t,"\u0275defaultIterableDiffers",(function(){return Kh})),n.d(t,"\u0275defaultKeyValueDiffers",(function(){return Gh})),n.d(t,"\u0275detectChanges",(function(){return wc})),n.d(t,"\u0275devModeEqual",(function(){return Wa})),n.d(t,"\u0275did",(function(){return Pf})),n.d(t,"\u0275eld",(function(){return qb})),n.d(t,"\u0275findLocaleData",(function(){return rp})),n.d(t,"\u0275flushModuleScopingQueueAsMuchAsPossible",(function(){return am})),n.d(t,"\u0275getComponentViewDefinitionFactory",(function(){return uf})),n.d(t,"\u0275getDebugNodeR2",(function(){return jb})),n.d(t,"\u0275getDebugNode__POST_R3__",(function(){return Ib})),n.d(t,"\u0275getDirectives",(function(){return Tu})),n.d(t,"\u0275getHostElement",(function(){return Ru})),n.d(t,"\u0275getInjectableDef",(function(){return R})),n.d(t,"\u0275getLContext",(function(){return uo})),n.d(t,"\u0275getLocaleCurrencyCode",(function(){return op})),n.d(t,"\u0275getLocalePluralCase",(function(){return ip})),n.d(t,"\u0275getModuleFactory__POST_R3__",(function(){return ab})),n.d(t,"\u0275getSanitizationBypassType",(function(){return gr})),n.d(t,"\u0275global",(function(){return X})),n.d(t,"\u0275initServicesIfNeeded",(function(){return Tv})),n.d(t,"\u0275inlineInterpolate",(function(){return Wd})),n.d(t,"\u0275interpolate",(function(){return qd})),n.d(t,"\u0275isBoundToModule__POST_R3__",(function(){return Qy})),n.d(t,"\u0275isDefaultChangeDetectionStrategy",(function(){return $e})),n.d(t,"\u0275isListLikeIterable",(function(){return Ka})),n.d(t,"\u0275isObservable",(function(){return zc})),n.d(t,"\u0275isPromise",(function(){return Hc})),n.d(t,"\u0275ivyEnabled",(function(){return gy})),n.d(t,"\u0275looseIdentical",(function(){return qa})),n.d(t,"\u0275makeDecorator",(function(){return v})),n.d(t,"\u0275markDirty",(function(){return xc})),n.d(t,"\u0275mod",(function(){return tf})),n.d(t,"\u0275mpd",(function(){return ef})),n.d(t,"\u0275ncd",(function(){return tv})),n.d(t,"\u0275nov",(function(){return wf})),n.d(t,"\u0275overrideComponentView",(function(){return y_})),n.d(t,"\u0275overrideProvider",(function(){return m_})),n.d(t,"\u0275pad",(function(){return ov})),n.d(t,"\u0275patchComponentDefWithScope",(function(){return gm})),n.d(t,"\u0275pid",(function(){return jf})),n.d(t,"\u0275pod",(function(){return iv})),n.d(t,"\u0275ppd",(function(){return rv})),n.d(t,"\u0275prd",(function(){return Tf})),n.d(t,"\u0275publishDefaultGlobalUtils",(function(){return Bu})),n.d(t,"\u0275publishGlobalUtil",(function(){return Uu})),n.d(t,"\u0275qud",(function(){return Zb})),n.d(t,"\u0275registerLocaleData",(function(){return np})),n.d(t,"\u0275registerModuleFactory",(function(){return eg})),n.d(t,"\u0275registerNgModuleType",(function(){return ng})),n.d(t,"\u0275renderComponent",(function(){return Hu})),n.d(t,"\u0275resetCompiledComponents",(function(){return fm})),n.d(t,"\u0275resetJitOptions",(function(){return rm})),n.d(t,"\u0275resolveComponentResources",(function(){return Fa})),n.d(t,"\u0275setClassMetadata",(function(){return sg})),n.d(t,"\u0275setCurrentInjector",(function(){return me})),n.d(t,"\u0275setDocument",(function(){return ft})),n.d(t,"\u0275setLocaleId",(function(){return Jp})),n.d(t,"\u0275store",(function(){return Dc})),n.d(t,"\u0275stringify",(function(){return H})),n.d(t,"\u0275ted",(function(){return av})),n.d(t,"\u0275transitiveScopesFor",(function(){return mm})),n.d(t,"\u0275unregisterLocaleData",(function(){return ap})),n.d(t,"\u0275unv",(function(){return yd})),n.d(t,"\u0275unwrapSafeValue",(function(){return fr})),n.d(t,"\u0275vid",(function(){return uv})),n.d(t,"\u0275whenRendered",(function(){return Ku})),n.d(t,"\u0275\u0275CopyDefinitionFeature",(function(){return rh})),n.d(t,"\u0275\u0275InheritDefinitionFeature",(function(){return Zu})),n.d(t,"\u0275\u0275NgOnChangesFeature",(function(){return ih})),n.d(t,"\u0275\u0275ProvidersFeature",(function(){return gh})),n.d(t,"\u0275\u0275advance",(function(){return No})),n.d(t,"\u0275\u0275attribute",(function(){return nc})),n.d(t,"\u0275\u0275attributeInterpolate1",(function(){return dc})),n.d(t,"\u0275\u0275attributeInterpolate2",(function(){return fc})),n.d(t,"\u0275\u0275attributeInterpolate3",(function(){return pc})),n.d(t,"\u0275\u0275attributeInterpolate4",(function(){return gc})),n.d(t,"\u0275\u0275attributeInterpolate5",(function(){return mc})),n.d(t,"\u0275\u0275attributeInterpolate6",(function(){return yc})),n.d(t,"\u0275\u0275attributeInterpolate7",(function(){return bc})),n.d(t,"\u0275\u0275attributeInterpolate8",(function(){return vc})),n.d(t,"\u0275\u0275attributeInterpolateV",(function(){return _c})),n.d(t,"\u0275\u0275classMap",(function(){return Il})),n.d(t,"\u0275\u0275classMapInterpolate1",(function(){return Xl})),n.d(t,"\u0275\u0275classMapInterpolate2",(function(){return eu})),n.d(t,"\u0275\u0275classMapInterpolate3",(function(){return tu})),n.d(t,"\u0275\u0275classMapInterpolate4",(function(){return nu})),n.d(t,"\u0275\u0275classMapInterpolate5",(function(){return ru})),n.d(t,"\u0275\u0275classMapInterpolate6",(function(){return ou})),n.d(t,"\u0275\u0275classMapInterpolate7",(function(){return iu})),n.d(t,"\u0275\u0275classMapInterpolate8",(function(){return su})),n.d(t,"\u0275\u0275classMapInterpolateV",(function(){return au})),n.d(t,"\u0275\u0275classProp",(function(){return kl})),n.d(t,"\u0275\u0275componentHostSyntheticListener",(function(){return Wc})),n.d(t,"\u0275\u0275container",(function(){return Cc})),n.d(t,"\u0275\u0275containerRefreshEnd",(function(){return kc})),n.d(t,"\u0275\u0275containerRefreshStart",(function(){return Sc})),n.d(t,"\u0275\u0275contentQuery",(function(){return Wg})),n.d(t,"\u0275\u0275defaultStyleSanitizer",(function(){return io})),n.d(t,"\u0275\u0275defineComponent",(function(){return ze})),n.d(t,"\u0275\u0275defineDirective",(function(){return Je})),n.d(t,"\u0275\u0275defineInjectable",(function(){return j})),n.d(t,"\u0275\u0275defineInjector",(function(){return N})),n.d(t,"\u0275\u0275defineNgModule",(function(){return Ge})),n.d(t,"\u0275\u0275definePipe",(function(){return Xe})),n.d(t,"\u0275\u0275directiveInject",(function(){return Ic})),n.d(t,"\u0275\u0275disableBindings",(function(){return Nt})),n.d(t,"\u0275\u0275element",(function(){return Fc})),n.d(t,"\u0275\u0275elementContainer",(function(){return $c})),n.d(t,"\u0275\u0275elementContainerEnd",(function(){return Lc})),n.d(t,"\u0275\u0275elementContainerStart",(function(){return Mc})),n.d(t,"\u0275\u0275elementEnd",(function(){return Rc})),n.d(t,"\u0275\u0275elementStart",(function(){return Nc})),n.d(t,"\u0275\u0275embeddedViewEnd",(function(){return Bc})),n.d(t,"\u0275\u0275embeddedViewStart",(function(){return Vc})),n.d(t,"\u0275\u0275enableBindings",(function(){return Tt})),n.d(t,"\u0275\u0275getCurrentView",(function(){return Uc})),n.d(t,"\u0275\u0275getFactoryOf",(function(){return Xn})),n.d(t,"\u0275\u0275getInheritedFactory",(function(){return er})),n.d(t,"\u0275\u0275hostProperty",(function(){return ku})),n.d(t,"\u0275\u0275i18n",(function(){return Vp})),n.d(t,"\u0275\u0275i18nApply",(function(){return qp})),n.d(t,"\u0275\u0275i18nAttributes",(function(){return Bp})),n.d(t,"\u0275\u0275i18nEnd",(function(){return Fp})),n.d(t,"\u0275\u0275i18nExp",(function(){return zp})),n.d(t,"\u0275\u0275i18nPostprocess",(function(){return Rp})),n.d(t,"\u0275\u0275i18nStart",(function(){return jp})),n.d(t,"\u0275\u0275inject",(function(){return ve})),n.d(t,"\u0275\u0275injectAttribute",(function(){return Ac})),n.d(t,"\u0275\u0275injectPipeChangeDetectorRef",(function(){return em})),n.d(t,"\u0275\u0275invalidFactory",(function(){return Pc})),n.d(t,"\u0275\u0275invalidFactoryDep",(function(){return _e})),n.d(t,"\u0275\u0275listener",(function(){return qc})),n.d(t,"\u0275\u0275loadQuery",(function(){return Gg})),n.d(t,"\u0275\u0275namespaceHTML",(function(){return dn})),n.d(t,"\u0275\u0275namespaceMathML",(function(){return hn})),n.d(t,"\u0275\u0275namespaceSVG",(function(){return un})),n.d(t,"\u0275\u0275nextContext",(function(){return Zc})),n.d(t,"\u0275\u0275pipe",(function(){return Cg})),n.d(t,"\u0275\u0275pipeBind1",(function(){return Eg})),n.d(t,"\u0275\u0275pipeBind2",(function(){return Sg})),n.d(t,"\u0275\u0275pipeBind3",(function(){return kg})),n.d(t,"\u0275\u0275pipeBind4",(function(){return Dg})),n.d(t,"\u0275\u0275pipeBindV",(function(){return Og})),n.d(t,"\u0275\u0275projection",(function(){return tl})),n.d(t,"\u0275\u0275projectionDef",(function(){return Jc})),n.d(t,"\u0275\u0275property",(function(){return jc})),n.d(t,"\u0275\u0275propertyInterpolate",(function(){return nl})),n.d(t,"\u0275\u0275propertyInterpolate1",(function(){return rl})),n.d(t,"\u0275\u0275propertyInterpolate2",(function(){return ol})),n.d(t,"\u0275\u0275propertyInterpolate3",(function(){return il})),n.d(t,"\u0275\u0275propertyInterpolate4",(function(){return sl})),n.d(t,"\u0275\u0275propertyInterpolate5",(function(){return al})),n.d(t,"\u0275\u0275propertyInterpolate6",(function(){return cl})),n.d(t,"\u0275\u0275propertyInterpolate7",(function(){return ll})),n.d(t,"\u0275\u0275propertyInterpolate8",(function(){return ul})),n.d(t,"\u0275\u0275propertyInterpolateV",(function(){return hl})),n.d(t,"\u0275\u0275pureFunction0",(function(){return ag})),n.d(t,"\u0275\u0275pureFunction1",(function(){return cg})),n.d(t,"\u0275\u0275pureFunction2",(function(){return lg})),n.d(t,"\u0275\u0275pureFunction3",(function(){return ug})),n.d(t,"\u0275\u0275pureFunction4",(function(){return hg})),n.d(t,"\u0275\u0275pureFunction5",(function(){return dg})),n.d(t,"\u0275\u0275pureFunction6",(function(){return fg})),n.d(t,"\u0275\u0275pureFunction7",(function(){return pg})),n.d(t,"\u0275\u0275pureFunction8",(function(){return gg})),n.d(t,"\u0275\u0275pureFunctionV",(function(){return mg})),n.d(t,"\u0275\u0275queryRefresh",(function(){return Ug})),n.d(t,"\u0275\u0275reference",(function(){return Oc})),n.d(t,"\u0275\u0275resolveBody",(function(){return Nn})),n.d(t,"\u0275\u0275resolveDocument",(function(){return Tn})),n.d(t,"\u0275\u0275resolveWindow",(function(){return jn})),n.d(t,"\u0275\u0275restoreView",(function(){return Mt})),n.d(t,"\u0275\u0275sanitizeHtml",(function(){return Jr})),n.d(t,"\u0275\u0275sanitizeResourceUrl",(function(){return to})),n.d(t,"\u0275\u0275sanitizeScript",(function(){return no})),n.d(t,"\u0275\u0275sanitizeStyle",(function(){return Xr})),n.d(t,"\u0275\u0275sanitizeUrl",(function(){return eo})),n.d(t,"\u0275\u0275sanitizeUrlOrResourceUrl",(function(){return oo})),n.d(t,"\u0275\u0275select",(function(){return Ro})),n.d(t,"\u0275\u0275setComponentScope",(function(){return qe})),n.d(t,"\u0275\u0275setNgModuleScope",(function(){return Ze})),n.d(t,"\u0275\u0275staticContentQuery",(function(){return Qg})),n.d(t,"\u0275\u0275staticViewQuery",(function(){return Hg})),n.d(t,"\u0275\u0275styleMap",(function(){return Dl})),n.d(t,"\u0275\u0275styleMapInterpolate1",(function(){return cu})),n.d(t,"\u0275\u0275styleMapInterpolate2",(function(){return lu})),n.d(t,"\u0275\u0275styleMapInterpolate3",(function(){return uu})),n.d(t,"\u0275\u0275styleMapInterpolate4",(function(){return hu})),n.d(t,"\u0275\u0275styleMapInterpolate5",(function(){return du})),n.d(t,"\u0275\u0275styleMapInterpolate6",(function(){return fu})),n.d(t,"\u0275\u0275styleMapInterpolate7",(function(){return pu})),n.d(t,"\u0275\u0275styleMapInterpolate8",(function(){return gu})),n.d(t,"\u0275\u0275styleMapInterpolateV",(function(){return mu})),n.d(t,"\u0275\u0275styleProp",(function(){return Sl})),n.d(t,"\u0275\u0275stylePropInterpolate1",(function(){return yu})),n.d(t,"\u0275\u0275stylePropInterpolate2",(function(){return bu})),n.d(t,"\u0275\u0275stylePropInterpolate3",(function(){return vu})),n.d(t,"\u0275\u0275stylePropInterpolate4",(function(){return _u})),n.d(t,"\u0275\u0275stylePropInterpolate5",(function(){return wu})),n.d(t,"\u0275\u0275stylePropInterpolate6",(function(){return xu})),n.d(t,"\u0275\u0275stylePropInterpolate7",(function(){return Cu})),n.d(t,"\u0275\u0275stylePropInterpolate8",(function(){return Eu})),n.d(t,"\u0275\u0275stylePropInterpolateV",(function(){return Su})),n.d(t,"\u0275\u0275styleSanitizer",(function(){return El})),n.d(t,"\u0275\u0275template",(function(){return Ec})),n.d(t,"\u0275\u0275templateRefExtractor",(function(){return Xg})),n.d(t,"\u0275\u0275text",(function(){return Ul})),n.d(t,"\u0275\u0275textInterpolate",(function(){return Hl})),n.d(t,"\u0275\u0275textInterpolate1",(function(){return zl})),n.d(t,"\u0275\u0275textInterpolate2",(function(){return ql})),n.d(t,"\u0275\u0275textInterpolate3",(function(){return Wl})),n.d(t,"\u0275\u0275textInterpolate4",(function(){return Ql})),n.d(t,"\u0275\u0275textInterpolate5",(function(){return Kl})),n.d(t,"\u0275\u0275textInterpolate6",(function(){return Gl})),n.d(t,"\u0275\u0275textInterpolate7",(function(){return Zl})),n.d(t,"\u0275\u0275textInterpolate8",(function(){return Yl})),n.d(t,"\u0275\u0275textInterpolateV",(function(){return Jl})),n.d(t,"\u0275\u0275updateSyntheticHostBinding",(function(){return Du})),n.d(t,"\u0275\u0275viewQuery",(function(){return zg}));var r=n("ZTXN"),o=n("bwdy"),i=n("IdLP"),s=n("g6G6"),a=n("5uGe");function c(){return function(e){return e.lift(new l(e))}}class l{constructor(e){this.connectable=e}call(e,t){const{connectable:n}=this;n._refCount++;const r=new u(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o}}class u extends a.a{constructor(e,t){super(e),this.connectable=t}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const t=e._refCount;if(t<=0)return void(this.connection=null);if(e._refCount=t-1,t>1)return void(this.connection=null);const{connection:n}=this,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class h extends i.a{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new o.a,e.add(this.source.subscribe(new f(this.getSubject(),this))),e.closed&&(this._connection=null,e=o.a.EMPTY)),e}refCount(){return c()(this)}}const d=(()=>{const e=h.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class f extends r.c{constructor(e,t){super(e),this.connectable=t}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}function p(){return new r.b}function g(e){return{toString:e}.toString()}const m="__annotations__",y="__parameters__",b="__prop__metadata__";function v(e,t,n,r,o){return g(()=>{const i=_(t);function s(...e){if(this instanceof s)return i.call(this,...e),this;const t=new s(...e);return function(n){return o&&o(n,...e),(n.hasOwnProperty(m)?n[m]:Object.defineProperty(n,m,{value:[]})[m]).push(t),r&&r(n),n}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=e,s.annotationCls=s,s})}function _(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}function w(e,t,n){return g(()=>{const r=_(t);function o(...e){if(this instanceof o)return r.apply(this,e),this;const t=new o(...e);return n.annotation=t,n;function n(e,n,r){const o=e.hasOwnProperty(y)?e[y]:Object.defineProperty(e,y,{value:[]})[y];for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(t),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}function x(e,t,n,r){return g(()=>{const o=_(t);function i(...e){if(this instanceof i)return o.apply(this,e),this;const t=new i(...e);return function(n,o){const i=n.constructor,s=i.hasOwnProperty(b)?i[b]:Object.defineProperty(i,b,{value:{}})[b];s[o]=s.hasOwnProperty(o)&&s[o]||[],s[o].unshift(t),r&&r(n,o,...e)}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i})}const C=w("Inject",e=>({token:e})),E=w("Optional"),S=w("Self"),k=w("SkipSelf"),D=w("Host"),O=w("Attribute",e=>({attributeName:e}));var I=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}({});function A(e){for(let t in e)if(e[t]===A)return t;throw Error("Could not find renamed property on target object.")}function P(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function j(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}const T=j;function N(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function R(e){return F(e,e[L])||F(e,e[B])}function F(e,t){return t&&t.token===e?t:null}function M(e){return e&&(e.hasOwnProperty($)||e.hasOwnProperty(U))?e[$]:null}const L=A({"\u0275prov":A}),$=A({"\u0275inj":A}),V=A({"\u0275provFallback":A}),B=A({ngInjectableDef:A}),U=A({ngInjectorDef:A});function H(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(H).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function z(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}const q=A({__forward_ref__:A});function W(e){return e.__forward_ref__=W,e.toString=function(){return H(this())},e}function Q(e){return K(e)?e():e}function K(e){return"function"==typeof e&&e.hasOwnProperty(q)&&e.__forward_ref__===W}const G="undefined"!=typeof globalThis&&globalThis,Z="undefined"!=typeof window&&window,Y="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,J="undefined"!=typeof global&&global,X=G||J||Z||Y;var ee=function(e){return e[e.Token=0]="Token",e[e.Attribute=1]="Attribute",e[e.ChangeDetectorRef=2]="ChangeDetectorRef",e[e.Invalid=3]="Invalid",e}({});function te(){const e=X.ng;if(!e||!e.\u0275compilerFacade)throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");return e.\u0275compilerFacade}const ne=A({"\u0275cmp":A}),re=A({"\u0275dir":A}),oe=A({"\u0275pipe":A}),ie=A({"\u0275mod":A}),se=A({"\u0275loc":A}),ae=A({"\u0275fac":A}),ce=A({__NG_ELEMENT_ID__:A});class le{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=j({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return`InjectionToken ${this._desc}`}}const ue=new le("INJECTOR",-1),he={},de=/\n/gm,fe=A({provide:String,useValue:A});let pe,ge=void 0;function me(e){const t=ge;return ge=e,t}function ye(e){const t=pe;return pe=e,t}function be(e,t=I.Default){if(void 0===ge)throw new Error("inject() must be called from an injection context");return null===ge?xe(e,void 0,t):ge.get(e,t&I.Optional?null:void 0,t)}function ve(e,t=I.Default){return(pe||be)(Q(e),t)}function _e(e){throw new Error("invalid")}const we=ve;function xe(e,t,n){const r=R(e);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&I.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${H(e)}]`)}function Ce(e){const t=[];for(let n=0;n<e.length;n++){const r=Q(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=I.Default;for(let t=0;t<r.length;t++){const o=r[t];o instanceof E||"Optional"===o.ngMetadataName||o===E?n|=I.Optional:o instanceof k||"SkipSelf"===o.ngMetadataName||o===k?n|=I.SkipSelf:o instanceof S||"Self"===o.ngMetadataName||o===S?n|=I.Self:e=o instanceof C||o===C?o.token:o}t.push(ve(e,n))}else t.push(ve(r))}return t}class Ee{get(e,t=he){if(t===he){const t=new Error(`NullInjectorError: No provider for ${H(e)}!`);throw t.name="NullInjectorError",t}return t}}const Se={"\u0275\u0275defineInjectable":j,"\u0275\u0275defineInjector":N,"\u0275\u0275inject":ve,"\u0275\u0275getFactoryOf":function e(t){const n=t;if(K(t))return()=>{const t=e(Q(n));return t?t():null};const r=R(n)||M(n);return r&&void 0!==r.factory?r.factory:null},"\u0275\u0275invalidFactoryDep":_e};class ke{}class De{}function Oe(e,t){for(let n=0;n<e.length;n++)t.push(e[n])}function Ie(e,t){void 0===t&&(t=e);for(let n=0;n<e.length;n++){let r=e[n];Array.isArray(r)?(t===e&&(t=e.slice(0,n)),Ie(r,t)):t!==e&&t.push(r)}return t}function Ae(e,t){e.forEach(e=>Array.isArray(e)?Ae(e,t):t(e))}function Pe(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function je(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function Te(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}function Ne(e,t,n){let r=Fe(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function Re(e,t){const n=Fe(e,t);if(n>=0)return e[1|n]}function Fe(e,t){return function(e,t,n){let r=0,o=e.length>>1;for(;o!==r;){const n=r+(o-r>>1),i=e[n<<1];if(t===i)return n<<1;i>t?o=n:r=n+1}return~(o<<1)}(e,t)}const Me=function(){var e={OnPush:0,Default:1};return e[e.OnPush]="OnPush",e[e.Default]="Default",e}(),Le=function(){var e={CheckOnce:0,Checked:1,CheckAlways:2,Detached:3,Errored:4,Destroyed:5};return e[e.CheckOnce]="CheckOnce",e[e.Checked]="Checked",e[e.CheckAlways]="CheckAlways",e[e.Detached]="Detached",e[e.Errored]="Errored",e[e.Destroyed]="Destroyed",e}();function $e(e){return null==e||e===Me.Default}const Ve=function(){var e={Emulated:0,Native:1,None:2,ShadowDom:3};return e[e.Emulated]="Emulated",e[e.Native]="Native",e[e.None]="None",e[e.ShadowDom]="ShadowDom",e}(),Be={},Ue=[];let He=0;function ze(e){return g(()=>{const t=e.type,n=t.prototype,r={},o={type:t,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onChanges:null,onInit:n.ngOnInit||null,doCheck:n.ngDoCheck||null,afterContentInit:n.ngAfterContentInit||null,afterContentChecked:n.ngAfterContentChecked||null,afterViewInit:n.ngAfterViewInit||null,afterViewChecked:n.ngAfterViewChecked||null,onDestroy:n.ngOnDestroy||null,onPush:e.changeDetection===Me.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||Ue,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Ve.Emulated,id:"c",styles:e.styles||Ue,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.directives,s=e.features,a=e.pipes;return o.id+=He++,o.inputs=Ye(e.inputs,r),o.outputs=Ye(e.outputs),s&&s.forEach(e=>e(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(We):null,o.pipeDefs=a?()=>("function"==typeof a?a():a).map(Qe):null,o})}function qe(e,t,n){const r=e.\u0275cmp;r.directiveDefs=()=>t.map(We),r.pipeDefs=()=>n.map(Qe)}function We(e){return et(e)||tt(e)}function Qe(e){return nt(e)}const Ke={};function Ge(e){const t={type:e.type,bootstrap:e.bootstrap||Ue,declarations:e.declarations||Ue,imports:e.imports||Ue,exports:e.exports||Ue,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&g(()=>{Ke[e.id]=e.type}),t}function Ze(e,t){return g(()=>{const n=ot(e,!0);n.declarations=t.declarations||Ue,n.imports=t.imports||Ue,n.exports=t.exports||Ue})}function Ye(e,t){if(null==e)return Be;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const Je=ze;function Xe(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function et(e){return e[ne]||null}function tt(e){return e[re]||null}function nt(e){return e[oe]||null}function rt(e,t){return e.hasOwnProperty(ae)?e[ae]:null}function ot(e,t){const n=e[ie]||null;if(!n&&!0===t)throw new Error(`Type ${H(e)} does not have '\u0275mod' property.`);return n}function it(e){return Array.isArray(e)&&"object"==typeof e[1]}function st(e){return Array.isArray(e)&&!0===e[1]}function at(e){return 0!=(8&e.flags)}function ct(e){return 2==(2&e.flags)}function lt(e){return 1==(1&e.flags)}function ut(e){return null!==e.template}function ht(e){return 0!=(512&e[2])}let dt=void 0;function ft(e){dt=e}function pt(){return void 0!==dt?dt:"undefined"!=typeof document?document:void 0}function gt(e){return!!e.listen}const mt={createRenderer:(e,t)=>pt()};function yt(e){for(;Array.isArray(e);)e=e[0];return e}function bt(e,t){return yt(t[e+19])}function vt(e,t){return yt(t[e.index])}function _t(e,t){const n=e.index;return-1!==n?yt(t[n]):null}function wt(e,t){return e.data[t+19]}function xt(e,t){return e[t+19]}function Ct(e,t){const n=t[e];return it(n)?n:n[0]}function Et(e){return e.__ngContext__||null}function St(e){const t=Et(e);return t?Array.isArray(t)?t:t.lView:null}function kt(e){return 4==(4&e[2])}function Dt(e){return 128==(128&e[2])}function Ot(e,t){return null===e||null==t?null:e[t]}function It(e){e[18]=0}function At(e){return e[2]>>1}const Pt={lFrame:tn(null),bindingsEnabled:!0,checkNoChangesMode:!1};function jt(){return Pt.bindingsEnabled}function Tt(){Pt.bindingsEnabled=!0}function Nt(){Pt.bindingsEnabled=!1}function Rt(){return Pt.lFrame.lView}function Ft(){return Pt.lFrame.tView}function Mt(e){Pt.lFrame.contextLView=e}function Lt(){return Pt.lFrame.previousOrParentTNode}function $t(e,t){Pt.lFrame.previousOrParentTNode=e,Pt.lFrame.isParent=t}function Vt(){return Pt.lFrame.isParent}function Bt(){Pt.lFrame.isParent=!1}function Ut(){return Pt.checkNoChangesMode}function Ht(e){Pt.checkNoChangesMode=e}function zt(){const e=Pt.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function qt(){return Pt.lFrame.bindingIndex}function Wt(e){return Pt.lFrame.bindingIndex=e}function Qt(){return Pt.lFrame.bindingIndex++}function Kt(e){const t=Pt.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Gt(e,t){const n=Pt.lFrame;n.bindingIndex=n.bindingRootIndex=e,n.currentDirectiveIndex=t}function Zt(){return Pt.lFrame.currentQueryIndex}function Yt(e){Pt.lFrame.currentQueryIndex=e}function Jt(e,t){const n=en();Pt.lFrame=n,n.previousOrParentTNode=t,n.lView=e}function Xt(e,t){const n=en(),r=e[1];Pt.lFrame=n,n.previousOrParentTNode=t,n.lView=e,n.tView=r,n.contextLView=e,n.bindingIndex=r.bindingStartIndex}function en(){const e=Pt.lFrame,t=null===e?null:e.child;return null===t?tn(e):t}function tn(e){const t={previousOrParentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentSanitizer:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return null!==e&&(e.child=t),t}function nn(){const e=Pt.lFrame;return Pt.lFrame=e.parent,e.previousOrParentTNode=null,e.lView=null,e}const rn=nn;function on(){const e=nn();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.currentSanitizer=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function sn(e){return(Pt.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Pt.lFrame.contextLView))[8]}function an(){return Pt.lFrame.selectedIndex}function cn(e){Pt.lFrame.selectedIndex=e}function ln(){const e=Pt.lFrame;return wt(e.tView,e.selectedIndex)}function un(){Pt.lFrame.currentNamespace="http://www.w3.org/2000/svg"}function hn(){Pt.lFrame.currentNamespace="http://www.w3.org/1998/MathML/"}function dn(){Pt.lFrame.currentNamespace=null}function fn(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n];t.afterContentInit&&(e.contentHooks||(e.contentHooks=[])).push(-n,t.afterContentInit),t.afterContentChecked&&((e.contentHooks||(e.contentHooks=[])).push(n,t.afterContentChecked),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,t.afterContentChecked)),t.afterViewInit&&(e.viewHooks||(e.viewHooks=[])).push(-n,t.afterViewInit),t.afterViewChecked&&((e.viewHooks||(e.viewHooks=[])).push(n,t.afterViewChecked),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,t.afterViewChecked)),null!=t.onDestroy&&(e.destroyHooks||(e.destroyHooks=[])).push(n,t.onDestroy)}}function pn(e,t,n){yn(e,t,3,n)}function gn(e,t,n,r){(3&e[2])===n&&yn(e,t,n,r)}function mn(e,t){let n=e[2];(3&n)===t&&(n&=1023,n+=1,e[2]=n)}function yn(e,t,n,r){const o=null!=r?r:-1;let i=0;for(let s=void 0!==r?65535&e[18]:0;s<t.length;s++)if("number"==typeof t[s+1]){if(i=t[s],null!=r&&i>=r)break}else t[s]<0&&(e[18]+=65536),(i<o||-1==o)&&(bn(e,n,t,s),e[18]=(4294901760&e[18])+s+2),s++}function bn(e,t,n,r){const o=n[r]<0,i=n[r+1],s=e[o?-n[r]:n[r]];o?e[2]>>10<e[18]>>16&&(3&e[2])===t&&(e[2]+=1024,i.call(s)):i.call(s)}class vn{constructor(e,t,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=n}}function _n(e,t,n){const r=gt(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],c=n[o++];r?e.setAttribute(t,a,c,s):t.setAttributeNS(s,a,c)}else{const s=i,a=n[++o];xn(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function wn(e){return 3===e||4===e||6===e}function xn(e){return 64===e.charCodeAt(0)}function Cn(e,t){if(null===t||0===t.length);else if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||En(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function En(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const n=e[i++];if("number"==typeof n){if(n===t){s=-1;break}if(n>t){s=i-1;break}}}for(;i<e.length;){const t=e[i];if("number"==typeof t)break;if(t===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}function Sn(e){return-1!==e}function kn(e){return 32767&e}function Dn(e){return e>>16}function On(e,t){let n=Dn(e),r=t;for(;n>0;)r=r[15],n--;return r}function In(e){return"string"==typeof e?e:null==e?"":""+e}function An(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():In(e)}const Pn=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(X))();function jn(e){return{name:"window",target:e.ownerDocument.defaultView}}function Tn(e){return{name:"document",target:e.ownerDocument}}function Nn(e){return{name:"body",target:e.ownerDocument.body}}function Rn(e){return e instanceof Function?e():e}let Fn=!0;function Mn(e){const t=Fn;return Fn=e,t}let Ln=0;function $n(e,t){const n=Bn(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Vn(r.data,e),Vn(t,null),Vn(r.blueprint,null));const o=Un(e,t),i=e.injectorIndex;if(Sn(o)){const e=kn(o),n=On(o,t),r=n[1].data;for(let o=0;o<8;o++)t[i+o]=n[e+o]|r[e+o]}return t[i+8]=o,i}function Vn(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Bn(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null==t[e.injectorIndex+8]?-1:e.injectorIndex}function Un(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=t[6],r=1;for(;n&&-1===n.injectorIndex;)n=(t=t[15])?t[6]:null,r++;return n?n.injectorIndex|r<<16:-1}function Hn(e,t,n){!function(e,t,n){let r="string"!=typeof n?n[ce]:n.charCodeAt(0)||0;null==r&&(r=n[ce]=Ln++);const o=255&r,i=1<<o,s=64&o,a=32&o,c=t.data;128&o?s?a?c[e+7]|=i:c[e+6]|=i:a?c[e+5]|=i:c[e+4]|=i:s?a?c[e+3]|=i:c[e+2]|=i:a?c[e+1]|=i:c[e]|=i}(e,t,n)}function zn(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const e=n.length;let r=0;for(;r<e;){const o=n[r];if(wn(o))break;if(0===o)r+=2;else if("number"==typeof o)for(r++;r<e&&"string"==typeof n[r];)r++;else{if(o===t)return n[r+1];r+=2}}}return null}function qn(e,t,n,r=I.Default,o){if(null!==e){const o=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e[ce];return"number"==typeof t&&t>0?255&t:t}(n);if("function"==typeof o){Jt(t,e);try{const e=o();if(null!=e||r&I.Optional)return e;throw new Error(`No provider for ${An(n)}!`)}finally{rn()}}else if("number"==typeof o){if(-1===o)return new Jn(e,t);let i=null,s=Bn(e,t),a=-1,c=r&I.Host?t[16][6]:null;for((-1===s||r&I.SkipSelf)&&(a=-1===s?Un(e,t):t[s+8],Yn(r,!1)?(i=t[1],s=kn(a),t=On(a,t)):s=-1);-1!==s;){a=t[s+8];const e=t[1];if(Zn(o,s,e.data)){const e=Qn(s,t,n,i,r,c);if(e!==Wn)return e}Yn(r,t[1].data[s+8]===c)&&Zn(o,s,t)?(i=e,s=kn(a),t=On(a,t)):s=-1}}}if(r&I.Optional&&void 0===o&&(o=null),0==(r&(I.Self|I.Host))){const e=t[9],i=ye(void 0);try{return e?e.get(n,o,r&I.Optional):xe(n,o,r&I.Optional)}finally{ye(i)}}if(r&I.Optional)return o;throw new Error(`NodeInjector: NOT_FOUND [${An(n)}]`)}const Wn={};function Qn(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=Kn(a,s,n,null==r?ct(a)&&Fn:r!=s&&3===a.type,o&I.Host&&i===a);return null!==c?Gn(t,s,c,a):Wn}function Kn(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=65535&i,c=e.directiveStart,l=i>>16,u=o?a+l:e.directiveEnd;for(let h=r?a:a+l;h<u;h++){const e=s[h];if(h<c&&n===e||h>=c&&e.type===n)return h}if(o){const e=s[c];if(e&&ut(e)&&e.type===n)return c}return null}function Gn(e,t,n,r){let o=e[n];const i=t.data;if(o instanceof vn){const s=o;if(s.resolving)throw new Error(`Circular dep for ${An(i[n])}`);const a=Mn(s.canSeeViewProviders);let c;s.resolving=!0,s.injectImpl&&(c=ye(s.injectImpl)),Jt(e,r);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&function(e,t,n){const{onChanges:r,onInit:o,doCheck:i}=t;r&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)),o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{s.injectImpl&&ye(c),Mn(a),s.resolving=!1,rn()}}return o}function Zn(e,t,n){const r=64&e,o=32&e;let i;return i=128&e?r?o?n[t+7]:n[t+6]:o?n[t+5]:n[t+4]:r?o?n[t+3]:n[t+2]:o?n[t+1]:n[t],!!(i&1<<e)}function Yn(e,t){return!(e&I.Self||e&I.Host&&t)}class Jn{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return qn(this._tNode,this._lView,e,void 0,t)}}function Xn(e){const t=e;if(K(e))return()=>{const e=Xn(Q(t));return e?e():null};let n=rt(t);if(null===n){const e=M(t);n=e&&e.factory}return n||null}function er(e){return g(()=>{const t=Object.getPrototypeOf(e.prototype).constructor,n=t[ae]||Xn(t);return null!==n?n:e=>new e})}function tr(e){return e.ngDebugContext}function nr(e){return e.ngOriginalError}function rr(e,...t){e.error(...t)}class or{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||rr}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?tr(e)?tr(e):this._findContext(nr(e)):null}_findOriginalError(e){let t=nr(e);for(;t&&nr(t);)t=nr(t);return t}}const ir={name:"custom-elements"},sr={name:"no-errors-schema"};class ar{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`+" (see http://g.co/ng/security#xss)"}}class cr extends ar{getTypeName(){return"HTML"}}class lr extends ar{getTypeName(){return"Style"}}class ur extends ar{getTypeName(){return"Script"}}class hr extends ar{getTypeName(){return"URL"}}class dr extends ar{getTypeName(){return"ResourceURL"}}function fr(e){return e instanceof ar?e.changingThisBreaksApplicationSecurity:e}function pr(e,t){const n=gr(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see http://g.co/ng/security#xss)`)}return n===t}function gr(e){return e instanceof ar&&e.getTypeName()||null}function mr(e){return new cr(e)}function yr(e){return new lr(e)}function br(e){return new ur(e)}function vr(e){return new hr(e)}function _r(e){return new dr(e)}let wr=!0,xr=!1;function Cr(){return xr=!0,wr}function Er(){if(xr)throw new Error("Cannot enable prod mode after platform setup.");wr=!1}class Sr{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");let t=this.inertDocument.body;if(null==t){const e=this.inertDocument.createElement("html");this.inertDocument.appendChild(e),t=this.inertDocument.createElement("body"),e.appendChild(t)}t.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',!t.querySelector||t.querySelector("svg")?(t.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',this.getInertBodyElement=t.querySelector&&t.querySelector("svg img")&&function(){try{return!!window.DOMParser}catch(e){return!1}}()?this.getInertBodyElement_DOMParser:this.getInertBodyElement_InertDocument):this.getInertBodyElement=this.getInertBodyElement_XHR}getInertBodyElement_XHR(e){e="<body><remove></remove>"+e+"</body>";try{e=encodeURI(e)}catch(r){return null}const t=new XMLHttpRequest;t.responseType="document",t.open("GET","data:text/html;charset=utf-8,"+e,!1),t.send(void 0);const n=t.response.body;return n.removeChild(n.firstChild),n}getInertBodyElement_DOMParser(e){e="<body><remove></remove>"+e+"</body>";try{const t=(new window.DOMParser).parseFromString(e,"text/html").body;return t.removeChild(t.firstChild),t}catch(t){return null}}getInertBodyElement_InertDocument(e){const t=this.inertDocument.createElement("template");if("content"in t)return t.innerHTML=e,t;const n=this.inertDocument.createElement("body");return n.innerHTML=e,this.defaultDoc.documentMode&&this.stripCustomNsAttrs(n),n}stripCustomNsAttrs(e){const t=e.attributes;for(let r=t.length-1;0<r;r--){const n=t.item(r).name;"xmlns:ns1"!==n&&0!==n.indexOf("ns1:")||e.removeAttribute(n)}let n=e.firstChild;for(;n;)n.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(n),n=n.nextSibling}}const kr=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Dr=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function Or(e){return(e=String(e)).match(kr)||e.match(Dr)?e:(Cr()&&console.warn(`WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`),"unsafe:"+e)}function Ir(e){return(e=String(e)).split(",").map(e=>Or(e.trim())).join(", ")}function Ar(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function Pr(...e){const t={};for(const n of e)for(const e in n)n.hasOwnProperty(e)&&(t[e]=!0);return t}const jr=Ar("area,br,col,hr,img,wbr"),Tr=Ar("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Nr=Ar("rp,rt"),Rr=Pr(Nr,Tr),Fr=Pr(jr,Pr(Tr,Ar("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Pr(Nr,Ar("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Rr),Mr=Ar("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Lr=Ar("srcset"),$r=Pr(Mr,Lr,Ar("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Ar("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),Vr=Ar("script,style,template");class Br{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let t=e.firstChild,n=!0;for(;t;)if(t.nodeType===Node.ELEMENT_NODE?n=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,n&&t.firstChild)t=t.firstChild;else for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let e=this.checkClobberedElement(t,t.nextSibling);if(e){t=e;break}t=this.checkClobberedElement(t,t.parentNode)}return this.buf.join("")}startElement(e){const t=e.nodeName.toLowerCase();if(!Fr.hasOwnProperty(t))return this.sanitizedSomething=!0,!Vr.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);const n=e.attributes;for(let r=0;r<n.length;r++){const e=n.item(r),t=e.name,o=t.toLowerCase();if(!$r.hasOwnProperty(o)){this.sanitizedSomething=!0;continue}let i=e.value;Mr[o]&&(i=Or(i)),Lr[o]&&(i=Ir(i)),this.buf.push(" ",t,'="',zr(i),'"')}return this.buf.push(">"),!0}endElement(e){const t=e.nodeName.toLowerCase();Fr.hasOwnProperty(t)&&!jr.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(zr(e))}checkClobberedElement(e,t){if(t&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return t}}const Ur=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,Hr=/([^\#-~ |!])/g;function zr(e){return e.replace(/&/g,"&amp;").replace(Ur,(function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"})).replace(Hr,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let qr;function Wr(e,t){let n=null;try{qr=qr||new Sr(e);let r=t?String(t):"";n=qr.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=qr.getInertBodyElement(r)}while(r!==i);const s=new Br,a=s.sanitizeChildren(Qr(n)||n);return Cr()&&s.sanitizedSomething&&console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"),a}finally{if(n){const e=Qr(n)||n;for(;e.firstChild;)e.removeChild(e.firstChild)}}}function Qr(e){return"content"in e&&function(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}(e)?e.content:null}const Kr=function(){var e={NONE:0,HTML:1,STYLE:2,SCRIPT:3,URL:4,RESOURCE_URL:5};return e[e.NONE]="NONE",e[e.HTML]="HTML",e[e.STYLE]="STYLE",e[e.SCRIPT]="SCRIPT",e[e.URL]="URL",e[e.RESOURCE_URL]="RESOURCE_URL",e}(),Gr=new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$","g"),Zr=/^url\(([^)]+)\)$/;function Yr(e){if(!(e=String(e).trim()))return"";const t=e.match(Zr);return t&&Or(t[1])===t[1]||e.match(Gr)&&function(e){let t=!0,n=!0;for(let r=0;r<e.length;r++){const o=e.charAt(r);"'"===o&&n?t=!t:'"'===o&&t&&(n=!n)}return t&&n}(e)?e:(Cr()&&console.warn(`WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`),"unsafe")}function Jr(e){const t=ao();return t?t.sanitize(Kr.HTML,e)||"":pr(e,"HTML")?fr(e):Wr(pt(),In(e))}function Xr(e){const t=ao();return t?t.sanitize(Kr.STYLE,e)||"":pr(e,"Style")?fr(e):Yr(In(e))}function eo(e){const t=ao();return t?t.sanitize(Kr.URL,e)||"":pr(e,"URL")?fr(e):Or(In(e))}function to(e){const t=ao();if(t)return t.sanitize(Kr.RESOURCE_URL,e)||"";if(pr(e,"ResourceURL"))return fr(e);throw new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)")}function no(e){const t=ao();if(t)return t.sanitize(Kr.SCRIPT,e)||"";if(pr(e,"Script"))return fr(e);throw new Error("unsafe value used in a script context")}function ro(e,t){return"src"===t&&("embed"===e||"frame"===e||"iframe"===e||"media"===e||"script"===e)||"href"===t&&("base"===e||"link"===e)?to:eo}function oo(e,t,n){return ro(t,n)(e)}const io=function(e,t,n){if(void 0===t&&void 0===n)return Xr(e);let r=!0;return 1&(n=n||3)&&(r=so(e)),2&n?r?Xr(t):fr(t):r};function so(e){return"background-image"===e||"backgroundImage"===e||"background"===e||"border-image"===e||"borderImage"===e||"border-image-source"===e||"borderImageSource"===e||"filter"===e||"list-style"===e||"listStyle"===e||"list-style-image"===e||"listStyleImage"===e||"clip-path"===e||"clipPath"===e}function ao(){const e=Rt();return e&&e[12]}const co=/([A-Z])/g;function lo(e){try{return null!=e?e.toString().slice(0,30):e}catch(t){return"[ERROR] Exception while trying to serialize the value"}}function uo(e){let t=Et(e);if(t){if(Array.isArray(t)){const r=t;let o,i=void 0,s=void 0;if((n=e)&&n.constructor&&n.constructor.\u0275cmp){if(o=yo(r,e),-1==o)throw new Error("The provided component was not found in the application");i=e}else if(function(e){return e&&e.constructor&&e.constructor.\u0275dir}(e)){if(o=function(e,t){let n=e[1].firstChild;for(;n;){const r=n.directiveEnd;for(let o=n.directiveStart;o<r;o++)if(e[o]===t)return n.index;n=mo(n)}return-1}(r,e),-1==o)throw new Error("The provided directive was not found in the application");s=bo(o,r,!1)}else if(o=go(r,e),-1==o)return null;const a=yt(r[o]),c=Et(a),l=c&&!Array.isArray(c)?c:ho(r,o,a);if(i&&void 0===l.component&&(l.component=i,po(l.component,l)),s&&void 0===l.directives){l.directives=s;for(let e=0;e<s.length;e++)po(s[e],l)}po(l.native,l),t=l}}else{const n=e;let r=n;for(;r=r.parentNode;){const e=Et(r);if(e){let r;if(r=Array.isArray(e)?e:e.lView,!r)return null;const o=go(r,n);if(o>=0){const e=yt(r[o]),n=ho(r,o,e);po(e,n),t=n;break}}}}var n;return t||null}function ho(e,t,n){return{lView:e,nodeIndex:t,native:n,component:void 0,directives:void 0,localRefs:void 0}}function fo(e){let t,n=Et(e);if(Array.isArray(n)){const r=yo(n,e);t=Ct(r,n);const o=ho(n,r,t[0]);o.component=e,po(e,o),po(o.native,o)}else t=Ct(n.nodeIndex,n.lView);return t}function po(e,t){e.__ngContext__=t}function go(e,t){let n=e[1].firstChild;for(;n;){if(_t(n,e)===t)return n.index;n=mo(n)}return-1}function mo(e){if(e.child)return e.child;if(e.next)return e.next;for(;e.parent&&!e.parent.next;)e=e.parent;return e.parent&&e.parent.next}function yo(e,t){const n=e[1].components;if(n)for(let r=0;r<n.length;r++){const o=n[r];if(Ct(o,e)[8]===t)return o}else if(Ct(19,e)[8]===t)return 19;return-1}function bo(e,t,n){const r=t[1].data[e];let o=r.directiveStart;return 0==o?Ue:(!n&&2&r.flags&&o++,t.slice(o,r.directiveEnd))}function vo(e){throw new Error(`Multiple components match node with tagname ${e.tagName}`)}function _o(){throw new Error("Cannot mix multi providers and regular providers")}function wo(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const n=t.length;if(o+n===r||e.charCodeAt(o+n)<=32)return o}n=o+1}}function xo(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==wo(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function Co(e,t,n){return t===(0!==e.type||n?e.tagName:"ng-template")}function Eo(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(wn(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const c=t[a];if("number"!=typeof c){if(!s)if(4&r){if(r=2|1&r,""!==c&&!Co(e,c,n)||""===c&&1===t.length){if(So(r))return!1;s=!0}}else{const l=8&r?c:t[++a];if(8&r&&null!==e.attrs){if(!xo(e.attrs,l,n)){if(So(r))return!1;s=!0}continue}const u=ko(8&r?"class":c,o,0==e.type&&"ng-template"!==e.tagName,n);if(-1===u){if(So(r))return!1;s=!0;continue}if(""!==l){let e;e=u>i?"":o[u+1].toLowerCase();const t=8&r?e:null;if(t&&-1!==wo(t,l,0)||2&r&&l!==e){if(So(r))return!1;s=!0}}}}else{if(!s&&!So(r)&&!So(c))return!1;if(s&&So(c))continue;s=!1,r=c|1&r}}return So(r)||s}function So(e){return 0==(1&e)}function ko(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let n=!1;for(;o<t.length;){const r=t[o];if(r===e)return o;if(3===r||6===r)n=!0;else{if(1===r||2===r){let e=t[++o];for(;"string"==typeof e;)e=t[++o];continue}if(4===r)break;if(0===r){o+=4;continue}}o+=n?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){if(e[n]===t)return n;n++}return-1}(t,e)}function Do(e,t,n=!1){for(let r=0;r<t.length;r++)if(Eo(e,t[r],n))return!0;return!1}function Oo(e,t){e:for(let n=0;n<t.length;n++){const r=t[n];if(e.length===r.length){for(let t=0;t<e.length;t++)if(e[t]!==r[t])continue e;return!0}}return!1}function Io(e,t){return e?":not("+t.trim()+")":t}function Ao(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const t=e[++n];o+="["+s+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||So(s)||(t+=Io(i,o),o=""),r=s,i=i||!So(r);n++}return""!==o&&(t+=Io(i,o)),t}const Po={};function jo(e){const t=e[3];return st(t)?t[3]:t}function To(e){return function(e){let t=it(e)?e:St(e);for(;t&&!(512&t[2]);)t=jo(t);return t}(e)[8]}function No(e){Fo(Ft(),Rt(),an()+e,Ut())}function Ro(e){Fo(Ft(),Rt(),e,Ut())}function Fo(e,t,n,r){if(!r)if(3==(3&t[2])){const r=e.preOrderCheckHooks;null!==r&&pn(t,r,n)}else{const r=e.preOrderHooks;null!==r&&gn(t,r,0,n)}cn(n)}const Mo={marker:"element"},Lo={marker:"comment"};function $o(e,t){return e<<17|t<<2}function Vo(e){return e>>17&32767}function Bo(e){return 2|e}function Uo(e){return(131068&e)>>2}function Ho(e,t){return-131069&e|t<<2}function zo(e){return 1|e}const qo=(()=>Promise.resolve(null))();function Wo(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=e.data[i];Yt(o),n.contentQueries(2,t[i],i)}}}function Qo(e,t,n){return gt(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Ko(e,t,n,r,o,i,s,a,c,l){const u=t.blueprint.slice();return u[0]=o,u[2]=140|r,It(u),u[3]=u[15]=e,u[8]=n,u[10]=s||e&&e[10],u[11]=a||e&&e[11],u[12]=c||e&&e[12]||null,u[9]=l||e&&e[9]||null,u[6]=i,u[16]=2==t.type?e[16]:u,u}function Go(e,t,n,r,o,i){const s=n+19,a=e.data[s]||function(e,t,n,r,o,i){const s=Lt(),a=Vt(),c=a?s:s&&s.parent,l=e.data[n]=ai(0,c&&c!==t?c:null,r,n,o,i);return null===e.firstChild&&(e.firstChild=l),s&&(!a||null!=s.child||null===l.parent&&2!==s.type?a||(s.next=l):s.child=l),l}(e,t,s,r,o,i);return $t(a,!0),a}function Zo(e,t,n,r){let o=e.node;return null==o&&(e.node=o=ai(0,t,2,n,null,null)),r[6]=o}function Yo(e,t,n){Xt(t,t[6]);try{const r=e.viewQuery;null!==r&&ji(1,r,n);const o=e.template;null!==o&&ei(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Wo(e,t),e.staticViewQueries&&ji(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)ki(e,t[n])}(t,i)}finally{t[2]&=-5,on()}}function Jo(e,t,n,r){const o=t[2];if(256==(256&o))return;Xt(t,t[6]);const i=Ut();try{It(t),Wt(e.bindingStartIndex),null!==n&&ei(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const n=e.preOrderCheckHooks;null!==n&&pn(t,n,null)}else{const n=e.preOrderHooks;null!==n&&gn(t,n,0,null),mn(t,0)}if(function(e){let t=e[13];for(;null!==t;){let n;if(st(t)&&(n=t[2])>>1==-1){for(let e=9;e<t.length;e++){const n=t[e],r=n[1];Dt(n)&&Jo(r,n,r.template,n[8])}0!=(1&n)&&Ei(t,e[16])}t=t[4]}}(t),null!==e.contentQueries&&Wo(e,t),!i)if(s){const n=e.contentCheckHooks;null!==n&&pn(t,n)}else{const n=e.contentHooks;null!==n&&gn(t,n,1),mn(t,1)}!function(e,t){try{const n=e.expandoInstructions;if(null!==n){let r=e.expandoStartIndex,o=-1,i=-1;for(let e=0;e<n.length;e++){const s=n[e];"number"==typeof s?s<=0?(i=0-s,cn(i),r+=9+n[++e],o=r):r+=s:(null!==s&&(Gt(r,o),s(2,t[o])),o++)}}}finally{cn(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)Si(e,t[n])}(t,a);const c=e.viewQuery;if(null!==c&&ji(2,c,r),!i)if(s){const n=e.viewCheckHooks;null!==n&&pn(t,n)}else{const n=e.viewHooks;null!==n&&gn(t,n,2),mn(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73)}finally{on()}}function Xo(e,t,n,r){const o=t[10],i=!Ut(),s=kt(t);try{i&&!s&&o.begin&&o.begin(),s&&Yo(e,t,r),Jo(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function ei(e,t,n,r,o){const i=an();try{cn(-1),2&r&&t.length>19&&Fo(e,t,0,Ut()),n(r,o)}finally{cn(i)}}function ti(e,t,n){if(at(t)){const r=t.directiveEnd;for(let o=t.directiveStart;o<r;o++){const t=e.data[o];t.contentQueries&&t.contentQueries(1,n[o],o)}}}function ni(e,t,n){jt()&&(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||$n(n,t),po(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const r=e.data[a],i=ut(r);i&&vi(t,n,r);const c=Gn(t,e,a,n);po(c,t),null!==s&&wi(0,a-o,c,r,0,s),i&&(Ct(n.index,t)[8]=c)}}(e,t,n,vt(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=e.expandoInstructions,s=e.firstCreatePass,a=n.index-19;try{cn(a);for(let n=r;n<o;n++){const r=e.data[n],o=t[n];null!==r.hostBindings||0!==r.hostVars||null!==r.hostAttrs?fi(r,o):s&&i.push(null)}}finally{cn(-1)}}(e,t,n))}function ri(e,t,n=vt){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function oi(e){return e.tView||(e.tView=ii(1,-1,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts))}function ii(e,t,n,r,o,i,s,a,c,l){const u=19+r,h=u+o,d=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Po);return n}(u,h);return d[1]={type:e,id:t,blueprint:d,template:n,queries:null,viewQuery:a,node:null,data:d.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:h,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:c,consts:l}}function si(e,t,n){if(gt(e))return e.selectRootElement(t,n===Ve.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}function ai(e,t,n,r,o,i){return{type:n,index:r,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,residualStyles:void 0,classes:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function ci(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function li(e,t,n,r,o,i,s,a){const c=vt(t,n);let l,u=t.inputs;var h;!a&&null!=u&&(l=u[r])?(Li(e,n,l,r,o),ct(t)&&function(e,t){const n=Ct(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3===t.type&&(r="class"===(h=r)?"className":"for"===h?"htmlFor":"formaction"===h?"formAction":"innerHtml"===h?"innerHTML":"readonly"===h?"readOnly":"tabindex"===h?"tabIndex":h,o=null!=s?s(o,t.tagName||"",r):o,gt(i)?i.setProperty(c,r,o):xn(r)||(c.setProperty?c.setProperty(r,o):c[r]=o))}function ui(e,t,n,r){let o=!1;if(jt()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Do(n,s.selectors,!1)&&(o||(o=[]),Hn($n(n,t),e,s.type),ut(s)?(2&n.flags&&vo(n),gi(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){let r=0;o=!0,yi(n,e.data.length,i.length);for(let e=0;e<i.length;e++){const t=i[e];t.providersResolver&&t.providersResolver(t)}pi(e,n,i.length);let a=!1,c=!1;for(let o=0;o<i.length;o++){const l=i[o];n.mergedAttrs=Cn(n.mergedAttrs,l.hostAttrs),bi(e,t,l),mi(e.data.length-1,l,s),null!==l.contentQueries&&(n.flags|=8),null===l.hostBindings&&null===l.hostAttrs&&0===l.hostVars||(n.flags|=128),!a&&(l.onChanges||l.onInit||l.doCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index-19),a=!0),c||!l.onChanges&&!l.doCheck||((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index-19),c=!0),hi(e,l),r+=l.hostVars}!function(e,t){const n=t.directiveEnd,r=e.data,o=t.attrs,i=[];let s=null,a=null;for(let c=t.directiveStart;c<n;c++){const e=r[c],t=e.inputs;i.push(null!==o?xi(t,o):null),s=ci(t,c,s),a=ci(e.outputs,c,a)}null!==s&&(s.hasOwnProperty("class")&&(t.flags|=16),s.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=i,t.inputs=s,t.outputs=a}(e,n),di(e,t,r)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let e=0;e<t.length;e+=2){const o=n[t[e+1]];if(null==o)throw new Error(`Export of name '${t[e+1]}' not found!`);r.push(t[e],o)}}}(n,r,s)}return n.mergedAttrs=Cn(n.mergedAttrs,n.attrs),o}function hi(e,t){const n=e.expandoInstructions;n.push(t.hostBindings),0!==t.hostVars&&n.push(t.hostVars)}function di(e,t,n){for(let r=0;r<n;r++)t.push(Po),e.blueprint.push(Po),e.data.push(null)}function fi(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function pi(e,t,n){const r=19-t.index,o=e.data.length-(65535&t.providerIndexes);(e.expandoInstructions||(e.expandoInstructions=[])).push(r,o,n)}function gi(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function mi(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;ut(t)&&(n[""]=e)}}function yi(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function bi(e,t,n){e.data.push(n);const r=n.factory||(n.factory=rt(n.type)),o=new vn(r,ut(n),null);e.blueprint.push(o),t.push(o)}function vi(e,t,n){const r=vt(t,e),o=oi(n),i=e[10],s=Di(e,Ko(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n)));e[t.index]=s}function _i(e,t,n,r,o,i){const s=vt(e,t),a=t[11];if(null==r)gt(a)?a.removeAttribute(s,n,i):s.removeAttribute(n);else{const t=null==o?In(r):o(r,e.tagName||"",n);gt(a)?a.setAttribute(s,n,t,i):i?s.setAttributeNS(i,n,t):s.setAttribute(n,t)}}function wi(e,t,n,r,o,i){const s=i[t];if(null!==s){const e=r.setInput;for(let t=0;t<s.length;){const o=s[t++],i=s[t++],a=s[t++];null!==e?r.setInput(n,a,o,i):n[i]=a}}}function xi(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function Ci(e,t,n,r){return new Array(e,!0,-2,t,null,null,r,n,null)}function Ei(e,t){const n=e[5];for(let r=0;r<n.length;r++){const e=n[r],o=e[3][3][16];if(o!==t&&0==(16&o[2])){const t=e[1];Jo(t,e,t.template,e[8])}}}function Si(e,t){const n=Ct(t,e);if(Dt(n)&&80&n[2]){const e=n[1];Jo(e,n,e.template,n[8])}}function ki(e,t){const n=Ct(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),Yo(r,n,n[8])}function Di(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Oi(e){for(;e;){e[2]|=64;const t=jo(e);if(ht(e)&&!t)return e;e=t}return null}function Ii(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=St(n),o=r[1];Xo(o,r,o.template,n)}}function Ai(e,t,n){const r=t[10];r.begin&&r.begin();try{Jo(e,t,e.template,n)}catch(o){throw Mi(t,o),o}finally{r.end&&r.end()}}function Pi(e){Ii(e[8])}function ji(e,t,n){Yt(0),t(e,n)}const Ti=qo;function Ni(e){return e[7]||(e[7]=[])}function Ri(e){return e.cleanup||(e.cleanup=[])}function Fi(e,t){return function(e){for(;Array.isArray(e);){if("object"==typeof e[1])return e;e=e[0]}return null}(t[e.index])[11]}function Mi(e,t){const n=e[9],r=n?n.get(or,null):null;r&&r.handleError(t)}function Li(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],c=t[s],l=e.data[s];null!==l.setInput?l.setInput(c,o,r,a):c[a]=o}}function $i(e,t,n){const r=bt(t,e),o=e[11];gt(o)?o.setValue(r,n):r.textContent=n}function Vi(e,t){const n=t[3];return-1===e.index?st(n)?n:null:n}function Bi(e,t){const n=Vi(e,t);return n?ns(t[11],n[7]):null}function Ui(e,t,n,r,o){if(null!=r){let i,s=!1;st(r)?i=r:it(r)&&(s=!0,r=r[0]);const a=yt(r);0===e&&null!==n?null==o?es(t,n,a):Xi(t,n,a,o||null):1===e&&null!==n?Xi(t,n,a,o||null):2===e?ss(t,a,s):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,r,o){const i=n[7];i!==yt(n)&&Ui(t,e,r,i,o);for(let s=9;s<n.length;s++){const o=n[s];cs(o[1],o,e,t,r,i)}}(t,e,i,n,o)}}function Hi(e,t){return gt(t)?t.createText(e):t.createTextNode(e)}function zi(e,t,n,r){const o=Bi(e.node,t);o&&cs(e,t,t[11],n?1:2,o,r)}function qi(e,t,n,r){const o=9+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-9?(t[4]=n[o],Pe(n,9+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[5],r=t[3][3][16];16!=(16&r[2])&&t[16]!==r&&(e[2]|=1),null===n?e[5]=[t]:n.push(t)}(s,t);const a=t[5];null!==a&&a.insertView(e),t[2]|=128}function Wi(e,t){const n=e[5],r=n.indexOf(t);n.splice(r,1)}function Qi(e,t){if(e.length<=9)return;const n=9+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&Wi(o,r),t>0&&(e[n-1][4]=r[4]);const i=je(e,9+t);zi(r[1],r,!1,null);const s=i[5];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Ki(e,t){const n=Qi(e,t);n&&Gi(n[1],n)}function Gi(e,t){if(!(256&t[2])){const n=t[11];gt(n)&&n.destroyNode&&cs(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return Yi(e[1],e);for(;t;){let n=null;if(it(t))n=t[13];else{const e=t[9];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)it(t)&&Yi(t[1],t),t=Zi(t,e);null===t&&(t=e),it(t)&&Yi(t[1],t),n=t&&t[4]}t=n}}(t)}}function Zi(e,t){let n;return it(e)&&(n=e[6])&&2===n.type?Vi(n,e):e[3]===t?null:e[3]}function Yi(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const e=t[n[r]];if(!(e instanceof vn)){const t=n[r+1];if(Array.isArray(t))for(let n=0;n<t.length;n+=2)t[n+1].call(e[t[n]]);else t.call(e)}}}(e,t),function(e,t){const n=e.cleanup;if(null!==n){const e=t[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const o=n[r+1],i="function"==typeof o?o(t):yt(t[o]),s=e[n[r+2]],a=n[r+3];"boolean"==typeof a?i.removeEventListener(n[r],s,a):a>=0?e[a]():e[-a].unsubscribe(),r+=2}else n[r].call(e[n[r+1]]);t[7]=null}}(e,t);const n=t[6];n&&3===n.type&&gt(t[11])&&t[11].destroy();const r=t[17];if(null!==r&&st(t[3])){r!==t[3]&&Wi(r,t);const n=t[5];null!==n&&n.detachView(e)}}}function Ji(e,t,n){let r=t.parent;for(;null!=r&&(4===r.type||5===r.type);)r=(t=r).parent;if(null==r){const e=n[6];return 2===e.type?Bi(e,n):n[0]}if(t&&5===t.type&&4&t.flags)return vt(t,n).parentNode;if(2&r.flags){const t=e.data,n=t[t[r.index].directiveStart].encapsulation;if(n!==Ve.ShadowDom&&n!==Ve.Native)return null}return vt(r,n)}function Xi(e,t,n,r){gt(e)?e.insertBefore(t,n,r):t.insertBefore(n,r,!0)}function es(e,t,n){gt(e)?e.appendChild(t,n):t.appendChild(n)}function ts(e,t,n,r){null!==r?Xi(e,t,n,r):es(e,t,n)}function ns(e,t){return gt(e)?e.parentNode(t):t.parentNode}function rs(e,t){if(2===e.type){const n=Vi(e,t);return null===n?null:is(n.indexOf(t,9)-9,n)}return 4===e.type||5===e.type?vt(e,t):null}function os(e,t,n,r){const o=Ji(e,r,t);if(null!=o){const e=t[11],i=rs(r.parent||t[6],t);if(Array.isArray(n))for(let t=0;t<n.length;t++)ts(e,o,n[t],i);else ts(e,o,n,i)}}function is(e,t){const n=9+e+1;if(n<t.length){const e=t[n],r=e[1].firstChild;if(null!==r)return function e(t,n){if(null!==n){const r=n.type;if(3===r)return vt(n,t);if(0===r)return is(-1,t[n.index]);if(4===r||5===r){const r=n.child;if(null!==r)return e(t,r);{const e=t[n.index];return st(e)?is(-1,e):yt(e)}}{const r=t[16],o=r[6],i=jo(r),s=o.projection[n.projection];return null!=s?e(i,s):e(t,n.next)}}return null}(e,r)}return t[7]}function ss(e,t,n){const r=ns(e,t);r&&function(e,t,n,r){gt(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}function as(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],c=n.type;s&&0===t&&(a&&po(yt(a),r),n.flags|=4),64!=(64&n.flags)&&(4===c||5===c?(as(e,t,n.child,r,o,i,!1),Ui(t,e,o,a,i)):1===c?us(e,t,r,n,o,i):Ui(t,e,o,a,i)),n=s?n.projectionNext:n.next}}function cs(e,t,n,r,o,i){as(n,r,e.node.child,t,o,i,!1)}function ls(e,t,n){us(t[11],0,t,n,Ji(e,n,t),rs(n.parent||t[6],t))}function us(e,t,n,r,o,i){const s=n[16],a=s[6].projection[r.projection];if(Array.isArray(a))for(let c=0;c<a.length;c++)Ui(t,e,o,a[c],i);else as(e,t,a,s[3],o,i,!0)}function hs(e,t,n){gt(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function ds(e,t,n){gt(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}class fs{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._viewContainerRef=null,this._tViewNode=null}get rootNodes(){const e=this._lView;return null==e[0]?function e(t,n,r,o,i=!1){for(;null!==r;){const s=n[r.index];if(null!==s&&o.push(yt(s)),st(s))for(let t=9;t<s.length;t++){const n=s[t],r=n[1].firstChild;null!==r&&e(n[1],n,r,o)}const a=r.type;if(4===a||5===a)e(t,n,r.child,o);else if(1===a){const t=n[16],i=t[6],s=jo(t);let a=i.projection[r.projection];null!==a&&null!==s&&e(s[1],s,a,o,!0)}r=i?r.projectionNext:r.next}return o}(e[1],e,e[6].child,[]):[]}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}Gi(this._lView[1],this._lView)}onDestroy(e){var t,n,r;t=this._lView[1],r=e,Ni(n=this._lView).push(r),t.firstCreatePass&&Ri(t).push(n[7].length-1,null)}markForCheck(){Oi(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Ai(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){Ht(!0);try{Ai(e,t,n)}finally{Ht(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e;this._appRef=null,cs(this._lView[1],e=this._lView,e[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class ps extends fs{constructor(e){super(e),this._view=e}detectChanges(){Pi(this._view)}checkNoChanges(){!function(e){Ht(!0);try{Pi(e)}finally{Ht(!1)}}(this._view)}get context(){return null}}let gs,ms,ys;function bs(e,t,n){return gs||(gs=class extends e{}),new gs(vt(t,n))}function vs(e,t,n,r){return ms||(ms=class extends e{constructor(e,t,n){super(),this._declarationView=e,this._declarationTContainer=t,this.elementRef=n}createEmbeddedView(e){const t=this._declarationTContainer.tViews,n=Ko(this._declarationView,t,e,16,null,t.node);n[17]=this._declarationView[this._declarationTContainer.index];const r=this._declarationView[5];null!==r&&(n[5]=r.createEmbeddedView(t)),Yo(t,n,e);const o=new fs(n);return o._tViewNode=n[6],o}}),0===n.type?new ms(r,n,bs(t,n,r)):null}function _s(e,t,n,r){let o;ys||(ys=class extends e{constructor(e,t,n){super(),this._lContainer=e,this._hostTNode=t,this._hostView=n}get element(){return bs(t,this._hostTNode,this._hostView)}get injector(){return new Jn(this._hostTNode,this._hostView)}get parentInjector(){const e=Un(this._hostTNode,this._hostView),t=On(e,this._hostView),n=function(e,t,n){if(n.parent&&-1!==n.parent.injectorIndex){const e=n.parent.injectorIndex;let t=n.parent;for(;null!=t.parent&&e==t.parent.injectorIndex;)t=t.parent;return t}let r=Dn(e),o=t,i=t[6];for(;r>1;)o=o[15],i=o[6],r--;return i}(e,this._hostView,this._hostTNode);return Sn(e)&&null!=n?new Jn(n,t):new Jn(null,this._hostView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){return null!==this._lContainer[8]&&this._lContainer[8][e]||null}get length(){return this._lContainer.length-9}createEmbeddedView(e,t,n){const r=e.createEmbeddedView(t||{});return this.insert(r,n),r}createComponent(e,t,n,r,o){const i=n||this.parentInjector;if(!o&&null==e.ngModule&&i){const e=i.get(ke,null);e&&(o=e)}const s=e.create(i,r,void 0,o);return this.insert(s.hostView,t),s}insert(e,t){const n=e._lView,r=n[1];if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");if(this.allocateContainerIfNeeded(),st(n[3])){const t=this.indexOf(e);if(-1!==t)this.detach(t);else{const t=n[3],r=new ys(t,t[6],t[3]);r.detach(r.indexOf(e))}}const o=this._adjustIndex(t);return qi(r,n,this._lContainer,o),zi(r,n,!0,is(o,this._lContainer)),e.attachToViewContainerRef(this),Pe(this._lContainer[8],o,e),e}move(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");return this.insert(e,t)}indexOf(e){const t=this._lContainer[8];return null!==t?t.indexOf(e):-1}remove(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1);Ki(this._lContainer,t),je(this._lContainer[8],t)}detach(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1),n=Qi(this._lContainer,t);return n&&null!=je(this._lContainer[8],t)?new fs(n):null}_adjustIndex(e,t=0){return null==e?this.length+t:e}allocateContainerIfNeeded(){null===this._lContainer[8]&&(this._lContainer[8]=[])}});const i=r[n.index];if(st(i))o=i,function(e,t){e[2]=-2}(o);else{let e;if(4===n.type)e=yt(i);else if(e=r[11].createComment(""),ht(r)){const t=r[11],o=vt(n,r);Xi(t,ns(t,o),e,function(e,t){return gt(e)?e.nextSibling(t):t.nextSibling}(t,o))}else os(r[1],r,e,n);r[n.index]=o=Ci(i,r,e,n),Di(r,o)}return new ys(o,n,r)}function ws(e=!1){return function(e,t,n){if(!n&&ct(e)){const n=Ct(e.index,t);return new fs(n,n)}return 3===e.type||0===e.type||4===e.type||5===e.type?new fs(t[16],t):null}(Lt(),Rt(),e)}let xs=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Es(),e})();const Cs=ws,Es=Cs,Ss=Function;function ks(e){return"function"==typeof e}const Ds=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*arguments\)/,Os=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,Is=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,As=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s+super\(\.\.\.arguments\)/;class Ps{constructor(e){this._reflect=e||X.Reflect}isReflectionEnabled(){return!0}factory(e){return(...t)=>new e(...t)}_zipTypesAndAnnotations(e,t){let n;n=Te(void 0===e?t.length:e.length);for(let r=0;r<n.length;r++)n[r]=void 0===e?[]:e[r]&&e[r]!=Object?[e[r]]:[],t&&null!=t[r]&&(n[r]=n[r].concat(t[r]));return n}_ownParameters(e,t){if(n=e.toString(),Ds.test(n)||As.test(n)||Os.test(n)&&!Is.test(n))return null;var n;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;const r=e.ctorParameters;if(r&&r!==t.ctorParameters){const e="function"==typeof r?r():r,t=e.map(e=>e&&e.type),n=e.map(e=>e&&js(e.decorators));return this._zipTypesAndAnnotations(t,n)}const o=e.hasOwnProperty(y)&&e[y],i=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return i||o?this._zipTypesAndAnnotations(i,o):Te(e.length)}parameters(e){if(!ks(e))return[];const t=Ts(e);let n=this._ownParameters(e,t);return n||t===Object||(n=this.parameters(t)),n||[]}_ownAnnotations(e,t){if(e.annotations&&e.annotations!==t.annotations){let t=e.annotations;return"function"==typeof t&&t.annotations&&(t=t.annotations),t}return e.decorators&&e.decorators!==t.decorators?js(e.decorators):e.hasOwnProperty(m)?e[m]:null}annotations(e){if(!ks(e))return[];const t=Ts(e),n=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(n)}_ownPropMetadata(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){let t=e.propMetadata;return"function"==typeof t&&t.propMetadata&&(t=t.propMetadata),t}if(e.propDecorators&&e.propDecorators!==t.propDecorators){const t=e.propDecorators,n={};return Object.keys(t).forEach(e=>{n[e]=js(t[e])}),n}return e.hasOwnProperty(b)?e[b]:null}propMetadata(e){if(!ks(e))return{};const t=Ts(e),n={};if(t!==Object){const e=this.propMetadata(t);Object.keys(e).forEach(t=>{n[t]=e[t]})}const r=this._ownPropMetadata(e,t);return r&&Object.keys(r).forEach(e=>{const t=[];n.hasOwnProperty(e)&&t.push(...n[e]),t.push(...r[e]),n[e]=t}),n}ownPropMetadata(e){return ks(e)&&this._ownPropMetadata(e,Ts(e))||{}}hasLifecycleHook(e,t){return e instanceof Ss&&t in e.prototype}guards(e){return{}}getter(e){return new Function("o","return o."+e+";")}setter(e){return new Function("o","v","return o."+e+" = v;")}method(e){return new Function("o","args",`if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`)}importUri(e){return"object"==typeof e&&e.filePath?e.filePath:`./${H(e)}`}resourceUri(e){return`./${H(e)}`}resolveIdentifier(e,t,n,r){return r}resolveEnum(e,t){return e[t]}}function js(e){return e?e.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function Ts(e){const t=e.prototype?Object.getPrototypeOf(e.prototype):null;return(t?t.constructor:null)||Object}let Ns=null;function Rs(){return Ns=Ns||new Ps}function Fs(e){return Ms(Rs().parameters(e))}function Ms(e){const t=te();return e.map(e=>function(e,t){const n={token:null,host:!1,optional:!1,resolved:e.R3ResolvedDependencyType.Token,self:!1,skipSelf:!1};function r(t){n.resolved=e.R3ResolvedDependencyType.Token,n.token=t}if(Array.isArray(t)&&t.length>0)for(let o=0;o<t.length;o++){const i=t[o];if(void 0===i)continue;const s=Object.getPrototypeOf(i);if(i instanceof E||"Optional"===s.ngMetadataName)n.optional=!0;else if(i instanceof k||"SkipSelf"===s.ngMetadataName)n.skipSelf=!0;else if(i instanceof S||"Self"===s.ngMetadataName)n.self=!0;else if(i instanceof D||"Host"===s.ngMetadataName)n.host=!0;else if(i instanceof C)n.token=i.token;else if(i instanceof O){if(void 0===i.attributeName)throw new Error("Attribute name must be defined.");n.token=i.attributeName,n.resolved=e.R3ResolvedDependencyType.Attribute}else i===xs?(n.token=i,n.resolved=e.R3ResolvedDependencyType.ChangeDetectorRef):r(i)}else void 0===t||Array.isArray(t)&&0===t.length?(n.token=void 0,n.resolved=ee.Invalid):r(t);return n}(t,e))}const Ls=A({provide:String,useValue:A});function $s(e){return void 0!==e.useClass}function Vs(e){return void 0!==e.useFactory}function Bs(e,t){const n=t||{providedIn:null},r={name:e.name,type:e,typeArgumentCount:0,providedIn:n.providedIn,userDeps:void 0};return($s(n)||Vs(n))&&void 0!==n.deps&&(r.userDeps=Ms(n.deps)),$s(n)?r.useClass=Q(n.useClass):function(e){return Ls in e}(n)?r.useValue=Q(n.useValue):Vs(n)?r.useFactory=n.useFactory:function(e){return void 0!==e.useExisting}(n)&&(r.useExisting=Q(n.useExisting)),r}const Us=v("Injectable",void 0,void 0,void 0,(e,t)=>zs(e,t)),Hs=function(e,t){let n=null,r=null;e.hasOwnProperty(L)||(Object.defineProperty(e,L,{get:()=>(null===n&&(n=te().compileInjectable(Se,`ng:///${e.name}/\u0275prov.js`,Bs(e,t))),n)}),e.hasOwnProperty(V)||(e[V]=()=>e[L])),e.hasOwnProperty(ae)||Object.defineProperty(e,ae,{get:()=>{if(null===r){const n=Bs(e,t),o=te();r=o.compileFactory(Se,`ng:///${e.name}/\u0275fac.js`,{name:n.name,type:n.type,typeArgumentCount:n.typeArgumentCount,deps:Fs(e),injectFn:"inject",target:o.R3FactoryTarget.Injectable})}return r},configurable:!0})},zs=Hs,qs=new le("Set Injector scope."),Ws={},Qs={},Ks=[];let Gs=void 0;function Zs(){return void 0===Gs&&(Gs=new Ee),Gs}function Ys(e,t=null,n=null,r){const o=Js(e,t,n,r);return o._resolveInjectorDefTypes(),o}function Js(e,t=null,n=null,r){return new Xs(e,n,t||Zs(),r)}class Xs{constructor(e,t,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const o=[];t&&Ae(t,n=>this.processProvider(n,e,t)),Ae([e],e=>this.processInjectorType(e,[],o)),this.records.set(ue,na(void 0,this));const i=this.records.get(qs);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof e?null:H(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,t=he,n=I.Default){this.assertNotDestroyed();const r=me(this);try{if(!(n&I.SkipSelf)){let t=this.records.get(e);if(void 0===t){const n=("function"==typeof(o=e)||"object"==typeof o&&o instanceof le)&&R(e);t=n&&this.injectableDefInScope(n)?na(ea(e),Ws):null,this.records.set(e,t)}if(null!=t)return this.hydrate(e,t)}return(n&I.Self?Zs():this.parent).get(e,t=n&I.Optional&&t===he?null:t)}catch(i){if("NullInjectorError"===i.name){if((i.ngTempTokenPath=i.ngTempTokenPath||[]).unshift(H(e)),r)throw i;return function(e,t,n,r){const o=e.ngTempTokenPath;throw t.__source&&o.unshift(t.__source),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=H(t);if(Array.isArray(t))o=t.map(H).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):H(r)))}o=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(de,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e.ngTempTokenPath=null,e}(i,e,"R3InjectorError",this.source)}throw i}finally{me(r)}var o}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((t,n)=>e.push(H(n))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,t,n){if(!(e=Q(e)))return!1;let r=M(e);const o=null==r&&e.ngModule||void 0,i=void 0===o?e:o,s=-1!==n.indexOf(i);if(void 0!==o&&(r=M(o)),null==r)return!1;if(null!=r.imports&&!s){let e;n.push(i);try{Ae(r.imports,r=>{this.processInjectorType(r,t,n)&&(void 0===e&&(e=[]),e.push(r))})}finally{}if(void 0!==e)for(let t=0;t<e.length;t++){const{ngModule:n,providers:r}=e[t];Ae(r,e=>this.processProvider(e,n,r||Ks))}}this.injectorDefTypes.add(i),this.records.set(i,na(r.factory,Ws));const a=r.providers;if(null!=a&&!s){const t=e;Ae(a,e=>this.processProvider(e,t,a))}return void 0!==o&&void 0!==e.providers}processProvider(e,t,n){let r=oa(e=Q(e))?e:Q(e&&e.provide);const o=function(e,t,n){return ra(e)?na(void 0,e.useValue):na(ta(e,t,n),Ws)}(e,t,n);if(oa(e)||!0!==e.multi){const e=this.records.get(r);e&&void 0!==e.multi&&_o()}else{let t=this.records.get(r);t?void 0===t.multi&&_o():(t=na(void 0,Ws,!0),t.factory=()=>Ce(t.multi),this.records.set(r,t)),r=e,t.multi.push(e)}this.records.set(r,o)}hydrate(e,t){var n;return t.value===Qs?function(e){throw new Error(`Cannot instantiate cyclic dependency! ${e}`)}(H(e)):t.value===Ws&&(t.value=Qs,t.value=t.factory()),"object"==typeof t.value&&t.value&&null!==(n=t.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(t.value),t.value}injectableDefInScope(e){return!!e.providedIn&&("string"==typeof e.providedIn?"any"===e.providedIn||e.providedIn===this.scope:this.injectorDefTypes.has(e.providedIn))}}function ea(e){const t=R(e),n=null!==t?t.factory:rt(e);if(null!==n)return n;const r=M(e);if(null!==r)return r.factory;if(e instanceof le)throw new Error(`Token ${H(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const n=Te(t,"?");throw new Error(`Can't resolve all parameters for ${H(e)}: (${n.join(", ")}).`)}const n=function(e){const t=e&&(e[L]||e[B]||e[V]&&e[V]());if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n`+`This will become an error in v10. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function ta(e,t,n){let r=void 0;if(oa(e)){const t=Q(e);return rt(t)||ea(t)}if(ra(e))r=()=>Q(e.useValue);else if((o=e)&&o.useFactory)r=()=>e.useFactory(...Ce(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>ve(Q(e.useExisting));else{const o=Q(e&&(e.useClass||e.provide));if(o||function(e,t,n){let r="";throw e&&t&&(r=` - only instances of Provider and Type are allowed, got: [${t.map(e=>e==n?"?"+n+"?":"...").join(", ")}]`),new Error(`Invalid provider for the NgModule '${H(e)}'`+r)}(t,n,e),!function(e){return!!e.deps}(e))return rt(o)||ea(o);r=()=>new o(...Ce(e.deps))}var o;return r}function na(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function ra(e){return null!==e&&"object"==typeof e&&fe in e}function oa(e){return"function"==typeof e}function ia(e,t,n){return Ys({name:n},t,e,n)}const sa=ia;let aa=(()=>{class e{static create(e,t){return Array.isArray(e)?sa(e,t,""):sa(e.providers,e.parent,e.name||"")}}return e.THROW_IF_NOT_FOUND=he,e.NULL=new Ee,e.\u0275prov=j({token:e,providedIn:"any",factory:()=>ve(ue)}),e.__NG_ELEMENT_ID__=-1,e})();function ca(e){return e.length>1?" ("+function(e){const t=[];for(let n=0;n<e.length;++n){if(t.indexOf(e[n])>-1)return t.push(e[n]),t;t.push(e[n])}return t}(e.slice().reverse()).map(e=>H(e.token)).join(" -> ")+")":""}function la(e,t,n,r){const o=[t],i=n(o),s=r?function(e,t){const n=`${e} caused by: ${t instanceof Error?t.message:t}`,r=Error(n);return r.ngOriginalError=t,r}(i,r):Error(i);return s.addKey=ua,s.keys=o,s.injectors=[e],s.constructResolvingMessage=n,s.ngOriginalError=r,s}function ua(e,t){this.injectors.push(e),this.keys.push(t),this.message=this.constructResolvingMessage(this.keys)}function ha(e,t){const n=[];for(let r=0,o=t.length;r<o;r++){const e=t[r];n.push(e&&0!=e.length?e.map(H).join(" "):"?")}return Error("Cannot resolve all parameters for '"+H(e)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+H(e)+"' is decorated with Injectable.")}class da{constructor(e,t){if(this.token=e,this.id=t,!e)throw new Error("Token must be defined!");this.displayName=H(this.token)}static get(e){return pa.get(Q(e))}static get numberOfKeys(){return pa.numberOfKeys}}class fa{constructor(){this._allKeys=new Map}get(e){if(e instanceof da)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const t=new da(e,da.numberOfKeys);return this._allKeys.set(e,t),t}get numberOfKeys(){return this._allKeys.size}}const pa=new fa;class ga{constructor(e){this.reflectionCapabilities=e}updateCapabilities(e){this.reflectionCapabilities=e}factory(e){return this.reflectionCapabilities.factory(e)}parameters(e){return this.reflectionCapabilities.parameters(e)}annotations(e){return this.reflectionCapabilities.annotations(e)}propMetadata(e){return this.reflectionCapabilities.propMetadata(e)}hasLifecycleHook(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)}getter(e){return this.reflectionCapabilities.getter(e)}setter(e){return this.reflectionCapabilities.setter(e)}method(e){return this.reflectionCapabilities.method(e)}importUri(e){return this.reflectionCapabilities.importUri(e)}resourceUri(e){return this.reflectionCapabilities.resourceUri(e)}resolveIdentifier(e,t,n,r){return this.reflectionCapabilities.resolveIdentifier(e,t,n,r)}resolveEnum(e,t){return this.reflectionCapabilities.resolveEnum(e,t)}}const ma=new ga(new Ps);class ya{constructor(e,t,n){this.key=e,this.optional=t,this.visibility=n}static fromKey(e){return new ya(e,!1,null)}}const ba=[];class va{constructor(e,t,n){this.key=e,this.resolvedFactories=t,this.multiProvider=n,this.resolvedFactory=this.resolvedFactories[0]}}class _a{constructor(e,t){this.factory=e,this.dependencies=t}}function wa(e){let t,n;if(e.useClass){const r=Q(e.useClass);t=ma.factory(r),n=Ea(r)}else e.useExisting?(t=e=>e,n=[ya.fromKey(da.get(e.useExisting))]):e.useFactory?(t=e.useFactory,n=function(e,t){if(t){const n=t.map(e=>[e]);return t.map(t=>Sa(e,t,n))}return Ea(e)}(e.useFactory,e.deps)):(t=()=>e.useValue,n=ba);return new _a(t,n)}function xa(e){return new va(da.get(e.provide),[wa(e)],e.multi||!1)}function Ca(e){const t=function(e,t){for(let n=0;n<e.length;n++){const r=e[n],o=t.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw Error(`Cannot mix multi providers and regular providers, got: ${o} ${r}`);if(r.multiProvider)for(let e=0;e<r.resolvedFactories.length;e++)o.resolvedFactories.push(r.resolvedFactories[e]);else t.set(r.key.id,r)}else{let e;e=r.multiProvider?new va(r.key,r.resolvedFactories.slice(),r.multiProvider):r,t.set(r.key.id,e)}}return t}(function e(t,n){return t.forEach(t=>{if(t instanceof Ss)n.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)n.push(t);else{if(!Array.isArray(t))throw Error(`Invalid provider - only instances of Provider and Type are allowed, got: ${t}`);e(t,n)}}),n}(e,[]).map(xa),new Map);return Array.from(t.values())}function Ea(e){const t=ma.parameters(e);if(!t)return[];if(t.some(e=>null==e))throw ha(e,t);return t.map(n=>Sa(e,n,t))}function Sa(e,t,n){let r=null,o=!1;if(!Array.isArray(t))return ka(t instanceof C?t.token:t,o,null);let i=null;for(let s=0;s<t.length;++s){const e=t[s];e instanceof Ss?r=e:e instanceof C?r=e.token:e instanceof E?o=!0:e instanceof S||e instanceof k?i=e:e instanceof le&&(r=e)}if(r=Q(r),null!=r)return ka(r,o,i);throw ha(e,n)}function ka(e,t,n){return new ya(da.get(e),t,n)}const Da={};class Oa{static resolve(e){return Ca(e)}static resolveAndCreate(e,t){const n=Oa.resolve(e);return Oa.fromResolvedProviders(n,t)}static fromResolvedProviders(e,t){return new Ia(e,t)}}let Ia=(()=>{class e{constructor(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;const n=e.length;this.keyIds=[],this.objs=[];for(let r=0;r<n;r++)this.keyIds[r]=e[r].key.id,this.objs[r]=Da}get(e,t=he){return this._getByKey(da.get(e),null,t)}resolveAndCreateChild(e){const t=Oa.resolve(e);return this.createChildFromResolved(t)}createChildFromResolved(t){const n=new e(t);return n.parent=this,n}resolveAndInstantiate(e){return this.instantiateResolved(Oa.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function(e){return Error(`Index ${e} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw la(this,e.key,(function(e){return`Cannot instantiate cyclic dependency!${ca(e)}`}));return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const t=[];for(let n=0;n<e.resolvedFactories.length;++n)t[n]=this._instantiate(e,e.resolvedFactories[n]);return t}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,t){const n=t.factory;let r,o;try{r=t.dependencies.map(e=>this._getByReflectiveDependency(e))}catch(s){throw s.addKey&&s.addKey(this,e.key),s}try{o=n(...r)}catch(s){throw la(this,e.key,(function(e){const t=H(e[0].token);return`${i.message}: Error during instantiation of ${t}!${ca(e)}.`}),i=s)}var i;return o}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:he)}_getByKey(t,n,r){return t===e.INJECTOR_KEY?this:n instanceof S?this._getByKeySelf(t,r):this._getByKeyDefault(t,r,n)}_getObjByKeyId(e){for(let t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===Da&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return Da}_throwOrNull(e,t){if(t!==he)return t;throw function(e,t){return la(e,t,(function(e){return`No provider for ${H(e[0].token)}!${ca(e)}`}))}(this,e)}_getByKeySelf(e,t){const n=this._getObjByKeyId(e.id);return n!==Da?n:this._throwOrNull(e,t)}_getByKeyDefault(t,n,r){let o;for(o=r instanceof k?this.parent:this;o instanceof e;){const e=o,n=e._getObjByKeyId(t.id);if(n!==Da)return n;o=e.parent}return null!==o?o.get(t.token,n):this._throwOrNull(t,n)}get displayName(){return`ReflectiveInjector(providers: [${function(e,t){const n=[];for(let r=0;r<e._providers.length;++r)n[r]=' "'+e.getProviderAtIndex(r).key.displayName+'" ';return n}(this).join(", ")}])`}toString(){return this.displayName}}return e.INJECTOR_KEY=da.get(aa),e})();const Aa=new le("AnalyzeForEntryComponents");class Pa{}const ja=x("ContentChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!1,descendants:!1},t),Pa),Ta=x("ContentChild",(e,t={})=>Object.assign({selector:e,first:!0,isViewQuery:!1,descendants:!0},t),Pa),Na=x("ViewChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!0,descendants:!0},t),Pa),Ra=x("ViewChild",(e,t)=>Object.assign({selector:e,first:!0,isViewQuery:!0,descendants:!0},t),Pa);function Fa(e){const t=[],n=new Map;function r(t){let r=n.get(t);if(!r){const o=e(t);n.set(t,r=o.then(Ba))}return r}return Ma.forEach((e,n)=>{const o=[];e.templateUrl&&o.push(r(e.templateUrl).then(t=>{e.template=t}));const i=e.styleUrls,s=e.styles||(e.styles=[]),a=e.styles.length;i&&i.forEach((t,n)=>{s.push(""),o.push(r(t).then(r=>{s[a+n]=r,i.splice(i.indexOf(t),1),0==i.length&&(e.styleUrls=void 0)}))});const c=Promise.all(o).then(()=>function(e){La.delete(e)}(n));t.push(c)}),Va(),Promise.all(t).then(()=>{})}let Ma=new Map;const La=new Set;function $a(e){return!!(e.templateUrl&&!e.hasOwnProperty("template")||e.styleUrls&&e.styleUrls.length)}function Va(){const e=Ma;return Ma=new Map,e}function Ba(e){return"string"==typeof e?e:e.text()}function Ua(e,t){let n=e.styles,r=e.classes,o=0;for(let i=0;i<t.length;i++){const e=t[i];"number"==typeof e?o=e:1==o?r=z(r,e):2==o&&(n=z(n,e+": "+t[++i]+";"))}null!==n&&(e.styles=n),null!==r&&(e.classes=r)}let Ha=null;function za(){if(!Ha){const e=X.Symbol;if(e&&e.iterator)Ha=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Ha=n)}}}return Ha}function qa(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}function Wa(e,t){const n=Ka(e),r=Ka(t);if(n&&r)return function(e,t,n){const r=e[za()](),o=t[za()]();for(;;){const e=r.next(),t=o.next();if(e.done&&t.done)return!0;if(e.done||t.done)return!1;if(!n(e.value,t.value))return!1}}(e,t,Wa);{const o=e&&("object"==typeof e||"function"==typeof e),i=t&&("object"==typeof t||"function"==typeof t);return!(n||!o||r||!i)||qa(e,t)}}class Qa{constructor(e){this.wrapped=e}static wrap(e){return new Qa(e)}static unwrap(e){return Qa.isWrapped(e)?e.wrapped:e}static isWrapped(e){return e instanceof Qa}}function Ka(e){return!!Ga(e)&&(Array.isArray(e)||!(e instanceof Map)&&za()in e)}function Ga(e){return null!==e&&("function"==typeof e||"object"==typeof e)}function Za(e,t,n){return e[t]=n}function Ya(e,t){return e[t]}function Ja(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Xa(e,t,n,r){const o=Ja(e,t,n);return Ja(e,t+1,r)||o}function ec(e,t,n,r,o){const i=Xa(e,t,n,r);return Ja(e,t+2,o)||i}function tc(e,t,n,r,o,i){const s=Xa(e,t,n,r);return Xa(e,t+2,o,i)||s}function nc(e,t,n,r){const o=Rt();return Ja(o,Qt(),t)&&(Ft(),_i(ln(),o,e,t,n,r)),nc}function rc(e,t){let n=!1,r=qt();for(let i=1;i<t.length;i+=2)n=Ja(e,r++,t[i])||n;if(Wt(r),!n)return Po;let o=t[0];for(let i=1;i<t.length;i+=2)o+=In(t[i])+t[i+1];return o}function oc(e,t,n,r){return Ja(e,Qt(),n)?t+In(n)+r:Po}function ic(e,t,n,r,o,i){const s=Xa(e,qt(),n,o);return Kt(2),s?t+In(n)+r+In(o)+i:Po}function sc(e,t,n,r,o,i,s,a){const c=ec(e,qt(),n,o,s);return Kt(3),c?t+In(n)+r+In(o)+i+In(s)+a:Po}function ac(e,t,n,r,o,i,s,a,c,l){const u=tc(e,qt(),n,o,s,c);return Kt(4),u?t+In(n)+r+In(o)+i+In(s)+a+In(c)+l:Po}function cc(e,t,n,r,o,i,s,a,c,l,u,h){const d=qt();let f=tc(e,d,n,o,s,c);return f=Ja(e,d+4,u)||f,Kt(5),f?t+In(n)+r+In(o)+i+In(s)+a+In(c)+l+In(u)+h:Po}function lc(e,t,n,r,o,i,s,a,c,l,u,h,d,f){const p=qt();let g=tc(e,p,n,o,s,c);return g=Xa(e,p+4,u,d)||g,Kt(6),g?t+In(n)+r+In(o)+i+In(s)+a+In(c)+l+In(u)+h+In(d)+f:Po}function uc(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g){const m=qt();let y=tc(e,m,n,o,s,c);return y=ec(e,m+4,u,d,p)||y,Kt(7),y?t+In(n)+r+In(o)+i+In(s)+a+In(c)+l+In(u)+h+In(d)+f+In(p)+g:Po}function hc(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y){const b=qt();let v=tc(e,b,n,o,s,c);return v=tc(e,b+4,u,d,p,m)||v,Kt(8),v?t+In(n)+r+In(o)+i+In(s)+a+In(c)+l+In(u)+h+In(d)+f+In(p)+g+In(m)+y:Po}function dc(e,t,n,r,o,i){const s=Rt(),a=oc(s,t,n,r);return a!==Po&&_i(ln(),s,e,a,o,i),dc}function fc(e,t,n,r,o,i,s,a){const c=Rt(),l=ic(c,t,n,r,o,i);return l!==Po&&_i(ln(),c,e,l,s,a),fc}function pc(e,t,n,r,o,i,s,a,c,l){const u=Rt(),h=sc(u,t,n,r,o,i,s,a);return h!==Po&&_i(ln(),u,e,h,c,l),pc}function gc(e,t,n,r,o,i,s,a,c,l,u,h){const d=Rt(),f=ac(d,t,n,r,o,i,s,a,c,l);return f!==Po&&_i(ln(),d,e,f,u,h),gc}function mc(e,t,n,r,o,i,s,a,c,l,u,h,d,f){const p=Rt(),g=cc(p,t,n,r,o,i,s,a,c,l,u,h);return g!==Po&&_i(ln(),p,e,g,d,f),mc}function yc(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g){const m=Rt(),y=lc(m,t,n,r,o,i,s,a,c,l,u,h,d,f);return y!==Po&&_i(ln(),m,e,y,p,g),yc}function bc(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y){const b=Rt(),v=uc(b,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g);return v!==Po&&_i(ln(),b,e,v,m,y),bc}function vc(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y,b,v){const _=Rt(),w=hc(_,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y);return w!==Po&&_i(ln(),_,e,w,b,v),vc}function _c(e,t,n,r){const o=Rt(),i=rc(o,t);return i!==Po&&_i(ln(),o,e,i,n,r),_c}function wc(e){const t=fo(e);Ai(t[1],t,e)}function xc(e){!function(e,t){const n=0===e.flags;if(e.flags|=1,n&&e.clean==qo){let t;e.clean=new Promise(e=>t=e),e.scheduler(()=>{if(1&e.flags&&(e.flags&=-2,Ii(e)),2&e.flags){e.flags&=-3;const t=e.playerHandler;t&&t.flushPlayers()}e.clean=qo,t(null)})}}(Oi(fo(e))[8])}function Cc(e){const t=Rt(),n=Ft(),r=function(e,t,n,r,o){const i=n+19,s=t[i]=t[11].createComment(""),a=Go(e,t[6],n,0,null,null),c=t[i]=Ci(s,t,s,a);return os(e,t,s,a),po(s,t),Di(t,c),a}(n,t,e);n.firstCreatePass&&(r.tViews=[]),Bt()}function Ec(e,t,n,r,o,i,s,a){const c=Rt(),l=Ft(),u=e+19,h=l.firstCreatePass?function(e,t,n,r,o,i,s,a,c){const l=t.consts,u=Go(t,n[6],e,0,s||null,Ot(l,a));ui(t,n,u,Ot(l,c)),fn(t,u);const h=u.tViews=ii(2,-1,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l),d=ai(0,null,2,-1,null,null);return d.injectorIndex=u.injectorIndex,h.node=d,null!==t.queries&&(t.queries.template(t,u),h.queries=t.queries.embeddedTView(u)),u}(e,l,c,t,n,r,o,i,s):l.data[u];$t(h,!1);const d=c[11].createComment("");os(l,c,d,h),po(d,c),Di(c,c[u]=Ci(d,c,d,h)),lt(h)&&ni(l,c,h),null!=s&&ri(c,h,a)}function Sc(e){const t=Rt(),n=Ft();if($t(xt(n.data,e),!0),t[e+19][2]=0,!Ut())if(3==(3&t[2])){const e=n.preOrderCheckHooks;null!==e&&pn(t,e,null)}else{const e=n.preOrderHooks;null!==e&&gn(t,e,0,null),mn(t,0)}}function kc(){let e=Lt();Vt()?Bt():(e=e.parent,$t(e,!1));const t=Rt()[e.index],n=At(t);for(;n<t.length-9;)Ki(t,n)}function Dc(e,t,n,r){const o=n+19;o>=e.data.length&&(e.data[o]=null,e.blueprint[o]=null),t[o]=r}function Oc(e){return xt(Pt.lFrame.contextLView,e)}function Ic(e,t=I.Default){const n=Rt();return null==n?ve(e,t):qn(Lt(),n,Q(e),t)}function Ac(e){return zn(Lt(),e)}function Pc(){throw new Error("invalid")}function jc(e,t,n){const r=Rt();return Ja(r,Qt(),t)&&li(Ft(),ln(),r,e,t,r[11],n,!1),jc}function Tc(e,t,n,r,o){const i=o?"class":"style";Li(e,n,t.inputs[i],i,r)}function Nc(e,t,n,r){const o=Rt(),i=Ft(),s=19+e,a=o[11],c=o[s]=Qo(t,a,Pt.lFrame.currentNamespace),l=i.firstCreatePass?function(e,t,n,r,o,i,s){const a=t.consts,c=Ot(a,i),l=Go(t,n[6],e,3,o,c);return ui(t,n,l,Ot(a,s)),null!==l.mergedAttrs&&Ua(l,l.mergedAttrs),null!==t.queries&&t.queries.elementStart(t,l),l}(e,i,o,0,t,n,r):i.data[s];$t(l,!0);const u=l.mergedAttrs;null!==u&&_n(a,c,u);const h=l.classes;null!==h&&ds(a,c,h);const d=l.styles;null!==d&&hs(a,c,d),os(i,o,c,l),0===Pt.lFrame.elementDepthCount&&po(c,o),Pt.lFrame.elementDepthCount++,lt(l)&&(ni(i,o,l),ti(i,l,o)),null!==r&&ri(o,l)}function Rc(){let e=Lt();Vt()?Bt():(e=e.parent,$t(e,!1));const t=e;Pt.lFrame.elementDepthCount--;const n=Ft();n.firstCreatePass&&(fn(n,e),at(e)&&n.queries.elementEnd(e)),null!==t.classes&&function(e){return 0!=(16&e.flags)}(t)&&Tc(n,t,Rt(),t.classes,!0),null!==t.styles&&function(e){return 0!=(32&e.flags)}(t)&&Tc(n,t,Rt(),t.styles,!1)}function Fc(e,t,n,r){Nc(e,t,n,r),Rc()}function Mc(e,t,n){const r=Rt(),o=Ft(),i=e+19,s=o.firstCreatePass?function(e,t,n,r,o){const i=t.consts,s=Ot(i,r),a=Go(t,n[6],e,4,"ng-container",s);return null!==s&&Ua(a,s),ui(t,n,a,Ot(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(e,o,r,t,n):o.data[i];$t(s,!0);const a=r[i]=r[11].createComment("");os(o,r,a,s),po(a,r),lt(s)&&(ni(o,r,s),ti(o,s,r)),null!=n&&ri(r,s)}function Lc(){let e=Lt();const t=Ft();Vt()?Bt():(e=e.parent,$t(e,!1)),t.firstCreatePass&&(fn(t,e),at(e)&&t.queries.elementEnd(e))}function $c(e,t,n){Mc(e,t,n),Lc()}function Vc(e,t,n){const r=Rt(),o=Lt(),i=2===o.type?o.parent:o,s=r[i.index];let a=function(e,t,n){for(let r=t+9;r<e.length;r++){const t=e[r][1].id;if(t===n)return e[r];if(!(t<n))break;Ki(e,r-9)}return null}(s,At(s),e);if(a)Pt.lFrame.isParent=!0,Xt(a,a[1].node);else{a=Ko(r,function(e,t,n,r){const o=Rt()[1],i=r.tViews;return(e>=i.length||null==i[e])&&(i[e]=ii(2,e,null,t,n,o.directiveRegistry,o.pipeRegistry,null,null,o.consts)),i[e]}(e,t,n,i),null,16,null,null);const s=Vt()?o:o&&o.parent;Zo(a[1],s,e,a),Xt(a,a[1].node)}return s&&(kt(a)&&qi(a[1],a,s,At(s)),s[2]+=2),kt(a)?3:2}function Bc(){const e=Rt(),t=Ft(),n=e[6],r=e[8];kt(e)&&Yo(t,e,r),Jo(t,e,t.template,r),on(),$t(n,!1)}function Uc(){return Rt()}function Hc(e){return!!e&&"function"==typeof e.then}function zc(e){return!!e&&"function"==typeof e.subscribe}function qc(e,t,n=!1,r){const o=Rt(),i=Ft(),s=Lt();return Qc(i,o,o[11],s,e,t,n,r),qc}function Wc(e,t,n=!1,r){const o=Lt(),i=Rt(),s=Fi(o,i);return Qc(Ft(),i,s,o,e,t,n,r),Wc}function Qc(e,t,n,r,o,i,s=!1,a){const c=lt(r),l=e.firstCreatePass&&(e.cleanup||(e.cleanup=[])),u=Ni(t);let h=!0;if(3===r.type){const d=vt(r,t),f=a?a(d):Be,p=f.target||d,g=u.length,m=a?e=>a(yt(e[r.index])).target:r.index;if(gt(n)){let s=null;if(!a&&c&&(s=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const e=o[i];if(e===n&&o[i+1]===r){const e=t[7],n=o[i+2];return e.length>n?e[n]:null}"string"==typeof e&&(i+=2)}return null}(e,t,o,r.index)),null!==s)(s.__ngLastListenerFn__||s).__ngNextListenerFn__=i,s.__ngLastListenerFn__=i,h=!1;else{i=Gc(r,t,i,!1);const e=n.listen(f.name||p,o,i);u.push(i,e),l&&l.push(o,m,g,g+1)}}else i=Gc(r,t,i,!0),p.addEventListener(o,i,s),u.push(i),l&&l.push(o,m,g,s)}const d=r.outputs;let f;if(h&&null!==d&&(f=d[o])){const e=f.length;if(e)for(let n=0;n<e;n+=2){const e=t[f[n]][f[n+1]].subscribe(i),s=u.length;u.push(i,e),l&&l.push(o,r.index,s,-(s+1))}}}function Kc(e,t,n){try{return!1!==t(n)}catch(r){return Mi(e,r),!1}}function Gc(e,t,n,r){return function o(i){if(i===Function)return n;const s=2&e.flags?Ct(e.index,t):t;0==(32&t[2])&&Oi(s);let a=Kc(t,n,i),c=o.__ngNextListenerFn__;for(;c;)a=Kc(t,c,i)&&a,c=c.__ngNextListenerFn__;return r&&!1===a&&(i.preventDefault(),i.returnValue=!1),a}}function Zc(e=1){return sn(e)}function Yc(e,t){let n=null;const r=function(e){const t=e.attrs;if(null!=t){const e=t.indexOf(5);if(0==(1&e))return t[e+1]}return null}(e);for(let o=0;o<t.length;o++){const i=t[o];if("*"!==i){if(null===r?Do(e,i,!0):Oo(r,i))return o}else n=o}return n}function Jc(e){const t=Rt()[16][6];if(!t.projection){const n=t.projection=Te(e?e.length:1,null),r=n.slice();let o=t.child;for(;null!==o;){const t=e?Yc(o,e):0;null!==t&&(r[t]?r[t].projectionNext=o:n[t]=o,r[t]=o),o=o.next}}}let Xc=!1;function el(e){Xc=e}function tl(e,t=0,n){const r=Rt(),o=Ft(),i=Go(o,r[6],e,1,null,n||null);null===i.projection&&(i.projection=t),Bt(),Xc||ls(o,r,i)}function nl(e,t,n){return rl(e,"",t,"",n),nl}function rl(e,t,n,r,o){const i=Rt(),s=oc(i,t,n,r);return s!==Po&&li(Ft(),ln(),i,e,s,i[11],o,!1),rl}function ol(e,t,n,r,o,i,s){const a=Rt(),c=ic(a,t,n,r,o,i);return c!==Po&&li(Ft(),ln(),a,e,c,a[11],s,!1),ol}function il(e,t,n,r,o,i,s,a,c){const l=Rt(),u=sc(l,t,n,r,o,i,s,a);return u!==Po&&li(Ft(),ln(),l,e,u,l[11],c,!1),il}function sl(e,t,n,r,o,i,s,a,c,l,u){const h=Rt(),d=ac(h,t,n,r,o,i,s,a,c,l);return d!==Po&&li(Ft(),ln(),h,e,d,h[11],u,!1),sl}function al(e,t,n,r,o,i,s,a,c,l,u,h,d){const f=Rt(),p=cc(f,t,n,r,o,i,s,a,c,l,u,h);return p!==Po&&li(Ft(),ln(),f,e,p,f[11],d,!1),al}function cl(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p){const g=Rt(),m=lc(g,t,n,r,o,i,s,a,c,l,u,h,d,f);return m!==Po&&li(Ft(),ln(),g,e,m,g[11],p,!1),cl}function ll(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m){const y=Rt(),b=uc(y,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g);return b!==Po&&li(Ft(),ln(),y,e,b,y[11],m,!1),ll}function ul(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y,b){const v=Rt(),_=hc(v,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y);return _!==Po&&li(Ft(),ln(),v,e,_,v[11],b,!1),ul}function hl(e,t,n){const r=Rt(),o=rc(r,t);return o!==Po&&li(Ft(),ln(),r,e,o,r[11],n,!1),hl}const dl=[];function fl(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?Vo(i):Uo(i),c=!1;for(;0!==a&&(!1===c||s);){const n=e[a+1];pl(e[a],t)&&(c=!0,e[a+1]=r?zo(n):Bo(n)),a=r?Vo(n):Uo(n)}c&&(e[n+1]=r?Bo(i):zo(i))}function pl(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&Fe(e,t)>=0}const gl={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function ml(e){return e.substring(gl.key,gl.keyEnd)}function yl(e){return e.substring(gl.value,gl.valueEnd)}function bl(e,t){const n=gl.textEnd;return n===t?-1:(t=gl.keyEnd=function(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,gl.key=t,n),wl(e,t,n))}function vl(e,t){const n=gl.textEnd;let r=gl.key=wl(e,t,n);return n===r?-1:(r=gl.keyEnd=function(e,t,n){let r;for(;t<n&&(45===(r=e.charCodeAt(t))||95===r||(-33&r)>=65&&(-33&r)<=90);)t++;return t}(e,r,n),r=xl(e,r,n),r=gl.value=wl(e,r,n),r=gl.valueEnd=function(e,t,n){let r=-1,o=-1,i=-1,s=t,a=s;for(;s<n;){const c=e.charCodeAt(s++);if(59===c)return a;34===c||39===c?a=s=Cl(e,c,s,n):t===s-4&&85===i&&82===o&&76===r&&40===c?a=s=Cl(e,41,s,n):c>32&&(a=s),i=o,o=r,r=-33&c}return a}(e,r,n),xl(e,r,n))}function _l(e){gl.key=0,gl.keyEnd=0,gl.value=0,gl.valueEnd=0,gl.textEnd=e.length}function wl(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}function xl(e,t,n,r){return(t=wl(e,t,n))<n&&t++,t}function Cl(e,t,n,r){let o=-1,i=n;for(;i<r;){const n=e.charCodeAt(i++);if(n==t&&92!==o)return i;o=92==n&&92===o?0:n}throw new Error}function El(e){!function(e){Pt.lFrame.currentSanitizer=e}(e)}function Sl(e,t,n){return Pl(e,t,n,!1),Sl}function kl(e,t){return Pl(e,t,null,!0),kl}function Dl(e){jl(Ml,Ol,e,!1)}function Ol(e,t){for(let n=function(e){return _l(e),vl(e,wl(e,0,gl.textEnd))}(t);n>=0;n=vl(t,n))Ml(e,ml(t),yl(t))}function Il(e){jl(Ne,Al,e,!0)}function Al(e,t){for(let n=function(e){return _l(e),bl(e,wl(e,0,gl.textEnd))}(t);n>=0;n=bl(t,n))Ne(e,ml(t),!0)}function Pl(e,t,n,r){const o=Rt(),i=Ft(),s=Kt(2);if(i.firstUpdatePass&&Nl(i,e,s,r),t!==Po&&Ja(o,s,t)){let a;null==n&&(a=function(){const e=Pt.lFrame;return null===e?null:e.currentSanitizer}())&&(n=a),Ll(i,i.data[an()+19],o,o[11],e,o[s+1]=function(e,t){return null==e||("function"==typeof t?e=t(e):"string"==typeof t?e+=t:"object"==typeof e&&(e=H(fr(e)))),e}(t,n),r,s)}}function jl(e,t,n,r){const o=Ft(),i=Kt(2);o.firstUpdatePass&&Nl(o,null,i,r);const s=Rt();if(n!==Po&&Ja(s,i,n)){const a=o.data[an()+19];if(Bl(a,r)&&!Tl(o,i)){let e=r?a.classes:a.styles;null!==e&&(n=z(e,n||"")),Tc(o,a,s,n,r)}else!function(e,t,n,r,o,i,s,a){o===Po&&(o=dl);let c=0,l=0,u=0<o.length?o[0]:null,h=0<i.length?i[0]:null;for(;null!==u||null!==h;){const d=c<o.length?o[c+1]:void 0,f=l<i.length?i[l+1]:void 0;let p=null,g=void 0;u===h?(c+=2,l+=2,d!==f&&(p=h,g=f)):null===h||null!==u&&u<h?(c+=2,p=u):(l+=2,p=h,g=f),null!==p&&Ll(e,t,n,r,p,g,s,a),u=c<o.length?o[c]:null,h=l<i.length?i[l]:null}}(o,a,s,s[11],s[i+1],s[i+1]=function(e,t,n){if(null==n||""===n)return dl;const r=[],o=fr(n);if(Array.isArray(o))for(let i=0;i<o.length;i++)e(r,o[i],!0);else if("object"==typeof o)for(const i in o)o.hasOwnProperty(i)&&e(r,i,o[i]);else"string"==typeof o&&t(r,o);return r}(e,t,n),r,i)}}function Tl(e,t){return t>=e.expandoStartIndex}function Nl(e,t,n,r){const o=e.data;if(null===o[n+1]){const i=o[an()+19],s=Tl(e,n);Bl(i,r)&&null===t&&!s&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=Pt.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=r?t.residualClasses:t.residualStyles;if(null===o)0===(r?t.classBindings:t.styleBindings)&&(n=Fl(n=Rl(null,e,t,n,r),t.attrs,r),i=null);else{const s=t.directiveStylingLast;if(-1===s||e[s]!==o)if(n=Rl(o,e,t,n,r),null===i){let n=function(e,t,n){const r=n?t.classBindings:t.styleBindings;if(0!==Uo(r))return e[Vo(r)]}(e,t,r);void 0!==n&&Array.isArray(n)&&(n=Rl(null,e,t,n[1],r),n=Fl(n,t.attrs,r),function(e,t,n,r){e[Vo(n?t.classBindings:t.styleBindings)]=r}(e,t,r,n))}else i=function(e,t,n){let r=void 0;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=Fl(r,e[i].hostAttrs,n);return Fl(r,t.attrs,n)}(e,t,r)}return void 0!==i&&(r?t.residualClasses=i:t.residualStyles=i),n}(o,i,t,r),function(e,t,n,r,o,i){let s=i?t.classBindings:t.styleBindings,a=Vo(s),c=Uo(s);e[r]=n;let l,u=!1;if(Array.isArray(n)){const e=n;l=e[1],(null===l||Fe(e,l)>0)&&(u=!0)}else l=n;if(o)if(0!==c){const t=Vo(e[a+1]);e[r+1]=$o(t,a),0!==t&&(e[t+1]=Ho(e[t+1],r)),e[a+1]=131071&e[a+1]|r<<17}else e[r+1]=$o(a,0),0!==a&&(e[a+1]=Ho(e[a+1],r)),a=r;else e[r+1]=$o(c,0),0===a?a=r:e[c+1]=Ho(e[c+1],r),c=r;u&&(e[r+1]=Bo(e[r+1])),fl(e,l,r,!0),fl(e,l,r,!1),function(e,t,n,r,o){const i=o?e.residualClasses:e.residualStyles;null!=i&&"string"==typeof t&&Fe(i,t)>=0&&(n[r+1]=zo(n[r+1]))}(t,l,e,r,i),s=$o(a,c),i?t.classBindings=s:t.styleBindings=s}(o,i,t,n,s,r)}}function Rl(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=Fl(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function Fl(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),Ne(e,s,!!n||t[++i]))}return void 0===e?null:e}function Ml(e,t,n){so(t)&&(n=Xr(n)),Ne(e,t,n)}function Ll(e,t,n,r,o,i,s,a){if(3!==t.type)return;const c=e.data,l=c[a+1];Vl(1==(1&l)?$l(c,t,n,o,Uo(l),s):void 0)||(Vl(i)||function(e){return 2==(2&e)}(l)&&(i=$l(c,null,n,o,a,s)),function(e,t,n,r,o){const i=gt(e);if(t)o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r);else{const t=-1==r.indexOf("-")?void 0:2;null==o?i?e.removeStyle(n,r,t):n.style.removeProperty(r):i?e.setStyle(n,r,o,t):n.style.setProperty(r,o)}}(r,s,bt(an(),n),o,i))}function $l(e,t,n,r,o,i){const s=null===t;let a=void 0;for(;o>0;){const t=e[o],i=Array.isArray(t),c=i?t[1]:t,l=null===c;let u=n[o+1];u===Po&&(u=l?dl:void 0);let h=l?Re(u,r):c===r?u:void 0;if(i&&!Vl(h)&&(h=Re(t,r)),Vl(h)&&(a=h,s))return a;const d=e[o+1];o=s?Vo(d):Uo(d)}if(null!==t){let e=i?t.residualClasses:t.residualStyles;null!=e&&(a=Re(e,r))}return a}function Vl(e){return void 0!==e}function Bl(e,t){return 0!=(e.flags&(t?16:32))}function Ul(e,t=""){const n=Rt(),r=Ft(),o=e+19,i=r.firstCreatePass?Go(r,n[6],e,3,null,null):r.data[o],s=n[o]=Hi(t,n[11]);os(r,n,s,i),$t(i,!1)}function Hl(e){return zl("",e,""),Hl}function zl(e,t,n){const r=Rt(),o=oc(r,e,t,n);return o!==Po&&$i(r,an(),o),zl}function ql(e,t,n,r,o){const i=Rt(),s=ic(i,e,t,n,r,o);return s!==Po&&$i(i,an(),s),ql}function Wl(e,t,n,r,o,i,s){const a=Rt(),c=sc(a,e,t,n,r,o,i,s);return c!==Po&&$i(a,an(),c),Wl}function Ql(e,t,n,r,o,i,s,a,c){const l=Rt(),u=ac(l,e,t,n,r,o,i,s,a,c);return u!==Po&&$i(l,an(),u),Ql}function Kl(e,t,n,r,o,i,s,a,c,l,u){const h=Rt(),d=cc(h,e,t,n,r,o,i,s,a,c,l,u);return d!==Po&&$i(h,an(),d),Kl}function Gl(e,t,n,r,o,i,s,a,c,l,u,h,d){const f=Rt(),p=lc(f,e,t,n,r,o,i,s,a,c,l,u,h,d);return p!==Po&&$i(f,an(),p),Gl}function Zl(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p){const g=Rt(),m=uc(g,e,t,n,r,o,i,s,a,c,l,u,h,d,f,p);return m!==Po&&$i(g,an(),m),Zl}function Yl(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m){const y=Rt(),b=hc(y,e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m);return b!==Po&&$i(y,an(),b),Yl}function Jl(e){const t=Rt(),n=rc(t,e);return n!==Po&&$i(t,an(),n),Jl}function Xl(e,t,n){jl(Ne,Al,oc(Rt(),e,t,n),!0)}function eu(e,t,n,r,o){jl(Ne,Al,ic(Rt(),e,t,n,r,o),!0)}function tu(e,t,n,r,o,i,s){jl(Ne,Al,sc(Rt(),e,t,n,r,o,i,s),!0)}function nu(e,t,n,r,o,i,s,a,c){jl(Ne,Al,ac(Rt(),e,t,n,r,o,i,s,a,c),!0)}function ru(e,t,n,r,o,i,s,a,c,l,u){jl(Ne,Al,cc(Rt(),e,t,n,r,o,i,s,a,c,l,u),!0)}function ou(e,t,n,r,o,i,s,a,c,l,u,h,d){jl(Ne,Al,lc(Rt(),e,t,n,r,o,i,s,a,c,l,u,h,d),!0)}function iu(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p){jl(Ne,Al,uc(Rt(),e,t,n,r,o,i,s,a,c,l,u,h,d,f,p),!0)}function su(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m){jl(Ne,Al,hc(Rt(),e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m),!0)}function au(e){jl(Ne,Al,rc(Rt(),e),!0)}function cu(e,t,n){Dl(oc(Rt(),e,t,n))}function lu(e,t,n,r,o){Dl(ic(Rt(),e,t,n,r,o))}function uu(e,t,n,r,o,i,s){Dl(sc(Rt(),e,t,n,r,o,i,s))}function hu(e,t,n,r,o,i,s,a,c){Dl(ac(Rt(),e,t,n,r,o,i,s,a,c))}function du(e,t,n,r,o,i,s,a,c,l,u){Dl(cc(Rt(),e,t,n,r,o,i,s,a,c,l,u))}function fu(e,t,n,r,o,i,s,a,c,l,u,h,d){Dl(lc(Rt(),e,t,n,r,o,i,s,a,c,l,u,h,d))}function pu(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p){Dl(uc(Rt(),e,t,n,r,o,i,s,a,c,l,u,h,d,f,p))}function gu(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m){Dl(hc(Rt(),e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m))}function mu(e){Dl(rc(Rt(),e))}function yu(e,t,n,r,o){return Pl(e,oc(Rt(),t,n,r),o,!1),yu}function bu(e,t,n,r,o,i,s){return Pl(e,ic(Rt(),t,n,r,o,i),s,!1),bu}function vu(e,t,n,r,o,i,s,a,c){return Pl(e,sc(Rt(),t,n,r,o,i,s,a),c,!1),vu}function _u(e,t,n,r,o,i,s,a,c,l,u){return Pl(e,ac(Rt(),t,n,r,o,i,s,a,c,l),u,!1),_u}function wu(e,t,n,r,o,i,s,a,c,l,u,h,d){return Pl(e,cc(Rt(),t,n,r,o,i,s,a,c,l,u,h),d,!1),wu}function xu(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p){return Pl(e,lc(Rt(),t,n,r,o,i,s,a,c,l,u,h,d,f),p,!1),xu}function Cu(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m){return Pl(e,uc(Rt(),t,n,r,o,i,s,a,c,l,u,h,d,f,p,g),m,!1),Cu}function Eu(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y,b){return Pl(e,hc(Rt(),t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y),b,!1),Eu}function Su(e,t,n){return Pl(e,rc(Rt(),t),n,!1),Su}function ku(e,t,n){const r=Rt();return Ja(r,Qt(),t)&&li(Ft(),ln(),r,e,t,r[11],n,!0),ku}function Du(e,t,n){const r=Rt();if(Ja(r,Qt(),t)){const o=Ft(),i=ln();li(o,i,r,e,t,Fi(i,r),n,!0)}return Du}function Ou(e){Lu(e);const t=Nu(e,!1);return null===t?null:(void 0===t.component&&(t.component=function(e,t){const n=t[1].data[e];return 2&n.flags?t[n.directiveStart]:null}(t.nodeIndex,t.lView)),t.component)}function Iu(e){Lu(e);const t=Nu(e,!1);return null===t?null:t.lView[8]}function Au(e){const t=Nu(e,!1);if(null===t)return null;let n,r=t.lView;for(;null===r[0]&&(n=jo(r));)r=n;return 512&r[2]?null:r[8]}function Pu(e){return[...To(e).components]}function ju(e){const t=Nu(e,!1);return null===t?aa.NULL:new Jn(t.lView[1].data[t.nodeIndex],t.lView)}function Tu(e){const t=Nu(e);return void 0===t.directives&&(t.directives=bo(t.nodeIndex,t.lView,!1)),null===t.directives?[]:[...t.directives]}function Nu(e,t=!0){const n=uo(e);if(!n&&t)throw new Error("Invalid ng target");return n}function Ru(e){return uo(e).native}function Fu(e){Lu(e);const t=Nu(e,!1);if(null===t)return[];const n=t.lView,r=n[7],o=n[1].cleanup,i=[];if(o&&r)for(let s=0;s<o.length;){const t=o[s++],a=o[s++];if("string"==typeof t){const c=t,l=yt(n[a]),u=r[o[s++]],h=o[s++],d="boolean"==typeof h||h>=0?"dom":"output",f="boolean"==typeof h&&h;e==l&&i.push({element:e,name:c,callback:u,useCapture:f,type:d})}}return i.sort(Mu),i}function Mu(e,t){return e.name==t.name?0:e.name<t.name?-1:1}function Lu(e){if("undefined"!=typeof Element&&!(e instanceof Element))throw new Error("Expecting instance of DOM Element")}function $u(e){xc(e),Pu(e).forEach(e=>wc(e))}let Vu=!1;function Bu(){Vu||(Vu=!0,Uu("getComponent",Ou),Uu("getContext",Iu),Uu("getListeners",Fu),Uu("getOwningComponent",Au),Uu("getHostElement",Ru),Uu("getInjector",ju),Uu("getRootComponents",Pu),Uu("getDirectives",Tu),Uu("applyChanges",$u))}function Uu(e,t){if("undefined"==typeof COMPILED||!COMPILED){const n=X;if(n){let r=n.ng;r||(r=n.ng={}),r[e]=t}}}function Hu(e,t={}){const n=t.rendererFactory||mt,r=t.sanitizer||null,o=et(e);o.type!=e&&(o.type=e);const i=o.selectors[0][0],s=si(n.createRenderer(null,null),t.host||i,o.encapsulation),a=o.onPush?576:528,c=Wu(t.scheduler,t.playerHandler),l=n.createRenderer(s,o),u=ii(0,-1,null,1,0,null,null,null,null,null),h=Ko(null,u,c,a,null,null,n,l,void 0,t.injector||null);let d;Xt(h,null);try{n.begin&&n.begin(),d=qu(zu(s,o,h,n,l,r),o,h,c,t.hostFeatures||null),Yo(u,h,null),Jo(u,h,null,null)}finally{on(),n.end&&n.end()}return d}function zu(e,t,n,r,o,i){const s=n[1];n[19]=e;const a=Go(s,null,0,3,null,null),c=a.mergedAttrs=t.hostAttrs;null!==c&&(Ua(a,c),null!==e&&(_n(o,e,c),null!==a.classes&&ds(o,e,a.classes),null!==a.styles&&hs(o,e,a.styles)));const l=r.createRenderer(e,t),u=Ko(n,oi(t),null,t.onPush?64:16,n[19],a,r,l,i);return s.firstCreatePass&&(Hn($n(a,n),s,t.type),gi(s,a),yi(a,n.length,1)),Di(n,u),n[19]=u}function qu(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=Lt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),pi(e,r,1),bi(e,t,n));const o=Gn(t,e,t.length-1,r);po(o,t);const i=vt(r,t);return i&&po(i,t),o}(i,n,t);r.components.push(s),e[8]=s,o&&o.forEach(e=>e(s,t)),t.contentQueries&&t.contentQueries(1,s,n.length-1);const a=Lt();if(i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){cn(a.index-19);const e=n[1];hi(e,t),di(e,n,t.hostVars),fi(t,s)}return s}function Wu(e,t){return{components:[],scheduler:e||Pn,clean:Ti,playerHandler:t||null,flags:0}}function Qu(e,t){const n=St(e)[1],r=n.data.length-1;fn(n,{directiveStart:r,directiveEnd:r+1})}function Ku(e){return To(e).clean}function Gu(e){return Object.getPrototypeOf(e.prototype).constructor}function Zu(e){let t=Gu(e.type),n=!0;const r=[e];for(;t;){let o=void 0;if(ut(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new Error("Directives cannot inherit Components");o=t.\u0275dir}if(o){if(n){r.push(o);const t=e;t.inputs=Yu(e.inputs),t.declaredInputs=Yu(e.declaredInputs),t.outputs=Yu(e.outputs);const n=o.hostBindings;n&&eh(e,n);const i=o.viewQuery,s=o.contentQueries;if(i&&Ju(e,i),s&&Xu(e,s),P(e.inputs,o.inputs),P(e.declaredInputs,o.declaredInputs),P(e.outputs,o.outputs),ut(o)&&o.data.animation){const t=e.data;t.animation=(t.animation||[]).concat(o.data.animation)}t.afterContentChecked=t.afterContentChecked||o.afterContentChecked,t.afterContentInit=e.afterContentInit||o.afterContentInit,t.afterViewChecked=e.afterViewChecked||o.afterViewChecked,t.afterViewInit=e.afterViewInit||o.afterViewInit,t.doCheck=e.doCheck||o.doCheck,t.onDestroy=e.onDestroy||o.onDestroy,t.onInit=e.onInit||o.onInit}const t=o.features;if(t)for(let r=0;r<t.length;r++){const o=t[r];o&&o.ngInherit&&o(e),o===Zu&&(n=!1)}}t=Object.getPrototypeOf(t)}!function(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=Cn(o.hostAttrs,n=Cn(n,o.hostAttrs))}}(r)}function Yu(e){return e===Be?{}:e===Ue?[]:e}function Ju(e,t){const n=e.viewQuery;e.viewQuery=n?(e,r)=>{t(e,r),n(e,r)}:t}function Xu(e,t){const n=e.contentQueries;e.contentQueries=n?(e,r,o)=>{t(e,r,o),n(e,r,o)}:t}function eh(e,t){const n=e.hostBindings;e.hostBindings=n?(e,r)=>{t(e,r),n(e,r)}:t}const th=["providersResolver"],nh=["template","decls","consts","vars","onPush","ngContentSelectors","styles","encapsulation","schemas"];function rh(e){let t=Gu(e.type),n=void 0;n=ut(e)?t.\u0275cmp:t.\u0275dir;const r=e;for(const o of th)r[o]=n[o];if(ut(n))for(const o of nh)r[o]=n[o]}class oh{constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}}function ih(e){e.type.prototype.ngOnChanges&&(e.setInput=sh,e.onChanges=function(){const e=ah(this),t=e&&e.current;if(t){const n=e.previous;if(n===Be)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}})}function sh(e,t,n,r){const o=ah(e)||function(e,t){return e.__ngSimpleChanges__=t}(e,{previous:Be,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],c=s[a];i[a]=new oh(c&&c.currentValue,t,s===Be),e[r]=t}function ah(e){return e.__ngSimpleChanges__||null}function ch(e,t,n,r,o){if(e=Q(e),Array.isArray(e))for(let i=0;i<e.length;i++)ch(e[i],t,n,r,o);else{const i=Ft(),s=Rt();let a=oa(e)?e:Q(e.provide),c=ta(e);const l=Lt(),u=65535&l.providerIndexes,h=l.directiveStart,d=l.providerIndexes>>16;if(oa(e)||!e.multi){const r=new vn(c,o,Ic),f=hh(a,t,o?u:u+d,h);-1===f?(Hn($n(l,s),i,a),lh(i,e,t.length),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=65536),n.push(r),s.push(r)):(n[f]=r,s[f]=r)}else{const f=hh(a,t,u+d,h),p=hh(a,t,u,u+d),g=f>=0&&n[f],m=p>=0&&n[p];if(o&&!m||!o&&!g){Hn($n(l,s),i,a);const u=function(e,t,n,r,o){const i=new vn(e,n,Ic);return i.multi=[],i.index=t,i.componentProviders=0,uh(i,o,r&&!n),i}(o?fh:dh,n.length,o,r,c);!o&&m&&(n[p].providerFactory=u),lh(i,e,t.length,0),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=65536),n.push(u),s.push(u)}else lh(i,e,f>-1?f:p,uh(n[o?p:f],c,!o&&r));!o&&r&&m&&n[p].componentProviders++}}}function lh(e,t,n,r){const o=oa(t);if(o||t.useClass){const i=(t.useClass||t).prototype.ngOnDestroy;if(i){const s=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const e=s.indexOf(n);-1===e?s.push(n,[r,i]):s[e+1].push(r,i)}else s.push(n,i)}}}function uh(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function hh(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function dh(e,t,n,r){return ph(this.multi,[])}function fh(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const e=this.providerFactory.componentProviders,t=Gn(n,n[1],this.providerFactory.index,r);i=t.slice(0,e),ph(o,i);for(let n=e;n<t.length;n++)i.push(t[n])}else i=[],ph(o,i);return i}function ph(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function gh(e,t=[]){return n=>{n.providersResolver=(n,r)=>function(e,t,n){const r=Ft();if(r.firstCreatePass){const o=ut(e);ch(n,r.data,r.blueprint,o,!0),ch(t,r.data,r.blueprint,o,!1)}}(n,r?r(e):e,t)}}ih.ngInherit=!0;class mh{}class yh{}function bh(e){const t=Error(`No component factory found for ${H(e)}. Did you add it to @NgModule.entryComponents?`);return t[vh]=e,t}const vh="ngComponent";class _h{resolveComponentFactory(e){throw bh(e)}}let wh=(()=>{class e{}return e.NULL=new _h,e})();class xh{constructor(e,t,n){this._parent=t,this._ngModule=n,this._factories=new Map;for(let r=0;r<e.length;r++){const t=e[r];this._factories.set(t.componentType,t)}}resolveComponentFactory(e){let t=this._factories.get(e);if(!t&&this._parent&&(t=this._parent.resolveComponentFactory(e)),!t)throw bh(e);return new Ch(t,this._ngModule)}}class Ch extends yh{constructor(e,t){super(),this.factory=e,this.ngModule=t,this.selector=e.selector,this.componentType=e.componentType,this.ngContentSelectors=e.ngContentSelectors,this.inputs=e.inputs,this.outputs=e.outputs}create(e,t,n,r){return this.factory.create(e,t,n,r||this.ngModule)}}let Eh=(()=>{class e{constructor(e){this.nativeElement=e}}return e.__NG_ELEMENT_ID__=()=>kh(e),e})();const Sh=function(e){return bs(e,Lt(),Rt())},kh=Sh;class Dh{}const Oh=function(){var e={Important:1,DashCase:2};return e[e.Important]="Important",e[e.DashCase]="DashCase",e}();let Ih=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Ph(),e})();const Ah=function(){const e=Rt(),t=Ct(Lt().index,e);return function(e){const t=e[11];if(gt(t))return t;throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")}(it(t)?t:e)},Ph=Ah;let jh=(()=>{class e{}return e.\u0275prov=j({token:e,providedIn:"root",factory:()=>null}),e})();class Th{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Nh=new Th("9.1.1");class Rh{constructor(){}supports(e){return Ka(e)}create(e){return new Mh(e)}}const Fh=(e,t)=>t;class Mh{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||Fh}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,o=null;for(;t||n;){const i=!n||t&&t.currentIndex<Bh(n,r,o)?t:n,s=Bh(i,r,o),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)r++;else{o||(o=[]);const e=s-r,t=a-r;if(e!=t){for(let n=0;n<e;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;t<=i&&i<e&&(o[n]=r+1)}o[i.previousIndex]=t-e}}s!==a&&e(i,s,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!Ka(e))throw new Error(`Error trying to diff '${H(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,o=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==o&&qa(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,t)),qa(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,t),i=!0),o=o._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[za()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==o&&qa(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,e,r,t)),qa(o.item,e)||this._addIdentityChange(o,e)):(o=this._mismatch(o,e,r,t),i=!0),o=o._next,t++}),this.length=t;return this._truncate(o),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e,t;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=t)e.previousIndex=e.currentIndex,t=e._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(qa(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(qa(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):e=this._addAfter(new Lh(t,n),o,r),e}_verifyReinsertion(e,t,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new Vh),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Vh),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class Lh{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class $h{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&qa(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class Vh{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new $h,this.map.set(t,n)),n.add(e)}get(e,t){const n=this.map.get(e);return n?n.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Bh(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}class Uh{constructor(){}supports(e){return e instanceof Map||Ga(e)}create(){return new Hh}}class Hh{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||Ga(e)))throw new Error(`Error trying to diff '${H(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new zh(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){qa(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class zh{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let qh=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(null!=n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new k,new E]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n}}return e.\u0275prov=j({token:e,providedIn:"root",factory:()=>new e([new Rh])}),e})(),Wh=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new k,new E]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}return e.\u0275prov=j({token:e,providedIn:"root",factory:()=>new e([new Uh])}),e})();const Qh=[new Uh],Kh=new qh([new Rh]),Gh=new Wh(Qh);let Zh=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Jh(e,Eh),e})();const Yh=function(e,t){return vs(e,t,Lt(),Rt())},Jh=Yh;let Xh=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>td(e,Eh),e})();const ed=function(e,t){return _s(e,t,Lt(),Rt())},td=ed;function nd(e,t,n,r){let o=`ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;return r&&(o+=" It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),function(e,t){const n=new Error(e);return rd(n,t),n}(o,e)}function rd(e,t){e.ngDebugContext=t,e.ngErrorLogger=t.logError.bind(t)}function od(e){return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${e}`)}function id(e,t,n){const r=e.state,o=1792&r;return o===t?(e.state=-1793&r|n,e.initIndex=-1,!0):o===n}function sd(e,t,n){return(1792&e.state)===t&&e.initIndex<=n&&(e.initIndex=n+1,!0)}function ad(e,t){return e.nodes[t]}function cd(e,t){return e.nodes[t]}function ld(e,t){return e.nodes[t]}function ud(e,t){return e.nodes[t]}function hd(e,t){return e.nodes[t]}class dd{}const fd={setCurrentNode:void 0,createRootView:void 0,createEmbeddedView:void 0,createComponentView:void 0,createNgModuleRef:void 0,overrideProvider:void 0,overrideComponentView:void 0,clearOverrides:void 0,checkAndUpdateView:void 0,checkNoChangesView:void 0,destroyView:void 0,resolveDep:void 0,createDebugContext:void 0,handleEvent:void 0,updateDirectives:void 0,updateRenderer:void 0,dirtyParentQueries:void 0},pd=()=>{},gd=new Map;function md(e){let t=gd.get(e);return t||(t=H(e)+"_"+gd.size,gd.set(e,t)),t}function yd(e,t,n,r){if(Qa.isWrapped(r)){r=Qa.unwrap(r);const o=e.def.nodes[t].bindingIndex+n,i=Qa.unwrap(e.oldValues[o]);e.oldValues[o]=new Qa(i)}return r}function bd(e){return{id:"$$undefined",styles:e.styles,encapsulation:e.encapsulation,data:e.data}}let vd=0;function _d(e,t,n,r){return!(!(2&e.state)&&qa(e.oldValues[t.bindingIndex+n],r))}function wd(e,t,n,r){return!!_d(e,t,n,r)&&(e.oldValues[t.bindingIndex+n]=r,!0)}function xd(e,t,n,r){const o=e.oldValues[t.bindingIndex+n];if(1&e.state||!Wa(o,r)){const i=t.bindings[n].name;throw nd(fd.createDebugContext(e,t.nodeIndex),`${i}: ${o}`,`${i}: ${r}`,0!=(1&e.state))}}function Cd(e){let t=e;for(;t;)2&t.def.flags&&(t.state|=8),t=t.viewContainerParent||t.parent}function Ed(e,t){let n=e;for(;n&&n!==t;)n.state|=64,n=n.viewContainerParent||n.parent}function Sd(e,t,n,r){try{return Cd(33554432&e.def.nodes[t].flags?cd(e,t).componentView:e),fd.handleEvent(e,t,n,r)}catch(o){e.root.errorHandler.handleError(o)}}function kd(e){return e.parent?cd(e.parent,e.parentNodeDef.nodeIndex):null}function Dd(e){return e.parent?e.parentNodeDef.parent:null}function Od(e,t){switch(201347067&t.flags){case 1:return cd(e,t.nodeIndex).renderElement;case 2:return ad(e,t.nodeIndex).renderText}}function Id(e){return!!e.parent&&!!(32768&e.parentNodeDef.flags)}function Ad(e){return!(!e.parent||32768&e.parentNodeDef.flags)}function Pd(e){return 1<<e%32}function jd(e){const t={};let n=0;const r={};return e&&e.forEach(([e,o])=>{"number"==typeof e?(t[e]=o,n|=Pd(e)):r[e]=o}),{matchedQueries:t,references:r,matchedQueryIds:n}}function Td(e,t){return e.map(e=>{let n,r;return Array.isArray(e)?[r,n]=e:(r=0,n=e),n&&("function"==typeof n||"object"==typeof n)&&t&&Object.defineProperty(n,"__source",{value:t,configurable:!0}),{flags:r,token:n,tokenKey:md(n)}})}function Nd(e,t,n){let r=n.renderParent;return r?0==(1&r.flags)||0==(33554432&r.flags)||r.element.componentRendererType&&r.element.componentRendererType.encapsulation===Ve.Native?cd(e,n.renderParent.nodeIndex).renderElement:void 0:t}const Rd=new WeakMap;function Fd(e){let t=Rd.get(e);return t||(t=e(()=>pd),t.factory=e,Rd.set(e,t)),t}function Md(e,t,n,r,o){3===t&&(n=e.renderer.parentNode(Od(e,e.def.lastRenderRootNode))),Ld(e,t,0,e.def.nodes.length-1,n,r,o)}function Ld(e,t,n,r,o,i,s){for(let a=n;a<=r;a++){const n=e.def.nodes[a];11&n.flags&&Vd(e,n,t,o,i,s),a+=n.childCount}}function $d(e,t,n,r,o,i){let s=e;for(;s&&!Id(s);)s=s.parent;const a=s.parent,c=Dd(s),l=c.nodeIndex+c.childCount;for(let u=c.nodeIndex+1;u<=l;u++){const e=a.def.nodes[u];e.ngContentIndex===t&&Vd(a,e,n,r,o,i),u+=e.childCount}if(!a.parent){const s=e.root.projectableNodes[t];if(s)for(let t=0;t<s.length;t++)Bd(e,s[t],n,r,o,i)}}function Vd(e,t,n,r,o,i){if(8&t.flags)$d(e,t.ngContent.index,n,r,o,i);else{const s=Od(e,t);if(3===n&&33554432&t.flags&&48&t.bindingFlags?(16&t.bindingFlags&&Bd(e,s,n,r,o,i),32&t.bindingFlags&&Bd(cd(e,t.nodeIndex).componentView,s,n,r,o,i)):Bd(e,s,n,r,o,i),16777216&t.flags){const s=cd(e,t.nodeIndex).viewContainer._embeddedViews;for(let e=0;e<s.length;e++)Md(s[e],n,r,o,i)}1&t.flags&&!t.element.name&&Ld(e,n,t.nodeIndex+1,t.nodeIndex+t.childCount,r,o,i)}}function Bd(e,t,n,r,o,i){const s=e.renderer;switch(n){case 1:s.appendChild(r,t);break;case 2:s.insertBefore(r,t,o);break;case 3:s.removeChild(r,t);break;case 0:i.push(t)}}const Ud=/^:([^:]+):(.+)$/;function Hd(e){if(":"===e[0]){const t=e.match(Ud);return[t[1],t[2]]}return["",e]}function zd(e){let t=0;for(let n=0;n<e.length;n++)t|=e[n].flags;return t}function qd(e,t){let n="";for(let r=0;r<2*e;r+=2)n=n+t[r]+Qd(t[r+1]);return n+t[2*e]}function Wd(e,t,n,r,o,i,s,a,c,l,u,h,d,f,p,g,m,y,b,v){switch(e){case 1:return t+Qd(n)+r;case 2:return t+Qd(n)+r+Qd(o)+i;case 3:return t+Qd(n)+r+Qd(o)+i+Qd(s)+a;case 4:return t+Qd(n)+r+Qd(o)+i+Qd(s)+a+Qd(c)+l;case 5:return t+Qd(n)+r+Qd(o)+i+Qd(s)+a+Qd(c)+l+Qd(u)+h;case 6:return t+Qd(n)+r+Qd(o)+i+Qd(s)+a+Qd(c)+l+Qd(u)+h+Qd(d)+f;case 7:return t+Qd(n)+r+Qd(o)+i+Qd(s)+a+Qd(c)+l+Qd(u)+h+Qd(d)+f+Qd(p)+g;case 8:return t+Qd(n)+r+Qd(o)+i+Qd(s)+a+Qd(c)+l+Qd(u)+h+Qd(d)+f+Qd(p)+g+Qd(m)+y;case 9:return t+Qd(n)+r+Qd(o)+i+Qd(s)+a+Qd(c)+l+Qd(u)+h+Qd(d)+f+Qd(p)+g+Qd(m)+y+Qd(b)+v;default:throw new Error("Does not support more than 9 expressions")}}function Qd(e){return null!=e?e.toString():""}const Kd=[],Gd={},Zd={},Yd=md(aa),Jd=md(ue),Xd=md(ke);function ef(e,t,n,r){return n=Q(n),{index:-1,deps:Td(r,H(t)),flags:e,token:t,value:n}}function tf(e){const t={},n=[];let r=null;for(let o=0;o<e.length;o++){const i=e[o];i.token===qs&&(r=i.value),1073741824&i.flags&&n.push(i.token),i.index=o,t[md(i.token)]=i}return{factory:null,providersByKey:t,providers:e,modules:n,scope:r}}function nf(e,t,n=aa.THROW_IF_NOT_FOUND){const r=me(e);try{if(8&t.flags)return t.token;if(2&t.flags&&(n=null),1&t.flags)return e._parent.get(t.token,n);const o=t.tokenKey;switch(o){case Yd:case Jd:case Xd:return e}const i=e._def.providersByKey[o];let s;if(i){let t=e._providers[i.index];return void 0===t&&(t=e._providers[i.index]=rf(e,i)),t===Zd?void 0:t}if((s=R(t.token))&&function(e,t){const n=t.providedIn;return null!=n&&("any"===n||n===e._def.scope||function(e,t){return e._def.modules.indexOf(t)>-1}(e,n))}(e,s)){const n=e._providers.length;return e._def.providers[n]=e._def.providersByKey[t.tokenKey]={flags:5120,value:s.factory,deps:[],index:n,token:t.token},e._providers[n]=Zd,e._providers[n]=rf(e,e._def.providersByKey[t.tokenKey])}return 4&t.flags?n:e._parent.get(t.token,n)}finally{me(r)}}function rf(e,t){let n;switch(201347067&t.flags){case 512:n=function(e,t,n){const r=n.length;switch(r){case 0:return new t;case 1:return new t(nf(e,n[0]));case 2:return new t(nf(e,n[0]),nf(e,n[1]));case 3:return new t(nf(e,n[0]),nf(e,n[1]),nf(e,n[2]));default:const o=[];for(let t=0;t<r;t++)o[t]=nf(e,n[t]);return new t(...o)}}(e,t.value,t.deps);break;case 1024:n=function(e,t,n){const r=n.length;switch(r){case 0:return t();case 1:return t(nf(e,n[0]));case 2:return t(nf(e,n[0]),nf(e,n[1]));case 3:return t(nf(e,n[0]),nf(e,n[1]),nf(e,n[2]));default:const o=[];for(let t=0;t<r;t++)o[t]=nf(e,n[t]);return t(...o)}}(e,t.value,t.deps);break;case 2048:n=nf(e,t.deps[0]);break;case 256:n=t.value}return n===Zd||null===n||"object"!=typeof n||131072&t.flags||"function"!=typeof n.ngOnDestroy||(t.flags|=131072),void 0===n?Zd:n}function of(e,t){const n=e.viewContainer._embeddedViews;if((null==t||t>=n.length)&&(t=n.length-1),t<0)return null;const r=n[t];return r.viewContainerParent=null,je(n,t),fd.dirtyParentQueries(r),af(r),r}function sf(e,t,n){const r=t?Od(t,t.def.lastRenderRootNode):e.renderElement,o=n.renderer.parentNode(r),i=n.renderer.nextSibling(r);Md(n,2,o,i,void 0)}function af(e){Md(e,3,null,null,void 0)}const cf={};function lf(e,t,n,r,o,i){return new hf(e,t,n,r,o,i)}function uf(e){return e.viewDefFactory}class hf extends yh{constructor(e,t,n,r,o,i){super(),this.selector=e,this.componentType=t,this._inputs=r,this._outputs=o,this.ngContentSelectors=i,this.viewDefFactory=n}get inputs(){const e=[],t=this._inputs;for(let n in t)e.push({propName:n,templateName:t[n]});return e}get outputs(){const e=[];for(let t in this._outputs)e.push({propName:t,templateName:this._outputs[t]});return e}create(e,t,n,r){if(!r)throw new Error("ngModule should be provided");const o=Fd(this.viewDefFactory),i=o.nodes[0].element.componentProvider.nodeIndex,s=fd.createRootView(e,t||[],n,o,r,cf),a=ld(s,i).instance;return n&&s.renderer.setAttribute(cd(s,0).renderElement,"ng-version",Nh.full),new df(s,new mf(s),a)}}class df extends mh{constructor(e,t,n){super(),this._view=e,this._viewRef=t,this._component=n,this._elDef=this._view.def.nodes[0],this.hostView=t,this.changeDetectorRef=t,this.instance=n}get location(){return new Eh(cd(this._view,this._elDef.nodeIndex).renderElement)}get injector(){return new _f(this._view,this._elDef)}get componentType(){return this._component.constructor}destroy(){this._viewRef.destroy()}onDestroy(e){this._viewRef.onDestroy(e)}}function ff(e,t,n){return new pf(e,t,n)}class pf{constructor(e,t,n){this._view=e,this._elDef=t,this._data=n,this._embeddedViews=[]}get element(){return new Eh(this._data.renderElement)}get injector(){return new _f(this._view,this._elDef)}get parentInjector(){let e=this._view,t=this._elDef.parent;for(;!t&&e;)t=Dd(e),e=e.parent;return e?new _f(e,t):new _f(this._view,null)}clear(){for(let e=this._embeddedViews.length-1;e>=0;e--){const t=of(this._data,e);fd.destroyView(t)}}get(e){const t=this._embeddedViews[e];if(t){const e=new mf(t);return e.attachToViewContainerRef(this),e}return null}get length(){return this._embeddedViews.length}createEmbeddedView(e,t,n){const r=e.createEmbeddedView(t||{});return this.insert(r,n),r}createComponent(e,t,n,r,o){const i=n||this.parentInjector;o||e instanceof Ch||(o=i.get(ke));const s=e.create(i,r,void 0,o);return this.insert(s.hostView,t),s}insert(e,t){if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");const n=e;return function(e,t,n,r){let o=t.viewContainer._embeddedViews;null==n&&(n=o.length),r.viewContainerParent=e,Pe(o,n,r),function(e,t){const n=kd(t);if(!n||n===e||16&t.state)return;t.state|=16;let r=n.template._projectedViews;r||(r=n.template._projectedViews=[]),r.push(t),function(e,t){if(4&t.flags)return;e.nodeFlags|=4,t.flags|=4;let n=t.parent;for(;n;)n.childFlags|=4,n=n.parent}(t.parent.def,t.parentNodeDef)}(t,r),fd.dirtyParentQueries(r),sf(t,n>0?o[n-1]:null,r)}(this._view,this._data,t,n._view),n.attachToViewContainerRef(this),e}move(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");const n=this._embeddedViews.indexOf(e._view);return function(e,t,n){const r=e.viewContainer._embeddedViews,o=r[t];je(r,t),null==n&&(n=r.length),Pe(r,n,o),fd.dirtyParentQueries(o),af(o),sf(e,n>0?r[n-1]:null,o)}(this._data,n,t),e}indexOf(e){return this._embeddedViews.indexOf(e._view)}remove(e){const t=of(this._data,e);t&&fd.destroyView(t)}detach(e){const t=of(this._data,e);return t?new mf(t):null}}function gf(e){return new mf(e)}class mf{constructor(e){this._view=e,this._viewContainerRef=null,this._appRef=null}get rootNodes(){return function(e){const t=[];return Md(e,0,void 0,void 0,t),t}(this._view)}get context(){return this._view.context}get destroyed(){return 0!=(128&this._view.state)}markForCheck(){Cd(this._view)}detach(){this._view.state&=-5}detectChanges(){const e=this._view.root.rendererFactory;e.begin&&e.begin();try{fd.checkAndUpdateView(this._view)}finally{e.end&&e.end()}}checkNoChanges(){fd.checkNoChangesView(this._view)}reattach(){this._view.state|=4}onDestroy(e){this._view.disposables||(this._view.disposables=[]),this._view.disposables.push(e)}destroy(){this._appRef?this._appRef.detachView(this):this._viewContainerRef&&this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),fd.destroyView(this._view)}detachFromAppRef(){this._appRef=null,af(this._view),fd.dirtyParentQueries(this._view)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}}function yf(e,t){return new bf(e,t)}class bf extends Zh{constructor(e,t){super(),this._parentView=e,this._def=t}createEmbeddedView(e){return new mf(fd.createEmbeddedView(this._parentView,this._def,this._def.element.template,e))}get elementRef(){return new Eh(cd(this._parentView,this._def.nodeIndex).renderElement)}}function vf(e,t){return new _f(e,t)}class _f{constructor(e,t){this.view=e,this.elDef=t}get(e,t=aa.THROW_IF_NOT_FOUND){return fd.resolveDep(this.view,this.elDef,!!this.elDef&&0!=(33554432&this.elDef.flags),{flags:0,token:e,tokenKey:md(e)},t)}}function wf(e,t){const n=e.def.nodes[t];if(1&n.flags){const t=cd(e,n.nodeIndex);return n.element.template?t.template:t.renderElement}if(2&n.flags)return ad(e,n.nodeIndex).renderText;if(20240&n.flags)return ld(e,n.nodeIndex).instance;throw new Error(`Illegal state: read nodeValue for node index ${t}`)}function xf(e,t,n,r){return new Cf(e,t,n,r)}class Cf{constructor(e,t,n,r){this._moduleType=e,this._parent=t,this._bootstrapComponents=n,this._def=r,this._destroyListeners=[],this._destroyed=!1,this.injector=this,function(e){const t=e._def,n=e._providers=Te(t.providers.length);for(let r=0;r<t.providers.length;r++){const o=t.providers[r];4096&o.flags||void 0===n[r]&&(n[r]=rf(e,o))}}(this)}get(e,t=aa.THROW_IF_NOT_FOUND,n=I.Default){let r=0;return n&I.SkipSelf?r|=1:n&I.Self&&(r|=4),nf(this,{token:e,tokenKey:md(e),flags:r},t)}get instance(){return this.get(this._moduleType)}get componentFactoryResolver(){return this.get(wh)}destroy(){if(this._destroyed)throw new Error(`The ng module ${H(this.instance.constructor)} has already been destroyed.`);this._destroyed=!0,function(e,t){const n=e._def,r=new Set;for(let o=0;o<n.providers.length;o++)if(131072&n.providers[o].flags){const t=e._providers[o];if(t&&t!==Zd){const e=t.ngOnDestroy;"function"!=typeof e||r.has(t)||(e.apply(t),r.add(t))}}}(this),this._destroyListeners.forEach(e=>e())}onDestroy(e){this._destroyListeners.push(e)}}const Ef=md(Ih),Sf=md(Eh),kf=md(Xh),Df=md(Zh),Of=md(xs),If=md(aa),Af=md(ue);function Pf(e,t,n,r,o,i,s,a){const c=[];if(s)for(let u in s){const[e,t]=s[u];c[e]={flags:8,name:u,nonMinifiedName:t,ns:null,securityContext:null,suffix:null}}const l=[];if(a)for(let u in a)l.push({type:1,propName:u,target:null,eventName:a[u]});return Nf(e,t|=16384,n,r,o,o,i,c,l)}function jf(e,t,n){return Nf(-1,e|=16,null,0,t,t,n)}function Tf(e,t,n,r,o){return Nf(-1,e,t,0,n,r,o)}function Nf(e,t,n,r,o,i,s,a,c){const{matchedQueries:l,references:u,matchedQueryIds:h}=jd(n);c||(c=[]),a||(a=[]),i=Q(i);const d=Td(s,H(o));return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:l,matchedQueryIds:h,references:u,ngContentIndex:-1,childCount:r,bindings:a,bindingFlags:zd(a),outputs:c,element:null,provider:{token:o,value:i,deps:d},text:null,query:null,ngContent:null}}function Rf(e,t){return $f(e,t)}function Ff(e,t){let n=e;for(;n.parent&&!Id(n);)n=n.parent;return Vf(n.parent,Dd(n),!0,t.provider.value,t.provider.deps)}function Mf(e,t){const n=Vf(e,t.parent,(32768&t.flags)>0,t.provider.value,t.provider.deps);if(t.outputs.length)for(let r=0;r<t.outputs.length;r++){const o=t.outputs[r],i=n[o.propName];if(!zc(i))throw new Error(`@Output ${o.propName} not initialized in '${n.constructor.name}'.`);{const n=i.subscribe(Lf(e,t.parent.nodeIndex,o.eventName));e.disposables[t.outputIndex+r]=n.unsubscribe.bind(n)}}return n}function Lf(e,t,n){return r=>Sd(e,t,n,r)}function $f(e,t){const n=(8192&t.flags)>0,r=t.provider;switch(201347067&t.flags){case 512:return Vf(e,t.parent,n,r.value,r.deps);case 1024:return function(e,t,n,r,o){const i=o.length;switch(i){case 0:return r();case 1:return r(Uf(e,t,n,o[0]));case 2:return r(Uf(e,t,n,o[0]),Uf(e,t,n,o[1]));case 3:return r(Uf(e,t,n,o[0]),Uf(e,t,n,o[1]),Uf(e,t,n,o[2]));default:const s=[];for(let r=0;r<i;r++)s.push(Uf(e,t,n,o[r]));return r(...s)}}(e,t.parent,n,r.value,r.deps);case 2048:return Uf(e,t.parent,n,r.deps[0]);case 256:return r.value}}function Vf(e,t,n,r,o){const i=o.length;switch(i){case 0:return new r;case 1:return new r(Uf(e,t,n,o[0]));case 2:return new r(Uf(e,t,n,o[0]),Uf(e,t,n,o[1]));case 3:return new r(Uf(e,t,n,o[0]),Uf(e,t,n,o[1]),Uf(e,t,n,o[2]));default:const s=[];for(let r=0;r<i;r++)s.push(Uf(e,t,n,o[r]));return new r(...s)}}const Bf={};function Uf(e,t,n,r,o=aa.THROW_IF_NOT_FOUND){if(8&r.flags)return r.token;const i=e;2&r.flags&&(o=null);const s=r.tokenKey;s===Of&&(n=!(!t||!t.element.componentView)),t&&1&r.flags&&(n=!1,t=t.parent);let a=e;for(;a;){if(t)switch(s){case Ef:return Hf(a,t,n).renderer;case Sf:return new Eh(cd(a,t.nodeIndex).renderElement);case kf:return cd(a,t.nodeIndex).viewContainer;case Df:if(t.element.template)return cd(a,t.nodeIndex).template;break;case Of:return gf(Hf(a,t,n));case If:case Af:return vf(a,t);default:const e=(n?t.element.allProviders:t.element.publicProviders)[s];if(e){let t=ld(a,e.nodeIndex);return t||(t={instance:$f(a,e)},a.nodes[e.nodeIndex]=t),t.instance}}n=Id(a),t=Dd(a),a=a.parent,4&r.flags&&(a=null)}const c=i.root.injector.get(r.token,Bf);return c!==Bf||o===Bf?c:i.root.ngModule.injector.get(r.token,o)}function Hf(e,t,n){let r;if(n)r=cd(e,t.nodeIndex).componentView;else for(r=e;r.parent&&!Id(r);)r=r.parent;return r}function zf(e,t,n,r,o,i){if(32768&n.flags){const t=cd(e,n.parent.nodeIndex).componentView;2&t.def.flags&&(t.state|=8)}if(t.instance[n.bindings[r].name]=o,524288&n.flags){i=i||{};const t=Qa.unwrap(e.oldValues[n.bindingIndex+r]);i[n.bindings[r].nonMinifiedName]=new oh(t,o,0!=(2&e.state))}return e.oldValues[n.bindingIndex+r]=o,i}function qf(e,t){if(!(e.def.nodeFlags&t))return;const n=e.def.nodes;let r=0;for(let o=0;o<n.length;o++){const i=n[o];let s=i.parent;for(!s&&i.flags&t&&Qf(e,o,i.flags&t,r++),0==(i.childFlags&t)&&(o+=i.childCount);s&&1&s.flags&&o===s.nodeIndex+s.childCount;)s.directChildFlags&t&&(r=Wf(e,s,t,r)),s=s.parent}}function Wf(e,t,n,r){for(let o=t.nodeIndex+1;o<=t.nodeIndex+t.childCount;o++){const t=e.def.nodes[o];t.flags&n&&Qf(e,o,t.flags&n,r++),o+=t.childCount}return r}function Qf(e,t,n,r){const o=ld(e,t);if(!o)return;const i=o.instance;i&&(fd.setCurrentNode(e,t),1048576&n&&sd(e,512,r)&&i.ngAfterContentInit(),2097152&n&&i.ngAfterContentChecked(),4194304&n&&sd(e,768,r)&&i.ngAfterViewInit(),8388608&n&&i.ngAfterViewChecked(),131072&n&&i.ngOnDestroy())}class Kf extends wh{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=et(e);return new Yf(t,this.ngModule)}}function Gf(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const Zf=new le("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Pn});class Yf extends yh{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(Ao).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return Gf(this.componentDef.inputs)}get outputs(){return Gf(this.componentDef.outputs)}create(e,t,n,r){const o=(r=r||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Bf,o);return i!==Bf||r===Bf?i:t.get(n,r,o)}}}(e,r.injector):e,i=o.get(Dh,mt),s=o.get(jh,null),a=i.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",l=n?si(a,n,this.componentDef.encapsulation):Qo(c,i.createRenderer(null,this.componentDef),function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(c)),u=this.componentDef.onPush?576:528,h="string"==typeof n&&/^#root-ng-internal-isolated-\d+/.test(n),d=Wu(),f=ii(0,-1,null,1,0,null,null,null,null,null),p=Ko(null,f,d,u,null,null,i,a,s,o);let g,m;Xt(p,null);try{const e=zu(l,this.componentDef,p,i,a);if(l)if(n)_n(a,l,["ng-version",Nh.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!So(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&_n(a,l,e),t&&t.length>0&&ds(a,l,t.join(" "))}m=wt(p[1],0),t&&(m.projection=t.map(e=>Array.from(e))),g=qu(e,this.componentDef,p,d,[Qu]),Yo(f,p,null)}finally{on()}const y=new Jf(this.componentType,g,bs(Eh,m,p),p,m);return n&&!h||(y.hostView._tViewNode.child=m),y}}class Jf extends mh{constructor(e,t,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.destroyCbs=[],this.instance=t,this.hostView=this.changeDetectorRef=new ps(r),this.hostView._tViewNode=Zo(r[1],null,-1,r),this.componentType=e}get injector(){return new Jn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(e=>e()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(e){this.destroyCbs&&this.destroyCbs.push(e)}}const Xf=void 0;var ep=["en",[["a","p"],["AM","PM"],Xf],[["AM","PM"],Xf,Xf],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Xf,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Xf,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Xf,"{1} 'at' {0}",Xf],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];let tp={};function np(e,t,n){"string"!=typeof t&&(n=t,t=e[cp.LocaleId]),t=t.toLowerCase().replace(/_/g,"-"),tp[t]=e,n&&(tp[t][cp.ExtraData]=n)}function rp(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}(e);let n=sp(t);if(n)return n;const r=t.split("-")[0];if(n=sp(r),n)return n;if("en"===r)return ep;throw new Error(`Missing locale data for the locale "${e}".`)}function op(e){return rp(e)[cp.CurrencyCode]||null}function ip(e){return rp(e)[cp.PluralCase]}function sp(e){return e in tp||(tp[e]=X.ng&&X.ng.common&&X.ng.common.locales&&X.ng.common.locales[e]),tp[e]}function ap(){tp={}}const cp=function(){var e={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};return e[e.LocaleId]="LocaleId",e[e.DayPeriodsFormat]="DayPeriodsFormat",e[e.DayPeriodsStandalone]="DayPeriodsStandalone",e[e.DaysFormat]="DaysFormat",e[e.DaysStandalone]="DaysStandalone",e[e.MonthsFormat]="MonthsFormat",e[e.MonthsStandalone]="MonthsStandalone",e[e.Eras]="Eras",e[e.FirstDayOfWeek]="FirstDayOfWeek",e[e.WeekendRange]="WeekendRange",e[e.DateFormat]="DateFormat",e[e.TimeFormat]="TimeFormat",e[e.DateTimeFormat]="DateTimeFormat",e[e.NumberSymbols]="NumberSymbols",e[e.NumberFormats]="NumberFormats",e[e.CurrencyCode]="CurrencyCode",e[e.CurrencySymbol]="CurrencySymbol",e[e.CurrencyName]="CurrencyName",e[e.Currencies]="Currencies",e[e.Directionality]="Directionality",e[e.PluralCase]="PluralCase",e[e.ExtraData]="ExtraData",e}(),lp="en-US",up="USD",hp=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,dp=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,fp=/\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,pp=/\ufffd(\d+):?\d*\ufffd/gi,gp=/({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,mp=/\[(\ufffd.+?\ufffd?)\]/,yp=/\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g,bp=/({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,vp=/{([A-Z0-9_]+)}/g,_p=/\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g,wp=/\/\*/,xp=/\d+\:(\d+)/;function Cp(e){if(!e)return[];let t=0;const n=[],r=[],o=/[{}]/g;let i;for(o.lastIndex=0;i=o.exec(e);){const o=i.index;if("}"==i[0]){if(n.pop(),0==n.length){const n=e.substring(t,o);hp.test(n)?r.push(Ep(n)):r.push(n),t=o+1}}else{if(0==n.length){const n=e.substring(t,o);r.push(n),t=o+1}n.push("{")}}const s=e.substring(t);return r.push(s),r}function Ep(e){const t=[],n=[];let r=1,o=0;const i=Cp(e=e.replace(hp,(function(e,t,n){return r="select"===n?0:1,o=parseInt(t.substr(1),10),""})));for(let s=0;s<i.length;){let e=i[s++].trim();1===r&&(e=e.replace(/\s*(?:=)?(\w+)\s*/,"$1")),e.length&&t.push(e);const o=Cp(i[s++]);t.length>n.length&&n.push(o)}return{type:r,mainBinding:o,cases:t,values:n}}function Sp(e){let t,n,r="",o=0,i=!1;for(;null!==(t=dp.exec(e));)i?t[0]===`\ufffd/*${n}\ufffd`&&(o=t.index,i=!1):(r+=e.substring(o,t.index+t[0].length),n=t[1],i=!0);return r+=e.substr(o),r}function kp(e,t,n,r=null){const o=[null,null],i=e.split(pp);let s=0;for(let a=0;a<i.length;a++){const e=i[a];if(1&a){const t=parseInt(e,10);o.push(-1-t),s|=Ap(t)}else""!==e&&o.push(e)}return o.push(t<<2|(n?1:0)),n&&o.push(n,r),o[0]=s,o[1]=o.length-2,o}function Dp(e,t=0){let n;t|=Ap(e.mainBinding);for(let r=0;r<e.values.length;r++){const o=e.values[r];for(let e=0;e<o.length;e++){const r=o[e];if("string"==typeof r)for(;n=pp.exec(r);)t|=Ap(parseInt(n[1],10));else t=Dp(r,t)}}return t}const Op=[];let Ip=-1;function Ap(e){return 1<<Math.min(e,31)}const Pp=[];function jp(e,t,n){const r=Ft();Op[++Ip]=e,el(!0),r.firstCreatePass&&null===r.data[e+19]&&function(e,t,n,r,o){const i=t.blueprint.length-19;Tp=0;const s=Lt(),a=Vt()?s:s&&s.parent;let c=a&&a!==e[6]?a.index-19:n,l=0;Pp[l]=c;const u=[];if(n>0&&s!==a){let e=s.index-19;Vt()||(e=~e),u.push(e<<3|0)}const h=[],d=[],f=function(e,t){if("number"!=typeof t)return Sp(e);{const n=e.indexOf(`:${t}\ufffd`)+2+t.toString().length,r=e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));return Sp(e.substring(n,r))}}(r,o),p=(g=f,g.replace(Zp," ")).split(fp);var g;for(let m=0;m<p.length;m++){let e=p[m];if(1&m)if("/"===e.charAt(0)){if("#"===e.charAt(1)){const t=parseInt(e.substr(2),10);c=Pp[--l],u.push(t<<3|5)}}else{const t=parseInt(e.substr(1),10),n="#"===e.charAt(0);u.push((n?t:~t)<<3|0,c<<17|1),n&&(Pp[++l]=c=t)}else{const t=Cp(e);for(let e=0;e<t.length;e++)if(1&e){const n=t[e];if("object"!=typeof n)throw new Error(`Unable to parse ICU expression in "${f}" message.`);const r=i+Tp++;u.push(Lo,"",r,c<<17|1);const o=Dp(n);Qp(d,n,r,r);const s=d.length-1;h.push(Ap(n.mainBinding),3,-1-n.mainBinding,r<<2|2,s,o,2,r<<2|3,s)}else if(""!==t[e]){const n=t[e],r=n.match(pp),o=i+Tp++;u.push(r?"":n,o,c<<17|1),r&&Oe(kp(n,o),h)}}}Tp>0&&function(e,t,n){if(n>0&&e.firstCreatePass){for(let r=0;r<n;r++)e.blueprint.push(null),e.data.push(null),t.push(null);e.expandoInstructions?e.expandoInstructions.push(n):e.expandoStartIndex+=n}}(t,e,Tp),t.data[n+19]={vars:Tp,create:u,update:h,icus:d.length?d:null}}(Rt(),r,e,t,n)}let Tp;function Np(e,t,n,r,o){const i=t.next;r||(r=n),r===n&&t!==n.child?(t.next=n.child,n.child=t):r!==n&&t!==r.next?(t.next=r.next,r.next=t):t.next=null,n!==o[6]&&(t.parent=n);let s=t.next;for(;s;)s.next===t&&(s.next=i),s=s.next;if(1===t.type)return ls(e,o,t),t;os(e,o,vt(t,o),t);const a=o[t.index];return 0!==t.type&&st(a)&&os(e,o,a[7],t),t}function Rp(e,t={}){let n=e;if(mp.test(e)){const e={},t=[0];n=n.replace(yp,(n,r,o)=>{const i=r||o,s=e[i]||[];if(s.length||(i.split("|").forEach(e=>{const t=e.match(xp),n=t?parseInt(t[1],10):0,r=wp.test(e);s.push([n,r,e])}),e[i]=s),!s.length)throw new Error(`i18n postprocess: unmatched placeholder - ${i}`);const a=t[t.length-1];let c=0;for(let e=0;e<s.length;e++)if(s[e][0]===a){c=e;break}const[l,u,h]=s[c];return u?t.pop():a!==l&&t.push(l),s.splice(c,1),h})}return Object.keys(t).length?(n=n.replace(bp,(e,n,r,o,i,s)=>t.hasOwnProperty(r)?`${n}${t[r]}${s}`:e),n=n.replace(vp,(e,n)=>t.hasOwnProperty(n)?t[n]:e),n=n.replace(_p,(e,n)=>{if(t.hasOwnProperty(n)){const r=t[n];if(!r.length)throw new Error(`i18n postprocess: unmatched ICU - ${e} with key: ${n}`);return r.shift()}return e}),n):n}function Fp(){const e=Rt();!function(e,t){const n=Op[Ip--],r=e.data[n+19],o=Lt(),i=Lp(n,r.create,e,t);let s=n+1;for(;s<=o.index-19;){-1===i.indexOf(s)&&$p(e,t,s,!0);const n=wt(e,s);!n||0!==n.type&&3!==n.type&&4!==n.type||null===n.localNames||(s+=n.localNames.length>>1),s++}}(Ft(),e),el(!1)}function Mp(e,t,n,r,o,i){const s=Lt();t[n+19]=o;const a=Go(e,t[6],n,r,i,null);return s&&s.next===a&&(s.next=null),a}function Lp(e,t,n,r){const o=r[11];let i=null,s=null;const a=[];for(let c=0;c<t.length;c++){const l=t[c];if("string"==typeof l){const e=Hi(l,o),u=t[++c];s=i,i=Mp(n,r,u,3,e,null),a.push(u),Bt()}else if("number"==typeof l)switch(7&l){case 1:const o=l>>>17;let u;u=o===e?r[6]:wt(n,o),s=Np(n,i,u,s,r);break;case 0:const h=l>=0,d=(h?l:~l)>>>3;a.push(d),s=i,i=wt(n,d),i&&$t(i,h);break;case 5:s=i=wt(n,l>>>3),$t(i,!1);break;case 4:const f=t[++c],p=t[++c];_i(wt(n,l>>>3),r,f,p,null,null);break;default:throw new Error(`Unable to determine the type of mutate operation for "${l}"`)}else switch(l){case Lo:const e=t[++c],u=t[++c],h=o.createComment(e);s=i,i=Mp(n,r,u,5,h,null),a.push(u),po(h,r),i.activeCaseIndex=null,Bt();break;case Mo:const d=t[++c],f=t[++c];s=i,i=Mp(n,r,f,3,o.createElement(d),d),a.push(f);break;default:throw new Error(`Unable to determine the type of mutate operation for "${l}"`)}}return Bt(),a}function $p(e,t,n,r){const o=wt(e,n),i=bt(n,t);i&&ss(t[11],i);const s=xt(t,n);if(st(s)){const e=s;0!==o.type&&ss(t[11],e[7])}r&&(o.flags|=64)}function Vp(e,t,n){jp(e,t,n),Fp()}function Bp(e,t){!function(e,t,n,r){const o=Lt().index-19,i=[];for(let s=0;s<r.length;s+=2){const a=r[s],c=r[s+1].split(gp);for(let r=0;r<c.length;r++){const s=c[r];if(1&r)throw new Error("ICU expressions are not yet supported in attributes");if(""!==s)if(s.match(pp))t.firstCreatePass&&null===t.data[n+19]&&Oe(kp(s,o,a),i);else{const n=wt(t,o);3===n.type&&_i(n,e,a,s,null,null);const r=null!==n.inputs&&n.inputs[a];r&&Li(t,e,r,a,s)}}}t.firstCreatePass&&null===t.data[n+19]&&(t.data[n+19]=i)}(Rt(),Ft(),e,t)}let Up=0,Hp=0;function zp(e){return Ja(Rt(),Qt(),e)&&(Up|=1<<Hp),Hp++,zp}function qp(e){if(Hp){const t=Ft(),n=t.data[e+19];let r,o=null;Array.isArray(n)?r=n:(r=n.update,o=n.icus);const i=qt()-Hp-1,s=Rt();!function e(t,n,r,o,i,s,a=!1){let c=!1;for(let l=0;l<t.length;l++){const u=t[l],h=t[++l];if(a||u&o){let a="";for(let u=l+1;u<=l+h;u++){const l=t[u];if("string"==typeof l)a+=l;else if("number"==typeof l)if(l<0)a+=In(s[r-l]);else{const h=l>>>2;let d,f,p;switch(3&l){case 1:const l=t[++u],g=t[++u];li(i,wt(i,h),s,l,a,s[11],g,!1);break;case 0:$i(s,h,a);break;case 2:if(d=t[++u],f=n[d],p=wt(i,h),null!==p.activeCaseIndex){const e=f.remove[p.activeCaseIndex];for(let t=0;t<e.length;t++){const r=e[t];switch(7&r){case 3:$p(i,s,r>>>3,!1);break;case 6:const o=wt(i,e[t+1]>>>3).activeCaseIndex;null!==o&&Oe(n[r>>>3].remove[o],e)}}}const m=Wp(f,a);p.activeCaseIndex=-1!==m?m:null,m>-1&&(Lp(-1,f.create[m],i,s),c=!0);break;case 3:d=t[++u],f=n[d],p=wt(i,h),null!==p.activeCaseIndex&&e(f.update[p.activeCaseIndex],n,r,o,i,s,c)}}}}l+=h}}(r,o,i,Up,t,s),Up=0,Hp=0}}function Wp(e,t){let n=e.cases.indexOf(t);if(-1===n)switch(e.type){case 1:{const r=function(e,t){switch(ip(t)(e)){case 0:return"zero";case 1:return"one";case 2:return"two";case 3:return"few";case 4:return"many";default:return"other"}}(t,Yp);n=e.cases.indexOf(r),-1===n&&"other"!==r&&(n=e.cases.indexOf("other"));break}case 0:n=e.cases.indexOf("other")}return n}function Qp(e,t,n,r){const o=[],i=[],s=[],a=[],c=[];for(let l=0;l<t.values.length;l++){const u=t.values[l],h=[];for(let e=0;e<u.length;e++){const t=u[e];if("string"!=typeof t){const n=h.push(t)-1;u[e]=`\x3c!--\ufffd${n}\ufffd--\x3e`}}const d=Kp(u.join(""),n,h,e,r);o.push(d.create),i.push(d.remove),s.push(d.update),a.push(d.vars),c.push(d.childIcus)}e.push({type:t.type,vars:a,childIcus:c,cases:t.cases,create:o,remove:i,update:s}),Tp+=Math.max(...a)}function Kp(e,t,n,r,o){const i=new Sr(pt()).getInertBodyElement(e);if(!i)throw new Error("Unable to generate inert body element");const s={vars:0,childIcus:[],create:[],remove:[],update:[]};return function e(t,n,r,o,i,s){if(t){const a=[];for(;t;){const c=t.nextSibling,l=s+ ++n.vars;switch(t.nodeType){case Node.ELEMENT_NODE:const c=t,u=c.tagName.toLowerCase();if(Fr.hasOwnProperty(u)){n.create.push(Mo,u,l,r<<17|1);const a=c.attributes;for(let e=0;e<a.length;e++){const t=a.item(e),r=t.name.toLowerCase();t.value.match(pp)?$r.hasOwnProperty(r)&&Oe(Mr[r]?kp(t.value,l,t.name,Or):Lr[r]?kp(t.value,l,t.name,Ir):kp(t.value,l,t.name),n.update):n.create.push(l<<3|4,t.name,t.value)}e(t.firstChild,n,l,o,i,s),n.remove.push(l<<3|3)}else n.vars--;break;case Node.TEXT_NODE:const h=t.textContent||"",d=h.match(pp);n.create.push(d?"":h,l,r<<17|1),n.remove.push(l<<3|3),d&&Oe(kp(h,l),n.update);break;case Node.COMMENT_NODE:const f=Gp.exec(t.textContent||"");if(f){const e=parseInt(f[1],10);n.create.push(Lo,"",l,r<<17|1),a.push([o[e],l])}else n.vars--;break;default:n.vars--}t=c}for(let e=0;e<a.length;e++){const t=a[e][0],r=a[e][1];Qp(i,t,r,s+n.vars);const o=i.length-1;n.vars+=Math.max(...i[o].vars),n.childIcus.push(o);const c=Dp(t);n.update.push(Ap(t.mainBinding),3,-1-t.mainBinding,r<<2|2,o,c,2,r<<2|3,o),n.remove.push(o<<3|6,r<<3|3)}}}((Qr(i)||i).firstChild,s,t,n,r,o),s}const Gp=/\ufffd(\d+)\ufffd/,Zp=/\uE500/g;let Yp=lp;function Jp(e){var t,n;n="Expected localeId to be defined",null==(t=e)&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+` [Expected=> null != ${t} <=Actual]`)}(n,t),"string"==typeof e&&(Yp=e.toLowerCase().replace(/_/g,"-"))}const Xp=new Map;function eg(e,t){const n=Xp.get(e);tg(e,n&&n.moduleType,t.moduleType),Xp.set(e,t)}function tg(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${H(t)} vs ${H(t.name)}`)}function ng(e){if(null!==e.\u0275mod.id){const t=e.\u0275mod.id;tg(t,Xp.get(t),e),Xp.set(t,e)}let t=e.\u0275mod.imports;t instanceof Function&&(t=t()),t&&t.forEach(e=>ng(e))}function rg(e){return Xp.get(e)||Ke[e]}class og extends ke{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Kf(this);const n=ot(e),r=e[se]||null;r&&Jp(r),this._bootstrapComponents=Rn(n.bootstrap),this._r3Injector=Js(e,t,[{provide:ke,useValue:this},{provide:wh,useValue:this.componentFactoryResolver}],H(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,t=aa.THROW_IF_NOT_FOUND,n=I.Default){return e===aa||e===ke||e===ue?this:this._r3Injector.get(e,t,n)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class ig extends De{constructor(e){super(),this.moduleType=e,null!==ot(e)&&ng(e)}create(e){return new og(this.moduleType,e)}}function sg(e,t,n,r){return g(()=>{const o=e,i=o.prototype?Object.getPrototypeOf(o.prototype):null,s=i&&i.constructor;null!==t&&(void 0===o.decorators||s&&s.decorators===o.decorators?o.decorators=t:o.decorators.push(...t)),null!==n&&(o.ctorParameters=n),null!==r&&(o.propDecorators=void 0===o.propDecorators||s&&s.propDecorators===o.propDecorators?r:Object.assign(Object.assign({},o.propDecorators),r))})}function ag(e,t,n){const r=zt()+e,o=Rt();return o[r]===Po?Za(o,r,n?t.call(n):t()):Ya(o,r)}function cg(e,t,n,r){return bg(Rt(),zt(),e,t,n,r)}function lg(e,t,n,r,o){return vg(Rt(),zt(),e,t,n,r,o)}function ug(e,t,n,r,o,i){return _g(Rt(),zt(),e,t,n,r,o,i)}function hg(e,t,n,r,o,i,s){return wg(Rt(),zt(),e,t,n,r,o,i,s)}function dg(e,t,n,r,o,i,s,a){const c=zt()+e,l=Rt(),u=tc(l,c,n,r,o,i);return Ja(l,c+4,s)||u?Za(l,c+5,a?t.call(a,n,r,o,i,s):t(n,r,o,i,s)):Ya(l,c+5)}function fg(e,t,n,r,o,i,s,a,c){const l=zt()+e,u=Rt(),h=tc(u,l,n,r,o,i);return Xa(u,l+4,s,a)||h?Za(u,l+6,c?t.call(c,n,r,o,i,s,a):t(n,r,o,i,s,a)):Ya(u,l+6)}function pg(e,t,n,r,o,i,s,a,c,l){const u=zt()+e,h=Rt();let d=tc(h,u,n,r,o,i);return ec(h,u+4,s,a,c)||d?Za(h,u+7,l?t.call(l,n,r,o,i,s,a,c):t(n,r,o,i,s,a,c)):Ya(h,u+7)}function gg(e,t,n,r,o,i,s,a,c,l,u){const h=zt()+e,d=Rt(),f=tc(d,h,n,r,o,i);return tc(d,h+4,s,a,c,l)||f?Za(d,h+8,u?t.call(u,n,r,o,i,s,a,c,l):t(n,r,o,i,s,a,c,l)):Ya(d,h+8)}function mg(e,t,n,r){return xg(Rt(),zt(),e,t,n,r)}function yg(e,t){const n=e[t];return n===Po?void 0:n}function bg(e,t,n,r,o,i){const s=t+n;return Ja(e,s,o)?Za(e,s+1,i?r.call(i,o):r(o)):yg(e,s+1)}function vg(e,t,n,r,o,i,s){const a=t+n;return Xa(e,a,o,i)?Za(e,a+2,s?r.call(s,o,i):r(o,i)):yg(e,a+2)}function _g(e,t,n,r,o,i,s,a){const c=t+n;return ec(e,c,o,i,s)?Za(e,c+3,a?r.call(a,o,i,s):r(o,i,s)):yg(e,c+3)}function wg(e,t,n,r,o,i,s,a,c){const l=t+n;return tc(e,l,o,i,s,a)?Za(e,l+4,c?r.call(c,o,i,s,a):r(o,i,s,a)):yg(e,l+4)}function xg(e,t,n,r,o,i){let s=t+n,a=!1;for(let c=0;c<o.length;c++)Ja(e,s++,o[c])&&(a=!0);return a?Za(e,s,r.apply(i,o)):yg(e,s)}function Cg(e,t){const n=Ft();let r;const o=e+19;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}throw new Error(`The pipe '${e}' could not be found!`)}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=rt(r.type)),s=ye(Ic),a=i();return ye(s),Dc(n,Rt(),e,a),a}function Eg(e,t,n){const r=Rt(),o=xt(r,e);return Ag(r,Ig(r,e)?bg(r,zt(),t,o.transform,n,o):o.transform(n))}function Sg(e,t,n,r){const o=Rt(),i=xt(o,e);return Ag(o,Ig(o,e)?vg(o,zt(),t,i.transform,n,r,i):i.transform(n,r))}function kg(e,t,n,r,o){const i=Rt(),s=xt(i,e);return Ag(i,Ig(i,e)?_g(i,zt(),t,s.transform,n,r,o,s):s.transform(n,r,o))}function Dg(e,t,n,r,o,i){const s=Rt(),a=xt(s,e);return Ag(s,Ig(s,e)?wg(s,zt(),t,a.transform,n,r,o,i,a):a.transform(n,r,o,i))}function Og(e,t,n){const r=Rt(),o=xt(r,e);return Ag(r,Ig(r,e)?xg(r,zt(),t,o.transform,n,o):o.transform.apply(o,n))}function Ig(e,t){return e[1].data[t+19].pure}function Ag(e,t){return Qa.isWrapped(t)&&(t=Qa.unwrap(t),e[qt()]=Po),t}class Pg extends r.b{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let r,i=e=>null,s=()=>null;e&&"object"==typeof e?(r=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(i=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(s=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(r=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(i=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(s=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const a=super.subscribe(r,i,s);return e instanceof o.a&&e.add(a),a}}function jg(){return this._results[za()]()}class Tg{constructor(){this.dirty=!0,this._results=[],this.changes=new Pg,this.length=0;const e=za(),t=Tg.prototype;t[e]||(t[e]=jg)}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e){this._results=Ie(e),this.dirty=!1,this.length=this._results.length,this.last=this._results[this.length-1],this.first=this._results[0]}notifyOnChanges(){this.changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}class Ng{constructor(e){this.queryList=e,this.matches=null}clone(){return new Ng(this.queryList)}setDirty(){this.queryList.setDirty()}}class Rg{constructor(e=[]){this.queries=e}createEmbeddedView(e){const t=e.queries;if(null!==t){const n=null!==e.contentQueries?e.contentQueries[0]:t.length,r=[];for(let e=0;e<n;e++){const n=t.getByIndex(e);r.push(this.queries[n.indexInDeclarationView].clone())}return new Rg(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)null!==Jg(e,t).matches&&this.queries[t].setDirty()}}class Fg{constructor(e,t,n,r=null){this.predicate=e,this.descendants=t,this.isStatic=n,this.read=r}}class Mg{constructor(e=[]){this.queries=e}elementStart(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let n=0;n<this.length;n++){const r=null!==t?t.length:0,o=this.getByIndex(n).embeddedTView(e,r);o&&(o.indexInDeclarationView=n,null!==t?t.push(o):t=[o])}return null!==t?new Mg(t):null}template(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Lg{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new Lg(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&!1===this.metadata.descendants){const t=this._declarationNodeIndex;let n=e.parent;for(;null!==n&&4===n.type&&n.index!==t;)n=n.parent;return t===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(e,t){if(Array.isArray(this.metadata.predicate)){const n=this.metadata.predicate;for(let r=0;r<n.length;r++)this.matchTNodeWithReadOption(e,t,$g(t,n[r]))}else{const n=this.metadata.predicate;n===Zh?0===t.type&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Kn(t,e,n,!1,!1))}}matchTNodeWithReadOption(e,t,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===Eh||r===Xh||r===Zh&&0===t.type)this.addMatch(t.index,-2);else{const n=Kn(t,e,r,!1,!1);null!==n&&this.addMatch(t.index,n)}else this.addMatch(t.index,n)}}addMatch(e,t){null===this.matches?this.matches=[e,t]:this.matches.push(e,t)}}function $g(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function Vg(e,t,n,r){return-1===n?function(e,t){return 3===e.type||4===e.type?bs(Eh,e,t):0===e.type?vs(Zh,Eh,e,t):null}(t,e):-2===n?function(e,t,n){return n===Eh?bs(Eh,t,e):n===Zh?vs(Zh,Eh,t,e):n===Xh?_s(Xh,Eh,t,e):void 0}(e,t,r):Gn(e,e[1],n,t)}function Bg(e,t,n,r){const o=t[5].queries[r];if(null===o.matches){const r=e.data,i=n.matches,s=[];for(let e=0;e<i.length;e+=2){const o=i[e];s.push(o<0?null:Vg(t,r[o],i[e+1],n.metadata.read))}o.matches=s}return o.matches}function Ug(e){const t=Rt(),n=Ft(),r=Zt();Yt(r+1);const o=Jg(n,r);if(e.dirty&&kt(t)===o.metadata.isStatic){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?function e(t,n,r,o){const i=t.queries.getByIndex(r),s=i.matches;if(null!==s){const a=Bg(t,n,i,r);for(let t=0;t<s.length;t+=2){const r=s[t];if(r>0)o.push(a[t/2]);else{const i=s[t+1],a=n[-r];for(let t=9;t<a.length;t++){const n=a[t];n[17]===n[3]&&e(n[1],n,i,o)}if(null!==a[5]){const t=a[5];for(let n=0;n<t.length;n++){const r=t[n];e(r[1],r,i,o)}}}}}return o}(n,t,r,[]):Bg(n,t,o,r);e.reset(i),e.notifyOnChanges()}return!0}return!1}function Hg(e,t,n){qg(Ft(),Rt(),e,t,n,!0)}function zg(e,t,n){qg(Ft(),Rt(),e,t,n,!1)}function qg(e,t,n,r,o,i){e.firstCreatePass&&(Yg(e,new Fg(n,r,i,o),-1),i&&(e.staticViewQueries=!0)),Zg(e,t)}function Wg(e,t,n,r){Kg(Ft(),Rt(),t,n,r,!1,Lt(),e)}function Qg(e,t,n,r){Kg(Ft(),Rt(),t,n,r,!0,Lt(),e)}function Kg(e,t,n,r,o,i,s,a){e.firstCreatePass&&(Yg(e,new Fg(n,r,i,o),s.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(e.contentQueries.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(e,a),i&&(e.staticContentQueries=!0)),Zg(e,t)}function Gg(){return e=Rt(),t=Zt(),e[5].queries[t].queryList;var e,t}function Zg(e,t){const n=new Tg;!function(e,t,n,r){const o=Ni(t);o.push(n),e.firstCreatePass&&Ri(e).push(r,o.length-1)}(e,t,n,n.destroy),null===t[5]&&(t[5]=new Rg),t[5].queries.push(new Ng(n))}function Yg(e,t,n){null===e.queries&&(e.queries=new Mg),e.queries.track(new Lg(t,n))}function Jg(e,t){return e.queries.getByIndex(t)}function Xg(e,t){return vs(Zh,Eh,e,t)}function em(e=I.Default){const t=ws(!0);if(null!=t||e&I.Optional)return t;throw new Error("No provider for ChangeDetectorRef!")}const tm=(()=>({"\u0275\u0275attribute":nc,"\u0275\u0275attributeInterpolate1":dc,"\u0275\u0275attributeInterpolate2":fc,"\u0275\u0275attributeInterpolate3":pc,"\u0275\u0275attributeInterpolate4":gc,"\u0275\u0275attributeInterpolate5":mc,"\u0275\u0275attributeInterpolate6":yc,"\u0275\u0275attributeInterpolate7":bc,"\u0275\u0275attributeInterpolate8":vc,"\u0275\u0275attributeInterpolateV":_c,"\u0275\u0275defineComponent":ze,"\u0275\u0275defineDirective":Je,"\u0275\u0275defineInjectable":j,"\u0275\u0275defineInjector":N,"\u0275\u0275defineNgModule":Ge,"\u0275\u0275definePipe":Xe,"\u0275\u0275directiveInject":Ic,"\u0275\u0275getFactoryOf":Xn,"\u0275\u0275getInheritedFactory":er,"\u0275\u0275inject":ve,"\u0275\u0275injectAttribute":Ac,"\u0275\u0275invalidFactory":Pc,"\u0275\u0275invalidFactoryDep":_e,"\u0275\u0275injectPipeChangeDetectorRef":em,"\u0275\u0275templateRefExtractor":Xg,"\u0275\u0275NgOnChangesFeature":ih,"\u0275\u0275ProvidersFeature":gh,"\u0275\u0275CopyDefinitionFeature":rh,"\u0275\u0275InheritDefinitionFeature":Zu,"\u0275\u0275container":Cc,"\u0275\u0275nextContext":Zc,"\u0275\u0275containerRefreshStart":Sc,"\u0275\u0275containerRefreshEnd":kc,"\u0275\u0275namespaceHTML":dn,"\u0275\u0275namespaceMathML":hn,"\u0275\u0275namespaceSVG":un,"\u0275\u0275enableBindings":Tt,"\u0275\u0275disableBindings":Nt,"\u0275\u0275elementStart":Nc,"\u0275\u0275elementEnd":Rc,"\u0275\u0275element":Fc,"\u0275\u0275elementContainerStart":Mc,"\u0275\u0275elementContainerEnd":Lc,"\u0275\u0275elementContainer":$c,"\u0275\u0275pureFunction0":ag,"\u0275\u0275pureFunction1":cg,"\u0275\u0275pureFunction2":lg,"\u0275\u0275pureFunction3":ug,"\u0275\u0275pureFunction4":hg,"\u0275\u0275pureFunction5":dg,"\u0275\u0275pureFunction6":fg,"\u0275\u0275pureFunction7":pg,"\u0275\u0275pureFunction8":gg,"\u0275\u0275pureFunctionV":mg,"\u0275\u0275getCurrentView":Uc,"\u0275\u0275restoreView":Mt,"\u0275\u0275listener":qc,"\u0275\u0275projection":tl,"\u0275\u0275updateSyntheticHostBinding":Du,"\u0275\u0275componentHostSyntheticListener":Wc,"\u0275\u0275pipeBind1":Eg,"\u0275\u0275pipeBind2":Sg,"\u0275\u0275pipeBind3":kg,"\u0275\u0275pipeBind4":Dg,"\u0275\u0275pipeBindV":Og,"\u0275\u0275projectionDef":Jc,"\u0275\u0275hostProperty":ku,"\u0275\u0275property":jc,"\u0275\u0275propertyInterpolate":nl,"\u0275\u0275propertyInterpolate1":rl,"\u0275\u0275propertyInterpolate2":ol,"\u0275\u0275propertyInterpolate3":il,"\u0275\u0275propertyInterpolate4":sl,"\u0275\u0275propertyInterpolate5":al,"\u0275\u0275propertyInterpolate6":cl,"\u0275\u0275propertyInterpolate7":ll,"\u0275\u0275propertyInterpolate8":ul,"\u0275\u0275propertyInterpolateV":hl,"\u0275\u0275pipe":Cg,"\u0275\u0275queryRefresh":Ug,"\u0275\u0275viewQuery":zg,"\u0275\u0275staticViewQuery":Hg,"\u0275\u0275staticContentQuery":Qg,"\u0275\u0275loadQuery":Gg,"\u0275\u0275contentQuery":Wg,"\u0275\u0275reference":Oc,"\u0275\u0275classMap":Il,"\u0275\u0275classMapInterpolate1":Xl,"\u0275\u0275classMapInterpolate2":eu,"\u0275\u0275classMapInterpolate3":tu,"\u0275\u0275classMapInterpolate4":nu,"\u0275\u0275classMapInterpolate5":ru,"\u0275\u0275classMapInterpolate6":ou,"\u0275\u0275classMapInterpolate7":iu,"\u0275\u0275classMapInterpolate8":su,"\u0275\u0275classMapInterpolateV":au,"\u0275\u0275styleMap":Dl,"\u0275\u0275styleMapInterpolate1":cu,"\u0275\u0275styleMapInterpolate2":lu,"\u0275\u0275styleMapInterpolate3":uu,"\u0275\u0275styleMapInterpolate4":hu,"\u0275\u0275styleMapInterpolate5":du,"\u0275\u0275styleMapInterpolate6":fu,"\u0275\u0275styleMapInterpolate7":pu,"\u0275\u0275styleMapInterpolate8":gu,"\u0275\u0275styleMapInterpolateV":mu,"\u0275\u0275styleProp":Sl,"\u0275\u0275stylePropInterpolate1":yu,"\u0275\u0275stylePropInterpolate2":bu,"\u0275\u0275stylePropInterpolate3":vu,"\u0275\u0275stylePropInterpolate4":_u,"\u0275\u0275stylePropInterpolate5":wu,"\u0275\u0275stylePropInterpolate6":xu,"\u0275\u0275stylePropInterpolate7":Cu,"\u0275\u0275stylePropInterpolate8":Eu,"\u0275\u0275stylePropInterpolateV":Su,"\u0275\u0275styleSanitizer":El,"\u0275\u0275classProp":kl,"\u0275\u0275select":Ro,"\u0275\u0275advance":No,"\u0275\u0275template":Ec,"\u0275\u0275text":Ul,"\u0275\u0275textInterpolate":Hl,"\u0275\u0275textInterpolate1":zl,"\u0275\u0275textInterpolate2":ql,"\u0275\u0275textInterpolate3":Wl,"\u0275\u0275textInterpolate4":Ql,"\u0275\u0275textInterpolate5":Kl,"\u0275\u0275textInterpolate6":Gl,"\u0275\u0275textInterpolate7":Zl,"\u0275\u0275textInterpolate8":Yl,"\u0275\u0275textInterpolateV":Jl,"\u0275\u0275embeddedViewStart":Vc,"\u0275\u0275embeddedViewEnd":Bc,"\u0275\u0275i18n":Vp,"\u0275\u0275i18nAttributes":Bp,"\u0275\u0275i18nExp":zp,"\u0275\u0275i18nStart":jp,"\u0275\u0275i18nEnd":Fp,"\u0275\u0275i18nApply":qp,"\u0275\u0275i18nPostprocess":Rp,"\u0275\u0275resolveWindow":jn,"\u0275\u0275resolveDocument":Tn,"\u0275\u0275resolveBody":Nn,"\u0275\u0275setComponentScope":qe,"\u0275\u0275setNgModuleScope":Ze,"\u0275\u0275sanitizeHtml":Jr,"\u0275\u0275sanitizeStyle":Xr,"\u0275\u0275defaultStyleSanitizer":io,"\u0275\u0275sanitizeResourceUrl":to,"\u0275\u0275sanitizeScript":no,"\u0275\u0275sanitizeUrl":eo,"\u0275\u0275sanitizeUrlOrResourceUrl":oo}))();let nm=null;function rm(){nm=null}const om=[],im=[];let sm=!1;function am(){if(!sm){sm=!0;try{for(let e=im.length-1;e>=0;e--){const{moduleType:t,ngModule:n}=im[e];n.declarations&&n.declarations.every(cm)&&(im.splice(e,1),pm(t,n))}}finally{sm=!1}}}function cm(e){return Array.isArray(e)?e.every(cm):!!Q(e)}function lm(e,t={}){um(e,t),function(e,t){im.push({moduleType:e,ngModule:t})}(e,t)}function um(e,t,n=!1){const r=Ie(t.declarations||om);let o=null;Object.defineProperty(e,ie,{configurable:!0,get:()=>(null===o&&(o=te().compileNgModule(tm,`ng:///${e.name}/\u0275mod.js`,{type:e,bootstrap:Ie(t.bootstrap||om).map(Q),declarations:r.map(Q),imports:Ie(t.imports||om).map(Q).map(ym),exports:Ie(t.exports||om).map(Q).map(ym),schemas:t.schemas?Ie(t.schemas):null,id:t.id||null}),o.schemas||(o.schemas=[])),o)});let i=null;Object.defineProperty(e,$,{get:()=>{if(null===i){const n={name:e.name,type:e,deps:Fs(e),providers:t.providers||om,imports:[(t.imports||om).map(Q),(t.exports||om).map(Q)]};i=te().compileInjector(tm,`ng:///${e.name}/\u0275inj.js`,n)}return i},configurable:!1})}let hm=new Map,dm=new Map;function fm(){hm=new Map,dm=new Map,im.length=0}function pm(e,t){const n=Ie(t.declarations||om),r=mm(e);n.forEach(t=>{t.hasOwnProperty(ne)?gm(et(t),r):t.hasOwnProperty(re)||t.hasOwnProperty(oe)||(t.ngSelectorScope=e)})}function gm(e,t){e.directiveDefs=()=>Array.from(t.compilation.directives).map(e=>e.hasOwnProperty(ne)?et(e):tt(e)).filter(e=>!!e),e.pipeDefs=()=>Array.from(t.compilation.pipes).map(e=>nt(e)),e.schemas=t.schemas,e.tView=null}function mm(e){if(!bm(e))throw new Error(`${e.name} does not have a module def (\u0275mod property)`);const t=ot(e);if(null!==t.transitiveCompileScopes)return t.transitiveCompileScopes;const n={schemas:t.schemas||null,compilation:{directives:new Set,pipes:new Set},exported:{directives:new Set,pipes:new Set}};return Rn(t.imports).forEach(e=>{const t=e;if(!bm(t))throw new Error(`Importing ${t.name} which does not have a \u0275mod property`);const r=mm(t);r.exported.directives.forEach(e=>n.compilation.directives.add(e)),r.exported.pipes.forEach(e=>n.compilation.pipes.add(e))}),Rn(t.declarations).forEach(e=>{nt(e)?n.compilation.pipes.add(e):n.compilation.directives.add(e)}),Rn(t.exports).forEach(e=>{const t=e;if(bm(t)){const e=mm(t);e.exported.directives.forEach(e=>{n.compilation.directives.add(e),n.exported.directives.add(e)}),e.exported.pipes.forEach(e=>{n.compilation.pipes.add(e),n.exported.pipes.add(e)})}else nt(t)?n.exported.pipes.add(t):n.exported.directives.add(t)}),t.transitiveCompileScopes=n,n}function ym(e){return function(e){return void 0!==e.ngModule}(e)?e.ngModule:e}function bm(e){return!!ot(e)}function vm(e,t){let n=null;!function(e,t){$a(t)&&(Ma.set(e,t),La.add(e))}(e,t),xm(e,t),Object.defineProperty(e,ne,{get:()=>{if(null===n){const r=te();if($a(t)){const n=[`Component '${e.name}' is not resolved:`];throw t.templateUrl&&n.push(` - templateUrl: ${t.templateUrl}`),t.styleUrls&&t.styleUrls.length&&n.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`),n.push("Did you run and wait for 'resolveComponentResources()'?"),new Error(n.join("\n"))}const o=nm;let i=t.preserveWhitespaces;void 0===i&&(i=null!==o&&void 0!==o.preserveWhitespaces&&o.preserveWhitespaces);let s=t.encapsulation;void 0===s&&(s=null!==o&&void 0!==o.defaultEncapsulation?o.defaultEncapsulation:Ve.Emulated);const a=t.templateUrl||`ng:///${e.name}/template.html`,c=Object.assign(Object.assign({},Em(e,t)),{typeSourceSpan:r.createParseSourceSpan("Component",e.name,a),template:t.template||"",preserveWhitespaces:i,styles:t.styles||Ue,animations:t.animations,directives:[],changeDetection:t.changeDetection,pipes:new Map,encapsulation:s,interpolation:t.interpolation,viewProviders:t.viewProviders||null});if(c.usesInheritance&&Sm(e),n=r.compileComponent(tm,a,c),am(),void 0!==e.ngSelectorScope){const t=mm(e.ngSelectorScope);gm(n,t)}}return n},configurable:!1})}function _m(e,t){let n=null;xm(e,t||{}),Object.defineProperty(e,re,{get:()=>{if(null===n){const r=wm(e,t||{});n=te().compileDirective(tm,r.sourceMapUrl,r.metadata)}return n},configurable:!1})}function wm(e,t){const n=e&&e.name,r=`ng:///${n}/\u0275dir.js`,o=te(),i=Em(e,t);return i.typeSourceSpan=o.createParseSourceSpan("Directive",n,r),i.usesInheritance&&Sm(e),{metadata:i,sourceMapUrl:r}}function xm(e,t){let n=null;Object.defineProperty(e,ae,{get:()=>{if(null===n){const r=wm(e,t),o=te();n=o.compileFactory(tm,`ng:///${e.name}/\u0275fac.js`,Object.assign(Object.assign({},r.metadata),{injectFn:"directiveInject",target:o.R3FactoryTarget.Directive}))}return n},configurable:!1})}function Cm(e){return Object.getPrototypeOf(e.prototype)===Object.prototype}function Em(e,t){const n=Rs(),r=n.ownPropMetadata(e);return{name:e.name,type:e,typeArgumentCount:0,selector:void 0!==t.selector?t.selector:null,deps:Fs(e),host:t.host||Be,propMetadata:r,inputs:t.inputs||Ue,outputs:t.outputs||Ue,queries:Dm(e,r,Om),lifecycle:{usesOnChanges:n.hasLifecycleHook(e,"ngOnChanges")},typeSourceSpan:null,usesInheritance:!Cm(e),exportAs:(o=t.exportAs,void 0===o?null:Pm(o)),providers:t.providers||null,viewQueries:Dm(e,r,Im)};var o}function Sm(e){const t=Object.prototype;let n=Object.getPrototypeOf(e.prototype).constructor;for(;n&&n!==t;)tt(n)||et(n)||!Tm(n)||_m(n,null),n=Object.getPrototypeOf(n)}function km(e,t){return{propertyName:e,predicate:(n=t.selector,"string"==typeof n?Pm(n):Q(n)),descendants:t.descendants,first:t.first,read:t.read?t.read:null,static:!!t.static};var n}function Dm(e,t,n){const r=[];for(const o in t)if(t.hasOwnProperty(o)){const i=t[o];i.forEach(t=>{if(n(t)){if(!t.selector)throw new Error(`Can't construct a query for the property "${o}" of `+`"${An(e)}" since the query selector wasn't defined.`);if(i.some(Am))throw new Error("Cannot combine @Input decorators with query decorators");r.push(km(o,t))}})}return r}function Om(e){const t=e.ngMetadataName;return"ContentChild"===t||"ContentChildren"===t}function Im(e){const t=e.ngMetadataName;return"ViewChild"===t||"ViewChildren"===t}function Am(e){return"Input"===e.ngMetadataName}function Pm(e){return e.split(",").map(e=>e.trim())}const jm=["ngOnChanges","ngOnInit","ngOnDestroy","ngDoCheck","ngAfterViewInit","ngAfterViewChecked","ngAfterContentInit","ngAfterContentChecked"];function Tm(e){const t=Rs();if(jm.some(n=>t.hasLifecycleHook(e,n)))return!0;const n=t.propMetadata(e);for(const r in n){const e=n[r];for(let t=0;t<e.length;t++){const n=e[t],r=n.ngMetadataName;if(Am(n)||Om(n)||Im(n)||"Output"===r||"HostBinding"===r||"HostListener"===r)return!0}}return!1}function Nm(e,t){let n=null,r=null;Object.defineProperty(e,ae,{get:()=>{if(null===r){const n=Rm(e,t),o=te();r=o.compileFactory(tm,`ng:///${n.name}/\u0275fac.js`,Object.assign(Object.assign({},n),{injectFn:"directiveInject",target:o.R3FactoryTarget.Pipe}))}return r},configurable:!1}),Object.defineProperty(e,oe,{get:()=>{if(null===n){const r=Rm(e,t);n=te().compilePipe(tm,`ng:///${r.name}/\u0275pipe.js`,r)}return n},configurable:!1})}function Rm(e,t){return{type:e,typeArgumentCount:0,name:e.name,deps:Fs(e),pipeName:t.name,pure:void 0===t.pure||t.pure}}const Fm=v("Directive",(e={})=>e,void 0,void 0,(e,t)=>Qm(e,t)),Mm=v("Component",(e={})=>Object.assign({changeDetection:Me.Default},e),Fm,void 0,(e,t)=>Wm(e,t)),Lm=v("Pipe",e=>Object.assign({pure:!0},e),void 0,void 0,(e,t)=>Km(e,t)),$m=x("Input",e=>({bindingPropertyName:e})),Vm=x("Output",e=>({bindingPropertyName:e})),Bm=x("HostBinding",e=>({hostPropertyName:e})),Um=x("HostListener",(e,t)=>({eventName:e,args:t})),Hm=vm,zm=_m,qm=Nm,Wm=Hm,Qm=zm,Km=qm,Gm=v("NgModule",e=>e,void 0,void 0,(e,t)=>Ym(e,t)),Zm=lm,Ym=Zm,Jm=new le("Application Initializer");let Xm=(()=>{class e{constructor(e){this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const t=this.appInits[n]();Hc(t)&&e.push(t)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}return e.\u0275fac=function(t){return new(t||e)(ve(Jm,8))},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})();const ey=new le("AppId");function ty(){return`${ry()}${ry()}${ry()}`}const ny={provide:ey,useFactory:ty,deps:[]};function ry(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const oy=new le("Platform Initializer"),iy=new le("Platform ID"),sy=new le("appBootstrapListener"),ay=new le("Application Packages Root URL");let cy=(()=>{class e{log(e){console.log(e)}warn(e){console.warn(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})();const ly=new le("LocaleId"),uy=new le("DefaultCurrencyCode"),hy=new le("Translations"),dy=new le("TranslationsFormat"),fy=function(){var e={Error:0,Warning:1,Ignore:2};return e[e.Error]="Error",e[e.Warning]="Warning",e[e.Ignore]="Ignore",e}(),py=!0,gy=py;class my{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}const yy=function(e){return new ig(e)},by=yy,vy=function(e){return Promise.resolve(yy(e))},_y=vy,wy=function(e){const t=yy(e),n=Rn(ot(e).declarations).reduce((e,t)=>{const n=et(t);return n&&e.push(new Yf(n)),e},[]);return new my(t,n)},xy=wy,Cy=function(e){return Promise.resolve(wy(e))},Ey=Cy;let Sy=(()=>{class e{constructor(){this.compileModuleSync=by,this.compileModuleAsync=_y,this.compileModuleAndAllComponentsSync=xy,this.compileModuleAndAllComponentsAsync=Ey}clearCache(){}clearCacheFor(e){}getModuleId(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})();const ky=new le("compilerOptions");class Dy{}const Oy=(()=>Promise.resolve(0))();function Iy(e){"undefined"==typeof Zone?Oy.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}class Ay{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Pg(!1),this.onMicrotaskEmpty=new Pg(!1),this.onStable=new Pg(!1),this.onError=new Pg(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=t,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let e=X.requestAnimationFrame,t=X.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){-1===e.lastRequestAnimationFrameId&&(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(X,()=>{e.lastRequestAnimationFrameId=-1,Ny(e),Ty(e)}),Ny(e))}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,r,o,i,s,a)=>{try{return Ry(e),n.invokeTask(o,i,s,a)}finally{t&&"eventTask"===i.type&&t(),Fy(e)}},onInvoke:(t,n,r,o,i,s,a)=>{try{return Ry(e),t.invoke(r,o,i,s,a)}finally{Fy(e)}},onHasTask:(t,n,r,o)=>{t.hasTask(r,o),n===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,Ny(e),Ty(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,n,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Ay.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Ay.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,e,jy,Py,Py);try{return o.runTask(i,t,n)}finally{o.cancelTask(i)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}function Py(){}const jy={};function Ty(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ny(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId)}function Ry(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Fy(e){e._nesting--,Ty(e)}class My{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Pg,this.onMicrotaskEmpty=new Pg,this.onStable=new Pg,this.onError=new Pg}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}let Ly=(()=>{class e{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Ay.assertNotInAngularZone(),Iy(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Iy(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}return e.\u0275fac=function(t){return new(t||e)(ve(Ay))},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})(),$y=(()=>{class e{constructor(){this._applications=new Map,Hy.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return Hy.findTestabilityInTree(this,e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})();class Vy{addToWindow(e){}findTestabilityInTree(e,t,n){return null}}function By(e){Hy=e}let Uy,Hy=new Vy,zy=qy;function qy(e,t,n){const r=e.get(ky,[]).concat(t),o=new ig(n);if(0===Ma.size)return Promise.resolve(o);const i=function(e){const t=[];return e.forEach(e=>e&&t.push(...e)),t}(r.map(e=>e.providers));if(0===i.length)return Promise.resolve(o);const s=te(),a=aa.create({providers:i}).get(s.ResourceLoader);return Fa(e=>Promise.resolve(a.get(e))).then(()=>o)}let Wy=Qy;function Qy(e){return e.isBoundToModule}const Ky=new le("AllowMultipleToken");class Gy{constructor(e,t){this.name=e,this.token=t}}function Zy(e){if(Uy&&!Uy.destroyed&&!Uy.injector.get(Ky,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Uy=e.get(tb);const t=e.get(oy,null);return t&&t.forEach(e=>e()),Uy}function Yy(e,t,n=[]){const r=`Platform: ${t}`,o=new le(r);return(t=[])=>{let i=eb();if(!i||i.injector.get(Ky,!1))if(e)e(n.concat(t).concat({provide:o,useValue:!0}));else{const e=n.concat(t).concat({provide:o,useValue:!0},{provide:qs,useValue:"platform"});Zy(aa.create({providers:e,name:r}))}return Jy(o)}}function Jy(e){const t=eb();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}function Xy(){Uy&&!Uy.destroyed&&Uy.destroy()}function eb(){return Uy&&!Uy.destroyed?Uy:null}let tb=(()=>{class e{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;return n="noop"===e?new My:("zone.js"===e?void 0:e)||new Ay({enableLongStackTrace:Cr(),shouldCoalesceEventChangeDetection:t}),n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),r=[{provide:Ay,useValue:n}];return n.run(()=>{const t=aa.create({providers:r,parent:this.injector,name:e.moduleType.name}),o=e.create(t),i=o.injector.get(or,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return o.onDestroy(()=>ob(this._modules,o)),n.runOutsideAngular(()=>n.onError.subscribe({next:e=>{i.handleError(e)}})),function(e,t,n){try{const r=n();return Hc(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(i,n,()=>{const e=o.injector.get(Xm);return e.runInitializers(),e.donePromise.then(()=>(gy&&Jp(o.injector.get(ly,lp)||lp),this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const n=nb({},t);return zy(this.injector,n,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(rb);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${H(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. `+"Please define one of these.");e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(t){return new(t||e)(ve(aa))},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})();function nb(e,t){return Array.isArray(t)?t.reduce(nb,e):Object.assign(Object.assign({},e),t)}let rb=(()=>{class e{constructor(e,t,n,r,o,a){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=o,this._initStatus=a,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=Cr(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new i.a(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),u=new i.a(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{Ay.assertNotInAngularZone(),Iy(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{Ay.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(s.a)(l,u.pipe(e=>{return c()((t=p,function(e){let n;n="function"==typeof t?t:function(){return t};const r=Object.create(e,d);return r.source=e,r.subjectFactory=n,r})(e));var t}))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof yh?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=Wy(n)?void 0:this._injector.get(ke),o=n.create(aa.NULL,[],t||n.selector,r);o.onDestroy(()=>{this._unloadComponent(o)});const i=o.injector.get(Ly,null);return i&&o.injector.get($y).registerApplication(o.location.nativeElement,i),this._loadComponent(o),Cr()&&this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."),o}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(this._enforceNoNewChanges)for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;ob(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(sy,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}_unloadComponent(e){this.detachView(e.hostView),ob(this.components,e)}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy())}get viewCount(){return this._views.length}}return e.\u0275fac=function(t){return new(t||e)(ve(Ay),ve(cy),ve(aa),ve(or),ve(wh),ve(Xm))},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})();function ob(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class ib{}function sb(e){const t=rg(e);if(!t)throw lb(e);return t}function ab(e){const t=rg(e);if(!t)throw lb(e);return new ig(t)}const cb=ab;function lb(e){return new Error(`No module with ID ${e} loaded`)}class ub{}const hb={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let db=(()=>{class e{constructor(e,t){this._compiler=e,this._config=t||hb}load(e){return!gy&&this._compiler instanceof Sy?this.loadFactory(e):this.loadAndCompile(e)}loadAndCompile(e){let[t,r]=e.split("#");return void 0===r&&(r="default"),n("zn8P")(t).then(e=>e[r]).then(e=>fb(e,t,r)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,r]=e.split("#"),o="NgFactory";return void 0===r&&(r="default",o=""),n("zn8P")(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[r+o]).then(e=>fb(e,t,r))}}return e.\u0275fac=function(t){return new(t||e)(ve(Sy),ve(ub,8))},e.\u0275prov=j({token:e,factory:e.\u0275fac}),e})();function fb(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}class pb extends xs{}class gb extends pb{}class mb{constructor(e,t){this.name=e,this.callback=t}}class yb{constructor(e,t,n){this.listeners=[],this.parent=null,this._debugContext=n,this.nativeNode=e,t&&t instanceof bb&&t.addChild(this)}get injector(){return this._debugContext.injector}get componentInstance(){return this._debugContext.component}get context(){return this._debugContext.context}get references(){return this._debugContext.references}get providerTokens(){return this._debugContext.providerTokens}}class bb extends yb{constructor(e,t,n){super(e,t,n),this.properties={},this.attributes={},this.classes={},this.styles={},this.childNodes=[],this.nativeElement=e}addChild(e){e&&(this.childNodes.push(e),e.parent=this)}removeChild(e){const t=this.childNodes.indexOf(e);-1!==t&&(e.parent=null,this.childNodes.splice(t,1))}insertChildrenAfter(e,t){const n=this.childNodes.indexOf(e);-1!==n&&(this.childNodes.splice(n+1,0,...t),t.forEach(t=>{t.parent&&t.parent.removeChild(t),e.parent=this}))}insertBefore(e,t){const n=this.childNodes.indexOf(e);-1===n?this.addChild(t):(t.parent&&t.parent.removeChild(t),t.parent=this,this.childNodes.splice(n,0,t))}query(e){return this.queryAll(e)[0]||null}queryAll(e){const t=[];return function e(t,n,r){t.childNodes.forEach(t=>{t instanceof bb&&(n(t)&&r.push(t),e(t,n,r))})}(this,e,t),t}queryAllNodes(e){const t=[];return function e(t,n,r){t instanceof bb&&t.childNodes.forEach(t=>{n(t)&&r.push(t),t instanceof bb&&e(t,n,r)})}(this,e,t),t}get children(){return this.childNodes.filter(e=>e instanceof bb)}triggerEventHandler(e,t){this.listeners.forEach(n=>{n.name==e&&n.callback(t)})}}function vb(e){return e.map(e=>e.nativeElement)}class _b{constructor(e){this.nativeNode=e}get parent(){const e=this.nativeNode.parentNode;return e?new wb(e):null}get injector(){return ju(this.nativeNode)}get componentInstance(){const e=this.nativeNode;return e&&(Ou(e)||Au(e))}get context(){return Ou(this.nativeNode)||Iu(this.nativeNode)}get listeners(){return Fu(this.nativeNode).filter(e=>"dom"===e.type)}get references(){return function(e){const t=Nu(e,!1);return null===t?{}:(void 0===t.localRefs&&(t.localRefs=function(e,t){const n=e[1].data[t];if(n&&n.localNames){const t={};let r=n.index+1;for(let o=0;o<n.localNames.length;o+=2)t[n.localNames[o]]=e[r],r++;return t}return null}(t.lView,t.nodeIndex)),t.localRefs||{})}(this.nativeNode)}get providerTokens(){return function(e){const t=Nu(e,!1);if(null===t)return[];const n=t.lView[1],r=n.data[t.nodeIndex],o=[],i=r.directiveEnd;for(let a=65535&r.providerIndexes;a<i;a++){let e=n.data[a];void 0!==(s=e).type&&void 0!==s.template&&void 0!==s.declaredInputs&&(e=e.type),o.push(e)}var s;return o}(this.nativeNode)}}class wb extends _b{constructor(e){super(e)}get nativeElement(){return this.nativeNode.nodeType==Node.ELEMENT_NODE?this.nativeNode:null}get name(){try{const e=Nu(this.nativeNode);return e.lView[1].data[e.nodeIndex].tagName}catch(e){return this.nativeNode.nodeName}}get properties(){const e=Nu(this.nativeNode,!1);if(null==e)return{};const t=e.lView,n=t[1].data,r=n[e.nodeIndex],o={};return function(e,t){if(e){let n=Object.getPrototypeOf(e);const r=Node.prototype;for(;null!==n&&n!==r;){const r=Object.getOwnPropertyDescriptors(n);for(let n in r)if(!n.startsWith("__")&&!n.startsWith("on")){const r=e[n];xb(r)&&(t[n]=r)}n=Object.getPrototypeOf(n)}}}(this.nativeElement,o),function(e,t,n,r){let o=t.propertyBindings;if(null!==o)for(let i=0;i<o.length;i++){const t=o[i],s=r[t].split("\ufffd"),a=s[0];if(s.length>1){let r=s[1];for(let e=1;e<s.length-1;e++)r+=In(n[t+e-1])+s[e+1];e[a]=r}else e[a]=n[t]}}(o,r,t,n),o}get attributes(){const e={},t=this.nativeElement;if(!t)return e;const n=Nu(t,!1);if(null==n)return{};const r=n.lView[1].data[n.nodeIndex].attrs,o=[];if(r){let t=0;for(;t<r.length;){const n=r[t];if("string"!=typeof n)break;e[n]=r[t+1],o.push(n.toLowerCase()),t+=2}}const i=t.attributes;for(let s=0;s<i.length;s++){const t=i[s],n=t.name.toLowerCase();-1===o.indexOf(n)&&(e[n]=t.value)}return e}get styles(){return this.nativeElement&&this.nativeElement.style?this.nativeElement.style:{}}get classes(){const e={},t=this.nativeElement.className;return(t&&"string"!=typeof t?t.baseVal.split(" "):t.split(" ")).forEach(t=>e[t]=!0),e}get childNodes(){const e=this.nativeNode.childNodes,t=[];for(let n=0;n<e.length;n++)t.push(Ib(e[n]));return t}get children(){const e=this.nativeElement;if(!e)return[];const t=e.children,n=[];for(let r=0;r<t.length;r++)n.push(Ib(t[r]));return n}query(e){return this.queryAll(e)[0]||null}queryAll(e){const t=[];return Cb(this,e,t,!0),t}queryAllNodes(e){const t=[];return Cb(this,e,t,!1),t}triggerEventHandler(e,t){const n=this.nativeNode,r=[];this.listeners.forEach(o=>{if(o.name===e){const e=o.callback;e.call(n,t),r.push(e)}}),"function"==typeof n.eventListeners&&n.eventListeners(e).forEach(e=>{if(-1!==e.toString().indexOf("__ngUnwrap__")){const o=e("__ngUnwrap__");return-1===r.indexOf(o)&&o.call(n,t)}})}}function xb(e){return"string"==typeof e||"boolean"==typeof e||"number"==typeof e||null===e}function Cb(e,t,n,r){const o=Nu(e.nativeNode,!1);null!==o?Eb(o.lView[1].data[o.nodeIndex],o.lView,t,n,r,e.nativeNode):Db(e.nativeNode,t,n,r)}function Eb(e,t,n,r,o,i){const s=_t(e,t);if(3===e.type||4===e.type){if(kb(s,n,r,o,i),ct(e)){const s=Ct(e.index,t);s&&s[1].firstChild&&Eb(s[1].firstChild,s,n,r,o,i)}else e.child&&Eb(e.child,t,n,r,o,i),s&&Db(s,n,r,o);const a=t[e.index];st(a)&&Sb(a,n,r,o,i)}else if(0===e.type){const s=t[e.index];kb(s[7],n,r,o,i),Sb(s,n,r,o,i)}else if(1===e.type){const s=t[16],a=s[6].projection[e.projection];if(Array.isArray(a))for(let e of a)kb(e,n,r,o,i);else if(a){const e=s[3];Eb(e[1].data[a.index],e,n,r,o,i)}}else e.child&&Eb(e.child,t,n,r,o,i);if(i!==s){const s=4&e.flags?e.projectionNext:e.next;s&&Eb(s,t,n,r,o,i)}}function Sb(e,t,n,r,o){for(let i=9;i<e.length;i++){const s=e[i];Eb(s[1].node,s,t,n,r,o)}}function kb(e,t,n,r,o){if(o!==e){const o=Ab(e);if(!o)return;(r&&o instanceof wb&&t(o)&&-1===n.indexOf(o)||!r&&t(o)&&-1===n.indexOf(o))&&n.push(o)}}function Db(e,t,n,r){const o=e.childNodes,i=o.length;for(let s=0;s<i;s++){const e=o[s],i=Ab(e);i&&((r&&i instanceof wb&&t(i)&&-1===n.indexOf(i)||!r&&t(i)&&-1===n.indexOf(i))&&n.push(i),Db(e,t,n,r))}}const Ob=new Map;function Ib(e){return e instanceof Node?(e.hasOwnProperty("__ng_debug__")||(e.__ng_debug__=e.nodeType==Node.ELEMENT_NODE?new wb(e):new _b(e)),e.__ng_debug__):null}const Ab=Ib;function Pb(e){return function(e){return Ob.get(e)||null}(e)}const jb=function(e){return null};function Tb(e){Ob.set(e.nativeNode,e)}const Nb=_b,Rb=wb,Fb=Yy(null,"core",[{provide:iy,useValue:"unknown"},{provide:tb,deps:[aa]},{provide:$y,deps:[]},{provide:cy,deps:[]}]);function Mb(){return Kh}function Lb(){return Gh}function $b(e){return e=e||gy&&"undefined"!=typeof $localize&&$localize.locale||lp,gy&&Jp(e),e}const Vb=up,Bb=[{provide:rb,useClass:rb,deps:[Ay,cy,aa,or,wh,Xm]},{provide:Zf,deps:[Ay],useFactory:Ub},{provide:Xm,useClass:Xm,deps:[[new E,Jm]]},{provide:Sy,useClass:Sy,deps:[]},ny,{provide:qh,useFactory:Mb,deps:[]},{provide:Wh,useFactory:Lb,deps:[]},{provide:ly,useFactory:$b,deps:[[new C(ly),new E,new k]]},{provide:uy,useValue:Vb}];function Ub(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}let Hb=(()=>{class e{constructor(e){}}return e.\u0275mod=Ge({type:e}),e.\u0275inj=N({factory:function(t){return new(t||e)(ve(rb))},providers:Bb}),e})();function zb(e,t,n,r,o,i){e|=1;const{matchedQueries:s,references:a,matchedQueryIds:c}=jd(t);return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,flags:e,checkIndex:-1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:s,matchedQueryIds:c,references:a,ngContentIndex:n,childCount:r,bindings:[],bindingFlags:0,outputs:[],element:{ns:null,name:null,attrs:null,template:i?Fd(i):null,componentProvider:null,componentView:null,componentRendererType:null,publicProviders:null,allProviders:null,handleEvent:o||pd},provider:null,text:null,query:null,ngContent:null}}function qb(e,t,n,r,o,i,s=[],a,c,l,u,h){l||(l=pd);const{matchedQueries:d,references:f,matchedQueryIds:p}=jd(n);let g=null,m=null;i&&([g,m]=Hd(i)),a=a||[];const y=[];for(let _=0;_<a.length;_++){const[e,t,n]=a[_],[r,o]=Hd(t);let i=void 0,s=void 0;switch(15&e){case 4:s=n;break;case 1:case 8:i=n}y[_]={flags:e,ns:r,name:o,nonMinifiedName:o,securityContext:i,suffix:s}}c=c||[];const b=[];for(let _=0;_<c.length;_++){const[e,t]=c[_];b[_]={type:0,target:e,eventName:t,propName:null}}const v=(s=s||[]).map(([e,t])=>{const[n,r]=Hd(e);return[n,r,t]});return h=function(e){if(e&&"$$undefined"===e.id){const t=null!=e.encapsulation&&e.encapsulation!==Ve.None||e.styles.length||Object.keys(e.data).length;e.id=t?`c${vd++}`:"$$empty"}return e&&"$$empty"===e.id&&(e=null),e||null}(h),u&&(t|=33554432),{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:t|=1,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:d,matchedQueryIds:p,references:f,ngContentIndex:r,childCount:o,bindings:y,bindingFlags:zd(y),outputs:b,element:{ns:g,name:m,attrs:v,template:null,componentProvider:null,componentView:u||null,componentRendererType:h,publicProviders:null,allProviders:null,handleEvent:l||pd},provider:null,text:null,query:null,ngContent:null}}function Wb(e,t,n){const r=n.element,o=e.root.selectorOrNode,i=e.renderer;let s;if(e.parent||!o){s=r.name?i.createElement(r.name,r.ns):i.createComment("");const o=Nd(e,t,n);o&&i.appendChild(o,s)}else s=i.selectRootElement(o,!!r.componentRendererType&&r.componentRendererType.encapsulation===Ve.ShadowDom);if(r.attrs)for(let a=0;a<r.attrs.length;a++){const[e,t,n]=r.attrs[a];i.setAttribute(s,t,n,e)}return s}function Qb(e,t,n,r){for(let s=0;s<n.outputs.length;s++){const a=n.outputs[s],c=Kb(e,n.nodeIndex,(i=a.eventName,(o=a.target)?`${o}:${i}`:i));let l=a.target,u=e;"component"===a.target&&(l=null,u=t);const h=u.renderer.listen(l||r,a.eventName,c);e.disposables[n.outputIndex+s]=h}var o,i}function Kb(e,t,n){return r=>Sd(e,t,n,r)}function Gb(e,t,n,r){if(!wd(e,t,n,r))return!1;const o=t.bindings[n],i=cd(e,t.nodeIndex),s=i.renderElement,a=o.name;switch(15&o.flags){case 1:!function(e,t,n,r,o,i){const s=t.securityContext;let a=s?e.root.sanitizer.sanitize(s,i):i;a=null!=a?a.toString():null;const c=e.renderer;null!=i?c.setAttribute(n,o,a,r):c.removeAttribute(n,o,r)}(e,o,s,o.ns,a,r);break;case 2:!function(e,t,n,r){const o=e.renderer;r?o.addClass(t,n):o.removeClass(t,n)}(e,s,a,r);break;case 4:!function(e,t,n,r,o){let i=e.root.sanitizer.sanitize(Kr.STYLE,o);if(null!=i){i=i.toString();const e=t.suffix;null!=e&&(i+=e)}else i=null;const s=e.renderer;null!=i?s.setStyle(n,r,i):s.removeStyle(n,r)}(e,o,s,a,r);break;case 8:!function(e,t,n,r,o){const i=t.securityContext;let s=i?e.root.sanitizer.sanitize(i,o):o;e.renderer.setProperty(n,r,s)}(33554432&t.flags&&32&o.flags?i.componentView:e,o,s,a,r)}return!0}function Zb(e,t,n){let r=[];for(let o in n)r.push({propName:o,bindingType:n[o]});return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:-1,flags:e,childFlags:0,directChildFlags:0,childMatchedQueries:0,ngContentIndex:-1,matchedQueries:{},matchedQueryIds:0,references:{},childCount:0,bindings:[],bindingFlags:0,outputs:[],element:null,provider:null,text:null,query:{id:t,filterId:Pd(t),bindings:r},ngContent:null}}function Yb(e){const t=e.def.nodeMatchedQueries;for(;e.parent&&Ad(e);){let n=e.parentNodeDef;e=e.parent;const r=n.nodeIndex+n.childCount;for(let o=0;o<=r;o++){const r=e.def.nodes[o];67108864&r.flags&&536870912&r.flags&&(r.query.filterId&t)===r.query.filterId&&hd(e,o).setDirty(),!(1&r.flags&&o+r.childCount<n.nodeIndex)&&67108864&r.childFlags&&536870912&r.childFlags||(o+=r.childCount)}}if(134217728&e.def.nodeFlags)for(let n=0;n<e.def.nodes.length;n++){const t=e.def.nodes[n];134217728&t.flags&&536870912&t.flags&&hd(e,n).setDirty(),n+=t.childCount}}function Jb(e,t){const n=hd(e,t.nodeIndex);if(!n.dirty)return;let r,o=void 0;if(67108864&t.flags){const n=t.parent.parent;o=Xb(e,n.nodeIndex,n.nodeIndex+n.childCount,t.query,[]),r=ld(e,t.parent.nodeIndex).instance}else 134217728&t.flags&&(o=Xb(e,0,e.def.nodes.length-1,t.query,[]),r=e.component);n.reset(o);const i=t.query.bindings;let s=!1;for(let a=0;a<i.length;a++){const e=i[a];let t;switch(e.bindingType){case 0:t=n.first;break;case 1:t=n,s=!0}r[e.propName]=t}s&&n.notifyOnChanges()}function Xb(e,t,n,r,o){for(let i=t;i<=n;i++){const t=e.def.nodes[i],n=t.matchedQueries[r.id];if(null!=n&&o.push(ev(e,t,n)),1&t.flags&&t.element.template&&(t.element.template.nodeMatchedQueries&r.filterId)===r.filterId){const n=cd(e,i);if((t.childMatchedQueries&r.filterId)===r.filterId&&(Xb(e,i+1,i+t.childCount,r,o),i+=t.childCount),16777216&t.flags){const e=n.viewContainer._embeddedViews;for(let t=0;t<e.length;t++){const i=e[t],s=kd(i);s&&s===n&&Xb(i,0,i.def.nodes.length-1,r,o)}}const s=n.template._projectedViews;if(s)for(let e=0;e<s.length;e++){const t=s[e];Xb(t,0,t.def.nodes.length-1,r,o)}}(t.childMatchedQueries&r.filterId)!==r.filterId&&(i+=t.childCount)}return o}function ev(e,t,n){if(null!=n)switch(n){case 1:return cd(e,t.nodeIndex).renderElement;case 0:return new Eh(cd(e,t.nodeIndex).renderElement);case 2:return cd(e,t.nodeIndex).template;case 3:return cd(e,t.nodeIndex).viewContainer;case 4:return ld(e,t.nodeIndex).instance}}function tv(e,t){return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:-1,flags:8,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:e,childCount:0,bindings:[],bindingFlags:0,outputs:[],element:null,provider:null,text:null,query:null,ngContent:{index:t}}}function nv(e,t,n){const r=Nd(e,t,n);r&&$d(e,n.ngContent.index,1,r,null,void 0)}function rv(e,t){return sv(128,e,Te(t+1))}function ov(e,t){return sv(32,e,Te(t))}function iv(e,t){const n=Object.keys(t),r=n.length,o=[];for(let i=0;i<r;i++)o.push(n[i]);return sv(64,e,o)}function sv(e,t,n){const r=[];for(let o=0;o<n.length;o++){const e=n[o];r.push({flags:8,name:e,ns:null,nonMinifiedName:e,securityContext:null,suffix:null})}return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:t,flags:e,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:-1,childCount:0,bindings:r,bindingFlags:zd(r),outputs:[],element:null,provider:null,text:null,query:null,ngContent:null}}function av(e,t,n){const r=[];for(let o=1;o<n.length;o++)r[o-1]={flags:8,name:null,ns:null,nonMinifiedName:null,securityContext:null,suffix:n[o]};return{nodeIndex:-1,parent:null,renderParent:null,bindingIndex:-1,outputIndex:-1,checkIndex:e,flags:2,childFlags:0,directChildFlags:0,childMatchedQueries:0,matchedQueries:{},matchedQueryIds:0,references:{},ngContentIndex:t,childCount:0,bindings:r,bindingFlags:8,outputs:[],element:null,provider:null,text:{prefix:n[0]},query:null,ngContent:null}}function cv(e,t,n){let r;const o=e.renderer;r=o.createText(n.text.prefix);const i=Nd(e,t,n);return i&&o.appendChild(i,r),{renderText:r}}function lv(e,t){return(null!=e?e.toString():"")+t.suffix}function uv(e,t,n,r){let o=0,i=0,s=0,a=0,c=0,l=null,u=null,h=!1,d=!1,f=null;for(let p=0;p<t.length;p++){const e=t[p];if(e.nodeIndex=p,e.parent=l,e.bindingIndex=o,e.outputIndex=i,e.renderParent=u,s|=e.flags,c|=e.matchedQueryIds,e.element){const t=e.element;t.publicProviders=l?l.element.publicProviders:Object.create(null),t.allProviders=t.publicProviders,h=!1,d=!1,e.element.template&&(c|=e.element.template.nodeMatchedQueries)}if(dv(l,e,t.length),o+=e.bindings.length,i+=e.outputs.length,!u&&3&e.flags&&(f=e),20224&e.flags){h||(h=!0,l.element.publicProviders=Object.create(l.element.publicProviders),l.element.allProviders=l.element.publicProviders);const t=0!=(32768&e.flags);0==(8192&e.flags)||t?l.element.publicProviders[md(e.provider.token)]=e:(d||(d=!0,l.element.allProviders=Object.create(l.element.publicProviders)),l.element.allProviders[md(e.provider.token)]=e),t&&(l.element.componentProvider=e)}if(l?(l.childFlags|=e.flags,l.directChildFlags|=e.flags,l.childMatchedQueries|=e.matchedQueryIds,e.element&&e.element.template&&(l.childMatchedQueries|=e.element.template.nodeMatchedQueries)):a|=e.flags,e.childCount>0)l=e,hv(e)||(u=e);else for(;l&&p===l.nodeIndex+l.childCount;){const e=l.parent;e&&(e.childFlags|=l.childFlags,e.childMatchedQueries|=l.childMatchedQueries),l=e,u=l&&hv(l)?l.renderParent:l}}return{factory:null,nodeFlags:s,rootNodeFlags:a,nodeMatchedQueries:c,flags:e,nodes:t,updateDirectives:n||pd,updateRenderer:r||pd,handleEvent:(e,n,r,o)=>t[n].element.handleEvent(e,r,o),bindingCount:o,outputCount:i,lastRenderRootNode:f}}function hv(e){return 0!=(1&e.flags)&&null===e.element.name}function dv(e,t,n){const r=t.element&&t.element.template;if(r){if(!r.lastRenderRootNode)throw new Error("Illegal State: Embedded templates without nodes are not allowed!");if(r.lastRenderRootNode&&16777216&r.lastRenderRootNode.flags)throw new Error(`Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`)}if(20224&t.flags&&0==(1&(e?e.flags:0)))throw new Error(`Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`);if(t.query){if(67108864&t.flags&&(!e||0==(16384&e.flags)))throw new Error(`Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`);if(134217728&t.flags&&e)throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`)}if(t.childCount){const r=e?e.nodeIndex+e.childCount:n-1;if(t.nodeIndex<=r&&t.nodeIndex+t.childCount>r)throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`)}}function fv(e,t,n,r){const o=mv(e.root,e.renderer,e,t,n);return yv(o,e.component,r),bv(o),o}function pv(e,t,n){const r=mv(e,e.renderer,null,null,t);return yv(r,n,n),bv(r),r}function gv(e,t,n,r){const o=t.element.componentRendererType;let i;return i=o?e.root.rendererFactory.createRenderer(r,o):e.root.renderer,mv(e.root,i,e,t.element.componentProvider,n)}function mv(e,t,n,r,o){const i=new Array(o.nodes.length),s=o.outputCount?new Array(o.outputCount):null;return{def:o,parent:n,viewContainerParent:null,parentNodeDef:r,context:null,component:null,nodes:i,state:13,root:e,renderer:t,oldValues:new Array(o.bindingCount),disposables:s,initIndex:-1}}function yv(e,t,n){e.component=t,e.context=n}function bv(e){let t;Id(e)&&(t=cd(e.parent,e.parentNodeDef.parent.nodeIndex).renderElement);const n=e.def,r=e.nodes;for(let o=0;o<n.nodes.length;o++){const i=n.nodes[o];let s;switch(fd.setCurrentNode(e,o),201347067&i.flags){case 1:const n=Wb(e,t,i);let a=void 0;if(33554432&i.flags){const t=Fd(i.element.componentView);a=fd.createComponentView(e,i,t,n)}Qb(e,a,i,n),s={renderElement:n,componentView:a,viewContainer:null,template:i.element.template?yf(e,i):void 0},16777216&i.flags&&(s.viewContainer=ff(e,i,s));break;case 2:s=cv(e,t,i);break;case 512:case 1024:case 2048:case 256:s=r[o],s||4096&i.flags||(s={instance:Rf(e,i)});break;case 16:s={instance:Ff(e,i)};break;case 16384:s=r[o],s||(s={instance:Mf(e,i)}),32768&i.flags&&yv(cd(e,i.parent.nodeIndex).componentView,s.instance,s.instance);break;case 32:case 64:case 128:s={value:void 0};break;case 67108864:case 134217728:s=new Tg;break;case 8:nv(e,t,i),s=void 0}r[o]=s}Dv(e,kv.CreateViewNodes),Pv(e,201326592,268435456,0)}function vv(e){xv(e),fd.updateDirectives(e,1),Ov(e,kv.CheckNoChanges),fd.updateRenderer(e,1),Dv(e,kv.CheckNoChanges),e.state&=-97}function _v(e){1&e.state?(e.state&=-2,e.state|=2):e.state&=-3,id(e,0,256),xv(e),fd.updateDirectives(e,0),Ov(e,kv.CheckAndUpdate),Pv(e,67108864,536870912,0);let t=id(e,256,512);qf(e,2097152|(t?1048576:0)),fd.updateRenderer(e,0),Dv(e,kv.CheckAndUpdate),Pv(e,134217728,536870912,0),t=id(e,512,768),qf(e,8388608|(t?4194304:0)),2&e.def.flags&&(e.state&=-9),e.state&=-97,id(e,768,1024)}function wv(e,t,n,r,o,i,s,a,c,l,u,h,d){return 0===n?function(e,t,n,r,o,i,s,a,c,l,u,h){switch(201347067&t.flags){case 1:return function(e,t,n,r,o,i,s,a,c,l,u,h){const d=t.bindings.length;let f=!1;return d>0&&Gb(e,t,0,n)&&(f=!0),d>1&&Gb(e,t,1,r)&&(f=!0),d>2&&Gb(e,t,2,o)&&(f=!0),d>3&&Gb(e,t,3,i)&&(f=!0),d>4&&Gb(e,t,4,s)&&(f=!0),d>5&&Gb(e,t,5,a)&&(f=!0),d>6&&Gb(e,t,6,c)&&(f=!0),d>7&&Gb(e,t,7,l)&&(f=!0),d>8&&Gb(e,t,8,u)&&(f=!0),d>9&&Gb(e,t,9,h)&&(f=!0),f}(e,t,n,r,o,i,s,a,c,l,u,h);case 2:return function(e,t,n,r,o,i,s,a,c,l,u,h){let d=!1;const f=t.bindings,p=f.length;if(p>0&&wd(e,t,0,n)&&(d=!0),p>1&&wd(e,t,1,r)&&(d=!0),p>2&&wd(e,t,2,o)&&(d=!0),p>3&&wd(e,t,3,i)&&(d=!0),p>4&&wd(e,t,4,s)&&(d=!0),p>5&&wd(e,t,5,a)&&(d=!0),p>6&&wd(e,t,6,c)&&(d=!0),p>7&&wd(e,t,7,l)&&(d=!0),p>8&&wd(e,t,8,u)&&(d=!0),p>9&&wd(e,t,9,h)&&(d=!0),d){let d=t.text.prefix;p>0&&(d+=lv(n,f[0])),p>1&&(d+=lv(r,f[1])),p>2&&(d+=lv(o,f[2])),p>3&&(d+=lv(i,f[3])),p>4&&(d+=lv(s,f[4])),p>5&&(d+=lv(a,f[5])),p>6&&(d+=lv(c,f[6])),p>7&&(d+=lv(l,f[7])),p>8&&(d+=lv(u,f[8])),p>9&&(d+=lv(h,f[9]));const g=ad(e,t.nodeIndex).renderText;e.renderer.setValue(g,d)}return d}(e,t,n,r,o,i,s,a,c,l,u,h);case 16384:return function(e,t,n,r,o,i,s,a,c,l,u,h){const d=ld(e,t.nodeIndex),f=d.instance;let p=!1,g=void 0;const m=t.bindings.length;return m>0&&_d(e,t,0,n)&&(p=!0,g=zf(e,d,t,0,n,g)),m>1&&_d(e,t,1,r)&&(p=!0,g=zf(e,d,t,1,r,g)),m>2&&_d(e,t,2,o)&&(p=!0,g=zf(e,d,t,2,o,g)),m>3&&_d(e,t,3,i)&&(p=!0,g=zf(e,d,t,3,i,g)),m>4&&_d(e,t,4,s)&&(p=!0,g=zf(e,d,t,4,s,g)),m>5&&_d(e,t,5,a)&&(p=!0,g=zf(e,d,t,5,a,g)),m>6&&_d(e,t,6,c)&&(p=!0,g=zf(e,d,t,6,c,g)),m>7&&_d(e,t,7,l)&&(p=!0,g=zf(e,d,t,7,l,g)),m>8&&_d(e,t,8,u)&&(p=!0,g=zf(e,d,t,8,u,g)),m>9&&_d(e,t,9,h)&&(p=!0,g=zf(e,d,t,9,h,g)),g&&f.ngOnChanges(g),65536&t.flags&&sd(e,256,t.nodeIndex)&&f.ngOnInit(),262144&t.flags&&f.ngDoCheck(),p}(e,t,n,r,o,i,s,a,c,l,u,h);case 32:case 64:case 128:return function(e,t,n,r,o,i,s,a,c,l,u,h){const d=t.bindings;let f=!1;const p=d.length;if(p>0&&wd(e,t,0,n)&&(f=!0),p>1&&wd(e,t,1,r)&&(f=!0),p>2&&wd(e,t,2,o)&&(f=!0),p>3&&wd(e,t,3,i)&&(f=!0),p>4&&wd(e,t,4,s)&&(f=!0),p>5&&wd(e,t,5,a)&&(f=!0),p>6&&wd(e,t,6,c)&&(f=!0),p>7&&wd(e,t,7,l)&&(f=!0),p>8&&wd(e,t,8,u)&&(f=!0),p>9&&wd(e,t,9,h)&&(f=!0),f){const f=ud(e,t.nodeIndex);let g;switch(201347067&t.flags){case 32:g=[],p>0&&g.push(n),p>1&&g.push(r),p>2&&g.push(o),p>3&&g.push(i),p>4&&g.push(s),p>5&&g.push(a),p>6&&g.push(c),p>7&&g.push(l),p>8&&g.push(u),p>9&&g.push(h);break;case 64:g={},p>0&&(g[d[0].name]=n),p>1&&(g[d[1].name]=r),p>2&&(g[d[2].name]=o),p>3&&(g[d[3].name]=i),p>4&&(g[d[4].name]=s),p>5&&(g[d[5].name]=a),p>6&&(g[d[6].name]=c),p>7&&(g[d[7].name]=l),p>8&&(g[d[8].name]=u),p>9&&(g[d[9].name]=h);break;case 128:const e=n;switch(p){case 1:g=e.transform(n);break;case 2:g=e.transform(r);break;case 3:g=e.transform(r,o);break;case 4:g=e.transform(r,o,i);break;case 5:g=e.transform(r,o,i,s);break;case 6:g=e.transform(r,o,i,s,a);break;case 7:g=e.transform(r,o,i,s,a,c);break;case 8:g=e.transform(r,o,i,s,a,c,l);break;case 9:g=e.transform(r,o,i,s,a,c,l,u);break;case 10:g=e.transform(r,o,i,s,a,c,l,u,h)}}f.value=g}return f}(e,t,n,r,o,i,s,a,c,l,u,h);default:throw"unreachable"}}(e,t,r,o,i,s,a,c,l,u,h,d):function(e,t,n){switch(201347067&t.flags){case 1:return function(e,t,n){let r=!1;for(let o=0;o<n.length;o++)Gb(e,t,o,n[o])&&(r=!0);return r}(e,t,n);case 2:return function(e,t,n){const r=t.bindings;let o=!1;for(let i=0;i<n.length;i++)wd(e,t,i,n[i])&&(o=!0);if(o){let o="";for(let e=0;e<n.length;e++)o+=lv(n[e],r[e]);o=t.text.prefix+o;const i=ad(e,t.nodeIndex).renderText;e.renderer.setValue(i,o)}return o}(e,t,n);case 16384:return function(e,t,n){const r=ld(e,t.nodeIndex),o=r.instance;let i=!1,s=void 0;for(let a=0;a<n.length;a++)_d(e,t,a,n[a])&&(i=!0,s=zf(e,r,t,a,n[a],s));return s&&o.ngOnChanges(s),65536&t.flags&&sd(e,256,t.nodeIndex)&&o.ngOnInit(),262144&t.flags&&o.ngDoCheck(),i}(e,t,n);case 32:case 64:case 128:return function(e,t,n){const r=t.bindings;let o=!1;for(let i=0;i<n.length;i++)wd(e,t,i,n[i])&&(o=!0);if(o){const o=ud(e,t.nodeIndex);let i;switch(201347067&t.flags){case 32:i=n;break;case 64:i={};for(let o=0;o<n.length;o++)i[r[o].name]=n[o];break;case 128:const e=n[0],t=n.slice(1);i=e.transform(...t)}o.value=i}return o}(e,t,n);default:throw"unreachable"}}(e,t,r)}function xv(e){const t=e.def;if(4&t.nodeFlags)for(let n=0;n<t.nodes.length;n++){const r=t.nodes[n];if(4&r.flags){const t=cd(e,n).template._projectedViews;if(t)for(let n=0;n<t.length;n++){const r=t[n];r.state|=32,Ed(r,e)}}else 0==(4&r.childFlags)&&(n+=r.childCount)}}function Cv(e,t,n,r,o,i,s,a,c,l,u,h,d){return 0===n?function(e,t,n,r,o,i,s,a,c,l,u,h){const d=t.bindings.length;d>0&&xd(e,t,0,n),d>1&&xd(e,t,1,r),d>2&&xd(e,t,2,o),d>3&&xd(e,t,3,i),d>4&&xd(e,t,4,s),d>5&&xd(e,t,5,a),d>6&&xd(e,t,6,c),d>7&&xd(e,t,7,l),d>8&&xd(e,t,8,u),d>9&&xd(e,t,9,h)}(e,t,r,o,i,s,a,c,l,u,h,d):function(e,t,n){for(let r=0;r<n.length;r++)xd(e,t,r,n[r])}(e,t,r),!1}function Ev(e,t){if(hd(e,t.nodeIndex).dirty)throw nd(fd.createDebugContext(e,t.nodeIndex),`Query ${t.query.id} not dirty`,`Query ${t.query.id} dirty`,0!=(1&e.state))}function Sv(e){if(!(128&e.state)){if(Ov(e,kv.Destroy),Dv(e,kv.Destroy),qf(e,131072),e.disposables)for(let t=0;t<e.disposables.length;t++)e.disposables[t]();!function(e){if(!(16&e.state))return;const t=kd(e);if(t){const n=t.template._projectedViews;n&&(je(n,n.indexOf(e)),fd.dirtyParentQueries(e))}}(e),e.renderer.destroyNode&&function(e){const t=e.def.nodes.length;for(let n=0;n<t;n++){const t=e.def.nodes[n];1&t.flags?e.renderer.destroyNode(cd(e,n).renderElement):2&t.flags?e.renderer.destroyNode(ad(e,n).renderText):(67108864&t.flags||134217728&t.flags)&&hd(e,n).destroy()}}(e),Id(e)&&e.renderer.destroy(),e.state|=128}}const kv=function(){var e={CreateViewNodes:0,CheckNoChanges:1,CheckNoChangesProjectedViews:2,CheckAndUpdate:3,CheckAndUpdateProjectedViews:4,Destroy:5};return e[e.CreateViewNodes]="CreateViewNodes",e[e.CheckNoChanges]="CheckNoChanges",e[e.CheckNoChangesProjectedViews]="CheckNoChangesProjectedViews",e[e.CheckAndUpdate]="CheckAndUpdate",e[e.CheckAndUpdateProjectedViews]="CheckAndUpdateProjectedViews",e[e.Destroy]="Destroy",e}();function Dv(e,t){const n=e.def;if(33554432&n.nodeFlags)for(let r=0;r<n.nodes.length;r++){const o=n.nodes[r];33554432&o.flags?Iv(cd(e,r).componentView,t):0==(33554432&o.childFlags)&&(r+=o.childCount)}}function Ov(e,t){const n=e.def;if(16777216&n.nodeFlags)for(let r=0;r<n.nodes.length;r++){const o=n.nodes[r];if(16777216&o.flags){const n=cd(e,r).viewContainer._embeddedViews;for(let e=0;e<n.length;e++)Iv(n[e],t)}else 0==(16777216&o.childFlags)&&(r+=o.childCount)}}function Iv(e,t){const n=e.state;switch(t){case kv.CheckNoChanges:0==(128&n)&&(12==(12&n)?vv(e):64&n&&Av(e,kv.CheckNoChangesProjectedViews));break;case kv.CheckNoChangesProjectedViews:0==(128&n)&&(32&n?vv(e):64&n&&Av(e,t));break;case kv.CheckAndUpdate:0==(128&n)&&(12==(12&n)?_v(e):64&n&&Av(e,kv.CheckAndUpdateProjectedViews));break;case kv.CheckAndUpdateProjectedViews:0==(128&n)&&(32&n?_v(e):64&n&&Av(e,t));break;case kv.Destroy:Sv(e);break;case kv.CreateViewNodes:bv(e)}}function Av(e,t){Ov(e,t),Dv(e,t)}function Pv(e,t,n,r){if(!(e.def.nodeFlags&t&&e.def.nodeFlags&n))return;const o=e.def.nodes.length;for(let i=0;i<o;i++){const o=e.def.nodes[i];if(o.flags&t&&o.flags&n)switch(fd.setCurrentNode(e,o.nodeIndex),r){case 0:Jb(e,o);break;case 1:Ev(e,o)}o.childFlags&t&&o.childFlags&n||(i+=o.childCount)}}let jv=!1;function Tv(){if(jv)return;jv=!0;const e=Cr()?{setCurrentNode:n_,createRootView:Rv,createEmbeddedView:Mv,createComponentView:Lv,createNgModuleRef:$v,overrideProvider:Hv,overrideComponentView:zv,clearOverrides:qv,checkAndUpdateView:Gv,checkNoChangesView:Zv,destroyView:Yv,createDebugContext:(e,t)=>new u_(e,t),handleEvent:r_,updateDirectives:o_,updateRenderer:i_}:{setCurrentNode:()=>{},createRootView:Nv,createEmbeddedView:fv,createComponentView:gv,createNgModuleRef:xf,overrideProvider:pd,overrideComponentView:pd,clearOverrides:pd,checkAndUpdateView:_v,checkNoChangesView:vv,destroyView:Sv,createDebugContext:(e,t)=>new u_(e,t),handleEvent:(e,t,n,r)=>e.def.handleEvent(e,t,n,r),updateDirectives:(e,t)=>e.def.updateDirectives(0===t?Qv:Kv,e),updateRenderer:(e,t)=>e.def.updateRenderer(0===t?Qv:Kv,e)};fd.setCurrentNode=e.setCurrentNode,fd.createRootView=e.createRootView,fd.createEmbeddedView=e.createEmbeddedView,fd.createComponentView=e.createComponentView,fd.createNgModuleRef=e.createNgModuleRef,fd.overrideProvider=e.overrideProvider,fd.overrideComponentView=e.overrideComponentView,fd.clearOverrides=e.clearOverrides,fd.checkAndUpdateView=e.checkAndUpdateView,fd.checkNoChangesView=e.checkNoChangesView,fd.destroyView=e.destroyView,fd.resolveDep=Uf,fd.createDebugContext=e.createDebugContext,fd.handleEvent=e.handleEvent,fd.updateDirectives=e.updateDirectives,fd.updateRenderer=e.updateRenderer,fd.dirtyParentQueries=Yb}function Nv(e,t,n,r,o,i){const s=o.injector.get(Dh);return pv(Fv(e,o,s,t,n),r,i)}function Rv(e,t,n,r,o,i){const s=o.injector.get(Dh),a=Fv(e,o,new p_(s),t,n),c=Wv(r);return d_(Jv.create,pv,null,[a,c,i])}function Fv(e,t,n,r,o){const i=t.injector.get(jh),s=t.injector.get(or),a=n.createRenderer(null,null);return{ngModule:t,injector:e,projectableNodes:r,selectorOrNode:o,sanitizer:i,rendererFactory:n,renderer:a,errorHandler:s}}function Mv(e,t,n,r){const o=Wv(n);return d_(Jv.create,fv,null,[e,t,o,r])}function Lv(e,t,n,r){return n=Uv.get(t.element.componentProvider.provider.token)||Wv(n),d_(Jv.create,gv,null,[e,t,n,r])}function $v(e,t,n,r){return xf(e,t,n,function(e){const{hasOverrides:t,hasDeprecatedOverrides:n}=function(e){let t=!1,n=!1;return 0===Vv.size||(e.providers.forEach(e=>{const r=Vv.get(e.token);3840&e.flags&&r&&(t=!0,n=n||r.deprecatedBehavior)}),e.modules.forEach(e=>{Bv.forEach((r,o)=>{R(o).providedIn===e&&(t=!0,n=n||r.deprecatedBehavior)})})),{hasOverrides:t,hasDeprecatedOverrides:n}}(e);return t?(function(e){for(let t=0;t<e.providers.length;t++){const r=e.providers[t];n&&(r.flags|=4096);const o=Vv.get(r.token);o&&(r.flags=-3841&r.flags|o.flags,r.deps=Td(o.deps),r.value=o.value)}if(Bv.size>0){let t=new Set(e.modules);Bv.forEach((r,o)=>{if(t.has(R(o).providedIn)){let t={token:o,flags:r.flags|(n?4096:0),deps:Td(r.deps),value:r.value,index:e.providers.length};e.providers.push(t),e.providersByKey[md(o)]=t}})}}(e=e.factory(()=>pd)),e):e}(r))}const Vv=new Map,Bv=new Map,Uv=new Map;function Hv(e){let t;Vv.set(e.token,e),"function"==typeof e.token&&(t=R(e.token))&&"function"==typeof t.providedIn&&Bv.set(e.token,e)}function zv(e,t){const n=Fd(uf(t)),r=Fd(n.nodes[0].element.componentView);Uv.set(e,r)}function qv(){Vv.clear(),Bv.clear(),Uv.clear()}function Wv(e){if(0===Vv.size)return e;const t=function(e){const t=[];let n=null;for(let r=0;r<e.nodes.length;r++){const o=e.nodes[r];1&o.flags&&(n=o),n&&3840&o.flags&&Vv.has(o.provider.token)&&(t.push(n.nodeIndex),n=null)}return t}(e);if(0===t.length)return e;e=e.factory(()=>pd);for(let r=0;r<t.length;r++)n(e,t[r]);return e;function n(e,t){for(let n=t+1;n<e.nodes.length;n++){const t=e.nodes[n];if(1&t.flags)return;if(3840&t.flags){const e=t.provider,n=Vv.get(e.token);n&&(t.flags=-3841&t.flags|n.flags,e.deps=Td(n.deps),e.value=n.value)}}}}function Qv(e,t,n,r,o,i,s,a,c,l,u,h,d){const f=e.def.nodes[t];return wv(e,f,n,r,o,i,s,a,c,l,u,h,d),224&f.flags?ud(e,t).value:void 0}function Kv(e,t,n,r,o,i,s,a,c,l,u,h,d){const f=e.def.nodes[t];return Cv(e,f,n,r,o,i,s,a,c,l,u,h,d),224&f.flags?ud(e,t).value:void 0}function Gv(e){return d_(Jv.detectChanges,_v,null,[e])}function Zv(e){return d_(Jv.checkNoChanges,vv,null,[e])}function Yv(e){return d_(Jv.destroy,Sv,null,[e])}const Jv=function(){var e={create:0,detectChanges:1,checkNoChanges:2,destroy:3,handleEvent:4};return e[e.create]="create",e[e.detectChanges]="detectChanges",e[e.checkNoChanges]="checkNoChanges",e[e.destroy]="destroy",e[e.handleEvent]="handleEvent",e}();let Xv,e_,t_;function n_(e,t){e_=e,t_=t}function r_(e,t,n,r){return n_(e,t),d_(Jv.handleEvent,e.def.handleEvent,null,[e,t,n,r])}function o_(e,t){if(128&e.state)throw od(Jv[Xv]);return n_(e,c_(e,0)),e.def.updateDirectives((function(e,n,r,...o){const i=e.def.nodes[n];return 0===t?s_(e,i,r,o):a_(e,i,r,o),16384&i.flags&&n_(e,c_(e,n)),224&i.flags?ud(e,i.nodeIndex).value:void 0}),e)}function i_(e,t){if(128&e.state)throw od(Jv[Xv]);return n_(e,l_(e,0)),e.def.updateRenderer((function(e,n,r,...o){const i=e.def.nodes[n];return 0===t?s_(e,i,r,o):a_(e,i,r,o),3&i.flags&&n_(e,l_(e,n)),224&i.flags?ud(e,i.nodeIndex).value:void 0}),e)}function s_(e,t,n,r){if(wv(e,t,n,...r)){const s=1===n?r[0]:r;if(16384&t.flags){const n={};for(let e=0;e<t.bindings.length;e++){const r=t.bindings[e],a=s[e];8&r.flags&&(n[(o=r.nonMinifiedName,i=void 0,i=o.replace(/[$@]/g,"_"),`ng-reflect-${o=i.replace(co,(...e)=>"-"+e[1].toLowerCase())}`)]=lo(a))}const r=t.parent,a=cd(e,r.nodeIndex).renderElement;if(r.element.name)for(let t in n){const r=n[t];null!=r?e.renderer.setAttribute(a,t,r):e.renderer.removeAttribute(a,t)}else e.renderer.setValue(a,`bindings=${JSON.stringify(n,null,2)}`)}}var o,i}function a_(e,t,n,r){Cv(e,t,n,...r)}function c_(e,t){for(let n=t;n<e.def.nodes.length;n++){const t=e.def.nodes[n];if(16384&t.flags&&t.bindings&&t.bindings.length)return n}return null}function l_(e,t){for(let n=t;n<e.def.nodes.length;n++){const t=e.def.nodes[n];if(3&t.flags&&t.bindings&&t.bindings.length)return n}return null}class u_{constructor(e,t){this.view=e,this.nodeIndex=t,null==t&&(this.nodeIndex=t=0),this.nodeDef=e.def.nodes[t];let n=this.nodeDef,r=e;for(;n&&0==(1&n.flags);)n=n.parent;if(!n)for(;!n&&r;)n=Dd(r),r=r.parent;this.elDef=n,this.elView=r}get elOrCompView(){return cd(this.elView,this.elDef.nodeIndex).componentView||this.view}get injector(){return vf(this.elView,this.elDef)}get component(){return this.elOrCompView.component}get context(){return this.elOrCompView.context}get providerTokens(){const e=[];if(this.elDef)for(let t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){const n=this.elView.def.nodes[t];20224&n.flags&&e.push(n.provider.token),t+=n.childCount}return e}get references(){const e={};if(this.elDef){h_(this.elView,this.elDef,e);for(let t=this.elDef.nodeIndex+1;t<=this.elDef.nodeIndex+this.elDef.childCount;t++){const n=this.elView.def.nodes[t];20224&n.flags&&h_(this.elView,n,e),t+=n.childCount}}return e}get componentRenderElement(){const e=function(e){for(;e&&!Id(e);)e=e.parent;return e.parent?cd(e.parent,Dd(e).nodeIndex):null}(this.elOrCompView);return e?e.renderElement:void 0}get renderNode(){return 2&this.nodeDef.flags?Od(this.view,this.nodeDef):Od(this.elView,this.elDef)}logError(e,...t){let n,r;2&this.nodeDef.flags?(n=this.view.def,r=this.nodeDef.nodeIndex):(n=this.elView.def,r=this.elDef.nodeIndex);const o=function(e,t){let n=-1;for(let r=0;r<=t;r++)3&e.nodes[r].flags&&n++;return n}(n,r);let i=-1;n.factory(()=>(i++,i===o?e.error.bind(e,...t):pd)),i<o&&(e.error("Illegal state: the ViewDefinitionFactory did not call the logger!"),e.error(...t))}}function h_(e,t,n){for(let r in t.references)n[r]=ev(e,t,t.references[r])}function d_(e,t,n,r){const o=Xv,i=e_,s=t_;try{Xv=e;const a=t.apply(n,r);return e_=i,t_=s,Xv=o,a}catch(a){if(tr(a)||!e_)throw a;throw function(e,t){return e instanceof Error||(e=new Error(e.toString())),rd(e,t),e}(a,f_())}}function f_(){return e_?new u_(e_,t_):null}class p_{constructor(e){this.delegate=e}createRenderer(e,t){return new g_(this.delegate.createRenderer(e,t))}begin(){this.delegate.begin&&this.delegate.begin()}end(){this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.delegate.whenRenderingDone?this.delegate.whenRenderingDone():Promise.resolve(null)}}class g_{constructor(e){this.delegate=e,this.debugContextFactory=f_,this.data=this.delegate.data}createDebugContext(e){return this.debugContextFactory(e)}destroyNode(e){const t=Ab(e);!function(e){Ob.delete(e.nativeNode)}(t),t instanceof yb&&(t.listeners.length=0),this.delegate.destroyNode&&this.delegate.destroyNode(e)}destroy(){this.delegate.destroy()}createElement(e,t){const n=this.delegate.createElement(e,t),r=this.createDebugContext(n);if(r){const t=new bb(n,null,r);t.name=e,Tb(t)}return n}createComment(e){const t=this.delegate.createComment(e),n=this.createDebugContext(t);return n&&Tb(new yb(t,null,n)),t}createText(e){const t=this.delegate.createText(e),n=this.createDebugContext(t);return n&&Tb(new yb(t,null,n)),t}appendChild(e,t){const n=Ab(e),r=Ab(t);n&&r&&n instanceof bb&&n.addChild(r),this.delegate.appendChild(e,t)}insertBefore(e,t,n){const r=Ab(e),o=Ab(t),i=Ab(n);r&&o&&r instanceof bb&&r.insertBefore(i,o),this.delegate.insertBefore(e,t,n)}removeChild(e,t){const n=Ab(e),r=Ab(t);n&&r&&n instanceof bb&&n.removeChild(r),this.delegate.removeChild(e,t)}selectRootElement(e,t){const n=this.delegate.selectRootElement(e,t),r=f_();return r&&Tb(new bb(n,null,r)),n}setAttribute(e,t,n,r){const o=Ab(e);o&&o instanceof bb&&(o.attributes[r?r+":"+t:t]=n),this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){const r=Ab(e);r&&r instanceof bb&&(r.attributes[n?n+":"+t:t]=null),this.delegate.removeAttribute(e,t,n)}addClass(e,t){const n=Ab(e);n&&n instanceof bb&&(n.classes[t]=!0),this.delegate.addClass(e,t)}removeClass(e,t){const n=Ab(e);n&&n instanceof bb&&(n.classes[t]=!1),this.delegate.removeClass(e,t)}setStyle(e,t,n,r){const o=Ab(e);o&&o instanceof bb&&(o.styles[t]=n),this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){const r=Ab(e);r&&r instanceof bb&&(r.styles[t]=null),this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){const r=Ab(e);r&&r instanceof bb&&(r.properties[t]=n),this.delegate.setProperty(e,t,n)}listen(e,t,n){if("string"!=typeof e){const r=Ab(e);r&&r.listeners.push(new mb(t,n))}return this.delegate.listen(e,t,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setValue(e,t){return this.delegate.setValue(e,t)}}function m_(e){return Tv(),fd.overrideProvider(e)}function y_(e,t){return Tv(),fd.overrideComponentView(e,t)}function b_(){return Tv(),fd.clearOverrides()}function v_(e,t,n){return new __(e,t,n)}class __ extends De{constructor(e,t,n){super(),this.moduleType=e,this._bootstrapComponents=t,this._ngModuleDefFactory=n}create(e){Tv();const t=function(e){const t=Array.from(e.providers),n=Array.from(e.modules),r={};for(const o in e.providersByKey)r[o]=e.providersByKey[o];return{factory:e.factory,scope:e.scope,providers:t,modules:n,providersByKey:r}}(Fd(this._ngModuleDefFactory));return fd.createNgModuleRef(this.moduleType,e||aa.NULL,this._bootstrapComponents,t)}}},FU6l:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))()},GoAz:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("IdLP"),o=n("1MAX"),i=n("bwdy"),s=n("qEfY"),a=n("czMQ"),c=n("sWLk"),l=n("/vgl"),u=n("eY+9");function h(e,t){return t?function(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[s.a]}(e))return function(e,t){return new r.a(n=>{const r=new i.a;return r.add(t.schedule(()=>{const o=e[s.a]();r.add(o.subscribe({next(e){r.add(t.schedule(()=>n.next(e)))},error(e){r.add(t.schedule(()=>n.error(e)))},complete(){r.add(t.schedule(()=>n.complete()))}}))})),r})}(e,t);if(Object(l.a)(e))return function(e,t){return new r.a(n=>{const r=new i.a;return r.add(t.schedule(()=>e.then(e=>{r.add(t.schedule(()=>{n.next(e),r.add(t.schedule(()=>n.complete()))}))},e=>{r.add(t.schedule(()=>n.error(e)))}))),r})}(e,t);if(Object(u.a)(e))return Object(a.a)(e,t);if(function(e){return e&&"function"==typeof e[c.a]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new r.a(n=>{const r=new i.a;let o;return r.add(()=>{o&&"function"==typeof o.return&&o.return()}),r.add(t.schedule(()=>{o=e[c.a](),r.add(t.schedule((function(){if(n.closed)return;let e,t;try{const n=o.next();e=n.value,t=n.done}catch(r){return void n.error(r)}t?n.complete():(n.next(e),this.schedule())})))})),r})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}(e,t):e instanceof r.a?e:new r.a(Object(o.a)(e))}},HgnN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));let r=!1;const o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},IJgj:function(e,t,n){"use strict";function r(e){return"function"==typeof e}n.d(t,"a",(function(){return r}))},IdLP:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("5uGe"),o=n("25CY"),i=n("rWo0"),s=n("qEfY"),a=n("Ti3e"),c=n("HgnN");let l=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const n=new e;return n.source=this,n.operator=t,n}subscribe(e,t,n){const{operator:s}=this,a=function(e,t,n){if(e){if(e instanceof r.a)return e;if(e[o.a])return e[o.a]()}return e||t||n?new r.a(e,t,n):new r.a(i.a)}(e,t,n);if(a.add(s?s.call(a,this.source):this.source||c.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),c.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a}_trySubscribe(e){try{return this._subscribe(e)}catch(t){c.a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){const{closed:t,destination:n,isStopped:o}=e;if(t||o)return!1;e=n&&n instanceof r.a?n:null}return!0}(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=u(t))((t,n)=>{let r;r=this.subscribe(t=>{try{e(t)}catch(o){n(o),r&&r.unsubscribe()}},n,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[s.a](){return this}pipe(...e){return 0===e.length?this:Object(a.b)(e)(this)}toPromise(e){return new(e=u(e))((e,t)=>{let n;this.subscribe(e=>n=e,e=>t(e),()=>e(n))})}}return e.create=t=>new e(t),e})();function u(e){if(e||(e=c.a.Promise||Promise),!e)throw new Error("no Promise impl found");return e}},MiDb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})()},ODPb:function(e,t,n){"use strict";n.r(t),n.d(t,"ScreenComponent",(function(){return a})),n.d(t,"ScreenModule",(function(){return l}));var r=n("2kYt"),o=n("AEcS"),i=n("EM62");class s{getConfiguration(){return{plugin:{id:"ScreenPlugin","display-name":"Dont code test Plugin adding screen types",version:"1.0.0"},"schema-updates":[{id:"screen-list",description:"A screen displaying a list of items",changes:[{location:{parent:"#/definitions/screen",id:"type",after:"name"},add:{enum:["list"]},props:{entity:{type:"string",format:"#/creation/entities"}},replace:!0},{location:{parent:"/definitions/screen",id:"type",after:"name"},add:{enum:["freeform"]},props:{},replace:!1}]}],"preview-handlers":[{location:{parent:o.DontCodeModel.APP_SCREENS,id:o.DontCodeModel.APP_SCREENS_NAME_NODE},class:{name:"ScreenComponent",source:"screen"}}]}}}let a=(()=>{let e=class{constructor(){}ngOnInit(){}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["plugins-screen"]],decls:2,vars:0,template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275text"](1,"screen from Plugin Works!"),i["\u0275\u0275elementEnd"]())},styles:[""]}),e})();var c=o.DontCode.dtcde;let l=(()=>{let e=class{constructor(){console.log("Hey I'm there"),c.registerPlugin(new s)}};return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.CommonModule]]}),e})()},Ti3e:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("kgbq");function o(...e){return i(e)}function i(e){return e?1===e.length?e[0]:function(t){return e.reduce((e,t)=>t(e),t)}:r.a}},X0qr:function(e,t,n){"use strict";function r(e){return null!==e&&"object"==typeof e}n.d(t,"a",(function(){return r}))},YIYF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("ZtqZ"),o=n("fY+t"),i=n("42at");t.DontCodeCore=class{constructor(){this.schemaManager=new r.DontCodeSchemaManager,this.pluginManager=new o.DontCodePluginManager,this.previewManager=new i.DontCodePreviewManager}registerPlugin(e){this.pluginManager.registerPlugin(e,this.schemaManager,this.previewManager)}getSchemaUri(){return"schemas/v1/dont-code-schema.json"}getSchemaManager(){return this.schemaManager}getPreviewManager(){return this.previewManager}}},YtkY:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new i(e,t))}}class i{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new s(e,this.project,this.thisArg))}}class s extends r.a{constructor(e,t,n){super(e),this.project=t,this.count=0,this.thisArg=n||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}},ZTXN:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return h}));var r=n("IdLP"),o=n("5uGe"),i=n("bwdy"),s=n("MiDb"),a=n("yTkW"),c=n("25CY");class l extends o.a{constructor(e){super(e),this.destination=e}}let u=(()=>{class e extends r.a{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[c.a](){return new l(this)}lift(e){const t=new h(this,this);return t.operator=e,t}next(e){if(this.closed)throw new s.a;if(!this.isStopped){const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].next(e)}}error(e){if(this.closed)throw new s.a;this.hasError=!0,this.thrownError=e,this.isStopped=!0;const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].error(e);this.observers.length=0}complete(){if(this.closed)throw new s.a;this.isStopped=!0;const{observers:e}=this,t=e.length,n=e.slice();for(let r=0;r<t;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new s.a;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new s.a;return this.hasError?(e.error(this.thrownError),i.a.EMPTY):this.isStopped?(e.complete(),i.a.EMPTY):(this.observers.push(e),new a.a(this,e))}asObservable(){const e=new r.a;return e.source=this,e}}return e.create=(e,t)=>new h(e,t),e})();class h extends u{constructor(e,t){super(),this.destination=e,this.source=t}next(e){const{destination:t}=this;t&&t.next&&t.next(e)}error(e){const{destination:t}=this;t&&t.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:t}=this;return t?this.source.subscribe(e):i.a.EMPTY}}},ZtqZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("uq2N"),o=n("umRR");t.DontCodeSchemaManager=class{constructor(){this.readSchema=o.DontCodeSchema.defaultv1,this.currentSchema=this.convertSchemaToMap(this.readSchema)}getSchema(){return this.currentSchema}convertSchemaToMap(e){return new r.DontCodeSchemaRoot(e)}registerChanges(e){e["schema-updates"]&&e["schema-updates"].forEach(e=>{e.changes.forEach(e=>{const t=this.locateItem(e.location.parent);if(!t)throw"Cannot find parent element: "+e.location.parent;t.upsertWith(e)})})}locateItem(e){const t=e.split("/");var n=this.currentSchema;return t.forEach(t=>{if(!n)return console.error("Could not find subItem "+t+" of "+e),n;t&&t.length>0&&"#"!==t&&(n=n.getChild(t))}),n}}},"a/xz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("YIYF");(t.DontCode||(t.DontCode={})).dtcde=new r.DontCodeCore},bwdy:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("FU6l"),o=n("X0qr"),i=n("IJgj");const s=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})();let a=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_unsubscribe:a,_subscriptions:l}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(let e=0;e<n.length;++e)n[e].remove(this);if(Object(i.a)(a))try{a.call(this)}catch(u){t=u instanceof s?c(u.errors):[u]}if(Object(r.a)(l)){let e=-1,n=l.length;for(;++e<n;){const n=l[e];if(Object(o.a)(n))try{n.unsubscribe()}catch(u){t=t||[],u instanceof s?t=t.concat(c(u.errors)):t.push(u)}}}if(t)throw new s(t)}add(t){let n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){const t=n;n=new e,n._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof e){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n}remove(e){const t=this._subscriptions;if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}var t;return e.EMPTY=((t=new e).closed=!0,t),e})();function c(e){return e.reduce((e,t)=>e.concat(t instanceof s?t.errors:t),[])}},cJ9h:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("mW0F"),o=n("pBDD"),i=n("r9RI"),s=n("YtkY"),a=n("GoAz");function c(e,t,n=Number.POSITIVE_INFINITY){return"function"==typeof t?r=>r.pipe(c((n,r)=>Object(a.a)(e(n,r)).pipe(Object(s.a)((e,o)=>t(n,e,r,o))),n)):("number"==typeof t&&(n=t),t=>t.lift(new l(e,n)))}class l{constructor(e,t=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=t}call(e,t){return t.subscribe(new u(e,this.project,this.concurrent))}}class u extends o.a{constructor(e,t,n=Number.POSITIVE_INFINITY){super(e),this.project=t,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(t,e,n)}_innerSub(e,t,n){const o=new i.a(this,t,n),s=this.destination;s.add(o);const a=Object(r.a)(this,e,void 0,void 0,o);a!==o&&s.add(a)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e,t,n,r,o){this.destination.next(t)}notifyComplete(e){const t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}},ckkg:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IdLP"),o=n("dUuy"),i=n("czMQ");function s(e,t){return t?Object(i.a)(e,t):new r.a(Object(o.a)(e))}},czMQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("IdLP"),o=n("bwdy");function i(e,t){return new r.a(n=>{const r=new o.a;let i=0;return r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r})}},dUuy:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>t=>{for(let n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}},"eY+9":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>e&&"number"==typeof e.length&&"function"!=typeof e},"fY+t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePluginManager=class{constructor(){this.plugins=new Map}registerPlugin(e,t,n){const r=e.getConfiguration();this.plugins.set(r.plugin.id+"-v"+r.plugin.version,e),t.registerChanges(r),n.registerHandlers(r)}}},g6G6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("IdLP"),o=n("gBlb"),i=n("3lSR"),s=n("ckkg");function a(...e){let t=Number.POSITIVE_INFINITY,n=null,a=e[e.length-1];return Object(o.a)(a)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof a&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof r.a?e[0]:Object(i.a)(t)(Object(s.a)(e,n))}},gBlb:function(e,t,n){"use strict";function r(e){return e&&"function"==typeof e.schedule}n.d(t,"a",(function(){return r}))},"i9P/":function(e,t,n){"use strict";function r(e){setTimeout(()=>{throw e},0)}n.d(t,"a",(function(){return r}))},kgbq:function(e,t,n){"use strict";function r(){}n.d(t,"a",(function(){return r}))},mW0F:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("r9RI"),o=n("1MAX"),i=n("IdLP");function s(e,t,n,s,a=new r.a(e,n,s)){if(!a.closed)return t instanceof i.a?t.subscribe(a):Object(o.a)(t)(a)}},o8N5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Change=class{constructor(e,t,n){this.type=e,this.position=t,this.value=n}},t.ChangeType=function(e){return e.ADD="ADD",e.UPDATE="UPDATE",e.DELETE="DELETE",e.RESET="RESET",e}(t.ChangeType||{})},pBDD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");class o extends r.a{notifyNext(e,t,n,r,o){this.destination.next(t)}notifyError(e,t){this.destination.error(e)}notifyComplete(e){this.destination.complete()}}},qEfY:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")()},r9RI:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");class o extends r.a{constructor(e,t,n){super(),this.parent=e,this.outerValue=t,this.outerIndex=n,this.index=0}_next(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}_error(e){this.parent.notifyError(e,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}},rWo0:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("HgnN"),o=n("i9P/");const i={closed:!0,next(e){},error(e){if(r.a.useDeprecatedSynchronousErrorHandling)throw e;Object(o.a)(e)},complete(){}}},sWLk:function(e,t,n){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(t,"a",(function(){return o}));const o=r()},umRR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("3/dt");class o{}t.DontCodeSchema=o,o.ROOT="/properties/"+r.DontCodeModel.ROOT,o.defaultv1={$id:"http://dont-code.net/dont-code-schema/v1",$schema:"http://json-schema.org/draft-07/schema#",description:"JSON Schema v1 for dont-code",type:"object",required:["creation"],properties:{creation:{type:"object",properties:{type:{enum:["application"]},name:{type:"string"},entities:{type:"array",items:{$ref:"#/definitions/entity"}},screens:{type:"array",items:{$ref:"#/definitions/screen"}}},additionalProperties:!1}},definitions:{entity:{type:"object",properties:{name:{type:"string"},fields:{type:"array",items:{$ref:"#/definitions/field"}}},additionalProperties:!1},field:{type:"object",properties:{name:{type:"string"},type:{enum:["string","number","boolean"]}},additionalProperties:!1},screen:{type:"object",properties:{name:{type:"string"},layout:{enum:["flow","grid"]},components:{type:"array",items:{$ref:"#/definitions/component"}}},additionalProperties:!1},component:{type:"object",properties:{type:{enum:["list","edit","view"]},entity:{type:"string",format:"#/creation/entities"}},additionalProperties:!1}}}},uq2N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e,t){this.array=!1,this.parent=e,this.relativeId=t}isArray(){return this.array}setArray(e){this.array=e}isEnum(){return!1}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}static generateItem(e,t,n){let r,c=Array.isArray(e);if(c)return console.error("arrays are not supported",e),e;if(c=!1,e.type)switch(e.type){case"object":r=new o(e,t,n);break;case"array":r=this.generateItem(e.items,t,n),c=!0;break;default:r=new s(e,t,n)}else if(e.enum)r=new i(e,t,n);else{if(!e.$ref)return e;r=new a(e,t,n)}return r.setArray(c),r}static isObject(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}static goto(e,t){let n=e;return t.split("/").forEach(r=>{"#"!==r&&""!=r&&(n=n.getChild(r)),n||console.error("Cannot find "+r+" of "+t+" in the following item ",e)}),n}upsertWith(e){return!1}getParent(){return this.parent}getChild(e){}getChildren(){return(new Map).entries()}updateWith(e){}getProperties(e){}hasProperties(e){return!1}getRelativeId(){return this.relativeId}setRelativeId(e){this.relativeId=e}}t.AbstractSchemaItem=r;class o extends r{constructor(e,t,n){super(n,t),this.children=new Map,e&&this.readJson(e)}readJson(e){const t=e.properties;if(t)for(var n in t)this.children.set(n,r.generateItem(t[n],n,this));const o=e.definitions;if(o){const e=r.generateItem(o,"definitions",this);this.children.set("definitions",e)}}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!1}upsertWith(e){let t=this.getChild(e.location.id);if(!t)if(t=r.generateItem(e.add,e.location.id,this),e.location.after){let n=new Map;this.children.forEach((r,o)=>{n.set(o,r),o===e.location.after&&n.set(e.location.id,t)}),this.children=n}else this.children.set(e.location.id,t);return t.updateWith(e),!0}updateWith(e){super.updateWith(e)}getChild(e){return e?this.children.get(e):void 0}getChildren(){return this.children.entries()}}t.DontCodeSchemaObject=o,t.DontCodeSchemaRoot=class extends o{constructor(e){super(e,null)}readJson(e){super.readJson(e);const t=e.definitions;t&&this.children.set("definitions",new o({properties:t},"definitions",this))}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!0}};class i extends r{constructor(e,t,n){super(n,t),this.values=new Array,this.properties=new Map,this.values.push(...e.enum)}isEnum(){return!0}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}getValues(){return this.values}updateWith(e){super.updateWith(e),e.add.enum.forEach(t=>{if(-1==this.values.indexOf(t)&&this.values.push(t),e.props){const n=new c(e,this.relativeId+"="+t,this);n.isEmpty()||this.properties.set(t,n)}})}getProperties(e){return this.properties.get(e)}hasProperties(e){return this.properties.has(e)}}t.DontCodeSchemaEnum=i;class s extends r{constructor(e,t,n){super(n,t),this.type=e.type}isValue(){return!0}getType(){return this.type}}t.DontCodeSchemaValue=s;class a extends r{constructor(e,t,n){super(n,t),this.resolvedRef=new Map,this.ref=e.$ref}isReference(){return!0}getReference(){return this.ref}resolveReference(e){this.resolvedRef.set("",e)}getChildren(){return this.resolvedRef.entries()}}t.DontCodeSchemaRef=a;class c extends o{constructor(e,t,n){super({type:"object",properties:e.props},t,n),this.replace=e.replace,this.posAfter=e.location.after}isEmpty(){return 0==this.children.size}isReplace(){return this.replace}getPosAfter(){return this.posAfter}}t.DontCodeSchemaProperty=c},yTkW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("bwdy");class o extends r.a{constructor(e,t){super(),this.subject=e,this.subscriber=t,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,t=e.observers;if(this.subject=null,!t||0===t.length||e.isStopped||e.closed)return;const n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("EM62");"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;var o=n("2kYt");class i extends o["\u0275DomAdapter"]{constructor(){super()}supportsDOMEvents(){return!0}}class s extends i{static makeCurrent(){Object(o["\u0275setRootDomAdapter"])(new s)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=c||(c=document.querySelector("base"),c)?c.getAttribute("href"):null;return null==t?null:(n=t,a||(a=document.createElement("a")),a.setAttribute("href",n),"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname);var n}resetBaseElement(){c=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){return Object(o["\u0275parseCookieValue"])(document.cookie,e)}}let a,c=null;const l=new r.InjectionToken("TRANSITION_ID"),u=[{provide:r.APP_INITIALIZER,useFactory:function(e,t,n){return()=>{n.get(r.ApplicationInitStatus).donePromise.then(()=>{const n=Object(o["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[l,o.DOCUMENT,r.Injector],multi:!0}];class h{static init(){Object(r.setTestabilityGetter)(new h)}addToWindow(e){r["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},r["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),r["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),r["\u0275global"].frameworkStabilizers||(r["\u0275global"].frameworkStabilizers=[]),r["\u0275global"].frameworkStabilizers.push(e=>{const t=r["\u0275global"].getAllAngularTestabilities();let n=t.length,o=!1;const i=function(t){o=o||t,n--,0==n&&e(o)};t.forEach((function(e){e.whenStable(i)}))})}findTestabilityInTree(e,t,n){if(null==t)return null;const r=e.getTestability(t);return null!=r?r:n?Object(o["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}const d=new r.InjectionToken("EventManagerPlugins");let f=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](d),r["\u0275\u0275inject"](r.NgZone))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class p{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const r=Object(o["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,n)}}let g=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),m=(()=>{class e extends g{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>Object(o["\u0275getDOM"])().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const y={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},b=/%COMP%/g;function v(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?v(e,o,n):(o=o.replace(b,e),n.push(o))}return n}function _(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let w=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new x(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case r.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new C(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case r.ViewEncapsulation.Native:case r.ViewEncapsulation.ShadowDom:return new E(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=v(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](f),r["\u0275\u0275inject"](m),r["\u0275\u0275inject"](r.APP_ID))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class x{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(y[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=y[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=y[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,o){o&r.RendererStyleFlags2.DashCase?e.style.setProperty(t,n,o&r.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&r.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,_(n)):this.eventManager.addEventListener(e,t,_(n))}}class C extends x{constructor(e,t,n,r){super(e),this.component=n;const o=v(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr="_ngcontent-%COMP%".replace(b,r+"-"+n.id),this.hostAttr=function(e){return"_nghost-%COMP%".replace(b,e)}(r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class E extends x{constructor(e,t,n,o){super(e),this.sharedStylesHost=t,this.hostEl=n,this.component=o,this.shadowRoot=o.encapsulation===r.ViewEncapsulation.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const i=v(o.id,o.styles,[]);for(let r=0;r<i.length;r++){const e=document.createElement("style");e.textContent=i[r],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let S=(()=>{class e extends p{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const k=["alt","control","meta","shift"],D={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},O={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},I={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let A=(()=>{class e extends p{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,r){const i=e.parseEventName(n),s=e.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Object(o["\u0275getDOM"])().onAndCancel(t,i.domEventName,s))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let i="";if(k.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),i+=e+".")}),i+=o,0!=n.length||0===o.length)return null;const s={};return s.domEventName=r,s.fullKey=i,s}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&O.hasOwnProperty(t)&&(t=O[t]))}return D[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),k.forEach(r=>{r!=n&&(0,I[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const P=[{provide:r.PLATFORM_ID,useValue:o["\u0275PLATFORM_BROWSER_ID"]},{provide:r.PLATFORM_INITIALIZER,useValue:function(){s.makeCurrent(),h.init()},multi:!0},{provide:o.DOCUMENT,useFactory:function(){return Object(r["\u0275setDocument"])(document),document},deps:[]}],j=Object(r.createPlatformFactory)(r.platformCore,"browser",P),T=[[],{provide:r["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:r.ErrorHandler,useFactory:function(){return new r.ErrorHandler},deps:[]},{provide:d,useClass:S,multi:!0,deps:[o.DOCUMENT,r.NgZone,r.PLATFORM_ID]},{provide:d,useClass:A,multi:!0,deps:[o.DOCUMENT]},[],{provide:w,useClass:w,deps:[f,m,r.APP_ID]},{provide:r.RendererFactory2,useExisting:w},{provide:g,useExisting:m},{provide:m,useClass:m,deps:[o.DOCUMENT]},{provide:r.Testability,useClass:r.Testability,deps:[r.NgZone]},{provide:f,useClass:f,deps:[d,r.NgZone]},[]];let N=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:r.APP_ID,useValue:t.appId},{provide:l,useExisting:r.APP_ID},u]}}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](e,12))},providers:T,imports:[o.CommonModule,r.ApplicationModule]}),e})();"undefined"!=typeof window&&window;var R=n("ZTXN"),F=n("gBlb"),M=n("FU6l"),L=n("pBDD"),$=n("mW0F"),V=n("ckkg");const B={};function U(...e){let t=null,n=null;return Object(F.a)(e[e.length-1])&&(n=e.pop()),"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&Object(M.a)(e[0])&&(e=e[0]),Object(V.a)(e,n).lift(new H(t))}class H{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new z(e,this.resultSelector))}}class z extends L.a{constructor(e,t){super(e),this.resultSelector=t,this.active=0,this.values=[],this.observables=[]}_next(e){this.values.push(B),this.observables.push(e)}_complete(){const e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(let n=0;n<t;n++){const t=e[n];this.add(Object($.a)(this,t,t,n))}}}notifyComplete(e){0==(this.active-=1)&&this.destination.complete()}notifyNext(e,t,n,r,o){const i=this.values,s=this.toRespond?i[n]===B?--this.toRespond:this.toRespond:0;i[n]=t,0===s&&(this.resultSelector?this._tryResultSelector(i):this.destination.next(i.slice()))}_tryResultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}function q(e){return t=>t.lift(new W(e))}class W{constructor(e){this.notifier=e}call(e,t){const n=new Q(e),r=Object($.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n}}class Q extends L.a{constructor(e){super(e),this.seenValue=!1}notifyNext(e,t,n,r,o){this.seenValue=!0,this.complete()}notifyComplete(){}}var K=n("YtkY"),G=n("bwdy");class Z extends G.a{constructor(e,t){super()}schedule(e,t=0){return this}}class Y extends Z{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,r=void 0;try{this.work(e)}catch(o){n=!0,r=!!o&&o||new Error(o)}if(n)return this.unsubscribe(),r}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}class J extends Y{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(e,t,n):e.flush(this)}}let X=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})();class ee extends X{constructor(e,t=X.now){super(e,()=>ee.delegate&&ee.delegate!==this?ee.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return ee.delegate&&ee.delegate!==this?ee.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}class te extends ee{}const ne=new te(J);var re=n("5uGe"),oe=n("IdLP");const ie=new oe.a(e=>e.complete());function se(e){return e?function(e){return new oe.a(t=>e.schedule(()=>t.complete()))}(e):ie}var ae=n("czMQ");function ce(...e){let t=e[e.length-1];return Object(F.a)(t)?(e.pop(),Object(ae.a)(e,t)):Object(V.a)(e)}let le=(()=>{class e{constructor(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}accept(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}toObservable(){switch(this.kind){case"N":return ce(this.value);case"E":return e=this.error,new oe.a(t=>t.error(e));case"C":return se()}var e;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class ue extends re.a{constructor(e,t,n=0){super(e),this.scheduler=t,this.delay=n}static dispatch(e){const{notification:t,destination:n}=e;t.observe(n),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(ue.dispatch,this.delay,new he(e,this.destination)))}_next(e){this.scheduleMessage(le.createNext(e))}_error(e){this.scheduleMessage(le.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(le.createComplete()),this.unsubscribe()}}class he{constructor(e,t){this.notification=e,this.destination=t}}var de=n("MiDb"),fe=n("yTkW");class pe extends R.b{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new ge(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,n=t?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,o=n.length;let i;if(this.closed)throw new de.a;if(this.isStopped||this.hasError?i=G.a.EMPTY:(this.observers.push(e),i=new fe.a(this,e)),r&&e.add(e=new ue(e,r)),t)for(let s=0;s<o&&!e.closed;s++)e.next(n[s]);else for(let s=0;s<o&&!e.closed;s++)e.next(n[s].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),i}_getNow(){return(this.scheduler||ne).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,n=this._windowTime,r=this._events,o=r.length;let i=0;for(;i<o&&!(e-r[i].time<n);)i++;return o>t&&(i=Math.max(i,o-t)),i>0&&r.splice(0,i),r}}class ge{constructor(e,t){this.time=e,this.value=t}}class me{constructor(e,t,n){this.type=e,this.position=t,this.value=n}}var ye=function(e){return e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.DELETE=2]="DELETE",e}({});function be(e,t){return function(n){return n.lift(new ve(e,t))}}class ve{constructor(e,t){this.predicate=e,this.thisArg=t}call(e,t){return t.subscribe(new _e(e,this.predicate,this.thisArg))}}class _e extends re.a{constructor(e,t,n){super(e),this.predicate=t,this.thisArg=n,this.count=0}_next(e){let t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}t&&this.destination.next(e)}}var we=n("AEcS");const xe={url:"",deserializer:e=>JSON.parse(e.data),serializer:e=>JSON.stringify(e)};class Ce extends R.a{constructor(e,t){if(super(),e instanceof oe.a)this.destination=t,this.source=e;else{const t=this._config=Object.assign({},xe);if(this._output=new R.b,"string"==typeof e)t.url=e;else for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(!t.WebSocketCtor&&WebSocket)t.WebSocketCtor=WebSocket;else if(!t.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new pe}}lift(e){const t=new Ce(this._config,this.destination);return t.operator=e,t.source=this,t}_resetState(){this._socket=null,this.source||(this.destination=new pe),this._output=new R.b}multiplex(e,t,n){const r=this;return new oe.a(o=>{try{r.next(e())}catch(s){o.error(s)}const i=r.subscribe(e=>{try{n(e)&&o.next(e)}catch(s){o.error(s)}},e=>o.error(e),()=>o.complete());return()=>{try{r.next(t())}catch(s){o.error(s)}i.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:e,protocol:t,url:n,binaryType:r}=this._config,o=this._output;let i=null;try{i=t?new e(n,t):new e(n),this._socket=i,r&&(this._socket.binaryType=r)}catch(a){return void o.error(a)}const s=new G.a(()=>{this._socket=null,i&&1===i.readyState&&i.close()});i.onopen=e=>{const{_socket:t}=this;if(!t)return i.close(),void this._resetState();const{openObserver:n}=this._config;n&&n.next(e);const r=this.destination;this.destination=re.a.create(t=>{if(1===i.readyState)try{const{serializer:e}=this._config;i.send(e(t))}catch(e){this.destination.error(e)}},e=>{const{closingObserver:t}=this._config;t&&t.next(void 0),e&&e.code?i.close(e.code,e.reason):o.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:e}=this._config;e&&e.next(void 0),i.close(),this._resetState()}),r&&r instanceof pe&&s.add(r.subscribe(this.destination))},i.onerror=e=>{this._resetState(),o.error(e)},i.onclose=e=>{this._resetState();const{closeObserver:t}=this._config;t&&t.next(e),e.wasClean?o.complete():o.error(e)},i.onmessage=e=>{try{const{deserializer:t}=this._config;o.next(t(e))}catch(t){o.error(t)}}}_subscribe(e){const{source:t}=this;return t?t.subscribe(e):(this._socket||this._connectSocket(),this._output.subscribe(e),e.add(()=>{const{_socket:e}=this;0===this._output.observers.length&&(e&&1===e.readyState&&e.close(),this._resetState())}),e)}unsubscribe(){const{_socket:e}=this;e&&1===e.readyState&&e.close(),this._resetState(),super.unsubscribe()}}let Ee=(()=>{class e{constructor(){this.listOfChanges=[],this.listOfEntities=new Map,this.changeEmitter=new R.b,this.connectionStatus=new pe(1),this.previewServiceWebSocket=new Ce("wss://preview-services-demo.apps.us-west-1.starter.openshift-online.com/preview"),this.connectionStatus.next("connected"),this.previewServiceWebSocket.subscribe(e=>{this.listOfChanges.push(e),this.changeEmitter.next(e)},e=>{this.connectionStatus.next("ERROR:"+e)},()=>{this.connectionStatus.next("closed")})}getListOfChanges(){return this.listOfChanges}getChangeEvents(){return this.changeEmitter}getConnectionStatus(){return this.connectionStatus}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Se=(()=>{class e{constructor(e){this.changeListener=e,this.receivedCommands=new pe,this.receivedCommands.next(new me(ye.ADD,we.DontCodeModel.APP_NAME,"New Name")),e.getChangeEvents().subscribe(e=>{console.log("Received Change ",e),this.receivedCommands.next(new me(ye.UPDATE,e.position,e.value))})}pushCommand(e){this.receivedCommands.next(e)}receiveCommands(e,t){return e?this.receivedCommands.pipe(be(n=>{if(n.position.startsWith(e)){if(t){const r=n.position.indexOf("/",e.length+1);return!(-1==r||!n.position.startsWith(t,r+1))}return!0}return!1})):this.receivedCommands}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](Ee))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class ke extends R.b{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return t&&!t.closed&&e.next(this._value),t}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new de.a;return this._value}next(e){super.next(this._value=e)}}var De=n("g6G6"),Oe=n("IJgj"),Ie=n("r9RI"),Ae=n("GoAz");function Pe(e,t){return"function"==typeof t?n=>n.pipe(Pe((n,r)=>Object(Ae.a)(e(n,r)).pipe(Object(K.a)((e,o)=>t(n,e,r,o))))):t=>t.lift(new je(e))}class je{constructor(e){this.project=e}call(e,t){return t.subscribe(new Te(e,this.project))}}class Te extends L.a{constructor(e,t){super(e),this.project=t,this.index=0}_next(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this._innerSub(t,e,n)}_innerSub(e,t,n){const r=this.innerSubscription;r&&r.unsubscribe();const o=new Ie.a(this,t,n),i=this.destination;i.add(o),this.innerSubscription=Object($.a)(this,e,void 0,void 0,o),this.innerSubscription!==o&&i.add(this.innerSubscription)}_complete(){const{innerSubscription:e}=this;e&&!e.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=null}notifyComplete(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&super._complete()}notifyNext(e,t,n,r,o){this.destination.next(t)}}const Ne=(()=>{function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e})();function Re(e){return t=>0===e?se():t.lift(new Fe(e))}class Fe{constructor(e){if(this.total=e,this.total<0)throw new Ne}call(e,t){return t.subscribe(new Me(e,this.total))}}class Me extends re.a{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){const t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))}}var Le=n("kgbq");function $e(e,t,n){return function(r){return r.lift(new Ve(e,t,n))}}class Ve{constructor(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}call(e,t){return t.subscribe(new Be(e,this.nextOrObserver,this.error,this.complete))}}class Be extends re.a{constructor(e,t,n,r){super(e),this._tapNext=Le.a,this._tapError=Le.a,this._tapComplete=Le.a,this._tapError=n||Le.a,this._tapComplete=r||Le.a,Object(Oe.a)(t)?(this._context=this,this._tapNext=t):t&&(this._context=t,this._tapNext=t.next||Le.a,this._tapError=t.error||Le.a,this._tapComplete=t.complete||Le.a)}_next(e){try{this._tapNext.call(this._context,e)}catch(t){return void this.destination.error(t)}this.destination.next(e)}_error(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)}_complete(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()}}const Ue={provide:r.APP_BOOTSTRAP_LISTENER,useFactory:function(e,t){return()=>{if(Object(o.isPlatformBrowser)(t)){const t=Array.from(e.querySelectorAll(`[class*=${He}]`)),n=/\bflex-layout-.+?\b/g;t.forEach(e=>{e.classList.contains(`${He}ssr`)&&e.parentNode?e.parentNode.removeChild(e):e.className.replace(n,"")})}}},deps:[o.DOCUMENT,r.PLATFORM_ID],multi:!0},He="flex-layout-";let ze=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[Ue]}),e})();class qe{constructor(e=!1,t="all",n="",r="",o=0){this.matches=e,this.mediaQuery=t,this.mqAlias=n,this.suffix=r,this.priority=o,this.property=""}clone(){return new qe(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let We=(()=>{class e{constructor(){this.stylesheet=new Map}addStyleToElement(e,t,n){const r=this.stylesheet.get(e);r?r.set(t,n):this.stylesheet.set(e,new Map([[t,n]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(e,t){const n=this.stylesheet.get(e);let r="";if(n){const e=n.get(t);"number"!=typeof e&&"string"!=typeof e||(r=e+"")}return r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e},token:e,providedIn:"root"}),e})();const Qe={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},Ke=new r.InjectionToken("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>Qe}),Ge=new r.InjectionToken("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),Ze=new r.InjectionToken("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function Ye(e,t){return e=e?e.clone():new qe,t&&(e.mqAlias=t.alias,e.mediaQuery=t.mediaQuery,e.suffix=t.suffix,e.priority=t.priority),e}const Je=["row","column","row-reverse","column-reverse"];function Xe(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}let et=(()=>{class e{constructor(e,t,n,r){this.elementRef=e,this.styleBuilder=t,this.styler=n,this.marshal=r,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new R.b,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,this.marshal.activatedAlias)}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const n=t.split(".").slice(1).join(".");this.setValue(e[t].currentValue,n)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(e=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),e)}addStyles(e,t){const n=this.styleBuilder,r=n.shouldCache;let o=this.styleCache.get(e);o&&r||(o=n.buildStyles(e,t),r&&this.styleCache.set(e,o)),this.mru=Object.assign({},o),this.applyStyleToElement(o),n.sideEffect(e,o,t)}clearStyles(){Object.keys(this.mru).forEach(e=>{this.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(e,t=!1){if(e){const[n,r]=this.styler.getFlowDirection(e);if(!r&&t){const t=function(e){let[t,n,r]=function(e){e=e?e.toLowerCase():"";let[t,n,r]=e.split(" ");return Je.find(e=>e===t)||(t=Je[0]),"inline"===n&&(n="inline"!==r?r:"",r="inline"),[t,Xe(n),!!r]}(e);return function(e,t=null,n=!1){return{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}(t,n,r)}(n);this.styler.applyStyleToElements(t,[e])}return n.trim()}return"row"}hasWrap(e){return this.styler.hasWrap(e)}applyStyleToElement(e,t,n=this.nativeElement){this.styler.applyStyleToElement(n,e,t)}setValue(e,t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,t)}updateWithValue(e){this.currentValue!==e&&(this.addStyles(e),this.currentValue=e)}}return e.\u0275fac=function(e){r["\u0275\u0275invalidFactory"]()},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,features:[r["\u0275\u0275NgOnChangesFeature"]]}),e})();const tt=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.9px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.9px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.9px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.9px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.9px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.9px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.9px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.9px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.9px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],nt="(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)",rt="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)",ot="(orientation: portrait) and (min-width: 840px)",it="(orientation: landscape) and (min-width: 1280px)",st={HANDSET:"(orientation: portrait) and (max-width: 599.9px), (orientation: landscape) and (max-width: 959.9px)",TABLET:`${nt} , ${rt}`,WEB:`${ot}, ${it} `,HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599.9px)",TABLET_PORTRAIT:`${nt} `,WEB_PORTRAIT:`${ot}`,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.9px)",TABLET_LANDSCAPE:`${rt}`,WEB_LANDSCAPE:`${it}`},at=[{alias:"handset",priority:2e3,mediaQuery:st.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:st.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:st.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:st.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:st.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:st.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:st.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:st.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:st.WEB_PORTRAIT,overlapping:!0}],ct=/(\.|-|_)/g;function lt(e){let t=e.length>0?e.charAt(0):"",n=e.length>1?e.slice(1):"";return t.toUpperCase()+n}const ut=new r.InjectionToken("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const e=Object(r.inject)(Ze),t=Object(r.inject)(Ke),n=[].concat.apply([],(e||[]).map(e=>Array.isArray(e)?e:[e]));return function(e,t=[]){const n={};return e.forEach(e=>{n[e.alias]=e}),t.forEach(e=>{n[e.alias]?function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(let n of t)if(null!=n)for(let t in n)n.hasOwnProperty(t)&&(e[t]=n[t])}(n[e.alias],e):n[e.alias]=e}),(r=Object.keys(n).map(e=>n[e])).forEach(e=>{e.suffix||(e.suffix=e.alias.replace(ct,"|").split("|").map(lt).join(""),e.overlapping=!!e.overlapping)}),r;var r}((t.disableDefaultBps?[]:tt).concat(t.addOrientationBps?at:[]),n)}});function ht(e,t){return(t&&t.priority||0)-(e&&e.priority||0)}function dt(e,t){return(e.priority||0)-(t.priority||0)}let ft=(()=>{class e{constructor(e){this.findByMap=new Map,this.items=[...e].sort(dt)}findByAlias(e){return e?this.findWithPredicate(e,t=>t.alias==e):null}findByQuery(e){return this.findWithPredicate(e,t=>t.mediaQuery==e)}get overlappings(){return this.items.filter(e=>1==e.overlapping)}get aliases(){return this.items.map(e=>e.alias)}get suffixes(){return this.items.map(e=>e.suffix?e.suffix:"")}findWithPredicate(e,t){let n=this.findByMap.get(e);return n||(n=this.items.find(t)||null,this.findByMap.set(e,n)),n||null}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](ut))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(ut))},token:e,providedIn:"root"}),e})(),pt=(()=>{class e{constructor(e,t,n){this._zone=e,this._platformId=t,this._document=n,this.source=new ke(new qe(!0)),this.registry=new Map,this.pendingRemoveListenerFns=[],this._observable$=this.source.asObservable()}get activations(){const e=[];return this.registry.forEach((t,n)=>{t.matches&&e.push(n)}),e}isActive(e){const t=this.registry.get(e);return t?t.matches:this.registerQuery(e).some(e=>e.matches)}observe(e,t=!1){if(e&&e.length){const n=this._observable$.pipe(be(n=>!t||e.indexOf(n.mediaQuery)>-1)),r=new oe.a(t=>{const n=this.registerQuery(e);if(n.length){const e=n.pop();n.forEach(e=>{t.next(e)}),this.source.next(e)}t.complete()});return Object(De.a)(r,n)}return this._observable$}registerQuery(e){const t=Array.isArray(e)?e:[e],n=[];return function(e,t){const n=e.filter(e=>!gt[e]);if(n.length>0){const e=n.join(", ");try{const r=t.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(t.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${e} {.fx-query-test{ }}\n`)),t.head.appendChild(r),n.forEach(e=>gt[e]=r)}catch(r){console.error(r)}}}(t,this._document),t.forEach(e=>{const t=t=>{this._zone.run(()=>this.source.next(new qe(t.matches,e)))};let r=this.registry.get(e);r||(r=this.buildMQL(e),r.addListener(t),this.pendingRemoveListenerFns.push(()=>r.removeListener(t)),this.registry.set(e,r)),r.matches&&n.push(new qe(!0,e))}),n}ngOnDestroy(){let e;for(;e=this.pendingRemoveListenerFns.pop();)e()}buildMQL(e){return function(e,t){return t&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{},onchange:null,addEventListener(){},removeEventListener(){},dispatchEvent:()=>!1}}(e,Object(o.isPlatformBrowser)(this._platformId))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.NgZone),r["\u0275\u0275inject"](r.PLATFORM_ID),r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(r.NgZone),Object(r["\u0275\u0275inject"])(r.PLATFORM_ID),Object(r["\u0275\u0275inject"])(o.DOCUMENT))},token:e,providedIn:"root"}),e})();const gt={},mt={alias:"print",mediaQuery:"print",priority:1e3};let yt=(()=>{class e{constructor(e,t,n){this.breakpoints=e,this.layoutConfig=t,this._document=n,this.registeredBeforeAfterPrintHooks=!1,this.isPrintingBeforeAfterEvent=!1,this.beforePrintEventListeners=[],this.afterPrintEventListeners=[],this.isPrinting=!1,this.queue=new bt,this.deactivations=[]}withPrintQuery(e){return[...e,"print"]}isPrintEvent(e){return e.mediaQuery.startsWith("print")}get printAlias(){return this.layoutConfig.printWithBreakpoints||[]}get printBreakPoints(){return this.printAlias.map(e=>this.breakpoints.findByAlias(e)).filter(e=>null!==e)}getEventBreakpoints({mediaQuery:e}){const t=this.breakpoints.findByQuery(e);return(t?[...this.printBreakPoints,t]:this.printBreakPoints).sort(ht)}updateEvent(e){let t=this.breakpoints.findByQuery(e.mediaQuery);return this.isPrintEvent(e)&&(t=this.getEventBreakpoints(e)[0],e.mediaQuery=t?t.mediaQuery:""),Ye(e,t)}registerBeforeAfterPrintHooks(e){if(!this._document.defaultView||this.registeredBeforeAfterPrintHooks)return;this.registeredBeforeAfterPrintHooks=!0;const t=()=>{this.isPrinting||(this.isPrintingBeforeAfterEvent=!0,this.startPrinting(e,this.getEventBreakpoints(new qe(!0,"print"))),e.updateStyles())},n=()=>{this.isPrintingBeforeAfterEvent=!1,this.isPrinting&&(this.stopPrinting(e),e.updateStyles())};this._document.defaultView.addEventListener("beforeprint",t),this._document.defaultView.addEventListener("afterprint",n),this.beforePrintEventListeners.push(t),this.afterPrintEventListeners.push(n)}interceptEvents(e){return this.registerBeforeAfterPrintHooks(e),t=>{this.isPrintEvent(t)?t.matches&&!this.isPrinting?(this.startPrinting(e,this.getEventBreakpoints(t)),e.updateStyles()):t.matches||!this.isPrinting||this.isPrintingBeforeAfterEvent||(this.stopPrinting(e),e.updateStyles()):this.collectActivations(t)}}blockPropagation(){return e=>!(this.isPrinting||this.isPrintEvent(e))}startPrinting(e,t){this.isPrinting=!0,e.activatedBreakpoints=this.queue.addPrintBreakpoints(t)}stopPrinting(e){e.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}collectActivations(e){if(!this.isPrinting||this.isPrintingBeforeAfterEvent)if(e.matches)this.isPrintingBeforeAfterEvent||(this.deactivations=[]);else{const t=this.breakpoints.findByQuery(e.mediaQuery);t&&(this.deactivations.push(t),this.deactivations.sort(ht))}}ngOnDestroy(){this.beforePrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("beforeprint",e)),this.afterPrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("afterprint",e))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](ft),r["\u0275\u0275inject"](Ke),r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(ft),Object(r["\u0275\u0275inject"])(Ke),Object(r["\u0275\u0275inject"])(o.DOCUMENT))},token:e,providedIn:"root"}),e})();class bt{constructor(){this.printBreakpoints=[]}addPrintBreakpoints(e){return e.push(mt),e.sort(ht),e.forEach(e=>this.addBreakpoint(e)),this.printBreakpoints}addBreakpoint(e){e&&void 0===this.printBreakpoints.find(t=>t.mediaQuery===e.mediaQuery)&&(this.printBreakpoints=function(e){return!!e&&e.mediaQuery.startsWith("print")}(e)?[e,...this.printBreakpoints]:[...this.printBreakpoints,e])}clear(){this.printBreakpoints=[]}}function vt(e){for(let t in e){let n=e[t]||"";switch(t){case"display":e.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+t]=n;break;case"flex-direction":n=n||"row",e["-webkit-flex-direction"]=n,e["flex-direction"]=n;break;case"order":e.order=e["-webkit-"+t]=isNaN(+n)?"0":n}}return e}let _t=(()=>{class e{constructor(e,t,n,r){this._serverStylesheet=e,this._serverModuleLoaded=t,this._platformId=n,this.layoutConfig=r}applyStyleToElement(e,t,n=null){let r={};"string"==typeof t&&(r[t]=n,t=r),r=this.layoutConfig.disableVendorPrefixes?t:vt(t),this._applyMultiValueStyleToElement(r,e)}applyStyleToElements(e,t=[]){const n=this.layoutConfig.disableVendorPrefixes?e:vt(e);t.forEach(e=>{this._applyMultiValueStyleToElement(n,e)})}getFlowDirection(e){let t=this.lookupStyle(e,"flex-direction");return[t||"row",this.lookupInlineStyle(e,"flex-direction")||Object(o.isPlatformServer)(this._platformId)&&this._serverModuleLoaded?t:""]}hasWrap(e){return"wrap"===this.lookupStyle(e,"flex-wrap")}lookupAttributeValue(e,t){return e.getAttribute(t)||""}lookupInlineStyle(e,t){return Object(o.isPlatformBrowser)(this._platformId)?e.style.getPropertyValue(t):this._getServerStyle(e,t)}lookupStyle(e,t,n=!1){let r="";return e&&((r=this.lookupInlineStyle(e,t))||(Object(o.isPlatformBrowser)(this._platformId)?n||(r=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(r=this._serverStylesheet.getStyleForElement(e,t)))),r?r.trim():""}_applyMultiValueStyleToElement(e,t){Object.keys(e).sort().forEach(n=>{const r=e[n],i=Array.isArray(r)?r:[r];i.sort();for(let e of i)e=e?e+"":"",Object(o.isPlatformBrowser)(this._platformId)||!this._serverModuleLoaded?Object(o.isPlatformBrowser)(this._platformId)?t.style.setProperty(n,e):this._setServerStyle(t,n,e):this._serverStylesheet.addStyleToElement(t,n,e)})}_setServerStyle(e,t,n){t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const r=this._readStyleAttribute(e);r[t]=n||"",this._writeStyleAttribute(e,r)}_getServerStyle(e,t){return this._readStyleAttribute(e)[t]||""}_readStyleAttribute(e){const t={},n=e.getAttribute("style");if(n){const e=n.split(/;+/g);for(let n=0;n<e.length;n++){const r=e[n].trim();if(r.length>0){const e=r.indexOf(":");if(-1===e)throw new Error(`Invalid CSS style: ${r}`);t[r.substr(0,e).trim()]=r.substr(e+1).trim()}}}return t}_writeStyleAttribute(e,t){let n="";for(const r in t)t[r]&&(n+=r+":"+t[r]+";");e.setAttribute("style",n)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](We),r["\u0275\u0275inject"](Ge),r["\u0275\u0275inject"](r.PLATFORM_ID),r["\u0275\u0275inject"](Ke))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(We),Object(r["\u0275\u0275inject"])(Ge),Object(r["\u0275\u0275inject"])(r.PLATFORM_ID),Object(r["\u0275\u0275inject"])(Ke))},token:e,providedIn:"root"}),e})(),wt=(()=>{class e{constructor(e,t,n){this.matchMedia=e,this.breakpoints=t,this.hook=n,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new R.b,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}onMediaChange(e){const t=this.findByQuery(e.mediaQuery);t&&((e=Ye(e,t)).matches&&-1===this.activatedBreakpoints.indexOf(t)?(this.activatedBreakpoints.push(t),this.activatedBreakpoints.sort(ht),this.updateStyles()):e.matches||-1===this.activatedBreakpoints.indexOf(t)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(t),1),this.activatedBreakpoints.sort(ht),this.updateStyles()))}init(e,t,n,r,o=[]){xt(this.updateMap,e,t,n),xt(this.clearMap,e,t,r),this.buildElementKeyMap(e,t),this.watchExtraTriggers(e,t,o)}getValue(e,t,n){const r=this.elementMap.get(e);if(r){const e=void 0!==n?r.get(n):this.getActivatedValues(r,t);if(e)return e.get(t)}}hasValue(e,t){const n=this.elementMap.get(e);if(n){const e=this.getActivatedValues(n,t);if(e)return void 0!==e.get(t)||!1}return!1}setValue(e,t,n,r){let o=this.elementMap.get(e);if(o){const i=(o.get(r)||new Map).set(t,n);o.set(r,i),this.elementMap.set(e,o)}else o=(new Map).set(r,(new Map).set(t,n)),this.elementMap.set(e,o);const i=this.getValue(e,t);void 0!==i&&this.updateElement(e,t,i)}trackValue(e,t){return this.subject.asObservable().pipe(be(n=>n.element===e&&n.key===t))}updateStyles(){this.elementMap.forEach((e,t)=>{const n=new Set(this.elementKeyMap.get(t));let r=this.getActivatedValues(e);r&&r.forEach((e,r)=>{this.updateElement(t,r,e),n.delete(r)}),n.forEach(n=>{if(r=this.getActivatedValues(e,n),r){const e=r.get(n);this.updateElement(t,n,e)}else this.clearElement(t,n)})})}clearElement(e,t){const n=this.clearMap.get(e);if(n){const r=n.get(t);r&&(r(),this.subject.next({element:e,key:t,value:""}))}}updateElement(e,t,n){const r=this.updateMap.get(e);if(r){const o=r.get(t);o&&(o(n),this.subject.next({element:e,key:t,value:n}))}}releaseElement(e){const t=this.watcherMap.get(e);t&&(t.forEach(e=>e.unsubscribe()),this.watcherMap.delete(e));const n=this.elementMap.get(e);n&&(n.forEach((e,t)=>n.delete(t)),this.elementMap.delete(e))}triggerUpdate(e,t){const n=this.elementMap.get(e);if(n){const r=this.getActivatedValues(n,t);r&&(t?this.updateElement(e,t,r.get(t)):r.forEach((t,n)=>this.updateElement(e,n,t)))}}buildElementKeyMap(e,t){let n=this.elementKeyMap.get(e);n||(n=new Set,this.elementKeyMap.set(e,n)),n.add(t)}watchExtraTriggers(e,t,n){if(n&&n.length){let r=this.watcherMap.get(e);if(r||(r=new Map,this.watcherMap.set(e,r)),!r.get(t)){const o=Object(De.a)(...n).subscribe(()=>{const n=this.getValue(e,t);this.updateElement(e,t,n)});r.set(t,o)}}}findByQuery(e){return this.breakpoints.findByQuery(e)}getActivatedValues(e,t){for(let r=0;r<this.activatedBreakpoints.length;r++){const n=e.get(this.activatedBreakpoints[r].alias);if(n&&(void 0===t||n.has(t)&&null!=n.get(t)))return n}const n=e.get("");return void 0===t||n&&n.has(t)?n:void 0}observeActivations(){const e=this.breakpoints.items.map(e=>e.mediaQuery);this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe($e(this.hook.interceptEvents(this)),be(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](pt),r["\u0275\u0275inject"](ft),r["\u0275\u0275inject"](yt))},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e(Object(r["\u0275\u0275inject"])(pt),Object(r["\u0275\u0275inject"])(ft),Object(r["\u0275\u0275inject"])(yt))},token:e,providedIn:"root"}),e})();function xt(e,t,n,r){if(void 0!==r){let o=e.get(t);o||(o=new Map,e.set(t,o)),o.set(n,r)}}let Ct=(()=>{class e extends class{constructor(){this.shouldCache=!0}sideEffect(e,t,n){}}{buildStyles(e,t){return{display:"true"===e?t.display||(t.isServer?"initial":""):"none"}}}return e.\u0275fac=function(t){return Et(t||e)},e.\u0275prov=Object(r["\u0275\u0275defineInjectable"])({factory:function(){return new e},token:e,providedIn:"root"}),e})();const Et=r["\u0275\u0275getInheritedFactory"](Ct);let St=(()=>{class e extends et{constructor(e,t,n,r,o,i,s){super(e,t,n,r),this.layoutConfig=o,this.platformId=i,this.serverModuleLoaded=s,this.DIRECTIVE_KEY="show-hide",this.display="",this.hasLayout=!1,this.hasFlexChild=!1}ngAfterViewInit(){this.trackExtraTriggers();const e=Array.from(this.nativeElement.children);for(let n=0;n<e.length;n++)if(this.marshal.hasValue(e[n],"flex")){this.hasFlexChild=!0;break}kt.has(this.nativeElement)?this.display=kt.get(this.nativeElement):(this.display=this.getDisplayStyle(),kt.set(this.nativeElement,this.display)),this.init();const t=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY,"");void 0===t||""===t?this.setValue(!0,""):this.triggerUpdate()}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const r=t.split("."),o=r.slice(1).join("."),i=e[t].currentValue;let s=""===i||0!==i&&null!=(n=i)&&"false"!==`${n}`;"fxHide"===r[0]&&(s=!s),this.setValue(s,o)}var n})}trackExtraTriggers(){this.hasLayout=this.marshal.hasValue(this.nativeElement,"layout"),["layout","layout-align"].forEach(e=>{this.marshal.trackValue(this.nativeElement,e).pipe(q(this.destroySubject)).subscribe(this.triggerUpdate.bind(this))})}getDisplayStyle(){return this.hasLayout||this.hasFlexChild&&this.layoutConfig.addFlexToParent?"flex":this.styler.lookupStyle(this.nativeElement,"display",!0)}updateWithValue(e=!0){if(""===e)return;const t=Object(o.isPlatformServer)(this.platformId);this.addStyles(e?"true":"false",{display:this.display,isServer:t}),t&&this.serverModuleLoaded&&this.nativeElement.style.setProperty("display",""),this.marshal.triggerUpdate(this.parentElement,"layout-gap")}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](Ct),r["\u0275\u0275directiveInject"](_t),r["\u0275\u0275directiveInject"](wt),r["\u0275\u0275directiveInject"](Ke),r["\u0275\u0275directiveInject"](r.PLATFORM_ID),r["\u0275\u0275directiveInject"](Ge))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,features:[r["\u0275\u0275InheritDefinitionFeature"],r["\u0275\u0275NgOnChangesFeature"]]}),e})();const kt=new WeakMap,Dt=["fxShow","fxShow.print","fxShow.xs","fxShow.sm","fxShow.md","fxShow.lg","fxShow.xl","fxShow.lt-sm","fxShow.lt-md","fxShow.lt-lg","fxShow.lt-xl","fxShow.gt-xs","fxShow.gt-sm","fxShow.gt-md","fxShow.gt-lg","fxHide","fxHide.print","fxHide.xs","fxHide.sm","fxHide.md","fxHide.lg","fxHide.xl","fxHide.lt-sm","fxHide.lt-md","fxHide.lt-lg","fxHide.lt-xl","fxHide.gt-xs","fxHide.gt-sm","fxHide.gt-md","fxHide.gt-lg"];let Ot=(()=>{class e extends St{constructor(){super(...arguments),this.inputs=Dt}}return e.\u0275fac=function(t){return It(t||e)},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","fxShow",""],["","fxShow.print",""],["","fxShow.xs",""],["","fxShow.sm",""],["","fxShow.md",""],["","fxShow.lg",""],["","fxShow.xl",""],["","fxShow.lt-sm",""],["","fxShow.lt-md",""],["","fxShow.lt-lg",""],["","fxShow.lt-xl",""],["","fxShow.gt-xs",""],["","fxShow.gt-sm",""],["","fxShow.gt-md",""],["","fxShow.gt-lg",""],["","fxHide",""],["","fxHide.print",""],["","fxHide.xs",""],["","fxHide.sm",""],["","fxHide.md",""],["","fxHide.lg",""],["","fxHide.xl",""],["","fxHide.lt-sm",""],["","fxHide.lt-md",""],["","fxHide.lt-lg",""],["","fxHide.lt-xl",""],["","fxHide.gt-xs",""],["","fxHide.gt-sm",""],["","fxHide.gt-md",""],["","fxHide.gt-lg",""]],inputs:{fxShow:"fxShow","fxShow.print":"fxShow.print","fxShow.xs":"fxShow.xs","fxShow.sm":"fxShow.sm","fxShow.md":"fxShow.md","fxShow.lg":"fxShow.lg","fxShow.xl":"fxShow.xl","fxShow.lt-sm":"fxShow.lt-sm","fxShow.lt-md":"fxShow.lt-md","fxShow.lt-lg":"fxShow.lt-lg","fxShow.lt-xl":"fxShow.lt-xl","fxShow.gt-xs":"fxShow.gt-xs","fxShow.gt-sm":"fxShow.gt-sm","fxShow.gt-md":"fxShow.gt-md","fxShow.gt-lg":"fxShow.gt-lg",fxHide:"fxHide","fxHide.print":"fxHide.print","fxHide.xs":"fxHide.xs","fxHide.sm":"fxHide.sm","fxHide.md":"fxHide.md","fxHide.lg":"fxHide.lg","fxHide.xl":"fxHide.xl","fxHide.lt-sm":"fxHide.lt-sm","fxHide.lt-md":"fxHide.lt-md","fxHide.lt-lg":"fxHide.lt-lg","fxHide.lt-xl":"fxHide.lt-xl","fxHide.gt-xs":"fxHide.gt-xs","fxHide.gt-sm":"fxHide.gt-sm","fxHide.gt-md":"fxHide.gt-md","fxHide.gt-lg":"fxHide.gt-lg"},features:[r["\u0275\u0275InheritDefinitionFeature"]]}),e})();const It=r["\u0275\u0275getInheritedFactory"](Ot);let At=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[ze]]}),e})();const Pt=(()=>{function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e})();function jt(e){return new oe.a(t=>{let n;try{n=e()}catch(r){return void t.error(r)}return(n?Object(Ae.a)(n):se()).subscribe(t)})}var Tt=n("3lSR");function Nt(){return Object(Tt.a)(1)}function Rt(e){return function(t){return 0===e?se():t.lift(new Ft(e))}}class Ft{constructor(e){if(this.total=e,this.total<0)throw new Ne}call(e,t){return t.subscribe(new Mt(e,this.total))}}class Mt extends re.a{constructor(e,t){super(e),this.total=t,this.ring=new Array,this.count=0}_next(e){const t=this.ring,n=this.total,r=this.count++;t.length<n?t.push(e):t[r%n]=e}_complete(){const e=this.destination;let t=this.count;if(t>0){const n=this.count>=this.total?this.total:this.count,r=this.ring;for(let o=0;o<n;o++){const o=t++%n;e.next(r[o])}}e.complete()}}function Lt(e=Bt){return t=>t.lift(new $t(e))}class $t{constructor(e){this.errorFactory=e}call(e,t){return t.subscribe(new Vt(e,this.errorFactory))}}class Vt extends re.a{constructor(e,t){super(e),this.errorFactory=t,this.hasValue=!1}_next(e){this.hasValue=!0,this.destination.next(e)}_complete(){if(this.hasValue)return this.destination.complete();{let t;try{t=this.errorFactory()}catch(e){t=e}this.destination.error(t)}}}function Bt(){return new Pt}function Ut(e=null){return t=>t.lift(new Ht(e))}class Ht{constructor(e){this.defaultValue=e}call(e,t){return t.subscribe(new zt(e,this.defaultValue))}}class zt extends re.a{constructor(e,t){super(e),this.defaultValue=t,this.isEmpty=!0}_next(e){this.isEmpty=!1,this.destination.next(e)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}var qt=n("5E2i");function Wt(e,t){const n=arguments.length>=2;return r=>r.pipe(e?be((t,n)=>e(t,n,r)):qt.a,Rt(1),n?Ut(t):Lt(()=>new Pt))}function Qt(e){return function(t){const n=new Kt(e),r=t.lift(n);return n.caught=r}}class Kt{constructor(e){this.selector=e}call(e,t){return t.subscribe(new Gt(e,this.selector,this.caught))}}class Gt extends L.a{constructor(e,t,n){super(e),this.selector=t,this.caught=n}error(e){if(!this.isStopped){let n;try{n=this.selector(e,this.caught)}catch(t){return void super.error(t)}this._unsubscribeAndRecycle();const r=new Ie.a(this,void 0,void 0);this.add(r);const o=Object($.a)(this,n,void 0,void 0,r);o!==r&&this.add(o)}}}function Zt(e,t){const n=arguments.length>=2;return r=>r.pipe(e?be((t,n)=>e(t,n,r)):qt.a,Re(1),n?Ut(t):Lt(()=>new Pt))}var Yt=n("cJ9h");class Jt{constructor(e,t,n){this.predicate=e,this.thisArg=t,this.source=n}call(e,t){return t.subscribe(new Xt(e,this.predicate,this.thisArg,this.source))}}class Xt extends re.a{constructor(e,t,n,r){super(e),this.predicate=t,this.thisArg=n,this.source=r,this.index=0,this.thisArg=n||this}notifyComplete(e){this.destination.next(e),this.destination.complete()}_next(e){let t=!1;try{t=this.predicate.call(this.thisArg,e,this.index++,this.source)}catch(n){return void this.destination.error(n)}t||this.notifyComplete(!1)}_complete(){this.notifyComplete(!0)}}function en(...e){return Nt()(ce(...e))}function tn(e,t){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new nn(e,t,n))}}class nn{constructor(e,t,n=!1){this.accumulator=e,this.seed=t,this.hasSeed=n}call(e,t){return t.subscribe(new rn(e,this.accumulator,this.seed,this.hasSeed))}}class rn extends re.a{constructor(e,t,n,r){super(e),this.accumulator=t,this._seed=n,this.hasSeed=r,this.index=0}get seed(){return this._seed}set seed(e){this.hasSeed=!0,this._seed=e}_next(e){if(this.hasSeed)return this._tryNext(e);this.seed=e,this.destination.next(e)}_tryNext(e){const t=this.index++;let n;try{n=this.accumulator(this.seed,e,t)}catch(r){this.destination.error(r)}this.seed=n,this.destination.next(n)}}function on(e,t){return Object(Yt.a)(e,t,1)}var sn=n("Ti3e");class an{constructor(e){this.callback=e}call(e,t){return t.subscribe(new cn(e,this.callback))}}class cn extends re.a{constructor(e,t){super(e),this.add(new G.a(t))}}class ln{constructor(e,t){this.id=e,this.url=t}}class un extends ln{constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class hn extends ln{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class dn extends ln{constructor(e,t,n){super(e,t),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class fn extends ln{constructor(e,t,n){super(e,t),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class pn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class gn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class mn extends ln{constructor(e,t,n,r,o){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class yn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class bn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class vn{constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class _n{constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class wn{constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class xn{constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Cn{constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class En{constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Sn{constructor(e,t,n){this.routerEvent=e,this.position=t,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}let kn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&r["\u0275\u0275element"](0,"router-outlet")},directives:function(){return[Oo]},encapsulation:2}),e})();class Dn{constructor(e){this.params=e||{}}has(e){return this.params.hasOwnProperty(e)}get(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function On(e){return new Dn(e)}function In(e){const t=Error("NavigationCancelingError: "+e);return t.ngNavigationCancelingError=!0,t}function An(e,t,n){const r=n.path.split("/");if(r.length>e.length)return null;if("full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const t=r[i],n=e[i];if(t.startsWith(":"))o[t.substring(1)]=n;else if(t!==n.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}class Pn{constructor(e,t){this.routes=e,this.module=t}}function jn(e,t=""){for(let n=0;n<e.length;n++){const r=e[n];Tn(r,Nn(t,r))}}function Tn(e,t){if(!e)throw new Error(`\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(e))throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);if(!e.component&&!e.children&&!e.loadChildren&&e.outlet&&"primary"!==e.outlet)throw new Error(`Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`);if(e.redirectTo&&e.children)throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);if(e.redirectTo&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);if(e.children&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);if(e.redirectTo&&e.component)throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);if(e.path&&e.matcher)throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);if(void 0===e.redirectTo&&!e.component&&!e.children&&!e.loadChildren)throw new Error(`Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===e.path&&void 0===e.matcher)throw new Error(`Invalid configuration of route '${t}': routes must have either a path or a matcher specified`);if("string"==typeof e.path&&"/"===e.path.charAt(0))throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);if(""===e.path&&void 0!==e.redirectTo&&void 0===e.pathMatch)throw new Error(`Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==e.pathMatch&&"full"!==e.pathMatch&&"prefix"!==e.pathMatch)throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);e.children&&jn(e.children,t)}function Nn(e,t){return t?e||t.path?e&&!t.path?`${e}/`:!e&&t.path?t.path:`${e}/${t.path}`:"":e}function Rn(e){const t=e.children&&e.children.map(Rn),n=t?Object.assign(Object.assign({},e),{children:t}):Object.assign({},e);return!n.component&&(t||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=kn),n}function Fn(e,t){const n=Object.keys(e),r=Object.keys(t);if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!Mn(e[o],t[o]))return!1;return!0}function Mn(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length==t.length&&e.every(e=>t.indexOf(e)>-1):e===t}function Ln(e){return Array.prototype.concat.apply([],e)}function $n(e){return e.length>0?e[e.length-1]:null}function Vn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Bn(e){return Object(r["\u0275isObservable"])(e)?e:Object(r["\u0275isPromise"])(e)?Object(Ae.a)(Promise.resolve(e)):ce(e)}function Un(e,t,n){return n?function(e,t){return Fn(e,t)}(e.queryParams,t.queryParams)&&function e(t,n){if(!Wn(t.segments,n.segments))return!1;if(t.numberOfChildren!==n.numberOfChildren)return!1;for(const r in n.children){if(!t.children[r])return!1;if(!e(t.children[r],n.children[r]))return!1}return!0}(e.root,t.root):function(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>Mn(e[n],t[n]))}(e.queryParams,t.queryParams)&&function e(t,n){return function t(n,r,o){if(n.segments.length>o.length)return!!Wn(n.segments.slice(0,o.length),o)&&!r.hasChildren();if(n.segments.length===o.length){if(!Wn(n.segments,o))return!1;for(const t in r.children){if(!n.children[t])return!1;if(!e(n.children[t],r.children[t]))return!1}return!0}{const e=o.slice(0,n.segments.length),i=o.slice(n.segments.length);return!!Wn(n.segments,e)&&!!n.children.primary&&t(n.children.primary,r,i)}}(t,n,n.segments)}(e.root,t.root)}class Hn{constructor(e,t,n){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=On(this.queryParams)),this._queryParamMap}toString(){return Zn.serialize(this)}}class zn{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Vn(t,(e,t)=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Yn(this)}}class qn{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=On(this.parameters)),this._parameterMap}toString(){return rr(this)}}function Wn(e,t){return e.length===t.length&&e.every((e,n)=>e.path===t[n].path)}function Qn(e,t){let n=[];return Vn(e.children,(e,r)=>{"primary"===r&&(n=n.concat(t(e,r)))}),Vn(e.children,(e,r)=>{"primary"!==r&&(n=n.concat(t(e,r)))}),n}class Kn{}class Gn{parse(e){const t=new cr(e);return new Hn(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){var t;return`${`/${function e(t,n){if(!t.hasChildren())return Yn(t);if(n){const n=t.children.primary?e(t.children.primary,!1):"",r=[];return Vn(t.children,(t,n)=>{"primary"!==n&&r.push(`${n}:${e(t,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=Qn(t,(n,r)=>"primary"===r?[e(t.children.primary,!1)]:[`${r}:${e(n,!1)}`]);return`${Yn(t)}/(${n.join("//")})`}}(e.root,!0)}`}${function(e){const t=Object.keys(e).map(t=>{const n=e[t];return Array.isArray(n)?n.map(e=>`${Xn(t)}=${Xn(e)}`).join("&"):`${Xn(t)}=${Xn(n)}`});return t.length?`?${t.join("&")}`:""}(e.queryParams)}${"string"==typeof e.fragment?`#${t=e.fragment,encodeURI(t)}`:""}`}}const Zn=new Gn;function Yn(e){return e.segments.map(e=>rr(e)).join("/")}function Jn(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xn(e){return Jn(e).replace(/%3B/gi,";")}function er(e){return Jn(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function tr(e){return decodeURIComponent(e)}function nr(e){return tr(e.replace(/\+/g,"%20"))}function rr(e){return`${er(e.path)}${t=e.parameters,Object.keys(t).map(e=>`;${er(e)}=${er(t[e])}`).join("")}`;var t}const or=/^[^\/()?;=#]+/;function ir(e){const t=e.match(or);return t?t[0]:""}const sr=/^[^=?&#]+/,ar=/^[^?&#]+/;class cr{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new zn([],{}):new zn([],this.parseChildren())}parseQueryParams(){const e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n.primary=new zn(e,t)),n}parseSegment(){const e=ir(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(e),new qn(tr(e),this.parseMatrixParams())}parseMatrixParams(){const e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){const t=ir(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=ir(this.remaining);e&&(n=e,this.capture(n))}e[tr(t)]=tr(n)}parseQueryParam(e){const t=function(e){const t=e.match(sr);return t?t[0]:""}(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=function(e){const t=e.match(ar);return t?t[0]:""}(this.remaining);e&&(n=e,this.capture(n))}const r=nr(t),o=nr(n);if(e.hasOwnProperty(r)){let t=e[r];Array.isArray(t)||(t=[t],e[r]=t),t.push(o)}else e[r]=o}parseParens(e){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=ir(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let o=void 0;n.indexOf(":")>-1?(o=n.substr(0,n.indexOf(":")),this.capture(o),this.capture(":")):e&&(o="primary");const i=this.parseChildren();t[o]=1===Object.keys(i).length?i.primary:new zn([],i),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}capture(e){if(!this.consumeOptional(e))throw new Error(`Expected "${e}".`)}}class lr{constructor(e){this._root=e}get root(){return this._root.value}parent(e){const t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){const t=ur(e,this._root);return t?t.children.map(e=>e.value):[]}firstChild(e){const t=ur(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){const t=hr(e,this._root);return t.length<2?[]:t[t.length-2].children.map(e=>e.value).filter(t=>t!==e)}pathFromRoot(e){return hr(e,this._root).map(e=>e.value)}}function ur(e,t){if(e===t.value)return t;for(const n of t.children){const t=ur(e,n);if(t)return t}return null}function hr(e,t){if(e===t.value)return[t];for(const n of t.children){const r=hr(e,n);if(r.length)return r.unshift(t),r}return[]}class dr{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}}function fr(e){const t={};return e&&e.children.forEach(e=>t[e.value.outlet]=e),t}class pr extends lr{constructor(e,t){super(e),this.snapshot=t,_r(this,e)}toString(){return this.snapshot.toString()}}function gr(e,t){const n=function(e,t){const n=new br([],{},{},"",{},"primary",t,null,e.root,-1,{});return new vr("",new dr(n,[]))}(e,t),r=new ke([new qn("",{})]),o=new ke({}),i=new ke({}),s=new ke({}),a=new ke(""),c=new mr(r,o,s,a,i,"primary",t,n.root);return c.snapshot=n.root,new pr(new dr(c,[]),n)}class mr{constructor(e,t,n,r,o,i,s,a){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Object(K.a)(e=>On(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Object(K.a)(e=>On(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function yr(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const e=n[r],t=n[r-1];if(e.routeConfig&&""===e.routeConfig.path)r--;else{if(t.component)break;r--}}return function(e){return e.reduce((e,t)=>({params:Object.assign(Object.assign({},e.params),t.params),data:Object.assign(Object.assign({},e.data),t.data),resolve:Object.assign(Object.assign({},e.resolve),t._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class br{constructor(e,t,n,r,o,i,s,a,c,l,u){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this.routeConfig=a,this._urlSegment=c,this._lastPathIndex=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=On(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=On(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class vr extends lr{constructor(e,t){super(t),this.url=e,_r(this,t)}toString(){return wr(this._root)}}function _r(e,t){t.value._routerState=e,t.children.forEach(t=>_r(e,t))}function wr(e){const t=e.children.length>0?` { ${e.children.map(wr).join(", ")} } `:"";return`${e.value}${t}`}function xr(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Fn(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),Fn(t.params,n.params)||e.params.next(n.params),function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Fn(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),Fn(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Cr(e,t){var n,r;return Fn(e.params,t.params)&&Wn(n=e.url,r=t.url)&&n.every((e,t)=>Fn(e.parameters,r[t].parameters))&&!(!e.parent!=!t.parent)&&(!e.parent||Cr(e.parent,t.parent))}function Er(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function Sr(e,t,n,r,o){let i={};return r&&Vn(r,(e,t)=>{i[t]=Array.isArray(e)?e.map(e=>`${e}`):`${e}`}),new Hn(n.root===e?t:function e(t,n,r){const o={};return Vn(t.children,(t,i)=>{o[i]=t===n?r:e(t,n,r)}),new zn(t.segments,o)}(n.root,e,t),i,o)}class kr{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&Er(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(e=>"object"==typeof e&&null!=e&&e.outlets);if(r&&r!==$n(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Dr{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}}function Or(e){return"object"==typeof e&&null!=e&&e.outlets?e.outlets.primary:`${e}`}function Ir(e,t,n){if(e||(e=new zn([],{})),0===e.segments.length&&e.hasChildren())return Ar(e,t,n);const r=function(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const t=e.segments[o],s=Or(n[r]),a=r<n.length-1?n[r+1]:null;if(o>0&&void 0===s)break;if(s&&a&&"object"==typeof a&&void 0===a.outlets){if(!Nr(s,a,t))return i;r+=2}else{if(!Nr(s,{},t))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const t=new zn(e.segments.slice(0,r.pathIndex),{});return t.children.primary=new zn(e.segments.slice(r.pathIndex),e.children),Ar(t,0,o)}return r.match&&0===o.length?new zn(e.segments,{}):r.match&&!e.hasChildren()?Pr(e,t,n):r.match?Ar(e,0,o):Pr(e,t,n)}function Ar(e,t,n){if(0===n.length)return new zn(e.segments,{});{const r=function(e){return"object"!=typeof e[0]||void 0===e[0].outlets?{primary:e}:e[0].outlets}(n),o={};return Vn(r,(n,r)=>{null!==n&&(o[r]=Ir(e.children[r],t,n))}),Vn(e.children,(e,t)=>{void 0===r[t]&&(o[t]=e)}),new zn(e.segments,o)}}function Pr(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){if("object"==typeof n[o]&&void 0!==n[o].outlets){const e=jr(n[o].outlets);return new zn(r,e)}if(0===o&&Er(n[0])){r.push(new qn(e.segments[t].path,n[0])),o++;continue}const i=Or(n[o]),s=o<n.length-1?n[o+1]:null;i&&s&&Er(s)?(r.push(new qn(i,Tr(s))),o+=2):(r.push(new qn(i,{})),o++)}return new zn(r,{})}function jr(e){const t={};return Vn(e,(e,n)=>{null!==e&&(t[n]=Pr(new zn([],{}),0,e))}),t}function Tr(e){const t={};return Vn(e,(e,n)=>t[n]=`${e}`),t}function Nr(e,t,n){return e==n.path&&Fn(t,n.parameters)}class Rr{constructor(e,t,n,r){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r}activate(e){const t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),xr(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){const r=fr(t);e.children.forEach(e=>{const t=e.value.outlet;this.deactivateRoutes(e,r[t],n),delete r[t]}),Vn(r,(e,t)=>{this.deactivateRouteAndItsChildren(e,n)})}deactivateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(r===o)if(r.component){const o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else o&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){const n=t.getContext(e.value.outlet);if(n&&n.outlet){const t=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:t,route:e,contexts:r})}}deactivateRouteAndOutlet(e,t){const n=t.getContext(e.value.outlet);if(n){const r=fr(e),o=e.value.component?n.children:t;Vn(r,(e,t)=>this.deactivateRouteAndItsChildren(e,o)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(e,t,n){const r=fr(t);e.children.forEach(e=>{this.activateRoutes(e,r[e.value.outlet],n),this.forwardEvent(new En(e.value.snapshot))}),e.children.length&&this.forwardEvent(new xn(e.value.snapshot))}activateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(xr(r),r===o)if(r.component){const o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){const t=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const e=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),t.children.onOutletReAttached(e.contexts),t.attachRef=e.componentRef,t.route=e.route.value,t.outlet&&t.outlet.attach(e.componentRef,e.route.value),Fr(e.route)}else{const n=function(e){for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig;if(e&&e.component)return null}return null}(r.snapshot),o=n?n.module.componentFactoryResolver:null;t.attachRef=null,t.route=r,t.resolver=o,t.outlet&&t.outlet.activateWith(r,o),this.activateChildRoutes(e,null,t.children)}}else this.activateChildRoutes(e,null,n)}}function Fr(e){xr(e.value),e.children.forEach(Fr)}function Mr(e){return"function"==typeof e}function Lr(e){return e instanceof Hn}class $r{constructor(e){this.segmentGroup=e||null}}class Vr{constructor(e){this.urlTree=e}}function Br(e){return new oe.a(t=>t.error(new $r(e)))}function Ur(e){return new oe.a(t=>t.error(new Vr(e)))}function Hr(e){return new oe.a(t=>t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))}class zr{constructor(e,t,n,o,i){this.configLoader=t,this.urlSerializer=n,this.urlTree=o,this.config=i,this.allowRedirects=!0,this.ngModule=e.get(r.NgModuleRef)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(Object(K.a)(e=>this.createUrlTree(e,this.urlTree.queryParams,this.urlTree.fragment))).pipe(Qt(e=>{if(e instanceof Vr)return this.allowRedirects=!1,this.match(e.urlTree);if(e instanceof $r)throw this.noMatchError(e);throw e}))}match(e){return this.expandSegmentGroup(this.ngModule,this.config,e.root,"primary").pipe(Object(K.a)(t=>this.createUrlTree(t,e.queryParams,e.fragment))).pipe(Qt(e=>{if(e instanceof $r)throw this.noMatchError(e);throw e}))}noMatchError(e){return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`)}createUrlTree(e,t,n){const r=e.segments.length>0?new zn([],{primary:e}):e;return new Hn(r,t,n)}expandSegmentGroup(e,t,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(e,t,n).pipe(Object(K.a)(e=>new zn([],e))):this.expandSegment(e,n,t,n.segments,r,!0)}expandChildren(e,t,n){return function(e,t){if(0===Object.keys(e).length)return ce({});const n=[],r=[],o={};return Vn(e,(e,i)=>{const s=t(i,e).pipe(Object(K.a)(e=>o[i]=e));"primary"===i?n.push(s):r.push(s)}),ce.apply(null,n.concat(r)).pipe(Nt(),Wt(),Object(K.a)(()=>o))}(n.children,(n,r)=>this.expandSegmentGroup(e,t,r,n))}expandSegment(e,t,n,r,o,i){return ce(...n).pipe(Object(K.a)(s=>this.expandSegmentAgainstRoute(e,t,n,s,r,o,i).pipe(Qt(e=>{if(e instanceof $r)return ce(null);throw e}))),Nt(),Zt(e=>!!e),Qt((e,n)=>{if(e instanceof Pt||"EmptyError"===e.name){if(this.noLeftoversInUrl(t,r,o))return ce(new zn([],{}));throw new $r(t)}throw e}))}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}expandSegmentAgainstRoute(e,t,n,r,o,i,s){return Kr(r)!==i?Br(t):void 0===r.redirectTo?this.matchSegmentAgainstRoute(e,t,r,o):s&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i):Br(t)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,n,r,i):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,n,r){const o=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?Ur(o):this.lineralizeSegments(n,o).pipe(Object(Yt.a)(n=>{const o=new zn(n,{});return this.expandSegment(e,o,t,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){const{matched:s,consumedSegments:a,lastChild:c,positionalParamSegments:l}=qr(t,r,o);if(!s)return Br(t);const u=this.applyRedirectCommands(a,r.redirectTo,l);return r.redirectTo.startsWith("/")?Ur(u):this.lineralizeSegments(r,u).pipe(Object(Yt.a)(r=>this.expandSegment(e,t,n,r.concat(o.slice(c)),i,!1)))}matchSegmentAgainstRoute(e,t,n,r){if("**"===n.path)return n.loadChildren?this.configLoader.load(e.injector,n).pipe(Object(K.a)(e=>(n._loadedConfig=e,new zn(r,{})))):ce(new zn(r,{}));const{matched:o,consumedSegments:i,lastChild:s}=qr(t,n,r);if(!o)return Br(t);const a=r.slice(s);return this.getChildConfig(e,n,r).pipe(Object(Yt.a)(e=>{const n=e.module,r=e.routes,{segmentGroup:o,slicedSegments:s}=function(e,t,n,r){return n.length>0&&function(e,t,n){return n.some(n=>Qr(e,t,n)&&"primary"!==Kr(n))}(e,n,r)?{segmentGroup:Wr(new zn(t,function(e,t){const n={};n.primary=t;for(const r of e)""===r.path&&"primary"!==Kr(r)&&(n[Kr(r)]=new zn([],{}));return n}(r,new zn(n,e.children)))),slicedSegments:[]}:0===n.length&&function(e,t,n){return n.some(n=>Qr(e,t,n))}(e,n,r)?{segmentGroup:Wr(new zn(e.segments,function(e,t,n,r){const o={};for(const i of n)Qr(e,t,i)&&!r[Kr(i)]&&(o[Kr(i)]=new zn([],{}));return Object.assign(Object.assign({},r),o)}(e,n,r,e.children))),slicedSegments:n}:{segmentGroup:e,slicedSegments:n}}(t,i,a,r);return 0===s.length&&o.hasChildren()?this.expandChildren(n,r,o).pipe(Object(K.a)(e=>new zn(i,e))):0===r.length&&0===s.length?ce(new zn(i,{})):this.expandSegment(n,o,r,s,"primary",!0).pipe(Object(K.a)(e=>new zn(i.concat(e.segments),e.children)))}))}getChildConfig(e,t,n){return t.children?ce(new Pn(t.children,e)):t.loadChildren?void 0!==t._loadedConfig?ce(t._loadedConfig):function(e,t,n){const r=t.canLoad;return r&&0!==r.length?Object(Ae.a)(r).pipe(Object(K.a)(r=>{const o=e.get(r);let i;if(function(e){return e&&Mr(e.canLoad)}(o))i=o.canLoad(t,n);else{if(!Mr(o))throw new Error("Invalid CanLoad guard");i=o(t,n)}return Bn(i)})).pipe(Nt(),(o=e=>!0===e,e=>e.lift(new Jt(o,void 0,e)))):ce(!0);var o}(e.injector,t,n).pipe(Object(Yt.a)(n=>n?this.configLoader.load(e.injector,t).pipe(Object(K.a)(e=>(t._loadedConfig=e,e))):function(e){return new oe.a(t=>t.error(In(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)))}(t))):ce(new Pn([],e))}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return ce(n);if(r.numberOfChildren>1||!r.children.primary)return Hr(e.redirectTo);r=r.children.primary}}applyRedirectCommands(e,t,n){return this.applyRedirectCreatreUrlTree(t,this.urlSerializer.parse(t),e,n)}applyRedirectCreatreUrlTree(e,t,n,r){const o=this.createSegmentGroup(e,t.root,n,r);return new Hn(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){const n={};return Vn(e,(e,r)=>{if("string"==typeof e&&e.startsWith(":")){const o=e.substring(1);n[r]=t[o]}else n[r]=e}),n}createSegmentGroup(e,t,n,r){const o=this.createSegments(e,t.segments,n,r);let i={};return Vn(t.children,(t,o)=>{i[o]=this.createSegmentGroup(e,t,n,r)}),new zn(o,i)}createSegments(e,t,n,r){return t.map(t=>t.path.startsWith(":")?this.findPosParam(e,t,r):this.findOrReturn(t,n))}findPosParam(e,t,n){const r=n[t.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);return r}findOrReturn(e,t){let n=0;for(const r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}}function qr(e,t,n){if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const r=(t.matcher||An)(n,e,t);return r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function Wr(e){if(1===e.numberOfChildren&&e.children.primary){const t=e.children.primary;return new zn(e.segments.concat(t.segments),t.children)}return e}function Qr(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function Kr(e){return e.outlet||"primary"}class Gr{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}}class Zr{constructor(e,t){this.component=e,this.route=t}}function Yr(e,t,n){const r=e._root;return function e(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=fr(n);return t.children.forEach(t=>{!function(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=t.value,a=n?n.value:null,c=r?r.getContext(t.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){const l=function(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!Wn(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Wn(e.url,t.url)||!Fn(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Cr(e,t)||!Fn(e.queryParams,t.queryParams);case"paramsChange":default:return!Cr(e,t)}}(a,s,s.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Gr(o)):(s.data=a.data,s._resolvedData=a._resolvedData),e(t,n,s.component?c?c.children:null:r,o,i),l&&i.canDeactivateChecks.push(new Zr(c&&c.outlet&&c.outlet.component||null,a))}else a&&Xr(n,c,i),i.canActivateChecks.push(new Gr(o)),e(t,null,s.component?c?c.children:null:r,o,i)}(t,s[t.value.outlet],r,o.concat([t.value]),i),delete s[t.value.outlet]}),Vn(s,(e,t)=>Xr(e,r.getContext(t),i)),i}(r,t?t._root:null,n,[r.value])}function Jr(e,t,n){const r=function(e){if(!e)return null;for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig}return null}(t);return(r?r.module.injector:n).get(e)}function Xr(e,t,n){const r=fr(e),o=e.value;Vn(r,(e,r)=>{Xr(e,o.component?t?t.children.getContext(r):null:t,n)}),n.canDeactivateChecks.push(new Zr(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}const eo=Symbol("INITIAL_VALUE");function to(){return Pe(e=>U(...e.map(e=>e.pipe(Re(1),function(...e){const t=e[e.length-1];return Object(F.a)(t)?(e.pop(),n=>en(e,n,t)):t=>en(e,t)}(eo)))).pipe(tn((e,t)=>{let n=!1;return t.reduce((e,r,o)=>{if(e!==eo)return e;if(r===eo&&(n=!0),!n){if(!1===r)return r;if(o===t.length-1||Lr(r))return r}return e},e)},eo),be(e=>e!==eo),Object(K.a)(e=>Lr(e)?e:!0===e),Re(1)))}function no(e,t){return null!==e&&t&&t(new Cn(e)),ce(!0)}function ro(e,t){return null!==e&&t&&t(new wn(e)),ce(!0)}function oo(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;return r&&0!==r.length?ce(r.map(r=>jt(()=>{const o=Jr(r,t,n);let i;if(function(e){return e&&Mr(e.canActivate)}(o))i=Bn(o.canActivate(t,e));else{if(!Mr(o))throw new Error("Invalid CanActivate guard");i=Bn(o(t,e))}return i.pipe(Zt())}))).pipe(to()):ce(!0)}function io(e,t,n){const r=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(e=>function(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(e)).filter(e=>null!==e).map(t=>jt(()=>ce(t.guards.map(o=>{const i=Jr(o,t.node,n);let s;if(function(e){return e&&Mr(e.canActivateChild)}(i))s=Bn(i.canActivateChild(r,e));else{if(!Mr(i))throw new Error("Invalid CanActivateChild guard");s=Bn(i(r,e))}return s.pipe(Zt())})).pipe(to())));return ce(o).pipe(to())}class so{}class ao{constructor(e,t,n,r,o,i){this.rootComponentType=e,this.config=t,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=o,this.relativeLinkResolution=i}recognize(){try{const e=uo(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,t=this.processSegmentGroup(this.config,e,"primary"),n=new br([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),r=new dr(n,t),o=new vr(this.url,r);return this.inheritParamsAndData(o._root),ce(o)}catch(e){return new oe.a(t=>t.error(e))}}inheritParamsAndData(e){const t=e.value,n=yr(t,this.paramsInheritanceStrategy);t.params=Object.freeze(n.params),t.data=Object.freeze(n.data),e.children.forEach(e=>this.inheritParamsAndData(e))}processSegmentGroup(e,t,n){return 0===t.segments.length&&t.hasChildren()?this.processChildren(e,t):this.processSegment(e,t,t.segments,n)}processChildren(e,t){const n=Qn(t,(t,n)=>this.processSegmentGroup(e,t,n));return function(e){const t={};e.forEach(e=>{const n=t[e.value.outlet];if(n){const t=n.url.map(e=>e.toString()).join("/"),r=e.value.url.map(e=>e.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${r}'.`)}t[e.value.outlet]=e.value})}(n),n.sort((e,t)=>"primary"===e.value.outlet?-1:"primary"===t.value.outlet?1:e.value.outlet.localeCompare(t.value.outlet)),n}processSegment(e,t,n,r){for(const i of e)try{return this.processSegmentAgainstRoute(i,t,n,r)}catch(o){if(!(o instanceof so))throw o}if(this.noLeftoversInUrl(t,n,r))return[];throw new so}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}processSegmentAgainstRoute(e,t,n,r){if(e.redirectTo)throw new so;if((e.outlet||"primary")!==r)throw new so;let o,i=[],s=[];if("**"===e.path){const i=n.length>0?$n(n).parameters:{};o=new br(n,i,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,po(e),r,e.component,e,co(t),lo(t)+n.length,go(e))}else{const a=function(e,t,n){if(""===t.path){if("full"===t.pathMatch&&(e.hasChildren()||n.length>0))throw new so;return{consumedSegments:[],lastChild:0,parameters:{}}}const r=(t.matcher||An)(n,e,t);if(!r)throw new so;const o={};Vn(r.posParams,(e,t)=>{o[t]=e.path});const i=r.consumed.length>0?Object.assign(Object.assign({},o),r.consumed[r.consumed.length-1].parameters):o;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:i}}(t,e,n);i=a.consumedSegments,s=n.slice(a.lastChild),o=new br(i,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,po(e),r,e.component,e,co(t),lo(t)+i.length,go(e))}const a=function(e){return e.children?e.children:e.loadChildren?e._loadedConfig.routes:[]}(e),{segmentGroup:c,slicedSegments:l}=uo(t,i,s,a,this.relativeLinkResolution);if(0===l.length&&c.hasChildren()){const e=this.processChildren(a,c);return[new dr(o,e)]}if(0===a.length&&0===l.length)return[new dr(o,[])];const u=this.processSegment(a,c,l,"primary");return[new dr(o,u)]}}function co(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function lo(e){let t=e,n=t._segmentIndexShift?t._segmentIndexShift:0;for(;t._sourceSegment;)t=t._sourceSegment,n+=t._segmentIndexShift?t._segmentIndexShift:0;return n-1}function uo(e,t,n,r,o){if(n.length>0&&function(e,t,n){return n.some(n=>ho(e,t,n)&&"primary"!==fo(n))}(e,n,r)){const o=new zn(t,function(e,t,n,r){const o={};o.primary=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&"primary"!==fo(i)){const n=new zn([],{});n._sourceSegment=e,n._segmentIndexShift=t.length,o[fo(i)]=n}return o}(e,t,r,new zn(n,e.children)));return o._sourceSegment=e,o._segmentIndexShift=t.length,{segmentGroup:o,slicedSegments:[]}}if(0===n.length&&function(e,t,n){return n.some(n=>ho(e,t,n))}(e,n,r)){const i=new zn(e.segments,function(e,t,n,r,o,i){const s={};for(const a of r)if(ho(e,n,a)&&!o[fo(a)]){const n=new zn([],{});n._sourceSegment=e,n._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[fo(a)]=n}return Object.assign(Object.assign({},o),s)}(e,t,n,r,e.children,o));return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}const i=new zn(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function ho(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function fo(e){return e.outlet||"primary"}function po(e){return e.data||{}}function go(e){return e.resolve||{}}function mo(e,t,n,r){const o=Jr(e,t,r);return Bn(o.resolve?o.resolve(t,n):o(t,n))}function yo(e){return function(t){return t.pipe(Pe(t=>{const n=e(t);return n?Object(Ae.a)(n).pipe(Object(K.a)(()=>t)):Object(Ae.a)([t])}))}}class bo{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}}const vo=new r.InjectionToken("ROUTES");class _o{constructor(e,t,n,r){this.loader=e,this.compiler=t,this.onLoadStartListener=n,this.onLoadEndListener=r}load(e,t){return this.onLoadStartListener&&this.onLoadStartListener(t),this.loadModuleFactory(t.loadChildren).pipe(Object(K.a)(n=>{this.onLoadEndListener&&this.onLoadEndListener(t);const r=n.create(e);return new Pn(Ln(r.injector.get(vo)).map(Rn),r)}))}loadModuleFactory(e){return"string"==typeof e?Object(Ae.a)(this.loader.load(e)):Bn(e()).pipe(Object(Yt.a)(e=>e instanceof r.NgModuleFactory?ce(e):Object(Ae.a)(this.compiler.compileModuleAsync(e))))}}class wo{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}}function xo(e){throw e}function Co(e,t,n){return t.parse("/")}function Eo(e,t){return ce(null)}let So=(()=>{class e{constructor(e,t,n,o,i,s,a,c){this.rootComponentType=e,this.urlSerializer=t,this.rootContexts=n,this.location=o,this.config=c,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new R.b,this.errorHandler=xo,this.malformedUriErrorHandler=Co,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Eo,afterPreactivation:Eo},this.urlHandlingStrategy=new wo,this.routeReuseStrategy=new bo,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=i.get(r.NgModuleRef),this.console=i.get(r["\u0275Console"]);const l=i.get(r.NgZone);this.isNgZoneEnabled=l instanceof r.NgZone,this.resetConfig(c),this.currentUrlTree=new Hn(new zn([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new _o(s,a,e=>this.triggerEvent(new vn(e)),e=>this.triggerEvent(new _n(e))),this.routerState=gr(this.currentUrlTree,this.rootComponentType),this.transitions=new ke({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(e){const t=this.events;return e.pipe(be(e=>0!==e.id),Object(K.a)(e=>Object.assign(Object.assign({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl)})),Pe(e=>{let n=!1,r=!1;return ce(e).pipe($e(e=>{this.currentNavigation={id:e.id,initialUrl:e.currentRawUrl,extractedUrl:e.extractedUrl,trigger:e.source,extras:e.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Pe(e=>{const n=!this.navigated||e.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl))return ce(e).pipe(Pe(e=>{const n=this.transitions.getValue();return t.next(new un(e.id,this.serializeUrl(e.extractedUrl),e.source,e.restoredState)),n!==this.transitions.getValue()?ie:[e]}),Pe(e=>Promise.resolve(e)),(r=this.ngModule.injector,o=this.configLoader,i=this.urlSerializer,s=this.config,function(e){return e.pipe(Pe(e=>function(e,t,n,r,o){return new zr(e,t,n,r,o).apply()}(r,o,i,e.extractedUrl,s).pipe(Object(K.a)(t=>Object.assign(Object.assign({},e),{urlAfterRedirects:t})))))}),$e(e=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:e.urlAfterRedirects})}),function(e,t,n,r,o){return function(i){return i.pipe(Object(Yt.a)(i=>function(e,t,n,r,o="emptyOnly",i="legacy"){return new ao(e,t,n,r,o,i).recognize()}(e,t,i.urlAfterRedirects,n(i.urlAfterRedirects),r,o).pipe(Object(K.a)(e=>Object.assign(Object.assign({},i),{targetSnapshot:e})))))}}(this.rootComponentType,this.config,e=>this.serializeUrl(e),this.paramsInheritanceStrategy,this.relativeLinkResolution),$e(e=>{"eager"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(e.urlAfterRedirects,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),$e(e=>{const n=new pn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.next(n)}));var r,o,i,s;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:o,restoredState:i,extras:s}=e,a=new un(n,this.serializeUrl(r),o,i);t.next(a);const c=gr(r,this.rootComponentType).snapshot;return ce(Object.assign(Object.assign({},e),{targetSnapshot:c,urlAfterRedirects:r,extras:Object.assign(Object.assign({},s),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=e.rawUrl,this.browserUrlTree=e.urlAfterRedirects,e.resolve(null),ie}),yo(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.beforePreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),$e(e=>{const t=new gn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),Object(K.a)(e=>Object.assign(Object.assign({},e),{guards:Yr(e.targetSnapshot,e.currentSnapshot,this.rootContexts)})),function(e,t){return function(n){return n.pipe(Object(Yt.a)(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?ce(Object.assign(Object.assign({},n),{guardsResult:!0})):function(e,t,n,r){return Object(Ae.a)(e).pipe(Object(Yt.a)(e=>function(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?ce(i.map(i=>{const s=Jr(i,t,o);let a;if(function(e){return e&&Mr(e.canDeactivate)}(s))a=Bn(s.canDeactivate(e,t,n,r));else{if(!Mr(s))throw new Error("Invalid CanDeactivate guard");a=Bn(s(e,t,n,r))}return a.pipe(Zt())})).pipe(to()):ce(!0)}(e.component,e.route,n,t,r)),Zt(e=>!0!==e,!0))}(s,r,o,e).pipe(Object(Yt.a)(n=>n&&"boolean"==typeof n?function(e,t,n,r){return Object(Ae.a)(t).pipe(on(t=>Object(Ae.a)([ro(t.route.parent,r),no(t.route,r),io(e,t.path,n),oo(e,t.route,n)]).pipe(Nt(),Zt(e=>!0!==e,!0))),Zt(e=>!0!==e,!0))}(r,i,e,t):ce(n)),Object(K.a)(e=>Object.assign(Object.assign({},n),{guardsResult:e})))}))}}(this.ngModule.injector,e=>this.triggerEvent(e)),$e(e=>{if(Lr(e.guardsResult)){const t=In(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);throw t.url=e.guardsResult,t}}),$e(e=>{const t=new mn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot,!!e.guardsResult);this.triggerEvent(t)}),be(e=>{if(!e.guardsResult){this.resetUrlToCurrentUrlTree();const n=new dn(e.id,this.serializeUrl(e.extractedUrl),"");return t.next(n),e.resolve(!1),!1}return!0}),yo(e=>{if(e.guards.canActivateChecks.length)return ce(e).pipe($e(e=>{const t=new yn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),(t=this.paramsInheritanceStrategy,n=this.ngModule.injector,function(e){return e.pipe(Object(Yt.a)(e=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=e;return o.length?Object(Ae.a)(o).pipe(on(e=>function(e,t,n,r){return function(e,t,n,r){const o=Object.keys(e);if(0===o.length)return ce({});if(1===o.length){const i=o[0];return mo(e[i],t,n,r).pipe(Object(K.a)(e=>({[i]:e})))}const i={};return Object(Ae.a)(o).pipe(Object(Yt.a)(o=>mo(e[o],t,n,r).pipe(Object(K.a)(e=>(i[o]=e,e))))).pipe(Wt(),Object(K.a)(()=>i))}(e._resolve,e,t,r).pipe(Object(K.a)(t=>(e._resolvedData=t,e.data=Object.assign(Object.assign({},e.data),yr(e,n).resolve),null)))}(e.route,r,t,n)),function(e,t){return arguments.length>=2?function(n){return Object(sn.a)(tn(e,t),Rt(1),Ut(t))(n)}:function(t){return Object(sn.a)(tn((t,n,r)=>e(t,n,r+1)),Rt(1))(t)}}((e,t)=>e),Object(K.a)(t=>e)):ce(e)}))}),$e(e=>{const t=new bn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}));var t,n}),yo(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.afterPreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),Object(K.a)(e=>{const t=function(e,t,n){const r=function e(t,n,r){if(r&&t.shouldReuseRoute(n.value,r.value.snapshot)){const o=r.value;o._futureSnapshot=n.value;const i=function(t,n,r){return n.children.map(n=>{for(const o of r.children)if(t.shouldReuseRoute(o.value.snapshot,n.value))return e(t,n,o);return e(t,n)})}(t,n,r);return new dr(o,i)}{const r=t.retrieve(n.value);if(r){const e=r.route;return function e(t,n){if(t.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=t.value;for(let r=0;r<t.children.length;++r)e(t.children[r],n.children[r])}(n,e),e}{const r=new mr(new ke((o=n.value).url),new ke(o.params),new ke(o.queryParams),new ke(o.fragment),new ke(o.data),o.outlet,o.component,o),i=n.children.map(n=>e(t,n));return new dr(r,i)}}var o}(e,t._root,n?n._root:void 0);return new pr(r,t)}(this.routeReuseStrategy,e.targetSnapshot,e.currentRouterState);return Object.assign(Object.assign({},e),{targetRouterState:t})}),$e(e=>{this.currentUrlTree=e.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl),this.routerState=e.targetRouterState,"deferred"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),(i=this.rootContexts,s=this.routeReuseStrategy,a=e=>this.triggerEvent(e),Object(K.a)(e=>(new Rr(s,e.targetRouterState,e.currentRouterState,a).activate(i),e))),$e({next(){n=!0},complete(){n=!0}}),(o=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new dn(e.id,this.serializeUrl(e.extractedUrl),`Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`);t.next(n),e.resolve(!1)}this.currentNavigation=null},e=>e.lift(new an(o))),Qt(n=>{if(r=!0,(o=n)&&o.ngNavigationCancelingError){const r=Lr(n.url);r||(this.navigated=!0,this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl));const o=new dn(e.id,this.serializeUrl(e.extractedUrl),n.message);t.next(o),r?setTimeout(()=>{const t=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(t,"imperative",null,{skipLocationChange:e.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:e.resolve,reject:e.reject,promise:e.promise})},0):e.resolve(!1)}else{this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl);const r=new fn(e.id,this.serializeUrl(e.extractedUrl),n);t.next(r);try{e.resolve(this.errorHandler(n))}catch(i){e.reject(i)}}var o;return ie}));var o,i,s,a}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}getTransition(){const e=this.transitions.value;return e.urlAfterRedirects=this.browserUrlTree,e}setTransition(e){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),e))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{let t=this.parseUrl(e.url);const n="popstate"===e.type?"popstate":"hashchange",r=e.state&&e.state.navigationId?e.state:null;setTimeout(()=>{this.scheduleNavigation(t,n,r,{replaceUrl:!0})},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){jn(e),this.config=e.map(Rn),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}createUrlTree(e,t={}){const{relativeTo:n,queryParams:o,fragment:i,preserveQueryParams:s,queryParamsHandling:a,preserveFragment:c}=t;Object(r.isDevMode)()&&s&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const l=n||this.routerState.root,u=c?this.currentUrlTree.fragment:i;let h=null;if(a)switch(a){case"merge":h=Object.assign(Object.assign({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}else h=s?this.currentUrlTree.queryParams:o||null;return null!==h&&(h=this.removeEmptyProps(h)),function(e,t,n,r,o){if(0===n.length)return Sr(t.root,t.root,t,r,o);const i=function(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new kr(!0,0,e);let t=0,n=!1;const r=e.reduce((e,r,o)=>{if("object"==typeof r&&null!=r){if(r.outlets){const t={};return Vn(r.outlets,(e,n)=>{t[n]="string"==typeof e?e.split("/"):e}),[...e,{outlets:t}]}if(r.segmentPath)return[...e,r.segmentPath]}return"string"!=typeof r?[...e,r]:0===o?(r.split("/").forEach((r,o)=>{0==o&&"."===r||(0==o&&""===r?n=!0:".."===r?t++:""!=r&&e.push(r))}),e):[...e,r]},[]);return new kr(n,t,r)}(n);if(i.toRoot())return Sr(t.root,new zn([],{}),t,r,o);const s=function(e,t,n){if(e.isAbsolute)return new Dr(t.root,!0,0);if(-1===n.snapshot._lastPathIndex)return new Dr(n.snapshot._urlSegment,!0,0);const r=Er(e.commands[0])?0:1;return function(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new Error("Invalid number of '../'");o=r.segments.length}return new Dr(r,!1,o-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,e.numberOfDoubleDots)}(i,t,e),a=s.processChildren?Ar(s.segmentGroup,s.index,i.commands):Ir(s.segmentGroup,s.index,i.commands);return Sr(s.segmentGroup,a,t,r,o)}(l,this.currentUrlTree,e,h,u)}navigateByUrl(e,t={skipLocationChange:!1}){Object(r.isDevMode)()&&this.isNgZoneEnabled&&!r.NgZone.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=Lr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(o,"imperative",null,t)}navigate(e,t={skipLocationChange:!1}){return function(e){for(let t=0;t<e.length;t++){const n=e[t];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${t}`)}}(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let t;try{t=this.urlSerializer.parse(e)}catch(n){t=this.malformedUriErrorHandler(n,this.urlSerializer,e)}return t}isActive(e,t){if(Lr(e))return Un(this.currentUrlTree,e,t);const n=this.parseUrl(e);return Un(this.currentUrlTree,n,t)}removeEmptyProps(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return null!=r&&(t[n]=r),t},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.events.next(new hn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,e.resolve(!0)},e=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(e,t,n,r,o){const i=this.getTransition();if(i&&"imperative"!==t&&"imperative"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"hashchange"==t&&"popstate"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"popstate"==t&&"hashchange"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);let s,a,c;o?(s=o.resolve,a=o.reject,c=o.promise):c=new Promise((e,t)=>{s=e,a=t});const l=++this.navigationId;return this.setTransition({id:l,source:t,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:r,resolve:s,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(e=>Promise.reject(e))}setBrowserUrl(e,t,n,r){const o=this.urlSerializer.serialize(e);r=r||{},this.location.isCurrentPathEqualTo(o)||t?this.location.replaceState(o,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(o,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(e,t,n){this.routerState=e,this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return e.\u0275fac=function(e){r["\u0275\u0275invalidFactory"]()},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e}),e})();class ko{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new Do,this.attachRef=null}}class Do{constructor(){this.contexts=new Map}onChildOutletCreated(e,t){const n=this.getOrCreateContext(e);n.outlet=t,this.contexts.set(e,n)}onChildOutletDestroyed(e){const t=this.getContext(e);t&&(t.outlet=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new ko,this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}}let Oo=(()=>{class e{constructor(e,t,n,o,i){this.parentContexts=e,this.location=t,this.resolver=n,this.changeDetector=i,this.activated=null,this._activatedRoute=null,this.activateEvents=new r.EventEmitter,this.deactivateEvents=new r.EventEmitter,this.name=o||"primary",e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=e;const n=(t=t||this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,o=new Io(e,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,o),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Do),r["\u0275\u0275directiveInject"](r.ViewContainerRef),r["\u0275\u0275directiveInject"](r.ComponentFactoryResolver),r["\u0275\u0275injectAttribute"]("name"),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),e})();class Io{constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===mr?this.route:e===Do?this.childContexts:this.parent.get(e,t)}}class Ao{}class Po{preload(e,t){return ce(null)}}let jo=(()=>{class e{constructor(e,t,n,r,o){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=new _o(t,n,t=>e.triggerEvent(new vn(t)),t=>e.triggerEvent(new _n(t)))}setUpPreloading(){this.subscription=this.router.events.pipe(be(e=>e instanceof hn),on(()=>this.preload())).subscribe(()=>{})}preload(){const e=this.injector.get(r.NgModuleRef);return this.processRoutes(e,this.router.config)}ngOnDestroy(){this.subscription.unsubscribe()}processRoutes(e,t){const n=[];for(const r of t)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const e=r._loadedConfig;n.push(this.processRoutes(e.module,e.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(e,r)):r.children&&n.push(this.processRoutes(e,r.children));return Object(Ae.a)(n).pipe(Object(Tt.a)(),Object(K.a)(e=>{}))}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>this.loader.load(e.injector,t).pipe(Object(Yt.a)(e=>(t._loadedConfig=e,this.processRoutes(e.module,e.routes)))))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](So),r["\u0275\u0275inject"](r.NgModuleFactoryLoader),r["\u0275\u0275inject"](r.Compiler),r["\u0275\u0275inject"](r.Injector),r["\u0275\u0275inject"](Ao))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),To=(()=>{class e{constructor(e,t,n={}){this.router=e,this.viewportScroller=t,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof un?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof hn&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof Sn&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,t){this.router.triggerEvent(new Sn(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,t))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(e){r["\u0275\u0275invalidFactory"]()},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e}),e})();const No=new r.InjectionToken("ROUTER_CONFIGURATION"),Ro=new r.InjectionToken("ROUTER_FORROOT_GUARD"),Fo=[o.Location,{provide:Kn,useClass:Gn},{provide:So,useFactory:function(e,t,n,r,i,s,a,c={},l,u){const h=new So(null,e,t,n,r,i,s,Ln(a));if(l&&(h.urlHandlingStrategy=l),u&&(h.routeReuseStrategy=u),c.errorHandler&&(h.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(h.malformedUriErrorHandler=c.malformedUriErrorHandler),c.enableTracing){const e=Object(o["\u0275getDOM"])();h.events.subscribe(t=>{e.logGroup(`Router Event: ${t.constructor.name}`),e.log(t.toString()),e.log(t),e.logGroupEnd()})}return c.onSameUrlNavigation&&(h.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.urlUpdateStrategy&&(h.urlUpdateStrategy=c.urlUpdateStrategy),c.relativeLinkResolution&&(h.relativeLinkResolution=c.relativeLinkResolution),h},deps:[Kn,Do,o.Location,r.Injector,r.NgModuleFactoryLoader,r.Compiler,vo,No,[class{},new r.Optional],[class{},new r.Optional]]},Do,{provide:mr,useFactory:function(e){return e.routerState.root},deps:[So]},{provide:r.NgModuleFactoryLoader,useClass:r.SystemJsNgModuleLoader},jo,Po,class{preload(e,t){return t().pipe(Qt(()=>ce(null)))}},{provide:No,useValue:{enableTracing:!1}}];function Mo(){return new r.NgProbeToken("Router",So)}let Lo=(()=>{class e{constructor(e,t){}static forRoot(t,n){return{ngModule:e,providers:[Fo,Uo(t),{provide:Ro,useFactory:Bo,deps:[[So,new r.Optional,new r.SkipSelf]]},{provide:No,useValue:n||{}},{provide:o.LocationStrategy,useFactory:Vo,deps:[o.PlatformLocation,[new r.Inject(o.APP_BASE_HREF),new r.Optional],No]},{provide:To,useFactory:$o,deps:[So,o.ViewportScroller,No]},{provide:Ao,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Po},{provide:r.NgProbeToken,multi:!0,useFactory:Mo},[Ho,{provide:r.APP_INITIALIZER,multi:!0,useFactory:zo,deps:[Ho]},{provide:Wo,useFactory:qo,deps:[Ho]},{provide:r.APP_BOOTSTRAP_LISTENER,multi:!0,useExisting:Wo}]]}}static forChild(t){return{ngModule:e,providers:[Uo(t)]}}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](Ro,8),r["\u0275\u0275inject"](So,8))}}),e})();function $o(e,t,n){return n.scrollOffset&&t.setOffset(n.scrollOffset),new To(e,t,n)}function Vo(e,t,n={}){return n.useHash?new o.HashLocationStrategy(e,t):new o.PathLocationStrategy(e,t)}function Bo(e){if(e)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function Uo(e){return[{provide:r.ANALYZE_FOR_ENTRY_COMPONENTS,multi:!0,useValue:e},{provide:vo,multi:!0,useValue:e}]}let Ho=(()=>{class e{constructor(e){this.injector=e,this.initNavigation=!1,this.resultOfPreactivationDone=new R.b}appInitializer(){return this.injector.get(o.LOCATION_INITIALIZED,Promise.resolve(null)).then(()=>{let e=null;const t=new Promise(t=>e=t),n=this.injector.get(So),r=this.injector.get(No);if(this.isLegacyDisabled(r)||this.isLegacyEnabled(r))e(!0);else if("disabled"===r.initialNavigation)n.setUpLocationChangeListener(),e(!0);else{if("enabled"!==r.initialNavigation)throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?ce(null):(this.initNavigation=!0,e(!0),this.resultOfPreactivationDone),n.initialNavigation()}return t})}bootstrapListener(e){const t=this.injector.get(No),n=this.injector.get(jo),o=this.injector.get(To),i=this.injector.get(So),s=this.injector.get(r.ApplicationRef);e===s.components[0]&&(this.isLegacyEnabled(t)?i.initialNavigation():this.isLegacyDisabled(t)&&i.setUpLocationChangeListener(),n.setUpPreloading(),o.init(),i.resetRootComponentType(s.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(e){return"legacy_enabled"===e.initialNavigation||!0===e.initialNavigation||void 0===e.initialNavigation}isLegacyDisabled(e){return"legacy_disabled"===e.initialNavigation||!1===e.initialNavigation}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.Injector))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function zo(e){return e.appInitializer.bind(e)}function qo(e){return e.bootstrapListener.bind(e)}const Wo=new r.InjectionToken("Router Initializer");function Qo(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"kor-menu-item",3),r["\u0275\u0275listener"]("click",(function(){r["\u0275\u0275restoreView"](e);const n=t.$implicit;return r["\u0275\u0275nextContext"]().gotoItem(n)})),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;r["\u0275\u0275property"]("id","menu_"+e.key)("label",e.label)("icon",e.icon)}}let Ko=(()=>{class e{constructor(e,t,n){this.provider=e,this.ref=t,this.router=n,this.menus=new Map,this.unsubscriber=new R.b}ngOnInit(){this.provider.receiveCommands(we.DontCodeModel.APP_ENTITIES,we.DontCodeModel.APP_ENTITIES_NAME_NODE).pipe(q(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new Go(e.position,e.value,"create")),this.ref.detectChanges()}),this.provider.receiveCommands(we.DontCodeModel.APP_SCREENS,we.DontCodeModel.APP_SCREENS_NAME_NODE).pipe(q(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new Go(e.position,e.value,"filter")),this.ref.detectChanges()})}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}gotoPage(e){this.router.navigate([e])}isActive(e){return this.router.isActive(e,!0)}gotoItem(e){this.router.navigate([e.position])}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Se),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](So))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-menu"]],decls:4,vars:5,consts:[["label","Home","icon","home",3,"active","toggle","click"],["label","Dev","icon","memory",3,"active","toggle","click"],["toggle","false",3,"id","label","icon","click",4,"ngFor","ngForOf"],["toggle","false",3,"id","label","icon","click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"kor-menu-item",0),r["\u0275\u0275listener"]("click",(function(){return t.gotoPage("/")})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](1,"kor-menu-item",1),r["\u0275\u0275listener"]("click",(function(){return t.gotoPage("dev")})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](2,"kor-divider"),r["\u0275\u0275template"](3,Qo,1,3,"kor-menu-item",2)),2&e&&(r["\u0275\u0275property"]("active",t.isActive("/"))("toggle",!1),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("active",t.isActive("dev"))("toggle",!1),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngForOf",t.menus.values()))},directives:[o.NgForOf],styles:[""]}),e})();class Go{constructor(e,t,n){e=this.cleanPosition(e),this.position=e,this.key=e.split("/").join("-"),this.label=t.name?t.name:t,this.icon=n||"text_snippet"}cleanPosition(e){return e.startsWith(we.DontCodeModel.ROOT)&&(e=e.substr(we.DontCodeModel.ROOT.length+1)),e.endsWith(we.DontCodeModel.APP_SCREENS_NAME_NODE)&&(e=e.substring(0,e.length-we.DontCodeModel.APP_SCREENS_NAME_NODE.length-1)),e}}function Zo(e,t){1&e&&r["\u0275\u0275element"](0,"kor-icon",10)}function Yo(e,t){1&e&&r["\u0275\u0275element"](0,"kor-icon",11)}function Jo(e,t){if(1&e){const e=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"kor-page"),r["\u0275\u0275elementStart"](2,"kor-app-bar",1),r["\u0275\u0275elementStart"](3,"kor-icon",2),r["\u0275\u0275listener"]("click",(function(){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().logoClicked()})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"div",3),r["\u0275\u0275template"](5,Zo,1,0,"kor-icon",4),r["\u0275\u0275template"](6,Yo,1,0,"kor-icon",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",6),r["\u0275\u0275elementStart"](8,"kor-drawer",7),r["\u0275\u0275listener"]("visible-changed",(function(t){return r["\u0275\u0275restoreView"](e),r["\u0275\u0275nextContext"]().sidePanelVisibleChanged(t)})),r["\u0275\u0275element"](9,"preview-ui-menu"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",8),r["\u0275\u0275elementStart"](11,"kor-pane",9),r["\u0275\u0275element"](12,"preview-ui-menu"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](13,"router-outlet"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()}if(2&e){const e=t.ngIf,n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("label","Preview "+n.appName),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngIf","connected"===e.status),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngIf","connected"!==e.status),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("visible",n.sidePanelVisible)}}let Xo=(()=>{class e{constructor(e,t){this.provider=e,this.listenerService=t,this.unsubscriber=new R.b,this.appName="No Name"}ngOnInit(){this.sidePanelVisible=!0,this.provider.receiveCommands(we.DontCodeModel.APP_NAME).pipe(q(this.unsubscriber)).subscribe(e=>{this.appName=e.value}),this.context$=U([this.listenerService.getConnectionStatus()]).pipe(Object(K.a)(e=>({status:e[0]})))}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}logoClicked(){this.sidePanelVisible=!0}sidePanelVisibleChanged(e){this.sidePanelVisible=e.target.visible}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Se),r["\u0275\u0275directiveInject"](Ee))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-main"]],decls:2,vars:3,consts:[[4,"ngIf"],["id","mainToolbar","slot","top","mobile","",3,"label"],["button","","icon","url('./assets/images/logo.png')","slot","left","size","xl",3,"click"],["slot","right"],["icon","sync",4,"ngIf"],["color","rgb(var(--functional-red))","icon","sync_problem",4,"ngIf"],["fxHide","true","fxShow.lt-md","true"],["id","mainSidePanel","label","Menu",3,"visible","visible-changed"],["slot","left","fxShow","true","fxHide.lt-md","true"],["label","Menu","size","l"],["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,Jo,14,4,"div",0),r["\u0275\u0275pipe"](1,"async")),2&e&&r["\u0275\u0275property"]("ngIf",r["\u0275\u0275pipeBind1"](1,1,t.context$))},directives:[o.NgIf,Ot,Ko,Oo],pipes:[o.AsyncPipe],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1}"]}),e})(),ei=(()=>{class e{constructor(){this.title="preview-ui"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-root"]],decls:1,vars:0,template:function(e,t){1&e&&r["\u0275\u0275element"](0,"preview-ui-main")},directives:[Xo],styles:[""]}),e})();class ti{}function ni(e,t=null){return{type:2,steps:e,options:t}}function ri(e){return{type:6,styles:e,offset:null}}function oi(e){Promise.resolve(null).then(e)}class ii{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){oi(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){}setPosition(e){}getPosition(){return 0}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class si{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,n=0,r=0;const o=this.players.length;0==o?oi(()=>this._onFinish()):this.players.forEach(e=>{e.onDone(()=>{++t==o&&this._onFinish()}),e.onDestroy(()=>{++n==o&&this._onDestroy()}),e.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((e,t)=>Math.max(e,t.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const t=e*this.totalTime;this.players.forEach(e=>{const n=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(n)})}getPosition(){let e=0;return this.players.forEach(t=>{const n=t.getPosition();e=Math.min(n,e)}),e}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}function ai(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function ci(e){switch(e.length){case 0:return new ii;case 1:return e[0];default:return new si(e)}}function li(e,t,n,r,o={},i={}){const s=[],a=[];let c=-1,l=null;if(r.forEach(e=>{const n=e.offset,r=n==c,u=r&&l||{};Object.keys(e).forEach(n=>{let r=n,a=e[n];if("offset"!==n)switch(r=t.normalizePropertyName(r,s),a){case"!":a=o[n];break;case"*":a=i[n];break;default:a=t.normalizeStyleValue(n,r,a,s)}u[r]=a}),r||a.push(u),l=u,c=n}),s.length){const e="\n - ";throw new Error(`Unable to animate due to the following errors:${e}${s.join(e)}`)}return a}function ui(e,t,n,r){switch(t){case"start":e.onStart(()=>r(n&&hi(n,"start",e)));break;case"done":e.onDone(()=>r(n&&hi(n,"done",e)));break;case"destroy":e.onDestroy(()=>r(n&&hi(n,"destroy",e)))}}function hi(e,t,n){const r=n.totalTime,o=di(e.element,e.triggerName,e.fromState,e.toState,t||e.phaseName,null==r?e.totalTime:r,!!n.disabled),i=e._data;return null!=i&&(o._data=i),o}function di(e,t,n,r,o="",i=0,s){return{element:e,triggerName:t,fromState:n,toState:r,phaseName:o,totalTime:i,disabled:!!s}}function fi(e,t,n){let r;return e instanceof Map?(r=e.get(t),r||e.set(t,r=n)):(r=e[t],r||(r=e[t]=n)),r}function pi(e){const t=e.indexOf(":");return[e.substring(1,t),e.substr(t+1)]}let gi=(e,t)=>!1,mi=(e,t)=>!1,yi=(e,t,n)=>[];const bi=ai();(bi||"undefined"!=typeof Element)&&(gi=(e,t)=>e.contains(t),mi=(()=>{if(bi||Element.prototype.matches)return(e,t)=>e.matches(t);{const e=Element.prototype,t=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return t?(e,n)=>t.apply(e,[n]):mi}})(),yi=(e,t,n)=>{let r=[];if(n)r.push(...e.querySelectorAll(t));else{const n=e.querySelector(t);n&&r.push(n)}return r});let vi=null,_i=!1;function wi(e){vi||(vi=("undefined"!=typeof document?document.body:null)||{},_i=!!vi.style&&"WebkitAppearance"in vi.style);let t=!0;return vi.style&&!function(e){return"ebkit"==e.substring(1,6)}(e)&&(t=e in vi.style,!t&&_i)&&(t="Webkit"+e.charAt(0).toUpperCase()+e.substr(1)in vi.style),t}const xi=mi,Ci=gi,Ei=yi;function Si(e){const t={};return Object.keys(e).forEach(n=>{const r=n.replace(/([a-z])([A-Z])/g,"$1-$2");t[r]=e[n]}),t}let ki=(()=>{class e{validateStyleProperty(e){return wi(e)}matchesElement(e,t){return xi(e,t)}containsElement(e,t){return Ci(e,t)}query(e,t,n){return Ei(e,t,n)}computeStyle(e,t,n){return n||""}animate(e,t,n,r,o,i=[],s){return new ii(n,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),Di=(()=>{class e{}return e.NOOP=new ki,e})();function Oi(e){if("number"==typeof e)return e;const t=e.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:Ii(parseFloat(t[1]),t[2])}function Ii(e,t){switch(t){case"s":return 1e3*e;default:return e}}function Ai(e,t,n){return e.hasOwnProperty("duration")?e:function(e,t,n){let r,o=0,i="";if("string"==typeof e){const n=e.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===n)return t.push(`The provided timing value "${e}" is invalid.`),{duration:0,delay:0,easing:""};r=Ii(parseFloat(n[1]),n[2]);const s=n[3];null!=s&&(o=Ii(parseFloat(s),n[4]));const a=n[5];a&&(i=a)}else r=e;if(!n){let n=!1,i=t.length;r<0&&(t.push("Duration values below 0 are not allowed for this animation step."),n=!0),o<0&&(t.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&t.splice(i,0,`The provided timing value "${e}" is invalid.`)}return{duration:r,delay:o,easing:i}}(e,t,n)}function Pi(e,t={}){return Object.keys(e).forEach(n=>{t[n]=e[n]}),t}function ji(e,t,n={}){if(t)for(let r in e)n[r]=e[r];else Pi(e,n);return n}function Ti(e,t,n){return n?t+":"+n+";":""}function Ni(e){let t="";for(let n=0;n<e.style.length;n++){const r=e.style.item(n);t+=Ti(0,r,e.style.getPropertyValue(r))}for(const n in e.style)e.style.hasOwnProperty(n)&&!n.startsWith("_")&&(t+=Ti(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e.style[n]));e.setAttribute("style",t)}function Ri(e,t,n){e.style&&(Object.keys(t).forEach(r=>{const o=Hi(r);n&&!n.hasOwnProperty(r)&&(n[r]=e.style[o]),e.style[o]=t[r]}),ai()&&Ni(e))}function Fi(e,t){e.style&&(Object.keys(t).forEach(t=>{const n=Hi(t);e.style[n]=""}),ai()&&Ni(e))}function Mi(e){return Array.isArray(e)?1==e.length?e[0]:ni(e):e}const Li=new RegExp("{{\\s*(.+?)\\s*}}","g");function $i(e){let t=[];if("string"==typeof e){let n;for(;n=Li.exec(e);)t.push(n[1]);Li.lastIndex=0}return t}function Vi(e,t,n){const r=e.toString(),o=r.replace(Li,(e,r)=>{let o=t[r];return t.hasOwnProperty(r)||(n.push(`Please provide a value for the animation param ${r}`),o=""),o.toString()});return o==r?e:o}function Bi(e){const t=[];let n=e.next();for(;!n.done;)t.push(n.value),n=e.next();return t}const Ui=/-+([a-z0-9])/g;function Hi(e){return e.replace(Ui,(...e)=>e[1].toUpperCase())}function zi(e,t){return 0===e||0===t}function qi(e,t,n){const r=Object.keys(n);if(r.length&&t.length){let i=t[0],s=[];if(r.forEach(e=>{i.hasOwnProperty(e)||s.push(e),i[e]=n[e]}),s.length)for(var o=1;o<t.length;o++){let n=t[o];s.forEach((function(t){n[t]=Qi(e,t)}))}}return t}function Wi(e,t,n){switch(t.type){case 7:return e.visitTrigger(t,n);case 0:return e.visitState(t,n);case 1:return e.visitTransition(t,n);case 2:return e.visitSequence(t,n);case 3:return e.visitGroup(t,n);case 4:return e.visitAnimate(t,n);case 5:return e.visitKeyframes(t,n);case 6:return e.visitStyle(t,n);case 8:return e.visitReference(t,n);case 9:return e.visitAnimateChild(t,n);case 10:return e.visitAnimateRef(t,n);case 11:return e.visitQuery(t,n);case 12:return e.visitStagger(t,n);default:throw new Error(`Unable to resolve animation metadata node #${t.type}`)}}function Qi(e,t){return window.getComputedStyle(e)[t]}function Ki(e,t){const n=[];return"string"==typeof e?e.split(/\s*,\s*/).forEach(e=>function(e,t,n){if(":"==e[0]){const r=function(e,t){switch(e){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return t.push(`The transition alias value "${e}" is not supported`),"* => *"}}(e,n);if("function"==typeof r)return void t.push(r);e=r}const r=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return n.push(`The provided transition expression "${e}" is not supported`),t;const o=r[1],i=r[2],s=r[3];t.push(Yi(o,s)),"<"!=i[0]||"*"==o&&"*"==s||t.push(Yi(s,o))}(e,n,t)):n.push(e),n}const Gi=new Set(["true","1"]),Zi=new Set(["false","0"]);function Yi(e,t){const n=Gi.has(e)||Zi.has(e),r=Gi.has(t)||Zi.has(t);return(o,i)=>{let s="*"==e||e==o,a="*"==t||t==i;return!s&&n&&"boolean"==typeof o&&(s=o?Gi.has(e):Zi.has(e)),!a&&r&&"boolean"==typeof i&&(a=i?Gi.has(t):Zi.has(t)),s&&a}}const Ji=new RegExp("s*:selfs*,?","g");function Xi(e,t,n){return new es(e).build(t,n)}class es{constructor(e){this._driver=e}build(e,t){const n=new ts(t);return this._resetContextStyleTimingState(n),Wi(this,Mi(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles={},e.collectedStyles[""]={},e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,r=t.depCount=0;const o=[],i=[];return"@"==e.name.charAt(0)&&t.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),e.definitions.forEach(e=>{if(this._resetContextStyleTimingState(t),0==e.type){const n=e,r=n.name;r.toString().split(/\s*,\s*/).forEach(e=>{n.name=e,o.push(this.visitState(n,t))}),n.name=r}else if(1==e.type){const o=this.visitTransition(e,t);n+=o.queryCount,r+=o.depCount,i.push(o)}else t.errors.push("only state() and transition() definitions can sit inside of a trigger()")}),{type:7,name:e.name,states:o,transitions:i,queryCount:n,depCount:r,options:null}}visitState(e,t){const n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){const o=new Set,i=r||{};if(n.styles.forEach(e=>{if(ns(e)){const t=e;Object.keys(t).forEach(e=>{$i(t[e]).forEach(e=>{i.hasOwnProperty(e)||o.add(e)})})}}),o.size){const n=Bi(o.values());t.errors.push(`state("${e.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)}}return{type:0,name:e.name,style:n,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;const n=Wi(this,Mi(e.animation),t);return{type:1,matchers:Ki(e.expr,t.errors),animation:n,queryCount:t.queryCount,depCount:t.depCount,options:rs(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(e=>Wi(this,e,t)),options:rs(e.options)}}visitGroup(e,t){const n=t.currentTime;let r=0;const o=e.steps.map(e=>{t.currentTime=n;const o=Wi(this,e,t);return r=Math.max(r,t.currentTime),o});return t.currentTime=r,{type:3,steps:o,options:rs(e.options)}}visitAnimate(e,t){const n=function(e,t){let n=null;if(e.hasOwnProperty("duration"))n=e;else if("number"==typeof e)return os(Ai(e,t).duration,0,"");const r=e;if(r.split(/\s+/).some(e=>"{"==e.charAt(0)&&"{"==e.charAt(1))){const e=os(0,0,"");return e.dynamic=!0,e.strValue=r,e}return n=n||Ai(r,t),os(n.duration,n.delay,n.easing)}(e.timings,t.errors);let r;t.currentAnimateTimings=n;let o=e.styles?e.styles:ri({});if(5==o.type)r=this.visitKeyframes(o,t);else{let o=e.styles,i=!1;if(!o){i=!0;const e={};n.easing&&(e.easing=n.easing),o=ri(e)}t.currentTime+=n.duration+n.delay;const s=this.visitStyle(o,t);s.isEmptyStep=i,r=s}return t.currentAnimateTimings=null,{type:4,timings:n,style:r,options:null}}visitStyle(e,t){const n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){const n=[];Array.isArray(e.styles)?e.styles.forEach(e=>{"string"==typeof e?"*"==e?n.push(e):t.errors.push(`The provided style string value ${e} is not allowed.`):n.push(e)}):n.push(e.styles);let r=!1,o=null;return n.forEach(e=>{if(ns(e)){const t=e,n=t.easing;if(n&&(o=n,delete t.easing),!r)for(let e in t)if(t[e].toString().indexOf("{{")>=0){r=!0;break}}}),{type:6,styles:n,easing:o,offset:e.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(e,t){const n=t.currentAnimateTimings;let r=t.currentTime,o=t.currentTime;n&&o>0&&(o-=n.duration+n.delay),e.styles.forEach(e=>{"string"!=typeof e&&Object.keys(e).forEach(n=>{if(!this._driver.validateStyleProperty(n))return void t.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);const i=t.collectedStyles[t.currentQuerySelector],s=i[n];let a=!0;s&&(o!=r&&o>=s.startTime&&r<=s.endTime&&(t.errors.push(`The CSS property "${n}" that exists between the times of "${s.startTime}ms" and "${s.endTime}ms" is also being animated in a parallel animation between the times of "${o}ms" and "${r}ms"`),a=!1),o=s.startTime),a&&(i[n]={startTime:o,endTime:r}),t.options&&function(e,t,n){const r=t.params||{},o=$i(e);o.length&&o.forEach(e=>{r.hasOwnProperty(e)||n.push(`Unable to resolve the local animation param ${e} in the given list of values`)})}(e[n],t.options,t.errors)})})}visitKeyframes(e,t){const n={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push("keyframes() must be placed inside of a call to animate()"),n;let r=0;const o=[];let i=!1,s=!1,a=0;const c=e.steps.map(e=>{const n=this._makeStyleAst(e,t);let c=null!=n.offset?n.offset:function(e){if("string"==typeof e)return null;let t=null;if(Array.isArray(e))e.forEach(e=>{if(ns(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}});else if(ns(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}return t}(n.styles),l=0;return null!=c&&(r++,l=n.offset=c),s=s||l<0||l>1,i=i||l<a,a=l,o.push(l),n});s&&t.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),i&&t.errors.push("Please ensure that all keyframe offsets are in order");const l=e.steps.length;let u=0;r>0&&r<l?t.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==r&&(u=1/(l-1));const h=l-1,d=t.currentTime,f=t.currentAnimateTimings,p=f.duration;return c.forEach((e,r)=>{const i=u>0?r==h?1:u*r:o[r],s=i*p;t.currentTime=d+f.delay+s,f.duration=s,this._validateStyleAst(e,t),e.offset=i,n.styles.push(e)}),n}visitReference(e,t){return{type:8,animation:Wi(this,Mi(e.animation),t),options:rs(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:rs(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:rs(e.options)}}visitQuery(e,t){const n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;const[o,i]=function(e){const t=!!e.split(/\s*,\s*/).find(e=>":self"==e);return t&&(e=e.replace(Ji,"")),[e=e.replace(/@\*/g,".ng-trigger").replace(/@\w+/g,e=>".ng-trigger-"+e.substr(1)).replace(/:animating/g,".ng-animating"),t]}(e.selector);t.currentQuerySelector=n.length?n+" "+o:o,fi(t.collectedStyles,t.currentQuerySelector,{});const s=Wi(this,Mi(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:11,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:i,animation:s,originalSelector:e.selector,options:rs(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push("stagger() can only be used inside of query()");const n="full"===e.timings?{duration:0,delay:0,easing:"full"}:Ai(e.timings,t.errors,!0);return{type:12,animation:Wi(this,Mi(e.animation),t),timings:n,options:null}}}class ts{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null}}function ns(e){return!Array.isArray(e)&&"object"==typeof e}function rs(e){var t;return e?(e=Pi(e)).params&&(e.params=(t=e.params)?Pi(t):null):e={},e}function os(e,t,n){return{duration:e,delay:t,easing:n}}function is(e,t,n,r,o,i,s=null,a=!1){return{type:1,element:e,keyframes:t,preStyleProps:n,postStyleProps:r,duration:o,delay:i,totalTime:o+i,easing:s,subTimeline:a}}class ss{constructor(){this._map=new Map}consume(e){let t=this._map.get(e);return t?this._map.delete(e):t=[],t}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}}const as=new RegExp(":enter","g"),cs=new RegExp(":leave","g");function ls(e,t,n,r,o,i={},s={},a,c,l=[]){return(new us).buildKeyframes(e,t,n,r,o,i,s,a,c,l)}class us{buildKeyframes(e,t,n,r,o,i,s,a,c,l=[]){c=c||new ss;const u=new ds(e,t,c,r,o,l,[]);u.options=a,u.currentTimeline.setStyles([i],null,u.errors,a),Wi(this,n,u);const h=u.timelines.filter(e=>e.containsAnimation());if(h.length&&Object.keys(s).length){const e=h[h.length-1];e.allowOnlyTimelineStyles()||e.setStyles([s],null,u.errors,a)}return h.length?h.map(e=>e.buildKeyframes()):[is(t,[],[],[],0,0,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){const n=t.subInstructions.consume(t.element);if(n){const r=t.createSubContext(e.options),o=t.currentTimeline.currentTime,i=this._visitSubInstructions(n,r,r.options);o!=i&&t.transformIntoNewTimeline(i)}t.previousNode=e}visitAnimateRef(e,t){const n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_visitSubInstructions(e,t,n){let r=t.currentTimeline.currentTime;const o=null!=n.duration?Oi(n.duration):null,i=null!=n.delay?Oi(n.delay):null;return 0!==o&&e.forEach(e=>{const n=t.appendInstructionToTimeline(e,o,i);r=Math.max(r,n.duration+n.delay)}),r}visitReference(e,t){t.updateOptions(e.options,!0),Wi(this,e.animation,t),t.previousNode=e}visitSequence(e,t){const n=t.subContextCount;let r=t;const o=e.options;if(o&&(o.params||o.delay)&&(r=t.createSubContext(o),r.transformIntoNewTimeline(),null!=o.delay)){6==r.previousNode.type&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=hs);const e=Oi(o.delay);r.delayNextStep(e)}e.steps.length&&(e.steps.forEach(e=>Wi(this,e,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){const n=[];let r=t.currentTimeline.currentTime;const o=e.options&&e.options.delay?Oi(e.options.delay):0;e.steps.forEach(i=>{const s=t.createSubContext(e.options);o&&s.delayNextStep(o),Wi(this,i,s),r=Math.max(r,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(e=>t.currentTimeline.mergeTimelineCollectedStyles(e)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){const n=e.strValue;return Ai(t.params?Vi(n,t.params,t.errors):n,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){const n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());const o=e.style;5==o.type?this.visitKeyframes(o,t):(t.incrementTime(n.duration),this.visitStyle(o,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){const n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.getCurrentStyleProperties().length&&n.forwardFrame();const o=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(o):n.setStyles(e.styles,o,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){const n=t.currentAnimateTimings,r=t.currentTimeline.duration,o=n.duration,i=t.createSubContext().currentTimeline;i.easing=n.easing,e.styles.forEach(e=>{i.forwardTime((e.offset||0)*o),i.setStyles(e.styles,e.easing,t.errors,t.options),i.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(i),t.transformIntoNewTimeline(r+o),t.previousNode=e}visitQuery(e,t){const n=t.currentTimeline.currentTime,r=e.options||{},o=r.delay?Oi(r.delay):0;o&&(6===t.previousNode.type||0==n&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=hs);let i=n;const s=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=s.length;let a=null;s.forEach((n,r)=>{t.currentQueryIndex=r;const s=t.createSubContext(e.options,n);o&&s.delayNextStep(o),n===t.element&&(a=s.currentTimeline),Wi(this,e.animation,s),s.currentTimeline.applyStylesToKeyframe(),i=Math.max(i,s.currentTimeline.currentTime)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(i),a&&(t.currentTimeline.mergeTimelineCollectedStyles(a),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){const n=t.parentContext,r=t.currentTimeline,o=e.timings,i=Math.abs(o.duration),s=i*(t.currentQueryTotal-1);let a=i*t.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":a=s-a;break;case"full":a=n.currentStaggerTime}const c=t.currentTimeline;a&&c.delayNextStep(a);const l=c.currentTime;Wi(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-l+(r.startTime-n.currentTimeline.startTime)}}const hs={};class ds{constructor(e,t,n,r,o,i,s,a){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=o,this.errors=i,this.timelines=s,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=hs,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=a||new fs(this._driver,t,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;const n=e;let r=this.options;null!=n.duration&&(r.duration=Oi(n.duration)),null!=n.delay&&(r.delay=Oi(n.delay));const o=n.params;if(o){let e=r.params;e||(e=this.options.params={}),Object.keys(o).forEach(n=>{t&&e.hasOwnProperty(n)||(e[n]=Vi(o[n],e,this.errors))})}}_copyOptions(){const e={};if(this.options){const t=this.options.params;if(t){const n=e.params={};Object.keys(t).forEach(e=>{n[e]=t[e]})}}return e}createSubContext(e=null,t,n){const r=t||this.element,o=new ds(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(e),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(e){return this.previousNode=hs,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){const r={duration:null!=t?t:e.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+e.delay,easing:""},o=new ps(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,r,o,i){let s=[];if(r&&s.push(this.element),e.length>0){e=(e=e.replace(as,"."+this._enterClassName)).replace(cs,"."+this._leaveClassName);let t=this._driver.query(this.element,e,1!=n);0!==n&&(t=n<0?t.slice(t.length+n,t.length):t.slice(0,n)),s.push(...t)}return o||0!=s.length||i.push(`\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`),s}}class fs{constructor(e,t,n,r){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const t=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new fs(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&(this._previousKeyframe.easing=e),Object.keys(this._globalTimelineStyles).forEach(e=>{this._backFill[e]=this._globalTimelineStyles[e]||"*",this._currentKeyframe[e]="*"}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,r){t&&(this._previousKeyframe.easing=t);const o=r&&r.params||{},i=function(e,t){const n={};let r;return e.forEach(e=>{"*"===e?(r=r||Object.keys(t),r.forEach(e=>{n[e]="*"})):ji(e,!1,n)}),n}(e,this._globalTimelineStyles);Object.keys(i).forEach(e=>{const t=Vi(i[e],o,n);this._pendingStyles[e]=t,this._localTimelineStyles.hasOwnProperty(e)||(this._backFill[e]=this._globalTimelineStyles.hasOwnProperty(e)?this._globalTimelineStyles[e]:"*"),this._updateStyle(e,t)})}applyStylesToKeyframe(){const e=this._pendingStyles,t=Object.keys(e);0!=t.length&&(this._pendingStyles={},t.forEach(t=>{this._currentKeyframe[t]=e[t]}),Object.keys(this._localTimelineStyles).forEach(e=>{this._currentKeyframe.hasOwnProperty(e)||(this._currentKeyframe[e]=this._localTimelineStyles[e])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(e=>{const t=this._localTimelineStyles[e];this._pendingStyles[e]=t,this._updateStyle(e,t)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){Object.keys(e._styleSummary).forEach(t=>{const n=this._styleSummary[t],r=e._styleSummary[t];(!n||r.time>n.time)&&this._updateStyle(t,r.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,t=new Set,n=1===this._keyframes.size&&0===this.duration;let r=[];this._keyframes.forEach((o,i)=>{const s=ji(o,!0);Object.keys(s).forEach(n=>{const r=s[n];"!"==r?e.add(n):"*"==r&&t.add(n)}),n||(s.offset=i/this.duration),r.push(s)});const o=e.size?Bi(e.values()):[],i=t.size?Bi(t.values()):[];if(n){const e=r[0],t=Pi(e);e.offset=0,t.offset=1,r=[e,t]}return is(this.element,r,o,i,this.duration,this.startTime,this.easing,!1)}}class ps extends fs{constructor(e,t,n,r,o,i,s=!1){super(e,t,i.delay),this.element=t,this.keyframes=n,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=s,this.timings={duration:i.duration,delay:i.delay,easing:i.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){const o=[],i=n+t,s=t/i,a=ji(e[0],!1);a.offset=0,o.push(a);const c=ji(e[0],!1);c.offset=gs(s),o.push(c);const l=e.length-1;for(let r=1;r<=l;r++){let s=ji(e[r],!1);s.offset=gs((t+s.offset*n)/i),o.push(s)}n=i,t=0,r="",e=o}return is(this.element,e,this.preStyleProps,this.postStyleProps,n,t,r,!0)}}function gs(e,t=3){const n=Math.pow(10,t-1);return Math.round(e*n)/n}class ms{}class ys extends ms{normalizePropertyName(e,t){return Hi(e)}normalizeStyleValue(e,t,n,r){let o="";const i=n.toString().trim();if(bs[t]&&0!==n&&"0"!==n)if("number"==typeof n)o="px";else{const t=n.match(/^[+-]?[\d\.]+([a-z]*)$/);t&&0==t[1].length&&r.push(`Please provide a CSS unit value for ${e}:${n}`)}return i+o}}const bs=(()=>function(e){const t={};return e.forEach(e=>t[e]=!0),t}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function vs(e,t,n,r,o,i,s,a,c,l,u,h,d){return{type:0,element:e,triggerName:t,isRemovalTransition:o,fromState:n,fromStyles:i,toState:r,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:u,totalTime:h,errors:d}}const _s={};class ws{constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,r){return function(e,t,n,r,o){return e.some(e=>e(t,n,r,o))}(this.ast.matchers,e,t,n,r)}buildStyles(e,t,n){const r=this._stateStyles["*"],o=this._stateStyles[e],i=r?r.buildStyles(t,n):{};return o?o.buildStyles(t,n):i}build(e,t,n,r,o,i,s,a,c,l){const u=[],h=this.ast.options&&this.ast.options.params||_s,d=this.buildStyles(n,s&&s.params||_s,u),f=a&&a.params||_s,p=this.buildStyles(r,f,u),g=new Set,m=new Map,y=new Map,b="void"===r,v={params:Object.assign(Object.assign({},h),f)},_=l?[]:ls(e,t,this.ast.animation,o,i,d,p,v,c,u);let w=0;if(_.forEach(e=>{w=Math.max(e.duration+e.delay,w)}),u.length)return vs(t,this._triggerName,n,r,b,d,p,[],[],m,y,w,u);_.forEach(e=>{const n=e.element,r=fi(m,n,{});e.preStyleProps.forEach(e=>r[e]=!0);const o=fi(y,n,{});e.postStyleProps.forEach(e=>o[e]=!0),n!==t&&g.add(n)});const x=Bi(g.values());return vs(t,this._triggerName,n,r,b,d,p,_,x,m,y,w)}}class xs{constructor(e,t){this.styles=e,this.defaultParams=t}buildStyles(e,t){const n={},r=Pi(this.defaultParams);return Object.keys(e).forEach(t=>{const n=e[t];null!=n&&(r[t]=n)}),this.styles.styles.forEach(e=>{if("string"!=typeof e){const o=e;Object.keys(o).forEach(e=>{let i=o[e];i.length>1&&(i=Vi(i,r,t)),n[e]=i})}}),n}}class Cs{constructor(e,t){this.name=e,this.ast=t,this.transitionFactories=[],this.states={},t.states.forEach(e=>{this.states[e.name]=new xs(e.style,e.options&&e.options.params||{})}),Es(this.states,"true","1"),Es(this.states,"false","0"),t.transitions.forEach(t=>{this.transitionFactories.push(new ws(e,t,this.states))}),this.fallbackTransition=new ws(e,{type:1,animation:{type:2,steps:[],options:null},matchers:[(e,t)=>!0],options:null,queryCount:0,depCount:0},this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,r){return this.transitionFactories.find(o=>o.match(e,t,n,r))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}}function Es(e,t,n){e.hasOwnProperty(t)?e.hasOwnProperty(n)||(e[n]=e[t]):e.hasOwnProperty(n)&&(e[t]=e[n])}const Ss=new ss;class ks{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n,this._animations={},this._playersById={},this.players=[]}register(e,t){const n=[],r=Xi(this._driver,t,n);if(n.length)throw new Error(`Unable to build the animation due to the following errors: ${n.join("\n")}`);this._animations[e]=r}_buildPlayer(e,t,n){const r=e.element,o=li(0,this._normalizer,0,e.keyframes,t,n);return this._driver.animate(r,o,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){const r=[],o=this._animations[e];let i;const s=new Map;if(o?(i=ls(this._driver,t,o,"ng-enter","ng-leave",{},{},n,Ss,r),i.forEach(e=>{const t=fi(s,e.element,{});e.postStyleProps.forEach(e=>t[e]=null)})):(r.push("The requested animation doesn't exist or has already been destroyed"),i=[]),r.length)throw new Error(`Unable to create the animation due to the following errors: ${r.join("\n")}`);s.forEach((e,t)=>{Object.keys(e).forEach(n=>{e[n]=this._driver.computeStyle(t,n,"*")})});const a=ci(i.map(e=>{const t=s.get(e.element);return this._buildPlayer(e,{},t)}));return this._playersById[e]=a,a.onDestroy(()=>this.destroy(e)),this.players.push(a),a}destroy(e){const t=this._getPlayer(e);t.destroy(),delete this._playersById[e];const n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){const t=this._playersById[e];if(!t)throw new Error(`Unable to find the timeline player referenced by ${e}`);return t}listen(e,t,n,r){const o=di(t,"","","");return ui(this._getPlayer(e),n,o,r),()=>{}}command(e,t,n,r){if("register"==n)return void this.register(e,r[0]);if("create"==n)return void this.create(e,t,r[0]||{});const o=this._getPlayer(e);switch(n){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e)}}}const Ds=[],Os={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Is={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class As{constructor(e,t=""){this.namespaceId=t;const n=e&&e.hasOwnProperty("value");if(this.value=null!=(r=n?e.value:e)?r:null,n){const t=Pi(e);delete t.value,this.options=t}else this.options={};var r;this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const t=e.params;if(t){const e=this.options.params;Object.keys(t).forEach(n=>{null==e[n]&&(e[n]=t[n])})}}}const Ps=new As("void");class js{constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,$s(t,this._hostClassName)}listen(e,t,n,r){if(!this._triggers.hasOwnProperty(t))throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`);if(null==n||0==n.length)throw new Error(`Unable to listen on the animation trigger "${t}" because the provided event is undefined!`);if("start"!=(o=n)&&"done"!=o)throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`);var o;const i=fi(this._elementListeners,e,[]),s={name:t,phase:n,callback:r};i.push(s);const a=fi(this._engine.statesByElement,e,{});return a.hasOwnProperty(t)||($s(e,"ng-trigger"),$s(e,"ng-trigger-"+t),a[t]=Ps),()=>{this._engine.afterFlush(()=>{const e=i.indexOf(s);e>=0&&i.splice(e,1),this._triggers[t]||delete a[t]})}}register(e,t){return!this._triggers[e]&&(this._triggers[e]=t,!0)}_getTrigger(e){const t=this._triggers[e];if(!t)throw new Error(`The provided animation trigger "${e}" has not been registered!`);return t}trigger(e,t,n,r=!0){const o=this._getTrigger(t),i=new Ns(this.id,t,e);let s=this._engine.statesByElement.get(e);s||($s(e,"ng-trigger"),$s(e,"ng-trigger-"+t),this._engine.statesByElement.set(e,s={}));let a=s[t];const c=new As(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&a&&c.absorbOptions(a.options),s[t]=c,a||(a=Ps),"void"!==c.value&&a.value===c.value){if(!function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!=r.length)return!1;for(let o=0;o<n.length;o++){const r=n[o];if(!t.hasOwnProperty(r)||e[r]!==t[r])return!1}return!0}(a.params,c.params)){const t=[],n=o.matchStyles(a.value,a.params,t),r=o.matchStyles(c.value,c.params,t);t.length?this._engine.reportError(t):this._engine.afterFlush(()=>{Fi(e,n),Ri(e,r)})}return}const l=fi(this._engine.playersByElement,e,[]);l.forEach(e=>{e.namespaceId==this.id&&e.triggerName==t&&e.queued&&e.destroy()});let u=o.matchTransition(a.value,c.value,e,c.params),h=!1;if(!u){if(!r)return;u=o.fallbackTransition,h=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:u,fromState:a,toState:c,player:i,isFallbackTransition:h}),h||($s(e,"ng-animate-queued"),i.onStart(()=>{Vs(e,"ng-animate-queued")})),i.onDone(()=>{let t=this.players.indexOf(i);t>=0&&this.players.splice(t,1);const n=this._engine.playersByElement.get(e);if(n){let e=n.indexOf(i);e>=0&&n.splice(e,1)}}),this.players.push(i),l.push(i),i}deregister(e){delete this._triggers[e],this._engine.statesByElement.forEach((t,n)=>{delete t[e]}),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(t=>t.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const t=this._engine.playersByElement.get(e);t&&(t.forEach(e=>e.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){const n=this._engine.driver.query(e,".ng-trigger",!0);n.forEach(e=>{if(e.__ng_removed)return;const n=this._engine.fetchNamespacesByElement(e);n.size?n.forEach(n=>n.triggerLeaveAnimation(e,t,!1,!0)):this.clearElementCache(e)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(e=>this.clearElementCache(e)))}triggerLeaveAnimation(e,t,n,r){const o=this._engine.statesByElement.get(e);if(o){const i=[];if(Object.keys(o).forEach(t=>{if(this._triggers[t]){const n=this.trigger(e,t,"void",r);n&&i.push(n)}}),i.length)return this._engine.markElementAsRemoved(this.id,e,!0,t),n&&ci(i).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const t=this._elementListeners.get(e);if(t){const n=new Set;t.forEach(t=>{const r=t.name;if(n.has(r))return;n.add(r);const o=this._triggers[r].fallbackTransition,i=this._engine.statesByElement.get(e)[r]||Ps,s=new As("void"),a=new Ns(this.id,r,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:r,transition:o,fromState:i,toState:s,player:a,isFallbackTransition:!0})})}}removeNode(e,t){const n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(n.totalAnimations){const t=n.players.length?n.playersByQueriedElement.get(e):[];if(t&&t.length)r=!0;else{let t=e;for(;t=t.parentNode;)if(n.statesByElement.get(t)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)n.markElementAsRemoved(this.id,e,!1,t);else{const r=e.__ng_removed;r&&r!==Os||(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){$s(e,this._hostClassName)}drainQueuedTransitions(e){const t=[];return this._queue.forEach(n=>{const r=n.player;if(r.destroyed)return;const o=n.element,i=this._elementListeners.get(o);i&&i.forEach(t=>{if(t.name==n.triggerName){const r=di(o,n.triggerName,n.fromState.value,n.toState.value);r._data=e,ui(n.player,t.phase,r,t.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(n)}),this._queue=[],t.sort((e,t)=>{const n=e.transition.ast.depCount,r=t.transition.ast.depCount;return 0==n||0==r?n-r:this._engine.driver.containsElement(e.element,t.element)?1:-1})}destroy(e){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let t=!1;return this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find(t=>t.element===e)||t,t}}class Ts{constructor(e,t,n){this.bodyNode=e,this.driver=t,this._normalizer=n,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(e,t)=>{}}_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(t=>{t.players.forEach(t=>{t.queued&&e.push(t)})}),e}createNamespace(e,t){const n=new js(e,t,this);return t.parentNode?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){const n=this._namespaceList.length-1;if(n>=0){let r=!1;for(let o=n;o>=0;o--)if(this.driver.containsElement(this._namespaceList[o].hostElement,t)){this._namespaceList.splice(o+1,0,e),r=!0;break}r||this._namespaceList.splice(0,0,e)}else this._namespaceList.push(e);return this.namespacesByHostElement.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}destroy(e,t){if(!e)return;const n=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(n.hostElement),delete this._namespaceLookup[e];const t=this._namespaceList.indexOf(n);t>=0&&this._namespaceList.splice(t,1)}),this.afterFlushAnimationsDone(()=>n.destroy(t))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const t=new Set,n=this.statesByElement.get(e);if(n){const e=Object.keys(n);for(let r=0;r<e.length;r++){const o=n[e[r]].namespaceId;if(o){const e=this._fetchNamespace(o);e&&t.add(e)}}}return t}trigger(e,t,n,r){if(Rs(t)){const o=this._fetchNamespace(e);if(o)return o.trigger(t,n,r),!0}return!1}insertNode(e,t,n,r){if(!Rs(t))return;const o=t.__ng_removed;if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;const e=this.collectedLeaveElements.indexOf(t);e>=0&&this.collectedLeaveElements.splice(e,1)}if(e){const r=this._fetchNamespace(e);r&&r.insertNode(t,n)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),$s(e,"ng-animate-disabled")):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),Vs(e,"ng-animate-disabled"))}removeNode(e,t,n,r){if(Rs(t)){const o=e?this._fetchNamespace(e):null;if(o?o.removeNode(t,r):this.markElementAsRemoved(e,t,!1,r),n){const n=this.namespacesByHostElement.get(t);n&&n.id!==e&&n.removeNode(t,r)}}else this._onRemovalComplete(t,r)}markElementAsRemoved(e,t,n,r){this.collectedLeaveElements.push(t),t.__ng_removed={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1}}listen(e,t,n,r,o){return Rs(t)?this._fetchNamespace(e).listen(t,n,r,o):()=>{}}_buildInstruction(e,t,n,r,o){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,o)}destroyInnerAnimations(e){let t=this.driver.query(e,".ng-trigger",!0);t.forEach(e=>this.destroyActiveAnimationsForElement(e)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(e,".ng-animating",!0),t.forEach(e=>this.finishActiveQueriedAnimationOnElement(e)))}destroyActiveAnimationsForElement(e){const t=this.playersByElement.get(e);t&&t.forEach(e=>{e.queued?e.markedForDestroy=!0:e.destroy()})}finishActiveQueriedAnimationOnElement(e){const t=this.playersByQueriedElement.get(e);t&&t.forEach(e=>e.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return ci(this.players).onDone(()=>e());e()})}processLeaveNode(e){const t=e.__ng_removed;if(t&&t.setForRemoval){if(e.__ng_removed=Os,t.namespaceId){this.destroyInnerAnimations(e);const n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}this.driver.matchesElement(e,".ng-animate-disabled")&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(e=>{this.markElementAsDisabled(e,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((e,t)=>this._balanceNamespaceList(e,t)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++)$s(this.collectedEnterElements[n],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const n=[];try{t=this._flushAnimations(n,e)}finally{for(let e=0;e<n.length;e++)n[e]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++)this.processLeaveNode(this.collectedLeaveElements[n]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(e=>e()),this._flushFns=[],this._whenQuietFns.length){const e=this._whenQuietFns;this._whenQuietFns=[],t.length?ci(t).onDone(()=>{e.forEach(e=>e())}):e.forEach(e=>e())}}reportError(e){throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${e.join("\n")}`)}_flushAnimations(e,t){const n=new ss,r=[],o=new Map,i=[],s=new Map,a=new Map,c=new Map,l=new Set;this.disabledNodes.forEach(e=>{l.add(e);const t=this.driver.query(e,".ng-animate-queued",!0);for(let n=0;n<t.length;n++)l.add(t[n])});const u=this.bodyNode,h=Array.from(this.statesByElement.keys()),d=Ls(h,this.collectedEnterElements),f=new Map;let p=0;d.forEach((e,t)=>{const n="ng-enter"+p++;f.set(t,n),e.forEach(e=>$s(e,n))});const g=[],m=new Set,y=new Set;for(let A=0;A<this.collectedLeaveElements.length;A++){const e=this.collectedLeaveElements[A],t=e.__ng_removed;t&&t.setForRemoval&&(g.push(e),m.add(e),t.hasAnimation?this.driver.query(e,".ng-star-inserted",!0).forEach(e=>m.add(e)):y.add(e))}const b=new Map,v=Ls(h,Array.from(m));v.forEach((e,t)=>{const n="ng-leave"+p++;b.set(t,n),e.forEach(e=>$s(e,n))}),e.push(()=>{d.forEach((e,t)=>{const n=f.get(t);e.forEach(e=>Vs(e,n))}),v.forEach((e,t)=>{const n=b.get(t);e.forEach(e=>Vs(e,n))}),g.forEach(e=>{this.processLeaveNode(e)})});const _=[],w=[];for(let A=this._namespaceList.length-1;A>=0;A--)this._namespaceList[A].drainQueuedTransitions(t).forEach(e=>{const t=e.player,o=e.element;if(_.push(t),this.collectedEnterElements.length){const e=o.__ng_removed;if(e&&e.setForMove)return void t.destroy()}const l=!u||!this.driver.containsElement(u,o),h=b.get(o),d=f.get(o),p=this._buildInstruction(e,n,d,h,l);if(!p.errors||!p.errors.length)return l||e.isFallbackTransition?(t.onStart(()=>Fi(o,p.fromStyles)),t.onDestroy(()=>Ri(o,p.toStyles)),void r.push(t)):(p.timelines.forEach(e=>e.stretchStartingKeyframe=!0),n.append(o,p.timelines),i.push({instruction:p,player:t,element:o}),p.queriedElements.forEach(e=>fi(s,e,[]).push(t)),p.preStyleProps.forEach((e,t)=>{const n=Object.keys(e);if(n.length){let e=a.get(t);e||a.set(t,e=new Set),n.forEach(t=>e.add(t))}}),void p.postStyleProps.forEach((e,t)=>{const n=Object.keys(e);let r=c.get(t);r||c.set(t,r=new Set),n.forEach(e=>r.add(e))}));w.push(p)});if(w.length){const e=[];w.forEach(t=>{e.push(`@${t.triggerName} has failed due to:\n`),t.errors.forEach(t=>e.push(`- ${t}\n`))}),_.forEach(e=>e.destroy()),this.reportError(e)}const x=new Map,C=new Map;i.forEach(e=>{const t=e.element;n.has(t)&&(C.set(t,t),this._beforeAnimationBuild(e.player.namespaceId,e.instruction,x))}),r.forEach(e=>{const t=e.element;this._getPreviousPlayers(t,!1,e.namespaceId,e.triggerName,null).forEach(e=>{fi(x,t,[]).push(e),e.destroy()})});const E=g.filter(e=>Us(e,a,c)),S=new Map;Ms(S,this.driver,y,c,"*").forEach(e=>{Us(e,a,c)&&E.push(e)});const k=new Map;d.forEach((e,t)=>{Ms(k,this.driver,new Set(e),a,"!")}),E.forEach(e=>{const t=S.get(e),n=k.get(e);S.set(e,Object.assign(Object.assign({},t),n))});const D=[],O=[],I={};i.forEach(e=>{const{element:t,player:i,instruction:s}=e;if(n.has(t)){if(l.has(t))return i.onDestroy(()=>Ri(t,s.toStyles)),i.disabled=!0,i.overrideTotalTime(s.totalTime),void r.push(i);let e=I;if(C.size>1){let n=t;const r=[];for(;n=n.parentNode;){const t=C.get(n);if(t){e=t;break}r.push(n)}r.forEach(t=>C.set(t,e))}const n=this._buildAnimation(i.namespaceId,s,x,o,k,S);if(i.setRealPlayer(n),e===I)D.push(i);else{const t=this.playersByElement.get(e);t&&t.length&&(i.parentPlayer=ci(t)),r.push(i)}}else Fi(t,s.fromStyles),i.onDestroy(()=>Ri(t,s.toStyles)),O.push(i),l.has(t)&&r.push(i)}),O.forEach(e=>{const t=o.get(e.element);if(t&&t.length){const n=ci(t);e.setRealPlayer(n)}}),r.forEach(e=>{e.parentPlayer?e.syncPlayerEvents(e.parentPlayer):e.destroy()});for(let A=0;A<g.length;A++){const e=g[A],t=e.__ng_removed;if(Vs(e,"ng-leave"),t&&t.hasAnimation)continue;let n=[];if(s.size){let t=s.get(e);t&&t.length&&n.push(...t);let r=this.driver.query(e,".ng-animating",!0);for(let e=0;e<r.length;e++){let t=s.get(r[e]);t&&t.length&&n.push(...t)}}const r=n.filter(e=>!e.destroyed);r.length?Bs(this,e,r):this.processLeaveNode(e)}return g.length=0,D.forEach(e=>{this.players.push(e),e.onDone(()=>{e.destroy();const t=this.players.indexOf(e);this.players.splice(t,1)}),e.play()}),D}elementContainsData(e,t){let n=!1;const r=t.__ng_removed;return r&&r.setForRemoval&&(n=!0),this.playersByElement.has(t)&&(n=!0),this.playersByQueriedElement.has(t)&&(n=!0),this.statesByElement.has(t)&&(n=!0),this._fetchNamespace(e).elementContainsData(t)||n}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,r,o){let i=[];if(t){const t=this.playersByQueriedElement.get(e);t&&(i=t)}else{const t=this.playersByElement.get(e);if(t){const e=!o||"void"==o;t.forEach(t=>{t.queued||(e||t.triggerName==r)&&i.push(t)})}}return(n||r)&&(i=i.filter(e=>!(n&&n!=e.namespaceId||r&&r!=e.triggerName))),i}_beforeAnimationBuild(e,t,n){const r=t.element,o=t.isRemovalTransition?void 0:e,i=t.isRemovalTransition?void 0:t.triggerName;for(const s of t.timelines){const e=s.element,a=e!==r,c=fi(n,e,[]);this._getPreviousPlayers(e,a,o,i,t.toState).forEach(e=>{const t=e.getRealPlayer();t.beforeDestroy&&t.beforeDestroy(),e.destroy(),c.push(e)})}Fi(r,t.fromStyles)}_buildAnimation(e,t,n,r,o,i){const s=t.triggerName,a=t.element,c=[],l=new Set,u=new Set,h=t.timelines.map(t=>{const h=t.element;l.add(h);const d=h.__ng_removed;if(d&&d.removedBeforeQueried)return new ii(t.duration,t.delay);const f=h!==a,p=function(e){const t=[];return function e(t,n){for(let r=0;r<t.length;r++){const o=t[r];o instanceof si?e(o.players,n):n.push(o)}}(e,t),t}((n.get(h)||Ds).map(e=>e.getRealPlayer())).filter(e=>!!e.element&&e.element===h),g=o.get(h),m=i.get(h),y=li(0,this._normalizer,0,t.keyframes,g,m),b=this._buildPlayer(t,y,p);if(t.subTimeline&&r&&u.add(h),f){const t=new Ns(e,s,h);t.setRealPlayer(b),c.push(t)}return b});c.forEach(e=>{fi(this.playersByQueriedElement,e.element,[]).push(e),e.onDone(()=>function(e,t,n){let r;if(e instanceof Map){if(r=e.get(t),r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&e.delete(t)}}else if(r=e[t],r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&delete e[t]}return r}(this.playersByQueriedElement,e.element,e))}),l.forEach(e=>$s(e,"ng-animating"));const d=ci(h);return d.onDestroy(()=>{l.forEach(e=>Vs(e,"ng-animating")),Ri(a,t.toStyles)}),u.forEach(e=>{fi(r,e,[]).push(d)}),d}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new ii(e.duration,e.delay)}}class Ns{constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n,this._player=new ii,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,Object.keys(this._queuedCallbacks).forEach(t=>{this._queuedCallbacks[t].forEach(n=>ui(e,t,void 0,n))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){fi(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const t=this._player;t.triggerCallback&&t.triggerCallback(e)}}function Rs(e){return e&&1===e.nodeType}function Fs(e,t){const n=e.style.display;return e.style.display=null!=t?t:"none",n}function Ms(e,t,n,r,o){const i=[];n.forEach(e=>i.push(Fs(e)));const s=[];r.forEach((n,r)=>{const i={};n.forEach(e=>{const n=i[e]=t.computeStyle(r,e,o);n&&0!=n.length||(r.__ng_removed=Is,s.push(r))}),e.set(r,i)});let a=0;return n.forEach(e=>Fs(e,i[a++])),s}function Ls(e,t){const n=new Map;if(e.forEach(e=>n.set(e,[])),0==t.length)return n;const r=new Set(t),o=new Map;return t.forEach(e=>{const t=function e(t){if(!t)return 1;let i=o.get(t);if(i)return i;const s=t.parentNode;return i=n.has(s)?s:r.has(s)?1:e(s),o.set(t,i),i}(e);1!==t&&n.get(t).push(e)}),n}function $s(e,t){if(e.classList)e.classList.add(t);else{let n=e.$$classes;n||(n=e.$$classes={}),n[t]=!0}}function Vs(e,t){if(e.classList)e.classList.remove(t);else{let n=e.$$classes;n&&delete n[t]}}function Bs(e,t,n){ci(n).onDone(()=>e.processLeaveNode(t))}function Us(e,t,n){const r=n.get(e);if(!r)return!1;let o=t.get(e);return o?r.forEach(e=>o.add(e)):t.set(e,r),n.delete(e),!0}class Hs{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._triggerCache={},this.onRemovalComplete=(e,t)=>{},this._transitionEngine=new Ts(e,t,n),this._timelineEngine=new ks(e,t,n),this._transitionEngine.onRemovalComplete=(e,t)=>this.onRemovalComplete(e,t)}registerTrigger(e,t,n,r,o){const i=e+"-"+r;let s=this._triggerCache[i];if(!s){const e=[],t=Xi(this._driver,o,e);if(e.length)throw new Error(`The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join("\n - ")}`);s=function(e,t){return new Cs(e,t)}(r,t),this._triggerCache[i]=s}this._transitionEngine.registerTrigger(t,r,s)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}onRemove(e,t,n,r){this._transitionEngine.removeNode(e,t,r||!1,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,r){if("@"==n.charAt(0)){const[e,o]=pi(n);this._timelineEngine.command(e,t,o,r)}else this._transitionEngine.trigger(e,t,n,r)}listen(e,t,n,r,o){if("@"==n.charAt(0)){const[e,r]=pi(n);return this._timelineEngine.listen(e,t,r,o)}return this._transitionEngine.listen(e,t,n,r,o)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}function zs(e,t){let n=null,r=null;return Array.isArray(t)&&t.length?(n=Ws(t[0]),t.length>1&&(r=Ws(t[t.length-1]))):t&&(n=Ws(t)),n||r?new qs(e,n,r):null}let qs=(()=>{class e{constructor(t,n,r){this._element=t,this._startStyles=n,this._endStyles=r,this._state=0;let o=e.initialStylesByElement.get(t);o||e.initialStylesByElement.set(t,o={}),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&Ri(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Ri(this._element,this._initialStyles),this._endStyles&&(Ri(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(Fi(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Fi(this._element,this._endStyles),this._endStyles=null),Ri(this._element,this._initialStyles),this._state=3)}}return e.initialStylesByElement=new WeakMap,e})();function Ws(e){let t=null;const n=Object.keys(e);for(let r=0;r<n.length;r++){const o=n[r];Qs(o)&&(t=t||{},t[o]=e[o])}return t}function Qs(e){return"display"===e||"position"===e}class Ks{constructor(e,t,n,r,o,i,s){this._element=e,this._name=t,this._duration=n,this._delay=r,this._easing=o,this._fillMode=i,this._onDoneFn=s,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=e=>this._handleCallback(e)}apply(){!function(e,t){const n=ea(e,"").trim();n.length&&(function(e,t){let n=0;for(let r=0;r<e.length;r++)","===e.charAt(r)&&n++}(n),t=`${n}, ${t}`),Xs(e,"",t)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),Js(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){Gs(this._element,this._name,"paused")}resume(){Gs(this._element,this._name,"running")}setPosition(e){const t=Zs(this._element,this._name);this._position=e*this._duration,Xs(this._element,"Delay",`-${this._position}ms`,t)}getPosition(){return this._position}_handleCallback(e){const t=e._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(e.elapsedTime.toFixed(3));e.animationName==this._name&&Math.max(t-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}finish(){this._finished||(this._finished=!0,this._onDoneFn(),Js(this._element,this._eventFn,!0))}destroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(e,t){const n=ea(e,"").split(","),r=Ys(n,t);r>=0&&(n.splice(r,1),Xs(e,"",n.join(",")))}(this._element,this._name))}}function Gs(e,t,n){Xs(e,"PlayState",n,Zs(e,t))}function Zs(e,t){const n=ea(e,"");return n.indexOf(",")>0?Ys(n.split(","),t):Ys([n],t)}function Ys(e,t){for(let n=0;n<e.length;n++)if(e[n].indexOf(t)>=0)return n;return-1}function Js(e,t,n){n?e.removeEventListener("animationend",t):e.addEventListener("animationend",t)}function Xs(e,t,n,r){const o="animation"+t;if(null!=r){const t=e.style[o];if(t.length){const e=t.split(",");e[r]=n,n=e.join(",")}}e.style[o]=n}function ea(e,t){return e.style["animation"+t]}class ta{constructor(e,t,n,r,o,i,s,a){this.element=e,this.keyframes=t,this.animationName=n,this._duration=r,this._delay=o,this._finalStyles=s,this._specialStyles=a,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=i||"linear",this.totalTime=r+o,this._buildStyler()}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}destroy(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}_flushDoneFns(){this._onDoneFns.forEach(e=>e()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}finish(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}setPosition(e){this._styler.setPosition(e)}getPosition(){return this._styler.getPosition()}hasStarted(){return this._state>=2}init(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}play(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}pause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}reset(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}_buildStyler(){this._styler=new Ks(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}beforeDestroy(){this.init();const e={};if(this.hasStarted()){const t=this._state>=3;Object.keys(this._finalStyles).forEach(n=>{"offset"!=n&&(e[n]=t?this._finalStyles[n]:Qi(this.element,n))})}this.currentSnapshot=e}}class na extends ii{constructor(e,t){super(),this.element=e,this._startingStyles={},this.__initialized=!1,this._styles=Si(t)}init(){!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach(e=>{this._startingStyles[e]=this.element.style[e]}),super.init())}play(){this._startingStyles&&(this.init(),Object.keys(this._styles).forEach(e=>this.element.style.setProperty(e,this._styles[e])),super.play())}destroy(){this._startingStyles&&(Object.keys(this._startingStyles).forEach(e=>{const t=this._startingStyles[e];t?this.element.style.setProperty(e,t):this.element.style.removeProperty(e)}),this._startingStyles=null,super.destroy())}}class ra{constructor(){this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}validateStyleProperty(e){return wi(e)}matchesElement(e,t){return xi(e,t)}containsElement(e,t){return Ci(e,t)}query(e,t,n){return Ei(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}buildKeyframeElement(e,t,n){n=n.map(e=>Si(e));let r=`@keyframes ${t} {\n`,o="";n.forEach(e=>{o=" ";const t=parseFloat(e.offset);r+=`${o}${100*t}% {\n`,o+=" ",Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"offset":return;case"easing":return void(n&&(r+=`${o}animation-timing-function: ${n};\n`));default:return void(r+=`${o}${t}: ${n};\n`)}}),r+=`${o}}\n`}),r+="}\n";const i=document.createElement("style");return i.innerHTML=r,i}animate(e,t,n,r,o,i=[],s){s&&this._notifyFaultyScrubber();const a=i.filter(e=>e instanceof ta),c={};zi(n,r)&&a.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const l=function(e){let t={};return e&&(Array.isArray(e)?e:[e]).forEach(e=>{Object.keys(e).forEach(n=>{"offset"!=n&&"easing"!=n&&(t[n]=e[n])})}),t}(t=qi(e,t,c));if(0==n)return new na(e,l);const u=`gen_css_kf_${this._count++}`,h=this.buildKeyframeElement(e,u,t);document.querySelector("head").appendChild(h);const d=zs(e,t),f=new ta(e,t,u,n,r,o,l,d);return f.onDestroy(()=>{var e;(e=h).parentNode.removeChild(e)}),f}_notifyFaultyScrubber(){this._warningIssued||(console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n","  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."),this._warningIssued=!0)}}class oa{constructor(e,t,n,r){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(e,t,n){return e.animate(t,n)}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(t=>{"offset"!=t&&(e[t]=this._finished?this._finalKeyframe[t]:Qi(this.element,t))}),this.currentSnapshot=e}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class ia{constructor(){this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test(sa().toString()),this._cssKeyframesDriver=new ra}validateStyleProperty(e){return wi(e)}matchesElement(e,t){return xi(e,t)}containsElement(e,t){return Ci(e,t)}query(e,t,n){return Ei(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}overrideWebAnimationsSupport(e){this._isNativeImpl=e}animate(e,t,n,r,o,i=[],s){if(!s&&!this._isNativeImpl)return this._cssKeyframesDriver.animate(e,t,n,r,o,i);const a={duration:n,delay:r,fill:0==r?"both":"forwards"};o&&(a.easing=o);const c={},l=i.filter(e=>e instanceof oa);zi(n,r)&&l.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const u=zs(e,t=qi(e,t=t.map(e=>ji(e,!1)),c));return new oa(e,t,a,u)}}function sa(){return"undefined"!=typeof window&&void 0!==window.document&&Element.prototype.animate||{}}let aa=(()=>{class e extends ti{constructor(e,t){super(),this._nextAnimationId=0,this._renderer=e.createRenderer(t.body,{id:"0",encapsulation:r.ViewEncapsulation.None,styles:[],data:{animation:[]}})}build(e){const t=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(e)?ni(e):e;return ua(this._renderer,null,t,"register",[n]),new ca(t,this._renderer)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.RendererFactory2),r["\u0275\u0275inject"](o.DOCUMENT))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class ca extends class{}{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new la(this._id,e,t||{},this._renderer)}}class la{constructor(e,t,n,r){this.id=e,this.element=t,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return ua(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset")}setPosition(e){this._command("setPosition",e)}getPosition(){return 0}}function ua(e,t,n,r,o){return e.setProperty(t,`@@${n}:${r}`,o)}let ha=(()=>{class e{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),t.onRemovalComplete=(e,t)=>{t&&t.parentNode(e)&&t.removeChild(e.parentNode,e)}}createRenderer(e,t){const n=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation)){let e=this._rendererCache.get(n);return e||(e=new da("",n,this.engine),this._rendererCache.set(n,e)),e}const r=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);const i=t=>{Array.isArray(t)?t.forEach(i):this.engine.registerTrigger(r,o,e,t.name,t)};return t.data.animation.forEach(i),new fa(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){e>=0&&e<this._microtaskId?this._zone.run(()=>t(n)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(e=>{const[t,n]=e;t(n)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([t,n]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](r.RendererFactory2),r["\u0275\u0275inject"](Hs),r["\u0275\u0275inject"](r.NgZone))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class da{constructor(e,t,n){this.namespaceId=e,this.delegate=t,this.engine=n,this.destroyNode=this.delegate.destroyNode?e=>t.destroyNode(e):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,!0)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){"@"==t.charAt(0)&&"@.disabled"==t?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class fa extends da{constructor(e,t,n,r){super(t,n,r),this.factory=e,this.namespaceId=t}setProperty(e,t,n){"@"==t.charAt(0)?"."==t.charAt(1)&&"@.disabled"==t?this.disableAnimations(e,n=void 0===n||!!n):this.engine.process(this.namespaceId,e,t.substr(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if("@"==t.charAt(0)){const r=function(e){switch(e){case"body":return document.body;case"document":return document;case"window":return window;default:return e}}(e);let o=t.substr(1),i="";return"@"!=o.charAt(0)&&([o,i]=function(e){const t=e.indexOf(".");return[e.substring(0,t),e.substr(t+1)]}(o)),this.engine.listen(this.namespaceId,r,o,i,e=>{this.factory.scheduleListenerCallback(e._data||-1,n,e)})}return this.delegate.listen(e,t,n)}}let pa=(()=>{class e extends Hs{constructor(e,t,n){super(e.body,t,n)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](o.DOCUMENT),r["\u0275\u0275inject"](Di),r["\u0275\u0275inject"](ms))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const ga=[{provide:Di,useFactory:function(){return"function"==typeof sa()?new ia:new ra}},{provide:new r.InjectionToken("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:ti,useClass:aa},{provide:ms,useFactory:function(){return new ys}},{provide:Hs,useClass:pa},{provide:r.RendererFactory2,useFactory:function(e,t,n){return new ha(e,t,n)},deps:[w,Hs,r.NgZone]}];let ma=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:ga,imports:[N]}),e})(),ya=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})(),ba=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[ze,ya]]}),e})(),va=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[ze]]}),e})(),_a=(()=>{class e{constructor(e,t){Object(o.isPlatformServer)(t)&&!e&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(t,n=[]){return{ngModule:e,providers:t.serverLoaded?[{provide:Ke,useValue:Object.assign(Object.assign({},Qe),t)},{provide:Ze,useValue:n,multi:!0},{provide:Ge,useValue:!0}]:[{provide:Ke,useValue:Object.assign(Object.assign({},Qe),t)},{provide:Ze,useValue:n,multi:!0}]}}}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)(r["\u0275\u0275inject"](Ge),r["\u0275\u0275inject"](r.PLATFORM_ID))},imports:[[ba,At,va],ba,At,va]}),e})(),wa=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,Lo,_a]]}),e})(),xa=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule]]}),e})(),Ca=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule]]}),e})(),Ea=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,xa,Ca]]}),e})(),Sa=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,Ea]]}),e})();function ka(e){return(ka="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Da(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oa(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Da(e,t,n[t])}))}return e}function Ia(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Aa={},Pa={};try{"undefined"!=typeof window&&(Aa=window),"undefined"!=typeof document&&(Pa=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(Pc){}var ja=(Aa.navigator||{}).userAgent,Ta=void 0===ja?"":ja,Na=Aa,Ra=Pa,Fa=!!Ra.documentElement&&!!Ra.head&&"function"==typeof Ra.addEventListener&&"function"==typeof Ra.createElement,Ma=(~Ta.indexOf("MSIE")||Ta.indexOf("Trident/"),[1,2,3,4,5,6,7,8,9,10]),La=Ma.concat([11,12,13,14,15,16,17,18,19,20]),$a={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Va=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",$a.GROUP,$a.SWAP_OPACITY,$a.PRIMARY,$a.SECONDARY].concat(Ma.map((function(e){return"".concat(e,"x")}))).concat(La.map((function(e){return"w-".concat(e)}))),Na.FontAwesomeConfig||{});Ra&&"function"==typeof Ra.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=Ia(e,2),n=t[1],r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Ra.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=r&&(Va[n]=r)}));var Ba=Oa({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Va);Ba.autoReplaceSvg||(Ba.observeMutations=!1);var Ua=Oa({},Ba);Na.FontAwesomeConfig=Ua;var Ha=Na||{};Ha.___FONT_AWESOME___||(Ha.___FONT_AWESOME___={}),Ha.___FONT_AWESOME___.styles||(Ha.___FONT_AWESOME___.styles={}),Ha.___FONT_AWESOME___.hooks||(Ha.___FONT_AWESOME___.hooks={}),Ha.___FONT_AWESOME___.shims||(Ha.___FONT_AWESOME___.shims=[]);var za=Ha.___FONT_AWESOME___,qa=[];Fa&&((Ra.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ra.readyState)||Ra.addEventListener("DOMContentLoaded",(function e(){Ra.removeEventListener("DOMContentLoaded",e),qa.map((function(e){return e()}))})));var Wa,Qa=function(){},Ka="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,Ga="undefined"==typeof setImmediate?setTimeout:setImmediate,Za=[];function Ya(){for(var e=0;e<Za.length;e++)Za[e][0](Za[e][1]);Za=[],Wa=!1}function Ja(e,t){Za.push([e,t]),Wa||(Wa=!0,Ga(Ya,0))}function Xa(e){var t=e.owner,n=t._state,r=t._data,o=e[n],i=e.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(Pc){rc(i,Pc)}}ec(i,r)||("fulfilled"===n&&tc(i,r),"rejected"===n&&rc(i,r))}function ec(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===ka(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){n||(n=!0,t===r?nc(e,r):tc(e,r))}),(function(t){n||(n=!0,rc(e,t))})),!0}}catch(Pc){return n||rc(e,Pc),!0}return!1}function tc(e,t){e!==t&&ec(e,t)||nc(e,t)}function nc(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Ja(ic,e))}function rc(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Ja(sc,e))}function oc(e){e._then=e._then.forEach(Xa)}function ic(e){e._state="fulfilled",oc(e)}function sc(e){e._state="rejected",oc(e),!e._handled&&Ka&&global.process.emit("unhandledRejection",e._data,e)}function ac(e){global.process.emit("rejectionHandled",e)}function cc(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof cc==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){rc(t,e)}try{e((function(e){tc(t,e)}),n)}catch(Pc){n(Pc)}}(e,this)}cc.prototype={constructor:cc,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(Qa),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&Ka&&Ja(ac,this)),"fulfilled"===this._state||"rejected"===this._state?Ja(Xa,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},cc.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new cc((function(t,n){var r=[],o=0;function i(e){return o++,function(n){r[e]=n,--o||t(r)}}for(var s,a=0;a<e.length;a++)(s=e[a])&&"function"==typeof s.then?s.then(i(a),n):r[a]=s;o||t(r)}))},cc.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new cc((function(t,n){for(var r,o=0;o<e.length;o++)(r=e[o])&&"function"==typeof r.then?r.then(t,n):t(r)}))},cc.resolve=function(e){return e&&"object"===ka(e)&&e.constructor===cc?e:new cc((function(t){t(e)}))},cc.reject=function(e){return new cc((function(t,n){n(e)}))};var lc=function(e,t,n,r){var o,i,s,a=Object.keys(e),c=a.length,l=void 0!==r?function(e,t){return function(n,r,o,i){return e.call(t,n,r,o,i)}}(t,r):t;for(void 0===n?(o=1,s=e[a[0]]):(o=0,s=n);o<c;o++)s=l(s,e[i=a[o]],i,e);return s};function uc(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,o=void 0!==r&&r,i=Object.keys(t).reduce((function(e,n){var r=t[n];return r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof za.hooks.addPack||o?za.styles[e]=Oa({},za.styles[e]||{},i):za.hooks.addPack(e,i),"fas"===e&&uc("fa",t)}var hc=za.styles,dc=za.shims,fc=function(){var e=function(e){return lc(hc,(function(t,n,r){return t[r]=lc(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in hc;lc(dc,(function(e,n){var r=n[1];return"far"!==r||t||(r="fas"),e[n[0]]={prefix:r,iconName:n[2]},e}),{})};function pc(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}fc(),(pc.prototype=Object.create(Error.prototype)).constructor=pc;var gc={fill:"currentColor"},mc={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},yc=(Oa({},gc,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),Oa({},mc,{attributeName:"opacity"}));Oa({},gc,{cx:"256",cy:"364",r:"28"}),Oa({},mc,{attributeName:"r",values:"28;14;28;28;14;28;"}),Oa({},yc,{values:"1;0;1;1;0;1;"}),Oa({},gc,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Oa({},yc,{values:"1;0;0;0;0;1;"}),Oa({},gc,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Oa({},yc,{values:"0;0;1;1;0;0;"}),new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=Oa({},e.definitions[t]||{},o[t]),uc(t,o[t]),fc()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],o=r.prefix,i=r.iconName,s=r.icon;e[o]||(e[o]={}),e[o][i]=s})),e}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}());let bc=(()=>{let e=class{};return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();n("1X/a");let vc=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-home"]],decls:24,vars:0,consts:[["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"h1"),r["\u0275\u0275text"](1,"Welcome to DontCode !"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](2,"h2"),r["\u0275\u0275text"](3,"What am I seeing ?"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](4,"p"),r["\u0275\u0275text"](5,"You have opened the Preview App. The Preview App connects to Online services to receive Application changes from the Application Builder in realtime."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"p"),r["\u0275\u0275elementStart"](7,"b"),r["\u0275\u0275text"](8,"Check you are connected"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](9," to the online service by looking at the "),r["\u0275\u0275element"](10,"kor-icon",0),r["\u0275\u0275text"](11," icon in the header panel."),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](12,"p"),r["\u0275\u0275element"](13,"kor-icon",0),r["\u0275\u0275text"](14," means you are ok, "),r["\u0275\u0275element"](15,"kor-icon",1),r["\u0275\u0275text"](16," you have connection issue to the online service. Please check the browser log in this case"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](17,"p"),r["\u0275\u0275text"](18,"If "),r["\u0275\u0275element"](19,"kor-icon",0),r["\u0275\u0275text"](20,", then "),r["\u0275\u0275elementStart"](21,"b"),r["\u0275\u0275text"](22,"go back to the Application Builder"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](23," and enter some values in the Editor"),r["\u0275\u0275elementEnd"]())},styles:[""]}),e})(),_c=(()=>{class e{constructor(e){this.commandService=e,this.position="creation/name",this.value="New Test"}ngOnInit(){}addCommand(e){this.commandService.pushCommand(new me(ye.ADD,this.position,this.value))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Se))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-insert-command"]],decls:9,vars:2,consts:[["label","Add Command","expanded",""],["label","position","type","select",3,"value","value-changed"],["label","creation/name"],["label","creation/entities/a/name"],["label","creation/screens/a/name"],["label","creation/entities/b/name"],["label","creation/screens/b/name"],["label","value",3,"value","value-changed"],["slot","footer","label","Add",3,"click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"kor-accordion",0),r["\u0275\u0275elementStart"](1,"kor-input",1),r["\u0275\u0275listener"]("value-changed",(function(e){return t.position=e.target.value})),r["\u0275\u0275element"](2,"kor-menu-item",2),r["\u0275\u0275element"](3,"kor-menu-item",3),r["\u0275\u0275element"](4,"kor-menu-item",4),r["\u0275\u0275element"](5,"kor-menu-item",5),r["\u0275\u0275element"](6,"kor-menu-item",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"kor-input",7),r["\u0275\u0275listener"]("value-changed",(function(e){return t.value=e.target.value})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](8,"kor-button",8),r["\u0275\u0275listener"]("click",(function(e){return t.addCommand(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("value",t.position),r["\u0275\u0275advance"](6),r["\u0275\u0275property"]("value",t.value))},styles:[""]}),e})();function wc(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275pipe"](2,"json"),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate3"]("",e.type,", ",e.position,", ",r["\u0275\u0275pipeBind1"](2,3,e.value),"")}}function xc(e,t){if(1&e&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275elementStart"](1,"p"),r["\u0275\u0275text"](2,"We list below the commands received from the Application Builder:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,wc,3,5,"p",1),r["\u0275\u0275elementContainerEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("ngForOf",e.commands)}}let Cc=(()=>{class e{constructor(e){this.providerService=e,this.commands=[],this.forgetIt=!0}ngOnInit(){this.context$=U([this.providerService.receiveCommands()]).pipe(Object(K.a)(e=>(this.forgetIt?this.forgetIt=!1:this.commands.push(e[0]),{command:e[0]})))}noCommands(){return 0==this.commands.length}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](Se))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-list-commands"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,xc,4,1,"ng-container",0),r["\u0275\u0275pipe"](1,"async")),2&e&&r["\u0275\u0275property"]("ngIf",r["\u0275\u0275pipeBind1"](1,1,t.context$))},directives:[o.NgIf,o.NgForOf],pipes:[o.AsyncPipe,o.JsonPipe],styles:[""]}),e})(),Ec=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-debug-page"]],decls:3,vars:0,template:function(e,t){1&e&&(r["\u0275\u0275element"](0,"preview-ui-insert-command"),r["\u0275\u0275element"](1,"kor-divider"),r["\u0275\u0275element"](2,"preview-ui-list-commands"))},directives:[_c,Cc],styles:[""]}),e})(),Sc=(()=>{class e{constructor(e){this.viewContainerRef=e}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ViewContainerRef))},e.\u0275dir=r["\u0275\u0275defineDirective"]({type:e,selectors:[["","previewUiDynamicInsert",""]]}),e})();function kc(e,t){}let Dc=(()=>{class e{constructor(e,t,n){this.route=e,this.componentFactoryResolver=t,this.provider=n}ngOnInit(){this.screenName$=this.route.paramMap.pipe(Object(K.a)(e=>e.get("id")));const e=we.DontCode.dtcde.getPreviewManager().retrieveHandlerConfig(we.DontCodeModel.APP_SCREENS);e&&(console.log("Importing from ",e.class.source),n("ECRl")("./plugin-"+e.class.source+"/__ivy_ngcc__/fesm2015/dontcode-plugin-"+e.class.source+".js").then(t=>{const n=this.componentFactoryResolver.resolveComponentFactory(t[e.class.name]),r=this.host.viewContainerRef;r.clear(),r.createComponent(n)}).catch(t=>{n("ECRl")("./plugin-"+e.class.source+"/fesm2015/dontcode-plugin-"+e.class.source+".js").then(t=>{const n=this.componentFactoryResolver.resolveComponentFactory(t[e.class.name]),r=this.host.viewContainerRef;r.clear(),r.createComponent(n)})}))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](mr),r["\u0275\u0275directiveInject"](r.ComponentFactoryResolver),r["\u0275\u0275directiveInject"](Se))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["preview-ui-screen"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275staticViewQuery"](Sc,!0),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.host=n.first)},decls:4,vars:3,consts:[["previewUiDynamicInsert",""]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275text"](1),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](3,kc,0,0,"ng-template",0)),2&e&&(r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate1"]("screen ",r["\u0275\u0275pipeBind1"](2,1,t.screenName$)," works!"))},directives:[Sc],pipes:[o.AsyncPipe],styles:[""]}),e})();var Oc=n("ODPb");const Ic=[{path:"",component:vc},{path:"dev",component:Ec},{path:"screens/:id",component:Dc}];let Ac=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e,bootstrap:[ei]}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[],imports:[[N,ma,wa,Ea,Sa,Lo.forRoot(Ic,{enableTracing:!1}),bc,_a,Oc.ScreenModule]]}),e})();Object(r.enableProdMode)(),j().bootstrapModule(Ac).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,1]]]);