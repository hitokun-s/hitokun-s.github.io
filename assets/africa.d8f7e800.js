import{l as j,E as F,F as k,r as i,o as L,b as x,d as e,e as a,n as z,w as l,h as c,t as u,x as m,G as h}from"./vendor.51a5f608.js";import{s as V,a as C,b as S,c as E,d as O,e as $,f as D,g as M,h as T,i as U,j as A,k as G,l as H}from"./chroma.3b8408f4.js";import{f as P}from"./browser-ponyfill.bea9ad7a.js";import{_ as W}from"./app.c17b7d26.js";var g={};j.add(F);const f={components:{LGeoJson:V,LMap:C,LIcon:S,LTileLayer:E,LMarker:O,LControl:$,LControlLayers:D,LTooltip:M,LPopup:T,LPolyline:U,LPolygon:A,LRectangle:G,FontAwesomeIcon:k},data(){return{zoom:2,iconWidth:25,iconHeight:40,geojson:null,options:{style:s=>({weight:2,color:"black",opacity:.5,fillColor:this.colorScale(s.properties[this.targetFeature]).name(),fillOpacity:.5}),onEachFeature:this.onEachFeatureFunction},focused:null,targetFeature:"gdp_md_est",active:!1}},async created(){const s={}.VITE_HOGE,n=await(await P(s+"/data/africa.geo.json")).json();this.geojson=n},mounted(){console.log("root",this.$refs)},computed:{features(){return this.geojson?this.geojson.features.map(s=>s.properties):[]},iconUrl(){return`https://placekitten.com/${this.iconWidth}/${this.iconHeight}`},iconSize(){return[this.iconWidth,this.iconHeight]},colorScale(){console.log("colorScale");const s=Math.min(...this.features.map(n=>n[this.targetFeature])),o=Math.max(...this.features.map(n=>n[this.targetFeature]));return H.exports.scale(["white","pink","red"]).domain([s,o])}},methods:{onEachFeatureFunction(s,o){o.on({mouseover:n=>{console.log(n.target.feature.properties.name),this.focused=n.target.feature;const p=n.target;console.log(p),p.setStyle({weight:5,color:"#666",dashArray:"",fillOpacity:.7})}}),o.bindTooltip("<div>code:"+s.properties.name+"</div>",{permanent:!1,sticky:!0})},log(s){console.log(s)}},watch:{targetFeature(s){for(const o in this.$refs.hoge.leafletObject._layers){const n=this.$refs.hoge.leafletObject._layers[o];n.setStyle({fillColor:this.colorScale(n.feature.properties[this.targetFeature]).name()})}}}},B=e("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},[e("div",{class:"dropdown-content"},[e("a",{href:"#",class:"dropdown-item"}," Dropdown item "),e("a",{class:"dropdown-item"}," Other dropdown item "),e("a",{href:"#",class:"dropdown-item is-active"}," Active dropdown item "),e("a",{href:"#",class:"dropdown-item"}," Other dropdown item "),e("hr",{class:"dropdown-divider"}),e("a",{href:"#",class:"dropdown-item"}," With a divider ")])],-1),I={class:"dropdown-trigger"},N=e("span",null,"Dropdown button",-1),R={class:"icon is-small"},J=e("br",null,null,-1),q=e("span",{style:{display:"block",width:"10vh",height:"20vh","background-image":"linear-gradient(to top, white, pink, red)"}},null,-1),K=c("\u4EBA\u53E3"),Q=c("GDP");function X(s,o,n,p,t,_){const v=i("font-awesome-icon"),w=i("l-tile-layer"),y=i("l-geo-json"),d=i("l-control"),b=i("l-map");return L(),x("div",null,[e("div",{class:z(["dropdown",{"is-active":t.active}]),style:{position:"absolute","z-index":"999"}},[B,e("div",I,[e("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:o[0]||(o[0]=r=>t.active=!t.active)},[N,e("span",R,[a(v,{icon:"angle-down"})])])])],2),a(b,{modelValue:t.zoom,"onUpdate:modelValue":o[3]||(o[3]=r=>t.zoom=r),zoom:t.zoom,"onUpdate:zoom":o[4]||(o[4]=r=>t.zoom=r),center:[47.41322,-1.219482],onMove:o[5]||(o[5]=r=>_.log("move")),style:{height:"100%",width:"100%"}},{default:l(()=>[a(w,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a(y,{geojson:t.geojson,options:t.options,ref:"hoge"},null,8,["geojson","options"]),a(d,{position:"topright",class:"bottom-right-pane"},{default:l(()=>{var r;return[c(" focused: "+u((r=t.focused)==null?void 0:r.properties.name),1),J,c(" "+u(t.targetFeature),1)]}),_:1}),a(d,{position:"bottomright",class:"bottom-right-pane"},{default:l(()=>[q]),_:1}),a(d,{position:"bottomleft",class:"bottom-right-pane"},{default:l(()=>[e("label",null,[m(e("input",{type:"radio","onUpdate:modelValue":o[1]||(o[1]=r=>t.targetFeature=r),value:"pop_est"},null,512),[[h,t.targetFeature]]),K]),e("label",null,[m(e("input",{type:"radio","onUpdate:modelValue":o[2]||(o[2]=r=>t.targetFeature=r),value:"gdp_md_est"},null,512),[[h,t.targetFeature]]),Q])]),_:1})]),_:1},8,["modelValue","zoom","center"])])}typeof g=="function"&&g(f);var to=W(f,[["render",X]]);export{to as default};
