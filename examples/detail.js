
var webstore = require('../')

;({

  // extension - markdown-viewer
  0: async () => {
    var meta = await webstore.detail({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
    console.log(meta)
  },

  // theme - morpheon-dark
  1: async () => {
    var meta = await webstore.detail({id: 'mafbdhjdkjnoafhfelkjpchpaepjknad'})
    console.log(meta)
  },

  // app - stackedit
  2: async () => {
    var meta = await webstore.detail({id: 'iiooodelglhkcpgbajoejffhijaclcdg'})
    console.log(meta)
  },

  // include related extensions and more from the same developer
  3: async () => {
    var meta = await webstore.detail({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', related: true, more: true
    })
    console.log(meta)
  },

  // set locale
  4: async () => {
    var meta = await webstore.detail({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', locale: 'bg'
    })
    console.log(meta)
  },

  // set request-compose options
  5: async () => {
    var meta = await webstore.detail({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk',
      headers: {'user-agent': 'chrome-webstore'},
      timeout: 10000,
    })
    console.log(meta)
  },

})[process.argv[2]]()
