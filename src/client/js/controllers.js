angular.module('rprtr').controller('GlobalCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
  
  var m = $scope.model = $scope.model || {};

  $scope.validUrl = true;
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
  m.cssUrl = 'http://rprtr.herokuapp.com';
  m.cssLink = 'http://rprtr.herokuapp.com/css/i.css';
  m.cssInput = '';
  
  $scope.parseCss = function () {

    /**
     * Taken from http://stackoverflow.com/a/3975573/1955940
     *
     * URL Validation is not an easy task but it does the job.
     */
    var urlregex = new RegExp(
      "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");

    if (!urlregex.test(m.cssUrl)) {
      $scope.validUrl = false;
      return;
    }

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

  m.d3 = {};

  $http.post('/parse', { type: $routeParams.type, url: decodeURIComponent($routeParams.url) }).then(function (response) {
    
    $scope.site = response.data;

    angular.forEach(['width', 'height', 'color', 'backgroundColor', 'fontSize', 'maxWidth', 'maxHeight'], function (stat) {
      m.d3[stat + 's'] = [
        { name: 'Unique', count: $scope.site.decsByProperty.unique[stat].length },
        { name: 'Total', count: $scope.site.decsByProperty.all[stat].length }
      ];
    });
    
  }, function(error){
    alert('An error occurred while processing the request.');
    $location.path('/');
  })

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

}]);
