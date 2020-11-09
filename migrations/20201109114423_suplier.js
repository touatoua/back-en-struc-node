
exports.up = function (knex) {
    return knex.schema
        .createTable('supplier_tbl', (table) => {
            table.increments('supplier_id').primary()
            table.string('supplier_code', 45)
            table.string('supplier_name', 125)
            table.string('supplier_type', 45)
            table.datetime("supplier_created")
            table.text("supplier_address")
            table.string("supplier_sub_district", 45)
            table.string("supplier_district", 45)
            table.string("supplier_province", 45)
            table.string("supplier_zipcode", 5)
            table.string('status', 45)
            table.string('acept_status', 45)
            table.string("supplier_file", 45)
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
