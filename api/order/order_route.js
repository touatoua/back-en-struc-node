const express = require('express')
const router = express.Router()
const orderController = require('./order_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')
const { validator } = require('../../middleware/validator')
const { check } = require('express-validator')

router.post('/add',
    // [
    //     check('branch_id').isNumeric().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('saler_name').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('getcar_date').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('a_card').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_name').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_idcard').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_tel').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     // check('userinfo_line').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_address').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_sub_district').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_district').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_province').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('userinfo_zipcode').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('contact_address').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('contact_sub_district').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('contact_district').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('contact_province').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('contact_zipcode').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('owner_name').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('owner_idcard').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('owner_address').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('owner_sub_district').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('owner_district').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('owner_province').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('owner_zipcode').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('series_id').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('model_id').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('color_id_1').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('model_code').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('pay_choice').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('day_credit').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('start_price').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('discount_id').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('discount_price').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('vat').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('real_price').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     // check('down').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     // check('sub_down').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('recommend_price').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('other_pay').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('other_pay_price').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('insurance').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('insurance_name').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('insurance_type').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('insurance_premium').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('insurance_pay').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('act').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('act_name').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('act_premium').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('act_pay').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('register').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('register_price').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('register_pay').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('customer_pay').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('order_price').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('order_vat').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('note').isString().withMessage('กรอกข้อมูลไม่ครบ'),
    //     check('note').isString().withMessage('กรอกข้อมูลไม่ครบ'),

    // ],
    // validator(),
    orderController.addOrder)

router.get('/', orderController.getOrders)

router.post('/this', orderController.thisOrder)

module.exports = router