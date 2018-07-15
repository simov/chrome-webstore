if (!process.argv[2]) {console.log('Specify example to run'); process.exit()}

var webstore = require('../')


var examples = {

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

  // include related extensions and more from the same developer
  5: async () => {
    var meta = await webstore.detail({
      id: 'ckkdlimhmcjmikdlpkmbgfkaikojcbjk', related: true, more: true
    })
    console.log(meta)
  },

}

examples[process.argv[2]]()
