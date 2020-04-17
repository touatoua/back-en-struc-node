const CryptoJS = require('crypto-js')
const { SECRET } = require('config')
// const { err } = require('./debugging')
const randomstring = require('randomstring')
const moment = require('moment-timezone')
const os = require('os')
// const knex = require('../knex')

exports.emit = (arr, obj) => Object.keys(obj)
    .filter(el => !arr.some(e => e === el))
    .reduce((acc, el) =>
        obj[el] || obj[el] == 0 ? ({ ...acc, [el]: obj[el] }) : acc
        , {})

exports.encrypt = data => {
    if (!data) {
        return undefined
    }
    try {
        const msg = JSON.stringify(data)
        const chiper = CryptoJS.RC4.encrypt(msg, SECRET)
        return chiper.toString()
    } catch (error) {
        err(error.message, 'encrypt failed')
        return undefined
    }

}

exports.decrypt = chiper => {
    if (!chiper) {
        return undefined
    }
    try {
        const bite = CryptoJS.RC4.decrypt(chiper, SECRET)
        const data = bite.toString(CryptoJS.enc.Utf8)
        return JSON.parse(data)
    } catch (error) {
        err(error.message, 'decrypt failed')
        return undefined
    }
}

exports.checkID = id => {

    if (id.length != 13) return false;
    let sum = 0

    for (let i = 0; i < 12; i++) {
        sum += parseFloat(id.charAt(i)) * (13 - i);
    }

    if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12))) {
        return false;
    }

    return true;
}

exports.not = fn => (...arg) => !fn(...arg)
exports.is_form_finish = status => status > 5

exports.getIP = (key) => {
    const ifaces = "172.0.0.1"
    // console.log("ifaces ",ifaces)
    // console.log("key ",key)
    // console.log("ifaces ",ifaces)
    const ORIGIN = `http://${ifaces}:${process.env.PORT}/api/v1/static/`
    return { ORIGIN }
}

exports.indentity = v => v
exports.compose = (...FN) => params => FN.reduce((acc, fn) => fn(acc), params)
exports.when = condition => condition ? 1 : 0

// obj operator
// **** pick object like lodash ****
exports.pick = (arr, obj) => Object.assign({}, ...arr.map(key => ({ [key]: obj[key] })))
// take object form key
exports.takeObj = key => obj => obj[key]
// insert obj to array obj
exports.insertObj = key => value => ele => ({ ...ele, [key]: value })

exports.truncate = (tables = []) => Promise.all(tables.map(el => unit_truncate(el)))

// const unit_truncate = async table => {
//     await knex.raw(`SET FOREIGN_KEY_CHECKS = 0;`)
//     await knex.raw(`TRUNCATE ${table};`)
//     await knex.raw(`SET FOREIGN_KEY_CHECKS = 1;`)
//     return Promise.resolve(true)
// }