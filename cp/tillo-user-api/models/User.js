const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = (config) => {
  const sequelize = setupDatabase(config)

  return sequelize.define('User', {
    username:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    },
    createAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    updateAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    bio: {
      type: Sequelize.TEXT
    },
    uuid: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      unique: true,
      allowNull: false
    }
  })
}

