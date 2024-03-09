
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

| Name    | Arguments | Returns    | Description
| ---     | ---       | ---        | ---
| detail  | `{id, related, more, locale, version, ...options}`  | `{Object}` | Full details about a Web Store item
| items   | `{category, search, count, rating, next, locale, version, ...options}` | `[Array]` | List Web Store items (subset of the detail data)
| reviews | `{id, count, offset, locale, sort, version, ...options}` | `[Array]` | List reviews for an item
| issues  | `{id, type, count, page, version, ...options}` | `[Array]` | List issues for an item

```js
var webstore = require('chrome-webstore')

;(async () => {
  var items = await webstore.items({category: 'extensions', search: 'markdown'})
  var details = await webstore.detail({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
  var reviews = await webstore.reviews({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
  var issues = await webstore.issues({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
})()
```

<details>
<summary><strong>detail</strong></summary>

```js
{
  id: 'dpgjihldbpodlmnjolekemlfbcajnmod',
  name: 'Sumopaint - Online Image Editor',
  title: 'Sumopaint is a full featured painting and image editing application.',
  slug: 'sumopaint-online-image-ed',
  url: 'https://chrome.google.com/webstore/detail/sumopaint-online-image-ed/dpgjihldbpodlmnjolekemlfbcajnmod?hl=en',
  version: '12.4',
  size: '23.83KiB',
  published: 'October 13, 2022',
  description: 'Features:\n\nLayers with undo support\n\n - 11 blending modes\n - Duplicate, merge and flatten layers\n - Rotate and flip\n - Zoom and pan\n\nLayers with classic layer effects\n\n - Drop Shadow\n - Inner Shadow\n - Outer Glow\n - Inner Glow\n - Bevel\n - Color Overlay\n - Stroke\n - Gradient Bevel\n - Gradient Glow\n\n20 filters and effects in the following categories\n\n - Blur\n - Distort\n - Noise\n - Pixelate\n - Sharpen\t\n - Posterize\n - Threshold\n\nProfessional painting tools\n\n - Over 300 brushes\n - Advanced options like gravity and auto orient\n - Real time bezier-curve smoothing\n - Animated brushes\n - Smudge, blur, sharpen, dodge, burn and saturation tools\n\nSelection tools with full undo support\n\n - Lasso\n - Rectangular lasso\n - Magic wand\n - Rectangular and elliptical selections\n - Border, feather, expand and contract selection\n\nImage enhancement tools including\n\n - Unsharp mask\n - Levels\n - Brightness / contrast\n - Hue / saturation\n - Color balance\n - Color temperature\n\nGradient tool\n\n - 15 gradient types including linear, radial and angle modes\n - 170 preset color selections\n - Gradients are anti-aliased\n\nClone stamp tool\n\n - Over 300 brushes\n - Diameter, opacity and flow\n - Advanced options like scattering and random rotation',
  type: 'Extension',
  category: { name: 'Photos', slug: 'ext/28-photos' },
  author: { name: 'Sumo Apps Ltd', domain: 'sumo.app', url: 'http://sumo.app' },
  developer: {
    email: 'support@sumo.app',
    address: 'Satamakatu 1\nSumoapps\nHelsinki 00160\nFI',
    policy: 'https://sumo.app/privacy',
    verified: true,
    trader: true
  },
  website: 'https://sumo.app',
  support: 'https://sumo.app/support/',
  users: '700,000+',
  rating: { average: 3.518426294820717, count: 2008 },
  featured: true,
  images: {
    '26x26': 'https://lh3.googleusercontent.com/jjujkKH5X8zleN6uq4cSBPNBvHGRJjxs8MbSiybos8tE_0AS0W04NCUSBPfsEWkOxmyYejDbX7BrHxiOo6uca4az=w50-h50-e365-rj-sc0x00ffffff',
    '128x128': 'https://lh3.googleusercontent.com/jjujkKH5X8zleN6uq4cSBPNBvHGRJjxs8MbSiybos8tE_0AS0W04NCUSBPfsEWkOxmyYejDbX7BrHxiOo6uca4az=w128-h128-e365-rj-sc0x00ffffff',
    '141x90': 'https://lh3.googleusercontent.com/7MCIVPZgkKaYDpvZVlM26A2v516PBFqa84FAqCo9BzOBJGLaIvk-y5faQyIb1NqNzIiSbgHIxdnYuNwOMZaOwb67ZA=w141-h90-e365-rj-sc0x00ffffff',
    '220x140': 'https://lh3.googleusercontent.com/7MCIVPZgkKaYDpvZVlM26A2v516PBFqa84FAqCo9BzOBJGLaIvk-y5faQyIb1NqNzIiSbgHIxdnYuNwOMZaOwb67ZA=w220-h140-e365-rj-sc0x00ffffff',
    '440x280': 'https://lh3.googleusercontent.com/7MCIVPZgkKaYDpvZVlM26A2v516PBFqa84FAqCo9BzOBJGLaIvk-y5faQyIb1NqNzIiSbgHIxdnYuNwOMZaOwb67ZA=w440-h280-e365-rj-sc0x00ffffff',
    '460x340': 'https://lh3.googleusercontent.com/-4WplyGF4xWrmmpYa4G1T1f5GYrBDoO1DZbsORuYzm1scM_0AH72h31nazB9QP7_nH3_nGcJ_acdK8sMbTPBXvke=w460-h340-e365-rj-sc0x00ffffff',
    '700x280': 'https://lh3.googleusercontent.com/EdN8VYISOGk72gGevtyKGwvAi3Qu1vqCvQ8qcBWWKANK96riTJ11pWoqoNgkyNHI67aEo4_6Q15Hrixloi1CxLQehA=w700-h280-e365-rj-sc0x00ffffff'
  },
  video: 'https://www.youtube.com/watch?v=QYg6U0TclTw',
  screenshots: [
    'https://lh3.googleusercontent.com/guLYdee1TQiFYAWClDeGQzmH8m6kdFZLgU1rmcG38OqmiIxLH9sT-uob7eg8_99_0MhCO-16HOrES6VQVIYd4Eij=w640-h400-e365-rj-sc0x00ffffff',
    'https://lh3.googleusercontent.com/z1wChYxrKCpJNsmsQ8Cqc8IcM11UEUi-79R9Z1eqySmF9KdSAi1XrKcYl7382bchKnle2zZ1-qua5K0RvgATconk=w640-h400-e365-rj-sc0x00ffffff'
  ],
  languages: [ 'English' ],
  features: [ 'Offers in-app purchases' ],
  android: null,
  collects: [
    'Personally identifiable information',
    'User activity',
    'Website content'
  ],
  manifest: '{\n\"update_url\": \"https://clients2.google.com/service/update2/crx\",\n\n\t\"manifest_version\": 3,\n\t\"name\": \"Sumopaint - Online Image Editor\",\n\t\"short_name\": \"Sumopaint\",\n\t\"version\": \"12.4\",\n\t\"description\": \"Sumopaint is a full featured painting and image editing application.\",\n\t\"author\": \"Sumo Apps Ltd\",\n\t\"action\": {\n\t\t\"default_icon\": \"sumo128.png\"\n\t},\n\t\"permissions\": [\n\t\t\"contextMenus\"\n\t],\n\t\"icons\": {\n\t\t\"16\": \"sumo16.png\",\n\t\t\"32\": \"sumo32.png\",\n\t\t\"48\": \"sumo48.png\",\n\t\t\"128\": \"sumo128.png\"\n\t},\n\t\"background\": {\n\t\t\"service_worker\": \"background.js\"\n\t}\n}'
}
```

