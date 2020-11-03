# has-adjacent-sibling-selector

Check if a selector string has an adjacent sibling selector.

## Installation

```bash
npm install --save has-adjacent-sibling-selector
```

## Usage

```javascript
var hasAdjacentSiblingSelector = require('has-adjacent-sibling-selector')

hasAdjacentSiblingSelector('li + li') // => true
hasAdjacentSiblingSelector('li > li') // => false
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
