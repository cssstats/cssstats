var isVendorPrefixed = require('is-vendor-prefixed')

module.exports = function (properties) {
  properties = properties || this.properties

  return Object.keys(properties)
    .filter(function (property) {
      return isVendorPrefixed(property)
    })
    .map(function (property) {
      var arr = []
      properties[property].forEach(function (value) {
        arr.push({
          property: property,
          value: value
        })
      })
      return arr
    })
    .reduce(function (a, b, i) {
      return a.concat(b)
    }, [])
}
