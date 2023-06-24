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
      <div>
        <a href="/register" class="btn" style="background-color: aquamarine; color: #2e2f2f;">
          Get Started >
        </a>
      </div>
    </div>
  </div>
  <div class="lottiesContainer">
    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_wis6xp3y.json" background="transparent" speed="1" autoplay class="lotties"></lottie-player>
  </div>
</div>

<!-- Parent Container -->
<!-- <div class="control-parent"> -->
  <!-- Navigator bar Component -->
  <!-- ${NavBar} -->
  <!-- <div class="parent">
    <div class="big-heading">

    </div>
    <div class="big-heading">
      
    </div>
  </div>
</div> -->

<!-- Footer Component -->
${Footer}`

const indexComponents = {
  title: title,
  head: head,
  body: body
}

module.exports = indexComponents