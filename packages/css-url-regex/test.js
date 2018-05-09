import test from "ava"
import cssUrlRegex from "./"

const matches = [
  "url(foo.css)",
  "url('foo.css')",
  "url(foo/bar.css)",
  "url(http://google.com/foo/bar)"
]

const nonMatches = ["foo", "(foo.css)", "url (foo.css)"]

test("matches urls", t => {
  t.plan(matches.length)

  matches.forEach(match => {
    t.truthy(cssUrlRegex().test(match))
  })
})

test("does not match non existent urls", t => {
  t.plan(nonMatches.length)

  nonMatches.forEach(nonMatch => {
    t.falsy(cssUrlRegex().test(nonMatch))
  })
})
/*
describe('css-url-regex', function() {

  it('should find a css url with no quotes', function() {
    assert.equal(cssUrl().test('url(foo.css)'), true);
  });

  it('should find a css url with quotes', function() {
    assert.equal(cssUrl().test("url('foo.css')"), true);
  });

  it('should not find a css url if it is not there', function() {
    assert.equal(cssUrl().test("('foo.css')"), false);
  });

  it('should match multiple urls', function() {
    assert.deepEqual(
      "url(foo.css); url(bar.css);".match(cssUrl()),
      ["url(foo.css)", "url(bar.css)"]);
  });
});
*/
