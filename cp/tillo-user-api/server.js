const express = require('express')
const http = require('http')
const chalk = require('chalk')
const debug = require('debug')('tillo:user:api:server')
const bodyParser = require('body-parser')

//native module
const user = require('./routes/user')
const users = require('./routes/users')

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)

//config express
app.use(bodyParser.json())

app.get('/', (req, res) => {
  debug(req.path)
  console.log(req.body)
  res.status(200).send('User api microservice for tillo app')
  res.end()
})

app.use('/user', user)
app.use('/users', users)

server.listen(PORT, () => {
  console.log(chalk.green(`Tillo User Server is running in http://localhost:${PORT}`))
})

process.on('SIGINT', (signal) => {
  debug(`Recived ${signal}`)
  console.log(chalk.greenBright(`Server is down!!`))
  process.exit()
})

process.on('unhandledRejection', handleFatalError)
process.on('uncaughtExection', handleFatalError)

function handleFatalError(err){
  console.log(`[FATAL ERROR] -> ${chalk.red(err.message)}`)
  console.log(`[FATAL ERROR] -> ${chalk.red(err.stack)}`)
  process.exit(1)
}
