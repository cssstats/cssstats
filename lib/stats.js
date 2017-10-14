const { send } = require('micro')
const getCss = require('get-css')
const getParam = require('get-query-param')
const isUrl = require('is-url')
const isPresent = require('is-present')
const normalizeUrl = require('normalize-url')
const cssstats = require('cssstats')

module.exports = async (req, res) => {
  const url = getParam('url', req.url)

  const fullUrl = url && normalizeUrl(url)

  if (!isValidUrl(url)) {
    return send(res, 406, {
      error: 'unacceptable',
      message: 'Url is invalid'
    })
  }

  const css = await getCss(url)
  const stats = cssstats(css.css)

  send(res, 200, { stats, css })
}

const isValidUrl = url => isPresent(url) && isUrl(url)
