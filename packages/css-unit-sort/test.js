import test from 'ava'
import cssUnitSort from './'

test('sorts units', t => {
  t.deepEqual(
    cssUnitSort([
      '2rem',
      'inherit',
      'small',
      '0',
      '12px',
      '20px',
      '60px',
      '1.5em'
    ]),
    ['60px', '2rem', '1.5em', '20px', 'inherit', 'small', '12px', '0']
  )
})
