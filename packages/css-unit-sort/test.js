const test = require('ava')
const cssUnitSort = require('.')

test('sorts units', (t) => {
  const result = cssUnitSort([
    '2rem',
    'inherit',
    'small',
    '0',
    '12px',
    '20px',
    '60px',
    '1.5em',
  ])

  t.snapshot(result)
})
