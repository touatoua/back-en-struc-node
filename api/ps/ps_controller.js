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

    async addInsurance(req, res) {
        try {
            const insurance = pick([
                'insurance_name',
                'insurance_branch',
                'tax_code',
                'supplier_type',
                'tel',
                'status',
                'insurance_address',
                'insurance_sub_district',
                'insurance_district',
                'insurance_provice',
                'insurance_zipcode'
            ], req.body);
            const files = req.files
            let insertInsurance = await psModel.addInsurance({ ...insurance })

            if (files) {
                const addFiles = files.map(el => ({ file: el.filename, name: el.originalname, insurance_id: insertInsurance[0] }))
                await psModel.addInsuranceFile(addFiles)

            }

            success(res, 'add success')

        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getInsurance(req, res) {
        try {
            let insurance = await psModel.getInsurance()
            success(res, insurance)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async addAct(req, res) {
        try {
            const act = pick(['act_name'], req.body);

            await psModel.addAct({ ...act })
            success(res, 'add success')

        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getAct(req, res) {
        try {
            let act = await psModel.getAct()
            success(res, act)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async addDiscount(req, res) {
        try {
            const discount = pick(['discount_name', 'discount_price'], req.body);

            await psModel.addDiscount({ ...discount })
            success(res, 'add success')

        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getDiscount(req, res) {
        try {
            let discount = await psModel.getDiscount()
            success(res, discount)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async addSupplier(req, res) {
        try {
            const supplier = pick([
                'supplier_code',
                'supplier_name',
                'supplier_type',
                'supplier_created',
                'supplier_address',
                'supplier_sub_district',
                'supplier_district',
                'supplier_province',
                'supplier_zipcode'
            ], req.body);

            await psModel.addSupplier({ ...supplier })

            success(res, 'add success')
        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getSuppliers(req, res) {
        try {
            let suppliers = await psModel.getSuppliers()
            success(res, suppliers)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async addTeam(req, res) {
        try {
            const team = pick([
                'team_name',
                'branch_id',
                'work_flow',
            ], req.body);

            await psModel.addTeam({ ...team })
            success(res, 'add success')

        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getTeams(req, res) {
        try {
            let team = await psModel.getTeams()
            success(res, team)
        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getPosition(req, res) {
        try {
            let position = await psModel.getPosition()
            success(res, position)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async getWorkFlow(req, res) {
        try {
            let work = await psModel.getWorkFlow()
            success(res, work)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

}

module.exports = new psController()