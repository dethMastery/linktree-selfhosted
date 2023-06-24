const Layout = require("../../static/_layout")
const switcher = require("./pageSwitcher")

function staticPage(route, root) {
  route.get('/', (req, res) => {
    res.send(Layout(switcher('index')))
  })

  route.get('/:slug', (req, res) => {
    const slug = req.params.slug

    res.send(Layout(switcher(slug)))
  })
}

module.exports = staticPage