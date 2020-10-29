
exports.up = function (knex) {
    return knex.schema
        .createTable('accessories_tbl', (table) => {
            table.increments('accessories_id').primary()
            table.string('accessories_name', 125)
            table.decimal('accessories_price', 15, 2)
            table.specificType('status', 'tinyint(1)').defaultTo(1)
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })

};

exports.down = function (knex) {

};
