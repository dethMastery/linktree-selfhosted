function dashboardFrame(components) {
  const title = (components.title != undefined) ? components.title : ''
  const headBox = (components.head != undefined) ? components.head : ''
  const body = (components.body != undefined) ? components.body : ''

  return html = `<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>${title}</title>

    <link rel="stylesheet" href="/css/main">
    <link rel="stylesheet" href="/css/dashMain">
    ${headBox}
  </head>

  <body>
    ${body}
  </body>

</html>`
}

module.exports = dashboardFrame