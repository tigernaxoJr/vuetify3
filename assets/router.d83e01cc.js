import{V as F,g as se,l as B,W as ke,s as xe,p as b,c,j as f,q as o,X as q,N as $e,y as Le,T as ie,r as k,D,L as Te,M as Ee,B as G,F as Re,G as oe,C as ze,Y as x,Z as P,_ as le,$ as K,U as Z,I as Ne,m as ue,a0 as Be,n as ce,a1 as Pe,t as de,h as Ie,a2 as Ve,a3 as J,u as ve,x as Oe,a4 as He,a5 as Q}from"./index.d8bb139e.js";const We=["top","bottom"],De=["start","end","left","right"];function je(e,t){let[n,a]=e.split(" ");return a||(a=F(We,n)?"start":F(De,n)?"top":"center"),{side:ee(n,t),align:ee(a,t)}}function ee(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function M(e){const t=se("useRender");t.render=e}const gt=B(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:r,root:i,scoped:u}=ke(e);return xe(a,{reset:r,root:i,scoped:u,disabled:s}),()=>{var d;return(d=n.default)==null?void 0:d.call(n)}}});const Me=b({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ae(e){return{dimensionStyles:c(()=>({height:f(e.height),maxHeight:f(e.maxHeight),maxWidth:f(e.maxWidth),minHeight:f(e.minHeight),minWidth:f(e.minWidth),width:f(e.width)}))}}function Fe(e){return{aspectStyles:c(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Xe=B()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Me()},setup(e,t){let{slots:n}=t;const{aspectStyles:a}=Fe(e),{dimensionStyles:s}=Ae(e);return M(()=>{var r;return o("div",{class:"v-responsive",style:s.value},[o("div",{class:"v-responsive__sizer",style:a.value},null),(r=n.additional)==null?void 0:r.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function Ye(e,t){if(!q)return;const n=t.modifiers||{},a=t.value,{handler:s,options:r}=typeof a=="object"?a:{handler:a,options:{}},i=new IntersectionObserver(function(){var g;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const v=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!v)return;const m=u.some(p=>p.isIntersecting);s&&(!n.quiet||v.init)&&(!n.once||m||v.init)&&s(m,u,d),m&&n.once?me(e,t):v.init=!0},r);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function me(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const qe={mounted:Ye,unmounted:me},Ue=qe,Ge=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,t)=>{let{slots:n}=t;const{transition:a,...s}=e,{component:r=ie,...i}=typeof a=="object"?a:{};return $e(r,Le(typeof a=="string"?{name:a}:i,s),n)},ht=B()({name:"VImg",directives:{intersect:Ue},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Ge()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const s=k(""),r=k(),i=k(e.eager?"loading":"idle"),u=k(),d=k(),v=c(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=c(()=>v.value.aspect||u.value/d.value||0);D(()=>e.src,()=>{g(i.value!=="idle")}),D(m,(l,h)=>{!l&&h&&r.value&&w(r.value)}),Te(()=>g());function g(l){if(!(e.eager&&l)&&!(q&&!l&&!e.eager)){if(i.value="loading",v.value.lazySrc){const h=new Image;h.src=v.value.lazySrc,w(h,null)}!v.value.src||Ee(()=>{var h,S;if(n("loadstart",((h=r.value)==null?void 0:h.currentSrc)||v.value.src),(S=r.value)!=null&&S.complete){if(r.value.naturalWidth||y(),i.value==="error")return;m.value||w(r.value,null),p()}else m.value||w(r.value),$()})}}function p(){var l;$(),i.value="loaded",n("load",((l=r.value)==null?void 0:l.currentSrc)||v.value.src)}function y(){var l;i.value="error",n("error",((l=r.value)==null?void 0:l.currentSrc)||v.value.src)}function $(){const l=r.value;l&&(s.value=l.currentSrc||l.src)}let I=-1;function w(l){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{clearTimeout(I);const{naturalHeight:T,naturalWidth:H}=l;T||H?(u.value=H,d.value=T):!l.complete&&i.value==="loading"&&h!=null?I=window.setTimeout(S,h):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,d.value=1)};S()}const C=c(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),E=()=>{var S;if(!v.value.src||i.value==="idle")return null;const l=o("img",{class:["v-img__img",C.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:p,onError:y},null),h=(S=a.sources)==null?void 0:S.call(a);return o(W,{transition:e.transition,appear:!0},{default:()=>[G(h?o("picture",{class:"v-img__picture"},[h,l]):l,[[ze,i.value==="loaded"]])]})},R=()=>o(W,{transition:e.transition},{default:()=>[v.value.lazySrc&&i.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",C.value],src:v.value.lazySrc,alt:e.alt},null)]}),L=()=>a.placeholder?o(W,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,A=()=>a.error?o(W,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,V=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,O=k(!1);{const l=D(m,h=>{h&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{O.value=!0})}),l())})}return M(()=>G(o(Xe,{class:["v-img",{"v-img--booting":!O.value}],style:{width:f(e.width==="auto"?u.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>o(oe,null,[o(E,null,null),o(R,null,null),o(V,null,null),o(L,null,null),o(A,null,null)]),default:a.default}),[[Re("intersect"),{handler:g,options:e.options},null,{once:!0}]])),{currentSrc:s,image:r,state:i,naturalWidth:u,naturalHeight:d}}}),fe=b({tag:{type:String,default:"div"}},"tag"),pt=b({border:[Boolean,Number,String]},"border");function yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{borderClasses:c(()=>{const a=P(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`border-${r}`);return s})}}const bt=b({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function _t(e){return{elevationClasses:c(()=>{const n=P(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const Ke=b({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{roundedClasses:c(()=>{const a=P(e)?e.value:e.rounded,s=[];if(a===!0||a==="")s.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const r of String(a).split(" "))s.push(`rounded-${r}`);return s})}}function U(e){return le(()=>{const t=[],n={};return e.value.background&&(K(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(K(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function ge(e,t){const n=c(()=>({text:P(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=U(n);return{textColorClasses:a,textColorStyles:s}}function te(e,t){const n=c(()=>({background:P(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=U(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const Je=[null,"default","comfortable","compact"],St=b({density:{type:String,default:"default",validator:e=>Je.includes(e)}},"density");function Ct(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const Qe=["elevated","flat","tonal","outlined","text","plain"];function wt(e,t){return o(oe,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const kt=b({color:String,variant:{type:String,default:"elevated",validator:e=>Qe.includes(e)}},"variant");function xt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();const n=c(()=>{const{variant:r}=Z(e);return`${t}--variant-${r}`}),{colorClasses:a,colorStyles:s}=U(c(()=>{const{variant:r,color:i}=Z(e);return{[["elevated","flat"].includes(r)?"background":"text"]:i}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const et=["x-small","small","default","large","x-large"],tt=b({size:{type:[String,Number],default:"default"}},"size");function nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return le(()=>{let n,a;return F(et,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:f(e.size),height:f(e.size)}),{sizeClasses:n,sizeStyles:a}})}const at=b({color:String,start:Boolean,end:Boolean,icon:Ne,...tt(),...fe({tag:"i"}),...ue()},"v-icon"),$t=B()({name:"VIcon",props:at(),setup(e,t){let{attrs:n,slots:a}=t,s;a.default&&(s=c(()=>{var g,p;const m=(g=a.default)==null?void 0:g.call(a);if(!!m)return(p=m.filter(y=>y.type===Be&&y.children&&typeof y.children=="string")[0])==null?void 0:p.children}));const{themeClasses:r}=ce(e),{iconData:i}=Pe(s||e),{sizeClasses:u}=nt(e),{textColorClasses:d,textColorStyles:v}=ge(de(e,"color"));return M(()=>o(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,u.value,d.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[u.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},v.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a)]}})),{}}});function rt(e){const t=k(),n=k(!1);if(q){const a=new IntersectionObserver(s=>{e==null||e(s,a),n.value=!!s.find(r=>r.isIntersecting)});Ie(()=>{a.disconnect()}),D(t,(s,r)=>{r&&(a.unobserve(r),n.value=!1),s&&a.observe(s)},{flush:"post"})}return{intersectionRef:t,isIntersecting:n}}const X=Symbol("rippleStop"),st=80;function ne(e,t){e.style.transform=t,e.style.webkitTransform=t}function Y(e){return e.constructor.name==="TouchEvent"}function he(e){return e.constructor.name==="KeyboardEvent"}const it=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!he(e)){const p=t.getBoundingClientRect(),y=Y(e)?e.touches[e.touches.length-1]:e;a=y.clientX-p.left,s=y.clientY-p.top}let r=0,i=.3;(g=t._ripple)!=null&&g.circle?(i=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((a-r)**2+(s-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-r*2)/2}px`,d=`${(t.clientHeight-r*2)/2}px`,v=n.center?u:`${a-r}px`,m=n.center?d:`${s-r}px`;return{radius:r,scale:i,x:v,y:m,centerX:u,centerY:d}},j={show(e,t){var y;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((y=t==null?void 0:t._ripple)!=null&&y.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:r,scale:i,x:u,y:d,centerX:v,centerY:m}=it(e,t,n),g=`${r*2}px`;s.className="v-ripple__animation",s.style.width=g,s.style.height=g,t.appendChild(a);const p=window.getComputedStyle(t);p&&p.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ne(s,`translate(${u}, ${d}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ne(s,`translate(${v}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var r;if(!((r=e==null?void 0:e._ripple)!=null&&r.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=n.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function pe(e){return typeof e>"u"||!!e}function z(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[X])){if(e[X]=!0,Y(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||he(e),n._ripple.class&&(t.class=n._ripple.class),Y(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{j.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},st)}else j.show(e,n,t)}}function ae(e){e[X]=!0}function _(e){const t=e.currentTarget;if(!!(t!=null&&t._ripple)){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),j.hide(t)}}function ye(e){const t=e.currentTarget;!(t!=null&&t._ripple)||(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let N=!1;function be(e){!N&&(e.keyCode===J.enter||e.keyCode===J.space)&&(N=!0,z(e))}function _e(e){N=!1,_(e)}function Se(e){N&&(N=!1,_(e))}function Ce(e,t,n){var i;const{value:a,modifiers:s}=t,r=pe(a);if(r||j.hide(e),e._ripple=(i=e._ripple)!=null?i:{},e._ripple.enabled=r,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ve(a)&&a.class&&(e._ripple.class=a.class),r&&!n){if(s.stop){e.addEventListener("touchstart",ae,{passive:!0}),e.addEventListener("mousedown",ae);return}e.addEventListener("touchstart",z,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",ye,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",z),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",be),e.addEventListener("keyup",_e),e.addEventListener("blur",Se),e.addEventListener("dragstart",_,{passive:!0})}else!r&&n&&we(e)}function we(e){e.removeEventListener("mousedown",z),e.removeEventListener("touchstart",z),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",ye),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",be),e.removeEventListener("keyup",_e),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Se)}function ot(e,t){Ce(e,t,!1)}function lt(e){delete e._ripple,we(e)}function ut(e,t){if(t.value===t.oldValue)return;const n=pe(t.oldValue);Ce(e,t,n)}const Lt={mounted:ot,unmounted:lt,updated:ut};const re={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},ct=b({location:String},"location");function dt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=ve();return{locationStyles:c(()=>{if(!e.location)return{};const{side:r,align:i}=je(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function u(v){return n?n(v):0}const d={};return r!=="center"&&(t?d[re[r]]=`calc(100% - ${u(r)}px)`:d[r]=0),i!=="center"?t?d[re[i]]=`calc(100% - ${u(i)}px)`:d[i]=0:(r==="center"?d.top=d.left="50%":d[{top:"left",bottom:"left",left:"top",right:"top"}[r]]="50%",d.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[r]),d})}}const vt=B()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ct({location:"top"}),...Ke(),...fe(),...ue()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=Oe(e,"modelValue"),{isRtl:s}=ve(),{themeClasses:r}=ce(e),{locationStyles:i}=dt(e),{textColorClasses:u,textColorStyles:d}=ge(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:m}=te(c(()=>e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:p}=te(e,"color"),{roundedClasses:y}=Ze(e),{intersectionRef:$,isIntersecting:I}=rt(),w=c(()=>parseInt(e.max,10)),C=c(()=>parseInt(e.height,10)),E=c(()=>parseFloat(e.bufferValue)/w.value*100),R=c(()=>parseFloat(a.value)/w.value*100),L=c(()=>s.value!==e.reverse),A=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),V=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function O(l){if(!$.value)return;const{left:h,right:S,width:T}=$.value.getBoundingClientRect(),H=L.value?T-l.clientX+(S-T):l.clientX-h;a.value=Math.round(H/T*w.value)}return M(()=>o(e.tag,{ref:$,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&I.value,"v-progress-linear--reverse":L.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},y.value,r.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?f(C.value):0,"--v-progress-linear-height":f(C.value),...i.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:R.value,onClick:e.clickable&&O},{default:()=>[e.stream&&o("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...d.value,[L.value?"left":"right"]:f(-C.value),borderTop:`${f(C.value/2)} dotted`,opacity:V.value,top:`calc(50% - ${f(C.value/4)})`,width:f(100-E.value,"%"),"--v-progress-linear-stream-to":f(C.value*(L.value?1:-1))}},null),o("div",{class:["v-progress-linear__background",v.value],style:[m.value,{opacity:V.value,width:f(e.stream?E.value:100,"%")}]},null),o(ie,{name:A.value},{default:()=>[e.indeterminate?o("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(l=>o("div",{key:l,class:["v-progress-linear__indeterminate",l,g.value],style:p.value},null))]):o("div",{class:["v-progress-linear__determinate",g.value],style:[p.value,{width:f(R.value,"%")}]},null)]}),n.default&&o("div",{class:"v-progress-linear__content"},[n.default({value:R.value,buffer:E.value})])]})),{}}}),Tt=b({loading:[Boolean,String]},"loader");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function Rt(e,t){var a;let{slots:n}=t;return o("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||o(vt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const mt=["static","relative","fixed","absolute","sticky"],zt=b({position:{type:String,validator:e=>mt.includes(e)}},"position");function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function Bt(){var e,t;return(t=(e=se("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Pt(e,t){const n=He("RouterLink"),a=c(()=>!!(e.href||e.to)),s=c(()=>(a==null?void 0:a.value)||Q(t,"click")||Q(e,"click"));if(typeof n=="string")return{isLink:a,isClickable:s,href:de(e,"href")};const r=e.to?n.useLink(e):void 0;return{isLink:a,isClickable:s,route:r==null?void 0:r.route,navigate:r==null?void 0:r.navigate,isActive:r&&c(()=>{var i,u;return e.exact?(i=r.isExactActive)==null?void 0:i.value:(u=r.isActive)==null?void 0:u.value}),href:c(()=>e.to?r==null?void 0:r.route.value.href:e.href)}}const It=b({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");export{Tt as A,ct as B,zt as C,Et as D,dt as E,Nt as F,Xe as G,Ge as H,Ue as I,Rt as L,W as M,Lt as R,ht as V,pt as a,bt as b,Ke as c,te as d,yt as e,_t as f,Ze as g,gt as h,ge as i,St as j,Me as k,It as l,fe as m,kt as n,Pt as o,xt as p,Ct as q,Ae as r,wt as s,$t as t,M as u,Bt as v,ee as w,tt as x,nt as y,rt as z};
