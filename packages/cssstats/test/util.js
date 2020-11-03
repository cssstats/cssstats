const fs = require('fs')
const path = require('path')
const test = require('ava')
const postcss = require('postcss')
const cssstats = require('..')

function fixture(name) {
  return fs
    .readFileSync(path.join(__dirname, 'fixtures/' + name + '.css'), 'utf8')
    .toString()
    .trim()
}

module.exports.fixture = fixture
module.exports.getStatsForFixture = (fixtureName, options = {}) => {
  return cssstats(fixture(fixtureName), options)
}
