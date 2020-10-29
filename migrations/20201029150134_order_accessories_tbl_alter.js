
exports.up = function (knex) {
    return knex.schema
        .table('order_accessories_tbl', (table) => {
            table.specificType('type', 'tinyint(1)')
        })


};

exports.down = function (knex) {

};
