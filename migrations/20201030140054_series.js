
exports.up = function (knex) {
    return knex.schema
        .createTable('series_tbl', (table) => {
            table.increments('series_id').primary()
            table.string('series_name',125)
            table.string('type',75)
            table.specificType('status', 'tinyint(1)').defaultTo(1)
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
