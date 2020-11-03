const test = require('ava')
const hasElementSelector = require('.')

test('has-element-selector', (t) => {
  t.plan(2)

  t.true(hasElementSelector('#foo.bar li:first-child'))
  t.false(hasElementSelector('#foo.bar.li .ol.input'))
})
