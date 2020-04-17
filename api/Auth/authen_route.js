const express = require('express')
const router = express.Router()
const authenController = require('./authen_controller')

router.post('/login', authenController.login)

router.post('/register', authenController.register)

module.exports = router