// Rprtr

'use strict';

var rprtr = angular.module('rprtr',[])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html'});
    $routeProvider.when('/edit', {templateUrl: 'partials/edit.html'});

    $routeProvider.when('/all-rules', {templateUrl: 'partials/all-rules.html'});
    $routeProvider.when('/declarations', {templateUrl: 'partials/declarations.html'});

    $routeProvider.when('/font-size', {templateUrl: 'partials/font-size.html'});
    $routeProvider.when('/width', {templateUrl: 'partials/width.html'});
    $routeProvider.when('/margin', {templateUrl: 'partials/margin.html'});
    $routeProvider.when('/padding', {templateUrl: 'partials/padding.html'});

    $routeProvider.when('/color', {templateUrl: 'partials/color.html'});
    $routeProvider.when('/background-color', {templateUrl: 'partials/background-color.html'});
    $routeProvider.when('/background-image', {templateUrl: 'partials/background-image.html'});
    $routeProvider.when('/selector', {templateUrl: 'partials/selector.html'});

    $routeProvider.otherwise({redirectTo: '/'});
  }]);

rprtr.value('$anchorScroll', angular.noop);


// Factories

rprtr.factory('specificityScore', function () {
  return function(selectors){
      console.log('specificityScore');

      for(var i = 0; i < selectors.length; i++) {
        var idCount = selectors[i].string.split("#").length - 1;
        var classCount = selectors[i].string.split(".").length - 1;
        var attributeCount = selectors[i].string.split("[").length - 1;
        var elementCount = selectors[i].string.split("\s[a-zA-Z]").length -1;
        var childCount = selectors[i].string.split(">").length -1;
        var score = idCount*100 + classCount*10 + attributeCount*10 + elementCount;
        // No childCount? WTF?
        // console.log(score);
        selectors[i].specificityScore = score;
      };
  };
});

rprtr.factory('selectors', function(specificityScore){
  return function($scope) {
    var rules = $scope.styles.stylesheet.rules;
    $scope.selectors = [];
    for(var i = 0; i < rules.length; i++){
      var selectors = rules[i].selectors;
      for(var j in selectors) {
        var obj = {'string': selectors[j]};
        $scope.selectors.push(obj);
      };
    };
    specificityScore($scope.selectors);
  };
});

rprtr.factory('declarations', function(fontSizeToPx, anythingToRelative, $filter, selectors) {
  return function($scope){
    var rules = $scope.styles.stylesheet.rules;
    $scope.declarations = [];
    // For creating subsets of declarations
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
      
      // Adds all the declarations.
      for(var j in declarations){
        $scope.declarations.push(declarations[j]);

        if(declarations[j].property == 'font-size') {
          // Adding absolute px values to sort by
          declarations[j].pxValue = fontSizeToPx(declarations[j].value);
          $scope.fontSizes.push(declarations[j]);
        };
        if(declarations[j].property == 'width') $scope.widths.push(declarations[j]);
        if(declarations[j].property == 'height') $scope.heights.push(declarations[j]);
        if(declarations[j].property == 'color') $scope.colors.push(declarations[j]);
        if(declarations[j].property == 'background-color') $scope.backgroundColors.push(declarations[j]);
        if(declarations[j].property == 'background-image') $scope.backgroundImages.push(declarations[j]);
        if(declarations[j].property == 'transition') $scope.transitions.push(declarations[j]);
        if(declarations[j].property.match(/^margin/)) $scope.margins.push(declarations[j]);
        if(declarations[j].property.match(/^padding/)) $scope.paddings.push(declarations[j]);
      };
    };

    selectors($scope);

    var uniqueFilter = $filter('unique');
    $scope.uniqueDeclarations = uniqueFilter($scope.declarations);

  };
});

rprtr.factory('fontSizeToPx', function(){
  return function(val){
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
  };
});

// Call this after declarations service has parsed all the margins, paddings, etc.
// Not sure if the name suits this. Not sure that it can handle anything
rprtr.factory('anythingToRelative', function(){
  return function(obj) {

    // Need to parse through margin and padding shorthands too

    // Find the highest absolute value
    var highestValue = 0;
    for(var i = 0; i < obj.length; i++){
      var thisValue = obj[i].value, raw = parseFloat(thisValue);
      // Ignore auto and percentage based values
      if(thisValue != 'auto' && !thisValue.match(/%$/)) {
        if(thisValue.match(/em$/)) raw = raw * 16;
        if(raw > highestValue) highestValue = raw;
      };
    };

    // Add relative values to all objects
    for(var i = 0; i < obj.length; i++) {
      var thisValue = obj[i].value, raw = parseFloat(thisValue);
      if(thisValue == 0) obj[i].relativeValue = raw;
      if(thisValue == 'auto') obj[i].relativeValue = 100;
      if(thisValue.match(/%$/)) obj[i].relativeValue = raw;
      if(thisValue.match(/em$/)) obj[i].relativeValue = ((raw * 16) / highestValue * 100);
      if(thisValue.match(/px$/)) obj[i].relativeValue = (raw / highestValue * 100);
    };
  };
});


// Filters



rprtr.filter('unique', function () {
  return function (items, filterOn) {
    if (filterOn === false) return items;
    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];
      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };
      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;
        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) newItems.push(item);
      });
      items = newItems;
    }
    return items;
  };
});


// Controllers

rprtr.controller('GlobalCtrl',
  ['$scope', '$http', '$location', '$routeParams', 'declarations',
  function($scope, $http, $location, $routeParams, declarations) {

    console.log('GlobalCtrl');

    // Setting as a scope variable that can be updated in the view
    if($scope.styleUrl == null) {
      console.log('styleUrl is null');
      // $scope.styleUrl = 'data/myspace.json';
    };

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

rprtr.controller('EditCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
  $scope.updateStyles = function(){
    console.log('update styles' + $rootScope.styleUrl);
    $scope.getStyles($scope.styleUrl);
    $location.path('/');
  };
}]);

rprtr.controller('HomeCtrl', ['$scope', function($scope) {
  console.log('HomeCtrl');
  console.log($scope.styleUrl);
}]);

rprtr.controller('MarginCtrl', ['$scope', 'anythingToRelative', function($scope, anythingToRelative){
  anythingToRelative($scope.margins);
}]);

rprtr.controller('PaddingCtrl', ['$scope', 'anythingToRelative', function($scope, anythingToRelative){
  anythingToRelative($scope.paddings);
}]);

rprtr.controller('WidthCtrl', ['$scope', 'anythingToRelative', function($scope, anythingToRelative){
  anythingToRelative($scope.widths);
}]);

rprtr.controller('HeightCtrl', ['$scope', 'anythingToRelative', function($scope, anythingToRelative){
  anythingToRelative($scope.heights);
}]);

rprtr.controller('FontSizeCtrl', ['$scope', '$filter', function($scope, $filter){
  var fontFilter = $filter('unique');
  $scope.uniqueFontSizes = fontFilter($scope.fontSizes);
}]);
