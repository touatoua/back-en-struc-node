
exports.up = function (knex) {
    return knex.schema
        .createTable('provinces', (table) => {
            table.integer('id')
            table.string('code', 3)
            table.string('name_th', 125)
            table.string('name_en', 125)
            table.integer('geography_id')
        })
};

exports.down = function (knex) {

};
