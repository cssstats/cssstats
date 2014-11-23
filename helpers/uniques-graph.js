
var Handlebars = require('handlebars');

module.exports = function(obj, max) {

  if (!obj) console.error('no uniques object!');

  var svg;
  var width = 256;
  var height = 240;
  var padY = 20;

  svg = '<svg viewBox="0 0 ' + width + ' ' + (height + 2 * padY) + '" fill="currentcolor" font-weight="bold">\n' +
        '  <defs>\n' +
        '    <pattern id="hash" x="0" y="0" width="8" height="8"' +
          ' patternUnits="userSpaceOnUse" patternTransform="rotate(45), scale(2)">\n' +
        '      <rect width="8" height="8" fill="white"/>\n' +
        '      <path d="M0 1 H16 M0 5 H16 M0 9 H16 M0 13 H16" fill="none" stroke="currentcolor"/>\n' +
        '    </pattern>\n' +
        '  </defs>\n' +
        '  <g>\n' +
        '    <path d="M0 ' + padY + ' H' + width + '" fill="none" stroke="currentcolor" opacity="0.5"/>\n' +
        '    <path d="M0 ' + (0.25 * height + padY) + ' H' + width + '" fill="none" stroke="currentcolor" opacity="0.5"/>\n' +
        '    <path d="M0 ' + (0.5 * height + padY) + ' H' + width + '" fill="none" stroke="currentcolor" opacity="0.5"/>\n' +
        '    <path d="M0 ' + (0.75 * height + padY) + ' H' + width + '" fill="none" stroke="currentcolor" opacity="0.5"/>\n' +
        '    <path d="M0 ' + (height + padY) + ' H' + width + '" fill="none" stroke="currentcolor" opacity="0.5"/>\n' +
        '  </g>\n' +
        '  <rect x="20" y="' + (height - (obj.percentTotal * height) + padY) +
          '" width="96" height="' + (obj.percentTotal * height) + '"/>\n' +
        '  <text x="66" y="' + (height - (obj.percentTotal * height) + padY - 6) +
          '" text-anchor="middle">' + obj.total + '</text>\n' +
        '  <rect x="140" y="' + (height - (obj.percentUnique * height) + padY) +
          '" width="96" height="' + (obj.percentUnique * height) + '" fill="url(#hash)" opacity="0.75" stroke="currentcolor" stroke-width="2" />\n' +
        '  <text x="190" y="' + (height - (obj.percentUnique * height) + padY - 6) +
          '" text-anchor="middle">' + obj.unique + '</text>\n' +
        '  <text x="66" y="' + (height + 2 * padY - 3) + '" text-anchor="middle">Total</text>\n' +
        '  <text x="190" y="' + (height + 2 * padY - 3) + '" text-anchor="middle">Unique</text>\n' +
        '</svg>';

  return new Handlebars.SafeString(svg);

};

