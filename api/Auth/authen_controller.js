const authenModel = require('./authen_model')
const { success, failed } = require('../../config/response')
const bcrypt = require('bcryptjs')
const { encrypt, pick } = require('../../config/helper');

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

            delete user[0].password

            success(res, user[0])
        } catch (error) {
            console.log(error)
            failed(res, 'login fail')
        }
    }

    async register(req, res) {
        try {
            const user = pick([
                'username',
                'firstname',
                'lastname',
                'position_id',
                'team_id',
                'department_id',
                'branch',
                'email',
                'role',
                'status',
                'employee_no'
            ], req.body);
            const password = await bcrypt.hash(req.body.password.replace(/\s/g, ''), 10)

            let checkUsername = await authenModel.getUserbyUsername(user.username)

            if (checkUsername.length > 0) {
                return failed(res, 'username นี้ถูกใช้แล้ว')
            }

            await authenModel.insertUser({ ...user, password })

            success(res, 'success')
        } catch (error) {
            console.log(error)
            failed(res, 'register fail')
        }
    }

    async check(req, res) {
        try {
            success(res, 'success')
        } catch (error) {
            console.log(error)
            failed(res, 'register fail')
        }
    }

    async logout(req, res) {
        try {
            req.session = null

            success(res, 'logout success')
        } catch (error) {
            failed(res, 'logout failed')
        }
    }

    async getUsers(req, res) {
        try {
            let users = await authenModel.getUsers()
            success(res, users)

        } catch (error) {
            failed(res, 'get failed')

        }
    }


}

module.exports = new authenController()