const knex = require('../../database/knex')

class carModel {
    addBranch(data) {
        return knex('branch_tbl').insert(data)
    }


}

module.exports = new carModel()