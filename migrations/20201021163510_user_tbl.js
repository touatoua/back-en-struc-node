
exports.up = function (knex) {
    return knex.schema.createTable('user_tbl', (table) => {
        table.increments('user_id')
        table.string('username', 125)
        table.string('password')
        table.integer('employee_no')
        table.string('firstname')
        table.string('lastname')
        table.integer('position_id')
        table.integer('team_id')
        table.integer('department_id')
        table.string('branch')
        table.string('email')
        table.text('work_flow ')
        table.datetime("created_at").defaultTo(knex.fn.now());
        table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    })

};

exports.down = function (knex) {

};
