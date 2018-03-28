const path = require('path')

module.exports = cssFilePath => {
  if (typeof cssFilePath !== 'string') {
    throw new TypeError('is-css expected a string')
  }

  return /^\.css$/i.test(path.extname(cssFilePath))
}
