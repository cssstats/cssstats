import test from 'ava'
import waybackCss from './'

test('returns css from a wayback url', async t => {
  t.plan(4)

  const results = await waybackCss('johnotander.com', '20151221')

  t.truthy(results.css)
  t.truthy(results.styles)
  t.truthy(results.links)
  t.truthy(results.inline)
})
