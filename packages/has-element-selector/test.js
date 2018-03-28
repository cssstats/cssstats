import test from 'ava'
import hasElementSelector from './'

test('has-element-selector', t => {
  t.plan(2)

  t.true(hasElementSelector('#foo.bar li:first-child'))
  t.false(hasElementSelector('#foo.bar.li .ol.input'))
})
