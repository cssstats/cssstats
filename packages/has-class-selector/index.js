'use strict';

module.exports = function hasClassSelector(selector, selectorToCheck) {
  if (typeof selector != 'string' || (selectorToCheck && typeof selectorToCheck != 'string')) {
    throw new TypeError('has-class-selector expected a string')
  }

  if (selectorToCheck) {
    var matcher = new RegExp('\\.' + selectorToCheck);
    return matcher.test(selector)
  }

  return /\./.test(selector)
}
