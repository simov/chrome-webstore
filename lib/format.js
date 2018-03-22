
var entities = require('html-entities').AllHtmlEntities


module.exports = (meta) => Object.assign({}, meta, {
  interactionCount: meta.interactionCount.replace('UserDownloads:', ''),
  ratingValue: parseFloat(meta.ratingValue).toFixed(2),
  description: entities.decode(meta.description),
})
