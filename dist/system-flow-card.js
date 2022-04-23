function t(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(s=t[l])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}var e,i;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var o={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function s(t,e){if(t in o)return o[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var n={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},r={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return s("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in n)return n[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var o=10*Math.round(i/10);return o>=100?"mdi:battery":o<=0?"mdi:battery-alert":"hass:battery-"+o}var r=t.attributes.unit_of_measurement;return"°C"===r||"°F"===r?"mdi:thermometer":s("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?s("input_datetime"):"mdi:calendar":"mdi:clock"}};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=window,a=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),d=new WeakMap;class h{constructor(t,e,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(e,t))}return t}toString(){return this.cssText}}const u=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,c))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var m;const p=window,v=p.trustedTypes,f=v?v.emptyScript:"",g=p.reactiveElementPolyfillSupport,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{a?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),o=l.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var o;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:y).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,s=o._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=o.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:y;this._$El=s,this[s]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:b}),(null!==(m=p.reactiveElementVersions)&&void 0!==m?m:p.reactiveElementVersions=[]).push("1.4.2");const A=window,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,C="?"+S,k=`<${C}>`,T=document,O=(t="")=>T.createComment(t),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,N=/>/g,R=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),j=/'/g,z=/"/g,V=/^(?:script|style|textarea|title)$/i,I=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),L=I(1),B=I(2),D=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,W=T.createTreeWalker(T,129,null,!1),K=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===P?"!--"===a[1]?r=M:void 0!==a[1]?r=N:void 0!==a[2]?(V.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=R):void 0!==a[3]&&(r=R):r===R?">"===a[0]?(r=null!=s?s:P,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?R:'"'===a[3]?z:j):r===z||r===j?r=R:r===M||r===N?r=P:(r=R,s=void 0);const h=r===R&&t[e+1].startsWith("/>")?" ":"";n+=r===P?i+k:c>=0?(o.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+S+h):i+S+(-2===c?(o.push(void 0),e):h)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==E?E.createHTML(l):l,o]};class G{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,l=this.parts,[a,c]=K(t,e);if(this.el=G.createElement(a,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=W.nextNode())&&l.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(S)){const i=c[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(S),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?et:"@"===e[1]?it:X})}else l.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(V.test(o.tagName)){const t=o.textContent.split(S),e=t.length-1;if(e>0){o.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],O()),W.nextNode(),l.push({type:2,index:++s});o.append(t[e],O())}}}else if(8===o.nodeType)if(o.data===C)l.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(S,t+1));)l.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,o){var s,n,r,l;if(e===D)return e;let a=void 0!==o?null===(s=i._$Co)||void 0===s?void 0:s[o]:i._$Cl;const c=U(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,o)),void 0!==o?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[o]=a:i._$Cl=a),void 0!==a&&(e=J(t,a._$AS(t,e.values),a,o)),e}class Z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(i,!0);W.currentNode=s;let n=W.nextNode(),r=0,l=0,a=o[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new ot(n,this,t)),this.u.push(e),a=o[++l]}r!==(null==a?void 0:a.index)&&(n=W.nextNode(),r++)}return s}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{constructor(t,e,i,o){var s;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cm=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),U(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==D&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=G.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new Z(s,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new G(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,o,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=J(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const o=t;let r,l;for(t=s[0],r=0;r<s.length-1;r++)l=J(this,o[i+r],e,r),l===D&&(l=this._$AH[r]),n||(n=!U(l)||l!==this._$AH[r]),l===F?t=F:t!==F&&(t+=(null!=l?l:"")+s[r+1]),this._$AH[r]=l}n&&!o&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}const tt=x?x.emptyScript:"";class et extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==F?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class it extends X{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=J(this,t,e,0))&&void 0!==i?i:F)===D)return;const o=this._$AH,s=t===F&&o!==F||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==F&&(o===F||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=A.litHtmlPolyfillSupport;null==st||st(G,Q),(null!==(w=A.litHtmlVersions)&&void 0!==w?w:A.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,rt;class lt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new Q(e.insertBefore(O(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}lt.finalized=!0,lt._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:lt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:lt}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ct(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ht(t,e){return(({finisher:t,descriptor:e})=>(i,o)=>{var s;if(void 0===o){const o=null!==(s=i.originalKey)&&void 0!==s?s:i.key,n=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(n.finisher=function(e){t(e,o)}),n}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(s,o)}})({descriptor:i=>{const o={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[e]&&(this[e]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements;function mt(t,e=0){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):e}console.groupCollapsed("%c⚡ System Flow Card v2.5.1 is installed","color: #488fc2; font-weight: bold"),console.log("Readme:","https://github.com/ulic75/system-flow-card"),console.groupEnd();const pt=function(t,e,i){var o;return void 0===i&&(i=!1),function(){var s=[].slice.call(arguments),n=this,r=function(){o=null,i||t.apply(n,s)},l=i&&!o;clearTimeout(o),o=setTimeout(r,e),l&&t.apply(n,s)}}((t=>{console.log(`%c⚡ System Flow Card v2.5.1 %cError: ${t}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")}),500);let vt=class extends lt{constructor(){super(...arguments),this.getEntity=t=>{const e=t?this.hass.states[t]:void 0;if(e&&e.state)return e;pt(`entity "${null!=t?t:"Unknown"}" is not available or misconfigured`)},this.getElementEntityId=t=>t.value?"string"==typeof t.value?t.value:t.value.toSystem||t.value.fromSystem||void 0:void 0,this.getElementEntity=t=>this.getEntity(this.getElementEntityId(t)),this.getElementIconId=t=>{if(t.icon)return t.icon;const e=this.getElementEntity(t);return e&&e?function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=function(t){return t.substr(0,t.indexOf("."))}(t.entity_id);return e in r?r[e](t):s(e,t.state)}(e):"mdi:eye"},this.getElementColor=t=>t.color?t.color:"var(--primary-text-color)",this.getElementUnit=t=>t.unit||this.getEntityUnit(this.getElementEntity(t)),this.getEntityUnit=t=>{const e="string"==typeof t?this.getEntity(t):t;if(e)return e.attributes.unit_of_measurement},this.displayValue=(t,e=!1,i=null,o=!1)=>{let s=t;return e&&(s=Math.abs(mt(s))),"number"==typeof s&&"number"==typeof o&&(s=((t,e)=>{const i=10**e;return Math.round(t*i)/i})(s,o)),i&&(s=`${s} ${i}`),s},this.getEntityValue=(t,e=!1,i=!1,o=!1)=>{const s="string"==typeof t?this.getEntity(t):t;if(!s)return;const n=null==s?void 0:s.state,r=i?this.getEntityUnit(s):null;return this.displayValue(n,e,r,o)},this.elementArrows=(t,e,i=null)=>{if(!t)return null;let o;switch(!0){case"top"===e&&t>0||"bottom"===e&&t<0:o="down";break;case"top"===e&&t<0||"bottom"===e&&t>0:o="up";break;case"left"===e&&t>0||"right"===e&&t<0:o="right";break;case"left"===e&&t<0||"right"===e&&t>0:o="left";break;default:o=""}return L`
      <ha-icon style="fill: ${i}" class="small" icon="mdi:arrow-${o}"></ha-icon>
    `},this.elementValueArrows=t=>L`
    <div style="height: 12px;">
      ${t.calculations.systemTotal?L`
          ${["left","middle"].includes(t.position)?null:this.elementArrows(t.calculations.systemTotal,t.position,this.getElementColor(t))}
          ${this.displayValue(t.calculations.systemTotal,"middle"!==t.position,this.getElementUnit(t),0)}
          ${"left"===t.position?this.elementArrows(t.calculations.systemTotal,t.position,this.getElementColor(t)):null}
        `:null}
    </div>
  `,this.elementToHtml=(t,e=!1)=>{var i,o,s,n,r,l,a,c,d;return L`
    <div class="circle-container container-${t.position}" style="
      opacity: ${t.calculations.systemTotal||e||!(null===(i=this._config)||void 0===i?void 0:i.fadeIdylElements)?1:.25};
    ">
      <div class="circle" style="border-color: ${this.getElementColor(t)}">
        ${t.fill?L`<div style="
            height: ${mt(this.getEntityValue(t.fill,!0,!1))}%; 
            position: absolute; width: 100%; bottom: 0px;
            background-color: ${this.getElementColor(t)};
            opacity: .25;
          "></div>`:null}
        ${"bottom"===t.position?this.elementValueArrows(t):L`<div style="height: 12px;">${(null===(o=t.extra)||void 0===o?void 0:o.main)?this.getEntityValue(null===(s=t.extra)||void 0===s?void 0:s.main,!1,!0):" "}</div>`}
        <div style="width: 100%; display: flex">
          <span class="side-extra">${(null===(n=t.extra)||void 0===n?void 0:n.left)?this.getEntityValue(null===(r=t.extra)||void 0===r?void 0:r.left,!1,!0):" "}</span>
          <ha-icon style="width: 24px; fill: ${this.getElementColor(t)}" icon="${this.getElementIconId(t)}"></ha-icon>
          <span class="side-extra">${(null===(l=t.extra)||void 0===l?void 0:l.right)?this.getEntityValue(null===(a=t.extra)||void 0===a?void 0:a.right,!1,!0):" "}</span>
        </div>
        ${"bottom"===t.position?L`<div style="height: 12px;">${(null===(c=t.extra)||void 0===c?void 0:c.main)?this.getEntityValue(null===(d=t.extra)||void 0===d?void 0:d.main,!1,!0):" "}</div>`:this.elementValueArrows(t)}
      </div>
    </div>
  `}}setConfig(t){if(!t.elements||!t.elements.length)throw new Error("At least one entity must be defined");["top","bottom"].forEach((e=>{if(t.elements.filter((t=>t.position===e)).length>2)throw new Error(`Maximum 2 elements allowed in ${e} row.`)})),this._config=t}getCardSize(){return 3}render(){var t,e,i,o,s,n,r;if(!this._config||!this.hass)return L``;const{elements:l}=this._config;let a=0;const c=l.map((t=>{let e=0,i=null,o=0;const s=t.invert?-1:1;e="string"==typeof t.value?mt(this.getEntityValue(t.value))*s:mt(this.getEntityValue(t.value.toSystem)),"string"!=typeof t.value&&t.value.fromSystem&&(i=mt(this.getEntityValue(t.value.fromSystem))),o=e-(null!=i?i:0),t.exclude||(a-=o);const n="string"==typeof t.extra?{main:t.extra}:t.extra;return Object.assign(Object.assign({},t),{extra:n,calculations:{toSystem:e,fromSystem:i,systemTotal:o}})})),d="string"==typeof(null===(t=this._config.system)||void 0===t?void 0:t.extra)?{main:null===(e=this._config.system)||void 0===e?void 0:e.extra}:null===(i=this._config.system)||void 0===i?void 0:i.extra;c.push(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({value:"system"},(null===(o=this._config.system)||void 0===o?void 0:o.unit)?{unit:this._config.system.unit}:null),{icon:(null===(s=this._config.system)||void 0===s?void 0:s.icon)||"mdi:house"}),(null===(n=this._config.system)||void 0===n?void 0:n.extra)?{extra:this._config.system.extra}:null),(null===(r=this._config.system)||void 0===r?void 0:r.color)?{color:this._config.system.color}:null),{position:"middle",extra:d,calculations:{toSystem:a>0?a:0,fromSystem:a<0?a:0,systemTotal:a}}));const h={left:c.filter((t=>"left"===t.position)),top:c.filter((t=>"top"===t.position)),right:c.filter((t=>"right"===t.position)),bottom:c.filter((t=>"bottom"===t.position)),middle:c.filter((t=>"middle"===t.position))},u={left:"position: absolute; left: 0; top: 10px; width: calc(50% - 42px); height: calc(100% - 20px);",top:"position: absolute; left: 10px; top: 0; width: calc(100% - 20px); height: calc(50% - 42px);",right:"position: absolute; left: calc(50% + 42px); top: 10px; width: calc(50% - 42px); height: calc(100% - 20px);",bottom:"position: absolute; left: 10px; top: calc(50% + 42px); width: calc(100% - 20px); height: calc(50% - 42px);"},m={from:{left:(t,e)=>`M 100 ${e},  C 50 ${e},   50 ${t},   0 ${t}`,top:(t,e)=>`M ${e} 100,  C ${e} 50,   ${t} 50,   ${t} 0`,right:(t,e)=>`M 0 ${e},    C 50 ${e},   50 ${t},   100 ${t}`,bottom:(t,e)=>`M ${e} 0,    C ${e} 50,   ${t} 50,   ${t} 100`},to:{left:(t,e)=>`M 0 ${t},     C 50 ${t},   50 ${e}    100 ${e}`,top:(t,e)=>`M ${t} 0,     C ${t} 50,   ${e} 50    ${e} 100`,right:(t,e)=>`M 100 ${t},   C 50 ${t},   50 ${e}    0 ${e}`,bottom:(t,e)=>`M ${t} 100,   C ${t} 50,   ${e} 50    ${e} 0`}},p=c.filter((t=>0!==t.calculations.systemTotal)).reduce(((t,e)=>t+Math.abs(e.calculations.systemTotal)),0)/c.length,v=Object.fromEntries(["left","top","right","bottom"].map((t=>{const e=h[t],i=1/e.length*100;return[t,e.map(((e,o)=>{var s,n;const r=(o+1)*i-.5*i,l=50+-10*(1-r/50);return{element:e,path:{from:m.from[t](r,l),to:m.to[t](r,l)},dur:1*(null!==(n=null===(s=this._config)||void 0===s?void 0:s.speed)&&void 0!==n?n:5)/(Math.abs(e.calculations.systemTotal)/p)}}))]})));return L`
      <ha-card .header=${this._config.title}>
        <div class="card-content">
          <div class="row" style="height:100%;">
          
            <div class="col">
              <div class="spacer container-left"></div>
              ${h.left.map((t=>this.elementToHtml(t)))}
              <div class="spacer container-left"></div>
            </div>

            <div class="col">
              <div class="row">
                ${h.top.length?h.top.map((t=>this.elementToHtml(t))):L`<div class="spacer container-top"></div>`}
              </div>

              <div class="row">
                ${h.middle.map((t=>this.elementToHtml(t,!0)))}
              </div>

              <div class="row">
                ${h.bottom.length?h.bottom.map((t=>this.elementToHtml(t))):L`<div class="spacer container-bottom"></div>`}
              </div>
            </div>

            <div class="col">
              <div class="spacer container-right"></div>
              ${h.right.map((t=>this.elementToHtml(t)))}
              <div class="spacer container-right"></div>
            </div>

            <div class="lines">
              ${f=v,g=(t,e)=>L`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="${u[t]}"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  vector-effect="non-scaling-stroke"
                >
                  ${e.map((t=>{var e;return B`
                    <path
                      d="${t.path.from}"
                      stroke="${this.getElementColor(t.element)}"
                      style="opacity: ${!t.element.calculations.systemTotal&&(null===(e=this._config)||void 0===e?void 0:e.fadeIdylElements)?.25:1};"
                    ></path>
                    ${this.displayValue(t.element.calculations.systemTotal)&&B`
                      <circle
                        r="1"
                        vector-effect="non-scaling-stroke"
                        style="
                          stroke-width: 4;
                          stroke: ${this.getElementColor(t.element)};
                          fill: ${this.getElementColor(t.element)};
                        "
                      >
                        <animateMotion
                          dur="${t.dur}"
                          rotate="auto"
                          repeatCount="indefinite"
                          calcMode="linear"
                          path="${t.element.calculations.systemTotal>0?t.path.to:t.path.from}"
                        />
                      </circle>
                    `}
                  `}))}
                </svg>
              `,Object.keys(f).map((t=>g(t,f[t])))}
            </div>
          </div>
        </div>
      </ha-card>
    `;var f,g}};vt.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new h(i,t,c)})`
    :host {
      --mdc-icon-size: 24px;
    }
    ha-card {
      overflow: scroll;
      display: flex;
      flex-direction: column;
    }
    .card-content {
      position: relative;
      flex-grow: 1;
      padding: 16px !important;
    }
    .lines {
      position: absolute;
      width: calc(100% - 200px);
      height: calc(100% - 200px);
      left: 100px;
      top: 100px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    .col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .circle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container-top,
    .container-bottom {
      padding: 0 10px;
    }
    .container-left,
    .container-right {
      padding: 10px 0;
    }
    .spacer {
      width: 80px;
      height: 80px;
    }
    .circle {
      width: 80px;
      height: 80px;
      border-radius: 25%;
      border: 2px solid;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      text-align: center;
      font-size: 14px;
      line-height: 14px;
      position: relative;
      text-decoration: none;
      color: var(--primary-text-color);
    }
    ha-svg-icon {
      padding-bottom: 2px;
      fill: inherit !important;
    }
    ha-icon.small {
      --mdc-icon-size: 12px;
    }
    .side-extra {
      width: calc((100% - 24px) / 2);
      margin: auto;
      overflow: hidden;
      font-size: 10px;
    }
    .label {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
    line,
    path {
      stroke-width: 1;
      fill: none;
    }
    .circle svg {
      position: absolute;
      fill: none;
      stroke-width: 4px;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  `,t([dt({attribute:!1})],vt.prototype,"hass",void 0),t([function(t){return dt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */()],vt.prototype,"_config",void 0),t([ht("#battery-grid-flow")],vt.prototype,"batteryGridFlow",void 0),t([ht("#battery-home-flow")],vt.prototype,"batteryToHomeFlow",void 0),t([ht("#grid-home-flow")],vt.prototype,"gridToHomeFlow",void 0),t([ht("#solar-battery-flow")],vt.prototype,"solarToBatteryFlow",void 0),t([ht("#solar-grid-flow")],vt.prototype,"solarToGridFlow",void 0),t([ht("#solar-home-flow")],vt.prototype,"solarToHomeFlow",void 0),vt=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e))("system-flow-card")],vt);const ft=window;ft.customCards=ft.customCards||[],ft.customCards.push({type:"system-flow-card",name:"System Flow Card",description:"A system distribution card inspired by the official Energy Distribution card for Home Assistant"});export{vt as SystemFlowCard};
