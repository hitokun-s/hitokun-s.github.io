import{o as s,b as n,d as e,i as h,u as v,t as f,G as x,r as k,e as d,v as o,q as t,C as b,D as C,g,w as V,h as w}from"./vendor.470d6a70.js";import{u as y}from"./user.e0db4d34.js";const A={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},L=e("path",{d:"M21.677 14l-1.245-3.114A2.986 2.986 0 0 0 17.646 9h-4.092a3.002 3.002 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2z",fill:"currentColor"},null,-1),N=e("path",{d:"M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154l-1.898.632z",fill:"currentColor"},null,-1),$=e("path",{d:"M16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5A1.502 1.502 0 0 0 16.5 3z",fill:"currentColor"},null,-1),M=[L,N,$];function z(i,l){return s(),n("svg",A,M)}var B={name:"carbon-pedestrian",render:z};const j={class:"text-4xl"},D={class:"text-sm opacity-50"},E={key:0,class:"text-sm mt-4"},R={class:"opacity-75"},G=h({props:{name:null},setup(i){const l=i,_=v(),c=y(),{t:r}=f();return x(()=>{c.setNewName(l.name)}),(S,u)=>{const m=B,p=k("router-link");return s(),n("div",null,[e("p",j,[d(m,{class:"inline-block"})]),e("p",null,o(t(r)("intro.hi",{name:l.name})),1),e("p",D,[e("em",null,o(t(r)("intro.dynamic-route")),1)]),t(c).otherNames.length?(s(),n("p",E,[e("span",R,o(t(r)("intro.aka"))+":",1),e("ul",null,[(s(!0),n(b,null,C(t(c).otherNames,a=>(s(),n("li",{key:a},[d(p,{to:`/hi/${a}`,replace:""},{default:V(()=>[w(o(a),1)]),_:2},1032,["to"])]))),128))])])):g("",!0),e("div",null,[e("button",{class:"btn m-3 text-sm mt-6",onClick:u[0]||(u[0]=a=>t(_).back())},o(t(r)("button.back")),1)])])}}});export{G as default};
