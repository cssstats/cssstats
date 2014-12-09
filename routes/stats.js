var url = require('url');
var express = require('express');
var router = express.Router();

var resource = require('../services/resource');
var controller = require('../controllers/stats');

function formatUrl(query, sorted) {
  return url.format({query: {
      url: query.url,
      link: query.link,
      name: query.name,
      sorted: sorted || ""
  }});
}

router.get('/', function(req, res) {

  var model = {};
  model.url = req.query.url || null;
  model.link = req.query.link || null;
  model.name = req.query.name || null;
  model.sorted = !!req.query.sorted;

  model.unsortedUrl = formatUrl(req.query, false);
  model.sortedUrl = formatUrl(req.query, true);

  if (model.link) {
    resource.getCssFromLink(model.link)
      .then(function(css){
        req.session.css = css;
        model.css = css;
        model = controller(model);
        res.render('stats', model);
      })
      .catch(function(error) {
        res.render('index', { error: error });
      });
  } else if (model.url) {
    resource.getCssFromUrl(model.url)
      .then(function(response) {
        req.session.css = response.css;
        model.source = response;
        model.css = response.css;
        model = controller(model);
        res.render('stats', model);
      })
      .catch(function(error) {
        model.error = error;
        res.render('index', model);
      });
  } else if (req.session.css) {
    model.css = req.session.css;
    model.name = 'Raw CSS';
    model = controller(model);
    res.render('stats', model);
  } else {
    res.redirect('/');
  }
});

module.exports = router;

