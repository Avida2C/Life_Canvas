"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{5121:(y,h,r)=>{r.d(h,{u:()=>l});const l=(0,r(7557).fo)("Preferences",{web:()=>r.e(5355).then(r.bind(r,5355)).then(c=>new c.PreferencesWeb)})},9426:(y,h,r)=>{r.d(h,{c:()=>i});var f=r(5424),l=r(2775),c=r(7845);const i=(n,o)=>{let e,t;const u=(a,E,w)=>{if(typeof document>"u")return;const p=document.elementFromPoint(a,E);p&&o(p)?p!==e&&(s(),d(p,w)):s()},d=(a,E)=>{e=a,t||(t=e);const w=e;(0,f.w)(()=>w.classList.add("ion-activated")),E()},s=(a=!1)=>{if(!e)return;const E=e;(0,f.w)(()=>E.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>u(a.currentX,a.currentY,l.a),onMove:a=>u(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),t=void 0}})}},9102:(y,h,r)=>{r.d(h,{g:()=>l});var f=r(2593);const l=()=>{if(void 0!==f.w)return f.w.Capacitor}},2010:(y,h,r)=>{r.d(h,{c:()=>f,i:()=>l});const f=(c,i,n)=>"function"==typeof n?n(c,i):"string"==typeof n?c[n]===i[n]:Array.isArray(i)?i.includes(c):c===i,l=(c,i,n)=>void 0!==c&&(Array.isArray(c)?c.some(o=>f(o,i,n)):f(c,i,n))},2104:(y,h,r)=>{r.d(h,{g:()=>f});const f=(o,e,t,u,d)=>c(o[1],e[1],t[1],u[1],d).map(s=>l(o[0],e[0],t[0],u[0],s)),l=(o,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-o*Math.pow(d-1,3),c=(o,e,t,u,d)=>n((u-=d)-3*(t-=d)+3*(e-=d)-(o-=d),3*t-6*e+3*o,3*e-3*o,o).filter(a=>a>=0&&a<=1),n=(o,e,t,u)=>{if(0===o)return((o,e,t)=>{const u=e*e-4*o*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*o),(-e-Math.sqrt(u))/(2*o)]})(e,t,u);const d=(3*(t/=o)-(e/=o)*e)/3,s=(2*e*e*e-9*e*t+27*(u/=o))/27;if(0===d)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-d),-Math.sqrt(-d)];const a=Math.pow(s/2,2)+Math.pow(d/3,3);if(0===a)return[Math.pow(s/2,.5)-e/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-e/3];const E=Math.sqrt(Math.pow(-d/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-d/3,3)))),p=2*Math.pow(E,1/3);return[p*Math.cos(w/3)-e/3,p*Math.cos((w+2*Math.PI)/3)-e/3,p*Math.cos((w+4*Math.PI)/3)-e/3]}},8607:(y,h,r)=>{r.d(h,{i:()=>f});const f=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},9295:(y,h,r)=>{r.r(h),r.d(h,{startFocusVisible:()=>i});const f="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=n=>{let o=[],e=!0;const t=n?n.shadowRoot:document,u=n||document.body,d=M=>{o.forEach(g=>g.classList.remove(f)),M.forEach(g=>g.classList.add(f)),o=M},s=()=>{e=!1,d([])},a=M=>{e=c.includes(M.key),e||d([])},E=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));d(g)}},w=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",E),t.addEventListener("focusout",w),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",E),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:d}}},6068:(y,h,r)=>{r.d(h,{c:()=>l});var f=r(7860);const l=o=>{const e=o;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||c(e),s=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,f.h)(e);t=!0===e.legacy||!d&&!s&&null!==a}return t}}},c=o=>!!(i.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||n.includes(o.tagName)&&""!==o.textContent),i=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},2775:(y,h,r)=>{r.d(h,{I:()=>l,a:()=>e,b:()=>t,c:()=>o,d:()=>d,h:()=>u});var f=r(9102),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const i={getEngine(){const s=window.TapticEngine;if(s)return s;const a=(0,f.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,f.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(s){const a=this.getEngine();if(!a)return;const E=this.isCapacitor()?s.style:s.style.toLowerCase();a.impact({style:E})},notification(s){const a=this.getEngine();if(!a)return;const E=this.isCapacitor()?s.type:s.type.toLowerCase();a.notification({type:E})},selection(){const s=this.isCapacitor()?l.Light:"light";this.impact({style:s})},selectionStart(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionStart():s.gestureSelectionStart())},selectionChanged(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionChanged():s.gestureSelectionChanged())},selectionEnd(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionEnd():s.gestureSelectionEnd())}},n=()=>i.available(),o=()=>{n()&&i.selection()},e=()=>{n()&&i.selectionStart()},t=()=>{n()&&i.selectionChanged()},u=()=>{n()&&i.selectionEnd()},d=s=>{n()&&i.impact(s)}},9507:(y,h,r)=>{r.d(h,{I:()=>o,a:()=>d,b:()=>n,c:()=>E,d:()=>p,f:()=>s,g:()=>u,i:()=>t,p:()=>w,r:()=>M,s:()=>a});var f=r(7791),l=r(7860),c=r(577);const n="ion-content",o=".ion-content-scroll-host",e=`${n}, ${o}`,t=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,f.Z)(function*(_){return t(_)?(yield new Promise(m=>(0,l.c)(_,m)),_.getScrollElement()):_});return function(m){return g.apply(this,arguments)}}(),d=g=>g.querySelector(o)||g.querySelector(e),s=g=>g.closest(e),a=(g,_)=>t(g)?g.scrollToTop(_):Promise.resolve(g.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),E=(g,_,m,O)=>t(g)?g.scrollByPoint(_,m,O):Promise.resolve(g.scrollBy({top:m,left:_,behavior:O>0?"smooth":"auto"})),w=g=>(0,c.b)(g,n),p=g=>{if(t(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},M=(g,_)=>{t(g)?g.scrollY=_:g.style.removeProperty("overflow")}},6891:(y,h,r)=>{r.d(h,{a:()=>f,b:()=>E,c:()=>e,d:()=>w,e:()=>D,f:()=>o,g:()=>p,h:()=>c,i:()=>l,j:()=>O,k:()=>C,l:()=>t,m:()=>s,n:()=>M,o:()=>d,p:()=>n,q:()=>i,r:()=>m,s:()=>v,t:()=>a,u:()=>g,v:()=>_,w:()=>u});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},7982:(y,h,r)=>{r.d(h,{c:()=>i,g:()=>n});var f=r(2593),l=r(7860),c=r(577);const i=(e,t,u)=>{let d,s;if(void 0!==f.w&&"MutationObserver"in f.w){const p=Array.isArray(t)?t:[t];d=new MutationObserver(M=>{for(const g of M)for(const _ of g.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&p.includes(_.slot))return u(),void(0,l.r)(()=>a(_))}),d.observe(e,{childList:!0})}const a=p=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(g=>{u();for(const _ of g)for(const m of _.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&w()}),s.observe(null!==(M=p.parentElement)&&void 0!==M?M:p,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),w()}}},n=(e,t,u)=>{const d=null==e?0:e.toString().length,s=o(d,t);if(void 0===u)return s;try{return u(d,t)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),s}},o=(e,t)=>`${e} / ${t}`},1860:(y,h,r)=>{r.r(h),r.d(h,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>p,keyboardDidResize:()=>M,resetKeyboardAssist:()=>d,setKeyboardClose:()=>w,setKeyboardOpen:()=>E,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var f=r(3199);r(9102),r(2593);const i="ionKeyboardDidShow",n="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},s=v=>{if(f.K.getEngine())a(v);else{if(!v.visualViewport)return;t=C(v.visualViewport),v.visualViewport.onresize=()=>{O(v),p()||M(v)?E(v):g(v)&&w(v)}}},a=v=>{v.addEventListener("keyboardDidShow",D=>E(v,D)),v.addEventListener("keyboardDidHide",()=>w(v))},E=(v,D)=>{_(v,D),u=!0},w=v=>{m(v),u=!1},p=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=v=>u&&!g(v),g=v=>u&&t.height===v.innerHeight,_=(v,D)=>{const L=new CustomEvent(i,{detail:{keyboardHeight:D?D.keyboardHeight:v.innerHeight-t.height}});v.dispatchEvent(L)},m=v=>{const D=new CustomEvent(n);v.dispatchEvent(D)},O=v=>{e=Object.assign({},t),t=C(v.visualViewport)},C=v=>({width:Math.round(v.width),height:Math.round(v.height),offsetTop:v.offsetTop,offsetLeft:v.offsetLeft,pageTop:v.pageTop,pageLeft:v.pageLeft,scale:v.scale})},3199:(y,h,r)=>{r.d(h,{K:()=>i,a:()=>c});var f=r(9102),l=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(l||{}),c=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(c||{});const i={getEngine(){const n=(0,f.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},2316:(y,h,r)=>{r.d(h,{c:()=>o});var f=r(7791),l=r(2593),c=r(3199);const i=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},n=e=>{const t=i(e);return null===t?0:t.clientHeight},o=function(){var e=(0,f.Z)(function*(t){let u,d,s,a;const E=function(){var _=(0,f.Z)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;u=()=>{void 0===a&&(a=n(O)),s=!0,w(s,O)},d=()=>{s=!1,w(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",d)});return function(){return _.apply(this,arguments)}}(),w=(_,m)=>{t&&t(_,p(m))},p=_=>{if(0===a||a===n(_))return;const m=i(_);return null!==m?new Promise(O=>{const v=new ResizeObserver(()=>{m.clientHeight===a&&(v.disconnect(),O())});v.observe(m)}):void 0};return yield E(),{init:E,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>s}});return function(u){return e.apply(this,arguments)}}()},5342:(y,h,r)=>{r.d(h,{c:()=>l});var f=r(7791);const l=()=>{let c;return{lock:function(){var n=(0,f.Z)(function*(){const o=c;let e;return c=new Promise(t=>e=t),void 0!==o&&(yield o),e});return function(){return n.apply(this,arguments)}}()}}},6394:(y,h,r)=>{r.d(h,{c:()=>c});var f=r(2593),l=r(7860);const c=(i,n,o)=>{let e;const t=()=>!(void 0===n()||void 0!==i.label||null===o()),d=()=>{const a=n();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const E=o().scrollWidth;if(0===E&&null===a.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==e)return;const w=e=new IntersectionObserver(p=>{1===p[0].intersectionRatio&&(d(),w.disconnect(),e=void 0)},{threshold:.01,root:i});w.observe(a)}else a.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},3430:(y,h,r)=>{r.d(h,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,i,n)=>{const o=c*i/n-c+"ms",e=2*Math.PI*i/n;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(c,i,n)=>{const o=i/n,e=c*o-c+"ms",t=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,i,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*i+(i<n/2?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,i,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":c*i/n-c+"ms"}})}}},678:(y,h,r)=>{r.r(h),r.d(h,{createSwipeBackGesture:()=>n});var f=r(7860),l=r(8607),c=r(7845);r(3525);const n=(o,e,t,u,d)=>{const s=o.ownerDocument.defaultView;let a=(0,l.i)(o);const w=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(o),(m=>{const{startX:C}=m;return a?C>=s.innerWidth-50:C<=50})(m)&&e()),onStart:t,onMove:m=>{const C=w(m)/s.innerWidth;u(C)},onEnd:m=>{const O=w(m),C=s.innerWidth,v=O/C,D=(m=>a?-m.velocityX:m.velocityX)(m),L=D>=0&&(D>.2||O>C/2),b=(L?1-v:v)*C;let A=0;if(b>5){const T=b/Math.abs(D);A=Math.min(T,540)}d(L,v<=0?.01:(0,f.l)(0,v,.9999),A)}})}},516:(y,h,r)=>{r.d(h,{w:()=>f});const f=(i,n,o)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{o(l(t,n))});return e.observe(i,{childList:!0,subtree:!0}),e},l=(i,n)=>{let o;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)o=c(e.addedNodes[t],n)||o}),o},c=(i,n)=>{if(1!==i.nodeType)return;const o=i;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(t=>t.value===o.value)}},4977:(y,h,r)=>{r.d(h,{e:()=>n});var f=r(2228),l=r(557),c=r(8521),i=r(2687);let n=(()=>{var o;class e{}return(o=e).\u0275fac=function(u){return new(u||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[f.ez,l.u5,c.Pc]}),e})()}}]);