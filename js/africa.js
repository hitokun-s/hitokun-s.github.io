var map = new L.Map("map", {
  'center': [0, 0],
  'zoom': 2,
  zoomDelta: 0.5,
  zoomSnap: 0.5,
  fullscreenControl: true
});

d3.json("data/africa.geo.json", function(res){

  function projectPoint(x, y) {
    var point = map.latLngToLayerPoint(new L.LatLng(y, x));
    this.stream.point(point.x, point.y);
  }

  var transform = d3.geoTransform({point: projectPoint});
  var path = d3.geoPath().projection(transform);

  var layer = new L.GeoJSON(res, {
    style: {
      fill: "transparent",
      opacity: 1,
      "fill-opacity": 1,
      background: "#fff"
    }
  }).addTo(map);
  map.fitBounds(layer.getBounds()); // Fit map to bounds of geojson
  // map.setZoom(3);

  layer.eachLayer(function(l) {
    d3.select(l._path).datum(l.feature);
  });
  d3.select("#map").select("svg").selectAll("path").on("click", function(d){
    console.log(d);
  });

  var featureElement = d3.select("#map").select("svg").append("g").selectAll("text")
  .data(res.features)
  .enter()
  .append("text")
  .text(function(d){
    return d.properties.name;
  });

  function update() {
    featureElement.attr("x", function(d){
      return path.centroid(d)[0];
    })
    .attr("y", function(d){
      return path.centroid(d)[1];
    });
  }
  update();
  map.on("zoom", update);
  map.on("move", update);

  d3.tsv("data/africa_gdp_data_2017.tsv", function(countries){
    console.log(countries);
    countries = countries.filter(function(c){
      var found = _.find(res.features, function(feature){
        return feature.properties.admin == c.Nation || feature.properties.name == c.Nation || feature.properties.name_long == c.Nation;
      });
      if(!found){
        console.log("not found:", c.Nation);
      }
      return found;
    });
    d3.selectAll("path").each(function(d){
      var found = _.find(countries, function(c){
        return d.properties.admin == c.Nation || d.properties.name == c.Nation || d.properties.name_long == c.Nation;
      });
      if(found){
        d.properties.gdp_per_capita = +found["GDP (PPP) per capita (2017)"];
      }
    });

    var min = _.min(countries, function(c){return +c["GDP (PPP) per capita (2017)"]})["GDP (PPP) per capita (2017)"];
    var max = _.max(countries.filter(function(c){return !isNaN(c["GDP (PPP) per capita (2017)"])}), function(c){return +c["GDP (PPP) per capita (2017)"]})["GDP (PPP) per capita (2017)"];
    min = +min;
    max = +max;
    console.log("min",min);
    console.log("max",max);

    // var color = d3.scaleThreshold()
    // .domain(d3.range(+min, +max))
    // .range(d3.schemeBlues[+max]);

    // var colorScale = d3.scaleSequential(d3["interpolateCool"])
    // .domain([min, max]);

    var colorScheme = d3.schemeBlues[7];
    // colorScheme.unshift("#eee")
    var colorScale = d3.scaleThreshold()
    .domain([5001, 10001, 15001, 20001, 25001, 30001, 35001])
    .range(colorScheme);

    // Legend\
    var svg = d3.select(map.getContainer()).append("svg")
    .attr("width", 150)
    .attr("height", 200)
    .style("position", "absolute")
    .style("right", "0px")
    .style("z-index", 500);
    var g = svg.append("g")
    .attr("class", "legendThreshold")
    .attr("transform", "translate(20,30)");

    g.append("text")
    .attr("class", "caption")
    .attr("x", 0)
    .attr("y", -25)
    .text("International")
    .style("text-anchor", "start")

    g.append("text")
    .attr("class", "caption")
    .attr("x", 0)
    .attr("y", -10)
    .text("Dollars")
    .style("text-anchor", "start");

    var labels = ['~5000', '~10000', '~15000', '~20000', '~25000', '~30000', '~35000'];
    var legend = d3.legendColor()
    .labels(function (d) { return labels[d.i]; })
    .shapePadding(4)
    .labelOffset(25)
    .scale(colorScale);
    svg.select(".legendThreshold").call(legend);


    d3.selectAll("path").style("fill", function(d){
      console.log(colorScale(d.properties.gdp_per_capita));
      return colorScale(d.properties.gdp_per_capita);
    })
  });

});
