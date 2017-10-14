const Router = require('router')
const finalhandler = require('finalhandler')

const router = Router()

router.get('/api/stats', require('./lib/stats'))
router.get('/stats', require('./lib/app'))
router.get('/', require('./lib/app'))

module.exports = (req, res) => router(req, res, finalhandler(req, res))
