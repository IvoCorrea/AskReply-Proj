const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()

const database = require('../database/sequelize')
const questionModel = require('../database/Question')

async function main() {
    try {
        await database.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main()

const appHome = require('./routes/home')
const askTo = require('./routes/askTo')
const postForm = require('./routes/postForm')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', appHome)
app.use('/ask', askTo)
app.use('/ask/postform', postForm)

module.exports = app