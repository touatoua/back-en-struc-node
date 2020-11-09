exports.up = function (knex) {
    return knex.schema
        .table('supplier_tbl', (table) => {
            table.dropColumn('acept_status')
            table.dropColumn('status')
        })
};

exports.down = function (knex) {

};
