const authenModel = require('./authen_model')
const { success, failed } = require('../../config/response')

class authenController {

    async login(req, res) {
        try {


            let user_id = await authenModel.login()
            console.log("user_id ",user_id)
            // let datauser = await authenModel.fetUserData(user_id)


            success(res, user_id)
        } catch (error) {
            console.log(error)
            failed(res, 'login fail')
        }
    }

}

module.exports = new authenController()