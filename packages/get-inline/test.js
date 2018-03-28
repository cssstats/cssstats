import test from 'ava'
import getInline from './'

const URL = 'http://stack.formidable.com/radium/'

test('get-inline does something awesome', async t => {
  const inlineStyles = await getInline(URL)
  t.truthy(inlineStyles)
})
