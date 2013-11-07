// Rprtr

'use strict';

var rprtr = angular.module('rprtr',[])
  .config(['$routeProvider', function($routeProvider) {
    // Maybe keep this guy?
    // $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'GlobalCtrl'});

    // $routeProvider.when('/all-rules', {templateUrl: 'partials/all-rules.html'});
    // $routeProvider.when('/declarations', {templateUrl: 'partials/declarations.html'});

    // $routeProvider.when('/font-size', {templateUrl: 'partials/font-size.html'});
    // $routeProvider.when('/width', {templateUrl: 'partials/width.html'});
    // $routeProvider.when('/margin', {templateUrl: 'partials/margin.html'});
    // $routeProvider.when('/padding', {templateUrl: 'partials/padding.html'});
    // $routeProvider.when('/spacing', {templateUrl: 'partials/spacing.html'});
    // $routeProvider.when('/dimensions', {templateUrl: 'partials/dimensions.html'});

    // $routeProvider.when('/colors', {templateUrl: 'partials/colors.html'});
    // $routeProvider.when('/background-image', {templateUrl: 'partials/background-image.html'});
    // $routeProvider.when('/selector', {templateUrl: 'partials/selector.html'});

    $routeProvider.when('/parser', {templateUrl: 'partials/parser/parser.html', controller: 'ParserCtrl'});

    $routeProvider.when('/:site', {templateUrl: 'partials/home.html', controller: 'GlobalCtrl'});
    $routeProvider.when('/:site/:section', {templateUrl: 'partials/section.html', controller: 'GlobalCtrl'});

    $routeProvider.otherwise({redirectTo: '/github'});
  }]);

