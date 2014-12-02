var express = require('express');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var handlebars = require('express-handlebars');
var session = require('express-session');

var routes = require('./routes/index');
var stats = require('./routes/stats');
var parse = require('./routes/parse');

var app = express();

// view engine setup
app.engine('handlebars', handlebars({
  handlebars: require('handlebars'),
  defaultLayout: 'application',
  helpers: {
    number: require('./helpers/humanize').number,
    filesize: require('./helpers/humanize').filesize,
    encode: require('./helpers/encode'),
    inspect: require('./helpers/inspect'),
    highlight: require('./helpers/highlight'),
    pluralize: require('./helpers/pluralize'),
    line_graph: require('./helpers/line-graph'),
    uniques_graph: require('./helpers/uniques-graph')
  }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');


app.use(favicon(__dirname + '/public/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var secret = Math.random().toString(36).slice(2);
app.use(session({ secret: secret, saveUninitialized: true, resave: true }));

app.use('/', routes);
app.use('/stats', stats);
app.use('/parse', parse);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log(err);
    console.log(err.message);
    console.log(err.stack);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

