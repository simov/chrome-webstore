
var webstore = require('../')

;({

  // get the last 5 issues
  0: async () => {
    var issues = await webstore.issues({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
    console.log(issues)
  },

  // get the last 5 issues marked as problems
  1: async () => {
    var issues = await webstore.issues({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', type: 'problem'
    })
    console.log(issues)
  },

  // get the next 10 issues
  2: async () => {
    var issues = await webstore.issues({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', count: 10, page: 2
    })
    console.log(issues)
  },

  // set request-compose options
  3: async () => {
    var issues = await webstore.issues({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
      headers: {'user-agent': 'chrome-webstore'},
      timeout: 10000,
    })
    console.log(issues)
  },

})[process.argv[2]]()
