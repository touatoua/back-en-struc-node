const orderModel = require('./order_model')
const { success, failed } = require('../../config/response')
const { encrypt, pick } = require('../../config/helper');

class orderController {

    async addOrder(req, res) {
        try {
            const branch = pick([
                'branch_name',
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
                'act',
                'act_pay',
                'register',
                'register_price',
                'customer_pay',
                'order_price',
                'oreder_vat',
                'note'
            ], req.body);

            success(res, 'success')
        } catch (error) {
            console.log(error)
            failed(res, 'login fail')
        }
    }



}

module.exports = new orderController()