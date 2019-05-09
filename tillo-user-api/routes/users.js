'use strict'

const express = require('express')
const debug = require('debug')

const users = express.Router()

users.get('/', async (req, res) => {
  debug(req.path)
  let result

  try {
    result = await req.db.User.findAll()
    let r = result.toJSON()
    console.log(r)
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(result)
  res.end()
})

module.exports = users
