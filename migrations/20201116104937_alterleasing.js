
exports.up = function (knex) {
    return knex.schema
        .table('leasing_tbl', (table) => {
            table.string('type').defaultTo('leasing')
        })
};

exports.down = function (knex) {

};
