exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.dropColumn('serie_car')
            table.dropColumn('model_car')
            table.dropColumn('color_car1')
            table.dropColumn('color_car2')
            table.integer('series_id')
            table.integer('model_id')
            table.integer('color_id_1')
            table.integer('color_id_2')
        })
};

exports.down = function (knex) {

};
