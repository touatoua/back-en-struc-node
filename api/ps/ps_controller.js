const psModel = require('./ps_model')
const { success, failed } = require('../../config/response')
const { encrypt, pick } = require('../../config/helper');

class psController {

    async addBranch(req, res) {
        try {
            const branch = pick(['branch_name',], req.body);
            await psModel.addBranch({ ...branch })
            success(res, 'add success')
        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getBranch(req, res) {
        try {
            let branch = await psModel.getBranch()

            success(res, branch)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async addPromotion(req, res) {
        try {
            const promotion = pick(['promotion_name', 'promotion_price'], req.body);
            await psModel.addPromotion({ ...promotion })
            success(res, 'add success')
        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getPromotions(req, res) {
        try {
            let promotions = await psModel.getPromotions()
            success(res, promotions)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }



}

module.exports = new psController()