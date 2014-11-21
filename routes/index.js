var express = require('express');
var router = express.Router();

var Controller = require('../controllers/index');


/* GET home page. */
router.get('/', function(req, res) {
  var model = Controller();
  //console.log(model);
  req.session.css = null;
  res.render('index', model);
});

module.exports = router;
