import{g as i,ab as d,ac as f,H as V,f as y,I as k,m as C,p as P,c as o}from"./index.a3755b2d.js";import{a as S,b as h,g as p}from"./router.cb70d26d.js";import{m as z,a as b,u as A,b as I,V as R}from"./loader.c67ac9cb.js";import{b as T,m as B,c as D,u as F}from"./color.b4245d98.js";import{e as _}from"./elevation.daccba6e.js";function q(a){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",e=arguments.length>2?arguments[2]:void 0;return i()({name:e!=null?e:d(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:n}},setup(r,l){let{slots:t}=l;return()=>{var s;return V(r.tag,{class:a},(s=t.default)==null?void 0:s.call(t))}}})}const x=y({start:Boolean,end:Boolean,icon:k,image:String,...z(),...T(),...b(),...B(),...C(),...S({variant:"flat"})},"v-avatar"),w=i()({name:"VAvatar",props:x(),setup(a,n){let{slots:e}=n;const{themeClasses:r}=P(a),{colorClasses:l,colorStyles:t,variantClasses:s}=h(a),{densityClasses:m}=A(a),{roundedClasses:c}=D(a),{sizeClasses:v,sizeStyles:g}=I(a);return F(()=>o(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},r.value,l.value,m.value,c.value,v.value,s.value],style:[t.value,g.value]},{default:()=>{var u;return[a.image?o(_,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?o(R,{key:"icon",icon:a.icon},null):(u=e.default)==null?void 0:u.call(e),p(!1,"v-avatar")]}})),{}}});export{w as V,q as c};