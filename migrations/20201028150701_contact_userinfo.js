
exports.up = function (knex) {
    return knex.schema
        .createTable('contact_userinfo', (table) => {
            table.increments('conuserinfo_id').primary()
            table.text('address')
            table.string('sub_district', 75)
            table.string('district', 75)
            table.string('province', 75)
            table.string('zipcode', 5)
            table.integer('order_id').unsigned().references('order_id').inTable('order_tbl').notNull().onDelete('cascade').index()
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
        .createTable('owner_userinfo', (table) => {
            table.increments('own_userinfo_id').primary()
            table.string('name', 125)
            table.string('idcard', 14)
            table.text('address')
            table.string('sub_district', 75)
            table.string('district', 75)
            table.string('province', 75)
            table.string('zipcode', 5)
            table.integer('order_id').unsigned().references('order_id').inTable('order_tbl').notNull().onDelete('cascade').index()
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
};

exports.down = function (knex) {

};
