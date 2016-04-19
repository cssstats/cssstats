
var express = require('express');
var router = express.Router();

var resource = require('../services/resource');
var controller = require('../controllers/stats');
var user_agents = require('../helpers/user-agents');

router.get('/', function(req, res) {

  var model = {};
  model.url = req.query.url || null;
  model.link = req.query.link || null;
  model.name = req.query.name || null;

  if (req.query.ua) {
    found_agents = user_agents.filter(function (ua) {
      return ua.name === req.query.ua;
    });

    if (found_agents.length > 0) {
      model.user_agent = found_agents[0].user_agent;
    }
  }

  if (model.link) {
    resource.getCssFromLink(model.link)
      .then(function(css){
        req.session.css = css;
        model.css = css;
        model = controller(model);
        res.render('stats', model);
      })
      .catch(function(error) {
        res.render('index', { error: error, user_agents: user_agents });
      });
  } else if (model.url) {
    resource.getCssFromUrl(model.url, model.user_agent)
      .then(function(response) {
        req.session.css = response.css;
        model.source = response;
        model.css = response.css;
        model = controller(model);
        res.render('stats', model);
      })
      .catch(function(error) {
        model.error = error;
        model.user_agents = user_agents;
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

