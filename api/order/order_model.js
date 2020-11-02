const knex = require('../../database/knex')

class orderModel {
    addBranch(data) {
        return knex('branch_tbl').insert(data)
    }

    addOrder(data) {
        return knex('order_tbl').insert(data)
    }

    addUserinfo(data) {
        return knex('order_userinfo').insert(data)
    }

    addContactinfo(data) {
        return knex('contact_userinfo').insert(data)
    }

    addOwnerinfo(data) {
        return knex('owner_userinfo').insert(data)
    }

    addAccessories(data) {
        return knex('order_accessories_tbl').insert(data)
    }

    addPromotions(data) {
        return knex('order_promotion_tbl').insert(data)
    }



}

module.exports = new orderModel()