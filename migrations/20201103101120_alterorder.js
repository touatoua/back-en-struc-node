exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.decimal('down', 15, 2)
            table.decimal('sub_down', 15, 2)
        })
};

exports.down = function (knex) {

};
