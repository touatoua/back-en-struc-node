const express = require('express')
const router = express.Router()
const orderController = require('./order_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')
const { validator } = require('../../middleware/validator')
const { check } = require('express-validator')

router.post('/add',
    [
        check('branch_id').isNumeric().withMessage('กรอกข้อมูลไม่ครบ'),
    ],
    validator(),
    orderController.addOrder)

router.get('/', orderController.getOrders)

router.post('/this', orderController.thisOrder)

module.exports = router