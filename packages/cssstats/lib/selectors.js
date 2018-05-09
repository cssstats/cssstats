var _ = require('lodash')
var hasIdSelector = require('has-id-selector')
var hasClassSelector = require('has-class-selector')
var hasPseudoElement = require('has-pseudo-element')
var hasPseudoClass = require('has-pseudo-class')
var hasElementSelector = require('has-element-selector')
var getSpecificityGraph = require('./get-specificity-graph')
var getRepeatedValues = require('./get-repeated-values')
var getSpecificityValues = require('./get-specificity-values')
var getSortedSpecificity = require('./get-sorted-specificity')

module.exports = function (root, opts) {
  var result = {
    total: 0,
    type: 0,
    class: 0,
    id: 0,
    pseudoClass: 0,
    pseudoElement: 0,
    values: [],
    specificity: {
      max: 0,
      average: 0
    },
    getSpecificityGraph: getSpecificityGraph,
    getSpecificityValues: getSpecificityValues,
    getSortedSpecificity: getSortedSpecificity,
    getRepeatedValues: getRepeatedValues
  }

  var graph

  root.walkRules(function (rule) {
    rule.selectors.forEach(function (selector) {
      result.total++
      result.values.push(selector)

      if (hasElementSelector(selector)) {
        result.type++
      }

      if (hasClassSelector(selector)) {
        result.class++
      }

      if (hasIdSelector(selector)) {
        result.id++
      }

      if (hasPseudoElement(selector)) {
        result.pseudoElement++
      }

      if (hasPseudoClass(selector)) {
        result.pseudoClass++
      }
    })
  })

  graph = result.getSpecificityGraph()
  result.specificity.max = _.max(graph) || 0
  result.specificity.average = _.sum(graph) / graph.length || 0

  if (opts.specificityGraph) {
    result.specificity.graph = graph
  }

  if (opts.sortedSpecificityGraph) {
    result.specificity.sortedGraph = result.getSortedSpecificity()
  }

  if (opts.repeatedSelectors) {
    result.repeated = result.getRepeatedValues()
  }

  return result
}
