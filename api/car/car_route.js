const express = require('express')
const router = express.Router()
const carController = require('./car_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')

router.post('/add_accessories', carController.addAccessories)

router.post('/add_series', carController.addSeries)

router.get('/series', carController.getSeries)

router.post('/model', carController.getModel)

router.post('/color', carController.getColors)

module.exports = router