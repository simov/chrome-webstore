
var compose = require('request-compose')

var format = {
  detail: require('./format/detail'),
  item: require('./format/item'),
  review: require('./format/review'),
  issue: require('./format/issue'),
}

var VERSION = '20181009'


module.exports = {

  items: ({search, category, rating, features, count, offset, version, ...options}) => compose(
    _ => compose.client(Object.assign({}, options, {
      method: 'POST',
      url: 'https://chrome.google.com/webstore/ajax/item',
      qs: {
        searchTerm: search,
        category,
        features: (features || [])
          .map((i) => ({offline: 4, google: 1, free: 5, android: 0, gdrive: 12}[i]))
          .concat({5: 9, 4: 8, 3: 7, 2: 6}[rating])
          .filter((i) => typeof i === 'number'),
        count: count || 5,
        token: offset ? `${offset}@${offset}` : undefined,
        pv: version || VERSION,
      },
    })),
    ({body}) => JSON.parse(body.slice(5))[1][1].map(format.item),
  )(),

  detail: ({id, related, more, version, ...options}) => compose(
    _ => compose.client(Object.assign({}, options, {
      method: 'POST',
      url: 'https://chrome.google.com/webstore/ajax/detail',
      qs: {
        id,
        pv: version || VERSION,
      },
    })),
    ({body}) => ((json = JSON.parse(body.slice(5))) => Object.assign(
      format.detail(json[1][1]),
      related && {related: json[1][2].map(format.item)},
      more && {more: json[1][3].map(format.item)},
    ))(),
  )(),

  reviews: ({id, count, offset, locale, sort, version, ...options}) => compose(
    _ => compose.client(Object.assign({}, options, {
      method: 'POST',
      url: 'https://chrome.google.com/webstore/reviews/get',
      qs: {
        pv: version || VERSION,
      },
      form: {
        'f.req': JSON.stringify([
          `http://chrome.google.com/extensions/permalink?id=${id}`,
          locale || '',
          [count || 5, offset || 0],
          {helpful: 1, recent: 2}[sort] || 1,
          []
        ]),
      }
    })),
    ({body}) => JSON.parse(body.slice(5))[1][4].map(format.review),
  )(),

  issues: ({id, type, count, page, version, ...options}) => compose(
    _ => compose.client(Object.assign({}, options, {
      method: 'POST',
      url: 'https://chrome.google.com/webstore/issues/get',
      qs: {
        pv: version || VERSION,
      },
      form: {
        'f.req': JSON.stringify([
          `http://chrome.google.com/extensions/permalink?id=${id}`,
          null,
          type === 'problem' ? 0 :
          type === 'question' ? 1 :
          type === 'suggestion' ? 2 : null,
          null, null, null, null,
          page || 1,
          count || 5,
        ]),
      }
    })),
    ({body}) => JSON.parse(body.slice(5))[1][1].map(format.issue),
  )(),

}
