util      = require 'util'
fs        = require 'fs'
cssParse  = require 'css-parse'
_         = require 'lodash'

######################################################
# Index
######################################################

exports.index = (req, res) ->
  res.render 'index'

######################################################
# Util
######################################################

STRING_CAMELIZE_REGEXP = /(\-|_|\.|\s)+(.)?/g
ELEMENT_REGEXP = /^[a-zA-Z]|\s(?=[a-zA-Z])/g

util = 

  camelize: (str) ->
    str.replace(STRING_CAMELIZE_REGEXP, (match, separator, chr) ->
      (if chr then chr.toUpperCase() else '')
    ).replace /^([A-Z])/, (match, separator, chr) ->
      match.toLowerCase()

  specificityScore: (selector) ->
    count =
      id: selector.match(/#/g)
      class: selector.match(/\./g)
      attr: selector.split('[')
      element: selector.match(ELEMENT_REGEXP)
      child: selector.split('>')
    _.forEach count, (value, key) ->
      count[key] = if value then value.length else 0
    count.id * 100 + count.class * 10 + count.attr * 10 + count.element * 1

  fontSizeToPx: (value) ->
    raw = parseFloat value, 10
    if value.match(/px$/) then return raw
    if value.match(/em$/) then return raw * 16  
    if value.match(/%$/) then return raw * .16
    switch value
      when 'inherit'
        return 16
      when 'xx-small'
        return 9
      when 'x-small'
        return 10
      when 'small'
        return 13
      when 'medium'
        return 16
      when 'large'
        return 18
      when 'x-large'
        return 24
      when 'xx-large'
        return 32
      when 'small'
        return 13
      when 'larger'
        return 19
      else
        return 1024

  toRelative: (items) ->
    itemsToCompare = _.filter items, (item) ->
      item.value isnt 'auto' and not item.value.match(/%$/)
    max = _.max itemsToCompare, (item) ->
      raw = parseFloat item.value, 10
      raw = if item.match(/em$/) then raw * 16 else raw

######################################################
# API
######################################################

exports.api = {}

exports.api.parse = (req, res) ->
  
  cssFile = fs.readFileSync './src/client/css/i.css', 'utf8'
  cssRules = cssParse cssFile
  
  css =
    selectors: []
    decs: []
    decsByProperty: {}
    uniqueDecsByProperty: {}

  _.forEach cssRules.stylesheet.rules, (rule) ->
    if rule.selectors
      _.forEach rule.selectors, (selector) ->
        item = 
          string: selector
          score: util.specificityScore selector
        css.selectors.push item
    if rule.declarations
      _.forEach rule.declarations, (dec) ->
        delete dec.type
        if dec.value
          {property} = dec
          # Check for shorthand properties
          shorthand = property.match /^(margin|padding)/g
          if shorthand then property = shorthand[0]
          # Push the declaration
          css.decs.push dec
          # Check to see if this property has been added yet
          if not css.decsByProperty[property]
            css.decsByProperty[property] = []
          # Convert the font-size to px
          if dec.property is 'font-size'
            dec.pxValue = util.fontSizeToPx dec.value
          # Push the declaration by type
          css.decsByProperty[property].push dec

  _.forEach css.decsByProperty, (decGroup, property) ->
    css.uniqueDecsByProperty[property] = _.unique decGroup, (dec) ->
      dec.value

  response =
    info:
      name: 'Amazon'
    counts:
      selectors: css.selectors.length
    selectors: css.selectors
    declarations: {}
    uniqueDeclarations: {}

  _.forEach css.decsByProperty, (decGroup, property) ->
    response.declarations[util.camelize(property)] =
      property: property
      count: decGroup.length
      values: decGroup

  _.forEach css.uniqueDecsByProperty, (decGroup, property) ->
      response.uniqueDeclarations[util.camelize(property)] =
        property: property
        count: decGroup.length
        values: decGroup

  res.send response
        
