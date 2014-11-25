
var request = require('request');
var q = require('q');
var parseHtml = require('./parse-html');

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

    var css = '';
    var title = '';
    var index = 0;
    var length = 0;

    var deferred = q.defer();

    function handleResolve(data) {
      index++;
      css += data;
      if (index >= length) {
        deferred.resolve(css);
      }
    }

    function getLinkContents(link) {
      var def = q.defer();
      request({ url: link, timeout: 5000, gzip: true }, function(error, response, body) {
        if (error) {
          def.reject(error);
        } else {
          def.resolve(body);
        }
      });
      return def.promise;
    }

    request.get({ url: url, timeout: 5000 }, function(error, response, body) {
      if (error) {
        return deferred.reject(error);
      }
      var title = parseHtml.getTitle(body);
      css += styles = parseHtml.getStyles(body);
      parseHtml.getLinks(body, url)
        .then(function(cssLinks) {
          length += cssLinks.length;
          if (!cssLinks.length) {
            handleResolve(null);
            return;
          } else {
            cssLinks.forEach(function(cssLink, i) {
              getLinkContents(cssLink)
                .then(function(data) {
                  handleResolve(data);
                });
            });
          }
        })
        .catch(function(error) {
          deferred.reject(error);
        });
    });

    return deferred.promise;

  }

};

