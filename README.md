
# chrome-webstore

[![npm-version]][npm]

> Google Chrome Web Store HTTP Client

## Table of Contents

- **[API](#api)**
  - [detail](#detail) / [items](#items)
- **[Items Filter Parameters](#items-filter-parameters)**
  - [search](#search) / [category](#category) / [rating](#rating) / [features](#features)  / [count](#count) / [offset](#offset)
- **[Examples](#examples)**

# API

Method     | Arguments | Returns    | Description
---        | ---       | ---        | ---
**detail** | `{id, related, more}`  | `{Object}` | Full details about a Web Store item
**items**  | `{search, category, rating, features, count, offset}` | `[Array]` | List Web Store items

## detail

Get full detail data about a Web Store item:

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.detail({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
  console.log(meta)
})()
```

<details>
<summary>click to expand</summary>

```js
{
  id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
  name: 'Markdown Viewer',
  title: 'Markdown Viewer',
  slug: 'markdown-viewer',
  url: 'https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
  author: { name: 'simov.github.io', domain: null, url: null },
  description: '✔ Renders local and remote URLs\n✔ Granular access to remote origins\n✔ Multiple markdown parsers\n✔ Full control over the compiler options\n✔ Themes (including GitHub theme)\n✔ GitHub Flavored Markdown (GFM)\n✔ Auto reload on file change\n✔ Syntax highlighted code blocks\n✔ Table of Contents (TOC)\n✔ MathJax and Emoji support\n✔ Remembers scroll position\n✔ Markdown Content-Type detection\n✔ URL detection using RegExp\n✔ Toggle Content Security Policy (CSP)\n✔ Override page encoding\n✔ Settings synchronization\n✔ Raw and rendered markdown views\n✔ Free and Open Source\n\n✚ Local Files\n\n1. Navigate to `chrome://extensions`\n2. Locate Markdown Viewer and click on the `DETAILS` button\n3. Make sure that the `Allow access to file URLs` switch is turned on\n\n✚ Remote Files\n\n1. Click on the Markdown Viewer icon and select `Advanced Options`\n2. Add the origin that you want enabled for the Markdown Viewer extension\n\n✚ Compiler Options\n\n✔ Compilers: Marked, Remark\n✔ Documentation: https://github.com/simov/markdown-viewer#compiler-options\n\n✚ Content Options\n\n✔ Features: Autoreload, TOC, Mathjax, Emoji, Scroll\n✔ Documentation: https://github.com/simov/markdown-viewer#content-options\n\n✚ Full Documentation\n\n✔ https://github.com/simov/markdown-viewer',
  website: 'https://github.com/simov/markdown-viewer',
  support: 'https://github.com/simov/markdown-viewer/issues',
  version: '3.6',
  size: '223KiB',
  published: 'July 7, 2018',
  users: '46,860',
  rating: { average: 4.328467153284672, count: 137 },
  price: 'Free',
  purchases: null,
  category: { name: 'Productivity', slug: 'ext/7-productivity' },
  images:
   { '26x26': 'https://lh3.googleusercontent.com/78nux4sjd5uRGIB1oaSFT_zkiktsy-GX_HAGTrKlxnOiw1Jc7Fwhx8IijRpoqYgeiuuPxzQa=w26-h26-e365',
     '128x128': 'https://lh3.googleusercontent.com/78nux4sjd5uRGIB1oaSFT_zkiktsy-GX_HAGTrKlxnOiw1Jc7Fwhx8IijRpoqYgeiuuPxzQa=w128-h128-e365',
     '141x90': 'https://lh3.googleusercontent.com/vWHnrFwI1i8--kb0_A9UO4_6xMd0GJOpNvu1iTrh1F0gIbrSkdW1ALzvStVbK6lChDVjAjKG=w141-h90-e365',
     '220x140': 'https://lh3.googleusercontent.com/vWHnrFwI1i8--kb0_A9UO4_6xMd0GJOpNvu1iTrh1F0gIbrSkdW1ALzvStVbK6lChDVjAjKG=w220-h140-e365',
     '440x280': 'https://lh3.googleusercontent.com/vWHnrFwI1i8--kb0_A9UO4_6xMd0GJOpNvu1iTrh1F0gIbrSkdW1ALzvStVbK6lChDVjAjKG=w440-h280-e365',
     '460x340': null },
  languages: [ 'English' ],
  developer: { email: null, address: null, policy: null },
  type: 'Extension',
  status: 'Published',
  manifest: '{\n"update_url": "https://clients2.google.com/service/update2/crx",\n\n  "manifest_version": 2,\n  "name"            : "Markdown Viewer",\n  "version"         : "3.6",\n  "description"     : "Markdown Viewer",\n\n  "browser_action": {\n    "default_icon": {\n      "19" : "/images/icon19.png",\n      "38" : "/images/icon38.png"\n    },\n    "default_title": "Markdown Viewer",\n    "default_popup": "/content/popup.html"\n  },\n\n  "options_page": "/content/options.html",\n\n  "background" : {\n    "scripts": [\n      "/vendor/marked.min.js",\n      "/vendor/remark.min.js",\n      "/vendor/remark-html.min.js",\n      "/vendor/remark-slug.min.js",\n      "/vendor/remark-frontmatter.min.js",\n\n      "/background/compilers/marked.js",\n      "/background/compilers/remark.js",\n\n      "/background/storage.js",\n      "/background/webrequest.js",\n      "/background/detect.js",\n      "/background/inject.js",\n      "/background/messages.js",\n      "/background/mathjax.js",\n\n      "/background/index.js"\n    ],\n    "persistent": false\n  },\n\n  "web_accessible_resources": [\n    "/themes/github.css",\n    "/themes/github-dark.css",\n\n    "/themes/godspeed.css",\n    "/themes/new-modern.css",\n    "/themes/torpedo.css",\n    "/themes/vostok.css",\n\n    "/themes/ghostwriter.css",\n    "/themes/radar.css",\n    "/themes/foghorn.css",\n    "/themes/markdown.css",\n    "/themes/markedapp-byword.css",\n    "/themes/solarized-dark.css",\n    "/themes/solarized-light.css",\n\n    "/themes/screen.css",\n    "/themes/markdown5.css",\n    "/themes/markdown6.css",\n    "/themes/markdown7.css",\n    "/themes/markdown8.css",\n    "/themes/markdown9.css",\n    "/themes/markdown-alt.css"\n  ],\n\n  "icons": {\n    "16" : "/images/icon16.png",\n    "48" : "/images/icon48.png",\n    "128": "/images/icon128.png"\n  },\n\n  "homepage_url": "https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk",\n\n  "permissions": [\n    "storage",\n    "file:///*"\n  ],\n\n  "optional_permissions": [\n    "https://*/",\n    "http://*/",\n    "*://*/",\n    "webRequest",\n    "webRequestBlocking"\n  ]\n}\n'
}
```

</details>

Additionally a list of `related` extensions and `more` from the same developer can be included in the result set:

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.detail({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', related: true, more: true})
  console.log(meta)
})()
```


## items

Get a list of items from Chrome Web Store (only a subset of the detail data):

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.items({search: 'markdown', category: 'extensions', count: 2})
  console.log(meta)
})()
```

<details>
<summary>click to expand</summary>

```js
[
  { id: 'elifhakcjgalahccnjkneoccemfahfoa',
    name: 'Markdown Here',
    title: 'Write your email in Markdown, then make it pretty.',
    slug: 'markdown-here',
    url: 'https://chrome.google.com/webstore/detail/markdown-here/elifhakcjgalahccnjkneoccemfahfoa',
    author: { name: 'Adam Pritchard', domain: null, url: null },
    users: '80,395',
    rating: { average: 4.530864197530864, count: 324 },
    price: 'Free',
    category: { name: 'Productivity', slug: 'ext/7-productivity' },
    images:
     { '26x26': 'https://lh3.googleusercontent.com/8MnGCOk0daD0BIo1KPOICczj9L1gioa-v4wFIFgIZw5uWRdhDh2UoFZvlcsgisLIgb2o4j484w=w26-h26-e365',
       '128x128': 'https://lh3.googleusercontent.com/8MnGCOk0daD0BIo1KPOICczj9L1gioa-v4wFIFgIZw5uWRdhDh2UoFZvlcsgisLIgb2o4j484w=w128-h128-e365',
       '141x90': 'https://lh3.googleusercontent.com/0kFPdu9d7f3WZeQjQcNdzpy-vwVh6V_7HSXWQEKR4qV7W-9neRr7zIctUNHCMKo5huzRU0yu-Q=w141-h90-e365',
       '220x140': 'https://lh3.googleusercontent.com/0kFPdu9d7f3WZeQjQcNdzpy-vwVh6V_7HSXWQEKR4qV7W-9neRr7zIctUNHCMKo5huzRU0yu-Q=w220-h140-e365',
       '440x280': 'https://lh3.googleusercontent.com/0kFPdu9d7f3WZeQjQcNdzpy-vwVh6V_7HSXWQEKR4qV7W-9neRr7zIctUNHCMKo5huzRU0yu-Q=w440-h280-e365',
       '460x340': null },
    status: 'Published' },
  { id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
    name: 'Markdown Viewer',
    title: 'Markdown Viewer',
    slug: 'markdown-viewer',
    url: 'https://chrome.google.com/webstore/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
    author: { name: 'simov.github.io', domain: null, url: null },
    users: '46,860',
    rating: { average: 4.328467153284672, count: 137 },
    price: 'Free',
    category: { name: 'Productivity', slug: 'ext/7-productivity' },
    images:
     { '26x26': 'https://lh3.googleusercontent.com/78nux4sjd5uRGIB1oaSFT_zkiktsy-GX_HAGTrKlxnOiw1Jc7Fwhx8IijRpoqYgeiuuPxzQa=w26-h26-e365',
       '128x128': 'https://lh3.googleusercontent.com/78nux4sjd5uRGIB1oaSFT_zkiktsy-GX_HAGTrKlxnOiw1Jc7Fwhx8IijRpoqYgeiuuPxzQa=w128-h128-e365',
       '141x90': 'https://lh3.googleusercontent.com/vWHnrFwI1i8--kb0_A9UO4_6xMd0GJOpNvu1iTrh1F0gIbrSkdW1ALzvStVbK6lChDVjAjKG=w141-h90-e365',
       '220x140': 'https://lh3.googleusercontent.com/vWHnrFwI1i8--kb0_A9UO4_6xMd0GJOpNvu1iTrh1F0gIbrSkdW1ALzvStVbK6lChDVjAjKG=w220-h140-e365',
       '440x280': 'https://lh3.googleusercontent.com/vWHnrFwI1i8--kb0_A9UO4_6xMd0GJOpNvu1iTrh1F0gIbrSkdW1ALzvStVbK6lChDVjAjKG=w440-h280-e365',
       '460x340': null },
    status: 'Published' }
]
```

</details>

# Items Filter Parameters

The `items` method supports the following parameters:

Parameter    | Example        | Description
---          | :---:          | ---
**search**   | `'markdown'`   | Search term to filter by
**category** | `'extensions'` | Category name to filter by
**rating**   | `4`            | Filter items by number of stars
**features** | `['free', 'gdrive']` | Filter items by feature set
**count**    | `15`           | Number of results to return
**offset**   | `15`           | Return up to results `count` starting from `offset`

## search

Search the store by string:

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.items({search: 'markdown', category: 'extensions'})
  console.log(meta)
})()
```

## category

Filter by category name:

Category            | Description
---                 | ---
`extensions`        | All extensions
`ext/[NAME]`        | Extensions category
`themes`            | All themes
`theme/[NAME]`      | Themes category
`apps`              | All apps
`app/[NAME]`        | Apps category
`collection/[NAME]` | Collection

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.items({category: 'collection/new_noteworthy_extensions'})
  console.log(meta)
})()
```

> Check out [examples/category.json][example-category] for a list of available category names.

## rating

Filter by number of stars, one of: `5`, `4`, `3` or `2` stars:

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.items({category: 'extensions', rating: 4})
  console.log(meta)
})()
```

## features

Filter by set of features:

Value       | Description
---         | ---
`'offline'` | Runs Offline
`'google'`  | By Google
`'free'`    | Free
`'android'` | Available for Android
`'gdrive'`  | Works with Google Drive

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.items({category: 'extensions', features: ['offline', 'gdrive']})
  console.log(meta)
})()
```

## count

Request specific number of records (defaults to 5):

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.items({search: 'markdown', category: 'extensions', count: 15})
  console.log(meta)
})()
```

