var urlResolver = require('url').resolve

module.exports = function resolveUrl(url, link) {
  if (link.match(/^(http|https)/g)) {
    return link
  } else {
    if (isCssFile(url)) {
      removeExtension(url)
    } else if (!endsInForwardSlash(url)) {
      if (!isHtmlUrl(url)) {
        url += '/'
      }
    }

    return urlResolver(url, link)
  }
}

function endsInForwardSlash(url) {
  return url.indexOf('/', url.length - 1) != -1
}

function isCssFile(url) {
  return url.indexOf('.css', url.length - 4) != -1
}

function isHtmlUrl(url) {
  return url.indexOf('.html', url.length - 5) != -1
}

function removeExtension(url) {
  url.replace(/\.[^/.]+$/, '')
}
