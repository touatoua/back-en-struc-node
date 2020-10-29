
exports.up = function (knex) {
    return knex.schema
        .createTable('order_accessories_tbl', (table) => {
            table.increments('order_accessories_id').primary()
            table.integer('order_id').unsigned().references('order_id').inTable('order_tbl').notNull().onDelete('cascade').index()
            table.integer('accessories_id').unsigned().references('accessories_id').inTable('accessories_tbl').notNull().index()
            table.specificType('status', 'tinyint(1)').defaultTo(1)
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })

};

exports.down = function (knex) {

};
