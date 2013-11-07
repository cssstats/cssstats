// Controllers

rprtr.controller('GlobalCtrl', ['$scope', '$location', function($scope, $location){
  // Defining a list of sites with human readable names
  $scope.sites = {
    amazon: { 'name': 'Amazon', 'data': 'amazon', 'url': 'http://amazon.com'},
    bbc: { 'name': 'BBC', 'data': 'bbc', 'url': 'http://bbc.co.uk', 'fileSize': '57kb' },
    bootstrap: { 'name': 'Bootstrap', 'data': 'bootstrap', 'url': 'http://getbootstrap.com' },
    css: { 'name': 'CSS', 'data': 'bootstrap', 'url': 'http://mrmrs.github.io/css' },
    dribbble: { 'name': 'Dribbble', 'data': 'dribbble', 'url': 'http://dribbble.com'},
    foundation: { 'name': 'Foundation', 'data': 'foundation', 'url': 'http://foundation.zurb.com' },
    github: { 'name': 'Github', 'data': 'github', 'url': 'http://github.com' },
    kickstarter: { 'name': 'Kickstarter', 'data': 'kickstarter', 'url': 'http://kickstarter.com' },
    mapbox: { 'name': 'Mapbox', 'data': 'mapbox', 'url': 'http://mapbox.com' },
    medium: { 'name': 'Medium', 'data': 'medium', 'url': 'http://medium.com' },
    myspace: { 'name': 'Myspace', 'data': 'myspace', 'url': 'http://myspace.com' },
    nytimes: { 'name': 'New York Times', 'data': 'nytimes', 'url': 'http://nytimes.com' },
    salesforce: { 'name': 'Salesforce', 'data': 'salesforce', 'url': 'http://salesforce.com' },
    sfdc: { 'name': 'Salesforce (logged in)', 'data': 'sfdc', 'url': '' },
    soundcloud: { 'name': 'Soundcloud', 'data': 'soundcloud', 'url': 'http://soundcloud.com'},
    topcoat: { 'name': 'Topcoat', 'data': 'topcoat', 'url': 'http://topcoat.io' },
    twitter: { 'name': 'Twitter', 'data': 'twitter', 'url': 'http://twitter.com' }
  };

  $scope.dropbarIsOpen = false;
  $scope.toggleDropbar = function(){
    $scope.dropbarIsOpen = !$scope.dropbarIsOpen;
    console.log($scope.dropbarIsOpen);
  };

}]);

rprtr.controller('ReportCtrl', ['$scope', '$routeParams', '$location', 'dataloader', function($scope, $routeParams, $location, dataloader) {

    if($routeParams.site) {
      $scope.currentSite = $scope.sites[$routeParams.site];
      $scope.styleData = $scope.currentSite.data;
      dataloader($scope);
    } else {
      console.error('no routeparams');
    };

    $scope.section = 'overview';

    $scope.updateSection = function(section){
      $scope.section = section;
    };

}]);

rprtr.controller('SectionCtrl', ['$scope', 'anythingToRelative', function($scope, anythingToRelative){

}]);


rprtr.controller('HomeCtrl', ['$scope', '$filter', function($scope, $filter) {
  $scope.$watch('loading', function(){
    if($scope.uniqueDeclarations) $scope.refactoringPotential = parseInt((1 - ($scope.uniqueDeclarations.length / $scope.declarations.length)) * 100);
    if ($scope.selectors) {
      if($scope.selectors.length > 4095) {
        $scope.selectorsWarning = 'IE9 and lower only allows for 4095 selectors per stylesheet. This is over the limit by: ' + parseInt($scope.selectors.length - 4095);
      } else if($scope.selectors.length < 4095) {
        $scope.selectorsWarning = 'Currently '+ parseInt(4095 - $scope.selectors.length) + ' under the limit.';
      }
    }
    if($scope.fontSizes) {
      if($scope.fontSizes.length > 128) {
        $scope.fontSizesWarning = 'You have over 128 font-size declarations, u r silly.';
      } else if($scope.fontSizes.length > 512) {
        $scope.fontSizesWarning = 'Over 512 font-size declarations? Go home. You are drunk.';
      };
    };
    if($scope.uniqueFontSizes){
      if($scope.uniqueFontSizes.length > 64) {
        $scope.uniqueFontSizesWarning = 'You have over 64 unique font sizes. Type scale much?';
      } else if ($scope.uniqueFontSizes.length > 128) {
        $scope.uniqueFontSizesWarning = 'Over 128 unique font sizes. Alright, you\'ve lost your computer privileges.';
      };
    };
    if($scope.declarations){
      if($scope.declarations.length > 4095) {
        $scope.declarationsWarning = 'You have ' + $scope.declarations.length + ' selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Also, that is a lot.'
      };
    };
  });

}]);


rprtr.controller('ColorCtrl', ['$scope', function($scope){
  $scope.$watch('loading', function(){
    $scope.viewColors = $scope.colors;
  });
  $scope.showAll = function(){
    $scope.viewColors = $scope.colors;
  };
  $scope.showUnique = function() {
    $scope.viewColors = $scope.uniqueColors;
  };
}]);

rprtr.controller('BackgroundColorCtrl', ['$scope', function($scope){
  $scope.$watch('loading', function(){
    $scope.viewBackgroundColors = $scope.backgroundColors;
  });
  $scope.showAll = function() {
    $scope.viewBackgroundColors = $scope.backgroundColors;
  };
  $scope.showUnique = function() {
    $scope.viewBackgroundColors = $scope.uniqueBackgroundColors;
  };
}]);


// I really wanna move this to a separate app
rprtr.controller('ParserCtrl', ['$scope', '$http', '$filter', 'declarations', function($scope, $http, $filter, declarations){

  // Controller for parsing the base JSON data and spitting out
  // declarations and unique_declarations

  $scope.styleDataToParse = null;

  // Reset any previously loaded data
  $scope.declarations = null;
  $scope.uniqueDeclarations = null;

  // to do: Simplify the parser function
    // $scope.updateStyles = function(url){
    //   if(url) $scope.styleData = url;
    //   $scope.getStyles($scope.styleData);
    // };

  $scope.updateStylesToParse = function(url){
    console.log('getting: ' + 'data/' + $scope.styleDataToParse + '/rules.json');
    $http.get('data/' + $scope.styleDataToParse + '/rules.json').success(function(res) {
      console.log('got: ' + 'data/' + $scope.styleDataToParse + '/rules.json');
      $scope.styles = res;
      declarations($scope);
    });
  };

  $scope.$watch($scope.declarations, function(){
    console.log('found declarations. parsing uniques...');
    $scope.getUniques();
  });

  $scope.getUniques = function(){
    console.log('getting uniques for ' + $scope.styleDataToParse);
    var uniqueFilter = $filter('unique');
    $scope.uniqueDeclarations = uniqueFilter($scope.declarations);
  };

}]);
