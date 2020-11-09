exports.up = function (knex) {
    return knex.schema
        .table('insurance_tbl', (table) => {
            table.string('insurance_branch', 75)
            table.string('tax_code', 45)
            table.string('supplier_type', 45)
            table.string('tel', 11)
            table.string('status', 45)
            table.text('insurance_address')
            table.string('insurance_sub_district', 45)
            table.string('insurance_district', 45)
            table.string('insurance_provice', 45)
            table.string('insurance_zipcode', 5)
        })
};

exports.down = function (knex) {

};
