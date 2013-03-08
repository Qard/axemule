var assert = require('assert')
  , axemule = require('../')

describe('html', function () {
  // Test default and custom doctypes
  var defaultDoctype = '<!DOCTYPE html>'
  it('html() should equal ' + defaultDoctype, function () {
    assert.equal(axemule.html().serialize(), defaultDoctype)
  })
  
  var customDoctype = '<?FOO?>'
  it('html("'+customDoctype+'") should equal ' + customDoctype, function () {
    assert.equal(axemule.html(customDoctype).serialize(), customDoctype)
  })

  // Repeat some tests for all valid types
  axemule.html.types.forEach(function (type) {
    // Test element creation
    it(type + '() should equal <' + type + '></' + type + '>', function () {
      var doc = axemule.html('')
      doc[type]()
      assert.equal(doc.serialize(), '<' + type + '></' + type + '>')
    })

    // Test attributes
    it(type + '({ foo: "bar" }) should equal <' + type + ' foo="bar"></' + type + '>', function () {
      var doc = axemule.html('')
      doc[type]({ foo: 'bar' })
      assert.equal(doc.serialize(), '<' + type + ' foo="bar"></' + type + '>')
    })

    // Test content containment
    var contentResult = '<' + type + '>foo</' + type + '>'
    it('should equal ' + contentResult, function () {
      var doc = axemule.html('')
      doc[type]('foo')
      assert.equal(doc.serialize(), contentResult)
    })

    // Test child containment
    var childResult = '<' + type + '><' + type + '></' + type + '></' + type + '>'
    it('should equal ' + childResult, function () {
      var doc = axemule.html('')
      doc[type](function () {
        this[type]()
      })
      assert.equal(doc.serialize(), childResult)
    })
  })
})