/**
 * Created by flavor on 6/23/15.
 */
var app = angular.module('myApp.d3Directives', []).directive('barsChart',
  function ($parse) {

    return {
      restrict: 'E',
      replace: false,
      scope: {data: '=chartData'},
      link: function (scope, element, attrs) {
        var chart = d3.select(element[0]);
        chart.append("svg").attr("class", "chart")
          .selectAll('rect')
          .data(scope.data).enter().append("rect")
          .transition().ease("elastic")
          .attr("width", function (d) {
            return d + "%";
          })
          .attr('height', 50)
          .attr('y', function (d, i) {
            return (50 * i) + 4;
          })
          .text(function (d) {
            return d + " hits";
          });
      }
    };

  });