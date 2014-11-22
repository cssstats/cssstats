
var Handlebars = require('handlebars');

module.exports = function(array, width, height) {

  if (!Array.isArray(array)) return 'Not an Array';

  var svg = '';
  var d = '';
  var hx = 1;
  var vmax = 10;
  var width = width || 1024;
  var height = height || 512;
  var ruleInterval;

  hx = width / array.length;

  array.map(function(val) {
    if (val > vmax) {
      vmax = val;
    }
  });

  d = 'M0 ' + height + ' ';

  array.forEach(function(y, i) {
    // Bar chart
    //d += 'v -' + (height/vmax) * y + ' ' +'h ' + hx + ' V ' + height + ' h -' + hx +' m' + hx + ' 0 ';
    // Line graph
    d += 'L ' + (hx * i) + ' ' + (height - ((height/vmax) * y)) + ' ';
  });

  ruleInterval = height / 4;

  d += 'L ' + width + ' ' + height + 'z';

  svg = '<svg viewBox="0 0 ' + width + ' ' + height + '" fill="currentcolor" font-size="12" font-weight="bold">\n' +
        '  <path d="' + d + '"/>\n' +
        '  <g opacity="0.5">\n' +
        '    <path d="M0 0 H' + width + '" fill="none" stroke="currentcolor"/>\n' +
        '    <text y="16">' + vmax + '</text>\n' +
        '    <path d="M0 ' + ruleInterval + ' H' + width + '" fill="none" stroke="currentcolor"/>\n' +
        '    <text y="' + (ruleInterval + 16) + '">' + (0.75 * vmax) + '</text>\n' +
        '    <path d="M0 ' + (2 * ruleInterval) + ' H' + width + '" fill="none" stroke="currentcolor"/>\n' +
        '    <text y="' + (2 * ruleInterval + 16) + '">' + (0.5 * vmax) + '</text>\n' +
        '    <path d="M0 ' + (3 * ruleInterval) + ' H' + width + '" fill="none" stroke="currentcolor"/>\n' +
        '    <text y="' + (3 * ruleInterval + 16) + '">' + (0.25 * vmax) + '</text>\n' +
        '    <path d="M0 ' + (4 * ruleInterval) + ' H' + width + '" fill="none" stroke="currentcolor"/>\n' +
        '  </g>\n' +
        '</svg>\n';

  return new Handlebars.SafeString(svg);

};

