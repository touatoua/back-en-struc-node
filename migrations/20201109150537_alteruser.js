exports.up = function (knex) {
    return knex.schema
        .table('user_tbl', (table) => {
            table.string('status', 45)
        })
};

exports.down = function (knex) {

};
