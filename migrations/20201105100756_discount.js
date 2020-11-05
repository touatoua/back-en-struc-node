
exports.up = function (knex) {
    return knex.schema
        .createTable('discount_tbl', (table) => {
            table.increments('discount_id').primary()
            table.string('discount_name', 125)
            table.decimal('discount_price', 15, 2)

        })
};

exports.down = function (knex) {

};
