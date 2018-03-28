# has-child-selector [![Build Status](https://secure.travis-ci.org/cssstats/has-child-selector.png?branch=master)](https://travis-ci.org/cssstats/has-child-selector)

Check if a selector string has a child selector.

## Installation

```bash
npm install --save has-child-selector
```

## Usage

```javascript
var hasChildSelector = require('has-child-selector')

hasChildSelector('ul > li')  // => true
hasChildSelector('li + li')  // => false
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
