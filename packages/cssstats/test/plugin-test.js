const fs = require('fs')
const path = require('path')
const test = require('ava')
const postcss = require('postcss')
const cssstats = require('..')
const { fixture } = require('./util')

test('works as a postcss plugin', async (t) => {
  const result = await postcss().use(cssstats()).process(fixture('small'))
  const stats = result.messages[0].stats

  t.snapshot(stats)
})
