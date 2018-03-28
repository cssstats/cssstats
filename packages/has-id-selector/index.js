'use strict'

module.exports = function hasIdSelector(selector, selectorToCheck) {
  if (typeof selector != 'string' || (selectorToCheck && typeof selectorToCheck != 'string')) {
    throw new TypeError('has-id-selector expected a string')
  }

  if (selectorToCheck) {
    var matcher = new RegExp('#' + selectorToCheck);
    return matcher.test(selector)
  }

  return /#/.test(selector)
}
