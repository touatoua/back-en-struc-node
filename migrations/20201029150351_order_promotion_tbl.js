
exports.up = function (knex) {
    return knex.schema
        .createTable('order_promotion_tbl', (table) => {
            table.increments('order_promotion_id').primary()
            table.integer('order_id').unsigned().references('order_id').inTable('order_tbl').notNull().onDelete('cascade').index()
            table.integer('promotion_id').unsigned().references('promotion_id').inTable('promotion_tbl').notNull().index()
            table.specificType('status', 'tinyint(1)').defaultTo(1)
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })

};

exports.down = function (knex) {

};
