var test = require('ava')
var createLink = require('../utils/create-link')

test('should create the correct link object', (t) => {
  t.deepEqual(createLink('../bar.css', 'http://foo.com/css/my-css.css'), {
    link: '../bar.css',
    url: 'http://foo.com/bar.css',
    css: '',
  })
})

test('should correctly resolve full url links', (t) => {
  t.deepEqual(
    createLink('http://foo.com/bar.css', 'http://foo.com/css/my-css.css'),
    { link: 'http://foo.com/bar.css', url: 'http://foo.com/bar.css', css: '' }
  )
})