</details>

<details>
<summary><strong>items</strong></summary>

```js
[
  {
    id: 'dpgjihldbpodlmnjolekemlfbcajnmod',
    name: 'Sumopaint - Online Image Editor',
    title: 'Sumopaint is a full featured painting and image editing application.',
    slug: 'sumopaint-online-image-ed',
    url: 'https://chrome.google.com/webstore/detail/sumopaint-online-image-ed/dpgjihldbpodlmnjolekemlfbcajnmod?hl=en',
    category: { name: 'Photos', slug: 'ext/28-photos' },
    author: {
      name: 'Sumo Apps Ltd',
      domain: 'sumo.app',
      url: 'http://sumo.app'
    },
    developer: { verified: true },
    users: '700,000+',
    rating: { average: 3.518426294820717, count: 2008 },
    featured: true,
    images: {
      '26x26': 'https://lh3.googleusercontent.com/jjujkKH5X8zleN6uq4cSBPNBvHGRJjxs8MbSiybos8tE_0AS0W04NCUSBPfsEWkOxmyYejDbX7BrHxiOo6uca4az=w50-h50-e365-rj-sc0x00ffffff',
      '128x128': 'https://lh3.googleusercontent.com/jjujkKH5X8zleN6uq4cSBPNBvHGRJjxs8MbSiybos8tE_0AS0W04NCUSBPfsEWkOxmyYejDbX7BrHxiOo6uca4az=w128-h128-e365-rj-sc0x00ffffff',
      '141x90': 'https://lh3.googleusercontent.com/7MCIVPZgkKaYDpvZVlM26A2v516PBFqa84FAqCo9BzOBJGLaIvk-y5faQyIb1NqNzIiSbgHIxdnYuNwOMZaOwb67ZA=w141-h90-e365-rj-sc0x00ffffff',
      '220x140': 'https://lh3.googleusercontent.com/7MCIVPZgkKaYDpvZVlM26A2v516PBFqa84FAqCo9BzOBJGLaIvk-y5faQyIb1NqNzIiSbgHIxdnYuNwOMZaOwb67ZA=w220-h140-e365-rj-sc0x00ffffff',
      '440x280': 'https://lh3.googleusercontent.com/7MCIVPZgkKaYDpvZVlM26A2v516PBFqa84FAqCo9BzOBJGLaIvk-y5faQyIb1NqNzIiSbgHIxdnYuNwOMZaOwb67ZA=w440-h280-e365-rj-sc0x00ffffff',
      '460x340': 'https://lh3.googleusercontent.com/-4WplyGF4xWrmmpYa4G1T1f5GYrBDoO1DZbsORuYzm1scM_0AH72h31nazB9QP7_nH3_nGcJ_acdK8sMbTPBXvke=w460-h340-e365-rj-sc0x00ffffff',
      '700x280': 'https://lh3.googleusercontent.com/EdN8VYISOGk72gGevtyKGwvAi3Qu1vqCvQ8qcBWWKANK96riTJ11pWoqoNgkyNHI67aEo4_6Q15Hrixloi1CxLQehA=w700-h280-e365-rj-sc0x00ffffff'
    },
    features: [ 'Offers in-app purchases' ],
    android: null
  },
  {
    id: 'gmbmikajjgmnabiglmofipeabaddhgne',
    name: 'Save to Google Drive',
    title: 'Save web content or screen capture directly to Google Drive.',
    slug: 'save-to-google-drive',
    url: 'https://chrome.google.com/webstore/detail/save-to-google-drive/gmbmikajjgmnabiglmofipeabaddhgne?hl=en',
    category: { name: 'Productivity', slug: 'ext/7-productivity' },
    author: {
      name: 'drive.google.com',
      domain: 'drive.google.com',
      url: 'http://drive.google.com'
    },
    developer: { verified: true },
    users: '6,000,000+',
    rating: { average: 3.9656769846283426, count: 4749 },
    featured: true,
    images: {
      '26x26': 'https://lh3.googleusercontent.com/TFO5gDBZMhZOyeKAozOLYsxulAwh_RT7qY3vdqKt_8NTMWQjSNRLFc9CjPdkC2MSPimqwSB__nG24HKw4Y1hMdtLLw=w50-h50-e365-rj-sc0x00ffffff',
      '128x128': 'https://lh3.googleusercontent.com/TFO5gDBZMhZOyeKAozOLYsxulAwh_RT7qY3vdqKt_8NTMWQjSNRLFc9CjPdkC2MSPimqwSB__nG24HKw4Y1hMdtLLw=w128-h128-e365-rj-sc0x00ffffff',
      '141x90': 'https://lh3.googleusercontent.com/KArsUAqEY9DFj0UFwe6_YcPfio4hPpdrv34txEUI7Be7rcpDPaAE3iJkXemXt3J_JCybFbG-j7LJCyeFrT6RsOe-kA=w141-h90-e365-rj-sc0x00ffffff',
      '220x140': 'https://lh3.googleusercontent.com/KArsUAqEY9DFj0UFwe6_YcPfio4hPpdrv34txEUI7Be7rcpDPaAE3iJkXemXt3J_JCybFbG-j7LJCyeFrT6RsOe-kA=w220-h140-e365-rj-sc0x00ffffff',
      '440x280': 'https://lh3.googleusercontent.com/KArsUAqEY9DFj0UFwe6_YcPfio4hPpdrv34txEUI7Be7rcpDPaAE3iJkXemXt3J_JCybFbG-j7LJCyeFrT6RsOe-kA=w440-h280-e365-rj-sc0x00ffffff',
      '460x340': 'https://lh3.googleusercontent.com/0AU-EgW79LftIbAvDgxBsJmDMq9XCh0-xCi6j3nh7ylD2Pao1IURMDk5dcN14O0cKzuRTsQreSgPXW-7oOzosPaa=w460-h340-e365-rj-sc0x00ffffff',
      '700x280': 'https://lh3.googleusercontent.com/dSqg6CV0197_qE2gpLhyta9qIlnM6QtqiviS5KnCP8xe-Y-FAjnr64L_JWeqq1dxUzfhb-bZQzEikIRTBnVK-Nmo=w700-h280-e365-rj-sc0x00ffffff'
    },
    features: [ 'Available for Android', 'By Google' ],
    android: 'https://play.google.com/store/apps/details?id=com.google.android.apps.docs&hl=en'
  }
]
```

