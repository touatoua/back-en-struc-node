const express = require('express')
const router = express.Router()
const authenController = require('./authen_controller')
const { userToken, tokenAdmin } = require('../../middleware/token')

router.post('/login', authenController.login)

router.post('/register', authenController.register)

router.get('/check', userToken(), authenController.check)

router.get('/logout', authenController.logout)

router.get('/users', authenController.getUsers)

module.exports = router