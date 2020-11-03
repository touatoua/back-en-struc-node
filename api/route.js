const authen = require('../api/Auth/authen_route')
const ps = require('./ps/ps_route')
const order = require('./order/order_route')
const car = require('./car/car_route')
const address = require('./address/Address')

exports.routeApi = (app, version, io) => {


    app.use(version + '/authen', authen)
    app.use(version + '/ps', ps)
    app.use(version + '/order', order)
    app.use(version + '/car', car)
    app.use(version + '/address', address)


}