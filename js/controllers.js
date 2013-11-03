// Controllers


rprtr.controller('GlobalCtrl',
  ['$scope', '$http', '$location', 'declarations', 'declarationsByType', 'selectors',
  function($scope, $http, $location, declarations, declarationsByType, selectors) {

    console.log('GlobalCtrl');

    // Setting as a scope variable that can be updated in the view
    if($scope.styleData == null) $scope.styleData = 'twitter';

    // Function to get the styles data - This should really go in a factory
    $scope.getStyles = function(styleData) {
      $scope.loading = true;
      $http.get('/data/' + styleData + '/rules.json').success(function(res) {
        $scope.styles = res;
        selectors($scope);
        $scope.loading = false;
      });
      // This might break the parser
      $http.get('/data/' + styleData + '/declarations.json').success(function(res){
        $scope.declarations = res;
        // Create arrays for each declaration type in the factory
        declarationsByType($scope);
      });
      $http.get('/data/' + styleData + '/unique_declarations.json').success(function(res){
        $scope.uniqueDeclarations = res;
      });
    };

    // Getting initial styles data
    $scope.getStyles($scope.styleData);

    $scope.updateStyles = function(url){
      if(url) $scope.styleData = url;
      $scope.getStyles($scope.styleData);
      $location.path('/');
    };

}]);


rprtr.controller('HomeCtrl', ['$scope', function($scope) {
  console.log('HomeCtrl');
    
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

rprtr.controller('DeclarationsCtrl', ['$scope', function($scope){
}]);


rprtr.controller('ParserCtrl', ['$scope', '$filter', 'declarations', function($scope, $filter, declarations){
  // Controller for parsing the base JSON data and spitting out 
  // declarations and unique_declarations
  declarations($scope);
  var uniqueFilter = $filter('unique');
  $scope.uniqueDeclarations = uniqueFilter($scope.declarations);

}]);