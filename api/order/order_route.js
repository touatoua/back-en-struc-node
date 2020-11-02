const express = require('express')
const router = express.Router()
const orderController = require('./order_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')

router.post('/add', orderController.addOrder)


module.exports = router