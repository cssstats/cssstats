(function () {
  'use strict';

  angular.module('rprtr')
    .directive('d3Bars', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          data: "=",
          label: "@",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {
          var svg = d3.select(iElement[0])
              .append("svg")
              .attr("width", "100%");

          var margin = parseInt(iAttrs.margin) || 20,
              barHeight = parseInt(iAttrs.barHeight) || 20,
              barPadding = parseInt(iAttrs.barPadding) || 5;

          // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
          };

          /*scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
              return scope.render(scope.data);
            }
          );*/

          // watch for data changes and re-render
          scope.$watch('data', function(newVals, oldVals) {
            if (newVals) {
              scope.render(newVals);
            }
          }, true);

          // define render function
          scope.render = function(data){
            // remove all previous items before render
            svg.selectAll("*").remove();

            // setup variables
            var width, height, max, color;
            width = d3.select(iElement[0])[0][0].offsetWidth;
            height = scope.data.length * 44;

            color = d3.scale.category20c();

            max = Math.max.apply(Math, data.map(function(val){
              return val.count;
            }));

            // set the height based on the calculations above
            svg.attr('height', height);

            //create the rectangles for the bar chart
            svg.selectAll("rect")
              .data(data)
              .enter()
                .append("rect")
                .attr("height", 44) // height of each bar
                .attr("width", 0) // initial width of 0 for transition
                .attr("x", 0) // half of the 20 side margin specified above
                .attr("y", function(d, i){
                  return i * 44;
                }) // height + margin between bars
                .attr('fill', function(d) { return color(d.count); })
                .transition()
                  .duration(1000) // time of duration
                  .attr("width", function(d){
                    return d.count/(max/width);
                  }); // width based on scale

            svg.selectAll('text')
                .data(data)
                .enter()
                  .append('text')
                  .attr('fill', '#fff')
                  .attr('y', function(d,i) {
                    return (i * 44) + 26;
                  })
                  .attr('x', 15)
                  .attr('font-size', '14px')
                  .text(function(d) {
                    return d.count + ' ' + d.name;
                  });
          };
        }
      };
    }]);

}());
