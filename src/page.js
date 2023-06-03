function pageRun(route, root) {
  route.get('/', (req, res) => {
    res.sendFile(root + '/static/landing/index.html')
  })
}

module.exports = {
  pageRun
}
