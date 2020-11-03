const express = require('express')
const router = express.Router()
const orderController = require('./order_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')

router.post('/add', orderController.addOrder)

router.get('/', orderController.getOrders)

router.post('/this', orderController.thisOrder)

module.exports = router