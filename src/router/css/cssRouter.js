const Layout = require("../../static/_layout")

function cssRouter(route, root) {
  route.get('/', (req, res) => {
    res.send(Layout(switcher('index')))
  })
}

module.exports = cssRouter