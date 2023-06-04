const cssRouter = require("./router/css/cssRouter")
const staticPage = require("./router/page/pageRouter")

function pageRun(route, root) {
  staticPage(route, root)
  cssRouter(route, root)
}

module.exports = {
  pageRun
}