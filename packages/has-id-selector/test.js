var test = require('ava')
var hasIdSelector = require('.')

var idSelectors = [
  '.foo #bar',
  '#bar.foo',
  '#bar::after',
  '#bar:after',
  '[input="text"] #foo',
  'ul > li + li #baz',
  'element#baz'
]

var otherSelectors = [
  '.foo',
  'a',
  '[input="text"]',
  'a:visisted',
  'li + li',
  '[href="#anchor"]'
]

  test('should return true if there is an id selector', t => {
    idSelectors.forEach(function(idSelector) {
      t.truthy(hasIdSelector(idSelector))
    })
  })

  test('should return false if there is no id selector', t => {
    otherSelectors.forEach(function(otherSelector) {
      t.truthy(!hasIdSelector(otherSelector))
    })
  })

  test('should return true if there is an id called bar', t => {
    idSelectors
      .filter(function(idSelector) {
        return idSelector.indexOf('bar') >= 0
      })
      .forEach(function(idSelector) {
        t.truthy(hasIdSelector(idSelector, 'bar'))
      })
  })

  test('should return false if there is no id selector called bar', t => {
    otherSelectors.forEach(function(otherSelector) {
      t.truthy(!hasIdSelector(otherSelector, 'bar'))
    })
  })
