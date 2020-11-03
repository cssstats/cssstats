var test = require('ava')
var resolveUrl = require('../utils/resolve-url')

test('should correctly resolve a .. relative link', (t) => {
  t.deepEqual(
    resolveUrl('http://foo.com/some/path', '../bar.css'),
    'http://foo.com/some/bar.css'
  )
})

test('should correctly resolve a .. relative link when the url has a trailing /', (t) => {
  t.deepEqual(
    resolveUrl('http://foo.com/some/path/', '../bar.css'),
    'http://foo.com/some/bar.css'
  )
})

test('should correctly resolve a relative link', (t) => {
  t.deepEqual(
    resolveUrl('http://foo.com/some/path', 'bar.css'),
    'http://foo.com/some/path/bar.css'
  )
})

test('should correctly return a full link', (t) => {
  t.deepEqual(
    resolveUrl('http://foo.com', 'http://foo.com/some/path/bar.css'),
    'http://foo.com/some/path/bar.css'
  )
})

test('should correctly resolve an absolute link', (t) => {
  t.deepEqual(
    resolveUrl('http://foo.com/some/path', '/bar.css'),
    'http://foo.com/bar.css'
  )
})

test('should correctly resolve a relative url from an html file', (t) => {
  t.deepEqual(
    resolveUrl('http://foo.bar/awesome/baz.html', 'baz.css'),
    'http://foo.bar/awesome/baz.css'
  )
})

test('should correctly resolve an absolute url from an html file', (t) => {
  t.deepEqual(
    resolveUrl('http://foo.bar/awesome/baz.html', '/baz.css'),
    'http://foo.bar/baz.css'
  )
})
