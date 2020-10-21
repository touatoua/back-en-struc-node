
exports.up = function (knex) {
    return knex.schema.dropTable('branch_tbl')
        .then(() => knex.schema.createTable('branch_tbl', (table) => {
            table.increments('branch_id')
            table.string('branch_name')
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

        }))
};

exports.down = function (knex) {

};
