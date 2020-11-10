const knex = require('../../database/knex')

class authenModel {
    insertUser(data) {
        return knex('user_tbl').insert(data)
    }

    getUserbyUsername(username) {
        return knex('user_tbl')
            .where('username', username)
    }

    getUsers() {
        return knex('user_tbl as u')
            .join('branch_tbl as b', 'b.branch_id', 'u.branch')
            .join('team_tbl as t', 't.team_id', 'u.team_id')
            .select(
                'u.user_id',
                'u.username',
                'u.status',
                knex.raw("CONCAT(u.firstname, ' ',u.lastname) as name"),
                'b.branch_name',
                't.team_name'
            )
    }
}

module.exports = new authenModel()