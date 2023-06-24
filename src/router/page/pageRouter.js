const Layout = require("../../static/_layout")
const switcher = require("./pageSwitcher")

function staticPage(route, root) {
  route.get('/', (req, res) => {
    res.send(Layout(switcher('index')))
  })

  route.get('/dashboard', (req, res) => {
    res.send(Layout(switcher('dashboard')))
  })
}

module.exports = staticPage