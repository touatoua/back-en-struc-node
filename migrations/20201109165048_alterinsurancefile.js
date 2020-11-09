
exports.up = function (knex) {
    return knex.schema
        .table('insurance_file_tbl', (table) => {
            table.text('name')
        })
};

exports.down = function (knex) {

};
