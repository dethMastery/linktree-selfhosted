const Layout = require("../../static/_layout")
const switcher = require("./pageSwitcher")

function staticPage(route, root) {
  route.get('/', (req, res) => {
    res.send(Layout(switcher('index')))
  })
}

module.exports = staticPage