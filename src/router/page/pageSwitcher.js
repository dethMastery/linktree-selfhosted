const indexComponents = require("../../static");

function switcher(page) {
  let pageData

  switch (page) {
    case 'index':
      pageData = indexComponents
      break;
  
    default:
      break;
  }

  return pageData
}

module.exports = switcher