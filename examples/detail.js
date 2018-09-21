
var webstore = require('../')

;((key) => ({

  // markdown-viewer
  0: async () => {
    var meta = await webstore.detail({id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk'})
    console.log(meta)
  },

  // in-app purchases - leoh-new-tab
  1: async () => {
    var meta = await webstore.detail({id: 'ijhhakihjccpanbibbcceofpjnebokcb'})
    console.log(meta)
  },

  // free trial - tilepad
  2: async () => {
    var meta = await webstore.detail({id: 'jglhlhdkfaejllkkbcolnkcehcnpcjpf'})
    console.log(meta)
  },

  // buy - ultimate-football-results
  3: async () => {
    var meta = await webstore.detail({id: 'llfhakjnjmfhgfibdnjcljiidndfgicp'})
    console.log(meta)
  },

  // theme - morpheon-dark
  4: async () => {
    var meta = await webstore.detail({id: 'mafbdhjdkjnoafhfelkjpchpaepjknad'})
    console.log(meta)
  },

  // app - stackedit
  5: async () => {
    var meta = await webstore.detail({id: 'iiooodelglhkcpgbajoejffhijaclcdg'})
    console.log(meta)
  },

  // include related extensions and more from the same developer
  6: async () => {
    var meta = await webstore.detail({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', related: true, more: true
    })
    console.log(meta)
  },

}[key]()))(process.argv[2])
