const {tyDon} = require('tydon')

async function register(user, pass) {
  try {
    let res

    const findUser = null

    if (findUser != null) {
      res = {
        status: 403,
        message: 'This username is already on our website. Please Enter other username'
      }
      return res
    } else {
      res = {
        status: 200,
        message: 'Your register is complete!'
      }

      return res
    }
  } catch (err) {
    console.log(err);
    return err
  }
}

module.exports = {
  register
}