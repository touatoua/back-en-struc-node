
exports.up = function (knex) {
    return knex.schema
        .table('supplier_tbl', (table) => {
            table.dropColumn('user_id')
            table.integer('user_create')
            table.integer('user_update')

        })
};

exports.down = function (knex) {

};
