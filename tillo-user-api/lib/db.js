'use strict'

const Sequelize = require('sequelize')
const setupUserModel = require('../models/user.js')

module.exports = async (config) => {
  const sequelize = new Sequelize(config)

  await sequelize.authenticate()

  if (config.setup) {
    sequelize.sync({ force: true })
  }

  const User = setupUserModel(sequelize)

  return { User }
}
