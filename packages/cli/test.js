const test = require('ava')
const fs = require('fs')
const pify = require('pify')
const isPresent = require('is-present')
const childProcess = require('child_process')

const fixtureFile = 'packages/cli/fixture.css'
const outputFile = 'packages/cli/output.json'

test('writes stats to file', async (t) => {
  t.plan(1)

  await pify(childProcess.execFile)('./packages/cli/cli.js', [
    fixtureFile,
    outputFile,
  ])
  const output = fs.readFileSync(outputFile, 'utf8')

  t.true(isPresent(output))
})
