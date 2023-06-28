const { tyDon } = require('tydon')

const model = require('../schemas/tree')

require('../mongo')

async function treeQuery(id) {
  const query = await model
    .findOne({ id: id }, 'id slug title author timestamp links')
    .exec()

  return query
}

async function latest() {
  const query = await model
    .findOne({}, 'uID username')
    .sort({ uID: 'desc' })
    .exec()

  return query
}

async function createTree(data) {
  let res

  if (data != undefined) {
    let linksArrays = []

    for (let i = 0; i < data.links.length; i++) {
      const tempData = {
        id: parseInt(i) + 1,
        service: data.links[i].services,
        link: data.links[i].link,
      }

      linksArrays.push(tempData)
    }
    
    let id
    
    if (await latest() == undefined) {
      id = 1
    } else {
      id = parseInt(await latest().id) + 1
    }
    
    const sendData = new model({
      id: id,
      title: data.title,
      slug: data.slug,
      author: data.author,
      timestamp: tyDon(),
      links: linksArrays,
    })

    try {
      await sendData.save()
      res = {
        status: 200,
        message: 'tree created successful!',
        link: `/${data.author}/${data.slug}`,
      }
    } catch (err) {
      console.error(err)
      res = err
    }
  } else {
    res = {
      status: 400,
      message: 'No input data',
    }
  }

  return res
}

module.exports = {
  treeQuery,
  latest,
  createTree,
}
