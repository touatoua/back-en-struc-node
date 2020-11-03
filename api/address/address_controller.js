const AddressModel = require('./AddressModel')
const { success, failed } = require('../../config/response');

class AdvertiseController {
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

            let district = await AddressModel.getdistrict()
            success(res, district);
        } catch (error) {
            console.log(error)
            failed(res, 'fail');
        }
    }
    async getsubdistrict(req, res) {
        try {

            let district = await AddressModel.getsubdistrict()
            success(res, district);
        } catch (error) {
            console.log(error)
            failed(res, 'fail');
        }
    }







};



module.exports = new AdvertiseController();

