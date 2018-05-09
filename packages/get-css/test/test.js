
var fs = require('fs');
var getCss = require('../');

var results = [];

function writeLog () {
  fs.writeFileSync('./test/results.json', JSON.stringify(results, null, 2));
}

function logResults (response) {
  results.push(response);
  console.log('Results from: ', response.pageTitle);
  console.log(response.styles.length + ' Style Tags');
  console.log(response.links.length + ' Stylesheets');
  response.links.forEach(function (link) {
    console.log(link.url);
  });
  writeLog();
}

getCss('http://google.com')
  .then(logResults)
  .catch(function (err) {
    console.error(err);
  });

getCss('http://amazon.com')
  .then(logResults)
  .catch(function (err) {
    console.error(err);
  });

getCss('http://twitter.com/jxnblk')
  .then(logResults)
  .catch(function (err) {
    console.error(err);
  });

getCss('http://facebook.com')
  .then(logResults)
  .catch(function (err) {
    console.error(err);
  });

getCss('http://johnotander.com/public/css/c.min.css')
  .then(logResults)
  .catch(function (err) {
    console.error(err);
  });
