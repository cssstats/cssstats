var _ = require('lodash')

module.exports = function(root, opts) {
  var result = {
    total: 0,
    size: {
      graph: [],
      max: 0,
      average: 0
    },
    selectorByRuleSizes: []
  }

  root.walkRules(function(rule) {
    var selector = rule.selector
    var declarations = 0

    rule.nodes.forEach(function(node) {
      if (node.type === 'decl') {
        declarations++
      }
    })

    result.total++
    result.size.graph.push(declarations)
    result.selectorByRuleSizes.push({
      selector: selector,
      declarations: declarations
    })
  })

  result.selectorByRuleSizes = _.sortBy(
    result.selectorByRuleSizes,
    'declarations'
  ).reverse()

  if (result.total > 0) {
    result.size.max = _.max(result.size.graph)
    result.size.average = _.sum(result.size.graph) / result.size.graph.length
  }

  return result
}
