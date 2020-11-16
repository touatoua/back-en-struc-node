const psModel = require('./ps_model')
const { success, failed } = require('../../config/response')
const { encrypt, pick } = require('../../config/helper');
const dayjs = require('dayjs');

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
            let supplier_file = req.file.filename
            await psModel.addSupplier({ ...supplier, supplier_file, user_create: req.user_id, user_update: req.user_id })

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

    async thisSupplier(req, res) {
        try {

            let supplier = await psModel.thisSupplier(req.body.supplier_id)
            supplier[0].supplier_created = dayjs(supplier.supplier_created).format('YYYY-MM-DD')
            success(res, supplier[0])

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async editSupplier(req, res) {
        try {
            const supplier = pick([
                'supplier_id',
                'supplier_code',
                'supplier_name',
                'supplier_type',
                'supplier_created',
                'supplier_address',
                'supplier_sub_district',
                'supplier_district',
                'supplier_province',
                'supplier_zipcode',
                'acept_status',
                'status'
            ], req.body);

            console.log('supplier', supplier)

            await psModel.editSupplier({ ...supplier, user_update: req.user_id })

            success(res, 'edit Success')

        } catch (error) {
            console.log(error)
            failed(res, 'edit fail')
        }
    }

    async editSupplierFile(req, res) {
        try {
            let supplier_file = req.file.filename

            await psModel.editSupplier({ supplier_id: req.body.supplier_id, supplier_file, user_update: req.user_id })
            success(res, 'edit Success')

        } catch (error) {
            console.log(error)
            failed(res, 'edit fail')
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

    async addLeasing(req, res) {
        try {
            const leasing = pick([
                'leasing_name',
                'leasing_branch',
                'leasing_taxid',
                'leasing_type',
                'leasing_tel',
                'status',
                'leasing_address',
                'leasing_sub_district',
                'leasing_district',
                'leasing_province',
                'leasing_zipcode',
                'leasing_interest'
            ], req.body);

            let insertLeasing = await psModel.addLeasing({ ...leasing })
            const files = req.files

            if (files) {
                const addFiles = files.map(el => ({ file: el.filename, name: el.originalname, leasinge_id: insertLeasing[0] }))
                await psModel.addLeasingFile(addFiles)

            }
            success(res, 'add success')

        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getLeasing(req, res) {
        try {
            let leasing = await psModel.getLeasing()

            success(res, leasing)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async thisLeasing(req, res) {
        try {
            let leasing = await psModel.thisLeasing(req.body.leasinge_id)
            leasing[0].files = await psModel.getFileLeasing(req.body.leasinge_id)

            success(res, { ...leasing[0] })

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async editLeasing(req, res) {
        try {
            const leasing = pick([
                'leasinge_id',
                'leasing_name',
                'leasing_branch',
                'leasing_taxid',
                'leasing_type',
                'leasing_tel',
                'status',
                'leasing_address',
                'leasing_sub_district',
                'leasing_district',
                'leasing_province',
                'leasing_zipcode',
                'leasing_interest'
            ], req.body);

            await psModel.editLeasing({ ...leasing })
            success(res, 'edit success')

        } catch (error) {
            console.log(error)
            failed(res, 'edit fail')
        }
    }

    async editFileLeasing(req, res) {
        try {
            const leasing = pick([
                'leasinge_file_id',
                'delete',
            ], req.body);

            if (leasing.delete.length > 0) {
                await psModel.deleteFileLeasing(leasing)
            }

            const files = req.files

            if (files) {
                const addFiles = files.map(el => ({ file: el.filename, name: el.originalname, leasinge_id: insertLeasing[0] }))
                await psModel.addLeasingFile(addFiles)
            }
            success(res, 'edit success')

        } catch (error) {
            console.log(error)
            failed(res, 'edit fail')
        }
    }

    async addLeasingType(req, res) {
        try {
            const leasing = pick([
                'leadsingtype_name',
                'status',
            ], req.body);

            await psModel.addLeasingType({ ...leasing })

            success(res, 'add success')

        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async getLeasingType(req, res) {
        try {
            let type = await psModel.getLeasingType()
            success(res, type)

        } catch (error) {
            console.log(error)
            failed(res, 'get fail')
        }
    }

    async removeLeasingType(req, res) {
        try {
            await psModel.removeLeasingType(req.body.delType)
            success(res, 'del success')

        } catch (error) {
            console.log(error)
            failed(res, 'remove fail')
        }
    }

}

module.exports = new psController()