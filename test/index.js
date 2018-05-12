
var t = require('assert')
var fs = require('fs')
var path = require('path')
var http = require('http')

var fixture = fs.readFileSync(
  path.resolve(__dirname, 'fixtures/extension.html'), 'utf8')

var chrome = require('../')

var ext = {
  name: 'markdown-viewer',
  id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
}

describe('index', () => {
  var server

  before((done) => {
    server = http.createServer()
    server.on('request', (req, res) => {
      if (req.url === `/webstore/details/${ext.id}`) {
        res.writeHead(301, {location: `/webstore/details/${ext.name}/${ext.id}`})
        res.end()
      }
      else if (req.url === `/webstore/details/${ext.name}/${ext.id}`) {
        res.end(fixture)
      }
    })
    server.listen(5000, done)
  })

  it('extension', async () => {
    t.deepEqual(
      await chrome.extension({
        id: ext.id,
        url: `http://localhost:5000/webstore/details/${ext.id}`
      }),
      {
        "id": "ckkdlimhmcjmikdlpkmbgfkaikojcbjk",
        "name": "Markdown Viewer",
        "url": "https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk",
        "image": "https://lh3.googleusercontent.com/78nux4sjd5uRGIB1oaSFT_zkiktsy-GX_HAGTrKlxnOiw1Jc7Fwhx8IijRpoqYgeiuuPxzQa=w128-h128-e365",
        "version": "3.5",
        "price": "0",
        "priceCurrency": "USD",
        "interactionCount": "41,639",
        "operatingSystem": "Chrome",
        "ratingValue": "4.38",
        "ratingCount": "120",
        "updated": "April 16, 2018",
        "size": "219KiB",
        "website": "https://github.com/simov/markdown-viewer",
        "description": "✔ No special permissions required for file URLs\n✔ Full control over the allowed origins\n✔ Supports multiple markdown parsers\n✔ Full control over the compiler options\n✔ Themes support (including GitHub theme)\n✔ Supports GitHub Flavored Markdown\n✔ Syntax highlighted code blocks\n✔ Generates Table of Contents (TOC)\n✔ Remembers scroll position\n✔ Emoji support\n✔ MathJax support\n✔ Settings synchronization\n✔ Raw and rendered markdown views\n✔ Detects markdown by header and path\n✔ Toggle Content Security Policy\n✔ Override page encoding\n✔ Free and Open Source\n\n✚ Local Files\n\n1. Navigate to chrome://extensions\n2. Make sure that the 'Allow access to file URLs' checkbox is checked for the Markdown Viewer extension\n\n✚ Remote Files\n\n1. Click on the Markdown Viewer icon and select 'Advanced Options'\n2. Add the origin that you want enabled for the Markdown Viewer extension\n\n✚ Compiler Options\n\n✔ Compilers: Marked, Remark\n✔ Documentation: https://github.com/simov/markdown-viewer#compiler-options\n\n✚ Content Options\n\n✔ Features: TOC, Scroll, Emoji, Mathjax\n✔ Documentation: https://github.com/simov/markdown-viewer#content-options\n\n✚ Full Documentation\n\n✔ https://github.com/simov/markdown-viewer"
      },
      'should generate meta data'
    )
  })

  after((done) => {
    server.close(done)
  })

})
