var _ = require('lodash')

module.exports = function(values) {
  values = values || this.values

  return _.uniq(
    _.clone(values)
      .sort()
      .reduce(function(a, b, i, arr) {
        if (b === arr[i - 1] || b === arr[i + 1]) {
          return a.concat(b)
        } else {
          return a
        }
      }, [])
  )
}
