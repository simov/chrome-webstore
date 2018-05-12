
var t = require('assert')
var fs = require('fs')
var path = require('path')

var extract = require('../lib/extract')
var fixture = fs.readFileSync(
  path.resolve(__dirname, 'fixtures/extension.html'), 'utf8')


describe('extract', () => {

  it('meta', () => {
    t.deepEqual(
      extract.meta(fixture),
      {
        name: 'Markdown Viewer',
        url: 'https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
        image: 'https://lh3.googleusercontent.com/78nux4sjd5uRGIB1oaSFT_zkiktsy-GX_HAGTrKlxnOiw1Jc7Fwhx8IijRpoqYgeiuuPxzQa=w128-h128-e365',
        version: '3.5',
        price: '0',
        priceCurrency: 'USD',
        interactionCount: 'UserDownloads:41,639',
        operatingSystem: 'Chrome',
        ratingValue: '4.383333333333334',
        ratingCount: '120'
      },
      'should extract all meta tag values'
    )
  })

  it('details', () => {
    t.deepEqual(
      extract.details(fixture),
      {
        updated: 'April 16, 2018',
        size: '219KiB',
        // language: 'English'
      },
      'should extract details'
    )
  })

  it('website', () => {
    t.deepEqual(
      extract.website(fixture),
      {
        website: 'https://github.com/simov/markdown-viewer'
      },
      'should extract website'
    )
  })

  it('description', () => {
    t.deepEqual(
      extract.description(fixture),
      {
        description:
`✔ No special permissions required for file URLs
✔ Full control over the allowed origins
✔ Supports multiple markdown parsers
✔ Full control over the compiler options
✔ Themes support (including GitHub theme)
✔ Supports GitHub Flavored Markdown
✔ Syntax highlighted code blocks
✔ Generates Table of Contents (TOC)
✔ Remembers scroll position
✔ Emoji support
✔ MathJax support
✔ Settings synchronization
✔ Raw and rendered markdown views
✔ Detects markdown by header and path
✔ Toggle Content Security Policy
✔ Override page encoding
✔ Free and Open Source

✚ Local Files

1. Navigate to chrome://extensions
2. Make sure that the &#39;Allow access to file URLs&#39; checkbox is checked for the Markdown Viewer extension

✚ Remote Files

1. Click on the Markdown Viewer icon and select &#39;Advanced Options&#39;
2. Add the origin that you want enabled for the Markdown Viewer extension

✚ Compiler Options

✔ Compilers: Marked, Remark
✔ Documentation: https://github.com/simov/markdown-viewer#compiler-options

✚ Content Options

✔ Features: TOC, Scroll, Emoji, Mathjax
✔ Documentation: https://github.com/simov/markdown-viewer#content-options

✚ Full Documentation

✔ https://github.com/simov/markdown-viewer`
      },
      'should extract description'
    )
  })

  it('extract', () => {

    t.deepEqual(
      extract('ckkdlimhmcjmikdlpkmbgfkaikojcbjk', fixture),
      {
        id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
        name: 'Markdown Viewer',
        url: 'https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
        image: 'https://lh3.googleusercontent.com/78nux4sjd5uRGIB1oaSFT_zkiktsy-GX_HAGTrKlxnOiw1Jc7Fwhx8IijRpoqYgeiuuPxzQa=w128-h128-e365',
        version: '3.5',
        price: '0',
        priceCurrency: 'USD',
        interactionCount: 'UserDownloads:41,639',
        operatingSystem: 'Chrome',
        ratingValue: '4.383333333333334',
        ratingCount: '120',
        updated: 'April 16, 2018',
        size: '219KiB',
        // language: 'English',
        website: 'https://github.com/simov/markdown-viewer',
        description: '✔ No special permissions required for file URLs\n✔ Full control over the allowed origins\n✔ Supports multiple markdown parsers\n✔ Full control over the compiler options\n✔ Themes support (including GitHub theme)\n✔ Supports GitHub Flavored Markdown\n✔ Syntax highlighted code blocks\n✔ Generates Table of Contents (TOC)\n✔ Remembers scroll position\n✔ Emoji support\n✔ MathJax support\n✔ Settings synchronization\n✔ Raw and rendered markdown views\n✔ Detects markdown by header and path\n✔ Toggle Content Security Policy\n✔ Override page encoding\n✔ Free and Open Source\n\n✚ Local Files\n\n1. Navigate to chrome://extensions\n2. Make sure that the &#39;Allow access to file URLs&#39; checkbox is checked for the Markdown Viewer extension\n\n✚ Remote Files\n\n1. Click on the Markdown Viewer icon and select &#39;Advanced Options&#39;\n2. Add the origin that you want enabled for the Markdown Viewer extension\n\n✚ Compiler Options\n\n✔ Compilers: Marked, Remark\n✔ Documentation: https://github.com/simov/markdown-viewer#compiler-options\n\n✚ Content Options\n\n✔ Features: TOC, Scroll, Emoji, Mathjax\n✔ Documentation: https://github.com/simov/markdown-viewer#content-options\n\n✚ Full Documentation\n\n✔ https://github.com/simov/markdown-viewer'
      },
      'should return single object'
    )
  })

})
