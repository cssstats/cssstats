import test from 'ava'
import isVendorPrefixed from './'

const prefixedProperties = [
  '-ms-background-image', 'mso-background-image', // Microsoft
  '-moz-background-image',	                      // Mozilla
  '-o-background-image', '-xv-background-image',  // Opera Software
  '-atsc-background-image',                       //	Advanced Television Standards Committee
  '-wap-background-image',                        //	The WAP Forum
  '-khtml-background-image',                      //	KDE
  '-webkit-background-image',                     //	Apple
  'prince-background-image',                      //	YesLogic
  '-ah-background-image',                         //	Antenna House
  '-hp-background-image',                         //	Hewlett Packard
  '-ro-background-image',                         //	Real Objects
  '-rim-background-image',                        //	Research In Motion
  '-tc-background-image'                          //	TallComponents
]

const unprefixedProperties = [
  'background-image',
  'foo-bar',
  '-not-valid-background-image',
  '-mozbackground-image',
  'mox-background-image'
]

test('returns true for prefixed properties', t => {
  t.plan(prefixedProperties.length)

  prefixedProperties.forEach(property => {
    t.truthy(isVendorPrefixed(property))
  })
})

test('returns false for unprefixed properties', t => {
  t.plan(unprefixedProperties.length)

  unprefixedProperties.forEach(property => {
    t.falsy(isVendorPrefixed(property))
  })
})
