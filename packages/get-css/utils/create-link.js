var resolveUrl = require('./resolve-url')

module.exports = function createLink(link, url) {
  return {
    link: link,
    url: resolveUrl(url, link),
    css: ''
  }
}
