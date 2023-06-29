const { tyDon } = require('tydon')

const model = require('../schemas/tree')

require('../mongo')

async function treeQuery(id) {
  const query = await model
    .findOne({ id: id }, 'id slug title author timestamp links').sort({ id: 'desc' })

  return query
}

async function slugQuery(author, slug) {
  const query = await model
    .findOne({ author: author, slug: slug }, 'id slug title author timestamp links').sort({ id: 'desc' })

  return query
}

async function latest() {
  const query = await model
    .find({}, 'id slug title author timestamp links')
    .sort({ id: 'desc' })

  return query[0]
}

async function createTree(data) {
  let res

  if (data != undefined) {
    if (await slugQuery(data.author, data.slug) == undefined) {
      let linksArrays = []

      for (let i = 0; i < data.links.length; i++) {
        const tempData = {
          id: parseInt(i),
          service: data.links[i].services,
          link: data.links[i].link,
        }

        linksArrays.push(tempData)
      }

      let id

      if (await latest() == undefined) {
        id = 0
      } else {
        const last = await latest()
        id = parseInt(last.id) + 1
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
        status: 403,
        message: "duplicated data"
      }
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
