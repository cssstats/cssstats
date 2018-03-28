'use strict'

module.exports = function hasChildSelector (selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('has-child-selector expects a string')
  }

  return />/.test(selector)
}
