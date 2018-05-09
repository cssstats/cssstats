var _ = require('lodash')

module.exports = function (properties) {
  properties = properties || this.properties

  var resets = {}
  var declarations = []
  var PROP_MATCH_REGEX = /(^margin|^padding)/
  var VALUE_MATCH_REGEX = /^(?:0(?:\w{2,4}|%)? ?)+$/

  _.forIn(properties, function (values, key) {
    values.forEach(function (value) {
      declarations.push({
        prop: key,
        value: value
      })
    })
  })

  declarations
    .filter(function (declaration) {
      return declaration.prop.match(PROP_MATCH_REGEX)
    })
    .forEach(function (declaration) {
      if (declaration.value.match(VALUE_MATCH_REGEX)) {
        resets[declaration.prop] |= 0
        resets[declaration.prop]++
      }
    })

  return resets
}
