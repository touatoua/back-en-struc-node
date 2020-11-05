const express = require('express')
const router = express.Router()
const Addresscontroller = require('./address_controller')

router.get('/getprovince', Addresscontroller.getAllprovince)
router.post('/getdistrict', Addresscontroller.getdistrict)
router.post('/getsubdistrict', Addresscontroller.getsubdistrict)




module.exports = router