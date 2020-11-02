exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.dropColumn('insurance_get')
            table.dropColumn('act_get')

        })


};

exports.down = function (knex) {

};
