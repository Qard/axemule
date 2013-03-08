/**
 * Construct XML document
 * 
 * @param string
 *    String prefix, typically doctype
 */
function xml (text) {
  if ( ! (this instanceof xml)) {
    return new xml(text)
  }
  this.text = []
  this.addText((typeof text !== 'undefined') ? text : '<?xml version="1.0" encoding="UTF-8"?>')
}

/**
 * Convert block-commented function to multiline string
 * 
 * @param function
 *    Function to return first block comment content from
 */
xml.prototype.strfn = function (fn) {
  return fn.toString().replace(/function\s*\(.*\)\s*{\s*\/\*\s+|\s+\*\/.*}$|[\r\n]\s+/g, '')
}

/**
 * Serialize an object as a xml attribute string
 * 
 * @param object
 *    A hash of attributes to serialize
 */
xml.prototype.attrs = function (o) {
  var str = new xml('')
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      str.addText(' ' + i + '="' + o[i] + '"')
    }
  }
  return str.serialize()
}

/**
 * Add an xml element
 * 
 * @param string
 *    The type name of the element
 * 
 * @param object | optional
 *    The attribute object to serialize
 * 
 * @param function or string | optional
 *    String or callback supplying new xml instance to add to content
 */
xml.prototype.add = function (type, attrs, cb) {
  if (typeof attrs === 'function' || typeof attrs === 'string') {
    cb = attrs
    attrs = null
  }

  this.text.push('<' + type + (attrs ? this.attrs(attrs) : '') + '>')
  
  if (typeof cb === 'function') {
    cb.call(this)
  } else if (typeof cb === 'string') {
    this.addText(cb)
  }
  
  this.text.push('</' + type + '>')
}

/**
 * Add plain text in-place
 * 
 * @param string
 *    String or block-commented function to add to content
 */
xml.prototype.addText = function (text) {
  if (typeof text === 'function') {
    text = this.strfn(text)
  }
  text && this.text.push(text)
}

/**
 * Serialize and return current state
 */
xml.prototype.serialize = function () {
  return this.text.join('')
}

module.exports = xml