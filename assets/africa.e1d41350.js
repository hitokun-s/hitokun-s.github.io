import{l as j,E as F,F as k,r as a,o as L,b as x,d as e,e as i,n as z,w as l,h as c,t as u,x as m,G as h}from"./vendor.51a5f608.js";import{s as C,a as S,b as V,c as $,d as D,e as M,f as O,g as E,h as U,i as A,j as P,k as T,l as W}from"./chroma.3b8408f4.js";import{f as B}from"./browser-ponyfill.bea9ad7a.js";import{_ as G}from"./app.145951f5.js";var g={};j.add(F);const f={components:{LGeoJson:C,LMap:S,LIcon:V,LTileLayer:$,LMarker:D,LControl:M,LControlLayers:O,LTooltip:E,LPopup:U,LPolyline:A,LPolygon:P,LRectangle:T,FontAwesomeIcon:k},data(){return{zoom:2,iconWidth:25,iconHeight:40,geojson:null,options:{style:n=>({weight:2,color:"black",opacity:.5,fillColor:this.colorScale(n.properties[this.targetFeature]).name(),fillOpacity:.5}),onEachFeature:this.onEachFeatureFunction},focused:null,targetFeature:"gdp_md_est",active:!1}},async created(){const s=await(await B("https://hitokun-s.github.io"+"/data/africa.geo.json")).json();this.geojson=s},mounted(){console.log("root",this.$refs)},computed:{features(){return this.geojson?this.geojson.features.map(n=>n.properties):[]},iconUrl(){return`https://placekitten.com/${this.iconWidth}/${this.iconHeight}`},iconSize(){return[this.iconWidth,this.iconHeight]},colorScale(){console.log("colorScale");const n=Math.min(...this.features.map(s=>s[this.targetFeature])),o=Math.max(...this.features.map(s=>s[this.targetFeature]));return W.exports.scale(["white","pink","red"]).domain([n,o])}},methods:{onEachFeatureFunction(n,o){o.on({mouseover:s=>{console.log(s.target.feature.properties.name),this.focused=s.target.feature;const p=s.target;console.log(p),p.setStyle({weight:5,color:"#666",dashArray:"",fillOpacity:.7})}}),o.bindTooltip("<div>code:"+n.properties.name+"</div>",{permanent:!1,sticky:!0})},log(n){console.log(n)}},watch:{targetFeature(n){for(const o in this.$refs.hoge.leafletObject._layers){const s=this.$refs.hoge.leafletObject._layers[o];s.setStyle({fillColor:this.colorScale(s.feature.properties[this.targetFeature]).name()})}}}},H=e("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},[e("div",{class:"dropdown-content"},[e("a",{href:"#",class:"dropdown-item"}," Dropdown item "),e("a",{class:"dropdown-item"}," Other dropdown item "),e("a",{href:"#",class:"dropdown-item is-active"}," Active dropdown item "),e("a",{href:"#",class:"dropdown-item"}," Other dropdown item "),e("hr",{class:"dropdown-divider"}),e("a",{href:"#",class:"dropdown-item"}," With a divider ")])],-1),N={class:"dropdown-trigger"},I=e("span",null,"Dropdown button",-1),R={class:"icon is-small"},J=e("br",null,null,-1),q=e("span",{style:{display:"block",width:"10vh",height:"20vh","background-image":"linear-gradient(to top, white, pink, red)"}},null,-1),K=c("\u4EBA\u53E3"),Q=c("GDP");function X(n,o,s,p,t,_){const v=a("font-awesome-icon"),w=a("l-tile-layer"),y=a("l-geo-json"),d=a("l-control"),b=a("l-map");return L(),x("div",null,[e("div",{class:z(["dropdown",{"is-active":t.active}]),style:{position:"absolute","z-index":"999"}},[H,e("div",N,[e("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:o[0]||(o[0]=r=>t.active=!t.active)},[I,e("span",R,[i(v,{icon:"angle-down"})])])])],2),i(b,{modelValue:t.zoom,"onUpdate:modelValue":o[3]||(o[3]=r=>t.zoom=r),zoom:t.zoom,"onUpdate:zoom":o[4]||(o[4]=r=>t.zoom=r),center:[47.41322,-1.219482],onMove:o[5]||(o[5]=r=>_.log("move")),style:{height:"100%",width:"100%"}},{default:l(()=>[i(w,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),i(y,{geojson:t.geojson,options:t.options,ref:"hoge"},null,8,["geojson","options"]),i(d,{position:"topright",class:"bottom-right-pane"},{default:l(()=>{var r;return[c(" focused: "+u((r=t.focused)==null?void 0:r.properties.name),1),J,c(" "+u(t.targetFeature),1)]}),_:1}),i(d,{position:"bottomright",class:"bottom-right-pane"},{default:l(()=>[q]),_:1}),i(d,{position:"bottomleft",class:"bottom-right-pane"},{default:l(()=>[e("label",null,[m(e("input",{type:"radio","onUpdate:modelValue":o[1]||(o[1]=r=>t.targetFeature=r),value:"pop_est"},null,512),[[h,t.targetFeature]]),K]),e("label",null,[m(e("input",{type:"radio","onUpdate:modelValue":o[2]||(o[2]=r=>t.targetFeature=r),value:"gdp_md_est"},null,512),[[h,t.targetFeature]]),Q])]),_:1})]),_:1},8,["modelValue","zoom","center"])])}typeof g=="function"&&g(f);var to=G(f,[["render",X]]);export{to as default};