</details>

<details>
<summary><strong>reviews</strong></summary>

```js
[
  {
    rating: 5,
    message: 'Support for lots of markdown specs.\nDark mode :)',
    created: 1644609424890,
    updated: 1644609424890,
    author: {
      id: '000000cd0b7c0eec',
      name: 'Deron Parker',
      avatar: 'https://lh3.googleusercontent.com/a-/AD5-WClO31kP_7qk6WSVqT63EhMnp3yqkE1g6HkEfyA6=s40-c-k'
    }
  },
  {
    rating: 5,
    message: 'Simple and neat.',
    created: 1639891093261,
    updated: 1639891128229,
    author: {
      id: '000000a15fe4ea93',
      name: 'Dongryul Kim',
      avatar: 'https://lh3.googleusercontent.com/a-/AD5-WCmlzkt6UmOXkQ7J0ohwwV3NlvpT-uwQbGgIqL7lUw=s40-c-k'
    }
  }
]
```

</details>

<details>
<summary><strong>issues</strong></summary>

```js
[
  {
    type: 'problem',
    status: 'open',
    title: 'Breaks GitHub webpage on .md files',
    description: 'It has some issues with GitHub .md files. If you need to reproduce it, just enable the extension and visit any repository that has a README.md file in its root directory.',
    browser: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    version: '3.9',
    date: 1594171647368,
    author: {
      id: '00000093b1605b13',
      name: 'Facundo Chambo',
      avatar: 'https://lh3.googleusercontent.com/a-/AD5-WCnA_GGX10TQZaGPtqQT_wPHI3Cw1gXzDOuqKUXuGA=s40-c-k'
    }
  },
  {
    type: 'suggestion',
    status: 'open',
    title: '[Suggestion] Add cdn for bootstrap ',
    description: "Maybe that's will be nice to add bootstrap or some other popular javascript for extends designs capabilities",
    browser: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 Edg/93.0.961.52',
    version: '4.0',
    date: 1632736940037,
    author: {
      id: '000000c0f6622e3c',
      name: 'Xavier Pierre',
      avatar: 'https://lh3.googleusercontent.com/a/default-user=s40-c-k'
    }
  }
]
```

