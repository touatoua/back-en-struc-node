
exports.up = function (knex) {
    return knex.schema
        .createTable('districts', (table) => {
            table.string('id', 45)
            table.string('zip_code', 5)
            table.string('name_th', 125)
            table.string('name_en', 125)
            table.integer('amphure_id')
        })
};

exports.down = function (knex) {

};
