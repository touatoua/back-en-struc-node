
exports.up = function (knex) {
    return knex.schema
        .table('model_tbl', (table) => {
            table.string('model_name', 125)
            table.dropColumn('series_name')
        })
};

exports.down = function (knex) {

};
