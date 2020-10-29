const knex = require('../../database/knex')

class orderModel {
    addBranch(data) {
        return knex('branch_tbl').insert(data)
    }


}

module.exports = new orderModel()