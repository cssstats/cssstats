'use strict';

var pseudoElements = require('pseudo-elements');

module.exports = function hasPseudoElement(selector) {
  if (typeof selector != 'string') {
    throw new TypeError('has-pseudo-element expects a string');
  }

  var pseudoElementRegex = new RegExp('::?' + pseudoElements().join('|::?'), 'ig');
  return pseudoElementRegex.test(selector);
}
