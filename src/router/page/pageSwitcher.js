const indexComponents = require('../../static/pages/index.js')

function switcher(page) {
  let pageData

  switch (page) {
    case 'index':
      pageData = indexComponents
      break

    default:
      break
  }

  return pageData
}

module.exports = switcher
