var fs = require('fs')
var assert = require('assert')
var postcss = require('postcss')
var cssstats = require('..')

describe('css-statistics', function() {
  var stats
  var options = {
    importantDeclarations: true
  }

  before(function() {
    stats = cssstats(fixture('small'), options)
  })

  describe('PostCSS plugin', function() {
    it('should be handled correctly', function(done) {
      postcss()
        .use(cssstats(options))
        .process(fixture('small'))
        .then(function(result) {
          var pluginStats = result.messages[0].stats
          assert.deepEqual(pluginStats.selectors, stats.selectors)
          done()
        })
    })
  })

  describe('size stats', function() {
    it('should calculate the correct file size', function() {
      assert.equal(stats.size, 885)
    })

    it('should calculate the correct gzipped file size', function() {
      assert.equal(stats.gzipSize, 367)
    })
  })

  describe('rules', function() {
    it('should count the total number of rules', function() {
      assert.equal(stats.rules.total, 12)
    })

    it('should correctly calculate max rule size', function() {
      assert.equal(stats.rules.size.max, 4)
    })

    it('should correctly calculate average rule size', function() {
      assert.equal(stats.rules.size.average, 1.8333333333333333)
    })

    it('should return a rule size graph', function() {
      assert.deepEqual(stats.rules.size.graph, [
        1,
        1,
        3,
        1,
        2,
        2,
        1,
        1,
        4,
        4,
        1,
        1
      ])
    })

    it('should return a selectorByRuleSizes array', function() {
      assert.deepEqual(stats.rules.selectorByRuleSizes, [
        { selector: '100%', declarations: 4 },
        { selector: '0%', declarations: 4 },
        { selector: '.sm-tomato', declarations: 3 },
        { selector: '.box', declarations: 2 },
        { selector: '.sm-tomato:first-child:last-child', declarations: 2 },
        { selector: '.georgia', declarations: 1 },
        { selector: 'header', declarations: 1 },
        { selector: '.box:last-child', declarations: 1 },
        { selector: '.box:first-child', declarations: 1 },
        { selector: '.sm-tomato::after', declarations: 1 },
        { selector: '.red', declarations: 1 },
        { selector: '.red, #foo', declarations: 1 }
      ])
    })
  })

  describe('selectors', function() {
    it('should correctly count total selectors', function() {
      assert.equal(stats.selectors.total, 13)
    })

    it('should correctly count the number of id selectors', function() {
      assert.equal(stats.selectors.id, 1)
    })

    it('should correctly count the number of type selectors', function() {
      assert.equal(stats.selectors.type, 1)
    })

    it('should correctly count the number of class selectors', function() {
      assert.equal(stats.selectors.class, 9)
    })

    it('should correctly count the number of pseudo class selectors', function() {
      assert.equal(stats.selectors.pseudoClass, 3)
    })

    it('should correctly count the number of pseudo element selectors', function() {
      assert.equal(stats.selectors.pseudoElement, 1)
    })

    it('should return an array of selectors', function() {
      assert.equal(stats.selectors.values.length > 0, true)
    })

    it('should correctly calculate max specificity', function() {
      assert.equal(stats.selectors.specificity.max, 100)
    })

    it('should correctly calculate average specificity', function() {
      assert.equal(stats.selectors.specificity.average, 18)
    })
  })

  describe('declarations', function() {
    it('should correctly count total declarations', function() {
      assert.equal(stats.declarations.total, 22)
    })

    it('should correctly count unique declarations', function() {
      assert.equal(stats.declarations.unique, 21)
    })

    it('should correctly count important values', function() {
      assert.equal(stats.declarations.important.length, 2)
    })

    it('should return a properties object', function() {
      assert.equal(Object.keys(stats.declarations.properties).length > 0, true)
    })
  })

  describe('keyframes', function() {
    var keyframeStats

    before(function() {
      keyframeStats = cssstats(fixture('keyframes'))
    })

    it('should correctly get statistics for CSS in, and after, a keyframe', function() {
      assert.equal(keyframeStats.declarations.properties.color.length, 5)
    })

    it('should not include @keyframes stops in the selectors list', function() {
      assert.deepEqual(keyframeStats.selectors.values, ['.a', '.b'])
    })
  })

  describe('selector methods', function() {
    it('should generate a specificity graph', function() {
      assert.equal(stats.selectors.getSpecificityGraph().length > 0, true)
    })

    it('should return specificity values for each selector in order', function() {
      assert.deepEqual(stats.selectors.getSpecificityValues(), [
        { selector: '.red', specificity: 10 },
        { selector: '#foo', specificity: 100 },
        { selector: '.red', specificity: 10 },
        { selector: '.sm-tomato', specificity: 10 },
        { selector: '.sm-tomato::after', specificity: 11 },
        { selector: '.sm-tomato:first-child:last-child', specificity: 30 },
        { selector: '.box', specificity: 10 },
        { selector: '.box:first-child', specificity: 20 },
        { selector: '.box:last-child', specificity: 20 },
        { selector: '0%', specificity: 1 },
        { selector: '100%', specificity: 1 },
        { selector: 'header', specificity: 1 },
        { selector: '.georgia', specificity: 10 }
      ])
    })

    it('should return a sorted specificity array', function() {
      assert.deepEqual(stats.selectors.getSortedSpecificity(), [
        { selector: '#foo', specificity: 100 },
        { selector: '.sm-tomato:first-child:last-child', specificity: 30 },
        { selector: '.box:first-child', specificity: 20 },
        { selector: '.box:last-child', specificity: 20 },
        { selector: '.sm-tomato::after', specificity: 11 },
        { selector: '.box', specificity: 10 },
        { selector: '.sm-tomato', specificity: 10 },
        { selector: '.red', specificity: 10 },
        { selector: '.red', specificity: 10 },
        { selector: '.georgia', specificity: 10 },
        { selector: '0%', specificity: 1 },
        { selector: '100%', specificity: 1 },
        { selector: 'header', specificity: 1 }
      ])
    })

    it('should return repeated selectors', function() {
      assert.deepEqual(stats.selectors.getRepeatedValues(), ['.red'])
    })
  })

  describe('declaration methods', function() {
    it('should correctly count the number of declarations that reset properties', function() {
      assert.deepEqual(stats.declarations.getPropertyResets(), {
        margin: 1,
        padding: 1,
        'margin-bottom': 1
      })
    })

    it('should correctly count the number of unique colors', function() {
      assert.equal(stats.declarations.getUniquePropertyCount('color'), 2)
    })

    it('should correctly count the number of color: red', function() {
      assert.equal(stats.declarations.getPropertyValueCount('color', 'red'), 2)
    })

    it('should get count vendor prefixes', function() {
      assert.equal(stats.declarations.getVendorPrefixed().length, 5)
    })

    it('should get all font sizes', function() {
      assert.equal(stats.declarations.getAllFontSizes().length, 1)
    })

    it('should get all font families', function() {
      assert.equal(stats.declarations.getAllFontFamilies().length, 1)
    })
  })

  it('should be able to parse css and produce stats', function(done) {
    ;[
      'basscss',
      'small',
      'font-awesome',
      'gridio',
      'gridio-national-light'
    ].forEach(function(stylesheet) {
      renderJson(stylesheet)
    })
    done()
  })
})

describe('cssstats no media queries', function() {
  var stats

  before(function() {
    stats = cssstats(fixture('small'), { mediaQueries: false })
  })

  it('should not contain media query contents', function() {
    assert.equal(stats.mediaQueries.contents, null)
  })
})

function fixture(name) {
  return fs
    .readFileSync('test/fixtures/' + name + '.css', 'utf8')
    .toString()
    .trim()
}

function renderJson(filename) {
  var css = fixture(filename)
  var obj = cssstats(css)

  fs.writeFileSync(
    './test/results/' + filename + '.json',
    JSON.stringify(obj, null, 2)
  )
}
