var test = require('ava')
var getCss = require('..')

var css = 'h1 { color: tomato; }'
var html = '<style>' + css + '</style><h1>Hello, world!</h1>'

test('should correctly extract css from raw html', async (t) => {
  t.plan(1)

  const result = await getCss('http://example.com/', null, html)

  t.deepEqual(css, result.css)
})
