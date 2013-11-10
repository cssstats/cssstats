angular.module('rprtr').controller('GlobalCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
  
  var m = $scope.model = $scope.model || {};

  ///////////////////////////////////
  // CSS Parse
  ///////////////////////////////////

  m.cssInputTypes = [{
    label: 'URL',
    value: 'url'
  },{
    label: 'Link',
    value: 'link'
  },{
    label: 'Input',
    value: 'input'
  }];
  
  m.cssInputType = 'url';
  m.cssUrl = 'http://rprtr.herokuapp.com'
  m.cssLink = 'http://rprtr.herokuapp.com/css/i.css';
  m.cssInput = '';
  
  $scope.parseCss = function () {
    if (m.cssInputType === 'url') {
      $location.path('/site/url/' + encodeURIComponent(m.cssUrl));
    }
    if (m.cssInputType === 'link') {
      $location.path('/site/link/' + encodeURIComponent(m.cssLink));
    }
    if (m.cssInputType === 'input') {
      $http.post('/parse', { type: 'input', css: m.cssInput }).then(function (response) {
        $scope.site = response.data;
        $location.path('/results');
      });
    }
  };
  
  ///////////////////////////////////
  // Misc
  ///////////////////////////////////

  $scope.dropbarIsOpen = false;
  $scope.toggleDropbar = function () {
    $scope.dropbarIsOpen = !$scope.dropbarIsOpen;
  };

}]);

angular.module('rprtr').controller('ReportCtrl', ['$scope', '$routeParams', '$location', '$http', '$filter', function ($scope, $routeParams, $location, $http, $filter) {

  var m = $scope.model || {};

  $http.post('/parse', { type: $routeParams.type, url: decodeURIComponent($routeParams.url) }).then(function (response) {
    $scope.site = response.data;
    console.log($scope.site);
  });

  ///////////////////////////////////
  // Subnav
  ///////////////////////////////////

  m.subNav = {
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
  };

  m.subNav.active = $scope.model.subNav.items[0];
  $scope.subNavChange = function (newItem) {
    angular.forEach($scope.model.subNav.items, function (item) {
      item.active = false;
    });
    newItem.active = true;
    $scope.model.subNav.active = newItem;
  };

  ///////////////////////////////////
  // Utilities
  ///////////////////////////////////

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
    return selectors.join(', ');
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

angular.module('rprtr').controller('SectionCtrl', ['$scope', 'anythingToRelative', function($scope, anythingToRelative){

}]);

angular.module('rprtr').controller('HomeCtrl', ['$scope', '$filter', function($scope, $filter) {
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


angular.module('rprtr').controller('ColorCtrl', ['$scope', function($scope){
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

angular.module('rprtr').controller('BackgroundColorCtrl', ['$scope', function($scope){
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
