const express = require('express')
const router = express.Router()
const psController = require('./ps_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')
const upload = require('../../middleware/upload')

router.post('/add_brach', psController.addBranch)

router.get('/get_branchs', psController.getBranch)

router.post('/add_promotion', psController.addPromotion)

router.get('/get_promotion', psController.getPromotions)

router.post('/add_insurance', upload.array('file'), psController.addInsurance)

router.get('/get_insurance', psController.getInsurance)

router.post('/add_act', psController.addAct)

router.get('/get_act', psController.getAct)

router.post('/add_discount', psController.addDiscount)

router.get('/get_discount', psController.getDiscount)

router.post('/add_supplier', upload.single('file'), psController.addSupplier)

router.get('/get_suppliers', psController.getSuppliers)

router.post('/add_team', psController.addTeam)

router.get('/get_teams', psController.getTeams)

router.get('/position', psController.getPosition)

router.get('/workflow', psController.getWorkFlow)

router.post('/add_leasing', upload.array('file'), psController.addLeasing)

module.exports = router