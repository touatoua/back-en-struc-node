
exports.up = function (knex) {
    return knex.schema.dropTable('branch_tbl')
        .then(() => knex.schema.createTable('branch_tbl', (table) => {
            table.increments('branch_id')
            table.string('branch_name2')


        }))


};

exports.down = function (knex) {

};
