
var Handlebars = require('handlebars');
var chartable = require('chartable');

module.exports = function(obj, max) {

  if (!obj) console.error('no uniques object!');

  var html;

  var data = [obj.total, obj.unique];

  var options = {
    width: 384,
    height: 240,
    yMax: max,
    yPadding: 20,
    ruleLabels: false,
    labels: ['Total', 'Unique']
  };

  html = chartable.barChart(data, options);

  return new Handlebars.SafeString(html);

};

