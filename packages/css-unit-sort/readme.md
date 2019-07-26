# css-unit-sort [![Build Status](https://secure.travis-ci.org/cssstats/css-unit-sort.svg?branch=master)](https://travis-ci.org/cssstats/css-unit-sort) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Sort css values no matter the unit.
Originally [written](https://github.com/cssstats/cssstats/blob/16fe37c96623fd3cdb24bd302ef6f6e93826af0f/controllers/stats.js#L98) by [@jxnblk](https://twitter.com/jxnblk).

## Installation

```bash
npm i -S css-unit-sort
```

## Usage

```javascript
const cssUnitSort = require('css-unit-sort')

cssUnitSort(['2rem', 'inherit', 'small', '12px', '20px', '60px', '1.5em']) // => ['60px', '2rem', '1.5em', '20px', 'inherit', 'small', '12px']
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

---

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
