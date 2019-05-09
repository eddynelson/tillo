'use strict'

const setupDatabase = require('../lib/db.js')
const setupUserModel = require('./User.js')
const defaults = require('defaults')
const debug = require('debug')('tillo:user:api:db')
const chalk = require('chalk')

module.exports = async (config) => {
  config = defaults(config, {
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    },
    sync: { force: true  }
  })

  const sequelize = setupDatabase(config)
  const User = setupUserModel(config)

  await sequelize
	.authenticate()
	.then(() => {
	  debug('Conneted success!!')
	})
	.catch(err => {
	  console.log(`[FATAL ERROR] ${chalk.red(err.stack)}`)
          console.log(`[FATAL ERROR] ${chalk.red(err.message)}`)
          process.exit(1)
	})

  return { User }
}
