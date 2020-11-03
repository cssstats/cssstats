# has-element-selector

Check whether a given selector contains an element

## Installation

```bash
npm install --save has-element-selector
```

## Usage

```javascript
var hasElementSelector = require('has-element-selector')

hasElementSelector('input') // => true
hasElementSelector('#foo ul.bar') // => true
hasElementSelector('#foo .bar.baz') // => false
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
