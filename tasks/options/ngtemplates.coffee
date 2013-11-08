module.exports =
  debug:
    options:
      module: 'rprtr'
      url: (url) ->
        url.replace 'src/client/', ''
    src: 'src/client/partials/**/*.html'
    dest: 'public/js/templates.js'
  dist:
    options:
      htmlmin:
        collapseBooleanAttributes: true
        collapseWhitespace: true
        removeAttributeQuotes: true
        removeEmptyAttributes: true
        removeRedundantAttributes: true
        removeScriptTypeAttributes: true
        removeStyleLinkTypeAttributes: true 
      module: 'rprtr'
      url: (url) ->
        url.replace 'src/client/', ''
    src: 'src/client/partials/**/*.html'
    dest: 'public/js/templates.js'