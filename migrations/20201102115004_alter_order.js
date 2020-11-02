exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.dropColumn('oreder_vat')
            table.decimal('order_vat', 15, 2)

        })


};

exports.down = function (knex) {

};
