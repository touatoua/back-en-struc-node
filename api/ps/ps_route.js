const express = require('express')
const router = express.Router()
const psController = require('./ps_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')

router.post('/add_brach', psController.addBranch)

router.get('/get_branchs', psController.getBranch)

router.post('/add_promotion', psController.addPromotion)

router.get('/get_promotion', psController.getPromotions)

router.post('/add_insurance', psController.addInsurance)

router.get('/get_insurance', psController.getInsurance)

router.post('/add_act', psController.addAct)

router.get('/get_act', psController.getAct)

router.post('/add_discount', psController.addDiscount)

router.get('/get_discount', psController.getDiscount)

module.exports = router