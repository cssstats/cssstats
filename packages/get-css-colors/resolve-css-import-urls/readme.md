# resolve-css-import-urls [![Build Status](https://travis-ci.org/cssstats/resolve-css-import-urls.svg?branch=master)](https://travis-ci.org/cssstats/resolve-css-import-urls) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Parse css import statements (`@import url(bar.css)`) in a string and return the full urls (`http://foo.com/bar.css`).

Support for the following `@import` [syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/@import):

```css
@import url("fineprint.css") print;
@import 'custom.css' projection;
@import "custom.css";
```

TODO: Support the following

```css
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);
@import url("bluish.css") projection, tv;
```

## Installation

```
npm i --save resolve-css-import-urls
```

## Usage

```javascript
const resolveCssImportUrls = require('resolve-css-import-urls')

resolveCssImportUrls('http://example.com/css', 'url(foo.css); lksjhlksjhdf url(../bar.css);')
// => ['http://example.com/css/foo.css', 'http://example.com/bar.css']

resolveCssImportUrls("(foo.css); lksjhlksjhdf") // => []
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
