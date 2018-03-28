const Router = require("router")
const finalhandler = require("finalhandler")
const cors = require('micro-cors')()

const router = Router()

router.get("/stats", cors(require("./stats")))

module.exports = (req, res) => {
  router(req, res, finalhandler(req, res))
}
