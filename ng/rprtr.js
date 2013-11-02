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
  // This should really go in a factory
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
  $scope.styleUrl = 'data/myspace.json';

  // This belongs in a factory
  $scope.getDeclarations = function(styleUrl) {
    $scope.loading = true;
    $http.get(styleUrl).success(function(res) {
      var rules = res.stylesheet.rules;
      //console.log(rules.length);
      $scope.declarations = [];
      for(var i = 0; i < rules.length; i++){
        var declarations = rules[i].declarations;
        for(var j in declarations){
          //console.log(declarations[j].property + ': ' + declarations[j].value);
          $scope.declarations.push(declarations[j].property + ': ' + declarations[j].value);
        };
      };
      $scope.loading = false;
      //$scope.styles = res;
      //$scope.loading = false;
    });
  };

  $scope.getDeclarations($scope.styleUrl);

}]);
