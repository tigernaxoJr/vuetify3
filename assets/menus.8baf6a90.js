import{f as N,i as q,a as c,r as w,J as L,b as C,h as Q,z as ee,j as ve,d as te,R as pe,S as fe,o as ge,U as ye,g as $,m as ae,p as oe,A as he,c as d,t as Z,x as be,l as Ie,V as Se,u as xe,s as Ce}from"./index.b66d120f.js";import{u as F,m as K,b as Be,d as Ee,c as Ve}from"./color.74fb9670.js";import{V as ke}from"./index.d49f1b45.js";import{m as we,b as Ae,u as Te,d as Pe,e as _e,V as X}from"./elevation.3ba1a7cc.js";import{u as Re}from"./resizeObserver.6b7dab1a.js";const D=Symbol.for("vuetify:layout"),ne=Symbol.for("vuetify:layout-item"),J=1e3,Le=N({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),$e=N({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Fe(){const e=q(D);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ze(e){var m;const o=q(D);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=(m=e.id)!=null?m:`layout-item-${ve()}`,a=Q("useLayoutItem");te(ne,{id:t});const n=w(!1);pe(()=>n.value=!0),fe(()=>n.value=!1);const{layoutItemStyles:u,layoutItemScrimStyles:i}=o.register(a,{...e,active:c(()=>n.value?!1:e.active.value),id:t});return ge(()=>o.unregister(t)),{layoutItemStyles:u,layoutRect:o.layoutRect,layoutItemScrimStyles:i}}const He=(e,o,t,a)=>{let n={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...n}}];for(const i of e){const m=o.get(i),p=t.get(i),f=a.get(i);if(!m||!p||!f)continue;const v={...n,[m.value]:parseInt(n[m.value],10)+(f.value?parseInt(p.value,10):0)};u.push({id:i,layer:v}),n=v}return u};function Me(e){const o=q(D,null),t=c(()=>o?o.rootZIndex.value-100:J),a=w([]),n=L(new Map),u=L(new Map),i=L(new Map),m=L(new Map),p=L(new Map),{resizeRef:f,contentRect:v}=Re(),S=c(()=>{var l;const s=new Map,g=(l=e.overlaps)!=null?l:[];for(const I of g.filter(r=>r.includes(":"))){const[r,h]=I.split(":");if(!a.value.includes(r)||!a.value.includes(h))continue;const V=n.get(r),P=n.get(h),_=u.get(r),H=u.get(h);!V||!P||!_||!H||(s.set(h,{position:V.value,amount:parseInt(_.value,10)}),s.set(r,{position:P.value,amount:-parseInt(H.value,10)}))}return s}),y=c(()=>{const s=[...new Set([...i.values()].map(l=>l.value))].sort((l,I)=>l-I),g=[];for(const l of s){const I=a.value.filter(r=>{var h;return((h=i.get(r))==null?void 0:h.value)===l});g.push(...I)}return He(g,n,u,m)}),B=c(()=>!Array.from(p.values()).some(s=>s.value)),E=c(()=>y.value[y.value.length-1].layer),z=c(()=>({"--v-layout-left":C(E.value.left),"--v-layout-right":C(E.value.right),"--v-layout-top":C(E.value.top),"--v-layout-bottom":C(E.value.bottom),...B.value?void 0:{transition:"none"}})),x=c(()=>y.value.slice(1).map((s,g)=>{let{id:l}=s;const{layer:I}=y.value[g],r=u.get(l),h=n.get(l);return{id:l,...I,size:Number(r.value),position:h.value}})),A=s=>x.value.find(g=>g.id===s),k=Q("createLayout"),T=w(!1);ee(()=>{T.value=!0}),te(D,{register:(s,g)=>{let{id:l,order:I,position:r,layoutSize:h,elementSize:V,active:P,disableTransitions:_,absolute:H}=g;i.set(l,I),n.set(l,r),u.set(l,h),m.set(l,P),_&&p.set(l,_);const Y=ye(ne,k==null?void 0:k.vnode).indexOf(s);Y>-1?a.value.splice(Y,0,l):a.value.push(l);const G=c(()=>x.value.findIndex(R=>R.id===l)),O=c(()=>t.value+y.value.length*2-G.value*2),ce=c(()=>{const R=r.value==="left"||r.value==="right",j=r.value==="right",me=r.value==="bottom",W={[r.value]:0,zIndex:O.value,transform:`translate${R?"X":"Y"}(${(P.value?0:-110)*(j||me?-1:1)}%)`,position:H.value||t.value!==J?"absolute":"fixed",...B.value?void 0:{transition:"none"}};if(!T.value)return W;const b=x.value[G.value];if(!b)throw new Error(`[Vuetify] Could not find layout item "${l}"`);const U=S.value.get(l);return U&&(b[U.position]+=U.amount),{...W,height:R?`calc(100% - ${b.top}px - ${b.bottom}px)`:V.value?`${V.value}px`:void 0,left:j?void 0:`${b.left}px`,right:j?`${b.right}px`:void 0,top:r.value!=="bottom"?`${b.top}px`:void 0,bottom:r.value!=="top"?`${b.bottom}px`:void 0,width:R?V.value?`${V.value}px`:void 0:`calc(100% - ${b.left}px - ${b.right}px)`}}),de=c(()=>({zIndex:O.value-1}));return{layoutItemStyles:ce,layoutItemScrimStyles:de,zIndex:O}},unregister:s=>{i.delete(s),n.delete(s),u.delete(s),m.delete(s),p.delete(s),a.value=a.value.filter(g=>g!==s)},mainRect:E,mainStyles:z,getLayoutItem:A,items:x,layoutRect:v,rootZIndex:t});const se=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),re=c(()=>({zIndex:t.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:se,layoutStyles:re,getLayoutItem:A,items:x,layoutRect:v,layoutRef:f}}const We=$()({name:"VApp",props:{...Le({fullHeight:!0}),...ae()},setup(e,o){let{slots:t}=o;const a=oe(e),{layoutClasses:n,layoutStyles:u,getLayoutItem:i,items:m,layoutRef:p}=Me(e),{rtlClasses:f}=he();return F(()=>{var v;return d("div",{ref:p,class:["v-application",a.themeClasses.value,n.value,f.value],style:u.value},[d("div",{class:"v-application__wrap"},[(v=t.default)==null?void 0:v.call(t)])])}),{getLayoutItem:i,items:m,theme:a}}});const De=N({text:String,...K()},"v-toolbar-title"),Ne=$()({name:"VToolbarTitle",props:De(),setup(e,o){let{slots:t}=o;return F(()=>{const a=!!(t.default||t.text||e.text);return d(e.tag,{class:"v-toolbar-title"},{default:()=>{var n;return[a&&d("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),Oe=[null,"prominent","default","comfortable","compact"],le=N({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Oe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...we(),...Ae(),...Be(),...K({tag:"header"}),...ae()},"v-toolbar"),M=$()({name:"VToolbar",props:le(),setup(e,o){var y;let{slots:t}=o;const{backgroundColorClasses:a,backgroundColorStyles:n}=Ee(Z(e,"color")),{borderClasses:u}=Te(e),{elevationClasses:i}=Pe(e),{roundedClasses:m}=Ve(e),{themeClasses:p}=oe(e),f=w(!!(e.extended||((y=t.extension)==null?void 0:y.call(t)))),v=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),S=c(()=>f.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return be({VBtn:{variant:"text"}}),F(()=>{var x;const B=!!(e.title||t.title),E=!!(t.image||e.image),z=(x=t.extension)==null?void 0:x.call(t);return f.value=!!(e.extended||z),d(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,u.value,i.value,m.value,p.value],style:[n.value]},{default:()=>[E&&d("div",{key:"image",class:"v-toolbar__image"},[t.image?d(X,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):d(_e,{key:"image-img",cover:!0,src:e.image},null)]),d(X,{defaults:{VTabs:{height:C(v.value)}}},{default:()=>{var A,k,T;return[d("div",{class:"v-toolbar__content",style:{height:C(v.value)}},[t.prepend&&d("div",{class:"v-toolbar__prepend"},[(A=t.prepend)==null?void 0:A.call(t)]),B&&d(Ne,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&d("div",{class:"v-toolbar__append"},[(T=t.append)==null?void 0:T.call(t)])])]}}),d(X,{defaults:{VTabs:{height:C(S.value)}}},{default:()=>[d(ke,null,{default:()=>[f.value&&d("div",{class:"v-toolbar__extension",style:{height:C(S.value)}},[z])]})]})]})}),{contentHeight:v,extensionHeight:S}}});function je(e){var o;return Ie(e,Object.keys((o=M==null?void 0:M.props)!=null?o:{}))}function ue(){const e=w(!1);return ee(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:c(()=>e.value?void 0:{transition:"none !important"}),isBooted:Se(e)}}const Je=$()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...le(),...$e(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const a=w(),n=xe(e,"modelValue"),u=c(()=>{var v,S,y,B;const p=(S=(v=a.value)==null?void 0:v.contentHeight)!=null?S:0,f=(B=(y=a.value)==null?void 0:y.extensionHeight)!=null?B:0;return p+f}),{ssrBootStyles:i}=ue(),{layoutItemStyles:m}=ze({id:e.name,order:c(()=>parseInt(e.order,10)),position:Z(e,"location"),layoutSize:u,elementSize:u,active:n,absolute:Z(e,"absolute")});return F(()=>{const[p]=je(e);return d(M,Ce({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...m.value,height:void 0,...i.value}},p),t)}),{}}});const Qe=$()({name:"VMain",props:{scrollable:Boolean,...K({tag:"main"})},setup(e,o){let{slots:t}=o;const{mainStyles:a}=Fe(),{ssrBootStyles:n}=ue();return F(()=>d(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[a.value,n.value]},{default:()=>{var u,i;return[e.scrollable?d("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Ue=[{id:"00",title:"\u9996\u9801",prependIcon:"mdi-home",to:"/"},{id:"0A",title:"\u641C\u5C0B",prependIcon:"mdi-home",to:"/Search"},{id:"01",title:"\u65E5\u5E38\u884C\u653F",prependIcon:""},{id:"013",parent:"01",title:"\u9662\u5167\u4FE1\u7BB1",prependIcon:"mdi-account-multiple-outline",href:"https://zimbra.ktgh.com.tw/",target:"_blank"},{id:"010",parent:"01",title:"\u8CC7\u8A0A\u5BA4\u73ED\u8868",prependIcon:"mdi-account-multiple-outline",href:"http://websvc.ktgh.com.tw:9005/HR/HraClassSch/Default.aspx",target:"_blank"},{id:"011",parent:"01",title:"\u55AE\u4F4D\u8981\u8655\u7406\u7684\u4E8B\u9805",prependIcon:"mdi-account-multiple-outline",to:{name:"AdminFrame",params:{url:"https://docs.google.com/spreadsheets/d/1XlOrY99H4iPuLlXtYpWrASM39UAHT4a3R8YZLv2bD0s"}}},{id:"012",parent:"01",title:"\u8EDF\u9AD4\u8AB2\u8981\u8655\u7406\u7684\u4E8B\u9805",prependIcon:"mdi-cog-outline",to:{name:"AdminFrame",params:{url:"https://docs.google.com/spreadsheets/d/1yF-Xl3q2-q92wKSx2vvkOCAwlNl4AP1sZGwjrRbj8lw"}}},{id:"014",parent:"01",title:"EIP1-server1",prependIcon:"mdi-account-multiple-outline",href:"http://apclu1.ktgh.com.tw:7777/Sec/Sec/StartSec.do",target:"_blank"},{id:"015",parent:"01",title:"EIP-server2",prependIcon:"mdi-account-multiple-outline",href:"http://apclu2.ktgh.com.tw:7777/Sec/Sec/StartSec.do",target:"_blank"},{id:"016",parent:"01",title:"\u6578\u4F4D\u5B78\u7FD2",prependIcon:"mdi-account-multiple-outline",href:"https://lms.ktgh.com.tw/",target:"_blank"},{id:"02",title:"\u5DE5\u5177",prependIcon:"",children:[{id:"021",title:"\u7B2C\u4E8C\u5C64\u76EE\u9304",prependIcon:"mdi-plus-outline",children:[{id:"0211",title:"\u7B2C\u4E09\u5C64\u7269\u4EF6",prependIcon:"mdi-plus-outline"},{id:"0212",title:"\u7B2C\u4E09\u5C64\u7269\u4EF6",prependIcon:"mdi-file-outline"},{id:"0213",title:"\u7B2C\u4E09\u5C64\u7269\u4EF6",prependIcon:"mdi-update"},{id:"0214",title:"\u7B2C\u4E09\u5C64\u7269\u4EF6",prependIcon:"mdi-delete",href:"https://google.com"}]},{id:"022",title:"ChatGPT",prependIcon:"mdi-file-outline",href:"https://chat.openai.com/chat",target:"_blank"},{id:"023",title:"\u7B2C\u4E8C\u5C64\u7269\u4EF6",prependIcon:"mdi-update"},{id:"024",title:"\u7B2C\u4E8C\u5C64\u7269\u4EF6",prependIcon:"mdi-delete",href:"https://google.com"}]},{id:"03",title:"\u7B2C\u4E00\u5C64\u7269\u4EF6",prependIcon:"mdi-delete",href:"https://google.com"}];function ie(e){const o=!e,t=Ue.filter(a=>o?!a.parent:a.parent===e.id);if(t.forEach(a=>ie(a)),o)return t;t.length>0&&(e.children?e.children.push(t):e.children=t)}const et=ie();export{We as V,ze as a,et as b,Ne as c,Je as d,Qe as e,$e as m,ue as u};
