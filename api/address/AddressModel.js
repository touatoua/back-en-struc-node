const knex = require('../../database/knex')

class Address {
    getAllprovince() {
        return knex('provinces').orderBy('name_th', 'asc');

    }
    getdistrict(province_id) {
        return knex('amphures')
            .where('province_id', province_id);

    }
    getsubdistrict(amphure_id) {
        return knex('districts')
            .where('amphure_id', amphure_id);

    }
}

module.exports = new Address()