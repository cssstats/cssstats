'use strict'

module.exports = function hasAdjacentSiblingSelector(selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('has-adjacent-sibling-selector expects a string')
  }

  return /\+/.test(selector)
}
