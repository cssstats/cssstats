angular.module('rprtr',[])
  
  .config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', { templateUrl: 'partials/index.html' });
    $routeProvider.when('/parser', { templateUrl: 'partials/parser/parser.html', controller: 'ParserCtrl' });
    $routeProvider.when('/about', { templateUrl: 'partials/about.html', controller: 'GlobalCtrl' });
    $routeProvider.when('/site/:type/:url', { templateUrl: 'partials/home.html', controller: 'ReportCtrl' });
    $routeProvider.when('/results', { templateUrl: 'partials/home.html', controller: 'ReportCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });

  }]);

