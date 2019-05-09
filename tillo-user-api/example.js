const db = require('./lib/db.js')

const config = {
  username: 'tillo',
  password: 'tillo',
  database: 'tillobase',
  port: 9000,
  dialect: 'postgres'
}

db(config)
  .then(({ User }) => {
    User.create({
      username: 'eddydecena',
      bio: 'Backend Developer',
      email: 'eddynelson02@gmail.com',
      avatar: 'https://static.tillo.com/avatar/eddydecena.jpg'
    })
  })
  .catch(console.error)
