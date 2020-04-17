const { decrypt } = require("../config/helper")
// const { debug } = require('../config/debugging')
const { failed } = require('../config/response')

exports.userToken = () => (req, res, next) => {
    const { cf1 } = req.session
    // debug('session %o', req.session)
    const decode = decrypt(cf1)

    // debug("@check cf1 %o", cf1)
    // debug('@check cf1 decode %o', decode)

    if (decode) {
        req.user_id = decode.user_id
        req.role = decode.role
        console.log(req.role)
        next()
    } else {
        failed(res, 'check token failed')
    }

}

exports.tokenAdmin = () => (req, res, next) => {
    const { cf1 } = req.session
    const decode = decrypt(cf1)

    // debug("@check cf1 %o", cf1)
    // debug('@check cf1 decode %o', decode)
    if (decode) {
        req.user_id = decode.user_id
        req.role = decode.role
        console.log('req.role ', req.role)

        decode.role == 'admin' ? next() : failed(res, 'no permission to access')
    } else {
        failed(res, 'check token failed')
    }

}