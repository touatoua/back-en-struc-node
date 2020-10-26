const express = require('express')
const router = express.Router()
const authenController = require('./authen_controller')
const { userToken } = require('../../middleware/token')

router.post('/login', authenController.login)

router.post('/register', authenController.register)

router.get('/check', userToken(), authenController.check)


module.exports = router