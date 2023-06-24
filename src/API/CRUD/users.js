let {tyDon} = require('tydon')

let userModel = require('../schemas/users')

require('../mongo')

// Default type == username
async function userQuery(type, value) {
  try {
    switch (type) {
      case 'id':
        return await userModel.findOne({userID: value}, 'userID username password isAdmin')
        break;
    
      default:
        return await userModel.findOne({username: value}, 'userID username password isAdmin')
        break;
    }
  } catch (err) {
    return err
  }
}

async function userRegister (res, user, pass) {
  if (await userQuery('user', user) != undefined) {
    res.status(400).redirect('/register?error=exist')
  } else {
    let id
    const latestModel = await userModel.findOne({}, 'userID username').sort({userID: 'desc'})

    if (latestModel == undefined) {
      id == 0
    } else {
      id = parseInt(latestModel.userID) + 1
    }

    const data = new userModel({
      uID: id,
      date: tyDon(),
      username: user,
      password: '',
      isAdmin: false
    })
  }
}