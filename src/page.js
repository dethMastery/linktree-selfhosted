const staticPage = require("./staticPage")

function pageRun(route, root) {
  staticPage(route, root)

  // CSS Route
  route.get('/css/main', (req, res) => {
    res.sendFile(root + '/styles/main.css')
  })

  // CSS Components
  route.get('/css/components/footer', (req, res) => {
    res.sendFile(root + '/styles/components/footer.css')
  })
}

module.exports = {
  pageRun
}
