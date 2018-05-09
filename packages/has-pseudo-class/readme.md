# has-pseudo-class [![Build Status](https://secure.travis-ci.org/cssstats/has-pseudo-class.png?branch=master)](https://travis-ci.org/cssstats/has-pseudo-class)

Determine whether a selector contains a pseudo-class.

## Installation

```bash
npm install --save has-pseudo-class
```

## Usage

```javascript
var hasPseudoClass = require('has-pseudo-class')

hasPseudoClass('.some-selector:first-child')  // => true
hasPseudoClass('.some-selector:not(.active)')  // => true
hasPseudoClass('.some-selector') // => false
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

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
