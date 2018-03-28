'use strict'

const { resolve } = require('url')
const getImports = require('get-imports')
const getCssUrls = require('get-css-urls')
const isPresent = require('is-present')
const isUrl = require('is-url')

module.exports = (url, css) => {
  if(typeof url !== 'string' || typeof css !== 'string' || !isUrl(url)) {
    throw new TypeError('resolve-css-imports expected two string parameters (url, css)')
  }

  const cssUrls = getImports(css).map(importStatement => {
    // url('blah.css') => blah.css
    let cssRelativePath = getCssUrls(importStatement)

    if(!isPresent(cssRelativePath)) {
      cssRelativePath = importStatement.match(/["'](.*?)["']/ig)
    }

    if(isPresent(cssRelativePath)) {
      cssRelativePath = cssRelativePath[0].replace('url(', '').replace(/["'()]/g,'')
    }

    return resolve(url, cssRelativePath)
  })

  return cssUrls
}
