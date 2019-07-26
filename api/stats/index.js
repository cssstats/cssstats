const { send } = require('micro')
const cors = require('micro-cors')()
const getCss = require('get-css')
const getParam = require('get-query-param')
const isUrl = require('is-url')
const isPresent = require('is-present')
const normalizeUrl = require('normalize-url')
const cssstats = require('cssstats')
const cssbeautify = require('cssbeautify')
const waybackCss = require('wayback-css')

const isValidUrl = url => isPresent(url) && isUrl(url)

const retrieveCss = (url, date) => (date ? waybackCss(url, date) : getCss(url))

const stats = async (req, res) => {
  const url = getParam('url', req.url)
  const date = getParam('date', req.url)

  const fullUrl = url && normalizeUrl(url)

  if (!isValidUrl(fullUrl)) {
    return send(res, 406, {
      error: 'unacceptable',
      message: 'Url is invalid'
    })
  }

  try {
    const css = await retrieveCss(fullUrl, date)
    const stats = cssstats(css.css, {
      specificityGraph: true,
      repeatedSelectors: true,
      propertyResets: true
    })

    css.css = cssbeautify(css.css)

    send(res, 200, { stats, css })
  } catch (e) {
    send(res, 500, {
      error: 'server_error',
      message: 'Something went wrong',
      stack: e
    })
  }
}

module.exports = cors(stats)
