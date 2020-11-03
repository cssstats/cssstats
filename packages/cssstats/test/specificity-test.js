const test = require('ava')

const { getStatsForFixture } = require('./util')

test('generates a specificity graph', (t) => {
  const result = getStatsForFixture('small').selectors.getSpecificityGraph()

  t.is(result.length, 11)
})

test('returns specificity values', (t) => {
  const result = getStatsForFixture('small').selectors.getSpecificityValues()

  t.deepEqual(result, [
    {
      selector: '.red',
      specificity: 10,
    },
    {
      selector: '#foo',
      specificity: 100,
    },
    {
      selector: '.red',
      specificity: 10,
    },
    {
      selector: '.sm-tomato',
      specificity: 10,
    },
    {
      selector: '.sm-tomato::after',
      specificity: 11,
    },
    {
      selector: '.sm-tomato:first-child:last-child',
      specificity: 30,
    },
    {
      selector: '.box',
      specificity: 10,
    },
    {
      selector: '.box:first-child',
      specificity: 20,
    },
    {
      selector: '.box:last-child',
      specificity: 20,
    },
    {
      selector: 'header',
      specificity: 1,
    },
    {
      selector: '.georgia',
      specificity: 10,
    },
  ])
})

test('returns sorted specificity values', (t) => {
  const result = getStatsForFixture('small')
    .selectors.getSortedSpecificity()
    .slice(0, 4)

  t.deepEqual(result, [
    {
      selector: '#foo',
      specificity: 100,
    },
    {
      selector: '.sm-tomato:first-child:last-child',
      specificity: 30,
    },
    {
      selector: '.box:first-child',
      specificity: 20,
    },
    {
      selector: '.box:last-child',
      specificity: 20,
    },
  ])
})

test('returns repeated selectors', (t) => {
  const result = getStatsForFixture('small').selectors.getRepeatedValues()

  t.deepEqual(result, ['.red'])
})
