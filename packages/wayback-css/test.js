const test = require('ava')
const waybackCss = require('.')

test('returns css from a wayback url', async (t) => {
  t.plan(4)

  const results = await waybackCss('johno.com', '20191221')

  t.truthy(results.css)
  t.truthy(results.styles)
  t.truthy(results.links)
  t.truthy(results.inline)
})
