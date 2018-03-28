import fs from 'fs'
import test from 'ava'
import pify from 'pify'
import isPresent from 'is-present'
import childProcess from 'child_process'

const expected = fs.readFileSync('expected.json', 'utf8')
const fixtureFile = 'fixture.css'
const outputFile = 'output.json'

test('crunches stats', async t => {
  t.plan(1)

  await pify(childProcess.execFile)('./cli.js', [fixtureFile, outputFile])
  const output = fs.readFileSync(outputFile, 'utf8')

  t.true(isPresent(output))
})
