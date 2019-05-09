'use strict'

const express = require('express')
const http = require('http')
const chalk = require('chalk')
const debug = require('debug')('tillo:user:api:server')
const bodyParser = require('body-parser')
const asyncify = require('express-asyncify')

// native module
const user = require('./routes/user')
const users = require('./routes/users')
const db = require('./lib/db.js')
const config = require('./config.js')

const app = asyncify(express())
const server = http.createServer(app)

// config express
app.use(bodyParser.json())

// middleware for setup db
app.use('*', async (req, res, next) => {
  debug(`Setup the db!!`)
  //fix, always setup db
  req.db = await db(config.db).catch(handleFatalError)
  next()
})

// route
app.use('/user', user)
app.use('/users', users)

// Express error handle
app.use((err, req, res, next) => {
  console.log(`[HANDLE ERROR] -> ${chalk.red(err.message)}`)
  console.log(`[HANDLE ERROR] -> ${chalk.red(err.stack)}`)

  if (err.message.match(/not found/)) {
    res.status(404).json({
      message: err.message
    })
  }

  if (err.message.match(/already exist/)) {
    res.status(400).json({
      message: err.message
    })
  }

  res.status(500).json({
    message: err.message
  })
})

app.get('/', (req, res) => {
  debug(req.path)
  res.status(200).send('User api microservice for tillo app')
  res.end()
})

server.listen(config.server.port, () => {
  console.log(chalk.green(`Tillo User Server is running in http://localhost:${config.server.port}`))
})

process.on('SIGINT', (signal) => {
  debug(`Recived ${signal}`)
  console.log(chalk.greenBright(`Server is down!!`))
  process.exit()
})

process.on('unhandledRejection', handleFatalError)
process.on('uncaughtExection', handleFatalError)

function handleFatalError (err) {
  console.log(`[FATAL ERROR] -> ${chalk.red(err.message)}`)
  console.log(`[FATAL ERROR] -> ${chalk.red(err.stack)}`)
  process.exit(1)
}
