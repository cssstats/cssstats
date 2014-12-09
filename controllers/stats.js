
var cssstats = require('css-statistics');
var beautify = require('cssbeautify');
var tinycolor = require('tinycolor2');

function parseDeclarations(declarations, indexes) {
  var array = [];
  if (!indexes) return [];
  indexes.forEach(function(i) {
    array.push(declarations[i]);
  });
  return array;
}

function stripImportant(str) {
  return str.replace(/ *!important *$/, "");
}

// Converts color property to HSL and sums the components together
// to make a numeric value that can be compared while sorting.
function colorPropertyToNumber(colorProperty) {
  // Keywords like inherit and transparent and anything not recognized
  // will be parsed into hsl(0,0,0), which is nice as it will then sort
  // at the beginning.
  var color = tinycolor(stripImportant(colorProperty.value)).toHsl();
  // Hue is in degrees: 0..360
  // Saturation and Lightness are fractions: 0..1
  // Alpha is a fraction: 0..1
  return color.h*100*100 + color.s*100*100 + color.l*100 + color.a;
}

// Sorts array in-place by comparing the values transformed by given function.
function sortBy(array, fn) {
  return array.sort(function(aOrig, bOrig){
    var a = fn(aOrig);
    var b = fn(bOrig);
    return (a > b) ? 1 : (a < b ? -1 : 0);
  });
}

function sortColors(array) {
  sortBy(array, colorPropertyToNumber);
}

function parseUniques(stats, sorted) {

  if (!stats) return false;

  var uniques = {};

  uniques.fontSize = parseDeclarations(stats.declarations.all, stats.declarations.unique.fontSize);
  uniques.fontFamily = parseDeclarations(stats.declarations.all, stats.declarations.unique.fontFamily);
  uniques.width = parseDeclarations(stats.declarations.all, stats.declarations.unique.width);
  uniques.height = parseDeclarations(stats.declarations.all, stats.declarations.unique.height);
  uniques.color = parseDeclarations(stats.declarations.all, stats.declarations.unique.color);
  uniques.backgroundColor = parseDeclarations(stats.declarations.all, stats.declarations.unique.backgroundColor);
  uniques.margin = parseDeclarations(stats.declarations.all, stats.declarations.unique.margin);
  uniques.padding = parseDeclarations(stats.declarations.all, stats.declarations.unique.padding);
  uniques.borderRadius = parseDeclarations(stats.declarations.all, stats.declarations.unique.borderRadius);
  uniques.fontSize = parseDeclarations(stats.declarations.all, stats.declarations.unique.fontSize);

  if (sorted) {
    sortColors(uniques.color);
    sortColors(uniques.backgroundColor);
    sortFontSizes(uniques.fontSize);
  }

  return uniques;

}

function parseSpecificity(selectors) {
  if (!selectors.length) return;
  var array = [];
  selectors.forEach(function(selector) {
    var values = selector.specificity.split(',');
    var a = parseInt(values[0], 10) * 1000;
    var b = parseInt(values[1], 10) * 100;
    var c = parseInt(values[2], 10) * 10;
    var d = parseInt(values[3], 10);
    if (a > 10000) a = 10000;
    if (b > 1000) b = 1000;
    if (c > 100) c = 100;
    if (d > 10) d = 10;
    array.push(a + b + c + d);
  });
  return array;
}

function fontSizeToPx(value) {
  var raw;
  raw = parseFloat(value, 10);
  if (value.match(/px$/)) {
    return raw;
  }
  if (value.match(/em$/)) {
    return raw * 16;
  }
  if (value.match(/%$/)) {
    return raw * .16;
  }
  switch (value) {
    case 'inherit':
      return 16;
    case 'xx-small':
      return 9;
    case 'x-small':
      return 10;
    case 'small':
      return 13;
    case 'medium':
      return 16;
    case 'large':
      return 18;
    case 'x-large':
      return 24;
    case 'xx-large':
      return 32;
    case 'small':
      return 13;
    case 'larger':
      return 19;
    default:
      return 1024;
  }
}

function sortFontSizes(fontSizes) {
  var sortBy = function(a, b) {
    c = fontSizeToPx(a.value);
    d = fontSizeToPx(b.value);
    if (c > d) {
      return -1;
    } else {
      return 1;
    }
  };

  return fontSizes.sort(sortBy);
}

function parsePropertiesBreakdown(stats) {
  if (!stats) return false;
  var result = [];
  var total = stats.declarations.all.length;
  var properties = stats.aggregates.properties;
  var otherSum = 0;
  if (!properties.length) return false;
  properties.forEach(function(property) {
    var obj = {};
    obj.property = property;
    obj.percentage = (stats.declarations.byProperty[property].length / total * 100);
    if (obj.percentage < 2) {
      otherSum += obj.percentage;
    } else {
      result.push(obj);
    }
  });
  if (!result.length) return false;
  result = result.sort(function(a,b) { return b.percentage - a.percentage });
  result.push({ property: 'other', percentage: otherSum });
  result.forEach(function(property) {
    property.percentagePretty = property.percentage.toFixed(2);
  });
  return result;
}

function uniquesGraph(stats) {
  var obj = {};
  obj.max = 0;
  var keys = ['margin', 'padding', 'width', 'height', 'color', 'backgroundColor', 'float', 'display', 'position'];
  keys.forEach(function(key) {
    obj[key] = {};
    if (!stats.declarations.byProperty[key]) {
      obj[key].total = 0;
      obj[key].unique = 0;
    } else {
      obj[key].total = stats.declarations.byProperty[key].length;
      obj[key].unique = stats.declarations.unique[key].length;
      if (obj[key].total > obj.max) {
        obj.max = obj[key].total;
      }
    }
  });
  keys.forEach(function(key) {
    if (!obj[key]) return false;
    obj[key].percentTotal = obj[key].total / obj.max;
    obj[key].percentUnique = obj[key].unique / obj.max;
  });
  return obj;
}

function rulesizeGraph(rules) {
  var array = [];
  rules.forEach(function(rule) {
    if (!rule.declarations) return false;
    array.push(rule.declarations.length);
  });
  return array;
}

module.exports = function(obj) {

  var model = obj;
  model.cssPretty = beautify(obj.css);

  model.stats = cssstats(obj.css, {
    silent: true
  });
  if (!model.stats) {
    console.log('no stats');
  }
  model.uniques = parseUniques(model.stats, model.sorted);
  model.specificityGraph = parseSpecificity(model.stats.selectors);
  model.rulesizeGraph = rulesizeGraph(model.stats.rules);

  model.uniquesGraph = uniquesGraph(model.stats);

  return model;

};

