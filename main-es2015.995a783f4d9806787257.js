(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1:function(e,t,n){e.exports=n("zUnb")},"1X/a":function(e,t){!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,(function(t){return e[t]}).bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=44)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return K})),n.d(t,"e",(function(){return Z})),n.d(t,"d",(function(){return F})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne}));const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${s}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],r=[],o=document.createTreeWalker(t.content,133,null,!1);let s=0,c=-1,h=0;const{strings:p,values:{length:f}}=e;for(;h<f;){const e=o.nextNode();if(null!==e){if(c++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)l(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=d.exec(p[h])[2],n=t.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const o=r.split(a);this.parts.push({type:"attribute",index:c,name:t,strings:o}),h+=o.length-1}}"TEMPLATE"===e.tagName&&(r.push(e),o.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const r=e.parentNode,o=t.split(a),i=o.length-1;for(let t=0;t<i;t++){let n,i=o[t];if(""===i)n=u();else{const e=d.exec(i);null!==e&&l(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++c})}""===o[i]?(r.insertBefore(u(),e),n.push(e)):e.data=o[i],h+=i}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&c!==s||(c++,t.insertBefore(u(),e)),s=c,this.parts.push({type:"node",index:c}),null===e.nextSibling?e.data="":(n.push(e),c--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else o.currentNode=r.pop()}for(const i of n)i.parentNode.removeChild(i)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},h=e=>-1!==e.index,u=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let i=m(r),s=r[i],a=-1,c=0;const l=[];let h=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(l.push(e),null===h&&(h=e)),null!==h&&c++;void 0!==s&&s.index===a;)s.index=null!==h?-1:s.index-c,i=m(r,i),s=r[i]}l.forEach(e=>e.parentNode.removeChild(e))}const f=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},m=(e,t=-1)=>{for(let n=t+1;n<e.length;n++)if(h(e[n]))return n;return-1},g=new WeakMap,b=e=>"function"==typeof e&&g.has(e),y={},v={};class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const n of this.__parts)void 0!==n&&n.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,c=o.nextNode();for(;s<n.length;)if(i=n[s],h(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}const w=` ${i} `;class x{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],o=e.lastIndexOf("\x3c!--");n=(o>-1||n)&&-1===e.indexOf("--\x3e",o+1);const a=d.exec(e);t+=null===a?e+(n?w:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const S=e=>null===e||!("object"==typeof e||"function"==typeof e),k=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class E{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let r=0;r<n.length-1;r++)this.parts[r]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(S(e)||!k(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||S(e)&&e===this.value||(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class O{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}const e=this.__pendingValue;e!==y&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):k(e)?this.__commitIterable(e):e===v?(this.value=v,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new O(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class T{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=y}}class P extends E{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends C{}let A=!1;(()=>{try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class I{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue===y)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=R(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=y}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const R=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function N(e){let t=D.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},D.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(i);return n=t.keyString.get(r),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const D=new Map,M=new WeakMap,$=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new P(e,t.slice(1),n).parts:"@"===o?[new I(e,t.slice(1),r.eventContext)]:"?"===o?[new T(e,t.slice(1),n)]:new E(e,t,n).parts}handleTextExpression(e){return new O(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const F=(e,...t)=>new x(e,t,"html",$),L=(e,t)=>`${e}--${t}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const B=e=>t=>{const n=L(t.type,e);let r=D.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},D.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const s=t.strings.join(i);if(o=r.keyString.get(s),void 0===o){const n=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(n,e),o=new c(t,n),r.keyString.set(s,o)}return r.stringsArray.set(t.strings,o),o},z=["html","svg"],U=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const V={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:q};class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this._requestUpdate(e,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=q){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.converter||V,r="function"==typeof n?n:n.fromAttribute;return r?r(e,t.type):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.converter;return(n&&n.toAttribute||V.toAttribute)(e,t.type)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const r=this.constructor,o=r.getPropertyOptions(e);r._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;const K=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function Z(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):G(e,t)}const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class X{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof X)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new X(n,J)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const te={};class ne extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==te&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return te}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=M.has(t),s=H&&11===t.nodeType&&!!t.host,a=s&&!U.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=M.get(t);void 0===r&&(o(t,t.firstChild),M.set(t,r=new O(Object.assign({templateFactory:N},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:B(r)},n)),a){const e=M.get(c);M.delete(c),((e,t,n)=>{U.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let l=0;l<i;l++){const e=o[l];e.parentNode.removeChild(e),s.textContent+=e.textContent}(e=>{z.forEach(t=>{const n=D.get(L(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),p(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let s=m(o),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=f(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=m(o,s);return}s=m(o,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),p(n,e)}})(r,c,e.value instanceof _?e.value.template:void 0),o(t,t.firstChild),t.appendChild(c),M.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=n(0).b`
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
      `]}render(){return r.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"columns"===e?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===e&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}};i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"columns",void 0),i([Object(r.e)({type:Number,reflect:!0})],s.prototype,"rows",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"spacing",void 0),s=i([Object(r.c)("kor-grid")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.width="100%",this.fit="contain"}static get styles(){return[o.a,r.b`
        :host {
          position: relative;
          max-width: max-content;
          display: flex;
          flex-direction: column;
          font: var(--body-2);
          color: var(--text-1);
        }
        /* legend */
        kor-text {
          width: 100%;
          color: unset;
          font: unset;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        :host(:not([legend-position])) kor-text {
          margin-top: 8px;
        }
        :host([legend-position^="inner-"]) kor-text {
          position: absolute;
          padding: 8px;
          box-sizing: border-box;
        }
        :host([legend-position="inner-top"]) kor-text {
          top: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0)
          );
        }
        :host([legend-position="inner-bottom"]) kor-text {
          bottom: 0;
          background-image: linear-gradient(
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.8)
          );
        }
        /* slots */
        slot {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          position: absolute;
          padding: 4px;
          box-sizing: border-box;
          width: 100%;
          overflow: hidden;
        }
        slot[name="top"] {
          top: 0;
        }
        :host([legend][legend-position="inner-top"]) slot[name="top"] {
          top: 24px;
        }
        slot[name="bottom"] {
          bottom: 0;
        }
        :host([legend]:not([legend-position])) slot[name="bottom"],
        :host([legend][legend-position="inner-bottom"]) slot[name="bottom"] {
          bottom: 24px;
        }
      `]}render(){return r.d`
      <img
        src="${this.src}"
        alt="${this.alt}"
        width="${this.width}"
        height="${this.height}"
        style="object-fit: ${this.fit}"
      />
      ${this.legend?r.d` <kor-text>${this.legend}</kor-text> `:""}
      <slot name="top"></slot>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"src",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"alt",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"width",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"height",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"fit",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"legend",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"legend-position"})],s.prototype,"legendPosition",void 0),s=i([Object(r.c)("kor-image")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[o.a,r.b`
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
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(r.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(r.c)("kor-notification-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="row",this.flat=!1,this.scrollable=!1}static get styles(){return[o.a,r.b`
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
        :host([scrollable]) slot:not([name]) {
          overflow: auto;
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed"))}};i([Object(r.e)({type:String,reflect:!0})],s.prototype,"theme",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"scrollable",void 0),s=i([Object(r.c)("kor-page")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),o=n(1),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends r.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[o.a,r.b`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(e+"-changed")),"grid-cols"==e&&(this.style.gridColumn="span "+this.gridCols),"sortable"==e&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){this.sorted?this.sortDirection="asc"==this.sortDirection?"desc":"asc":(this.parentElement.childNodes.forEach(e=>{e.sorted=!1}),this.sorted=!0,this.sortDirection="asc")}};i([Object(r.e)({type:Number,reflect:!0,attribute:"grid-cols"})],s.prototype,"gridCols",void 0),i([Object(r.e)({type:String,reflect:!0})],s.prototype,"alignment",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"head",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sorted",void 0),i([Object(r.e)({type:Boolean,reflect:!0})],s.prototype,"sortable",void 0),i([Object(r.e)({type:String,reflect:!0,attribute:"sort-direction"})],s.prototype,"sortDirection",void 0),s=i([Object(r.c)("kor-table-cell")],s)},function(e,t,n){"use strict";n.r(t);var r=n(2);n.d(t,"korAccordion",(function(){return r.a}));var o=n(3);n.d(t,"korAppBar",(function(){return o.a}));var i=n(4);n.d(t,"korAvatar",(function(){return i.a}));var s=n(5);n.d(t,"korBadge",(function(){return s.a}));var a=n(6);n.d(t,"korBreadcrumbs",(function(){return a.a}));var c=n(7);n.d(t,"korBreadcrumbItem",(function(){return c.a}));var l=n(8);n.d(t,"korButton",(function(){return l.a}));var h=n(9);n.d(t,"korCard",(function(){return h.a}));var u=n(10);n.d(t,"korCheckbox",(function(){return u.a}));var d=n(11);n.d(t,"korDivider",(function(){return d.a}));var p=n(12);n.d(t,"korDrawer",(function(){return p.a}));var f=n(13);n.d(t,"korEmptyState",(function(){return f.a}));var m=n(14);n.d(t,"korGrid",(function(){return m.a}));var g=n(15);n.d(t,"korImage",(function(){return g.a}));var b=n(16);n.d(t,"korIcon",(function(){return b.a}));var y=n(17);n.d(t,"korInput",(function(){return y.a}));var v=n(18);n.d(t,"korMenuItem",(function(){return v.a}));var _=n(19);n.d(t,"korModal",(function(){return _.a}));var w=n(20);n.d(t,"korNavbar",(function(){return w.a}));var x=n(21);n.d(t,"korNotifications",(function(){return x.a}));var S=n(22);n.d(t,"korNotificationItem",(function(){return S.a}));var k=n(23);n.d(t,"korPage",(function(){return k.a}));var E=n(24);n.d(t,"korPane",(function(){return E.a}));var C=n(25);n.d(t,"korPopover",(function(){return C.a}));var O=n(26);n.d(t,"korProgressBar",(function(){return O.a}));var T=n(27);n.d(t,"korRadioButton",(function(){return T.a}));var P=n(28);n.d(t,"korSlider",(function(){return P.a}));var j=n(29);n.d(t,"korSpinner",(function(){return j.a}));var A=n(30);n.d(t,"korStepper",(function(){return A.a}));var I=n(31);n.d(t,"korStepperItem",(function(){return I.a}));var R=n(32);n.d(t,"korSwitch",(function(){return R.a}));var N=n(33);n.d(t,"korSwitchItem",(function(){return N.a}));var D=n(34);n.d(t,"korTabItem",(function(){return D.a}));var M=n(35);n.d(t,"korTable",(function(){return M.a}));var $=n(42);n.d(t,"korTableRow",(function(){return $.a}));var F=n(43);n.d(t,"korTableCell",(function(){return F.a}));var L=n(36);n.d(t,"korTabs",(function(){return L.a}));var H=n(37);n.d(t,"korTag",(function(){return H.a}));var B=n(38);n.d(t,"korText",(function(){return B.a}));var z=n(39);n.d(t,"korToggle",(function(){return z.a}));var U=n(40);n.d(t,"korTool",(function(){return U.a}));var V=n(41);n.d(t,"korTooltip",(function(){return V.a}))}])},2:function(e,t){},"3/dt":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodeModel=void 0;class r{}t.DontCodeModel=r,r.ROOT="creation",r.APP_NAME_NODE="name",r.APP_TYPE_NODE="type",r.APP_TYPE=r.ROOT+"/"+r.APP_TYPE_NODE,r.APP_NAME=r.ROOT+"/"+r.APP_NAME_NODE,r.APP_ENTITIES_NODE="entities",r.APP_ENTITIES=r.ROOT+"/"+r.APP_ENTITIES_NODE,r.APP_ENTITIES_NAME_NODE="name",r.APP_ENTITIES_NAME=r.APP_ENTITIES+"/"+r.APP_ENTITIES_NAME_NODE,r.APP_FIELDS_NODE="fields",r.APP_FIELDS=r.APP_ENTITIES+"/"+r.APP_FIELDS_NODE,r.APP_FIELDS_NAME_NODE="name",r.APP_FIELDS_NAME=r.APP_FIELDS+"/"+r.APP_FIELDS_NAME_NODE,r.APP_FIELDS_TYPE_NODE="type",r.APP_FIELDS_TYPE=r.APP_FIELDS+"/"+r.APP_FIELDS_TYPE_NODE,r.APP_SCREENS_NODE="screens",r.APP_SCREENS=r.ROOT+"/"+r.APP_SCREENS_NODE,r.APP_SCREENS_NAME_NODE="name",r.APP_SCREENS_NAME=r.APP_SCREENS+"/"+r.APP_SCREENS_NAME_NODE,r.APP_SCREENS_LAYOUT_NODE="layout",r.APP_SCREENS_LAYOUT=r.APP_SCREENS+"/"+r.APP_SCREENS_LAYOUT_NODE,r.APP_COMPONENTS_NODE="components",r.APP_COMPONENTS=r.APP_SCREENS+"/"+r.APP_COMPONENTS_NODE,r.APP_COMPONENTS_TYPE_NODE="type",r.APP_COMPONENTS_TYPE=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_TYPE_NODE,r.APP_COMPONENTS_ENTITY_NODE="entity",r.APP_COMPONENTS_ENTITY=r.APP_COMPONENTS+"/"+r.APP_COMPONENTS_ENTITY_NODE},"42at":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePreviewManager=void 0,t.DontCodePreviewManager=class{constructor(){this.handlersPerLocations=new Map}registerHandlers(e){e["preview-handlers"]&&e["preview-handlers"].forEach(e=>{this.handlersPerLocations.has(e.location.parent)?this.handlersPerLocations.get(e.location.parent).push(e):this.handlersPerLocations.set(e.location.parent,[e])})}retrieveHandlerConfig(e,t){const n=this.handlersPerLocations.get(e);let r=null;return n&&n.forEach(e=>{if(e.location.values){if(t){const n=t[e.location.id];e.location.values.forEach(t=>{t!==n||(r=e)})}}else null===r&&(r=e)}),r}}},AEcS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("D57K");r.__exportStar(n("YIYF"),t),r.__exportStar(n("o8N5"),t),r.__exportStar(n("3/dt"),t),r.__exportStar(n("umRR"),t),r.__exportStar(n("uq2N"),t),r.__exportStar(n("ZtqZ"),t),r.__exportStar(n("fY+t"),t),r.__exportStar(n("j6Vc"),t),r.__exportStar(n("IyG1"),t),r.__exportStar(n("JAlx"),t),r.__exportStar(n("a/xz"),t)},D57K:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return s})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return h})),n.d(t,"__generator",(function(){return u})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return p})),n.d(t,"__read",(function(){return f})),n.d(t,"__spread",(function(){return m})),n.d(t,"__spreadArrays",(function(){return g})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return v})),n.d(t,"__asyncValues",(function(){return _})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return x})),n.d(t,"__importDefault",(function(){return S})),n.d(t,"__classPrivateFieldGet",(function(){return k})),n.d(t,"__classPrivateFieldSet",(function(){return E}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function h(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function u(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function m(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e}function g(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,l):h(i[0][2],n)}catch(r){h(i[0][3],r)}var n}function c(e){a("next",e)}function l(e){a("throw",e)}function h(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function v(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:b(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function S(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function E(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},IyG1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},JAlx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},YIYF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodeCore=void 0;const r=n("ZtqZ"),o=n("fY+t"),i=n("42at");t.DontCodeCore=class{constructor(){this.schemaManager=new r.DontCodeSchemaManager,this.pluginManager=new o.DontCodePluginManager,this.previewManager=new i.DontCodePreviewManager}registerPlugin(e){this.pluginManager.registerPlugin(e,this.schemaManager,this.previewManager)}getSchemaUri(){return"schemas/v1/dont-code-schema.json"}getSchemaManager(){return this.schemaManager}getPreviewManager(){return this.previewManager}}},ZtqZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodeSchemaManager=void 0;const r=n("uq2N"),o=n("umRR");t.DontCodeSchemaManager=class{constructor(){this.readSchema=o.DontCodeSchema.defaultv1,this.currentSchema=this.convertSchemaToMap(this.readSchema)}getSchema(){return this.currentSchema}convertSchemaToMap(e){return new r.DontCodeSchemaRoot(e)}registerChanges(e){e["schema-updates"]&&e["schema-updates"].forEach(e=>{e.changes.forEach(e=>{if(e.location.id){const t=this.locateItem(e.location.parent);if(!t)throw"Cannot find parent element: "+e.location.parent;t.upsertWith(e)}})})}locateItem(e){const t=e.split("/");var n=this.currentSchema;return t.forEach(t=>{if(!n)return console.error("Could not find subItem "+t+" of "+e),n;t&&t.length>0&&"#"!==t&&(n=n.getChild(t))}),n}resolveReference(e){return this.locateItem(e.getReference())}generateSchemaPointer(e){const t=new o.DontCodeModelPointer(e,null,null,null,null,null),n=(e="/"===e[0]?e.substring(1):e).split("/");let r=this.currentSchema,i=!1;return n.forEach(n=>{if(i)t.itemId=n,i=!1;else{let o=r.getChild(n);if(null===o)throw new Error("Cannot parse '"+e+"' from the schema as "+n+" is not a child of "+r.getRelativeId());t.itemId=null,t.containerSchemaPosition=t.schemaPosition,t.schemaPosition=null!==t.schemaPosition?t.schemaPosition+"/"+n:n,i=!!o.isArray(),o.isReference()&&(o=this.resolveReference(o)),r=o}}),t.containerSchemaPosition=t.schemaPosition.substring(0,t.schemaPosition.lastIndexOf("/")),t.containerPosition=t.position.substring(0,t.position.lastIndexOf("/")),null===t.itemId&&(t.key=n[n.length-1]),t}}},"a/xz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCode=void 0;const r=n("YIYF");(t.DontCode||(t.DontCode={})).dtcde=new r.DontCodeCore},"fY+t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePluginManager=void 0,t.DontCodePluginManager=class{constructor(){this.plugins=new Map}registerPlugin(e,t,n){const r=e.getConfiguration();this.plugins.set(r.plugin.id+"-v"+r.plugin.version,e),t.registerChanges(r),n.registerHandlers(r)}}},j6Vc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},o8N5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeType=t.Change=void 0,t.Change=class{constructor(e,t,n,r){this.type=e,this.position=t,this.value=n,this.pointer=r}},t.ChangeType=function(e){return e.ADD="ADD",e.UPDATE="UPDATE",e.DELETE="DELETE",e.RESET="RESET",e}(t.ChangeType||{})},umRR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodeModelPointer=t.DontCodeSchema=void 0;const r=n("3/dt");class o{}t.DontCodeSchema=o,o.ROOT="/properties/"+r.DontCodeModel.ROOT,o.defaultv1={$id:"http://dont-code.net/dont-code-schema/v1",$schema:"http://json-schema.org/draft-07/schema#",description:"JSON Schema v1 for dont-code",type:"object",required:["creation"],properties:{creation:{type:"object",properties:{type:{enum:["application"]},name:{type:"string"},entities:{type:"array",items:{$ref:"#/definitions/entity"}},screens:{type:"array",items:{$ref:"#/definitions/screen"}}},additionalProperties:!1}},definitions:{entity:{type:"object",properties:{name:{type:"string"},fields:{type:"array",items:{$ref:"#/definitions/field"}}},additionalProperties:!1},field:{type:"object",properties:{name:{type:"string"},type:{enum:["string","number","boolean"]}},additionalProperties:!1},screen:{type:"object",properties:{name:{type:"string"},layout:{enum:["flow","grid"]},components:{type:"array",items:{$ref:"#/definitions/component"}}},additionalProperties:!1},component:{type:"object",properties:{type:{enum:["list","edit","view"]},entity:{type:"string",format:"#/creation/entities"}},additionalProperties:!1}}},t.DontCodeModelPointer=class{constructor(e,t,n,r,o,i){this.position=e,this.schemaPosition=t,this.containerPosition=n,this.containerSchemaPosition=r,this.key=o,this.itemId=i}}},uq2N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodeSchemaProperty=t.DontCodeSchemaRef=t.DontCodeSchemaValue=t.DontCodeSchemaEnum=t.DontCodeSchemaRoot=t.DontCodeSchemaObject=t.AbstractSchemaItem=void 0;class r{constructor(e,t){this.array=!1,this.parent=e,this.relativeId=t}isArray(){return this.array}setArray(e){this.array=e}isEnum(){return!1}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}static generateItem(e,t,n){let r,c=Array.isArray(e);if(c)return console.error("arrays are not supported",e),e;if(c=!1,e.type)switch(e.type){case"object":r=new o(e,t,n);break;case"array":r=this.generateItem(e.items,t,n),c=!0;break;default:r=new s(e,t,n)}else if(e.enum)r=new i(e,t,n);else{if(!e.$ref)return e;r=new a(e,t,n)}return r.setArray(c),r}static isObject(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}static goto(e,t){let n=e;return t.split("/").forEach(r=>{"#"!==r&&""!=r&&(n=n.getChild(r)),n||console.error("Cannot find "+r+" of "+t+" in the following item ",e)}),n}upsertWith(e){return!1}getParent(){return this.parent}getChild(e){}getChildren(){return(new Map).entries()}updateWith(e){}getProperties(e){}hasProperties(e){return!1}getRelativeId(){return this.relativeId}setRelativeId(e){this.relativeId=e}}t.AbstractSchemaItem=r;class o extends r{constructor(e,t,n){super(n,t),this.children=new Map,e&&this.readJson(e)}readJson(e){const t=e.properties;if(t)for(var n in t)this.children.set(n,r.generateItem(t[n],n,this));const o=e.definitions;if(o){const e=r.generateItem(o,"definitions",this);this.children.set("definitions",e)}}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!1}upsertWith(e){let t=this.getChild(e.location.id);if(!t)if(t=r.generateItem(e.add,e.location.id,this),e.location.after){let n=new Map;this.children.forEach((r,o)=>{n.set(o,r),o===e.location.after&&n.set(e.location.id,t)}),this.children=n}else this.children.set(e.location.id,t);return t.updateWith(e),!0}updateWith(e){super.updateWith(e)}getChild(e){return e?this.children.get(e):void 0}getChildren(){return this.children.entries()}}t.DontCodeSchemaObject=o,t.DontCodeSchemaRoot=class extends o{constructor(e){super(e,null)}readJson(e){super.readJson(e);const t=e.definitions;t&&this.children.set("definitions",new o({properties:t},"definitions",this))}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!0}};class i extends r{constructor(e,t,n){super(n,t),this.values=new Array,this.properties=new Map,this.values.push(...e.enum)}isEnum(){return!0}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}getValues(){return this.values}updateWith(e){super.updateWith(e),e.add.enum.forEach(t=>{if(-1==this.values.indexOf(t)&&this.values.push(t),e.props){const n=new c(e,this.relativeId+"="+t,this);n.isEmpty()||this.properties.set(t,n)}})}getProperties(e){return this.properties.get(e)}hasProperties(e){return this.properties.has(e)}}t.DontCodeSchemaEnum=i;class s extends r{constructor(e,t,n){super(n,t),this.type=e.type}isValue(){return!0}getType(){return this.type}}t.DontCodeSchemaValue=s;class a extends r{constructor(e,t,n){super(n,t),this.resolvedRef=new Map,this.ref=e.$ref}isReference(){return!0}getReference(){return this.ref}resolveReference(e){this.resolvedRef.set("",e)}getChildren(){return this.resolvedRef.entries()}}t.DontCodeSchemaRef=a;class c extends o{constructor(e,t,n){super({type:"object",properties:e.props},t,n),this.replace=e.replace,this.posAfter=e.location.after}isEmpty(){return 0==this.children.size}isReplace(){return this.replace}getPosAfter(){return this.posAfter}}t.DontCodeSchemaProperty=c},zUnb:function(e,t,n){"use strict";function r(e){return"function"==typeof e}n.r(t);let o=!1;const i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else o&&console.log("RxJS: Back to a better error behavior. Thank you. <3");o=e},get useDeprecatedSynchronousErrorHandling(){return o}};function s(e){setTimeout(()=>{throw e},0)}const a={closed:!0,next(e){},error(e){if(i.useDeprecatedSynchronousErrorHandling)throw e;s(e)},complete(){}},c=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))();function l(e){return null!==e&&"object"==typeof e}const h=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})();let u=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_ctorUnsubscribe:o,_unsubscribe:i,_subscriptions:s}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(let e=0;e<n.length;++e)n[e].remove(this);if(r(i)){o&&(this._unsubscribe=void 0);try{i.call(this)}catch(a){t=a instanceof h?d(a.errors):[a]}}if(c(s)){let e=-1,n=s.length;for(;++e<n;){const n=s[e];if(l(n))try{n.unsubscribe()}catch(a){t=t||[],a instanceof h?t=t.concat(d(a.errors)):t.push(a)}}}if(t)throw new h(t)}add(t){let n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){const t=n;n=new e,n._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:r}=n;if(null===r)n._parentOrParents=this;else if(r instanceof e){if(r===this)return n;n._parentOrParents=[r,this]}else{if(-1!==r.indexOf(this))return n;r.push(this)}const o=this._subscriptions;return null===o?this._subscriptions=[n]:o.push(n),n}remove(e){const t=this._subscriptions;if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}return e.EMPTY=function(e){return e.closed=!0,e}(new e),e})();function d(e){return e.reduce((e,t)=>e.concat(t instanceof h?t.errors:t),[])}const p=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class f extends u{constructor(e,t,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a;break;case 1:if(!e){this.destination=a;break}if("object"==typeof e){e instanceof f?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new m(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new m(this,e,t,n)}}[p](){return this}static create(e,t,n){const r=new f(e,t,n);return r.syncErrorThrowable=!1,r}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class m extends f{constructor(e,t,n,o){let i;super(),this._parentSubscriber=e;let s=this;r(t)?i=t:t&&(i=t.next,n=t.error,o=t.complete,t!==a&&(s=Object.create(t),r(s.unsubscribe)&&this.add(s.unsubscribe.bind(s)),s.unsubscribe=this.unsubscribe.bind(this))),this._context=s,this._next=i,this._error=n,this._complete=o}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;i.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:n}=i;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):s(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;s(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw n;s(n)}}__tryOrSetError(e,t,n){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(r){return i.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=r,e.syncErrorThrown=!0,!0):(s(r),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}const g=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function b(e){return e}let y=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const n=new e;return n.source=this,n.operator=t,n}subscribe(e,t,n){const{operator:r}=this,o=function(e,t,n){if(e){if(e instanceof f)return e;if(e[p])return e[p]()}return e||t||n?new f(e,t,n):new f(a)}(e,t,n);if(o.add(r?r.call(o,this.source):this.source||i.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),i.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o}_trySubscribe(e){try{return this._subscribe(e)}catch(t){i.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){const{closed:t,destination:n,isStopped:r}=e;if(t||r)return!1;e=n&&n instanceof f?n:null}return!0}(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=v(t))((t,n)=>{let r;r=this.subscribe(t=>{try{e(t)}catch(o){n(o),r&&r.unsubscribe()}},n,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[g](){return this}pipe(...e){return 0===e.length?this:(0===(t=e).length?b:1===t.length?t[0]:function(e){return t.reduce((e,t)=>t(e),e)})(this);var t}toPromise(e){return new(e=v(e))((e,t)=>{let n;this.subscribe(e=>n=e,e=>t(e),()=>e(n))})}}return e.create=t=>new e(t),e})();function v(e){if(e||(e=i.Promise||Promise),!e)throw new Error("no Promise impl found");return e}const _=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})();class w extends u{constructor(e,t){super(),this.subject=e,this.subscriber=t,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,t=e.observers;if(this.subject=null,!t||0===t.length||e.isStopped||e.closed)return;const n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}class x extends f{constructor(e){super(e),this.destination=e}}let S=(()=>{class e extends y{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[p](){return new x(this)}lift(e){const t=new k(this,this);return t.operator=e,t}next(e){if(this.closed)throw new _;if(!this.isStopped){const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].next(e)}}error(e){if(this.closed)throw new _;this.hasError=!0,this.thrownError=e,this.isStopped=!0;const{observers:t}=this,n=t.length,r=t.slice();for(let o=0;o<n;o++)r[o].error(e);this.observers.length=0}complete(){if(this.closed)throw new _;this.isStopped=!0;const{observers:e}=this,t=e.length,n=e.slice();for(let r=0;r<t;r++)n[r].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new _;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new _;return this.hasError?(e.error(this.thrownError),u.EMPTY):this.isStopped?(e.complete(),u.EMPTY):(this.observers.push(e),new w(this,e))}asObservable(){const e=new y;return e.source=this,e}}return e.create=(e,t)=>new k(e,t),e})();class k extends S{constructor(e,t){super(),this.destination=e,this.source=t}next(e){const{destination:t}=this;t&&t.next&&t.next(e)}error(e){const{destination:t}=this;t&&t.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:t}=this;return t?this.source.subscribe(e):u.EMPTY}}function E(e){return e&&"function"==typeof e.schedule}function C(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new O(e,t))}}class O{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new T(e,this.project,this.thisArg))}}class T extends f{constructor(e,t,n){super(e),this.project=t,this.count=0,this.thisArg=n||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}const P=e=>t=>{for(let n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()};function j(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const A=j(),I=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function R(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}const N=e=>{if(e&&"function"==typeof e[g])return r=e,e=>{const t=r[g]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(I(e))return P(e);if(R(e))return n=e,e=>(n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,s),e);if(e&&"function"==typeof e[A])return t=e,e=>{const n=t[A]();for(;;){let t;try{t=n.next()}catch(r){return e.error(r),e}if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e};{const t=l(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)}var t,n,r};function D(e,t){return new y(n=>{const r=new u;let o=0;return r.add(t.schedule((function(){o!==e.length?(n.next(e[o++]),n.closed||r.add(this.schedule())):n.complete()}))),r})}function M(e,t){return t?function(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[g]}(e))return function(e,t){return new y(n=>{const r=new u;return r.add(t.schedule(()=>{const o=e[g]();r.add(o.subscribe({next(e){r.add(t.schedule(()=>n.next(e)))},error(e){r.add(t.schedule(()=>n.error(e)))},complete(){r.add(t.schedule(()=>n.complete()))}}))})),r})}(e,t);if(R(e))return function(e,t){return new y(n=>{const r=new u;return r.add(t.schedule(()=>e.then(e=>{r.add(t.schedule(()=>{n.next(e),r.add(t.schedule(()=>n.complete()))}))},e=>{r.add(t.schedule(()=>n.error(e)))}))),r})}(e,t);if(I(e))return D(e,t);if(function(e){return e&&"function"==typeof e[A]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new y(n=>{const r=new u;let o;return r.add(()=>{o&&"function"==typeof o.return&&o.return()}),r.add(t.schedule(()=>{o=e[A](),r.add(t.schedule((function(){if(n.closed)return;let e,t;try{const n=o.next();e=n.value,t=n.done}catch(r){return void n.error(r)}t?n.complete():(n.next(e),this.schedule())})))})),r})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}(e,t):e instanceof y?e:new y(N(e))}class $ extends f{constructor(e){super(),this.parent=e}_next(e){this.parent.notifyNext(e)}_error(e){this.parent.notifyError(e),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class F extends f{notifyNext(e){this.destination.next(e)}notifyError(e){this.destination.error(e)}notifyComplete(){this.destination.complete()}}function L(e,t){if(!t.closed)return e instanceof y?e.subscribe(t):N(e)(t)}function H(e,t,n=Number.POSITIVE_INFINITY){return"function"==typeof t?r=>r.pipe(H((n,r)=>M(e(n,r)).pipe(C((e,o)=>t(n,e,r,o))),n)):("number"==typeof t&&(n=t),t=>t.lift(new B(e,n)))}class B{constructor(e,t=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=t}call(e,t){return t.subscribe(new z(e,this.project,this.concurrent))}}class z extends F{constructor(e,t,n=Number.POSITIVE_INFINITY){super(e),this.project=t,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this.active++,this._innerSub(t)}_innerSub(e){const t=new $(this),n=this.destination;n.add(t);const r=L(e,t);r!==t&&n.add(r)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e){this.destination.next(e)}notifyComplete(){const e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function U(e=Number.POSITIVE_INFINITY){return H(b,e)}function V(e,t){return t?D(e,t):new y(P(e))}function q(...e){let t=Number.POSITIVE_INFINITY,n=null,r=e[e.length-1];return E(r)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof r&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof y?e[0]:U(t)(V(e,n))}function W(){return function(e){return e.lift(new Q(e))}}class Q{constructor(e){this.connectable=e}call(e,t){const{connectable:n}=this;n._refCount++;const r=new K(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o}}class K extends f{constructor(e,t){super(e),this.connectable=t}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const t=e._refCount;if(t<=0)return void(this.connection=null);if(e._refCount=t-1,t>1)return void(this.connection=null);const{connection:n}=this,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}class G extends y{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new u,e.add(this.source.subscribe(new Y(this.getSubject(),this))),e.closed&&(this._connection=null,e=u.EMPTY)),e}refCount(){return W()(this)}}const Z=(()=>{const e=G.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class Y extends x{constructor(e,t){super(e),this.connectable=t}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}function J(){return new S}function X(e){return{toString:e}.toString()}function ee(e,t,n){return X(()=>{const r=function(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}(t);function o(...e){if(this instanceof o)return r.apply(this,e),this;const t=new o(...e);return n.annotation=t,n;function n(e,n,r){const o=e.hasOwnProperty("__parameters__")?e.__parameters__:Object.defineProperty(e,"__parameters__",{value:[]}).__parameters__;for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(t),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}const te=ee("Inject",e=>({token:e})),ne=ee("Optional"),re=ee("Self"),oe=ee("SkipSelf");var ie=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}({});function se(e){for(let t in e)if(e[t]===se)return t;throw Error("Could not find renamed property on target object.")}function ae(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}function ce(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function le(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function he(e){return ue(e,e[pe])||ue(e,e[ge])}function ue(e,t){return t&&t.token===e?t:null}function de(e){return e&&(e.hasOwnProperty(fe)||e.hasOwnProperty(be))?e[fe]:null}const pe=se({\u0275prov:se}),fe=se({\u0275inj:se}),me=se({\u0275provFallback:se}),ge=se({ngInjectableDef:se}),be=se({ngInjectorDef:se});function ye(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(ye).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ve(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}const _e=se({__forward_ref__:se});function we(e){return e.__forward_ref__=we,e.toString=function(){return ye(this())},e}function xe(e){return Se(e)?e():e}function Se(e){return"function"==typeof e&&e.hasOwnProperty(_e)&&e.__forward_ref__===we}const ke="undefined"!=typeof globalThis&&globalThis,Ee="undefined"!=typeof window&&window,Ce="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Oe="undefined"!=typeof global&&global,Te=ke||Oe||Ee||Ce,Pe=se({\u0275cmp:se}),je=se({\u0275dir:se}),Ae=se({\u0275pipe:se}),Ie=se({\u0275mod:se}),Re=se({\u0275loc:se}),Ne=se({\u0275fac:se}),De=se({__NG_ELEMENT_ID__:se});class Me{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=ce({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return"InjectionToken "+this._desc}}const $e=new Me("INJECTOR",-1),Fe={},Le=/\n/gm,He=se({provide:String,useValue:se});let Be,ze=void 0;function Ue(e){const t=ze;return ze=e,t}function Ve(e){const t=Be;return Be=e,t}function qe(e,t=ie.Default){if(void 0===ze)throw new Error("inject() must be called from an injection context");return null===ze?Ke(e,void 0,t):ze.get(e,t&ie.Optional?null:void 0,t)}function We(e,t=ie.Default){return(Be||qe)(xe(e),t)}const Qe=We;function Ke(e,t,n){const r=he(e);if(r&&"root"==r.providedIn)return void 0===r.value?r.value=r.factory():r.value;if(n&ie.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${ye(e)}]`)}function Ge(e){const t=[];for(let n=0;n<e.length;n++){const r=xe(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=ie.Default;for(let t=0;t<r.length;t++){const o=r[t];o instanceof ne||"Optional"===o.ngMetadataName||o===ne?n|=ie.Optional:o instanceof oe||"SkipSelf"===o.ngMetadataName||o===oe?n|=ie.SkipSelf:o instanceof re||"Self"===o.ngMetadataName||o===re?n|=ie.Self:e=o instanceof te||o===te?o.token:o}t.push(We(e,n))}else t.push(We(r))}return t}class Ze{get(e,t=Fe){if(t===Fe){const t=new Error(`NullInjectorError: No provider for ${ye(e)}!`);throw t.name="NullInjectorError",t}return t}}class Ye{}class Je{}function Xe(e,t){e.forEach(e=>Array.isArray(e)?Xe(e,t):t(e))}function et(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function tt(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}var nt=function(e){return e[e.OnPush=0]="OnPush",e[e.Default=1]="Default",e}({}),rt=function(e){return e[e.Emulated=0]="Emulated",e[e.Native=1]="Native",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",e}({});const ot={},it=[];let st=0;function at(e){return X(()=>{const t={},n={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:t,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===nt.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||it,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||rt.Emulated,id:"c",styles:e.styles||it,_:null,setInput:null,schemas:e.schemas||null,tView:null},r=e.directives,o=e.features,i=e.pipes;return n.id+=st++,n.inputs=dt(e.inputs,t),n.outputs=dt(e.outputs),o&&o.forEach(e=>e(n)),n.directiveDefs=r?()=>("function"==typeof r?r():r).map(ct):null,n.pipeDefs=i?()=>("function"==typeof i?i():i).map(lt):null,n})}function ct(e){return mt(e)||function(e){return e[je]||null}(e)}function lt(e){return function(e){return e[Ae]||null}(e)}const ht={};function ut(e){const t={type:e.type,bootstrap:e.bootstrap||it,declarations:e.declarations||it,imports:e.imports||it,exports:e.exports||it,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&X(()=>{ht[e.id]=e.type}),t}function dt(e,t){if(null==e)return ot;const n={};for(const r in e)if(e.hasOwnProperty(r)){let o=e[r],i=o;Array.isArray(o)&&(i=o[1],o=o[0]),n[o]=r,t&&(t[o]=i)}return n}const pt=at;function ft(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function mt(e){return e[Pe]||null}function gt(e,t){return e.hasOwnProperty(Ne)?e[Ne]:null}function bt(e,t){const n=e[Ie]||null;if(!n&&!0===t)throw new Error(`Type ${ye(e)} does not have '\u0275mod' property.`);return n}function yt(e){return Array.isArray(e)&&"object"==typeof e[1]}function vt(e){return Array.isArray(e)&&!0===e[1]}function _t(e){return 0!=(8&e.flags)}function wt(e){return 2==(2&e.flags)}function xt(e){return 1==(1&e.flags)}function St(e){return null!==e.template}function kt(e){return 0!=(512&e[2])}function Et(e){return"string"==typeof e?e:null==e?"":""+e}function Ct(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():Et(e)}const Ot=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Te))();function Tt(e){return e instanceof Function?e():e}function Pt(e,t){const n=t?" in "+t:"";throw new Error(`No provider for ${Ct(e)} found${n}`)}class jt{constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}}function At(){return It}function It(e){return e.type.prototype.ngOnChanges&&(e.setInput=Nt),Rt}function Rt(){const e=Dt(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===ot)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}}function Nt(e,t,n,r){const o=Dt(e)||function(e,t){return e.__ngSimpleChanges__=t}(e,{previous:ot,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],c=s[a];i[a]=new jt(c&&c.currentValue,t,s===ot),e[r]=t}function Dt(e){return e.__ngSimpleChanges__||null}At.ngInherit=!0;let Mt=void 0;function $t(e){return!!e.listen}const Ft={createRenderer:(e,t)=>void 0!==Mt?Mt:"undefined"!=typeof document?document:void 0};function Lt(e){for(;Array.isArray(e);)e=e[0];return e}function Ht(e,t){return Lt(t[e.index])}function Bt(e,t){return e.data[t+20]}function zt(e,t){const n=t[e];return yt(n)?n:n[0]}function Ut(e){const t=function(e){return e.__ngContext__||null}(e);return t?Array.isArray(t)?t:t.lView:null}function Vt(e){return 4==(4&e[2])}function qt(e){return 128==(128&e[2])}function Wt(e,t){return null===e||null==t?null:e[t]}function Qt(e){e[18]=0}function Kt(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]}const Gt={lFrame:bn(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Zt(){return Gt.bindingsEnabled}function Yt(){return Gt.lFrame.lView}function Jt(){return Gt.lFrame.tView}function Xt(e){Gt.lFrame.contextLView=e}function en(){return Gt.lFrame.currentTNode}function tn(e,t){Gt.lFrame.currentTNode=e,Gt.lFrame.isParent=t}function nn(){return Gt.lFrame.isParent}function rn(){Gt.lFrame.isParent=!1}function on(){return Gt.isInCheckNoChangesMode}function sn(e){Gt.isInCheckNoChangesMode=e}function an(){return Gt.lFrame.bindingIndex}function cn(){return Gt.lFrame.bindingIndex++}function ln(e){const t=Gt.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function hn(e,t){const n=Gt.lFrame;n.bindingIndex=n.bindingRootIndex=e,un(t)}function un(e){Gt.lFrame.currentDirectiveIndex=e}function dn(){return Gt.lFrame.currentQueryIndex}function pn(e){Gt.lFrame.currentQueryIndex=e}function fn(e,t){const n=gn();Gt.lFrame=n,n.currentTNode=t,n.lView=e}function mn(e){const t=gn(),n=e[1];Gt.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex}function gn(){const e=Gt.lFrame,t=null===e?null:e.child;return null===t?bn(e):t}function bn(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return null!==e&&(e.child=t),t}function yn(){const e=Gt.lFrame;return Gt.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const vn=yn;function _n(){const e=yn();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function wn(){return Gt.lFrame.selectedIndex}function xn(e){Gt.lFrame.selectedIndex=e}function Sn(){const e=Gt.lFrame;return Bt(e.tView,e.selectedIndex)}function kn(e,t){for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:o,ngAfterViewInit:i,ngAfterViewChecked:s,ngOnDestroy:a}=t;r&&(e.contentHooks||(e.contentHooks=[])).push(-n,r),o&&((e.contentHooks||(e.contentHooks=[])).push(n,o),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,o)),i&&(e.viewHooks||(e.viewHooks=[])).push(-n,i),s&&((e.viewHooks||(e.viewHooks=[])).push(n,s),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,s)),null!=a&&(e.destroyHooks||(e.destroyHooks=[])).push(n,a)}}function En(e,t,n){Tn(e,t,3,n)}function Cn(e,t,n,r){(3&e[2])===n&&Tn(e,t,n,r)}function On(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function Tn(e,t,n,r){const o=null!=r?r:-1;let i=0;for(let s=void 0!==r?65535&e[18]:0;s<t.length;s++)if("number"==typeof t[s+1]){if(i=t[s],null!=r&&i>=r)break}else t[s]<0&&(e[18]+=65536),(i<o||-1==o)&&(Pn(e,n,t,s),e[18]=(4294901760&e[18])+s+2),s++}function Pn(e,t,n,r){const o=n[r]<0,i=n[r+1],s=e[o?-n[r]:n[r]];o?e[2]>>11<e[18]>>16&&(3&e[2])===t&&(e[2]+=2048,i.call(s)):i.call(s)}class jn{constructor(e,t,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=n}}function An(e,t,n){const r=$t(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],c=n[o++];r?e.setAttribute(t,a,c,s):t.setAttributeNS(s,a,c)}else{const s=i,a=n[++o];Rn(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function In(e){return 3===e||4===e||6===e}function Rn(e){return 64===e.charCodeAt(0)}function Nn(e,t){if(null===t||0===t.length);else if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let r=0;r<t.length;r++){const o=t[r];"number"==typeof o?n=o:0===n||Dn(e,n,o,null,-1===n||2===n?t[++r]:null)}}return e}function Dn(e,t,n,r,o){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const n=e[i++];if("number"==typeof n){if(n===t){s=-1;break}if(n>t){s=i-1;break}}}for(;i<e.length;){const t=e[i];if("number"==typeof t)break;if(t===n){if(null===r)return void(null!==o&&(e[i+1]=o));if(r===e[i+1])return void(e[i+2]=o)}i++,null!==r&&i++,null!==o&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==r&&e.splice(i++,0,r),null!==o&&e.splice(i++,0,o)}function Mn(e){return-1!==e}function $n(e){return 32767&e}function Fn(e,t){let n=e>>16,r=t;for(;n>0;)r=r[15],n--;return r}let Ln=!0;function Hn(e){const t=Ln;return Ln=e,t}let Bn=0;function zn(e,t){const n=Vn(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Un(r.data,e),Un(t,null),Un(r.blueprint,null));const o=qn(e,t),i=e.injectorIndex;if(Mn(o)){const e=$n(o),n=Fn(o,t),r=n[1].data;for(let o=0;o<8;o++)t[i+o]=n[e+o]|r[e+o]}return t[i+8]=o,i}function Un(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Vn(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function qn(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const e=o[1],t=e.type;if(r=2===t?e.declTNode:1===t?o[6]:null,null===r)return-1;if(n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Wn(e,t,n){!function(e,t,n){let r;"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(De)&&(r=n[De]),null==r&&(r=n[De]=Bn++);const o=255&r,i=1<<o,s=64&o,a=32&o,c=t.data;128&o?s?a?c[e+7]|=i:c[e+6]|=i:a?c[e+5]|=i:c[e+4]|=i:s?a?c[e+3]|=i:c[e+2]|=i:a?c[e+1]|=i:c[e]|=i}(e,t,n)}function Qn(e,t,n,r=ie.Default,o){if(null!==e){const o=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(De)?e[De]:void 0;return"number"==typeof t&&t>0?255&t:t}(n);if("function"==typeof o){fn(t,e);try{const e=o();if(null!=e||r&ie.Optional)return e;Pt(n)}finally{vn()}}else if("number"==typeof o){if(-1===o)return new er(e,t);let i=null,s=Vn(e,t),a=-1,c=r&ie.Host?t[16][6]:null;for((-1===s||r&ie.SkipSelf)&&(a=-1===s?qn(e,t):t[s+8],-1!==a&&Xn(r,!1)?(i=t[1],s=$n(a),t=Fn(a,t)):s=-1);-1!==s;){const e=t[1];if(Jn(o,s,e.data)){const e=Gn(s,t,n,i,r,c);if(e!==Kn)return e}a=t[s+8],-1!==a&&Xn(r,t[1].data[s+8]===c)&&Jn(o,s,t)?(i=e,s=$n(a),t=Fn(a,t)):s=-1}}}if(r&ie.Optional&&void 0===o&&(o=null),0==(r&(ie.Self|ie.Host))){const e=t[9],i=Ve(void 0);try{return e?e.get(n,o,r&ie.Optional):Ke(n,o,r&ie.Optional)}finally{Ve(i)}}if(r&ie.Optional)return o;Pt(n,"NodeInjector")}const Kn={};function Gn(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=Zn(a,s,n,null==r?wt(a)&&Ln:r!=s&&2===a.type,o&ie.Host&&i===a);return null!==c?Yn(t,s,c,a):Kn}function Zn(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,c=e.directiveStart,l=i>>20,h=o?a+l:e.directiveEnd;for(let u=r?a:a+l;u<h;u++){const e=s[u];if(u<c&&n===e||u>=c&&e.type===n)return u}if(o){const e=s[c];if(e&&St(e)&&e.type===n)return c}return null}function Yn(e,t,n,r){let o=e[n];const i=t.data;if(o instanceof jn){const s=o;s.resolving&&function(e,t){throw new Error("Circular dependency in DI detected for "+e)}(Ct(i[n]));const a=Hn(s.canSeeViewProviders);s.resolving=!0;const c=s.injectImpl?Ve(s.injectImpl):null;fn(e,r);try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&function(e,t,n){const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const r=It(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{null!==c&&Ve(c),Hn(a),s.resolving=!1,vn()}}return o}function Jn(e,t,n){const r=64&e,o=32&e;let i;return i=128&e?r?o?n[t+7]:n[t+6]:o?n[t+5]:n[t+4]:r?o?n[t+3]:n[t+2]:o?n[t+1]:n[t],!!(i&1<<e)}function Xn(e,t){return!(e&ie.Self||e&ie.Host&&t)}class er{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return Qn(this._tNode,this._lView,e,void 0,t)}}function tr(e){const t=e;if(Se(e))return()=>{const e=tr(xe(t));return e?e():null};let n=gt(t);if(null===n){const e=de(t);n=e&&e.factory}return n||null}function nr(e){return X(()=>{const t=e.prototype.constructor,n=t[Ne]||tr(t),r=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==r;){const e=o[Ne]||tr(o);if(e&&e!==n)return e;o=Object.getPrototypeOf(o)}return e=>new e})}function rr(e){return e.ngDebugContext}function or(e){return e.ngOriginalError}function ir(e,...t){e.error(...t)}class sr{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||ir}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?rr(e)?rr(e):this._findContext(or(e)):null}_findOriginalError(e){let t=or(e);for(;t&&or(t);)t=or(t);return t}}let ar=!0,cr=!1;function lr(){return cr=!0,ar}function hr(e,t){e.__ngContext__=t}function ur(e,t,n){let r=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const n=t.length;if(o+n===r||e.charCodeAt(o+n)<=32)return o}n=o+1}}function dr(e,t,n){let r=0;for(;r<e.length;){let o=e[r++];if(n&&"class"===o){if(o=e[r],-1!==ur(o.toLowerCase(),t,0))return!0}else if(1===o){for(;r<e.length&&"string"==typeof(o=e[r++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function pr(e){return 0===e.type&&"ng-template"!==e.tagName}function fr(e,t,n){return t===(0!==e.type||n?e.tagName:"ng-template")}function mr(e,t,n){let r=4;const o=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(In(e[t]))return t;return e.length}(o);let s=!1;for(let a=0;a<t.length;a++){const c=t[a];if("number"!=typeof c){if(!s)if(4&r){if(r=2|1&r,""!==c&&!fr(e,c,n)||""===c&&1===t.length){if(gr(r))return!1;s=!0}}else{const l=8&r?c:t[++a];if(8&r&&null!==e.attrs){if(!dr(e.attrs,l,n)){if(gr(r))return!1;s=!0}continue}const h=br(8&r?"class":c,o,pr(e),n);if(-1===h){if(gr(r))return!1;s=!0;continue}if(""!==l){let e;e=h>i?"":o[h+1].toLowerCase();const t=8&r?e:null;if(t&&-1!==ur(t,l,0)||2&r&&l!==e){if(gr(r))return!1;s=!0}}}}else{if(!s&&!gr(r)&&!gr(c))return!1;if(s&&gr(c))continue;s=!1,r=c|1&r}}return gr(r)||s}function gr(e){return 0==(1&e)}function br(e,t,n,r){if(null===t)return-1;let o=0;if(r||!n){let n=!1;for(;o<t.length;){const r=t[o];if(r===e)return o;if(3===r||6===r)n=!0;else{if(1===r||2===r){let e=t[++o];for(;"string"==typeof e;)e=t[++o];continue}if(4===r)break;if(0===r){o+=4;continue}}o+=n?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const r=e[n];if("number"==typeof r)return-1;if(r===t)return n;n++}return-1}(t,e)}function yr(e,t,n=!1){for(let r=0;r<t.length;r++)if(mr(e,t[r],n))return!0;return!1}function vr(e,t){return e?":not("+t.trim()+")":t}function _r(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const t=e[++n];o+="["+s+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||gr(s)||(t+=vr(i,o),o=""),r=s,i=i||!gr(r);n++}return""!==o&&(t+=vr(i,o)),t}const wr={};function xr(e){const t=e[3];return vt(t)?t[3]:t}function Sr(e){return Er(e[13])}function kr(e){return Er(e[4])}function Er(e){for(;null!==e&&!vt(e);)e=e[4];return e}function Cr(e){Or(Jt(),Yt(),wn()+e,on())}function Or(e,t,n,r){if(!r)if(3==(3&t[2])){const r=e.preOrderCheckHooks;null!==r&&En(t,r,n)}else{const r=e.preOrderHooks;null!==r&&Cn(t,r,0,n)}xn(n)}function Tr(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=e.data[i];pn(o),n.contentQueries(2,t[i],i)}}}function Pr(e,t,n){return $t(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function jr(e,t,n,r,o,i,s,a,c,l){const h=t.blueprint.slice();return h[0]=o,h[2]=140|r,Qt(h),h[3]=h[15]=e,h[8]=n,h[10]=s||e&&e[10],h[11]=a||e&&e[11],h[12]=c||e&&e[12]||null,h[9]=l||e&&e[9]||null,h[6]=i,h[16]=2==t.type?e[16]:h,h}function Ar(e,t,n,r,o){const i=t+20,s=e.data[i]||function(e,t,n,r,o){const i=en(),s=nn(),a=e.data[t]=function(e,t,n,r,o,i){return{type:n,index:r,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,s?i:i&&i.parent,n,t,r,o);return null===e.firstChild&&(e.firstChild=a),null!==i&&(s&&null==i.child&&null!==a.parent?i.child=a:s||(i.next=a)),a}(e,i,n,r,o);return tn(s,!0),s}function Ir(e,t,n){mn(t);try{const r=e.viewQuery;null!==r&&lo(1,r,n);const o=e.template;null!==o&&Dr(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Tr(e,t),e.staticViewQueries&&lo(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)oo(e,t[n])}(t,i)}catch(r){throw e.firstCreatePass&&(e.incompleteFirstPass=!0),r}finally{t[2]&=-5,_n()}}function Rr(e,t,n,r){const o=t[2];if(256==(256&o))return;mn(t);const i=on();try{Qt(t),Gt.lFrame.bindingIndex=e.bindingStartIndex,null!==n&&Dr(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const n=e.preOrderCheckHooks;null!==n&&En(t,n,null)}else{const n=e.preOrderHooks;null!==n&&Cn(t,n,0,null),On(t,0)}if(function(e){for(let t=Sr(e);null!==t;t=kr(t)){if(!t[2])continue;const e=t[9];for(let t=0;t<e.length;t++){const n=e[t],r=n[3];0==(1024&n[2])&&Kt(r,1),n[2]|=1024}}}(t),function(e){for(let t=Sr(e);null!==t;t=kr(t))for(let e=10;e<t.length;e++){const n=t[e],r=n[1];qt(n)&&Rr(r,n,r.template,n[8])}}(t),null!==e.contentQueries&&Tr(e,t),!i)if(s){const n=e.contentCheckHooks;null!==n&&En(t,n)}else{const n=e.contentHooks;null!==n&&Cn(t,n,1),On(t,1)}!function(e,t){try{const n=e.expandoInstructions;if(null!==n){let r=e.expandoStartIndex,o=-1,i=-1;for(let e=0;e<n.length;e++){const s=n[e];"number"==typeof s?s<=0?(i=0-s,xn(i),r+=9+n[++e],o=r):r+=s:(null!==s&&(hn(r,o),s(2,t[o])),o++)}}}finally{xn(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)ro(e,t[n])}(t,a);const c=e.viewQuery;if(null!==c&&lo(2,c,r),!i)if(s){const n=e.viewCheckHooks;null!==n&&En(t,n)}else{const n=e.viewHooks;null!==n&&Cn(t,n,2),On(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,Kt(t[3],-1))}finally{_n()}}function Nr(e,t,n,r){const o=t[10],i=!on(),s=Vt(t);try{i&&!s&&o.begin&&o.begin(),s&&Ir(e,t,r),Rr(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function Dr(e,t,n,r,o){const i=wn();try{xn(-1),2&r&&t.length>20&&Or(e,t,0,on()),n(r,o)}finally{xn(i)}}function Mr(e,t,n){if(_t(t)){const r=t.directiveEnd;for(let o=t.directiveStart;o<r;o++){const t=e.data[o];t.contentQueries&&t.contentQueries(1,n[o],o)}}}function $r(e,t,n){Zt()&&(function(e,t,n,r){const o=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||zn(n,t),hr(r,t);const s=n.initialInputs;for(let a=o;a<i;a++){const r=e.data[a],i=St(r);i&&Xr(t,n,r);const c=Yn(t,e,a,n);hr(c,t),null!==s&&eo(0,a-o,c,r,0,s),i&&(zt(n.index,t)[8]=c)}}(e,t,n,Ht(n,t)),128==(128&n.flags)&&function(e,t,n){const r=n.directiveStart,o=n.directiveEnd,i=e.expandoInstructions,s=e.firstCreatePass,a=n.index-20,c=Gt.lFrame.currentDirectiveIndex;try{xn(a);for(let n=r;n<o;n++){const r=e.data[n],o=t[n];un(n),null!==r.hostBindings||0!==r.hostVars||null!==r.hostAttrs?Qr(r,o):s&&i.push(null)}}finally{xn(-1),un(c)}}(e,t,n))}function Fr(e,t,n=Ht){const r=t.localNames;if(null!==r){let o=t.index+1;for(let i=0;i<r.length;i+=2){const s=r[i+1],a=-1===s?n(t,e):e[s];e[o++]=a}}}function Lr(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Hr(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Hr(e,t,n,r,o,i,s,a,c,l){const h=20+r,u=h+o,d=function(e,t){const n=[];for(let r=0;r<t;r++)n.push(r<e?null:wr);return n}(h,u),p="function"==typeof l?l():l;return d[1]={type:e,blueprint:d,template:n,queries:null,viewQuery:a,declTNode:t,data:d.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:u,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:c,consts:p,incompleteFirstPass:!1}}function Br(e,t,n,r){const o=uo(t);o.push(n),e.firstCreatePass&&function(e){return e.cleanup||(e.cleanup=[])}(e).push(r,o.length-1)}function zr(e,t,n){for(let r in e)if(e.hasOwnProperty(r)){const o=e[r];(n=null===n?{}:n).hasOwnProperty(r)?n[r].push(t,o):n[r]=[t,o]}return n}function Ur(e,t,n,r,o,i,s,a){const c=Ht(t,n);let l,h=t.inputs;var u;!a&&null!=h&&(l=h[r])?(fo(e,n,l,r,o),wt(t)&&function(e,t){const n=zt(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):2===t.type&&(r="class"===(u=r)?"className":"for"===u?"htmlFor":"formaction"===u?"formAction":"innerHtml"===u?"innerHTML":"readonly"===u?"readOnly":"tabindex"===u?"tabIndex":u,o=null!=s?s(o,t.tagName||"",r):o,$t(i)?i.setProperty(c,r,o):Rn(r)||(c.setProperty?c.setProperty(r,o):c[r]=o))}function Vr(e,t,n,r){let o=!1;if(Zt()){const i=function(e,t,n){const r=e.directiveRegistry;let o=null;if(r)for(let i=0;i<r.length;i++){const s=r[i];yr(n,s.selectors,!1)&&(o||(o=[]),Wn(zn(n,t),e,s.type),St(s)?(Gr(e,n),o.unshift(s)):o.push(s))}return o}(e,t,n),s=null===r?null:{"":-1};if(null!==i){let r=0;o=!0,Yr(n,e.data.length,i.length);for(let e=0;e<i.length;e++){const t=i[e];t.providersResolver&&t.providersResolver(t)}Kr(e,n,i.length);let a=!1,c=!1;for(let o=0;o<i.length;o++){const l=i[o];n.mergedAttrs=Nn(n.mergedAttrs,l.hostAttrs),Jr(e,t,l),Zr(e.data.length-1,l,s),null!==l.contentQueries&&(n.flags|=8),null===l.hostBindings&&null===l.hostAttrs&&0===l.hostVars||(n.flags|=128);const h=l.type.prototype;!a&&(h.ngOnChanges||h.ngOnInit||h.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index-20),a=!0),c||!h.ngOnChanges&&!h.ngDoCheck||((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index-20),c=!0),qr(e,l),r+=l.hostVars}!function(e,t){const n=t.directiveEnd,r=e.data,o=t.attrs,i=[];let s=null,a=null;for(let c=t.directiveStart;c<n;c++){const e=r[c],n=e.inputs,l=null===o||pr(t)?null:to(n,o);i.push(l),s=zr(n,c,s),a=zr(e.outputs,c,a)}null!==s&&(s.hasOwnProperty("class")&&(t.flags|=16),s.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=i,t.inputs=s,t.outputs=a}(e,n),Wr(e,t,r)}s&&function(e,t,n){if(t){const r=e.localNames=[];for(let e=0;e<t.length;e+=2){const o=n[t[e+1]];if(null==o)throw new Error(`Export of name '${t[e+1]}' not found!`);r.push(t[e],o)}}}(n,r,s)}return n.mergedAttrs=Nn(n.mergedAttrs,n.attrs),o}function qr(e,t){const n=e.expandoInstructions;n.push(t.hostBindings),0!==t.hostVars&&n.push(t.hostVars)}function Wr(e,t,n){for(let r=0;r<n;r++)t.push(wr),e.blueprint.push(wr),e.data.push(null)}function Qr(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Kr(e,t,n){const r=20-t.index,o=e.data.length-(1048575&t.providerIndexes);(e.expandoInstructions||(e.expandoInstructions=[])).push(r,o,n)}function Gr(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Zr(e,t,n){if(n){if(t.exportAs)for(let r=0;r<t.exportAs.length;r++)n[t.exportAs[r]]=e;St(t)&&(n[""]=e)}}function Yr(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Jr(e,t,n){e.data.push(n);const r=n.factory||(n.factory=gt(n.type)),o=new jn(r,St(n),null);e.blueprint.push(o),t.push(o)}function Xr(e,t,n){const r=Ht(t,e),o=Lr(n),i=e[10],s=io(e,jr(e,o,null,n.onPush?64:16,r,t,i,i.createRenderer(r,n),null,null));e[t.index]=s}function eo(e,t,n,r,o,i){const s=i[t];if(null!==s){const e=r.setInput;for(let t=0;t<s.length;){const o=s[t++],i=s[t++],a=s[t++];null!==e?r.setInput(n,a,o,i):n[i]=a}}}function to(e,t){let n=null,r=0;for(;r<t.length;){const o=t[r];if(0!==o)if(5!==o){if("number"==typeof o)break;e.hasOwnProperty(o)&&(null===n&&(n=[]),n.push(o,e[o],t[r+1])),r+=2}else r+=2;else r+=4}return n}function no(e,t,n,r){return new Array(e,!0,!1,t,null,0,r,n,null,null)}function ro(e,t){const n=zt(t,e);if(qt(n)){const e=n[1];80&n[2]?Rr(e,n,e.template,n[8]):n[5]>0&&function e(t){for(let r=Sr(t);null!==r;r=kr(r))for(let t=10;t<r.length;t++){const n=r[t];if(1024&n[2]){const e=n[1];Rr(e,n,e.template,n[8])}else n[5]>0&&e(n)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=zt(n[r],t);qt(o)&&o[5]>0&&e(o)}}(n)}}function oo(e,t){const n=zt(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),Ir(r,n,n[8])}function io(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function so(e){for(;e;){e[2]|=64;const t=xr(e);if(kt(e)&&!t)return e;e=t}return null}function ao(e,t,n){const r=t[10];r.begin&&r.begin();try{Rr(e,t,e.template,n)}catch(o){throw po(t,o),o}finally{r.end&&r.end()}}function co(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=Ut(n),o=r[1];Nr(o,r,o.template,n)}}(e[8])}function lo(e,t,n){pn(0),t(e,n)}const ho=(()=>Promise.resolve(null))();function uo(e){return e[7]||(e[7]=[])}function po(e,t){const n=e[9],r=n?n.get(sr,null):null;r&&r.handleError(t)}function fo(e,t,n,r,o){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],c=t[s],l=e.data[s];null!==l.setInput?l.setInput(c,o,r,a):c[a]=o}}function mo(e,t,n){const r=function(e,t){return Lt(t[e+20])}(t,e),o=e[11];$t(o)?o.setValue(r,n):r.textContent=n}function go(e,t,n,r,o){if(null!=r){let i,s=!1;vt(r)?i=r:yt(r)&&(s=!0,r=r[0]);const a=Lt(r);0===e&&null!==n?null==o?xo(t,n,a):wo(t,n,a,o||null):1===e&&null!==n?wo(t,n,a,o||null):2===e?function(e,t,n){const r=ko(e,t);r&&function(e,t,n,r){$t(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,r,o){const i=n[7];i!==Lt(n)&&go(t,e,r,i,o);for(let s=10;s<n.length;s++){const o=n[s];Oo(o[1],o,e,t,r,i)}}(t,e,i,n,o)}}function bo(e,t){const n=e[9],r=n.indexOf(t),o=t[3];1024&t[2]&&(t[2]&=-1025,Kt(o,-1)),n.splice(r,1)}function yo(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const i=r[17];null!==i&&i!==e&&bo(i,r),t>0&&(e[n-1][4]=r[4]);const s=tt(e,10+t);Oo(r[1],o=r,o[11],2,null,null),o[0]=null,o[6]=null;const a=s[19];null!==a&&a.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-129}var o;return r}function vo(e,t){if(!(256&t[2])){const n=t[11];$t(n)&&n.destroyNode&&Oo(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return _o(e[1],e);for(;t;){let n=null;if(yt(t))n=t[13];else{const e=t[10];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)yt(t)&&_o(t[1],t),t=t[3];null===t&&(t=e),yt(t)&&_o(t[1],t),n=t&&t[4]}t=n}}(t)}}function _o(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let r=0;r<n.length;r+=2){const e=t[n[r]];if(!(e instanceof jn)){const t=n[r+1];if(Array.isArray(t))for(let n=0;n<t.length;n+=2)t[n+1].call(e[t[n]]);else t.call(e)}}}(e,t),function(e,t){const n=e.cleanup;if(null!==n){const e=t[7];for(let r=0;r<n.length-1;r+=2)if("string"==typeof n[r]){const o=n[r+1],i="function"==typeof o?o(t):Lt(t[o]),s=e[n[r+2]],a=n[r+3];"boolean"==typeof a?i.removeEventListener(n[r],s,a):a>=0?e[a]():e[-a].unsubscribe(),r+=2}else n[r].call(e[n[r+1]]);t[7]=null}}(e,t),1===t[1].type&&$t(t[11])&&t[11].destroy();const n=t[17];if(null!==n&&vt(t[3])){n!==t[3]&&bo(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function wo(e,t,n,r){$t(e)?e.insertBefore(t,n,r):t.insertBefore(n,r,!0)}function xo(e,t,n){$t(e)?e.appendChild(t,n):t.appendChild(n)}function So(e,t,n,r){null!==r?wo(e,t,n,r):xo(e,t,n)}function ko(e,t){return $t(e)?e.parentNode(t):t.parentNode}function Eo(e,t,n,r){const o=function(e,t,n){let r=t.parent;for(;null!=r&&(3===r.type||4===r.type);)r=(t=r).parent;if(null===r)return n[0];if(t&&4===t.type&&4&t.flags)return Ht(t,n).parentNode;if(2&r.flags){const t=e.data,n=t[t[r.index].directiveStart].encapsulation;if(n!==rt.ShadowDom&&n!==rt.Native)return null}return Ht(r,n)}(e,r,t);if(null!=o){const e=t[11],i=function(e,t){return 3===e.type||4===e.type?Ht(e,t):null}(r.parent||t[6],t);if(Array.isArray(n))for(let t=0;t<n.length;t++)So(e,o,n[t],i);else So(e,o,n,i)}}function Co(e,t,n,r,o,i,s){for(;null!=n;){const a=r[n.index],c=n.type;s&&0===t&&(a&&hr(Lt(a),r),n.flags|=4),64!=(64&n.flags)&&(3===c||4===c?(Co(e,t,n.child,r,o,i,!1),go(t,e,o,a,i)):1===c?To(e,t,r,n,o,i):go(t,e,o,a,i)),n=s?n.projectionNext:n.next}}function Oo(e,t,n,r,o,i){Co(n,r,e.firstChild,t,o,i,!1)}function To(e,t,n,r,o,i){const s=n[16],a=s[6].projection[r.projection];if(Array.isArray(a))for(let c=0;c<a.length;c++)go(t,e,o,a[c],i);else Co(e,t,a,s[3],o,i,!0)}function Po(e,t,n){$t(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function jo(e,t,n){$t(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}class Ao{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._viewContainerRef=null}get rootNodes(){const e=this._lView,t=e[1];return function e(t,n,r,o,i=!1){for(;null!==r;){const s=n[r.index];if(null!==s&&o.push(Lt(s)),vt(s))for(let t=10;t<s.length;t++){const n=s[t],r=n[1].firstChild;null!==r&&e(n[1],n,r,o)}const a=r.type;if(3===a||4===a)e(t,n,r.child,o);else if(1===a){const t=n[16],i=t[6].projection[r.projection];if(Array.isArray(i))o.push(...i);else{const n=xr(t);e(n[1],n,i,o,!0)}}r=i?r.projectionNext:r.next}return o}(t,e,t.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}vo(this._lView[1],this._lView)}onDestroy(e){Br(this._lView[1],this._lView,null,e)}markForCheck(){so(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){ao(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){sn(!0);try{ao(e,t,n)}finally{sn(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e;this._appRef=null,Oo(this._lView[1],e=this._lView,e[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class Io extends Ao{constructor(e){super(e),this._view=e}detectChanges(){co(this._view)}checkNoChanges(){!function(e){sn(!0);try{co(e)}finally{sn(!1)}}(this._view)}get context(){return null}}let Ro,No,Do;function Mo(e,t,n){return Ro||(Ro=class extends e{}),new Ro(Ht(t,n))}function $o(e,t,n,r){return No||(No=class extends e{constructor(e,t,n){super(),this._declarationView=e,this._declarationTContainer=t,this.elementRef=n}createEmbeddedView(e){const t=this._declarationTContainer.tViews,n=jr(this._declarationView,t,e,16,null,t.declTNode,null,null,null,null);n[17]=this._declarationView[this._declarationTContainer.index];const r=this._declarationView[19];return null!==r&&(n[19]=r.createEmbeddedView(t)),Ir(t,n,e),new Ao(n)}}),0===n.type?new No(r,n,Mo(t,n,r)):null}function Fo(e,t,n,r){let o;Do||(Do=class extends e{constructor(e,t,n){super(),this._lContainer=e,this._hostTNode=t,this._hostView=n}get element(){return Mo(t,this._hostTNode,this._hostView)}get injector(){return new er(this._hostTNode,this._hostView)}get parentInjector(){const e=qn(this._hostTNode,this._hostView);if(Mn(e)){const t=Fn(e,this._hostView),n=$n(e);return new er(t[1].data[n+8],t)}return new er(null,this._hostView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){return null!==this._lContainer[8]&&this._lContainer[8][e]||null}get length(){return this._lContainer.length-10}createEmbeddedView(e,t,n){const r=e.createEmbeddedView(t||{});return this.insert(r,n),r}createComponent(e,t,n,r,o){const i=n||this.parentInjector;if(!o&&null==e.ngModule&&i){const e=i.get(Ye,null);e&&(o=e)}const s=e.create(i,r,void 0,o);return this.insert(s.hostView,t),s}insert(e,t){const n=e._lView,r=n[1];if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");if(this.allocateContainerIfNeeded(),vt(n[3])){const t=this.indexOf(e);if(-1!==t)this.detach(t);else{const t=n[3],r=new Do(t,t[6],t[3]);r.detach(r.indexOf(e))}}const o=this._adjustIndex(t),i=this._lContainer;!function(e,t,n,r){const o=10+r,i=n.length;r>0&&(n[o-1][4]=t),r<i-10?(t[4]=n[o],et(n,10+r,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(s,t);const a=t[19];null!==a&&a.insertView(e),t[2]|=128}(r,n,i,o);const s=function e(t,n){const r=10+t+1;if(r<n.length){const t=n[r],o=t[1].firstChild;if(null!==o)return function t(n,r){if(null!==r){const o=r.type;if(2===o)return Ht(r,n);if(0===o)return e(-1,n[r.index]);if(3===o||4===o){const o=r.child;if(null!==o)return t(n,o);{const t=n[r.index];return vt(t)?e(-1,t):Lt(t)}}{const e=n[16],o=e[6],i=xr(e),s=o.projection[r.projection];return null!=s?t(i,s):t(n,r.next)}}return null}(t,o)}return n[7]}(o,i),a=n[11],c=ko(a,i[7]);return null!==c&&function(e,t,n,r,o,i){r[0]=o,r[6]=t,Oo(e,r,n,1,o,i)}(r,i[6],a,n,c,s),e.attachToViewContainerRef(this),et(i[8],o,e),e}move(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");return this.insert(e,t)}indexOf(e){const t=this._lContainer[8];return null!==t?t.indexOf(e):-1}remove(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1),n=yo(this._lContainer,t);n&&(tt(this._lContainer[8],t),vo(n[1],n))}detach(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1),n=yo(this._lContainer,t);return n&&null!=tt(this._lContainer[8],t)?new Ao(n):null}_adjustIndex(e,t=0){return null==e?this.length+t:e}allocateContainerIfNeeded(){null===this._lContainer[8]&&(this._lContainer[8]=[])}});const i=r[n.index];if(vt(i))o=i;else{let e;if(3===n.type)e=Lt(i);else if(e=r[11].createComment(""),kt(r)){const t=r[11],o=Ht(n,r);wo(t,ko(t,o),e,function(e,t){return $t(e)?e.nextSibling(t):t.nextSibling}(t,o))}else Eo(r[1],r,e,n);r[n.index]=o=no(i,r,e,n),io(r,o)}return new Do(o,n,r)}function Lo(e=!1){return function(e,t,n){if(!n&&wt(e)){const n=zt(e.index,t);return new Ao(n,n)}return 2===e.type||0===e.type||3===e.type||4===e.type?new Ao(t[16],t):null}(en(),Yt(),e)}let Ho=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Bo(),e})();const Bo=Lo,zo=Function,Uo=new Me("Set Injector scope."),Vo={},qo={},Wo=[];let Qo=void 0;function Ko(){return void 0===Qo&&(Qo=new Ze),Qo}function Go(e,t=null,n=null,r){return new Zo(e,n,t||Ko(),r)}class Zo{constructor(e,t,n,r=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const o=[];t&&Xe(t,n=>this.processProvider(n,e,t)),Xe([e],e=>this.processInjectorType(e,[],o)),this.records.set($e,Jo(void 0,this));const i=this.records.get(Uo);this.scope=null!=i?i.value:null,this.source=r||("object"==typeof e?null:ye(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,t=Fe,n=ie.Default){this.assertNotDestroyed();const r=Ue(this);try{if(!(n&ie.SkipSelf)){let t=this.records.get(e);if(void 0===t){const n=("function"==typeof(o=e)||"object"==typeof o&&o instanceof Me)&&he(e);t=n&&this.injectableDefInScope(n)?Jo(Yo(e),Vo):null,this.records.set(e,t)}if(null!=t)return this.hydrate(e,t)}return(n&ie.Self?Ko():this.parent).get(e,t=n&ie.Optional&&t===Fe?null:t)}catch(i){if("NullInjectorError"===i.name){if((i.ngTempTokenPath=i.ngTempTokenPath||[]).unshift(ye(e)),r)throw i;return function(e,t,n,r){const o=e.ngTempTokenPath;throw t.__source&&o.unshift(t.__source),e.message=function(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let o=ye(t);if(Array.isArray(t))o=t.map(ye).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):ye(r)))}o=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(Le,"\n  ")}`}("\n"+e.message,o,n,r),e.ngTokenPath=o,e.ngTempTokenPath=null,e}(i,e,"R3InjectorError",this.source)}throw i}finally{Ue(r)}var o}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((t,n)=>e.push(ye(n))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,t,n){if(!(e=xe(e)))return!1;let r=de(e);const o=null==r&&e.ngModule||void 0,i=void 0===o?e:o,s=-1!==n.indexOf(i);if(void 0!==o&&(r=de(o)),null==r)return!1;if(null!=r.imports&&!s){let e;n.push(i);try{Xe(r.imports,r=>{this.processInjectorType(r,t,n)&&(void 0===e&&(e=[]),e.push(r))})}finally{}if(void 0!==e)for(let t=0;t<e.length;t++){const{ngModule:n,providers:r}=e[t];Xe(r,e=>this.processProvider(e,n,r||Wo))}}this.injectorDefTypes.add(i),this.records.set(i,Jo(r.factory,Vo));const a=r.providers;if(null!=a&&!s){const t=e;Xe(a,e=>this.processProvider(e,t,a))}return void 0!==o&&void 0!==e.providers}processProvider(e,t,n){let r=ei(e=xe(e))?e:xe(e&&e.provide);const o=function(e,t,n){return Xo(e)?Jo(void 0,e.useValue):Jo(function(e,t,n){let r=void 0;if(ei(e)){const t=xe(e);return gt(t)||Yo(t)}if(Xo(e))r=()=>xe(e.useValue);else if((o=e)&&o.useFactory)r=()=>e.useFactory(...Ge(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))r=()=>We(xe(e.useExisting));else{const t=xe(e&&(e.useClass||e.provide));if(!function(e){return!!e.deps}(e))return gt(t)||Yo(t);r=()=>new t(...Ge(e.deps))}var o;return r}(e),Vo)}(e);if(ei(e)||!0!==e.multi)this.records.get(r);else{let t=this.records.get(r);t||(t=Jo(void 0,Vo,!0),t.factory=()=>Ge(t.multi),this.records.set(r,t)),r=e,t.multi.push(e)}this.records.set(r,o)}hydrate(e,t){var n;return t.value===Vo&&(t.value=qo,t.value=t.factory()),"object"==typeof t.value&&t.value&&null!==(n=t.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(t.value),t.value}injectableDefInScope(e){return!!e.providedIn&&("string"==typeof e.providedIn?"any"===e.providedIn||e.providedIn===this.scope:this.injectorDefTypes.has(e.providedIn))}}function Yo(e){const t=he(e),n=null!==t?t.factory:gt(e);if(null!==n)return n;const r=de(e);if(null!==r)return r.factory;if(e instanceof Me)throw new Error(`Token ${ye(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const n=function(e,t){const n=[];for(let r=0;r<e;r++)n.push("?");return n}(t);throw new Error(`Can't resolve all parameters for ${ye(e)}: (${n.join(", ")}).`)}const n=function(e){const t=e&&(e[pe]||e[ge]||e[me]&&e[me]());if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function Jo(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Xo(e){return null!==e&&"object"==typeof e&&He in e}function ei(e){return"function"==typeof e}const ti=function(e,t,n){return function(e,t=null,n=null,r){const o=Go(e,t,n,r);return o._resolveInjectorDefTypes(),o}({name:n},t,e,n)};let ni=(()=>{class e{static create(e,t){return Array.isArray(e)?ti(e,t,""):ti(e.providers,e.parent,e.name||"")}}return e.THROW_IF_NOT_FOUND=Fe,e.NULL=new Ze,e.\u0275prov=ce({token:e,providedIn:"any",factory:()=>We($e)}),e.__NG_ELEMENT_ID__=-1,e})();const ri=new Me("AnalyzeForEntryComponents");function oi(e,t,n){let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let s=0;s<t.length;s++){const e=t[s];"number"==typeof e?i=e:1==i?o=ve(o,e):2==i&&(r=ve(r,e+": "+t[++s]+";"))}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}function ii(e,t){const n=Ut(e)[1],r=n.data.length-1;kn(n,{directiveStart:r,directiveEnd:r+1})}function si(e){let t=Object.getPrototypeOf(e.type.prototype).constructor,n=!0;const r=[e];for(;t;){let o=void 0;if(St(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new Error("Directives cannot inherit Components");o=t.\u0275dir}if(o){if(n){r.push(o);const t=e;t.inputs=ai(e.inputs),t.declaredInputs=ai(e.declaredInputs),t.outputs=ai(e.outputs);const n=o.hostBindings;n&&hi(e,n);const i=o.viewQuery,s=o.contentQueries;if(i&&ci(e,i),s&&li(e,s),ae(e.inputs,o.inputs),ae(e.declaredInputs,o.declaredInputs),ae(e.outputs,o.outputs),St(o)&&o.data.animation){const t=e.data;t.animation=(t.animation||[]).concat(o.data.animation)}}const t=o.features;if(t)for(let r=0;r<t.length;r++){const o=t[r];o&&o.ngInherit&&o(e),o===si&&(n=!1)}}t=Object.getPrototypeOf(t)}!function(e){let t=0,n=null;for(let r=e.length-1;r>=0;r--){const o=e[r];o.hostVars=t+=o.hostVars,o.hostAttrs=Nn(o.hostAttrs,n=Nn(n,o.hostAttrs))}}(r)}function ai(e){return e===ot?{}:e===it?[]:e}function ci(e,t){const n=e.viewQuery;e.viewQuery=n?(e,r)=>{t(e,r),n(e,r)}:t}function li(e,t){const n=e.contentQueries;e.contentQueries=n?(e,r,o)=>{t(e,r,o),n(e,r,o)}:t}function hi(e,t){const n=e.hostBindings;e.hostBindings=n?(e,r)=>{t(e,r),n(e,r)}:t}let ui=null;function di(){if(!ui){const e=Te.Symbol;if(e&&e.iterator)ui=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(ui=n)}}}return ui}class pi{constructor(e){this.wrapped=e}static wrap(e){return new pi(e)}static unwrap(e){return pi.isWrapped(e)?e.wrapped:e}static isWrapped(e){return e instanceof pi}}function fi(e){return!!mi(e)&&(Array.isArray(e)||!(e instanceof Map)&&di()in e)}function mi(e){return null!==e&&("function"==typeof e||"object"==typeof e)}function gi(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function bi(e,t,n,r){const o=gi(e,t,n);return gi(e,t+1,r)||o}function yi(e,t,n,r){return gi(e,cn(),n)?t+Et(n)+r:wr}function vi(e,t,n,r,o,i,s,a){const c=Yt(),l=Jt(),h=e+20,u=l.firstCreatePass?function(e,t,n,r,o,i,s,a,c){const l=t.consts,h=Ar(t,e,0,s||null,Wt(l,a));Vr(t,n,h,Wt(l,c)),kn(t,h);const u=h.tViews=Hr(2,h,r,o,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l);return null!==t.queries&&(t.queries.template(t,h),u.queries=t.queries.embeddedTView(h)),h}(e,l,c,t,n,r,o,i,s):l.data[h];tn(u,!1);const d=c[11].createComment("");Eo(l,c,d,u),hr(d,c),io(c,c[h]=no(d,c,d,u)),xt(u)&&$r(l,c,u),null!=s&&Fr(c,u,a)}function _i(e,t=ie.Default){const n=Yt();return null===n?We(e,t):Qn(en(),n,xe(e),t)}function wi(e,t,n){const r=Yt();return gi(r,cn(),t)&&Ur(Jt(),Sn(),r,e,t,r[11],n,!1),wi}function xi(e,t,n,r,o){const i=o?"class":"style";fo(e,n,t.inputs[i],i,r)}function Si(e,t,n,r){const o=Yt(),i=Jt(),s=20+e,a=o[11],c=o[s]=Pr(t,a,Gt.lFrame.currentNamespace),l=i.firstCreatePass?function(e,t,n,r,o,i,s){const a=t.consts,c=Ar(t,e,2,o,Wt(a,i));return Vr(t,n,c,Wt(a,s)),null!==c.attrs&&oi(c,c.attrs,!1),null!==c.mergedAttrs&&oi(c,c.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,c),c}(e,i,o,0,t,n,r):i.data[s];tn(l,!0);const h=l.mergedAttrs;null!==h&&An(a,c,h);const u=l.classes;null!==u&&jo(a,c,u);const d=l.styles;null!==d&&Po(a,c,d),Eo(i,o,c,l),0===Gt.lFrame.elementDepthCount&&hr(c,o),Gt.lFrame.elementDepthCount++,xt(l)&&($r(i,o,l),Mr(i,l,o)),null!==r&&Fr(o,l)}function ki(){let e=en();nn()?rn():(e=e.parent,tn(e,!1));const t=e;Gt.lFrame.elementDepthCount--;const n=Jt();n.firstCreatePass&&(kn(n,e),_t(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function(e){return 0!=(16&e.flags)}(t)&&xi(n,t,Yt(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function(e){return 0!=(32&e.flags)}(t)&&xi(n,t,Yt(),t.stylesWithoutHost,!1)}function Ei(e,t,n,r){Si(e,t,n,r),ki()}function Ci(){return Yt()}function Oi(e){return!!e&&"function"==typeof e.then}function Ti(e){return!!e&&"function"==typeof e.subscribe}function Pi(e,t,n=!1,r){const o=Yt(),i=Jt(),s=en();return function(e,t,n,r,o,i,s=!1,a){const c=xt(r),l=e.firstCreatePass&&(e.cleanup||(e.cleanup=[])),h=uo(t);let u=!0;if(2===r.type){const d=Ht(r,t),p=a?a(d):ot,f=p.target||d,m=h.length,g=a?e=>a(Lt(e[r.index])).target:r.index;if($t(n)){let s=null;if(!a&&c&&(s=function(e,t,n,r){const o=e.cleanup;if(null!=o)for(let i=0;i<o.length-1;i+=2){const e=o[i];if(e===n&&o[i+1]===r){const e=t[7],n=o[i+2];return e.length>n?e[n]:null}"string"==typeof e&&(i+=2)}return null}(e,t,o,r.index)),null!==s)(s.__ngLastListenerFn__||s).__ngNextListenerFn__=i,s.__ngLastListenerFn__=i,u=!1;else{i=Ai(r,t,i,!1);const e=n.listen(p.name||f,o,i);h.push(i,e),l&&l.push(o,g,m,m+1)}}else i=Ai(r,t,i,!0),f.addEventListener(o,i,s),h.push(i),l&&l.push(o,g,m,s)}const d=r.outputs;let p;if(u&&null!==d&&(p=d[o])){const e=p.length;if(e)for(let n=0;n<e;n+=2){const e=t[p[n]][p[n+1]].subscribe(i),s=h.length;h.push(i,e),l&&l.push(o,r.index,s,-(s+1))}}}(i,o,o[11],s,e,t,n,r),Pi}function ji(e,t,n){try{return!1!==t(n)}catch(r){return po(e,r),!1}}function Ai(e,t,n,r){return function o(i){if(i===Function)return n;const s=2&e.flags?zt(e.index,t):t;0==(32&t[2])&&so(s);let a=ji(t,n,i),c=o.__ngNextListenerFn__;for(;c;)a=ji(t,c,i)&&a,c=c.__ngNextListenerFn__;return r&&!1===a&&(i.preventDefault(),i.returnValue=!1),a}}function Ii(e=1){return function(e){return(Gt.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Gt.lFrame.contextLView))[8]}(e)}function Ri(e,t,n){return Ni(e,"",t,"",n),Ri}function Ni(e,t,n,r,o){const i=Yt(),s=yi(i,t,n,r);return s!==wr&&Ur(Jt(),Sn(),i,e,s,i[11],o,!1),Ni}function Di(e,t=""){const n=Yt(),r=Jt(),o=e+20,i=r.firstCreatePass?Ar(r,e,2,null,null):r.data[o],s=n[o]=function(e,t){return $t(t)?t.createText(e):t.createTextNode(e)}(t,n[11]);Eo(r,n,s,i),tn(i,!1)}function Mi(e,t,n){const r=Yt(),o=yi(r,e,t,n);return o!==wr&&mo(r,wn(),o),Mi}function $i(e,t,n,r,o){const i=Yt(),s=function(e,t,n,r,o,i){const s=bi(e,an(),n,o);return ln(2),s?t+Et(n)+r+Et(o)+i:wr}(i,e,t,n,r,o);return s!==wr&&mo(i,wn(),s),$i}function Fi(e,t,n,r,o,i,s){const a=Yt(),c=function(e,t,n,r,o,i,s,a){const c=function(e,t,n,r,o){const i=bi(e,t,n,r);return gi(e,t+2,o)||i}(e,an(),n,o,s);return ln(3),c?t+Et(n)+r+Et(o)+i+Et(s)+a:wr}(a,e,t,n,r,o,i,s);return c!==wr&&mo(a,wn(),c),Fi}const Li=void 0;var Hi=["en",[["a","p"],["AM","PM"],Li],[["AM","PM"],Li,Li],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Li,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Li,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",Li,"{1} 'at' {0}",Li],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];let Bi={};function zi(e){return e in Bi||(Bi[e]=Te.ng&&Te.ng.common&&Te.ng.common.locales&&Te.ng.common.locales[e]),Bi[e]}var Ui=function(e){return e[e.LocaleId=0]="LocaleId",e[e.DayPeriodsFormat=1]="DayPeriodsFormat",e[e.DayPeriodsStandalone=2]="DayPeriodsStandalone",e[e.DaysFormat=3]="DaysFormat",e[e.DaysStandalone=4]="DaysStandalone",e[e.MonthsFormat=5]="MonthsFormat",e[e.MonthsStandalone=6]="MonthsStandalone",e[e.Eras=7]="Eras",e[e.FirstDayOfWeek=8]="FirstDayOfWeek",e[e.WeekendRange=9]="WeekendRange",e[e.DateFormat=10]="DateFormat",e[e.TimeFormat=11]="TimeFormat",e[e.DateTimeFormat=12]="DateTimeFormat",e[e.NumberSymbols=13]="NumberSymbols",e[e.NumberFormats=14]="NumberFormats",e[e.CurrencyCode=15]="CurrencyCode",e[e.CurrencySymbol=16]="CurrencySymbol",e[e.CurrencyName=17]="CurrencyName",e[e.Currencies=18]="Currencies",e[e.Directionality=19]="Directionality",e[e.PluralCase=20]="PluralCase",e[e.ExtraData=21]="ExtraData",e}({});let Vi="en-US";function qi(e){var t,n;n="Expected localeId to be defined",null==(t=e)&&function(e,t,n,r){throw new Error("ASSERTION ERROR: "+e+` [Expected=> null != ${t} <=Actual]`)}(n,t),"string"==typeof e&&(Vi=e.toLowerCase().replace(/_/g,"-"))}class Wi{}class Qi{resolveComponentFactory(e){throw function(e){const t=Error(`No component factory found for ${ye(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(e)}}let Ki=(()=>{class e{}return e.NULL=new Qi,e})(),Gi=(()=>{class e{constructor(e){this.nativeElement=e}}return e.__NG_ELEMENT_ID__=()=>Zi(e),e})();const Zi=function(e){return Mo(e,en(),Yt())};class Yi{}var Ji=function(e){return e[e.Important=1]="Important",e[e.DashCase=2]="DashCase",e}({});let Xi=(()=>{class e{}return e.\u0275prov=ce({token:e,providedIn:"root",factory:()=>null}),e})();class es{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const ts=new es("10.2.3");class ns{constructor(){}supports(e){return fi(e)}create(e){return new os(e)}}const rs=(e,t)=>t;class os{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||rs}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,o=null;for(;t||n;){const i=!n||t&&t.currentIndex<cs(n,r,o)?t:n,s=cs(i,r,o),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)r++;else{o||(o=[]);const e=s-r,t=a-r;if(e!=t){for(let n=0;n<e;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;t<=i&&i<e&&(o[n]=r+1)}o[i.previousIndex]=t-e}}s!==a&&e(i,s,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!fi(e))throw new Error(`Error trying to diff '${ye(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,o=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,t)),Object.is(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,t),i=!0),o=o._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[di()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,e,r,t)),Object.is(o.item,e)||this._addIdentityChange(o,e)):(o=this._mismatch(o,e,r,t),i=!0),o=o._next,t++}),this.length=t;return this._truncate(o),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):e=this._addAfter(new is(t,n),o,r),e}_verifyReinsertion(e,t,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new as),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new as),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class is{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class ss{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&Object.is(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class as{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new ss,this.map.set(t,n)),n.add(e)}get(e,t){const n=this.map.get(e);return n?n.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function cs(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}class ls{constructor(){}supports(e){return e instanceof Map||mi(e)}create(){return new hs}}class hs{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||mi(e)))throw new Error(`Error trying to diff '${ye(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new us(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class us{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let ds=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(null!=n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new oe,new ne]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n}}return e.\u0275prov=ce({token:e,providedIn:"root",factory:()=>new e([new ns])}),e})(),ps=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new oe,new ne]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}return e.\u0275prov=ce({token:e,providedIn:"root",factory:()=>new e([new ls])}),e})();const fs=[new ls],ms=new ds([new ns]),gs=new ps(fs);let bs=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>ys(e,Gi),e})();const ys=function(e,t){return $o(e,t,en(),Yt())};let vs=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>_s(e,Gi),e})();const _s=function(e,t){return Fo(e,t,en(),Yt())},ws={};class xs extends Ki{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=mt(e);return new Es(t,this.ngModule)}}function Ss(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const ks=new Me("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>Ot});class Es extends Wi{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(_r).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return Ss(this.componentDef.inputs)}get outputs(){return Ss(this.componentDef.outputs)}create(e,t,n,r){const o=(r=r||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,ws,o);return i!==ws||r===ws?i:t.get(n,r,o)}}}(e,r.injector):e,i=o.get(Yi,Ft),s=o.get(Xi,null),a=i.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",l=n?function(e,t,n){if($t(e))return e.selectRootElement(t,n===rt.ShadowDom);let r="string"==typeof t?e.querySelector(t):t;return r.textContent="",r}(a,n,this.componentDef.encapsulation):Pr(c,i.createRenderer(null,this.componentDef),function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(c)),h=this.componentDef.onPush?576:528,u={components:[],scheduler:Ot,clean:ho,playerHandler:null,flags:0},d=Hr(0,null,null,1,0,null,null,null,null,null),p=jr(null,d,u,h,null,null,i,a,s,o);let f,m;mn(p);try{const e=function(e,t,n,r,o,i){const s=n[1];n[20]=e;const a=Ar(s,0,2,null,null),c=a.mergedAttrs=t.hostAttrs;null!==c&&(oi(a,c,!0),null!==e&&(An(o,e,c),null!==a.classes&&jo(o,e,a.classes),null!==a.styles&&Po(o,e,a.styles)));const l=r.createRenderer(e,t),h=jr(n,Lr(t),null,t.onPush?64:16,n[20],a,r,l,null,null);return s.firstCreatePass&&(Wn(zn(a,n),s,t.type),Gr(s,a),Yr(a,n.length,1)),io(n,h),n[20]=h}(l,this.componentDef,p,i,a);if(l)if(n)An(a,l,["ng-version",ts.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!gr(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&An(a,l,e),t&&t.length>0&&jo(a,l,t.join(" "))}if(m=Bt(d,0),void 0!==t){const e=m.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=t[n];e.push(null!=r?Array.from(r):null)}}f=function(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=en();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),Kr(e,r,1),Jr(e,t,n));const o=Yn(t,e,t.length-1,r);hr(o,t);const i=Ht(r,t);return i&&hr(i,t),o}(i,n,t);r.components.push(s),e[8]=s,o&&o.forEach(e=>e(s,t)),t.contentQueries&&t.contentQueries(1,s,n.length-1);const a=en();if(i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){xn(a.index-20);const e=n[1];qr(e,t),Wr(e,n,t.hostVars),Qr(t,s)}return s}(e,this.componentDef,p,u,[ii]),Ir(d,p,null)}finally{_n()}return new Cs(this.componentType,f,Mo(Gi,m,p),p,m)}}class Cs extends class{}{constructor(e,t,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.destroyCbs=[],this.instance=t,this.hostView=this.changeDetectorRef=new Io(r),this.componentType=e}get injector(){return new er(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(e=>e()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(e){this.destroyCbs&&this.destroyCbs.push(e)}}const Os=new Map;class Ts extends Ye{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new xs(this);const n=bt(e),r=e[Re]||null;r&&qi(r),this._bootstrapComponents=Tt(n.bootstrap),this._r3Injector=Go(e,t,[{provide:Ye,useValue:this},{provide:Ki,useValue:this.componentFactoryResolver}],ye(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,t=ni.THROW_IF_NOT_FOUND,n=ie.Default){return e===ni||e===Ye||e===$e?this:this._r3Injector.get(e,t,n)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class Ps extends Je{constructor(e){super(),this.moduleType=e,null!==bt(e)&&function(e){const t=new Set;!function e(n){const r=bt(n,!0),o=r.id;null!==o&&(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${ye(t)} vs ${ye(t.name)}`)}(o,Os.get(o),n),Os.set(o,n));const i=Tt(r.imports);for(const s of i)t.has(s)||(t.add(s),e(s))}(e)}(e)}create(e){return new Ts(this.moduleType,e)}}function js(e,t){const n=Jt();let r;const o=e+20;n.firstCreatePass?(r=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const r=t[n];if(e===r.name)return r}throw new Error(`The pipe '${e}' could not be found!`)}(t,n.pipeRegistry),n.data[o]=r,r.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(o,r.onDestroy)):r=n.data[o];const i=r.factory||(r.factory=gt(r.type)),s=Ve(_i);try{const t=Hn(!1),r=i();return Hn(t),function(e,t,n,r){const o=n+20;o>=e.data.length&&(e.data[o]=null,e.blueprint[o]=null),t[o]=r}(n,Yt(),e,r),r}finally{Ve(s)}}function As(e,t,n){const r=Yt(),o=function(e,t){return e[t+20]}(r,e);return function(e,t){return pi.isWrapped(t)&&(t=pi.unwrap(t),e[an()]=wr),t}(r,function(e,t){return e[1].data[t+20].pure}(r,e)?function(e,t,n,r,o,i){const s=t+n;return gi(e,s,o)?function(e,t,n){return e[t]=n}(e,s+1,i?r.call(i,o):r(o)):function(e,t){const n=e[t];return n===wr?void 0:n}(e,s+1)}(r,function(){const e=Gt.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),t,o.transform,n,o):o.transform(n))}const Is=class extends S{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let r,o=e=>null,i=()=>null;e&&"object"==typeof e?(r=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(o=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(i=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(r=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(o=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(i=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const s=super.subscribe(r,o,i);return e instanceof u&&e.add(s),s}};function Rs(){return this._results[di()]()}class Ns{constructor(){this.dirty=!0,this._results=[],this.changes=new Is,this.length=0;const e=di(),t=Ns.prototype;t[e]||(t[e]=Rs)}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e){this._results=function e(t,n){void 0===n&&(n=t);for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?(n===t&&(n=t.slice(0,r)),e(o,n)):n!==t&&n.push(o)}return n}(e),this.dirty=!1,this.length=this._results.length,this.last=this._results[this.length-1],this.first=this._results[0]}notifyOnChanges(){this.changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}class Ds{constructor(e){this.queryList=e,this.matches=null}clone(){return new Ds(this.queryList)}setDirty(){this.queryList.setDirty()}}class Ms{constructor(e=[]){this.queries=e}createEmbeddedView(e){const t=e.queries;if(null!==t){const n=null!==e.contentQueries?e.contentQueries[0]:t.length,r=[];for(let e=0;e<n;e++){const n=t.getByIndex(e);r.push(this.queries[n.indexInDeclarationView].clone())}return new Ms(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)null!==Us(e,t).matches&&this.queries[t].setDirty()}}class $s{constructor(e,t,n,r=null){this.predicate=e,this.descendants=t,this.isStatic=n,this.read=r}}class Fs{constructor(e=[]){this.queries=e}elementStart(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let n=0;n<this.length;n++){const r=null!==t?t.length:0,o=this.getByIndex(n).embeddedTView(e,r);o&&(o.indexInDeclarationView=n,null!==t?t.push(o):t=[o])}return null!==t?new Fs(t):null}template(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}}class Ls{constructor(e,t=-1){this.metadata=e,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new Ls(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&!1===this.metadata.descendants){const t=this._declarationNodeIndex;let n=e.parent;for(;null!==n&&3===n.type&&n.index!==t;)n=n.parent;return t===(null!==n?n.index:-1)}return this._appliesToNextNode}matchTNode(e,t){const n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];this.matchTNodeWithReadOption(e,t,Hs(t,o)),this.matchTNodeWithReadOption(e,t,Zn(t,e,o,!1,!1))}else n===bs?0===t.type&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Zn(t,e,n,!1,!1))}matchTNodeWithReadOption(e,t,n){if(null!==n){const r=this.metadata.read;if(null!==r)if(r===Gi||r===vs||r===bs&&0===t.type)this.addMatch(t.index,-2);else{const n=Zn(t,e,r,!1,!1);null!==n&&this.addMatch(t.index,n)}else this.addMatch(t.index,n)}}addMatch(e,t){null===this.matches?this.matches=[e,t]:this.matches.push(e,t)}}function Hs(e,t){const n=e.localNames;if(null!==n)for(let r=0;r<n.length;r+=2)if(n[r]===t)return n[r+1];return null}function Bs(e,t,n,r){return-1===n?function(e,t){return 2===e.type||3===e.type?Mo(Gi,e,t):0===e.type?$o(bs,Gi,e,t):null}(t,e):-2===n?function(e,t,n){return n===Gi?Mo(Gi,t,e):n===bs?$o(bs,Gi,t,e):n===vs?Fo(vs,Gi,t,e):void 0}(e,t,r):Yn(e,e[1],n,t)}function zs(e,t,n,r){const o=t[19].queries[r];if(null===o.matches){const r=e.data,i=n.matches,s=[];for(let e=0;e<i.length;e+=2){const o=i[e];s.push(o<0?null:Bs(t,r[o],i[e+1],n.metadata.read))}o.matches=s}return o.matches}function Us(e,t){return e.queries.getByIndex(t)}const Vs=new Me("Application Initializer");let qs=(()=>{class e{constructor(e){this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const t=this.appInits[n]();Oi(t)&&e.push(t)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}return e.\u0275fac=function(t){return new(t||e)(We(Vs,8))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const Ws=new Me("AppId"),Qs={provide:Ws,useFactory:function(){return`${Ks()}${Ks()}${Ks()}`},deps:[]};function Ks(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Gs=new Me("Platform Initializer"),Zs=new Me("Platform ID"),Ys=new Me("appBootstrapListener");let Js=(()=>{class e{log(e){console.log(e)}warn(e){console.warn(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const Xs=new Me("LocaleId"),ea=new Me("DefaultCurrencyCode");class ta{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}const na=function(e){return new Ps(e)},ra=na,oa=function(e){return Promise.resolve(na(e))},ia=function(e){const t=na(e),n=Tt(bt(e).declarations).reduce((e,t)=>{const n=mt(t);return n&&e.push(new Es(n)),e},[]);return new ta(t,n)},sa=ia,aa=function(e){return Promise.resolve(ia(e))};let ca=(()=>{class e{constructor(){this.compileModuleSync=ra,this.compileModuleAsync=oa,this.compileModuleAndAllComponentsSync=sa,this.compileModuleAndAllComponentsAsync=aa}clearCache(){}clearCacheFor(e){}getModuleId(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const la=(()=>Promise.resolve(0))();function ha(e){"undefined"==typeof Zone?la.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}class ua{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Is(!1),this.onMicrotaskEmpty=new Is(!1),this.onStable=new Is(!1),this.onError=new Is(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=t,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let e=Te.requestAnimationFrame,t=Te.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){-1===e.lastRequestAnimationFrameId&&(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Te,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,ma(e),fa(e)},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),ma(e))}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,r,o,i,s,a)=>{try{return ga(e),n.invokeTask(o,i,s,a)}finally{t&&"eventTask"===i.type&&t(),ba(e)}},onInvoke:(t,n,r,o,i,s,a)=>{try{return ga(e),t.invoke(r,o,i,s,a)}finally{ba(e)}},onHasTask:(t,n,r,o)=>{t.hasTask(r,o),n===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,ma(e),fa(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,n,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!ua.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(ua.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,e,pa,da,da);try{return o.runTask(i,t,n)}finally{o.cancelTask(i)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}function da(){}const pa={};function fa(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function ma(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId)}function ga(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function ba(e){e._nesting--,fa(e)}class ya{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Is,this.onMicrotaskEmpty=new Is,this.onStable=new Is,this.onError=new Is}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}let va=(()=>{class e{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ua.assertNotInAngularZone(),ha(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())ha(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}return e.\u0275fac=function(t){return new(t||e)(We(ua))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),_a=(()=>{class e{constructor(){this._applications=new Map,Sa.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return Sa.findTestabilityInTree(this,e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();class wa{addToWindow(e){}findTestabilityInTree(e,t,n){return null}}let xa,Sa=new wa;const ka=new Me("AllowMultipleToken");class Ea{constructor(e,t){this.name=e,this.token=t}}function Ca(e,t,n=[]){const r="Platform: "+t,o=new Me(r);return(t=[])=>{let i=Oa();if(!i||i.injector.get(ka,!1))if(e)e(n.concat(t).concat({provide:o,useValue:!0}));else{const e=n.concat(t).concat({provide:o,useValue:!0},{provide:Uo,useValue:"platform"});!function(e){if(xa&&!xa.destroyed&&!xa.injector.get(ka,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");xa=e.get(Ta);const t=e.get(Gs,null);t&&t.forEach(e=>e())}(ni.create({providers:e,name:r}))}return function(e){const t=Oa();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}(o)}}function Oa(){return xa&&!xa.destroyed?xa:null}let Ta=(()=>{class e{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;return n="noop"===e?new ya:("zone.js"===e?void 0:e)||new ua({enableLongStackTrace:lr(),shouldCoalesceEventChangeDetection:t}),n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),r=[{provide:ua,useValue:n}];return n.run(()=>{const t=ni.create({providers:r,parent:this.injector,name:e.moduleType.name}),o=e.create(t),i=o.injector.get(sr,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return o.onDestroy(()=>Aa(this._modules,o)),n.runOutsideAngular(()=>n.onError.subscribe({next:e=>{i.handleError(e)}})),function(e,t,n){try{const r=n();return Oi(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(r){throw t.runOutsideAngular(()=>e.handleError(r)),r}}(i,n,()=>{const e=o.injector.get(qs);return e.runInitializers(),e.donePromise.then(()=>(qi(o.injector.get(Xs,"en-US")||"en-US"),this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const n=Pa({},t);return function(e,t,n){const r=new Ps(n);return Promise.resolve(r)}(0,0,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(ja);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${ye(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(t){return new(t||e)(We(ni))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();function Pa(e,t){return Array.isArray(t)?t.reduce(Pa,e):Object.assign(Object.assign({},e),t)}let ja=(()=>{class e{constructor(e,t,n,r,o,i){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=r,this._componentFactoryResolver=o,this._initStatus=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=lr(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const s=new y(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),a=new y(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{ua.assertNotInAngularZone(),ha(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{ua.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=q(s,a.pipe(e=>{return W()((t=J,function(e){let n;n="function"==typeof t?t:function(){return t};const r=Object.create(e,Z);return r.source=e,r.subjectFactory=n,r})(e));var t}))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof Wi?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=n.isBoundToModule?void 0:this._injector.get(Ye),o=n.create(ni.NULL,[],t||n.selector,r);o.onDestroy(()=>{this._unloadComponent(o)});const i=o.injector.get(va,null);return i&&o.injector.get(_a).registerApplication(o.location.nativeElement,i),this._loadComponent(o),lr()&&this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."),o}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(this._enforceNoNewChanges)for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;Aa(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(Ys,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}_unloadComponent(e){this.detachView(e.hostView),Aa(this.components,e)}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy())}get viewCount(){return this._views.length}}return e.\u0275fac=function(t){return new(t||e)(We(ua),We(Js),We(ni),We(sr),We(Ki),We(qs))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();function Aa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ia{}class Ra{}const Na={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let Da=(()=>{class e{constructor(e,t){this._compiler=e,this._config=t||Na}load(e){return this.loadAndCompile(e)}loadAndCompile(e){let[t,r]=e.split("#");return void 0===r&&(r="default"),n("zn8P")(t).then(e=>e[r]).then(e=>Ma(e,t,r)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,r]=e.split("#"),o="NgFactory";return void 0===r&&(r="default",o=""),n("zn8P")(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[r+o]).then(e=>Ma(e,t,r))}}return e.\u0275fac=function(t){return new(t||e)(We(ca),We(Ra,8))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();function Ma(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}const $a=Ca(null,"core",[{provide:Zs,useValue:"unknown"},{provide:Ta,deps:[ni]},{provide:_a,deps:[]},{provide:Js,deps:[]}]),Fa=[{provide:ja,useClass:ja,deps:[ua,Js,ni,sr,Ki,qs]},{provide:ks,deps:[ua],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}},{provide:qs,useClass:qs,deps:[[new ne,Vs]]},{provide:ca,useClass:ca,deps:[]},Qs,{provide:ds,useFactory:function(){return ms},deps:[]},{provide:ps,useFactory:function(){return gs},deps:[]},{provide:Xs,useFactory:function(e){return qi(e=e||"undefined"!=typeof $localize&&$localize.locale||"en-US"),e},deps:[[new te(Xs),new ne,new oe]]},{provide:ea,useValue:"USD"}];let La=(()=>{class e{constructor(e){}}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)(We(ja))},providers:Fa}),e})(),Ha=null;function Ba(){return Ha}const za=new Me("DocumentToken");let Ua=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({factory:Va,token:e,providedIn:"platform"}),e})();function Va(){return We(Wa)}const qa=new Me("Location Initialized");let Wa=(()=>{class e extends Ua{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=Ba().getLocation(),this._history=Ba().getHistory()}getBaseHrefFromDOM(){return Ba().getBaseHref(this._doc)}onPopState(e){Ba().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)}onHashChange(e){Ba().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,t,n){Qa()?this._history.pushState(e,t,n):this.location.hash=n}replaceState(e,t,n){Qa()?this._history.replaceState(e,t,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return e.\u0275fac=function(t){return new(t||e)(We(za))},e.\u0275prov=ce({factory:Ka,token:e,providedIn:"platform"}),e})();function Qa(){return!!window.history.pushState}function Ka(){return new Wa(We(za))}function Ga(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function Za(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function Ya(e){return e&&"?"!==e[0]?"?"+e:e}let Ja=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({factory:Xa,token:e,providedIn:"root"}),e})();function Xa(e){const t=We(za).location;return new tc(We(Ua),t&&t.origin||"")}const ec=new Me("appBaseHref");let tc=(()=>{class e extends Ja{constructor(e,t){if(super(),this._platformLocation=e,null==t&&(t=this._platformLocation.getBaseHrefFromDOM()),null==t)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=t}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Ga(this._baseHref,e)}path(e=!1){const t=this._platformLocation.pathname+Ya(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${t}${n}`:t}pushState(e,t,n,r){const o=this.prepareExternalUrl(n+Ya(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){const o=this.prepareExternalUrl(n+Ya(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(We(Ua),We(ec,8))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),nc=(()=>{class e extends Ja{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",null!=t&&(this._baseHref=t)}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t}prepareExternalUrl(e){const t=Ga(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,n,r){let o=this.prepareExternalUrl(n+Ya(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,n,r){let o=this.prepareExternalUrl(n+Ya(r));0==o.length&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(We(Ua),We(ec,8))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),rc=(()=>{class e{constructor(e,t){this._subject=new Is,this._urlChangeListeners=[],this._platformStrategy=e;const n=this._platformStrategy.getBaseHref();this._platformLocation=t,this._baseHref=Za(ic(n)),this._platformStrategy.onPopState(e=>{this._subject.emit({url:this.path(!0),pop:!0,state:e.state,type:e.type})})}path(e=!1){return this.normalize(this._platformStrategy.path(e))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+Ya(t))}normalize(t){return e.stripTrailingSlash(function(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,ic(t)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}go(e,t="",n=null){this._platformStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ya(t)),n)}replaceState(e,t="",n=null){this._platformStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ya(t)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(e){this._urlChangeListeners.push(e),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)}))}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(n=>n(e,t))}subscribe(e,t,n){return this._subject.subscribe({next:e,error:t,complete:n})}}return e.\u0275fac=function(t){return new(t||e)(We(Ja),We(Ua))},e.normalizeQueryParams=Ya,e.joinWithSlash=Ga,e.stripTrailingSlash=Za,e.\u0275prov=ce({factory:oc,token:e,providedIn:"root"}),e})();function oc(){return new rc(We(Ja),We(Ua))}function ic(e){return e.replace(/\/index.html$/,"")}var sc=function(e){return e[e.Zero=0]="Zero",e[e.One=1]="One",e[e.Two=2]="Two",e[e.Few=3]="Few",e[e.Many=4]="Many",e[e.Other=5]="Other",e}({});class ac{}let cc=(()=>{class e extends ac{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(function(e){return function(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}(e);let n=zi(t);if(n)return n;const r=t.split("-")[0];if(n=zi(r),n)return n;if("en"===r)return Hi;throw new Error(`Missing locale data for the locale "${e}".`)}(e)[Ui.PluralCase]}(t||this.locale)(e)){case sc.Zero:return"zero";case sc.One:return"one";case sc.Two:return"two";case sc.Few:return"few";case sc.Many:return"many";default:return"other"}}}return e.\u0275fac=function(t){return new(t||e)(We(Xs))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();function lc(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const e=n.indexOf("="),[r,o]=-1==e?[n,""]:[n.slice(0,e),n.slice(e+1)];if(r.trim()===t)return decodeURIComponent(o)}return null}class hc{constructor(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let uc=(()=>{class e{constructor(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){lr()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`),this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(t){throw new Error(`Cannot find a differ supporting object '${n}' of type '${e=n,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)}}var e;if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=[];e.forEachOperation((e,n,r)=>{if(null==e.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new hc(null,this._ngForOf,-1,-1),null===r?void 0:r),o=new dc(e,n);t.push(o)}else if(null==r)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const o=this._viewContainer.get(n);this._viewContainer.move(o,r);const i=new dc(e,o);t.push(i)}});for(let n=0;n<t.length;n++)this._perViewChange(t[n].view,t[n].record);for(let n=0,r=this._viewContainer.length;n<r;n++){const e=this._viewContainer.get(n);e.context.index=n,e.context.count=r,e.context.ngForOf=this._ngForOf}e.forEachIdentityChange(e=>{this._viewContainer.get(e.currentIndex).context.$implicit=e.item})}_perViewChange(e,t){e.context.$implicit=t.item}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(_i(vs),_i(bs),_i(ds))},e.\u0275dir=pt({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),e})();class dc{constructor(e,t){this.record=e,this.view=t}}let pc=(()=>{class e{constructor(e,t){this._viewContainer=e,this._context=new fc,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){mc("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){mc("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(_i(vs),_i(bs))},e.\u0275dir=pt({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),e})();class fc{constructor(){this.$implicit=null,this.ngIf=null}}function mc(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${ye(t)}'.`)}class gc{createSubscription(e,t){return e.subscribe({next:t,error:e=>{throw e}})}dispose(e){e.unsubscribe()}onDestroy(e){e.unsubscribe()}}class bc{createSubscription(e,t){return e.then(t,e=>{throw e})}dispose(e){}onDestroy(e){}}const yc=new bc,vc=new gc;let _c=(()=>{class e{constructor(e){this._ref=e,this._latestValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue:(e&&this._subscribe(e),this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(t){if(Oi(t))return yc;if(Ti(t))return vc;throw Error(`InvalidPipeArgument: '${t}' for pipe '${ye(e)}'`)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(function(e=ie.Default){const t=Lo(!0);if(null!=t||e&ie.Optional)return t;Pt("ChangeDetectorRef")}())},e.\u0275pipe=ft({name:"async",type:e,pure:!1}),e})(),wc=(()=>{class e{transform(e){return JSON.stringify(e,null,2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=ft({name:"json",type:e,pure:!1}),e})(),xc=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},providers:[{provide:ac,useClass:cc}]}),e})();function Sc(e){return"browser"===e}function kc(e){return"server"===e}let Ec=(()=>{class e{}return e.\u0275prov=ce({token:e,providedIn:"root",factory:()=>new Cc(We(za),window,We(sr))}),e})();class Cc{constructor(e,t,n){this.document=e,this.window=t,this.errorHandler=n,this.offset=()=>[0,0]}setOffset(e){this.offset=Array.isArray(e)?()=>e:e}getScrollPosition(){return this.supportsScrolling()?[this.window.scrollX,this.window.scrollY]:[0,0]}scrollToPosition(e){this.supportsScrolling()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(this.supportsScrolling()){const t=this.document.getElementById(e)||this.document.getElementsByName(e)[0];t&&this.scrollToElement(t)}}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}scrollToElement(e){const t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}supportScrollRestoration(){try{if(!this.window||!this.window.scrollTo)return!1;const e=Oc(this.window.history)||Oc(Object.getPrototypeOf(this.window.history));return!(!e||!e.writable&&!e.set)}catch(e){return!1}}supportsScrolling(){try{return!!this.window.scrollTo}catch(e){return!1}}}function Oc(e){return Object.getOwnPropertyDescriptor(e,"scrollRestoration")}class Tc extends class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}{static makeCurrent(){var e;e=new Tc,Ha||(Ha=e)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=jc||(jc=document.querySelector("base"),jc)?jc.getAttribute("href"):null;return null==t?null:(n=t,Pc||(Pc=document.createElement("a")),Pc.setAttribute("href",n),"/"===Pc.pathname.charAt(0)?Pc.pathname:"/"+Pc.pathname);var n}resetBaseElement(){jc=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){return lc(document.cookie,e)}}let Pc,jc=null;const Ac=new Me("TRANSITION_ID"),Ic=[{provide:Vs,useFactory:function(e,t,n){return()=>{n.get(qs).donePromise.then(()=>{const n=Ba();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[Ac,za,ni],multi:!0}];class Rc{static init(){var e;e=new Rc,Sa=e}addToWindow(e){Te.getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},Te.getAllAngularTestabilities=()=>e.getAllTestabilities(),Te.getAllAngularRootElements=()=>e.getAllRootElements(),Te.frameworkStabilizers||(Te.frameworkStabilizers=[]),Te.frameworkStabilizers.push(e=>{const t=Te.getAllAngularTestabilities();let n=t.length,r=!1;const o=function(t){r=r||t,n--,0==n&&e(r)};t.forEach((function(e){e.whenStable(o)}))})}findTestabilityInTree(e,t,n){if(null==t)return null;const r=e.getTestability(t);return null!=r?r:n?Ba().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}const Nc=new Me("EventManagerPlugins");let Dc=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error("No event manager plugin found for event "+e)}}return e.\u0275fac=function(t){return new(t||e)(We(Nc),We(ua))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();class Mc{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const r=Ba().getGlobalEventTarget(this._doc,e);if(!r)throw new Error(`Unsupported event target ${r} for event ${t}`);return this.addEventListener(r,t,n)}}let $c=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),Fc=(()=>{class e extends $c{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>Ba().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(We(za))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const Lc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},Hc=/%COMP%/g;function Bc(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?Bc(e,o,n):(o=o.replace(Hc,e),n.push(o))}return n}function zc(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let Uc=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new Vc(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case rt.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new qc(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case rt.Native:case rt.ShadowDom:return new Wc(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=Bc(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(We(Dc),We(Fc),We(Ws))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();class Vc{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(Lc[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=Lc[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=Lc[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&Ji.DashCase?e.style.setProperty(t,n,r&Ji.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Ji.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,zc(n)):this.eventManager.addEventListener(e,t,zc(n))}}class qc extends Vc{constructor(e,t,n,r){super(e),this.component=n;const o=Bc(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr="_ngcontent-%COMP%".replace(Hc,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(Hc,r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class Wc extends Vc{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.component=r,this.shadowRoot=r.encapsulation===rt.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const o=Bc(r.id,r.styles,[]);for(let i=0;i<o.length;i++){const e=document.createElement("style");e.textContent=o[i],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let Qc=(()=>{class e extends Mc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(We(za))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const Kc=["alt","control","meta","shift"],Gc={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Zc={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},Yc={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let Jc=(()=>{class e extends Mc{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,r){const o=e.parseEventName(n),i=e.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ba().onAndCancel(t,o.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let i="";if(Kc.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),i+=e+".")}),i+=o,0!=n.length||0===o.length)return null;const s={};return s.domEventName=r,s.fullKey=i,s}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&Zc.hasOwnProperty(t)&&(t=Zc[t]))}return Gc[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),Kc.forEach(r=>{r!=n&&(0,Yc[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(We(za))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const Xc=Ca($a,"browser",[{provide:Zs,useValue:"browser"},{provide:Gs,useValue:function(){Tc.makeCurrent(),Rc.init()},multi:!0},{provide:za,useFactory:function(){return function(e){Mt=e}(document),document},deps:[]}]),el=[[],{provide:Uo,useValue:"root"},{provide:sr,useFactory:function(){return new sr},deps:[]},{provide:Nc,useClass:Qc,multi:!0,deps:[za,ua,Zs]},{provide:Nc,useClass:Jc,multi:!0,deps:[za]},[],{provide:Uc,useClass:Uc,deps:[Dc,Fc,Ws]},{provide:Yi,useExisting:Uc},{provide:$c,useExisting:Fc},{provide:Fc,useClass:Fc,deps:[za]},{provide:va,useClass:va,deps:[ua]},{provide:Dc,useClass:Dc,deps:[Nc,ua]},[]];let tl=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:Ws,useValue:t.appId},{provide:Ac,useExisting:Ws},Ic]}}}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)(We(e,12))},providers:el,imports:[xc,La]}),e})();"undefined"!=typeof window&&window;class nl extends f{notifyNext(e,t,n,r,o){this.destination.next(t)}notifyError(e,t){this.destination.error(e)}notifyComplete(e){this.destination.complete()}}class rl extends f{constructor(e,t,n){super(),this.parent=e,this.outerValue=t,this.outerIndex=n,this.index=0}_next(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}_error(e){this.parent.notifyError(e,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}function ol(e,t,n,r,o=new rl(e,n,r)){if(!o.closed)return t instanceof y?t.subscribe(o):N(t)(o)}const il={};function sl(...e){let t=void 0,n=void 0;return E(e[e.length-1])&&(n=e.pop()),"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&c(e[0])&&(e=e[0]),V(e,n).lift(new al(t))}class al{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new cl(e,this.resultSelector))}}class cl extends nl{constructor(e,t){super(e),this.resultSelector=t,this.active=0,this.values=[],this.observables=[]}_next(e){this.values.push(il),this.observables.push(e)}_complete(){const e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(let n=0;n<t;n++)this.add(ol(this,e[n],void 0,n))}}notifyComplete(e){0==(this.active-=1)&&this.destination.complete()}notifyNext(e,t,n){const r=this.values,o=this.toRespond?r[n]===il?--this.toRespond:this.toRespond:0;r[n]=t,0===o&&(this.resultSelector?this._tryResultSelector(r):this.destination.next(r.slice()))}_tryResultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}function ll(e){return t=>t.lift(new hl(e))}class hl{constructor(e){this.notifier=e}call(e,t){const n=new ul(e),r=L(this.notifier,new $(n));return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n}}class ul extends F{constructor(e){super(e),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var dl=n("AEcS");let pl=(()=>{class e{constructor(){}getContent(){return this.content}resetContent(e){this.content=e}receiveUpdatesFrom(e){e.subscribe(e=>{const t=e.position.substring(0,e.position.lastIndexOf("/")),n=e.position.substring(e.position.lastIndexOf("/")+1);this.findAtPosition(t,!0)[n]=e.value})}findAtPosition(e,t){const n=e.split("/");if(null==this.content){if(!t)return null;this.content={creation:{type:"application",name:"unknown"}}}let r=this.content;return n.forEach(e=>{if(!r[e]){if(!t)return null;r[e]={}}r=r[e]}),r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function fl(e,t){return function(n){return n.lift(new ml(e,t))}}class ml{constructor(e,t){this.predicate=e,this.thisArg=t}call(e,t){return t.subscribe(new gl(e,this.predicate,this.thisArg))}}class gl extends f{constructor(e,t,n){super(e),this.predicate=t,this.thisArg=n,this.count=0}_next(e){let t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}t&&this.destination.next(e)}}class bl extends u{constructor(e,t){super()}schedule(e,t=0){return this}}class yl extends bl{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,r=void 0;try{this.work(e)}catch(o){n=!0,r=!!o&&o||new Error(o)}if(n)return this.unsubscribe(),r}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}class vl extends yl{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(e,t,n):e.flush(this)}}let _l=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})();class wl extends _l{constructor(e,t=_l.now){super(e,()=>wl.delegate&&wl.delegate!==this?wl.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return wl.delegate&&wl.delegate!==this?wl.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}class xl extends wl{}const Sl=new xl(vl),kl=new y(e=>e.complete());function El(e){return e?function(e){return new y(t=>e.schedule(()=>t.complete()))}(e):kl}function Cl(...e){let t=e[e.length-1];return E(t)?(e.pop(),D(e,t)):V(e)}let Ol=(()=>{class e{constructor(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}accept(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}toObservable(){switch(this.kind){case"N":return Cl(this.value);case"E":return e=this.error,new y(t=>t.error(e));case"C":return El()}var e;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class Tl extends f{constructor(e,t,n=0){super(e),this.scheduler=t,this.delay=n}static dispatch(e){const{notification:t,destination:n}=e;t.observe(n),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(Tl.dispatch,this.delay,new Pl(e,this.destination)))}_next(e){this.scheduleMessage(Ol.createNext(e))}_error(e){this.scheduleMessage(Ol.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(Ol.createComplete()),this.unsubscribe()}}class Pl{constructor(e,t){this.notification=e,this.destination=t}}class jl extends S{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){if(!this.isStopped){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift()}super.next(e)}nextTimeWindow(e){this.isStopped||(this._events.push(new Al(this._getNow(),e)),this._trimBufferThenGetEvents()),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,n=t?this._events:this._trimBufferThenGetEvents(),r=this.scheduler,o=n.length;let i;if(this.closed)throw new _;if(this.isStopped||this.hasError?i=u.EMPTY:(this.observers.push(e),i=new w(this,e)),r&&e.add(e=new Tl(e,r)),t)for(let s=0;s<o&&!e.closed;s++)e.next(n[s]);else for(let s=0;s<o&&!e.closed;s++)e.next(n[s].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),i}_getNow(){return(this.scheduler||Sl).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,n=this._windowTime,r=this._events,o=r.length;let i=0;for(;i<o&&!(e-r[i].time<n);)i++;return o>t&&(i=Math.max(i,o-t)),i>0&&r.splice(0,i),r}}class Al{constructor(e,t){this.time=e,this.value=t}}const Il={url:"",deserializer:e=>JSON.parse(e.data),serializer:e=>JSON.stringify(e)};class Rl extends k{constructor(e,t){if(super(),e instanceof y)this.destination=t,this.source=e;else{const t=this._config=Object.assign({},Il);if(this._output=new S,"string"==typeof e)t.url=e;else for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(!t.WebSocketCtor&&WebSocket)t.WebSocketCtor=WebSocket;else if(!t.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new jl}}lift(e){const t=new Rl(this._config,this.destination);return t.operator=e,t.source=this,t}_resetState(){this._socket=null,this.source||(this.destination=new jl),this._output=new S}multiplex(e,t,n){const r=this;return new y(o=>{try{r.next(e())}catch(s){o.error(s)}const i=r.subscribe(e=>{try{n(e)&&o.next(e)}catch(s){o.error(s)}},e=>o.error(e),()=>o.complete());return()=>{try{r.next(t())}catch(s){o.error(s)}i.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:e,protocol:t,url:n,binaryType:r}=this._config,o=this._output;let i=null;try{i=t?new e(n,t):new e(n),this._socket=i,r&&(this._socket.binaryType=r)}catch(a){return void o.error(a)}const s=new u(()=>{this._socket=null,i&&1===i.readyState&&i.close()});i.onopen=e=>{const{_socket:t}=this;if(!t)return i.close(),void this._resetState();const{openObserver:n}=this._config;n&&n.next(e);const r=this.destination;this.destination=f.create(t=>{if(1===i.readyState)try{const{serializer:e}=this._config;i.send(e(t))}catch(e){this.destination.error(e)}},e=>{const{closingObserver:t}=this._config;t&&t.next(void 0),e&&e.code?i.close(e.code,e.reason):o.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:e}=this._config;e&&e.next(void 0),i.close(),this._resetState()}),r&&r instanceof jl&&s.add(r.subscribe(this.destination))},i.onerror=e=>{this._resetState(),o.error(e)},i.onclose=e=>{this._resetState();const{closeObserver:t}=this._config;t&&t.next(e),e.wasClean?o.complete():o.error(e)},i.onmessage=e=>{try{const{deserializer:t}=this._config;o.next(t(e))}catch(t){o.error(t)}}}_subscribe(e){const{source:t}=this;return t?t.subscribe(e):(this._socket||this._connectSocket(),this._output.subscribe(e),e.add(()=>{const{_socket:e}=this;0===this._output.observers.length&&(e&&1===e.readyState&&e.close(),this._resetState())}),e)}unsubscribe(){const{_socket:e}=this;e&&1===e.readyState&&e.close(),this._resetState(),super.unsubscribe()}}function Nl(e){return e||(e=0),new Promise((function(t){return setTimeout(t,e)}))}function Dl(){return Math.random().toString(36).substring(2)}var Ml=0,$l=0;function Fl(){var e=(new Date).getTime();return e===Ml?1e3*e+ ++$l:(Ml=e,$l=0,1e3*e)}var Ll="[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0),Hl={create:function(e){var t={messagesCallback:null,bc:new BroadcastChannel(e),subFns:[]};return t.bc.onmessage=function(e){t.messagesCallback&&t.messagesCallback(e.data)},t},close:function(e){e.bc.close(),e.subFns=[]},onMessage:function(e,t){e.messagesCallback=t},postMessage:function(e,t){e.bc.postMessage(t,!1)},canBeUsed:function(){if(Ll&&"undefined"==typeof window)return!1;if("function"==typeof BroadcastChannel){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}return!1},type:"native",averageResponseTime:function(){return 150},microSeconds:Fl};function Bl(){return(new Date).getTime()}var zl=function(e){var t=new Set,n=new Map;this.has=t.has.bind(t),this.add=function(r){n.set(r,Bl()),t.add(r),function(){for(var r=Bl()-e,o=t[Symbol.iterator]();;){var i=o.next().value;if(!i)return;if(!(n.get(i)<r))return;n.delete(i),t.delete(i)}}()},this.clear=function(){t.clear(),n.clear()}};function Ul(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.parse(JSON.stringify(e));return void 0===t.webWorkerSupport&&(t.webWorkerSupport=!0),t.idb||(t.idb={}),t.idb.ttl||(t.idb.ttl=45e3),t.idb.fallbackInterval||(t.idb.fallbackInterval=150),e.idb&&"function"==typeof e.idb.onclose&&(t.idb.onclose=e.idb.onclose),t.localstorage||(t.localstorage={}),t.localstorage.removeTimeout||(t.localstorage.removeTimeout=6e4),e.methods&&(t.methods=e.methods),t.node||(t.node={}),t.node.ttl||(t.node.ttl=12e4),void 0===t.node.useFastPath&&(t.node.useFastPath=!0),t}function Vl(){if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof window){if(void 0!==window.mozIndexedDB)return window.mozIndexedDB;if(void 0!==window.webkitIndexedDB)return window.webkitIndexedDB;if(void 0!==window.msIndexedDB)return window.msIndexedDB}return!1}function ql(e){return e.closed?Promise.resolve():e.messagesCallback?(t=e.db,n=e.lastCursorId,r=t.transaction("messages").objectStore("messages"),o=[],i=IDBKeyRange.bound(n+1,1/0),new Promise((function(e){r.openCursor(i).onsuccess=function(t){var n=t.target.result;n?(o.push(n.value),n.continue()):e(o)}}))).then((function(t){return t.filter((function(e){return!!e})).map((function(t){return t.id>e.lastCursorId&&(e.lastCursorId=t.id),t})).filter((function(t){return function(e,t){return!(e.uuid===t.uuid||t.eMIs.has(e.id)||e.data.time<t.messagesCallbackTime)}(t,e)})).sort((function(e,t){return e.time-t.time})).forEach((function(t){e.messagesCallback&&(e.eMIs.add(t.id),e.messagesCallback(t.data))})),Promise.resolve()})):Promise.resolve();var t,n,r,o,i}var Wl={create:function(e,t){return t=Ul(t),function(e){var t=Vl().open("pubkey.broadcast-channel-0-"+e,1);return t.onupgradeneeded=function(e){e.target.result.createObjectStore("messages",{keyPath:"id",autoIncrement:!0})},new Promise((function(e,n){t.onerror=function(e){return n(e)},t.onsuccess=function(){e(t.result)}}))}(e).then((function(n){var r={closed:!1,lastCursorId:0,channelName:e,options:t,uuid:Dl(),eMIs:new zl(2*t.idb.ttl),writeBlockPromise:Promise.resolve(),messagesCallback:null,readQueuePromises:[],db:n};return n.onclose=function(){r.closed=!0,t.idb.onclose&&t.idb.onclose()},function e(t){t.closed||ql(t).then((function(){return Nl(t.options.idb.fallbackInterval)})).then((function(){return e(t)}))}(r),r}))},close:function(e){e.closed=!0,e.db.close()},onMessage:function(e,t,n){e.messagesCallbackTime=n,e.messagesCallback=t,ql(e)},postMessage:function(e,t){return e.writeBlockPromise=e.writeBlockPromise.then((function(){return function(e,t,n){var r={uuid:t,time:(new Date).getTime(),data:n},o=e.transaction(["messages"],"readwrite");return new Promise((function(e,t){o.oncomplete=function(){return e()},o.onerror=function(e){return t(e)},o.objectStore("messages").add(r)}))}(e.db,e.uuid,t)})).then((function(){var t;0===Math.floor(11*Math.random()+0)&&function(e,t){var n=(new Date).getTime()-t,r=e.transaction("messages").objectStore("messages"),o=[];return new Promise((function(e){r.openCursor().onsuccess=function(t){var r=t.target.result;if(r){var i=r.value;if(!(i.time<n))return void e(o);o.push(i),r.continue()}else e(o)}}))}(t=e.db,e.options.idb.ttl).then((function(e){return Promise.all(e.map((function(e){return function(e,t){var n=e.transaction(["messages"],"readwrite").objectStore("messages").delete(t);return new Promise((function(e){n.onsuccess=function(){return e()}}))}(t,e.id)})))}))})),e.writeBlockPromise},canBeUsed:function(){return!Ll&&!!Vl()},type:"idb",averageResponseTime:function(e){return 2*e.idb.fallbackInterval},microSeconds:Fl};function Ql(){var e;if("undefined"==typeof window)return null;try{e=window.localStorage,e=window["ie8-eventlistener/storage"]||window.localStorage}catch(t){}return e}function Kl(e){return"pubkey.broadcastChannel-"+e}function Gl(){if(Ll)return!1;var e=Ql();if(!e)return!1;try{var t="__broadcastchannel_check";e.setItem(t,"works"),e.removeItem(t)}catch(n){return!1}return!0}var Zl={create:function(e,t){if(t=Ul(t),!Gl())throw new Error("BroadcastChannel: localstorage cannot be used");var n=Dl(),r=new zl(t.localstorage.removeTimeout),o={channelName:e,uuid:n,eMIs:r};return o.listener=function(e,t){var i=Kl(e),s=function(e){var t;e.key===i&&(t=JSON.parse(e.newValue),o.messagesCallback&&t.uuid!==n&&t.token&&!r.has(t.token)&&(t.data.time&&t.data.time<o.messagesCallbackTime||(r.add(t.token),o.messagesCallback(t.data))))};return window.addEventListener("storage",s),s}(e),o},close:function(e){window.removeEventListener("storage",e.listener)},onMessage:function(e,t,n){e.messagesCallbackTime=n,e.messagesCallback=t},postMessage:function(e,t){return new Promise((function(n){Nl().then((function(){var r=Kl(e.channelName),o={token:Dl(),time:(new Date).getTime(),data:t,uuid:e.uuid},i=JSON.stringify(o);Ql().setItem(r,i);var s=document.createEvent("Event");s.initEvent("storage",!0,!0),s.key=r,s.newValue=i,window.dispatchEvent(s),n()}))}))},canBeUsed:Gl,type:"localstorage",averageResponseTime:function(){var e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")?240:120},microSeconds:Fl},Yl=Fl,Jl=new Set,Xl={create:function(e){var t={name:e,messagesCallback:null};return Jl.add(t),t},close:function(e){Jl.delete(e)},onMessage:function(e,t){e.messagesCallback=t},postMessage:function(e,t){return new Promise((function(n){return setTimeout((function(){Array.from(Jl).filter((function(t){return t.name===e.name})).filter((function(t){return t!==e})).filter((function(e){return!!e.messagesCallback})).forEach((function(e){return e.messagesCallback(t)})),n()}),5)}))},canBeUsed:function(){return!0},type:"simulate",averageResponseTime:function(){return 5},microSeconds:Yl},eh=[Hl,Wl,Zl];if(Ll){var th=n(2);"function"==typeof th.canBeUsed&&eh.push(th)}var nh=function(e,t){var n,r,o;this.name=e,this.options=Ul(t),this.method=function(e){var t=[].concat(e.methods,eh).filter(Boolean);if(e.type){if("simulate"===e.type)return Xl;var n=t.find((function(t){return t.type===e.type}));if(n)return n;throw new Error("method-type "+e.type+" not found")}e.webWorkerSupport||Ll||(t=t.filter((function(e){return"idb"!==e.type})));var r=t.find((function(e){return e.canBeUsed()}));if(r)return r;throw new Error("No useable methode found:"+JSON.stringify(eh.map((function(e){return e.type}))))}(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._befC=[],this._prepP=null,(o=r=(n=this).method.create(n.name,n.options))&&"function"==typeof o.then?(n._prepP=r,r.then((function(e){n._state=e}))):n._state=r};function rh(e,t,n){var r={time:e.method.microSeconds(),type:t,data:n};return(e._prepP?e._prepP:Promise.resolve()).then((function(){return e.method.postMessage(e._state,r)}))}function oh(e){return e._addEL.message.length>0||e._addEL.internal.length>0}function ih(e,t,n){e._addEL[t].push(n),function(e){if(!e._iL&&oh(e)){var t=function(t){e._addEL[t.type].forEach((function(e){t.time>=e.time&&e.fn(t.data)}))},n=e.method.microSeconds();e._prepP?e._prepP.then((function(){e._iL=!0,e.method.onMessage(e._state,t,n)})):(e._iL=!0,e.method.onMessage(e._state,t,n))}}(e)}function sh(e,t,n){e._addEL[t]=e._addEL[t].filter((function(e){return e!==n})),function(e){if(e._iL&&!oh(e)){e._iL=!1;var t=e.method.microSeconds();e.method.onMessage(e._state,null,t)}}(e)}nh._pubkey=!0,nh.prototype={postMessage:function(e){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");return rh(this,"message",e)},postInternal:function(e){return rh(this,"internal",e)},set onmessage(e){var t={time:this.method.microSeconds(),fn:e};sh(this,"message",this._onML),e&&"function"==typeof e?(this._onML=t,ih(this,"message",t)):this._onML=null},addEventListener:function(e,t){ih(this,e,{time:this.method.microSeconds(),fn:t})},removeEventListener:function(e,t){sh(this,e,this._addEL[e].find((function(e){return e.fn===t})))},close:function(){var e=this;if(!this.closed){this.closed=!0;var t=this._prepP?this._prepP:Promise.resolve();return this._onML=null,this._addEL.message=[],t.then((function(){return Promise.all(e._befC.map((function(e){return e()})))})).then((function(){return e.method.close(e._state)}))}},get type(){return this.method.type}};let ah=(()=>{class e{constructor(){this.channel=new nh(e.CHANNEL_CHANGE_NAME)}pushChange(e){this.channel.postMessage(e)}}return e.CHANNEL_CHANGE_NAME="preview-ui-changes",e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),ch=(()=>{class e{constructor(){this.listOfChanges=[],this.changeEmitter=new S,this.connectionStatus=new jl(1),this.previewServiceWebSocket=new Rl("wss://test.dont-code.net/preview/preview"),this.connectionStatus.next("connected"),this.previewServiceWebSocket.subscribe(e=>{this.listOfChanges.push(e),this.changeEmitter.next(e)},e=>{this.connectionStatus.next("ERROR:"+e)},()=>{this.connectionStatus.next("closed")}),this.channel=new nh(ah.CHANNEL_CHANGE_NAME),this.channel.onmessage=e=>{this.listOfChanges.push(e),this.changeEmitter.next(e)}}getListOfChanges(){return this.listOfChanges}getChangeEvents(){return this.changeEmitter}getConnectionStatus(){return this.connectionStatus}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var lh=dl.DontCode.dtcde;let hh=(()=>{class e{constructor(e,t){this.changeListener=e,this.valueService=t,this.receivedCommands=new S,t.receiveUpdatesFrom(this.receivedCommands),e.getChangeEvents().subscribe(e=>{console.log("Received Change ",e),this.receivedCommands.next(new dl.Change(dl.ChangeType.UPDATE,e.position,e.value,this.calculatePointerFor(e.position)))})}getJsonAt(e){return this.valueService.findAtPosition(e,!1)}pushCommand(e){this.receivedCommands.next(e)}receiveCommands(e,t){return e?this.receivedCommands.pipe(fl(n=>{if(null!=n.position&&n.position.startsWith(e)){if(t){const r=n.position.indexOf("/",e.length+1);return!(-1==r||!n.position.startsWith(t,r+1))}return!0}return!1})):this.receivedCommands}calculatePointerFor(e){return lh.getSchemaManager().generateSchemaPointer(e)}}return e.\u0275fac=function(t){return new(t||e)(We(ch),We(pl))},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class uh extends S{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return t&&!t.closed&&e.next(this._value),t}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new _;return this._value}next(e){super.next(this._value=e)}}function dh(e,t){return"function"==typeof t?n=>n.pipe(dh((n,r)=>M(e(n,r)).pipe(C((e,o)=>t(n,e,r,o))))):t=>t.lift(new ph(e))}class ph{constructor(e){this.project=e}call(e,t){return t.subscribe(new fh(e,this.project))}}class fh extends F{constructor(e,t){super(e),this.project=t,this.index=0}_next(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(r){return void this.destination.error(r)}this._innerSub(t)}_innerSub(e){const t=this.innerSubscription;t&&t.unsubscribe();const n=new $(this),r=this.destination;r.add(n),this.innerSubscription=L(e,n),this.innerSubscription!==n&&r.add(this.innerSubscription)}_complete(){const{innerSubscription:e}=this;e&&!e.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=void 0}notifyComplete(){this.innerSubscription=void 0,this.isStopped&&super._complete()}notifyNext(e){this.destination.next(e)}}const mh=(()=>{function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e})();function gh(e){return t=>0===e?El():t.lift(new bh(e))}class bh{constructor(e){if(this.total=e,this.total<0)throw new mh}call(e,t){return t.subscribe(new yh(e,this.total))}}class yh extends f{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){const t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))}}function vh(){}function _h(e,t,n){return function(r){return r.lift(new wh(e,t,n))}}class wh{constructor(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}call(e,t){return t.subscribe(new xh(e,this.nextOrObserver,this.error,this.complete))}}class xh extends f{constructor(e,t,n,o){super(e),this._tapNext=vh,this._tapError=vh,this._tapComplete=vh,this._tapError=n||vh,this._tapComplete=o||vh,r(t)?(this._context=this,this._tapNext=t):t&&(this._context=t,this._tapNext=t.next||vh,this._tapError=t.error||vh,this._tapComplete=t.complete||vh)}_next(e){try{this._tapNext.call(this._context,e)}catch(t){return void this.destination.error(t)}this.destination.next(e)}_error(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)}_complete(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()}}const Sh={provide:Ys,useFactory:function(e,t){return()=>{if(Sc(t)){const t=Array.from(e.querySelectorAll(`[class*=${kh}]`)),n=/\bflex-layout-.+?\b/g;t.forEach(e=>{e.classList.contains(kh+"ssr")&&e.parentNode?e.parentNode.removeChild(e):e.className.replace(n,"")})}}},deps:[za,Zs],multi:!0},kh="flex-layout-";let Eh=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},providers:[Sh]}),e})();class Ch{constructor(e=!1,t="all",n="",r="",o=0){this.matches=e,this.mediaQuery=t,this.mqAlias=n,this.suffix=r,this.priority=o,this.property=""}clone(){return new Ch(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let Oh=(()=>{class e{constructor(){this.stylesheet=new Map}addStyleToElement(e,t,n){const r=this.stylesheet.get(e);r?r.set(t,n):this.stylesheet.set(e,new Map([[t,n]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(e,t){const n=this.stylesheet.get(e);let r="";if(n){const e=n.get(t);"number"!=typeof e&&"string"!=typeof e||(r=e+"")}return r}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({factory:function(){return new e},token:e,providedIn:"root"}),e})();const Th={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},Ph=new Me("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>Th}),jh=new Me("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),Ah=new Me("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function Ih(e,t){return e=e?e.clone():new Ch,t&&(e.mqAlias=t.alias,e.mediaQuery=t.mediaQuery,e.suffix=t.suffix,e.priority=t.priority),e}const Rh=["row","column","row-reverse","column-reverse"];function Nh(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}let Dh=(()=>{class e{constructor(e,t,n,r){this.elementRef=e,this.styleBuilder=t,this.styler=n,this.marshal=r,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new S,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,this.marshal.activatedAlias)}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const n=t.split(".").slice(1).join(".");this.setValue(e[t].currentValue,n)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(e=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),e)}addStyles(e,t){const n=this.styleBuilder,r=n.shouldCache;let o=this.styleCache.get(e);o&&r||(o=n.buildStyles(e,t),r&&this.styleCache.set(e,o)),this.mru=Object.assign({},o),this.applyStyleToElement(o),n.sideEffect(e,o,t)}clearStyles(){Object.keys(this.mru).forEach(e=>{this.mru[e]=""}),this.applyStyleToElement(this.mru),this.mru={}}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(e,t=!1){if(e){const[n,r]=this.styler.getFlowDirection(e);if(!r&&t){const t=function(e){let[t,n,r]=function(e){e=e?e.toLowerCase():"";let[t,n,r]=e.split(" ");return Rh.find(e=>e===t)||(t=Rh[0]),"inline"===n&&(n="inline"!==r?r:"",r="inline"),[t,Nh(n),!!r]}(e);return function(e,t=null,n=!1){return{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":e,"flex-wrap":t||null}}(t,n,r)}(n);this.styler.applyStyleToElements(t,[e])}return n.trim()}return"row"}hasWrap(e){return this.styler.hasWrap(e)}applyStyleToElement(e,t,n=this.nativeElement){this.styler.applyStyleToElement(n,e,t)}setValue(e,t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,e,t)}updateWithValue(e){this.currentValue!==e&&(this.addStyles(e),this.currentValue=e)}}return e.\u0275fac=function(e){!function(){throw new Error("invalid")}()},e.\u0275dir=pt({type:e,features:[At]}),e})();const Mh=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.9px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.9px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.9px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.9px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.9px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.9px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.9px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.9px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.9px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],$h="(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)",Fh="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)",Lh="(orientation: portrait) and (min-width: 840px)",Hh="(orientation: landscape) and (min-width: 1280px)",Bh={HANDSET:"(orientation: portrait) and (max-width: 599.9px), (orientation: landscape) and (max-width: 959.9px)",TABLET:`${$h} , ${Fh}`,WEB:`${Lh}, ${Hh} `,HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599.9px)",TABLET_PORTRAIT:$h+" ",WEB_PORTRAIT:""+Lh,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.9px)",TABLET_LANDSCAPE:""+Fh,WEB_LANDSCAPE:""+Hh},zh=[{alias:"handset",priority:2e3,mediaQuery:Bh.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:Bh.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:Bh.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:Bh.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:Bh.TABLET_LANDSCAPE},{alias:"tablet.portrait",priority:2100,mediaQuery:Bh.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:Bh.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:Bh.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:Bh.WEB_PORTRAIT,overlapping:!0}],Uh=/(\.|-|_)/g;function Vh(e){let t=e.length>0?e.charAt(0):"",n=e.length>1?e.slice(1):"";return t.toUpperCase()+n}const qh=new Me("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const e=Qe(Ah),t=Qe(Ph),n=[].concat.apply([],(e||[]).map(e=>Array.isArray(e)?e:[e]));return function(e,t=[]){const n={};return e.forEach(e=>{n[e.alias]=e}),t.forEach(e=>{n[e.alias]?function(e,...t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(let n of t)if(null!=n)for(let t in n)n.hasOwnProperty(t)&&(e[t]=n[t])}(n[e.alias],e):n[e.alias]=e}),(r=Object.keys(n).map(e=>n[e])).forEach(e=>{e.suffix||(e.suffix=e.alias.replace(Uh,"|").split("|").map(Vh).join(""),e.overlapping=!!e.overlapping)}),r;var r}((t.disableDefaultBps?[]:Mh).concat(t.addOrientationBps?zh:[]),n)}});function Wh(e,t){return(t&&t.priority||0)-(e&&e.priority||0)}function Qh(e,t){return(e.priority||0)-(t.priority||0)}let Kh=(()=>{class e{constructor(e){this.findByMap=new Map,this.items=[...e].sort(Qh)}findByAlias(e){return e?this.findWithPredicate(e,t=>t.alias==e):null}findByQuery(e){return this.findWithPredicate(e,t=>t.mediaQuery==e)}get overlappings(){return this.items.filter(e=>1==e.overlapping)}get aliases(){return this.items.map(e=>e.alias)}get suffixes(){return this.items.map(e=>e.suffix?e.suffix:"")}findWithPredicate(e,t){let n=this.findByMap.get(e);return n||(n=this.items.find(t)||null,this.findByMap.set(e,n)),n||null}}return e.\u0275fac=function(t){return new(t||e)(We(qh))},e.\u0275prov=ce({factory:function(){return new e(We(qh))},token:e,providedIn:"root"}),e})(),Gh=(()=>{class e{constructor(e,t,n){this._zone=e,this._platformId=t,this._document=n,this.source=new uh(new Ch(!0)),this.registry=new Map,this.pendingRemoveListenerFns=[],this._observable$=this.source.asObservable()}get activations(){const e=[];return this.registry.forEach((t,n)=>{t.matches&&e.push(n)}),e}isActive(e){const t=this.registry.get(e);return t?t.matches:this.registerQuery(e).some(e=>e.matches)}observe(e,t=!1){if(e&&e.length){const n=this._observable$.pipe(fl(n=>!t||e.indexOf(n.mediaQuery)>-1));return q(new y(t=>{const n=this.registerQuery(e);if(n.length){const e=n.pop();n.forEach(e=>{t.next(e)}),this.source.next(e)}t.complete()}),n)}return this._observable$}registerQuery(e){const t=Array.isArray(e)?e:[e],n=[];return function(e,t){const n=e.filter(e=>!Zh[e]);if(n.length>0){const e=n.join(", ");try{const r=t.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(t.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${e} {.fx-query-test{ }}\n`)),t.head.appendChild(r),n.forEach(e=>Zh[e]=r)}catch(r){console.error(r)}}}(t,this._document),t.forEach(e=>{const t=t=>{this._zone.run(()=>this.source.next(new Ch(t.matches,e)))};let r=this.registry.get(e);r||(r=this.buildMQL(e),r.addListener(t),this.pendingRemoveListenerFns.push(()=>r.removeListener(t)),this.registry.set(e,r)),r.matches&&n.push(new Ch(!0,e))}),n}ngOnDestroy(){let e;for(;e=this.pendingRemoveListenerFns.pop();)e()}buildMQL(e){return function(e,t){return t&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:()=>{},removeListener:()=>{},onchange:null,addEventListener(){},removeEventListener(){},dispatchEvent:()=>!1}}(e,Sc(this._platformId))}}return e.\u0275fac=function(t){return new(t||e)(We(ua),We(Zs),We(za))},e.\u0275prov=ce({factory:function(){return new e(We(ua),We(Zs),We(za))},token:e,providedIn:"root"}),e})();const Zh={},Yh={alias:"print",mediaQuery:"print",priority:1e3};let Jh=(()=>{class e{constructor(e,t,n){this.breakpoints=e,this.layoutConfig=t,this._document=n,this.registeredBeforeAfterPrintHooks=!1,this.isPrintingBeforeAfterEvent=!1,this.beforePrintEventListeners=[],this.afterPrintEventListeners=[],this.isPrinting=!1,this.queue=new Xh,this.deactivations=[]}withPrintQuery(e){return[...e,"print"]}isPrintEvent(e){return e.mediaQuery.startsWith("print")}get printAlias(){return this.layoutConfig.printWithBreakpoints||[]}get printBreakPoints(){return this.printAlias.map(e=>this.breakpoints.findByAlias(e)).filter(e=>null!==e)}getEventBreakpoints({mediaQuery:e}){const t=this.breakpoints.findByQuery(e);return(t?[...this.printBreakPoints,t]:this.printBreakPoints).sort(Wh)}updateEvent(e){let t=this.breakpoints.findByQuery(e.mediaQuery);return this.isPrintEvent(e)&&(t=this.getEventBreakpoints(e)[0],e.mediaQuery=t?t.mediaQuery:""),Ih(e,t)}registerBeforeAfterPrintHooks(e){if(!this._document.defaultView||this.registeredBeforeAfterPrintHooks)return;this.registeredBeforeAfterPrintHooks=!0;const t=()=>{this.isPrinting||(this.isPrintingBeforeAfterEvent=!0,this.startPrinting(e,this.getEventBreakpoints(new Ch(!0,"print"))),e.updateStyles())},n=()=>{this.isPrintingBeforeAfterEvent=!1,this.isPrinting&&(this.stopPrinting(e),e.updateStyles())};this._document.defaultView.addEventListener("beforeprint",t),this._document.defaultView.addEventListener("afterprint",n),this.beforePrintEventListeners.push(t),this.afterPrintEventListeners.push(n)}interceptEvents(e){return this.registerBeforeAfterPrintHooks(e),t=>{this.isPrintEvent(t)?t.matches&&!this.isPrinting?(this.startPrinting(e,this.getEventBreakpoints(t)),e.updateStyles()):t.matches||!this.isPrinting||this.isPrintingBeforeAfterEvent||(this.stopPrinting(e),e.updateStyles()):this.collectActivations(t)}}blockPropagation(){return e=>!(this.isPrinting||this.isPrintEvent(e))}startPrinting(e,t){this.isPrinting=!0,e.activatedBreakpoints=this.queue.addPrintBreakpoints(t)}stopPrinting(e){e.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}collectActivations(e){if(!this.isPrinting||this.isPrintingBeforeAfterEvent)if(e.matches)this.isPrintingBeforeAfterEvent||(this.deactivations=[]);else{const t=this.breakpoints.findByQuery(e.mediaQuery);t&&(this.deactivations.push(t),this.deactivations.sort(Wh))}}ngOnDestroy(){this.beforePrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("beforeprint",e)),this.afterPrintEventListeners.forEach(e=>this._document.defaultView.removeEventListener("afterprint",e))}}return e.\u0275fac=function(t){return new(t||e)(We(Kh),We(Ph),We(za))},e.\u0275prov=ce({factory:function(){return new e(We(Kh),We(Ph),We(za))},token:e,providedIn:"root"}),e})();class Xh{constructor(){this.printBreakpoints=[]}addPrintBreakpoints(e){return e.push(Yh),e.sort(Wh),e.forEach(e=>this.addBreakpoint(e)),this.printBreakpoints}addBreakpoint(e){e&&void 0===this.printBreakpoints.find(t=>t.mediaQuery===e.mediaQuery)&&(this.printBreakpoints=function(e){return!!e&&e.mediaQuery.startsWith("print")}(e)?[e,...this.printBreakpoints]:[...this.printBreakpoints,e])}clear(){this.printBreakpoints=[]}}function eu(e){for(let t in e){let n=e[t]||"";switch(t){case"display":e.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+t]=n;break;case"flex-direction":n=n||"row",e["-webkit-flex-direction"]=n,e["flex-direction"]=n;break;case"order":e.order=e["-webkit-"+t]=isNaN(+n)?"0":n}}return e}let tu=(()=>{class e{constructor(e,t,n,r){this._serverStylesheet=e,this._serverModuleLoaded=t,this._platformId=n,this.layoutConfig=r}applyStyleToElement(e,t,n=null){let r={};"string"==typeof t&&(r[t]=n,t=r),r=this.layoutConfig.disableVendorPrefixes?t:eu(t),this._applyMultiValueStyleToElement(r,e)}applyStyleToElements(e,t=[]){const n=this.layoutConfig.disableVendorPrefixes?e:eu(e);t.forEach(e=>{this._applyMultiValueStyleToElement(n,e)})}getFlowDirection(e){let t=this.lookupStyle(e,"flex-direction");return[t||"row",this.lookupInlineStyle(e,"flex-direction")||kc(this._platformId)&&this._serverModuleLoaded?t:""]}hasWrap(e){return"wrap"===this.lookupStyle(e,"flex-wrap")}lookupAttributeValue(e,t){return e.getAttribute(t)||""}lookupInlineStyle(e,t){return Sc(this._platformId)?e.style.getPropertyValue(t):this._getServerStyle(e,t)}lookupStyle(e,t,n=!1){let r="";return e&&((r=this.lookupInlineStyle(e,t))||(Sc(this._platformId)?n||(r=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(r=this._serverStylesheet.getStyleForElement(e,t)))),r?r.trim():""}_applyMultiValueStyleToElement(e,t){Object.keys(e).sort().forEach(n=>{const r=e[n],o=Array.isArray(r)?r:[r];o.sort();for(let e of o)e=e?e+"":"",Sc(this._platformId)||!this._serverModuleLoaded?Sc(this._platformId)?t.style.setProperty(n,e):this._setServerStyle(t,n,e):this._serverStylesheet.addStyleToElement(t,n,e)})}_setServerStyle(e,t,n){t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const r=this._readStyleAttribute(e);r[t]=n||"",this._writeStyleAttribute(e,r)}_getServerStyle(e,t){return this._readStyleAttribute(e)[t]||""}_readStyleAttribute(e){const t={},n=e.getAttribute("style");if(n){const e=n.split(/;+/g);for(let n=0;n<e.length;n++){const r=e[n].trim();if(r.length>0){const e=r.indexOf(":");if(-1===e)throw new Error("Invalid CSS style: "+r);t[r.substr(0,e).trim()]=r.substr(e+1).trim()}}}return t}_writeStyleAttribute(e,t){let n="";for(const r in t)t[r]&&(n+=r+":"+t[r]+";");e.setAttribute("style",n)}}return e.\u0275fac=function(t){return new(t||e)(We(Oh),We(jh),We(Zs),We(Ph))},e.\u0275prov=ce({factory:function(){return new e(We(Oh),We(jh),We(Zs),We(Ph))},token:e,providedIn:"root"}),e})(),nu=(()=>{class e{constructor(e,t,n){this.matchMedia=e,this.breakpoints=t,this.hook=n,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new S,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}onMediaChange(e){const t=this.findByQuery(e.mediaQuery);t&&((e=Ih(e,t)).matches&&-1===this.activatedBreakpoints.indexOf(t)?(this.activatedBreakpoints.push(t),this.activatedBreakpoints.sort(Wh),this.updateStyles()):e.matches||-1===this.activatedBreakpoints.indexOf(t)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(t),1),this.activatedBreakpoints.sort(Wh),this.updateStyles()))}init(e,t,n,r,o=[]){ru(this.updateMap,e,t,n),ru(this.clearMap,e,t,r),this.buildElementKeyMap(e,t),this.watchExtraTriggers(e,t,o)}getValue(e,t,n){const r=this.elementMap.get(e);if(r){const e=void 0!==n?r.get(n):this.getActivatedValues(r,t);if(e)return e.get(t)}}hasValue(e,t){const n=this.elementMap.get(e);if(n){const e=this.getActivatedValues(n,t);if(e)return void 0!==e.get(t)||!1}return!1}setValue(e,t,n,r){let o=this.elementMap.get(e);if(o){const i=(o.get(r)||new Map).set(t,n);o.set(r,i),this.elementMap.set(e,o)}else o=(new Map).set(r,(new Map).set(t,n)),this.elementMap.set(e,o);const i=this.getValue(e,t);void 0!==i&&this.updateElement(e,t,i)}trackValue(e,t){return this.subject.asObservable().pipe(fl(n=>n.element===e&&n.key===t))}updateStyles(){this.elementMap.forEach((e,t)=>{const n=new Set(this.elementKeyMap.get(t));let r=this.getActivatedValues(e);r&&r.forEach((e,r)=>{this.updateElement(t,r,e),n.delete(r)}),n.forEach(n=>{if(r=this.getActivatedValues(e,n),r){const e=r.get(n);this.updateElement(t,n,e)}else this.clearElement(t,n)})})}clearElement(e,t){const n=this.clearMap.get(e);if(n){const r=n.get(t);r&&(r(),this.subject.next({element:e,key:t,value:""}))}}updateElement(e,t,n){const r=this.updateMap.get(e);if(r){const o=r.get(t);o&&(o(n),this.subject.next({element:e,key:t,value:n}))}}releaseElement(e){const t=this.watcherMap.get(e);t&&(t.forEach(e=>e.unsubscribe()),this.watcherMap.delete(e));const n=this.elementMap.get(e);n&&(n.forEach((e,t)=>n.delete(t)),this.elementMap.delete(e))}triggerUpdate(e,t){const n=this.elementMap.get(e);if(n){const r=this.getActivatedValues(n,t);r&&(t?this.updateElement(e,t,r.get(t)):r.forEach((t,n)=>this.updateElement(e,n,t)))}}buildElementKeyMap(e,t){let n=this.elementKeyMap.get(e);n||(n=new Set,this.elementKeyMap.set(e,n)),n.add(t)}watchExtraTriggers(e,t,n){if(n&&n.length){let r=this.watcherMap.get(e);if(r||(r=new Map,this.watcherMap.set(e,r)),!r.get(t)){const o=q(...n).subscribe(()=>{const n=this.getValue(e,t);this.updateElement(e,t,n)});r.set(t,o)}}}findByQuery(e){return this.breakpoints.findByQuery(e)}getActivatedValues(e,t){for(let r=0;r<this.activatedBreakpoints.length;r++){const n=e.get(this.activatedBreakpoints[r].alias);if(n&&(void 0===t||n.has(t)&&null!=n.get(t)))return n}const n=e.get("");return void 0===t||n&&n.has(t)?n:void 0}observeActivations(){const e=this.breakpoints.items.map(e=>e.mediaQuery);this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe(_h(this.hook.interceptEvents(this)),fl(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return e.\u0275fac=function(t){return new(t||e)(We(Gh),We(Kh),We(Jh))},e.\u0275prov=ce({factory:function(){return new e(We(Gh),We(Kh),We(Jh))},token:e,providedIn:"root"}),e})();function ru(e,t,n,r){if(void 0!==r){let o=e.get(t);o||(o=new Map,e.set(t,o)),o.set(n,r)}}let ou=(()=>{class e extends class{constructor(){this.shouldCache=!0}sideEffect(e,t,n){}}{buildStyles(e,t){return{display:"true"===e?t.display||(t.isServer?"initial":""):"none"}}}e.\u0275fac=function(n){return t(n||e)},e.\u0275prov=ce({factory:function(){return new e},token:e,providedIn:"root"});const t=nr(e);return e})(),iu=(()=>{class e extends Dh{constructor(e,t,n,r,o,i,s){super(e,t,n,r),this.layoutConfig=o,this.platformId=i,this.serverModuleLoaded=s,this.DIRECTIVE_KEY="show-hide",this.display="",this.hasLayout=!1,this.hasFlexChild=!1}ngAfterViewInit(){this.trackExtraTriggers();const e=Array.from(this.nativeElement.children);for(let n=0;n<e.length;n++)if(this.marshal.hasValue(e[n],"flex")){this.hasFlexChild=!0;break}su.has(this.nativeElement)?this.display=su.get(this.nativeElement):(this.display=this.getDisplayStyle(),su.set(this.nativeElement,this.display)),this.init();const t=this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY,"");void 0===t||""===t?this.setValue(!0,""):this.triggerUpdate()}ngOnChanges(e){Object.keys(e).forEach(t=>{if(-1!==this.inputs.indexOf(t)){const r=t.split("."),o=r.slice(1).join("."),i=e[t].currentValue;let s=""===i||0!==i&&null!=(n=i)&&""+n!="false";"fxHide"===r[0]&&(s=!s),this.setValue(s,o)}var n})}trackExtraTriggers(){this.hasLayout=this.marshal.hasValue(this.nativeElement,"layout"),["layout","layout-align"].forEach(e=>{this.marshal.trackValue(this.nativeElement,e).pipe(ll(this.destroySubject)).subscribe(this.triggerUpdate.bind(this))})}getDisplayStyle(){return this.hasLayout||this.hasFlexChild&&this.layoutConfig.addFlexToParent?"flex":this.styler.lookupStyle(this.nativeElement,"display",!0)}updateWithValue(e=!0){if(""===e)return;const t=kc(this.platformId);this.addStyles(e?"true":"false",{display:this.display,isServer:t}),t&&this.serverModuleLoaded&&this.nativeElement.style.setProperty("display",""),this.marshal.triggerUpdate(this.parentElement,"layout-gap")}}return e.\u0275fac=function(t){return new(t||e)(_i(Gi),_i(ou),_i(tu),_i(nu),_i(Ph),_i(Zs),_i(jh))},e.\u0275dir=pt({type:e,features:[si,At]}),e})();const su=new WeakMap,au=["fxShow","fxShow.print","fxShow.xs","fxShow.sm","fxShow.md","fxShow.lg","fxShow.xl","fxShow.lt-sm","fxShow.lt-md","fxShow.lt-lg","fxShow.lt-xl","fxShow.gt-xs","fxShow.gt-sm","fxShow.gt-md","fxShow.gt-lg","fxHide","fxHide.print","fxHide.xs","fxHide.sm","fxHide.md","fxHide.lg","fxHide.xl","fxHide.lt-sm","fxHide.lt-md","fxHide.lt-lg","fxHide.lt-xl","fxHide.gt-xs","fxHide.gt-sm","fxHide.gt-md","fxHide.gt-lg"];let cu=(()=>{class e extends iu{constructor(){super(...arguments),this.inputs=au}}e.\u0275fac=function(n){return t(n||e)},e.\u0275dir=pt({type:e,selectors:[["","fxShow",""],["","fxShow.print",""],["","fxShow.xs",""],["","fxShow.sm",""],["","fxShow.md",""],["","fxShow.lg",""],["","fxShow.xl",""],["","fxShow.lt-sm",""],["","fxShow.lt-md",""],["","fxShow.lt-lg",""],["","fxShow.lt-xl",""],["","fxShow.gt-xs",""],["","fxShow.gt-sm",""],["","fxShow.gt-md",""],["","fxShow.gt-lg",""],["","fxHide",""],["","fxHide.print",""],["","fxHide.xs",""],["","fxHide.sm",""],["","fxHide.md",""],["","fxHide.lg",""],["","fxHide.xl",""],["","fxHide.lt-sm",""],["","fxHide.lt-md",""],["","fxHide.lt-lg",""],["","fxHide.lt-xl",""],["","fxHide.gt-xs",""],["","fxHide.gt-sm",""],["","fxHide.gt-md",""],["","fxHide.gt-lg",""]],inputs:{fxShow:"fxShow","fxShow.print":"fxShow.print","fxShow.xs":"fxShow.xs","fxShow.sm":"fxShow.sm","fxShow.md":"fxShow.md","fxShow.lg":"fxShow.lg","fxShow.xl":"fxShow.xl","fxShow.lt-sm":"fxShow.lt-sm","fxShow.lt-md":"fxShow.lt-md","fxShow.lt-lg":"fxShow.lt-lg","fxShow.lt-xl":"fxShow.lt-xl","fxShow.gt-xs":"fxShow.gt-xs","fxShow.gt-sm":"fxShow.gt-sm","fxShow.gt-md":"fxShow.gt-md","fxShow.gt-lg":"fxShow.gt-lg",fxHide:"fxHide","fxHide.print":"fxHide.print","fxHide.xs":"fxHide.xs","fxHide.sm":"fxHide.sm","fxHide.md":"fxHide.md","fxHide.lg":"fxHide.lg","fxHide.xl":"fxHide.xl","fxHide.lt-sm":"fxHide.lt-sm","fxHide.lt-md":"fxHide.lt-md","fxHide.lt-lg":"fxHide.lt-lg","fxHide.lt-xl":"fxHide.lt-xl","fxHide.gt-xs":"fxHide.gt-xs","fxHide.gt-sm":"fxHide.gt-sm","fxHide.gt-md":"fxHide.gt-md","fxHide.gt-lg":"fxHide.gt-lg"},features:[si]});const t=nr(e);return e})(),lu=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[Eh]]}),e})();const hu=(()=>{function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e})();function uu(e){return new y(t=>{let n;try{n=e()}catch(r){return void t.error(r)}return(n?M(n):El()).subscribe(t)})}function du(){return U(1)}function pu(e){return function(t){return 0===e?El():t.lift(new fu(e))}}class fu{constructor(e){if(this.total=e,this.total<0)throw new mh}call(e,t){return t.subscribe(new mu(e,this.total))}}class mu extends f{constructor(e,t){super(e),this.total=t,this.ring=new Array,this.count=0}_next(e){const t=this.ring,n=this.total,r=this.count++;t.length<n?t.push(e):t[r%n]=e}_complete(){const e=this.destination;let t=this.count;if(t>0){const n=this.count>=this.total?this.total:this.count,r=this.ring;for(let o=0;o<n;o++){const o=t++%n;e.next(r[o])}}e.complete()}}function gu(e=vu){return t=>t.lift(new bu(e))}class bu{constructor(e){this.errorFactory=e}call(e,t){return t.subscribe(new yu(e,this.errorFactory))}}class yu extends f{constructor(e,t){super(e),this.errorFactory=t,this.hasValue=!1}_next(e){this.hasValue=!0,this.destination.next(e)}_complete(){if(this.hasValue)return this.destination.complete();{let t;try{t=this.errorFactory()}catch(e){t=e}this.destination.error(t)}}}function vu(){return new hu}function _u(e=null){return t=>t.lift(new wu(e))}class wu{constructor(e){this.defaultValue=e}call(e,t){return t.subscribe(new xu(e,this.defaultValue))}}class xu extends f{constructor(e,t){super(e),this.defaultValue=t,this.isEmpty=!0}_next(e){this.isEmpty=!1,this.destination.next(e)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}function Su(...e){return du()(Cl(...e))}class ku{constructor(e,t,n=!1){this.accumulator=e,this.seed=t,this.hasSeed=n}call(e,t){return t.subscribe(new Eu(e,this.accumulator,this.seed,this.hasSeed))}}class Eu extends f{constructor(e,t,n,r){super(e),this.accumulator=t,this._seed=n,this.hasSeed=r,this.index=0}get seed(){return this._seed}set seed(e){this.hasSeed=!0,this._seed=e}_next(e){if(this.hasSeed)return this._tryNext(e);this.seed=e,this.destination.next(e)}_tryNext(e){const t=this.index++;let n;try{n=this.accumulator(this.seed,e,t)}catch(r){this.destination.error(r)}this.seed=n,this.destination.next(n)}}function Cu(e){return function(t){const n=new Ou(e),r=t.lift(n);return n.caught=r}}class Ou{constructor(e){this.selector=e}call(e,t){return t.subscribe(new Tu(e,this.selector,this.caught))}}class Tu extends F{constructor(e,t,n){super(e),this.selector=t,this.caught=n}error(e){if(!this.isStopped){let n;try{n=this.selector(e,this.caught)}catch(t){return void super.error(t)}this._unsubscribeAndRecycle();const r=new $(this);this.add(r);const o=L(n,r);o!==r&&this.add(o)}}}function Pu(e,t){return H(e,t,1)}function ju(e,t){const n=arguments.length>=2;return r=>r.pipe(e?fl((t,n)=>e(t,n,r)):b,gh(1),n?_u(t):gu(()=>new hu))}class Au{constructor(e){this.callback=e}call(e,t){return t.subscribe(new Iu(e,this.callback))}}class Iu extends f{constructor(e,t){super(e),this.add(new u(t))}}class Ru{constructor(e,t){this.id=e,this.url=t}}class Nu extends Ru{constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Du extends Ru{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Mu extends Ru{constructor(e,t,n){super(e,t),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class $u extends Ru{constructor(e,t,n){super(e,t),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Fu extends Ru{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Lu extends Ru{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Hu extends Ru{constructor(e,t,n,r,o){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Bu extends Ru{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class zu extends Ru{constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Uu{constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Vu{constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class qu{constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Wu{constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Qu{constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Ku{constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Gu{constructor(e,t,n){this.routerEvent=e,this.position=t,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}class Zu{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function Yu(e){return new Zu(e)}function Ju(e){const t=Error("NavigationCancelingError: "+e);return t.ngNavigationCancelingError=!0,t}function Xu(e,t,n){const r=n.path.split("/");if(r.length>e.length)return null;if("full"===n.pathMatch&&(t.hasChildren()||r.length<e.length))return null;const o={};for(let i=0;i<r.length;i++){const t=r[i],n=e[i];if(t.startsWith(":"))o[t.substring(1)]=n;else if(t!==n.path)return null}return{consumed:e.slice(0,r.length),posParams:o}}function ed(e,t){const n=Object.keys(e),r=Object.keys(t);if(!n||!r||n.length!=r.length)return!1;let o;for(let i=0;i<n.length;i++)if(o=n[i],!td(e[o],t[o]))return!1;return!0}function td(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=[...e].sort(),r=[...t].sort();return n.every((e,t)=>r[t]===e)}return e===t}function nd(e){return Array.prototype.concat.apply([],e)}function rd(e){return e.length>0?e[e.length-1]:null}function od(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function id(e){return Ti(e)?e:Oi(e)?M(Promise.resolve(e)):Cl(e)}function sd(e,t,n){return n?function(e,t){return ed(e,t)}(e.queryParams,t.queryParams)&&function e(t,n){if(!hd(t.segments,n.segments))return!1;if(t.numberOfChildren!==n.numberOfChildren)return!1;for(const r in n.children){if(!t.children[r])return!1;if(!e(t.children[r],n.children[r]))return!1}return!0}(e.root,t.root):function(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>td(e[n],t[n]))}(e.queryParams,t.queryParams)&&function e(t,n){return function t(n,r,o){if(n.segments.length>o.length)return!!hd(n.segments.slice(0,o.length),o)&&!r.hasChildren();if(n.segments.length===o.length){if(!hd(n.segments,o))return!1;for(const t in r.children){if(!n.children[t])return!1;if(!e(n.children[t],r.children[t]))return!1}return!0}{const e=o.slice(0,n.segments.length),i=o.slice(n.segments.length);return!!hd(n.segments,e)&&!!n.children.primary&&t(n.children.primary,r,i)}}(t,n,n.segments)}(e.root,t.root)}class ad{constructor(e,t,n){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Yu(this.queryParams)),this._queryParamMap}toString(){return fd.serialize(this)}}class cd{constructor(e,t){this.segments=e,this.children=t,this.parent=null,od(t,(e,t)=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return md(this)}}class ld{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=Yu(this.parameters)),this._parameterMap}toString(){return wd(this)}}function hd(e,t){return e.length===t.length&&e.every((e,n)=>e.path===t[n].path)}function ud(e,t){let n=[];return od(e.children,(e,r)=>{"primary"===r&&(n=n.concat(t(e,r)))}),od(e.children,(e,r)=>{"primary"!==r&&(n=n.concat(t(e,r)))}),n}class dd{}class pd{parse(e){const t=new Cd(e);return new ad(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){return`${"/"+function e(t,n){if(!t.hasChildren())return md(t);if(n){const n=t.children.primary?e(t.children.primary,!1):"",r=[];return od(t.children,(t,n)=>{"primary"!==n&&r.push(`${n}:${e(t,!1)}`)}),r.length>0?`${n}(${r.join("//")})`:n}{const n=ud(t,(n,r)=>"primary"===r?[e(t.children.primary,!1)]:[`${r}:${e(n,!1)}`]);return 1===Object.keys(t.children).length&&null!=t.children.primary?`${md(t)}/${n[0]}`:`${md(t)}/(${n.join("//")})`}}(e.root,!0)}${function(e){const t=Object.keys(e).map(t=>{const n=e[t];return Array.isArray(n)?n.map(e=>`${bd(t)}=${bd(e)}`).join("&"):`${bd(t)}=${bd(n)}`});return t.length?"?"+t.join("&"):""}(e.queryParams)}${"string"==typeof e.fragment?"#"+encodeURI(e.fragment):""}`}}const fd=new pd;function md(e){return e.segments.map(e=>wd(e)).join("/")}function gd(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function bd(e){return gd(e).replace(/%3B/gi,";")}function yd(e){return gd(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function vd(e){return decodeURIComponent(e)}function _d(e){return vd(e.replace(/\+/g,"%20"))}function wd(e){return`${yd(e.path)}${t=e.parameters,Object.keys(t).map(e=>`;${yd(e)}=${yd(t[e])}`).join("")}`;var t}const xd=/^[^\/()?;=#]+/;function Sd(e){const t=e.match(xd);return t?t[0]:""}const kd=/^[^=?&#]+/,Ed=/^[^?&#]+/;class Cd{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new cd([],{}):new cd([],this.parseChildren())}parseQueryParams(){const e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n.primary=new cd(e,t)),n}parseSegment(){const e=Sd(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(e),new ld(vd(e),this.parseMatrixParams())}parseMatrixParams(){const e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){const t=Sd(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=Sd(this.remaining);e&&(n=e,this.capture(n))}e[vd(t)]=vd(n)}parseQueryParam(e){const t=function(e){const t=e.match(kd);return t?t[0]:""}(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=function(e){const t=e.match(Ed);return t?t[0]:""}(this.remaining);e&&(n=e,this.capture(n))}const r=_d(t),o=_d(n);if(e.hasOwnProperty(r)){let t=e[r];Array.isArray(t)||(t=[t],e[r]=t),t.push(o)}else e[r]=o}parseParens(e){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=Sd(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let o=void 0;n.indexOf(":")>-1?(o=n.substr(0,n.indexOf(":")),this.capture(o),this.capture(":")):e&&(o="primary");const i=this.parseChildren();t[o]=1===Object.keys(i).length?i.primary:new cd([],i),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}capture(e){if(!this.consumeOptional(e))throw new Error(`Expected "${e}".`)}}class Od{constructor(e){this._root=e}get root(){return this._root.value}parent(e){const t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){const t=Td(e,this._root);return t?t.children.map(e=>e.value):[]}firstChild(e){const t=Td(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){const t=Pd(e,this._root);return t.length<2?[]:t[t.length-2].children.map(e=>e.value).filter(t=>t!==e)}pathFromRoot(e){return Pd(e,this._root).map(e=>e.value)}}function Td(e,t){if(e===t.value)return t;for(const n of t.children){const t=Td(e,n);if(t)return t}return null}function Pd(e,t){if(e===t.value)return[t];for(const n of t.children){const r=Pd(e,n);if(r.length)return r.unshift(t),r}return[]}class jd{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}}function Ad(e){const t={};return e&&e.children.forEach(e=>t[e.value.outlet]=e),t}class Id extends Od{constructor(e,t){super(e),this.snapshot=t,Fd(this,e)}toString(){return this.snapshot.toString()}}function Rd(e,t){const n=function(e,t){const n=new Md([],{},{},"",{},"primary",t,null,e.root,-1,{});return new $d("",new jd(n,[]))}(e,t),r=new uh([new ld("",{})]),o=new uh({}),i=new uh({}),s=new uh({}),a=new uh(""),c=new Nd(r,o,s,a,i,"primary",t,n.root);return c.snapshot=n.root,new Id(new jd(c,[]),n)}class Nd{constructor(e,t,n,r,o,i,s,a){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(C(e=>Yu(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(C(e=>Yu(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function Dd(e,t="emptyOnly"){const n=e.pathFromRoot;let r=0;if("always"!==t)for(r=n.length-1;r>=1;){const e=n[r],t=n[r-1];if(e.routeConfig&&""===e.routeConfig.path)r--;else{if(t.component)break;r--}}return function(e){return e.reduce((e,t)=>({params:Object.assign(Object.assign({},e.params),t.params),data:Object.assign(Object.assign({},e.data),t.data),resolve:Object.assign(Object.assign({},e.resolve),t._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class Md{constructor(e,t,n,r,o,i,s,a,c,l,h){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=i,this.component=s,this.routeConfig=a,this._urlSegment=c,this._lastPathIndex=l,this._resolve=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Yu(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Yu(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class $d extends Od{constructor(e,t){super(t),this.url=e,Fd(this,t)}toString(){return Ld(this._root)}}function Fd(e,t){t.value._routerState=e,t.children.forEach(t=>Fd(e,t))}function Ld(e){const t=e.children.length>0?` { ${e.children.map(Ld).join(", ")} } `:"";return`${e.value}${t}`}function Hd(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,ed(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),ed(t.params,n.params)||e.params.next(n.params),function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!ed(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),ed(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Bd(e,t){var n,r;return ed(e.params,t.params)&&hd(n=e.url,r=t.url)&&n.every((e,t)=>ed(e.parameters,r[t].parameters))&&!(!e.parent!=!t.parent)&&(!e.parent||Bd(e.parent,t.parent))}function zd(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function Ud(e){return"object"==typeof e&&null!=e&&e.outlets}function Vd(e,t,n,r,o){let i={};return r&&od(r,(e,t)=>{i[t]=Array.isArray(e)?e.map(e=>""+e):""+e}),new ad(n.root===e?t:function e(t,n,r){const o={};return od(t.children,(t,i)=>{o[i]=t===n?r:e(t,n,r)}),new cd(t.segments,o)}(n.root,e,t),i,o)}class qd{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&zd(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(Ud);if(r&&r!==rd(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Wd{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}}function Qd(e,t,n){if(e||(e=new cd([],{})),0===e.segments.length&&e.hasChildren())return Kd(e,t,n);const r=function(e,t,n){let r=0,o=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;o<e.segments.length;){if(r>=n.length)return i;const t=e.segments[o],s=n[r];if(Ud(s))break;const a=""+s,c=r<n.length-1?n[r+1]:null;if(o>0&&void 0===a)break;if(a&&c&&"object"==typeof c&&void 0===c.outlets){if(!Jd(a,c,t))return i;r+=2}else{if(!Jd(a,{},t))return i;r++}o++}return{match:!0,pathIndex:o,commandIndex:r}}(e,t,n),o=n.slice(r.commandIndex);if(r.match&&r.pathIndex<e.segments.length){const t=new cd(e.segments.slice(0,r.pathIndex),{});return t.children.primary=new cd(e.segments.slice(r.pathIndex),e.children),Kd(t,0,o)}return r.match&&0===o.length?new cd(e.segments,{}):r.match&&!e.hasChildren()?Gd(e,t,n):r.match?Kd(e,0,o):Gd(e,t,n)}function Kd(e,t,n){if(0===n.length)return new cd(e.segments,{});{const r=function(e){return Ud(e[0])?e[0].outlets:{primary:e}}(n),o={};return od(r,(n,r)=>{null!==n&&(o[r]=Qd(e.children[r],t,n))}),od(e.children,(e,t)=>{void 0===r[t]&&(o[t]=e)}),new cd(e.segments,o)}}function Gd(e,t,n){const r=e.segments.slice(0,t);let o=0;for(;o<n.length;){const i=n[o];if(Ud(i)){const e=Zd(i.outlets);return new cd(r,e)}if(0===o&&zd(n[0])){r.push(new ld(e.segments[t].path,n[0])),o++;continue}const s=Ud(i)?i.outlets.primary:""+i,a=o<n.length-1?n[o+1]:null;s&&a&&zd(a)?(r.push(new ld(s,Yd(a))),o+=2):(r.push(new ld(s,{})),o++)}return new cd(r,{})}function Zd(e){const t={};return od(e,(e,n)=>{null!==e&&(t[n]=Gd(new cd([],{}),0,e))}),t}function Yd(e){const t={};return od(e,(e,n)=>t[n]=""+e),t}function Jd(e,t,n){return e==n.path&&ed(t,n.parameters)}class Xd{constructor(e,t,n,r){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r}activate(e){const t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),Hd(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){const r=Ad(t);e.children.forEach(e=>{const t=e.value.outlet;this.deactivateRoutes(e,r[t],n),delete r[t]}),od(r,(e,t)=>{this.deactivateRouteAndItsChildren(e,n)})}deactivateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(r===o)if(r.component){const o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else o&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){const n=t.getContext(e.value.outlet);if(n&&n.outlet){const t=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:t,route:e,contexts:r})}}deactivateRouteAndOutlet(e,t){const n=t.getContext(e.value.outlet);if(n){const r=Ad(e),o=e.value.component?n.children:t;od(r,(e,t)=>this.deactivateRouteAndItsChildren(e,o)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(e,t,n){const r=Ad(t);e.children.forEach(e=>{this.activateRoutes(e,r[e.value.outlet],n),this.forwardEvent(new Ku(e.value.snapshot))}),e.children.length&&this.forwardEvent(new Wu(e.value.snapshot))}activateRoutes(e,t,n){const r=e.value,o=t?t.value:null;if(Hd(r),r===o)if(r.component){const o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){const t=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const e=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),t.children.onOutletReAttached(e.contexts),t.attachRef=e.componentRef,t.route=e.route.value,t.outlet&&t.outlet.attach(e.componentRef,e.route.value),ep(e.route)}else{const n=function(e){for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig;if(e&&e.component)return null}return null}(r.snapshot),o=n?n.module.componentFactoryResolver:null;t.attachRef=null,t.route=r,t.resolver=o,t.outlet&&t.outlet.activateWith(r,o),this.activateChildRoutes(e,null,t.children)}}else this.activateChildRoutes(e,null,n)}}function ep(e){Hd(e.value),e.children.forEach(ep)}class tp{constructor(e,t){this.routes=e,this.module=t}}function np(e){return"function"==typeof e}function rp(e){return e instanceof ad}const op=Symbol("INITIAL_VALUE");function ip(){return dh(e=>sl(...e.map(e=>e.pipe(gh(1),function(...e){const t=e[e.length-1];return E(t)?(e.pop(),n=>Su(e,n,t)):t=>Su(e,t)}(op)))).pipe(function(e,t){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new ku(e,t,n))}}((e,t)=>{let n=!1;return t.reduce((e,r,o)=>{if(e!==op)return e;if(r===op&&(n=!0),!n){if(!1===r)return r;if(o===t.length-1||rp(r))return r}return e},e)},op),fl(e=>e!==op),C(e=>rp(e)?e:!0===e),gh(1)))}class sp{constructor(e){this.segmentGroup=e||null}}class ap{constructor(e){this.urlTree=e}}function cp(e){return new y(t=>t.error(new sp(e)))}function lp(e){return new y(t=>t.error(new ap(e)))}function hp(e){return new y(t=>t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))}class up{constructor(e,t,n,r,o){this.configLoader=t,this.urlSerializer=n,this.urlTree=r,this.config=o,this.allowRedirects=!0,this.ngModule=e.get(Ye)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(C(e=>this.createUrlTree(e,this.urlTree.queryParams,this.urlTree.fragment))).pipe(Cu(e=>{if(e instanceof ap)return this.allowRedirects=!1,this.match(e.urlTree);if(e instanceof sp)throw this.noMatchError(e);throw e}))}match(e){return this.expandSegmentGroup(this.ngModule,this.config,e.root,"primary").pipe(C(t=>this.createUrlTree(t,e.queryParams,e.fragment))).pipe(Cu(e=>{if(e instanceof sp)throw this.noMatchError(e);throw e}))}noMatchError(e){return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`)}createUrlTree(e,t,n){const r=e.segments.length>0?new cd([],{primary:e}):e;return new ad(r,t,n)}expandSegmentGroup(e,t,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(e,t,n).pipe(C(e=>new cd([],e))):this.expandSegment(e,n,t,n.segments,r,!0)}expandChildren(e,t,n){return function(e,t){if(0===Object.keys(e).length)return Cl({});const n=[],r=[],o={};return od(e,(e,i)=>{const s=t(i,e).pipe(C(e=>o[i]=e));"primary"===i?n.push(s):r.push(s)}),Cl.apply(null,n.concat(r)).pipe(du(),function(e,t){const n=arguments.length>=2;return r=>r.pipe(e?fl((t,n)=>e(t,n,r)):b,pu(1),n?_u(t):gu(()=>new hu))}(),C(()=>o))}(n.children,(n,r)=>this.expandSegmentGroup(e,t,r,n))}expandSegment(e,t,n,r,o,i){return Cl(...n).pipe(Pu(s=>this.expandSegmentAgainstRoute(e,t,n,s,r,o,i).pipe(Cu(e=>{if(e instanceof sp)return Cl(null);throw e}))),ju(e=>!!e),Cu((e,n)=>{if(e instanceof hu||"EmptyError"===e.name){if(this.noLeftoversInUrl(t,r,o))return Cl(new cd([],{}));throw new sp(t)}throw e}))}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}expandSegmentAgainstRoute(e,t,n,r,o,i,s){return mp(r)!==i?cp(t):void 0===r.redirectTo?this.matchSegmentAgainstRoute(e,t,r,o):s&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i):cp(t)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,n,r,i):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,n,r){const o=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?lp(o):this.lineralizeSegments(n,o).pipe(H(n=>{const o=new cd(n,{});return this.expandSegment(e,o,t,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,r,o,i){const{matched:s,consumedSegments:a,lastChild:c,positionalParamSegments:l}=dp(t,r,o);if(!s)return cp(t);const h=this.applyRedirectCommands(a,r.redirectTo,l);return r.redirectTo.startsWith("/")?lp(h):this.lineralizeSegments(r,h).pipe(H(r=>this.expandSegment(e,t,n,r.concat(o.slice(c)),i,!1)))}matchSegmentAgainstRoute(e,t,n,r){if("**"===n.path)return n.loadChildren?this.configLoader.load(e.injector,n).pipe(C(e=>(n._loadedConfig=e,new cd(r,{})))):Cl(new cd(r,{}));const{matched:o,consumedSegments:i,lastChild:s}=dp(t,n,r);if(!o)return cp(t);const a=r.slice(s);return this.getChildConfig(e,n,r).pipe(H(e=>{const n=e.module,r=e.routes,{segmentGroup:o,slicedSegments:s}=function(e,t,n,r){return n.length>0&&function(e,t,n){return n.some(n=>fp(e,t,n)&&"primary"!==mp(n))}(e,n,r)?{segmentGroup:pp(new cd(t,function(e,t){const n={};n.primary=t;for(const r of e)""===r.path&&"primary"!==mp(r)&&(n[mp(r)]=new cd([],{}));return n}(r,new cd(n,e.children)))),slicedSegments:[]}:0===n.length&&function(e,t,n){return n.some(n=>fp(e,t,n))}(e,n,r)?{segmentGroup:pp(new cd(e.segments,function(e,t,n,r){const o={};for(const i of n)fp(e,t,i)&&!r[mp(i)]&&(o[mp(i)]=new cd([],{}));return Object.assign(Object.assign({},r),o)}(e,n,r,e.children))),slicedSegments:n}:{segmentGroup:e,slicedSegments:n}}(t,i,a,r);return 0===s.length&&o.hasChildren()?this.expandChildren(n,r,o).pipe(C(e=>new cd(i,e))):0===r.length&&0===s.length?Cl(new cd(i,{})):this.expandSegment(n,o,r,s,"primary",!0).pipe(C(e=>new cd(i.concat(e.segments),e.children)))}))}getChildConfig(e,t,n){return t.children?Cl(new tp(t.children,e)):t.loadChildren?void 0!==t._loadedConfig?Cl(t._loadedConfig):this.runCanLoadGuards(e.injector,t,n).pipe(H(n=>n?this.configLoader.load(e.injector,t).pipe(C(e=>(t._loadedConfig=e,e))):function(e){return new y(t=>t.error(Ju(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)))}(t))):Cl(new tp([],e))}runCanLoadGuards(e,t,n){const r=t.canLoad;return r&&0!==r.length?Cl(r.map(r=>{const o=e.get(r);let i;if(function(e){return e&&np(e.canLoad)}(o))i=o.canLoad(t,n);else{if(!np(o))throw new Error("Invalid CanLoad guard");i=o(t,n)}return id(i)})).pipe(ip(),_h(e=>{if(!rp(e))return;const t=Ju(`Redirecting to "${this.urlSerializer.serialize(e)}"`);throw t.url=e,t}),C(e=>!0===e)):Cl(!0)}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return Cl(n);if(r.numberOfChildren>1||!r.children.primary)return hp(e.redirectTo);r=r.children.primary}}applyRedirectCommands(e,t,n){return this.applyRedirectCreatreUrlTree(t,this.urlSerializer.parse(t),e,n)}applyRedirectCreatreUrlTree(e,t,n,r){const o=this.createSegmentGroup(e,t.root,n,r);return new ad(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){const n={};return od(e,(e,r)=>{if("string"==typeof e&&e.startsWith(":")){const o=e.substring(1);n[r]=t[o]}else n[r]=e}),n}createSegmentGroup(e,t,n,r){const o=this.createSegments(e,t.segments,n,r);let i={};return od(t.children,(t,o)=>{i[o]=this.createSegmentGroup(e,t,n,r)}),new cd(o,i)}createSegments(e,t,n,r){return t.map(t=>t.path.startsWith(":")?this.findPosParam(e,t,r):this.findOrReturn(t,n))}findPosParam(e,t,n){const r=n[t.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);return r}findOrReturn(e,t){let n=0;for(const r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}}function dp(e,t,n){if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const r=(t.matcher||Xu)(n,e,t);return r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function pp(e){if(1===e.numberOfChildren&&e.children.primary){const t=e.children.primary;return new cd(e.segments.concat(t.segments),t.children)}return e}function fp(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function mp(e){return e.outlet||"primary"}class gp{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}}class bp{constructor(e,t){this.component=e,this.route=t}}function yp(e,t,n){const r=e._root;return function e(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=Ad(n);return t.children.forEach(t=>{!function(t,n,r,o,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=t.value,a=n?n.value:null,c=r?r.getContext(t.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){const l=function(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!hd(e.url,t.url);case"pathParamsOrQueryParamsChange":return!hd(e.url,t.url)||!ed(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Bd(e,t)||!ed(e.queryParams,t.queryParams);case"paramsChange":default:return!Bd(e,t)}}(a,s,s.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new gp(o)):(s.data=a.data,s._resolvedData=a._resolvedData),e(t,n,s.component?c?c.children:null:r,o,i),l&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new bp(c.outlet.component,a))}else a&&_p(n,c,i),i.canActivateChecks.push(new gp(o)),e(t,null,s.component?c?c.children:null:r,o,i)}(t,s[t.value.outlet],r,o.concat([t.value]),i),delete s[t.value.outlet]}),od(s,(e,t)=>_p(e,r.getContext(t),i)),i}(r,t?t._root:null,n,[r.value])}function vp(e,t,n){const r=function(e){if(!e)return null;for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig}return null}(t);return(r?r.module.injector:n).get(e)}function _p(e,t,n){const r=Ad(e),o=e.value;od(r,(e,r)=>{_p(e,o.component?t?t.children.getContext(r):null:t,n)}),n.canDeactivateChecks.push(new bp(o.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,o))}function wp(e,t){return null!==e&&t&&t(new Qu(e)),Cl(!0)}function xp(e,t){return null!==e&&t&&t(new qu(e)),Cl(!0)}function Sp(e,t,n){const r=t.routeConfig?t.routeConfig.canActivate:null;return r&&0!==r.length?Cl(r.map(r=>uu(()=>{const o=vp(r,t,n);let i;if(function(e){return e&&np(e.canActivate)}(o))i=id(o.canActivate(t,e));else{if(!np(o))throw new Error("Invalid CanActivate guard");i=id(o(t,e))}return i.pipe(ju())}))).pipe(ip()):Cl(!0)}function kp(e,t,n){const r=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(e=>function(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(e)).filter(e=>null!==e).map(t=>uu(()=>Cl(t.guards.map(o=>{const i=vp(o,t.node,n);let s;if(function(e){return e&&np(e.canActivateChild)}(i))s=id(i.canActivateChild(r,e));else{if(!np(i))throw new Error("Invalid CanActivateChild guard");s=id(i(r,e))}return s.pipe(ju())})).pipe(ip())));return Cl(o).pipe(ip())}class Ep{}class Cp{constructor(e,t,n,r,o,i){this.rootComponentType=e,this.config=t,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=o,this.relativeLinkResolution=i}recognize(){try{const e=Pp(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,t=this.processSegmentGroup(this.config,e,"primary"),n=new Md([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),r=new jd(n,t),o=new $d(this.url,r);return this.inheritParamsAndData(o._root),Cl(o)}catch(e){return new y(t=>t.error(e))}}inheritParamsAndData(e){const t=e.value,n=Dd(t,this.paramsInheritanceStrategy);t.params=Object.freeze(n.params),t.data=Object.freeze(n.data),e.children.forEach(e=>this.inheritParamsAndData(e))}processSegmentGroup(e,t,n){return 0===t.segments.length&&t.hasChildren()?this.processChildren(e,t):this.processSegment(e,t,t.segments,n)}processChildren(e,t){const n=ud(t,(t,n)=>this.processSegmentGroup(e,t,n));return function(e){const t={};e.forEach(e=>{const n=t[e.value.outlet];if(n){const t=n.url.map(e=>e.toString()).join("/"),r=e.value.url.map(e=>e.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${r}'.`)}t[e.value.outlet]=e.value})}(n),n.sort((e,t)=>"primary"===e.value.outlet?-1:"primary"===t.value.outlet?1:e.value.outlet.localeCompare(t.value.outlet)),n}processSegment(e,t,n,r){for(const i of e)try{return this.processSegmentAgainstRoute(i,t,n,r)}catch(o){if(!(o instanceof Ep))throw o}if(this.noLeftoversInUrl(t,n,r))return[];throw new Ep}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}processSegmentAgainstRoute(e,t,n,r){if(e.redirectTo)throw new Ep;if((e.outlet||"primary")!==r)throw new Ep;let o,i=[],s=[];if("**"===e.path){const i=n.length>0?rd(n).parameters:{};o=new Md(n,i,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ip(e),r,e.component,e,Op(t),Tp(t)+n.length,Rp(e))}else{const a=function(e,t,n){if(""===t.path){if("full"===t.pathMatch&&(e.hasChildren()||n.length>0))throw new Ep;return{consumedSegments:[],lastChild:0,parameters:{}}}const r=(t.matcher||Xu)(n,e,t);if(!r)throw new Ep;const o={};od(r.posParams,(e,t)=>{o[t]=e.path});const i=r.consumed.length>0?Object.assign(Object.assign({},o),r.consumed[r.consumed.length-1].parameters):o;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:i}}(t,e,n);i=a.consumedSegments,s=n.slice(a.lastChild),o=new Md(i,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Ip(e),r,e.component,e,Op(t),Tp(t)+i.length,Rp(e))}const a=function(e){return e.children?e.children:e.loadChildren?e._loadedConfig.routes:[]}(e),{segmentGroup:c,slicedSegments:l}=Pp(t,i,s,a,this.relativeLinkResolution);if(0===l.length&&c.hasChildren()){const e=this.processChildren(a,c);return[new jd(o,e)]}if(0===a.length&&0===l.length)return[new jd(o,[])];const h=this.processSegment(a,c,l,"primary");return[new jd(o,h)]}}function Op(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function Tp(e){let t=e,n=t._segmentIndexShift?t._segmentIndexShift:0;for(;t._sourceSegment;)t=t._sourceSegment,n+=t._segmentIndexShift?t._segmentIndexShift:0;return n-1}function Pp(e,t,n,r,o){if(n.length>0&&function(e,t,n){return n.some(n=>jp(e,t,n)&&"primary"!==Ap(n))}(e,n,r)){const o=new cd(t,function(e,t,n,r){const o={};o.primary=r,r._sourceSegment=e,r._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&"primary"!==Ap(i)){const n=new cd([],{});n._sourceSegment=e,n._segmentIndexShift=t.length,o[Ap(i)]=n}return o}(e,t,r,new cd(n,e.children)));return o._sourceSegment=e,o._segmentIndexShift=t.length,{segmentGroup:o,slicedSegments:[]}}if(0===n.length&&function(e,t,n){return n.some(n=>jp(e,t,n))}(e,n,r)){const i=new cd(e.segments,function(e,t,n,r,o,i){const s={};for(const a of r)if(jp(e,n,a)&&!o[Ap(a)]){const n=new cd([],{});n._sourceSegment=e,n._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Ap(a)]=n}return Object.assign(Object.assign({},o),s)}(e,t,n,r,e.children,o));return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}const i=new cd(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function jp(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function Ap(e){return e.outlet||"primary"}function Ip(e){return e.data||{}}function Rp(e){return e.resolve||{}}function Np(e){return function(t){return t.pipe(dh(t=>{const n=e(t);return n?M(n).pipe(C(()=>t)):M([t])}))}}class Dp extends class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}}{}let Mp=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=at({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&Ei(0,"router-outlet")},directives:function(){return[Zp]},encapsulation:2}),e})();function $p(e,t=""){for(let n=0;n<e.length;n++){const r=e[n];Fp(r,Lp(t,r))}}function Fp(e,t){if(!e)throw new Error(`\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(e))throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);if(!e.component&&!e.children&&!e.loadChildren&&e.outlet&&"primary"!==e.outlet)throw new Error(`Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`);if(e.redirectTo&&e.children)throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);if(e.redirectTo&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);if(e.children&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);if(e.redirectTo&&e.component)throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);if(e.path&&e.matcher)throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);if(void 0===e.redirectTo&&!e.component&&!e.children&&!e.loadChildren)throw new Error(`Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===e.path&&void 0===e.matcher)throw new Error(`Invalid configuration of route '${t}': routes must have either a path or a matcher specified`);if("string"==typeof e.path&&"/"===e.path.charAt(0))throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);if(""===e.path&&void 0!==e.redirectTo&&void 0===e.pathMatch)throw new Error(`Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==e.pathMatch&&"full"!==e.pathMatch&&"prefix"!==e.pathMatch)throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);e.children&&$p(e.children,t)}function Lp(e,t){return t?e||t.path?e&&!t.path?e+"/":!e&&t.path?t.path:`${e}/${t.path}`:"":e}function Hp(e){const t=e.children&&e.children.map(Hp),n=t?Object.assign(Object.assign({},e),{children:t}):Object.assign({},e);return!n.component&&(t||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=Mp),n}const Bp=new Me("ROUTES");class zp{constructor(e,t,n,r){this.loader=e,this.compiler=t,this.onLoadStartListener=n,this.onLoadEndListener=r}load(e,t){return this.onLoadStartListener&&this.onLoadStartListener(t),this.loadModuleFactory(t.loadChildren).pipe(C(n=>{this.onLoadEndListener&&this.onLoadEndListener(t);const r=n.create(e);return new tp(nd(r.injector.get(Bp)).map(Hp),r)}))}loadModuleFactory(e){return"string"==typeof e?M(this.loader.load(e)):id(e()).pipe(H(e=>e instanceof Je?Cl(e):M(this.compiler.compileModuleAsync(e))))}}class Up{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new Vp,this.attachRef=null}}class Vp{constructor(){this.contexts=new Map}onChildOutletCreated(e,t){const n=this.getOrCreateContext(e);n.outlet=t,this.contexts.set(e,n)}onChildOutletDestroyed(e){const t=this.getContext(e);t&&(t.outlet=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new Up,this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}}class qp{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}}function Wp(e){throw e}function Qp(e,t,n){return t.parse("/")}function Kp(e,t){return Cl(null)}let Gp=(()=>{class e{constructor(e,t,n,r,o,i,s,a){this.rootComponentType=e,this.urlSerializer=t,this.rootContexts=n,this.location=r,this.config=a,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.lastLocationChangeInfo=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new S,this.errorHandler=Wp,this.malformedUriErrorHandler=Qp,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Kp,afterPreactivation:Kp},this.urlHandlingStrategy=new qp,this.routeReuseStrategy=new Dp,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=o.get(Ye),this.console=o.get(Js);const c=o.get(ua);this.isNgZoneEnabled=c instanceof ua,this.resetConfig(a),this.currentUrlTree=new ad(new cd([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new zp(i,s,e=>this.triggerEvent(new Uu(e)),e=>this.triggerEvent(new Vu(e))),this.routerState=Rd(this.currentUrlTree,this.rootComponentType),this.transitions=new uh({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(e){const t=this.events;return e.pipe(fl(e=>0!==e.id),C(e=>Object.assign(Object.assign({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl)})),dh(e=>{let n=!1,r=!1;return Cl(e).pipe(_h(e=>{this.currentNavigation={id:e.id,initialUrl:e.currentRawUrl,extractedUrl:e.extractedUrl,trigger:e.source,extras:e.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),dh(e=>{const n=!this.navigated||e.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl))return Cl(e).pipe(dh(e=>{const n=this.transitions.getValue();return t.next(new Nu(e.id,this.serializeUrl(e.extractedUrl),e.source,e.restoredState)),n!==this.transitions.getValue()?kl:[e]}),dh(e=>Promise.resolve(e)),(r=this.ngModule.injector,o=this.configLoader,i=this.urlSerializer,s=this.config,function(e){return e.pipe(dh(e=>function(e,t,n,r,o){return new up(e,t,n,r,o).apply()}(r,o,i,e.extractedUrl,s).pipe(C(t=>Object.assign(Object.assign({},e),{urlAfterRedirects:t})))))}),_h(e=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:e.urlAfterRedirects})}),function(e,t,n,r,o){return function(i){return i.pipe(H(i=>function(e,t,n,r,o="emptyOnly",i="legacy"){return new Cp(e,t,n,r,o,i).recognize()}(e,t,i.urlAfterRedirects,n(i.urlAfterRedirects),r,o).pipe(C(e=>Object.assign(Object.assign({},i),{targetSnapshot:e})))))}}(this.rootComponentType,this.config,e=>this.serializeUrl(e),this.paramsInheritanceStrategy,this.relativeLinkResolution),_h(e=>{"eager"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(e.urlAfterRedirects,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),_h(e=>{const n=new Fu(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.next(n)}));var r,o,i,s;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:o,restoredState:i,extras:s}=e,a=new Nu(n,this.serializeUrl(r),o,i);t.next(a);const c=Rd(r,this.rootComponentType).snapshot;return Cl(Object.assign(Object.assign({},e),{targetSnapshot:c,urlAfterRedirects:r,extras:Object.assign(Object.assign({},s),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=e.rawUrl,this.browserUrlTree=e.urlAfterRedirects,e.resolve(null),kl}),Np(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.beforePreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),_h(e=>{const t=new Lu(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),C(e=>Object.assign(Object.assign({},e),{guards:yp(e.targetSnapshot,e.currentSnapshot,this.rootContexts)})),function(e,t){return function(n){return n.pipe(H(n=>{const{targetSnapshot:r,currentSnapshot:o,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?Cl(Object.assign(Object.assign({},n),{guardsResult:!0})):function(e,t,n,r){return M(e).pipe(H(e=>function(e,t,n,r,o){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?Cl(i.map(i=>{const s=vp(i,t,o);let a;if(function(e){return e&&np(e.canDeactivate)}(s))a=id(s.canDeactivate(e,t,n,r));else{if(!np(s))throw new Error("Invalid CanDeactivate guard");a=id(s(e,t,n,r))}return a.pipe(ju())})).pipe(ip()):Cl(!0)}(e.component,e.route,n,t,r)),ju(e=>!0!==e,!0))}(s,r,o,e).pipe(H(n=>n&&"boolean"==typeof n?function(e,t,n,r){return M(t).pipe(Pu(t=>M([xp(t.route.parent,r),wp(t.route,r),kp(e,t.path,n),Sp(e,t.route,n)]).pipe(du(),ju(e=>!0!==e,!0))),ju(e=>!0!==e,!0))}(r,i,e,t):Cl(n)),C(e=>Object.assign(Object.assign({},n),{guardsResult:e})))}))}}(this.ngModule.injector,e=>this.triggerEvent(e)),_h(e=>{if(rp(e.guardsResult)){const t=Ju(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);throw t.url=e.guardsResult,t}}),_h(e=>{const t=new Hu(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot,!!e.guardsResult);this.triggerEvent(t)}),fl(e=>{if(!e.guardsResult){this.resetUrlToCurrentUrlTree();const n=new Mu(e.id,this.serializeUrl(e.extractedUrl),"");return t.next(n),e.resolve(!1),!1}return!0}),Np(e=>{if(e.guards.canActivateChecks.length)return Cl(e).pipe(_h(e=>{const t=new Bu(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),dh(e=>{let n=!1;return Cl(e).pipe((r=this.paramsInheritanceStrategy,o=this.ngModule.injector,function(e){return e.pipe(H(e=>{const{targetSnapshot:t,guards:{canActivateChecks:n}}=e;if(!n.length)return Cl(e);let i=0;return M(n).pipe(Pu(e=>function(e,t,n,r){return function(e,t,n,r){const o=Object.keys(e);if(0===o.length)return Cl({});const i={};return M(o).pipe(H(o=>function(e,t,n,r){const o=vp(e,t,r);return id(o.resolve?o.resolve(t,n):o(t,n))}(e[o],t,n,r).pipe(_h(e=>{i[o]=e}))),pu(1),H(()=>Object.keys(i).length===o.length?Cl(i):kl))}(e._resolve,e,t,r).pipe(C(t=>(e._resolvedData=t,e.data=Object.assign(Object.assign({},e.data),Dd(e,n).resolve),null)))}(e.route,t,r,o)),_h(()=>i++),pu(1),H(t=>i===n.length?Cl(e):kl))}))}),_h({next:()=>n=!0,complete:()=>{if(!n){const n=new Mu(e.id,this.serializeUrl(e.extractedUrl),"At least one route resolver didn't emit any value.");t.next(n),e.resolve(!1)}}}));var r,o}),_h(e=>{const t=new zu(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}))}),Np(e=>{const{targetSnapshot:t,id:n,extractedUrl:r,rawUrl:o,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.afterPreactivation(t,{navigationId:n,appliedUrlTree:r,rawUrlTree:o,skipLocationChange:!!i,replaceUrl:!!s})}),C(e=>{const t=function(e,t,n){const r=function e(t,n,r){if(r&&t.shouldReuseRoute(n.value,r.value.snapshot)){const o=r.value;o._futureSnapshot=n.value;const i=function(t,n,r){return n.children.map(n=>{for(const o of r.children)if(t.shouldReuseRoute(o.value.snapshot,n.value))return e(t,n,o);return e(t,n)})}(t,n,r);return new jd(o,i)}{const r=t.retrieve(n.value);if(r){const e=r.route;return function e(t,n){if(t.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=t.value;for(let r=0;r<t.children.length;++r)e(t.children[r],n.children[r])}(n,e),e}{const r=new Nd(new uh((o=n.value).url),new uh(o.params),new uh(o.queryParams),new uh(o.fragment),new uh(o.data),o.outlet,o.component,o),i=n.children.map(n=>e(t,n));return new jd(r,i)}}var o}(e,t._root,n?n._root:void 0);return new Id(r,t)}(this.routeReuseStrategy,e.targetSnapshot,e.currentRouterState);return Object.assign(Object.assign({},e),{targetRouterState:t})}),_h(e=>{this.currentUrlTree=e.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl),this.routerState=e.targetRouterState,"deferred"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),(i=this.rootContexts,s=this.routeReuseStrategy,a=e=>this.triggerEvent(e),C(e=>(new Xd(s,e.targetRouterState,e.currentRouterState,a).activate(i),e))),_h({next(){n=!0},complete(){n=!0}}),(o=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new Mu(e.id,this.serializeUrl(e.extractedUrl),`Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`);t.next(n),e.resolve(!1)}this.currentNavigation=null},e=>e.lift(new Au(o))),Cu(n=>{if(r=!0,(o=n)&&o.ngNavigationCancelingError){const r=rp(n.url);r||(this.navigated=!0,this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl));const o=new Mu(e.id,this.serializeUrl(e.extractedUrl),n.message);t.next(o),r?setTimeout(()=>{const t=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(t,"imperative",null,{skipLocationChange:e.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:e.resolve,reject:e.reject,promise:e.promise})},0):e.resolve(!1)}else{this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl);const r=new $u(e.id,this.serializeUrl(e.extractedUrl),n);t.next(r);try{e.resolve(this.errorHandler(n))}catch(i){e.reject(i)}}var o;return kl}));var o,i,s,a}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}getTransition(){const e=this.transitions.value;return e.urlAfterRedirects=this.browserUrlTree,e}setTransition(e){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),e))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{const t=this.extractLocationChangeInfoFromEvent(e);this.shouldScheduleNavigation(this.lastLocationChangeInfo,t)&&setTimeout(()=>{const{source:e,state:n,urlTree:r}=t,o={replaceUrl:!0};if(n){const e=Object.assign({},n);delete e.navigationId,0!==Object.keys(e).length&&(o.state=e)}this.scheduleNavigation(r,e,n,o)},0),this.lastLocationChangeInfo=t}))}extractLocationChangeInfoFromEvent(e){var t;return{source:"popstate"===e.type?"popstate":"hashchange",urlTree:this.parseUrl(e.url),state:(null===(t=e.state)||void 0===t?void 0:t.navigationId)?e.state:null,transitionId:this.getTransition().id}}shouldScheduleNavigation(e,t){if(!e)return!0;const n=t.urlTree.toString()===e.urlTree.toString();return!(t.transitionId===e.transitionId&&n&&("hashchange"===t.source&&"popstate"===e.source||"popstate"===t.source&&"hashchange"===e.source))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){$p(e),this.config=e.map(Hp),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0)}createUrlTree(e,t={}){const{relativeTo:n,queryParams:r,fragment:o,preserveQueryParams:i,queryParamsHandling:s,preserveFragment:a}=t;lr()&&i&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const c=n||this.routerState.root,l=a?this.currentUrlTree.fragment:o;let h=null;if(s)switch(s){case"merge":h=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=r||null}else h=i?this.currentUrlTree.queryParams:r||null;return null!==h&&(h=this.removeEmptyProps(h)),function(e,t,n,r,o){if(0===n.length)return Vd(t.root,t.root,t,r,o);const i=function(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new qd(!0,0,e);let t=0,n=!1;const r=e.reduce((e,r,o)=>{if("object"==typeof r&&null!=r){if(r.outlets){const t={};return od(r.outlets,(e,n)=>{t[n]="string"==typeof e?e.split("/"):e}),[...e,{outlets:t}]}if(r.segmentPath)return[...e,r.segmentPath]}return"string"!=typeof r?[...e,r]:0===o?(r.split("/").forEach((r,o)=>{0==o&&"."===r||(0==o&&""===r?n=!0:".."===r?t++:""!=r&&e.push(r))}),e):[...e,r]},[]);return new qd(n,t,r)}(n);if(i.toRoot())return Vd(t.root,new cd([],{}),t,r,o);const s=function(e,t,n){if(e.isAbsolute)return new Wd(t.root,!0,0);if(-1===n.snapshot._lastPathIndex){const e=n.snapshot._urlSegment;return new Wd(e,e===t.root,0)}const r=zd(e.commands[0])?0:1;return function(e,t,n){let r=e,o=t,i=n;for(;i>o;){if(i-=o,r=r.parent,!r)throw new Error("Invalid number of '../'");o=r.segments.length}return new Wd(r,!1,o-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,e.numberOfDoubleDots)}(i,t,e),a=s.processChildren?Kd(s.segmentGroup,s.index,i.commands):Qd(s.segmentGroup,s.index,i.commands);return Vd(s.segmentGroup,a,t,r,o)}(c,this.currentUrlTree,e,h,l)}navigateByUrl(e,t={skipLocationChange:!1}){lr()&&this.isNgZoneEnabled&&!ua.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=rp(e)?e:this.parseUrl(e),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,"imperative",null,t)}navigate(e,t={skipLocationChange:!1}){return function(e){for(let t=0;t<e.length;t++){const n=e[t];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${t}`)}}(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let t;try{t=this.urlSerializer.parse(e)}catch(n){t=this.malformedUriErrorHandler(n,this.urlSerializer,e)}return t}isActive(e,t){if(rp(e))return sd(this.currentUrlTree,e,t);const n=this.parseUrl(e);return sd(this.currentUrlTree,n,t)}removeEmptyProps(e){return Object.keys(e).reduce((t,n)=>{const r=e[n];return null!=r&&(t[n]=r),t},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.events.next(new Du(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,e.resolve(!0)},e=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(e,t,n,r,o){const i=this.getTransition(),s="imperative"!==t&&"imperative"===(null==i?void 0:i.source),a=(this.lastSuccessfulId===i.id||this.currentNavigation?i.rawUrl:i.urlAfterRedirects).toString()===e.toString();if(s&&a)return Promise.resolve(!0);let c,l,h;o?(c=o.resolve,l=o.reject,h=o.promise):h=new Promise((e,t)=>{c=e,l=t});const u=++this.navigationId;return this.setTransition({id:u,source:t,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:r,resolve:c,reject:l,promise:h,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),h.catch(e=>Promise.reject(e))}setBrowserUrl(e,t,n,r){const o=this.urlSerializer.serialize(e);r=r||{},this.location.isCurrentPathEqualTo(o)||t?this.location.replaceState(o,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(o,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(e,t,n){this.routerState=e,this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return e.\u0275fac=function(t){return new(t||e)(We(zo),We(dd),We(Vp),We(rc),We(ni),We(Ia),We(ca),We(void 0))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),Zp=(()=>{class e{constructor(e,t,n,r,o){this.parentContexts=e,this.location=t,this.resolver=n,this.changeDetector=o,this.activated=null,this._activatedRoute=null,this.activateEvents=new Is,this.deactivateEvents=new Is,this.name=r||"primary",e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=e;const n=(t=t||this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,o=new Yp(e,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,o),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(t){return new(t||e)(_i(Vp),_i(vs),_i(Ki),("name",function(e,t){const n=e.attrs;if(n){const e=n.length;let t=0;for(;t<e;){const r=n[t];if(In(r))break;if(0===r)t+=2;else if("number"==typeof r)for(t++;t<e&&"string"==typeof n[t];)t++;else{if("name"===r)return n[t+1];t+=2}}}return null}(en())),_i(Ho))},e.\u0275dir=pt({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),e})();class Yp{constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===Nd?this.route:e===Vp?this.childContexts:this.parent.get(e,t)}}class Jp{}class Xp{preload(e,t){return Cl(null)}}let ef=(()=>{class e{constructor(e,t,n,r,o){this.router=e,this.injector=r,this.preloadingStrategy=o,this.loader=new zp(t,n,t=>e.triggerEvent(new Uu(t)),t=>e.triggerEvent(new Vu(t)))}setUpPreloading(){this.subscription=this.router.events.pipe(fl(e=>e instanceof Du),Pu(()=>this.preload())).subscribe(()=>{})}preload(){const e=this.injector.get(Ye);return this.processRoutes(e,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(e,t){const n=[];for(const r of t)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const e=r._loadedConfig;n.push(this.processRoutes(e.module,e.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(e,r)):r.children&&n.push(this.processRoutes(e,r.children));return M(n).pipe(U(),C(e=>{}))}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>this.loader.load(e.injector,t).pipe(H(e=>(t._loadedConfig=e,this.processRoutes(e.module,e.routes)))))}}return e.\u0275fac=function(t){return new(t||e)(We(Gp),We(Ia),We(ca),We(ni),We(Jp))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),tf=(()=>{class e{constructor(e,t,n={}){this.router=e,this.viewportScroller=t,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof Nu?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Du&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof Gu&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,t){this.router.triggerEvent(new Gu(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,t))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(We(Gp),We(Ec),We(void 0))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const nf=new Me("ROUTER_CONFIGURATION"),rf=new Me("ROUTER_FORROOT_GUARD"),of=[rc,{provide:dd,useClass:pd},{provide:Gp,useFactory:function(e,t,n,r,o,i,s,a={},c,l){const h=new Gp(null,e,t,n,r,o,i,nd(s));if(c&&(h.urlHandlingStrategy=c),l&&(h.routeReuseStrategy=l),a.errorHandler&&(h.errorHandler=a.errorHandler),a.malformedUriErrorHandler&&(h.malformedUriErrorHandler=a.malformedUriErrorHandler),a.enableTracing){const e=Ba();h.events.subscribe(t=>{e.logGroup("Router Event: "+t.constructor.name),e.log(t.toString()),e.log(t),e.logGroupEnd()})}return a.onSameUrlNavigation&&(h.onSameUrlNavigation=a.onSameUrlNavigation),a.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=a.paramsInheritanceStrategy),a.urlUpdateStrategy&&(h.urlUpdateStrategy=a.urlUpdateStrategy),a.relativeLinkResolution&&(h.relativeLinkResolution=a.relativeLinkResolution),h},deps:[dd,Vp,rc,ni,Ia,ca,Bp,nf,[class{},new ne],[class{},new ne]]},Vp,{provide:Nd,useFactory:function(e){return e.routerState.root},deps:[Gp]},{provide:Ia,useClass:Da},ef,Xp,class{preload(e,t){return t().pipe(Cu(()=>Cl(null)))}},{provide:nf,useValue:{enableTracing:!1}}];function sf(){return new Ea("Router",Gp)}let af=(()=>{class e{constructor(e,t){}static forRoot(t,n){return{ngModule:e,providers:[of,uf(t),{provide:rf,useFactory:hf,deps:[[Gp,new ne,new oe]]},{provide:nf,useValue:n||{}},{provide:Ja,useFactory:lf,deps:[Ua,[new te(ec),new ne],nf]},{provide:tf,useFactory:cf,deps:[Gp,Ec,nf]},{provide:Jp,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Xp},{provide:Ea,multi:!0,useFactory:sf},[df,{provide:Vs,multi:!0,useFactory:pf,deps:[df]},{provide:mf,useFactory:ff,deps:[df]},{provide:Ys,multi:!0,useExisting:mf}]]}}static forChild(t){return{ngModule:e,providers:[uf(t)]}}}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)(We(rf,8),We(Gp,8))}}),e})();function cf(e,t,n){return n.scrollOffset&&t.setOffset(n.scrollOffset),new tf(e,t,n)}function lf(e,t,n={}){return n.useHash?new nc(e,t):new tc(e,t)}function hf(e){if(e)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function uf(e){return[{provide:ri,multi:!0,useValue:e},{provide:Bp,multi:!0,useValue:e}]}let df=(()=>{class e{constructor(e){this.injector=e,this.initNavigation=!1,this.resultOfPreactivationDone=new S}appInitializer(){return this.injector.get(qa,Promise.resolve(null)).then(()=>{let e=null;const t=new Promise(t=>e=t),n=this.injector.get(Gp),r=this.injector.get(nf);if(this.isLegacyDisabled(r)||this.isLegacyEnabled(r))e(!0);else if("disabled"===r.initialNavigation)n.setUpLocationChangeListener(),e(!0);else{if("enabled"!==r.initialNavigation)throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?Cl(null):(this.initNavigation=!0,e(!0),this.resultOfPreactivationDone),n.initialNavigation()}return t})}bootstrapListener(e){const t=this.injector.get(nf),n=this.injector.get(ef),r=this.injector.get(tf),o=this.injector.get(Gp),i=this.injector.get(ja);e===i.components[0]&&(this.isLegacyEnabled(t)?o.initialNavigation():this.isLegacyDisabled(t)&&o.setUpLocationChangeListener(),n.setUpPreloading(),r.init(),o.resetRootComponentType(i.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(e){return"legacy_enabled"===e.initialNavigation||!0===e.initialNavigation||void 0===e.initialNavigation}isLegacyDisabled(e){return"legacy_disabled"===e.initialNavigation||!1===e.initialNavigation}}return e.\u0275fac=function(t){return new(t||e)(We(ni))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();function pf(e){return e.appInitializer.bind(e)}function ff(e){return e.bootstrapListener.bind(e)}const mf=new Me("Router Initializer");function gf(e,t){if(1&e){const e=Ci();Si(0,"kor-menu-item",3),Pi("click",(function(){Xt(e);const n=t.$implicit;return Ii().gotoItem(n)})),ki()}if(2&e){const e=t.$implicit;wi("id","menu_"+e.key)("label",e.label)("icon",e.icon)}}let bf=(()=>{class e{constructor(e,t,n,r){this.provider=e,this.ref=t,this.router=n,this.ngZone=r,this.menus=new Map,this.unsubscriber=new S}ngOnInit(){this.provider.receiveCommands(dl.DontCodeModel.APP_ENTITIES,dl.DontCodeModel.APP_ENTITIES_NAME_NODE).pipe(ll(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new yf(e.position,e.value,"create")),this.ref.detectChanges()}),this.provider.receiveCommands(dl.DontCodeModel.APP_SCREENS,dl.DontCodeModel.APP_SCREENS_NAME_NODE).pipe(ll(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new yf(e.position,e.value,"filter")),this.ref.detectChanges()})}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}gotoPage(e){this.ngZone.run(()=>{this.router.navigate([e])})}isActive(e){return this.router.isActive(e,!0)}gotoItem(e){this.ngZone.run(()=>{this.router.navigate([e.position])})}}return e.\u0275fac=function(t){return new(t||e)(_i(hh),_i(Ho),_i(Gp),_i(ua))},e.\u0275cmp=at({type:e,selectors:[["preview-ui-menu"]],decls:4,vars:5,consts:[["label","Home","icon","home",3,"active","toggle","click"],["label","Dev","icon","memory",3,"active","toggle","click"],["toggle","false",3,"id","label","icon","click",4,"ngFor","ngForOf"],["toggle","false",3,"id","label","icon","click"]],template:function(e,t){1&e&&(Si(0,"kor-menu-item",0),Pi("click",(function(){return t.gotoPage("/")})),ki(),Si(1,"kor-menu-item",1),Pi("click",(function(){return t.gotoPage("dev")})),ki(),Ei(2,"kor-divider"),vi(3,gf,1,3,"kor-menu-item",2)),2&e&&(wi("active",t.isActive("/"))("toggle",!1),Cr(1),wi("active",t.isActive("dev"))("toggle",!1),Cr(2),wi("ngForOf",t.menus.values()))},directives:[uc],styles:[""],changeDetection:0}),e})();class yf{constructor(e,t,n){e=this.cleanPosition(e),this.position=e,this.key=e.split("/").join("-"),this.label=t.name?t.name:t,this.icon=n||"text_snippet"}cleanPosition(e){return e.endsWith(dl.DontCodeModel.APP_SCREENS_NAME_NODE)&&(e=e.substring(0,e.length-dl.DontCodeModel.APP_SCREENS_NAME_NODE.length-1)),e}}function vf(e,t){1&e&&Ei(0,"kor-icon",11)}function _f(e,t){1&e&&Ei(0,"kor-icon",12)}function wf(e,t){if(1&e){const e=Ci();Si(0,"div"),Si(1,"kor-page"),Si(2,"kor-app-bar",1),Si(3,"kor-icon",2),Pi("click",(function(){return Xt(e),Ii().logoClicked()})),ki(),Si(4,"div",3),Si(5,"kor-icon",4),Pi("click",(function(){return Xt(e),Ii().openDevUrl()})),ki(),vi(6,vf,1,0,"kor-icon",5),vi(7,_f,1,0,"kor-icon",6),ki(),ki(),Si(8,"div",7),Si(9,"kor-drawer",8),Pi("visible-changed",(function(t){return Xt(e),Ii().sidePanelVisibleChanged(t)})),Ei(10,"preview-ui-menu"),ki(),ki(),Si(11,"div",9),Si(12,"kor-pane",10),Ei(13,"preview-ui-menu"),ki(),ki(),Ei(14,"router-outlet"),ki(),ki()}if(2&e){const e=t.ngIf,n=Ii();Cr(2),wi("label","Preview "+n.appName),Cr(4),wi("ngIf","connected"===e.status),Cr(1),wi("ngIf","connected"!==e.status),Cr(2),wi("visible",n.sidePanelVisible)}}let xf=(()=>{class e{constructor(e,t,n){this.provider=e,this.listenerService=t,this.ref=n,this.unsubscriber=new S,this.appName="No Name"}ngOnInit(){this.sidePanelVisible=!0,this.provider.receiveCommands(dl.DontCodeModel.APP_NAME).pipe(ll(this.unsubscriber)).subscribe(e=>{this.appName=e.value,this.ref.detectChanges()}),this.context$=sl([this.listenerService.getConnectionStatus()]).pipe(C(e=>({status:e[0]})))}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}logoClicked(){this.sidePanelVisible=!0}sidePanelVisibleChanged(e){this.sidePanelVisible=e.target.visible}openDevUrl(){window.open("#/newTabDev","_blank")}}return e.\u0275fac=function(t){return new(t||e)(_i(hh),_i(ch),_i(Ho))},e.\u0275cmp=at({type:e,selectors:[["preview-ui-main"]],decls:2,vars:3,consts:[[4,"ngIf"],["id","mainToolbar","slot","top","mobile","",3,"label"],["button","","icon","url('./assets/images/logo.png')","slot","left","size","xl",3,"click"],["slot","right"],["icon","code",3,"click"],["icon","sync",4,"ngIf"],["color","rgb(var(--functional-red))","icon","sync_problem",4,"ngIf"],["fxHide","true","fxShow.lt-md","true"],["id","mainSidePanel","label","Menu",3,"visible","visible-changed"],["slot","left","fxShow","true","fxHide.lt-md","true"],["label","Menu","size","l"],["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(vi(0,wf,15,4,"div",0),js(1,"async")),2&e&&wi("ngIf",As(1,1,t.context$))},directives:[pc,cu,bf,Zp],pipes:[_c],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1}"],changeDetection:0}),e})();function Sf(e,t){1&e&&(Si(0,"div"),Ei(1,"preview-ui-main"),ki())}function kf(e,t){1&e&&(Si(0,"div"),Ei(1,"router-outlet"),ki())}let Ef=(()=>{class e{constructor(){this.title="preview-ui"}mainTab(){return-1==window.location.hash.indexOf("/newTabDev")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=at({type:e,selectors:[["preview-ui-root"]],decls:2,vars:2,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(vi(0,Sf,2,0,"div",0),vi(1,kf,2,0,"div",0)),2&e&&(wi("ngIf",t.mainTab()),Cr(1),wi("ngIf",!t.mainTab()))},directives:[pc,xf,Zp],styles:[""]}),e})();class Cf{}function Of(e,t=null){return{type:2,steps:e,options:t}}function Tf(e){return{type:6,styles:e,offset:null}}function Pf(e){Promise.resolve(null).then(e)}class jf{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){Pf(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){}setPosition(e){}getPosition(){return 0}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class Af{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,n=0,r=0;const o=this.players.length;0==o?Pf(()=>this._onFinish()):this.players.forEach(e=>{e.onDone(()=>{++t==o&&this._onFinish()}),e.onDestroy(()=>{++n==o&&this._onDestroy()}),e.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((e,t)=>Math.max(e,t.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const t=e*this.totalTime;this.players.forEach(e=>{const n=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(n)})}getPosition(){let e=0;return this.players.forEach(t=>{const n=t.getPosition();e=Math.min(n,e)}),e}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}function If(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function Rf(e){switch(e.length){case 0:return new jf;case 1:return e[0];default:return new Af(e)}}function Nf(e,t,n,r,o={},i={}){const s=[],a=[];let c=-1,l=null;if(r.forEach(e=>{const n=e.offset,r=n==c,h=r&&l||{};Object.keys(e).forEach(n=>{let r=n,a=e[n];if("offset"!==n)switch(r=t.normalizePropertyName(r,s),a){case"!":a=o[n];break;case"*":a=i[n];break;default:a=t.normalizeStyleValue(n,r,a,s)}h[r]=a}),r||a.push(h),l=h,c=n}),s.length){const e="\n - ";throw new Error(`Unable to animate due to the following errors:${e}${s.join(e)}`)}return a}function Df(e,t,n,r){switch(t){case"start":e.onStart(()=>r(n&&Mf(n,"start",e)));break;case"done":e.onDone(()=>r(n&&Mf(n,"done",e)));break;case"destroy":e.onDestroy(()=>r(n&&Mf(n,"destroy",e)))}}function Mf(e,t,n){const r=n.totalTime,o=$f(e.element,e.triggerName,e.fromState,e.toState,t||e.phaseName,null==r?e.totalTime:r,!!n.disabled),i=e._data;return null!=i&&(o._data=i),o}function $f(e,t,n,r,o="",i=0,s){return{element:e,triggerName:t,fromState:n,toState:r,phaseName:o,totalTime:i,disabled:!!s}}function Ff(e,t,n){let r;return e instanceof Map?(r=e.get(t),r||e.set(t,r=n)):(r=e[t],r||(r=e[t]=n)),r}function Lf(e){const t=e.indexOf(":");return[e.substring(1,t),e.substr(t+1)]}let Hf=(e,t)=>!1,Bf=(e,t)=>!1,zf=(e,t,n)=>[];const Uf=If();(Uf||"undefined"!=typeof Element)&&(Hf=(e,t)=>e.contains(t),Bf=(()=>{if(Uf||Element.prototype.matches)return(e,t)=>e.matches(t);{const e=Element.prototype,t=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return t?(e,n)=>t.apply(e,[n]):Bf}})(),zf=(e,t,n)=>{let r=[];if(n)r.push(...e.querySelectorAll(t));else{const n=e.querySelector(t);n&&r.push(n)}return r});let Vf=null,qf=!1;function Wf(e){Vf||(Vf=("undefined"!=typeof document?document.body:null)||{},qf=!!Vf.style&&"WebkitAppearance"in Vf.style);let t=!0;return Vf.style&&!function(e){return"ebkit"==e.substring(1,6)}(e)&&(t=e in Vf.style,!t&&qf)&&(t="Webkit"+e.charAt(0).toUpperCase()+e.substr(1)in Vf.style),t}const Qf=Bf,Kf=Hf,Gf=zf;function Zf(e){const t={};return Object.keys(e).forEach(n=>{const r=n.replace(/([a-z])([A-Z])/g,"$1-$2");t[r]=e[n]}),t}let Yf=(()=>{class e{validateStyleProperty(e){return Wf(e)}matchesElement(e,t){return Qf(e,t)}containsElement(e,t){return Kf(e,t)}query(e,t,n){return Gf(e,t,n)}computeStyle(e,t,n){return n||""}animate(e,t,n,r,o,i=[],s){return new jf(n,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),Jf=(()=>{class e{}return e.NOOP=new Yf,e})();function Xf(e){if("number"==typeof e)return e;const t=e.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:em(parseFloat(t[1]),t[2])}function em(e,t){switch(t){case"s":return 1e3*e;default:return e}}function tm(e,t,n){return e.hasOwnProperty("duration")?e:function(e,t,n){let r,o=0,i="";if("string"==typeof e){const n=e.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===n)return t.push(`The provided timing value "${e}" is invalid.`),{duration:0,delay:0,easing:""};r=em(parseFloat(n[1]),n[2]);const s=n[3];null!=s&&(o=em(parseFloat(s),n[4]));const a=n[5];a&&(i=a)}else r=e;if(!n){let n=!1,i=t.length;r<0&&(t.push("Duration values below 0 are not allowed for this animation step."),n=!0),o<0&&(t.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&t.splice(i,0,`The provided timing value "${e}" is invalid.`)}return{duration:r,delay:o,easing:i}}(e,t,n)}function nm(e,t={}){return Object.keys(e).forEach(n=>{t[n]=e[n]}),t}function rm(e,t,n={}){if(t)for(let r in e)n[r]=e[r];else nm(e,n);return n}function om(e,t,n){return n?t+":"+n+";":""}function im(e){let t="";for(let n=0;n<e.style.length;n++){const r=e.style.item(n);t+=om(0,r,e.style.getPropertyValue(r))}for(const n in e.style)e.style.hasOwnProperty(n)&&!n.startsWith("_")&&(t+=om(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e.style[n]));e.setAttribute("style",t)}function sm(e,t,n){e.style&&(Object.keys(t).forEach(r=>{const o=fm(r);n&&!n.hasOwnProperty(r)&&(n[r]=e.style[o]),e.style[o]=t[r]}),If()&&im(e))}function am(e,t){e.style&&(Object.keys(t).forEach(t=>{const n=fm(t);e.style[n]=""}),If()&&im(e))}function cm(e){return Array.isArray(e)?1==e.length?e[0]:Of(e):e}const lm=new RegExp("{{\\s*(.+?)\\s*}}","g");function hm(e){let t=[];if("string"==typeof e){let n;for(;n=lm.exec(e);)t.push(n[1]);lm.lastIndex=0}return t}function um(e,t,n){const r=e.toString(),o=r.replace(lm,(e,r)=>{let o=t[r];return t.hasOwnProperty(r)||(n.push("Please provide a value for the animation param "+r),o=""),o.toString()});return o==r?e:o}function dm(e){const t=[];let n=e.next();for(;!n.done;)t.push(n.value),n=e.next();return t}const pm=/-+([a-z0-9])/g;function fm(e){return e.replace(pm,(...e)=>e[1].toUpperCase())}function mm(e,t){return 0===e||0===t}function gm(e,t,n){const r=Object.keys(n);if(r.length&&t.length){let i=t[0],s=[];if(r.forEach(e=>{i.hasOwnProperty(e)||s.push(e),i[e]=n[e]}),s.length)for(var o=1;o<t.length;o++){let n=t[o];s.forEach((function(t){n[t]=ym(e,t)}))}}return t}function bm(e,t,n){switch(t.type){case 7:return e.visitTrigger(t,n);case 0:return e.visitState(t,n);case 1:return e.visitTransition(t,n);case 2:return e.visitSequence(t,n);case 3:return e.visitGroup(t,n);case 4:return e.visitAnimate(t,n);case 5:return e.visitKeyframes(t,n);case 6:return e.visitStyle(t,n);case 8:return e.visitReference(t,n);case 9:return e.visitAnimateChild(t,n);case 10:return e.visitAnimateRef(t,n);case 11:return e.visitQuery(t,n);case 12:return e.visitStagger(t,n);default:throw new Error("Unable to resolve animation metadata node #"+t.type)}}function ym(e,t){return window.getComputedStyle(e)[t]}function vm(e,t){const n=[];return"string"==typeof e?e.split(/\s*,\s*/).forEach(e=>function(e,t,n){if(":"==e[0]){const r=function(e,t){switch(e){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return t.push(`The transition alias value "${e}" is not supported`),"* => *"}}(e,n);if("function"==typeof r)return void t.push(r);e=r}const r=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==r||r.length<4)return n.push(`The provided transition expression "${e}" is not supported`),t;const o=r[1],i=r[2],s=r[3];t.push(xm(o,s)),"<"!=i[0]||"*"==o&&"*"==s||t.push(xm(s,o))}(e,n,t)):n.push(e),n}const _m=new Set(["true","1"]),wm=new Set(["false","0"]);function xm(e,t){const n=_m.has(e)||wm.has(e),r=_m.has(t)||wm.has(t);return(o,i)=>{let s="*"==e||e==o,a="*"==t||t==i;return!s&&n&&"boolean"==typeof o&&(s=o?_m.has(e):wm.has(e)),!a&&r&&"boolean"==typeof i&&(a=i?_m.has(t):wm.has(t)),s&&a}}const Sm=new RegExp("s*:selfs*,?","g");function km(e,t,n){return new Em(e).build(t,n)}class Em{constructor(e){this._driver=e}build(e,t){const n=new Cm(t);return this._resetContextStyleTimingState(n),bm(this,cm(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles={},e.collectedStyles[""]={},e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,r=t.depCount=0;const o=[],i=[];return"@"==e.name.charAt(0)&&t.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),e.definitions.forEach(e=>{if(this._resetContextStyleTimingState(t),0==e.type){const n=e,r=n.name;r.toString().split(/\s*,\s*/).forEach(e=>{n.name=e,o.push(this.visitState(n,t))}),n.name=r}else if(1==e.type){const o=this.visitTransition(e,t);n+=o.queryCount,r+=o.depCount,i.push(o)}else t.errors.push("only state() and transition() definitions can sit inside of a trigger()")}),{type:7,name:e.name,states:o,transitions:i,queryCount:n,depCount:r,options:null}}visitState(e,t){const n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){const o=new Set,i=r||{};if(n.styles.forEach(e=>{if(Om(e)){const t=e;Object.keys(t).forEach(e=>{hm(t[e]).forEach(e=>{i.hasOwnProperty(e)||o.add(e)})})}}),o.size){const n=dm(o.values());t.errors.push(`state("${e.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)}}return{type:0,name:e.name,style:n,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;const n=bm(this,cm(e.animation),t);return{type:1,matchers:vm(e.expr,t.errors),animation:n,queryCount:t.queryCount,depCount:t.depCount,options:Tm(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(e=>bm(this,e,t)),options:Tm(e.options)}}visitGroup(e,t){const n=t.currentTime;let r=0;const o=e.steps.map(e=>{t.currentTime=n;const o=bm(this,e,t);return r=Math.max(r,t.currentTime),o});return t.currentTime=r,{type:3,steps:o,options:Tm(e.options)}}visitAnimate(e,t){const n=function(e,t){let n=null;if(e.hasOwnProperty("duration"))n=e;else if("number"==typeof e)return Pm(tm(e,t).duration,0,"");const r=e;if(r.split(/\s+/).some(e=>"{"==e.charAt(0)&&"{"==e.charAt(1))){const e=Pm(0,0,"");return e.dynamic=!0,e.strValue=r,e}return n=n||tm(r,t),Pm(n.duration,n.delay,n.easing)}(e.timings,t.errors);let r;t.currentAnimateTimings=n;let o=e.styles?e.styles:Tf({});if(5==o.type)r=this.visitKeyframes(o,t);else{let o=e.styles,i=!1;if(!o){i=!0;const e={};n.easing&&(e.easing=n.easing),o=Tf(e)}t.currentTime+=n.duration+n.delay;const s=this.visitStyle(o,t);s.isEmptyStep=i,r=s}return t.currentAnimateTimings=null,{type:4,timings:n,style:r,options:null}}visitStyle(e,t){const n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){const n=[];Array.isArray(e.styles)?e.styles.forEach(e=>{"string"==typeof e?"*"==e?n.push(e):t.errors.push(`The provided style string value ${e} is not allowed.`):n.push(e)}):n.push(e.styles);let r=!1,o=null;return n.forEach(e=>{if(Om(e)){const t=e,n=t.easing;if(n&&(o=n,delete t.easing),!r)for(let e in t)if(t[e].toString().indexOf("{{")>=0){r=!0;break}}}),{type:6,styles:n,easing:o,offset:e.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(e,t){const n=t.currentAnimateTimings;let r=t.currentTime,o=t.currentTime;n&&o>0&&(o-=n.duration+n.delay),e.styles.forEach(e=>{"string"!=typeof e&&Object.keys(e).forEach(n=>{if(!this._driver.validateStyleProperty(n))return void t.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);const i=t.collectedStyles[t.currentQuerySelector],s=i[n];let a=!0;s&&(o!=r&&o>=s.startTime&&r<=s.endTime&&(t.errors.push(`The CSS property "${n}" that exists between the times of "${s.startTime}ms" and "${s.endTime}ms" is also being animated in a parallel animation between the times of "${o}ms" and "${r}ms"`),a=!1),o=s.startTime),a&&(i[n]={startTime:o,endTime:r}),t.options&&function(e,t,n){const r=t.params||{},o=hm(e);o.length&&o.forEach(e=>{r.hasOwnProperty(e)||n.push(`Unable to resolve the local animation param ${e} in the given list of values`)})}(e[n],t.options,t.errors)})})}visitKeyframes(e,t){const n={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push("keyframes() must be placed inside of a call to animate()"),n;let r=0;const o=[];let i=!1,s=!1,a=0;const c=e.steps.map(e=>{const n=this._makeStyleAst(e,t);let c=null!=n.offset?n.offset:function(e){if("string"==typeof e)return null;let t=null;if(Array.isArray(e))e.forEach(e=>{if(Om(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}});else if(Om(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}return t}(n.styles),l=0;return null!=c&&(r++,l=n.offset=c),s=s||l<0||l>1,i=i||l<a,a=l,o.push(l),n});s&&t.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),i&&t.errors.push("Please ensure that all keyframe offsets are in order");const l=e.steps.length;let h=0;r>0&&r<l?t.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==r&&(h=1/(l-1));const u=l-1,d=t.currentTime,p=t.currentAnimateTimings,f=p.duration;return c.forEach((e,r)=>{const i=h>0?r==u?1:h*r:o[r],s=i*f;t.currentTime=d+p.delay+s,p.duration=s,this._validateStyleAst(e,t),e.offset=i,n.styles.push(e)}),n}visitReference(e,t){return{type:8,animation:bm(this,cm(e.animation),t),options:Tm(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:Tm(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:Tm(e.options)}}visitQuery(e,t){const n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;const[o,i]=function(e){const t=!!e.split(/\s*,\s*/).find(e=>":self"==e);return t&&(e=e.replace(Sm,"")),[e=e.replace(/@\*/g,".ng-trigger").replace(/@\w+/g,e=>".ng-trigger-"+e.substr(1)).replace(/:animating/g,".ng-animating"),t]}(e.selector);t.currentQuerySelector=n.length?n+" "+o:o,Ff(t.collectedStyles,t.currentQuerySelector,{});const s=bm(this,cm(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:11,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:i,animation:s,originalSelector:e.selector,options:Tm(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push("stagger() can only be used inside of query()");const n="full"===e.timings?{duration:0,delay:0,easing:"full"}:tm(e.timings,t.errors,!0);return{type:12,animation:bm(this,cm(e.animation),t),timings:n,options:null}}}class Cm{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null}}function Om(e){return!Array.isArray(e)&&"object"==typeof e}function Tm(e){var t;return e?(e=nm(e)).params&&(e.params=(t=e.params)?nm(t):null):e={},e}function Pm(e,t,n){return{duration:e,delay:t,easing:n}}function jm(e,t,n,r,o,i,s=null,a=!1){return{type:1,element:e,keyframes:t,preStyleProps:n,postStyleProps:r,duration:o,delay:i,totalTime:o+i,easing:s,subTimeline:a}}class Am{constructor(){this._map=new Map}consume(e){let t=this._map.get(e);return t?this._map.delete(e):t=[],t}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}}const Im=new RegExp(":enter","g"),Rm=new RegExp(":leave","g");function Nm(e,t,n,r,o,i={},s={},a,c,l=[]){return(new Dm).buildKeyframes(e,t,n,r,o,i,s,a,c,l)}class Dm{buildKeyframes(e,t,n,r,o,i,s,a,c,l=[]){c=c||new Am;const h=new $m(e,t,c,r,o,l,[]);h.options=a,h.currentTimeline.setStyles([i],null,h.errors,a),bm(this,n,h);const u=h.timelines.filter(e=>e.containsAnimation());if(u.length&&Object.keys(s).length){const e=u[u.length-1];e.allowOnlyTimelineStyles()||e.setStyles([s],null,h.errors,a)}return u.length?u.map(e=>e.buildKeyframes()):[jm(t,[],[],[],0,0,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){const n=t.subInstructions.consume(t.element);if(n){const r=t.createSubContext(e.options),o=t.currentTimeline.currentTime,i=this._visitSubInstructions(n,r,r.options);o!=i&&t.transformIntoNewTimeline(i)}t.previousNode=e}visitAnimateRef(e,t){const n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_visitSubInstructions(e,t,n){let r=t.currentTimeline.currentTime;const o=null!=n.duration?Xf(n.duration):null,i=null!=n.delay?Xf(n.delay):null;return 0!==o&&e.forEach(e=>{const n=t.appendInstructionToTimeline(e,o,i);r=Math.max(r,n.duration+n.delay)}),r}visitReference(e,t){t.updateOptions(e.options,!0),bm(this,e.animation,t),t.previousNode=e}visitSequence(e,t){const n=t.subContextCount;let r=t;const o=e.options;if(o&&(o.params||o.delay)&&(r=t.createSubContext(o),r.transformIntoNewTimeline(),null!=o.delay)){6==r.previousNode.type&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Mm);const e=Xf(o.delay);r.delayNextStep(e)}e.steps.length&&(e.steps.forEach(e=>bm(this,e,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){const n=[];let r=t.currentTimeline.currentTime;const o=e.options&&e.options.delay?Xf(e.options.delay):0;e.steps.forEach(i=>{const s=t.createSubContext(e.options);o&&s.delayNextStep(o),bm(this,i,s),r=Math.max(r,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(e=>t.currentTimeline.mergeTimelineCollectedStyles(e)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){const n=e.strValue;return tm(t.params?um(n,t.params,t.errors):n,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){const n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());const o=e.style;5==o.type?this.visitKeyframes(o,t):(t.incrementTime(n.duration),this.visitStyle(o,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){const n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.getCurrentStyleProperties().length&&n.forwardFrame();const o=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(o):n.setStyles(e.styles,o,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){const n=t.currentAnimateTimings,r=t.currentTimeline.duration,o=n.duration,i=t.createSubContext().currentTimeline;i.easing=n.easing,e.styles.forEach(e=>{i.forwardTime((e.offset||0)*o),i.setStyles(e.styles,e.easing,t.errors,t.options),i.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(i),t.transformIntoNewTimeline(r+o),t.previousNode=e}visitQuery(e,t){const n=t.currentTimeline.currentTime,r=e.options||{},o=r.delay?Xf(r.delay):0;o&&(6===t.previousNode.type||0==n&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Mm);let i=n;const s=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=s.length;let a=null;s.forEach((n,r)=>{t.currentQueryIndex=r;const s=t.createSubContext(e.options,n);o&&s.delayNextStep(o),n===t.element&&(a=s.currentTimeline),bm(this,e.animation,s),s.currentTimeline.applyStylesToKeyframe(),i=Math.max(i,s.currentTimeline.currentTime)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(i),a&&(t.currentTimeline.mergeTimelineCollectedStyles(a),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){const n=t.parentContext,r=t.currentTimeline,o=e.timings,i=Math.abs(o.duration),s=i*(t.currentQueryTotal-1);let a=i*t.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":a=s-a;break;case"full":a=n.currentStaggerTime}const c=t.currentTimeline;a&&c.delayNextStep(a);const l=c.currentTime;bm(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-l+(r.startTime-n.currentTimeline.startTime)}}const Mm={};class $m{constructor(e,t,n,r,o,i,s,a){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=o,this.errors=i,this.timelines=s,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Mm,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=a||new Fm(this._driver,t,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;const n=e;let r=this.options;null!=n.duration&&(r.duration=Xf(n.duration)),null!=n.delay&&(r.delay=Xf(n.delay));const o=n.params;if(o){let e=r.params;e||(e=this.options.params={}),Object.keys(o).forEach(n=>{t&&e.hasOwnProperty(n)||(e[n]=um(o[n],e,this.errors))})}}_copyOptions(){const e={};if(this.options){const t=this.options.params;if(t){const n=e.params={};Object.keys(t).forEach(e=>{n[e]=t[e]})}}return e}createSubContext(e=null,t,n){const r=t||this.element,o=new $m(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(e),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(e){return this.previousNode=Mm,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){const r={duration:null!=t?t:e.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+e.delay,easing:""},o=new Lm(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,r,o,i){let s=[];if(r&&s.push(this.element),e.length>0){e=(e=e.replace(Im,"."+this._enterClassName)).replace(Rm,"."+this._leaveClassName);let t=this._driver.query(this.element,e,1!=n);0!==n&&(t=n<0?t.slice(t.length+n,t.length):t.slice(0,n)),s.push(...t)}return o||0!=s.length||i.push(`\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`),s}}class Fm{constructor(e,t,n,r){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=r,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const t=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new Fm(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&(this._previousKeyframe.easing=e),Object.keys(this._globalTimelineStyles).forEach(e=>{this._backFill[e]=this._globalTimelineStyles[e]||"*",this._currentKeyframe[e]="*"}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,r){t&&(this._previousKeyframe.easing=t);const o=r&&r.params||{},i=function(e,t){const n={};let r;return e.forEach(e=>{"*"===e?(r=r||Object.keys(t),r.forEach(e=>{n[e]="*"})):rm(e,!1,n)}),n}(e,this._globalTimelineStyles);Object.keys(i).forEach(e=>{const t=um(i[e],o,n);this._pendingStyles[e]=t,this._localTimelineStyles.hasOwnProperty(e)||(this._backFill[e]=this._globalTimelineStyles.hasOwnProperty(e)?this._globalTimelineStyles[e]:"*"),this._updateStyle(e,t)})}applyStylesToKeyframe(){const e=this._pendingStyles,t=Object.keys(e);0!=t.length&&(this._pendingStyles={},t.forEach(t=>{this._currentKeyframe[t]=e[t]}),Object.keys(this._localTimelineStyles).forEach(e=>{this._currentKeyframe.hasOwnProperty(e)||(this._currentKeyframe[e]=this._localTimelineStyles[e])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(e=>{const t=this._localTimelineStyles[e];this._pendingStyles[e]=t,this._updateStyle(e,t)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){Object.keys(e._styleSummary).forEach(t=>{const n=this._styleSummary[t],r=e._styleSummary[t];(!n||r.time>n.time)&&this._updateStyle(t,r.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,t=new Set,n=1===this._keyframes.size&&0===this.duration;let r=[];this._keyframes.forEach((o,i)=>{const s=rm(o,!0);Object.keys(s).forEach(n=>{const r=s[n];"!"==r?e.add(n):"*"==r&&t.add(n)}),n||(s.offset=i/this.duration),r.push(s)});const o=e.size?dm(e.values()):[],i=t.size?dm(t.values()):[];if(n){const e=r[0],t=nm(e);e.offset=0,t.offset=1,r=[e,t]}return jm(this.element,r,o,i,this.duration,this.startTime,this.easing,!1)}}class Lm extends Fm{constructor(e,t,n,r,o,i,s=!1){super(e,t,i.delay),this.element=t,this.keyframes=n,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=s,this.timings={duration:i.duration,delay:i.delay,easing:i.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){const o=[],i=n+t,s=t/i,a=rm(e[0],!1);a.offset=0,o.push(a);const c=rm(e[0],!1);c.offset=Hm(s),o.push(c);const l=e.length-1;for(let r=1;r<=l;r++){let s=rm(e[r],!1);s.offset=Hm((t+s.offset*n)/i),o.push(s)}n=i,t=0,r="",e=o}return jm(this.element,e,this.preStyleProps,this.postStyleProps,n,t,r,!0)}}function Hm(e,t=3){const n=Math.pow(10,t-1);return Math.round(e*n)/n}class Bm{}class zm extends Bm{normalizePropertyName(e,t){return fm(e)}normalizeStyleValue(e,t,n,r){let o="";const i=n.toString().trim();if(Um[t]&&0!==n&&"0"!==n)if("number"==typeof n)o="px";else{const t=n.match(/^[+-]?[\d\.]+([a-z]*)$/);t&&0==t[1].length&&r.push(`Please provide a CSS unit value for ${e}:${n}`)}return i+o}}const Um=(()=>function(e){const t={};return e.forEach(e=>t[e]=!0),t}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function Vm(e,t,n,r,o,i,s,a,c,l,h,u,d){return{type:0,element:e,triggerName:t,isRemovalTransition:o,fromState:n,fromStyles:i,toState:r,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:h,totalTime:u,errors:d}}const qm={};class Wm{constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,r){return function(e,t,n,r,o){return e.some(e=>e(t,n,r,o))}(this.ast.matchers,e,t,n,r)}buildStyles(e,t,n){const r=this._stateStyles["*"],o=this._stateStyles[e],i=r?r.buildStyles(t,n):{};return o?o.buildStyles(t,n):i}build(e,t,n,r,o,i,s,a,c,l){const h=[],u=this.ast.options&&this.ast.options.params||qm,d=this.buildStyles(n,s&&s.params||qm,h),p=a&&a.params||qm,f=this.buildStyles(r,p,h),m=new Set,g=new Map,b=new Map,y="void"===r,v={params:Object.assign(Object.assign({},u),p)},_=l?[]:Nm(e,t,this.ast.animation,o,i,d,f,v,c,h);let w=0;if(_.forEach(e=>{w=Math.max(e.duration+e.delay,w)}),h.length)return Vm(t,this._triggerName,n,r,y,d,f,[],[],g,b,w,h);_.forEach(e=>{const n=e.element,r=Ff(g,n,{});e.preStyleProps.forEach(e=>r[e]=!0);const o=Ff(b,n,{});e.postStyleProps.forEach(e=>o[e]=!0),n!==t&&m.add(n)});const x=dm(m.values());return Vm(t,this._triggerName,n,r,y,d,f,_,x,g,b,w)}}class Qm{constructor(e,t){this.styles=e,this.defaultParams=t}buildStyles(e,t){const n={},r=nm(this.defaultParams);return Object.keys(e).forEach(t=>{const n=e[t];null!=n&&(r[t]=n)}),this.styles.styles.forEach(e=>{if("string"!=typeof e){const o=e;Object.keys(o).forEach(e=>{let i=o[e];i.length>1&&(i=um(i,r,t)),n[e]=i})}}),n}}class Km{constructor(e,t){this.name=e,this.ast=t,this.transitionFactories=[],this.states={},t.states.forEach(e=>{this.states[e.name]=new Qm(e.style,e.options&&e.options.params||{})}),Gm(this.states,"true","1"),Gm(this.states,"false","0"),t.transitions.forEach(t=>{this.transitionFactories.push(new Wm(e,t,this.states))}),this.fallbackTransition=new Wm(e,{type:1,animation:{type:2,steps:[],options:null},matchers:[(e,t)=>!0],options:null,queryCount:0,depCount:0},this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,r){return this.transitionFactories.find(o=>o.match(e,t,n,r))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}}function Gm(e,t,n){e.hasOwnProperty(t)?e.hasOwnProperty(n)||(e[n]=e[t]):e.hasOwnProperty(n)&&(e[t]=e[n])}const Zm=new Am;class Ym{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n,this._animations={},this._playersById={},this.players=[]}register(e,t){const n=[],r=km(this._driver,t,n);if(n.length)throw new Error("Unable to build the animation due to the following errors: "+n.join("\n"));this._animations[e]=r}_buildPlayer(e,t,n){const r=e.element,o=Nf(0,this._normalizer,0,e.keyframes,t,n);return this._driver.animate(r,o,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){const r=[],o=this._animations[e];let i;const s=new Map;if(o?(i=Nm(this._driver,t,o,"ng-enter","ng-leave",{},{},n,Zm,r),i.forEach(e=>{const t=Ff(s,e.element,{});e.postStyleProps.forEach(e=>t[e]=null)})):(r.push("The requested animation doesn't exist or has already been destroyed"),i=[]),r.length)throw new Error("Unable to create the animation due to the following errors: "+r.join("\n"));s.forEach((e,t)=>{Object.keys(e).forEach(n=>{e[n]=this._driver.computeStyle(t,n,"*")})});const a=Rf(i.map(e=>{const t=s.get(e.element);return this._buildPlayer(e,{},t)}));return this._playersById[e]=a,a.onDestroy(()=>this.destroy(e)),this.players.push(a),a}destroy(e){const t=this._getPlayer(e);t.destroy(),delete this._playersById[e];const n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){const t=this._playersById[e];if(!t)throw new Error("Unable to find the timeline player referenced by "+e);return t}listen(e,t,n,r){const o=$f(t,"","","");return Df(this._getPlayer(e),n,o,r),()=>{}}command(e,t,n,r){if("register"==n)return void this.register(e,r[0]);if("create"==n)return void this.create(e,t,r[0]||{});const o=this._getPlayer(e);switch(n){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e)}}}const Jm=[],Xm={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},eg={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class tg{constructor(e,t=""){this.namespaceId=t;const n=e&&e.hasOwnProperty("value");if(this.value=null!=(r=n?e.value:e)?r:null,n){const t=nm(e);delete t.value,this.options=t}else this.options={};var r;this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const t=e.params;if(t){const e=this.options.params;Object.keys(t).forEach(n=>{null==e[n]&&(e[n]=t[n])})}}}const ng=new tg("void");class rg{constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,hg(t,this._hostClassName)}listen(e,t,n,r){if(!this._triggers.hasOwnProperty(t))throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`);if(null==n||0==n.length)throw new Error(`Unable to listen on the animation trigger "${t}" because the provided event is undefined!`);if("start"!=(o=n)&&"done"!=o)throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`);var o;const i=Ff(this._elementListeners,e,[]),s={name:t,phase:n,callback:r};i.push(s);const a=Ff(this._engine.statesByElement,e,{});return a.hasOwnProperty(t)||(hg(e,"ng-trigger"),hg(e,"ng-trigger-"+t),a[t]=ng),()=>{this._engine.afterFlush(()=>{const e=i.indexOf(s);e>=0&&i.splice(e,1),this._triggers[t]||delete a[t]})}}register(e,t){return!this._triggers[e]&&(this._triggers[e]=t,!0)}_getTrigger(e){const t=this._triggers[e];if(!t)throw new Error(`The provided animation trigger "${e}" has not been registered!`);return t}trigger(e,t,n,r=!0){const o=this._getTrigger(t),i=new ig(this.id,t,e);let s=this._engine.statesByElement.get(e);s||(hg(e,"ng-trigger"),hg(e,"ng-trigger-"+t),this._engine.statesByElement.set(e,s={}));let a=s[t];const c=new tg(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&a&&c.absorbOptions(a.options),s[t]=c,a||(a=ng),"void"!==c.value&&a.value===c.value){if(!function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!=r.length)return!1;for(let o=0;o<n.length;o++){const r=n[o];if(!t.hasOwnProperty(r)||e[r]!==t[r])return!1}return!0}(a.params,c.params)){const t=[],n=o.matchStyles(a.value,a.params,t),r=o.matchStyles(c.value,c.params,t);t.length?this._engine.reportError(t):this._engine.afterFlush(()=>{am(e,n),sm(e,r)})}return}const l=Ff(this._engine.playersByElement,e,[]);l.forEach(e=>{e.namespaceId==this.id&&e.triggerName==t&&e.queued&&e.destroy()});let h=o.matchTransition(a.value,c.value,e,c.params),u=!1;if(!h){if(!r)return;h=o.fallbackTransition,u=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:h,fromState:a,toState:c,player:i,isFallbackTransition:u}),u||(hg(e,"ng-animate-queued"),i.onStart(()=>{ug(e,"ng-animate-queued")})),i.onDone(()=>{let t=this.players.indexOf(i);t>=0&&this.players.splice(t,1);const n=this._engine.playersByElement.get(e);if(n){let e=n.indexOf(i);e>=0&&n.splice(e,1)}}),this.players.push(i),l.push(i),i}deregister(e){delete this._triggers[e],this._engine.statesByElement.forEach((t,n)=>{delete t[e]}),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(t=>t.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const t=this._engine.playersByElement.get(e);t&&(t.forEach(e=>e.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){const n=this._engine.driver.query(e,".ng-trigger",!0);n.forEach(e=>{if(e.__ng_removed)return;const n=this._engine.fetchNamespacesByElement(e);n.size?n.forEach(n=>n.triggerLeaveAnimation(e,t,!1,!0)):this.clearElementCache(e)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(e=>this.clearElementCache(e)))}triggerLeaveAnimation(e,t,n,r){const o=this._engine.statesByElement.get(e);if(o){const i=[];if(Object.keys(o).forEach(t=>{if(this._triggers[t]){const n=this.trigger(e,t,"void",r);n&&i.push(n)}}),i.length)return this._engine.markElementAsRemoved(this.id,e,!0,t),n&&Rf(i).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const t=this._elementListeners.get(e);if(t){const n=new Set;t.forEach(t=>{const r=t.name;if(n.has(r))return;n.add(r);const o=this._triggers[r].fallbackTransition,i=this._engine.statesByElement.get(e)[r]||ng,s=new tg("void"),a=new ig(this.id,r,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:r,transition:o,fromState:i,toState:s,player:a,isFallbackTransition:!0})})}}removeNode(e,t){const n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(n.totalAnimations){const t=n.players.length?n.playersByQueriedElement.get(e):[];if(t&&t.length)r=!0;else{let t=e;for(;t=t.parentNode;)if(n.statesByElement.get(t)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)n.markElementAsRemoved(this.id,e,!1,t);else{const r=e.__ng_removed;r&&r!==Xm||(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){hg(e,this._hostClassName)}drainQueuedTransitions(e){const t=[];return this._queue.forEach(n=>{const r=n.player;if(r.destroyed)return;const o=n.element,i=this._elementListeners.get(o);i&&i.forEach(t=>{if(t.name==n.triggerName){const r=$f(o,n.triggerName,n.fromState.value,n.toState.value);r._data=e,Df(n.player,t.phase,r,t.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(n)}),this._queue=[],t.sort((e,t)=>{const n=e.transition.ast.depCount,r=t.transition.ast.depCount;return 0==n||0==r?n-r:this._engine.driver.containsElement(e.element,t.element)?1:-1})}destroy(e){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let t=!1;return this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find(t=>t.element===e)||t,t}}class og{constructor(e,t,n){this.bodyNode=e,this.driver=t,this._normalizer=n,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(e,t)=>{}}_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(t=>{t.players.forEach(t=>{t.queued&&e.push(t)})}),e}createNamespace(e,t){const n=new rg(e,t,this);return t.parentNode?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){const n=this._namespaceList.length-1;if(n>=0){let r=!1;for(let o=n;o>=0;o--)if(this.driver.containsElement(this._namespaceList[o].hostElement,t)){this._namespaceList.splice(o+1,0,e),r=!0;break}r||this._namespaceList.splice(0,0,e)}else this._namespaceList.push(e);return this.namespacesByHostElement.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}destroy(e,t){if(!e)return;const n=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(n.hostElement),delete this._namespaceLookup[e];const t=this._namespaceList.indexOf(n);t>=0&&this._namespaceList.splice(t,1)}),this.afterFlushAnimationsDone(()=>n.destroy(t))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const t=new Set,n=this.statesByElement.get(e);if(n){const e=Object.keys(n);for(let r=0;r<e.length;r++){const o=n[e[r]].namespaceId;if(o){const e=this._fetchNamespace(o);e&&t.add(e)}}}return t}trigger(e,t,n,r){if(sg(t)){const o=this._fetchNamespace(e);if(o)return o.trigger(t,n,r),!0}return!1}insertNode(e,t,n,r){if(!sg(t))return;const o=t.__ng_removed;if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;const e=this.collectedLeaveElements.indexOf(t);e>=0&&this.collectedLeaveElements.splice(e,1)}if(e){const r=this._fetchNamespace(e);r&&r.insertNode(t,n)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),hg(e,"ng-animate-disabled")):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),ug(e,"ng-animate-disabled"))}removeNode(e,t,n,r){if(sg(t)){const o=e?this._fetchNamespace(e):null;if(o?o.removeNode(t,r):this.markElementAsRemoved(e,t,!1,r),n){const n=this.namespacesByHostElement.get(t);n&&n.id!==e&&n.removeNode(t,r)}}else this._onRemovalComplete(t,r)}markElementAsRemoved(e,t,n,r){this.collectedLeaveElements.push(t),t.__ng_removed={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1}}listen(e,t,n,r,o){return sg(t)?this._fetchNamespace(e).listen(t,n,r,o):()=>{}}_buildInstruction(e,t,n,r,o){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,o)}destroyInnerAnimations(e){let t=this.driver.query(e,".ng-trigger",!0);t.forEach(e=>this.destroyActiveAnimationsForElement(e)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(e,".ng-animating",!0),t.forEach(e=>this.finishActiveQueriedAnimationOnElement(e)))}destroyActiveAnimationsForElement(e){const t=this.playersByElement.get(e);t&&t.forEach(e=>{e.queued?e.markedForDestroy=!0:e.destroy()})}finishActiveQueriedAnimationOnElement(e){const t=this.playersByQueriedElement.get(e);t&&t.forEach(e=>e.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Rf(this.players).onDone(()=>e());e()})}processLeaveNode(e){const t=e.__ng_removed;if(t&&t.setForRemoval){if(e.__ng_removed=Xm,t.namespaceId){this.destroyInnerAnimations(e);const n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}this.driver.matchesElement(e,".ng-animate-disabled")&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(e=>{this.markElementAsDisabled(e,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((e,t)=>this._balanceNamespaceList(e,t)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++)hg(this.collectedEnterElements[n],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const n=[];try{t=this._flushAnimations(n,e)}finally{for(let e=0;e<n.length;e++)n[e]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++)this.processLeaveNode(this.collectedLeaveElements[n]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(e=>e()),this._flushFns=[],this._whenQuietFns.length){const e=this._whenQuietFns;this._whenQuietFns=[],t.length?Rf(t).onDone(()=>{e.forEach(e=>e())}):e.forEach(e=>e())}}reportError(e){throw new Error("Unable to process animations due to the following failed trigger transitions\n "+e.join("\n"))}_flushAnimations(e,t){const n=new Am,r=[],o=new Map,i=[],s=new Map,a=new Map,c=new Map,l=new Set;this.disabledNodes.forEach(e=>{l.add(e);const t=this.driver.query(e,".ng-animate-queued",!0);for(let n=0;n<t.length;n++)l.add(t[n])});const h=this.bodyNode,u=Array.from(this.statesByElement.keys()),d=lg(u,this.collectedEnterElements),p=new Map;let f=0;d.forEach((e,t)=>{const n="ng-enter"+f++;p.set(t,n),e.forEach(e=>hg(e,n))});const m=[],g=new Set,b=new Set;for(let j=0;j<this.collectedLeaveElements.length;j++){const e=this.collectedLeaveElements[j],t=e.__ng_removed;t&&t.setForRemoval&&(m.push(e),g.add(e),t.hasAnimation?this.driver.query(e,".ng-star-inserted",!0).forEach(e=>g.add(e)):b.add(e))}const y=new Map,v=lg(u,Array.from(g));v.forEach((e,t)=>{const n="ng-leave"+f++;y.set(t,n),e.forEach(e=>hg(e,n))}),e.push(()=>{d.forEach((e,t)=>{const n=p.get(t);e.forEach(e=>ug(e,n))}),v.forEach((e,t)=>{const n=y.get(t);e.forEach(e=>ug(e,n))}),m.forEach(e=>{this.processLeaveNode(e)})});const _=[],w=[];for(let j=this._namespaceList.length-1;j>=0;j--)this._namespaceList[j].drainQueuedTransitions(t).forEach(e=>{const t=e.player,o=e.element;if(_.push(t),this.collectedEnterElements.length){const e=o.__ng_removed;if(e&&e.setForMove)return void t.destroy()}const l=!h||!this.driver.containsElement(h,o),u=y.get(o),d=p.get(o),f=this._buildInstruction(e,n,d,u,l);if(f.errors&&f.errors.length)w.push(f);else{if(l)return t.onStart(()=>am(o,f.fromStyles)),t.onDestroy(()=>sm(o,f.toStyles)),void r.push(t);if(e.isFallbackTransition)return t.onStart(()=>am(o,f.fromStyles)),t.onDestroy(()=>sm(o,f.toStyles)),void r.push(t);f.timelines.forEach(e=>e.stretchStartingKeyframe=!0),n.append(o,f.timelines),i.push({instruction:f,player:t,element:o}),f.queriedElements.forEach(e=>Ff(s,e,[]).push(t)),f.preStyleProps.forEach((e,t)=>{const n=Object.keys(e);if(n.length){let e=a.get(t);e||a.set(t,e=new Set),n.forEach(t=>e.add(t))}}),f.postStyleProps.forEach((e,t)=>{const n=Object.keys(e);let r=c.get(t);r||c.set(t,r=new Set),n.forEach(e=>r.add(e))})}});if(w.length){const e=[];w.forEach(t=>{e.push(`@${t.triggerName} has failed due to:\n`),t.errors.forEach(t=>e.push(`- ${t}\n`))}),_.forEach(e=>e.destroy()),this.reportError(e)}const x=new Map,S=new Map;i.forEach(e=>{const t=e.element;n.has(t)&&(S.set(t,t),this._beforeAnimationBuild(e.player.namespaceId,e.instruction,x))}),r.forEach(e=>{const t=e.element;this._getPreviousPlayers(t,!1,e.namespaceId,e.triggerName,null).forEach(e=>{Ff(x,t,[]).push(e),e.destroy()})});const k=m.filter(e=>pg(e,a,c)),E=new Map;cg(E,this.driver,b,c,"*").forEach(e=>{pg(e,a,c)&&k.push(e)});const C=new Map;d.forEach((e,t)=>{cg(C,this.driver,new Set(e),a,"!")}),k.forEach(e=>{const t=E.get(e),n=C.get(e);E.set(e,Object.assign(Object.assign({},t),n))});const O=[],T=[],P={};i.forEach(e=>{const{element:t,player:i,instruction:s}=e;if(n.has(t)){if(l.has(t))return i.onDestroy(()=>sm(t,s.toStyles)),i.disabled=!0,i.overrideTotalTime(s.totalTime),void r.push(i);let e=P;if(S.size>1){let n=t;const r=[];for(;n=n.parentNode;){const t=S.get(n);if(t){e=t;break}r.push(n)}r.forEach(t=>S.set(t,e))}const n=this._buildAnimation(i.namespaceId,s,x,o,C,E);if(i.setRealPlayer(n),e===P)O.push(i);else{const t=this.playersByElement.get(e);t&&t.length&&(i.parentPlayer=Rf(t)),r.push(i)}}else am(t,s.fromStyles),i.onDestroy(()=>sm(t,s.toStyles)),T.push(i),l.has(t)&&r.push(i)}),T.forEach(e=>{const t=o.get(e.element);if(t&&t.length){const n=Rf(t);e.setRealPlayer(n)}}),r.forEach(e=>{e.parentPlayer?e.syncPlayerEvents(e.parentPlayer):e.destroy()});for(let j=0;j<m.length;j++){const e=m[j],t=e.__ng_removed;if(ug(e,"ng-leave"),t&&t.hasAnimation)continue;let n=[];if(s.size){let t=s.get(e);t&&t.length&&n.push(...t);let r=this.driver.query(e,".ng-animating",!0);for(let e=0;e<r.length;e++){let t=s.get(r[e]);t&&t.length&&n.push(...t)}}const r=n.filter(e=>!e.destroyed);r.length?dg(this,e,r):this.processLeaveNode(e)}return m.length=0,O.forEach(e=>{this.players.push(e),e.onDone(()=>{e.destroy();const t=this.players.indexOf(e);this.players.splice(t,1)}),e.play()}),O}elementContainsData(e,t){let n=!1;const r=t.__ng_removed;return r&&r.setForRemoval&&(n=!0),this.playersByElement.has(t)&&(n=!0),this.playersByQueriedElement.has(t)&&(n=!0),this.statesByElement.has(t)&&(n=!0),this._fetchNamespace(e).elementContainsData(t)||n}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,r,o){let i=[];if(t){const t=this.playersByQueriedElement.get(e);t&&(i=t)}else{const t=this.playersByElement.get(e);if(t){const e=!o||"void"==o;t.forEach(t=>{t.queued||(e||t.triggerName==r)&&i.push(t)})}}return(n||r)&&(i=i.filter(e=>!(n&&n!=e.namespaceId||r&&r!=e.triggerName))),i}_beforeAnimationBuild(e,t,n){const r=t.element,o=t.isRemovalTransition?void 0:e,i=t.isRemovalTransition?void 0:t.triggerName;for(const s of t.timelines){const e=s.element,a=e!==r,c=Ff(n,e,[]);this._getPreviousPlayers(e,a,o,i,t.toState).forEach(e=>{const t=e.getRealPlayer();t.beforeDestroy&&t.beforeDestroy(),e.destroy(),c.push(e)})}am(r,t.fromStyles)}_buildAnimation(e,t,n,r,o,i){const s=t.triggerName,a=t.element,c=[],l=new Set,h=new Set,u=t.timelines.map(t=>{const u=t.element;l.add(u);const d=u.__ng_removed;if(d&&d.removedBeforeQueried)return new jf(t.duration,t.delay);const p=u!==a,f=function(e){const t=[];return function e(t,n){for(let r=0;r<t.length;r++){const o=t[r];o instanceof Af?e(o.players,n):n.push(o)}}(e,t),t}((n.get(u)||Jm).map(e=>e.getRealPlayer())).filter(e=>!!e.element&&e.element===u),m=o.get(u),g=i.get(u),b=Nf(0,this._normalizer,0,t.keyframes,m,g),y=this._buildPlayer(t,b,f);if(t.subTimeline&&r&&h.add(u),p){const t=new ig(e,s,u);t.setRealPlayer(y),c.push(t)}return y});c.forEach(e=>{Ff(this.playersByQueriedElement,e.element,[]).push(e),e.onDone(()=>function(e,t,n){let r;if(e instanceof Map){if(r=e.get(t),r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&e.delete(t)}}else if(r=e[t],r){if(r.length){const e=r.indexOf(n);r.splice(e,1)}0==r.length&&delete e[t]}return r}(this.playersByQueriedElement,e.element,e))}),l.forEach(e=>hg(e,"ng-animating"));const d=Rf(u);return d.onDestroy(()=>{l.forEach(e=>ug(e,"ng-animating")),sm(a,t.toStyles)}),h.forEach(e=>{Ff(r,e,[]).push(d)}),d}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new jf(e.duration,e.delay)}}class ig{constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n,this._player=new jf,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,Object.keys(this._queuedCallbacks).forEach(t=>{this._queuedCallbacks[t].forEach(n=>Df(e,t,void 0,n))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){Ff(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const t=this._player;t.triggerCallback&&t.triggerCallback(e)}}function sg(e){return e&&1===e.nodeType}function ag(e,t){const n=e.style.display;return e.style.display=null!=t?t:"none",n}function cg(e,t,n,r,o){const i=[];n.forEach(e=>i.push(ag(e)));const s=[];r.forEach((n,r)=>{const i={};n.forEach(e=>{const n=i[e]=t.computeStyle(r,e,o);n&&0!=n.length||(r.__ng_removed=eg,s.push(r))}),e.set(r,i)});let a=0;return n.forEach(e=>ag(e,i[a++])),s}function lg(e,t){const n=new Map;if(e.forEach(e=>n.set(e,[])),0==t.length)return n;const r=new Set(t),o=new Map;return t.forEach(e=>{const t=function e(t){if(!t)return 1;let i=o.get(t);if(i)return i;const s=t.parentNode;return i=n.has(s)?s:r.has(s)?1:e(s),o.set(t,i),i}(e);1!==t&&n.get(t).push(e)}),n}function hg(e,t){if(e.classList)e.classList.add(t);else{let n=e.$$classes;n||(n=e.$$classes={}),n[t]=!0}}function ug(e,t){if(e.classList)e.classList.remove(t);else{let n=e.$$classes;n&&delete n[t]}}function dg(e,t,n){Rf(n).onDone(()=>e.processLeaveNode(t))}function pg(e,t,n){const r=n.get(e);if(!r)return!1;let o=t.get(e);return o?r.forEach(e=>o.add(e)):t.set(e,r),n.delete(e),!0}class fg{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._triggerCache={},this.onRemovalComplete=(e,t)=>{},this._transitionEngine=new og(e,t,n),this._timelineEngine=new Ym(e,t,n),this._transitionEngine.onRemovalComplete=(e,t)=>this.onRemovalComplete(e,t)}registerTrigger(e,t,n,r,o){const i=e+"-"+r;let s=this._triggerCache[i];if(!s){const e=[],t=km(this._driver,o,e);if(e.length)throw new Error(`The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join("\n - ")}`);s=function(e,t){return new Km(e,t)}(r,t),this._triggerCache[i]=s}this._transitionEngine.registerTrigger(t,r,s)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}onRemove(e,t,n,r){this._transitionEngine.removeNode(e,t,r||!1,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,r){if("@"==n.charAt(0)){const[e,o]=Lf(n);this._timelineEngine.command(e,t,o,r)}else this._transitionEngine.trigger(e,t,n,r)}listen(e,t,n,r,o){if("@"==n.charAt(0)){const[e,r]=Lf(n);return this._timelineEngine.listen(e,t,r,o)}return this._transitionEngine.listen(e,t,n,r,o)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}function mg(e,t){let n=null,r=null;return Array.isArray(t)&&t.length?(n=bg(t[0]),t.length>1&&(r=bg(t[t.length-1]))):t&&(n=bg(t)),n||r?new gg(e,n,r):null}let gg=(()=>{class e{constructor(t,n,r){this._element=t,this._startStyles=n,this._endStyles=r,this._state=0;let o=e.initialStylesByElement.get(t);o||e.initialStylesByElement.set(t,o={}),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&sm(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(sm(this._element,this._initialStyles),this._endStyles&&(sm(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(am(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(am(this._element,this._endStyles),this._endStyles=null),sm(this._element,this._initialStyles),this._state=3)}}return e.initialStylesByElement=new WeakMap,e})();function bg(e){let t=null;const n=Object.keys(e);for(let r=0;r<n.length;r++){const o=n[r];yg(o)&&(t=t||{},t[o]=e[o])}return t}function yg(e){return"display"===e||"position"===e}class vg{constructor(e,t,n,r,o,i,s){this._element=e,this._name=t,this._duration=n,this._delay=r,this._easing=o,this._fillMode=i,this._onDoneFn=s,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=e=>this._handleCallback(e)}apply(){!function(e,t){const n=Eg(e,"").trim();n.length&&(function(e,t){let n=0;for(let r=0;r<e.length;r++)","===e.charAt(r)&&n++}(n),t=`${n}, ${t}`),kg(e,"",t)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),Sg(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){_g(this._element,this._name,"paused")}resume(){_g(this._element,this._name,"running")}setPosition(e){const t=wg(this._element,this._name);this._position=e*this._duration,kg(this._element,"Delay",`-${this._position}ms`,t)}getPosition(){return this._position}_handleCallback(e){const t=e._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(e.elapsedTime.toFixed(3));e.animationName==this._name&&Math.max(t-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}finish(){this._finished||(this._finished=!0,this._onDoneFn(),Sg(this._element,this._eventFn,!0))}destroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(e,t){const n=Eg(e,"").split(","),r=xg(n,t);r>=0&&(n.splice(r,1),kg(e,"",n.join(",")))}(this._element,this._name))}}function _g(e,t,n){kg(e,"PlayState",n,wg(e,t))}function wg(e,t){const n=Eg(e,"");return n.indexOf(",")>0?xg(n.split(","),t):xg([n],t)}function xg(e,t){for(let n=0;n<e.length;n++)if(e[n].indexOf(t)>=0)return n;return-1}function Sg(e,t,n){n?e.removeEventListener("animationend",t):e.addEventListener("animationend",t)}function kg(e,t,n,r){const o="animation"+t;if(null!=r){const t=e.style[o];if(t.length){const e=t.split(",");e[r]=n,n=e.join(",")}}e.style[o]=n}function Eg(e,t){return e.style["animation"+t]}class Cg{constructor(e,t,n,r,o,i,s,a){this.element=e,this.keyframes=t,this.animationName=n,this._duration=r,this._delay=o,this._finalStyles=s,this._specialStyles=a,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=i||"linear",this.totalTime=r+o,this._buildStyler()}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}destroy(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}_flushDoneFns(){this._onDoneFns.forEach(e=>e()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}finish(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}setPosition(e){this._styler.setPosition(e)}getPosition(){return this._styler.getPosition()}hasStarted(){return this._state>=2}init(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}play(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}pause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}reset(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}_buildStyler(){this._styler=new vg(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}beforeDestroy(){this.init();const e={};if(this.hasStarted()){const t=this._state>=3;Object.keys(this._finalStyles).forEach(n=>{"offset"!=n&&(e[n]=t?this._finalStyles[n]:ym(this.element,n))})}this.currentSnapshot=e}}class Og extends jf{constructor(e,t){super(),this.element=e,this._startingStyles={},this.__initialized=!1,this._styles=Zf(t)}init(){!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach(e=>{this._startingStyles[e]=this.element.style[e]}),super.init())}play(){this._startingStyles&&(this.init(),Object.keys(this._styles).forEach(e=>this.element.style.setProperty(e,this._styles[e])),super.play())}destroy(){this._startingStyles&&(Object.keys(this._startingStyles).forEach(e=>{const t=this._startingStyles[e];t?this.element.style.setProperty(e,t):this.element.style.removeProperty(e)}),this._startingStyles=null,super.destroy())}}class Tg{constructor(){this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}validateStyleProperty(e){return Wf(e)}matchesElement(e,t){return Qf(e,t)}containsElement(e,t){return Kf(e,t)}query(e,t,n){return Gf(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}buildKeyframeElement(e,t,n){n=n.map(e=>Zf(e));let r=`@keyframes ${t} {\n`,o="";n.forEach(e=>{o=" ";const t=parseFloat(e.offset);r+=`${o}${100*t}% {\n`,o+=" ",Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"offset":return;case"easing":return void(n&&(r+=`${o}animation-timing-function: ${n};\n`));default:return void(r+=`${o}${t}: ${n};\n`)}}),r+=o+"}\n"}),r+="}\n";const i=document.createElement("style");return i.textContent=r,i}animate(e,t,n,r,o,i=[],s){s&&this._notifyFaultyScrubber();const a=i.filter(e=>e instanceof Cg),c={};mm(n,r)&&a.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const l=function(e){let t={};return e&&(Array.isArray(e)?e:[e]).forEach(e=>{Object.keys(e).forEach(n=>{"offset"!=n&&"easing"!=n&&(t[n]=e[n])})}),t}(t=gm(e,t,c));if(0==n)return new Og(e,l);const h="gen_css_kf_"+this._count++,u=this.buildKeyframeElement(e,h,t);document.querySelector("head").appendChild(u);const d=mg(e,t),p=new Cg(e,t,h,n,r,o,l,d);return p.onDestroy(()=>{var e;(e=u).parentNode.removeChild(e)}),p}_notifyFaultyScrubber(){this._warningIssued||(console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n","  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."),this._warningIssued=!0)}}class Pg{constructor(e,t,n,r){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=r,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(e,t,n){return e.animate(t,n)}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(t=>{"offset"!=t&&(e[t]=this._finished?this._finalKeyframe[t]:ym(this.element,t))}),this.currentSnapshot=e}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class jg{constructor(){this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test(Ag().toString()),this._cssKeyframesDriver=new Tg}validateStyleProperty(e){return Wf(e)}matchesElement(e,t){return Qf(e,t)}containsElement(e,t){return Kf(e,t)}query(e,t,n){return Gf(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}overrideWebAnimationsSupport(e){this._isNativeImpl=e}animate(e,t,n,r,o,i=[],s){if(!s&&!this._isNativeImpl)return this._cssKeyframesDriver.animate(e,t,n,r,o,i);const a={duration:n,delay:r,fill:0==r?"both":"forwards"};o&&(a.easing=o);const c={},l=i.filter(e=>e instanceof Pg);mm(n,r)&&l.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const h=mg(e,t=gm(e,t=t.map(e=>rm(e,!1)),c));return new Pg(e,t,a,h)}}function Ag(){return"undefined"!=typeof window&&void 0!==window.document&&Element.prototype.animate||{}}let Ig=(()=>{class e extends Cf{constructor(e,t){super(),this._nextAnimationId=0,this._renderer=e.createRenderer(t.body,{id:"0",encapsulation:rt.None,styles:[],data:{animation:[]}})}build(e){const t=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(e)?Of(e):e;return Dg(this._renderer,null,t,"register",[n]),new Rg(t,this._renderer)}}return e.\u0275fac=function(t){return new(t||e)(We(Yi),We(za))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();class Rg extends class{}{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new Ng(this._id,e,t||{},this._renderer)}}class Ng{constructor(e,t,n,r){this.id=e,this.element=t,this._renderer=r,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return Dg(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset")}setPosition(e){this._command("setPosition",e)}getPosition(){return 0}}function Dg(e,t,n,r,o){return e.setProperty(t,`@@${n}:${r}`,o)}let Mg=(()=>{class e{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),t.onRemovalComplete=(e,t)=>{t&&t.parentNode(e)&&t.removeChild(e.parentNode,e)}}createRenderer(e,t){const n=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation)){let e=this._rendererCache.get(n);return e||(e=new $g("",n,this.engine),this._rendererCache.set(n,e)),e}const r=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);const i=t=>{Array.isArray(t)?t.forEach(i):this.engine.registerTrigger(r,o,e,t.name,t)};return t.data.animation.forEach(i),new Fg(this,o,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){e>=0&&e<this._microtaskId?this._zone.run(()=>t(n)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(e=>{const[t,n]=e;t(n)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([t,n]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return e.\u0275fac=function(t){return new(t||e)(We(Yi),We(fg),We(ua))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();class $g{constructor(e,t,n){this.namespaceId=e,this.delegate=t,this.engine=n,this.destroyNode=this.delegate.destroyNode?e=>t.destroyNode(e):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,!0)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){"@"==t.charAt(0)&&"@.disabled"==t?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class Fg extends $g{constructor(e,t,n,r){super(t,n,r),this.factory=e,this.namespaceId=t}setProperty(e,t,n){"@"==t.charAt(0)?"."==t.charAt(1)&&"@.disabled"==t?this.disableAnimations(e,n=void 0===n||!!n):this.engine.process(this.namespaceId,e,t.substr(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if("@"==t.charAt(0)){const r=function(e){switch(e){case"body":return document.body;case"document":return document;case"window":return window;default:return e}}(e);let o=t.substr(1),i="";return"@"!=o.charAt(0)&&([o,i]=function(e){const t=e.indexOf(".");return[e.substring(0,t),e.substr(t+1)]}(o)),this.engine.listen(this.namespaceId,r,o,i,e=>{this.factory.scheduleListenerCallback(e._data||-1,n,e)})}return this.delegate.listen(e,t,n)}}let Lg=(()=>{class e extends fg{constructor(e,t,n){super(e.body,t,n)}}return e.\u0275fac=function(t){return new(t||e)(We(za),We(Jf),We(Bm))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const Hg=[{provide:Jf,useFactory:function(){return"function"==typeof Ag()?new jg:new Tg}},{provide:new Me("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:Cf,useClass:Ig},{provide:Bm,useFactory:function(){return new zm}},{provide:fg,useClass:Lg},{provide:Yi,useFactory:function(e,t,n){return new Mg(e,t,n)},deps:[Uc,fg,ua]}];let Bg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},providers:Hg,imports:[tl]}),e})(),zg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)}}),e})(),Ug=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[Eh,zg]]}),e})(),Vg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[Eh]]}),e})(),qg=(()=>{class e{constructor(e,t){kc(t)&&!e&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(t,n=[]){return{ngModule:e,providers:t.serverLoaded?[{provide:Ph,useValue:Object.assign(Object.assign({},Th),t)},{provide:Ah,useValue:n,multi:!0},{provide:jh,useValue:!0}]:[{provide:Ph,useValue:Object.assign(Object.assign({},Th),t)},{provide:Ah,useValue:n,multi:!0}]}}}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)(We(jh),We(Zs))},imports:[[Ug,lu,Vg],Ug,lu,Vg]}),e})(),Wg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[xc,af,qg]]}),e})(),Qg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[xc]]}),e})(),Kg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[xc]]}),e})(),Gg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[xc,Qg,Kg]]}),e})(),Zg=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[xc,Gg]]}),e})();function Yg(e){return(Yg="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Jg(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Jg(e,t,n[t])}))}return e}function eb(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var tb={},nb={};try{"undefined"!=typeof window&&(tb=window),"undefined"!=typeof document&&(nb=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(Ky){}var rb=(tb.navigator||{}).userAgent,ob=void 0===rb?"":rb,ib=tb,sb=nb,ab=!!sb.documentElement&&!!sb.head&&"function"==typeof sb.addEventListener&&"function"==typeof sb.createElement,cb=(~ob.indexOf("MSIE")||ob.indexOf("Trident/"),[1,2,3,4,5,6,7,8,9,10]),lb=cb.concat([11,12,13,14,15,16,17,18,19,20]),hb={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ub=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",hb.GROUP,hb.SWAP_OPACITY,hb.PRIMARY,hb.SECONDARY].concat(cb.map((function(e){return"".concat(e,"x")}))).concat(lb.map((function(e){return"w-".concat(e)}))),ib.FontAwesomeConfig||{});sb&&"function"==typeof sb.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=eb(e,2),n=t[1],r=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=sb.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=r&&(ub[n]=r)}));var db=Xg({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},ub);db.autoReplaceSvg||(db.observeMutations=!1);var pb=Xg({},db);ib.FontAwesomeConfig=pb;var fb=ib||{};fb.___FONT_AWESOME___||(fb.___FONT_AWESOME___={}),fb.___FONT_AWESOME___.styles||(fb.___FONT_AWESOME___.styles={}),fb.___FONT_AWESOME___.hooks||(fb.___FONT_AWESOME___.hooks={}),fb.___FONT_AWESOME___.shims||(fb.___FONT_AWESOME___.shims=[]);var mb=fb.___FONT_AWESOME___,gb=[];ab&&((sb.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(sb.readyState)||sb.addEventListener("DOMContentLoaded",(function e(){sb.removeEventListener("DOMContentLoaded",e),gb.map((function(e){return e()}))})));var bb,yb=function(){},vb="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,_b="undefined"==typeof setImmediate?setTimeout:setImmediate,wb=[];function xb(){for(var e=0;e<wb.length;e++)wb[e][0](wb[e][1]);wb=[],bb=!1}function Sb(e,t){wb.push([e,t]),bb||(bb=!0,_b(xb,0))}function kb(e){var t=e.owner,n=t._state,r=t._data,o=e[n],i=e.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(Ky){Tb(i,Ky)}}Eb(i,r)||("fulfilled"===n&&Cb(i,r),"rejected"===n&&Tb(i,r))}function Eb(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===Yg(t))){var r=t.then;if("function"==typeof r)return r.call(t,(function(r){n||(n=!0,t===r?Ob(e,r):Cb(e,r))}),(function(t){n||(n=!0,Tb(e,t))})),!0}}catch(Ky){return n||Tb(e,Ky),!0}return!1}function Cb(e,t){e!==t&&Eb(e,t)||Ob(e,t)}function Ob(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Sb(jb,e))}function Tb(e,t){"pending"===e._state&&(e._state="settled",e._data=t,Sb(Ab,e))}function Pb(e){e._then=e._then.forEach(kb)}function jb(e){e._state="fulfilled",Pb(e)}function Ab(e){e._state="rejected",Pb(e),!e._handled&&vb&&global.process.emit("unhandledRejection",e._data,e)}function Ib(e){global.process.emit("rejectionHandled",e)}function Rb(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof Rb==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){Tb(t,e)}try{e((function(e){Cb(t,e)}),n)}catch(Ky){n(Ky)}}(e,this)}Rb.prototype={constructor:Rb,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(yb),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&vb&&Sb(Ib,this)),"fulfilled"===this._state||"rejected"===this._state?Sb(kb,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},Rb.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new Rb((function(t,n){var r=[],o=0;function i(e){return o++,function(n){r[e]=n,--o||t(r)}}for(var s,a=0;a<e.length;a++)(s=e[a])&&"function"==typeof s.then?s.then(i(a),n):r[a]=s;o||t(r)}))},Rb.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new Rb((function(t,n){for(var r,o=0;o<e.length;o++)(r=e[o])&&"function"==typeof r.then?r.then(t,n):t(r)}))},Rb.resolve=function(e){return e&&"object"===Yg(e)&&e.constructor===Rb?e:new Rb((function(t){t(e)}))},Rb.reject=function(e){return new Rb((function(t,n){n(e)}))};var Nb=function(e,t,n,r){var o,i,s,a=Object.keys(e),c=a.length,l=void 0!==r?function(e,t){return function(n,r,o,i){return e.call(t,n,r,o,i)}}(t,r):t;for(void 0===n?(o=1,s=e[a[0]]):(o=0,s=n);o<c;o++)s=l(s,e[i=a[o]],i,e);return s};function Db(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,o=void 0!==r&&r,i=Object.keys(t).reduce((function(e,n){var r=t[n];return r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof mb.hooks.addPack||o?mb.styles[e]=Xg({},mb.styles[e]||{},i):mb.hooks.addPack(e,i),"fas"===e&&Db("fa",t)}var Mb=mb.styles,$b=mb.shims,Fb=function(){var e=function(e){return Nb(Mb,(function(t,n,r){return t[r]=Nb(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in Mb;Nb($b,(function(e,n){var r=n[1];return"far"!==r||t||(r="fas"),e[n[0]]={prefix:r,iconName:n[2]},e}),{})};function Lb(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}Fb(),(Lb.prototype=Object.create(Error.prototype)).constructor=Lb;var Hb={fill:"currentColor"},Bb={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},zb=(Xg({},Hb,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),Xg({},Bb,{attributeName:"opacity"}));Xg({},Hb,{cx:"256",cy:"364",r:"28"}),Xg({},Bb,{attributeName:"r",values:"28;14;28;28;14;28;"}),Xg({},zb,{values:"1;0;1;1;0;1;"}),Xg({},Hb,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),Xg({},zb,{values:"1;0;0;0;0;1;"}),Xg({},Hb,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),Xg({},zb,{values:"0;0;1;1;0;0;"}),new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach((function(t){e.definitions[t]=Xg({},e.definitions[t]||{},o[t]),Db(t,o[t]),Fb()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],o=r.prefix,i=r.iconName,s=r.icon;e[o]||(e[o]={}),e[o][i]=s})),e}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,t),e}());let Ub=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)}}),e})();n("1X/a");let Vb=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=at({type:e,selectors:[["preview-ui-home"]],decls:24,vars:0,consts:[["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(Si(0,"h1"),Di(1,"Welcome to DontCode !"),ki(),Si(2,"h2"),Di(3,"What am I seeing ?"),ki(),Si(4,"p"),Di(5,"You have opened the Preview App. The Preview App connects to Online services to receive Application changes from the Application Builder in realtime."),ki(),Si(6,"p"),Si(7,"b"),Di(8,"Check you are connected"),ki(),Di(9," to the online service by looking at the "),Ei(10,"kor-icon",0),Di(11," icon in the header panel."),ki(),Si(12,"p"),Ei(13,"kor-icon",0),Di(14," means you are ok, "),Ei(15,"kor-icon",1),Di(16," you have connection issue to the online service. Please check the browser log in this case"),ki(),Si(17,"p"),Di(18,"If "),Ei(19,"kor-icon",0),Di(20,", then "),Si(21,"b"),Di(22,"go back to the Application Builder"),ki(),Di(23," and enter some values in the Editor"),ki())},styles:[""]}),e})();class qb{}class Wb{}class Qb{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const n=e.slice(0,t),r=n.toLowerCase(),o=e.slice(t+1).trim();this.maybeSetNormalizedName(n,r),this.headers.has(r)?this.headers.get(r).push(o):this.headers.set(r,[o])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let n=e[t];const r=t.toLowerCase();"string"==typeof n&&(n=[n]),n.length>0&&(this.headers.set(r,n),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof Qb?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new Qb;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof Qb?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...n),this.headers.set(t,r);break;case"d":const o=e.value;if(o){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===o.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class Kb{encodeKey(e){return Gb(e)}encodeValue(e){return Gb(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function Gb(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class Zb{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Kb,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const n=new Map;return e.length>0&&e.split("&").forEach(e=>{const r=e.indexOf("="),[o,i]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],s=n.get(o)||[];s.push(i),n.set(o,s)}),n}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const n=e.fromObject[t];this.map.set(t,Array.isArray(n)?n:[n])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new Zb({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat([e]),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const n=t.indexOf(e.value);-1!==n&&t.splice(n,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function Yb(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function Jb(e){return"undefined"!=typeof Blob&&e instanceof Blob}function Xb(e){return"undefined"!=typeof FormData&&e instanceof FormData}class ey{constructor(e,t,n,r){let o;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.params&&(this.params=o.params)),this.headers||(this.headers=new Qb),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const n=t.indexOf("?");this.urlWithParams=t+(-1===n?"?":n<t.length-1?"&":"")+e}}else this.params=new Zb,this.urlWithParams=t}serializeBody(){return null===this.body?null:Yb(this.body)||Jb(this.body)||Xb(this.body)||"string"==typeof this.body?this.body:this.body instanceof Zb?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Xb(this.body)?null:Jb(this.body)?this.body.type||null:Yb(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Zb?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(e={}){const t=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,o=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,s=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let a=e.headers||this.headers,c=e.params||this.params;return void 0!==e.setHeaders&&(a=Object.keys(e.setHeaders).reduce((t,n)=>t.set(n,e.setHeaders[n]),a)),e.setParams&&(c=Object.keys(e.setParams).reduce((t,n)=>t.set(n,e.setParams[n]),c)),new ey(t,n,o,{params:c,headers:a,reportProgress:s,responseType:r,withCredentials:i})}}var ty=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({});class ny{constructor(e,t=200,n="OK"){this.headers=e.headers||new Qb,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class ry extends ny{constructor(e={}){super(e),this.type=ty.ResponseHeader}clone(e={}){return new ry({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class oy extends ny{constructor(e={}){super(e),this.type=ty.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new oy({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class iy extends ny{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?"Http failure during parsing for "+(e.url||"(unknown url)"):`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function sy(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let ay=(()=>{class e{constructor(e){this.handler=e}request(e,t,n={}){let r;if(e instanceof ey)r=e;else{let o=void 0;o=n.headers instanceof Qb?n.headers:new Qb(n.headers);let i=void 0;n.params&&(i=n.params instanceof Zb?n.params:new Zb({fromObject:n.params})),r=new ey(e,t,void 0!==n.body?n.body:null,{headers:o,params:i,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const o=Cl(r).pipe(Pu(e=>this.handler.handle(e)));if(e instanceof ey||"events"===n.observe)return o;const i=o.pipe(fl(e=>e instanceof oy));switch(n.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return i.pipe(C(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return i.pipe(C(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return i.pipe(C(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return i.pipe(C(e=>e.body))}case"response":return i;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new Zb).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,n={}){return this.request("PATCH",e,sy(n,t))}post(e,t,n={}){return this.request("POST",e,sy(n,t))}put(e,t,n={}){return this.request("PUT",e,sy(n,t))}}return e.\u0275fac=function(t){return new(t||e)(We(qb))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();class cy{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const ly=new Me("HTTP_INTERCEPTORS");let hy=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const uy=/^\)\]\}',?\n/;class dy{}let py=(()=>{class e{constructor(){}build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),fy=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new y(t=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((e,t)=>n.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&n.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();n.responseType="json"!==t?t:"text"}const r=e.serializeBody();let o=null;const i=()=>{if(null!==o)return o;const t=1223===n.status?204:n.status,r=n.statusText||"OK",i=new Qb(n.getAllResponseHeaders()),s=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(n)||e.url;return o=new ry({headers:i,status:t,statusText:r,url:s}),o},s=()=>{let{headers:r,status:o,statusText:s,url:a}=i(),c=null;204!==o&&(c=void 0===n.response?n.responseText:n.response),0===o&&(o=c?200:0);let l=o>=200&&o<300;if("json"===e.responseType&&"string"==typeof c){const e=c;c=c.replace(uy,"");try{c=""!==c?JSON.parse(c):null}catch(h){c=e,l&&(l=!1,c={error:h,text:c})}}l?(t.next(new oy({body:c,headers:r,status:o,statusText:s,url:a||void 0})),t.complete()):t.error(new iy({error:c,headers:r,status:o,statusText:s,url:a||void 0}))},a=e=>{const{url:r}=i(),o=new iy({error:e,status:n.status||0,statusText:n.statusText||"Unknown Error",url:r||void 0});t.error(o)};let c=!1;const l=r=>{c||(t.next(i()),c=!0);let o={type:ty.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(o.total=r.total),"text"===e.responseType&&n.responseText&&(o.partialText=n.responseText),t.next(o)},h=e=>{let n={type:ty.UploadProgress,loaded:e.loaded};e.lengthComputable&&(n.total=e.total),t.next(n)};return n.addEventListener("load",s),n.addEventListener("error",a),e.reportProgress&&(n.addEventListener("progress",l),null!==r&&n.upload&&n.upload.addEventListener("progress",h)),n.send(r),t.next({type:ty.Sent}),()=>{n.removeEventListener("error",a),n.removeEventListener("load",s),e.reportProgress&&(n.removeEventListener("progress",l),null!==r&&n.upload&&n.upload.removeEventListener("progress",h)),n.readyState!==n.DONE&&n.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(We(dy))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})();const my=new Me("XSRF_COOKIE_NAME"),gy=new Me("XSRF_HEADER_NAME");class by{}let yy=(()=>{class e{constructor(e,t,n){this.doc=e,this.platform=t,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=lc(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(We(za),We(Zs),We(my))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),vy=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(We(by),We(gy))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),_y=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(ly,[]);this.chain=e.reduceRight((e,t)=>new cy(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(We(Wb),We(ni))},e.\u0275prov=ce({token:e,factory:e.\u0275fac}),e})(),wy=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:vy,useClass:hy}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:my,useValue:t.cookieName}:[],t.headerName?{provide:gy,useValue:t.headerName}:[]]}}}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},providers:[vy,{provide:ly,useExisting:vy,multi:!0},{provide:by,useClass:yy},{provide:my,useValue:"XSRF-TOKEN"},{provide:gy,useValue:"X-XSRF-TOKEN"}]}),e})(),xy=(()=>{class e{}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},providers:[ay,{provide:qb,useClass:_y},fy,{provide:Wb,useExisting:fy},py,{provide:dy,useExisting:py}],imports:[[wy.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})(),Sy=(()=>{class e{constructor(e){this.http=e}getTemplates(){return this.templates?Cl(this.templates):this.http.get("assets/dev/templates.json",{responseType:"json"}).pipe(C(e=>(this.templates=new Array,e.forEach(e=>{this.templates.push(new ky(e))}),this.templates)),Cu(e=>{throw console.log("Error reading Dev templates file",e),e}))}findTemplate(e){for(let t of this.templates)if(t.name===e)return t;return null}}return e.\u0275fac=function(t){return new(t||e)(We(ay))},e.\u0275prov=ce({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class ky{constructor(e){this.name=e.name,this.position=e.position,this.value=e.value}}function Ey(e,t){1&e&&Ei(0,"kor-menu-item",6),2&e&&Ri("label",t.$implicit.name)}let Cy=(()=>{class e{constructor(e,t){this.pushService=e,this.templates=t,this.position="creation/name",this.value="New Test"}ngOnInit(){this.listTemplates=this.templates.getTemplates()}addCommand(e){this.pushService.pushChange(new dl.Change(dl.ChangeType.ADD,this.position,this.value))}templateChanged(e){this.position=this.templates.findTemplate(e).position}}return e.\u0275fac=function(t){return new(t||e)(_i(ah),_i(Sy))},e.\u0275cmp=at({type:e,selectors:[["preview-ui-insert-command"]],decls:7,vars:5,consts:[["label","Add Command","expanded",""],["label","Commands","type","select",3,"value-changed"],[3,"label",4,"ngFor","ngForOf"],["label","position",3,"value","value-changed"],["label","value",3,"value","value-changed"],["slot","footer","label","Add",3,"click"],[3,"label"]],template:function(e,t){1&e&&(Si(0,"kor-accordion",0),Si(1,"kor-input",1),Pi("value-changed",(function(e){return t.templateChanged(e.target.value)})),vi(2,Ey,1,1,"kor-menu-item",2),js(3,"async"),ki(),Si(4,"kor-input",3),Pi("value-changed",(function(e){return t.position=e.target.value})),ki(),Si(5,"kor-input",4),Pi("value-changed",(function(e){return t.value=e.target.value})),ki(),Si(6,"kor-button",5),Pi("click",(function(e){return t.addCommand(e)})),ki(),ki()),2&e&&(Cr(2),wi("ngForOf",As(3,3,t.listTemplates)),Cr(2),wi("value",t.position),Cr(1),wi("value",t.value))},directives:[uc],pipes:[_c],styles:[""]}),e})();function Oy(e,t){if(1&e&&(Si(0,"p"),Di(1),js(2,"json"),ki()),2&e){const e=t.$implicit;Cr(1),Fi("",e.type,", ",e.position,", ",As(2,3,e.value),"")}}let Ty=(()=>{class e{constructor(e,t){this.providerService=e,this.ref=t,this.commands=[],this.unsubscriber=new S,this.forgetIt=!0}ngOnInit(){this.providerService.receiveCommands().pipe(ll(this.unsubscriber),C(e=>{this.commands.push(e),this.ref.detectChanges()})).subscribe()}noCommands(){return 0==this.commands.length}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}}return e.\u0275fac=function(t){return new(t||e)(_i(hh),_i(Ho))},e.\u0275cmp=at({type:e,selectors:[["preview-ui-list-commands"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(Si(0,"p"),Di(1,"We list below the commands received from the Application Builder:"),ki(),vi(2,Oy,3,5,"p",0)),2&e&&(Cr(2),wi("ngForOf",t.commands))},directives:[uc],pipes:[wc],styles:[""],changeDetection:0}),e})(),Py=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=at({type:e,selectors:[["preview-ui-debug-page"]],decls:11,vars:0,template:function(e,t){1&e&&(Si(0,"h1"),Di(1,"Debug Page"),ki(),Ei(2,"br"),Di(3,"This page allows us to test your plugin by injecting the same commands than the Builder application.\n"),Ei(4,"br"),Di(5,"You then can see the behavior of your Preview Plugin without running the Builder\n"),Ei(6,"br"),Di(7,"\nPlease select the command to add:\n"),Ei(8,"preview-ui-insert-command"),Ei(9,"kor-divider"),Ei(10,"preview-ui-list-commands"))},directives:[Cy,Ty],styles:[""]}),e})(),jy=(()=>{class e{constructor(){}ngOnInit(){}initCommandFlow(e,t){this.position=t.position,this.schemaPosition=t.schemaPosition}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=at({type:e,selectors:[["preview-ui-default-viewer"]],decls:2,vars:2,template:function(e,t){1&e&&(Si(0,"p"),Di(1),ki()),2&e&&(Cr(1),$i("No handler found for position ",t.position," and schemaPosition ",t.schemaPosition,""))},styles:[""],changeDetection:0}),e})();function Ay(e,t){}let Iy=(()=>{class e{constructor(e,t,n){this.route=e,this.componentFactoryResolver=t,this.provider=n,this.unsubscriber=new S}ngOnInit(){}loadComponent(e,t){const n=dl.DontCode.dtcde.getPreviewManager(),r=this.provider.getJsonAt(e),o=n.retrieveHandlerConfig(e,r);if(!o)return console.log("No handler found, using default "),Cl(this.applyComponent(jy,t));console.log("Importing from ",o.class.source);try{let e=function(e){const t=function(e){return Os.get(e)||ht[e]}(e);if(!t)throw function(e){return new Error(`No module with ID ${e} loaded`)}(e);return new Ps(t)}("dontcode-plugin/"+o.class.source).create(null).instance;return Cl(this.applyComponent(e.exposedPreviewHandlers().get(o.class.name),t))}catch(Ky){}}applyComponentFromConfig(e,t,n){return this.applyComponent(e[t.class.name],n)}applyComponent(e,t){const n=this.componentFactoryResolver.resolveComponentFactory(e),r=t.viewContainerRef;return r.clear(),r.createComponent(n).instance}ngOnDestroy(){this.forceUnsubscribe()}forceUnsubscribe(){console.log("Unsubscribe"),this.unsubscriber.next(),this.unsubscriber.complete(),this.unsubscriber=new S}}return e.\u0275fac=function(t){return new(t||e)(_i(Nd),_i(Ki),_i(hh))},e.\u0275cmp=at({type:e,selectors:[["preview-ui-dynamic-base"]],decls:3,vars:0,consts:[["previewUiDynamicInsert",""]],template:function(e,t){1&e&&(Si(0,"p"),Di(1,"dynamic-base works!"),ki(),vi(2,Ay,0,0,"ng-template",0))},styles:[""],changeDetection:0}),e})(),Ry=(()=>{class e{constructor(e){this.viewContainerRef=e}}return e.\u0275fac=function(t){return new(t||e)(_i(vs))},e.\u0275dir=pt({type:e,selectors:[["","previewUiDynamicInsert",""]]}),e})();function Ny(e,t){if(1&e&&(function(e,t,n){const r=Yt(),o=Jt(),i=o.firstCreatePass?function(e,t,n,r,o){const i=t.consts,s=Wt(i,undefined),a=Ar(t,0,3,"ng-container",s);return null!==s&&oi(a,s,!0),Vr(t,n,a,Wt(i,undefined)),null!==t.queries&&t.queries.elementStart(t,a),a}(0,o,r):o.data[20];tn(i,!0);const s=r[20]=r[11].createComment("");Eo(o,r,s,i),hr(s,r),xt(i)&&($r(o,r,i),Mr(o,i,r))}(),Si(1,"p"),Di(2),ki(),function(){let e=en();const t=Jt();nn()?rn():(e=e.parent,tn(e,!1)),t.firstCreatePass&&(kn(t,e),_t(e)&&t.queries.elementEnd(e))}()),2&e){const e=t.ngIf;Cr(2),Mi("Screen ",e.type,"")}}function Dy(e,t){}let My=(()=>{class e extends Iy{constructor(e,t,n){super(e,t,n)}ngOnInit(){super.ngOnInit(),this.screenName$=this.route.params}ngAfterViewInit(){this.screenName$=this.route.params,this.route.url.pipe(ll(this.unsubscriber),C(e=>{let t=null;e.forEach(e=>{t=null===t?e.path:t+"/"+e.path}),console.log("Searching for component handling route ",t);const n=this.provider.calculatePointerFor(t);this.loadComponent(n.schemaPosition,this.host).pipe(C(e=>({position:t,component:e})),C(e=>{e.component.initCommandFlow(this.provider,n)})).subscribe(()=>{})})).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(_i(Nd),_i(Ki),_i(hh))},e.\u0275cmp=at({type:e,selectors:[["preview-ui-screen"]],viewQuery:function(e,t){var n,r,o,i,s,a;1&e&&(i=Ry,s=!0,function(e,t,n,r,o,i){e.firstCreatePass&&(function(e,t,n){null===e.queries&&(e.queries=new Fs),e.queries.track(new Ls(t,-1))}(e,new $s(n,r,!0,o)),e.staticViewQueries=!0),function(e,t){const n=new Ns;Br(e,t,n,n.destroy),null===t[19]&&(t[19]=new Ms),t[19].queries.push(new Ds(n))}(e,t)}(Jt(),Yt(),i,s,a)),2&e&&function(e){const t=Yt(),n=Jt(),r=dn();pn(r+1);const o=Us(n,r);if(e.dirty&&Vt(t)===o.metadata.isStatic){if(null===o.matches)e.reset([]);else{const i=o.crossesNgTemplate?function e(t,n,r,o){const i=t.queries.getByIndex(r),s=i.matches;if(null!==s){const a=zs(t,n,i,r);for(let t=0;t<s.length;t+=2){const r=s[t];if(r>0)o.push(a[t/2]);else{const i=s[t+1],a=n[-r];for(let t=10;t<a.length;t++){const n=a[t];n[17]===n[3]&&e(n[1],n,i,o)}if(null!==a[9]){const t=a[9];for(let n=0;n<t.length;n++){const r=t[n];e(r[1],r,i,o)}}}}}return o}(n,t,r,[]):zs(n,t,o,r);e.reset(i),e.notifyOnChanges()}return!0}return!1}((r=Yt(),o=dn(),n=r[19].queries[o].queryList))&&(t.host=n.first)},features:[si],decls:3,vars:3,consts:[[4,"ngIf"],["previewUiDynamicInsert",""]],template:function(e,t){1&e&&(vi(0,Ny,3,1,"ng-container",0),js(1,"async"),vi(2,Dy,0,0,"ng-template",1)),2&e&&wi("ngIf",As(1,1,t.screenName$))},directives:[pc,Ry],pipes:[_c],styles:[""]}),e})();class $y{getConfiguration(){return{plugin:{id:"ScreenPlugin","display-name":"Dont code test Plugin adding screen types",version:"1.0.0"},"schema-updates":[{id:"screen-list",description:"A screen displaying a list of items",changes:[{location:{parent:"#/definitions/screen",id:"type",after:"name"},add:{enum:["list"]},props:{entity:{type:"string",format:"#/creation/entities"}},replace:!0},{location:{parent:"/definitions/screen",id:"type",after:"name"},add:{enum:["freeform"]},props:{},replace:!1}]}],"preview-handlers":[{location:{parent:dl.DontCodeModel.APP_SCREENS,id:"type",values:["list"]},class:{name:"ScreenComponent",source:"screen"}}]}}}let Fy=(()=>{class e{constructor(){this.unsubscriber=new S}ngOnInit(){}initCommandFlow(e,t){e.receiveCommands(t.position).pipe(ll(this.unsubscriber)).subscribe(e=>{console.log("Getting updates from ",t.position," with value ",e.value)})}ngOnDestroy(){this.forceUnsubscribe()}forceUnsubscribe(){this.unsubscriber.next(),this.unsubscriber.complete(),this.unsubscriber=new S}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=at({type:e,selectors:[["plugins-screen"]],decls:2,vars:0,template:function(e,t){1&e&&(Si(0,"p"),Di(1,"screen from the plugin Works!"),ki())},styles:[""]}),e})();var Ly=dl.DontCode.dtcde;let Hy=(()=>{class e{constructor(){console.log("Screen Plugin registering"),Ly.registerPlugin(new $y)}exposedPreviewHandlers(){return new Map([["ScreenComponent",Fy]])}}return e.\u0275mod=ut({type:e}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[xc]]}),e})();class By{getConfiguration(){return{plugin:{id:"BasicPlugin","display-name":"Dont code plugin for all base elements",version:"1.0.0"},"schema-updates":[{id:"entity-all",description:"Screens to directly list, edit, remove entities",changes:[{location:{parent:"#/definitions/entity"},replace:!1}]}],"preview-handlers":[{location:{parent:dl.DontCodeModel.APP_ENTITIES},class:{name:"BasicEntityComponent",source:"basic"}}]}}}let zy=(()=>{class e{constructor(){this.unsubscriber=new S}ngOnInit(){}ngOnDestroy(){this.forceUnsubscribe()}forceUnsubscribe(){console.log("Unsubscribe"),this.unsubscriber.next(),this.unsubscriber.complete(),this.unsubscriber=new S}decodeStringField(e,t){return e.pointer.key===t?e.value:void 0}decodeArrayField(e,t){return e.pointer.key===t?e.value:void 0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=at({type:e,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e})(),Uy=(()=>{class e extends zy{constructor(e){super(),this.ref=e}initCommandFlow(e,t){const n=e.getJsonAt(t.position);console.log("Entity init:",n),n&&(this.entityName=n[dl.DontCodeModel.APP_ENTITIES_NAME_NODE],this.fields=n[dl.DontCodeModel.APP_FIELDS_NODE],this.ref.detectChanges()),e.receiveCommands(t.position).pipe(ll(this.unsubscriber)).subscribe(e=>{let t=this.decodeStringField(e,dl.DontCodeModel.APP_ENTITIES_NAME_NODE);t?this.entityName=e.value:(t=this.decodeArrayField(e,dl.DontCodeModel.APP_FIELDS_NODE),t&&(this.fields=t)),this.ref.detectChanges()})}}return e.\u0275fac=function(t){return new(t||e)(_i(Ho))},e.\u0275cmp=at({type:e,selectors:[["dontcode-basic-entity"]],features:[si],decls:3,vars:1,template:function(e,t){1&e&&(Di(0,"Heelo "),Si(1,"h1"),Di(2),ki()),2&e&&(Cr(2),Mi("Name = ",t.entityName,""))},styles:[""],changeDetection:0}),e})();var Vy=dl.DontCode.dtcde;let qy=(()=>{class e{constructor(){console.log("Basic Plugin registering"),Vy.registerPlugin(new By)}exposedPreviewHandlers(){return new Map([["BasicEntityComponent",Uy]])}}return e.\u0275mod=ut({type:e,id:"dontcode-plugin/basic"}),e.\u0275inj=le({factory:function(t){return new(t||e)},imports:[[xc]]}),e})();const Wy=[{path:"",component:Vb},{path:"dev",component:Py},{path:"newTabDev",component:Py},{path:"creation/:type/:id",component:My}];let Qy=(()=>{class e{}return e.\u0275mod=ut({type:e,bootstrap:[Ef]}),e.\u0275inj=le({factory:function(t){return new(t||e)},providers:[],imports:[[tl,Bg,xy,Wg,Gg,Zg,af.forRoot(Wy,{enableTracing:!1,useHash:!0}),Ub,qg,Hy,qy]]}),e})();(function(){if(cr)throw new Error("Cannot enable prod mode after platform setup.");ar=!1})(),Xc().bootstrapModule(Qy).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[1,0]]]);