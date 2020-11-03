const test = require('ava')
var hasClassSelector = require('.')

var classSelectors = [
  '.foo',
  '#bar.foo',
  '.foo:after',
  '.foo::before',
  '[input="text"] .foo',
  'ul > li + li .baz',
]

var otherSelectors = ['#foo', 'a', '[input="text"]', 'a:visisted', 'li + li']

test('should return true if there is a class selector', (t) => {
  classSelectors.forEach(function (classSelector) {
    t.truthy(hasClassSelector(classSelector))
  })
})

test('should return false if there is no class selector', (t) => {
  otherSelectors.forEach(function (otherSelector) {
    t.truthy(!hasClassSelector(otherSelector))
  })
})

test('should return true if there is a class called foo', (t) => {
  classSelectors
    .filter(function (classSelector) {
      return classSelector.indexOf('foo') >= 0
    })
    .forEach(function (classSelector) {
      t.truthy(hasClassSelector(classSelector, 'foo'))
    })
})

test('should return false if there is no class called foo', (t) => {
  otherSelectors.forEach(function (otherSelector) {
    t.truthy(!hasClassSelector(otherSelector, 'foo'))
  })
})
