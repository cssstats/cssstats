'use strict'

const REGEX = /(linear-gradient|radial-gradient)\(.*\)/

module.exports = function hasGradient (property) {
  if (typeof property !== 'string') {
    throw new TypeError('has-gradient expected a string')
  }

  return REGEX.test(property)
}

module.exports.regex = REGEX
