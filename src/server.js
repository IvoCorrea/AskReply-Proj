const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()

const database = require('../database/sequelize')
const questionModel = require('../database/models/Question')

async function databaseConnection() {
    try {
        await database.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
databaseConnection()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', require('./routes/home'))
app.use('/ask', require('./routes/ask'))
app.use('/question', require('./routes/question'))

module.exports = app