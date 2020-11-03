const test = require('ava')

const { getStatsForFixture } = require('./util')

const FIXTURES = ['basscss', 'font-awesome', 'font-shorthand', 'stackoverflow']

FIXTURES.forEach((fixture) => {
  test(`matches snapshot for ${fixture}`, (t) => {
    const result = getStatsForFixture(fixture)

    t.snapshot(result)
  })
})
