if (!process.argv[2]) {console.log('Specify example to run'); process.exit()}

var webstore = require('../')


var examples = {

  // search for markdown extensions
  0: async () => {
    var meta = await webstore.items({search: 'markdown'})
    console.log(meta)
  },

  // search for markdown extensions and get the first 5 results
  1: async () => {
    var meta = await webstore.items({
      search: 'markdown', category: 'extensions', count: 5
    })
    console.log(meta)
  },

  // search for markdown extensions and get the next 5 results
  2: async () => {
    var meta = await webstore.items({
      search: 'markdown', category: 'extensions', count: 5, offset: 5
    })
    console.log(meta)
  },

  // search by extension id
  3: async () => {
    var meta = await webstore.items({
      search: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', category: 'extensions', count: 1
    })
    console.log(meta)
  },

  // filter by extension category
  4: async () => {
    var meta = await webstore.items({category: 'ext/7-productivity'})
    console.log(meta)
  },

  // filter by extension collection
  5: async () => {
    var meta = await webstore.items({category: 'collection/new_noteworthy_extensions'})
    console.log(meta)
  },

  // filter by extension rating
  6: async () => {
    var meta = await webstore.items({search: 'markdown', rating: 4})
    console.log(meta)
  },

  // filter by extension rating and features
  7: async () => {
    var meta = await webstore.items({
      search: 'markdown', rating: 4, features: ['offline', 'gdrive']
    })
    console.log(meta)
  },

  // get all extensions in a collection - using recursion
  8: async () => {
    var count = 5, items = []

    var page = async (offset) => {
      var meta = await webstore.items({
        category: 'collection/weather_extensions', count, offset
      })
      items = items.concat(meta)
      if (meta.length === count) {
        await page(offset + count)
      }
    }

    await page(0)
    console.log(items)
  },

  // get all extensions in a collection - using while
  9: async () => {
    var count = 5, items = [], offset = 0, meta = Array(5)

    while (meta.length === count) {
      meta = await webstore.items({
        category: 'collection/weather_extensions', count, offset
      })
      items = items.concat(meta)
      offset = offset + count
    }

    console.log(items)
  },

}

examples[process.argv[2]]()
