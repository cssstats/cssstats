var q = require('q')
var request = require('request')
var query = require('query-string')

module.exports = function getLinkContents(linkUrl, options) {
  var d = q.defer()
  const { url } = query.parseUrl(linkUrl)

  // expect linked css content
  // TODO: Make this check the actual response type
  if (!/\.css$/i.test(url)) {
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
