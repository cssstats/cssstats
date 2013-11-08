pathUtils = require 'path'
grunt     = require 'grunt'
_         = grunt.util._
Helpers   = {}

# Grunt configuration. Object is expected to be mutated in Gruntfile.
Helpers.config =
  pkg: grunt.file.readJSON './package.json'
  env: process.env

# List of package requisits for tasks
taskRequirements =
  'sass': ['grunt-contrib-sass']
  'ngtemplates': ['grunt-angular-templates'],

Helpers.filterAvailableTasks = (tasks) ->
  tasks = tasks.filter Helpers.whenTaskIsAvailable
  _.compact tasks

# @returns taskName if given task is available, undefined otherwise
Helpers.whenTaskIsAvailable = (taskName) ->
  # baseName of 'coffee:compile' is 'coffee'
  baseName = taskName.split(':')[0]
  reqs = taskRequirements[baseName]
  isAvailable = Helpers.isPackageAvailable reqs
  if isAvailable then taskName else undefined

Helpers.isPackageAvailable = (pkgNames) ->
  if not pkgNames then return true; # packages are assumed to exist

  if not _.isArray pkgNames
    pkgNames = [pkgNames]

  _.any pkgNames, (pkgName) ->
    !!Helpers.config.pkg.devDependencies[pkgName]

Helpers.loadConfig = (path) ->
  glob = require 'glob'
  object = {};
  key = null

  glob.sync('*', { cwd: path }).forEach (option) ->
    key = option.replace /\.coffee$/, ''
    object[key] = require "../#{path}#{option}"

  object

module.exports = Helpers
