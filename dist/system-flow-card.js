function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}var e,i;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(e||(e={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(i||(i={}));var s={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function o(t,e){if(t in s)return s[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var n={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},r={binary_sensor:function(t,e){var i="off"===t;switch(null==e?void 0:e.attributes.device_class){case"battery":return i?"mdi:battery":"mdi:battery-outline";case"battery_charging":return i?"mdi:battery":"mdi:battery-charging";case"cold":return i?"mdi:thermometer":"mdi:snowflake";case"connectivity":return i?"mdi:server-network-off":"mdi:server-network";case"door":return i?"mdi:door-closed":"mdi:door-open";case"garage_door":return i?"mdi:garage":"mdi:garage-open";case"power":case"plug":return i?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return i?"mdi:check-circle":"mdi:alert-circle";case"smoke":return i?"mdi:check-circle":"mdi:smoke";case"heat":return i?"mdi:thermometer":"mdi:fire";case"light":return i?"mdi:brightness-5":"mdi:brightness-7";case"lock":return i?"mdi:lock":"mdi:lock-open";case"moisture":return i?"mdi:water-off":"mdi:water";case"motion":return i?"mdi:walk":"mdi:run";case"occupancy":case"presence":return i?"mdi:home-outline":"mdi:home";case"opening":return i?"mdi:square":"mdi:square-outline";case"running":return i?"mdi:stop":"mdi:play";case"sound":return i?"mdi:music-note-off":"mdi:music-note";case"update":return i?"mdi:package":"mdi:package-up";case"vibration":return i?"mdi:crop-portrait":"mdi:vibrate";case"window":return i?"mdi:window-closed":"mdi:window-open";default:return i?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(t){var e="closed"!==t.state;switch(t.attributes.device_class){case"garage":return e?"mdi:garage-open":"mdi:garage";case"door":return e?"mdi:door-open":"mdi:door-closed";case"shutter":return e?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return e?"mdi:blinds-open":"mdi:blinds";case"window":return e?"mdi:window-open":"mdi:window-closed";default:return o("cover",t.state)}},sensor:function(t){var e=t.attributes.device_class;if(e&&e in n)return n[e];if("battery"===e){var i=Number(t.state);if(isNaN(i))return"mdi:battery-unknown";var s=10*Math.round(i/10);return s>=100?"mdi:battery":s<=0?"mdi:battery-alert":"hass:battery-"+s}var r=t.attributes.unit_of_measurement;return"°C"===r||"°F"===r?"mdi:thermometer":o("sensor")},input_datetime:function(t){return t.attributes.has_date?t.attributes.has_time?o("input_datetime"):"mdi:calendar":"mdi:clock"}};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=window,a=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c=Symbol(),d=new WeakMap;let h=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==c)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(e,t))}return t}toString(){return this.cssText}};const u=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,c))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var m;const p=window,v=p.trustedTypes,f=v?v.emptyScript:"",g=p.reactiveElementPolyfillSupport,y={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$};let b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{a?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=l.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:y).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:y;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:b}),(null!==(m=p.reactiveElementVersions)&&void 0!==m?m:p.reactiveElementVersions=[]).push("1.6.1");const A=window,x=A.trustedTypes,E=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,C="?"+S,k=`<${C}>`,T=document,O=(t="")=>T.createComment(t),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,M=/>/g,R=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),j=/'/g,z=/"/g,V=/^(?:script|style|textarea|title)$/i,I=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),D=I(1),L=I(2),B=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,F=T.createTreeWalker(T,129,null,!1),K=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===H?"!--"===a[1]?r=N:void 0!==a[1]?r=M:void 0!==a[2]?(V.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=R):void 0!==a[3]&&(r=R):r===R?">"===a[0]?(r=null!=o?o:H,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?R:'"'===a[3]?z:j):r===z||r===j?r=R:r===N||r===M?r=H:(r=R,o=void 0);const h=r===R&&t[e+1].startsWith("/>")?" ":"";n+=r===H?i+k:c>=0?(s.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+S+h):i+S+(-2===c?(s.push(void 0),e):h)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==E?E.createHTML(l):l,s]};class J{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,c]=K(t,e);if(this.el=J.createElement(a,i),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=F.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(S)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(S),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?et:"@"===e[1]?it:X})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(V.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),F.nextNode(),l.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)l.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){var o,n,r,l;if(e===B)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const c=U(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=Z(t,a._$AS(t,e.values),a,s)),e}class G{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:T).importNode(i,!0);F.currentNode=o;let n=F.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new st(n,this,t)),this.u.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=F.nextNode(),r++)}return o}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{constructor(t,e,i,s){var o;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),U(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==B&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==q&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(i);else{const t=new G(o,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new J(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=Z(this,s[i+r],e,r),l===B&&(l=this._$AH[r]),n||(n=!U(l)||l!==this._$AH[r]),l===q?t=q:t!==q&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}const tt=x?x.emptyScript:"";class et extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class it extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Z(this,t,e,0))&&void 0!==i?i:q)===B)return;const s=this._$AH,o=t===q&&s!==q||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==q&&(s===q||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=A.litHtmlPolyfillSupport;null==ot||ot(J,Q),(null!==(w=A.litHtmlVersions)&&void 0!==w?w:A.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,rt;class lt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Q(e.insertBefore(O(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}lt.finalized=!0,lt._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:lt});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:lt}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.2.2");
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
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;function ut(t,e=0){
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):e}var mt="0.1.0";console.groupCollapsed(`%c⚡ System Flow Card v${mt} is installed`,"color: #488fc2; font-weight: bold"),console.log("Readme:","https://github.com/flyrmyr/system-flow-card"),console.groupEnd();const pt=function(t,e,i){var s;return void 0===i&&(i=!1),function(){var o=[].slice.call(arguments),n=this,r=i&&!s;clearTimeout(s),s=setTimeout((function(){s=null,i||t.apply(n,o)}),e),r&&t.apply(n,o)}}((t=>{console.log(`%c⚡ System Flow Card v${mt} %cError: ${t}`,"color: #488fc2; font-weight: bold","color: #b33a3a; font-weight: normal")}),500);let vt=class extends lt{constructor(){super(...arguments),this._config={},this.getEntity=t=>{const e=t?this.hass.states[t]:void 0;if(e&&e.state)return e;pt(`entity "${null!=t?t:"Unknown"}" is not available or misconfigured`)},this.previousDur={},this.getElementEntityId=t=>t.value?"string"==typeof t.value?t.value:t.value.toSystem||t.value.fromSystem||void 0:void 0,this.getElementEntity=t=>this.getEntity(this.getElementEntityId(t)),this.getElementIconId=t=>{if(t.icon)return t.icon;const e=this.getElementEntity(t);return e&&e?function(t){if(!t)return"mdi:bookmark";if(t.attributes.icon)return t.attributes.icon;var e=function(t){return t.substr(0,t.indexOf("."))}(t.entity_id);return e in r?r[e](t):o(e,t.state)}(e):"mdi:eye"},this.getElementColor=t=>t.color?t.color:"var(--primary-text-color)",this.getElementUnit=t=>t.unit||this.getEntityUnit(this.getElementEntity(t)),this.getEntityUnit=t=>{const e="string"==typeof t?this.getEntity(t):t;if(e)return e.attributes.unit_of_measurement},this.displayValue=(t,e=!1,i=null,s=!1)=>{let o=t;return e&&(o=Math.abs(ut(o))),"number"==typeof o&&"number"==typeof s&&(o=((t,e)=>{const i=10**e;return Math.round(t*i)/i})(o,s)),i&&(o=`${o} ${i}`),o},this.getEntityValue=(t,e=!1,i=!1,s=!1)=>{const o="string"==typeof t?this.getEntity(t):t;if(!o)return;const n=null==o?void 0:o.state,r=i?this.getEntityUnit(o):null;return this.displayValue(n,e,r,s)},this.elementArrows=(t,e,i=null)=>{if(!t)return null;let s;switch(!0){case"top"===e&&t>0||"bottom"===e&&t<0:s="down";break;case"top"===e&&t<0||"bottom"===e&&t>0:s="up";break;case"left"===e&&t>0||"right"===e&&t<0:s="right";break;case"left"===e&&t<0||"right"===e&&t>0:s="left";break;default:s=""}return D`
      <ha-icon style="fill: ${i}" class="small" icon="mdi:arrow-${s}"></ha-icon>
    `},this.elementValueArrows=t=>D`
    <div style="height: 12px;">
      ${t.calculations.systemTotal?D`
          ${["left","middle"].includes(t.position)?null:this.elementArrows(t.calculations.systemTotal,t.position,this.getElementColor(t))}
          ${this.displayValue(t.calculations.systemTotal,"middle"!==t.position,this.getElementUnit(t),0)}
          ${"left"===t.position?this.elementArrows(t.calculations.systemTotal,t.position,this.getElementColor(t)):null}
        `:null}
    </div>
  `,this.elementToHtml=(t,e=!1)=>{var i,s,o,n,r,l,a,c,d;return D`
    <div class="circle-container container-${t.position}" style="
      opacity: ${t.calculations.systemTotal||e||!(null===(i=this._config)||void 0===i?void 0:i.fadeIdylElements)?1:.25};
    ">
      <div class="circle" style="border-color: ${this.getElementColor(t)}">
        ${t.fill?D`<div style="
            height: ${ut(this.getEntityValue(t.fill,!0,!1))}%; 
            position: absolute; width: 100%; bottom: 0px;
            background-color: ${this.getElementColor(t)};
            opacity: .25;
          "></div>`:null}
        ${"bottom"===t.position?this.elementValueArrows(t):D`<div style="height: 12px;">${(null===(s=t.extra)||void 0===s?void 0:s.main)?this.getEntityValue(null===(o=t.extra)||void 0===o?void 0:o.main,!1,!0):" "}</div>`}
        <div style="width: 100%; display: flex">
          <span class="side-extra">${(null===(n=t.extra)||void 0===n?void 0:n.left)?this.getEntityValue(null===(r=t.extra)||void 0===r?void 0:r.left,!1,!0):" "}</span>
          <ha-icon style="width: 24px; fill: ${this.getElementColor(t)}" icon="${this.getElementIconId(t)}"></ha-icon>
          <span class="side-extra">${(null===(l=t.extra)||void 0===l?void 0:l.right)?this.getEntityValue(null===(a=t.extra)||void 0===a?void 0:a.right,!1,!0):" "}</span>
        </div>
        ${"bottom"===t.position?D`<div style="height: 12px;">${(null===(c=t.extra)||void 0===c?void 0:c.main)?this.getEntityValue(null===(d=t.extra)||void 0===d?void 0:d.main,!1,!0):" "}</div>`:this.elementValueArrows(t)}
      </div>
    </div>
  `}}setConfig(t){if(!t.elements||!t.elements.length)throw new Error("At least one entity must be defined");["top","bottom"].forEach((e=>{if(t.elements.filter((t=>t.position===e)).length>2)throw new Error(`Maximum 2 elements allowed in ${e} row.`)})),this._config=Object.assign(Object.assign({},t),{speed:ut(t.speed,5)})}getCardSize(){return 3}render(){var t,e,i,s,o,n,r;if(!this._config||!this.hass)return D``;const{elements:l}=this._config;let a=0;const c=l.map((t=>{let e=0,i=null,s=0;const o=t.invert?-1:1;e="string"==typeof t.value?ut(this.getEntityValue(t.value))*o:ut(this.getEntityValue(t.value.toSystem)),"string"!=typeof t.value&&t.value.fromSystem&&(i=ut(this.getEntityValue(t.value.fromSystem))),s=e-(null!=i?i:0),t.exclude||(a-=s);const n="string"==typeof t.extra?{main:t.extra}:t.extra;return Object.assign(Object.assign({},t),{extra:n,calculations:{toSystem:e,fromSystem:i,systemTotal:s}})})),d="string"==typeof(null===(t=this._config.system)||void 0===t?void 0:t.extra)?{main:null===(e=this._config.system)||void 0===e?void 0:e.extra}:null===(i=this._config.system)||void 0===i?void 0:i.extra;c.push(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({value:"system"},(null===(s=this._config.system)||void 0===s?void 0:s.unit)?{unit:this._config.system.unit}:null),{icon:(null===(o=this._config.system)||void 0===o?void 0:o.icon)||"mdi:house"}),(null===(n=this._config.system)||void 0===n?void 0:n.extra)?{extra:this._config.system.extra}:null),(null===(r=this._config.system)||void 0===r?void 0:r.color)?{color:this._config.system.color}:null),{position:"middle",extra:d,calculations:{toSystem:a>0?a:0,fromSystem:a<0?a:0,systemTotal:a}}));const h={left:c.filter((t=>"left"===t.position)),top:c.filter((t=>"top"===t.position)),right:c.filter((t=>"right"===t.position)),bottom:c.filter((t=>"bottom"===t.position)),middle:c.filter((t=>"middle"===t.position))},u={left:"position: absolute; left: 0; top: 10px; width: calc(50% - 42px); height: calc(100% - 20px);",top:"position: absolute; left: 10px; top: 0; width: calc(100% - 20px); height: calc(50% - 42px);",right:"position: absolute; left: calc(50% + 42px); top: 10px; width: calc(50% - 42px); height: calc(100% - 20px);",bottom:"position: absolute; left: 10px; top: calc(50% + 42px); width: calc(100% - 20px); height: calc(50% - 42px);"},m={left:(t,e)=>`M 100 ${e},  C 50 ${e},   50 ${t},   0 ${t}`,top:(t,e)=>`M ${e} 100,  C ${e} 50,   ${t} 50,   ${t} 0`,right:(t,e)=>`M 0 ${e},    C 50 ${e},   50 ${t},   100 ${t}`,bottom:(t,e)=>`M ${e} 0,    C ${e} 50,   ${t} 50,   ${t} 100`},p=c.filter((t=>0!==t.calculations.systemTotal)).reduce(((t,e)=>t+Math.abs(e.calculations.systemTotal)),0)/c.length,v=Object.fromEntries(["left","top","right","bottom"].map((t=>{const e=h[t],i=1/e.length*100;return[t,e.map(((e,s)=>{var o,n;const r=`flow-${t}-${s}`,l=(s+1)*i-.5*i,a=50+-10*(1-l/50),c=m[t](l,a),d=e.calculations.systemTotal&&p?this._config.speed/(Math.abs(e.calculations.systemTotal)/p):0,h=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(`#${r}`))&&void 0!==n?n:null;return h&&d&&this.previousDur[r]&&this.previousDur[r]!==d&&(h.pauseAnimations(),h.setCurrentTime(h.getCurrentTime()*(d/this.previousDur[r])),h.unpauseAnimations()),this.previousDur[r]=d,{flowId:r,element:e,path:c,dur:d}}))]})));return D`
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
                ${h.top.length?h.top.map((t=>this.elementToHtml(t))):D`<div class="spacer container-top"></div>`}
              </div>

              <div class="row">
                ${h.middle.map((t=>this.elementToHtml(t,!0)))}
              </div>

              <div class="row">
                ${h.bottom.length?h.bottom.map((t=>this.elementToHtml(t))):D`<div class="spacer container-bottom"></div>`}
              </div>
            </div>

            <div class="col">
              <div class="spacer container-right"></div>
              ${h.right.map((t=>this.elementToHtml(t)))}
              <div class="spacer container-right"></div>
            </div>

            <div class="lines">
              ${f=v,g=(t,e)=>D`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="${u[t]}"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  ${e.map((e=>{var i;return L`
                    <path
                      d="${e.path}"
                      stroke="${this.getElementColor(e.element)}"
                      vector-effect="non-scaling-size"
                      style="opacity: ${!e.element.calculations.systemTotal&&(null===(i=this._config)||void 0===i?void 0:i.fadeIdylElements)?.25:1};"
                    ></path>
                    ${this.displayValue(e.element.calculations.systemTotal)&&D`
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          style="${u[t]}"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          id="${e.flowId}"
                        >
                          ${L`
                            <circle
                              r="1"
                              vector-effect="non-scaling-stroke"
                              style="
                                stroke-width: 4;
                                stroke: ${this.getElementColor(e.element)};
                                fill: ${this.getElementColor(e.element)};
                              "
                            >
                              <animateMotion
                                dur="${e.dur}"
                                rotate="auto"
                                repeatCount="indefinite"
                                calcMode="linear"
                                path="${e.path}"
                                keyPoints="${e.element.calculations.systemTotal>0?"1;0":"0;1"}"
                                keyTimes="${e.element.calculations.systemTotal,"0;1"}"
                              />
                            </circle>
                          `}
                        </svg>
                      `}
                  `}))}
                </svg>
              `,Object.keys(f).map((t=>g(t,f[t])))}
            </div>
          </div>
        </div>
      </ha-card>
    `;var f,g}};vt.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new h(i,t,c)})`
    :host {
      --mdc-icon-size: 24px;
    }
    ha-card {
      overflow: auto;
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
  `,t([dt({attribute:!1})],vt.prototype,"hass",void 0),t([function(t){return dt({...t,state:!0})}()],vt.prototype,"_config",void 0),vt=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("system-flow-card")],vt);const ft=window;ft.customCards=ft.customCards||[],ft.customCards.push({type:"system-flow-card",name:"System Flow Card",description:"A system distribution card inspired by the official Energy Distribution card for Home Assistant"});export{vt as SystemFlowCard};
