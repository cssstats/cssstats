
var cssstats = require('cssstats');
var beautify = require('cssbeautify');


function parseUniques(stats) {

  if (!stats) return false;

  var uniques = {};

  uniques.fontSize = stats.declarations.unique.fontSize;
  uniques.fontFamily = stats.declarations.unique.fontFamily;
  uniques.width = stats.declarations.unique.width;
  uniques.height = stats.declarations.unique.height;
  uniques.color = stats.declarations.unique.color;
  uniques.backgroundColor = stats.declarations.unique.backgroundColor;
  uniques.margin = stats.declarations.unique.margin;
  uniques.padding = stats.declarations.unique.padding;
  uniques.borderRadius = stats.declarations.unique.borderRadius;

  uniques.fontSizeSorted = sortFontSizes(stats);

  return uniques;

}

function parseSpecificity(selectors) {
  if (!selectors.length) return;
  var array = [];
  selectors.forEach(function(selector) {
    array.push(selector.specificity_10);
  });
  return array;
}

function fontSizeToPx(value) {
  var raw;

  if (typeof value !== 'string') {
    value = value.toString();
  }

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

function sortFontSizes(stats) {
  var sortBy = function(a, b) {
    c = fontSizeToPx(a.value);
    d = fontSizeToPx(b.value);
    if (c > d) {
      return -1;
    } else {
      return 1;
    }
  }
  var sorted = stats.declarations.unique.fontSize;
  if (!sorted) return false;
  return sorted.sort(sortBy);
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
    safe: true
  });
  if (!model.stats) {
    console.log('no stats');
  }
  model.uniques = parseUniques(model.stats);
  model.specificityGraph = parseSpecificity(model.stats.selectors);
  model.rulesizeGraph = rulesizeGraph(model.stats.rules);

  model.uniquesGraph = uniquesGraph(model.stats);

  return model;

};
