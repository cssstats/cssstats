const test = require('ava')

const { getStatsForFixture } = require('./util')

test('returns proper file sizes for the small fixture', (t) => {
  const result = getStatsForFixture('small')

  t.is(result.size, 885)
  t.is(result.gzipSize, 367)
  t.is(result.humanizedGzipSize, '367B')
})

test('returns proper file sizes for basscss fixture', (t) => {
  const result = getStatsForFixture('basscss')

  t.is(result.size, 18858)
  t.is(result.gzipSize, 3546)
  t.is(result.humanizedGzipSize, '3KB')
})
