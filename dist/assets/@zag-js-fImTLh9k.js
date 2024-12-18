import"./react-BumvrlAz.js";import"./react-dom-BC3op_u9.js";import{m as se,g as Oe}from"./proxy-compare-D_SdPurH.js";var Pe=2147483647,ke=1,Ae=9,ie=e=>typeof e=="object"&&e!==null,Fe=e=>ie(e)&&e.nodeType===ke&&typeof e.nodeName=="string",Le=e=>ie(e)&&e.nodeType===Ae,Ve=e=>ie(e)&&e===e.window;function De(e){return Le(e)?e:Ve(e)?e.document:(e==null?void 0:e.ownerDocument)??document}function He(e){let t=e.activeElement;for(;t!=null&&t.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}var ce=()=>typeof document<"u";function Ne(){const e=navigator.userAgentData;return(e==null?void 0:e.platform)??navigator.platform}var Me=e=>ce()&&e.test(Ne()),ze=e=>ce()&&e.test(navigator.vendor),je=()=>Ge()&&ze(/apple/i),Ge=()=>Me(/mac|iphone|ipad|ipod/i),oe=e=>e.id;function We(e,t,r=oe){return e.find(i=>r(i)===t)}function ne(e,t,r=oe){const i=We(e,t,r);return i?e.indexOf(i):-1}function Ie(e,t,r=!0){let i=ne(e,t);return i=r?(i+1)%e.length:Math.min(i+1,e.length-1),e[i]}function me(e,t,r=!0){let i=ne(e,t);return i===-1?r?e[e.length-1]:null:(i=r?(i-1+e.length)%e.length:Math.max(0,i-1),e[i])}var _e=e=>e.split("").map(t=>{const r=t.charCodeAt(0);return r>0&&r<128?t:r>=128&&r<=255?`/x${r.toString(16)}`.replace("/","\\"):""}).join("").trim(),qe=e=>{var t;return _e(((t=e.dataset)==null?void 0:t.valuetext)??e.textContent??"")},Ke=(e,t)=>e.trim().toLowerCase().startsWith(t.toLowerCase()),Xe=(e,t)=>e.map((r,i)=>e[(Math.max(t,0)+i)%e.length]);function Ze(e,t,r,i=oe){const o=r?ne(e,r,i):-1;let s=r?Xe(e,o):e;return t.length===1&&(s=s.filter(u=>i(u)!==r)),s.find(u=>Ke(qe(u),t))}function Ue(e,t){const{state:r,activeId:i,key:o,timeout:s=350,itemToId:f}=t,u=r.keysSoFar+o,n=u.length>1&&Array.from(u).every(E=>E===u[0])?u[0]:u;let B=e.slice();const S=Ze(B,n,i,f);function I(){clearTimeout(r.timer),r.timer=-1}function b(E){r.keysSoFar=E,I(),E!==""&&(r.timer=+setTimeout(()=>{b(""),I()},s))}return b(u),S}var Ye=Object.assign(Ue,{defaultOptions:{keysSoFar:"",timer:-1},isValidEvent:Je});function Je(e){return e.key.length===1&&!e.ctrlKey&&!e.metaKey}var de=e=>typeof e=="object"&&e!==null&&e.nodeType===1,Qe=e=>de(e)&&e.tagName==="IFRAME";function xe(e){return de(e)?e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0:!1}var fe="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type",be=(e,t=!1)=>{if(!e)return[];const r=Array.from(e.querySelectorAll(fe));(t==!0||t=="if-empty"&&r.length===0)&&de(e)&&ue(e)&&r.unshift(e);const o=r.filter(ue);return o.forEach((s,f)=>{if(Qe(s)&&s.contentDocument){const u=s.contentDocument.body;o.splice(f,1,...be(u))}}),o};function ue(e){return!e||e.closest("[inert]")?!1:e.matches(fe)&&xe(e)}function L(e,t){return Array.from((e==null?void 0:e.querySelectorAll(t))??[])}function et(e,t){return(e==null?void 0:e.querySelector(t))??null}function m(e){const t={getRootNode:r=>{var i;return((i=r.getRootNode)==null?void 0:i.call(r))??document},getDoc:r=>De(t.getRootNode(r)),getWin:r=>t.getDoc(r).defaultView??window,getActiveElement:r=>He(t.getRootNode(r)),isActiveElement:(r,i)=>i===t.getActiveElement(r),getById:(r,i)=>t.getRootNode(r).getElementById(i),setValue:(r,i)=>{if(r==null||i==null)return;const o=i.toString();r.value!==o&&(r.value=i.toString())}};return{...t,...e}}var c=(e,t=[])=>({parts:(...r)=>{if(tt(t))return c(e,r);throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?")},extendWith:(...r)=>c(e,[...t,...r]),rename:r=>c(r,t),keys:()=>t,build:()=>[...new Set(t)].reduce((r,i)=>Object.assign(r,{[i]:{selector:[`&[data-scope="${z(e)}"][data-part="${z(i)}"]`,`& [data-scope="${z(e)}"][data-part="${z(i)}"]`].join(", "),attrs:{"data-scope":z(e),"data-part":z(i)}}}),{})}),z=e=>e.replace(/([A-Z])([A-Z])/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),tt=e=>e.length===0;function pe(e){return Math.max(0,Math.min(1,e))}function te(e,t){const{left:r,top:i,width:o,height:s}=t.getBoundingClientRect(),f={x:e.x-r,y:e.y-i},u={x:pe(f.x/o),y:pe(f.y/s)};function N(n={}){const{dir:B="ltr",orientation:S="horizontal",inverted:I}=n,b=typeof I=="object"?I.x:I,E=typeof I=="object"?I.y:I;return S==="horizontal"?B==="rtl"||b?1-u.x:u.x:E?1-u.y:u.y}return{offset:f,percent:u,getPercentValue:N}}var he=e=>e[0],ye=e=>e[e.length-1],rt=Function.prototype.toString;rt.call(Object);function it(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global}function $e(e,t){const r=it();return r?(r[e]||(r[e]=t()),r[e]):t()}var x=e=>typeof e=="object"&&e!==null,W=$e("__zag__proxyStateMap",()=>new WeakMap),X=$e("__zag__refSet",()=>new WeakSet),ot=e=>typeof e=="object"&&e!==null&&"$$typeof"in e,nt=e=>typeof e=="object"&&e!==null&&"__v_isVNode"in e,dt=e=>typeof e=="object"&&e!==null&&"nodeType"in e&&typeof e.nodeName=="string",at=e=>ot(e)||nt(e)||dt(e),lt=(e=Object.is,t=(n,B)=>new Proxy(n,B),r=n=>x(n)&&!X.has(n)&&(Array.isArray(n)||!(Symbol.iterator in n))&&!at(n)&&!(n instanceof WeakMap)&&!(n instanceof WeakSet)&&!(n instanceof Error)&&!(n instanceof Number)&&!(n instanceof Date)&&!(n instanceof String)&&!(n instanceof RegExp)&&!(n instanceof ArrayBuffer),i=n=>{switch(n.status){case"fulfilled":return n.value;case"rejected":throw n.reason;default:throw n}},o=new WeakMap,s=(n,B,S=i)=>{const I=o.get(n);if((I==null?void 0:I[0])===B)return I[1];const b=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n));return se(b,!0),o.set(n,[B,b]),Reflect.ownKeys(n).forEach(E=>{const O=Reflect.get(n,E);X.has(O)?(se(O,!1),b[E]=O):O instanceof Promise?Object.defineProperty(b,E,{get(){return S(O)}}):W.has(O)?b[E]=st(O,S):b[E]=O}),Object.freeze(b)},f=new WeakMap,u=[1,1],N=n=>{if(!x(n))throw new Error("object required");const B=f.get(n);if(B)return B;let S=u[0];const I=new Set,b=(l,d=++u[0])=>{S!==d&&(S=d,I.forEach(a=>a(l,d)))};let E=u[1];const O=(l=++u[1])=>(E!==l&&!I.size&&(E=l,F.forEach(([d])=>{const a=d[1](l);a>S&&(S=a)})),S),ae=l=>(d,a)=>{const R=[...d];R[1]=[l,...R[1]],b(R,a)},F=new Map,Re=(l,d)=>{if(I.size){const a=d[3](ae(l));F.set(l,[d,a])}else F.set(l,[d])},le=l=>{var a;const d=F.get(l);d&&(F.delete(l),(a=d[1])==null||a.call(d))},Se=l=>(I.add(l),I.size===1&&F.forEach(([a,R],M)=>{const _=a[3](ae(M));F.set(M,[a,_])}),()=>{I.delete(l),I.size===0&&F.forEach(([a,R],M)=>{R&&(R(),F.set(M,[a]))})}),Q=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),q=t(Q,{deleteProperty(l,d){const a=Reflect.get(l,d);le(d);const R=Reflect.deleteProperty(l,d);return R&&b(["delete",[d],a]),R},set(l,d,a,R){var ge;const M=Reflect.has(l,d),_=Reflect.get(l,d,R);if(M&&(e(_,a)||f.has(a)&&e(_,f.get(a))))return!0;le(d),x(a)&&(a=Oe(a)||a);let K=a;if(!((ge=Object.getOwnPropertyDescriptor(l,d))!=null&&ge.set))if(a instanceof Promise)a.then(V=>{Object.assign(a,{status:"fulfilled",value:V}),b(["resolve",[d],V])}).catch(V=>{Object.assign(a,{status:"rejected",reason:V}),b(["reject",[d],V])});else{!W.has(a)&&r(a)&&(K=Ee(a));const V=!X.has(K)&&W.get(K);V&&Re(d,V)}return Reflect.set(l,d,K,R),b(["set",[d],a,_]),!0}});f.set(n,q);const Be=[Q,O,s,Se];return W.set(q,Be),Reflect.ownKeys(n).forEach(l=>{const d=Object.getOwnPropertyDescriptor(n,l);d.get||d.set?Object.defineProperty(Q,l,d):q[l]=n[l]}),q})=>[N,W,X,e,t,r,i,o,s,f,u],[gt]=lt();function Ee(e={}){return gt(e)}function st(e,t){const r=W.get(e),[i,o,s]=r;return s(i,o(),t)}var g=()=>e=>Array.from(new Set(e)),ut=c("accordion").parts("root","item","itemTrigger","itemContent","itemIndicator");ut.build();var P=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`accordion:${e.id}`},getItemId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.item)==null?void 0:i.call(r,t))??`accordion:${e.id}:item:${t}`},getItemContentId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemContent)==null?void 0:i.call(r,t))??`accordion:${e.id}:content:${t}`},getItemTriggerId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemTrigger)==null?void 0:i.call(r,t))??`accordion:${e.id}:trigger:${t}`},getRootEl:e=>P.getById(e,P.getRootId(e)),getTriggerEls:e=>{const r=`[aria-controls][data-ownedby='${CSS.escape(P.getRootId(e))}']:not([disabled])`;return L(P.getRootEl(e),r)},getFirstTriggerEl:e=>he(P.getTriggerEls(e)),getLastTriggerEl:e=>ye(P.getTriggerEls(e)),getNextTriggerEl:(e,t)=>Ie(P.getTriggerEls(e),P.getItemTriggerId(e,t)),getPrevTriggerEl:(e,t)=>me(P.getTriggerEls(e),P.getItemTriggerId(e,t))});g()(["collapsible","dir","disabled","getRootNode","id","ids","multiple","onFocusChange","onValueChange","orientation","value"]);g()(["value","disabled"]);var pt=c("collapsible").parts("root","trigger","content");pt.build();var j=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`collapsible:${e.id}`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`collapsible:${e.id}:content`},getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`collapsible:${e.id}:trigger`},getRootEl:e=>j.getById(e,j.getRootId(e)),getContentEl:e=>j.getById(e,j.getContentId(e)),getTriggerEl:e=>j.getById(e,j.getTriggerId(e))});g()(["dir","disabled","getRootNode","id","ids","onExitComplete","onOpenChange","open.controlled","open"]);function ct(e,t,r){return Math.round((e-t)/r)*r+t}function It(e,t,r){return Math.min(Math.max(e,t),r)}function mt(e,t,r){return(e-t)/(r-t)}function ft(e,t,r,i){const o=e*(r-t)+t,s=ct(o,t,i);return It(s,t,r)}function re(e,t){const r={min:e[0],max:e[1]},i={min:t[0],max:t[1]};return function(s){if(r.min===r.max||i.min===i.max)return i.min;const f=(i.max-i.min)/(r.max-r.min);return i.min+f*(s-r.min)}}var ve=e=>e.ownerDocument.defaultView||window;function bt(e,t){const{type:r="HTMLInputElement",property:i="value"}=t,o=ve(e)[r].prototype;return Object.getOwnPropertyDescriptor(o,i)??{}}function ht(e,t,r={}){var o;(o=bt(e,r).set)==null||o.call(e,t),e.setAttribute("value",t)}function Te(e,t){const{value:r,bubbles:i=!0}=t;if(!e)return;const o=ve(e);e instanceof o.HTMLInputElement&&(ht(e,`${r}`),e.dispatchEvent(new o.Event("input",{bubbles:i})))}var yt=c("color-picker",["root","label","control","trigger","positioner","content","area","areaThumb","valueText","areaBackground","channelSlider","channelSliderLabel","channelSliderTrack","channelSliderThumb","channelSliderValueText","channelInput","transparencyGrid","swatchGroup","swatchTrigger","swatchIndicator","swatch","eyeDropperTrigger","formatTrigger","formatSelect"]);yt.build();var p=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`color-picker:${e.id}`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`color-picker:${e.id}:label`},getHiddenInputId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`color-picker:${e.id}:hidden-input`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`color-picker:${e.id}:control`},getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`color-picker:${e.id}:trigger`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`color-picker:${e.id}:content`},getPositionerId:e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`color-picker:${e.id}:positioner`},getFormatSelectId:e=>{var t;return((t=e.ids)==null?void 0:t.formatSelect)??`color-picker:${e.id}:format-select`},getAreaId:e=>{var t;return((t=e.ids)==null?void 0:t.area)??`color-picker:${e.id}:area`},getAreaGradientId:e=>{var t;return((t=e.ids)==null?void 0:t.areaGradient)??`color-picker:${e.id}:area-gradient`},getAreaThumbId:e=>{var t;return((t=e.ids)==null?void 0:t.areaThumb)??`color-picker:${e.id}:area-thumb`},getChannelSliderTrackId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.channelSliderTrack)==null?void 0:i.call(r,t))??`color-picker:${e.id}:slider-track:${t}`},getChannelSliderThumbId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.channelSliderThumb)==null?void 0:i.call(r,t))??`color-picker:${e.id}:slider-thumb:${t}`},getContentEl:e=>p.getById(e,p.getContentId(e)),getAreaThumbEl:e=>p.getById(e,p.getAreaThumbId(e)),getChannelSliderThumbEl:(e,t)=>p.getById(e,p.getChannelSliderThumbId(e,t)),getChannelInputEl:(e,t)=>{const r=`input[data-channel="${t}"]`;return[...L(p.getContentEl(e),r),...L(p.getControlEl(e),r)]},getFormatSelectEl:e=>p.getById(e,p.getFormatSelectId(e)),getHiddenInputEl:e=>p.getById(e,p.getHiddenInputId(e)),getAreaEl:e=>p.getById(e,p.getAreaId(e)),getAreaValueFromPoint(e,t){const r=p.getAreaEl(e);if(!r)return;const{percent:i}=te(t,r);return i},getControlEl:e=>p.getById(e,p.getControlId(e)),getTriggerEl:e=>p.getById(e,p.getTriggerId(e)),getPositionerEl:e=>p.getById(e,p.getPositionerId(e)),getChannelSliderTrackEl:(e,t)=>p.getById(e,p.getChannelSliderTrackId(e,t)),getChannelSliderValueFromPoint(e,t,r){const i=p.getChannelSliderTrackEl(e,r);if(!i)return;const{percent:o}=te(t,i);return o},getChannelInputEls:e=>[...L(p.getContentEl(e),"input[data-channel]"),...L(p.getControlEl(e),"input[data-channel]")]}),$t=c("dialog").parts("trigger","backdrop","positioner","content","title","description","closeTrigger");$t.build();var v=m({getPositionerId:e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`dialog:${e.id}:positioner`},getBackdropId:e=>{var t;return((t=e.ids)==null?void 0:t.backdrop)??`dialog:${e.id}:backdrop`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`dialog:${e.id}:content`},getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`dialog:${e.id}:trigger`},getTitleId:e=>{var t;return((t=e.ids)==null?void 0:t.title)??`dialog:${e.id}:title`},getDescriptionId:e=>{var t;return((t=e.ids)==null?void 0:t.description)??`dialog:${e.id}:description`},getCloseTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.closeTrigger)??`dialog:${e.id}:close`},getContentEl:e=>v.getById(e,v.getContentId(e)),getPositionerEl:e=>v.getById(e,v.getPositionerId(e)),getBackdropEl:e=>v.getById(e,v.getBackdropId(e)),getTriggerEl:e=>v.getById(e,v.getTriggerId(e)),getTitleEl:e=>v.getById(e,v.getTitleId(e)),getDescriptionEl:e=>v.getById(e,v.getDescriptionId(e)),getCloseTriggerEl:e=>v.getById(e,v.getCloseTriggerId(e))});g()(["aria-label","closeOnEscape","closeOnInteractOutside","dir","finalFocusEl","getRootNode","getRootNode","id","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","open.controlled","open","persistentElements","preventScroll","restoreFocus","role","trapFocus"]);var Et=c("editable").parts("root","area","label","preview","input","editTrigger","submitTrigger","cancelTrigger","control");Et.build();var k=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`editable:${e.id}`},getAreaId:e=>{var t;return((t=e.ids)==null?void 0:t.area)??`editable:${e.id}:area`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`editable:${e.id}:label`},getPreviewId:e=>{var t;return((t=e.ids)==null?void 0:t.preview)??`editable:${e.id}:preview`},getInputId:e=>{var t;return((t=e.ids)==null?void 0:t.input)??`editable:${e.id}:input`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`editable:${e.id}:control`},getSubmitTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.submitTrigger)??`editable:${e.id}:submit`},getCancelTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.cancelTrigger)??`editable:${e.id}:cancel`},getEditTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.editTrigger)??`editable:${e.id}:edit`},getInputEl:e=>k.getById(e,k.getInputId(e)),getPreviewEl:e=>k.getById(e,k.getPreviewId(e)),getSubmitTriggerEl:e=>k.getById(e,k.getSubmitTriggerId(e)),getCancelTriggerEl:e=>k.getById(e,k.getCancelTriggerId(e)),getEditTriggerEl:e=>k.getById(e,k.getEditTriggerId(e))});g()(["activationMode","autoResize","dir","disabled","finalFocusEl","form","getRootNode","id","ids","invalid","maxLength","name","onEditChange","onFocusOutside","onInteractOutside","onPointerDownOutside","onValueChange","onValueCommit","onValueRevert","placeholder","readOnly","required","selectOnFocus","edit","edit.controlled","submitMode","translations","value"]);var vt=c("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger");vt.build();var Z=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`file:${e.id}`},getDropzoneId:e=>{var t;return((t=e.ids)==null?void 0:t.dropzone)??`file:${e.id}:dropzone`},getHiddenInputId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`file:${e.id}:input`},getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`file:${e.id}:trigger`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`file:${e.id}:label`},getItemId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.item)==null?void 0:i.call(r,t))??`file:${e.id}:item:${t}`},getItemNameId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemName)==null?void 0:i.call(r,t))??`file:${e.id}:item-name:${t}`},getItemSizeTextId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemSizeText)==null?void 0:i.call(r,t))??`file:${e.id}:item-size:${t}`},getItemPreviewId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemPreview)==null?void 0:i.call(r,t))??`file:${e.id}:item-preview:${t}`},getHiddenInputEl:e=>Z.getById(e,Z.getHiddenInputId(e)),getDropzoneEl:e=>Z.getById(e,Z.getDropzoneId(e))});g()(["accept","allowDrop","capture","dir","directory","disabled","getRootNode","id","ids","locale","maxFiles","maxFileSize","minFileSize","name","invalid","onFileAccept","onFileReject","onFileChange","required","translations","validate"]);g()(["file"]);var Tt=c("menu").parts("arrow","arrowTip","content","contextTrigger","indicator","item","itemGroup","itemGroupLabel","itemIndicator","itemText","positioner","separator","trigger","triggerItem");Tt.build();var y=m({getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`menu:${e.id}:trigger`},getContextTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.contextTrigger)??`menu:${e.id}:ctx-trigger`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`menu:${e.id}:content`},getArrowId:e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`menu:${e.id}:arrow`},getPositionerId:e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`menu:${e.id}:popper`},getGroupId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.group)==null?void 0:i.call(r,t))??`menu:${e.id}:group:${t}`},getGroupLabelId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.groupLabel)==null?void 0:i.call(r,t))??`menu:${e.id}:group-label:${t}`},getContentEl:e=>y.getById(e,y.getContentId(e)),getPositionerEl:e=>y.getById(e,y.getPositionerId(e)),getTriggerEl:e=>y.getById(e,y.getTriggerId(e)),getHighlightedItemEl:e=>e.highlightedValue?y.getById(e,e.highlightedValue):null,getArrowEl:e=>y.getById(e,y.getArrowId(e)),getElements:e=>{const r=`[role^="menuitem"][data-ownedby=${CSS.escape(y.getContentId(e))}]:not([data-disabled])`;return L(y.getContentEl(e),r)},getFirstEl:e=>he(y.getElements(e)),getLastEl:e=>ye(y.getElements(e)),getNextEl:(e,t)=>Ie(y.getElements(e),e.highlightedValue,t??e.loopFocus),getPrevEl:(e,t)=>me(y.getElements(e),e.highlightedValue,t??e.loopFocus),getElemByKey:(e,t)=>Ye(y.getElements(e),{state:e.typeaheadState,key:t,activeId:e.highlightedValue}),isTargetDisabled:e=>Fe(e)&&(e.dataset.disabled===""||e.hasAttribute("disabled")),isTriggerItem:e=>{var t;return!!((t=e==null?void 0:e.getAttribute("role"))!=null&&t.startsWith("menuitem"))&&!!(e!=null&&e.hasAttribute("aria-controls"))},getOptionFromItemEl(e){return{id:e.id,name:e.dataset.name,value:e.dataset.value,valueText:e.dataset.valueText,type:e.dataset.type}}});g()(["anchorPoint","aria-label","closeOnSelect","dir","getRootNode","highlightedValue","id","ids","loopFocus","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","onEscapeKeyDown","onSelect","onHighlightChange","open","open.controlled","positioning","typeahead","composite"]);g()(["closeOnSelect","disabled","value","valueText"]);g()(["htmlFor"]);g()(["id"]);g()(["disabled","valueText","closeOnSelect","type","value","checked","onCheckedChange"]);var wt=c("popover").parts("arrow","arrowTip","anchor","trigger","indicator","positioner","content","title","description","closeTrigger");wt.build();var T=m({getAnchorId:e=>{var t;return((t=e.ids)==null?void 0:t.anchor)??`popover:${e.id}:anchor`},getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`popover:${e.id}:trigger`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`popover:${e.id}:content`},getPositionerId:e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`popover:${e.id}:popper`},getArrowId:e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`popover:${e.id}:arrow`},getTitleId:e=>{var t;return((t=e.ids)==null?void 0:t.title)??`popover:${e.id}:title`},getDescriptionId:e=>{var t;return((t=e.ids)==null?void 0:t.description)??`popover:${e.id}:desc`},getCloseTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.closeTrigger)??`popover:${e.id}:close`},getAnchorEl:e=>T.getById(e,T.getAnchorId(e)),getTriggerEl:e=>T.getById(e,T.getTriggerId(e)),getContentEl:e=>T.getById(e,T.getContentId(e)),getPositionerEl:e=>T.getById(e,T.getPositionerId(e)),getTitleEl:e=>T.getById(e,T.getTitleId(e)),getDescriptionEl:e=>T.getById(e,T.getDescriptionId(e)),getFocusableEls:e=>be(T.getContentEl(e)),getFirstFocusableEl:e=>T.getFocusableEls(e)[0]});g()(["autoFocus","closeOnEscape","closeOnInteractOutside","dir","getRootNode","id","ids","initialFocusEl","modal","onEscapeKeyDown","onFocusOutside","onInteractOutside","onOpenChange","onPointerDownOutside","open.controlled","open","persistentElements","portalled","positioning"]);var Ct=c("radio-group").parts("root","label","item","itemText","itemControl","indicator");Ct.build();var $=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`radio-group:${e.id}`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`radio-group:${e.id}:label`},getItemId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.item)==null?void 0:i.call(r,t))??`radio-group:${e.id}:radio:${t}`},getItemHiddenInputId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemHiddenInput)==null?void 0:i.call(r,t))??`radio-group:${e.id}:radio:input:${t}`},getItemControlId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemControl)==null?void 0:i.call(r,t))??`radio-group:${e.id}:radio:control:${t}`},getItemLabelId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemLabel)==null?void 0:i.call(r,t))??`radio-group:${e.id}:radio:label:${t}`},getIndicatorId:e=>{var t;return((t=e.ids)==null?void 0:t.indicator)??`radio-group:${e.id}:indicator`},getRootEl:e=>$.getById(e,$.getRootId(e)),getItemHiddenInputEl:(e,t)=>$.getById(e,$.getItemHiddenInputId(e,t)),getIndicatorEl:e=>$.getById(e,$.getIndicatorId(e)),getFirstEnabledInputEl:e=>{var t;return(t=$.getRootEl(e))==null?void 0:t.querySelector("input:not(:disabled)")},getFirstEnabledAndCheckedInputEl:e=>{var t;return(t=$.getRootEl(e))==null?void 0:t.querySelector("input:not(:disabled):checked")},getInputEls:e=>{const r=`input[type=radio][data-ownedby='${CSS.escape($.getRootId(e))}']:not([disabled])`;return L($.getRootEl(e),r)},getActiveRadioEl:e=>{if(e.value)return $.getById(e,$.getItemId(e,e.value))},getOffsetRect:e=>({left:(e==null?void 0:e.offsetLeft)??0,top:(e==null?void 0:e.offsetTop)??0,width:(e==null?void 0:e.offsetWidth)??0,height:(e==null?void 0:e.offsetHeight)??0}),getRectById:(e,t)=>{const r=$.getById(e,$.getItemId(e,t));if(r)return $.resolveRect($.getOffsetRect(r))},resolveRect:e=>({width:`${e.width}px`,height:`${e.height}px`,left:`${e.left}px`,top:`${e.top}px`})});g()(["dir","disabled","form","getRootNode","id","ids","name","onValueChange","orientation","readOnly","value"]);g()(["value","disabled","invalid"]);var Rt=c("rating-group").parts("root","label","item","control");Rt.build();var D=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`rating:${e.id}`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`rating:${e.id}:label`},getHiddenInputId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`rating:${e.id}:input`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`rating:${e.id}:control`},getItemId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.item)==null?void 0:i.call(r,t))??`rating:${e.id}:item:${t}`},getRootEl:e=>D.getById(e,D.getRootId(e)),getControlEl:e=>D.getById(e,D.getControlId(e)),getRadioEl:(e,t=e.value)=>{const r=`[role=radio][aria-posinset='${Math.ceil(t)}']`;return et(D.getControlEl(e),r)},getHiddenInputEl:e=>D.getById(e,D.getHiddenInputId(e)),dispatchChangeEvent:e=>{const t=D.getHiddenInputEl(e);t&&Te(t,{value:e.value})}});g()(["allowHalf","autoFocus","count","dir","disabled","form","getRootNode","id","ids","name","onHoverChange","onValueChange","required","readOnly","translations","value"]);g()(["index"]);var St=c("select").parts("label","positioner","trigger","indicator","clearTrigger","item","itemText","itemIndicator","itemGroup","itemGroupLabel","list","content","root","control","valueText");St.build();var w=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`select:${e.id}`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`select:${e.id}:content`},getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`select:${e.id}:trigger`},getClearTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.clearTrigger)??`select:${e.id}:clear-trigger`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`select:${e.id}:label`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`select:${e.id}:control`},getItemId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.item)==null?void 0:i.call(r,t))??`select:${e.id}:option:${t}`},getHiddenSelectId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenSelect)??`select:${e.id}:select`},getPositionerId:e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`select:${e.id}:positioner`},getItemGroupId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemGroup)==null?void 0:i.call(r,t))??`select:${e.id}:optgroup:${t}`},getItemGroupLabelId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.itemGroupLabel)==null?void 0:i.call(r,t))??`select:${e.id}:optgroup-label:${t}`},getHiddenSelectEl:e=>w.getById(e,w.getHiddenSelectId(e)),getContentEl:e=>w.getById(e,w.getContentId(e)),getControlEl:e=>w.getById(e,w.getControlId(e)),getTriggerEl:e=>w.getById(e,w.getTriggerId(e)),getClearTriggerEl:e=>w.getById(e,w.getClearTriggerId(e)),getPositionerEl:e=>w.getById(e,w.getPositionerId(e)),getHighlightedOptionEl(e){return e.highlightedValue?w.getById(e,w.getItemId(e,e.highlightedValue)):null}});g()(["closeOnSelect","collection","dir","disabled","deselectable","form","getRootNode","highlightedValue","id","ids","invalid","loopFocus","multiple","name","onFocusOutside","onHighlightChange","onInteractOutside","onOpenChange","onPointerDownOutside","onValueChange","open.controlled","open","composite","positioning","required","readOnly","scrollToIndexFn","value"]);g()(["item","persistFocus"]);g()(["id"]);g()(["htmlFor"]);var Bt=c("slider").parts("root","label","thumb","valueText","track","range","control","markerGroup","marker","draggingIndicator");Bt.build();function Ot(e){const t=e[0],r=e[e.length-1];return[t,r]}function Pt(e){const[t,r]=Ot(e.valuePercent);if(e.valuePercent.length===1){if(e.origin==="center"){const i=e.valuePercent[0]<50,o=i?`${e.valuePercent[0]}%`:"50%",s=i?"50%":`${100-e.valuePercent[0]}%`;return{start:o,end:s}}return{start:"0%",end:`${100-r}%`}}return{start:`${t}%`,end:`${100-r}%`}}function kt(e){return e.isVertical?{position:"absolute",bottom:"var(--slider-range-start)",top:"var(--slider-range-end)"}:{position:"absolute",[e.isRtl?"right":"left"]:"var(--slider-range-start)",[e.isRtl?"left":"right"]:"var(--slider-range-end)"}}function At(e){const{height:t=0}=e.thumbSize??{},r=re([e.min,e.max],[-t/2,t/2]);return parseFloat(r(e.value).toFixed(2))}function Ft(e){const{width:t=0}=e.thumbSize??{};if(e.isRtl){const i=re([e.max,e.min],[-t/2,t/2]);return-1*parseFloat(i(e.value).toFixed(2))}const r=re([e.min,e.max],[-t/2,t/2]);return parseFloat(r(e.value).toFixed(2))}function Lt(e,t){if(e.thumbAlignment==="center")return`${t}%`;const r=e.isVertical?At(e):Ft(e);return`calc(${t}% - ${r}px)`}function we(e){let t=mt(e.value,e.min,e.max)*100;return Lt(e,t)}function Ce(e){let t="visible";return e.thumbAlignment==="contain"&&!e.hasMeasuredThumbSize&&(t="hidden"),t}function Vt(e,t){const r=e.isVertical?"bottom":"insetInlineStart";return{visibility:Ce(e),position:"absolute",transform:"var(--slider-thumb-transform)",[r]:`var(--slider-thumb-offset-${t})`}}function Dt(){return{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",position:"relative"}}function Ht(e){const t=Pt(e);return{...e.value.reduce((i,o,s)=>{const f=we({...e,value:o});return{...i,[`--slider-thumb-offset-${s}`]:f}},{}),"--slider-thumb-transform":e.isVertical?"translateY(50%)":e.isRtl?"translateX(50%)":"translateX(-50%)","--slider-range-start":t.start,"--slider-range-end":t.end}}function Nt(e,t){return{visibility:Ce(e),position:"absolute",pointerEvents:"none",[e.isHorizontal?"insetInlineStart":"bottom"]:we({...e,value:t}),translate:"var(--tx) var(--ty)","--tx":e.isHorizontal?e.isRtl?"50%":"-50%":"0%","--ty":e.isHorizontal?"0%":"50%"}}function Mt(){return{userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none",position:"relative"}}var zt={getRootStyle:Ht,getControlStyle:Dt,getThumbStyle:Vt,getRangeStyle:kt,getMarkerStyle:Nt,getMarkerGroupStyle:Mt},C=m({...zt,getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`slider:${e.id}`},getThumbId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.thumb)==null?void 0:i.call(r,t))??`slider:${e.id}:thumb:${t}`},getHiddenInputId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.hiddenInput)==null?void 0:i.call(r,t))??`slider:${e.id}:input:${t}`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`slider:${e.id}:control`},getTrackId:e=>{var t;return((t=e.ids)==null?void 0:t.track)??`slider:${e.id}:track`},getRangeId:e=>{var t;return((t=e.ids)==null?void 0:t.range)??`slider:${e.id}:range`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`slider:${e.id}:label`},getValueTextId:e=>{var t;return((t=e.ids)==null?void 0:t.valueText)??`slider:${e.id}:value-text`},getMarkerId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.marker)==null?void 0:i.call(r,t))??`slider:${e.id}:marker:${t}`},getRootEl:e=>C.getById(e,C.getRootId(e)),getThumbEl:(e,t)=>C.getById(e,C.getThumbId(e,t)),getHiddenInputEl:(e,t)=>C.getById(e,C.getHiddenInputId(e,t)),getControlEl:e=>C.getById(e,C.getControlId(e)),getElements:e=>L(C.getControlEl(e),"[role=slider]"),getFirstEl:e=>C.getElements(e)[0],getRangeEl:e=>C.getById(e,C.getRangeId(e)),getValueFromPoint(e,t){const r=C.getControlEl(e);if(!r)return;const o=te(t,r).getPercentValue({orientation:e.orientation,dir:e.dir,inverted:{y:!0}});return ft(o,e.min,e.max,e.step)},dispatchChangeEvent(e){Array.from(e.value).forEach((r,i)=>{const o=C.getHiddenInputEl(e,i);o&&Te(o,{value:r})})}});g()(["aria-label","aria-labelledby","dir","disabled","form","getAriaValueText","getRootNode","id","ids","invalid","max","min","minStepsBetweenThumbs","name","onFocusChange","onValueChange","onValueChangeEnd","orientation","origin","readOnly","step","thumbAlignment","thumbAlignment","thumbSize","value"]);g()(["index","name"]);var jt=c("switch").parts("root","label","control","thumb");jt.build();var U=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`switch:${e.id}`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`switch:${e.id}:label`},getThumbId:e=>{var t;return((t=e.ids)==null?void 0:t.thumb)??`switch:${e.id}:thumb`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`switch:${e.id}:control`},getHiddenInputId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`switch:${e.id}:input`},getRootEl:e=>U.getById(e,U.getRootId(e)),getHiddenInputEl:e=>U.getById(e,U.getHiddenInputId(e))});g()(["checked","dir","disabled","form","getRootNode","id","ids","invalid","label","name","onCheckedChange","readOnly","required","value"]);var Gt=c("avatar").parts("root","image","fallback");Gt.build();var Y=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`avatar:${e.id}`},getImageId:e=>{var t;return((t=e.ids)==null?void 0:t.image)??`avatar:${e.id}:image`},getFallbackId:e=>{var t;return((t=e.ids)==null?void 0:t.fallback)??`avatar:${e.id}:fallback`},getRootEl:e=>Y.getById(e,Y.getRootId(e)),getImageEl:e=>Y.getById(e,Y.getImageId(e))});g()(["dir","id","ids","onStatusChange","getRootNode"]);var Wt=c("checkbox").parts("root","label","control","indicator");Wt.build();var J=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`checkbox:${e.id}`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`checkbox:${e.id}:label`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`checkbox:${e.id}:control`},getHiddenInputId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`checkbox:${e.id}:input`},getRootEl:e=>J.getById(e,J.getRootId(e)),getHiddenInputEl:e=>J.getById(e,J.getHiddenInputId(e))});g()(["checked","dir","disabled","form","getRootNode","id","ids","invalid","name","onCheckedChange","readOnly","required","value"]);var _t=c("hoverCard").parts("arrow","arrowTip","trigger","positioner","content");_t.build();var G=m({getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`hover-card:${e.id}:trigger`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`hover-card:${e.id}:content`},getPositionerId:e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`hover-card:${e.id}:popper`},getArrowId:e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`hover-card:${e.id}:arrow`},getTriggerEl:e=>G.getById(e,G.getTriggerId(e)),getContentEl:e=>G.getById(e,G.getContentId(e)),getPositionerEl:e=>G.getById(e,G.getPositionerId(e))});g()(["closeDelay","dir","getRootNode","id","ids","onOpenChange","open.controlled","open","openDelay","positioning"]);function qt(e,t){return(e%t+t)%t}function ee(e){if(typeof window.devicePixelRatio!="number")return Math.round(e);const t=window.devicePixelRatio;return Math.floor(e*t+.5)/t}var Kt=c("numberInput").parts("root","label","input","control","valueText","incrementTrigger","decrementTrigger","scrubber");Kt.build();var h=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`number-input:${e.id}`},getInputId:e=>{var t;return((t=e.ids)==null?void 0:t.input)??`number-input:${e.id}:input`},getIncrementTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.incrementTrigger)??`number-input:${e.id}:inc`},getDecrementTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.decrementTrigger)??`number-input:${e.id}:dec`},getScrubberId:e=>{var t;return((t=e.ids)==null?void 0:t.scrubber)??`number-input:${e.id}:scrubber`},getCursorId:e=>`number-input:${e.id}:cursor`,getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`number-input:${e.id}:label`},getInputEl:e=>h.getById(e,h.getInputId(e)),getIncrementTriggerEl:e=>h.getById(e,h.getIncrementTriggerId(e)),getDecrementTriggerEl:e=>h.getById(e,h.getDecrementTriggerId(e)),getScrubberEl:e=>h.getById(e,h.getScrubberId(e)),getCursorEl:e=>h.getDoc(e).getElementById(h.getCursorId(e)),getPressedTriggerEl:(e,t=e.hint)=>{let r=null;return t==="increment"&&(r=h.getIncrementTriggerEl(e)),t==="decrement"&&(r=h.getDecrementTriggerEl(e)),r},setupVirtualCursor(e){if(!je())return h.createVirtualCursor(e),()=>{var t;(t=h.getCursorEl(e))==null||t.remove()}},preventTextSelection(e){const t=h.getDoc(e),r=t.documentElement,i=t.body;return i.style.pointerEvents="none",r.style.userSelect="none",r.style.cursor="ew-resize",()=>{i.style.pointerEvents="",r.style.userSelect="",r.style.cursor="",r.style.length||r.removeAttribute("style"),i.style.length||i.removeAttribute("style")}},getMousementValue(e,t){const r=ee(t.movementX),i=ee(t.movementY);let o=r>0?"increment":r<0?"decrement":null;e.isRtl&&o==="increment"&&(o="decrement"),e.isRtl&&o==="decrement"&&(o="increment");const s={x:e.scrubberCursorPoint.x+r,y:e.scrubberCursorPoint.y+i},u=h.getWin(e).innerWidth,N=ee(7.5);return s.x=qt(s.x+N,u)-N,{hint:o,point:s}},createVirtualCursor(e){const t=h.getDoc(e),r=t.createElement("div");r.className="scrubber--cursor",r.id=h.getCursorId(e),Object.assign(r.style,{width:"15px",height:"15px",position:"fixed",pointerEvents:"none",left:"0px",top:"0px",zIndex:Pe,transform:e.scrubberCursorPoint?`translate3d(${e.scrubberCursorPoint.x}px, ${e.scrubberCursorPoint.y}px, 0px)`:void 0,willChange:"transform"}),r.innerHTML=`
        <svg width="46" height="15" style="left: -15.5px; position: absolute; top: 0; filter: drop-shadow(rgba(0, 0, 0, 0.4) 0px 1px 1.1px);">
          <g transform="translate(2 3)">
            <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z" style="stroke-width: 2px; stroke: white;"></path>
            <path fill-rule="evenodd" d="M 15 4.5L 15 2L 11.5 5.5L 15 9L 15 6.5L 31 6.5L 31 9L 34.5 5.5L 31 2L 31 4.5Z"></path>
          </g>
        </svg>`,t.body.appendChild(r)}}),Xt=c("pinInput").parts("root","label","input","control");Xt.build();var A=m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`pin-input:${e.id}`},getInputId:(e,t)=>{var r,i;return((i=(r=e.ids)==null?void 0:r.input)==null?void 0:i.call(r,t))??`pin-input:${e.id}:${t}`},getHiddenInputId:e=>{var t;return((t=e.ids)==null?void 0:t.hiddenInput)??`pin-input:${e.id}:hidden`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`pin-input:${e.id}:label`},getControlId:e=>{var t;return((t=e.ids)==null?void 0:t.control)??`pin-input:${e.id}:control`},getRootEl:e=>A.getById(e,A.getRootId(e)),getInputEls:e=>{const r=`input[data-ownedby=${CSS.escape(A.getRootId(e))}]`;return L(A.getRootEl(e),r)},getInputEl:(e,t)=>A.getById(e,A.getInputId(e,t)),getFocusedInputEl:e=>A.getInputEls(e)[e.focusedIndex],getFirstInputEl:e=>A.getInputEls(e)[0],getHiddenInputEl:e=>A.getById(e,A.getHiddenInputId(e))}),Zt=c("progress").parts("root","label","track","range","valueText","view","circle","circleTrack","circleRange");Zt.build();m({getRootId:e=>{var t;return((t=e.ids)==null?void 0:t.root)??`progress-${e.id}`},getTrackId:e=>{var t;return((t=e.ids)==null?void 0:t.track)??`progress-${e.id}-track`},getLabelId:e=>{var t;return((t=e.ids)==null?void 0:t.label)??`progress-${e.id}-label`},getCircleId:e=>{var t;return((t=e.ids)==null?void 0:t.circle)??`progress-${e.id}-circle`}});g()(["dir","getRootNode","id","ids","max","min","orientation","translations","value"]);var Ut=c("tooltip").parts("trigger","arrow","arrowTip","positioner","content");Ut.build();var H=m({getTriggerId:e=>{var t;return((t=e.ids)==null?void 0:t.trigger)??`tooltip:${e.id}:trigger`},getContentId:e=>{var t;return((t=e.ids)==null?void 0:t.content)??`tooltip:${e.id}:content`},getArrowId:e=>{var t;return((t=e.ids)==null?void 0:t.arrow)??`tooltip:${e.id}:arrow`},getPositionerId:e=>{var t;return((t=e.ids)==null?void 0:t.positioner)??`tooltip:${e.id}:popper`},getTriggerEl:e=>H.getById(e,H.getTriggerId(e)),getContentEl:e=>H.getById(e,H.getContentId(e)),getPositionerEl:e=>H.getById(e,H.getPositionerId(e)),getArrowEl:e=>H.getById(e,H.getArrowId(e))});Ee({id:null,prevId:null,setId(e){this.prevId=this.id,this.id=e}});g()(["aria-label","closeDelay","closeOnEscape","closeOnPointerDown","closeOnScroll","closeOnClick","dir","disabled","getRootNode","id","ids","interactive","onOpenChange","open.controlled","open","openDelay","positioning"]);export{Wt as a,Ct as b,c,yt as d,ut as e,$t as f,Et as g,vt as h,Tt as i,wt as j,Rt as k,St as l,Bt as m,jt as n,Gt as o,pt as p,_t as q,Kt as r,Xt as s,Zt as t,Ut as u};
