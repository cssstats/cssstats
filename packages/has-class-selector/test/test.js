var assert = require('assert')
var hasClassSelector = require('..')

var classSelectors = [
  '.foo',
  '#bar.foo',
  '.foo:after',
  '.foo::before',
  '[input="text"] .foo',
  'ul > li + li .baz'
]

var otherSelectors = [
  '#foo',
  'a',
  '[input="text"]',
  'a:visisted',
  'li + li'
]

describe('has-class-selector', function() {

  it('should return true if there is a class selector', function() {
    classSelectors.forEach(function(classSelector) {
      assert.ok(hasClassSelector(classSelector))
    })
  })

  it('should return false if there is no class selector', function() {
    otherSelectors.forEach(function(otherSelector) {
      assert.ok(!hasClassSelector(otherSelector))
    })
  })

  it('should return true if there is a class called foo', function() {
    classSelectors
      .filter(function(classSelector){
        return classSelector.indexOf('foo') >= 0;
      })
      .forEach(function(classSelector) {
        assert.ok(hasClassSelector(classSelector, 'foo'))
      })
  })

  it('should return false if there is no class called foo', function() {
    otherSelectors.forEach(function(otherSelector) {
      assert.ok(!hasClassSelector(otherSelector, 'foo'))
    })
  })
})
