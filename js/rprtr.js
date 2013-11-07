// Rprtr

'use strict';

var rprtr = angular.module('rprtr',[])
  .config(['$routeProvider', function($routeProvider) {
    // Maybe keep this guy?
    // $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'GlobalCtrl'});

    $routeProvider.when('/parser', {templateUrl: 'partials/parser/parser.html', controller: 'ParserCtrl'});
    $routeProvider.when('/:site', {templateUrl: 'partials/home.html', controller: 'ReportCtrl', reloadOnSearch: false});

    $routeProvider.otherwise({redirectTo: '/github'});
  }]);

