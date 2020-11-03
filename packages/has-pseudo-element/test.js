var test = require('ava')
var hasPseudoElement = require('.')

var pseudoElements = [
  ':selection',
  '::selection',
  'body:after',
  'body::after',
  '#some-id:after',
  '#some-id::after',
  '.some-selector > ul > li:before',
  '.some-selector > ul > li::before',
  'div::backdrop',
]

var noPseudoElements = ['.foo-bar', '.foo-bar:first-child']

test('should return true when there is a pseudo element', (t) => {
  pseudoElements.forEach(function (pseudoElement) {
    t.truthy(hasPseudoElement(pseudoElement))
  })
})

test('should return false when there is no pseudo element', (t) => {
  noPseudoElements.forEach(function (noPseudoElement) {
    t.truthy(!hasPseudoElement(noPseudoElement))
  })
})
