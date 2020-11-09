
exports.up = function (knex) {
    return knex.schema
        .createTable('insurance_file_tbl', (table) => {
            table.increments('insurance_file_id').primary()
            table.string('file', 45)
            table.integer('insurance_id').unsigned().references('insurance_id').inTable('insurance_tbl').notNull().index().onDelete('cascade')
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
