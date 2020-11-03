const knex = require('../../database/knex')

class Advertise {
    insertInfoAdvertise(data) {
        return knex("advertise_tbl").insert(data)
    }
    insertInfoAdvertiseType1(data) {
        return knex("advertise_type1_tbl").insert(data)
    }
    insertInfoAdvertiseType2(data) {
        return knex("advertise_type2_tbl").insert(data)
    }
    insertInfoAdvertiseType3(data) {
        return knex("advertise_type3_tbl").insert(data)
    }
    insertInfoAdvertiseType4(data) {
        return knex("advertise_type4_tbl").insert(data)
    }
    updateType4Insert(user_id) {
        return knex('user_tbl').update('type4_insert', 1).where('user_id', user_id)
    }
    insertFileType2(data) {
        return knex("type2_file_tbl").insert(data)
    }
    insertPicType3(data) {
        return knex("type3_pic_tbl").insert(data)
    }
    deleteCredit(user_id, credit) {
        return knex('user_tbl').where('user_id', user_id).decrement({ 'credit_amount': credit })
    }

    getAdvertiseTbl1(user_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type1_tbl as a1', 'a1.advertise_id', 'a.advertise_id')
            .where('a.user_id', user_id)
            .select('a.advertise_id', 'a.advertise_date', 'a1.topic', 'a.status', 'a1.advertise_type_id', 'a.create_date')
    }
    getAdvertiseTbl2(user_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type2_tbl as a2', 'a2.advertise_id', 'a.advertise_id')
            .where('a.user_id', user_id)
            .select('a.advertise_id', 'a.advertise_date', 'a2.category', 'a.status', 'a.create_date', 'a2.advertise_type_id')
    }

    getAdvertiseTbl3(user_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type3_tbl as a3', 'a3.advertise_id', 'a.advertise_id')
            .where('a.user_id', user_id)
            .select('a.advertise_id', 'a.advertise_date', 'a3.category', 'a.status', 'a.create_date', 'a3.advertise_type_id')
    }
    getAdvertiseTbl2File() {
        return knex('type2_file_tbl')
    }
    getAdvertiseTbl2FileAdminAdd() {
        return knex('type2_file_adminadd')
    }
    getAdvertiseTbl3Pic() {
        return knex('type3_pic_tbl')
    }

    getAdvertiseTbl4(user_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type4_tbl as a4', 'a4.advertise_id', 'a.advertise_id')
            .where('a.user_id', user_id)
            .select('a.advertise_id', 'a.advertise_date', 'a4.category', 'a.status', 'a4.file', 'a.create_date')
    }

    getPDFTemplate1ByID(advertise_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type1_tbl as a1', 'a1.advertise_id', 'a.advertise_id')
            .select('a1.detail', 'a1.template')
            .where('a.advertise_id', advertise_id)
    }
    getAllprovince() {
        return knex('provinces').orderBy('name_th', 'asc');

    }
    getdistrict() {
        return knex('amphures');

    }
    getsubdistrict() {
        return knex('districts');

    }
    getAllAdvertiseTbl1() {
        return knex('advertise_tbl as a')
            .join('advertise_type1_tbl as a1', 'a1.advertise_id', 'a.advertise_id')
            .select('a.advertise_id', 'a.advertise_date', 'a1.topic', 'a.status', 'a1.advertise_type_id', 'a.create_date', 'a1.detail', 'a1.template')
    }
    getAllAdvertiseTbl2() {
        return knex('advertise_tbl as a')
            .join('advertise_type2_tbl as a2', 'a2.advertise_id', 'a.advertise_id')
            .select('a.advertise_id', 'a.advertise_date', 'a2.category', 'a.status', 'a.create_date', 'a2.advertise_type_id', 'a2.file_amount')
    }

    getAllAdvertiseTbl3() {
        return knex('advertise_tbl as a')
            .join('advertise_type3_tbl as a3', 'a3.advertise_id', 'a.advertise_id')
            .select('a.advertise_id', 'a.advertise_date', 'a3.category', 'a.status', 'a.create_date', 'a3.advertise_type_id', 'a3.file_amount')
    }

    getAllAdvertiseTbl4() {
        return knex('advertise_tbl as a')
            .join('advertise_type4_tbl as a4', 'a4.advertise_id', 'a.advertise_id')
            .select('a.advertise_id', 'a.advertise_date', 'a4.category', 'a.status', 'a4.file', 'a.create_date')
    }

    checkCountAdvertiseTBL(advertise_date) {
        return knex('count_advertise_tbl').where('advertise_date', advertise_date)
    }

    insertCountAdvertiseTBL(data) {
        return knex('count_advertise_tbl').insert(data)
    }

    getCountAdvertiseTBL() {
        return knex('count_advertise_tbl')
    }

