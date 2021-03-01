var q = require('q')
var fetch = require('node-fetch')
var query = require('query-string')
var AbortController = require('abort-controller')

module.exports = function getLinkContents(linkUrl, options) {
  var d = q.defer()
  const { url } = query.parseUrl(linkUrl)

  var controller = new AbortController()
  var timeoutTimer = setTimeout(() => {
    controller.abort()
  }, options.timeout)

  fetch(linkUrl, Object.assign({}, options, { signal: controller.signal }))
    .then((response) => {
      if (response.status !== 200) {
        d.reject(response.error)
      }

      var contentType = response.headers.get('content-type')
      // Has contentType header and is text/css
      var hasCssContentType = contentType && contentType.includes('text/css')
      // Has no contentType header and end with .css
      var urlHasCssExtension = !contentType && /\.css$/i.test(url)
      // If neither is the case ignore this link, consider there to be no css
      if (!hasCssContentType && !urlHasCssExtension) {
        d.resolve('')
      }

      return response.text()
    })
    .then((body) => {
      d.resolve(body)
    })
    .catch((error) => {
      d.reject(error)
    })
    .finally(() => {
      clearTimeout(timeoutTimer)
    })

  return d.promise
}
