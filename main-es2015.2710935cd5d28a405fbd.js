(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("zUnb")},"1X/a":function(e,t){!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,(function(t){return e[t]}).bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=42)}([function(e,t,n){"use strict";n.d(t,"c",(function(){return Z})),n.d(t,"e",(function(){return Y})),n.d(t,"d",(function(){return D})),n.d(t,"b",(function(){return te})),n.d(t,"a",(function(){return ne}));const o=new WeakMap,r=e=>"function"==typeof e&&o.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},a={},c={},l=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${l}--\x3e`,u=new RegExp(`${l}|${h}`);class d{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let i=0,s=-1,a=0;const{strings:c,values:{length:h}}=e;for(;a<h;){const e=r.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let o=0;for(let e=0;e<n;e++)f(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=m.exec(c[a])[2],n=t.toLowerCase()+"$lit$",o=e.getAttribute(n);e.removeAttribute(n);const r=o.split(u);this.parts.push({type:"attribute",index:s,name:t,strings:r}),a+=r.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(l)>=0){const o=e.parentNode,r=t.split(u),i=r.length-1;for(let t=0;t<i;t++){let n,i=r[t];if(""===i)n=g();else{const e=m.exec(i);null!==e&&f(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}o.insertBefore(n,e),this.parts.push({type:"node",index:++s})}""===r[i]?(o.insertBefore(g(),e),n.push(e)):e.data=r[i],a+=i}}else if(8===e.nodeType)if(e.data===l){const t=e.parentNode;null!==e.previousSibling&&s!==i||(s++,t.insertBefore(g(),e)),i=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(l,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=o.pop()}for(const l of n)l.parentNode.removeChild(l)}}const f=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},p=e=>-1!==e.index,g=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class b{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const n of this.__parts)void 0!==n&&n.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r,s=0,a=0,c=o.nextNode();for(;s<n.length;)if(r=n[s],p(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}const y=` ${l} `;class _{constructor(e,t,n,o){this.strings=e,this.values=t,this.type=n,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const i=m.exec(e);t+=null===i?e+(n?y:h):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+l}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const v=e=>null===e||!("object"==typeof e||"function"==typeof e),w=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let o=0;o<n.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let o=0;o<t;o++){n+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(v(e)||!w(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,r(e)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class k{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(g()),this.endNode=e.appendChild(g())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=g()),e.__insert(this.endNode=g())}insertAfterPart(e){e.__insert(this.startNode=g()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}const e=this.__pendingValue;e!==a&&(v(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):w(e)?this.__commitIterable(e):e===c?(this.value=c,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const n=new b(t,e.processor,this.options),o=n._clone();n.update(e.values),this.__commitNode(o),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,o=0;for(const r of e)n=t[o],void 0===n&&(n=new k(this.options),t.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(t[o-1])),n.setValue(r),n.commit(),o++;o<t.length&&(t.length=o,this.clear(n&&n.endNode))}clear(e=this.startNode){s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=a}}class C extends x{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends S{}let T=!1;try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class P{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;r(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=a,e(this)}if(this.__pendingValue===a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=j(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const j=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture),A=new class{handleAttributeExpressions(e,t,n,o){const r=t[0];return"."===r?new C(e,t.slice(1),n).parts:"@"===r?[new P(e,t.slice(1),o.eventContext)]:"?"===r?[new E(e,t.slice(1),n)]:new x(e,t,n).parts}handleTextExpression(e){return new k(e)}};function R(e){let t=N.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},N.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(l);return n=t.keyString.get(o),void 0===n&&(n=new d(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const N=new Map,I=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const D=(e,...t)=>new _(e,t,"html",A);function $(e,t){const{element:{content:n},parts:o}=e,r=document.createTreeWalker(n,133,null,!1);let i=M(o),s=o[i],a=-1,c=0;const l=[];let h=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(l.push(e),null===h&&(h=e)),null!==h&&c++;void 0!==s&&s.index===a;)s.index=null!==h?-1:s.index-c,i=M(o,i),s=o[i]}l.forEach(e=>e.parentNode.removeChild(e))}const F=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},M=(e,t=-1)=>{for(let n=t+1;n<e.length;n++)if(p(e[n]))return n;return-1},L=(e,t)=>`${e}--${t}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const U=e=>t=>{const n=L(t.type,e);let o=N.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},N.set(n,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const i=t.strings.join(l);if(r=o.keyString.get(i),void 0===r){const n=t.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(n,e),r=new d(t,n),o.keyString.set(i,r)}return o.stringsArray.set(t.strings,r),r},V=["html","svg"],H=new Set;window.JSCompiler_renameProperty=(e,t)=>e;const B={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},q=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:q},Q=Promise.resolve(!0);class K extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Q,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const o=this._attributeNameForProperty(n,t);void 0!==o&&(this._attributeToPropertyMap.set(o,n),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const o=this[e];this[n]=t,this._requestUpdate(e,o)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=q){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.converter||B,o="function"==typeof n?n:n.fromAttribute;return o?o(e,t.type):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.converter;return(n&&n.toAttribute||B.toAttribute)(e,t.type)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const o=this.constructor,r=o._attributeNameForProperty(e,n);if(void 0!==r){const e=o._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,o=n._attributeToPropertyMap.get(e);if(void 0!==o){const e=n._classProperties.get(o)||W;this._updateState=16|this._updateState,this[o]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const o=this.constructor,r=o._classProperties.get(e)||W;o._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,o)=>{e=n,t=o});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}K.finalized=!0;const Z=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:o}=t;return{kind:n,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t),G=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}});function Y(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):G(e,t)}const J="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class ee{constructor(e,t){if(t!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(J?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const n=t.reduce((t,n,o)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[o+1],e[0]);return new ee(n,X)};(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");class ne extends K{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];return Array.isArray(e)?(e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let o=0,r=t.length;o<r;o++){const r=t[o];Array.isArray(r)?e(r,n):n.push(r)}return n}(e))(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e)):e&&t.push(e),t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?J?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const o=n.scopeName,r=I.has(t),i=z&&11===t.nodeType&&!!t.host,a=i&&!H.has(o),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let o=I.get(t);void 0===o&&(s(t,t.firstChild),I.set(t,o=new k(Object.assign({templateFactory:R},n))),o.appendInto(t)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:U(o)},n)),a){const e=I.get(c);I.delete(c),((e,t,n)=>{H.add(e);const o=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(o,e);const s=document.createElement("style");for(let l=0;l<i;l++){const e=r[l];e.parentNode.removeChild(e),s.textContent+=e.textContent}(e=>{V.forEach(t=>{const n=N.get(L(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),$(e,n)})})})(e);const a=o.content;n?function(e,t,n=null){const{element:{content:o},parts:r}=e;if(null==n)return void o.appendChild(t);const i=document.createTreeWalker(o,133,null,!1);let s=M(r),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=F(t),n.parentNode.insertBefore(t,n));-1!==s&&r[s].index===c;){if(a>0){for(;-1!==s;)r[s].index+=a,s=M(r,s);return}s=M(r,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),$(n,e)}})(o,c,e.value instanceof b?e.value.template:void 0),s(t,t.firstChild),t.appendChild(c),I.set(t,e)}!r&&i&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=n(0).b`
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
`},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.label="Label",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyBody=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <kor-card>
        <slot
          name="header"
          slot="header"
          @click="${()=>this.expanded=!this.expanded}"
        >
          <div class="header">
            ${this.icon?o.d` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
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
        ${this.expanded?o.d`
              <slot
                name="footer"
                slot="${this.emptyFooter?void 0:"footer"}"
                @slotchange="${e=>this.emptyFooter=0===e.target.assignedNodes().length}"
              ></slot>
            `:""}
      </kor-card>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),setTimeout(()=>this.shadowRoot.querySelector("kor-card").shadowRoot.querySelector(".top").style.padding="0",0)}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"expanded",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyBody",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-accordion")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.mobile?o.d`
            <slot name="left"></slot>
            ${this.label?o.d` <div class="label">${this.label}</div> `:""}
            <slot name="right"></slot>
          `:o.d`
            ${this.logo?o.d` <img class="logo" src="${this.logo}" /> `:""}
            ${this.label?o.d` <div class="label">${this.label}</div> `:""}
            <slot></slot>
            <slot name="functions"></slot>
          `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"logo",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"mobile",void 0),s=i([Object(o.c)("kor-app-bar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <!-- image -->
      <div class="image">
        ${this.image?o.d` <img src="${this.image}" /> `:o.d`
              ${this.label?o.d` ${this.getInitials(this.label)} `:o.d` <kor-icon icon="person"></kor-icon> `}
            `}
      </div>
      <!-- text -->
      ${this.label||this.info?o.d`
            <div class="text">
              ${this.label?o.d`<kor-text size="body-2" class="label"
                    >${this.label}</kor-text
                  >`:""}
              ${this.info?o.d`<kor-text
                    size="body-2"
                    class="info"
                    color="var(--text-2)"
                    >${this.info}</kor-text
                  >`:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}getInitials(e){var t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"info",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"image",void 0),s=i([Object(o.c)("kor-avatar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.status?o.d`
            <!-- status -->
            ${this.status?o.d`
                  <kor-icon
                    class="status-icon"
                    size="s"
                    icon="${this.getStatusIcon()}"
                  ></kor-icon>
                `:""}
          `:o.d`
            ${this.label?o.d`
                  <kor-text size="body-2">
                    ${this.label>999?o.d` 999+ `:o.d` ${this.label} `}
                  </kor-text>
                `:""}
          `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}};i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"status",void 0),s=i([Object(o.c)("kor-badge")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);let i=class extends o.a{static get styles(){return[r.a,o.b`
        :host {
          display: flex;
          width: 100%;
          height: fit-content;
        }
      `]}render(){return o.d` <slot></slot> `}};i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(o.c)("kor-breadcrumbs")],i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.label="Label",this.active=!1}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.firstItem()?"":o.d`
            <kor-icon
              icon="keyboard_arrow_right"
              color="var(--text-2)"
            ></kor-icon>
          `}
      <kor-text>${this.label}</kor-text>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}firstItem(){let e,t;return t=Array.prototype.slice.call(this.parentElement.children),e=0==t.indexOf(this),e}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),s=i([Object(o.c)("kor-breadcrumb-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.label="Label",this.color="primary"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:o.d` <kor-text class="label">${this.label}</kor-text> `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"color",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-button")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.flexDirection="column",this.flat=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.image?o.d` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?o.d`
                <div class="label">
                  ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${this.emptyHeader||!this.label&&!this.icon?"":o.d` <div style="margin-top: 16px"></div> `}
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"image",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-card")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <input
        type="checkbox"
        ?checked="${this.active}"
        ?readonly="${this.disabled}"
        value="${this.label}"
        name="${this.label}"
      />
      <div class="box">
        ${this.active?o.d` <kor-icon icon="check" size="s" color="white"></kor-icon> `:""}
      </div>
      ${this.label?o.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-checkbox")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.spacing="m",this.orientation="horizontal"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d` <div class="line"></div> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"spacing",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(o.c)("kor-divider")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.position="left",this.height="320px",this.width="320px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
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
          ${this.sticky?"":o.d`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}getCardSize(){let e={height:void 0,width:void 0};switch(this.position){case"left":case"right":e.height="100%",e.width=this.width;break;case"top":case"bottom":e.height=this.height,e.width="100%"}return e}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"height",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"width",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-drawer")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.icon?o.d`
            <kor-icon
              icon="${this.icon}"
              size="xl"
              color="var(--text-2)"
            ></kor-icon>
          `:""}
      ${this.label?o.d` <kor-text color="var(--text-2)">${this.label}</kor-text> `:""}
      <slot name="footer"></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),s=i([Object(o.c)("kor-empty-state")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.columns=12,this.spacing="m"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"columns"===e?this.style.gridTemplateColumns=`repeat(${this.columns}, 1fr)`:"rows"===e&&(this.style.gridTemplateRows=`repeat(${this.rows}, 1fr)`)}};i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"columns",void 0),i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"rows",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"spacing",void 0),s=i([Object(o.c)("kor-grid")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d``}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e?this.style.color=this.color:"icon"==e&&n.indexOf("url")>-1&&this.handleIcon(n)}handleIcon(e){this.style.backgroundImage=e}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"color",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-icon")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(),this.type="text",this.step=1,this.addEventListener("click",()=>{this.active=!0,this.shadowRoot.querySelector("input").focus()})}static get styles(){return[r.a,o.b`
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
          position: absolute;
          top: calc(100% + 1px);
          left: 0px;
          width: 100%;
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
      `]}render(){return o.d`
      ${this.icon?o.d` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?o.d` <label class="label">${this.label}</label> `:""}
        <input
          id="input"
          type="${this.type}"
          ?readonly="${this.readonly||this.disabled||"select"===this.type}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          pattern="${this.pattern}"
          .value="${void 0!==this.value?this.value:""}"
          value="${void 0!==this.value?this.value:""}"
          @input=${e=>e.target.value?"number"!==this.type?this.value=e.target.value:"":this.removeAttribute("value")}
          @focus="${()=>this.active=!0}"
          @blur="${e=>this.handleBlur(e)}"
        />
      </div>
      <!-- clear -->
      ${this.disabled||this.readonly||!this.value||this.noClear||"select"===this.type?"":o.d`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${()=>this.handleClear()}"
            ></kor-icon>
          `}
      <!-- status -->
      ${this.status?o.d`
            <kor-icon
              class="status-icon"
              icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${"number"!==this.type||this.readonly?"":o.d`
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
      ${"select"===this.type?o.d`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?o.d`
                  <kor-card class="select-menu">
                    <slot @slotchange="${e=>this.handleItems(e)}"></slot>
                  </kor-card>
                `:""}
          `:""}
    `}handleClear(){this.value=void 0,this.removeAttribute("value")}handleBlur(e){"number"===this.type&&this.validateMinMax(e.target.value),"select"!==this.type&&(this.active=!1)}handleIncrement(e){"left"===e?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)-this.step):"right"===e&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:0)+this.step)}handleItems(e){let t=e.target.assignedNodes();t.forEach(e=>{"KOR-MENU-ITEM"===e.tagName&&e.addEventListener("active-changed",n=>{n.target.active&&(t.forEach(e=>{e.active=!1}),n.target.active=!0,this.value=e.label,this.active=!1)})})}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"active"==e&&this.active&&this.handleMenu()}handleMenu(){let e=this,t=function(n){n.target!==e&&(e.active=!1,document.removeEventListener("click",t))};document.addEventListener("click",t)}validateMinMax(e){e&&(this.value=this.min&&e<this.min?this.min:e>this.max?this.max:e)}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"value",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"type",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"status",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),i([Object(o.e)({type:Boolean,reflect:!0,attribute:"no-clear"})],s.prototype,"noClear",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"pattern",void 0),i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"min",void 0),i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"max",void 0),i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"step",void 0),s=i([Object(o.c)("kor-input")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?o.d` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-menu-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
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
          ${this.sticky?"":o.d`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"visible"===e&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"height",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"width",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-modal")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);let i=class extends o.a{static get styles(){return[r.a,o.b`
        :host {
          z-index: 2;
        }
        kor-app-bar {
          background-color: rgb(var(--base-2));
        }
      `]}render(){return o.d`
      <kor-app-bar>
        <slot></slot>
        <slot name="functions" slot="functions"></slot>
      </kor-app-bar>
    `}};i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(o.c)("kor-nav-bar")],i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.position="top-right"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"position",void 0),s=i([Object(o.c)("kor-notifications")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.flexDirection="column",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
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
          ${this.sticky?"":o.d`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-notification-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.flexDirection="row",this.flat=!1}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <slot name="top"></slot>
      <div class="center-wrapper">
        <slot name="left"></slot>
        <slot></slot>
        <slot name="right"></slot>
      </div>
      <slot name="bottom"></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"theme",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"flat",void 0),s=i([Object(o.c)("kor-page")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.flexDirection="column",this.size="l",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-pane")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target?this.targetObserver():"visible"===e&&this.visible&&this.visibleObserver()}targetObserver(){let e=document.querySelector(this.target);e&&e.addEventListener("click",()=>this.handlePosition(e))}visibleObserver(){let e=document.querySelector(this.target);e&&this.handlePosition(e),!this.sticky&&this.target&&this.addDocListener(e)}handlePosition(e){if(!e)return;let t=this,n=e.getBoundingClientRect();t.visible=!0,t.style.top=t.position.startsWith("bottom")?`${n.top+n.height+8}px`:t.position.startsWith("top")?`${n.top-t.clientHeight-8}px`:`${n.top+n.height/2-t.clientHeight/2}px`,t.style.left=t.position.startsWith("right")?`${n.left+n.width+8}px`:t.position.startsWith("left")?`${n.left-t.clientWidth-8}px`:`${n.left+n.width/2-t.clientWidth/2}px`}addDocListener(e){let t=this,n=function(o){o.target!==e&&(t.visible=!1,document.removeEventListener("click",n))};document.addEventListener("click",n)}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"target",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"sticky",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-popover")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.size="m",this.radial=!1,this.showProgress=!1}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <!-- header -->
      ${this.label||this.showProgress?o.d`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?o.d` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?o.d`
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
              ${this.showProgress?o.d` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:o.d`
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
      ${this.info||this.status?o.d`
            <div class="footer">
              <!-- status -->
              ${this.status?o.d`
                    <kor-icon
                      class="status-icon"
                      icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?o.d`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle"}return e}getSize(){let e;switch(this.size){case"s":e=48;break;case"m":e=64;break;case"l":e=80}return e}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"info",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"status",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"color",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"value",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"radial",void 0),i([Object(o.e)({type:Boolean,reflect:!0,attribute:"show-progress"})],s.prototype,"showProgress",void 0),s=i([Object(o.c)("kor-progress-bar")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <input
        type="radio"
        ?checked="${this.active}"
        value="${this.label}"
        name="${this.label}"
      />
      <div class="circle"></div>
      ${this.label?o.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-radio-button")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.size="m"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
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
      ${this.label?o.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}getSize(){let e;switch(this.size){case"s":e=24;break;case"m":e=32;break;case"l":e=40}return e}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),s=i([Object(o.c)("kor-spinner")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <slot
        @slotchange="${()=>{this.handleOrientation(),this.handleItems()}}"
      ></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}handleItems(){let e,t;e=Array.prototype.slice.call(this.children),t=this.children.length,e.forEach(e=>{e.first=1==e.index,e.last=e.index==t})}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(o.c)("kor-stepper")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <!-- circle -->
      <div class="circle">
        ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:o.d`
              <kor-text size="header-1" class="number">${this.index}</kor-text>
            `}
      </div>
      <!-- text -->
      <div class="text">
        ${this.label?o.d` <kor-text class="label">${this.label}</kor-text> `:""}
        ${this.info?o.d` <kor-text size="body-2" class="info">${this.info}</kor-text> `:""}
      </div>
      <!-- lines -->
      ${this.first?"":o.d` <div class="line before"></div> `}
      ${this.last?"":o.d` <div class="line after"></div> `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.getIndex(),this.addEventListener("click",()=>{this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0})}getIndex(){let e;e=Array.prototype.slice.call(this.parentElement.children),this.index=e.indexOf(this)+1}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"info",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:Number,reflect:!0})],s.prototype,"index",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"first",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"last",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(o.c)("kor-stepper-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),r=n(1);let i=class extends o.a{static get styles(){return[r.a,o.b`
        :host {
          background-color: rgba(var(--neutral-1), 0.1);
          display: flex;
          width: fit-content;
          height: fit-content;
          border-radius: 4px;
        }
      `]}render(){return o.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}([Object(o.c)("kor-switch")],i)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label&&!this.icon?o.d` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-switch-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?o.d` <kor-text class="label">${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive())}handleActive(){this.parentElement.childNodes.forEach(e=>{e.active=!1}),this.active=!0}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(o.c)("kor-tab-item")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.columns="repeat(24, 1fr)"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <slot name="header"></slot>
      <slot></slot>
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"readonly",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"condensed",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"columns",void 0),s=i([Object(o.c)("kor-table")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.orientation="horizontal"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <slot @slotchange="${()=>this.handleOrientation()}"></slot>
    `}handleOrientation(){this.childNodes.forEach(e=>{e.orientation=this.orientation})}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"orientation",void 0),s=i([Object(o.c)("kor-tabs")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.label="Label"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <!-- icon -->
      ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      <!-- label -->
      ${this.label?o.d` <kor-text class="label">${this.label}</kor-text> `:""}
      <!-- removable -->
      ${this.removable?o.d`
            <kor-icon
              icon="close"
              button
              @click="${()=>this.handleRemove()}"
            ></kor-icon>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}handleRemove(){this.dispatchEvent(new Event("remove"))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"removable",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"button",void 0),s=i([Object(o.c)("kor-tag")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"color"==e&&(this.style.color=this.color)}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"color",void 0),s=i([Object(o.c)("kor-text")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
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
      ${this.label?o.d` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-toggle")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.size="m",this.disabled=!1}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      ${this.icon?o.d` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${!this.label||this.icon&&"s"==this.size?"":o.d` <kor-text class="label" size="body-2">${this.label}</kor-text> `}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"toggle"==e&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"size",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"toggle",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"disabled",void 0),s=i([Object(o.c)("kor-tool")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.flexDirection="column",this.position="bottom",this.visible=!1,this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[r.a,o.b`
        :host {
          position: fixed;
          z-index: 4;
        }
      `]}render(){return o.d`
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
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"target"===e&&this.target&&this.targetObserver()}targetObserver(){let e,t=document.querySelector(this.target);t&&(t.addEventListener("mouseover",()=>{e=setTimeout(()=>this.visible=!0,500)}),t.addEventListener("mouseout",()=>{this.visible=!1,clearTimeout(e)}))}};i([Object(o.e)({type:String,reflect:!0})],s.prototype,"label",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"icon",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"flex-direction"})],s.prototype,"flexDirection",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"position",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"target",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"visible",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyHeader",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFunctions",void 0),i([Object(o.e)({type:Boolean})],s.prototype,"emptyFooter",void 0),s=i([Object(o.c)("kor-tooltip")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d` <slot></slot> `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>this.handleActive()),this.handleColumns()}handleActive(){let e,t;e=this.closest("kor-table"),e.readonly||"header"==this.slot||(t=this.parentElement.childNodes,t.forEach(e=>{e.active=!1}),this.active=!0)}handleColumns(){let e=this.closest("kor-table");this.style.gridTemplateColumns=e.columns,e.addEventListener("columns-changed",()=>{this.style.gridTemplateColumns=e.columns})}};i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"active",void 0),s=i([Object(o.c)("kor-table-row")],s)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n(1),i=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class extends o.a{constructor(){super(...arguments),this.alignment="left"}static get styles(){return[r.a,o.b`
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
      `]}render(){return o.d`
      <kor-text>
        <slot></slot>
      </kor-text>
      ${this.head&&this.sorted?o.d`
            <kor-icon size="s" icon="arrow_downward" class="sort"></kor-icon>
          `:""}
    `}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),this.dispatchEvent(new Event(`${e}-changed`)),"grid-cols"==e&&(this.style.gridColumn=`span ${this.gridCols}`),"sortable"==e&&this.sortable&&(this.sortDirection||(this.sortDirection="asc"),this.addEventListener("click",()=>{this.handleSort()}))}handleSort(){this.sorted?this.sortDirection="asc"==this.sortDirection?"desc":"asc":(this.parentElement.childNodes.forEach(e=>{e.sorted=!1}),this.sorted=!0,this.sortDirection="asc")}};i([Object(o.e)({type:Number,reflect:!0,attribute:"grid-cols"})],s.prototype,"gridCols",void 0),i([Object(o.e)({type:String,reflect:!0})],s.prototype,"alignment",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"head",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"sorted",void 0),i([Object(o.e)({type:Boolean,reflect:!0})],s.prototype,"sortable",void 0),i([Object(o.e)({type:String,reflect:!0,attribute:"sort-direction"})],s.prototype,"sortDirection",void 0),s=i([Object(o.c)("kor-table-cell")],s)},function(e,t,n){"use strict";n.r(t);var o=n(2);n.d(t,"korAccordion",(function(){return o.a}));var r=n(3);n.d(t,"korAppBar",(function(){return r.a}));var i=n(4);n.d(t,"korAvatar",(function(){return i.a}));var s=n(5);n.d(t,"korBadge",(function(){return s.a}));var a=n(6);n.d(t,"korBreadcrumbs",(function(){return a.a}));var c=n(7);n.d(t,"korBreadcrumbItem",(function(){return c.a}));var l=n(8);n.d(t,"korButton",(function(){return l.a}));var h=n(9);n.d(t,"korCard",(function(){return h.a}));var u=n(10);n.d(t,"korCheckbox",(function(){return u.a}));var d=n(11);n.d(t,"korDivider",(function(){return d.a}));var f=n(12);n.d(t,"korDrawer",(function(){return f.a}));var p=n(13);n.d(t,"korEmptyState",(function(){return p.a}));var g=n(14);n.d(t,"korGrid",(function(){return g.a}));var m=n(15);n.d(t,"korIcon",(function(){return m.a}));var b=n(16);n.d(t,"korInput",(function(){return b.a}));var y=n(17);n.d(t,"korMenuItem",(function(){return y.a}));var _=n(18);n.d(t,"korModal",(function(){return _.a}));var v=n(19);n.d(t,"korNavbar",(function(){return v.a}));var w=n(20);n.d(t,"korNotifications",(function(){return w.a}));var x=n(21);n.d(t,"korNotificationItem",(function(){return x.a}));var S=n(22);n.d(t,"korPage",(function(){return S.a}));var k=n(23);n.d(t,"korPane",(function(){return k.a}));var E=n(24);n.d(t,"korPopover",(function(){return E.a}));var C=n(25);n.d(t,"korProgressBar",(function(){return C.a}));var O=n(26);n.d(t,"korRadioButton",(function(){return O.a}));var T=n(27);n.d(t,"korSpinner",(function(){return T.a}));var P=n(28);n.d(t,"korStepper",(function(){return P.a}));var j=n(29);n.d(t,"korStepperItem",(function(){return j.a}));var A=n(30);n.d(t,"korSwitch",(function(){return A.a}));var R=n(31);n.d(t,"korSwitchItem",(function(){return R.a}));var N=n(32);n.d(t,"korTabItem",(function(){return N.a}));var I=n(33);n.d(t,"korTable",(function(){return I.a}));var D=n(40);n.d(t,"korTableRow",(function(){return D.a}));var $=n(41);n.d(t,"korTableCell",(function(){return $.a}));var F=n(34);n.d(t,"korTabs",(function(){return F.a}));var M=n(35);n.d(t,"korTag",(function(){return M.a}));var L=n(36);n.d(t,"korText",(function(){return L.a}));var z=n(37);n.d(t,"korToggle",(function(){return z.a}));var U=n(38);n.d(t,"korTool",(function(){return U.a}));var V=n(39);n.d(t,"korTooltip",(function(){return V.a}))}])},"3/dt":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class o{}t.DontCodeModel=o,o.ROOT="creation",o.APP_NAME_NODE="name",o.APP_TYPE_NODE="type",o.APP_TYPE=o.ROOT+"/"+o.APP_TYPE_NODE,o.APP_NAME=o.ROOT+"/"+o.APP_NAME_NODE,o.APP_ENTITIES_NODE="entities",o.APP_ENTITIES=o.ROOT+"/"+o.APP_ENTITIES_NODE,o.APP_ENTITIES_NAME_NODE="name",o.APP_ENTITIES_NAME=o.APP_ENTITIES+"/"+o.APP_ENTITIES_NAME_NODE,o.APP_FIELDS_NODE="fields",o.APP_FIELDS=o.APP_ENTITIES+"/"+o.APP_FIELDS_NODE,o.APP_FIELDS_NAME_NODE="name",o.APP_FIELDS_NAME=o.APP_FIELDS+"/"+o.APP_FIELDS_NAME_NODE,o.APP_FIELDS_TYPE_NODE="type",o.APP_FIELDS_TYPE=o.APP_FIELDS+"/"+o.APP_FIELDS_TYPE_NODE,o.APP_SCREENS_NODE="screens",o.APP_SCREENS=o.ROOT+"/"+o.APP_SCREENS_NODE,o.APP_SCREENS_NAME_NODE="name",o.APP_SCREENS_NAME=o.APP_SCREENS+"/"+o.APP_SCREENS_NAME_NODE,o.APP_SCREENS_LAYOUT_NODE="layout",o.APP_SCREENS_LAYOUT=o.APP_SCREENS+"/"+o.APP_SCREENS_LAYOUT_NODE,o.APP_COMPONENTS_NODE="components",o.APP_COMPONENTS=o.APP_SCREENS+"/"+o.APP_COMPONENTS_NODE,o.APP_COMPONENTS_TYPE_NODE="type",o.APP_COMPONENTS_TYPE=o.APP_COMPONENTS+"/"+o.APP_COMPONENTS_TYPE_NODE,o.APP_COMPONENTS_ENTITY_NODE="entity",o.APP_COMPONENTS_ENTITY=o.APP_COMPONENTS+"/"+o.APP_COMPONENTS_ENTITY_NODE},AEcS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("D57K");o.__exportStar(n("YIYF"),t),o.__exportStar(n("o8N5"),t),o.__exportStar(n("3/dt"),t),o.__exportStar(n("umRR"),t),o.__exportStar(n("uq2N"),t),o.__exportStar(n("ZtqZ"),t),o.__exportStar(n("WzK3"),t),o.__exportStar(n("a/xz"),t)},D57K:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return r})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return s})),n.d(t,"__decorate",(function(){return a})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return h})),n.d(t,"__generator",(function(){return u})),n.d(t,"__exportStar",(function(){return d})),n.d(t,"__values",(function(){return f})),n.d(t,"__read",(function(){return p})),n.d(t,"__spread",(function(){return g})),n.d(t,"__spreadArrays",(function(){return m})),n.d(t,"__await",(function(){return b})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return _})),n.d(t,"__asyncValues",(function(){return v})),n.d(t,"__makeTemplateObject",(function(){return w})),n.d(t,"__importStar",(function(){return x})),n.d(t,"__importDefault",(function(){return S})),n.d(t,"__classPrivateFieldGet",(function(){return k})),n.d(t,"__classPrivateFieldSet",(function(){return E}));var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}function a(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,o){t(n,o,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function h(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(t){i(t)}}function a(e){try{c(o.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))}function u(e,t){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function d(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(a){r={error:a}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function m(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,r++)o[r]=i[s];return o}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(e){r[e]&&(o[e]=function(t){return new Promise((function(n,o){i.push([e,t,n,o])>1||a(e,t)}))})}function a(e,t){try{(n=r[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,l):h(i[0][2],n)}catch(o){h(i[0][3],o)}var n}function c(e){a("next",e)}function l(e){a("throw",e)}function h(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function _(e){var t,n;return t={},o("next"),o("throw",(function(e){throw e})),o("return"),t[Symbol.iterator]=function(){return this},t;function o(o,r){t[o]=e[o]?function(t){return(n=!n)?{value:b(e[o](t)),done:"return"===o}:r?r(t):t}:r}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=f(e),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise((function(o,r){!function(e,t,n,o){Promise.resolve(o).then((function(t){e({value:t,done:n})}),t)}(o,r,(t=e[n](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function S(e){return e&&e.__esModule?e:{default:e}}function k(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function E(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},WzK3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DontCodePluginManager=class{constructor(){this.plugins=new Map}registerPlugin(e,t){const n=e.getConfiguration();this.plugins.set(n.plugin.id+"-v"+n.plugin.version,e),t.registerChanges(n)}}},YIYF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("ZtqZ"),r=n("WzK3");t.DontCodeCore=class{constructor(){this.schemaManager=new o.DontCodeSchemaManager,this.pluginManager=new r.DontCodePluginManager}registerPlugin(e){this.pluginManager.registerPlugin(e,this.schemaManager)}getSchemaUri(){return"schemas/v1/dont-code-schema.json"}getSchemaManager(){return this.schemaManager}}},ZtqZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("uq2N"),r=n("umRR");t.DontCodeSchemaManager=class{constructor(){this.readSchema=r.DontCodeSchema.defaultv1,this.currentSchema=this.convertSchemaToMap(this.readSchema)}getSchema(){return this.currentSchema}convertSchemaToMap(e){return new o.DontCodeSchemaRoot(e)}registerChanges(e){e["schema-updates"]&&e["schema-updates"].forEach(e=>{e.changes.forEach(e=>{const t=this.locateItem(e.location.parent);if(!t)throw"Cannot find parent element: "+e.location.parent;t.upsertWith(e)})})}locateItem(e){const t=e.split("/");var n=this.currentSchema;return t.forEach(t=>{if(!n)return console.error("Could not find subItem "+t+" of "+e),n;t&&t.length>0&&"#"!==t&&(n=n.getChild(t))}),n}}},"a/xz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("YIYF");(t.DontCode||(t.DontCode={})).dtcde=new o.DontCodeCore},o8N5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Change=class{constructor(e,t,n){this.type=e,this.position=t,this.value=n}},t.ChangeType=function(e){return e.ADD="ADD",e.UPDATE="UPDATE",e.DELETE="DELETE",e.RESET="RESET",e}(t.ChangeType||{})},umRR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n("3/dt");class r{}t.DontCodeSchema=r,r.ROOT="/properties/"+o.DontCodeModel.ROOT,r.defaultv1={$id:"http://dont-code.net/dont-code-schema/v1",$schema:"http://json-schema.org/draft-07/schema#",description:"JSON Schema v1 for dont-code",type:"object",required:["creation"],properties:{creation:{type:"object",properties:{type:{enum:["application"]},name:{type:"string"},entities:{type:"array",items:{$ref:"#/definitions/entity"}},screens:{type:"array",items:{$ref:"#/definitions/screen"}}},additionalProperties:!1}},definitions:{entity:{type:"object",properties:{name:{type:"string"},fields:{type:"array",items:{$ref:"#/definitions/field"}}},additionalProperties:!1},field:{type:"object",properties:{name:{type:"string"},type:{enum:["string","number","boolean"]}},additionalProperties:!1},screen:{type:"object",properties:{name:{type:"string"},layout:{enum:["flow","grid"]},components:{type:"array",items:{$ref:"#/definitions/component"}}},additionalProperties:!1},component:{type:"object",properties:{type:{enum:["list","edit","view"]},entity:{type:"string",format:"#/creation/entities"}},additionalProperties:!1}}}},uq2N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class o{constructor(e,t){this.array=!1,this.parent=e,this.relativeId=t}isArray(){return this.array}setArray(e){this.array=e}isEnum(){return!1}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}static generateItem(e,t,n){let o,c=Array.isArray(e);if(c)return console.error("arrays are not supported",e),e;if(c=!1,e.type)switch(e.type){case"object":o=new r(e,t,n);break;case"array":o=this.generateItem(e.items,t,n),c=!0;break;default:o=new s(e,t,n)}else if(e.enum)o=new i(e,t,n);else{if(!e.$ref)return e;o=new a(e,t,n)}return o.setArray(c),o}static isObject(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}static goto(e,t){let n=e;return t.split("/").forEach(o=>{"#"!==o&&""!=o&&(n=n.getChild(o)),n||console.error("Cannot find "+o+" of "+t+" in the following item ",e)}),n}upsertWith(e){return!1}getParent(){return this.parent}getChild(e){}getChildren(){return(new Map).entries()}updateWith(e){}getProperties(e){}hasProperties(e){return!1}getRelativeId(){return this.relativeId}setRelativeId(e){this.relativeId=e}}t.AbstractSchemaItem=o;class r extends o{constructor(e,t,n){super(n,t),this.children=new Map,e&&this.readJson(e)}readJson(e){const t=e.properties;if(t)for(var n in t)this.children.set(n,o.generateItem(t[n],n,this));const r=e.definitions;if(r){const e=o.generateItem(r,"definitions",this);this.children.set("definitions",e)}}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!1}upsertWith(e){let t=this.getChild(e.location.id);if(!t)if(t=o.generateItem(e.add,e.location.id,this),e.location.after){let n=new Map;this.children.forEach((o,r)=>{n.set(r,o),r===e.location.after&&n.set(e.location.id,t)}),this.children=n}else this.children.set(e.location.id,t);return t.updateWith(e),!0}updateWith(e){super.updateWith(e)}getChild(e){return e?this.children.get(e):void 0}getChildren(){return this.children.entries()}}t.DontCodeSchemaObject=r,t.DontCodeSchemaRoot=class extends r{constructor(e){super(e,null)}readJson(e){super.readJson(e);const t=e.definitions;t&&this.children.set("definitions",new r({properties:t},"definitions",this))}isEnum(){return!1}isObject(){return!0}isReference(){return!1}isValue(){return!1}isRoot(){return!0}};class i extends o{constructor(e,t,n){super(n,t),this.values=new Array,this.properties=new Map,this.values.push(...e.enum)}isEnum(){return!0}isObject(){return!1}isReference(){return!1}isValue(){return!1}isRoot(){return!1}getValues(){return this.values}updateWith(e){super.updateWith(e),e.add.enum.forEach(t=>{if(-1==this.values.indexOf(t)&&this.values.push(t),e.props){const n=new c(e,this.relativeId+"="+t,this);n.isEmpty()||this.properties.set(t,n)}})}getProperties(e){return this.properties.get(e)}hasProperties(e){return this.properties.has(e)}}t.DontCodeSchemaEnum=i;class s extends o{constructor(e,t,n){super(n,t),this.type=e.type}isValue(){return!0}getType(){return this.type}}t.DontCodeSchemaValue=s;class a extends o{constructor(e,t,n){super(n,t),this.resolvedRef=new Map,this.ref=e.$ref}isReference(){return!0}getReference(){return this.ref}resolveReference(e){this.resolvedRef.set("",e)}getChildren(){return this.resolvedRef.entries()}}t.DontCodeSchemaRef=a;class c extends r{constructor(e,t,n){super({type:"object",properties:e.props},t,n),this.replace=e.replace,this.posAfter=e.location.after}isEmpty(){return 0==this.children.size}isReplace(){return this.replace}getPosAfter(){return this.posAfter}}t.DontCodeSchemaProperty=c},zUnb:function(e,t,n){"use strict";function o(e){return"function"==typeof e}n.r(t);let r=!1;const i={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){const e=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+e.stack)}else r&&console.log("RxJS: Back to a better error behavior. Thank you. <3");r=e},get useDeprecatedSynchronousErrorHandling(){return r}};function s(e){setTimeout(()=>{throw e},0)}const a={closed:!0,next(e){},error(e){if(i.useDeprecatedSynchronousErrorHandling)throw e;s(e)},complete(){}},c=(()=>Array.isArray||(e=>e&&"number"==typeof e.length))();function l(e){return null!==e&&"object"==typeof e}const h=(()=>{function e(e){return Error.call(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((e,t)=>`${t+1}) ${e.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e})();let u=(()=>{class e{constructor(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._unsubscribe=e)}unsubscribe(){let t;if(this.closed)return;let{_parentOrParents:n,_unsubscribe:r,_subscriptions:i}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(let e=0;e<n.length;++e)n[e].remove(this);if(o(r))try{r.call(this)}catch(s){t=s instanceof h?d(s.errors):[s]}if(c(i)){let e=-1,n=i.length;for(;++e<n;){const n=i[e];if(l(n))try{n.unsubscribe()}catch(s){t=t||[],s instanceof h?t=t.concat(d(s.errors)):t.push(s)}}}if(t)throw new h(t)}add(t){let n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){const t=n;n=new e,n._subscriptions=[t]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}let{_parentOrParents:o}=n;if(null===o)n._parentOrParents=this;else if(o instanceof e){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}const r=this._subscriptions;return null===r?this._subscriptions=[n]:r.push(n),n}remove(e){const t=this._subscriptions;if(t){const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}}return e.EMPTY=function(e){return e.closed=!0,e}(new e),e})();function d(e){return e.reduce((e,t)=>e.concat(t instanceof h?t.errors:t),[])}const f=(()=>"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random())();class p extends u{constructor(e,t,n){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=a;break;case 1:if(!e){this.destination=a;break}if("object"==typeof e){e instanceof p?(this.syncErrorThrowable=e.syncErrorThrowable,this.destination=e,e.add(this)):(this.syncErrorThrowable=!0,this.destination=new g(this,e));break}default:this.syncErrorThrowable=!0,this.destination=new g(this,e,t,n)}}[f](){return this}static create(e,t,n){const o=new p(e,t,n);return o.syncErrorThrowable=!1,o}next(e){this.isStopped||this._next(e)}error(e){this.isStopped||(this.isStopped=!0,this._error(e))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(e){this.destination.next(e)}_error(e){this.destination.error(e),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:e}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}class g extends p{constructor(e,t,n,r){let i;super(),this._parentSubscriber=e;let s=this;o(t)?i=t:t&&(i=t.next,n=t.error,r=t.complete,t!==a&&(s=Object.create(t),o(s.unsubscribe)&&this.add(s.unsubscribe.bind(s)),s.unsubscribe=this.unsubscribe.bind(this))),this._context=s,this._next=i,this._error=n,this._complete=r}next(e){if(!this.isStopped&&this._next){const{_parentSubscriber:t}=this;i.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}error(e){if(!this.isStopped){const{_parentSubscriber:t}=this,{useDeprecatedSynchronousErrorHandling:n}=i;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):s(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;s(e)}}}complete(){if(!this.isStopped){const{_parentSubscriber:e}=this;if(this._complete){const t=()=>this._complete.call(this._context);i.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,t),this.unsubscribe()):(this.__tryOrUnsub(t),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(e,t){try{e.call(this._context,t)}catch(n){if(this.unsubscribe(),i.useDeprecatedSynchronousErrorHandling)throw n;s(n)}}__tryOrSetError(e,t,n){if(!i.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(o){return i.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=o,e.syncErrorThrown=!0,!0):(s(o),!0)}return!1}_unsubscribe(){const{_parentSubscriber:e}=this;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}const m=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")();function b(){}function y(...e){return _(e)}function _(e){return e?1===e.length?e[0]:function(t){return e.reduce((e,t)=>t(e),t)}:b}let v=(()=>{class e{constructor(e){this._isScalar=!1,e&&(this._subscribe=e)}lift(t){const n=new e;return n.source=this,n.operator=t,n}subscribe(e,t,n){const{operator:o}=this,r=function(e,t,n){if(e){if(e instanceof p)return e;if(e[f])return e[f]()}return e||t||n?new p(e,t,n):new p(a)}(e,t,n);if(r.add(o?o.call(r,this.source):this.source||i.useDeprecatedSynchronousErrorHandling&&!r.syncErrorThrowable?this._subscribe(r):this._trySubscribe(r)),i.useDeprecatedSynchronousErrorHandling&&r.syncErrorThrowable&&(r.syncErrorThrowable=!1,r.syncErrorThrown))throw r.syncErrorValue;return r}_trySubscribe(e){try{return this._subscribe(e)}catch(t){i.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){const{closed:t,destination:n,isStopped:o}=e;if(t||o)return!1;e=n&&n instanceof p?n:null}return!0}(e)?e.error(t):console.warn(t)}}forEach(e,t){return new(t=w(t))((t,n)=>{let o;o=this.subscribe(t=>{try{e(t)}catch(r){n(r),o&&o.unsubscribe()}},n,t)})}_subscribe(e){const{source:t}=this;return t&&t.subscribe(e)}[m](){return this}pipe(...e){return 0===e.length?this:_(e)(this)}toPromise(e){return new(e=w(e))((e,t)=>{let n;this.subscribe(e=>n=e,e=>t(e),()=>e(n))})}}return e.create=t=>new e(t),e})();function w(e){if(e||(e=i.Promise||Promise),!e)throw new Error("no Promise impl found");return e}const x=(()=>{function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e})();class S extends u{constructor(e,t){super(),this.subject=e,this.subscriber=t,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const e=this.subject,t=e.observers;if(this.subject=null,!t||0===t.length||e.isStopped||e.closed)return;const n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}class k extends p{constructor(e){super(e),this.destination=e}}let E=(()=>{class e extends v{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[f](){return new k(this)}lift(e){const t=new C(this,this);return t.operator=e,t}next(e){if(this.closed)throw new x;if(!this.isStopped){const{observers:t}=this,n=t.length,o=t.slice();for(let r=0;r<n;r++)o[r].next(e)}}error(e){if(this.closed)throw new x;this.hasError=!0,this.thrownError=e,this.isStopped=!0;const{observers:t}=this,n=t.length,o=t.slice();for(let r=0;r<n;r++)o[r].error(e);this.observers.length=0}complete(){if(this.closed)throw new x;this.isStopped=!0;const{observers:e}=this,t=e.length,n=e.slice();for(let o=0;o<t;o++)n[o].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(e){if(this.closed)throw new x;return super._trySubscribe(e)}_subscribe(e){if(this.closed)throw new x;return this.hasError?(e.error(this.thrownError),u.EMPTY):this.isStopped?(e.complete(),u.EMPTY):(this.observers.push(e),new S(this,e))}asObservable(){const e=new v;return e.source=this,e}}return e.create=(e,t)=>new C(e,t),e})();class C extends E{constructor(e,t){super(),this.destination=e,this.source=t}next(e){const{destination:t}=this;t&&t.next&&t.next(e)}error(e){const{destination:t}=this;t&&t.error&&this.destination.error(e)}complete(){const{destination:e}=this;e&&e.complete&&this.destination.complete()}_subscribe(e){const{source:t}=this;return t?this.source.subscribe(e):u.EMPTY}}function O(e){return e&&"function"==typeof e.schedule}class T extends p{constructor(e,t,n){super(),this.parent=e,this.outerValue=t,this.outerIndex=n,this.index=0}_next(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}_error(e){this.parent.notifyError(e,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}const P=e=>t=>{for(let n=0,o=e.length;n<o&&!t.closed;n++)t.next(e[n]);t.complete()};function j(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}const A=j(),R=e=>e&&"number"==typeof e.length&&"function"!=typeof e;function N(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}const I=e=>{if(e&&"function"==typeof e[m])return o=e,e=>{const t=o[m]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(R(e))return P(e);if(N(e))return n=e,e=>(n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,s),e);if(e&&"function"==typeof e[A])return t=e,e=>{const n=t[A]();for(;;){const t=n.next();if(t.done){e.complete();break}if(e.next(t.value),e.closed)break}return"function"==typeof n.return&&e.add(()=>{n.return&&n.return()}),e};{const t=l(e)?"an invalid object":`'${e}'`;throw new TypeError(`You provided ${t} where a stream was expected.`+" You can provide an Observable, Promise, Array, or Iterable.")}var t,n,o};function D(e,t,n,o,r=new T(e,n,o)){if(!r.closed)return t instanceof v?t.subscribe(r):I(t)(r)}class $ extends p{notifyNext(e,t,n,o,r){this.destination.next(t)}notifyError(e,t){this.destination.error(e)}notifyComplete(e){this.destination.complete()}}function F(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new M(e,t))}}class M{constructor(e,t){this.project=e,this.thisArg=t}call(e,t){return t.subscribe(new L(e,this.project,this.thisArg))}}class L extends p{constructor(e,t,n){super(e),this.project=t,this.count=0,this.thisArg=n||this}_next(e){let t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}function z(e,t){return new v(n=>{const o=new u;let r=0;return o.add(t.schedule((function(){r!==e.length?(n.next(e[r++]),n.closed||o.add(this.schedule())):n.complete()}))),o})}function U(e,t){return t?function(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[m]}(e))return function(e,t){return new v(n=>{const o=new u;return o.add(t.schedule(()=>{const r=e[m]();o.add(r.subscribe({next(e){o.add(t.schedule(()=>n.next(e)))},error(e){o.add(t.schedule(()=>n.error(e)))},complete(){o.add(t.schedule(()=>n.complete()))}}))})),o})}(e,t);if(N(e))return function(e,t){return new v(n=>{const o=new u;return o.add(t.schedule(()=>e.then(e=>{o.add(t.schedule(()=>{n.next(e),o.add(t.schedule(()=>n.complete()))}))},e=>{o.add(t.schedule(()=>n.error(e)))}))),o})}(e,t);if(R(e))return z(e,t);if(function(e){return e&&"function"==typeof e[A]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new v(n=>{const o=new u;let r;return o.add(()=>{r&&"function"==typeof r.return&&r.return()}),o.add(t.schedule(()=>{r=e[A](),o.add(t.schedule((function(){if(n.closed)return;let e,t;try{const n=r.next();e=n.value,t=n.done}catch(o){return void n.error(o)}t?n.complete():(n.next(e),this.schedule())})))})),o})}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}(e,t):e instanceof v?e:new v(I(e))}function V(e,t,n=Number.POSITIVE_INFINITY){return"function"==typeof t?o=>o.pipe(V((n,o)=>U(e(n,o)).pipe(F((e,r)=>t(n,e,o,r))),n)):("number"==typeof t&&(n=t),t=>t.lift(new H(e,n)))}class H{constructor(e,t=Number.POSITIVE_INFINITY){this.project=e,this.concurrent=t}call(e,t){return t.subscribe(new B(e,this.project,this.concurrent))}}class B extends ${constructor(e,t,n=Number.POSITIVE_INFINITY){super(e),this.project=t,this.concurrent=n,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)}_tryNext(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(o){return void this.destination.error(o)}this.active++,this._innerSub(t,e,n)}_innerSub(e,t,n){const o=new T(this,t,n),r=this.destination;r.add(o);const i=D(this,e,void 0,void 0,o);i!==o&&r.add(i)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(e,t,n,o,r){this.destination.next(t)}notifyComplete(e){const t=this.buffer;this.remove(e),this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}function q(e){return e}function W(e=Number.POSITIVE_INFINITY){return V(q,e)}function Q(e,t){return t?z(e,t):new v(P(e))}function K(){return function(e){return e.lift(new Z(e))}}class Z{constructor(e){this.connectable=e}call(e,t){const{connectable:n}=this;n._refCount++;const o=new G(e,n),r=t.subscribe(o);return o.closed||(o.connection=n.connect()),r}}class G extends p{constructor(e,t){super(e),this.connectable=t}_unsubscribe(){const{connectable:e}=this;if(!e)return void(this.connection=null);this.connectable=null;const t=e._refCount;if(t<=0)return void(this.connection=null);if(e._refCount=t-1,t>1)return void(this.connection=null);const{connection:n}=this,o=e._connection;this.connection=null,!o||n&&o!==n||o.unsubscribe()}}class Y extends v{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._refCount=0,this._isComplete=!1}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){const e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject}connect(){let e=this._connection;return e||(this._isComplete=!1,e=this._connection=new u,e.add(this.source.subscribe(new X(this.getSubject(),this))),e.closed&&(this._connection=null,e=u.EMPTY)),e}refCount(){return K()(this)}}const J=(()=>{const e=Y.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}})();class X extends k{constructor(e,t){super(e),this.connectable=t}_error(e){this._unsubscribe(),super._error(e)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const e=this.connectable;if(e){this.connectable=null;const t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}}}function ee(){return new E}function te(e){return{toString:e}.toString()}function ne(e,t,n){return te(()=>{const o=function(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}(t);function r(...e){if(this instanceof r)return o.apply(this,e),this;const t=new r(...e);return n.annotation=t,n;function n(e,n,o){const r=e.hasOwnProperty("__parameters__")?e.__parameters__:Object.defineProperty(e,"__parameters__",{value:[]}).__parameters__;for(;r.length<=o;)r.push(null);return(r[o]=r[o]||[]).push(t),e}}return n&&(r.prototype=Object.create(n.prototype)),r.prototype.ngMetadataName=e,r.annotationCls=r,r})}const oe=ne("Inject",e=>({token:e})),re=ne("Optional"),ie=ne("Self"),se=ne("SkipSelf");var ae=function(e){return e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional",e}({});function ce(e){for(let t in e)if(e[t]===ce)return t;throw Error("Could not find renamed property on target object.")}function le(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function he(e){return{factory:e.factory,providers:e.providers||[],imports:e.imports||[]}}function ue(e){return de(e,e[pe])||de(e,e[be])}function de(e,t){return t&&t.token===e?t:null}function fe(e){return e&&(e.hasOwnProperty(ge)||e.hasOwnProperty(ye))?e[ge]:null}const pe=ce({"\u0275prov":ce}),ge=ce({"\u0275inj":ce}),me=ce({"\u0275provFallback":ce}),be=ce({ngInjectableDef:ce}),ye=ce({ngInjectorDef:ce});function _e(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(_e).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function ve(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}const we=ce({__forward_ref__:ce});function xe(e){return e.__forward_ref__=xe,e.toString=function(){return _e(this())},e}function Se(e){return"function"==typeof(t=e)&&t.hasOwnProperty(we)&&t.__forward_ref__===xe?e():e;var t}const ke="undefined"!=typeof globalThis&&globalThis,Ee="undefined"!=typeof window&&window,Ce="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,Oe="undefined"!=typeof global&&global,Te=ke||Oe||Ee||Ce,Pe=ce({"\u0275cmp":ce}),je=ce({"\u0275dir":ce}),Ae=ce({"\u0275pipe":ce}),Re=ce({"\u0275mod":ce}),Ne=ce({"\u0275loc":ce}),Ie=ce({"\u0275fac":ce}),De=ce({__NG_ELEMENT_ID__:ce});class $e{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof t?this.__NG_ELEMENT_ID__=t:void 0!==t&&(this.\u0275prov=le({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return`InjectionToken ${this._desc}`}}const Fe=new $e("INJECTOR",-1),Me={},Le=/\n/gm,ze=ce({provide:String,useValue:ce});let Ue,Ve=void 0;function He(e){const t=Ve;return Ve=e,t}function Be(e){const t=Ue;return Ue=e,t}function qe(e,t=ae.Default){if(void 0===Ve)throw new Error("inject() must be called from an injection context");return null===Ve?Qe(e,void 0,t):Ve.get(e,t&ae.Optional?null:void 0,t)}function We(e,t=ae.Default){return(Ue||qe)(Se(e),t)}function Qe(e,t,n){const o=ue(e);if(o&&"root"==o.providedIn)return void 0===o.value?o.value=o.factory():o.value;if(n&ae.Optional)return null;if(void 0!==t)return t;throw new Error(`Injector: NOT_FOUND [${_e(e)}]`)}function Ke(e){const t=[];for(let n=0;n<e.length;n++){const o=Se(e[n]);if(Array.isArray(o)){if(0===o.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=ae.Default;for(let t=0;t<o.length;t++){const r=o[t];r instanceof re||"Optional"===r.ngMetadataName||r===re?n|=ae.Optional:r instanceof se||"SkipSelf"===r.ngMetadataName||r===se?n|=ae.SkipSelf:r instanceof ie||"Self"===r.ngMetadataName||r===ie?n|=ae.Self:e=r instanceof oe||r===oe?r.token:r}t.push(We(e,n))}else t.push(We(o))}return t}class Ze{get(e,t=Me){if(t===Me){const t=new Error(`NullInjectorError: No provider for ${_e(e)}!`);throw t.name="NullInjectorError",t}return t}}class Ge{}class Ye{}function Je(e,t){e.forEach(e=>Array.isArray(e)?Je(e,t):t(e))}function Xe(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function et(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}const tt=function(){var e={OnPush:0,Default:1};return e[e.OnPush]="OnPush",e[e.Default]="Default",e}(),nt=function(){var e={Emulated:0,Native:1,None:2,ShadowDom:3};return e[e.Emulated]="Emulated",e[e.Native]="Native",e[e.None]="None",e[e.ShadowDom]="ShadowDom",e}(),ot={},rt=[];let it=0;function st(e){return te(()=>{const t=e.type,n=t.prototype,o={},r={type:t,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:o,inputs:null,outputs:null,exportAs:e.exportAs||null,onChanges:null,onInit:n.ngOnInit||null,doCheck:n.ngDoCheck||null,afterContentInit:n.ngAfterContentInit||null,afterContentChecked:n.ngAfterContentChecked||null,afterViewInit:n.ngAfterViewInit||null,afterViewChecked:n.ngAfterViewChecked||null,onDestroy:n.ngOnDestroy||null,onPush:e.changeDetection===tt.OnPush,directiveDefs:null,pipeDefs:null,selectors:e.selectors||rt,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||nt.Emulated,id:"c",styles:e.styles||rt,_:null,setInput:null,schemas:e.schemas||null,tView:null},i=e.directives,s=e.features,a=e.pipes;return r.id+=it++,r.inputs=ut(e.inputs,o),r.outputs=ut(e.outputs),s&&s.forEach(e=>e(r)),r.directiveDefs=i?()=>("function"==typeof i?i():i).map(at):null,r.pipeDefs=a?()=>("function"==typeof a?a():a).map(ct):null,r})}function at(e){return pt(e)||function(e){return e[je]||null}(e)}function ct(e){return function(e){return e[Ae]||null}(e)}const lt={};function ht(e){const t={type:e.type,bootstrap:e.bootstrap||rt,declarations:e.declarations||rt,imports:e.imports||rt,exports:e.exports||rt,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null};return null!=e.id&&te(()=>{lt[e.id]=e.type}),t}function ut(e,t){if(null==e)return ot;const n={};for(const o in e)if(e.hasOwnProperty(o)){let r=e[o],i=r;Array.isArray(r)&&(i=r[1],r=r[0]),n[r]=o,t&&(t[r]=i)}return n}const dt=st;function ft(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,onDestroy:e.type.prototype.ngOnDestroy||null}}function pt(e){return e[Pe]||null}function gt(e,t){return e.hasOwnProperty(Ie)?e[Ie]:null}function mt(e,t){const n=e[Re]||null;if(!n&&!0===t)throw new Error(`Type ${_e(e)} does not have '\u0275mod' property.`);return n}function bt(e){return Array.isArray(e)&&"object"==typeof e[1]}function yt(e){return Array.isArray(e)&&!0===e[1]}function _t(e){return 0!=(8&e.flags)}function vt(e){return 2==(2&e.flags)}function wt(e){return 1==(1&e.flags)}function xt(e){return null!==e.template}function St(e){return 0!=(512&e[2])}let kt=void 0;function Et(e){return!!e.listen}const Ct={createRenderer:(e,t)=>void 0!==kt?kt:"undefined"!=typeof document?document:void 0};function Ot(e){for(;Array.isArray(e);)e=e[0];return e}function Tt(e,t){return Ot(t[e.index])}function Pt(e,t){return e.data[t+19]}function jt(e,t){const n=t[e];return bt(n)?n:n[0]}function At(e){const t=function(e){return e.__ngContext__||null}(e);return t?Array.isArray(t)?t:t.lView:null}function Rt(e){return 128==(128&e[2])}function Nt(e,t){return null===e||null==t?null:e[t]}function It(e){e[18]=0}const Dt={lFrame:Xt(null),bindingsEnabled:!0,checkNoChangesMode:!1};function $t(){return Dt.bindingsEnabled}function Ft(){return Dt.lFrame.lView}function Mt(){return Dt.lFrame.tView}function Lt(e){Dt.lFrame.contextLView=e}function zt(){return Dt.lFrame.previousOrParentTNode}function Ut(e,t){Dt.lFrame.previousOrParentTNode=e,Dt.lFrame.isParent=t}function Vt(){return Dt.lFrame.isParent}function Ht(){Dt.lFrame.isParent=!1}function Bt(){return Dt.checkNoChangesMode}function qt(e){Dt.checkNoChangesMode=e}function Wt(){return Dt.lFrame.bindingIndex}function Qt(){return Dt.lFrame.bindingIndex++}function Kt(e,t){const n=Dt.lFrame;n.bindingIndex=n.bindingRootIndex=e,n.currentDirectiveIndex=t}function Zt(e){Dt.lFrame.currentQueryIndex=e}function Gt(e,t){const n=Jt();Dt.lFrame=n,n.previousOrParentTNode=t,n.lView=e}function Yt(e,t){const n=Jt(),o=e[1];Dt.lFrame=n,n.previousOrParentTNode=t,n.lView=e,n.tView=o,n.contextLView=e,n.bindingIndex=o.bindingStartIndex}function Jt(){const e=Dt.lFrame,t=null===e?null:e.child;return null===t?Xt(e):t}function Xt(e){const t={previousOrParentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:0,contextLView:null,elementDepthCount:0,currentNamespace:null,currentSanitizer:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null};return null!==e&&(e.child=t),t}function en(){const e=Dt.lFrame;return Dt.lFrame=e.parent,e.previousOrParentTNode=null,e.lView=null,e}const tn=en;function nn(){const e=en();e.isParent=!0,e.tView=null,e.selectedIndex=0,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.currentSanitizer=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function on(){return Dt.lFrame.selectedIndex}function rn(e){Dt.lFrame.selectedIndex=e}function sn(e,t){for(let n=t.directiveStart,o=t.directiveEnd;n<o;n++){const t=e.data[n];t.afterContentInit&&(e.contentHooks||(e.contentHooks=[])).push(-n,t.afterContentInit),t.afterContentChecked&&((e.contentHooks||(e.contentHooks=[])).push(n,t.afterContentChecked),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,t.afterContentChecked)),t.afterViewInit&&(e.viewHooks||(e.viewHooks=[])).push(-n,t.afterViewInit),t.afterViewChecked&&((e.viewHooks||(e.viewHooks=[])).push(n,t.afterViewChecked),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,t.afterViewChecked)),null!=t.onDestroy&&(e.destroyHooks||(e.destroyHooks=[])).push(n,t.onDestroy)}}function an(e,t,n){hn(e,t,3,n)}function cn(e,t,n,o){(3&e[2])===n&&hn(e,t,n,o)}function ln(e,t){let n=e[2];(3&n)===t&&(n&=1023,n+=1,e[2]=n)}function hn(e,t,n,o){const r=null!=o?o:-1;let i=0;for(let s=void 0!==o?65535&e[18]:0;s<t.length;s++)if("number"==typeof t[s+1]){if(i=t[s],null!=o&&i>=o)break}else t[s]<0&&(e[18]+=65536),(i<r||-1==r)&&(un(e,n,t,s),e[18]=(4294901760&e[18])+s+2),s++}function un(e,t,n,o){const r=n[o]<0,i=n[o+1],s=e[r?-n[o]:n[o]];r?e[2]>>10<e[18]>>16&&(3&e[2])===t&&(e[2]+=1024,i.call(s)):i.call(s)}class dn{constructor(e,t,n){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=n}}function fn(e,t,n){const o=Et(e);let r=0;for(;r<n.length;){const i=n[r];if("number"==typeof i){if(0!==i)break;r++;const s=n[r++],a=n[r++],c=n[r++];o?e.setAttribute(t,a,c,s):t.setAttributeNS(s,a,c)}else{const s=i,a=n[++r];gn(s)?o&&e.setProperty(t,s,a):o?e.setAttribute(t,s,a):t.setAttribute(s,a),r++}}return r}function pn(e){return 3===e||4===e||6===e}function gn(e){return 64===e.charCodeAt(0)}function mn(e,t){if(null===t||0===t.length);else if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let o=0;o<t.length;o++){const r=t[o];"number"==typeof r?n=r:0===n||bn(e,n,r,null,-1===n||2===n?t[++o]:null)}}return e}function bn(e,t,n,o,r){let i=0,s=e.length;if(-1===t)s=-1;else for(;i<e.length;){const n=e[i++];if("number"==typeof n){if(n===t){s=-1;break}if(n>t){s=i-1;break}}}for(;i<e.length;){const t=e[i];if("number"==typeof t)break;if(t===n){if(null===o)return void(null!==r&&(e[i+1]=r));if(o===e[i+1])return void(e[i+2]=r)}i++,null!==o&&i++,null!==r&&i++}-1!==s&&(e.splice(s,0,t),i=s+1),e.splice(i++,0,n),null!==o&&e.splice(i++,0,o),null!==r&&e.splice(i++,0,r)}function yn(e){return-1!==e}function _n(e){return 32767&e}function vn(e){return e>>16}function wn(e,t){let n=vn(e),o=t;for(;n>0;)o=o[15],n--;return o}function xn(e){return"string"==typeof e?e:null==e?"":""+e}function Sn(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():xn(e)}const kn=(()=>("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(Te))();function En(e){return e instanceof Function?e():e}let Cn=!0;function On(e){const t=Cn;return Cn=e,t}let Tn=0;function Pn(e,t){const n=An(e,t);if(-1!==n)return n;const o=t[1];o.firstCreatePass&&(e.injectorIndex=t.length,jn(o.data,e),jn(t,null),jn(o.blueprint,null));const r=Rn(e,t),i=e.injectorIndex;if(yn(r)){const e=_n(r),n=wn(r,t),o=n[1].data;for(let r=0;r<8;r++)t[i+r]=n[e+r]|o[e+r]}return t[i+8]=r,i}function jn(e,t){e.push(0,0,0,0,0,0,0,0,t)}function An(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null==t[e.injectorIndex+8]?-1:e.injectorIndex}function Rn(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=t[6],o=1;for(;n&&-1===n.injectorIndex;)n=(t=t[15])?t[6]:null,o++;return n?n.injectorIndex|o<<16:-1}function Nn(e,t,n){!function(e,t,n){let o="string"!=typeof n?n[De]:n.charCodeAt(0)||0;null==o&&(o=n[De]=Tn++);const r=255&o,i=1<<r,s=64&r,a=32&r,c=t.data;128&r?s?a?c[e+7]|=i:c[e+6]|=i:a?c[e+5]|=i:c[e+4]|=i:s?a?c[e+3]|=i:c[e+2]|=i:a?c[e+1]|=i:c[e]|=i}(e,t,n)}function In(e,t,n,o=ae.Default,r){if(null!==e){const r=function(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e[De];return"number"==typeof t&&t>0?255&t:t}(n);if("function"==typeof r){Gt(t,e);try{const e=r();if(null!=e||o&ae.Optional)return e;throw new Error(`No provider for ${Sn(n)}!`)}finally{tn()}}else if("number"==typeof r){if(-1===r)return new zn(e,t);let i=null,s=An(e,t),a=-1,c=o&ae.Host?t[16][6]:null;for((-1===s||o&ae.SkipSelf)&&(a=-1===s?Rn(e,t):t[s+8],Ln(o,!1)?(i=t[1],s=_n(a),t=wn(a,t)):s=-1);-1!==s;){a=t[s+8];const e=t[1];if(Mn(r,s,e.data)){const e=$n(s,t,n,i,o,c);if(e!==Dn)return e}Ln(o,t[1].data[s+8]===c)&&Mn(r,s,t)?(i=e,s=_n(a),t=wn(a,t)):s=-1}}}if(o&ae.Optional&&void 0===r&&(r=null),0==(o&(ae.Self|ae.Host))){const e=t[9],i=Be(void 0);try{return e?e.get(n,r,o&ae.Optional):Qe(n,r,o&ae.Optional)}finally{Be(i)}}if(o&ae.Optional)return r;throw new Error(`NodeInjector: NOT_FOUND [${Sn(n)}]`)}const Dn={};function $n(e,t,n,o,r,i){const s=t[1],a=s.data[e+8],c=function(e,t,n,o,r){const i=e.providerIndexes,s=t.data,a=65535&i,c=e.directiveStart,l=i>>16,h=r?a+l:e.directiveEnd;for(let u=o?a:a+l;u<h;u++){const e=s[u];if(u<c&&n===e||u>=c&&e.type===n)return u}if(r){const e=s[c];if(e&&xt(e)&&e.type===n)return c}return null}(a,s,n,null==o?vt(a)&&Cn:o!=s&&3===a.type,r&ae.Host&&i===a);return null!==c?Fn(t,s,c,a):Dn}function Fn(e,t,n,o){let r=e[n];const i=t.data;if(r instanceof dn){const s=r;if(s.resolving)throw new Error(`Circular dep for ${Sn(i[n])}`);const a=On(s.canSeeViewProviders);let c;s.resolving=!0,s.injectImpl&&(c=Be(s.injectImpl)),Gt(e,o);try{r=e[n]=s.factory(void 0,i,e,o),t.firstCreatePass&&n>=o.directiveStart&&function(e,t,n){const{onChanges:o,onInit:r,doCheck:i}=t;o&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,o),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,o)),r&&(n.preOrderHooks||(n.preOrderHooks=[])).push(-e,r),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t)}finally{s.injectImpl&&Be(c),On(a),s.resolving=!1,tn()}}return r}function Mn(e,t,n){const o=64&e,r=32&e;let i;return i=128&e?o?r?n[t+7]:n[t+6]:r?n[t+5]:n[t+4]:o?r?n[t+3]:n[t+2]:r?n[t+1]:n[t],!!(i&1<<e)}function Ln(e,t){return!(e&ae.Self||e&ae.Host&&t)}class zn{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return In(this._tNode,this._lView,e,void 0,t)}}function Un(e){return e.ngDebugContext}function Vn(e){return e.ngOriginalError}function Hn(e,...t){e.error(...t)}class Bn{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),o=function(e){return e.ngErrorLogger||Hn}(e);o(this._console,"ERROR",e),t&&o(this._console,"ORIGINAL ERROR",t),n&&o(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?Un(e)?Un(e):this._findContext(Vn(e)):null}_findOriginalError(e){let t=Vn(e);for(;t&&Vn(t);)t=Vn(t);return t}}let qn=!0,Wn=!1;function Qn(){return Wn=!0,qn}function Kn(e,t){e.__ngContext__=t}function Zn(e){throw new Error(`Multiple components match node with tagname ${e.tagName}`)}function Gn(){throw new Error("Cannot mix multi providers and regular providers")}function Yn(e,t,n){let o=e.length;for(;;){const r=e.indexOf(t,n);if(-1===r)return r;if(0===r||e.charCodeAt(r-1)<=32){const n=t.length;if(r+n===o||e.charCodeAt(r+n)<=32)return r}n=r+1}}function Jn(e,t,n){let o=0;for(;o<e.length;){let r=e[o++];if(n&&"class"===r){if(r=e[o],-1!==Yn(r.toLowerCase(),t,0))return!0}else if(1===r){for(;o<e.length&&"string"==typeof(r=e[o++]);)if(r.toLowerCase()===t)return!0;return!1}}return!1}function Xn(e,t,n){return t===(0!==e.type||n?e.tagName:"ng-template")}function eo(e,t,n){let o=4;const r=e.attrs||[],i=function(e){for(let t=0;t<e.length;t++)if(pn(e[t]))return t;return e.length}(r);let s=!1;for(let a=0;a<t.length;a++){const c=t[a];if("number"!=typeof c){if(!s)if(4&o){if(o=2|1&o,""!==c&&!Xn(e,c,n)||""===c&&1===t.length){if(to(o))return!1;s=!0}}else{const l=8&o?c:t[++a];if(8&o&&null!==e.attrs){if(!Jn(e.attrs,l,n)){if(to(o))return!1;s=!0}continue}const h=no(8&o?"class":c,r,0==e.type&&"ng-template"!==e.tagName,n);if(-1===h){if(to(o))return!1;s=!0;continue}if(""!==l){let e;e=h>i?"":r[h+1].toLowerCase();const t=8&o?e:null;if(t&&-1!==Yn(t,l,0)||2&o&&l!==e){if(to(o))return!1;s=!0}}}}else{if(!s&&!to(o)&&!to(c))return!1;if(s&&to(c))continue;s=!1,o=c|1&o}}return to(o)||s}function to(e){return 0==(1&e)}function no(e,t,n,o){if(null===t)return-1;let r=0;if(o||!n){let n=!1;for(;r<t.length;){const o=t[r];if(o===e)return r;if(3===o||6===o)n=!0;else{if(1===o||2===o){let e=t[++r];for(;"string"==typeof e;)e=t[++r];continue}if(4===o)break;if(0===o){r+=4;continue}}r+=n?1:2}return-1}return function(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){if(e[n]===t)return n;n++}return-1}(t,e)}function oo(e,t,n=!1){for(let o=0;o<t.length;o++)if(eo(e,t[o],n))return!0;return!1}function ro(e,t){return e?":not("+t.trim()+")":t}function io(e){let t=e[0],n=1,o=2,r="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&o){const t=e[++n];r+="["+s+(t.length>0?'="'+t+'"':"")+"]"}else 8&o?r+="."+s:4&o&&(r+=" "+s);else""===r||to(s)||(t+=ro(i,r),r=""),o=s,i=i||!to(o);n++}return""!==r&&(t+=ro(i,r)),t}const so={};function ao(e){const t=e[3];return yt(t)?t[3]:t}function co(e){lo(Mt(),Ft(),on()+e,Bt())}function lo(e,t,n,o){if(!o)if(3==(3&t[2])){const o=e.preOrderCheckHooks;null!==o&&an(t,o,n)}else{const o=e.preOrderHooks;null!==o&&cn(t,o,0,n)}rn(n)}function ho(e,t){const n=e.contentQueries;if(null!==n)for(let o=0;o<n.length;o+=2){const r=n[o],i=n[o+1];if(-1!==i){const n=e.data[i];Zt(r),n.contentQueries(2,t[i],i)}}}function uo(e,t,n){return Et(t)?t.createElement(e,n):null===n?t.createElement(e):t.createElementNS(n,e)}function fo(e,t,n,o,r,i,s,a,c,l){const h=t.blueprint.slice();return h[0]=r,h[2]=140|o,It(h),h[3]=h[15]=e,h[8]=n,h[10]=s||e&&e[10],h[11]=a||e&&e[11],h[12]=c||e&&e[12]||null,h[9]=l||e&&e[9]||null,h[6]=i,h[16]=2==t.type?e[16]:h,h}function po(e,t,n,o,r,i){const s=n+19,a=e.data[s]||function(e,t,n,o,r,i){const s=zt(),a=Vt(),c=a?s:s&&s.parent,l=e.data[n]=ko(0,c&&c!==t?c:null,o,n,r,i);return null===e.firstChild&&(e.firstChild=l),s&&(!a||null!=s.child||null===l.parent&&2!==s.type?a||(s.next=l):s.child=l),l}(e,t,s,o,r,i);return Ut(a,!0),a}function go(e,t,n){Yt(t,t[6]);try{const o=e.viewQuery;null!==o&&Wo(1,o,n);const r=e.template;null!==r&&yo(e,t,r,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&ho(e,t),e.staticViewQueries&&Wo(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)Uo(e,t[n])}(t,i)}finally{t[2]&=-5,nn()}}function mo(e,t,n,o){const r=t[2];if(256==(256&r))return;Yt(t,t[6]);const i=Bt();try{It(t),Dt.lFrame.bindingIndex=e.bindingStartIndex,null!==n&&yo(e,t,n,2,o);const s=3==(3&r);if(!i)if(s){const n=e.preOrderCheckHooks;null!==n&&an(t,n,null)}else{const n=e.preOrderHooks;null!==n&&cn(t,n,0,null),ln(t,0)}if(function(e){let t=e[13];for(;null!==t;){let n;if(yt(t)&&(n=t[2])>>1==-1){for(let e=9;e<t.length;e++){const n=t[e],o=n[1];Rt(n)&&mo(o,n,o.template,n[8])}0!=(1&n)&&Lo(t,e[16])}t=t[4]}}(t),null!==e.contentQueries&&ho(e,t),!i)if(s){const n=e.contentCheckHooks;null!==n&&an(t,n)}else{const n=e.contentHooks;null!==n&&cn(t,n,1),ln(t,1)}!function(e,t){try{const n=e.expandoInstructions;if(null!==n){let o=e.expandoStartIndex,r=-1,i=-1;for(let e=0;e<n.length;e++){const s=n[e];"number"==typeof s?s<=0?(i=0-s,rn(i),o+=9+n[++e],r=o):o+=s:(null!==s&&(Kt(o,r),s(2,t[r])),r++)}}}finally{rn(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)zo(e,t[n])}(t,a);const c=e.viewQuery;if(null!==c&&Wo(2,c,o),!i)if(s){const n=e.viewCheckHooks;null!==n&&an(t,n)}else{const n=e.viewHooks;null!==n&&cn(t,n,2),ln(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73)}finally{nn()}}function bo(e,t,n,o){const r=t[10],i=!Bt(),s=4==(4&t[2]);try{i&&!s&&r.begin&&r.begin(),s&&go(e,t,o),mo(e,t,n,o)}finally{i&&!s&&r.end&&r.end()}}function yo(e,t,n,o,r){const i=on();try{rn(-1),2&o&&t.length>19&&lo(e,t,0,Bt()),n(o,r)}finally{rn(i)}}function _o(e,t,n){if(_t(t)){const o=t.directiveEnd;for(let r=t.directiveStart;r<o;r++){const t=e.data[r];t.contentQueries&&t.contentQueries(1,n[r],r)}}}function vo(e,t,n){$t()&&(function(e,t,n,o){const r=n.directiveStart,i=n.directiveEnd;e.firstCreatePass||Pn(n,t),Kn(o,t);const s=n.initialInputs;for(let a=r;a<i;a++){const o=e.data[a],i=xt(o);i&&Do(t,n,o);const c=Fn(t,e,a,n);Kn(c,t),null!==s&&$o(0,a-r,c,o,0,s),i&&(jt(n.index,t)[8]=c)}}(e,t,n,Tt(n,t)),128==(128&n.flags)&&function(e,t,n){const o=n.directiveStart,r=n.directiveEnd,i=e.expandoInstructions,s=e.firstCreatePass,a=n.index-19;try{rn(a);for(let n=o;n<r;n++){const o=e.data[n],r=t[n];null!==o.hostBindings||0!==o.hostVars||null!==o.hostAttrs?Po(o,r):s&&i.push(null)}}finally{rn(-1)}}(e,t,n))}function wo(e,t,n=Tt){const o=t.localNames;if(null!==o){let r=t.index+1;for(let i=0;i<o.length;i+=2){const s=o[i+1],a=-1===s?n(t,e):e[s];e[r++]=a}}}function xo(e){return e.tView||(e.tView=So(1,-1,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts))}function So(e,t,n,o,r,i,s,a,c,l){const h=19+o,u=h+r,d=function(e,t){const n=[];for(let o=0;o<t;o++)n.push(o<e?null:so);return n}(h,u);return d[1]={type:e,id:t,blueprint:d,template:n,queries:null,viewQuery:a,node:null,data:d.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:u,expandoInstructions:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:c,consts:l}}function ko(e,t,n,o,r,i){return{type:n,index:o,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,tagName:r,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,residualStyles:void 0,classes:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Eo(e,t,n){for(let o in e)if(e.hasOwnProperty(o)){const r=e[o];(n=null===n?{}:n).hasOwnProperty(o)?n[o].push(t,r):n[o]=[t,r]}return n}function Co(e,t,n,o){let r=!1;if($t()){const i=function(e,t,n){const o=e.directiveRegistry;let r=null;if(o)for(let i=0;i<o.length;i++){const s=o[i];oo(n,s.selectors,!1)&&(r||(r=[]),Nn(Pn(n,t),e,s.type),xt(s)?(2&n.flags&&Zn(n),Ao(e,n),r.unshift(s)):r.push(s))}return r}(e,t,n),s=null===o?null:{"":-1};if(null!==i){let o=0;r=!0,No(n,e.data.length,i.length);for(let e=0;e<i.length;e++){const t=i[e];t.providersResolver&&t.providersResolver(t)}jo(e,n,i.length);let a=!1,c=!1;for(let r=0;r<i.length;r++){const l=i[r];n.mergedAttrs=mn(n.mergedAttrs,l.hostAttrs),Io(e,t,l),Ro(e.data.length-1,l,s),null!==l.contentQueries&&(n.flags|=8),null===l.hostBindings&&null===l.hostAttrs&&0===l.hostVars||(n.flags|=128),!a&&(l.onChanges||l.onInit||l.doCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index-19),a=!0),c||!l.onChanges&&!l.doCheck||((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index-19),c=!0),Oo(e,l),o+=l.hostVars}!function(e,t){const n=t.directiveEnd,o=e.data,r=t.attrs,i=[];let s=null,a=null;for(let c=t.directiveStart;c<n;c++){const e=o[c],t=e.inputs;i.push(null!==r?Fo(t,r):null),s=Eo(t,c,s),a=Eo(e.outputs,c,a)}null!==s&&(s.hasOwnProperty("class")&&(t.flags|=16),s.hasOwnProperty("style")&&(t.flags|=32)),t.initialInputs=i,t.inputs=s,t.outputs=a}(e,n),To(e,t,o)}s&&function(e,t,n){if(t){const o=e.localNames=[];for(let e=0;e<t.length;e+=2){const r=n[t[e+1]];if(null==r)throw new Error(`Export of name '${t[e+1]}' not found!`);o.push(t[e],r)}}}(n,o,s)}return n.mergedAttrs=mn(n.mergedAttrs,n.attrs),r}function Oo(e,t){const n=e.expandoInstructions;n.push(t.hostBindings),0!==t.hostVars&&n.push(t.hostVars)}function To(e,t,n){for(let o=0;o<n;o++)t.push(so),e.blueprint.push(so),e.data.push(null)}function Po(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function jo(e,t,n){const o=19-t.index,r=e.data.length-(65535&t.providerIndexes);(e.expandoInstructions||(e.expandoInstructions=[])).push(o,r,n)}function Ao(e,t){t.flags|=2,(e.components||(e.components=[])).push(t.index)}function Ro(e,t,n){if(n){if(t.exportAs)for(let o=0;o<t.exportAs.length;o++)n[t.exportAs[o]]=e;xt(t)&&(n[""]=e)}}function No(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Io(e,t,n){e.data.push(n);const o=n.factory||(n.factory=gt(n.type)),r=new dn(o,xt(n),null);e.blueprint.push(r),t.push(r)}function Do(e,t,n){const o=Tt(t,e),r=xo(n),i=e[10],s=Vo(e,fo(e,r,null,n.onPush?64:16,o,t,i,i.createRenderer(o,n)));e[t.index]=s}function $o(e,t,n,o,r,i){const s=i[t];if(null!==s){const e=o.setInput;for(let t=0;t<s.length;){const r=s[t++],i=s[t++],a=s[t++];null!==e?o.setInput(n,a,r,i):n[i]=a}}}function Fo(e,t){let n=null,o=0;for(;o<t.length;){const r=t[o];if(0!==r)if(5!==r){if("number"==typeof r)break;e.hasOwnProperty(r)&&(null===n&&(n=[]),n.push(r,e[r],t[o+1])),o+=2}else o+=2;else o+=4}return n}function Mo(e,t,n,o){return new Array(e,!0,-2,t,null,null,o,n,null)}function Lo(e,t){const n=e[5];for(let o=0;o<n.length;o++){const e=n[o],r=e[3][3][16];if(r!==t&&0==(16&r[2])){const t=e[1];mo(t,e,t.template,e[8])}}}function zo(e,t){const n=jt(t,e);if(Rt(n)&&80&n[2]){const e=n[1];mo(e,n,e.template,n[8])}}function Uo(e,t){const n=jt(t,e),o=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(o,n),go(o,n,n[8])}function Vo(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Ho(e){for(;e;){e[2]|=64;const t=ao(e);if(St(e)&&!t)return e;e=t}return null}function Bo(e,t,n){const o=t[10];o.begin&&o.begin();try{mo(e,t,e.template,n)}catch(r){throw Zo(t,r),r}finally{o.end&&o.end()}}function qo(e){!function(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],o=At(n),r=o[1];bo(r,o,r.template,n)}}(e[8])}function Wo(e,t,n){Zt(0),t(e,n)}const Qo=(()=>Promise.resolve(null))();function Ko(e){return e[7]||(e[7]=[])}function Zo(e,t){const n=e[9],o=n?n.get(Bn,null):null;o&&o.handleError(t)}function Go(e,t,n,o,r){for(let i=0;i<n.length;){const s=n[i++],a=n[i++],c=t[s],l=e.data[s];null!==l.setInput?l.setInput(c,r,o,a):c[a]=r}}function Yo(e,t,n){const o=function(e,t){return Ot(t[e+19])}(t,e),r=e[11];Et(r)?r.setValue(o,n):o.textContent=n}function Jo(e,t){const n=t[3];return-1===e.index?yt(n)?n:null:n}function Xo(e,t){const n=Jo(e,t);return n?hr(t[11],n[7]):null}function er(e,t,n,o,r){if(null!=o){let i,s=!1;yt(o)?i=o:bt(o)&&(s=!0,o=o[0]);const a=Ot(o);0===e&&null!==n?null==r?cr(t,n,a):ar(t,n,a,r||null):1===e&&null!==n?ar(t,n,a,r||null):2===e?function(e,t,n){const o=hr(e,t);o&&function(e,t,n,o){Et(e)?e.removeChild(t,n,o):t.removeChild(n)}(e,o,t,n)}(t,a,s):3===e&&t.destroyNode(a),null!=i&&function(e,t,n,o,r){const i=n[7];i!==Ot(n)&&er(t,e,o,i,r);for(let s=9;s<n.length;s++){const r=n[s];pr(r[1],r,e,t,o,i)}}(t,e,i,n,r)}}function tr(e,t,n,o){const r=Xo(e.node,t);r&&pr(e,t,t[11],n?1:2,r,o)}function nr(e,t){const n=e[5],o=n.indexOf(t);n.splice(o,1)}function or(e,t){if(e.length<=9)return;const n=9+t,o=e[n];if(o){const r=o[17];null!==r&&r!==e&&nr(r,o),t>0&&(e[n-1][4]=o[4]);const i=et(e,9+t);tr(o[1],o,!1,null);const s=i[5];null!==s&&s.detachView(i[1]),o[3]=null,o[4]=null,o[2]&=-129}return o}function rr(e,t){if(!(256&t[2])){const n=t[11];Et(n)&&n.destroyNode&&pr(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return sr(e[1],e);for(;t;){let n=null;if(bt(t))n=t[13];else{const e=t[9];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)bt(t)&&sr(t[1],t),t=ir(t,e);null===t&&(t=e),bt(t)&&sr(t[1],t),n=t&&t[4]}t=n}}(t)}}function ir(e,t){let n;return bt(e)&&(n=e[6])&&2===n.type?Jo(n,e):e[3]===t?null:e[3]}function sr(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let o=0;o<n.length;o+=2){const e=t[n[o]];if(!(e instanceof dn)){const t=n[o+1];if(Array.isArray(t))for(let n=0;n<t.length;n+=2)t[n+1].call(e[t[n]]);else t.call(e)}}}(e,t),function(e,t){const n=e.cleanup;if(null!==n){const e=t[7];for(let o=0;o<n.length-1;o+=2)if("string"==typeof n[o]){const r=n[o+1],i="function"==typeof r?r(t):Ot(t[r]),s=e[n[o+2]],a=n[o+3];"boolean"==typeof a?i.removeEventListener(n[o],s,a):a>=0?e[a]():e[-a].unsubscribe(),o+=2}else n[o].call(e[n[o+1]]);t[7]=null}}(e,t);const n=t[6];n&&3===n.type&&Et(t[11])&&t[11].destroy();const o=t[17];if(null!==o&&yt(t[3])){o!==t[3]&&nr(o,t);const n=t[5];null!==n&&n.detachView(e)}}}function ar(e,t,n,o){Et(e)?e.insertBefore(t,n,o):t.insertBefore(n,o,!0)}function cr(e,t,n){Et(e)?e.appendChild(t,n):t.appendChild(n)}function lr(e,t,n,o){null!==o?ar(e,t,n,o):cr(e,t,n)}function hr(e,t){return Et(e)?e.parentNode(t):t.parentNode}function ur(e,t,n,o){const r=function(e,t,n){let o=t.parent;for(;null!=o&&(4===o.type||5===o.type);)o=(t=o).parent;if(null==o){const e=n[6];return 2===e.type?Xo(e,n):n[0]}if(t&&5===t.type&&4&t.flags)return Tt(t,n).parentNode;if(2&o.flags){const t=e.data,n=t[t[o.index].directiveStart].encapsulation;if(n!==nt.ShadowDom&&n!==nt.Native)return null}return Tt(o,n)}(e,o,t);if(null!=r){const e=t[11],i=function(e,t){if(2===e.type){const n=Jo(e,t);return null===n?null:dr(n.indexOf(t,9)-9,n)}return 4===e.type||5===e.type?Tt(e,t):null}(o.parent||t[6],t);if(Array.isArray(n))for(let t=0;t<n.length;t++)lr(e,r,n[t],i);else lr(e,r,n,i)}}function dr(e,t){const n=9+e+1;if(n<t.length){const e=t[n],o=e[1].firstChild;if(null!==o)return function e(t,n){if(null!==n){const o=n.type;if(3===o)return Tt(n,t);if(0===o)return dr(-1,t[n.index]);if(4===o||5===o){const o=n.child;if(null!==o)return e(t,o);{const e=t[n.index];return yt(e)?dr(-1,e):Ot(e)}}{const o=t[16],r=o[6],i=ao(o),s=r.projection[n.projection];return null!=s?e(i,s):e(t,n.next)}}return null}(e,o)}return t[7]}function fr(e,t,n,o,r,i,s){for(;null!=n;){const a=o[n.index],c=n.type;s&&0===t&&(a&&Kn(Ot(a),o),n.flags|=4),64!=(64&n.flags)&&(4===c||5===c?(fr(e,t,n.child,o,r,i,!1),er(t,e,r,a,i)):1===c?gr(e,t,o,n,r,i):er(t,e,r,a,i)),n=s?n.projectionNext:n.next}}function pr(e,t,n,o,r,i){fr(n,o,e.node.child,t,r,i,!1)}function gr(e,t,n,o,r,i){const s=n[16],a=s[6].projection[o.projection];if(Array.isArray(a))for(let c=0;c<a.length;c++)er(t,e,r,a[c],i);else fr(e,t,a,s[3],r,i,!0)}function mr(e,t,n){Et(e)?e.setAttribute(t,"style",n):t.style.cssText=n}function br(e,t,n){Et(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n}class yr{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._viewContainerRef=null,this._tViewNode=null}get rootNodes(){const e=this._lView;return null==e[0]?function e(t,n,o,r,i=!1){for(;null!==o;){const s=n[o.index];if(null!==s&&r.push(Ot(s)),yt(s))for(let t=9;t<s.length;t++){const n=s[t],o=n[1].firstChild;null!==o&&e(n[1],n,o,r)}const a=o.type;if(4===a||5===a)e(t,n,o.child,r);else if(1===a){const t=n[16],i=t[6],s=ao(t);let a=i.projection[o.projection];null!==a&&null!==s&&e(s[1],s,a,r,!0)}o=i?o.projectionNext:o.next}return r}(e[1],e,e[6].child,[]):[]}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._viewContainerRef){const e=this._viewContainerRef.indexOf(this);e>-1&&this._viewContainerRef.detach(e),this._viewContainerRef=null}rr(this._lView[1],this._lView)}onDestroy(e){var t,n,o;t=this._lView[1],o=e,Ko(n=this._lView).push(o),t.firstCreatePass&&function(e){return e.cleanup||(e.cleanup=[])}(t).push(n[7].length-1,null)}markForCheck(){Ho(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Bo(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){qt(!0);try{Bo(e,t,n)}finally{qt(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(e){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._viewContainerRef=e}detachFromAppRef(){var e;this._appRef=null,pr(this._lView[1],e=this._lView,e[11],2,null,null)}attachToAppRef(e){if(this._viewContainerRef)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class _r extends yr{constructor(e){super(e),this._view=e}detectChanges(){qo(this._view)}checkNoChanges(){!function(e){qt(!0);try{qo(e)}finally{qt(!1)}}(this._view)}get context(){return null}}let vr,wr,xr;function Sr(e,t,n){return vr||(vr=class extends e{}),new vr(Tt(t,n))}function kr(e=!1){return function(e,t,n){if(!n&&vt(e)){const n=jt(e.index,t);return new yr(n,n)}return 3===e.type||0===e.type||4===e.type||5===e.type?new yr(t[16],t):null}(zt(),Ft(),e)}let Er=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Cr(),e})();const Cr=kr,Or=new $e("Set Injector scope."),Tr={},Pr={},jr=[];let Ar=void 0;function Rr(){return void 0===Ar&&(Ar=new Ze),Ar}function Nr(e,t=null,n=null,o){return new Ir(e,n,t||Rr(),o)}class Ir{constructor(e,t,n,o=null){this.parent=n,this.records=new Map,this.injectorDefTypes=new Set,this.onDestroy=new Set,this._destroyed=!1;const r=[];t&&Je(t,n=>this.processProvider(n,e,t)),Je([e],e=>this.processInjectorType(e,[],r)),this.records.set(Fe,$r(void 0,this));const i=this.records.get(Or);this.scope=null!=i?i.value:null,this.source=o||("object"==typeof e?null:_e(e))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{this.onDestroy.forEach(e=>e.ngOnDestroy())}finally{this.records.clear(),this.onDestroy.clear(),this.injectorDefTypes.clear()}}get(e,t=Me,n=ae.Default){this.assertNotDestroyed();const o=He(this);try{if(!(n&ae.SkipSelf)){let t=this.records.get(e);if(void 0===t){const n=("function"==typeof(r=e)||"object"==typeof r&&r instanceof $e)&&ue(e);t=n&&this.injectableDefInScope(n)?$r(Dr(e),Tr):null,this.records.set(e,t)}if(null!=t)return this.hydrate(e,t)}return(n&ae.Self?Rr():this.parent).get(e,t=n&ae.Optional&&t===Me?null:t)}catch(i){if("NullInjectorError"===i.name){if((i.ngTempTokenPath=i.ngTempTokenPath||[]).unshift(_e(e)),o)throw i;return function(e,t,n,o){const r=e.ngTempTokenPath;throw t.__source&&r.unshift(t.__source),e.message=function(e,t,n,o=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.substr(2):e;let r=_e(t);if(Array.isArray(t))r=t.map(_e).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let o=t[n];e.push(n+":"+("string"==typeof o?JSON.stringify(o):_e(o)))}r=`{${e.join(", ")}}`}return`${n}${o?"("+o+")":""}[${r}]: ${e.replace(Le,"\n  ")}`}("\n"+e.message,r,n,o),e.ngTokenPath=r,e.ngTempTokenPath=null,e}(i,e,"R3InjectorError",this.source)}throw i}finally{He(o)}var r}_resolveInjectorDefTypes(){this.injectorDefTypes.forEach(e=>this.get(e))}toString(){const e=[];return this.records.forEach((t,n)=>e.push(_e(n))),`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new Error("Injector has already been destroyed.")}processInjectorType(e,t,n){if(!(e=Se(e)))return!1;let o=fe(e);const r=null==o&&e.ngModule||void 0,i=void 0===r?e:r,s=-1!==n.indexOf(i);if(void 0!==r&&(o=fe(r)),null==o)return!1;if(null!=o.imports&&!s){let e;n.push(i);try{Je(o.imports,o=>{this.processInjectorType(o,t,n)&&(void 0===e&&(e=[]),e.push(o))})}finally{}if(void 0!==e)for(let t=0;t<e.length;t++){const{ngModule:n,providers:o}=e[t];Je(o,e=>this.processProvider(e,n,o||jr))}}this.injectorDefTypes.add(i),this.records.set(i,$r(o.factory,Tr));const a=o.providers;if(null!=a&&!s){const t=e;Je(a,e=>this.processProvider(e,t,a))}return void 0!==r&&void 0!==e.providers}processProvider(e,t,n){let o=Mr(e=Se(e))?e:Se(e&&e.provide);const r=function(e,t,n){return Fr(e)?$r(void 0,e.useValue):$r(function(e,t,n){let o=void 0;if(Mr(e)){const t=Se(e);return gt(t)||Dr(t)}if(Fr(e))o=()=>Se(e.useValue);else if((r=e)&&r.useFactory)o=()=>e.useFactory(...Ke(e.deps||[]));else if(function(e){return!(!e||!e.useExisting)}(e))o=()=>We(Se(e.useExisting));else{const r=Se(e&&(e.useClass||e.provide));if(r||function(e,t,n){let o="";throw e&&t&&(o=` - only instances of Provider and Type are allowed, got: [${t.map(e=>e==n?"?"+n+"?":"...").join(", ")}]`),new Error(`Invalid provider for the NgModule '${_e(e)}'`+o)}(t,n,e),!function(e){return!!e.deps}(e))return gt(r)||Dr(r);o=()=>new r(...Ke(e.deps))}var r;return o}(e,t,n),Tr)}(e,t,n);if(Mr(e)||!0!==e.multi){const e=this.records.get(o);e&&void 0!==e.multi&&Gn()}else{let t=this.records.get(o);t?void 0===t.multi&&Gn():(t=$r(void 0,Tr,!0),t.factory=()=>Ke(t.multi),this.records.set(o,t)),o=e,t.multi.push(e)}this.records.set(o,r)}hydrate(e,t){var n;return t.value===Pr?function(e){throw new Error(`Cannot instantiate cyclic dependency! ${e}`)}(_e(e)):t.value===Tr&&(t.value=Pr,t.value=t.factory()),"object"==typeof t.value&&t.value&&null!==(n=t.value)&&"object"==typeof n&&"function"==typeof n.ngOnDestroy&&this.onDestroy.add(t.value),t.value}injectableDefInScope(e){return!!e.providedIn&&("string"==typeof e.providedIn?"any"===e.providedIn||e.providedIn===this.scope:this.injectorDefTypes.has(e.providedIn))}}function Dr(e){const t=ue(e),n=null!==t?t.factory:gt(e);if(null!==n)return n;const o=fe(e);if(null!==o)return o.factory;if(e instanceof $e)throw new Error(`Token ${_e(e)} is missing a \u0275prov definition.`);if(e instanceof Function)return function(e){const t=e.length;if(t>0){const n=function(e,t){const n=[];for(let o=0;o<e;o++)n.push("?");return n}(t);throw new Error(`Can't resolve all parameters for ${_e(e)}: (${n.join(", ")}).`)}const n=function(e){const t=e&&(e[pe]||e[be]||e[me]&&e[me]());if(t){const n=function(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\n`+`This will become an error in v10. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new Error("unreachable")}function $r(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function Fr(e){return null!==e&&"object"==typeof e&&ze in e}function Mr(e){return"function"==typeof e}const Lr=function(e,t,n){return function(e,t=null,n=null,o){const r=Nr(e,t,n,o);return r._resolveInjectorDefTypes(),r}({name:n},t,e,n)};let zr=(()=>{class e{static create(e,t){return Array.isArray(e)?Lr(e,t,""):Lr(e.providers,e.parent,e.name||"")}}return e.THROW_IF_NOT_FOUND=Me,e.NULL=new Ze,e.\u0275prov=le({token:e,providedIn:"any",factory:()=>We(Fe)}),e.__NG_ELEMENT_ID__=-1,e})();const Ur=new $e("AnalyzeForEntryComponents");let Vr=new Map;const Hr=new Set;function Br(e){return"string"==typeof e?e:e.text()}function qr(e,t){let n=e.styles,o=e.classes,r=0;for(let i=0;i<t.length;i++){const e=t[i];"number"==typeof e?r=e:1==r?o=ve(o,e):2==r&&(n=ve(n,e+": "+t[++i]+";"))}null!==n&&(e.styles=n),null!==o&&(e.classes=o)}let Wr=null;function Qr(){if(!Wr){const e=Te.Symbol;if(e&&e.iterator)Wr=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(Wr=n)}}}return Wr}function Kr(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}class Zr{constructor(e){this.wrapped=e}static wrap(e){return new Zr(e)}static unwrap(e){return Zr.isWrapped(e)?e.wrapped:e}static isWrapped(e){return e instanceof Zr}}function Gr(e){return!!Yr(e)&&(Array.isArray(e)||!(e instanceof Map)&&Qr()in e)}function Yr(e){return null!==e&&("function"==typeof e||"object"==typeof e)}function Jr(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function Xr(e,t,n,o,r,i,s,a){const c=function(e,t,n,o,r){const i=function(e,t,n,o){const r=Jr(e,t,n);return Jr(e,t+1,o)||r}(e,t,n,o);return Jr(e,t+2,r)||i}(e,Wt(),n,r,s);return function(e){const t=Dt.lFrame;t.bindingIndex=t.bindingIndex+3}(),c?t+xn(n)+o+xn(r)+i+xn(s)+a:so}function ei(e,t,n,o,r,i,s,a){const c=Ft(),l=Mt(),h=e+19,u=l.firstCreatePass?function(e,t,n,o,r,i,s,a,c){const l=t.consts,h=po(t,n[6],e,0,s||null,Nt(l,a));Co(t,n,h,Nt(l,c)),sn(t,h);const u=h.tViews=So(2,-1,o,r,i,t.directiveRegistry,t.pipeRegistry,null,t.schemas,l),d=ko(0,null,2,-1,null,null);return d.injectorIndex=h.injectorIndex,u.node=d,null!==t.queries&&(t.queries.template(t,h),u.queries=t.queries.embeddedTView(h)),h}(e,l,c,t,n,o,r,i,s):l.data[h];Ut(u,!1);const d=c[11].createComment("");ur(l,c,d,u),Kn(d,c),Vo(c,c[h]=Mo(d,c,d,u)),wt(u)&&vo(l,c,u),null!=s&&wo(c,u,a)}function ti(e,t=ae.Default){const n=Ft();return null==n?We(e,t):In(zt(),n,Se(e),t)}function ni(){throw new Error("invalid")}function oi(e,t,n){const o=Ft();return Jr(o,Qt(),t)&&function(e,t,n,o,r,i,s,a){const c=Tt(t,n);let l,h=t.inputs;var u;null!=h&&(l=h[o])?(Go(e,n,l,o,r),vt(t)&&function(e,t){const n=jt(t,e);16&n[2]||(n[2]|=64)}(n,t.index)):3===t.type&&(o="class"===(u=o)?"className":"for"===u?"htmlFor":"formaction"===u?"formAction":"innerHtml"===u?"innerHTML":"readonly"===u?"readOnly":"tabindex"===u?"tabIndex":u,r=null!=s?s(r,t.tagName||"",o):r,Et(i)?i.setProperty(c,o,r):gn(o)||(c.setProperty?c.setProperty(o,r):c[o]=r))}(Mt(),function(){const e=Dt.lFrame;return Pt(e.tView,e.selectedIndex)}(),o,e,t,o[11],n),oi}function ri(e,t,n,o,r){const i=r?"class":"style";Go(e,n,t.inputs[i],i,o)}function ii(e,t,n,o){const r=Ft(),i=Mt(),s=19+e,a=r[11],c=r[s]=uo(t,a,Dt.lFrame.currentNamespace),l=i.firstCreatePass?function(e,t,n,o,r,i,s){const a=t.consts,c=Nt(a,i),l=po(t,n[6],e,3,r,c);return Co(t,n,l,Nt(a,s)),null!==l.mergedAttrs&&qr(l,l.mergedAttrs),null!==t.queries&&t.queries.elementStart(t,l),l}(e,i,r,0,t,n,o):i.data[s];Ut(l,!0);const h=l.mergedAttrs;null!==h&&fn(a,c,h);const u=l.classes;null!==u&&br(a,c,u);const d=l.styles;null!==d&&mr(a,c,d),ur(i,r,c,l),0===Dt.lFrame.elementDepthCount&&Kn(c,r),Dt.lFrame.elementDepthCount++,wt(l)&&(vo(i,r,l),_o(i,l,r)),null!==o&&wo(r,l)}function si(){let e=zt();Vt()?Ht():(e=e.parent,Ut(e,!1));const t=e;Dt.lFrame.elementDepthCount--;const n=Mt();n.firstCreatePass&&(sn(n,e),_t(e)&&n.queries.elementEnd(e)),null!==t.classes&&function(e){return 0!=(16&e.flags)}(t)&&ri(n,t,Ft(),t.classes,!0),null!==t.styles&&function(e){return 0!=(32&e.flags)}(t)&&ri(n,t,Ft(),t.styles,!1)}function ai(e,t,n,o){ii(e,t,n,o),si()}function ci(){return Ft()}function li(e){return!!e&&"function"==typeof e.then}function hi(e){return!!e&&"function"==typeof e.subscribe}function ui(e,t,n=!1,o){const r=Ft(),i=Mt(),s=zt();return function(e,t,n,o,r,i,s=!1,a){const c=wt(o),l=e.firstCreatePass&&(e.cleanup||(e.cleanup=[])),h=Ko(t);let u=!0;if(3===o.type){const d=Tt(o,t),f=a?a(d):ot,p=f.target||d,g=h.length,m=a?e=>a(Ot(e[o.index])).target:o.index;if(Et(n)){let s=null;if(!a&&c&&(s=function(e,t,n,o){const r=e.cleanup;if(null!=r)for(let i=0;i<r.length-1;i+=2){const e=r[i];if(e===n&&r[i+1]===o){const e=t[7],n=r[i+2];return e.length>n?e[n]:null}"string"==typeof e&&(i+=2)}return null}(e,t,r,o.index)),null!==s)(s.__ngLastListenerFn__||s).__ngNextListenerFn__=i,s.__ngLastListenerFn__=i,u=!1;else{i=fi(o,t,i,!1);const e=n.listen(f.name||p,r,i);h.push(i,e),l&&l.push(r,m,g,g+1)}}else i=fi(o,t,i,!0),p.addEventListener(r,i,s),h.push(i),l&&l.push(r,m,g,s)}const d=o.outputs;let f;if(u&&null!==d&&(f=d[r])){const e=f.length;if(e)for(let n=0;n<e;n+=2){const e=t[f[n]][f[n+1]].subscribe(i),s=h.length;h.push(i,e),l&&l.push(r,o.index,s,-(s+1))}}}(i,r,r[11],s,e,t,n,o),ui}function di(e,t,n){try{return!1!==t(n)}catch(o){return Zo(e,o),!1}}function fi(e,t,n,o){return function r(i){if(i===Function)return n;const s=2&e.flags?jt(e.index,t):t;0==(32&t[2])&&Ho(s);let a=di(t,n,i),c=r.__ngNextListenerFn__;for(;c;)a=di(t,c,i)&&a,c=c.__ngNextListenerFn__;return o&&!1===a&&(i.preventDefault(),i.returnValue=!1),a}}function pi(e=1){return function(e){return(Dt.lFrame.contextLView=function(e,t){for(;e>0;)t=t[15],e--;return t}(e,Dt.lFrame.contextLView))[8]}(e)}function gi(e,t=""){const n=Ft(),o=Mt(),r=e+19,i=o.firstCreatePass?po(o,n[6],e,3,null,null):o.data[r],s=n[r]=function(e,t){return Et(t)?t.createText(e):t.createTextNode(e)}(t,n[11]);ur(o,n,s,i),Ut(i,!1)}function mi(e,t,n){const o=Ft(),r=function(e,t,n,o){return Jr(e,Qt(),n)?t+xn(n)+o:so}(o,e,t,n);return r!==so&&Yo(o,on(),r),mi}function bi(e,t,n,o,r,i,s){const a=Ft(),c=Xr(a,e,t,n,o,r,i,s);return c!==so&&Yo(a,on(),c),bi}function yi(e,t){const n=At(e)[1],o=n.data.length-1;sn(n,{directiveStart:o,directiveEnd:o+1})}class _i{}class vi{resolveComponentFactory(e){throw function(e){const t=Error(`No component factory found for ${_e(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(e)}}let wi=(()=>{class e{}return e.NULL=new vi,e})(),xi=(()=>{class e{constructor(e){this.nativeElement=e}}return e.__NG_ELEMENT_ID__=()=>Si(e),e})();const Si=function(e){return Sr(e,zt(),Ft())};class ki{}const Ei=function(){var e={Important:1,DashCase:2};return e[e.Important]="Important",e[e.DashCase]="DashCase",e}();let Ci=(()=>{class e{}return e.\u0275prov=le({token:e,providedIn:"root",factory:()=>null}),e})();class Oi{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}const Ti=new Oi("9.1.1");class Pi{constructor(){}supports(e){return Gr(e)}create(e){return new Ai(e)}}const ji=(e,t)=>t;class Ai{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||ji}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,o=0,r=null;for(;t||n;){const i=!n||t&&t.currentIndex<Di(n,o,r)?t:n,s=Di(i,o,r),a=i.currentIndex;if(i===n)o--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)o++;else{r||(r=[]);const e=s-o,t=a-o;if(e!=t){for(let n=0;n<e;n++){const o=n<r.length?r[n]:r[n]=0,i=o+n;t<=i&&i<e&&(r[n]=o+1)}r[i.previousIndex]=t-e}}s!==a&&e(i,s,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!Gr(e))throw new Error(`Error trying to diff '${_e(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,o,r=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],o=this._trackByFn(t,n),null!==r&&Kr(r.trackById,o)?(i&&(r=this._verifyReinsertion(r,n,o,t)),Kr(r.item,n)||this._addIdentityChange(r,n)):(r=this._mismatch(r,n,o,t),i=!0),r=r._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[Qr()]();let o;for(;!(o=n.next()).done;)t(o.value)}}(e,e=>{o=this._trackByFn(t,e),null!==r&&Kr(r.trackById,o)?(i&&(r=this._verifyReinsertion(r,e,o,t)),Kr(r.item,e)||this._addIdentityChange(r,e)):(r=this._mismatch(r,e,o,t),i=!0),r=r._next,t++}),this.length=t;return this._truncate(r),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e,t;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=t)e.previousIndex=e.currentIndex,t=e._nextMoved;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,o){let r;return null===e?r=this._itTail:(r=e._prev,this._remove(e)),null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,o))?(Kr(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,r,o)):null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Kr(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,r,o)):e=this._addAfter(new Ri(t,n),r,o),e}_verifyReinsertion(e,t,n,o){let r=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==r?e=this._reinsertAfter(r,e._prev,o):e.currentIndex!=o&&(e.currentIndex=o,this._addToMoves(e,o)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const o=e._prevRemoved,r=e._nextRemoved;return null===o?this._removalsHead=r:o._nextRemoved=r,null===r?this._removalsTail=o:r._prevRemoved=o,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),this._additionsTail=null===this._additionsTail?this._additionsHead=e:this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const o=null===t?this._itHead:t._next;return e._next=o,e._prev=t,null===o?this._itTail=e:o._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new Ii),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail=null===this._movesTail?this._movesHead=e:this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new Ii),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=e:this._identityChangesTail._nextIdentityChange=e,e}}class Ri{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class Ni{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&Kr(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class Ii{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new Ni,this.map.set(t,n)),n.add(e)}get(e,t){const n=this.map.get(e);return n?n.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function Di(e,t,n){const o=e.previousIndex;if(null===o)return o;let r=0;return n&&o<n.length&&(r=n[o]),o+t+r}class $i{constructor(){}supports(e){return e instanceof Map||Yr(e)}create(){return new Fi}}class Fi{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||Yr(e)))throw new Error(`Error trying to diff '${_e(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const o=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,o)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const o=n._prev,r=n._next;return o&&(o._next=r),r&&(r._prev=o),n._next=null,n._prev=null,n}const n=new Mi(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Kr(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class Mi{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}let Li=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(null!=n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend IterableDiffers without a parent injector");return e.create(t,n)},deps:[[e,new se,new re]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n}}return e.\u0275prov=le({token:e,providedIn:"root",factory:()=>new e([new Pi])}),e})(),zi=(()=>{class e{constructor(e){this.factories=e}static create(t,n){if(n){const e=n.factories.slice();t=t.concat(e)}return new e(t)}static extend(t){return{provide:e,useFactory:n=>{if(!n)throw new Error("Cannot extend KeyValueDiffers without a parent injector");return e.create(t,n)},deps:[[e,new se,new re]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}return e.\u0275prov=le({token:e,providedIn:"root",factory:()=>new e([new $i])}),e})();const Ui=[new $i],Vi=new Li([new Pi]),Hi=new zi(Ui);let Bi=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>qi(e,xi),e})();const qi=function(e,t){return function(e,t,n,o){return wr||(wr=class extends e{constructor(e,t,n){super(),this._declarationView=e,this._declarationTContainer=t,this.elementRef=n}createEmbeddedView(e){const t=this._declarationTContainer.tViews,n=fo(this._declarationView,t,e,16,null,t.node);n[17]=this._declarationView[this._declarationTContainer.index];const o=this._declarationView[5];null!==o&&(n[5]=o.createEmbeddedView(t)),go(t,n,e);const r=new yr(n);return r._tViewNode=n[6],r}}),0===n.type?new wr(o,n,Sr(t,n,o)):null}(e,t,zt(),Ft())};let Wi=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>Qi(e,xi),e})();const Qi=function(e,t){return function(e,t,n,o){let r;xr||(xr=class extends e{constructor(e,t,n){super(),this._lContainer=e,this._hostTNode=t,this._hostView=n}get element(){return Sr(t,this._hostTNode,this._hostView)}get injector(){return new zn(this._hostTNode,this._hostView)}get parentInjector(){const e=Rn(this._hostTNode,this._hostView),t=wn(e,this._hostView),n=function(e,t,n){if(n.parent&&-1!==n.parent.injectorIndex){const e=n.parent.injectorIndex;let t=n.parent;for(;null!=t.parent&&e==t.parent.injectorIndex;)t=t.parent;return t}let o=vn(e),r=t,i=t[6];for(;o>1;)r=r[15],i=r[6],o--;return i}(e,this._hostView,this._hostTNode);return yn(e)&&null!=n?new zn(n,t):new zn(null,this._hostView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){return null!==this._lContainer[8]&&this._lContainer[8][e]||null}get length(){return this._lContainer.length-9}createEmbeddedView(e,t,n){const o=e.createEmbeddedView(t||{});return this.insert(o,n),o}createComponent(e,t,n,o,r){const i=n||this.parentInjector;if(!r&&null==e.ngModule&&i){const e=i.get(Ge,null);e&&(r=e)}const s=e.create(i,o,void 0,r);return this.insert(s.hostView,t),s}insert(e,t){const n=e._lView,o=n[1];if(e.destroyed)throw new Error("Cannot insert a destroyed View in a ViewContainer!");if(this.allocateContainerIfNeeded(),yt(n[3])){const t=this.indexOf(e);if(-1!==t)this.detach(t);else{const t=n[3],o=new xr(t,t[6],t[3]);o.detach(o.indexOf(e))}}const r=this._adjustIndex(t);return function(e,t,n,o){const r=9+o,i=n.length;o>0&&(n[r-1][4]=t),o<i-9?(t[4]=n[r],Xe(n,9+o,t)):(n.push(t),t[4]=null),t[3]=n;const s=t[17];null!==s&&n!==s&&function(e,t){const n=e[5],o=t[3][3][16];16!=(16&o[2])&&t[16]!==o&&(e[2]|=1),null===n?e[5]=[t]:n.push(t)}(s,t);const a=t[5];null!==a&&a.insertView(e),t[2]|=128}(o,n,this._lContainer,r),tr(o,n,!0,dr(r,this._lContainer)),e.attachToViewContainerRef(this),Xe(this._lContainer[8],r,e),e}move(e,t){if(e.destroyed)throw new Error("Cannot move a destroyed View in a ViewContainer!");return this.insert(e,t)}indexOf(e){const t=this._lContainer[8];return null!==t?t.indexOf(e):-1}remove(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1);(function(e,t){const n=or(e,t);n&&rr(n[1],n)})(this._lContainer,t),et(this._lContainer[8],t)}detach(e){this.allocateContainerIfNeeded();const t=this._adjustIndex(e,-1),n=or(this._lContainer,t);return n&&null!=et(this._lContainer[8],t)?new yr(n):null}_adjustIndex(e,t=0){return null==e?this.length+t:e}allocateContainerIfNeeded(){null===this._lContainer[8]&&(this._lContainer[8]=[])}});const i=o[n.index];if(yt(i))r=i,function(e,t){e[2]=-2}(r);else{let e;if(4===n.type)e=Ot(i);else if(e=o[11].createComment(""),St(o)){const t=o[11],r=Tt(n,o);ar(t,hr(t,r),e,function(e,t){return Et(e)?e.nextSibling(t):t.nextSibling}(t,r))}else ur(o[1],o,e,n);o[n.index]=r=Mo(i,o,e,n),Vo(o,r)}return new xr(r,n,o)}(e,t,zt(),Ft())},Ki={};class Zi extends wi{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){const t=pt(e);return new Ji(t,this.ngModule)}}function Gi(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}const Yi=new $e("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>kn});class Ji extends _i{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(io).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return Gi(this.componentDef.inputs)}get outputs(){return Gi(this.componentDef.outputs)}create(e,t,n,o){const r=(o=o||this.ngModule)?function(e,t){return{get:(n,o,r)=>{const i=e.get(n,Ki,r);return i!==Ki||o===Ki?i:t.get(n,o,r)}}}(e,o.injector):e,i=r.get(ki,Ct),s=r.get(Ci,null),a=i.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",l=n?function(e,t,n){if(Et(e))return e.selectRootElement(t,n===nt.ShadowDom);let o="string"==typeof t?e.querySelector(t):t;return o.textContent="",o}(a,n,this.componentDef.encapsulation):uo(c,i.createRenderer(null,this.componentDef),function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(c)),h=this.componentDef.onPush?576:528,u="string"==typeof n&&/^#root-ng-internal-isolated-\d+/.test(n),d={components:[],scheduler:kn,clean:Qo,playerHandler:null,flags:0},f=So(0,-1,null,1,0,null,null,null,null,null),p=fo(null,f,d,h,null,null,i,a,s,r);let g,m;Yt(p,null);try{const e=function(e,t,n,o,r,i){const s=n[1];n[19]=e;const a=po(s,null,0,3,null,null),c=a.mergedAttrs=t.hostAttrs;null!==c&&(qr(a,c),null!==e&&(fn(r,e,c),null!==a.classes&&br(r,e,a.classes),null!==a.styles&&mr(r,e,a.styles)));const l=o.createRenderer(e,t),h=fo(n,xo(t),null,t.onPush?64:16,n[19],a,o,l,void 0);return s.firstCreatePass&&(Nn(Pn(a,n),s,t.type),Ao(s,a),No(a,n.length,1)),Vo(n,h),n[19]=h}(l,this.componentDef,p,i,a);if(l)if(n)fn(a,l,["ng-version",Ti.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let o=1,r=2;for(;o<e.length;){let i=e[o];if("string"==typeof i)2===r?""!==i&&t.push(i,e[++o]):8===r&&n.push(i);else{if(!to(r))break;r=i}o++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&fn(a,l,e),t&&t.length>0&&br(a,l,t.join(" "))}m=Pt(p[1],0),t&&(m.projection=t.map(e=>Array.from(e))),g=function(e,t,n,o,r){const i=n[1],s=function(e,t,n){const o=zt();e.firstCreatePass&&(n.providersResolver&&n.providersResolver(n),jo(e,o,1),Io(e,t,n));const r=Fn(t,e,t.length-1,o);Kn(r,t);const i=Tt(o,t);return i&&Kn(i,t),r}(i,n,t);o.components.push(s),e[8]=s,r&&r.forEach(e=>e(s,t)),t.contentQueries&&t.contentQueries(1,s,n.length-1);const a=zt();if(i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){rn(a.index-19);const e=n[1];Oo(e,t),To(e,n,t.hostVars),Po(t,s)}return s}(e,this.componentDef,p,d,[yi]),go(f,p,null)}finally{nn()}const b=new Xi(this.componentType,g,Sr(xi,m,p),p,m);return n&&!u||(b.hostView._tViewNode.child=m),b}}class Xi extends class{}{constructor(e,t,n,o,r){super(),this.location=n,this._rootLView=o,this._tNode=r,this.destroyCbs=[],this.instance=t,this.hostView=this.changeDetectorRef=new _r(o),this.hostView._tViewNode=function(e,t,n,o){let r=e.node;return null==r&&(e.node=r=ko(0,null,2,-1,null,null)),o[6]=r}(o[1],0,0,o),this.componentType=e}get injector(){return new zn(this._tNode,this._rootLView)}destroy(){this.destroyCbs&&(this.destroyCbs.forEach(e=>e()),this.destroyCbs=null,!this.hostView.destroyed&&this.hostView.destroy())}onDestroy(e){this.destroyCbs&&this.destroyCbs.push(e)}}const es=void 0;var ts=["en",[["a","p"],["AM","PM"],es],[["AM","PM"],es,es],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],es,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],es,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",es,"{1} 'at' {0}",es],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function(e){let t=Math.floor(Math.abs(e)),n=e.toString().replace(/^[^.]*\.?/,"").length;return 1===t&&0===n?1:5}];let ns={};function os(e){return e in ns||(ns[e]=Te.ng&&Te.ng.common&&Te.ng.common.locales&&Te.ng.common.locales[e]),ns[e]}const rs=function(){var e={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};return e[e.LocaleId]="LocaleId",e[e.DayPeriodsFormat]="DayPeriodsFormat",e[e.DayPeriodsStandalone]="DayPeriodsStandalone",e[e.DaysFormat]="DaysFormat",e[e.DaysStandalone]="DaysStandalone",e[e.MonthsFormat]="MonthsFormat",e[e.MonthsStandalone]="MonthsStandalone",e[e.Eras]="Eras",e[e.FirstDayOfWeek]="FirstDayOfWeek",e[e.WeekendRange]="WeekendRange",e[e.DateFormat]="DateFormat",e[e.TimeFormat]="TimeFormat",e[e.DateTimeFormat]="DateTimeFormat",e[e.NumberSymbols]="NumberSymbols",e[e.NumberFormats]="NumberFormats",e[e.CurrencyCode]="CurrencyCode",e[e.CurrencySymbol]="CurrencySymbol",e[e.CurrencyName]="CurrencyName",e[e.Currencies]="Currencies",e[e.Directionality]="Directionality",e[e.PluralCase]="PluralCase",e[e.ExtraData]="ExtraData",e}();let is="en-US";function ss(e){var t,n;n="Expected localeId to be defined",null==(t=e)&&function(e,t,n,o){throw new Error(`ASSERTION ERROR: ${e}`+` [Expected=> null != ${t} <=Actual]`)}(n,t),"string"==typeof e&&(is=e.toLowerCase().replace(/_/g,"-"))}const as=new Map;class cs extends Ge{constructor(e,t){super(),this._parent=t,this._bootstrapComponents=[],this.injector=this,this.destroyCbs=[],this.componentFactoryResolver=new Zi(this);const n=mt(e),o=e[Ne]||null;o&&ss(o),this._bootstrapComponents=En(n.bootstrap),this._r3Injector=Nr(e,t,[{provide:Ge,useValue:this},{provide:wi,useValue:this.componentFactoryResolver}],_e(e)),this._r3Injector._resolveInjectorDefTypes(),this.instance=this.get(e)}get(e,t=zr.THROW_IF_NOT_FOUND,n=ae.Default){return e===zr||e===Ge||e===Fe?this:this._r3Injector.get(e,t,n)}destroy(){const e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}}class ls extends Ye{constructor(e){super(),this.moduleType=e,null!==mt(e)&&function e(t){if(null!==t.\u0275mod.id){const e=t.\u0275mod.id;(function(e,t,n){if(t&&t!==n)throw new Error(`Duplicate module registered for ${e} - ${_e(t)} vs ${_e(t.name)}`)})(e,as.get(e),t),as.set(e,t)}let n=t.\u0275mod.imports;n instanceof Function&&(n=n()),n&&n.forEach(t=>e(t))}(e)}create(e){return new cs(this.moduleType,e)}}function hs(e,t){const n=Mt();let o;const r=e+19;n.firstCreatePass?(o=function(e,t){if(t)for(let n=t.length-1;n>=0;n--){const o=t[n];if(e===o.name)return o}throw new Error(`The pipe '${e}' could not be found!`)}(t,n.pipeRegistry),n.data[r]=o,o.onDestroy&&(n.destroyHooks||(n.destroyHooks=[])).push(r,o.onDestroy)):o=n.data[r];const i=o.factory||(o.factory=gt(o.type)),s=Be(ti),a=i();return Be(s),function(e,t,n,o){const r=n+19;r>=e.data.length&&(e.data[r]=null,e.blueprint[r]=null),t[r]=o}(n,Ft(),e,a),a}function us(e,t,n){const o=Ft(),r=function(e,t){return e[t+19]}(o,e);return function(e,t){return Zr.isWrapped(t)&&(t=Zr.unwrap(t),e[Wt()]=so),t}(o,function(e,t){return e[1].data[t+19].pure}(o,e)?function(e,t,n,o,r,i){const s=t+n;return Jr(e,s,r)?function(e,t,n){return e[t]=n}(e,s+1,i?o.call(i,r):o(r)):function(e,t){const n=e[t];return n===so?void 0:n}(e,s+1)}(o,function(){const e=Dt.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}(),t,r.transform,n,r):r.transform(n))}class ds extends E{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){let o,r=e=>null,i=()=>null;e&&"object"==typeof e?(o=this.__isAsync?t=>{setTimeout(()=>e.next(t))}:t=>{e.next(t)},e.error&&(r=this.__isAsync?t=>{setTimeout(()=>e.error(t))}:t=>{e.error(t)}),e.complete&&(i=this.__isAsync?()=>{setTimeout(()=>e.complete())}:()=>{e.complete()})):(o=this.__isAsync?t=>{setTimeout(()=>e(t))}:t=>{e(t)},t&&(r=this.__isAsync?e=>{setTimeout(()=>t(e))}:e=>{t(e)}),n&&(i=this.__isAsync?()=>{setTimeout(()=>n())}:()=>{n()}));const s=super.subscribe(o,r,i);return e instanceof u&&e.add(s),s}}const fs=new $e("Application Initializer");let ps=(()=>{class e{constructor(e){this.appInits=e,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let n=0;n<this.appInits.length;n++){const t=this.appInits[n]();li(t)&&e.push(t)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}return e.\u0275fac=function(t){return new(t||e)(We(fs,8))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();const gs=new $e("AppId"),ms={provide:gs,useFactory:function(){return`${bs()}${bs()}${bs()}`},deps:[]};function bs(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const ys=new $e("Platform Initializer"),_s=new $e("Platform ID"),vs=new $e("appBootstrapListener");let ws=(()=>{class e{log(e){console.log(e)}warn(e){console.warn(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();const xs=new $e("LocaleId"),Ss=new $e("DefaultCurrencyCode");class ks{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}}const Es=function(e){return new ls(e)},Cs=Es,Os=function(e){return Promise.resolve(Es(e))},Ts=function(e){const t=Es(e),n=En(mt(e).declarations).reduce((e,t)=>{const n=pt(t);return n&&e.push(new Ji(n)),e},[]);return new ks(t,n)},Ps=Ts,js=function(e){return Promise.resolve(Ts(e))};let As=(()=>{class e{constructor(){this.compileModuleSync=Cs,this.compileModuleAsync=Os,this.compileModuleAndAllComponentsSync=Ps,this.compileModuleAndAllComponentsAsync=js}clearCache(){}clearCacheFor(e){}getModuleId(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();const Rs=new $e("compilerOptions"),Ns=(()=>Promise.resolve(0))();function Is(e){"undefined"==typeof Zone?Ns.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}class Ds{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new ds(!1),this.onMicrotaskEmpty=new ds(!1),this.onStable=new ds(!1),this.onError=new ds(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched(),this._nesting=0,this._outer=this._inner=Zone.current,Zone.wtfZoneSpec&&(this._inner=this._inner.fork(Zone.wtfZoneSpec)),Zone.TaskTrackingZoneSpec&&(this._inner=this._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(this._inner=this._inner.fork(Zone.longStackTraceZoneSpec)),this.shouldCoalesceEventChangeDetection=t,this.lastRequestAnimationFrameId=-1,this.nativeRequestAnimationFrame=function(){let e=Te.requestAnimationFrame,t=Te.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const o=t[Zone.__symbol__("OriginalDelegate")];o&&(t=o)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=!!e.shouldCoalesceEventChangeDetection&&e.nativeRequestAnimationFrame&&(()=>{!function(e){-1===e.lastRequestAnimationFrameId&&(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(Te,()=>{e.lastRequestAnimationFrameId=-1,Ls(e),Ms(e)}),Ls(e))}(e)});e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0,maybeDelayChangeDetection:t},onInvokeTask:(n,o,r,i,s,a)=>{try{return zs(e),n.invokeTask(r,i,s,a)}finally{t&&"eventTask"===i.type&&t(),Us(e)}},onInvoke:(t,n,o,r,i,s,a)=>{try{return zs(e),t.invoke(o,r,i,s,a)}finally{Us(e)}},onHasTask:(t,n,o,r)=>{t.hasTask(o,r),n===o&&("microTask"==r.change?(e._hasPendingMicrotasks=r.microTask,Ls(e),Ms(e)):"macroTask"==r.change&&(e.hasPendingMacrotasks=r.macroTask))},onHandleError:(t,n,o,r)=>(t.handleError(o,r),e.runOutsideAngular(()=>e.onError.emit(r)),!1)})}(this)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Ds.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(Ds.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,o){const r=this._inner,i=r.scheduleEventTask("NgZoneEvent: "+o,e,Fs,$s,$s);try{return r.runTask(i,t,n)}finally{r.cancelTask(i)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}function $s(){}const Fs={};function Ms(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Ls(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||e.shouldCoalesceEventChangeDetection&&-1!==e.lastRequestAnimationFrameId)}function zs(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function Us(e){e._nesting--,Ms(e)}class Vs{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new ds,this.onMicrotaskEmpty=new ds,this.onStable=new ds,this.onError=new ds}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,o){return e.apply(t,n)}}let Hs=(()=>{class e{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Ds.assertNotInAngularZone(),Is(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())Is(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let o=-1;t&&t>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==o),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}return e.\u0275fac=function(t){return new(t||e)(We(Ds))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})(),Bs=(()=>{class e{constructor(){this._applications=new Map,Qs.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return Qs.findTestabilityInTree(this,e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();class qs{addToWindow(e){}findTestabilityInTree(e,t,n){return null}}let Ws,Qs=new qs,Ks=function(e,t,n){const o=e.get(Rs,[]).concat(t),r=new ls(n);if(0===Vr.size)return Promise.resolve(r);const i=function(e){const t=[];return e.forEach(e=>e&&t.push(...e)),t}(o.map(e=>e.providers));if(0===i.length)return Promise.resolve(r);const s=function(){const e=Te.ng;if(!e||!e.\u0275compilerFacade)throw new Error("Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping.");return e.\u0275compilerFacade}(),a=zr.create({providers:i}).get(s.ResourceLoader);return function(e){const t=[],n=new Map;function o(e){let t=n.get(e);if(!t){const o=(e=>Promise.resolve(a.get(e)))(e);n.set(e,t=o.then(Br))}return t}return Vr.forEach((e,n)=>{const r=[];e.templateUrl&&r.push(o(e.templateUrl).then(t=>{e.template=t}));const i=e.styleUrls,s=e.styles||(e.styles=[]),a=e.styles.length;i&&i.forEach((t,n)=>{s.push(""),r.push(o(t).then(o=>{s[a+n]=o,i.splice(i.indexOf(t),1),0==i.length&&(e.styleUrls=void 0)}))});const c=Promise.all(r).then(()=>function(e){Hr.delete(e)}(n));t.push(c)}),Vr=new Map,Promise.all(t).then(()=>{})}().then(()=>r)};const Zs=new $e("AllowMultipleToken");class Gs{constructor(e,t){this.name=e,this.token=t}}function Ys(e,t,n=[]){const o=`Platform: ${t}`,r=new $e(o);return(t=[])=>{let i=Js();if(!i||i.injector.get(Zs,!1))if(e)e(n.concat(t).concat({provide:r,useValue:!0}));else{const e=n.concat(t).concat({provide:r,useValue:!0},{provide:Or,useValue:"platform"});!function(e){if(Ws&&!Ws.destroyed&&!Ws.injector.get(Zs,!1))throw new Error("There can be only one platform. Destroy the previous one to create a new one.");Ws=e.get(Xs);const t=e.get(ys,null);t&&t.forEach(e=>e())}(zr.create({providers:e,name:o}))}return function(e){const t=Js();if(!t)throw new Error("No platform exists!");if(!t.injector.get(e,null))throw new Error("A platform with a different configuration has been created. Please destroy it first.");return t}(r)}}function Js(){return Ws&&!Ws.destroyed?Ws:null}let Xs=(()=>{class e{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;return n="noop"===e?new Vs:("zone.js"===e?void 0:e)||new Ds({enableLongStackTrace:Qn(),shouldCoalesceEventChangeDetection:t}),n}(t?t.ngZone:void 0,t&&t.ngZoneEventCoalescing||!1),o=[{provide:Ds,useValue:n}];return n.run(()=>{const t=zr.create({providers:o,parent:this.injector,name:e.moduleType.name}),r=e.create(t),i=r.injector.get(Bn,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return r.onDestroy(()=>na(this._modules,r)),n.runOutsideAngular(()=>n.onError.subscribe({next:e=>{i.handleError(e)}})),function(e,t,n){try{const o=n();return li(o)?o.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):o}catch(o){throw t.runOutsideAngular(()=>e.handleError(o)),o}}(i,n,()=>{const e=r.injector.get(ps);return e.runInitializers(),e.donePromise.then(()=>(ss(r.injector.get(xs,"en-US")||"en-US"),this._moduleDoBootstrap(r),r))})})}bootstrapModule(e,t=[]){const n=ea({},t);return Ks(this.injector,n,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(ta);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${_e(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. `+"Please define one of these.");e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(t){return new(t||e)(We(zr))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();function ea(e,t){return Array.isArray(t)?t.reduce(ea,e):Object.assign(Object.assign({},e),t)}let ta=(()=>{class e{constructor(e,t,n,o,r,i){this._zone=e,this._console=t,this._injector=n,this._exceptionHandler=o,this._componentFactoryResolver=r,this._initStatus=i,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._enforceNoNewChanges=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._enforceNoNewChanges=Qn(),this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const s=new v(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),a=new v(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{Ds.assertNotInAngularZone(),Is(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{Ds.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=function(...e){let t=Number.POSITIVE_INFINITY,n=null,o=e[e.length-1];return O(o)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof o&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof v?e[0]:W(t)(Q(e,n))}(s,a.pipe(e=>{return K()((t=ee,function(e){let n;n="function"==typeof t?t:function(){return t};const o=Object.create(e,J);return o.source=e,o.subjectFactory=n,o})(e));var t}))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof _i?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const o=n.isBoundToModule?void 0:this._injector.get(Ge),r=n.create(zr.NULL,[],t||n.selector,o);r.onDestroy(()=>{this._unloadComponent(r)});const i=r.injector.get(Hs,null);return i&&r.injector.get(Bs).registerApplication(r.location.nativeElement,i),this._loadComponent(r),Qn()&&this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."),r}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(this._enforceNoNewChanges)for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;na(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e),this._injector.get(vs,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}_unloadComponent(e){this.detachView(e.hostView),na(this.components,e)}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy())}get viewCount(){return this._views.length}}return e.\u0275fac=function(t){return new(t||e)(We(Ds),We(ws),We(zr),We(Bn),We(wi),We(ps))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();function na(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class oa{}class ra{}const ia={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};let sa=(()=>{class e{constructor(e,t){this._compiler=e,this._config=t||ia}load(e){return this.loadAndCompile(e)}loadAndCompile(e){let[t,o]=e.split("#");return void 0===o&&(o="default"),n("zn8P")(t).then(e=>e[o]).then(e=>aa(e,t,o)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,o]=e.split("#"),r="NgFactory";return void 0===o&&(o="default",r=""),n("zn8P")(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[o+r]).then(e=>aa(e,t,o))}}return e.\u0275fac=function(t){return new(t||e)(We(As),We(ra,8))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();function aa(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}const ca=Ys(null,"core",[{provide:_s,useValue:"unknown"},{provide:Xs,deps:[zr]},{provide:Bs,deps:[]},{provide:ws,deps:[]}]),la=[{provide:ta,useClass:ta,deps:[Ds,ws,zr,Bn,wi,ps]},{provide:Yi,deps:[Ds],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}},{provide:ps,useClass:ps,deps:[[new re,fs]]},{provide:As,useClass:As,deps:[]},ms,{provide:Li,useFactory:function(){return Vi},deps:[]},{provide:zi,useFactory:function(){return Hi},deps:[]},{provide:xs,useFactory:function(e){return ss(e=e||"undefined"!=typeof $localize&&$localize.locale||"en-US"),e},deps:[[new oe(xs),new re,new se]]},{provide:Ss,useValue:"USD"}];let ha=(()=>{class e{constructor(e){}}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)(We(ta))},providers:la}),e})(),ua=null;function da(){return ua}const fa=new $e("DocumentToken");let pa=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({factory:ga,token:e,providedIn:"platform"}),e})();function ga(){return We(ba)}const ma=new $e("Location Initialized");let ba=(()=>{class e extends pa{constructor(e){super(),this._doc=e,this._init()}_init(){this.location=da().getLocation(),this._history=da().getHistory()}getBaseHrefFromDOM(){return da().getBaseHref(this._doc)}onPopState(e){da().getGlobalEventTarget(this._doc,"window").addEventListener("popstate",e,!1)}onHashChange(e){da().getGlobalEventTarget(this._doc,"window").addEventListener("hashchange",e,!1)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(e){this.location.pathname=e}pushState(e,t,n){ya()?this._history.pushState(e,t,n):this.location.hash=n}replaceState(e,t,n){ya()?this._history.replaceState(e,t,n):this.location.hash=n}forward(){this._history.forward()}back(){this._history.back()}getState(){return this._history.state}}return e.\u0275fac=function(t){return new(t||e)(We(fa))},e.\u0275prov=le({factory:_a,token:e,providedIn:"platform"}),e})();function ya(){return!!window.history.pushState}function _a(){return new ba(We(fa))}function va(e,t){if(0==e.length)return t;if(0==t.length)return e;let n=0;return e.endsWith("/")&&n++,t.startsWith("/")&&n++,2==n?e+t.substring(1):1==n?e+t:e+"/"+t}function wa(e){const t=e.match(/#|\?|$/),n=t&&t.index||e.length;return e.slice(0,n-("/"===e[n-1]?1:0))+e.slice(n)}function xa(e){return e&&"?"!==e[0]?"?"+e:e}let Sa=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({factory:ka,token:e,providedIn:"root"}),e})();function ka(e){const t=We(fa).location;return new Ca(We(pa),t&&t.origin||"")}const Ea=new $e("appBaseHref");let Ca=(()=>{class e extends Sa{constructor(e,t){if(super(),this._platformLocation=e,null==t&&(t=this._platformLocation.getBaseHrefFromDOM()),null==t)throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");this._baseHref=t}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return va(this._baseHref,e)}path(e=!1){const t=this._platformLocation.pathname+xa(this._platformLocation.search),n=this._platformLocation.hash;return n&&e?`${t}${n}`:t}pushState(e,t,n,o){const r=this.prepareExternalUrl(n+xa(o));this._platformLocation.pushState(e,t,r)}replaceState(e,t,n,o){const r=this.prepareExternalUrl(n+xa(o));this._platformLocation.replaceState(e,t,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(We(pa),We(Ea,8))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})(),Oa=(()=>{class e extends Sa{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",null!=t&&(this._baseHref=t)}onPopState(e){this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e)}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash;return null==t&&(t="#"),t.length>0?t.substring(1):t}prepareExternalUrl(e){const t=va(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,n,o){let r=this.prepareExternalUrl(n+xa(o));0==r.length&&(r=this._platformLocation.pathname),this._platformLocation.pushState(e,t,r)}replaceState(e,t,n,o){let r=this.prepareExternalUrl(n+xa(o));0==r.length&&(r=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,r)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}}return e.\u0275fac=function(t){return new(t||e)(We(pa),We(Ea,8))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})(),Ta=(()=>{class e{constructor(e,t){this._subject=new ds,this._urlChangeListeners=[],this._platformStrategy=e;const n=this._platformStrategy.getBaseHref();this._platformLocation=t,this._baseHref=wa(ja(n)),this._platformStrategy.onPopState(e=>{this._subject.emit({url:this.path(!0),pop:!0,state:e.state,type:e.type})})}path(e=!1){return this.normalize(this._platformStrategy.path(e))}getState(){return this._platformLocation.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+xa(t))}normalize(t){return e.stripTrailingSlash(function(e,t){return e&&t.startsWith(e)?t.substring(e.length):t}(this._baseHref,ja(t)))}prepareExternalUrl(e){return e&&"/"!==e[0]&&(e="/"+e),this._platformStrategy.prepareExternalUrl(e)}go(e,t="",n=null){this._platformStrategy.pushState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xa(t)),n)}replaceState(e,t="",n=null){this._platformStrategy.replaceState(n,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+xa(t)),n)}forward(){this._platformStrategy.forward()}back(){this._platformStrategy.back()}onUrlChange(e){this._urlChangeListeners.push(e),this.subscribe(e=>{this._notifyUrlChangeListeners(e.url,e.state)})}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(n=>n(e,t))}subscribe(e,t,n){return this._subject.subscribe({next:e,error:t,complete:n})}}return e.\u0275fac=function(t){return new(t||e)(We(Sa),We(pa))},e.normalizeQueryParams=xa,e.joinWithSlash=va,e.stripTrailingSlash=wa,e.\u0275prov=le({factory:Pa,token:e,providedIn:"root"}),e})();function Pa(){return new Ta(We(Sa),We(pa))}function ja(e){return e.replace(/\/index.html$/,"")}const Aa=function(){var e={Zero:0,One:1,Two:2,Few:3,Many:4,Other:5};return e[e.Zero]="Zero",e[e.One]="One",e[e.Two]="Two",e[e.Few]="Few",e[e.Many]="Many",e[e.Other]="Other",e}();class Ra{}let Na=(()=>{class e extends Ra{constructor(e){super(),this.locale=e}getPluralCategory(e,t){switch(function(e){return function(e){const t=function(e){return e.toLowerCase().replace(/_/g,"-")}(e);let n=os(t);if(n)return n;const o=t.split("-")[0];if(n=os(o),n)return n;if("en"===o)return ts;throw new Error(`Missing locale data for the locale "${e}".`)}(e)[rs.PluralCase]}(t||this.locale)(e)){case Aa.Zero:return"zero";case Aa.One:return"one";case Aa.Two:return"two";case Aa.Few:return"few";case Aa.Many:return"many";default:return"other"}}}return e.\u0275fac=function(t){return new(t||e)(We(xs))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();class Ia{constructor(e,t,n,o){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=o}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Da=(()=>{class e{constructor(e,t,n){this._viewContainer=e,this._template=t,this._differs=n,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){Qn()&&null!=e&&"function"!=typeof e&&console&&console.warn&&console.warn(`trackBy must be a function, but received ${JSON.stringify(e)}. `+"See https://angular.io/api/common/NgForOf#change-propagation for more information."),this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const n=this._ngForOf;if(!this._differ&&n)try{this._differ=this._differs.find(n).create(this.ngForTrackBy)}catch(t){throw new Error(`Cannot find a differ supporting object '${n}' of type '${e=n,e.name||typeof e}'. NgFor only supports binding to Iterables such as Arrays.`)}}var e;if(this._differ){const e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){const t=[];e.forEachOperation((e,n,o)=>{if(null==e.previousIndex){const n=this._viewContainer.createEmbeddedView(this._template,new Ia(null,this._ngForOf,-1,-1),null===o?void 0:o),r=new $a(e,n);t.push(r)}else if(null==o)this._viewContainer.remove(null===n?void 0:n);else if(null!==n){const r=this._viewContainer.get(n);this._viewContainer.move(r,o);const i=new $a(e,r);t.push(i)}});for(let n=0;n<t.length;n++)this._perViewChange(t[n].view,t[n].record);for(let n=0,o=this._viewContainer.length;n<o;n++){const e=this._viewContainer.get(n);e.context.index=n,e.context.count=o,e.context.ngForOf=this._ngForOf}e.forEachIdentityChange(e=>{this._viewContainer.get(e.currentIndex).context.$implicit=e.item})}_perViewChange(e,t){e.context.$implicit=t.item}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(ti(Wi),ti(Bi),ti(Li))},e.\u0275dir=dt({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}}),e})();class $a{constructor(e,t){this.record=e,this.view=t}}let Fa=(()=>{class e{constructor(e,t){this._viewContainer=e,this._context=new Ma,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=t}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){La("ngIfThen",e),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){La("ngIfElse",e),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(e,t){return!0}}return e.\u0275fac=function(t){return new(t||e)(ti(Wi),ti(Bi))},e.\u0275dir=dt({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}}),e})();class Ma{constructor(){this.$implicit=null,this.ngIf=null}}function La(e,t){if(t&&!t.createEmbeddedView)throw new Error(`${e} must be a TemplateRef, but received '${_e(t)}'.`)}class za{createSubscription(e,t){return e.subscribe({next:t,error:e=>{throw e}})}dispose(e){e.unsubscribe()}onDestroy(e){e.unsubscribe()}}class Ua{createSubscription(e,t){return e.then(t,e=>{throw e})}dispose(e){}onDestroy(e){}}const Va=new Ua,Ha=new za;let Ba=(()=>{class e{constructor(e){this._ref=e,this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null,this._strategy=null}ngOnDestroy(){this._subscription&&this._dispose()}transform(e){return this._obj?e!==this._obj?(this._dispose(),this.transform(e)):Kr(this._latestValue,this._latestReturnedValue)?this._latestReturnedValue:(this._latestReturnedValue=this._latestValue,Zr.wrap(this._latestValue)):(e&&this._subscribe(e),this._latestReturnedValue=this._latestValue,this._latestValue)}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(t){if(li(t))return Va;if(hi(t))return Ha;throw Error(`InvalidPipeArgument: '${t}' for pipe '${_e(e)}'`)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._latestReturnedValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this._ref.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(function(e=ae.Default){const t=kr(!0);if(null!=t||e&ae.Optional)return t;throw new Error("No provider for ChangeDetectorRef!")}())},e.\u0275pipe=ft({name:"async",type:e,pure:!1}),e})(),qa=(()=>{class e{transform(e){return JSON.stringify(e,null,2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=ft({name:"json",type:e,pure:!1}),e})(),Wa=(()=>{class e{}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)},providers:[{provide:Ra,useClass:Na}]}),e})(),Qa=(()=>{class e{}return e.\u0275prov=le({token:e,providedIn:"root",factory:()=>new Ka(We(fa),window,We(Bn))}),e})();class Ka{constructor(e,t,n){this.document=e,this.window=t,this.errorHandler=n,this.offset=()=>[0,0]}setOffset(e){this.offset=Array.isArray(e)?()=>e:e}getScrollPosition(){return this.supportScrollRestoration()?[this.window.scrollX,this.window.scrollY]:[0,0]}scrollToPosition(e){this.supportScrollRestoration()&&this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){if(this.supportScrollRestoration()){e=this.window.CSS&&this.window.CSS.escape?this.window.CSS.escape(e):e.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g,"\\$1");try{const t=this.document.querySelector(`#${e}`);if(t)return void this.scrollToElement(t);const n=this.document.querySelector(`[name='${e}']`);if(n)return void this.scrollToElement(n)}catch(t){this.errorHandler.handleError(t)}}}setHistoryScrollRestoration(e){if(this.supportScrollRestoration()){const t=this.window.history;t&&t.scrollRestoration&&(t.scrollRestoration=e)}}scrollToElement(e){const t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,o=t.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(n-r[0],o-r[1])}supportScrollRestoration(){try{return!!this.window&&!!this.window.scrollTo}catch(e){return!1}}}class Za extends class extends class{}{constructor(){super()}supportsDOMEvents(){return!0}}{static makeCurrent(){var e;e=new Za,ua||(ua=e)}getProperty(e,t){return e[t]}log(e){window.console&&window.console.log&&window.console.log(e)}logGroup(e){window.console&&window.console.group&&window.console.group(e)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){return e.parentNode&&e.parentNode.removeChild(e),e}getValue(e){return e.value}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(e){const t=Ya||(Ya=document.querySelector("base"),Ya)?Ya.getAttribute("href"):null;return null==t?null:(n=t,Ga||(Ga=document.createElement("a")),Ga.setAttribute("href",n),"/"===Ga.pathname.charAt(0)?Ga.pathname:"/"+Ga.pathname);var n}resetBaseElement(){Ya=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(e){return function(e,t){t=encodeURIComponent(t);for(const n of e.split(";")){const e=n.indexOf("="),[o,r]=-1==e?[n,""]:[n.slice(0,e),n.slice(e+1)];if(o.trim()===t)return decodeURIComponent(r)}return null}(document.cookie,e)}}let Ga,Ya=null;const Ja=new $e("TRANSITION_ID"),Xa=[{provide:fs,useFactory:function(e,t,n){return()=>{n.get(ps).donePromise.then(()=>{const n=da();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[Ja,fa,zr],multi:!0}];class ec{static init(){var e;e=new ec,Qs=e}addToWindow(e){Te.getAngularTestability=(t,n=!0)=>{const o=e.findTestabilityInTree(t,n);if(null==o)throw new Error("Could not find testability for element.");return o},Te.getAllAngularTestabilities=()=>e.getAllTestabilities(),Te.getAllAngularRootElements=()=>e.getAllRootElements(),Te.frameworkStabilizers||(Te.frameworkStabilizers=[]),Te.frameworkStabilizers.push(e=>{const t=Te.getAllAngularTestabilities();let n=t.length,o=!1;const r=function(t){o=o||t,n--,0==n&&e(o)};t.forEach((function(e){e.whenStable(r)}))})}findTestabilityInTree(e,t,n){if(null==t)return null;const o=e.getTestability(t);return null!=o?o:n?da().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}const tc=new $e("EventManagerPlugins");let nc=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let o=0;o<n.length;o++){const t=n[o];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(We(tc),We(Ds))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();class oc{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const o=da().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${t}`);return this.addEventListener(o,t,n)}}let rc=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})(),ic=(()=>{class e extends rc{constructor(e){super(),this._doc=e,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(e.head)}_addStylesToHost(e,t){e.forEach(e=>{const n=this._doc.createElement("style");n.textContent=e,this._styleNodes.add(t.appendChild(n))})}addHost(e){this._addStylesToHost(this._stylesSet,e),this._hostNodes.add(e)}removeHost(e){this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach(t=>this._addStylesToHost(e,t))}ngOnDestroy(){this._styleNodes.forEach(e=>da().remove(e))}}return e.\u0275fac=function(t){return new(t||e)(We(fa))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();const sc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},ac=/%COMP%/g;function cc(e,t,n){for(let o=0;o<t.length;o++){let r=t[o];Array.isArray(r)?cc(e,r,n):(r=r.replace(ac,e),n.push(r))}return n}function lc(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let hc=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new uc(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case nt.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new dc(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case nt.Native:case nt.ShadowDom:return new fc(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=cc(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(We(nc),We(ic),We(gs))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();class uc{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(sc[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,o){if(o){t=o+":"+t;const r=sc[o];r?e.setAttributeNS(r,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const o=sc[n];o?e.removeAttributeNS(o,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,o){o&Ei.DashCase?e.style.setProperty(t,n,o&Ei.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Ei.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,lc(n)):this.eventManager.addEventListener(e,t,lc(n))}}class dc extends uc{constructor(e,t,n,o){super(e),this.component=n;const r=cc(o+"-"+n.id,n.styles,[]);t.addStyles(r),this.contentAttr="_ngcontent-%COMP%".replace(ac,o+"-"+n.id),this.hostAttr=function(e){return"_nghost-%COMP%".replace(ac,e)}(o+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class fc extends uc{constructor(e,t,n,o){super(e),this.sharedStylesHost=t,this.hostEl=n,this.component=o,this.shadowRoot=o.encapsulation===nt.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const r=cc(o.id,o.styles,[]);for(let i=0;i<r.length;i++){const e=document.createElement("style");e.textContent=r[i],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let pc=(()=>{class e extends oc{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(We(fa))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();const gc=["alt","control","meta","shift"],mc={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bc={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},yc={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let _c=(()=>{class e extends oc{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,o){const r=e.parseEventName(n),i=e.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>da().onAndCancel(t,r.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),o=n.shift();if(0===n.length||"keydown"!==o&&"keyup"!==o)return null;const r=e._normalizeKey(n.pop());let i="";if(gc.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),i+=e+".")}),i+=r,0!=n.length||0===r.length)return null;const s={};return s.domEventName=o,s.fullKey=i,s}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&bc.hasOwnProperty(t)&&(t=bc[t]))}return mc[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),gc.forEach(o=>{o!=n&&(0,yc[o])(e)&&(t+=o+".")}),t+=n,t}static eventCallback(t,n,o){return r=>{e.getEventFullKey(r)===t&&o.runGuarded(()=>n(r))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(We(fa))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();const vc=Ys(ca,"browser",[{provide:_s,useValue:"browser"},{provide:ys,useValue:function(){Za.makeCurrent(),ec.init()},multi:!0},{provide:fa,useFactory:function(){return function(e){kt=e}(document),document},deps:[]}]),wc=[[],{provide:Or,useValue:"root"},{provide:Bn,useFactory:function(){return new Bn},deps:[]},{provide:tc,useClass:pc,multi:!0,deps:[fa,Ds,_s]},{provide:tc,useClass:_c,multi:!0,deps:[fa]},[],{provide:hc,useClass:hc,deps:[nc,ic,gs]},{provide:ki,useExisting:hc},{provide:rc,useExisting:ic},{provide:ic,useClass:ic,deps:[fa]},{provide:Hs,useClass:Hs,deps:[Ds]},{provide:nc,useClass:nc,deps:[tc,Ds]},[]];let xc=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:gs,useValue:t.appId},{provide:Ja,useExisting:gs},Xa]}}}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)(We(e,12))},providers:wc,imports:[Wa,ha]}),e})();"undefined"!=typeof window&&window;const Sc={};function kc(...e){let t=null,n=null;return O(e[e.length-1])&&(n=e.pop()),"function"==typeof e[e.length-1]&&(t=e.pop()),1===e.length&&c(e[0])&&(e=e[0]),Q(e,n).lift(new Ec(t))}class Ec{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new Cc(e,this.resultSelector))}}class Cc extends ${constructor(e,t){super(e),this.resultSelector=t,this.active=0,this.values=[],this.observables=[]}_next(e){this.values.push(Sc),this.observables.push(e)}_complete(){const e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(let n=0;n<t;n++){const t=e[n];this.add(D(this,t,t,n))}}}notifyComplete(e){0==(this.active-=1)&&this.destination.complete()}notifyNext(e,t,n,o,r){const i=this.values,s=this.toRespond?i[n]===Sc?--this.toRespond:this.toRespond:0;i[n]=t,0===s&&(this.resultSelector?this._tryResultSelector(i):this.destination.next(i.slice()))}_tryResultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}function Oc(e){return t=>t.lift(new Tc(e))}class Tc{constructor(e){this.notifier=e}call(e,t){const n=new Pc(e),o=D(n,this.notifier);return o&&!n.seenValue?(n.add(o),t.subscribe(n)):n}}class Pc extends ${constructor(e){super(e),this.seenValue=!1}notifyNext(e,t,n,o,r){this.seenValue=!0,this.complete()}notifyComplete(){}}class jc extends u{constructor(e,t){super()}schedule(e,t=0){return this}}class Ac extends jc{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){if(this.closed)return this;this.state=e;const n=this.id,o=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(o,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(o,this.id,t),this}requestAsyncId(e,t,n=0){return setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,o=void 0;try{this.work(e)}catch(r){n=!0,o=!!r&&r||new Error(r)}if(n)return this.unsubscribe(),o}_unsubscribe(){const e=this.id,t=this.scheduler,n=t.actions,o=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==o&&n.splice(o,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null}}class Rc extends Ac{constructor(e,t){super(e,t),this.scheduler=e,this.work=t}schedule(e,t=0){return t>0?super.schedule(e,t):(this.delay=t,this.state=e,this.scheduler.flush(this),this)}execute(e,t){return t>0||this.closed?super.execute(e,t):this._execute(e,t)}requestAsyncId(e,t,n=0){return null!==n&&n>0||null===n&&this.delay>0?super.requestAsyncId(e,t,n):e.flush(this)}}let Nc=(()=>{class e{constructor(t,n=e.now){this.SchedulerAction=t,this.now=n}schedule(e,t=0,n){return new this.SchedulerAction(this,e).schedule(n,t)}}return e.now=()=>Date.now(),e})();class Ic extends Nc{constructor(e,t=Nc.now){super(e,()=>Ic.delegate&&Ic.delegate!==this?Ic.delegate.now():t()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(e,t=0,n){return Ic.delegate&&Ic.delegate!==this?Ic.delegate.schedule(e,t,n):super.schedule(e,t,n)}flush(e){const{actions:t}=this;if(this.active)return void t.push(e);let n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}}class Dc extends Ic{}const $c=new Dc(Rc),Fc=new v(e=>e.complete());function Mc(e){return e?function(e){return new v(t=>e.schedule(()=>t.complete()))}(e):Fc}function Lc(...e){let t=e[e.length-1];return O(t)?(e.pop(),z(e,t)):Q(e)}let zc=(()=>{class e{constructor(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}observe(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}do(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}accept(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}toObservable(){switch(this.kind){case"N":return Lc(this.value);case"E":return e=this.error,new v(t=>t.error(e));case"C":return Mc()}var e;throw new Error("unexpected notification kind value")}static createNext(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}static createError(t){return new e("E",void 0,t)}static createComplete(){return e.completeNotification}}return e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e})();class Uc extends p{constructor(e,t,n=0){super(e),this.scheduler=t,this.delay=n}static dispatch(e){const{notification:t,destination:n}=e;t.observe(n),this.unsubscribe()}scheduleMessage(e){this.destination.add(this.scheduler.schedule(Uc.dispatch,this.delay,new Vc(e,this.destination)))}_next(e){this.scheduleMessage(zc.createNext(e))}_error(e){this.scheduleMessage(zc.createError(e)),this.unsubscribe()}_complete(){this.scheduleMessage(zc.createComplete()),this.unsubscribe()}}class Vc{constructor(e,t){this.notification=e,this.destination=t}}class Hc extends E{constructor(e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n){super(),this.scheduler=n,this._events=[],this._infiniteTimeWindow=!1,this._bufferSize=e<1?1:e,this._windowTime=t<1?1:t,t===Number.POSITIVE_INFINITY?(this._infiniteTimeWindow=!0,this.next=this.nextInfiniteTimeWindow):this.next=this.nextTimeWindow}nextInfiniteTimeWindow(e){const t=this._events;t.push(e),t.length>this._bufferSize&&t.shift(),super.next(e)}nextTimeWindow(e){this._events.push(new Bc(this._getNow(),e)),this._trimBufferThenGetEvents(),super.next(e)}_subscribe(e){const t=this._infiniteTimeWindow,n=t?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,r=n.length;let i;if(this.closed)throw new x;if(this.isStopped||this.hasError?i=u.EMPTY:(this.observers.push(e),i=new S(this,e)),o&&e.add(e=new Uc(e,o)),t)for(let s=0;s<r&&!e.closed;s++)e.next(n[s]);else for(let s=0;s<r&&!e.closed;s++)e.next(n[s].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),i}_getNow(){return(this.scheduler||$c).now()}_trimBufferThenGetEvents(){const e=this._getNow(),t=this._bufferSize,n=this._windowTime,o=this._events,r=o.length;let i=0;for(;i<r&&!(e-o[i].time<n);)i++;return r>t&&(i=Math.max(i,r-t)),i>0&&o.splice(0,i),o}}class Bc{constructor(e,t){this.time=e,this.value=t}}class qc{constructor(e,t,n){this.type=e,this.position=t,this.value=n}}var Wc=function(e){return e[e.ADD=0]="ADD",e[e.UPDATE=1]="UPDATE",e[e.DELETE=2]="DELETE",e}({});function Qc(e,t){return function(n){return n.lift(new Kc(e,t))}}class Kc{constructor(e,t){this.predicate=e,this.thisArg=t}call(e,t){return t.subscribe(new Zc(e,this.predicate,this.thisArg))}}class Zc extends p{constructor(e,t,n){super(e),this.predicate=t,this.thisArg=n,this.count=0}_next(e){let t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(n){return void this.destination.error(n)}t&&this.destination.next(e)}}var Gc=n("AEcS");const Yc={url:"",deserializer:e=>JSON.parse(e.data),serializer:e=>JSON.stringify(e)};class Jc extends C{constructor(e,t){if(super(),e instanceof v)this.destination=t,this.source=e;else{const t=this._config=Object.assign({},Yc);if(this._output=new E,"string"==typeof e)t.url=e;else for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);if(!t.WebSocketCtor&&WebSocket)t.WebSocketCtor=WebSocket;else if(!t.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new Hc}}lift(e){const t=new Jc(this._config,this.destination);return t.operator=e,t.source=this,t}_resetState(){this._socket=null,this.source||(this.destination=new Hc),this._output=new E}multiplex(e,t,n){const o=this;return new v(r=>{try{o.next(e())}catch(s){r.error(s)}const i=o.subscribe(e=>{try{n(e)&&r.next(e)}catch(s){r.error(s)}},e=>r.error(e),()=>r.complete());return()=>{try{o.next(t())}catch(s){r.error(s)}i.unsubscribe()}})}_connectSocket(){const{WebSocketCtor:e,protocol:t,url:n,binaryType:o}=this._config,r=this._output;let i=null;try{i=t?new e(n,t):new e(n),this._socket=i,o&&(this._socket.binaryType=o)}catch(a){return void r.error(a)}const s=new u(()=>{this._socket=null,i&&1===i.readyState&&i.close()});i.onopen=e=>{const{_socket:t}=this;if(!t)return i.close(),void this._resetState();const{openObserver:n}=this._config;n&&n.next(e);const o=this.destination;this.destination=p.create(t=>{if(1===i.readyState)try{const{serializer:e}=this._config;i.send(e(t))}catch(e){this.destination.error(e)}},e=>{const{closingObserver:t}=this._config;t&&t.next(void 0),e&&e.code?i.close(e.code,e.reason):r.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")),this._resetState()},()=>{const{closingObserver:e}=this._config;e&&e.next(void 0),i.close(),this._resetState()}),o&&o instanceof Hc&&s.add(o.subscribe(this.destination))},i.onerror=e=>{this._resetState(),r.error(e)},i.onclose=e=>{this._resetState();const{closeObserver:t}=this._config;t&&t.next(e),e.wasClean?r.complete():r.error(e)},i.onmessage=e=>{try{const{deserializer:t}=this._config;r.next(t(e))}catch(t){r.error(t)}}}_subscribe(e){const{source:t}=this;return t?t.subscribe(e):(this._socket||this._connectSocket(),this._output.subscribe(e),e.add(()=>{const{_socket:e}=this;0===this._output.observers.length&&(e&&1===e.readyState&&e.close(),this._resetState())}),e)}unsubscribe(){const{_socket:e}=this;e&&1===e.readyState&&e.close(),this._resetState(),super.unsubscribe()}}let Xc=(()=>{class e{constructor(){this.listOfChanges=[],this.listOfEntities=new Map,this.changeEmitter=new E,this.connectionStatus=new Hc(1),this.previewServiceWebSocket=new Jc("wss://prv-services-demo.apps.us-west-1.starter.openshift-online.com/preview"),this.connectionStatus.next("connected"),this.previewServiceWebSocket.subscribe(e=>{console.log("message received: "+e),this.listOfChanges.push(e),this.changeEmitter.next(e)},e=>{console.log(e),this.connectionStatus.next("ERROR:"+e)},()=>{console.log("complete"),this.connectionStatus.next("closed")})}getListOfChanges(){return this.listOfChanges}getChangeEvents(){return this.changeEmitter}getConnectionStatus(){return this.connectionStatus}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),el=(()=>{class e{constructor(e){this.changeListener=e,this.receivedCommands=new Hc,this.receivedCommands.next(new qc(Wc.ADD,Gc.DontCodeModel.APP_NAME,"New Name")),e.getChangeEvents().subscribe(e=>{console.log("Received Change ",e),this.receivedCommands.next(new qc(Wc.UPDATE,e.position,e.value))})}pushCommand(e){this.receivedCommands.next(e)}receiveCommands(e,t){return e?this.receivedCommands.pipe(Qc(n=>{if(n.position.startsWith(e)){if(t){const o=n.position.indexOf("/",e.length+1);return!(-1==o||!n.position.startsWith(t,o+1))}return!0}return!1})):this.receivedCommands}}return e.\u0275fac=function(t){return new(t||e)(We(Xc))},e.\u0275prov=le({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class tl extends E{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){const t=super._subscribe(e);return t&&!t.closed&&e.next(this._value),t}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new x;return this._value}next(e){super.next(this._value=e)}}const nl=(()=>{function e(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return e.prototype=Object.create(Error.prototype),e})();function ol(e){return new v(t=>{let n;try{n=e()}catch(o){return void t.error(o)}return(n?U(n):Mc()).subscribe(t)})}function rl(){return W(1)}const il=(()=>{function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e})();function sl(e){return function(t){return 0===e?Mc():t.lift(new al(e))}}class al{constructor(e){if(this.total=e,this.total<0)throw new il}call(e,t){return t.subscribe(new cl(e,this.total))}}class cl extends p{constructor(e,t){super(e),this.total=t,this.ring=new Array,this.count=0}_next(e){const t=this.ring,n=this.total,o=this.count++;t.length<n?t.push(e):t[o%n]=e}_complete(){const e=this.destination;let t=this.count;if(t>0){const n=this.count>=this.total?this.total:this.count,o=this.ring;for(let r=0;r<n;r++){const r=t++%n;e.next(o[r])}}e.complete()}}function ll(e=dl){return t=>t.lift(new hl(e))}class hl{constructor(e){this.errorFactory=e}call(e,t){return t.subscribe(new ul(e,this.errorFactory))}}class ul extends p{constructor(e,t){super(e),this.errorFactory=t,this.hasValue=!1}_next(e){this.hasValue=!0,this.destination.next(e)}_complete(){if(this.hasValue)return this.destination.complete();{let t;try{t=this.errorFactory()}catch(e){t=e}this.destination.error(t)}}}function dl(){return new nl}function fl(e=null){return t=>t.lift(new pl(e))}class pl{constructor(e){this.defaultValue=e}call(e,t){return t.subscribe(new gl(e,this.defaultValue))}}class gl extends p{constructor(e,t){super(e),this.defaultValue=t,this.isEmpty=!0}_next(e){this.isEmpty=!1,this.destination.next(e)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}function ml(e,t){const n=arguments.length>=2;return o=>o.pipe(e?Qc((t,n)=>e(t,n,o)):q,sl(1),n?fl(t):ll(()=>new nl))}function bl(e){return function(t){const n=new yl(e),o=t.lift(n);return n.caught=o}}class yl{constructor(e){this.selector=e}call(e,t){return t.subscribe(new _l(e,this.selector,this.caught))}}class _l extends ${constructor(e,t,n){super(e),this.selector=t,this.caught=n}error(e){if(!this.isStopped){let n;try{n=this.selector(e,this.caught)}catch(t){return void super.error(t)}this._unsubscribeAndRecycle();const o=new T(this,void 0,void 0);this.add(o);const r=D(this,n,void 0,void 0,o);r!==o&&this.add(r)}}}function vl(e){return t=>0===e?Mc():t.lift(new wl(e))}class wl{constructor(e){if(this.total=e,this.total<0)throw new il}call(e,t){return t.subscribe(new xl(e,this.total))}}class xl extends p{constructor(e,t){super(e),this.total=t,this.count=0}_next(e){const t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))}}function Sl(e,t){const n=arguments.length>=2;return o=>o.pipe(e?Qc((t,n)=>e(t,n,o)):q,vl(1),n?fl(t):ll(()=>new nl))}class kl{constructor(e,t,n){this.predicate=e,this.thisArg=t,this.source=n}call(e,t){return t.subscribe(new El(e,this.predicate,this.thisArg,this.source))}}class El extends p{constructor(e,t,n,o){super(e),this.predicate=t,this.thisArg=n,this.source=o,this.index=0,this.thisArg=n||this}notifyComplete(e){this.destination.next(e),this.destination.complete()}_next(e){let t=!1;try{t=this.predicate.call(this.thisArg,e,this.index++,this.source)}catch(n){return void this.destination.error(n)}t||this.notifyComplete(!1)}_complete(){this.notifyComplete(!0)}}function Cl(e,t){return"function"==typeof t?n=>n.pipe(Cl((n,o)=>U(e(n,o)).pipe(F((e,r)=>t(n,e,o,r))))):t=>t.lift(new Ol(e))}class Ol{constructor(e){this.project=e}call(e,t){return t.subscribe(new Tl(e,this.project))}}class Tl extends ${constructor(e,t){super(e),this.project=t,this.index=0}_next(e){let t;const n=this.index++;try{t=this.project(e,n)}catch(o){return void this.destination.error(o)}this._innerSub(t,e,n)}_innerSub(e,t,n){const o=this.innerSubscription;o&&o.unsubscribe();const r=new T(this,t,n),i=this.destination;i.add(r),this.innerSubscription=D(this,e,void 0,void 0,r),this.innerSubscription!==r&&i.add(this.innerSubscription)}_complete(){const{innerSubscription:e}=this;e&&!e.closed||super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=null}notifyComplete(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&super._complete()}notifyNext(e,t,n,o,r){this.destination.next(t)}}function Pl(...e){return rl()(Lc(...e))}function jl(e,t){let n=!1;return arguments.length>=2&&(n=!0),function(o){return o.lift(new Al(e,t,n))}}class Al{constructor(e,t,n=!1){this.accumulator=e,this.seed=t,this.hasSeed=n}call(e,t){return t.subscribe(new Rl(e,this.accumulator,this.seed,this.hasSeed))}}class Rl extends p{constructor(e,t,n,o){super(e),this.accumulator=t,this._seed=n,this.hasSeed=o,this.index=0}get seed(){return this._seed}set seed(e){this.hasSeed=!0,this._seed=e}_next(e){if(this.hasSeed)return this._tryNext(e);this.seed=e,this.destination.next(e)}_tryNext(e){const t=this.index++;let n;try{n=this.accumulator(this.seed,e,t)}catch(o){this.destination.error(o)}this.seed=n,this.destination.next(n)}}function Nl(e,t){return V(e,t,1)}function Il(e,t,n){return function(o){return o.lift(new Dl(e,t,n))}}class Dl{constructor(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}call(e,t){return t.subscribe(new $l(e,this.nextOrObserver,this.error,this.complete))}}class $l extends p{constructor(e,t,n,r){super(e),this._tapNext=b,this._tapError=b,this._tapComplete=b,this._tapError=n||b,this._tapComplete=r||b,o(t)?(this._context=this,this._tapNext=t):t&&(this._context=t,this._tapNext=t.next||b,this._tapError=t.error||b,this._tapComplete=t.complete||b)}_next(e){try{this._tapNext.call(this._context,e)}catch(t){return void this.destination.error(t)}this.destination.next(e)}_error(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)}_complete(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()}}class Fl{constructor(e){this.callback=e}call(e,t){return t.subscribe(new Ml(e,this.callback))}}class Ml extends p{constructor(e,t){super(e),this.add(new u(t))}}class Ll{constructor(e,t){this.id=e,this.url=t}}class zl extends Ll{constructor(e,t,n="imperative",o=null){super(e,t),this.navigationTrigger=n,this.restoredState=o}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Ul extends Ll{constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Vl extends Ll{constructor(e,t,n){super(e,t),this.reason=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class Hl extends Ll{constructor(e,t,n){super(e,t),this.error=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class Bl extends Ll{constructor(e,t,n,o){super(e,t),this.urlAfterRedirects=n,this.state=o}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class ql extends Ll{constructor(e,t,n,o){super(e,t),this.urlAfterRedirects=n,this.state=o}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Wl extends Ll{constructor(e,t,n,o,r){super(e,t),this.urlAfterRedirects=n,this.state=o,this.shouldActivate=r}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class Ql extends Ll{constructor(e,t,n,o){super(e,t),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Kl extends Ll{constructor(e,t,n,o){super(e,t),this.urlAfterRedirects=n,this.state=o}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Zl{constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Gl{constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Yl{constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Jl{constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Xl{constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class eh{constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class th{constructor(e,t,n){this.routerEvent=e,this.position=t,this.anchor=n}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}let nh=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=st({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&ai(0,"router-outlet")},directives:function(){return[od]},encapsulation:2}),e})();class oh{constructor(e){this.params=e||{}}has(e){return this.params.hasOwnProperty(e)}get(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){const t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}}function rh(e){return new oh(e)}function ih(e){const t=Error("NavigationCancelingError: "+e);return t.ngNavigationCancelingError=!0,t}function sh(e,t,n){const o=n.path.split("/");if(o.length>e.length)return null;if("full"===n.pathMatch&&(t.hasChildren()||o.length<e.length))return null;const r={};for(let i=0;i<o.length;i++){const t=o[i],n=e[i];if(t.startsWith(":"))r[t.substring(1)]=n;else if(t!==n.path)return null}return{consumed:e.slice(0,o.length),posParams:r}}class ah{constructor(e,t){this.routes=e,this.module=t}}function ch(e,t=""){for(let n=0;n<e.length;n++){const o=e[n];lh(o,hh(t,o))}}function lh(e,t){if(!e)throw new Error(`\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(e))throw new Error(`Invalid configuration of route '${t}': Array cannot be specified`);if(!e.component&&!e.children&&!e.loadChildren&&e.outlet&&"primary"!==e.outlet)throw new Error(`Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`);if(e.redirectTo&&e.children)throw new Error(`Invalid configuration of route '${t}': redirectTo and children cannot be used together`);if(e.redirectTo&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`);if(e.children&&e.loadChildren)throw new Error(`Invalid configuration of route '${t}': children and loadChildren cannot be used together`);if(e.redirectTo&&e.component)throw new Error(`Invalid configuration of route '${t}': redirectTo and component cannot be used together`);if(e.path&&e.matcher)throw new Error(`Invalid configuration of route '${t}': path and matcher cannot be used together`);if(void 0===e.redirectTo&&!e.component&&!e.children&&!e.loadChildren)throw new Error(`Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===e.path&&void 0===e.matcher)throw new Error(`Invalid configuration of route '${t}': routes must have either a path or a matcher specified`);if("string"==typeof e.path&&"/"===e.path.charAt(0))throw new Error(`Invalid configuration of route '${t}': path cannot start with a slash`);if(""===e.path&&void 0!==e.redirectTo&&void 0===e.pathMatch)throw new Error(`Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==e.pathMatch&&"full"!==e.pathMatch&&"prefix"!==e.pathMatch)throw new Error(`Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`);e.children&&ch(e.children,t)}function hh(e,t){return t?e||t.path?e&&!t.path?`${e}/`:!e&&t.path?t.path:`${e}/${t.path}`:"":e}function uh(e){const t=e.children&&e.children.map(uh),n=t?Object.assign(Object.assign({},e),{children:t}):Object.assign({},e);return!n.component&&(t||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=nh),n}function dh(e,t){const n=Object.keys(e),o=Object.keys(t);if(!n||!o||n.length!=o.length)return!1;let r;for(let i=0;i<n.length;i++)if(r=n[i],!fh(e[r],t[r]))return!1;return!0}function fh(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length==t.length&&e.every(e=>t.indexOf(e)>-1):e===t}function ph(e){return Array.prototype.concat.apply([],e)}function gh(e){return e.length>0?e[e.length-1]:null}function mh(e,t){for(const n in e)e.hasOwnProperty(n)&&t(e[n],n)}function bh(e){return hi(e)?e:li(e)?U(Promise.resolve(e)):Lc(e)}function yh(e,t,n){return n?function(e,t){return dh(e,t)}(e.queryParams,t.queryParams)&&function e(t,n){if(!xh(t.segments,n.segments))return!1;if(t.numberOfChildren!==n.numberOfChildren)return!1;for(const o in n.children){if(!t.children[o])return!1;if(!e(t.children[o],n.children[o]))return!1}return!0}(e.root,t.root):function(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(n=>fh(e[n],t[n]))}(e.queryParams,t.queryParams)&&function e(t,n){return function t(n,o,r){if(n.segments.length>r.length)return!!xh(n.segments.slice(0,r.length),r)&&!o.hasChildren();if(n.segments.length===r.length){if(!xh(n.segments,r))return!1;for(const t in o.children){if(!n.children[t])return!1;if(!e(n.children[t],o.children[t]))return!1}return!0}{const e=r.slice(0,n.segments.length),i=r.slice(n.segments.length);return!!xh(n.segments,e)&&!!n.children.primary&&t(n.children.primary,o,i)}}(t,n,n.segments)}(e.root,t.root)}class _h{constructor(e,t,n){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=rh(this.queryParams)),this._queryParamMap}toString(){return Ch.serialize(this)}}class vh{constructor(e,t){this.segments=e,this.children=t,this.parent=null,mh(t,(e,t)=>e.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Oh(this)}}class wh{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap||(this._parameterMap=rh(this.parameters)),this._parameterMap}toString(){return Nh(this)}}function xh(e,t){return e.length===t.length&&e.every((e,n)=>e.path===t[n].path)}function Sh(e,t){let n=[];return mh(e.children,(e,o)=>{"primary"===o&&(n=n.concat(t(e,o)))}),mh(e.children,(e,o)=>{"primary"!==o&&(n=n.concat(t(e,o)))}),n}class kh{}class Eh{parse(e){const t=new Mh(e);return new _h(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){var t;return`${`/${function e(t,n){if(!t.hasChildren())return Oh(t);if(n){const n=t.children.primary?e(t.children.primary,!1):"",o=[];return mh(t.children,(t,n)=>{"primary"!==n&&o.push(`${n}:${e(t,!1)}`)}),o.length>0?`${n}(${o.join("//")})`:n}{const n=Sh(t,(n,o)=>"primary"===o?[e(t.children.primary,!1)]:[`${o}:${e(n,!1)}`]);return`${Oh(t)}/(${n.join("//")})`}}(e.root,!0)}`}${function(e){const t=Object.keys(e).map(t=>{const n=e[t];return Array.isArray(n)?n.map(e=>`${Ph(t)}=${Ph(e)}`).join("&"):`${Ph(t)}=${Ph(n)}`});return t.length?`?${t.join("&")}`:""}(e.queryParams)}${"string"==typeof e.fragment?`#${t=e.fragment,encodeURI(t)}`:""}`}}const Ch=new Eh;function Oh(e){return e.segments.map(e=>Nh(e)).join("/")}function Th(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ph(e){return Th(e).replace(/%3B/gi,";")}function jh(e){return Th(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ah(e){return decodeURIComponent(e)}function Rh(e){return Ah(e.replace(/\+/g,"%20"))}function Nh(e){return`${jh(e.path)}${t=e.parameters,Object.keys(t).map(e=>`;${jh(e)}=${jh(t[e])}`).join("")}`;var t}const Ih=/^[^\/()?;=#]+/;function Dh(e){const t=e.match(Ih);return t?t[0]:""}const $h=/^[^=?&#]+/,Fh=/^[^?&#]+/;class Mh{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new vh([],{}):new vh([],this.parseChildren())}parseQueryParams(){const e={};if(this.consumeOptional("?"))do{this.parseQueryParam(e)}while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n.primary=new vh(e,t)),n}parseSegment(){const e=Dh(this.remaining);if(""===e&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(e),new wh(Ah(e),this.parseMatrixParams())}parseMatrixParams(){const e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){const t=Dh(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=Dh(this.remaining);e&&(n=e,this.capture(n))}e[Ah(t)]=Ah(n)}parseQueryParam(e){const t=function(e){const t=e.match($h);return t?t[0]:""}(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){const e=function(e){const t=e.match(Fh);return t?t[0]:""}(this.remaining);e&&(n=e,this.capture(n))}const o=Rh(t),r=Rh(n);if(e.hasOwnProperty(o)){let t=e[o];Array.isArray(t)||(t=[t],e[o]=t),t.push(r)}else e[o]=r}parseParens(e){const t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=Dh(this.remaining),o=this.remaining[n.length];if("/"!==o&&")"!==o&&";"!==o)throw new Error(`Cannot parse url '${this.url}'`);let r=void 0;n.indexOf(":")>-1?(r=n.substr(0,n.indexOf(":")),this.capture(r),this.capture(":")):e&&(r="primary");const i=this.parseChildren();t[r]=1===Object.keys(i).length?i.primary:new vh([],i),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return!!this.peekStartsWith(e)&&(this.remaining=this.remaining.substring(e.length),!0)}capture(e){if(!this.consumeOptional(e))throw new Error(`Expected "${e}".`)}}class Lh{constructor(e){this._root=e}get root(){return this._root.value}parent(e){const t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){const t=zh(e,this._root);return t?t.children.map(e=>e.value):[]}firstChild(e){const t=zh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){const t=Uh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(e=>e.value).filter(t=>t!==e)}pathFromRoot(e){return Uh(e,this._root).map(e=>e.value)}}function zh(e,t){if(e===t.value)return t;for(const n of t.children){const t=zh(e,n);if(t)return t}return null}function Uh(e,t){if(e===t.value)return[t];for(const n of t.children){const o=Uh(e,n);if(o.length)return o.unshift(t),o}return[]}class Vh{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}}function Hh(e){const t={};return e&&e.children.forEach(e=>t[e.value.outlet]=e),t}class Bh extends Lh{constructor(e,t){super(e),this.snapshot=t,Gh(this,e)}toString(){return this.snapshot.toString()}}function qh(e,t){const n=function(e,t){const n=new Kh([],{},{},"",{},"primary",t,null,e.root,-1,{});return new Zh("",new Vh(n,[]))}(e,t),o=new tl([new wh("",{})]),r=new tl({}),i=new tl({}),s=new tl({}),a=new tl(""),c=new Wh(o,r,s,a,i,"primary",t,n.root);return c.snapshot=n.root,new Bh(new Vh(c,[]),n)}class Wh{constructor(e,t,n,o,r,i,s,a){this.url=e,this.params=t,this.queryParams=n,this.fragment=o,this.data=r,this.outlet=i,this.component=s,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(F(e=>rh(e)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(F(e=>rh(e)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function Qh(e,t="emptyOnly"){const n=e.pathFromRoot;let o=0;if("always"!==t)for(o=n.length-1;o>=1;){const e=n[o],t=n[o-1];if(e.routeConfig&&""===e.routeConfig.path)o--;else{if(t.component)break;o--}}return function(e){return e.reduce((e,t)=>({params:Object.assign(Object.assign({},e.params),t.params),data:Object.assign(Object.assign({},e.data),t.data),resolve:Object.assign(Object.assign({},e.resolve),t._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(o))}class Kh{constructor(e,t,n,o,r,i,s,a,c,l,h){this.url=e,this.params=t,this.queryParams=n,this.fragment=o,this.data=r,this.outlet=i,this.component=s,this.routeConfig=a,this._urlSegment=c,this._lastPathIndex=l,this._resolve=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=rh(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=rh(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(e=>e.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class Zh extends Lh{constructor(e,t){super(t),this.url=e,Gh(this,t)}toString(){return Yh(this._root)}}function Gh(e,t){t.value._routerState=e,t.children.forEach(t=>Gh(e,t))}function Yh(e){const t=e.children.length>0?` { ${e.children.map(Yh).join(", ")} } `:"";return`${e.value}${t}`}function Jh(e){if(e.snapshot){const t=e.snapshot,n=e._futureSnapshot;e.snapshot=n,dh(t.queryParams,n.queryParams)||e.queryParams.next(n.queryParams),t.fragment!==n.fragment&&e.fragment.next(n.fragment),dh(t.params,n.params)||e.params.next(n.params),function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(!dh(e[n],t[n]))return!1;return!0}(t.url,n.url)||e.url.next(n.url),dh(t.data,n.data)||e.data.next(n.data)}else e.snapshot=e._futureSnapshot,e.data.next(e._futureSnapshot.data)}function Xh(e,t){var n,o;return dh(e.params,t.params)&&xh(n=e.url,o=t.url)&&n.every((e,t)=>dh(e.parameters,o[t].parameters))&&!(!e.parent!=!t.parent)&&(!e.parent||Xh(e.parent,t.parent))}function eu(e){return"object"==typeof e&&null!=e&&!e.outlets&&!e.segmentPath}function tu(e,t,n,o,r){let i={};return o&&mh(o,(e,t)=>{i[t]=Array.isArray(e)?e.map(e=>`${e}`):`${e}`}),new _h(n.root===e?t:function e(t,n,o){const r={};return mh(t.children,(t,i)=>{r[i]=t===n?o:e(t,n,o)}),new vh(t.segments,r)}(n.root,e,t),i,r)}class nu{constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&eu(n[0]))throw new Error("Root segment cannot have matrix parameters");const o=n.find(e=>"object"==typeof e&&null!=e&&e.outlets);if(o&&o!==gh(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class ou{constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}}function ru(e){return"object"==typeof e&&null!=e&&e.outlets?e.outlets.primary:`${e}`}function iu(e,t,n){if(e||(e=new vh([],{})),0===e.segments.length&&e.hasChildren())return su(e,t,n);const o=function(e,t,n){let o=0,r=t;const i={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(o>=n.length)return i;const t=e.segments[r],s=ru(n[o]),a=o<n.length-1?n[o+1]:null;if(r>0&&void 0===s)break;if(s&&a&&"object"==typeof a&&void 0===a.outlets){if(!hu(s,a,t))return i;o+=2}else{if(!hu(s,{},t))return i;o++}r++}return{match:!0,pathIndex:r,commandIndex:o}}(e,t,n),r=n.slice(o.commandIndex);if(o.match&&o.pathIndex<e.segments.length){const t=new vh(e.segments.slice(0,o.pathIndex),{});return t.children.primary=new vh(e.segments.slice(o.pathIndex),e.children),su(t,0,r)}return o.match&&0===r.length?new vh(e.segments,{}):o.match&&!e.hasChildren()?au(e,t,n):o.match?su(e,0,r):au(e,t,n)}function su(e,t,n){if(0===n.length)return new vh(e.segments,{});{const o=function(e){return"object"!=typeof e[0]||void 0===e[0].outlets?{primary:e}:e[0].outlets}(n),r={};return mh(o,(n,o)=>{null!==n&&(r[o]=iu(e.children[o],t,n))}),mh(e.children,(e,t)=>{void 0===o[t]&&(r[t]=e)}),new vh(e.segments,r)}}function au(e,t,n){const o=e.segments.slice(0,t);let r=0;for(;r<n.length;){if("object"==typeof n[r]&&void 0!==n[r].outlets){const e=cu(n[r].outlets);return new vh(o,e)}if(0===r&&eu(n[0])){o.push(new wh(e.segments[t].path,n[0])),r++;continue}const i=ru(n[r]),s=r<n.length-1?n[r+1]:null;i&&s&&eu(s)?(o.push(new wh(i,lu(s))),r+=2):(o.push(new wh(i,{})),r++)}return new vh(o,{})}function cu(e){const t={};return mh(e,(e,n)=>{null!==e&&(t[n]=au(new vh([],{}),0,e))}),t}function lu(e){const t={};return mh(e,(e,n)=>t[n]=`${e}`),t}function hu(e,t,n){return e==n.path&&dh(t,n.parameters)}class uu{constructor(e,t,n,o){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=o}activate(e){const t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),Jh(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){const o=Hh(t);e.children.forEach(e=>{const t=e.value.outlet;this.deactivateRoutes(e,o[t],n),delete o[t]}),mh(o,(e,t)=>{this.deactivateRouteAndItsChildren(e,n)})}deactivateRoutes(e,t,n){const o=e.value,r=t?t.value:null;if(o===r)if(o.component){const r=n.getContext(o.outlet);r&&this.deactivateChildRoutes(e,t,r.children)}else this.deactivateChildRoutes(e,t,n);else r&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){const n=t.getContext(e.value.outlet);if(n&&n.outlet){const t=n.outlet.detach(),o=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:t,route:e,contexts:o})}}deactivateRouteAndOutlet(e,t){const n=t.getContext(e.value.outlet);if(n){const o=Hh(e),r=e.value.component?n.children:t;mh(o,(e,t)=>this.deactivateRouteAndItsChildren(e,r)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(e,t,n){const o=Hh(t);e.children.forEach(e=>{this.activateRoutes(e,o[e.value.outlet],n),this.forwardEvent(new eh(e.value.snapshot))}),e.children.length&&this.forwardEvent(new Jl(e.value.snapshot))}activateRoutes(e,t,n){const o=e.value,r=t?t.value:null;if(Jh(o),o===r)if(o.component){const r=n.getOrCreateContext(o.outlet);this.activateChildRoutes(e,t,r.children)}else this.activateChildRoutes(e,t,n);else if(o.component){const t=n.getOrCreateContext(o.outlet);if(this.routeReuseStrategy.shouldAttach(o.snapshot)){const e=this.routeReuseStrategy.retrieve(o.snapshot);this.routeReuseStrategy.store(o.snapshot,null),t.children.onOutletReAttached(e.contexts),t.attachRef=e.componentRef,t.route=e.route.value,t.outlet&&t.outlet.attach(e.componentRef,e.route.value),du(e.route)}else{const n=function(e){for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig;if(e&&e.component)return null}return null}(o.snapshot),r=n?n.module.componentFactoryResolver:null;t.attachRef=null,t.route=o,t.resolver=r,t.outlet&&t.outlet.activateWith(o,r),this.activateChildRoutes(e,null,t.children)}}else this.activateChildRoutes(e,null,n)}}function du(e){Jh(e.value),e.children.forEach(du)}function fu(e){return"function"==typeof e}function pu(e){return e instanceof _h}class gu{constructor(e){this.segmentGroup=e||null}}class mu{constructor(e){this.urlTree=e}}function bu(e){return new v(t=>t.error(new gu(e)))}function yu(e){return new v(t=>t.error(new mu(e)))}function _u(e){return new v(t=>t.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${e}'`)))}class vu{constructor(e,t,n,o,r){this.configLoader=t,this.urlSerializer=n,this.urlTree=o,this.config=r,this.allowRedirects=!0,this.ngModule=e.get(Ge)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(F(e=>this.createUrlTree(e,this.urlTree.queryParams,this.urlTree.fragment))).pipe(bl(e=>{if(e instanceof mu)return this.allowRedirects=!1,this.match(e.urlTree);if(e instanceof gu)throw this.noMatchError(e);throw e}))}match(e){return this.expandSegmentGroup(this.ngModule,this.config,e.root,"primary").pipe(F(t=>this.createUrlTree(t,e.queryParams,e.fragment))).pipe(bl(e=>{if(e instanceof gu)throw this.noMatchError(e);throw e}))}noMatchError(e){return new Error(`Cannot match any routes. URL Segment: '${e.segmentGroup}'`)}createUrlTree(e,t,n){const o=e.segments.length>0?new vh([],{primary:e}):e;return new _h(o,t,n)}expandSegmentGroup(e,t,n,o){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(e,t,n).pipe(F(e=>new vh([],e))):this.expandSegment(e,n,t,n.segments,o,!0)}expandChildren(e,t,n){return function(e,t){if(0===Object.keys(e).length)return Lc({});const n=[],o=[],r={};return mh(e,(e,i)=>{const s=t(i,e).pipe(F(e=>r[i]=e));"primary"===i?n.push(s):o.push(s)}),Lc.apply(null,n.concat(o)).pipe(rl(),ml(),F(()=>r))}(n.children,(n,o)=>this.expandSegmentGroup(e,t,o,n))}expandSegment(e,t,n,o,r,i){return Lc(...n).pipe(F(s=>this.expandSegmentAgainstRoute(e,t,n,s,o,r,i).pipe(bl(e=>{if(e instanceof gu)return Lc(null);throw e}))),rl(),Sl(e=>!!e),bl((e,n)=>{if(e instanceof nl||"EmptyError"===e.name){if(this.noLeftoversInUrl(t,o,r))return Lc(new vh([],{}));throw new gu(t)}throw e}))}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}expandSegmentAgainstRoute(e,t,n,o,r,i,s){return ku(o)!==i?bu(t):void 0===o.redirectTo?this.matchSegmentAgainstRoute(e,t,o,r):s&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(e,t,n,o,r,i):bu(t)}expandSegmentAgainstRouteUsingRedirect(e,t,n,o,r,i){return"**"===o.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(e,n,o,i):this.expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,o,r,i)}expandWildCardWithParamsAgainstRouteUsingRedirect(e,t,n,o){const r=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?yu(r):this.lineralizeSegments(n,r).pipe(V(n=>{const r=new vh(n,{});return this.expandSegment(e,r,t,n,o,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(e,t,n,o,r,i){const{matched:s,consumedSegments:a,lastChild:c,positionalParamSegments:l}=wu(t,o,r);if(!s)return bu(t);const h=this.applyRedirectCommands(a,o.redirectTo,l);return o.redirectTo.startsWith("/")?yu(h):this.lineralizeSegments(o,h).pipe(V(o=>this.expandSegment(e,t,n,o.concat(r.slice(c)),i,!1)))}matchSegmentAgainstRoute(e,t,n,o){if("**"===n.path)return n.loadChildren?this.configLoader.load(e.injector,n).pipe(F(e=>(n._loadedConfig=e,new vh(o,{})))):Lc(new vh(o,{}));const{matched:r,consumedSegments:i,lastChild:s}=wu(t,n,o);if(!r)return bu(t);const a=o.slice(s);return this.getChildConfig(e,n,o).pipe(V(e=>{const n=e.module,o=e.routes,{segmentGroup:r,slicedSegments:s}=function(e,t,n,o){return n.length>0&&function(e,t,n){return n.some(n=>Su(e,t,n)&&"primary"!==ku(n))}(e,n,o)?{segmentGroup:xu(new vh(t,function(e,t){const n={};n.primary=t;for(const o of e)""===o.path&&"primary"!==ku(o)&&(n[ku(o)]=new vh([],{}));return n}(o,new vh(n,e.children)))),slicedSegments:[]}:0===n.length&&function(e,t,n){return n.some(n=>Su(e,t,n))}(e,n,o)?{segmentGroup:xu(new vh(e.segments,function(e,t,n,o){const r={};for(const i of n)Su(e,t,i)&&!o[ku(i)]&&(r[ku(i)]=new vh([],{}));return Object.assign(Object.assign({},o),r)}(e,n,o,e.children))),slicedSegments:n}:{segmentGroup:e,slicedSegments:n}}(t,i,a,o);return 0===s.length&&r.hasChildren()?this.expandChildren(n,o,r).pipe(F(e=>new vh(i,e))):0===o.length&&0===s.length?Lc(new vh(i,{})):this.expandSegment(n,r,o,s,"primary",!0).pipe(F(e=>new vh(i.concat(e.segments),e.children)))}))}getChildConfig(e,t,n){return t.children?Lc(new ah(t.children,e)):t.loadChildren?void 0!==t._loadedConfig?Lc(t._loadedConfig):function(e,t,n){const o=t.canLoad;return o&&0!==o.length?U(o).pipe(F(o=>{const r=e.get(o);let i;if(function(e){return e&&fu(e.canLoad)}(r))i=r.canLoad(t,n);else{if(!fu(r))throw new Error("Invalid CanLoad guard");i=r(t,n)}return bh(i)})).pipe(rl(),(r=e=>!0===e,e=>e.lift(new kl(r,void 0,e)))):Lc(!0);var r}(e.injector,t,n).pipe(V(n=>n?this.configLoader.load(e.injector,t).pipe(F(e=>(t._loadedConfig=e,e))):function(e){return new v(t=>t.error(ih(`Cannot load children because the guard of the route "path: '${e.path}'" returned false`)))}(t))):Lc(new ah([],e))}lineralizeSegments(e,t){let n=[],o=t.root;for(;;){if(n=n.concat(o.segments),0===o.numberOfChildren)return Lc(n);if(o.numberOfChildren>1||!o.children.primary)return _u(e.redirectTo);o=o.children.primary}}applyRedirectCommands(e,t,n){return this.applyRedirectCreatreUrlTree(t,this.urlSerializer.parse(t),e,n)}applyRedirectCreatreUrlTree(e,t,n,o){const r=this.createSegmentGroup(e,t.root,n,o);return new _h(r,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){const n={};return mh(e,(e,o)=>{if("string"==typeof e&&e.startsWith(":")){const r=e.substring(1);n[o]=t[r]}else n[o]=e}),n}createSegmentGroup(e,t,n,o){const r=this.createSegments(e,t.segments,n,o);let i={};return mh(t.children,(t,r)=>{i[r]=this.createSegmentGroup(e,t,n,o)}),new vh(r,i)}createSegments(e,t,n,o){return t.map(t=>t.path.startsWith(":")?this.findPosParam(e,t,o):this.findOrReturn(t,n))}findPosParam(e,t,n){const o=n[t.path.substring(1)];if(!o)throw new Error(`Cannot redirect to '${e}'. Cannot find '${t.path}'.`);return o}findOrReturn(e,t){let n=0;for(const o of t){if(o.path===e.path)return t.splice(n),o;n++}return e}}function wu(e,t,n){if(""===t.path)return"full"===t.pathMatch&&(e.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const o=(t.matcher||sh)(n,e,t);return o?{matched:!0,consumedSegments:o.consumed,lastChild:o.consumed.length,positionalParamSegments:o.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function xu(e){if(1===e.numberOfChildren&&e.children.primary){const t=e.children.primary;return new vh(e.segments.concat(t.segments),t.children)}return e}function Su(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function ku(e){return e.outlet||"primary"}class Eu{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}}class Cu{constructor(e,t){this.component=e,this.route=t}}function Ou(e,t,n){const o=e._root;return function e(t,n,o,r,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=Hh(n);return t.children.forEach(t=>{!function(t,n,o,r,i={canDeactivateChecks:[],canActivateChecks:[]}){const s=t.value,a=n?n.value:null,c=o?o.getContext(t.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){const l=function(e,t,n){if("function"==typeof n)return n(e,t);switch(n){case"pathParamsChange":return!xh(e.url,t.url);case"pathParamsOrQueryParamsChange":return!xh(e.url,t.url)||!dh(e.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Xh(e,t)||!dh(e.queryParams,t.queryParams);case"paramsChange":default:return!Xh(e,t)}}(a,s,s.routeConfig.runGuardsAndResolvers);l?i.canActivateChecks.push(new Eu(r)):(s.data=a.data,s._resolvedData=a._resolvedData),e(t,n,s.component?c?c.children:null:o,r,i),l&&i.canDeactivateChecks.push(new Cu(c&&c.outlet&&c.outlet.component||null,a))}else a&&Pu(n,c,i),i.canActivateChecks.push(new Eu(r)),e(t,null,s.component?c?c.children:null:o,r,i)}(t,s[t.value.outlet],o,r.concat([t.value]),i),delete s[t.value.outlet]}),mh(s,(e,t)=>Pu(e,o.getContext(t),i)),i}(o,t?t._root:null,n,[o.value])}function Tu(e,t,n){const o=function(e){if(!e)return null;for(let t=e.parent;t;t=t.parent){const e=t.routeConfig;if(e&&e._loadedConfig)return e._loadedConfig}return null}(t);return(o?o.module.injector:n).get(e)}function Pu(e,t,n){const o=Hh(e),r=e.value;mh(o,(e,o)=>{Pu(e,r.component?t?t.children.getContext(o):null:t,n)}),n.canDeactivateChecks.push(new Cu(r.component&&t&&t.outlet&&t.outlet.isActivated?t.outlet.component:null,r))}const ju=Symbol("INITIAL_VALUE");function Au(){return Cl(e=>kc(...e.map(e=>e.pipe(vl(1),function(...e){const t=e[e.length-1];return O(t)?(e.pop(),n=>Pl(e,n,t)):t=>Pl(e,t)}(ju)))).pipe(jl((e,t)=>{let n=!1;return t.reduce((e,o,r)=>{if(e!==ju)return e;if(o===ju&&(n=!0),!n){if(!1===o)return o;if(r===t.length-1||pu(o))return o}return e},e)},ju),Qc(e=>e!==ju),F(e=>pu(e)?e:!0===e),vl(1)))}function Ru(e,t){return null!==e&&t&&t(new Xl(e)),Lc(!0)}function Nu(e,t){return null!==e&&t&&t(new Yl(e)),Lc(!0)}function Iu(e,t,n){const o=t.routeConfig?t.routeConfig.canActivate:null;return o&&0!==o.length?Lc(o.map(o=>ol(()=>{const r=Tu(o,t,n);let i;if(function(e){return e&&fu(e.canActivate)}(r))i=bh(r.canActivate(t,e));else{if(!fu(r))throw new Error("Invalid CanActivate guard");i=bh(r(t,e))}return i.pipe(Sl())}))).pipe(Au()):Lc(!0)}function Du(e,t,n){const o=t[t.length-1],r=t.slice(0,t.length-1).reverse().map(e=>function(e){const t=e.routeConfig?e.routeConfig.canActivateChild:null;return t&&0!==t.length?{node:e,guards:t}:null}(e)).filter(e=>null!==e).map(t=>ol(()=>Lc(t.guards.map(r=>{const i=Tu(r,t.node,n);let s;if(function(e){return e&&fu(e.canActivateChild)}(i))s=bh(i.canActivateChild(o,e));else{if(!fu(i))throw new Error("Invalid CanActivateChild guard");s=bh(i(o,e))}return s.pipe(Sl())})).pipe(Au())));return Lc(r).pipe(Au())}class $u{}class Fu{constructor(e,t,n,o,r,i){this.rootComponentType=e,this.config=t,this.urlTree=n,this.url=o,this.paramsInheritanceStrategy=r,this.relativeLinkResolution=i}recognize(){try{const e=zu(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,t=this.processSegmentGroup(this.config,e,"primary"),n=new Kh([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),o=new Vh(n,t),r=new Zh(this.url,o);return this.inheritParamsAndData(r._root),Lc(r)}catch(e){return new v(t=>t.error(e))}}inheritParamsAndData(e){const t=e.value,n=Qh(t,this.paramsInheritanceStrategy);t.params=Object.freeze(n.params),t.data=Object.freeze(n.data),e.children.forEach(e=>this.inheritParamsAndData(e))}processSegmentGroup(e,t,n){return 0===t.segments.length&&t.hasChildren()?this.processChildren(e,t):this.processSegment(e,t,t.segments,n)}processChildren(e,t){const n=Sh(t,(t,n)=>this.processSegmentGroup(e,t,n));return function(e){const t={};e.forEach(e=>{const n=t[e.value.outlet];if(n){const t=n.url.map(e=>e.toString()).join("/"),o=e.value.url.map(e=>e.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${t}' and '${o}'.`)}t[e.value.outlet]=e.value})}(n),n.sort((e,t)=>"primary"===e.value.outlet?-1:"primary"===t.value.outlet?1:e.value.outlet.localeCompare(t.value.outlet)),n}processSegment(e,t,n,o){for(const i of e)try{return this.processSegmentAgainstRoute(i,t,n,o)}catch(r){if(!(r instanceof $u))throw r}if(this.noLeftoversInUrl(t,n,o))return[];throw new $u}noLeftoversInUrl(e,t,n){return 0===t.length&&!e.children[n]}processSegmentAgainstRoute(e,t,n,o){if(e.redirectTo)throw new $u;if((e.outlet||"primary")!==o)throw new $u;let r,i=[],s=[];if("**"===e.path){const i=n.length>0?gh(n).parameters:{};r=new Kh(n,i,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Hu(e),o,e.component,e,Mu(t),Lu(t)+n.length,Bu(e))}else{const a=function(e,t,n){if(""===t.path){if("full"===t.pathMatch&&(e.hasChildren()||n.length>0))throw new $u;return{consumedSegments:[],lastChild:0,parameters:{}}}const o=(t.matcher||sh)(n,e,t);if(!o)throw new $u;const r={};mh(o.posParams,(e,t)=>{r[t]=e.path});const i=o.consumed.length>0?Object.assign(Object.assign({},r),o.consumed[o.consumed.length-1].parameters):r;return{consumedSegments:o.consumed,lastChild:o.consumed.length,parameters:i}}(t,e,n);i=a.consumedSegments,s=n.slice(a.lastChild),r=new Kh(i,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,Hu(e),o,e.component,e,Mu(t),Lu(t)+i.length,Bu(e))}const a=function(e){return e.children?e.children:e.loadChildren?e._loadedConfig.routes:[]}(e),{segmentGroup:c,slicedSegments:l}=zu(t,i,s,a,this.relativeLinkResolution);if(0===l.length&&c.hasChildren()){const e=this.processChildren(a,c);return[new Vh(r,e)]}if(0===a.length&&0===l.length)return[new Vh(r,[])];const h=this.processSegment(a,c,l,"primary");return[new Vh(r,h)]}}function Mu(e){let t=e;for(;t._sourceSegment;)t=t._sourceSegment;return t}function Lu(e){let t=e,n=t._segmentIndexShift?t._segmentIndexShift:0;for(;t._sourceSegment;)t=t._sourceSegment,n+=t._segmentIndexShift?t._segmentIndexShift:0;return n-1}function zu(e,t,n,o,r){if(n.length>0&&function(e,t,n){return n.some(n=>Uu(e,t,n)&&"primary"!==Vu(n))}(e,n,o)){const r=new vh(t,function(e,t,n,o){const r={};r.primary=o,o._sourceSegment=e,o._segmentIndexShift=t.length;for(const i of n)if(""===i.path&&"primary"!==Vu(i)){const n=new vh([],{});n._sourceSegment=e,n._segmentIndexShift=t.length,r[Vu(i)]=n}return r}(e,t,o,new vh(n,e.children)));return r._sourceSegment=e,r._segmentIndexShift=t.length,{segmentGroup:r,slicedSegments:[]}}if(0===n.length&&function(e,t,n){return n.some(n=>Uu(e,t,n))}(e,n,o)){const i=new vh(e.segments,function(e,t,n,o,r,i){const s={};for(const a of o)if(Uu(e,n,a)&&!r[Vu(a)]){const n=new vh([],{});n._sourceSegment=e,n._segmentIndexShift="legacy"===i?e.segments.length:t.length,s[Vu(a)]=n}return Object.assign(Object.assign({},r),s)}(e,t,n,o,e.children,r));return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}const i=new vh(e.segments,e.children);return i._sourceSegment=e,i._segmentIndexShift=t.length,{segmentGroup:i,slicedSegments:n}}function Uu(e,t,n){return(!(e.hasChildren()||t.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function Vu(e){return e.outlet||"primary"}function Hu(e){return e.data||{}}function Bu(e){return e.resolve||{}}function qu(e,t,n,o){const r=Tu(e,t,o);return bh(r.resolve?r.resolve(t,n):r(t,n))}function Wu(e){return function(t){return t.pipe(Cl(t=>{const n=e(t);return n?U(n).pipe(F(()=>t)):U([t])}))}}class Qu{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}}const Ku=new $e("ROUTES");class Zu{constructor(e,t,n,o){this.loader=e,this.compiler=t,this.onLoadStartListener=n,this.onLoadEndListener=o}load(e,t){return this.onLoadStartListener&&this.onLoadStartListener(t),this.loadModuleFactory(t.loadChildren).pipe(F(n=>{this.onLoadEndListener&&this.onLoadEndListener(t);const o=n.create(e);return new ah(ph(o.injector.get(Ku)).map(uh),o)}))}loadModuleFactory(e){return"string"==typeof e?U(this.loader.load(e)):bh(e()).pipe(V(e=>e instanceof Ye?Lc(e):U(this.compiler.compileModuleAsync(e))))}}class Gu{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,t){return e}}function Yu(e){throw e}function Ju(e,t,n){return t.parse("/")}function Xu(e,t){return Lc(null)}let ed=(()=>{class e{constructor(e,t,n,o,r,i,s,a){this.rootComponentType=e,this.urlSerializer=t,this.rootContexts=n,this.location=o,this.config=a,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new E,this.errorHandler=Yu,this.malformedUriErrorHandler=Ju,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:Xu,afterPreactivation:Xu},this.urlHandlingStrategy=new Gu,this.routeReuseStrategy=new Qu,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=r.get(Ge),this.console=r.get(ws);const c=r.get(Ds);this.isNgZoneEnabled=c instanceof Ds,this.resetConfig(a),this.currentUrlTree=new _h(new vh([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new Zu(i,s,e=>this.triggerEvent(new Zl(e)),e=>this.triggerEvent(new Gl(e))),this.routerState=qh(this.currentUrlTree,this.rootComponentType),this.transitions=new tl({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(e){const t=this.events;return e.pipe(Qc(e=>0!==e.id),F(e=>Object.assign(Object.assign({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl)})),Cl(e=>{let n=!1,o=!1;return Lc(e).pipe(Il(e=>{this.currentNavigation={id:e.id,initialUrl:e.currentRawUrl,extractedUrl:e.extractedUrl,trigger:e.source,extras:e.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),Cl(e=>{const n=!this.navigated||e.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl))return Lc(e).pipe(Cl(e=>{const n=this.transitions.getValue();return t.next(new zl(e.id,this.serializeUrl(e.extractedUrl),e.source,e.restoredState)),n!==this.transitions.getValue()?Fc:[e]}),Cl(e=>Promise.resolve(e)),(o=this.ngModule.injector,r=this.configLoader,i=this.urlSerializer,s=this.config,function(e){return e.pipe(Cl(e=>function(e,t,n,o,r){return new vu(e,t,n,o,r).apply()}(o,r,i,e.extractedUrl,s).pipe(F(t=>Object.assign(Object.assign({},e),{urlAfterRedirects:t})))))}),Il(e=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:e.urlAfterRedirects})}),function(e,t,n,o,r){return function(i){return i.pipe(V(i=>function(e,t,n,o,r="emptyOnly",i="legacy"){return new Fu(e,t,n,o,r,i).recognize()}(e,t,i.urlAfterRedirects,n(i.urlAfterRedirects),o,r).pipe(F(e=>Object.assign(Object.assign({},i),{targetSnapshot:e})))))}}(this.rootComponentType,this.config,e=>this.serializeUrl(e),this.paramsInheritanceStrategy,this.relativeLinkResolution),Il(e=>{"eager"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(e.urlAfterRedirects,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),Il(e=>{const n=new Bl(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);t.next(n)}));var o,r,i,s;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:o,source:r,restoredState:i,extras:s}=e,a=new zl(n,this.serializeUrl(o),r,i);t.next(a);const c=qh(o,this.rootComponentType).snapshot;return Lc(Object.assign(Object.assign({},e),{targetSnapshot:c,urlAfterRedirects:o,extras:Object.assign(Object.assign({},s),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=e.rawUrl,this.browserUrlTree=e.urlAfterRedirects,e.resolve(null),Fc}),Wu(e=>{const{targetSnapshot:t,id:n,extractedUrl:o,rawUrl:r,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.beforePreactivation(t,{navigationId:n,appliedUrlTree:o,rawUrlTree:r,skipLocationChange:!!i,replaceUrl:!!s})}),Il(e=>{const t=new ql(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),F(e=>Object.assign(Object.assign({},e),{guards:Ou(e.targetSnapshot,e.currentSnapshot,this.rootContexts)})),function(e,t){return function(n){return n.pipe(V(n=>{const{targetSnapshot:o,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:s}}=n;return 0===s.length&&0===i.length?Lc(Object.assign(Object.assign({},n),{guardsResult:!0})):function(e,t,n,o){return U(e).pipe(V(e=>function(e,t,n,o,r){const i=t&&t.routeConfig?t.routeConfig.canDeactivate:null;return i&&0!==i.length?Lc(i.map(i=>{const s=Tu(i,t,r);let a;if(function(e){return e&&fu(e.canDeactivate)}(s))a=bh(s.canDeactivate(e,t,n,o));else{if(!fu(s))throw new Error("Invalid CanDeactivate guard");a=bh(s(e,t,n,o))}return a.pipe(Sl())})).pipe(Au()):Lc(!0)}(e.component,e.route,n,t,o)),Sl(e=>!0!==e,!0))}(s,o,r,e).pipe(V(n=>n&&"boolean"==typeof n?function(e,t,n,o){return U(t).pipe(Nl(t=>U([Nu(t.route.parent,o),Ru(t.route,o),Du(e,t.path,n),Iu(e,t.route,n)]).pipe(rl(),Sl(e=>!0!==e,!0))),Sl(e=>!0!==e,!0))}(o,i,e,t):Lc(n)),F(e=>Object.assign(Object.assign({},n),{guardsResult:e})))}))}}(this.ngModule.injector,e=>this.triggerEvent(e)),Il(e=>{if(pu(e.guardsResult)){const t=ih(`Redirecting to "${this.serializeUrl(e.guardsResult)}"`);throw t.url=e.guardsResult,t}}),Il(e=>{const t=new Wl(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot,!!e.guardsResult);this.triggerEvent(t)}),Qc(e=>{if(!e.guardsResult){this.resetUrlToCurrentUrlTree();const n=new Vl(e.id,this.serializeUrl(e.extractedUrl),"");return t.next(n),e.resolve(!1),!1}return!0}),Wu(e=>{if(e.guards.canActivateChecks.length)return Lc(e).pipe(Il(e=>{const t=new Ql(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}),(t=this.paramsInheritanceStrategy,n=this.ngModule.injector,function(e){return e.pipe(V(e=>{const{targetSnapshot:o,guards:{canActivateChecks:r}}=e;return r.length?U(r).pipe(Nl(e=>function(e,t,n,o){return function(e,t,n,o){const r=Object.keys(e);if(0===r.length)return Lc({});if(1===r.length){const i=r[0];return qu(e[i],t,n,o).pipe(F(e=>({[i]:e})))}const i={};return U(r).pipe(V(r=>qu(e[r],t,n,o).pipe(F(e=>(i[r]=e,e))))).pipe(ml(),F(()=>i))}(e._resolve,e,t,o).pipe(F(t=>(e._resolvedData=t,e.data=Object.assign(Object.assign({},e.data),Qh(e,n).resolve),null)))}(e.route,o,t,n)),function(e,t){return arguments.length>=2?function(n){return y(jl(e,t),sl(1),fl(t))(n)}:function(t){return y(jl((t,n,o)=>e(t,n,o+1)),sl(1))(t)}}((e,t)=>e),F(t=>e)):Lc(e)}))}),Il(e=>{const t=new Kl(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(e.urlAfterRedirects),e.targetSnapshot);this.triggerEvent(t)}));var t,n}),Wu(e=>{const{targetSnapshot:t,id:n,extractedUrl:o,rawUrl:r,extras:{skipLocationChange:i,replaceUrl:s}}=e;return this.hooks.afterPreactivation(t,{navigationId:n,appliedUrlTree:o,rawUrlTree:r,skipLocationChange:!!i,replaceUrl:!!s})}),F(e=>{const t=function(e,t,n){const o=function e(t,n,o){if(o&&t.shouldReuseRoute(n.value,o.value.snapshot)){const r=o.value;r._futureSnapshot=n.value;const i=function(t,n,o){return n.children.map(n=>{for(const r of o.children)if(t.shouldReuseRoute(r.value.snapshot,n.value))return e(t,n,r);return e(t,n)})}(t,n,o);return new Vh(r,i)}{const o=t.retrieve(n.value);if(o){const e=o.route;return function e(t,n){if(t.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(t.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=t.value;for(let o=0;o<t.children.length;++o)e(t.children[o],n.children[o])}(n,e),e}{const o=new Wh(new tl((r=n.value).url),new tl(r.params),new tl(r.queryParams),new tl(r.fragment),new tl(r.data),r.outlet,r.component,r),i=n.children.map(n=>e(t,n));return new Vh(o,i)}}var r}(e,t._root,n?n._root:void 0);return new Bh(o,t)}(this.routeReuseStrategy,e.targetSnapshot,e.currentRouterState);return Object.assign(Object.assign({},e),{targetRouterState:t})}),Il(e=>{this.currentUrlTree=e.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e.rawUrl),this.routerState=e.targetRouterState,"deferred"===this.urlUpdateStrategy&&(e.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!e.extras.replaceUrl,e.id,e.extras.state),this.browserUrlTree=e.urlAfterRedirects)}),(i=this.rootContexts,s=this.routeReuseStrategy,a=e=>this.triggerEvent(e),F(e=>(new uu(s,e.targetRouterState,e.currentRouterState,a).activate(i),e))),Il({next(){n=!0},complete(){n=!0}}),(r=()=>{if(!n&&!o){this.resetUrlToCurrentUrlTree();const n=new Vl(e.id,this.serializeUrl(e.extractedUrl),`Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`);t.next(n),e.resolve(!1)}this.currentNavigation=null},e=>e.lift(new Fl(r))),bl(n=>{if(o=!0,(r=n)&&r.ngNavigationCancelingError){const o=pu(n.url);o||(this.navigated=!0,this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl));const r=new Vl(e.id,this.serializeUrl(e.extractedUrl),n.message);t.next(r),o?setTimeout(()=>{const t=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(t,"imperative",null,{skipLocationChange:e.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:e.resolve,reject:e.reject,promise:e.promise})},0):e.resolve(!1)}else{this.resetStateAndUrl(e.currentRouterState,e.currentUrlTree,e.rawUrl);const o=new Hl(e.id,this.serializeUrl(e.extractedUrl),n);t.next(o);try{e.resolve(this.errorHandler(n))}catch(i){e.reject(i)}}var r;return Fc}));var r,i,s,a}))}resetRootComponentType(e){this.rootComponentType=e,this.routerState.root.component=this.rootComponentType}getTransition(){const e=this.transitions.value;return e.urlAfterRedirects=this.browserUrlTree,e}setTransition(e){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),e))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(e=>{let t=this.parseUrl(e.url);const n="popstate"===e.type?"popstate":"hashchange",o=e.state&&e.state.navigationId?e.state:null;setTimeout(()=>{this.scheduleNavigation(t,n,o,{replaceUrl:!0})},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(e){this.events.next(e)}resetConfig(e){ch(e),this.config=e.map(uh),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}createUrlTree(e,t={}){const{relativeTo:n,queryParams:o,fragment:r,preserveQueryParams:i,queryParamsHandling:s,preserveFragment:a}=t;Qn()&&i&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const c=n||this.routerState.root,l=a?this.currentUrlTree.fragment:r;let h=null;if(s)switch(s){case"merge":h=Object.assign(Object.assign({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}else h=i?this.currentUrlTree.queryParams:o||null;return null!==h&&(h=this.removeEmptyProps(h)),function(e,t,n,o,r){if(0===n.length)return tu(t.root,t.root,t,o,r);const i=function(e){if("string"==typeof e[0]&&1===e.length&&"/"===e[0])return new nu(!0,0,e);let t=0,n=!1;const o=e.reduce((e,o,r)=>{if("object"==typeof o&&null!=o){if(o.outlets){const t={};return mh(o.outlets,(e,n)=>{t[n]="string"==typeof e?e.split("/"):e}),[...e,{outlets:t}]}if(o.segmentPath)return[...e,o.segmentPath]}return"string"!=typeof o?[...e,o]:0===r?(o.split("/").forEach((o,r)=>{0==r&&"."===o||(0==r&&""===o?n=!0:".."===o?t++:""!=o&&e.push(o))}),e):[...e,o]},[]);return new nu(n,t,o)}(n);if(i.toRoot())return tu(t.root,new vh([],{}),t,o,r);const s=function(e,t,n){if(e.isAbsolute)return new ou(t.root,!0,0);if(-1===n.snapshot._lastPathIndex)return new ou(n.snapshot._urlSegment,!0,0);const o=eu(e.commands[0])?0:1;return function(e,t,n){let o=e,r=t,i=n;for(;i>r;){if(i-=r,o=o.parent,!o)throw new Error("Invalid number of '../'");r=o.segments.length}return new ou(o,!1,r-i)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+o,e.numberOfDoubleDots)}(i,t,e),a=s.processChildren?su(s.segmentGroup,s.index,i.commands):iu(s.segmentGroup,s.index,i.commands);return tu(s.segmentGroup,a,t,o,r)}(c,this.currentUrlTree,e,h,l)}navigateByUrl(e,t={skipLocationChange:!1}){Qn()&&this.isNgZoneEnabled&&!Ds.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=pu(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(o,"imperative",null,t)}navigate(e,t={skipLocationChange:!1}){return function(e){for(let t=0;t<e.length;t++){const n=e[t];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${t}`)}}(e),this.navigateByUrl(this.createUrlTree(e,t),t)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){let t;try{t=this.urlSerializer.parse(e)}catch(n){t=this.malformedUriErrorHandler(n,this.urlSerializer,e)}return t}isActive(e,t){if(pu(e))return yh(this.currentUrlTree,e,t);const n=this.parseUrl(e);return yh(this.currentUrlTree,n,t)}removeEmptyProps(e){return Object.keys(e).reduce((t,n)=>{const o=e[n];return null!=o&&(t[n]=o),t},{})}processNavigations(){this.navigations.subscribe(e=>{this.navigated=!0,this.lastSuccessfulId=e.id,this.events.next(new Ul(e.id,this.serializeUrl(e.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,e.resolve(!0)},e=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(e,t,n,o,r){const i=this.getTransition();if(i&&"imperative"!==t&&"imperative"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"hashchange"==t&&"popstate"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);if(i&&"popstate"==t&&"hashchange"===i.source&&i.rawUrl.toString()===e.toString())return Promise.resolve(!0);let s,a,c;r?(s=r.resolve,a=r.reject,c=r.promise):c=new Promise((e,t)=>{s=e,a=t});const l=++this.navigationId;return this.setTransition({id:l,source:t,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:e,extras:o,resolve:s,reject:a,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(e=>Promise.reject(e))}setBrowserUrl(e,t,n,o){const r=this.urlSerializer.serialize(e);o=o||{},this.location.isCurrentPathEqualTo(r)||t?this.location.replaceState(r,"",Object.assign(Object.assign({},o),{navigationId:n})):this.location.go(r,"",Object.assign(Object.assign({},o),{navigationId:n}))}resetStateAndUrl(e,t,n){this.routerState=e,this.currentUrlTree=t,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return e.\u0275fac=function(e){ni()},e.\u0275dir=dt({type:e}),e})();class td{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new nd,this.attachRef=null}}class nd{constructor(){this.contexts=new Map}onChildOutletCreated(e,t){const n=this.getOrCreateContext(e);n.outlet=t,this.contexts.set(e,n)}onChildOutletDestroyed(e){const t=this.getContext(e);t&&(t.outlet=null)}onOutletDeactivated(){const e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let t=this.getContext(e);return t||(t=new td,this.contexts.set(e,t)),t}getContext(e){return this.contexts.get(e)||null}}let od=(()=>{class e{constructor(e,t,n,o,r){this.parentContexts=e,this.location=t,this.resolver=n,this.changeDetector=r,this.activated=null,this._activatedRoute=null,this.activateEvents=new ds,this.deactivateEvents=new ds,this.name=o||"primary",e.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const e=this.parentContexts.getContext(this.name);e&&e.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const e=this.activated;return this.activated=null,this._activatedRoute=null,e}attach(e,t){this.activated=e,this._activatedRoute=t,this.location.insert(e.hostView)}deactivate(){if(this.activated){const e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,t){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=e;const n=(t=t||this.resolver).resolveComponentFactory(e._futureSnapshot.routeConfig.component),o=this.parentContexts.getOrCreateContext(this.name).children,r=new rd(e,o,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,r),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return e.\u0275fac=function(t){return new(t||e)(ti(nd),ti(Wi),ti(wi),("name",function(e,t){const n=e.attrs;if(n){const e=n.length;let t=0;for(;t<e;){const o=n[t];if(pn(o))break;if(0===o)t+=2;else if("number"==typeof o)for(t++;t<e&&"string"==typeof n[t];)t++;else{if("name"===o)return n[t+1];t+=2}}}return null}(zt())),ti(Er))},e.\u0275dir=dt({type:e,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),e})();class rd{constructor(e,t,n){this.route=e,this.childContexts=t,this.parent=n}get(e,t){return e===Wh?this.route:e===nd?this.childContexts:this.parent.get(e,t)}}class id{}class sd{preload(e,t){return Lc(null)}}let ad=(()=>{class e{constructor(e,t,n,o,r){this.router=e,this.injector=o,this.preloadingStrategy=r,this.loader=new Zu(t,n,t=>e.triggerEvent(new Zl(t)),t=>e.triggerEvent(new Gl(t)))}setUpPreloading(){this.subscription=this.router.events.pipe(Qc(e=>e instanceof Ul),Nl(()=>this.preload())).subscribe(()=>{})}preload(){const e=this.injector.get(Ge);return this.processRoutes(e,this.router.config)}ngOnDestroy(){this.subscription.unsubscribe()}processRoutes(e,t){const n=[];for(const o of t)if(o.loadChildren&&!o.canLoad&&o._loadedConfig){const e=o._loadedConfig;n.push(this.processRoutes(e.module,e.routes))}else o.loadChildren&&!o.canLoad?n.push(this.preloadConfig(e,o)):o.children&&n.push(this.processRoutes(e,o.children));return U(n).pipe(W(),F(e=>{}))}preloadConfig(e,t){return this.preloadingStrategy.preload(t,()=>this.loader.load(e.injector,t).pipe(V(e=>(t._loadedConfig=e,this.processRoutes(e.module,e.routes)))))}}return e.\u0275fac=function(t){return new(t||e)(We(ed),We(oa),We(As),We(zr),We(id))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})(),cd=(()=>{class e{constructor(e,t,n={}){this.router=e,this.viewportScroller=t,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(e=>{e instanceof zl?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Ul&&(this.lastId=e.id,this.scheduleScrollEvent(e,this.router.parseUrl(e.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(e=>{e instanceof th&&(e.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(e.position):e.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(e.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(e,t){this.router.triggerEvent(new th(e,"popstate"===this.lastSource?this.store[this.restoredId]:null,t))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return e.\u0275fac=function(e){ni()},e.\u0275dir=dt({type:e}),e})();const ld=new $e("ROUTER_CONFIGURATION"),hd=new $e("ROUTER_FORROOT_GUARD"),ud=[Ta,{provide:kh,useClass:Eh},{provide:ed,useFactory:function(e,t,n,o,r,i,s,a={},c,l){const h=new ed(null,e,t,n,o,r,i,ph(s));if(c&&(h.urlHandlingStrategy=c),l&&(h.routeReuseStrategy=l),a.errorHandler&&(h.errorHandler=a.errorHandler),a.malformedUriErrorHandler&&(h.malformedUriErrorHandler=a.malformedUriErrorHandler),a.enableTracing){const e=da();h.events.subscribe(t=>{e.logGroup(`Router Event: ${t.constructor.name}`),e.log(t.toString()),e.log(t),e.logGroupEnd()})}return a.onSameUrlNavigation&&(h.onSameUrlNavigation=a.onSameUrlNavigation),a.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=a.paramsInheritanceStrategy),a.urlUpdateStrategy&&(h.urlUpdateStrategy=a.urlUpdateStrategy),a.relativeLinkResolution&&(h.relativeLinkResolution=a.relativeLinkResolution),h},deps:[kh,nd,Ta,zr,oa,As,Ku,ld,[class{},new re],[class{},new re]]},nd,{provide:Wh,useFactory:function(e){return e.routerState.root},deps:[ed]},{provide:oa,useClass:sa},ad,sd,class{preload(e,t){return t().pipe(bl(()=>Lc(null)))}},{provide:ld,useValue:{enableTracing:!1}}];function dd(){return new Gs("Router",ed)}let fd=(()=>{class e{constructor(e,t){}static forRoot(t,n){return{ngModule:e,providers:[ud,bd(t),{provide:hd,useFactory:md,deps:[[ed,new re,new se]]},{provide:ld,useValue:n||{}},{provide:Sa,useFactory:gd,deps:[pa,[new oe(Ea),new re],ld]},{provide:cd,useFactory:pd,deps:[ed,Qa,ld]},{provide:id,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:sd},{provide:Gs,multi:!0,useFactory:dd},[yd,{provide:fs,multi:!0,useFactory:_d,deps:[yd]},{provide:wd,useFactory:vd,deps:[yd]},{provide:vs,multi:!0,useExisting:wd}]]}}static forChild(t){return{ngModule:e,providers:[bd(t)]}}}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)(We(hd,8),We(ed,8))}}),e})();function pd(e,t,n){return n.scrollOffset&&t.setOffset(n.scrollOffset),new cd(e,t,n)}function gd(e,t,n={}){return n.useHash?new Oa(e,t):new Ca(e,t)}function md(e){if(e)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function bd(e){return[{provide:Ur,multi:!0,useValue:e},{provide:Ku,multi:!0,useValue:e}]}let yd=(()=>{class e{constructor(e){this.injector=e,this.initNavigation=!1,this.resultOfPreactivationDone=new E}appInitializer(){return this.injector.get(ma,Promise.resolve(null)).then(()=>{let e=null;const t=new Promise(t=>e=t),n=this.injector.get(ed),o=this.injector.get(ld);if(this.isLegacyDisabled(o)||this.isLegacyEnabled(o))e(!0);else if("disabled"===o.initialNavigation)n.setUpLocationChangeListener(),e(!0);else{if("enabled"!==o.initialNavigation)throw new Error(`Invalid initialNavigation options: '${o.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?Lc(null):(this.initNavigation=!0,e(!0),this.resultOfPreactivationDone),n.initialNavigation()}return t})}bootstrapListener(e){const t=this.injector.get(ld),n=this.injector.get(ad),o=this.injector.get(cd),r=this.injector.get(ed),i=this.injector.get(ta);e===i.components[0]&&(this.isLegacyEnabled(t)?r.initialNavigation():this.isLegacyDisabled(t)&&r.setUpLocationChangeListener(),n.setUpPreloading(),o.init(),r.resetRootComponentType(i.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(e){return"legacy_enabled"===e.initialNavigation||!0===e.initialNavigation||void 0===e.initialNavigation}isLegacyDisabled(e){return"legacy_disabled"===e.initialNavigation||!1===e.initialNavigation}}return e.\u0275fac=function(t){return new(t||e)(We(zr))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();function _d(e){return e.appInitializer.bind(e)}function vd(e){return e.bootstrapListener.bind(e)}const wd=new $e("Router Initializer");function xd(e,t){if(1&e){const e=ci();ii(0,"kor-menu-item",3),ui("click",(function(){Lt(e);const n=t.$implicit;return pi().gotoItem(n)})),si()}if(2&e){const e=t.$implicit;oi("id","menu_"+e.key)("label",e.label)("icon",e.icon)}}let Sd=(()=>{class e{constructor(e,t,n){this.provider=e,this.ref=t,this.router=n,this.menus=new Map,this.unsubscriber=new E}ngOnInit(){this.provider.receiveCommands(Gc.DontCodeModel.APP_ENTITIES,Gc.DontCodeModel.APP_ENTITIES_NAME_NODE).pipe(Oc(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new kd(e.position,e.value,"create")),this.ref.detectChanges()}),this.provider.receiveCommands(Gc.DontCodeModel.APP_SCREENS,Gc.DontCodeModel.APP_SCREENS_NAME_NODE).pipe(Oc(this.unsubscriber)).subscribe(e=>{this.menus.set(e.position,new kd(e.position,e.value,"filter")),this.ref.detectChanges()})}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}gotoPage(e){this.router.navigate([e])}isActive(e){return this.router.isActive(e,!0)}gotoItem(e){this.router.navigate([e.position])}}return e.\u0275fac=function(t){return new(t||e)(ti(el),ti(Er),ti(ed))},e.\u0275cmp=st({type:e,selectors:[["preview-ui-menu"]],decls:4,vars:5,consts:[["label","Home","icon","home",3,"active","toggle","click"],["label","Dev","icon","memory",3,"active","toggle","click"],["toggle","false",3,"id","label","icon","click",4,"ngFor","ngForOf"],["toggle","false",3,"id","label","icon","click"]],template:function(e,t){1&e&&(ii(0,"kor-menu-item",0),ui("click",(function(){return t.gotoPage("/")})),si(),ii(1,"kor-menu-item",1),ui("click",(function(){return t.gotoPage("dev")})),si(),ai(2,"kor-divider"),ei(3,xd,1,3,"kor-menu-item",2)),2&e&&(oi("active",t.isActive("/"))("toggle",!1),co(1),oi("active",t.isActive("dev"))("toggle",!1),co(2),oi("ngForOf",t.menus.values()))},directives:[Da],styles:[""]}),e})();class kd{constructor(e,t,n){e=this.cleanPosition(e),this.position=e,this.key=e.split("/").join("-"),this.label=t.name?t.name:t,this.icon=n||"text_snippet"}cleanPosition(e){return e.startsWith(Gc.DontCodeModel.ROOT)&&(e=e.substr(Gc.DontCodeModel.ROOT.length+1)),e.endsWith(Gc.DontCodeModel.APP_SCREENS_NAME_NODE)&&(e=e.substring(0,e.length-Gc.DontCodeModel.APP_SCREENS_NAME_NODE.length-1)),e}}function Ed(e,t){1&e&&ai(0,"kor-icon",7)}function Cd(e,t){1&e&&ai(0,"kor-icon",8)}function Od(e,t){if(1&e){const e=ci();ii(0,"div"),ii(1,"kor-page"),ii(2,"kor-app-bar",1),ii(3,"kor-icon",2),ui("click",(function(){return Lt(e),pi().logoClicked()})),si(),ii(4,"div",3),ei(5,Ed,1,0,"kor-icon",4),ei(6,Cd,1,0,"kor-icon",5),si(),si(),ii(7,"kor-drawer",6),ui("visible-changed",(function(t){return Lt(e),pi().sidePanelVisibleChanged(t)})),ai(8,"preview-ui-menu"),si(),ai(9,"router-outlet"),si(),si()}if(2&e){const e=t.ngIf,n=pi();co(2),oi("label","Preview "+n.appName),co(3),oi("ngIf","connected"===e.status),co(1),oi("ngIf","connected"!==e.status),co(1),oi("visible",n.sidePanelVisible)}}let Td=(()=>{class e{constructor(e,t){this.provider=e,this.listenerService=t,this.unsubscriber=new E,this.appName="No Name"}ngOnInit(){this.sidePanelVisible=!0,this.provider.receiveCommands(Gc.DontCodeModel.APP_NAME).pipe(Oc(this.unsubscriber)).subscribe(e=>{this.appName=e.value}),this.context$=kc([this.listenerService.getConnectionStatus()]).pipe(F(e=>({status:e[0]})))}ngOnDestroy(){this.unsubscriber.next(),this.unsubscriber.complete()}logoClicked(){this.sidePanelVisible=!0}sidePanelVisibleChanged(e){this.sidePanelVisible=e.target.visible}}return e.\u0275fac=function(t){return new(t||e)(ti(el),ti(Xc))},e.\u0275cmp=st({type:e,selectors:[["preview-ui-main"]],decls:2,vars:3,consts:[[4,"ngIf"],["id","mainToolbar","slot","top","mobile","",3,"label"],["button","","icon","url('./assets/images/logo.png')","slot","left","size","xl",3,"click"],["slot","right"],["icon","sync",4,"ngIf"],["color","rgb(var(--functional-red))","icon","sync_problem",4,"ngIf"],["id","mainSidePanel","label","Menu",3,"visible","visible-changed"],["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(ei(0,Od,10,4,"div",0),hs(1,"async")),2&e&&oi("ngIf",us(1,1,t.context$))},directives:[Fa,Sd,od],pipes:[Ba],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1}"]}),e})(),Pd=(()=>{class e{constructor(){this.title="preview-ui"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=st({type:e,selectors:[["preview-ui-root"]],decls:1,vars:0,template:function(e,t){1&e&&ai(0,"preview-ui-main")},directives:[Td],styles:[""]}),e})();class jd{}function Ad(e,t=null){return{type:2,steps:e,options:t}}function Rd(e){return{type:6,styles:e,offset:null}}function Nd(e){Promise.resolve(null).then(e)}class Id{constructor(e=0,t=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this.parentPlayer=null,this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){Nd(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){}setPosition(e){}getPosition(){return 0}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class Dd{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let t=0,n=0,o=0;const r=this.players.length;0==r?Nd(()=>this._onFinish()):this.players.forEach(e=>{e.onDone(()=>{++t==r&&this._onFinish()}),e.onDestroy(()=>{++n==r&&this._onDestroy()}),e.onStart(()=>{++o==r&&this._onStart()})}),this.totalTime=this.players.reduce((e,t)=>Math.max(e,t.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){const t=e*this.totalTime;this.players.forEach(e=>{const n=e.totalTime?Math.min(1,t/e.totalTime):1;e.setPosition(n)})}getPosition(){let e=0;return this.players.forEach(t=>{const n=t.getPosition();e=Math.min(n,e)}),e}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}function $d(){return"undefined"!=typeof process&&"[object process]"==={}.toString.call(process)}function Fd(e){switch(e.length){case 0:return new Id;case 1:return e[0];default:return new Dd(e)}}function Md(e,t,n,o,r={},i={}){const s=[],a=[];let c=-1,l=null;if(o.forEach(e=>{const n=e.offset,o=n==c,h=o&&l||{};Object.keys(e).forEach(n=>{let o=n,a=e[n];if("offset"!==n)switch(o=t.normalizePropertyName(o,s),a){case"!":a=r[n];break;case"*":a=i[n];break;default:a=t.normalizeStyleValue(n,o,a,s)}h[o]=a}),o||a.push(h),l=h,c=n}),s.length){const e="\n - ";throw new Error(`Unable to animate due to the following errors:${e}${s.join(e)}`)}return a}function Ld(e,t,n,o){switch(t){case"start":e.onStart(()=>o(n&&zd(n,"start",e)));break;case"done":e.onDone(()=>o(n&&zd(n,"done",e)));break;case"destroy":e.onDestroy(()=>o(n&&zd(n,"destroy",e)))}}function zd(e,t,n){const o=n.totalTime,r=Ud(e.element,e.triggerName,e.fromState,e.toState,t||e.phaseName,null==o?e.totalTime:o,!!n.disabled),i=e._data;return null!=i&&(r._data=i),r}function Ud(e,t,n,o,r="",i=0,s){return{element:e,triggerName:t,fromState:n,toState:o,phaseName:r,totalTime:i,disabled:!!s}}function Vd(e,t,n){let o;return e instanceof Map?(o=e.get(t),o||e.set(t,o=n)):(o=e[t],o||(o=e[t]=n)),o}function Hd(e){const t=e.indexOf(":");return[e.substring(1,t),e.substr(t+1)]}let Bd=(e,t)=>!1,qd=(e,t)=>!1,Wd=(e,t,n)=>[];const Qd=$d();(Qd||"undefined"!=typeof Element)&&(Bd=(e,t)=>e.contains(t),qd=(()=>{if(Qd||Element.prototype.matches)return(e,t)=>e.matches(t);{const e=Element.prototype,t=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;return t?(e,n)=>t.apply(e,[n]):qd}})(),Wd=(e,t,n)=>{let o=[];if(n)o.push(...e.querySelectorAll(t));else{const n=e.querySelector(t);n&&o.push(n)}return o});let Kd=null,Zd=!1;function Gd(e){Kd||(Kd=("undefined"!=typeof document?document.body:null)||{},Zd=!!Kd.style&&"WebkitAppearance"in Kd.style);let t=!0;return Kd.style&&!function(e){return"ebkit"==e.substring(1,6)}(e)&&(t=e in Kd.style,!t&&Zd)&&(t="Webkit"+e.charAt(0).toUpperCase()+e.substr(1)in Kd.style),t}const Yd=qd,Jd=Bd,Xd=Wd;function ef(e){const t={};return Object.keys(e).forEach(n=>{const o=n.replace(/([a-z])([A-Z])/g,"$1-$2");t[o]=e[n]}),t}let tf=(()=>{class e{validateStyleProperty(e){return Gd(e)}matchesElement(e,t){return Yd(e,t)}containsElement(e,t){return Jd(e,t)}query(e,t,n){return Xd(e,t,n)}computeStyle(e,t,n){return n||""}animate(e,t,n,o,r,i=[],s){return new Id(n,o)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})(),nf=(()=>{class e{}return e.NOOP=new tf,e})();function of(e){if("number"==typeof e)return e;const t=e.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:rf(parseFloat(t[1]),t[2])}function rf(e,t){switch(t){case"s":return 1e3*e;default:return e}}function sf(e,t,n){return e.hasOwnProperty("duration")?e:function(e,t,n){let o,r=0,i="";if("string"==typeof e){const n=e.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);if(null===n)return t.push(`The provided timing value "${e}" is invalid.`),{duration:0,delay:0,easing:""};o=rf(parseFloat(n[1]),n[2]);const s=n[3];null!=s&&(r=rf(parseFloat(s),n[4]));const a=n[5];a&&(i=a)}else o=e;if(!n){let n=!1,i=t.length;o<0&&(t.push("Duration values below 0 are not allowed for this animation step."),n=!0),r<0&&(t.push("Delay values below 0 are not allowed for this animation step."),n=!0),n&&t.splice(i,0,`The provided timing value "${e}" is invalid.`)}return{duration:o,delay:r,easing:i}}(e,t,n)}function af(e,t={}){return Object.keys(e).forEach(n=>{t[n]=e[n]}),t}function cf(e,t,n={}){if(t)for(let o in e)n[o]=e[o];else af(e,n);return n}function lf(e,t,n){return n?t+":"+n+";":""}function hf(e){let t="";for(let n=0;n<e.style.length;n++){const o=e.style.item(n);t+=lf(0,o,e.style.getPropertyValue(o))}for(const n in e.style)e.style.hasOwnProperty(n)&&!n.startsWith("_")&&(t+=lf(0,n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),e.style[n]));e.setAttribute("style",t)}function uf(e,t,n){e.style&&(Object.keys(t).forEach(o=>{const r=_f(o);n&&!n.hasOwnProperty(o)&&(n[o]=e.style[r]),e.style[r]=t[o]}),$d()&&hf(e))}function df(e,t){e.style&&(Object.keys(t).forEach(t=>{const n=_f(t);e.style[n]=""}),$d()&&hf(e))}function ff(e){return Array.isArray(e)?1==e.length?e[0]:Ad(e):e}const pf=new RegExp("{{\\s*(.+?)\\s*}}","g");function gf(e){let t=[];if("string"==typeof e){let n;for(;n=pf.exec(e);)t.push(n[1]);pf.lastIndex=0}return t}function mf(e,t,n){const o=e.toString(),r=o.replace(pf,(e,o)=>{let r=t[o];return t.hasOwnProperty(o)||(n.push(`Please provide a value for the animation param ${o}`),r=""),r.toString()});return r==o?e:r}function bf(e){const t=[];let n=e.next();for(;!n.done;)t.push(n.value),n=e.next();return t}const yf=/-+([a-z0-9])/g;function _f(e){return e.replace(yf,(...e)=>e[1].toUpperCase())}function vf(e,t){return 0===e||0===t}function wf(e,t,n){const o=Object.keys(n);if(o.length&&t.length){let i=t[0],s=[];if(o.forEach(e=>{i.hasOwnProperty(e)||s.push(e),i[e]=n[e]}),s.length)for(var r=1;r<t.length;r++){let n=t[r];s.forEach((function(t){n[t]=Sf(e,t)}))}}return t}function xf(e,t,n){switch(t.type){case 7:return e.visitTrigger(t,n);case 0:return e.visitState(t,n);case 1:return e.visitTransition(t,n);case 2:return e.visitSequence(t,n);case 3:return e.visitGroup(t,n);case 4:return e.visitAnimate(t,n);case 5:return e.visitKeyframes(t,n);case 6:return e.visitStyle(t,n);case 8:return e.visitReference(t,n);case 9:return e.visitAnimateChild(t,n);case 10:return e.visitAnimateRef(t,n);case 11:return e.visitQuery(t,n);case 12:return e.visitStagger(t,n);default:throw new Error(`Unable to resolve animation metadata node #${t.type}`)}}function Sf(e,t){return window.getComputedStyle(e)[t]}function kf(e,t){const n=[];return"string"==typeof e?e.split(/\s*,\s*/).forEach(e=>function(e,t,n){if(":"==e[0]){const o=function(e,t){switch(e){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,t)=>parseFloat(t)>parseFloat(e);case":decrement":return(e,t)=>parseFloat(t)<parseFloat(e);default:return t.push(`The transition alias value "${e}" is not supported`),"* => *"}}(e,n);if("function"==typeof o)return void t.push(o);e=o}const o=e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(null==o||o.length<4)return n.push(`The provided transition expression "${e}" is not supported`),t;const r=o[1],i=o[2],s=o[3];t.push(Of(r,s)),"<"!=i[0]||"*"==r&&"*"==s||t.push(Of(s,r))}(e,n,t)):n.push(e),n}const Ef=new Set(["true","1"]),Cf=new Set(["false","0"]);function Of(e,t){const n=Ef.has(e)||Cf.has(e),o=Ef.has(t)||Cf.has(t);return(r,i)=>{let s="*"==e||e==r,a="*"==t||t==i;return!s&&n&&"boolean"==typeof r&&(s=r?Ef.has(e):Cf.has(e)),!a&&o&&"boolean"==typeof i&&(a=i?Ef.has(t):Cf.has(t)),s&&a}}const Tf=new RegExp("s*:selfs*,?","g");function Pf(e,t,n){return new jf(e).build(t,n)}class jf{constructor(e){this._driver=e}build(e,t){const n=new Af(t);return this._resetContextStyleTimingState(n),xf(this,ff(e),n)}_resetContextStyleTimingState(e){e.currentQuerySelector="",e.collectedStyles={},e.collectedStyles[""]={},e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,o=t.depCount=0;const r=[],i=[];return"@"==e.name.charAt(0)&&t.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"),e.definitions.forEach(e=>{if(this._resetContextStyleTimingState(t),0==e.type){const n=e,o=n.name;o.toString().split(/\s*,\s*/).forEach(e=>{n.name=e,r.push(this.visitState(n,t))}),n.name=o}else if(1==e.type){const r=this.visitTransition(e,t);n+=r.queryCount,o+=r.depCount,i.push(r)}else t.errors.push("only state() and transition() definitions can sit inside of a trigger()")}),{type:7,name:e.name,states:r,transitions:i,queryCount:n,depCount:o,options:null}}visitState(e,t){const n=this.visitStyle(e.styles,t),o=e.options&&e.options.params||null;if(n.containsDynamicStyles){const r=new Set,i=o||{};if(n.styles.forEach(e=>{if(Rf(e)){const t=e;Object.keys(t).forEach(e=>{gf(t[e]).forEach(e=>{i.hasOwnProperty(e)||r.add(e)})})}}),r.size){const n=bf(r.values());t.errors.push(`state("${e.name}", ...) must define default values for all the following style substitutions: ${n.join(", ")}`)}}return{type:0,name:e.name,style:n,options:o?{params:o}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;const n=xf(this,ff(e.animation),t);return{type:1,matchers:kf(e.expr,t.errors),animation:n,queryCount:t.queryCount,depCount:t.depCount,options:Nf(e.options)}}visitSequence(e,t){return{type:2,steps:e.steps.map(e=>xf(this,e,t)),options:Nf(e.options)}}visitGroup(e,t){const n=t.currentTime;let o=0;const r=e.steps.map(e=>{t.currentTime=n;const r=xf(this,e,t);return o=Math.max(o,t.currentTime),r});return t.currentTime=o,{type:3,steps:r,options:Nf(e.options)}}visitAnimate(e,t){const n=function(e,t){let n=null;if(e.hasOwnProperty("duration"))n=e;else if("number"==typeof e)return If(sf(e,t).duration,0,"");const o=e;if(o.split(/\s+/).some(e=>"{"==e.charAt(0)&&"{"==e.charAt(1))){const e=If(0,0,"");return e.dynamic=!0,e.strValue=o,e}return n=n||sf(o,t),If(n.duration,n.delay,n.easing)}(e.timings,t.errors);let o;t.currentAnimateTimings=n;let r=e.styles?e.styles:Rd({});if(5==r.type)o=this.visitKeyframes(r,t);else{let r=e.styles,i=!1;if(!r){i=!0;const e={};n.easing&&(e.easing=n.easing),r=Rd(e)}t.currentTime+=n.duration+n.delay;const s=this.visitStyle(r,t);s.isEmptyStep=i,o=s}return t.currentAnimateTimings=null,{type:4,timings:n,style:o,options:null}}visitStyle(e,t){const n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){const n=[];Array.isArray(e.styles)?e.styles.forEach(e=>{"string"==typeof e?"*"==e?n.push(e):t.errors.push(`The provided style string value ${e} is not allowed.`):n.push(e)}):n.push(e.styles);let o=!1,r=null;return n.forEach(e=>{if(Rf(e)){const t=e,n=t.easing;if(n&&(r=n,delete t.easing),!o)for(let e in t)if(t[e].toString().indexOf("{{")>=0){o=!0;break}}}),{type:6,styles:n,easing:r,offset:e.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(e,t){const n=t.currentAnimateTimings;let o=t.currentTime,r=t.currentTime;n&&r>0&&(r-=n.duration+n.delay),e.styles.forEach(e=>{"string"!=typeof e&&Object.keys(e).forEach(n=>{if(!this._driver.validateStyleProperty(n))return void t.errors.push(`The provided animation property "${n}" is not a supported CSS property for animations`);const i=t.collectedStyles[t.currentQuerySelector],s=i[n];let a=!0;s&&(r!=o&&r>=s.startTime&&o<=s.endTime&&(t.errors.push(`The CSS property "${n}" that exists between the times of "${s.startTime}ms" and "${s.endTime}ms" is also being animated in a parallel animation between the times of "${r}ms" and "${o}ms"`),a=!1),r=s.startTime),a&&(i[n]={startTime:r,endTime:o}),t.options&&function(e,t,n){const o=t.params||{},r=gf(e);r.length&&r.forEach(e=>{o.hasOwnProperty(e)||n.push(`Unable to resolve the local animation param ${e} in the given list of values`)})}(e[n],t.options,t.errors)})})}visitKeyframes(e,t){const n={type:5,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push("keyframes() must be placed inside of a call to animate()"),n;let o=0;const r=[];let i=!1,s=!1,a=0;const c=e.steps.map(e=>{const n=this._makeStyleAst(e,t);let c=null!=n.offset?n.offset:function(e){if("string"==typeof e)return null;let t=null;if(Array.isArray(e))e.forEach(e=>{if(Rf(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}});else if(Rf(e)&&e.hasOwnProperty("offset")){const n=e;t=parseFloat(n.offset),delete n.offset}return t}(n.styles),l=0;return null!=c&&(o++,l=n.offset=c),s=s||l<0||l>1,i=i||l<a,a=l,r.push(l),n});s&&t.errors.push("Please ensure that all keyframe offsets are between 0 and 1"),i&&t.errors.push("Please ensure that all keyframe offsets are in order");const l=e.steps.length;let h=0;o>0&&o<l?t.errors.push("Not all style() steps within the declared keyframes() contain offsets"):0==o&&(h=1/(l-1));const u=l-1,d=t.currentTime,f=t.currentAnimateTimings,p=f.duration;return c.forEach((e,o)=>{const i=h>0?o==u?1:h*o:r[o],s=i*p;t.currentTime=d+f.delay+s,f.duration=s,this._validateStyleAst(e,t),e.offset=i,n.styles.push(e)}),n}visitReference(e,t){return{type:8,animation:xf(this,ff(e.animation),t),options:Nf(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:9,options:Nf(e.options)}}visitAnimateRef(e,t){return{type:10,animation:this.visitReference(e.animation,t),options:Nf(e.options)}}visitQuery(e,t){const n=t.currentQuerySelector,o=e.options||{};t.queryCount++,t.currentQuery=e;const[r,i]=function(e){const t=!!e.split(/\s*,\s*/).find(e=>":self"==e);return t&&(e=e.replace(Tf,"")),[e=e.replace(/@\*/g,".ng-trigger").replace(/@\w+/g,e=>".ng-trigger-"+e.substr(1)).replace(/:animating/g,".ng-animating"),t]}(e.selector);t.currentQuerySelector=n.length?n+" "+r:r,Vd(t.collectedStyles,t.currentQuerySelector,{});const s=xf(this,ff(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:11,selector:r,limit:o.limit||0,optional:!!o.optional,includeSelf:i,animation:s,originalSelector:e.selector,options:Nf(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push("stagger() can only be used inside of query()");const n="full"===e.timings?{duration:0,delay:0,easing:"full"}:sf(e.timings,t.errors,!0);return{type:12,animation:xf(this,ff(e.animation),t),timings:n,options:null}}}class Af{constructor(e){this.errors=e,this.queryCount=0,this.depCount=0,this.currentTransition=null,this.currentQuery=null,this.currentQuerySelector=null,this.currentAnimateTimings=null,this.currentTime=0,this.collectedStyles={},this.options=null}}function Rf(e){return!Array.isArray(e)&&"object"==typeof e}function Nf(e){var t;return e?(e=af(e)).params&&(e.params=(t=e.params)?af(t):null):e={},e}function If(e,t,n){return{duration:e,delay:t,easing:n}}function Df(e,t,n,o,r,i,s=null,a=!1){return{type:1,element:e,keyframes:t,preStyleProps:n,postStyleProps:o,duration:r,delay:i,totalTime:r+i,easing:s,subTimeline:a}}class $f{constructor(){this._map=new Map}consume(e){let t=this._map.get(e);return t?this._map.delete(e):t=[],t}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}}const Ff=new RegExp(":enter","g"),Mf=new RegExp(":leave","g");function Lf(e,t,n,o,r,i={},s={},a,c,l=[]){return(new zf).buildKeyframes(e,t,n,o,r,i,s,a,c,l)}class zf{buildKeyframes(e,t,n,o,r,i,s,a,c,l=[]){c=c||new $f;const h=new Vf(e,t,c,o,r,l,[]);h.options=a,h.currentTimeline.setStyles([i],null,h.errors,a),xf(this,n,h);const u=h.timelines.filter(e=>e.containsAnimation());if(u.length&&Object.keys(s).length){const e=u[u.length-1];e.allowOnlyTimelineStyles()||e.setStyles([s],null,h.errors,a)}return u.length?u.map(e=>e.buildKeyframes()):[Df(t,[],[],[],0,0,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){const n=t.subInstructions.consume(t.element);if(n){const o=t.createSubContext(e.options),r=t.currentTimeline.currentTime,i=this._visitSubInstructions(n,o,o.options);r!=i&&t.transformIntoNewTimeline(i)}t.previousNode=e}visitAnimateRef(e,t){const n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_visitSubInstructions(e,t,n){let o=t.currentTimeline.currentTime;const r=null!=n.duration?of(n.duration):null,i=null!=n.delay?of(n.delay):null;return 0!==r&&e.forEach(e=>{const n=t.appendInstructionToTimeline(e,r,i);o=Math.max(o,n.duration+n.delay)}),o}visitReference(e,t){t.updateOptions(e.options,!0),xf(this,e.animation,t),t.previousNode=e}visitSequence(e,t){const n=t.subContextCount;let o=t;const r=e.options;if(r&&(r.params||r.delay)&&(o=t.createSubContext(r),o.transformIntoNewTimeline(),null!=r.delay)){6==o.previousNode.type&&(o.currentTimeline.snapshotCurrentStyles(),o.previousNode=Uf);const e=of(r.delay);o.delayNextStep(e)}e.steps.length&&(e.steps.forEach(e=>xf(this,e,o)),o.currentTimeline.applyStylesToKeyframe(),o.subContextCount>n&&o.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){const n=[];let o=t.currentTimeline.currentTime;const r=e.options&&e.options.delay?of(e.options.delay):0;e.steps.forEach(i=>{const s=t.createSubContext(e.options);r&&s.delayNextStep(r),xf(this,i,s),o=Math.max(o,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(e=>t.currentTimeline.mergeTimelineCollectedStyles(e)),t.transformIntoNewTimeline(o),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){const n=e.strValue;return sf(t.params?mf(n,t.params,t.errors):n,t.errors)}return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){const n=t.currentAnimateTimings=this._visitTiming(e.timings,t),o=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),o.snapshotCurrentStyles());const r=e.style;5==r.type?this.visitKeyframes(r,t):(t.incrementTime(n.duration),this.visitStyle(r,t),o.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){const n=t.currentTimeline,o=t.currentAnimateTimings;!o&&n.getCurrentStyleProperties().length&&n.forwardFrame();const r=o&&o.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(r):n.setStyles(e.styles,r,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){const n=t.currentAnimateTimings,o=t.currentTimeline.duration,r=n.duration,i=t.createSubContext().currentTimeline;i.easing=n.easing,e.styles.forEach(e=>{i.forwardTime((e.offset||0)*r),i.setStyles(e.styles,e.easing,t.errors,t.options),i.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(i),t.transformIntoNewTimeline(o+r),t.previousNode=e}visitQuery(e,t){const n=t.currentTimeline.currentTime,o=e.options||{},r=o.delay?of(o.delay):0;r&&(6===t.previousNode.type||0==n&&t.currentTimeline.getCurrentStyleProperties().length)&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Uf);let i=n;const s=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!o.optional,t.errors);t.currentQueryTotal=s.length;let a=null;s.forEach((n,o)=>{t.currentQueryIndex=o;const s=t.createSubContext(e.options,n);r&&s.delayNextStep(r),n===t.element&&(a=s.currentTimeline),xf(this,e.animation,s),s.currentTimeline.applyStylesToKeyframe(),i=Math.max(i,s.currentTimeline.currentTime)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(i),a&&(t.currentTimeline.mergeTimelineCollectedStyles(a),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){const n=t.parentContext,o=t.currentTimeline,r=e.timings,i=Math.abs(r.duration),s=i*(t.currentQueryTotal-1);let a=i*t.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":a=s-a;break;case"full":a=n.currentStaggerTime}const c=t.currentTimeline;a&&c.delayNextStep(a);const l=c.currentTime;xf(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=o.currentTime-l+(o.startTime-n.currentTimeline.startTime)}}const Uf={};class Vf{constructor(e,t,n,o,r,i,s,a){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=o,this._leaveClassName=r,this.errors=i,this.timelines=s,this.parentContext=null,this.currentAnimateTimings=null,this.previousNode=Uf,this.subContextCount=0,this.options={},this.currentQueryIndex=0,this.currentQueryTotal=0,this.currentStaggerTime=0,this.currentTimeline=a||new Hf(this._driver,t,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;const n=e;let o=this.options;null!=n.duration&&(o.duration=of(n.duration)),null!=n.delay&&(o.delay=of(n.delay));const r=n.params;if(r){let e=o.params;e||(e=this.options.params={}),Object.keys(r).forEach(n=>{t&&e.hasOwnProperty(n)||(e[n]=mf(r[n],e,this.errors))})}}_copyOptions(){const e={};if(this.options){const t=this.options.params;if(t){const n=e.params={};Object.keys(t).forEach(e=>{n[e]=t[e]})}}return e}createSubContext(e=null,t,n){const o=t||this.element,r=new Vf(this._driver,o,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(o,n||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(e),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(e){return this.previousNode=Uf,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){const o={duration:null!=t?t:e.duration,delay:this.currentTimeline.currentTime+(null!=n?n:0)+e.delay,easing:""},r=new Bf(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,o,e.stretchStartingKeyframe);return this.timelines.push(r),o}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,o,r,i){let s=[];if(o&&s.push(this.element),e.length>0){e=(e=e.replace(Ff,"."+this._enterClassName)).replace(Mf,"."+this._leaveClassName);let t=this._driver.query(this.element,e,1!=n);0!==n&&(t=n<0?t.slice(t.length+n,t.length):t.slice(0,n)),s.push(...t)}return r||0!=s.length||i.push(`\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`),s}}class Hf{constructor(e,t,n,o){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=o,this.duration=0,this._previousKeyframe={},this._currentKeyframe={},this._keyframes=new Map,this._styleSummary={},this._pendingStyles={},this._backFill={},this._currentEmptyStepKeyframe=null,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._localTimelineStyles=Object.create(this._backFill,{}),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.getCurrentStyleProperties().length>0;default:return!0}}getCurrentStyleProperties(){return Object.keys(this._currentKeyframe)}get currentTime(){return this.startTime+this.duration}delayNextStep(e){const t=1==this._keyframes.size&&Object.keys(this._pendingStyles).length;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new Hf(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=Object.create(this._backFill,{}),this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=1,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles[e]=t,this._globalTimelineStyles[e]=t,this._styleSummary[e]={time:this.currentTime,value:t}}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&(this._previousKeyframe.easing=e),Object.keys(this._globalTimelineStyles).forEach(e=>{this._backFill[e]=this._globalTimelineStyles[e]||"*",this._currentKeyframe[e]="*"}),this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,o){t&&(this._previousKeyframe.easing=t);const r=o&&o.params||{},i=function(e,t){const n={};let o;return e.forEach(e=>{"*"===e?(o=o||Object.keys(t),o.forEach(e=>{n[e]="*"})):cf(e,!1,n)}),n}(e,this._globalTimelineStyles);Object.keys(i).forEach(e=>{const t=mf(i[e],r,n);this._pendingStyles[e]=t,this._localTimelineStyles.hasOwnProperty(e)||(this._backFill[e]=this._globalTimelineStyles.hasOwnProperty(e)?this._globalTimelineStyles[e]:"*"),this._updateStyle(e,t)})}applyStylesToKeyframe(){const e=this._pendingStyles,t=Object.keys(e);0!=t.length&&(this._pendingStyles={},t.forEach(t=>{this._currentKeyframe[t]=e[t]}),Object.keys(this._localTimelineStyles).forEach(e=>{this._currentKeyframe.hasOwnProperty(e)||(this._currentKeyframe[e]=this._localTimelineStyles[e])}))}snapshotCurrentStyles(){Object.keys(this._localTimelineStyles).forEach(e=>{const t=this._localTimelineStyles[e];this._pendingStyles[e]=t,this._updateStyle(e,t)})}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){const e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){Object.keys(e._styleSummary).forEach(t=>{const n=this._styleSummary[t],o=e._styleSummary[t];(!n||o.time>n.time)&&this._updateStyle(t,o.value)})}buildKeyframes(){this.applyStylesToKeyframe();const e=new Set,t=new Set,n=1===this._keyframes.size&&0===this.duration;let o=[];this._keyframes.forEach((r,i)=>{const s=cf(r,!0);Object.keys(s).forEach(n=>{const o=s[n];"!"==o?e.add(n):"*"==o&&t.add(n)}),n||(s.offset=i/this.duration),o.push(s)});const r=e.size?bf(e.values()):[],i=t.size?bf(t.values()):[];if(n){const e=o[0],t=af(e);e.offset=0,t.offset=1,o=[e,t]}return Df(this.element,o,r,i,this.duration,this.startTime,this.easing,!1)}}class Bf extends Hf{constructor(e,t,n,o,r,i,s=!1){super(e,t,i.delay),this.element=t,this.keyframes=n,this.preStyleProps=o,this.postStyleProps=r,this._stretchStartingKeyframe=s,this.timings={duration:i.duration,delay:i.delay,easing:i.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:o}=this.timings;if(this._stretchStartingKeyframe&&t){const r=[],i=n+t,s=t/i,a=cf(e[0],!1);a.offset=0,r.push(a);const c=cf(e[0],!1);c.offset=qf(s),r.push(c);const l=e.length-1;for(let o=1;o<=l;o++){let s=cf(e[o],!1);s.offset=qf((t+s.offset*n)/i),r.push(s)}n=i,t=0,o="",e=r}return Df(this.element,e,this.preStyleProps,this.postStyleProps,n,t,o,!0)}}function qf(e,t=3){const n=Math.pow(10,t-1);return Math.round(e*n)/n}class Wf{}class Qf extends Wf{normalizePropertyName(e,t){return _f(e)}normalizeStyleValue(e,t,n,o){let r="";const i=n.toString().trim();if(Kf[t]&&0!==n&&"0"!==n)if("number"==typeof n)r="px";else{const t=n.match(/^[+-]?[\d\.]+([a-z]*)$/);t&&0==t[1].length&&o.push(`Please provide a CSS unit value for ${e}:${n}`)}return i+r}}const Kf=(()=>function(e){const t={};return e.forEach(e=>t[e]=!0),t}("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))();function Zf(e,t,n,o,r,i,s,a,c,l,h,u,d){return{type:0,element:e,triggerName:t,isRemovalTransition:r,fromState:n,fromStyles:i,toState:o,toStyles:s,timelines:a,queriedElements:c,preStyleProps:l,postStyleProps:h,totalTime:u,errors:d}}const Gf={};class Yf{constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,o){return function(e,t,n,o,r){return e.some(e=>e(t,n,o,r))}(this.ast.matchers,e,t,n,o)}buildStyles(e,t,n){const o=this._stateStyles["*"],r=this._stateStyles[e],i=o?o.buildStyles(t,n):{};return r?r.buildStyles(t,n):i}build(e,t,n,o,r,i,s,a,c,l){const h=[],u=this.ast.options&&this.ast.options.params||Gf,d=this.buildStyles(n,s&&s.params||Gf,h),f=a&&a.params||Gf,p=this.buildStyles(o,f,h),g=new Set,m=new Map,b=new Map,y="void"===o,_={params:Object.assign(Object.assign({},u),f)},v=l?[]:Lf(e,t,this.ast.animation,r,i,d,p,_,c,h);let w=0;if(v.forEach(e=>{w=Math.max(e.duration+e.delay,w)}),h.length)return Zf(t,this._triggerName,n,o,y,d,p,[],[],m,b,w,h);v.forEach(e=>{const n=e.element,o=Vd(m,n,{});e.preStyleProps.forEach(e=>o[e]=!0);const r=Vd(b,n,{});e.postStyleProps.forEach(e=>r[e]=!0),n!==t&&g.add(n)});const x=bf(g.values());return Zf(t,this._triggerName,n,o,y,d,p,v,x,m,b,w)}}class Jf{constructor(e,t){this.styles=e,this.defaultParams=t}buildStyles(e,t){const n={},o=af(this.defaultParams);return Object.keys(e).forEach(t=>{const n=e[t];null!=n&&(o[t]=n)}),this.styles.styles.forEach(e=>{if("string"!=typeof e){const r=e;Object.keys(r).forEach(e=>{let i=r[e];i.length>1&&(i=mf(i,o,t)),n[e]=i})}}),n}}class Xf{constructor(e,t){this.name=e,this.ast=t,this.transitionFactories=[],this.states={},t.states.forEach(e=>{this.states[e.name]=new Jf(e.style,e.options&&e.options.params||{})}),ep(this.states,"true","1"),ep(this.states,"false","0"),t.transitions.forEach(t=>{this.transitionFactories.push(new Yf(e,t,this.states))}),this.fallbackTransition=new Yf(e,{type:1,animation:{type:2,steps:[],options:null},matchers:[(e,t)=>!0],options:null,queryCount:0,depCount:0},this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,o){return this.transitionFactories.find(r=>r.match(e,t,n,o))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}}function ep(e,t,n){e.hasOwnProperty(t)?e.hasOwnProperty(n)||(e[n]=e[t]):e.hasOwnProperty(n)&&(e[t]=e[n])}const tp=new $f;class np{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n,this._animations={},this._playersById={},this.players=[]}register(e,t){const n=[],o=Pf(this._driver,t,n);if(n.length)throw new Error(`Unable to build the animation due to the following errors: ${n.join("\n")}`);this._animations[e]=o}_buildPlayer(e,t,n){const o=e.element,r=Md(0,this._normalizer,0,e.keyframes,t,n);return this._driver.animate(o,r,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){const o=[],r=this._animations[e];let i;const s=new Map;if(r?(i=Lf(this._driver,t,r,"ng-enter","ng-leave",{},{},n,tp,o),i.forEach(e=>{const t=Vd(s,e.element,{});e.postStyleProps.forEach(e=>t[e]=null)})):(o.push("The requested animation doesn't exist or has already been destroyed"),i=[]),o.length)throw new Error(`Unable to create the animation due to the following errors: ${o.join("\n")}`);s.forEach((e,t)=>{Object.keys(e).forEach(n=>{e[n]=this._driver.computeStyle(t,n,"*")})});const a=Fd(i.map(e=>{const t=s.get(e.element);return this._buildPlayer(e,{},t)}));return this._playersById[e]=a,a.onDestroy(()=>this.destroy(e)),this.players.push(a),a}destroy(e){const t=this._getPlayer(e);t.destroy(),delete this._playersById[e];const n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){const t=this._playersById[e];if(!t)throw new Error(`Unable to find the timeline player referenced by ${e}`);return t}listen(e,t,n,o){const r=Ud(t,"","","");return Ld(this._getPlayer(e),n,r,o),()=>{}}command(e,t,n,o){if("register"==n)return void this.register(e,o[0]);if("create"==n)return void this.create(e,t,o[0]||{});const r=this._getPlayer(e);switch(n){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(o[0]));break;case"destroy":this.destroy(e)}}}const op=[],rp={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},ip={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};class sp{constructor(e,t=""){this.namespaceId=t;const n=e&&e.hasOwnProperty("value");if(this.value=null!=(o=n?e.value:e)?o:null,n){const t=af(e);delete t.value,this.options=t}else this.options={};var o;this.options.params||(this.options.params={})}get params(){return this.options.params}absorbOptions(e){const t=e.params;if(t){const e=this.options.params;Object.keys(t).forEach(n=>{null==e[n]&&(e[n]=t[n])})}}}const ap=new sp("void");class cp{constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this.players=[],this._triggers={},this._queue=[],this._elementListeners=new Map,this._hostClassName="ng-tns-"+e,gp(t,this._hostClassName)}listen(e,t,n,o){if(!this._triggers.hasOwnProperty(t))throw new Error(`Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`);if(null==n||0==n.length)throw new Error(`Unable to listen on the animation trigger "${t}" because the provided event is undefined!`);if("start"!=(r=n)&&"done"!=r)throw new Error(`The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`);var r;const i=Vd(this._elementListeners,e,[]),s={name:t,phase:n,callback:o};i.push(s);const a=Vd(this._engine.statesByElement,e,{});return a.hasOwnProperty(t)||(gp(e,"ng-trigger"),gp(e,"ng-trigger-"+t),a[t]=ap),()=>{this._engine.afterFlush(()=>{const e=i.indexOf(s);e>=0&&i.splice(e,1),this._triggers[t]||delete a[t]})}}register(e,t){return!this._triggers[e]&&(this._triggers[e]=t,!0)}_getTrigger(e){const t=this._triggers[e];if(!t)throw new Error(`The provided animation trigger "${e}" has not been registered!`);return t}trigger(e,t,n,o=!0){const r=this._getTrigger(t),i=new hp(this.id,t,e);let s=this._engine.statesByElement.get(e);s||(gp(e,"ng-trigger"),gp(e,"ng-trigger-"+t),this._engine.statesByElement.set(e,s={}));let a=s[t];const c=new sp(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&a&&c.absorbOptions(a.options),s[t]=c,a||(a=ap),"void"!==c.value&&a.value===c.value){if(!function(e,t){const n=Object.keys(e),o=Object.keys(t);if(n.length!=o.length)return!1;for(let r=0;r<n.length;r++){const o=n[r];if(!t.hasOwnProperty(o)||e[o]!==t[o])return!1}return!0}(a.params,c.params)){const t=[],n=r.matchStyles(a.value,a.params,t),o=r.matchStyles(c.value,c.params,t);t.length?this._engine.reportError(t):this._engine.afterFlush(()=>{df(e,n),uf(e,o)})}return}const l=Vd(this._engine.playersByElement,e,[]);l.forEach(e=>{e.namespaceId==this.id&&e.triggerName==t&&e.queued&&e.destroy()});let h=r.matchTransition(a.value,c.value,e,c.params),u=!1;if(!h){if(!o)return;h=r.fallbackTransition,u=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:h,fromState:a,toState:c,player:i,isFallbackTransition:u}),u||(gp(e,"ng-animate-queued"),i.onStart(()=>{mp(e,"ng-animate-queued")})),i.onDone(()=>{let t=this.players.indexOf(i);t>=0&&this.players.splice(t,1);const n=this._engine.playersByElement.get(e);if(n){let e=n.indexOf(i);e>=0&&n.splice(e,1)}}),this.players.push(i),l.push(i),i}deregister(e){delete this._triggers[e],this._engine.statesByElement.forEach((t,n)=>{delete t[e]}),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(t=>t.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);const t=this._engine.playersByElement.get(e);t&&(t.forEach(e=>e.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){const n=this._engine.driver.query(e,".ng-trigger",!0);n.forEach(e=>{if(e.__ng_removed)return;const n=this._engine.fetchNamespacesByElement(e);n.size?n.forEach(n=>n.triggerLeaveAnimation(e,t,!1,!0)):this.clearElementCache(e)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(e=>this.clearElementCache(e)))}triggerLeaveAnimation(e,t,n,o){const r=this._engine.statesByElement.get(e);if(r){const i=[];if(Object.keys(r).forEach(t=>{if(this._triggers[t]){const n=this.trigger(e,t,"void",o);n&&i.push(n)}}),i.length)return this._engine.markElementAsRemoved(this.id,e,!0,t),n&&Fd(i).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){const t=this._elementListeners.get(e);if(t){const n=new Set;t.forEach(t=>{const o=t.name;if(n.has(o))return;n.add(o);const r=this._triggers[o].fallbackTransition,i=this._engine.statesByElement.get(e)[o]||ap,s=new sp("void"),a=new hp(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:r,fromState:i,toState:s,player:a,isFallbackTransition:!0})})}}removeNode(e,t){const n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let o=!1;if(n.totalAnimations){const t=n.players.length?n.playersByQueriedElement.get(e):[];if(t&&t.length)o=!0;else{let t=e;for(;t=t.parentNode;)if(n.statesByElement.get(t)){o=!0;break}}}if(this.prepareLeaveAnimationListeners(e),o)n.markElementAsRemoved(this.id,e,!1,t);else{const o=e.__ng_removed;o&&o!==rp||(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){gp(e,this._hostClassName)}drainQueuedTransitions(e){const t=[];return this._queue.forEach(n=>{const o=n.player;if(o.destroyed)return;const r=n.element,i=this._elementListeners.get(r);i&&i.forEach(t=>{if(t.name==n.triggerName){const o=Ud(r,n.triggerName,n.fromState.value,n.toState.value);o._data=e,Ld(n.player,t.phase,o,t.callback)}}),o.markedForDestroy?this._engine.afterFlush(()=>{o.destroy()}):t.push(n)}),this._queue=[],t.sort((e,t)=>{const n=e.transition.ast.depCount,o=t.transition.ast.depCount;return 0==n||0==o?n-o:this._engine.driver.containsElement(e.element,t.element)?1:-1})}destroy(e){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}elementContainsData(e){let t=!1;return this._elementListeners.has(e)&&(t=!0),t=!!this._queue.find(t=>t.element===e)||t,t}}class lp{constructor(e,t,n){this.bodyNode=e,this.driver=t,this._normalizer=n,this.players=[],this.newHostElements=new Map,this.playersByElement=new Map,this.playersByQueriedElement=new Map,this.statesByElement=new Map,this.disabledNodes=new Set,this.totalAnimations=0,this.totalQueuedPlayers=0,this._namespaceLookup={},this._namespaceList=[],this._flushFns=[],this._whenQuietFns=[],this.namespacesByHostElement=new Map,this.collectedEnterElements=[],this.collectedLeaveElements=[],this.onRemovalComplete=(e,t)=>{}}_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}get queuedPlayers(){const e=[];return this._namespaceList.forEach(t=>{t.players.forEach(t=>{t.queued&&e.push(t)})}),e}createNamespace(e,t){const n=new cp(e,t,this);return t.parentNode?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){const n=this._namespaceList.length-1;if(n>=0){let o=!1;for(let r=n;r>=0;r--)if(this.driver.containsElement(this._namespaceList[r].hostElement,t)){this._namespaceList.splice(r+1,0,e),o=!0;break}o||this._namespaceList.splice(0,0,e)}else this._namespaceList.push(e);return this.namespacesByHostElement.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let o=this._namespaceLookup[e];o&&o.register(t,n)&&this.totalAnimations++}destroy(e,t){if(!e)return;const n=this._fetchNamespace(e);this.afterFlush(()=>{this.namespacesByHostElement.delete(n.hostElement),delete this._namespaceLookup[e];const t=this._namespaceList.indexOf(n);t>=0&&this._namespaceList.splice(t,1)}),this.afterFlushAnimationsDone(()=>n.destroy(t))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){const t=new Set,n=this.statesByElement.get(e);if(n){const e=Object.keys(n);for(let o=0;o<e.length;o++){const r=n[e[o]].namespaceId;if(r){const e=this._fetchNamespace(r);e&&t.add(e)}}}return t}trigger(e,t,n,o){if(up(t)){const r=this._fetchNamespace(e);if(r)return r.trigger(t,n,o),!0}return!1}insertNode(e,t,n,o){if(!up(t))return;const r=t.__ng_removed;if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;const e=this.collectedLeaveElements.indexOf(t);e>=0&&this.collectedLeaveElements.splice(e,1)}if(e){const o=this._fetchNamespace(e);o&&o.insertNode(t,n)}o&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),gp(e,"ng-animate-disabled")):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),mp(e,"ng-animate-disabled"))}removeNode(e,t,n,o){if(up(t)){const r=e?this._fetchNamespace(e):null;if(r?r.removeNode(t,o):this.markElementAsRemoved(e,t,!1,o),n){const n=this.namespacesByHostElement.get(t);n&&n.id!==e&&n.removeNode(t,o)}}else this._onRemovalComplete(t,o)}markElementAsRemoved(e,t,n,o){this.collectedLeaveElements.push(t),t.__ng_removed={namespaceId:e,setForRemoval:o,hasAnimation:n,removedBeforeQueried:!1}}listen(e,t,n,o,r){return up(t)?this._fetchNamespace(e).listen(t,n,o,r):()=>{}}_buildInstruction(e,t,n,o,r){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,o,e.fromState.options,e.toState.options,t,r)}destroyInnerAnimations(e){let t=this.driver.query(e,".ng-trigger",!0);t.forEach(e=>this.destroyActiveAnimationsForElement(e)),0!=this.playersByQueriedElement.size&&(t=this.driver.query(e,".ng-animating",!0),t.forEach(e=>this.finishActiveQueriedAnimationOnElement(e)))}destroyActiveAnimationsForElement(e){const t=this.playersByElement.get(e);t&&t.forEach(e=>{e.queued?e.markedForDestroy=!0:e.destroy()})}finishActiveQueriedAnimationOnElement(e){const t=this.playersByQueriedElement.get(e);t&&t.forEach(e=>e.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Fd(this.players).onDone(()=>e());e()})}processLeaveNode(e){const t=e.__ng_removed;if(t&&t.setForRemoval){if(e.__ng_removed=rp,t.namespaceId){this.destroyInnerAnimations(e);const n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}this.driver.matchesElement(e,".ng-animate-disabled")&&this.markElementAsDisabled(e,!1),this.driver.query(e,".ng-animate-disabled",!0).forEach(e=>{this.markElementAsDisabled(e,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((e,t)=>this._balanceNamespaceList(e,t)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++)gp(this.collectedEnterElements[n],"ng-star-inserted");if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){const n=[];try{t=this._flushAnimations(n,e)}finally{for(let e=0;e<n.length;e++)n[e]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++)this.processLeaveNode(this.collectedLeaveElements[n]);if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(e=>e()),this._flushFns=[],this._whenQuietFns.length){const e=this._whenQuietFns;this._whenQuietFns=[],t.length?Fd(t).onDone(()=>{e.forEach(e=>e())}):e.forEach(e=>e())}}reportError(e){throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${e.join("\n")}`)}_flushAnimations(e,t){const n=new $f,o=[],r=new Map,i=[],s=new Map,a=new Map,c=new Map,l=new Set;this.disabledNodes.forEach(e=>{l.add(e);const t=this.driver.query(e,".ng-animate-queued",!0);for(let n=0;n<t.length;n++)l.add(t[n])});const h=this.bodyNode,u=Array.from(this.statesByElement.keys()),d=pp(u,this.collectedEnterElements),f=new Map;let p=0;d.forEach((e,t)=>{const n="ng-enter"+p++;f.set(t,n),e.forEach(e=>gp(e,n))});const g=[],m=new Set,b=new Set;for(let j=0;j<this.collectedLeaveElements.length;j++){const e=this.collectedLeaveElements[j],t=e.__ng_removed;t&&t.setForRemoval&&(g.push(e),m.add(e),t.hasAnimation?this.driver.query(e,".ng-star-inserted",!0).forEach(e=>m.add(e)):b.add(e))}const y=new Map,_=pp(u,Array.from(m));_.forEach((e,t)=>{const n="ng-leave"+p++;y.set(t,n),e.forEach(e=>gp(e,n))}),e.push(()=>{d.forEach((e,t)=>{const n=f.get(t);e.forEach(e=>mp(e,n))}),_.forEach((e,t)=>{const n=y.get(t);e.forEach(e=>mp(e,n))}),g.forEach(e=>{this.processLeaveNode(e)})});const v=[],w=[];for(let j=this._namespaceList.length-1;j>=0;j--)this._namespaceList[j].drainQueuedTransitions(t).forEach(e=>{const t=e.player,r=e.element;if(v.push(t),this.collectedEnterElements.length){const e=r.__ng_removed;if(e&&e.setForMove)return void t.destroy()}const l=!h||!this.driver.containsElement(h,r),u=y.get(r),d=f.get(r),p=this._buildInstruction(e,n,d,u,l);if(!p.errors||!p.errors.length)return l||e.isFallbackTransition?(t.onStart(()=>df(r,p.fromStyles)),t.onDestroy(()=>uf(r,p.toStyles)),void o.push(t)):(p.timelines.forEach(e=>e.stretchStartingKeyframe=!0),n.append(r,p.timelines),i.push({instruction:p,player:t,element:r}),p.queriedElements.forEach(e=>Vd(s,e,[]).push(t)),p.preStyleProps.forEach((e,t)=>{const n=Object.keys(e);if(n.length){let e=a.get(t);e||a.set(t,e=new Set),n.forEach(t=>e.add(t))}}),void p.postStyleProps.forEach((e,t)=>{const n=Object.keys(e);let o=c.get(t);o||c.set(t,o=new Set),n.forEach(e=>o.add(e))}));w.push(p)});if(w.length){const e=[];w.forEach(t=>{e.push(`@${t.triggerName} has failed due to:\n`),t.errors.forEach(t=>e.push(`- ${t}\n`))}),v.forEach(e=>e.destroy()),this.reportError(e)}const x=new Map,S=new Map;i.forEach(e=>{const t=e.element;n.has(t)&&(S.set(t,t),this._beforeAnimationBuild(e.player.namespaceId,e.instruction,x))}),o.forEach(e=>{const t=e.element;this._getPreviousPlayers(t,!1,e.namespaceId,e.triggerName,null).forEach(e=>{Vd(x,t,[]).push(e),e.destroy()})});const k=g.filter(e=>yp(e,a,c)),E=new Map;fp(E,this.driver,b,c,"*").forEach(e=>{yp(e,a,c)&&k.push(e)});const C=new Map;d.forEach((e,t)=>{fp(C,this.driver,new Set(e),a,"!")}),k.forEach(e=>{const t=E.get(e),n=C.get(e);E.set(e,Object.assign(Object.assign({},t),n))});const O=[],T=[],P={};i.forEach(e=>{const{element:t,player:i,instruction:s}=e;if(n.has(t)){if(l.has(t))return i.onDestroy(()=>uf(t,s.toStyles)),i.disabled=!0,i.overrideTotalTime(s.totalTime),void o.push(i);let e=P;if(S.size>1){let n=t;const o=[];for(;n=n.parentNode;){const t=S.get(n);if(t){e=t;break}o.push(n)}o.forEach(t=>S.set(t,e))}const n=this._buildAnimation(i.namespaceId,s,x,r,C,E);if(i.setRealPlayer(n),e===P)O.push(i);else{const t=this.playersByElement.get(e);t&&t.length&&(i.parentPlayer=Fd(t)),o.push(i)}}else df(t,s.fromStyles),i.onDestroy(()=>uf(t,s.toStyles)),T.push(i),l.has(t)&&o.push(i)}),T.forEach(e=>{const t=r.get(e.element);if(t&&t.length){const n=Fd(t);e.setRealPlayer(n)}}),o.forEach(e=>{e.parentPlayer?e.syncPlayerEvents(e.parentPlayer):e.destroy()});for(let j=0;j<g.length;j++){const e=g[j],t=e.__ng_removed;if(mp(e,"ng-leave"),t&&t.hasAnimation)continue;let n=[];if(s.size){let t=s.get(e);t&&t.length&&n.push(...t);let o=this.driver.query(e,".ng-animating",!0);for(let e=0;e<o.length;e++){let t=s.get(o[e]);t&&t.length&&n.push(...t)}}const o=n.filter(e=>!e.destroyed);o.length?bp(this,e,o):this.processLeaveNode(e)}return g.length=0,O.forEach(e=>{this.players.push(e),e.onDone(()=>{e.destroy();const t=this.players.indexOf(e);this.players.splice(t,1)}),e.play()}),O}elementContainsData(e,t){let n=!1;const o=t.__ng_removed;return o&&o.setForRemoval&&(n=!0),this.playersByElement.has(t)&&(n=!0),this.playersByQueriedElement.has(t)&&(n=!0),this.statesByElement.has(t)&&(n=!0),this._fetchNamespace(e).elementContainsData(t)||n}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,o,r){let i=[];if(t){const t=this.playersByQueriedElement.get(e);t&&(i=t)}else{const t=this.playersByElement.get(e);if(t){const e=!r||"void"==r;t.forEach(t=>{t.queued||(e||t.triggerName==o)&&i.push(t)})}}return(n||o)&&(i=i.filter(e=>!(n&&n!=e.namespaceId||o&&o!=e.triggerName))),i}_beforeAnimationBuild(e,t,n){const o=t.element,r=t.isRemovalTransition?void 0:e,i=t.isRemovalTransition?void 0:t.triggerName;for(const s of t.timelines){const e=s.element,a=e!==o,c=Vd(n,e,[]);this._getPreviousPlayers(e,a,r,i,t.toState).forEach(e=>{const t=e.getRealPlayer();t.beforeDestroy&&t.beforeDestroy(),e.destroy(),c.push(e)})}df(o,t.fromStyles)}_buildAnimation(e,t,n,o,r,i){const s=t.triggerName,a=t.element,c=[],l=new Set,h=new Set,u=t.timelines.map(t=>{const u=t.element;l.add(u);const d=u.__ng_removed;if(d&&d.removedBeforeQueried)return new Id(t.duration,t.delay);const f=u!==a,p=function(e){const t=[];return function e(t,n){for(let o=0;o<t.length;o++){const r=t[o];r instanceof Dd?e(r.players,n):n.push(r)}}(e,t),t}((n.get(u)||op).map(e=>e.getRealPlayer())).filter(e=>!!e.element&&e.element===u),g=r.get(u),m=i.get(u),b=Md(0,this._normalizer,0,t.keyframes,g,m),y=this._buildPlayer(t,b,p);if(t.subTimeline&&o&&h.add(u),f){const t=new hp(e,s,u);t.setRealPlayer(y),c.push(t)}return y});c.forEach(e=>{Vd(this.playersByQueriedElement,e.element,[]).push(e),e.onDone(()=>function(e,t,n){let o;if(e instanceof Map){if(o=e.get(t),o){if(o.length){const e=o.indexOf(n);o.splice(e,1)}0==o.length&&e.delete(t)}}else if(o=e[t],o){if(o.length){const e=o.indexOf(n);o.splice(e,1)}0==o.length&&delete e[t]}return o}(this.playersByQueriedElement,e.element,e))}),l.forEach(e=>gp(e,"ng-animating"));const d=Fd(u);return d.onDestroy(()=>{l.forEach(e=>mp(e,"ng-animating")),uf(a,t.toStyles)}),h.forEach(e=>{Vd(o,e,[]).push(d)}),d}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new Id(e.duration,e.delay)}}class hp{constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n,this._player=new Id,this._containsRealPlayer=!1,this._queuedCallbacks={},this.destroyed=!1,this.markedForDestroy=!1,this.disabled=!1,this.queued=!0,this.totalTime=0}setRealPlayer(e){this._containsRealPlayer||(this._player=e,Object.keys(this._queuedCallbacks).forEach(t=>{this._queuedCallbacks[t].forEach(n=>Ld(e,t,void 0,n))}),this._queuedCallbacks={},this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){const t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){Vd(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return!this.queued&&this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){const t=this._player;t.triggerCallback&&t.triggerCallback(e)}}function up(e){return e&&1===e.nodeType}function dp(e,t){const n=e.style.display;return e.style.display=null!=t?t:"none",n}function fp(e,t,n,o,r){const i=[];n.forEach(e=>i.push(dp(e)));const s=[];o.forEach((n,o)=>{const i={};n.forEach(e=>{const n=i[e]=t.computeStyle(o,e,r);n&&0!=n.length||(o.__ng_removed=ip,s.push(o))}),e.set(o,i)});let a=0;return n.forEach(e=>dp(e,i[a++])),s}function pp(e,t){const n=new Map;if(e.forEach(e=>n.set(e,[])),0==t.length)return n;const o=new Set(t),r=new Map;return t.forEach(e=>{const t=function e(t){if(!t)return 1;let i=r.get(t);if(i)return i;const s=t.parentNode;return i=n.has(s)?s:o.has(s)?1:e(s),r.set(t,i),i}(e);1!==t&&n.get(t).push(e)}),n}function gp(e,t){if(e.classList)e.classList.add(t);else{let n=e.$$classes;n||(n=e.$$classes={}),n[t]=!0}}function mp(e,t){if(e.classList)e.classList.remove(t);else{let n=e.$$classes;n&&delete n[t]}}function bp(e,t,n){Fd(n).onDone(()=>e.processLeaveNode(t))}function yp(e,t,n){const o=n.get(e);if(!o)return!1;let r=t.get(e);return r?o.forEach(e=>r.add(e)):t.set(e,o),n.delete(e),!0}class _p{constructor(e,t,n){this.bodyNode=e,this._driver=t,this._triggerCache={},this.onRemovalComplete=(e,t)=>{},this._transitionEngine=new lp(e,t,n),this._timelineEngine=new np(e,t,n),this._transitionEngine.onRemovalComplete=(e,t)=>this.onRemovalComplete(e,t)}registerTrigger(e,t,n,o,r){const i=e+"-"+o;let s=this._triggerCache[i];if(!s){const e=[],t=Pf(this._driver,r,e);if(e.length)throw new Error(`The animation trigger "${o}" has failed to build due to the following errors:\n - ${e.join("\n - ")}`);s=function(e,t){return new Xf(e,t)}(o,t),this._triggerCache[i]=s}this._transitionEngine.registerTrigger(t,o,s)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,o){this._transitionEngine.insertNode(e,t,n,o)}onRemove(e,t,n,o){this._transitionEngine.removeNode(e,t,o||!1,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,o){if("@"==n.charAt(0)){const[e,r]=Hd(n);this._timelineEngine.command(e,t,r,o)}else this._transitionEngine.trigger(e,t,n,o)}listen(e,t,n,o,r){if("@"==n.charAt(0)){const[e,o]=Hd(n);return this._timelineEngine.listen(e,t,o,r)}return this._transitionEngine.listen(e,t,n,o,r)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return this._transitionEngine.players.concat(this._timelineEngine.players)}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}}function vp(e,t){let n=null,o=null;return Array.isArray(t)&&t.length?(n=xp(t[0]),t.length>1&&(o=xp(t[t.length-1]))):t&&(n=xp(t)),n||o?new wp(e,n,o):null}let wp=(()=>{class e{constructor(t,n,o){this._element=t,this._startStyles=n,this._endStyles=o,this._state=0;let r=e.initialStylesByElement.get(t);r||e.initialStylesByElement.set(t,r={}),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&uf(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(uf(this._element,this._initialStyles),this._endStyles&&(uf(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(e.initialStylesByElement.delete(this._element),this._startStyles&&(df(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(df(this._element,this._endStyles),this._endStyles=null),uf(this._element,this._initialStyles),this._state=3)}}return e.initialStylesByElement=new WeakMap,e})();function xp(e){let t=null;const n=Object.keys(e);for(let o=0;o<n.length;o++){const r=n[o];Sp(r)&&(t=t||{},t[r]=e[r])}return t}function Sp(e){return"display"===e||"position"===e}class kp{constructor(e,t,n,o,r,i,s){this._element=e,this._name=t,this._duration=n,this._delay=o,this._easing=r,this._fillMode=i,this._onDoneFn=s,this._finished=!1,this._destroyed=!1,this._startTime=0,this._position=0,this._eventFn=e=>this._handleCallback(e)}apply(){!function(e,t){const n=jp(e,"").trim();n.length&&(function(e,t){let n=0;for(let o=0;o<e.length;o++)","===e.charAt(o)&&n++}(n),t=`${n}, ${t}`),Pp(e,"",t)}(this._element,`${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`),Tp(this._element,this._eventFn,!1),this._startTime=Date.now()}pause(){Ep(this._element,this._name,"paused")}resume(){Ep(this._element,this._name,"running")}setPosition(e){const t=Cp(this._element,this._name);this._position=e*this._duration,Pp(this._element,"Delay",`-${this._position}ms`,t)}getPosition(){return this._position}_handleCallback(e){const t=e._ngTestManualTimestamp||Date.now(),n=1e3*parseFloat(e.elapsedTime.toFixed(3));e.animationName==this._name&&Math.max(t-this._startTime,0)>=this._delay&&n>=this._duration&&this.finish()}finish(){this._finished||(this._finished=!0,this._onDoneFn(),Tp(this._element,this._eventFn,!0))}destroy(){this._destroyed||(this._destroyed=!0,this.finish(),function(e,t){const n=jp(e,"").split(","),o=Op(n,t);o>=0&&(n.splice(o,1),Pp(e,"",n.join(",")))}(this._element,this._name))}}function Ep(e,t,n){Pp(e,"PlayState",n,Cp(e,t))}function Cp(e,t){const n=jp(e,"");return n.indexOf(",")>0?Op(n.split(","),t):Op([n],t)}function Op(e,t){for(let n=0;n<e.length;n++)if(e[n].indexOf(t)>=0)return n;return-1}function Tp(e,t,n){n?e.removeEventListener("animationend",t):e.addEventListener("animationend",t)}function Pp(e,t,n,o){const r="animation"+t;if(null!=o){const t=e.style[r];if(t.length){const e=t.split(",");e[o]=n,n=e.join(",")}}e.style[r]=n}function jp(e,t){return e.style["animation"+t]}class Ap{constructor(e,t,n,o,r,i,s,a){this.element=e,this.keyframes=t,this.animationName=n,this._duration=o,this._delay=r,this._finalStyles=s,this._specialStyles=a,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._started=!1,this.currentSnapshot={},this._state=0,this.easing=i||"linear",this.totalTime=o+r,this._buildStyler()}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}destroy(){this.init(),this._state>=4||(this._state=4,this._styler.destroy(),this._flushStartFns(),this._flushDoneFns(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}_flushDoneFns(){this._onDoneFns.forEach(e=>e()),this._onDoneFns=[]}_flushStartFns(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}finish(){this.init(),this._state>=3||(this._state=3,this._styler.finish(),this._flushStartFns(),this._specialStyles&&this._specialStyles.finish(),this._flushDoneFns())}setPosition(e){this._styler.setPosition(e)}getPosition(){return this._styler.getPosition()}hasStarted(){return this._state>=2}init(){this._state>=1||(this._state=1,this._styler.apply(),this._delay&&this._styler.pause())}play(){this.init(),this.hasStarted()||(this._flushStartFns(),this._state=2,this._specialStyles&&this._specialStyles.start()),this._styler.resume()}pause(){this.init(),this._styler.pause()}restart(){this.reset(),this.play()}reset(){this._styler.destroy(),this._buildStyler(),this._styler.apply()}_buildStyler(){this._styler=new kp(this.element,this.animationName,this._duration,this._delay,this.easing,"forwards",()=>this.finish())}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}beforeDestroy(){this.init();const e={};if(this.hasStarted()){const t=this._state>=3;Object.keys(this._finalStyles).forEach(n=>{"offset"!=n&&(e[n]=t?this._finalStyles[n]:Sf(this.element,n))})}this.currentSnapshot=e}}class Rp extends Id{constructor(e,t){super(),this.element=e,this._startingStyles={},this.__initialized=!1,this._styles=ef(t)}init(){!this.__initialized&&this._startingStyles&&(this.__initialized=!0,Object.keys(this._styles).forEach(e=>{this._startingStyles[e]=this.element.style[e]}),super.init())}play(){this._startingStyles&&(this.init(),Object.keys(this._styles).forEach(e=>this.element.style.setProperty(e,this._styles[e])),super.play())}destroy(){this._startingStyles&&(Object.keys(this._startingStyles).forEach(e=>{const t=this._startingStyles[e];t?this.element.style.setProperty(e,t):this.element.style.removeProperty(e)}),this._startingStyles=null,super.destroy())}}class Np{constructor(){this._count=0,this._head=document.querySelector("head"),this._warningIssued=!1}validateStyleProperty(e){return Gd(e)}matchesElement(e,t){return Yd(e,t)}containsElement(e,t){return Jd(e,t)}query(e,t,n){return Xd(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}buildKeyframeElement(e,t,n){n=n.map(e=>ef(e));let o=`@keyframes ${t} {\n`,r="";n.forEach(e=>{r=" ";const t=parseFloat(e.offset);o+=`${r}${100*t}% {\n`,r+=" ",Object.keys(e).forEach(t=>{const n=e[t];switch(t){case"offset":return;case"easing":return void(n&&(o+=`${r}animation-timing-function: ${n};\n`));default:return void(o+=`${r}${t}: ${n};\n`)}}),o+=`${r}}\n`}),o+="}\n";const i=document.createElement("style");return i.innerHTML=o,i}animate(e,t,n,o,r,i=[],s){s&&this._notifyFaultyScrubber();const a=i.filter(e=>e instanceof Ap),c={};vf(n,o)&&a.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const l=function(e){let t={};return e&&(Array.isArray(e)?e:[e]).forEach(e=>{Object.keys(e).forEach(n=>{"offset"!=n&&"easing"!=n&&(t[n]=e[n])})}),t}(t=wf(e,t,c));if(0==n)return new Rp(e,l);const h=`gen_css_kf_${this._count++}`,u=this.buildKeyframeElement(e,h,t);document.querySelector("head").appendChild(u);const d=vp(e,t),f=new Ap(e,t,h,n,o,r,l,d);return f.onDestroy(()=>{var e;(e=u).parentNode.removeChild(e)}),f}_notifyFaultyScrubber(){this._warningIssued||(console.warn("@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n","  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill."),this._warningIssued=!0)}}class Ip{constructor(e,t,n,o){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=o,this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._initialized=!1,this._finished=!1,this._started=!1,this._destroyed=!1,this.time=0,this.parentPlayer=null,this.currentSnapshot={},this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;const e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:{},this.domPlayer.addEventListener("finish",()=>this._onFinish())}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_triggerWebAnimation(e,t,n){return e.animate(t,n)}onStart(e){this._onStartFns.push(e)}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer.currentTime=e*this.time}getPosition(){return this.domPlayer.currentTime/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){const e={};this.hasStarted()&&Object.keys(this._finalKeyframe).forEach(t=>{"offset"!=t&&(e[t]=this._finished?this._finalKeyframe[t]:Sf(this.element,t))}),this.currentSnapshot=e}triggerCallback(e){const t="start"==e?this._onStartFns:this._onDoneFns;t.forEach(e=>e()),t.length=0}}class Dp{constructor(){this._isNativeImpl=/\{\s*\[native\s+code\]\s*\}/.test($p().toString()),this._cssKeyframesDriver=new Np}validateStyleProperty(e){return Gd(e)}matchesElement(e,t){return Yd(e,t)}containsElement(e,t){return Jd(e,t)}query(e,t,n){return Xd(e,t,n)}computeStyle(e,t,n){return window.getComputedStyle(e)[t]}overrideWebAnimationsSupport(e){this._isNativeImpl=e}animate(e,t,n,o,r,i=[],s){if(!s&&!this._isNativeImpl)return this._cssKeyframesDriver.animate(e,t,n,o,r,i);const a={duration:n,delay:o,fill:0==o?"both":"forwards"};r&&(a.easing=r);const c={},l=i.filter(e=>e instanceof Ip);vf(n,o)&&l.forEach(e=>{let t=e.currentSnapshot;Object.keys(t).forEach(e=>c[e]=t[e])});const h=vp(e,t=wf(e,t=t.map(e=>cf(e,!1)),c));return new Ip(e,t,a,h)}}function $p(){return"undefined"!=typeof window&&void 0!==window.document&&Element.prototype.animate||{}}let Fp=(()=>{class e extends jd{constructor(e,t){super(),this._nextAnimationId=0,this._renderer=e.createRenderer(t.body,{id:"0",encapsulation:nt.None,styles:[],data:{animation:[]}})}build(e){const t=this._nextAnimationId.toString();this._nextAnimationId++;const n=Array.isArray(e)?Ad(e):e;return zp(this._renderer,null,t,"register",[n]),new Mp(t,this._renderer)}}return e.\u0275fac=function(t){return new(t||e)(We(ki),We(fa))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();class Mp extends class{}{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new Lp(this._id,e,t||{},this._renderer)}}class Lp{constructor(e,t,n,o){this.id=e,this.element=t,this._renderer=o,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return zp(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset")}setPosition(e){this._command("setPosition",e)}getPosition(){return 0}}function zp(e,t,n,o,r){return e.setProperty(t,`@@${n}:${o}`,r)}let Up=(()=>{class e{constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),t.onRemovalComplete=(e,t)=>{t&&t.parentNode(e)&&t.removeChild(e.parentNode,e)}}createRenderer(e,t){const n=this.delegate.createRenderer(e,t);if(!(e&&t&&t.data&&t.data.animation)){let e=this._rendererCache.get(n);return e||(e=new Vp("",n,this.engine),this._rendererCache.set(n,e)),e}const o=t.id,r=t.id+"-"+this._currentId;this._currentId++,this.engine.register(r,e);const i=t=>{Array.isArray(t)?t.forEach(i):this.engine.registerTrigger(o,r,e,t.name,t)};return t.data.animation.forEach(i),new Hp(this,r,n,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){e>=0&&e<this._microtaskId?this._zone.run(()=>t(n)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(e=>{const[t,n]=e;t(n)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([t,n]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return e.\u0275fac=function(t){return new(t||e)(We(ki),We(_p),We(Ds))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();class Vp{constructor(e,t,n){this.namespaceId=e,this.delegate=t,this.engine=n,this.destroyNode=this.delegate.destroyNode?e=>t.destroyNode(e):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,!0)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,o){this.delegate.setAttribute(e,t,n,o)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,o){this.delegate.setStyle(e,t,n,o)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){"@"==t.charAt(0)&&"@.disabled"==t?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class Hp extends Vp{constructor(e,t,n,o){super(t,n,o),this.factory=e,this.namespaceId=t}setProperty(e,t,n){"@"==t.charAt(0)?"."==t.charAt(1)&&"@.disabled"==t?this.disableAnimations(e,n=void 0===n||!!n):this.engine.process(this.namespaceId,e,t.substr(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if("@"==t.charAt(0)){const o=function(e){switch(e){case"body":return document.body;case"document":return document;case"window":return window;default:return e}}(e);let r=t.substr(1),i="";return"@"!=r.charAt(0)&&([r,i]=function(e){const t=e.indexOf(".");return[e.substring(0,t),e.substr(t+1)]}(r)),this.engine.listen(this.namespaceId,o,r,i,e=>{this.factory.scheduleListenerCallback(e._data||-1,n,e)})}return this.delegate.listen(e,t,n)}}let Bp=(()=>{class e extends _p{constructor(e,t,n){super(e.body,t,n)}}return e.\u0275fac=function(t){return new(t||e)(We(fa),We(nf),We(Wf))},e.\u0275prov=le({token:e,factory:e.\u0275fac}),e})();const qp=[{provide:nf,useFactory:function(){return"function"==typeof $p()?new Dp:new Np}},{provide:new $e("AnimationModuleType"),useValue:"BrowserAnimations"},{provide:jd,useClass:Fp},{provide:Wf,useFactory:function(){return new Qf}},{provide:_p,useClass:Bp},{provide:ki,useFactory:function(e,t,n){return new Up(e,t,n)},deps:[hc,_p,Ds]}];let Wp=(()=>{class e{}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)},providers:qp,imports:[xc]}),e})(),Qp=(()=>{class e{}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)},imports:[[Wa,fd]]}),e})(),Kp=(()=>{class e{}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)},imports:[[Wa]]}),e})(),Zp=(()=>{class e{}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)},imports:[[Wa]]}),e})(),Gp=(()=>{class e{}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)},imports:[[Wa,Kp,Zp]]}),e})(),Yp=(()=>{class e{}return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)},imports:[[Wa]]}),e})();function Jp(e){return(Jp="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xp(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function eg(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){Xp(e,t,n[t])}))}return e}function tg(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(c){r=!0,i=c}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ng={},og={};try{"undefined"!=typeof window&&(ng=window),"undefined"!=typeof document&&(og=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(Jg){}var rg=(ng.navigator||{}).userAgent,ig=void 0===rg?"":rg,sg=ng,ag=og,cg=!!ag.documentElement&&!!ag.head&&"function"==typeof ag.addEventListener&&"function"==typeof ag.createElement,lg=(~ig.indexOf("MSIE")||ig.indexOf("Trident/"),[1,2,3,4,5,6,7,8,9,10]),hg=lg.concat([11,12,13,14,15,16,17,18,19,20]),ug={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dg=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",ug.GROUP,ug.SWAP_OPACITY,ug.PRIMARY,ug.SECONDARY].concat(lg.map((function(e){return"".concat(e,"x")}))).concat(hg.map((function(e){return"w-".concat(e)}))),sg.FontAwesomeConfig||{});ag&&"function"==typeof ag.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=tg(e,2),n=t[1],o=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=ag.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(t[0]));null!=o&&(dg[n]=o)}));var fg=eg({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},dg);fg.autoReplaceSvg||(fg.observeMutations=!1);var pg=eg({},fg);sg.FontAwesomeConfig=pg;var gg=sg||{};gg.___FONT_AWESOME___||(gg.___FONT_AWESOME___={}),gg.___FONT_AWESOME___.styles||(gg.___FONT_AWESOME___.styles={}),gg.___FONT_AWESOME___.hooks||(gg.___FONT_AWESOME___.hooks={}),gg.___FONT_AWESOME___.shims||(gg.___FONT_AWESOME___.shims=[]);var mg=gg.___FONT_AWESOME___,bg=[];cg&&((ag.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ag.readyState)||ag.addEventListener("DOMContentLoaded",(function e(){ag.removeEventListener("DOMContentLoaded",e),bg.map((function(e){return e()}))})));var yg,_g=function(){},vg="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,wg="undefined"==typeof setImmediate?setTimeout:setImmediate,xg=[];function Sg(){for(var e=0;e<xg.length;e++)xg[e][0](xg[e][1]);xg=[],yg=!1}function kg(e,t){xg.push([e,t]),yg||(yg=!0,wg(Sg,0))}function Eg(e){var t=e.owner,n=t._state,o=t._data,r=e[n],i=e.then;if("function"==typeof r){n="fulfilled";try{o=r(o)}catch(Jg){Pg(i,Jg)}}Cg(i,o)||("fulfilled"===n&&Og(i,o),"rejected"===n&&Pg(i,o))}function Cg(e,t){var n;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&("function"==typeof t||"object"===Jp(t))){var o=t.then;if("function"==typeof o)return o.call(t,(function(o){n||(n=!0,t===o?Tg(e,o):Og(e,o))}),(function(t){n||(n=!0,Pg(e,t))})),!0}}catch(Jg){return n||Pg(e,Jg),!0}return!1}function Og(e,t){e!==t&&Cg(e,t)||Tg(e,t)}function Tg(e,t){"pending"===e._state&&(e._state="settled",e._data=t,kg(Ag,e))}function Pg(e,t){"pending"===e._state&&(e._state="settled",e._data=t,kg(Rg,e))}function jg(e){e._then=e._then.forEach(Eg)}function Ag(e){e._state="fulfilled",jg(e)}function Rg(e){e._state="rejected",jg(e),!e._handled&&vg&&global.process.emit("unhandledRejection",e._data,e)}function Ng(e){global.process.emit("rejectionHandled",e)}function Ig(e){if("function"!=typeof e)throw new TypeError("Promise resolver "+e+" is not a function");if(this instanceof Ig==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(e,t){function n(e){Pg(t,e)}try{e((function(e){Og(t,e)}),n)}catch(Jg){n(Jg)}}(e,this)}Ig.prototype={constructor:Ig,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var n={owner:this,then:new this.constructor(_g),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,"rejected"===this._state&&vg&&kg(Ng,this)),"fulfilled"===this._state||"rejected"===this._state?kg(Eg,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}},Ig.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new Ig((function(t,n){var o=[],r=0;function i(e){return r++,function(n){o[e]=n,--r||t(o)}}for(var s,a=0;a<e.length;a++)(s=e[a])&&"function"==typeof s.then?s.then(i(a),n):o[a]=s;r||t(o)}))},Ig.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new Ig((function(t,n){for(var o,r=0;r<e.length;r++)(o=e[r])&&"function"==typeof o.then?o.then(t,n):t(o)}))},Ig.resolve=function(e){return e&&"object"===Jp(e)&&e.constructor===Ig?e:new Ig((function(t){t(e)}))},Ig.reject=function(e){return new Ig((function(t,n){n(e)}))};var Dg=function(e,t,n,o){var r,i,s,a=Object.keys(e),c=a.length,l=void 0!==o?function(e,t){return function(n,o,r,i){return e.call(t,n,o,r,i)}}(t,o):t;for(void 0===n?(r=1,s=e[a[0]]):(r=0,s=n);r<c;r++)s=l(s,e[i=a[r]],i,e);return s};function $g(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.skipHooks,r=void 0!==o&&o,i=Object.keys(t).reduce((function(e,n){var o=t[n];return o.icon?e[o.iconName]=o.icon:e[n]=o,e}),{});"function"!=typeof mg.hooks.addPack||r?mg.styles[e]=eg({},mg.styles[e]||{},i):mg.hooks.addPack(e,i),"fas"===e&&$g("fa",t)}var Fg=mg.styles,Mg=mg.shims,Lg=function(){var e=function(e){return Dg(Fg,(function(t,n,o){return t[o]=Dg(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var o=t[2];return e[n]=n,o.forEach((function(t){e[t]=n})),e}));var t="far"in Fg;Dg(Mg,(function(e,n){var o=n[1];return"far"!==o||t||(o="fas"),e[n[0]]={prefix:o,iconName:n[2]},e}),{})};function zg(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}Lg(),(zg.prototype=Object.create(Error.prototype)).constructor=zg;var Ug={fill:"currentColor"},Vg={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Hg=(eg({},Ug,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),eg({},Vg,{attributeName:"opacity"}));eg({},Ug,{cx:"256",cy:"364",r:"28"}),eg({},Vg,{attributeName:"r",values:"28;14;28;28;14;28;"}),eg({},Hg,{values:"1;0;1;1;0;1;"}),eg({},Ug,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),eg({},Hg,{values:"1;0;0;0;0;1;"}),eg({},Ug,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),eg({},Hg,{values:"0;0;1;1;0;0;"}),new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t;return(t=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(t){e.definitions[t]=eg({},e.definitions[t]||{},r[t]),$g(t,r[t]),Lg()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var o=n[t],r=o.prefix,i=o.iconName,s=o.icon;e[r]||(e[r]={}),e[r][i]=s})),e}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(e.prototype,t),e}());let Bg=(()=>{let e=class{};return e.\u0275mod=ht({type:e}),e.\u0275inj=he({factory:function(t){return new(t||e)}}),e})();n("1X/a");let qg=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=st({type:e,selectors:[["preview-ui-home"]],decls:24,vars:0,consts:[["icon","sync"],["color","rgb(var(--functional-red))","icon","sync_problem"]],template:function(e,t){1&e&&(ii(0,"h1"),gi(1,"Welcome to DontCode !"),si(),ii(2,"h2"),gi(3,"What am I seeing ?"),si(),ii(4,"p"),gi(5,"You have opened the Preview App. The Preview App connects to Online services to receive Application changes from the Application Builder in realtime."),si(),ii(6,"p"),ii(7,"b"),gi(8,"Check you are connected"),si(),gi(9," to the online service by looking at the "),ai(10,"kor-icon",0),gi(11," icon in the header panel."),si(),ii(12,"p"),ai(13,"kor-icon",0),gi(14," means you are ok, "),ai(15,"kor-icon",1),gi(16," you have connection issue to the online service. Please check the browser log in this case"),si(),ii(17,"p"),gi(18,"If "),ai(19,"kor-icon",0),gi(20,", then "),ii(21,"b"),gi(22,"go back to the Application Builder"),si(),gi(23," and enter some values in the Editor"),si())},styles:[""]}),e})(),Wg=(()=>{class e{constructor(e){this.commandService=e,this.position="creation/name",this.value="New Test"}ngOnInit(){}addCommand(e){this.commandService.pushCommand(new qc(Wc.ADD,this.position,this.value))}}return e.\u0275fac=function(t){return new(t||e)(ti(el))},e.\u0275cmp=st({type:e,selectors:[["preview-ui-insert-command"]],decls:4,vars:2,consts:[["label","Add Command","expanded",""],["label","position",3,"value","value-changed"],["label","value",3,"value","value-changed"],["slot","footer","label","Add",3,"click"]],template:function(e,t){1&e&&(ii(0,"kor-accordion",0),ii(1,"kor-input",1),ui("value-changed",(function(e){return t.position=e.target.value})),si(),ii(2,"kor-input",2),ui("value-changed",(function(e){return t.value=e.target.value})),si(),ii(3,"kor-button",3),ui("click",(function(e){return t.addCommand(e)})),si(),si()),2&e&&(co(1),oi("value",t.position),co(1),oi("value",t.value))},styles:[""]}),e})();function Qg(e,t){if(1&e&&(ii(0,"p"),gi(1),hs(2,"json"),si()),2&e){const e=t.$implicit;co(1),bi("",e.type,", ",e.position,", ",us(2,3,e.value),"")}}function Kg(e,t){if(1&e&&(function(e,t,n){const o=Ft(),r=Mt(),i=r.firstCreatePass?function(e,t,n,o,r){const i=t.consts,s=Nt(i,void 0),a=po(t,n[6],0,4,"ng-container",s);return null!==s&&qr(a,s),Co(t,n,a,Nt(i,void 0)),null!==t.queries&&t.queries.elementStart(t,a),a}(0,r,o):r.data[19];Ut(i,!0);const s=o[19]=o[11].createComment("");ur(r,o,s,i),Kn(s,o),wt(i)&&(vo(r,o,i),_o(r,i,o))}(),ii(1,"p"),gi(2,"We list below the commands received from the Application Builder:"),si(),ei(3,Qg,3,5,"p",1),function(){let e=zt();const t=Mt();Vt()?Ht():(e=e.parent,Ut(e,!1)),t.firstCreatePass&&(sn(t,e),_t(e)&&t.queries.elementEnd(e))}()),2&e){const e=pi();co(3),oi("ngForOf",e.commands)}}let Zg=(()=>{class e{constructor(e){this.providerService=e,this.commands=[],this.forgetIt=!0}ngOnInit(){console.log("ListCommands"),this.context$=kc([this.providerService.receiveCommands()]).pipe(F(e=>(this.forgetIt?this.forgetIt=!1:this.commands.push(e[0]),{command:e[0]})))}noCommands(){return 0==this.commands.length}}return e.\u0275fac=function(t){return new(t||e)(ti(el))},e.\u0275cmp=st({type:e,selectors:[["preview-ui-list-commands"]],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(ei(0,Kg,4,1,"ng-container",0),hs(1,"async")),2&e&&oi("ngIf",us(1,1,t.context$))},directives:[Fa,Da],pipes:[Ba,qa],styles:[""]}),e})();const Gg=[{path:"",component:qg},{path:"dev",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=st({type:e,selectors:[["preview-ui-debug-page"]],decls:3,vars:0,template:function(e,t){1&e&&(ai(0,"preview-ui-insert-command"),ai(1,"kor-divider"),ai(2,"preview-ui-list-commands"))},directives:[Wg,Zg],styles:[""]}),e})()},{path:"screens/:id",component:(()=>{class e{constructor(e,t){this.route=e,this.provider=t}ngOnInit(){this.screenName$=this.route.paramMap.pipe(F(e=>e.get("id")))}}return e.\u0275fac=function(t){return new(t||e)(ti(Wh),ti(el))},e.\u0275cmp=st({type:e,selectors:[["preview-ui-screen"]],decls:3,vars:3,template:function(e,t){1&e&&(ii(0,"p"),gi(1),hs(2,"async"),si()),2&e&&(co(1),mi("screen ",us(2,1,t.screenName$)," works!"))},pipes:[Ba],styles:[""]}),e})()}];let Yg=(()=>{class e{}return e.\u0275mod=ht({type:e,bootstrap:[Pd]}),e.\u0275inj=he({factory:function(t){return new(t||e)},providers:[],imports:[[xc,Wp,Qp,Gp,Yp,fd.forRoot(Gg,{enableTracing:!1}),Bg]]}),e})();(function(){if(Wn)throw new Error("Cannot enable prod mode after platform setup.");qn=!1})(),vc().bootstrapModule(Yg).catch(e=>console.error(e))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0]]]);