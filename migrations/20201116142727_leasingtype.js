
exports.up = function (knex) {
    return knex.schema
        .createTable('leadsingtype_tbl', (table) => {
            table.increments('leadsingtype_id').primary()
            table.string('leadsingtype_name', 75)
            table.string('status', 45)
        })
};

exports.down = function (knex) {

};
