const orderModel = require('./order_model')
const { success, failed } = require('../../config/response')
const { encrypt, pick } = require('../../config/helper');

class orderController {

    async addOrder(req, res) {
        try {
            const order = pick([
                'branch_id',
                'saler_name',
                'getcar_date',
                'serie_car',
                'model_car',
                'color_car1',
                'color_car2',
                'model_code',
                'pay_choice',
                'day_credit',
                'start_price',
                'discount_id',
                'discount_price',
                'vat',
                'real_price',
                'down',
                'sub_down',
                'recommend_price',
                'other_pay',
                'other_pay_price',
                'insurance',
                'insurance_name',
                'insurance_type',
                'insurance_premium',
                'act',
                'act_name',
                'act_premium',
                'act_pay',
                'register',
                'register_price',
                'register_pay',
                'customer_pay',
                'order_price',
                'order_vat',
                'note'
            ], req.body);

            let insertOrder = await orderModel.addOrder({ ...order })

            const userinfo = pick([
                'a_card',
                'userinfo_name',
                'userinfo_idcard',
                'userinfo_tel',
                'userinfo_line',
                'userinfo_address',
                'userinfo_sub_district',
                'userinfo_district',
                'userinfo_province',
                'userinfo_zipcode',
            ], req.body);

            await orderModel.addUserinfo({ ...userinfo, order_id: insertOrder[0] })

            const contactInfo = pick([
                'contact_address',
                'contact_sub_district',
                'contact_district',
                'contact_province',
                'contact_zipcode',
            ], req.body);

            await orderModel.addContactinfo({ ...contactInfo, order_id: insertOrder[0] })

            const ownerInfo = pick([
                'owner_name',
                'owner_idcard',
                'owner_address',
                'owner_sub_district',
                'owner_district',
                'owner_province',
                'owner_zipcode',
            ], req.body);

            await orderModel.addOwnerinfo({ ...ownerInfo, order_id: insertOrder[0] })

            if (req.body.accessoreies) {
                let insertAccessoreies = req.body.accessoreies.map(el => ({ accessories_id: el, order_id: insertOrder[0] }))
                await orderModel.addAccessories(insertAccessoreies)
            }

            if (eq.body.promotions) {
                let insertPromotion = req.body.promotions.map(el => ({ promotion_id: el, order_id: insertOrder[0] }))
                await orderModel.addPromotions(insertPromotion)
            }


            success(res, 'add success')
        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getOrders(req, res) {
        try {
            let orders = await orderModel.getOrders()

            success(res, orders)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async thisOrder(req, res) {
        try {
            let order = await orderModel.thisOrder(req.body.order_id)
            let promotion = await orderModel.thisPromotion(req.body.order_id)
            if (promotion.length > 0) {
                order[0].promotion = promotion
            }
            let accessoreies = await orderModel.thisAccessoreies(req.body.order_id)
            if (accessoreies.length > 0) {
                order[0].accessoreies = accessoreies
            }
            success(res, order[0])
        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }



}

module.exports = new orderController()