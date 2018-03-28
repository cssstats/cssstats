import test from 'ava'
import hasGradient from './'

const WITH_GRADIENTS = [
  'linear-gradient(white, tomato)',
  'radial-gradient(hotpink, rebeccapurple)',
  'linear-gradient(blue, rgba(0, 0, 0, .4)'
]

const WITHOUT_GRADIENTS = [
  'red',
  'url(/my/img.png)'
]

test('returns true with a gradient', t => {
  t.plan(WITH_GRADIENTS.length)

  WITH_GRADIENTS.forEach(gradient => t.true(hasGradient(gradient)))
})

test('returns false without a gradient', t => {
  t.plan(WITHOUT_GRADIENTS.length)

  WITHOUT_GRADIENTS.forEach(gradient => t.false(hasGradient(gradient)))
})
