var shorthandExpand = require('css-shorthand-expand')

module.exports = function (properties) {
  properties = properties || this.properties

  if (!properties) {
    return 0
  }

  var families = properties['font-family'] || []

  if (properties.font) {
    families = families.concat(properties.font
      .map(function (value) {
        try {
          return shorthandExpand('font', value)['font-family']
        } catch (e) {}
      })
      .filter(function (value) {
        return value
      })
    )
  }

  return families
}
