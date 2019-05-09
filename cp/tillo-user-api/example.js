const Sequelize = require('sequelize')
const { db } = require('./config.js')

const sequelize = new Sequelize(db)

const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

User.create({ username: 'eddydecena', email: 'eddynelson02@gmail.com'  })
  .then(() => {
    return User.findOne({ where: { username: 'eddydecena' } })
  })
  .then((user) => {
    console.log(user)
  })
