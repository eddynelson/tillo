'use strict'

const Sequelize = require('sequelize')
const sequelize = null

module.exports = (config) => {
  if(!sequelize){
    sequelize = new Sequelize(config)
  }

  return sequelize
}
