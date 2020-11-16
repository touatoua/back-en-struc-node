
exports.up = function (knex) {
    return knex.schema
        .table('accessories_tbl', (table) => {
            table.string('accessories_code', 75)
        })
};

exports.down = function (knex) {

};