## offset

Return up to results `count` starting from `offset` (useful for pagination):

```js
var webstore = require('chrome-webstore')

;(async () => {
  var meta = await webstore.items({
    search: 'markdown', category: 'extensions', count: 10, offset: 10
  })
  console.log(meta)
})()
```

> **Requires the `category` parameter!**

## Examples

- [detail][example-detail]
- [items][example-items]

```bash
node examples/detail.js [example index]
node examples/items.js [example index]
```


  [npm-version]: https://img.shields.io/npm/v/chrome-webstore.svg?style=flat-square (NPM Package Version)
  [travis-ci]: https://img.shields.io/travis/simov/chrome-webstore/master.svg?style=flat-square (Build Status - Travis CI)
  [coveralls-status]: https://img.shields.io/coveralls/simov/chrome-webstore.svg?style=flat-square (Test Coverage - Coveralls)
  [codecov-status]: https://img.shields.io/codecov/c/github/simov/chrome-webstore.svg?style=flat-square (Test Coverage - Codecov)

  [npm]: https://www.npmjs.com/package/chrome-webstore
  [travis]: https://travis-ci.org/simov/chrome-webstore
  [coveralls]: https://coveralls.io/github/simov/chrome-webstore
  [codecov]: https://codecov.io/github/simov/chrome-webstore?branch=master

  [example-detail]: https://github.com/simov/chrome-webstore/blob/master/examples/detail.js
  [example-items]: https://github.com/simov/chrome-webstore/blob/master/examples/items.js
  [example-category]: https://github.com/simov/chrome-webstore/blob/master/examples/category.json
