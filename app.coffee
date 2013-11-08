express       = require 'express'
expresshbs    = require 'express3-handlebars'
http          = require 'http'
fs            = require 'fs'
path          = require 'path'
url           = require 'url'
util          = require 'util'

packageJSON   = require './package.json'
routes        = require './src/routes/routes'

app           = express()
app.version   = packageJSON.version

versionator   = require('versionator').create app.version

######################################################
# CONFIG
######################################################

process.env.NODE_ENV = 'development' if not process.env.NODE_ENV

production = (if (process.env.NODE_ENV is "development") then false else true)

hbs = expresshbs.create
  defaultLayout: 'base'
  extname: '.hbs'
  layoutsDir: __dirname + '/src/views/layouts'
  partialsDir: __dirname + '/src/views/partials'
  helpers:
    json: (context) ->
      JSON.stringify context
    versionPath: (path, options) ->
      versionator.versionPath path

app.configure ->

  app.set 'port', process.env.PORT || 3000

  app.engine 'hbs', hbs.engine
  app.set 'view engine', 'hbs'
  app.set 'views', __dirname + '/src/views'

  #app.use express.bodyParser()
  app.use express.methodOverride()

  # Versioning
  app.use versionator.middleware

  # Locals
  app.locals
    version: app.version

  # Router
  app.use app.router

  # Statics
  app.use express.static(path.join(__dirname, 'public'))

app.configure 'development', ->

  app.use express.logger('dev')
  app.use express.errorHandler()

######################################################
# Server
######################################################

http.createServer(app).listen app.get('port'), ->
  console.log 'Express server listening on port ' + app.get('port')

######################################################
# Routes
######################################################

app.get '/', routes.index
app.get '/parse', routes.api.parse.get
app.post '/parse', routes.api.parse.post