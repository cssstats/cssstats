import test from 'ava'
import isImportant from './'

const importantValues = [
  'blue !important',
  'thin solid #fafafa !important',
  'transparent !important'
]

const unimportantValues = [
  'green',
  'thin solid #fafafa',
  'url(http://foo.bar/important.jpg)'
]

test('it returns true for important values', t => {
  t.plan(importantValues.length)

  importantValues.forEach(val => t.truthy(isImportant(val)))
})

test('it returns false for unimportant values', t => {
  t.plan(unimportantValues.length)

  unimportantValues.forEach(val => t.falsy(isImportant(val)))
})
