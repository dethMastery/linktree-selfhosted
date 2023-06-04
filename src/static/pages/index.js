const NavBar = require("../components/Index/NavBar")
const Footer = require("../components/Index/footer")

const title = 'katzuTree'
const head = `<link rel="stylesheet" href="/css/pages/index">

<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>`
const body = `<!-- Top Heading -->
<div class="big-heading mainScreen">
  <div class="container">
    <div class="dataContainer">
      <h1>
        katzuTree
      </h1>
      <p>
        Like "LinkTree" but can selfhosted by yourself :)
      </p>
    </div>
  </div>
  <div class="lottiesContainer">
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_wis6xp3y.json" background="transparent" speed="1" autoplay class="lotties"></lottie-player>
  </div>
</div>

<!-- Navigator bar Component -->
${NavBar}
<!-- Footer Component -->
${Footer}`

const indexComponents = {
  title: title,
  head: head,
  body: body
}

module.exports = indexComponents