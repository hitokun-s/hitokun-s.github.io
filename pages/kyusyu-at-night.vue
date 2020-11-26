<template>
  <div class='mapPane'>
    <!--マップ表示-->
    <div id='map'></div>
  </div>
</template>

<script>

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import Vue from 'vue'
// import 'geotiff/dist-browser/geotiff.js'
// import 'plotty'
import 'leaflet-geotiff'
import 'leaflet-geotiff/leaflet-geotiff-plotty'
// Vue.use(LoadScript);

import 'plotty';
import GeoTIFF from 'geotiff';
// import 'geotiff-layer-leaflet/dist/geotiff-layer-leaflet';
// import 'geotiff-layer-leaflet/src/geotiff-layer-leaflet-plotty';
// import 'geotiff-layer-leaflet/src/geotiff-layer-leaflet-vector-arrows';

var parse_georaster = require("georaster");
var GeoRasterLayer = require("georaster-layer-for-leaflet");


// デフォルトマーカーアイコン設定
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default {
  name: 'MapPane',
  mounted: function () {
    // マップオブジェクト生成
    this.mapCreate();
  },
  methods: {
    // マップオブジェクト生成
    mapCreate: function() {

      // const url = 'https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png'
      const url = 'https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGl0b2t1biIsImEiOiJjaXVqYnd0NXUwMGRwMm9tc3RvcGZ1ZDZ5In0.Q4wyiiGDLH_lTi3zzFcAtA'


      const m_mono = new L.tileLayer(url, {
        attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
      });

      //MAP読み込み
      const map = L.map('map', {
        center: [32.648625, 130.759277],
        zoom: 11,
        zoomControl: true,
        layers: [m_mono]
      });

      fetch("./data/kyusyu4326.tif")
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        parse_georaster(arrayBuffer).then(georaster => {
          var layer = new GeoRasterLayer({
            georaster: georaster,
            opacity: 0.3,
            resolution: 200 // optional parameter for adjusting display resolution
          });
          layer.addTo(map);
        })
      })
    }
  }
}



//import * as d3Scale from "d3-scale-chromatic"
//import * as d3 from "d3"
//import * as d3legend from "d3-legend"
//// import {Map, LatLng, GeoJSON} from "leaflet-headless"
//import * as L from 'leaflet'
//import * as _ from 'lodash'



</script>

<style lang="scss">
//#map{
//  /*width: 100%;*/
//  height: 900px;
//  margin-bottom: 10px;
//}
#map {
  z-index: 0;
  height: 800px;
  text-align: left;
}
.leaflet-pane{
  height: 100%;
}
svg path{
  stroke:#fff;
  stroke-width: 1px;
}
svg text{
  text-anchor: middle;
  dominant-baseline: middle;
}
.label{
  text-align: center;
}
.leaflet-container {
  background-color:rgba(255,0,0,0.0);
}
.leaflet-container path{
  fill-opacity: 1;
  fill: lightgrey;
}
.source{
  position: absolute;
  top: 3px;
  right: 5px;
}
.title{
  padding-top: 3px;
  padding-left: 6px;
}
</style>
