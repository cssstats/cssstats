const { send } = require('micro')
const withStats = require('./with-stats')

module.exports = withStats((req, res) => {
  const { stats, css } = req.cssstats

  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  send(res, 200, `<h1>hi</h1>${stats}`)
})
