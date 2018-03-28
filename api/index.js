const Router = require('router')
const send = require('send')
const finalhandler = require('finalhandler')

const router = Router()

router.get('/stats', require('./stats'))

module.exports = (req, res) => {
  router(req, res, finalhandler(req, res))
}
