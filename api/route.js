const authen = require('../api/Auth/authen_route')
exports.routeApi = (app, version, io) => {

    
    app.use(version + '/authen', authen)


}