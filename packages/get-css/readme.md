# get-css [![Build Status](https://travis-ci.org/cssstats/get-css.svg?branch=master)](https://travis-ci.org/cssstats/get-css)

Node module to get CSS from a URL.

Returns a promise for an object with details about a document's CSS, used in <http://cssstats.com>.

## Installation

```sh
npm i --save get-css
```

For the CLI

```sh
npm i -g get-css
```

## Usage

```js
var getCss = require('get-css');

var options = {
  timeout: 5000
};

getCss('http://github.com', options)
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });
```

### Using the CLI

```
npm i -g get-css
getcss google.com > google.css
```

## Response

### `links`
An array of objects base on `rel=stylesheet` links found in the document.

Each object has the following:

- `link` - the value from the `href` attribute for each link tag
- `url` - an absolute url representation of the link
- `css` - the contents of the file in the link
- `imports` - an array of urls for `@import` rules

### `styles`
An array of contents from `style` tags found in the document.

### `css`
A concatenated string of all css found in links and styles

### `pageTitle`
The contents of the `title` tag in the document.

## Options

### `timeout`
An integer to reflect the timeout for the request. Default: `5000`

### `ignoreCerts`
A boolean to determine whether invalid certificates are ignored. Default: `false`

### `verbose`
A boolean to determine whether errors should be `console.log`ged. Default: `false`

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
