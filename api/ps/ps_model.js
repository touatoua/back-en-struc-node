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

    addInsuranceFile(data) {
        return knex('insurance_file_tbl').insert(data)
    }

    getInsurance() {
        return knex('insurance_tbl')
            .select('insurance_id', 'insurance_name', 'supplier_type', 'status')
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

    addSupplier(data) {
        return knex('supplier_tbl').insert(data)
    }

    getSuppliers() {
        return knex('supplier_tbl')
            .select('supplier_id',
                'supplier_code',
                'supplier_name',
                'supplier_type',
                'supplier_created',
                'supplier_file',
                'acept_status',
                'status')
    }

    addTeam(data) {
        return knex('team_tbl').insert(data)
    }

    getTeams() {
        return knex('team_tbl')
    }

    getPosition() {
        return knex('position_tbl')
            .select('postion_id',
                'positon_name')
    }

    getWorkFlow() {
        return knex('workflow_tbl')
            .select('workflow_id', 'workflow_name')
    }

}

module.exports = new psModel()