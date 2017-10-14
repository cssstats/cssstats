const { send } = require('micro')

const withStats = require('./with-stats')

module.exports = withStats((req, res) => {
  send(res, 200, req.cssstats)
})
