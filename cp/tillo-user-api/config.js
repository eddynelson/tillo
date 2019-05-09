'use strict'

const db = {
  database: process.env.DB || 'tillobase',
  username: process.env.DB_NAME || 'tillo',
  password: process.env.DB_PASS || 'tillo',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 9000,
  logging: console.log
}

module.exports = { db }
