// Rprtr

'use strict';

var rprtr = angular.module('rprtr',[])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html'});

    $routeProvider.when('/all-rules', {templateUrl: 'partials/all-rules.html'});
    $routeProvider.when('/declarations', {templateUrl: 'partials/declarations.html'});

    $routeProvider.when('/font-size', {templateUrl: 'partials/font-size.html'});
    $routeProvider.when('/width', {templateUrl: 'partials/width.html'});
    $routeProvider.when('/margin', {templateUrl: 'partials/margin.html'});
    $routeProvider.when('/padding', {templateUrl: 'partials/padding.html'});
    $routeProvider.when('/spacing', {templateUrl: 'partials/spacing.html'});
    $routeProvider.when('/dimensions', {templateUrl: 'partials/dimensions.html'});

    $routeProvider.when('/colors', {templateUrl: 'partials/colors.html'});
    $routeProvider.when('/background-color', {templateUrl: 'partials/background-color.html'});
    $routeProvider.when('/background-image', {templateUrl: 'partials/background-image.html'});
    $routeProvider.when('/selector', {templateUrl: 'partials/selector.html'});

    $routeProvider.otherwise({redirectTo: '/'});
  }]);

