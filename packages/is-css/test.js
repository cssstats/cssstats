import test from 'ava'
import isCss from './'

const cssPaths = [
  'foo/file.css',
  'src/foo/bar/file.CSS',
  'http://foo.com/bar.css'
]

const nonCssPaths = [
  'foo/filecss',
  'file',
  'file.scss'
]

test('returns true for css files', t => {
  t.plan(cssPaths.length)

  cssPaths.forEach(file => t.truthy(isCss(file)))
})

test('returns false for non css files', t => {
  t.plan(nonCssPaths.length)

  nonCssPaths.forEach(file => t.falsy(isCss(file)))
})
