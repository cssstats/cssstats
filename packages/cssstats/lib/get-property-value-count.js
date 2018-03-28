module.exports = function (property, value) {
  if (!this.properties || !this.properties[property]) {
    return 0
  }

  return this.properties[property]
    .filter(function (val) {
      return val === value
    })
    .length
}
