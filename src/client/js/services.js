// Local Storage Factory
angular.module('rprtr').factory('storage', function(){            
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

// Filter out vendor prefixes
angular.module('rprtr').filter('removePrefixes', function(){
  return function(arr) {
    var newArr = [];
    if(angular.isArray(arr)){
      for (i = 0; i < arr.length; i++){
        // Check to make sure it's not prefixed with a hyphen
        if(!arr[i].value.match(/^-/)) console.log(arr[i].value);
        newArr.push(arr[i]);
      };
      return newArr;
    };
  };
});

