const knex = require('../../database/knex')

class carModel {
    addAccessories(data) {
        return knex('accessories_tbl').insert(data)
    }

    addSeries(data) {
        return knex('series_tbl').insert(data)
    }

    addModel(data) {
        return knex('model_tbl').insert(data)
    }


    addColor(data) {
        return knex('color_tbl').insert(data)
    }

}

module.exports = new carModel()