
var request = require('request');
var q = require('q');

var getCss = require('get-css');

module.exports = {

  getCssFromLink: function(link) {

    var deferred = q.defer();

    request({ url: link, timeout: 5000 }, function(error, response, body) {
      if (error) {
        deferred.reject(error);
      } else {
        deferred.resolve(body);
      }
    });

    return deferred.promise;

  },

  getCssFromUrl: function(url) {

    var deferred = q.defer();

    getCss(url)
      .then(function(response) {
        deferred.resolve(response);
      })
      .catch(function(error) {
        deferred.reject(error);
      });

    return deferred.promise;

  }

};

