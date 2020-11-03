
exports.up = function (knex) {
    return knex.schema
        .createTable('amphures', (table) => {
            table.increments('id').primary()
            table.string('code', 4)
            table.string('name_th', 125)
            table.string('name_en', 125)
            table.integer('province_id')
        })
};

exports.down = function (knex) {

};
