
module.exports = (issue) => ({
  type:
    issue[2] === 0 ? 'problem' :
    issue[2] === 1 ? 'question' :
    issue[2] === 2 ? 'suggestion' : '',
  status:
    issue[3] === 0 ? 'open' :
    issue[3] === 1 ? 'in progress' :
    issue[3] === 2 ? 'closed' : '',
  title: issue[5],
  description: issue[6],
  browser: issue[9],
  version: issue[10],
  date: issue[12],
  author: {
    id: issue[16][0],
    name: issue[16][1],
    avatar: issue[16][2] ? `https:${issue[16][2]}` : null,
  },
})
