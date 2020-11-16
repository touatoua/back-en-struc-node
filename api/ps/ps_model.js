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
                knex.raw(`CONCAT('${process.env.REACT_APP_API_PATH}/static/',supplier_file) as supplier_file`),
                'acept_status',
                'status')
    }

    thisSupplier(supplier_id) {
        return knex('supplier_tbl as s')
            .join('user_tbl as u', 'u.user_id', 's.user_create')
            .join('user_tbl as uu', 'u.user_id', 's.user_update')
            .select('supplier_id',
                's.supplier_code',
                's.supplier_name',
                's.supplier_type',
                's.supplier_created',
                knex.raw(`CONCAT('${process.env.REACT_APP_API_PATH}/static/',s.supplier_file) as supplier_file`),
                's.acept_status',
                's.status',
                's.supplier_address',
                's.supplier_sub_district',
                's.supplier_district',
                's.supplier_province',
                's.supplier_zipcode',
                's.created_at',
                's.updated_at',
                'u.username as user_create',
                'uu.username as user_update'
            )
            .where('supplier_id', supplier_id)
    }

    editSupplier(data) {
        return knex('supplier_tbl')
            .update(data)
            .where('supplier_id', data.supplier_id)
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

    addLeasing(data) {
        return knex('leasing_tbl').insert(data)
    }

    addLeasingFile(data) {
        return knex('leasing_file_tbl').insert(data)
    }

    getLeasing() {
        return knex('leasing_tbl')
            .select(
                'leasinge_id',
                'leasing_name',
                'leasing_type',
                'status')
    }

    thisLeasing(leasinge_id) {
        return knex('leasing_tbl')
            .select(
                'leasinge_id',
                'leasing_name',
                'leasing_branch',
                'leasing_taxid',
                'leasing_type',
                'leasing_tel',
                'status',
                'leasing_address',
                'leasing_sub_district',
                'leasing_district',
                'leasing_province',
                'leasing_zipcode',
                'leasing_interest',
                'created_at'
            )
            .where('leasinge_id', leasinge_id)
    }

    getFileLeasing(leasinge_id) {
        return knex('leasing_file_tbl')
            .select(
                'leasinge_file_id',
                'name',
                knex.raw(`CONCAT('${process.env.REACT_APP_API_PATH}/static/',file) as file`),
            )
            .where('leasinge_id', leasinge_id)
    }

    editLeasing(data) {
        return knex('leasing_tbl')
            .update(data)
            .where('leasinge_id', data.leasinge_id)
    }

    deleteFileLeasing(data) {
        return knex('leasing_file_tbl')
            .whereIn('leasinge_file_id', data.delete)
            .del()
    }

    addLeasingType(data) {
        return knex('leadsingtype_tbl')
            .insert(data)
    }

    getLeasingType() {
        return knex('leadsingtype_tbl')
    }

    removeLeasingType(leadsingtype_id) {
        return knex('leadsingtype_tbl')
            .del()
            .whereIn('leadsingtype_id', leadsingtype_id)
    }

}

module.exports = new psModel()