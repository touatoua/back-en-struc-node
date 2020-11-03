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

    getOrders() {
        return knex('order_tbl as od')
            .join('order_userinfo as ou', 'ou.order_id', 'od.order_id')
            .join('branch_tbl as b', 'b.branch_id', 'od.branch_id')
            .select(
                'od.order_id',
                'ou.ouserinfo_id',
                'ou.a_card',
                'b.branch_id',
                'b.branch_name',
                'od.saler_name',
                'od.created_at',
                'od.getcar_date',
                'od.acept_status',
                'od.order_status'
            )
    }

    thisOrder(order_id) {
        return knex('order_tbl as od')
            .join('order_userinfo as ou', 'ou.order_id', 'od.order_id')
            .join('contact_userinfo as cu', 'cu.order_id', 'od.order_id')
            .join('owner_userinfo as owu', 'owu.order_id', 'od.order_id')
            .join('branch_tbl as b', 'b.branch_id', 'od.branch_id')
            .where('od.order_id', order_id)
            .select(
                'od.branch_id',
                'b.branch_name',
                'od.saler_name',
                'od.getcar_date',
                'od.serie_car',
                'od.model_car',
                'od.color_car1',
                'od.color_car2',
                'od.model_code',
                'od.pay_choice',
                'od.day_credit',
                'od.start_price',
                'od.discount_id',
                'od.discount_price',
                'od.vat',
                'od.real_price',
                'od.down',
                'od.sub_down',
                'od.recommend_price',
                'od.other_pay',
                'od.other_pay_price',
                'od.insurance',
                'od.insurance_name',
                'od.insurance_type',
                'od.insurance_premium',
                'od.act',
                'od.act_name',
                'od.act_premium',
                'od.act_pay',
                'od.register',
                'od.register_price',
                'od.register_pay',
                'od.customer_pay',
                'od.order_price',
                'od.order_vat',
                'od.note',
                'od.created_at',
                'od.acept_status',
                'od.order_status',
                'ou.ouserinfo_id',
                'ou.a_card',
                'ou.userinfo_name',
                'ou.userinfo_idcard',
                'ou.userinfo_tel',
                'ou.userinfo_line',
                'ou.userinfo_address',
                'ou.userinfo_sub_district',
                'ou.userinfo_district',
                'ou.userinfo_province',
                'ou.userinfo_zipcode',
                'cu.conuserinfo_id',
                'cu.contact_address',
                'cu.contact_sub_district',
                'cu.contact_district',
                'cu.contact_province',
                'owu.own_userinfo_id',
                'owu.owner_name',
                'owu.owner_idcard',
                'owu.owner_address',
                'owu.owner_sub_district',
                'owu.owner_district',
                'owu.owner_province',
                'owu.owner_zipcode'
            )

    }

    thisPromotion(order_id) {
        return knex('order_promotion_tbl as op')
            .join('promotion_tbl as p', 'p.promotion_id', 'op.promotion_id')
            .where('op.order_id', order_id)
            .select(
                'p.promotion_id',
                'p.promotion_name',
                'p.promotion_price')
    }

    thisAccessoreies(order_id) {
        return knex('order_accessories_tbl as oa')
            .join('accessories_tbl as a', 'a.accessories_id', 'oa.accessories_id')
            .where('oa.order_id', order_id)
            .select(
                'a.accessories_id',
                'a.accessories_name',
                'a.accessories_price'
            )

    }




}

module.exports = new orderModel()