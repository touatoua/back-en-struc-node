exports.up = function (knex) {
    return knex.schema
        .table('supplier_tbl', (table) => {
            table.string('acept_status', 45).defaultTo('รอการอนุมัติ')
            table.string('status', 45).defaultTo('ใช้งาน')
        })
};

exports.down = function (knex) {

};
