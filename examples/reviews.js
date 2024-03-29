
var webstore = require('../')

;({

  // get the last 5 reviews for all languages sorted by recent date
  0: async () => {
    var reviews = await webstore.reviews({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'
    })
    console.log(reviews)
  },

  // get the last 5 reviews for all languages sorted by helpful flag
  1: async () => {
    var reviews = await webstore.reviews({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', sort: 'helpful'
    })
    console.log(reviews)
  },

  // get the next 10 reviews
  2: async () => {
    var reviews = await webstore.reviews({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', count: 10, offset: 10
    })
    console.log(reviews)
  },

  // get only reviews in English
  3: async () => {
    var reviews = await webstore.reviews({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', locale: 'en'
    })
    console.log(reviews)
  },

  // set request-compose options
  4: async () => {
    var reviews = await webstore.reviews({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
      headers: {'user-agent': 'chrome-webstore'},
      timeout: 10000,
    })
    console.log(reviews)
  },

})[process.argv[2]]()
