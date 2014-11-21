
var highlight = require('highlight.js');
var Handlebars = require('handlebars');

module.exports = function(code) {

  var obj = highlight.highlight('css', code);

  return new Handlebars.SafeString(obj.value);

};

