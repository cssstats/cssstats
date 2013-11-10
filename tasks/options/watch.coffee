module.exports =
  js:
    files: ['src/client/js/**/*'],
    tasks: ['build:scripts']
  templates:
    files: ['src/client/partials/**/*'],
    tasks: ['build:templates:debug']
  sass:
    files: ['src/client/sass/**/*'],
    tasks: ['build:styles:debug']
  options: 
    debounceDelay: 200