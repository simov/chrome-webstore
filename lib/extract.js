
module.exports = (() => {

  var meta = (html) => [
    'name',
    'url',
    'image',
    'version',
    'price',
    'priceCurrency',
    'interactionCount',
    'operatingSystem',
    'ratingValue',
    'ratingCount',
  ]
  .reduce((all, key) => (
    all[key] =
      new RegExp(`<meta itemprop="${key}" content="([^"]+)"/>`).exec(html)[1],
    all
  ), {})

  var details = (html) => [
    'Updated',
    'Size',
    // 'Language',
    // 'Languages',
  ]
  .reduce((all, key) => (
    all[key.toLowerCase()] =
      new RegExp(`<span[^>]+>${key}:<\/span>[^<]*<span[^>]+>([^<]+)<\/span>`).exec(html)[1],
    all
  ), {})

  var website = (html) => ({
    website: /href="(.*?)".*?Website/.exec(html)[1]
  })

  var description = (html) => ({
    description: /<pre class=".*">([\s\S]+)<\/pre>/.exec(html)[1]
  })

  var extract = (id, body) =>
    Object.assign(
      {id},
      meta(body),
      details(body),
      website(body),
      description(body),
    )

  return Object.assign(extract, {meta, details, website, description})

})()
