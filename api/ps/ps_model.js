const knex = require('../../database/knex')

class psModel {
    addBranch(data) {
        return knex('branch_tbl').insert(data)
    }

    getBranch() {
        return knex('branch_tbl')
            .select(
                'branch_id',
                'branch_name'
            )
    }

    addPromotion(data) {
        return knex('promotion_tbl').insert(data)
    }

    getPromotions() {
        return knex('promotion_tbl')
            .select(
                'promotion_id',
                'promotion_name',
                'promotion_price'
            )
    }


}

module.exports = new psModel()