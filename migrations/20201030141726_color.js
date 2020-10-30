
exports.up = function (knex) {
    return knex.schema
        .createTable('color_tbl', (table) => {
            table.increments('color_id').primary()
            table.string('color_name', 125)
            table.specificType('status', 'tinyint(1)').defaultTo(1)
            table.integer('model_id').unsigned().references('model_id').inTable('model_tbl').notNull().index().onDelete('cascade')
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
