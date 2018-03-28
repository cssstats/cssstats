const vendorPrefixes = require('vendor-prefixes')

module.exports = property => {
  if (typeof property !== 'string') {
    throw new TypeError('is-vendor-prefixed expected a string')
  }

  const regexForPrefixes = new RegExp(
    '^(' + vendorPrefixes().join('|') + ')([a-z-]+)$',
    'i'
  )
  return regexForPrefixes.test(property)
}
