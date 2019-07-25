// Originally written by @jxnblk
// https://github.com/cssstats/cssstats/blob/16fe37c96623fd3cdb24bd302ef6f6e93826af0f/controllers/stats.js#L98
const cssUnitSort = units => units.sort(sortFn)

const sortFn = (a, b) => {
  const aa = convert(a)
  const bb = convert(b)

  if (aa === bb) return 0
  return aa < bb ? 1 : -1
}

const convert = value => {
  if (typeof value !== 'string') {
    value = value.toString()
  }

  const raw = parseFloat(value, 10)

  if (value === 0) return 0
  if (value.match(/px$/)) return raw
  if (value.match(/pt$/)) return raw
  if (value.match(/em$/)) return raw * 16
  if (value.match(/%$/)) return raw * 0.16

  switch (value) {
    case 'inherit':
      return 16
    case 'xx-small':
      return 9
    case 'x-small':
      return 10
    case 'small':
      return 13
    case 'medium':
      return 16
    case 'large':
      return 18
    case 'x-large':
      return 24
    case 'xx-large':
      return 32
    case 'larger':
      return 19
    default:
      return 1024
  }
}

module.exports = cssUnitSort
module.exports.sortFn = sortFn
module.exports.convert = convert
