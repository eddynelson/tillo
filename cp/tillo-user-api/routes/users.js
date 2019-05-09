'use strict'

const express = require('express')
const debug = require('debug')

const users = express.Router()

users.get('/', (req, res) => {
  debug(req.path)
  res.status(200).send('Already!!')
  res.end()
})

module.exports = users
