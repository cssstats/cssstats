// Services

rprtr.factory('specificityScore', function () {
  return function(selectors){

      for(var i = 0; i < selectors.length; i++) {
        // Regex for finding styled elements. Searches for word characters at beginning of line and after spaces.
        var rePattern = /^[a-zA-Z]|\s(?=[a-zA-Z])/;


        var idCount = selectors[i].string.split("#").length - 1;
        var classCount = selectors[i].string.split(".").length - 1;
        var attributeCount = selectors[i].string.split("[").length - 1;
        var elementCount = selectors[i].string.split(rePattern).length -1;
        var childCount = selectors[i].string.split(">").length -1;
        var score = idCount*100 + classCount*10 + attributeCount*10 + elementCount*1;
        // No childCount? WTF?
        selectors[i].specificityScore = score;
      };
    console.log(new Date().getTime());
    console.log('got specificity scores');
  };
});

rprtr.factory('selectors', function(specificityScore){
  return function($scope) {
    var rules = $scope.styles.stylesheet.rules;
    $scope.selectors = [];
    for(var i = 0; i < rules.length; i++){
      var selectors = rules[i].selectors;
      for(var j in selectors) {
        var obj = {'string': selectors[j]};
        $scope.selectors.push(obj);
      };
    };
    console.log(new Date().getTime());
    console.log('parsed selectors');
    specificityScore($scope.selectors);
    $scope.parsing = false;
  };
});

rprtr.factory('declarations', function(fontSizeToPx, anythingToRelative, $filter, selectors) {
  return function($scope){
    var rules = $scope.styles.stylesheet.rules;
    $scope.declarations = [];
    // For creating subsets of declarations
    $scope.fontSizes = [];
    $scope.widths = [];
    $scope.floats = [];
    $scope.heights = [];
    $scope.colors = [];
    $scope.backgroundColors = [];
    $scope.backgroundImages = [];
    $scope.margins = [];
    $scope.paddings = [];
    $scope.transitions = [];

    for(var i = 0; i < rules.length; i++){
      var declarations = rules[i].declarations;

      // Adds all the declarations.
      for(var j in declarations){
        $scope.declarations.push(declarations[j]);

        if(declarations[j].property){
          if(declarations[j].property == 'font-size') {
            // Adding absolute px values to sort by
            declarations[j].pxValue = fontSizeToPx(declarations[j].value);
            $scope.fontSizes.push(declarations[j]);
          };
          if(declarations[j].property == 'width') $scope.widths.push(declarations[j]);
          if(declarations[j].property == 'height') $scope.heights.push(declarations[j]);
          if(declarations[j].property == 'color') $scope.colors.push(declarations[j]);
          if(declarations[j].property == 'float') $scope.floats.push(declarations[j]);
          if(declarations[j].property == 'background-color') $scope.backgroundColors.push(declarations[j]);
          if(declarations[j].property == 'background-image') $scope.backgroundImages.push(declarations[j]);
          if(declarations[j].property == 'transition') $scope.transitions.push(declarations[j]);
          if((typeof declarations[j].property) != 'string') console.log(declarations[j].property);
          if(declarations[j].property.match(/^margin/)) $scope.margins.push(declarations[j]);
          if(declarations[j].property.match(/^padding/)) $scope.paddings.push(declarations[j]);
        };
      };
    };

    console.log(new Date().getTime());
    console.log('parsed declarations');
    selectors($scope);

    // This slows everything down tremendously and needs to be loaded in a different way
    //var uniqueFilter = $filter('unique');
    //$scope.uniqueDeclarations = uniqueFilter($scope.declarations);

  };
});

// Converts all font sizes to pixel values for sorting
// This adds a value to each font-size declaration object
rprtr.factory('fontSizeToPx', function(){
  return function(val){
    var raw = parseFloat(val);
    if(val.match(/px$/)) return raw;
    if(val.match(/em$/)) return raw * 16;
    else if(val.match(/%$/)) return raw * .16;
    // Based on Webkit defaults
    else if(val == 'inherit') return 16;
    else if(val == 'xx-small') return 9;
    else if(val == 'x-small') return 10;
    else if(val == 'small') return 13;
    else if(val == 'medium') return 16;
    else if(val == 'large') return 18;
    else if(val == 'x-large') return 24;
    else if(val == 'xx-large') return 32;
    else if(val == 'smaller') return 13;
    else if(val == 'larger') return 19;
    // All other values
    else return 1024;
  };
});

// Call this after declarations service has parsed all the margins, paddings, etc.
// Not sure if the name suits this. Not sure that it can handle anything
rprtr.factory('anythingToRelative', function(){
  return function(obj) {

    // Need to parse through margin and padding shorthands too

    // Find the highest absolute value
    var highestValue = 0;
    for(var i = 0; i < obj.length; i++){
      var thisValue = obj[i].value, raw = parseFloat(thisValue);
      // Ignore auto and percentage based values
      if(thisValue != 'auto' && !thisValue.match(/%$/)) {
        if(thisValue.match(/em$/)) raw = raw * 16;
        if(raw > highestValue) highestValue = raw;
      };
    };

    // Add relative values to all objects
    for(var i = 0; i < obj.length; i++) {
      var thisValue = obj[i].value, raw = parseFloat(thisValue);
      if(thisValue == 0) obj[i].relativeValue = raw;
      if(thisValue == 'auto') obj[i].relativeValue = 100;
      if(thisValue.match(/%$/)) obj[i].relativeValue = raw;
      if(thisValue.match(/em$/)) obj[i].relativeValue = ((raw * 16) / highestValue * 100);
      if(thisValue.match(/px$/)) obj[i].relativeValue = (raw / highestValue * 100);
    };
  };
});


// Local Storage Factory
rprtr.factory('storage', function(){            
  return {
    set: function(key, obj){
      var string = JSON.stringify(obj)
      localStorage.setItem(key, string);
    },
    get: function(key){
      var data = localStorage.getItem(key);
      var obj = JSON.parse(data);
      return obj;
    },
    clearAll: function(){
      localStorage.clear();
    }
  }     
});



// Filters

// Newer Angular UI Filter
rprtr.filter('unique', ['$parse', function ($parse) {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [],
        get = angular.isString(filterOn) ? $parse(filterOn) : function (item) { return item; };

      var extractValueToCompare = function (item) {
        return angular.isObject(item) ? get(item) : item;
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
}]);


rprtr.factory('parseUniques', function($filter){
  return function($scope){
    var uniqueFilter = $filter('unique');
    console.log('getting uniques through service');
    
    $scope.uniqueDeclarations = uniqueFilter($scope.declarations); 
    
  };
});
