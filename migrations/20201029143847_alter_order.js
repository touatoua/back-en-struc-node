
exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.string('acept_status', 45)
            table.string('order_status', 45)

        })


};

exports.down = function (knex) {

};
