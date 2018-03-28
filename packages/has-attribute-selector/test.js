'use strict'

import test from 'ava'
import hasAttributeSelector from './'

const attributeSelectors = [
  '[hidden]',
  '[disabled]',
  '[type="string"]'
]

const noAttributeSelectors = [
  'foo',
  '#bar',
  'li > li',
  '[]'
]

test('should do something return true when an attribute selector exists', t => {
  t.plan(attributeSelectors.length)

  attributeSelectors.forEach(selector => {
    t.true(hasAttributeSelector(selector))
  })
})

test('should do something return false when no attribute selector exists', t => {
  t.plan(noAttributeSelectors.length)

  noAttributeSelectors.forEach(selector => {
    t.false(hasAttributeSelector(selector))
  })
})
