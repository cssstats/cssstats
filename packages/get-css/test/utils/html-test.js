var assert = require('assert')
var getCss = require('../../')

var css = 'h1 { color: tomato; }'
var html = '<style>' + css + '</style><h1>Hello, world!</h1>'

describe('html', function() {
  it('should correctly extract css from raw html', function() {
    getCss('http://example.com/', null, html).then(function(response) {
      asset.deepEqual(css, response.css)
    })
  })
})
