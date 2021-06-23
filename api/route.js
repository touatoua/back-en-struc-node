const authen = require('../api/Auth/authen_route')
const address = require('./address/Address')

exports.routeApi = (app, version, io) => {


    app.use(version + '/authen', authen)

    app.use(version + '/address', address)


}