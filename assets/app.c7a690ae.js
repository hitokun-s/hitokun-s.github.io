var L=Object.defineProperty,$=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=(e,t,o)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,E=(e,t)=>{for(var o in t||(t={}))I.call(t,o)&&y(e,o,t[o]);if(g)for(var o of g(t))R.call(t,o)&&y(e,o,t[o]);return e},j=(e,t)=>$(e,A(t));import{c as T,N as O,a as w,l as z,f as S,F as x,r as h,b as f,d as a,e as c,w as u,n as p,g as D,o as m,h as d,t as H,i as P,u as N,j as C,k as W,V as B}from"./vendor.51a5f608.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}};F();const M=Object.fromEntries(Object.entries({}).map(([e,t])=>{const o=e.endsWith(".yaml");return[e.slice(14,o?-5:-4),t.default]})),q=({app:e})=>{const t=T({legacy:!1,locale:"en",messages:M});e.use(t)};var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:q});const K=({isClient:e,router:t})=>{e&&(t.beforeEach(()=>{O.start()}),t.afterEach(()=>{O.done()}))};var J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:K});const Q=({isClient:e,initialState:t,app:o})=>{const s=w();o.use(s),e?s.state.value=t.pinia||{}:t.pinia=s.state.value};var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Q});const X="modulepreload",k={},Y="/",i=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${Y}${s}`,s in k)return;k[s]=!0;const n=s.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":X,n||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),n)return new Promise((_,b)=>{l.addEventListener("load",_),l.addEventListener("error",b)})})).then(()=>t())},Z=[{name:"about",path:"/about",component:()=>i(()=>import("./about.981977ec.js"),["assets/about.981977ec.js","assets/about.edea2646.css","assets/self.4bf87b4a.js","assets/self.4fc5169b.css","assets/vendor.51a5f608.js","assets/util.873c9cd3.js"]),props:!0,meta:{title:"Profile"}},{name:"about_old",path:"/about_old",component:()=>i(()=>import("./about_old.ac4c692f.js"),["assets/about_old.ac4c692f.js","assets/vendor.51a5f608.js"]),props:!0},{name:"hoge",path:"/hoge",component:()=>i(()=>import("./hoge.19749dfd.js"),["assets/hoge.19749dfd.js","assets/hoge.ef6e2d7f.css","assets/vendor.51a5f608.js"]),props:!0,meta:{wide:!0,fillScreen:!0}},{name:"Index",path:"/",component:()=>i(()=>import("./Index.8b71fb23.js"),["assets/Index.8b71fb23.js","assets/Index.4924d9c5.css","assets/self.4bf87b4a.js","assets/self.4fc5169b.css","assets/vendor.51a5f608.js"]),props:!0},{name:"index_old",path:"/index_old",component:()=>i(()=>import("./index_old.eb862ccb.js"),["assets/index_old.eb862ccb.js","assets/vendor.51a5f608.js","assets/user.8b039831.js"]),props:!0},{name:"README",path:"/readme",component:()=>i(()=>import("./README.a9453394.js"),["assets/README.a9453394.js","assets/vendor.51a5f608.js"]),props:!0},{name:"project",path:"/project",component:()=>i(()=>import("./index.0e638e80.js"),["assets/index.0e638e80.js","assets/vendor.51a5f608.js","assets/site.03a5ee6d.js","assets/util.873c9cd3.js"]),props:!0,meta:{title:"Projects"}},{name:"viz-africa",path:"/viz/africa",component:()=>i(()=>import("./africa.998975c2.js"),["assets/africa.998975c2.js","assets/africa.cfbb2f15.css","assets/vendor.51a5f608.js","assets/chroma.3b8408f4.js","assets/browser-ponyfill.bea9ad7a.js","assets/browser-ponyfill.60108a0a.css"]),props:!0,meta:{wide:!0,fillScreen:!0}},{name:"viz",path:"/viz",component:()=>i(()=>import("./index.c813d1b3.js"),["assets/index.c813d1b3.js","assets/vendor.51a5f608.js","assets/site.03a5ee6d.js","assets/util.873c9cd3.js"]),props:!0,meta:{title:"Visualizations"}},{name:"viz-japan-peninsula",path:"/viz/japan-peninsula",component:()=>i(()=>import("./japan-peninsula.18bd7506.js"),["assets/japan-peninsula.18bd7506.js","assets/japan-peninsula.3925ca78.css","assets/vendor.51a5f608.js","assets/chroma.3b8408f4.js","assets/browser-ponyfill.bea9ad7a.js","assets/browser-ponyfill.60108a0a.css","assets/util.873c9cd3.js"]),props:!0,meta:{wide:!0,fillScreen:!0,title:"\u65E5\u672C\u306E\u534A\u5CF6"}},{name:"viz-kyusyu-at-night",path:"/viz/kyusyu-at-night",component:()=>i(()=>import("./kyusyu-at-night.7dd047ef.js").then(function(e){return e.k}),["assets/kyusyu-at-night.7dd047ef.js","assets/kyusyu-at-night.c9a3f1dc.css","assets/vendor.51a5f608.js","assets/browser-ponyfill.bea9ad7a.js","assets/browser-ponyfill.60108a0a.css","assets/util.873c9cd3.js"]),props:!0,meta:{wide:!0,fillScreen:!0}},{name:"viz-memo",path:"/viz/memo",component:()=>i(()=>import("./memo.ed3add47.js"),["assets/memo.ed3add47.js","assets/vendor.51a5f608.js"]),props:!0},{name:"hi-name",path:"/hi/:name",component:()=>i(()=>import("./_name_.815a444b.js"),["assets/_name_.815a444b.js","assets/vendor.51a5f608.js","assets/user.8b039831.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>i(()=>import("./_...all_.d1216beb.js"),["assets/_...all_.d1216beb.js","assets/vendor.51a5f608.js"]),props:!0,meta:{layout:404}}];var v=(e,t)=>{const o=e.__vccOpts||e;for(const[s,n]of t)o[s]=n;return o};z.add(S);const ee={name:"Header",props:{title:String},components:{FontAwesomeIcon:x},data(){return{isOpen:!1}},mounted(){console.log(this.$route)},methods:{},computed:{path(){return this.$route.path}}},te={class:"navbar container is-desktop"},oe={class:"navbar-brand"},ne={class:"navbar-item"},se=a("span",{"aria-hidden":"true"},null,-1),re=a("span",{"aria-hidden":"true"},null,-1),ae=a("span",{"aria-hidden":"true"},null,-1),ie=[se,re,ae],le={key:0,class:"navbar-end"},_e={class:"navbar-item"},ce=d("About"),ue={class:"navbar-item"},de=d("Viz"),pe={class:"navbar-item"},me=d("Project"),he={class:"navbar-menu"},fe={class:"navbar-end tabs"},ve=d("About"),be=d("Viz"),ge=d("Project"),ye=a("li",null,[a("a",{href:"https://hitokun-s.github.io/old"},"Old")],-1);function Ee(e,t,o,s,n,r){const l=h("font-awesome-icon"),_=h("router-link");return m(),f("header",te,[a("div",oe,[a("span",ne,[c(_,{to:"/",class:"is-link navbar-item is-size-3 has-text-weight-bold has-text-primary"},{default:u(()=>[c(l,{icon:"home"}),d(" Hitokun's "+H(o.title),1)]),_:1})]),a("a",{role:"button",class:p(["navbar-burger burger",{"is-active":n.isOpen}]),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:t[0]||(t[0]=b=>n.isOpen=!n.isOpen)},ie,2)]),n.isOpen?(m(),f("div",le,[a("div",_e,[c(_,{to:"/about"},{default:u(()=>[ce]),_:1})]),a("div",ue,[c(_,{to:"/viz"},{default:u(()=>[de]),_:1})]),a("div",pe,[c(_,{to:"/project"},{default:u(()=>[me]),_:1})])])):D("",!0),a("div",he,[a("div",fe,[a("ul",null,[a("li",{class:p({"is-active":r.path=="/about"})},[c(_,{to:"/about"},{default:u(()=>[ve]),_:1})],2),a("li",{class:p({"is-active":r.path=="/viz"})},[c(_,{to:"/viz"},{default:u(()=>[be]),_:1})],2),a("li",{class:p({"is-active":r.path=="/project"})},[c(_,{to:"/project"},{default:u(()=>[ge]),_:1})],2),ye])])])])}var V=v(ee,[["render",Ee]]);const je={},Oe={class:"footer has-background-primary has-text-white"},Pe=a("div",{class:"content has-text-centered"}," (c) 2020 Hitoshi Wada ",-1),ke=[Pe];function Ve(e,t,o,s,n,r){return m(),f("footer",Oe,ke)}var Le=v(je,[["render",Ve]]);const $e=P({components:{Header:V,Footer:Le},data(){const e=N().currentRoute.value.meta;return{isWide:e&&e.wide,fillScreen:e&&e.fillScreen,title:(e==null?void 0:e.title)||""}},metaInfo(){return{titleTemplate:"%s - Hitokun's",meta:[{property:"og:locale",content:"en_EN"},{name:"author",content:"Toshi"}]}},watch:{$route(e,t){const o=this.$router.currentRoute.value.meta;this.isWide=o&&o.wide,this.fillScreen=o&&o.fillScreen,this.title=(o==null?void 0:o.title)||""}}});function Ae(e,t,o,s,n,r){const l=V,_=h("router-view");return m(),f("main",null,[c(l,{title:e.title},null,8,["title"]),c(_,{class:p({"is-desktop":!e.isWide,container:!e.isWide,"fill-screen":e.fillScreen})},null,8,["class"])])}var Ie=v($e,[["render",Ae]]);const Re={"404":()=>i(()=>import("./404.7f81a90a.js"),["assets/404.7f81a90a.js","assets/vendor.51a5f608.js"]),default:Ie,hhh:()=>i(()=>import("./hhh.7a37badb.js"),["assets/hhh.7a37badb.js","assets/hhh.ade0a6d7.css","assets/vendor.51a5f608.js"])};function Te(e){return e.map(t=>{var o;return{path:t.path,component:Re[((o=t.meta)==null?void 0:o.layout)||"default"],children:[j(E({},t),{path:""})]}})}const we=P({setup(e){return C({title:"Hitokun's",meta:[{name:"description",content:"Hitokun's Homepage"},{property:"og:locale",content:"en_EN"},{name:"author",content:"Hitoshi Wada"},{key:"og:type",property:"og:type",content:"website"}]}),(t,o)=>{const s=h("router-view");return m(),W(s)}}});const ze=Te(Z);B(we,{routes:ze},e=>{Object.values({"./modules/i18n.ts":G,"./modules/nprogress.ts":J,"./modules/pinia.ts":U}).map(t=>{var o;return(o=t.install)==null?void 0:o.call(t,e)})});export{v as _,i as a};