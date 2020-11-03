# wayback-css

Get the css for a wayback machine url.

## Installation

```bash
npm install --save wayback-css
```

## Usage

```javascript
const waybackCss = require('wayback-css')

waybackCss('google.com', '20151221') // => YYYYMMDDhhss timestamp format
  .then(doStuff)
  .catch(handleError)
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with &lt;3 by John Otander ([@4lpine](https://twitter.com/4lpine)).
