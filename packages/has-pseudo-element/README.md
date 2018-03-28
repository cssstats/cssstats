# has-pseudo-element

[![Build Status](https://secure.travis-ci.org/cssstats/has-pseudo-element.png?branch=master)](https://travis-ci.org/cssstats/has-pseudo-element)

Determine whether a selector contains a pseudo-element.

## Installation

```bash
npm install --save has-pseudo-element
```

## Usage

```javascript
var hasPseudoElement = require('has-pseudo-element');

hasPseudoElement('.some-selector:after');   // => true
hasPseudoElement('.some-selector::after');  // => true
hasPseudoElement('.some-selector');         // => false
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

This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
