exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.string('insurance_pay', 45)
        })
};

exports.down = function (knex) {

};
