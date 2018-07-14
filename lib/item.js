
var config = require('../config/webstore')


var extract = (json) => {
  var result = {}

  Object.keys(config.item).forEach((key) => {
    result[key] = json[config.item[key]]
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
  users: json.users,
  rating: {
    average: json['rating-average'],
    count: json['rating-count'],
  },
  price: json.price,
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
  status: json.status,
})

module.exports = {extract, transform}
