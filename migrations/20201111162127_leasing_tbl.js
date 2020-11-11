
exports.up = function (knex) {
    return knex.schema
        .createTable('leasing_tbl', (table) => {
            table.increments('leasinge_id').primary()
            table.string('leasing_name', 125)
            table.string('leasing_branch', 125)
            table.string('leasing_taxid', 45)
            table.string('leasing_type', 45)
            table.string('leasing_tel', 11)
            table.string('status', 45)
            table.text("leasing_address")
            table.string("leasing_sub_district", 45)
            table.string("leasing_district", 45)
            table.string("leasing_province", 45)
            table.string("leasing_zipcode", 5)
            table.integer("leasing_interest")
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
        .createTable('leasing_file_tbl', (table) => {
            table.increments('leasinge_file_id').primary()
            table.string('file', 45)
            table.text('name')
            table.integer('leasinge_id').unsigned().references('leasinge_id').inTable('leasing_tbl').notNull().index().onDelete('cascade')
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
