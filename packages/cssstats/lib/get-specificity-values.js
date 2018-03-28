var _ = require('lodash')

module.exports = function (selectors, graph) {
  selectors = selectors || this.values
  graph = graph || this.getSpecificityGraph()

  return _.zipWith(
    selectors,
    graph,
    function (a, b) {
      return {
        selector: a,
        specificity: b
      }
    })
}
