var assert = require('assert')
var resolveUrl = require('../../utils/resolve-url')

describe('resolve-url', function() {
  it('should correctly resolve a .. relative link', function() {
    assert.equal(
      resolveUrl('http://foo.com/some/path', '../bar.css'),
      'http://foo.com/some/bar.css'
    )
  })

  it('should correctly resolve a .. relative link when the url has a trailing /', function() {
    assert.equal(
      resolveUrl('http://foo.com/some/path/', '../bar.css'),
      'http://foo.com/some/bar.css'
    )
  })

  it('should correctly resolve a relative link', function() {
    assert.equal(
      resolveUrl('http://foo.com/some/path', 'bar.css'),
      'http://foo.com/some/path/bar.css'
    )
  })

  it('should correctly return a full link', function() {
    assert.equal(
      resolveUrl('http://foo.com', 'http://foo.com/some/path/bar.css'),
      'http://foo.com/some/path/bar.css'
    )
  })

  it('should correctly resolve an absolute link', function() {
    assert.equal(
      resolveUrl('http://foo.com/some/path', '/bar.css'),
      'http://foo.com/bar.css'
    )
  })

  it('should correctly resolve a relative url from an html file', function() {
    assert.equal(
      resolveUrl('http://foo.bar/awesome/baz.html', 'baz.css'),
      'http://foo.bar/awesome/baz.css'
    )
  })

  it('should correctly resolve an absolute url from an html file', function() {
    assert.equal(
      resolveUrl('http://foo.bar/awesome/baz.html', '/baz.css'),
      'http://foo.bar/baz.css'
    )
  })
})
