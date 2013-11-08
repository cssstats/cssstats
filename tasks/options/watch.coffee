module.exports =
  js:
    files: ['src/client/js/**/*'],
    tasks: ['build:scripts']
  templates:
    files: ['src/client/partials/**/*'],
    tasks: ['build:templates:debug']
  options: 
    debounceDelay: 200