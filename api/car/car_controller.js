const carModel = require('./car_model')
const { success, failed } = require('../../config/response')
const { encrypt, pick } = require('../../config/helper');

class carController {

    async addAccessories(req, res) {
        try {
            const accessories = pick(['accessories_name', 'accessories_price'], req.body);
            await carModel.addAccessories({ ...accessories })
            success(res, 'add success')
        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }

    async addSeries(req, res) {
        try {
            const series = pick(['series_name', 'type'], req.body);
            let addseries = await carModel.addSeries({ ...series })
            const { model } = req.body
            let modelinsert = model.map(el => ({ model_name: el.model_name, series_id: addseries[0] }))
            let addModel = await carModel.addModel(modelinsert)

            let colors = []
            model.map(el =>
                (
                    el.color.map(e =>
                        (
                            colors.push({ ...e, model_id: addModel[0] })
                        )
                    )
                )
            )

            await carModel.addColor(colors)

            success(res, 'add success')

        } catch (error) {
            console.log(error)
            failed(res, 'add fail')
        }
    }



}

module.exports = new carController()