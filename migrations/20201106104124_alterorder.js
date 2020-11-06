exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.dropColumn('insurance')
            table.dropColumn('act')
            table.dropColumn('register')
        })
};

exports.down = function (knex) {

};
