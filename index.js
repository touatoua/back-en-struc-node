const express = require('express')
const bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var logger = require('morgan')
var fs = require('fs');
var moment = require('moment')
var date = moment().utc().format('DD-MM-YYYY')
var time = moment().utc().format('HH: mm: ss')
// const helmet = require('helmet')
const socketIO = require('socket.io')
const cors = require("cors");
const rateLimit = require('express-rate-limit')
const COOKIE = require('config').get('COOKIE')
const winston = require('winston');

require('dotenv').config()

const app = express()
const port = 4210
const version = '/api/v1'

// path file
const path = require('path')
app.use(version + '/static', express.static(path.join(__dirname, 'uploads')))

// morgan log
app.use(logger('dev'))
var accessLogStream = fs.createWriteStream(`${__dirname}/logs/${date}.log`, { flags: 'a' })
var configlog = `[${time}] [ip]: :remote-addr :remote-user [method]: :method [url]: :url HTTP/:http-version [status]: :status [response-time]: :response-time ms [client]: :user-agent`
app.use(logger(configlog, { stream: accessLogStream }))

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// cookies
app.enable('trust proxy')
app.use(cookieSession({
    name: 'cf_1',
    keys: [COOKIE.COOKIE_KEY],
    maxAge: COOKIE.COOKIE_EXPIRE * 1000,
    // secure: process.env.NODE_ENV == 'production' ? false : false,
    httpOnly: true,
}))

// set rate limit
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 400
})

app.use(limiter)


// cors
var whitelist = ['http://localhost:3000', 'http://localhost:3001', undefined, '*']
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
    console.log('PS-back is runnung port: ' + port)
})

const io = socketIO.listen(server);

const { routeApi } = require('./api/route')
routeApi(app, version, io)

module.exports = server


