const AddressModel = require('./AddressModel')
const { success, failed } = require('../../config/response');

class AddressController {
    async getAllprovince(req, res) {
        try {
            let province = await AddressModel.getAllprovince()

            success(res, province);
        } catch (error) {
            console.log(error)
            failed(res, 'fail');
        }
    }
    async getdistrict(req, res) {
        try {

            let district = await AddressModel.getdistrict(req.body.province_id)
            success(res, district);
        } catch (error) {
            console.log(error)
            failed(res, 'fail');
        }
    }
    async getsubdistrict(req, res) {
        try {

            let district = await AddressModel.getsubdistrict(req.body.amphure_id)
            success(res, district);
        } catch (error) {
            console.log(error)
            failed(res, 'fail');
        }
    }

};



module.exports = new AddressController();

