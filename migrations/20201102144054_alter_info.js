exports.up = function (knex) {
    return knex.schema
        .table('order_userinfo', (table) => {
            table.dropColumn('name')
            table.dropColumn('idcard')
            table.dropColumn('tel')
            table.dropColumn('line')
            table.dropColumn('address')
            table.dropColumn('sub_district')
            table.dropColumn('district')
            table.dropColumn('province')
            table.dropColumn('zipcode')
            table.string('userinfo_name', 125)
            table.string('userinfo_idcard', 14)
            table.integer('userinfo_tel', 11)
            table.string('userinfo_line', 125)
            table.text('userinfo_address')
            table.string('userinfo_sub_district', 75)
            table.string('userinfo_district', 75)
            table.string('userinfo_province', 75)
            table.string('userinfo_zipcode', 5)
        })
        .table('contact_userinfo', (table) => {
            table.dropColumn('address')
            table.dropColumn('sub_district')
            table.dropColumn('district')
            table.dropColumn('province')
            table.dropColumn('zipcode')
            table.text('contact_address')
            table.string('contact_sub_district', 75)
            table.string('contact_district', 75)
            table.string('contact_province', 75)
            table.string('contact_zipcode', 5)
        })
        .table('owner_userinfo', (table) => {
            table.dropColumn('name')
            table.dropColumn('idcard')
            table.dropColumn('address')
            table.dropColumn('sub_district')
            table.dropColumn('district')
            table.dropColumn('province')
            table.dropColumn('zipcode')
            table.string('owner_name', 125)
            table.string('owner_idcard', 14)
            table.text('owner_address')
            table.string('owner_sub_district', 75)
            table.string('owner_district', 75)
            table.string('owner_province', 75)
            table.string('owner_zipcode', 5)
        })


};

exports.down = function (knex) {

};
