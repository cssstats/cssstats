
var express = require('express');
var formidable = require('formidable');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/');
});

router.post('/', function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(error, fields, files) {
    var url = fields.url;
    req.session.css = null;
    if (!url.match(/^(http|https)/g)) url = 'http://'+url;
    if (fields.css) {
      req.session.css = fields.css;
      res.redirect('/stats');
    } else if (fields.file) {
      console.log(files.file);
    } else if (url.match(/\.css/g)) {
      res.redirect('/stats?link=' + encodeURIComponent(url));
    } else {
      console.log('no match');
      res.redirect('/stats?url=' + encodeURIComponent(url));
    }
  });
});

module.exports = router;
