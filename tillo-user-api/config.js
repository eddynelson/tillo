'use strict'

module.exports = {
  db: {
    username: process.env.DB_USER || 'tillo',
    password: process.env.DB_PASS || 'tillo',
    database: process.env.DB_NAME || 'tillobase',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 9000,
    dialect: 'postgres'
  },
  server: {
    port: process.env.PORT || 3000
  }
}
