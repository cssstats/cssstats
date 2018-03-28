'use strict'

var pseudoClasses = require('pseudo-classes')

module.exports = function hasPseudoClass (selector) {
  if (typeof selector !== 'string') {
    throw new TypeError('has-pseudo-class expected a string')
  }

  var pseudoClassRegex = new RegExp(':' + pseudoClasses().join('|:'), 'ig')
  return pseudoClassRegex.test(selector)
}
