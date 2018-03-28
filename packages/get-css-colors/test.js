import test from 'ava'
import getCssColors from './'

const stringWithColors = 'foobar hsl(,,) HSLA(1, 1.111%, 1.1111%, .8) rgba(123, 123, 123, .8) #fff turtles rebeccapurple #123AAA'

test('get-css-colors', t => {
  t.deepEqual(
    getCssColors(stringWithColors),
    ['HSLA(1, 1.111%, 1.1111%, .8)', 'rgba(123, 123, 123, .8)', '#fff', 'rebeccapurple', '#123AAA']
  )
})
