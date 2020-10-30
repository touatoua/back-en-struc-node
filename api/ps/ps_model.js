const knex = require('../../database/knex')

class psModel {
    addBranch(data) {
        return knex('branch_tbl').insert(data)
    }

    addPromotion(data) {
        return knex('promotion_tbl').insert(data)
    }


}

module.exports = new psModel()