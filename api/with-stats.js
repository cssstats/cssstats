const { send } = require('micro')
const getCss = require('get-css')
const getParam = require('get-query-param')
const isUrl = require('is-url')
const isPresent = require('is-present')
const normalizeUrl = require('normalize-url')
const cssstats = require('cssstats')

module.exports = handler => async (req, res) => {
  const url = getParam('url', req.url)

  const fullUrl = url && normalizeUrl(url)

  if (!isValidUrl(fullUrl)) {
    return send(res, 406, {
      error: 'unacceptable',
      message: 'Url is invalid'
    })
  }

  try {
    const css = await getCss(fullUrl)
    const stats = cssstats(css.css)

    req.cssstats = {
      stats,
      css
    }

    handler(req, res)
  } catch (e) {
    send(res, 500, {
      error: 'server_error',
      message: 'Something went wrong',
      stack: e
    })
  }
}

const isValidUrl = url => isPresent(url) && isUrl(url)
