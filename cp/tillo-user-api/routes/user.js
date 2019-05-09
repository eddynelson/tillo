'use strict'

const express = require('express')
const user = express.Router()
const debug = require('debug')('tillo:user:api:user')
const { db } = require('../config.js')

const User = require('../models/User.js')(db)

user.get('/', (req, res)=>{
  debug(req.path)
  res.status(200).send('Already!!')
  res.end()
})

user.post('/', (req, res)=>{
  debug(req.path)
  res.status(200).send('Already!!')
  res.end()
})

user.put('/', (req, res)=>{
  debug(req.path)
  res.status(200).send('Already!!')
  res.end()
})

user.delete('/', (req, res)=>{
  debug(req.path)
  res.status(200).send('Already!!')
  res.end()
})

module.exports = user
