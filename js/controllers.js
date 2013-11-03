// Controllers


rprtr.controller('GlobalCtrl',
  ['$scope', '$http', '$location', '$routeParams', 'declarations',
  function($scope, $http, $location, $routeParams, declarations) {

    console.log('GlobalCtrl');
    $scope.parsing;

    // Setting as a scope variable that can be updated in the view
    if($scope.styleUrl == null) $scope.styleUrl = 'data/twitter.json';

    // Function to get the styles data - This should really go in a factory
    $scope.getStyles = function(styleUrl) {
      $scope.loading = true;
      $http.get(styleUrl).success(function(res) {
        $scope.styles = res;
        $scope.loading = false;
        // Calls factory function to separate JSON into lists of declarations
        $scope.parsing = true;
        declarations($scope);
      });
    };

    // Getting initial styles data
    $scope.getStyles($scope.styleUrl);

    $scope.updateStyles = function(url){
      if(url) $scope.styleUrl = url;
      $scope.getStyles($scope.styleUrl);
      $location.path('/');
    };

}]);


rprtr.controller('HomeCtrl', ['$scope', '$filter', function($scope, $filter) {
  console.log('HomeCtrl');
  console.log($scope.styleUrl);

  //var uniqueFilter = $filter('unique');
  //$scope.uniqueDeclarations = uniqueFilter($scope.declarations);
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

rprtr.controller('DeclarationsCtrl', ['$scope', '$filter', function($scope, $filter){
  var uniqueFilter = $filter('unique');
  $scope.uniqueDeclarations = uniqueFilter($scope.declarations);
}]);
