
var Handlebars = require('handlebars');
var chartable = require('chartable');

module.exports = function(array, width, height) {

  if (!Array.isArray(array)) return 'Not an Array';

  var html = chartable.lineGraph(array, { width: width, height: height });

  return new Handlebars.SafeString(html);

};

