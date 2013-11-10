module.exports =
  app:
    src: [
      'src/client/js/rprtr.js'
      'src/client/js/services.js',
      'src/client/js/controllers.js',
      'src/client/js/directives.js'
    ]
    dest: 'public/js/app.js'
    options: 
      sourcesContent: true