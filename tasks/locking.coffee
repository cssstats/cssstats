lockFile = require 'lockfile'

module.exports = (grunt) ->
  grunt.registerTask 'lock', 'Set semaphore for connect server to wait on.', () ->
    grunt.file.mkdir 'tmp'
    lockFile.lockSync 'tmp/connect.lock'

  grunt.registerTask 'unlock', 'Release semaphore that connect server waits on.', () ->
    lockFile.unlockSync 'tmp/connect.lock'