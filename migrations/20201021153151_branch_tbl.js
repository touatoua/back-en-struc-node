
exports.up = function (knex) {
    return knex.schema.createTable('branch_tbl', (table) => {
        table.increments('branch_id')
        table.string('branch_name')

    })

};

exports.down = function (knex) {

};
