$(function(){
  var data = [];
  var cssvalues = [];

  var bg_color_values = [];
  var cssproperties = [];
  var font_sizes = [];


  // NEW ARRAYS
  var font_scale = [];
  var element_width_declarations = [];
  var element_height_declarations = [];
  var image_urls = [];
  var link_styles = [];

  var appWidth = $("svg").parent().width();
  var appHeight = $("svg").parent().height();

  d3.json("myspace.json", function(error, json) { // Load Json, pass it to d3.
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    var rules = json.stylesheet.rules; // HAHA TODO better variable name

    for (var i = 0; i < rules.length; i++) {
      if(rules[i].declarations && rules[i].declarations[0].property === "color") {
        cssvalues.push(rules[i].declarations[0].value);
        cssproperties.push(rules[i].declarations[0].property);
      }
      if(rules[i].declarations && rules[i].declarations[0].property === "background-color") {
        bg_color_values.push(rules[i].declarations[0].value);
      }
      if(rules[i].declarations && rules[i].declarations[0].property === "font-size") {
        font_sizes.push(rules[i].declarations[0].value);
      }
      cssvalues.sort();
      var cssvalues_unique = cssvalues.sort().filter(onlyUnique);
      var bg_colors_unique = bg_color_values.sort().filter(onlyUnique);
      cssproperties.sort();
      font_sizes.sort();
      var fontsizes_unique = font_sizes.sort().filter(onlyUnique);

    }

    var svgContainer = d3.select("body").append("div.colors")
      .attr("width", "100%")
      .attr("height", "100px");

    var textContainer = d3.select("body").append("div.fonts")
      .attr("width", "100%")
      .attr("height", "75px");

    var rects = d3.select("div.colors")
      .data(bg_colors_unique)
      .enter()
      .append("div")
      .style("background-color", function(d) {return d + " ";})
      .style("line-height", "8")
      .style("width", "100%")
      .style("text-align", "center")
      .style("text-transform", "uppercase")
      .style("letter-spacing", "0.1em")
      .text(function(d) { return d; });

    var rectAttributes = rects
      .attr("y", 10)
      .attr("x", function(d,i) {return 50 * i;})
      .attr("height", 40)
      .attr("width", "100%")
      .style("fill", function(d) {return d; });

    var fontstyles = textContainer.selectAll("div.fonts")
      .data(fontsizes_unique)
      .enter()
      .append("div")
      .text(function(d) { return d; })
      .style("font-size", function(d) {return d + " ";})
      .style("text-align", "center")
      .style("padding", "40px 0")


    console.log(cssvalues);
    console.log(cssvalues + cssproperties);
  });
});
