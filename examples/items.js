
var webstore = require('../')

;({

  // --------------------------------------------------------------------------
  // main categories

  // extensions
  0: async () => {
    var meta = await webstore.items({category: 'extensions'})
    console.log(meta)
  },

  // themes
  1: async () => {
    var meta = await webstore.items({category: 'themes'})
    console.log(meta)
  },

  // apps
  2: async () => {
    var meta = await webstore.items({category: 'apps'})
    console.log(meta)
  },

  // --------------------------------------------------------------------------
  // search

  // search for markdown extensions
  3: async () => {
    var meta = await webstore.items({
      category: 'extensions', search: 'markdown'
    })
    console.log(meta)
  },

  // search for markdown extensions and get the first 10 results
  4: async () => {
    var meta = await webstore.items({
      category: 'extensions', search: 'markdown', count: 10
    })
    console.log(meta)
  },

  // search for markdown extensions and get the next 5 results
  5: async () => {
    var meta = await webstore.items({
      category: 'extensions', search: 'markdown'
    })
    console.log(meta)
    var meta = await webstore.items({
      category: 'extensions', search: 'markdown', next: meta.next
    })
    console.log(meta)
  },

  // search by extension id
  6: async () => {
    var meta = await webstore.items({
      search: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'
    })
    console.log(meta)
  },

  // --------------------------------------------------------------------------
  // categories and collections

  // productivity extension category
  7: async () => {
    var meta = await webstore.items({category: 'ext/7-productivity'})
    console.log(meta)
  },

  // filter by collection name
  8: async () => {
    var meta = await webstore.items({
      category: 'collection/chrome-dev-tools-extensions'
    })
    console.log(meta)
  },

  // --------------------------------------------------------------------------
  // rating and locale

  // filter by item rating
  9: async () => {
    var meta = await webstore.items({
      category: 'extensions', search: 'markdown', rating: 4
    })
    console.log(meta)
  },

  // set locale
  10: async () => {
    var meta = await webstore.items({
      category: 'extensions', search: 'markdown', locale: 'bg'
    })
    console.log(meta)
  },

  // --------------------------------------------------------------------------

  // pull the photos extension category
  11: async () => {
    var get = (items = [], next) =>
      webstore.items({
        category: 'ext/28-photos',
        count: 100,
        next
      })
      .then((page) => page.next ? get(items.concat(page), page.next) : items)

    var meta = await get()
    console.log(meta)
  },

})[process.argv[2]]()
