var _ = require('lodash')

module.exports = function (property) {
  if (!this.properties || !this.properties[property]) {
    return 0
  }

  return _.uniq(this.properties[property]).length
}
