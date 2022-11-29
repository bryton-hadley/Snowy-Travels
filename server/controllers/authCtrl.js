require('dotenv').config();
const {SECRET} = process.env
const {User} = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id
    },
    SECRET,
    {
      expiresIn: '2 days'
    }
  )
}

module.exports = {
  register: async (req,res) => {
    try { 
      const {username, password }= req.body
      let foundUser = await User.findOne({where: {username}})
      if(foundUser){
        res.status(400).send('This username is taken, please register with a different username')
      } else {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await User.create({username, hashedPass: hash, username})
        const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
        const exp = Date.now() + 1000 * 60 * 60 * 48
        res.status(200).send({
          username: newUser.dataValues.username,
          userId: newUser.dataValues.id,
          token,
          exp
        })
      }
      
    } catch (err) {
      console.log(err)
      res.sendStatus(400)
      
    }
  },
  login: async (req, res) => {
    console.log('hit login authCtrl')
    try { 
      const {username, password} = req.body
      let foundUser = await User.findOne({where: {username}})
      console.log(foundUser)
      if(foundUser) {
        console.log(foundUser)
        const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

        if(isAuthenticated) {
          console.log('Authenticated')
          const token = createToken(foundUser.dataValues.username, foundUser.dataValues.id)
          const exp = Date.now() + 1000 * 60 * 60 * 48
          res.status(200).send({
            username: foundUser.dataValues.username,
            userId: foundUser.dataValues.id,
            token,
            exp
          })
        } else {
          res.status(400).send('cannot log in')
        }

      } else {
        res.status(400).send('cannot log in')
      }
    } catch (err) {
      console.log(err)
      res.sendStatus(400)
    }
  },
} ;