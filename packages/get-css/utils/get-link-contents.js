var q = require('q')
var fetch = require('node-fetch')
var query = require('query-string')
var AbortController = require('abort-controller')

module.exports = function getLinkContents(linkUrl, linkOptions, options) {
  var d = q.defer()
  const { url } = query.parseUrl(linkUrl)

  // expect linked css content
  // TODO: Make this check the actual response type
  if (!/\.css$/i.test(url)) {
    d.resolve('')
    return d.promise
  }

  var controller = new AbortController()
  var timeoutTimer = setTimeout(() => {
    controller.abort()
  }, options.timeout)

  linkOptions.signal = controller.signal

  fetch(linkUrl, linkOptions)
    .then((response) => {
      if (response.status !== 200) {
        d.reject(response.error)
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
