
var compose = require('request-compose')

var detail = require('./map/detail')
var item = require('./map/item')
var review = require('./map/review')
var issue = require('./map/issue')

var VERSION = '20210820'


module.exports = {

  items: ({category, search, count, rating, next, locale, version, ...options}) => compose(
    _ => compose.client({...options,
      method: 'POST',
      url: 'https://chrome.google.com/webstore/ajax/item',
      qs: {
        category,
        searchTerm: search,
        features: {5: 9, 4: 8, 3: 7, 2: 6}[rating],
        count: count || 5,
        token: next,
        hl: locale || 'en',
        pv: version || VERSION,
      },
    }),
    ({body}) => ((
      json = JSON.parse(body.slice(5)),
      items = json[1][1].map(item),
      next = json[1][4] && json[1][4] !== '#@' && json[1][4]) => (
      next ? items.next = next : undefined,
      items
    ))()
  )(),

  detail: ({id, related, more, locale, version, ...options}) => compose(
    _ => compose.client({...options,
      method: 'POST',
      url: 'https://chrome.google.com/webstore/ajax/detail',
      qs: {
        id,
        hl: locale || 'en',
        pv: version || VERSION,
      },
    }),
    ({body}) => ((json = JSON.parse(body.slice(5))) => Object.assign(
      detail(json[1][1]),
      related && {related: json[1][2].map(item)},
      more && {more: json[1][3].map(item)},
    ))(),
  )(),

  reviews: ({id, count, offset, locale, sort, version, ...options}) => compose(
    _ => compose.client({...options,
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
          {helpful: 1, recent: 2}[sort] || 2,
          []
        ]),
      }
    }),
    ({body}) => JSON.parse(body.slice(5))[1][4].map(review),
  )(),

  issues: ({id, type, count, page, version, ...options}) => compose(
    _ => compose.client({...options,
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
    }),
    ({body}) => JSON.parse(body.slice(5))[1][1].map(issue),
  )(),

}