    getAdvertiseByDate(advertise_date) {
        return knex('advertise_tbl').where('advertise_date', advertise_date)
    }
    getAdvertiseByDate3(advertise_date) {
        return knex('advertise_tbl').where({ 'advertise_date': advertise_date, 'type': '3' })
    }
    getAdminAdvertiseType2() {
        return knex('advertise_tbl as a')
            .join('advertise_type2_tbl as a2', 'a2.advertise_id', 'a.advertise_id')
            .join('user_tbl as u', 'u.user_id', 'a.user_id')
            .select('a.advertise_id', 'a2.category', 'a.create_date', 'a.advertise_date', 'a.status', 'a2.file_amount', 'u.username')
            .orderBy('a.advertise_id', 'desc')
    }

    getAdvertise(user_id) {
        return knex('advertise_tbl as a').where('user_id', user_id)
            .leftJoin('advertise_type1_tbl as a1', 'a1.advertise_id', 'a.advertise_id')
            .select('a1.topic', 'a.advertise_id', 'a.type', 'a.create_date', 'a.advertise_date', 'a.status', 'a.user_id')
            .orderBy('a.advertise_id', 'desc')
    }
    getAdvertise1Id(advertise_type_id) {
        return knex('advertise_type1_tbl').where(advertise_type_id)
    }
    getAdvertise1In(array) {
        return knex('advertise_type1_tbl as a1')
            .join('advertise_tbl as a', 'a1.advertise_id', 'a.advertise_id')
            .select('a.advertise_id', 'a.advertise_date', 'a1.topic', 'a.status', 'a1.advertise_type_id', 'a.create_date', 'a1.detail', 'a1.template', 'a.type')
            .whereIn('a1.advertise_id', array)

    }
    getAdvertise2In(array) {
        return knex('advertise_type2_tbl').whereIn('advertise_id', array)
    }
    getAdvertise2get(array) {
        return knex('advertise_type2_tbl as a2').join('advertise_tbl as a', 'a2.advertise_id', 'a.advertise_id')
            .join('user_tbl as u', 'u.user_id', 'a.user_id')
            .select('a2.advertise_type_id', 'a.advertise_id', 'a2.category', 'a.create_date', 'a.advertise_date', 'a.status', 'a2.file_amount', 'u.username')
            .whereIn('a2.advertise_id', array)
    }
    getAdvertise3In(array) {
        return knex('advertise_type3_tbl').whereIn('advertise_id', array)
    }
    getAdvertise4In(array) {
        return knex('advertise_type4_tbl').whereIn('advertise_id', array)
    }
    getThisAdvertiseTbl1(advertise_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type1_tbl as a1', 'a1.advertise_id', 'a.advertise_id')
            .join('user_tbl as u', 'u.user_id', 'a.user_id')
            .where('a.advertise_id', advertise_id)
            .select('a.advertise_id', 'a.advertise_date', 'a1.topic', 'a.status', 'a1.advertise_type_id', 'a.create_date', 'a1.comp_name', 'u.username')
    }
    getThisAdvertiseTbl2(advertise_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type2_tbl as a2', 'a2.advertise_id', 'a.advertise_id')
            .join('user_tbl as u', 'u.user_id', 'a.user_id')
            .where('a.advertise_id', advertise_id)
            .select('a.advertise_id', 'a.advertise_date', 'a2.category', 'a.status', 'a.create_date', 'a2.advertise_type_id', 'a2.file_amount', 'u.username', 'a2.addmin_cap')
    }
    getThisAdvertiseTbl3(advertise_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type3_tbl as a3', 'a3.advertise_id', 'a.advertise_id')
            .join('user_tbl as u', 'u.user_id', 'a.user_id')
            .where('a.advertise_id', advertise_id)
            .select('a.advertise_id', 'a.advertise_date', 'a3.category', 'a.status', 'a.create_date', 'a3.advertise_type_id', 'a3.file_amount', 'u.username')
    }
    getThisAdvertiseTbl4(advertise_id) {
        return knex('advertise_tbl as a')
            .join('advertise_type4_tbl as a4', 'a4.advertise_id', 'a.advertise_id')
            .join('user_tbl as u', 'u.user_id', 'a.user_id')
            .where('a.advertise_id', advertise_id)
            .select('a.advertise_id', 'a.advertise_date', 'a4.category', 'a.status', 'a4.file', 'a.create_date', 'a4.name', 'u.username')
    }
    getThisAdvertise(advertise_id) {
        return knex('advertise_tbl')
            .where('advertise_id', advertise_id)

    }
    insertFileType2AdminAdd(data) {
        return knex("type2_file_adminadd").insert(data)
    }
    updateAdminCap(advertise_type_id) {
        return knex("advertise_type2_tbl").update('addmin_cap', 1).where('advertise_type_id', advertise_type_id)

    }
}

module.exports = new Advertise()