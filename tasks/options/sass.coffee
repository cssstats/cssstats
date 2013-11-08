module.exports =
  debug:
    files:
      'public/css/i.css': 'src/client/sass/i.scss'
  dist:
    options:
      style: 'compressed'
    files:
      'src/client/css/i.css': 'src/client/sass/i.scss'