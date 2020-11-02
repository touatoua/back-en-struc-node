exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.string('insurance_type', 45)
            table.decimal('insurance_premium', 15, 2)
            table.string('act_name', 125)
            table.decimal('act_premium', 15, 2)

        })


};

exports.down = function (knex) {

};
