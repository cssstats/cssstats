# get-css-colors

Get css colors from a string, including rgb, rgba, hsl, hsla, hex, named, etc.

## Installation

```bash
npm install --save get-css-colors
```

## Usage

```javascript
const getCssColors = require('get-css-colors')

getCssColors('foobar hsl(,,) #fff turtles rebeccapurple')
// => ['#fff', 'rebeccapurple']
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).
