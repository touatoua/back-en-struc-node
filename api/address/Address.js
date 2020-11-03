const express = require('express')
const router = express.Router()
const Addresscontroller = require('./address_controller')

router.get('/getprovince', Addresscontroller.getAllprovince)
router.get('/getdistrict', Addresscontroller.getdistrict)
router.get('/getsubdistrict', Addresscontroller.getsubdistrict)




module.exports = router