
//var htmlparser = require('html-parser');
var cheerio = require('cheerio');
var q = require('q');

module.exports = {

  getLinks: function(html, url) {

    var deferred = q.defer();

    var links = [];
    if (!html) deferred.reject('No HTML');

    function fixLinks(links) {
      if (!links.length) return false;
      links.forEach(function(link, i) {
        if (!link.match(/^(http|https)/g)) {
          if (link.match(/^\/[^\/]/g)) {
            links[i] = url + link;
          } else if (link.match(/^\/\//g)) {
            links[i] = 'http:' + link;
          } else if (link.match(/^\.\./g)) {
            links[i] = url + link.replace('..', '');
          } else {
            links[i] = url + link;
          }
        }
        if (i+1 >= links.length) {
          deferred.resolve(links);
        }
      });
    }

    // Cheerio replacement
    var $ = cheerio.load(html);
    
    $('[rel=stylesheet]').each(function() {
      var link = $(this).attr('href');
      console.log(link);
      links.push(link);
    });

    if (links.length) {
      fixLinks(links);
    } else {
      deferred.resolve(links);
      //deferred.reject('Error: No CSS links found');
    }

    return deferred.promise;

  },

  getStyles: function(html) {

    if (!html) return;

    var $ = cheerio.load(html);
    var styles = '';

    $('style').each(function() {
      styles += $(this).text();
    });

    return styles;

  },

  getTitle: function(html) {

    if (!html) return;

    var $ = cheerio.load(html);

    return $('title').text();

  }

};

