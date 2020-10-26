
exports.up = function (knex) {
    return knex.schema
        .createTable('order_tbl', (table) => {
            table.increments('order_id').primary()
            table.integer('branch_id')
            table.string('saler_name', 125)
            table.string('getcar_date', 45)
            table.string('serie_car', 125)
            table.string('model_car', 125)
            table.string('color_car1', 45)
            table.string('color_car2', 45)
            table.string('model_code', 125)
            table.string('pay_choice')
            table.integer('day_credit')
            table.decimal('start_price', 15, 2)
            table.integer('discount_id')
            table.decimal('discount_price', 15, 2)
            table.integer('vat')
            table.decimal('real_price', 15, 2)
            table.decimal('recommend_price', 15, 2)
            table.string('other_pay')
            table.decimal('other_pay_price', 15, 2)
            table.specificType('insurance', 'tinyint(1)')
            table.string('insurance_name')
            table.string('act')
            table.string('act_pay', 45)
            table.specificType('register', 'tinyint(1)')
            table.decimal('register_price', 15, 2)
            table.string('register_pay', 45)
            table.decimal('customer_pay', 15, 2)
            table.decimal('order_price', 15, 2)
            table.decimal('oreder_vat', 15, 2)
            table.text('note')
            table.integer('status').defaultTo(1)
            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        })
        .createTable('order_userinfo', (table) => {
            table.increments('ouserinfo_id').primary()
            table.string('a_card')
            table.string('name', 125)
            table.string('idcard', 14)
            table.integer('tel', 11)
            table.string('line', 125)
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
    return knex.schema
        .dropTable('order_userinfo')
        .dropTable('order_tbl');
};
