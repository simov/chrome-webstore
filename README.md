
# chrome-webstore

[![npm-version]][npm]

> _Google Chrome Web Store HTTP Client_

## Table of Contents

- **[API](#api)**
- **[Arguments](#arguments)**
  - [detail](#detail) / [items](#items) / [reviews](#reviews) / [issues](#issues)
- **[Chrome Web Store API Version](#chrome-web-store-api-version)**
- **[Examples](#examples)**

# API

Name    | Arguments | Returns    | Description
---     | ---       | ---        | ---
detail  | `{id, related, more, locale, version, ...options}`  | `{Object}` | Full details about a Web Store item
items   | `{search, category, rating, features, count, offset, locale, version, ...options}` | `[Array]` | List Web Store items (subset of the detail data)
reviews | `{id, count, offset, locale, sort, version, ...options}` | `[Array]` | List reviews for an item
issues  | `{id, type, count, page, version, ...options}` | `[Array]` | List issues for an item
version | `{...options}` | `string` | Chrome Web Store [API version](#chrome-web-store-api-version)

```js
var webstore = require('chrome-webstore')

;(async () => {
  var items = await webstore.items({search: 'markdown', category: 'extensions'})
  var details = await webstore.detail({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
  var reviews = await webstore.reviews({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
  var issues = await webstore.issues({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
  var version = await webstore.version()
})()
```

<details>
<summary><strong>detail</strong></summary>

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
  users: '51,850',
  rating: { average: 4.355704697986577, count: 149 },
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

<details>
<summary><strong>items</strong></summary>

```js
[
  { id: 'elifhakcjgalahccnjkneoccemfahfoa',
    name: 'Markdown Here',
    title: 'Write your email in Markdown, then make it pretty.',
    slug: 'markdown-here',
    url: 'https://chrome.google.com/webstore/detail/markdown-here/elifhakcjgalahccnjkneoccemfahfoa',
    author: { name: 'Adam Pritchard', domain: null, url: null },
    users: '84,640',
    rating: { average: 4.533132530120482, count: 332 },
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
    users: '51,850',
    rating: { average: 4.355704697986577, count: 149 },
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

<details>
<summary><strong>reviews</strong></summary>

```js
[
  { rating: 5,
    message: 'Awesome extension. \n\nThank you very much :)',
    created: 1533732378563,
    updated: 1533732655781,
    author:
     { id: '0000009cb63b6d30',
       name: 'Quan Lao',
       avatar: null } },
  { rating: 3,
    message: 'Useful and effective.\nGood to have a provision to easily include additional codeblock languages as an extension function.',
    created: 1531466745894,
    updated: 1531466864058,
    author:
     { id: '000000ed243a38c0',
       name: 'Girisan Ramankutty',
       avatar: 'https://lh3.googleusercontent.com/-yXupPr2Oyig/AAAAAAAAAAI/AAAAAAAAAFg/_9tTLqzivCA/s40-c-k/photo.jpg' } }
]
```

</details>

<details>
<summary><strong>issues</strong></summary>

```js
[
  { type: 'problem',
    status: 'open',
    title: 'MD viewer issue',
    description: 'I am loading local file URLs to the browser and MD viewer is not markingdown the file anymore, I have allowed all sites and remote/local files so am struggling to understand why it\'s not working anymore',
    browser: '5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    version: '3.6',
    date: 1552132412409,
    author:
     { id: '000000db916e36f5',
       name: 'jermaine ijieh',
       avatar: 'https://lh3.googleusercontent.com/a-/AAuE7mBx6Mib80sZHY7D2eznEIYCjj_hlYn3iKGhxfLtDg=s40-c-k' } },
  { type: 'suggestion',
    status: 'closed',
    title: 'Blacklisting',
    description: 'Instead of whitelisting I would prefer to blacklist sites:\n\nI would like to have md-display support on all sites but I would disable it on website which already have it embedded, e.g. github.com.',
    browser: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36',
    version: '3.6',
    date: 1540380998369,
    author:
     { id: '00000050ec61452a',
       name: 'Earl Marshal',
       avatar: 'https://lh3.googleusercontent.com/a-/AAuE7mAqC0HHGKzwA7P1YArM1y-EvYIH4c7CMFO0le-_Iw=s40-c-k' } }
]
```

</details>


# Arguments

## detail

Parameter  | Example   | Description
---        | :---:     | ---
id         | `'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'` | Item ID
related    | `true`    | Additionally return a list of related extensions
more       | `true`    | Additionally return more items from the same developer
locale     | `'bg'`    | Set locale for the response data (defaults to 'en')
version    | `20201016`| [API version](#chrome-web-store-api-version)
...options | `agent, timeout` | any [request-compose][compose-client-options] option

---

## items

Parameter  | Example          | Description
---        | :---:            | ---
search     | `'markdown'`     | Filter items by search term
category   | `'extensions'`   | Filter items by category name
rating     | `5` / `4` / `3` / `2` | Filter items by number of stars
features   | `['free', 'gdrive']` | Filter items by feature set
count      | `15`             | Number of items to return (defaults to 5)
offset     | `15`             | Start returning items from `offset` (**requires** `category`)
locale     | `'bg'`           | Set locale for the response data (defaults to 'en')
version    | `20201016`       | [API version](#chrome-web-store-api-version)
...options | `agent, timeout` | any [request-compose][compose-client-options] option

### category

> Check out [examples/category.json][example-category] for a full list of available category names.

Category            | Description
---                 | ---
`extensions`        | All extensions
`ext/[NAME]`        | Extensions category
`themes`            | All themes
`theme/[NAME]`      | Themes category
`apps`              | All apps
`app/[NAME]`        | Apps category
`collection/[NAME]` | Collection

### features

Value       | Description
---         | ---
`'offline'` | Runs Offline
`'google'`  | By Google
`'free'`    | Free
`'android'` | Available for Android
`'gdrive'`  | Works with Google Drive

---

## reviews

Parameter  | Example  | Description
---        | :---:    | ---
id         | `'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'` | Item ID
count      | `10`     | Number of reviews to return (defaults to 5)
offset     | `10`     | Start returning items from offset
locale     | `'en'`   | Return reviews only in locale (defaults to all locales)
sort       | `'helpful'` / `'recent'` | Sort order (defaults to helpful)
version    | `20201016`| [API version](#chrome-web-store-api-version)
...options | `agent, timeout` | any [request-compose][compose-client-options] option

---

## issues

Parameter  | Example | Description
---        | :---:   | ---
id         | `'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'` | Item ID
type       | `'problem'` / `'question'` / `'suggestion'` | Filter by issue type (defaults to all)
count      | `10`    | Number of issues to return (defaults to 5)
page       | `2`     | Start returning issues from page (page * count)
version    | `20201016`| [API version](#chrome-web-store-api-version)
...options | `agent, timeout` | any [request-compose][compose-client-options] option

---

## version

Parameter  | Example | Description
---        | :---:   | ---
...options | `agent, timeout` | any [request-compose][compose-client-options] option

# Chrome Web Store API Version

The Chrome Web Store REST API have a version string that needs to be sent with each request. For convenience the last known version of the REST API is hardcoded inside the module and set by default.

In case of `400 Bad Request` errors you might have to set the correct REST API version explicitly, using the optional `version` argument.

The correct REST API `version` can be obtained using the [`version`](#version) method or manually as follows:

- Open an extension page on [chrome.google.com]
- Open `DevTools`, and click on the `Network` tab, then filter by `XHR` requests only
- Reload the page
- Click on one of the requests and take a look at the `Request URL`
- Find the `pv` parameter in the `Request URL`, that's the `version` that you need to set

# Examples

> [detail][example-detail] / [items][example-items] / [reviews][example-reviews] / [issues][example-issues] / [version][example-version]

```bash
node examples/detail.js [example index]
node examples/items.js [example index]
node examples/reviews.js [example index]
node examples/issues.js [example index]
node examples/version.js [example index]
```


  [npm-version]: https://img.shields.io/npm/v/chrome-webstore.svg?style=flat-square (NPM Package Version)
  [travis-ci]: https://img.shields.io/travis/simov/chrome-webstore/master.svg?style=flat-square (Build Status - Travis CI)
  [coveralls-status]: https://img.shields.io/coveralls/simov/chrome-webstore.svg?style=flat-square (Test Coverage - Coveralls)
  [codecov-status]: https://img.shields.io/codecov/c/github/simov/chrome-webstore.svg?style=flat-square (Test Coverage - Codecov)

  [npm]: https://www.npmjs.com/package/chrome-webstore
  [travis]: https://travis-ci.org/simov/chrome-webstore
  [coveralls]: https://coveralls.io/github/simov/chrome-webstore
  [codecov]: https://codecov.io/github/simov/chrome-webstore?branch=master

  [compose-client-options]: https://github.com/simov/request-compose#options
  [chrome.google.com]: https://chrome.google.com/webstore/category/extensions

  [example-category]: https://github.com/simov/chrome-webstore/blob/master/examples/category.json
  [example-detail]: https://github.com/simov/chrome-webstore/blob/master/examples/detail.js
  [example-items]: https://github.com/simov/chrome-webstore/blob/master/examples/items.js
  [example-reviews]: https://github.com/simov/chrome-webstore/blob/master/examples/reviews.js
  [example-issues]: https://github.com/simov/chrome-webstore/blob/master/examples/issues.js
  [example-version]: https://github.com/simov/chrome-webstore/blob/master/examples/version.js
