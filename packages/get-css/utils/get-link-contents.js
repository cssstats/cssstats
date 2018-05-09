var q = require('q')
var request = require('request')

module.exports = function getLinkContents(linkUrl, options) {
  var d = q.defer()

  // expect linked css content
  if (!/\.css$/i.test(linkUrl)) {
    d.resolve('')
    return d.promise
  }

  request({ url: linkUrl, timeout: options.timeout, gzip: true }, function(
    error,
    response,
    body
  ) {
    if (error || response.statusCode !== 200) {
      d.reject(error)
    }

    d.resolve(body)
  })

  return d.promise
}
