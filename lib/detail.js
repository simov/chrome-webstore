
var item = require('./item')
var config = require('../config/webstore')


var extract = (json) => {
  var result = item.extract(json[0])

  Object.keys(config.detail).forEach((key) => {
    result[key] =
      config.detail[key] === 9 ? json[config.detail[key]][0] :
      json[config.detail[key]]
  })

  return result
}

var transform = (json) => ({
  id: json.id,
  name: json.name,
  title: json.title,
  slug: json.slug,
  url: json.url,
  author: {
    name: json['author-name'],
    domain: json['author-domain'],
    url: json['author-url'],
  },
  description: json.description,
  website: json['website-url'],
  support: json['support-url'],
  version: json.version,
  size: json.size,
  published: json.published,
  users: json.users,
  rating: {
    average: json['rating-average'],
    count: json['rating-count'],
  },
  price: json.price,
  purchases: json.purchases,
  category: {
    name: json['category-name'],
    slug: json['category-slug'],
  },
  images: {
    '26x26': json['images-26x26'],
    '128x128': json['images-128x128'],
    '141x90': json['images-141x90'],
    '220x140': json['images-220x140'],
    '440x280': json['images-440x280'],
    '460x340': json['images-460x340'],
  },
  languages: json.languages,
  developer: {
    email: json.developer[0] || null,
    address: json.developer[1] || null,
    policy: json.developer[2] || null,
  },
  type: json.type,
  status: json.status,
  manifest: json.manifest,
})

module.exports = {extract, transform}
