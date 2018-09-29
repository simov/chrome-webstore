
var webstore = require('../')

;((key) => ({

  // search by markdown string
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

  // filter by collection name
  5: async () => {
    var meta = await webstore.items({category: 'collection/new_noteworthy_extensions'})
    console.log(meta)
  },

  // filter by item rating
  6: async () => {
    var meta = await webstore.items({search: 'markdown', rating: 4})
    console.log(meta)
  },

  // filter by item rating and features
  7: async () => {
    var meta = await webstore.items({
      search: 'markdown', rating: 4, features: ['offline', 'gdrive']
    })
    console.log(meta)
  },

  // get all extensions in a collection - using recursion
  8: async () => {
    // use 3 persistent sockets
    var https = require('https')
    var agent = new https.Agent({keepAlive: true, maxSockets: 3})

    var count = 5, items = []

    var page = async (offset) => {
      var meta = await webstore.items({
        category: 'collection/weather_extensions', count, offset, agent,
      })
      items = items.concat(meta)
      if (meta.length === count) {
        await page(offset + count)
      }
    }

    await page(0)
    console.log(items)

    // destroy all sockets
    agent.destroy()
  },

  // get all extensions in a collection - using while
  9: async () => {
    // use 3 persistent sockets
    var https = require('https')
    var agent = new https.Agent({keepAlive: true, maxSockets: 3})

    var count = 5, items = [], offset = 0, meta = Array(5)

    while (meta.length === count) {
      meta = await webstore.items({
        category: 'collection/weather_extensions', count, offset, agent,
      })
      items = items.concat(meta)
      offset = offset + count
    }

    console.log(items)

    // destroy all sockets
    agent.destroy()
  },

}[key]()))(process.argv[2])
