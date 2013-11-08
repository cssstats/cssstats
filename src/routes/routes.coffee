Tutil           = require 'util'
fs              = require 'fs'

######################################################
# Index
######################################################

exports.index = (req, res) ->
  res.render 'index'