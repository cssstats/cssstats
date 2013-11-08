// Controllers

rprtr.controller('GlobalCtrl', ['$scope', '$location', '$http', function($scope, $location, $http){
  
  /*
  $scope.sites = {
    amazon: { 'name': 'Amazon', 'data': 'amazon', 'url': 'http://amazon.com'},
    bbc: { 'name': 'BBC', 'data': 'bbc', 'url': 'http://bbc.co.uk', 'fileSize': '57kb' },
    bootstrap: { 'name': 'Bootstrap', 'data': 'bootstrap', 'url': 'http://getbootstrap.com' },
    css: { 'name': 'CSS', 'data': 'css', 'url': 'http://mrmrs.github.io/css' },
    dribbble: { 'name': 'Dribbble', 'data': 'dribbble', 'url': 'http://dribbble.com'},
    foundation: { 'name': 'Foundation', 'data': 'foundation', 'url': 'http://foundation.zurb.com' },
    github: { 'name': 'Github', 'data': 'github', 'url': 'http://github.com' },
    kickstarter: { 'name': 'Kickstarter', 'data': 'kickstarter', 'url': 'http://kickstarter.com' },
    mapbox: { 'name': 'Mapbox', 'data': 'mapbox', 'url': 'http://mapbox.com' },
    medium: { 'name': 'Medium', 'data': 'medium', 'url': 'http://medium.com' },
    myspace: { 'name': 'Myspace', 'data': 'myspace', 'url': 'http://myspace.com' },
    nytimes: { 'name': 'New York Times', 'data': 'nytimes', 'url': 'http://nytimes.com' },
    salesforce: { 'name': 'Salesforce', 'data': 'salesforce', 'url': 'http://salesforce.com' },
    sfdc: { 'name': 'Salesforce App', 'data': 'sfdc', 'url': '' },
    soundcloud: { 'name': 'Soundcloud', 'data': 'soundcloud', 'url': 'http://soundcloud.com'},
    topcoat: { 'name': 'Topcoat', 'data': 'topcoat', 'url': 'http://topcoat.io' },
    twitter: { 'name': 'Twitter', 'data': 'twitter', 'url': 'http://twitter.com' }
  };
  */

  $scope.model = {
    cssInput: '',
    subNav: {
      items: [{
        id: 'overview',
        label: 'Overview',
        active: true
      },{
        id: 'font-size',
        label: 'Font-Size'
      },{
        id: 'spacing',
        label: 'Spacing'
      },{
        id: 'width',
        label: 'Width'
      },{
        id: 'colors',
        label: 'Colors'
      },{
        id: 'all-rules',
        label: 'All Rules'
      },{
        id: 'selectors',
        label: 'Selectors'
      },{
        id: 'declarations',
        label: 'Declarations'
      }]
    }
  };

  $scope.model.subNav.active = $scope.model.subNav.items[0];
  $scope.subNavChange = function (newItem) {
    angular.forEach($scope.model.subNav.items, function (item) {
      item.active = false;
    });
    newItem.active = true;
    $scope.model.subNav.active = newItem;
  };

  $scope.dropbarIsOpen = false;
  $scope.toggleDropbar = function () {
    $scope.dropbarIsOpen = !$scope.dropbarIsOpen;
  };

  $scope.parseCss = function () {
    $http.post('/parse', { css: $scope.model.cssInput }).then(function (response) {
      $scope.site = response.data;
      $location.path('/results');
    });
  };

}]);

rprtr.controller('ReportCtrl', ['$scope', '$routeParams', '$location', '$http', '$filter', function($scope, $routeParams, $location, $http, $filter) {

  $scope.loading = false;

  /*$http.get('/parse').then(function (response) {
    $scope.site = response.data;
  }, function (err) {

  });*/

  $scope.getDecs = function (ids) {
    if (ids) {
      return $filter('filter')($scope.site.decs, function (dec) {
        return ids.indexOf(dec.id) !== -1;
      });
    } else {
      return [];
    }
  };

  $scope.getSelectors = function (selectors) {
    return selectors.join(', ')
  };

  /*
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
  */

}]);

rprtr.controller('SectionCtrl', ['$scope', 'anythingToRelative', function($scope, anythingToRelative){

}]);


rprtr.controller('HomeCtrl', ['$scope', '$filter', function($scope, $filter) {
  /*$scope.$watch('loading', function(){
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
  });*/
}]);


rprtr.controller('ColorCtrl', ['$scope', function($scope){
  /*$scope.$watch('loading', function(){
    $scope.viewColors = $scope.colors;
  });
  $scope.showAll = function(){
    $scope.viewColors = $scope.colors;
  };
  $scope.showUnique = function() {
    $scope.viewColors = $scope.uniqueColors;
  };*/
}]);

rprtr.controller('BackgroundColorCtrl', ['$scope', function($scope){
  /*$scope.$watch('loading', function(){
    $scope.viewBackgroundColors = $scope.backgroundColors;
  });
  $scope.showAll = function() {
    $scope.viewBackgroundColors = $scope.backgroundColors;
  };
  $scope.showUnique = function() {
    $scope.viewBackgroundColors = $scope.uniqueBackgroundColors;
  };*/
}]);


// I really wanna move this to a separate app
/*rprtr.controller('ParserCtrl', ['$scope', '$http', '$filter', 'declarations', function($scope, $http, $filter, declarations){

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

}]);*/
