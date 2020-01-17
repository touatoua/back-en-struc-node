const express = require('express')
const router = express.Router()
const authenController = require('./authen_controller')

router.get('/login', authenController.login)


module.exports = router