# is-css [![Build Status](https://secure.travis-ci.org/cssstats/is-css.svg?branch=master)](https://travis-ci.org/cssstats/is-css) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Check if a path or url points to a css file.

## Installation

```bash
npm install --save is-css
```

## Usage

```javascript
const isCss = require('is-css')

isCss('http://foo.bar/css-file.css')  // => true
isCss('some/path/to/a/css-file.css')  // => true
isCss('yikes/a/preprocessor.scss') // => false
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
