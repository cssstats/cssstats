var _ = require('lodash')
var postcss = require('postcss')
var safeParser = require('postcss-safe-parser')
var bytes = require('bytes')
var gzipSize = require('gzip-size')
var size = require('./lib/size')
var rules = require('./lib/rules')
var selectors = require('./lib/selectors')
var declarations = require('./lib/declarations')
var mediaQueries = require('./lib/media-queries')

module.exports = function (src, opts) {
  opts = opts || {}
  opts = _.defaults(opts, {
    safe: true,
    mediaQueries: true,
    importantDeclarations: false,
    specificityGraph: false,
    sortedSpecificityGraph: false,
    repeatedSelectors: false,
    propertyResets: false,
    vendorPrefixedProperties: false
  })

  function parse (root, result) {
    var stats = {}

    var string = postcss().process(root).css
    stats.size = size(string)
    stats.gzipSize = gzipSize.sync(string)
    stats.humanizedSize = bytes(stats.size, { decimalPlaces: 0 })
    stats.humanizedGzipSize = bytes(stats.gzipSize, { decimalPlaces: 0 })

    stats.rules = rules(root, opts)
    stats.selectors = selectors(root, opts)
    stats.declarations = declarations(root, opts)
    stats.mediaQueries = mediaQueries(root, opts)

    // Push message to PostCSS when used as a plugin
    if (result && result.messages) {
      result.messages.push({
        type: 'cssstats',
        plugin: 'postcss-cssstats',
        stats: stats
      })
    }

    stats.toJSON = function () {
      // Remove methods when using JSON.stringify
      delete stats.selectors.getSpecificityGraph
      delete stats.selectors.getRepeatedValues
      delete stats.selectors.getSortedSpecificity
      delete stats.declarations.getPropertyResets
      delete stats.declarations.getUniquePropertyCount
      delete stats.declarations.getPropertyValueCount
      delete stats.declarations.getVendorPrefixed
      delete stats.declarations.getAllFontSizes
      delete stats.declarations.getAllFontFamilies
      return stats
    }

    // Return stats for default usage
    return stats
  }

  if (typeof src === 'string') {
    // Default behavior
    var root = postcss().process(src, { parser: safeParser }).root
    var result = parse(root, {})
    return result
  } else if (typeof src === 'object' || typeof src === 'undefined') {
    // Return a PostCSS plugin
    return parse
  } else {
    throw new TypeError('cssstats expects a string or to be used as a PostCSS plugin')
  }
}
