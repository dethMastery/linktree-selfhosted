function cssRouter(route, root) {
  route.get('/css/main', (req, res) => {
    res.sendFile(root + '/styles/main.css')
  })

  // Components
  route.get('/css/components/footer', (req, res) => {
    res.sendFile(root + '/styles/components.footer.css')
  })

  // Dashboard
  route.get('/css/dashMain', (req, res) => {
    res.sendFile(root + '/styles/dashboard/main.css')
  })
}

module.exports = cssRouter