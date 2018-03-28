'use strict'

import test from 'ava'
import hasPseudoClass from './'

const pseudoClasses = [
  ':not(a)',
  'ul li:first-child',
  'a:visited',
  '*:active',
  '#some-id:nth-child(3)',
  '#some-id:nth-last-child(3)',
  '.some-selector > ul > li:hover',
  '.some-selector > ul > li:focus'
]

var noPseudoClasses = [
  '.foo-bar',
  '.foo-bar:after',
  '.foo-bar::after'
]

test('returns true when there is a pseudo element', t => {
  t.plan(pseudoClasses.length)

  pseudoClasses.forEach(pseudoClass => {
    t.true(hasPseudoClass(pseudoClass))
  })
})

test('returns false when there is no pseudo element', t => {
  t.plan(noPseudoClasses.length)

  noPseudoClasses.forEach(function(noPseudoClass) {
    t.false(hasPseudoClass(noPseudoClass))
  })
})
