const authenModel = require('./authen_model')
const { success, failed } = require('../../config/response')
const bcrypt = require('bcryptjs')
const moment = require('moment-timezone');
const { encrypt } = require('../../config/helper')

class authenController {

    async login(req, res) {
        try {
            const { username, password } = req.body

            let user = await authenModel.getUserbyUsername(username)
            const checkPassword = await bcrypt.compare(password, user[0].password)

            if (!checkPassword) {
                return failed(res, 'username or password invalid')
            }
            
            const _cf1 = user[0]
            const cf1 = encrypt(_cf1)
            req.session = { cf1 }

            let userData = {
                user_id: user[0].user_id,
                username: user[0].username,
                first_name: user[0].first_name,
                last_name: user[0].last_name,
                role: user[0].role
            }

            success(res, userData)
        } catch (error) {
            console.log(error)
            failed(res, 'login fail')
        }
    }

    async register(req, res) {
        try {
            const { username, first_name, last_name, email, role } = req.body
            const password = await bcrypt.hash(req.body.password.replace(/\s/g, ''), 10)
            const create_at = moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');

            let checkUsername = await authenModel.getUserbyUsername(username)

            if (checkUsername.length > 0) {
                return failed(res, 'username นี้ถูกใช้แล้ว')
            }

            await authenModel.insertUser({ username, first_name, last_name, email, role, password, create_at })

            success(res, 'success')
        } catch (error) {
            console.log(error)
            failed(res, 'login fail')
        }
    }

}

module.exports = new authenController()