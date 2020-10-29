const carModel = require('./car_model')
const { success, failed } = require('../../config/response')
const { encrypt, pick } = require('../../config/helper');

class carController {

    // async addBranch(req, res) {
    //     try {
    //         const branch = pick(['branch_name',], req.body);
    //         await psModel.addBranch({ ...branch })
    //         success(res, 'success')
    //     } catch (error) {
    //         console.log(error)
    //         failed(res, 'login fail')
    //     }
    // }



}

module.exports = new carController()