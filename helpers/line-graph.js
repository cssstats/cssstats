
var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

module.exports = function(array, width, height) {

  if (!Array.isArray(array)) return 'Not an Array';

  var template = Handlebars.compile(fs.readFileSync(path.join(__dirname, 'line-graph.handlebars'), 'utf8'));

  var svg;
  var xStep = 1;
  var yStep;
  var ymax = 1;
  var model = {};

  model.d = '';
  model.width = width || 1024;
  model.height = height || 512;
  model.rules = [];

  xStep = width / array.length;

  array.map(function(val) {
    if (val > ymax) {
      ymax = val;
    }
  });

  model.d = 'M0 ' + height + ' ';
  array.forEach(function(y, i) {
    model.d += 'L ' + (xStep * i) + ' ' + (model.height - ((model.height/ymax) * y)) + ' ';
  });
  model.d += 'L ' + model.width + ' ' + model.height + 'z';

  yStep = model.height / 4;
  for (var i = 0; i < 4; i++) {
    model.rules.push({
      y: yStep * i,
      textY: yStep * i + 16,
      value: ymax * (1 - (.25 * i))
    });
  }

  svg = template(model);

  return new Handlebars.SafeString(svg);

};

