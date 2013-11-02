// Rprtr

'use strict';

var rprtr = angular.module('rprtr',[])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);


rprtr.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.herro = 'herro world';

  // Setting as a scope variable that can be updated in the view
  $scope.styleUrl = 'data/myspace.json';

  // Function to get the styles data
  $scope.getStyles = function(styleUrl) {
    $scope.loading = true;
    $http.get(styleUrl).success(function(res) {
      $scope.styles = res;
      $scope.loading = false;
    });
  };

  // Getting initial styles data
  // This function can later be called from the view, if needed.
  $scope.getStyles($scope.styleUrl);

}]);
