
# chrome-webstore

[![npm-version]][npm] [![travis-ci]][travis] [![coveralls-status]][coveralls]

```js
var chrome = require('chrome-webstore')

;(async () => {
  var meta = await chrome.extension({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
  // or
  var meta = await chrome.extension({
    url: 'https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk'
  })
  console.log(meta)
})()
```

```json
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
}
```


  [npm-version]: https://img.shields.io/npm/v/chrome-webstore.svg?style=flat-square (NPM Package Version)
  [travis-ci]: https://img.shields.io/travis/simov/chrome-webstore/master.svg?style=flat-square (Build Status - Travis CI)
  [coveralls-status]: https://img.shields.io/coveralls/simov/chrome-webstore.svg?style=flat-square (Test Coverage - Coveralls)
  [codecov-status]: https://img.shields.io/codecov/c/github/simov/chrome-webstore.svg?style=flat-square (Test Coverage - Codecov)

  [npm]: https://www.npmjs.com/package/chrome-webstore
  [travis]: https://travis-ci.org/simov/chrome-webstore
  [coveralls]: https://coveralls.io/github/simov/chrome-webstore
  [codecov]: https://codecov.io/github/simov/chrome-webstore?branch=master
