import{j as d,o,b as a,d as s,C as n,D as l,t as c}from"./vendor.90d189c3.js";import{s as _}from"./site.39b1afcb.js";import{m as h}from"./util.873c9cd3.js";import{_ as m}from"./app.cd1ae9c4.js";var i={};const r={name:"List",data:()=>({sites:_.filter(e=>e.path.includes("@art"))}),created(){d(h(this,{title:"Hitokun's Arts",description:"Hitokun's Arts"}))},components:{},computed:{}},p={class:"hero-body"},u={class:"container"},f={class:"columns is-multiline"},v={class:"column is-one-quarter-desktop is-half-tablet"},g=["href"],b={class:"card"},k={class:"card-image"},j={class:"image is-4by3"},y=["src"],$={class:"card-header"},x={class:"card-header-title"},B={class:"card-content"},H={class:"content"};function A(e,D,L,q,C,E){return o(),a("div",p,[s("div",u,[s("div",f,[(o(!0),a(n,null,l(e.sites,t=>(o(),a("div",v,[s("a",{href:t.path},[s("div",b,[s("div",k,[s("figure",j,[s("img",{src:t.image,alt:"Placeholder image"},null,8,y)])]),s("header",$,[s("p",x,c(t.title),1)]),s("div",B,[s("div",H,c(t.description),1)])])],8,g)]))),256))])])])}typeof i=="function"&&i(r);var S=m(r,[["render",A]]);export{S as default};