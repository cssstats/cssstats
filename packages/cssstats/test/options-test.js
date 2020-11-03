const test = require('ava')

const { getStatsForFixture } = require('./util')

test('does not include media queries when set to false', (t) => {
  const result = getStatsForFixture('small', { mediaQueries: false })

  t.falsy(result.mediaQueries.contents)
})
