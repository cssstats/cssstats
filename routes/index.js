var express = require('express');
var router = express.Router();

var Controller = require('../controllers/index');

router.get('/', function(req, res) {
  var model = Controller();
  req.session.css = null;
  res.render('index', model);
});

module.exports = router;
