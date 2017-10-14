const next = require('next')
const Router = require('router')
const finalhandler = require('finalhandler')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const router = Router()

app
  .prepare()
  .then(() => {
    router.get('/api/stats', require('./lib/stats'))

    router.get('*', (req, res) => {
      handle(req, res, parse(req.url, true))
    })

    router.get('/', (req, res) => {
      app.render(req, res, '/', req.query)
    })
  })

module.exports = (req, res) => {
  router(req, res, finalhandler(req, res))
}
