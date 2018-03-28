import test from 'ava'
import hasAdjacentSiblingSelector from './'

const adjacentSiblingSelectors = [
  'li + li',
  '#foo .bar .baz + .baz'
]

const noAdjacentSiblingSelectors = [
  'foo',
  '#bar',
  'li > li'
]

test('returns true for adjacent sibling selectors', t => {
  t.plan(adjacentSiblingSelectors.length)

  adjacentSiblingSelectors.forEach(selector => {
    t.true(hasAdjacentSiblingSelector(selector))
  })
})

test('returns false when not an adjacent sibling selector', t => {
  t.plan(noAdjacentSiblingSelectors.length)

  noAdjacentSiblingSelectors.forEach(selector => {
    t.true(!hasAdjacentSiblingSelector(selector))
  })
})
