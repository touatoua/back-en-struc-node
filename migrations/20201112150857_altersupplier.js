
exports.up = function (knex) {
    return knex.schema
        .table('supplier_tbl', (table) => {
            table.integer('user_id')
        })
};

exports.down = function (knex) {

};
