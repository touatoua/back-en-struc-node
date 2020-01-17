const knex = require('../../database/knex')

class authenModel {
    login() {
        return knex('chat_tbl')
    }

    fetUserData(user_id) {
        return knex('user_tbl').where('user_id', user_id)
    }
}

module.exports = new authenModel()