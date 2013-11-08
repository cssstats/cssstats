module.exports = (grunt) ->

  Helpers         = require './tasks/helpers'
  config          = Helpers.config
  filterAvailable = Helpers.filterAvailableTasks
  _               = grunt.util._

  config = _.extend config, Helpers.loadConfig('./tasks/options/')

  require('load-grunt-tasks')(grunt)
  grunt.loadTasks 'tasks'

  grunt.registerTask 'default', 'Build (in debug mode) & test your application', []

  config.concurrent =
    debug: [
      'build:templates:debug'
      'build:scripts'
      'build:styles:debug'
    ]
    dist: [
      'build:templates:dist'
      'build:scripts'
      'build:styles:dist'
    ]
    heroku: [
      'build:templates:dist'
      'build:scripts'
    ]

  grunt.registerTask 'build:before:debug', [
    'clean:build'
    'lock'
  ]

  grunt.registerTask 'build:before:dist', [
    'clean:build'
    'lock'
  ]

  grunt.registerTask 'build:templates:debug', filterAvailable [
    'ngtemplates:debug'
  ]

  grunt.registerTask 'build:templates:dist', filterAvailable [
    'ngtemplates:dist'
  ]

  grunt.registerTask 'build:scripts', filterAvailable [
    'concat_sourcemap:app'
  ]

  grunt.registerTask 'build:styles:debug', filterAvailable [
    'sass:debug'
  ]

  grunt.registerTask 'build:styles:dist', filterAvailable [
    'sass:dist'
  ]

  grunt.registerTask 'build:after:debug', filterAvailable [
    'concat:vendor_debug'
    'unlock'
    'clean:build_after'
    'copy:build_after_debug'
  ]

  grunt.registerTask 'build:after:dist', filterAvailable [
    'concat:vendor_dist'
    'uglify:templates'
    'unlock'
    'clean:build_after'
    'copy:build_after_dist'
  ]

  grunt.registerTask 'build:debug', 'Build a development-friendly version of your app.', [
    'build:before:debug'
    'concurrent:debug'
    'build:after:debug'
  ]

  grunt.registerTask 'build:dist', 'Build a production-friendly version of your app.', [
    'build:before:dist'
    'concurrent:dist'
    'build:after:dist'
  ]

  grunt.registerTask 'build:heroku', 'Build a heroku version of your app.', [
    'build:before:dist'
    'concurrent:heroku'
    'build:after:dist'
  ]
  grunt.initConfig config