
module.exports = (review) => ({
  rating: review[3],
  message: review[4],
  created: review[6],
  updated: review[7],
  author: {
    id: review[2][0],
    name: review[2][1],
    avatar: review[2][2] ? `https:${review[2][2]}` : null,
  },
})