</details>


# Arguments

## detail

| Parameter  | Example   | Description
| ---        | :---:     | ---
| id         | `'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'` | Item ID
| related    | `true`    | Include a list of related extensions
| more       | `true`    | Include a list with more items from the same developer
| locale     | `'bg'`    | Set locale for the response data (defaults to 'en')
| version    | `20210820`| [API version](#chrome-web-store-api-version)
| ...options | `agent, timeout` | any [request-compose][compose-client-options] option

---

## items

| Parameter  | Example          | Description
| ---        | :---:            | ---
| category   | `'extensions'`   | Filter items by category name
| search     | `'markdown'`     | Filter items by search term
| count      | `15`             | Number of items to return (defaults to 5)
| rating     | `5` / `4` / `3` / `2` | Filter items by number of stars
| next       | `...`            | Iteration token
| locale     | `'bg'`           | Set locale for the response data (defaults to 'en')
| version    | `20210820`       | [API version](#chrome-web-store-api-version)
| ...options | `agent, timeout` | any [request-compose][compose-client-options] option

In case more items are available the returned items array will contain one additional property called `next`, holding the iteration token. Use that token to request the next page of items.

Note that specifying `category` is required for the iteration to work, also collections cannot be iterated.

### category

| Category            | Description
| ---                 | ---
| `extensions`        | All extensions
| `ext/[NAME]`        | Extensions category
| `themes`            | All themes
| `apps`              | All apps
| `app/[NAME]`        | Apps category
| `collection/[NAME]` | Collection

Check out [examples/category.json][example-category] for a list of available category names. Additional category and collection names can be obtain from CWS by navigating to them.

---

## reviews

| Parameter  | Example  | Description
| ---        | :---:    | ---
| id         | `'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'` | Item ID
| count      | `10`     | Number of reviews to return (defaults to 5)
| offset     | `10`     | Start returning items from offset
| locale     | `'en'`   | Return reviews only in locale (defaults to all locales)
| sort       | `'helpful'` / `'recent'` | Sort order (defaults to recent)
| version    | `20210820`| [API version](#chrome-web-store-api-version)
| ...options | `agent, timeout` | any [request-compose][compose-client-options] option

---

## issues

| Parameter  | Example | Description
| ---        | :---:   | ---
| id         | `'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'` | Item ID
| type       | `'problem'` / `'question'` / `'suggestion'` | Filter by issue type (defaults to all)
| count      | `10`    | Number of issues to return (defaults to 5)
| page       | `2`     | Start returning issues from page (page * count)
| version    | `20210820`| [API version](#chrome-web-store-api-version)
| ...options | `agent, timeout` | any [request-compose][compose-client-options] option

---

# Chrome Web Store API Version

The Chrome Web Store REST API have a version string that needs to be sent with each request. For convenience the last known version of the REST API is hardcoded inside the module and set by default.

In case of `400 Bad Request` errors you might have to set the correct REST API version explicitly, using the optional `version` argument.

The correct REST API `version` can be obtained as follows:

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
```


  [npm-version]: https://img.shields.io/npm/v/chrome-webstore.svg?style=flat-square (NPM Package Version)
  [npm]: https://www.npmjs.com/package/chrome-webstore

  [compose-client-options]: https://github.com/simov/request-compose#options
  [chrome.google.com]: https://chrome.google.com/webstore/category/extensions

  [example-category]: https://github.com/simov/chrome-webstore/blob/master/examples/category.json
  [example-detail]: https://github.com/simov/chrome-webstore/blob/master/examples/detail.js
  [example-items]: https://github.com/simov/chrome-webstore/blob/master/examples/items.js
  [example-reviews]: https://github.com/simov/chrome-webstore/blob/master/examples/reviews.js
  [example-issues]: https://github.com/simov/chrome-webstore/blob/master/examples/issues.js
  [example-version]: https://github.com/simov/chrome-webstore/blob/master/examples/version.js
