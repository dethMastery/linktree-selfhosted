const indexComponents = require('../../static/pages/index.js')
const dashboardComponents = require('../../static/pages/dashboard.js')

function switcher(page) {
  let pageData

  switch (page) {
    case 'index':
      pageData = indexComponents
      break
    
    case 'dashboard':
      pageData = dashboardComponents

    default:
      break
  }

  return pageData
}

module.exports = switcher
