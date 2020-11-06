exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.string('insurance', 5)
            table.string('act', 5)
            table.string('register', 5)
        })
};

exports.down = function (knex) {

};
