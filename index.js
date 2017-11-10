const Router = require('router')
const send = require('send')
const finalhandler = require('finalhandler')

const router = Router()

router.get('/api/stats', require('./api/stats'))

router.get('/', (req, res) => send(req, 'public/index.html').pipe(res))
router.get('/bundle.js', (req, res) => send(req, 'public/bundle.js').pipe(res))

module.exports = (req, res) => {
  router(req, res, finalhandler(req, res))
}
