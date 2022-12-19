
module.exports = (item) => ({
  id: item[0],
  name: item[1],
  title: item[6],
  slug: item[61],
  url: item[37],
  category: {
    name: item[10],
    slug: item[9],
  },
  author: {
    name: item[2],
    domain: item[35],
    url: item[81],
  },
  developer: {
    verified: !!item[34] || null,
  },
  users: item[23],
  rating: {
    average: item[12],
    count: item[22],
  },
  featured: !!item[89] || null,
  images: {
    '26x26': item[3],
    '128x128': item[25],
    '141x90': item[65],
    '220x140': item[4],
    '440x280': item[76],
    '460x340': item[5],
    '700x280': item[17],
  },
  features: [
    item[78] && 'Offers in-app purchases',
    item[53] && 'Runs offline',
    item[69] && 'Available for Android',
    item[56] && 'By Google',
  ].filter(Boolean),
  android: item[69] || null,
})
