const NavBar = require("../components/Index/NavBar")
const Footer = require("../components/Index/footer")

const title = 'Dashboard | katzuTree'
const head = `<link rel="stylesheet" href="/css/pages/dashboard">`
const body = `<!-- Top Heading -->
<div class="big-heading mainScreen">
  
</div>

<!-- Footer Component -->
${Footer}`

const dashboardComponents = {
  title: title,
  head: head,
  body: body
}

module.exports = dashboardComponents