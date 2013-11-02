// Rprtr

'use strict';

var rprtr = angular.module('rprtr',[])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/declarations', {templateUrl: 'partials/declarations.html', controller: 'DeclarationsCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);


rprtr.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.loading = true;

  // Setting as a scope variable that can be updated in the view
  $scope.styleUrl = 'data/myspace.json';

  // Function to get the styles data
  $scope.getStyles = function(styleUrl) {
    $http.get(styleUrl).success(function(res) {
      $scope.styles = res;
      $scope.loading = false;
    });
  };

  // Getting initial styles data
  // This function can later be called from the view, if needed.
  $scope.getStyles($scope.styleUrl);

}]);

rprtr.controller('DeclarationsCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.loading = true;

  $scope.getDeclarations = function(styleUrl) {
    $http.get(styleUrl).success(function(res) {
      //$scope.styles = res;
      //$scope.loading = false;
    });
  };

}]);
