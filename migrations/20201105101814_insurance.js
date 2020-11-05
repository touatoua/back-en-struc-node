
exports.up = function (knex) {
    return knex.schema
        .createTable('insurance_tbl', (table) => {
            table.increments('insurance_id').primary()
            table.string('insurance_name', 125)
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
