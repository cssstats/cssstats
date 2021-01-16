# cssstats

Parses stylesheets and returns an object with statistics.
This is the core module used in [cssstats.com](http://cssstats.com)

## Installation

```sh
npm i --save cssstats
```

## Usage

### Node

```js
var fs = require('fs')
var cssstats = require('cssstats')

var css = fs.readFileSync('./styles.css', 'utf8')
var stats = cssstats(css)
```

### PostCSS Plugin

CSS Stats can be used as a [PostCSS](https://github.com/postcss/postcss) plugin.
The stats will be added to PostCSS's messages array.

```js
var fs = require('fs')
var postcss = require('postcss')
var cssstats = require('cssstats')

var css = fs.readFileSync('./styles.css', 'utf8')
postcss()
  .use(cssstats())
  .process(css)
  .then(function (result) {
    result.messages.forEach(function (message) {
      console.log(message)
    })
  })
```

#### Options

Options may be passed as a second argument.

```js
var stats = cssstats(css, { mediaQueries: false })
```

- `safe` (boolean, default: `true`) - enables [PostCSS safe mode](https://github.com/postcss/postcss#safe-mode) for parsing CSS with syntax errors
- `mediaQueries` (boolean, default `true`) - determines whether or not to generate stats for each media query block
- `importantDeclarations` (boolean, default `false`) - include an array of declarations with `!important`

The following options add the results of helper methods to the returned object. This is helpful when using `JSON.stringify()`.

- `specificityGraph` (boolean, default `false`)
- `sortedSpecificityGraph` (boolean, default `false`)
- `repeatedSelectors` (boolean, default `false`)
- `propertyResets` (boolean, default `false`)
- `vendorPrefixedProperties` (boolean, default `false`)

### Returned Object

```js
// Example
{
  size: n,
  gzipSize: n,
  rules: {
    total: n,
    size: {
      graph: [n],
      max: n,
      average: n
    }
  },
  selectors: {
    total: n,
    id: n,
    class: n,
    type: n,
    pseudoClass: n,
    psuedoElement: n,
    values: [str],
    specificity: {
      max: n
      average: n
    },
    getSpecificityGraph(),
    getSpecificityValues(),
    getRepeatedValues(),
    getSortedSpecificity()
  },
  declarations: {
    total: n,
    unique: n,
    uniqueToTotalRatio: n,
    important: [obj],
    properties:
      prop: [str]
    },
    getPropertyResets(),
    getUniquePropertyCount(),
    getPropertyValueCount(),
    getVendorPrefixed(),
    getAllFontSizes(),
    getAllFontFamilies(),
  },
  mediaQueries: {
    total: n,
    unique: n,
    values: [str],
    contents: [
      {
        value: str,
        rules: {
          total: n,
          size: {
            graph: [n],
            max: n,
            average: n
          }
        },
        selectors: {
          total: n,
          id: n,
          class: n,
          type: n,
          pseudoClass: n,
          pseudoElement: n,
          values: [str],
          specificity: {
            max: n,
            average: n
          }
        },
        declarations: {
          total: n,
          unique: n,
          important: [obj],
          vendorPrefix: n,
          properties: {
            prop: [str]
          }
        }
      }
    ]
  }
}
```

#### `size` number

The size of the file in bytes

#### `gzipSize` number

The size of the stylesheet gzipped in bytes

#### `rules` object

- `total` number - total number of rules
- `size` object
  - `size.graph` array - ruleset sizes (number of declarations per rule) in source order
  - `size.max` number - maximum ruleset size
  - `size.average` number - average ruleset size

#### `selectors` object

- `total` number - total number of selectors
- `type` number - total number of type selectors
- `class` number - total number of class selectors
- `id` number - total number of id selectors
- `pseudoClass` number - total number of pseudo class selectors
- `pseudoElement` number - total number of pseudo element selectors
- `values` array - array of strings for all selectors
- `specificity` object
  - `specificity.max` number - maximum specificity as a base 10 number
  - `specificity.average` number - average specificity as a base 10 number
- `getSpecificityGraph()` function - returns an array of numbers for each selector’s specificity as a base 10 number
- `getSpecificityValues()` function - returns an array of selectors with base 10 specificity score in order
- `getRepeatedValues()` function - returns an array of strings of repeated selectors
- `getSortedSpecificity()` function - returns an array of selectors with base 10 specificity score, sorted from highest to lowest

#### `declarations` object

- `total` number - total number of declarations
- `unique` number - total unique declarations
- `uniqueToTotalRatio` number - ratio of unique declarations to total declarations
- `properties` object - object with each unique property and an array of that property’s values
- `getPropertyResets()` function - returns an object with the number of times margin or padding is reset for each property
- `getUniquePropertyCount(property)` function - returns the number of unique values for the given property
- `getPropertyValueCount(property, value)` function - returns the number of times a declaration occurs for the given property and value
- `getVendorPrefixed()` function - returns an array of declarations with vendor prefixed properties
- `getAllFontSizes()` function - returns an array of font sizes from both `font-size` and `font` shorthand declarations
- `getAllFontFamilies()` function - returns an array of font families from both `font-family` and `font` shorthand declarations
- `important` array (optional) - `!important` declaration objects with `property` and `value`

#### `mediaQueries` object

- `total` number - total number of media queries
- `unique` number - total unique media queries
- `values` array - array of values for each media query
- `contents` array - array of media query blocks with full stats object for each

See the `/test/results` folder for example JSON results.

### Usage examples

```js
var cssstats = require('cssstats')
var stats = cssstats(css)
```

#### Generate a [specificity graph](http://csswizardry.com/2014/10/the-specificity-graph/)

```js
var specificityGraph = stats.selectors.getSpecificityGraph()
```

#### Sort selectors by highest specificity

```js
var sortedSelectors = stats.selectors.getSortedSpecificity()
```

#### Get total number of unique colors

```js
var uniqueColorsCount = stats.declarations.getUniquePropertyCount('color')
```

#### `display: none` count

```js
var displayNoneCount = stats.declarations.getPropertyValueCount(
  'display',
  'none'
)
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
