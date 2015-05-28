
var express = require('express');
var formidable = require('formidable');
var normalizeUrl = require('normalize-url');
var isCss = require('is-css');

var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/');
});

router.post('/', function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(error, fields, files) {
    var url = normalizeUrl(fields.url);
    var ua = '';
    if (fields.user_agent && fields.user_agent !== 'default') {
      ua = '&ua=' + encodeURIComponent(fields.user_agent);
    }

    if (isCss(url)) {
      res.redirect('/stats?link=' + encodeURIComponent(url));
    } else {
      res.redirect('/stats?url=' + encodeURIComponent(url) + ua);
    }
  });
});

module.exports = router;
