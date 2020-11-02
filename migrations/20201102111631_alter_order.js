exports.up = function (knex) {
    return knex.schema
        .table('order_tbl', (table) => {
            table.specificType('insurance_get', 'tinyint(1)')
            table.specificType('act_get', 'tinyint(1)')

        })


};

exports.down = function (knex) {

};
