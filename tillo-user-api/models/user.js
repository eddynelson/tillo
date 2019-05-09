'use strict'

const Sequelize = require('sequelize')

module.exports = (sequelize) => sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
    allowNull: false,
    unique: true
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW(),
    allowNull: false
  },
  avatar: {
    type: Sequelize.STRING
  },
  bio: Sequelize.TEXT
})
