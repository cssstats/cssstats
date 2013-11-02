// Rprtr

'use strict';

var rprtr = angular.module('rprtr',[])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/all-rules', {templateUrl: 'partials/all-rules.html'});
    $routeProvider.when('/font-size', {templateUrl: 'partials/font-size.html'});
    $routeProvider.when('/width', {templateUrl: 'partials/width.html'});
    $routeProvider.when('/color', {templateUrl: 'partials/color.html'});
    $routeProvider.when('/background-color', {templateUrl: 'partials/background-color.html'});
    $routeProvider.when('/background-image', {templateUrl: 'partials/background-image.html'});
    // $routeProvider.when('/background-color', {templateUrl: 'partials/background-color.html'});

    //$routeProvider.when('/:params', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

rprtr.value('$anchorScroll', angular.noop);


rprtr.factory('declarations', function(fontSizeToPx) {
  return function($scope){
    var rules = $scope.styles.stylesheet.rules;
    $scope.declarations = [];
    $scope.selectors = [];
    $scope.fontSizes = [];
    $scope.widths = [];
    $scope.heights = [];
    $scope.colors = [];
    $scope.backgroundColors = [];
    $scope.backgroundImages = [];
    $scope.margins = [];
    $scope.paddings = [];
    $scope.transitions = [];

    for(var i = 0; i < rules.length; i++){
      var declarations = rules[i].declarations;
      var selectors = rules[i].selectors;

      // Adds list of selectors so we can parse just selectors
      for(var j in selectors) {
        $scope.selectors.push(selectors[j]);
      }

      // Adds all the declarations.
      for(var j in declarations){
        //console.log(declarations[j].property + ': ' + declarations[j].value);
        $scope.declarations.push(declarations[j].property + ': ' + declarations[j].value);
        if(declarations[j].property == 'font-size') {
          // Adding absolute px values to sort by
          declarations[j].pxValue = fontSizeToPx.convert(declarations[j].value);
          $scope.fontSizes.push(declarations[j]);
        };
        if(declarations[j].property == 'width') $scope.widths.push(declarations[j]);
        if(declarations[j].property == 'height') $scope.heights.push(declarations[j]);
        if(declarations[j].property == 'color') $scope.colors.push(declarations[j]);
        if(declarations[j].property == 'background-color') $scope.backgroundColors.push(declarations[j]);
        if(declarations[j].property == 'background-image') $scope.backgroundImages.push(declarations[j]);
        if(declarations[j].property == 'transition') $scope.transitions.push(declarations[j]);
        // could probably use regex to find shorthand + longhand properties
        if(declarations[j].property == ('margin' || 'margin-top' || 'margin-right' || 'margin-bottom' || 'margin-left')) $scope.margins.push(declarations[j]);
        if(declarations[j].property == ('padding' || 'padding-top' || 'padding-right' || 'padding-bottom' || 'padding-left')) $scope.paddings.push(declarations[j]);
      };
    };
  };
});

rprtr.service('fontSizeToPx', function(){
  return {
    convert: function(val){
      var raw = parseFloat(val);
      if(val.match(/px$/)) return raw;
      if(val.match(/em$/)) return raw * 16;
      else if(val.match(/%$/)) return raw * .16;
      // Based on Webkit defaults
      else if(val == 'inherit') return 16;
      else if(val == 'xx-small') return 9;
      else if(val == 'x-small') return 10;
      else if(val == 'small') return 13;
      else if(val == 'medium') return 16;
      else if(val == 'large') return 18;
      else if(val == 'x-large') return 24;
      else if(val == 'xx-large') return 32;
      else if(val == 'smaller') return 13;
      else if(val == 'larger') return 19;
      // All other values
      else return 1024;
    }
  };
});

rprtr.controller('GlobalCtrl', ['$scope', '$http', '$location', '$routeParams', 'declarations', function($scope, $http, $location, $routeParams, declarations) {

  console.log('GlobalCtrl');

  // Setting as a scope variable that can be updated in the view
  $scope.styleUrl = 'data/myspace.json';

  // Function to get the styles data - This should really go in a factory
  $scope.getStyles = function(styleUrl) {
    $scope.loading = true;
    $http.get(styleUrl).success(function(res) {
      $scope.styles = res;

      // Calls factory function to separate JSON into lists of declarations
      declarations($scope);
      $scope.loading = false;
    });
  };

  // Getting initial styles data
  // This function can later be called from the view, if needed.
  $scope.getStyles($scope.styleUrl);

}]);
