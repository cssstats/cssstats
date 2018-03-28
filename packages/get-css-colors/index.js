const cssColorList = require('css-color-list')
const rgbaRegex = require('rgba-regex')
const rgbRegex = require('rgb-regex')
const hslaRegex = require('hsla-regex')
const hslRegex = require('hsl-regex')

module.exports = string => {
  if (typeof string !== 'string') {
    throw new TypeError('get-css-colors expected a string')
  }

  const colorListRegex = cssColorList().join('|')
  const rgbOrRgbaRegex = rgbRegex().source + '|' + rgbaRegex().source
  const hslOrHslaRegex = hslRegex().source + '|' + hslaRegex().source
  const hexRegex = '#([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\\b'

  const cssColorRegex = new RegExp(
    colorListRegex + '|' +
    rgbOrRgbaRegex + '|' +
    hslOrHslaRegex + '|' +
    hexRegex, 'ig'
  )

  return string.match(cssColorRegex)
}
