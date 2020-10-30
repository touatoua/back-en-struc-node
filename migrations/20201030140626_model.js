
exports.up = function (knex) {
    return knex.schema
        .createTable('model_tbl', (table) => {
            table.increments('model_id').primary()
            table.string('series_name', 125)
            table.specificType('status', 'tinyint(1)').defaultTo(1)
            table.integer('series_id').unsigned().references('series_id').inTable('series_tbl').notNull().index().onDelete('cascade')
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
