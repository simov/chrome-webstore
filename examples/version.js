
var webstore = require('../')

;({

  // Chrome Web Store API Version
  0: async () => {
    var version = await webstore.version()
    console.log(version)
  },

})[process.argv[2]]()
