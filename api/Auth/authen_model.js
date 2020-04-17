const knex = require('../../database/knex')

class authenModel {
    insertUser(data) {
        return knex('user_tbl').insert(data)
    }

    getUserbyUsername(username) {
        return knex('user_tbl')
            .where('username', username)
    }
}

module.exports = new authenModel()