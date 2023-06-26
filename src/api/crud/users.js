const { PrismaClient } = require('@prisma/client')
const {tyDon} = require('tydon')

const prisma = new PrismaClient()

async function register(user, pass) {
  try {
    let res

    const findUser = await prisma.user.findUnique({
      where: {
        username: user  
      }
    })

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

      await prisma.user.create({
        data: {
          username: user,
          password: pass,
          date: tyDon().toString(),
          isAdmin: false
        }
      })

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