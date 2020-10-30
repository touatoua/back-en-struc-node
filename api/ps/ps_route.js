const express = require('express')
const router = express.Router()
const psController = require('./ps_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')

router.post('/add_brach', psController.addBranch)

router.post('/add_promotion', psController.addPromotion)

module.exports = router