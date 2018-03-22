
var t = require('assert')
var fs = require('fs')
var path = require('path')

var extract = require('../lib/extract')
var format = require('../lib/format')
var fixture = fs.readFileSync(
  path.resolve(__dirname, 'fixtures/extension.html'), 'utf8')


describe('format', () => {

  it('values', () => {
    var meta = format(extract('ckkdlimhmcjmikdlpkmbgfkaikojcbjk', fixture))
    t.equal(meta.interactionCount, '35,055')
    t.equal(meta.ratingValue, '4.44')
    t.ok(meta.description.indexOf('&#39;') === -1)
  })

})
