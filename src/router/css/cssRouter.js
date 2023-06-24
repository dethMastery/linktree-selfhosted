function cssRouter(route, root) {
  route.get('/css/main', (req, res) => {
    res.sendFile(root + '/styles/main.css')
  })

  // Pages
  route.get('/css/pages/index', (req, res) => {
    res.sendFile(root + '/styles/pages/index.css')
  })

  route.get('/css/pages/dashboard', (req, res) => {
    res.sendFile(root + '/styles/pages/dashboard.css')
  })

  // Components
  route.get('/css/components/navbar', (req, res) => {
    res.sendFile(root + '/styles/components/navBar.css')
  })

  route.get('/css/components/footer', (req, res) => {
    res.sendFile(root + '/styles/components/footer.css')
  })

  // Dashboard
  route.get('/css/dashMain', (req, res) => {
    res.sendFile(root + '/styles/dashboard/main.css')
  })
}

module.exports = cssRouter