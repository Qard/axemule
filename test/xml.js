var assert = require('assert')
  , axemule = require('../')

describe('XML', function () {
  // Test default and custom doctypes
  var defaultDoctype = '<?xml version="1.0" encoding="UTF-8"?>'
  it('xml() should equal ' + defaultDoctype, function () {
    assert.equal(axemule.xml().serialize(), defaultDoctype)
  })
  
  var customDoctype = '<?FOO?>'
  it('xml("'+customDoctype+'") should equal ' + customDoctype, function () {
    assert.equal(axemule.xml(customDoctype).serialize(), customDoctype)
  })

  // Test element creation
  var elementResult = '<foo></foo>'
  it('should equal ' + attributeResult, function () {
    var doc = axemule.xml('')
    doc.add('foo')
    assert.equal(doc.serialize(), elementResult)
  })

  // Test attribute serialization
  var attributeResult = '<foo bar="baz"></foo>'
  it('should equal ' + attributeResult, function () {
    var doc = axemule.xml('')
    doc.add('foo', { bar: 'baz' })
    assert.equal(doc.serialize(), attributeResult)
  })

  // Test child containment
  var childResult = '<foo><bar></bar></foo>'
  it('should equal ' + childResult, function () {
    var doc = axemule.xml('')
    doc.add('foo', function () {
      this.add('bar')
    })
    assert.equal(doc.serialize(), childResult)
  })

  // Test content containment
  var contentResult = '<foo>bar</foo>'
  it('should equal ' + contentResult, function () {
    var doc = axemule.xml('')
    doc.add('foo', 'bar')
    assert.equal(doc.serialize(), contentResult)
  })
})