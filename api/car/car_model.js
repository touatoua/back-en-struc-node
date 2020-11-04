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

    getSeries() {
        return knex('series_tbl')
            .select(
                'series_id',
                'series_name',
                'type'
            )
    }

    getModel(series_id) {
        return knex('model_tbl')
            .where('series_id', series_id)
            .select(
                'model_id',
                'model_name')
    }

    getColors(model_id) {
        return knex('color_tbl')
            .where('model_id', model_id)
            .select(
                'color_id',
                'color_name'
            )
    }
}

module.exports = new carModel()