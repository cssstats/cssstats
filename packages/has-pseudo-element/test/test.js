var assert = require('assert');
var hasPseudoElement = require('..');

var pseudoElements = [
  ':selection',
  '::selection',
  'body:after',
  'body::after',
  '#some-id:after',
  '#some-id::after',
  '.some-selector > ul > li:before',
  '.some-selector > ul > li::before',
  'div::backdrop'
];

var noPseudoElements = [
  '.foo-bar',
  '.foo-bar:first-child'
];

describe('has-pseudo-element', function() {

  it('should return true when there is a pseudo element', function() {
    pseudoElements.forEach(function(pseudoElement) {
      assert.ok(hasPseudoElement(pseudoElement));
    });
  });

  it('should return false when there is no pseudo element', function() {
    noPseudoElements.forEach(function(noPseudoElement) {
      assert.ok(!hasPseudoElement(noPseudoElement));
    });
  });
});
