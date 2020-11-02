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
            let insertAccessoreies = req.body.accessoreies.map(el => ({ accessories_id: el, order_id: insertOrder[0] }))
            await orderModel.addAccessories(insertAccessoreies)

            let insertPromotion = req.body.promotions.map(el => ({ promotion_id: el, order_id: insertOrder[0] }))
            await orderModel.addPromotions(insertPromotion)


            success(res, 'success')
        } catch (error) {
            console.log(error)
            failed(res, 'login fail')
        }
    }



}

module.exports = new orderController()