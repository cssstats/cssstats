
var express = require('express');
var formidable = require('formidable');
var normalizeUrl = require('normalize-url');
var isPresent = require('is-present');
var isUrl = require('is-url');
var isCss = require('is-css');

var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/');
});

router.post('/', function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(error, fields, files) {

    var url = isPresent(fields.url) ? normalizeUrl(fields.url, { stripWWW: false }) : ''
    var ua = '';
    if (fields.user_agent && fields.user_agent !== 'default') {
      ua = '&ua=' + encodeURIComponent(fields.user_agent);
    }

    if (isUrl(url)) {
      if (isCss(url)) {
        res.redirect('/stats?link=' + encodeURIComponent(url));
      } else {
        res.redirect('/stats?url=' + encodeURIComponent(url) + ua);
      }
    } else {
      res.render('index', { error: 'Please provide a valid url' });
    }
  });
});

module.exports = router;
