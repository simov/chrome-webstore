
var request = require('request-compose').client

var extract = require('./lib/extract')
var format = require('./lib/format')


module.exports = {

  extension: ({id, origin}) =>
    request({
      url: `${origin || 'https://chrome.google.com'}/webstore/detail/${id}`
    })
    .then(({body}) => format(extract(id, body)))

}
