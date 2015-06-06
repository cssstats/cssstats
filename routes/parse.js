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
  form.parse(req, function(error, fields) {
    if (fields.url) {
      var url = normalizeUrl(fields.url);

      if (isCss(url)) {
        res.redirect('/stats?link=' + encodeURIComponent(url));
      } else {
        res.redirect('/stats?url=' + encodeURIComponent(url));
      }
    } else {
      // Raw CSS was given
      req.session.css = fields.css;
      res.redirect('/stats');
    }
  });
});

module.exports = router;
