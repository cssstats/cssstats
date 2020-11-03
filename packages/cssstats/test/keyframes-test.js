const test = require('ava')

const { getStatsForFixture } = require('./util')

test('does not return keyframes stops in selectors', (t) => {
  const result = getStatsForFixture('keyframes')

  t.deepEqual(result.selectors.values, ['.a', '.b'])
})

test('returns proper stats in and after a keyframe', (t) => {
  const result = getStatsForFixture('keyframes')

  t.deepEqual(result.declarations.properties.color.length, 5)
})
