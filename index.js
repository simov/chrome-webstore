
var request = require('request-compose').client

var item = require('./lib/item')
var detail = require('./lib/detail')

var config = require('./config/webstore')


module.exports = {

  items: ({search, category, rating, features, count, offset, version}) =>
    request({
      method: 'POST',
      url: 'https://chrome.google.com/webstore/ajax/item',
      qs: {
        searchTerm: search,
        category,
        features: (features || []).map((key) => config.features[key])
          .concat(config.rating[rating]).filter(Boolean),
        count: count || 5,
        token: offset ? `${offset}@${offset}` : undefined,
        pv: version || config.version,
      },
    })
    .then(({body}) =>
      JSON.parse(body.slice(5))[1][1].map((i) => item.transform(item.extract(i))))
  ,

  detail: ({id, related, more, version}) =>
    request({
      method: 'POST',
      url: 'https://chrome.google.com/webstore/ajax/detail',
      qs: {
        id,
        pv: version || config.version,
      },
    })
    .then(({body}) => ((json = JSON.parse(body.slice(5))) => Object.assign(
      detail.transform(detail.extract(json[1][1])),
      related && {related: json[1][2].map((i) => item.transform(item.extract(i)))},
      more && {more: json[1][3].map((i) => item.transform(item.extract(i)))},
    ))())
  ,

}
