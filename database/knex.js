var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'xj2qjm5x',
      database : 'news_db'
    }
})

module.exports = knex