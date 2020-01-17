const express = require('express')
const bodyParser = require('body-parser')
var logger = require('morgan')
var fs = require('fs');
var moment = require('moment')
var date = moment().utc().format('DD-MM-YYYY')
var time = moment().utc().format('HH: mm: ss')
// const helmet = require('helmet')
const socketIO = require('socket.io')
const cors = require("cors");

const app = express()
const port = 3099
const version = '/api/v1'

// path file
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

// morgan log
app.use(logger('dev'))
var accessLogStream = fs.createWriteStream(`${__dirname}/logs/${date}.log`, { flags: 'a' })
var configlog = `[${time}] [ip]: :remote-addr :remote-user [method]: :method [url]: :url HTTP/:http-version [status]: :status [response-time]: :response-time ms [client]: :user-agent`
app.use(logger(configlog, { stream: accessLogStream }))

// cors
var whitelist = ['http://172.16.63.15:3000', 'http://172.16.63.56:3000', 'http://localhost:3000', undefined, '*']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200,
    preflightContinue: true,
    credentials: true,
}

// Then pass them to cors:
app.use(cors(corsOptions));

const server = app.listen(port, function () {
    console.log('Server is runnung port: ' + port)
})

const io = socketIO.listen(server);

const { routeApi } = require('./api/route')
routeApi(app, version, io)

module.exports = server


