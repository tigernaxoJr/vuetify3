import{a8 as P,f as C,X as _,a as r,Z as j,b as s,I as q,m as w,g as L,a9 as G,p as O,aa as H,t as J,c as u,r as $,W as K,o as Q,n as p,A as X,u as ee,T as te}from"./index.b66d120f.js";import{m as D,a as F,u as A,b as ae,d as T,c as ne}from"./color.74fb9670.js";const le=["top","bottom"],se=["start","end","left","right"];function oe(e,n){let[a,t]=e.split(" ");return t||(t=P(le,a)?"start":P(se,a)?"top":"center"),{side:R(a,n),align:R(t,n)}}function R(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}const re=[null,"default","comfortable","compact"],ye=C({density:{type:String,default:"default",validator:e=>re.includes(e)}},"density");function Ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return{densityClasses:r(()=>`${n}--density-${e.density}`)}}const ie=["x-small","small","default","large","x-large"],ue=C({size:{type:[String,Number],default:"default"}},"size");function ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return j(()=>{let a,t;return P(ie,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:s(e.size),height:s(e.size)}),{sizeClasses:a,sizeStyles:t}})}const de=C({color:String,start:Boolean,end:Boolean,icon:q,...ue(),...D({tag:"i"}),...w()},"v-icon"),Se=L()({name:"VIcon",props:de(),setup(e,n){let{attrs:a,slots:t}=n,i;t.default&&(i=r(()=>{var m,h;const g=(m=t.default)==null?void 0:m.call(t);if(!!g)return(h=g.filter(b=>b.type===G&&b.children&&typeof b.children=="string")[0])==null?void 0:h.children}));const{themeClasses:l}=O(e),{iconData:c}=H(i||e),{sizeClasses:d}=ce(e),{textColorClasses:o,textColorStyles:v}=F(J(e,"color"));return A(()=>u(c.value.component,{tag:e.tag,icon:c.value.icon,class:["v-icon","notranslate",l.value,d.value,o.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[d.value?void 0:{fontSize:s(e.size),height:s(e.size),width:s(e.size)},v.value],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>{var g;return[(g=t.default)==null?void 0:g.call(t)]}})),{}}});function ge(e){const n=$(),a=$(!1);if(K){const t=new IntersectionObserver(i=>{e==null||e(i,t),a.value=!!i.find(l=>l.isIntersecting)});Q(()=>{t.disconnect()}),p(n,(i,l)=>{l&&(t.unobserve(l),a.value=!1),i&&t.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const N={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},fe=C({location:String},"location");function ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=X();return{locationStyles:r(()=>{if(!e.location)return{};const{side:l,align:c}=oe(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function d(v){return a?a(v):0}const o={};return l!=="center"&&(n?o[N[l]]=`calc(100% - ${d(l)}px)`:o[l]=0),c!=="center"?n?o[N[c]]=`calc(100% - ${d(c)}px)`:o[c]=0:(l==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),o})}}const me=L()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...fe({location:"top"}),...ae(),...D(),...w()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=ee(e,"modelValue"),{isRtl:i}=X(),{themeClasses:l}=O(e),{locationStyles:c}=ve(e),{textColorClasses:d,textColorStyles:o}=F(e,"color"),{backgroundColorClasses:v,backgroundColorStyles:g}=T(r(()=>e.bgColor||e.color)),{backgroundColorClasses:m,backgroundColorStyles:h}=T(e,"color"),{roundedClasses:b}=ne(e),{intersectionRef:k,isIntersecting:M}=ge(),z=r(()=>parseInt(e.max,10)),f=r(()=>parseInt(e.height,10)),x=r(()=>parseFloat(e.bufferValue)/z.value*100),I=r(()=>parseFloat(t.value)/z.value*100),S=r(()=>i.value!==e.reverse),U=r(()=>e.indeterminate?"fade-transition":"slide-x-transition"),V=r(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function E(y){if(!k.value)return;const{left:Y,right:W,width:B}=k.value.getBoundingClientRect(),Z=S.value?B-y.clientX+(W-B):y.clientX-Y;t.value=Math.round(Z/B*z.value)}return A(()=>u(e.tag,{ref:k,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&M.value,"v-progress-linear--reverse":S.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},b.value,l.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?s(f.value):0,"--v-progress-linear-height":s(f.value),...c.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:I.value,onClick:e.clickable&&E},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",d.value],style:{...o.value,[S.value?"left":"right"]:s(-f.value),borderTop:`${s(f.value/2)} dotted`,opacity:V.value,top:`calc(50% - ${s(f.value/4)})`,width:s(100-x.value,"%"),"--v-progress-linear-stream-to":s(f.value*(S.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",v.value],style:[g.value,{opacity:V.value,width:s(e.stream?x.value:100,"%")}]},null),u(te,{name:U.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(y=>u("div",{key:y,class:["v-progress-linear__indeterminate",y,m.value],style:h.value},null))]):u("div",{class:["v-progress-linear__determinate",m.value],style:[h.value,{width:s(I.value,"%")}]},null)]}),a.default&&u("div",{class:"v-progress-linear__content"},[a.default({value:I.value,buffer:x.value})])]})),{}}}),ke=C({loading:[Boolean,String]},"loader");function ze(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:_();return{loaderClasses:r(()=>({[`${n}--loading`]:e.loading}))}}function xe(e,n){var t;let{slots:a}=n;return u("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||u(me,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}export{xe as L,Se as V,ue as a,ce as b,ge as c,ke as d,fe as e,ze as f,ve as g,ye as m,R as t,Ce as u};
