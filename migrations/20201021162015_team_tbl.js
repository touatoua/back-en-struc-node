
exports.up = function (knex) {
    return knex.schema.createTable('team_tbl', (table) => {
        table.increments('team_id')
        table.string('team_name')
        table.integer('branch_id', 11)
        table.text('work_flow ')
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })

};

exports.down = function (knex) {

};
