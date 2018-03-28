'use strict'

var parse = require('css-selector-tokenizer').parse

module.exports = function hasElementSelector (selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('has-element-selector expected a string')
  }

  return parse(selector).nodes.reduce(function (a, b) {
    return a.concat(b.nodes)
  }, []).reduce(function (a, b) {
    if (b.type === 'element') {
      return true
    }

    return a || false
  }, false)
}
