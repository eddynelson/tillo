'use strict'

const express = require('express')
const user = express.Router()
const debug = require('debug')('tillo:user:api:user')
const chalk = require('chalk')

let User = null

user.use('*', (req, res, next) => {
  if (!User) {
    User = req.db.User
  }
  next()
})

user.get('/', async (req, res, next) => {
  debug(req.path)

  let user

  try {
    user = await User.findOne({
      where: {
        uuid: req.body.uuid
      }
    })
  } catch (err) {
    handleError(err)
    next(err)
  }

  res.status(200).json(user)
})

user.post('/', async (req, res, next) => {
  debug(req.path)

  let user = null

  try {
    const userConfirm = await User.findOne({
      where: {
        email: req.body.email
      }
    })

    if (userConfirm) throw new Error('User already exist!!')

    await User.create(req.body)
    user = await User.findOne({
      where: {
        email: req.body.email
      }
    })
    // add user
  } catch (err) {
    handleError(err)
    next(err)
  }

  res.status(200).json(user)
})

user.put('/', async (req, res, next) => {
  debug(req.path)
  
  let user = null
  
  try{
    const cond = {
      where: {
        uuid: req.body.uuid
      }
    }

    await User.update(req.body, cond)
   
    user = await User.findOne(cond)
  }catch(err){
    next(err)
  }

  res.status(200).json(user)
})

user.delete('/', async (req, res, next) => {
  debug(req.path)
  
  let user = null
  
  try{
    user = await User.findOne({
      where: {
        uuid: req.body.uuid
      }
    })
    
    user.destroy()
  }catch(err){
    next(err)
  }
  //get data
  res.status(200).json(user)
})

function handleError (err) {
  console.log(`[Handle Error] ${chalk.red(err.stack)}`)
  console.log(`[Handle Error] ${chalk.red(err.message)}`)
}

module.exports = user
