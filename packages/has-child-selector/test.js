const test = require('ava')
const hasChildSelector = require('.')

const childSelectors = ['ul>li', '.foo > .bar']

const noChildSelectors = ['foo', '#bar', 'li + li', '[]']

test('returns true with child selectors', (t) => {
  t.plan(childSelectors.length)

  childSelectors.forEach((selector) => {
    t.true(hasChildSelector(selector))
  })
})

test('returns fals with no child selectors', (t) => {
  t.plan(noChildSelectors.length)

  noChildSelectors.forEach((selector) => {
    t.false(hasChildSelector(selector))
  })
})
