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

    addInsurance(data) {
        return knex('insurance_tbl').insert(data)
    }

    getInsurance() {
        return knex('insurance_tbl')
            .select('insurance_id', 'insurance_name')
    }

    addAct(data) {
        return knex('act_tbl').insert(data)
    }

    getAct() {
        return knex('act_tbl')
            .select('act_id', 'act_name')
    }

    addDiscount(data) {
        return knex('discount_tbl').insert(data)
    }

    getDiscount() {
        return knex('discount_tbl')
            .select('discount_id', 'discount_name', 'discount_price')
    }

}

module.exports = new psModel()