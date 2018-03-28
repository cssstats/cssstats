const Router = require("router")
const finalhandler = require("finalhandler")

const router = Router()

router.get("/stats", require("./stats"))

module.exports = (req, res) => {
  router(req, res, finalhandler(req, res))
}
