const test = require('ava')

const { getStatsForFixture } = require('./util')

test('handles custom properties', (t) => {
  const result = getStatsForFixture('github').declarations.properties.color

  t.snapshot(result)
})

test('does not handle custom properties when told not to', (t) => {
  const result = getStatsForFixture('github', {
    preserveCustomProperties: true,
  }).declarations.properties.color

  t.snapshot(result)
})
