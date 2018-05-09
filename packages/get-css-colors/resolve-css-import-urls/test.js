import test from 'ava'
import resolveCssImports from './'

test('handles import statements', t => {
  t.deepEqual(
    resolveCssImports('http://foo.com/my-css.css', '@import url(bar.css); @import url("css/baz.css");'),
    ['http://foo.com/bar.css', 'http://foo.com/css/baz.css']
  )
})

test('handles relative path import statements', t => {
  t.deepEqual(
    resolveCssImports('http://foo.com/css/my-css.css', "@import url('../bar.css');"),
    ['http://foo.com/bar.css']
  )
});

test('returns an empty array without imports', t => {
  t.deepEqual(resolveCssImports('http://foo.com', 'bar'), [])
})

test('handles single quoted urls', t => {
  t.deepEqual(
    resolveCssImports('http://foo.com/css/my-css.css', "@import '../bar.css' print;"),
    ['http://foo.com/bar.css']
  )
})

test('handles double quoted urls', t => {
  t.deepEqual(
    resolveCssImports('http://foo.com/css/my-css.css', "@import \"bar.css\" projection;"),
    ['http://foo.com/css/bar.css']
  )
})
