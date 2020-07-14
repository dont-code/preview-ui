(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/vgl":function(e,t,n){"use strict";function r(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}n.d(t,"a",(function(){return r}))},0:function(e,t,n){e.exports=n("zUnb")},"1MAX":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("dUuy"),o=n("i9P/"),i=n("sWLk"),s=n("qEfY"),a=n("eY+9"),c=n("/vgl"),l=n("X0qr");const u=e=>{if(e&&"function"==typeof e[s.a])return u=e,e=>{const t=u[s.a]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(Object(a.a)(e))return Object(r.a)(e);if(Object(c.a)(e))return n=e,e=>(n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,o.a),e);if(e&&"function"==typeof e[i.a])return t=e,e=>{const n=t[i.a]();for(;;){const t=n.next();if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e};{const t=Object(l.a)(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected.`+" You can provide an Observable, Promise, Array, or Iterable.")}var t,n,u}},"1X/a":function(e,t){!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=42)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return K})),n.d(t,"e",(function(){return Y})),n.d(t,"d",(function(){return F})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne}));const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${s}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,u=0;const{strings:f,values:{length:p}}=e;for(;u<p;){const e=o.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)l(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=d.exec(f[u])[2],n=t.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const o=r.split(a);this.parts.push({type:"attribute",index:c,name:t,strings:o}),u+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const r=e.parentNode,o=t.split(a),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=h();else{const e=d.exec(i);null!==e&&l(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===o[i]?(r.insertBefore(h(),e),n.push(e)):e.data=o[i],u+=i}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&c!==s||(c++,t.insertBefore(h(),e)),s=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=r.pop()}for(const i of n)i.parentNode.removeChild(i)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let i=b(r),s=r[i],a=-1,c=0;const l=[];let u=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-c,i=b(r,i),s=r[i]}l.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},b=(e,t=-1)=>{for(let n=t+1;n<e.length;n++)if(u(e[n]))return n;return-1},g=new WeakMap,m=e=>"function"==typeof e&&g.has(e),y={},_={};class v{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const n of this.__parts)void 0!==n&&n.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,c=o.nextNode();for(;s<n.length;)if(i=n[s],u(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=` ${i} `;class x{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=d.exec(e);t+=null===a?e+(n?w:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),E=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class k{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let r=0;r<n.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(S(e)||!E(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||S(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class O{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(h()),this.endNode=e.appendChild(h())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=h()),e.__insert(this.endNode=h())}insertAfterPart(e){e.__insert(this.startNode=h()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const n=new v(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new O(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class j extends k{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends C{}let A=!1;(()=>{try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class N{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=R(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const R=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function I(e){let t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const D=new Map,M=new WeakMap,$=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new j(e,t.slice(1),n).parts:"@"===o?[new N(e,t.slice(1),r.eventContext)]:"?"===o?[new T(e,t.slice(1),n)]:new k(e,t,n).parts}handleTextExpression(e){return new O(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const F=(e,...t)=>new x(e,t,"html",$),L=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const V=e=>t=>{const n=L(t.type,e);let r=D.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},D.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(i);if(o=r.keyString.get(s),void 0===o){const n=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,e),o=new c(t,n),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},z=["html","svg"],B=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const U={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:q};class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=q){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.converter||U,r="function"==typeof n?n:n.fromAttribute;return r?r(e,t.type):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.converter;return(n&&n.toAttribute||U.toAttribute)(e,t.type)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;const K=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Y(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):G(e,t)}const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class X{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new X(n,J)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const te={};class ne extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=M.has(t),s=H&&11===t.nodeType&&!!t.host,a=s&&!B.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=M.get(t);void 0===r&&(o(t,t.firstChild),M.set(t,r=new O(Object.assign({templateFactory:I},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:V(r)},n)),a){const e=M.get(c);M.delete(c),((e,t,n)=>{B.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let l=0;l<i;l++){const e=o[l];e.parentNode.removeChild(e),s.textContent+=e.textContent}(e=>{z.forEach(t=>{const n=D.get(L(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),f(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let s=b(o),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=p(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=b(o,s);return}s=b(o,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),f(n,e)}})(r,c,e.value instanceof v?e.value.template:void 0),o(t,t.firstChild),t.appendChild(c),M.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=n(0).b`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"grid-cols"==e&&(this.style.gridColumn="span "+this.gridCols),"sortable"==e&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){this.sorted?this.sortDirection="asc"==this.sortDirection?"desc":"asc":(this.parentElement.childNodes.forEach(e=>{e.sorted=!1}),this.sorted=!0,this.sortDirection="asc")}};i([Object(r.e)({type:Number,reflect:!0,attribute:"grid-cols"})],s.prototype,"gridCols",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"alignment",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"head",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sorted",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sortable",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"sort-direction"})],s.prototype,"sortDirection",void 0),s=i([Object(r.c)("kor-table-cell")],s)},function(e,t,n){"use strict";n.r(t);var r=n(2);n.d(t,"korAccordion",(function(){return r.a}));var o=n(3);n.d(t,"korAppBar",(function(){return o.a}));var i=n(4);n.d(t,"korAvatar",(function(){return i.a}));var s=n(5);n.d(t,"korBadge",(function(){return s.a}));var a=n(6);n.d(t,"korBreadcrumbs",(function(){return a.a}));var c=n(7);n.d(t,"korBreadcrumbItem",(function(){return c.a}));var l=n(8);n.d(t,"korButton",(function(){return l.a}));var u=n(9);n.d(t,"korCard",(function(){return u.a}));var h=n(10);n.d(t,"korCheckbox",(function(){return h.a}));var d=n(11);n.d(t,"korDivider",(function(){return d.a}));var f=n(12);n.d(t,"korDrawer",(function(){return f.a}));var p=n(13);n.d(t,"korEmptyState",(function(){return p.a}));var b=n(14);n.d(t,"korGrid",(function(){return b.a}));var g=n(15);n.d(t,"korIcon",(function(){return g.a}));var m=n(16);n.d(t,"korInput",(function(){return m.a}));var y=n(17);n.d(t,"korMenuItem",(function(){return y.a}));var _=n(18);n.d(t,"korModal",(function(){return _.a}));var v=n(19);n.d(t,"korNavbar",(function(){return v.a}));var w=n(20);n.d(t,"korNotifications",(function(){return w.a}));var x=n(21);n.d(t,"korNotificationItem",(function(){return x.a}));var S=n(22);n.d(t,"korPage",(function(){return S.a}));var E=n(23);n.d(t,"korPane",(function(){return E.a}));var k=n(24);n.d(t,"korPopover",(function(){return k.a}));var C=n(25);n.d(t,"korProgressBar",(function(){return C.a}));var O=n(26);n.d(t,"korRadioButton",(function(){return O.a}));var T=n(27);n.d(t,"korSpinner",(function(){return T.a}));var j=n(28);n.d(t,"korStepper",(function(){return j.a}));var P=n(29);n.d(t,"korStepperItem",(function(){return P.a}));var A=n(30);n.d(t,"korSwitch",(function(){return A.a}));var N=n(31);n.d(t,"korSwitchItem",(function(){return N.a}));var R=n(32);n.d(t,"korTabItem",(function(){return R.a}));var I=n(33);n.d(t,"korTable",(function(){return I.a}));var D=n(40);n.d(t,"korTableRow",(function(){return D.a}));var M=n(41);n.d(t,"korTableCell",(function(){return M.a}));var $=n(34);n.d(t,"korTabs",(function(){return $.a}));var F=n(35);n.d(t,"korTag",(function(){return F.a}));var L=n(36);n.d(t,"korText",(function(){return L.a}));var H=n(37);n.d(t,"korToggle",(function(){return H.a}));var V=n(38);n.d(t,"korTool",(function(){return V.a}));var z=n(39);n.d(t,"korTooltip",(function(){return z.a}))}])},"25CY":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())()},"2iSC":function(e,t,n){var r={"./plugin-screen/esm2015":["3pHC",5]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="2iSC",e.exports=o},"2kYt":function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return B})),n.d(t,"c",(function(){return q})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return U})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return A})),n.d(t,"k",(function(){return R})),n.d(t,"l",(function(){return D})),n.d(t,"m",(function(){return F})),n.d(t,"n",(function(){return w})),n.d(t,"o",(function(){return l})),n.d(t,"p",(function(){return G})),n.d(t,"q",(function(){return Q})),n.d(t,"r",(function(){return K})),n.d(t,"s",(function(){return a})),n.d(t,"t",(function(){return W})),n.d(t,"u",(function(){return i})),n.d(t,"v",(function(){return P})),n.d(t,"w",(function(){return s}));var r=n("EM62");let o=null;function i(){return o}function s(e){o||(o=e)}class a{}const c=new r.q("DocumentToken");let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r.Fb)({factory:u,token:e,providedIn:"platform"}),e})();function u(){return Object(r.Sb)(d)}const h=new r.q("Location Initialized");let d=(()=>{class e extends l{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=i().getLocation(),this._history=i().getHistory()}getBaseHrefFromDOM(){return i().getBaseHref(this._doc)}onPopState(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)}onHashChange(e){i().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,t,n){f()?this._history.pushState(e,t,n):this.location.hash=n}replaceState(e,t,n){f()?this._history.replaceState(e,t,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(c))},e.\u0275prov=Object(r.Fb)({factory:p,token:e,providedIn:"platform"}),e})();function f(){return!!window.history.pushState}function p(){return new d(Object(r.Sb)(c))}function b(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function g(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function m(e){return e&&"?"!==e[0]?"?"+e:e}let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r.Fb)({factory:_,token:e,providedIn:"root"}),e})();function _(e){const t=Object(r.Sb)(c).location;return new w(Object(r.Sb)(l),t&&t.origin||"")}const v=new r.q("appBaseHref");let w=(()=>{class e extends y{constructor(e,t){if(super(),this._platformLocation=e,null==t&&(t=this._platformLocation.getBaseHrefFromDOM()),null==t)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=t}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return b(this._baseHref,e)}path(e=!1){const t=this._platformLocation.pathname+m(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${t}${n}`:t}pushState(e,t,n,r){const o=this.prepareExternalUrl(n+m(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){const o=this.prepareExternalUrl(n+m(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(l),r.Sb(v,8))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})(),x=(()=>{class e extends y{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",null!=t&&(this._baseHref=t)}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t}prepareExternalUrl(e){const t=b(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,n,r){let o=this.prepareExternalUrl(n+m(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){let o=this.prepareExternalUrl(n+m(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(l),r.Sb(v,8))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})(),S=(()=>{class e{constructor(e,t){this._subject=new r.n,this._urlChangeListeners=[],this._platformStrategy=e;const n=this._platformStrategy.getBaseHref();this._platformLocation=t,this._baseHref=g(k(n)),this._platformStrategy.onPopState(e=>{this._subject.emit({url:this.path(!0),pop:!0,state:e.state,type:e.type})})}path(e=!1){return this.normalize(this._platformStrategy.path(e))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+m(t))}normalize(t){return e.stripTrailingSlash(function(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,k(t)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}go(e,t="",n=null){this._platformStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+m(t)),n)}replaceState(e,t="",n=null){this._platformStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+m(t)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(e){this._urlChangeListeners.push(e),this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)})}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(n=>n(e,t))}subscribe(e,t,n){return this._subject.subscribe({next:e,error:t,complete:n})}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(y),r.Sb(l))},e.normalizeQueryParams=m,e.joinWithSlash=b,e.stripTrailingSlash=g,e.\u0275prov=Object(r.Fb)({factory:E,token:e,providedIn:"root"}),e})();function E(){return new S(Object(r.Sb)(y),Object(r.Sb)(l))}function k(e){return e.replace(/\/index.html$/,"")}const C=function(){var e={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};return e[e.Zero]="Zero",e[e.One]="One",e[e.Two]="Two",e[e.Few]="Few",e[e.Many]="Many",e[e.Other]="Other",e}(),O=r.lb;class T{}let j=(()=>{class e extends T{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(O(t||this.locale)(e)){case C.Zero:return"zero";case C.One:return"one";case C.Two:return"two";case C.Few:return"few";case C.Many:return"many";default:return"other"}}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(r.u))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();function P(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const e=n.indexOf("="),[r,o]=-1==e?[n,""]:[n.slice(0,e),n.slice(e+1)];if(r.trim()===t)return decodeURIComponent(o)}return null}let A=(()=>{class e{constructor(e,t,n,r){this._iterableDiffers=e,this._keyValueDiffers=t,this._ngEl=n,this._renderer=r,this._iterableDiffer=null,this._keyValueDiffer=null,this._initialClasses=[],this._rawClass=null}set klass(e){this._removeClasses(this._initialClasses),this._initialClasses="string"==typeof e?e.split(/\s+/):[],this._applyClasses(this._initialClasses),this._applyClasses(this._rawClass)}set ngClass(e){this._removeClasses(this._rawClass),this._applyClasses(this._initialClasses),this._iterableDiffer=null,this._keyValueDiffer=null,this._rawClass="string"==typeof e?e.split(/\s+/):e,this._rawClass&&(Object(r.ob)(this._rawClass)?this._iterableDiffer=this._iterableDiffers.find(this._rawClass).create():this._keyValueDiffer=this._keyValueDiffers.find(this._rawClass).create())}ngDoCheck(){if(this._iterableDiffer){const e=this._iterableDiffer.diff(this._rawClass);e&&this._applyIterableChanges(e)}else if(this._keyValueDiffer){const e=this._keyValueDiffer.diff(this._rawClass);e&&this._applyKeyValueChanges(e)}}_applyKeyValueChanges(e){e.forEachAddedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachChangedItem(e=>this._toggleClass(e.key,e.currentValue)),e.forEachRemovedItem(e=>{e.previousValue&&this._toggleClass(e.key,!1)})}_applyIterableChanges(e){e.forEachAddedItem(e=>{if("string"!=typeof e.item)throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${Object(r.ub)(e.item)}`);this._toggleClass(e.item,!0)}),e.forEachRemovedItem(e=>this._toggleClass(e.item,!1))}_applyClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!0)):Object.keys(e).forEach(t=>this._toggleClass(t,!!e[t])))}_removeClasses(e){e&&(Array.isArray(e)||e instanceof Set?e.forEach(e=>this._toggleClass(e,!1)):Object.keys(e).forEach(e=>this._toggleClass(e,!1)))}_toggleClass(e,t){(e=e.trim())&&e.split(/\s+/g).forEach(e=>{t?this._renderer.addClass(this._ngEl.nativeElement,e):this._renderer.removeClass(this._ngEl.nativeElement,e)})}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.s),r.Jb(r.t),r.Jb(r.l),r.Jb(r.D))},e.\u0275dir=r.Eb({type:e,selectors:[["","ngClass",""]],inputs:{klass:["class","klass"],ngClass:"ngClass"}}),e})();class N{constructor(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let R=(()=>{class e{constructor(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){Object(r.T)()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. `+"See https://angular.io/api/common/NgForOf#change-propagation for more information."),this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(t){throw new Error(`Cannot find a differ supporting object '${n}' of type '${e=n,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)}}var e;if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=[];e.forEachOperation((e,n,r)=>{if(null==e.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new N(null,this._ngForOf,-1,-1),null===r?void 0:r),o=new I(e,n);t.push(o)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const o=this._viewContainer.get(n);this._viewContainer.move(o,r);const i=new I(e,o);t.push(i)}});for(let n=0;n<t.length;n++)this._perViewChange(t[n].view,t[n].record);for(let n=0,r=this._viewContainer.length;n<r;n++){const e=this._viewContainer.get(n);e.context.index=n,e.context.count=r,e.context.ngForOf=this._ngForOf}e.forEachIdentityChange(e=>{this._viewContainer.get(e.currentIndex).context.$implicit=e.item})}_perViewChange(e,t){e.context.$implicit=t.item}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.N),r.Jb(r.K),r.Jb(r.s))},e.\u0275dir=r.Eb({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),e})();class I{constructor(e,t){this.record=e,this.view=t}}let D=(()=>{class e{constructor(e,t){this._viewContainer=e,this._context=new M,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){$("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){$("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.N),r.Jb(r.K))},e.\u0275dir=r.Eb({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),e})();class M{constructor(){this.$implicit=null,this.ngIf=null}}function $(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${Object(r.ub)(t)}'.`)}let F=(()=>{class e{constructor(e,t,n){this._ngEl=e,this._differs=t,this._renderer=n,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){const e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){const[n,r]=e.split(".");null!=(t=null!=t&&r?`${t}${r}`:t)?this._renderer.setStyle(this._ngEl.nativeElement,n,t):this._renderer.removeStyle(this._ngEl.nativeElement,n)}_applyChanges(e){e.forEachRemovedItem(e=>this._setStyle(e.key,null)),e.forEachAddedItem(e=>this._setStyle(e.key,e.currentValue)),e.forEachChangedItem(e=>this._setStyle(e.key,e.currentValue))}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.l),r.Jb(r.t),r.Jb(r.D))},e.\u0275dir=r.Eb({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}}),e})();class L{createSubscription(e,t){return e.subscribe({next:t,error:e=>{throw e}})}dispose(e){e.unsubscribe()}onDestroy(e){e.unsubscribe()}}class H{createSubscription(e,t){return e.then(t,e=>{throw e})}dispose(e){}onDestroy(e){}}const V=new H,z=new L;let B=(()=>{class e{constructor(e){this._ref=e,this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):Object(r.rb)(this._latestValue,this._latestReturnedValue)?this._latestReturnedValue:(this._latestReturnedValue=this._latestValue,r.P.wrap(this._latestValue)):(e&&this._subscribe(e),this._latestReturnedValue=this._latestValue,this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(t){if(Object(r.qb)(t))return V;if(Object(r.pb)(t))return z;throw n=e,Error(`InvalidPipeArgument: '${t}' for pipe '${Object(r.ub)(n)}'`);var n}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(r.Ub())},e.\u0275pipe=r.Ib({name:"async",type:e,pure:!1}),e})(),U=(()=>{class e{transform(e){return JSON.stringify(e,null,2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r.Ib({name:"json",type:e,pure:!1}),e})(),q=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},providers:[{provide:T,useClass:j}]}),e})();const W="browser";function Q(e){return e===W}function K(e){return"server"===e}let G=(()=>{class e{}return e.\u0275prov=Object(r.Fb)({token:e,providedIn:"root",factory:()=>new Y(Object(r.Sb)(c),window,Object(r.Sb)(r.m))}),e})();class Y{constructor(e,t,n){this.document=e,this.window=t,this.errorHandler=n,this.offset=()=>[0,0]}setOffset(e){this.offset=Array.isArray(e)?()=>e:e}getScrollPosition(){return this.supportScrollRestoration()?[this.window.scrollX,this.window.scrollY]:[0,0]}scrollToPosition(e){this.supportScrollRestoration()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(this.supportScrollRestoration()){e=this.window.CSS&&this.window.CSS.escape?this.window.CSS.escape(e):e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g,"\\$1");try{const t=this.document.querySelector(`#${e}`);if(t)return void this.scrollToElement(t);const n=this.document.querySelector(`[name='${e}']`);if(n)return void this.scrollToElement(n)}catch(t){this.errorHandler.handleError(t)}}}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}scrollToElement(e){const t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}supportScrollRestoration(){try{return!!this.window&&!!this.window.scrollTo}catch(e){return!1}}}},"3/dt":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{}t.DontCodeModel=r,r.ROOT="creation",r.APP_NAME_NODE="name",r.APP_TYPE_NODE="type",r.APP_TYPE=r.ROOT+"/"+r.APP_TYPE_NODE,r.APP_NAME=r.ROOT+"/"+r.APP_NAME_NODE,r.APP_ENTITIES_NODE="entities",r.APP_ENTITIES=r.ROOT+"/"+r.APP_ENTITIES_NODE,r.APP_ENTITIES_NAME_NODE="name",r.APP_ENTITIES_NAME=r.APP_ENTITIES+"/"+r.APP_ENTITIES_NAME_NODE,r.APP_FIELDS_NODE="fields",r.APP_FIELDS=r.APP_ENTITIES+"/"+r.APP_FIELDS_NODE,r.APP_FIELDS_NAME_NODE="name",r.APP_FIELDS_NAME=r.APP_FIELDS+"/"+r.APP_FIELDS_NAME_NODE,r.APP_FIELDS_TYPE_NODE="type",r.APP_FIELDS_TYPE=r.APP_FIELDS+"/"+r.APP_FIELDS_TYPE_NODE,r.APP_SCREENS_NODE="screens",r.APP_SCREENS=r.ROOT+"/"+r.APP_SCREENS_NODE,r.APP_SCREENS_NAME_NODE="name",r.APP_SCREENS_NAME=r.APP_SCREENS+"/"+r.APP_SCREENS_NAME_NODE,r.APP_SCREENS_LAYOUT_NODE="layout",r.APP_SCREENS_LAYOUT=r.APP_SCREENS+"/"+r.APP_SCREENS_LAYOUT_NODE,r.APP_COMPONENTS_NODE="components",r.APP_COMPONENTS=r.APP_SCREENS+"/"+r.APP_COMPONENTS_NODE,r.APP_COMPONENTS_TYPE_NODE="type",r.APP_COMPONENTS_TYPE=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_TYPE_NODE,r.APP_COMPONENTS_ENTITY_NODE="entity",r.APP_COMPONENTS_ENTITY=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_ENTITY_NODE},"3lSR":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("cJ9h"),o=n("5E2i");function i(e=Number.POSITIVE_INFINITY){return Object(r.a)(o.a,e)}},"42at":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePreviewManager=class{constructor(){this.handlersPerLocations=new Map}registerHandlers(e){e["preview-handlers"]&&e["preview-handlers"].forEach(e=>{this.handlersPerLocations.set(e.location.parent,e)})}retrieveHandlerConfig(e){return this.handlersPerLocations.get(e)}}},"5E2i":function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},"5uGe":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("IJgj"),o=n("rWo0"),i=n("bwdy"),s=n("25CY"),a=n("HgnN"),c=n("i9P/");class l extends i.a{constructor(e,t,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=o.a;break;case 1:if(!e){this.destination=o.a;break}if("object"==typeof e){e instanceof l?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new u(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new u(this,e,t,n)}}[s.a](){return this}static create(e,t,n){const r=new l(e,t,n);return r.syncErrorThrowable=!1,r}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class u extends l{constructor(e,t,n,i){let s;super(),this._parentSubscriber=e;let a=this;Object(r.a)(t)?s=t:t&&(s=t.next,n=t.error,i=t.complete,t!==o.a&&(a=Object.create(t),Object(r.a)(a.unsubscribe)&&this.add(a.unsubscribe.bind(a)),a.unsubscribe=this.unsubscribe.bind(this))),this._context=a,this._next=s,this._error=n,this._complete=i}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;a.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:n}=a.a;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):Object(c.a)(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;Object(c.a)(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);a.a.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),a.a.useDeprecatedSynchronousErrorHandling)throw n;Object(c.a)(n)}}__tryOrSetError(e,t,n){if(!a.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(r){return a.a.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=r,e.syncErrorThrown=!0,!0):(Object(c.a)(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}},AEcS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("D57K");r.__exportStar(n("YIYF"),t),r.__exportStar(n("o8N5"),t),r.__exportStar(n("3/dt"),t),r.__exportStar(n("umRR"),t),r.__exportStar(n("uq2N"),t),r.__exportStar(n("ZtqZ"),t),r.__exportStar(n("fY+t"),t),r.__exportStar(n("a/xz"),t)},D57K:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return s})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return u})),n.d(t,"__generator",(function(){return h})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return f})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return b})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return m})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return _})),n.d(t,"__asyncValues",(function(){return v})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return x})),n.d(t,"__importDefault",(function(){return S})),n.d(t,"__classPrivateFieldGet",(function(){return E})),n.d(t,"__classPrivateFieldSet",(function(){return k}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(c,l):u(i[0][2],n)}catch(r){u(i[0][3],r)}var n}function c(e){a("next",e)}function l(e){a("throw",e)}function u(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function S(e){return e&&e.__esModule?e:{default:e}}function E(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function k(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},EM62:function(e,t,n){"use strict";n.d(t,"a",(function(){return xi})),n.d(t,"b",(function(){return rc})),n.d(t,"c",(function(){return Ja})),n.d(t,"d",(function(){return Ya})),n.d(t,"e",(function(){return Za})),n.d(t,"f",(function(){return Gc})),n.d(t,"g",(function(){return Lc})),n.d(t,"h",(function(){return ii})),n.d(t,"i",(function(){return pc})),n.d(t,"j",(function(){return Is})),n.d(t,"k",(function(){return sc})),n.d(t,"l",(function(){return Ds})),n.d(t,"m",(function(){return wn})),n.d(t,"n",(function(){return Aa})),n.d(t,"o",(function(){return X})),n.d(t,"p",(function(){return m})),n.d(t,"q",(function(){return J})),n.d(t,"r",(function(){return wi})),n.d(t,"s",(function(){return ea})),n.d(t,"t",(function(){return ta})),n.d(t,"u",(function(){return ic})),n.d(t,"v",(function(){return pe})),n.d(t,"w",(function(){return Vc})),n.d(t,"x",(function(){return fe})),n.d(t,"y",(function(){return Ic})),n.d(t,"z",(function(){return yc})),n.d(t,"A",(function(){return y})),n.d(t,"B",(function(){return nc})),n.d(t,"C",(function(){return tc})),n.d(t,"D",(function(){return Ls})),n.d(t,"E",(function(){return $s})),n.d(t,"F",(function(){return Fs})),n.d(t,"G",(function(){return Vs})),n.d(t,"H",(function(){return cr})),n.d(t,"I",(function(){return v})),n.d(t,"J",(function(){return Uc})),n.d(t,"K",(function(){return ia})),n.d(t,"L",(function(){return Cc})),n.d(t,"M",(function(){return zs})),n.d(t,"N",(function(){return aa})),n.d(t,"O",(function(){return Se})),n.d(t,"P",(function(){return Pi})),n.d(t,"Q",(function(){return Dc})),n.d(t,"R",(function(){return Ln})),n.d(t,"S",(function(){return le})),n.d(t,"T",(function(){return Fn})),n.d(t,"U",(function(){return Qc})),n.d(t,"V",(function(){return jc})),n.d(t,"W",(function(){return oc})),n.d(t,"X",(function(){return ai})),n.d(t,"Y",(function(){return Sa})),n.d(t,"Z",(function(){return sr})),n.d(t,"ab",(function(){return hr})),n.d(t,"bb",(function(){return Bn})),n.d(t,"cb",(function(){return jn})),n.d(t,"db",(function(){return An})),n.d(t,"eb",(function(){return Dn})),n.d(t,"fb",(function(){return Rn})),n.d(t,"gb",(function(){return Nn})),n.d(t,"hb",(function(){return In})),n.d(t,"ib",(function(){return _a})),n.d(t,"jb",(function(){return Wc})),n.d(t,"kb",(function(){return va})),n.d(t,"lb",(function(){return wa})),n.d(t,"mb",(function(){return Pn})),n.d(t,"nb",(function(){return U})),n.d(t,"ob",(function(){return Ai})),n.d(t,"pb",(function(){return Ki})),n.d(t,"qb",(function(){return Qi})),n.d(t,"rb",(function(){return ji})),n.d(t,"sb",(function(){return ya})),n.d(t,"tb",(function(){return Qe})),n.d(t,"ub",(function(){return I})),n.d(t,"vb",(function(){return Tn})),n.d(t,"wb",(function(){return bs})),n.d(t,"xb",(function(){return ws})),n.d(t,"yb",(function(){return As})),n.d(t,"zb",(function(){return Pr})),n.d(t,"Ab",(function(){return Ii})),n.d(t,"Bb",(function(){return is})),n.d(t,"Cb",(function(){return Ua})),n.d(t,"Db",(function(){return Oe})),n.d(t,"Eb",(function(){return Ie})),n.d(t,"Fb",(function(){return E})),n.d(t,"Gb",(function(){return k})),n.d(t,"Hb",(function(){return Ae})),n.d(t,"Ib",(function(){return De})),n.d(t,"Jb",(function(){return Mi})),n.d(t,"Kb",(function(){return Bi})),n.d(t,"Lb",(function(){return qi})),n.d(t,"Mb",(function(){return Ui})),n.d(t,"Nb",(function(){return zi})),n.d(t,"Ob",(function(){return Vi})),n.d(t,"Pb",(function(){return Wi})),n.d(t,"Qb",(function(){return mn})),n.d(t,"Rb",(function(){return fs})),n.d(t,"Sb",(function(){return ce})),n.d(t,"Tb",(function(){return $i})),n.d(t,"Ub",(function(){return Ga})),n.d(t,"Vb",(function(){return Fi})),n.d(t,"Wb",(function(){return Gi})),n.d(t,"Xb",(function(){return qa})),n.d(t,"Yb",(function(){return Ji})),n.d(t,"Zb",(function(){return ja})),n.d(t,"ac",(function(){return Pa})),n.d(t,"bc",(function(){return ts})),n.d(t,"cc",(function(){return es})),n.d(t,"dc",(function(){return Li})),n.d(t,"ec",(function(){return za})),n.d(t,"fc",(function(){return ht})),n.d(t,"gc",(function(){return dr})),n.d(t,"hc",(function(){return fr})),n.d(t,"ic",(function(){return Ne})),n.d(t,"jc",(function(){return Ba})),n.d(t,"kc",(function(){return Di})),n.d(t,"lc",(function(){return us})),n.d(t,"mc",(function(){return hs})),n.d(t,"nc",(function(){return ds}));var r=n("ZTXN"),o=n("bwdy"),i=n("IdLP"),s=n("g6G6"),a=n("5uGe");function c(){return function(e){return e.lift(new l(e))}}class l{constructor(e){this.connectable=e}call(e,t){const{connectable:n}=this;n._refCount++;const r=new u(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o}}class u extends a.a{constructor(e,t){super(e),this.connectable=t}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const t=e._refCount;if(t<=0)return void(this.connection=null);if(e._refCount=t-1,t>1)return void(this.connection=null);const{connection:n}=this,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class h extends i.a{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new o.a,e.add(this.source.subscribe(new f(this.getSubject(),this))),e.closed&&(this._connection=null,e=o.a.EMPTY)),e}refCount(){return c()(this)}}const d=(()=>{const e=h.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class f extends r.c{constructor(e,t){super(e),this.connectable=t}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}function p(){return new r.b}function b(e){return{toString:e}.toString()}function g(e,t,n){return b(()=>{const r=function(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}(t);function o(...e){if(this instanceof o)return r.apply(this,e),this;const t=new o(...e);return n.annotation=t,n;function n(e,n,r){const o=e.hasOwnProperty("__parameters__")?e.__parameters__:Object.defineProperty(e,"__parameters__",{value:[]}).__parameters__;for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(t),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}const m=g("Inject",e=>({token:e})),y=g("Optional"),_=g("Self"),v=g("SkipSelf");var w=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}({});function x(e){for(let t in e)if(e[t]===x)return t;throw Error("Could not find renamed property on target object.")}function S(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function E(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function k(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function C(e){return O(e,e[j])||O(e,e[N])}function O(e,t){return t&&t.token===e?t:null}function T(e){return e&&(e.hasOwnProperty(P)||e.hasOwnProperty(R))?e[P]:null}const j=x({"\u0275prov":x}),P=x({"\u0275inj":x}),A=x({"\u0275provFallback":x}),N=x({ngInjectableDef:x}),R=x({ngInjectorDef:x});function I(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(I).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function D(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}const M=x({__forward_ref__:x});function $(e){return e.__forward_ref__=$,e.toString=function(){return I(this())},e}function F(e){return L(e)?e():e}function L(e){return"function"==typeof e&&e.hasOwnProperty(M)&&e.__forward_ref__===$}const H="undefined"!=typeof globalThis&&globalThis,V="undefined"!=typeof window&&window,z="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,B="undefined"!=typeof global&&global,U=H||B||V||z,q=x({"\u0275cmp":x}),W=x({"\u0275dir":x}),Q=x({"\u0275pipe":x}),K=x({"\u0275mod":x}),G=x({"\u0275loc":x}),Y=x({"\u0275fac":x}),Z=x({__NG_ELEMENT_ID__:x});class J{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=E({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return`InjectionToken ${this._desc}`}}const X=new J("INJECTOR",-1),ee={},te=/\n/gm,ne=x({provide:String,useValue:x});let re,oe=void 0;function ie(e){const t=oe;return oe=e,t}function se(e){const t=re;return re=e,t}function ae(e,t=w.Default){if(void 0===oe)throw new Error("inject() must be called from an injection context");return null===oe?ue(e,void 0,t):oe.get(e,t&w.Optional?null:void 0,t)}function ce(e,t=w.Default){return(re||ae)(F(e),t)}const le=ce;function ue(e,t,n){const r=C(e);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&w.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${I(e)}]`)}function he(e){const t=[];for(let n=0;n<e.length;n++){const r=F(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=w.Default;for(let t=0;t<r.length;t++){const o=r[t];o instanceof y||"Optional"===o.ngMetadataName||o===y?n|=w.Optional:o instanceof v||"SkipSelf"===o.ngMetadataName||o===v?n|=w.SkipSelf:o instanceof _||"Self"===o.ngMetadataName||o===_?n|=w.Self:e=o instanceof m||o===m?o.token:o}t.push(ce(e,n))}else t.push(ce(r))}return t}class de{get(e,t=ee){if(t===ee){const t=new Error(`NullInjectorError: No provider for ${I(e)}!`);throw t.name="NullInjectorError",t}return t}}class fe{}class pe{}function be(e,t){e.forEach(e=>Array.isArray(e)?be(e,t):t(e))}function ge(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function me(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function ye(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}function _e(e,t,n){let r=we(e,t);return r>=0?e[1|r]=n:(r=~r,function(e,t,n,r){let o=e.length;if(o==t)e.push(n,r);else if(1===o)e.push(r,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=r}}(e,r,t,n)),r}function ve(e,t){const n=we(e,t);if(n>=0)return e[1|n]}function we(e,t){return function(e,t,n){let r=0,o=e.length>>1;for(;o!==r;){const n=r+(o-r>>1),i=e[n<<1];if(t===i)return n<<1;i>t?o=n:r=n+1}return~(o<<1)}(e,t)}const xe=function(){var e={OnPush:0,Default:1};return e[e.OnPush]="OnPush",e[e.Default]="Default",e}(),Se=function(){var e={Emulated:0,Native:1,None:2,ShadowDom:3};return e[e.Emulated]="Emulated",e[e.Native]="Native",e[e.None]="None",e[e.ShadowDom]="ShadowDom",e}(),Ee={},ke=[];let Ce=0;function Oe(e){return b(()=>{const t=e.type,n=t.prototype,r={},o={type:t,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:r,inputs:null,outputs:null,exportAs:e.exportAs||null,onChanges:null,onInit:n.ngOnInit||null,doCheck:n.ngDoCheck||null,afterContentInit:n.ngAfterContentInit||null,afterContentChecked:n.ngAfterContentChecked||null,afterViewInit:n.ngAfterViewInit||null,afterViewChecked:n.ngAfterViewChecked||null,onDestroy:n.ngOnDestroy||null,onPush:e.changeDetection===xe.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||ke,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Se.Emulated,id:"c",styles:e.styles||ke,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.directives,s=e.features,a=e.pipes;return o.id+=Ce++,o.inputs=Re(e.inputs,r),o.outputs=Re(e.outputs),s&&s.forEach(e=>e(o)),o.directiveDefs=i?()=>("function"==typeof i?i():i).map(Te):null,o.pipeDefs=a?()=>("function"==typeof a?a():a).map(je):null,o})}function Te(e){return Me(e)||function(e){return e[W]||null}(e)}function je(e){return function(e){return e[Q]||null}(e)}const Pe={};function Ae(e){const t={type:e.type,bootstrap:e.bootstrap||ke,declarations:e.declarations||ke,imports:e.imports||ke,exports:e.exports||ke,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&b(()=>{Pe[e.id]=e.type}),t}function Ne(e,t){return b(()=>{const n=Fe(e,!0);n.declarations=t.declarations||ke,n.imports=t.imports||ke,n.exports=t.exports||ke})}function Re(e,t){if(null==e)return Ee;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const Ie=Oe;function De(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function Me(e){return e[q]||null}function $e(e,t){return e.hasOwnProperty(Y)?e[Y]:null}function Fe(e,t){const n=e[K]||null;if(!n&&!0===t)throw new Error(`Type ${I(e)} does not have '\u0275mod' property.`);return n}function Le(e){return Array.isArray(e)&&"object"==typeof e[1]}function He(e){return Array.isArray(e)&&!0===e[1]}function Ve(e){return 0!=(8&e.flags)}function ze(e){return 2==(2&e.flags)}function Be(e){return 1==(1&e.flags)}function Ue(e){return null!==e.template}function qe(e){return 0!=(512&e[2])}let We=void 0;function Qe(e){We=e}function Ke(){return void 0!==We?We:"undefined"!=typeof document?document:void 0}function Ge(e){return!!e.listen}const Ye={createRenderer:(e,t)=>Ke()};function Ze(e){for(;Array.isArray(e);)e=e[0];return e}function Je(e,t){return Ze(t[e+19])}function Xe(e,t){return Ze(t[e.index])}function et(e,t){return e.data[t+19]}function tt(e,t){const n=t[e];return Le(n)?n:n[0]}function nt(e){const t=function(e){return e.__ngContext__||null}(e);return t?Array.isArray(t)?t:t.lView:null}function rt(e){return 4==(4&e[2])}function ot(e){return 128==(128&e[2])}function it(e,t){return null===e||null==t?null:e[t]}function st(e){e[18]=0}const at={lFrame:Ot(null),bindingsEnabled:!0,checkNoChangesMode:!1};function ct(){return at.bindingsEnabled}function lt(){return at.lFrame.lView}function ut(){return at.lFrame.tView}function ht(e){at.lFrame.contextLView=e}function dt(){return at.lFrame.previousOrParentTNode}function ft(e,t){at.lFrame.previousOrParentTNode=e,at.lFrame.isParent=t}function pt(){return at.lFrame.isParent}function bt(){at.lFrame.isParent=!1}function gt(){return at.checkNoChangesMode}function mt(e){at.checkNoChangesMode=e}function yt(){return at.lFrame.bindingIndex}function _t(){return at.lFrame.bindingIndex++}function vt(e){const t=at.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function wt(e,t){const n=at.lFrame;n.bindingIndex=n.bindingRootIndex=e,n.currentDirectiveIndex=t}function xt(){return at.lFrame.currentQueryIndex}function St(e){at.lFrame.currentQueryIndex=e}function Et(e,t){const n=Ct();at.lFrame=n,n.previousOrParentTNode=t,n.lView=e}function kt(e,t){const n=Ct(),r=e[1];at.lFrame=n,n.previousOrParentTNode=t,n.lView=e,n.tView=r,n.contextLView=e,n.bindingIndex=r.bindingStartIndex}function Ct(){const e=at.lFrame,t=null===e?null:e.child;return null===t?Ot(e):t}function Ot(e){const t={previousOrParentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentSanitizer:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return null!==e&&(e.child=t),t}function Tt(){const e=at.lFrame;return at.lFrame=e.parent,e.previousOrParentTNode=null,e.lView=null,e}const jt=Tt;function Pt(){const e=Tt();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.currentSanitizer=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function At(){return at.lFrame.selectedIndex}function Nt(e){at.lFrame.selectedIndex=e}function Rt(){const e=at.lFrame;return et(e.tView,e.selectedIndex)}function It(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n];t.afterContentInit&&(e.contentHooks||(e.contentHooks=[])).push(-n,t.afterContentInit),t.afterContentChecked&&((e.contentHooks||(e.contentHooks=[])).push(n,t.afterContentChecked),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,t.afterContentChecked)),t.afterViewInit&&(e.viewHooks||(e.viewHooks=[])).push(-n,t.afterViewInit),t.afterViewChecked&&((e.viewHooks||(e.viewHooks=[])).push(n,t.afterViewChecked),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,t.afterViewChecked)),null!=t.onDestroy&&(e.destroyHooks||(e.destroyHooks=[])).push(n,t.onDestroy)}}function Dt(e,t,n){Ft(e,t,3,n)}function Mt(e,t,n,r){(3&e[2])===n&&Ft(e,t,n,r)}function $t(e,t){let n=e[2];(3&n)===t&&(n&=1023,n+=1,e[2]=n)}function Ft(e,t,n,r){const o=null!=r?r:-1;let i=0;for(let s=void 0!==r?65535&e[18]:0;s<t.length;s++)if("number"==typeof t[s+1]){if(i=t[s],null!=r&&i>=r)break}else t[s]<0&&(e[18]+=65536),(i<o||-1==o)&&(Lt(e,n,t,s),e[18]=(4294901760&e[18])+s+2),s++}function Lt(e,t,n,r){const o=n[r]<0,i=n[r+1],s=e[o?-n[r]:n[r]];o?e[2]>>10<e[18]>>16&&(3&e[2])===t&&(e[2]+=1024,i.call(s)):i.call(s)}class Ht{constructor(e,t,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=n}}function Vt(e,t,n){const r=Ge(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],c=n[o++];r?e.setAttribute(t,a,c,s):t.setAttributeNS(s,a,c)}else{const s=i,a=n[++o];Bt(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function zt(e){return 3===e||4===e||6===e}function Bt(e){return 64===e.charCodeAt(0)}function Ut(e,t){if(null===t||0===t.length);else if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||qt(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function qt(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const n=e[i++];if("number"==typeof n){if(n===t){s=-1;break}if(n>t){s=i-1;break}}}for(;i<e.length;){const t=e[i];if("number"==typeof t)break;if(t===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}function Wt(e){return-1!==e}function Qt(e){return 32767&e}function Kt(e){return e>>16}function Gt(e,t){let n=Kt(e),r=t;for(;n>0;)r=r[15],n--;return r}function Yt(e){return"string"==typeof e?e:null==e?"":""+e}function Zt(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():Yt(e)}const Jt=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(U))();function Xt(e){return e instanceof Function?e():e}let en=!0;function tn(e){const t=en;return en=e,t}let nn=0;function rn(e,t){const n=sn(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,on(r.data,e),on(t,null),on(r.blueprint,null));const o=an(e,t),i=e.injectorIndex;if(Wt(o)){const e=Qt(o),n=Gt(o,t),r=n[1].data;for(let o=0;o<8;o++)t[i+o]=n[e+o]|r[e+o]}return t[i+8]=o,i}function on(e,t){e.push(0,0,0,0,0,0,0,0,t)}function sn(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null==t[e.injectorIndex+8]?-1:e.injectorIndex}function an(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=t[6],r=1;for(;n&&-1===n.injectorIndex;)n=(t=t[15])?t[6]:null,r++;return n?n.injectorIndex|r<<16:-1}function cn(e,t,n){!function(e,t,n){let r="string"!=typeof n?n[Z]:n.charCodeAt(0)||0;null==r&&(r=n[Z]=nn++);const o=255&r,i=1<<o,s=64&o,a=32&o,c=t.data;128&o?s?a?c[e+7]|=i:c[e+6]|=i:a?c[e+5]|=i:c[e+4]|=i:s?a?c[e+3]|=i:c[e+2]|=i:a?c[e+1]|=i:c[e]|=i}(e,t,n)}function ln(e,t,n,r=w.Default,o){if(null!==e){const o=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e[Z];return"number"==typeof t&&t>0?255&t:t}(n);if("function"==typeof o){Et(t,e);try{const e=o();if(null!=e||r&w.Optional)return e;throw new Error(`No provider for ${Zt(n)}!`)}finally{jt()}}else if("number"==typeof o){if(-1===o)return new gn(e,t);let i=null,s=sn(e,t),a=-1,c=r&w.Host?t[16][6]:null;for((-1===s||r&w.SkipSelf)&&(a=-1===s?an(e,t):t[s+8],bn(r,!1)?(i=t[1],s=Qt(a),t=Gt(a,t)):s=-1);-1!==s;){a=t[s+8];const e=t[1];if(pn(o,s,e.data)){const e=hn(s,t,n,i,r,c);if(e!==un)return e}bn(r,t[1].data[s+8]===c)&&pn(o,s,t)?(i=e,s=Qt(a),t=Gt(a,t)):s=-1}}}if(r&w.Optional&&void 0===o&&(o=null),0==(r&(w.Self|w.Host))){const e=t[9],i=se(void 0);try{return e?e.get(n,o,r&w.Optional):ue(n,o,r&w.Optional)}finally{se(i)}}if(r&w.Optional)return o;throw new Error(`NodeInjector: NOT_FOUND [${Zt(n)}]`)}const un={};function hn(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=dn(a,s,n,null==r?ze(a)&&en:r!=s&&3===a.type,o&w.Host&&i===a);return null!==c?fn(t,s,c,a):un}function dn(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=65535&i,c=e.directiveStart,l=i>>16,u=o?a+l:e.directiveEnd;for(let h=r?a:a+l;h<u;h++){const e=s[h];if(h<c&&n===e||h>=c&&e.type===n)return h}if(o){const e=s[c];if(e&&Ue(e)&&e.type===n)return c}return null}function fn(e,t,n,r){let o=e[n];const i=t.data;if(o instanceof Ht){const s=o;if(s.resolving)throw new Error(`Circular dep for ${Zt(i[n])}`);const a=tn(s.canSeeViewProviders);let c;s.resolving=!0,s.injectImpl&&(c=se(s.injectImpl)),Et(e,r);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&function(e,t,n){const{onChanges:r,onInit:o,doCheck:i}=t;r&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)),o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{s.injectImpl&&se(c),tn(a),s.resolving=!1,jt()}}return o}function pn(e,t,n){const r=64&e,o=32&e;let i;return i=128&e?r?o?n[t+7]:n[t+6]:o?n[t+5]:n[t+4]:r?o?n[t+3]:n[t+2]:o?n[t+1]:n[t],!!(i&1<<e)}function bn(e,t){return!(e&w.Self||e&w.Host&&t)}class gn{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return ln(this._tNode,this._lView,e,void 0,t)}}function mn(e){return b(()=>{const t=Object.getPrototypeOf(e.prototype).constructor,n=t[Y]||function e(t){const n=t;if(L(t))return()=>{const t=e(F(n));return t?t():null};let r=$e(n);if(null===r){const e=T(n);r=e&&e.factory}return r||null}(t);return null!==n?n:e=>new e})}function yn(e){return e.ngDebugContext}function _n(e){return e.ngOriginalError}function vn(e,...t){e.error(...t)}class wn{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||vn}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?yn(e)?yn(e):this._findContext(_n(e)):null}_findOriginalError(e){let t=_n(e);for(;t&&_n(t);)t=_n(t);return t}}class xn{constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}`+" (see http://g.co/ng/security#xss)"}}class Sn extends xn{getTypeName(){return"HTML"}}class En extends xn{getTypeName(){return"Style"}}class kn extends xn{getTypeName(){return"Script"}}class Cn extends xn{getTypeName(){return"URL"}}class On extends xn{getTypeName(){return"ResourceURL"}}function Tn(e){return e instanceof xn?e.changingThisBreaksApplicationSecurity:e}function jn(e,t){const n=Pn(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see http://g.co/ng/security#xss)`)}return n===t}function Pn(e){return e instanceof xn&&e.getTypeName()||null}function An(e){return new Sn(e)}function Nn(e){return new En(e)}function Rn(e){return new kn(e)}function In(e){return new Cn(e)}function Dn(e){return new On(e)}let Mn=!0,$n=!1;function Fn(){return $n=!0,Mn}function Ln(){if($n)throw new Error("Cannot enable prod mode after platform setup.");Mn=!1}class Hn{constructor(e){this.defaultDoc=e,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");let t=this.inertDocument.body;if(null==t){const e=this.inertDocument.createElement("html");this.inertDocument.appendChild(e),t=this.inertDocument.createElement("body"),e.appendChild(t)}t.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>',!t.querySelector||t.querySelector("svg")?(t.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',this.getInertBodyElement=t.querySelector&&t.querySelector("svg img")&&function(){try{return!!window.DOMParser}catch(e){return!1}}()?this.getInertBodyElement_DOMParser:this.getInertBodyElement_InertDocument):this.getInertBodyElement=this.getInertBodyElement_XHR}getInertBodyElement_XHR(e){e="<body><remove></remove>"+e+"</body>";try{e=encodeURI(e)}catch(r){return null}const t=new XMLHttpRequest;t.responseType="document",t.open("GET","data:text/html;charset=utf-8,"+e,!1),t.send(void 0);const n=t.response.body;return n.removeChild(n.firstChild),n}getInertBodyElement_DOMParser(e){e="<body><remove></remove>"+e+"</body>";try{const t=(new window.DOMParser).parseFromString(e,"text/html").body;return t.removeChild(t.firstChild),t}catch(t){return null}}getInertBodyElement_InertDocument(e){const t=this.inertDocument.createElement("template");if("content"in t)return t.innerHTML=e,t;const n=this.inertDocument.createElement("body");return n.innerHTML=e,this.defaultDoc.documentMode&&this.stripCustomNsAttrs(n),n}stripCustomNsAttrs(e){const t=e.attributes;for(let r=t.length-1;0<r;r--){const n=t.item(r).name;"xmlns:ns1"!==n&&0!==n.indexOf("ns1:")||e.removeAttribute(n)}let n=e.firstChild;for(;n;)n.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(n),n=n.nextSibling}}const Vn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,zn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;function Bn(e){return(e=String(e)).match(Vn)||e.match(zn)?e:(Fn()&&console.warn(`WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`),"unsafe:"+e)}function Un(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function qn(...e){const t={};for(const n of e)for(const e in n)n.hasOwnProperty(e)&&(t[e]=!0);return t}const Wn=Un("area,br,col,hr,img,wbr"),Qn=Un("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Kn=Un("rp,rt"),Gn=qn(Kn,Qn),Yn=qn(Wn,qn(Qn,Un("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),qn(Kn,Un("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Gn),Zn=Un("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),Jn=Un("srcset"),Xn=qn(Zn,Jn,Un("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Un("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),er=Un("script,style,template");class tr{constructor(){this.sanitizedSomething=!1,this.buf=[]}sanitizeChildren(e){let t=e.firstChild,n=!0;for(;t;)if(t.nodeType===Node.ELEMENT_NODE?n=this.startElement(t):t.nodeType===Node.TEXT_NODE?this.chars(t.nodeValue):this.sanitizedSomething=!0,n&&t.firstChild)t=t.firstChild;else for(;t;){t.nodeType===Node.ELEMENT_NODE&&this.endElement(t);let e=this.checkClobberedElement(t,t.nextSibling);if(e){t=e;break}t=this.checkClobberedElement(t,t.parentNode)}return this.buf.join("")}startElement(e){const t=e.nodeName.toLowerCase();if(!Yn.hasOwnProperty(t))return this.sanitizedSomething=!0,!er.hasOwnProperty(t);this.buf.push("<"),this.buf.push(t);const n=e.attributes;for(let o=0;o<n.length;o++){const e=n.item(o),t=e.name,i=t.toLowerCase();if(!Xn.hasOwnProperty(i)){this.sanitizedSomething=!0;continue}let s=e.value;Zn[i]&&(s=Bn(s)),Jn[i]&&(r=s,s=(r=String(r)).split(",").map(e=>Bn(e.trim())).join(", ")),this.buf.push(" ",t,'="',or(s),'"')}var r;return this.buf.push(">"),!0}endElement(e){const t=e.nodeName.toLowerCase();Yn.hasOwnProperty(t)&&!Wn.hasOwnProperty(t)&&(this.buf.push("</"),this.buf.push(t),this.buf.push(">"))}chars(e){this.buf.push(or(e))}checkClobberedElement(e,t){if(t&&(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)===Node.DOCUMENT_POSITION_CONTAINED_BY)throw new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`);return t}}const nr=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,rr=/([^\#-~ |!])/g;function or(e){return e.replace(/&/g,"&amp;").replace(nr,(function(e){return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"})).replace(rr,(function(e){return"&#"+e.charCodeAt(0)+";"})).replace(/</g,"&lt;").replace(/>/g,"&gt;")}let ir;function sr(e,t){let n=null;try{ir=ir||new Hn(e);let r=t?String(t):"";n=ir.getInertBodyElement(r);let o=5,i=r;do{if(0===o)throw new Error("Failed to sanitize html because the input is unstable");o--,r=i,i=n.innerHTML,n=ir.getInertBodyElement(r)}while(r!==i);const s=new tr,a=s.sanitizeChildren(ar(n)||n);return Fn()&&s.sanitizedSomething&&console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"),a}finally{if(n){const e=ar(n)||n;for(;e.firstChild;)e.removeChild(e.firstChild)}}}function ar(e){return"content"in e&&function(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}(e)?e.content:null}const cr=function(){var e={NONE:0,HTML:1,STYLE:2,SCRIPT:3,URL:4,RESOURCE_URL:5};return e[e.NONE]="NONE",e[e.HTML]="HTML",e[e.STYLE]="STYLE",e[e.SCRIPT]="SCRIPT",e[e.URL]="URL",e[e.RESOURCE_URL]="RESOURCE_URL",e}(),lr=new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:attr|calc|var))\\([-0-9.%, #a-zA-Z]+\\))$","g"),ur=/^url\(([^)]+)\)$/;function hr(e){if(!(e=String(e).trim()))return"";const t=e.match(ur);return t&&Bn(t[1])===t[1]||e.match(lr)&&function(e){let t=!0,n=!0;for(let r=0;r<e.length;r++){const o=e.charAt(r);"'"===o&&n?t=!t:'"'===o&&t&&(n=!n)}return t&&n}(e)?e:(Fn()&&console.warn(`WARNING: sanitizing unsafe style value ${e} (see http://g.co/ng/security#xss).`),"unsafe")}function dr(e){const t=pr();return t?t.sanitize(cr.HTML,e)||"":jn(e,"HTML")?Tn(e):sr(Ke(),Yt(e))}function fr(e){const t=pr();return t?t.sanitize(cr.URL,e)||"":jn(e,"URL")?Tn(e):Bn(Yt(e))}function pr(){const e=lt();return e&&e[12]}function br(e,t){e.__ngContext__=t}function gr(e){throw new Error(`Multiple components match node with tagname ${e.tagName}`)}function mr(){throw new Error("Cannot mix multi providers and regular providers")}function yr(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const n=t.length;if(o+n===r||e.charCodeAt(o+n)<=32)return o}n=o+1}}function _r(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==yr(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function vr(e,t,n){return t===(0!==e.type||n?e.tagName:"ng-template")}function wr(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(zt(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const c=t[a];if("number"!=typeof c){if(!s)if(4&r){if(r=2|1&r,""!==c&&!vr(e,c,n)||""===c&&1===t.length){if(xr(r))return!1;s=!0}}else{const l=8&r?c:t[++a];if(8&r&&null!==e.attrs){if(!_r(e.attrs,l,n)){if(xr(r))return!1;s=!0}continue}const u=Sr(8&r?"class":c,o,0==e.type&&"ng-template"!==e.tagName,n);if(-1===u){if(xr(r))return!1;s=!0;continue}if(""!==l){let e;e=u>i?"":o[u+1].toLowerCase();const t=8&r?e:null;if(t&&-1!==yr(t,l,0)||2&r&&l!==e){if(xr(r))return!1;s=!0}}}}else{if(!s&&!xr(r)&&!xr(c))return!1;if(s&&xr(c))continue;s=!1,r=c|1&r}}return xr(r)||s}function xr(e){return 0==(1&e)}function Sr(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let n=!1;for(;o<t.length;){const r=t[o];if(r===e)return o;if(3===r||6===r)n=!0;else{if(1===r||2===r){let e=t[++o];for(;"string"==typeof e;)e=t[++o];continue}if(4===r)break;if(0===r){o+=4;continue}}o+=n?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){if(e[n]===t)return n;n++}return-1}(t,e)}function Er(e,t,n=!1){for(let r=0;r<t.length;r++)if(wr(e,t[r],n))return!0;return!1}function kr(e,t){e:for(let n=0;n<t.length;n++){const r=t[n];if(e.length===r.length){for(let t=0;t<e.length;t++)if(e[t]!==r[t])continue e;return!0}}return!1}function Cr(e,t){return e?":not("+t.trim()+")":t}function Or(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const t=e[++n];o+="["+s+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||xr(s)||(t+=Cr(i,o),o=""),r=s,i=i||!xr(r);n++}return""!==o&&(t+=Cr(i,o)),t}const Tr={};function jr(e){const t=e[3];return He(t)?t[3]:t}function Pr(e){Ar(ut(),lt(),At()+e,gt())}function Ar(e,t,n,r){if(!r)if(3==(3&t[2])){const r=e.preOrderCheckHooks;null!==r&&Dt(t,r,n)}else{const r=e.preOrderHooks;null!==r&&Mt(t,r,0,n)}Nt(n)}function Nr(e,t){return e<<17|t<<2}function Rr(e){return e>>17&32767}function Ir(e){return 2|e}function Dr(e){return(131068&e)>>2}function Mr(e,t){return-131069&e|t<<2}function $r(e){return 1|e}function Fr(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=e.data[i];St(o),n.contentQueries(2,t[i],i)}}}function Lr(e,t,n){return Ge(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function Hr(e,t,n,r,o,i,s,a,c,l){const u=t.blueprint.slice();return u[0]=o,u[2]=140|r,st(u),u[3]=u[15]=e,u[8]=n,u[10]=s||e&&e[10],u[11]=a||e&&e[11],u[12]=c||e&&e[12]||null,u[9]=l||e&&e[9]||null,u[6]=i,u[16]=2==t.type?e[16]:u,u}function Vr(e,t,n,r,o,i){const s=n+19,a=e.data[s]||function(e,t,n,r,o,i){const s=dt(),a=pt(),c=a?s:s&&s.parent,l=e.data[n]=Zr(0,c&&c!==t?c:null,r,n,o,i);return null===e.firstChild&&(e.firstChild=l),s&&(!a||null!=s.child||null===l.parent&&2!==s.type?a||(s.next=l):s.child=l),l}(e,t,s,r,o,i);return ft(a,!0),a}function zr(e,t,n){kt(t,t[6]);try{const r=e.viewQuery;null!==r&&wo(1,r,n);const o=e.template;null!==o&&qr(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Fr(e,t),e.staticViewQueries&&wo(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)go(e,t[n])}(t,i)}finally{t[2]&=-5,Pt()}}function Br(e,t,n,r){const o=t[2];if(256==(256&o))return;kt(t,t[6]);const i=gt();try{st(t),at.lFrame.bindingIndex=e.bindingStartIndex,null!==n&&qr(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const n=e.preOrderCheckHooks;null!==n&&Dt(t,n,null)}else{const n=e.preOrderHooks;null!==n&&Mt(t,n,0,null),$t(t,0)}if(function(e){let t=e[13];for(;null!==t;){let n;if(He(t)&&(n=t[2])>>1==-1){for(let e=9;e<t.length;e++){const n=t[e],r=n[1];ot(n)&&Br(r,n,r.template,n[8])}0!=(1&n)&&po(t,e[16])}t=t[4]}}(t),null!==e.contentQueries&&Fr(e,t),!i)if(s){const n=e.contentCheckHooks;null!==n&&Dt(t,n)}else{const n=e.contentHooks;null!==n&&Mt(t,n,1),$t(t,1)}!function(e,t){try{const n=e.expandoInstructions;if(null!==n){let r=e.expandoStartIndex,o=-1,i=-1;for(let e=0;e<n.length;e++){const s=n[e];"number"==typeof s?s<=0?(i=0-s,Nt(i),r+=9+n[++e],o=r):r+=s:(null!==s&&(wt(r,o),s(2,t[o])),o++)}}}finally{Nt(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)bo(e,t[n])}(t,a);const c=e.viewQuery;if(null!==c&&wo(2,c,r),!i)if(s){const n=e.viewCheckHooks;null!==n&&Dt(t,n)}else{const n=e.viewHooks;null!==n&&Mt(t,n,2),$t(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73)}finally{Pt()}}function Ur(e,t,n,r){const o=t[10],i=!gt(),s=rt(t);try{i&&!s&&o.begin&&o.begin(),s&&zr(e,t,r),Br(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function qr(e,t,n,r,o){const i=At();try{Nt(-1),2&r&&t.length>19&&Ar(e,t,0,gt()),n(r,o)}finally{Nt(i)}}function Wr(e,t,n){if(Ve(t)){const r=t.directiveEnd;for(let o=t.directiveStart;o<r;o++){const t=e.data[o];t.contentQueries&&t.contentQueries(1,n[o],o)}}}function Qr(e,t,n){ct()&&(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||rn(n,t),br(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const r=e.data[a],i=Ue(r);i&&lo(t,n,r);const c=fn(t,e,a,n);br(c,t),null!==s&&uo(0,a-o,c,r,0,s),i&&(tt(n.index,t)[8]=c)}}(e,t,n,Xe(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=e.expandoInstructions,s=e.firstCreatePass,a=n.index-19;try{Nt(a);for(let n=r;n<o;n++){const r=e.data[n],o=t[n];null!==r.hostBindings||0!==r.hostVars||null!==r.hostAttrs?ro(r,o):s&&i.push(null)}}finally{Nt(-1)}}(e,t,n))}function Kr(e,t,n=Xe){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Gr(e){return e.tView||(e.tView=Yr(1,-1,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts))}function Yr(e,t,n,r,o,i,s,a,c,l){const u=19+r,h=u+o,d=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:Tr);return n}(u,h);return d[1]={type:e,id:t,blueprint:d,template:n,queries:null,viewQuery:a,node:null,data:d.slice().fill(null,u),bindingStartIndex:u,expandoStartIndex:h,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:c,consts:l}}function Zr(e,t,n,r,o,i){return{type:n,index:r,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,residualStyles:void 0,classes:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Jr(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Xr(e,t,n,r,o,i,s,a){const c=Xe(t,n);let l,u=t.inputs;var h;!a&&null!=u&&(l=u[r])?(Co(e,n,l,r,o),ze(t)&&function(e,t){const n=tt(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3===t.type&&(r="class"===(h=r)?"className":"for"===h?"htmlFor":"formaction"===h?"formAction":"innerHtml"===h?"innerHTML":"readonly"===h?"readOnly":"tabindex"===h?"tabIndex":h,o=null!=s?s(o,t.tagName||"",r):o,Ge(i)?i.setProperty(c,r,o):Bt(r)||(c.setProperty?c.setProperty(r,o):c[r]=o))}function eo(e,t,n,r){let o=!1;if(ct()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];Er(n,s.selectors,!1)&&(o||(o=[]),cn(rn(n,t),e,s.type),Ue(s)?(2&n.flags&&gr(n),io(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){let r=0;o=!0,ao(n,e.data.length,i.length);for(let e=0;e<i.length;e++){const t=i[e];t.providersResolver&&t.providersResolver(t)}oo(e,n,i.length);let a=!1,c=!1;for(let o=0;o<i.length;o++){const l=i[o];n.mergedAttrs=Ut(n.mergedAttrs,l.hostAttrs),co(e,t,l),so(e.data.length-1,l,s),null!==l.contentQueries&&(n.flags|=8),null===l.hostBindings&&null===l.hostAttrs&&0===l.hostVars||(n.flags|=128),!a&&(l.onChanges||l.onInit||l.doCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index-19),a=!0),c||!l.onChanges&&!l.doCheck||((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index-19),c=!0),to(e,l),r+=l.hostVars}!function(e,t){const n=t.directiveEnd,r=e.data,o=t.attrs,i=[];let s=null,a=null;for(let c=t.directiveStart;c<n;c++){const e=r[c],t=e.inputs;i.push(null!==o?ho(t,o):null),s=Jr(t,c,s),a=Jr(e.outputs,c,a)}null!==s&&(s.hasOwnProperty("class")&&(t.flags|=16),s.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=i,t.inputs=s,t.outputs=a}(e,n),no(e,t,r)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let e=0;e<t.length;e+=2){const o=n[t[e+1]];if(null==o)throw new Error(`Export of name '${t[e+1]}' not found!`);r.push(t[e],o)}}}(n,r,s)}return n.mergedAttrs=Ut(n.mergedAttrs,n.attrs),o}function to(e,t){const n=e.expandoInstructions;n.push(t.hostBindings),0!==t.hostVars&&n.push(t.hostVars)}function no(e,t,n){for(let r=0;r<n;r++)t.push(Tr),e.blueprint.push(Tr),e.data.push(null)}function ro(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function oo(e,t,n){const r=19-t.index,o=e.data.length-(65535&t.providerIndexes);(e.expandoInstructions||(e.expandoInstructions=[])).push(r,o,n)}function io(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function so(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;Ue(t)&&(n[""]=e)}}function ao(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function co(e,t,n){e.data.push(n);const r=n.factory||(n.factory=$e(n.type)),o=new Ht(r,Ue(n),null);e.blueprint.push(o),t.push(o)}function lo(e,t,n){const r=Xe(t,e),o=Gr(n),i=e[10],s=mo(e,Hr(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n)));e[t.index]=s}function uo(e,t,n,r,o,i){const s=i[t];if(null!==s){const e=r.setInput;for(let t=0;t<s.length;){const o=s[t++],i=s[t++],a=s[t++];null!==e?r.setInput(n,a,o,i):n[i]=a}}}function ho(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function fo(e,t,n,r){return new Array(e,!0,-2,t,null,null,r,n,null)}function po(e,t){const n=e[5];for(let r=0;r<n.length;r++){const e=n[r],o=e[3][3][16];if(o!==t&&0==(16&o[2])){const t=e[1];Br(t,e,t.template,e[8])}}}function bo(e,t){const n=tt(t,e);if(ot(n)&&80&n[2]){const e=n[1];Br(e,n,e.template,n[8])}}function go(e,t){const n=tt(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),zr(r,n,n[8])}function mo(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function yo(e){for(;e;){e[2]|=64;const t=jr(e);if(qe(e)&&!t)return e;e=t}return null}function _o(e,t,n){const r=t[10];r.begin&&r.begin();try{Br(e,t,e.template,n)}catch(o){throw ko(t,o),o}finally{r.end&&r.end()}}function vo(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=nt(n),o=r[1];Ur(o,r,o.template,n)}}(e[8])}function wo(e,t,n){St(0),t(e,n)}const xo=(()=>Promise.resolve(null))();function So(e){return e[7]||(e[7]=[])}function Eo(e){return e.cleanup||(e.cleanup=[])}function ko(e,t){const n=e[9],r=n?n.get(wn,null):null;r&&r.handleError(t)}function Co(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],c=t[s],l=e.data[s];null!==l.setInput?l.setInput(c,o,r,a):c[a]=o}}function Oo(e,t,n){const r=Je(t,e),o=e[11];Ge(o)?o.setValue(r,n):r.textContent=n}function To(e,t){const n=t[3];return-1===e.index?He(n)?n:null:n}function jo(e,t){const n=To(e,t);return n?Vo(t[11],n[7]):null}function Po(e,t,n,r,o){if(null!=r){let i,s=!1;He(r)?i=r:Le(r)&&(s=!0,r=r[0]);const a=Ze(r);0===e&&null!==n?null==o?Lo(t,n,a):Fo(t,n,a,o||null):1===e&&null!==n?Fo(t,n,a,o||null):2===e?function(e,t,n){const r=Vo(e,t);r&&function(e,t,n,r){Ge(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,r,o){const i=n[7];i!==Ze(n)&&Po(t,e,r,i,o);for(let s=9;s<n.length;s++){const o=n[s];Wo(o[1],o,e,t,r,i)}}(t,e,i,n,o)}}function Ao(e,t,n,r){const o=jo(e.node,t);o&&Wo(e,t,t[11],n?1:2,o,r)}function No(e,t){const n=e[5],r=n.indexOf(t);n.splice(r,1)}function Ro(e,t){if(e.length<=9)return;const n=9+t,r=e[n];if(r){const o=r[17];null!==o&&o!==e&&No(o,r),t>0&&(e[n-1][4]=r[4]);const i=me(e,9+t);Ao(r[1],r,!1,null);const s=i[5];null!==s&&s.detachView(i[1]),r[3]=null,r[4]=null,r[2]&=-129}return r}function Io(e,t){if(!(256&t[2])){const n=t[11];Ge(n)&&n.destroyNode&&Wo(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return Mo(e[1],e);for(;t;){let n=null;if(Le(t))n=t[13];else{const e=t[9];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)Le(t)&&Mo(t[1],t),t=Do(t,e);null===t&&(t=e),Le(t)&&Mo(t[1],t),n=t&&t[4]}t=n}}(t)}}function Do(e,t){let n;return Le(e)&&(n=e[6])&&2===n.type?To(n,e):e[3]===t?null:e[3]}function Mo(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const e=t[n[r]];if(!(e instanceof Ht)){const t=n[r+1];if(Array.isArray(t))for(let n=0;n<t.length;n+=2)t[n+1].call(e[t[n]]);else t.call(e)}}}(e,t),function(e,t){const n=e.cleanup;if(null!==n){const e=t[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const o=n[r+1],i="function"==typeof o?o(t):Ze(t[o]),s=e[n[r+2]],a=n[r+3];"boolean"==typeof a?i.removeEventListener(n[r],s,a):a>=0?e[a]():e[-a].unsubscribe(),r+=2}else n[r].call(e[n[r+1]]);t[7]=null}}(e,t);const n=t[6];n&&3===n.type&&Ge(t[11])&&t[11].destroy();const r=t[17];if(null!==r&&He(t[3])){r!==t[3]&&No(r,t);const n=t[5];null!==n&&n.detachView(e)}}}function $o(e,t,n){let r=t.parent;for(;null!=r&&(4===r.type||5===r.type);)r=(t=r).parent;if(null==r){const e=n[6];return 2===e.type?jo(e,n):n[0]}if(t&&5===t.type&&4&t.flags)return Xe(t,n).parentNode;if(2&r.flags){const t=e.data,n=t[t[r.index].directiveStart].encapsulation;if(n!==Se.ShadowDom&&n!==Se.Native)return null}return Xe(r,n)}function Fo(e,t,n,r){Ge(e)?e.insertBefore(t,n,r):t.insertBefore(n,r,!0)}function Lo(e,t,n){Ge(e)?e.appendChild(t,n):t.appendChild(n)}function Ho(e,t,n,r){null!==r?Fo(e,t,n,r):Lo(e,t,n)}function Vo(e,t){return Ge(e)?e.parentNode(t):t.parentNode}function zo(e,t){if(2===e.type){const n=To(e,t);return null===n?null:Uo(n.indexOf(t,9)-9,n)}return 4===e.type||5===e.type?Xe(e,t):null}function Bo(e,t,n,r){const o=$o(e,r,t);if(null!=o){const e=t[11],i=zo(r.parent||t[6],t);if(Array.isArray(n))for(let t=0;t<n.length;t++)Ho(e,o,n[t],i);else Ho(e,o,n,i)}}function Uo(e,t){const n=9+e+1;if(n<t.length){const e=t[n],r=e[1].firstChild;if(null!==r)return function e(t,n){if(null!==n){const r=n.type;if(3===r)return Xe(n,t);if(0===r)return Uo(-1,t[n.index]);if(4===r||5===r){const r=n.child;if(null!==r)return e(t,r);{const e=t[n.index];return He(e)?Uo(-1,e):Ze(e)}}{const r=t[16],o=r[6],i=jr(r),s=o.projection[n.projection];return null!=s?e(i,s):e(t,n.next)}}return null}(e,r)}return t[7]}function qo(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],c=n.type;s&&0===t&&(a&&br(Ze(a),r),n.flags|=4),64!=(64&n.flags)&&(4===c||5===c?(qo(e,t,n.child,r,o,i,!1),Po(t,e,o,a,i)):1===c?Qo(e,t,r,n,o,i):Po(t,e,o,a,i)),n=s?n.projectionNext:n.next}}function Wo(e,t,n,r,o,i){qo(n,r,e.node.child,t,o,i,!1)}function Qo(e,t,n,r,o,i){const s=n[16],a=s[6].projection[r.projection];if(Array.isArray(a))for(let c=0;c<a.length;c++)Po(t,e,o,a[c],i);else qo(e,t,a,s[3],o,i,!0)}function Ko(e,t,n){Ge(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function Go(e,t,n){Ge(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}class Yo{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._viewContainerRef=null,this._tViewNode=null}get rootNodes(){const e=this._lView;return null==e[0]?function e(t,n,r,o,i=!1){for(;null!==r;){const s=n[r.index];if(null!==s&&o.push(Ze(s)),He(s))for(let t=9;t<s.length;t++){const n=s[t],r=n[1].firstChild;null!==r&&e(n[1],n,r,o)}const a=r.type;if(4===a||5===a)e(t,n,r.child,o);else if(1===a){const t=n[16],i=t[6],s=jr(t);let a=i.projection[r.projection];null!==a&&null!==s&&e(s[1],s,a,o,!0)}r=i?r.projectionNext:r.next}return o}(e[1],e,e[6].child,[]):[]}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}Io(this._lView[1],this._lView)}onDestroy(e){var t,n,r;t=this._lView[1],r=e,So(n=this._lView).push(r),t.firstCreatePass&&Eo(t).push(n[7].length-1,null)}markForCheck(){yo(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){_o(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){mt(!0);try{_o(e,t,n)}finally{mt(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e;this._appRef=null,Wo(this._lView[1],e=this._lView,e[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class Zo extends Yo{constructor(e){super(e),this._view=e}detectChanges(){vo(this._view)}checkNoChanges(){!function(e){mt(!0);try{vo(e)}finally{mt(!1)}}(this._view)}get context(){return null}}let Jo,Xo,ei;function ti(e,t,n){return Jo||(Jo=class extends e{}),new Jo(Xe(t,n))}function ni(e,t,n,r){return Xo||(Xo=class extends e{constructor(e,t,n){super(),this._declarationView=e,this._declarationTContainer=t,this.elementRef=n}createEmbeddedView(e){const t=this._declarationTContainer.tViews,n=Hr(this._declarationView,t,e,16,null,t.node);n[17]=this._declarationView[this._declarationTContainer.index];const r=this._declarationView[5];null!==r&&(n[5]=r.createEmbeddedView(t)),zr(t,n,e);const o=new Yo(n);return o._tViewNode=n[6],o}}),0===n.type?new Xo(r,n,ti(t,n,r)):null}function ri(e,t,n,r){let o;ei||(ei=class extends e{constructor(e,t,n){super(),this._lContainer=e,this._hostTNode=t,this._hostView=n}get element(){return ti(t,this._hostTNode,this._hostView)}get injector(){return new gn(this._hostTNode,this._hostView)}get parentInjector(){const e=an(this._hostTNode,this._hostView),t=Gt(e,this._hostView),n=function(e,t,n){if(n.parent&&-1!==n.parent.injectorIndex){const e=n.parent.injectorIndex;let t=n.parent;for(;null!=t.parent&&e==t.parent.injectorIndex;)t=t.parent;return t}let r=Kt(e),o=t,i=t[6];for(;r>1;)o=o[15],i=o[6],r--;return i}(e,this._hostView,this._hostTNode);return Wt(e)&&null!=n?new gn(n,t):new gn(null,this._hostView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){return null!==this._lContainer[8]&&this._lContainer[8][e]||null}get length(){return this._lContainer.length-9}createEmbeddedView(e,t,n){const r=e.createEmbeddedView(t||{});return this.insert(r,n),r}createComponent(e,t,n,r,o){const i=n||this.parentInjector;if(!o&&null==e.ngModule&&i){const e=i.get(fe,null);e&&(o=e)}const s=e.create(i,r,void 0,o);return this.insert(s.hostView,t),s}insert(e,t){const n=e._lView,r=n[1];if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");if(this.allocateContainerIfNeeded(),He(n[3])){const t=this.indexOf(e);if(-1!==t)this.detach(t);else{const t=n[3],r=new ei(t,t[6],t[3]);r.detach(r.indexOf(e))}}const o=this._adjustIndex(t);return function(e,t,n,r){const o=9+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-9?(t[4]=n[o],ge(n,9+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[5],r=t[3][3][16];16!=(16&r[2])&&t[16]!==r&&(e[2]|=1),null===n?e[5]=[t]:n.push(t)}(s,t);const a=t[5];null!==a&&a.insertView(e),t[2]|=128}(r,n,this._lContainer,o),Ao(r,n,!0,Uo(o,this._lContainer)),e.attachToViewContainerRef(this),ge(this._lContainer[8],o,e),e}move(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");return this.insert(e,t)}indexOf(e){const t=this._lContainer[8];return null!==t?t.indexOf(e):-1}remove(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1);(function(e,t){const n=Ro(e,t);n&&Io(n[1],n)})(this._lContainer,t),me(this._lContainer[8],t)}detach(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1),n=Ro(this._lContainer,t);return n&&null!=me(this._lContainer[8],t)?new Yo(n):null}_adjustIndex(e,t=0){return null==e?this.length+t:e}allocateContainerIfNeeded(){null===this._lContainer[8]&&(this._lContainer[8]=[])}});const i=r[n.index];if(He(i))o=i,function(e,t){e[2]=-2}(o);else{let e;if(4===n.type)e=Ze(i);else if(e=r[11].createComment(""),qe(r)){const t=r[11],o=Xe(n,r);Fo(t,Vo(t,o),e,function(e,t){return Ge(e)?e.nextSibling(t):t.nextSibling}(t,o))}else Bo(r[1],r,e,n);r[n.index]=o=fo(i,r,e,n),mo(r,o)}return new ei(o,n,r)}function oi(e=!1){return function(e,t,n){if(!n&&ze(e)){const n=tt(e.index,t);return new Yo(n,n)}return 3===e.type||0===e.type||4===e.type||5===e.type?new Yo(t[16],t):null}(dt(),lt(),e)}let ii=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>si(),e})();const si=oi,ai=new J("Set Injector scope."),ci={},li={},ui=[];let hi=void 0;function di(){return void 0===hi&&(hi=new de),hi}function fi(e,t=null,n=null,r){return new pi(e,n,t||di(),r)}class pi{constructor(e,t,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const o=[];t&&be(t,n=>this.processProvider(n,e,t)),be([e],e=>this.processInjectorType(e,[],o)),this.records.set(X,mi(void 0,this));const i=this.records.get(ai);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof e?null:I(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,t=ee,n=w.Default){this.assertNotDestroyed();const r=ie(this);try{if(!(n&w.SkipSelf)){let t=this.records.get(e);if(void 0===t){const n=("function"==typeof(o=e)||"object"==typeof o&&o instanceof J)&&C(e);t=n&&this.injectableDefInScope(n)?mi(bi(e),ci):null,this.records.set(e,t)}if(null!=t)return this.hydrate(e,t)}return(n&w.Self?di():this.parent).get(e,t=n&w.Optional&&t===ee?null:t)}catch(i){if("NullInjectorError"===i.name){if((i.ngTempTokenPath=i.ngTempTokenPath||[]).unshift(I(e)),r)throw i;return function(e,t,n,r){const o=e.ngTempTokenPath;throw t.__source&&o.unshift(t.__source),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=I(t);if(Array.isArray(t))o=t.map(I).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):I(r)))}o=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(te,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e.ngTempTokenPath=null,e}(i,e,"R3InjectorError",this.source)}throw i}finally{ie(r)}var o}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((t,n)=>e.push(I(n))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,t,n){if(!(e=F(e)))return!1;let r=T(e);const o=null==r&&e.ngModule||void 0,i=void 0===o?e:o,s=-1!==n.indexOf(i);if(void 0!==o&&(r=T(o)),null==r)return!1;if(null!=r.imports&&!s){let e;n.push(i);try{be(r.imports,r=>{this.processInjectorType(r,t,n)&&(void 0===e&&(e=[]),e.push(r))})}finally{}if(void 0!==e)for(let t=0;t<e.length;t++){const{ngModule:n,providers:r}=e[t];be(r,e=>this.processProvider(e,n,r||ui))}}this.injectorDefTypes.add(i),this.records.set(i,mi(r.factory,ci));const a=r.providers;if(null!=a&&!s){const t=e;be(a,e=>this.processProvider(e,t,a))}return void 0!==o&&void 0!==e.providers}processProvider(e,t,n){let r=_i(e=F(e))?e:F(e&&e.provide);const o=function(e,t,n){return yi(e)?mi(void 0,e.useValue):mi(gi(e,t,n),ci)}(e,t,n);if(_i(e)||!0!==e.multi){const e=this.records.get(r);e&&void 0!==e.multi&&mr()}else{let t=this.records.get(r);t?void 0===t.multi&&mr():(t=mi(void 0,ci,!0),t.factory=()=>he(t.multi),this.records.set(r,t)),r=e,t.multi.push(e)}this.records.set(r,o)}hydrate(e,t){var n;return t.value===li?function(e){throw new Error(`Cannot instantiate cyclic dependency! ${e}`)}(I(e)):t.value===ci&&(t.value=li,t.value=t.factory()),"object"==typeof t.value&&t.value&&null!==(n=t.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(t.value),t.value}injectableDefInScope(e){return!!e.providedIn&&("string"==typeof e.providedIn?"any"===e.providedIn||e.providedIn===this.scope:this.injectorDefTypes.has(e.providedIn))}}function bi(e){const t=C(e),n=null!==t?t.factory:$e(e);if(null!==n)return n;const r=T(e);if(null!==r)return r.factory;if(e instanceof J)throw new Error(`Token ${I(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const n=ye(t,"?");throw new Error(`Can't resolve all parameters for ${I(e)}: (${n.join(", ")}).`)}const n=function(e){const t=e&&(e[j]||e[N]||e[A]&&e[A]());if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n`+`This will become an error in v10. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function gi(e,t,n){let r=void 0;if(_i(e)){const t=F(e);return $e(t)||bi(t)}if(yi(e))r=()=>F(e.useValue);else if((o=e)&&o.useFactory)r=()=>e.useFactory(...he(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>ce(F(e.useExisting));else{const o=F(e&&(e.useClass||e.provide));if(o||function(e,t,n){let r="";throw e&&t&&(r=` - only instances of Provider and Type are allowed, got: [${t.map(e=>e==n?"?"+n+"?":"...").join(", ")}]`),new Error(`Invalid provider for the NgModule '${I(e)}'`+r)}(t,n,e),!function(e){return!!e.deps}(e))return $e(o)||bi(o);r=()=>new o(...he(e.deps))}var o;return r}function mi(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function yi(e){return null!==e&&"object"==typeof e&&ne in e}function _i(e){return"function"==typeof e}const vi=function(e,t,n){return function(e,t=null,n=null,r){const o=fi(e,t,n,r);return o._resolveInjectorDefTypes(),o}({name:n},t,e,n)};let wi=(()=>{class e{static create(e,t){return Array.isArray(e)?vi(e,t,""):vi(e.providers,e.parent,e.name||"")}}return e.THROW_IF_NOT_FOUND=ee,e.NULL=new de,e.\u0275prov=E({token:e,providedIn:"any",factory:()=>ce(X)}),e.__NG_ELEMENT_ID__=-1,e})();const xi=new J("AnalyzeForEntryComponents");let Si=new Map;const Ei=new Set;function ki(e){return"string"==typeof e?e:e.text()}function Ci(e,t){let n=e.styles,r=e.classes,o=0;for(let i=0;i<t.length;i++){const e=t[i];"number"==typeof e?o=e:1==o?r=D(r,e):2==o&&(n=D(n,e+": "+t[++i]+";"))}null!==n&&(e.styles=n),null!==r&&(e.classes=r)}let Oi=null;function Ti(){if(!Oi){const e=U.Symbol;if(e&&e.iterator)Oi=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Oi=n)}}}return Oi}function ji(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}class Pi{constructor(e){this.wrapped=e}static wrap(e){return new Pi(e)}static unwrap(e){return Pi.isWrapped(e)?e.wrapped:e}static isWrapped(e){return e instanceof Pi}}function Ai(e){return!!Ni(e)&&(Array.isArray(e)||!(e instanceof Map)&&Ti()in e)}function Ni(e){return null!==e&&("function"==typeof e||"object"==typeof e)}function Ri(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Ii(e,t,n,r){const o=lt();return Ri(o,_t(),t)&&(ut(),function(e,t,n,r,o,i){const s=Xe(e,t),a=t[11];if(null==r)Ge(a)?a.removeAttribute(s,n,i):s.removeAttribute(n);else{const t=null==o?Yt(r):o(r,e.tagName||"",n);Ge(a)?a.setAttribute(s,n,t,i):i?s.setAttributeNS(i,n,t):s.setAttribute(n,t)}}(Rt(),o,e,t,n,r)),Ii}function Di(e,t,n,r,o,i,s,a){const c=lt(),l=ut(),u=e+19,h=l.firstCreatePass?function(e,t,n,r,o,i,s,a,c){const l=t.consts,u=Vr(t,n[6],e,0,s||null,it(l,a));eo(t,n,u,it(l,c)),It(t,u);const h=u.tViews=Yr(2,-1,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l),d=Zr(0,null,2,-1,null,null);return d.injectorIndex=u.injectorIndex,h.node=d,null!==t.queries&&(t.queries.template(t,u),h.queries=t.queries.embeddedTView(u)),u}(e,l,c,t,n,r,o,i,s):l.data[u];ft(h,!1);const d=c[11].createComment("");Bo(l,c,d,h),br(d,c),mo(c,c[u]=fo(d,c,d,h)),Be(h)&&Qr(l,c,h),null!=s&&Kr(c,h,a)}function Mi(e,t=w.Default){const n=lt();return null==n?ce(e,t):ln(dt(),n,F(e),t)}function $i(e){return function(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const e=n.length;let r=0;for(;r<e;){const o=n[r];if(zt(o))break;if(0===o)r+=2;else if("number"==typeof o)for(r++;r<e&&"string"==typeof n[r];)r++;else{if(o===t)return n[r+1];r+=2}}}return null}(dt(),e)}function Fi(){throw new Error("invalid")}function Li(e,t,n){const r=lt();return Ri(r,_t(),t)&&Xr(ut(),Rt(),r,e,t,r[11],n,!1),Li}function Hi(e,t,n,r,o){const i=o?"class":"style";Co(e,n,t.inputs[i],i,r)}function Vi(e,t,n,r){const o=lt(),i=ut(),s=19+e,a=o[11],c=o[s]=Lr(t,a,at.lFrame.currentNamespace),l=i.firstCreatePass?function(e,t,n,r,o,i,s){const a=t.consts,c=it(a,i),l=Vr(t,n[6],e,3,o,c);return eo(t,n,l,it(a,s)),null!==l.mergedAttrs&&Ci(l,l.mergedAttrs),null!==t.queries&&t.queries.elementStart(t,l),l}(e,i,o,0,t,n,r):i.data[s];ft(l,!0);const u=l.mergedAttrs;null!==u&&Vt(a,c,u);const h=l.classes;null!==h&&Go(a,c,h);const d=l.styles;null!==d&&Ko(a,c,d),Bo(i,o,c,l),0===at.lFrame.elementDepthCount&&br(c,o),at.lFrame.elementDepthCount++,Be(l)&&(Qr(i,o,l),Wr(i,l,o)),null!==r&&Kr(o,l)}function zi(){let e=dt();pt()?bt():(e=e.parent,ft(e,!1));const t=e;at.lFrame.elementDepthCount--;const n=ut();n.firstCreatePass&&(It(n,e),Ve(e)&&n.queries.elementEnd(e)),null!==t.classes&&function(e){return 0!=(16&e.flags)}(t)&&Hi(n,t,lt(),t.classes,!0),null!==t.styles&&function(e){return 0!=(32&e.flags)}(t)&&Hi(n,t,lt(),t.styles,!1)}function Bi(e,t,n,r){Vi(e,t,n,r),zi()}function Ui(e,t,n){const r=lt(),o=ut(),i=e+19,s=o.firstCreatePass?function(e,t,n,r,o){const i=t.consts,s=it(i,r),a=Vr(t,n[6],e,4,"ng-container",s);return null!==s&&Ci(a,s),eo(t,n,a,it(i,o)),null!==t.queries&&t.queries.elementStart(t,a),a}(e,o,r,t,n):o.data[i];ft(s,!0);const a=r[i]=r[11].createComment("");Bo(o,r,a,s),br(a,r),Be(s)&&(Qr(o,r,s),Wr(o,s,r)),null!=n&&Kr(r,s)}function qi(){let e=dt();const t=ut();pt()?bt():(e=e.parent,ft(e,!1)),t.firstCreatePass&&(It(t,e),Ve(e)&&t.queries.elementEnd(e))}function Wi(){return lt()}function Qi(e){return!!e&&"function"==typeof e.then}function Ki(e){return!!e&&"function"==typeof e.subscribe}function Gi(e,t,n=!1,r){const o=lt(),i=ut(),s=dt();return function(e,t,n,r,o,i,s=!1,a){const c=Be(r),l=e.firstCreatePass&&(e.cleanup||(e.cleanup=[])),u=So(t);let h=!0;if(3===r.type){const d=Xe(r,t),f=a?a(d):Ee,p=f.target||d,b=u.length,g=a?e=>a(Ze(e[r.index])).target:r.index;if(Ge(n)){let s=null;if(!a&&c&&(s=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const e=o[i];if(e===n&&o[i+1]===r){const e=t[7],n=o[i+2];return e.length>n?e[n]:null}"string"==typeof e&&(i+=2)}return null}(e,t,o,r.index)),null!==s)(s.__ngLastListenerFn__||s).__ngNextListenerFn__=i,s.__ngLastListenerFn__=i,h=!1;else{i=Zi(r,t,i,!1);const e=n.listen(f.name||p,o,i);u.push(i,e),l&&l.push(o,g,b,b+1)}}else i=Zi(r,t,i,!0),p.addEventListener(o,i,s),u.push(i),l&&l.push(o,g,b,s)}const d=r.outputs;let f;if(h&&null!==d&&(f=d[o])){const e=f.length;if(e)for(let n=0;n<e;n+=2){const e=t[f[n]][f[n+1]].subscribe(i),s=u.length;u.push(i,e),l&&l.push(o,r.index,s,-(s+1))}}}(i,o,o[11],s,e,t,n,r),Gi}function Yi(e,t,n){try{return!1!==t(n)}catch(r){return ko(e,r),!1}}function Zi(e,t,n,r){return function o(i){if(i===Function)return n;const s=2&e.flags?tt(e.index,t):t;0==(32&t[2])&&yo(s);let a=Yi(t,n,i),c=o.__ngNextListenerFn__;for(;c;)a=Yi(t,c,i)&&a,c=c.__ngNextListenerFn__;return r&&!1===a&&(i.preventDefault(),i.returnValue=!1),a}}function Ji(e=1){return function(e){return(at.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,at.lFrame.contextLView))[8]}(e)}function Xi(e,t){let n=null;const r=function(e){const t=e.attrs;if(null!=t){const e=t.indexOf(5);if(0==(1&e))return t[e+1]}return null}(e);for(let o=0;o<t.length;o++){const i=t[o];if("*"!==i){if(null===r?Er(e,i,!0):kr(r,i))return o}else n=o}return n}function es(e){const t=lt()[16][6];if(!t.projection){const n=t.projection=ye(e?e.length:1,null),r=n.slice();let o=t.child;for(;null!==o;){const t=e?Xi(o,e):0;null!==t&&(r[t]?r[t].projectionNext=o:n[t]=o,r[t]=o),o=o.next}}}function ts(e,t=0,n){const r=lt(),o=ut(),i=Vr(o,r[6],e,1,null,n||null);null===i.projection&&(i.projection=t),bt(),function(e,t,n){Qo(t[11],0,t,n,$o(e,n,t),zo(n.parent||t[6],t))}(o,r,i)}const ns=[];function rs(e,t,n,r,o){const i=e[n+1],s=null===t;let a=r?Rr(i):Dr(i),c=!1;for(;0!==a&&(!1===c||s);){const n=e[a+1];os(e[a],t)&&(c=!0,e[a+1]=r?$r(n):Ir(n)),a=r?Rr(n):Dr(n)}c&&(e[n+1]=r?Ir(i):$r(i))}function os(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&we(e,t)>=0}function is(e,t){return function(e,t,n,r){const o=lt(),i=ut(),s=vt(2);if(i.firstUpdatePass&&function(e,t,n,r){const o=e.data;if(null===o[n+1]){const r=o[At()+19],i=function(e,t){return t>=e.expandoStartIndex}(e,n);(function(e,t){return 0!=(16&e.flags)})(r)&&null===t&&!i&&(t=!1),t=function(e,t,n,r){const o=function(e){const t=at.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let i=t.residualClasses;if(null===o)0===t.classBindings&&(n=as(n=ss(null,e,t,n,!0),t.attrs,!0),i=null);else{const r=t.directiveStylingLast;if(-1===r||e[r]!==o)if(n=ss(o,e,t,n,!0),null===i){let n=function(e,t,n){const r=t.classBindings;if(0!==Dr(r))return e[Rr(r)]}(e,t);void 0!==n&&Array.isArray(n)&&(n=ss(null,e,t,n[1],!0),n=as(n,t.attrs,!0),function(e,t,n,r){e[Rr(t.classBindings)]=r}(e,t,0,n))}else i=function(e,t,n){let r=void 0;const o=t.directiveEnd;for(let i=1+t.directiveStylingLast;i<o;i++)r=as(r,e[i].hostAttrs,!0);return as(r,t.attrs,!0)}(e,t)}return void 0!==i&&(t.residualClasses=i),n}(o,r,t),function(e,t,n,r,o,i){let s=t.classBindings,a=Rr(s),c=Dr(s);e[r]=n;let l,u=!1;if(Array.isArray(n)){const e=n;l=e[1],(null===l||we(e,l)>0)&&(u=!0)}else l=n;if(o)if(0!==c){const t=Rr(e[a+1]);e[r+1]=Nr(t,a),0!==t&&(e[t+1]=Mr(e[t+1],r)),e[a+1]=131071&e[a+1]|r<<17}else e[r+1]=Nr(a,0),0!==a&&(e[a+1]=Mr(e[a+1],r)),a=r;else e[r+1]=Nr(c,0),0===a?a=r:e[c+1]=Mr(e[c+1],r),c=r;u&&(e[r+1]=Ir(e[r+1])),rs(e,l,r,!0),rs(e,l,r,!1),function(e,t,n,r,o){const i=e.residualClasses;null!=i&&"string"==typeof t&&we(i,t)>=0&&(n[r+1]=$r(n[r+1]))}(t,l,e,r),s=Nr(a,c),t.classBindings=s}(o,r,t,n,i)}}(i,e,s),t!==Tr&&Ri(o,s,t)){let r;null==n&&(r=function(){const e=at.lFrame;return null===e?null:e.currentSanitizer}())&&(n=r),function(e,t,n,r,o,i,s,a){if(3!==t.type)return;const c=e.data,l=c[a+1];ls(1==(1&l)?cs(c,t,n,o,Dr(l),!0):void 0)||(ls(i)||function(e){return 2==(2&e)}(l)&&(i=cs(c,null,n,o,a,!0)),function(e,t,n,r,o){const i=Ge(e);o?i?e.addClass(n,r):n.classList.add(r):i?e.removeClass(n,r):n.classList.remove(r)}(r,0,Je(At(),n),o,i))}(i,i.data[At()+19],o,o[11],e,o[s+1]=function(e,t){return null==e||("function"==typeof t?e=t(e):"string"==typeof t?e+=t:"object"==typeof e&&(e=I(Tn(e)))),e}(t,n),0,s)}}(e,t,null),is}function ss(e,t,n,r,o){let i=null;const s=n.directiveEnd;let a=n.directiveStylingLast;for(-1===a?a=n.directiveStart:a++;a<s&&(i=t[a],r=as(r,i.hostAttrs,o),i!==e);)a++;return null!==e&&(n.directiveStylingLast=a),r}function as(e,t,n){const r=n?1:2;let o=-1;if(null!==t)for(let i=0;i<t.length;i++){const s=t[i];"number"==typeof s?o=s:o===r&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),_e(e,s,!!n||t[++i]))}return void 0===e?null:e}function cs(e,t,n,r,o,i){const s=null===t;let a=void 0;for(;o>0;){const t=e[o],i=Array.isArray(t),c=i?t[1]:t,l=null===c;let u=n[o+1];u===Tr&&(u=l?ns:void 0);let h=l?ve(u,r):c===r?u:void 0;if(i&&!ls(h)&&(h=ve(t,r)),ls(h)&&(a=h,s))return a;const d=e[o+1];o=s?Rr(d):Dr(d)}if(null!==t){let e=i?t.residualClasses:t.residualStyles;null!=e&&(a=ve(e,r))}return a}function ls(e){return void 0!==e}function us(e,t=""){const n=lt(),r=ut(),o=e+19,i=r.firstCreatePass?Vr(r,n[6],e,3,null,null):r.data[o],s=n[o]=function(e,t){return Ge(t)?t.createText(e):t.createTextNode(e)}(t,n[11]);Bo(r,n,s,i),ft(i,!1)}function hs(e,t,n){const r=lt(),o=function(e,t,n,r){return Ri(e,_t(),n)?t+Yt(n)+r:Tr}(r,e,t,n);return o!==Tr&&Oo(r,At(),o),hs}function ds(e,t,n,r,o,i,s){const a=lt(),c=function(e,t,n,r,o,i,s,a){const c=function(e,t,n,r,o){const i=function(e,t,n,r){const o=Ri(e,t,n);return Ri(e,t+1,r)||o}(e,t,n,r);return Ri(e,t+2,o)||i}(e,yt(),n,o,s);return vt(3),c?t+Yt(n)+r+Yt(o)+i+Yt(s)+a:Tr}(a,e,t,n,r,o,i,s);return c!==Tr&&Oo(a,At(),c),ds}function fs(e,t,n){const r=lt();return Ri(r,_t(),t)&&Xr(ut(),Rt(),r,e,t,r[11],n,!0),fs}function ps(e,t){const n=nt(e)[1],r=n.data.length-1;It(n,{directiveStart:r,directiveEnd:r+1})}function bs(e){let t=Object.getPrototypeOf(e.type.prototype).constructor,n=!0;const r=[e];for(;t;){let o=void 0;if(Ue(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new Error("Directives cannot inherit Components");o=t.\u0275dir}if(o){if(n){r.push(o);const t=e;t.inputs=gs(e.inputs),t.declaredInputs=gs(e.declaredInputs),t.outputs=gs(e.outputs);const n=o.hostBindings;n&&_s(e,n);const i=o.viewQuery,s=o.contentQueries;if(i&&ms(e,i),s&&ys(e,s),S(e.inputs,o.inputs),S(e.declaredInputs,o.declaredInputs),S(e.outputs,o.outputs),Ue(o)&&o.data.animation){const t=e.data;t.animation=(t.animation||[]).concat(o.data.animation)}t.afterContentChecked=t.afterContentChecked||o.afterContentChecked,t.afterContentInit=e.afterContentInit||o.afterContentInit,t.afterViewChecked=e.afterViewChecked||o.afterViewChecked,t.afterViewInit=e.afterViewInit||o.afterViewInit,t.doCheck=e.doCheck||o.doCheck,t.onDestroy=e.onDestroy||o.onDestroy,t.onInit=e.onInit||o.onInit}const t=o.features;if(t)for(let r=0;r<t.length;r++){const o=t[r];o&&o.ngInherit&&o(e),o===bs&&(n=!1)}}t=Object.getPrototypeOf(t)}!function(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=Ut(o.hostAttrs,n=Ut(n,o.hostAttrs))}}(r)}function gs(e){return e===Ee?{}:e===ke?[]:e}function ms(e,t){const n=e.viewQuery;e.viewQuery=n?(e,r)=>{t(e,r),n(e,r)}:t}function ys(e,t){const n=e.contentQueries;e.contentQueries=n?(e,r,o)=>{t(e,r,o),n(e,r,o)}:t}function _s(e,t){const n=e.hostBindings;e.hostBindings=n?(e,r)=>{t(e,r),n(e,r)}:t}class vs{constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}}function ws(e){e.type.prototype.ngOnChanges&&(e.setInput=xs,e.onChanges=function(){const e=Ss(this),t=e&&e.current;if(t){const n=e.previous;if(n===Ee)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}})}function xs(e,t,n,r){const o=Ss(e)||function(e,t){return e.__ngSimpleChanges__=t}(e,{previous:Ee,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],c=s[a];i[a]=new vs(c&&c.currentValue,t,s===Ee),e[r]=t}function Ss(e){return e.__ngSimpleChanges__||null}function Es(e,t,n,r,o){if(e=F(e),Array.isArray(e))for(let i=0;i<e.length;i++)Es(e[i],t,n,r,o);else{const i=ut(),s=lt();let a=_i(e)?e:F(e.provide),c=gi(e);const l=dt(),u=65535&l.providerIndexes,h=l.directiveStart,d=l.providerIndexes>>16;if(_i(e)||!e.multi){const r=new Ht(c,o,Mi),f=Os(a,t,o?u:u+d,h);-1===f?(cn(rn(l,s),i,a),ks(i,e,t.length),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=65536),n.push(r),s.push(r)):(n[f]=r,s[f]=r)}else{const f=Os(a,t,u+d,h),p=Os(a,t,u,u+d),b=f>=0&&n[f],g=p>=0&&n[p];if(o&&!g||!o&&!b){cn(rn(l,s),i,a);const u=function(e,t,n,r,o){const i=new Ht(e,n,Mi);return i.multi=[],i.index=t,i.componentProviders=0,Cs(i,o,r&&!n),i}(o?js:Ts,n.length,o,r,c);!o&&g&&(n[p].providerFactory=u),ks(i,e,t.length,0),t.push(a),l.directiveStart++,l.directiveEnd++,o&&(l.providerIndexes+=65536),n.push(u),s.push(u)}else ks(i,e,f>-1?f:p,Cs(n[o?p:f],c,!o&&r));!o&&r&&g&&n[p].componentProviders++}}}function ks(e,t,n,r){const o=_i(t);if(o||t.useClass){const i=(t.useClass||t).prototype.ngOnDestroy;if(i){const s=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const e=s.indexOf(n);-1===e?s.push(n,[r,i]):s[e+1].push(r,i)}else s.push(n,i)}}}function Cs(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function Os(e,t,n,r){for(let o=n;o<r;o++)if(t[o]===e)return o;return-1}function Ts(e,t,n,r){return Ps(this.multi,[])}function js(e,t,n,r){const o=this.multi;let i;if(this.providerFactory){const e=this.providerFactory.componentProviders,t=fn(n,n[1],this.providerFactory.index,r);i=t.slice(0,e),Ps(o,i);for(let n=e;n<t.length;n++)i.push(t[n])}else i=[],Ps(o,i);return i}function Ps(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function As(e,t=[]){return n=>{n.providersResolver=(n,r)=>function(e,t,n){const r=ut();if(r.firstCreatePass){const o=Ue(e);Es(n,r.data,r.blueprint,o,!0),Es(t,r.data,r.blueprint,o,!1)}}(n,r?r(e):e,t)}}ws.ngInherit=!0;class Ns{}class Rs{resolveComponentFactory(e){throw function(e){const t=Error(`No component factory found for ${I(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(e)}}let Is=(()=>{class e{}return e.NULL=new Rs,e})(),Ds=(()=>{class e{constructor(e){this.nativeElement=e}}return e.__NG_ELEMENT_ID__=()=>Ms(e),e})();const Ms=function(e){return ti(e,dt(),lt())};class $s{}const Fs=function(){var e={Important:1,DashCase:2};return e[e.Important]="Important",e[e.DashCase]="DashCase",e}();let Ls=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Hs(),e})();const Hs=function(){const e=lt(),t=tt(dt().index,e);return function(e){const t=e[11];if(Ge(t))return t;throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")}(Le(t)?t:e)};let Vs=(()=>{class e{}return e.\u0275prov=E({token:e,providedIn:"root",factory:()=>null}),e})();class zs{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Bs=new zs("9.1.1");class Us{constructor(){}supports(e){return Ai(e)}create(e){return new Ws(e)}}const qs=(e,t)=>t;class Ws{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||qs}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,o=null;for(;t||n;){const i=!n||t&&t.currentIndex<Ys(n,r,o)?t:n,s=Ys(i,r,o),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)r++;else{o||(o=[]);const e=s-r,t=a-r;if(e!=t){for(let n=0;n<e;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;t<=i&&i<e&&(o[n]=r+1)}o[i.previousIndex]=t-e}}s!==a&&e(i,s,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!Ai(e))throw new Error(`Error trying to diff '${I(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,o=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==o&&ji(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,t)),ji(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,t),i=!0),o=o._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Ti()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==o&&ji(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,e,r,t)),ji(o.item,e)||this._addIdentityChange(o,e)):(o=this._mismatch(o,e,r,t),i=!0),o=o._next,t++}),this.length=t;return this._truncate(o),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e,t;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=t)e.previousIndex=e.currentIndex,t=e._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(ji(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(ji(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):e=this._addAfter(new Qs(t,n),o,r),e}_verifyReinsertion(e,t,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new Gs),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Gs),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class Qs{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Ks{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&ji(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class Gs{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new Ks,this.map.set(t,n)),n.add(e)}get(e,t){const n=this.map.get(e);return n?n.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Ys(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}class Zs{constructor(){}supports(e){return e instanceof Map||Ni(e)}create(){return new Js}}class Js{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||Ni(e)))throw new Error(`Error trying to diff '${I(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new Xs(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){ji(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class Xs{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let ea=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(null!=n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new v,new y]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n}}return e.\u0275prov=E({token:e,providedIn:"root",factory:()=>new e([new Us])}),e})(),ta=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new v,new y]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}return e.\u0275prov=E({token:e,providedIn:"root",factory:()=>new e([new Zs])}),e})();const na=[new Zs],ra=new ea([new Us]),oa=new ta(na);let ia=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>sa(e,Ds),e})();const sa=function(e,t){return ni(e,t,dt(),lt())};let aa=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>ca(e,Ds),e})();const ca=function(e,t){return ri(e,t,dt(),lt())},la={};class ua extends Is{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=Me(e);return new fa(t,this.ngModule)}}function ha(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const da=new J("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Jt});class fa extends Ns{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(Or).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return ha(this.componentDef.inputs)}get outputs(){return ha(this.componentDef.outputs)}create(e,t,n,r){const o=(r=r||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,la,o);return i!==la||r===la?i:t.get(n,r,o)}}}(e,r.injector):e,i=o.get($s,Ye),s=o.get(Vs,null),a=i.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",l=n?function(e,t,n){if(Ge(e))return e.selectRootElement(t,n===Se.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(a,n,this.componentDef.encapsulation):Lr(c,i.createRenderer(null,this.componentDef),function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(c)),u=this.componentDef.onPush?576:528,h="string"==typeof n&&/^#root-ng-internal-isolated-\d+/.test(n),d={components:[],scheduler:Jt,clean:xo,playerHandler:null,flags:0},f=Yr(0,-1,null,1,0,null,null,null,null,null),p=Hr(null,f,d,u,null,null,i,a,s,o);let b,g;kt(p,null);try{const e=function(e,t,n,r,o,i){const s=n[1];n[19]=e;const a=Vr(s,null,0,3,null,null),c=a.mergedAttrs=t.hostAttrs;null!==c&&(Ci(a,c),null!==e&&(Vt(o,e,c),null!==a.classes&&Go(o,e,a.classes),null!==a.styles&&Ko(o,e,a.styles)));const l=r.createRenderer(e,t),u=Hr(n,Gr(t),null,t.onPush?64:16,n[19],a,r,l,void 0);return s.firstCreatePass&&(cn(rn(a,n),s,t.type),io(s,a),ao(a,n.length,1)),mo(n,u),n[19]=u}(l,this.componentDef,p,i,a);if(l)if(n)Vt(a,l,["ng-version",Bs.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!xr(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&Vt(a,l,e),t&&t.length>0&&Go(a,l,t.join(" "))}g=et(p[1],0),t&&(g.projection=t.map(e=>Array.from(e))),b=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=dt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),oo(e,r,1),co(e,t,n));const o=fn(t,e,t.length-1,r);br(o,t);const i=Xe(r,t);return i&&br(i,t),o}(i,n,t);r.components.push(s),e[8]=s,o&&o.forEach(e=>e(s,t)),t.contentQueries&&t.contentQueries(1,s,n.length-1);const a=dt();if(i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){Nt(a.index-19);const e=n[1];to(e,t),no(e,n,t.hostVars),ro(t,s)}return s}(e,this.componentDef,p,d,[ps]),zr(f,p,null)}finally{Pt()}const m=new pa(this.componentType,b,ti(Ds,g,p),p,g);return n&&!h||(m.hostView._tViewNode.child=g),m}}class pa extends class{}{constructor(e,t,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.destroyCbs=[],this.instance=t,this.hostView=this.changeDetectorRef=new Zo(r),this.hostView._tViewNode=function(e,t,n,r){let o=e.node;return null==o&&(e.node=o=Zr(0,null,2,-1,null,null)),r[6]=o}(r[1],0,0,r),this.componentType=e}get injector(){return new gn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(e=>e()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(e){this.destroyCbs&&this.destroyCbs.push(e)}}const ba=void 0;var ga=["en",[["a","p"],["AM","PM"],ba],[["AM","PM"],ba,ba],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],ba,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],ba,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",ba,"{1} 'at' {0}",ba],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];let ma={};function ya(e,t,n){"string"!=typeof t&&(n=t,t=e[Sa.LocaleId]),t=t.toLowerCase().replace(/_/g,"-"),ma[t]=e,n&&(ma[t][Sa.ExtraData]=n)}function _a(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}(e);let n=xa(t);if(n)return n;const r=t.split("-")[0];if(n=xa(r),n)return n;if("en"===r)return ga;throw new Error(`Missing locale data for the locale "${e}".`)}function va(e){return _a(e)[Sa.CurrencyCode]||null}function wa(e){return _a(e)[Sa.PluralCase]}function xa(e){return e in ma||(ma[e]=U.ng&&U.ng.common&&U.ng.common.locales&&U.ng.common.locales[e]),ma[e]}const Sa=function(){var e={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};return e[e.LocaleId]="LocaleId",e[e.DayPeriodsFormat]="DayPeriodsFormat",e[e.DayPeriodsStandalone]="DayPeriodsStandalone",e[e.DaysFormat]="DaysFormat",e[e.DaysStandalone]="DaysStandalone",e[e.MonthsFormat]="MonthsFormat",e[e.MonthsStandalone]="MonthsStandalone",e[e.Eras]="Eras",e[e.FirstDayOfWeek]="FirstDayOfWeek",e[e.WeekendRange]="WeekendRange",e[e.DateFormat]="DateFormat",e[e.TimeFormat]="TimeFormat",e[e.DateTimeFormat]="DateTimeFormat",e[e.NumberSymbols]="NumberSymbols",e[e.NumberFormats]="NumberFormats",e[e.CurrencyCode]="CurrencyCode",e[e.CurrencySymbol]="CurrencySymbol",e[e.CurrencyName]="CurrencyName",e[e.Currencies]="Currencies",e[e.Directionality]="Directionality",e[e.PluralCase]="PluralCase",e[e.ExtraData]="ExtraData",e}();let Ea="en-US";function ka(e){var t,n;n="Expected localeId to be defined",null==(t=e)&&function(e,t,n,r){throw new Error(`ASSERTION ERROR: ${e}`+` [Expected=> null != ${t} <=Actual]`)}(n,t),"string"==typeof e&&(Ea=e.toLowerCase().replace(/_/g,"-"))}const Ca=new Map;class Oa extends fe{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new ua(this);const n=Fe(e),r=e[G]||null;r&&ka(r),this._bootstrapComponents=Xt(n.bootstrap),this._r3Injector=fi(e,t,[{provide:fe,useValue:this},{provide:Is,useValue:this.componentFactoryResolver}],I(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,t=wi.THROW_IF_NOT_FOUND,n=w.Default){return e===wi||e===fe||e===X?this:this._r3Injector.get(e,t,n)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class Ta extends pe{constructor(e){super(),this.moduleType=e,null!==Fe(e)&&function e(t){if(null!==t.\u0275mod.id){const e=t.\u0275mod.id;(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${I(t)} vs ${I(t.name)}`)})(e,Ca.get(e),t),Ca.set(e,t)}let n=t.\u0275mod.imports;n instanceof Function&&(n=n()),n&&n.forEach(t=>e(t))}(e)}create(e){return new Oa(this.moduleType,e)}}function ja(e,t){const n=ut();let r;const o=e+19;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}throw new Error(`The pipe '${e}' could not be found!`)}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=$e(r.type)),s=se(Mi),a=i();return se(s),function(e,t,n,r){const o=n+19;o>=e.data.length&&(e.data[o]=null,e.blueprint[o]=null),t[o]=r}(n,lt(),e,a),a}function Pa(e,t,n){const r=lt(),o=function(e,t){return e[t+19]}(r,e);return function(e,t){return Pi.isWrapped(t)&&(t=Pi.unwrap(t),e[yt()]=Tr),t}(r,function(e,t){return e[1].data[t+19].pure}(r,e)?function(e,t,n,r,o,i){const s=t+n;return Ri(e,s,o)?function(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function(e,t){const n=e[t];return n===Tr?void 0:n}(e,s+1)}(r,function(){const e=at.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),t,o.transform,n,o):o.transform(n))}class Aa extends r.b{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let r,i=e=>null,s=()=>null;e&&"object"==typeof e?(r=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(i=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(s=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(r=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(i=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(s=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const a=super.subscribe(r,i,s);return e instanceof o.a&&e.add(a),a}}function Na(){return this._results[Ti()]()}class Ra{constructor(){this.dirty=!0,this._results=[],this.changes=new Aa,this.length=0;const e=Ti(),t=Ra.prototype;t[e]||(t[e]=Na)}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e){this._results=function e(t,n){void 0===n&&(n=t);for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?(n===t&&(n=t.slice(0,r)),e(o,n)):n!==t&&n.push(o)}return n}(e),this.dirty=!1,this.length=this._results.length,this.last=this._results[this.length-1],this.first=this._results[0]}notifyOnChanges(){this.changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}class Ia{constructor(e){this.queryList=e,this.matches=null}clone(){return new Ia(this.queryList)}setDirty(){this.queryList.setDirty()}}class Da{constructor(e=[]){this.queries=e}createEmbeddedView(e){const t=e.queries;if(null!==t){const n=null!==e.contentQueries?e.contentQueries[0]:t.length,r=[];for(let e=0;e<n;e++){const n=t.getByIndex(e);r.push(this.queries[n.indexInDeclarationView].clone())}return new Da(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)null!==Ka(e,t).matches&&this.queries[t].setDirty()}}class Ma{constructor(e,t,n,r=null){this.predicate=e,this.descendants=t,this.isStatic=n,this.read=r}}class $a{constructor(e=[]){this.queries=e}elementStart(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let n=0;n<this.length;n++){const r=null!==t?t.length:0,o=this.getByIndex(n).embeddedTView(e,r);o&&(o.indexInDeclarationView=n,null!==t?t.push(o):t=[o])}return null!==t?new $a(t):null}template(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Fa{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new Fa(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&!1===this.metadata.descendants){const t=this._declarationNodeIndex;let n=e.parent;for(;null!==n&&4===n.type&&n.index!==t;)n=n.parent;return t===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(e,t){if(Array.isArray(this.metadata.predicate)){const n=this.metadata.predicate;for(let r=0;r<n.length;r++)this.matchTNodeWithReadOption(e,t,La(t,n[r]))}else{const n=this.metadata.predicate;n===ia?0===t.type&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,dn(t,e,n,!1,!1))}}matchTNodeWithReadOption(e,t,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===Ds||r===aa||r===ia&&0===t.type)this.addMatch(t.index,-2);else{const n=dn(t,e,r,!1,!1);null!==n&&this.addMatch(t.index,n)}else this.addMatch(t.index,n)}}addMatch(e,t){null===this.matches?this.matches=[e,t]:this.matches.push(e,t)}}function La(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function Ha(e,t,n,r){return-1===n?function(e,t){return 3===e.type||4===e.type?ti(Ds,e,t):0===e.type?ni(ia,Ds,e,t):null}(t,e):-2===n?function(e,t,n){return n===Ds?ti(Ds,t,e):n===ia?ni(ia,Ds,t,e):n===aa?ri(aa,Ds,t,e):void 0}(e,t,r):fn(e,e[1],n,t)}function Va(e,t,n,r){const o=t[5].queries[r];if(null===o.matches){const r=e.data,i=n.matches,s=[];for(let e=0;e<i.length;e+=2){const o=i[e];s.push(o<0?null:Ha(t,r[o],i[e+1],n.metadata.read))}o.matches=s}return o.matches}function za(e){const t=lt(),n=ut(),r=xt();St(r+1);const o=Ka(n,r);if(e.dirty&&rt(t)===o.metadata.isStatic){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?function e(t,n,r,o){const i=t.queries.getByIndex(r),s=i.matches;if(null!==s){const a=Va(t,n,i,r);for(let t=0;t<s.length;t+=2){const r=s[t];if(r>0)o.push(a[t/2]);else{const i=s[t+1],a=n[-r];for(let t=9;t<a.length;t++){const n=a[t];n[17]===n[3]&&e(n[1],n,i,o)}if(null!==a[5]){const t=a[5];for(let n=0;n<t.length;n++){const r=t[n];e(r[1],r,i,o)}}}}}return o}(n,t,r,[]):Va(n,t,o,r);e.reset(i),e.notifyOnChanges()}return!0}return!1}function Ba(e,t,n){!function(e,t,n,r,o,i){e.firstCreatePass&&(Qa(e,new Ma(n,r,!0,o),-1),e.staticViewQueries=!0),Wa(e,t)}(ut(),lt(),e,t,n)}function Ua(e,t,n,r){!function(e,t,n,r,o,i,s,a){e.firstCreatePass&&(Qa(e,new Ma(n,r,!1,o),s.index),function(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(e.contentQueries.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(e,a)),Wa(e,t)}(ut(),lt(),t,n,r,0,dt(),e)}function qa(){return e=lt(),t=xt(),e[5].queries[t].queryList;var e,t}function Wa(e,t){const n=new Ra;!function(e,t,n,r){const o=So(t);o.push(n),e.firstCreatePass&&Eo(e).push(r,o.length-1)}(e,t,n,n.destroy),null===t[5]&&(t[5]=new Da),t[5].queries.push(new Ia(n))}function Qa(e,t,n){null===e.queries&&(e.queries=new $a),e.queries.track(new Fa(t,n))}function Ka(e,t){return e.queries.getByIndex(t)}function Ga(e=w.Default){const t=oi(!0);if(null!=t||e&w.Optional)return t;throw new Error("No provider for ChangeDetectorRef!")}const Ya=new J("Application Initializer");let Za=(()=>{class e{constructor(e){this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const t=this.appInits[n]();Qi(t)&&e.push(t)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}return e.\u0275fac=function(t){return new(t||e)(ce(Ya,8))},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})();const Ja=new J("AppId"),Xa={provide:Ja,useFactory:function(){return`${ec()}${ec()}${ec()}`},deps:[]};function ec(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const tc=new J("Platform Initializer"),nc=new J("Platform ID"),rc=new J("appBootstrapListener");let oc=(()=>{class e{log(e){console.log(e)}warn(e){console.warn(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})();const ic=new J("LocaleId"),sc=new J("DefaultCurrencyCode");class ac{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}const cc=function(e){return new Ta(e)},lc=cc,uc=function(e){return Promise.resolve(cc(e))},hc=function(e){const t=cc(e),n=Xt(Fe(e).declarations).reduce((e,t)=>{const n=Me(t);return n&&e.push(new fa(n)),e},[]);return new ac(t,n)},dc=hc,fc=function(e){return Promise.resolve(hc(e))};let pc=(()=>{class e{constructor(){this.compileModuleSync=lc,this.compileModuleAsync=uc,this.compileModuleAndAllComponentsSync=dc,this.compileModuleAndAllComponentsAsync=fc}clearCache(){}clearCacheFor(e){}getModuleId(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})();const bc=new J("compilerOptions"),gc=(()=>Promise.resolve(0))();function mc(e){"undefined"==typeof Zone?gc.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}class yc{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Aa(!1),this.onMicrotaskEmpty=new Aa(!1),this.onStable=new Aa(!1),this.onError=new Aa(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=t,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let e=U.requestAnimationFrame,t=U.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){-1===e.lastRequestAnimationFrameId&&(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(U,()=>{e.lastRequestAnimationFrameId=-1,xc(e),wc(e)}),xc(e))}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,r,o,i,s,a)=>{try{return Sc(e),n.invokeTask(o,i,s,a)}finally{t&&"eventTask"===i.type&&t(),Ec(e)}},onInvoke:(t,n,r,o,i,s,a)=>{try{return Sc(e),t.invoke(r,o,i,s,a)}finally{Ec(e)}},onHasTask:(t,n,r,o)=>{t.hasTask(r,o),n===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,xc(e),wc(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,n,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!yc.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(yc.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,e,vc,_c,_c);try{return o.runTask(i,t,n)}finally{o.cancelTask(i)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}function _c(){}const vc={};function wc(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function xc(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId)}function Sc(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Ec(e){e._nesting--,wc(e)}class kc{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Aa,this.onMicrotaskEmpty=new Aa,this.onStable=new Aa,this.onError=new Aa}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}let Cc=(()=>{class e{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{yc.assertNotInAngularZone(),mc(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())mc(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}return e.\u0275fac=function(t){return new(t||e)(ce(yc))},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})(),Oc=(()=>{class e{constructor(){this._applications=new Map,Ac.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return Ac.findTestabilityInTree(this,e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})();class Tc{addToWindow(e){}findTestabilityInTree(e,t,n){return null}}function jc(e){Ac=e}let Pc,Ac=new Tc,Nc=function(e,t,n){const r=e.get(bc,[]).concat(t),o=new Ta(n);if(0===Si.size)return Promise.resolve(o);const i=function(e){const t=[];return e.forEach(e=>e&&t.push(...e)),t}(r.map(e=>e.providers));if(0===i.length)return Promise.resolve(o);const s=function(){const e=U.ng;if(!e||!e.\u0275compilerFacade)throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");return e.\u0275compilerFacade}(),a=wi.create({providers:i}).get(s.ResourceLoader);return function(e){const t=[],n=new Map;function r(e){let t=n.get(e);if(!t){const r=(e=>Promise.resolve(a.get(e)))(e);n.set(e,t=r.then(ki))}return t}return Si.forEach((e,n)=>{const o=[];e.templateUrl&&o.push(r(e.templateUrl).then(t=>{e.template=t}));const i=e.styleUrls,s=e.styles||(e.styles=[]),a=e.styles.length;i&&i.forEach((t,n)=>{s.push(""),o.push(r(t).then(r=>{s[a+n]=r,i.splice(i.indexOf(t),1),0==i.length&&(e.styleUrls=void 0)}))});const c=Promise.all(o).then(()=>function(e){Ei.delete(e)}(n));t.push(c)}),Si=new Map,Promise.all(t).then(()=>{})}().then(()=>o)};const Rc=new J("AllowMultipleToken");class Ic{constructor(e,t){this.name=e,this.token=t}}function Dc(e,t,n=[]){const r=`Platform: ${t}`,o=new J(r);return(t=[])=>{let i=Mc();if(!i||i.injector.get(Rc,!1))if(e)e(n.concat(t).concat({provide:o,useValue:!0}));else{const e=n.concat(t).concat({provide:o,useValue:!0},{provide:ai,useValue:"platform"});!function(e){if(Pc&&!Pc.destroyed&&!Pc.injector.get(Rc,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Pc=e.get($c);const t=e.get(tc,null);t&&t.forEach(e=>e())}(wi.create({providers:e,name:r}))}return function(e){const t=Mc();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}(o)}}function Mc(){return Pc&&!Pc.destroyed?Pc:null}let $c=(()=>{class e{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;return n="noop"===e?new kc:("zone.js"===e?void 0:e)||new yc({enableLongStackTrace:Fn(),shouldCoalesceEventChangeDetection:t}),n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),r=[{provide:yc,useValue:n}];return n.run(()=>{const t=wi.create({providers:r,parent:this.injector,name:e.moduleType.name}),o=e.create(t),i=o.injector.get(wn,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return o.onDestroy(()=>Hc(this._modules,o)),n.runOutsideAngular(()=>n.onError.subscribe({next:e=>{i.handleError(e)}})),function(e,t,n){try{const r=n();return Qi(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(i,n,()=>{const e=o.injector.get(Za);return e.runInitializers(),e.donePromise.then(()=>(ka(o.injector.get(ic,"en-US")||"en-US"),this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const n=Fc({},t);return Nc(this.injector,n,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(Lc);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${I(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. `+"Please define one of these.");e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(t){return new(t||e)(ce(wi))},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})();function Fc(e,t){return Array.isArray(t)?t.reduce(Fc,e):Object.assign(Object.assign({},e),t)}let Lc=(()=>{class e{constructor(e,t,n,r,o,a){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=o,this._initStatus=a,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=Fn(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const l=new i.a(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),u=new i.a(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{yc.assertNotInAngularZone(),mc(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{yc.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(s.a)(l,u.pipe(e=>{return c()((t=p,function(e){let n;n="function"==typeof t?t:function(){return t};const r=Object.create(e,d);return r.source=e,r.subjectFactory=n,r})(e));var t}))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof Ns?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(fe),o=n.create(wi.NULL,[],t||n.selector,r);o.onDestroy(()=>{this._unloadComponent(o)});const i=o.injector.get(Cc,null);return i&&o.injector.get(Oc).registerApplication(o.location.nativeElement,i),this._loadComponent(o),Fn()&&this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."),o}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(this._enforceNoNewChanges)for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;Hc(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(rc,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}_unloadComponent(e){this.detachView(e.hostView),Hc(this.components,e)}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy())}get viewCount(){return this._views.length}}return e.\u0275fac=function(t){return new(t||e)(ce(yc),ce(oc),ce(wi),ce(wn),ce(Is),ce(Za))},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})();function Hc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Vc{}class zc{}const Bc={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let Uc=(()=>{class e{constructor(e,t){this._compiler=e,this._config=t||Bc}load(e){return this.loadAndCompile(e)}loadAndCompile(e){let[t,r]=e.split("#");return void 0===r&&(r="default"),n("zn8P")(t).then(e=>e[r]).then(e=>qc(e,t,r)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,r]=e.split("#"),o="NgFactory";return void 0===r&&(r="default",o=""),n("zn8P")(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[r+o]).then(e=>qc(e,t,r))}}return e.\u0275fac=function(t){return new(t||e)(ce(pc),ce(zc,8))},e.\u0275prov=E({token:e,factory:e.\u0275fac}),e})();function qc(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}const Wc=function(e){return null},Qc=Dc(null,"core",[{provide:nc,useValue:"unknown"},{provide:$c,deps:[wi]},{provide:Oc,deps:[]},{provide:oc,deps:[]}]),Kc=[{provide:Lc,useClass:Lc,deps:[yc,oc,wi,wn,Is,Za]},{provide:da,deps:[yc],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}},{provide:Za,useClass:Za,deps:[[new y,Ya]]},{provide:pc,useClass:pc,deps:[]},Xa,{provide:ea,useFactory:function(){return ra},deps:[]},{provide:ta,useFactory:function(){return oa},deps:[]},{provide:ic,useFactory:function(e){return ka(e=e||"undefined"!=typeof $localize&&$localize.locale||"en-US"),e},deps:[[new m(ic),new y,new v]]},{provide:sc,useValue:"USD"}];let Gc=(()=>{class e{constructor(e){}}return e.\u0275mod=Ae({type:e}),e.\u0275inj=k({factory:function(t){return new(t||e)(ce(Lc))},providers:Kc}),e})()},FU6l:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))()},GoAz:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("IdLP"),o=n("1MAX"),i=n("bwdy"),s=n("qEfY"),a=n("czMQ"),c=n("sWLk"),l=n("/vgl"),u=n("eY+9");function h(e,t){return t?function(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[s.a]}(e))return function(e,t){return new r.a(n=>{const r=new i.a;return r.add(t.schedule(()=>{const o=e[s.a]();r.add(o.subscribe({next(e){r.add(t.schedule(()=>n.next(e)))},error(e){r.add(t.schedule(()=>n.error(e)))},complete(){r.add(t.schedule(()=>n.complete()))}}))})),r})}(e,t);if(Object(l.a)(e))return function(e,t){return new r.a(n=>{const r=new i.a;return r.add(t.schedule(()=>e.then(e=>{r.add(t.schedule(()=>{n.next(e),r.add(t.schedule(()=>n.complete()))}))},e=>{r.add(t.schedule(()=>n.error(e)))}))),r})}(e,t);if(Object(u.a)(e))return Object(a.a)(e,t);if(function(e){return e&&"function"==typeof e[c.a]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new r.a(n=>{const r=new i.a;let o;return r.add(()=>{o&&"function"==typeof o.return&&o.return()}),r.add(t.schedule(()=>{o=e[c.a](),r.add(t.schedule((function(){if(n.closed)return;let e,t;try{const n=o.next();e=n.value,t=n.done}catch(r){return void n.error(r)}t?n.complete():(n.next(e),this.schedule())})))})),r})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}(e,t):e instanceof r.a?e:new r.a(Object(o.a)(e))}},HgnN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));let r=!1;const o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},IJgj:function(e,t,n){"use strict";function r(e){return"function"==typeof e}n.d(t,"a",(function(){return r}))},IdLP:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("5uGe"),o=n("25CY"),i=n("rWo0"),s=n("qEfY"),a=n("Ti3e"),c=n("HgnN");let l=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const n=new e;return n.source=this,n.operator=t,n}subscribe(e,t,n){const{operator:s}=this,a=function(e,t,n){if(e){if(e instanceof r.a)return e;if(e[o.a])return e[o.a]()}return e||t||n?new r.a(e,t,n):new r.a(i.a)}(e,t,n);if(a.add(s?s.call(a,this.source):this.source||c.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),c.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a}_trySubscribe(e){try{return this._subscribe(e)}catch(t){c.a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){const{closed:t,destination:n,isStopped:o}=e;if(t||o)return!1;e=n&&n instanceof r.a?n:null}return!0}(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=u(t))((t,n)=>{let r;r=this.subscribe(t=>{try{e(t)}catch(o){n(o),r&&r.unsubscribe()}},n,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[s.a](){return this}pipe(...e){return 0===e.length?this:Object(a.b)(e)(this)}toPromise(e){return new(e=u(e))((e,t)=>{let n;this.subscribe(e=>n=e,e=>t(e),()=>e(n))})}}return e.create=t=>new e(t),e})();function u(e){if(e||(e=c.a.Promise||Promise),!e)throw new Error("no Promise impl found");return e}},MiDb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})()},Ti3e:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n("kgbq");function o(...e){return i(e)}function i(e){return e?1===e.length?e[0]:function(t){return e.reduce((e,t)=>t(e),t)}:r.a}},X0qr:function(e,t,n){"use strict";function r(e){return null!==e&&"object"==typeof e}n.d(t,"a",(function(){return r}))},YIYF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("ZtqZ"),o=n("fY+t"),i=n("42at");t.DontCodeCore=class{constructor(){this.schemaManager=new r.DontCodeSchemaManager,this.pluginManager=new o.DontCodePluginManager,this.previewManager=new i.DontCodePreviewManager}registerPlugin(e){this.pluginManager.registerPlugin(e,this.schemaManager,this.previewManager)}getSchemaUri(){return"schemas/v1/dont-code-schema.json"}getSchemaManager(){return this.schemaManager}getPreviewManager(){return this.previewManager}}},YtkY:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");function o(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new i(e,t))}}class i{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new s(e,this.project,this.thisArg))}}class s extends r.a{constructor(e,t,n){super(e),this.project=t,this.count=0,this.thisArg=n||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}},ZTXN:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return h}));var r=n("IdLP"),o=n("5uGe"),i=n("bwdy"),s=n("MiDb"),a=n("yTkW"),c=n("25CY");class l extends o.a{constructor(e){super(e),this.destination=e}}let u=(()=>{class e extends r.a{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[c.a](){return new l(this)}lift(e){const t=new h(this,this);return t.operator=e,t}next(e){if(this.closed)throw new s.a;if(!this.isStopped){const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].next(e)}}error(e){if(this.closed)throw new s.a;this.hasError=!0,this.thrownError=e,this.isStopped=!0;const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].error(e);this.observers.length=0}complete(){if(this.closed)throw new s.a;this.isStopped=!0;const{observers:e}=this,t=e.length,n=e.slice();for(let r=0;r<t;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new s.a;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new s.a;return this.hasError?(e.error(this.thrownError),i.a.EMPTY):this.isStopped?(e.complete(),i.a.EMPTY):(this.observers.push(e),new a.a(this,e))}asObservable(){const e=new r.a;return e.source=this,e}}return e.create=(e,t)=>new h(e,t),e})();class h extends u{constructor(e,t){super(),this.destination=e,this.source=t}next(e){const{destination:t}=this;t&&t.next&&t.next(e)}error(e){const{destination:t}=this;t&&t.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:t}=this;return t?this.source.subscribe(e):i.a.EMPTY}}},ZtqZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("uq2N"),o=n("umRR");t.DontCodeSchemaManager=class{constructor(){this.readSchema=o.DontCodeSchema.defaultv1,this.currentSchema=this.convertSchemaToMap(this.readSchema)}getSchema(){return this.currentSchema}convertSchemaToMap(e){return new r.DontCodeSchemaRoot(e)}registerChanges(e){e["schema-updates"]&&e["schema-updates"].forEach(e=>{e.changes.forEach(e=>{const t=this.locateItem(e.location.parent);if(!t)throw"Cannot find parent element: "+e.location.parent;t.upsertWith(e)})})}locateItem(e){const t=e.split("/");var n=this.currentSchema;return t.forEach(t=>{if(!n)return console.error("Could not find subItem "+t+" of "+e),n;t&&t.length>0&&"#"!==t&&(n=n.getChild(t))}),n}}},"a/xz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("YIYF");(t.DontCode||(t.DontCode={})).dtcde=new r.DontCodeCore},bwdy:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("FU6l"),o=n("X0qr"),i=n("IJgj");const s=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})();let a=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_unsubscribe:a,_subscriptions:l}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(let e=0;e<n.length;++e)n[e].remove(this);if(Object(i.a)(a))try{a.call(this)}catch(u){t=u instanceof s?c(u.errors):[u]}if(Object(r.a)(l)){let e=-1,n=l.length;for(;++e<n;){const n=l[e];if(Object(o.a)(n))try{n.unsubscribe()}catch(u){t=t||[],u instanceof s?t=t.concat(c(u.errors)):t.push(u)}}}if(t)throw new s(t)}add(t){let n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){const t=n;n=new e,n._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof e){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n}remove(e){const t=this._subscriptions;if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}var t;return e.EMPTY=((t=new e).closed=!0,t),e})();function c(e){return e.reduce((e,t)=>e.concat(t instanceof s?t.errors:t),[])}},cJ9h:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("mW0F"),o=n("pBDD"),i=n("r9RI"),s=n("YtkY"),a=n("GoAz");function c(e,t,n=Number.POSITIVE_INFINITY){return"function"==typeof t?r=>r.pipe(c((n,r)=>Object(a.a)(e(n,r)).pipe(Object(s.a)((e,o)=>t(n,e,r,o))),n)):("number"==typeof t&&(n=t),t=>t.lift(new l(e,n)))}class l{constructor(e,t=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=t}call(e,t){return t.subscribe(new u(e,this.project,this.concurrent))}}class u extends o.a{constructor(e,t,n=Number.POSITIVE_INFINITY){super(e),this.project=t,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(t,e,n)}_innerSub(e,t,n){const o=new i.a(this,t,n),s=this.destination;s.add(o);const a=Object(r.a)(this,e,void 0,void 0,o);a!==o&&s.add(a)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e,t,n,r,o){this.destination.next(t)}notifyComplete(e){const t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}},ckkg:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("IdLP"),o=n("dUuy"),i=n("czMQ");function s(e,t){return t?Object(i.a)(e,t):new r.a(Object(o.a)(e))}},czMQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("IdLP"),o=n("bwdy");function i(e,t){return new r.a(n=>{const r=new o.a;let i=0;return r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r})}},dUuy:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>t=>{for(let n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}},"eY+9":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>e&&"number"==typeof e.length&&"function"!=typeof e},"fY+t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePluginManager=class{constructor(){this.plugins=new Map}registerPlugin(e,t,n){const r=e.getConfiguration();this.plugins.set(r.plugin.id+"-v"+r.plugin.version,e),t.registerChanges(r),n.registerHandlers(r)}}},g6G6:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("IdLP"),o=n("gBlb"),i=n("3lSR"),s=n("ckkg");function a(...e){let t=Number.POSITIVE_INFINITY,n=null,a=e[e.length-1];return Object(o.a)(a)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof a&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof r.a?e[0]:Object(i.a)(t)(Object(s.a)(e,n))}},gBlb:function(e,t,n){"use strict";function r(e){return e&&"function"==typeof e.schedule}n.d(t,"a",(function(){return r}))},"i9P/":function(e,t,n){"use strict";function r(e){setTimeout(()=>{throw e},0)}n.d(t,"a",(function(){return r}))},kgbq:function(e,t,n){"use strict";function r(){}n.d(t,"a",(function(){return r}))},mW0F:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("r9RI"),o=n("1MAX"),i=n("IdLP");function s(e,t,n,s,a=new r.a(e,n,s)){if(!a.closed)return t instanceof i.a?t.subscribe(a):Object(o.a)(t)(a)}},o8N5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Change=class{constructor(e,t,n){this.type=e,this.position=t,this.value=n}},t.ChangeType=function(e){return e.ADD="ADD",e.UPDATE="UPDATE",e.DELETE="DELETE",e.RESET="RESET",e}(t.ChangeType||{})},pBDD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");class o extends r.a{notifyNext(e,t,n,r,o){this.destination.next(t)}notifyError(e,t){this.destination.error(e)}notifyComplete(e){this.destination.complete()}}},qEfY:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")()},r9RI:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5uGe");class o extends r.a{constructor(e,t,n){super(),this.parent=e,this.outerValue=t,this.outerIndex=n,this.index=0}_next(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}_error(e){this.parent.notifyError(e,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}},rWo0:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("HgnN"),o=n("i9P/");const i={closed:!0,next(e){},error(e){if(r.a.useDeprecatedSynchronousErrorHandling)throw e;Object(o.a)(e)},complete(){}}},sWLk:function(e,t,n){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(t,"a",(function(){return o}));const o=r()},umRR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("3/dt");class o{}t.DontCodeSchema=o,o.ROOT="/properties/"+r.DontCodeModel.ROOT,o.defaultv1={$id:"http://dont-code.net/dont-code-schema/v1",$schema:"http://json-schema.org/draft-07/schema#",description:"JSON Schema v1 for dont-code",type:"object",required:["creation"],properties:{creation:{type:"object",properties:{type:{enum:["application"]},name:{type:"string"},entities:{type:"array",items:{$ref:"#/definitions/entity"}},screens:{type:"array",items:{$ref:"#/definitions/screen"}}},additionalProperties:!1}},definitions:{entity:{type:"object",properties:{name:{type:"string"},fields:{type:"array",items:{$ref:"#/definitions/field"}}},additionalProperties:!1},field:{type:"object",properties:{name:{type:"string"},type:{enum:["string","number","boolean"]}},additionalProperties:!1},screen:{type:"object",properties:{name:{type:"string"},layout:{enum:["flow","grid"]},components:{type:"array",items:{$ref:"#/definitions/component"}}},additionalProperties:!1},component:{type:"object",properties:{type:{enum:["list","edit","view"]},entity:{type:"string",format:"#/creation/entities"}},additionalProperties:!1}}}},uq2N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e,t){this.array=!1,this.parent=e,this.relativeId=t}isArray(){return this.array}setArray(e){this.array=e}isEnum(){return!1}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}static generateItem(e,t,n){let r,c=Array.isArray(e);if(c)return console.error("arrays are not supported",e),e;if(c=!1,e.type)switch(e.type){case"object":r=new o(e,t,n);break;case"array":r=this.generateItem(e.items,t,n),c=!0;break;default:r=new s(e,t,n)}else if(e.enum)r=new i(e,t,n);else{if(!e.$ref)return e;r=new a(e,t,n)}return r.setArray(c),r}static isObject(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}static goto(e,t){let n=e;return t.split("/").forEach(r=>{"#"!==r&&""!=r&&(n=n.getChild(r)),n||console.error("Cannot find "+r+" of "+t+" in the following item ",e)}),n}upsertWith(e){return!1}getParent(){return this.parent}getChild(e){}getChildren(){return(new Map).entries()}updateWith(e){}getProperties(e){}hasProperties(e){return!1}getRelativeId(){return this.relativeId}setRelativeId(e){this.relativeId=e}}t.AbstractSchemaItem=r;class o extends r{constructor(e,t,n){super(n,t),this.children=new Map,e&&this.readJson(e)}readJson(e){const t=e.properties;if(t)for(var n in t)this.children.set(n,r.generateItem(t[n],n,this));const o=e.definitions;if(o){const e=r.generateItem(o,"definitions",this);this.children.set("definitions",e)}}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!1}upsertWith(e){let t=this.getChild(e.location.id);if(!t)if(t=r.generateItem(e.add,e.location.id,this),e.location.after){let n=new Map;this.children.forEach((r,o)=>{n.set(o,r),o===e.location.after&&n.set(e.location.id,t)}),this.children=n}else this.children.set(e.location.id,t);return t.updateWith(e),!0}updateWith(e){super.updateWith(e)}getChild(e){return e?this.children.get(e):void 0}getChildren(){return this.children.entries()}}t.DontCodeSchemaObject=o,t.DontCodeSchemaRoot=class extends o{constructor(e){super(e,null)}readJson(e){super.readJson(e);const t=e.definitions;t&&this.children.set("definitions",new o({properties:t},"definitions",this))}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!0}};class i extends r{constructor(e,t,n){super(n,t),this.values=new Array,this.properties=new Map,this.values.push(...e.enum)}isEnum(){return!0}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}getValues(){return this.values}updateWith(e){super.updateWith(e),e.add.enum.forEach(t=>{if(-1==this.values.indexOf(t)&&this.values.push(t),e.props){const n=new c(e,this.relativeId+"="+t,this);n.isEmpty()||this.properties.set(t,n)}})}getProperties(e){return this.properties.get(e)}hasProperties(e){return this.properties.has(e)}}t.DontCodeSchemaEnum=i;class s extends r{constructor(e,t,n){super(n,t),this.type=e.type}isValue(){return!0}getType(){return this.type}}t.DontCodeSchemaValue=s;class a extends r{constructor(e,t,n){super(n,t),this.resolvedRef=new Map,this.ref=e.$ref}isReference(){return!0}getReference(){return this.ref}resolveReference(e){this.resolvedRef.set("",e)}getChildren(){return this.resolvedRef.entries()}}t.DontCodeSchemaRef=a;class c extends o{constructor(e,t,n){super({type:"object",properties:e.props},t,n),this.replace=e.replace,this.posAfter=e.location.after}isEmpty(){return 0==this.children.size}isReplace(){return this.replace}getPosAfter(){return this.posAfter}}t.DontCodeSchemaProperty=c},yTkW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("bwdy");class o extends r.a{constructor(e,t){super(),this.subject=e,this.subscriber=t,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,t=e.observers;if(this.subject=null,!t||0===t.length||e.isStopped||e.closed)return;const n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},zUnb:function(e,t,n){"use strict";n.r(t);var r=n("EM62");"undefined"!=typeof window&&window,"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,"undefined"!=typeof global&&global;var o=n("2kYt");class i extends o.s{constructor(){super()}supportsDOMEvents(){return!0}}class s extends i{static makeCurrent(){Object(o.w)(new s)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=c||(c=document.querySelector("base"),c)?c.getAttribute("href"):null;return null==t?null:(n=t,a||(a=document.createElement("a")),a.setAttribute("href",n),"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname);var n}resetBaseElement(){c=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){return Object(o.v)(document.cookie,e)}}let a,c=null;const l=new r.q("TRANSITION_ID"),u=[{provide:r.d,useFactory:function(e,t,n){return()=>{n.get(r.e).donePromise.then(()=>{const n=Object(o.u)();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[l,o.d,r.r],multi:!0}];class h{static init(){Object(r.V)(new h)}addToWindow(e){r.nb.getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},r.nb.getAllAngularTestabilities=()=>e.getAllTestabilities(),r.nb.getAllAngularRootElements=()=>e.getAllRootElements(),r.nb.frameworkStabilizers||(r.nb.frameworkStabilizers=[]),r.nb.frameworkStabilizers.push(e=>{const t=r.nb.getAllAngularTestabilities();let n=t.length,o=!1;const i=function(t){o=o||t,n--,0==n&&e(o)};t.forEach((function(e){e.whenStable(i)}))})}findTestabilityInTree(e,t,n){if(null==t)return null;const r=e.getTestability(t);return null!=r?r:n?Object(o.u)().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}const d=new r.q("EventManagerPlugins");let f=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(d),r.Sb(r.z))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();class p{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const r=Object(o.u)().getGlobalEventTarget(this._doc,e);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,n)}}let b=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})(),g=(()=>{class e extends b{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>Object(o.u)().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(o.d))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();const m={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},y=/%COMP%/g;function _(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?_(e,o,n):(o=o.replace(y,e),n.push(o))}return n}function v(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let w=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new x(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case r.O.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new S(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case r.O.Native:case r.O.ShadowDom:return new E(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=_(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(f),r.Sb(g),r.Sb(r.c))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();class x{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(m[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=m[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=m[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,o){o&r.F.DashCase?e.style.setProperty(t,n,o&r.F.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&r.F.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,v(n)):this.eventManager.addEventListener(e,t,v(n))}}class S extends x{constructor(e,t,n,r){super(e),this.component=n;const o=_(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr="_ngcontent-%COMP%".replace(y,r+"-"+n.id),this.hostAttr=function(e){return"_nghost-%COMP%".replace(y,e)}(r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class E extends x{constructor(e,t,n,o){super(e),this.sharedStylesHost=t,this.hostEl=n,this.component=o,this.shadowRoot=o.encapsulation===r.O.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const i=_(o.id,o.styles,[]);for(let r=0;r<i.length;r++){const e=document.createElement("style");e.textContent=i[r],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let k=(()=>{class e extends p{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(o.d))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();const C=["alt","control","meta","shift"],O={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},T={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},j={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let P=(()=>{class e extends p{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,r){const i=e.parseEventName(n),s=e.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Object(o.u)().onAndCancel(t,i.domEventName,s))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let i="";if(C.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),i+=e+".")}),i+=o,0!=n.length||0===o.length)return null;const s={};return s.domEventName=r,s.fullKey=i,s}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&T.hasOwnProperty(t)&&(t=T[t]))}return O[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),C.forEach(r=>{r!=n&&(0,j[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(o.d))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();const A=[{provide:r.B,useValue:o.t},{provide:r.C,useValue:function(){s.makeCurrent(),h.init()},multi:!0},{provide:o.d,useFactory:function(){return Object(r.tb)(document),document},deps:[]}],N=Object(r.Q)(r.U,"browser",A),R=[[],{provide:r.X,useValue:"root"},{provide:r.m,useFactory:function(){return new r.m},deps:[]},{provide:d,useClass:k,multi:!0,deps:[o.d,r.z,r.B]},{provide:d,useClass:P,multi:!0,deps:[o.d]},[],{provide:w,useClass:w,deps:[f,g,r.c]},{provide:r.E,useExisting:w},{provide:b,useExisting:g},{provide:g,useClass:g,deps:[o.d]},{provide:r.L,useClass:r.L,deps:[r.z]},{provide:f,useClass:f,deps:[d,r.z]},[]];let I=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:r.c,useValue:t.appId},{provide:l,useExisting:r.c},u]}}}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)(r.Sb(e,12))},providers:R,imports:[o.c,r.f]}),e})();"undefined"!=typeof window&&window;var D=n("ZTXN"),M=n("gBlb"),$=n("FU6l"),F=n("pBDD"),L=n("mW0F"),H=n("ckkg");const V={};function z(...e){let t=null,n=null;return Object(M.a)(e[e.length-1])&&(n=e.pop()),"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&Object($.a)(e[0])&&(e=e[0]),Object(H.a)(e,n).lift(new B(t))}class B{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new U(e,this.resultSelector))}}class U extends F.a{constructor(e,t){super(e),this.resultSelector=t,this.active=0,this.values=[],this.observables=[]}_next(e){this.values.push(V),this.observables.push(e)}_complete(){const e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(let n=0;n<t;n++){const t=e[n];this.add(Object(L.a)(this,t,t,n))}}}notifyComplete(e){0==(this.active-=1)&&this.destination.complete()}notifyNext(e,t,n,r,o){const i=this.values,s=this.toRespond?i[n]===V?--this.toRespond:this.toRespond:0;i[n]=t,0===s&&(this.resultSelector?this._tryResultSelector(i):this.destination.next(i.slice()))}_tryResultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}function q(e){return t=>t.lift(new W(e))}class W{constructor(e){this.notifier=e}call(e,t){const n=new Q(e),r=Object(L.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n}}class Q extends F.a{constructor(e){super(e),this.seenValue=!1}notifyNext(e,t,n,r,o){this.seenValue=!0,this.complete()}notifyComplete(){}}var K=n("YtkY"),G=n("bwdy");class Y extends G.a{constructor(e,t){super()}schedule(e,t=0){return this}}class Z extends Y{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,r=void 0;try{this.work(e)}catch(o){n=!0,r=!!o&&o||new Error(o)}if(n)return this.unsubscribe(),r}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}class J extends Z{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(e,t,n):e.flush(this)}}let X=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})();class ee extends X{constructor(e,t=X.now){super(e,()=>ee.delegate&&ee.delegate!==this?ee.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return ee.delegate&&ee.delegate!==this?ee.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}class te extends ee{}const ne=new te(J);var re=n("5uGe"),oe=n("IdLP");const ie=new oe.a(e=>e.complete());function se(e){return e?function(e){return new oe.a(t=>e.schedule(()=>t.complete()))}(e):ie}var ae=n("czMQ");function ce(...e){let t=e[e.length-1];return Object(M.a)(t)?(e.pop(),Object(ae.a)(e,t)):Object(H.a)(e)}let le=(()=>{class e{constructor(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}accept(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}toObservable(){switch(this.kind){case"N":return ce(this.value);case"E":return e=this.error,new oe.a(t=>t.error(e));case"C":return se()}var e;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class ue extends re.a{constructor(e,t,n=0){super(e),this.scheduler=t,this.delay=n}static dispatch(e){const{notification:t,destination:n}=e;t.observe(n),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(ue.dispatch,this.delay,new he(e,this.destination)))}_next(e){this.scheduleMessage(le.createNext(e))}_error(e){this.scheduleMessage(le.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(le.createComplete()),this.unsubscribe()}}class he{constructor(e,t){this.notification=e,this.destination=t}}var de=n("MiDb"),fe=n("yTkW");class pe extends D.b{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new be(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,n=t?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,o=n.length;let i;if(this.closed)throw new de.a;if(this.isStopped||this.hasError?i=G.a.EMPTY:(this.observers.push(e),i=new fe.a(this,e)),r&&e.add(e=new ue(e,r)),t)for(let s=0;s<o&&!e.closed;s++)e.next(n[s]);else for(let s=0;s<o&&!e.closed;s++)e.next(n[s].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),i}_getNow(){return(this.scheduler||ne).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,n=this._windowTime,r=this._events,o=r.length;let i=0;for(;i<o&&!(e-r[i].time<n);)i++;return o>t&&(i=Math.max(i,o-t)),i>0&&r.splice(0,i),r}}class be{constructor(e,t){this.time=e,this.value=t}}class ge{constructor(e,t,n){this.type=e,this.position=t,this.value=n}}var me=function(e){return e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.DELETE=2]="DELETE",e}({});function ye(e,t){return function(n){return n.lift(new _e(e,t))}}class _e{constructor(e,t){this.predicate=e,this.thisArg=t}call(e,t){return t.subscribe(new ve(e,this.predicate,this.thisArg))}}class ve extends re.a{constructor(e,t,n){super(e),this.predicate=t,this.thisArg=n,this.count=0}_next(e){let t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}t&&this.destination.next(e)}}var we=n("AEcS");const xe={url:"",deserializer:e=>JSON.parse(e.data),serializer:e=>JSON.stringify(e)};class Se extends D.a{constructor(e,t){if(super(),e instanceof oe.a)this.destination=t,this.source=e;else{const t=this._config=Object.assign({},xe);if(this._output=new D.b,"string"==typeof e)t.url=e;else for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(!t.WebSocketCtor&&WebSocket)t.WebSocketCtor=WebSocket;else if(!t.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new pe}}lift(e){const t=new Se(this._config,this.destination);return t.operator=e,t.source=this,t}_resetState(){this._socket=null,this.source||(this.destination=new pe),this._output=new D.b}multiplex(e,t,n){const r=this;return new oe.a(o=>{try{r.next(e())}catch(s){o.error(s)}const i=r.subscribe(e=>{try{n(e)&&o.next(e)}catch(s){o.error(s)}},e=>o.error(e),()=>o.complete());return()=>{try{r.next(t())}catch(s){o.error(s)}i.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:e,protocol:t,url:n,binaryType:r}=this._config,o=this._output;let i=null;try{i=t?new e(n,t):new e(n),this._socket=i,r&&(this._socket.binaryType=r)}catch(a){return void o.error(a)}const s=new G.a(()=>{this._socket=null,i&&1===i.readyState&&i.close()});i.onopen=e=>{const{_socket:t}=this;if(!t)return i.close(),void this._resetState();const{openObserver:n}=this._config;n&&n.next(e);const r=this.destination;this.destination=re.a.create(t=>{if(1===i.readyState)try{const{serializer:e}=this._config;i.send(e(t))}catch(e){this.destination.error(e)}},e=>{const{closingObserver:t}=this._config;t&&t.next(void 0),e&&e.code?i.close(e.code,e.reason):o.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:e}=this._config;e&&e.next(void 0),i.close(),this._resetState()}),r&&r instanceof pe&&s.add(r.subscribe(this.destination))},i.onerror=e=>{this._resetState(),o.error(e)},i.onclose=e=>{this._resetState();const{closeObserver:t}=this._config;t&&t.next(e),e.wasClean?o.complete():o.error(e)},i.onmessage=e=>{try{const{deserializer:t}=this._config;o.next(t(e))}catch(t){o.error(t)}}}_subscribe(e){const{source:t}=this;return t?t.subscribe(e):(this._socket||this._connectSocket(),this._output.subscribe(e),e.add(()=>{const{_socket:e}=this;0===this._output.observers.length&&(e&&1===e.readyState&&e.close(),this._resetState())}),e)}unsubscribe(){const{_socket:e}=this;e&&1===e.readyState&&e.close(),this._resetState(),super.unsubscribe()}}let Ee=(()=>{class e{constructor(){this.listOfChanges=[],this.listOfEntities=new Map,this.changeEmitter=new D.b,this.connectionStatus=new pe(1),this.previewServiceWebSocket=new Se("wss://preview-services-demo.apps.us-west-1.starter.openshift-online.com/preview"),this.connectionStatus.next("connected"),this.previewServiceWebSocket.subscribe(e=>{this.listOfChanges.push(e),this.changeEmitter.next(e)},e=>{this.connectionStatus.next("ERROR:"+e)},()=>{this.connectionStatus.next("closed")})}getListOfChanges(){return this.listOfChanges}getChangeEvents(){return this.changeEmitter}getConnectionStatus(){return this.connectionStatus}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ke=(()=>{class e{constructor(e){this.changeListener=e,this.receivedCommands=new pe,this.receivedCommands.next(new ge(me.ADD,we.DontCodeModel.APP_NAME,"New Name")),e.getChangeEvents().subscribe(e=>{console.log("Received Change ",e),this.receivedCommands.next(new ge(me.UPDATE,e.position,e.value))})}pushCommand(e){this.receivedCommands.next(e)}receiveCommands(e,t){return e?this.receivedCommands.pipe(ye(n=>{if(n.position.startsWith(e)){if(t){const r=n.position.indexOf("/",e.length+1);return!(-1==r||!n.position.startsWith(t,r+1))}return!0}return!1})):this.receivedCommands}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(Ee))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class Ce extends D.b{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return t&&!t.closed&&e.next(this._value),t}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new de.a;return this._value}next(e){super.next(this._value=e)}}var Oe=n("g6G6"),Te=n("IJgj"),je=n("r9RI"),Pe=n("GoAz");function Ae(e,t){return"function"==typeof t?n=>n.pipe(Ae((n,r)=>Object(Pe.a)(e(n,r)).pipe(Object(K.a)((e,o)=>t(n,e,r,o))))):t=>t.lift(new Ne(e))}class Ne{constructor(e){this.project=e}call(e,t){return t.subscribe(new Re(e,this.project))}}class Re extends F.a{constructor(e,t){super(e),this.project=t,this.index=0}_next(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this._innerSub(t,e,n)}_innerSub(e,t,n){const r=this.innerSubscription;r&&r.unsubscribe();const o=new je.a(this,t,n),i=this.destination;i.add(o),this.innerSubscription=Object(L.a)(this,e,void 0,void 0,o),this.innerSubscription!==o&&i.add(this.innerSubscription)}_complete(){const{innerSubscription:e}=this;e&&!e.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=null}notifyComplete(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&super._complete()}notifyNext(e,t,n,r,o){this.destination.next(t)}}const Ie=(()=>{function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e})();function De(e){return t=>0===e?se():t.lift(new Me(e))}class Me{constructor(e){if(this.total=e,this.total<0)throw new Ie}call(e,t){return t.subscribe(new $e(e,this.total))}}class $e extends re.a{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){const t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))}}var Fe=n("kgbq");function Le(e,t,n){return function(r){return r.lift(new He(e,t,n))}}class He{constructor(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}call(e,t){return t.subscribe(new Ve(e,this.nextOrObserver,this.error,this.complete))}}class Ve extends re.a{constructor(e,t,n,r){super(e),this._tapNext=Fe.a,this._tapError=Fe.a,this._tapComplete=Fe.a,this._tapError=n||Fe.a,this._tapComplete=r||Fe.a,Object(Te.a)(t)?(this._context=this,this._tapNext=t):t&&(this._context=t,this._tapNext=t.next||Fe.a,this._tapError=t.error||Fe.a,this._tapComplete=t.complete||Fe.a)}_next(e){try{this._tapNext.call(this._context,e)}catch(t){return void this.destination.error(t)}this.destination.next(e)}_error(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)}_complete(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()}}const ze={provide:r.b,useFactory:function(e,t){return()=>{if(Object(o.q)(t)){const t=Array.from(e.querySelectorAll(`[class*=${Be}]`)),n=/\bflex-layout-.+?\b/g;t.forEach(e=>{e.classList.contains(`${Be}ssr`)&&e.parentNode?e.parentNode.removeChild(e):e.className.replace(n,"")})}}},deps:[o.d,r.B],multi:!0},Be="flex-layout-";let Ue=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},providers:[ze]}),e})();class qe{constructor(e=!1,t="all",n="",r="",o=0){this.matches=e,this.mediaQuery=t,this.mqAlias=n,this.suffix=r,this.priority=o,this.property=""}clone(){return new qe(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let We=(()=>{class e{constructor(){this.stylesheet=new Map}addStyleToElement(e,t,n){const r=this.stylesheet.get(e);r?r.set(t,n):this.stylesheet.set(e,new Map([[t,n]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(e,t){const n=this.stylesheet.get(e);let r="";if(n){const e=n.get(t);"number"!=typeof e&&"string"!=typeof e||(r=e+"")}return r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=Object(r.Fb)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const Qe={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},Ke=new r.q("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>Qe}),Ge=new r.q("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),Ye=new r.q("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function Ze(e,t){return e=e?e.clone():new qe,t&&(e.mqAlias=t.alias,e.mediaQuery=t.mediaQuery,e.suffix=t.suffix,e.priority=t.priority),e}const Je=["row","column","row-reverse","column-reverse"];function Xe(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}let et=(()=>{class e{constructor(e,t,n,r){this.elementRef=e,this.styleBuilder=t,this.styler=n,this.marshal=r,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new D.b,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,this.marshal.activatedAlias)}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const n=t.split(".").slice(1).join(".");this.setValue(e[t].currentValue,n)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(e=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),e)}addStyles(e,t){const n=this.styleBuilder,r=n.shouldCache;let o=this.styleCache.get(e);o&&r||(o=n.buildStyles(e,t),r&&this.styleCache.set(e,o)),this.mru=Object.assign({},o),this.applyStyleToElement(o),n.sideEffect(e,o,t)}clearStyles(){Object.keys(this.mru).forEach(e=>{this.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(e,t=!1){if(e){const[n,r]=this.styler.getFlowDirection(e);if(!r&&t){const t=function(e){let[t,n,r]=function(e){e=e?e.toLowerCase():"";let[t,n,r]=e.split(" ");return Je.find(e=>e===t)||(t=Je[0]),"inline"===n&&(n="inline"!==r?r:"",r="inline"),[t,Xe(n),!!r]}(e);return function(e,t=null,n=!1){return{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}(t,n,r)}(n);this.styler.applyStyleToElements(t,[e])}return n.trim()}return"row"}hasWrap(e){return this.styler.hasWrap(e)}applyStyleToElement(e,t,n=this.nativeElement){this.styler.applyStyleToElement(n,e,t)}setValue(e,t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,t)}updateWithValue(e){this.currentValue!==e&&(this.addStyles(e),this.currentValue=e)}}return e.\u0275fac=function(e){r.Vb()},e.\u0275dir=r.Eb({type:e,features:[r.xb]}),e})();const tt=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.9px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.9px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.9px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.9px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.9px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.9px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.9px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.9px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.9px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],nt="(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)",rt="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)",ot="(orientation: portrait) and (min-width: 840px)",it="(orientation: landscape) and (min-width: 1280px)",st={HANDSET:"(orientation: portrait) and (max-width: 599.9px), (orientation: landscape) and (max-width: 959.9px)",TABLET:`${nt} , ${rt}`,WEB:`${ot}, ${it} `,HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599.9px)",TABLET_PORTRAIT:`${nt} `,WEB_PORTRAIT:`${ot}`,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.9px)",TABLET_LANDSCAPE:`${rt}`,WEB_LANDSCAPE:`${it}`},at=[{alias:"handset",priority:2e3,mediaQuery:st.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:st.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:st.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:st.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:st.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:st.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:st.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:st.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:st.WEB_PORTRAIT,overlapping:!0}],ct=/(\.|-|_)/g;function lt(e){let t=e.length>0?e.charAt(0):"",n=e.length>1?e.slice(1):"";return t.toUpperCase()+n}const ut=new r.q("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const e=Object(r.S)(Ye),t=Object(r.S)(Ke),n=[].concat.apply([],(e||[]).map(e=>Array.isArray(e)?e:[e]));return function(e,t=[]){const n={};return e.forEach(e=>{n[e.alias]=e}),t.forEach(e=>{n[e.alias]?function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(let n of t)if(null!=n)for(let t in n)n.hasOwnProperty(t)&&(e[t]=n[t])}(n[e.alias],e):n[e.alias]=e}),(r=Object.keys(n).map(e=>n[e])).forEach(e=>{e.suffix||(e.suffix=e.alias.replace(ct,"|").split("|").map(lt).join(""),e.overlapping=!!e.overlapping)}),r;var r}((t.disableDefaultBps?[]:tt).concat(t.addOrientationBps?at:[]),n)}});function ht(e,t){return(t&&t.priority||0)-(e&&e.priority||0)}function dt(e,t){return(e.priority||0)-(t.priority||0)}let ft=(()=>{class e{constructor(e){this.findByMap=new Map,this.items=[...e].sort(dt)}findByAlias(e){return e?this.findWithPredicate(e,t=>t.alias==e):null}findByQuery(e){return this.findWithPredicate(e,t=>t.mediaQuery==e)}get overlappings(){return this.items.filter(e=>1==e.overlapping)}get aliases(){return this.items.map(e=>e.alias)}get suffixes(){return this.items.map(e=>e.suffix?e.suffix:"")}findWithPredicate(e,t){let n=this.findByMap.get(e);return n||(n=this.items.find(t)||null,this.findByMap.set(e,n)),n||null}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(ut))},e.\u0275prov=Object(r.Fb)({factory:function(){return new e(Object(r.Sb)(ut))},token:e,providedIn:"root"}),e})(),pt=(()=>{class e{constructor(e,t,n){this._zone=e,this._platformId=t,this._document=n,this.source=new Ce(new qe(!0)),this.registry=new Map,this.pendingRemoveListenerFns=[],this._observable$=this.source.asObservable()}get activations(){const e=[];return this.registry.forEach((t,n)=>{t.matches&&e.push(n)}),e}isActive(e){const t=this.registry.get(e);return t?t.matches:this.registerQuery(e).some(e=>e.matches)}observe(e,t=!1){if(e&&e.length){const n=this._observable$.pipe(ye(n=>!t||e.indexOf(n.mediaQuery)>-1)),r=new oe.a(t=>{const n=this.registerQuery(e);if(n.length){const e=n.pop();n.forEach(e=>{t.next(e)}),this.source.next(e)}t.complete()});return Object(Oe.a)(r,n)}return this._observable$}registerQuery(e){const t=Array.isArray(e)?e:[e],n=[];return function(e,t){const n=e.filter(e=>!bt[e]);if(n.length>0){const e=n.join(", ");try{const r=t.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(t.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${e} {.fx-query-test{ }}\n`)),t.head.appendChild(r),n.forEach(e=>bt[e]=r)}catch(r){console.error(r)}}}(t,this._document),t.forEach(e=>{const t=t=>{this._zone.run(()=>this.source.next(new qe(t.matches,e)))};let r=this.registry.get(e);r||(r=this.buildMQL(e),r.addListener(t),this.pendingRemoveListenerFns.push(()=>r.removeListener(t)),this.registry.set(e,r)),r.matches&&n.push(new qe(!0,e))}),n}ngOnDestroy(){let e;for(;e=this.pendingRemoveListenerFns.pop();)e()}buildMQL(e){return function(e,t){return t&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{},onchange:null,addEventListener(){},removeEventListener(){},dispatchEvent:()=>!1}}(e,Object(o.q)(this._platformId))}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(r.z),r.Sb(r.B),r.Sb(o.d))},e.\u0275prov=Object(r.Fb)({factory:function(){return new e(Object(r.Sb)(r.z),Object(r.Sb)(r.B),Object(r.Sb)(o.d))},token:e,providedIn:"root"}),e})();const bt={},gt={alias:"print",mediaQuery:"print",priority:1e3};let mt=(()=>{class e{constructor(e,t,n){this.breakpoints=e,this.layoutConfig=t,this._document=n,this.registeredBeforeAfterPrintHooks=!1,this.isPrintingBeforeAfterEvent=!1,this.beforePrintEventListeners=[],this.afterPrintEventListeners=[],this.isPrinting=!1,this.queue=new yt,this.deactivations=[]}withPrintQuery(e){return[...e,"print"]}isPrintEvent(e){return e.mediaQuery.startsWith("print")}get printAlias(){return this.layoutConfig.printWithBreakpoints||[]}get printBreakPoints(){return this.printAlias.map(e=>this.breakpoints.findByAlias(e)).filter(e=>null!==e)}getEventBreakpoints({mediaQuery:e}){const t=this.breakpoints.findByQuery(e);return(t?[...this.printBreakPoints,t]:this.printBreakPoints).sort(ht)}updateEvent(e){let t=this.breakpoints.findByQuery(e.mediaQuery);return this.isPrintEvent(e)&&(t=this.getEventBreakpoints(e)[0],e.mediaQuery=t?t.mediaQuery:""),Ze(e,t)}registerBeforeAfterPrintHooks(e){if(!this._document.defaultView||this.registeredBeforeAfterPrintHooks)return;this.registeredBeforeAfterPrintHooks=!0;const t=()=>{this.isPrinting||(this.isPrintingBeforeAfterEvent=!0,this.startPrinting(e,this.getEventBreakpoints(new qe(!0,"print"))),e.updateStyles())},n=()=>{this.isPrintingBeforeAfterEvent=!1,this.isPrinting&&(this.stopPrinting(e),e.updateStyles())};this._document.defaultView.addEventListener("beforeprint",t),this._document.defaultView.addEventListener("afterprint",n),this.beforePrintEventListeners.push(t),this.afterPrintEventListeners.push(n)}interceptEvents(e){return this.registerBeforeAfterPrintHooks(e),t=>{this.isPrintEvent(t)?t.matches&&!this.isPrinting?(this.startPrinting(e,this.getEventBreakpoints(t)),e.updateStyles()):t.matches||!this.isPrinting||this.isPrintingBeforeAfterEvent||(this.stopPrinting(e),e.updateStyles()):this.collectActivations(t)}}blockPropagation(){return e=>!(this.isPrinting||this.isPrintEvent(e))}startPrinting(e,t){this.isPrinting=!0,e.activatedBreakpoints=this.queue.addPrintBreakpoints(t)}stopPrinting(e){e.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}collectActivations(e){if(!this.isPrinting||this.isPrintingBeforeAfterEvent)if(e.matches)this.isPrintingBeforeAfterEvent||(this.deactivations=[]);else{const t=this.breakpoints.findByQuery(e.mediaQuery);t&&(this.deactivations.push(t),this.deactivations.sort(ht))}}ngOnDestroy(){this.beforePrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("beforeprint",e)),this.afterPrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("afterprint",e))}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(ft),r.Sb(Ke),r.Sb(o.d))},e.\u0275prov=Object(r.Fb)({factory:function(){return new e(Object(r.Sb)(ft),Object(r.Sb)(Ke),Object(r.Sb)(o.d))},token:e,providedIn:"root"}),e})();class yt{constructor(){this.printBreakpoints=[]}addPrintBreakpoints(e){return e.push(gt),e.sort(ht),e.forEach(e=>this.addBreakpoint(e)),this.printBreakpoints}addBreakpoint(e){e&&void 0===this.printBreakpoints.find(t=>t.mediaQuery===e.mediaQuery)&&(this.printBreakpoints=function(e){return!!e&&e.mediaQuery.startsWith("print")}(e)?[e,...this.printBreakpoints]:[...this.printBreakpoints,e])}clear(){this.printBreakpoints=[]}}function _t(e){for(let t in e){let n=e[t]||"";switch(t){case"display":e.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+t]=n;break;case"flex-direction":n=n||"row",e["-webkit-flex-direction"]=n,e["flex-direction"]=n;break;case"order":e.order=e["-webkit-"+t]=isNaN(+n)?"0":n}}return e}let vt=(()=>{class e{constructor(e,t,n,r){this._serverStylesheet=e,this._serverModuleLoaded=t,this._platformId=n,this.layoutConfig=r}applyStyleToElement(e,t,n=null){let r={};"string"==typeof t&&(r[t]=n,t=r),r=this.layoutConfig.disableVendorPrefixes?t:_t(t),this._applyMultiValueStyleToElement(r,e)}applyStyleToElements(e,t=[]){const n=this.layoutConfig.disableVendorPrefixes?e:_t(e);t.forEach(e=>{this._applyMultiValueStyleToElement(n,e)})}getFlowDirection(e){let t=this.lookupStyle(e,"flex-direction");return[t||"row",this.lookupInlineStyle(e,"flex-direction")||Object(o.r)(this._platformId)&&this._serverModuleLoaded?t:""]}hasWrap(e){return"wrap"===this.lookupStyle(e,"flex-wrap")}lookupAttributeValue(e,t){return e.getAttribute(t)||""}lookupInlineStyle(e,t){return Object(o.q)(this._platformId)?e.style.getPropertyValue(t):this._getServerStyle(e,t)}lookupStyle(e,t,n=!1){let r="";return e&&((r=this.lookupInlineStyle(e,t))||(Object(o.q)(this._platformId)?n||(r=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(r=this._serverStylesheet.getStyleForElement(e,t)))),r?r.trim():""}_applyMultiValueStyleToElement(e,t){Object.keys(e).sort().forEach(n=>{const r=e[n],i=Array.isArray(r)?r:[r];i.sort();for(let e of i)e=e?e+"":"",Object(o.q)(this._platformId)||!this._serverModuleLoaded?Object(o.q)(this._platformId)?t.style.setProperty(n,e):this._setServerStyle(t,n,e):this._serverStylesheet.addStyleToElement(t,n,e)})}_setServerStyle(e,t,n){t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const r=this._readStyleAttribute(e);r[t]=n||"",this._writeStyleAttribute(e,r)}_getServerStyle(e,t){return this._readStyleAttribute(e)[t]||""}_readStyleAttribute(e){const t={},n=e.getAttribute("style");if(n){const e=n.split(/;+/g);for(let n=0;n<e.length;n++){const r=e[n].trim();if(r.length>0){const e=r.indexOf(":");if(-1===e)throw new Error(`Invalid CSS style: ${r}`);t[r.substr(0,e).trim()]=r.substr(e+1).trim()}}}return t}_writeStyleAttribute(e,t){let n="";for(const r in t)t[r]&&(n+=r+":"+t[r]+";");e.setAttribute("style",n)}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(We),r.Sb(Ge),r.Sb(r.B),r.Sb(Ke))},e.\u0275prov=Object(r.Fb)({factory:function(){return new e(Object(r.Sb)(We),Object(r.Sb)(Ge),Object(r.Sb)(r.B),Object(r.Sb)(Ke))},token:e,providedIn:"root"}),e})(),wt=(()=>{class e{constructor(e,t,n){this.matchMedia=e,this.breakpoints=t,this.hook=n,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new D.b,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}onMediaChange(e){const t=this.findByQuery(e.mediaQuery);t&&((e=Ze(e,t)).matches&&-1===this.activatedBreakpoints.indexOf(t)?(this.activatedBreakpoints.push(t),this.activatedBreakpoints.sort(ht),this.updateStyles()):e.matches||-1===this.activatedBreakpoints.indexOf(t)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(t),1),this.activatedBreakpoints.sort(ht),this.updateStyles()))}init(e,t,n,r,o=[]){xt(this.updateMap,e,t,n),xt(this.clearMap,e,t,r),this.buildElementKeyMap(e,t),this.watchExtraTriggers(e,t,o)}getValue(e,t,n){const r=this.elementMap.get(e);if(r){const e=void 0!==n?r.get(n):this.getActivatedValues(r,t);if(e)return e.get(t)}}hasValue(e,t){const n=this.elementMap.get(e);if(n){const e=this.getActivatedValues(n,t);if(e)return void 0!==e.get(t)||!1}return!1}setValue(e,t,n,r){let o=this.elementMap.get(e);if(o){const i=(o.get(r)||new Map).set(t,n);o.set(r,i),this.elementMap.set(e,o)}else o=(new Map).set(r,(new Map).set(t,n)),this.elementMap.set(e,o);const i=this.getValue(e,t);void 0!==i&&this.updateElement(e,t,i)}trackValue(e,t){return this.subject.asObservable().pipe(ye(n=>n.element===e&&n.key===t))}updateStyles(){this.elementMap.forEach((e,t)=>{const n=new Set(this.elementKeyMap.get(t));let r=this.getActivatedValues(e);r&&r.forEach((e,r)=>{this.updateElement(t,r,e),n.delete(r)}),n.forEach(n=>{if(r=this.getActivatedValues(e,n),r){const e=r.get(n);this.updateElement(t,n,e)}else this.clearElement(t,n)})})}clearElement(e,t){const n=this.clearMap.get(e);if(n){const r=n.get(t);r&&(r(),this.subject.next({element:e,key:t,value:""}))}}updateElement(e,t,n){const r=this.updateMap.get(e);if(r){const o=r.get(t);o&&(o(n),this.subject.next({element:e,key:t,value:n}))}}releaseElement(e){const t=this.watcherMap.get(e);t&&(t.forEach(e=>e.unsubscribe()),this.watcherMap.delete(e));const n=this.elementMap.get(e);n&&(n.forEach((e,t)=>n.delete(t)),this.elementMap.delete(e))}triggerUpdate(e,t){const n=this.elementMap.get(e);if(n){const r=this.getActivatedValues(n,t);r&&(t?this.updateElement(e,t,r.get(t)):r.forEach((t,n)=>this.updateElement(e,n,t)))}}buildElementKeyMap(e,t){let n=this.elementKeyMap.get(e);n||(n=new Set,this.elementKeyMap.set(e,n)),n.add(t)}watchExtraTriggers(e,t,n){if(n&&n.length){let r=this.watcherMap.get(e);if(r||(r=new Map,this.watcherMap.set(e,r)),!r.get(t)){const o=Object(Oe.a)(...n).subscribe(()=>{const n=this.getValue(e,t);this.updateElement(e,t,n)});r.set(t,o)}}}findByQuery(e){return this.breakpoints.findByQuery(e)}getActivatedValues(e,t){for(let r=0;r<this.activatedBreakpoints.length;r++){const n=e.get(this.activatedBreakpoints[r].alias);if(n&&(void 0===t||n.has(t)&&null!=n.get(t)))return n}const n=e.get("");return void 0===t||n&&n.has(t)?n:void 0}observeActivations(){const e=this.breakpoints.items.map(e=>e.mediaQuery);this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe(Le(this.hook.interceptEvents(this)),ye(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(pt),r.Sb(ft),r.Sb(mt))},e.\u0275prov=Object(r.Fb)({factory:function(){return new e(Object(r.Sb)(pt),Object(r.Sb)(ft),Object(r.Sb)(mt))},token:e,providedIn:"root"}),e})();function xt(e,t,n,r){if(void 0!==r){let o=e.get(t);o||(o=new Map,e.set(t,o)),o.set(n,r)}}let St=(()=>{class e extends class{constructor(){this.shouldCache=!0}sideEffect(e,t,n){}}{buildStyles(e,t){return{display:"true"===e?t.display||(t.isServer?"initial":""):"none"}}}return e.\u0275fac=function(t){return Et(t||e)},e.\u0275prov=Object(r.Fb)({factory:function(){return new e},token:e,providedIn:"root"}),e})();const Et=r.Qb(St);let kt=(()=>{class e extends et{constructor(e,t,n,r,o,i,s){super(e,t,n,r),this.layoutConfig=o,this.platformId=i,this.serverModuleLoaded=s,this.DIRECTIVE_KEY="show-hide",this.display="",this.hasLayout=!1,this.hasFlexChild=!1}ngAfterViewInit(){this.trackExtraTriggers();const e=Array.from(this.nativeElement.children);for(let n=0;n<e.length;n++)if(this.marshal.hasValue(e[n],"flex")){this.hasFlexChild=!0;break}Ct.has(this.nativeElement)?this.display=Ct.get(this.nativeElement):(this.display=this.getDisplayStyle(),Ct.set(this.nativeElement,this.display)),this.init();const t=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY,"");void 0===t||""===t?this.setValue(!0,""):this.triggerUpdate()}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const r=t.split("."),o=r.slice(1).join("."),i=e[t].currentValue;let s=""===i||0!==i&&null!=(n=i)&&"false"!==`${n}`;"fxHide"===r[0]&&(s=!s),this.setValue(s,o)}var n})}trackExtraTriggers(){this.hasLayout=this.marshal.hasValue(this.nativeElement,"layout"),["layout","layout-align"].forEach(e=>{this.marshal.trackValue(this.nativeElement,e).pipe(q(this.destroySubject)).subscribe(this.triggerUpdate.bind(this))})}getDisplayStyle(){return this.hasLayout||this.hasFlexChild&&this.layoutConfig.addFlexToParent?"flex":this.styler.lookupStyle(this.nativeElement,"display",!0)}updateWithValue(e=!0){if(""===e)return;const t=Object(o.r)(this.platformId);this.addStyles(e?"true":"false",{display:this.display,isServer:t}),t&&this.serverModuleLoaded&&this.nativeElement.style.setProperty("display",""),this.marshal.triggerUpdate(this.parentElement,"layout-gap")}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.l),r.Jb(St),r.Jb(vt),r.Jb(wt),r.Jb(Ke),r.Jb(r.B),r.Jb(Ge))},e.\u0275dir=r.Eb({type:e,features:[r.wb,r.xb]}),e})();const Ct=new WeakMap,Ot=["fxShow","fxShow.print","fxShow.xs","fxShow.sm","fxShow.md","fxShow.lg","fxShow.xl","fxShow.lt-sm","fxShow.lt-md","fxShow.lt-lg","fxShow.lt-xl","fxShow.gt-xs","fxShow.gt-sm","fxShow.gt-md","fxShow.gt-lg","fxHide","fxHide.print","fxHide.xs","fxHide.sm","fxHide.md","fxHide.lg","fxHide.xl","fxHide.lt-sm","fxHide.lt-md","fxHide.lt-lg","fxHide.lt-xl","fxHide.gt-xs","fxHide.gt-sm","fxHide.gt-md","fxHide.gt-lg"];let Tt=(()=>{class e extends kt{constructor(){super(...arguments),this.inputs=Ot}}return e.\u0275fac=function(t){return jt(t||e)},e.\u0275dir=r.Eb({type:e,selectors:[["","fxShow",""],["","fxShow.print",""],["","fxShow.xs",""],["","fxShow.sm",""],["","fxShow.md",""],["","fxShow.lg",""],["","fxShow.xl",""],["","fxShow.lt-sm",""],["","fxShow.lt-md",""],["","fxShow.lt-lg",""],["","fxShow.lt-xl",""],["","fxShow.gt-xs",""],["","fxShow.gt-sm",""],["","fxShow.gt-md",""],["","fxShow.gt-lg",""],["","fxHide",""],["","fxHide.print",""],["","fxHide.xs",""],["","fxHide.sm",""],["","fxHide.md",""],["","fxHide.lg",""],["","fxHide.xl",""],["","fxHide.lt-sm",""],["","fxHide.lt-md",""],["","fxHide.lt-lg",""],["","fxHide.lt-xl",""],["","fxHide.gt-xs",""],["","fxHide.gt-sm",""],["","fxHide.gt-md",""],["","fxHide.gt-lg",""]],inputs:{fxShow:"fxShow","fxShow.print":"fxShow.print","fxShow.xs":"fxShow.xs","fxShow.sm":"fxShow.sm","fxShow.md":"fxShow.md","fxShow.lg":"fxShow.lg","fxShow.xl":"fxShow.xl","fxShow.lt-sm":"fxShow.lt-sm","fxShow.lt-md":"fxShow.lt-md","fxShow.lt-lg":"fxShow.lt-lg","fxShow.lt-xl":"fxShow.lt-xl","fxShow.gt-xs":"fxShow.gt-xs","fxShow.gt-sm":"fxShow.gt-sm","fxShow.gt-md":"fxShow.gt-md","fxShow.gt-lg":"fxShow.gt-lg",fxHide:"fxHide","fxHide.print":"fxHide.print","fxHide.xs":"fxHide.xs","fxHide.sm":"fxHide.sm","fxHide.md":"fxHide.md","fxHide.lg":"fxHide.lg","fxHide.xl":"fxHide.xl","fxHide.lt-sm":"fxHide.lt-sm","fxHide.lt-md":"fxHide.lt-md","fxHide.lt-lg":"fxHide.lt-lg","fxHide.lt-xl":"fxHide.lt-xl","fxHide.gt-xs":"fxHide.gt-xs","fxHide.gt-sm":"fxHide.gt-sm","fxHide.gt-md":"fxHide.gt-md","fxHide.gt-lg":"fxHide.gt-lg"},features:[r.wb]}),e})();const jt=r.Qb(Tt);let Pt=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[Ue]]}),e})();const At=(()=>{function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e})();function Nt(e){return new oe.a(t=>{let n;try{n=e()}catch(r){return void t.error(r)}return(n?Object(Pe.a)(n):se()).subscribe(t)})}var Rt=n("3lSR");function It(){return Object(Rt.a)(1)}function Dt(e){return function(t){return 0===e?se():t.lift(new Mt(e))}}class Mt{constructor(e){if(this.total=e,this.total<0)throw new Ie}call(e,t){return t.subscribe(new $t(e,this.total))}}class $t extends re.a{constructor(e,t){super(e),this.total=t,this.ring=new Array,this.count=0}_next(e){const t=this.ring,n=this.total,r=this.count++;t.length<n?t.push(e):t[r%n]=e}_complete(){const e=this.destination;let t=this.count;if(t>0){const n=this.count>=this.total?this.total:this.count,r=this.ring;for(let o=0;o<n;o++){const o=t++%n;e.next(r[o])}}e.complete()}}function Ft(e=Vt){return t=>t.lift(new Lt(e))}class Lt{constructor(e){this.errorFactory=e}call(e,t){return t.subscribe(new Ht(e,this.errorFactory))}}class Ht extends re.a{constructor(e,t){super(e),this.errorFactory=t,this.hasValue=!1}_next(e){this.hasValue=!0,this.destination.next(e)}_complete(){if(this.hasValue)return this.destination.complete();{let t;try{t=this.errorFactory()}catch(e){t=e}this.destination.error(t)}}}function Vt(){return new At}function zt(e=null){return t=>t.lift(new Bt(e))}class Bt{constructor(e){this.defaultValue=e}call(e,t){return t.subscribe(new Ut(e,this.defaultValue))}}class Ut extends re.a{constructor(e,t){super(e),this.defaultValue=t,this.isEmpty=!0}_next(e){this.isEmpty=!1,this.destination.next(e)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}var qt=n("5E2i");function Wt(e,t){const n=arguments.length>=2;return r=>r.pipe(e?ye((t,n)=>e(t,n,r)):qt.a,Dt(1),n?zt(t):Ft(()=>new At))}function Qt(e){return function(t){const n=new Kt(e),r=t.lift(n);return n.caught=r}}class Kt{constructor(e){this.selector=e}call(e,t){return t.subscribe(new Gt(e,this.selector,this.caught))}}class Gt extends F.a{constructor(e,t,n){super(e),this.selector=t,this.caught=n}error(e){if(!this.isStopped){let n;try{n=this.selector(e,this.caught)}catch(t){return void super.error(t)}this._unsubscribeAndRecycle();const r=new je.a(this,void 0,void 0);this.add(r);const o=Object(L.a)(this,n,void 0,void 0,r);o!==r&&this.add(o)}}}function Yt(e,t){const n=arguments.length>=2;return r=>r.pipe(e?ye((t,n)=>e(t,n,r)):qt.a,De(1),n?zt(t):Ft(()=>new At))}var Zt=n("cJ9h");class Jt{constructor(e,t,n){this.predicate=e,this.thisArg=t,this.source=n}call(e,t){return t.subscribe(new Xt(e,this.predicate,this.thisArg,this.source))}}class Xt extends re.a{constructor(e,t,n,r){super(e),this.predicate=t,this.thisArg=n,this.source=r,this.index=0,this.thisArg=n||this}notifyComplete(e){this.destination.next(e),this.destination.complete()}_next(e){let t=!1;try{t=this.predicate.call(this.thisArg,e,this.index++,this.source)}catch(n){return void this.destination.error(n)}t||this.notifyComplete(!1)}_complete(){this.notifyComplete(!0)}}function en(...e){return It()(ce(...e))}function tn(e,t){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new nn(e,t,n))}}class nn{constructor(e,t,n=!1){this.accumulator=e,this.seed=t,this.hasSeed=n}call(e,t){return t.subscribe(new rn(e,this.accumulator,this.seed,this.hasSeed))}}class rn extends re.a{constructor(e,t,n,r){super(e),this.accumulator=t,this._seed=n,this.hasSeed=r,this.index=0}get seed(){return this._seed}set seed(e){this.hasSeed=!0,this._seed=e}_next(e){if(this.hasSeed)return this._tryNext(e);this.seed=e,this.destination.next(e)}_tryNext(e){const t=this.index++;let n;try{n=this.accumulator(this.seed,e,t)}catch(r){this.destination.error(r)}this.seed=n,this.destination.next(n)}}function on(e,t){return Object(Zt.a)(e,t,1)}var sn=n("Ti3e");class an{constructor(e){this.callback=e}call(e,t){return t.subscribe(new cn(e,this.callback))}}class cn extends re.a{constructor(e,t){super(e),this.add(new G.a(t))}}class ln{constructor(e,t){this.id=e,this.url=t}}class un extends ln{constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class hn extends ln{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class dn extends ln{constructor(e,t,n){super(e,t),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class fn extends ln{constructor(e,t,n){super(e,t),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class pn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class bn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class gn extends ln{constructor(e,t,n,r,o){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class mn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class yn extends ln{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class _n{constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class vn{constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class wn{constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class xn{constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Sn{constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class En{constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class kn{constructor(e,t,n){this.routerEvent=e,this.position=t,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}let Cn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&r.Kb(0,"router-outlet")},directives:function(){return[To]},encapsulation:2}),e})();class On{constructor(e){this.params=e||{}}has(e){return this.params.hasOwnProperty(e)}get(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function Tn(e){return new On(e)}function jn(e){const t=Error("NavigationCancelingError: "+e);return t.ngNavigationCancelingError=!0,t}function Pn(e,t,n){const r=n.path.split("/");if(r.length>e.length)return null;if("full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const t=r[i],n=e[i];if(t.startsWith(":"))o[t.substring(1)]=n;else if(t!==n.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}class An{constructor(e,t){this.routes=e,this.module=t}}function Nn(e,t=""){for(let n=0;n<e.length;n++){const r=e[n];Rn(r,In(t,r))}}function Rn(e,t){if(!e)throw new Error(`\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(e))throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);if(!e.component&&!e.children&&!e.loadChildren&&e.outlet&&"primary"!==e.outlet)throw new Error(`Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`);if(e.redirectTo&&e.children)throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);if(e.redirectTo&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);if(e.children&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);if(e.redirectTo&&e.component)throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);if(e.path&&e.matcher)throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);if(void 0===e.redirectTo&&!e.component&&!e.children&&!e.loadChildren)throw new Error(`Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===e.path&&void 0===e.matcher)throw new Error(`Invalid configuration of route '${t}': routes must have either a path or a matcher specified`);if("string"==typeof e.path&&"/"===e.path.charAt(0))throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);if(""===e.path&&void 0!==e.redirectTo&&void 0===e.pathMatch)throw new Error(`Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==e.pathMatch&&"full"!==e.pathMatch&&"prefix"!==e.pathMatch)throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);e.children&&Nn(e.children,t)}function In(e,t){return t?e||t.path?e&&!t.path?`${e}/`:!e&&t.path?t.path:`${e}/${t.path}`:"":e}function Dn(e){const t=e.children&&e.children.map(Dn),n=t?Object.assign(Object.assign({},e),{children:t}):Object.assign({},e);return!n.component&&(t||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=Cn),n}function Mn(e,t){const n=Object.keys(e),r=Object.keys(t);if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!$n(e[o],t[o]))return!1;return!0}function $n(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length==t.length&&e.every(e=>t.indexOf(e)>-1):e===t}function Fn(e){return Array.prototype.concat.apply([],e)}function Ln(e){return e.length>0?e[e.length-1]:null}function Hn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function Vn(e){return Object(r.pb)(e)?e:Object(r.qb)(e)?Object(Pe.a)(Promise.resolve(e)):ce(e)}function zn(e,t,n){return n?function(e,t){return Mn(e,t)}(e.queryParams,t.queryParams)&&function e(t,n){if(!Wn(t.segments,n.segments))return!1;if(t.numberOfChildren!==n.numberOfChildren)return!1;for(const r in n.children){if(!t.children[r])return!1;if(!e(t.children[r],n.children[r]))return!1}return!0}(e.root,t.root):function(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>$n(e[n],t[n]))}(e.queryParams,t.queryParams)&&function e(t,n){return function t(n,r,o){if(n.segments.length>o.length)return!!Wn(n.segments.slice(0,o.length),o)&&!r.hasChildren();if(n.segments.length===o.length){if(!Wn(n.segments,o))return!1;for(const t in r.children){if(!n.children[t])return!1;if(!e(n.children[t],r.children[t]))return!1}return!0}{const e=o.slice(0,n.segments.length),i=o.slice(n.segments.length);return!!Wn(n.segments,e)&&!!n.children.primary&&t(n.children.primary,r,i)}}(t,n,n.segments)}(e.root,t.root)}class Bn{constructor(e,t,n){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Tn(this.queryParams)),this._queryParamMap}toString(){return Yn.serialize(this)}}class Un{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Hn(t,(e,t)=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Zn(this)}}class qn{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=Tn(this.parameters)),this._parameterMap}toString(){return rr(this)}}function Wn(e,t){return e.length===t.length&&e.every((e,n)=>e.path===t[n].path)}function Qn(e,t){let n=[];return Hn(e.children,(e,r)=>{"primary"===r&&(n=n.concat(t(e,r)))}),Hn(e.children,(e,r)=>{"primary"!==r&&(n=n.concat(t(e,r)))}),n}class Kn{}class Gn{parse(e){const t=new cr(e);return new Bn(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){var t;return`${`/${function e(t,n){if(!t.hasChildren())return Zn(t);if(n){const n=t.children.primary?e(t.children.primary,!1):"",r=[];return Hn(t.children,(t,n)=>{"primary"!==n&&r.push(`${n}:${e(t,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=Qn(t,(n,r)=>"primary"===r?[e(t.children.primary,!1)]:[`${r}:${e(n,!1)}`]);return`${Zn(t)}/(${n.join("//")})`}}(e.root,!0)}`}${function(e){const t=Object.keys(e).map(t=>{const n=e[t];return Array.isArray(n)?n.map(e=>`${Xn(t)}=${Xn(e)}`).join("&"):`${Xn(t)}=${Xn(n)}`});return t.length?`?${t.join("&")}`:""}(e.queryParams)}${"string"==typeof e.fragment?`#${t=e.fragment,encodeURI(t)}`:""}`}}const Yn=new Gn;function Zn(e){return e.segments.map(e=>rr(e)).join("/")}function Jn(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xn(e){return Jn(e).replace(/%3B/gi,";")}function er(e){return Jn(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function tr(e){return decodeURIComponent(e)}function nr(e){return tr(e.replace(/\+/g,"%20"))}function rr(e){return`${er(e.path)}${t=e.parameters,Object.keys(t).map(e=>`;${er(e)}=${er(t[e])}`).join("")}`;var t}const or=/^[^\/()?;=#]+/;function ir(e){const t=e.match(or);return t?t[0]:""}const sr=/^[^=?&#]+/,ar=/^[^?&#]+/;class cr{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Un([],{}):new Un([],this.parseChildren())}parseQueryParams(){const e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n.primary=new Un(e,t)),n}parseSegment(){const e=ir(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(e),new qn(tr(e),this.parseMatrixParams())}parseMatrixParams(){const e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){const t=ir(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=ir(this.remaining);e&&(n=e,this.capture(n))}e[tr(t)]=tr(n)}parseQueryParam(e){const t=function(e){const t=e.match(sr);return t?t[0]:""}(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=function(e){const t=e.match(ar);return t?t[0]:""}(this.remaining);e&&(n=e,this.capture(n))}const r=nr(t),o=nr(n);if(e.hasOwnProperty(r)){let t=e[r];Array.isArray(t)||(t=[t],e[r]=t),t.push(o)}else e[r]=o}parseParens(e){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=ir(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let o=void 0;n.indexOf(":")>-1?(o=n.substr(0,n.indexOf(":")),this.capture(o),this.capture(":")):e&&(o="primary");const i=this.parseChildren();t[o]=1===Object.keys(i).length?i.primary:new Un([],i),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}capture(e){if(!this.consumeOptional(e))throw new Error(`Expected "${e}".`)}}class lr{constructor(e){this._root=e}get root(){return this._root.value}parent(e){const t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){const t=ur(e,this._root);return t?t.children.map(e=>e.value):[]}firstChild(e){const t=ur(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){const t=hr(e,this._root);return t.length<2?[]:t[t.length-2].children.map(e=>e.value).filter(t=>t!==e)}pathFromRoot(e){return hr(e,this._root).map(e=>e.value)}}function ur(e,t){if(e===t.value)return t;for(const n of t.children){const t=ur(e,n);if(t)return t}return null}function hr(e,t){if(e===t.value)return[t];for(const n of t.children){const r=hr(e,n);if(r.length)return r.unshift(t),r}return[]}class dr{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}}function fr(e){const t={};return e&&e.children.forEach(e=>t[e.value.outlet]=e),t}class pr extends lr{constructor(e,t){super(e),this.snapshot=t,vr(this,e)}toString(){return this.snapshot.toString()}}function br(e,t){const n=function(e,t){const n=new yr([],{},{},"",{},"primary",t,null,e.root,-1,{});return new _r("",new dr(n,[]))}(e,t),r=new Ce([new qn("",{})]),o=new Ce({}),i=new Ce({}),s=new Ce({}),a=new Ce(""),c=new gr(r,o,s,a,i,"primary",t,n.root);return c.snapshot=n.root,new pr(new dr(c,[]),n)}class gr{constructor(e,t,n,r,o,i,s,a){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Object(K.a)(e=>Tn(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Object(K.a)(e=>Tn(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function mr(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const e=n[r],t=n[r-1];if(e.routeConfig&&""===e.routeConfig.path)r--;else{if(t.component)break;r--}}return function(e){return e.reduce((e,t)=>({params:Object.assign(Object.assign({},e.params),t.params),data:Object.assign(Object.assign({},e.data),t.data),resolve:Object.assign(Object.assign({},e.resolve),t._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class yr{constructor(e,t,n,r,o,i,s,a,c,l,u){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this.routeConfig=a,this._urlSegment=c,this._lastPathIndex=l,this._resolve=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Tn(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Tn(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class _r extends lr{constructor(e,t){super(t),this.url=e,vr(this,t)}toString(){return wr(this._root)}}function vr(e,t){t.value._routerState=e,t.children.forEach(t=>vr(e,t))}function wr(e){const t=e.children.length>0?` { ${e.children.map(wr).join(", ")} } `:"";return`${e.value}${t}`}function xr(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,Mn(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),Mn(t.params,n.params)||e.params.next(n.params),function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!Mn(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),Mn(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Sr(e,t){var n,r;return Mn(e.params,t.params)&&Wn(n=e.url,r=t.url)&&n.every((e,t)=>Mn(e.parameters,r[t].parameters))&&!(!e.parent!=!t.parent)&&(!e.parent||Sr(e.parent,t.parent))}function Er(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function kr(e,t,n,r,o){let i={};return r&&Hn(r,(e,t)=>{i[t]=Array.isArray(e)?e.map(e=>`${e}`):`${e}`}),new Bn(n.root===e?t:function e(t,n,r){const o={};return Hn(t.children,(t,i)=>{o[i]=t===n?r:e(t,n,r)}),new Un(t.segments,o)}(n.root,e,t),i,o)}class Cr{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&Er(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(e=>"object"==typeof e&&null!=e&&e.outlets);if(r&&r!==Ln(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Or{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}}function Tr(e){return"object"==typeof e&&null!=e&&e.outlets?e.outlets.primary:`${e}`}function jr(e,t,n){if(e||(e=new Un([],{})),0===e.segments.length&&e.hasChildren())return Pr(e,t,n);const r=function(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const t=e.segments[o],s=Tr(n[r]),a=r<n.length-1?n[r+1]:null;if(o>0&&void 0===s)break;if(s&&a&&"object"==typeof a&&void 0===a.outlets){if(!Ir(s,a,t))return i;r+=2}else{if(!Ir(s,{},t))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const t=new Un(e.segments.slice(0,r.pathIndex),{});return t.children.primary=new Un(e.segments.slice(r.pathIndex),e.children),Pr(t,0,o)}return r.match&&0===o.length?new Un(e.segments,{}):r.match&&!e.hasChildren()?Ar(e,t,n):r.match?Pr(e,0,o):Ar(e,t,n)}function Pr(e,t,n){if(0===n.length)return new Un(e.segments,{});{const r=function(e){return"object"!=typeof e[0]||void 0===e[0].outlets?{primary:e}:e[0].outlets}(n),o={};return Hn(r,(n,r)=>{null!==n&&(o[r]=jr(e.children[r],t,n))}),Hn(e.children,(e,t)=>{void 0===r[t]&&(o[t]=e)}),new Un(e.segments,o)}}function Ar(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){if("object"==typeof n[o]&&void 0!==n[o].outlets){const e=Nr(n[o].outlets);return new Un(r,e)}if(0===o&&Er(n[0])){r.push(new qn(e.segments[t].path,n[0])),o++;continue}const i=Tr(n[o]),s=o<n.length-1?n[o+1]:null;i&&s&&Er(s)?(r.push(new qn(i,Rr(s))),o+=2):(r.push(new qn(i,{})),o++)}return new Un(r,{})}function Nr(e){const t={};return Hn(e,(e,n)=>{null!==e&&(t[n]=Ar(new Un([],{}),0,e))}),t}function Rr(e){const t={};return Hn(e,(e,n)=>t[n]=`${e}`),t}function Ir(e,t,n){return e==n.path&&Mn(t,n.parameters)}class Dr{constructor(e,t,n,r){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r}activate(e){const t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),xr(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){const r=fr(t);e.children.forEach(e=>{const t=e.value.outlet;this.deactivateRoutes(e,r[t],n),delete r[t]}),Hn(r,(e,t)=>{this.deactivateRouteAndItsChildren(e,n)})}deactivateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(r===o)if(r.component){const o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else o&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){const n=t.getContext(e.value.outlet);if(n&&n.outlet){const t=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:t,route:e,contexts:r})}}deactivateRouteAndOutlet(e,t){const n=t.getContext(e.value.outlet);if(n){const r=fr(e),o=e.value.component?n.children:t;Hn(r,(e,t)=>this.deactivateRouteAndItsChildren(e,o)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(e,t,n){const r=fr(t);e.children.forEach(e=>{this.activateRoutes(e,r[e.value.outlet],n),this.forwardEvent(new En(e.value.snapshot))}),e.children.length&&this.forwardEvent(new xn(e.value.snapshot))}activateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(xr(r),r===o)if(r.component){const o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){const t=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const e=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),t.children.onOutletReAttached(e.contexts),t.attachRef=e.componentRef,t.route=e.route.value,t.outlet&&t.outlet.attach(e.componentRef,e.route.value),Mr(e.route)}else{const n=function(e){for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig;if(e&&e.component)return null}return null}(r.snapshot),o=n?n.module.componentFactoryResolver:null;t.attachRef=null,t.route=r,t.resolver=o,t.outlet&&t.outlet.activateWith(r,o),this.activateChildRoutes(e,null,t.children)}}else this.activateChildRoutes(e,null,n)}}function Mr(e){xr(e.value),e.children.forEach(Mr)}function $r(e){return"function"==typeof e}function Fr(e){return e instanceof Bn}class Lr{constructor(e){this.segmentGroup=e||null}}class Hr{constructor(e){this.urlTree=e}}function Vr(e){return new oe.a(t=>t.error(new Lr(e)))}function zr(e){return new oe.a(t=>t.error(new Hr(e)))}function Br(e){return new oe.a(t=>t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))}class Ur{constructor(e,t,n,o,i){this.configLoader=t,this.urlSerializer=n,this.urlTree=o,this.config=i,this.allowRedirects=!0,this.ngModule=e.get(r.x)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(Object(K.a)(e=>this.createUrlTree(e,this.urlTree.queryParams,this.urlTree.fragment))).pipe(Qt(e=>{if(e instanceof Hr)return this.allowRedirects=!1,this.match(e.urlTree);if(e instanceof Lr)throw this.noMatchError(e);throw e}))}match(e){return this.expandSegmentGroup(this.ngModule,this.config,e.root,"primary").pipe(Object(K.a)(t=>this.createUrlTree(t,e.queryParams,e.fragment))).pipe(Qt(e=>{if(e instanceof Lr)throw this.noMatchError(e);throw e}))}noMatchError(e){return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`)}createUrlTree(e,t,n){const r=e.segments.length>0?new Un([],{primary:e}):e;return new Bn(r,t,n)}expandSegmentGroup(e,t,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(e,t,n).pipe(Object(K.a)(e=>new Un([],e))):this.expandSegment(e,n,t,n.segments,r,!0)}expandChildren(e,t,n){return function(e,t){if(0===Object.keys(e).length)return ce({});const n=[],r=[],o={};return Hn(e,(e,i)=>{const s=t(i,e).pipe(Object(K.a)(e=>o[i]=e));"primary"===i?n.push(s):r.push(s)}),ce.apply(null,n.concat(r)).pipe(It(),Wt(),Object(K.a)(()=>o))}(n.children,(n,r)=>this.expandSegmentGroup(e,t,r,n))}expandSegment(e,t,n,r,o,i){return ce(...n).pipe(Object(K.a)(s=>this.expandSegmentAgainstRoute(e,t,n,s,r,o,i).pipe(Qt(e=>{if(e instanceof Lr)return ce(null);throw e}))),It(),Yt(e=>!!e),Qt((e,n)=>{if(e instanceof At||"EmptyError"===e.name){if(this.noLeftoversInUrl(t,r,o))return ce(new Un([],{}));throw new Lr(t)}throw e}))}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}expandSegmentAgainstRoute(e,t,n,r,o,i,s){return Kr(r)!==i?Vr(t):void 0===r.redirectTo?this.matchSegmentAgainstRoute(e,t,r,o):s&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i):Vr(t)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,n,r,i):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,n,r){const o=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?zr(o):this.lineralizeSegments(n,o).pipe(Object(Zt.a)(n=>{const o=new Un(n,{});return this.expandSegment(e,o,t,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){const{matched:s,consumedSegments:a,lastChild:c,positionalParamSegments:l}=qr(t,r,o);if(!s)return Vr(t);const u=this.applyRedirectCommands(a,r.redirectTo,l);return r.redirectTo.startsWith("/")?zr(u):this.lineralizeSegments(r,u).pipe(Object(Zt.a)(r=>this.expandSegment(e,t,n,r.concat(o.slice(c)),i,!1)))}matchSegmentAgainstRoute(e,t,n,r){if("**"===n.path)return n.loadChildren?this.configLoader.load(e.injector,n).pipe(Object(K.a)(e=>(n._loadedConfig=e,new Un(r,{})))):ce(new Un(r,{}));const{matched:o,consumedSegments:i,lastChild:s}=qr(t,n,r);if(!o)return Vr(t);const a=r.slice(s);return this.getChildConfig(e,n,r).pipe(Object(Zt.a)(e=>{const n=e.module,r=e.routes,{segmentGroup:o,slicedSegments:s}=function(e,t,n,r){return n.length>0&&function(e,t,n){return n.some(n=>Qr(e,t,n)&&"primary"!==Kr(n))}(e,n,r)?{segmentGroup:Wr(new Un(t,function(e,t){const n={};n.primary=t;for(const r of e)""===r.path&&"primary"!==Kr(r)&&(n[Kr(r)]=new Un([],{}));return n}(r,new Un(n,e.children)))),slicedSegments:[]}:0===n.length&&function(e,t,n){return n.some(n=>Qr(e,t,n))}(e,n,r)?{segmentGroup:Wr(new Un(e.segments,function(e,t,n,r){const o={};for(const i of n)Qr(e,t,i)&&!r[Kr(i)]&&(o[Kr(i)]=new Un([],{}));return Object.assign(Object.assign({},r),o)}(e,n,r,e.children))),slicedSegments:n}:{segmentGroup:e,slicedSegments:n}}(t,i,a,r);return 0===s.length&&o.hasChildren()?this.expandChildren(n,r,o).pipe(Object(K.a)(e=>new Un(i,e))):0===r.length&&0===s.length?ce(new Un(i,{})):this.expandSegment(n,o,r,s,"primary",!0).pipe(Object(K.a)(e=>new Un(i.concat(e.segments),e.children)))}))}getChildConfig(e,t,n){return t.children?ce(new An(t.children,e)):t.loadChildren?void 0!==t._loadedConfig?ce(t._loadedConfig):function(e,t,n){const r=t.canLoad;return r&&0!==r.length?Object(Pe.a)(r).pipe(Object(K.a)(r=>{const o=e.get(r);let i;if(function(e){return e&&$r(e.canLoad)}(o))i=o.canLoad(t,n);else{if(!$r(o))throw new Error("Invalid CanLoad guard");i=o(t,n)}return Vn(i)})).pipe(It(),(o=e=>!0===e,e=>e.lift(new Jt(o,void 0,e)))):ce(!0);var o}(e.injector,t,n).pipe(Object(Zt.a)(n=>n?this.configLoader.load(e.injector,t).pipe(Object(K.a)(e=>(t._loadedConfig=e,e))):function(e){return new oe.a(t=>t.error(jn(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)))}(t))):ce(new An([],e))}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return ce(n);if(r.numberOfChildren>1||!r.children.primary)return Br(e.redirectTo);r=r.children.primary}}applyRedirectCommands(e,t,n){return this.applyRedirectCreatreUrlTree(t,this.urlSerializer.parse(t),e,n)}applyRedirectCreatreUrlTree(e,t,n,r){const o=this.createSegmentGroup(e,t.root,n,r);return new Bn(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){const n={};return Hn(e,(e,r)=>{if("string"==typeof e&&e.startsWith(":")){const o=e.substring(1);n[r]=t[o]}else n[r]=e}),n}createSegmentGroup(e,t,n,r){const o=this.createSegments(e,t.segments,n,r);let i={};return Hn(t.children,(t,o)=>{i[o]=this.createSegmentGroup(e,t,n,r)}),new Un(o,i)}createSegments(e,t,n,r){return t.map(t=>t.path.startsWith(":")?this.findPosParam(e,t,r):this.findOrReturn(t,n))}findPosParam(e,t,n){const r=n[t.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);return r}findOrReturn(e,t){let n=0;for(const r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}}function qr(e,t,n){if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const r=(t.matcher||Pn)(n,e,t);return r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function Wr(e){if(1===e.numberOfChildren&&e.children.primary){const t=e.children.primary;return new Un(e.segments.concat(t.segments),t.children)}return e}function Qr(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function Kr(e){return e.outlet||"primary"}class Gr{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}}class Yr{constructor(e,t){this.component=e,this.route=t}}function Zr(e,t,n){const r=e._root;return function e(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=fr(n);return t.children.forEach(t=>{!function(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=t.value,a=n?n.value:null,c=r?r.getContext(t.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){const l=function(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!Wn(e.url,t.url);case"pathParamsOrQueryParamsChange":return!Wn(e.url,t.url)||!Mn(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Sr(e,t)||!Mn(e.queryParams,t.queryParams);case"paramsChange":default:return!Sr(e,t)}}(a,s,s.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Gr(o)):(s.data=a.data,s._resolvedData=a._resolvedData),e(t,n,s.component?c?c.children:null:r,o,i),l&&i.canDeactivateChecks.push(new Yr(c&&c.outlet&&c.outlet.component||null,a))}else a&&Xr(n,c,i),i.canActivateChecks.push(new Gr(o)),e(t,null,s.component?c?c.children:null:r,o,i)}(t,s[t.value.outlet],r,o.concat([t.value]),i),delete s[t.value.outlet]}),Hn(s,(e,t)=>Xr(e,r.getContext(t),i)),i}(r,t?t._root:null,n,[r.value])}function Jr(e,t,n){const r=function(e){if(!e)return null;for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig}return null}(t);return(r?r.module.injector:n).get(e)}function Xr(e,t,n){const r=fr(e),o=e.value;Hn(r,(e,r)=>{Xr(e,o.component?t?t.children.getContext(r):null:t,n)}),n.canDeactivateChecks.push(new Yr(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}const eo=Symbol("INITIAL_VALUE");function to(){return Ae(e=>z(...e.map(e=>e.pipe(De(1),function(...e){const t=e[e.length-1];return Object(M.a)(t)?(e.pop(),n=>en(e,n,t)):t=>en(e,t)}(eo)))).pipe(tn((e,t)=>{let n=!1;return t.reduce((e,r,o)=>{if(e!==eo)return e;if(r===eo&&(n=!0),!n){if(!1===r)return r;if(o===t.length-1||Fr(r))return r}return e},e)},eo),ye(e=>e!==eo),Object(K.a)(e=>Fr(e)?e:!0===e),De(1)))}function no(e,t){return null!==e&&t&&t(new Sn(e)),ce(!0)}function ro(e,t){return null!==e&&t&&t(new wn(e)),ce(!0)}function oo(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;return r&&0!==r.length?ce(r.map(r=>Nt(()=>{const o=Jr(r,t,n);let i;if(function(e){return e&&$r(e.canActivate)}(o))i=Vn(o.canActivate(t,e));else{if(!$r(o))throw new Error("Invalid CanActivate guard");i=Vn(o(t,e))}return i.pipe(Yt())}))).pipe(to()):ce(!0)}function io(e,t,n){const r=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(e=>function(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(e)).filter(e=>null!==e).map(t=>Nt(()=>ce(t.guards.map(o=>{const i=Jr(o,t.node,n);let s;if(function(e){return e&&$r(e.canActivateChild)}(i))s=Vn(i.canActivateChild(r,e));else{if(!$r(i))throw new Error("Invalid CanActivateChild guard");s=Vn(i(r,e))}return s.pipe(Yt())})).pipe(to())));return ce(o).pipe(to())}class so{}class ao{constructor(e,t,n,r,o,i){this.rootComponentType=e,this.config=t,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=o,this.relativeLinkResolution=i}recognize(){try{const e=uo(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,t=this.processSegmentGroup(this.config,e,"primary"),n=new yr([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),r=new dr(n,t),o=new _r(this.url,r);return this.inheritParamsAndData(o._root),ce(o)}catch(e){return new oe.a(t=>t.error(e))}}inheritParamsAndData(e){const t=e.value,n=mr(t,this.paramsInheritanceStrategy);t.params=Object.freeze(n.params),t.data=Object.freeze(n.data),e.children.forEach(e=>this.inheritParamsAndData(e))}processSegmentGroup(e,t,n){return 0===t.segments.length&&t.hasChildren()?this.processChildren(e,t):this.processSegment(e,t,t.segments,n)}processChildren(e,t){const n=Qn(t,(t,n)=>this.processSegmentGroup(e,t,n));return function(e){const t={};e.forEach(e=>{const n=t[e.value.outlet];if(n){const t=n.url.map(e=>e.toString()).join("/"),r=e.value.url.map(e=>e.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${r}'.`)}t[e.value.outlet]=e.value})}(n),n.sort((e,t)=>"primary"===e.value.outlet?-1:"primary"===t.value.outlet?1:e.value.outlet.localeCompare(t.value.outlet)),n}processSegment(e,t,n,r){for(const i of e)try{return this.processSegmentAgainstRoute(i,t,n,r)}catch(o){if(!(o instanceof so))throw o}if(this.noLeftoversInUrl(t,n,r))return[];throw new so}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}processSegmentAgainstRoute(e,t,n,r){if(e.redirectTo)throw new so;if((e.outlet||"primary")!==r)throw new so;let o,i=[],s=[];if("**"===e.path){const i=n.length>0?Ln(n).parameters:{};o=new yr(n,i,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,po(e),r,e.component,e,co(t),lo(t)+n.length,bo(e))}else{const a=function(e,t,n){if(""===t.path){if("full"===t.pathMatch&&(e.hasChildren()||n.length>0))throw new so;return{consumedSegments:[],lastChild:0,parameters:{}}}const r=(t.matcher||Pn)(n,e,t);if(!r)throw new so;const o={};Hn(r.posParams,(e,t)=>{o[t]=e.path});const i=r.consumed.length>0?Object.assign(Object.assign({},o),r.consumed[r.consumed.length-1].parameters):o;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:i}}(t,e,n);i=a.consumedSegments,s=n.slice(a.lastChild),o=new yr(i,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,po(e),r,e.component,e,co(t),lo(t)+i.length,bo(e))}const a=function(e){return e.children?e.children:e.loadChildren?e._loadedConfig.routes:[]}(e),{segmentGroup:c,slicedSegments:l}=uo(t,i,s,a,this.relativeLinkResolution);if(0===l.length&&c.hasChildren()){const e=this.processChildren(a,c);return[new dr(o,e)]}if(0===a.length&&0===l.length)return[new dr(o,[])];const u=this.processSegment(a,c,l,"primary");return[new dr(o,u)]}}function co(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function lo(e){let t=e,n=t._segmentIndexShift?t._segmentIndexShift:0;for(;t._sourceSegment;)t=t._sourceSegment,n+=t._segmentIndexShift?t._segmentIndexShift:0;return n-1}function uo(e,t,n,r,o){if(n.length>0&&function(e,t,n){return n.some(n=>ho(e,t,n)&&"primary"!==fo(n))}(e,n,r)){const o=new Un(t,function(e,t,n,r){const o={};o.primary=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&"primary"!==fo(i)){const n=new Un([],{});n._sourceSegment=e,n._segmentIndexShift=t.length,o[fo(i)]=n}return o}(e,t,r,new Un(n,e.children)));return o._sourceSegment=e,o._segmentIndexShift=t.length,{segmentGroup:o,slicedSegments:[]}}if(0===n.length&&function(e,t,n){return n.some(n=>ho(e,t,n))}(e,n,r)){const i=new Un(e.segments,function(e,t,n,r,o,i){const s={};for(const a of r)if(ho(e,n,a)&&!o[fo(a)]){const n=new Un([],{});n._sourceSegment=e,n._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[fo(a)]=n}return Object.assign(Object.assign({},o),s)}(e,t,n,r,e.children,o));return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}const i=new Un(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function ho(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function fo(e){return e.outlet||"primary"}function po(e){return e.data||{}}function bo(e){return e.resolve||{}}function go(e,t,n,r){const o=Jr(e,t,r);return Vn(o.resolve?o.resolve(t,n):o(t,n))}function mo(e){return function(t){return t.pipe(Ae(t=>{const n=e(t);return n?Object(Pe.a)(n).pipe(Object(K.a)(()=>t)):Object(Pe.a)([t])}))}}class yo{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}}const _o=new r.q("ROUTES");class vo{constructor(e,t,n,r){this.loader=e,this.compiler=t,this.onLoadStartListener=n,this.onLoadEndListener=r}load(e,t){return this.onLoadStartListener&&this.onLoadStartListener(t),this.loadModuleFactory(t.loadChildren).pipe(Object(K.a)(n=>{this.onLoadEndListener&&this.onLoadEndListener(t);const r=n.create(e);return new An(Fn(r.injector.get(_o)).map(Dn),r)}))}loadModuleFactory(e){return"string"==typeof e?Object(Pe.a)(this.loader.load(e)):Vn(e()).pipe(Object(Zt.a)(e=>e instanceof r.v?ce(e):Object(Pe.a)(this.compiler.compileModuleAsync(e))))}}class wo{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}}function xo(e){throw e}function So(e,t,n){return t.parse("/")}function Eo(e,t){return ce(null)}let ko=(()=>{class e{constructor(e,t,n,o,i,s,a,c){this.rootComponentType=e,this.urlSerializer=t,this.rootContexts=n,this.location=o,this.config=c,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new D.b,this.errorHandler=xo,this.malformedUriErrorHandler=So,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Eo,afterPreactivation:Eo},this.urlHandlingStrategy=new wo,this.routeReuseStrategy=new yo,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=i.get(r.x),this.console=i.get(r.W);const l=i.get(r.z);this.isNgZoneEnabled=l instanceof r.z,this.resetConfig(c),this.currentUrlTree=new Bn(new Un([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new vo(s,a,e=>this.triggerEvent(new _n(e)),e=>this.triggerEvent(new vn(e))),this.routerState=br(this.currentUrlTree,this.rootComponentType),this.transitions=new Ce({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(e){const t=this.events;return e.pipe(ye(e=>0!==e.id),Object(K.a)(e=>Object.assign(Object.assign({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl)})),Ae(e=>{let n=!1,r=!1;return ce(e).pipe(Le(e=>{this.currentNavigation={id:e.id,initialUrl:e.currentRawUrl,extractedUrl:e.extractedUrl,trigger:e.source,extras:e.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Ae(e=>{const n=!this.navigated||e.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl))return ce(e).pipe(Ae(e=>{const n=this.transitions.getValue();return t.next(new un(e.id,this.serializeUrl(e.extractedUrl),e.source,e.restoredState)),n!==this.transitions.getValue()?ie:[e]}),Ae(e=>Promise.resolve(e)),(r=this.ngModule.injector,o=this.configLoader,i=this.urlSerializer,s=this.config,function(e){return e.pipe(Ae(e=>function(e,t,n,r,o){return new Ur(e,t,n,r,o).apply()}(r,o,i,e.extractedUrl,s).pipe(Object(K.a)(t=>Object.assign(Object.assign({},e),{urlAfterRedirects:t})))))}),Le(e=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:e.urlAfterRedirects})}),function(e,t,n,r,o){return function(i){return i.pipe(Object(Zt.a)(i=>function(e,t,n,r,o="emptyOnly",i="legacy"){return new ao(e,t,n,r,o,i).recognize()}(e,t,i.urlAfterRedirects,n(i.urlAfterRedirects),r,o).pipe(Object(K.a)(e=>Object.assign(Object.assign({},i),{targetSnapshot:e})))))}}(this.rootComponentType,this.config,e=>this.serializeUrl(e),this.paramsInheritanceStrategy,this.relativeLinkResolution),Le(e=>{"eager"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(e.urlAfterRedirects,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),Le(e=>{const n=new pn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.next(n)}));var r,o,i,s;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:o,restoredState:i,extras:s}=e,a=new un(n,this.serializeUrl(r),o,i);t.next(a);const c=br(r,this.rootComponentType).snapshot;return ce(Object.assign(Object.assign({},e),{targetSnapshot:c,urlAfterRedirects:r,extras:Object.assign(Object.assign({},s),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=e.rawUrl,this.browserUrlTree=e.urlAfterRedirects,e.resolve(null),ie}),mo(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.beforePreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),Le(e=>{const t=new bn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),Object(K.a)(e=>Object.assign(Object.assign({},e),{guards:Zr(e.targetSnapshot,e.currentSnapshot,this.rootContexts)})),function(e,t){return function(n){return n.pipe(Object(Zt.a)(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?ce(Object.assign(Object.assign({},n),{guardsResult:!0})):function(e,t,n,r){return Object(Pe.a)(e).pipe(Object(Zt.a)(e=>function(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?ce(i.map(i=>{const s=Jr(i,t,o);let a;if(function(e){return e&&$r(e.canDeactivate)}(s))a=Vn(s.canDeactivate(e,t,n,r));else{if(!$r(s))throw new Error("Invalid CanDeactivate guard");a=Vn(s(e,t,n,r))}return a.pipe(Yt())})).pipe(to()):ce(!0)}(e.component,e.route,n,t,r)),Yt(e=>!0!==e,!0))}(s,r,o,e).pipe(Object(Zt.a)(n=>n&&"boolean"==typeof n?function(e,t,n,r){return Object(Pe.a)(t).pipe(on(t=>Object(Pe.a)([ro(t.route.parent,r),no(t.route,r),io(e,t.path,n),oo(e,t.route,n)]).pipe(It(),Yt(e=>!0!==e,!0))),Yt(e=>!0!==e,!0))}(r,i,e,t):ce(n)),Object(K.a)(e=>Object.assign(Object.assign({},n),{guardsResult:e})))}))}}(this.ngModule.injector,e=>this.triggerEvent(e)),Le(e=>{if(Fr(e.guardsResult)){const t=jn(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);throw t.url=e.guardsResult,t}}),Le(e=>{const t=new gn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot,!!e.guardsResult);this.triggerEvent(t)}),ye(e=>{if(!e.guardsResult){this.resetUrlToCurrentUrlTree();const n=new dn(e.id,this.serializeUrl(e.extractedUrl),"");return t.next(n),e.resolve(!1),!1}return!0}),mo(e=>{if(e.guards.canActivateChecks.length)return ce(e).pipe(Le(e=>{const t=new mn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),(t=this.paramsInheritanceStrategy,n=this.ngModule.injector,function(e){return e.pipe(Object(Zt.a)(e=>{const{targetSnapshot:r,guards:{canActivateChecks:o}}=e;return o.length?Object(Pe.a)(o).pipe(on(e=>function(e,t,n,r){return function(e,t,n,r){const o=Object.keys(e);if(0===o.length)return ce({});if(1===o.length){const i=o[0];return go(e[i],t,n,r).pipe(Object(K.a)(e=>({[i]:e})))}const i={};return Object(Pe.a)(o).pipe(Object(Zt.a)(o=>go(e[o],t,n,r).pipe(Object(K.a)(e=>(i[o]=e,e))))).pipe(Wt(),Object(K.a)(()=>i))}(e._resolve,e,t,r).pipe(Object(K.a)(t=>(e._resolvedData=t,e.data=Object.assign(Object.assign({},e.data),mr(e,n).resolve),null)))}(e.route,r,t,n)),function(e,t){return arguments.length>=2?function(n){return Object(sn.a)(tn(e,t),Dt(1),zt(t))(n)}:function(t){return Object(sn.a)(tn((t,n,r)=>e(t,n,r+1)),Dt(1))(t)}}((e,t)=>e),Object(K.a)(t=>e)):ce(e)}))}),Le(e=>{const t=new yn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}));var t,n}),mo(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.afterPreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),Object(K.a)(e=>{const t=function(e,t,n){const r=function e(t,n,r){if(r&&t.shouldReuseRoute(n.value,r.value.snapshot)){const o=r.value;o._futureSnapshot=n.value;const i=function(t,n,r){return n.children.map(n=>{for(const o of r.children)if(t.shouldReuseRoute(o.value.snapshot,n.value))return e(t,n,o);return e(t,n)})}(t,n,r);return new dr(o,i)}{const r=t.retrieve(n.value);if(r){const e=r.route;return function e(t,n){if(t.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=t.value;for(let r=0;r<t.children.length;++r)e(t.children[r],n.children[r])}(n,e),e}{const r=new gr(new Ce((o=n.value).url),new Ce(o.params),new Ce(o.queryParams),new Ce(o.fragment),new Ce(o.data),o.outlet,o.component,o),i=n.children.map(n=>e(t,n));return new dr(r,i)}}var o}(e,t._root,n?n._root:void 0);return new pr(r,t)}(this.routeReuseStrategy,e.targetSnapshot,e.currentRouterState);return Object.assign(Object.assign({},e),{targetRouterState:t})}),Le(e=>{this.currentUrlTree=e.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl),this.routerState=e.targetRouterState,"deferred"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),(i=this.rootContexts,s=this.routeReuseStrategy,a=e=>this.triggerEvent(e),Object(K.a)(e=>(new Dr(s,e.targetRouterState,e.currentRouterState,a).activate(i),e))),Le({next(){n=!0},complete(){n=!0}}),(o=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new dn(e.id,this.serializeUrl(e.extractedUrl),`Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`);t.next(n),e.resolve(!1)}this.currentNavigation=null},e=>e.lift(new an(o))),Qt(n=>{if(r=!0,(o=n)&&o.ngNavigationCancelingError){const r=Fr(n.url);r||(this.navigated=!0,this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl));const o=new dn(e.id,this.serializeUrl(e.extractedUrl),n.message);t.next(o),r?setTimeout(()=>{const t=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(t,"imperative",null,{skipLocationChange:e.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:e.resolve,reject:e.reject,promise:e.promise})},0):e.resolve(!1)}else{this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl);const r=new fn(e.id,this.serializeUrl(e.extractedUrl),n);t.next(r);try{e.resolve(this.errorHandler(n))}catch(i){e.reject(i)}}var o;return ie}));var o,i,s,a}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}getTransition(){const e=this.transitions.value;return e.urlAfterRedirects=this.browserUrlTree,e}setTransition(e){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),e))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{let t=this.parseUrl(e.url);const n="popstate"===e.type?"popstate":"hashchange",r=e.state&&e.state.navigationId?e.state:null;setTimeout(()=>{this.scheduleNavigation(t,n,r,{replaceUrl:!0})},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){Nn(e),this.config=e.map(Dn),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}createUrlTree(e,t={}){const{relativeTo:n,queryParams:o,fragment:i,preserveQueryParams:s,queryParamsHandling:a,preserveFragment:c}=t;Object(r.T)()&&s&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const l=n||this.routerState.root,u=c?this.currentUrlTree.fragment:i;let h=null;if(a)switch(a){case"merge":h=Object.assign(Object.assign({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}else h=s?this.currentUrlTree.queryParams:o||null;return null!==h&&(h=this.removeEmptyProps(h)),function(e,t,n,r,o){if(0===n.length)return kr(t.root,t.root,t,r,o);const i=function(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new Cr(!0,0,e);let t=0,n=!1;const r=e.reduce((e,r,o)=>{if("object"==typeof r&&null!=r){if(r.outlets){const t={};return Hn(r.outlets,(e,n)=>{t[n]="string"==typeof e?e.split("/"):e}),[...e,{outlets:t}]}if(r.segmentPath)return[...e,r.segmentPath]}return"string"!=typeof r?[...e,r]:0===o?(r.split("/").forEach((r,o)=>{0==o&&"."===r||(0==o&&""===r?n=!0:".."===r?t++:""!=r&&e.push(r))}),e):[...e,r]},[]);return new Cr(n,t,r)}(n);if(i.toRoot())return kr(t.root,new Un([],{}),t,r,o);const s=function(e,t,n){if(e.isAbsolute)return new Or(t.root,!0,0);if(-1===n.snapshot._lastPathIndex)return new Or(n.snapshot._urlSegment,!0,0);const r=Er(e.commands[0])?0:1;return function(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new Error("Invalid number of '../'");o=r.segments.length}return new Or(r,!1,o-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,e.numberOfDoubleDots)}(i,t,e),a=s.processChildren?Pr(s.segmentGroup,s.index,i.commands):jr(s.segmentGroup,s.index,i.commands);return kr(s.segmentGroup,a,t,r,o)}(l,this.currentUrlTree,e,h,u)}navigateByUrl(e,t={skipLocationChange:!1}){Object(r.T)()&&this.isNgZoneEnabled&&!r.z.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=Fr(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(o,"imperative",null,t)}navigate(e,t={skipLocationChange:!1}){return function(e){for(let t=0;t<e.length;t++){const n=e[t];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${t}`)}}(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let t;try{t=this.urlSerializer.parse(e)}catch(n){t=this.malformedUriErrorHandler(n,this.urlSerializer,e)}return t}isActive(e,t){if(Fr(e))return zn(this.currentUrlTree,e,t);const n=this.parseUrl(e);return zn(this.currentUrlTree,n,t)}removeEmptyProps(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return null!=r&&(t[n]=r),t},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.events.next(new hn(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,e.resolve(!0)},e=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(e,t,n,r,o){const i=this.getTransition();if(i&&"imperative"!==t&&"imperative"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"hashchange"==t&&"popstate"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"popstate"==t&&"hashchange"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);let s,a,c;o?(s=o.resolve,a=o.reject,c=o.promise):c=new Promise((e,t)=>{s=e,a=t});const l=++this.navigationId;return this.setTransition({id:l,source:t,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:r,resolve:s,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(e=>Promise.reject(e))}setBrowserUrl(e,t,n,r){const o=this.urlSerializer.serialize(e);r=r||{},this.location.isCurrentPathEqualTo(o)||t?this.location.replaceState(o,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(o,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(e,t,n){this.routerState=e,this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return e.\u0275fac=function(e){r.Vb()},e.\u0275dir=r.Eb({type:e}),e})();class Co{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new Oo,this.attachRef=null}}class Oo{constructor(){this.contexts=new Map}onChildOutletCreated(e,t){const n=this.getOrCreateContext(e);n.outlet=t,this.contexts.set(e,n)}onChildOutletDestroyed(e){const t=this.getContext(e);t&&(t.outlet=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Co,this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}}let To=(()=>{class e{constructor(e,t,n,o,i){this.parentContexts=e,this.location=t,this.resolver=n,this.changeDetector=i,this.activated=null,this._activatedRoute=null,this.activateEvents=new r.n,this.deactivateEvents=new r.n,this.name=o||"primary",e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=e;const n=(t=t||this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,o=new jo(e,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,o),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(Oo),r.Jb(r.N),r.Jb(r.j),r.Tb("name"),r.Jb(r.h))},e.\u0275dir=r.Eb({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),e})();class jo{constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===gr?this.route:e===Oo?this.childContexts:this.parent.get(e,t)}}class Po{}class Ao{preload(e,t){return ce(null)}}let No=(()=>{class e{constructor(e,t,n,r,o){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=new vo(t,n,t=>e.triggerEvent(new _n(t)),t=>e.triggerEvent(new vn(t)))}setUpPreloading(){this.subscription=this.router.events.pipe(ye(e=>e instanceof hn),on(()=>this.preload())).subscribe(()=>{})}preload(){const e=this.injector.get(r.x);return this.processRoutes(e,this.router.config)}ngOnDestroy(){this.subscription.unsubscribe()}processRoutes(e,t){const n=[];for(const r of t)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const e=r._loadedConfig;n.push(this.processRoutes(e.module,e.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(e,r)):r.children&&n.push(this.processRoutes(e,r.children));return Object(Pe.a)(n).pipe(Object(Rt.a)(),Object(K.a)(e=>{}))}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>this.loader.load(e.injector,t).pipe(Object(Zt.a)(e=>(t._loadedConfig=e,this.processRoutes(e.module,e.routes)))))}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(ko),r.Sb(r.w),r.Sb(r.i),r.Sb(r.r),r.Sb(Po))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})(),Ro=(()=>{class e{constructor(e,t,n={}){this.router=e,this.viewportScroller=t,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof un?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof hn&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof kn&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,t){this.router.triggerEvent(new kn(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,t))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(e){r.Vb()},e.\u0275dir=r.Eb({type:e}),e})();const Io=new r.q("ROUTER_CONFIGURATION"),Do=new r.q("ROUTER_FORROOT_GUARD"),Mo=[o.h,{provide:Kn,useClass:Gn},{provide:ko,useFactory:function(e,t,n,r,i,s,a,c={},l,u){const h=new ko(null,e,t,n,r,i,s,Fn(a));if(l&&(h.urlHandlingStrategy=l),u&&(h.routeReuseStrategy=u),c.errorHandler&&(h.errorHandler=c.errorHandler),c.malformedUriErrorHandler&&(h.malformedUriErrorHandler=c.malformedUriErrorHandler),c.enableTracing){const e=Object(o.u)();h.events.subscribe(t=>{e.logGroup(`Router Event: ${t.constructor.name}`),e.log(t.toString()),e.log(t),e.logGroupEnd()})}return c.onSameUrlNavigation&&(h.onSameUrlNavigation=c.onSameUrlNavigation),c.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=c.paramsInheritanceStrategy),c.urlUpdateStrategy&&(h.urlUpdateStrategy=c.urlUpdateStrategy),c.relativeLinkResolution&&(h.relativeLinkResolution=c.relativeLinkResolution),h},deps:[Kn,Oo,o.h,r.r,r.w,r.i,_o,Io,[class{},new r.A],[class{},new r.A]]},Oo,{provide:gr,useFactory:function(e){return e.routerState.root},deps:[ko]},{provide:r.w,useClass:r.J},No,Ao,class{preload(e,t){return t().pipe(Qt(()=>ce(null)))}},{provide:Io,useValue:{enableTracing:!1}}];function $o(){return new r.y("Router",ko)}let Fo=(()=>{class e{constructor(e,t){}static forRoot(t,n){return{ngModule:e,providers:[Mo,zo(t),{provide:Do,useFactory:Vo,deps:[[ko,new r.A,new r.I]]},{provide:Io,useValue:n||{}},{provide:o.i,useFactory:Ho,deps:[o.o,[new r.p(o.a),new r.A],Io]},{provide:Ro,useFactory:Lo,deps:[ko,o.p,Io]},{provide:Po,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Ao},{provide:r.y,multi:!0,useFactory:$o},[Bo,{provide:r.d,multi:!0,useFactory:Uo,deps:[Bo]},{provide:Wo,useFactory:qo,deps:[Bo]},{provide:r.b,multi:!0,useExisting:Wo}]]}}static forChild(t){return{ngModule:e,providers:[zo(t)]}}}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)(r.Sb(Do,8),r.Sb(ko,8))}}),e})();function Lo(e,t,n){return n.scrollOffset&&t.setOffset(n.scrollOffset),new Ro(e,t,n)}function Ho(e,t,n={}){return n.useHash?new o.e(e,t):new o.n(e,t)}function Vo(e){if(e)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function zo(e){return[{provide:r.a,multi:!0,useValue:e},{provide:_o,multi:!0,useValue:e}]}let Bo=(()=>{class e{constructor(e){this.injector=e,this.initNavigation=!1,this.resultOfPreactivationDone=new D.b}appInitializer(){return this.injector.get(o.g,Promise.resolve(null)).then(()=>{let e=null;const t=new Promise(t=>e=t),n=this.injector.get(ko),r=this.injector.get(Io);if(this.isLegacyDisabled(r)||this.isLegacyEnabled(r))e(!0);else if("disabled"===r.initialNavigation)n.setUpLocationChangeListener(),e(!0);else{if("enabled"!==r.initialNavigation)throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?ce(null):(this.initNavigation=!0,e(!0),this.resultOfPreactivationDone),n.initialNavigation()}return t})}bootstrapListener(e){const t=this.injector.get(Io),n=this.injector.get(No),o=this.injector.get(Ro),i=this.injector.get(ko),s=this.injector.get(r.g);e===s.components[0]&&(this.isLegacyEnabled(t)?i.initialNavigation():this.isLegacyDisabled(t)&&i.setUpLocationChangeListener(),n.setUpPreloading(),o.init(),i.resetRootComponentType(s.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(e){return"legacy_enabled"===e.initialNavigation||!0===e.initialNavigation||void 0===e.initialNavigation}isLegacyDisabled(e){return"legacy_disabled"===e.initialNavigation||!1===e.initialNavigation}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(r.r))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();function Uo(e){return e.appInitializer.bind(e)}function qo(e){return e.bootstrapListener.bind(e)}const Wo=new r.q("Router Initializer");function Qo(e,t){if(1&e){const e=r.Pb();r.Ob(0,"kor-menu-item",3),r.Wb("click",(function(){r.fc(e);const n=t.$implicit;return r.Yb().gotoItem(n)})),r.Nb()}if(2&e){const e=t.$implicit;r.dc("id","menu_"+e.key)("label",e.label)("icon",e.icon)}}let Ko=(()=>{class e{constructor(e,t,n){this.provider=e,this.ref=t,this.router=n,this.menus=new Map,this.unsubscriber=new D.b}ngOnInit(){this.provider.receiveCommands(we.DontCodeModel.APP_ENTITIES,we.DontCodeModel.APP_ENTITIES_NAME_NODE).pipe(q(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new Go(e.position,e.value,"create")),this.ref.detectChanges()}),this.provider.receiveCommands(we.DontCodeModel.APP_SCREENS,we.DontCodeModel.APP_SCREENS_NAME_NODE).pipe(q(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new Go(e.position,e.value,"filter")),this.ref.detectChanges()})}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}gotoPage(e){this.router.navigate([e])}isActive(e){return this.router.isActive(e,!0)}gotoItem(e){this.router.navigate([e.position])}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(ke),r.Jb(r.h),r.Jb(ko))},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-menu"]],decls:4,vars:5,consts:[["label","Home","icon","home",3,"active","toggle","click"],["label","Dev","icon","memory",3,"active","toggle","click"],["toggle","false",3,"id","label","icon","click",4,"ngFor","ngForOf"],["toggle","false",3,"id","label","icon","click"]],template:function(e,t){1&e&&(r.Ob(0,"kor-menu-item",0),r.Wb("click",(function(){return t.gotoPage("/")})),r.Nb(),r.Ob(1,"kor-menu-item",1),r.Wb("click",(function(){return t.gotoPage("dev")})),r.Nb(),r.Kb(2,"kor-divider"),r.kc(3,Qo,1,3,"kor-menu-item",2)),2&e&&(r.dc("active",t.isActive("/"))("toggle",!1),r.zb(1),r.dc("active",t.isActive("dev"))("toggle",!1),r.zb(2),r.dc("ngForOf",t.menus.values()))},directives:[o.k],styles:[""]}),e})();class Go{constructor(e,t,n){e=this.cleanPosition(e),this.position=e,this.key=e.split("/").join("-"),this.label=t.name?t.name:t,this.icon=n||"text_snippet"}cleanPosition(e){return e.startsWith(we.DontCodeModel.ROOT)&&(e=e.substr(we.DontCodeModel.ROOT.length+1)),e.endsWith(we.DontCodeModel.APP_SCREENS_NAME_NODE)&&(e=e.substring(0,e.length-we.DontCodeModel.APP_SCREENS_NAME_NODE.length-1)),e}}function Yo(e,t){1&e&&r.Kb(0,"kor-icon",10)}function Zo(e,t){1&e&&r.Kb(0,"kor-icon",11)}function Jo(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div"),r.Ob(1,"kor-page"),r.Ob(2,"kor-app-bar",1),r.Ob(3,"kor-icon",2),r.Wb("click",(function(){return r.fc(e),r.Yb().logoClicked()})),r.Nb(),r.Ob(4,"div",3),r.kc(5,Yo,1,0,"kor-icon",4),r.kc(6,Zo,1,0,"kor-icon",5),r.Nb(),r.Nb(),r.Ob(7,"div",6),r.Ob(8,"kor-drawer",7),r.Wb("visible-changed",(function(t){return r.fc(e),r.Yb().sidePanelVisibleChanged(t)})),r.Kb(9,"preview-ui-menu"),r.Nb(),r.Nb(),r.Ob(10,"div",8),r.Ob(11,"kor-pane",9),r.Kb(12,"preview-ui-menu"),r.Nb(),r.Nb(),r.Kb(13,"router-outlet"),r.Nb(),r.Nb()}if(2&e){const e=t.ngIf,n=r.Yb();r.zb(2),r.dc("label","Preview "+n.appName),r.zb(3),r.dc("ngIf","connected"===e.status),r.zb(1),r.dc("ngIf","connected"!==e.status),r.zb(2),r.dc("visible",n.sidePanelVisible)}}let Xo=(()=>{class e{constructor(e,t){this.provider=e,this.listenerService=t,this.unsubscriber=new D.b,this.appName="No Name"}ngOnInit(){this.sidePanelVisible=!0,this.provider.receiveCommands(we.DontCodeModel.APP_NAME).pipe(q(this.unsubscriber)).subscribe(e=>{this.appName=e.value}),this.context$=z([this.listenerService.getConnectionStatus()]).pipe(Object(K.a)(e=>({status:e[0]})))}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}logoClicked(){this.sidePanelVisible=!0}sidePanelVisibleChanged(e){this.sidePanelVisible=e.target.visible}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(ke),r.Jb(Ee))},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-main"]],decls:2,vars:3,consts:[[4,"ngIf"],["id","mainToolbar","slot","top","mobile","",3,"label"],["button","","icon","url('./assets/images/logo.png')","slot","left","size","xl",3,"click"],["slot","right"],["icon","sync",4,"ngIf"],["color","rgb(var(--functional-red))","icon","sync_problem",4,"ngIf"],["fxHide","true","fxShow.lt-md","true"],["id","mainSidePanel","label","Menu",3,"visible","visible-changed"],["slot","left","fxShow","true","fxHide.lt-md","true"],["label","Menu","size","l"],["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(r.kc(0,Jo,14,4,"div",0),r.Zb(1,"async")),2&e&&r.dc("ngIf",r.ac(1,1,t.context$))},directives:[o.l,Tt,Ko,To],pipes:[o.b],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1}"]}),e})(),ei=(()=>{class e{constructor(){this.title="preview-ui"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-root"]],decls:1,vars:0,template:function(e,t){1&e&&r.Kb(0,"preview-ui-main")},directives:[Xo],styles:[""]}),e})();class ti{}function ni(e,t=null){return{type:2,steps:e,options:t}}function ri(e){return{type:6,styles:e,offset:null}}function oi(e){Promise.resolve(null).then(e)}class ii{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){oi(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){}setPosition(e){}getPosition(){return 0}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class si{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,n=0,r=0;const o=this.players.length;0==o?oi(()=>this._onFinish()):this.players.forEach(e=>{e.onDone(()=>{++t==o&&this._onFinish()}),e.onDestroy(()=>{++n==o&&this._onDestroy()}),e.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((e,t)=>Math.max(e,t.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const t=e*this.totalTime;this.players.forEach(e=>{const n=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(n)})}getPosition(){let e=0;return this.players.forEach(t=>{const n=t.getPosition();e=Math.min(n,e)}),e}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}function ai(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function ci(e){switch(e.length){case 0:return new ii;case 1:return e[0];default:return new si(e)}}function li(e,t,n,r,o={},i={}){const s=[],a=[];let c=-1,l=null;if(r.forEach(e=>{const n=e.offset,r=n==c,u=r&&l||{};Object.keys(e).forEach(n=>{let r=n,a=e[n];if("offset"!==n)switch(r=t.normalizePropertyName(r,s),a){case"!":a=o[n];break;case"*":a=i[n];break;default:a=t.normalizeStyleValue(n,r,a,s)}u[r]=a}),r||a.push(u),l=u,c=n}),s.length){const e="\n - ";throw new Error(`Unable to animate due to the following errors:${e}${s.join(e)}`)}return a}function ui(e,t,n,r){switch(t){case"start":e.onStart(()=>r(n&&hi(n,"start",e)));break;case"done":e.onDone(()=>r(n&&hi(n,"done",e)));break;case"destroy":e.onDestroy(()=>r(n&&hi(n,"destroy",e)))}}function hi(e,t,n){const r=n.totalTime,o=di(e.element,e.triggerName,e.fromState,e.toState,t||e.phaseName,null==r?e.totalTime:r,!!n.disabled),i=e._data;return null!=i&&(o._data=i),o}function di(e,t,n,r,o="",i=0,s){return{element:e,triggerName:t,fromState:n,toState:r,phaseName:o,totalTime:i,disabled:!!s}}function fi(e,t,n){let r;return e instanceof Map?(r=e.get(t),r||e.set(t,r=n)):(r=e[t],r||(r=e[t]=n)),r}function pi(e){const t=e.indexOf(":");return[e.substring(1,t),e.substr(t+1)]}let bi=(e,t)=>!1,gi=(e,t)=>!1,mi=(e,t,n)=>[];const yi=ai();(yi||"undefined"!=typeof Element)&&(bi=(e,t)=>e.contains(t),gi=(()=>{if(yi||Element.prototype.matches)return(e,t)=>e.matches(t);{const e=Element.prototype,t=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return t?(e,n)=>t.apply(e,[n]):gi}})(),mi=(e,t,n)=>{let r=[];if(n)r.push(...e.querySelectorAll(t));else{const n=e.querySelector(t);n&&r.push(n)}return r});let _i=null,vi=!1;function wi(e){_i||(_i=("undefined"!=typeof document?document.body:null)||{},vi=!!_i.style&&"WebkitAppearance"in _i.style);let t=!0;return _i.style&&!function(e){return"ebkit"==e.substring(1,6)}(e)&&(t=e in _i.style,!t&&vi)&&(t="Webkit"+e.charAt(0).toUpperCase()+e.substr(1)in _i.style),t}const xi=gi,Si=bi,Ei=mi;function ki(e){const t={};return Object.keys(e).forEach(n=>{const r=n.replace(/([a-z])([A-Z])/g,"$1-$2");t[r]=e[n]}),t}let Ci=(()=>{class e{validateStyleProperty(e){return wi(e)}matchesElement(e,t){return xi(e,t)}containsElement(e,t){return Si(e,t)}query(e,t,n){return Ei(e,t,n)}computeStyle(e,t,n){return n||""}animate(e,t,n,r,o,i=[],s){return new ii(n,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})(),Oi=(()=>{class e{}return e.NOOP=new Ci,e})();function Ti(e){if("number"==typeof e)return e;const t=e.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:ji(parseFloat(t[1]),t[2])}function ji(e,t){switch(t){case"s":return 1e3*e;default:return e}}function Pi(e,t,n){return e.hasOwnProperty("duration")?e:function(e,t,n){let r,o=0,i="";if("string"==typeof e){const n=e.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===n)return t.push(`The provided timing value "${e}" is invalid.`),{duration:0,delay:0,easing:""};r=ji(parseFloat(n[1]),n[2]);const s=n[3];null!=s&&(o=ji(parseFloat(s),n[4]));const a=n[5];a&&(i=a)}else r=e;if(!n){let n=!1,i=t.length;r<0&&(t.push("Duration values below 0 are not allowed for this animation step."),n=!0),o<0&&(t.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&t.splice(i,0,`The provided timing value "${e}" is invalid.`)}return{duration:r,delay:o,easing:i}}(e,t,n)}function Ai(e,t={}){return Object.keys(e).forEach(n=>{t[n]=e[n]}),t}function Ni(e,t,n={}){if(t)for(let r in e)n[r]=e[r];else Ai(e,n);return n}function Ri(e,t,n){return n?t+":"+n+";":""}function Ii(e){let t="";for(let n=0;n<e.style.length;n++){const r=e.style.item(n);t+=Ri(0,r,e.style.getPropertyValue(r))}for(const n in e.style)e.style.hasOwnProperty(n)&&!n.startsWith("_")&&(t+=Ri(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e.style[n]));e.setAttribute("style",t)}function Di(e,t,n){e.style&&(Object.keys(t).forEach(r=>{const o=Bi(r);n&&!n.hasOwnProperty(r)&&(n[r]=e.style[o]),e.style[o]=t[r]}),ai()&&Ii(e))}function Mi(e,t){e.style&&(Object.keys(t).forEach(t=>{const n=Bi(t);e.style[n]=""}),ai()&&Ii(e))}function $i(e){return Array.isArray(e)?1==e.length?e[0]:ni(e):e}const Fi=new RegExp("{{\\s*(.+?)\\s*}}","g");function Li(e){let t=[];if("string"==typeof e){let n;for(;n=Fi.exec(e);)t.push(n[1]);Fi.lastIndex=0}return t}function Hi(e,t,n){const r=e.toString(),o=r.replace(Fi,(e,r)=>{let o=t[r];return t.hasOwnProperty(r)||(n.push(`Please provide a value for the animation param ${r}`),o=""),o.toString()});return o==r?e:o}function Vi(e){const t=[];let n=e.next();for(;!n.done;)t.push(n.value),n=e.next();return t}const zi=/-+([a-z0-9])/g;function Bi(e){return e.replace(zi,(...e)=>e[1].toUpperCase())}function Ui(e,t){return 0===e||0===t}function qi(e,t,n){const r=Object.keys(n);if(r.length&&t.length){let i=t[0],s=[];if(r.forEach(e=>{i.hasOwnProperty(e)||s.push(e),i[e]=n[e]}),s.length)for(var o=1;o<t.length;o++){let n=t[o];s.forEach((function(t){n[t]=Qi(e,t)}))}}return t}function Wi(e,t,n){switch(t.type){case 7:return e.visitTrigger(t,n);case 0:return e.visitState(t,n);case 1:return e.visitTransition(t,n);case 2:return e.visitSequence(t,n);case 3:return e.visitGroup(t,n);case 4:return e.visitAnimate(t,n);case 5:return e.visitKeyframes(t,n);case 6:return e.visitStyle(t,n);case 8:return e.visitReference(t,n);case 9:return e.visitAnimateChild(t,n);case 10:return e.visitAnimateRef(t,n);case 11:return e.visitQuery(t,n);case 12:return e.visitStagger(t,n);default:throw new Error(`Unable to resolve animation metadata node #${t.type}`)}}function Qi(e,t){return window.getComputedStyle(e)[t]}function Ki(e,t){const n=[];return"string"==typeof e?e.split(/\s*,\s*/).forEach(e=>function(e,t,n){if(":"==e[0]){const r=function(e,t){switch(e){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return t.push(`The transition alias value "${e}" is not supported`),"* => *"}}(e,n);if("function"==typeof r)return void t.push(r);e=r}const r=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return n.push(`The provided transition expression "${e}" is not supported`),t;const o=r[1],i=r[2],s=r[3];t.push(Zi(o,s)),"<"!=i[0]||"*"==o&&"*"==s||t.push(Zi(s,o))}(e,n,t)):n.push(e),n}const Gi=new Set(["true","1"]),Yi=new Set(["false","0"]);function Zi(e,t){const n=Gi.has(e)||Yi.has(e),r=Gi.has(t)||Yi.has(t);return(o,i)=>{let s="*"==e||e==o,a="*"==t||t==i;return!s&&n&&"boolean"==typeof o&&(s=o?Gi.has(e):Yi.has(e)),!a&&r&&"boolean"==typeof i&&(a=i?Gi.has(t):Yi.has(t)),s&&a}}const Ji=new RegExp("s*:selfs*,?","g");function Xi(e,t,n){return new es(e).build(t,n)}class es{constructor(e){this._driver=e}build(e,t){const n=new ts(t);return this._resetContextStyleTimingState(n),Wi(this,$i(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles={},e.collectedStyles[""]={},e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,r=t.depCount=0;const o=[],i=[];return"@"==e.name.charAt(0)&&t.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),e.definitions.forEach(e=>{if(this._resetContextStyleTimingState(t),0==e.type){const n=e,r=n.name;r.toString().split(/\s*,\s*/).forEach(e=>{n.name=e,o.push(this.visitState(n,t))}),n.name=r}else if(1==e.type){const o=this.visitTransition(e,t);n+=o.queryCount,r+=o.depCount,i.push(o)}else t.errors.push("only state() and transition() definitions can sit inside of a trigger()")}),{type:7,name:e.name,states:o,transitions:i,queryCount:n,depCount:r,options:null}}visitState(e,t){const n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){const o=new Set,i=r||{};if(n.styles.forEach(e=>{if(ns(e)){const t=e;Object.keys(t).forEach(e=>{Li(t[e]).forEach(e=>{i.hasOwnProperty(e)||o.add(e)})})}}),o.size){const n=Vi(o.values());t.errors.push(`state("${e.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)}}return{type:0,name:e.name,style:n,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;const n=Wi(this,$i(e.animation),t);return{type:1,matchers:Ki(e.expr,t.errors),animation:n,queryCount:t.queryCount,depCount:t.depCount,options:rs(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(e=>Wi(this,e,t)),options:rs(e.options)}}visitGroup(e,t){const n=t.currentTime;let r=0;const o=e.steps.map(e=>{t.currentTime=n;const o=Wi(this,e,t);return r=Math.max(r,t.currentTime),o});return t.currentTime=r,{type:3,steps:o,options:rs(e.options)}}visitAnimate(e,t){const n=function(e,t){let n=null;if(e.hasOwnProperty("duration"))n=e;else if("number"==typeof e)return os(Pi(e,t).duration,0,"");const r=e;if(r.split(/\s+/).some(e=>"{"==e.charAt(0)&&"{"==e.charAt(1))){const e=os(0,0,"");return e.dynamic=!0,e.strValue=r,e}return n=n||Pi(r,t),os(n.duration,n.delay,n.easing)}(e.timings,t.errors);let r;t.currentAnimateTimings=n;let o=e.styles?e.styles:ri({});if(5==o.type)r=this.visitKeyframes(o,t);else{let o=e.styles,i=!1;if(!o){i=!0;const e={};n.easing&&(e.easing=n.easing),o=ri(e)}t.currentTime+=n.duration+n.delay;const s=this.visitStyle(o,t);s.isEmptyStep=i,r=s}return t.currentAnimateTimings=null,{type:4,timings:n,style:r,options:null}}visitStyle(e,t){const n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){const n=[];Array.isArray(e.styles)?e.styles.forEach(e=>{"string"==typeof e?"*"==e?n.push(e):t.errors.push(`The provided style string value ${e} is not allowed.`):n.push(e)}):n.push(e.styles);let r=!1,o=null;return n.forEach(e=>{if(ns(e)){const t=e,n=t.easing;if(n&&(o=n,delete t.easing),!r)for(let e in t)if(t[e].toString().indexOf("{{")>=0){r=!0;break}}}),{type:6,styles:n,easing:o,offset:e.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(e,t){const n=t.currentAnimateTimings;let r=t.currentTime,o=t.currentTime;n&&o>0&&(o-=n.duration+n.delay),e.styles.forEach(e=>{"string"!=typeof e&&Object.keys(e).forEach(n=>{if(!this._driver.validateStyleProperty(n))return void t.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);const i=t.collectedStyles[t.currentQuerySelector],s=i[n];let a=!0;s&&(o!=r&&o>=s.startTime&&r<=s.endTime&&(t.errors.push(`The CSS property "${n}" that exists between the times of "${s.startTime}ms" and "${s.endTime}ms" is also being animated in a parallel animation between the times of "${o}ms" and "${r}ms"`),a=!1),o=s.startTime),a&&(i[n]={startTime:o,endTime:r}),t.options&&function(e,t,n){const r=t.params||{},o=Li(e);o.length&&o.forEach(e=>{r.hasOwnProperty(e)||n.push(`Unable to resolve the local animation param ${e} in the given list of values`)})}(e[n],t.options,t.errors)})})}visitKeyframes(e,t){const n={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push("keyframes() must be placed inside of a call to animate()"),n;let r=0;const o=[];let i=!1,s=!1,a=0;const c=e.steps.map(e=>{const n=this._makeStyleAst(e,t);let c=null!=n.offset?n.offset:function(e){if("string"==typeof e)return null;let t=null;if(Array.isArray(e))e.forEach(e=>{if(ns(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}});else if(ns(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}return t}(n.styles),l=0;return null!=c&&(r++,l=n.offset=c),s=s||l<0||l>1,i=i||l<a,a=l,o.push(l),n});s&&t.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),i&&t.errors.push("Please ensure that all keyframe offsets are in order");const l=e.steps.length;let u=0;r>0&&r<l?t.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==r&&(u=1/(l-1));const h=l-1,d=t.currentTime,f=t.currentAnimateTimings,p=f.duration;return c.forEach((e,r)=>{const i=u>0?r==h?1:u*r:o[r],s=i*p;t.currentTime=d+f.delay+s,f.duration=s,this._validateStyleAst(e,t),e.offset=i,n.styles.push(e)}),n}visitReference(e,t){return{type:8,animation:Wi(this,$i(e.animation),t),options:rs(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:rs(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:rs(e.options)}}visitQuery(e,t){const n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;const[o,i]=function(e){const t=!!e.split(/\s*,\s*/).find(e=>":self"==e);return t&&(e=e.replace(Ji,"")),[e=e.replace(/@\*/g,".ng-trigger").replace(/@\w+/g,e=>".ng-trigger-"+e.substr(1)).replace(/:animating/g,".ng-animating"),t]}(e.selector);t.currentQuerySelector=n.length?n+" "+o:o,fi(t.collectedStyles,t.currentQuerySelector,{});const s=Wi(this,$i(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:11,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:i,animation:s,originalSelector:e.selector,options:rs(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push("stagger() can only be used inside of query()");const n="full"===e.timings?{duration:0,delay:0,easing:"full"}:Pi(e.timings,t.errors,!0);return{type:12,animation:Wi(this,$i(e.animation),t),timings:n,options:null}}}class ts{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null}}function ns(e){return!Array.isArray(e)&&"object"==typeof e}function rs(e){var t;return e?(e=Ai(e)).params&&(e.params=(t=e.params)?Ai(t):null):e={},e}function os(e,t,n){return{duration:e,delay:t,easing:n}}function is(e,t,n,r,o,i,s=null,a=!1){return{type:1,element:e,keyframes:t,preStyleProps:n,postStyleProps:r,duration:o,delay:i,totalTime:o+i,easing:s,subTimeline:a}}class ss{constructor(){this._map=new Map}consume(e){let t=this._map.get(e);return t?this._map.delete(e):t=[],t}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}}const as=new RegExp(":enter","g"),cs=new RegExp(":leave","g");function ls(e,t,n,r,o,i={},s={},a,c,l=[]){return(new us).buildKeyframes(e,t,n,r,o,i,s,a,c,l)}class us{buildKeyframes(e,t,n,r,o,i,s,a,c,l=[]){c=c||new ss;const u=new ds(e,t,c,r,o,l,[]);u.options=a,u.currentTimeline.setStyles([i],null,u.errors,a),Wi(this,n,u);const h=u.timelines.filter(e=>e.containsAnimation());if(h.length&&Object.keys(s).length){const e=h[h.length-1];e.allowOnlyTimelineStyles()||e.setStyles([s],null,u.errors,a)}return h.length?h.map(e=>e.buildKeyframes()):[is(t,[],[],[],0,0,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){const n=t.subInstructions.consume(t.element);if(n){const r=t.createSubContext(e.options),o=t.currentTimeline.currentTime,i=this._visitSubInstructions(n,r,r.options);o!=i&&t.transformIntoNewTimeline(i)}t.previousNode=e}visitAnimateRef(e,t){const n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_visitSubInstructions(e,t,n){let r=t.currentTimeline.currentTime;const o=null!=n.duration?Ti(n.duration):null,i=null!=n.delay?Ti(n.delay):null;return 0!==o&&e.forEach(e=>{const n=t.appendInstructionToTimeline(e,o,i);r=Math.max(r,n.duration+n.delay)}),r}visitReference(e,t){t.updateOptions(e.options,!0),Wi(this,e.animation,t),t.previousNode=e}visitSequence(e,t){const n=t.subContextCount;let r=t;const o=e.options;if(o&&(o.params||o.delay)&&(r=t.createSubContext(o),r.transformIntoNewTimeline(),null!=o.delay)){6==r.previousNode.type&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=hs);const e=Ti(o.delay);r.delayNextStep(e)}e.steps.length&&(e.steps.forEach(e=>Wi(this,e,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){const n=[];let r=t.currentTimeline.currentTime;const o=e.options&&e.options.delay?Ti(e.options.delay):0;e.steps.forEach(i=>{const s=t.createSubContext(e.options);o&&s.delayNextStep(o),Wi(this,i,s),r=Math.max(r,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(e=>t.currentTimeline.mergeTimelineCollectedStyles(e)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){const n=e.strValue;return Pi(t.params?Hi(n,t.params,t.errors):n,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){const n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());const o=e.style;5==o.type?this.visitKeyframes(o,t):(t.incrementTime(n.duration),this.visitStyle(o,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){const n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.getCurrentStyleProperties().length&&n.forwardFrame();const o=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(o):n.setStyles(e.styles,o,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){const n=t.currentAnimateTimings,r=t.currentTimeline.duration,o=n.duration,i=t.createSubContext().currentTimeline;i.easing=n.easing,e.styles.forEach(e=>{i.forwardTime((e.offset||0)*o),i.setStyles(e.styles,e.easing,t.errors,t.options),i.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(i),t.transformIntoNewTimeline(r+o),t.previousNode=e}visitQuery(e,t){const n=t.currentTimeline.currentTime,r=e.options||{},o=r.delay?Ti(r.delay):0;o&&(6===t.previousNode.type||0==n&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=hs);let i=n;const s=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=s.length;let a=null;s.forEach((n,r)=>{t.currentQueryIndex=r;const s=t.createSubContext(e.options,n);o&&s.delayNextStep(o),n===t.element&&(a=s.currentTimeline),Wi(this,e.animation,s),s.currentTimeline.applyStylesToKeyframe(),i=Math.max(i,s.currentTimeline.currentTime)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(i),a&&(t.currentTimeline.mergeTimelineCollectedStyles(a),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){const n=t.parentContext,r=t.currentTimeline,o=e.timings,i=Math.abs(o.duration),s=i*(t.currentQueryTotal-1);let a=i*t.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":a=s-a;break;case"full":a=n.currentStaggerTime}const c=t.currentTimeline;a&&c.delayNextStep(a);const l=c.currentTime;Wi(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-l+(r.startTime-n.currentTimeline.startTime)}}const hs={};class ds{constructor(e,t,n,r,o,i,s,a){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=o,this.errors=i,this.timelines=s,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=hs,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=a||new fs(this._driver,t,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;const n=e;let r=this.options;null!=n.duration&&(r.duration=Ti(n.duration)),null!=n.delay&&(r.delay=Ti(n.delay));const o=n.params;if(o){let e=r.params;e||(e=this.options.params={}),Object.keys(o).forEach(n=>{t&&e.hasOwnProperty(n)||(e[n]=Hi(o[n],e,this.errors))})}}_copyOptions(){const e={};if(this.options){const t=this.options.params;if(t){const n=e.params={};Object.keys(t).forEach(e=>{n[e]=t[e]})}}return e}createSubContext(e=null,t,n){const r=t||this.element,o=new ds(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(e),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(e){return this.previousNode=hs,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){const r={duration:null!=t?t:e.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+e.delay,easing:""},o=new ps(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,r,o,i){let s=[];if(r&&s.push(this.element),e.length>0){e=(e=e.replace(as,"."+this._enterClassName)).replace(cs,"."+this._leaveClassName);let t=this._driver.query(this.element,e,1!=n);0!==n&&(t=n<0?t.slice(t.length+n,t.length):t.slice(0,n)),s.push(...t)}return o||0!=s.length||i.push(`\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`),s}}class fs{constructor(e,t,n,r){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const t=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new fs(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&(this._previousKeyframe.easing=e),Object.keys(this._globalTimelineStyles).forEach(e=>{this._backFill[e]=this._globalTimelineStyles[e]||"*",this._currentKeyframe[e]="*"}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,r){t&&(this._previousKeyframe.easing=t);const o=r&&r.params||{},i=function(e,t){const n={};let r;return e.forEach(e=>{"*"===e?(r=r||Object.keys(t),r.forEach(e=>{n[e]="*"})):Ni(e,!1,n)}),n}(e,this._globalTimelineStyles);Object.keys(i).forEach(e=>{const t=Hi(i[e],o,n);this._pendingStyles[e]=t,this._localTimelineStyles.hasOwnProperty(e)||(this._backFill[e]=this._globalTimelineStyles.hasOwnProperty(e)?this._globalTimelineStyles[e]:"*"),this._updateStyle(e,t)})}applyStylesToKeyframe(){const e=this._pendingStyles,t=Object.keys(e);0!=t.length&&(this._pendingStyles={},t.forEach(t=>{this._currentKeyframe[t]=e[t]}),Object.keys(this._localTimelineStyles).forEach(e=>{this._currentKeyframe.hasOwnProperty(e)||(this._currentKeyframe[e]=this._localTimelineStyles[e])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(e=>{const t=this._localTimelineStyles[e];this._pendingStyles[e]=t,this._updateStyle(e,t)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){Object.keys(e._styleSummary).forEach(t=>{const n=this._styleSummary[t],r=e._styleSummary[t];(!n||r.time>n.time)&&this._updateStyle(t,r.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,t=new Set,n=1===this._keyframes.size&&0===this.duration;let r=[];this._keyframes.forEach((o,i)=>{const s=Ni(o,!0);Object.keys(s).forEach(n=>{const r=s[n];"!"==r?e.add(n):"*"==r&&t.add(n)}),n||(s.offset=i/this.duration),r.push(s)});const o=e.size?Vi(e.values()):[],i=t.size?Vi(t.values()):[];if(n){const e=r[0],t=Ai(e);e.offset=0,t.offset=1,r=[e,t]}return is(this.element,r,o,i,this.duration,this.startTime,this.easing,!1)}}class ps extends fs{constructor(e,t,n,r,o,i,s=!1){super(e,t,i.delay),this.element=t,this.keyframes=n,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=s,this.timings={duration:i.duration,delay:i.delay,easing:i.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){const o=[],i=n+t,s=t/i,a=Ni(e[0],!1);a.offset=0,o.push(a);const c=Ni(e[0],!1);c.offset=bs(s),o.push(c);const l=e.length-1;for(let r=1;r<=l;r++){let s=Ni(e[r],!1);s.offset=bs((t+s.offset*n)/i),o.push(s)}n=i,t=0,r="",e=o}return is(this.element,e,this.preStyleProps,this.postStyleProps,n,t,r,!0)}}function bs(e,t=3){const n=Math.pow(10,t-1);return Math.round(e*n)/n}class gs{}class ms extends gs{normalizePropertyName(e,t){return Bi(e)}normalizeStyleValue(e,t,n,r){let o="";const i=n.toString().trim();if(ys[t]&&0!==n&&"0"!==n)if("number"==typeof n)o="px";else{const t=n.match(/^[+-]?[\d\.]+([a-z]*)$/);t&&0==t[1].length&&r.push(`Please provide a CSS unit value for ${e}:${n}`)}return i+o}}const ys=(()=>function(e){const t={};return e.forEach(e=>t[e]=!0),t}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function _s(e,t,n,r,o,i,s,a,c,l,u,h,d){return{type:0,element:e,triggerName:t,isRemovalTransition:o,fromState:n,fromStyles:i,toState:r,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:u,totalTime:h,errors:d}}const vs={};class ws{constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,r){return function(e,t,n,r,o){return e.some(e=>e(t,n,r,o))}(this.ast.matchers,e,t,n,r)}buildStyles(e,t,n){const r=this._stateStyles["*"],o=this._stateStyles[e],i=r?r.buildStyles(t,n):{};return o?o.buildStyles(t,n):i}build(e,t,n,r,o,i,s,a,c,l){const u=[],h=this.ast.options&&this.ast.options.params||vs,d=this.buildStyles(n,s&&s.params||vs,u),f=a&&a.params||vs,p=this.buildStyles(r,f,u),b=new Set,g=new Map,m=new Map,y="void"===r,_={params:Object.assign(Object.assign({},h),f)},v=l?[]:ls(e,t,this.ast.animation,o,i,d,p,_,c,u);let w=0;if(v.forEach(e=>{w=Math.max(e.duration+e.delay,w)}),u.length)return _s(t,this._triggerName,n,r,y,d,p,[],[],g,m,w,u);v.forEach(e=>{const n=e.element,r=fi(g,n,{});e.preStyleProps.forEach(e=>r[e]=!0);const o=fi(m,n,{});e.postStyleProps.forEach(e=>o[e]=!0),n!==t&&b.add(n)});const x=Vi(b.values());return _s(t,this._triggerName,n,r,y,d,p,v,x,g,m,w)}}class xs{constructor(e,t){this.styles=e,this.defaultParams=t}buildStyles(e,t){const n={},r=Ai(this.defaultParams);return Object.keys(e).forEach(t=>{const n=e[t];null!=n&&(r[t]=n)}),this.styles.styles.forEach(e=>{if("string"!=typeof e){const o=e;Object.keys(o).forEach(e=>{let i=o[e];i.length>1&&(i=Hi(i,r,t)),n[e]=i})}}),n}}class Ss{constructor(e,t){this.name=e,this.ast=t,this.transitionFactories=[],this.states={},t.states.forEach(e=>{this.states[e.name]=new xs(e.style,e.options&&e.options.params||{})}),Es(this.states,"true","1"),Es(this.states,"false","0"),t.transitions.forEach(t=>{this.transitionFactories.push(new ws(e,t,this.states))}),this.fallbackTransition=new ws(e,{type:1,animation:{type:2,steps:[],options:null},matchers:[(e,t)=>!0],options:null,queryCount:0,depCount:0},this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,r){return this.transitionFactories.find(o=>o.match(e,t,n,r))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}}function Es(e,t,n){e.hasOwnProperty(t)?e.hasOwnProperty(n)||(e[n]=e[t]):e.hasOwnProperty(n)&&(e[t]=e[n])}const ks=new ss;class Cs{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n,this._animations={},this._playersById={},this.players=[]}register(e,t){const n=[],r=Xi(this._driver,t,n);if(n.length)throw new Error(`Unable to build the animation due to the following errors: ${n.join("\n")}`);this._animations[e]=r}_buildPlayer(e,t,n){const r=e.element,o=li(0,this._normalizer,0,e.keyframes,t,n);return this._driver.animate(r,o,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){const r=[],o=this._animations[e];let i;const s=new Map;if(o?(i=ls(this._driver,t,o,"ng-enter","ng-leave",{},{},n,ks,r),i.forEach(e=>{const t=fi(s,e.element,{});e.postStyleProps.forEach(e=>t[e]=null)})):(r.push("The requested animation doesn't exist or has already been destroyed"),i=[]),r.length)throw new Error(`Unable to create the animation due to the following errors: ${r.join("\n")}`);s.forEach((e,t)=>{Object.keys(e).forEach(n=>{e[n]=this._driver.computeStyle(t,n,"*")})});const a=ci(i.map(e=>{const t=s.get(e.element);return this._buildPlayer(e,{},t)}));return this._playersById[e]=a,a.onDestroy(()=>this.destroy(e)),this.players.push(a),a}destroy(e){const t=this._getPlayer(e);t.destroy(),delete this._playersById[e];const n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){const t=this._playersById[e];if(!t)throw new Error(`Unable to find the timeline player referenced by ${e}`);return t}listen(e,t,n,r){const o=di(t,"","","");return ui(this._getPlayer(e),n,o,r),()=>{}}command(e,t,n,r){if("register"==n)return void this.register(e,r[0]);if("create"==n)return void this.create(e,t,r[0]||{});const o=this._getPlayer(e);switch(n){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e)}}}const Os=[],Ts={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},js={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class Ps{constructor(e,t=""){this.namespaceId=t;const n=e&&e.hasOwnProperty("value");if(this.value=null!=(r=n?e.value:e)?r:null,n){const t=Ai(e);delete t.value,this.options=t}else this.options={};var r;this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const t=e.params;if(t){const e=this.options.params;Object.keys(t).forEach(n=>{null==e[n]&&(e[n]=t[n])})}}}const As=new Ps("void");class Ns{constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,Ls(t,this._hostClassName)}listen(e,t,n,r){if(!this._triggers.hasOwnProperty(t))throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`);if(null==n||0==n.length)throw new Error(`Unable to listen on the animation trigger "${t}" because the provided event is undefined!`);if("start"!=(o=n)&&"done"!=o)throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`);var o;const i=fi(this._elementListeners,e,[]),s={name:t,phase:n,callback:r};i.push(s);const a=fi(this._engine.statesByElement,e,{});return a.hasOwnProperty(t)||(Ls(e,"ng-trigger"),Ls(e,"ng-trigger-"+t),a[t]=As),()=>{this._engine.afterFlush(()=>{const e=i.indexOf(s);e>=0&&i.splice(e,1),this._triggers[t]||delete a[t]})}}register(e,t){return!this._triggers[e]&&(this._triggers[e]=t,!0)}_getTrigger(e){const t=this._triggers[e];if(!t)throw new Error(`The provided animation trigger "${e}" has not been registered!`);return t}trigger(e,t,n,r=!0){const o=this._getTrigger(t),i=new Is(this.id,t,e);let s=this._engine.statesByElement.get(e);s||(Ls(e,"ng-trigger"),Ls(e,"ng-trigger-"+t),this._engine.statesByElement.set(e,s={}));let a=s[t];const c=new Ps(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&a&&c.absorbOptions(a.options),s[t]=c,a||(a=As),"void"!==c.value&&a.value===c.value){if(!function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!=r.length)return!1;for(let o=0;o<n.length;o++){const r=n[o];if(!t.hasOwnProperty(r)||e[r]!==t[r])return!1}return!0}(a.params,c.params)){const t=[],n=o.matchStyles(a.value,a.params,t),r=o.matchStyles(c.value,c.params,t);t.length?this._engine.reportError(t):this._engine.afterFlush(()=>{Mi(e,n),Di(e,r)})}return}const l=fi(this._engine.playersByElement,e,[]);l.forEach(e=>{e.namespaceId==this.id&&e.triggerName==t&&e.queued&&e.destroy()});let u=o.matchTransition(a.value,c.value,e,c.params),h=!1;if(!u){if(!r)return;u=o.fallbackTransition,h=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:u,fromState:a,toState:c,player:i,isFallbackTransition:h}),h||(Ls(e,"ng-animate-queued"),i.onStart(()=>{Hs(e,"ng-animate-queued")})),i.onDone(()=>{let t=this.players.indexOf(i);t>=0&&this.players.splice(t,1);const n=this._engine.playersByElement.get(e);if(n){let e=n.indexOf(i);e>=0&&n.splice(e,1)}}),this.players.push(i),l.push(i),i}deregister(e){delete this._triggers[e],this._engine.statesByElement.forEach((t,n)=>{delete t[e]}),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(t=>t.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const t=this._engine.playersByElement.get(e);t&&(t.forEach(e=>e.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){const n=this._engine.driver.query(e,".ng-trigger",!0);n.forEach(e=>{if(e.__ng_removed)return;const n=this._engine.fetchNamespacesByElement(e);n.size?n.forEach(n=>n.triggerLeaveAnimation(e,t,!1,!0)):this.clearElementCache(e)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(e=>this.clearElementCache(e)))}triggerLeaveAnimation(e,t,n,r){const o=this._engine.statesByElement.get(e);if(o){const i=[];if(Object.keys(o).forEach(t=>{if(this._triggers[t]){const n=this.trigger(e,t,"void",r);n&&i.push(n)}}),i.length)return this._engine.markElementAsRemoved(this.id,e,!0,t),n&&ci(i).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const t=this._elementListeners.get(e);if(t){const n=new Set;t.forEach(t=>{const r=t.name;if(n.has(r))return;n.add(r);const o=this._triggers[r].fallbackTransition,i=this._engine.statesByElement.get(e)[r]||As,s=new Ps("void"),a=new Is(this.id,r,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:r,transition:o,fromState:i,toState:s,player:a,isFallbackTransition:!0})})}}removeNode(e,t){const n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(n.totalAnimations){const t=n.players.length?n.playersByQueriedElement.get(e):[];if(t&&t.length)r=!0;else{let t=e;for(;t=t.parentNode;)if(n.statesByElement.get(t)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)n.markElementAsRemoved(this.id,e,!1,t);else{const r=e.__ng_removed;r&&r!==Ts||(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){Ls(e,this._hostClassName)}drainQueuedTransitions(e){const t=[];return this._queue.forEach(n=>{const r=n.player;if(r.destroyed)return;const o=n.element,i=this._elementListeners.get(o);i&&i.forEach(t=>{if(t.name==n.triggerName){const r=di(o,n.triggerName,n.fromState.value,n.toState.value);r._data=e,ui(n.player,t.phase,r,t.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(n)}),this._queue=[],t.sort((e,t)=>{const n=e.transition.ast.depCount,r=t.transition.ast.depCount;return 0==n||0==r?n-r:this._engine.driver.containsElement(e.element,t.element)?1:-1})}destroy(e){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let t=!1;return this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find(t=>t.element===e)||t,t}}class Rs{constructor(e,t,n){this.bodyNode=e,this.driver=t,this._normalizer=n,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(e,t)=>{}}_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(t=>{t.players.forEach(t=>{t.queued&&e.push(t)})}),e}createNamespace(e,t){const n=new Ns(e,t,this);return t.parentNode?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){const n=this._namespaceList.length-1;if(n>=0){let r=!1;for(let o=n;o>=0;o--)if(this.driver.containsElement(this._namespaceList[o].hostElement,t)){this._namespaceList.splice(o+1,0,e),r=!0;break}r||this._namespaceList.splice(0,0,e)}else this._namespaceList.push(e);return this.namespacesByHostElement.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}destroy(e,t){if(!e)return;const n=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(n.hostElement),delete this._namespaceLookup[e];const t=this._namespaceList.indexOf(n);t>=0&&this._namespaceList.splice(t,1)}),this.afterFlushAnimationsDone(()=>n.destroy(t))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const t=new Set,n=this.statesByElement.get(e);if(n){const e=Object.keys(n);for(let r=0;r<e.length;r++){const o=n[e[r]].namespaceId;if(o){const e=this._fetchNamespace(o);e&&t.add(e)}}}return t}trigger(e,t,n,r){if(Ds(t)){const o=this._fetchNamespace(e);if(o)return o.trigger(t,n,r),!0}return!1}insertNode(e,t,n,r){if(!Ds(t))return;const o=t.__ng_removed;if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;const e=this.collectedLeaveElements.indexOf(t);e>=0&&this.collectedLeaveElements.splice(e,1)}if(e){const r=this._fetchNamespace(e);r&&r.insertNode(t,n)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Ls(e,"ng-animate-disabled")):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),Hs(e,"ng-animate-disabled"))}removeNode(e,t,n,r){if(Ds(t)){const o=e?this._fetchNamespace(e):null;if(o?o.removeNode(t,r):this.markElementAsRemoved(e,t,!1,r),n){const n=this.namespacesByHostElement.get(t);n&&n.id!==e&&n.removeNode(t,r)}}else this._onRemovalComplete(t,r)}markElementAsRemoved(e,t,n,r){this.collectedLeaveElements.push(t),t.__ng_removed={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1}}listen(e,t,n,r,o){return Ds(t)?this._fetchNamespace(e).listen(t,n,r,o):()=>{}}_buildInstruction(e,t,n,r,o){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,o)}destroyInnerAnimations(e){let t=this.driver.query(e,".ng-trigger",!0);t.forEach(e=>this.destroyActiveAnimationsForElement(e)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(e,".ng-animating",!0),t.forEach(e=>this.finishActiveQueriedAnimationOnElement(e)))}destroyActiveAnimationsForElement(e){const t=this.playersByElement.get(e);t&&t.forEach(e=>{e.queued?e.markedForDestroy=!0:e.destroy()})}finishActiveQueriedAnimationOnElement(e){const t=this.playersByQueriedElement.get(e);t&&t.forEach(e=>e.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return ci(this.players).onDone(()=>e());e()})}processLeaveNode(e){const t=e.__ng_removed;if(t&&t.setForRemoval){if(e.__ng_removed=Ts,t.namespaceId){this.destroyInnerAnimations(e);const n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}this.driver.matchesElement(e,".ng-animate-disabled")&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(e=>{this.markElementAsDisabled(e,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((e,t)=>this._balanceNamespaceList(e,t)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++)Ls(this.collectedEnterElements[n],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const n=[];try{t=this._flushAnimations(n,e)}finally{for(let e=0;e<n.length;e++)n[e]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++)this.processLeaveNode(this.collectedLeaveElements[n]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(e=>e()),this._flushFns=[],this._whenQuietFns.length){const e=this._whenQuietFns;this._whenQuietFns=[],t.length?ci(t).onDone(()=>{e.forEach(e=>e())}):e.forEach(e=>e())}}reportError(e){throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${e.join("\n")}`)}_flushAnimations(e,t){const n=new ss,r=[],o=new Map,i=[],s=new Map,a=new Map,c=new Map,l=new Set;this.disabledNodes.forEach(e=>{l.add(e);const t=this.driver.query(e,".ng-animate-queued",!0);for(let n=0;n<t.length;n++)l.add(t[n])});const u=this.bodyNode,h=Array.from(this.statesByElement.keys()),d=Fs(h,this.collectedEnterElements),f=new Map;let p=0;d.forEach((e,t)=>{const n="ng-enter"+p++;f.set(t,n),e.forEach(e=>Ls(e,n))});const b=[],g=new Set,m=new Set;for(let P=0;P<this.collectedLeaveElements.length;P++){const e=this.collectedLeaveElements[P],t=e.__ng_removed;t&&t.setForRemoval&&(b.push(e),g.add(e),t.hasAnimation?this.driver.query(e,".ng-star-inserted",!0).forEach(e=>g.add(e)):m.add(e))}const y=new Map,_=Fs(h,Array.from(g));_.forEach((e,t)=>{const n="ng-leave"+p++;y.set(t,n),e.forEach(e=>Ls(e,n))}),e.push(()=>{d.forEach((e,t)=>{const n=f.get(t);e.forEach(e=>Hs(e,n))}),_.forEach((e,t)=>{const n=y.get(t);e.forEach(e=>Hs(e,n))}),b.forEach(e=>{this.processLeaveNode(e)})});const v=[],w=[];for(let P=this._namespaceList.length-1;P>=0;P--)this._namespaceList[P].drainQueuedTransitions(t).forEach(e=>{const t=e.player,o=e.element;if(v.push(t),this.collectedEnterElements.length){const e=o.__ng_removed;if(e&&e.setForMove)return void t.destroy()}const l=!u||!this.driver.containsElement(u,o),h=y.get(o),d=f.get(o),p=this._buildInstruction(e,n,d,h,l);if(!p.errors||!p.errors.length)return l||e.isFallbackTransition?(t.onStart(()=>Mi(o,p.fromStyles)),t.onDestroy(()=>Di(o,p.toStyles)),void r.push(t)):(p.timelines.forEach(e=>e.stretchStartingKeyframe=!0),n.append(o,p.timelines),i.push({instruction:p,player:t,element:o}),p.queriedElements.forEach(e=>fi(s,e,[]).push(t)),p.preStyleProps.forEach((e,t)=>{const n=Object.keys(e);if(n.length){let e=a.get(t);e||a.set(t,e=new Set),n.forEach(t=>e.add(t))}}),void p.postStyleProps.forEach((e,t)=>{const n=Object.keys(e);let r=c.get(t);r||c.set(t,r=new Set),n.forEach(e=>r.add(e))}));w.push(p)});if(w.length){const e=[];w.forEach(t=>{e.push(`@${t.triggerName} has failed due to:\n`),t.errors.forEach(t=>e.push(`- ${t}\n`))}),v.forEach(e=>e.destroy()),this.reportError(e)}const x=new Map,S=new Map;i.forEach(e=>{const t=e.element;n.has(t)&&(S.set(t,t),this._beforeAnimationBuild(e.player.namespaceId,e.instruction,x))}),r.forEach(e=>{const t=e.element;this._getPreviousPlayers(t,!1,e.namespaceId,e.triggerName,null).forEach(e=>{fi(x,t,[]).push(e),e.destroy()})});const E=b.filter(e=>zs(e,a,c)),k=new Map;$s(k,this.driver,m,c,"*").forEach(e=>{zs(e,a,c)&&E.push(e)});const C=new Map;d.forEach((e,t)=>{$s(C,this.driver,new Set(e),a,"!")}),E.forEach(e=>{const t=k.get(e),n=C.get(e);k.set(e,Object.assign(Object.assign({},t),n))});const O=[],T=[],j={};i.forEach(e=>{const{element:t,player:i,instruction:s}=e;if(n.has(t)){if(l.has(t))return i.onDestroy(()=>Di(t,s.toStyles)),i.disabled=!0,i.overrideTotalTime(s.totalTime),void r.push(i);let e=j;if(S.size>1){let n=t;const r=[];for(;n=n.parentNode;){const t=S.get(n);if(t){e=t;break}r.push(n)}r.forEach(t=>S.set(t,e))}const n=this._buildAnimation(i.namespaceId,s,x,o,C,k);if(i.setRealPlayer(n),e===j)O.push(i);else{const t=this.playersByElement.get(e);t&&t.length&&(i.parentPlayer=ci(t)),r.push(i)}}else Mi(t,s.fromStyles),i.onDestroy(()=>Di(t,s.toStyles)),T.push(i),l.has(t)&&r.push(i)}),T.forEach(e=>{const t=o.get(e.element);if(t&&t.length){const n=ci(t);e.setRealPlayer(n)}}),r.forEach(e=>{e.parentPlayer?e.syncPlayerEvents(e.parentPlayer):e.destroy()});for(let P=0;P<b.length;P++){const e=b[P],t=e.__ng_removed;if(Hs(e,"ng-leave"),t&&t.hasAnimation)continue;let n=[];if(s.size){let t=s.get(e);t&&t.length&&n.push(...t);let r=this.driver.query(e,".ng-animating",!0);for(let e=0;e<r.length;e++){let t=s.get(r[e]);t&&t.length&&n.push(...t)}}const r=n.filter(e=>!e.destroyed);r.length?Vs(this,e,r):this.processLeaveNode(e)}return b.length=0,O.forEach(e=>{this.players.push(e),e.onDone(()=>{e.destroy();const t=this.players.indexOf(e);this.players.splice(t,1)}),e.play()}),O}elementContainsData(e,t){let n=!1;const r=t.__ng_removed;return r&&r.setForRemoval&&(n=!0),this.playersByElement.has(t)&&(n=!0),this.playersByQueriedElement.has(t)&&(n=!0),this.statesByElement.has(t)&&(n=!0),this._fetchNamespace(e).elementContainsData(t)||n}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,r,o){let i=[];if(t){const t=this.playersByQueriedElement.get(e);t&&(i=t)}else{const t=this.playersByElement.get(e);if(t){const e=!o||"void"==o;t.forEach(t=>{t.queued||(e||t.triggerName==r)&&i.push(t)})}}return(n||r)&&(i=i.filter(e=>!(n&&n!=e.namespaceId||r&&r!=e.triggerName))),i}_beforeAnimationBuild(e,t,n){const r=t.element,o=t.isRemovalTransition?void 0:e,i=t.isRemovalTransition?void 0:t.triggerName;for(const s of t.timelines){const e=s.element,a=e!==r,c=fi(n,e,[]);this._getPreviousPlayers(e,a,o,i,t.toState).forEach(e=>{const t=e.getRealPlayer();t.beforeDestroy&&t.beforeDestroy(),e.destroy(),c.push(e)})}Mi(r,t.fromStyles)}_buildAnimation(e,t,n,r,o,i){const s=t.triggerName,a=t.element,c=[],l=new Set,u=new Set,h=t.timelines.map(t=>{const h=t.element;l.add(h);const d=h.__ng_removed;if(d&&d.removedBeforeQueried)return new ii(t.duration,t.delay);const f=h!==a,p=function(e){const t=[];return function e(t,n){for(let r=0;r<t.length;r++){const o=t[r];o instanceof si?e(o.players,n):n.push(o)}}(e,t),t}((n.get(h)||Os).map(e=>e.getRealPlayer())).filter(e=>!!e.element&&e.element===h),b=o.get(h),g=i.get(h),m=li(0,this._normalizer,0,t.keyframes,b,g),y=this._buildPlayer(t,m,p);if(t.subTimeline&&r&&u.add(h),f){const t=new Is(e,s,h);t.setRealPlayer(y),c.push(t)}return y});c.forEach(e=>{fi(this.playersByQueriedElement,e.element,[]).push(e),e.onDone(()=>function(e,t,n){let r;if(e instanceof Map){if(r=e.get(t),r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&e.delete(t)}}else if(r=e[t],r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&delete e[t]}return r}(this.playersByQueriedElement,e.element,e))}),l.forEach(e=>Ls(e,"ng-animating"));const d=ci(h);return d.onDestroy(()=>{l.forEach(e=>Hs(e,"ng-animating")),Di(a,t.toStyles)}),u.forEach(e=>{fi(r,e,[]).push(d)}),d}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new ii(e.duration,e.delay)}}class Is{constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n,this._player=new ii,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,Object.keys(this._queuedCallbacks).forEach(t=>{this._queuedCallbacks[t].forEach(n=>ui(e,t,void 0,n))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){fi(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const t=this._player;t.triggerCallback&&t.triggerCallback(e)}}function Ds(e){return e&&1===e.nodeType}function Ms(e,t){const n=e.style.display;return e.style.display=null!=t?t:"none",n}function $s(e,t,n,r,o){const i=[];n.forEach(e=>i.push(Ms(e)));const s=[];r.forEach((n,r)=>{const i={};n.forEach(e=>{const n=i[e]=t.computeStyle(r,e,o);n&&0!=n.length||(r.__ng_removed=js,s.push(r))}),e.set(r,i)});let a=0;return n.forEach(e=>Ms(e,i[a++])),s}function Fs(e,t){const n=new Map;if(e.forEach(e=>n.set(e,[])),0==t.length)return n;const r=new Set(t),o=new Map;return t.forEach(e=>{const t=function e(t){if(!t)return 1;let i=o.get(t);if(i)return i;const s=t.parentNode;return i=n.has(s)?s:r.has(s)?1:e(s),o.set(t,i),i}(e);1!==t&&n.get(t).push(e)}),n}function Ls(e,t){if(e.classList)e.classList.add(t);else{let n=e.$$classes;n||(n=e.$$classes={}),n[t]=!0}}function Hs(e,t){if(e.classList)e.classList.remove(t);else{let n=e.$$classes;n&&delete n[t]}}function Vs(e,t,n){ci(n).onDone(()=>e.processLeaveNode(t))}function zs(e,t,n){const r=n.get(e);if(!r)return!1;let o=t.get(e);return o?r.forEach(e=>o.add(e)):t.set(e,r),n.delete(e),!0}class Bs{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._triggerCache={},this.onRemovalComplete=(e,t)=>{},this._transitionEngine=new Rs(e,t,n),this._timelineEngine=new Cs(e,t,n),this._transitionEngine.onRemovalComplete=(e,t)=>this.onRemovalComplete(e,t)}registerTrigger(e,t,n,r,o){const i=e+"-"+r;let s=this._triggerCache[i];if(!s){const e=[],t=Xi(this._driver,o,e);if(e.length)throw new Error(`The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join("\n - ")}`);s=function(e,t){return new Ss(e,t)}(r,t),this._triggerCache[i]=s}this._transitionEngine.registerTrigger(t,r,s)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}onRemove(e,t,n,r){this._transitionEngine.removeNode(e,t,r||!1,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,r){if("@"==n.charAt(0)){const[e,o]=pi(n);this._timelineEngine.command(e,t,o,r)}else this._transitionEngine.trigger(e,t,n,r)}listen(e,t,n,r,o){if("@"==n.charAt(0)){const[e,r]=pi(n);return this._timelineEngine.listen(e,t,r,o)}return this._transitionEngine.listen(e,t,n,r,o)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}function Us(e,t){let n=null,r=null;return Array.isArray(t)&&t.length?(n=Ws(t[0]),t.length>1&&(r=Ws(t[t.length-1]))):t&&(n=Ws(t)),n||r?new qs(e,n,r):null}let qs=(()=>{class e{constructor(t,n,r){this._element=t,this._startStyles=n,this._endStyles=r,this._state=0;let o=e.initialStylesByElement.get(t);o||e.initialStylesByElement.set(t,o={}),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&Di(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Di(this._element,this._initialStyles),this._endStyles&&(Di(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(Mi(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Mi(this._element,this._endStyles),this._endStyles=null),Di(this._element,this._initialStyles),this._state=3)}}return e.initialStylesByElement=new WeakMap,e})();function Ws(e){let t=null;const n=Object.keys(e);for(let r=0;r<n.length;r++){const o=n[r];Qs(o)&&(t=t||{},t[o]=e[o])}return t}function Qs(e){return"display"===e||"position"===e}class Ks{constructor(e,t,n,r,o,i,s){this._element=e,this._name=t,this._duration=n,this._delay=r,this._easing=o,this._fillMode=i,this._onDoneFn=s,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=e=>this._handleCallback(e)}apply(){!function(e,t){const n=ea(e,"").trim();n.length&&(function(e,t){let n=0;for(let r=0;r<e.length;r++)","===e.charAt(r)&&n++}(n),t=`${n}, ${t}`),Xs(e,"",t)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),Js(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){Gs(this._element,this._name,"paused")}resume(){Gs(this._element,this._name,"running")}setPosition(e){const t=Ys(this._element,this._name);this._position=e*this._duration,Xs(this._element,"Delay",`-${this._position}ms`,t)}getPosition(){return this._position}_handleCallback(e){const t=e._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(e.elapsedTime.toFixed(3));e.animationName==this._name&&Math.max(t-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}finish(){this._finished||(this._finished=!0,this._onDoneFn(),Js(this._element,this._eventFn,!0))}destroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(e,t){const n=ea(e,"").split(","),r=Zs(n,t);r>=0&&(n.splice(r,1),Xs(e,"",n.join(",")))}(this._element,this._name))}}function Gs(e,t,n){Xs(e,"PlayState",n,Ys(e,t))}function Ys(e,t){const n=ea(e,"");return n.indexOf(",")>0?Zs(n.split(","),t):Zs([n],t)}function Zs(e,t){for(let n=0;n<e.length;n++)if(e[n].indexOf(t)>=0)return n;return-1}function Js(e,t,n){n?e.removeEventListener("animationend",t):e.addEventListener("animationend",t)}function Xs(e,t,n,r){const o="animation"+t;if(null!=r){const t=e.style[o];if(t.length){const e=t.split(",");e[r]=n,n=e.join(",")}}e.style[o]=n}function ea(e,t){return e.style["animation"+t]}class ta{constructor(e,t,n,r,o,i,s,a){this.element=e,this.keyframes=t,this.animationName=n,this._duration=r,this._delay=o,this._finalStyles=s,this._specialStyles=a,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=i||"linear",this.totalTime=r+o,this._buildStyler()}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}destroy(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}_flushDoneFns(){this._onDoneFns.forEach(e=>e()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}finish(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}setPosition(e){this._styler.setPosition(e)}getPosition(){return this._styler.getPosition()}hasStarted(){return this._state>=2}init(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}play(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}pause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}reset(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}_buildStyler(){this._styler=new Ks(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}beforeDestroy(){this.init();const e={};if(this.hasStarted()){const t=this._state>=3;Object.keys(this._finalStyles).forEach(n=>{"offset"!=n&&(e[n]=t?this._finalStyles[n]:Qi(this.element,n))})}this.currentSnapshot=e}}class na extends ii{constructor(e,t){super(),this.element=e,this._startingStyles={},this.__initialized=!1,this._styles=ki(t)}init(){!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach(e=>{this._startingStyles[e]=this.element.style[e]}),super.init())}play(){this._startingStyles&&(this.init(),Object.keys(this._styles).forEach(e=>this.element.style.setProperty(e,this._styles[e])),super.play())}destroy(){this._startingStyles&&(Object.keys(this._startingStyles).forEach(e=>{const t=this._startingStyles[e];t?this.element.style.setProperty(e,t):this.element.style.removeProperty(e)}),this._startingStyles=null,super.destroy())}}class ra{constructor(){this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}validateStyleProperty(e){return wi(e)}matchesElement(e,t){return xi(e,t)}containsElement(e,t){return Si(e,t)}query(e,t,n){return Ei(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}buildKeyframeElement(e,t,n){n=n.map(e=>ki(e));let r=`@keyframes ${t} {\n`,o="";n.forEach(e=>{o=" ";const t=parseFloat(e.offset);r+=`${o}${100*t}% {\n`,o+=" ",Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"offset":return;case"easing":return void(n&&(r+=`${o}animation-timing-function: ${n};\n`));default:return void(r+=`${o}${t}: ${n};\n`)}}),r+=`${o}}\n`}),r+="}\n";const i=document.createElement("style");return i.innerHTML=r,i}animate(e,t,n,r,o,i=[],s){s&&this._notifyFaultyScrubber();const a=i.filter(e=>e instanceof ta),c={};Ui(n,r)&&a.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const l=function(e){let t={};return e&&(Array.isArray(e)?e:[e]).forEach(e=>{Object.keys(e).forEach(n=>{"offset"!=n&&"easing"!=n&&(t[n]=e[n])})}),t}(t=qi(e,t,c));if(0==n)return new na(e,l);const u=`gen_css_kf_${this._count++}`,h=this.buildKeyframeElement(e,u,t);document.querySelector("head").appendChild(h);const d=Us(e,t),f=new ta(e,t,u,n,r,o,l,d);return f.onDestroy(()=>{var e;(e=h).parentNode.removeChild(e)}),f}_notifyFaultyScrubber(){this._warningIssued||(console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n","  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."),this._warningIssued=!0)}}class oa{constructor(e,t,n,r){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(e,t,n){return e.animate(t,n)}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(t=>{"offset"!=t&&(e[t]=this._finished?this._finalKeyframe[t]:Qi(this.element,t))}),this.currentSnapshot=e}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class ia{constructor(){this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test(sa().toString()),this._cssKeyframesDriver=new ra}validateStyleProperty(e){return wi(e)}matchesElement(e,t){return xi(e,t)}containsElement(e,t){return Si(e,t)}query(e,t,n){return Ei(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}overrideWebAnimationsSupport(e){this._isNativeImpl=e}animate(e,t,n,r,o,i=[],s){if(!s&&!this._isNativeImpl)return this._cssKeyframesDriver.animate(e,t,n,r,o,i);const a={duration:n,delay:r,fill:0==r?"both":"forwards"};o&&(a.easing=o);const c={},l=i.filter(e=>e instanceof oa);Ui(n,r)&&l.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const u=Us(e,t=qi(e,t=t.map(e=>Ni(e,!1)),c));return new oa(e,t,a,u)}}function sa(){return"undefined"!=typeof window&&void 0!==window.document&&Element.prototype.animate||{}}let aa=(()=>{class e extends ti{constructor(e,t){super(),this._nextAnimationId=0,this._renderer=e.createRenderer(t.body,{id:"0",encapsulation:r.O.None,styles:[],data:{animation:[]}})}build(e){const t=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(e)?ni(e):e;return ua(this._renderer,null,t,"register",[n]),new ca(t,this._renderer)}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(r.E),r.Sb(o.d))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();class ca extends class{}{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new la(this._id,e,t||{},this._renderer)}}class la{constructor(e,t,n,r){this.id=e,this.element=t,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return ua(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset")}setPosition(e){this._command("setPosition",e)}getPosition(){return 0}}function ua(e,t,n,r,o){return e.setProperty(t,`@@${n}:${r}`,o)}let ha=(()=>{class e{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),t.onRemovalComplete=(e,t)=>{t&&t.parentNode(e)&&t.removeChild(e.parentNode,e)}}createRenderer(e,t){const n=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation)){let e=this._rendererCache.get(n);return e||(e=new da("",n,this.engine),this._rendererCache.set(n,e)),e}const r=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);const i=t=>{Array.isArray(t)?t.forEach(i):this.engine.registerTrigger(r,o,e,t.name,t)};return t.data.animation.forEach(i),new fa(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){e>=0&&e<this._microtaskId?this._zone.run(()=>t(n)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(e=>{const[t,n]=e;t(n)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([t,n]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(r.E),r.Sb(Bs),r.Sb(r.z))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();class da{constructor(e,t,n){this.namespaceId=e,this.delegate=t,this.engine=n,this.destroyNode=this.delegate.destroyNode?e=>t.destroyNode(e):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,!0)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){"@"==t.charAt(0)&&"@.disabled"==t?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class fa extends da{constructor(e,t,n,r){super(t,n,r),this.factory=e,this.namespaceId=t}setProperty(e,t,n){"@"==t.charAt(0)?"."==t.charAt(1)&&"@.disabled"==t?this.disableAnimations(e,n=void 0===n||!!n):this.engine.process(this.namespaceId,e,t.substr(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if("@"==t.charAt(0)){const r=function(e){switch(e){case"body":return document.body;case"document":return document;case"window":return window;default:return e}}(e);let o=t.substr(1),i="";return"@"!=o.charAt(0)&&([o,i]=function(e){const t=e.indexOf(".");return[e.substring(0,t),e.substr(t+1)]}(o)),this.engine.listen(this.namespaceId,r,o,i,e=>{this.factory.scheduleListenerCallback(e._data||-1,n,e)})}return this.delegate.listen(e,t,n)}}let pa=(()=>{class e extends Bs{constructor(e,t,n){super(e.body,t,n)}}return e.\u0275fac=function(t){return new(t||e)(r.Sb(o.d),r.Sb(Oi),r.Sb(gs))},e.\u0275prov=r.Fb({token:e,factory:e.\u0275fac}),e})();const ba=[{provide:Oi,useFactory:function(){return"function"==typeof sa()?new ia:new ra}},{provide:new r.q("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:ti,useClass:aa},{provide:gs,useFactory:function(){return new ms}},{provide:Bs,useClass:pa},{provide:r.E,useFactory:function(e,t,n){return new ha(e,t,n)},deps:[w,Bs,r.z]}];let ga=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},providers:ba,imports:[I]}),e})(),ma=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)}}),e})(),ya=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[Ue,ma]]}),e})(),_a=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[Ue]]}),e})(),va=(()=>{class e{constructor(e,t){Object(o.r)(t)&&!e&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(t,n=[]){return{ngModule:e,providers:t.serverLoaded?[{provide:Ke,useValue:Object.assign(Object.assign({},Qe),t)},{provide:Ye,useValue:n,multi:!0},{provide:Ge,useValue:!0}]:[{provide:Ke,useValue:Object.assign(Object.assign({},Qe),t)},{provide:Ye,useValue:n,multi:!0}]}}}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)(r.Sb(Ge),r.Sb(r.B))},imports:[[ya,Pt,_a],ya,Pt,_a]}),e})(),wa=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.c,Fo,va]]}),e})(),xa=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.c]]}),e})(),Sa=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.c]]}),e})(),Ea=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.c,xa,Sa]]}),e})(),ka=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.c,Ea]]}),e})();function Ca(e){return(Ca="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oa(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ta(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Oa(e,t,n[t])}))}return e}function ja(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Pa={},Aa={};try{"undefined"!=typeof window&&(Pa=window),"undefined"!=typeof document&&(Aa=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(Rc){}var Na=(Pa.navigator||{}).userAgent,Ra=void 0===Na?"":Na,Ia=Pa,Da=Aa,Ma=!!Da.documentElement&&!!Da.head&&"function"==typeof Da.addEventListener&&"function"==typeof Da.createElement,$a=(~Ra.indexOf("MSIE")||Ra.indexOf("Trident/"),[1,2,3,4,5,6,7,8,9,10]),Fa=$a.concat([11,12,13,14,15,16,17,18,19,20]),La={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ha=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",La.GROUP,La.SWAP_OPACITY,La.PRIMARY,La.SECONDARY].concat($a.map((function(e){return"".concat(e,"x")}))).concat(Fa.map((function(e){return"w-".concat(e)}))),Ia.FontAwesomeConfig||{});Da&&"function"==typeof Da.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=ja(e,2),n=t[1],r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=Da.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=r&&(Ha[n]=r)}));var Va=Ta({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ha);Va.autoReplaceSvg||(Va.observeMutations=!1);var za=Ta({},Va);Ia.FontAwesomeConfig=za;var Ba=Ia||{};Ba.___FONT_AWESOME___||(Ba.___FONT_AWESOME___={}),Ba.___FONT_AWESOME___.styles||(Ba.___FONT_AWESOME___.styles={}),Ba.___FONT_AWESOME___.hooks||(Ba.___FONT_AWESOME___.hooks={}),Ba.___FONT_AWESOME___.shims||(Ba.___FONT_AWESOME___.shims=[]);var Ua=Ba.___FONT_AWESOME___,qa=[];Ma&&((Da.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Da.readyState)||Da.addEventListener("DOMContentLoaded",(function e(){Da.removeEventListener("DOMContentLoaded",e),qa.map((function(e){return e()}))})));var Wa,Qa=function(){},Ka="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,Ga="undefined"==typeof setImmediate?setTimeout:setImmediate,Ya=[];function Za(){for(var e=0;e<Ya.length;e++)Ya[e][0](Ya[e][1]);Ya=[],Wa=!1}function Ja(e,t){Ya.push([e,t]),Wa||(Wa=!0,Ga(Za,0))}function Xa(e){var t=e.owner,n=t._state,r=t._data,o=e[n],i=e.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(Rc){rc(i,Rc)}}ec(i,r)||("fulfilled"===n&&tc(i,r),"rejected"===n&&rc(i,r))}function ec(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===Ca(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){n||(n=!0,t===r?nc(e,r):tc(e,r))}),(function(t){n||(n=!0,rc(e,t))})),!0}}catch(Rc){return n||rc(e,Rc),!0}return!1}function tc(e,t){e!==t&&ec(e,t)||nc(e,t)}function nc(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Ja(ic,e))}function rc(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Ja(sc,e))}function oc(e){e._then=e._then.forEach(Xa)}function ic(e){e._state="fulfilled",oc(e)}function sc(e){e._state="rejected",oc(e),!e._handled&&Ka&&global.process.emit("unhandledRejection",e._data,e)}function ac(e){global.process.emit("rejectionHandled",e)}function cc(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof cc==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){rc(t,e)}try{e((function(e){tc(t,e)}),n)}catch(Rc){n(Rc)}}(e,this)}cc.prototype={constructor:cc,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(Qa),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&Ka&&Ja(ac,this)),"fulfilled"===this._state||"rejected"===this._state?Ja(Xa,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},cc.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new cc((function(t,n){var r=[],o=0;function i(e){return o++,function(n){r[e]=n,--o||t(r)}}for(var s,a=0;a<e.length;a++)(s=e[a])&&"function"==typeof s.then?s.then(i(a),n):r[a]=s;o||t(r)}))},cc.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new cc((function(t,n){for(var r,o=0;o<e.length;o++)(r=e[o])&&"function"==typeof r.then?r.then(t,n):t(r)}))},cc.resolve=function(e){return e&&"object"===Ca(e)&&e.constructor===cc?e:new cc((function(t){t(e)}))},cc.reject=function(e){return new cc((function(t,n){n(e)}))};var lc=function(e,t,n,r){var o,i,s,a=Object.keys(e),c=a.length,l=void 0!==r?function(e,t){return function(n,r,o,i){return e.call(t,n,r,o,i)}}(t,r):t;for(void 0===n?(o=1,s=e[a[0]]):(o=0,s=n);o<c;o++)s=l(s,e[i=a[o]],i,e);return s};function uc(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,o=void 0!==r&&r,i=Object.keys(t).reduce((function(e,n){var r=t[n];return r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof Ua.hooks.addPack||o?Ua.styles[e]=Ta({},Ua.styles[e]||{},i):Ua.hooks.addPack(e,i),"fas"===e&&uc("fa",t)}var hc=Ua.styles,dc=Ua.shims,fc=function(){var e=function(e){return lc(hc,(function(t,n,r){return t[r]=lc(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in hc;lc(dc,(function(e,n){var r=n[1];return"far"!==r||t||(r="fas"),e[n[0]]={prefix:r,iconName:n[2]},e}),{})};function pc(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}fc(),(pc.prototype=Object.create(Error.prototype)).constructor=pc;var bc={fill:"currentColor"},gc={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},mc=(Ta({},bc,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),Ta({},gc,{attributeName:"opacity"}));Ta({},bc,{cx:"256",cy:"364",r:"28"}),Ta({},gc,{attributeName:"r",values:"28;14;28;28;14;28;"}),Ta({},mc,{values:"1;0;1;1;0;1;"}),Ta({},bc,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Ta({},mc,{values:"1;0;0;0;0;1;"}),Ta({},bc,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Ta({},mc,{values:"0;0;1;1;0;0;"}),new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=Ta({},e.definitions[t]||{},o[t]),uc(t,o[t]),fc()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],o=r.prefix,i=r.iconName,s=r.icon;e[o]||(e[o]={}),e[o][i]=s})),e}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}());let yc=(()=>{let e=class{};return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)}}),e})();n("1X/a");let _c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-home"]],decls:24,vars:0,consts:[["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(r.Ob(0,"h1"),r.lc(1,"Welcome to DontCode !"),r.Nb(),r.Ob(2,"h2"),r.lc(3,"What am I seeing ?"),r.Nb(),r.Ob(4,"p"),r.lc(5,"You have opened the Preview App. The Preview App connects to Online services to receive Application changes from the Application Builder in realtime."),r.Nb(),r.Ob(6,"p"),r.Ob(7,"b"),r.lc(8,"Check you are connected"),r.Nb(),r.lc(9," to the online service by looking at the "),r.Kb(10,"kor-icon",0),r.lc(11," icon in the header panel."),r.Nb(),r.Ob(12,"p"),r.Kb(13,"kor-icon",0),r.lc(14," means you are ok, "),r.Kb(15,"kor-icon",1),r.lc(16," you have connection issue to the online service. Please check the browser log in this case"),r.Nb(),r.Ob(17,"p"),r.lc(18,"If "),r.Kb(19,"kor-icon",0),r.lc(20,", then "),r.Ob(21,"b"),r.lc(22,"go back to the Application Builder"),r.Nb(),r.lc(23," and enter some values in the Editor"),r.Nb())},styles:[""]}),e})(),vc=(()=>{class e{constructor(e){this.commandService=e,this.position="creation/name",this.value="New Test"}ngOnInit(){}addCommand(e){this.commandService.pushCommand(new ge(me.ADD,this.position,this.value))}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(ke))},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-insert-command"]],decls:9,vars:2,consts:[["label","Add Command","expanded",""],["label","position","type","select",3,"value","value-changed"],["label","creation/name"],["label","creation/entities/a/name"],["label","creation/screens/a/name"],["label","creation/entities/b/name"],["label","creation/screens/b/name"],["label","value",3,"value","value-changed"],["slot","footer","label","Add",3,"click"]],template:function(e,t){1&e&&(r.Ob(0,"kor-accordion",0),r.Ob(1,"kor-input",1),r.Wb("value-changed",(function(e){return t.position=e.target.value})),r.Kb(2,"kor-menu-item",2),r.Kb(3,"kor-menu-item",3),r.Kb(4,"kor-menu-item",4),r.Kb(5,"kor-menu-item",5),r.Kb(6,"kor-menu-item",6),r.Nb(),r.Ob(7,"kor-input",7),r.Wb("value-changed",(function(e){return t.value=e.target.value})),r.Nb(),r.Ob(8,"kor-button",8),r.Wb("click",(function(e){return t.addCommand(e)})),r.Nb(),r.Nb()),2&e&&(r.zb(1),r.dc("value",t.position),r.zb(6),r.dc("value",t.value))},styles:[""]}),e})();function wc(e,t){if(1&e&&(r.Ob(0,"p"),r.lc(1),r.Zb(2,"json"),r.Nb()),2&e){const e=t.$implicit;r.zb(1),r.nc("",e.type,", ",e.position,", ",r.ac(2,3,e.value),"")}}function xc(e,t){if(1&e&&(r.Mb(0),r.Ob(1,"p"),r.lc(2,"We list below the commands received from the Application Builder:"),r.Nb(),r.kc(3,wc,3,5,"p",1),r.Lb()),2&e){const e=r.Yb();r.zb(3),r.dc("ngForOf",e.commands)}}let Sc=(()=>{class e{constructor(e){this.providerService=e,this.commands=[],this.forgetIt=!0}ngOnInit(){this.context$=z([this.providerService.receiveCommands()]).pipe(Object(K.a)(e=>(this.forgetIt?this.forgetIt=!1:this.commands.push(e[0]),{command:e[0]})))}noCommands(){return 0==this.commands.length}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(ke))},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-list-commands"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(r.kc(0,xc,4,1,"ng-container",0),r.Zb(1,"async")),2&e&&r.dc("ngIf",r.ac(1,1,t.context$))},directives:[o.l,o.k],pipes:[o.b,o.f],styles:[""]}),e})(),Ec=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-debug-page"]],decls:3,vars:0,template:function(e,t){1&e&&(r.Kb(0,"preview-ui-insert-command"),r.Kb(1,"kor-divider"),r.Kb(2,"preview-ui-list-commands"))},directives:[vc,Sc],styles:[""]}),e})(),kc=(()=>{class e{constructor(e){this.viewContainerRef=e}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(r.N))},e.\u0275dir=r.Eb({type:e,selectors:[["","previewUiDynamicInsert",""]]}),e})();function Cc(e,t){}let Oc=(()=>{class e{constructor(e,t,n){this.route=e,this.componentFactoryResolver=t,this.provider=n}ngOnInit(){this.screenName$=this.route.paramMap.pipe(Object(K.a)(e=>e.get("id")));const e=we.DontCode.dtcde.getPreviewManager().retrieveHandlerConfig(we.DontCodeModel.APP_SCREENS);e&&(console.log("Importing from ",e.class.source),n("2iSC")("./plugin-"+e.class.source+"/esm2015").then(t=>{const n=this.componentFactoryResolver.resolveComponentFactory(t[e.class.name]),r=this.host.viewContainerRef;r.clear(),r.createComponent(n)}))}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(gr),r.Jb(r.j),r.Jb(ke))},e.\u0275cmp=r.Db({type:e,selectors:[["preview-ui-screen"]],viewQuery:function(e,t){var n;1&e&&r.jc(kc,!0),2&e&&r.ec(n=r.Xb())&&(t.host=n.first)},decls:4,vars:3,consts:[["previewUiDynamicInsert",""]],template:function(e,t){1&e&&(r.Ob(0,"p"),r.lc(1),r.Zb(2,"async"),r.Nb(),r.kc(3,Cc,0,0,"ng-template",0)),2&e&&(r.zb(1),r.mc("screen ",r.ac(2,1,t.screenName$)," works!"))},directives:[kc],pipes:[o.b],styles:[""]}),e})();class Tc{getConfiguration(){return{plugin:{id:"ScreenPlugin","display-name":"Dont code test Plugin adding screen types",version:"1.0.0"},"schema-updates":[{id:"screen-list",description:"A screen displaying a list of items",changes:[{location:{parent:"#/definitions/screen",id:"type",after:"name"},add:{enum:["list"]},props:{entity:{type:"string",format:"#/creation/entities"}},replace:!0},{location:{parent:"/definitions/screen",id:"type",after:"name"},add:{enum:["freeform"]},props:{},replace:!1}]}],"preview-handlers":[{location:{parent:we.DontCodeModel.APP_SCREENS,id:we.DontCodeModel.APP_SCREENS_NAME_NODE},class:{name:"ScreenComponent",source:"screen"}}]}}}var jc=we.DontCode.dtcde;let Pc=(()=>{let e=class{constructor(){console.log("Hey I'm there"),jc.registerPlugin(new Tc)}};return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.c]]}),e})();const Ac=[{path:"",component:_c},{path:"dev",component:Ec},{path:"screens/:id",component:Oc}];let Nc=(()=>{class e{}return e.\u0275mod=r.Hb({type:e,bootstrap:[ei]}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},providers:[],imports:[[I,ga,wa,Ea,ka,Fo.forRoot(Ac,{enableTracing:!1}),yc,va,Pc]]}),e})();Object(r.R)(),N().bootstrapModule(Nc).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0]]]);